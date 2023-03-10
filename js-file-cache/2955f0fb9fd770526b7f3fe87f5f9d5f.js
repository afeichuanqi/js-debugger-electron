"use strict";

(self.webpackChunkheifetz = cc11001100_hook("self.webpackChunkheifetz", self.webpackChunkheifetz || [], "assign")).push([[2033], {
  6732: function (e, n, o) {
    o.r(n), o.d(n, {
      default: function () {
        return N;
      }
    });
    var t = cc11001100_hook("t", o(21620), "var-init"),
      i = cc11001100_hook("i", o(61869), "var-init"),
      a = cc11001100_hook("a", o(84421), "var-init"),
      r = cc11001100_hook("r", o(88483), "var-init"),
      l = cc11001100_hook("l", o(32554), "var-init"),
      s = cc11001100_hook("s", o(68562), "var-init"),
      c = cc11001100_hook("c", o(13424), "var-init"),
      d = cc11001100_hook("d", o(47112), "var-init"),
      u = cc11001100_hook("u", o.n(d), "var-init"),
      p = cc11001100_hook("p", o(75926), "var-init"),
      v = cc11001100_hook("v", o.n(p), "var-init"),
      h = cc11001100_hook("h", o(87363), "var-init"),
      g = cc11001100_hook("g", o(70175), "var-init"),
      m = cc11001100_hook("m", o(70577), "var-init"),
      b = cc11001100_hook("b", o(17222), "var-init"),
      f = cc11001100_hook("f", o(49236), "var-init"),
      Z = cc11001100_hook("Z", o(72351), "var-init"),
      k = cc11001100_hook("k", o(92799), "var-init"),
      w = function (e) {
        var n = cc11001100_hook("n", e.data, "var-init");
        return (0, s.tZ)(c.m7, {
          data: cc11001100_hook("data", (0, h.useMemo)(function () {
            var e, o;
            return {
              name: cc11001100_hook("name", n.verb, "object-key-init"),
              link: cc11001100_hook("link", n.targetLink, "object-key-init"),
              linkText: cc11001100_hook("linkText", n.entryVerb, "object-key-init"),
              iconUrl: cc11001100_hook("iconUrl", null === (e = cc11001100_hook("e", n.pictures, "assign")) || void 0 === e || null === (o = cc11001100_hook("o", e[0], "assign")) || void 0 === o ? void 0 : o.url, "object-key-init")
            };
          }, [n]), "object-key-init")
        });
      },
      L = function (e) {
        var n = cc11001100_hook("n", e.data, "var-init"),
          o = cc11001100_hook("o", n.id, "var-init"),
          t = cc11001100_hook("t", n.title, "var-init"),
          i = cc11001100_hook("i", (0, k.dD)(), "var-init"),
          a = cc11001100_hook("a", "https://www.zhihu.com/zvideo/campaign/".concat(o), "var-init");
        return (0, s.tZ)(f.r, {
          trackCardShow: cc11001100_hook("trackCardShow", !0, "object-key-init"),
          view: {
            id: cc11001100_hook("id", 7726, "object-key-init")
          },
          extra: {
            button: {
              text: cc11001100_hook("text", t, "object-key-init")
            },
            link: {
              url: cc11001100_hook("url", a, "object-key-init")
            }
          },
          children: cc11001100_hook("children", (0, s.tZ)(c.m7, {
            data: cc11001100_hook("data", (0, h.useMemo)(function () {
              return {
                name: cc11001100_hook("name", "视频活动", "object-key-init"),
                link: cc11001100_hook("link", a, "object-key-init"),
                linkText: cc11001100_hook("linkText", t, "object-key-init")
              };
            }, [a, t]), "object-key-init"),
            shouldTrackShow: cc11001100_hook("shouldTrackShow", !0, "object-key-init"),
            "data-za-not-track-link": cc11001100_hook("data-za-not-track-link", !0, "object-key-init"),
            zaText: cc11001100_hook("zaText", t, "object-key-init"),
            extra: {
              link: {
                url: cc11001100_hook("url", a, "object-key-init")
              }
            },
            onClick: function (e) {
              b.Z.trackEvent(e.target, {
                id: cc11001100_hook("id", 7727, "object-key-init"),
                action: cc11001100_hook("action", "OpenUrl", "object-key-init")
              }, {
                button: {
                  text: cc11001100_hook("text", t, "object-key-init")
                },
                link: {
                  url: cc11001100_hook("url", a, "object-key-init")
                }
              }), i && (e.preventDefault(), (0, Z.rH)("zhihu://zvideo/campaign/".concat(o)));
            }
          }), "object-key-init")
        });
      },
      z = cc11001100_hook("z", o(79586), "var-init"),
      I = cc11001100_hook("I", o(8245), "var-init"),
      C = cc11001100_hook("C", o(37148), "var-init"),
      P = cc11001100_hook("P", o(93238), "var-init"),
      R = cc11001100_hook("R", o(30060), "var-init"),
      B = cc11001100_hook("B", o(5625), "var-init"),
      M = cc11001100_hook("M", function (e) {
        (0, a.Z)(o, e);
        var n = cc11001100_hook("n", (0, l.Z)(o), "var-init");
        function o() {
          return (0, t.Z)(this, o), n.apply(this, arguments);
        }
        return o.prototype.render = cc11001100_hook("o.prototype.render", function () {
          var e = cc11001100_hook("e", this.props, "var-init"),
            n = cc11001100_hook("n", e.onClose, "var-init"),
            o = cc11001100_hook("o", e.shown, "var-init"),
            t = cc11001100_hook("t", e.data, "var-init"),
            i = cc11001100_hook("i", e.paging, "var-init"),
            a = cc11001100_hook("a", void 0 === i ? {} : i, "var-init"),
            r = cc11001100_hook("r", a.isEnd, "var-init"),
            l = cc11001100_hook("l", void 0 !== r && r, "var-init"),
            c = cc11001100_hook("c", a.isLoading, "var-init"),
            d = cc11001100_hook("d", void 0 !== c && c, "var-init"),
            u = cc11001100_hook("u", a.totals, "var-init"),
            p = cc11001100_hook("p", e.loadAnswerRecognizerList, "var-init"),
            v = cc11001100_hook("v", e.answerId, "var-init");
          return (0, s.tZ)(C.Z, {
            size: cc11001100_hook("size", "fullPage", "object-key-init"),
            onClose: cc11001100_hook("onClose", n, "object-key-init"),
            children: cc11001100_hook("children", o && (0, s.BX)("div", {
              className: cc11001100_hook("className", "RecognizerListModal", "object-key-init"),
              children: cc11001100_hook("children", [(0, s.BX)("div", {
                className: cc11001100_hook("className", "RecognizerListModal-header", "object-key-init"),
                children: cc11001100_hook("children", ["已有 ", u || "-", " 位用户对该回答送出了专业徽章", (0, s.tZ)("div", {
                  className: cc11001100_hook("className", "RecognizerListModal-headerDescription", "object-key-init"),
                  children: cc11001100_hook("children", "社区内具有专业创作水平的用户可以对其他创作用户送出「专业徽章」，用于认可回答的专业性，以示对其他用户创作专业内容的鼓励", "object-key-init")
                })], "object-key-init")
              }), (0, s.tZ)(z.ZP, {
                isDrained: cc11001100_hook("isDrained", l, "object-key-init"),
                isLoading: cc11001100_hook("isLoading", d, "object-key-init"),
                onLoad: function () {
                  p(v);
                },
                children: cc11001100_hook("children", t.map(function (e) {
                  return (0, s.tZ)(P.Z, {
                    className: cc11001100_hook("className", "UserItem", "object-key-init"),
                    user: cc11001100_hook("user", e, "object-key-init")
                  }, e.id);
                }), "object-key-init")
              })], "object-key-init")
            }), "object-key-init")
          });
        }, "assign"), o;
      }(h.Component), "var-init");
    M.propTypes = cc11001100_hook("M.propTypes", {
      onClose: cc11001100_hook("onClose", v().func.isRequired, "object-key-init"),
      shown: cc11001100_hook("shown", v().bool.isRequired, "object-key-init"),
      answerId: cc11001100_hook("answerId", v().number.isRequired, "object-key-init")
    }, "assign");
    var y = cc11001100_hook("y", (0, I.connect)(function (e, n) {
        var o = cc11001100_hook("o", (0, R.KR)(e, n.answerId) || {}, "var-init"),
          t = cc11001100_hook("t", o.data, "var-init"),
          i = cc11001100_hook("i", void 0 === t ? [] : t, "var-init"),
          a = cc11001100_hook("a", o.paging, "var-init"),
          r = cc11001100_hook("r", void 0 === a ? {} : a, "var-init");
        return {
          data: cc11001100_hook("data", i.map(function (n) {
            return (0, B.np)(e, {
              urlToken: cc11001100_hook("urlToken", n, "object-key-init")
            });
          }), "object-key-init"),
          paging: cc11001100_hook("paging", r, "object-key-init")
        };
      }, {
        loadAnswerRecognizerList: cc11001100_hook("loadAnswerRecognizerList", R.gO, "object-key-init")
      })(M), "var-init"),
      D = cc11001100_hook("D", function (e) {
        (0, a.Z)(o, e);
        var n = cc11001100_hook("n", (0, l.Z)(o), "var-init");
        function o() {
          var e;
          return (0, t.Z)(this, o), (e = cc11001100_hook("e", n.apply(this, arguments), "assign")).state = cc11001100_hook("(e = n.apply(this, arguments)).state", {
            recognizerListModalShown: cc11001100_hook("recognizerListModalShown", !1, "object-key-init")
          }, "assign"), e.handlePositiveLabelClick = cc11001100_hook("e.handlePositiveLabelClick", function (n, o, t) {
            "professional" === t && e.toggleRecognizerModal();
          }, "assign"), e.toggleRecognizerModal = cc11001100_hook("e.toggleRecognizerModal", function () {
            e.setState({
              recognizerListModalShown: cc11001100_hook("recognizerListModalShown", !e.state.recognizerListModalShown, "object-key-init")
            });
          }, "assign"), e;
        }
        return o.prototype.render = cc11001100_hook("o.prototype.render", function () {
          var e = cc11001100_hook("e", this.props, "var-init"),
            n = cc11001100_hook("n", e.data, "var-init"),
            o = cc11001100_hook("o", e.item, "var-init"),
            t = cc11001100_hook("t", e.collapseReasonProps, "var-init"),
            i = cc11001100_hook("i", e.abnormalDetailProps, "var-init"),
            a = cc11001100_hook("a", e.commercialProps, "var-init"),
            l = cc11001100_hook("l", e.annotationProps, "var-init"),
            d = cc11001100_hook("d", e.editing, "var-init"),
            p = cc11001100_hook("p", e.className, "var-init"),
            v = cc11001100_hook("v", this.state.recognizerListModalShown, "var-init"),
            h = cc11001100_hook("h", this.positiveLabel, "var-init");
          return (0, s.BX)("div", {
            className: cc11001100_hook("className", u()("LabelContainer-wrapper", p), "object-key-init"),
            children: cc11001100_hook("children", [(0, s.tZ)(c.Rz, {
              className: cc11001100_hook("className", "LabelContainer", "object-key-init"),
              answerCollapsed: cc11001100_hook("answerCollapsed", Boolean(t && !d) && (0, s.tZ)(c.ZV, (0, r.Z)({}, t)), "object-key-init"),
              answerAbnormal: cc11001100_hook("answerAbnormal", Boolean(i && !d) && (0, s.tZ)(c.BM, (0, r.Z)({}, i)), "object-key-init"),
              thanksForInviting: cc11001100_hook("thanksForInviting", this.thanksForInviting, "object-key-init"),
              positive: cc11001100_hook("positive", h, "object-key-init"),
              annotation: cc11001100_hook("annotation", Boolean(l) && (0, s.tZ)(c.q6, (0, r.Z)({}, l)), "object-key-init"),
              commercial: cc11001100_hook("commercial", Boolean(a) && (0, s.tZ)(c.Lh, (0, r.Z)({}, a)), "object-key-init"),
              disclaimer: cc11001100_hook("disclaimer", Boolean(null == n ? void 0 : n.disclaimerInfo) && (0, s.tZ)(c.UC, {
                disclaimerInfo: cc11001100_hook("disclaimerInfo", n.disclaimerInfo, "object-key-init")
              }), "object-key-init"),
              campaign: cc11001100_hook("campaign", this.campaignLabel, "object-key-init"),
              bluebook: cc11001100_hook("bluebook", Boolean(null == n ? void 0 : n.bluebookInfo) && (0, s.tZ)(c.Fi, {
                data: cc11001100_hook("data", n.bluebookInfo, "object-key-init")
              }), "object-key-init")
            }), Boolean(h) && (0, s.tZ)(y, {
              onClose: cc11001100_hook("onClose", this.toggleRecognizerModal, "object-key-init"),
              answerId: cc11001100_hook("answerId", Number(o.id), "object-key-init"),
              shown: cc11001100_hook("shown", v, "object-key-init")
            })], "object-key-init")
          });
        }, "assign"), (0, i.Z)(o, [{
          key: cc11001100_hook("key", "campaignLabel", "object-key-init"),
          get: function () {
            var e = cc11001100_hook("e", this.props, "var-init"),
              n = cc11001100_hook("n", e.data, "var-init"),
              o = cc11001100_hook("o", e.item, "var-init"),
              t = cc11001100_hook("t", o.type, "var-init");
            if ("answer" === t) {
              var i,
                a = cc11001100_hook("a", null == n || null === (i = cc11001100_hook("i", n.bannerInfo, "assign")) || void 0 === i ? void 0 : i[0], "var-init");
              if (null == a ? void 0 : a.verb) return (0, s.tZ)(w, {
                data: cc11001100_hook("data", a, "object-key-init")
              });
            }
            return "zvideo" === t && o.campaign ? (0, s.tZ)(L, {
              data: cc11001100_hook("data", o.campaign, "object-key-init")
            }) : null;
          }
        }, {
          key: cc11001100_hook("key", "positiveLabel", "object-key-init"),
          get: function () {
            var e,
              n = cc11001100_hook("n", this.props, "var-init"),
              o = cc11001100_hook("o", n.data, "var-init"),
              t = cc11001100_hook("t", n.item, "var-init");
            return n.showLegacyPositiveLabel ? (0, s.tZ)(c.mQ, {}) : o ? (Boolean(null === (e = cc11001100_hook("e", o.includedInfos, "assign")) || void 0 === e ? void 0 : e.length) || o.onlineRoundtable || o.relevantInfo || o.recognitionInfo) && (0, s.tZ)(c.qJ, {
              isMobile: cc11001100_hook("isMobile", g.Z.isMobileEntry, "object-key-init"),
              data: cc11001100_hook("data", o, "object-key-init"),
              onLinkClick: cc11001100_hook("onLinkClick", this.handlePositiveLabelClick, "object-key-init")
            }) : t.isLabeled ? (0, s.tZ)("div", {
              className: cc11001100_hook("className", "LabelContainer-placeholder", "object-key-init")
            }) : null;
          }
        }, {
          key: cc11001100_hook("key", "thanksForInviting", "object-key-init"),
          get: function () {
            var e = cc11001100_hook("e", this.props, "var-init"),
              n = cc11001100_hook("n", e.data, "var-init"),
              o = cc11001100_hook("o", e.item.isLabeled, "var-init"),
              t = cc11001100_hook("t", e.editing, "var-init"),
              i = cc11001100_hook("i", e.commercialProps, "var-init"),
              a = cc11001100_hook("a", e.showDeleteButton, "var-init"),
              r = cc11001100_hook("r", e.onDelete, "var-init");
            return o && !t && !i && (null == n ? void 0 : n.thankInviterInfo) && (0, s.tZ)(c.PE, {
              inviter: cc11001100_hook("inviter", n.thankInviterInfo, "object-key-init"),
              showDeleteButton: cc11001100_hook("showDeleteButton", a, "object-key-init"),
              onDelete: cc11001100_hook("onDelete", r, "object-key-init")
            });
          }
        }]), o;
      }(h.PureComponent), "var-init");
    D.propTypes = cc11001100_hook("D.propTypes", {
      data: cc11001100_hook("data", v().object, "object-key-init"),
      item: cc11001100_hook("item", v().object.isRequired, "object-key-init"),
      showLegacyPositiveLabel: cc11001100_hook("showLegacyPositiveLabel", v().bool, "object-key-init"),
      collapseReasonProps: cc11001100_hook("collapseReasonProps", v().object, "object-key-init"),
      abnormalDetailProps: cc11001100_hook("abnormalDetailProps", v().object, "object-key-init"),
      commercialProps: cc11001100_hook("commercialProps", v().object, "object-key-init"),
      annotationProps: cc11001100_hook("annotationProps", v().object, "object-key-init"),
      editing: cc11001100_hook("editing", v().bool, "object-key-init"),
      showDeleteButton: cc11001100_hook("showDeleteButton", v().bool, "object-key-init"),
      inviter: cc11001100_hook("inviter", v().object, "object-key-init"),
      onDelete: cc11001100_hook("onDelete", v().func, "object-key-init")
    }, "assign");
    var N = cc11001100_hook("N", (0, m.Z)()(D), "var-init");
  }
}]);
//# sourceMappingURL=Labels.df2b56168f7c351b5122.js.map