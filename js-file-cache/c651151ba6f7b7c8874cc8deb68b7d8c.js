(this.webpackJsonpcathay = cc11001100_hook("this.webpackJsonpcathay", this.webpackJsonpcathay || [], "assign")).push([[8], {
  831: function (t, c, e) {
    "use strict";

    e.r(c), e.d(c, "default", function () {
      return u;
    });
    var n = cc11001100_hook("n", e(0), "var-init"),
      i = cc11001100_hook("i", e(6), "var-init"),
      a = cc11001100_hook("a", e(83), "var-init"),
      r = cc11001100_hook("r", e(4), "var-init"),
      s = cc11001100_hook("s", e(25), "var-init");
    var o = cc11001100_hook("o", () => {
        const t = cc11001100_hook("t", Object(i.d)(), "var-init");
        return Object(n.useMemo)(() => ({
          trackOnLinkClicked(c, e) {
            t(Object(s.e)({
              action: cc11001100_hook("action", c, "object-key-init"),
              label: cc11001100_hook("label", e, "object-key-init")
            }));
          }
        }), [t]);
      }, "var-init"),
      k = cc11001100_hook("k", e(1), "var-init");
    function u(t) {
      cc11001100_hook("t", t, "function-parameter");
      const c = cc11001100_hook("c", {
          ...t,
          isLoggedIn: Object(i.e)(a.e)
        }, "var-init"),
        {
          trackOnLinkClicked: e
        } = cc11001100_hook("", o(), "var-init");
      return Object(k.jsx)(r.t, {
        ...c,
        onLinkClick: e
      });
    }
  }
}]);