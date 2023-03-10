window.addComment = cc11001100_hook("window.addComment", function (u) {
  var p,
    v,
    f,
    y = cc11001100_hook("y", u.document, "var-init"),
    I = cc11001100_hook("I", {
      commentReplyClass: cc11001100_hook("commentReplyClass", "comment-reply-link", "object-key-init"),
      cancelReplyId: cc11001100_hook("cancelReplyId", "cancel-comment-reply-link", "object-key-init"),
      commentFormId: cc11001100_hook("commentFormId", "commentform", "object-key-init"),
      temporaryFormId: cc11001100_hook("temporaryFormId", "wp-temp-form-div", "object-key-init"),
      parentIdFieldId: cc11001100_hook("parentIdFieldId", "comment_parent", "object-key-init"),
      postIdFieldId: cc11001100_hook("postIdFieldId", "comment_post_ID", "object-key-init")
    }, "var-init"),
    e = cc11001100_hook("e", u.MutationObserver || u.WebKitMutationObserver || u.MozMutationObserver, "var-init"),
    o = cc11001100_hook("o", "querySelector" in y && "addEventListener" in u, "var-init"),
    n = cc11001100_hook("n", !!y.documentElement.dataset, "var-init");
  function t() {
    r(), e && new e(d).observe(y.body, {
      childList: cc11001100_hook("childList", !0, "object-key-init"),
      subTree: cc11001100_hook("subTree", !0, "object-key-init")
    });
  }
  function r(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (o && (p = cc11001100_hook("p", h(I.cancelReplyId), "assign"), v = cc11001100_hook("v", h(I.commentFormId), "assign"), p)) {
      p.addEventListener("touchstart", i), p.addEventListener("click", i);
      for (var t, n = cc11001100_hook("n", function (e) {
          var t = cc11001100_hook("t", I.commentReplyClass, "var-init");
          e && e.childNodes || (e = cc11001100_hook("e", y, "assign"));
          t = cc11001100_hook("t", y.getElementsByClassName ? e.getElementsByClassName(t) : e.querySelectorAll("." + t), "assign");
          return t;
        }(e), "var-init"), r = cc11001100_hook("r", 0, "var-init"), d = cc11001100_hook("d", n.length, "var-init"); r < d; r++) (t = cc11001100_hook("t", n[r], "assign")).addEventListener("touchstart", a), t.addEventListener("click", a);
    }
  }
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", h(I.temporaryFormId), "var-init");
    t && f && (h(I.parentIdFieldId).value = cc11001100_hook("h(I.parentIdFieldId).value", "0", "assign"), t.parentNode.replaceChild(f, t), this.style.display = cc11001100_hook("this.style.display", "none", "assign"), e.preventDefault());
  }
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", this, "var-init"),
      n = cc11001100_hook("n", l(t, "belowelement"), "var-init"),
      r = cc11001100_hook("r", l(t, "commentid"), "var-init"),
      d = cc11001100_hook("d", l(t, "respondelement"), "var-init"),
      t = cc11001100_hook("t", l(t, "postid"), "var-init");
    n && r && d && t && !1 === u.addComment.moveForm(n, r, d, t) && e.preventDefault();
  }
  function d(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", e.length, "var-init"); t--;) if (e[t].addedNodes.length) return void r();
  }
  function l(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return n ? e.dataset[t] : e.getAttribute("data-" + t);
  }
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    return y.getElementById(e);
  }
  return o && "loading" !== y.readyState ? t() : o && u.addEventListener("DOMContentLoaded", t, !1), {
    init: cc11001100_hook("init", r, "object-key-init"),
    moveForm: function (e, t, n, r) {
      var d = cc11001100_hook("d", h(e), "var-init");
      f = cc11001100_hook("f", h(n), "assign");
      var o,
        i,
        a,
        l,
        m = cc11001100_hook("m", h(I.parentIdFieldId), "var-init"),
        s = cc11001100_hook("s", h(I.postIdFieldId), "var-init");
      if (d && f && m) {
        l = cc11001100_hook("l", f, "assign"), e = cc11001100_hook("e", I.temporaryFormId, "assign"), (n = cc11001100_hook("n", h(e), "assign")) || ((n = cc11001100_hook("n", y.createElement("div"), "assign")).id = cc11001100_hook("(n = y.createElement(\"div\")).id", e, "assign"), n.style.display = cc11001100_hook("n.style.display", "none", "assign"), l.parentNode.insertBefore(n, l)), r && s && (s.value = cc11001100_hook("s.value", r, "assign")), m.value = cc11001100_hook("m.value", t, "assign"), p.style.display = cc11001100_hook("p.style.display", "", "assign"), d.parentNode.insertBefore(f, d.nextSibling), p.onclick = cc11001100_hook("p.onclick", function () {
          return !1;
        }, "assign");
        try {
          for (var c = cc11001100_hook("c", 0, "var-init"); c < v.elements.length; c++) if (o = cc11001100_hook("o", v.elements[c], "assign"), i = cc11001100_hook("i", !1, "assign"), "getComputedStyle" in u ? a = cc11001100_hook("a", u.getComputedStyle(o), "assign") : y.documentElement.currentStyle && (a = cc11001100_hook("a", o.currentStyle, "assign")), (o.offsetWidth <= 0 && o.offsetHeight <= 0 || "hidden" === a.visibility) && (i = cc11001100_hook("i", !0, "assign")), "hidden" !== o.type && !o.disabled && !i) {
            o.focus();
            break;
          }
        } catch (e) {}
        return !1;
      }
    }
  };
}(window), "assign");