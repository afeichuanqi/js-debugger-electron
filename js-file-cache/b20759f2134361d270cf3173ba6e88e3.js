try {
  !function () {
    function i(i) {
      cc11001100_hook("i", i, "function-parameter");
      this.key = cc11001100_hook("this.key", i, "assign"), this.curCookie = cc11001100_hook("this.curCookie", "", "assign"), this.lsCookie = cc11001100_hook("this.lsCookie", "", "assign"), this.udCookie = cc11001100_hook("this.udCookie", "", "assign"), this.udData = cc11001100_hook("this.udData", t(this.key), "assign"), this.findCookie = cc11001100_hook("this.findCookie", "", "assign"), this.type = cc11001100_hook("this.type", -1, "assign"), this.IS = cc11001100_hook("this.IS", !1, "assign"), this.support = cc11001100_hook("this.support", !1, "assign"), this.syncAll();
    }
    function t(i) {
      cc11001100_hook("i", i, "function-parameter");
      var t = cc11001100_hook("t", null, "var-init"),
        o = cc11001100_hook("o", !0, "var-init"),
        e = cc11001100_hook("e", "userData" + i, "var-init");
      if (!(t = cc11001100_hook("t", document.getElementById(e), "assign"))) try {
        t = cc11001100_hook("t", document.createElement("INPUT"), "assign"), t.type = cc11001100_hook("t.type", "hidden", "assign"), t.style.display = cc11001100_hook("t.style.display", "none", "assign"), t.setAttribute("id", e), t.setAttribute("data-for", "result"), t.addBehavior("#default#userData"), $("body").prepend(t);
        var s = cc11001100_hook("s", new Date(), "var-init");
        s.setDate(s.getDate() + 365), t.expires = cc11001100_hook("t.expires", s.toUTCString(), "assign");
      } catch (n) {
        o = cc11001100_hook("o", !1, "assign"), t = cc11001100_hook("t", null, "assign");
      }
      return {
        setItem: function (i) {
          try {
            o && t && (t.setAttribute(e, i), t.save(e));
          } catch (s) {}
        },
        getItem: function () {
          try {
            if (o && t) return t.load(e), t.getAttribute(e) || "";
          } catch (i) {}
        },
        isSupport: function () {
          return o && t ? !0 : !1;
        }
      };
    }
    function o(i) {
      cc11001100_hook("i", i, "function-parameter");
      return i ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + i + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || "" : void 0;
    }
    function e(i, t, o, e, s, n) {
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      return !i || /^(?:expires|max\-age|path|domain|secure)$/i.test(i) ? !1 : (document.cookie = cc11001100_hook("document.cookie", encodeURIComponent(i) + "=" + encodeURIComponent(t) + (o ? "; expires=" + o : "") + (s ? "; domain=" + s : "") + (e ? "; path=" + e : "") + (n ? "; secure" : ""), "assign"), !0);
    }
    i.prototype = cc11001100_hook("i.prototype", {
      syncAll: function () {
        this.curCookie = cc11001100_hook("this.curCookie", this.httpCookie(), "assign"), this.lsCookie = cc11001100_hook("this.lsCookie", this.locStorage(), "assign"), this.udCookie = cc11001100_hook("this.udCookie", this.udData.getItem(), "assign"), this.everyCookieAll();
      },
      quickSync: function () {
        var i = cc11001100_hook("i", this.httpCookie(), "var-init"),
          t = cc11001100_hook("t", this.locStorage(), "var-init");
        t && i !== t && this.httpCookie(t);
      },
      locStorage: function (i) {
        try {
          var t = cc11001100_hook("t", window.localStorage, "var-init");
          if (t) {
            if (this.support = cc11001100_hook("this.support", !0, "assign"), void 0 === i) return t.getItem(this.key) || "";
            t.setItem(this.key, i);
          }
        } catch (o) {
          this.support = cc11001100_hook("this.support", !1, "assign");
        }
      },
      setFind: function (i, t) {
        this.findCookie = cc11001100_hook("this.findCookie", i, "assign"), this.type = cc11001100_hook("this.type", t, "assign");
      },
      sendLog: function (i) {
        if (!(bds && bds.comm && 1 == bds.comm.ishome && window.s_domain && "home" == window.s_domain.base)) {
          var t = cc11001100_hook("t", bds && bds.comm && bds.comm.ishome ? 1 : 0, "var-init");
          if (1 !== t || bds.comm.queryEnc || (bds.comm.queryEnc = cc11001100_hook("bds.comm.queryEnc", "inlo", "assign")), i = cc11001100_hook("i", i || 0, "assign"), 0 === i) {
            var o = cc11001100_hook("o", "undefined" == typeof this.lsCookie ? "0" : "1", "var-init"),
              e = cc11001100_hook("e", "undefined" == typeof this.udCookie ? "0" : "1", "var-init");
            c({
              fm: cc11001100_hook("fm", "inlo", "object-key-init"),
              rsv_psid_page: cc11001100_hook("rsv_psid_page", t, "object-key-init"),
              rsv_psid1: cc11001100_hook("rsv_psid1", this.curCookie, "object-key-init"),
              rsv_psid2: cc11001100_hook("rsv_psid2", this.findCookie, "object-key-init"),
              rsv_psid_type: cc11001100_hook("rsv_psid_type", this.type, "object-key-init"),
              rsv_psid_dev: cc11001100_hook("rsv_psid_dev", o + e, "object-key-init")
            });
          } else 1 === i ? c({
            fm: cc11001100_hook("fm", "inlo", "object-key-init"),
            rsv_psid_page: cc11001100_hook("rsv_psid_page", t, "object-key-init"),
            rsv_psid0: cc11001100_hook("rsv_psid0", this.httpCookie(), "object-key-init"),
            rsv_psid_deep_clear: cc11001100_hook("rsv_psid_deep_clear", 1, "object-key-init")
          }) : 2 === i && c({
            fm: cc11001100_hook("fm", "inlo", "object-key-init"),
            rsv_psid_page: cc11001100_hook("rsv_psid_page", t, "object-key-init"),
            rsv_psid0: cc11001100_hook("rsv_psid0", this.httpCookie(), "object-key-init"),
            rsv_psid_not_support: cc11001100_hook("rsv_psid_not_support", 1, "object-key-init")
          });
        }
      },
      checkCookie: function () {
        if (this.findCookie) return void (this.type = cc11001100_hook("this.type", 4, "assign"));
        if (this.lsCookie) return void this.setFind(this.lsCookie, 1);
        if (this.udCookie) return void this.setFind(this.udCookie, 2);
        if (this.curCookie) {
          this.setFind(this.curCookie, 0);
          var i = cc11001100_hook("i", this, "var-init");
          return void setTimeout(function () {
            (i.support || i.udData.isSupport() || i.soObject.isSupport()) && i.sendLog(1);
          }, 0);
        }
      },
      httpCookie: function (i) {
        if (void 0 === i) return o(this.key);
        var t = cc11001100_hook("t", new Date(), "var-init");
        t.setTime(t.getTime() + 1009152e6), e(this.key, i, t.toUTCString(), "/", ".baidu.com");
      },
      syncCookie: function () {
        this.curCookie = cc11001100_hook("this.curCookie", this.httpCookie(), "assign"), this.findCookie && this.curCookie !== this.findCookie && (this.type = cc11001100_hook("this.type", 4, "assign"), this.httpCookie(this.findCookie), this.sendLog());
      },
      everyCookieAll: function () {
        this.checkCookie(), this.findCookie && (this.curCookie !== this.findCookie && (this.httpCookie(this.findCookie), this.sendLog()), this.lsCookie !== this.findCookie && this.locStorage(this.findCookie), this.udCookie !== this.findCookie && this.udData.setItem(this.findCookie));
      }
    }, "assign");
    var s = cc11001100_hook("s", new i(String.fromCharCode(66, 73, 68, 85, 80, 83, 73, 68)), "var-init");
    $(window).on("unload", function () {
      s.syncAll();
    }), $(window).on("swap_begin", function () {
      s.syncAll();
    }), $(window).on("swap_end", function () {
      s.syncAll();
    });
  }();
} catch (e) {}