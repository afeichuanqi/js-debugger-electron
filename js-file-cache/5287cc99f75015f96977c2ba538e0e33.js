(window.webpackJsonp = cc11001100_hook("window.webpackJsonp", window.webpackJsonp || [], "assign")).push([[4], {
  1136: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
    var r = cc11001100_hook("r", n(2997), "var-init"),
      o = cc11001100_hook("o", n(3003), "var-init");
    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e && "object" == typeof e && "default" in e ? e : {
        default: cc11001100_hook("default", e, "object-key-init")
      };
    }
    var l = cc11001100_hook("l", c(r), "var-init"),
      d = cc11001100_hook("d", c(o), "var-init");
    const f = cc11001100_hook("f", (iframe, e) => {
        var t;
        const n = cc11001100_hook("n", null !== (t = cc11001100_hook("t", iframe.dataset.src, "assign")) && void 0 !== t ? t : "", "var-init");
        iframe.src !== n && (iframe.src = cc11001100_hook("iframe.src", n, "assign"), m(iframe, e, !0));
      }, "var-init"),
      h = cc11001100_hook("h", e => {
        e && "block" !== e.style.display && (e.style.display = cc11001100_hook("e.style.display", "block", "assign"));
      }, "var-init"),
      m = cc11001100_hook("m", (iframe, e, t) => {
        var n;
        const r = cc11001100_hook("r", iframe.parentElement, "var-init");
        let o = cc11001100_hook("o", Array.from(null !== (n = cc11001100_hook("n", null == r ? void 0 : r.children, "assign")) && void 0 !== n ? n : []).find(e => e.classList.contains("loading-placeholder")), "var-init");
        if (!o) {
          o = cc11001100_hook("o", document.createElement("span"), "assign"), o.className = cc11001100_hook("o.className", "loading-placeholder", "assign");
          const t = cc11001100_hook("t", document.createElement("img"), "var-init");
          t.className = cc11001100_hook("t.className", "placeholder-image", "assign"), t.src = cc11001100_hook("t.src", e, "assign");
          const n = cc11001100_hook("n", document.createElement("span"), "var-init");
          n.className = cc11001100_hook("n.className", "loading-logo", "assign"), o.appendChild(t), o.appendChild(n), null == r || r.appendChild(o);
        }
        h(o), t && (iframe.onload = cc11001100_hook("iframe.onload", () => {
          var e;
          (e = cc11001100_hook("e", o, "assign")) && "none" !== e.style.display && (e.style.display = cc11001100_hook("e.style.display", "none", "assign"));
        }, "assign"));
      }, "var-init"),
      y = cc11001100_hook("y", (iframe, e) => {
        const t = cc11001100_hook("t", document.createElement("div"), "var-init");
        t.className = cc11001100_hook("t.className", "auditing-placeholder", "assign"), t.innerHTML = cc11001100_hook("t.innerHTML", `<img class="placeholder-image" src="${e}">`, "assign");
        const n = cc11001100_hook("n", iframe.parentElement, "var-init");
        if (n) {
          const e = cc11001100_hook("e", Array.from(n.children).find(e => e.matches(".loading-placeholder")), "var-init");
          n.appendChild(t), iframe.remove(), null == e || e.remove();
        }
      }, "var-init");
    const x = cc11001100_hook("x", e => 0 === (null == e ? void 0 : e.err_no) && e.data ? "ready" : 5 === (null == e ? void 0 : e.err_no) ? "audit" : void 0, "var-init");
    var v = function (e, t, n, r) {
      return new (n || (n = cc11001100_hook("n", Promise, "assign")))(function (o, c) {
        function l(e) {
          cc11001100_hook("e", e, "function-parameter");
          try {
            f(r.next(e));
          } catch (e) {
            c(e);
          }
        }
        function d(e) {
          cc11001100_hook("e", e, "function-parameter");
          try {
            f(r.throw(e));
          } catch (e) {
            c(e);
          }
        }
        function f(e) {
          cc11001100_hook("e", e, "function-parameter");
          var t;
          e.done ? o(e.value) : (t = cc11001100_hook("t", e.value, "assign"), t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(l, d);
        }
        f((r = cc11001100_hook("r", r.apply(e, t || []), "assign")).next());
      });
    };
    let C = cc11001100_hook("C", null, "var-init");
    const w = cc11001100_hook("w", /(code\.juejin\.cn|juejin-code-boe\.bytedance\.net)\/pen\/\d+/, "var-init");
    t.editor = cc11001100_hook("t.editor", function (e, {
      showNewIcon: t = !0,
      localStorageKey: n = "code-editor-bytemd-used"
    } = {}) {
      const r = cc11001100_hook("r", "undefined" == typeof localStorage || Boolean(localStorage.getItem(n)), "var-init");
      return {
        actions: cc11001100_hook("actions", [{
          icon: cc11001100_hook("icon", !t || r ? '<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.78906 0.8125C1.23678 0.8125 0.789062 1.26022 0.789062 1.8125V12.0951C0.789062 12.6473 1.23678 13.0951 1.78906 13.0951H13.7976C14.3499 13.0951 14.7976 12.6473 14.7976 12.0951V1.8125C14.7976 1.26022 14.3499 0.8125 13.7976 0.8125H1.78906ZM1.98906 3.11875V2.0125H13.5976V3.11875L1.98906 3.11875ZM1.98906 4.31875V11.8951H13.5976V4.31875L1.98906 4.31875Z" fill="#24292E"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8.06888 5.3501C8.15616 5.05901 8.47089 4.90683 8.75283 5.01938C9.0066 5.12068 9.14209 5.40164 9.06353 5.66364L7.54854 10.7159C7.46125 11.007 7.14652 11.1592 6.86458 11.0467C6.61081 10.9454 6.47532 10.6644 6.55389 10.4024L8.06888 5.3501ZM4.22873 8.17869L5.48039 6.90055C5.67836 6.6984 5.67836 6.37064 5.48039 6.16849C5.28243 5.96634 4.96146 5.96634 4.76349 6.16849L3.18841 7.77689C3.17918 7.78632 3.17037 7.79602 3.162 7.80597L3.15433 7.81364C2.95637 8.01579 2.95637 8.34355 3.15433 8.5457L4.72942 10.1541C4.92738 10.3562 5.24835 10.3562 5.44632 10.1541C5.64428 9.95194 5.64428 9.62419 5.44632 9.42203L4.22873 8.17869ZM10.1377 6.86149L11.3894 8.13963L10.1718 9.38297C9.97384 9.58512 9.97384 9.91288 10.1718 10.115C10.3698 10.3172 10.6907 10.3172 10.8887 10.115L12.4638 8.50664C12.6618 8.30448 12.6618 7.97673 12.4638 7.77457L12.4561 7.76691C12.4477 7.75696 12.4389 7.74725 12.4297 7.73783L10.8546 6.12943C10.6567 5.92728 10.3357 5.92728 10.1377 6.12943C9.93976 6.33158 9.93976 6.65934 10.1377 6.86149Z" fill="#24292E"/>\n</svg>\n' : '<svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scale(2.2);">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M9.78906 9.8125C9.23678 9.8125 8.78906 10.2602 8.78906 10.8125V21.0951C8.78906 21.6473 9.23678 22.0951 9.78906 22.0951H21.7976C22.3499 22.0951 22.7976 21.6473 22.7976 21.0951V10.8125C22.7976 10.2602 22.3499 9.8125 21.7976 9.8125H9.78906ZM9.98906 12.1187V11.0125H21.5976V12.1187L9.98906 12.1187ZM9.98906 13.3187V20.8951H21.5976V13.3187L9.98906 13.3187Z" fill="#24292E"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0689 14.3501C16.1562 14.059 16.4709 13.9068 16.7528 14.0194C17.0066 14.1207 17.1421 14.4016 17.0635 14.6636L15.5485 19.7159C15.4613 20.007 15.1465 20.1592 14.8646 20.0467C14.6108 19.9454 14.4753 19.6644 14.5539 19.4024L16.0689 14.3501ZM12.2287 17.1787L13.4804 15.9006C13.6784 15.6984 13.6784 15.3706 13.4804 15.1685C13.2824 14.9663 12.9615 14.9663 12.7635 15.1685L11.1884 16.7769C11.1792 16.7863 11.1704 16.796 11.162 16.806L11.1543 16.8136C10.9564 17.0158 10.9564 17.3435 11.1543 17.5457L12.7294 19.1541C12.9274 19.3562 13.2484 19.3562 13.4463 19.1541C13.6443 18.9519 13.6443 18.6242 13.4463 18.422L12.2287 17.1787ZM18.1377 15.8615L19.3894 17.1396L18.1718 18.383C17.9738 18.5851 17.9738 18.9129 18.1718 19.115C18.3698 19.3172 18.6907 19.3172 18.8887 19.115L20.4638 17.5066C20.6618 17.3045 20.6618 16.9767 20.4638 16.7746L20.4561 16.7669C20.4477 16.757 20.4389 16.7473 20.4297 16.7378L18.8546 15.1294C18.6567 14.9273 18.3357 14.9273 18.1377 15.1294C17.9398 15.3316 17.9398 15.6593 18.1377 15.8615Z" fill="#24292E"/>\n<path class="code-new-tag" d="M15.7 11V11.3H16H30.5C33.151 11.3 35.3 9.15097 35.3 6.5C35.3 3.84903 33.151 1.7 30.5 1.7H22C18.5206 1.7 15.7 4.52061 15.7 8V11Z" fill="url(#paint0_linear_2_22613)"/>\n<path class="code-new-tag" d="M18.6602 4.716V9H19.3622V5.868H19.3862L21.5282 9H22.2122V4.716H21.5042V7.806H21.4802L19.3622 4.716H18.6602ZM23.0548 4.716V9H26.2468V8.4H23.7568V7.104H26.0008V6.504H23.7568V5.316H26.1448V4.716H23.0548ZM26.5144 4.716L27.7444 9H28.4944L29.3344 5.778H29.3584L30.1924 9H30.9364L32.1724 4.716H31.3804L30.5764 7.974H30.5524L29.7064 4.716H28.9804L28.1344 7.974H28.1104L27.3064 4.716H26.5144Z" fill="white"/>\n<path class="code-new-tag" d="M15.7 11V11.3H16H30.5C33.151 11.3 35.3 9.15097 35.3 6.5C35.3 3.84903 33.151 1.7 30.5 1.7H22C18.5206 1.7 15.7 4.52061 15.7 8V11Z" stroke="#FAFBFC" stroke-width="0.6"/>\n<defs>\n<linearGradient id="paint0_linear_2_22613" x1="31.3056" y1="2.5625" x2="16.1655" y2="9.66525" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F64242"/>\n<stop offset="1" stop-color="#FF5C00"/>\n</linearGradient>\n</defs>\n</svg>\n', "object-key-init"),
          title: cc11001100_hook("title", "代码片段", "object-key-init"),
          handler: {
            type: cc11001100_hook("type", "action", "object-key-init"),
            click: cc11001100_hook("click", ({
              editor: t
            }) => {
              localStorage.setItem(n, "true"), Array.from(document.querySelectorAll(".bytemd-toolbar .code-new-tag")).forEach(e => e.style.display = cc11001100_hook("e.style.display", "none", "assign")), e(content => {
                t.replaceSelection(content);
              });
            }, "object-key-init")
          }
        }], "object-key-init")
      };
    }, "assign"), t.viewer = cc11001100_hook("t.viewer", function ({
      domainList: e = ["code.juejin.cn", "juejin-code-boe.bytedance.net"],
      className: t,
      boe: n = "undefined" != typeof window && !window.location.href.includes("juejin.cn"),
      auditingBackground: r = "",
      loadingBackground: o = "",
      optimize: c
    } = {}) {
      return {
        viewerEffect({
          markdownBody: e
        }) {
          let t = cc11001100_hook("t", () => {
            console.log("code-editor empty callback");
          }, "var-init");
          return function () {
            return v(this, void 0, void 0, function* () {
              !C && "undefined" != typeof document && document && (C = cc11001100_hook("C", document.createElement("style"), "assign"), document.head.appendChild(C), C.setAttribute("type", "text/css"), C.innerHTML = cc11001100_hook("C.innerHTML", ".code-editor-container{display:block;position:relative;overflow:hidden;box-sizing:border-box;}iframe.code-editor-frame{width:100%;height:100%;border:none;border-radius:8px;box-sizing:border-box;border:0.5px solid rgba(128,128,128,0.4);}", "assign"));
              const t = cc11001100_hook("t", Array.from(e.querySelectorAll('[data-code="code-editor-element"]')), "var-init");
              if (!t.length) return;
              let l = cc11001100_hook("l", () => {
                console.log("code-editor empty callback");
              }, "var-init");
              !function (e) {
                const style = cc11001100_hook("style", document.createElement("style"), "var-init");
                style.innerHTML = cc11001100_hook("style.innerHTML", ".auditing-placeholder {\n  width: 100%;\n  height: 100%;\n}\n.auditing-placeholder, .loading-placeholder {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  box-sizing: border-box;\n  overflow: hidden;\n  border: 0.5px solid rgba(128,128,128,0.4);\n  border-radius: 8px;\n  background-color: #18212D;\n}\n.placeholder-image {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.loading-logo {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  width: 171px;\n  height: 48px;\n  background-image: repeating-linear-gradient(\n    94.31deg,\n    #00cdff 2.29%,\n    #ffffff 19.72%,\n    #7d5aff 50%,\n    #ffffff 85.28%,\n    #00cdff 97.72%\n  );\n  background-size: 200%;\n  background-repeat: repeat;\n  clip-path: url(#jcode-logo-clip);\n  animation: logo-scan 3s linear infinite;\n}\n@keyframes logo-scan {\n  0% {\n    background-position-x: 200%;\n  }\n\n  100% {\n    background-position-x: 0%;\n  }\n}", "assign"), e.children.length ? e.insertBefore(style, e.children[0]) : e.appendChild(style);
                const t = cc11001100_hook("t", document.createElement("div"), "var-init");
                t.setAttribute("style", "height:0;font-size:0;"), t.innerHTML = cc11001100_hook("t.innerHTML", '<svg width="0" height="0" viewBox="0 0 171 48" xmlns="http://www.w3.org/2000/svg">\n  <clipPath id="jcode-logo-clip">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6735 30.7507L4.24023 7.29975L10.1773 0.857178L29.6735 18.8468L49.2491 0.857178L55.1762 7.29975L29.6735 30.7507ZM59.4204 47.1347H0V23.8225H8.7619V38.3827H50.6684V23.8225H59.4204V47.1347ZM166.243 18.8667C165.88 18.6445 165.49 18.3891 165.067 18.1129C164.925 18.0195 164.778 17.9237 164.628 17.826C164.043 17.4295 163.438 17.0132 162.814 16.5672C162.189 16.1212 161.585 15.6553 160.98 15.1697C160.376 14.684 159.801 14.1983 159.266 13.7127C158.205 14.7038 157.055 15.6553 155.806 16.5573C154.557 17.4593 153.378 18.2324 152.268 18.8766H147.609C148.402 18.4603 149.225 17.9648 150.087 17.3998C150.95 16.8348 151.782 16.2699 152.565 15.6851C153.358 15.1102 154.062 14.5551 154.696 14.0397C155.331 13.5243 155.806 13.0882 156.143 12.7512H162.259C162.626 13.0882 163.141 13.5144 163.805 14.0397C164.469 14.5651 165.193 15.1102 165.996 15.6752C166.788 16.25 167.611 16.815 168.464 17.3899C169.316 17.9648 170.109 18.4603 170.842 18.8766H166.233L166.243 18.8667ZM151.971 33.1692C151.852 32.8124 151.713 32.416 151.554 31.9699C151.439 31.6447 151.318 31.3195 151.195 30.9905C151.15 30.8682 151.104 30.7455 151.059 30.6219C150.89 30.166 150.722 29.7299 150.553 29.3136C150.517 29.2238 150.481 29.1358 150.447 29.0498C150.321 28.7375 150.206 28.4522 150.097 28.2035H153.071C153.102 28.2757 153.135 28.3515 153.17 28.4306L153.17 28.4317C153.278 28.678 153.399 28.9569 153.527 29.264C153.643 29.5444 153.759 29.8294 153.879 30.1224C153.932 30.2542 153.987 30.3876 154.042 30.5228C154.22 30.9589 154.389 31.405 154.557 31.8708C154.726 32.3367 154.875 32.7629 155.013 33.1692H157.729V27.1033H149.393V24.8633H157.729V22.0979H148.789V19.7786H169.633V22.0979H160.723V24.8633H169.028V27.1033H160.723V33.1692H163.518C163.706 32.8025 163.884 32.3961 164.073 31.9501C164.261 31.5041 164.429 31.0581 164.598 30.6021C164.766 30.1462 164.925 29.7101 165.064 29.2938C165.203 28.8775 165.322 28.5108 165.401 28.2134H168.345C168.077 29.0559 167.78 29.9182 167.453 30.8202C167.125 31.7221 166.818 32.5052 166.531 33.1692H170.456V35.5877H147.946V33.1692H151.951H151.971ZM125.131 12.7712V16.5773H122.841V18.966H125.131V24.7544L122.742 25.359V27.9063L125.131 27.3017V29.3931C125.131 30.0473 125.101 30.6519 125.042 31.2168C124.982 31.7818 124.893 32.3071 124.754 32.8027C124.615 33.2983 124.447 33.774 124.249 34.23C124.051 34.6859 123.803 35.1319 123.495 35.5879H126.618C127.004 34.8049 127.282 33.9029 127.47 32.8721C127.658 31.8413 127.748 30.6816 127.748 29.3931V26.6277L129.809 26.0727V23.5254L127.748 24.0804V18.966H129.839V16.5773H127.748V12.7712H125.131ZM129.879 33.5956C129.7 34.339 129.482 35.0031 129.234 35.5879H129.244H132.01C132.416 34.3588 132.703 32.9216 132.882 31.2565C133.06 29.5913 133.149 27.8568 133.149 26.0429V19.9275H145.004V13.1776H130.681V26.0231C130.681 26.9152 130.652 27.7973 130.592 28.6794C130.533 29.5616 130.444 30.414 130.325 31.2466C130.206 32.0692 130.057 32.8622 129.879 33.5956ZM142.456 17.8658H133.239V15.269H142.456V17.8658ZM138.601 33.4271H136.381V28.6993H134.269V35.5978H145.143V28.6993H143.002V33.4271H140.732V27.49H144.855V21.4241H142.793V25.4284H140.732V20.9186H138.591V25.4284H136.529V21.4241H134.468V27.49H138.601V33.4271ZM106.326 32.9906V12.7808H109.25V19.2233H119.519V21.8202H109.25V33.0005H120.302V35.5478H97.4453V33.0005H106.326V32.9906ZM72.3125 24.9129C72.7486 23.5748 73.1352 22.1971 73.4623 20.7797C73.7893 19.3722 74.0669 17.9251 74.3047 16.4483H72.4116V14.129H81.2033V16.4483H76.743C76.6538 17.0826 76.5646 17.717 76.4655 18.3513C76.3664 18.9857 76.2474 19.6101 76.1087 20.2544H81.0645V34.656H73.8686V24.9129H72.3125ZM76.188 32.416H78.7848V22.5241H76.188V32.416ZM89.6083 35.5877L89.6171 35.5778H92.9783C93.3351 34.8939 93.6226 34.0316 93.8604 33.0008C94.0983 31.97 94.2173 30.8499 94.2173 29.6407V22.99H92.7107L93.3153 13.3459H82.1845V15.7347H90.5896L90.0345 22.99H85.4554L85.7527 17.0727H83.1856L82.8089 25.3589H91.6204V29.5416C91.6204 30.8202 91.4321 31.9799 91.0455 33.0404C90.661 34.0954 90.1784 34.9445 89.6171 35.5778H89.6083V35.5877ZM90.5103 28.3621V30.7013H82.2043V28.3621H90.5103Z"/>\n  </clipPath>\n</svg>', "assign"), e.insertBefore(t, e.children[0]);
              }(e);
              const d = cc11001100_hook("d", yield t.reduce((e, iframe) => v(this, void 0, void 0, function* () {
                  const t = cc11001100_hook("t", yield e, "var-init"),
                    r = cc11001100_hook("r", iframe.dataset.codeId, "var-init");
                  "none" === iframe.style.display && h(iframe);
                  const o = cc11001100_hook("o", iframe.parentElement, "var-init");
                  if (o) {
                    const e = cc11001100_hook("e", Array.from(o.children).find(e => e.matches(".loading-placeholder")), "var-init");
                    e && h(e);
                  }
                  if (t[r]) t[r].iframeList.push(iframe);else {
                    t[r] = cc11001100_hook("t[r]", {
                      iframeList: cc11001100_hook("iframeList", [iframe], "object-key-init"),
                      status: cc11001100_hook("status", void 0, "object-key-init")
                    }, "assign");
                    const e = cc11001100_hook("e", yield function (e, t) {
                      return fetch(`https://${t ? "juejin-code-boe.bytedance.net" : "code.juejin.cn"}/api/v1/project/${e}?aid=2608`, {
                        credentials: cc11001100_hook("credentials", "include", "object-key-init")
                      }).then(e => e.json());
                    }(r, n || !1), "var-init");
                    t[r].status = cc11001100_hook("t[r].status", e, "assign");
                  }
                  return t;
                }), Promise.resolve({})), "var-init"),
                w = cc11001100_hook("w", Object.keys(d), "var-init");
              if (c) {
                const {
                  ref: e,
                  offset: t,
                  delay: n
                } = cc11001100_hook("", c, "var-init");
                let h;
                h = cc11001100_hook("h", "function" == typeof e ? e() : e, "assign");
                const {
                    top: v,
                    bottom: C
                  } = cc11001100_hook("", null != t ? t : {
                    top: cc11001100_hook("top", 0, "object-key-init"),
                    bottom: cc11001100_hook("bottom", 0, "object-key-init")
                  }, "var-init"),
                  H = cc11001100_hook("H", () => {
                    console.log("code-editor scroll callback"), w.forEach(e => {
                      const {
                          iframeList: t,
                          status: n
                        } = cc11001100_hook("", d[e], "var-init"),
                        c = cc11001100_hook("c", x(n), "var-init");
                      t.forEach(iframe => {
                        if ("ready" === c) {
                          (function (e, t, n) {
                            const {
                                top: r = 0,
                                bottom: o = 0
                              } = cc11001100_hook("", null != n ? n : {}, "var-init"),
                              rect = cc11001100_hook("rect", e.getBoundingClientRect(), "var-init");
                            let c = cc11001100_hook("c", document.documentElement, "var-init"),
                              l = cc11001100_hook("l", Object.assign({}, rect.toJSON()), "var-init");
                            if (t) {
                              c = cc11001100_hook("c", t, "assign");
                              const e = cc11001100_hook("e", c.getBoundingClientRect(), "var-init");
                              l = cc11001100_hook("l", Object.assign(Object.assign({}, l), {
                                top: cc11001100_hook("top", rect.top - e.top, "object-key-init"),
                                bottom: cc11001100_hook("bottom", rect.bottom - e.top, "object-key-init"),
                                left: cc11001100_hook("left", rect.left - e.left, "object-key-init"),
                                right: cc11001100_hook("right", rect.right - e.left, "object-key-init")
                              }), "assign");
                            }
                            return l.bottom >= 0 - r && l.bottom <= (c.clientHeight || window.innerHeight) + l.height + o;
                          })(iframe, h, {
                            top: cc11001100_hook("top", v, "object-key-init"),
                            bottom: cc11001100_hook("bottom", C, "object-key-init")
                          }) ? f(iframe, o) : ((iframe => {
                            var e, t, n;
                            const r = cc11001100_hook("r", "about:blank", "var-init");
                            iframe.src !== r && (iframe.src = cc11001100_hook("iframe.src", r, "assign"));
                            try {
                              null === (e = cc11001100_hook("e", iframe.contentWindow, "assign")) || void 0 === e || e.document.write(""), null === (t = cc11001100_hook("t", iframe.contentWindow, "assign")) || void 0 === t || t.document.clear(), null === (n = cc11001100_hook("n", iframe.contentWindow, "assign")) || void 0 === n || n.close();
                            } catch (e) {}
                          })(iframe), m(iframe, o));
                        } else "audit" === c && y(iframe, r);
                      });
                    });
                  }, "var-init");
                H();
                const U = cc11001100_hook("U", function (e, t) {
                  let n = cc11001100_hook("n", null, "var-init"),
                    r = cc11001100_hook("r", this, "var-init");
                  return function () {
                    let o = cc11001100_hook("o", arguments, "var-init");
                    clearTimeout(n), n = cc11001100_hook("n", setTimeout(function () {
                      e.apply(r, o);
                    }, t), "assign");
                  };
                }(H, null != n ? n : 300), "var-init");
                window.addEventListener("scroll", U, !0), l = cc11001100_hook("l", () => {
                  console.log("code-editor callback"), window.removeEventListener("scroll", U, !0);
                }, "assign");
              } else w.forEach(e => {
                const {
                    iframeList: t,
                    status: n
                  } = cc11001100_hook("", d[e], "var-init"),
                  c = cc11001100_hook("c", x(n), "var-init");
                t.forEach(iframe => {
                  "ready" === c ? f(iframe, o) : "audit" === c && y(iframe, r);
                });
              });
              return l;
            });
          }().then(e => t = cc11001100_hook("t", null != e ? e : t, "assign")), () => t();
        },
        rehype: p => p.use(() => n => {
          d.default(n, "element", (n, r, c) => {
            var d;
            if ("a" === n.tagName) {
              const r = cc11001100_hook("r", n.properties.href, "var-init");
              if (!r) return;
              const c = cc11001100_hook("c", ["代码片段", "jcode"].includes(null === (d = cc11001100_hook("d", n.children[0], "assign")) || void 0 === d ? void 0 : d.value), "var-init");
              if (e.includes(function (e) {
                try {
                  return new URL(e.startsWith("http") ? e : "http://" + e).host;
                } catch (e) {
                  return "";
                }
              }(r)) && w.test(r) && c) {
                n.tagName = cc11001100_hook("n.tagName", "span", "assign"), n.properties && (n.properties.className = cc11001100_hook("n.properties.className", "code-editor-container", "assign"));
                const e = cc11001100_hook("e", (e => {
                    var t;
                    return null === (t = cc11001100_hook("t", e.match(/pen\/(\d+)/), "assign")) || void 0 === t ? void 0 : t[1];
                  })(r), "var-init"),
                  iframe = cc11001100_hook("iframe", l.default("iframe", {
                    class: cc11001100_hook("class", ["code-editor-frame", t].filter(e => null == e ? void 0 : e.trim()).join(" "), "object-key-init"),
                    "data-code": cc11001100_hook("data-code", "code-editor-element", "object-key-init"),
                    "data-code-id": cc11001100_hook("data-code-id", e, "object-key-init"),
                    "data-src": cc11001100_hook("data-src", r, "object-key-init"),
                    style: cc11001100_hook("style", "display:none;", "object-key-init"),
                    loading: cc11001100_hook("loading", "lazy", "object-key-init"),
                    href: cc11001100_hook("href", void 0, "object-key-init"),
                    rel: cc11001100_hook("rel", void 0, "object-key-init")
                  }), "var-init"),
                  c = cc11001100_hook("c", l.default("span", {
                    class: cc11001100_hook("class", "loading-placeholder", "object-key-init"),
                    style: cc11001100_hook("style", "display:none", "object-key-init")
                  }, [l.default("img", {
                    class: cc11001100_hook("class", "placeholder-image", "object-key-init"),
                    src: cc11001100_hook("src", "" + o, "object-key-init")
                  }), l.default("span", {
                    class: cc11001100_hook("class", "loading-logo", "object-key-init")
                  })]), "var-init");
                n.children = cc11001100_hook("n.children", [iframe, c], "assign");
              }
            }
          });
        })
      };
    }, "assign");
  },
  1137: function (e, t, n) {
    (function (e, n) {
      var r = cc11001100_hook("r", "[object Arguments]", "var-init"),
        o = cc11001100_hook("o", "[object Function]", "var-init"),
        c = cc11001100_hook("c", "[object GeneratorFunction]", "var-init"),
        l = cc11001100_hook("l", "[object Map]", "var-init"),
        d = cc11001100_hook("d", "[object Set]", "var-init"),
        f = cc11001100_hook("f", /\w*$/, "var-init"),
        h = cc11001100_hook("h", /^\[object .+?Constructor\]$/, "var-init"),
        m = cc11001100_hook("m", /^(?:0|[1-9]\d*)$/, "var-init"),
        y = cc11001100_hook("y", {}, "var-init");
      y[r] = cc11001100_hook("y[r]", y["[object Array]"] = cc11001100_hook("y[\"[object Array]\"]", y["[object ArrayBuffer]"] = cc11001100_hook("y[\"[object ArrayBuffer]\"]", y["[object DataView]"] = cc11001100_hook("y[\"[object DataView]\"]", y["[object Boolean]"] = cc11001100_hook("y[\"[object Boolean]\"]", y["[object Date]"] = cc11001100_hook("y[\"[object Date]\"]", y["[object Float32Array]"] = cc11001100_hook("y[\"[object Float32Array]\"]", y["[object Float64Array]"] = cc11001100_hook("y[\"[object Float64Array]\"]", y["[object Int8Array]"] = cc11001100_hook("y[\"[object Int8Array]\"]", y["[object Int16Array]"] = cc11001100_hook("y[\"[object Int16Array]\"]", y["[object Int32Array]"] = cc11001100_hook("y[\"[object Int32Array]\"]", y[l] = cc11001100_hook("y[l]", y["[object Number]"] = cc11001100_hook("y[\"[object Number]\"]", y["[object Object]"] = cc11001100_hook("y[\"[object Object]\"]", y["[object RegExp]"] = cc11001100_hook("y[\"[object RegExp]\"]", y[d] = cc11001100_hook("y[d]", y["[object String]"] = cc11001100_hook("y[\"[object String]\"]", y["[object Symbol]"] = cc11001100_hook("y[\"[object Symbol]\"]", y["[object Uint8Array]"] = cc11001100_hook("y[\"[object Uint8Array]\"]", y["[object Uint8ClampedArray]"] = cc11001100_hook("y[\"[object Uint8ClampedArray]\"]", y["[object Uint16Array]"] = cc11001100_hook("y[\"[object Uint16Array]\"]", y["[object Uint32Array]"] = cc11001100_hook("y[\"[object Uint32Array]\"]", !0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), y["[object Error]"] = cc11001100_hook("y[\"[object Error]\"]", y[o] = cc11001100_hook("y[o]", y["[object WeakMap]"] = cc11001100_hook("y[\"[object WeakMap]\"]", !1, "assign"), "assign"), "assign");
      var x = cc11001100_hook("x", "object" == typeof e && e && e.Object === Object && e, "var-init"),
        v = cc11001100_hook("v", "object" == typeof self && self && self.Object === Object && self, "var-init"),
        C = cc11001100_hook("C", x || v || Function("return this")(), "var-init"),
        w = cc11001100_hook("w", t && !t.nodeType && t, "var-init"),
        H = cc11001100_hook("H", w && "object" == typeof n && n && !n.nodeType && n, "var-init"),
        U = cc11001100_hook("U", H && H.exports === w, "var-init");
      function j(map, e) {
        cc11001100_hook("map", map, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        return map.set(e[0], e[1]), map;
      }
      function _(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return e.add(t), e;
      }
      function E(e, t, n, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        var o = cc11001100_hook("o", -1, "var-init"),
          c = cc11001100_hook("c", e ? e.length : 0, "var-init");
        for (r && c && (n = cc11001100_hook("n", e[++o], "assign")); ++o < c;) n = cc11001100_hook("n", t(n, e[o], o, e), "assign");
        return n;
      }
      function L(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", !1, "var-init");
        if (null != e && "function" != typeof e.toString) try {
          t = cc11001100_hook("t", !!(e + ""), "assign");
        } catch (e) {}
        return t;
      }
      function V(map) {
        cc11001100_hook("map", map, "function-parameter");
        var e = cc11001100_hook("e", -1, "var-init"),
          t = cc11001100_hook("t", Array(map.size), "var-init");
        return map.forEach(function (n, r) {
          t[++e] = cc11001100_hook("t[++e]", [r, n], "assign");
        }), t;
      }
      function A(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return function (n) {
          return e(t(n));
        };
      }
      function I(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", -1, "var-init"),
          n = cc11001100_hook("n", Array(e.size), "var-init");
        return e.forEach(function (e) {
          n[++t] = cc11001100_hook("n[++t]", e, "assign");
        }), n;
      }
      var k,
        M = cc11001100_hook("M", Array.prototype, "var-init"),
        S = cc11001100_hook("S", Function.prototype, "var-init"),
        O = cc11001100_hook("O", Object.prototype, "var-init"),
        N = cc11001100_hook("N", C["__core-js_shared__"], "var-init"),
        T = cc11001100_hook("T", (k = cc11001100_hook("k", /[^.]+$/.exec(N && N.keys && N.keys.IE_PROTO || ""), "assign")) ? "Symbol(src)_1." + k : "", "var-init"),
        D = cc11001100_hook("D", S.toString, "var-init"),
        Z = cc11001100_hook("Z", O.hasOwnProperty, "var-init"),
        B = cc11001100_hook("B", O.toString, "var-init"),
        P = cc11001100_hook("P", RegExp("^" + D.call(Z).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), "var-init"),
        F = cc11001100_hook("F", U ? C.Buffer : void 0, "var-init"),
        R = cc11001100_hook("R", C.Symbol, "var-init"),
        W = cc11001100_hook("W", C.Uint8Array, "var-init"),
        z = cc11001100_hook("z", A(Object.getPrototypeOf, Object), "var-init"),
        $ = cc11001100_hook("$", Object.create, "var-init"),
        K = cc11001100_hook("K", O.propertyIsEnumerable, "var-init"),
        Q = cc11001100_hook("Q", M.splice, "var-init"),
        G = cc11001100_hook("G", Object.getOwnPropertySymbols, "var-init"),
        J = cc11001100_hook("J", F ? F.isBuffer : void 0, "var-init"),
        X = cc11001100_hook("X", A(Object.keys, Object), "var-init"),
        Y = cc11001100_hook("Y", Ue(C, "DataView"), "var-init"),
        ee = cc11001100_hook("ee", Ue(C, "Map"), "var-init"),
        te = cc11001100_hook("te", Ue(C, "Promise"), "var-init"),
        ne = cc11001100_hook("ne", Ue(C, "Set"), "var-init"),
        re = cc11001100_hook("re", Ue(C, "WeakMap"), "var-init"),
        oe = cc11001100_hook("oe", Ue(Object, "create"), "var-init"),
        ie = cc11001100_hook("ie", Ve(Y), "var-init"),
        ce = cc11001100_hook("ce", Ve(ee), "var-init"),
        ae = cc11001100_hook("ae", Ve(te), "var-init"),
        le = cc11001100_hook("le", Ve(ne), "var-init"),
        de = cc11001100_hook("de", Ve(re), "var-init"),
        se = cc11001100_hook("se", R ? R.prototype : void 0, "var-init"),
        ue = cc11001100_hook("ue", se ? se.valueOf : void 0, "var-init");
      function pe(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", -1, "var-init"),
          n = cc11001100_hook("n", e ? e.length : 0, "var-init");
        for (this.clear(); ++t < n;) {
          var r = cc11001100_hook("r", e[t], "var-init");
          this.set(r[0], r[1]);
        }
      }
      function fe(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", -1, "var-init"),
          n = cc11001100_hook("n", e ? e.length : 0, "var-init");
        for (this.clear(); ++t < n;) {
          var r = cc11001100_hook("r", e[t], "var-init");
          this.set(r[0], r[1]);
        }
      }
      function he(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", -1, "var-init"),
          n = cc11001100_hook("n", e ? e.length : 0, "var-init");
        for (this.clear(); ++t < n;) {
          var r = cc11001100_hook("r", e[t], "var-init");
          this.set(r[0], r[1]);
        }
      }
      function be(e) {
        cc11001100_hook("e", e, "function-parameter");
        this.__data__ = cc11001100_hook("this.__data__", new fe(e), "assign");
      }
      function ge(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", Ie(e) || function (e) {
            return function (e) {
              return function (e) {
                return !!e && "object" == typeof e;
              }(e) && ke(e);
            }(e) && Z.call(e, "callee") && (!K.call(e, "callee") || B.call(e) == r);
          }(e) ? function (e, t) {
            for (var n = cc11001100_hook("n", -1, "var-init"), r = cc11001100_hook("r", Array(e), "var-init"); ++n < e;) r[n] = cc11001100_hook("r[n]", t(n), "assign");
            return r;
          }(e.length, String) : [], "var-init"),
          o = cc11001100_hook("o", n.length, "var-init"),
          c = cc11001100_hook("c", !!o, "var-init");
        for (var l in e) !t && !Z.call(e, l) || c && ("length" == l || Ee(l, o)) || n.push(l);
        return n;
      }
      function me(object, e, t) {
        cc11001100_hook("object", object, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", object[e], "var-init");
        Z.call(object, e) && Ae(n, t) && (void 0 !== t || e in object) || (object[e] = cc11001100_hook("object[e]", t, "assign"));
      }
      function ye(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        for (var n = cc11001100_hook("n", e.length, "var-init"); n--;) if (Ae(e[n][0], t)) return n;
        return -1;
      }
      function xe(e, t, n, h, m, object, x) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        cc11001100_hook("m", m, "function-parameter");
        cc11001100_hook("object", object, "function-parameter");
        cc11001100_hook("x", x, "function-parameter");
        var v;
        if (h && (v = cc11001100_hook("v", object ? h(e, m, object, x) : h(e), "assign")), void 0 !== v) return v;
        if (!Oe(e)) return e;
        var C = cc11001100_hook("C", Ie(e), "var-init");
        if (C) {
          if (v = cc11001100_hook("v", function (e) {
            var t = cc11001100_hook("t", e.length, "var-init"),
              n = cc11001100_hook("n", e.constructor(t), "var-init");
            t && "string" == typeof e[0] && Z.call(e, "index") && (n.index = cc11001100_hook("n.index", e.index, "assign"), n.input = cc11001100_hook("n.input", e.input, "assign"));
            return n;
          }(e), "assign"), !t) return function (source, e) {
            var t = cc11001100_hook("t", -1, "var-init"),
              n = cc11001100_hook("n", source.length, "var-init");
            e || (e = cc11001100_hook("e", Array(n), "assign"));
            for (; ++t < n;) e[t] = cc11001100_hook("e[t]", source[t], "assign");
            return e;
          }(e, v);
        } else {
          var w = cc11001100_hook("w", _e(e), "var-init"),
            H = cc11001100_hook("H", w == o || w == c, "var-init");
          if (Me(e)) return function (e, t) {
            if (t) return e.slice();
            var n = cc11001100_hook("n", new e.constructor(e.length), "var-init");
            return e.copy(n), n;
          }(e, t);
          if ("[object Object]" == w || w == r || H && !object) {
            if (L(e)) return object ? e : {};
            if (v = cc11001100_hook("v", function (object) {
              return "function" != typeof object.constructor || Le(object) ? {} : (e = cc11001100_hook("e", z(object), "assign"), Oe(e) ? $(e) : {});
              var e;
            }(H ? {} : e), "assign"), !t) return function (source, object) {
              return we(source, je(source), object);
            }(e, function (object, source) {
              return object && we(source, Ne(source), object);
            }(v, e));
          } else {
            if (!y[w]) return object ? e : {};
            v = cc11001100_hook("v", function (object, e, t, n) {
              var r = cc11001100_hook("r", object.constructor, "var-init");
              switch (e) {
                case "[object ArrayBuffer]":
                  return Ce(object);
                case "[object Boolean]":
                case "[object Date]":
                  return new r(+object);
                case "[object DataView]":
                  return function (e, t) {
                    var n = cc11001100_hook("n", t ? Ce(e.buffer) : e.buffer, "var-init");
                    return new e.constructor(n, e.byteOffset, e.byteLength);
                  }(object, n);
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                  return function (e, t) {
                    var n = cc11001100_hook("n", t ? Ce(e.buffer) : e.buffer, "var-init");
                    return new e.constructor(n, e.byteOffset, e.length);
                  }(object, n);
                case l:
                  return function (map, e, t) {
                    return E(e ? t(V(map), !0) : V(map), j, new map.constructor());
                  }(object, n, t);
                case "[object Number]":
                case "[object String]":
                  return new r(object);
                case "[object RegExp]":
                  return function (e) {
                    var t = cc11001100_hook("t", new e.constructor(e.source, f.exec(e)), "var-init");
                    return t.lastIndex = cc11001100_hook("t.lastIndex", e.lastIndex, "assign"), t;
                  }(object);
                case d:
                  return function (e, t, n) {
                    return E(t ? n(I(e), !0) : I(e), _, new e.constructor());
                  }(object, n, t);
                case "[object Symbol]":
                  return symbol = cc11001100_hook("symbol", object, "assign"), ue ? Object(ue.call(symbol)) : {};
              }
              var symbol;
            }(e, w, xe, t), "assign");
          }
        }
        x || (x = cc11001100_hook("x", new be(), "assign"));
        var U = cc11001100_hook("U", x.get(e), "var-init");
        if (U) return U;
        if (x.set(e, v), !C) var A = cc11001100_hook("A", n ? function (object) {
          return function (object, e, t) {
            var n = cc11001100_hook("n", e(object), "var-init");
            return Ie(object) ? n : function (e, t) {
              for (var n = cc11001100_hook("n", -1, "var-init"), r = cc11001100_hook("r", t.length, "var-init"), o = cc11001100_hook("o", e.length, "var-init"); ++n < r;) e[o + n] = cc11001100_hook("e[o + n]", t[n], "assign");
              return e;
            }(n, t(object));
          }(object, Ne, je);
        }(e) : Ne(e), "var-init");
        return function (e, t) {
          for (var n = cc11001100_hook("n", -1, "var-init"), r = cc11001100_hook("r", e ? e.length : 0, "var-init"); ++n < r && !1 !== t(e[n], n, e););
        }(A || e, function (r, o) {
          A && (r = cc11001100_hook("r", e[o = cc11001100_hook("o", r, "assign")], "assign")), me(v, o, xe(r, t, n, h, o, e, x));
        }), v;
      }
      function ve(e) {
        cc11001100_hook("e", e, "function-parameter");
        return !(!Oe(e) || (t = cc11001100_hook("t", e, "assign"), T && T in t)) && (Se(e) || L(e) ? P : h).test(Ve(e));
        var t;
      }
      function Ce(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", new e.constructor(e.byteLength), "var-init");
        return new W(t).set(new W(e)), t;
      }
      function we(source, e, object, t) {
        cc11001100_hook("source", source, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("object", object, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        object || (object = cc11001100_hook("object", {}, "assign"));
        for (var n = cc11001100_hook("n", -1, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); ++n < r;) {
          var o = cc11001100_hook("o", e[n], "var-init"),
            c = cc11001100_hook("c", t ? t(object[o], source[o], o, object, source) : void 0, "var-init");
          me(object, o, void 0 === c ? source[o] : c);
        }
        return object;
      }
      function He(map, e) {
        cc11001100_hook("map", map, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        var t,
          n,
          data = cc11001100_hook("data", map.__data__, "var-init");
        return ("string" == (n = cc11001100_hook("n", typeof (t = cc11001100_hook("t", e, "assign")), "assign")) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t) ? data["string" == typeof e ? "string" : "hash"] : data.map;
      }
      function Ue(object, e) {
        cc11001100_hook("object", object, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", function (object, e) {
          return null == object ? void 0 : object[e];
        }(object, e), "var-init");
        return ve(t) ? t : void 0;
      }
      pe.prototype.clear = cc11001100_hook("pe.prototype.clear", function () {
        this.__data__ = cc11001100_hook("this.__data__", oe ? oe(null) : {}, "assign");
      }, "assign"), pe.prototype.delete = cc11001100_hook("pe.prototype.delete", function (e) {
        return this.has(e) && delete this.__data__[e];
      }, "assign"), pe.prototype.get = cc11001100_hook("pe.prototype.get", function (e) {
        var data = cc11001100_hook("data", this.__data__, "var-init");
        if (oe) {
          var t = cc11001100_hook("t", data[e], "var-init");
          return "__lodash_hash_undefined__" === t ? void 0 : t;
        }
        return Z.call(data, e) ? data[e] : void 0;
      }, "assign"), pe.prototype.has = cc11001100_hook("pe.prototype.has", function (e) {
        var data = cc11001100_hook("data", this.__data__, "var-init");
        return oe ? void 0 !== data[e] : Z.call(data, e);
      }, "assign"), pe.prototype.set = cc11001100_hook("pe.prototype.set", function (e, t) {
        return this.__data__[e] = cc11001100_hook("this.__data__[e]", oe && void 0 === t ? "__lodash_hash_undefined__" : t, "assign"), this;
      }, "assign"), fe.prototype.clear = cc11001100_hook("fe.prototype.clear", function () {
        this.__data__ = cc11001100_hook("this.__data__", [], "assign");
      }, "assign"), fe.prototype.delete = cc11001100_hook("fe.prototype.delete", function (e) {
        var data = cc11001100_hook("data", this.__data__, "var-init"),
          t = cc11001100_hook("t", ye(data, e), "var-init");
        return !(t < 0) && (t == data.length - 1 ? data.pop() : Q.call(data, t, 1), !0);
      }, "assign"), fe.prototype.get = cc11001100_hook("fe.prototype.get", function (e) {
        var data = cc11001100_hook("data", this.__data__, "var-init"),
          t = cc11001100_hook("t", ye(data, e), "var-init");
        return t < 0 ? void 0 : data[t][1];
      }, "assign"), fe.prototype.has = cc11001100_hook("fe.prototype.has", function (e) {
        return ye(this.__data__, e) > -1;
      }, "assign"), fe.prototype.set = cc11001100_hook("fe.prototype.set", function (e, t) {
        var data = cc11001100_hook("data", this.__data__, "var-init"),
          n = cc11001100_hook("n", ye(data, e), "var-init");
        return n < 0 ? data.push([e, t]) : data[n][1] = cc11001100_hook("data[n][1]", t, "assign"), this;
      }, "assign"), he.prototype.clear = cc11001100_hook("he.prototype.clear", function () {
        this.__data__ = cc11001100_hook("this.__data__", {
          hash: cc11001100_hook("hash", new pe(), "object-key-init"),
          map: cc11001100_hook("map", new (ee || fe)(), "object-key-init"),
          string: cc11001100_hook("string", new pe(), "object-key-init")
        }, "assign");
      }, "assign"), he.prototype.delete = cc11001100_hook("he.prototype.delete", function (e) {
        return He(this, e).delete(e);
      }, "assign"), he.prototype.get = cc11001100_hook("he.prototype.get", function (e) {
        return He(this, e).get(e);
      }, "assign"), he.prototype.has = cc11001100_hook("he.prototype.has", function (e) {
        return He(this, e).has(e);
      }, "assign"), he.prototype.set = cc11001100_hook("he.prototype.set", function (e, t) {
        return He(this, e).set(e, t), this;
      }, "assign"), be.prototype.clear = cc11001100_hook("be.prototype.clear", function () {
        this.__data__ = cc11001100_hook("this.__data__", new fe(), "assign");
      }, "assign"), be.prototype.delete = cc11001100_hook("be.prototype.delete", function (e) {
        return this.__data__.delete(e);
      }, "assign"), be.prototype.get = cc11001100_hook("be.prototype.get", function (e) {
        return this.__data__.get(e);
      }, "assign"), be.prototype.has = cc11001100_hook("be.prototype.has", function (e) {
        return this.__data__.has(e);
      }, "assign"), be.prototype.set = cc11001100_hook("be.prototype.set", function (e, t) {
        var n = cc11001100_hook("n", this.__data__, "var-init");
        if (n instanceof fe) {
          var r = cc11001100_hook("r", n.__data__, "var-init");
          if (!ee || r.length < 199) return r.push([e, t]), this;
          n = cc11001100_hook("n", this.__data__ = cc11001100_hook("this.__data__", new he(r), "assign"), "assign");
        }
        return n.set(e, t), this;
      }, "assign");
      var je = cc11001100_hook("je", G ? A(G, Object) : function () {
          return [];
        }, "var-init"),
        _e = function (e) {
          return B.call(e);
        };
      function Ee(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return !!(t = cc11001100_hook("t", null == t ? 9007199254740991 : t, "assign")) && ("number" == typeof e || m.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Le(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", e && e.constructor, "var-init");
        return e === ("function" == typeof t && t.prototype || O);
      }
      function Ve(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (null != e) {
          try {
            return D.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function Ae(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return e === t || e != e && t != t;
      }
      (Y && "[object DataView]" != _e(new Y(new ArrayBuffer(1))) || ee && _e(new ee()) != l || te && "[object Promise]" != _e(te.resolve()) || ne && _e(new ne()) != d || re && "[object WeakMap]" != _e(new re())) && (_e = cc11001100_hook("_e", function (e) {
        var t = cc11001100_hook("t", B.call(e), "var-init"),
          n = cc11001100_hook("n", "[object Object]" == t ? e.constructor : void 0, "var-init"),
          r = cc11001100_hook("r", n ? Ve(n) : void 0, "var-init");
        if (r) switch (r) {
          case ie:
            return "[object DataView]";
          case ce:
            return l;
          case ae:
            return "[object Promise]";
          case le:
            return d;
          case de:
            return "[object WeakMap]";
        }
        return t;
      }, "assign"));
      var Ie = cc11001100_hook("Ie", Array.isArray, "var-init");
      function ke(e) {
        cc11001100_hook("e", e, "function-parameter");
        return null != e && function (e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
        }(e.length) && !Se(e);
      }
      var Me = cc11001100_hook("Me", J || function () {
        return !1;
      }, "var-init");
      function Se(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", Oe(e) ? B.call(e) : "", "var-init");
        return t == o || t == c;
      }
      function Oe(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", typeof e, "var-init");
        return !!e && ("object" == t || "function" == t);
      }
      function Ne(object) {
        cc11001100_hook("object", object, "function-parameter");
        return ke(object) ? ge(object) : function (object) {
          if (!Le(object)) return X(object);
          var e = cc11001100_hook("e", [], "var-init");
          for (var t in Object(object)) Z.call(object, t) && "constructor" != t && e.push(t);
          return e;
        }(object);
      }
      n.exports = cc11001100_hook("n.exports", function (e) {
        return xe(e, !0, !0);
      }, "assign");
    }).call(this, n(73), n(437)(e));
  },
  1138: function (e, t, n) {
    e.exports = cc11001100_hook("e.exports", {
      "a11y-dark": cc11001100_hook("a11y-dark", () => n.e(233).then(n.t.bind(null, 4569, 7)), "object-key-init"),
      "a11y-light": cc11001100_hook("a11y-light", () => n.e(234).then(n.t.bind(null, 4570, 7)), "object-key-init"),
      agate: cc11001100_hook("agate", () => n.e(235).then(n.t.bind(null, 4571, 7)), "object-key-init"),
      "an-old-hope": cc11001100_hook("an-old-hope", () => n.e(236).then(n.t.bind(null, 4572, 7)), "object-key-init"),
      androidstudio: cc11001100_hook("androidstudio", () => n.e(237).then(n.t.bind(null, 4573, 7)), "object-key-init"),
      "arduino-light": cc11001100_hook("arduino-light", () => n.e(238).then(n.t.bind(null, 4574, 7)), "object-key-init"),
      arta: cc11001100_hook("arta", () => n.e(239).then(n.t.bind(null, 4575, 7)), "object-key-init"),
      ascetic: cc11001100_hook("ascetic", () => n.e(240).then(n.t.bind(null, 4576, 7)), "object-key-init"),
      "atelier-cave-dark": cc11001100_hook("atelier-cave-dark", () => n.e(241).then(n.t.bind(null, 4577, 7)), "object-key-init"),
      "atelier-cave-light": cc11001100_hook("atelier-cave-light", () => n.e(242).then(n.t.bind(null, 4578, 7)), "object-key-init"),
      "atelier-dune-dark": cc11001100_hook("atelier-dune-dark", () => n.e(243).then(n.t.bind(null, 4579, 7)), "object-key-init"),
      "atelier-dune-light": cc11001100_hook("atelier-dune-light", () => n.e(244).then(n.t.bind(null, 4580, 7)), "object-key-init"),
      "atelier-estuary-dark": cc11001100_hook("atelier-estuary-dark", () => n.e(245).then(n.t.bind(null, 4581, 7)), "object-key-init"),
      "atelier-estuary-light": cc11001100_hook("atelier-estuary-light", () => n.e(246).then(n.t.bind(null, 4582, 7)), "object-key-init"),
      "atelier-forest-dark": cc11001100_hook("atelier-forest-dark", () => n.e(247).then(n.t.bind(null, 4583, 7)), "object-key-init"),
      "atelier-forest-light": cc11001100_hook("atelier-forest-light", () => n.e(248).then(n.t.bind(null, 4584, 7)), "object-key-init"),
      "atelier-heath-dark": cc11001100_hook("atelier-heath-dark", () => n.e(249).then(n.t.bind(null, 4585, 7)), "object-key-init"),
      "atelier-heath-light": cc11001100_hook("atelier-heath-light", () => n.e(250).then(n.t.bind(null, 4586, 7)), "object-key-init"),
      "atelier-lakeside-dark": cc11001100_hook("atelier-lakeside-dark", () => n.e(251).then(n.t.bind(null, 4587, 7)), "object-key-init"),
      "atelier-lakeside-light": cc11001100_hook("atelier-lakeside-light", () => n.e(252).then(n.t.bind(null, 4588, 7)), "object-key-init"),
      "atelier-plateau-dark": cc11001100_hook("atelier-plateau-dark", () => n.e(253).then(n.t.bind(null, 4589, 7)), "object-key-init"),
      "atelier-plateau-light": cc11001100_hook("atelier-plateau-light", () => n.e(254).then(n.t.bind(null, 4590, 7)), "object-key-init"),
      "atelier-savanna-dark": cc11001100_hook("atelier-savanna-dark", () => n.e(255).then(n.t.bind(null, 4591, 7)), "object-key-init"),
      "atelier-savanna-light": cc11001100_hook("atelier-savanna-light", () => n.e(256).then(n.t.bind(null, 4592, 7)), "object-key-init"),
      "atelier-seaside-dark": cc11001100_hook("atelier-seaside-dark", () => n.e(257).then(n.t.bind(null, 4593, 7)), "object-key-init"),
      "atelier-seaside-light": cc11001100_hook("atelier-seaside-light", () => n.e(258).then(n.t.bind(null, 4594, 7)), "object-key-init"),
      "atelier-sulphurpool-dark": cc11001100_hook("atelier-sulphurpool-dark", () => n.e(259).then(n.t.bind(null, 4595, 7)), "object-key-init"),
      "atelier-sulphurpool-light": cc11001100_hook("atelier-sulphurpool-light", () => n.e(260).then(n.t.bind(null, 4596, 7)), "object-key-init"),
      "atom-one-dark-reasonable": cc11001100_hook("atom-one-dark-reasonable", () => n.e(261).then(n.t.bind(null, 4597, 7)), "object-key-init"),
      "atom-one-dark": cc11001100_hook("atom-one-dark", () => n.e(262).then(n.t.bind(null, 4598, 7)), "object-key-init"),
      "atom-one-light": cc11001100_hook("atom-one-light", () => n.e(263).then(n.t.bind(null, 4599, 7)), "object-key-init"),
      "brown-paper": cc11001100_hook("brown-paper", () => n.e(264).then(n.t.bind(null, 4600, 7)), "object-key-init"),
      "codepen-embed": cc11001100_hook("codepen-embed", () => n.e(265).then(n.t.bind(null, 4601, 7)), "object-key-init"),
      "color-brewer": cc11001100_hook("color-brewer", () => n.e(266).then(n.t.bind(null, 4602, 7)), "object-key-init"),
      darcula: cc11001100_hook("darcula", () => n.e(267).then(n.t.bind(null, 4603, 7)), "object-key-init"),
      dark: cc11001100_hook("dark", () => n.e(268).then(n.t.bind(null, 4604, 7)), "object-key-init"),
      default: cc11001100_hook("default", () => n.e(269).then(n.t.bind(null, 4605, 7)), "object-key-init"),
      docco: cc11001100_hook("docco", () => n.e(270).then(n.t.bind(null, 4606, 7)), "object-key-init"),
      dracula: cc11001100_hook("dracula", () => n.e(271).then(n.t.bind(null, 4607, 7)), "object-key-init"),
      far: cc11001100_hook("far", () => n.e(272).then(n.t.bind(null, 4608, 7)), "object-key-init"),
      foundation: cc11001100_hook("foundation", () => n.e(273).then(n.t.bind(null, 4609, 7)), "object-key-init"),
      "github-gist": cc11001100_hook("github-gist", () => n.e(274).then(n.t.bind(null, 4610, 7)), "object-key-init"),
      github: cc11001100_hook("github", () => n.e(275).then(n.t.bind(null, 4611, 7)), "object-key-init"),
      gml: cc11001100_hook("gml", () => n.e(276).then(n.t.bind(null, 4612, 7)), "object-key-init"),
      googlecode: cc11001100_hook("googlecode", () => n.e(277).then(n.t.bind(null, 4613, 7)), "object-key-init"),
      "gradient-dark": cc11001100_hook("gradient-dark", () => n.e(278).then(n.t.bind(null, 4614, 7)), "object-key-init"),
      "gradient-light": cc11001100_hook("gradient-light", () => n.e(279).then(n.t.bind(null, 4615, 7)), "object-key-init"),
      grayscale: cc11001100_hook("grayscale", () => n.e(280).then(n.t.bind(null, 4616, 7)), "object-key-init"),
      "gruvbox-dark": cc11001100_hook("gruvbox-dark", () => n.e(281).then(n.t.bind(null, 4617, 7)), "object-key-init"),
      "gruvbox-light": cc11001100_hook("gruvbox-light", () => n.e(282).then(n.t.bind(null, 4618, 7)), "object-key-init"),
      hopscotch: cc11001100_hook("hopscotch", () => n.e(283).then(n.t.bind(null, 4619, 7)), "object-key-init"),
      hybrid: cc11001100_hook("hybrid", () => n.e(284).then(n.t.bind(null, 4620, 7)), "object-key-init"),
      idea: cc11001100_hook("idea", () => n.e(285).then(n.t.bind(null, 4621, 7)), "object-key-init"),
      "ir-black": cc11001100_hook("ir-black", () => n.e(286).then(n.t.bind(null, 4622, 7)), "object-key-init"),
      "isbl-editor-dark": cc11001100_hook("isbl-editor-dark", () => n.e(287).then(n.t.bind(null, 4623, 7)), "object-key-init"),
      "isbl-editor-light": cc11001100_hook("isbl-editor-light", () => n.e(288).then(n.t.bind(null, 4624, 7)), "object-key-init"),
      "kimbie.dark": cc11001100_hook("kimbie.dark", () => n.e(289).then(n.t.bind(null, 4625, 7)), "object-key-init"),
      "kimbie.light": cc11001100_hook("kimbie.light", () => n.e(290).then(n.t.bind(null, 4626, 7)), "object-key-init"),
      lightfair: cc11001100_hook("lightfair", () => n.e(291).then(n.t.bind(null, 4627, 7)), "object-key-init"),
      lioshi: cc11001100_hook("lioshi", () => n.e(292).then(n.t.bind(null, 4628, 7)), "object-key-init"),
      magula: cc11001100_hook("magula", () => n.e(293).then(n.t.bind(null, 4629, 7)), "object-key-init"),
      "mono-blue": cc11001100_hook("mono-blue", () => n.e(294).then(n.t.bind(null, 4630, 7)), "object-key-init"),
      "monokai-sublime": cc11001100_hook("monokai-sublime", () => n.e(295).then(n.t.bind(null, 4631, 7)), "object-key-init"),
      monokai: cc11001100_hook("monokai", () => n.e(296).then(n.t.bind(null, 4632, 7)), "object-key-init"),
      "night-owl": cc11001100_hook("night-owl", () => n.e(297).then(n.t.bind(null, 4633, 7)), "object-key-init"),
      "nnfx-dark": cc11001100_hook("nnfx-dark", () => n.e(298).then(n.t.bind(null, 4634, 7)), "object-key-init"),
      nnfx: cc11001100_hook("nnfx", () => n.e(299).then(n.t.bind(null, 4635, 7)), "object-key-init"),
      nord: cc11001100_hook("nord", () => n.e(300).then(n.t.bind(null, 4636, 7)), "object-key-init"),
      obsidian: cc11001100_hook("obsidian", () => n.e(301).then(n.t.bind(null, 4637, 7)), "object-key-init"),
      ocean: cc11001100_hook("ocean", () => n.e(302).then(n.t.bind(null, 4638, 7)), "object-key-init"),
      "paraiso-dark": cc11001100_hook("paraiso-dark", () => n.e(303).then(n.t.bind(null, 4639, 7)), "object-key-init"),
      "paraiso-light": cc11001100_hook("paraiso-light", () => n.e(304).then(n.t.bind(null, 4640, 7)), "object-key-init"),
      pojoaque: cc11001100_hook("pojoaque", () => n.e(305).then(n.t.bind(null, 4641, 7)), "object-key-init"),
      purebasic: cc11001100_hook("purebasic", () => n.e(306).then(n.t.bind(null, 4642, 7)), "object-key-init"),
      qtcreator_dark: cc11001100_hook("qtcreator_dark", () => n.e(307).then(n.t.bind(null, 4643, 7)), "object-key-init"),
      qtcreator_light: cc11001100_hook("qtcreator_light", () => n.e(308).then(n.t.bind(null, 4644, 7)), "object-key-init"),
      railscasts: cc11001100_hook("railscasts", () => n.e(309).then(n.t.bind(null, 4645, 7)), "object-key-init"),
      rainbow: cc11001100_hook("rainbow", () => n.e(310).then(n.t.bind(null, 4646, 7)), "object-key-init"),
      routeros: cc11001100_hook("routeros", () => n.e(311).then(n.t.bind(null, 4647, 7)), "object-key-init"),
      "school-book": cc11001100_hook("school-book", () => n.e(312).then(n.t.bind(null, 4648, 7)), "object-key-init"),
      "shades-of-purple": cc11001100_hook("shades-of-purple", () => n.e(313).then(n.t.bind(null, 4649, 7)), "object-key-init"),
      "solarized-dark": cc11001100_hook("solarized-dark", () => n.e(314).then(n.t.bind(null, 4650, 7)), "object-key-init"),
      "solarized-light": cc11001100_hook("solarized-light", () => n.e(315).then(n.t.bind(null, 4651, 7)), "object-key-init"),
      srcery: cc11001100_hook("srcery", () => n.e(316).then(n.t.bind(null, 4652, 7)), "object-key-init"),
      sunburst: cc11001100_hook("sunburst", () => n.e(317).then(n.t.bind(null, 4653, 7)), "object-key-init"),
      "tomorrow-night-blue": cc11001100_hook("tomorrow-night-blue", () => n.e(318).then(n.t.bind(null, 4654, 7)), "object-key-init"),
      "tomorrow-night-bright": cc11001100_hook("tomorrow-night-bright", () => n.e(319).then(n.t.bind(null, 4655, 7)), "object-key-init"),
      "tomorrow-night-eighties": cc11001100_hook("tomorrow-night-eighties", () => n.e(320).then(n.t.bind(null, 4656, 7)), "object-key-init"),
      "tomorrow-night": cc11001100_hook("tomorrow-night", () => n.e(321).then(n.t.bind(null, 4657, 7)), "object-key-init"),
      tomorrow: cc11001100_hook("tomorrow", () => n.e(322).then(n.t.bind(null, 4658, 7)), "object-key-init"),
      vs: cc11001100_hook("vs", () => n.e(323).then(n.t.bind(null, 4659, 7)), "object-key-init"),
      vs2015: cc11001100_hook("vs2015", () => n.e(324).then(n.t.bind(null, 4660, 7)), "object-key-init"),
      xcode: cc11001100_hook("xcode", () => n.e(325).then(n.t.bind(null, 4661, 7)), "object-key-init"),
      xt256: cc11001100_hook("xt256", () => n.e(326).then(n.t.bind(null, 4662, 7)), "object-key-init"),
      zenburn: cc11001100_hook("zenburn", () => n.e(327).then(n.t.bind(null, 4663, 7)), "object-key-init")
    }, "assign");
  },
  1139: function (e, t, n) {},
  1148: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return m;
    });
    var r = cc11001100_hook("r", n(4847), "var-init"),
      o = cc11001100_hook("o", (n(23), n(24), n(7), n(88), n(1357), n(48), n(1606)), "var-init"),
      c = cc11001100_hook("c", n.n(o), "var-init"),
      l = cc11001100_hook("l", n(4929), "var-init"),
      d = cc11001100_hook("d", {
        abandonedHeadElementChild: {
          reason: cc11001100_hook("reason", "Unexpected metadata element after head", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected element after head. Expected the element before `</head>`", "object-key-init"),
          url: cc11001100_hook("url", !1, "object-key-init")
        },
        abruptClosingOfEmptyComment: {
          reason: cc11001100_hook("reason", "Unexpected abruptly closed empty comment", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `>` or `->`. Expected `--\x3e` to close comments", "object-key-init")
        },
        abruptDoctypePublicIdentifier: {
          reason: cc11001100_hook("reason", "Unexpected abruptly closed public identifier", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `>`. Expected a closing `\"` or `'` after the public identifier", "object-key-init")
        },
        abruptDoctypeSystemIdentifier: {
          reason: cc11001100_hook("reason", "Unexpected abruptly closed system identifier", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `>`. Expected a closing `\"` or `'` after the identifier identifier", "object-key-init")
        },
        absenceOfDigitsInNumericCharacterReference: {
          reason: cc11001100_hook("reason", "Unexpected non-digit at start of numeric character reference", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected `[0-9]` for decimal references or `[0-9a-fA-F]` for hexadecimal references", "object-key-init")
        },
        cdataInHtmlContent: {
          reason: cc11001100_hook("reason", "Unexpected CDATA section in HTML", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `<![CDATA[` in HTML. Remove it, use a comment, or encode special characters instead", "object-key-init")
        },
        characterReferenceOutsideUnicodeRange: {
          reason: cc11001100_hook("reason", "Unexpected too big numeric character reference", "object-key-init"),
          description: cc11001100_hook("description", "Unexpectedly high character reference. Expected character references to be at most hexadecimal 10ffff (or decimal 1114111)", "object-key-init")
        },
        closingOfElementWithOpenChildElements: {
          reason: cc11001100_hook("reason", "Unexpected closing tag with open child elements", "object-key-init"),
          description: cc11001100_hook("description", "Unexpectedly closing tag. Expected other tags to be closed first", "object-key-init"),
          url: cc11001100_hook("url", !1, "object-key-init")
        },
        controlCharacterInInputStream: {
          reason: cc11001100_hook("reason", "Unexpected control character", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected control character `%x`. Expected a non-control code point, 0x00, or ASCII whitespace", "object-key-init")
        },
        controlCharacterReference: {
          reason: cc11001100_hook("reason", "Unexpected control character reference", "object-key-init"),
          description: cc11001100_hook("description", "Unexpectedly control character in reference. Expected a non-control code point, 0x00, or ASCII whitespace", "object-key-init")
        },
        disallowedContentInNoscriptInHead: {
          reason: cc11001100_hook("reason", "Disallowed content inside `<noscript>` in `<head>`", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected text character `%c`. Only use text in `<noscript>`s in `<body>`", "object-key-init"),
          url: cc11001100_hook("url", !1, "object-key-init")
        },
        duplicateAttribute: {
          reason: cc11001100_hook("reason", "Unexpected duplicate attribute", "object-key-init"),
          description: cc11001100_hook("description", "Unexpectedly double attribute. Expected attributes to occur only once", "object-key-init")
        },
        endTagWithAttributes: {
          reason: cc11001100_hook("reason", "Unexpected attribute on closing tag", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected attribute. Expected `>` instead", "object-key-init")
        },
        endTagWithTrailingSolidus: {
          reason: cc11001100_hook("reason", "Unexpected slash at end of closing tag", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c-1`. Expected `>` instead", "object-key-init")
        },
        endTagWithoutMatchingOpenElement: {
          reason: cc11001100_hook("reason", "Unexpected unopened end tag", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected end tag. Expected no end tag or another end tag", "object-key-init"),
          url: cc11001100_hook("url", !1, "object-key-init")
        },
        eofBeforeTagName: {
          reason: cc11001100_hook("reason", "Unexpected end of file", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected end of file. Expected tag name instead", "object-key-init")
        },
        eofInCdata: {
          reason: cc11001100_hook("reason", "Unexpected end of file in CDATA", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected end of file. Expected `]]>` to close the CDATA", "object-key-init")
        },
        eofInComment: {
          reason: cc11001100_hook("reason", "Unexpected end of file in comment", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected end of file. Expected `--\x3e` to close the comment", "object-key-init")
        },
        eofInDoctype: {
          reason: cc11001100_hook("reason", "Unexpected end of file in doctype", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected end of file. Expected a valid doctype (such as `<!doctype html>`)", "object-key-init")
        },
        eofInElementThatCanContainOnlyText: {
          reason: cc11001100_hook("reason", "Unexpected end of file in element that can only contain text", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected end of file. Expected text or a closing tag", "object-key-init"),
          url: cc11001100_hook("url", !1, "object-key-init")
        },
        eofInScriptHtmlCommentLikeText: {
          reason: cc11001100_hook("reason", "Unexpected end of file in comment inside script", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected end of file. Expected `--\x3e` to close the comment", "object-key-init")
        },
        eofInTag: {
          reason: cc11001100_hook("reason", "Unexpected end of file in tag", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected end of file. Expected `>` to close the tag", "object-key-init")
        },
        incorrectlyClosedComment: {
          reason: cc11001100_hook("reason", "Incorrectly closed comment", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c-1`. Expected `--\x3e` to close the comment", "object-key-init")
        },
        incorrectlyOpenedComment: {
          reason: cc11001100_hook("reason", "Incorrectly opened comment", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected `\x3c!--` to open the comment", "object-key-init")
        },
        invalidCharacterSequenceAfterDoctypeName: {
          reason: cc11001100_hook("reason", "Invalid sequence after doctype name", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected sequence at `%c`. Expected `public` or `system`", "object-key-init")
        },
        invalidFirstCharacterOfTagName: {
          reason: cc11001100_hook("reason", "Invalid first character in tag name", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected an ASCII letter instead", "object-key-init")
        },
        misplacedDoctype: {
          reason: cc11001100_hook("reason", "Misplaced doctype", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected doctype. Expected doctype before head", "object-key-init"),
          url: cc11001100_hook("url", !1, "object-key-init")
        },
        misplacedStartTagForHeadElement: {
          reason: cc11001100_hook("reason", "Misplaced `<head>` start tag", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected start tag `<head>`. Expected `<head>` directly after doctype", "object-key-init"),
          url: cc11001100_hook("url", !1, "object-key-init")
        },
        missingAttributeValue: {
          reason: cc11001100_hook("reason", "Missing attribute value", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c-1`. Expected an attribute value or no `%c-1` instead", "object-key-init")
        },
        missingDoctype: {
          reason: cc11001100_hook("reason", "Missing doctype before other content", "object-key-init"),
          description: cc11001100_hook("description", "Expected a `<!doctype html>` before anything else", "object-key-init"),
          url: cc11001100_hook("url", !1, "object-key-init")
        },
        missingDoctypeName: {
          reason: cc11001100_hook("reason", "Missing doctype name", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected doctype end at `%c`. Expected `html` instead", "object-key-init")
        },
        missingDoctypePublicIdentifier: {
          reason: cc11001100_hook("reason", "Missing public identifier in doctype", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected identifier for `public` instead", "object-key-init")
        },
        missingDoctypeSystemIdentifier: {
          reason: cc11001100_hook("reason", "Missing system identifier in doctype", "object-key-init"),
          description: cc11001100_hook("description", 'Unexpected `%c`. Expected identifier for `system` instead (suggested: `"about:legacy-compat"`)', "object-key-init")
        },
        missingEndTagName: {
          reason: cc11001100_hook("reason", "Missing name in end tag", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected an ASCII letter instead", "object-key-init")
        },
        missingQuoteBeforeDoctypePublicIdentifier: {
          reason: cc11001100_hook("reason", "Missing quote before public identifier in doctype", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected `\"` or `'` instead", "object-key-init")
        },
        missingQuoteBeforeDoctypeSystemIdentifier: {
          reason: cc11001100_hook("reason", "Missing quote before system identifier in doctype", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected `\"` or `'` instead", "object-key-init")
        },
        missingSemicolonAfterCharacterReference: {
          reason: cc11001100_hook("reason", "Missing semicolon after character reference", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected `;` instead", "object-key-init")
        },
        missingWhitespaceAfterDoctypePublicKeyword: {
          reason: cc11001100_hook("reason", "Missing whitespace after public identifier in doctype", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected ASCII whitespace instead", "object-key-init")
        },
        missingWhitespaceAfterDoctypeSystemKeyword: {
          reason: cc11001100_hook("reason", "Missing whitespace after system identifier in doctype", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected ASCII whitespace instead", "object-key-init")
        },
        missingWhitespaceBeforeDoctypeName: {
          reason: cc11001100_hook("reason", "Missing whitespace before doctype name", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected ASCII whitespace instead", "object-key-init")
        },
        missingWhitespaceBetweenAttributes: {
          reason: cc11001100_hook("reason", "Missing whitespace between attributes", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected ASCII whitespace instead", "object-key-init")
        },
        missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: {
          reason: cc11001100_hook("reason", "Missing whitespace between public and system identifiers in doctype", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected ASCII whitespace instead", "object-key-init")
        },
        nestedComment: {
          reason: cc11001100_hook("reason", "Unexpected nested comment", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `\x3c!--`. Expected `--\x3e`", "object-key-init")
        },
        nestedNoscriptInHead: {
          reason: cc11001100_hook("reason", "Unexpected nested `<noscript>` in `<head>`", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `<noscript>`. Expected a closing tag or a meta element", "object-key-init"),
          url: cc11001100_hook("url", !1, "object-key-init")
        },
        nonConformingDoctype: {
          reason: cc11001100_hook("reason", "Unexpected non-conforming doctype declaration", "object-key-init"),
          description: cc11001100_hook("description", 'Expected `<!doctype html>` or `<!doctype html system "about:legacy-compat">`', "object-key-init"),
          url: cc11001100_hook("url", !1, "object-key-init")
        },
        nonVoidHtmlElementStartTagWithTrailingSolidus: {
          reason: cc11001100_hook("reason", "Unexpected trailing slash on start tag of non-void element", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `/`. Expected `>` instead", "object-key-init")
        },
        noncharacterCharacterReference: {
          reason: cc11001100_hook("reason", "Unexpected noncharacter code point referenced by character reference", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected code point. Do not use noncharacters in HTML", "object-key-init")
        },
        noncharacterInInputStream: {
          reason: cc11001100_hook("reason", "Unexpected noncharacter character", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected code point `%x`. Do not use noncharacters in HTML", "object-key-init")
        },
        nullCharacterReference: {
          reason: cc11001100_hook("reason", "Unexpected NULL character referenced by character reference", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected code point. Do not use NULL characters in HTML", "object-key-init")
        },
        openElementsLeftAfterEof: {
          reason: cc11001100_hook("reason", "Unexpected end of file", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected end of file. Expected closing tag instead", "object-key-init"),
          url: cc11001100_hook("url", !1, "object-key-init")
        },
        surrogateCharacterReference: {
          reason: cc11001100_hook("reason", "Unexpected surrogate character referenced by character reference", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected code point. Do not use lone surrogate characters in HTML", "object-key-init")
        },
        surrogateInInputStream: {
          reason: cc11001100_hook("reason", "Unexpected surrogate character", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected code point `%x`. Do not use lone surrogate characters in HTML", "object-key-init")
        },
        unexpectedCharacterAfterDoctypeSystemIdentifier: {
          reason: cc11001100_hook("reason", "Invalid character after system identifier in doctype", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected character at `%c`. Expected `>`", "object-key-init")
        },
        unexpectedCharacterInAttributeName: {
          reason: cc11001100_hook("reason", "Unexpected character in attribute name", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected whitespace, `/`, `>`, `=`, or probably an ASCII letter", "object-key-init")
        },
        unexpectedCharacterInUnquotedAttributeValue: {
          reason: cc11001100_hook("reason", "Unexpected character in unquoted attribute value", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Quote the attribute value to include it", "object-key-init")
        },
        unexpectedEqualsSignBeforeAttributeName: {
          reason: cc11001100_hook("reason", "Unexpected equals sign before attribute name", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Add an attribute name before it", "object-key-init")
        },
        unexpectedNullCharacter: {
          reason: cc11001100_hook("reason", "Unexpected NULL character", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected code point `%x`. Do not use NULL characters in HTML", "object-key-init")
        },
        unexpectedQuestionMarkInsteadOfTagName: {
          reason: cc11001100_hook("reason", "Unexpected question mark instead of tag name", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c`. Expected an ASCII letter instead", "object-key-init")
        },
        unexpectedSolidusInTag: {
          reason: cc11001100_hook("reason", "Unexpected slash in tag", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected `%c-1`. Expected it followed by `>` or in a quoted attribute value", "object-key-init")
        },
        unknownNamedCharacterReference: {
          reason: cc11001100_hook("reason", "Unexpected unknown named character reference", "object-key-init"),
          description: cc11001100_hook("description", "Unexpected character reference. Expected known named character references", "object-key-init")
        }
      }, "var-init"),
      f = cc11001100_hook("f", {
        2: cc11001100_hook(2, !0, "object-key-init"),
        1: cc11001100_hook(1, !1, "object-key-init"),
        0: cc11001100_hook(0, null, "object-key-init")
      }, "var-init");
    var h = cc11001100_hook("h", n(4768), "var-init"),
      m = cc11001100_hook("m", Object(r.a)().use(function (e) {
        var t = cc11001100_hook("t", this.data("settings"), "var-init"),
          n = cc11001100_hook("n", Object.assign({}, t, e), "var-init");
        Object.assign(this, {
          Parser: function (e, t) {
            var r = cc11001100_hook("r", n.fragment ? "parseFragment" : "parse", "var-init"),
              o = cc11001100_hook("o", n.emitParseErrors ? function (r) {
                var code = cc11001100_hook("code", r.code, "var-init"),
                  o = cc11001100_hook("o", (x = cc11001100_hook("x", code, "assign"), x.replace(/-[a-z]/g, function (e) {
                    return e.charAt(1).toUpperCase();
                  })), "var-init"),
                  c = cc11001100_hook("c", n[o], "var-init"),
                  l = cc11001100_hook("l", null == c || c, "var-init"),
                  h = cc11001100_hook("h", "number" == typeof l ? l : l ? 1 : 0, "var-init"),
                  m = cc11001100_hook("m", {
                    line: cc11001100_hook("line", r.startLine, "object-key-init"),
                    column: cc11001100_hook("column", r.startCol, "object-key-init"),
                    offset: cc11001100_hook("offset", r.startOffset, "object-key-init")
                  }, "var-init"),
                  y = cc11001100_hook("y", {
                    line: cc11001100_hook("line", r.endLine, "object-key-init"),
                    column: cc11001100_hook("column", r.endCol, "object-key-init"),
                    offset: cc11001100_hook("offset", r.endOffset, "object-key-init")
                  }, "var-init");
                var x;
                if (h) {
                  var v = cc11001100_hook("v", d[o] || {
                      reason: cc11001100_hook("reason", "", "object-key-init"),
                      description: cc11001100_hook("description", "", "object-key-init"),
                      url: cc11001100_hook("url", "", "object-key-init")
                    }, "var-init"),
                    C = cc11001100_hook("C", t.message(w(v.reason), {
                      start: cc11001100_hook("start", m, "object-key-init"),
                      end: cc11001100_hook("end", y, "object-key-init")
                    }), "var-init");
                  C.source = cc11001100_hook("C.source", "parse-error", "assign"), C.ruleId = cc11001100_hook("C.ruleId", code, "assign"), C.fatal = cc11001100_hook("C.fatal", f[h], "assign"), C.note = cc11001100_hook("C.note", w(v.description), "assign"), C.url = cc11001100_hook("C.url", "url" in v && !1 === v.url ? null : "https://html.spec.whatwg.org/multipage/parsing.html#parse-error-" + code, "assign");
                }
                function w(t) {
                  cc11001100_hook("t", t, "function-parameter");
                  return t.replace(/%c(?:-(\d+))?/g, function (t, n) {
                    var o = cc11001100_hook("o", n ? -Number.parseInt(n, 10) : 0, "var-init"),
                      c = cc11001100_hook("c", e.charAt(r.startOffset + o), "var-init");
                    return "`" === c ? "` ` `" : c;
                  }).replace(/%x/g, function () {
                    return "0x" + e.charCodeAt(r.startOffset).toString(16).toUpperCase();
                  });
                }
              } : null, "var-init"),
              h = cc11001100_hook("h", new c.a({
                sourceCodeLocationInfo: cc11001100_hook("sourceCodeLocationInfo", !0, "object-key-init"),
                onParseError: cc11001100_hook("onParseError", o, "object-key-init"),
                scriptingEnabled: cc11001100_hook("scriptingEnabled", !1, "object-key-init")
              }), "var-init");
            return Object(l.a)(h[r](e), {
              space: cc11001100_hook("space", n.space, "object-key-init"),
              file: cc11001100_hook("file", t, "object-key-init"),
              verbose: cc11001100_hook("verbose", n.verbose, "object-key-init")
            });
          }
        });
      }).use(h.a).freeze(), "var-init");
  },
  2155: function (e, t, n) {
    "use strict";

    n(72), t.parse = cc11001100_hook("t.parse", function (e) {
      var input = cc11001100_hook("input", String(e || "").trim(), "var-init");
      return "" === input ? [] : input.split(r);
    }, "assign"), t.stringify = cc11001100_hook("t.stringify", function (e) {
      return e.join(" ").trim();
    }, "assign");
    var r = cc11001100_hook("r", /[ \t\n\r\f]+/g, "var-init");
  },
  2156: function (e, t, n) {
    "use strict";

    t.parse = cc11001100_hook("t.parse", function (e) {
      var t,
        n = cc11001100_hook("n", [], "var-init"),
        input = cc11001100_hook("input", String(e || ""), "var-init"),
        r = cc11001100_hook("r", input.indexOf(","), "var-init"),
        o = cc11001100_hook("o", 0, "var-init"),
        c = cc11001100_hook("c", !1, "var-init");
      for (; !c;) -1 === r && (r = cc11001100_hook("r", input.length, "assign"), c = cc11001100_hook("c", !0, "assign")), !(t = cc11001100_hook("t", input.slice(o, r).trim(), "assign")) && c || n.push(t), o = cc11001100_hook("o", r + 1, "assign"), r = cc11001100_hook("r", input.indexOf(",", o), "assign");
      return n;
    }, "assign"), t.stringify = cc11001100_hook("t.stringify", function (e, t) {
      var n = cc11001100_hook("n", t || {}, "var-init"),
        r = cc11001100_hook("r", !1 === n.padLeft ? "" : " ", "var-init"),
        o = cc11001100_hook("o", n.padRight ? " " : "", "var-init");
      "" === e[e.length - 1] && (e = cc11001100_hook("e", e.concat(""), "assign"));
      return e.join(o + "," + r).trim();
    }, "assign");
  },
  2997: function (e, t, n) {
    "use strict";

    e.exports = cc11001100_hook("e.exports", n(2998), "assign");
  },
  2998: function (e, t, n) {
    "use strict";

    var r = cc11001100_hook("r", n(1599), "var-init"),
      html = cc11001100_hook("html", n(3001)(r, "div"), "var-init");
    html.displayName = cc11001100_hook("html.displayName", "html", "assign"), e.exports = cc11001100_hook("e.exports", html, "assign");
  },
  3001: function (e, t, n) {
    "use strict";

    n(88);
    var r = cc11001100_hook("r", n(224), "var-init"),
      o = cc11001100_hook("o", n(1601), "var-init"),
      c = cc11001100_hook("c", n(1354), "var-init"),
      l = cc11001100_hook("l", n(3002), "var-init"),
      d = cc11001100_hook("d", n(2155).parse, "var-init"),
      f = cc11001100_hook("f", n(2156).parse, "var-init");
    e.exports = cc11001100_hook("e.exports", function (e, t, n) {
      var c = cc11001100_hook("c", n ? function (e) {
        var t,
          n = cc11001100_hook("n", e.length, "var-init"),
          r = cc11001100_hook("r", -1, "var-init"),
          o = cc11001100_hook("o", {}, "var-init");
        for (; ++r < n;) t = cc11001100_hook("t", e[r], "assign"), o[t.toLowerCase()] = cc11001100_hook("o[t.toLowerCase()]", t, "assign");
        return o;
      }(n) : null, "var-init");
      return function (e, n) {
        var r,
          o = cc11001100_hook("o", l(e, t), "var-init"),
          d = cc11001100_hook("d", Array.prototype.slice.call(arguments, 2), "var-init"),
          f = cc11001100_hook("f", o.tagName.toLowerCase(), "var-init");
        o.tagName = cc11001100_hook("o.tagName", c && h.call(c, f) ? c[f] : f, "assign"), n && m(n, o) && (d.unshift(n), n = cc11001100_hook("n", null, "assign"));
        if (n) for (r in n) v(o.properties, r, n[r]);
        y(o.children, d), "template" === o.tagName && (o.content = cc11001100_hook("o.content", {
          type: cc11001100_hook("type", "root", "object-key-init"),
          children: cc11001100_hook("children", o.children, "object-key-init")
        }, "assign"), o.children = cc11001100_hook("o.children", [], "assign"));
        return o;
      };
      function v(t, n, c) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        var l, h, m;
        null != c && c == c && (h = cc11001100_hook("h", (l = cc11001100_hook("l", o(e, n), "assign")).property, "assign"), "string" == typeof (m = cc11001100_hook("m", c, "assign")) && (l.spaceSeparated ? m = cc11001100_hook("m", d(m), "assign") : l.commaSeparated ? m = cc11001100_hook("m", f(m), "assign") : l.commaOrSpaceSeparated && (m = cc11001100_hook("m", d(f(m).join(" ")), "assign"))), "style" === h && "string" != typeof c && (m = cc11001100_hook("m", function (e) {
          var t,
            n = cc11001100_hook("n", [], "var-init");
          for (t in e) n.push([t, e[t]].join(": "));
          return n.join("; ");
        }(m), "assign")), "className" === h && t.className && (m = cc11001100_hook("m", t.className.concat(m), "assign")), t[h] = cc11001100_hook("t[h]", function (e, t, n) {
          var o, c, l;
          if ("object" !== r(n) || !("length" in n)) return x(e, t, n);
          c = cc11001100_hook("c", n.length, "assign"), o = cc11001100_hook("o", -1, "assign"), l = cc11001100_hook("l", [], "assign");
          for (; ++o < c;) l[o] = cc11001100_hook("l[o]", x(e, t, n[o]), "assign");
          return l;
        }(l, h, m), "assign"));
      }
    }, "assign");
    var h = cc11001100_hook("h", {}.hasOwnProperty, "var-init");
    function m(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return "string" == typeof e || "length" in e || function (e, t) {
        var n = cc11001100_hook("n", t.type, "var-init");
        if ("input" === e || !n || "string" != typeof n) return !1;
        if ("object" === r(t.children) && "length" in t.children) return !0;
        if (n = cc11001100_hook("n", n.toLowerCase(), "assign"), "button" === e) return "menu" !== n && "submit" !== n && "reset" !== n && "button" !== n;
        return "value" in t;
      }(t.tagName, e);
    }
    function y(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n, o;
      if ("string" != typeof t && "number" != typeof t) {
        if ("object" === r(t) && "length" in t) for (n = cc11001100_hook("n", -1, "assign"), o = cc11001100_hook("o", t.length, "assign"); ++n < o;) y(e, t[n]);else {
          if ("object" !== r(t) || !("type" in t)) throw new Error("Expected node, nodes, or string, got `" + t + "`");
          e.push(t);
        }
      } else e.push({
        type: cc11001100_hook("type", "text", "object-key-init"),
        value: cc11001100_hook("value", String(t), "object-key-init")
      });
    }
    function x(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", n, "var-init");
      return e.number || e.positiveNumber ? isNaN(r) || "" === r || (r = cc11001100_hook("r", Number(r), "assign")) : (e.boolean || e.overloadedBoolean) && ("string" != typeof r || "" !== r && c(n) !== c(t) || (r = cc11001100_hook("r", !0, "assign"))), r;
    }
  },
  3002: function (e, t, n) {
    "use strict";

    e.exports = cc11001100_hook("e.exports", function (e, t) {
      var n,
        o,
        c,
        l = cc11001100_hook("l", e || "", "var-init"),
        d = cc11001100_hook("d", t || "div", "var-init"),
        f = cc11001100_hook("f", {}, "var-init"),
        h = cc11001100_hook("h", 0, "var-init");
      for (; h < l.length;) r.lastIndex = cc11001100_hook("r.lastIndex", h, "assign"), c = cc11001100_hook("c", r.exec(l), "assign"), (n = cc11001100_hook("n", l.slice(h, c ? c.index : l.length), "assign")) && (o ? "#" === o ? f.id = cc11001100_hook("f.id", n, "assign") : f.className ? f.className.push(n) : f.className = cc11001100_hook("f.className", [n], "assign") : d = cc11001100_hook("d", n, "assign"), h += cc11001100_hook("h", n.length, "assign")), c && (o = cc11001100_hook("o", c[0], "assign"), h++);
      return {
        type: cc11001100_hook("type", "element", "object-key-init"),
        tagName: cc11001100_hook("tagName", d, "object-key-init"),
        properties: cc11001100_hook("properties", f, "object-key-init"),
        children: cc11001100_hook("children", [], "object-key-init")
      };
    }, "assign");
    var r = cc11001100_hook("r", /[#.]/g, "var-init");
  },
  3003: function (e, t, n) {
    "use strict";

    e.exports = cc11001100_hook("e.exports", d, "assign");
    var r = cc11001100_hook("r", n(1602), "var-init"),
      o = cc11001100_hook("o", r.CONTINUE, "var-init"),
      c = cc11001100_hook("c", r.SKIP, "var-init"),
      l = cc11001100_hook("l", r.EXIT, "var-init");
    function d(e, t, n, o) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      "function" == typeof t && "function" != typeof n && (o = cc11001100_hook("o", n, "assign"), n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", null, "assign")), r(e, t, function (e, t) {
        var r = cc11001100_hook("r", t[t.length - 1], "var-init"),
          o = cc11001100_hook("o", r ? r.children.indexOf(e) : null, "var-init");
        return n(e, o, r);
      }, o);
    }
    d.CONTINUE = cc11001100_hook("d.CONTINUE", o, "assign"), d.SKIP = cc11001100_hook("d.SKIP", c, "assign"), d.EXIT = cc11001100_hook("d.EXIT", l, "assign");
  }
}]);