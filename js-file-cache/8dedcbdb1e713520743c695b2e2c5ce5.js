/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = cc11001100_hook("jQuery.migrateMute", !0, "assign")), function (a, b, c) {
  function d(c) {
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", b.console, "var-init");
    f[c] || (f[c] = cc11001100_hook("f[c]", !0, "assign"), a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()));
  }
  function e(b, c, e, f) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if (Object.defineProperty) try {
      return void Object.defineProperty(b, c, {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: function () {
          return d(f), e;
        },
        set: function (a) {
          d(f), e = cc11001100_hook("e", a, "assign");
        }
      });
    } catch (g) {}
    a._definePropertyBroken = cc11001100_hook("a._definePropertyBroken", !0, "assign"), b[c] = cc11001100_hook("b[c]", e, "assign");
  }
  a.migrateVersion = cc11001100_hook("a.migrateVersion", "1.4.1", "assign");
  var f = cc11001100_hook("f", {}, "var-init");
  a.migrateWarnings = cc11001100_hook("a.migrateWarnings", [], "assign"), b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = cc11001100_hook("a.migrateTrace", !0, "assign")), a.migrateReset = cc11001100_hook("a.migrateReset", function () {
    f = cc11001100_hook("f", {}, "assign"), a.migrateWarnings.length = cc11001100_hook("a.migrateWarnings.length", 0, "assign");
  }, "assign"), "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
  var g = cc11001100_hook("g", a("<input/>", {
      size: cc11001100_hook("size", 1, "object-key-init")
    }).attr("size") && a.attrFn, "var-init"),
    h = cc11001100_hook("h", a.attr, "var-init"),
    i = cc11001100_hook("i", a.attrHooks.value && a.attrHooks.value.get || function () {
      return null;
    }, "var-init"),
    j = cc11001100_hook("j", a.attrHooks.value && a.attrHooks.value.set || function () {
      return c;
    }, "var-init"),
    k = cc11001100_hook("k", /^(?:input|button)$/i, "var-init"),
    l = cc11001100_hook("l", /^[238]$/, "var-init"),
    m = cc11001100_hook("m", /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, "var-init"),
    n = cc11001100_hook("n", /^(?:checked|selected)$/i, "var-init");
  e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = cc11001100_hook("a.attr", function (b, e, f, i) {
    var j = cc11001100_hook("j", e.toLowerCase(), "var-init"),
      o = cc11001100_hook("o", b && b.nodeType, "var-init");
    return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = cc11001100_hook("a.attrHooks[j]", {
      get: function (b, d) {
        var e,
          f = cc11001100_hook("f", a.prop(b, d), "var-init");
        return f === !0 || "boolean" != typeof f && (e = cc11001100_hook("e", b.getAttributeNode(d), "assign")) && e.nodeValue !== !1 ? d.toLowerCase() : c;
      },
      set: function (b, c, d) {
        var e;
        return c === !1 ? a.removeAttr(b, d) : (e = cc11001100_hook("e", a.propFix[d] || d, "assign"), e in b && (b[e] = cc11001100_hook("b[e]", !0, "assign")), b.setAttribute(d, d.toLowerCase())), d;
      }
    }, "assign"), n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f));
  }, "assign"), a.attrHooks.value = cc11001100_hook("a.attrHooks.value", {
    get: function (a, b) {
      var c = cc11001100_hook("c", (a.nodeName || "").toLowerCase(), "var-init");
      return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null);
    },
    set: function (a, b) {
      var c = cc11001100_hook("c", (a.nodeName || "").toLowerCase(), "var-init");
      return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void (a.value = cc11001100_hook("a.value", b, "assign")));
    }
  }, "assign");
  var o,
    p,
    q = cc11001100_hook("q", a.fn.init, "var-init"),
    r = cc11001100_hook("r", a.find, "var-init"),
    s = cc11001100_hook("s", a.parseJSON, "var-init"),
    t = cc11001100_hook("t", /^\s*</, "var-init"),
    u = cc11001100_hook("u", /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, "var-init"),
    v = cc11001100_hook("v", /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, "var-init"),
    w = cc11001100_hook("w", /^([^<]*)(<[\w\W]+>)([^>]*)$/, "var-init");
  a.fn.init = cc11001100_hook("a.fn.init", function (b, e, f) {
    var g, h;
    return b && "string" == typeof b && !a.isPlainObject(e) && (g = cc11001100_hook("g", w.exec(a.trim(b)), "assign")) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = cc11001100_hook("e", e.context, "assign")), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = cc11001100_hook("h", q.apply(this, arguments), "assign"), b && b.selector !== c ? (h.selector = cc11001100_hook("h.selector", b.selector, "assign"), h.context = cc11001100_hook("h.context", b.context, "assign")) : (h.selector = cc11001100_hook("h.selector", "string" == typeof b ? b : "", "assign"), b && (h.context = cc11001100_hook("h.context", b.nodeType ? b : e || document, "assign"))), h);
  }, "assign"), a.fn.init.prototype = cc11001100_hook("a.fn.init.prototype", a.fn, "assign"), a.find = cc11001100_hook("a.find", function (a) {
    var b = cc11001100_hook("b", Array.prototype.slice.call(arguments), "var-init");
    if ("string" == typeof a && u.test(a)) try {
      document.querySelector(a);
    } catch (c) {
      a = cc11001100_hook("a", a.replace(v, function (a, b, c, d) {
        return "[" + b + c + '"' + d + '"]';
      }), "assign");
      try {
        document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = cc11001100_hook("b[0]", a, "assign");
      } catch (e) {
        d("Attribute selector with '#' was not fixed: " + b[0]);
      }
    }
    return r.apply(this, b);
  }, "assign");
  var x;
  for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = cc11001100_hook("a.find[x]", r[x], "assign"));
  a.parseJSON = cc11001100_hook("a.parseJSON", function (a) {
    return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null);
  }, "assign"), a.uaMatch = cc11001100_hook("a.uaMatch", function (a) {
    a = cc11001100_hook("a", a.toLowerCase(), "assign");
    var b = cc11001100_hook("b", /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [], "var-init");
    return {
      browser: cc11001100_hook("browser", b[1] || "", "object-key-init"),
      version: cc11001100_hook("version", b[2] || "0", "object-key-init")
    };
  }, "assign"), a.browser || (o = cc11001100_hook("o", a.uaMatch(navigator.userAgent), "assign"), p = cc11001100_hook("p", {}, "assign"), o.browser && (p[o.browser] = cc11001100_hook("p[o.browser]", !0, "assign"), p.version = cc11001100_hook("p.version", o.version, "assign")), p.chrome ? p.webkit = cc11001100_hook("p.webkit", !0, "assign") : p.webkit && (p.safari = cc11001100_hook("p.safari", !0, "assign")), a.browser = cc11001100_hook("a.browser", p, "assign")), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = cc11001100_hook("a.boxModel", a.support.boxModel = cc11001100_hook("a.support.boxModel", "CSS1Compat" === document.compatMode, "assign"), "assign"), e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = cc11001100_hook("a.sub", function () {
    function b(a, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      return new b.fn.init(a, c);
    }
    a.extend(!0, b, this), b.superclass = cc11001100_hook("b.superclass", this, "assign"), b.fn = cc11001100_hook("b.fn", b.prototype = cc11001100_hook("b.prototype", this(), "assign"), "assign"), b.fn.constructor = cc11001100_hook("b.fn.constructor", b, "assign"), b.sub = cc11001100_hook("b.sub", this.sub, "assign"), b.fn.init = cc11001100_hook("b.fn.init", function (d, e) {
      var f = cc11001100_hook("f", a.fn.init.call(this, d, e, c), "var-init");
      return f instanceof b ? f : b(f);
    }, "assign"), b.fn.init.prototype = cc11001100_hook("b.fn.init.prototype", b.fn, "assign");
    var c = cc11001100_hook("c", b(document), "var-init");
    return d("jQuery.sub() is deprecated"), b;
  }, "assign"), a.fn.size = cc11001100_hook("a.fn.size", function () {
    return d("jQuery.fn.size() is deprecated; use the .length property"), this.length;
  }, "assign");
  var y = cc11001100_hook("y", !1, "var-init");
  a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
    var d = cc11001100_hook("d", a.cssHooks[c] && a.cssHooks[c].get, "var-init");
    d && (a.cssHooks[c].get = cc11001100_hook("a.cssHooks[c].get", function () {
      var a;
      return y = cc11001100_hook("y", !0, "assign"), a = cc11001100_hook("a", d.apply(this, arguments), "assign"), y = cc11001100_hook("y", !1, "assign"), a;
    }, "assign"));
  }), a.swap = cc11001100_hook("a.swap", function (a, b, c, e) {
    var f,
      g,
      h = cc11001100_hook("h", {}, "var-init");
    y || d("jQuery.swap() is undocumented and deprecated");
    for (g in b) h[g] = cc11001100_hook("h[g]", a.style[g], "assign"), a.style[g] = cc11001100_hook("a.style[g]", b[g], "assign");
    f = cc11001100_hook("f", c.apply(a, e || []), "assign");
    for (g in b) a.style[g] = cc11001100_hook("a.style[g]", h[g], "assign");
    return f;
  }, "assign"), a.ajaxSetup({
    converters: {
      "text json": cc11001100_hook("text json", a.parseJSON, "object-key-init")
    }
  });
  var z = cc11001100_hook("z", a.fn.data, "var-init");
  a.fn.data = cc11001100_hook("a.fn.data", function (b) {
    var e,
      f,
      g = cc11001100_hook("g", this[0], "var-init");
    return !g || "events" !== b || 1 !== arguments.length || (e = cc11001100_hook("e", a.data(g, b), "assign"), f = cc11001100_hook("f", a._data(g, b), "assign"), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f);
  }, "assign");
  var A = cc11001100_hook("A", /\/(java|ecma)script/i, "var-init");
  a.clean || (a.clean = cc11001100_hook("a.clean", function (b, c, e, f) {
    c = cc11001100_hook("c", c || document, "assign"), c = cc11001100_hook("c", !c.nodeType && c[0] || c, "assign"), c = cc11001100_hook("c", c.ownerDocument || c, "assign"), d("jQuery.clean() is deprecated");
    var g,
      h,
      i,
      j,
      k = cc11001100_hook("k", [], "var-init");
    if (a.merge(k, a.buildFragment(b, c).childNodes), e) for (i = cc11001100_hook("i", function (a) {
      return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0;
    }, "assign"), g = cc11001100_hook("g", 0, "assign"); null != (h = cc11001100_hook("h", k[g], "assign")); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = cc11001100_hook("j", a.grep(a.merge([], h.getElementsByTagName("script")), i), "assign"), k.splice.apply(k, [g + 1, 0].concat(j)), g += cc11001100_hook("g", j.length, "assign")));
    return k;
  }, "assign"));
  var B = cc11001100_hook("B", a.event.add, "var-init"),
    C = cc11001100_hook("C", a.event.remove, "var-init"),
    D = cc11001100_hook("D", a.event.trigger, "var-init"),
    E = cc11001100_hook("E", a.fn.toggle, "var-init"),
    F = cc11001100_hook("F", a.fn.live, "var-init"),
    G = cc11001100_hook("G", a.fn.die, "var-init"),
    H = cc11001100_hook("H", a.fn.load, "var-init"),
    I = cc11001100_hook("I", "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", "var-init"),
    J = cc11001100_hook("J", new RegExp("\\b(?:" + I + ")\\b"), "var-init"),
    K = cc11001100_hook("K", /(?:^|\s)hover(\.\S+|)\b/, "var-init"),
    L = function (b) {
      return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"));
    };
  a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = cc11001100_hook("a.event.add", function (a, b, c, e, f) {
    a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f);
  }, "assign"), a.event.remove = cc11001100_hook("a.event.remove", function (a, b, c, d, e) {
    C.call(this, a, L(b) || "", c, d, e);
  }, "assign"), a.each(["load", "unload", "error"], function (b, c) {
    a.fn[c] = cc11001100_hook("a.fn[c]", function () {
      var a = cc11001100_hook("a", Array.prototype.slice.call(arguments, 0), "var-init");
      return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this));
    }, "assign");
  }), a.fn.toggle = cc11001100_hook("a.fn.toggle", function (b, c) {
    if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
    d("jQuery.fn.toggle(handler, handler...) is deprecated");
    var e = cc11001100_hook("e", arguments, "var-init"),
      f = cc11001100_hook("f", b.guid || a.guid++, "var-init"),
      g = cc11001100_hook("g", 0, "var-init"),
      h = function (c) {
        var d = cc11001100_hook("d", (a._data(this, "lastToggle" + b.guid) || 0) % g, "var-init");
        return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1;
      };
    for (h.guid = cc11001100_hook("h.guid", f, "assign"); g < e.length;) e[g++].guid = cc11001100_hook("e[g++].guid", f, "assign");
    return this.click(h);
  }, "assign"), a.fn.live = cc11001100_hook("a.fn.live", function (b, c, e) {
    return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this);
  }, "assign"), a.fn.die = cc11001100_hook("a.fn.die", function (b, c) {
    return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this);
  }, "assign"), a.event.trigger = cc11001100_hook("a.event.trigger", function (a, b, c, e) {
    return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e);
  }, "assign"), a.each(I.split("|"), function (b, c) {
    a.event.special[c] = cc11001100_hook("a.event.special[c]", {
      setup: function () {
        var b = cc11001100_hook("b", this, "var-init");
        return b !== document && (a.event.add(document, c + "." + a.guid, function () {
          a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0);
        }), a._data(this, c, a.guid++)), !1;
      },
      teardown: function () {
        return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1;
      }
    }, "assign");
  }), a.event.special.ready = cc11001100_hook("a.event.special.ready", {
    setup: function () {
      this === document && d("'ready' event is deprecated");
    }
  }, "assign");
  var M = cc11001100_hook("M", a.fn.andSelf || a.fn.addBack, "var-init"),
    N = cc11001100_hook("N", a.fn.find, "var-init");
  if (a.fn.andSelf = cc11001100_hook("a.fn.andSelf", function () {
    return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments);
  }, "assign"), a.fn.find = cc11001100_hook("a.fn.find", function (a) {
    var b = cc11001100_hook("b", N.apply(this, arguments), "var-init");
    return b.context = cc11001100_hook("b.context", this.context, "assign"), b.selector = cc11001100_hook("b.selector", this.selector ? this.selector + " " + a : a, "assign"), b;
  }, "assign"), a.Callbacks) {
    var O = cc11001100_hook("O", a.Deferred, "var-init"),
      P = cc11001100_hook("P", [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]], "var-init");
    a.Deferred = cc11001100_hook("a.Deferred", function (b) {
      var c = cc11001100_hook("c", O(), "var-init"),
        e = cc11001100_hook("e", c.promise(), "var-init");
      return c.pipe = cc11001100_hook("c.pipe", e.pipe = cc11001100_hook("e.pipe", function () {
        var b = cc11001100_hook("b", arguments, "var-init");
        return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
          a.each(P, function (f, g) {
            var h = cc11001100_hook("h", a.isFunction(b[f]) && b[f], "var-init");
            c[g[1]](function () {
              var b = cc11001100_hook("b", h && h.apply(this, arguments), "var-init");
              b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments);
            });
          }), b = cc11001100_hook("b", null, "assign");
        }).promise();
      }, "assign"), "assign"), c.isResolved = cc11001100_hook("c.isResolved", function () {
        return d("deferred.isResolved is deprecated"), "resolved" === c.state();
      }, "assign"), c.isRejected = cc11001100_hook("c.isRejected", function () {
        return d("deferred.isRejected is deprecated"), "rejected" === c.state();
      }, "assign"), b && b.call(c, c), c;
    }, "assign");
  }
}(jQuery, window);