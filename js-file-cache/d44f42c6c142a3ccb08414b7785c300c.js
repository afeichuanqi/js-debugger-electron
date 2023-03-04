"use strict";

var _typeof = cc11001100_hook("_typeof", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
  return typeof e;
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, "var-init");
!function () {
  function e(e, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    var n = cc11001100_hook("n", document.createElement("script"), "var-init");
    n.type = cc11001100_hook("n.type", "text/javascript", "assign"), n.readyState ? n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
      "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), a && a());
    }, "assign") : n.onload = cc11001100_hook("n.onload", function () {
      a && a();
    }, "assign"), n.src = cc11001100_hook("n.src", e, "assign"), document.getElementsByTagName("head")[0].appendChild(n);
  }
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.tabType = cc11001100_hook("this.tabType", 1, "assign"), this.username = cc11001100_hook("this.username", e.username, "assign"), this.nickname = cc11001100_hook("this.nickname", e.nickname, "assign"), this.avatar = cc11001100_hook("this.avatar", e.avatar, "assign"), this.alreadyHaveCount = cc11001100_hook("this.alreadyHaveCount", -1, "assign"), this.allHaveCount = cc11001100_hook("this.allHaveCount", -1, "assign"), this.haveListReady = cc11001100_hook("this.haveListReady", this.allListReady = cc11001100_hook("this.allListReady", !1, "assign"), "assign"), this.options = cc11001100_hook("this.options", e, "assign"), this.self = cc11001100_hook("this.self", this.isSelf(), "assign"), this.allMedalList = cc11001100_hook("this.allMedalList", [], "assign"), this.haveMedalList = cc11001100_hook("this.haveMedalList", [], "assign"), this.allTabIndex = cc11001100_hook("this.allTabIndex", 0, "assign"), this.getData();
  }
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.username = cc11001100_hook("this.username", e.username, "assign"), this.haveDataReady = cc11001100_hook("this.haveDataReady", !1, "assign"), this.medalList = cc11001100_hook("this.medalList", [], "assign"), this.index = cc11001100_hook("this.index", 0, "assign"), this.options = cc11001100_hook("this.options", e, "assign"), this.getData();
  }
  function t(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.medalId = cc11001100_hook("this.medalId", e.medalId, "assign"), this.level = cc11001100_hook("this.level", e.level, "assign"), this.shareType = cc11001100_hook("this.shareType", e.shareType, "assign"), this.haveDataReady = cc11001100_hook("this.haveDataReady", !1, "assign"), this.msData = cc11001100_hook("this.msData", {}, "assign"), this.mAllData = cc11001100_hook("this.mAllData", e.allData || [], "assign"), this.options = cc11001100_hook("this.options", e, "assign"), this.getData();
  }
  var l = cc11001100_hook("l", "http" === location.protocol.substr(0, 4) ? "" : "https:", "var-init"),
    d = cc11001100_hook("d", l + "//g.csdnimg.cn/user-medal/2.0.0/user-medal.css", "var-init"),
    i = cc11001100_hook("i", "https://g-api.csdn.net/user-medal", "var-init");
  !function (e) {
    var a = cc11001100_hook("a", document.createElement("link"), "var-init");
    a.rel = cc11001100_hook("a.rel", "stylesheet", "assign"), a.type = cc11001100_hook("a.type", "text/css", "assign"), a.href = cc11001100_hook("a.href", e, "assign"), document.getElementsByTagName("head")[0].appendChild(a);
  }(d), window.QRCode || e("https://g.csdnimg.cn/lib/qrcode/1.0.0/qrcode.min.js"), window.html2canvas || e("https://g.csdnimg.cn/lib/html2canvas/1.4.1/html2canvas.min.js");
  a.prototype = cc11001100_hook("a.prototype", {
    constructor: cc11001100_hook("constructor", a, "object-key-init"),
    init: function () {
      this.haveListReady && this.allListReady && (this.renderMain(), this.renderTab(), this.renderNav());
    },
    renderMain: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        a = cc11001100_hook("a", $('<div id="user-medal">\n          <div class="user-medal-container">\n            <div class="user-medal-head"> \n              <img src="' + e.avatar + '">\n              <span class="user-medal-close"></span>\n            </div>\n            <div class="user-medal-body">\n              <div class="user-medal-content medal-clearfix">' + (e.self ? '\n                <div class="medal-content-body"></div>\n                <div class="medal-geted-share ' + (1 == e.tabType && e.alreadyHaveCount > 0 ? "" : "hide") + '"><span id="to-share-all">分享全部已解锁勋章</span></div>\n                ' : '<div class="medal-content-body medal-content-body-others"></div>') + "</div>\n            </div>\n          </div>\n        </div>"), "var-init");
      e.$box = cc11001100_hook("e.$box", a, "assign"), a.find(".user-medal-close").click(function () {
        e.close();
      }), a.on("click", function (a) {
        $(a.target).find(".user-medal-container").length && e.close();
      }), $("body").find("#user-medal").remove(), $("body").append(a), a.find("#to-share-all").click(function () {
        window.csdn.userMedal.share({
          shareType: cc11001100_hook("shareType", "all", "object-key-init"),
          allData: cc11001100_hook("allData", e.haveMedalList, "object-key-init")
        });
      });
    },
    renderTab: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        a = cc11001100_hook("a", $('<div class="user-medal-tab medal-clearfix">\n                <p class="medal-fl medal-user-info">\n                  <span class="medal-name" title="' + e.nickname + '">' + e.nickname + '</span>\n                  <span class="medal-count ' + (e.alreadyHaveCount > 0 ? "" : " no-data") + '" >已经获得<em id="medal-count">' + (e.alreadyHaveCount || 0) + "</em>种勋章啦~</span>\n                </p>" + (e.self ? '<p class="medal-fr medal-user-btns">\n                  <span class="medal-btn medal-btn-tab" data-type=1>已解锁勋章</span>\n                  <span class="medal-btn medal-btn-tab" data-type=2>全部勋章</span>\n                </p>\n                ' : " ") + "</div>"), "var-init");
      a.find(".medal-user-btns .medal-btn").click(function (a) {
        $(this).hasClass("medal-btn-red") || (e.resetScrollTop(), e.tabType = cc11001100_hook("e.tabType", $(this).data("type"), "assign"), e.toggleNav(), 1 === e.tabType ? (e.alreadyHaveCount > 0 && (e.$box.find("#medal-count").html(e.alreadyHaveCount || 0), e.$box.find(".medal-content-body").toggleClass("medal-content-body-geted"), e.$box.find(".medal-geted-share").show()), e.renderMedal(e.haveMedalList)) : (e.$box.find("#medal-count").html(e.allHaveCount || 0), e.$nav.find("li").removeClass("active"), e.$nav.find("li").first().click(), e.$box.find(".medal-geted-share").hide(), e.$box.find(".medal-content-body").removeClass("medal-content-body-geted")), $(this).addClass("medal-btn-red").siblings().removeClass("medal-btn-red"));
      }), this.$box.find(".user-medal-body").prepend(a), e.self ? this.$box.find(".medal-btn-tab[data-type=" + this.tabType + "]").click() : e.renderMedalOthers(e.haveMedalList);
    },
    renderNav: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        a = cc11001100_hook("a", e.allMedalList, "var-init");
      if (a) {
        var n = cc11001100_hook("n", $('<ul class="medal-content-nav medal-fl"></ul>'), "var-init");
        a.forEach(function (e, a) {
          n.append('<li class="medal-nav-item" data-list-index=' + a + ">" + e.classificationName + "<span>(" + e.alreadyTotal + "/" + e.total + ")</span></li>");
        }), n.on("click", "li", function (a) {
          if (!$(this).hasClass("active")) {
            var n = cc11001100_hook("n", $(this), "var-init"),
              t = cc11001100_hook("t", n.data("list-index"), "var-init");
            e.allTabIndex = cc11001100_hook("e.allTabIndex", t, "assign"), n.addClass("active").siblings().removeClass("active"), e.resetScrollTop(), e.renderMedal(e.allMedalList[t].medalData, "all");
          }
        }), e.$nav = cc11001100_hook("e.$nav", n, "assign"), e.$box.find(".user-medal-content").prepend(n), e.toggleNav();
      }
    },
    renderEmpty: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        a = cc11001100_hook("a", $('<div class="user-medal-content-empty">\n                        <div class="no-medal-img">\n                          <img src="https://g.csdnimg.cn/user-medal/2.0.0/images/empty.png" alt="">\n                        </div>\n                        <p class="no-medal-p">\n                          你还没有解锁过勋章哦～\n                        </p>\n                        <div class="no-medal-btn">\n                          <span class="to-all">去解锁</span>\n                        </div>\n                      </div>'), "var-init");
      a.find(".to-all").click(function (a) {
        e.tabType = cc11001100_hook("e.tabType", 2, "assign"), e.$box.find(".medal-btn-tab[data-type=" + e.tabType + "]").click();
      }), e.$box.find(".medal-content-body").html(a);
    },
    renderMedal: function (e, a) {
      var n = cc11001100_hook("n", this, "var-init"),
        t = cc11001100_hook("t", "", "var-init");
      if (0 === e.length && "all" !== a) return void this.renderEmpty();
      "all" === a && (e = cc11001100_hook("e", e.map(function (e) {
        return e.medalDetailDataList.forEach(function (a, n) {
          a.ifGet && (e.medalGetedMax = cc11001100_hook("e.medalGetedMax", n, "assign"));
        }), e.medalGetedMax = cc11001100_hook("e.medalGetedMax", void 0 !== e.medalGetedMax ? e.medalGetedMax : 0, "assign"), e.getImageUrl = cc11001100_hook("e.getImageUrl", e.medalDetailDataList[e.medalGetedMax].ifGet ? e.medalDetailDataList[e.medalGetedMax].getImageUrl : e.medalDetailDataList[e.medalGetedMax].noGetImageUrl, "assign"), e.medalName = cc11001100_hook("e.medalName", e.medalName, "assign"), e.desc = cc11001100_hook("e.desc", e.medalDetailDataList[e.medalGetedMax].desc, "assign"), e.getTime = cc11001100_hook("e.getTime", e.medalDetailDataList[e.medalGetedMax].getTime, "assign"), e.sourceUrl = cc11001100_hook("e.sourceUrl", e.medalDetailDataList[e.medalGetedMax].sourceUrl, "assign"), e.getOne = cc11001100_hook("e.getOne", e.medalDetailDataList[e.medalGetedMax].ifGet, "assign"), e.medalId = cc11001100_hook("e.medalId", e.id, "assign"), e.getLevel = cc11001100_hook("e.getLevel", e.medalGetedMax + 1, "assign"), e;
      }), "assign")), e.forEach(function (e, l) {
        t += cc11001100_hook("t", '<div class="medal-detail-item">\n                  <div class="medal-detail-def">\n                    <div class="medal-detail-item-up medal-clearfix">\n                      <div class="item-img  medal-fl">\n                        <img src="' + e.getImageUrl + '">' + ("all" === a ? 3 == e.medalType ? "<span class=" + (e.getOne ? "geted" : "") + ">Lv" + e.getLevel + "</span>" : "" : 3 == e.medalType ? "<span class='geted'}>Lv" + e.getLevel + "</span>" : "") + '\n                      </div>\n                      <div class="item-info  medal-fr">\n                        <h4>' + e.medalName + (e.medalType > 1 ? "Lv" + e.getLevel : "") + '</h4>\n                        <p class="desc">' + e.desc + '</p>\n                        <p class="date">' + (e.getTime ? e.getTime : "") + "</p>\n                      </div>\n                    </div>" + (2 === n.tabType && e.medalLevel > 1 ? '\n                    <div class="medal-detail-item-down">' + (e.medalLevel > 6 ? '<i class="btn-to-left" data-medal-total=' + e.medalLevel + " data-medal-index=" + l + '></i><i class="btn-to-right" data-medal-total=' + e.medalLevel + " data-medal-index=" + l + "></i>" : "") + '\n                      <div class="level-box">\n                        <ul>' + Array(e.medalLevel).toString().split(",").map(function (a, n) {
          return "<li data-medal-index=" + l + " data-medal-level=" + n + " data-medal-curlevel=" + e.medalGetedMax + " data-medal-geted=" + e.ifGet + '  class="' + (e.medalGetedMax === n && e.ifGet ? "geted-unchoosed geted-choosed" : e.medalGetedMax > n && e.ifGet ? "geted-unchoosed" : "") + '">Lv' + (n + 1) + "</li>";
        }).join("") + "</ul>\n                      </div >\n                    </div > " : ' <div class="medal-detail-item-down"></div>') + '</div >\n          <div class="medal-detail-hover">\n            <p>' + e.desc + '</p>\n            <div class="medal-clearfix">\n              ' + ("all" === a ? e.getOne ? '<span class="medal-fr to-share"  data-medal-id=' + e.medalId + " data-medal-level=" + e.getLevel + ">去分享</span>" : e.sourceUrl ? '<a class="medal-fr btn-active ml16" href="' + e.sourceUrl + '" target="_blank">我想要</a>' : "" : '<span class="medal-fr to-share"  data-medal-id=' + e.medalId + " data-medal-level=" + e.getLevel + ">去分享</span>") + "\n                    </div>\n          </div>\n                </div > ", "assign");
      }), n.$box.find(".medal-content-body").html(t), n.$box.find(".medal-detail-item-down .btn-to-right").click(function (e) {
        var a = cc11001100_hook("a", $(this), "var-init"),
          t = cc11001100_hook("t", n.allTabIndex, "var-init"),
          l = cc11001100_hook("l", a.data("medal-index"), "var-init"),
          d = cc11001100_hook("d", a.data("medal-total"), "var-init"),
          i = cc11001100_hook("i", Math.floor(d / 6), "var-init"),
          s = cc11001100_hook("s", n.allMedalList[t].medalData[l], "var-init"),
          o = cc11001100_hook("o", s._index ? s._index : 0, "var-init");
        n.$levelBox = cc11001100_hook("n.$levelBox", a.siblings(".level-box"), "assign"), o < i && (o++, s._index = cc11001100_hook("s._index", o, "assign"), o == i ? n.$levelBox.animate({
          "scroll-left": cc11001100_hook("scroll-left", 300 * (o - 1) + d % 6 * 50 + "px", "object-key-init")
        }, "slow") : n.$levelBox.animate({
          "scroll-left": cc11001100_hook("scroll-left", 300 * o + "px", "object-key-init")
        }, "slow"));
      }), n.$box.find(".medal-detail-item-down .btn-to-left").click(function (e) {
        var a = cc11001100_hook("a", $(this), "var-init"),
          t = cc11001100_hook("t", n.allTabIndex, "var-init"),
          l = cc11001100_hook("l", a.data("medal-index"), "var-init"),
          d = cc11001100_hook("d", n.allMedalList[t].medalData[l], "var-init"),
          i = cc11001100_hook("i", d._index ? d._index : 0, "var-init");
        n.$levelBox = cc11001100_hook("n.$levelBox", a.siblings(".level-box"), "assign"), i > 0 && (i--, d._index = cc11001100_hook("d._index", i, "assign"), void 0, n.$levelBox.animate({
          "scroll-left": cc11001100_hook("scroll-left", 300 * i + "px", "object-key-init")
        }, "slow"));
      }), n.$box.find(".medal-detail-item-down li").click(function (e) {
        var a = cc11001100_hook("a", $(this), "var-init"),
          t = cc11001100_hook("t", n.allTabIndex, "var-init"),
          l = cc11001100_hook("l", a.data("medal-index"), "var-init"),
          d = cc11001100_hook("d", a.data("medal-level"), "var-init"),
          i = cc11001100_hook("i", a.data("medal-curlevel"), "var-init"),
          s = cc11001100_hook("s", a.data("medal-geted"), "var-init");
        a.siblings().removeClass("geted-choosed ungeted"), i >= d && s ? a.addClass("geted-choosed") : a.addClass("ungeted");
        var o = cc11001100_hook("o", n.allMedalList[t].medalData[l], "var-init"),
          c = cc11001100_hook("c", o.medalDetailDataList[d], "var-init");
        void 0;
        var r = cc11001100_hook("r", '<div class="item-img  medal-fl">\n                          <img src="' + (c.ifGet ? c.getImageUrl : c.noGetImageUrl) + '">\n                          ' + (3 == o.medalType ? "<span class=" + (c.ifGet ? "geted" : "") + ">Lv" + (d + 1) + "</span>" : "") + '\n                        </div>\n                        <div class="item-info  medal-fr">\n                          <h4>' + o.medalName + "Lv" + (d + 1) + '</h4>\n                          <p class="desc">' + c.desc + '</p>\n                          <p class="date">' + (c.getTime ? c.getTime : "") + "</p>\n                        </div>", "var-init"),
          m = cc11001100_hook("m", "\n                <p>" + c.desc + '</p>\n                <div class="medal-clearfix">\n                  ' + (c.ifGet ? '<span class="medal-fr to-share"  data-medal-id=' + o.id + " data-medal-level=" + (d + 1) + " >去分享</span>" : c.sourceUrl ? '<a class="medal-fr btn-active ml16" href="' + c.sourceUrl + '" target="_blank">我想要</a>' : "") + "\n                </div>", "var-init"),
          v = cc11001100_hook("v", a.parents(".medal-detail-item"), "var-init");
        v.find(".medal-detail-def").find(".medal-detail-item-up").html(r), v.find(".medal-detail-hover").html(m), v.find(".medal-detail-hover .to-share").click(function () {
          var e = cc11001100_hook("e", $(this), "var-init"),
            a = cc11001100_hook("a", e.data("medal-id"), "var-init"),
            n = cc11001100_hook("n", e.data("medal-level"), "var-init");
          window.csdn.userMedal.share({
            shareType: cc11001100_hook("shareType", "single", "object-key-init"),
            medalId: cc11001100_hook("medalId", a, "object-key-init"),
            level: cc11001100_hook("level", n, "object-key-init")
          });
        }), v.find(".medal-detail-item-up .desc").mouseenter(function () {
          var e = cc11001100_hook("e", $(this), "var-init"),
            a = cc11001100_hook("a", e.parents(".medal-detail-item"), "var-init");
          a.find(".medal-detail-def").hide(), a.find(".medal-detail-hover").show();
        });
      }), n.$box.find(".medal-detail-item-up .desc").mouseenter(function () {
        var e = cc11001100_hook("e", $(this), "var-init"),
          a = cc11001100_hook("a", e.parents(".medal-detail-item"), "var-init");
        a.find(".medal-detail-def").hide(), a.find(".medal-detail-hover").show();
      }), n.$box.find(".medal-detail-hover").mouseleave(function () {
        var e = cc11001100_hook("e", $(this), "var-init");
        e.hide(), e.siblings(".medal-detail-def").show();
      }), n.$box.find(".to-share").click(function () {
        var e = cc11001100_hook("e", $(this), "var-init"),
          a = cc11001100_hook("a", e.data("medal-id"), "var-init"),
          n = cc11001100_hook("n", e.data("medal-level"), "var-init");
        void 0, window.csdn.userMedal.share({
          shareType: cc11001100_hook("shareType", "single", "object-key-init"),
          medalId: cc11001100_hook("medalId", a, "object-key-init"),
          level: cc11001100_hook("level", n, "object-key-init")
        });
      });
    },
    renderMedalOthers: function (e, a) {
      var n = cc11001100_hook("n", this, "var-init"),
        t = cc11001100_hook("t", "", "var-init");
      0 === e.length && "all" !== a || (e.forEach(function (e) {
        t += cc11001100_hook("t", '\n          <div class="medal-other-item">\n            <div class="medal-detail-def">\n              <div class="medal-detail-item-up">\n                <div class="item-img ">\n                  <img src="' + e.getImageUrl + '">\n                  ' + (3 == e.medalType ? '<span class="geted">Lv' + e.getLevel + "</span>" : "") + '\n                </div>\n                <div class="item-info ">\n                  <p class="desc">' + e.medalName + (e.medalType > 1 ? "Lv" + e.getLevel : "") + '</p>\n                </div>\n              </div>\n              <a class="get-btn" data-report-click=\'{"spm": "3001.9181"}\'  href="https://i.csdn.net/#/user-center/profile?openMedal=1" target="_blank">我也要</a> \n            </div>\n        </div>', "assign");
      }), n.$box.find(".medal-content-body").html(t));
    },
    toggleNav: function () {
      this.$nav && this.$nav.toggle();
    },
    close: function () {
      this.$box && this.$box.remove();
    },
    getCookie: function (e) {
      var a = cc11001100_hook("a", {}, "var-init");
      return document.cookie.replace(/([^=;\s]+)=([^=;\s]+)/g, function () {
        for (var e = cc11001100_hook("e", arguments.length, "var-init"), n = cc11001100_hook("n", Array(e), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e; t++) n[t] = cc11001100_hook("n[t]", arguments[t], "assign");
        var l = cc11001100_hook("l", n[1], "var-init"),
          d = cc11001100_hook("d", n[2], "var-init");
        a[l] = cc11001100_hook("a[l]", d, "assign");
      }), e ? a[e] : a;
    },
    isSelf: function () {
      var e = cc11001100_hook("e", this.getCookie("UserName"), "var-init");
      return this.username === e;
    },
    resetScrollTop: function () {
      this.$box.find(".medal-content-body").scrollTop(0);
    },
    getHaveMedalList: function () {
      var e = cc11001100_hook("e", this, "var-init");
      $.ajax({
        url: cc11001100_hook("url", i + "/web/userMedal/queryAlreadyMedal", "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        data: {
          username: cc11001100_hook("username", e.username, "object-key-init")
        },
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        success: function (a) {
          a.data && (e.haveMedalList = cc11001100_hook("e.haveMedalList", a.data.list || [], "assign"), e.alreadyHaveCount = cc11001100_hook("e.alreadyHaveCount", a.data.total || 0, "assign"), e.haveListReady = cc11001100_hook("e.haveListReady", !0, "assign"), e.init());
        },
        error: function (e) {}
      });
    },
    getAllMedalList: function () {
      var e = cc11001100_hook("e", this, "var-init");
      $.ajax({
        url: cc11001100_hook("url", i + "/web/userMedal/queryAllMedal", "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        data: {
          username: cc11001100_hook("username", e.username, "object-key-init")
        },
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        success: function (a) {
          a.data && (e.allMedalList = cc11001100_hook("e.allMedalList", a.data.details, "assign"), e.allHaveCount = cc11001100_hook("e.allHaveCount", a.data.collectionAlready, "assign"), e.allListReady = cc11001100_hook("e.allListReady", !0, "assign"), e.init());
        },
        error: function (e) {}
      });
    },
    getData: function () {
      this.getHaveMedalList(), this.getAllMedalList();
    }
  }, "assign"), n.prototype = cc11001100_hook("n.prototype", {
    constructor: cc11001100_hook("constructor", n, "object-key-init"),
    init: function () {
      this.haveDataReady && this.medalList.length > 0 && this.renderPop();
    },
    close: function () {
      this.$box && this.$box.remove();
    },
    renderPop: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        a = cc11001100_hook("a", $($.parseHTML('\n      <div id="user-medal-pop">\n         <div class="user-medal-pop-container">\n            <div class="header-box">\n              <span class="user-medal-close"></span>\n            </div>\n        <div class="main-box">' + (e.medalList.length > 1 ? '\n          <span class="btn btn-to-right"></span>\n          <span class="btn btn-to-left"></span>\n          <ul class="dot-ul">' + e.medalList.map(function (e, a) {
          return 0 === a ? '<li class="cur"></li>' : "<li></li>";
        }).join("") + "\n          </ul>" : "") + '\n          <h4>恭喜获得新勋章</h4>\n          <div class="medal-box">' + e.medalList.map(function (e, a) {
          return '\n            <div class="medal-item">\n              <p class="date">' + e.getTime + '</p>\n              <div class="img-box">\n                <img src="' + e.getImageUrl + '" alt="">\n                ' + (3 == e.medalType ? "<span>Lv" + e.getLevel + "</span>" : "") + "\n              </div>\n              <h6>" + e.medalName + (e.medalType > 1 ? "Lv" + e.getLevel : "") + '</h6>\n              <p class="notice">' + e.desc + "</p>\n            </div>\n            ";
        }).join("") + '\n          </div>\n        </div>\n          <div class="footer-box">\n            <span class="to-share">去分享</span>\n          </div>\n      </div>\n      </div>\n      ')), "var-init");
      e.$box = cc11001100_hook("e.$box", a, "assign"), a.find(".user-medal-close").click(function () {
        e.close();
      }), a.on("click", function (a) {
        $(a.target).find(".user-medal-pop-container").length && e.close();
      }), $("body").find("#user-medal-pop").remove(), $("body").append(a), a.find(".btn-to-right").click(function () {
        e.index < e.medalList.length - 1 && (e.index++, a.find(".dot-ul li").siblings().removeClass("cur"), a.find(".dot-ul li").eq(e.index).addClass("cur"), e.$mainBox = cc11001100_hook("e.$mainBox", a.find(".medal-box"), "assign"), e.$mainBox.animate({
          "scroll-left": cc11001100_hook("scroll-left", "+" + 340 * e.index + "px", "object-key-init")
        }, "slow"));
      }), a.find(".btn-to-left").click(function () {
        e.index > 0 && (e.index--, a.find(".dot-ul li").siblings().removeClass("cur"), a.find(".dot-ul li").eq(e.index).addClass("cur"), e.$mainBox = cc11001100_hook("e.$mainBox", a.find(".medal-box"), "assign"), e.$mainBox.animate({
          "scroll-left": cc11001100_hook("scroll-left", 340 * e.index + "px", "object-key-init")
        }, "slow"));
      }), a.find(".to-share").click(function () {
        var a = cc11001100_hook("a", e.medalList[e.index].medalId, "var-init"),
          n = cc11001100_hook("n", e.medalList[e.index].getLevel, "var-init");
        e.close(), window.csdn.userMedal.share({
          shareType: cc11001100_hook("shareType", "single", "object-key-init"),
          medalId: cc11001100_hook("medalId", a, "object-key-init"),
          level: cc11001100_hook("level", n, "object-key-init")
        });
      });
    },
    getCookie: function (e) {
      var a = cc11001100_hook("a", {}, "var-init");
      return document.cookie.replace(/([^=;\s]+)=([^=;\s]+)/g, function () {
        for (var e = cc11001100_hook("e", arguments.length, "var-init"), n = cc11001100_hook("n", Array(e), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e; t++) n[t] = cc11001100_hook("n[t]", arguments[t], "assign");
        var l = cc11001100_hook("l", n[1], "var-init"),
          d = cc11001100_hook("d", n[2], "var-init");
        a[l] = cc11001100_hook("a[l]", d, "assign");
      }), e ? a[e] : a;
    },
    getNotShowMedalList: function () {
      var e = cc11001100_hook("e", this, "var-init");
      $.ajax({
        url: cc11001100_hook("url", i + "/web/userMedal/getNotShowMedal", "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        data: {
          username: cc11001100_hook("username", e.username, "object-key-init")
        },
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        success: function (a) {
          a.data && (e.haveDataReady = cc11001100_hook("e.haveDataReady", !0, "assign"), e.medalList = cc11001100_hook("e.medalList", a.data.list || [], "assign"), e.init());
        },
        error: function (e) {}
      });
    },
    getData: function () {
      this.getNotShowMedalList();
    }
  }, "assign"), t.prototype = cc11001100_hook("t.prototype", {
    constructor: cc11001100_hook("constructor", t, "object-key-init"),
    init: function () {
      this.haveDataReady && "single" === this.options.shareType ? this.renderShareSingle() : this.renderShareAll();
    },
    close: function () {
      this.$box && this.$box.remove();
    },
    renderShareSingle: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        a = cc11001100_hook("a", $($.parseHTML('\n        <div id="user-medal-share">\n           <div class="user-medal-share-container">\n              <div class="header-box">\n                <span class="user-medal-close"></span>\n              </div>\n              <div class="main-box2" id="main-box">\n              <div class="main-up medal-clearfix">\n               <div class="img-box medal-fl">\n                 <img src="' + e.msData.userInfo.avatarUrl + '">\n                 ' + (!0 === e.msData.userInfo.ifVip ? '<span class="icon icon-vip"></span>' : "") + '\n               </div>\n               <div class="info-box medal-fl">\n                 <p class="desc">' + e.msData.userInfo.nickname + '</p>\n                 <p class="title">获得CSDN勋章</p>\n               </div>\n              </div>\n              <div class="main-center">\n               <div class="img-box">\n                 <img src="' + e.msData.single.getImageUrl + '">\n                 ' + (3 == e.msData.single.medalType ? "<span>Lv" + e.msData.single.getLevel + "</span>" : "") + "\n               </div>\n               <h3>" + e.msData.single.medalName + (e.msData.single.medalType > 1 ? "Lv" + e.msData.single.getLevel : "") + "</h3>\n               <p>" + e.msData.single.desc + '</p>\n              </div>\n              <div class="main-down medal-clearfix">\n               <div class="left medal-fl" id="qrcode">\n               </div>\n               <div class="right medal-fl">\n                 <p class="title">我在CSDN获得了' + e.msData.total + "种勋章</p>\n                 <div>\n                 " + e.msData.list.slice(0, 5).map(function (e) {
          return '<img src="' + e.getImageUrl + '">';
        }).join("") + '\n                 </div>\n                 <p class="sub_title">扫码来看看吧~</p>\n               </div>\n              </div>\n            </div>\n            <div class="footer-box">\n              <span id="to-save">下载图片</span>\n            </div>\n           </div>\n        </div>\n        ')), "var-init");
      e.$box = cc11001100_hook("e.$box", a, "assign"), a.find(".user-medal-close").click(function () {
        e.close();
      }), a.on("click", function (a) {
        $(a.target).find(".user-medal-share-container").length && e.close();
      }), $("body").find("#user-medal-share").remove(), $("body").append(a), a.find("#to-save").click(function () {
        e.loading || (e.loading = cc11001100_hook("e.loading", !0, "assign"), e.clickGeneratePicture());
      }), new QRCode(document.getElementById("qrcode"), {
        text: cc11001100_hook("text", e.msData.codeUrl, "object-key-init"),
        width: cc11001100_hook("width", 80, "object-key-init"),
        height: cc11001100_hook("height", 80, "object-key-init")
      });
    },
    renderShareAll: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        a = cc11001100_hook("a", $($.parseHTML('\n        <div id="user-medal-share">\n           <div class="user-medal-share-container">\n              <div class="header-box">\n                <span class="user-medal-close"></span>\n              </div>\n              <div class="main-box3" id="main-box">\n                <div class="main-up medal-clearfix">\n                <div class="img-box medal-fl">\n                    <img src="' + e.msData.userInfo.avatarUrl + '">\n                    ' + (!0 === e.msData.userInfo.ifVip ? '<span class="icon icon-vip"></span>' : "") + '\n                  </div>\n                  <div class="info-box medal-fl">\n                    <p class="desc">' + e.msData.userInfo.nickname + '</p>\n                    <p class="title">已获得' + e.mAllData.length + '种勋章～</p>\n                  </div>\n                </div>\n                <div class="main-center medal-clearfix">\n                  ' + e.mAllData.map(function (e) {
          return '<div class="img-item medal-fl">\n                  <div class="img-box">\n                    <img src="' + e.getImageUrl + '">\n                    ' + (3 == e.medalType ? "<span>Lv" + e.getLevel + "</span>" : "") + "\n                  </div>\n                  <p>" + e.medalName + (e.medalType > 1 ? "Lv" + e.getLevel : "") + "</p>\n                </div>";
        }).join("") + '\n                </div>\n                <div class="main-down medal-clearfix">\n                  <div class="left medal-fl" id="qrcode">\n                  </div>\n                  <div class="right medal-fl">\n                   ' + (e.mAllData.length > 9 ? '<p class="more">还有更多我的勋章<br />扫码来CSDN关注我～</p>' : '<p class="less">扫码来CSDN关注我～</p>') + '\n                  </div>\n                </div>\n              </div>\n              <div class="footer-box">\n                <span id="to-save2">下载图片</span>\n              </div>\n           </div>\n        </div>\n        ')), "var-init");
      e.$box = cc11001100_hook("e.$box", a, "assign"), a.find(".user-medal-close").click(function () {
        e.close();
      }), a.on("click", function (a) {
        $(a.target).find(".user-medal-share-container").length && e.close();
      }), $("body").find("#user-medal-share").remove(), $("body").append(a), a.find("#to-save2").click(function () {
        e.loading || (e.loading = cc11001100_hook("e.loading", !0, "assign"), e.clickGeneratePicture());
      }), new QRCode(document.getElementById("qrcode"), {
        text: cc11001100_hook("text", e.msData.codeUrl, "object-key-init"),
        width: cc11001100_hook("width", 80, "object-key-init"),
        height: cc11001100_hook("height", 80, "object-key-init")
      });
    },
    getCookie: function (e) {
      var a = cc11001100_hook("a", {}, "var-init");
      return document.cookie.replace(/([^=;\s]+)=([^=;\s]+)/g, function () {
        for (var e = cc11001100_hook("e", arguments.length, "var-init"), n = cc11001100_hook("n", Array(e), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e; t++) n[t] = cc11001100_hook("n[t]", arguments[t], "assign");
        var l = cc11001100_hook("l", n[1], "var-init"),
          d = cc11001100_hook("d", n[2], "var-init");
        a[l] = cc11001100_hook("a[l]", d, "assign");
      }), e ? a[e] : a;
    },
    clickGeneratePicture: function () {
      var e = cc11001100_hook("e", this, "var-init");
      window.scroll(0, 0);
      var a = cc11001100_hook("a", document.getElementById("main-box"), "var-init");
      html2canvas(a, {
        useCORS: cc11001100_hook("useCORS", !0, "object-key-init")
      }).then(function (a) {
        var n = cc11001100_hook("n", a.toDataURL("image/png"), "var-init"),
          t = cc11001100_hook("t", document.createElement("a"), "var-init");
        document.body.appendChild(t), t.href = cc11001100_hook("t.href", n, "assign"), t.download = cc11001100_hook("t.download", "快分享给好友吧~", "assign"), t.click(), e.toast("图片下载成功，快分享给好友吧~", 1e3), e.loading = cc11001100_hook("e.loading", !1, "assign");
      }).catch(function (a) {
        e.loading = cc11001100_hook("e.loading", !1, "assign");
      });
    },
    toast: function (e, a) {
      var n = cc11001100_hook("n", this, "var-init");
      a = cc11001100_hook("a", isNaN(a) ? 3e3 : a, "assign");
      var t = cc11001100_hook("t", document.createElement("div"), "var-init");
      t.innerHTML = cc11001100_hook("t.innerHTML", e, "assign"), t.style.cssText = cc11001100_hook("t.style.cssText", "padding:0px 10px;opacity: 0.8;height: 32px;background:rgba(34,34,38,1);color: rgb(255, 255, 255);line-height: 32px;text-align: center;border-radius: 4px;position: fixed;top: 14%;left:50%;transform:translate(-50%, -50%);z-index: 999999;font-size: 14px;", "assign"), document.getElementById("user-medal-share").appendChild(t), setTimeout(function () {
        t.style.webkitTransition = cc11001100_hook("t.style.webkitTransition", "-webkit-transform 0.5s ease-in, opacity 0.5s ease-in", "assign"), t.style.opacity = cc11001100_hook("t.style.opacity", "0", "assign"), setTimeout(function () {
          document.getElementById("user-medal-share").removeChild(t), n.close();
        }, 500);
      }, a);
    },
    shareMedal: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        a = cc11001100_hook("a", {}, "var-init");
      a = cc11001100_hook("a", "single" === e.options.shareType ? {
        medalId: cc11001100_hook("medalId", e.medalId, "object-key-init"),
        level: cc11001100_hook("level", e.level, "object-key-init"),
        shareType: cc11001100_hook("shareType", e.shareType, "object-key-init")
      } : {
        shareType: cc11001100_hook("shareType", e.shareType, "object-key-init")
      }, "assign"), $.ajax({
        url: cc11001100_hook("url", i + "/web/userMedal/shareMedal", "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        data: cc11001100_hook("data", a, "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        success: function (a) {
          a.data && (e.haveDataReady = cc11001100_hook("e.haveDataReady", !0, "assign"), e.msData = cc11001100_hook("e.msData", a.data || {}, "assign"), e.init());
        },
        error: function (e) {}
      });
    },
    getData: function () {
      this.shareMedal();
    }
  }, "assign"), window.csdn = cc11001100_hook("window.csdn", window.csdn || {}, "assign"), window.csdn.userMedal = cc11001100_hook("window.csdn.userMedal", {
    show: function (e) {
      return new a(e);
    },
    pop: function (e) {
      return new n(e);
    },
    share: function (e) {
      return new t(e);
    }
  }, "assign"), $(document).on("click", "[csdn-user-medal-btn=true], .csdn-user-medal-btn", function (e) {
    var a = cc11001100_hook("a", $(this), "var-init"),
      n = cc11001100_hook("n", a.data("username"), "var-init"),
      t = cc11001100_hook("t", a.data("nickname"), "var-init"),
      l = cc11001100_hook("l", a.data("avatar"), "var-init");
    void 0, t && n && l && window.csdn.userMedal.show({
      username: cc11001100_hook("username", n, "object-key-init"),
      avatar: cc11001100_hook("avatar", l, "object-key-init"),
      nickname: cc11001100_hook("nickname", t, "object-key-init")
    });
  });
}();