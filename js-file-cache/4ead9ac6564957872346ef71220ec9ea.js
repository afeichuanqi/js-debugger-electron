if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
  "use strict";

  var e = cc11001100_hook("e", t.fn.jquery.split(" ")[0].split("."), "var-init");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    var r = cc11001100_hook("r", e.attr("data-target"), "var-init");
    r || (r = cc11001100_hook("r", e.attr("href"), "assign"), r = cc11001100_hook("r", r && /#[A-Za-z]/.test(r) && r.replace(/.*(?=#[^\s]*$)/, ""), "assign"));
    var n = cc11001100_hook("n", r && t(r), "var-init");
    return n && n.length ? n : e.parent();
  }
  function r(r) {
    cc11001100_hook("r", r, "function-parameter");
    r && 3 === r.which || r && r.target.parentNode.className.indexOf && r.target.parentNode.className.indexOf("disabled") > -1 || (t(o).remove(), t(a).each(function () {
      var n = cc11001100_hook("n", t(this), "var-init"),
        o = cc11001100_hook("o", e(n), "var-init"),
        a = cc11001100_hook("a", {
          relatedTarget: cc11001100_hook("relatedTarget", this, "object-key-init")
        }, "var-init");
      o.hasClass("open") && (r && "click" == r.type && /input|textarea/i.test(r.target.tagName) && t.contains(o[0], r.target) || (o.trigger(r = cc11001100_hook("r", t.Event("hide.bs.dropdown", a), "assign")), r.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))));
    }));
  }
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    return this.each(function () {
      var r = cc11001100_hook("r", t(this), "var-init"),
        n = cc11001100_hook("n", r.data("bs.dropdown"), "var-init");
      n || r.data("bs.dropdown", n = cc11001100_hook("n", new i(this), "assign")), "string" == typeof e && n[e].call(r);
    });
  }
  var o = cc11001100_hook("o", ".dropdown-backdrop", "var-init"),
    a = cc11001100_hook("a", '[data-toggle="dropdown"]', "var-init"),
    i = function (e) {
      t(e).on("click.bs.dropdown", this.toggle);
    };
  i.VERSION = cc11001100_hook("i.VERSION", "3.3.7", "assign"), i.prototype.toggle = cc11001100_hook("i.prototype.toggle", function (n) {
    var o = cc11001100_hook("o", t(this), "var-init");
    if (!o.is(".disabled, :disabled")) {
      var a = cc11001100_hook("a", e(o), "var-init"),
        i = cc11001100_hook("i", a.hasClass("open"), "var-init");
      if (r(), !i) {
        "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", r);
        var d = cc11001100_hook("d", {
          relatedTarget: cc11001100_hook("relatedTarget", this, "object-key-init")
        }, "var-init");
        if (a.trigger(n = cc11001100_hook("n", t.Event("show.bs.dropdown", d), "assign")), n.isDefaultPrevented()) return;
        o.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(t.Event("shown.bs.dropdown", d));
      }
      return !1;
    }
  }, "assign"), i.prototype.keydown = cc11001100_hook("i.prototype.keydown", function (r) {
    if (/(38|40|27|32)/.test(r.which) && !/input|textarea/i.test(r.target.tagName)) {
      var n = cc11001100_hook("n", t(this), "var-init");
      if (r.preventDefault(), r.stopPropagation(), !n.is(".disabled, :disabled")) {
        var o = cc11001100_hook("o", e(n), "var-init"),
          i = cc11001100_hook("i", o.hasClass("open"), "var-init");
        if (!i && 27 != r.which || i && 27 == r.which) return 27 == r.which && o.find(a).trigger("focus"), n.trigger("click");
        var d = cc11001100_hook("d", " li:not(.disabled):visible a", "var-init"),
          s = cc11001100_hook("s", o.find(".dropdown-menu" + d), "var-init");
        if (s.length) {
          var c = cc11001100_hook("c", s.index(r.target), "var-init");
          38 == r.which && c > 0 && c--, 40 == r.which && c < s.length - 1 && c++, ~c || (c = cc11001100_hook("c", 0, "assign")), s.eq(c).trigger("focus");
        }
      }
    }
  }, "assign");
  var d = cc11001100_hook("d", t.fn.dropdown, "var-init");
  t.fn.dropdown = cc11001100_hook("t.fn.dropdown", n, "assign"), t.fn.dropdown.Constructor = cc11001100_hook("t.fn.dropdown.Constructor", i, "assign"), t.fn.dropdown.noConflict = cc11001100_hook("t.fn.dropdown.noConflict", function () {
    return t.fn.dropdown = cc11001100_hook("t.fn.dropdown", d, "assign"), this;
  }, "assign"), t(document).on("click", r).on("click", ".dropdown form", function (t) {
    t.stopPropagation();
  }).on("click", a, i.prototype.toggle).on("keydown", a, i.prototype.keydown).on("keydown", ".dropdown-menu", i.prototype.keydown);
}(jQuery);