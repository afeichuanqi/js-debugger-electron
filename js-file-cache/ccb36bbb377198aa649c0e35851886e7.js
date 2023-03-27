define("@baidu/search-sug/sug/index", ["require"], function (require) {
  function checkHsugIn(e) {
    cc11001100_hook("e", e, "function-parameter");
    return window.__sample_hsug_length ? e.length >= 4 || encodeURIComponent(e).length >= 18 : e.length >= 4 || encodeURIComponent(e).length >= 18;
  }
  function checkHsugShow(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.length >= 1 && encodeURIComponent(e).length > 3;
  }
  function SUGOBJ(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", this, "var-init"),
      e = cc11001100_hook("e", t.opts = cc11001100_hook("t.opts", e || {}, "assign"), "var-init");
    t.ipt = cc11001100_hook("t.ipt", e.ipt || null, "assign"), t.reverse = cc11001100_hook("t.reverse", e.reverse || !1, "assign"), t.form = cc11001100_hook("t.form", e.form || null, "assign"), t.submission = cc11001100_hook("t.submission", e.submission || null, "assign"), t.maxNum = cc11001100_hook("t.maxNum", e.maxNum || 10, "assign"), t.bds = cc11001100_hook("t.bds", e.bds || null, "assign"), t.sids = cc11001100_hook("t.sids", t.bds && t.bds.comm && t.bds.comm.sid, "assign"), t.withoutMode = cc11001100_hook("t.withoutMode", e.withoutMode || !1, "assign"), t.withoutRich = cc11001100_hook("t.withoutRich", e.withoutRich || !1, "assign"), t.withoutStat = cc11001100_hook("t.withoutStat", e.withoutStat || !1, "assign"), t.withoutZhixin = cc11001100_hook("t.withoutZhixin", e.withoutZhixin || !1, "assign"), t.visible = cc11001100_hook("t.visible", !1, "assign"), t.stopRefresh = cc11001100_hook("t.stopRefresh", !1, "assign"), t.renderCallback = cc11001100_hook("t.renderCallback", e.renderCallback || function () {}, "assign"), t.selectCallback = cc11001100_hook("t.selectCallback", e.selectCallback || function () {}, "assign"), t.storestr = cc11001100_hook("t.storestr", t.storestr || "", "assign"), t.storearr = cc11001100_hook("t.storearr", t.storearr || [], "assign"), t.zhixinsug = cc11001100_hook("t.zhixinsug", [], "assign"), t.zhixintemplate = cc11001100_hook("t.zhixintemplate", {}, "assign"), t.zhixinused = cc11001100_hook("t.zhixinused", {}, "assign"), t.zhixindata = cc11001100_hook("t.zhixindata", {}, "assign"), t.query = cc11001100_hook("t.query", t.ipt && t.ipt.value || "", "assign"), t.inputValue = cc11001100_hook("t.inputValue", t.query, "assign"), t.showValue = cc11001100_hook("t.showValue", t.query, "assign"), t.sugValue = cc11001100_hook("t.sugValue", "", "assign"), t.queryValue = cc11001100_hook("t.queryValue", "", "assign"), t.reqValue = cc11001100_hook("t.reqValue", "", "assign"), t.value = cc11001100_hook("t.value", t.query, "assign"), t.index = cc11001100_hook("t.index", -1, "assign"), t.sugcontainer, t.dataCached = cc11001100_hook("t.dataCached", {}, "assign"), t.dataArray = cc11001100_hook("t.dataArray", [], "assign"), t.dataStored = cc11001100_hook("t.dataStored", [], "assign"), t.dataAladdin = cc11001100_hook("t.dataAladdin", [], "assign"), t.dataDirect = cc11001100_hook("t.dataDirect", [], "assign"), t.directSugSelected = cc11001100_hook("t.directSugSelected", !1, "assign"), t.dataHot = cc11001100_hook("t.dataHot", [], "assign"), t.timer, t.rsv_sug = cc11001100_hook("t.rsv_sug", 0, "assign"), t.rsv_sug1 = cc11001100_hook("t.rsv_sug1", 0, "assign"), t.rsv_sug3 = cc11001100_hook("t.rsv_sug3", 0, "assign"), t.rsv_sug4 = cc11001100_hook("t.rsv_sug4", 0, "assign"), t.rsv_sug7 = cc11001100_hook("t.rsv_sug7", [0, 0, 0], "assign"), t.rsv_sug9 = cc11001100_hook("t.rsv_sug9", 0, "assign"), t.initTime = cc11001100_hook("t.initTime", 0, "assign"), t.inputT = cc11001100_hook("t.inputT", 0, "assign"), t.rsv_bp = cc11001100_hook("t.rsv_bp", e && e.comm && 1 === e.comm.ishome ? 0 : 1, "assign"), t.jqXhr = cc11001100_hook("t.jqXhr", null, "assign"), t.resultSugSamples = cc11001100_hook("t.resultSugSamples", ["search_sug_1", "search_sug_2", "search_sug_3-1", "search_sug_3-2", "search_sug_4-1", "search_sug_4-2", "search_sug_5", "search_sug_6", "search_sug_base"], "assign"), t.currentSugSample = cc11001100_hook("t.currentSugSample", "", "assign"), t.isSugSample3 = cc11001100_hook("t.isSugSample3", !1, "assign"), t.isSugSample4 = cc11001100_hook("t.isSugSample4", !1, "assign"), t.isSugSample = cc11001100_hook("t.isSugSample", !1, "assign"), t.currentSearchStatus = cc11001100_hook("t.currentSearchStatus", -1, "assign"), t.isDirectNewSug = cc11001100_hook("t.isDirectNewSug", !1, "assign"), t.ipt && t.init(), t.pwd = cc11001100_hook("t.pwd", "", "assign"), t.hisSwitch = cc11001100_hook("t.hisSwitch", e.hisSwitch, "assign"), t.useFeedback = cc11001100_hook("t.useFeedback", e.useFeedback, "assign"), t.sugprod = cc11001100_hook("t.sugprod", e.prod || "", "assign"), t.tn = cc11001100_hook("t.tn", e.tn || "", "assign"), t.requestDefaultData = cc11001100_hook("t.requestDefaultData", {}, "assign"), t.showRightContent = cc11001100_hook("t.showRightContent", !1, "assign"), t.backFrame = cc11001100_hook("t.backFrame", !1, "assign"), t.prevQuery = cc11001100_hook("t.prevQuery", t.query, "assign"), t.backDelete = cc11001100_hook("t.backDelete", !1, "assign"), t.requestQuery = cc11001100_hook("t.requestQuery", [t.query], "assign"), t.isAddQuery = cc11001100_hook("t.isAddQuery", !1, "assign"), normalLog = cc11001100_hook("normalLog", "", "assign"), recommendLog = cc11001100_hook("recommendLog", "", "assign"), searchHistroyLog = cc11001100_hook("searchHistroyLog", "", "assign");
  }
  function xss(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.toString().replace(/[<%3C]/g, "&lt;").replace(/[>%3E]/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  var bds = cc11001100_hook("bds", window.bds || {}, "var-init");
  bds.se = cc11001100_hook("bds.se", bds.se || {}, "assign"), bds.se.store = cc11001100_hook("bds.se.store", function () {
    function e() {
      try {
        return u in i && i[u];
      } catch (e) {
        return !1;
      }
    }
    function t() {
      try {
        return c in i && i[c] && i[c][i.location.hostname];
      } catch (e) {
        return !1;
      }
    }
    function s(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function () {
        var t = cc11001100_hook("t", Array.prototype.slice.call(arguments, 0), "var-init");
        t.unshift(r), d.appendChild(r), r.addBehavior("#default#userData"), r.load(u);
        var s = cc11001100_hook("s", e.apply(n, t), "var-init");
        return d.removeChild(r), s;
      };
    }
    function a(e) {
      cc11001100_hook("e", e, "function-parameter");
      return "_" + e;
    }
    var r,
      n = cc11001100_hook("n", {}, "var-init"),
      i = cc11001100_hook("i", window, "var-init"),
      o = cc11001100_hook("o", i.document, "var-init"),
      u = cc11001100_hook("u", "localStorage", "var-init"),
      c = cc11001100_hook("c", "globalStorage", "var-init"),
      l = cc11001100_hook("l", "__storejs__", "var-init");
    if (n.disabled = cc11001100_hook("n.disabled", !1, "assign"), n.set = cc11001100_hook("n.set", function () {}, "assign"), n.get = cc11001100_hook("n.get", function () {}, "assign"), n.remove = cc11001100_hook("n.remove", function () {}, "assign"), n.clear = cc11001100_hook("n.clear", function () {}, "assign"), n.transact = cc11001100_hook("n.transact", function (e, t, s) {
      var a = cc11001100_hook("a", n.get(e), "var-init");
      null == s && (s = cc11001100_hook("s", t, "assign"), t = cc11001100_hook("t", null, "assign")), "undefined" == typeof a && (a = cc11001100_hook("a", t || {}, "assign")), s(a), n.set(e, a);
    }, "assign"), n.getAll = cc11001100_hook("n.getAll", function () {}, "assign"), n.serialize = cc11001100_hook("n.serialize", function (e) {
      return String(e);
    }, "assign"), n.deserialize = cc11001100_hook("n.deserialize", function (e) {
      return "string" != typeof e ? void 0 : e;
    }, "assign"), e()) r = cc11001100_hook("r", i[u], "assign"), n.set = cc11001100_hook("n.set", function (e, t) {
      return void 0 === t ? n.remove(e) : void r.setItem(e, n.serialize(t));
    }, "assign"), n.get = cc11001100_hook("n.get", function (e) {
      return n.deserialize(r.getItem(e));
    }, "assign"), n.remove = cc11001100_hook("n.remove", function (e) {
      r.removeItem(e);
    }, "assign"), n.clear = cc11001100_hook("n.clear", function () {
      r.clear();
    }, "assign"), n.getAll = cc11001100_hook("n.getAll", function () {
      for (var e = cc11001100_hook("e", {}, "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < r.length; ++t) {
        var s = cc11001100_hook("s", r.key(t), "var-init");
        e[s] = cc11001100_hook("e[s]", n.get(s), "assign");
      }
      return e;
    }, "assign");else if (t()) r = cc11001100_hook("r", i[c][i.location.hostname], "assign"), n.set = cc11001100_hook("n.set", function (e, t) {
      return void 0 === t ? n.remove(e) : void (r[e] = cc11001100_hook("r[e]", n.serialize(t), "assign"));
    }, "assign"), n.get = cc11001100_hook("n.get", function (e) {
      return n.deserialize(r[e] && r[e].value);
    }, "assign"), n.remove = cc11001100_hook("n.remove", function (e) {
      delete r[e];
    }, "assign"), n.clear = cc11001100_hook("n.clear", function () {
      for (var e in r) delete r[e];
    }, "assign"), n.getAll = cc11001100_hook("n.getAll", function () {
      for (var e = cc11001100_hook("e", {}, "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < r.length; ++t) {
        var s = cc11001100_hook("s", r.key(t), "var-init");
        e[s] = cc11001100_hook("e[s]", n.get(s), "assign");
      }
      return e;
    }, "assign");else if (o.documentElement.addBehavior) {
      var d, g;
      try {
        g = cc11001100_hook("g", new ActiveXObject("htmlfile"), "assign"), g.open(), g.write("<script>document.w=window</script><iframe src='/favicon.ico'></iframe>"), g.close(), d = cc11001100_hook("d", g.w.frames[0].document, "assign"), r = cc11001100_hook("r", d.createElement("div"), "assign");
      } catch (m) {
        r = cc11001100_hook("r", o.createElement("div"), "assign"), d = cc11001100_hook("d", o.body, "assign");
      }
      n.set = cc11001100_hook("n.set", s(function (e, t, s) {
        return t = cc11001100_hook("t", a(t), "assign"), void 0 === s ? n.remove(t) : (e.setAttribute(t, n.serialize(s)), void e.save(u));
      }), "assign"), n.get = cc11001100_hook("n.get", s(function (e, t) {
        return t = cc11001100_hook("t", a(t), "assign"), n.deserialize(e.getAttribute(t));
      }), "assign"), n.remove = cc11001100_hook("n.remove", s(function (e, t) {
        t = cc11001100_hook("t", a(t), "assign"), e.removeAttribute(t), e.save(u);
      }), "assign"), n.clear = cc11001100_hook("n.clear", s(function (e) {
        var t = cc11001100_hook("t", e.XMLDocument.documentElement.attributes, "var-init");
        e.load(u);
        for (var s, a = cc11001100_hook("a", 0, "var-init"); s = cc11001100_hook("s", t[a], "assign"); a++) e.removeAttribute(s.name);
        e.save(u);
      }), "assign"), n.getAll = cc11001100_hook("n.getAll", s(function (e) {
        var t = cc11001100_hook("t", e.XMLDocument.documentElement.attributes, "var-init");
        e.load(u);
        for (var s, a = cc11001100_hook("a", {}, "var-init"), r = cc11001100_hook("r", 0, "var-init"); s = cc11001100_hook("s", t[r], "assign"); ++r) a[s] = cc11001100_hook("a[s]", n.get(s), "assign");
        return a;
      }), "assign");
    }
    try {
      n.set(l, l), n.get(l) != l && (n.disabled = cc11001100_hook("n.disabled", !0, "assign")), n.remove(l);
    } catch (m) {
      n.disabled = cc11001100_hook("n.disabled", !0, "assign");
    }
    return n;
  }(), "assign");
  var ImeTrack = cc11001100_hook("ImeTrack", function () {
      function e(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", 0, "var-init");
        if (document.selection) {
          e.focus();
          var s = cc11001100_hook("s", document.selection.createRange(), "var-init"),
            a = cc11001100_hook("a", 0, "var-init");
          e && e.value && (a = cc11001100_hook("a", e.value.length, "assign")), s.moveStart("character", -a), t = cc11001100_hook("t", s.text.length - 1, "assign");
        } else (e.selectionStart || "0" === e.selectionStart) && (t = cc11001100_hook("t", e.selectionStart, "assign"));
        return t;
      }
      function t(t) {
        cc11001100_hook("t", t, "function-parameter");
        function s(e) {
          cc11001100_hook("e", e, "function-parameter");
          r.ipt.value !== r.oldval && (r.oldval = cc11001100_hook("r.oldval", r.ipt.value, "assign"), r.inputchangeHandle(e));
        }
        function a() {
          for (var e = cc11001100_hook("e", 0, "var-init"), t = cc11001100_hook("t", r.logs.length - 1, "var-init"); t < r.logs.length - 1; t--) if (-1 === r.logs[t].type.indexOf("unval-")) return r.logs[t].time;
          return e;
        }
        var r = cc11001100_hook("r", this, "var-init");
        r.logs = cc11001100_hook("r.logs", [], "assign"), r.opts = cc11001100_hook("r.opts", t || {}, "assign"), r.opts.logmaxnum = cc11001100_hook("r.opts.logmaxnum", t.logmaxnum || 10, "assign"), r.opts.adv = cc11001100_hook("r.opts.adv", t.adv || !1, "assign"), this.onLogChange = cc11001100_hook("this.onLogChange", t.onLogChange, "assign"), void 0 === r.opts.innerchange && (r.opts.innerchange = cc11001100_hook("r.opts.innerchange", !0, "assign")), r.ipt = cc11001100_hook("r.ipt", document.getElementById(r.opts.iptId), "assign"), r._kdcode = cc11001100_hook("r._kdcode", 0, "assign"), r._kdevt = cc11001100_hook("r._kdevt", {}, "assign"), r._keyposition = cc11001100_hook("r._keyposition", 0, "assign"), r.ipt.onkeydown = cc11001100_hook("r.ipt.onkeydown", function (e) {
          var t = cc11001100_hook("t", e || window.event, "var-init");
          r._kdcode = cc11001100_hook("r._kdcode", t.keyCode || t.which, "assign"), r._kdevt = cc11001100_hook("r._kdevt", t, "assign");
        }, "assign"), r.ipt.onkeyup = cc11001100_hook("r.ipt.onkeyup", function (t) {
          var s = cc11001100_hook("s", t || window.event, "var-init"),
            a = cc11001100_hook("a", s.keyCode || s.which, "var-init");
          r.ipt.value || "", e(r.ipt), r._kdcode && (r.addLog({
            ku: cc11001100_hook("ku", a, "object-key-init"),
            type: cc11001100_hook("type", "upsave", "object-key-init")
          }), r._kdcode = cc11001100_hook("r._kdcode", 0, "assign"), r._kdevt = cc11001100_hook("r._kdevt", {}, "assign"), r.oldval = cc11001100_hook("r.oldval", r.ipt.value, "assign"));
        }, "assign"), r.ipt.onpaste = cc11001100_hook("r.ipt.onpaste", function () {
          r.addLog(r._kdevt.ctrlKey ? {
            type: cc11001100_hook("type", "unval-paste-key", "object-key-init")
          } : {
            type: cc11001100_hook("type", "unval-paste-mouse", "object-key-init")
          });
        }, "assign"), r.oldval = cc11001100_hook("r.oldval", r.ipt.value || "", "assign"), r.inputchangeHandle = cc11001100_hook("r.inputchangeHandle", function () {
          if (r._kdcode) r.addLog({
            type: cc11001100_hook("type", "unval-change-key", "object-key-init")
          });else {
            var e = cc11001100_hook("e", "", "var-init");
            r.logs.length && new Date().getTime() - a() < 300 && (e = cc11001100_hook("e", "unval-", "assign")), r.addLog({
              type: cc11001100_hook("type", e + "change-unkey", "object-key-init")
            });
          }
        }, "assign"), r.timmer, r.opts.innerchange && (r.ipt.onfocus = cc11001100_hook("r.ipt.onfocus", function (e) {
          r.timmer = cc11001100_hook("r.timmer", setInterval(function () {
            s(e);
          }, 200), "assign");
        }, "assign"), r.ipt.onblur = cc11001100_hook("r.ipt.onblur", function () {
          clearInterval(r.timmer);
        }, "assign"));
      }
      return t.prototype = cc11001100_hook("t.prototype", {
        checkLog: function (e) {
          for (var t = cc11001100_hook("t", this.logs.length, "var-init"), s = cc11001100_hook("s", !1, "var-init"); t > 0;) t--, -1 !== this.logs[t].type.indexOf("unval-") ? (e.type = cc11001100_hook("e.type", (-1 === e.type.indexOf("unval-") ? "" : "unval-") + this.logs[t].type.replace("unval-", "") + "-" + e.type.replace("unval-", ""), "assign"), this.logs[t] = cc11001100_hook("this.logs[t]", e, "assign"), s = cc11001100_hook("s", !0, "assign")) : t = cc11001100_hook("t", -2, "assign");
          if (s) return !1;
          for (; this.logs.length >= this.opts.logmaxnum;) this.logs.shift();
          return !0;
        },
        analyseLog: function () {
          function t() {
            if (s.opts.adv) for (var e = cc11001100_hook("e", 0, "var-init"); e < n.length; e++) n.charCodeAt(e) > 256 && (o = cc11001100_hook("o", n.substring(0, e + 1), "assign"), u = cc11001100_hook("u", n.substring(e + 1), "assign"));
          }
          var s = cc11001100_hook("s", this, "var-init");
          if (this.logs.length > 0 && -1 === this.logs[this.logs.length - 1].type.indexOf("unval")) {
            var a = cc11001100_hook("a", this.logs[this.logs.length - 1], "var-init"),
              r = cc11001100_hook("r", a.val.substring(0, a.start), "var-init"),
              n = cc11001100_hook("n", a.val.substring(a.start, a.cursor), "var-init"),
              i = cc11001100_hook("i", a.val.substring(a.cursor), "var-init"),
              o = cc11001100_hook("o", "", "var-init"),
              u = cc11001100_hook("u", "", "var-init");
            229 === a.kd ? n.charCodeAt(n.length - 1) > 256 || !n.match(/[\x00-\x80]/g) ? (this._keyposition = cc11001100_hook("this._keyposition", e(this.ipt), "assign"), a.type += cc11001100_hook("a.type", "-endime", "assign"), 0 === n.length && (a.type += cc11001100_hook("a.type", "-cancelime", "assign"))) : (a.type += cc11001100_hook("a.type", "-imeinput", "assign"), t()) : a.type.indexOf("paste-mouse") > -1 ? this._keyposition = cc11001100_hook("this._keyposition", e(this.ipt), "assign") : a.type.indexOf("change-unkey") > -1 ? 0 === n.length ? (this._keyposition = cc11001100_hook("this._keyposition", e(this.ipt), "assign"), this.logs.length > 1 && this.logs[this.logs.length - 2].type.indexOf("upsave") > -1 && (a.type += cc11001100_hook("a.type", "-link", "assign"))) : n.charCodeAt(n.length - 1) > 256 || !n.match(/[\x00-\x80]/g) ? (this._keyposition = cc11001100_hook("this._keyposition", e(this.ipt), "assign"), a.type += cc11001100_hook("a.type", "-endime", "assign")) : (a.type += cc11001100_hook("a.type", "-imeinput", "assign"), t()) : this._keyposition = cc11001100_hook("this._keyposition", e(this.ipt), "assign"), this.opts.adv && (a.type += cc11001100_hook("a.type", "-adv", "assign"), a.strA = cc11001100_hook("a.strA", r, "assign"), a.strB = cc11001100_hook("a.strB", n, "assign"), a.strB1 = cc11001100_hook("a.strB1", o, "assign"), a.strB2 = cc11001100_hook("a.strB2", u, "assign"), a.strC = cc11001100_hook("a.strC", i, "assign")), this.onLogChange && this.onLogChange.call(this, a);
          }
        },
        addLog: function (t) {
          t.kd = cc11001100_hook("t.kd", this._kdcode, "assign"), t.val = cc11001100_hook("t.val", this.ipt.value, "assign"), t.start = cc11001100_hook("t.start", this._keyposition, "assign"), t.cursor = cc11001100_hook("t.cursor", e(this.ipt), "assign"), t.type = cc11001100_hook("t.type", t.type || 0, "assign"), t.time = cc11001100_hook("t.time", new Date().getTime(), "assign"), (0 === this.logs.length || this.logs[this.logs.length - 1].val !== t.val || -1 !== this.logs[this.logs.length - 1].type.indexOf("unval-") || -1 !== t.type.indexOf("unval-")) && (this.checkLog(t) && this.logs.push(t), this.analyseLog());
        },
        getLog: function () {
          var e = cc11001100_hook("e", this.logs.slice(0), "var-init");
          return e;
        },
        triggerInputChange: function (e) {
          this.inputchangeHandle(e);
        },
        diffLog: function () {
          for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", !1, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < this.logs.length; s++) if (0 !== s) {
            var a = cc11001100_hook("a", this.logs[s], "var-init");
            if (a.strB && a.strA) {
              if (0 === a.strB.length && a.strA.length < this.logs[s - 1].strA.length) {
                e = cc11001100_hook("e", [], "assign");
                continue;
              }
              if (a.type.indexOf("link") > -1 || a.type.indexOf("paste") > -1) {
                e = cc11001100_hook("e", [], "assign");
                continue;
              }
            }
            var r = cc11001100_hook("r", a.time - this.logs[s - 1].time, "var-init");
            r > 3e3 && (e = cc11001100_hook("e", [], "assign"));
            var n = cc11001100_hook("n", 0, "var-init"),
              i = cc11001100_hook("i", (a.val.match(/[^\x00-\x80]/g) || []).length - (this.logs[s - 1].val.match(/[^\x00-\x80]/g) || []).length, "var-init");
            i > 0 ? n = cc11001100_hook("n", 1, "assign") : i = cc11001100_hook("i", (a.val.match(/[\x00-\x80]/g) || []).length - (this.logs[s - 1].val.match(/[\x00-\x80]/g) || []).length, "assign"), a.type.indexOf("ime") > -1 ? (n += cc11001100_hook("n", 2, "assign"), t = cc11001100_hook("t", !0, "assign")) : a.type.indexOf("unval") > -1 && t ? n += cc11001100_hook("n", 2, "assign") : t = cc11001100_hook("t", !1, "assign"), i > 0 && e.push(n, i, r);
          }
          return e;
        }
      }, "assign"), t;
    }(), "var-init"),
    QuickDelete = cc11001100_hook("QuickDelete", function () {
      function e() {
        this._init();
      }
      return e.prototype = cc11001100_hook("e.prototype", {
        constructor: cc11001100_hook("constructor", e, "object-key-init"),
        _init: function () {
          var e = cc11001100_hook("e", this, "var-init");
          e.quickdelete = cc11001100_hook("e.quickdelete", $(".quickdelete"), "assign"), e.quickdeleteline = cc11001100_hook("e.quickdeleteline", $(".quickdelete-line"), "assign"), e.ipt = cc11001100_hook("e.ipt", $("#kw"), "assign"), e._bind_event();
        },
        _hide: function () {
          var e = cc11001100_hook("e", this, "var-init");
          e.quickdelete.hide(), e.quickdeleteline.hide();
        },
        _show: function () {
          var e = cc11001100_hook("e", this, "var-init");
          e.quickdelete.show(), e.quickdeleteline.show();
        },
        _bind_event: function () {
          var e = cc11001100_hook("e", this, "var-init"),
            t = cc11001100_hook("t", e.ipt, "var-init"),
            s = cc11001100_hook("s", e.quickdelete, "var-init");
          s.on("click", function () {
            t.val("").focus(), e._hide(), ns_c({
              fm: cc11001100_hook("fm", "behs", "object-key-init"),
              tab: cc11001100_hook("tab", "search-delete", "object-key-init")
            });
          });
        }
      }, "assign"), e;
    }(), "var-init"),
    bdSug = function (e) {
      var t = cc11001100_hook("t", new SUGOBJ(e), "var-init");
      return t.outInterface();
    },
    supportInputEvent = cc11001100_hook("supportInputEvent", "oninput" in document.createElement("input") && !navigator.userAgent.match(/MSIE 9/) && !navigator.userAgent.match(/chrome\/(28|29|30|31)/i), "var-init"),
    BDSUG_TIMESTAMP_START = cc11001100_hook("BDSUG_TIMESTAMP_START", 14183424e5, "var-init"),
    BDSUG_QUERY_LEV = cc11001100_hook("BDSUG_QUERY_LEV", 4, "var-init");
  return SUGOBJ.prototype = cc11001100_hook("SUGOBJ.prototype", {
    updateInitData: function (type) {
      var me = cc11001100_hook("me", this, "var-init"),
        opts = cc11001100_hook("opts", me.opts || {}, "var-init");
      me.setsug = cc11001100_hook("me.setsug", !0, "assign"), me.setsugstorage = cc11001100_hook("me.setsugstorage", !0, "assign"), me.sets = cc11001100_hook("me.sets", {}, "assign"), me.sugcookie = cc11001100_hook("me.sugcookie", navigator.cookieEnabled && /sug=(\d)/.test(document.cookie) ? RegExp.$1 : 3, "assign"), me.sugstorecookie = cc11001100_hook("me.sugstorecookie", navigator.cookieEnabled && /sugstore=(\d)/.test(document.cookie) ? RegExp.$1 : 1, "assign"), me.bds && me.bds.comm && me.bds.comm.personalData && (me.sets = cc11001100_hook("me.sets", "string" == typeof me.bds.comm.personalData ? eval("(" + me.bds.comm.personalData + ")") : me.bds.comm.personalData, "assign")), me.sets.errno && 0 === me.sets.errno && me.sets.sugSet && me.sets.sugSet.ErrMsg && "SUCCESS" === me.sets.sugSet.ErrMsg ? "0" === me.sets.sugSet.value && (me.setsug = cc11001100_hook("me.setsug", !1, "assign")) : "0" === me.sugcookie && (me.setsug = cc11001100_hook("me.setsug", !1, "assign")), me.sets.errno && 0 === me.sets.errno && me.sets.sugStoreSet && me.sets.sugStoreSet.ErrMsg && "SUCCESS" === me.sets.sugStoreSet.ErrMsg ? "0" === me.sets.sugStoreSet.value && (me.setsugstorage = cc11001100_hook("me.setsugstorage", !1, "assign")) : "0" === me.sugstorecookie && (me.setsugstorage = cc11001100_hook("me.setsugstorage", !1, "assign")), me.loggedon = cc11001100_hook("me.loggedon", me.bds && me.bds.se.store && !me.bds.se.store.disabled && navigator.cookieEnabled, "assign"), me.showsug = cc11001100_hook("me.showsug", opts.showsug ? opts.showsug : me.setsug, "assign"), me.showsugstore = cc11001100_hook("me.showsugstore", opts.showsugstore ? opts.showsugstore : me.showsug && me.loggedon && me.setsugstorage, "assign"), me.query = cc11001100_hook("me.query", me.bds.comm.query, "assign"), me.pinyin = cc11001100_hook("me.pinyin", me.bds.comm.pinyin, "assign"), me.sugHost = cc11001100_hook("me.sugHost", me.bds.comm.sugHost || "", "assign"), me.sid = cc11001100_hook("me.sid", navigator.cookieEnabled && /H_PS_PSSID=([0-9_]+)/.test(document.cookie) ? RegExp.$1 : me.bds.comm.sid, "assign");
      var canWriteStore = cc11001100_hook("canWriteStore", !0, "var-init"),
        isLogin = cc11001100_hook("isLogin", me.bds && me.bds.comm && me.bds.comm.username, "var-init");
      (isLogin || me.bds && me.bds.se && me.bds.se.store && 1 == me.bds.se.store.get("wwwPassLogout")) && (canWriteStore = cc11001100_hook("canWriteStore", !1, "assign")), me.bds && me.bds.comm && me.bds.comm.sampleval && $.inArray("sample_his", me.bds.comm.sampleval) > -1 && (canWriteStore = cc11001100_hook("canWriteStore", !0, "assign")), ("init" !== type || document.referrer) && canWriteStore && me.writeStore(), -1 !== me.resultSugSamples.indexOf(me.currentSugSample) && me.writeStore(), me.bds.se.store.set("wwwPassLogout", 0);
    },
    check: function () {
      var e = cc11001100_hook("e", this, "var-init");
      e.value !== e.ipt.value && e.showValue !== e.ipt.value && (e.inputValue = cc11001100_hook("e.inputValue", e.showValue = cc11001100_hook("e.showValue", e.value = cc11001100_hook("e.value", e.ipt.value, "assign"), "assign"), "assign"), e.bds && e.bds.comm && 0 === e.bds.comm.ishome && e.addStat("oq", e.bds.comm.confirmQuery ? xss(e.bds.comm.confirmQuery) : ""), e.bds && e.bds.comm && e.bds.comm.confirmQid && e.addStat("rsv_pq", e.bds.comm.confirmQid), $(e.ipt).trigger("inputChange", [e]), e.request(e.value));
    },
    startCircle: function () {
      var e = cc11001100_hook("e", this, "var-init");
      e.timer || ($(e.ipt).trigger("start", [e]), e.timer = cc11001100_hook("e.timer", setTimeout(function () {
        e.check(), e.timer = cc11001100_hook("e.timer", setTimeout(arguments.callee, 200), "assign");
      }, 200), "assign"), supportInputEvent && $(e.ipt).bind("input", function () {
        e.check();
      }));
    },
    stopCircle: function () {
      var e = cc11001100_hook("e", this, "var-init");
      e.timer && (clearTimeout(e.timer), supportInputEvent && $(e.ipt).unbind("input"), e.timer = cc11001100_hook("e.timer", null, "assign"), $(e.ipt).trigger("stop", [e]));
    },
    callback: function (e, t) {
      function s(e) {
        cc11001100_hook("e", e, "function-parameter");
        a.zhixintemplate[e] && !a.zhixinused[e] && (a.zhixinused[e] = cc11001100_hook("a.zhixinused[e]", $.ajax({
          crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
          url: cc11001100_hook("url", a.zhixintemplate[e], "object-key-init"),
          dataType: cc11001100_hook("dataType", "script", "object-key-init"),
          scriptCharset: cc11001100_hook("scriptCharset", "UTF-8", "object-key-init")
        }), "assign"));
      }
      var a = cc11001100_hook("a", this, "var-init");
      if (e && e.exp) {
        var r = cc11001100_hook("r", a.stat.rsv_sug6 || "", "var-init");
        r.length > 0 && e.exp.length > 0 && -1 === r.indexOf(e.exp) ? r += cc11001100_hook("r", "_" + e.exp, "assign") : r = cc11001100_hook("r", e.exp, "assign"), a.addStat("rsv_sug6", r);
      }
      if (e && (e.g || e.z || a.checkStore(e) && a.checkStore(e).length > 0)) {
        if (a.queryValue = cc11001100_hook("a.queryValue", e.q, "assign"), e.q && "2" !== t && (a.dataCached[e.q] = cc11001100_hook("a.dataCached[e.q]", e, "assign")), $(a.ipt).trigger("dataReady", [a]), !a.withoutZhixin && e.zzx) for (var n = cc11001100_hook("n", 0, "var-init"); n < e.zzx.length; n++) e.zzx[n] && e.zzx[n].type && (a.zhixinsug.push({
          value: cc11001100_hook("value", e.g[n].q, "object-key-init"),
          type: cc11001100_hook("type", e.zzx[n].type, "object-key-init"),
          url: cc11001100_hook("url", e.zzx[n].url, "object-key-init")
        }), s(e.zzx[n].type));
        if (a.dataArray = cc11001100_hook("a.dataArray", a.packData(e), "assign"), a.requestDefaultData = cc11001100_hook("a.requestDefaultData", e, "assign"), bds.comm.ishome || -1 === a.resultSugSamples.indexOf(a.currentSugSample)) a.normalLog = cc11001100_hook("a.normalLog", a.getNormalSugOrHisLog({
          total: cc11001100_hook("total", e.g && e.g.length, "object-key-init")
        }), "assign"), a.render(a.dataArray);else {
          if (("search_sug_1" === a.currentSugSample || "search_sug_6" === a.currentSugSample) && (a.normalLog = cc11001100_hook("a.normalLog", a.getNormalSugOrHisLog({
            total: cc11001100_hook("total", e.g && e.g.length, "object-key-init")
          }), "assign"), a.render(a.dataArray)), a.isSugSample3) {
            $(".wrapper_new #form .bdsug-new").children().each(function () {
              $(this).remove();
            }), a.backFrame && 1 === a.currentSearchStatus && ($("#kw")[0].value = cc11001100_hook("$(\"#kw\")[0].value", "", "assign"));
            var i = cc11001100_hook("i", e.g_mot && e.g_mot.length, "var-init"),
              o = cc11001100_hook("o", e.g_mot_title, "var-init");
            if (0 === a.currentSearchStatus) a.showRightContent = cc11001100_hook("a.showRightContent", e.g_mot && e.g_mot.length >= 3 || !1, "assign"), a.normalLog = cc11001100_hook("a.normalLog", a.getNormalSugOrHisLog({
              total: cc11001100_hook("total", e.g_mot && e.g_mot.length, "object-key-init")
            }), "assign"), a.render(a.dataArray), a.backFrame && (a.recommendLog = cc11001100_hook("a.recommendLog", a.getRecommendOrHisLog(i, "right"), "assign"), a.renderRecomend(e.g_mot, o, "right"));else if (1 === a.currentSearchStatus) {
              var u = cc11001100_hook("u", a.showsugstore ? "right" : "left", "var-init"),
                c = cc11001100_hook("c", a.showsugstore ? "left" : "right", "var-init");
              if (a.backFrame) {
                var l = cc11001100_hook("l", e.g && e.g.length, "var-init");
                a.recommendLog = cc11001100_hook("a.recommendLog", a.getRecommendOrHisLog(i, u), "assign"), a.searchHistroyLog = cc11001100_hook("a.searchHistroyLog", a.getRecommendOrHisLog(l, c), "assign");
              }
              a.backFrame && e.g && e.g.length && e.g_mot && e.g_mot.length ? (a.renderSearchHistory(e.g, "", c), a.renderRecomend(e.g_mot, e.g_mot_title, u), a.renderBottomContent()) : (a.normalLog = cc11001100_hook("a.normalLog", a.getNormalSugOrHisLog({
                total: cc11001100_hook("total", e.g && e.g.length, "object-key-init")
              }), "assign"), a.render(a.dataArray));
            } else "" === a.inputValue && (a.normalLog = cc11001100_hook("a.normalLog", a.getNormalSugOrHisLog({
              total: cc11001100_hook("total", e.g && e.g.length, "object-key-init")
            }), "assign"), a.render(a.dataArray));
          }
          if ("search_sug_2" === a.currentSugSample || "search_sug_5" === a.currentSugSample) {
            a.showRightContent = cc11001100_hook("a.showRightContent", e.g_mot && e.g_mot.length >= 3 || !1, "assign"), a.normalLog = cc11001100_hook("a.normalLog", a.getNormalSugOrHisLog({
              total: cc11001100_hook("total", e.g && e.g.length, "object-key-init")
            }), "assign"), a.render(a.dataArray);
            var i = cc11001100_hook("i", e.g_mot && e.g_mot.length, "var-init"),
              o = cc11001100_hook("o", e.g_mot_title, "var-init");
            a.backFrame ? (i > 0 && (a.recommendLog = cc11001100_hook("a.recommendLog", a.getRecommendOrHisLog(i, "right"), "assign")), a.renderRecomend(e.g_mot, e.g_mot_title, "right")) : "search_sug_5" === a.currentSugSample && a.backDelete && "" !== a.inputValue && (a.recommendLog = cc11001100_hook("a.recommendLog", a.getRecommendOrHisLog(i, "right"), "assign"), a.renderRecomend(e.g_mot, e.g_mot_title, "right"));
          }
          if ("search_sug_4-1" === a.currentSugSample || "search_sug_4-2" === a.currentSugSample) {
            if (a.showRightContent = cc11001100_hook("a.showRightContent", e.g_mot && e.g_mot.length >= 3 && a.showsugstore || !1, "assign"), a.normalLog = cc11001100_hook("a.normalLog", a.getNormalSugOrHisLog({
              total: cc11001100_hook("total", e.g && e.g.length, "object-key-init")
            }), "assign"), a.render(a.dataArray), a.backFrame) {
              var i = cc11001100_hook("i", e.g_mot && e.g_mot.length, "var-init");
              i > 0 && (a.searchHistroyLog = cc11001100_hook("a.searchHistroyLog", a.getRecommendOrHisLog(i, "right"), "assign"));
            }
            a.backFrame && a.showsugstore && a.renderSearchHistory(e.g_mot, e.g_mot_title, "right");
          }
          "search_sug_base" === a.currentSugSample && (a.normalLog = cc11001100_hook("a.normalLog", a.getNormalSugOrHisLog({
            total: cc11001100_hook("total", e.g && e.g.length, "object-key-init")
          }), "assign"), a.render(a.dataArray));
        }
        if (a.isSugSample) {
          var d = cc11001100_hook("d", $(".wrapper_new #form .bdsug-new")[0] && "block" === $(".wrapper_new #form .bdsug-new")[0].style.display, "var-init"),
            g = cc11001100_hook("g", e.g && e.g.length || 0, "var-init"),
            m = cc11001100_hook("m", e.g_mot && e.g_mot.length || 0, "var-init"),
            h = cc11001100_hook("h", 0, "var-init");
          if (d) {
            var p = cc11001100_hook("p", $(".wrapper_new #form .bdsug-new ul"), "var-init");
            p.each(function () {
              $(this).children().length > 0 && h++;
            });
          }
          a.sendSugShowLog({
            show: cc11001100_hook("show", d ? 1 : 0, "object-key-init"),
            backFrame: cc11001100_hook("backFrame", a.backFrame ? 1 : 0, "object-key-init"),
            module: cc11001100_hook("module", h, "object-key-init"),
            home: cc11001100_hook("home", a.bds.comm.ishome, "object-key-init"),
            showHis: cc11001100_hook("showHis", a.showsugstore ? 1 : 0, "object-key-init"),
            status: cc11001100_hook("status", a.currentSearchStatus, "object-key-init"),
            test: cc11001100_hook("test", a.currentSugSample, "object-key-init"),
            total: cc11001100_hook("total", g + m, "object-key-init"),
            normalLog: cc11001100_hook("normalLog", a.normalLog, "object-key-init"),
            recommend: cc11001100_hook("recommend", a.recommendLog, "object-key-init"),
            history: cc11001100_hook("history", a.searchHistroyLog, "object-key-init")
          }), a.normalLog = cc11001100_hook("a.normalLog", "", "assign"), a.recommendLog = cc11001100_hook("a.recommendLog", "", "assign"), a.searchHistroyLog = cc11001100_hook("a.searchHistroyLog", "", "assign");
        }
      } else a.isSugSample3 && 1 === a.currentSearchStatus && a.backFrame && "" === a.inputValue || a.hideSug();
    },
    sendSugShowLog: function (e) {
      c({
        rsv_ct: cc11001100_hook("rsv_ct", 10, "object-key-init"),
        rsv_cst: cc11001100_hook("rsv_cst", 1, "object-key-init"),
        rsv_clk_extra: cc11001100_hook("rsv_clk_extra", JSON.stringify(e), "object-key-init")
      });
    },
    getNormalSugOrHisLog: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        s = cc11001100_hook("s", "" === t.inputValue ? "his" : "sug", "var-init");
      return {
        total: cc11001100_hook("total", e.total, "object-key-init"),
        pos: cc11001100_hook("pos", "left", "object-key-init"),
        type: cc11001100_hook("type", s, "object-key-init")
      };
    },
    getRecommendOrHisLog: function (e, t) {
      return {
        total: cc11001100_hook("total", e || 0, "object-key-init"),
        pos: cc11001100_hook("pos", t, "object-key-init")
      };
    },
    sendBackFrameShowSugLog: function () {
      c({
        rsv_ct: cc11001100_hook("rsv_ct", 10, "object-key-init"),
        rsv_cst: cc11001100_hook("rsv_cst", 11, "object-key-init")
      });
    },
    buildUrl: function (e, t, s) {
      var a = cc11001100_hook("a", this, "var-init"),
        r = cc11001100_hook("r", a.sid.replace(/_/g, ","), "var-init"),
        n = cc11001100_hook("n", "pc", "var-init");
      a.sugprod && (n = cc11001100_hook("n", a.sugprod, "assign"));
      var i = cc11001100_hook("i", "/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=" + n + "&from=pc_web" + (r ? "&sugsid=" + r : ""), "var-init"),
        o = cc11001100_hook("o", (a.sugHost || "http://suggestion.baidu.com/su", ""), "var-init"),
        u = cc11001100_hook("u", [], "var-init"),
        c = cc11001100_hook("c", [], "var-init");
      try {
        var l = cc11001100_hook("l", a.bds.se.store.get("BDSUGSTORED"), "var-init");
        c = cc11001100_hook("c", l && $.parseJSON(l) || [], "assign");
      } catch (d) {}
      for (var g = cc11001100_hook("g", 0, "var-init"); g < c.length; g++) {
        var m = cc11001100_hook("m", c[g].t ? 1 * c[g].t + BDSUG_TIMESTAMP_START : new Date().getTime(), "var-init");
        m = cc11001100_hook("m", Math.round(m / 1e3), "assign");
        var h = cc11001100_hook("h", {
          time: cc11001100_hook("time", m, "object-key-init"),
          kw: cc11001100_hook("kw", decodeURIComponent(c[g].q), "object-key-init"),
          hide: cc11001100_hook("hide", c[g].hide, "object-key-init")
        }, "var-init");
        c[g].s && c[g].s > BDSUG_QUERY_LEV && (h.fq = cc11001100_hook("h.fq", c[g].s - BDSUG_QUERY_LEV + 1, "assign")), h.hide ? ("search_sug_1" === a.currentSugSample || "search_sug_2" === a.currentSugSample || "search_sug_5" === a.currentSugSample || a.isSugSample3 && 0 === a.currentSearchStatus) && "" !== e && (delete h.hide, u.push(h)) : (delete h.hide, u.push(h)), u.length > 10 && u.shift();
      }
      "" === e && (i = cc11001100_hook("i", "/sugrec?", "assign"), o = cc11001100_hook("o", "&prod=pc_his&from=pc_web&json=1&sid=" + a.sid + "&hisdata=", "assign"), $.stringify && u.length && (o += cc11001100_hook("o", encodeURIComponent($.stringify(u)), "assign")), !window.__sam_his_hot || a.bds && a.bds.comm && a.bds.comm.username || (o += cc11001100_hook("o", "&type=4", "assign")), o += cc11001100_hook("o", "&_t=" + new Date().getTime(), "assign"));
      var p = cc11001100_hook("p", t ? "&sugmode=" + t : "", "var-init");
      a.backDelete && "" !== a.inputValue && (p = cc11001100_hook("p", "&sugmode=3", "assign"));
      var v = cc11001100_hook("v", 0, "var-init");
      try {
        v = cc11001100_hook("v", +(localStorage.getItem("search_request_time") || 0), "assign");
      } catch (f) {
        console.error(f);
      }
      var S = cc11001100_hook("S", "search_sug_3-2" === a.currentSugSample ? 18e5 : 72e4, "var-init");
      if (a.currentSearchStatus = cc11001100_hook("a.currentSearchStatus", Date.now() - v > S ? 1 : 0, "assign"), 2 === +t) {
        var b = cc11001100_hook("b", "&hot_launch=", "var-init");
        b += cc11001100_hook("b", 1 === a.currentSearchStatus ? 1 : 0, "assign"), p += cc11001100_hook("p", b, "assign");
      }
      -1 !== a.resultSugSamples.indexOf(a.currentSugSample) && "" !== e && $.stringify && u.length && (o += cc11001100_hook("o", "&his=" + encodeURIComponent($.stringify(u)), "assign")), a.sugcookie > 0 && (a.sugcookie = cc11001100_hook("a.sugcookie", 3, "assign"));
      var _ = cc11001100_hook("_", "", "var-init");
      return _ = cc11001100_hook("_", "" === e ? a.isSugSample3 ? i + "&wd=" + encodeURIComponent(a.queryValue) + o : i + o : -1 !== a.resultSugSamples.indexOf(a.currentSugSample) ? i + "&wd=" + encodeURIComponent(e) + o : i + "&wd=" + encodeURIComponent(e), "assign"), bds.comm.supportis && (_ += cc11001100_hook("_", "&req=2", "assign")), window.bds && bds.comm && bds.comm.cur_query && (_ += cc11001100_hook("_", "&bs=" + encodeURIComponent(bds.comm.cur_query), "assign")), window.bds && bds.comm && bds.comm.cur_disp_query && (_ += cc11001100_hook("_", "&pbs=" + encodeURIComponent(bds.comm.cur_disp_query), "assign")), !window._is_sugemptyhot_sam || !bds.comm.ishome || bds.comm.username || e || s ? e || s || (_ += cc11001100_hook("_", "&sc=eb", "assign")) : _ += cc11001100_hook("_", "&sc=hot", "assign"), a.ipt && (_ += cc11001100_hook("_", "&csor=" + getCursortPosition(a.ipt), "assign")), a.pwd && (_ += cc11001100_hook("_", "&pwd=" + encodeURIComponent(a.pwd), "assign")), _ += cc11001100_hook("_", p, "assign"), a.pwd = cc11001100_hook("a.pwd", e, "assign"), _;
    },
    request: function (e, t) {
      function s() {
        a.jqXhr = cc11001100_hook("a.jqXhr", $.ajax({
          dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
          async: cc11001100_hook("async", !0, "object-key-init"),
          url: cc11001100_hook("url", a.buildUrl(e, t), "object-key-init"),
          jsonp: cc11001100_hook("jsonp", "cb", "object-key-init"),
          timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
          success: function (e) {
            a.callback(e, t);
          },
          always: function () {
            a.jqXhr = cc11001100_hook("a.jqXhr", null, "assign");
          }
        }), "assign");
      }
      var a = cc11001100_hook("a", this, "var-init"),
        r = cc11001100_hook("r", "search_sug_3-1" === a.currentSugSample || "search_sug_3-2" === a.currentSugSample, "var-init");
      if (!r || 1 !== a.currentSearchStatus || !a.backFrame || "" !== a.inputValue) {
        e && (e = cc11001100_hook("e", $.limitWd(e, 160), "assign")), a.directSugSelected = cc11001100_hook("a.directSugSelected", !1, "assign"), a.isAddQuery = cc11001100_hook("a.isAddQuery", e.length > a.prevQuery.length, "assign");
        var n = cc11001100_hook("n", !1, "var-init");
        if (a.backDelete = cc11001100_hook("a.backDelete", !1, "assign"), e.length < a.queryValue.length && !a.isAddQuery ? a.requestQuery.forEach(function (t) {
          n = cc11001100_hook("n", -1 !== t.indexOf(e) ? !0 : !1, "assign");
        }) : n = cc11001100_hook("n", !1, "assign"), n ? (a.requestQuery.push(e), a.backDelete = cc11001100_hook("a.backDelete", !0, "assign")) : a.backDelete = cc11001100_hook("a.backDelete", !1, "assign"), "_blank" === $(a.form).attr("target") && 1 === $(a.ipt).attr("data-bfocus")) $(a.ipt).focus().attr("data-bfocus", 0);else if (a.showsug) {
          if (a.reqValue = cc11001100_hook("a.reqValue", e, "assign"), 2 !== t && a.dataCached[e]) return void a.callback(a.dataCached[e]);
          a.jqXhr && a.jqXhr.abort(), "" === e ? a.backFrame && a.isSugSample3 ? s() : a.jqXhr = cc11001100_hook("a.jqXhr", $.ajax({
            type: cc11001100_hook("type", "GET", "object-key-init"),
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            async: cc11001100_hook("async", !0, "object-key-init"),
            url: cc11001100_hook("url", a.buildUrl(e, t), "object-key-init"),
            timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
            success: function (e) {
              a.callback(e, t);
            },
            always: function () {
              a.jqXhr = cc11001100_hook("a.jqXhr", null, "assign");
            }
          }), "assign") : s(), a.rsv_sug3++, a.addStat("rsv_sug3", a.rsv_sug3), a.initTime = cc11001100_hook("a.initTime", new Date().getTime(), "assign");
        }
      }
    },
    packData: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        s = cc11001100_hook("s", [], "var-init");
      t.checkHot(e), t.checkAla(e), t.checkStore(e), t.bds.comm.supportis || t.checkDirect(e);
      for (var a = cc11001100_hook("a", t.mergeData(e), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < a.length; r++) {
        if (!t.isDirectNewSug) if (t.bds && t.bds.comm && 1 === t.bds.comm.ishome && t.bds.comm.supportis) {
          if (r > 9) break;
        } else if (t.bds && t.bds.comm && 0 === t.bds.comm.ishome && t.bds.comm.supportis && ("store" === a[r].type || "hot" === a[r].type)) {
          if (r > t.maxNum - 1 + 5) break;
        } else if (r > t.maxNum - 1) break;
        t.reverse ? s.unshift(a[r]) : s.push(a[r]);
      }
      return s;
    },
    checkHot: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      if (t.dataHot = cc11001100_hook("t.dataHot", [], "assign"), e.g && e.g.length) for (var s = cc11001100_hook("s", 0, "var-init"); s < e.g.length; s++) {
        var a = cc11001100_hook("a", e.g[s], "var-init");
        a.t && "hot" === a.t ? t.dataHot.push({
          value: cc11001100_hook("value", a.q, "object-key-init"),
          otherData: cc11001100_hook("otherData", a.st, "object-key-init")
        }) : !window.__sam_his_hot || !a.t || "hs" !== a.t || window.me.bds && t.bds.comm && t.bds.comm.username || t.dataHot.push({
          value: cc11001100_hook("value", a.q, "object-key-init"),
          otherData: cc11001100_hook("otherData", a.st, "object-key-init")
        });
      }
    },
    checkDirect: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      if (t.dataDirect = cc11001100_hook("t.dataDirect", [], "assign"), e.tzx && "6" === e.tzx.type && e.tzx.info) {
        var s = cc11001100_hook("s", e.tzx.info, "var-init");
        t.dataDirect.push({
          value: cc11001100_hook("value", s.site, "object-key-init"),
          otherData: cc11001100_hook("otherData", s, "object-key-init")
        });
      }
    },
    checkAla: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      if (t.dataAladdin = cc11001100_hook("t.dataAladdin", [], "assign"), e.z && e.z.length > 0 && !t.withoutRich) for (var s = cc11001100_hook("s", 0, "var-init"); s < e.z.length; s++) {
        var a = cc11001100_hook("a", e.z[s], "var-init");
        a.id && a.type && a.key && a.word && t.dataAladdin.push({
          value: cc11001100_hook("value", a.key, "object-key-init"),
          otherData: cc11001100_hook("otherData", a, "object-key-init")
        });
      } else t.dataAladdin = cc11001100_hook("t.dataAladdin", [], "assign");
    },
    writeStore: function () {
      var e = cc11001100_hook("e", this, "var-init");
      if (e.query && e.pinyin && checkHsugIn(e.query)) {
        e.getStore();
        var t = cc11001100_hook("t", encodeURIComponent(e.query.toLowerCase()), "var-init"),
          s = cc11001100_hook("s", encodeURIComponent(e.pinyin.toLowerCase()), "var-init"),
          a = cc11001100_hook("a", BDSUG_QUERY_LEV, "var-init"),
          r = cc11001100_hook("r", new Date().getTime() - BDSUG_TIMESTAMP_START, "var-init"),
          n = cc11001100_hook("n", -1, "var-init");
        $.each(e.storearr, function (e, i) {
          i.p === s && (i.q = cc11001100_hook("i.q", t, "assign"), a = cc11001100_hook("a", (i.s || BDSUG_QUERY_LEV) + 1, "assign"), i.t = cc11001100_hook("i.t", r, "assign"), n = cc11001100_hook("n", e, "assign"));
        }), n > -1 && e.storearr.splice(n, 1);
        var i = cc11001100_hook("i", document.location.search || location.search, "var-init"),
          o = cc11001100_hook("o", /base_query/.test(i), "var-init");
        if (o) return;
        var u = cc11001100_hook("u", e.showsugstore ? 0 : 1, "var-init");
        e.storearr.push({
          q: cc11001100_hook("q", t, "object-key-init"),
          p: cc11001100_hook("p", s, "object-key-init"),
          s: cc11001100_hook("s", a, "object-key-init"),
          t: cc11001100_hook("t", r, "object-key-init"),
          hide: cc11001100_hook("hide", u, "object-key-init")
        }), e.storearr.length > 50 && e.storearr.shift(), e.setStore();
      }
    },
    checkStore: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      if (t.dataStored = cc11001100_hook("t.dataStored", [], "assign"), t.showsugstore && checkHsugShow(t.value)) {
        if (e && e.g && e.g.length) for (var s = cc11001100_hook("s", 0, "var-init"); s < e.g.length; s++) {
          var a = cc11001100_hook("a", e.g[s], "var-init");
          a.type && ("his_normal" === a.type || "his_rec" === a.type) && $.trim(a.q) && t.dataStored.push({
            value: cc11001100_hook("value", $.trim(a.q), "object-key-init"),
            pinyin: cc11001100_hook("pinyin", "|", "object-key-init"),
            s: cc11001100_hook("s", 4, "object-key-init"),
            t: cc11001100_hook("t", "", "object-key-init")
          });
        }
        0 === t.dataStored.length && (t.getStore(), $.each(t.storearr, function (e, s) {
          var a = cc11001100_hook("a", decodeURIComponent(s.q), "var-init"),
            r = cc11001100_hook("r", decodeURIComponent(s.p), "var-init");
          (0 === a.indexOf(t.value.toLowerCase()) || 0 === r.indexOf(t.value.toLowerCase())) && t.dataStored.unshift({
            value: cc11001100_hook("value", a, "object-key-init"),
            pinyin: cc11001100_hook("pinyin", r, "object-key-init"),
            s: cc11001100_hook("s", s.s, "object-key-init"),
            t: cc11001100_hook("t", s.t, "object-key-init")
          });
        }));
      } else if (t.showsugstore && "" === t.value) {
        if (e && e.g && e.g.length) for (var s = cc11001100_hook("s", 0, "var-init"); s < e.g.length; s++) {
          var a = cc11001100_hook("a", e.g[s], "var-init");
          a.type && ("his_normal" === a.type || "his_rec" === a.type) && $.trim(a.q) && t.dataStored.push({
            value: cc11001100_hook("value", $.trim(a.q), "object-key-init"),
            pinyin: cc11001100_hook("pinyin", "|", "object-key-init"),
            s: cc11001100_hook("s", 4, "object-key-init"),
            t: cc11001100_hook("t", "", "object-key-init")
          });
        }
        !window._is_sugempty_sam || t.bds && t.bds.comm && t.bds.comm.username || (t.getStore(), $.each(t.storearr, function (e, s) {
          var a = cc11001100_hook("a", decodeURIComponent(s.q), "var-init"),
            r = cc11001100_hook("r", decodeURIComponent(s.p), "var-init");
          t.dataStored.unshift({
            value: cc11001100_hook("value", a, "object-key-init"),
            pinyin: cc11001100_hook("pinyin", r, "object-key-init"),
            s: cc11001100_hook("s", s.s, "object-key-init"),
            t: cc11001100_hook("t", s.t, "object-key-init")
          });
        }));
      }
      return t.dataStored;
    },
    placeHolder: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      t.placeholder = cc11001100_hook("t.placeholder", e || "", "assign"), $(t.ipt).attr("placeholder", t.placeholder);
    },
    getStore: function () {
      var e = cc11001100_hook("e", this, "var-init");
      try {
        e.storestr = cc11001100_hook("e.storestr", e.bds.se.store.get("BDSUGSTORED"), "assign"), e.storearr = cc11001100_hook("e.storearr", e.storestr && $.parseJSON(e.storestr) || [], "assign");
      } catch (t) {
        e.storestr = cc11001100_hook("e.storestr", "[]", "assign"), e.storearr = cc11001100_hook("e.storearr", [], "assign");
      }
      $.each(e.storearr, function (e, t) {
        t.t = cc11001100_hook("t.t", t.t || 0, "assign"), t.s = cc11001100_hook("t.s", t.s || 4, "assign");
      });
    },
    setStore: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        t = cc11001100_hook("t", "", "var-init");
      $.each(e.storearr, function (e, s) {
        t += cc11001100_hook("t", (0 === e ? "" : ",") + '{"q":"' + s.q + '","p":"' + s.p + '","s":' + s.s + ',"t":' + s.t + ',"hide":' + (s.hide || 0) + "}", "assign");
      }), e.storestr = cc11001100_hook("e.storestr", "[" + t + "]", "assign");
      try {
        e.bds.se.store.set("BDSUGSTORED", e.storestr);
      } catch (s) {
        console.error(err);
      }
    },
    mergeData: function (e) {
      function t(e) {
        cc11001100_hook("e", e, "function-parameter");
        function t(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          var e = cc11001100_hook("e", $.subByte(e, "41"), "var-init");
          return t && e ? (e = cc11001100_hook("e", $.trim(e), "assign"), t = cc11001100_hook("t", $.trim(t), "assign"), e = cc11001100_hook("e", 0 === e.indexOf(t) && e !== t ? a(e, t) : r(e), "assign")) : e = cc11001100_hook("e", r(e), "assign"), e;
        }
        function a(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          e = cc11001100_hook("e", r(e), "assign"), t = cc11001100_hook("t", r(t), "assign");
          var s = cc11001100_hook("s", t, "var-init"),
            a = cc11001100_hook("a", t.length, "var-init"),
            n = cc11001100_hook("n", "<b>" + e.substring(a) + "</b>", "var-init");
          return s + n;
        }
        function r(e) {
          cc11001100_hook("e", e, "function-parameter");
          return e = cc11001100_hook("e", e.replace(/&/g, "&amp;"), "assign"), e = cc11001100_hook("e", e.replace(/</g, "&lt;"), "assign"), e = cc11001100_hook("e", e.replace(/>/g, "&gt;"), "assign");
        }
        function n(e) {
          cc11001100_hook("e", e, "function-parameter");
          if (e.flag) {
            var a = cc11001100_hook("a", e.value && e.value.tag, "var-init");
            a && (v += cc11001100_hook("v", '<span class="sug-tag-comm sug-hot-orange">' + a + "</span>", "assign"));
          }
          if ("1020" === e.type && e.value) {
            var r = cc11001100_hook("r", e.value.img, "var-init"),
              n = cc11001100_hook("n", e.value.brief || "", "var-init"),
              o = cc11001100_hook("o", e.value.info || "", "var-init"),
              u = cc11001100_hook("u", e.value.name[0] && e.value.name[0].text || "", "var-init"),
              c = cc11001100_hook("c", e.value.link, "var-init"),
              l = cc11001100_hook("l", "", "var-init");
            (r || n) && (p.isDouble = cc11001100_hook("p.isDouble", !0, "assign"));
            var d = cc11001100_hook("d", "", "var-init");
            n && (d = cc11001100_hook("d", '<span class="brief">' + n + "</span>", "assign"));
            var g = cc11001100_hook("g", "", "var-init");
            if (o && (g = cc11001100_hook("g", '<span class="info">' + o + "</span>", "assign")), p.isDouble) {
              e.value && e.value.img && (l = cc11001100_hook("l", '<div class="left-img-wrap"><img class="left-img" src="' + r + '"></div>', "assign"));
              var m = cc11001100_hook("m", i(e.value), "var-init"),
                h = cc11001100_hook("h", '<div class="content"><div class="header"><span class="name">' + u + "</span>" + m + '</div><div class="more c-line-clamp1">' + d + g + "</div></div>", "var-init"),
                f = cc11001100_hook("f", '<div class="right-btn">查看</div>', "var-init");
              if (c) {
                var S = cc11001100_hook("S", ' href="' + c + '" data-flag="' + e.flag + '"', "var-init");
                v = cc11001100_hook("v", "<a" + S + ' target="_blank" class="direct-sug-wrap">' + l + h + f + "</a>", "assign");
              } else v = cc11001100_hook("v", '<div class="direct-sug-wrap" data-flag="' + e.flag + '">' + l + h + f + "</div>", "assign");
            } else v = cc11001100_hook("v", t(u, s.queryValue) + i(e.value, e.flag), "assign");
          }
        }
        function i(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          if (e.tag_style_list) {
            var s = cc11001100_hook("s", "", "var-init");
            return e.tag_style_list.forEach(function (e) {
              1 === e.tag_type ? s += cc11001100_hook("s", o(e, t), "assign") : 2 === e.tag_type && (s += cc11001100_hook("s", c(e, t), "assign"));
            }), s;
          }
          if (e.tag_style) {
            var a = cc11001100_hook("a", e.tag_style.tag_type, "var-init");
            if (1 === a) return o(e.tag_style, t);
            if (2 === a) return c(e.tag_style, t);
          }
          if (e.tag) {
            var r = cc11001100_hook("r", "sug-tag-comm sug-new-tag sug-new-tag-" + (e.tagColor || "grey"), "var-init");
            return '<span class="' + r + '">' + e.tag + "</span>" || "";
          }
          return "";
        }
        function o(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          var s = cc11001100_hook("s", "border-color: " + u(e.border_color) + ";background-color:" + u(e.bg_color) + ";color:" + u(e.text_color), "var-init"),
            a = cc11001100_hook("a", ' data-flag="' + t + '"', "var-init");
          return '<span class="sug-tag-comm sug-tag-text" style="' + s + '"' + a + ">" + e.text + "</span>" || "";
        }
        function u(e) {
          cc11001100_hook("e", e, "function-parameter");
          if (!e) return "";
          var t = cc11001100_hook("t", parseInt("0x" + e.slice(1, 3), 16) / 255, "var-init"),
            s = cc11001100_hook("s", parseInt("0x" + e.slice(3, 5), 16), "var-init"),
            a = cc11001100_hook("a", parseInt("0x" + e.slice(5, 7), 16), "var-init"),
            r = cc11001100_hook("r", parseInt("0x" + e.slice(7, 9), 16), "var-init");
          return "rgba(" + [s, a, r, t].join(",") + ");";
        }
        function c(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          var s = cc11001100_hook("s", e.image, "var-init");
          return s ? '<img class="sug-tag-comm sug-tag-img" src="' + s + '" data-flag="' + t + '">' : "";
        }
        var l = cc11001100_hook("l", e.v, "var-init"),
          d = cc11001100_hook("d", e.type, "var-init"),
          g = cc11001100_hook("g", e.type, "var-init"),
          m = cc11001100_hook("m", e.s, "var-init"),
          h = cc11001100_hook("h", e.info, "var-init"),
          p = cc11001100_hook("p", {}, "var-init");
        p.value = cc11001100_hook("p.value", l, "assign");
        var v = cc11001100_hook("v", l && t(l, s.queryValue), "var-init"),
          f = cc11001100_hook("f", !1, "var-init");
        switch (s.isSugSample && (f = cc11001100_hook("f", !0, "assign"), ("search_sug_1" === s.currentSugSample || "search_sug_base" === s.currentSugSample) && (f = cc11001100_hook("f", !1, "assign"))), d) {
          case "direct":
            p.html = cc11001100_hook("p.html", "-" === g.iconurl ? '<p link="' + g.siteurl + '">' + g.site + "<span>" + g.showurl + "</span><i>官网</i></p>" : '<p link="' + g.siteurl + '"><img src="' + g.iconurl + '"/>' + g.site + "<span>" + g.showurl + "</span></p>", "assign"), p.type = cc11001100_hook("p.type", "direct", "assign");
            break;
          case "ala":
            p.html = cc11001100_hook("p.html", "<h3>" + v + "</h3><p>" + g.word + "</p>", "assign"), p.type = cc11001100_hook("p.type", "ala", "assign"), p.alaid = cc11001100_hook("p.alaid", g.id, "assign");
            break;
          case "store":
            2 === g["new"] && (v += cc11001100_hook("v", '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>', "assign")), p.html = cc11001100_hook("p.html", "<span>" + v + "</span>", "assign"), s.isSugSample && f && (p.html = cc11001100_hook("p.html", '<i class="c-icon sug-history-icon">&#xe6a8;</i>' + v, "assign")), (s.bds.comm.username || "|" !== g) && (p.html += cc11001100_hook("p.html", '<u class="bdsug-store-del ' + ("|" === g ? "bdsug-store-del-cloud" : "") + '" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>', "assign")), p.type = cc11001100_hook("p.type", "store", "assign"), p.pinyin = cc11001100_hook("p.pinyin", g, "assign"), p.s = cc11001100_hook("p.s", m, "assign");
            break;
          case "direct_new":
            if (s.isDirectNewSug) {
              n(h), p.html = cc11001100_hook("p.html", v, "assign");
              break;
            }
          default:
            g && g["new"] && 2 === g["new"] && (v += cc11001100_hook("v", '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>', "assign")), "sug" === d && s.isSugSample && f && (v = cc11001100_hook("v", '<i class="c-icon sug-search-icon">&#xe6a7;</i>' + v, "assign")), p.html = cc11001100_hook("p.html", v, "assign");
        }
        if (!s.withoutZhixin && s.zhixinsug.length > 0) for (var S = cc11001100_hook("S", 0, "var-init"); S < s.zhixinsug.length; S++) if (p.value === s.zhixinsug[S].value && "ala" !== p.type) {
          p.zxtype = cc11001100_hook("p.zxtype", s.zhixinsug[S].type, "assign"), p.zxurl = cc11001100_hook("p.zxurl", s.zhixinsug[S].url, "assign");
          var b = cc11001100_hook("b", '<i class="bdsug-arrow"></i>', "var-init");
          p.html.split(b).length <= 1 && (p.html += cc11001100_hook("p.html", b, "assign"));
        }
        return p;
      }
      var s = cc11001100_hook("s", this, "var-init"),
        a = cc11001100_hook("a", [], "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        n = cc11001100_hook("n", 0, "var-init");
      if (s.rsv_sug = cc11001100_hook("s.rsv_sug", 0, "assign"), s.dataHot.length > 0 && "" === s.value) {
        for (var i = cc11001100_hook("i", 0, "var-init"); i < s.dataHot.length && (r++, a.push(t({
          v: cc11001100_hook("v", s.dataHot[i].value, "object-key-init"),
          type: cc11001100_hook("type", "hot", "object-key-init"),
          otherData: cc11001100_hook("otherData", s.dataHot[i].otherData, "object-key-init")
        })), !(r >= 8)); i++);
        return a;
      }
      if (s.dataDirect.length > 0 && (a.push(t({
        v: cc11001100_hook("v", s.dataDirect[0].value, "object-key-init"),
        type: cc11001100_hook("type", "direct", "object-key-init"),
        otherData: cc11001100_hook("otherData", s.dataDirect[0].otherData, "object-key-init")
      })), ns_c({
        pj_name: cc11001100_hook("pj_name", "zhida_sug", "object-key-init"),
        zhida_prefix: cc11001100_hook("zhida_prefix", encodeURIComponent(s.inputValue), "object-key-init"),
        zhida_query: cc11001100_hook("zhida_query", encodeURIComponent(s.dataDirect[0].value), "object-key-init"),
        zhida_chufa: cc11001100_hook("zhida_chufa", encodeURIComponent(s.dataDirect[0].otherData.hit_q), "object-key-init"),
        zhida_bp: cc11001100_hook("zhida_bp", s.bds.comm.ishome ? 0 : 1, "object-key-init")
      })), s.dataAladdin.length > 0) for (var i = cc11001100_hook("i", 0, "var-init"); i < s.dataAladdin.length && (a.push(t({
        v: cc11001100_hook("v", s.dataAladdin[0].value, "object-key-init"),
        type: cc11001100_hook("type", "ala", "object-key-init"),
        otherData: cc11001100_hook("otherData", s.dataAladdin[0].otherData, "object-key-init")
      })), r++, !(r >= 1)); i++);
      if (s.dataStored.length > 0) for (var i = cc11001100_hook("i", 0, "var-init"); i < s.dataStored.length; i++) {
        for (var o = cc11001100_hook("o", !1, "var-init"), u = cc11001100_hook("u", 0, "var-init"); u < a.length; u++) "direct" !== a[u].type && s.dataStored[i].value === a[u].value && (o = cc11001100_hook("o", !0, "assign"));
        var c = cc11001100_hook("c", -1 === s.resultSugSamples.indexOf(s.currentSugSample) || "" === s.inputValue, "var-init");
        if (!o && c && (s.isDirectNewSug && "" !== s.inputValue || (a.push(t({
          v: cc11001100_hook("v", s.dataStored[i].value, "object-key-init"),
          type: cc11001100_hook("type", "store", "object-key-init"),
          otherData: cc11001100_hook("otherData", s.dataStored[i].pinyin, "object-key-init"),
          s: cc11001100_hook("s", s.dataStored[i].s || 0, "object-key-init")
        })), r++, 0 === n && "|" === s.dataStored[i].pinyin && (n = cc11001100_hook("n", 3, "assign")))), s.rsv_sug++, "" === s.value && r >= 9) break;
        if ("" !== s.value && r >= 2) break;
      }
      var l = cc11001100_hook("l", [], "var-init");
      if (e.g && e.g.length > 0) {
        for (var i = cc11001100_hook("i", 0, "var-init"); i < e.g.length; i++) if ("sug" === e.g[i].type || "direct_new" === e.g[i].type) {
          for (var o = cc11001100_hook("o", !1, "var-init"), u = cc11001100_hook("u", 0, "var-init"); u < a.length; u++) "direct" !== a[u].type && e.g[i].q === a[u].value && (o = cc11001100_hook("o", !0, "assign"));
          if (!o) {
            var d = cc11001100_hook("d", {}, "var-init");
            if (e.g[i].info && e.g[i].info.vec_str_raw[0]) try {
              d = cc11001100_hook("d", JSON.parse(e.g[i].info.vec_str_raw[0]), "assign");
            } catch (g) {
              console.error(g);
            }
            var m = cc11001100_hook("m", e.g[i].q, "var-init");
            "direct_new" === e.g[i].type && d && (m = cc11001100_hook("m", d.value.query || d.value.name && d.value.name[0].text || "", "assign")), ("sug" === e.g[i].type || s.isShowDirectSug(d)) && (l.push(t({
              v: cc11001100_hook("v", m, "object-key-init"),
              type: cc11001100_hook("type", e.g[i].type, "object-key-init"),
              otherData: cc11001100_hook("otherData", e.g[i].st, "object-key-init"),
              info: cc11001100_hook("info", d, "object-key-init")
            })), n = cc11001100_hook("n", n ? n : 1, "assign"));
          }
        }
        a = cc11001100_hook("a", "" === s.value && l.length ? s.bds.comm.supportis ? l.slice(0, Math.max(4 - a.length, 2)).concat(a) : l.slice(0, Math.max(10 - a.length, 5)).concat(a) : a.concat(l), "assign");
      }
      switch (n) {
        case 1:
          s.rsv_sug7[0] = cc11001100_hook("s.rsv_sug7[0]", 1, "assign");
          break;
        case 3:
          s.rsv_sug7[2] = cc11001100_hook("s.rsv_sug7[2]", 1, "assign");
      }
      return a;
    },
    isShowDirectSug: function (e) {
      if ("1020" === e.type && e.value) {
        var t = cc11001100_hook("t", e.value.name[0] && e.value.name[0].text || "", "var-init"),
          s = cc11001100_hook("s", e.value.img, "var-init"),
          a = cc11001100_hook("a", e.value.brief || "", "var-init"),
          r = cc11001100_hook("r", e.value.info || "", "var-init");
        if (!t) return !1;
        if (s && !a && !r) return !1;
      }
      return !0;
    },
    sendSpecialSugClickLog: function (e, t, s) {
      c({
        rsv_ct: cc11001100_hook("rsv_ct", 10, "object-key-init"),
        rsv_cst: cc11001100_hook("rsv_cst", e, "object-key-init"),
        rsv_clk_extra: cc11001100_hook("rsv_clk_extra", JSON.stringify({
          flag: cc11001100_hook("flag", t, "object-key-init"),
          index: cc11001100_hook("index", s, "object-key-init")
        }), "object-key-init")
      });
    },
    render: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      if (t.is_selecting = cc11001100_hook("t.is_selecting", !1, "assign"), !t.sugcontainer) {
        t.sugcontainer = cc11001100_hook("t.sugcontainer", document.createElement("DIV"), "assign");
        var s = cc11001100_hook("s", t.searchNewStyle, "var-init"),
          a = cc11001100_hook("a", "", "var-init");
        t.isSugSample3 && (a = cc11001100_hook("a", " bdsug-sample3", "assign")), t.sugcontainer.className = cc11001100_hook("t.sugcontainer.className", s ? "sam-bdsug bdsug bdsug-new new-pmd" + a : "bdsug bdsug-new new-pmd" + a, "assign"), $(t.sugcontainer).delegate("li", "mouseenter", function () {
          t.stopCircle();
          var e = cc11001100_hook("e", $(this).data("key"), "var-init");
          t.blurSug($(t.sugcontainer).find("li")), t.focusSug(this, e), t.index = cc11001100_hook("t.index", $(t.sugcontainer).find("li").index($(this)), "assign"), t.hoverSug = cc11001100_hook("t.hoverSug", e, "assign");
        }).delegate("li", "mouseleave", function () {
          t.startCircle(), $(this).removeClass("bdsug-s");
        }).delegate("li", "click", function () {
          t.index = cc11001100_hook("t.index", $(t.sugcontainer).find("li").index($(this)), "assign");
          var e = cc11001100_hook("e", $(this).find("a"), "var-init");
          if (e.length > 0) return void t.sendSpecialSugClickLog(14, $(e).data("flag"), t.index);
          var s = cc11001100_hook("s", $(this).find(".direct-sug-wrap"), "var-init");
          s.length > 0 && t.sendSpecialSugClickLog(15, $(s).data("flag"), t.index);
          var a = cc11001100_hook("a", $(this).find(".sug-tag-comm"), "var-init");
          !e.length && !s.length && a.length > 0 && t.sendSpecialSugClickLog(16, $(a).data("flag"), t.index), t.startCircle();
          var r = cc11001100_hook("r", $(this).data("key"), "var-init"),
            n = cc11001100_hook("n", $(".kw-placeholder").hasClass("placeholders-hidden"), "var-init");
          !n && $(".kw-placeholder").addClass("placeholders-hidden"), t.directSugSelected = cc11001100_hook("t.directSugSelected", $(this).hasClass("bdsug-direct") ? !0 : !1, "assign"), $(this).hasClass("bdsug-hot") && t.addStat("rsv_sug8", "hot"), t.sugValue = cc11001100_hook("t.sugValue", t.showValue = cc11001100_hook("t.showValue", t.value = cc11001100_hook("t.value", t.ipt.value = cc11001100_hook("t.ipt.value", r, "assign"), "assign"), "assign"), "assign"), t.ipt.value ? t.quickdelete._show() : t.quickdelete._hide(), t.hideSug(), t.bds && t.bds.comm && 0 === t.bds.comm.ishome && t.addStat("oq", t.bds.comm.confirmQuery ? xss(t.bds.comm.confirmQuery) : ""), t.bds && t.bds.comm && t.bds.comm.confirmQid && t.addStat("rsv_pq", t.bds.comm.confirmQid), t.addStat("sug", xss(r)), t.addStat("rsv_sug2", 1), t.formSubmit();
        }), $(t.sugcontainer).click(function (e) {
          e.stopPropagation();
        });
      }
      if (e.length > 0) {
        var r = cc11001100_hook("r", document.createElement("UL"), "var-init");
        bds.comm.ishome || r.setAttribute("id", "normalSugSearchUl");
        for (var n = cc11001100_hook("n", t.bds && t.bds.util && t.bds.util.domain ? t.bds.util.domain.get("http://sclick.baidu.com") : "http://sclick.baidu.com", "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length; i++) {
          var o = cc11001100_hook("o", document.createElement("LI"), "var-init");
          if (e[i].isDouble && $(o).css("line-height", "normal"), o.innerHTML = cc11001100_hook("o.innerHTML", e[i].html, "assign"), e[i].zxtype && e[i].zxurl) {
            var u = cc11001100_hook("u", e[i].value, "var-init"),
              l = cc11001100_hook("l", e[i].zxtype, "var-init"),
              d = cc11001100_hook("d", e[i].zxurl, "var-init"),
              g = cc11001100_hook("g", t.zhixindata[u] && t.zhixindata[u].responseJSON && 0 === t.zhixindata[u].responseJSON.status && t.zhixindata[u].responseJSON.data && t.zhixindata[u].responseJSON.data.length > 0, "var-init");
            g || (t.zhixindata[u] = cc11001100_hook("t.zhixindata[u]", $.ajax({
              dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
              async: cc11001100_hook("async", !0, "object-key-init"),
              url: cc11001100_hook("url", d, "object-key-init"),
              jsonp: cc11001100_hook("jsonp", "cb", "object-key-init")
            }), "assign")), $(o).addClass("bdsug-zx").on("focused", function () {
              var e = cc11001100_hook("e", $(this).data("key"), "var-init"),
                s = cc11001100_hook("s", t.zhixindata[e] && t.zhixindata[e].responseJSON && 0 === t.zhixindata[e].responseJSON.status && t.zhixindata[e].responseJSON.data && t.zhixindata[e].responseJSON.data.length > 0, "var-init"),
                a = cc11001100_hook("a", $(t.sugcontainer).find(".bdsug-box")[0], "var-init");
              if (s && a && t.bds.se.sugzx && t.bds.se.sugzx[l]) {
                var r = cc11001100_hook("r", t.bds.se.sugzx[l](t.zhixindata[e].responseJSON.data, e, t.outInterface(), t), "var-init");
                r instanceof jQuery && ($(t.sugcontainer).addClass("bdsug-showzx"), $(a).empty().append(r), $(t.sugcontainer).height() < $(t.sugcontainer).find(".bdsug-box").height() && $(t.sugcontainer).css({
                  height: cc11001100_hook("height", $(t.sugcontainer).find(".bdsug-box").height(), "object-key-init")
                }));
              }
            }).on("blured", function () {
              $(t.sugcontainer).removeClass("bdsug-showzx"), $(t.sugcontainer).css({
                height: cc11001100_hook("height", "auto", "object-key-init")
              });
            });
          }
          t.setSug(o, e[i].value, e[i].type), r.appendChild(o);
        }
        t.form ? $(t.sugcontainer).insertBefore(t.form.firstChild) : $(t.ipt).after(t.sugcontainer);
        var m = cc11001100_hook("m", document.createElement("div"), "var-init");
        m.appendChild(r), t.sugcontainer.innerHTML = cc11001100_hook("t.sugcontainer.innerHTML", m && m.innerHTML, "assign"), $(t.sugcontainer).removeClass("bdsug-showzx"), $(t.sugcontainer).css({
          height: cc11001100_hook("height", "auto", "object-key-init")
        });
        var h = cc11001100_hook("h", $(t.sugcontainer).find("ul li"), "var-init");
        t.withoutZhixin || ($(t.sugcontainer).addClass("bdsug-showarrow"), $(t.sugcontainer).append($('<div class="bdsug-box"></div>')), $(t.form).find(".bdsug-tmp").length || $(t.form).append($('<div class="bdsug-tmp"></div>')), $(t.sugcontainer).find(".bdsug-box").on("mouseenter", function () {
          $(t.sugcontainer).addClass("bdsug-showzx"), $(h[t.index]).addClass("bdsug-s");
        }).on("mouseleave", function () {
          $(t.sugcontainer).removeClass("bdsug-showzx"), $(h[t.index]).removeClass("bdsug-s"), $(t.sugcontainer).css({
            height: cc11001100_hook("height", "auto", "object-key-init")
          });
        }).on("click", function (e) {
          e.stopPropagation();
        })), $(t.form).find(".bdsug-tmp").empty();
        var p = cc11001100_hook("p", $("<li>").appendTo($("<div>").addClass("bdsug-showzx").appendTo($(t.form).find(".bdsug-tmp"))), "var-init"),
          v = cc11001100_hook("v", $("<div>").css({
            position: cc11001100_hook("position", "absolute", "object-key-init"),
            display: cc11001100_hook("display", "inline-block", "object-key-init"),
            top: cc11001100_hook("top", "-10000px", "object-key-init"),
            left: cc11001100_hook("left", "-10000px", "object-key-init")
          }).appendTo($(t.form).find(".bdsug-tmp")), "var-init");
        $.each(h, function (e, s) {
          v.html($(s).html());
          var a = cc11001100_hook("a", 28, "var-init");
          v.width() > p.width() - $(t.sugcontainer).find(".bdsug-arrow").width() - a && $(s).addClass("bdsug-overflow c-line-clamp1");
        });
        var f = cc11001100_hook("f", "0", "var-init");
        if (0 === t.bds.comm.ishome ? f = cc11001100_hook("f", "0", "assign") : 1 === t.bds.comm.ishome && window.s_domain && "home" === window.s_domain.base ? f = cc11001100_hook("f", "2", "assign") : 1 === t.bds.comm.ishome && (f = cc11001100_hook("f", "1", "assign")), "" === t.value && e.length) {
          for (var S = cc11001100_hook("S", 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length; i++) e[i].type && "store" === e[i].type && S++;
          if (ns_c({
            pj_name: cc11001100_hook("pj_name", "es_sug", "object-key-init"),
            es_sug_hot: cc11001100_hook("es_sug_hot", t.dataHot.length, "object-key-init"),
            es_sug_num: cc11001100_hook("es_sug_num", e.length, "object-key-init"),
            eb_sug_num: cc11001100_hook("eb_sug_num", e.length - S, "object-key-init"),
            es_sug_bp: cc11001100_hook("es_sug_bp", f + "_" + (t.bds.comm.supportis ? 1 : 0), "object-key-init")
          }), $(".bdsug-feedback-wrap").length > 0 && $(".bdsug-feedback-wrap").remove(), t.dataStored.length && t.dataStored.length > 3 || t.dataHot.length && t.dataHot.length > 3) {
            var s = cc11001100_hook("s", t.searchNewStyle, "var-init"),
              b = cc11001100_hook("b", s ? 15 : 12, "var-init"),
              _ = cc11001100_hook("_", s ? 0 : -5, "var-init"),
              y = cc11001100_hook("y", s ? "margin-bottom: 1px;" : "", "var-init"),
              w = cc11001100_hook("w", "", "var-init"),
              k = cc11001100_hook("k", '<span class="setup_storeSug" style="margin-right:' + b + 'px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">关闭历史</span>', "var-init");
            t.hisSwitch === !1 && (k = cc11001100_hook("k", "", "assign")), t.bds.comm.username ? (w = cc11001100_hook("w", '<div style="text-align:right; background:none; height: 25px; line-height: 15px; border-radius: 0 0 10px 10px;padding-bottom: 2px;margin-top: ' + _ + "px;" + y + '">' + k + '<span class="del_all_storeSug" style="margin-right:' + b + 'px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">删除历史</span><a class="more_storeSug" href="http://i.baidu.com/my/history?from=pssug"target="_blank" style="color:#666; text-decoration:none;margin-right:' + b + 'px; font-size: 13px; color: #9195a3">更多历史</a></div>', "assign"), $(t.sugcontainer).append(w)) : (w = cc11001100_hook("w", '<div style="text-align:right; background:none; height: 25px; line-height: 15px; border-radius: 0 0 10px 10px;padding-bottom: 2px;margin-top: ' + _ + "px;" + y + '"><span class="setup_storeSug" style="margin-right:' + b + 'px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">关闭历史</span></div>', "assign"), $(t.sugcontainer).append(w)), $(t.sugcontainer).find(".del_all_storeSug").click(function () {
              if (t.isSugSample && c({
                rsv_ct: cc11001100_hook("rsv_ct", 10, "object-key-init"),
                rsv_cst: cc11001100_hook("rsv_cst", 12, "object-key-init")
              }), t.dataStored[0] && t.dataStored[0].pinyin && "|" === t.dataStored[0].pinyin) {
                var e = cc11001100_hook("e", "https://www.baidu.com/recsys/hisproxy/data/usrclear", "var-init");
                $.ajax({
                  type: cc11001100_hook("type", "POST", "object-key-init"),
                  dataType: cc11001100_hook("dataType", "json", "object-key-init"),
                  scriptCharset: cc11001100_hook("scriptCharset", "utf-8", "object-key-init"),
                  timeout: cc11001100_hook("timeout", 6e3, "object-key-init"),
                  url: cc11001100_hook("url", e, "object-key-init"),
                  xhrFields: {
                    withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
                  },
                  crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
                  success: function () {}
                });
              }
              t.storearr = cc11001100_hook("t.storearr", [], "assign"), t.setStore(), t.hideSug();
              var s = cc11001100_hook("s", window["BD_PS_C" + new Date().getTime()] = cc11001100_hook("window[\"BD_PS_C\" + new Date().getTime()]", new Image(), "assign"), "var-init");
              s.src = cc11001100_hook("s.src", n + "/w.gif?q=delall&fm=beha&rsv_sug=delall&rsv_sid=" + t.bds.comm.sid + "&t=" + new Date().getTime() + "&rsv_sug9=es_" + f + "_" + (t.bds.comm.supportis ? 1 : 0) + "&path=http://www.baidu.com", "assign");
            }), $(t.sugcontainer).find(".more_storeSug").click(function () {
              ns_c({
                pj_name: cc11001100_hook("pj_name", "hs_sug_more", "object-key-init")
              });
            }), $(t.sugcontainer).find(".close_hotSug").click(function () {
              t.hideSug(), ns_c({
                pj_name: cc11001100_hook("pj_name", "hot_sug_close", "object-key-init")
              });
            }), $(t.sugcontainer).find(".setup_storeSug").click(function () {
              t.bds.event.trigger("bd.se.loadpanel", {
                tab: cc11001100_hook("tab", "general", "object-key-init"),
                tipsConfig: {
                  content: cc11001100_hook("content", t.bds && t.bds.comm && t.bds.comm.username ? "关闭该账号下所有设备的搜索历史" : "该选项可以关闭您的历史记录", "object-key-init"),
                  wrapper: cc11001100_hook("wrapper", "#se-setting-5", "object-key-init")
                }
              }), t.hideSug(), ns_c({
                pj_name: cc11001100_hook("pj_name", "hs_sug_setup", "object-key-init")
              });
            });
          }
        }
        $.each(h, function (s, a) {
          e[s] && "store" === e[s].type && $(a).find("u").click(function (s) {
            if (s.stopPropagation(), $(a).remove(), t.bds && t.bds.comm && t.bds.comm.username) {
              var r = cc11001100_hook("r", $(this).parent().attr("data-key"), "var-init");
              t.requestDelHis(r);
            }
            if (e[index].pinyin && "|" === e[index].pinyin) {
              t.dataCached = cc11001100_hook("t.dataCached", {}, "assign");
              var i = cc11001100_hook("i", !1, "var-init");
              $.each(t.storearr, function (e) {
                encodeURIComponent(t.dataArray[index].value) === t.storearr[e].q && (i = cc11001100_hook("i", e, "assign"));
              }), i !== !1 && (t.storearr.splice(i, 1), t.setStore());
            } else {
              var i = cc11001100_hook("i", !1, "var-init");
              $.each(t.storearr, function (e) {
                t.dataArray[index].pinyin === decodeURIComponent(t.storearr[e].p) && (i = cc11001100_hook("i", e, "assign"));
              }), i !== !1 && (t.storearr.splice(i, 1), t.setStore());
            }
            var o = cc11001100_hook("o", window["BD_PS_C" + new Date().getTime()] = cc11001100_hook("window[\"BD_PS_C\" + new Date().getTime()]", new Image(), "assign"), "var-init");
            o.src = cc11001100_hook("o.src", n + "/w.gif?q=" + encodeURIComponent(e[index].value) + "&fm=beha&rsv_sug=del&rsv_sid=" + t.bds.comm.sid + "&t=" + new Date().getTime() + ("" === t.value ? "&rsv_sug9=es_" + f + "_" + (t.bds.comm.supportis ? 1 : 0) : "") + "&path=http://www.baidu.com", "assign");
          });
        });
        var x = cc11001100_hook("x", !!window.ActiveXObject && (!document.documentMode || document.documentMode <= 9), "var-init");
        x || (0 !== $(".bdsug-feedback-wrap").length && $(".bdsug-feedback-wrap").remove(), "" !== t.value && t.useFeedback !== !1 && ($(t.sugcontainer).append('<div class="bdsug-feedback-wrap"><span class="bdsug-feedback">反馈</span></div>'), $(".bdsug-feedback-wrap").on("click", function () {
          var e = cc11001100_hook("e", t.dataArray, "var-init");
          t.dataArray.forEach(function (t, s) {
            e[s] = cc11001100_hook("e[s]", t.value, "assign");
          }), t.isSugSample && c({
            rsv_ct: cc11001100_hook("rsv_ct", 10, "object-key-init"),
            rsv_cst: cc11001100_hook("rsv_cst", 13, "object-key-init")
          });
          var s = cc11001100_hook("s", t.requestDefaultData.g_mot || [], "var-init");
          ("search_sug_2" === t.currentSugSample || "search_sug_5" === t.currentSugSample || t.isSugSample3 && 0 === t.currentSearchStatus) && s.length >= 3 && s.forEach(function (t) {
            e.push(t.q);
          }), t.bds.se.ShortCut.initSugBar(e), t.hideSug();
        }))), $(t.ipt).trigger("render", [t]), t.renderCallback(), t.showSug(), $(t.ipt).trigger("showSug", [t]);
        var C = cc11001100_hook("C", ["search_sug_2", "search_sug_3-1", "search_sug_3-2", "search_sug_4-1", "search_sug_4-2", "search_sug_5"], "var-init");
        -1 !== C.indexOf(t.currentSugSample) && t.showRightContent && (t.backFrame || "search_sug_5" === t.currentSugSample && t.backDelete) ? $(".wrapper_new #form .bdsug-new").addClass("search-sug-short") : $(".wrapper_new #form .bdsug-new").removeClass("search-sug-short");
      } else t.renderCallback(), t.hideSug();
    },
    renderSugContainer: function () {
      var e = cc11001100_hook("e", this, "var-init");
      if (!e.sugcontainer) {
        e.sugcontainer = cc11001100_hook("e.sugcontainer", document.createElement("DIV"), "assign");
        var t = cc11001100_hook("t", e.searchNewStyle, "var-init");
        e.sugcontainer.className = cc11001100_hook("e.sugcontainer.className", t ? "sam-bdsug bdsug bdsug-new new-pmd bdsug-sample3" : "bdsug bdsug-new new-pmd bdsug-sample3", "assign");
      }
      e.form ? $(e.sugcontainer).insertBefore(e.form.firstChild) : $(e.ipt).after(e.sugcontainer);
    },
    escapeHTML: function (e) {
      return e = cc11001100_hook("e", e.replace(/&/g, "&amp;"), "assign"), e = cc11001100_hook("e", e.replace(/</g, "&lt;"), "assign"), e = cc11001100_hook("e", e.replace(/>/g, "&gt;"), "assign");
    },
    renderSearchHistory: function (e, t, s) {
      var a = cc11001100_hook("a", this, "var-init");
      if (a.renderSugContainer(), e && e.length > 0 && a.dataArray.length > 0) {
        var r = cc11001100_hook("r", e || [], "var-init");
        $("#sugSearchHisUl")[0] && $("#sugSearchHisUl")[0].remove(), $("#rightSugSearchHisUl")[0] && $("#rightSugSearchHisUl")[0].remove(), a.isSugSample3 && ($("#normalSugSearchUl")[0] && $("#normalSugSearchUl")[0].remove(), $(".bdsug-feedback-wrap")[0] && $(".bdsug-feedback-wrap")[0].remove());
        var n = cc11001100_hook("n", document.createElement("ul"), "var-init");
        a.sugcontainer.appendChild(n);
        var i = cc11001100_hook("i", "search_sug_4-1" === a.currentSugSample || "search_sug_4-2" === a.currentSugSample, "var-init"),
          o = cc11001100_hook("o", i ? "rightSugSearchHisUl" : "sugSearchHisUl", "var-init");
        n.setAttribute("id", o);
        var u = cc11001100_hook("u", "#" + o, "var-init");
        if (i && t) {
          u = cc11001100_hook("u", "#rightSugSearchHisUl", "assign");
          var l = cc11001100_hook("l", document.createElement("div"), "var-init");
          l.setAttribute("class", "search-history-title"), l.innerHTML = cc11001100_hook("l.innerHTML", a.escapeHTML(t), "assign"), $(u)[0] && $(u)[0].append(l);
        }
        var d = cc11001100_hook("d", '<u class="bdsug-store-del bdsug-store-del-cloud" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>', "var-init");
        "0" === bds.comm.isUserLogin && (d = cc11001100_hook("d", "", "assign"));
        for (var g = cc11001100_hook("g", 0, "var-init"); g < r.slice(0, 10).length; g++) {
          var m = cc11001100_hook("m", document.createElement("li"), "var-init");
          m.setAttribute("class", "c-line-clamp1"), m.innerHTML = cc11001100_hook("m.innerHTML", '<i class="c-icon sug-history-icon">&#xe6a8;</i>' + a.escapeHTML(r[g].q) + d, "assign"), a.setSug(m, r[g].q, r[g].type), $(a.sugcontainer).delegate("li", "mouseover", function () {
            $(this).addClass("bdsug-s");
          }).delegate("li", "mouseout", function () {
            $(this).removeClass("bdsug-s");
          }).delegate("li", "click", function () {
            a.startCircle();
            var e = cc11001100_hook("e", $(this).data("key"), "var-init");
            a.sugValue = cc11001100_hook("a.sugValue", a.showValue = cc11001100_hook("a.showValue", a.value = cc11001100_hook("a.value", a.ipt.value = cc11001100_hook("a.ipt.value", e, "assign"), "assign"), "assign"), "assign"), a.index = cc11001100_hook("a.index", $(a.sugcontainer).find("li").index($(this)), "assign"), a.ipt.value ? a.quickdelete._show() : a.quickdelete._hide(), a.hideSug(), a.formSubmit();
          }), n.appendChild(m);
        }
        if (i) {
          var h = cc11001100_hook("h", $("#rightSugSearchHisUl").height(), "var-init"),
            p = cc11001100_hook("p", $("#normalSugSearchUl").height(), "var-init");
          $("#normalSugSearchUl").height(h > p ? h : p);
        }
        $(u + " li").each(function (e) {
          var t = cc11001100_hook("t", a.backFrame, "var-init");
          $(this).click(function () {
            c({
              rsv_ct: cc11001100_hook("rsv_ct", 10, "object-key-init"),
              rsv_cst: cc11001100_hook("rsv_cst", 6, "object-key-init"),
              rsv_clk_extra: cc11001100_hook("rsv_clk_extra", JSON.stringify({
                pos: cc11001100_hook("pos", s, "object-key-init"),
                index: cc11001100_hook("index", e, "object-key-init"),
                status: cc11001100_hook("status", a.currentSearchStatus, "object-key-init"),
                test: cc11001100_hook("test", a.currentSugSample, "object-key-init"),
                backFrame: cc11001100_hook("backFrame", t, "object-key-init")
              }), "object-key-init")
            });
          });
        }), $(u + " li u").each(function (e, t) {
          $(t).on("click", function (e) {
            e.stopPropagation(), 1 === $(u + " li").length && ($(".search-history-title")[0] && $(".search-history-title")[0].remove(), ("search_sug_3-1" === a.currentSugSample || "search_sug_3-2" === a.currentSugSample) && a.setLeftGussStyle());
            var t = cc11001100_hook("t", $(this).parent().attr("data-key"), "var-init"),
              s = cc11001100_hook("s", [], "var-init");
            try {
              var r = cc11001100_hook("r", localStorage.getItem("BDSUGSTORED"), "var-init");
              s = cc11001100_hook("s", JSON.parse(r), "assign");
            } catch (n) {
              console.error(n);
            }
            s = cc11001100_hook("s", s.filter(function (e) {
              return decodeURIComponent(e.q) !== t;
            }), "assign");
            try {
              localStorage.setItem("BDSUGSTORED", JSON.stringify(s));
            } catch (n) {
              console.error(n);
            }
            a.requestDelHis(t), $(this.parentNode).remove(), 0 === $("#rightSugSearchHisUl li").length && ($("#normalSugSearchUl").width("auto"), $("#normalSugSearchUl li").width("auto"));
          });
        }), a.renderCallback(), a.showSug();
      }
    },
    requestDelHis: function (e) {
      var t = cc11001100_hook("t", "https://www.baidu.com/recsys/hisproxy/data/usrdelete", "var-init");
      $.ajax({
        type: cc11001100_hook("type", "POST", "object-key-init"),
        scriptCharset: cc11001100_hook("scriptCharset", "utf-8", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        timeout: cc11001100_hook("timeout", 6e3, "object-key-init"),
        url: cc11001100_hook("url", t, "object-key-init"),
        data: {
          items: cc11001100_hook("items", JSON.stringify([{
            query: cc11001100_hook("query", e, "object-key-init"),
            ts: cc11001100_hook("ts", "", "object-key-init")
          }]), "object-key-init")
        },
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        success: function () {}
      });
    },
    setLeftGussStyle: function () {
      $("#sugSearchGuessUl").attr("id", "leftSugSearchHisUl"), $("bdsug bdsug-new new-pmd").css("overflow", "hidden"), $(".wrapper_new #form .bdsug-new").css("overflow", "hidden");
    },
    renderRecomend: function (e, t, s) {
      var a = cc11001100_hook("a", this, "var-init");
      a.renderSugContainer();
      var r = cc11001100_hook("r", e || [], "var-init");
      if ($("#sugSearchGuessUl")[0] && $("#sugSearchGuessUl")[0].remove(), $("#leftSugSearchHisUl")[0] && $("#leftSugSearchHisUl")[0].remove(), r.length >= 3) {
        var n = cc11001100_hook("n", document.createElement("ul"), "var-init"),
          i = cc11001100_hook("i", a.requestDefaultData.g_mot, "var-init");
        i && 0 === i.length ? (n.setAttribute("id", "leftSugSearchHisUl"), a.setLeftGussStyle()) : n.setAttribute("id", "sugSearchGuessUl"), a.sugcontainer.appendChild(n);
        var o = cc11001100_hook("o", document.createElement("div"), "var-init");
        o.setAttribute("class", "search-recommend-title"), o.innerHTML = cc11001100_hook("o.innerHTML", a.escapeHTML(t), "assign"), $("#sugSearchGuessUl")[0] && $("#sugSearchGuessUl")[0].append(o);
        for (var u = cc11001100_hook("u", 0, "var-init"); u < r.slice(0, 7).length; u++) {
          var l = cc11001100_hook("l", document.createElement("li"), "var-init");
          l.setAttribute("class", "c-line-clamp1"), l.innerHTML = cc11001100_hook("l.innerHTML", '<i class="c-icon sug-search-icon">&#xe6a7;</i>' + a.escapeHTML(r[u].q), "assign"), a.setSug(l, r[u].q, r[u].type), $(a.sugcontainer).delegate("li", "mouseenter", function () {
            $(this).addClass("bdsug-s");
          }).delegate("li", "mouseleave", function () {
            $(this).removeClass("bdsug-s");
          }).delegate("li", "click", function () {
            a.startCircle();
            var e = cc11001100_hook("e", $(this).data("key"), "var-init");
            a.sugValue = cc11001100_hook("a.sugValue", a.showValue = cc11001100_hook("a.showValue", a.value = cc11001100_hook("a.value", a.ipt.value = cc11001100_hook("a.ipt.value", e, "assign"), "assign"), "assign"), "assign"), a.index = cc11001100_hook("a.index", $(a.sugcontainer).find("li").index($(this)), "assign"), a.ipt.value ? a.quickdelete._show() : a.quickdelete._hide(), a.hideSug(), a.formSubmit();
          }), n.appendChild(l);
        }
        var d = cc11001100_hook("d", $($("#sugSearchGuessUl li").length ? "#sugSearchGuessUl li" : "#leftSugSearchHisUl li"), "var-init");
        d.each(function (e) {
          var t = cc11001100_hook("t", a.backFrame ? 1 : 0, "var-init");
          $(this).click(function () {
            c({
              rsv_ct: cc11001100_hook("rsv_ct", 10, "object-key-init"),
              rsv_cst: cc11001100_hook("rsv_cst", 3, "object-key-init"),
              rsv_clk_extra: cc11001100_hook("rsv_clk_extra", JSON.stringify({
                index: cc11001100_hook("index", e, "object-key-init"),
                pos: cc11001100_hook("pos", s, "object-key-init"),
                status: cc11001100_hook("status", a.currentSearchStatus, "object-key-init"),
                test: cc11001100_hook("test", a.currentSugSample, "object-key-init"),
                backFrame: cc11001100_hook("backFrame", t, "object-key-init")
              }), "object-key-init")
            });
          });
        });
        var g = cc11001100_hook("g", $("#sugSearchGuessUl").height(), "var-init"),
          m = cc11001100_hook("m", $("#normalSugSearchUl").height(), "var-init");
        $("#normalSugSearchUl").height(g > m ? g : m), a.renderCallback(), a.showSug();
      }
    },
    renderBottomContent: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        e = cc11001100_hook("e", t.requestDefaultData, "var-init");
      $(".search-sug-bottom-tools")[0] && $(".search-sug-bottom-tools")[0].remove();
      var s = cc11001100_hook("s", '<span class="setup_storeSug">关闭历史</span>', "var-init"),
        a = cc11001100_hook("a", '<span class="del_storeSug">删除历史</span><a class="more_storeSug" href="http://i.baidu.com/my/history?from=pssug"target="_blank" class="more_storeSug">更多历史</a>', "var-init"),
        r = cc11001100_hook("r", '<span class="bdsug-feedback">反馈</span>', "var-init");
      if ((e.g && e.g.length < 4 || !t.showsugstore) && (s = cc11001100_hook("s", "", "assign"), a = cc11001100_hook("a", "", "assign")), +bds.comm.isUserLogin || (a = cc11001100_hook("a", "", "assign")), !t.showsugstore) {
        $("#sugSearchGuessUl").attr("id", "leftSugSearchHisUl");
        var n = cc11001100_hook("n", $("#sugSearchHisUl").height(), "var-init");
        $("#sugSearchHisUl li").each(function () {
          this.remove();
        }), $("#leftSugSearchHisUl .search-recommend-title").css("margin", 0), $("#sugSearchHisUl").height(n + 28);
      }
      e.g_mot && e.g_mot.length < 3 && (r = cc11001100_hook("r", "", "assign"));
      var i = cc11001100_hook("i", $("#sugSearchGuessUl").height(), "var-init");
      if (0 === t.currentSearchStatus) {
        var o = cc11001100_hook("o", $("#normalSugSearchUl").height(), "var-init");
        $("#normalSugSearchUl").height(o > i ? o : i);
      } else if (1 === t.currentSearchStatus) {
        var u = cc11001100_hook("u", t.isSugSample3 && !t.showsugstore ? $("#leftSugSearchHisUl").height() : $("#sugSearchHisUl").height(), "var-init");
        t.isSugSample3 && !t.showsugstore && (i = cc11001100_hook("i", $("#sugSearchHisUl").height(), "assign")), $("#sugSearchHisUl").height(u > i ? u : i);
      }
      var l = cc11001100_hook("l", '<div class="search-sug-bottom-tools">' + s + a + r + "</div>", "var-init");
      $(t.sugcontainer).append(l), $(t.sugcontainer).find(".del_storeSug").click(function () {
        if (c({
          rsv_ct: cc11001100_hook("rsv_ct", 10, "object-key-init"),
          rsv_cst: cc11001100_hook("rsv_cst", 12, "object-key-init")
        }), t.aa = cc11001100_hook("t.aa", !0, "assign"), t.dataStored[0] && t.dataStored[0].pinyin && "|" === t.dataStored[0].pinyin) {
          var e = cc11001100_hook("e", "https://www.baidu.com/recsys/hisproxy/data/usrclear", "var-init");
          $.ajax({
            type: cc11001100_hook("type", "POST", "object-key-init"),
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            scriptCharset: cc11001100_hook("scriptCharset", "utf-8", "object-key-init"),
            timeout: cc11001100_hook("timeout", 6e3, "object-key-init"),
            url: cc11001100_hook("url", e, "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
            success: function () {}
          });
        }
        t.storearr = cc11001100_hook("t.storearr", [], "assign");
        try {
          localStorage.setItem("BDSUGSTORED", "");
        } catch (s) {
          console.error(s);
        }
        t.showSug(), $("#sugSearchHisUl li").each(function () {
          $(this).remove();
        }), $("#sugSearchGuessUl").attr("id", "leftSugSearchHisUl");
        var a = cc11001100_hook("a", "0", "var-init");
        0 === t.bds.comm.ishome ? a = cc11001100_hook("a", "0", "assign") : 1 === t.bds.comm.ishome && window.s_domain && "home" === window.s_domain.base ? a = cc11001100_hook("a", "2", "assign") : 1 === t.bds.comm.ishome && (a = cc11001100_hook("a", "1", "assign"));
        var r = cc11001100_hook("r", window["BD_PS_C" + new Date().getTime()] = cc11001100_hook("window[\"BD_PS_C\" + new Date().getTime()]", new Image(), "assign"), "var-init"),
          n = cc11001100_hook("n", t.bds && t.bds.util && t.bds.util.domain ? t.bds.util.domain.get("http://sclick.baidu.com") : "http://sclick.baidu.com", "var-init");
        r.src = cc11001100_hook("r.src", n + "/w.gif?q=delall&fm=beha&rsv_sug=delall&rsv_sid=" + t.bds.comm.sid + "&t=" + new Date().getTime() + "&rsv_sug9=es_" + a + "_" + (t.bds.comm.supportis ? 1 : 0) + "&path=http://www.baidu.com", "assign");
      }), $(t.sugcontainer).find(".more_storeSug").click(function () {
        ns_c({
          pj_name: cc11001100_hook("pj_name", "hs_sug_more", "object-key-init")
        });
      }), $(t.sugcontainer).find(".close_hotSug").click(function () {
        t.hideSug(), ns_c({
          pj_name: cc11001100_hook("pj_name", "hot_sug_close", "object-key-init")
        });
      }), $(t.sugcontainer).find(".setup_storeSug").click(function () {
        t.bds.event.trigger("bd.se.loadpanel", {
          tab: cc11001100_hook("tab", "general", "object-key-init"),
          tipsConfig: {
            content: cc11001100_hook("content", t.bds && t.bds.comm && t.bds.comm.username ? "关闭该账号下所有设备的搜索历史" : "该选项可以关闭您的历史记录", "object-key-init"),
            wrapper: cc11001100_hook("wrapper", "#se-setting-5", "object-key-init")
          }
        }), t.hideSug(), ns_c({
          pj_name: cc11001100_hook("pj_name", "hs_sug_setup", "object-key-init")
        });
      }), $(".bdsug-feedback").on("click", function () {
        c({
          rsv_ct: cc11001100_hook("rsv_ct", 10, "object-key-init"),
          rsv_cst: cc11001100_hook("rsv_cst", 13, "object-key-init")
        });
        var s = cc11001100_hook("s", [], "var-init"),
          a = cc11001100_hook("a", e.g_mot && e.g_mot.length && e.g_mot, "var-init");
        a.forEach(function (e) {
          s.push(e.q);
        }), t.bds.se.ShortCut.initSugBar(s), t.hideSug();
      });
    },
    setAutocomplete: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      $(t.ipt).attr("autocomplete", e);
    },
    setSug: function (e, t, s) {
      $(e).attr("data-key", t), s && $(e).addClass("bdsug-" + s);
    },
    clickIpt: function () {
      var e = cc11001100_hook("e", this, "var-init");
      e.bds.comm.query && e.ipt.value && e.bds.comm.query === e.ipt.value ? (e.request(e.ipt.value, "2"), e.backFrame = cc11001100_hook("e.backFrame", !0, "assign")) : (e.request(e.ipt.value), e.backFrame = cc11001100_hook("e.backFrame", !1, "assign"));
    },
    showSug: function () {
      var e = cc11001100_hook("e", this, "var-init");
      e.index = cc11001100_hook("e.index", -1, "assign"), (e.ipt.value === e.reqValue || e.isSugSample3 && 1 === e.currentSearchStatus) && (e.bds.comm.ishome ? $(e.ipt).addClass("new-ipt-focus") : $(".s_ipt_wr").addClass("new-ipt-focus"), $(e.sugcontainer).show()), e.visible = cc11001100_hook("e.visible", !0, "assign"), e.rsv_sug1++, e.addStat("rsv_sug1", e.rsv_sug1), e.addStat("rsv_sug7", e.rsv_sug7.join(""));
    },
    hideSug: function () {
      var e = cc11001100_hook("e", this, "var-init");
      e.is_selecting = cc11001100_hook("e.is_selecting", !1, "assign"), $(e.ipt).trigger("hide", [e]), $(e.ipt).removeClass("new-ipt-focus"), $(".s_ipt_wr").removeClass("new-ipt-focus"), $(e.sugcontainer).hide(), e.visible = cc11001100_hook("e.visible", !1, "assign"), e.jqXhr && e.jqXhr.abort(), e.jqXhr = cc11001100_hook("e.jqXhr", null, "assign");
    },
    selectSug: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        s = cc11001100_hook("s", $(t.sugcontainer).find("li"), "var-init");
      if (t.blurSug(s), t.directSugSelected = cc11001100_hook("t.directSugSelected", -1 !== e && s.eq(e).hasClass("bdsug-direct"), "assign"), -1 !== e) {
        t.is_selecting = cc11001100_hook("t.is_selecting", !0, "assign");
        var a = cc11001100_hook("a", $($(s)[e]).data("key"), "var-init");
        t.focusSug(s[e], a), t.sugValue = cc11001100_hook("t.sugValue", t.showValue = cc11001100_hook("t.showValue", t.value = cc11001100_hook("t.value", t.ipt.value = cc11001100_hook("t.ipt.value", a, "assign"), "assign"), "assign"), "assign"), t.addStat("sug", a), t.bds && t.bds.comm && 0 === t.bds.comm.ishome && t.addStat("oq", t.bds.comm.confirmQuery ? xss(t.bds.comm.confirmQuery) : ""), t.bds && t.bds.comm && t.bds.comm.confirmQid && t.addStat("rsv_pq", t.bds.comm.confirmQid), t.addStat("rsv_n", 1);
      } else t.is_selecting = cc11001100_hook("t.is_selecting", !1, "assign"), t.selectCallback(t.inputValue), t.showValue = cc11001100_hook("t.showValue", t.value = cc11001100_hook("t.value", t.ipt.value = cc11001100_hook("t.ipt.value", t.inputValue, "assign"), "assign"), "assign"), t.sugValue = cc11001100_hook("t.sugValue", "", "assign"), t.removeStat("sug"), t.removeStat("rsv_n");
      t.stopRefresh = cc11001100_hook("t.stopRefresh", t.inputValue || 1 !== t.bds.comm.ishome ? !1 : !0, "assign"), $(t.ipt).trigger("selectSug", [t, e, a]);
    },
    blurSug: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      t.backFrame = cc11001100_hook("t.backFrame", !1, "assign"), $(e).removeClass("bdsug-s"), $(e).trigger("blured");
    },
    focusSug: function (e, t) {
      var s = cc11001100_hook("s", this, "var-init");
      $(e).addClass("bdsug-s"), $(e).trigger("focused"), s.selectCallback(t);
    },
    pressUp: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        e = cc11001100_hook("e", $(t.sugcontainer).find("li").length, "var-init");
      t.index--, t.index < -1 && (t.index = cc11001100_hook("t.index", e - 1, "assign")), t.selectSug(t.index);
    },
    pressDown: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        e = cc11001100_hook("e", $(t.sugcontainer).find("li").length, "var-init");
      t.index++, t.index >= e && (t.index = cc11001100_hook("t.index", -1, "assign")), t.selectSug(t.index);
    },
    addStat: function (e, t) {
      t = cc11001100_hook("t", encodeURIComponent(t), "assign");
      var s = cc11001100_hook("s", this, "var-init");
      if (s.stat || (s.stat = cc11001100_hook("s.stat", {}, "assign")), s.stat[e] = cc11001100_hook("s.stat[e]", t, "assign"), !s.withoutStat) {
        var a = cc11001100_hook("a", $(s.form).find('input[type="hidden"][name="' + e + '"]'), "var-init");
        a.length ? $(a).val(t) : $(s.form).append('<input type="hidden" name="' + e + '" value="' + t + '"/>');
      }
    },
    removeStat: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      if (!t.withoutStat && ($(t.form).find('input[type="hidden"][name="' + e + '"]').remove(), !t.stat)) try {
        delete t.stat[e];
      } catch (s) {}
    },
    setNewsRsv: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      "sug" === e ? t.addStat("rsv_dl", "news_t_sug") : "box" === e ? t.addStat("rsv_dl", "news_t_sk") : "his" === e && t.addStat("rsv_dl", "news_t_his");
    },
    clearStat: function () {
      var e = cc11001100_hook("e", this, "var-init");
      e.bds && e.bds.comm && e.bds.comm.isAsync && (e.removeStat("rsp"), e.removeStat("prefixsug"), 1 === e.bds.comm.ishome ? e.addStat("rsv_dl", "ib") : "news" === e.tn ? e.setNewsRsv("box") : e.addStat("rsv_dl", "tb")), e.rsv_sug7 = cc11001100_hook("e.rsv_sug7", [0, 0, 0], "assign"), e.removeStat("rsv_n"), e.removeStat("rsv_sug"), e.removeStat("rsv_sug1"), e.removeStat("rsv_sug2"), e.removeStat("rsv_sug3"), e.removeStat("rsv_sug4"), e.removeStat("rsv_sug5"), e.removeStat("rsv_sug6"), e.removeStat("rsv_sug7"), e.removeStat("rsv_sug8"), e.removeStat("rsv_sug9"), e.stat = cc11001100_hook("e.stat", {}, "assign");
    },
    getRsvStatus: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        s = cc11001100_hook("s", [], "var-init"),
        a = cc11001100_hook("a", [-2], "var-init");
      if (t.rsv_sug) {
        a = cc11001100_hook("a", [-1], "assign");
        for (var r in t.dataArray) e === t.dataArray[r].value && (a = cc11001100_hook("a", [0, r], "assign"), r < t.rsv_sug && (a = cc11001100_hook("a", [1, r], "assign")));
        for (var r = cc11001100_hook("r", 0, "var-init"); r < t.rsv_sug && t.dataArray[r]; r++) s.push(t.dataArray[r].value.length, t.dataArray[r].s);
        a.push(t.index, t.rsv_sug, s.join("."));
      }
      return a.join("_");
    },
    formSubmit: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        s = cc11001100_hook("s", !0, "var-init"),
        a = cc11001100_hook("a", t.bds && t.bds.comm && 1 === t.bds.comm.ishome ? "i" : "t", "var-init"),
        r = cc11001100_hook("r", "t", "var-init");
      if ("/" === window.location.pathname && (r = cc11001100_hook("r", "i", "assign")), $($(t.sugcontainer).find("li")[t.index]).children("a").length) {
        var n = cc11001100_hook("n", $($(t.sugcontainer).find("li")[t.index]).children("a").attr("href"), "var-init");
        return window.open(n, "_blank"), void t.hideSug();
      }
      if (t.addStat("rsv_btype", r), -1 !== t.index ? (t.addStat("f", 3), t.addStat("prefixsug", xss(t.inputValue)), t.addStat("rsp", t.index), "" === t.inputValue ? "news" === t.tn ? t.setNewsRsv("his") : t.addStat("rsv_dl", a + "h_" + t.index) : "news" === t.tn ? t.setNewsRsv("sug") : t.addStat("rsv_dl", a + "s_" + t.index), t.dataArray[t.index] && t.dataArray[t.index].alaid ? t.addStat("rsv_sug5", t.dataArray[t.index].alaid) : t.removeStat("rsv_sug5")) : t.addStat("f", 8), !t.dataArray[t.index] || "" !== t.inputValue && "|" !== t.dataArray[t.index].pinyin || "store" !== t.dataArray[t.index].type) "" === t.inputValue && t.addStat("rsv_sug9", "eb_" + (t.bds.comm.supportis ? 1 : 0));else {
        var i = cc11001100_hook("i", "0", "var-init");
        0 === t.bds.comm.ishome ? i = cc11001100_hook("i", "0", "assign") : 1 === t.bds.comm.ishome && window.s_domain && "home" === window.s_domain.base ? i = cc11001100_hook("i", "2", "assign") : 1 === t.bds.comm.ishome && (i = cc11001100_hook("i", "1", "assign")), t.addStat("rsv_sug9", "es_" + i + "_" + (t.bds.comm.supportis ? 1 : 0));
      }
      t.sugValue === t.value ? (t.removeStat("rsv_n"), t.removeStat("sug")) : (t.hoverSug !== t.value || t.sugValue !== t.value) && ("news" === t.tn ? t.setNewsRsv("box") : t.addStat("rsv_dl", a + "b"), t.addStat("f", 8)), 0 !== t.inputT ? (t.addStat("inputT", new Date().getTime() - t.inputT), t.directInputT = cc11001100_hook("t.directInputT", new Date().getTime() - t.inputT, "assign"), t.inputT = cc11001100_hook("t.inputT", 0, "assign")) : t.removeStat("inputT"), 0 !== t.rsv_sug4 && (t.addStat("rsv_sug4", new Date().getTime() - t.rsv_sug4), t.rsv_sug4 = cc11001100_hook("t.rsv_sug4", 0, "assign")), t.rsv_sug && t.addStat("rsv_sug", t.rsv_sug), $($(t.sugcontainer).find("li")[t.index]).hasClass("bdsug-zx") ? "all" === $(t.sugcontainer).find(".bdsug-box").attr("bdsug-click") ? t.addStat("rsv_sugtp", 1) : t.addStat("rsv_sugtp", 0) : t.removeStat("rsv_sugtp");
      try {
        !function () {
          var e = cc11001100_hook("e", new Date().getTime(), "var-init");
          document.cookie = cc11001100_hook("document.cookie", "WWW_ST=" + e + ";expires=" + new Date(e + 1e4).toGMTString(), "assign");
        }();
      } catch (o) {}
      if (0 === t.index && t.dataDirect.length > 0 && t.directSugSelected) {
        if (window.open($(t.sugcontainer).find(".bdsug-direct p").attr("link"), "_blank"), t.blankHandle(), ns_c({
          pj_name: cc11001100_hook("pj_name", "zhida_sug", "object-key-init"),
          sug_prefix: cc11001100_hook("sug_prefix", encodeURIComponent(t.inputValue), "object-key-init"),
          sug_query: cc11001100_hook("sug_query", encodeURIComponent(t.dataDirect[0].value), "object-key-init"),
          sug_siteurl: cc11001100_hook("sug_siteurl", encodeURIComponent(t.dataDirect[0].otherData.siteurl), "object-key-init"),
          sug_chufa: cc11001100_hook("sug_chufa", encodeURIComponent(t.dataDirect[0].otherData.hit_q), "object-key-init"),
          sug_inputT: cc11001100_hook("sug_inputT", t.directInputT ? t.directInputT : 0, "object-key-init"),
          rsv_bp: cc11001100_hook("rsv_bp", t.bds.comm.ishome ? 0 : 1, "object-key-init")
        }), t.bds && t.bds.comm && t.bds.comm.username) {
          var u = cc11001100_hook("u", t.bds && t.bds.util && t.bds.util.domain && t.bds.util.domain.get("http://api.open.baidu.com/new_hsug/data/write"), "var-init");
          u = cc11001100_hook("u", u + "?query=" + encodeURIComponent(t.dataDirect[0].value) + "&src=1&f=3&st=" + (t.showsugstore ? "1" : "0"), "assign"), $.ajax({
            dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
            scriptCharset: cc11001100_hook("scriptCharset", "utf-8", "object-key-init"),
            jsonp: cc11001100_hook("jsonp", "cb", "object-key-init"),
            timeout: cc11001100_hook("timeout", 6e3, "object-key-init"),
            url: cc11001100_hook("url", u, "object-key-init"),
            success: function () {}
          });
        }
        t.index = cc11001100_hook("t.index", -1, "assign"), t.directSugSelected = cc11001100_hook("t.directSugSelected", !1, "assign");
      } else if ($.isFunction(t.submission) && (s = cc11001100_hook("s", t.submission.call(t.form, e), "assign"), t.hideSug(), t.inputValue = cc11001100_hook("t.inputValue", t.value, "assign"), t.dataCached = cc11001100_hook("t.dataCached", {}, "assign"), t.clearStat()), s) {
        var c = cc11001100_hook("c", t.ipt.value, "var-init"),
          l = cc11001100_hook("l", $("#kw").attr("placeholder") || $(".kw-placeholder").text(), "var-init");
        c ? (c = cc11001100_hook("c", $.limitWd(c), "assign"), t.ipt.value = cc11001100_hook("t.ipt.value", t.value = cc11001100_hook("t.value", t.inputValue = cc11001100_hook("t.inputValue", t.showValue = cc11001100_hook("t.showValue", c, "assign"), "assign"), "assign"), "assign")) : l && (c = cc11001100_hook("c", $.limitWd(l), "assign"), $(".kw-placeholder").hide(), t.ipt.value = cc11001100_hook("t.ipt.value", t.value = cc11001100_hook("t.value", t.inputValue = cc11001100_hook("t.inputValue", t.showValue = cc11001100_hook("t.showValue", c, "assign"), "assign"), "assign"), "assign"), t.addStat("rsv_dq", 1)), t.form.submit(), t.blankHandle();
      }
      "_blank" !== $(t.form).attr("target") && t.addStat("rsv_bp", 1), t.removeStat("rsv_dq");
    },
    blankHandle: function () {
      var e = cc11001100_hook("e", this, "var-init");
      /12783|14655|14668/.test(e.bds.comm.sid) ? setTimeout(function () {
        e.ipt.value = cc11001100_hook("e.ipt.value", e.value = cc11001100_hook("e.value", e.inputValue = cc11001100_hook("e.inputValue", e.showValue = cc11001100_hook("e.showValue", "", "assign"), "assign"), "assign"), "assign"), (navigator && navigator.userAgent ? navigator.userAgent : "").match(/(msie [2-8])/i) || $(e.ipt).focus();
      }, 25) : /13488|14654|14667/.test(e.bds.comm.sid) && setTimeout(function () {
        $(e.ipt).select();
      }, 25);
    },
    init: function () {
      var e = cc11001100_hook("e", this, "var-init");
      e.searchNewStyle = cc11001100_hook("e.searchNewStyle", e.bds && e.bds.comm && e.bds.comm.sampleval && $.inArray("new_search_style", e.bds.comm.sampleval) > -1 || e.bds.comm.nodeSample && $.inArray("new_search_style", e.bds.comm.nodeSample) > -1, "assign"), e.setAutocomplete("off"), e.setCurrentSugSample(), e.addStat("rsv_bp", e.rsv_bp), e.updateInitData("init"), e.bds.se.sugdnscached || ($.ajax({
        type: cc11001100_hook("type", "GET", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        async: cc11001100_hook("async", !0, "object-key-init"),
        url: cc11001100_hook("url", e.buildUrl("", "", !0), "object-key-init"),
        timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        success: function () {}
      }), e.bds.se.sugdnscached = cc11001100_hook("e.bds.se.sugdnscached", 1, "assign")), e.imt = cc11001100_hook("e.imt", new ImeTrack({
        iptId: cc11001100_hook("iptId", "kw", "object-key-init"),
        adv: cc11001100_hook("adv", !0, "object-key-init"),
        innerchange: cc11001100_hook("innerchange", !1, "object-key-init")
      }), "assign"), e.quickdelete = cc11001100_hook("e.quickdelete", new QuickDelete(), "assign"), e.ipt.value && e.quickdelete._show(), $(e.ipt).on("inputChange", function (e, t) {
        t.prevQuery = cc11001100_hook("t.prevQuery", t.queryValue, "assign");
        var s = cc11001100_hook("s", "search_sug_3-1" === t.currentSugSample || "search_sug_3-2" === t.currentSugSample, "var-init");
        s && t.backFrame && 1 === t.currentSearchStatus && "" === t.inputValue || (t.backFrame = cc11001100_hook("t.backFrame", !1, "assign")), t.imt.triggerInputChange(e), t.ipt.value ? t.quickdelete._show() : t.quickdelete._hide();
      }), $(e.ipt).on("blur", function () {
        e.backFrame = cc11001100_hook("e.backFrame", !1, "assign");
      }), e.startCircle(), e.clearStat(), $(e.ipt).on("click", function (t) {
        t.stopPropagation(), !e.withoutMode && e.clickIpt(), e.ipt.value ? e.quickdelete._show() : e.quickdelete._hide(), 0 === e.rsv_sug4 && (e.rsv_sug4 = cc11001100_hook("e.rsv_sug4", new Date().getTime(), "assign"));
      }).on("focus", function () {
        e.startCircle();
      }).on("keydown", function (t) {
        t.stopPropagation(), e.startCircle(), t = cc11001100_hook("t", t || window.event, "assign"), 0 === e.inputT && (e.inputT = cc11001100_hook("e.inputT", new Date().getTime(), "assign")), 0 === e.rsv_sug4 && (e.rsv_sug4 = cc11001100_hook("e.rsv_sug4", new Date().getTime(), "assign")), (9 === t.keyCode || 27 === t.keyCode) && e.hideSug(), 13 === t.keyCode && (e.addStat("rsv_sug2", 0), e.ipt.value ? e.quickdelete._show() : e.quickdelete._hide()), 86 === t.keyCode && t.ctrlKey && e.addStat("rsv_n", 2), e.sugcontainer && "none" !== e.sugcontainer.style.display ? (38 === t.keyCode && (t.preventDefault(), e.pressUp()), 40 === t.keyCode && (t.preventDefault(), e.pressDown())) : (38 === t.keyCode || 40 === t.keyCode) && (t.preventDefault(), e.request(e.value));
      }), e.form && $(e.form).submit(function (t) {
        return e.bds && e.bds.comm && 0 === e.bds.comm.ishome && e.addStat("oq", e.bds.comm.confirmQuery ? xss(e.bds.comm.confirmQuery) : ""), e.bds && e.bds.comm && e.bds.comm.confirmQid && e.addStat("rsv_pq", e.bds.comm.confirmQid), e.formSubmit(t), !1;
      });
    },
    outInterface: function () {
      var e = cc11001100_hook("e", this, "var-init");
      return {
        setVisibleSug: cc11001100_hook("setVisibleSug", function () {
          var t = cc11001100_hook("t", $('<i class="c-icon c-icon-bear-round"></i>'), "var-init");
          return function (s) {
            var a;
            for (t.remove(), a = cc11001100_hook("a", 0, "assign"); a < e.dataArray.length; a++) if (e.dataArray[a].value === s) {
              t.appendTo($(e.sugcontainer).find("li").eq(a));
              break;
            }
          };
        }(), "object-key-init"),
        getStat: function (t) {
          return e.stat ? e.stat[t] : void 0;
        },
        clearStat: function () {
          return e.clearStat();
        },
        setKey: function (t) {
          e.ipt.value = cc11001100_hook("e.ipt.value", e.value = cc11001100_hook("e.value", e.inputValue = cc11001100_hook("e.inputValue", e.showValue = cc11001100_hook("e.showValue", t, "assign"), "assign"), "assign"), "assign");
        },
        visible: function () {
          return e.visible;
        },
        is_selecting: function () {
          return e.visible && e.is_selecting;
        },
        data: function () {
          return e.dataArray && e.dataArray.length ? $.grep(e.dataArray, function (e) {
            return "direct" !== e.type;
          }) : [];
        },
        show: function () {
          return e.showSug();
        },
        hide: function () {
          return e.hideSug();
        },
        start: function () {
          return e.startCircle();
        },
        stop: function () {
          return e.stopCircle();
        },
        setMaxNum: function (t) {
          return e.maxNum = cc11001100_hook("e.maxNum", t, "assign");
        },
        check: function () {
          return e.check();
        },
        formSubmit: function () {
          return e.formSubmit();
        },
        updateInitData: function () {
          return e.updateInitData();
        },
        on: function () {
          $(e.ipt).on.apply($(e.ipt), arguments);
        },
        height: function () {
          return $(e.sugcontainer).height();
        },
        off: function () {
          $(e.ipt).off.apply($(e.ipt), arguments);
        },
        getRsvStatus: function (t) {
          return e.getRsvStatus(t);
        },
        setCurrentSugSample: function (t) {
          return e.setCurrentSugSample(t);
        }
      };
    },
    setCurrentSugSample: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        s = cc11001100_hook("s", bds.comm.sampleval || [], "var-init");
      e && e.length > 0 && (s = cc11001100_hook("s", e, "assign")), t.currentSugSample = cc11001100_hook("t.currentSugSample", s.filter(function (e) {
        return -1 !== t.resultSugSamples.indexOf(e);
      })[0], "assign"), t.prevQuery = cc11001100_hook("t.prevQuery", t.query, "assign"), t.requestQuery = cc11001100_hook("t.requestQuery", [t.query], "assign"), t.backDelete = cc11001100_hook("t.backDelete", !1, "assign"), t.isAddQuery = cc11001100_hook("t.isAddQuery", !1, "assign"), t.showRightContent = cc11001100_hook("t.showRightContent", !1, "assign"), t.isSugSample3 = cc11001100_hook("t.isSugSample3", "search_sug_3-1" === t.currentSugSample || "search_sug_3-2" === t.currentSugSample, "assign"), t.isSugSample4 = cc11001100_hook("t.isSugSample4", "search_sug_4-1" === t.currentSugSample || "search_sug_4-2" === t.currentSugSample, "assign"), t.isSugSample = cc11001100_hook("t.isSugSample", -1 !== t.resultSugSamples.indexOf(t.currentSugSample), "assign"), t.isDirectNewSug = cc11001100_hook("t.isDirectNewSug", -1 !== s.indexOf("direct_new_sug"), "assign");
    }
  }, "assign"), bdSug;
}), define("@baidu/search-sug", ["@baidu/search-sug/sug/index"], function (e) {
  return e;
});