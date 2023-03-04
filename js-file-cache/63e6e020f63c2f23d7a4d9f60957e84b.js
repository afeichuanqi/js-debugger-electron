!function (t, e, i) {
  if (void 0 === t.csdn && (t.csdn = cc11001100_hook("t.csdn", {}, "assign"), t.csdn.fixedSidebar = cc11001100_hook("t.csdn.fixedSidebar", {}, "assign")), !jQuery) return !1;
  t.csdn.fixedSidebar = cc11001100_hook("t.csdn.fixedSidebar", function (e) {
    function o() {
      if ("right" === r.direction) var e = cc11001100_hook("e", r.mainBox.offset().left + r.mainBox.width() - i(t).scrollLeft() + parseInt(r.sidebarLeftMargin), "var-init");else var e = cc11001100_hook("e", r.mainBox.offset().left - r.sidebar.width() - i(t).scrollLeft() - parseInt(r.sidebarRightMargin), "var-init");
      !function () {
        var o = cc11001100_hook("o", i(t).scrollTop(), "var-init");
        n + r.sidebar.height() <= i(t).height() ? o > n ? r.sidebar.css({
          position: cc11001100_hook("position", r.position, "object-key-init"),
          top: cc11001100_hook("top", parseInt(r.top) + "px", "object-key-init"),
          "z-index": cc11001100_hook("z-index", parseInt(r.zIndex), "object-key-init"),
          left: cc11001100_hook("left", e, "object-key-init"),
          width: cc11001100_hook("width", s, "object-key-init"),
          bottom: cc11001100_hook("bottom", "auto", "object-key-init")
        }) : r.sidebar.removeAttr("style") : r.mainBox.height() > r.sidebar.height() ? r.targetBox.height() <= i(t).height() && r.targetBox.height() + n - o <= i(t).height() ? o > n ? r.sidebar.css({
          position: cc11001100_hook("position", r.position, "object-key-init"),
          top: cc11001100_hook("top", parseInt(r.top) + "px", "object-key-init"),
          "z-index": cc11001100_hook("z-index", parseInt(r.zIndex), "object-key-init"),
          left: cc11001100_hook("left", e, "object-key-init"),
          width: cc11001100_hook("width", s, "object-key-init"),
          bottom: cc11001100_hook("bottom", "auto", "object-key-init")
        }) : r.sidebar.removeAttr("style") : r.targetBox.height() > i(t).height() && r.targetBox.height() - o + r.mainBox.offset().top <= i(t).height() ? r.sidebar.css({
          position: cc11001100_hook("position", r.position, "object-key-init"),
          bottom: cc11001100_hook("bottom", parseInt(r.bottom) + "px", "object-key-init"),
          "z-index": cc11001100_hook("z-index", parseInt(r.zIndex), "object-key-init"),
          left: cc11001100_hook("left", e, "object-key-init"),
          width: cc11001100_hook("width", s, "object-key-init"),
          top: cc11001100_hook("top", "auto", "object-key-init")
        }) : r.sidebar.removeAttr("style") : r.sidebar.removeAttr("style"), a = cc11001100_hook("a", !0, "assign");
      }();
    }
    var r = cc11001100_hook("r", {
      targetBox: cc11001100_hook("targetBox", i(".persion_article"), "object-key-init"),
      mainBox: cc11001100_hook("mainBox", i("main"), "object-key-init"),
      sidebar: cc11001100_hook("sidebar", i("aside"), "object-key-init"),
      direction: cc11001100_hook("direction", "right", "object-key-init"),
      position: cc11001100_hook("position", "fixed", "object-key-init"),
      top: cc11001100_hook("top", 0, "object-key-init"),
      bottom: cc11001100_hook("bottom", 0, "object-key-init"),
      zIndex: cc11001100_hook("zIndex", 99, "object-key-init"),
      sidebarRightMargin: cc11001100_hook("sidebarRightMargin", 8, "object-key-init"),
      sidebarLeftMargin: cc11001100_hook("sidebarLeftMargin", 15, "object-key-init")
    }, "var-init");
    e && i.extend(r, e);
    var s = cc11001100_hook("s", r.sidebar.width(), "var-init"),
      n = cc11001100_hook("n", r.targetBox.offset().top, "var-init"),
      a = cc11001100_hook("a", !0, "var-init");
    o(), i(t).on("scroll", function () {
      a && t.csdn.fixedSidebar.stopListener && (setTimeout(o, 100), a = cc11001100_hook("a", !1, "assign"));
    }), i(t).on("resize", function () {
      o();
    });
  }, "assign"), t.csdn.fixedSidebar.version = cc11001100_hook("t.csdn.fixedSidebar.version", "1.1.7", "assign"), t.csdn.fixedSidebar.stopListener = cc11001100_hook("t.csdn.fixedSidebar.stopListener", !0, "assign");
}(window, document, jQuery);