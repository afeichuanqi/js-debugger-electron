var bds = cc11001100_hook("bds", window.bds || {}, "var-init");
bds.se = cc11001100_hook("bds.se", bds.se || {}, "assign");
bds.se.message = cc11001100_hook("bds.se.message", function (g) {
  var y = cc11001100_hook("y", true, "var-init"),
    l = cc11001100_hook("l", false, "var-init"),
    j,
    v = cc11001100_hook("v", ['<div id="bds-message-wrapper" class="s-mod-msg" style="display:none;">', '<div class="msg-arrow">', "<em></em>", "</div>", '<div class="s-mod-msg-bg">', '<div class="msg-area" id="s_msg_content"></div>', "</div>", "</div>"].join(""), "var-init"),
    e = cc11001100_hook("e", {
      msg: cc11001100_hook("msg", ['<div id="s_base_nomsg" class="s-base-nomsg">', '<p class="no-msg-tip">您目前没有新消息</p>', '<div class="no-msg-btns">', '<div class="msg-btn msg-clear-btn no-use">', '<span class="bg"></span><span class="title">清空消息</span>', "</div>", '<div class="msg-btn msg-setting-btn" id="s_msg_setting">', '<a href="http://www.baidu.com/home/page/show/pagesetting#home_setting" target="_blank" hidefocus class="title">消息设置</a><span class="bg"></span>', "</div>", "</div>", "</div>"].join(""), "object-key-init"),
      noset: cc11001100_hook("noset", ['<div class="noset-msg-tip" id="s_base_noset">', "<span>您尚未订制提醒消息，立即</span>", '<div class="msg-btn msg-setting-btn" id="s_msg_add">', '<span class="bg"></span><span class="title">订制消息</span>', "</div>", "</div>"].join(""), "object-key-init")
    }, "var-init"),
    z = cc11001100_hook("z", {
      ie: cc11001100_hook("ie", /msie (\d+\.\d+)|Trident/i.test(navigator.userAgent) ? document.documentMode || +RegExp["\x241"] : undefined, "object-key-init")
    }, "var-init"),
    n = cc11001100_hook("n", z.ie === 6, "var-init"),
    m = cc11001100_hook("m", z.ie === 7, "var-init"),
    i = cc11001100_hook("i", z.ie === 8, "var-init"),
    a;
  function s(C) {
    cc11001100_hook("C", C, "function-parameter");
    if (!l) {
      C = cc11001100_hook("C", g.extend({
        button: cc11001100_hook("button", g("#imsg"), "object-key-init"),
        refer: cc11001100_hook("refer", g("#u"), "object-key-init")
      }, C), "assign");
      a = cc11001100_hook("a", C.button, "assign");
      refer = cc11001100_hook("refer", C.refer, "assign");
      refer.after(v);
      j = cc11001100_hook("j", g("#bds-message-wrapper"), "assign");
      g.ajax("/home/msg/data/personalcontent", {
        type: cc11001100_hook("type", "GET", "object-key-init"),
        dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
        data: {
          num: cc11001100_hook("num", 8, "object-key-init"),
          _req_seqid: cc11001100_hook("_req_seqid", bds.comm.qid, "object-key-init"),
          sid: cc11001100_hook("sid", bds.comm.sid, "object-key-init")
        }
      }).done(function (E) {
        if (E.errNo === "0") {
          var D = cc11001100_hook("D", E.content, "var-init");
          if (D && D.length) {
            g("#lm").css("visibility", "hidden");
            D = cc11001100_hook("D", D.slice(0, 8), "assign");
            g(".msg-area", j).append('<div id="s_msg_tips" class="s-msg-tips"></div>');
            a.append("<span id='s_msg_count' class='s-msg-count'>(" + D.length + ")</span>");
            d.init(D);
          } else {
            g("#lm").css("visibility", "visible");
          }
        }
        a.on("click", function (F) {
          F.preventDefault();
        });
        q();
      });
      l = cc11001100_hook("l", true, "assign");
    }
  }
  function r() {
    var C = cc11001100_hook("C", document.createElement("link"), "var-init");
    C.setAttribute("rel", "stylesheet");
    C.setAttribute("type", "text/css");
    C.setAttribute("href", bds.su.urStatic + "/static/message/css/message_041c3208.css");
    document.getElementsByTagName("head")[0].appendChild(C);
  }
  function q() {
    a.on("click", function () {
      b(true);
      B.send({
        clickType: cc11001100_hook("clickType", "button", "object-key-init"),
        title: cc11001100_hook("title", "消息", "object-key-init"),
        url: cc11001100_hook("url", "", "object-key-init")
      });
    });
    g("#s_msg_clear").on("click", function () {
      B.send({
        clickType: cc11001100_hook("clickType", "clear", "object-key-init"),
        title: cc11001100_hook("title", "清空消息", "object-key-init"),
        url: cc11001100_hook("url", "", "object-key-init")
      });
    });
    g("#s_hasmsg_setting").on("click", function (C) {
      B.send({
        clickType: cc11001100_hook("clickType", "setting", "object-key-init"),
        title: cc11001100_hook("title", "消息设置", "object-key-init"),
        url: cc11001100_hook("url", "", "object-key-init")
      });
    });
  }
  function b(C) {
    cc11001100_hook("C", C, "function-parameter");
    if (!j[0] || !j.is(":visible")) {
      k(C, false);
    } else {
      u();
    }
    y = cc11001100_hook("y", false, "assign");
  }
  function k(C, D) {
    cc11001100_hook("C", C, "function-parameter");
    cc11001100_hook("D", D, "function-parameter");
    if (C && y) {
      g("body").on("mousedown", function (F) {
        var E = cc11001100_hook("E", g(F.target), "var-init");
        if (E[0].id === "s_msg_count" || E[0].id === "imsg" || E.parents(".s-msg")[0]) {
          return;
        }
        u();
      });
      j.on("mousedown", function (E) {
        E.stopPropagation();
      });
    }
    w(C, D);
  }
  function w(E, G) {
    cc11001100_hook("E", E, "function-parameter");
    cc11001100_hook("G", G, "function-parameter");
    if (g(".s-msg-tips", j)[0]) {
      x(g(".s-msg-base", j));
      o(g(".s-msg-tips", j));
    } else {
      if (!g(".s-msg-base", j)[0]) {
        g(".msg-area", j).append("<div id='s_msg_base' class='s-msg-base'></div>");
      }
      if (g(".s-base-nomsg", j)[0]) {
        o(g(".s-base-nomsg", j));
      } else {
        g(".s-msg-base", j).append(e.msg);
        g(".msg-setting-btn", j).on("click", function () {
          p();
        });
      }
      g(".s-msg-base", j).addClass("no-msgs").removeClass("no-set-msg");
      x(g(".noset-msg-tip", j));
      o(g(".s-msg-base", j));
      x(g(".s-msg-tips", j));
    }
    var C = cc11001100_hook("C", a, "var-init");
    var D = cc11001100_hook("D", g(document.body).width() - C[0].offsetWidth - C.offset().left - 169, "var-init");
    if (n) {
      D = cc11001100_hook("D", D - 1, "assign");
    } else {
      if (i) {
        D = cc11001100_hook("D", D + 2, "assign");
      }
    }
    if (D < 20) {
      D = cc11001100_hook("D", 20, "assign");
    }
    j.css("right", D).show();
    var F = cc11001100_hook("F", C.offset().left - j.offset().left, "var-init");
    if (n && g(".iebrowser_banner")[0]) {
      j.css({
        top: cc11001100_hook("top", 65, "object-key-init")
      });
    }
    g(".msg-arrow", j).css("left", F + "px");
  }
  function x(C) {
    cc11001100_hook("C", C, "function-parameter");
    C.hide();
    if (n || m) {
      C.css({
        visibility: cc11001100_hook("visibility", "hidden", "object-key-init")
      });
    }
  }
  function o(C) {
    cc11001100_hook("C", C, "function-parameter");
    C.show();
    if (n || m) {
      C.css({
        visibility: cc11001100_hook("visibility", "visible", "object-key-init")
      });
    }
  }
  function A() {
    var C = cc11001100_hook("C", "", "var-init");
    if (g(".s-msg-tips", j).is(":visible")) {
      C = cc11001100_hook("C", "msg", "assign");
    } else {
      if (g(".s-msg-base", j).is(":visible")) {
        C = cc11001100_hook("C", g(".noset-msg-tip", j).is(":visible") ? "nosetting" : "nomsg", "assign");
      }
    }
    return C;
  }
  function u() {
    j.hide();
  }
  function p() {
    var C = cc11001100_hook("C", A(), "var-init");
    u();
  }
  var f = cc11001100_hook("f", function (E) {
    var D = cc11001100_hook("D", 0, "var-init"),
      C = cc11001100_hook("C", "中", "var-init"),
      G = cc11001100_hook("G", "visibility:hidden;position:absolute;bottom:0;left:0;", "var-init"),
      F = cc11001100_hook("F", "s_strpx_span", "var-init");
    return function (N) {
      D++;
      var K = cc11001100_hook("K", 0, "var-init"),
        M = cc11001100_hook("M", {}, "var-init"),
        J = cc11001100_hook("J", '<span id="' + F + D + '" style="' + G + (N || "") + '"></span>', "var-init"),
        L = cc11001100_hook("L", g(J)[0], "var-init");
      document.getElementsByTagName("body")[0].appendChild(L);
      L.innerHTML = cc11001100_hook("L.innerHTML", C, "assign");
      K = cc11001100_hook("K", L.offsetWidth, "assign");
      var I = function (T) {
        var S = cc11001100_hook("S", 0, "var-init");
        for (var R = cc11001100_hook("R", 0, "var-init"), P = cc11001100_hook("P", T.length, "var-init"); R < P; R++) {
          var Q = cc11001100_hook("Q", T.charCodeAt(R), "var-init");
          S += cc11001100_hook("S", Q > 255 ? K : O.call(this, T.charAt(R)), "assign");
        }
        return S;
      };
      var O = function (Q) {
        if (M[Q]) {
          return M[Q];
        } else {
          L.innerHTML = cc11001100_hook("L.innerHTML", Q == " " ? "&nbsp;" : Q, "assign");
          var P = cc11001100_hook("P", L.offsetWidth, "var-init");
          M[Q] = cc11001100_hook("M[Q]", P, "assign");
          return P;
        }
      };
      var H = function (V, S, W) {
        if (!V) {
          return V;
        }
        if (V.length * K < S) {
          return V;
        }
        if (I(V) <= S) {
          return V;
        }
        if (W) {
          S = cc11001100_hook("S", S - I(W), "assign");
        }
        if (S < 0) {
          S = cc11001100_hook("S", 0, "assign");
        }
        var U = cc11001100_hook("U", 0, "var-init");
        for (var R = cc11001100_hook("R", 0, "var-init"), P = cc11001100_hook("P", V.length, "var-init"); R < P; R++) {
          var Q = cc11001100_hook("Q", V.charCodeAt(R), "var-init"),
            T = cc11001100_hook("T", Q > 255 ? K : O.call(this, V.charAt(R)), "var-init");
          if (U <= S && U + T > S) {
            return V.substring(0, R) + (W || "");
          } else {
            U += cc11001100_hook("U", T, "assign");
          }
        }
        return V;
      };
      return {
        substringByPx: cc11001100_hook("substringByPx", H, "object-key-init"),
        getLengthPx: cc11001100_hook("getLengthPx", I, "object-key-init")
      };
    };
  }(), "var-init");
  var d = cc11001100_hook("d", function () {
    function D(E) {
      cc11001100_hook("E", E, "function-parameter");
      x(g(".s-msg-base", j));
      C(E);
      h.bindEvents(E);
    }
    function C(F) {
      cc11001100_hook("F", F, "function-parameter");
      var E = cc11001100_hook("E", g(".s-msg-tips", j), "var-init");
      j.addClass("extend");
      E.append(c.renderAll(F));
      E.append(c.renderBtn());
      p();
      g(".msg-clear-btn", j).on("click", function () {
        g("#imsg .s-msg-count").html("");
        g(".s-msg-tips", j).remove();
        var H = cc11001100_hook("H", [], "var-init"),
          G = cc11001100_hook("G", "", "var-init"),
          I = cc11001100_hook("I", "", "var-init");
        g.each(F, function (K, J) {
          if (J.isSns && J.webid && J.webid != "") {
            H.push(J.webid);
          } else {
            if (J.type == "yaohao") {
              G = cc11001100_hook("G", "tipsexpired", "assign");
            } else {
              if (J.type == "weather") {
                I = cc11001100_hook("I", J.msgId, "assign");
              }
            }
          }
        });
        g.ajax("/home/msg/submit/msgclearall", {
          type: cc11001100_hook("type", "POST", "object-key-init"),
          data: {
            sns: cc11001100_hook("sns", H.length > 0 ? H.join("_") : "", "object-key-init"),
            yaohao: cc11001100_hook("yaohao", G, "object-key-init"),
            saw: cc11001100_hook("saw", I, "object-key-init"),
            _req_seqid: cc11001100_hook("_req_seqid", bds.comm.qid, "object-key-init"),
            sid: cc11001100_hook("sid", bds.comm.sid, "object-key-init"),
            bsToken: cc11001100_hook("bsToken", bdstoken, "object-key-init")
          }
        });
        u();
      });
    }
    return {
      init: cc11001100_hook("init", D, "object-key-init")
    };
  }(), "var-init");
  var c = cc11001100_hook("c", function () {
    var I = cc11001100_hook("I", new f("font-weight:bold;font-size:12px;font-family:'arial';"), "var-init");
    var G = cc11001100_hook("G", "http://i.baidu.com/msg/messages/list/", "var-init");
    var F = cc11001100_hook("F", {
      weather: cc11001100_hook("weather", "http://www.baidu.com/s?ie=utf-8&bs=%E5%A4%A9%E6%B0%94&f=8&rsv_bp=1&wd=%E5%A4%A9%E6%B0%94&inputT=0", "object-key-init"),
      lecaicard: cc11001100_hook("lecaicard", "http://www.baidu.com/home/xman/show/worldcupindex?frm=lecaicard", "object-key-init"),
      jdcard: cc11001100_hook("jdcard", "http://www.baidu.com/home/xman/show/worldcupindex?frm=jdcard", "object-key-init"),
      lecaicaijin: cc11001100_hook("lecaicaijin", "http://www.baidu.com/home/xman/show/worldcupindex?frm=lecaicaijin", "object-key-init"),
      lecaibuchang: cc11001100_hook("lecaibuchang", "http://www.baidu.com/home/xman/show/worldcupindex?frm=lecaibuchang&type=lecai50#rank", "object-key-init"),
      mis: cc11001100_hook("mis", "http://www.baidu.com/s?ie=utf-8&bs=%E5%A4%A9%E6%B0%94&f=8&rsv_bp=1&wd=%E5%A4%A9%E6%B0%94&inputT=0", "object-key-init"),
      sinawb: cc11001100_hook("sinawb", "http://weibo.com/", "object-key-init"),
      txwb: cc11001100_hook("txwb", "http://t.qq.com/", "object-key-init"),
      bdtieba: cc11001100_hook("bdtieba", "http://tieba.baidu.com/", "object-key-init"),
      mail163: cc11001100_hook("mail163", "http://mail.163.com/", "object-key-init"),
      mail126: cc11001100_hook("mail126", "http://www.126.com/", "object-key-init"),
      mailyeah: cc11001100_hook("mailyeah", "http://www.yeah.net/", "object-key-init"),
      ssq: cc11001100_hook("ssq", "http://www.zhcw.com/ssq/", "object-key-init"),
      pl3: cc11001100_hook("pl3", "http://www.lottery.gov.cn/lottery/pls/Default.aspx", "object-key-init"),
      pl5: cc11001100_hook("pl5", "http://www.lottery.gov.cn/lottery/pls/Default.aspx", "object-key-init"),
      dlt: cc11001100_hook("dlt", "http://www.lottery.gov.cn/lottery/dlt/Default.aspx", "object-key-init"),
      fc3d: cc11001100_hook("fc3d", "http://www.zhcw.com/3d/", "object-key-init"),
      qxc: cc11001100_hook("qxc", "http://www.lottery.gov.cn/lottery/qxc/Default.aspx", "object-key-init"),
      qlc: cc11001100_hook("qlc", "http://www.zhcw.com/qlc/", "object-key-init"),
      bdiknow: cc11001100_hook("bdiknow", "http://zhidao.baidu.com/", "object-key-init"),
      bdmsg: cc11001100_hook("bdmsg", "http://msg.baidu.com", "object-key-init"),
      bdzoom: cc11001100_hook("bdzoom", "http://hi.baidu.com/", "object-key-init"),
      bdpics: cc11001100_hook("bdpics", "http://xiangce.baidu.com/", "object-key-init"),
      yaohao: cc11001100_hook("yaohao", "http://www.baidu.com/s?tn=monline_4_dg&ie=utf-8&bs=yaohao&f=8&rsv_bp=1&wd=%E6%91%87%E5%8F%B7&rsv_sug3=1&inputT=1683", "object-key-init"),
      iqiyi: cc11001100_hook("iqiyi", "http://www.iqiyi.com/", "object-key-init"),
      gaojie: cc11001100_hook("gaojie", "http://www.gaojie.com/", "object-key-init"),
      qunar: cc11001100_hook("qunar", "http://www.qunar.com/", "object-key-init"),
      yidongwb: cc11001100_hook("yidongwb", "http://weibo.10086.cn/", "object-key-init"),
      sinablog: cc11001100_hook("sinablog", "http://blog.sina.com.cn/", "object-key-init"),
      bdHome: cc11001100_hook("bdHome", G, "object-key-init"),
      bdIndem: cc11001100_hook("bdIndem", G, "object-key-init"),
      bdHongbao: cc11001100_hook("bdHongbao", G, "object-key-init"),
      bdKoubei: cc11001100_hook("bdKoubei", G, "object-key-init")
    }, "var-init");
    var H = cc11001100_hook("H", {
      start: cc11001100_hook("start", '<div id="s_msg_#{msgId}" class="s-msg-item" data-type="#{type}"><span class="item-name"><a href="#{nameUrl}" #{nameTitle} class="item-name-link" target="_blank" hidefocus>#{name}</a></span>', "object-key-init"),
      line: cc11001100_hook("line", '<span class="vertical-line"></span>', "object-key-init"),
      content: cc11001100_hook("content", '<span class="item-msg-content#{cell}" #{cellid}>', "object-key-init"),
      end: cc11001100_hook("end", "</span></div>", "object-key-init"),
      weather: cc11001100_hook("weather", '<a class="item-title" href="#{url}" target="_blank" hidefocus><span class="item-orange item-bold">#{title}</span></a>', "object-key-init"),
      lecaicard: cc11001100_hook("lecaicard", '<a class="item-title" href="#{url}" target="_blank" hidefocus><span class="item-orange item-bold">#{title}</span></a>', "object-key-init"),
      lecaibuchang: cc11001100_hook("lecaibuchang", '<a class="item-title" href="#{url}" target="_blank" hidefocus><span class="item-orange item-bold">#{title}</span></a>', "object-key-init"),
      jdcard: cc11001100_hook("jdcard", '<a class="item-title" href="#{url}" target="_blank" hidefocus><span class="item-orange item-bold">#{title}</span></a>', "object-key-init"),
      lecaicaijin: cc11001100_hook("lecaicaijin", '<a class="item-title" href="#{url}" target="_blank" hidefocus><span class="item-orange item-bold">#{title}</span></a>', "object-key-init"),
      news: cc11001100_hook("news", '<a class="item-title" href="#{url}" target="_blank" hidefocus>#{title}</a>', "object-key-init"),
      navs: cc11001100_hook("navs", '<a class="item-title" href="#{url}" target="_blank" hidefocus>#{title}</a>', "object-key-init"),
      comic: cc11001100_hook("comic", '<a class="item-title" href="#{curEpisodeUrl}" target="_blank" hidefocus>更新至&nbsp;#{curEpisode}集</a>#{reviewHtml}', "object-key-init"),
      tv: cc11001100_hook("tv", '<a class="item-title" href="#{curEpisodeUrl}" target="_blank" hidefocus>更新至&nbsp;#{curEpisode}集</a>#{reviewHtml}', "object-key-init"),
      show: cc11001100_hook("show", '更新至#{curEpisode}期：<a class="item-title" href="#{curEpisodeUrl}" target="_blank" hidefocus>#{title}，立即观看</a>', "object-key-init"),
      lottery: cc11001100_hook("lottery", '<a class="item-title comma" href="#{curEpisodeUrl}" target="_blank" hidefocus>#{curEpisode}开奖结果：<span class="item-orange">#{orangeNumberHtml}</span><span class="item-blue">&nbsp;#{blueNumberHtml}</span></a>，查看<a class="item-title" href="#{trendUrl}" target="_blank" hidefocus>趋势图</a>，分析中奖规律', "object-key-init"),
      txwb: cc11001100_hook("txwb", "#{snsDetailHtml}", "object-key-init"),
      bdzoom: cc11001100_hook("bdzoom", "#{snsDetailHtml}", "object-key-init"),
      bdmsg: cc11001100_hook("bdmsg", "#{snsDetailHtml}", "object-key-init"),
      bdiknow: cc11001100_hook("bdiknow", "#{snsDetailHtml}", "object-key-init"),
      bdpics: cc11001100_hook("bdpics", "#{snsDetailHtml}", "object-key-init"),
      mail126: cc11001100_hook("mail126", "#{snsDetailHtml}", "object-key-init"),
      mail163: cc11001100_hook("mail163", "#{snsDetailHtml}", "object-key-init"),
      mailyeah: cc11001100_hook("mailyeah", "#{snsDetailHtml}", "object-key-init"),
      bdtieba: cc11001100_hook("bdtieba", "#{snsDetailHtml}", "object-key-init"),
      defaulttpl: cc11001100_hook("defaulttpl", "#{detailHtml}", "object-key-init"),
      bdHome: cc11001100_hook("bdHome", "#{snsDetailHtml}", "object-key-init"),
      bdIndem: cc11001100_hook("bdIndem", "#{snsDetailHtml}", "object-key-init"),
      bdHongbao: cc11001100_hook("bdHongbao", "#{snsDetailHtml}", "object-key-init"),
      bdKoubei: cc11001100_hook("bdKoubei", "#{snsDetailHtml}", "object-key-init"),
      sinawb: cc11001100_hook("sinawb", "#{snsDetailHtml}", "object-key-init"),
      yidongwb: cc11001100_hook("yidongwb", "#{snsDetailHtml}", "object-key-init"),
      sinablog: cc11001100_hook("sinablog", "#{snsDetailHtml}", "object-key-init"),
      commontpl: cc11001100_hook("commontpl", "#{snsDetailHtml}", "object-key-init"),
      iqiyi: cc11001100_hook("iqiyi", '<a href="#{snsUrl}" class="item-title title-sns" target="_blank" hidefocus>您有&nbsp;<span class="item-orange">#{snsNum}</span>&nbsp;#{snsName},快去查看吧', "object-key-init"),
      gaojie: cc11001100_hook("gaojie", '<a href="#{snsUrl}" class="item-title title-sns" target="_blank" hidefocus>您有&nbsp;<span class="item-orange">#{snsNum}</span>&nbsp;#{snsName},快去查看吧', "object-key-init"),
      qunar: cc11001100_hook("qunar", '<a href="#{snsUrl}" class="item-title title-sns" target="_blank" hidefocus>您有&nbsp;<span class="item-orange">#{snsNum}</span>&nbsp;#{snsName},快去查看吧', "object-key-init"),
      blank: cc11001100_hook("blank", '<div class="s-msg-blank">当前没有新消息</div>', "object-key-init"),
      btn: cc11001100_hook("btn", '<div class="msg-btns"><div class="msg-btn msg-clear-btn" id="s_msg_clear"><span class="bg"></span><span class="title">清空消息</span></div><div class="msg-btn msg-setting-btn" id="s_hasmsg_setting"><a  href="http://www.baidu.com/home/page/show/pagesetting#home_setting" target="_blank" hidefocus class="title">消息设置</a><span class="bg"></span></div></div>', "object-key-init")
    }, "var-init");
    var E = cc11001100_hook("E", {
      weather: cc11001100_hook("weather", "#{title}", "object-key-init"),
      news: cc11001100_hook("news", "#{title}", "object-key-init"),
      navs: cc11001100_hook("navs", "#{title}", "object-key-init"),
      lecaicard: cc11001100_hook("lecaicard", "#{title}", "object-key-init"),
      jdcard: cc11001100_hook("jdcard", "#{title}", "object-key-init"),
      lecaicaijin: cc11001100_hook("lecaicaijin", "#{title}", "object-key-init"),
      lecaibuchang: cc11001100_hook("lecaibuchang", "#{title}", "object-key-init"),
      comic: cc11001100_hook("comic", "更新至&nbsp;#{curEpisode}集#{reviewHtml}", "object-key-init"),
      tv: cc11001100_hook("tv", "更新至&nbsp;#{curEpisode}集#{reviewHtml}", "object-key-init"),
      show: cc11001100_hook("show", "更新至#{curEpisode}期：#{title}，立即观看", "object-key-init"),
      lottery: cc11001100_hook("lottery", "#{curEpisode}开奖结果：#{orangeNumberHtml}&nbsp;#{blueNumberHtml}，查看趋势图，分析中奖规律", "object-key-init"),
      txwb: cc11001100_hook("txwb", "#{snsDetailHtml}", "object-key-init"),
      bdzoom: cc11001100_hook("bdzoom", "#{snsDetailHtml}", "object-key-init"),
      bdmsg: cc11001100_hook("bdmsg", "#{snsDetailHtml}", "object-key-init"),
      bdiknow: cc11001100_hook("bdiknow", "#{snsDetailHtml}", "object-key-init"),
      bdpics: cc11001100_hook("bdpics", "#{snsDetailHtml}", "object-key-init"),
      mail126: cc11001100_hook("mail126", "#{snsDetailHtml}", "object-key-init"),
      mail163: cc11001100_hook("mail163", "#{snsDetailHtml}", "object-key-init"),
      mailyeah: cc11001100_hook("mailyeah", "#{snsDetailHtml}", "object-key-init"),
      bdtieba: cc11001100_hook("bdtieba", "#{snsDetailHtml}", "object-key-init"),
      bdHome: cc11001100_hook("bdHome", "#{snsDetailHtml}", "object-key-init"),
      bdIndem: cc11001100_hook("bdIndem", "#{snsDetailHtml}", "object-key-init"),
      bdHongbao: cc11001100_hook("bdHongbao", "#{snsDetailHtml}", "object-key-init"),
      bdKoubei: cc11001100_hook("bdKoubei", "#{snsDetailHtml}", "object-key-init"),
      sinawb: cc11001100_hook("sinawb", "#{snsDetailHtml}", "object-key-init"),
      yidongwb: cc11001100_hook("yidongwb", "#{snsDetailHtml}", "object-key-init"),
      sinablog: cc11001100_hook("sinablog", "#{snsDetailHtml}", "object-key-init"),
      commontpl: cc11001100_hook("commontpl", "#{snsDetailHtml}", "object-key-init"),
      iqiyi: cc11001100_hook("iqiyi", "您有&nbsp;#{snsNum}&nbsp;#{snsName},快去查看吧", "object-key-init"),
      gaojie: cc11001100_hook("gaojie", "您有&nbsp;#{snsNum}&nbsp;#{snsName},快去查看吧", "object-key-init"),
      qunar: cc11001100_hook("qunar", "您有&nbsp;#{snsNum}&nbsp;#{snsName},快去查看吧", "object-key-init")
    }, "var-init");
    var D = function (N, L) {
      if (L == 0) {
        N.first = cc11001100_hook("N.first", " first", "assign");
      }
      var M = cc11001100_hook("M", J(N, L), "var-init");
      if (L == 0) {
        M.cell = cc11001100_hook("M.cell", " cell", "assign");
        M.cellid = cc11001100_hook("M.cellid", "id='s_tip_cell'", "assign");
        if (!E[M.tplType]) {
          M.tplType = cc11001100_hook("M.tplType", "commontpl", "assign");
        }
        return g.format(H.start + H.line + H.content + E[M.tplType] + H.end, M);
      } else {
        M.cell = cc11001100_hook("M.cell", "", "assign");
        M.cellid = cc11001100_hook("M.cellid", "", "assign");
        if (!H[M.tplType]) {
          M.tplType = cc11001100_hook("M.tplType", "commontpl", "assign");
        }
        return g.format(H.start + H.content + H[M.tplType] + H.end, M);
      }
    };
    var J = function (R, L) {
      var S = cc11001100_hook("S", R, "var-init"),
        M = cc11001100_hook("M", false, "var-init"),
        N = cc11001100_hook("N", false, "var-init");
      var Q = cc11001100_hook("Q", {
        ssq: cc11001100_hook("ssq", 1, "object-key-init"),
        pl3: cc11001100_hook("pl3", 1, "object-key-init"),
        pl5: cc11001100_hook("pl5", 1, "object-key-init"),
        dlt: cc11001100_hook("dlt", 1, "object-key-init"),
        fc3d: cc11001100_hook("fc3d", 1, "object-key-init"),
        qxc: cc11001100_hook("qxc", 1, "object-key-init"),
        qlc: cc11001100_hook("qlc", 1, "object-key-init")
      }, "var-init");
      if (Q[S.type] == 1) {
        S.tplType = cc11001100_hook("S.tplType", "lottery", "assign");
      } else {
        S.tplType = cc11001100_hook("S.tplType", S.type, "assign");
      }
      if (S.tplType == "mis" || S.tplType == "yaohao") {
        S.tplType = cc11001100_hook("S.tplType", "news", "assign");
      }
      if (S.type === "defaulttpl") {
        S.detailHtml = cc11001100_hook("S.detailHtml", '<a class="default-msg-title" href="' + decodeURIComponent(S.snsDetail[0].snsUrl) + '" target="_blank">' + S.snsDetail[0].snsName + "</a>", "assign");
      }
      if (S.tplType == "lottery") {
        S.orangeNumberHtml = cc11001100_hook("S.orangeNumberHtml", S.orangeNumber.split(",").join("&nbsp;"), "assign");
        S.blueNumberHtml = cc11001100_hook("S.blueNumberHtml", S.blueNumber.split(",").join("&nbsp;"), "assign");
      }
      S.url = cc11001100_hook("S.url", decodeURIComponent(S.url), "assign");
      S.curEpisodeUrl = cc11001100_hook("S.curEpisodeUrl", decodeURIComponent(S.curEpisodeUrl), "assign");
      if (S.tplType == "lottery") {
        S.curEpisodeUrl = cc11001100_hook("S.curEpisodeUrl", S.curEpisodeUrl + "?mtdate=" + encodeURIComponent(S.curEpisode), "assign");
        S.trendUrl = cc11001100_hook("S.trendUrl", decodeURIComponent(S.trendUrl) + "?mtdate=" + encodeURIComponent(S.createTime), "assign");
      }
      S.sourceUrl = cc11001100_hook("S.sourceUrl", decodeURIComponent(S.sourceUrl), "assign");
      if (S.type == "tv" || S.type == "comic") {
        var P = cc11001100_hook("P", [], "var-init");
        if (S.review.length > 0) {
          for (var O = cc11001100_hook("O", S.review.length - 1, "var-init"); O >= 0; O--) {
            if (L == 0) {
              P.push(S.review[O].episode + "集&nbsp;");
            } else {
              P.push('<a class="item-title" href="' + decodeURIComponent(S.review[O].episodeUrl) + '" target="_blank" hidefocus>' + S.review[O].episode + "集</a>&nbsp;");
            }
          }
          S.reviewHtml = cc11001100_hook("S.reviewHtml", "&nbsp;回顾&nbsp;" + P.join(""), "assign");
        } else {
          S.reviewHtml = cc11001100_hook("S.reviewHtml", "", "assign");
        }
      }
      M = cc11001100_hook("M", S.type == "txwb" || S.type == "bdzoom" || S.type == "bdmsg" || S.type == "bdiknow" || S.type == "bdpics" || S.type == "mail126" || S.type == "mail163" || S.type == "mailyeah" || S.type == "bdtieba" || S.type == "bdHome" || S.type == "bdIndem" || S.type == "bdHongbao" || S.type == "bdKoubei" || S.type == "sinawb" || S.type == "yidongwb" || S.type == "sinablog" || S.isSns == "1", "assign");
      N = cc11001100_hook("N", S.type == "mail126" || S.type == "mail163" || S.type == "mailyeah", "assign");
      if (M && S.snsDetail) {
        var P = cc11001100_hook("P", [], "var-init");
        if (S.snsDetail.length > 1) {
          P.push((N ? "您收到了" : "您有") + "&nbsp;");
          for (var O = cc11001100_hook("O", S.snsDetail.length - 1, "var-init"); O >= 0; O--) {
            if (L == 0) {
              P.push(S.snsDetail[O].snsNum + S.snsDetail[O].snsName + "，");
            } else {
              P.push('<a class="item-title title-sns" href="' + decodeURIComponent(S.snsDetail[O].snsUrl) + '" target="_blank" hidefocus><span class="item-orange">' + S.snsDetail[O].snsNum + "</span>" + S.snsDetail[O].snsName + "</a>，");
            }
          }
          P.push(N ? "立即查收</a>" : "快去查看吧");
        } else {
          if (S.snsDetail.length = cc11001100_hook("S.snsDetail.length", 1, "assign")) {
            if (L == 0) {
              P.push((N ? "您收到了" : "您有") + "&nbsp;");
              P.push(S.snsDetail[0].snsNum + "&nbsp;" + S.snsDetail[0].snsName + "，");
              P.push(N ? "立即查收" : "快去查看吧");
            } else {
              P.push('<a class="item-title title-sns" target="_blank" href="' + decodeURIComponent(S.snsDetail[0].snsUrl) + '" hidefocus>' + (N ? "您收到了" : "您有") + "&nbsp;");
              P.push('<span class="item-orange">' + S.snsDetail[0].snsNum + "</span>&nbsp;" + S.snsDetail[0].snsName + "，");
              P.push((N ? "立即查收" : "快去查看吧") + "</a>");
            }
          }
        }
        S.snsDetailHtml = cc11001100_hook("S.snsDetailHtml", P.join(""), "assign");
        M = cc11001100_hook("M", false, "assign");
      }
      if (S.type == "gaojie" || S.type == "qunar" || S.type == "iqiyi") {
        S.snsUrl = cc11001100_hook("S.snsUrl", decodeURIComponent(S.snsDetail[0].snsUrl), "assign");
        S.snsNum = cc11001100_hook("S.snsNum", S.snsDetail[0].snsNum, "assign");
        S.snsName = cc11001100_hook("S.snsName", S.snsDetail[0].snsName, "assign");
      }
      if (S.type == "nba") {
        S.name = cc11001100_hook("S.name", "NBA", "assign");
        S.url = cc11001100_hook("S.url", decodeURIComponent(S.url) + "&mtdate=" + encodeURIComponent(S.createTime), "assign");
        S.nbaMoreUrl = cc11001100_hook("S.nbaMoreUrl", "http://sports.sina.com.cn/nba/?mtdate=" + encodeURIComponent(S.createTime), "assign");
        S.nbaTopVideoUrl = cc11001100_hook("S.nbaTopVideoUrl", "http://sports.sina.com.cn/nba/video/?mtdate=" + encodeURIComponent(S.createTime), "assign");
      }
      if (S.type == "tv" || S.type == "show" || S.type == "comic") {
        S.nameUrl = cc11001100_hook("S.nameUrl", decodeURIComponent(S.titleUrl), "assign");
      } else {
        S.nameUrl = cc11001100_hook("S.nameUrl", F[S.type], "assign");
      }
      if (!S.nameUrl) {
        S.nameUrl = cc11001100_hook("S.nameUrl", "#", "assign");
      }
      S.wholeName = cc11001100_hook("S.wholeName", S.name, "assign");
      S.name = cc11001100_hook("S.name", I.substringByPx(S.name, 52, "..."), "assign");
      S.nameTitle = cc11001100_hook("S.nameTitle", S.name.indexOf("...") >= 0 ? 'title="' + S.wholeName + '"' : "", "assign");
      return S;
    };
    var K = function (M) {
      var L = cc11001100_hook("L", [], "var-init");
      if (M.length > 0) {
        g.each(M, function (N, O) {
          L.push(D(O));
        });
      }
      return L.join("");
    };
    var C = function () {
      return H.btn;
    };
    return {
      renderAll: cc11001100_hook("renderAll", K, "object-key-init"),
      renderBtn: cc11001100_hook("renderBtn", C, "object-key-init")
    };
  }(), "var-init");
  var h = cc11001100_hook("h", function () {
    var M = cc11001100_hook("M", [], "var-init"),
      K = cc11001100_hook("K", [], "var-init"),
      I = cc11001100_hook("I", {}, "var-init");
    var C = function (R) {
      var Q = cc11001100_hook("Q", g.inArray(R, K), "var-init");
      if (Q < 0) {
        K.push(Q);
      }
    };
    var L = function () {
      var Q = cc11001100_hook("Q", K.length, "var-init");
      K = cc11001100_hook("K", [], "assign");
      return Q;
    };
    var J = function (Q) {
      if (jQuery.inArray(Q, M) >= 0) {
        return true;
      } else {
        return false;
      }
    };
    var G = function (R) {
      var Q = cc11001100_hook("Q", jQuery.inArray(R, M), "var-init");
      if (Q >= 0) {
        M.splice(Q, 1);
      }
    };
    var E = function () {
      return M.length;
    };
    var N = function (T, R, Q, S) {
      var U = cc11001100_hook("U", g("#s_msg_" + T, j)[0], "var-init"),
        V = cc11001100_hook("V", U.getElementsByTagName("a"), "var-init");
      g.each(V, function (W, X) {
        g(X).on("click", function (Y) {
          B.send({
            clickType: cc11001100_hook("clickType", g(U).attr("data-type"), "object-key-init"),
            title: cc11001100_hook("title", X.title, "object-key-init"),
            url: cc11001100_hook("url", X.href, "object-key-init")
          });
          g(U).remove();
          if (Q) {
            O(T, S);
          } else {
            H(T);
          }
          t.updateLayout();
          if (!g(X).hasClass("source-link")) {
            var Z = cc11001100_hook("Z", g.extend({}, R), "var-init");
            if (Z.type == "tv" || Z.type == "comic" || Z.type == "show") {
              Z.type = cc11001100_hook("Z.type", "video", "assign");
            }
          }
        });
      });
    };
    var P = function (Q, R) {
      var S = cc11001100_hook("S", g.extend({}, Q), "var-init");
      S.msgType = cc11001100_hook("S.msgType", S.type, "assign");
      delete S.type;
      if (R) {
        S.clickurl = cc11001100_hook("S.clickurl", R.href, "assign");
      }
      if (R) {
        if (g(R).hasClass("item-name-link")) {
          S.msgpos = cc11001100_hook("S.msgpos", "name", "assign");
        } else {
          S.msgpos = cc11001100_hook("S.msgpos", "title", "assign");
        }
      }
      return S;
    };
    var H = function (Q) {
      if (J(Q)) {
        G(Q);
        t.updateTipCount();
        if (I[Q] && I[Q].type == "yaohao") {
          g.ajax("/home/msg/submit/yaohao", {
            type: cc11001100_hook("type", "POST", "object-key-init"),
            data: {
              cmd: cc11001100_hook("cmd", "tipsexpired", "object-key-init"),
              _req_seqid: cc11001100_hook("_req_seqid", bds.comm.qid, "object-key-init"),
              sid: cc11001100_hook("sid", bds.comm.sid, "object-key-init"),
              bsToken: cc11001100_hook("bsToken", bdstoken, "object-key-init")
            }
          });
        } else {
          g.ajax("/home/msg/submit/msgsaw", {
            type: cc11001100_hook("type", "POST", "object-key-init"),
            data: {
              msgid: cc11001100_hook("msgid", Q, "object-key-init"),
              _req_seqid: cc11001100_hook("_req_seqid", bds.comm.qid, "object-key-init"),
              sid: cc11001100_hook("sid", bds.comm.sid, "object-key-init"),
              bsToken: cc11001100_hook("bsToken", bdstoken, "object-key-init")
            }
          });
        }
      }
    };
    var D = function (Q) {
      if (J(Q)) {
        G(Q);
        C(Q);
        t.updateTipCount();
      }
    };
    var O = function (Q, R) {
      if (J(Q)) {
        G(Q);
        t.updateTipCount();
        g.ajax("/home/msg/submit/msgdel", {
          type: cc11001100_hook("type", "POST", "object-key-init"),
          data: {
            wid: cc11001100_hook("wid", R, "object-key-init"),
            _req_seqid: cc11001100_hook("_req_seqid", bds.comm.qid, "object-key-init"),
            sid: cc11001100_hook("sid", bds.comm.sid, "object-key-init"),
            bsToken: cc11001100_hook("bsToken", bdstoken, "object-key-init")
          }
        });
      }
    };
    var F = function (Q) {
      M = cc11001100_hook("M", [], "assign");
      g.each(Q, function (S, R) {
        if (R.isSns && R.webid && R.webid != "") {
          N(R.msgId, R, true, R.webid);
        } else {
          N(R.msgId, R, false);
        }
        M.push(R.msgId);
        I[R.msgId] = cc11001100_hook("I[R.msgId]", R, "assign");
      });
    };
    return {
      bindEvents: cc11001100_hook("bindEvents", F, "object-key-init"),
      getAndDistoryHasClickedSns: cc11001100_hook("getAndDistoryHasClickedSns", L, "object-key-init"),
      getNoSawCount: cc11001100_hook("getNoSawCount", E, "object-key-init")
    };
  }(), "var-init");
  var t = cc11001100_hook("t", function () {
    var D = cc11001100_hook("D", g("#imsg .s-msg-count"), "var-init");
    var C = function () {
      var H = cc11001100_hook("H", g(".s-msg-item", j), "var-init"),
        F = cc11001100_hook("F", H[0], "var-init"),
        G = cc11001100_hook("G", H.length, "var-init");
      if (H.length <= 0) {
        g("#imsg .s-msg-count").remove();
        g(".s-msg-tips", j).remove();
        k();
      } else {
        g("#imsg .s-msg-count").html("(" + H.length + ")");
      }
      if (n) {
        j.hide().show();
      }
    };
    var E = function (G) {
      var F = cc11001100_hook("F", G || h.getNoSawCount(), "var-init");
      if (!D[0]) {
        return;
      }
      if (F <= 1) {
        D.addClass("unshown").html(F);
      } else {
        if (F > 1 && F <= 9) {
          D.removeClass("unshown").html(F);
        } else {
          if (F > 9 && F <= 99) {
            D.removeClass("unshown").html(F);
          } else {
            if (F > 99) {
              D.removeClass("unshown").html("+99");
            }
          }
        }
      }
    };
    return {
      updateLayout: cc11001100_hook("updateLayout", C, "object-key-init"),
      updateTipCount: cc11001100_hook("updateTipCount", E, "object-key-init")
    };
  }(), "var-init");
  var B = cc11001100_hook("B", function () {
    var E = cc11001100_hook("E", 0, "var-init");
    function G(I) {
      cc11001100_hook("I", I, "function-parameter");
      var H = cc11001100_hook("H", "imglog__" + new Date().getTime(), "var-init"),
        J = cc11001100_hook("J", window[H] = cc11001100_hook("window[H]", new Image(), "assign"), "var-init"),
        K;
      I = cc11001100_hook("I", g.extend(I, {
        mod: cc11001100_hook("mod", "message", "object-key-init"),
        submod: cc11001100_hook("submod", "mt_show", "object-key-init"),
        utype: cc11001100_hook("utype", "", "object-key-init"),
        logactid: cc11001100_hook("logactid", "1500000001", "object-key-init"),
        superver: cc11001100_hook("superver", "superplus", "object-key-init"),
        portrait: cc11001100_hook("portrait", "", "object-key-init"),
        glogid: cc11001100_hook("glogid", "", "object-key-init"),
        type: cc11001100_hook("type", 2011, "object-key-init"),
        pid: cc11001100_hook("pid", 315, "object-key-init"),
        version: cc11001100_hook("version", "PCHome", "object-key-init"),
        terminal: cc11001100_hook("terminal", "PC", "object-key-init"),
        qid: cc11001100_hook("qid", "", "object-key-init"),
        sid: cc11001100_hook("sid", bds.comm.sid, "object-key-init"),
        super_frm: cc11001100_hook("super_frm", "", "object-key-init"),
        from_login: cc11001100_hook("from_login", "", "object-key-init"),
        from_reg: cc11001100_hook("from_reg", "", "object-key-init"),
        query: cc11001100_hook("query", bds.comm.query, "object-key-init"),
        _r: cc11001100_hook("_r", Math.random(), "object-key-init")
      }), "assign");
      K = cc11001100_hook("K", C() + F(I), "assign");
      J.onload = cc11001100_hook("J.onload", J.onerror = cc11001100_hook("J.onerror", function () {
        window[H] = cc11001100_hook("window[H]", null, "assign");
      }, "assign"), "assign");
      J.src = cc11001100_hook("J.src", K, "assign");
      J = cc11001100_hook("J", null, "assign");
    }
    function C() {
      return location.protocol + "//dj" + ++E % 3 + ".baidu.com/v.gif?";
    }
    function F(K) {
      cc11001100_hook("K", K, "function-parameter");
      var H = cc11001100_hook("H", [], "var-init"),
        J,
        I = function (L) {
          return D(L);
        };
      g.each(K, function (L, M) {
        if (g.isArray(M)) {
          J = cc11001100_hook("J", M.length, "assign");
          while (J--) {
            H.push(L + "=" + encodeURIComponent(M[J]));
          }
        } else {
          H.push(L + "=" + encodeURIComponent(M));
        }
      });
      return H.join("&");
    }
    function D(H) {
      cc11001100_hook("H", H, "function-parameter");
      return String(H).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g, function (I) {
        return "%" + (256 + I.charCodeAt()).toString(16).substring(1).toUpperCase();
      });
    }
    return {
      send: cc11001100_hook("send", G, "object-key-init")
    };
  }(), "var-init");
  return {
    init: cc11001100_hook("init", s, "object-key-init"),
    addStyle: cc11001100_hook("addStyle", r, "object-key-init")
  };
}(jQuery), "assign");