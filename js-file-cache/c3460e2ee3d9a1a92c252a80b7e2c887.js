/**
 * AnchorJS - v4.1.1 - 2018-07-01
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2018 Bryan Braun; Licensed MIT
 */
!function (A, e) {
  "use strict";

  "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = cc11001100_hook("module.exports", e(), "assign") : (A.AnchorJS = cc11001100_hook("A.AnchorJS", e(), "assign"), A.anchors = cc11001100_hook("A.anchors", new A.AnchorJS(), "assign"));
}(this, function () {
  "use strict";

  return function (A) {
    function d(A) {
      cc11001100_hook("A", A, "function-parameter");
      A.icon = cc11001100_hook("A.icon", A.hasOwnProperty("icon") ? A.icon : "", "assign"), A.visible = cc11001100_hook("A.visible", A.hasOwnProperty("visible") ? A.visible : "hover", "assign"), A.placement = cc11001100_hook("A.placement", A.hasOwnProperty("placement") ? A.placement : "right", "assign"), A.ariaLabel = cc11001100_hook("A.ariaLabel", A.hasOwnProperty("ariaLabel") ? A.ariaLabel : "Anchor", "assign"), A.class = cc11001100_hook("A.class", A.hasOwnProperty("class") ? A.class : "", "assign"), A.truncate = cc11001100_hook("A.truncate", A.hasOwnProperty("truncate") ? Math.floor(A.truncate) : 64, "assign");
    }
    function f(A) {
      cc11001100_hook("A", A, "function-parameter");
      var e;
      if ("string" == typeof A || A instanceof String) e = cc11001100_hook("e", [].slice.call(document.querySelectorAll(A)), "assign");else {
        if (!(Array.isArray(A) || A instanceof NodeList)) throw new Error("The selector provided to AnchorJS was invalid.");
        e = cc11001100_hook("e", [].slice.call(A), "assign");
      }
      return e;
    }
    this.options = cc11001100_hook("this.options", A || {}, "assign"), this.elements = cc11001100_hook("this.elements", [], "assign"), d(this.options), this.isTouchDevice = cc11001100_hook("this.isTouchDevice", function () {
      return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
    }, "assign"), this.add = cc11001100_hook("this.add", function (A) {
      var e,
        t,
        i,
        n,
        o,
        s,
        r,
        a,
        c,
        h,
        l,
        u = cc11001100_hook("u", [], "var-init");
      if (d(this.options), "touch" === (l = cc11001100_hook("l", this.options.visible, "assign")) && (l = cc11001100_hook("l", this.isTouchDevice() ? "always" : "hover", "assign")), A || (A = cc11001100_hook("A", "h2, h3, h4, h5, h6", "assign")), 0 === (e = cc11001100_hook("e", f(A), "assign")).length) return this;
      for (function () {
        if (null === document.head.querySelector("style.anchorjs")) {
          var A,
            e = cc11001100_hook("e", document.createElement("style"), "var-init");
          e.className = cc11001100_hook("e.className", "anchorjs", "assign"), e.appendChild(document.createTextNode("")), void 0 === (A = cc11001100_hook("A", document.head.querySelector('[rel="stylesheet"], style'), "assign")) ? document.head.appendChild(e) : document.head.insertBefore(e, A), e.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }", e.sheet.cssRules.length), e.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }", e.sheet.cssRules.length), e.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }", e.sheet.cssRules.length), e.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }', e.sheet.cssRules.length);
        }
      }(), t = cc11001100_hook("t", document.querySelectorAll("[id]"), "assign"), i = cc11001100_hook("i", [].map.call(t, function (A) {
        return A.id;
      }), "assign"), o = cc11001100_hook("o", 0, "assign"); o < e.length; o++) if (this.hasAnchorJSLink(e[o])) u.push(o);else {
        if (e[o].hasAttribute("id")) n = cc11001100_hook("n", e[o].getAttribute("id"), "assign");else if (e[o].hasAttribute("data-anchor-id")) n = cc11001100_hook("n", e[o].getAttribute("data-anchor-id"), "assign");else {
          for (c = cc11001100_hook("c", a = cc11001100_hook("a", this.urlify(e[o].textContent), "assign"), "assign"), r = cc11001100_hook("r", 0, "assign"); void 0 !== s && (c = cc11001100_hook("c", a + "-" + r, "assign")), r += cc11001100_hook("r", 1, "assign"), -1 !== (s = cc11001100_hook("s", i.indexOf(c), "assign")););
          s = cc11001100_hook("s", void 0, "assign"), i.push(c), e[o].setAttribute("id", c), n = cc11001100_hook("n", c, "assign");
        }
        n.replace(/-/g, " "), (h = cc11001100_hook("h", document.createElement("a"), "assign")).className = cc11001100_hook("(h = document.createElement(\"a\")).className", "anchorjs-link " + this.options.class, "assign"), h.href = cc11001100_hook("h.href", "#" + n, "assign"), h.setAttribute("aria-label", this.options.ariaLabel), h.setAttribute("data-anchorjs-icon", this.options.icon), "always" === l && (h.style.opacity = cc11001100_hook("h.style.opacity", "1", "assign")), "" === this.options.icon && (h.style.font = cc11001100_hook("h.style.font", "1em/1 anchorjs-icons", "assign"), "left" === this.options.placement && (h.style.lineHeight = cc11001100_hook("h.style.lineHeight", "inherit", "assign"))), "left" === this.options.placement ? (h.style.position = cc11001100_hook("h.style.position", "absolute", "assign"), h.style.marginLeft = cc11001100_hook("h.style.marginLeft", "-1em", "assign"), h.style.paddingRight = cc11001100_hook("h.style.paddingRight", "0.5em", "assign"), e[o].insertBefore(h, e[o].firstChild)) : (h.style.paddingLeft = cc11001100_hook("h.style.paddingLeft", "0.375em", "assign"), e[o].appendChild(h));
      }
      for (o = cc11001100_hook("o", 0, "assign"); o < u.length; o++) e.splice(u[o] - o, 1);
      return this.elements = cc11001100_hook("this.elements", this.elements.concat(e), "assign"), this;
    }, "assign"), this.remove = cc11001100_hook("this.remove", function (A) {
      for (var e, t, i = cc11001100_hook("i", f(A), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < i.length; n++) (t = cc11001100_hook("t", i[n].querySelector(".anchorjs-link"), "assign")) && (-1 !== (e = cc11001100_hook("e", this.elements.indexOf(i[n]), "assign")) && this.elements.splice(e, 1), i[n].removeChild(t));
      return this;
    }, "assign"), this.removeAll = cc11001100_hook("this.removeAll", function () {
      this.remove(this.elements);
    }, "assign"), this.urlify = cc11001100_hook("this.urlify", function (A) {
      return this.options.truncate || d(this.options), A.trim().replace(/\'/gi, "").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase();
    }, "assign"), this.hasAnchorJSLink = cc11001100_hook("this.hasAnchorJSLink", function (A) {
      var e = cc11001100_hook("e", A.firstChild && -1 < (" " + A.firstChild.className + " ").indexOf(" anchorjs-link "), "var-init"),
        t = cc11001100_hook("t", A.lastChild && -1 < (" " + A.lastChild.className + " ").indexOf(" anchorjs-link "), "var-init");
      return e || t || !1;
    }, "assign");
  };
});