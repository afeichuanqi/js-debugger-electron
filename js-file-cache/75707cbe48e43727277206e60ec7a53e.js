!function (t, n, e) {
  var a = cc11001100_hook("a", !0, "var-init"),
    r = cc11001100_hook("r", {
      isVisible: function (t) {
        var n = cc11001100_hook("n", t.getBoundingClientRect(), "var-init"),
          e = cc11001100_hook("e", n.width || n.right || 0 - n.left || 0, "var-init"),
          a = cc11001100_hook("a", n.height || n.bottom || 0 - n.top || 0, "var-init");
        return e > 0 && a > 0;
      },
      isInSight: function (e) {
        const a = cc11001100_hook("a", e.parentNode, "var-init"),
          r = cc11001100_hook("r", this.getDataset(a).pid, "var-init"),
          i = cc11001100_hook("i", this.getDataset(e).src, "var-init");
        if (-1 != n.cookie.indexOf("c_adb=") && -1 === i.indexOf("adBottom")) return !1;
        const c = cc11001100_hook("c", t.innerWidth, "var-init"),
          s = cc11001100_hook("s", ["476", "479", "480"], "var-init");
        if (c < 1720 && -1 != s.indexOf(r)) return !1;
        if ("indexSuperise_" + r in localStorage) return !1;
        var o = cc11001100_hook("o", e.getBoundingClientRect(), "var-init");
        if (this.isVisible(e)) {
          var d = cc11001100_hook("d", t.innerHeight, "var-init");
          return o.top <= d + 100;
        }
        return !1;
      },
      loadImg: function (t) {
        var n = cc11001100_hook("n", this, "var-init");
        if (!t.src) {
          var e = cc11001100_hook("e", n.getDataset(t).src, "var-init");
          t.src = cc11001100_hook("t.src", e, "assign");
        }
      },
      getDataset: function (t) {
        if (t.dataset) return t.dataset;
        var n = cc11001100_hook("n", t.attributes, "var-init"),
          e = cc11001100_hook("e", {}, "var-init");
        name, matchStr;
        for (var a = cc11001100_hook("a", 0, "var-init"); a < n.length; a++) matchStr = cc11001100_hook("matchStr", n[a].name.match(/^data-(.+)/), "assign"), matchStr = cc11001100_hook("matchStr", n[a].name.match(/^data-(.+)/), "assign"), matchStr && (name = cc11001100_hook("name", matchStr[1].replace(/-([\da-z])/gi, function (t, n) {
          return n.toUpperCase();
        }), "assign"), e[name] = cc11001100_hook("e[name]", n[a].value, "assign"));
        return e;
      },
      throttle: function (t) {
        var n = cc11001100_hook("n", null, "var-init");
        return function () {
          var e = cc11001100_hook("e", new Date(), "var-init"),
            a = cc11001100_hook("a", this, "var-init"),
            r = cc11001100_hook("r", arguments, "var-init");
          n || (n = cc11001100_hook("n", e, "assign")), e - n >= 500 && (t.apply(a, r), n = cc11001100_hook("n", e, "assign"));
        };
      },
      checkImgs: function () {
        for (var t = cc11001100_hook("t", this, "var-init"), n = cc11001100_hook("n", e(".pre-img-lasy"), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) t.isInSight(n[r]) && t.loadImg(n[r]);
        a = cc11001100_hook("a", !0, "assign");
      }
    }, "var-init");
  void 0 === t.csdn && (t.csdn = cc11001100_hook("t.csdn", {}, "assign")), t.csdn.trackad = cc11001100_hook("t.csdn.trackad", r, "assign"), e(function () {
    csdn.trackad.checkImgs(), e(t).on("scroll", function () {
      a && (a = cc11001100_hook("a", !1, "assign"), csdn.trackad.throttle(csdn.trackad.checkImgs()));
    }), e(t).on("resize", function () {
      e(this).width(), e(this).height();
      a && (a = cc11001100_hook("a", !1, "assign"), csdn.trackad.throttle(csdn.trackad.checkImgs()));
    });
  });
}(window, document, jQuery);