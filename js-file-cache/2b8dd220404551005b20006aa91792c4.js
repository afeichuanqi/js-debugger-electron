"use strict";

(self.webpackChunkheifetz = cc11001100_hook("self.webpackChunkheifetz", self.webpackChunkheifetz || [], "assign")).push([[876], {
  36870: function (e, t, n) {
    n.r(t), n.d(t, {
      default: function () {
        return C;
      }
    });
    var o = cc11001100_hook("o", n(88483), "var-init"),
      r = cc11001100_hook("r", n(16600), "var-init"),
      i = cc11001100_hook("i", n(78194), "var-init"),
      l = cc11001100_hook("l", n(68562), "var-init"),
      d = cc11001100_hook("d", n(47859), "var-init"),
      s = cc11001100_hook("s", n(87363), "var-init"),
      u = cc11001100_hook("u", n(48457), "var-init"),
      c = cc11001100_hook("c", n(82096), "var-init"),
      a = cc11001100_hook("a", n(35575), "var-init"),
      h = cc11001100_hook("h", n(3404), "var-init"),
      Z = function (e) {
        return e.isInModal ? (0, l.tZ)(h.Box, {
          height: cc11001100_hook("height", 500, "object-key-init"),
          children: cc11001100_hook("children", (0, l.tZ)(a.u, (0, o.Z)({
            useAutoColumn: cc11001100_hook("useAutoColumn", !0, "object-key-init")
          }, e)), "object-key-init")
        }) : (0, l.tZ)(h.Box, {
          height: cc11001100_hook("height", "100vh", "object-key-init"),
          pb: cc11001100_hook("pb", "32px", "object-key-init"),
          children: cc11001100_hook("children", (0, l.tZ)(a.u, (0, o.Z)({
            useAutoColumn: cc11001100_hook("useAutoColumn", !0, "object-key-init")
          }, e)), "object-key-init")
        });
      },
      p = cc11001100_hook("p", n(91355), "var-init"),
      f = cc11001100_hook("f", n(71103), "var-init");
    var v = cc11001100_hook("v", n(41315), "var-init"),
      g = cc11001100_hook("g", n(53005), "var-init"),
      k = cc11001100_hook("k", n(26223), "var-init"),
      b = cc11001100_hook("b", n(12232), "var-init"),
      y = function (e) {
        var t = cc11001100_hook("t", (0, k.F)(), "var-init"),
          n = cc11001100_hook("n", e.List, "var-init"),
          o = cc11001100_hook("o", e.selectedId, "var-init"),
          r = cc11001100_hook("r", e.handleClickSearchItem, "var-init"),
          i = cc11001100_hook("i", e.handleChangeStage, "var-init");
        return (0, l.BX)("div", {
          children: cc11001100_hook("children", [(0, l.tZ)("div", {
            children: cc11001100_hook("children", n.map(function (e) {
              if (e.id) return (0, l.BX)("div", {
                onClick: function () {
                  return r(e.id);
                },
                onKeyDown: function () {
                  return r(e.id);
                },
                css: {
                  background: cc11001100_hook("background", "none", "object-key-init"),
                  border: cc11001100_hook("border", "none", "object-key-init"),
                  display: cc11001100_hook("display", "flex", "object-key-init"),
                  width: cc11001100_hook("width", "100%", "object-key-init"),
                  alignItems: cc11001100_hook("alignItems", "center", "object-key-init"),
                  padding: cc11001100_hook("padding", "12px 0", "object-key-init"),
                  textAlign: cc11001100_hook("textAlign", "left", "object-key-init"),
                  cursor: cc11001100_hook("cursor", "pointer", "object-key-init"),
                  borderBottom: cc11001100_hook("borderBottom", "1px solid ".concat(t.colors.GBK10A), "object-key-init"),
                  outline: cc11001100_hook("outline", "none", "object-key-init"),
                  justifyContent: cc11001100_hook("justifyContent", "space-between", "object-key-init")
                },
                role: cc11001100_hook("role", "button", "object-key-init"),
                tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init"),
                children: cc11001100_hook("children", [e.data, o === e.id ? (0, l.tZ)(v.g, {
                  css: {
                    fill: cc11001100_hook("fill", t.colors.GBL01A, "object-key-init"),
                    width: cc11001100_hook("width", "18px", "object-key-init"),
                    height: cc11001100_hook("height", "18px", "object-key-init")
                  }
                }) : (0, l.tZ)(g.Zo, {
                  css: {
                    fill: cc11001100_hook("fill", t.colors.GBK07A, "object-key-init"),
                    width: cc11001100_hook("width", 18, "object-key-init"),
                    height: cc11001100_hook("height", 18, "object-key-init")
                  }
                })], "object-key-init")
              }, e.id);
            }), "object-key-init")
          }), (0, l.tZ)("div", {
            css: {
              marginTop: cc11001100_hook("marginTop", "32px", "object-key-init"),
              display: cc11001100_hook("display", "flex", "object-key-init"),
              width: cc11001100_hook("width", "100%", "object-key-init"),
              "*+*": {
                marginLeft: cc11001100_hook("marginLeft", "16px", "object-key-init")
              }
            },
            children: cc11001100_hook("children", (0, l.tZ)(b.ZP, {
              disabled: cc11001100_hook("disabled", !o, "object-key-init"),
              onClick: cc11001100_hook("onClick", i, "object-key-init"),
              color: cc11001100_hook("color", "blue", "object-key-init"),
              preset: cc11001100_hook("preset", "primary", "object-key-init"),
              children: cc11001100_hook("children", "下一步", "object-key-init")
            }), "object-key-init")
          })], "object-key-init")
        });
      },
      C = function (e) {
        var t,
          n = cc11001100_hook("n", e.doReport, "var-init"),
          a = cc11001100_hook("a", e.onClose, "var-init"),
          h = cc11001100_hook("h", e.urlToken, "var-init"),
          v = cc11001100_hook("v", e.urlTokens, "var-init"),
          g = cc11001100_hook("g", e.type, "var-init"),
          k = cc11001100_hook("k", e.shown, "var-init"),
          b = cc11001100_hook("b", e.List, "var-init"),
          C = cc11001100_hook("C", "search_suggested_word" === g, "var-init"),
          m = cc11001100_hook("m", (0, i.Z)((0, s.useState)(0), 2), "var-init"),
          x = cc11001100_hook("x", m[0], "var-init"),
          I = cc11001100_hook("I", m[1], "var-init"),
          w = cc11001100_hook("w", (0, i.Z)((0, s.useState)(void 0), 2), "var-init"),
          B = cc11001100_hook("B", w[0], "var-init"),
          S = cc11001100_hook("S", w[1], "var-init"),
          A = cc11001100_hook("A", (0, d.Z)(function () {
            C && (S(void 0), I(1)), a();
          }), "var-init");
        (0, s.useEffect)(function () {
          C && I(1);
        }, [C]);
        var L,
          T,
          K = cc11001100_hook("K", null !== (t = cc11001100_hook("t", e.title, "assign")) && void 0 !== t ? t : "举报", "var-init"),
          P = cc11001100_hook("P", (0, d.Z)(function (e) {
            var t = cc11001100_hook("t", e.reason, "var-init"),
              i = cc11001100_hook("i", e.reasonId, "var-init"),
              l = cc11001100_hook("l", e.customReason, "var-init"),
              d = cc11001100_hook("d", e.url, "var-init"),
              s = cc11001100_hook("s", e.pictures, "var-init"),
              u = cc11001100_hook("u", C ? B : h, "var-init");
            return n((0, r.Z)((0, o.Z)({}, u && {
              resourceId: cc11001100_hook("resourceId", u, "object-key-init")
            }, v && {
              resourceIds: cc11001100_hook("resourceIds", v, "object-key-init")
            }), {
              type: cc11001100_hook("type", g, "object-key-init"),
              reasonType: cc11001100_hook("reasonType", t, "object-key-init"),
              reasonId: cc11001100_hook("reasonId", i, "object-key-init"),
              customReason: cc11001100_hook("customReason", l, "object-key-init"),
              url: cc11001100_hook("url", d, "object-key-init"),
              pictures: cc11001100_hook("pictures", s, "object-key-init")
            })).then(function () {
              a();
            });
          }), "var-init"),
          j = cc11001100_hook("j", function (e, t) {
            var n = cc11001100_hook("n", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, "var-init"),
              i = cc11001100_hook("i", n.selectedKey, "var-init"),
              l = cc11001100_hook("l", void 0 === i ? "selectedProps" : i, "var-init"),
              d = cc11001100_hook("d", n.dropedKey, "var-init"),
              s = cc11001100_hook("s", void 0 === d ? "dropedProps" : d, "var-init");
            return Object.keys(e).reduce(function (n, i) {
              var d = cc11001100_hook("d", t.includes(i) ? l : s, "var-init");
              return (0, r.Z)((0, o.Z)({}, n), (0, f.Z)({}, d, (0, r.Z)((0, o.Z)({}, n[d]), (0, f.Z)({}, i, e[i]))));
            }, {});
          }(e, Object.keys(c.Z.propTypes)), "var-init"),
          G = cc11001100_hook("G", j.selectedProps, "var-init"),
          R = cc11001100_hook("R", j.dropedProps, "var-init");
        return (0, l.BX)(l.HY, {
          children: cc11001100_hook("children", [(0, l.tZ)(c.Z, (0, r.Z)((0, o.Z)({
            title: cc11001100_hook("title", "举报", "object-key-init"),
            subtitle: cc11001100_hook("subtitle", "哪些联想词属于不适内容", "object-key-init"),
            onClose: cc11001100_hook("onClose", A, "object-key-init")
          }, G), {
            children: cc11001100_hook("children", k && 1 === x && (0, l.tZ)(y, {
              List: cc11001100_hook("List", b, "object-key-init"),
              selectedId: cc11001100_hook("selectedId", B, "object-key-init"),
              handleClickSearchItem: cc11001100_hook("handleClickSearchItem", S, "object-key-init"),
              handleChangeStage: function () {
                return I(0);
              }
            }), "object-key-init")
          })), k && 0 === x && (0, l.tZ)(c.Z, (0, r.Z)((0, o.Z)({
            title: cc11001100_hook("title", K, "object-key-init"),
            onClose: cc11001100_hook("onClose", A, "object-key-init")
          }, G), {
            children: cc11001100_hook("children", (0, l.tZ)(u.eV, {
              content: {
                type: cc11001100_hook("type", p.LA[g] || "Unknown", "object-key-init"),
                token: cc11001100_hook("token", (null !== (L = cc11001100_hook("L", null != B ? B : h, "assign")) && void 0 !== L ? L : v).toString(), "object-key-init")
              },
              children: cc11001100_hook("children", (0, l.tZ)(Z, (0, r.Z)((0, o.Z)({
                isInModal: cc11001100_hook("isInModal", !0, "object-key-init"),
                handleSubmit: cc11001100_hook("handleSubmit", P, "object-key-init")
              }, R), {
                type: cc11001100_hook("type", g, "object-key-init"),
                urlToken: cc11001100_hook("urlToken", null !== (T = cc11001100_hook("T", null != B ? B : h, "assign")) && void 0 !== T ? T : v, "object-key-init")
              })), "object-key-init")
            }), "object-key-init")
          }))], "object-key-init")
        });
      };
  }
}]);
//# sourceMappingURL=report_modals.8d144b1af15b97562db2.js.map