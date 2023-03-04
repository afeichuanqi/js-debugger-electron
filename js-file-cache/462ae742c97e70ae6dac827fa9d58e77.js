!function () {
  function nofoucsSwiperFn(e) {
    cc11001100_hook("e", e, "function-parameter");
    var o = cc11001100_hook("o", JSON.parse(JSON.stringify(e)), "var-init"),
      s = function (e, o) {
        var s = cc11001100_hook("s", '                  <div class="cmhead1_nd1_item _curPlaceholder" style="top: ' + (o ? "0px" : "30px") + '">                    <span class="cmhead1_nd1_sp0 _rValue">' + e.main_title + '</span>                    <span class="cmhead1_nd1_sp1">' + e.sub_title + "</span>                  </div>                  ", "var-init");
        $("._nfCon").append(s);
      };
    if (1 == o.length) return void s(o[0]);
    if (!window.__timer4nofocusAd) {
      var n = cc11001100_hook("n", 0, "var-init");
      s(o[0], !0), n += cc11001100_hook("n", 1, "assign"), window.__timer4nofocusAd = cc11001100_hook("window.__timer4nofocusAd", setInterval(function () {
        2 != window.__nofocusAdSwiperFlag && (o[n] || (n = cc11001100_hook("n", 0, "assign")), $(".cmhead1_nd1_item").removeClass("_curPlaceholder"), s(o[n]), n += cc11001100_hook("n", 1, "assign"), setTimeout(function () {
          for (var e = cc11001100_hook("e", 0, "var-init"); e < $(".cmhead1_nd1_item").length; e++) $(".cmhead1_nd1_item").eq(e).animate({
            top: cc11001100_hook("top", parseInt($(".cmhead1_nd1_item").eq(e).css("top")) - 30, "object-key-init")
          }, 300);
        }, 100), setTimeout(function () {
          $(".cmhead1_nd1_item").eq(0).remove();
        }, 1e3));
      }, 5e3), "assign");
    }
  }
  function showOpenMusicPlanIcon() {
    (document.documentElement.scrollTop || document.body.scrollTop) > 409 ? $(".suspension4rightside").css({
      position: cc11001100_hook("position", "fixed", "object-key-init"),
      top: cc11001100_hook("top", "342px", "object-key-init")
    }) : $(".suspension4rightside").css({
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", "770px", "object-key-init")
    });
  }
  var islogined = function () {
      var e = cc11001100_hook("e", utility.read("KuGoo"), "var-init");
      return "" != e && "undefined" != e.toString() && !1 !== e;
    },
    delHtmlTag = function (e) {
      return e.replace(/<[^>]+>/g, "");
    },
    htmlEncode = function (e) {
      var o = cc11001100_hook("o", "", "var-init");
      return 0 == e.length ? o : (o = cc11001100_hook("o", o.replace(/<[^>]+>/g, ""), "assign"), o = cc11001100_hook("o", e.replace(/\</g, "&lt;"), "assign"), o = cc11001100_hook("o", o.replace(/\>/g, "&gt;"), "assign"), o = cc11001100_hook("o", o.replace(/\'/g, "&#39;"), "assign"), o = cc11001100_hook("o", o.replace(/\"/g, "&quot;"), "assign"), o = cc11001100_hook("o", o.replace(/ /g, "&nbsp;"), "assign"));
    },
    keywordStorge = function (e) {
      if ("" != (e = cc11001100_hook("e", e.replace(/(^\s+)|(\s+$)/g, ""), "assign"))) {
        var o,
          s,
          n,
          t = cc11001100_hook("t", [], "var-init"),
          c = cc11001100_hook("c", !1, "var-init");
        for ("" != localStorage.s_keyword && void 0 !== localStorage.s_keyword && (t = cc11001100_hook("t", localStorage.s_keyword.split("|"), "assign")), o = cc11001100_hook("o", 0, "assign"), s = cc11001100_hook("s", t.length, "assign"); o < s; o++) t[o] == encodeURI(e) && (c = cc11001100_hook("c", !0, "assign"), n = cc11001100_hook("n", o, "assign"));
        c && t.splice(n, 1), t.length >= 5 && (t = cc11001100_hook("t", t.slice(t.length - 4, t.length), "assign")), t.push(encodeURI(e)), localStorage.s_keyword = cc11001100_hook("localStorage.s_keyword", t.join("|"), "assign");
      }
    },
    initUserInfo = function () {
      if (islogined()) {
        var kugouC = cc11001100_hook("kugouC", utility.read("KuGoo"), "var-init"),
          user_name = cc11001100_hook("user_name", kugouC.NickName.replace(/%/g, "\\"), "var-init"),
          user = cc11001100_hook("user", eval("'" + user_name + "'"), "var-init"),
          uer_img = cc11001100_hook("uer_img", kugouC.Pic, "var-init");
        $(".cmhead1_d5._login").hide(), $(".cmhead1_d6._userinfoBox").show(), -1 != uer_img.indexOf("http") ? $("._userinfoBox").find(".cmhead1_i2").attr("src", replaceHttpsImg(uer_img)) : $(".cmhead1_d6._userinfoBox").find(".cmhead1_i2").attr("src", replaceHttpsImg("http://imge.kugou.com/kugouicon/165/" + uer_img.substr(0, 8) + "/" + uer_img)), $(".cmhead1_d6._userinfoBox").find(".cmhead1_sp1").html(user);
      } else $(".cmhead1_d5._login").on("click", function (e) {
        $.ajax({
          url: cc11001100_hook("url", "https://staticssl.kugou.com/common/js/min/popuplogin-min.js?" + Math.round(new Date().getTime() / 1e3), "object-key-init"),
          dataType: cc11001100_hook("dataType", "script", "object-key-init"),
          success: function () {
            UsLogin();
          }
        });
      });
    },
    showSearchHistory = function () {
      var e;
      if ("" != localStorage.s_keyword && void 0 !== localStorage.s_keyword && (e = cc11001100_hook("e", localStorage.s_keyword.split("|").reverse(), "assign")), void 0 !== e) if (0 == e.length) ;else {
        for (var o = cc11001100_hook("o", "", "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < e.length; s++) o += cc11001100_hook("o", '<li class="cmhead1_li1 _recommenditem" type="song" rtext="' + htmlEncode(decodeURI(e[s])) + '">' + htmlEncode(decodeURI(e[s])) + "</li>", "assign");
        $("._historysong").html(o), $("._history4cmhead").show();
      }
    },
    getSearchRecommend = function (e) {
      $("._history4cmhead").hide(), $.ajax({
        type: cc11001100_hook("type", "GET", "object-key-init"),
        url: cc11001100_hook("url", "https://searchtip.kugou.com/getSearchTip?MusicTipCount=5&MVTipCount=2&albumcount=2&keyword=" + encodeURIComponent(e), "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
        success: function (o) {
          if (1 == o.status) {
            for (var s = cc11001100_hook("s", o.data[0].RecordDatas, "var-init"), n = cc11001100_hook("n", "", "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < s.length; t++) {
              var c = cc11001100_hook("c", s[t].HintInfo.replace(e, '<span class="cmhead1_sp4">' + e + "</span>"), "var-init");
              n += cc11001100_hook("n", '<li class="cmhead1_li1 _recommenditem" type="song" rtext="' + htmlEncode(s[t].HintInfo) + '">' + c + "</li>", "assign");
            }
            $("._recommendsong").html(n);
            for (var a = cc11001100_hook("a", o.data[1].RecordDatas, "var-init"), i = cc11001100_hook("i", "", "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < a.length; t++) {
              var r = cc11001100_hook("r", a[t].HintInfo.replace(e, '<span class="cmhead1_sp4">' + e + "</span>"), "var-init");
              i += cc11001100_hook("i", '<li class="cmhead1_li1 _recommenditem" type="mv" rtext="' + htmlEncode(a[t].HintInfo) + '">' + r + "</li>", "assign");
            }
            a.length ? $(".cmhead1_d13").css({
              display: cc11001100_hook("display", "flex", "object-key-init")
            }) : $(".cmhead1_d13").css({
              display: cc11001100_hook("display", "none", "object-key-init")
            }), $("._recommendmv").html(i), n || i ? $("._recommend4cmhead").show() : $("._recommend4cmhead").hide();
          }
        },
        error: function (e) {}
      });
    },
    initSearchInput = function () {
      var e = cc11001100_hook("e", "", "var-init");
      if (location.hash) {
        e = cc11001100_hook("e", decodeURIComponent(location.hash).substr(1).split("&"), "assign");
      }
      for (var o = cc11001100_hook("o", 0, "var-init"); o < e.length; o++) if (-1 != e[o].indexOf("searchKeyWord=")) {
        e[o].split("=")[1];
        break;
      }
      getBaseInfo(1014, function (e) {
        var o = cc11001100_hook("o", {
            userid: cc11001100_hook("userid", e.userid || 0, "object-key-init"),
            plat: cc11001100_hook("plat", 103, "object-key-init"),
            m_type: cc11001100_hook("m_type", 0, "object-key-init"),
            vip_type: cc11001100_hook("vip_type", 0, "object-key-init"),
            own_ads: {}
          }, "var-init"),
          s = cc11001100_hook("s", {
            appid: cc11001100_hook("appid", 1014, "object-key-init"),
            clientver: cc11001100_hook("clientver", e.clientver, "object-key-init"),
            clienttime: cc11001100_hook("clienttime", Math.round(new Date().getTime() / 1e3), "object-key-init"),
            mid: cc11001100_hook("mid", e.mid, "object-key-init"),
            dfid: cc11001100_hook("dfid", e.dfid, "object-key-init")
          }, "var-init");
        window.infSign(s, o, {
          useH5: cc11001100_hook("useH5", !0, "object-key-init"),
          postType: cc11001100_hook("postType", "json", "object-key-init"),
          log: cc11001100_hook("log", !1, "object-key-init"),
          callback: function (e) {
            $.ajax({
              type: cc11001100_hook("type", "post", "object-key-init"),
              url: cc11001100_hook("url", "https://gateway.kugou.com/ads.gateway/v1/search_no_focus_word?" + function (e) {
                var o = cc11001100_hook("o", [], "var-init");
                for (var s in e) o.push(s + "=" + e[s]);
                return o.join("&");
              }(e), "object-key-init"),
              data: cc11001100_hook("data", JSON.stringify(o), "object-key-init"),
              success: function (e) {
                var o = cc11001100_hook("o", "", "var-init");
                1 == e.status && (o = cc11001100_hook("o", e.data, "assign"), o.ads.length && nofoucsSwiperFn(o.ads));
              },
              error: function (e) {}
            });
          }
        });
      }), $(document).on("focus", "._cmheadsearchinput", function () {
        if ($("._cmheadsearchinput").val()) {
          var e = cc11001100_hook("e", htmlEncode($("._cmheadsearchinput").val().replace(/(^\s+)|(\s+$)/g, "")), "var-init");
          getSearchRecommend(e);
        } else showSearchHistory();
        window.__nofocusAdSwiperFlag = cc11001100_hook("window.__nofocusAdSwiperFlag", 2, "assign");
      }), $(document).on("blur", "._cmheadsearchinput", function () {
        setTimeout(function () {
          $("._history4cmhead").hide(), $("._recommend4cmhead").hide(), window.__nofocusAdSwiperFlag = cc11001100_hook("window.__nofocusAdSwiperFlag", 1, "assign");
        }, 500);
      }), $("._cmheadsearchinput").on("input", function (e) {
        var o = cc11001100_hook("o", htmlEncode(e.delegateTarget.value.replace(/(^\s+)|(\s+$)/g, "")), "var-init");
        o ? getSearchRecommend(o) : ($("._recommend4cmhead").hide(), showSearchHistory());
      }), $("._cmheadsearchinput").keydown(function (e) {
        if (13 == e.keyCode) {
          var o = cc11001100_hook("o", $("._cmheadsearchinput").val().replace(/(^\s+)|(\s+$)/g, ""), "var-init");
          !o && $("._curPlaceholder ._rValue").html() && (o = cc11001100_hook("o", $("._curPlaceholder ._rValue").html(), "assign")), o && (location.href = cc11001100_hook("location.href", "https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=" + encodeURIComponent(o), "assign"));
        }
        setTimeout(function () {
          $("._cmheadsearchinput").val().length ? $("._nfCon").css({
            opacity: cc11001100_hook("opacity", 0, "object-key-init")
          }) : $("._nfCon").css({
            opacity: cc11001100_hook("opacity", 1, "object-key-init")
          });
        }, 50);
      }), $(document).on("click", "._recommenditem", function () {
        var e = cc11001100_hook("e", $(this).attr("rtext").replace(/(^\s+)|(\s+$)/g, ""), "var-init");
        keywordStorge(e), e ? $("._nfCon").css({
          opacity: cc11001100_hook("opacity", 0, "object-key-init")
        }) : $("._nfCon").css({
          opacity: cc11001100_hook("opacity", 1, "object-key-init")
        }), $("._cmheadsearchinput").val(e);
        var o = cc11001100_hook("o", $(this).attr("type"), "var-init");
        $("._recommend4cmhead").hide();
        var s = cc11001100_hook("s", "https://www.kugou.com/yy/html/search.html#searchType=" + o + "&searchKeyWord=" + encodeURIComponent(e), "var-init");
        -1 != location.href.indexOf("yy/html/search.html") && -1 == location.href.indexOf("searchType=" + o) ? (location.replace(s), location.reload()) : location.href = cc11001100_hook("location.href", s, "assign");
      }), $(document).on("click", "._searchbtn4cmhead", function () {
        var e = cc11001100_hook("e", "", "var-init");
        $("._cmheadsearchinput").val() ? (e = cc11001100_hook("e", htmlEncode($("._cmheadsearchinput").val().replace(/(^\s+)|(\s+$)/g, "")), "assign"), $("._recommend4cmhead").hide()) : $("._curPlaceholder").length && (e = cc11001100_hook("e", $("._curPlaceholder ._rValue").html(), "assign")), keywordStorge(e), location.href = cc11001100_hook("location.href", "https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=" + encodeURIComponent(e), "assign");
      }), $(document).on("click", "._clearhistorysong", function () {
        localStorage.s_keyword = cc11001100_hook("localStorage.s_keyword", "", "assign"), $("._historysong").html(""), $("._history4cmhead").hide();
      });
    },
    initHeaderNavUI = function () {
      0 == location.pathname.indexOf("/ts") || 0 == location.pathname.indexOf("/zt") ? document.getElementById("_tshome").setAttribute("class", "cmhead2_li1 _active") : -1 != location.pathname.indexOf("/rank") ? document.getElementById("_rankhome").setAttribute("class", "cmhead2_li1 _active") : -1 != location.href.indexOf("download.kugou.com") && document.getElementById("_downloadhome").setAttribute("class", "cmhead2_li1 _active");
    };
  window.read = cc11001100_hook("window.read", function (e, o) {
    var s = cc11001100_hook("s", "", "var-init"),
      n = cc11001100_hook("n", e + "=", "var-init");
    document.cookie.split("").length > 0 && (offset = cc11001100_hook("offset", document.cookie.indexOf(n), "assign"), -1 != offset && (offset += cc11001100_hook("offset", n.length, "assign"), end = cc11001100_hook("end", document.cookie.indexOf(";", offset), "assign"), -1 == end && (end = cc11001100_hook("end", document.cookie.split("").length, "assign")), s = cc11001100_hook("s", document.cookie.substring(offset, end), "assign")));
    for (var t = cc11001100_hook("t", s.split("&"), "var-init"), c = cc11001100_hook("c", {}, "var-init"), a = cc11001100_hook("a", !1, "var-init"), i = cc11001100_hook("i", 0, "var-init"), r = cc11001100_hook("r", t.length, "var-init"); i < r; i++) {
      var d = cc11001100_hook("d", t[i].split("="), "var-init");
      "" != d[0] && (c[d[0]] = cc11001100_hook("c[d[0]]", d[1], "assign"), a = cc11001100_hook("a", !0, "assign"));
    }
    return !!a && c;
  }, "assign");
  var initSuspension4RightSide = function () {
    if (!$(".suspension4rightside").length) {
      $("body").append('                  <div class="suspension4rightside">                      <div class="s4rs_d1">                          <a href="https://download.kugou.com/" class="s4rs_a1 _s4rs_ic1">                              <div class="s4rs_d2 _s4rs_icm1"></div>                              <p class="s4rs_p1">下载酷狗</p>                              <div class="s4rs_d3">                                  <div class="s4rs_d3_d1">                                      <img src="https://www.kugou.com/common/images/qrcode4home_download.png" alt="" class="s4rs_d3_i1">                                      <p class="s4rs_d3_p2">下载手机酷狗</p>                                  </div>                              </div>                          </a>                      </div>                      <div class="s4rs_d1">                          <a href="https://open.kugou.com/docs/open-player/#/README?v=1" target="_blank" class="s4rs_a1 _s4rs_ic2">                              <div class="s4rs_d2 _s4rs_icm2"></div>                              <p class="s4rs_p1">曲库开放</p>                          </a>                      </div>                      <div class="s4rs_d1">                          <a href="https://www.kugou.com/shop/help/serviceCenter" class="s4rs_a1 _s4rs_ic3">                              <div class="s4rs_d2 _s4rs_icm3"></div>                              <p class="s4rs_p1">意见反馈</p>                          </a>                      </div>                      <div class="s4rs_d1">                          <a href="#" class="s4rs_a1 _s4rs_ic4">                              <div class="s4rs_d2 _s4rs_icm4"></div>                              <p class="s4rs_p1">返回顶部</p>                          </a>                      </div>                  </div>                ');
    }
  };
  $(document).ready(function () {
    initUserInfo(), initSearchInput(), initHeaderNavUI(), initSuspension4RightSide(), setTimeout(function () {
      showOpenMusicPlanIcon();
    }, 500), window.addEventListener("scroll", showOpenMusicPlanIcon), window.Lazyload && new Lazyload();
  });
}();