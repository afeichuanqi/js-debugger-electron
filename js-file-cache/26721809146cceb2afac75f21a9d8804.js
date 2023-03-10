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
    t.ipt = cc11001100_hook("t.ipt", e.ipt || null, "assign"), t.reverse = cc11001100_hook("t.reverse", e.reverse || !1, "assign"), t.form = cc11001100_hook("t.form", e.form || null, "assign"), t.submission = cc11001100_hook("t.submission", e.submission || null, "assign"), t.maxNum = cc11001100_hook("t.maxNum", e.maxNum || 10, "assign"), t.bds = cc11001100_hook("t.bds", e.bds || null, "assign"), t.sids = cc11001100_hook("t.sids", t.bds && t.bds.comm && t.bds.comm.sid, "assign"), t.withoutMode = cc11001100_hook("t.withoutMode", e.withoutMode || !1, "assign"), t.withoutRich = cc11001100_hook("t.withoutRich", e.withoutRich || !1, "assign"), t.withoutStat = cc11001100_hook("t.withoutStat", e.withoutStat || !1, "assign"), t.withoutZhixin = cc11001100_hook("t.withoutZhixin", e.withoutZhixin || !1, "assign"), t.visible = cc11001100_hook("t.visible", !1, "assign"), t.stopRefresh = cc11001100_hook("t.stopRefresh", !1, "assign"), t.renderCallback = cc11001100_hook("t.renderCallback", e.renderCallback || function () {}, "assign"), t.selectCallback = cc11001100_hook("t.selectCallback", e.selectCallback || function () {}, "assign"), t.storestr = cc11001100_hook("t.storestr", t.storestr || "", "assign"), t.storearr = cc11001100_hook("t.storearr", t.storearr || [], "assign"), t.zhixinsug = cc11001100_hook("t.zhixinsug", [], "assign"), t.zhixintemplate = cc11001100_hook("t.zhixintemplate", {}, "assign"), t.zhixinused = cc11001100_hook("t.zhixinused", {}, "assign"), t.zhixindata = cc11001100_hook("t.zhixindata", {}, "assign"), t.query = cc11001100_hook("t.query", t.ipt && t.ipt.value || "", "assign"), t.inputValue = cc11001100_hook("t.inputValue", t.query, "assign"), t.showValue = cc11001100_hook("t.showValue", t.query, "assign"), t.sugValue = cc11001100_hook("t.sugValue", "", "assign"), t.queryValue = cc11001100_hook("t.queryValue", "", "assign"), t.reqValue = cc11001100_hook("t.reqValue", "", "assign"), t.value = cc11001100_hook("t.value", t.query, "assign"), t.index = cc11001100_hook("t.index", -1, "assign"), t.sugcontainer, t.dataCached = cc11001100_hook("t.dataCached", {}, "assign"), t.dataArray = cc11001100_hook("t.dataArray", [], "assign"), t.dataStored = cc11001100_hook("t.dataStored", [], "assign"), t.dataAladdin = cc11001100_hook("t.dataAladdin", [], "assign"), t.dataDirect = cc11001100_hook("t.dataDirect", [], "assign"), t.directSugSelected = cc11001100_hook("t.directSugSelected", !1, "assign"), t.dataHot = cc11001100_hook("t.dataHot", [], "assign"), t.timer, t.rsv_sug = cc11001100_hook("t.rsv_sug", 0, "assign"), t.rsv_sug1 = cc11001100_hook("t.rsv_sug1", 0, "assign"), t.rsv_sug3 = cc11001100_hook("t.rsv_sug3", 0, "assign"), t.rsv_sug4 = cc11001100_hook("t.rsv_sug4", 0, "assign"), t.rsv_sug7 = cc11001100_hook("t.rsv_sug7", [0, 0, 0], "assign"), t.rsv_sug9 = cc11001100_hook("t.rsv_sug9", 0, "assign"), t.initTime = cc11001100_hook("t.initTime", 0, "assign"), t.inputT = cc11001100_hook("t.inputT", 0, "assign"), t.rsv_bp = cc11001100_hook("t.rsv_bp", e && e.comm && 1 === e.comm.ishome ? 0 : 1, "assign"), t.jqXhr = cc11001100_hook("t.jqXhr", null, "assign"), t.ipt && t.init(), t.pwd = cc11001100_hook("t.pwd", "", "assign"), t.hisSwitch = cc11001100_hook("t.hisSwitch", e.hisSwitch, "assign"), t.useFeedback = cc11001100_hook("t.useFeedback", e.useFeedback, "assign"), t.sugprod = cc11001100_hook("t.sugprod", e.prod || "", "assign"), t.tn = cc11001100_hook("t.tn", e.tn || "", "assign");
  }
  function xss(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.toString().replace(/[<%3C]/g, "&lt;").replace(/[>%3E]/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  var bds = cc11001100_hook("bds", window.bds || {}, "var-init");
  bds.se = cc11001100_hook("bds.se", bds.se || {}, "assign"), bds.se.store = cc11001100_hook("bds.se.store", function () {
    function e() {
      try {
        return u in r && r[u];
      } catch (e) {
        return !1;
      }
    }
    function t() {
      try {
        return d in r && r[d] && r[d][r.location.hostname];
      } catch (e) {
        return !1;
      }
    }
    function s(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function () {
        var t = cc11001100_hook("t", Array.prototype.slice.call(arguments, 0), "var-init");
        t.unshift(n), l.appendChild(n), n.addBehavior("#default#userData"), n.load(u);
        var s = cc11001100_hook("s", e.apply(i, t), "var-init");
        return l.removeChild(n), s;
      };
    }
    function a(e) {
      cc11001100_hook("e", e, "function-parameter");
      return "_" + e;
    }
    var n,
      i = cc11001100_hook("i", {}, "var-init"),
      r = cc11001100_hook("r", window, "var-init"),
      o = cc11001100_hook("o", r.document, "var-init"),
      u = cc11001100_hook("u", "localStorage", "var-init"),
      d = cc11001100_hook("d", "globalStorage", "var-init"),
      c = cc11001100_hook("c", "__storejs__", "var-init");
    if (i.disabled = cc11001100_hook("i.disabled", !1, "assign"), i.set = cc11001100_hook("i.set", function () {}, "assign"), i.get = cc11001100_hook("i.get", function () {}, "assign"), i.remove = cc11001100_hook("i.remove", function () {}, "assign"), i.clear = cc11001100_hook("i.clear", function () {}, "assign"), i.transact = cc11001100_hook("i.transact", function (e, t, s) {
      var a = cc11001100_hook("a", i.get(e), "var-init");
      null == s && (s = cc11001100_hook("s", t, "assign"), t = cc11001100_hook("t", null, "assign")), "undefined" == typeof a && (a = cc11001100_hook("a", t || {}, "assign")), s(a), i.set(e, a);
    }, "assign"), i.getAll = cc11001100_hook("i.getAll", function () {}, "assign"), i.serialize = cc11001100_hook("i.serialize", function (e) {
      return String(e);
    }, "assign"), i.deserialize = cc11001100_hook("i.deserialize", function (e) {
      return "string" != typeof e ? void 0 : e;
    }, "assign"), e()) n = cc11001100_hook("n", r[u], "assign"), i.set = cc11001100_hook("i.set", function (e, t) {
      return void 0 === t ? i.remove(e) : void n.setItem(e, i.serialize(t));
    }, "assign"), i.get = cc11001100_hook("i.get", function (e) {
      return i.deserialize(n.getItem(e));
    }, "assign"), i.remove = cc11001100_hook("i.remove", function (e) {
      n.removeItem(e);
    }, "assign"), i.clear = cc11001100_hook("i.clear", function () {
      n.clear();
    }, "assign"), i.getAll = cc11001100_hook("i.getAll", function () {
      for (var e = cc11001100_hook("e", {}, "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < n.length; ++t) {
        var s = cc11001100_hook("s", n.key(t), "var-init");
        e[s] = cc11001100_hook("e[s]", i.get(s), "assign");
      }
      return e;
    }, "assign");else if (t()) n = cc11001100_hook("n", r[d][r.location.hostname], "assign"), i.set = cc11001100_hook("i.set", function (e, t) {
      return void 0 === t ? i.remove(e) : void (n[e] = cc11001100_hook("n[e]", i.serialize(t), "assign"));
    }, "assign"), i.get = cc11001100_hook("i.get", function (e) {
      return i.deserialize(n[e] && n[e].value);
    }, "assign"), i.remove = cc11001100_hook("i.remove", function (e) {
      delete n[e];
    }, "assign"), i.clear = cc11001100_hook("i.clear", function () {
      for (var e in n) delete n[e];
    }, "assign"), i.getAll = cc11001100_hook("i.getAll", function () {
      for (var e = cc11001100_hook("e", {}, "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < n.length; ++t) {
        var s = cc11001100_hook("s", n.key(t), "var-init");
        e[s] = cc11001100_hook("e[s]", i.get(s), "assign");
      }
      return e;
    }, "assign");else if (o.documentElement.addBehavior) {
      var l, g;
      try {
        g = cc11001100_hook("g", new ActiveXObject("htmlfile"), "assign"), g.open(), g.write("<script>document.w=window</script><iframe src='/favicon.ico'></iframe>"), g.close(), l = cc11001100_hook("l", g.w.frames[0].document, "assign"), n = cc11001100_hook("n", l.createElement("div"), "assign");
      } catch (m) {
        n = cc11001100_hook("n", o.createElement("div"), "assign"), l = cc11001100_hook("l", o.body, "assign");
      }
      i.set = cc11001100_hook("i.set", s(function (e, t, s) {
        return t = cc11001100_hook("t", a(t), "assign"), void 0 === s ? i.remove(t) : (e.setAttribute(t, i.serialize(s)), void e.save(u));
      }), "assign"), i.get = cc11001100_hook("i.get", s(function (e, t) {
        return t = cc11001100_hook("t", a(t), "assign"), i.deserialize(e.getAttribute(t));
      }), "assign"), i.remove = cc11001100_hook("i.remove", s(function (e, t) {
        t = cc11001100_hook("t", a(t), "assign"), e.removeAttribute(t), e.save(u);
      }), "assign"), i.clear = cc11001100_hook("i.clear", s(function (e) {
        var t = cc11001100_hook("t", e.XMLDocument.documentElement.attributes, "var-init");
        e.load(u);
        for (var s, a = cc11001100_hook("a", 0, "var-init"); s = cc11001100_hook("s", t[a], "assign"); a++) e.removeAttribute(s.name);
        e.save(u);
      }), "assign"), i.getAll = cc11001100_hook("i.getAll", s(function (e) {
        var t = cc11001100_hook("t", e.XMLDocument.documentElement.attributes, "var-init");
        e.load(u);
        for (var s, a = cc11001100_hook("a", {}, "var-init"), n = cc11001100_hook("n", 0, "var-init"); s = cc11001100_hook("s", t[n], "assign"); ++n) a[s] = cc11001100_hook("a[s]", i.get(s), "assign");
        return a;
      }), "assign");
    }
    try {
      i.set(c, c), i.get(c) != c && (i.disabled = cc11001100_hook("i.disabled", !0, "assign")), i.remove(c);
    } catch (m) {
      i.disabled = cc11001100_hook("i.disabled", !0, "assign");
    }
    return i;
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
          n.ipt.value !== n.oldval && (n.oldval = cc11001100_hook("n.oldval", n.ipt.value, "assign"), n.inputchangeHandle(e));
        }
        function a() {
          for (var e = cc11001100_hook("e", 0, "var-init"), t = cc11001100_hook("t", n.logs.length - 1, "var-init"); t < n.logs.length - 1; t--) if (-1 === n.logs[t].type.indexOf("unval-")) return n.logs[t].time;
          return e;
        }
        var n = cc11001100_hook("n", this, "var-init");
        n.logs = cc11001100_hook("n.logs", [], "assign"), n.opts = cc11001100_hook("n.opts", t || {}, "assign"), n.opts.logmaxnum = cc11001100_hook("n.opts.logmaxnum", t.logmaxnum || 10, "assign"), n.opts.adv = cc11001100_hook("n.opts.adv", t.adv || !1, "assign"), this.onLogChange = cc11001100_hook("this.onLogChange", t.onLogChange, "assign"), void 0 === n.opts.innerchange && (n.opts.innerchange = cc11001100_hook("n.opts.innerchange", !0, "assign")), n.ipt = cc11001100_hook("n.ipt", document.getElementById(n.opts.iptId), "assign"), n._kdcode = cc11001100_hook("n._kdcode", 0, "assign"), n._kdevt = cc11001100_hook("n._kdevt", {}, "assign"), n._keyposition = cc11001100_hook("n._keyposition", 0, "assign"), n.ipt.onkeydown = cc11001100_hook("n.ipt.onkeydown", function (e) {
          var t = cc11001100_hook("t", e || window.event, "var-init");
          n._kdcode = cc11001100_hook("n._kdcode", t.keyCode || t.which, "assign"), n._kdevt = cc11001100_hook("n._kdevt", t, "assign");
        }, "assign"), n.ipt.onkeyup = cc11001100_hook("n.ipt.onkeyup", function (t) {
          var s = cc11001100_hook("s", t || window.event, "var-init"),
            a = cc11001100_hook("a", s.keyCode || s.which, "var-init");
          n.ipt.value || "", e(n.ipt), n._kdcode && (n.addLog({
            ku: cc11001100_hook("ku", a, "object-key-init"),
            type: cc11001100_hook("type", "upsave", "object-key-init")
          }), n._kdcode = cc11001100_hook("n._kdcode", 0, "assign"), n._kdevt = cc11001100_hook("n._kdevt", {}, "assign"), n.oldval = cc11001100_hook("n.oldval", n.ipt.value, "assign"));
        }, "assign"), n.ipt.onpaste = cc11001100_hook("n.ipt.onpaste", function () {
          n.addLog(n._kdevt.ctrlKey ? {
            type: cc11001100_hook("type", "unval-paste-key", "object-key-init")
          } : {
            type: cc11001100_hook("type", "unval-paste-mouse", "object-key-init")
          });
        }, "assign"), n.oldval = cc11001100_hook("n.oldval", n.ipt.value || "", "assign"), n.inputchangeHandle = cc11001100_hook("n.inputchangeHandle", function () {
          if (n._kdcode) n.addLog({
            type: cc11001100_hook("type", "unval-change-key", "object-key-init")
          });else {
            var e = cc11001100_hook("e", "", "var-init");
            n.logs.length && new Date().getTime() - a() < 300 && (e = cc11001100_hook("e", "unval-", "assign")), n.addLog({
              type: cc11001100_hook("type", e + "change-unkey", "object-key-init")
            });
          }
        }, "assign"), n.timmer, n.opts.innerchange && (n.ipt.onfocus = cc11001100_hook("n.ipt.onfocus", function (e) {
          n.timmer = cc11001100_hook("n.timmer", setInterval(function () {
            s(e);
          }, 200), "assign");
        }, "assign"), n.ipt.onblur = cc11001100_hook("n.ipt.onblur", function () {
          clearInterval(n.timmer);
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
            if (s.opts.adv) for (var e = cc11001100_hook("e", 0, "var-init"); e < i.length; e++) i.charCodeAt(e) > 256 && (o = cc11001100_hook("o", i.substring(0, e + 1), "assign"), u = cc11001100_hook("u", i.substring(e + 1), "assign"));
          }
          var s = cc11001100_hook("s", this, "var-init");
          if (this.logs.length > 0 && -1 === this.logs[this.logs.length - 1].type.indexOf("unval")) {
            var a = cc11001100_hook("a", this.logs[this.logs.length - 1], "var-init"),
              n = cc11001100_hook("n", a.val.substring(0, a.start), "var-init"),
              i = cc11001100_hook("i", a.val.substring(a.start, a.cursor), "var-init"),
              r = cc11001100_hook("r", a.val.substring(a.cursor), "var-init"),
              o = cc11001100_hook("o", "", "var-init"),
              u = cc11001100_hook("u", "", "var-init");
            229 === a.kd ? i.charCodeAt(i.length - 1) > 256 || !i.match(/[\x00-\x80]/g) ? (this._keyposition = cc11001100_hook("this._keyposition", e(this.ipt), "assign"), a.type += cc11001100_hook("a.type", "-endime", "assign"), 0 === i.length && (a.type += cc11001100_hook("a.type", "-cancelime", "assign"))) : (a.type += cc11001100_hook("a.type", "-imeinput", "assign"), t()) : a.type.indexOf("paste-mouse") > -1 ? this._keyposition = cc11001100_hook("this._keyposition", e(this.ipt), "assign") : a.type.indexOf("change-unkey") > -1 ? 0 === i.length ? (this._keyposition = cc11001100_hook("this._keyposition", e(this.ipt), "assign"), this.logs.length > 1 && this.logs[this.logs.length - 2].type.indexOf("upsave") > -1 && (a.type += cc11001100_hook("a.type", "-link", "assign"))) : i.charCodeAt(i.length - 1) > 256 || !i.match(/[\x00-\x80]/g) ? (this._keyposition = cc11001100_hook("this._keyposition", e(this.ipt), "assign"), a.type += cc11001100_hook("a.type", "-endime", "assign")) : (a.type += cc11001100_hook("a.type", "-imeinput", "assign"), t()) : this._keyposition = cc11001100_hook("this._keyposition", e(this.ipt), "assign"), this.opts.adv && (a.type += cc11001100_hook("a.type", "-adv", "assign"), a.strA = cc11001100_hook("a.strA", n, "assign"), a.strB = cc11001100_hook("a.strB", i, "assign"), a.strB1 = cc11001100_hook("a.strB1", o, "assign"), a.strB2 = cc11001100_hook("a.strB2", u, "assign"), a.strC = cc11001100_hook("a.strC", r, "assign")), this.onLogChange && this.onLogChange.call(this, a);
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
            var n = cc11001100_hook("n", a.time - this.logs[s - 1].time, "var-init");
            n > 3e3 && (e = cc11001100_hook("e", [], "assign"));
            var i = cc11001100_hook("i", 0, "var-init"),
              r = cc11001100_hook("r", (a.val.match(/[^\x00-\x80]/g) || []).length - (this.logs[s - 1].val.match(/[^\x00-\x80]/g) || []).length, "var-init");
            r > 0 ? i = cc11001100_hook("i", 1, "assign") : r = cc11001100_hook("r", (a.val.match(/[\x00-\x80]/g) || []).length - (this.logs[s - 1].val.match(/[\x00-\x80]/g) || []).length, "assign"), a.type.indexOf("ime") > -1 ? (i += cc11001100_hook("i", 2, "assign"), t = cc11001100_hook("t", !0, "assign")) : a.type.indexOf("unval") > -1 && t ? i += cc11001100_hook("i", 2, "assign") : t = cc11001100_hook("t", !1, "assign"), r > 0 && e.push(i, r, n);
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
      (isLogin || me.bds && me.bds.se && me.bds.se.store && 1 == me.bds.se.store.get("wwwPassLogout")) && (canWriteStore = cc11001100_hook("canWriteStore", !1, "assign")), me.bds && me.bds.comm && me.bds.comm.sampleval && $.inArray("sample_his", me.bds.comm.sampleval) > -1 && (canWriteStore = cc11001100_hook("canWriteStore", !0, "assign")), ("init" !== type || document.referrer) && canWriteStore && me.writeStore(), me.bds.se.store.set("wwwPassLogout", 0);
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
        var n = cc11001100_hook("n", a.stat.rsv_sug6 || "", "var-init");
        n.length > 0 && e.exp.length > 0 && -1 === n.indexOf(e.exp) ? n += cc11001100_hook("n", "_" + e.exp, "assign") : n = cc11001100_hook("n", e.exp, "assign"), a.addStat("rsv_sug6", n);
      }
      if (e && (e.g || e.z || a.checkStore(e) && a.checkStore(e).length > 0)) {
        if (a.queryValue = cc11001100_hook("a.queryValue", e.q, "assign"), e.q && "2" !== t && (a.dataCached[e.q] = cc11001100_hook("a.dataCached[e.q]", e, "assign")), $(a.ipt).trigger("dataReady", [a]), !a.withoutZhixin && e.zzx) for (var i = cc11001100_hook("i", 0, "var-init"); i < e.zzx.length; i++) e.zzx[i] && e.zzx[i].type && (a.zhixinsug.push({
          value: cc11001100_hook("value", e.g[i].q, "object-key-init"),
          type: cc11001100_hook("type", e.zzx[i].type, "object-key-init"),
          url: cc11001100_hook("url", e.zzx[i].url, "object-key-init")
        }), s(e.zzx[i].type));
        a.dataArray = cc11001100_hook("a.dataArray", a.packData(e), "assign"), a.render(a.dataArray);
      } else a.hideSug();
    },
    buildUrl: function (e, t, s) {
      var a = cc11001100_hook("a", this, "var-init"),
        n = cc11001100_hook("n", a.sid.replace(/_/g, ","), "var-init"),
        i = cc11001100_hook("i", "pc", "var-init");
      a.sugprod && (i = cc11001100_hook("i", a.sugprod, "assign"));
      var r = cc11001100_hook("r", "/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=" + i + "&from=pc_web" + (n ? "&sugsid=" + n : ""), "var-init"),
        o = cc11001100_hook("o", (a.sugHost || "http://suggestion.baidu.com/su", ""), "var-init");
      if ("" === e) {
        var u = cc11001100_hook("u", [], "var-init"),
          d = cc11001100_hook("d", [], "var-init");
        try {
          var c = cc11001100_hook("c", a.bds.se.store.get("BDSUGSTORED"), "var-init");
          u = cc11001100_hook("u", c && $.parseJSON(c) || [], "assign");
        } catch (l) {}
        for (var g = cc11001100_hook("g", 0, "var-init"); g < u.length; g++) {
          var m = cc11001100_hook("m", u[g].t ? 1 * u[g].t + BDSUG_TIMESTAMP_START : new Date().getTime(), "var-init");
          m = cc11001100_hook("m", Math.round(m / 1e3), "assign");
          var p = cc11001100_hook("p", {
            time: cc11001100_hook("time", m, "object-key-init"),
            kw: cc11001100_hook("kw", decodeURIComponent(u[g].q), "object-key-init")
          }, "var-init");
          u[g].s && u[g].s > BDSUG_QUERY_LEV && (p.fq = cc11001100_hook("p.fq", u[g].s - BDSUG_QUERY_LEV + 1, "assign")), d.push(p), d.length > 10 && d.shift();
        }
        r = cc11001100_hook("r", "/sugrec?", "assign"), o = cc11001100_hook("o", "prod=pc_his&from=pc_web&json=1&sid=" + a.sid + "&hisdata=", "assign"), $.stringify && d.length && (o += cc11001100_hook("o", encodeURIComponent($.stringify(d)), "assign")), !window.__sam_his_hot || a.bds && a.bds.comm && a.bds.comm.username || (o += cc11001100_hook("o", "&type=4", "assign")), o += cc11001100_hook("o", "&_t=" + new Date().getTime(), "assign");
      }
      var h = cc11001100_hook("h", t ? "&sugmode=" + t : "", "var-init");
      if (a.sugcookie > 0 && (a.sugcookie = cc11001100_hook("a.sugcookie", 3, "assign")), "" === e) var v = cc11001100_hook("v", r + o, "var-init");else var v = cc11001100_hook("v", r + "&wd=" + encodeURIComponent(e), "var-init");
      return bds.comm.supportis && (v += cc11001100_hook("v", "&req=2", "assign")), window.bds && bds.comm && bds.comm.cur_query && (v += cc11001100_hook("v", "&bs=" + encodeURIComponent(bds.comm.cur_query), "assign")), window.bds && bds.comm && bds.comm.cur_disp_query && (v += cc11001100_hook("v", "&pbs=" + encodeURIComponent(bds.comm.cur_disp_query), "assign")), !window._is_sugemptyhot_sam || !bds.comm.ishome || bds.comm.username || e || s ? e || s || (v += cc11001100_hook("v", "&sc=eb", "assign")) : v += cc11001100_hook("v", "&sc=hot", "assign"), a.ipt && (v += cc11001100_hook("v", "&csor=" + getCursortPosition(a.ipt), "assign")), a.pwd && (v += cc11001100_hook("v", "&pwd=" + encodeURIComponent(a.pwd), "assign")), v += cc11001100_hook("v", h, "assign"), a.pwd = cc11001100_hook("a.pwd", e, "assign"), v;
    },
    request: function (e, t) {
      var s = cc11001100_hook("s", this, "var-init");
      if (e && (e = cc11001100_hook("e", $.limitWd(e, 160), "assign")), s.directSugSelected = cc11001100_hook("s.directSugSelected", !1, "assign"), "_blank" === $(s.form).attr("target") && 1 === $(s.ipt).attr("data-bfocus")) $(s.ipt).focus().attr("data-bfocus", 0);else if (s.showsug) {
        if (s.reqValue = cc11001100_hook("s.reqValue", e, "assign"), 2 !== t && s.dataCached[e]) return void s.callback(s.dataCached[e]);
        s.jqXhr && s.jqXhr.abort(), s.jqXhr = cc11001100_hook("s.jqXhr", $.ajax("" === e ? {
          type: cc11001100_hook("type", "GET", "object-key-init"),
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          async: cc11001100_hook("async", !0, "object-key-init"),
          url: cc11001100_hook("url", s.buildUrl(e, t), "object-key-init"),
          timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
          success: function (e) {
            s.callback(e, t);
          },
          always: function () {
            s.jqXhr = cc11001100_hook("s.jqXhr", null, "assign");
          }
        } : {
          dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
          async: cc11001100_hook("async", !0, "object-key-init"),
          url: cc11001100_hook("url", s.buildUrl(e, t), "object-key-init"),
          jsonp: cc11001100_hook("jsonp", "cb", "object-key-init"),
          timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
          success: function (e) {
            s.callback(e, t);
          },
          always: function () {
            s.jqXhr = cc11001100_hook("s.jqXhr", null, "assign");
          }
        }), "assign"), s.rsv_sug3++, s.addStat("rsv_sug3", s.rsv_sug3), s.initTime = cc11001100_hook("s.initTime", new Date().getTime(), "assign");
      }
    },
    packData: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        s = cc11001100_hook("s", [], "var-init");
      t.checkHot(e), t.checkAla(e), t.checkStore(e), t.bds.comm.supportis || t.checkDirect(e);
      for (var a = cc11001100_hook("a", t.mergeData(e), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < a.length; n++) {
        if (t.bds && t.bds.comm && 1 === t.bds.comm.ishome && t.bds.comm.supportis) {
          if (n > 9) break;
        } else if (t.bds && t.bds.comm && 0 === t.bds.comm.ishome && t.bds.comm.supportis && ("store" === a[n].type || "hot" === a[n].type)) {
          if (n > t.maxNum - 1 + 5) break;
        } else if (n > t.maxNum - 1) break;
        t.reverse ? s.unshift(a[n]) : s.push(a[n]);
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
      if (e.showsugstore && e.query && e.pinyin && checkHsugIn(e.query)) {
        e.getStore();
        var t = cc11001100_hook("t", encodeURIComponent(e.query.toLowerCase()), "var-init"),
          s = cc11001100_hook("s", encodeURIComponent(e.pinyin.toLowerCase()), "var-init"),
          a = cc11001100_hook("a", BDSUG_QUERY_LEV, "var-init"),
          n = cc11001100_hook("n", new Date().getTime() - BDSUG_TIMESTAMP_START, "var-init"),
          i = cc11001100_hook("i", -1, "var-init");
        $.each(e.storearr, function (e, r) {
          r.p === s && (r.q = cc11001100_hook("r.q", t, "assign"), a = cc11001100_hook("a", (r.s || BDSUG_QUERY_LEV) + 1, "assign"), r.t = cc11001100_hook("r.t", n, "assign"), i = cc11001100_hook("i", e, "assign"));
        }), i > -1 && e.storearr.splice(i, 1);
        var r = cc11001100_hook("r", document.location.search || location.search, "var-init"),
          o = cc11001100_hook("o", /base_query/.test(r), "var-init");
        if (o) return;
        e.storearr.push({
          q: cc11001100_hook("q", t, "object-key-init"),
          p: cc11001100_hook("p", s, "object-key-init"),
          s: cc11001100_hook("s", a, "object-key-init"),
          t: cc11001100_hook("t", n, "object-key-init")
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
            n = cc11001100_hook("n", decodeURIComponent(s.p), "var-init");
          (0 === a.indexOf(t.value.toLowerCase()) || 0 === n.indexOf(t.value.toLowerCase())) && t.dataStored.unshift({
            value: cc11001100_hook("value", a, "object-key-init"),
            pinyin: cc11001100_hook("pinyin", n, "object-key-init"),
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
            n = cc11001100_hook("n", decodeURIComponent(s.p), "var-init");
          t.dataStored.unshift({
            value: cc11001100_hook("value", a, "object-key-init"),
            pinyin: cc11001100_hook("pinyin", n, "object-key-init"),
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
        t += cc11001100_hook("t", (0 === e ? "" : ",") + '{"q":"' + s.q + '","p":"' + s.p + '","s":' + s.s + ',"t":' + s.t + "}", "assign");
      }), e.storestr = cc11001100_hook("e.storestr", "[" + t + "]", "assign");
      try {
        e.bds.se.store.set("BDSUGSTORED", e.storestr);
      } catch (s) {}
    },
    mergeData: function (e) {
      function t(e, t, a, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        function i(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          var e = cc11001100_hook("e", $.subByte(e, "41"), "var-init");
          return t && e ? (e = cc11001100_hook("e", $.trim(e), "assign"), t = cc11001100_hook("t", $.trim(t), "assign"), e = cc11001100_hook("e", 0 === e.indexOf(t) && e !== t ? r(e, t) : o(e), "assign")) : e = cc11001100_hook("e", o(e), "assign"), e;
        }
        function r(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          e = cc11001100_hook("e", o(e), "assign"), t = cc11001100_hook("t", o(t), "assign");
          var s = cc11001100_hook("s", t, "var-init"),
            a = cc11001100_hook("a", t.length, "var-init"),
            n = cc11001100_hook("n", "<b>" + e.substring(a) + "</b>", "var-init");
          return s + n;
        }
        function o(e) {
          cc11001100_hook("e", e, "function-parameter");
          return e = cc11001100_hook("e", e.replace(/&/g, "&amp;"), "assign"), e = cc11001100_hook("e", e.replace(/</g, "&lt;"), "assign"), e = cc11001100_hook("e", e.replace(/>/g, "&gt;"), "assign");
        }
        var u = cc11001100_hook("u", {}, "var-init");
        u.value = cc11001100_hook("u.value", e, "assign");
        var d = cc11001100_hook("d", i(e, s.queryValue), "var-init");
        switch (t) {
          case "direct":
            u.html = cc11001100_hook("u.html", "-" === a.iconurl ? '<p link="' + a.siteurl + '">' + a.site + "<span>" + a.showurl + "</span><i>官网</i></p>" : '<p link="' + a.siteurl + '"><img src="' + a.iconurl + '"/>' + a.site + "<span>" + a.showurl + "</span></p>", "assign"), u.type = cc11001100_hook("u.type", "direct", "assign");
            break;
          case "ala":
            u.html = cc11001100_hook("u.html", "<h3>" + d + "</h3><p>" + a.word + "</p>", "assign"), u.type = cc11001100_hook("u.type", "ala", "assign"), u.alaid = cc11001100_hook("u.alaid", a.id, "assign");
            break;
          case "store":
            2 === a["new"] && (d += cc11001100_hook("d", '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>', "assign")), u.html = cc11001100_hook("u.html", "<span>" + d + "</span>", "assign"), (s.bds.comm.username || "|" !== a) && (u.html += cc11001100_hook("u.html", '<u class="bdsug-store-del ' + ("|" === a ? "bdsug-store-del-cloud" : "") + '" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>', "assign")), u.type = cc11001100_hook("u.type", "store", "assign"), u.pinyin = cc11001100_hook("u.pinyin", a, "assign"), u.s = cc11001100_hook("u.s", n, "assign");
            break;
          default:
            a && a["new"] && 2 === a["new"] && (d += cc11001100_hook("d", '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>', "assign")), u.html = cc11001100_hook("u.html", d, "assign");
        }
        if (!s.withoutZhixin && s.zhixinsug.length > 0) for (var c = cc11001100_hook("c", 0, "var-init"); c < s.zhixinsug.length; c++) if (u.value === s.zhixinsug[c].value && "ala" !== u.type) {
          u.zxtype = cc11001100_hook("u.zxtype", s.zhixinsug[c].type, "assign"), u.zxurl = cc11001100_hook("u.zxurl", s.zhixinsug[c].url, "assign");
          var l = cc11001100_hook("l", '<i class="bdsug-arrow"></i>', "var-init");
          u.html.split(l).length <= 1 && (u.html += cc11001100_hook("u.html", l, "assign"));
        }
        return u;
      }
      var s = cc11001100_hook("s", this, "var-init"),
        a = cc11001100_hook("a", [], "var-init"),
        n = cc11001100_hook("n", 0, "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      if (s.rsv_sug = cc11001100_hook("s.rsv_sug", 0, "assign"), s.dataHot.length > 0 && "" === s.value) {
        for (var r = cc11001100_hook("r", 0, "var-init"); r < s.dataHot.length && (n++, a.push(t(s.dataHot[r].value, "hot", s.dataHot[r].otherData)), !(n >= 8)); r++);
        return a;
      }
      if (s.dataDirect.length > 0 && (a.push(t(s.dataDirect[0].value, "direct", s.dataDirect[0].otherData)), ns_c({
        pj_name: cc11001100_hook("pj_name", "zhida_sug", "object-key-init"),
        zhida_prefix: cc11001100_hook("zhida_prefix", encodeURIComponent(s.inputValue), "object-key-init"),
        zhida_query: cc11001100_hook("zhida_query", encodeURIComponent(s.dataDirect[0].value), "object-key-init"),
        zhida_chufa: cc11001100_hook("zhida_chufa", encodeURIComponent(s.dataDirect[0].otherData.hit_q), "object-key-init"),
        zhida_bp: cc11001100_hook("zhida_bp", s.bds.comm.ishome ? 0 : 1, "object-key-init")
      })), s.dataAladdin.length > 0) for (var r = cc11001100_hook("r", 0, "var-init"); r < s.dataAladdin.length && (a.push(t(s.dataAladdin[0].value, "ala", s.dataAladdin[0].otherData)), n++, !(n >= 1)); r++);
      if (s.dataStored.length > 0) for (var r = cc11001100_hook("r", 0, "var-init"); r < s.dataStored.length; r++) {
        for (var o = cc11001100_hook("o", !1, "var-init"), u = cc11001100_hook("u", 0, "var-init"); u < a.length; u++) "direct" !== a[u].type && s.dataStored[r].value === a[u].value && (o = cc11001100_hook("o", !0, "assign"));
        if (o || (a.push(t(s.dataStored[r].value, "store", s.dataStored[r].pinyin, s.dataStored[r].s || 0)), n++, 0 === i && "|" === s.dataStored[r].pinyin && (i = cc11001100_hook("i", 3, "assign"))), s.rsv_sug++, "" === s.value && n >= 9) break;
        if ("" !== s.value && n >= 2) break;
      }
      var d = cc11001100_hook("d", [], "var-init");
      if (e.g && e.g.length > 0) {
        for (var r = cc11001100_hook("r", 0, "var-init"); r < e.g.length; r++) if ("sug" === e.g[r].type) {
          for (var o = cc11001100_hook("o", !1, "var-init"), u = cc11001100_hook("u", 0, "var-init"); u < a.length; u++) "direct" !== a[u].type && e.g[r].q === a[u].value && (o = cc11001100_hook("o", !0, "assign"));
          o || (d.push(t(e.g[r].q, e.g[r].type, e.g[r].st)), i = cc11001100_hook("i", i ? i : 1, "assign"));
        }
        a = cc11001100_hook("a", "" === s.value && d.length ? s.bds.comm.supportis ? d.slice(0, Math.max(4 - a.length, 2)).concat(a) : d.slice(0, Math.max(10 - a.length, 5)).concat(a) : a.concat(d), "assign");
      }
      switch (i) {
        case 1:
          s.rsv_sug7[0] = cc11001100_hook("s.rsv_sug7[0]", 1, "assign");
          break;
        case 3:
          s.rsv_sug7[2] = cc11001100_hook("s.rsv_sug7[2]", 1, "assign");
      }
      return a;
    },
    render: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      if (t.is_selecting = cc11001100_hook("t.is_selecting", !1, "assign"), !t.sugcontainer) {
        t.sugcontainer = cc11001100_hook("t.sugcontainer", document.createElement("DIV"), "assign");
        var s = cc11001100_hook("s", t.searchNewStyle, "var-init");
        t.sugcontainer.className = cc11001100_hook("t.sugcontainer.className", s ? "sam-bdsug bdsug bdsug-new" : "bdsug bdsug-new", "assign"), $(t.sugcontainer).delegate("li", "mouseenter", function () {
          t.stopCircle();
          var e = cc11001100_hook("e", $(this).data("key"), "var-init");
          t.blurSug($(t.sugcontainer).find("li")), t.focusSug(this, e), t.index = cc11001100_hook("t.index", $(t.sugcontainer).find("li").index($(this)), "assign"), t.hoverSug = cc11001100_hook("t.hoverSug", e, "assign");
        }).delegate("li", "mouseleave", function () {
          t.startCircle(), $(this).removeClass("bdsug-s");
        }).delegate("li", "click", function () {
          t.startCircle();
          var e = cc11001100_hook("e", $(this).data("key"), "var-init"),
            s = cc11001100_hook("s", $(".kw-placeholder").hasClass("placeholders-hidden"), "var-init");
          !s && $(".kw-placeholder").addClass("placeholders-hidden"), t.directSugSelected = cc11001100_hook("t.directSugSelected", $(this).hasClass("bdsug-direct") ? !0 : !1, "assign"), $(this).hasClass("bdsug-hot") && t.addStat("rsv_sug8", "hot"), t.sugValue = cc11001100_hook("t.sugValue", t.showValue = cc11001100_hook("t.showValue", t.value = cc11001100_hook("t.value", t.ipt.value = cc11001100_hook("t.ipt.value", e, "assign"), "assign"), "assign"), "assign"), t.index = cc11001100_hook("t.index", $(t.sugcontainer).find("li").index($(this)), "assign"), t.ipt.value ? t.quickdelete._show() : t.quickdelete._hide(), t.hideSug(), t.bds && t.bds.comm && 0 === t.bds.comm.ishome && t.addStat("oq", t.bds.comm.confirmQuery ? xss(t.bds.comm.confirmQuery) : ""), t.bds && t.bds.comm && t.bds.comm.confirmQid && t.addStat("rsv_pq", t.bds.comm.confirmQid), t.addStat("sug", xss(e)), t.addStat("rsv_sug2", 1), t.formSubmit();
        }), $(t.sugcontainer).click(function (e) {
          e.stopPropagation();
        });
      }
      if (e.length > 0) {
        for (var a = cc11001100_hook("a", document.createElement("UL"), "var-init"), n = cc11001100_hook("n", t.bds && t.bds.util && t.bds.util.domain ? t.bds.util.domain.get("http://sclick.baidu.com") : "http://sclick.baidu.com", "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length; i++) {
          var r = cc11001100_hook("r", document.createElement("LI"), "var-init");
          if (r.innerHTML = cc11001100_hook("r.innerHTML", e[i].html, "assign"), e[i].zxtype && e[i].zxurl) {
            var o = cc11001100_hook("o", e[i].value, "var-init"),
              u = cc11001100_hook("u", e[i].zxtype, "var-init"),
              d = cc11001100_hook("d", e[i].zxurl, "var-init"),
              c = cc11001100_hook("c", t.zhixindata[o] && t.zhixindata[o].responseJSON && 0 === t.zhixindata[o].responseJSON.status && t.zhixindata[o].responseJSON.data && t.zhixindata[o].responseJSON.data.length > 0, "var-init");
            c || (t.zhixindata[o] = cc11001100_hook("t.zhixindata[o]", $.ajax({
              dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
              async: cc11001100_hook("async", !0, "object-key-init"),
              url: cc11001100_hook("url", d, "object-key-init"),
              jsonp: cc11001100_hook("jsonp", "cb", "object-key-init")
            }), "assign")), $(r).addClass("bdsug-zx").on("focused", function () {
              var e = cc11001100_hook("e", $(this).data("key"), "var-init"),
                s = cc11001100_hook("s", t.zhixindata[e] && t.zhixindata[e].responseJSON && 0 === t.zhixindata[e].responseJSON.status && t.zhixindata[e].responseJSON.data && t.zhixindata[e].responseJSON.data.length > 0, "var-init"),
                a = cc11001100_hook("a", $(t.sugcontainer).find(".bdsug-box")[0], "var-init");
              if (s && a && t.bds.se.sugzx && t.bds.se.sugzx[u]) {
                var n = cc11001100_hook("n", t.bds.se.sugzx[u](t.zhixindata[e].responseJSON.data, e, t.outInterface(), t), "var-init");
                n instanceof jQuery && ($(t.sugcontainer).addClass("bdsug-showzx"), $(a).empty().append(n), $(t.sugcontainer).height() < $(t.sugcontainer).find(".bdsug-box").height() && $(t.sugcontainer).css({
                  height: cc11001100_hook("height", $(t.sugcontainer).find(".bdsug-box").height(), "object-key-init")
                }));
              }
            }).on("blured", function () {
              $(t.sugcontainer).removeClass("bdsug-showzx"), $(t.sugcontainer).css({
                height: cc11001100_hook("height", "auto", "object-key-init")
              });
            });
          }
          t.setSug(r, e[i].value, e[i].type), a.appendChild(r);
        }
        t.form ? $(t.sugcontainer).insertBefore(t.form.firstChild) : $(t.ipt).after(t.sugcontainer);
        var l = cc11001100_hook("l", document.createElement("div"), "var-init");
        l.appendChild(a), t.sugcontainer.innerHTML = cc11001100_hook("t.sugcontainer.innerHTML", l && l.innerHTML, "assign"), $(t.sugcontainer).removeClass("bdsug-showzx"), $(t.sugcontainer).css({
          height: cc11001100_hook("height", "auto", "object-key-init")
        });
        var g = cc11001100_hook("g", $(t.sugcontainer).find("ul li"), "var-init");
        t.withoutZhixin || ($(t.sugcontainer).addClass("bdsug-showarrow"), $(t.sugcontainer).append($('<div class="bdsug-box"></div>')), $(t.form).find(".bdsug-tmp").length || $(t.form).append($('<div class="bdsug-tmp"></div>')), $(t.sugcontainer).find(".bdsug-box").on("mouseenter", function () {
          $(t.sugcontainer).addClass("bdsug-showzx"), $(g[t.index]).addClass("bdsug-s");
        }).on("mouseleave", function () {
          $(t.sugcontainer).removeClass("bdsug-showzx"), $(g[t.index]).removeClass("bdsug-s"), $(t.sugcontainer).css({
            height: cc11001100_hook("height", "auto", "object-key-init")
          });
        }).on("click", function (e) {
          e.stopPropagation();
        })), $(t.form).find(".bdsug-tmp").empty();
        var m = cc11001100_hook("m", $("<li>").appendTo($("<div>").addClass("bdsug-showzx").appendTo($(t.form).find(".bdsug-tmp"))), "var-init"),
          p = cc11001100_hook("p", $("<div>").css({
            position: cc11001100_hook("position", "absolute", "object-key-init"),
            display: cc11001100_hook("display", "inline-block", "object-key-init"),
            top: cc11001100_hook("top", "-10000px", "object-key-init"),
            left: cc11001100_hook("left", "-10000px", "object-key-init")
          }).appendTo($(t.form).find(".bdsug-tmp")), "var-init");
        $.each(g, function (e, s) {
          p.html($(s).html());
          var a = cc11001100_hook("a", 28, "var-init");
          p.width() > m.width() - $(t.sugcontainer).find(".bdsug-arrow").width() - a && $(s).addClass("bdsug-overflow");
        });
        var h = cc11001100_hook("h", "0", "var-init");
        if (0 === t.bds.comm.ishome ? h = cc11001100_hook("h", "0", "assign") : 1 === t.bds.comm.ishome && window.s_domain && "home" === window.s_domain.base ? h = cc11001100_hook("h", "2", "assign") : 1 === t.bds.comm.ishome && (h = cc11001100_hook("h", "1", "assign")), "" === t.value && e.length) {
          for (var v = cc11001100_hook("v", 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length; i++) e[i].type && "store" === e[i].type && v++;
          if (ns_c({
            pj_name: cc11001100_hook("pj_name", "es_sug", "object-key-init"),
            es_sug_hot: cc11001100_hook("es_sug_hot", t.dataHot.length, "object-key-init"),
            es_sug_num: cc11001100_hook("es_sug_num", e.length, "object-key-init"),
            eb_sug_num: cc11001100_hook("eb_sug_num", e.length - v, "object-key-init"),
            es_sug_bp: cc11001100_hook("es_sug_bp", h + "_" + (t.bds.comm.supportis ? 1 : 0), "object-key-init")
          }), $(".bdsug-feedback-wrap").length > 0 && $(".bdsug-feedback-wrap").remove(), t.dataStored.length && t.dataStored.length > 3 || t.dataHot.length && t.dataHot.length > 3) {
            var s = cc11001100_hook("s", t.searchNewStyle, "var-init"),
              f = cc11001100_hook("f", s ? 15 : 12, "var-init"),
              b = cc11001100_hook("b", s ? 0 : -5, "var-init"),
              _ = cc11001100_hook("_", s ? "margin-bottom: 1px;" : "", "var-init"),
              S = cc11001100_hook("S", "", "var-init"),
              y = cc11001100_hook("y", '<span class="setup_storeSug" style="margin-right:' + f + 'px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">关闭历史</span>', "var-init");
            t.hisSwitch === !1 && (y = cc11001100_hook("y", "", "assign")), t.bds.comm.username ? (S = cc11001100_hook("S", '<div style="text-align:right; background:none; height: 25px; line-height: 15px; border-radius: 0 0 10px 10px;padding-bottom: 2px;margin-top: ' + b + "px;" + _ + '">' + y + '<span class="del_all_storeSug" style="margin-right:' + f + 'px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">删除历史</span><a class="more_storeSug" href="http://i.baidu.com/my/history?from=pssug"target="_blank" style="color:#666; text-decoration:none;margin-right:' + f + 'px; font-size: 13px; color: #9195a3">更多历史</a></div>', "assign"), $(t.sugcontainer).append(S)) : (S = cc11001100_hook("S", '<div style="text-align:right; background:none; height: 25px; line-height: 15px; border-radius: 0 0 10px 10px;padding-bottom: 2px;margin-top: ' + b + "px;" + _ + '"><span class="setup_storeSug" style="margin-right:' + f + 'px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">关闭历史</span></div>', "assign"), $(t.sugcontainer).append(S)), $(t.sugcontainer).find(".del_all_storeSug").click(function () {
              if (t.dataStored[0] && t.dataStored[0].pinyin && "|" === t.dataStored[0].pinyin) {
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
              s.src = cc11001100_hook("s.src", n + "/w.gif?q=delall&fm=beha&rsv_sug=delall&rsv_sid=" + t.bds.comm.sid + "&t=" + new Date().getTime() + "&rsv_sug9=es_" + h + "_" + (t.bds.comm.supportis ? 1 : 0) + "&path=http://www.baidu.com", "assign");
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
        $.each(g, function (s, a) {
          if (e[s] && "store" === e[s].type) {
            var i = cc11001100_hook("i", s, "var-init");
            $(a).find("u").click(function (s) {
              if (s.stopPropagation(), $(a).remove(), t.bds && t.bds.comm && t.bds.comm.username) {
                var r = cc11001100_hook("r", "https://www.baidu.com/recsys/hisproxy/data/usrdelete", "var-init");
                $.ajax({
                  type: cc11001100_hook("type", "POST", "object-key-init"),
                  scriptCharset: cc11001100_hook("scriptCharset", "utf-8", "object-key-init"),
                  dataType: cc11001100_hook("dataType", "json", "object-key-init"),
                  timeout: cc11001100_hook("timeout", 6e3, "object-key-init"),
                  url: cc11001100_hook("url", r, "object-key-init"),
                  data: {
                    items: cc11001100_hook("items", JSON.stringify([{
                      query: cc11001100_hook("query", e[i].value, "object-key-init"),
                      ts: cc11001100_hook("ts", "", "object-key-init")
                    }]), "object-key-init")
                  },
                  xhrFields: {
                    withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
                  },
                  crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
                  success: function () {}
                });
              }
              if (e[i].pinyin && "|" === e[i].pinyin) {
                t.dataCached = cc11001100_hook("t.dataCached", {}, "assign");
                var o = cc11001100_hook("o", !1, "var-init");
                $.each(t.storearr, function (e) {
                  encodeURIComponent(t.dataArray[i].value) === t.storearr[e].q && (o = cc11001100_hook("o", e, "assign"));
                }), o !== !1 && (t.storearr.splice(o, 1), t.setStore());
              } else {
                var o = cc11001100_hook("o", !1, "var-init");
                $.each(t.storearr, function (e) {
                  t.dataArray[i].pinyin === decodeURIComponent(t.storearr[e].p) && (o = cc11001100_hook("o", e, "assign"));
                }), o !== !1 && (t.storearr.splice(o, 1), t.setStore());
              }
              var u = cc11001100_hook("u", window["BD_PS_C" + new Date().getTime()] = cc11001100_hook("window[\"BD_PS_C\" + new Date().getTime()]", new Image(), "assign"), "var-init");
              u.src = cc11001100_hook("u.src", n + "/w.gif?q=" + encodeURIComponent(e[i].value) + "&fm=beha&rsv_sug=del&rsv_sid=" + t.bds.comm.sid + "&t=" + new Date().getTime() + ("" === t.value ? "&rsv_sug9=es_" + h + "_" + (t.bds.comm.supportis ? 1 : 0) : "") + "&path=http://www.baidu.com", "assign");
            });
          }
        });
        var w = cc11001100_hook("w", !!window.ActiveXObject && (!document.documentMode || document.documentMode <= 9), "var-init");
        w || (0 !== $(".bdsug-feedback-wrap").length && $(".bdsug-feedback-wrap").remove(), "" !== t.value && t.useFeedback !== !1 && ($(t.sugcontainer).append('<div class="bdsug-feedback-wrap"><span class="bdsug-feedback">反馈</span></div>'), $(".bdsug-feedback-wrap").on("click", function () {
          var e = cc11001100_hook("e", t.dataArray, "var-init");
          t.dataArray.forEach(function (t, s) {
            e[s] = cc11001100_hook("e[s]", t.value, "assign");
          }), t.bds.se.ShortCut.initSugBar(e), t.hideSug();
        }))), $(t.ipt).trigger("render", [t]), t.renderCallback(), t.showSug(), $(t.ipt).trigger("showSug", [t]);
      } else t.renderCallback(), t.hideSug();
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
      e.bds.comm.query && e.ipt.value && e.bds.comm.query === e.ipt.value ? e.request(e.ipt.value, "2") : e.request(e.ipt.value);
    },
    showSug: function () {
      var e = cc11001100_hook("e", this, "var-init");
      e.index = cc11001100_hook("e.index", -1, "assign"), e.ipt.value === e.reqValue && (e.bds.comm.ishome ? $(e.ipt).addClass("new-ipt-focus") : $(".s_ipt_wr").addClass("new-ipt-focus"), $(e.sugcontainer).show()), e.visible = cc11001100_hook("e.visible", !0, "assign"), e.rsv_sug1++, e.addStat("rsv_sug1", e.rsv_sug1), e.addStat("rsv_sug7", e.rsv_sug7.join(""));
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
      $(e).removeClass("bdsug-s"), $(e).trigger("blured");
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
        for (var n in t.dataArray) e === t.dataArray[n].value && (a = cc11001100_hook("a", [0, n], "assign"), n < t.rsv_sug && (a = cc11001100_hook("a", [1, n], "assign")));
        for (var n = cc11001100_hook("n", 0, "var-init"); n < t.rsv_sug && t.dataArray[n]; n++) s.push(t.dataArray[n].value.length, t.dataArray[n].s);
        a.push(t.index, t.rsv_sug, s.join("."));
      }
      return a.join("_");
    },
    formSubmit: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        s = cc11001100_hook("s", !0, "var-init"),
        a = cc11001100_hook("a", t.bds && t.bds.comm && 1 === t.bds.comm.ishome ? "i" : "t", "var-init"),
        n = cc11001100_hook("n", "t", "var-init");
      if ("/" === window.location.pathname && (n = cc11001100_hook("n", "i", "assign")), t.addStat("rsv_btype", n), -1 !== t.index ? (t.addStat("f", 3), t.addStat("prefixsug", xss(t.inputValue)), t.addStat("rsp", t.index), "" === t.inputValue ? "news" === t.tn ? t.setNewsRsv("his") : t.addStat("rsv_dl", a + "h_" + t.index) : "news" === t.tn ? t.setNewsRsv("sug") : t.addStat("rsv_dl", a + "s_" + t.index), t.dataArray[t.index] && t.dataArray[t.index].alaid ? t.addStat("rsv_sug5", t.dataArray[t.index].alaid) : t.removeStat("rsv_sug5")) : t.addStat("f", 8), !t.dataArray[t.index] || "" !== t.inputValue && "|" !== t.dataArray[t.index].pinyin || "store" !== t.dataArray[t.index].type) "" === t.inputValue && t.addStat("rsv_sug9", "eb_" + (t.bds.comm.supportis ? 1 : 0));else {
        var i = cc11001100_hook("i", "0", "var-init");
        0 === t.bds.comm.ishome ? i = cc11001100_hook("i", "0", "assign") : 1 === t.bds.comm.ishome && window.s_domain && "home" === window.s_domain.base ? i = cc11001100_hook("i", "2", "assign") : 1 === t.bds.comm.ishome && (i = cc11001100_hook("i", "1", "assign")), t.addStat("rsv_sug9", "es_" + i + "_" + (t.bds.comm.supportis ? 1 : 0));
      }
      t.sugValue === t.value ? (t.removeStat("rsv_n"), t.removeStat("sug")) : (t.hoverSug !== t.value || t.sugValue !== t.value) && ("news" === t.tn ? t.setNewsRsv("box") : t.addStat("rsv_dl", a + "b"), t.addStat("f", 8)), 0 !== t.inputT ? (t.addStat("inputT", new Date().getTime() - t.inputT), t.directInputT = cc11001100_hook("t.directInputT", new Date().getTime() - t.inputT, "assign"), t.inputT = cc11001100_hook("t.inputT", 0, "assign")) : t.removeStat("inputT"), 0 !== t.rsv_sug4 && (t.addStat("rsv_sug4", new Date().getTime() - t.rsv_sug4), t.rsv_sug4 = cc11001100_hook("t.rsv_sug4", 0, "assign")), t.rsv_sug && t.addStat("rsv_sug", t.rsv_sug), $($(t.sugcontainer).find("li")[t.index]).hasClass("bdsug-zx") ? "all" === $(t.sugcontainer).find(".bdsug-box").attr("bdsug-click") ? t.addStat("rsv_sugtp", 1) : t.addStat("rsv_sugtp", 0) : t.removeStat("rsv_sugtp");
      try {
        !function () {
          var e = cc11001100_hook("e", new Date().getTime(), "var-init");
          document.cookie = cc11001100_hook("document.cookie", "WWW_ST=" + e + ";expires=" + new Date(e + 1e4).toGMTString(), "assign");
        }();
      } catch (r) {}
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
          var o = cc11001100_hook("o", t.bds && t.bds.util && t.bds.util.domain && t.bds.util.domain.get("http://api.open.baidu.com/new_hsug/data/write"), "var-init");
          o = cc11001100_hook("o", o + "?query=" + encodeURIComponent(t.dataDirect[0].value) + "&src=1&f=3&st=" + (t.showsugstore ? "1" : "0"), "assign"), $.ajax({
            dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
            scriptCharset: cc11001100_hook("scriptCharset", "utf-8", "object-key-init"),
            jsonp: cc11001100_hook("jsonp", "cb", "object-key-init"),
            timeout: cc11001100_hook("timeout", 6e3, "object-key-init"),
            url: cc11001100_hook("url", o, "object-key-init"),
            success: function () {}
          });
        }
        t.index = cc11001100_hook("t.index", -1, "assign"), t.directSugSelected = cc11001100_hook("t.directSugSelected", !1, "assign");
      } else if ($.isFunction(t.submission) && (s = cc11001100_hook("s", t.submission.call(t.form, e), "assign"), t.hideSug(), t.inputValue = cc11001100_hook("t.inputValue", t.value, "assign"), t.dataCached = cc11001100_hook("t.dataCached", {}, "assign"), t.clearStat()), s) {
        var u = cc11001100_hook("u", t.ipt.value, "var-init"),
          d = cc11001100_hook("d", $("#kw").attr("placeholder") || $(".kw-placeholder").text(), "var-init");
        u ? (u = cc11001100_hook("u", $.limitWd(u), "assign"), t.ipt.value = cc11001100_hook("t.ipt.value", t.value = cc11001100_hook("t.value", t.inputValue = cc11001100_hook("t.inputValue", t.showValue = cc11001100_hook("t.showValue", u, "assign"), "assign"), "assign"), "assign")) : d && (u = cc11001100_hook("u", $.limitWd(d), "assign"), $(".kw-placeholder").hide(), t.ipt.value = cc11001100_hook("t.ipt.value", t.value = cc11001100_hook("t.value", t.inputValue = cc11001100_hook("t.inputValue", t.showValue = cc11001100_hook("t.showValue", u, "assign"), "assign"), "assign"), "assign"), t.addStat("rsv_dq", 1)), t.form.submit(), t.blankHandle();
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
      e.searchNewStyle = cc11001100_hook("e.searchNewStyle", e.bds && e.bds.comm && e.bds.comm.sampleval && $.inArray("new_search_style", e.bds.comm.sampleval) > -1 || e.bds.comm.nodeSample && $.inArray("new_search_style", e.bds.comm.nodeSample) > -1, "assign"), e.setAutocomplete("off"), e.addStat("rsv_bp", e.rsv_bp), e.updateInitData("init"), e.bds.se.sugdnscached || ($.ajax({
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
        t.imt.triggerInputChange(e), t.ipt.value ? t.quickdelete._show() : t.quickdelete._hide();
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
        }
      };
    }
  }, "assign"), bdSug;
}), define("@baidu/search-sug", ["@baidu/search-sug/sug/index"], function (e) {
  return e;
});