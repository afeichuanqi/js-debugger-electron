"use strict";

!function (e, s, n) {
  var t,
    o = cc11001100_hook("o", "https://g.csdnimg.cn/user-tooltip/2.6/", "var-init"),
    a = cc11001100_hook("a", {
      company: cc11001100_hook("company", "<img src=" + o + "images/icon-company.png />", "object-key-init"),
      domainGrey: cc11001100_hook("domainGrey", "<img src=" + o + "images/icon-domain-grey.png />", "object-key-init"),
      domain: cc11001100_hook("domain", "<img src=" + o + "images/icon-domain.png />", "object-key-init"),
      vip: cc11001100_hook("vip", "<img src=" + o + "images/icon-vip.png />", "object-key-init"),
      writer: cc11001100_hook("writer", "<img src=" + o + "images/icon-writer.png />", "object-key-init")
    }, "var-init"),
    i = cc11001100_hook("i", {
      getUserProfileUrl: cc11001100_hook("getUserProfileUrl", "https://www.csdn.net/community/personal-api/v1/getProfileByUsername", "object-key-init"),
      checkFollowUrl: cc11001100_hook("checkFollowUrl", "https://mp-action.csdn.net/interact/wrapper/pc/fans/v1/api/checkFollow", "object-key-init"),
      doFollowUrl: cc11001100_hook("doFollowUrl", "https://mp-action.csdn.net/interact/wrapper/pc/fans/v1/api/follow", "object-key-init"),
      doUnfollowUrl: cc11001100_hook("doUnfollowUrl", "https://mp-action.csdn.net/interact/wrapper/pc/fans/v1/api/unFollow", "object-key-init"),
      ref: cc11001100_hook("ref", "miniprofile", "object-key-init"),
      defaultUserProfile: {
        username: cc11001100_hook("username", "yanlinpu", "object-key-init"),
        avatarurl: cc11001100_hook("avatarurl", "https://profile.csdnimg.cn/1/1/B/1_yanlinpu", "object-key-init"),
        vip: cc11001100_hook("vip", !1, "object-key-init"),
        expert: cc11001100_hook("expert", !1, "object-key-init"),
        nickname: cc11001100_hook("nickname", "木林森001", "object-key-init"),
        fans_num: cc11001100_hook("fans_num", "2万", "object-key-init"),
        identity: cc11001100_hook("identity", [{
          name: cc11001100_hook("name", "专家", "object-key-init")
        }, {
          name: cc11001100_hook("name", "版主", "object-key-init")
        }], "object-key-init"),
        medal: cc11001100_hook("medal", [{
          type: cc11001100_hook("type", "203", "object-key-init"),
          codename: cc11001100_hook("codename", "111", "object-key-init"),
          image: cc11001100_hook("image", "https://g.csdnimg.cn/static/user-medal/1024huodong.svg", "object-key-init")
        }], "object-key-init")
      }
    }, "var-init"),
    l = cc11001100_hook("l", {
      ask: cc11001100_hook("ask", "ASK", "object-key-init"),
      bbs: cc11001100_hook("bbs", "BBS", "object-key-init"),
      me: cc11001100_hook("me", "ME", "object-key-init"),
      download: cc11001100_hook("download", "DOWNLOAD", "object-key-init"),
      blog_detail: cc11001100_hook("blog_detail", "BLOG_DETAIL", "object-key-init"),
      blog: cc11001100_hook("blog", "BLOG", "object-key-init"),
      live: cc11001100_hook("live", "LIVE", "object-key-init")
    }, "var-init");
  if (void 0 === e.csdn && (e.csdn = cc11001100_hook("e.csdn", {}, "assign")), !jQuery) return !1;
  !function (e) {
    var n = cc11001100_hook("n", s.createElement("link"), "var-init");
    n.rel = cc11001100_hook("n.rel", "stylesheet", "assign"), n.type = cc11001100_hook("n.type", "text/css", "assign"), n.href = cc11001100_hook("n.href", e, "assign"), s.getElementsByTagName("head")[0].appendChild(n);
  }(o + "user-tooltip.css"), e.csdn.userTooltip = cc11001100_hook("e.csdn.userTooltip", function (o) {
    function r() {
      _[f].flag && (n("#csdn-userTooltip .person_deliver").mouseover(function () {
        n(this).hasClass("person_deliver_letter") && n(this).html("取&nbsp;&nbsp;&nbsp;消");
      }), n("#csdn-userTooltip .person_deliver").mouseout(function () {
        n(this).hasClass("person_deliver_letter") && n(this).html("已关注");
      })), n("#csdn-userTooltip .person_deliver").click(function () {
        var s, o;
        if (b) {
          var a = cc11001100_hook("a", n(this), "var-init");
          if (t || (t = cc11001100_hook("t", e.location.hostname.indexOf("blog.csdn.net") > -1 ? e.location.href.indexOf("/article/details") > -1 ? l.blog_detail : l.blog : l[e.location.hostname.split(".")[0]] ? l[e.location.hostname.split(".")[0]] : "ME", "assign")), 0 == _[f].flag) {
            if (!a.hasClass("person_deliver_letter_un")) return !1;
            s = cc11001100_hook("s", i.doFollowUrl, "assign"), n.ajax({
              type: cc11001100_hook("type", "post", "object-key-init"),
              url: cc11001100_hook("url", s, "object-key-init"),
              dataType: cc11001100_hook("dataType", "json", "object-key-init"),
              xhrFields: {
                withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
              },
              contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
              crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
              data: cc11001100_hook("data", JSON.stringify({
                follow: cc11001100_hook("follow", f, "object-key-init"),
                source: cc11001100_hook("source", t, "object-key-init"),
                username: cc11001100_hook("username", b, "object-key-init")
              }), "object-key-init"),
              success: function (s) {
                200 == parseInt(s.code) && (a.html("已关注").removeClass("person_deliver_letter_un").addClass("person_deliver_letter"), a.mouseover(function () {
                  a.html("取&nbsp;&nbsp;&nbsp;消");
                }), a.mouseout(function () {
                  a.html("已关注");
                })), e.csdn && e.csdn.watchBtnChange && e.csdn.watchBtnChange(1, f), _[f].flag = cc11001100_hook("_[f].flag", !0, "assign"), _[f].followClass = cc11001100_hook("_[f].followClass", "person_deliver person_deliver_letter", "assign"), _[f].followStr = cc11001100_hook("_[f].followStr", "已关注", "assign");
              }
            });
          } else o = cc11001100_hook("o", i.doUnfollowUrl, "assign"), n.ajax({
            type: cc11001100_hook("type", "post", "object-key-init"),
            url: cc11001100_hook("url", o, "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
            crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
            data: cc11001100_hook("data", JSON.stringify({
              follow: cc11001100_hook("follow", f, "object-key-init"),
              source: cc11001100_hook("source", t, "object-key-init"),
              username: cc11001100_hook("username", b, "object-key-init")
            }), "object-key-init"),
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            success: function (s) {
              200 == parseInt(s.code) && (a.html("关注").removeClass("person_deliver_letter").addClass("person_deliver_letter_un"), a.unbind("mouseover"), a.unbind("mouseout")), e.csdn && e.csdn.watchBtnChange && e.csdn.watchBtnChange(0, f), _[f].flag = cc11001100_hook("_[f].flag", !1, "assign"), _[f].followClass = cc11001100_hook("_[f].followClass", "person_deliver person_deliver_letter_un", "assign"), _[f].followStr = cc11001100_hook("_[f].followStr", "关注", "assign");
            }
          });
        } else e.location.href = cc11001100_hook("e.location.href", "https://passport.csdn.net/", "assign");
      });
    }
    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      var s,
        n = cc11001100_hook("n", e.offset(), "var-init"),
        t = cc11001100_hook("t", n.left, "var-init"),
        o = cc11001100_hook("o", n.top, "var-init"),
        a = cc11001100_hook("a", e.width(), "var-init"),
        i = cc11001100_hook("i", e.height(), "var-init"),
        l = cc11001100_hook("l", e[0].getBoundingClientRect(), "var-init"),
        r = cc11001100_hook("r", {}, "var-init");
      return l && Number(l.top, 10) < 162 ? (s = cc11001100_hook("s", "left:" + (t - 50 + a / 2) + "px;top:" + (o + i + 15) + "px", "assign"), r.isBottom = cc11001100_hook("r.isBottom", !0, "assign")) : (s = cc11001100_hook("s", "left:-999999999px;top:" + (o - 165) + "px", "assign"), r.realPos = cc11001100_hook("r.realPos", {
        left: cc11001100_hook("left", t - 50 + a / 2, "object-key-init"),
        top: cc11001100_hook("top", o, "object-key-init")
      }, "assign")), r.position = cc11001100_hook("r.position", s, "assign"), r;
    }
    function d() {
      n("#csdn-userTooltip").remove();
    }
    o && n.extend(i, o);
    var p,
      m,
      u,
      f,
      h,
      v,
      g = cc11001100_hook("g", {}, "var-init"),
      _ = cc11001100_hook("_", {}, "var-init"),
      w = cc11001100_hook("w", "", "var-init"),
      y = cc11001100_hook("y", !1, "var-init"),
      T = cc11001100_hook("T", '<svg id="csdnc-m-blank" viewBox="0 0 1024 1024" width="100%" height="100%" fill="#ccc"><path d="M516.266311 77.945505a8.788601 8.788601 0 0 0-8.532622 0L121.461878 292.455629a8.319307 8.319307 0 0 0-4.351637 7.252729v424.583284c0 2.986418 1.663861 5.75952 4.351637 7.252729l386.271811 214.510124a8.788601 8.788601 0 0 0 8.532622 0l386.271811-214.510124a8.319307 8.319307 0 0 0 4.351637-7.252729V299.708358a8.319307 8.319307 0 0 0-4.351637-7.252729L516.266311 77.945505z m37.671528-67.066412l386.314473 214.552788a85.027581 85.027581 0 0 1 43.900342 74.276477v424.583284c0 30.802766-16.809266 59.216399-43.943005 74.276477l-386.27181 214.552788c-26.024498 14.462795-57.808516 14.462795-83.875678 0l-386.314473-214.552788a85.027581 85.027581 0 0 1-43.900342-74.276477V299.708358c0-30.802766 16.809266-59.216399 43.943005-74.276477L470.019498 10.879093c26.024498-14.462795 57.808516-14.462795 83.875677 0z"></path></svg>', "var-init");
    s.domain = cc11001100_hook("s.domain", "csdn.net", "assign");
    var b = cc11001100_hook("b", function (e) {
      for (var n = cc11001100_hook("n", s.cookie.split("; "), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < n.length; t++) {
        var o = cc11001100_hook("o", n[t].split("="), "var-init");
        if (o[0] == e && "UD" == e) return decodeURIComponent(o[1]);
        if (o[0] == e) return decodeURI(o[1]);
      }
    }("UserName"), "var-init");
    n(s).on("mouseenter", "img[username], #csdn-userTooltip", function (s) {
      function o(e, s, t, o, a, l, r, c, d, p, m, u, h, v, g, _) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("l", l, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("d", d, "function-parameter");
        cc11001100_hook("p", p, "function-parameter");
        cc11001100_hook("m", m, "function-parameter");
        cc11001100_hook("u", u, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        cc11001100_hook("v", v, "function-parameter");
        cc11001100_hook("g", g, "function-parameter");
        cc11001100_hook("_", _, "function-parameter");
        g = cc11001100_hook("g", g || "<a href='javascript:void(0)' class='person_deliver person_deliver_letter_un' style='float:right;'>关注</a>", "assign");
        var w = cc11001100_hook("w", "<div id='csdn-userTooltip' style='" + u.position + "' data-mod='popu_60' class='tracking-ad" + (u.isBottom ? " csdn-userTooltip-pos" : " csdn-userTooltip-default") + "'><div class='person-info-div clearfix'><dt class='touxiang'><img src='" + e + "'></dt><div class='csdn-left-info'><dd class='person_info clearfix'><em class='name" + (s ? " name_short" : "") + (o ? " vipname" : "") + "'>" + t + "</em>" + v + "<span class='person-age'>码龄" + _ + "年</span></dd>" + d + h + "</div></div><div class='follow-div clearfix'>" + (l ? "<em class='fav'>粉丝 " + l + "</em>" : "") + g + "<a class='visoter'  target='_blank' href='https://blog.csdn.net/" + f + "?ref=" + i.ref + "'>访问主页</a><a class='visoter' target='_blank' href='https://im.csdn.net/im/main.html?userName=" + f + "'>私信</a></div>", "var-init");
        if (n("body").append(w), u.realPos) {
          var y = cc11001100_hook("y", n("#csdn-userTooltip"), "var-init"),
            T = cc11001100_hook("T", y.height(), "var-init"),
            b = cc11001100_hook("b", u.realPos.left, "var-init"),
            C = cc11001100_hook("C", u.realPos.top - T - 35, "var-init");
          y.css({
            left: cc11001100_hook("left", b, "object-key-init"),
            top: cc11001100_hook("top", C, "object-key-init")
          });
        }
      }
      function l() {
        n("#csdn-userTooltip").length && n("#csdn-userTooltip").remove(), f = cc11001100_hook("f", h.attr("username"), "assign");
        var s,
          t,
          l,
          d,
          p,
          m,
          C,
          x,
          U,
          k,
          B,
          j,
          D = cc11001100_hook("D", "", "var-init");
        if (!(u.closest("#csdn-userTooltip").length <= 0)) return !1;
        n("#csdn-userTooltip").remove(), _[f] ? (s = cc11001100_hook("s", _[f].followClass, "assign"), t = cc11001100_hook("t", _[f].followStr, "assign"), l = cc11001100_hook("l", _[f].avatarurl, "assign"), d = cc11001100_hook("d", _[f].nickname, "assign"), p = cc11001100_hook("p", _[f].isVip, "assign"), m = cc11001100_hook("m", _[f].hasDomain, "assign"), C = cc11001100_hook("C", _[f].isBlogWriter, "assign"), x = cc11001100_hook("x", _[f].favsCount, "assign"), U = cc11001100_hook("U", _[f].interestname, "assign"), k = cc11001100_hook("k", _[f].huistr, "assign"), j = cc11001100_hook("j", _[f].age, "assign"), D = cc11001100_hook("D", c(h), "assign"), v = cc11001100_hook("v", p ? "<span class='icon_vip'>" + a.vip + "</span>" : "", "assign"), v += cc11001100_hook("v", C ? "<span class='icon_writer'>" + a.writer + "</span>" : "", "assign"), w = cc11001100_hook("w", m ? "<li class='has-domain'>" + a.domain + "<a href='https://" + m + ".blog.csdn.net'>" + m + ".blog.csdn.net</a></li>" : "<li class='medal no-domain'>" + a.domainGrey + "暂未设置自定义域名</li>", "assign"), w = cc11001100_hook("w", "<dd class='csdn-domain'>" + w + "</dd>", "assign"), b ? (s && t && (B = cc11001100_hook("B", "<a href='javascript:void(0)' class='" + s + "'>" + t + "</a>", "assign")), b === f && (B = cc11001100_hook("B", "", "assign")), o(l, U, d, p, C, x, s, t, k, void 0, y, D, w, v, B, j), r()) : (o(l, U, d, p, C, x, s, t, k, void 0, y, D, w, v, B, j), n("#csdn-userTooltip .person_deliver").click(function () {
          e.location.href = cc11001100_hook("e.location.href", "https://passport.csdn.net/", "assign");
        }))) : n.ajax({
          type: cc11001100_hook("type", "get", "object-key-init"),
          url: cc11001100_hook("url", i.getUserProfileUrl + "?username=" + f, "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
          success: function (s) {
            var t,
              l,
              d,
              p,
              m,
              u,
              f,
              C,
              x,
              U,
              k,
              j,
              F,
              P = cc11001100_hook("P", "", "var-init"),
              L = cc11001100_hook("L", "", "var-init"),
              N = cc11001100_hook("N", "", "var-init"),
              O = cc11001100_hook("O", "", "var-init"),
              S = cc11001100_hook("S", !1, "var-init");
            if (200 === Number(s.code, 10)) {
              if (t = cc11001100_hook("t", s.data || i.defaultUserProfile, "assign"), !(j = cc11001100_hook("j", t.username, "assign"))) return !1;
              if (l = cc11001100_hook("l", t.avatarurl, "assign"), d = cc11001100_hook("d", t.nickname || j, "assign"), F = cc11001100_hook("F", t.years, "assign"), p = cc11001100_hook("p", t.fans_num, "assign"), m = cc11001100_hook("m", t.vip, "assign"), u = cc11001100_hook("u", t.domain, "assign"), f = cc11001100_hook("f", t.expert, "assign"), C = cc11001100_hook("C", t.medal ? t.medal : [], "assign"), x = cc11001100_hook("x", C.length, "assign"), x > 0 && (S = cc11001100_hook("S", !0, "assign")), v = cc11001100_hook("v", m ? "<span class='icon_vip'>" + a.vip + "</span>" : "", "assign"), v += cc11001100_hook("v", f ? "<span class='icon_writer'>" + a.writer + "</span>" : "", "assign"), w = cc11001100_hook("w", u ? "<li class='has-domain'>" + a.domain + "<a href='https://" + u + ".blog.csdn.net'>" + u + ".blog.csdn.net</a></li>" : "<li class='medal no-domain'>" + a.domainGrey + "暂未设置自定义域名</li>", "assign"), w = cc11001100_hook("w", "<dd class='csdn-domain'>" + w + "</dd>", "assign"), S) {
                C.length > 99999 ? (U = cc11001100_hook("U", 99999, "assign"), k = cc11001100_hook("k", !0, "assign")) : U = cc11001100_hook("U", C.length, "assign");
                for (var E = cc11001100_hook("E", 0, "var-init"); E < U; E++) N += cc11001100_hook("N", "<li class='medal' title='" + C[E].codename + "'><img src='" + C[E].image + "' alt='胸章'></li>", "assign");
                k && (N += cc11001100_hook("N", '<li class="medal medal-icon">' + T + C.length + "</li>", "assign")), N = cc11001100_hook("N", "<dd class='medals'><ul>" + N + "</ul></dd>", "assign");
              } else N = cc11001100_hook("N", "<li class='medal no-medals'>一个勋章都没有...</li>", "assign"), N = cc11001100_hook("N", "<dd class='medals'><ul>" + N + "</ul></dd>", "assign");
              if (null != t.identity) for (var I = cc11001100_hook("I", 0, "var-init"); I < t.identity.length; I++) {
                t.identity[I].name && (I < t.identity.length - 1 ? O += cc11001100_hook("O", t.identity[I].name + "<em>|</em>", "assign") : O += cc11001100_hook("O", t.identity[I].name, "assign"));
              }
              if (b) {
                var V = cc11001100_hook("V", i.checkFollowUrl + "?username=" + b + "&follows=" + j, "var-init");
                n.ajax({
                  type: cc11001100_hook("type", "get", "object-key-init"),
                  url: cc11001100_hook("url", V, "object-key-init"),
                  xhrFields: {
                    withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
                  },
                  dataType: cc11001100_hook("dataType", "json", "object-key-init"),
                  success: function (e) {
                    var s;
                    200 === e.code && e.data && (0 === e.data[j] ? (P = cc11001100_hook("P", "person_deliver person_deliver_letter_un", "assign"), L = cc11001100_hook("L", "关注", "assign"), y = cc11001100_hook("y", !1, "assign")) : (P = cc11001100_hook("P", "person_deliver person_deliver_letter", "assign"), L = cc11001100_hook("L", "已关注", "assign"), y = cc11001100_hook("y", !0, "assign"))), D = cc11001100_hook("D", c(h), "assign"), P && P && (s = cc11001100_hook("s", "<a href='javascript:void(0)' class='" + P + "'style='float:right;'>" + L + "</a>", "assign")), b === j && (s = cc11001100_hook("s", "", "assign")), o(l, O, d, m, f, p, P, L, N, x, y, D, w, v, s, F), g[j] = cc11001100_hook("g[j]", {}, "assign"), g[j].avatarurl = cc11001100_hook("g[j].avatarurl", l, "assign"), g[j].nickname = cc11001100_hook("g[j].nickname", d, "assign"), g[j].isVip = cc11001100_hook("g[j].isVip", m, "assign"), g[j].hasDomain = cc11001100_hook("g[j].hasDomain", u, "assign"), g[j].isBlogWriter = cc11001100_hook("g[j].isBlogWriter", f, "assign"), g[j].favsCount = cc11001100_hook("g[j].favsCount", p, "assign"), g[j].interestname = cc11001100_hook("g[j].interestname", O, "assign"), g[j].followClass = cc11001100_hook("g[j].followClass", P, "assign"), g[j].followStr = cc11001100_hook("g[j].followStr", L, "assign"), g[j].huistr = cc11001100_hook("g[j].huistr", N, "assign"), g[j].huicount = cc11001100_hook("g[j].huicount", x, "assign"), g[j].flag = cc11001100_hook("g[j].flag", y, "assign"), g[j].age = cc11001100_hook("g[j].age", F, "assign"), _[j] = cc11001100_hook("_[j]", g[j], "assign"), r();
                  }
                });
              } else D = cc11001100_hook("D", c(h), "assign"), o(l, O, d, m, f, p, P, L, N, x, y, D, w, v, B, F), n("#csdn-userTooltip .person_deliver").click(function () {
                e.location.href = cc11001100_hook("e.location.href", "https://passport.csdn.net/", "assign");
              }), g[j] = cc11001100_hook("g[j]", {}, "assign"), g[j].avatarurl = cc11001100_hook("g[j].avatarurl", l, "assign"), g[j].nickname = cc11001100_hook("g[j].nickname", d, "assign"), g[j].isVip = cc11001100_hook("g[j].isVip", m, "assign"), g[j].hasDomain = cc11001100_hook("g[j].hasDomain", u, "assign"), g[j].isBlogWriter = cc11001100_hook("g[j].isBlogWriter", f, "assign"), g[j].favsCount = cc11001100_hook("g[j].favsCount", p, "assign"), g[j].interestname = cc11001100_hook("g[j].interestname", O, "assign"), g[j].huistr = cc11001100_hook("g[j].huistr", N, "assign"), g[j].huicount = cc11001100_hook("g[j].huicount", x, "assign"), g[j].age = cc11001100_hook("g[j].age", F, "assign"), _[j] = cc11001100_hook("_[j]", g[j], "assign");
            }
          },
          error: function (e) {
            console.warn(e);
          }
        });
      }
      var s = cc11001100_hook("s", s || e.event, "var-init");
      return u = cc11001100_hook("u", n(s.target || s.srcElement), "assign"), h = cc11001100_hook("h", n(this), "assign"), clearTimeout(m), clearTimeout(p), null != n(this).attr("username") && (p = cc11001100_hook("p", setTimeout(l, 200), "assign")), n(this).attr("followtype") && (t = cc11001100_hook("t", n(this).attr("followtype"), "assign")), !1;
    }), n(s).on("mouseleave", "img[username]", function (e) {
      return clearTimeout(p), m = cc11001100_hook("m", setTimeout(d, 200), "assign"), !1;
    }), n(s).on("mouseleave", "#csdn-userTooltip", function (e) {
      return clearTimeout(m), d(), !1;
    });
  }, "assign");
}(window, document, jQuery), $(function () {
  window.csdn.userTooltip();
});