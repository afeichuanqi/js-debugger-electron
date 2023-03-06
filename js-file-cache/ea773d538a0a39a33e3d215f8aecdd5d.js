function toast(e) {
  cc11001100_hook("e", e, "function-parameter");
  var s = cc11001100_hook("s", '<div class="toast-for-result"><span></span></div>', "var-init");
  $("body").append(s), $(".toast-for-result").fadeIn(300).find("span").text(e), setTimeout(function () {
    $(".toast-for-result").fadeOut(300), $(".toast-for-result").remove();
  }, 2e3);
}
$(function () {
  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    var s = cc11001100_hook("s", new RegExp("^\\s+|\\s+$"), "var-init"),
      t = cc11001100_hook("t", $("#kw").val().replace(s, ""), "var-init");
    ns_c({
      fm: cc11001100_hook("fm", "behs", "object-key-init"),
      tab: cc11001100_hook("tab", e, "object-key-init"),
      query: cc11001100_hook("query", encodeURIComponent(t), "object-key-init"),
      un: cc11001100_hook("un", encodeURIComponent(bds.comm.user || ""), "object-key-init")
    });
  }
  function s(e, s) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    var t,
      a = cc11001100_hook("a", S, "var-init");
    e.mouseover(function () {
      s.show(), u && u.hide(), n(I), t && (clearTimeout(t), t = cc11001100_hook("t", !1, "assign"));
    }), e.mouseout(function () {
      t && (clearTimeout(t), t = cc11001100_hook("t", !1, "assign")), t = cc11001100_hook("t", setTimeout(function () {
        s.hide();
      }, a), "assign");
    }), s.mouseover(function () {
      u && u.hide(), n(I), t && (clearTimeout(t), t = cc11001100_hook("t", !1, "assign"));
    }), s.mouseout(function () {
      t && (clearTimeout(t), t = cc11001100_hook("t", !1, "assign")), t = cc11001100_hook("t", setTimeout(function () {
        s.hide();
      }, a), "assign");
    });
  }
  function t() {
    return bds.comm && bds.comm.ishome && bds.comm.sIndex;
  }
  function n() {
    I && clearTimeout(I), T && clearTimeout(T), y && clearTimeout(y);
  }
  function a(e, s) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    var t = cc11001100_hook("t", 56, "var-init");
    t += cc11001100_hook("t", bds.comm.username ? $("#s-top-username").width() : $("#s-top-loginbtn").width(), "assign");
    var a = cc11001100_hook("a", t - (e.width() - s.width()) / 2, "var-init");
    e.css({
      display: cc11001100_hook("display", "block", "object-key-init"),
      right: cc11001100_hook("right", a, "object-key-init")
    }), $("#s-user-name-menu").hide(), n();
  }
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    y = cc11001100_hook("y", setTimeout(function () {
      e.hide();
    }, S), "assign");
  }
  function i() {
    var e = cc11001100_hook("e", m.offset(), "var-init"),
      s = cc11001100_hook("s", m.height(), "var-init"),
      t = cc11001100_hook("t", 48, "var-init");
    t += cc11001100_hook("t", bds.comm.username ? $(".username").width() : $(".lb[name=tj_login]").width(), "assign");
    var a = cc11001100_hook("a", t - (u.width() - m.width()) / 2, "var-init");
    bds.comm.ishome ? u && u.css({
      left: cc11001100_hook("left", e.left - 20, "object-key-init"),
      top: cc11001100_hook("top", e.top + s + 5, "object-key-init")
    }) : u && u.css({
      right: cc11001100_hook("right", a - 4, "object-key-init"),
      top: cc11001100_hook("top", 48, "object-key-init")
    }), u && u.show(), p && p.hide(), b && b.hide(), m.addClass("pfhover"), n(I);
  }
  function r() {
    I = cc11001100_hook("I", setTimeout(function () {
      u && u.hide(), m && m.removeClass("pfhover");
    }, S), "assign");
  }
  function l() {
    b && b.hide(), u && u.hide(), p && p.hide();
  }
  function d() {
    var s,
      n,
      a,
      o,
      a,
      i,
      r = cc11001100_hook("r", $("<a class='setpref first' href='javascript:;'><span class='set'>搜索设置</span></a>"), "var-init"),
      l = cc11001100_hook("l", navigator.userAgent.toLowerCase().match(/msie\s+(\d*)/), "var-init"),
      d = cc11001100_hook("d", (l && 6 == l[1], []), "var-init"),
      m = cc11001100_hook("m", navigator.userAgent, "var-init"),
      p = cc11001100_hook("p", Boolean(m.match(/(iPad)/)) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, "var-init"),
      b = cc11001100_hook("b", m.indexOf("compatible") > -1 && m.indexOf("MSIE") > -1 || document.documentMode, "var-init"),
      h = cc11001100_hook("h", p || b, "var-init");
    if (h || (i = cc11001100_hook("i", $("<span class='set-result-tts'><a class='set-open-result-tts' href='javascript:;'><span class='set'>开启播报</span></a><a class='set-close-result-tts' href='javascript:;'><span class='set'>关闭播报</span></a></span>"), "assign")), !t()) {
      u = cc11001100_hook("u", $(".bdpfmenu"), "assign");
      var f = cc11001100_hook("f", '<div class="bdnuarrow"><em></em><i></i></div>', "var-init");
      u.append(f);
    }
    if (r.on("mousedown", function () {
      return e("tj_setting"), !1;
    }), r.on("click", function (e) {
      e.preventDefault(), D({
        callback: function () {
          bds.event.trigger("bd.se.showpanel", {
            tab: cc11001100_hook("tab", "general", "object-key-init")
          });
        }
      });
    }), s = cc11001100_hook("s", $("<a href='//www.baidu.com/gaoji/advanced.html' target='_blank'><span class='set'>高级搜索</span></a>"), "assign"), s.on("mousedown", function () {
      return e("tj_advsearch"), !1;
    }), s.on("click", function (e) {
      e.preventDefault(), D({
        callback: function () {
          bds.event.trigger("bd.se.showpanel", {
            tab: cc11001100_hook("tab", "advanced", "object-key-init")
          });
        }
      });
    }), bds && bds.comm && bds.comm.ishome && bds.comm.skin && (!window.s_domain || !window.s_domain.base || "home" != window.s_domain.base)) {
      o = cc11001100_hook("o", $("<a href='javascript:' target='_blank'>换肤设置</a>"), "assign");
      var v = cc11001100_hook("v", Cookie.get("H_PS_SKIN_GI") || "0", "var-init");
      (!v || parseInt(v) < 4) && o.append('<span class="c-icon c-icon-reddot"></span>'), o.on("click", function (e) {
        $_this = cc11001100_hook("$_this", this, "assign"), e.preventDefault(), D({
          callback: function () {
            bds.event.trigger("bd.se.showpanel", {
              tab: cc11001100_hook("tab", "skin", "object-key-init")
            }), $(".c-icon-reddot", $_this).hide();
          }
        });
      });
    }
    if (bds.comm.ishome && window.s_domain && window.s_domain.base && "home" == window.s_domain.base ? n = cc11001100_hook("n", $("<a href='https://www.baidu.com/duty/privacysettings.html' target='_blank'>隐私设置</a>").on("mousedown", function () {
      return e("tj_history"), !1;
    }), "assign") : (n = cc11001100_hook("n", $("<a class='last' href='javascript:;'><span class='set'>隐私设置</span></a>").on("mousedown", function () {
      return e("tj_history"), !1;
    }), "assign"), n.on("click", function () {
      return bds.comm.username ? (location.href = cc11001100_hook("location.href", "https://www.baidu.com/duty/privacysettings.html", "assign"), !1) : void (bds.se.login && bds.se.login.open && bds.se.login.open(function (e) {
        return 1 == e ? (location.href = cc11001100_hook("location.href", "https://www.baidu.com/duty/privacysettings.html", "assign"), !1) : void 0;
      }, !0));
    })), (bds.comm.supportis || 2 == Cookie.get("ORIGIN")) && (a = cc11001100_hook("a", 0 == UPS.get("isSwitch") ? $("<a href='javascript:;'><span class='set'>开启预测</span></a>").click(function () {
      return UPS.set("isSwitch", 1), UPS.save(function () {
        location.reload();
      }), !1;
    }) : $("<a href='javascript:;'><span class='set'>关闭预测</span></a>").click(function () {
      return UPS.set("isSwitch", 0), UPS.save(function () {
        location.reload();
      }), !1;
    }), "assign")), bds && bds.comm && bds.comm.ishome ? bds.comm.skin ? (d = cc11001100_hook("d", [r, s, o, a, n], "assign"), $(window).on("index_off", function () {
      o.hide(), $("[data-tabid='skin']").hide();
    })) : d = cc11001100_hook("d", [r, s, a, n], "assign") : d = cc11001100_hook("d", [r, s, a, n, i], "assign"), t()) {
      var g = cc11001100_hook("g", $("#s-user-setting-menu .s-user-setting-pfmenu"), "var-init");
      g.html();
    }
    for (var w = cc11001100_hook("w", 0, "var-init"), _ = cc11001100_hook("_", d.length, "var-init"); _ > w; w++) {
      var k = cc11001100_hook("k", d[w], "var-init");
      k && (t() ? g.append(k) : u.append(k));
    }
    "open" === localStorage.getItem("set_result_tts") ? ($(".set-open-result-tts").css({
      display: cc11001100_hook("display", "none", "object-key-init")
    }), $(".set-close-result-tts").css({
      display: cc11001100_hook("display", "inline-block", "object-key-init")
    })) : ($(".set-open-result-tts").css({
      display: cc11001100_hook("display", "inline-block", "object-key-init")
    }), $(".set-close-result-tts").css({
      display: cc11001100_hook("display", "none", "object-key-init")
    })), $(".set-open-result-tts").on("click", function (e) {
      localStorage.setItem("set_result_tts", "open"), $(".set-open-result-tts").css({
        display: cc11001100_hook("display", "none", "object-key-init")
      }), $(".set-close-result-tts").css({
        display: cc11001100_hook("display", "inline-block", "object-key-init")
      }), $("body").addClass("open-result-tts"), c({
        rsv_ct: cc11001100_hook("rsv_ct", "2", "object-key-init"),
        rsv_cst: cc11001100_hook("rsv_cst", "2", "object-key-init")
      });
      var s = cc11001100_hook("s", $(".tts").length, "var-init");
      c({
        rsv_ct: cc11001100_hook("rsv_ct", "2", "object-key-init"),
        rsv_cst: cc11001100_hook("rsv_cst", "4", "object-key-init"),
        rsv_clk_extra: cc11001100_hook("rsv_clk_extra", JSON.stringify({
          nums: cc11001100_hook("nums", s, "object-key-init")
        }), "object-key-init")
      }), require(["modules/event/event"], function (e) {
        e.default.trigger("result.open_tts");
      }), e.preventDefault();
    }), $(".set-close-result-tts").on("click", function (e) {
      localStorage.setItem("set_result_tts", "close"), $(".set-open-result-tts").css({
        display: cc11001100_hook("display", "inline-block", "object-key-init")
      }), $(".set-close-result-tts").css({
        display: cc11001100_hook("display", "none", "object-key-init")
      }), $("body").removeClass("open-result-tts"), toast("已为您关闭播报"), c({
        rsv_ct: cc11001100_hook("rsv_ct", "2", "object-key-init"),
        rsv_cst: cc11001100_hook("rsv_cst", "3", "object-key-init")
      }), require(["modules/event/event"], function (e) {
        e.default.trigger("result.close_tts");
      }), e.preventDefault();
    });
  }
  !function (e, s, t, n) {
    var a = cc11001100_hook("a", bds && bds.comm && bds.comm.samNewBox, "var-init"),
      o = cc11001100_hook("o", $("#form"), "var-init");
    e && s && (e.on("mouseover", function () {
      e.addClass("ipthover"), a && (n.addClass("btnfocus"), o.addClass("sam_form_shadow"));
    }).on("mouseout", function () {
      if (e.removeClass("ipthover"), a) {
        var s = cc11001100_hook("s", e.hasClass("iptfocus"), "var-init");
        s || (n.removeClass("btnfocus"), o.removeClass("sam_form_shadow"));
      }
    }), s.on("focus", function () {
      e.addClass("iptfocus"), a && (n.addClass("btnfocus"), o.addClass("sam_form_shadow"));
    }).on("blur", function () {
      e.removeClass("iptfocus"), a && (n.removeClass("btnfocus"), o.removeClass("sam_form_shadow"));
    }).on("render", function () {
      var s = cc11001100_hook("s", e.parent().find(".bdsug"), "var-init"),
        t = cc11001100_hook("t", s.find("li").length, "var-init");
      t >= 5 ? s.addClass("bdsugbg") : s.removeClass("bdsugbg");
    })), t && n && t.on("mouseover", function () {
      n.addClass("btnhover"), a && (e.addClass("ipthover"), n.addClass("btnfocus"), o.addClass("sam_form_shadow"));
    }).on("mouseout", function () {
      if (n.removeClass("btnhover"), a) {
        var s = cc11001100_hook("s", e.hasClass("iptfocus"), "var-init");
        s || (n.removeClass("btnfocus"), o.removeClass("sam_form_shadow")), e.removeClass("ipthover");
      }
      n.removeClass("s_btn_h");
    }).on("mousedown", function () {
      n.removeClass("btnhover"), n.addClass("s_btn_h");
    }).on("mouseup", function () {
      n.addClass("btnhover"), n.removeClass("s_btn_h");
    });
  }($(".s_ipt_wr"), $(".s_ipt"), $(".s_btn_wr"), $(".s_btn"));
  var m,
    u,
    p,
    b,
    h = cc11001100_hook("h", ($("#wrapper"), $("#u")), "var-init"),
    f = cc11001100_hook("f", $("#u .pf,#u1 .pf,#u_sp .pf"), "var-init"),
    v = cc11001100_hook("v", 0, "var-init"),
    g = cc11001100_hook("g", $("<input type='hidden' name='rsv_enter' value='1'>"), "var-init");
  $("#form").append(g), $("#su").on("mousedown", function () {
    g.val(0);
  }), $(document).on("click", function () {
    l();
  }), h.delegate(".username", "mouseover", function () {
    0 == $(this).nextAll(".usermenu").length && (p = cc11001100_hook("p", $('<div class="usermenu"><div class="bdnuarrow"><em></em><i></i></div><a class="first" href="https://www.baidu.com/my/index" onmousedown="return user_c({\'fm\':\'set\',\'tab\':\'uc_center\'})"><span class="set">个人中心</span></a><a href="http://passport.baidu.com" name="tj_user"><span class="set">帐号设置</span></a><a class="set-feedback" href="javascript:;"><span class="set">意见反馈</span></a><a class="last logout"  name="tj_logout" onmousedown="return user_c({\'fm\':\'set\',\'tab\':\'logout\'})"><span class="set">退出</span></a></div>').insertAfter(this), "assign"), p.delegate(".set-feedback", "click", function () {
      return $(".fb-feedback-right-dialog").length > 0 ? !1 : (e("tj_feedback"), void require(["plugins/feedback_suggest"], function (e) {
        e.init(), $(".feedback").on("click", function () {
          e.destroy();
        });
      }));
    }), p.delegate(".logout", "click", function () {
      $(".search-quit-dialog-wrap").show(), c({
        rsv_ct: cc11001100_hook("rsv_ct", "5", "object-key-init"),
        rsv_cst: cc11001100_hook("rsv_cst", "1", "object-key-init")
      });
    }), b = cc11001100_hook("b", $('<div class="bdnuarrow arrowusermenu"></div>').insertAfter(this), "assign"), p.click(function (e) {
      e.stopPropagation();
    }), b.click(function (e) {
      e.stopPropagation();
    }), s($(this), p.add(b)));
    var t = cc11001100_hook("t", $(this).offset(), "var-init"),
      n = cc11001100_hook("n", t.left, "var-init"),
      a = cc11001100_hook("a", ($(this).width() - (p ? p.width() : 0)) / 2 + 24, "var-init");
    p && p.css({
      top: cc11001100_hook("top", 48, "object-key-init"),
      right: cc11001100_hook("right", a, "object-key-init")
    }), b && b.offset({
      top: cc11001100_hook("top", t.top + 18, "object-key-init"),
      left: cc11001100_hook("left", n, "object-key-init")
    });
  }), f.on("click", function () {
    return !1;
  });
  var w = cc11001100_hook("w", $("#s-user-setting-menu"), "var-init");
  if (t()) {
    var _ = cc11001100_hook("_", 0, "var-init"),
      k = cc11001100_hook("k", {}, "var-init");
    k.baseParams = cc11001100_hook("k.baseParams", {
      ct: cc11001100_hook("ct", 2, "object-key-init"),
      qid: cc11001100_hook("qid", s_session.seqId, "object-key-init"),
      sid: cc11001100_hook("sid", s_session.sid, "object-key-init"),
      ssid: cc11001100_hook("ssid", s_session.portrait, "object-key-init"),
      logid: cc11001100_hook("logid", s_session.logId || "0", "object-key-init"),
      _r: cc11001100_hook("_r", Math.random(), "object-key-init")
    }, "assign");
    var C = cc11001100_hook("C", window.Thunder.get(k), "var-init"),
      j = cc11001100_hook("j", {
        tid: cc11001100_hook("tid", 11545, "object-key-init"),
        logFrom: cc11001100_hook("logFrom", "feed_index", "object-key-init"),
        logInfo: cc11001100_hook("logInfo", "tts_show", "object-key-init"),
        logExtra: {
          type: cc11001100_hook("type", "tts_switch_show", "object-key-init")
        }
      }, "var-init");
    $("#s-usersetting-top").on("mouseenter", function (e) {
      var s = cc11001100_hook("s", $(this), "var-init");
      if (e.stopPropagation(), e.preventDefault(), _ || (d(), _ = cc11001100_hook("_", 1, "assign")), a(w, s), 0 != $(".s-set-homepage-tts").length) {
        var t = cc11001100_hook("t", $.extend(!0, {}, j), "var-init");
        t.logExtra = cc11001100_hook("t.logExtra", $.stringify(t.logExtra), "assign"), C.send(t);
      }
    }).on("mouseleave", function () {
      o(w);
    }), w.on("mouseenter", function () {
      n();
    }).on("mouseleave", function () {
      o(w);
    });
  }
  f.on("mouseenter", function (e) {
    if (v = cc11001100_hook("v", !!u, "assign"), m = cc11001100_hook("m", $(this), "assign"), h = cc11001100_hook("h", $(this).parent(), "assign"), e.stopPropagation(), e.preventDefault(), v || (d(), v = cc11001100_hook("v", 1, "assign"), u.show().hover(function () {
      i();
    }, function () {
      r();
    })), $(".usermenu") && $(".usermenu").hide(), i(), bds && bds.comm && bds.comm.ishome && bds.comm.skin) {
      var s = cc11001100_hook("s", Cookie.get("H_PS_SKIN_GO") || "0", "var-init");
      Cookie.set("H_PS_SKIN_GO", parseInt(s) + 4, document.domain, "/", new Date(new Date().getTime() + 5184e6)), $(".frontpage-rt-guide").hide();
      var t = cc11001100_hook("t", Cookie.get("H_PS_SKIN_GI") || "0", "var-init");
      t && parseInt(t) > 3 ? $(".bdpfmenu .c-icon-reddot").hide() : Cookie.set("H_PS_SKIN_GI", parseInt(t) + 1, document.domain, "/", new Date(new Date().getTime() + 5184e6));
    }
    0 !== $(".set-result-tts").length && c({
      rsv_ct: cc11001100_hook("rsv_ct", "2", "object-key-init"),
      rsv_cst: cc11001100_hook("rsv_cst", "1", "object-key-init")
    });
  }).on("mouseleave", function () {
    r();
  });
  var I,
    T,
    y,
    S = cc11001100_hook("S", 200, "var-init"),
    x = cc11001100_hook("x", bds.comm.isNode || 0, "var-init"),
    P = cc11001100_hook("P", bds && bds.comm && bds.comm.personalData && bds.comm.personalData.homepageTTS && ("" === bds.comm.personalData.homepageTTS.value || "1" === bds.comm.personalData.homepageTTS.value) ? 1 : 0, "var-init");
  x && (P = cc11001100_hook("P", s_session && s_session.userTips && s_session.userTips.homepageTTS && ("" === s_session.userTips.homepageTTS || "1" === s_session.userTips.homepageTTS) ? 1 : 0, "assign")), P ? ($(".set-close-homepage-tts").css({
    display: cc11001100_hook("display", "inline-block", "object-key-init")
  }), $(".set-open-homepage-tts").css({
    display: cc11001100_hook("display", "none", "object-key-init")
  })) : ($(".set-close-homepage-tts").css({
    display: cc11001100_hook("display", "none", "object-key-init")
  }), $(".set-open-homepage-tts").css({
    display: cc11001100_hook("display", "inline-block", "object-key-init")
  }));
  var D = function (e) {
    var s = cc11001100_hook("s", e.callback, "var-init"),
      t = cc11001100_hook("t", D.status, "var-init");
    if ($.isFunction(s) && D.callbacklist.push(s), "pendding" !== t) if ("loaded" !== t) D.status = cc11001100_hook("D.status", "pendding", "assign"), $.ajax({
      dataType: cc11001100_hook("dataType", "script", "object-key-init"),
      cache: cc11001100_hook("cache", !0, "object-key-init"),
      url: cc11001100_hook("url", "https://pss.bdstatic.com/r/www/cache/static/protocol/https/home/js/instant_5e824e6.js", "object-key-init"),
      success: function () {
        if (D.callbacklist.length > 0) {
          for (var e = cc11001100_hook("e", 0, "var-init"), s = cc11001100_hook("s", D.callbacklist.length, "var-init"); s > e; e++) D.callbacklist[e]();
          D.callbacklist = cc11001100_hook("D.callbacklist", [], "assign");
        }
        if (D.status = cc11001100_hook("D.status", "loaded", "assign"), bds && bds.comm && bds.comm.ishome && bds.comm.skin) {
          var t = cc11001100_hook("t", Cookie.get("H_PS_SKIN_GI") || "0", "var-init");
          Cookie.set("H_PS_SKIN_GI", parseInt(t) + 4, document.domain, "/", new Date(new Date().getTime() + 5184e6));
        }
      }
    });else if (D.callbacklist.length > 0) {
      for (var n = cc11001100_hook("n", 0, "var-init"), a = cc11001100_hook("a", D.callbacklist.length, "var-init"); a > n; n++) D.callbacklist[n]();
      D.callbacklist = cc11001100_hook("D.callbacklist", [], "assign");
    }
  };
  D.callbacklist = cc11001100_hook("D.callbacklist", [], "assign"), D.status = cc11001100_hook("D.status", "ready", "assign"), bds.event && bds.event.on("bd.se.loadpanel", function (e) {
    var s = cc11001100_hook("s", e.data, "var-init");
    D({
      callback: function () {
        bds.event.trigger("bd.se.showpanel", s);
      }
    });
  });
  var u;
}), $(function () {
  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    var s = cc11001100_hook("s", new RegExp("^\\s+|\\s+$"), "var-init"),
      t = cc11001100_hook("t", $("#kw").get(0).value.replace(s, ""), "var-init");
    ns_c({
      fm: cc11001100_hook("fm", "behs", "object-key-init"),
      tab: cc11001100_hook("tab", e, "object-key-init"),
      query: cc11001100_hook("query", encodeURIComponent(t), "object-key-init"),
      un: cc11001100_hook("un", encodeURIComponent(bds.comm.user || ""), "object-key-init")
    });
  }
  function s() {
    h && clearTimeout(h), f && clearTimeout(f);
  }
  function t() {
    var e = cc11001100_hook("e", $(".briguide"), "var-init");
    e && e.hide(), l && (l.css({
      display: cc11001100_hook("display", "block", "object-key-init"),
      opacity: cc11001100_hook("opacity", "0", "object-key-init"),
      "min-height": cc11001100_hook("min-height", m, "object-key-init")
    }), "undefined" == typeof document.body.style.maxHeight && l.css({
      height: cc11001100_hook("height", m, "object-key-init")
    }), l.find(".briscrollwrapper").scrollTop(0), l.css({
      display: cc11001100_hook("display", "none", "object-key-init"),
      opacity: cc11001100_hook("opacity", "1", "object-key-init")
    }).fadeIn(v)), c && c.show(), r && r.render($(window).height() - p.offset().top - 34 - 20), s(f);
  }
  function n() {
    f = cc11001100_hook("f", setTimeout(function () {
      l && l.fadeOut(v), c && c.hide();
    }, v), "assign");
  }
  function a() {
    c && c.hide(), l && l.hide();
  }
  function o() {
    b || (c = cc11001100_hook("c", $("<div>", {
      "class": cc11001100_hook("class", "bdnuarrow bdbriarrow", "object-key-init")
    }), "assign"), c.appendTo(u));
  }
  function i() {
    function s(e) {
      cc11001100_hook("e", e, "function-parameter");
      function s(e, s, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return t && (e = cc11001100_hook("e", e > t ? t : e, "assign")), e >= s ? e : s;
      }
      function t() {
        N.call(window, {
          value: cc11001100_hook("value", L, "object-key-init"),
          scale: cc11001100_hook("scale", S, "object-key-init")
        });
      }
      function n() {
        p && clearInterval(p), o(), p = cc11001100_hook("p", setInterval(function () {
          X ? o() : clearInterval(p);
        }, 100), "assign");
      }
      function a() {
        b && clearInterval(b), i(), b = cc11001100_hook("b", setInterval(function () {
          Z ? i() : clearInterval(b);
        }, 100), "assign");
      }
      function o() {
        var e = cc11001100_hook("e", L - T, "var-init");
        e = cc11001100_hook("e", 0 > e ? 0 : e, "assign"), d(e);
      }
      function i() {
        var e = cc11001100_hook("e", L + T, "var-init");
        e = cc11001100_hook("e", e > 1 ? 1 : e, "assign"), d(e);
      }
      function r(e) {
        cc11001100_hook("e", e, "function-parameter");
        e = cc11001100_hook("e", window.event || e, "assign");
        var t = cc11001100_hook("t", s(e.clientY - F, B, Y), "var-init");
        return L = cc11001100_hook("L", (t - B) / (Y - B), "assign"), $(K).css({
          top: cc11001100_hook("top", t + "px", "object-key-init")
        }), !1;
      }
      function c() {
        return $(f).removeClass("bdbriscroll-ctrl-scroll-hover"), $(f).removeClass("bdbriscroll-ctrl-scroll-touch"), $(K).removeClass("bdbriscroll-slider-hover"), $(K).removeClass("bdbriscroll-slider-touch"), $(g).css({
          "-moz-user-select": cc11001100_hook("-moz-user-select", "", "object-key-init")
        }), $(g).css({
          "-webkit-user-select": cc11001100_hook("-webkit-user-select", "", "object-key-init")
        }), Q && window.clearInterval(Q), document.onselectstart = cc11001100_hook("document.onselectstart", W ? W : function () {
          return !0;
        }, "assign"), $(document).unbind("mousemove", r), $(document).unbind("mouseup", c), $(K).addClass("bdbriscroll-slider OP_LOG_BTN"), J = cc11001100_hook("J", 0, "assign"), !1;
      }
      function l(e) {
        cc11001100_hook("e", e, "function-parameter");
        d((e.offsetY || e.layerY) / A);
      }
      function d(e, s) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        e = cc11001100_hook("e", 0 > e ? 0 : e, "assign"), e = cc11001100_hook("e", e > 1 ? 1 : e, "assign"), L = cc11001100_hook("L", e, "assign");
        var n = cc11001100_hook("n", (Y - B) * L + B, "var-init");
        $(K).css({
          top: cc11001100_hook("top", n + "px", "object-key-init")
        }), s || t();
      }
      function m(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (e.preventDefault(), e = cc11001100_hook("e", e.originalEvent, "assign")) {
          this.onwheel = cc11001100_hook("this.onwheel", 1, "assign");
          var s = cc11001100_hook("s", (-e.wheelDelta || e.detail && 40 * e.detail || 0) / j, "var-init"),
            t = cc11001100_hook("t", s, "var-init"),
            n = cc11001100_hook("n", t > 0 ? v.scrollTop + 2 : v.scrollTop - 2, "var-init");
          $(g).css({
            zoom: cc11001100_hook("zoom", "1", "object-key-init")
          }), n > 0 && n < g.offsetHeight - v.offsetHeight ? (v.scrollTop += cc11001100_hook("v.scrollTop", t, "assign"), L = cc11001100_hook("L", v.scrollTop / (v.scrollHeight - v.offsetHeight), "assign")) : C && "none" != $(f).css("display") || (document.documentElement.scrollTop += cc11001100_hook("document.documentElement.scrollTop", t, "assign"), document.body.scrollTop += cc11001100_hook("document.body.scrollTop", t, "assign"));
        }
      }
      function u(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (S = cc11001100_hook("S", e > 10 ? 10 : e, "assign"), 1 >= S) return void $(K).css({
          display: cc11001100_hook("display", "none", "object-key-init")
        });
        $(K).css({
          display: cc11001100_hook("display", "block", "object-key-init")
        });
        var s = cc11001100_hook("s", A - 2 * R, "var-init");
        M = cc11001100_hook("M", parseInt(s / S), "assign"), M = cc11001100_hook("M", 15 > M ? 15 : M, "assign"), Y = cc11001100_hook("Y", A - R - M, "assign"), $(K).css({
          height: cc11001100_hook("height", M + "px", "object-key-init")
        });
      }
      this.options = cc11001100_hook("this.options", e, "assign");
      var p,
        b,
        h,
        f = cc11001100_hook("f", e.scrollbar || $("<div>").get(0), "var-init"),
        v = cc11001100_hook("v", e.content, "var-init"),
        g = cc11001100_hook("g", $(e.content).children().get(0), "var-init"),
        w = cc11001100_hook("w", e.initPos || 0, "var-init"),
        _ = cc11001100_hook("_", e.initDom || null, "var-init"),
        k = cc11001100_hook("k", e.mousewheel || !0, "var-init"),
        C = cc11001100_hook("C", e.mousewheellock || !1, "var-init"),
        j = cc11001100_hook("j", e.wheeldelta || 1, "var-init"),
        I = cc11001100_hook("I", e.ctrlblock || 0, "var-init"),
        T = cc11001100_hook("T", e.step || .1, "var-init"),
        y = cc11001100_hook("y", e.length, "var-init"),
        S = cc11001100_hook("S", e.scale || 0, "var-init"),
        x = cc11001100_hook("x", (e.theme || "", e.refresh || !1), "var-init"),
        P = cc11001100_hook("P", 0, "var-init"),
        D = cc11001100_hook("D", 0, "var-init"),
        H = cc11001100_hook("H", 0, "var-init"),
        N = function (e) {
          var s = cc11001100_hook("s", parseInt(P - D), "var-init");
          if (s > 0) {
            var e = cc11001100_hook("e", e.value, "var-init");
            v.scrollTop = cc11001100_hook("v.scrollTop", s * e, "assign");
          }
        },
        z = cc11001100_hook("z", $("<div>", {
          "class": cc11001100_hook("class", "bdbriscroll-up", "object-key-init")
        }).get(0), "var-init"),
        O = cc11001100_hook("O", $("<div>", {
          "class": cc11001100_hook("class", "bdbriscroll-down", "object-key-init")
        }).get(0), "var-init"),
        G = cc11001100_hook("G", $("<div>", {
          "class": cc11001100_hook("class", "bdbriscroll-axis", "object-key-init")
        }).get(0), "var-init"),
        K = cc11001100_hook("K", $("<div>", {
          "class": cc11001100_hook("class", "bdbriscroll-slider OP_LOG_BTN", "object-key-init")
        }).get(0), "var-init"),
        U = cc11001100_hook("U", $("<div>", {
          "class": cc11001100_hook("class", "bdbriscroll-s-top", "object-key-init")
        }).get(0), "var-init"),
        q = cc11001100_hook("q", $("<div>", {
          "class": cc11001100_hook("class", "bdbriscroll-s-bottom", "object-key-init")
        }).get(0), "var-init"),
        E = cc11001100_hook("E", $("<div>", {
          "class": cc11001100_hook("class", "bdbriscroll-s-block", "object-key-init")
        }).get(0), "var-init"),
        A = cc11001100_hook("A", 0, "var-init"),
        R = cc11001100_hook("R", I || 0, "var-init"),
        M = cc11001100_hook("M", 0, "var-init"),
        B = cc11001100_hook("B", R, "var-init"),
        Y = cc11001100_hook("Y", 0, "var-init"),
        L = cc11001100_hook("L", 0, "var-init"),
        F = cc11001100_hook("F", 0, "var-init"),
        J = cc11001100_hook("J", 0, "var-init"),
        W = cc11001100_hook("W", null, "var-init"),
        Q = cc11001100_hook("Q", null, "var-init"),
        V = function () {
          X = cc11001100_hook("X", !1, "assign"), Z = cc11001100_hook("Z", !1, "assign");
        };
      if (e.scrollbar || $(v).after($(f)), $(v).addClass("bdbriscroll-ctrl-content"), $(f).addClass("bdbriscroll-ctrl-scroll"), $(f).attr("data-click", '{fm:"beha"}'), this.render = cc11001100_hook("this.render", function (e) {
        x || clearInterval(h);
        try {
          D = cc11001100_hook("D", v.offsetHeight, "assign"), H = cc11001100_hook("H", f.offsetHeight, "assign"), P = cc11001100_hook("P", g.offsetHeight, "assign");
        } catch (t) {}
        if (A = cc11001100_hook("A", e || y || D - 22, "assign"), $(f).css({
          height: cc11001100_hook("height", A + "px", "object-key-init")
        }), $(G).css({
          height: cc11001100_hook("height", A + "px", "object-key-init")
        }), A >= 0 && P >= 0) {
          A + 22 >= P ? $(f).hide() : $(f).show(), S != P / A && (S = cc11001100_hook("S", P / A, "assign"), u(S), d(0));
          var n = cc11001100_hook("n", 0, "var-init");
          if (_) {
            n = cc11001100_hook("n", _.offsetTop + _.scrollHeight >= P ? 1 : _.offsetTop + _.scrollHeight <= D ? 0 : _.offsetTop / P, "assign"), d(n);
            var a = cc11001100_hook("a", s(H * n, B), "var-init");
            a > A - M && (a = cc11001100_hook("a", A - M, "assign"));
          }
          if (w) {
            d(w);
            var a = cc11001100_hook("a", s(H * w, B), "var-init");
            a > A - M && (a = cc11001100_hook("a", A - M, "assign"));
          }
        }
      }, "assign"), h = cc11001100_hook("h", setInterval(this.render, 50), "assign"), $(f).empty(), I && z.offsetHeight == O.offsetHeight) {
        var X = cc11001100_hook("X", !1, "var-init"),
          Z = cc11001100_hook("Z", !1, "var-init");
        f.appendChild(z), f.appendChild(O), $(z).on("mousedown", function () {
          n(), X = cc11001100_hook("X", !0, "assign");
        }), $(O).on("mousedown", function () {
          a(), Z = cc11001100_hook("Z", !0, "assign");
        }), $(z).on("mouseup", function () {
          $(f).removeClass("bdbriscroll-ctrl-scroll-touch"), X = cc11001100_hook("X", !1, "assign");
        }), $(O).on("mouseup", function () {
          $(f).removeClass("bdbriscroll-ctrl-scroll-touch"), Z = cc11001100_hook("Z", !1, "assign");
        }), $(document).on("mouseup", V);
      }
      f.appendChild(G), f.appendChild(K), K.appendChild(U), K.appendChild(q), K.appendChild(E), K.onDragstart = cc11001100_hook("K.onDragstart", function () {
        return !1;
      }, "assign"), $(K).on("mouseover", function () {
        $(K).addClass("bdbriscroll-slider-hover"), $(f).addClass("bdbriscroll-ctrl-scroll-hover");
      }), $(K).on("mousedown", function () {
        $(K).addClass("bdbriscroll-slider-touch"), $(f).addClass("bdbriscroll-ctrl-scroll-touch");
      }), $(K).on("mouseout", function () {
        $(K).removeClass("bdbriscroll-slider-hover");
      }), $(K).on("mouseup", function () {
        $(K).removeClass("bdbriscroll-slider-touch");
      }), $(f).on("mouseover", function () {
        $(f).addClass("bdbriscroll-ctrl-scroll-hover");
      }), $(f).on("mousedown", function () {
        $(f).addClass("bdbriscroll-ctrl-scroll-touch");
      }), $(f).on("mouseout", function () {
        $(f).removeClass("bdbriscroll-ctrl-scroll-hover");
      }), $(f).on("mouseup", function () {
        $(f).removeClass("bdbriscroll-ctrl-scroll-touch");
      }), $(G).on("click", l), k && !this.onwheel && ($(v).hasClass("bdbriscroll-onwheel") || ($(v).on("DOMMouseScroll", m), $(v).on("mousewheel", m), $(v).addClass("bdbriscroll-onwheel"))), v && $(v).on("scroll", function () {
        J || d(v.scrollTop / (v.scrollHeight - v.offsetHeight), 1);
      }), $(K).on("mousedown", function (e) {
        return W = cc11001100_hook("W", document.onselectstart, "assign"), document.onselectstart = cc11001100_hook("document.onselectstart", function () {
          return !1;
        }, "assign"), Q = cc11001100_hook("Q", window.setInterval(t, 40), "assign"), $(g).css({
          "-moz-user-select": cc11001100_hook("-moz-user-select", "none", "object-key-init")
        }), $(g).css({
          "-webkit-user-select": cc11001100_hook("-webkit-user-select", "none", "object-key-init")
        }), F = cc11001100_hook("F", e.clientY - K.offsetTop, "assign"), $(document).on("mousemove", r), $(document).on("mouseup", c), J = cc11001100_hook("J", 1, "assign"), e.preventDefault(), !1;
      }), S > 1 && u(S), this.dispose = cc11001100_hook("this.dispose", function () {
        document.onselectstart = cc11001100_hook("document.onselectstart", W ? W : function () {
          return !0;
        }, "assign"), $(document).unbind("mousemove", r), $(document).unbind("mouseup", c), $(document).unbind("mouseup", V), Q && clearInterval(Q), p && clearInterval(p), b && clearInterval(b), h && clearInterval(h);
      }, "assign");
    }
    if (l = cc11001100_hook("l", $("<div>", {
      "class": cc11001100_hook("class", "bdbri", "object-key-init")
    }).appendTo($(".head_wrapper")), "assign"), l.on("click", function (e) {
      e.stopPropagation();
    }), u.hasClass("bdbrilink")) ;else {
      l.addClass("bdbriimg").html($(".mnav_nuomi").length ? "<div class='bdmainlink'><div class='bdbriimgtitle'>更多产品</div><div class='briscrollwrapperContainer'><div class='briscrollwrapper'><div class='bdbriwrapper'><a href='http://zhidao.baidu.com' name='tj_zhidao'><span class='bdbriimgitem_2'></span>知道</a><a href='http://music.taihe.com' name='tj_mp3'><span class='bdbriimgitem_3'></span>音乐</a><a href='http://image.baidu.com' name='tj_img'><span class='bdbriimgitem_4'></span>图片</a><a href='http://wenku.baidu.com' name='tj_wenku'><span class='bdbriimgitem_5'></span>文库</a><a href='http://top.baidu.com' name='tj_bang'><span class='bdbriimgitem_6'></span>风云榜</a><a href='http://e.baidu.com/?refer=888' name='tj_tuiguang'><span class='bdbriimgitem_7'></span>百度推广</a><div class='bdbrievenmore'><a href='//www.baidu.com/more/' name='tj_more'>全部产品&gt;&gt;</a></div></div></div></div></div>" : 1 == window._sam_ns_nuomi ? "<div class='bdmainlink'><div class='bdbriimgtitle'>更多产品</div><div class='briscrollwrapperContainer'><div class='briscrollwrapper'><div class='bdbriwrapper'><a href='https://www.hao123.com' name='tj_hao123'><span class='bdbriimgitem_hao123'></span>hao123</a><a href='http://music.taihe.com' name='tj_mp3'><span class='bdbriimgitem_3'></span>音乐</a><a href='http://image.baidu.com' name='tj_img'><span class='bdbriimgitem_4'></span>图片</a><a href='http://zhidao.baidu.com' name='tj_zhidao'><span class='bdbriimgitem_2'></span>知道</a><a href='http://wenku.baidu.com' name='tj_wenku'><span class='bdbriimgitem_5'></span>文库</a><a href='http://top.baidu.com' name='tj_bang'><span class='bdbriimgitem_6'></span>风云榜</a><a href='http://e.baidu.com/?refer=888' name='tj_tuiguang'><span class='bdbriimgitem_7'></span>百度推广</a><div class='bdbrievenmore'><a href='//www.baidu.com/more/' name='tj_more'>全部产品&gt;&gt;</a></div></div></div></div></div>" : 2 == window._sam_ns_nuomi ? "<div class='bdmainlink'><div class='bdbriimgtitle'>更多产品</div><div class='briscrollwrapperContainer'><div class='briscrollwrapper'><div class='bdbriwrapper'><a href='http://v.baidu.com' name='tj_video'><span class='bdbriimgitem_video'></span>视频</a><a href='http://music.taihe.com' name='tj_mp3'><span class='bdbriimgitem_3'></span>音乐</a><a href='http://image.baidu.com' name='tj_img'><span class='bdbriimgitem_4'></span>图片</a><a href='http://zhidao.baidu.com' name='tj_zhidao'><span class='bdbriimgitem_2'></span>知道</a><a href='http://wenku.baidu.com' name='tj_wenku'><span class='bdbriimgitem_5'></span>文库</a><a href='http://top.baidu.com' name='tj_bang'><span class='bdbriimgitem_6'></span>风云榜</a><a href='http://e.baidu.com/?refer=888' name='tj_tuiguang'><span class='bdbriimgitem_7'></span>百度推广</a><div class='bdbrievenmore'><a href='//www.baidu.com/more/' name='tj_more'>全部产品&gt;&gt;</a></div></div></div></div></div>" : 3 == window._sam_ns_nuomi ? "<div class='bdmainlink'><div class='bdbriimgtitle'>更多产品</div><div class='briscrollwrapperContainer'><div class='briscrollwrapper'><div class='bdbriwrapper'><a href='http://e.baidu.com?refer=889' name='tj_yingxiao'><span class='bdbriimgitem_1'></span>百度营销</a><a href='http://zhidao.baidu.com' name='tj_zhidao'><span class='bdbriimgitem_2'></span>知道</a><a href='http://music.taihe.com' name='tj_mp3'><span class='bdbriimgitem_3'></span>音乐</a><a href='http://image.baidu.com' name='tj_img'><span class='bdbriimgitem_4'></span>图片</a><a href='http://wenku.baidu.com' name='tj_wenku'><span class='bdbriimgitem_5'></span>文库</a><a href='http://top.baidu.com' name='tj_bang'><span class='bdbriimgitem_6'></span>风云榜</a><div class='bdbrievenmore'><a href='//www.baidu.com/more/' name='tj_more'>全部产品&gt;&gt;</a></div></div></div></div></div>" : "<div class='bdmainlink'><div class='bdbriimgtitle'>更多产品</div><div class='briscrollwrapperContainer'><div class='briscrollwrapper'><div class='bdbriwrapper'><a href='http://e.baidu.com?refer=889' name='tj_yingxiao'><span class='bdbriimgitem_1'></span>百度营销</a><a href='http://music.taihe.com' name='tj_mp3'><span class='bdbriimgitem_3'></span>音乐</a><a href='http://image.baidu.com' name='tj_img'><span class='bdbriimgitem_4'></span>图片</a><a href='http://zhidao.baidu.com' name='tj_zhidao'><span class='bdbriimgitem_2'></span>知道</a><a href='http://wenku.baidu.com' name='tj_wenku'><span class='bdbriimgitem_5'></span>文库</a><a href='http://top.baidu.com' name='tj_bang'><span class='bdbriimgitem_6'></span>风云榜</a><div class='bdbrievenmore'><a href='//www.baidu.com/more/' name='tj_more'>全部产品&gt;&gt;</a></div></div></div></div></div>");
      var t = cc11001100_hook("t", (l.find(".bdothlink"), l.find(".bdbrievenmore"), l.find(".briscrollwrapper")), "var-init"),
        n = cc11001100_hook("n", $(window).height() - p.offset().top - 34, "var-init");
      t.height(n), r = cc11001100_hook("r", new s({
        content: cc11001100_hook("content", t.get(0), "object-key-init"),
        length: cc11001100_hook("length", n - 20, "object-key-init"),
        mousewheellock: cc11001100_hook("mousewheellock", !0, "object-key-init"),
        wheeldelta: cc11001100_hook("wheeldelta", 5, "object-key-init")
      }), "assign"), $(window).on("resize", function () {
        var e = cc11001100_hook("e", $(window).height() - p.offset().top - 34, "var-init");
        t.height(e), r && r.render(e - 20);
      });
    }
    d = cc11001100_hook("d", 600, "assign"), m = cc11001100_hook("m", $(window).height() < d ? d : $(window).height(), "assign"), $(window).on("resize", function () {
      m = cc11001100_hook("m", $(window).height() < d ? d : $(window).height(), "assign"), l && l.css({
        "min-height": cc11001100_hook("min-height", m, "object-key-init")
      }), $.support.leadingWhitespace || l && l.css({
        height: cc11001100_hook("height", m, "object-key-init")
      });
    }), $.each(l.find("a"), function (s, t) {
      $(t).on("mousedown", function () {
        $(t).attr("name") && e($(t).attr("name"));
      });
    });
  }
  var r,
    c,
    l,
    d,
    m,
    u = cc11001100_hook("u", ($("#wrapper"), $("#u1")), "var-init"),
    p = cc11001100_hook("p", $("#u1 .bri"), "var-init"),
    b = cc11001100_hook("b", 0, "var-init");
  !function () {
    if (bds && bds.comm && bds.comm.ishome && bds.comm.skin) {
      if (!window.s_domain || !window.s_domain.base || "home" != window.s_domain.base) {
        var e = cc11001100_hook("e", Cookie.get("H_PS_SKIN") ? Cookie.get("H_PS_SKIN") : "0", "var-init"),
          s = cc11001100_hook("s", Cookie.get("H_PS_SKIN_GO") || "0", "var-init");
        if ((!s || parseInt(s) < 4) && ($skinGuide = cc11001100_hook("$skinGuide", $("<div>", {
          "class": cc11001100_hook("class", "frontpage-rt-guide", "object-key-init")
        }), "assign"), ns_c({
          tj_skinChangeTip: cc11001100_hook("tj_skinChangeTip", "skin_tip_show", "object-key-init")
        }), $skinGuide.appendTo("#wrapper"), Cookie.set("H_PS_SKIN_GO", parseInt(s) + 1, document.domain, "/", new Date(new Date().getTime() + 5184e6))), e && "0" != e) {
          var t = cc11001100_hook("t", $(".s-skin-container"), "var-init"),
            n = cc11001100_hook("n", "http://" + ((parseInt(e) + 1) % 8 + 1) + ".su.bdimg.com/skin/" + e + ".jpg?2", "var-init");
          n = cc11001100_hook("n", bds.util.domain && bds.util.domain.get ? bds.util.domain.get(n) : n, "assign");
          var a = cc11001100_hook("a", navigator && navigator.userAgent ? navigator.userAgent : "", "var-init");
          a.match(/(msie [2-8])/i) ? t.find("img")[0] ? $(t[0]).attr("style", "background-color:#aaa;").find("img").attr("src", n) : $(t[0]).attr("style", "background-color:#aaa;").html('<div class="topbanner"></div><img style="top:0;left:0;width:100%;position:fixed" src="' + n + '">') : ($(t[0]).attr("style", 'background-color:#aaa;background-image:url("' + n + '");'), $(t[0]).find("img").remove());
        }
      }
      $(window).on("index_off", function () {
        $("#head").removeClass("s-skin-hasbg").addClass("skin-no-bg"), $("#ftCon").removeClass("s-skin-hasbg").addClass("skin-no-bg"), $(".s-skin-container").hide();
        var e = cc11001100_hook("e", $("#lg img").val(0), "var-init");
        e.attr("src", "//www.baidu.com/img/bd_logo1.png");
      });
    }
  }(), $(document).on("click", function () {
    a();
  }), $("#kw").on("click", function () {
    a();
  }), p.on("click", function (e) {
    return e.stopPropagation(), e.preventDefault(), !1;
  });
  var h,
    f,
    v = cc11001100_hook("v", 100, "var-init");
  p.on("mouseover", function (e) {
    e.stopPropagation(), e.preventDefault(), o(), b || (i(), b = cc11001100_hook("b", 1, "assign"), l.hover(function () {
      s(f);
    }, function () {
      n();
    }), c.hover(function () {}, function () {
      n();
    })), t();
  }).on("mouseout", function () {}), $(window).on("index_off", function () {
    l && l.hide(), c && c.hide();
  }), $.each($(".bri-btlinks").find("a"), function (s, t) {
    $(t).on("mousedown", function () {
      $(t).attr("name") && e($(t).attr("name"));
    });
  });
});