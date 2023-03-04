window.BCSE_KEY = cc11001100_hook("window.BCSE_KEY", '', "assign"), window.BCSE_VS = cc11001100_hook("window.BCSE_VS", '2.0', "assign"), window.BCSE_TK = cc11001100_hook("window.BCSE_TK", '5ff687f1302e609d08e92386af91fb15', "assign");
!function () {
  window.BCse = cc11001100_hook("window.BCse", {}, "assign");
  var e = cc11001100_hook("e", function (e) {
      "use strict";

      var t, r, o, a, n, s, i, c, u;
      return r = cc11001100_hook("r", function (e, t, r) {
        e.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = cc11001100_hook("e[\"on\" + t]", r, "assign");
      }, "assign"), o = cc11001100_hook("o", function (r, o) {
        t.log("Garbage collecting!"), o.parentNode.removeChild(o), e[r] = cc11001100_hook("e[r]", void 0, "assign");
        try {
          delete e[r];
        } catch (a) {}
      }, "assign"), a = cc11001100_hook("a", function (e, t) {
        var r,
          o,
          a = cc11001100_hook("a", "", "var-init");
        for (r in e) e.hasOwnProperty(r) && (r = cc11001100_hook("r", t ? encodeURIComponent(r) : r, "assign"), o = cc11001100_hook("o", t ? encodeURIComponent(e[r]) : e[r], "assign"), a += cc11001100_hook("a", r + "=" + o + "&", "assign"));
        return a.replace(/&$/, "");
      }, "assign"), n = cc11001100_hook("n", function () {
        var e = cc11001100_hook("e", "", "var-init"),
          t = cc11001100_hook("t", [], "var-init"),
          r = cc11001100_hook("r", "0123456789ABCDEF", "var-init"),
          o = cc11001100_hook("o", 0, "var-init");
        for (o = cc11001100_hook("o", 0, "assign"); 32 > o; o += cc11001100_hook("o", 1, "assign")) t[o] = cc11001100_hook("t[o]", r.substr(Math.floor(16 * Math.random()), 1), "assign");
        return t[12] = cc11001100_hook("t[12]", "4", "assign"), t[16] = cc11001100_hook("t[16]", r.substr(3 & t[16] | 8, 1), "assign"), e = cc11001100_hook("e", "flyjsonp_" + t.join(""), "assign");
      }, "assign"), s = cc11001100_hook("s", function (e, r) {
        t.log(r), "undefined" != typeof e && e(r);
      }, "assign"), i = cc11001100_hook("i", function (e, r) {
        t.log("GET success"), "undefined" != typeof e && e(r), t.log(r);
      }, "assign"), c = cc11001100_hook("c", function (e, r) {
        t.log("POST success"), "undefined" != typeof e && e(r), t.log(r);
      }, "assign"), u = cc11001100_hook("u", function (e) {
        t.log("Request complete"), "undefined" != typeof e && e();
      }, "assign"), t = cc11001100_hook("t", {}, "assign"), t.options = cc11001100_hook("t.options", {
        debug: cc11001100_hook("debug", !1, "object-key-init")
      }, "assign"), t.init = cc11001100_hook("t.init", function (e) {
        var r;
        t.log("Initializing!");
        for (r in e) e.hasOwnProperty(r) && (t.options[r] = cc11001100_hook("t.options[r]", e[r], "assign"));
        return t.log("Initialization options"), t.log(t.options), !0;
      }, "assign"), t.log = cc11001100_hook("t.log", function (r) {
        e.console && t.options.debug && e.console.log(r);
      }, "assign"), t.get = cc11001100_hook("t.get", function (m) {
        m = cc11001100_hook("m", m || {}, "assign");
        var d = cc11001100_hook("d", m.url, "var-init"),
          p = cc11001100_hook("p", m.callbackParameter || "callback", "var-init"),
          l = cc11001100_hook("l", m.parameters || {}, "var-init"),
          y = cc11001100_hook("y", e.document.createElement("script"), "var-init"),
          h = cc11001100_hook("h", n(), "var-init"),
          f = cc11001100_hook("f", "?", "var-init");
        if (!d) throw new Error("URL must be specified!");
        l[p] = cc11001100_hook("l[p]", h, "assign"), d.indexOf("?") >= 0 && (f = cc11001100_hook("f", "&", "assign")), d += cc11001100_hook("d", f + a(l, !0), "assign"), e[h] = cc11001100_hook("e[h]", function (e) {
          "undefined" == typeof e ? s(m.error, "Invalid JSON data returned") : "post" === m.httpMethod ? (e = cc11001100_hook("e", e.query.results, "assign"), e && e.postresult ? (e = cc11001100_hook("e", e.postresult.json ? e.postresult.json : e.postresult, "assign"), c(m.success, e)) : s(m.error, "Invalid JSON data returned")) : i(m.success, e), o(h, y), u(m.complete);
        }, "assign"), t.log("Getting JSONP data"), y.setAttribute("src", d), y.setAttribute("charset", "utf-8"), e.document.getElementsByTagName("head")[0].appendChild(y), r(y, "error", function () {
          o(h, y), u(m.complete), s(m.error, "Error while trying to access the URL");
        });
      }, "assign"), t.post = cc11001100_hook("t.post", function (e) {
        e = cc11001100_hook("e", e || {}, "assign");
        var r,
          o,
          n = cc11001100_hook("n", e.url, "var-init"),
          s = cc11001100_hook("s", e.parameters || {}, "var-init"),
          i = cc11001100_hook("i", {}, "var-init");
        if (!n) throw new Error("URL must be specified!");
        r = cc11001100_hook("r", encodeURIComponent('select * from jsonpost where url="' + n + '" and postdata="' + a(s, !1) + '"'), "assign"), o = cc11001100_hook("o", "http://query.yahooapis.com/v1/public/yql?q=" + r + "&format=json&env=" + encodeURIComponent("store://datatables.org/alltableswithkeys"), "assign"), i.url = cc11001100_hook("i.url", o, "assign"), i.httpMethod = cc11001100_hook("i.httpMethod", "post", "assign"), "undefined" != typeof e.success && (i.success = cc11001100_hook("i.success", e.success, "assign")), "undefined" != typeof e.error && (i.error = cc11001100_hook("i.error", e.error, "assign")), "undefined" != typeof e.complete && (i.complete = cc11001100_hook("i.complete", e.complete, "assign")), t.get(i);
      }, "assign"), t;
    }(window), "var-init"),
    t = cc11001100_hook("t", function () {
      function e() {
        f = cc11001100_hook("f", 1, "assign");
      }
      function t() {
        f = cc11001100_hook("f", 0, "assign");
      }
      function o(e) {
        cc11001100_hook("e", e, "function-parameter");
        e && r.count(e) > 0 && (e.erroStatus && 0 === e.erroStatus.erroNo ? (p = cc11001100_hook("p", 0, "assign"), e.searchInfo && (l = cc11001100_hook("l", e.searchInfo, "assign"), e.searchInfo.facets && (y = cc11001100_hook("y", e.searchInfo.facets, "assign"))), e.blockData && (d = cc11001100_hook("d", e.blockData, "assign"))) : p = cc11001100_hook("p", e.erroStatus.erroNo, "assign"));
      }
      function a(e) {
        cc11001100_hook("e", e, "function-parameter");
        e && r.count(e) > 0 && (0 === e.error ? (p = cc11001100_hook("p", 0, "assign"), h = cc11001100_hook("h", e, "assign")) : p = cc11001100_hook("p", 6, "assign"));
      }
      function n() {
        var e = cc11001100_hook("e", [], "var-init");
        if (0 === p && d.length > 0) for (var t = cc11001100_hook("t", 0, "var-init"); t < d.length; t++) e[t] = cc11001100_hook("e[t]", {}, "assign"), e[t].title = cc11001100_hook("e[t].title", d[t].title ? d[t].title : "", "assign"), 0 === f && (e[t].title = cc11001100_hook("e[t].title", e[t].title.replace(/&lt;em&gt;/g, "").replace(/<em>/g, ""), "assign"), e[t].title = cc11001100_hook("e[t].title", e[t].title.replace(/&lt;\/em&gt;/g, "").replace(/<\/em>/g, ""), "assign")), e[t].linkUrl = cc11001100_hook("e[t].linkUrl", d[t].linkurl ? d[t].linkurl : "", "assign"), e[t]["abstract"] = cc11001100_hook("e[t][\"abstract\"]", d[t]["abstract"] ? d[t]["abstract"] : "", "assign"), e[t].image = cc11001100_hook("e[t].image", d[t].image ? d[t].image : "", "assign"), e[t].dispUrl = cc11001100_hook("e[t].dispUrl", d[t].dispurl ? d[t].dispurl : "", "assign"), e[t].dispTime = cc11001100_hook("e[t].dispTime", d[t].timeshow ? d[t].timeshow : "", "assign"), d[t].summarywords && r.count(d[t].summarywords) > 0 && (5 === l.tplId ? (e[t].forumName = cc11001100_hook("e[t].forumName", d[t].summarywords.forumName ? d[t].summarywords.forumName : "", "assign"), e[t].author = cc11001100_hook("e[t].author", d[t].summarywords.author ? d[t].summarywords.author : "", "assign"), e[t].createdTime = cc11001100_hook("e[t].createdTime", d[t].summarywords.createdTime ? d[t].summarywords.createdTime : "", "assign"), e[t].lastReplyTime = cc11001100_hook("e[t].lastReplyTime", d[t].summarywords.lastReplyTime ? d[t].summarywords.lastReplyTime : "", "assign"), e[t].replyCount = cc11001100_hook("e[t].replyCount", d[t].summarywords.replyCount ? d[t].summarywords.replyCount : "", "assign"), e[t].viewCount = cc11001100_hook("e[t].viewCount", d[t].summarywords.viewCount ? d[t].summarywords.viewCount : "", "assign"), e[t].threadClassify = cc11001100_hook("e[t].threadClassify", d[t].summarywords.threadClassify ? d[t].summarywords.threadClassify : "", "assign")) : 3 === l.tplId ? (e[t].genre = cc11001100_hook("e[t].genre", d[t].summarywords.genre ? d[t].summarywords.genre : "", "assign"), e[t].downloadCount = cc11001100_hook("e[t].downloadCount", d[t].summarywords.downloadCount ? d[t].summarywords.downloadCount : "", "assign"), e[t].dateModified = cc11001100_hook("e[t].dateModified", d[t].summarywords.dateModified ? d[t].summarywords.dateModified : "", "assign"), e[t].gameSubCategory = cc11001100_hook("e[t].gameSubCategory", d[t].summarywords.gameSubCategory ? d[t].summarywords.gameSubCategory : "", "assign"), e[t].datePublished = cc11001100_hook("e[t].datePublished", d[t].summarywords.datePublished ? d[t].summarywords.datePublished : "", "assign"), e[t].version = cc11001100_hook("e[t].version", d[t].summarywords.version ? d[t].summarywords.version : "", "assign"), e[t].downloadUrl = cc11001100_hook("e[t].downloadUrl", d[t].summarywords.downloadUrl ? d[t].summarywords.downloadUrl : "", "assign"), e[t].gameCategory = cc11001100_hook("e[t].gameCategory", d[t].summarywords.gameCategory ? d[t].summarywords.gameCategory : "", "assign"), e[t].typicalAgeRange = cc11001100_hook("e[t].typicalAgeRange", d[t].summarywords.typicalAgeRange ? d[t].summarywords.typicalAgeRange : "", "assign"), e[t].tag = cc11001100_hook("e[t].tag", d[t].summarywords.tag ? d[t].summarywords.tag : "", "assign"), e[t].device = cc11001100_hook("e[t].device", d[t].summarywords.device ? d[t].summarywords.device : "", "assign"), e[t].inLanguage = cc11001100_hook("e[t].inLanguage", d[t].summarywords.inLanguage ? d[t].summarywords.inLanguage : "", "assign")) : 2 === l.tplId ? (e[t].genre = cc11001100_hook("e[t].genre", d[t].summarywords.genre ? d[t].summarywords.genre : "", "assign"), e[t].wordCount = cc11001100_hook("e[t].wordCount", d[t].summarywords.wordCount ? d[t].summarywords.wordCount : "", "assign"), e[t].author = cc11001100_hook("e[t].author", d[t].summarywords.author ? d[t].summarywords.author : "", "assign"), e[t].trialStatus = cc11001100_hook("e[t].trialStatus", d[t].summarywords.trialStatus ? d[t].summarywords.trialStatus : "", "assign"), e[t].updateStatus = cc11001100_hook("e[t].updateStatus", d[t].summarywords.updateStatus ? d[t].summarywords.updateStatus : "", "assign"), e[t].totalClick = cc11001100_hook("e[t].totalClick", d[t].summarywords.totalClick ? d[t].summarywords.totalClick : "", "assign"), e[t].weeklyClick = cc11001100_hook("e[t].weeklyClick", d[t].summarywords.weeklyClick ? d[t].summarywords.weeklyClick : "", "assign"), e[t].monthlyClick = cc11001100_hook("e[t].monthlyClick", d[t].summarywords.monthlyClick ? d[t].summarywords.monthlyClick : "", "assign"), e[t].dateModified = cc11001100_hook("e[t].dateModified", d[t].summarywords.dateModified ? d[t].summarywords.dateModified : "", "assign")) : 1 === l.tplId ? (e[t].genre = cc11001100_hook("e[t].genre", d[t].summarywords.genre ? d[t].summarywords.genre : "", "assign"), e[t].contentLocation = cc11001100_hook("e[t].contentLocation", d[t].summarywords.contentLocation ? d[t].summarywords.contentLocation : "", "assign"), e[t].description = cc11001100_hook("e[t].description", d[t].summarywords.description ? d[t].summarywords.description : "", "assign"), e[t].host = cc11001100_hook("e[t].host", d[t].summarywords.host ? d[t].summarywords.host : "", "assign"), e[t].provider = cc11001100_hook("e[t].provider", d[t].summarywords.provider ? d[t].summarywords.provider : "", "assign"), e[t].actorName = cc11001100_hook("e[t].actorName", d[t].summarywords.actorName ? d[t].summarywords.actorName : "", "assign")) : 6 === l.tplId ? (e[t].tag = cc11001100_hook("e[t].tag", d[t].summarywords.tag ? d[t].summarywords.tag : "", "assign"), e[t].author_nickname = cc11001100_hook("e[t].author_nickname", d[t].summarywords.author_nickname ? d[t].summarywords.author_nickname : "", "assign"), e[t].author_url = cc11001100_hook("e[t].author_url", d[t].summarywords.author_url ? d[t].summarywords.author_url : "", "assign"), e[t].replyCount = cc11001100_hook("e[t].replyCount", d[t].summarywords.replyCount ? d[t].summarywords.replyCount : "", "assign"), e[t].property = cc11001100_hook("e[t].property", d[t].summarywords.property ? d[t].summarywords.property : "", "assign"), e[t].breadCrumb_url = cc11001100_hook("e[t].breadCrumb_url", d[t].summarywords.breadCrumb_url ? d[t].summarywords.breadCrumb_url : "", "assign"), e[t].breadCrumb_title = cc11001100_hook("e[t].breadCrumb_title", d[t].summarywords.breadCrumb_title ? d[t].summarywords.breadCrumb_title : "", "assign"), e[t].price_new = cc11001100_hook("e[t].price_new", d[t].summarywords.price_new ? d[t].summarywords.price_new : "", "assign"), e[t].price_old = cc11001100_hook("e[t].price_old", d[t].summarywords.price_old ? d[t].summarywords.price_old : "", "assign"), e[t].discount_value = cc11001100_hook("e[t].discount_value", d[t].summarywords.discount_value ? d[t].summarywords.discount_value : "", "assign"), e[t].discount_description = cc11001100_hook("e[t].discount_description", d[t].summarywords.discount_description ? d[t].summarywords.discount_description : "", "assign"), e[t].review_rating = cc11001100_hook("e[t].review_rating", d[t].summarywords.review_rating ? d[t].summarywords.review_rating : "", "assign"), e[t].review_count = cc11001100_hook("e[t].review_count", d[t].summarywords.review_count ? d[t].summarywords.review_count : "", "assign"), e[t].location_address = cc11001100_hook("e[t].location_address", d[t].summarywords.location_address ? d[t].summarywords.location_address : "", "assign"), e[t].location_tel = cc11001100_hook("e[t].location_tel", d[t].summarywords.location_tel ? d[t].summarywords.location_tel : "", "assign"), e[t].location_area = cc11001100_hook("e[t].location_area", d[t].summarywords.location_area ? d[t].summarywords.location_area : "", "assign"), e[t].time_startDate = cc11001100_hook("e[t].time_startDate", d[t].summarywords.time_startDate ? d[t].summarywords.time_startDate : "", "assign"), e[t].time_endDate = cc11001100_hook("e[t].time_endDate", d[t].summarywords.time_endDate ? d[t].summarywords.time_endDate : "", "assign")) : 8 === l.tplId && (e[t].actor_name = cc11001100_hook("e[t].actor_name", d[t].summarywords.actor_name ? d[t].summarywords.actor_name : "", "assign"), e[t].genre = cc11001100_hook("e[t].genre", d[t].summarywords.genre ? d[t].summarywords.genre : "", "assign"), e[t].contentLocation = cc11001100_hook("e[t].contentLocation", d[t].summarywords.contentLocation ? d[t].summarywords.contentLocation : "", "assign"), e[t].director_name = cc11001100_hook("e[t].director_name", d[t].summarywords.director_name ? d[t].summarywords.director_name : "", "assign"), e[t].inLanguage = cc11001100_hook("e[t].inLanguage", d[t].summarywords.inLanguage ? d[t].summarywords.inLanguage : "", "assign"), e[t].commentNum = cc11001100_hook("e[t].commentNum", d[t].summarywords.commentNum ? d[t].summarywords.commentNum : "", "assign")));
        return e;
      }
      function s() {
        var e = cc11001100_hook("e", [], "var-init");
        if (0 === p && d.length > 0) for (var t = cc11001100_hook("t", 0, "var-init"); t < d.length; t++) e[t] = cc11001100_hook("e[t]", d[t], "assign");
        return e;
      }
      function i() {
        var e = cc11001100_hook("e", {}, "var-init");
        return 0 === p && r.count(l) > 0 && (e.totalNum = cc11001100_hook("e.totalNum", l.totalNum ? l.totalNum : "", "assign"), e.tplId = cc11001100_hook("e.tplId", l.tplId ? l.tplId : "", "assign"), e.curPage = cc11001100_hook("e.curPage", l.curPage ? l.curPage : "", "assign"), e.searchTime = cc11001100_hook("e.searchTime", l.searchTime ? l.searchTime : "", "assign"), e.orgQuery = cc11001100_hook("e.orgQuery", l.jcInfo && l.jcInfo.org_query ? l.jcInfo.org_query : "", "assign"), e.jcQuery = cc11001100_hook("e.jcQuery", l.jcInfo && l.jcInfo.jc_query ? l.jcInfo.jc_query : "", "assign"), e.jcStatus = cc11001100_hook("e.jcStatus", l.jcInfo && l.jcInfo.search_status ? l.jcInfo.search_status : "", "assign")), e;
      }
      function c() {
        var e = cc11001100_hook("e", {}, "var-init");
        return 0 === p && r.count(y) > 0 && (e = cc11001100_hook("e", y, "assign")), e;
      }
      function u() {
        var e = cc11001100_hook("e", [], "var-init"),
          t = cc11001100_hook("t", [], "var-init");
        if (h.data && h.data.sug && (t = cc11001100_hook("t", h.data.sug, "assign")), 0 === p && t.length > 0) for (var r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) e[r] = cc11001100_hook("e[r]", {}, "assign"), e[r].title = cc11001100_hook("e[r].title", t[r].title ? t[r].title : "", "assign"), !h.type || "music" !== h.type && "novel" !== h.type || (e[r].author = cc11001100_hook("e[r].author", t[r].author ? t[r].author : "", "assign")), h.type && "movie" === h.type && (e[r].type = cc11001100_hook("e[r].type", t[r].type ? t[r].type : "", "assign"));
        return e;
      }
      function m() {
        var e = cc11001100_hook("e", {}, "var-init");
        switch (e.status = cc11001100_hook("e.status", p, "assign"), p) {
          case 0:
            e.reason = cc11001100_hook("e.reason", "Success!", "assign");
            break;
          case 1:
            e.reason = cc11001100_hook("e.reason", "Datas are wrong! Try again later.", "assign");
            break;
          case 2:
            e.reason = cc11001100_hook("e.reason", "Token is illegal! Try again later.", "assign");
            break;
          case 3:
            e.reason = cc11001100_hook("e.reason", "Params are wrong! Try again later.", "assign");
            break;
          case 4:
            e.reason = cc11001100_hook("e.reason", "No data.", "assign");
            break;
          case 5:
            e.reason = cc11001100_hook("e.reason", "Sid is illegal! Try again later", "assign");
            break;
          case 6:
            e.reason = cc11001100_hook("e.reason", "Try again later.", "assign");
            break;
          default:
            e.reason = cc11001100_hook("e.reason", "Unknown error. Try again later.", "assign");
        }
        return e;
      }
      var d = cc11001100_hook("d", [], "var-init"),
        p = cc11001100_hook("p", 0, "var-init"),
        l = cc11001100_hook("l", {}, "var-init"),
        y = cc11001100_hook("y", {}, "var-init"),
        h = cc11001100_hook("h", {}, "var-init"),
        f = cc11001100_hook("f", 1, "var-init");
      return {
        openHiLight: cc11001100_hook("openHiLight", e, "object-key-init"),
        closeHiLight: cc11001100_hook("closeHiLight", t, "object-key-init"),
        initData: cc11001100_hook("initData", o, "object-key-init"),
        initSugData: cc11001100_hook("initSugData", a, "object-key-init"),
        returnResult: cc11001100_hook("returnResult", n, "object-key-init"),
        returnOsResult: cc11001100_hook("returnOsResult", s, "object-key-init"),
        returnErr: cc11001100_hook("returnErr", m, "object-key-init"),
        returnInfo: cc11001100_hook("returnInfo", i, "object-key-init"),
        returnFacet: cc11001100_hook("returnFacet", c, "object-key-init"),
        returnSug: cc11001100_hook("returnSug", u, "object-key-init"),
        resultData: cc11001100_hook("resultData", d, "object-key-init"),
        infoData: cc11001100_hook("infoData", l, "object-key-init"),
        errData: cc11001100_hook("errData", p, "object-key-init"),
        sugData: cc11001100_hook("sugData", h, "object-key-init")
      };
    }(), "var-init"),
    r = cc11001100_hook("r", function () {
      function e(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var r,
          o = cc11001100_hook("o", e || {}, "var-init");
        for (r in t) t.hasOwnProperty(r) && (o[r] = cc11001100_hook("o[r]", t[r], "assign"));
        return o;
      }
      function t(e, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        var o,
          a = cc11001100_hook("a", e || {}, "var-init");
        for (o in r) r.hasOwnProperty(o) && ("[object Object]" === Object.prototype.toString.call(r[o]) ? (e[o] = cc11001100_hook("e[o]", e[o] || {}, "assign"), a[o] = cc11001100_hook("a[o]", t(e[o], r[o]), "assign")) : a[o] = cc11001100_hook("a[o]", r[o], "assign"));
        return a;
      }
      function r(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        if (t = cc11001100_hook("t", t || document, "assign"), t.getElementsByClassName) return t.getElementsByClassName(e);
        for (var r = cc11001100_hook("r", [], "var-init"), o = cc11001100_hook("o", t.getElementsByTagName("*"), "var-init"), a = cc11001100_hook("a", new RegExp("(^|\\s)" + e.replace(/\-/g, "\\-") + "(\\s|$)"), "var-init"), n = cc11001100_hook("n", 0, "var-init"), s = cc11001100_hook("s", o.length, "var-init"); s > n; n++) a.test(o[n].className) && r.push(o[n]);
        return r;
      }
      function o(e) {
        cc11001100_hook("e", e, "function-parameter");
        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
      }
      function a(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", String(e).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"), "var-init");
        return t.replace(/&#([\d]+);/g, function (e, t) {
          return String.fromCharCode(parseInt(t, 10));
        });
      }
      function n(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", new RegExp("(^| )" + e + "=([^;]*)(;|$)"), "var-init"),
          r = cc11001100_hook("r", t.exec(document.cookie), "var-init");
        return r ? r[2] : null;
      }
      function s(e, t, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        document.addEventListener ? e.addEventListener(t, r, !1) : document.attachEvent && e.attachEvent("on" + t, function (t) {
          t.preventDefault = cc11001100_hook("t.preventDefault", function () {
            t.returnValue = cc11001100_hook("t.returnValue", !1, "assign");
          }, "assign"), t.stopPropagation = cc11001100_hook("t.stopPropagation", function () {
            t.cancelBubble = cc11001100_hook("t.cancelBubble", !0, "assign");
          }, "assign"), r.call(e, t);
        });
      }
      function i(e, t, r, o) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        s(e, t, function (t) {
          for (var a = cc11001100_hook("a", t.target || t.srcElement, "var-init"); !_hasClass(a, r) && a != e;) a = cc11001100_hook("a", a.parentNode, "assign");
          _hasClass(a, r) && o.call(a, t);
        });
      }
      function c(e) {
        cc11001100_hook("e", e, "function-parameter");
        return "" == e || e.match(/^\s+$/) ? !0 : !1;
      }
      function u(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var r = cc11001100_hook("r", document.createElement("script"), "var-init");
        r.readyState ? r.onreadystatechange = cc11001100_hook("r.onreadystatechange", function () {
          ("loaded" === r.readyState || "complete" === r.readyState) && (r.onreadystatechange = cc11001100_hook("r.onreadystatechange", null, "assign"), t());
        }, "assign") : r.onload = cc11001100_hook("r.onload", function () {
          t();
        }, "assign"), r.src = cc11001100_hook("r.src", e, "assign"), r.charset = cc11001100_hook("r.charset", "utf-8", "assign"), r.async = cc11001100_hook("r.async", !0, "assign"), document.getElementsByTagName("head")[0].appendChild(r);
      }
      function m(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", typeof e, "var-init");
        if ("string" == t) return e.length;
        if ("object" == t) {
          var r = cc11001100_hook("r", 0, "var-init");
          for (var o in e) r++;
          return r;
        }
        return !1;
      }
      function d(e, t, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        var o,
          a = cc11001100_hook("a", Array.prototype.indexOf, "var-init"),
          n = cc11001100_hook("n", e.length, "var-init");
        if (0 === n) return -1;
        if (r = cc11001100_hook("r", +r || 0, "assign"), o = cc11001100_hook("o", 0 > r ? Math.max(0, r + n) : r, "assign"), a) return a.call(e, t, o);
        for (; n > o; o++) if (o in e && e[o] === t) return o;
        return -1;
      }
      function p(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e ? e.replace(/^\s+|\s+$/g, "") : void 0;
      }
      return {
        extend: cc11001100_hook("extend", e, "object-key-init"),
        extendDeep: cc11001100_hook("extendDeep", t, "object-key-init"),
        getElementsByClassName: cc11001100_hook("getElementsByClassName", r, "object-key-init"),
        encodeHTML: cc11001100_hook("encodeHTML", o, "object-key-init"),
        decodeHTML: cc11001100_hook("decodeHTML", a, "object-key-init"),
        getCookie: cc11001100_hook("getCookie", n, "object-key-init"),
        addEvent: cc11001100_hook("addEvent", s, "object-key-init"),
        count: cc11001100_hook("count", m, "object-key-init"),
        delegateEvent: cc11001100_hook("delegateEvent", i, "object-key-init"),
        isEmptyOrSpacing: cc11001100_hook("isEmptyOrSpacing", c, "object-key-init"),
        loadScript: cc11001100_hook("loadScript", u, "object-key-init"),
        indexOf: cc11001100_hook("indexOf", d, "object-key-init"),
        trim: cc11001100_hook("trim", p, "object-key-init")
      };
    }(), "var-init"),
    o = cc11001100_hook("o", function () {
      function o(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        this.numReg = cc11001100_hook("this.numReg", new RegExp("^[0-9]*$"), "assign"), this.searchReady = cc11001100_hook("this.searchReady", 1, "assign"), this.initReady = cc11001100_hook("this.initReady", 1, "assign"), this.sugReady = cc11001100_hook("this.sugReady", 1, "assign");
        var r = cc11001100_hook("r", window.location.protocol, "var-init");
        return this.searchUrl = cc11001100_hook("this.searchUrl", "https:" === r ? "https://gsp0.baidu.com/yrwHcjSl0MgCo2Kml5_Y_D3/api/customsearch/apisearch" : "http://zhannei.baidu.com/api/customsearch/apisearch", "assign"), this.sugUrl = cc11001100_hook("this.sugUrl", "http://znsv.baidu.com/customer_search/api/sug", "assign"), this.param = cc11001100_hook("this.param", {
          nojc: cc11001100_hook("nojc", 1, "object-key-init")
        }, "assign"), e && "" !== e ? (t && 2 === t ? (this.sid = cc11001100_hook("this.sid", e, "assign"), this.os = cc11001100_hook("this.os", 1, "assign"), this.cse = cc11001100_hook("this.cse", 2, "assign"), this.queryReady = cc11001100_hook("this.queryReady", 0, "assign"), this.facetReady = cc11001100_hook("this.facetReady", 0, "assign")) : (this.sid = cc11001100_hook("this.sid", e, "assign"), this.cse = cc11001100_hook("this.cse", 1, "assign")), this.token = cc11001100_hook("this.token", BCSE_TK, "assign"), void (this.version = cc11001100_hook("this.version", BCSE_VS, "assign"))) : !1;
      }
      return o.prototype.openTitleFilter = cc11001100_hook("o.prototype.openTitleFilter", function () {
        this.closeTitleFilter();
        var e = cc11001100_hook("e", {
          stp: cc11001100_hook("stp", 1, "object-key-init")
        }, "var-init");
        r.extend(this.param, e);
      }, "assign"), o.prototype.closeTitleFilter = cc11001100_hook("o.prototype.closeTitleFilter", function () {
        this.param.hasOwnProperty("stp") && delete this.param.stp;
      }, "assign"), o.prototype.openTimeFilter = cc11001100_hook("o.prototype.openTimeFilter", function (e) {
        if (e && this.numReg.test(e)) {
          this.closeTimeFilter();
          var t = cc11001100_hook("t", {
            sti: cc11001100_hook("sti", e, "object-key-init")
          }, "var-init");
          r.extend(this.param, t);
        }
      }, "assign"), o.prototype.closeTimeFilter = cc11001100_hook("o.prototype.closeTimeFilter", function () {
        this.param.hasOwnProperty("sti") && delete this.param.sti;
      }, "assign"), o.prototype.openGBK = cc11001100_hook("o.prototype.openGBK", function () {
        this.closeGBK();
        var e = cc11001100_hook("e", {
          ie: cc11001100_hook("ie", "gb2312", "object-key-init")
        }, "var-init");
        r.extend(this.param, e);
      }, "assign"), o.prototype.closeGBK = cc11001100_hook("o.prototype.closeGBK", function () {
        this.param.hasOwnProperty("ie") && delete this.param.ie;
      }, "assign"), o.prototype.openWap = cc11001100_hook("o.prototype.openWap", function () {
        this.closeWap();
        var e = cc11001100_hook("e", {
          adapt: cc11001100_hook("adapt", 1, "object-key-init")
        }, "var-init");
        r.extend(this.param, e);
      }, "assign"), o.prototype.closeWap = cc11001100_hook("o.prototype.closeWap", function () {
        this.param.hasOwnProperty("adapt") && delete this.param.adapt;
      }, "assign"), o.prototype.closeJc = cc11001100_hook("o.prototype.closeJc", function () {
        this.openJc();
        var e = cc11001100_hook("e", {
          nojc: cc11001100_hook("nojc", 1, "object-key-init")
        }, "var-init");
        r.extend(this.param, e);
      }, "assign"), o.prototype.openJc = cc11001100_hook("o.prototype.openJc", function () {
        this.param.hasOwnProperty("nojc") && delete this.param.nojc;
      }, "assign"), o.prototype.openSq = cc11001100_hook("o.prototype.openSq", function () {
        this.closeSq();
        var e = cc11001100_hook("e", {
          sq: cc11001100_hook("sq", 1, "object-key-init")
        }, "var-init");
        r.extend(this.param, e);
      }, "assign"), o.prototype.closeSq = cc11001100_hook("o.prototype.closeSq", function () {
        this.param.hasOwnProperty("sq") && delete this.param.sq;
      }, "assign"), o.prototype.openFieldFilter = cc11001100_hook("o.prototype.openFieldFilter", function (e) {
        if ("[object Object]" === Object.prototype.toString.call(e) && r.count(e) > 0) {
          this.closeFieldFilter();
          var t = cc11001100_hook("t", "", "var-init"),
            o = cc11001100_hook("o", r.count(e), "var-init"),
            a = cc11001100_hook("a", 1, "var-init");
          for (var n in e) {
            if (a === o) {
              if ("[object Array]" === Object.prototype.toString.call(e[n]) && e[n].length > 0) for (var s = cc11001100_hook("s", 0, "var-init"); s < e[n].length; s++) t = cc11001100_hook("t", s === e[n].length - 1 ? t + encodeURIComponent(n) + "[]=" + encodeURIComponent(e[n][s]) : t + encodeURIComponent(n) + "[]=" + encodeURIComponent(e[n][s]) + "&", "assign");else t = cc11001100_hook("t", t + encodeURIComponent(n) + "=" + encodeURIComponent(e[n]), "assign");
            } else if ("[object Array]" === Object.prototype.toString.call(e[n]) && e[n].length > 0) for (var s = cc11001100_hook("s", 0, "var-init"); s < e[n].length; s++) t = cc11001100_hook("t", t + encodeURIComponent(n) + "[]=" + encodeURIComponent(e[n][s]) + "&", "assign");else t = cc11001100_hook("t", t + encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) + "&", "assign");
            a++;
          }
          a = cc11001100_hook("a", 1, "assign");
          var i = cc11001100_hook("i", {
            flt: cc11001100_hook("flt", t, "object-key-init")
          }, "var-init");
          r.extend(this.param, i);
        }
      }, "assign"), o.prototype.closeFieldFilter = cc11001100_hook("o.prototype.closeFieldFilter", function () {
        this.param.hasOwnProperty("flt") && delete this.param.flt;
      }, "assign"), o.prototype.openFeildFilter = cc11001100_hook("o.prototype.openFeildFilter", function (e) {
        if ("[object Object]" === Object.prototype.toString.call(e) && r.count(e) > 0) {
          this.closeFieldFilter();
          var t = cc11001100_hook("t", "", "var-init"),
            o = cc11001100_hook("o", r.count(e), "var-init"),
            a = cc11001100_hook("a", 1, "var-init");
          for (var n in e) {
            if (a === o) {
              if ("[object Array]" === Object.prototype.toString.call(e[n]) && e[n].length > 0) for (var s = cc11001100_hook("s", 0, "var-init"); s < e[n].length; s++) t = cc11001100_hook("t", s === e[n].length - 1 ? t + encodeURIComponent(n) + "[]=" + encodeURIComponent(e[n][s]) : t + encodeURIComponent(n) + "[]=" + encodeURIComponent(e[n][s]) + "&", "assign");else t = cc11001100_hook("t", t + encodeURIComponent(n) + "=" + encodeURIComponent(e[n]), "assign");
            } else if ("[object Array]" === Object.prototype.toString.call(e[n]) && e[n].length > 0) for (var s = cc11001100_hook("s", 0, "var-init"); s < e[n].length; s++) t = cc11001100_hook("t", t + encodeURIComponent(n) + "[]=" + encodeURIComponent(e[n][s]) + "&", "assign");else t = cc11001100_hook("t", t + encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) + "&", "assign");
            a++;
          }
          a = cc11001100_hook("a", 1, "assign");
          var i = cc11001100_hook("i", {
            flt: cc11001100_hook("flt", t, "object-key-init")
          }, "var-init");
          r.extend(this.param, i);
        }
      }, "assign"), o.prototype.closeFeildFilter = cc11001100_hook("o.prototype.closeFeildFilter", function () {
        this.param.hasOwnProperty("flt") && delete this.param.flt;
      }, "assign"), o.prototype.openTimeOrder = cc11001100_hook("o.prototype.openTimeOrder", function () {
        this.closeOrder();
        var e = cc11001100_hook("e", {
          srt: cc11001100_hook("srt", "lds", "object-key-init")
        }, "var-init");
        r.extend(this.param, e);
      }, "assign"), o.prototype.openFieldOrder = cc11001100_hook("o.prototype.openFieldOrder", function (e) {
        if ("[object Object]" === Object.prototype.toString.call(e) && r.count(e) > 0) {
          this.closeOrder();
          var t = cc11001100_hook("t", "", "var-init");
          if (2 === this.cse) {
            var o = cc11001100_hook("o", 1, "var-init");
            for (var a in e) t += cc11001100_hook("t", 1 === e[a] ? 1 === o ? "-" + a : "&-" + a : 1 === o ? a : "&" + a, "assign"), o++;
            o = cc11001100_hook("o", 1, "assign");
          } else {
            var o = cc11001100_hook("o", 1, "var-init");
            for (var a in e) 1 === e[a] ? 1 === o && (t += cc11001100_hook("t", "-" + a, "assign")) : 1 === o && (t += cc11001100_hook("t", a, "assign")), o++;
            o = cc11001100_hook("o", 1, "assign");
          }
          var n = cc11001100_hook("n", {
            srt: cc11001100_hook("srt", t, "object-key-init")
          }, "var-init");
          r.extend(this.param, n);
        }
      }, "assign"), o.prototype.closeOrder = cc11001100_hook("o.prototype.closeOrder", function () {
        this.param.hasOwnProperty("srt") && delete this.param.srt;
      }, "assign"), o.prototype.openFeildOrder = cc11001100_hook("o.prototype.openFeildOrder", function (e) {
        if ("[object Object]" === Object.prototype.toString.call(e) && r.count(e) > 0) {
          this.closeOrder();
          var t = cc11001100_hook("t", "", "var-init");
          if (2 === this.cse) {
            var o = cc11001100_hook("o", 1, "var-init");
            for (var a in e) t += cc11001100_hook("t", 1 === e[a] ? 1 === o ? "-" + a : "&-" + a : 1 === o ? a : "&" + a, "assign"), o++;
            o = cc11001100_hook("o", 1, "assign");
          } else {
            var o = cc11001100_hook("o", 1, "var-init");
            for (var a in e) 1 === e[a] ? 1 === o && (t += cc11001100_hook("t", "-" + a, "assign")) : 1 === o && (t += cc11001100_hook("t", a, "assign")), o++;
            o = cc11001100_hook("o", 1, "assign");
          }
          var n = cc11001100_hook("n", {
            srt: cc11001100_hook("srt", t, "object-key-init")
          }, "var-init");
          r.extend(this.param, n);
        }
      }, "assign"), o.prototype.closeOrder = cc11001100_hook("o.prototype.closeOrder", function () {
        this.param.hasOwnProperty("srt") && delete this.param.srt;
      }, "assign"), o.prototype.setPageNum = cc11001100_hook("o.prototype.setPageNum", function (e) {
        if (e && this.numReg.test(e)) {
          if (10 === e) return void (this.param.hasOwnProperty("pn") && delete this.param.pn);
          e > 100 && (e = cc11001100_hook("e", 100, "assign"));
          var t = cc11001100_hook("t", {
            pn: cc11001100_hook("pn", e, "object-key-init")
          }, "var-init");
          r.extend(this.param, t);
        }
      }, "assign"), o.prototype.setResultType = cc11001100_hook("o.prototype.setResultType", function (e) {
        if (0 === e || 1 === e || 2 === e || 3 === e || 5 === e || 6 === e || 8 === e) {
          if (0 === e) return void (this.param.hasOwnProperty("rt") && delete this.param.rt);
          var t = cc11001100_hook("t", {
            rt: cc11001100_hook("rt", e, "object-key-init")
          }, "var-init");
          r.extend(this.param, t);
        }
      }, "assign"), o.prototype.openHiLight = cc11001100_hook("o.prototype.openHiLight", function () {
        t.openHiLight();
      }, "assign"), o.prototype.closeHiLight = cc11001100_hook("o.prototype.closeHiLight", function () {
        t.closeHiLight();
      }, "assign"), o.prototype.setSearchRange = cc11001100_hook("o.prototype.setSearchRange", function (e, t) {
        if (2 !== this.cse && (1 === e || 2 === e || 3 === e || 4 === e)) {
          if (4 === e) return this.param.hasOwnProperty("ct") && delete this.param.ct, void (this.param.hasOwnProperty("cc") && delete this.param.cc);
          var o = cc11001100_hook("o", "", "var-init"),
            a = cc11001100_hook("a", {
              ct: cc11001100_hook("ct", e, "object-key-init")
            }, "var-init");
          r.extend(this.param, a);
          var o = cc11001100_hook("o", "", "var-init");
          2 === e ? t.length > 0 && (o += cc11001100_hook("o", t.join("&"), "assign")) : t.length > 0 && (o = cc11001100_hook("o", t[0], "assign"));
          var n = cc11001100_hook("n", {
            cc: cc11001100_hook("cc", encodeURIComponent(o), "object-key-init")
          }, "var-init");
          r.extend(this.param, n);
        }
      }, "assign"), o.prototype.setQueryList = cc11001100_hook("o.prototype.setQueryList", function (e) {
        if ("[object Object]" === Object.prototype.toString.call(e) && r.count(e) > 0 && 2 === this.cse) {
          this.param.hasOwnProperty("qf") && delete this.param.qf;
          var t = cc11001100_hook("t", "", "var-init"),
            o = cc11001100_hook("o", r.count(e), "var-init"),
            a = cc11001100_hook("a", 1, "var-init");
          for (var n in e) t = cc11001100_hook("t", a === o ? t + encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) : t + encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) + "&", "assign"), a++;
          a = cc11001100_hook("a", 1, "assign");
          var s = cc11001100_hook("s", {
            qf: cc11001100_hook("qf", t, "object-key-init")
          }, "var-init");
          r.extend(this.param, s), this.queryReady = cc11001100_hook("this.queryReady", 1, "assign");
        }
      }, "assign"), o.prototype.setDispList = cc11001100_hook("o.prototype.setDispList", function (e) {
        if ("[object Array]" === Object.prototype.toString.call(e) && e.length > 0 && 2 === this.cse) {
          this.param.hasOwnProperty("fl") && delete this.param.fl;
          var t = cc11001100_hook("t", "", "var-init");
          t = cc11001100_hook("t", e.join("&"), "assign");
          var o = cc11001100_hook("o", {
            fl: cc11001100_hook("fl", t, "object-key-init")
          }, "var-init");
          r.extend(this.param, o);
        }
      }, "assign"), o.prototype.setFacet = cc11001100_hook("o.prototype.setFacet", function (e) {
        if ("[object Object]" === Object.prototype.toString.call(e) && r.count(e) > 0 && 2 === this.cse) {
          var t = cc11001100_hook("t", "", "var-init");
          if (e.fields && "[object Array]" === Object.prototype.toString.call(e.fields) && e.fields.length > 0 && (t = cc11001100_hook("t", t + "fields[]=" + e.fields.join("&fields[]="), "assign")), e.size && ("" !== t && (t += cc11001100_hook("t", "&", "assign")), t = cc11001100_hook("t", t + "size=" + encodeURIComponent(e.size), "assign")), e.mincount && ("" !== t && (t += cc11001100_hook("t", "&", "assign")), t = cc11001100_hook("t", t + "mincount=" + encodeURIComponent(e.mincount), "assign")), e.pivot && "[object Array]" === Object.prototype.toString.call(e.pivot) && e.pivot.length > 0 && ("" !== t && (t += cc11001100_hook("t", "&", "assign")), t = cc11001100_hook("t", t + "pivot[]=" + e.pivot.join("&pivot[]="), "assign")), "" !== t) {
            var o = cc11001100_hook("o", {
              facet: cc11001100_hook("facet", t, "object-key-init")
            }, "var-init");
            r.extend(this.param, o), this.facetReady = cc11001100_hook("this.facetReady", 1, "assign");
          }
        }
      }, "assign"), o.prototype.setQueryWeight = cc11001100_hook("o.prototype.setQueryWeight", function (e) {
        if ("string" == typeof e && 2 === this.cse) {
          this.param.hasOwnProperty("pf") && delete this.param.pf;
          var t = cc11001100_hook("t", {
            pf: cc11001100_hook("pf", encodeURIComponent(e), "object-key-init")
          }, "var-init");
          r.extend(this.param, t);
        }
      }, "assign"), o.prototype.getJSONP = cc11001100_hook("o.prototype.getJSONP", function (o, a, n) {
        if (1 === this.searchReady && this.token && "" !== this.token) {
          this.searchReady = cc11001100_hook("this.searchReady", 0, "assign");
          var s = cc11001100_hook("s", {
            tk: cc11001100_hook("tk", this.token, "object-key-init"),
            v: cc11001100_hook("v", this.version, "object-key-init")
          }, "var-init");
          r.extend(this.param, s);
          var i = cc11001100_hook("i", this, "var-init");
          e.get({
            url: cc11001100_hook("url", o, "object-key-init"),
            parameters: cc11001100_hook("parameters", i.param, "object-key-init"),
            success: function (e) {
              i.searchReady = cc11001100_hook("i.searchReady", 1, "assign"), t.initData(e), 1 === n ? a(t.returnResult()) : 2 === n ? a(t.returnInfo()) : 3 === n ? a(t.returnOsResult()) : 4 === n && a(t.returnFacet());
            },
            complete: function () {
              i.searchReady = cc11001100_hook("i.searchReady", 1, "assign");
            }
          });
        }
      }, "assign"), o.prototype.getResult = cc11001100_hook("o.prototype.getResult", function (e, t) {
        if (arguments[0] && "" !== arguments[0] && arguments[1] && "" !== arguments[1]) {
          if (arguments[2] && this.numReg.test(arguments[2]) && arguments[2] > 0) {
            var o = cc11001100_hook("o", {
              p: cc11001100_hook("p", arguments[2] - 1, "object-key-init")
            }, "var-init");
            r.extend(this.param, o);
          } else this.param.hasOwnProperty("p") && delete this.param.p;
          var a;
          2 === this.cse ? 1 === this.queryReady && (a = cc11001100_hook("a", this.searchUrl + "?s=" + this.sid + "&os=1&q=" + encodeURIComponent(e), "assign"), this.getJSONP(a, t, 3)) : (a = cc11001100_hook("a", this.searchUrl + "?s=" + this.sid + "&q=" + encodeURIComponent(e), "assign"), this.getJSONP(a, t, 1));
        }
      }, "assign"), o.prototype.getSearchInfo = cc11001100_hook("o.prototype.getSearchInfo", function (e, o) {
        if (arguments[0] && "" !== arguments[0] && arguments[1] && "" !== arguments[1]) if (r.count(t.returnInfo()) > 0) o(t.returnInfo());else {
          var a;
          2 === this.cse ? 1 === this.queryReady && (a = cc11001100_hook("a", this.searchUrl + "?s=" + this.sid + "&os=1&q=" + encodeURIComponent(e), "assign"), this.getJSONP(a, o, 2)) : (a = cc11001100_hook("a", this.searchUrl + "?s=" + this.sid + "&q=" + encodeURIComponent(e), "assign"), this.getJSONP(a, o, 2));
        }
      }, "assign"), o.prototype.getFacet = cc11001100_hook("o.prototype.getFacet", function (e, o) {
        if (arguments[0] && "" !== arguments[0] && arguments[1] && "" !== arguments[1] && 2 === this.cse && 1 === this.facetReady) if (r.count(t.returnFacet()) > 0) o(t.returnFacet());else {
          var a;
          2 === this.cse && 1 === this.queryReady && (a = cc11001100_hook("a", this.searchUrl + "?s=" + this.sid + "&os=1&q=" + encodeURIComponent(e), "assign"), this.getJSONP(a, o, 4));
        }
      }, "assign"), o.prototype.getSug = cc11001100_hook("o.prototype.getSug", function (r, o) {
        if (arguments[0] && "" !== arguments[0] && arguments[1] && "" !== arguments[1]) {
          var a = cc11001100_hook("a", "normal", "var-init");
          if (arguments[2] && this.numReg.test(arguments[2])) switch (arguments[2]) {
            case 0:
              a = cc11001100_hook("a", "normal", "assign");
              break;
            case 1:
              a = cc11001100_hook("a", "movie", "assign");
              break;
            case 2:
              a = cc11001100_hook("a", "music", "assign");
              break;
            case 3:
              a = cc11001100_hook("a", "novel", "assign");
              break;
            case 4:
              a = cc11001100_hook("a", "health", "assign");
              break;
            case 5:
              a = cc11001100_hook("a", "game", "assign");
              break;
            case 6:
              a = cc11001100_hook("a", "soft", "assign");
              break;
            default:
              a = cc11001100_hook("a", "normal", "assign");
          }
          var n = cc11001100_hook("n", this.sugUrl + "?sid=" + this.sid + "&wd=" + encodeURIComponent(r) + "&ch=" + encodeURIComponent(a), "var-init");
          if (1 === this.sugReady && this.token && "" !== this.token) {
            this.sugReady = cc11001100_hook("this.sugReady", 0, "assign");
            var s = cc11001100_hook("s", this, "var-init");
            e.get({
              url: cc11001100_hook("url", n, "object-key-init"),
              success: function (e) {
                t.initSugData(e), o(t.returnSug());
              },
              complete: function () {
                s.sugReady = cc11001100_hook("s.sugReady", 1, "assign");
              }
            });
          }
        }
      }, "assign"), o.prototype.getError = cc11001100_hook("o.prototype.getError", function (e) {
        arguments[0] && "" !== arguments[0] && e(t.returnErr());
      }, "assign"), o;
    }(), "var-init");
  BCse.Search = cc11001100_hook("BCse.Search", o, "assign");
}();
csdn.afterBaiduSearchInit();