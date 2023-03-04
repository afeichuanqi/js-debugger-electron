/*
 *  /MathJax/config/TeX-AMS-MML_HTMLorMML.js
 *  
 *  Copyright (c) 2010-2017 The MathJax Consortium
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Config({
  delayJaxRegistration: cc11001100_hook("delayJaxRegistration", true, "object-key-init")
});
MathJax.Ajax.Preloading("[MathJax]/jax/input/TeX/config.js", "[MathJax]/jax/input/MathML/config.js", "[MathJax]/jax/output/HTML-CSS/config.js", "[MathJax]/jax/output/NativeMML/config.js", "[MathJax]/jax/output/PreviewHTML/config.js", "[MathJax]/config/MMLorHTML.js", "[MathJax]/extensions/tex2jax.js", "[MathJax]/extensions/mml2jax.js", "[MathJax]/extensions/MathEvents.js", "[MathJax]/extensions/MathZoom.js", "[MathJax]/extensions/MathMenu.js", "[MathJax]/jax/element/mml/jax.js", "[MathJax]/extensions/toMathML.js", "[MathJax]/extensions/TeX/noErrors.js", "[MathJax]/extensions/TeX/noUndefined.js", "[MathJax]/jax/input/TeX/jax.js", "[MathJax]/extensions/TeX/AMSmath.js", "[MathJax]/extensions/TeX/AMSsymbols.js", "[MathJax]/jax/input/MathML/jax.js", "[MathJax]/jax/output/PreviewHTML/jax.js", "[MathJax]/extensions/fast-preview.js", "[MathJax]/extensions/AssistiveMML.js", "[MathJax]/extensions/a11y/accessibility-menu.js");
MathJax.Hub.Config({
  extensions: cc11001100_hook("extensions", ['[a11y]/accessibility-menu.js'], "object-key-init")
});
MathJax.InputJax.TeX = cc11001100_hook("MathJax.InputJax.TeX", MathJax.InputJax({
  id: cc11001100_hook("id", "TeX", "object-key-init"),
  version: cc11001100_hook("version", "2.7.2", "object-key-init"),
  directory: cc11001100_hook("directory", MathJax.InputJax.directory + "/TeX", "object-key-init"),
  extensionDir: cc11001100_hook("extensionDir", MathJax.InputJax.extensionDir + "/TeX", "object-key-init"),
  config: {
    TagSide: cc11001100_hook("TagSide", "right", "object-key-init"),
    TagIndent: cc11001100_hook("TagIndent", "0.8em", "object-key-init"),
    MultLineWidth: cc11001100_hook("MultLineWidth", "85%", "object-key-init"),
    equationNumbers: {
      autoNumber: cc11001100_hook("autoNumber", "none", "object-key-init"),
      formatNumber: function (a) {
        return a;
      },
      formatTag: function (a) {
        return "(" + a + ")";
      },
      formatID: function (a) {
        return "mjx-eqn-" + String(a).replace(/[:"'<>&]/g, "");
      },
      formatURL: function (b, a) {
        return a + "#" + escape(b);
      },
      useLabelIds: cc11001100_hook("useLabelIds", true, "object-key-init")
    }
  },
  resetEquationNumbers: function () {}
}), "assign");
MathJax.InputJax.TeX.Register("math/tex");
MathJax.InputJax.TeX.loadComplete("config.js");
MathJax.InputJax.MathML = cc11001100_hook("MathJax.InputJax.MathML", MathJax.InputJax({
  id: cc11001100_hook("id", "MathML", "object-key-init"),
  version: cc11001100_hook("version", "2.7.2", "object-key-init"),
  directory: cc11001100_hook("directory", MathJax.InputJax.directory + "/MathML", "object-key-init"),
  extensionDir: cc11001100_hook("extensionDir", MathJax.InputJax.extensionDir + "/MathML", "object-key-init"),
  entityDir: cc11001100_hook("entityDir", MathJax.InputJax.directory + "/MathML/entities", "object-key-init"),
  config: {
    useMathMLspacing: cc11001100_hook("useMathMLspacing", false, "object-key-init")
  }
}), "assign");
MathJax.InputJax.MathML.Register("math/mml");
MathJax.InputJax.MathML.loadComplete("config.js");
MathJax.OutputJax["HTML-CSS"] = cc11001100_hook("MathJax.OutputJax[\"HTML-CSS\"]", MathJax.OutputJax({
  id: cc11001100_hook("id", "HTML-CSS", "object-key-init"),
  version: cc11001100_hook("version", "2.7.2", "object-key-init"),
  directory: cc11001100_hook("directory", MathJax.OutputJax.directory + "/HTML-CSS", "object-key-init"),
  extensionDir: cc11001100_hook("extensionDir", MathJax.OutputJax.extensionDir + "/HTML-CSS", "object-key-init"),
  autoloadDir: cc11001100_hook("autoloadDir", MathJax.OutputJax.directory + "/HTML-CSS/autoload", "object-key-init"),
  fontDir: cc11001100_hook("fontDir", MathJax.OutputJax.directory + "/HTML-CSS/fonts", "object-key-init"),
  webfontDir: cc11001100_hook("webfontDir", MathJax.OutputJax.fontDir + "/HTML-CSS", "object-key-init"),
  config: {
    noReflows: cc11001100_hook("noReflows", true, "object-key-init"),
    matchFontHeight: cc11001100_hook("matchFontHeight", true, "object-key-init"),
    scale: cc11001100_hook("scale", 100, "object-key-init"),
    minScaleAdjust: cc11001100_hook("minScaleAdjust", 50, "object-key-init"),
    availableFonts: cc11001100_hook("availableFonts", ["STIX", "TeX"], "object-key-init"),
    preferredFont: cc11001100_hook("preferredFont", "TeX", "object-key-init"),
    webFont: cc11001100_hook("webFont", "TeX", "object-key-init"),
    imageFont: cc11001100_hook("imageFont", "TeX", "object-key-init"),
    undefinedFamily: cc11001100_hook("undefinedFamily", "STIXGeneral,'Arial Unicode MS',serif", "object-key-init"),
    mtextFontInherit: cc11001100_hook("mtextFontInherit", false, "object-key-init"),
    EqnChunk: cc11001100_hook("EqnChunk", MathJax.Hub.Browser.isMobile ? 10 : 50, "object-key-init"),
    EqnChunkFactor: cc11001100_hook("EqnChunkFactor", 1.5, "object-key-init"),
    EqnChunkDelay: cc11001100_hook("EqnChunkDelay", 100, "object-key-init"),
    linebreaks: {
      automatic: cc11001100_hook("automatic", false, "object-key-init"),
      width: cc11001100_hook("width", "container", "object-key-init")
    },
    styles: {
      ".MathJax_Display": {
        "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
        margin: cc11001100_hook("margin", "1em 0em", "object-key-init")
      },
      ".MathJax .merror": {
        "background-color": cc11001100_hook("background-color", "#FFFF88", "object-key-init"),
        color: cc11001100_hook("color", "#CC0000", "object-key-init"),
        border: cc11001100_hook("border", "1px solid #CC0000", "object-key-init"),
        padding: cc11001100_hook("padding", "1px 3px", "object-key-init"),
        "font-style": cc11001100_hook("font-style", "normal", "object-key-init"),
        "font-size": cc11001100_hook("font-size", "90%", "object-key-init")
      },
      ".MathJax .MJX-monospace": {
        "font-family": cc11001100_hook("font-family", "monospace", "object-key-init")
      },
      ".MathJax .MJX-sans-serif": {
        "font-family": cc11001100_hook("font-family", "sans-serif", "object-key-init")
      },
      "#MathJax_Tooltip": {
        "background-color": cc11001100_hook("background-color", "InfoBackground", "object-key-init"),
        color: cc11001100_hook("color", "InfoText", "object-key-init"),
        border: cc11001100_hook("border", "1px solid black", "object-key-init"),
        "box-shadow": cc11001100_hook("box-shadow", "2px 2px 5px #AAAAAA", "object-key-init"),
        "-webkit-box-shadow": cc11001100_hook("-webkit-box-shadow", "2px 2px 5px #AAAAAA", "object-key-init"),
        "-moz-box-shadow": cc11001100_hook("-moz-box-shadow", "2px 2px 5px #AAAAAA", "object-key-init"),
        "-khtml-box-shadow": cc11001100_hook("-khtml-box-shadow", "2px 2px 5px #AAAAAA", "object-key-init"),
        filter: cc11001100_hook("filter", "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')", "object-key-init"),
        padding: cc11001100_hook("padding", "3px 4px", "object-key-init"),
        "z-index": cc11001100_hook("z-index", 401, "object-key-init")
      }
    }
  }
}), "assign");
if (MathJax.Hub.Browser.isMSIE && document.documentMode >= 9) {
  delete MathJax.OutputJax["HTML-CSS"].config.styles["#MathJax_Tooltip"].filter;
}
if (!MathJax.Hub.config.delayJaxRegistration) {
  MathJax.OutputJax["HTML-CSS"].Register("jax/mml");
}
MathJax.Hub.Register.StartupHook("End Config", [function (b, c) {
  var a = cc11001100_hook("a", b.Insert({
    minBrowserVersion: {
      Firefox: cc11001100_hook("Firefox", 3, "object-key-init"),
      Opera: cc11001100_hook("Opera", 9.52, "object-key-init"),
      MSIE: cc11001100_hook("MSIE", 6, "object-key-init"),
      Chrome: cc11001100_hook("Chrome", 0.3, "object-key-init"),
      Safari: cc11001100_hook("Safari", 2, "object-key-init"),
      Konqueror: cc11001100_hook("Konqueror", 4, "object-key-init")
    },
    inlineMathDelimiters: cc11001100_hook("inlineMathDelimiters", ["$", "$"], "object-key-init"),
    displayMathDelimiters: cc11001100_hook("displayMathDelimiters", ["$$", "$$"], "object-key-init"),
    multilineDisplay: cc11001100_hook("multilineDisplay", true, "object-key-init"),
    minBrowserTranslate: function (f) {
      var e = cc11001100_hook("e", b.getJaxFor(f), "var-init"),
        k = cc11001100_hook("k", ["[Math]"], "var-init"),
        j;
      var h = cc11001100_hook("h", document.createElement("span", {
        className: cc11001100_hook("className", "MathJax_Preview", "object-key-init")
      }), "var-init");
      if (e.inputJax === "TeX") {
        if (e.root.Get("displaystyle")) {
          j = cc11001100_hook("j", a.displayMathDelimiters, "assign");
          k = cc11001100_hook("k", [j[0] + e.originalText + j[1]], "assign");
          if (a.multilineDisplay) {
            k = cc11001100_hook("k", k[0].split(/\n/), "assign");
          }
        } else {
          j = cc11001100_hook("j", a.inlineMathDelimiters, "assign");
          k = cc11001100_hook("k", [j[0] + e.originalText.replace(/^\s+/, "").replace(/\s+$/, "") + j[1]], "assign");
        }
      }
      for (var g = cc11001100_hook("g", 0, "var-init"), d = cc11001100_hook("d", k.length, "var-init"); g < d; g++) {
        h.appendChild(document.createTextNode(k[g]));
        if (g < d - 1) {
          h.appendChild(document.createElement("br"));
        }
      }
      f.parentNode.insertBefore(h, f);
    }
  }, b.config["HTML-CSS"] || {}), "var-init");
  if (b.Browser.version !== "0.0" && !b.Browser.versionAtLeast(a.minBrowserVersion[b.Browser] || 0)) {
    c.Translate = cc11001100_hook("c.Translate", a.minBrowserTranslate, "assign");
    b.Config({
      showProcessingMessages: cc11001100_hook("showProcessingMessages", false, "object-key-init")
    });
    MathJax.Message.Set(["MathJaxNotSupported", "Your browser does not support MathJax"], null, 4000);
    b.Startup.signal.Post("MathJax not supported");
  }
}, MathJax.Hub, MathJax.OutputJax["HTML-CSS"]]);
MathJax.OutputJax["HTML-CSS"].loadComplete("config.js");
MathJax.OutputJax.NativeMML = cc11001100_hook("MathJax.OutputJax.NativeMML", MathJax.OutputJax({
  id: cc11001100_hook("id", "NativeMML", "object-key-init"),
  version: cc11001100_hook("version", "2.7.2", "object-key-init"),
  directory: cc11001100_hook("directory", MathJax.OutputJax.directory + "/NativeMML", "object-key-init"),
  extensionDir: cc11001100_hook("extensionDir", MathJax.OutputJax.extensionDir + "/NativeMML", "object-key-init"),
  config: {
    matchFontHeight: cc11001100_hook("matchFontHeight", true, "object-key-init"),
    scale: cc11001100_hook("scale", 100, "object-key-init"),
    minScaleAdjust: cc11001100_hook("minScaleAdjust", 50, "object-key-init"),
    styles: {
      "div.MathJax_MathML": {
        "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
        margin: cc11001100_hook("margin", ".75em 0px", "object-key-init")
      }
    }
  }
}), "assign");
if (!MathJax.Hub.config.delayJaxRegistration) {
  MathJax.OutputJax.NativeMML.Register("jax/mml");
}
MathJax.OutputJax.NativeMML.loadComplete("config.js");
MathJax.OutputJax.PreviewHTML = cc11001100_hook("MathJax.OutputJax.PreviewHTML", MathJax.OutputJax({
  id: cc11001100_hook("id", "PreviewHTML", "object-key-init"),
  version: cc11001100_hook("version", "2.7.2", "object-key-init"),
  directory: cc11001100_hook("directory", MathJax.OutputJax.directory + "/PreviewHTML", "object-key-init"),
  extensionDir: cc11001100_hook("extensionDir", MathJax.OutputJax.extensionDir + "/PreviewHTML", "object-key-init"),
  noFastPreview: cc11001100_hook("noFastPreview", true, "object-key-init"),
  config: {
    scale: cc11001100_hook("scale", 100, "object-key-init"),
    minScaleAdjust: cc11001100_hook("minScaleAdjust", 50, "object-key-init"),
    mtextFontInherit: cc11001100_hook("mtextFontInherit", false, "object-key-init"),
    linebreaks: {
      automatic: cc11001100_hook("automatic", false, "object-key-init"),
      width: cc11001100_hook("width", "container", "object-key-init")
    }
  }
}), "assign");
if (!MathJax.Hub.config.delayJaxRegistration) {
  MathJax.OutputJax.PreviewHTML.Register("jax/mml");
}
MathJax.OutputJax.PreviewHTML.loadComplete("config.js");
(function (c, g) {
  var f = cc11001100_hook("f", "2.7.0", "var-init");
  var a = cc11001100_hook("a", MathJax.Hub.CombineConfig("MMLorHTML", {
    prefer: {
      MSIE: cc11001100_hook("MSIE", "MML", "object-key-init"),
      Firefox: cc11001100_hook("Firefox", "HTML", "object-key-init"),
      Opera: cc11001100_hook("Opera", "HTML", "object-key-init"),
      Chrome: cc11001100_hook("Chrome", "HTML", "object-key-init"),
      Safari: cc11001100_hook("Safari", "HTML", "object-key-init"),
      other: cc11001100_hook("other", "HTML", "object-key-init")
    }
  }), "var-init");
  var e = cc11001100_hook("e", {
    Firefox: cc11001100_hook("Firefox", 3, "object-key-init"),
    Opera: cc11001100_hook("Opera", 9.52, "object-key-init"),
    MSIE: cc11001100_hook("MSIE", 6, "object-key-init"),
    Chrome: cc11001100_hook("Chrome", 0.3, "object-key-init"),
    Safari: cc11001100_hook("Safari", 2, "object-key-init"),
    Konqueror: cc11001100_hook("Konqueror", 4, "object-key-init")
  }, "var-init");
  var b = cc11001100_hook("b", g.version === "0.0" || g.versionAtLeast(e[g] || 0), "var-init");
  var d = cc11001100_hook("d", g.isFirefox && g.versionAtLeast("1.5") || g.isMSIE && g.hasMathPlayer || g.isSafari && g.versionAtLeast("5.0") || g.isOpera && g.versionAtLeast("9.52"), "var-init");
  c.Register.StartupHook("End Config", function () {
    var h = cc11001100_hook("h", a.prefer && typeof a.prefer === "object" ? a.prefer[MathJax.Hub.Browser] || a.prefer.other || "HTML" : a.prefer, "var-init");
    if (b || d) {
      if (d && (h === "MML" || !b)) {
        if (MathJax.OutputJax.NativeMML) {
          MathJax.OutputJax.NativeMML.Register("jax/mml");
        } else {
          c.config.jax.unshift("output/NativeMML");
        }
        c.Startup.signal.Post("NativeMML output selected");
      } else {
        if (MathJax.OutputJax["HTML-CSS"]) {
          MathJax.OutputJax["HTML-CSS"].Register("jax/mml");
        } else {
          c.config.jax.unshift("output/HTML-CSS");
        }
        c.Startup.signal.Post("HTML-CSS output selected");
      }
    } else {
      c.PreProcess.disabled = cc11001100_hook("c.PreProcess.disabled", true, "assign");
      c.prepareScripts.disabled = cc11001100_hook("c.prepareScripts.disabled", true, "assign");
      MathJax.Message.Set(["MathJaxNotSupported", "Your browser does not support MathJax"], null, 4000);
      c.Startup.signal.Post("MathJax not supported");
    }
  });
})(MathJax.Hub, MathJax.Hub.Browser);
MathJax.Ajax.loadComplete("[MathJax]/config/MMLorHTML.js");
MathJax.Extension.tex2jax = cc11001100_hook("MathJax.Extension.tex2jax", {
  version: cc11001100_hook("version", "2.7.2", "object-key-init"),
  config: {
    inlineMath: cc11001100_hook("inlineMath", [["\\(", "\\)"]], "object-key-init"),
    displayMath: cc11001100_hook("displayMath", [["$$", "$$"], ["\\[", "\\]"]], "object-key-init"),
    balanceBraces: cc11001100_hook("balanceBraces", true, "object-key-init"),
    skipTags: cc11001100_hook("skipTags", ["script", "noscript", "style", "textarea", "pre", "code", "annotation", "annotation-xml"], "object-key-init"),
    ignoreClass: cc11001100_hook("ignoreClass", "tex2jax_ignore", "object-key-init"),
    processClass: cc11001100_hook("processClass", "tex2jax_process", "object-key-init"),
    processEscapes: cc11001100_hook("processEscapes", false, "object-key-init"),
    processEnvironments: cc11001100_hook("processEnvironments", true, "object-key-init"),
    processRefs: cc11001100_hook("processRefs", true, "object-key-init"),
    preview: cc11001100_hook("preview", "TeX", "object-key-init")
  },
  ignoreTags: {
    br: cc11001100_hook("br", MathJax.Hub.Browser.isMSIE && document.documentMode < 9 ? "\n" : " ", "object-key-init"),
    wbr: cc11001100_hook("wbr", "", "object-key-init"),
    "#comment": cc11001100_hook("#comment", "", "object-key-init")
  },
  PreProcess: function (a) {
    if (!this.configured) {
      this.config = cc11001100_hook("this.config", MathJax.Hub.CombineConfig("tex2jax", this.config), "assign");
      if (this.config.Augment) {
        MathJax.Hub.Insert(this, this.config.Augment);
      }
      if (typeof this.config.previewTeX !== "undefined" && !this.config.previewTeX) {
        this.config.preview = cc11001100_hook("this.config.preview", "none", "assign");
      }
      this.configured = cc11001100_hook("this.configured", true, "assign");
    }
    if (typeof a === "string") {
      a = cc11001100_hook("a", document.getElementById(a), "assign");
    }
    if (!a) {
      a = cc11001100_hook("a", document.body, "assign");
    }
    if (this.createPatterns()) {
      this.scanElement(a, a.nextSibling);
    }
  },
  createPatterns: function () {
    var d = cc11001100_hook("d", [], "var-init"),
      e = cc11001100_hook("e", [], "var-init"),
      c,
      a,
      b = cc11001100_hook("b", this.config, "var-init");
    this.match = cc11001100_hook("this.match", {}, "assign");
    for (c = cc11001100_hook("c", 0, "assign"), a = cc11001100_hook("a", b.inlineMath.length, "assign"); c < a; c++) {
      d.push(this.patternQuote(b.inlineMath[c][0]));
      this.match[b.inlineMath[c][0]] = cc11001100_hook("this.match[b.inlineMath[c][0]]", {
        mode: cc11001100_hook("mode", "", "object-key-init"),
        end: cc11001100_hook("end", b.inlineMath[c][1], "object-key-init"),
        pattern: cc11001100_hook("pattern", this.endPattern(b.inlineMath[c][1]), "object-key-init")
      }, "assign");
    }
    for (c = cc11001100_hook("c", 0, "assign"), a = cc11001100_hook("a", b.displayMath.length, "assign"); c < a; c++) {
      d.push(this.patternQuote(b.displayMath[c][0]));
      this.match[b.displayMath[c][0]] = cc11001100_hook("this.match[b.displayMath[c][0]]", {
        mode: cc11001100_hook("mode", "; mode=display", "object-key-init"),
        end: cc11001100_hook("end", b.displayMath[c][1], "object-key-init"),
        pattern: cc11001100_hook("pattern", this.endPattern(b.displayMath[c][1]), "object-key-init")
      }, "assign");
    }
    if (d.length) {
      e.push(d.sort(this.sortLength).join("|"));
    }
    if (b.processEnvironments) {
      e.push("\\\\begin\\{([^}]*)\\}");
    }
    if (b.processEscapes) {
      e.push("\\\\*\\\\\\$");
    }
    if (b.processRefs) {
      e.push("\\\\(eq)?ref\\{[^}]*\\}");
    }
    this.start = cc11001100_hook("this.start", new RegExp(e.join("|"), "g"), "assign");
    this.skipTags = cc11001100_hook("this.skipTags", new RegExp("^(" + b.skipTags.join("|") + ")$", "i"), "assign");
    var f = cc11001100_hook("f", [], "var-init");
    if (MathJax.Hub.config.preRemoveClass) {
      f.push(MathJax.Hub.config.preRemoveClass);
    }
    if (b.ignoreClass) {
      f.push(b.ignoreClass);
    }
    this.ignoreClass = cc11001100_hook("this.ignoreClass", f.length ? new RegExp("(^| )(" + f.join("|") + ")( |$)") : /^$/, "assign");
    this.processClass = cc11001100_hook("this.processClass", new RegExp("(^| )(" + b.processClass + ")( |$)"), "assign");
    return e.length > 0;
  },
  patternQuote: function (a) {
    return a.replace(/([\^$(){}+*?\-|\[\]\:\\])/g, "\\$1");
  },
  endPattern: function (a) {
    return new RegExp(this.patternQuote(a) + "|\\\\.|[{}]", "g");
  },
  sortLength: function (d, c) {
    if (d.length !== c.length) {
      return c.length - d.length;
    }
    return d == c ? 0 : d < c ? -1 : 1;
  },
  scanElement: function (c, b, g) {
    var a, e, d, f;
    while (c && c != b) {
      if (c.nodeName.toLowerCase() === "#text") {
        if (!g) {
          c = cc11001100_hook("c", this.scanText(c), "assign");
        }
      } else {
        a = cc11001100_hook("a", typeof c.className === "undefined" ? "" : c.className, "assign");
        e = cc11001100_hook("e", typeof c.tagName === "undefined" ? "" : c.tagName, "assign");
        if (typeof a !== "string") {
          a = cc11001100_hook("a", String(a), "assign");
        }
        f = cc11001100_hook("f", this.processClass.exec(a), "assign");
        if (c.firstChild && !a.match(/(^| )MathJax/) && (f || !this.skipTags.exec(e))) {
          d = cc11001100_hook("d", (g || this.ignoreClass.exec(a)) && !f, "assign");
          this.scanElement(c.firstChild, b, d);
        }
      }
      if (c) {
        c = cc11001100_hook("c", c.nextSibling, "assign");
      }
    }
  },
  scanText: function (b) {
    if (b.nodeValue.replace(/\s+/, "") == "") {
      return b;
    }
    var a, c;
    this.search = cc11001100_hook("this.search", {
      start: cc11001100_hook("start", true, "object-key-init")
    }, "assign");
    this.pattern = cc11001100_hook("this.pattern", this.start, "assign");
    while (b) {
      this.pattern.lastIndex = cc11001100_hook("this.pattern.lastIndex", 0, "assign");
      while (b && b.nodeName.toLowerCase() === "#text" && (a = cc11001100_hook("a", this.pattern.exec(b.nodeValue), "assign"))) {
        if (this.search.start) {
          b = cc11001100_hook("b", this.startMatch(a, b), "assign");
        } else {
          b = cc11001100_hook("b", this.endMatch(a, b), "assign");
        }
      }
      if (this.search.matched) {
        b = cc11001100_hook("b", this.encloseMath(b), "assign");
      }
      if (b) {
        do {
          c = cc11001100_hook("c", b, "assign");
          b = cc11001100_hook("b", b.nextSibling, "assign");
        } while (b && this.ignoreTags[b.nodeName.toLowerCase()] != null);
        if (!b || b.nodeName !== "#text") {
          return this.search.close ? this.prevEndMatch() : c;
        }
      }
    }
    return b;
  },
  startMatch: function (a, b) {
    var f = cc11001100_hook("f", this.match[a[0]], "var-init");
    if (f != null) {
      this.search = cc11001100_hook("this.search", {
        end: cc11001100_hook("end", f.end, "object-key-init"),
        mode: cc11001100_hook("mode", f.mode, "object-key-init"),
        pcount: cc11001100_hook("pcount", 0, "object-key-init"),
        open: cc11001100_hook("open", b, "object-key-init"),
        olen: cc11001100_hook("olen", a[0].length, "object-key-init"),
        opos: cc11001100_hook("opos", this.pattern.lastIndex - a[0].length, "object-key-init")
      }, "assign");
      this.switchPattern(f.pattern);
    } else {
      if (a[0].substr(0, 6) === "\\begin") {
        this.search = cc11001100_hook("this.search", {
          end: cc11001100_hook("end", "\\end{" + a[1] + "}", "object-key-init"),
          mode: cc11001100_hook("mode", "; mode=display", "object-key-init"),
          pcount: cc11001100_hook("pcount", 0, "object-key-init"),
          open: cc11001100_hook("open", b, "object-key-init"),
          olen: cc11001100_hook("olen", 0, "object-key-init"),
          opos: cc11001100_hook("opos", this.pattern.lastIndex - a[0].length, "object-key-init"),
          isBeginEnd: cc11001100_hook("isBeginEnd", true, "object-key-init")
        }, "assign");
        this.switchPattern(this.endPattern(this.search.end));
      } else {
        if (a[0].substr(0, 4) === "\\ref" || a[0].substr(0, 6) === "\\eqref") {
          this.search = cc11001100_hook("this.search", {
            mode: cc11001100_hook("mode", "", "object-key-init"),
            end: cc11001100_hook("end", "", "object-key-init"),
            open: cc11001100_hook("open", b, "object-key-init"),
            pcount: cc11001100_hook("pcount", 0, "object-key-init"),
            olen: cc11001100_hook("olen", 0, "object-key-init"),
            opos: cc11001100_hook("opos", this.pattern.lastIndex - a[0].length, "object-key-init")
          }, "assign");
          return this.endMatch([""], b);
        } else {
          var d = cc11001100_hook("d", a[0].substr(0, a[0].length - 1), "var-init"),
            g,
            c;
          if (d.length % 2 === 0) {
            c = cc11001100_hook("c", [d.replace(/\\\\/g, "\\")], "assign");
            g = cc11001100_hook("g", 1, "assign");
          } else {
            c = cc11001100_hook("c", [d.substr(1).replace(/\\\\/g, "\\"), "$"], "assign");
            g = cc11001100_hook("g", 0, "assign");
          }
          c = cc11001100_hook("c", MathJax.HTML.Element("span", null, c), "assign");
          var e = cc11001100_hook("e", MathJax.HTML.TextNode(b.nodeValue.substr(0, a.index)), "var-init");
          b.nodeValue = cc11001100_hook("b.nodeValue", b.nodeValue.substr(a.index + a[0].length - g), "assign");
          b.parentNode.insertBefore(c, b);
          b.parentNode.insertBefore(e, c);
          this.pattern.lastIndex = cc11001100_hook("this.pattern.lastIndex", g, "assign");
        }
      }
    }
    return b;
  },
  endMatch: function (a, c) {
    var b = cc11001100_hook("b", this.search, "var-init");
    if (a[0] == b.end) {
      if (!b.close || b.pcount === 0) {
        b.close = cc11001100_hook("b.close", c, "assign");
        b.cpos = cc11001100_hook("b.cpos", this.pattern.lastIndex, "assign");
        b.clen = cc11001100_hook("b.clen", b.isBeginEnd ? 0 : a[0].length, "assign");
      }
      if (b.pcount === 0) {
        b.matched = cc11001100_hook("b.matched", true, "assign");
        c = cc11001100_hook("c", this.encloseMath(c), "assign");
        this.switchPattern(this.start);
      }
    } else {
      if (a[0] === "{") {
        b.pcount++;
      } else {
        if (a[0] === "}" && b.pcount) {
          b.pcount--;
        }
      }
    }
    return c;
  },
  prevEndMatch: function () {
    this.search.matched = cc11001100_hook("this.search.matched", true, "assign");
    var a = cc11001100_hook("a", this.encloseMath(this.search.close), "var-init");
    this.switchPattern(this.start);
    return a;
  },
  switchPattern: function (a) {
    a.lastIndex = cc11001100_hook("a.lastIndex", this.pattern.lastIndex, "assign");
    this.pattern = cc11001100_hook("this.pattern", a, "assign");
    this.search.start = cc11001100_hook("this.search.start", a === this.start, "assign");
  },
  encloseMath: function (b) {
    var a = cc11001100_hook("a", this.search, "var-init"),
      g = cc11001100_hook("g", a.close, "var-init"),
      f,
      d,
      c;
    if (a.cpos === g.length) {
      g = cc11001100_hook("g", g.nextSibling, "assign");
    } else {
      g = cc11001100_hook("g", g.splitText(a.cpos), "assign");
    }
    if (!g) {
      f = cc11001100_hook("f", g = cc11001100_hook("g", MathJax.HTML.addText(a.close.parentNode, ""), "assign"), "assign");
    }
    a.close = cc11001100_hook("a.close", g, "assign");
    d = cc11001100_hook("d", a.opos ? a.open.splitText(a.opos) : a.open, "assign");
    while ((c = cc11001100_hook("c", d.nextSibling, "assign")) && c !== g) {
      if (c.nodeValue !== null) {
        if (c.nodeName === "#comment") {
          d.nodeValue += cc11001100_hook("d.nodeValue", c.nodeValue.replace(/^\[CDATA\[((.|\n|\r)*)\]\]$/, "$1"), "assign");
        } else {
          d.nodeValue += cc11001100_hook("d.nodeValue", c.nodeValue, "assign");
        }
      } else {
        var h = cc11001100_hook("h", this.ignoreTags[c.nodeName.toLowerCase()], "var-init");
        d.nodeValue += cc11001100_hook("d.nodeValue", h == null ? " " : h, "assign");
      }
      d.parentNode.removeChild(c);
    }
    var e = cc11001100_hook("e", d.nodeValue.substr(a.olen, d.nodeValue.length - a.olen - a.clen), "var-init");
    d.parentNode.removeChild(d);
    if (this.config.preview !== "none") {
      this.createPreview(a.mode, e);
    }
    d = cc11001100_hook("d", this.createMathTag(a.mode, e), "assign");
    this.search = cc11001100_hook("this.search", {}, "assign");
    this.pattern.lastIndex = cc11001100_hook("this.pattern.lastIndex", 0, "assign");
    if (f) {
      f.parentNode.removeChild(f);
    }
    return d;
  },
  insertNode: function (b) {
    var a = cc11001100_hook("a", this.search, "var-init");
    a.close.parentNode.insertBefore(b, a.close);
  },
  createPreview: function (d, a) {
    var b = cc11001100_hook("b", MathJax.Hub.config.preRemoveClass, "var-init");
    var c = cc11001100_hook("c", this.config.preview, "var-init");
    if (c === "none") {
      return;
    }
    if ((this.search.close.previousSibling || {}).className === b) {
      return;
    }
    if (c === "TeX") {
      c = cc11001100_hook("c", [this.filterPreview(a)], "assign");
    }
    if (c) {
      c = cc11001100_hook("c", MathJax.HTML.Element("span", {
        className: cc11001100_hook("className", b, "object-key-init")
      }, c), "assign");
      this.insertNode(c);
    }
  },
  createMathTag: function (c, b) {
    var a = cc11001100_hook("a", document.createElement("script"), "var-init");
    a.type = cc11001100_hook("a.type", "math/tex" + c, "assign");
    MathJax.HTML.setScript(a, b);
    this.insertNode(a);
    return a;
  },
  filterPreview: function (a) {
    return a;
  }
}, "assign");
MathJax.Hub.Register.PreProcessor(["PreProcess", MathJax.Extension.tex2jax]);
MathJax.Ajax.loadComplete("[MathJax]/extensions/tex2jax.js");
MathJax.Extension.mml2jax = cc11001100_hook("MathJax.Extension.mml2jax", {
  version: cc11001100_hook("version", "2.7.2", "object-key-init"),
  config: {
    preview: cc11001100_hook("preview", "mathml", "object-key-init")
  },
  MMLnamespace: cc11001100_hook("MMLnamespace", "http://www.w3.org/1998/Math/MathML", "object-key-init"),
  PreProcess: function (e) {
    if (!this.configured) {
      this.config = cc11001100_hook("this.config", MathJax.Hub.CombineConfig("mml2jax", this.config), "assign");
      if (this.config.Augment) {
        MathJax.Hub.Insert(this, this.config.Augment);
      }
      this.InitBrowser();
      this.configured = cc11001100_hook("this.configured", true, "assign");
    }
    if (typeof e === "string") {
      e = cc11001100_hook("e", document.getElementById(e), "assign");
    }
    if (!e) {
      e = cc11001100_hook("e", document.body, "assign");
    }
    var h = cc11001100_hook("h", [], "var-init");
    this.PushMathElements(h, e, "math");
    this.PushMathElements(h, e, "math", this.MMLnamespace);
    var d, b;
    if (typeof document.namespaces !== "undefined") {
      try {
        for (d = cc11001100_hook("d", 0, "assign"), b = cc11001100_hook("b", document.namespaces.length, "assign"); d < b; d++) {
          var f = cc11001100_hook("f", document.namespaces[d], "var-init");
          if (f.urn === this.MMLnamespace) {
            this.PushMathElements(h, e, f.name + ":math");
          }
        }
      } catch (g) {}
    } else {
      var c = cc11001100_hook("c", document.getElementsByTagName("html")[0], "var-init");
      if (c) {
        for (d = cc11001100_hook("d", 0, "assign"), b = cc11001100_hook("b", c.attributes.length, "assign"); d < b; d++) {
          var a = cc11001100_hook("a", c.attributes[d], "var-init");
          if (a.nodeName.substr(0, 6) === "xmlns:" && a.nodeValue === this.MMLnamespace) {
            this.PushMathElements(h, e, a.nodeName.substr(6) + ":math");
          }
        }
      }
    }
    this.ProcessMathArray(h);
  },
  PushMathElements: function (f, d, a, c) {
    var h,
      g = cc11001100_hook("g", MathJax.Hub.config.preRemoveClass, "var-init");
    if (c) {
      if (!d.getElementsByTagNameNS) {
        return;
      }
      h = cc11001100_hook("h", d.getElementsByTagNameNS(c, a), "assign");
    } else {
      h = cc11001100_hook("h", d.getElementsByTagName(a), "assign");
    }
    for (var e = cc11001100_hook("e", 0, "var-init"), b = cc11001100_hook("b", h.length, "var-init"); e < b; e++) {
      var j = cc11001100_hook("j", h[e].parentNode, "var-init");
      if (j && j.className !== g && !j.isMathJax && !h[e].prefix === !c) {
        f.push(h[e]);
      }
    }
  },
  ProcessMathArray: function (c) {
    var b,
      a = cc11001100_hook("a", c.length, "var-init");
    if (a) {
      if (this.MathTagBug) {
        for (b = cc11001100_hook("b", 0, "assign"); b < a; b++) {
          if (c[b].nodeName === "MATH") {
            this.ProcessMathFlattened(c[b]);
          } else {
            this.ProcessMath(c[b]);
          }
        }
      } else {
        for (b = cc11001100_hook("b", 0, "assign"); b < a; b++) {
          this.ProcessMath(c[b]);
        }
      }
    }
  },
  ProcessMath: function (e) {
    var d = cc11001100_hook("d", e.parentNode, "var-init");
    if (!d || d.className === MathJax.Hub.config.preRemoveClass) {
      return;
    }
    var a = cc11001100_hook("a", document.createElement("script"), "var-init");
    a.type = cc11001100_hook("a.type", "math/mml", "assign");
    d.insertBefore(a, e);
    if (this.AttributeBug) {
      var b = cc11001100_hook("b", this.OuterHTML(e), "var-init");
      if (this.CleanupHTML) {
        b = cc11001100_hook("b", b.replace(/<\?import .*?>/i, "").replace(/<\?xml:namespace .*?\/>/i, ""), "assign");
        b = cc11001100_hook("b", b.replace(/&nbsp;/g, "&#xA0;"), "assign");
      }
      MathJax.HTML.setScript(a, b);
      d.removeChild(e);
    } else {
      var c = cc11001100_hook("c", MathJax.HTML.Element("span"), "var-init");
      c.appendChild(e);
      MathJax.HTML.setScript(a, c.innerHTML);
    }
    if (this.config.preview !== "none") {
      this.createPreview(e, a);
    }
  },
  ProcessMathFlattened: function (f) {
    var d = cc11001100_hook("d", f.parentNode, "var-init");
    if (!d || d.className === MathJax.Hub.config.preRemoveClass) {
      return;
    }
    var b = cc11001100_hook("b", document.createElement("script"), "var-init");
    b.type = cc11001100_hook("b.type", "math/mml", "assign");
    d.insertBefore(b, f);
    var c = cc11001100_hook("c", "", "var-init"),
      e,
      a = cc11001100_hook("a", f, "var-init");
    while (f && f.nodeName !== "/MATH") {
      e = cc11001100_hook("e", f, "assign");
      f = cc11001100_hook("f", f.nextSibling, "assign");
      c += cc11001100_hook("c", this.NodeHTML(e), "assign");
      e.parentNode.removeChild(e);
    }
    if (f && f.nodeName === "/MATH") {
      f.parentNode.removeChild(f);
    }
    b.text = cc11001100_hook("b.text", c + "</math>", "assign");
    if (this.config.preview !== "none") {
      this.createPreview(a, b);
    }
  },
  NodeHTML: function (e) {
    var c, b, a;
    if (e.nodeName === "#text") {
      c = cc11001100_hook("c", this.quoteHTML(e.nodeValue), "assign");
    } else {
      if (e.nodeName === "#comment") {
        c = cc11001100_hook("c", "<!--" + e.nodeValue + "-->", "assign");
      } else {
        c = cc11001100_hook("c", "<" + e.nodeName.toLowerCase(), "assign");
        for (b = cc11001100_hook("b", 0, "assign"), a = cc11001100_hook("a", e.attributes.length, "assign"); b < a; b++) {
          var d = cc11001100_hook("d", e.attributes[b], "var-init");
          if (d.specified && d.nodeName.substr(0, 10) !== "_moz-math-") {
            c += cc11001100_hook("c", " " + d.nodeName.toLowerCase().replace(/xmlns:xmlns/, "xmlns") + "=", "assign");
            var f = cc11001100_hook("f", d.nodeValue, "var-init");
            if (f == null && d.nodeName === "style" && e.style) {
              f = cc11001100_hook("f", e.style.cssText, "assign");
            }
            c += cc11001100_hook("c", '"' + this.quoteHTML(f) + '"', "assign");
          }
        }
        c += cc11001100_hook("c", ">", "assign");
        if (e.outerHTML != null && e.outerHTML.match(/(.<\/[A-Z]+>|\/>)$/)) {
          for (b = cc11001100_hook("b", 0, "assign"), a = cc11001100_hook("a", e.childNodes.length, "assign"); b < a; b++) {
            c += cc11001100_hook("c", this.OuterHTML(e.childNodes[b]), "assign");
          }
          c += cc11001100_hook("c", "</" + e.nodeName.toLowerCase() + ">", "assign");
        }
      }
    }
    return c;
  },
  OuterHTML: function (d) {
    if (d.nodeName.charAt(0) === "#") {
      return this.NodeHTML(d);
    }
    if (!this.AttributeBug) {
      return d.outerHTML;
    }
    var c = cc11001100_hook("c", this.NodeHTML(d), "var-init");
    for (var b = cc11001100_hook("b", 0, "var-init"), a = cc11001100_hook("a", d.childNodes.length, "var-init"); b < a; b++) {
      c += cc11001100_hook("c", this.OuterHTML(d.childNodes[b]), "assign");
    }
    c += cc11001100_hook("c", "</" + d.nodeName.toLowerCase() + ">", "assign");
    return c;
  },
  quoteHTML: function (a) {
    if (a == null) {
      a = cc11001100_hook("a", "", "assign");
    }
    return a.replace(/&/g, "&#x26;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;");
  },
  createPreview: function (g, f) {
    var e = cc11001100_hook("e", this.config.preview, "var-init");
    if (e === "none") {
      return;
    }
    var i = cc11001100_hook("i", false, "var-init");
    var c = cc11001100_hook("c", MathJax.Hub.config.preRemoveClass, "var-init");
    if ((f.previousSibling || {}).className === c) {
      return;
    }
    if (e === "mathml") {
      i = cc11001100_hook("i", true, "assign");
      if (this.MathTagBug) {
        e = cc11001100_hook("e", "alttext", "assign");
      } else {
        e = cc11001100_hook("e", g.cloneNode(true), "assign");
      }
    }
    if (e === "alttext" || e === "altimg") {
      i = cc11001100_hook("i", true, "assign");
      var d = cc11001100_hook("d", this.filterPreview(g.getAttribute("alttext")), "var-init");
      if (e === "alttext") {
        if (d != null) {
          e = cc11001100_hook("e", MathJax.HTML.TextNode(d), "assign");
        } else {
          e = cc11001100_hook("e", null, "assign");
        }
      } else {
        var a = cc11001100_hook("a", g.getAttribute("altimg"), "var-init");
        if (a != null) {
          var b = cc11001100_hook("b", {
            width: cc11001100_hook("width", g.getAttribute("altimg-width"), "object-key-init"),
            height: cc11001100_hook("height", g.getAttribute("altimg-height"), "object-key-init")
          }, "var-init");
          e = cc11001100_hook("e", MathJax.HTML.Element("img", {
            src: cc11001100_hook("src", a, "object-key-init"),
            alt: cc11001100_hook("alt", d, "object-key-init"),
            style: cc11001100_hook("style", b, "object-key-init")
          }), "assign");
        } else {
          e = cc11001100_hook("e", null, "assign");
        }
      }
    }
    if (e) {
      var h;
      if (i) {
        h = cc11001100_hook("h", MathJax.HTML.Element("span", {
          className: cc11001100_hook("className", c, "object-key-init")
        }), "assign");
        h.appendChild(e);
      } else {
        h = cc11001100_hook("h", MathJax.HTML.Element("span", {
          className: cc11001100_hook("className", c, "object-key-init")
        }, e), "assign");
      }
      f.parentNode.insertBefore(h, f);
    }
  },
  filterPreview: function (a) {
    return a;
  },
  InitBrowser: function () {
    var b = cc11001100_hook("b", MathJax.HTML.Element("span", {
      id: cc11001100_hook("id", "<", "object-key-init"),
      className: cc11001100_hook("className", "mathjax", "object-key-init"),
      innerHTML: cc11001100_hook("innerHTML", "<math><mi>x</mi><mspace /></math>", "object-key-init")
    }), "var-init");
    var a = cc11001100_hook("a", b.outerHTML || "", "var-init");
    this.AttributeBug = cc11001100_hook("this.AttributeBug", a !== "" && !(a.match(/id="&lt;"/) && a.match(/class="mathjax"/) && a.match(/<\/math>/)), "assign");
    this.MathTagBug = cc11001100_hook("this.MathTagBug", b.childNodes.length > 1, "assign");
    this.CleanupHTML = cc11001100_hook("this.CleanupHTML", MathJax.Hub.Browser.isMSIE, "assign");
  }
}, "assign");
MathJax.Hub.Register.PreProcessor(["PreProcess", MathJax.Extension.mml2jax], 5);
MathJax.Ajax.loadComplete("[MathJax]/extensions/mml2jax.js");
(function (d, h, l, g, m, b, j) {
  var p = cc11001100_hook("p", "2.7.2", "var-init");
  var i = cc11001100_hook("i", MathJax.Extension, "var-init");
  var c = cc11001100_hook("c", i.MathEvents = cc11001100_hook("i.MathEvents", {
    version: cc11001100_hook("version", p, "object-key-init")
  }, "assign"), "var-init");
  var k = cc11001100_hook("k", d.config.menuSettings, "var-init");
  var o = cc11001100_hook("o", {
    hover: cc11001100_hook("hover", 500, "object-key-init"),
    frame: {
      x: cc11001100_hook("x", 3.5, "object-key-init"),
      y: cc11001100_hook("y", 5, "object-key-init"),
      bwidth: cc11001100_hook("bwidth", 1, "object-key-init"),
      bcolor: cc11001100_hook("bcolor", "#A6D", "object-key-init"),
      hwidth: cc11001100_hook("hwidth", "15px", "object-key-init"),
      hcolor: cc11001100_hook("hcolor", "#83A", "object-key-init")
    },
    button: {
      x: cc11001100_hook("x", -6, "object-key-init"),
      y: cc11001100_hook("y", -3, "object-key-init"),
      wx: cc11001100_hook("wx", -2, "object-key-init")
    },
    fadeinInc: cc11001100_hook("fadeinInc", 0.2, "object-key-init"),
    fadeoutInc: cc11001100_hook("fadeoutInc", 0.05, "object-key-init"),
    fadeDelay: cc11001100_hook("fadeDelay", 50, "object-key-init"),
    fadeoutStart: cc11001100_hook("fadeoutStart", 400, "object-key-init"),
    fadeoutDelay: cc11001100_hook("fadeoutDelay", 15 * 1000, "object-key-init"),
    styles: {
      ".MathJax_Hover_Frame": {
        "border-radius": cc11001100_hook("border-radius", ".25em", "object-key-init"),
        "-webkit-border-radius": cc11001100_hook("-webkit-border-radius", ".25em", "object-key-init"),
        "-moz-border-radius": cc11001100_hook("-moz-border-radius", ".25em", "object-key-init"),
        "-khtml-border-radius": cc11001100_hook("-khtml-border-radius", ".25em", "object-key-init"),
        "box-shadow": cc11001100_hook("box-shadow", "0px 0px 15px #83A", "object-key-init"),
        "-webkit-box-shadow": cc11001100_hook("-webkit-box-shadow", "0px 0px 15px #83A", "object-key-init"),
        "-moz-box-shadow": cc11001100_hook("-moz-box-shadow", "0px 0px 15px #83A", "object-key-init"),
        "-khtml-box-shadow": cc11001100_hook("-khtml-box-shadow", "0px 0px 15px #83A", "object-key-init"),
        border: cc11001100_hook("border", "1px solid #A6D ! important", "object-key-init"),
        display: cc11001100_hook("display", "inline-block", "object-key-init"),
        position: cc11001100_hook("position", "absolute", "object-key-init")
      },
      ".MathJax_Menu_Button .MathJax_Hover_Arrow": {
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        cursor: cc11001100_hook("cursor", "pointer", "object-key-init"),
        display: cc11001100_hook("display", "inline-block", "object-key-init"),
        border: cc11001100_hook("border", "2px solid #AAA", "object-key-init"),
        "border-radius": cc11001100_hook("border-radius", "4px", "object-key-init"),
        "-webkit-border-radius": cc11001100_hook("-webkit-border-radius", "4px", "object-key-init"),
        "-moz-border-radius": cc11001100_hook("-moz-border-radius", "4px", "object-key-init"),
        "-khtml-border-radius": cc11001100_hook("-khtml-border-radius", "4px", "object-key-init"),
        "font-family": cc11001100_hook("font-family", "'Courier New',Courier", "object-key-init"),
        "font-size": cc11001100_hook("font-size", "9px", "object-key-init"),
        color: cc11001100_hook("color", "#F0F0F0", "object-key-init")
      },
      ".MathJax_Menu_Button .MathJax_Hover_Arrow span": {
        display: cc11001100_hook("display", "block", "object-key-init"),
        "background-color": cc11001100_hook("background-color", "#AAA", "object-key-init"),
        border: cc11001100_hook("border", "1px solid", "object-key-init"),
        "border-radius": cc11001100_hook("border-radius", "3px", "object-key-init"),
        "line-height": cc11001100_hook("line-height", 0, "object-key-init"),
        padding: cc11001100_hook("padding", "4px", "object-key-init")
      },
      ".MathJax_Hover_Arrow:hover": {
        color: cc11001100_hook("color", "white!important", "object-key-init"),
        border: cc11001100_hook("border", "2px solid #CCC!important", "object-key-init")
      },
      ".MathJax_Hover_Arrow:hover span": {
        "background-color": cc11001100_hook("background-color", "#CCC!important", "object-key-init")
      }
    }
  }, "var-init");
  var n = cc11001100_hook("n", c.Event = cc11001100_hook("c.Event", {
    LEFTBUTTON: cc11001100_hook("LEFTBUTTON", 0, "object-key-init"),
    RIGHTBUTTON: cc11001100_hook("RIGHTBUTTON", 2, "object-key-init"),
    MENUKEY: cc11001100_hook("MENUKEY", "altKey", "object-key-init"),
    KEY: {
      RETURN: cc11001100_hook("RETURN", 13, "object-key-init"),
      ESCAPE: cc11001100_hook("ESCAPE", 27, "object-key-init"),
      SPACE: cc11001100_hook("SPACE", 32, "object-key-init"),
      LEFT: cc11001100_hook("LEFT", 37, "object-key-init"),
      UP: cc11001100_hook("UP", 38, "object-key-init"),
      RIGHT: cc11001100_hook("RIGHT", 39, "object-key-init"),
      DOWN: cc11001100_hook("DOWN", 40, "object-key-init")
    },
    Mousedown: function (q) {
      return n.Handler(q, "Mousedown", this);
    },
    Mouseup: function (q) {
      return n.Handler(q, "Mouseup", this);
    },
    Mousemove: function (q) {
      return n.Handler(q, "Mousemove", this);
    },
    Mouseover: function (q) {
      return n.Handler(q, "Mouseover", this);
    },
    Mouseout: function (q) {
      return n.Handler(q, "Mouseout", this);
    },
    Click: function (q) {
      return n.Handler(q, "Click", this);
    },
    DblClick: function (q) {
      return n.Handler(q, "DblClick", this);
    },
    Menu: function (q) {
      return n.Handler(q, "ContextMenu", this);
    },
    Handler: function (t, r, s) {
      if (l.loadingMathMenu) {
        return n.False(t);
      }
      var q = cc11001100_hook("q", b[s.jaxID], "var-init");
      if (!t) {
        t = cc11001100_hook("t", window.event, "assign");
      }
      t.isContextMenu = cc11001100_hook("t.isContextMenu", r === "ContextMenu", "assign");
      if (q[r]) {
        return q[r](t, s);
      }
      if (i.MathZoom) {
        return i.MathZoom.HandleEvent(t, r, s);
      }
    },
    False: function (q) {
      if (!q) {
        q = cc11001100_hook("q", window.event, "assign");
      }
      if (q) {
        if (q.preventDefault) {
          q.preventDefault();
        } else {
          q.returnValue = cc11001100_hook("q.returnValue", false, "assign");
        }
        if (q.stopPropagation) {
          q.stopPropagation();
        }
        q.cancelBubble = cc11001100_hook("q.cancelBubble", true, "assign");
      }
      return false;
    },
    Keydown: function (r, q) {
      if (!r) {
        r = cc11001100_hook("r", window.event, "assign");
      }
      if (r.keyCode === n.KEY.SPACE) {
        n.ContextMenu(r, this);
      }
    },
    ContextMenu: function (t, E, w) {
      var B = cc11001100_hook("B", b[E.jaxID], "var-init"),
        v = cc11001100_hook("v", B.getJaxFromMath(E), "var-init");
      var F = cc11001100_hook("F", (B.config.showMathMenu != null ? B : d).config.showMathMenu, "var-init");
      if (!F || k.context !== "MathJax" && !w) {
        return;
      }
      if (c.msieEventBug) {
        t = cc11001100_hook("t", window.event || t, "assign");
      }
      n.ClearSelection();
      f.ClearHoverTimer();
      if (v.hover) {
        if (v.hover.remove) {
          clearTimeout(v.hover.remove);
          delete v.hover.remove;
        }
        v.hover.nofade = cc11001100_hook("v.hover.nofade", true, "assign");
      }
      var u = cc11001100_hook("u", MathJax.Menu, "var-init");
      var G, D;
      if (u) {
        if (u.loadingDomain) {
          return n.False(t);
        }
        G = cc11001100_hook("G", m.loadDomain("MathMenu"), "assign");
        if (!G) {
          u.jax = cc11001100_hook("u.jax", v, "assign");
          var r = cc11001100_hook("r", u.menu.Find("Show Math As").submenu, "var-init");
          r.items[0].name = cc11001100_hook("r.items[0].name", v.sourceMenuTitle, "assign");
          r.items[0].format = cc11001100_hook("r.items[0].format", v.sourceMenuFormat || "MathML", "assign");
          r.items[1].name = cc11001100_hook("r.items[1].name", j[v.inputJax].sourceMenuTitle, "assign");
          r.items[5].disabled = cc11001100_hook("r.items[5].disabled", !j[v.inputJax].annotationEncoding, "assign");
          var A = cc11001100_hook("A", r.items[2], "var-init");
          A.disabled = cc11001100_hook("A.disabled", true, "assign");
          var q = cc11001100_hook("q", A.submenu.items, "var-init");
          annotationList = cc11001100_hook("annotationList", MathJax.Hub.Config.semanticsAnnotations, "assign");
          for (var z = cc11001100_hook("z", 0, "var-init"), y = cc11001100_hook("y", q.length, "var-init"); z < y; z++) {
            var s = cc11001100_hook("s", q[z].name[1], "var-init");
            if (v.root && v.root.getAnnotation(s) !== null) {
              A.disabled = cc11001100_hook("A.disabled", false, "assign");
              q[z].hidden = cc11001100_hook("q[z].hidden", false, "assign");
            } else {
              q[z].hidden = cc11001100_hook("q[z].hidden", true, "assign");
            }
          }
          var x = cc11001100_hook("x", u.menu.Find("Math Settings", "MathPlayer"), "var-init");
          x.hidden = cc11001100_hook("x.hidden", !(v.outputJax === "NativeMML" && d.Browser.hasMathPlayer), "assign");
          return u.menu.Post(t);
        }
        u.loadingDomain = cc11001100_hook("u.loadingDomain", true, "assign");
        D = cc11001100_hook("D", function () {
          delete u.loadingDomain;
        }, "assign");
      } else {
        if (l.loadingMathMenu) {
          return n.False(t);
        }
        l.loadingMathMenu = cc11001100_hook("l.loadingMathMenu", true, "assign");
        G = cc11001100_hook("G", l.Require("[MathJax]/extensions/MathMenu.js"), "assign");
        D = cc11001100_hook("D", function () {
          delete l.loadingMathMenu;
          if (!MathJax.Menu) {
            MathJax.Menu = cc11001100_hook("MathJax.Menu", {}, "assign");
          }
        }, "assign");
      }
      var C = cc11001100_hook("C", {
        pageX: cc11001100_hook("pageX", t.pageX, "object-key-init"),
        pageY: cc11001100_hook("pageY", t.pageY, "object-key-init"),
        clientX: cc11001100_hook("clientX", t.clientX, "object-key-init"),
        clientY: cc11001100_hook("clientY", t.clientY, "object-key-init")
      }, "var-init");
      g.Queue(G, D, ["ContextMenu", n, C, E, w]);
      return n.False(t);
    },
    AltContextMenu: function (s, r) {
      var t = cc11001100_hook("t", b[r.jaxID], "var-init");
      var q = cc11001100_hook("q", (t.config.showMathMenu != null ? t : d).config.showMathMenu, "var-init");
      if (q) {
        q = cc11001100_hook("q", (t.config.showMathMenuMSIE != null ? t : d).config.showMathMenuMSIE, "assign");
        if (k.context === "MathJax" && !k.mpContext && q) {
          if (!c.noContextMenuBug || s.button !== n.RIGHTBUTTON) {
            return;
          }
        } else {
          if (!s[n.MENUKEY] || s.button !== n.LEFTBUTTON) {
            return;
          }
        }
        return t.ContextMenu(s, r, true);
      }
    },
    ClearSelection: function () {
      if (c.safariContextMenuBug) {
        setTimeout("window.getSelection().empty()", 0);
      }
      if (document.selection) {
        setTimeout("document.selection.empty()", 0);
      }
    },
    getBBox: function (s) {
      s.appendChild(c.topImg);
      var r = cc11001100_hook("r", c.topImg.offsetTop, "var-init"),
        t = cc11001100_hook("t", s.offsetHeight - r, "var-init"),
        q = cc11001100_hook("q", s.offsetWidth, "var-init");
      s.removeChild(c.topImg);
      return {
        w: cc11001100_hook("w", q, "object-key-init"),
        h: cc11001100_hook("h", r, "object-key-init"),
        d: cc11001100_hook("d", t, "object-key-init")
      };
    }
  }, "assign"), "var-init");
  var f = cc11001100_hook("f", c.Hover = cc11001100_hook("c.Hover", {
    Mouseover: function (s, r) {
      if (k.discoverable || k.zoom === "Hover") {
        var u = cc11001100_hook("u", s.fromElement || s.relatedTarget, "var-init"),
          t = cc11001100_hook("t", s.toElement || s.target, "var-init");
        if (u && t && (d.isMathJaxNode(u) !== d.isMathJaxNode(t) || d.getJaxFor(u) !== d.getJaxFor(t))) {
          var q = cc11001100_hook("q", this.getJaxFromMath(r), "var-init");
          if (q.hover) {
            f.ReHover(q);
          } else {
            f.HoverTimer(q, r);
          }
          return n.False(s);
        }
      }
    },
    Mouseout: function (s, r) {
      if (k.discoverable || k.zoom === "Hover") {
        var u = cc11001100_hook("u", s.fromElement || s.relatedTarget, "var-init"),
          t = cc11001100_hook("t", s.toElement || s.target, "var-init");
        if (u && t && (d.isMathJaxNode(u) !== d.isMathJaxNode(t) || d.getJaxFor(u) !== d.getJaxFor(t))) {
          var q = cc11001100_hook("q", this.getJaxFromMath(r), "var-init");
          if (q.hover) {
            f.UnHover(q);
          } else {
            f.ClearHoverTimer();
          }
          return n.False(s);
        }
      }
    },
    Mousemove: function (s, r) {
      if (k.discoverable || k.zoom === "Hover") {
        var q = cc11001100_hook("q", this.getJaxFromMath(r), "var-init");
        if (q.hover) {
          return;
        }
        if (f.lastX == s.clientX && f.lastY == s.clientY) {
          return;
        }
        f.lastX = cc11001100_hook("f.lastX", s.clientX, "assign");
        f.lastY = cc11001100_hook("f.lastY", s.clientY, "assign");
        f.HoverTimer(q, r);
        return n.False(s);
      }
    },
    HoverTimer: function (q, r) {
      this.ClearHoverTimer();
      this.hoverTimer = cc11001100_hook("this.hoverTimer", setTimeout(g(["Hover", this, q, r]), o.hover), "assign");
    },
    ClearHoverTimer: function () {
      if (this.hoverTimer) {
        clearTimeout(this.hoverTimer);
        delete this.hoverTimer;
      }
    },
    Hover: function (q, u) {
      if (i.MathZoom && i.MathZoom.Hover({}, u)) {
        return;
      }
      var t = cc11001100_hook("t", b[q.outputJax], "var-init"),
        v = cc11001100_hook("v", t.getHoverSpan(q, u), "var-init"),
        y = cc11001100_hook("y", t.getHoverBBox(q, v, u), "var-init"),
        w = cc11001100_hook("w", (t.config.showMathMenu != null ? t : d).config.showMathMenu, "var-init");
      var A = cc11001100_hook("A", o.frame.x, "var-init"),
        z = cc11001100_hook("z", o.frame.y, "var-init"),
        x = cc11001100_hook("x", o.frame.bwidth, "var-init");
      if (c.msieBorderWidthBug) {
        x = cc11001100_hook("x", 0, "assign");
      }
      q.hover = cc11001100_hook("q.hover", {
        opacity: cc11001100_hook("opacity", 0, "object-key-init"),
        id: cc11001100_hook("id", q.inputID + "-Hover", "object-key-init")
      }, "assign");
      var r = cc11001100_hook("r", h.Element("span", {
        id: cc11001100_hook("id", q.hover.id, "object-key-init"),
        isMathJax: cc11001100_hook("isMathJax", true, "object-key-init"),
        style: {
          display: cc11001100_hook("display", "inline-block", "object-key-init"),
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          position: cc11001100_hook("position", "relative", "object-key-init")
        }
      }, [["span", {
        className: cc11001100_hook("className", "MathJax_Hover_Frame", "object-key-init"),
        isMathJax: cc11001100_hook("isMathJax", true, "object-key-init"),
        style: {
          display: cc11001100_hook("display", "inline-block", "object-key-init"),
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          top: cc11001100_hook("top", this.Px(-y.h - z - x - (y.y || 0)), "object-key-init"),
          left: cc11001100_hook("left", this.Px(-A - x + (y.x || 0)), "object-key-init"),
          width: cc11001100_hook("width", this.Px(y.w + 2 * A), "object-key-init"),
          height: cc11001100_hook("height", this.Px(y.h + y.d + 2 * z), "object-key-init"),
          opacity: cc11001100_hook("opacity", 0, "object-key-init"),
          filter: cc11001100_hook("filter", "alpha(opacity=0)", "object-key-init")
        }
      }]]), "var-init");
      var s = cc11001100_hook("s", h.Element("span", {
        isMathJax: cc11001100_hook("isMathJax", true, "object-key-init"),
        id: cc11001100_hook("id", q.hover.id + "Menu", "object-key-init"),
        className: cc11001100_hook("className", "MathJax_Menu_Button", "object-key-init"),
        style: {
          display: cc11001100_hook("display", "inline-block", "object-key-init"),
          "z-index": cc11001100_hook("z-index", 1, "object-key-init"),
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          position: cc11001100_hook("position", "relative", "object-key-init")
        }
      }, [["span", {
        className: cc11001100_hook("className", "MathJax_Hover_Arrow", "object-key-init"),
        isMathJax: cc11001100_hook("isMathJax", true, "object-key-init"),
        math: cc11001100_hook("math", u, "object-key-init"),
        onclick: cc11001100_hook("onclick", this.HoverMenu, "object-key-init"),
        jax: cc11001100_hook("jax", t.id, "object-key-init"),
        style: {
          left: cc11001100_hook("left", this.Px(y.w + A + x + (y.x || 0) + o.button.x), "object-key-init"),
          top: cc11001100_hook("top", this.Px(-y.h - z - x - (y.y || 0) - o.button.y), "object-key-init"),
          opacity: cc11001100_hook("opacity", 0, "object-key-init"),
          filter: cc11001100_hook("filter", "alpha(opacity=0)", "object-key-init")
        }
      }, [["span", {
        isMathJax: cc11001100_hook("isMathJax", true, "object-key-init")
      }, "\u25BC"]]]]), "var-init");
      if (y.width) {
        r.style.width = cc11001100_hook("r.style.width", s.style.width = cc11001100_hook("s.style.width", y.width, "assign"), "assign");
        r.style.marginRight = cc11001100_hook("r.style.marginRight", s.style.marginRight = cc11001100_hook("s.style.marginRight", "-" + y.width, "assign"), "assign");
        r.firstChild.style.width = cc11001100_hook("r.firstChild.style.width", y.width, "assign");
        s.firstChild.style.left = cc11001100_hook("s.firstChild.style.left", "", "assign");
        s.firstChild.style.right = cc11001100_hook("s.firstChild.style.right", this.Px(o.button.wx), "assign");
      }
      v.parentNode.insertBefore(r, v);
      if (w) {
        v.parentNode.insertBefore(s, v);
      }
      if (v.style) {
        v.style.position = cc11001100_hook("v.style.position", "relative", "assign");
      }
      this.ReHover(q);
    },
    ReHover: function (q) {
      if (q.hover.remove) {
        clearTimeout(q.hover.remove);
      }
      q.hover.remove = cc11001100_hook("q.hover.remove", setTimeout(g(["UnHover", this, q]), o.fadeoutDelay), "assign");
      this.HoverFadeTimer(q, o.fadeinInc);
    },
    UnHover: function (q) {
      if (!q.hover.nofade) {
        this.HoverFadeTimer(q, -o.fadeoutInc, o.fadeoutStart);
      }
    },
    HoverFade: function (q) {
      delete q.hover.timer;
      q.hover.opacity = cc11001100_hook("q.hover.opacity", Math.max(0, Math.min(1, q.hover.opacity + q.hover.inc)), "assign");
      q.hover.opacity = cc11001100_hook("q.hover.opacity", Math.floor(1000 * q.hover.opacity) / 1000, "assign");
      var s = cc11001100_hook("s", document.getElementById(q.hover.id), "var-init"),
        r = cc11001100_hook("r", document.getElementById(q.hover.id + "Menu"), "var-init");
      s.firstChild.style.opacity = cc11001100_hook("s.firstChild.style.opacity", q.hover.opacity, "assign");
      s.firstChild.style.filter = cc11001100_hook("s.firstChild.style.filter", "alpha(opacity=" + Math.floor(100 * q.hover.opacity) + ")", "assign");
      if (r) {
        r.firstChild.style.opacity = cc11001100_hook("r.firstChild.style.opacity", q.hover.opacity, "assign");
        r.firstChild.style.filter = cc11001100_hook("r.firstChild.style.filter", s.style.filter, "assign");
      }
      if (q.hover.opacity === 1) {
        return;
      }
      if (q.hover.opacity > 0) {
        this.HoverFadeTimer(q, q.hover.inc);
        return;
      }
      s.parentNode.removeChild(s);
      if (r) {
        r.parentNode.removeChild(r);
      }
      if (q.hover.remove) {
        clearTimeout(q.hover.remove);
      }
      delete q.hover;
    },
    HoverFadeTimer: function (q, s, r) {
      q.hover.inc = cc11001100_hook("q.hover.inc", s, "assign");
      if (!q.hover.timer) {
        q.hover.timer = cc11001100_hook("q.hover.timer", setTimeout(g(["HoverFade", this, q]), r || o.fadeDelay), "assign");
      }
    },
    HoverMenu: function (q) {
      if (!q) {
        q = cc11001100_hook("q", window.event, "assign");
      }
      return b[this.jax].ContextMenu(q, this.math, true);
    },
    ClearHover: function (q) {
      if (q.hover.remove) {
        clearTimeout(q.hover.remove);
      }
      if (q.hover.timer) {
        clearTimeout(q.hover.timer);
      }
      f.ClearHoverTimer();
      delete q.hover;
    },
    Px: function (q) {
      if (Math.abs(q) < 0.006) {
        return "0px";
      }
      return q.toFixed(2).replace(/\.?0+$/, "") + "px";
    },
    getImages: function () {
      if (k.discoverable) {
        var q = cc11001100_hook("q", new Image(), "var-init");
        q.src = cc11001100_hook("q.src", o.button.src, "assign");
      }
    }
  }, "assign"), "var-init");
  var a = cc11001100_hook("a", c.Touch = cc11001100_hook("c.Touch", {
    last: cc11001100_hook("last", 0, "object-key-init"),
    delay: cc11001100_hook("delay", 500, "object-key-init"),
    start: function (r) {
      var q = cc11001100_hook("q", new Date().getTime(), "var-init");
      var s = cc11001100_hook("s", q - a.last < a.delay && a.up, "var-init");
      a.last = cc11001100_hook("a.last", q, "assign");
      a.up = cc11001100_hook("a.up", false, "assign");
      if (s) {
        a.timeout = cc11001100_hook("a.timeout", setTimeout(a.menu, a.delay, r, this), "assign");
        r.preventDefault();
      }
    },
    end: function (r) {
      var q = cc11001100_hook("q", new Date().getTime(), "var-init");
      a.up = cc11001100_hook("a.up", q - a.last < a.delay, "assign");
      if (a.timeout) {
        clearTimeout(a.timeout);
        delete a.timeout;
        a.last = cc11001100_hook("a.last", 0, "assign");
        a.up = cc11001100_hook("a.up", false, "assign");
        r.preventDefault();
        return n.Handler(r.touches[0] || r.touch, "DblClick", this);
      }
    },
    menu: function (r, q) {
      delete a.timeout;
      a.last = cc11001100_hook("a.last", 0, "assign");
      a.up = cc11001100_hook("a.up", false, "assign");
      return n.Handler(r.touches[0] || r.touch, "ContextMenu", q);
    }
  }, "assign"), "var-init");
  d.Browser.Select({
    MSIE: function (q) {
      var s = cc11001100_hook("s", document.documentMode || 0, "var-init");
      var r = cc11001100_hook("r", q.versionAtLeast("8.0"), "var-init");
      c.msieBorderWidthBug = cc11001100_hook("c.msieBorderWidthBug", document.compatMode === "BackCompat", "assign");
      c.msieEventBug = cc11001100_hook("c.msieEventBug", q.isIE9, "assign");
      c.msieAlignBug = cc11001100_hook("c.msieAlignBug", !r || s < 8, "assign");
      if (s < 9) {
        n.LEFTBUTTON = cc11001100_hook("n.LEFTBUTTON", 1, "assign");
      }
    },
    Safari: function (q) {
      c.safariContextMenuBug = cc11001100_hook("c.safariContextMenuBug", true, "assign");
    },
    Opera: function (q) {
      c.operaPositionBug = cc11001100_hook("c.operaPositionBug", true, "assign");
    },
    Konqueror: function (q) {
      c.noContextMenuBug = cc11001100_hook("c.noContextMenuBug", true, "assign");
    }
  });
  c.topImg = cc11001100_hook("c.topImg", c.msieAlignBug ? h.Element("img", {
    style: {
      width: cc11001100_hook("width", 0, "object-key-init"),
      height: cc11001100_hook("height", 0, "object-key-init"),
      position: cc11001100_hook("position", "relative", "object-key-init")
    },
    src: cc11001100_hook("src", "about:blank", "object-key-init")
  }) : h.Element("span", {
    style: {
      width: cc11001100_hook("width", 0, "object-key-init"),
      height: cc11001100_hook("height", 0, "object-key-init"),
      display: cc11001100_hook("display", "inline-block", "object-key-init")
    }
  }), "assign");
  if (c.operaPositionBug) {
    c.topImg.style.border = cc11001100_hook("c.topImg.style.border", "1px solid", "assign");
  }
  c.config = cc11001100_hook("c.config", o = cc11001100_hook("o", d.CombineConfig("MathEvents", o), "assign"), "assign");
  var e = function () {
    var q = cc11001100_hook("q", o.styles[".MathJax_Hover_Frame"], "var-init");
    q.border = cc11001100_hook("q.border", o.frame.bwidth + "px solid " + o.frame.bcolor + " ! important", "assign");
    q["box-shadow"] = cc11001100_hook("q[\"box-shadow\"]", q["-webkit-box-shadow"] = cc11001100_hook("q[\"-webkit-box-shadow\"]", q["-moz-box-shadow"] = cc11001100_hook("q[\"-moz-box-shadow\"]", q["-khtml-box-shadow"] = cc11001100_hook("q[\"-khtml-box-shadow\"]", "0px 0px " + o.frame.hwidth + " " + o.frame.hcolor, "assign"), "assign"), "assign"), "assign");
  };
  g.Queue(d.Register.StartupHook("End Config", {}), [e], ["getImages", f], ["Styles", l, o.styles], ["Post", d.Startup.signal, "MathEvents Ready"], ["loadComplete", l, "[MathJax]/extensions/MathEvents.js"]);
})(MathJax.Hub, MathJax.HTML, MathJax.Ajax, MathJax.Callback, MathJax.Localization, MathJax.OutputJax, MathJax.InputJax);
(function (a, d, f, c, j) {
  var k = cc11001100_hook("k", "2.7.2", "var-init");
  var i = cc11001100_hook("i", a.CombineConfig("MathZoom", {
    styles: {
      "#MathJax_Zoom": {
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        "background-color": cc11001100_hook("background-color", "#F0F0F0", "object-key-init"),
        overflow: cc11001100_hook("overflow", "auto", "object-key-init"),
        display: cc11001100_hook("display", "block", "object-key-init"),
        "z-index": cc11001100_hook("z-index", 301, "object-key-init"),
        padding: cc11001100_hook("padding", ".5em", "object-key-init"),
        border: cc11001100_hook("border", "1px solid black", "object-key-init"),
        margin: cc11001100_hook("margin", 0, "object-key-init"),
        "font-weight": cc11001100_hook("font-weight", "normal", "object-key-init"),
        "font-style": cc11001100_hook("font-style", "normal", "object-key-init"),
        "text-align": cc11001100_hook("text-align", "left", "object-key-init"),
        "text-indent": cc11001100_hook("text-indent", 0, "object-key-init"),
        "text-transform": cc11001100_hook("text-transform", "none", "object-key-init"),
        "line-height": cc11001100_hook("line-height", "normal", "object-key-init"),
        "letter-spacing": cc11001100_hook("letter-spacing", "normal", "object-key-init"),
        "word-spacing": cc11001100_hook("word-spacing", "normal", "object-key-init"),
        "word-wrap": cc11001100_hook("word-wrap", "normal", "object-key-init"),
        "white-space": cc11001100_hook("white-space", "nowrap", "object-key-init"),
        "float": cc11001100_hook("float", "none", "object-key-init"),
        "-webkit-box-sizing": cc11001100_hook("-webkit-box-sizing", "content-box", "object-key-init"),
        "-moz-box-sizing": cc11001100_hook("-moz-box-sizing", "content-box", "object-key-init"),
        "box-sizing": cc11001100_hook("box-sizing", "content-box", "object-key-init"),
        "box-shadow": cc11001100_hook("box-shadow", "5px 5px 15px #AAAAAA", "object-key-init"),
        "-webkit-box-shadow": cc11001100_hook("-webkit-box-shadow", "5px 5px 15px #AAAAAA", "object-key-init"),
        "-moz-box-shadow": cc11001100_hook("-moz-box-shadow", "5px 5px 15px #AAAAAA", "object-key-init"),
        "-khtml-box-shadow": cc11001100_hook("-khtml-box-shadow", "5px 5px 15px #AAAAAA", "object-key-init"),
        filter: cc11001100_hook("filter", "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')", "object-key-init")
      },
      "#MathJax_ZoomOverlay": {
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init"),
        top: cc11001100_hook("top", 0, "object-key-init"),
        "z-index": cc11001100_hook("z-index", 300, "object-key-init"),
        display: cc11001100_hook("display", "inline-block", "object-key-init"),
        width: cc11001100_hook("width", "100%", "object-key-init"),
        height: cc11001100_hook("height", "100%", "object-key-init"),
        border: cc11001100_hook("border", 0, "object-key-init"),
        padding: cc11001100_hook("padding", 0, "object-key-init"),
        margin: cc11001100_hook("margin", 0, "object-key-init"),
        "background-color": cc11001100_hook("background-color", "white", "object-key-init"),
        opacity: cc11001100_hook("opacity", 0, "object-key-init"),
        filter: cc11001100_hook("filter", "alpha(opacity=0)", "object-key-init")
      },
      "#MathJax_ZoomFrame": {
        position: cc11001100_hook("position", "relative", "object-key-init"),
        display: cc11001100_hook("display", "inline-block", "object-key-init"),
        height: cc11001100_hook("height", 0, "object-key-init"),
        width: cc11001100_hook("width", 0, "object-key-init")
      },
      "#MathJax_ZoomEventTrap": {
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init"),
        top: cc11001100_hook("top", 0, "object-key-init"),
        "z-index": cc11001100_hook("z-index", 302, "object-key-init"),
        display: cc11001100_hook("display", "inline-block", "object-key-init"),
        border: cc11001100_hook("border", 0, "object-key-init"),
        padding: cc11001100_hook("padding", 0, "object-key-init"),
        margin: cc11001100_hook("margin", 0, "object-key-init"),
        "background-color": cc11001100_hook("background-color", "white", "object-key-init"),
        opacity: cc11001100_hook("opacity", 0, "object-key-init"),
        filter: cc11001100_hook("filter", "alpha(opacity=0)", "object-key-init")
      }
    }
  }), "var-init");
  var e, b, g;
  MathJax.Hub.Register.StartupHook("MathEvents Ready", function () {
    g = cc11001100_hook("g", MathJax.Extension.MathEvents.Event, "assign");
    e = cc11001100_hook("e", MathJax.Extension.MathEvents.Event.False, "assign");
    b = cc11001100_hook("b", MathJax.Extension.MathEvents.Hover, "assign");
  });
  var h = cc11001100_hook("h", MathJax.Extension.MathZoom = cc11001100_hook("MathJax.Extension.MathZoom", {
    version: cc11001100_hook("version", k, "object-key-init"),
    settings: cc11001100_hook("settings", a.config.menuSettings, "object-key-init"),
    scrollSize: cc11001100_hook("scrollSize", 18, "object-key-init"),
    HandleEvent: function (n, l, m) {
      if (h.settings.CTRL && !n.ctrlKey) {
        return true;
      }
      if (h.settings.ALT && !n.altKey) {
        return true;
      }
      if (h.settings.CMD && !n.metaKey) {
        return true;
      }
      if (h.settings.Shift && !n.shiftKey) {
        return true;
      }
      if (!h[l]) {
        return true;
      }
      return h[l](n, m);
    },
    Click: function (m, l) {
      if (this.settings.zoom === "Click") {
        return this.Zoom(m, l);
      }
    },
    DblClick: function (m, l) {
      if (this.settings.zoom === "Double-Click" || this.settings.zoom === "DoubleClick") {
        return this.Zoom(m, l);
      }
    },
    Hover: function (m, l) {
      if (this.settings.zoom === "Hover") {
        this.Zoom(m, l);
        return true;
      }
      return false;
    },
    Zoom: function (o, u) {
      this.Remove();
      b.ClearHoverTimer();
      g.ClearSelection();
      var s = cc11001100_hook("s", MathJax.OutputJax[u.jaxID], "var-init");
      var p = cc11001100_hook("p", s.getJaxFromMath(u), "var-init");
      if (p.hover) {
        b.UnHover(p);
      }
      var q = cc11001100_hook("q", this.findContainer(u), "var-init");
      var l = cc11001100_hook("l", Math.floor(0.85 * q.clientWidth), "var-init"),
        t = cc11001100_hook("t", Math.max(document.body.clientHeight, document.documentElement.clientHeight), "var-init");
      if (this.getOverflow(q) !== "visible") {
        t = cc11001100_hook("t", Math.min(q.clientHeight, t), "assign");
      }
      t = cc11001100_hook("t", Math.floor(0.85 * t), "assign");
      var n = cc11001100_hook("n", d.Element("span", {
        id: cc11001100_hook("id", "MathJax_ZoomFrame", "object-key-init")
      }, [["span", {
        id: cc11001100_hook("id", "MathJax_ZoomOverlay", "object-key-init"),
        onmousedown: cc11001100_hook("onmousedown", this.Remove, "object-key-init")
      }], ["span", {
        id: cc11001100_hook("id", "MathJax_Zoom", "object-key-init"),
        onclick: cc11001100_hook("onclick", this.Remove, "object-key-init"),
        style: {
          visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", this.settings.zscale, "object-key-init")
        }
      }, [["span", {
        style: {
          display: cc11001100_hook("display", "inline-block", "object-key-init"),
          "white-space": cc11001100_hook("white-space", "nowrap", "object-key-init")
        }
      }]]]]), "var-init");
      var z = cc11001100_hook("z", n.lastChild, "var-init"),
        w = cc11001100_hook("w", z.firstChild, "var-init"),
        r = cc11001100_hook("r", n.firstChild, "var-init");
      u.parentNode.insertBefore(n, u);
      u.parentNode.insertBefore(u, n);
      if (w.addEventListener) {
        w.addEventListener("mousedown", this.Remove, true);
      }
      var m = cc11001100_hook("m", z.offsetWidth || z.clientWidth, "var-init");
      l -= cc11001100_hook("l", m, "assign");
      t -= cc11001100_hook("t", m, "assign");
      z.style.maxWidth = cc11001100_hook("z.style.maxWidth", l + "px", "assign");
      z.style.maxHeight = cc11001100_hook("z.style.maxHeight", t + "px", "assign");
      if (this.msieTrapEventBug) {
        var y = cc11001100_hook("y", d.Element("span", {
          id: cc11001100_hook("id", "MathJax_ZoomEventTrap", "object-key-init"),
          onmousedown: cc11001100_hook("onmousedown", this.Remove, "object-key-init")
        }), "var-init");
        n.insertBefore(y, z);
      }
      if (this.msieZIndexBug) {
        var v = cc11001100_hook("v", d.addElement(document.body, "img", {
          src: cc11001100_hook("src", "about:blank", "object-key-init"),
          id: cc11001100_hook("id", "MathJax_ZoomTracker", "object-key-init"),
          width: cc11001100_hook("width", 0, "object-key-init"),
          height: cc11001100_hook("height", 0, "object-key-init"),
          style: {
            width: cc11001100_hook("width", 0, "object-key-init"),
            height: cc11001100_hook("height", 0, "object-key-init"),
            position: cc11001100_hook("position", "relative", "object-key-init")
          }
        }), "var-init");
        n.style.position = cc11001100_hook("n.style.position", "relative", "assign");
        n.style.zIndex = cc11001100_hook("n.style.zIndex", i.styles["#MathJax_ZoomOverlay"]["z-index"], "assign");
        n = cc11001100_hook("n", v, "assign");
      }
      var x = cc11001100_hook("x", s.Zoom(p, w, u, l, t), "var-init");
      if (this.msiePositionBug) {
        if (this.msieSizeBug) {
          z.style.height = cc11001100_hook("z.style.height", x.zH + "px", "assign");
          z.style.width = cc11001100_hook("z.style.width", x.zW + "px", "assign");
        }
        if (z.offsetHeight > t) {
          z.style.height = cc11001100_hook("z.style.height", t + "px", "assign");
          z.style.width = cc11001100_hook("z.style.width", x.zW + this.scrollSize + "px", "assign");
        }
        if (z.offsetWidth > l) {
          z.style.width = cc11001100_hook("z.style.width", l + "px", "assign");
          z.style.height = cc11001100_hook("z.style.height", x.zH + this.scrollSize + "px", "assign");
        }
      }
      if (this.operaPositionBug) {
        z.style.width = cc11001100_hook("z.style.width", Math.min(l, x.zW) + "px", "assign");
      }
      if (z.offsetWidth > m && z.offsetWidth - m < l && z.offsetHeight - m < t) {
        z.style.overflow = cc11001100_hook("z.style.overflow", "visible", "assign");
      }
      this.Position(z, x);
      if (this.msieTrapEventBug) {
        y.style.height = cc11001100_hook("y.style.height", z.clientHeight + "px", "assign");
        y.style.width = cc11001100_hook("y.style.width", z.clientWidth + "px", "assign");
        y.style.left = cc11001100_hook("y.style.left", parseFloat(z.style.left) + z.clientLeft + "px", "assign");
        y.style.top = cc11001100_hook("y.style.top", parseFloat(z.style.top) + z.clientTop + "px", "assign");
      }
      z.style.visibility = cc11001100_hook("z.style.visibility", "", "assign");
      if (this.settings.zoom === "Hover") {
        r.onmouseover = cc11001100_hook("r.onmouseover", this.Remove, "assign");
      }
      if (window.addEventListener) {
        addEventListener("resize", this.Resize, false);
      } else {
        if (window.attachEvent) {
          attachEvent("onresize", this.Resize);
        } else {
          this.onresize = cc11001100_hook("this.onresize", window.onresize, "assign");
          window.onresize = cc11001100_hook("window.onresize", this.Resize, "assign");
        }
      }
      a.signal.Post(["math zoomed", p]);
      return e(o);
    },
    Position: function (p, r) {
      p.style.display = cc11001100_hook("p.style.display", "none", "assign");
      var q = cc11001100_hook("q", this.Resize(), "var-init"),
        m = cc11001100_hook("m", q.x, "var-init"),
        s = cc11001100_hook("s", q.y, "var-init"),
        l = cc11001100_hook("l", r.mW, "var-init");
      p.style.display = cc11001100_hook("p.style.display", "", "assign");
      var o = cc11001100_hook("o", -l - Math.floor((p.offsetWidth - l) / 2), "var-init"),
        n = cc11001100_hook("n", r.Y, "var-init");
      p.style.left = cc11001100_hook("p.style.left", Math.max(o, 10 - m) + "px", "assign");
      p.style.top = cc11001100_hook("p.style.top", Math.max(n, 10 - s) + "px", "assign");
      if (!h.msiePositionBug) {
        h.SetWH();
      }
    },
    Resize: function (m) {
      if (h.onresize) {
        h.onresize(m);
      }
      var q = cc11001100_hook("q", document.getElementById("MathJax_ZoomFrame"), "var-init"),
        l = cc11001100_hook("l", document.getElementById("MathJax_ZoomOverlay"), "var-init");
      var o = cc11001100_hook("o", h.getXY(q), "var-init"),
        n = cc11001100_hook("n", h.findContainer(q), "var-init");
      if (h.getOverflow(n) !== "visible") {
        l.scroll_parent = cc11001100_hook("l.scroll_parent", n, "assign");
        var p = cc11001100_hook("p", h.getXY(n), "var-init");
        o.x -= cc11001100_hook("o.x", p.x, "assign");
        o.y -= cc11001100_hook("o.y", p.y, "assign");
        p = cc11001100_hook("p", h.getBorder(n), "assign");
        o.x -= cc11001100_hook("o.x", p.x, "assign");
        o.y -= cc11001100_hook("o.y", p.y, "assign");
      }
      l.style.left = cc11001100_hook("l.style.left", -o.x + "px", "assign");
      l.style.top = cc11001100_hook("l.style.top", -o.y + "px", "assign");
      if (h.msiePositionBug) {
        setTimeout(h.SetWH, 0);
      } else {
        h.SetWH();
      }
      return o;
    },
    SetWH: function () {
      var l = cc11001100_hook("l", document.getElementById("MathJax_ZoomOverlay"), "var-init");
      if (!l) {
        return;
      }
      l.style.display = cc11001100_hook("l.style.display", "none", "assign");
      var m = cc11001100_hook("m", l.scroll_parent || document.documentElement || document.body, "var-init");
      l.style.width = cc11001100_hook("l.style.width", m.scrollWidth + "px", "assign");
      l.style.height = cc11001100_hook("l.style.height", Math.max(m.clientHeight, m.scrollHeight) + "px", "assign");
      l.style.display = cc11001100_hook("l.style.display", "", "assign");
    },
    findContainer: function (l) {
      l = cc11001100_hook("l", l.parentNode, "assign");
      while (l.parentNode && l !== document.body && h.getOverflow(l) === "visible") {
        l = cc11001100_hook("l", l.parentNode, "assign");
      }
      return l;
    },
    getOverflow: cc11001100_hook("getOverflow", window.getComputedStyle ? function (l) {
      return getComputedStyle(l).overflow;
    } : function (l) {
      return (l.currentStyle || {
        overflow: cc11001100_hook("overflow", "visible", "object-key-init")
      }).overflow;
    }, "object-key-init"),
    getBorder: function (o) {
      var m = cc11001100_hook("m", {
        thin: cc11001100_hook("thin", 1, "object-key-init"),
        medium: cc11001100_hook("medium", 2, "object-key-init"),
        thick: cc11001100_hook("thick", 3, "object-key-init")
      }, "var-init");
      var n = cc11001100_hook("n", window.getComputedStyle ? getComputedStyle(o) : o.currentStyle || {
        borderLeftWidth: cc11001100_hook("borderLeftWidth", 0, "object-key-init"),
        borderTopWidth: cc11001100_hook("borderTopWidth", 0, "object-key-init")
      }, "var-init");
      var l = cc11001100_hook("l", n.borderLeftWidth, "var-init"),
        p = cc11001100_hook("p", n.borderTopWidth, "var-init");
      if (m[l]) {
        l = cc11001100_hook("l", m[l], "assign");
      } else {
        l = cc11001100_hook("l", parseInt(l), "assign");
      }
      if (m[p]) {
        p = cc11001100_hook("p", m[p], "assign");
      } else {
        p = cc11001100_hook("p", parseInt(p), "assign");
      }
      return {
        x: cc11001100_hook("x", l, "object-key-init"),
        y: cc11001100_hook("y", p, "object-key-init")
      };
    },
    getXY: function (o) {
      var l = cc11001100_hook("l", 0, "var-init"),
        n = cc11001100_hook("n", 0, "var-init"),
        m;
      m = cc11001100_hook("m", o, "assign");
      while (m.offsetParent) {
        l += cc11001100_hook("l", m.offsetLeft, "assign");
        m = cc11001100_hook("m", m.offsetParent, "assign");
      }
      if (h.operaPositionBug) {
        o.style.border = cc11001100_hook("o.style.border", "1px solid", "assign");
      }
      m = cc11001100_hook("m", o, "assign");
      while (m.offsetParent) {
        n += cc11001100_hook("n", m.offsetTop, "assign");
        m = cc11001100_hook("m", m.offsetParent, "assign");
      }
      if (h.operaPositionBug) {
        o.style.border = cc11001100_hook("o.style.border", "", "assign");
      }
      return {
        x: cc11001100_hook("x", l, "object-key-init"),
        y: cc11001100_hook("y", n, "object-key-init")
      };
    },
    Remove: function (n) {
      var p = cc11001100_hook("p", document.getElementById("MathJax_ZoomFrame"), "var-init");
      if (p) {
        var o = cc11001100_hook("o", MathJax.OutputJax[p.previousSibling.jaxID], "var-init");
        var l = cc11001100_hook("l", o.getJaxFromMath(p.previousSibling), "var-init");
        a.signal.Post(["math unzoomed", l]);
        p.parentNode.removeChild(p);
        p = cc11001100_hook("p", document.getElementById("MathJax_ZoomTracker"), "assign");
        if (p) {
          p.parentNode.removeChild(p);
        }
        if (h.operaRefreshBug) {
          var m = cc11001100_hook("m", d.addElement(document.body, "div", {
            style: {
              position: cc11001100_hook("position", "fixed", "object-key-init"),
              left: cc11001100_hook("left", 0, "object-key-init"),
              top: cc11001100_hook("top", 0, "object-key-init"),
              width: cc11001100_hook("width", "100%", "object-key-init"),
              height: cc11001100_hook("height", "100%", "object-key-init"),
              backgroundColor: cc11001100_hook("backgroundColor", "white", "object-key-init"),
              opacity: cc11001100_hook("opacity", 0, "object-key-init")
            },
            id: cc11001100_hook("id", "MathJax_OperaDiv", "object-key-init")
          }), "var-init");
          document.body.removeChild(m);
        }
        if (window.removeEventListener) {
          removeEventListener("resize", h.Resize, false);
        } else {
          if (window.detachEvent) {
            detachEvent("onresize", h.Resize);
          } else {
            window.onresize = cc11001100_hook("window.onresize", h.onresize, "assign");
            delete h.onresize;
          }
        }
      }
      return e(n);
    }
  }, "assign"), "var-init");
  a.Browser.Select({
    MSIE: function (l) {
      var n = cc11001100_hook("n", document.documentMode || 0, "var-init");
      var m = cc11001100_hook("m", n >= 9, "var-init");
      h.msiePositionBug = cc11001100_hook("h.msiePositionBug", !m, "assign");
      h.msieSizeBug = cc11001100_hook("h.msieSizeBug", l.versionAtLeast("7.0") && (!document.documentMode || n === 7 || n === 8), "assign");
      h.msieZIndexBug = cc11001100_hook("h.msieZIndexBug", n <= 7, "assign");
      h.msieInlineBlockAlignBug = cc11001100_hook("h.msieInlineBlockAlignBug", n <= 7, "assign");
      h.msieTrapEventBug = cc11001100_hook("h.msieTrapEventBug", !window.addEventListener, "assign");
      if (document.compatMode === "BackCompat") {
        h.scrollSize = cc11001100_hook("h.scrollSize", 52, "assign");
      }
      if (m) {
        delete i.styles["#MathJax_Zoom"].filter;
      }
    },
    Opera: function (l) {
      h.operaPositionBug = cc11001100_hook("h.operaPositionBug", true, "assign");
      h.operaRefreshBug = cc11001100_hook("h.operaRefreshBug", true, "assign");
    }
  });
  h.topImg = cc11001100_hook("h.topImg", h.msieInlineBlockAlignBug ? d.Element("img", {
    style: {
      width: cc11001100_hook("width", 0, "object-key-init"),
      height: cc11001100_hook("height", 0, "object-key-init"),
      position: cc11001100_hook("position", "relative", "object-key-init")
    },
    src: cc11001100_hook("src", "about:blank", "object-key-init")
  }) : d.Element("span", {
    style: {
      width: cc11001100_hook("width", 0, "object-key-init"),
      height: cc11001100_hook("height", 0, "object-key-init"),
      display: cc11001100_hook("display", "inline-block", "object-key-init")
    }
  }), "assign");
  if (h.operaPositionBug || h.msieTopBug) {
    h.topImg.style.border = cc11001100_hook("h.topImg.style.border", "1px solid", "assign");
  }
  MathJax.Callback.Queue(["StartupHook", MathJax.Hub.Register, "Begin Styles", {}], ["Styles", f, i.styles], ["Post", a.Startup.signal, "MathZoom Ready"], ["loadComplete", f, "[MathJax]/extensions/MathZoom.js"]);
})(MathJax.Hub, MathJax.HTML, MathJax.Ajax, MathJax.OutputJax["HTML-CSS"], MathJax.OutputJax.NativeMML);
(function (f, o, q, e, r) {
  var p = cc11001100_hook("p", "2.7.2", "var-init");
  var d = cc11001100_hook("d", MathJax.Callback.Signal("menu"), "var-init");
  MathJax.Extension.MathMenu = cc11001100_hook("MathJax.Extension.MathMenu", {
    version: cc11001100_hook("version", p, "object-key-init"),
    signal: cc11001100_hook("signal", d, "object-key-init")
  }, "assign");
  var t = function (u) {
    return MathJax.Localization._.apply(MathJax.Localization, [["MathMenu", u]].concat([].slice.call(arguments, 1)));
  };
  var i = cc11001100_hook("i", MathJax.Object.isArray, "var-init");
  var a = cc11001100_hook("a", f.Browser.isPC, "var-init"),
    l = cc11001100_hook("l", f.Browser.isMSIE, "var-init"),
    m = cc11001100_hook("m", (document.documentMode || 0) > 8, "var-init");
  var j = cc11001100_hook("j", a ? null : "5px", "var-init");
  var s = cc11001100_hook("s", f.CombineConfig("MathMenu", {
    delay: cc11001100_hook("delay", 150, "object-key-init"),
    showRenderer: cc11001100_hook("showRenderer", true, "object-key-init"),
    showMathPlayer: cc11001100_hook("showMathPlayer", true, "object-key-init"),
    showFontMenu: cc11001100_hook("showFontMenu", false, "object-key-init"),
    showContext: cc11001100_hook("showContext", false, "object-key-init"),
    showDiscoverable: cc11001100_hook("showDiscoverable", false, "object-key-init"),
    showLocale: cc11001100_hook("showLocale", true, "object-key-init"),
    showLocaleURL: cc11001100_hook("showLocaleURL", false, "object-key-init"),
    semanticsAnnotations: {
      TeX: cc11001100_hook("TeX", ["TeX", "LaTeX", "application/x-tex"], "object-key-init"),
      StarMath: cc11001100_hook("StarMath", ["StarMath 5.0"], "object-key-init"),
      Maple: cc11001100_hook("Maple", ["Maple"], "object-key-init"),
      ContentMathML: cc11001100_hook("ContentMathML", ["MathML-Content", "application/mathml-content+xml"], "object-key-init"),
      OpenMath: cc11001100_hook("OpenMath", ["OpenMath"], "object-key-init")
    },
    windowSettings: {
      status: cc11001100_hook("status", "no", "object-key-init"),
      toolbar: cc11001100_hook("toolbar", "no", "object-key-init"),
      locationbar: cc11001100_hook("locationbar", "no", "object-key-init"),
      menubar: cc11001100_hook("menubar", "no", "object-key-init"),
      directories: cc11001100_hook("directories", "no", "object-key-init"),
      personalbar: cc11001100_hook("personalbar", "no", "object-key-init"),
      resizable: cc11001100_hook("resizable", "yes", "object-key-init"),
      scrollbars: cc11001100_hook("scrollbars", "yes", "object-key-init"),
      width: cc11001100_hook("width", 400, "object-key-init"),
      height: cc11001100_hook("height", 300, "object-key-init"),
      left: cc11001100_hook("left", Math.round((screen.width - 400) / 2), "object-key-init"),
      top: cc11001100_hook("top", Math.round((screen.height - 300) / 3), "object-key-init")
    },
    styles: {
      "#MathJax_About": {
        position: cc11001100_hook("position", "fixed", "object-key-init"),
        left: cc11001100_hook("left", "50%", "object-key-init"),
        width: cc11001100_hook("width", "auto", "object-key-init"),
        "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
        border: cc11001100_hook("border", "3px outset", "object-key-init"),
        padding: cc11001100_hook("padding", "1em 2em", "object-key-init"),
        "background-color": cc11001100_hook("background-color", "#DDDDDD", "object-key-init"),
        color: cc11001100_hook("color", "black", "object-key-init"),
        cursor: cc11001100_hook("cursor", "default", "object-key-init"),
        "font-family": cc11001100_hook("font-family", "message-box", "object-key-init"),
        "font-size": cc11001100_hook("font-size", "120%", "object-key-init"),
        "font-style": cc11001100_hook("font-style", "normal", "object-key-init"),
        "text-indent": cc11001100_hook("text-indent", 0, "object-key-init"),
        "text-transform": cc11001100_hook("text-transform", "none", "object-key-init"),
        "line-height": cc11001100_hook("line-height", "normal", "object-key-init"),
        "letter-spacing": cc11001100_hook("letter-spacing", "normal", "object-key-init"),
        "word-spacing": cc11001100_hook("word-spacing", "normal", "object-key-init"),
        "word-wrap": cc11001100_hook("word-wrap", "normal", "object-key-init"),
        "white-space": cc11001100_hook("white-space", "nowrap", "object-key-init"),
        "float": cc11001100_hook("float", "none", "object-key-init"),
        "z-index": cc11001100_hook("z-index", 201, "object-key-init"),
        "border-radius": cc11001100_hook("border-radius", "15px", "object-key-init"),
        "-webkit-border-radius": cc11001100_hook("-webkit-border-radius", "15px", "object-key-init"),
        "-moz-border-radius": cc11001100_hook("-moz-border-radius", "15px", "object-key-init"),
        "-khtml-border-radius": cc11001100_hook("-khtml-border-radius", "15px", "object-key-init"),
        "box-shadow": cc11001100_hook("box-shadow", "0px 10px 20px #808080", "object-key-init"),
        "-webkit-box-shadow": cc11001100_hook("-webkit-box-shadow", "0px 10px 20px #808080", "object-key-init"),
        "-moz-box-shadow": cc11001100_hook("-moz-box-shadow", "0px 10px 20px #808080", "object-key-init"),
        "-khtml-box-shadow": cc11001100_hook("-khtml-box-shadow", "0px 10px 20px #808080", "object-key-init"),
        filter: cc11001100_hook("filter", "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')", "object-key-init")
      },
      "#MathJax_About.MathJax_MousePost": {
        outline: cc11001100_hook("outline", "none", "object-key-init")
      },
      ".MathJax_Menu": {
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        "background-color": cc11001100_hook("background-color", "white", "object-key-init"),
        color: cc11001100_hook("color", "black", "object-key-init"),
        width: cc11001100_hook("width", "auto", "object-key-init"),
        padding: cc11001100_hook("padding", a ? "2px" : "5px 0px", "object-key-init"),
        border: cc11001100_hook("border", "1px solid #CCCCCC", "object-key-init"),
        margin: cc11001100_hook("margin", 0, "object-key-init"),
        cursor: cc11001100_hook("cursor", "default", "object-key-init"),
        font: cc11001100_hook("font", "menu", "object-key-init"),
        "text-align": cc11001100_hook("text-align", "left", "object-key-init"),
        "text-indent": cc11001100_hook("text-indent", 0, "object-key-init"),
        "text-transform": cc11001100_hook("text-transform", "none", "object-key-init"),
        "line-height": cc11001100_hook("line-height", "normal", "object-key-init"),
        "letter-spacing": cc11001100_hook("letter-spacing", "normal", "object-key-init"),
        "word-spacing": cc11001100_hook("word-spacing", "normal", "object-key-init"),
        "word-wrap": cc11001100_hook("word-wrap", "normal", "object-key-init"),
        "white-space": cc11001100_hook("white-space", "nowrap", "object-key-init"),
        "float": cc11001100_hook("float", "none", "object-key-init"),
        "z-index": cc11001100_hook("z-index", 201, "object-key-init"),
        "border-radius": cc11001100_hook("border-radius", j, "object-key-init"),
        "-webkit-border-radius": cc11001100_hook("-webkit-border-radius", j, "object-key-init"),
        "-moz-border-radius": cc11001100_hook("-moz-border-radius", j, "object-key-init"),
        "-khtml-border-radius": cc11001100_hook("-khtml-border-radius", j, "object-key-init"),
        "box-shadow": cc11001100_hook("box-shadow", "0px 10px 20px #808080", "object-key-init"),
        "-webkit-box-shadow": cc11001100_hook("-webkit-box-shadow", "0px 10px 20px #808080", "object-key-init"),
        "-moz-box-shadow": cc11001100_hook("-moz-box-shadow", "0px 10px 20px #808080", "object-key-init"),
        "-khtml-box-shadow": cc11001100_hook("-khtml-box-shadow", "0px 10px 20px #808080", "object-key-init"),
        filter: cc11001100_hook("filter", "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')", "object-key-init")
      },
      ".MathJax_MenuItem": {
        padding: cc11001100_hook("padding", a ? "2px 2em" : "1px 2em", "object-key-init"),
        background: cc11001100_hook("background", "transparent", "object-key-init")
      },
      ".MathJax_MenuArrow": {
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        right: cc11001100_hook("right", ".5em", "object-key-init"),
        "padding-top": cc11001100_hook("padding-top", ".25em", "object-key-init"),
        color: cc11001100_hook("color", "#666666", "object-key-init"),
        "font-family": cc11001100_hook("font-family", l ? "'Arial unicode MS'" : null, "object-key-init"),
        "font-size": cc11001100_hook("font-size", ".75em", "object-key-init")
      },
      ".MathJax_MenuActive .MathJax_MenuArrow": {
        color: cc11001100_hook("color", "white", "object-key-init")
      },
      ".MathJax_MenuArrow.RTL": {
        left: cc11001100_hook("left", ".5em", "object-key-init"),
        right: cc11001100_hook("right", "auto", "object-key-init")
      },
      ".MathJax_MenuCheck": {
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        left: cc11001100_hook("left", ".7em", "object-key-init"),
        "font-family": cc11001100_hook("font-family", l ? "'Arial unicode MS'" : null, "object-key-init")
      },
      ".MathJax_MenuCheck.RTL": {
        right: cc11001100_hook("right", ".7em", "object-key-init"),
        left: cc11001100_hook("left", "auto", "object-key-init")
      },
      ".MathJax_MenuRadioCheck": {
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        left: cc11001100_hook("left", a ? "1em" : ".7em", "object-key-init")
      },
      ".MathJax_MenuRadioCheck.RTL": {
        right: cc11001100_hook("right", a ? "1em" : ".7em", "object-key-init"),
        left: cc11001100_hook("left", "auto", "object-key-init")
      },
      ".MathJax_MenuLabel": {
        padding: cc11001100_hook("padding", a ? "2px 2em 4px 1.33em" : "1px 2em 3px 1.33em", "object-key-init"),
        "font-style": cc11001100_hook("font-style", "italic", "object-key-init")
      },
      ".MathJax_MenuRule": {
        "border-top": cc11001100_hook("border-top", a ? "1px solid #CCCCCC" : "1px solid #DDDDDD", "object-key-init"),
        margin: cc11001100_hook("margin", a ? "4px 1px 0px" : "4px 3px", "object-key-init")
      },
      ".MathJax_MenuDisabled": {
        color: cc11001100_hook("color", "GrayText", "object-key-init")
      },
      ".MathJax_MenuActive": {
        "background-color": cc11001100_hook("background-color", a ? "Highlight" : "#606872", "object-key-init"),
        color: cc11001100_hook("color", a ? "HighlightText" : "white", "object-key-init")
      },
      ".MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus": {
        "background-color": cc11001100_hook("background-color", "#E8E8E8", "object-key-init")
      },
      ".MathJax_ContextMenu:focus": {
        outline: cc11001100_hook("outline", "none", "object-key-init")
      },
      ".MathJax_ContextMenu .MathJax_MenuItem:focus": {
        outline: cc11001100_hook("outline", "none", "object-key-init")
      },
      "#MathJax_AboutClose": {
        top: cc11001100_hook("top", ".2em", "object-key-init"),
        right: cc11001100_hook("right", ".2em", "object-key-init")
      },
      ".MathJax_Menu .MathJax_MenuClose": {
        top: cc11001100_hook("top", "-10px", "object-key-init"),
        left: cc11001100_hook("left", "-10px", "object-key-init")
      },
      ".MathJax_MenuClose": {
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        cursor: cc11001100_hook("cursor", "pointer", "object-key-init"),
        display: cc11001100_hook("display", "inline-block", "object-key-init"),
        border: cc11001100_hook("border", "2px solid #AAA", "object-key-init"),
        "border-radius": cc11001100_hook("border-radius", "18px", "object-key-init"),
        "-webkit-border-radius": cc11001100_hook("-webkit-border-radius", "18px", "object-key-init"),
        "-moz-border-radius": cc11001100_hook("-moz-border-radius", "18px", "object-key-init"),
        "-khtml-border-radius": cc11001100_hook("-khtml-border-radius", "18px", "object-key-init"),
        "font-family": cc11001100_hook("font-family", "'Courier New',Courier", "object-key-init"),
        "font-size": cc11001100_hook("font-size", "24px", "object-key-init"),
        color: cc11001100_hook("color", "#F0F0F0", "object-key-init")
      },
      ".MathJax_MenuClose span": {
        display: cc11001100_hook("display", "block", "object-key-init"),
        "background-color": cc11001100_hook("background-color", "#AAA", "object-key-init"),
        border: cc11001100_hook("border", "1.5px solid", "object-key-init"),
        "border-radius": cc11001100_hook("border-radius", "18px", "object-key-init"),
        "-webkit-border-radius": cc11001100_hook("-webkit-border-radius", "18px", "object-key-init"),
        "-moz-border-radius": cc11001100_hook("-moz-border-radius", "18px", "object-key-init"),
        "-khtml-border-radius": cc11001100_hook("-khtml-border-radius", "18px", "object-key-init"),
        "line-height": cc11001100_hook("line-height", 0, "object-key-init"),
        padding: cc11001100_hook("padding", "8px 0 6px", "object-key-init")
      },
      ".MathJax_MenuClose:hover": {
        color: cc11001100_hook("color", "white!important", "object-key-init"),
        border: cc11001100_hook("border", "2px solid #CCC!important", "object-key-init")
      },
      ".MathJax_MenuClose:hover span": {
        "background-color": cc11001100_hook("background-color", "#CCC!important", "object-key-init")
      },
      ".MathJax_MenuClose:hover:focus": {
        outline: cc11001100_hook("outline", "none", "object-key-init")
      }
    }
  }), "var-init");
  var n, k, b;
  f.Register.StartupHook("MathEvents Ready", function () {
    n = cc11001100_hook("n", MathJax.Extension.MathEvents.Event.False, "assign");
    k = cc11001100_hook("k", MathJax.Extension.MathEvents.Hover, "assign");
    b = cc11001100_hook("b", MathJax.Extension.MathEvents.Event.KEY, "assign");
  });
  var h = cc11001100_hook("h", MathJax.Object.Subclass({
    Keydown: function (u, v) {
      switch (u.keyCode) {
        case b.ESCAPE:
          this.Remove(u, v);
          break;
        case b.RIGHT:
          this.Right(u, v);
          break;
        case b.LEFT:
          this.Left(u, v);
          break;
        case b.UP:
          this.Up(u, v);
          break;
        case b.DOWN:
          this.Down(u, v);
          break;
        case b.RETURN:
        case b.SPACE:
          this.Space(u, v);
          break;
        default:
          return;
          break;
      }
      return n(u);
    },
    Escape: function (u, v) {},
    Right: function (u, v) {},
    Left: function (u, v) {},
    Up: function (u, v) {},
    Down: function (u, v) {},
    Space: function (u, v) {}
  }, {}), "var-init");
  var g = cc11001100_hook("g", MathJax.Menu = cc11001100_hook("MathJax.Menu", h.Subclass({
    version: cc11001100_hook("version", p, "object-key-init"),
    items: cc11001100_hook("items", [], "object-key-init"),
    posted: cc11001100_hook("posted", false, "object-key-init"),
    title: cc11001100_hook("title", null, "object-key-init"),
    margin: cc11001100_hook("margin", 5, "object-key-init"),
    Init: function (u) {
      this.items = cc11001100_hook("this.items", [].slice.call(arguments, 0), "assign");
    },
    With: function (u) {
      if (u) {
        f.Insert(this, u);
      }
      return this;
    },
    Post: function (M, E, B) {
      if (!M) {
        M = cc11001100_hook("M", window.event || {}, "assign");
      }
      var I = cc11001100_hook("I", document.getElementById("MathJax_MenuFrame"), "var-init");
      if (!I) {
        I = cc11001100_hook("I", g.Background(this), "assign");
        delete c.lastItem;
        delete c.lastMenu;
        delete g.skipUp;
        d.Post(["post", g.jax]);
        g.isRTL = cc11001100_hook("g.isRTL", MathJax.Localization.fontDirection() === "rtl", "assign");
      }
      var v = cc11001100_hook("v", o.Element("div", {
        onmouseup: cc11001100_hook("onmouseup", g.Mouseup, "object-key-init"),
        ondblclick: cc11001100_hook("ondblclick", n, "object-key-init"),
        ondragstart: cc11001100_hook("ondragstart", n, "object-key-init"),
        onselectstart: cc11001100_hook("onselectstart", n, "object-key-init"),
        oncontextmenu: cc11001100_hook("oncontextmenu", n, "object-key-init"),
        menuItem: cc11001100_hook("menuItem", this, "object-key-init"),
        className: cc11001100_hook("className", "MathJax_Menu", "object-key-init"),
        onkeydown: cc11001100_hook("onkeydown", g.Keydown, "object-key-init"),
        role: cc11001100_hook("role", "menu", "object-key-init")
      }), "var-init");
      if (M.type === "contextmenu" || M.type === "mouseover") {
        v.className += cc11001100_hook("v.className", " MathJax_ContextMenu", "assign");
      }
      if (!B) {
        MathJax.Localization.setCSS(v);
      }
      for (var N = cc11001100_hook("N", 0, "var-init"), K = cc11001100_hook("K", this.items.length, "var-init"); N < K; N++) {
        this.items[N].Create(v);
      }
      if (g.isMobile) {
        o.addElement(v, "span", {
          className: cc11001100_hook("className", "MathJax_MenuClose", "object-key-init"),
          menu: cc11001100_hook("menu", E, "object-key-init"),
          ontouchstart: cc11001100_hook("ontouchstart", g.Close, "object-key-init"),
          ontouchend: cc11001100_hook("ontouchend", n, "object-key-init"),
          onmousedown: cc11001100_hook("onmousedown", g.Close, "object-key-init"),
          onmouseup: cc11001100_hook("onmouseup", n, "object-key-init")
        }, [["span", {}, "\u00D7"]]);
      }
      I.appendChild(v);
      this.posted = cc11001100_hook("this.posted", true, "assign");
      if (v.offsetWidth) {
        v.style.width = cc11001100_hook("v.style.width", v.offsetWidth + 2 + "px", "assign");
      }
      var H = cc11001100_hook("H", M.pageX, "var-init"),
        F = cc11001100_hook("F", M.pageY, "var-init");
      var u = cc11001100_hook("u", document.body.getBoundingClientRect(), "var-init");
      var C = cc11001100_hook("C", window.getComputedStyle ? window.getComputedStyle(document.body) : {
        marginLeft: cc11001100_hook("marginLeft", "0px", "object-key-init")
      }, "var-init");
      var A = cc11001100_hook("A", u.right - Math.min(0, u.left) + parseFloat(C.marginLeft), "var-init");
      if (!H && !F && "clientX" in M) {
        H = cc11001100_hook("H", M.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, "assign");
        F = cc11001100_hook("F", M.clientY + document.body.scrollTop + document.documentElement.scrollTop, "assign");
      }
      if (!E) {
        var L = cc11001100_hook("L", g.CurrentNode() || M.target, "var-init");
        if ((M.type === "keydown" || !H && !F) && L) {
          var P = cc11001100_hook("P", window.pageXOffset || document.documentElement.scrollLeft, "var-init");
          var O = cc11001100_hook("O", window.pageYOffset || document.documentElement.scrollTop, "var-init");
          var w = cc11001100_hook("w", L.getBoundingClientRect(), "var-init");
          H = cc11001100_hook("H", (w.right + w.left) / 2 + P, "assign");
          F = cc11001100_hook("F", (w.bottom + w.top) / 2 + O, "assign");
        }
        if (H + v.offsetWidth > A - this.margin) {
          H = cc11001100_hook("H", A - v.offsetWidth - this.margin, "assign");
        }
        if (g.isMobile) {
          H = cc11001100_hook("H", Math.max(5, H - Math.floor(v.offsetWidth / 2)), "assign");
          F -= cc11001100_hook("F", 20, "assign");
        }
        g.skipUp = cc11001100_hook("g.skipUp", M.isContextMenu, "assign");
      } else {
        var z = cc11001100_hook("z", "left", "var-init"),
          J = cc11001100_hook("J", E.offsetWidth, "var-init");
        H = cc11001100_hook("H", g.isMobile ? 30 : J - 2, "assign");
        F = cc11001100_hook("F", 0, "assign");
        while (E && E !== I) {
          H += cc11001100_hook("H", E.offsetLeft, "assign");
          F += cc11001100_hook("F", E.offsetTop, "assign");
          E = cc11001100_hook("E", E.parentNode, "assign");
        }
        if (!g.isMobile) {
          if (g.isRTL && H - J - v.offsetWidth > this.margin || !g.isRTL && H + v.offsetWidth > A - this.margin) {
            z = cc11001100_hook("z", "right", "assign");
            H = cc11001100_hook("H", Math.max(this.margin, H - J - v.offsetWidth + 6), "assign");
          }
        }
        if (!a) {
          v.style["borderRadiusTop" + z] = cc11001100_hook("v.style[\"borderRadiusTop\" + z]", 0, "assign");
          v.style["WebkitBorderRadiusTop" + z] = cc11001100_hook("v.style[\"WebkitBorderRadiusTop\" + z]", 0, "assign");
          v.style["MozBorderRadiusTop" + z] = cc11001100_hook("v.style[\"MozBorderRadiusTop\" + z]", 0, "assign");
          v.style["KhtmlBorderRadiusTop" + z] = cc11001100_hook("v.style[\"KhtmlBorderRadiusTop\" + z]", 0, "assign");
        }
      }
      v.style.left = cc11001100_hook("v.style.left", H + "px", "assign");
      v.style.top = cc11001100_hook("v.style.top", F + "px", "assign");
      if (document.selection && document.selection.empty) {
        document.selection.empty();
      }
      var G = cc11001100_hook("G", window.pageXOffset || document.documentElement.scrollLeft, "var-init");
      var D = cc11001100_hook("D", window.pageYOffset || document.documentElement.scrollTop, "var-init");
      g.Focus(v);
      if (M.type === "keydown") {
        g.skipMouseoverFromKey = cc11001100_hook("g.skipMouseoverFromKey", true, "assign");
        setTimeout(function () {
          delete g.skipMouseoverFromKey;
        }, s.delay);
      }
      window.scrollTo(G, D);
      return n(M);
    },
    Remove: function (u, v) {
      d.Post(["unpost", g.jax]);
      var w = cc11001100_hook("w", document.getElementById("MathJax_MenuFrame"), "var-init");
      if (w) {
        w.parentNode.removeChild(w);
        if (this.msieFixedPositionBug) {
          detachEvent("onresize", g.Resize);
        }
      }
      if (g.jax.hover) {
        delete g.jax.hover.nofade;
        k.UnHover(g.jax);
      }
      g.Unfocus(v);
      if (u.type === "mousedown") {
        g.CurrentNode().blur();
      }
      return n(u);
    },
    Find: function (u) {
      return this.FindN(1, u, [].slice.call(arguments, 1));
    },
    FindId: function (u) {
      return this.FindN(0, u, [].slice.call(arguments, 1));
    },
    FindN: function (y, v, x) {
      for (var w = cc11001100_hook("w", 0, "var-init"), u = cc11001100_hook("u", this.items.length, "var-init"); w < u; w++) {
        if (this.items[w].name[y] === v) {
          if (x.length) {
            if (!this.items[w].submenu) {
              return null;
            }
            return this.items[w].submenu.FindN(y, x[0], x.slice(1));
          }
          return this.items[w];
        }
      }
      return null;
    },
    IndexOf: function (u) {
      return this.IndexOfN(1, u);
    },
    IndexOfId: function (u) {
      return this.IndexOfN(0, u);
    },
    IndexOfN: function (x, v) {
      for (var w = cc11001100_hook("w", 0, "var-init"), u = cc11001100_hook("u", this.items.length, "var-init"); w < u; w++) {
        if (this.items[w].name[x] === v) {
          return w;
        }
      }
      return null;
    },
    Right: function (u, v) {
      g.Right(u, v);
    },
    Left: function (u, v) {
      g.Left(u, v);
    },
    Up: function (v, w) {
      var u = cc11001100_hook("u", w.lastChild, "var-init");
      u.menuItem.Activate(v, u);
    },
    Down: function (v, w) {
      var u = cc11001100_hook("u", w.firstChild, "var-init");
      u.menuItem.Activate(v, u);
    },
    Space: function (u, v) {
      this.Remove(u, v);
    }
  }, {
    config: cc11001100_hook("config", s, "object-key-init"),
    Remove: function (u) {
      return g.Event(u, this, "Remove");
    },
    Mouseover: function (u) {
      return g.Event(u, this, "Mouseover");
    },
    Mouseout: function (u) {
      return g.Event(u, this, "Mouseout");
    },
    Mousedown: function (u) {
      return g.Event(u, this, "Mousedown");
    },
    Mouseup: function (u) {
      return g.Event(u, this, "Mouseup");
    },
    Keydown: function (u) {
      return g.Event(u, this, "Keydown");
    },
    Touchstart: function (u) {
      return g.Event(u, this, "Touchstart");
    },
    Touchend: function (u) {
      return g.Event(u, this, "Touchend");
    },
    Close: function (u) {
      return g.Event(u, this.menu || this.parentNode, this.menu ? "Touchend" : "Remove");
    },
    Event: function (w, y, u, x) {
      if (g.skipMouseover && u === "Mouseover" && !x) {
        return n(w);
      }
      if (g.skipMouseoverFromKey && u === "Mouseover") {
        delete g.skipMouseoverFromKey;
        return n(w);
      }
      if (g.skipUp) {
        if (u.match(/Mouseup|Touchend/)) {
          delete g.skipUp;
          return n(w);
        }
        if (u === "Touchstart" || u === "Mousedown" && !g.skipMousedown) {
          delete g.skipUp;
        }
      }
      if (!w) {
        w = cc11001100_hook("w", window.event, "assign");
      }
      var v = cc11001100_hook("v", y.menuItem, "var-init");
      if (v && v[u]) {
        return v[u](w, y);
      }
      return null;
    },
    BGSTYLE: {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      left: cc11001100_hook("left", 0, "object-key-init"),
      top: cc11001100_hook("top", 0, "object-key-init"),
      "z-index": cc11001100_hook("z-index", 200, "object-key-init"),
      width: cc11001100_hook("width", "100%", "object-key-init"),
      height: cc11001100_hook("height", "100%", "object-key-init"),
      border: cc11001100_hook("border", 0, "object-key-init"),
      padding: cc11001100_hook("padding", 0, "object-key-init"),
      margin: cc11001100_hook("margin", 0, "object-key-init")
    },
    Background: function (v) {
      var w = cc11001100_hook("w", o.addElement(document.body, "div", {
        style: cc11001100_hook("style", this.BGSTYLE, "object-key-init"),
        id: cc11001100_hook("id", "MathJax_MenuFrame", "object-key-init")
      }, [["div", {
        style: cc11001100_hook("style", this.BGSTYLE, "object-key-init"),
        menuItem: cc11001100_hook("menuItem", v, "object-key-init"),
        onmousedown: cc11001100_hook("onmousedown", this.Remove, "object-key-init")
      }]]), "var-init");
      var u = cc11001100_hook("u", w.firstChild, "var-init");
      if (g.msieBackgroundBug) {
        u.style.backgroundColor = cc11001100_hook("u.style.backgroundColor", "white", "assign");
        u.style.filter = cc11001100_hook("u.style.filter", "alpha(opacity=0)", "assign");
      }
      if (g.msieFixedPositionBug) {
        w.width = cc11001100_hook("w.width", w.height = cc11001100_hook("w.height", 0, "assign"), "assign");
        this.Resize();
        attachEvent("onresize", this.Resize);
      } else {
        u.style.position = cc11001100_hook("u.style.position", "fixed", "assign");
      }
      return w;
    },
    Resize: function () {
      setTimeout(g.SetWH, 0);
    },
    SetWH: function () {
      var u = cc11001100_hook("u", document.getElementById("MathJax_MenuFrame"), "var-init");
      if (u) {
        u = cc11001100_hook("u", u.firstChild, "assign");
        u.style.width = cc11001100_hook("u.style.width", u.style.height = cc11001100_hook("u.style.height", "1px", "assign"), "assign");
        u.style.width = cc11001100_hook("u.style.width", document.body.scrollWidth + "px", "assign");
        u.style.height = cc11001100_hook("u.style.height", document.body.scrollHeight + "px", "assign");
      }
    },
    posted: cc11001100_hook("posted", false, "object-key-init"),
    active: cc11001100_hook("active", null, "object-key-init"),
    GetNode: function (u) {
      var v = cc11001100_hook("v", document.getElementById(u.inputID + "-Frame"), "var-init");
      return v.isMathJax ? v : v.firstChild;
    },
    CurrentNode: function () {
      return g.GetNode(g.jax);
    },
    AllNodes: function () {
      var v = cc11001100_hook("v", MathJax.Hub.getAllJax(), "var-init");
      var w = cc11001100_hook("w", [], "var-init");
      for (var x = cc11001100_hook("x", 0, "var-init"), u; u = cc11001100_hook("u", v[x], "assign"); x++) {
        w.push(g.GetNode(u));
      }
      return w;
    },
    ActiveNode: function () {
      return g.active;
    },
    FocusNode: function (u) {
      g.active = cc11001100_hook("g.active", u, "assign");
      u.focus();
    },
    Focus: function (u) {
      !g.posted ? g.Activate(u) : g.ActiveNode().tabIndex = cc11001100_hook("g.ActiveNode().tabIndex", -1, "assign");
      u.tabIndex = cc11001100_hook("u.tabIndex", 0, "assign");
      g.FocusNode(u);
    },
    Activate: function (u, v) {
      g.UnsetTabIndex();
      g.posted = cc11001100_hook("g.posted", true, "assign");
    },
    Unfocus: function () {
      g.ActiveNode().tabIndex = cc11001100_hook("g.ActiveNode().tabIndex", -1, "assign");
      g.SetTabIndex();
      g.FocusNode(g.CurrentNode());
      g.posted = cc11001100_hook("g.posted", false, "assign");
    },
    MoveHorizontal: function (y, z, w) {
      if (!y.shiftKey) {
        return;
      }
      var v = cc11001100_hook("v", g.AllNodes(), "var-init");
      var u = cc11001100_hook("u", v.length, "var-init");
      if (u === 0) {
        return;
      }
      var x = cc11001100_hook("x", v[g.Mod(w(g.IndexOf(v, g.CurrentNode())), u)], "var-init");
      if (x === g.CurrentNode()) {
        return;
      }
      g.menu.Remove(y, z);
      g.jax = cc11001100_hook("g.jax", MathJax.Hub.getJaxFor(x), "assign");
      g.FocusNode(x);
      g.menu.Post(null);
    },
    Right: function (u, v) {
      g.MoveHorizontal(u, v, function (w) {
        return w + 1;
      });
    },
    Left: function (u, v) {
      g.MoveHorizontal(u, v, function (w) {
        return w - 1;
      });
    },
    UnsetTabIndex: function () {
      var v = cc11001100_hook("v", g.AllNodes(), "var-init");
      for (var w = cc11001100_hook("w", 0, "var-init"), u; u = cc11001100_hook("u", v[w], "assign"); w++) {
        if (u.tabIndex > 0) {
          u.oldTabIndex = cc11001100_hook("u.oldTabIndex", u.tabIndex, "assign");
        }
        u.tabIndex = cc11001100_hook("u.tabIndex", -1, "assign");
      }
    },
    SetTabIndex: function () {
      var v = cc11001100_hook("v", g.AllNodes(), "var-init");
      for (var w = cc11001100_hook("w", 0, "var-init"), u; u = cc11001100_hook("u", v[w], "assign"); w++) {
        if (u.oldTabIndex !== undefined) {
          u.tabIndex = cc11001100_hook("u.tabIndex", u.oldTabIndex, "assign");
          delete u.oldTabIndex;
        } else {
          u.tabIndex = cc11001100_hook("u.tabIndex", f.getTabOrder(u), "assign");
        }
      }
    },
    Mod: function (u, v) {
      return (u % v + v) % v;
    },
    IndexOf: cc11001100_hook("IndexOf", Array.prototype.indexOf ? function (u, v, w) {
      return u.indexOf(v, w);
    } : function (u, x, y) {
      for (var w = cc11001100_hook("w", y || 0, "var-init"), v = cc11001100_hook("v", u.length, "var-init"); w < v; w++) {
        if (x === u[w]) {
          return w;
        }
      }
      return -1;
    }, "object-key-init"),
    saveCookie: function () {
      o.Cookie.Set("menu", this.cookie);
    },
    getCookie: function () {
      this.cookie = cc11001100_hook("this.cookie", o.Cookie.Get("menu"), "assign");
    }
  }), "assign"), "var-init");
  MathJax.Menu.NAV = cc11001100_hook("MathJax.Menu.NAV", h, "assign");
  var c = cc11001100_hook("c", g.ITEM = cc11001100_hook("g.ITEM", h.Subclass({
    name: cc11001100_hook("name", "", "object-key-init"),
    node: cc11001100_hook("node", null, "object-key-init"),
    menu: cc11001100_hook("menu", null, "object-key-init"),
    Attributes: function (u) {
      return f.Insert({
        onmouseup: cc11001100_hook("onmouseup", g.Mouseup, "object-key-init"),
        ondragstart: cc11001100_hook("ondragstart", n, "object-key-init"),
        onselectstart: cc11001100_hook("onselectstart", n, "object-key-init"),
        onselectend: cc11001100_hook("onselectend", n, "object-key-init"),
        ontouchstart: cc11001100_hook("ontouchstart", g.Touchstart, "object-key-init"),
        ontouchend: cc11001100_hook("ontouchend", g.Touchend, "object-key-init"),
        className: cc11001100_hook("className", "MathJax_MenuItem", "object-key-init"),
        role: cc11001100_hook("role", this.role, "object-key-init"),
        menuItem: cc11001100_hook("menuItem", this, "object-key-init")
      }, u);
    },
    Create: function (w) {
      if (!this.hidden) {
        var v = cc11001100_hook("v", this.Attributes(), "var-init");
        var u = cc11001100_hook("u", this.Label(v, w), "var-init");
        o.addElement(w, "div", v, u);
      }
    },
    Name: function () {
      return t(this.name[0], this.name[1]);
    },
    Mouseover: function (u, v) {
      if (v.parentNode === g.ActiveNode().parentNode) {
        this.Deactivate(g.ActiveNode());
      }
      this.Activate(u, v);
    },
    Mouseout: function (u, v) {
      this.Deactivate(v);
    },
    Mouseup: function (u, v) {
      return this.Remove(u, v);
    },
    DeactivateSubmenus: function (z) {
      var y = cc11001100_hook("y", document.getElementById("MathJax_MenuFrame").childNodes, "var-init"),
        v = cc11001100_hook("v", c.GetMenuNode(z).childNodes, "var-init");
      for (var w = cc11001100_hook("w", 0, "var-init"), u = cc11001100_hook("u", v.length, "var-init"); w < u; w++) {
        var x = cc11001100_hook("x", v[w].menuItem, "var-init");
        if (x && x.submenu && x.submenu.posted && x !== z.menuItem) {
          x.Deactivate(v[w]);
        }
      }
      this.RemoveSubmenus(z, y);
    },
    RemoveSubmenus: function (w, v) {
      v = cc11001100_hook("v", v || document.getElementById("MathJax_MenuFrame").childNodes, "assign");
      var u = cc11001100_hook("u", v.length - 1, "var-init");
      while (u >= 0 && c.GetMenuNode(w).menuItem !== v[u].menuItem) {
        v[u].menuItem.posted = cc11001100_hook("v[u].menuItem.posted", false, "assign");
        v[u].parentNode.removeChild(v[u]);
        u--;
      }
    },
    Touchstart: function (u, v) {
      return this.TouchEvent(u, v, "Mousedown");
    },
    Touchend: function (u, v) {
      return this.TouchEvent(u, v, "Mouseup");
    },
    TouchEvent: function (v, w, u) {
      if (this !== c.lastItem) {
        if (c.lastMenu) {
          g.Event(v, c.lastMenu, "Mouseout");
        }
        g.Event(v, w, "Mouseover", true);
        c.lastItem = cc11001100_hook("c.lastItem", this, "assign");
        c.lastMenu = cc11001100_hook("c.lastMenu", w, "assign");
      }
      if (this.nativeTouch) {
        return null;
      }
      g.Event(v, w, u);
      return false;
    },
    Remove: function (u, v) {
      v = cc11001100_hook("v", v.parentNode.menuItem, "assign");
      return v.Remove(u, v);
    },
    With: function (u) {
      if (u) {
        f.Insert(this, u);
      }
      return this;
    },
    isRTL: function () {
      return g.isRTL;
    },
    rtlClass: function () {
      return this.isRTL() ? " RTL" : "";
    }
  }, {
    GetMenuNode: function (u) {
      return u.parentNode;
    }
  }), "assign"), "var-init");
  g.ENTRY = cc11001100_hook("g.ENTRY", g.ITEM.Subclass({
    role: cc11001100_hook("role", "menuitem", "object-key-init"),
    Attributes: function (u) {
      u = cc11001100_hook("u", f.Insert({
        onmouseover: cc11001100_hook("onmouseover", g.Mouseover, "object-key-init"),
        onmouseout: cc11001100_hook("onmouseout", g.Mouseout, "object-key-init"),
        onmousedown: cc11001100_hook("onmousedown", g.Mousedown, "object-key-init"),
        onkeydown: cc11001100_hook("onkeydown", g.Keydown, "object-key-init"),
        "aria-disabled": cc11001100_hook("aria-disabled", !!this.disabled, "object-key-init")
      }, u), "assign");
      u = cc11001100_hook("u", this.SUPER(arguments).Attributes.call(this, u), "assign");
      if (this.disabled) {
        u.className += cc11001100_hook("u.className", " MathJax_MenuDisabled", "assign");
      }
      return u;
    },
    MoveVertical: function (u, E, w) {
      var x = cc11001100_hook("x", c.GetMenuNode(E), "var-init");
      var D = cc11001100_hook("D", [], "var-init");
      for (var z = cc11001100_hook("z", 0, "var-init"), C = cc11001100_hook("C", x.menuItem.items, "var-init"), y; y = cc11001100_hook("y", C[z], "assign"); z++) {
        if (!y.hidden) {
          D.push(y);
        }
      }
      var B = cc11001100_hook("B", g.IndexOf(D, this), "var-init");
      if (B === -1) {
        return;
      }
      var A = cc11001100_hook("A", D.length, "var-init");
      var v = cc11001100_hook("v", x.childNodes, "var-init");
      do {
        B = cc11001100_hook("B", g.Mod(w(B), A), "assign");
      } while (D[B].hidden || !v[B].role || v[B].role === "separator");
      this.Deactivate(E);
      D[B].Activate(u, v[B]);
    },
    Up: function (v, u) {
      this.MoveVertical(v, u, function (w) {
        return w - 1;
      });
    },
    Down: function (v, u) {
      this.MoveVertical(v, u, function (w) {
        return w + 1;
      });
    },
    Right: function (v, u) {
      this.MoveHorizontal(v, u, g.Right, !this.isRTL());
    },
    Left: function (v, u) {
      this.MoveHorizontal(v, u, g.Left, this.isRTL());
    },
    MoveHorizontal: function (A, z, u, B) {
      var x = cc11001100_hook("x", c.GetMenuNode(z), "var-init");
      if (x.menuItem === g.menu && A.shiftKey) {
        u(A, z);
      }
      if (B) {
        return;
      }
      if (x.menuItem !== g.menu) {
        this.Deactivate(z);
      }
      var v = cc11001100_hook("v", x.previousSibling.childNodes, "var-init");
      var y = cc11001100_hook("y", v.length, "var-init");
      while (y--) {
        var w = cc11001100_hook("w", v[y], "var-init");
        if (w.menuItem.submenu && w.menuItem.submenu === x.menuItem) {
          g.Focus(w);
          break;
        }
      }
      this.RemoveSubmenus(z);
    },
    Space: function (u, v) {
      this.Mouseup(u, v);
    },
    Activate: function (u, v) {
      this.Deactivate(v);
      if (!this.disabled) {
        v.className += cc11001100_hook("v.className", " MathJax_MenuActive", "assign");
      }
      this.DeactivateSubmenus(v);
      g.Focus(v);
    },
    Deactivate: function (u) {
      u.className = cc11001100_hook("u.className", u.className.replace(/ MathJax_MenuActive/, ""), "assign");
    }
  }), "assign");
  g.ITEM.COMMAND = cc11001100_hook("g.ITEM.COMMAND", g.ENTRY.Subclass({
    action: function () {},
    Init: function (u, w, v) {
      if (!i(u)) {
        u = cc11001100_hook("u", [u, u], "assign");
      }
      this.name = cc11001100_hook("this.name", u, "assign");
      this.action = cc11001100_hook("this.action", w, "assign");
      this.With(v);
    },
    Label: function (u, v) {
      return [this.Name()];
    },
    Mouseup: function (u, v) {
      if (!this.disabled) {
        this.Remove(u, v);
        d.Post(["command", this]);
        this.action.call(this, u);
      }
      return n(u);
    }
  }), "assign");
  g.ITEM.SUBMENU = cc11001100_hook("g.ITEM.SUBMENU", g.ENTRY.Subclass({
    submenu: cc11001100_hook("submenu", null, "object-key-init"),
    marker: cc11001100_hook("marker", "\u25BA", "object-key-init"),
    markerRTL: cc11001100_hook("markerRTL", "\u25C4", "object-key-init"),
    Attributes: function (u) {
      u = cc11001100_hook("u", f.Insert({
        "aria-haspopup": cc11001100_hook("aria-haspopup", "true", "object-key-init")
      }, u), "assign");
      u = cc11001100_hook("u", this.SUPER(arguments).Attributes.call(this, u), "assign");
      return u;
    },
    Init: function (u, w) {
      if (!i(u)) {
        u = cc11001100_hook("u", [u, u], "assign");
      }
      this.name = cc11001100_hook("this.name", u, "assign");
      var v = cc11001100_hook("v", 1, "var-init");
      if (!(w instanceof g.ITEM)) {
        this.With(w), v++;
      }
      this.submenu = cc11001100_hook("this.submenu", g.apply(g, [].slice.call(arguments, v)), "assign");
    },
    Label: function (u, v) {
      this.submenu.posted = cc11001100_hook("this.submenu.posted", false, "assign");
      return [this.Name() + " ", ["span", {
        className: cc11001100_hook("className", "MathJax_MenuArrow" + this.rtlClass(), "object-key-init")
      }, [this.isRTL() ? this.markerRTL : this.marker]]];
    },
    Timer: function (u, v) {
      this.ClearTimer();
      u = cc11001100_hook("u", {
        type: cc11001100_hook("type", u.type, "object-key-init"),
        clientX: cc11001100_hook("clientX", u.clientX, "object-key-init"),
        clientY: cc11001100_hook("clientY", u.clientY, "object-key-init")
      }, "assign");
      this.timer = cc11001100_hook("this.timer", setTimeout(e(["Mouseup", this, u, v]), s.delay), "assign");
    },
    ClearTimer: function () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    Touchend: function (v, x) {
      var w = cc11001100_hook("w", this.submenu.posted, "var-init");
      var u = cc11001100_hook("u", this.SUPER(arguments).Touchend.apply(this, arguments), "var-init");
      if (w) {
        this.Deactivate(x);
        delete c.lastItem;
        delete c.lastMenu;
      }
      return u;
    },
    Mouseout: function (u, v) {
      if (!this.submenu.posted) {
        this.Deactivate(v);
      }
      this.ClearTimer();
    },
    Mouseover: function (u, v) {
      this.Activate(u, v);
    },
    Mouseup: function (u, v) {
      if (!this.disabled) {
        if (!this.submenu.posted) {
          this.ClearTimer();
          this.submenu.Post(u, v, this.ltr);
          g.Focus(v);
        } else {
          this.DeactivateSubmenus(v);
        }
      }
      return n(u);
    },
    Activate: function (u, v) {
      if (!this.disabled) {
        this.Deactivate(v);
        v.className += cc11001100_hook("v.className", " MathJax_MenuActive", "assign");
      }
      if (!this.submenu.posted) {
        this.DeactivateSubmenus(v);
        if (!g.isMobile) {
          this.Timer(u, v);
        }
      }
      g.Focus(v);
    },
    MoveVertical: function (w, v, u) {
      this.ClearTimer();
      this.SUPER(arguments).MoveVertical.apply(this, arguments);
    },
    MoveHorizontal: function (w, y, v, x) {
      if (!x) {
        this.SUPER(arguments).MoveHorizontal.apply(this, arguments);
        return;
      }
      if (this.disabled) {
        return;
      }
      if (!this.submenu.posted) {
        this.Activate(w, y);
        return;
      }
      var u = cc11001100_hook("u", c.GetMenuNode(y).nextSibling.childNodes, "var-init");
      if (u.length > 0) {
        this.submenu.items[0].Activate(w, u[0]);
      }
    }
  }), "assign");
  g.ITEM.RADIO = cc11001100_hook("g.ITEM.RADIO", g.ENTRY.Subclass({
    variable: cc11001100_hook("variable", null, "object-key-init"),
    marker: cc11001100_hook("marker", a ? "\u25CF" : "\u2713", "object-key-init"),
    role: cc11001100_hook("role", "menuitemradio", "object-key-init"),
    Attributes: function (v) {
      var u = cc11001100_hook("u", s.settings[this.variable] === this.value ? "true" : "false", "var-init");
      v = cc11001100_hook("v", f.Insert({
        "aria-checked": cc11001100_hook("aria-checked", u, "object-key-init")
      }, v), "assign");
      v = cc11001100_hook("v", this.SUPER(arguments).Attributes.call(this, v), "assign");
      return v;
    },
    Init: function (v, u, w) {
      if (!i(v)) {
        v = cc11001100_hook("v", [v, v], "assign");
      }
      this.name = cc11001100_hook("this.name", v, "assign");
      this.variable = cc11001100_hook("this.variable", u, "assign");
      this.With(w);
      if (this.value == null) {
        this.value = cc11001100_hook("this.value", this.name[0], "assign");
      }
    },
    Label: function (v, w) {
      var u = cc11001100_hook("u", {
        className: cc11001100_hook("className", "MathJax_MenuRadioCheck" + this.rtlClass(), "object-key-init")
      }, "var-init");
      if (s.settings[this.variable] !== this.value) {
        u = cc11001100_hook("u", {
          style: {
            display: cc11001100_hook("display", "none", "object-key-init")
          }
        }, "assign");
      }
      return [["span", u, [this.marker]], " " + this.Name()];
    },
    Mouseup: function (x, y) {
      if (!this.disabled) {
        var z = cc11001100_hook("z", y.parentNode.childNodes, "var-init");
        for (var v = cc11001100_hook("v", 0, "var-init"), u = cc11001100_hook("u", z.length, "var-init"); v < u; v++) {
          var w = cc11001100_hook("w", z[v].menuItem, "var-init");
          if (w && w.variable === this.variable) {
            z[v].firstChild.style.display = cc11001100_hook("z[v].firstChild.style.display", "none", "assign");
          }
        }
        y.firstChild.display = cc11001100_hook("y.firstChild.display", "", "assign");
        s.settings[this.variable] = cc11001100_hook("s.settings[this.variable]", this.value, "assign");
        g.cookie[this.variable] = cc11001100_hook("g.cookie[this.variable]", s.settings[this.variable], "assign");
        g.saveCookie();
        d.Post(["radio button", this]);
      }
      this.Remove(x, y);
      if (this.action && !this.disabled) {
        this.action.call(g, this);
      }
      return n(x);
    }
  }), "assign");
  g.ITEM.CHECKBOX = cc11001100_hook("g.ITEM.CHECKBOX", g.ENTRY.Subclass({
    variable: cc11001100_hook("variable", null, "object-key-init"),
    marker: cc11001100_hook("marker", "\u2713", "object-key-init"),
    role: cc11001100_hook("role", "menuitemcheckbox", "object-key-init"),
    Attributes: function (v) {
      var u = cc11001100_hook("u", s.settings[this.variable] ? "true" : "false", "var-init");
      v = cc11001100_hook("v", f.Insert({
        "aria-checked": cc11001100_hook("aria-checked", u, "object-key-init")
      }, v), "assign");
      v = cc11001100_hook("v", this.SUPER(arguments).Attributes.call(this, v), "assign");
      return v;
    },
    Init: function (v, u, w) {
      if (!i(v)) {
        v = cc11001100_hook("v", [v, v], "assign");
      }
      this.name = cc11001100_hook("this.name", v, "assign");
      this.variable = cc11001100_hook("this.variable", u, "assign");
      this.With(w);
    },
    Label: function (v, w) {
      var u = cc11001100_hook("u", {
        className: cc11001100_hook("className", "MathJax_MenuCheck" + this.rtlClass(), "object-key-init")
      }, "var-init");
      if (!s.settings[this.variable]) {
        u = cc11001100_hook("u", {
          style: {
            display: cc11001100_hook("display", "none", "object-key-init")
          }
        }, "assign");
      }
      return [["span", u, [this.marker]], " " + this.Name()];
    },
    Mouseup: function (u, v) {
      if (!this.disabled) {
        v.firstChild.display = cc11001100_hook("v.firstChild.display", s.settings[this.variable] ? "none" : "", "assign");
        s.settings[this.variable] = cc11001100_hook("s.settings[this.variable]", !s.settings[this.variable], "assign");
        g.cookie[this.variable] = cc11001100_hook("g.cookie[this.variable]", s.settings[this.variable], "assign");
        g.saveCookie();
        d.Post(["checkbox", this]);
      }
      this.Remove(u, v);
      if (this.action && !this.disabled) {
        this.action.call(g, this);
      }
      return n(u);
    }
  }), "assign");
  g.ITEM.LABEL = cc11001100_hook("g.ITEM.LABEL", g.ENTRY.Subclass({
    role: cc11001100_hook("role", "menuitem", "object-key-init"),
    Init: function (u, v) {
      if (!i(u)) {
        u = cc11001100_hook("u", [u, u], "assign");
      }
      this.name = cc11001100_hook("this.name", u, "assign");
      this.With(v);
    },
    Label: function (u, v) {
      u.className += cc11001100_hook("u.className", " MathJax_MenuLabel", "assign");
      return [this.Name()];
    },
    Activate: function (u, v) {
      this.Deactivate(v);
      g.Focus(v);
    },
    Mouseup: function (u, v) {}
  }), "assign");
  g.ITEM.RULE = cc11001100_hook("g.ITEM.RULE", g.ITEM.Subclass({
    role: cc11001100_hook("role", "separator", "object-key-init"),
    Attributes: function (u) {
      u = cc11001100_hook("u", f.Insert({
        "aria-orientation": cc11001100_hook("aria-orientation", "vertical", "object-key-init")
      }, u), "assign");
      u = cc11001100_hook("u", this.SUPER(arguments).Attributes.call(this, u), "assign");
      return u;
    },
    Label: function (u, v) {
      u.className += cc11001100_hook("u.className", " MathJax_MenuRule", "assign");
      return null;
    }
  }), "assign");
  g.About = cc11001100_hook("g.About", function (y) {
    var v = cc11001100_hook("v", g.About.GetFont(), "var-init");
    var A = cc11001100_hook("A", g.About.GetFormat(), "var-init");
    var u = cc11001100_hook("u", ["MathJax.js v" + MathJax.fileversion, ["br"]], "var-init");
    u.push(["div", {
      style: {
        "border-top": cc11001100_hook("border-top", "groove 2px", "object-key-init"),
        margin: cc11001100_hook("margin", ".25em 0", "object-key-init")
      }
    }]);
    g.About.GetJax(u, MathJax.InputJax, ["InputJax", "%1 Input Jax v%2"]);
    g.About.GetJax(u, MathJax.OutputJax, ["OutputJax", "%1 Output Jax v%2"]);
    g.About.GetJax(u, MathJax.ElementJax, ["ElementJax", "%1 Element Jax v%2"]);
    u.push(["div", {
      style: {
        "border-top": cc11001100_hook("border-top", "groove 2px", "object-key-init"),
        margin: cc11001100_hook("margin", ".25em 0", "object-key-init")
      }
    }]);
    g.About.GetJax(u, MathJax.Extension, ["Extension", "%1 Extension v%2"], true);
    u.push(["div", {
      style: {
        "border-top": cc11001100_hook("border-top", "groove 2px", "object-key-init"),
        margin: cc11001100_hook("margin", ".25em 0", "object-key-init")
      }
    }], ["center", {}, [f.Browser + " v" + f.Browser.version + (A ? " \u2014 " + t(A.replace(/ /g, ""), A) : "")]]);
    g.About.div = cc11001100_hook("g.About.div", g.Background(g.About), "assign");
    var x = cc11001100_hook("x", o.addElement(g.About.div, "div", {
      id: cc11001100_hook("id", "MathJax_About", "object-key-init"),
      tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init"),
      onkeydown: cc11001100_hook("onkeydown", g.About.Keydown, "object-key-init")
    }, [["b", {
      style: {
        fontSize: cc11001100_hook("fontSize", "120%", "object-key-init")
      }
    }, ["MathJax"]], " v" + MathJax.version, ["br"], t(v.replace(/ /g, ""), "using " + v), ["br"], ["br"], ["span", {
      style: {
        display: cc11001100_hook("display", "inline-block", "object-key-init"),
        "text-align": cc11001100_hook("text-align", "left", "object-key-init"),
        "font-size": cc11001100_hook("font-size", "80%", "object-key-init"),
        "max-height": cc11001100_hook("max-height", "20em", "object-key-init"),
        overflow: cc11001100_hook("overflow", "auto", "object-key-init"),
        "background-color": cc11001100_hook("background-color", "#E4E4E4", "object-key-init"),
        padding: cc11001100_hook("padding", ".4em .6em", "object-key-init"),
        border: cc11001100_hook("border", "1px inset", "object-key-init")
      },
      tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init")
    }, u], ["br"], ["br"], ["a", {
      href: cc11001100_hook("href", "http://www.mathjax.org/", "object-key-init")
    }, ["www.mathjax.org"]], ["span", {
      className: cc11001100_hook("className", "MathJax_MenuClose", "object-key-init"),
      id: cc11001100_hook("id", "MathJax_AboutClose", "object-key-init"),
      onclick: cc11001100_hook("onclick", g.About.Remove, "object-key-init"),
      onkeydown: cc11001100_hook("onkeydown", g.About.Keydown, "object-key-init"),
      tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init"),
      role: cc11001100_hook("role", "button", "object-key-init"),
      "aria-label": cc11001100_hook("aria-label", t("CloseAboutDialog", "Close about MathJax dialog"), "object-key-init")
    }, [["span", {}, "\u00D7"]]]]), "var-init");
    if (y.type === "mouseup") {
      x.className += cc11001100_hook("x.className", " MathJax_MousePost", "assign");
    }
    x.focus();
    MathJax.Localization.setCSS(x);
    var z = cc11001100_hook("z", document.documentElement || {}, "var-init");
    var w = cc11001100_hook("w", window.innerHeight || z.clientHeight || z.scrollHeight || 0, "var-init");
    if (g.prototype.msieAboutBug) {
      x.style.width = cc11001100_hook("x.style.width", "20em", "assign");
      x.style.position = cc11001100_hook("x.style.position", "absolute", "assign");
      x.style.left = cc11001100_hook("x.style.left", Math.floor((document.documentElement.scrollWidth - x.offsetWidth) / 2) + "px", "assign");
      x.style.top = cc11001100_hook("x.style.top", Math.floor((w - x.offsetHeight) / 3) + document.body.scrollTop + "px", "assign");
    } else {
      x.style.marginLeft = cc11001100_hook("x.style.marginLeft", Math.floor(-x.offsetWidth / 2) + "px", "assign");
      x.style.top = cc11001100_hook("x.style.top", Math.floor((w - x.offsetHeight) / 3) + "px", "assign");
    }
  }, "assign");
  g.About.Remove = cc11001100_hook("g.About.Remove", function (u) {
    if (g.About.div) {
      document.body.removeChild(g.About.div);
      delete g.About.div;
    }
  }, "assign");
  g.About.Keydown = cc11001100_hook("g.About.Keydown", function (u) {
    if (u.keyCode === b.ESCAPE || this.id === "MathJax_AboutClose" && (u.keyCode === b.SPACE || u.keyCode === b.RETURN)) {
      g.About.Remove(u);
      g.CurrentNode().focus();
      n(u);
    }
  }, "assign"), g.About.GetJax = cc11001100_hook("g.About.GetJax", function (v, A, y, x) {
    var z = cc11001100_hook("z", [], "var-init");
    for (var B in A) {
      if (A.hasOwnProperty(B) && A[B]) {
        if (x && A[B].version || A[B].isa && A[B].isa(A)) {
          z.push(t(y[0], y[1], A[B].id || B, A[B].version));
        }
      }
    }
    z.sort();
    for (var w = cc11001100_hook("w", 0, "var-init"), u = cc11001100_hook("u", z.length, "var-init"); w < u; w++) {
      v.push(z[w], ["br"]);
    }
    return v;
  }, "assign");
  g.About.GetFont = cc11001100_hook("g.About.GetFont", function () {
    var u = cc11001100_hook("u", MathJax.Hub.outputJax["jax/mml"][0] || {}, "var-init");
    var v = cc11001100_hook("v", {
      SVG: cc11001100_hook("SVG", "web SVG", "object-key-init"),
      CommonHTML: cc11001100_hook("CommonHTML", "web TeX", "object-key-init"),
      "HTML-CSS": cc11001100_hook("HTML-CSS", u.imgFonts ? "image" : (u.webFonts ? "web" : "local") + " " + u.fontInUse, "object-key-init")
    }[u.id] || "generic", "var-init");
    return v + " fonts";
  }, "assign");
  g.About.GetFormat = cc11001100_hook("g.About.GetFormat", function () {
    var u = cc11001100_hook("u", MathJax.Hub.outputJax["jax/mml"][0] || {}, "var-init");
    if (u.id !== "HTML-CSS" || !u.webFonts || u.imgFonts) {
      return;
    }
    return u.allowWebFonts.replace(/otf/, "woff or otf") + " fonts";
  }, "assign");
  g.Help = cc11001100_hook("g.Help", function (u) {
    q.Require("[MathJax]/extensions/HelpDialog.js", function () {
      MathJax.Extension.Help.Dialog({
        type: cc11001100_hook("type", u.type, "object-key-init")
      });
    });
  }, "assign");
  g.ShowSource = cc11001100_hook("g.ShowSource", function (y) {
    if (!y) {
      y = cc11001100_hook("y", window.event, "assign");
    }
    var x = cc11001100_hook("x", {
      screenX: cc11001100_hook("screenX", y.screenX, "object-key-init"),
      screenY: cc11001100_hook("screenY", y.screenY, "object-key-init")
    }, "var-init");
    if (!g.jax) {
      return;
    }
    if (this.format === "MathML") {
      var v = cc11001100_hook("v", MathJax.ElementJax.mml, "var-init");
      if (v && typeof v.mbase.prototype.toMathML !== "undefined") {
        try {
          g.ShowSource.Text(g.jax.root.toMathML("", g.jax), y);
        } catch (w) {
          if (!w.restart) {
            throw w;
          }
          e.After([this, g.ShowSource, x], w.restart);
        }
      } else {
        if (!q.loadingToMathML) {
          q.loadingToMathML = cc11001100_hook("q.loadingToMathML", true, "assign");
          g.ShowSource.Window(y);
          e.Queue(q.Require("[MathJax]/extensions/toMathML.js"), function () {
            delete q.loadingToMathML;
            if (!v.mbase.prototype.toMathML) {
              v.mbase.prototype.toMathML = cc11001100_hook("v.mbase.prototype.toMathML", function () {}, "assign");
            }
          }, [this, g.ShowSource, x]);
          return;
        }
      }
    } else {
      if (this.format === "Error") {
        g.ShowSource.Text(g.jax.errorText, y);
      } else {
        if (s.semanticsAnnotations[this.format]) {
          var u = cc11001100_hook("u", g.jax.root.getAnnotation(this.format), "var-init");
          if (u.data[0]) {
            g.ShowSource.Text(u.data[0].toString());
          }
        } else {
          if (g.jax.originalText == null) {
            alert(t("NoOriginalForm", "No original form available"));
            return;
          }
          g.ShowSource.Text(g.jax.originalText, y);
        }
      }
    }
  }, "assign");
  g.ShowSource.Window = cc11001100_hook("g.ShowSource.Window", function (v) {
    if (!g.ShowSource.w) {
      var w = cc11001100_hook("w", [], "var-init"),
        u = cc11001100_hook("u", s.windowSettings, "var-init");
      for (var x in u) {
        if (u.hasOwnProperty(x)) {
          w.push(x + "=" + u[x]);
        }
      }
      g.ShowSource.w = cc11001100_hook("g.ShowSource.w", window.open("", "_blank", w.join(",")), "assign");
    }
    return g.ShowSource.w;
  }, "assign");
  g.ShowSource.Text = cc11001100_hook("g.ShowSource.Text", function (z, x) {
    var u = cc11001100_hook("u", g.ShowSource.Window(x), "var-init");
    delete g.ShowSource.w;
    z = cc11001100_hook("z", z.replace(/^\s*/, "").replace(/\s*$/, ""), "assign");
    z = cc11001100_hook("z", z.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "assign");
    var y = cc11001100_hook("y", t("EqSource", "MathJax Equation Source"), "var-init");
    if (g.isMobile) {
      u.document.open();
      u.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>" + y + "</title></head><body style='font-size:85%'>");
      u.document.write("<pre>" + z + "</pre>");
      u.document.write("<hr><input type='button' value='" + t("Close", "Close") + "' onclick='window.close()' />");
      u.document.write("</body></html>");
      u.document.close();
    } else {
      u.document.open();
      u.document.write("<html><head><title>" + y + "</title></head><body style='font-size:85%'>");
      u.document.write("<table><tr><td><pre>" + z + "</pre></td></tr></table>");
      u.document.write("</body></html>");
      u.document.close();
      var v = cc11001100_hook("v", u.document.body.firstChild, "var-init");
      setTimeout(function () {
        var B = cc11001100_hook("B", u.outerHeight - u.innerHeight || 30, "var-init"),
          A = cc11001100_hook("A", u.outerWidth - u.innerWidth || 30, "var-init"),
          w,
          E;
        A = cc11001100_hook("A", Math.max(140, Math.min(Math.floor(0.5 * screen.width), v.offsetWidth + A + 25)), "assign");
        B = cc11001100_hook("B", Math.max(40, Math.min(Math.floor(0.5 * screen.height), v.offsetHeight + B + 25)), "assign");
        if (g.prototype.msieHeightBug) {
          B += cc11001100_hook("B", 35, "assign");
        }
        u.resizeTo(A, B);
        var D;
        try {
          D = cc11001100_hook("D", x.screenX, "assign");
        } catch (C) {}
        if (x && D != null) {
          w = cc11001100_hook("w", Math.max(0, Math.min(x.screenX - Math.floor(A / 2), screen.width - A - 20)), "assign");
          E = cc11001100_hook("E", Math.max(0, Math.min(x.screenY - Math.floor(B / 2), screen.height - B - 20)), "assign");
          u.moveTo(w, E);
        }
      }, 50);
    }
  }, "assign");
  g.Scale = cc11001100_hook("g.Scale", function () {
    var z = cc11001100_hook("z", ["CommonHTML", "HTML-CSS", "SVG", "NativeMML", "PreviewHTML"], "var-init"),
      u = cc11001100_hook("u", z.length, "var-init"),
      y = cc11001100_hook("y", 100, "var-init"),
      w,
      v;
    for (w = cc11001100_hook("w", 0, "assign"); w < u; w++) {
      v = cc11001100_hook("v", r[z[w]], "assign");
      if (v) {
        y = cc11001100_hook("y", v.config.scale, "assign");
        break;
      }
    }
    var x = cc11001100_hook("x", prompt(t("ScaleMath", "Scale all mathematics (compared to surrounding text) by"), y + "%"), "var-init");
    if (x) {
      if (x.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)) {
        x = cc11001100_hook("x", parseFloat(x), "assign");
        if (x) {
          if (x !== y) {
            for (w = cc11001100_hook("w", 0, "assign"); w < u; w++) {
              v = cc11001100_hook("v", r[z[w]], "assign");
              if (v) {
                v.config.scale = cc11001100_hook("v.config.scale", x, "assign");
              }
            }
            g.cookie.scale = cc11001100_hook("g.cookie.scale", f.config.scale = cc11001100_hook("f.config.scale", x, "assign"), "assign");
            g.saveCookie();
            f.Queue(["Rerender", f]);
          }
        } else {
          alert(t("NonZeroScale", "The scale should not be zero"));
        }
      } else {
        alert(t("PercentScale", "The scale should be a percentage (e.g., 120%%)"));
      }
    }
  }, "assign");
  g.Zoom = cc11001100_hook("g.Zoom", function () {
    if (!MathJax.Extension.MathZoom) {
      q.Require("[MathJax]/extensions/MathZoom.js");
    }
  }, "assign");
  g.Renderer = cc11001100_hook("g.Renderer", function () {
    var v = cc11001100_hook("v", f.outputJax["jax/mml"], "var-init");
    if (v[0] !== s.settings.renderer) {
      var y = cc11001100_hook("y", f.Browser, "var-init"),
        x,
        u = cc11001100_hook("u", g.Renderer.Messages, "var-init"),
        w;
      switch (s.settings.renderer) {
        case "NativeMML":
          if (!s.settings.warnedMML) {
            if (y.isChrome && y.version.substr(0, 3) !== "24.") {
              x = cc11001100_hook("x", u.MML.WebKit, "assign");
            } else {
              if (y.isSafari && !y.versionAtLeast("5.0")) {
                x = cc11001100_hook("x", u.MML.WebKit, "assign");
              } else {
                if (y.isMSIE) {
                  if (!y.hasMathPlayer) {
                    x = cc11001100_hook("x", u.MML.MSIE, "assign");
                  }
                } else {
                  if (y.isEdge) {
                    x = cc11001100_hook("x", u.MML.WebKit, "assign");
                  } else {
                    x = cc11001100_hook("x", u.MML[y], "assign");
                  }
                }
              }
            }
            w = cc11001100_hook("w", "warnedMML", "assign");
          }
          break;
        case "SVG":
          if (!s.settings.warnedSVG) {
            if (y.isMSIE && !m) {
              x = cc11001100_hook("x", u.SVG.MSIE, "assign");
            }
          }
          break;
      }
      if (x) {
        x = cc11001100_hook("x", t(x[0], x[1]), "assign");
        x += cc11001100_hook("x", "\n\n", "assign");
        x += cc11001100_hook("x", t("SwitchAnyway", "Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)"), "assign");
        g.cookie.renderer = cc11001100_hook("g.cookie.renderer", v[0].id, "assign");
        g.saveCookie();
        if (!confirm(x)) {
          g.cookie.renderer = cc11001100_hook("g.cookie.renderer", s.settings.renderer = cc11001100_hook("s.settings.renderer", o.Cookie.Get("menu").renderer, "assign"), "assign");
          g.saveCookie();
          return;
        }
        if (w) {
          g.cookie.warned = cc11001100_hook("g.cookie.warned", s.settings.warned = cc11001100_hook("s.settings.warned", true, "assign"), "assign");
        }
        g.cookie.renderer = cc11001100_hook("g.cookie.renderer", s.settings.renderer, "assign");
        g.saveCookie();
      }
      f.Queue(["setRenderer", f, s.settings.renderer, "jax/mml"], ["Rerender", f]);
    }
  }, "assign");
  g.Renderer.Messages = cc11001100_hook("g.Renderer.Messages", {
    MML: {
      WebKit: cc11001100_hook("WebKit", ["WebkitNativeMMLWarning", "Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable."], "object-key-init"),
      MSIE: cc11001100_hook("MSIE", ["MSIENativeMMLWarning", "Internet Explorer requires the MathPlayer plugin in order to process MathML output."], "object-key-init"),
      Opera: cc11001100_hook("Opera", ["OperaNativeMMLWarning", "Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly."], "object-key-init"),
      Safari: cc11001100_hook("Safari", ["SafariNativeMMLWarning", "Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."], "object-key-init"),
      Firefox: cc11001100_hook("Firefox", ["FirefoxNativeMMLWarning", "Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."], "object-key-init")
    },
    SVG: {
      MSIE: cc11001100_hook("MSIE", ["MSIESVGWarning", "SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly."], "object-key-init")
    }
  }, "assign");
  g.AssistiveMML = cc11001100_hook("g.AssistiveMML", function (w, u) {
    var v = cc11001100_hook("v", MathJax.Extension.AssistiveMML, "var-init");
    if (!v) {
      if (!u) {
        q.Require("[MathJax]/extensions/AssistiveMML.js", ["AssistiveMML", g, w, true]);
      }
      return;
    }
    MathJax.Hub.Queue([(s.settings.assistiveMML ? "Add" : "Remove") + "AssistiveMathML", v]);
  }, "assign");
  g.Font = cc11001100_hook("g.Font", function () {
    var u = cc11001100_hook("u", r["HTML-CSS"], "var-init");
    if (!u) {
      return;
    }
    document.location.reload();
  }, "assign");
  g.Locale = cc11001100_hook("g.Locale", function () {
    MathJax.Localization.setLocale(s.settings.locale);
    MathJax.Hub.Queue(["Reprocess", MathJax.Hub]);
  }, "assign");
  g.LoadLocale = cc11001100_hook("g.LoadLocale", function () {
    var u = cc11001100_hook("u", prompt(t("LoadURL", "Load translation data from this URL:")), "var-init");
    if (u) {
      if (!u.match(/\.js$/)) {
        alert(t("BadURL", "The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'"));
      }
      q.Require(u, function (v) {
        if (v != q.STATUS.OK) {
          alert(t("BadData", "Failed to load translation data from %1", u));
        }
      });
    }
  }, "assign");
  g.MPEvents = cc11001100_hook("g.MPEvents", function (w) {
    var v = cc11001100_hook("v", s.settings.discoverable, "var-init"),
      u = cc11001100_hook("u", g.MPEvents.Messages, "var-init");
    if (!m) {
      if (s.settings.mpMouse && !confirm(t.apply(t, u.IE8warning))) {
        delete g.cookie.mpContext;
        delete s.settings.mpContext;
        delete g.cookie.mpMouse;
        delete s.settings.mpMouse;
        g.saveCookie();
        return;
      }
      s.settings.mpContext = cc11001100_hook("s.settings.mpContext", s.settings.mpMouse, "assign");
      g.cookie.mpContext = cc11001100_hook("g.cookie.mpContext", g.cookie.mpMouse = cc11001100_hook("g.cookie.mpMouse", s.settings.mpMouse, "assign"), "assign");
      g.saveCookie();
      MathJax.Hub.Queue(["Rerender", MathJax.Hub]);
    } else {
      if (!v && w.name[1] === "Menu Events" && s.settings.mpContext) {
        alert(t.apply(t, u.IE9warning));
      }
    }
  }, "assign");
  g.MPEvents.Messages = cc11001100_hook("g.MPEvents.Messages", {
    IE8warning: cc11001100_hook("IE8warning", ["IE8warning", "This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?"], "object-key-init"),
    IE9warning: cc11001100_hook("IE9warning", ["IE9warning", "The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead."], "object-key-init")
  }, "assign");
  f.Browser.Select({
    MSIE: function (u) {
      var v = cc11001100_hook("v", document.compatMode === "BackCompat", "var-init");
      var w = cc11001100_hook("w", u.versionAtLeast("8.0") && document.documentMode > 7, "var-init");
      g.Augment({
        margin: cc11001100_hook("margin", 20, "object-key-init"),
        msieBackgroundBug: cc11001100_hook("msieBackgroundBug", (document.documentMode || 0) < 9, "object-key-init"),
        msieFixedPositionBug: cc11001100_hook("msieFixedPositionBug", v || !w, "object-key-init"),
        msieAboutBug: cc11001100_hook("msieAboutBug", v, "object-key-init"),
        msieHeightBug: cc11001100_hook("msieHeightBug", (document.documentMode || 0) < 9, "object-key-init")
      });
      if (m) {
        delete s.styles["#MathJax_About"].filter;
        delete s.styles[".MathJax_Menu"].filter;
      }
    },
    Firefox: function (u) {
      g.skipMouseover = cc11001100_hook("g.skipMouseover", u.isMobile && u.versionAtLeast("6.0"), "assign");
      g.skipMousedown = cc11001100_hook("g.skipMousedown", u.isMobile, "assign");
    }
  });
  g.isMobile = cc11001100_hook("g.isMobile", f.Browser.isMobile, "assign");
  g.noContextMenu = cc11001100_hook("g.noContextMenu", f.Browser.noContextMenu, "assign");
  g.CreateLocaleMenu = cc11001100_hook("g.CreateLocaleMenu", function () {
    if (!g.menu) {
      return;
    }
    var z = cc11001100_hook("z", g.menu.Find("Language").submenu, "var-init"),
      w = cc11001100_hook("w", z.items, "var-init");
    var v = cc11001100_hook("v", [], "var-init"),
      B = cc11001100_hook("B", MathJax.Localization.strings, "var-init");
    for (var A in B) {
      if (B.hasOwnProperty(A)) {
        v.push(A);
      }
    }
    v = cc11001100_hook("v", v.sort(), "assign");
    z.items = cc11001100_hook("z.items", [], "assign");
    for (var x = cc11001100_hook("x", 0, "var-init"), u = cc11001100_hook("u", v.length, "var-init"); x < u; x++) {
      var y = cc11001100_hook("y", B[v[x]].menuTitle, "var-init");
      if (y) {
        y += cc11001100_hook("y", " (" + v[x] + ")", "assign");
      } else {
        y = cc11001100_hook("y", v[x], "assign");
      }
      z.items.push(c.RADIO([v[x], y], "locale", {
        action: cc11001100_hook("action", g.Locale, "object-key-init")
      }));
    }
    z.items.push(w[w.length - 2], w[w.length - 1]);
  }, "assign");
  g.CreateAnnotationMenu = cc11001100_hook("g.CreateAnnotationMenu", function () {
    if (!g.menu) {
      return;
    }
    var w = cc11001100_hook("w", g.menu.Find("Show Math As", "Annotation").submenu, "var-init");
    var v = cc11001100_hook("v", s.semanticsAnnotations, "var-init");
    for (var u in v) {
      if (v.hasOwnProperty(u)) {
        w.items.push(c.COMMAND([u, u], g.ShowSource, {
          hidden: cc11001100_hook("hidden", true, "object-key-init"),
          nativeTouch: cc11001100_hook("nativeTouch", true, "object-key-init"),
          format: cc11001100_hook("format", u, "object-key-init")
        }));
      }
    }
  }, "assign");
  f.Register.StartupHook("End Config", function () {
    s.settings = cc11001100_hook("s.settings", f.config.menuSettings, "assign");
    if (typeof s.settings.showRenderer !== "undefined") {
      s.showRenderer = cc11001100_hook("s.showRenderer", s.settings.showRenderer, "assign");
    }
    if (typeof s.settings.showFontMenu !== "undefined") {
      s.showFontMenu = cc11001100_hook("s.showFontMenu", s.settings.showFontMenu, "assign");
    }
    if (typeof s.settings.showContext !== "undefined") {
      s.showContext = cc11001100_hook("s.showContext", s.settings.showContext, "assign");
    }
    g.getCookie();
    g.menu = cc11001100_hook("g.menu", g(c.SUBMENU(["Show", "Show Math As"], c.COMMAND(["MathMLcode", "MathML Code"], g.ShowSource, {
      nativeTouch: cc11001100_hook("nativeTouch", true, "object-key-init"),
      format: cc11001100_hook("format", "MathML", "object-key-init")
    }), c.COMMAND(["Original", "Original Form"], g.ShowSource, {
      nativeTouch: cc11001100_hook("nativeTouch", true, "object-key-init")
    }), c.SUBMENU(["Annotation", "Annotation"], {
      disabled: cc11001100_hook("disabled", true, "object-key-init")
    }), c.RULE(), c.CHECKBOX(["texHints", "Show TeX hints in MathML"], "texHints"), c.CHECKBOX(["semantics", "Add original form as annotation"], "semantics")), c.RULE(), c.SUBMENU(["Settings", "Math Settings"], c.SUBMENU(["ZoomTrigger", "Zoom Trigger"], c.RADIO(["Hover", "Hover"], "zoom", {
      action: cc11001100_hook("action", g.Zoom, "object-key-init")
    }), c.RADIO(["Click", "Click"], "zoom", {
      action: cc11001100_hook("action", g.Zoom, "object-key-init")
    }), c.RADIO(["DoubleClick", "Double-Click"], "zoom", {
      action: cc11001100_hook("action", g.Zoom, "object-key-init")
    }), c.RADIO(["NoZoom", "No Zoom"], "zoom", {
      value: cc11001100_hook("value", "None", "object-key-init")
    }), c.RULE(), c.LABEL(["TriggerRequires", "Trigger Requires:"]), c.CHECKBOX(f.Browser.isMac ? ["Option", "Option"] : ["Alt", "Alt"], "ALT"), c.CHECKBOX(["Command", "Command"], "CMD", {
      hidden: cc11001100_hook("hidden", !f.Browser.isMac, "object-key-init")
    }), c.CHECKBOX(["Control", "Control"], "CTRL", {
      hidden: cc11001100_hook("hidden", f.Browser.isMac, "object-key-init")
    }), c.CHECKBOX(["Shift", "Shift"], "Shift")), c.SUBMENU(["ZoomFactor", "Zoom Factor"], c.RADIO("125%", "zscale"), c.RADIO("133%", "zscale"), c.RADIO("150%", "zscale"), c.RADIO("175%", "zscale"), c.RADIO("200%", "zscale"), c.RADIO("250%", "zscale"), c.RADIO("300%", "zscale"), c.RADIO("400%", "zscale")), c.RULE(), c.SUBMENU(["Renderer", "Math Renderer"], {
      hidden: cc11001100_hook("hidden", !s.showRenderer, "object-key-init")
    }, c.RADIO(["HTML-CSS", "HTML-CSS"], "renderer", {
      action: cc11001100_hook("action", g.Renderer, "object-key-init")
    }), c.RADIO(["CommonHTML", "Common HTML"], "renderer", {
      action: cc11001100_hook("action", g.Renderer, "object-key-init"),
      value: cc11001100_hook("value", "CommonHTML", "object-key-init")
    }), c.RADIO(["PreviewHTML", "Preview HTML"], "renderer", {
      action: cc11001100_hook("action", g.Renderer, "object-key-init"),
      value: cc11001100_hook("value", "PreviewHTML", "object-key-init")
    }), c.RADIO(["MathML", "MathML"], "renderer", {
      action: cc11001100_hook("action", g.Renderer, "object-key-init"),
      value: cc11001100_hook("value", "NativeMML", "object-key-init")
    }), c.RADIO(["SVG", "SVG"], "renderer", {
      action: cc11001100_hook("action", g.Renderer, "object-key-init")
    }), c.RADIO(["PlainSource", "Plain Source"], "renderer", {
      action: cc11001100_hook("action", g.Renderer, "object-key-init"),
      value: cc11001100_hook("value", "PlainSource", "object-key-init")
    }), c.RULE(), c.CHECKBOX(["FastPreview", "Fast Preview"], "FastPreview")), c.SUBMENU("MathPlayer", {
      hidden: cc11001100_hook("hidden", !f.Browser.isMSIE || !s.showMathPlayer, "object-key-init"),
      disabled: cc11001100_hook("disabled", !f.Browser.hasMathPlayer, "object-key-init")
    }, c.LABEL(["MPHandles", "Let MathPlayer Handle:"]), c.CHECKBOX(["MenuEvents", "Menu Events"], "mpContext", {
      action: cc11001100_hook("action", g.MPEvents, "object-key-init"),
      hidden: cc11001100_hook("hidden", !m, "object-key-init")
    }), c.CHECKBOX(["MouseEvents", "Mouse Events"], "mpMouse", {
      action: cc11001100_hook("action", g.MPEvents, "object-key-init"),
      hidden: cc11001100_hook("hidden", !m, "object-key-init")
    }), c.CHECKBOX(["MenuAndMouse", "Mouse and Menu Events"], "mpMouse", {
      action: cc11001100_hook("action", g.MPEvents, "object-key-init"),
      hidden: cc11001100_hook("hidden", m, "object-key-init")
    })), c.SUBMENU(["FontPrefs", "Font Preference"], {
      hidden: cc11001100_hook("hidden", !s.showFontMenu, "object-key-init")
    }, c.LABEL(["ForHTMLCSS", "For HTML-CSS:"]), c.RADIO(["Auto", "Auto"], "font", {
      action: cc11001100_hook("action", g.Font, "object-key-init")
    }), c.RULE(), c.RADIO(["TeXLocal", "TeX (local)"], "font", {
      action: cc11001100_hook("action", g.Font, "object-key-init")
    }), c.RADIO(["TeXWeb", "TeX (web)"], "font", {
      action: cc11001100_hook("action", g.Font, "object-key-init")
    }), c.RADIO(["TeXImage", "TeX (image)"], "font", {
      action: cc11001100_hook("action", g.Font, "object-key-init")
    }), c.RULE(), c.RADIO(["STIXLocal", "STIX (local)"], "font", {
      action: cc11001100_hook("action", g.Font, "object-key-init")
    }), c.RADIO(["STIXWeb", "STIX (web)"], "font", {
      action: cc11001100_hook("action", g.Font, "object-key-init")
    }), c.RULE(), c.RADIO(["AsanaMathWeb", "Asana Math (web)"], "font", {
      action: cc11001100_hook("action", g.Font, "object-key-init")
    }), c.RADIO(["GyrePagellaWeb", "Gyre Pagella (web)"], "font", {
      action: cc11001100_hook("action", g.Font, "object-key-init")
    }), c.RADIO(["GyreTermesWeb", "Gyre Termes (web)"], "font", {
      action: cc11001100_hook("action", g.Font, "object-key-init")
    }), c.RADIO(["LatinModernWeb", "Latin Modern (web)"], "font", {
      action: cc11001100_hook("action", g.Font, "object-key-init")
    }), c.RADIO(["NeoEulerWeb", "Neo Euler (web)"], "font", {
      action: cc11001100_hook("action", g.Font, "object-key-init")
    })), c.SUBMENU(["ContextMenu", "Contextual Menu"], {
      hidden: cc11001100_hook("hidden", !s.showContext, "object-key-init")
    }, c.RADIO(["MathJax", "MathJax"], "context"), c.RADIO(["Browser", "Browser"], "context")), c.COMMAND(["Scale", "Scale All Math ..."], g.Scale), c.RULE().With({
      hidden: cc11001100_hook("hidden", !s.showDiscoverable, "object-key-init"),
      name: cc11001100_hook("name", ["", "discover_rule"], "object-key-init")
    }), c.CHECKBOX(["Discoverable", "Highlight on Hover"], "discoverable", {
      hidden: cc11001100_hook("hidden", !s.showDiscoverable, "object-key-init")
    })), c.SUBMENU(["Accessibility", "Accessibility"], c.CHECKBOX(["AssistiveMML", "Assistive MathML"], "assistiveMML", {
      action: cc11001100_hook("action", g.AssistiveMML, "object-key-init")
    }), c.CHECKBOX(["InTabOrder", "Include in Tab Order"], "inTabOrder")), c.SUBMENU(["Locale", "Language"], {
      hidden: cc11001100_hook("hidden", !s.showLocale, "object-key-init"),
      ltr: cc11001100_hook("ltr", true, "object-key-init")
    }, c.RADIO("en", "locale", {
      action: cc11001100_hook("action", g.Locale, "object-key-init")
    }), c.RULE().With({
      hidden: cc11001100_hook("hidden", !s.showLocaleURL, "object-key-init"),
      name: cc11001100_hook("name", ["", "localURL_rule"], "object-key-init")
    }), c.COMMAND(["LoadLocale", "Load from URL ..."], g.LoadLocale, {
      hidden: cc11001100_hook("hidden", !s.showLocaleURL, "object-key-init")
    })), c.RULE(), c.COMMAND(["About", "About MathJax"], g.About), c.COMMAND(["Help", "MathJax Help"], g.Help)), "assign");
    if (g.isMobile) {
      (function () {
        var v = cc11001100_hook("v", s.settings, "var-init");
        var u = cc11001100_hook("u", g.menu.Find("Math Settings", "Zoom Trigger").submenu, "var-init");
        u.items[0].disabled = cc11001100_hook("u.items[0].disabled", u.items[1].disabled = cc11001100_hook("u.items[1].disabled", true, "assign"), "assign");
        if (v.zoom === "Hover" || v.zoom == "Click") {
          v.zoom = cc11001100_hook("v.zoom", "None", "assign");
        }
        u.items = cc11001100_hook("u.items", u.items.slice(0, 4), "assign");
        if (navigator.appVersion.match(/[ (]Android[) ]/)) {
          g.ITEM.SUBMENU.Augment({
            marker: cc11001100_hook("marker", "\u00BB", "object-key-init")
          });
        }
      })();
    }
    g.CreateLocaleMenu();
    g.CreateAnnotationMenu();
  });
  g.showRenderer = cc11001100_hook("g.showRenderer", function (u) {
    g.cookie.showRenderer = cc11001100_hook("g.cookie.showRenderer", s.showRenderer = cc11001100_hook("s.showRenderer", u, "assign"), "assign");
    g.saveCookie();
    g.menu.Find("Math Settings", "Math Renderer").hidden = cc11001100_hook("g.menu.Find(\"Math Settings\", \"Math Renderer\").hidden", !u, "assign");
  }, "assign");
  g.showMathPlayer = cc11001100_hook("g.showMathPlayer", function (u) {
    g.cookie.showMathPlayer = cc11001100_hook("g.cookie.showMathPlayer", s.showMathPlayer = cc11001100_hook("s.showMathPlayer", u, "assign"), "assign");
    g.saveCookie();
    g.menu.Find("Math Settings", "MathPlayer").hidden = cc11001100_hook("g.menu.Find(\"Math Settings\", \"MathPlayer\").hidden", !u, "assign");
  }, "assign");
  g.showFontMenu = cc11001100_hook("g.showFontMenu", function (u) {
    g.cookie.showFontMenu = cc11001100_hook("g.cookie.showFontMenu", s.showFontMenu = cc11001100_hook("s.showFontMenu", u, "assign"), "assign");
    g.saveCookie();
    g.menu.Find("Math Settings", "Font Preference").hidden = cc11001100_hook("g.menu.Find(\"Math Settings\", \"Font Preference\").hidden", !u, "assign");
  }, "assign");
  g.showContext = cc11001100_hook("g.showContext", function (u) {
    g.cookie.showContext = cc11001100_hook("g.cookie.showContext", s.showContext = cc11001100_hook("s.showContext", u, "assign"), "assign");
    g.saveCookie();
    g.menu.Find("Math Settings", "Contextual Menu").hidden = cc11001100_hook("g.menu.Find(\"Math Settings\", \"Contextual Menu\").hidden", !u, "assign");
  }, "assign");
  g.showDiscoverable = cc11001100_hook("g.showDiscoverable", function (u) {
    g.cookie.showDiscoverable = cc11001100_hook("g.cookie.showDiscoverable", s.showDiscoverable = cc11001100_hook("s.showDiscoverable", u, "assign"), "assign");
    g.saveCookie();
    g.menu.Find("Math Settings", "Highlight on Hover").hidden = cc11001100_hook("g.menu.Find(\"Math Settings\", \"Highlight on Hover\").hidden", !u, "assign");
    g.menu.Find("Math Settings", "discover_rule").hidden = cc11001100_hook("g.menu.Find(\"Math Settings\", \"discover_rule\").hidden", !u, "assign");
  }, "assign");
  g.showLocale = cc11001100_hook("g.showLocale", function (u) {
    g.cookie.showLocale = cc11001100_hook("g.cookie.showLocale", s.showLocale = cc11001100_hook("s.showLocale", u, "assign"), "assign");
    g.saveCookie();
    g.menu.Find("Language").hidden = cc11001100_hook("g.menu.Find(\"Language\").hidden", !u, "assign");
  }, "assign");
  MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready", function () {
    if (!MathJax.OutputJax["HTML-CSS"].config.imageFont) {
      g.menu.Find("Math Settings", "Font Preference", "TeX (image)").disabled = cc11001100_hook("g.menu.Find(\"Math Settings\", \"Font Preference\", \"TeX (image)\").disabled", true, "assign");
    }
  });
  e.Queue(f.Register.StartupHook("End Config", {}), ["Styles", q, s.styles], ["Post", f.Startup.signal, "MathMenu Ready"], ["loadComplete", q, "[MathJax]/extensions/MathMenu.js"]);
})(MathJax.Hub, MathJax.HTML, MathJax.Ajax, MathJax.CallBack, MathJax.OutputJax);
MathJax.ElementJax.mml = cc11001100_hook("MathJax.ElementJax.mml", MathJax.ElementJax({
  mimeType: cc11001100_hook("mimeType", "jax/mml", "object-key-init")
}, {
  id: cc11001100_hook("id", "mml", "object-key-init"),
  version: cc11001100_hook("version", "2.7.2", "object-key-init"),
  directory: cc11001100_hook("directory", MathJax.ElementJax.directory + "/mml", "object-key-init"),
  extensionDir: cc11001100_hook("extensionDir", MathJax.ElementJax.extensionDir + "/mml", "object-key-init"),
  optableDir: cc11001100_hook("optableDir", MathJax.ElementJax.directory + "/mml/optable", "object-key-init")
}), "assign");
MathJax.ElementJax.mml.Augment({
  Init: function () {
    if (arguments.length === 1 && arguments[0].type === "math") {
      this.root = cc11001100_hook("this.root", arguments[0], "assign");
    } else {
      this.root = cc11001100_hook("this.root", MathJax.ElementJax.mml.math.apply(this, arguments), "assign");
    }
    if (this.root.attr && this.root.attr.mode) {
      if (!this.root.display && this.root.attr.mode === "display") {
        this.root.display = cc11001100_hook("this.root.display", "block", "assign");
        this.root.attrNames.push("display");
      }
      delete this.root.attr.mode;
      for (var b = cc11001100_hook("b", 0, "var-init"), a = cc11001100_hook("a", this.root.attrNames.length, "var-init"); b < a; b++) {
        if (this.root.attrNames[b] === "mode") {
          this.root.attrNames.splice(b, 1);
          break;
        }
      }
    }
  }
}, {
  INHERIT: cc11001100_hook("INHERIT", "_inherit_", "object-key-init"),
  AUTO: cc11001100_hook("AUTO", "_auto_", "object-key-init"),
  SIZE: {
    INFINITY: cc11001100_hook("INFINITY", "infinity", "object-key-init"),
    SMALL: cc11001100_hook("SMALL", "small", "object-key-init"),
    NORMAL: cc11001100_hook("NORMAL", "normal", "object-key-init"),
    BIG: cc11001100_hook("BIG", "big", "object-key-init")
  },
  COLOR: {
    TRANSPARENT: cc11001100_hook("TRANSPARENT", "transparent", "object-key-init")
  },
  VARIANT: {
    NORMAL: cc11001100_hook("NORMAL", "normal", "object-key-init"),
    BOLD: cc11001100_hook("BOLD", "bold", "object-key-init"),
    ITALIC: cc11001100_hook("ITALIC", "italic", "object-key-init"),
    BOLDITALIC: cc11001100_hook("BOLDITALIC", "bold-italic", "object-key-init"),
    DOUBLESTRUCK: cc11001100_hook("DOUBLESTRUCK", "double-struck", "object-key-init"),
    FRAKTUR: cc11001100_hook("FRAKTUR", "fraktur", "object-key-init"),
    BOLDFRAKTUR: cc11001100_hook("BOLDFRAKTUR", "bold-fraktur", "object-key-init"),
    SCRIPT: cc11001100_hook("SCRIPT", "script", "object-key-init"),
    BOLDSCRIPT: cc11001100_hook("BOLDSCRIPT", "bold-script", "object-key-init"),
    SANSSERIF: cc11001100_hook("SANSSERIF", "sans-serif", "object-key-init"),
    BOLDSANSSERIF: cc11001100_hook("BOLDSANSSERIF", "bold-sans-serif", "object-key-init"),
    SANSSERIFITALIC: cc11001100_hook("SANSSERIFITALIC", "sans-serif-italic", "object-key-init"),
    SANSSERIFBOLDITALIC: cc11001100_hook("SANSSERIFBOLDITALIC", "sans-serif-bold-italic", "object-key-init"),
    MONOSPACE: cc11001100_hook("MONOSPACE", "monospace", "object-key-init"),
    INITIAL: cc11001100_hook("INITIAL", "inital", "object-key-init"),
    TAILED: cc11001100_hook("TAILED", "tailed", "object-key-init"),
    LOOPED: cc11001100_hook("LOOPED", "looped", "object-key-init"),
    STRETCHED: cc11001100_hook("STRETCHED", "stretched", "object-key-init"),
    CALIGRAPHIC: cc11001100_hook("CALIGRAPHIC", "-tex-caligraphic", "object-key-init"),
    OLDSTYLE: cc11001100_hook("OLDSTYLE", "-tex-oldstyle", "object-key-init")
  },
  FORM: {
    PREFIX: cc11001100_hook("PREFIX", "prefix", "object-key-init"),
    INFIX: cc11001100_hook("INFIX", "infix", "object-key-init"),
    POSTFIX: cc11001100_hook("POSTFIX", "postfix", "object-key-init")
  },
  LINEBREAK: {
    AUTO: cc11001100_hook("AUTO", "auto", "object-key-init"),
    NEWLINE: cc11001100_hook("NEWLINE", "newline", "object-key-init"),
    NOBREAK: cc11001100_hook("NOBREAK", "nobreak", "object-key-init"),
    GOODBREAK: cc11001100_hook("GOODBREAK", "goodbreak", "object-key-init"),
    BADBREAK: cc11001100_hook("BADBREAK", "badbreak", "object-key-init")
  },
  LINEBREAKSTYLE: {
    BEFORE: cc11001100_hook("BEFORE", "before", "object-key-init"),
    AFTER: cc11001100_hook("AFTER", "after", "object-key-init"),
    DUPLICATE: cc11001100_hook("DUPLICATE", "duplicate", "object-key-init"),
    INFIXLINBREAKSTYLE: cc11001100_hook("INFIXLINBREAKSTYLE", "infixlinebreakstyle", "object-key-init")
  },
  INDENTALIGN: {
    LEFT: cc11001100_hook("LEFT", "left", "object-key-init"),
    CENTER: cc11001100_hook("CENTER", "center", "object-key-init"),
    RIGHT: cc11001100_hook("RIGHT", "right", "object-key-init"),
    AUTO: cc11001100_hook("AUTO", "auto", "object-key-init"),
    ID: cc11001100_hook("ID", "id", "object-key-init"),
    INDENTALIGN: cc11001100_hook("INDENTALIGN", "indentalign", "object-key-init")
  },
  INDENTSHIFT: {
    INDENTSHIFT: cc11001100_hook("INDENTSHIFT", "indentshift", "object-key-init")
  },
  LINETHICKNESS: {
    THIN: cc11001100_hook("THIN", "thin", "object-key-init"),
    MEDIUM: cc11001100_hook("MEDIUM", "medium", "object-key-init"),
    THICK: cc11001100_hook("THICK", "thick", "object-key-init")
  },
  NOTATION: {
    LONGDIV: cc11001100_hook("LONGDIV", "longdiv", "object-key-init"),
    ACTUARIAL: cc11001100_hook("ACTUARIAL", "actuarial", "object-key-init"),
    RADICAL: cc11001100_hook("RADICAL", "radical", "object-key-init"),
    BOX: cc11001100_hook("BOX", "box", "object-key-init"),
    ROUNDEDBOX: cc11001100_hook("ROUNDEDBOX", "roundedbox", "object-key-init"),
    CIRCLE: cc11001100_hook("CIRCLE", "circle", "object-key-init"),
    LEFT: cc11001100_hook("LEFT", "left", "object-key-init"),
    RIGHT: cc11001100_hook("RIGHT", "right", "object-key-init"),
    TOP: cc11001100_hook("TOP", "top", "object-key-init"),
    BOTTOM: cc11001100_hook("BOTTOM", "bottom", "object-key-init"),
    UPDIAGONALSTRIKE: cc11001100_hook("UPDIAGONALSTRIKE", "updiagonalstrike", "object-key-init"),
    DOWNDIAGONALSTRIKE: cc11001100_hook("DOWNDIAGONALSTRIKE", "downdiagonalstrike", "object-key-init"),
    UPDIAGONALARROW: cc11001100_hook("UPDIAGONALARROW", "updiagonalarrow", "object-key-init"),
    VERTICALSTRIKE: cc11001100_hook("VERTICALSTRIKE", "verticalstrike", "object-key-init"),
    HORIZONTALSTRIKE: cc11001100_hook("HORIZONTALSTRIKE", "horizontalstrike", "object-key-init"),
    PHASORANGLE: cc11001100_hook("PHASORANGLE", "phasorangle", "object-key-init"),
    MADRUWB: cc11001100_hook("MADRUWB", "madruwb", "object-key-init")
  },
  ALIGN: {
    TOP: cc11001100_hook("TOP", "top", "object-key-init"),
    BOTTOM: cc11001100_hook("BOTTOM", "bottom", "object-key-init"),
    CENTER: cc11001100_hook("CENTER", "center", "object-key-init"),
    BASELINE: cc11001100_hook("BASELINE", "baseline", "object-key-init"),
    AXIS: cc11001100_hook("AXIS", "axis", "object-key-init"),
    LEFT: cc11001100_hook("LEFT", "left", "object-key-init"),
    RIGHT: cc11001100_hook("RIGHT", "right", "object-key-init")
  },
  LINES: {
    NONE: cc11001100_hook("NONE", "none", "object-key-init"),
    SOLID: cc11001100_hook("SOLID", "solid", "object-key-init"),
    DASHED: cc11001100_hook("DASHED", "dashed", "object-key-init")
  },
  SIDE: {
    LEFT: cc11001100_hook("LEFT", "left", "object-key-init"),
    RIGHT: cc11001100_hook("RIGHT", "right", "object-key-init"),
    LEFTOVERLAP: cc11001100_hook("LEFTOVERLAP", "leftoverlap", "object-key-init"),
    RIGHTOVERLAP: cc11001100_hook("RIGHTOVERLAP", "rightoverlap", "object-key-init")
  },
  WIDTH: {
    AUTO: cc11001100_hook("AUTO", "auto", "object-key-init"),
    FIT: cc11001100_hook("FIT", "fit", "object-key-init")
  },
  ACTIONTYPE: {
    TOGGLE: cc11001100_hook("TOGGLE", "toggle", "object-key-init"),
    STATUSLINE: cc11001100_hook("STATUSLINE", "statusline", "object-key-init"),
    TOOLTIP: cc11001100_hook("TOOLTIP", "tooltip", "object-key-init"),
    INPUT: cc11001100_hook("INPUT", "input", "object-key-init")
  },
  LENGTH: {
    VERYVERYTHINMATHSPACE: cc11001100_hook("VERYVERYTHINMATHSPACE", "veryverythinmathspace", "object-key-init"),
    VERYTHINMATHSPACE: cc11001100_hook("VERYTHINMATHSPACE", "verythinmathspace", "object-key-init"),
    THINMATHSPACE: cc11001100_hook("THINMATHSPACE", "thinmathspace", "object-key-init"),
    MEDIUMMATHSPACE: cc11001100_hook("MEDIUMMATHSPACE", "mediummathspace", "object-key-init"),
    THICKMATHSPACE: cc11001100_hook("THICKMATHSPACE", "thickmathspace", "object-key-init"),
    VERYTHICKMATHSPACE: cc11001100_hook("VERYTHICKMATHSPACE", "verythickmathspace", "object-key-init"),
    VERYVERYTHICKMATHSPACE: cc11001100_hook("VERYVERYTHICKMATHSPACE", "veryverythickmathspace", "object-key-init"),
    NEGATIVEVERYVERYTHINMATHSPACE: cc11001100_hook("NEGATIVEVERYVERYTHINMATHSPACE", "negativeveryverythinmathspace", "object-key-init"),
    NEGATIVEVERYTHINMATHSPACE: cc11001100_hook("NEGATIVEVERYTHINMATHSPACE", "negativeverythinmathspace", "object-key-init"),
    NEGATIVETHINMATHSPACE: cc11001100_hook("NEGATIVETHINMATHSPACE", "negativethinmathspace", "object-key-init"),
    NEGATIVEMEDIUMMATHSPACE: cc11001100_hook("NEGATIVEMEDIUMMATHSPACE", "negativemediummathspace", "object-key-init"),
    NEGATIVETHICKMATHSPACE: cc11001100_hook("NEGATIVETHICKMATHSPACE", "negativethickmathspace", "object-key-init"),
    NEGATIVEVERYTHICKMATHSPACE: cc11001100_hook("NEGATIVEVERYTHICKMATHSPACE", "negativeverythickmathspace", "object-key-init"),
    NEGATIVEVERYVERYTHICKMATHSPACE: cc11001100_hook("NEGATIVEVERYVERYTHICKMATHSPACE", "negativeveryverythickmathspace", "object-key-init")
  },
  OVERFLOW: {
    LINBREAK: cc11001100_hook("LINBREAK", "linebreak", "object-key-init"),
    SCROLL: cc11001100_hook("SCROLL", "scroll", "object-key-init"),
    ELIDE: cc11001100_hook("ELIDE", "elide", "object-key-init"),
    TRUNCATE: cc11001100_hook("TRUNCATE", "truncate", "object-key-init"),
    SCALE: cc11001100_hook("SCALE", "scale", "object-key-init")
  },
  UNIT: {
    EM: cc11001100_hook("EM", "em", "object-key-init"),
    EX: cc11001100_hook("EX", "ex", "object-key-init"),
    PX: cc11001100_hook("PX", "px", "object-key-init"),
    IN: cc11001100_hook("IN", "in", "object-key-init"),
    CM: cc11001100_hook("CM", "cm", "object-key-init"),
    MM: cc11001100_hook("MM", "mm", "object-key-init"),
    PT: cc11001100_hook("PT", "pt", "object-key-init"),
    PC: cc11001100_hook("PC", "pc", "object-key-init")
  },
  TEXCLASS: {
    ORD: cc11001100_hook("ORD", 0, "object-key-init"),
    OP: cc11001100_hook("OP", 1, "object-key-init"),
    BIN: cc11001100_hook("BIN", 2, "object-key-init"),
    REL: cc11001100_hook("REL", 3, "object-key-init"),
    OPEN: cc11001100_hook("OPEN", 4, "object-key-init"),
    CLOSE: cc11001100_hook("CLOSE", 5, "object-key-init"),
    PUNCT: cc11001100_hook("PUNCT", 6, "object-key-init"),
    INNER: cc11001100_hook("INNER", 7, "object-key-init"),
    VCENTER: cc11001100_hook("VCENTER", 8, "object-key-init"),
    NONE: cc11001100_hook("NONE", -1, "object-key-init")
  },
  TEXCLASSNAMES: cc11001100_hook("TEXCLASSNAMES", ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER", "VCENTER"], "object-key-init"),
  skipAttributes: {
    texClass: cc11001100_hook("texClass", true, "object-key-init"),
    useHeight: cc11001100_hook("useHeight", true, "object-key-init"),
    texprimestyle: cc11001100_hook("texprimestyle", true, "object-key-init")
  },
  copyAttributes: {
    displaystyle: cc11001100_hook("displaystyle", 1, "object-key-init"),
    scriptlevel: cc11001100_hook("scriptlevel", 1, "object-key-init"),
    open: cc11001100_hook("open", 1, "object-key-init"),
    close: cc11001100_hook("close", 1, "object-key-init"),
    form: cc11001100_hook("form", 1, "object-key-init"),
    actiontype: cc11001100_hook("actiontype", 1, "object-key-init"),
    fontfamily: cc11001100_hook("fontfamily", true, "object-key-init"),
    fontsize: cc11001100_hook("fontsize", true, "object-key-init"),
    fontweight: cc11001100_hook("fontweight", true, "object-key-init"),
    fontstyle: cc11001100_hook("fontstyle", true, "object-key-init"),
    color: cc11001100_hook("color", true, "object-key-init"),
    background: cc11001100_hook("background", true, "object-key-init"),
    id: cc11001100_hook("id", true, "object-key-init"),
    "class": cc11001100_hook("class", 1, "object-key-init"),
    href: cc11001100_hook("href", true, "object-key-init"),
    style: cc11001100_hook("style", true, "object-key-init")
  },
  copyAttributeNames: cc11001100_hook("copyAttributeNames", ["displaystyle", "scriptlevel", "open", "close", "form", "actiontype", "fontfamily", "fontsize", "fontweight", "fontstyle", "color", "background", "id", "class", "href", "style"], "object-key-init"),
  nocopyAttributes: {
    fontfamily: cc11001100_hook("fontfamily", true, "object-key-init"),
    fontsize: cc11001100_hook("fontsize", true, "object-key-init"),
    fontweight: cc11001100_hook("fontweight", true, "object-key-init"),
    fontstyle: cc11001100_hook("fontstyle", true, "object-key-init"),
    color: cc11001100_hook("color", true, "object-key-init"),
    background: cc11001100_hook("background", true, "object-key-init"),
    id: cc11001100_hook("id", true, "object-key-init"),
    "class": cc11001100_hook("class", true, "object-key-init"),
    href: cc11001100_hook("href", true, "object-key-init"),
    style: cc11001100_hook("style", true, "object-key-init"),
    xmlns: cc11001100_hook("xmlns", true, "object-key-init")
  },
  Error: function (d, e) {
    var c = cc11001100_hook("c", this.merror(d), "var-init"),
      b = cc11001100_hook("b", MathJax.Localization.fontDirection(), "var-init"),
      a = cc11001100_hook("a", MathJax.Localization.fontFamily(), "var-init");
    if (e) {
      c = cc11001100_hook("c", c.With(e), "assign");
    }
    if (b || a) {
      c = cc11001100_hook("c", this.mstyle(c), "assign");
      if (b) {
        c.dir = cc11001100_hook("c.dir", b, "assign");
      }
      if (a) {
        c.style.fontFamily = cc11001100_hook("c.style.fontFamily", "font-family: " + a, "assign");
      }
    }
    return c;
  }
});
(function (a) {
  a.mbase = cc11001100_hook("a.mbase", MathJax.Object.Subclass({
    type: cc11001100_hook("type", "base", "object-key-init"),
    isToken: cc11001100_hook("isToken", false, "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      dir: cc11001100_hook("dir", a.INHERIT, "object-key-init")
    },
    noInherit: {},
    noInheritAttribute: {
      texClass: cc11001100_hook("texClass", true, "object-key-init")
    },
    getRemoved: {},
    linebreakContainer: cc11001100_hook("linebreakContainer", false, "object-key-init"),
    Init: function () {
      this.data = cc11001100_hook("this.data", [], "assign");
      if (this.inferRow && !(arguments.length === 1 && arguments[0].inferred)) {
        this.Append(a.mrow().With({
          inferred: cc11001100_hook("inferred", true, "object-key-init"),
          notParent: cc11001100_hook("notParent", true, "object-key-init")
        }));
      }
      this.Append.apply(this, arguments);
    },
    With: function (e) {
      for (var f in e) {
        if (e.hasOwnProperty(f)) {
          this[f] = cc11001100_hook("this[f]", e[f], "assign");
        }
      }
      return this;
    },
    Append: function () {
      if (this.inferRow && this.data.length) {
        this.data[0].Append.apply(this.data[0], arguments);
      } else {
        for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", arguments.length, "var-init"); f < e; f++) {
          this.SetData(this.data.length, arguments[f]);
        }
      }
    },
    SetData: function (e, f) {
      if (f != null) {
        if (!(f instanceof a.mbase)) {
          f = cc11001100_hook("f", this.isToken || this.isChars ? a.chars(f) : a.mtext(f), "assign");
        }
        f.parent = cc11001100_hook("f.parent", this, "assign");
        f.setInherit(this.inheritFromMe ? this : this.inherit);
      }
      this.data[e] = cc11001100_hook("this.data[e]", f, "assign");
    },
    Parent: function () {
      var e = cc11001100_hook("e", this.parent, "var-init");
      while (e && e.notParent) {
        e = cc11001100_hook("e", e.parent, "assign");
      }
      return e;
    },
    Get: function (f, k, l) {
      if (!l) {
        if (this[f] != null) {
          return this[f];
        }
        if (this.attr && this.attr[f] != null) {
          return this.attr[f];
        }
      }
      var g = cc11001100_hook("g", this.Parent(), "var-init");
      if (g && g["adjustChild_" + f] != null) {
        return g["adjustChild_" + f](this.childPosition(), k);
      }
      var j = cc11001100_hook("j", this.inherit, "var-init");
      var e = cc11001100_hook("e", j, "var-init");
      while (j) {
        var i = cc11001100_hook("i", j[f], "var-init");
        if (i == null && j.attr) {
          i = cc11001100_hook("i", j.attr[f], "assign");
        }
        if (j.removedStyles && j.getRemoved[f] && i == null) {
          i = cc11001100_hook("i", j.removedStyles[j.getRemoved[f]], "assign");
        }
        if (i != null && j.noInheritAttribute && !j.noInheritAttribute[f]) {
          var h = cc11001100_hook("h", j.noInherit[this.type], "var-init");
          if (!(h && h[f])) {
            return i;
          }
        }
        e = cc11001100_hook("e", j, "assign");
        j = cc11001100_hook("j", j.inherit, "assign");
      }
      if (!k) {
        if (this.defaults[f] === a.AUTO) {
          return this.autoDefault(f);
        }
        if (this.defaults[f] !== a.INHERIT && this.defaults[f] != null) {
          return this.defaults[f];
        }
        if (e) {
          return e.defaults[f];
        }
      }
      return null;
    },
    hasValue: function (e) {
      return this.Get(e, true) != null;
    },
    getValues: function () {
      var f = cc11001100_hook("f", {}, "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"), e = cc11001100_hook("e", arguments.length, "var-init"); g < e; g++) {
        f[arguments[g]] = cc11001100_hook("f[arguments[g]]", this.Get(arguments[g]), "assign");
      }
      return f;
    },
    adjustChild_scriptlevel: function (f, e) {
      return this.Get("scriptlevel", e);
    },
    adjustChild_displaystyle: function (f, e) {
      return this.Get("displaystyle", e);
    },
    adjustChild_texprimestyle: function (f, e) {
      return this.Get("texprimestyle", e);
    },
    childPosition: function () {
      var h = cc11001100_hook("h", this, "var-init"),
        g = cc11001100_hook("g", h.parent, "var-init");
      while (g.notParent) {
        h = cc11001100_hook("h", g, "assign");
        g = cc11001100_hook("g", h.parent, "assign");
      }
      for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", g.data.length, "var-init"); f < e; f++) {
        if (g.data[f] === h) {
          return f;
        }
      }
      return null;
    },
    setInherit: function (g) {
      if (g !== this.inherit && this.inherit == null) {
        this.inherit = cc11001100_hook("this.inherit", g, "assign");
        for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); f < e; f++) {
          if (this.data[f] && this.data[f].setInherit) {
            this.data[f].setInherit(g);
          }
        }
      }
    },
    setTeXclass: function (e) {
      this.getPrevClass(e);
      return typeof this.texClass !== "undefined" ? this : e;
    },
    getPrevClass: function (e) {
      if (e) {
        this.prevClass = cc11001100_hook("this.prevClass", e.Get("texClass"), "assign");
        this.prevLevel = cc11001100_hook("this.prevLevel", e.Get("scriptlevel"), "assign");
      }
    },
    updateTeXclass: function (e) {
      if (e) {
        this.prevClass = cc11001100_hook("this.prevClass", e.prevClass, "assign");
        delete e.prevClass;
        this.prevLevel = cc11001100_hook("this.prevLevel", e.prevLevel, "assign");
        delete e.prevLevel;
        this.texClass = cc11001100_hook("this.texClass", e.Get("texClass"), "assign");
      }
    },
    texSpacing: function () {
      var f = cc11001100_hook("f", this.prevClass != null ? this.prevClass : a.TEXCLASS.NONE, "var-init");
      var e = cc11001100_hook("e", this.Get("texClass") || a.TEXCLASS.ORD, "var-init");
      if (f === a.TEXCLASS.NONE || e === a.TEXCLASS.NONE) {
        return "";
      }
      if (f === a.TEXCLASS.VCENTER) {
        f = cc11001100_hook("f", a.TEXCLASS.ORD, "assign");
      }
      if (e === a.TEXCLASS.VCENTER) {
        e = cc11001100_hook("e", a.TEXCLASS.ORD, "assign");
      }
      var g = cc11001100_hook("g", this.TEXSPACE[f][e], "var-init");
      if ((this.prevLevel > 0 || this.Get("scriptlevel") > 0) && g >= 0) {
        return "";
      }
      return this.TEXSPACELENGTH[Math.abs(g)];
    },
    TEXSPACELENGTH: cc11001100_hook("TEXSPACELENGTH", ["", a.LENGTH.THINMATHSPACE, a.LENGTH.MEDIUMMATHSPACE, a.LENGTH.THICKMATHSPACE], "object-key-init"),
    TEXSPACE: cc11001100_hook("TEXSPACE", [[0, -1, 2, 3, 0, 0, 0, 1], [-1, -1, 0, 3, 0, 0, 0, 1], [2, 2, 0, 0, 2, 0, 0, 2], [3, 3, 0, 0, 3, 0, 0, 3], [0, 0, 0, 0, 0, 0, 0, 0], [0, -1, 2, 3, 0, 0, 0, 1], [1, 1, 0, 1, 1, 1, 1, 1], [1, -1, 2, 3, 1, 0, 1, 1]], "object-key-init"),
    autoDefault: function (e) {
      return "";
    },
    isSpacelike: function () {
      return false;
    },
    isEmbellished: function () {
      return false;
    },
    Core: function () {
      return this;
    },
    CoreMO: function () {
      return this;
    },
    childIndex: function (g) {
      if (g == null) {
        return;
      }
      for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); f < e; f++) {
        if (g === this.data[f]) {
          return f;
        }
      }
    },
    CoreIndex: function () {
      return (this.inferRow ? this.data[0] || this : this).childIndex(this.Core());
    },
    hasNewline: function () {
      if (this.isEmbellished()) {
        return this.CoreMO().hasNewline();
      }
      if (this.isToken || this.linebreakContainer) {
        return false;
      }
      for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); f < e; f++) {
        if (this.data[f] && this.data[f].hasNewline()) {
          return true;
        }
      }
      return false;
    },
    array: function () {
      if (this.inferred) {
        return this.data;
      } else {
        return [this];
      }
    },
    toString: function () {
      return this.type + "(" + this.data.join(",") + ")";
    },
    getAnnotation: function () {
      return null;
    }
  }, {
    childrenSpacelike: function () {
      for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); f < e; f++) {
        if (!this.data[f].isSpacelike()) {
          return false;
        }
      }
      return true;
    },
    childEmbellished: function () {
      return this.data[0] && this.data[0].isEmbellished();
    },
    childCore: function () {
      return this.inferRow && this.data[0] ? this.data[0].Core() : this.data[0];
    },
    childCoreMO: function () {
      return this.data[0] ? this.data[0].CoreMO() : null;
    },
    setChildTeXclass: function (e) {
      if (this.data[0]) {
        e = cc11001100_hook("e", this.data[0].setTeXclass(e), "assign");
        this.updateTeXclass(this.data[0]);
      }
      return e;
    },
    setBaseTeXclasses: function (g) {
      this.getPrevClass(g);
      this.texClass = cc11001100_hook("this.texClass", null, "assign");
      if (this.data[0]) {
        if (this.isEmbellished() || this.data[0].isa(a.mi)) {
          g = cc11001100_hook("g", this.data[0].setTeXclass(g), "assign");
          this.updateTeXclass(this.Core());
        } else {
          this.data[0].setTeXclass();
          g = cc11001100_hook("g", this, "assign");
        }
      } else {
        g = cc11001100_hook("g", this, "assign");
      }
      for (var f = cc11001100_hook("f", 1, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); f < e; f++) {
        if (this.data[f]) {
          this.data[f].setTeXclass();
        }
      }
      return g;
    },
    setSeparateTeXclasses: function (g) {
      this.getPrevClass(g);
      for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); f < e; f++) {
        if (this.data[f]) {
          this.data[f].setTeXclass();
        }
      }
      if (this.isEmbellished()) {
        this.updateTeXclass(this.Core());
      }
      return this;
    }
  }), "assign");
  a.mi = cc11001100_hook("a.mi", a.mbase.Subclass({
    type: cc11001100_hook("type", "mi", "object-key-init"),
    isToken: cc11001100_hook("isToken", true, "object-key-init"),
    texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init"),
    defaults: {
      mathvariant: cc11001100_hook("mathvariant", a.AUTO, "object-key-init"),
      mathsize: cc11001100_hook("mathsize", a.INHERIT, "object-key-init"),
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      dir: cc11001100_hook("dir", a.INHERIT, "object-key-init")
    },
    autoDefault: function (f) {
      if (f === "mathvariant") {
        var e = cc11001100_hook("e", (this.data[0] || "").toString(), "var-init");
        return e.length === 1 || e.length === 2 && e.charCodeAt(0) >= 55296 && e.charCodeAt(0) < 56320 ? a.VARIANT.ITALIC : a.VARIANT.NORMAL;
      }
      return "";
    },
    setTeXclass: function (f) {
      this.getPrevClass(f);
      var e = cc11001100_hook("e", this.data.join(""), "var-init");
      if (e.length > 1 && e.match(/^[a-z][a-z0-9]*$/i) && this.texClass === a.TEXCLASS.ORD) {
        this.texClass = cc11001100_hook("this.texClass", a.TEXCLASS.OP, "assign");
        this.autoOP = cc11001100_hook("this.autoOP", true, "assign");
      }
      return this;
    }
  }), "assign");
  a.mn = cc11001100_hook("a.mn", a.mbase.Subclass({
    type: cc11001100_hook("type", "mn", "object-key-init"),
    isToken: cc11001100_hook("isToken", true, "object-key-init"),
    texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init"),
    defaults: {
      mathvariant: cc11001100_hook("mathvariant", a.INHERIT, "object-key-init"),
      mathsize: cc11001100_hook("mathsize", a.INHERIT, "object-key-init"),
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      dir: cc11001100_hook("dir", a.INHERIT, "object-key-init")
    }
  }), "assign");
  a.mo = cc11001100_hook("a.mo", a.mbase.Subclass({
    type: cc11001100_hook("type", "mo", "object-key-init"),
    isToken: cc11001100_hook("isToken", true, "object-key-init"),
    defaults: {
      mathvariant: cc11001100_hook("mathvariant", a.INHERIT, "object-key-init"),
      mathsize: cc11001100_hook("mathsize", a.INHERIT, "object-key-init"),
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      dir: cc11001100_hook("dir", a.INHERIT, "object-key-init"),
      form: cc11001100_hook("form", a.AUTO, "object-key-init"),
      fence: cc11001100_hook("fence", a.AUTO, "object-key-init"),
      separator: cc11001100_hook("separator", a.AUTO, "object-key-init"),
      lspace: cc11001100_hook("lspace", a.AUTO, "object-key-init"),
      rspace: cc11001100_hook("rspace", a.AUTO, "object-key-init"),
      stretchy: cc11001100_hook("stretchy", a.AUTO, "object-key-init"),
      symmetric: cc11001100_hook("symmetric", a.AUTO, "object-key-init"),
      maxsize: cc11001100_hook("maxsize", a.AUTO, "object-key-init"),
      minsize: cc11001100_hook("minsize", a.AUTO, "object-key-init"),
      largeop: cc11001100_hook("largeop", a.AUTO, "object-key-init"),
      movablelimits: cc11001100_hook("movablelimits", a.AUTO, "object-key-init"),
      accent: cc11001100_hook("accent", a.AUTO, "object-key-init"),
      linebreak: cc11001100_hook("linebreak", a.LINEBREAK.AUTO, "object-key-init"),
      lineleading: cc11001100_hook("lineleading", a.INHERIT, "object-key-init"),
      linebreakstyle: cc11001100_hook("linebreakstyle", a.AUTO, "object-key-init"),
      linebreakmultchar: cc11001100_hook("linebreakmultchar", a.INHERIT, "object-key-init"),
      indentalign: cc11001100_hook("indentalign", a.INHERIT, "object-key-init"),
      indentshift: cc11001100_hook("indentshift", a.INHERIT, "object-key-init"),
      indenttarget: cc11001100_hook("indenttarget", a.INHERIT, "object-key-init"),
      indentalignfirst: cc11001100_hook("indentalignfirst", a.INHERIT, "object-key-init"),
      indentshiftfirst: cc11001100_hook("indentshiftfirst", a.INHERIT, "object-key-init"),
      indentalignlast: cc11001100_hook("indentalignlast", a.INHERIT, "object-key-init"),
      indentshiftlast: cc11001100_hook("indentshiftlast", a.INHERIT, "object-key-init"),
      texClass: cc11001100_hook("texClass", a.AUTO, "object-key-init")
    },
    defaultDef: {
      form: cc11001100_hook("form", a.FORM.INFIX, "object-key-init"),
      fence: cc11001100_hook("fence", false, "object-key-init"),
      separator: cc11001100_hook("separator", false, "object-key-init"),
      lspace: cc11001100_hook("lspace", a.LENGTH.THICKMATHSPACE, "object-key-init"),
      rspace: cc11001100_hook("rspace", a.LENGTH.THICKMATHSPACE, "object-key-init"),
      stretchy: cc11001100_hook("stretchy", false, "object-key-init"),
      symmetric: cc11001100_hook("symmetric", false, "object-key-init"),
      maxsize: cc11001100_hook("maxsize", a.SIZE.INFINITY, "object-key-init"),
      minsize: cc11001100_hook("minsize", "0em", "object-key-init"),
      largeop: cc11001100_hook("largeop", false, "object-key-init"),
      movablelimits: cc11001100_hook("movablelimits", false, "object-key-init"),
      accent: cc11001100_hook("accent", false, "object-key-init"),
      linebreak: cc11001100_hook("linebreak", a.LINEBREAK.AUTO, "object-key-init"),
      lineleading: cc11001100_hook("lineleading", "1ex", "object-key-init"),
      linebreakstyle: cc11001100_hook("linebreakstyle", "before", "object-key-init"),
      indentalign: cc11001100_hook("indentalign", a.INDENTALIGN.AUTO, "object-key-init"),
      indentshift: cc11001100_hook("indentshift", "0", "object-key-init"),
      indenttarget: cc11001100_hook("indenttarget", "", "object-key-init"),
      indentalignfirst: cc11001100_hook("indentalignfirst", a.INDENTALIGN.INDENTALIGN, "object-key-init"),
      indentshiftfirst: cc11001100_hook("indentshiftfirst", a.INDENTSHIFT.INDENTSHIFT, "object-key-init"),
      indentalignlast: cc11001100_hook("indentalignlast", a.INDENTALIGN.INDENTALIGN, "object-key-init"),
      indentshiftlast: cc11001100_hook("indentshiftlast", a.INDENTSHIFT.INDENTSHIFT, "object-key-init"),
      texClass: cc11001100_hook("texClass", a.TEXCLASS.REL, "object-key-init")
    },
    SPACE_ATTR: {
      lspace: cc11001100_hook("lspace", 1, "object-key-init"),
      rspace: cc11001100_hook("rspace", 2, "object-key-init"),
      form: cc11001100_hook("form", 4, "object-key-init")
    },
    useMMLspacing: cc11001100_hook("useMMLspacing", 7, "object-key-init"),
    autoDefault: function (g, n) {
      var l = cc11001100_hook("l", this.def, "var-init");
      if (!l) {
        if (g === "form") {
          this.useMMLspacing &= cc11001100_hook("this.useMMLspacing", ~this.SPACE_ATTR.form, "assign");
          return this.getForm();
        }
        var k = cc11001100_hook("k", this.data.join(""), "var-init");
        var f = cc11001100_hook("f", [this.Get("form"), a.FORM.INFIX, a.FORM.POSTFIX, a.FORM.PREFIX], "var-init");
        for (var h = cc11001100_hook("h", 0, "var-init"), e = cc11001100_hook("e", f.length, "var-init"); h < e; h++) {
          var j = cc11001100_hook("j", this.OPTABLE[f[h]][k], "var-init");
          if (j) {
            l = cc11001100_hook("l", this.makeDef(j), "assign");
            break;
          }
        }
        if (!l) {
          l = cc11001100_hook("l", this.CheckRange(k), "assign");
        }
        if (!l && n) {
          l = cc11001100_hook("l", {}, "assign");
        } else {
          if (!l) {
            l = cc11001100_hook("l", MathJax.Hub.Insert({}, this.defaultDef), "assign");
          }
          if (this.parent) {
            this.def = cc11001100_hook("this.def", l, "assign");
          } else {
            l = cc11001100_hook("l", MathJax.Hub.Insert({}, l), "assign");
          }
          l.form = cc11001100_hook("l.form", f[0], "assign");
        }
      }
      this.useMMLspacing &= cc11001100_hook("this.useMMLspacing", ~(this.SPACE_ATTR[g] || 0), "assign");
      if (l[g] != null) {
        return l[g];
      } else {
        if (!n) {
          return this.defaultDef[g];
        }
      }
      return "";
    },
    CheckRange: function (j) {
      var k = cc11001100_hook("k", j.charCodeAt(0), "var-init");
      if (k >= 55296 && k < 56320) {
        k = cc11001100_hook("k", (k - 55296 << 10) + (j.charCodeAt(1) - 56320) + 65536, "assign");
      }
      for (var g = cc11001100_hook("g", 0, "var-init"), e = cc11001100_hook("e", this.RANGES.length, "var-init"); g < e && this.RANGES[g][0] <= k; g++) {
        if (k <= this.RANGES[g][1]) {
          if (this.RANGES[g][3]) {
            var f = cc11001100_hook("f", a.optableDir + "/" + this.RANGES[g][3] + ".js", "var-init");
            this.RANGES[g][3] = cc11001100_hook("this.RANGES[g][3]", null, "assign");
            MathJax.Hub.RestartAfter(MathJax.Ajax.Require(f));
          }
          var h = cc11001100_hook("h", a.TEXCLASSNAMES[this.RANGES[g][2]], "var-init");
          h = cc11001100_hook("h", this.OPTABLE.infix[j] = cc11001100_hook("this.OPTABLE.infix[j]", a.mo.OPTYPES[h === "BIN" ? "BIN3" : h], "assign"), "assign");
          return this.makeDef(h);
        }
      }
      return null;
    },
    makeDef: function (f) {
      if (f[2] == null) {
        f[2] = cc11001100_hook("f[2]", this.defaultDef.texClass, "assign");
      }
      if (!f[3]) {
        f[3] = cc11001100_hook("f[3]", {}, "assign");
      }
      var e = cc11001100_hook("e", MathJax.Hub.Insert({}, f[3]), "var-init");
      e.lspace = cc11001100_hook("e.lspace", this.SPACE[f[0]], "assign");
      e.rspace = cc11001100_hook("e.rspace", this.SPACE[f[1]], "assign");
      e.texClass = cc11001100_hook("e.texClass", f[2], "assign");
      if (e.texClass === a.TEXCLASS.REL && (this.movablelimits || this.data.join("").match(/^[a-z]+$/i))) {
        e.texClass = cc11001100_hook("e.texClass", a.TEXCLASS.OP, "assign");
      }
      return e;
    },
    getForm: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        g = cc11001100_hook("g", this.parent, "var-init"),
        f = cc11001100_hook("f", this.Parent(), "var-init");
      while (f && f.isEmbellished()) {
        e = cc11001100_hook("e", g, "assign");
        g = cc11001100_hook("g", f.parent, "assign");
        f = cc11001100_hook("f", f.Parent(), "assign");
      }
      if (g && g.type === "mrow" && g.NonSpaceLength() !== 1) {
        if (g.FirstNonSpace() === e) {
          return a.FORM.PREFIX;
        }
        if (g.LastNonSpace() === e) {
          return a.FORM.POSTFIX;
        }
      }
      return a.FORM.INFIX;
    },
    isEmbellished: function () {
      return true;
    },
    hasNewline: function () {
      return this.Get("linebreak") === a.LINEBREAK.NEWLINE;
    },
    CoreParent: function () {
      var e = cc11001100_hook("e", this, "var-init");
      while (e && e.isEmbellished() && e.CoreMO() === this && !e.isa(a.math)) {
        e = cc11001100_hook("e", e.Parent(), "assign");
      }
      return e;
    },
    CoreText: function (e) {
      if (!e) {
        return "";
      }
      if (e.isEmbellished()) {
        return e.CoreMO().data.join("");
      }
      while (((e.isa(a.mrow) || e.isa(a.TeXAtom) || e.isa(a.mstyle) || e.isa(a.mphantom)) && e.data.length === 1 || e.isa(a.munderover)) && e.data[0]) {
        e = cc11001100_hook("e", e.data[0], "assign");
      }
      if (!e.isToken) {
        return "";
      } else {
        return e.data.join("");
      }
    },
    remapChars: {
      "*": cc11001100_hook("*", "\u2217", "object-key-init"),
      '"': cc11001100_hook('"', "\u2033", "object-key-init"),
      "\u00B0": cc11001100_hook("\u00B0", "\u2218", "object-key-init"),
      "\u00B2": cc11001100_hook("\u00B2", "2", "object-key-init"),
      "\u00B3": cc11001100_hook("\u00B3", "3", "object-key-init"),
      "\u00B4": cc11001100_hook("\u00B4", "\u2032", "object-key-init"),
      "\u00B9": cc11001100_hook("\u00B9", "1", "object-key-init")
    },
    remap: function (f, e) {
      f = cc11001100_hook("f", f.replace(/-/g, "\u2212"), "assign");
      if (e) {
        f = cc11001100_hook("f", f.replace(/'/g, "\u2032").replace(/`/g, "\u2035"), "assign");
        if (f.length === 1) {
          f = cc11001100_hook("f", e[f] || f, "assign");
        }
      }
      return f;
    },
    setTeXclass: function (f) {
      var e = cc11001100_hook("e", this.getValues("form", "lspace", "rspace", "fence"), "var-init");
      if (this.useMMLspacing) {
        this.texClass = cc11001100_hook("this.texClass", a.TEXCLASS.NONE, "assign");
        return this;
      }
      if (e.fence && !this.texClass) {
        if (e.form === a.FORM.PREFIX) {
          this.texClass = cc11001100_hook("this.texClass", a.TEXCLASS.OPEN, "assign");
        }
        if (e.form === a.FORM.POSTFIX) {
          this.texClass = cc11001100_hook("this.texClass", a.TEXCLASS.CLOSE, "assign");
        }
      }
      this.texClass = cc11001100_hook("this.texClass", this.Get("texClass"), "assign");
      if (this.data.join("") === "\u2061") {
        if (f) {
          f.texClass = cc11001100_hook("f.texClass", a.TEXCLASS.OP, "assign");
          f.fnOP = cc11001100_hook("f.fnOP", true, "assign");
        }
        this.texClass = cc11001100_hook("this.texClass", this.prevClass = cc11001100_hook("this.prevClass", a.TEXCLASS.NONE, "assign"), "assign");
        return f;
      }
      return this.adjustTeXclass(f);
    },
    adjustTeXclass: function (f) {
      if (this.texClass === a.TEXCLASS.NONE) {
        return f;
      }
      if (f) {
        if (f.autoOP && (this.texClass === a.TEXCLASS.BIN || this.texClass === a.TEXCLASS.REL)) {
          f.texClass = cc11001100_hook("f.texClass", a.TEXCLASS.ORD, "assign");
        }
        this.prevClass = cc11001100_hook("this.prevClass", f.texClass || a.TEXCLASS.ORD, "assign");
        this.prevLevel = cc11001100_hook("this.prevLevel", f.Get("scriptlevel"), "assign");
      } else {
        this.prevClass = cc11001100_hook("this.prevClass", a.TEXCLASS.NONE, "assign");
      }
      if (this.texClass === a.TEXCLASS.BIN && (this.prevClass === a.TEXCLASS.NONE || this.prevClass === a.TEXCLASS.BIN || this.prevClass === a.TEXCLASS.OP || this.prevClass === a.TEXCLASS.REL || this.prevClass === a.TEXCLASS.OPEN || this.prevClass === a.TEXCLASS.PUNCT)) {
        this.texClass = cc11001100_hook("this.texClass", a.TEXCLASS.ORD, "assign");
      } else {
        if (this.prevClass === a.TEXCLASS.BIN && (this.texClass === a.TEXCLASS.REL || this.texClass === a.TEXCLASS.CLOSE || this.texClass === a.TEXCLASS.PUNCT)) {
          f.texClass = cc11001100_hook("f.texClass", this.prevClass = cc11001100_hook("this.prevClass", a.TEXCLASS.ORD, "assign"), "assign");
        } else {
          if (this.texClass === a.TEXCLASS.BIN) {
            var g = cc11001100_hook("g", this, "var-init"),
              e = cc11001100_hook("e", this.parent, "var-init");
            while (e && e.parent && e.isEmbellished() && (e.data.length === 1 || e.type !== "mrow" && e.Core() === g)) {
              g = cc11001100_hook("g", e, "assign");
              e = cc11001100_hook("e", e.parent, "assign");
            }
            if (e.data[e.data.length - 1] === g) {
              this.texClass = cc11001100_hook("this.texClass", a.TEXCLASS.ORD, "assign");
            }
          }
        }
      }
      return this;
    }
  }), "assign");
  a.mtext = cc11001100_hook("a.mtext", a.mbase.Subclass({
    type: cc11001100_hook("type", "mtext", "object-key-init"),
    isToken: cc11001100_hook("isToken", true, "object-key-init"),
    isSpacelike: function () {
      return true;
    },
    texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init"),
    defaults: {
      mathvariant: cc11001100_hook("mathvariant", a.INHERIT, "object-key-init"),
      mathsize: cc11001100_hook("mathsize", a.INHERIT, "object-key-init"),
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      dir: cc11001100_hook("dir", a.INHERIT, "object-key-init")
    }
  }), "assign");
  a.mspace = cc11001100_hook("a.mspace", a.mbase.Subclass({
    type: cc11001100_hook("type", "mspace", "object-key-init"),
    isToken: cc11001100_hook("isToken", true, "object-key-init"),
    isSpacelike: function () {
      return true;
    },
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      width: cc11001100_hook("width", "0em", "object-key-init"),
      height: cc11001100_hook("height", "0ex", "object-key-init"),
      depth: cc11001100_hook("depth", "0ex", "object-key-init"),
      linebreak: cc11001100_hook("linebreak", a.LINEBREAK.AUTO, "object-key-init")
    },
    hasDimAttr: function () {
      return this.hasValue("width") || this.hasValue("height") || this.hasValue("depth");
    },
    hasNewline: function () {
      return !this.hasDimAttr() && this.Get("linebreak") === a.LINEBREAK.NEWLINE;
    }
  }), "assign");
  a.ms = cc11001100_hook("a.ms", a.mbase.Subclass({
    type: cc11001100_hook("type", "ms", "object-key-init"),
    isToken: cc11001100_hook("isToken", true, "object-key-init"),
    texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init"),
    defaults: {
      mathvariant: cc11001100_hook("mathvariant", a.INHERIT, "object-key-init"),
      mathsize: cc11001100_hook("mathsize", a.INHERIT, "object-key-init"),
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      dir: cc11001100_hook("dir", a.INHERIT, "object-key-init"),
      lquote: cc11001100_hook("lquote", '"', "object-key-init"),
      rquote: cc11001100_hook("rquote", '"', "object-key-init")
    }
  }), "assign");
  a.mglyph = cc11001100_hook("a.mglyph", a.mbase.Subclass({
    type: cc11001100_hook("type", "mglyph", "object-key-init"),
    isToken: cc11001100_hook("isToken", true, "object-key-init"),
    texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      alt: cc11001100_hook("alt", "", "object-key-init"),
      src: cc11001100_hook("src", "", "object-key-init"),
      width: cc11001100_hook("width", a.AUTO, "object-key-init"),
      height: cc11001100_hook("height", a.AUTO, "object-key-init"),
      valign: cc11001100_hook("valign", "0em", "object-key-init")
    }
  }), "assign");
  a.mrow = cc11001100_hook("a.mrow", a.mbase.Subclass({
    type: cc11001100_hook("type", "mrow", "object-key-init"),
    isSpacelike: cc11001100_hook("isSpacelike", a.mbase.childrenSpacelike, "object-key-init"),
    inferred: cc11001100_hook("inferred", false, "object-key-init"),
    notParent: cc11001100_hook("notParent", false, "object-key-init"),
    isEmbellished: function () {
      var f = cc11001100_hook("f", false, "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); g < e; g++) {
        if (this.data[g] == null) {
          continue;
        }
        if (this.data[g].isEmbellished()) {
          if (f) {
            return false;
          }
          f = cc11001100_hook("f", true, "assign");
          this.core = cc11001100_hook("this.core", g, "assign");
        } else {
          if (!this.data[g].isSpacelike()) {
            return false;
          }
        }
      }
      return f;
    },
    NonSpaceLength: function () {
      var g = cc11001100_hook("g", 0, "var-init");
      for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); f < e; f++) {
        if (this.data[f] && !this.data[f].isSpacelike()) {
          g++;
        }
      }
      return g;
    },
    FirstNonSpace: function () {
      for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); f < e; f++) {
        if (this.data[f] && !this.data[f].isSpacelike()) {
          return this.data[f];
        }
      }
      return null;
    },
    LastNonSpace: function () {
      for (var e = cc11001100_hook("e", this.data.length - 1, "var-init"); e >= 0; e--) {
        if (this.data[0] && !this.data[e].isSpacelike()) {
          return this.data[e];
        }
      }
      return null;
    },
    Core: function () {
      if (!this.isEmbellished() || typeof this.core === "undefined") {
        return this;
      }
      return this.data[this.core];
    },
    CoreMO: function () {
      if (!this.isEmbellished() || typeof this.core === "undefined") {
        return this;
      }
      return this.data[this.core].CoreMO();
    },
    toString: function () {
      if (this.inferred) {
        return "[" + this.data.join(",") + "]";
      }
      return this.SUPER(arguments).toString.call(this);
    },
    setTeXclass: function (g) {
      var f,
        e = cc11001100_hook("e", this.data.length, "var-init");
      if ((this.open || this.close) && (!g || !g.fnOP)) {
        this.getPrevClass(g);
        g = cc11001100_hook("g", null, "assign");
        for (f = cc11001100_hook("f", 0, "assign"); f < e; f++) {
          if (this.data[f]) {
            g = cc11001100_hook("g", this.data[f].setTeXclass(g), "assign");
          }
        }
        if (!this.hasOwnProperty("texClass")) {
          this.texClass = cc11001100_hook("this.texClass", a.TEXCLASS.INNER, "assign");
        }
        return this;
      } else {
        for (f = cc11001100_hook("f", 0, "assign"); f < e; f++) {
          if (this.data[f]) {
            g = cc11001100_hook("g", this.data[f].setTeXclass(g), "assign");
          }
        }
        if (this.data[0]) {
          this.updateTeXclass(this.data[0]);
        }
        return g;
      }
    },
    getAnnotation: function (e) {
      if (this.data.length != 1) {
        return null;
      }
      return this.data[0].getAnnotation(e);
    }
  }), "assign");
  a.mfrac = cc11001100_hook("a.mfrac", a.mbase.Subclass({
    type: cc11001100_hook("type", "mfrac", "object-key-init"),
    num: cc11001100_hook("num", 0, "object-key-init"),
    den: cc11001100_hook("den", 1, "object-key-init"),
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    isEmbellished: cc11001100_hook("isEmbellished", a.mbase.childEmbellished, "object-key-init"),
    Core: cc11001100_hook("Core", a.mbase.childCore, "object-key-init"),
    CoreMO: cc11001100_hook("CoreMO", a.mbase.childCoreMO, "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      linethickness: cc11001100_hook("linethickness", a.LINETHICKNESS.MEDIUM, "object-key-init"),
      numalign: cc11001100_hook("numalign", a.ALIGN.CENTER, "object-key-init"),
      denomalign: cc11001100_hook("denomalign", a.ALIGN.CENTER, "object-key-init"),
      bevelled: cc11001100_hook("bevelled", false, "object-key-init")
    },
    adjustChild_displaystyle: function (e) {
      return false;
    },
    adjustChild_scriptlevel: function (f) {
      var e = cc11001100_hook("e", this.Get("scriptlevel"), "var-init");
      if (!this.Get("displaystyle") || e > 0) {
        e++;
      }
      return e;
    },
    adjustChild_texprimestyle: function (e) {
      if (e == this.den) {
        return true;
      }
      return this.Get("texprimestyle");
    },
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setSeparateTeXclasses, "object-key-init")
  }), "assign");
  a.msqrt = cc11001100_hook("a.msqrt", a.mbase.Subclass({
    type: cc11001100_hook("type", "msqrt", "object-key-init"),
    inferRow: cc11001100_hook("inferRow", true, "object-key-init"),
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init"),
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setSeparateTeXclasses, "object-key-init"),
    adjustChild_texprimestyle: function (e) {
      return true;
    }
  }), "assign");
  a.mroot = cc11001100_hook("a.mroot", a.mbase.Subclass({
    type: cc11001100_hook("type", "mroot", "object-key-init"),
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init"),
    adjustChild_displaystyle: function (e) {
      if (e === 1) {
        return false;
      }
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function (f) {
      var e = cc11001100_hook("e", this.Get("scriptlevel"), "var-init");
      if (f === 1) {
        e += cc11001100_hook("e", 2, "assign");
      }
      return e;
    },
    adjustChild_texprimestyle: function (e) {
      if (e === 0) {
        return true;
      }
      return this.Get("texprimestyle");
    },
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setSeparateTeXclasses, "object-key-init")
  }), "assign");
  a.mstyle = cc11001100_hook("a.mstyle", a.mbase.Subclass({
    type: cc11001100_hook("type", "mstyle", "object-key-init"),
    isSpacelike: cc11001100_hook("isSpacelike", a.mbase.childrenSpacelike, "object-key-init"),
    isEmbellished: cc11001100_hook("isEmbellished", a.mbase.childEmbellished, "object-key-init"),
    Core: cc11001100_hook("Core", a.mbase.childCore, "object-key-init"),
    CoreMO: cc11001100_hook("CoreMO", a.mbase.childCoreMO, "object-key-init"),
    inferRow: cc11001100_hook("inferRow", true, "object-key-init"),
    defaults: {
      scriptlevel: cc11001100_hook("scriptlevel", a.INHERIT, "object-key-init"),
      displaystyle: cc11001100_hook("displaystyle", a.INHERIT, "object-key-init"),
      scriptsizemultiplier: cc11001100_hook("scriptsizemultiplier", Math.sqrt(1 / 2), "object-key-init"),
      scriptminsize: cc11001100_hook("scriptminsize", "8pt", "object-key-init"),
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      dir: cc11001100_hook("dir", a.INHERIT, "object-key-init"),
      infixlinebreakstyle: cc11001100_hook("infixlinebreakstyle", a.LINEBREAKSTYLE.BEFORE, "object-key-init"),
      decimalseparator: cc11001100_hook("decimalseparator", ".", "object-key-init")
    },
    adjustChild_scriptlevel: function (g) {
      var f = cc11001100_hook("f", this.scriptlevel, "var-init");
      if (f == null) {
        f = cc11001100_hook("f", this.Get("scriptlevel"), "assign");
      } else {
        if (String(f).match(/^ *[-+]/)) {
          var e = cc11001100_hook("e", this.Get("scriptlevel", null, true), "var-init");
          f = cc11001100_hook("f", e + parseInt(f), "assign");
        }
      }
      return f;
    },
    inheritFromMe: cc11001100_hook("inheritFromMe", true, "object-key-init"),
    noInherit: {
      mpadded: {
        width: cc11001100_hook("width", true, "object-key-init"),
        height: cc11001100_hook("height", true, "object-key-init"),
        depth: cc11001100_hook("depth", true, "object-key-init"),
        lspace: cc11001100_hook("lspace", true, "object-key-init"),
        voffset: cc11001100_hook("voffset", true, "object-key-init")
      },
      mtable: {
        width: cc11001100_hook("width", true, "object-key-init"),
        height: cc11001100_hook("height", true, "object-key-init"),
        depth: cc11001100_hook("depth", true, "object-key-init"),
        align: cc11001100_hook("align", true, "object-key-init")
      }
    },
    getRemoved: {
      fontfamily: cc11001100_hook("fontfamily", "fontFamily", "object-key-init"),
      fontweight: cc11001100_hook("fontweight", "fontWeight", "object-key-init"),
      fontstyle: cc11001100_hook("fontstyle", "fontStyle", "object-key-init"),
      fontsize: cc11001100_hook("fontsize", "fontSize", "object-key-init")
    },
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setChildTeXclass, "object-key-init")
  }), "assign");
  a.merror = cc11001100_hook("a.merror", a.mbase.Subclass({
    type: cc11001100_hook("type", "merror", "object-key-init"),
    inferRow: cc11001100_hook("inferRow", true, "object-key-init"),
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init")
  }), "assign");
  a.mpadded = cc11001100_hook("a.mpadded", a.mbase.Subclass({
    type: cc11001100_hook("type", "mpadded", "object-key-init"),
    inferRow: cc11001100_hook("inferRow", true, "object-key-init"),
    isSpacelike: cc11001100_hook("isSpacelike", a.mbase.childrenSpacelike, "object-key-init"),
    isEmbellished: cc11001100_hook("isEmbellished", a.mbase.childEmbellished, "object-key-init"),
    Core: cc11001100_hook("Core", a.mbase.childCore, "object-key-init"),
    CoreMO: cc11001100_hook("CoreMO", a.mbase.childCoreMO, "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      width: cc11001100_hook("width", "", "object-key-init"),
      height: cc11001100_hook("height", "", "object-key-init"),
      depth: cc11001100_hook("depth", "", "object-key-init"),
      lspace: cc11001100_hook("lspace", 0, "object-key-init"),
      voffset: cc11001100_hook("voffset", 0, "object-key-init")
    },
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setChildTeXclass, "object-key-init")
  }), "assign");
  a.mphantom = cc11001100_hook("a.mphantom", a.mbase.Subclass({
    type: cc11001100_hook("type", "mphantom", "object-key-init"),
    texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init"),
    inferRow: cc11001100_hook("inferRow", true, "object-key-init"),
    isSpacelike: cc11001100_hook("isSpacelike", a.mbase.childrenSpacelike, "object-key-init"),
    isEmbellished: cc11001100_hook("isEmbellished", a.mbase.childEmbellished, "object-key-init"),
    Core: cc11001100_hook("Core", a.mbase.childCore, "object-key-init"),
    CoreMO: cc11001100_hook("CoreMO", a.mbase.childCoreMO, "object-key-init"),
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setChildTeXclass, "object-key-init")
  }), "assign");
  a.mfenced = cc11001100_hook("a.mfenced", a.mbase.Subclass({
    type: cc11001100_hook("type", "mfenced", "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      open: cc11001100_hook("open", "(", "object-key-init"),
      close: cc11001100_hook("close", ")", "object-key-init"),
      separators: cc11001100_hook("separators", ",", "object-key-init")
    },
    addFakeNodes: function () {
      var f = cc11001100_hook("f", this.getValues("open", "close", "separators"), "var-init");
      f.open = cc11001100_hook("f.open", f.open.replace(/[ \t\n\r]/g, ""), "assign");
      f.close = cc11001100_hook("f.close", f.close.replace(/[ \t\n\r]/g, ""), "assign");
      f.separators = cc11001100_hook("f.separators", f.separators.replace(/[ \t\n\r]/g, ""), "assign");
      if (f.open !== "") {
        this.SetData("open", a.mo(f.open).With({
          fence: cc11001100_hook("fence", true, "object-key-init"),
          form: cc11001100_hook("form", a.FORM.PREFIX, "object-key-init"),
          texClass: cc11001100_hook("texClass", a.TEXCLASS.OPEN, "object-key-init")
        }));
        this.data.open.useMMLspacing = cc11001100_hook("this.data.open.useMMLspacing", 0, "assign");
      }
      if (f.separators !== "") {
        while (f.separators.length < this.data.length) {
          f.separators += cc11001100_hook("f.separators", f.separators.charAt(f.separators.length - 1), "assign");
        }
        for (var g = cc11001100_hook("g", 1, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); g < e; g++) {
          if (this.data[g]) {
            this.SetData("sep" + g, a.mo(f.separators.charAt(g - 1)).With({
              separator: cc11001100_hook("separator", true, "object-key-init")
            }));
            this.data["sep" + g].useMMLspacing = cc11001100_hook("this.data[\"sep\" + g].useMMLspacing", 0, "assign");
          }
        }
      }
      if (f.close !== "") {
        this.SetData("close", a.mo(f.close).With({
          fence: cc11001100_hook("fence", true, "object-key-init"),
          form: cc11001100_hook("form", a.FORM.POSTFIX, "object-key-init"),
          texClass: cc11001100_hook("texClass", a.TEXCLASS.CLOSE, "object-key-init")
        }));
        this.data.close.useMMLspacing = cc11001100_hook("this.data.close.useMMLspacing", 0, "assign");
      }
    },
    texClass: cc11001100_hook("texClass", a.TEXCLASS.OPEN, "object-key-init"),
    setTeXclass: function (g) {
      this.addFakeNodes();
      this.getPrevClass(g);
      if (this.data.open) {
        g = cc11001100_hook("g", this.data.open.setTeXclass(g), "assign");
      }
      if (this.data[0]) {
        g = cc11001100_hook("g", this.data[0].setTeXclass(g), "assign");
      }
      for (var f = cc11001100_hook("f", 1, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); f < e; f++) {
        if (this.data["sep" + f]) {
          g = cc11001100_hook("g", this.data["sep" + f].setTeXclass(g), "assign");
        }
        if (this.data[f]) {
          g = cc11001100_hook("g", this.data[f].setTeXclass(g), "assign");
        }
      }
      if (this.data.close) {
        g = cc11001100_hook("g", this.data.close.setTeXclass(g), "assign");
      }
      this.updateTeXclass(this.data.open);
      this.texClass = cc11001100_hook("this.texClass", a.TEXCLASS.INNER, "assign");
      return g;
    }
  }), "assign");
  a.menclose = cc11001100_hook("a.menclose", a.mbase.Subclass({
    type: cc11001100_hook("type", "menclose", "object-key-init"),
    inferRow: cc11001100_hook("inferRow", true, "object-key-init"),
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      notation: cc11001100_hook("notation", a.NOTATION.LONGDIV, "object-key-init"),
      texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init")
    },
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setSeparateTeXclasses, "object-key-init")
  }), "assign");
  a.msubsup = cc11001100_hook("a.msubsup", a.mbase.Subclass({
    type: cc11001100_hook("type", "msubsup", "object-key-init"),
    base: cc11001100_hook("base", 0, "object-key-init"),
    sub: cc11001100_hook("sub", 1, "object-key-init"),
    sup: cc11001100_hook("sup", 2, "object-key-init"),
    isEmbellished: cc11001100_hook("isEmbellished", a.mbase.childEmbellished, "object-key-init"),
    Core: cc11001100_hook("Core", a.mbase.childCore, "object-key-init"),
    CoreMO: cc11001100_hook("CoreMO", a.mbase.childCoreMO, "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      subscriptshift: cc11001100_hook("subscriptshift", "", "object-key-init"),
      superscriptshift: cc11001100_hook("superscriptshift", "", "object-key-init"),
      texClass: cc11001100_hook("texClass", a.AUTO, "object-key-init")
    },
    autoDefault: function (e) {
      if (e === "texClass") {
        return this.isEmbellished() ? this.CoreMO().Get(e) : a.TEXCLASS.ORD;
      }
      return 0;
    },
    adjustChild_displaystyle: function (e) {
      if (e > 0) {
        return false;
      }
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function (f) {
      var e = cc11001100_hook("e", this.Get("scriptlevel"), "var-init");
      if (f > 0) {
        e++;
      }
      return e;
    },
    adjustChild_texprimestyle: function (e) {
      if (e === this.sub) {
        return true;
      }
      return this.Get("texprimestyle");
    },
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setBaseTeXclasses, "object-key-init")
  }), "assign");
  a.msub = cc11001100_hook("a.msub", a.msubsup.Subclass({
    type: cc11001100_hook("type", "msub", "object-key-init")
  }), "assign");
  a.msup = cc11001100_hook("a.msup", a.msubsup.Subclass({
    type: cc11001100_hook("type", "msup", "object-key-init"),
    sub: cc11001100_hook("sub", 2, "object-key-init"),
    sup: cc11001100_hook("sup", 1, "object-key-init")
  }), "assign");
  a.mmultiscripts = cc11001100_hook("a.mmultiscripts", a.msubsup.Subclass({
    type: cc11001100_hook("type", "mmultiscripts", "object-key-init"),
    adjustChild_texprimestyle: function (e) {
      if (e % 2 === 1) {
        return true;
      }
      return this.Get("texprimestyle");
    }
  }), "assign");
  a.mprescripts = cc11001100_hook("a.mprescripts", a.mbase.Subclass({
    type: cc11001100_hook("type", "mprescripts", "object-key-init")
  }), "assign");
  a.none = cc11001100_hook("a.none", a.mbase.Subclass({
    type: cc11001100_hook("type", "none", "object-key-init")
  }), "assign");
  a.munderover = cc11001100_hook("a.munderover", a.mbase.Subclass({
    type: cc11001100_hook("type", "munderover", "object-key-init"),
    base: cc11001100_hook("base", 0, "object-key-init"),
    under: cc11001100_hook("under", 1, "object-key-init"),
    over: cc11001100_hook("over", 2, "object-key-init"),
    sub: cc11001100_hook("sub", 1, "object-key-init"),
    sup: cc11001100_hook("sup", 2, "object-key-init"),
    ACCENTS: cc11001100_hook("ACCENTS", ["", "accentunder", "accent"], "object-key-init"),
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    isEmbellished: cc11001100_hook("isEmbellished", a.mbase.childEmbellished, "object-key-init"),
    Core: cc11001100_hook("Core", a.mbase.childCore, "object-key-init"),
    CoreMO: cc11001100_hook("CoreMO", a.mbase.childCoreMO, "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      accent: cc11001100_hook("accent", a.AUTO, "object-key-init"),
      accentunder: cc11001100_hook("accentunder", a.AUTO, "object-key-init"),
      align: cc11001100_hook("align", a.ALIGN.CENTER, "object-key-init"),
      texClass: cc11001100_hook("texClass", a.AUTO, "object-key-init"),
      subscriptshift: cc11001100_hook("subscriptshift", "", "object-key-init"),
      superscriptshift: cc11001100_hook("superscriptshift", "", "object-key-init")
    },
    autoDefault: function (e) {
      if (e === "texClass") {
        return this.isEmbellished() ? this.CoreMO().Get(e) : a.TEXCLASS.ORD;
      }
      if (e === "accent" && this.data[this.over]) {
        return this.data[this.over].CoreMO().Get("accent");
      }
      if (e === "accentunder" && this.data[this.under]) {
        return this.data[this.under].CoreMO().Get("accent");
      }
      return false;
    },
    adjustChild_displaystyle: function (e) {
      if (e > 0) {
        return false;
      }
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function (g) {
      var f = cc11001100_hook("f", this.Get("scriptlevel"), "var-init");
      var e = cc11001100_hook("e", this.data[this.base] && !this.Get("displaystyle") && this.data[this.base].CoreMO().Get("movablelimits"), "var-init");
      if (g == this.under && (e || !this.Get("accentunder"))) {
        f++;
      }
      if (g == this.over && (e || !this.Get("accent"))) {
        f++;
      }
      return f;
    },
    adjustChild_texprimestyle: function (e) {
      if (e === this.base && this.data[this.over]) {
        return true;
      }
      return this.Get("texprimestyle");
    },
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setBaseTeXclasses, "object-key-init")
  }), "assign");
  a.munder = cc11001100_hook("a.munder", a.munderover.Subclass({
    type: cc11001100_hook("type", "munder", "object-key-init")
  }), "assign");
  a.mover = cc11001100_hook("a.mover", a.munderover.Subclass({
    type: cc11001100_hook("type", "mover", "object-key-init"),
    over: cc11001100_hook("over", 1, "object-key-init"),
    under: cc11001100_hook("under", 2, "object-key-init"),
    sup: cc11001100_hook("sup", 1, "object-key-init"),
    sub: cc11001100_hook("sub", 2, "object-key-init"),
    ACCENTS: cc11001100_hook("ACCENTS", ["", "accent", "accentunder"], "object-key-init")
  }), "assign");
  a.mtable = cc11001100_hook("a.mtable", a.mbase.Subclass({
    type: cc11001100_hook("type", "mtable", "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      align: cc11001100_hook("align", a.ALIGN.AXIS, "object-key-init"),
      rowalign: cc11001100_hook("rowalign", a.ALIGN.BASELINE, "object-key-init"),
      columnalign: cc11001100_hook("columnalign", a.ALIGN.CENTER, "object-key-init"),
      groupalign: cc11001100_hook("groupalign", "{left}", "object-key-init"),
      alignmentscope: cc11001100_hook("alignmentscope", true, "object-key-init"),
      columnwidth: cc11001100_hook("columnwidth", a.WIDTH.AUTO, "object-key-init"),
      width: cc11001100_hook("width", a.WIDTH.AUTO, "object-key-init"),
      rowspacing: cc11001100_hook("rowspacing", "1ex", "object-key-init"),
      columnspacing: cc11001100_hook("columnspacing", ".8em", "object-key-init"),
      rowlines: cc11001100_hook("rowlines", a.LINES.NONE, "object-key-init"),
      columnlines: cc11001100_hook("columnlines", a.LINES.NONE, "object-key-init"),
      frame: cc11001100_hook("frame", a.LINES.NONE, "object-key-init"),
      framespacing: cc11001100_hook("framespacing", "0.4em 0.5ex", "object-key-init"),
      equalrows: cc11001100_hook("equalrows", false, "object-key-init"),
      equalcolumns: cc11001100_hook("equalcolumns", false, "object-key-init"),
      displaystyle: cc11001100_hook("displaystyle", false, "object-key-init"),
      side: cc11001100_hook("side", a.SIDE.RIGHT, "object-key-init"),
      minlabelspacing: cc11001100_hook("minlabelspacing", "0.8em", "object-key-init"),
      texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init"),
      useHeight: cc11001100_hook("useHeight", 1, "object-key-init")
    },
    adjustChild_displaystyle: function () {
      return this.displaystyle != null ? this.displaystyle : this.defaults.displaystyle;
    },
    inheritFromMe: cc11001100_hook("inheritFromMe", true, "object-key-init"),
    noInherit: {
      mover: {
        align: cc11001100_hook("align", true, "object-key-init")
      },
      munder: {
        align: cc11001100_hook("align", true, "object-key-init")
      },
      munderover: {
        align: cc11001100_hook("align", true, "object-key-init")
      },
      mtable: {
        align: cc11001100_hook("align", true, "object-key-init"),
        rowalign: cc11001100_hook("rowalign", true, "object-key-init"),
        columnalign: cc11001100_hook("columnalign", true, "object-key-init"),
        groupalign: cc11001100_hook("groupalign", true, "object-key-init"),
        alignmentscope: cc11001100_hook("alignmentscope", true, "object-key-init"),
        columnwidth: cc11001100_hook("columnwidth", true, "object-key-init"),
        width: cc11001100_hook("width", true, "object-key-init"),
        rowspacing: cc11001100_hook("rowspacing", true, "object-key-init"),
        columnspacing: cc11001100_hook("columnspacing", true, "object-key-init"),
        rowlines: cc11001100_hook("rowlines", true, "object-key-init"),
        columnlines: cc11001100_hook("columnlines", true, "object-key-init"),
        frame: cc11001100_hook("frame", true, "object-key-init"),
        framespacing: cc11001100_hook("framespacing", true, "object-key-init"),
        equalrows: cc11001100_hook("equalrows", true, "object-key-init"),
        equalcolumns: cc11001100_hook("equalcolumns", true, "object-key-init"),
        displaystyle: cc11001100_hook("displaystyle", true, "object-key-init"),
        side: cc11001100_hook("side", true, "object-key-init"),
        minlabelspacing: cc11001100_hook("minlabelspacing", true, "object-key-init"),
        texClass: cc11001100_hook("texClass", true, "object-key-init"),
        useHeight: cc11001100_hook("useHeight", 1, "object-key-init")
      }
    },
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    Append: function () {
      for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", arguments.length, "var-init"); f < e; f++) {
        if (!(arguments[f] instanceof a.mtr || arguments[f] instanceof a.mlabeledtr)) {
          arguments[f] = cc11001100_hook("arguments[f]", a.mtr(arguments[f]), "assign");
        }
      }
      this.SUPER(arguments).Append.apply(this, arguments);
    },
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setSeparateTeXclasses, "object-key-init")
  }), "assign");
  a.mtr = cc11001100_hook("a.mtr", a.mbase.Subclass({
    type: cc11001100_hook("type", "mtr", "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      rowalign: cc11001100_hook("rowalign", a.INHERIT, "object-key-init"),
      columnalign: cc11001100_hook("columnalign", a.INHERIT, "object-key-init"),
      groupalign: cc11001100_hook("groupalign", a.INHERIT, "object-key-init")
    },
    inheritFromMe: cc11001100_hook("inheritFromMe", true, "object-key-init"),
    noInherit: {
      mrow: {
        rowalign: cc11001100_hook("rowalign", true, "object-key-init"),
        columnalign: cc11001100_hook("columnalign", true, "object-key-init"),
        groupalign: cc11001100_hook("groupalign", true, "object-key-init")
      },
      mtable: {
        rowalign: cc11001100_hook("rowalign", true, "object-key-init"),
        columnalign: cc11001100_hook("columnalign", true, "object-key-init"),
        groupalign: cc11001100_hook("groupalign", true, "object-key-init")
      }
    },
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    Append: function () {
      for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", arguments.length, "var-init"); f < e; f++) {
        if (!(arguments[f] instanceof a.mtd)) {
          arguments[f] = cc11001100_hook("arguments[f]", a.mtd(arguments[f]), "assign");
        }
      }
      this.SUPER(arguments).Append.apply(this, arguments);
    },
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setSeparateTeXclasses, "object-key-init")
  }), "assign");
  a.mtd = cc11001100_hook("a.mtd", a.mbase.Subclass({
    type: cc11001100_hook("type", "mtd", "object-key-init"),
    inferRow: cc11001100_hook("inferRow", true, "object-key-init"),
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    isEmbellished: cc11001100_hook("isEmbellished", a.mbase.childEmbellished, "object-key-init"),
    Core: cc11001100_hook("Core", a.mbase.childCore, "object-key-init"),
    CoreMO: cc11001100_hook("CoreMO", a.mbase.childCoreMO, "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      rowspan: cc11001100_hook("rowspan", 1, "object-key-init"),
      columnspan: cc11001100_hook("columnspan", 1, "object-key-init"),
      rowalign: cc11001100_hook("rowalign", a.INHERIT, "object-key-init"),
      columnalign: cc11001100_hook("columnalign", a.INHERIT, "object-key-init"),
      groupalign: cc11001100_hook("groupalign", a.INHERIT, "object-key-init")
    },
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setSeparateTeXclasses, "object-key-init")
  }), "assign");
  a.maligngroup = cc11001100_hook("a.maligngroup", a.mbase.Subclass({
    type: cc11001100_hook("type", "maligngroup", "object-key-init"),
    isSpacelike: function () {
      return true;
    },
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      groupalign: cc11001100_hook("groupalign", a.INHERIT, "object-key-init")
    },
    inheritFromMe: cc11001100_hook("inheritFromMe", true, "object-key-init"),
    noInherit: {
      mrow: {
        groupalign: cc11001100_hook("groupalign", true, "object-key-init")
      },
      mtable: {
        groupalign: cc11001100_hook("groupalign", true, "object-key-init")
      }
    }
  }), "assign");
  a.malignmark = cc11001100_hook("a.malignmark", a.mbase.Subclass({
    type: cc11001100_hook("type", "malignmark", "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      edge: cc11001100_hook("edge", a.SIDE.LEFT, "object-key-init")
    },
    isSpacelike: function () {
      return true;
    }
  }), "assign");
  a.mlabeledtr = cc11001100_hook("a.mlabeledtr", a.mtr.Subclass({
    type: cc11001100_hook("type", "mlabeledtr", "object-key-init")
  }), "assign");
  a.maction = cc11001100_hook("a.maction", a.mbase.Subclass({
    type: cc11001100_hook("type", "maction", "object-key-init"),
    defaults: {
      mathbackground: cc11001100_hook("mathbackground", a.INHERIT, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", a.INHERIT, "object-key-init"),
      actiontype: cc11001100_hook("actiontype", a.ACTIONTYPE.TOGGLE, "object-key-init"),
      selection: cc11001100_hook("selection", 1, "object-key-init")
    },
    selected: function () {
      return this.data[this.Get("selection") - 1] || a.NULL;
    },
    isEmbellished: function () {
      return this.selected().isEmbellished();
    },
    isSpacelike: function () {
      return this.selected().isSpacelike();
    },
    Core: function () {
      return this.selected().Core();
    },
    CoreMO: function () {
      return this.selected().CoreMO();
    },
    setTeXclass: function (f) {
      if (this.Get("actiontype") === a.ACTIONTYPE.TOOLTIP && this.data[1]) {
        this.data[1].setTeXclass();
      }
      var e = cc11001100_hook("e", this.selected(), "var-init");
      f = cc11001100_hook("f", e.setTeXclass(f), "assign");
      this.updateTeXclass(e);
      return f;
    }
  }), "assign");
  a.semantics = cc11001100_hook("a.semantics", a.mbase.Subclass({
    type: cc11001100_hook("type", "semantics", "object-key-init"),
    notParent: cc11001100_hook("notParent", true, "object-key-init"),
    isEmbellished: cc11001100_hook("isEmbellished", a.mbase.childEmbellished, "object-key-init"),
    Core: cc11001100_hook("Core", a.mbase.childCore, "object-key-init"),
    CoreMO: cc11001100_hook("CoreMO", a.mbase.childCoreMO, "object-key-init"),
    defaults: {
      definitionURL: cc11001100_hook("definitionURL", null, "object-key-init"),
      encoding: cc11001100_hook("encoding", null, "object-key-init")
    },
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setChildTeXclass, "object-key-init"),
    getAnnotation: function (g) {
      var l = cc11001100_hook("l", MathJax.Hub.config.MathMenu.semanticsAnnotations[g], "var-init");
      if (l) {
        for (var h = cc11001100_hook("h", 0, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); h < e; h++) {
          var k = cc11001100_hook("k", this.data[h].Get("encoding"), "var-init");
          if (k) {
            for (var f = cc11001100_hook("f", 0, "var-init"), o = cc11001100_hook("o", l.length, "var-init"); f < o; f++) {
              if (l[f] === k) {
                return this.data[h];
              }
            }
          }
        }
      }
      return null;
    }
  }), "assign");
  a.annotation = cc11001100_hook("a.annotation", a.mbase.Subclass({
    type: cc11001100_hook("type", "annotation", "object-key-init"),
    isChars: cc11001100_hook("isChars", true, "object-key-init"),
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    defaults: {
      definitionURL: cc11001100_hook("definitionURL", null, "object-key-init"),
      encoding: cc11001100_hook("encoding", null, "object-key-init"),
      cd: cc11001100_hook("cd", "mathmlkeys", "object-key-init"),
      name: cc11001100_hook("name", "", "object-key-init"),
      src: cc11001100_hook("src", null, "object-key-init")
    }
  }), "assign");
  a["annotation-xml"] = cc11001100_hook("a[\"annotation-xml\"]", a.mbase.Subclass({
    type: cc11001100_hook("type", "annotation-xml", "object-key-init"),
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    defaults: {
      definitionURL: cc11001100_hook("definitionURL", null, "object-key-init"),
      encoding: cc11001100_hook("encoding", null, "object-key-init"),
      cd: cc11001100_hook("cd", "mathmlkeys", "object-key-init"),
      name: cc11001100_hook("name", "", "object-key-init"),
      src: cc11001100_hook("src", null, "object-key-init")
    }
  }), "assign");
  a.math = cc11001100_hook("a.math", a.mstyle.Subclass({
    type: cc11001100_hook("type", "math", "object-key-init"),
    defaults: {
      mathvariant: cc11001100_hook("mathvariant", a.VARIANT.NORMAL, "object-key-init"),
      mathsize: cc11001100_hook("mathsize", a.SIZE.NORMAL, "object-key-init"),
      mathcolor: cc11001100_hook("mathcolor", "", "object-key-init"),
      mathbackground: cc11001100_hook("mathbackground", a.COLOR.TRANSPARENT, "object-key-init"),
      dir: cc11001100_hook("dir", "ltr", "object-key-init"),
      scriptlevel: cc11001100_hook("scriptlevel", 0, "object-key-init"),
      displaystyle: cc11001100_hook("displaystyle", a.AUTO, "object-key-init"),
      display: cc11001100_hook("display", "inline", "object-key-init"),
      maxwidth: cc11001100_hook("maxwidth", "", "object-key-init"),
      overflow: cc11001100_hook("overflow", a.OVERFLOW.LINEBREAK, "object-key-init"),
      altimg: cc11001100_hook("altimg", "", "object-key-init"),
      "altimg-width": cc11001100_hook("altimg-width", "", "object-key-init"),
      "altimg-height": cc11001100_hook("altimg-height", "", "object-key-init"),
      "altimg-valign": cc11001100_hook("altimg-valign", "", "object-key-init"),
      alttext: cc11001100_hook("alttext", "", "object-key-init"),
      cdgroup: cc11001100_hook("cdgroup", "", "object-key-init"),
      scriptsizemultiplier: cc11001100_hook("scriptsizemultiplier", Math.sqrt(1 / 2), "object-key-init"),
      scriptminsize: cc11001100_hook("scriptminsize", "8px", "object-key-init"),
      infixlinebreakstyle: cc11001100_hook("infixlinebreakstyle", a.LINEBREAKSTYLE.BEFORE, "object-key-init"),
      lineleading: cc11001100_hook("lineleading", "1ex", "object-key-init"),
      indentshift: cc11001100_hook("indentshift", "auto", "object-key-init"),
      indentalign: cc11001100_hook("indentalign", a.INDENTALIGN.AUTO, "object-key-init"),
      indentalignfirst: cc11001100_hook("indentalignfirst", a.INDENTALIGN.INDENTALIGN, "object-key-init"),
      indentshiftfirst: cc11001100_hook("indentshiftfirst", a.INDENTSHIFT.INDENTSHIFT, "object-key-init"),
      indentalignlast: cc11001100_hook("indentalignlast", a.INDENTALIGN.INDENTALIGN, "object-key-init"),
      indentshiftlast: cc11001100_hook("indentshiftlast", a.INDENTSHIFT.INDENTSHIFT, "object-key-init"),
      decimalseparator: cc11001100_hook("decimalseparator", ".", "object-key-init"),
      texprimestyle: cc11001100_hook("texprimestyle", false, "object-key-init")
    },
    autoDefault: function (e) {
      if (e === "displaystyle") {
        return this.Get("display") === "block";
      }
      return "";
    },
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    setTeXclass: cc11001100_hook("setTeXclass", a.mbase.setChildTeXclass, "object-key-init"),
    getAnnotation: function (e) {
      if (this.data.length != 1) {
        return null;
      }
      return this.data[0].getAnnotation(e);
    }
  }), "assign");
  a.chars = cc11001100_hook("a.chars", a.mbase.Subclass({
    type: cc11001100_hook("type", "chars", "object-key-init"),
    Append: function () {
      this.data.push.apply(this.data, arguments);
    },
    value: function () {
      return this.data.join("");
    },
    toString: function () {
      return this.data.join("");
    }
  }), "assign");
  a.entity = cc11001100_hook("a.entity", a.mbase.Subclass({
    type: cc11001100_hook("type", "entity", "object-key-init"),
    Append: function () {
      this.data.push.apply(this.data, arguments);
    },
    value: function () {
      if (this.data[0].substr(0, 2) === "#x") {
        return parseInt(this.data[0].substr(2), 16);
      } else {
        if (this.data[0].substr(0, 1) === "#") {
          return parseInt(this.data[0].substr(1));
        } else {
          return 0;
        }
      }
    },
    toString: function () {
      var e = cc11001100_hook("e", this.value(), "var-init");
      if (e <= 65535) {
        return String.fromCharCode(e);
      }
      e -= cc11001100_hook("e", 65536, "assign");
      return String.fromCharCode((e >> 10) + 55296) + String.fromCharCode((e & 1023) + 56320);
    }
  }), "assign");
  a.xml = cc11001100_hook("a.xml", a.mbase.Subclass({
    type: cc11001100_hook("type", "xml", "object-key-init"),
    Init: function () {
      this.div = cc11001100_hook("this.div", document.createElement("div"), "assign");
      return this.SUPER(arguments).Init.apply(this, arguments);
    },
    Append: function () {
      for (var f = cc11001100_hook("f", 0, "var-init"), e = cc11001100_hook("e", arguments.length, "var-init"); f < e; f++) {
        var g = cc11001100_hook("g", this.Import(arguments[f]), "var-init");
        this.data.push(g);
        this.div.appendChild(g);
      }
    },
    Import: function (j) {
      if (document.importNode) {
        return document.importNode(j, true);
      }
      var f, g, e;
      if (j.nodeType === 1) {
        f = cc11001100_hook("f", document.createElement(j.nodeName), "assign");
        for (g = cc11001100_hook("g", 0, "assign"), e = cc11001100_hook("e", j.attributes.length, "assign"); g < e; g++) {
          var h = cc11001100_hook("h", j.attributes[g], "var-init");
          if (h.specified && h.nodeValue != null && h.nodeValue != "") {
            f.setAttribute(h.nodeName, h.nodeValue);
          }
          if (h.nodeName === "style") {
            f.style.cssText = cc11001100_hook("f.style.cssText", h.nodeValue, "assign");
          }
        }
        if (j.className) {
          f.className = cc11001100_hook("f.className", j.className, "assign");
        }
      } else {
        if (j.nodeType === 3 || j.nodeType === 4) {
          f = cc11001100_hook("f", document.createTextNode(j.nodeValue), "assign");
        } else {
          if (j.nodeType === 8) {
            f = cc11001100_hook("f", document.createComment(j.nodeValue), "assign");
          } else {
            return document.createTextNode("");
          }
        }
      }
      for (g = cc11001100_hook("g", 0, "assign"), e = cc11001100_hook("e", j.childNodes.length, "assign"); g < e; g++) {
        f.appendChild(this.Import(j.childNodes[g]));
      }
      return f;
    },
    value: function () {
      return this.div;
    },
    toString: function () {
      return this.div.innerHTML;
    }
  }), "assign");
  a.TeXAtom = cc11001100_hook("a.TeXAtom", a.mbase.Subclass({
    type: cc11001100_hook("type", "texatom", "object-key-init"),
    linebreakContainer: cc11001100_hook("linebreakContainer", true, "object-key-init"),
    inferRow: cc11001100_hook("inferRow", true, "object-key-init"),
    notParent: cc11001100_hook("notParent", true, "object-key-init"),
    texClass: cc11001100_hook("texClass", a.TEXCLASS.ORD, "object-key-init"),
    Core: cc11001100_hook("Core", a.mbase.childCore, "object-key-init"),
    CoreMO: cc11001100_hook("CoreMO", a.mbase.childCoreMO, "object-key-init"),
    isEmbellished: cc11001100_hook("isEmbellished", a.mbase.childEmbellished, "object-key-init"),
    setTeXclass: function (e) {
      this.data[0].setTeXclass();
      return this.adjustTeXclass(e);
    },
    adjustTeXclass: cc11001100_hook("adjustTeXclass", a.mo.prototype.adjustTeXclass, "object-key-init")
  }), "assign");
  a.NULL = cc11001100_hook("a.NULL", a.mbase().With({
    type: cc11001100_hook("type", "null", "object-key-init")
  }), "assign");
  var b = cc11001100_hook("b", a.TEXCLASS, "var-init");
  var d = cc11001100_hook("d", {
    ORD: cc11001100_hook("ORD", [0, 0, b.ORD], "object-key-init"),
    ORD11: cc11001100_hook("ORD11", [1, 1, b.ORD], "object-key-init"),
    ORD21: cc11001100_hook("ORD21", [2, 1, b.ORD], "object-key-init"),
    ORD02: cc11001100_hook("ORD02", [0, 2, b.ORD], "object-key-init"),
    ORD55: cc11001100_hook("ORD55", [5, 5, b.ORD], "object-key-init"),
    OP: cc11001100_hook("OP", [1, 2, b.OP, {
      largeop: cc11001100_hook("largeop", true, "object-key-init"),
      movablelimits: cc11001100_hook("movablelimits", true, "object-key-init"),
      symmetric: cc11001100_hook("symmetric", true, "object-key-init")
    }], "object-key-init"),
    OPFIXED: cc11001100_hook("OPFIXED", [1, 2, b.OP, {
      largeop: cc11001100_hook("largeop", true, "object-key-init"),
      movablelimits: cc11001100_hook("movablelimits", true, "object-key-init")
    }], "object-key-init"),
    INTEGRAL: cc11001100_hook("INTEGRAL", [0, 1, b.OP, {
      largeop: cc11001100_hook("largeop", true, "object-key-init"),
      symmetric: cc11001100_hook("symmetric", true, "object-key-init")
    }], "object-key-init"),
    INTEGRAL2: cc11001100_hook("INTEGRAL2", [1, 2, b.OP, {
      largeop: cc11001100_hook("largeop", true, "object-key-init"),
      symmetric: cc11001100_hook("symmetric", true, "object-key-init")
    }], "object-key-init"),
    BIN3: cc11001100_hook("BIN3", [3, 3, b.BIN], "object-key-init"),
    BIN4: cc11001100_hook("BIN4", [4, 4, b.BIN], "object-key-init"),
    BIN01: cc11001100_hook("BIN01", [0, 1, b.BIN], "object-key-init"),
    BIN5: cc11001100_hook("BIN5", [5, 5, b.BIN], "object-key-init"),
    TALLBIN: cc11001100_hook("TALLBIN", [4, 4, b.BIN, {
      stretchy: cc11001100_hook("stretchy", true, "object-key-init")
    }], "object-key-init"),
    BINOP: cc11001100_hook("BINOP", [4, 4, b.BIN, {
      largeop: cc11001100_hook("largeop", true, "object-key-init"),
      movablelimits: cc11001100_hook("movablelimits", true, "object-key-init")
    }], "object-key-init"),
    REL: cc11001100_hook("REL", [5, 5, b.REL], "object-key-init"),
    REL1: cc11001100_hook("REL1", [1, 1, b.REL, {
      stretchy: cc11001100_hook("stretchy", true, "object-key-init")
    }], "object-key-init"),
    REL4: cc11001100_hook("REL4", [4, 4, b.REL], "object-key-init"),
    RELSTRETCH: cc11001100_hook("RELSTRETCH", [5, 5, b.REL, {
      stretchy: cc11001100_hook("stretchy", true, "object-key-init")
    }], "object-key-init"),
    RELACCENT: cc11001100_hook("RELACCENT", [5, 5, b.REL, {
      accent: cc11001100_hook("accent", true, "object-key-init")
    }], "object-key-init"),
    WIDEREL: cc11001100_hook("WIDEREL", [5, 5, b.REL, {
      accent: cc11001100_hook("accent", true, "object-key-init"),
      stretchy: cc11001100_hook("stretchy", true, "object-key-init")
    }], "object-key-init"),
    OPEN: cc11001100_hook("OPEN", [0, 0, b.OPEN, {
      fence: cc11001100_hook("fence", true, "object-key-init"),
      stretchy: cc11001100_hook("stretchy", true, "object-key-init"),
      symmetric: cc11001100_hook("symmetric", true, "object-key-init")
    }], "object-key-init"),
    CLOSE: cc11001100_hook("CLOSE", [0, 0, b.CLOSE, {
      fence: cc11001100_hook("fence", true, "object-key-init"),
      stretchy: cc11001100_hook("stretchy", true, "object-key-init"),
      symmetric: cc11001100_hook("symmetric", true, "object-key-init")
    }], "object-key-init"),
    INNER: cc11001100_hook("INNER", [0, 0, b.INNER], "object-key-init"),
    PUNCT: cc11001100_hook("PUNCT", [0, 3, b.PUNCT], "object-key-init"),
    ACCENT: cc11001100_hook("ACCENT", [0, 0, b.ORD, {
      accent: cc11001100_hook("accent", true, "object-key-init")
    }], "object-key-init"),
    WIDEACCENT: cc11001100_hook("WIDEACCENT", [0, 0, b.ORD, {
      accent: cc11001100_hook("accent", true, "object-key-init"),
      stretchy: cc11001100_hook("stretchy", true, "object-key-init")
    }], "object-key-init")
  }, "var-init");
  a.mo.Augment({
    SPACE: cc11001100_hook("SPACE", ["0em", "0.1111em", "0.1667em", "0.2222em", "0.2667em", "0.3333em"], "object-key-init"),
    RANGES: cc11001100_hook("RANGES", [[32, 127, b.REL, "BasicLatin"], [160, 255, b.ORD, "Latin1Supplement"], [256, 383, b.ORD], [384, 591, b.ORD], [688, 767, b.ORD, "SpacingModLetters"], [768, 879, b.ORD, "CombDiacritMarks"], [880, 1023, b.ORD, "GreekAndCoptic"], [7680, 7935, b.ORD], [8192, 8303, b.PUNCT, "GeneralPunctuation"], [8304, 8351, b.ORD], [8352, 8399, b.ORD], [8400, 8447, b.ORD, "CombDiactForSymbols"], [8448, 8527, b.ORD, "LetterlikeSymbols"], [8528, 8591, b.ORD], [8592, 8703, b.REL, "Arrows"], [8704, 8959, b.BIN, "MathOperators"], [8960, 9215, b.ORD, "MiscTechnical"], [9312, 9471, b.ORD], [9472, 9631, b.ORD], [9632, 9727, b.ORD, "GeometricShapes"], [9984, 10175, b.ORD, "Dingbats"], [10176, 10223, b.ORD, "MiscMathSymbolsA"], [10224, 10239, b.REL, "SupplementalArrowsA"], [10496, 10623, b.REL, "SupplementalArrowsB"], [10624, 10751, b.ORD, "MiscMathSymbolsB"], [10752, 11007, b.BIN, "SuppMathOperators"], [11008, 11263, b.ORD, "MiscSymbolsAndArrows"], [119808, 120831, b.ORD]], "object-key-init"),
    OPTABLE: {
      prefix: {
        "\u2200": cc11001100_hook("\u2200", d.ORD21, "object-key-init"),
        "\u2202": cc11001100_hook("\u2202", d.ORD21, "object-key-init"),
        "\u2203": cc11001100_hook("\u2203", d.ORD21, "object-key-init"),
        "\u2207": cc11001100_hook("\u2207", d.ORD21, "object-key-init"),
        "\u220F": cc11001100_hook("\u220F", d.OP, "object-key-init"),
        "\u2210": cc11001100_hook("\u2210", d.OP, "object-key-init"),
        "\u2211": cc11001100_hook("\u2211", d.OP, "object-key-init"),
        "\u2212": cc11001100_hook("\u2212", d.BIN01, "object-key-init"),
        "\u2213": cc11001100_hook("\u2213", d.BIN01, "object-key-init"),
        "\u221A": cc11001100_hook("\u221A", [1, 1, b.ORD, {
          stretchy: cc11001100_hook("stretchy", true, "object-key-init")
        }], "object-key-init"),
        "\u2220": cc11001100_hook("\u2220", d.ORD, "object-key-init"),
        "\u222B": cc11001100_hook("\u222B", d.INTEGRAL, "object-key-init"),
        "\u222E": cc11001100_hook("\u222E", d.INTEGRAL, "object-key-init"),
        "\u22C0": cc11001100_hook("\u22C0", d.OP, "object-key-init"),
        "\u22C1": cc11001100_hook("\u22C1", d.OP, "object-key-init"),
        "\u22C2": cc11001100_hook("\u22C2", d.OP, "object-key-init"),
        "\u22C3": cc11001100_hook("\u22C3", d.OP, "object-key-init"),
        "\u2308": cc11001100_hook("\u2308", d.OPEN, "object-key-init"),
        "\u230A": cc11001100_hook("\u230A", d.OPEN, "object-key-init"),
        "\u27E8": cc11001100_hook("\u27E8", d.OPEN, "object-key-init"),
        "\u27EE": cc11001100_hook("\u27EE", d.OPEN, "object-key-init"),
        "\u2A00": cc11001100_hook("\u2A00", d.OP, "object-key-init"),
        "\u2A01": cc11001100_hook("\u2A01", d.OP, "object-key-init"),
        "\u2A02": cc11001100_hook("\u2A02", d.OP, "object-key-init"),
        "\u2A04": cc11001100_hook("\u2A04", d.OP, "object-key-init"),
        "\u2A06": cc11001100_hook("\u2A06", d.OP, "object-key-init"),
        "\u00AC": cc11001100_hook("\u00AC", d.ORD21, "object-key-init"),
        "\u00B1": cc11001100_hook("\u00B1", d.BIN01, "object-key-init"),
        "(": cc11001100_hook("(", d.OPEN, "object-key-init"),
        "+": cc11001100_hook("+", d.BIN01, "object-key-init"),
        "-": cc11001100_hook("-", d.BIN01, "object-key-init"),
        "[": cc11001100_hook("[", d.OPEN, "object-key-init"),
        "{": cc11001100_hook("{", d.OPEN, "object-key-init"),
        "|": cc11001100_hook("|", d.OPEN, "object-key-init")
      },
      postfix: {
        "!": cc11001100_hook("!", [1, 0, b.CLOSE], "object-key-init"),
        "&": cc11001100_hook("&", d.ORD, "object-key-init"),
        "\u2032": cc11001100_hook("\u2032", d.ORD02, "object-key-init"),
        "\u203E": cc11001100_hook("\u203E", d.WIDEACCENT, "object-key-init"),
        "\u2309": cc11001100_hook("\u2309", d.CLOSE, "object-key-init"),
        "\u230B": cc11001100_hook("\u230B", d.CLOSE, "object-key-init"),
        "\u23DE": cc11001100_hook("\u23DE", d.WIDEACCENT, "object-key-init"),
        "\u23DF": cc11001100_hook("\u23DF", d.WIDEACCENT, "object-key-init"),
        "\u266D": cc11001100_hook("\u266D", d.ORD02, "object-key-init"),
        "\u266E": cc11001100_hook("\u266E", d.ORD02, "object-key-init"),
        "\u266F": cc11001100_hook("\u266F", d.ORD02, "object-key-init"),
        "\u27E9": cc11001100_hook("\u27E9", d.CLOSE, "object-key-init"),
        "\u27EF": cc11001100_hook("\u27EF", d.CLOSE, "object-key-init"),
        "\u02C6": cc11001100_hook("\u02C6", d.WIDEACCENT, "object-key-init"),
        "\u02C7": cc11001100_hook("\u02C7", d.WIDEACCENT, "object-key-init"),
        "\u02C9": cc11001100_hook("\u02C9", d.WIDEACCENT, "object-key-init"),
        "\u02CA": cc11001100_hook("\u02CA", d.ACCENT, "object-key-init"),
        "\u02CB": cc11001100_hook("\u02CB", d.ACCENT, "object-key-init"),
        "\u02D8": cc11001100_hook("\u02D8", d.ACCENT, "object-key-init"),
        "\u02D9": cc11001100_hook("\u02D9", d.ACCENT, "object-key-init"),
        "\u02DC": cc11001100_hook("\u02DC", d.WIDEACCENT, "object-key-init"),
        "\u0302": cc11001100_hook("\u0302", d.WIDEACCENT, "object-key-init"),
        "\u00A8": cc11001100_hook("\u00A8", d.ACCENT, "object-key-init"),
        "\u00AF": cc11001100_hook("\u00AF", d.WIDEACCENT, "object-key-init"),
        ")": cc11001100_hook(")", d.CLOSE, "object-key-init"),
        "]": cc11001100_hook("]", d.CLOSE, "object-key-init"),
        "^": cc11001100_hook("^", d.WIDEACCENT, "object-key-init"),
        _: cc11001100_hook("_", d.WIDEACCENT, "object-key-init"),
        "`": cc11001100_hook("`", d.ACCENT, "object-key-init"),
        "|": cc11001100_hook("|", d.CLOSE, "object-key-init"),
        "}": cc11001100_hook("}", d.CLOSE, "object-key-init"),
        "~": cc11001100_hook("~", d.WIDEACCENT, "object-key-init")
      },
      infix: {
        "": cc11001100_hook("", d.ORD, "object-key-init"),
        "%": cc11001100_hook("%", [3, 3, b.ORD], "object-key-init"),
        "\u2022": cc11001100_hook("\u2022", d.BIN4, "object-key-init"),
        "\u2026": cc11001100_hook("\u2026", d.INNER, "object-key-init"),
        "\u2044": cc11001100_hook("\u2044", d.TALLBIN, "object-key-init"),
        "\u2061": cc11001100_hook("\u2061", d.ORD, "object-key-init"),
        "\u2062": cc11001100_hook("\u2062", d.ORD, "object-key-init"),
        "\u2063": cc11001100_hook("\u2063", [0, 0, b.ORD, {
          linebreakstyle: cc11001100_hook("linebreakstyle", "after", "object-key-init"),
          separator: cc11001100_hook("separator", true, "object-key-init")
        }], "object-key-init"),
        "\u2064": cc11001100_hook("\u2064", d.ORD, "object-key-init"),
        "\u2190": cc11001100_hook("\u2190", d.WIDEREL, "object-key-init"),
        "\u2191": cc11001100_hook("\u2191", d.RELSTRETCH, "object-key-init"),
        "\u2192": cc11001100_hook("\u2192", d.WIDEREL, "object-key-init"),
        "\u2193": cc11001100_hook("\u2193", d.RELSTRETCH, "object-key-init"),
        "\u2194": cc11001100_hook("\u2194", d.WIDEREL, "object-key-init"),
        "\u2195": cc11001100_hook("\u2195", d.RELSTRETCH, "object-key-init"),
        "\u2196": cc11001100_hook("\u2196", d.RELSTRETCH, "object-key-init"),
        "\u2197": cc11001100_hook("\u2197", d.RELSTRETCH, "object-key-init"),
        "\u2198": cc11001100_hook("\u2198", d.RELSTRETCH, "object-key-init"),
        "\u2199": cc11001100_hook("\u2199", d.RELSTRETCH, "object-key-init"),
        "\u21A6": cc11001100_hook("\u21A6", d.WIDEREL, "object-key-init"),
        "\u21A9": cc11001100_hook("\u21A9", d.WIDEREL, "object-key-init"),
        "\u21AA": cc11001100_hook("\u21AA", d.WIDEREL, "object-key-init"),
        "\u21BC": cc11001100_hook("\u21BC", d.WIDEREL, "object-key-init"),
        "\u21BD": cc11001100_hook("\u21BD", d.WIDEREL, "object-key-init"),
        "\u21C0": cc11001100_hook("\u21C0", d.WIDEREL, "object-key-init"),
        "\u21C1": cc11001100_hook("\u21C1", d.WIDEREL, "object-key-init"),
        "\u21CC": cc11001100_hook("\u21CC", d.WIDEREL, "object-key-init"),
        "\u21D0": cc11001100_hook("\u21D0", d.WIDEREL, "object-key-init"),
        "\u21D1": cc11001100_hook("\u21D1", d.RELSTRETCH, "object-key-init"),
        "\u21D2": cc11001100_hook("\u21D2", d.WIDEREL, "object-key-init"),
        "\u21D3": cc11001100_hook("\u21D3", d.RELSTRETCH, "object-key-init"),
        "\u21D4": cc11001100_hook("\u21D4", d.WIDEREL, "object-key-init"),
        "\u21D5": cc11001100_hook("\u21D5", d.RELSTRETCH, "object-key-init"),
        "\u2208": cc11001100_hook("\u2208", d.REL, "object-key-init"),
        "\u2209": cc11001100_hook("\u2209", d.REL, "object-key-init"),
        "\u220B": cc11001100_hook("\u220B", d.REL, "object-key-init"),
        "\u2212": cc11001100_hook("\u2212", d.BIN4, "object-key-init"),
        "\u2213": cc11001100_hook("\u2213", d.BIN4, "object-key-init"),
        "\u2215": cc11001100_hook("\u2215", d.TALLBIN, "object-key-init"),
        "\u2216": cc11001100_hook("\u2216", d.BIN4, "object-key-init"),
        "\u2217": cc11001100_hook("\u2217", d.BIN4, "object-key-init"),
        "\u2218": cc11001100_hook("\u2218", d.BIN4, "object-key-init"),
        "\u2219": cc11001100_hook("\u2219", d.BIN4, "object-key-init"),
        "\u221D": cc11001100_hook("\u221D", d.REL, "object-key-init"),
        "\u2223": cc11001100_hook("\u2223", d.REL, "object-key-init"),
        "\u2225": cc11001100_hook("\u2225", d.REL, "object-key-init"),
        "\u2227": cc11001100_hook("\u2227", d.BIN4, "object-key-init"),
        "\u2228": cc11001100_hook("\u2228", d.BIN4, "object-key-init"),
        "\u2229": cc11001100_hook("\u2229", d.BIN4, "object-key-init"),
        "\u222A": cc11001100_hook("\u222A", d.BIN4, "object-key-init"),
        "\u223C": cc11001100_hook("\u223C", d.REL, "object-key-init"),
        "\u2240": cc11001100_hook("\u2240", d.BIN4, "object-key-init"),
        "\u2243": cc11001100_hook("\u2243", d.REL, "object-key-init"),
        "\u2245": cc11001100_hook("\u2245", d.REL, "object-key-init"),
        "\u2248": cc11001100_hook("\u2248", d.REL, "object-key-init"),
        "\u224D": cc11001100_hook("\u224D", d.REL, "object-key-init"),
        "\u2250": cc11001100_hook("\u2250", d.REL, "object-key-init"),
        "\u2260": cc11001100_hook("\u2260", d.REL, "object-key-init"),
        "\u2261": cc11001100_hook("\u2261", d.REL, "object-key-init"),
        "\u2264": cc11001100_hook("\u2264", d.REL, "object-key-init"),
        "\u2265": cc11001100_hook("\u2265", d.REL, "object-key-init"),
        "\u226A": cc11001100_hook("\u226A", d.REL, "object-key-init"),
        "\u226B": cc11001100_hook("\u226B", d.REL, "object-key-init"),
        "\u227A": cc11001100_hook("\u227A", d.REL, "object-key-init"),
        "\u227B": cc11001100_hook("\u227B", d.REL, "object-key-init"),
        "\u2282": cc11001100_hook("\u2282", d.REL, "object-key-init"),
        "\u2283": cc11001100_hook("\u2283", d.REL, "object-key-init"),
        "\u2286": cc11001100_hook("\u2286", d.REL, "object-key-init"),
        "\u2287": cc11001100_hook("\u2287", d.REL, "object-key-init"),
        "\u228E": cc11001100_hook("\u228E", d.BIN4, "object-key-init"),
        "\u2291": cc11001100_hook("\u2291", d.REL, "object-key-init"),
        "\u2292": cc11001100_hook("\u2292", d.REL, "object-key-init"),
        "\u2293": cc11001100_hook("\u2293", d.BIN4, "object-key-init"),
        "\u2294": cc11001100_hook("\u2294", d.BIN4, "object-key-init"),
        "\u2295": cc11001100_hook("\u2295", d.BIN4, "object-key-init"),
        "\u2296": cc11001100_hook("\u2296", d.BIN4, "object-key-init"),
        "\u2297": cc11001100_hook("\u2297", d.BIN4, "object-key-init"),
        "\u2298": cc11001100_hook("\u2298", d.BIN4, "object-key-init"),
        "\u2299": cc11001100_hook("\u2299", d.BIN4, "object-key-init"),
        "\u22A2": cc11001100_hook("\u22A2", d.REL, "object-key-init"),
        "\u22A3": cc11001100_hook("\u22A3", d.REL, "object-key-init"),
        "\u22A4": cc11001100_hook("\u22A4", d.ORD55, "object-key-init"),
        "\u22A5": cc11001100_hook("\u22A5", d.REL, "object-key-init"),
        "\u22A8": cc11001100_hook("\u22A8", d.REL, "object-key-init"),
        "\u22C4": cc11001100_hook("\u22C4", d.BIN4, "object-key-init"),
        "\u22C5": cc11001100_hook("\u22C5", d.BIN4, "object-key-init"),
        "\u22C6": cc11001100_hook("\u22C6", d.BIN4, "object-key-init"),
        "\u22C8": cc11001100_hook("\u22C8", d.REL, "object-key-init"),
        "\u22EE": cc11001100_hook("\u22EE", d.ORD55, "object-key-init"),
        "\u22EF": cc11001100_hook("\u22EF", d.INNER, "object-key-init"),
        "\u22F1": cc11001100_hook("\u22F1", [5, 5, b.INNER], "object-key-init"),
        "\u25B3": cc11001100_hook("\u25B3", d.BIN4, "object-key-init"),
        "\u25B5": cc11001100_hook("\u25B5", d.BIN4, "object-key-init"),
        "\u25B9": cc11001100_hook("\u25B9", d.BIN4, "object-key-init"),
        "\u25BD": cc11001100_hook("\u25BD", d.BIN4, "object-key-init"),
        "\u25BF": cc11001100_hook("\u25BF", d.BIN4, "object-key-init"),
        "\u25C3": cc11001100_hook("\u25C3", d.BIN4, "object-key-init"),
        "\u2758": cc11001100_hook("\u2758", d.REL, "object-key-init"),
        "\u27F5": cc11001100_hook("\u27F5", d.WIDEREL, "object-key-init"),
        "\u27F6": cc11001100_hook("\u27F6", d.WIDEREL, "object-key-init"),
        "\u27F7": cc11001100_hook("\u27F7", d.WIDEREL, "object-key-init"),
        "\u27F8": cc11001100_hook("\u27F8", d.WIDEREL, "object-key-init"),
        "\u27F9": cc11001100_hook("\u27F9", d.WIDEREL, "object-key-init"),
        "\u27FA": cc11001100_hook("\u27FA", d.WIDEREL, "object-key-init"),
        "\u27FC": cc11001100_hook("\u27FC", d.WIDEREL, "object-key-init"),
        "\u2A2F": cc11001100_hook("\u2A2F", d.BIN4, "object-key-init"),
        "\u2A3F": cc11001100_hook("\u2A3F", d.BIN4, "object-key-init"),
        "\u2AAF": cc11001100_hook("\u2AAF", d.REL, "object-key-init"),
        "\u2AB0": cc11001100_hook("\u2AB0", d.REL, "object-key-init"),
        "\u00B1": cc11001100_hook("\u00B1", d.BIN4, "object-key-init"),
        "\u00B7": cc11001100_hook("\u00B7", d.BIN4, "object-key-init"),
        "\u00D7": cc11001100_hook("\u00D7", d.BIN4, "object-key-init"),
        "\u00F7": cc11001100_hook("\u00F7", d.BIN4, "object-key-init"),
        "*": cc11001100_hook("*", d.BIN3, "object-key-init"),
        "+": cc11001100_hook("+", d.BIN4, "object-key-init"),
        ",": cc11001100_hook(",", [0, 3, b.PUNCT, {
          linebreakstyle: cc11001100_hook("linebreakstyle", "after", "object-key-init"),
          separator: cc11001100_hook("separator", true, "object-key-init")
        }], "object-key-init"),
        "-": cc11001100_hook("-", d.BIN4, "object-key-init"),
        ".": cc11001100_hook(".", [3, 3, b.ORD], "object-key-init"),
        "/": cc11001100_hook("/", d.ORD11, "object-key-init"),
        ":": cc11001100_hook(":", [1, 2, b.REL], "object-key-init"),
        ";": cc11001100_hook(";", [0, 3, b.PUNCT, {
          linebreakstyle: cc11001100_hook("linebreakstyle", "after", "object-key-init"),
          separator: cc11001100_hook("separator", true, "object-key-init")
        }], "object-key-init"),
        "<": cc11001100_hook("<", d.REL, "object-key-init"),
        "=": cc11001100_hook("=", d.REL, "object-key-init"),
        ">": cc11001100_hook(">", d.REL, "object-key-init"),
        "?": cc11001100_hook("?", [1, 1, b.CLOSE], "object-key-init"),
        "\\": cc11001100_hook("\\", d.ORD, "object-key-init"),
        "^": cc11001100_hook("^", d.ORD11, "object-key-init"),
        _: cc11001100_hook("_", d.ORD11, "object-key-init"),
        "|": cc11001100_hook("|", [2, 2, b.ORD, {
          fence: cc11001100_hook("fence", true, "object-key-init"),
          stretchy: cc11001100_hook("stretchy", true, "object-key-init"),
          symmetric: cc11001100_hook("symmetric", true, "object-key-init")
        }], "object-key-init"),
        "#": cc11001100_hook("#", d.ORD, "object-key-init"),
        "$": cc11001100_hook("$", d.ORD, "object-key-init"),
        "\u002E": cc11001100_hook("\u002E", [0, 3, b.PUNCT, {
          separator: cc11001100_hook("separator", true, "object-key-init")
        }], "object-key-init"),
        "\u02B9": cc11001100_hook("\u02B9", d.ORD, "object-key-init"),
        "\u0300": cc11001100_hook("\u0300", d.ACCENT, "object-key-init"),
        "\u0301": cc11001100_hook("\u0301", d.ACCENT, "object-key-init"),
        "\u0303": cc11001100_hook("\u0303", d.WIDEACCENT, "object-key-init"),
        "\u0304": cc11001100_hook("\u0304", d.ACCENT, "object-key-init"),
        "\u0306": cc11001100_hook("\u0306", d.ACCENT, "object-key-init"),
        "\u0307": cc11001100_hook("\u0307", d.ACCENT, "object-key-init"),
        "\u0308": cc11001100_hook("\u0308", d.ACCENT, "object-key-init"),
        "\u030C": cc11001100_hook("\u030C", d.ACCENT, "object-key-init"),
        "\u0332": cc11001100_hook("\u0332", d.WIDEACCENT, "object-key-init"),
        "\u0338": cc11001100_hook("\u0338", d.REL4, "object-key-init"),
        "\u2015": cc11001100_hook("\u2015", [0, 0, b.ORD, {
          stretchy: cc11001100_hook("stretchy", true, "object-key-init")
        }], "object-key-init"),
        "\u2017": cc11001100_hook("\u2017", [0, 0, b.ORD, {
          stretchy: cc11001100_hook("stretchy", true, "object-key-init")
        }], "object-key-init"),
        "\u2020": cc11001100_hook("\u2020", d.BIN3, "object-key-init"),
        "\u2021": cc11001100_hook("\u2021", d.BIN3, "object-key-init"),
        "\u20D7": cc11001100_hook("\u20D7", d.ACCENT, "object-key-init"),
        "\u2111": cc11001100_hook("\u2111", d.ORD, "object-key-init"),
        "\u2113": cc11001100_hook("\u2113", d.ORD, "object-key-init"),
        "\u2118": cc11001100_hook("\u2118", d.ORD, "object-key-init"),
        "\u211C": cc11001100_hook("\u211C", d.ORD, "object-key-init"),
        "\u2205": cc11001100_hook("\u2205", d.ORD, "object-key-init"),
        "\u221E": cc11001100_hook("\u221E", d.ORD, "object-key-init"),
        "\u2305": cc11001100_hook("\u2305", d.BIN3, "object-key-init"),
        "\u2306": cc11001100_hook("\u2306", d.BIN3, "object-key-init"),
        "\u2322": cc11001100_hook("\u2322", d.REL4, "object-key-init"),
        "\u2323": cc11001100_hook("\u2323", d.REL4, "object-key-init"),
        "\u2329": cc11001100_hook("\u2329", d.OPEN, "object-key-init"),
        "\u232A": cc11001100_hook("\u232A", d.CLOSE, "object-key-init"),
        "\u23AA": cc11001100_hook("\u23AA", d.ORD, "object-key-init"),
        "\u23AF": cc11001100_hook("\u23AF", [0, 0, b.ORD, {
          stretchy: cc11001100_hook("stretchy", true, "object-key-init")
        }], "object-key-init"),
        "\u23B0": cc11001100_hook("\u23B0", d.OPEN, "object-key-init"),
        "\u23B1": cc11001100_hook("\u23B1", d.CLOSE, "object-key-init"),
        "\u2500": cc11001100_hook("\u2500", d.ORD, "object-key-init"),
        "\u25EF": cc11001100_hook("\u25EF", d.BIN3, "object-key-init"),
        "\u2660": cc11001100_hook("\u2660", d.ORD, "object-key-init"),
        "\u2661": cc11001100_hook("\u2661", d.ORD, "object-key-init"),
        "\u2662": cc11001100_hook("\u2662", d.ORD, "object-key-init"),
        "\u2663": cc11001100_hook("\u2663", d.ORD, "object-key-init"),
        "\u3008": cc11001100_hook("\u3008", d.OPEN, "object-key-init"),
        "\u3009": cc11001100_hook("\u3009", d.CLOSE, "object-key-init"),
        "\uFE37": cc11001100_hook("\uFE37", d.WIDEACCENT, "object-key-init"),
        "\uFE38": cc11001100_hook("\uFE38", d.WIDEACCENT, "object-key-init")
      }
    }
  }, {
    OPTYPES: cc11001100_hook("OPTYPES", d, "object-key-init")
  });
  var c = cc11001100_hook("c", a.mo.prototype.OPTABLE, "var-init");
  c.infix["^"] = cc11001100_hook("c.infix[\"^\"]", d.WIDEREL, "assign");
  c.infix._ = cc11001100_hook("c.infix._", d.WIDEREL, "assign");
  c.prefix["\u2223"] = cc11001100_hook("c.prefix[\"\\u2223\"]", d.OPEN, "assign");
  c.prefix["\u2225"] = cc11001100_hook("c.prefix[\"\\u2225\"]", d.OPEN, "assign");
  c.postfix["\u2223"] = cc11001100_hook("c.postfix[\"\\u2223\"]", d.CLOSE, "assign");
  c.postfix["\u2225"] = cc11001100_hook("c.postfix[\"\\u2225\"]", d.CLOSE, "assign");
})(MathJax.ElementJax.mml);
MathJax.ElementJax.mml.loadComplete("jax.js");
MathJax.Hub.Register.LoadHook("[MathJax]/jax/element/mml/jax.js", function () {
  var c = cc11001100_hook("c", "2.7.2", "var-init");
  var a = cc11001100_hook("a", MathJax.ElementJax.mml, "var-init"),
    b = cc11001100_hook("b", MathJax.Hub.config.menuSettings, "var-init");
  a.mbase.Augment({
    toMathML: function (l) {
      var h = cc11001100_hook("h", this.inferred && this.parent.inferRow, "var-init");
      if (l == null) {
        l = cc11001100_hook("l", "", "assign");
      }
      var f = cc11001100_hook("f", this.type, "var-init"),
        e = cc11001100_hook("e", this.toMathMLattributes(), "var-init");
      if (f === "mspace") {
        return l + "<" + f + e + " />";
      }
      var k = cc11001100_hook("k", [], "var-init"),
        j = cc11001100_hook("j", this.isToken ? "" : l + (h ? "" : "  "), "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"), d = cc11001100_hook("d", this.data.length, "var-init"); g < d; g++) {
        if (this.data[g]) {
          k.push(this.data[g].toMathML(j));
        } else {
          if (!this.isToken && !this.isChars) {
            k.push(j + "<mrow />");
          }
        }
      }
      if (this.isToken || this.isChars) {
        return l + "<" + f + e + ">" + k.join("") + "</" + f + ">";
      }
      if (h) {
        return k.join("\n");
      }
      if (k.length === 0 || k.length === 1 && k[0] === "") {
        return l + "<" + f + e + " />";
      }
      return l + "<" + f + e + ">\n" + k.join("\n") + "\n" + l + "</" + f + ">";
    },
    toMathMLattributes: function () {
      var j = cc11001100_hook("j", this.type === "mstyle" ? a.math.prototype.defaults : this.defaults, "var-init");
      var h = cc11001100_hook("h", this.attrNames || a.copyAttributeNames, "var-init"),
        g = cc11001100_hook("g", a.skipAttributes, "var-init"),
        l = cc11001100_hook("l", a.copyAttributes, "var-init");
      var e = cc11001100_hook("e", [], "var-init");
      if (this.type === "math" && (!this.attr || !this.attr.xmlns)) {
        e.push('xmlns="http://www.w3.org/1998/Math/MathML"');
      }
      if (!this.attrNames) {
        for (var k in j) {
          if (!g[k] && !l[k] && j.hasOwnProperty(k)) {
            if (this[k] != null && this[k] !== j[k]) {
              if (this.Get(k, null, 1) !== this[k]) {
                e.push(k + '="' + this.toMathMLattribute(this[k]) + '"');
              }
            }
          }
        }
      }
      for (var f = cc11001100_hook("f", 0, "var-init"), d = cc11001100_hook("d", h.length, "var-init"); f < d; f++) {
        if (l[h[f]] === 1 && !j.hasOwnProperty(h[f])) {
          continue;
        }
        value = cc11001100_hook("value", (this.attr || {})[h[f]], "assign");
        if (value == null) {
          value = cc11001100_hook("value", this[h[f]], "assign");
        }
        if (value != null) {
          e.push(h[f] + '="' + this.toMathMLquote(value) + '"');
        }
      }
      this.toMathMLclass(e);
      if (e.length) {
        return " " + e.join(" ");
      } else {
        return "";
      }
    },
    toMathMLclass: function (d) {
      var f = cc11001100_hook("f", [], "var-init");
      if (this["class"]) {
        f.push(this["class"]);
      }
      if (this.isa(a.TeXAtom) && b.texHints) {
        var e = cc11001100_hook("e", ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER", "VCENTER"][this.texClass], "var-init");
        if (e) {
          f.push("MJX-TeXAtom-" + e);
          if (e === "OP" && !this.movablelimits) {
            f.push("MJX-fixedlimits");
          }
        }
      }
      if (this.mathvariant && this.toMathMLvariants[this.mathvariant]) {
        f.push("MJX" + this.mathvariant);
      }
      if (this.variantForm) {
        f.push("MJX-variant");
      }
      if (f.length) {
        d.unshift('class="' + f.join(" ") + '"');
      }
    },
    toMathMLattribute: function (d) {
      if (typeof d === "string" && d.replace(/ /g, "").match(/^(([-+])?(\d+(\.\d*)?|\.\d+))mu$/)) {
        return (RegExp.$2 || "") + (1 / 18 * RegExp.$3).toFixed(3).replace(/\.?0+$/, "") + "em";
      } else {
        if (this.toMathMLvariants[d]) {
          return this.toMathMLvariants[d];
        }
      }
      return this.toMathMLquote(d);
    },
    toMathMLvariants: {
      "-tex-caligraphic": cc11001100_hook("-tex-caligraphic", a.VARIANT.SCRIPT, "object-key-init"),
      "-tex-caligraphic-bold": cc11001100_hook("-tex-caligraphic-bold", a.VARIANT.BOLDSCRIPT, "object-key-init"),
      "-tex-oldstyle": cc11001100_hook("-tex-oldstyle", a.VARIANT.NORMAL, "object-key-init"),
      "-tex-oldstyle-bold": cc11001100_hook("-tex-oldstyle-bold", a.VARIANT.BOLD, "object-key-init"),
      "-tex-mathit": cc11001100_hook("-tex-mathit", a.VARIANT.ITALIC, "object-key-init")
    },
    toMathMLquote: function (f) {
      f = cc11001100_hook("f", String(f).split(""), "assign");
      for (var g = cc11001100_hook("g", 0, "var-init"), d = cc11001100_hook("d", f.length, "var-init"); g < d; g++) {
        var k = cc11001100_hook("k", f[g].charCodeAt(0), "var-init");
        if (k <= 55295 || 57344 <= k) {
          if (k > 126 || k < 32 && k !== 10 && k !== 13 && k !== 9) {
            f[g] = cc11001100_hook("f[g]", "&#x" + k.toString(16).toUpperCase() + ";", "assign");
          } else {
            var j = cc11001100_hook("j", {
              "&": cc11001100_hook("&", "&amp;", "object-key-init"),
              "<": cc11001100_hook("<", "&lt;", "object-key-init"),
              ">": cc11001100_hook(">", "&gt;", "object-key-init"),
              '"': cc11001100_hook('"', "&quot;", "object-key-init")
            }[f[g]], "var-init");
            if (j) {
              f[g] = cc11001100_hook("f[g]", j, "assign");
            }
          }
        } else {
          if (g + 1 < d) {
            var h = cc11001100_hook("h", f[g + 1].charCodeAt(0), "var-init");
            var e = cc11001100_hook("e", (k - 55296 << 10) + (h - 56320) + 65536, "var-init");
            f[g] = cc11001100_hook("f[g]", "&#x" + e.toString(16).toUpperCase() + ";", "assign");
            f[g + 1] = cc11001100_hook("f[g + 1]", "", "assign");
            g++;
          } else {
            f[g] = cc11001100_hook("f[g]", "", "assign");
          }
        }
      }
      return f.join("");
    }
  });
  a.math.Augment({
    toMathML: function (d, e) {
      var g;
      if (d == null) {
        d = cc11001100_hook("d", "", "assign");
      }
      if (e && e.originalText && b.semantics) {
        g = cc11001100_hook("g", MathJax.InputJax[e.inputJax].annotationEncoding, "assign");
      }
      var n = cc11001100_hook("n", this.data[0] && this.data[0].data.length > 1, "var-init");
      var p = cc11001100_hook("p", this.type, "var-init"),
        k = cc11001100_hook("k", this.toMathMLattributes(), "var-init");
      var j = cc11001100_hook("j", [], "var-init"),
        o = cc11001100_hook("o", d + (g ? "  " + (n ? "  " : "") : "") + "  ", "var-init");
      for (var h = cc11001100_hook("h", 0, "var-init"), f = cc11001100_hook("f", this.data.length, "var-init"); h < f; h++) {
        if (this.data[h]) {
          j.push(this.data[h].toMathML(o));
        } else {
          j.push(o + "<mrow />");
        }
      }
      if (j.length === 0 || j.length === 1 && j[0] === "") {
        if (!g) {
          return "<" + p + k + " />";
        }
        j.push(o + "<mrow />");
      }
      if (g) {
        if (n) {
          j.unshift(d + "    <mrow>");
          j.push(d + "    </mrow>");
        }
        j.unshift(d + "  <semantics>");
        var l = cc11001100_hook("l", e.originalText.replace(/[&<>]/g, function (i) {
          return {
            ">": cc11001100_hook(">", "&gt;", "object-key-init"),
            "<": cc11001100_hook("<", "&lt;", "object-key-init"),
            "&": cc11001100_hook("&", "&amp;", "object-key-init")
          }[i];
        }), "var-init");
        j.push(d + '    <annotation encoding="' + g + '">' + l + "</annotation>");
        j.push(d + "  </semantics>");
      }
      return d + "<" + p + k + ">\n" + j.join("\n") + "\n" + d + "</" + p + ">";
    }
  });
  a.msubsup.Augment({
    toMathML: function (j) {
      var f = cc11001100_hook("f", this.type, "var-init");
      if (this.data[this.sup] == null) {
        f = cc11001100_hook("f", "msub", "assign");
      }
      if (this.data[this.sub] == null) {
        f = cc11001100_hook("f", "msup", "assign");
      }
      var e = cc11001100_hook("e", this.toMathMLattributes(), "var-init");
      delete this.data[0].inferred;
      var h = cc11001100_hook("h", [], "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"), d = cc11001100_hook("d", this.data.length, "var-init"); g < d; g++) {
        if (this.data[g]) {
          h.push(this.data[g].toMathML(j + "  "));
        }
      }
      return j + "<" + f + e + ">\n" + h.join("\n") + "\n" + j + "</" + f + ">";
    }
  });
  a.munderover.Augment({
    toMathML: function (k) {
      var f = cc11001100_hook("f", this.type, "var-init");
      var j = cc11001100_hook("j", this.data[this.base], "var-init");
      if (j && j.isa(a.TeXAtom) && j.movablelimits && !j.Get("displaystyle")) {
        type = cc11001100_hook("type", "msubsup", "assign");
        if (this.data[this.under] == null) {
          f = cc11001100_hook("f", "msup", "assign");
        }
        if (this.data[this.over] == null) {
          f = cc11001100_hook("f", "msub", "assign");
        }
      } else {
        if (this.data[this.under] == null) {
          f = cc11001100_hook("f", "mover", "assign");
        }
        if (this.data[this.over] == null) {
          f = cc11001100_hook("f", "munder", "assign");
        }
      }
      var e = cc11001100_hook("e", this.toMathMLattributes(), "var-init");
      delete this.data[0].inferred;
      var h = cc11001100_hook("h", [], "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"), d = cc11001100_hook("d", this.data.length, "var-init"); g < d; g++) {
        if (this.data[g]) {
          h.push(this.data[g].toMathML(k + "  "));
        }
      }
      return k + "<" + f + e + ">\n" + h.join("\n") + "\n" + k + "</" + f + ">";
    }
  });
  a.TeXAtom.Augment({
    toMathML: function (e) {
      var d = cc11001100_hook("d", this.toMathMLattributes(), "var-init");
      if (!d && this.data[0].data.length === 1) {
        return e.substr(2) + this.data[0].toMathML(e);
      }
      return e + "<mrow" + d + ">\n" + this.data[0].toMathML(e + "  ") + "\n" + e + "</mrow>";
    }
  });
  a.chars.Augment({
    toMathML: function (d) {
      return (d || "") + this.toMathMLquote(this.toString());
    }
  });
  a.entity.Augment({
    toMathML: function (d) {
      return (d || "") + "&" + this.data[0] + ";<!-- " + this.toString() + " -->";
    }
  });
  a.xml.Augment({
    toMathML: function (d) {
      return (d || "") + this.toString();
    }
  });
  MathJax.Hub.Register.StartupHook("TeX mathchoice Ready", function () {
    a.TeXmathchoice.Augment({
      toMathML: function (d) {
        return this.Core().toMathML(d);
      }
    });
  });
  MathJax.Hub.Startup.signal.Post("toMathML Ready");
});
MathJax.Ajax.loadComplete("[MathJax]/extensions/toMathML.js");
(function (b, e) {
  var d = cc11001100_hook("d", "2.7.2", "var-init");
  var a = cc11001100_hook("a", b.CombineConfig("TeX.noErrors", {
    disabled: cc11001100_hook("disabled", false, "object-key-init"),
    multiLine: cc11001100_hook("multiLine", true, "object-key-init"),
    inlineDelimiters: cc11001100_hook("inlineDelimiters", ["", ""], "object-key-init"),
    style: {
      "font-size": cc11001100_hook("font-size", "90%", "object-key-init"),
      "text-align": cc11001100_hook("text-align", "left", "object-key-init"),
      color: cc11001100_hook("color", "black", "object-key-init"),
      padding: cc11001100_hook("padding", "1px 3px", "object-key-init"),
      border: cc11001100_hook("border", "1px solid", "object-key-init")
    }
  }), "var-init");
  var c = cc11001100_hook("c", "\u00A0", "var-init");
  MathJax.Extension["TeX/noErrors"] = cc11001100_hook("MathJax.Extension[\"TeX/noErrors\"]", {
    version: cc11001100_hook("version", d, "object-key-init"),
    config: cc11001100_hook("config", a, "object-key-init")
  }, "assign");
  b.Register.StartupHook("TeX Jax Ready", function () {
    var f = cc11001100_hook("f", MathJax.InputJax.TeX.formatError, "var-init");
    MathJax.InputJax.TeX.Augment({
      formatError: function (j, i, k, g) {
        if (a.disabled) {
          return f.apply(this, arguments);
        }
        var h = cc11001100_hook("h", j.message.replace(/\n.*/, ""), "var-init");
        b.signal.Post(["TeX Jax - parse error", h, i, k, g]);
        var m = cc11001100_hook("m", a.inlineDelimiters, "var-init");
        var l = cc11001100_hook("l", k || a.multiLine, "var-init");
        if (!k) {
          i = cc11001100_hook("i", m[0] + i + m[1], "assign");
        }
        if (l) {
          i = cc11001100_hook("i", i.replace(/ /g, c), "assign");
        } else {
          i = cc11001100_hook("i", i.replace(/\n/g, " "), "assign");
        }
        return MathJax.ElementJax.mml.merror(i).With({
          isError: cc11001100_hook("isError", true, "object-key-init"),
          multiLine: cc11001100_hook("multiLine", l, "object-key-init")
        });
      }
    });
  });
  b.Register.StartupHook("HTML-CSS Jax Config", function () {
    b.Config({
      "HTML-CSS": {
        styles: {
          ".MathJax .noError": cc11001100_hook(".MathJax .noError", b.Insert({
            "vertical-align": cc11001100_hook("vertical-align", b.Browser.isMSIE && a.multiLine ? "-2px" : "", "object-key-init")
          }, a.style), "object-key-init")
        }
      }
    });
  });
  b.Register.StartupHook("HTML-CSS Jax Ready", function () {
    var g = cc11001100_hook("g", MathJax.ElementJax.mml, "var-init");
    var h = cc11001100_hook("h", MathJax.OutputJax["HTML-CSS"], "var-init");
    var f = cc11001100_hook("f", g.math.prototype.toHTML, "var-init"),
      i = cc11001100_hook("i", g.merror.prototype.toHTML, "var-init");
    g.math.Augment({
      toHTML: function (j, k) {
        var l = cc11001100_hook("l", this.data[0], "var-init");
        if (l && l.data[0] && l.data[0].isError) {
          j.style.fontSize = cc11001100_hook("j.style.fontSize", "", "assign");
          j = cc11001100_hook("j", this.HTMLcreateSpan(j), "assign");
          j.bbox = cc11001100_hook("j.bbox", l.data[0].toHTML(j).bbox, "assign");
        } else {
          j = cc11001100_hook("j", f.apply(this, arguments), "assign");
        }
        return j;
      }
    });
    g.merror.Augment({
      toHTML: function (p) {
        if (!this.isError) {
          return i.apply(this, arguments);
        }
        p = cc11001100_hook("p", this.HTMLcreateSpan(p), "assign");
        p.className = cc11001100_hook("p.className", "noError", "assign");
        if (this.multiLine) {
          p.style.display = cc11001100_hook("p.style.display", "inline-block", "assign");
        }
        var r = cc11001100_hook("r", this.data[0].data[0].data.join("").split(/\n/), "var-init");
        for (var o = cc11001100_hook("o", 0, "var-init"), l = cc11001100_hook("l", r.length, "var-init"); o < l; o++) {
          h.addText(p, r[o]);
          if (o !== l - 1) {
            h.addElement(p, "br", {
              isMathJax: cc11001100_hook("isMathJax", true, "object-key-init")
            });
          }
        }
        var q = cc11001100_hook("q", h.getHD(p.parentNode), "var-init"),
          k = cc11001100_hook("k", h.getW(p.parentNode), "var-init");
        if (l > 1) {
          var n = cc11001100_hook("n", (q.h + q.d) / 2, "var-init"),
            j = cc11001100_hook("j", h.TeX.x_height / 2, "var-init");
          p.parentNode.style.verticalAlign = cc11001100_hook("p.parentNode.style.verticalAlign", h.Em(q.d + (j - n)), "assign");
          q.h = cc11001100_hook("q.h", j + n, "assign");
          q.d = cc11001100_hook("q.d", n - j, "assign");
        }
        p.bbox = cc11001100_hook("p.bbox", {
          h: cc11001100_hook("h", q.h, "object-key-init"),
          d: cc11001100_hook("d", q.d, "object-key-init"),
          w: cc11001100_hook("w", k, "object-key-init"),
          lw: cc11001100_hook("lw", 0, "object-key-init"),
          rw: cc11001100_hook("rw", k, "object-key-init")
        }, "assign");
        return p;
      }
    });
  });
  b.Register.StartupHook("SVG Jax Config", function () {
    b.Config({
      SVG: {
        styles: {
          ".MathJax_SVG .noError": cc11001100_hook(".MathJax_SVG .noError", b.Insert({
            "vertical-align": cc11001100_hook("vertical-align", b.Browser.isMSIE && a.multiLine ? "-2px" : "", "object-key-init")
          }, a.style), "object-key-init")
        }
      }
    });
  });
  b.Register.StartupHook("SVG Jax Ready", function () {
    var g = cc11001100_hook("g", MathJax.ElementJax.mml, "var-init");
    var f = cc11001100_hook("f", g.math.prototype.toSVG, "var-init"),
      h = cc11001100_hook("h", g.merror.prototype.toSVG, "var-init");
    g.math.Augment({
      toSVG: function (i, j) {
        var k = cc11001100_hook("k", this.data[0], "var-init");
        if (k && k.data[0] && k.data[0].isError) {
          i = cc11001100_hook("i", k.data[0].toSVG(i), "assign");
        } else {
          i = cc11001100_hook("i", f.apply(this, arguments), "assign");
        }
        return i;
      }
    });
    g.merror.Augment({
      toSVG: function (n) {
        if (!this.isError || this.Parent().type !== "math") {
          return h.apply(this, arguments);
        }
        n = cc11001100_hook("n", e.addElement(n, "span", {
          className: cc11001100_hook("className", "noError", "object-key-init"),
          isMathJax: cc11001100_hook("isMathJax", true, "object-key-init")
        }), "assign");
        if (this.multiLine) {
          n.style.display = cc11001100_hook("n.style.display", "inline-block", "assign");
        }
        var o = cc11001100_hook("o", this.data[0].data[0].data.join("").split(/\n/), "var-init");
        for (var l = cc11001100_hook("l", 0, "var-init"), j = cc11001100_hook("j", o.length, "var-init"); l < j; l++) {
          e.addText(n, o[l]);
          if (l !== j - 1) {
            e.addElement(n, "br", {
              isMathJax: cc11001100_hook("isMathJax", true, "object-key-init")
            });
          }
        }
        if (j > 1) {
          var k = cc11001100_hook("k", n.offsetHeight / 2, "var-init");
          n.style.verticalAlign = cc11001100_hook("n.style.verticalAlign", -k + k / j + "px", "assign");
        }
        return n;
      }
    });
  });
  b.Register.StartupHook("NativeMML Jax Ready", function () {
    var h = cc11001100_hook("h", MathJax.ElementJax.mml, "var-init");
    var g = cc11001100_hook("g", MathJax.Extension["TeX/noErrors"].config, "var-init");
    var f = cc11001100_hook("f", h.math.prototype.toNativeMML, "var-init"),
      i = cc11001100_hook("i", h.merror.prototype.toNativeMML, "var-init");
    h.math.Augment({
      toNativeMML: function (j) {
        var k = cc11001100_hook("k", this.data[0], "var-init");
        if (k && k.data[0] && k.data[0].isError) {
          j = cc11001100_hook("j", k.data[0].toNativeMML(j), "assign");
        } else {
          j = cc11001100_hook("j", f.apply(this, arguments), "assign");
        }
        return j;
      }
    });
    h.merror.Augment({
      toNativeMML: function (n) {
        if (!this.isError) {
          return i.apply(this, arguments);
        }
        n = cc11001100_hook("n", n.appendChild(document.createElement("span")), "assign");
        var o = cc11001100_hook("o", this.data[0].data[0].data.join("").split(/\n/), "var-init");
        for (var l = cc11001100_hook("l", 0, "var-init"), k = cc11001100_hook("k", o.length, "var-init"); l < k; l++) {
          n.appendChild(document.createTextNode(o[l]));
          if (l !== k - 1) {
            n.appendChild(document.createElement("br"));
          }
        }
        if (this.multiLine) {
          n.style.display = cc11001100_hook("n.style.display", "inline-block", "assign");
          if (k > 1) {
            n.style.verticalAlign = cc11001100_hook("n.style.verticalAlign", "middle", "assign");
          }
        }
        for (var p in g.style) {
          if (g.style.hasOwnProperty(p)) {
            var j = cc11001100_hook("j", p.replace(/-./g, function (m) {
              return m.charAt(1).toUpperCase();
            }), "var-init");
            n.style[j] = cc11001100_hook("n.style[j]", g.style[p], "assign");
          }
        }
        return n;
      }
    });
  });
  b.Register.StartupHook("PreviewHTML Jax Config", function () {
    b.Config({
      PreviewHTML: {
        styles: {
          ".MathJax_PHTML .noError": cc11001100_hook(".MathJax_PHTML .noError", b.Insert({
            "vertical-align": cc11001100_hook("vertical-align", b.Browser.isMSIE && a.multiLine ? "-2px" : "", "object-key-init")
          }, a.style), "object-key-init")
        }
      }
    });
  });
  b.Register.StartupHook("PreviewHTML Jax Ready", function () {
    var f = cc11001100_hook("f", MathJax.ElementJax.mml, "var-init");
    var h = cc11001100_hook("h", MathJax.HTML, "var-init");
    var g = cc11001100_hook("g", f.merror.prototype.toPreviewHTML, "var-init");
    f.merror.Augment({
      toPreviewHTML: function (l) {
        if (!this.isError) {
          return g.apply(this, arguments);
        }
        l = cc11001100_hook("l", this.PHTMLcreateSpan(l), "assign");
        l.className = cc11001100_hook("l.className", "noError", "assign");
        if (this.multiLine) {
          l.style.display = cc11001100_hook("l.style.display", "inline-block", "assign");
        }
        var n = cc11001100_hook("n", this.data[0].data[0].data.join("").split(/\n/), "var-init");
        for (var k = cc11001100_hook("k", 0, "var-init"), j = cc11001100_hook("j", n.length, "var-init"); k < j; k++) {
          h.addText(l, n[k]);
          if (k !== j - 1) {
            h.addElement(l, "br", {
              isMathJax: cc11001100_hook("isMathJax", true, "object-key-init")
            });
          }
        }
        return l;
      }
    });
  });
  b.Register.StartupHook("CommonHTML Jax Config", function () {
    b.Config({
      CommonHTML: {
        styles: {
          ".mjx-chtml .mjx-noError": cc11001100_hook(".mjx-chtml .mjx-noError", b.Insert({
            "line-height": cc11001100_hook("line-height", 1.2, "object-key-init"),
            "vertical-align": cc11001100_hook("vertical-align", b.Browser.isMSIE && a.multiLine ? "-2px" : "", "object-key-init")
          }, a.style), "object-key-init")
        }
      }
    });
  });
  b.Register.StartupHook("CommonHTML Jax Ready", function () {
    var f = cc11001100_hook("f", MathJax.ElementJax.mml, "var-init");
    var g = cc11001100_hook("g", MathJax.OutputJax.CommonHTML, "var-init");
    var i = cc11001100_hook("i", MathJax.HTML, "var-init");
    var h = cc11001100_hook("h", f.merror.prototype.toCommonHTML, "var-init");
    f.merror.Augment({
      toCommonHTML: function (n) {
        if (!this.isError) {
          return h.apply(this, arguments);
        }
        n = cc11001100_hook("n", g.addElement(n, "mjx-noError"), "assign");
        var p = cc11001100_hook("p", this.data[0].data[0].data.join("").split(/\n/), "var-init");
        for (var k = cc11001100_hook("k", 0, "var-init"), j = cc11001100_hook("j", p.length, "var-init"); k < j; k++) {
          i.addText(n, p[k]);
          if (k !== j - 1) {
            g.addElement(n, "br", {
              isMathJax: cc11001100_hook("isMathJax", true, "object-key-init")
            });
          }
        }
        var o = cc11001100_hook("o", this.CHTML = cc11001100_hook("this.CHTML", g.BBOX.zero(), "assign"), "var-init");
        o.w = cc11001100_hook("o.w", n.offsetWidth / g.em, "assign");
        if (j > 1) {
          var l = cc11001100_hook("l", 1.2 * j / 2, "var-init");
          o.h = cc11001100_hook("o.h", l + 0.25, "assign");
          o.d = cc11001100_hook("o.d", l - 0.25, "assign");
          n.style.verticalAlign = cc11001100_hook("n.style.verticalAlign", g.Em(0.45 - l), "assign");
        } else {
          o.h = cc11001100_hook("o.h", 1, "assign");
          o.d = cc11001100_hook("o.d", 0.2 + 2 / g.em, "assign");
        }
        return n;
      }
    });
  });
  b.Startup.signal.Post("TeX noErrors Ready");
})(MathJax.Hub, MathJax.HTML);
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noErrors.js");
MathJax.Extension["TeX/noUndefined"] = cc11001100_hook("MathJax.Extension[\"TeX/noUndefined\"]", {
  version: cc11001100_hook("version", "2.7.2", "object-key-init"),
  config: cc11001100_hook("config", MathJax.Hub.CombineConfig("TeX.noUndefined", {
    disabled: cc11001100_hook("disabled", false, "object-key-init"),
    attributes: {
      mathcolor: cc11001100_hook("mathcolor", "red", "object-key-init")
    }
  }), "object-key-init")
}, "assign");
MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {
  var b = cc11001100_hook("b", MathJax.Extension["TeX/noUndefined"].config, "var-init");
  var a = cc11001100_hook("a", MathJax.ElementJax.mml, "var-init");
  var c = cc11001100_hook("c", MathJax.InputJax.TeX.Parse.prototype.csUndefined, "var-init");
  MathJax.InputJax.TeX.Parse.Augment({
    csUndefined: function (d) {
      if (b.disabled) {
        return c.apply(this, arguments);
      }
      MathJax.Hub.signal.Post(["TeX Jax - undefined control sequence", d]);
      this.Push(a.mtext(d).With(b.attributes));
    }
  });
  MathJax.Hub.Startup.signal.Post("TeX noUndefined Ready");
});
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noUndefined.js");
(function (d, c, j) {
  var i,
    h = cc11001100_hook("h", "\u00A0", "var-init");
  var k = function (m) {
    return MathJax.Localization._.apply(MathJax.Localization, [["TeX", m]].concat([].slice.call(arguments, 1)));
  };
  var f = cc11001100_hook("f", MathJax.Object.isArray, "var-init");
  var e = cc11001100_hook("e", MathJax.Object.Subclass({
    Init: function (n, m) {
      this.global = cc11001100_hook("this.global", {
        isInner: cc11001100_hook("isInner", m, "object-key-init")
      }, "assign");
      this.data = cc11001100_hook("this.data", [b.start(this.global)], "assign");
      if (n) {
        this.data[0].env = cc11001100_hook("this.data[0].env", n, "assign");
      }
      this.env = cc11001100_hook("this.env", this.data[0].env, "assign");
    },
    Push: function () {
      var o, n, p, q;
      for (o = cc11001100_hook("o", 0, "assign"), n = cc11001100_hook("n", arguments.length, "assign"); o < n; o++) {
        p = cc11001100_hook("p", arguments[o], "assign");
        if (!p) {
          continue;
        }
        if (p instanceof i.mbase) {
          p = cc11001100_hook("p", b.mml(p), "assign");
        }
        p.global = cc11001100_hook("p.global", this.global, "assign");
        q = cc11001100_hook("q", this.data.length ? this.Top().checkItem(p) : true, "assign");
        if (q instanceof Array) {
          this.Pop();
          this.Push.apply(this, q);
        } else {
          if (q instanceof b) {
            this.Pop();
            this.Push(q);
          } else {
            if (q) {
              this.data.push(p);
              if (p.env) {
                if (p.copyEnv !== false) {
                  for (var r in this.env) {
                    if (this.env.hasOwnProperty(r)) {
                      p.env[r] = cc11001100_hook("p.env[r]", this.env[r], "assign");
                    }
                  }
                }
                this.env = cc11001100_hook("this.env", p.env, "assign");
              } else {
                p.env = cc11001100_hook("p.env", this.env, "assign");
              }
            }
          }
        }
      }
    },
    Pop: function () {
      var m = cc11001100_hook("m", this.data.pop(), "var-init");
      if (!m.isOpen) {
        delete m.env;
      }
      this.env = cc11001100_hook("this.env", this.data.length ? this.Top().env : {}, "assign");
      return m;
    },
    Top: function (m) {
      if (m == null) {
        m = cc11001100_hook("m", 1, "assign");
      }
      if (this.data.length < m) {
        return null;
      }
      return this.data[this.data.length - m];
    },
    Prev: function (m) {
      var n = cc11001100_hook("n", this.Top(), "var-init");
      if (m) {
        return n.data[n.data.length - 1];
      } else {
        return n.Pop();
      }
    },
    toString: function () {
      return "stack[\n  " + this.data.join("\n  ") + "\n]";
    }
  }), "var-init");
  var b = cc11001100_hook("b", e.Item = cc11001100_hook("e.Item", MathJax.Object.Subclass({
    type: cc11001100_hook("type", "base", "object-key-init"),
    endError: cc11001100_hook("endError", ["ExtraOpenMissingClose", "Extra open brace or missing close brace"], "object-key-init"),
    closeError: cc11001100_hook("closeError", ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"], "object-key-init"),
    rightError: cc11001100_hook("rightError", ["MissingLeftExtraRight", "Missing \\left or extra \\right"], "object-key-init"),
    Init: function () {
      if (this.isOpen) {
        this.env = cc11001100_hook("this.env", {}, "assign");
      }
      this.data = cc11001100_hook("this.data", [], "assign");
      this.Push.apply(this, arguments);
    },
    Push: function () {
      this.data.push.apply(this.data, arguments);
    },
    Pop: function () {
      return this.data.pop();
    },
    mmlData: function (m, n) {
      if (m == null) {
        m = cc11001100_hook("m", true, "assign");
      }
      if (this.data.length === 1 && !n) {
        return this.data[0];
      }
      return i.mrow.apply(i, this.data).With(m ? {
        inferred: cc11001100_hook("inferred", true, "object-key-init")
      } : {});
    },
    checkItem: function (m) {
      if (m.type === "over" && this.isOpen) {
        m.num = cc11001100_hook("m.num", this.mmlData(false), "assign");
        this.data = cc11001100_hook("this.data", [], "assign");
      }
      if (m.type === "cell" && this.isOpen) {
        if (m.linebreak) {
          return false;
        }
        d.Error(["Misplaced", "Misplaced %1", m.name]);
      }
      if (m.isClose && this[m.type + "Error"]) {
        d.Error(this[m.type + "Error"]);
      }
      if (!m.isNotStack) {
        return true;
      }
      this.Push(m.data[0]);
      return false;
    },
    With: function (m) {
      for (var n in m) {
        if (m.hasOwnProperty(n)) {
          this[n] = cc11001100_hook("this[n]", m[n], "assign");
        }
      }
      return this;
    },
    toString: function () {
      return this.type + "[" + this.data.join("; ") + "]";
    }
  }), "assign"), "var-init");
  b.start = cc11001100_hook("b.start", b.Subclass({
    type: cc11001100_hook("type", "start", "object-key-init"),
    isOpen: cc11001100_hook("isOpen", true, "object-key-init"),
    Init: function (m) {
      this.SUPER(arguments).Init.call(this);
      this.global = cc11001100_hook("this.global", m, "assign");
    },
    checkItem: function (m) {
      if (m.type === "stop") {
        return b.mml(this.mmlData());
      }
      return this.SUPER(arguments).checkItem.call(this, m);
    }
  }), "assign");
  b.stop = cc11001100_hook("b.stop", b.Subclass({
    type: cc11001100_hook("type", "stop", "object-key-init"),
    isClose: cc11001100_hook("isClose", true, "object-key-init")
  }), "assign");
  b.open = cc11001100_hook("b.open", b.Subclass({
    type: cc11001100_hook("type", "open", "object-key-init"),
    isOpen: cc11001100_hook("isOpen", true, "object-key-init"),
    stopError: cc11001100_hook("stopError", ["ExtraOpenMissingClose", "Extra open brace or missing close brace"], "object-key-init"),
    checkItem: function (n) {
      if (n.type === "close") {
        var m = cc11001100_hook("m", this.mmlData(), "var-init");
        return b.mml(i.TeXAtom(m));
      }
      return this.SUPER(arguments).checkItem.call(this, n);
    }
  }), "assign");
  b.close = cc11001100_hook("b.close", b.Subclass({
    type: cc11001100_hook("type", "close", "object-key-init"),
    isClose: cc11001100_hook("isClose", true, "object-key-init")
  }), "assign");
  b.prime = cc11001100_hook("b.prime", b.Subclass({
    type: cc11001100_hook("type", "prime", "object-key-init"),
    checkItem: function (m) {
      if (this.data[0].type !== "msubsup") {
        return [i.msup(this.data[0], this.data[1]), m];
      }
      this.data[0].SetData(this.data[0].sup, this.data[1]);
      return [this.data[0], m];
    }
  }), "assign");
  b.subsup = cc11001100_hook("b.subsup", b.Subclass({
    type: cc11001100_hook("type", "subsup", "object-key-init"),
    stopError: cc11001100_hook("stopError", ["MissingScript", "Missing superscript or subscript argument"], "object-key-init"),
    supError: cc11001100_hook("supError", ["MissingOpenForSup", "Missing open brace for superscript"], "object-key-init"),
    subError: cc11001100_hook("subError", ["MissingOpenForSub", "Missing open brace for subscript"], "object-key-init"),
    checkItem: function (m) {
      if (m.type === "open" || m.type === "left") {
        return true;
      }
      if (m.type === "mml") {
        if (this.primes) {
          if (this.position !== 2) {
            this.data[0].SetData(2, this.primes);
          } else {
            m.data[0] = cc11001100_hook("m.data[0]", i.mrow(this.primes.With({
              variantForm: cc11001100_hook("variantForm", true, "object-key-init")
            }), m.data[0]), "assign");
          }
        }
        this.data[0].SetData(this.position, m.data[0]);
        if (this.movesupsub != null) {
          this.data[0].movesupsub = cc11001100_hook("this.data[0].movesupsub", this.movesupsub, "assign");
        }
        return b.mml(this.data[0]);
      }
      if (this.SUPER(arguments).checkItem.call(this, m)) {
        d.Error(this[["", "subError", "supError"][this.position]]);
      }
    },
    Pop: function () {}
  }), "assign");
  b.over = cc11001100_hook("b.over", b.Subclass({
    type: cc11001100_hook("type", "over", "object-key-init"),
    isClose: cc11001100_hook("isClose", true, "object-key-init"),
    name: cc11001100_hook("name", "\\over", "object-key-init"),
    checkItem: function (o, m) {
      if (o.type === "over") {
        d.Error(["AmbiguousUseOf", "Ambiguous use of %1", o.name]);
      }
      if (o.isClose) {
        var n = cc11001100_hook("n", i.mfrac(this.num, this.mmlData(false)), "var-init");
        if (this.thickness != null) {
          n.linethickness = cc11001100_hook("n.linethickness", this.thickness, "assign");
        }
        if (this.open || this.close) {
          n.texWithDelims = cc11001100_hook("n.texWithDelims", true, "assign");
          n = cc11001100_hook("n", d.fixedFence(this.open, n, this.close), "assign");
        }
        return [b.mml(n), o];
      }
      return this.SUPER(arguments).checkItem.call(this, o);
    },
    toString: function () {
      return "over[" + this.num + " / " + this.data.join("; ") + "]";
    }
  }), "assign");
  b.left = cc11001100_hook("b.left", b.Subclass({
    type: cc11001100_hook("type", "left", "object-key-init"),
    isOpen: cc11001100_hook("isOpen", true, "object-key-init"),
    delim: cc11001100_hook("delim", "(", "object-key-init"),
    stopError: cc11001100_hook("stopError", ["ExtraLeftMissingRight", "Extra \\left or missing \\right"], "object-key-init"),
    checkItem: function (m) {
      if (m.type === "right") {
        return b.mml(d.fenced(this.delim, this.mmlData(), m.delim));
      }
      return this.SUPER(arguments).checkItem.call(this, m);
    }
  }), "assign");
  b.right = cc11001100_hook("b.right", b.Subclass({
    type: cc11001100_hook("type", "right", "object-key-init"),
    isClose: cc11001100_hook("isClose", true, "object-key-init"),
    delim: cc11001100_hook("delim", ")", "object-key-init")
  }), "assign");
  b.begin = cc11001100_hook("b.begin", b.Subclass({
    type: cc11001100_hook("type", "begin", "object-key-init"),
    isOpen: cc11001100_hook("isOpen", true, "object-key-init"),
    checkItem: function (m) {
      if (m.type === "end") {
        if (m.name !== this.name) {
          d.Error(["EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.name, m.name]);
        }
        if (!this.end) {
          return b.mml(this.mmlData());
        }
        return this.parse[this.end].call(this.parse, this, this.data);
      }
      if (m.type === "stop") {
        d.Error(["EnvMissingEnd", "Missing \\end{%1}", this.name]);
      }
      return this.SUPER(arguments).checkItem.call(this, m);
    }
  }), "assign");
  b.end = cc11001100_hook("b.end", b.Subclass({
    type: cc11001100_hook("type", "end", "object-key-init"),
    isClose: cc11001100_hook("isClose", true, "object-key-init")
  }), "assign");
  b.style = cc11001100_hook("b.style", b.Subclass({
    type: cc11001100_hook("type", "style", "object-key-init"),
    checkItem: function (n) {
      if (!n.isClose) {
        return this.SUPER(arguments).checkItem.call(this, n);
      }
      var m = cc11001100_hook("m", i.mstyle.apply(i, this.data).With(this.styles), "var-init");
      return [b.mml(m), n];
    }
  }), "assign");
  b.position = cc11001100_hook("b.position", b.Subclass({
    type: cc11001100_hook("type", "position", "object-key-init"),
    checkItem: function (n) {
      if (n.isClose) {
        d.Error(["MissingBoxFor", "Missing box for %1", this.name]);
      }
      if (n.isNotStack) {
        var m = cc11001100_hook("m", n.mmlData(), "var-init");
        switch (this.move) {
          case "vertical":
            m = cc11001100_hook("m", i.mpadded(m).With({
              height: cc11001100_hook("height", this.dh, "object-key-init"),
              depth: cc11001100_hook("depth", this.dd, "object-key-init"),
              voffset: cc11001100_hook("voffset", this.dh, "object-key-init")
            }), "assign");
            return [b.mml(m)];
          case "horizontal":
            return [b.mml(this.left), n, b.mml(this.right)];
        }
      }
      return this.SUPER(arguments).checkItem.call(this, n);
    }
  }), "assign");
  b.array = cc11001100_hook("b.array", b.Subclass({
    type: cc11001100_hook("type", "array", "object-key-init"),
    isOpen: cc11001100_hook("isOpen", true, "object-key-init"),
    copyEnv: cc11001100_hook("copyEnv", false, "object-key-init"),
    arraydef: {},
    Init: function () {
      this.table = cc11001100_hook("this.table", [], "assign");
      this.row = cc11001100_hook("this.row", [], "assign");
      this.frame = cc11001100_hook("this.frame", [], "assign");
      this.hfill = cc11001100_hook("this.hfill", [], "assign");
      this.SUPER(arguments).Init.apply(this, arguments);
    },
    checkItem: function (n) {
      if (n.isClose && n.type !== "over") {
        if (n.isEntry) {
          this.EndEntry();
          this.clearEnv();
          return false;
        }
        if (n.isCR) {
          this.EndEntry();
          this.EndRow();
          this.clearEnv();
          return false;
        }
        this.EndTable();
        this.clearEnv();
        var o = cc11001100_hook("o", this.arraydef.scriptlevel, "var-init");
        delete this.arraydef.scriptlevel;
        var m = cc11001100_hook("m", i.mtable.apply(i, this.table).With(this.arraydef), "var-init");
        if (this.frame.length === 4) {
          m.frame = cc11001100_hook("m.frame", this.frame.dashed ? "dashed" : "solid", "assign");
        } else {
          if (this.frame.length) {
            m.hasFrame = cc11001100_hook("m.hasFrame", true, "assign");
            if (this.arraydef.rowlines) {
              this.arraydef.rowlines = cc11001100_hook("this.arraydef.rowlines", this.arraydef.rowlines.replace(/none( none)+$/, "none"), "assign");
            }
            m = cc11001100_hook("m", i.menclose(m).With({
              notation: cc11001100_hook("notation", this.frame.join(" "), "object-key-init"),
              isFrame: cc11001100_hook("isFrame", true, "object-key-init")
            }), "assign");
            if ((this.arraydef.columnlines || "none") != "none" || (this.arraydef.rowlines || "none") != "none") {
              m.padding = cc11001100_hook("m.padding", 0, "assign");
            }
          }
        }
        if (o) {
          m = cc11001100_hook("m", i.mstyle(m).With({
            scriptlevel: cc11001100_hook("scriptlevel", o, "object-key-init")
          }), "assign");
        }
        if (this.open || this.close) {
          m = cc11001100_hook("m", d.fenced(this.open, m, this.close), "assign");
        }
        m = cc11001100_hook("m", b.mml(m), "assign");
        if (this.requireClose) {
          if (n.type === "close") {
            return m;
          }
          d.Error(["MissingCloseBrace", "Missing close brace"]);
        }
        return [m, n];
      }
      return this.SUPER(arguments).checkItem.call(this, n);
    },
    EndEntry: function () {
      var m = cc11001100_hook("m", i.mtd.apply(i, this.data), "var-init");
      if (this.hfill.length) {
        if (this.hfill[0] === 0) {
          m.columnalign = cc11001100_hook("m.columnalign", "right", "assign");
        }
        if (this.hfill[this.hfill.length - 1] === this.data.length) {
          m.columnalign = cc11001100_hook("m.columnalign", m.columnalign ? "center" : "left", "assign");
        }
      }
      this.row.push(m);
      this.data = cc11001100_hook("this.data", [], "assign");
      this.hfill = cc11001100_hook("this.hfill", [], "assign");
    },
    EndRow: function () {
      var m = cc11001100_hook("m", i.mtr, "var-init");
      if (this.isNumbered && this.row.length === 3) {
        this.row.unshift(this.row.pop());
        m = cc11001100_hook("m", i.mlabeledtr, "assign");
      }
      this.table.push(m.apply(i, this.row));
      this.row = cc11001100_hook("this.row", [], "assign");
    },
    EndTable: function () {
      if (this.data.length || this.row.length) {
        this.EndEntry();
        this.EndRow();
      }
      this.checkLines();
    },
    checkLines: function () {
      if (this.arraydef.rowlines) {
        var m = cc11001100_hook("m", this.arraydef.rowlines.split(/ /), "var-init");
        if (m.length === this.table.length) {
          this.frame.push("bottom");
          m.pop();
          this.arraydef.rowlines = cc11001100_hook("this.arraydef.rowlines", m.join(" "), "assign");
        } else {
          if (m.length < this.table.length - 1) {
            this.arraydef.rowlines += cc11001100_hook("this.arraydef.rowlines", " none", "assign");
          }
        }
      }
      if (this.rowspacing) {
        var n = cc11001100_hook("n", this.arraydef.rowspacing.split(/ /), "var-init");
        while (n.length < this.table.length) {
          n.push(this.rowspacing + "em");
        }
        this.arraydef.rowspacing = cc11001100_hook("this.arraydef.rowspacing", n.join(" "), "assign");
      }
    },
    clearEnv: function () {
      for (var m in this.env) {
        if (this.env.hasOwnProperty(m)) {
          delete this.env[m];
        }
      }
    }
  }), "assign");
  b.cell = cc11001100_hook("b.cell", b.Subclass({
    type: cc11001100_hook("type", "cell", "object-key-init"),
    isClose: cc11001100_hook("isClose", true, "object-key-init")
  }), "assign");
  b.mml = cc11001100_hook("b.mml", b.Subclass({
    type: cc11001100_hook("type", "mml", "object-key-init"),
    isNotStack: cc11001100_hook("isNotStack", true, "object-key-init"),
    Add: function () {
      this.data.push.apply(this.data, arguments);
      return this;
    }
  }), "assign");
  b.fn = cc11001100_hook("b.fn", b.Subclass({
    type: cc11001100_hook("type", "fn", "object-key-init"),
    checkItem: function (n) {
      if (this.data[0]) {
        if (n.isOpen) {
          return true;
        }
        if (n.type !== "fn") {
          if (n.type !== "mml" || !n.data[0]) {
            return [this.data[0], n];
          }
          if (n.data[0].isa(i.mspace)) {
            return [this.data[0], n];
          }
          var m = cc11001100_hook("m", n.data[0], "var-init");
          if (m.isEmbellished()) {
            m = cc11001100_hook("m", m.CoreMO(), "assign");
          }
          if ([0, 0, 1, 1, 0, 1, 1, 0, 0, 0][m.Get("texClass")]) {
            return [this.data[0], n];
          }
        }
        return [this.data[0], i.mo(i.entity("#x2061")).With({
          texClass: cc11001100_hook("texClass", i.TEXCLASS.NONE, "object-key-init")
        }), n];
      }
      return this.SUPER(arguments).checkItem.apply(this, arguments);
    }
  }), "assign");
  b.not = cc11001100_hook("b.not", b.Subclass({
    type: cc11001100_hook("type", "not", "object-key-init"),
    checkItem: function (n) {
      var m, o;
      if (n.type === "open" || n.type === "left") {
        return true;
      }
      if (n.type === "mml" && n.data[0].type.match(/^(mo|mi|mtext)$/)) {
        m = cc11001100_hook("m", n.data[0], "assign"), o = cc11001100_hook("o", m.data.join(""), "assign");
        if (o.length === 1 && !m.movesupsub && m.data.length === 1) {
          o = cc11001100_hook("o", b.not.remap[o.charCodeAt(0)], "assign");
          if (o) {
            m.SetData(0, i.chars(String.fromCharCode(o)));
          } else {
            m.Append(i.chars("\u0338"));
          }
          return n;
        }
      }
      m = cc11001100_hook("m", i.mpadded(i.mtext("\u29F8")).With({
        width: cc11001100_hook("width", 0, "object-key-init")
      }), "assign");
      m = cc11001100_hook("m", i.TeXAtom(m).With({
        texClass: cc11001100_hook("texClass", i.TEXCLASS.REL, "object-key-init")
      }), "assign");
      return [m, n];
    }
  }), "assign");
  b.not.remap = cc11001100_hook("b.not.remap", {
    8592: cc11001100_hook(8592, 8602, "object-key-init"),
    8594: cc11001100_hook(8594, 8603, "object-key-init"),
    8596: cc11001100_hook(8596, 8622, "object-key-init"),
    8656: cc11001100_hook(8656, 8653, "object-key-init"),
    8658: cc11001100_hook(8658, 8655, "object-key-init"),
    8660: cc11001100_hook(8660, 8654, "object-key-init"),
    8712: cc11001100_hook(8712, 8713, "object-key-init"),
    8715: cc11001100_hook(8715, 8716, "object-key-init"),
    8739: cc11001100_hook(8739, 8740, "object-key-init"),
    8741: cc11001100_hook(8741, 8742, "object-key-init"),
    8764: cc11001100_hook(8764, 8769, "object-key-init"),
    126: cc11001100_hook(126, 8769, "object-key-init"),
    8771: cc11001100_hook(8771, 8772, "object-key-init"),
    8773: cc11001100_hook(8773, 8775, "object-key-init"),
    8776: cc11001100_hook(8776, 8777, "object-key-init"),
    8781: cc11001100_hook(8781, 8813, "object-key-init"),
    61: cc11001100_hook(61, 8800, "object-key-init"),
    8801: cc11001100_hook(8801, 8802, "object-key-init"),
    60: cc11001100_hook(60, 8814, "object-key-init"),
    62: cc11001100_hook(62, 8815, "object-key-init"),
    8804: cc11001100_hook(8804, 8816, "object-key-init"),
    8805: cc11001100_hook(8805, 8817, "object-key-init"),
    8818: cc11001100_hook(8818, 8820, "object-key-init"),
    8819: cc11001100_hook(8819, 8821, "object-key-init"),
    8822: cc11001100_hook(8822, 8824, "object-key-init"),
    8823: cc11001100_hook(8823, 8825, "object-key-init"),
    8826: cc11001100_hook(8826, 8832, "object-key-init"),
    8827: cc11001100_hook(8827, 8833, "object-key-init"),
    8834: cc11001100_hook(8834, 8836, "object-key-init"),
    8835: cc11001100_hook(8835, 8837, "object-key-init"),
    8838: cc11001100_hook(8838, 8840, "object-key-init"),
    8839: cc11001100_hook(8839, 8841, "object-key-init"),
    8866: cc11001100_hook(8866, 8876, "object-key-init"),
    8872: cc11001100_hook(8872, 8877, "object-key-init"),
    8873: cc11001100_hook(8873, 8878, "object-key-init"),
    8875: cc11001100_hook(8875, 8879, "object-key-init"),
    8828: cc11001100_hook(8828, 8928, "object-key-init"),
    8829: cc11001100_hook(8829, 8929, "object-key-init"),
    8849: cc11001100_hook(8849, 8930, "object-key-init"),
    8850: cc11001100_hook(8850, 8931, "object-key-init"),
    8882: cc11001100_hook(8882, 8938, "object-key-init"),
    8883: cc11001100_hook(8883, 8939, "object-key-init"),
    8884: cc11001100_hook(8884, 8940, "object-key-init"),
    8885: cc11001100_hook(8885, 8941, "object-key-init"),
    8707: cc11001100_hook(8707, 8708, "object-key-init")
  }, "assign");
  b.dots = cc11001100_hook("b.dots", b.Subclass({
    type: cc11001100_hook("type", "dots", "object-key-init"),
    checkItem: function (n) {
      if (n.type === "open" || n.type === "left") {
        return true;
      }
      var o = cc11001100_hook("o", this.ldots, "var-init");
      if (n.type === "mml" && n.data[0].isEmbellished()) {
        var m = cc11001100_hook("m", n.data[0].CoreMO().Get("texClass"), "var-init");
        if (m === i.TEXCLASS.BIN || m === i.TEXCLASS.REL) {
          o = cc11001100_hook("o", this.cdots, "assign");
        }
      }
      return [o, n];
    }
  }), "assign");
  var g = cc11001100_hook("g", {
    Add: function (m, p, o) {
      if (!p) {
        p = cc11001100_hook("p", this, "assign");
      }
      for (var n in m) {
        if (m.hasOwnProperty(n)) {
          if (typeof m[n] === "object" && !f(m[n]) && (typeof p[n] === "object" || typeof p[n] === "function")) {
            this.Add(m[n], p[n], m[n], o);
          } else {
            if (!p[n] || !p[n].isUser || !o) {
              p[n] = cc11001100_hook("p[n]", m[n], "assign");
            }
          }
        }
      }
      return p;
    }
  }, "var-init");
  var l = function () {
    i = cc11001100_hook("i", MathJax.ElementJax.mml, "assign");
    c.Insert(g, {
      letter: cc11001100_hook("letter", /[a-z]/i, "object-key-init"),
      digit: cc11001100_hook("digit", /[0-9.]/, "object-key-init"),
      number: cc11001100_hook("number", /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)*|\.[0-9]+)/, "object-key-init"),
      special: {
        "\\": cc11001100_hook("\\", "ControlSequence", "object-key-init"),
        "{": cc11001100_hook("{", "Open", "object-key-init"),
        "}": cc11001100_hook("}", "Close", "object-key-init"),
        "~": cc11001100_hook("~", "Tilde", "object-key-init"),
        "^": cc11001100_hook("^", "Superscript", "object-key-init"),
        _: cc11001100_hook("_", "Subscript", "object-key-init"),
        " ": cc11001100_hook(" ", "Space", "object-key-init"),
        "\t": cc11001100_hook("\t", "Space", "object-key-init"),
        "\r": cc11001100_hook("\r", "Space", "object-key-init"),
        "\n": cc11001100_hook("\n", "Space", "object-key-init"),
        "'": cc11001100_hook("'", "Prime", "object-key-init"),
        "%": cc11001100_hook("%", "Comment", "object-key-init"),
        "&": cc11001100_hook("&", "Entry", "object-key-init"),
        "#": cc11001100_hook("#", "Hash", "object-key-init"),
        "\u00A0": cc11001100_hook("\u00A0", "Space", "object-key-init"),
        "\u2019": cc11001100_hook("\u2019", "Prime", "object-key-init")
      },
      remap: {
        "-": cc11001100_hook("-", "2212", "object-key-init"),
        "*": cc11001100_hook("*", "2217", "object-key-init"),
        "`": cc11001100_hook("`", "2018", "object-key-init")
      },
      mathchar0mi: {
        alpha: cc11001100_hook("alpha", "03B1", "object-key-init"),
        beta: cc11001100_hook("beta", "03B2", "object-key-init"),
        gamma: cc11001100_hook("gamma", "03B3", "object-key-init"),
        delta: cc11001100_hook("delta", "03B4", "object-key-init"),
        epsilon: cc11001100_hook("epsilon", "03F5", "object-key-init"),
        zeta: cc11001100_hook("zeta", "03B6", "object-key-init"),
        eta: cc11001100_hook("eta", "03B7", "object-key-init"),
        theta: cc11001100_hook("theta", "03B8", "object-key-init"),
        iota: cc11001100_hook("iota", "03B9", "object-key-init"),
        kappa: cc11001100_hook("kappa", "03BA", "object-key-init"),
        lambda: cc11001100_hook("lambda", "03BB", "object-key-init"),
        mu: cc11001100_hook("mu", "03BC", "object-key-init"),
        nu: cc11001100_hook("nu", "03BD", "object-key-init"),
        xi: cc11001100_hook("xi", "03BE", "object-key-init"),
        omicron: cc11001100_hook("omicron", "03BF", "object-key-init"),
        pi: cc11001100_hook("pi", "03C0", "object-key-init"),
        rho: cc11001100_hook("rho", "03C1", "object-key-init"),
        sigma: cc11001100_hook("sigma", "03C3", "object-key-init"),
        tau: cc11001100_hook("tau", "03C4", "object-key-init"),
        upsilon: cc11001100_hook("upsilon", "03C5", "object-key-init"),
        phi: cc11001100_hook("phi", "03D5", "object-key-init"),
        chi: cc11001100_hook("chi", "03C7", "object-key-init"),
        psi: cc11001100_hook("psi", "03C8", "object-key-init"),
        omega: cc11001100_hook("omega", "03C9", "object-key-init"),
        varepsilon: cc11001100_hook("varepsilon", "03B5", "object-key-init"),
        vartheta: cc11001100_hook("vartheta", "03D1", "object-key-init"),
        varpi: cc11001100_hook("varpi", "03D6", "object-key-init"),
        varrho: cc11001100_hook("varrho", "03F1", "object-key-init"),
        varsigma: cc11001100_hook("varsigma", "03C2", "object-key-init"),
        varphi: cc11001100_hook("varphi", "03C6", "object-key-init"),
        S: cc11001100_hook("S", ["00A7", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        aleph: cc11001100_hook("aleph", ["2135", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        hbar: cc11001100_hook("hbar", ["210F", {
          variantForm: cc11001100_hook("variantForm", true, "object-key-init")
        }], "object-key-init"),
        imath: cc11001100_hook("imath", "0131", "object-key-init"),
        jmath: cc11001100_hook("jmath", "0237", "object-key-init"),
        ell: cc11001100_hook("ell", "2113", "object-key-init"),
        wp: cc11001100_hook("wp", ["2118", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        Re: cc11001100_hook("Re", ["211C", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        Im: cc11001100_hook("Im", ["2111", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        partial: cc11001100_hook("partial", ["2202", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        infty: cc11001100_hook("infty", ["221E", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        prime: cc11001100_hook("prime", ["2032", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init"),
          variantForm: cc11001100_hook("variantForm", true, "object-key-init")
        }], "object-key-init"),
        emptyset: cc11001100_hook("emptyset", ["2205", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        nabla: cc11001100_hook("nabla", ["2207", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        top: cc11001100_hook("top", ["22A4", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        bot: cc11001100_hook("bot", ["22A5", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        angle: cc11001100_hook("angle", ["2220", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        triangle: cc11001100_hook("triangle", ["25B3", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        backslash: cc11001100_hook("backslash", ["2216", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init"),
          variantForm: cc11001100_hook("variantForm", true, "object-key-init")
        }], "object-key-init"),
        forall: cc11001100_hook("forall", ["2200", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        exists: cc11001100_hook("exists", ["2203", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        neg: cc11001100_hook("neg", ["00AC", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        lnot: cc11001100_hook("lnot", ["00AC", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        flat: cc11001100_hook("flat", ["266D", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        natural: cc11001100_hook("natural", ["266E", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        sharp: cc11001100_hook("sharp", ["266F", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        clubsuit: cc11001100_hook("clubsuit", ["2663", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        diamondsuit: cc11001100_hook("diamondsuit", ["2662", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        heartsuit: cc11001100_hook("heartsuit", ["2661", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init"),
        spadesuit: cc11001100_hook("spadesuit", ["2660", {
          mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
        }], "object-key-init")
      },
      mathchar0mo: {
        surd: cc11001100_hook("surd", "221A", "object-key-init"),
        coprod: cc11001100_hook("coprod", ["2210", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        bigvee: cc11001100_hook("bigvee", ["22C1", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        bigwedge: cc11001100_hook("bigwedge", ["22C0", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        biguplus: cc11001100_hook("biguplus", ["2A04", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        bigcap: cc11001100_hook("bigcap", ["22C2", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        bigcup: cc11001100_hook("bigcup", ["22C3", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        "int": cc11001100_hook("int", ["222B", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init")
        }], "object-key-init"),
        intop: cc11001100_hook("intop", ["222B", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init"),
          movablelimits: cc11001100_hook("movablelimits", true, "object-key-init")
        }], "object-key-init"),
        iint: cc11001100_hook("iint", ["222C", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init")
        }], "object-key-init"),
        iiint: cc11001100_hook("iiint", ["222D", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init")
        }], "object-key-init"),
        prod: cc11001100_hook("prod", ["220F", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        sum: cc11001100_hook("sum", ["2211", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        bigotimes: cc11001100_hook("bigotimes", ["2A02", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        bigoplus: cc11001100_hook("bigoplus", ["2A01", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        bigodot: cc11001100_hook("bigodot", ["2A00", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        oint: cc11001100_hook("oint", ["222E", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init")
        }], "object-key-init"),
        bigsqcup: cc11001100_hook("bigsqcup", ["2A06", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }], "object-key-init"),
        smallint: cc11001100_hook("smallint", ["222B", {
          largeop: cc11001100_hook("largeop", false, "object-key-init")
        }], "object-key-init"),
        triangleleft: cc11001100_hook("triangleleft", "25C3", "object-key-init"),
        triangleright: cc11001100_hook("triangleright", "25B9", "object-key-init"),
        bigtriangleup: cc11001100_hook("bigtriangleup", "25B3", "object-key-init"),
        bigtriangledown: cc11001100_hook("bigtriangledown", "25BD", "object-key-init"),
        wedge: cc11001100_hook("wedge", "2227", "object-key-init"),
        land: cc11001100_hook("land", "2227", "object-key-init"),
        vee: cc11001100_hook("vee", "2228", "object-key-init"),
        lor: cc11001100_hook("lor", "2228", "object-key-init"),
        cap: cc11001100_hook("cap", "2229", "object-key-init"),
        cup: cc11001100_hook("cup", "222A", "object-key-init"),
        ddagger: cc11001100_hook("ddagger", "2021", "object-key-init"),
        dagger: cc11001100_hook("dagger", "2020", "object-key-init"),
        sqcap: cc11001100_hook("sqcap", "2293", "object-key-init"),
        sqcup: cc11001100_hook("sqcup", "2294", "object-key-init"),
        uplus: cc11001100_hook("uplus", "228E", "object-key-init"),
        amalg: cc11001100_hook("amalg", "2A3F", "object-key-init"),
        diamond: cc11001100_hook("diamond", "22C4", "object-key-init"),
        bullet: cc11001100_hook("bullet", "2219", "object-key-init"),
        wr: cc11001100_hook("wr", "2240", "object-key-init"),
        div: cc11001100_hook("div", "00F7", "object-key-init"),
        odot: cc11001100_hook("odot", ["2299", {
          largeop: cc11001100_hook("largeop", false, "object-key-init")
        }], "object-key-init"),
        oslash: cc11001100_hook("oslash", ["2298", {
          largeop: cc11001100_hook("largeop", false, "object-key-init")
        }], "object-key-init"),
        otimes: cc11001100_hook("otimes", ["2297", {
          largeop: cc11001100_hook("largeop", false, "object-key-init")
        }], "object-key-init"),
        ominus: cc11001100_hook("ominus", ["2296", {
          largeop: cc11001100_hook("largeop", false, "object-key-init")
        }], "object-key-init"),
        oplus: cc11001100_hook("oplus", ["2295", {
          largeop: cc11001100_hook("largeop", false, "object-key-init")
        }], "object-key-init"),
        mp: cc11001100_hook("mp", "2213", "object-key-init"),
        pm: cc11001100_hook("pm", "00B1", "object-key-init"),
        circ: cc11001100_hook("circ", "2218", "object-key-init"),
        bigcirc: cc11001100_hook("bigcirc", "25EF", "object-key-init"),
        setminus: cc11001100_hook("setminus", ["2216", {
          variantForm: cc11001100_hook("variantForm", true, "object-key-init")
        }], "object-key-init"),
        cdot: cc11001100_hook("cdot", "22C5", "object-key-init"),
        ast: cc11001100_hook("ast", "2217", "object-key-init"),
        times: cc11001100_hook("times", "00D7", "object-key-init"),
        star: cc11001100_hook("star", "22C6", "object-key-init"),
        propto: cc11001100_hook("propto", "221D", "object-key-init"),
        sqsubseteq: cc11001100_hook("sqsubseteq", "2291", "object-key-init"),
        sqsupseteq: cc11001100_hook("sqsupseteq", "2292", "object-key-init"),
        parallel: cc11001100_hook("parallel", "2225", "object-key-init"),
        mid: cc11001100_hook("mid", "2223", "object-key-init"),
        dashv: cc11001100_hook("dashv", "22A3", "object-key-init"),
        vdash: cc11001100_hook("vdash", "22A2", "object-key-init"),
        leq: cc11001100_hook("leq", "2264", "object-key-init"),
        le: cc11001100_hook("le", "2264", "object-key-init"),
        geq: cc11001100_hook("geq", "2265", "object-key-init"),
        ge: cc11001100_hook("ge", "2265", "object-key-init"),
        lt: cc11001100_hook("lt", "003C", "object-key-init"),
        gt: cc11001100_hook("gt", "003E", "object-key-init"),
        succ: cc11001100_hook("succ", "227B", "object-key-init"),
        prec: cc11001100_hook("prec", "227A", "object-key-init"),
        approx: cc11001100_hook("approx", "2248", "object-key-init"),
        succeq: cc11001100_hook("succeq", "2AB0", "object-key-init"),
        preceq: cc11001100_hook("preceq", "2AAF", "object-key-init"),
        supset: cc11001100_hook("supset", "2283", "object-key-init"),
        subset: cc11001100_hook("subset", "2282", "object-key-init"),
        supseteq: cc11001100_hook("supseteq", "2287", "object-key-init"),
        subseteq: cc11001100_hook("subseteq", "2286", "object-key-init"),
        "in": cc11001100_hook("in", "2208", "object-key-init"),
        ni: cc11001100_hook("ni", "220B", "object-key-init"),
        notin: cc11001100_hook("notin", "2209", "object-key-init"),
        owns: cc11001100_hook("owns", "220B", "object-key-init"),
        gg: cc11001100_hook("gg", "226B", "object-key-init"),
        ll: cc11001100_hook("ll", "226A", "object-key-init"),
        sim: cc11001100_hook("sim", "223C", "object-key-init"),
        simeq: cc11001100_hook("simeq", "2243", "object-key-init"),
        perp: cc11001100_hook("perp", "22A5", "object-key-init"),
        equiv: cc11001100_hook("equiv", "2261", "object-key-init"),
        asymp: cc11001100_hook("asymp", "224D", "object-key-init"),
        smile: cc11001100_hook("smile", "2323", "object-key-init"),
        frown: cc11001100_hook("frown", "2322", "object-key-init"),
        ne: cc11001100_hook("ne", "2260", "object-key-init"),
        neq: cc11001100_hook("neq", "2260", "object-key-init"),
        cong: cc11001100_hook("cong", "2245", "object-key-init"),
        doteq: cc11001100_hook("doteq", "2250", "object-key-init"),
        bowtie: cc11001100_hook("bowtie", "22C8", "object-key-init"),
        models: cc11001100_hook("models", "22A8", "object-key-init"),
        notChar: cc11001100_hook("notChar", "29F8", "object-key-init"),
        Leftrightarrow: cc11001100_hook("Leftrightarrow", "21D4", "object-key-init"),
        Leftarrow: cc11001100_hook("Leftarrow", "21D0", "object-key-init"),
        Rightarrow: cc11001100_hook("Rightarrow", "21D2", "object-key-init"),
        leftrightarrow: cc11001100_hook("leftrightarrow", "2194", "object-key-init"),
        leftarrow: cc11001100_hook("leftarrow", "2190", "object-key-init"),
        gets: cc11001100_hook("gets", "2190", "object-key-init"),
        rightarrow: cc11001100_hook("rightarrow", "2192", "object-key-init"),
        to: cc11001100_hook("to", "2192", "object-key-init"),
        mapsto: cc11001100_hook("mapsto", "21A6", "object-key-init"),
        leftharpoonup: cc11001100_hook("leftharpoonup", "21BC", "object-key-init"),
        leftharpoondown: cc11001100_hook("leftharpoondown", "21BD", "object-key-init"),
        rightharpoonup: cc11001100_hook("rightharpoonup", "21C0", "object-key-init"),
        rightharpoondown: cc11001100_hook("rightharpoondown", "21C1", "object-key-init"),
        nearrow: cc11001100_hook("nearrow", "2197", "object-key-init"),
        searrow: cc11001100_hook("searrow", "2198", "object-key-init"),
        nwarrow: cc11001100_hook("nwarrow", "2196", "object-key-init"),
        swarrow: cc11001100_hook("swarrow", "2199", "object-key-init"),
        rightleftharpoons: cc11001100_hook("rightleftharpoons", "21CC", "object-key-init"),
        hookrightarrow: cc11001100_hook("hookrightarrow", "21AA", "object-key-init"),
        hookleftarrow: cc11001100_hook("hookleftarrow", "21A9", "object-key-init"),
        longleftarrow: cc11001100_hook("longleftarrow", "27F5", "object-key-init"),
        Longleftarrow: cc11001100_hook("Longleftarrow", "27F8", "object-key-init"),
        longrightarrow: cc11001100_hook("longrightarrow", "27F6", "object-key-init"),
        Longrightarrow: cc11001100_hook("Longrightarrow", "27F9", "object-key-init"),
        Longleftrightarrow: cc11001100_hook("Longleftrightarrow", "27FA", "object-key-init"),
        longleftrightarrow: cc11001100_hook("longleftrightarrow", "27F7", "object-key-init"),
        longmapsto: cc11001100_hook("longmapsto", "27FC", "object-key-init"),
        ldots: cc11001100_hook("ldots", "2026", "object-key-init"),
        cdots: cc11001100_hook("cdots", "22EF", "object-key-init"),
        vdots: cc11001100_hook("vdots", "22EE", "object-key-init"),
        ddots: cc11001100_hook("ddots", "22F1", "object-key-init"),
        dotsc: cc11001100_hook("dotsc", "2026", "object-key-init"),
        dotsb: cc11001100_hook("dotsb", "22EF", "object-key-init"),
        dotsm: cc11001100_hook("dotsm", "22EF", "object-key-init"),
        dotsi: cc11001100_hook("dotsi", "22EF", "object-key-init"),
        dotso: cc11001100_hook("dotso", "2026", "object-key-init"),
        ldotp: cc11001100_hook("ldotp", ["002E", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.PUNCT, "object-key-init")
        }], "object-key-init"),
        cdotp: cc11001100_hook("cdotp", ["22C5", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.PUNCT, "object-key-init")
        }], "object-key-init"),
        colon: cc11001100_hook("colon", ["003A", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.PUNCT, "object-key-init")
        }], "object-key-init")
      },
      mathchar7: {
        Gamma: cc11001100_hook("Gamma", "0393", "object-key-init"),
        Delta: cc11001100_hook("Delta", "0394", "object-key-init"),
        Theta: cc11001100_hook("Theta", "0398", "object-key-init"),
        Lambda: cc11001100_hook("Lambda", "039B", "object-key-init"),
        Xi: cc11001100_hook("Xi", "039E", "object-key-init"),
        Pi: cc11001100_hook("Pi", "03A0", "object-key-init"),
        Sigma: cc11001100_hook("Sigma", "03A3", "object-key-init"),
        Upsilon: cc11001100_hook("Upsilon", "03A5", "object-key-init"),
        Phi: cc11001100_hook("Phi", "03A6", "object-key-init"),
        Psi: cc11001100_hook("Psi", "03A8", "object-key-init"),
        Omega: cc11001100_hook("Omega", "03A9", "object-key-init"),
        _: cc11001100_hook("_", "005F", "object-key-init"),
        "#": cc11001100_hook("#", "0023", "object-key-init"),
        "$": cc11001100_hook("$", "0024", "object-key-init"),
        "%": cc11001100_hook("%", "0025", "object-key-init"),
        "&": cc11001100_hook("&", "0026", "object-key-init"),
        And: cc11001100_hook("And", "0026", "object-key-init")
      },
      delimiter: {
        "(": cc11001100_hook("(", "(", "object-key-init"),
        ")": cc11001100_hook(")", ")", "object-key-init"),
        "[": cc11001100_hook("[", "[", "object-key-init"),
        "]": cc11001100_hook("]", "]", "object-key-init"),
        "<": cc11001100_hook("<", "27E8", "object-key-init"),
        ">": cc11001100_hook(">", "27E9", "object-key-init"),
        "\\lt": cc11001100_hook("\\lt", "27E8", "object-key-init"),
        "\\gt": cc11001100_hook("\\gt", "27E9", "object-key-init"),
        "/": cc11001100_hook("/", "/", "object-key-init"),
        "|": cc11001100_hook("|", ["|", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.ORD, "object-key-init")
        }], "object-key-init"),
        ".": cc11001100_hook(".", "", "object-key-init"),
        "\\\\": cc11001100_hook("\\\\", "\\", "object-key-init"),
        "\\lmoustache": cc11001100_hook("\\lmoustache", "23B0", "object-key-init"),
        "\\rmoustache": cc11001100_hook("\\rmoustache", "23B1", "object-key-init"),
        "\\lgroup": cc11001100_hook("\\lgroup", "27EE", "object-key-init"),
        "\\rgroup": cc11001100_hook("\\rgroup", "27EF", "object-key-init"),
        "\\arrowvert": cc11001100_hook("\\arrowvert", "23D0", "object-key-init"),
        "\\Arrowvert": cc11001100_hook("\\Arrowvert", "2016", "object-key-init"),
        "\\bracevert": cc11001100_hook("\\bracevert", "23AA", "object-key-init"),
        "\\Vert": cc11001100_hook("\\Vert", ["2016", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.ORD, "object-key-init")
        }], "object-key-init"),
        "\\|": cc11001100_hook("\\|", ["2016", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.ORD, "object-key-init")
        }], "object-key-init"),
        "\\vert": cc11001100_hook("\\vert", ["|", {
          texClass: cc11001100_hook("texClass", i.TEXCLASS.ORD, "object-key-init")
        }], "object-key-init"),
        "\\uparrow": cc11001100_hook("\\uparrow", "2191", "object-key-init"),
        "\\downarrow": cc11001100_hook("\\downarrow", "2193", "object-key-init"),
        "\\updownarrow": cc11001100_hook("\\updownarrow", "2195", "object-key-init"),
        "\\Uparrow": cc11001100_hook("\\Uparrow", "21D1", "object-key-init"),
        "\\Downarrow": cc11001100_hook("\\Downarrow", "21D3", "object-key-init"),
        "\\Updownarrow": cc11001100_hook("\\Updownarrow", "21D5", "object-key-init"),
        "\\backslash": cc11001100_hook("\\backslash", "\\", "object-key-init"),
        "\\rangle": cc11001100_hook("\\rangle", "27E9", "object-key-init"),
        "\\langle": cc11001100_hook("\\langle", "27E8", "object-key-init"),
        "\\rbrace": cc11001100_hook("\\rbrace", "}", "object-key-init"),
        "\\lbrace": cc11001100_hook("\\lbrace", "{", "object-key-init"),
        "\\}": cc11001100_hook("\\}", "}", "object-key-init"),
        "\\{": cc11001100_hook("\\{", "{", "object-key-init"),
        "\\rceil": cc11001100_hook("\\rceil", "2309", "object-key-init"),
        "\\lceil": cc11001100_hook("\\lceil", "2308", "object-key-init"),
        "\\rfloor": cc11001100_hook("\\rfloor", "230B", "object-key-init"),
        "\\lfloor": cc11001100_hook("\\lfloor", "230A", "object-key-init"),
        "\\lbrack": cc11001100_hook("\\lbrack", "[", "object-key-init"),
        "\\rbrack": cc11001100_hook("\\rbrack", "]", "object-key-init")
      },
      macros: {
        displaystyle: cc11001100_hook("displaystyle", ["SetStyle", "D", true, 0], "object-key-init"),
        textstyle: cc11001100_hook("textstyle", ["SetStyle", "T", false, 0], "object-key-init"),
        scriptstyle: cc11001100_hook("scriptstyle", ["SetStyle", "S", false, 1], "object-key-init"),
        scriptscriptstyle: cc11001100_hook("scriptscriptstyle", ["SetStyle", "SS", false, 2], "object-key-init"),
        rm: cc11001100_hook("rm", ["SetFont", i.VARIANT.NORMAL], "object-key-init"),
        mit: cc11001100_hook("mit", ["SetFont", i.VARIANT.ITALIC], "object-key-init"),
        oldstyle: cc11001100_hook("oldstyle", ["SetFont", i.VARIANT.OLDSTYLE], "object-key-init"),
        cal: cc11001100_hook("cal", ["SetFont", i.VARIANT.CALIGRAPHIC], "object-key-init"),
        it: cc11001100_hook("it", ["SetFont", "-tex-mathit"], "object-key-init"),
        bf: cc11001100_hook("bf", ["SetFont", i.VARIANT.BOLD], "object-key-init"),
        bbFont: cc11001100_hook("bbFont", ["SetFont", i.VARIANT.DOUBLESTRUCK], "object-key-init"),
        scr: cc11001100_hook("scr", ["SetFont", i.VARIANT.SCRIPT], "object-key-init"),
        frak: cc11001100_hook("frak", ["SetFont", i.VARIANT.FRAKTUR], "object-key-init"),
        sf: cc11001100_hook("sf", ["SetFont", i.VARIANT.SANSSERIF], "object-key-init"),
        tt: cc11001100_hook("tt", ["SetFont", i.VARIANT.MONOSPACE], "object-key-init"),
        tiny: cc11001100_hook("tiny", ["SetSize", 0.5], "object-key-init"),
        Tiny: cc11001100_hook("Tiny", ["SetSize", 0.6], "object-key-init"),
        scriptsize: cc11001100_hook("scriptsize", ["SetSize", 0.7], "object-key-init"),
        small: cc11001100_hook("small", ["SetSize", 0.85], "object-key-init"),
        normalsize: cc11001100_hook("normalsize", ["SetSize", 1], "object-key-init"),
        large: cc11001100_hook("large", ["SetSize", 1.2], "object-key-init"),
        Large: cc11001100_hook("Large", ["SetSize", 1.44], "object-key-init"),
        LARGE: cc11001100_hook("LARGE", ["SetSize", 1.73], "object-key-init"),
        huge: cc11001100_hook("huge", ["SetSize", 2.07], "object-key-init"),
        Huge: cc11001100_hook("Huge", ["SetSize", 2.49], "object-key-init"),
        arcsin: cc11001100_hook("arcsin", ["NamedFn"], "object-key-init"),
        arccos: cc11001100_hook("arccos", ["NamedFn"], "object-key-init"),
        arctan: cc11001100_hook("arctan", ["NamedFn"], "object-key-init"),
        arg: cc11001100_hook("arg", ["NamedFn"], "object-key-init"),
        cos: cc11001100_hook("cos", ["NamedFn"], "object-key-init"),
        cosh: cc11001100_hook("cosh", ["NamedFn"], "object-key-init"),
        cot: cc11001100_hook("cot", ["NamedFn"], "object-key-init"),
        coth: cc11001100_hook("coth", ["NamedFn"], "object-key-init"),
        csc: cc11001100_hook("csc", ["NamedFn"], "object-key-init"),
        deg: cc11001100_hook("deg", ["NamedFn"], "object-key-init"),
        det: cc11001100_hook("det", "NamedOp", "object-key-init"),
        dim: cc11001100_hook("dim", ["NamedFn"], "object-key-init"),
        exp: cc11001100_hook("exp", ["NamedFn"], "object-key-init"),
        gcd: cc11001100_hook("gcd", "NamedOp", "object-key-init"),
        hom: cc11001100_hook("hom", ["NamedFn"], "object-key-init"),
        inf: cc11001100_hook("inf", "NamedOp", "object-key-init"),
        ker: cc11001100_hook("ker", ["NamedFn"], "object-key-init"),
        lg: cc11001100_hook("lg", ["NamedFn"], "object-key-init"),
        lim: cc11001100_hook("lim", "NamedOp", "object-key-init"),
        liminf: cc11001100_hook("liminf", ["NamedOp", "lim&thinsp;inf"], "object-key-init"),
        limsup: cc11001100_hook("limsup", ["NamedOp", "lim&thinsp;sup"], "object-key-init"),
        ln: cc11001100_hook("ln", ["NamedFn"], "object-key-init"),
        log: cc11001100_hook("log", ["NamedFn"], "object-key-init"),
        max: cc11001100_hook("max", "NamedOp", "object-key-init"),
        min: cc11001100_hook("min", "NamedOp", "object-key-init"),
        Pr: cc11001100_hook("Pr", "NamedOp", "object-key-init"),
        sec: cc11001100_hook("sec", ["NamedFn"], "object-key-init"),
        sin: cc11001100_hook("sin", ["NamedFn"], "object-key-init"),
        sinh: cc11001100_hook("sinh", ["NamedFn"], "object-key-init"),
        sup: cc11001100_hook("sup", "NamedOp", "object-key-init"),
        tan: cc11001100_hook("tan", ["NamedFn"], "object-key-init"),
        tanh: cc11001100_hook("tanh", ["NamedFn"], "object-key-init"),
        limits: cc11001100_hook("limits", ["Limits", 1], "object-key-init"),
        nolimits: cc11001100_hook("nolimits", ["Limits", 0], "object-key-init"),
        overline: cc11001100_hook("overline", ["UnderOver", "00AF", null, 1], "object-key-init"),
        underline: cc11001100_hook("underline", ["UnderOver", "005F"], "object-key-init"),
        overbrace: cc11001100_hook("overbrace", ["UnderOver", "23DE", 1], "object-key-init"),
        underbrace: cc11001100_hook("underbrace", ["UnderOver", "23DF", 1], "object-key-init"),
        overparen: cc11001100_hook("overparen", ["UnderOver", "23DC"], "object-key-init"),
        underparen: cc11001100_hook("underparen", ["UnderOver", "23DD"], "object-key-init"),
        overrightarrow: cc11001100_hook("overrightarrow", ["UnderOver", "2192"], "object-key-init"),
        underrightarrow: cc11001100_hook("underrightarrow", ["UnderOver", "2192"], "object-key-init"),
        overleftarrow: cc11001100_hook("overleftarrow", ["UnderOver", "2190"], "object-key-init"),
        underleftarrow: cc11001100_hook("underleftarrow", ["UnderOver", "2190"], "object-key-init"),
        overleftrightarrow: cc11001100_hook("overleftrightarrow", ["UnderOver", "2194"], "object-key-init"),
        underleftrightarrow: cc11001100_hook("underleftrightarrow", ["UnderOver", "2194"], "object-key-init"),
        overset: cc11001100_hook("overset", "Overset", "object-key-init"),
        underset: cc11001100_hook("underset", "Underset", "object-key-init"),
        stackrel: cc11001100_hook("stackrel", ["Macro", "\\mathrel{\\mathop{#2}\\limits^{#1}}", 2], "object-key-init"),
        over: cc11001100_hook("over", "Over", "object-key-init"),
        overwithdelims: cc11001100_hook("overwithdelims", "Over", "object-key-init"),
        atop: cc11001100_hook("atop", "Over", "object-key-init"),
        atopwithdelims: cc11001100_hook("atopwithdelims", "Over", "object-key-init"),
        above: cc11001100_hook("above", "Over", "object-key-init"),
        abovewithdelims: cc11001100_hook("abovewithdelims", "Over", "object-key-init"),
        brace: cc11001100_hook("brace", ["Over", "{", "}"], "object-key-init"),
        brack: cc11001100_hook("brack", ["Over", "[", "]"], "object-key-init"),
        choose: cc11001100_hook("choose", ["Over", "(", ")"], "object-key-init"),
        frac: cc11001100_hook("frac", "Frac", "object-key-init"),
        sqrt: cc11001100_hook("sqrt", "Sqrt", "object-key-init"),
        root: cc11001100_hook("root", "Root", "object-key-init"),
        uproot: cc11001100_hook("uproot", ["MoveRoot", "upRoot"], "object-key-init"),
        leftroot: cc11001100_hook("leftroot", ["MoveRoot", "leftRoot"], "object-key-init"),
        left: cc11001100_hook("left", "LeftRight", "object-key-init"),
        right: cc11001100_hook("right", "LeftRight", "object-key-init"),
        middle: cc11001100_hook("middle", "Middle", "object-key-init"),
        llap: cc11001100_hook("llap", "Lap", "object-key-init"),
        rlap: cc11001100_hook("rlap", "Lap", "object-key-init"),
        raise: cc11001100_hook("raise", "RaiseLower", "object-key-init"),
        lower: cc11001100_hook("lower", "RaiseLower", "object-key-init"),
        moveleft: cc11001100_hook("moveleft", "MoveLeftRight", "object-key-init"),
        moveright: cc11001100_hook("moveright", "MoveLeftRight", "object-key-init"),
        ",": cc11001100_hook(",", ["Spacer", i.LENGTH.THINMATHSPACE], "object-key-init"),
        ":": cc11001100_hook(":", ["Spacer", i.LENGTH.MEDIUMMATHSPACE], "object-key-init"),
        ">": cc11001100_hook(">", ["Spacer", i.LENGTH.MEDIUMMATHSPACE], "object-key-init"),
        ";": cc11001100_hook(";", ["Spacer", i.LENGTH.THICKMATHSPACE], "object-key-init"),
        "!": cc11001100_hook("!", ["Spacer", i.LENGTH.NEGATIVETHINMATHSPACE], "object-key-init"),
        enspace: cc11001100_hook("enspace", ["Spacer", ".5em"], "object-key-init"),
        quad: cc11001100_hook("quad", ["Spacer", "1em"], "object-key-init"),
        qquad: cc11001100_hook("qquad", ["Spacer", "2em"], "object-key-init"),
        thinspace: cc11001100_hook("thinspace", ["Spacer", i.LENGTH.THINMATHSPACE], "object-key-init"),
        negthinspace: cc11001100_hook("negthinspace", ["Spacer", i.LENGTH.NEGATIVETHINMATHSPACE], "object-key-init"),
        hskip: cc11001100_hook("hskip", "Hskip", "object-key-init"),
        hspace: cc11001100_hook("hspace", "Hskip", "object-key-init"),
        kern: cc11001100_hook("kern", "Hskip", "object-key-init"),
        mskip: cc11001100_hook("mskip", "Hskip", "object-key-init"),
        mspace: cc11001100_hook("mspace", "Hskip", "object-key-init"),
        mkern: cc11001100_hook("mkern", "Hskip", "object-key-init"),
        rule: cc11001100_hook("rule", "rule", "object-key-init"),
        Rule: cc11001100_hook("Rule", ["Rule"], "object-key-init"),
        Space: cc11001100_hook("Space", ["Rule", "blank"], "object-key-init"),
        big: cc11001100_hook("big", ["MakeBig", i.TEXCLASS.ORD, 0.85], "object-key-init"),
        Big: cc11001100_hook("Big", ["MakeBig", i.TEXCLASS.ORD, 1.15], "object-key-init"),
        bigg: cc11001100_hook("bigg", ["MakeBig", i.TEXCLASS.ORD, 1.45], "object-key-init"),
        Bigg: cc11001100_hook("Bigg", ["MakeBig", i.TEXCLASS.ORD, 1.75], "object-key-init"),
        bigl: cc11001100_hook("bigl", ["MakeBig", i.TEXCLASS.OPEN, 0.85], "object-key-init"),
        Bigl: cc11001100_hook("Bigl", ["MakeBig", i.TEXCLASS.OPEN, 1.15], "object-key-init"),
        biggl: cc11001100_hook("biggl", ["MakeBig", i.TEXCLASS.OPEN, 1.45], "object-key-init"),
        Biggl: cc11001100_hook("Biggl", ["MakeBig", i.TEXCLASS.OPEN, 1.75], "object-key-init"),
        bigr: cc11001100_hook("bigr", ["MakeBig", i.TEXCLASS.CLOSE, 0.85], "object-key-init"),
        Bigr: cc11001100_hook("Bigr", ["MakeBig", i.TEXCLASS.CLOSE, 1.15], "object-key-init"),
        biggr: cc11001100_hook("biggr", ["MakeBig", i.TEXCLASS.CLOSE, 1.45], "object-key-init"),
        Biggr: cc11001100_hook("Biggr", ["MakeBig", i.TEXCLASS.CLOSE, 1.75], "object-key-init"),
        bigm: cc11001100_hook("bigm", ["MakeBig", i.TEXCLASS.REL, 0.85], "object-key-init"),
        Bigm: cc11001100_hook("Bigm", ["MakeBig", i.TEXCLASS.REL, 1.15], "object-key-init"),
        biggm: cc11001100_hook("biggm", ["MakeBig", i.TEXCLASS.REL, 1.45], "object-key-init"),
        Biggm: cc11001100_hook("Biggm", ["MakeBig", i.TEXCLASS.REL, 1.75], "object-key-init"),
        mathord: cc11001100_hook("mathord", ["TeXAtom", i.TEXCLASS.ORD], "object-key-init"),
        mathop: cc11001100_hook("mathop", ["TeXAtom", i.TEXCLASS.OP], "object-key-init"),
        mathopen: cc11001100_hook("mathopen", ["TeXAtom", i.TEXCLASS.OPEN], "object-key-init"),
        mathclose: cc11001100_hook("mathclose", ["TeXAtom", i.TEXCLASS.CLOSE], "object-key-init"),
        mathbin: cc11001100_hook("mathbin", ["TeXAtom", i.TEXCLASS.BIN], "object-key-init"),
        mathrel: cc11001100_hook("mathrel", ["TeXAtom", i.TEXCLASS.REL], "object-key-init"),
        mathpunct: cc11001100_hook("mathpunct", ["TeXAtom", i.TEXCLASS.PUNCT], "object-key-init"),
        mathinner: cc11001100_hook("mathinner", ["TeXAtom", i.TEXCLASS.INNER], "object-key-init"),
        vcenter: cc11001100_hook("vcenter", ["TeXAtom", i.TEXCLASS.VCENTER], "object-key-init"),
        mathchoice: cc11001100_hook("mathchoice", ["Extension", "mathchoice"], "object-key-init"),
        buildrel: cc11001100_hook("buildrel", "BuildRel", "object-key-init"),
        hbox: cc11001100_hook("hbox", ["HBox", 0], "object-key-init"),
        text: cc11001100_hook("text", "HBox", "object-key-init"),
        mbox: cc11001100_hook("mbox", ["HBox", 0], "object-key-init"),
        fbox: cc11001100_hook("fbox", "FBox", "object-key-init"),
        strut: cc11001100_hook("strut", "Strut", "object-key-init"),
        mathstrut: cc11001100_hook("mathstrut", ["Macro", "\\vphantom{(}"], "object-key-init"),
        phantom: cc11001100_hook("phantom", "Phantom", "object-key-init"),
        vphantom: cc11001100_hook("vphantom", ["Phantom", 1, 0], "object-key-init"),
        hphantom: cc11001100_hook("hphantom", ["Phantom", 0, 1], "object-key-init"),
        smash: cc11001100_hook("smash", "Smash", "object-key-init"),
        acute: cc11001100_hook("acute", ["Accent", "00B4"], "object-key-init"),
        grave: cc11001100_hook("grave", ["Accent", "0060"], "object-key-init"),
        ddot: cc11001100_hook("ddot", ["Accent", "00A8"], "object-key-init"),
        tilde: cc11001100_hook("tilde", ["Accent", "007E"], "object-key-init"),
        bar: cc11001100_hook("bar", ["Accent", "00AF"], "object-key-init"),
        breve: cc11001100_hook("breve", ["Accent", "02D8"], "object-key-init"),
        check: cc11001100_hook("check", ["Accent", "02C7"], "object-key-init"),
        hat: cc11001100_hook("hat", ["Accent", "005E"], "object-key-init"),
        vec: cc11001100_hook("vec", ["Accent", "2192"], "object-key-init"),
        dot: cc11001100_hook("dot", ["Accent", "02D9"], "object-key-init"),
        widetilde: cc11001100_hook("widetilde", ["Accent", "007E", 1], "object-key-init"),
        widehat: cc11001100_hook("widehat", ["Accent", "005E", 1], "object-key-init"),
        matrix: cc11001100_hook("matrix", "Matrix", "object-key-init"),
        array: cc11001100_hook("array", "Matrix", "object-key-init"),
        pmatrix: cc11001100_hook("pmatrix", ["Matrix", "(", ")"], "object-key-init"),
        cases: cc11001100_hook("cases", ["Matrix", "{", "", "left left", null, ".1em", null, true], "object-key-init"),
        eqalign: cc11001100_hook("eqalign", ["Matrix", null, null, "right left", i.LENGTH.THICKMATHSPACE, ".5em", "D"], "object-key-init"),
        displaylines: cc11001100_hook("displaylines", ["Matrix", null, null, "center", null, ".5em", "D"], "object-key-init"),
        cr: cc11001100_hook("cr", "Cr", "object-key-init"),
        "\\": cc11001100_hook("\\", "CrLaTeX", "object-key-init"),
        newline: cc11001100_hook("newline", "Cr", "object-key-init"),
        hline: cc11001100_hook("hline", ["HLine", "solid"], "object-key-init"),
        hdashline: cc11001100_hook("hdashline", ["HLine", "dashed"], "object-key-init"),
        eqalignno: cc11001100_hook("eqalignno", ["Matrix", null, null, "right left", i.LENGTH.THICKMATHSPACE, ".5em", "D", null, "right"], "object-key-init"),
        leqalignno: cc11001100_hook("leqalignno", ["Matrix", null, null, "right left", i.LENGTH.THICKMATHSPACE, ".5em", "D", null, "left"], "object-key-init"),
        hfill: cc11001100_hook("hfill", "HFill", "object-key-init"),
        hfil: cc11001100_hook("hfil", "HFill", "object-key-init"),
        hfilll: cc11001100_hook("hfilll", "HFill", "object-key-init"),
        bmod: cc11001100_hook("bmod", ["Macro", '\\mmlToken{mo}[lspace="thickmathspace" rspace="thickmathspace"]{mod}'], "object-key-init"),
        pmod: cc11001100_hook("pmod", ["Macro", "\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}", 1], "object-key-init"),
        mod: cc11001100_hook("mod", ["Macro", "\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1", 1], "object-key-init"),
        pod: cc11001100_hook("pod", ["Macro", "\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)", 1], "object-key-init"),
        iff: cc11001100_hook("iff", ["Macro", "\\;\\Longleftrightarrow\\;"], "object-key-init"),
        skew: cc11001100_hook("skew", ["Macro", "{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}", 3], "object-key-init"),
        mathcal: cc11001100_hook("mathcal", ["Macro", "{\\cal #1}", 1], "object-key-init"),
        mathscr: cc11001100_hook("mathscr", ["Macro", "{\\scr #1}", 1], "object-key-init"),
        mathrm: cc11001100_hook("mathrm", ["Macro", "{\\rm #1}", 1], "object-key-init"),
        mathbf: cc11001100_hook("mathbf", ["Macro", "{\\bf #1}", 1], "object-key-init"),
        mathbb: cc11001100_hook("mathbb", ["Macro", "{\\bbFont #1}", 1], "object-key-init"),
        Bbb: cc11001100_hook("Bbb", ["Macro", "{\\bbFont #1}", 1], "object-key-init"),
        mathit: cc11001100_hook("mathit", ["Macro", "{\\it #1}", 1], "object-key-init"),
        mathfrak: cc11001100_hook("mathfrak", ["Macro", "{\\frak #1}", 1], "object-key-init"),
        mathsf: cc11001100_hook("mathsf", ["Macro", "{\\sf #1}", 1], "object-key-init"),
        mathtt: cc11001100_hook("mathtt", ["Macro", "{\\tt #1}", 1], "object-key-init"),
        textrm: cc11001100_hook("textrm", ["Macro", "\\mathord{\\rm\\text{#1}}", 1], "object-key-init"),
        textit: cc11001100_hook("textit", ["Macro", "\\mathord{\\it\\text{#1}}", 1], "object-key-init"),
        textbf: cc11001100_hook("textbf", ["Macro", "\\mathord{\\bf\\text{#1}}", 1], "object-key-init"),
        textsf: cc11001100_hook("textsf", ["Macro", "\\mathord{\\sf\\text{#1}}", 1], "object-key-init"),
        texttt: cc11001100_hook("texttt", ["Macro", "\\mathord{\\tt\\text{#1}}", 1], "object-key-init"),
        pmb: cc11001100_hook("pmb", ["Macro", "\\rlap{#1}\\kern1px{#1}", 1], "object-key-init"),
        TeX: cc11001100_hook("TeX", ["Macro", "T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"], "object-key-init"),
        LaTeX: cc11001100_hook("LaTeX", ["Macro", "L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX"], "object-key-init"),
        " ": cc11001100_hook(" ", ["Macro", "\\text{ }"], "object-key-init"),
        not: cc11001100_hook("not", "Not", "object-key-init"),
        dots: cc11001100_hook("dots", "Dots", "object-key-init"),
        space: cc11001100_hook("space", "Tilde", "object-key-init"),
        "\u00A0": cc11001100_hook("\u00A0", "Tilde", "object-key-init"),
        begin: cc11001100_hook("begin", "BeginEnd", "object-key-init"),
        end: cc11001100_hook("end", "BeginEnd", "object-key-init"),
        newcommand: cc11001100_hook("newcommand", ["Extension", "newcommand"], "object-key-init"),
        renewcommand: cc11001100_hook("renewcommand", ["Extension", "newcommand"], "object-key-init"),
        newenvironment: cc11001100_hook("newenvironment", ["Extension", "newcommand"], "object-key-init"),
        renewenvironment: cc11001100_hook("renewenvironment", ["Extension", "newcommand"], "object-key-init"),
        def: cc11001100_hook("def", ["Extension", "newcommand"], "object-key-init"),
        let: cc11001100_hook("let", ["Extension", "newcommand"], "object-key-init"),
        verb: cc11001100_hook("verb", ["Extension", "verb"], "object-key-init"),
        boldsymbol: cc11001100_hook("boldsymbol", ["Extension", "boldsymbol"], "object-key-init"),
        tag: cc11001100_hook("tag", ["Extension", "AMSmath"], "object-key-init"),
        notag: cc11001100_hook("notag", ["Extension", "AMSmath"], "object-key-init"),
        label: cc11001100_hook("label", ["Extension", "AMSmath"], "object-key-init"),
        ref: cc11001100_hook("ref", ["Extension", "AMSmath"], "object-key-init"),
        eqref: cc11001100_hook("eqref", ["Extension", "AMSmath"], "object-key-init"),
        nonumber: cc11001100_hook("nonumber", ["Macro", "\\notag"], "object-key-init"),
        unicode: cc11001100_hook("unicode", ["Extension", "unicode"], "object-key-init"),
        color: cc11001100_hook("color", "Color", "object-key-init"),
        href: cc11001100_hook("href", ["Extension", "HTML"], "object-key-init"),
        "class": cc11001100_hook("class", ["Extension", "HTML"], "object-key-init"),
        style: cc11001100_hook("style", ["Extension", "HTML"], "object-key-init"),
        cssId: cc11001100_hook("cssId", ["Extension", "HTML"], "object-key-init"),
        bbox: cc11001100_hook("bbox", ["Extension", "bbox"], "object-key-init"),
        mmlToken: cc11001100_hook("mmlToken", "MmlToken", "object-key-init"),
        require: cc11001100_hook("require", "Require", "object-key-init")
      },
      environment: {
        array: cc11001100_hook("array", ["AlignedArray"], "object-key-init"),
        matrix: cc11001100_hook("matrix", ["Array", null, null, null, "c"], "object-key-init"),
        pmatrix: cc11001100_hook("pmatrix", ["Array", null, "(", ")", "c"], "object-key-init"),
        bmatrix: cc11001100_hook("bmatrix", ["Array", null, "[", "]", "c"], "object-key-init"),
        Bmatrix: cc11001100_hook("Bmatrix", ["Array", null, "\\{", "\\}", "c"], "object-key-init"),
        vmatrix: cc11001100_hook("vmatrix", ["Array", null, "\\vert", "\\vert", "c"], "object-key-init"),
        Vmatrix: cc11001100_hook("Vmatrix", ["Array", null, "\\Vert", "\\Vert", "c"], "object-key-init"),
        cases: cc11001100_hook("cases", ["Array", null, "\\{", ".", "ll", null, ".2em", "T"], "object-key-init"),
        equation: cc11001100_hook("equation", [null, "Equation"], "object-key-init"),
        "equation*": cc11001100_hook("equation*", [null, "Equation"], "object-key-init"),
        eqnarray: cc11001100_hook("eqnarray", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        "eqnarray*": cc11001100_hook("eqnarray*", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        align: cc11001100_hook("align", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        "align*": cc11001100_hook("align*", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        aligned: cc11001100_hook("aligned", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        multline: cc11001100_hook("multline", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        "multline*": cc11001100_hook("multline*", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        split: cc11001100_hook("split", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        gather: cc11001100_hook("gather", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        "gather*": cc11001100_hook("gather*", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        gathered: cc11001100_hook("gathered", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        alignat: cc11001100_hook("alignat", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        "alignat*": cc11001100_hook("alignat*", ["ExtensionEnv", null, "AMSmath"], "object-key-init"),
        alignedat: cc11001100_hook("alignedat", ["ExtensionEnv", null, "AMSmath"], "object-key-init")
      },
      p_height: cc11001100_hook("p_height", 1.2 / 0.85, "object-key-init")
    });
    if (this.config.Macros) {
      var m = cc11001100_hook("m", this.config.Macros, "var-init");
      for (var n in m) {
        if (m.hasOwnProperty(n)) {
          if (typeof m[n] === "string") {
            g.macros[n] = cc11001100_hook("g.macros[n]", ["Macro", m[n]], "assign");
          } else {
            g.macros[n] = cc11001100_hook("g.macros[n]", ["Macro"].concat(m[n]), "assign");
          }
          g.macros[n].isUser = cc11001100_hook("g.macros[n].isUser", true, "assign");
        }
      }
    }
  };
  var a = cc11001100_hook("a", MathJax.Object.Subclass({
    Init: function (n, o) {
      this.string = cc11001100_hook("this.string", n, "assign");
      this.i = cc11001100_hook("this.i", 0, "assign");
      this.macroCount = cc11001100_hook("this.macroCount", 0, "assign");
      var m;
      if (o) {
        m = cc11001100_hook("m", {}, "assign");
        for (var p in o) {
          if (o.hasOwnProperty(p)) {
            m[p] = cc11001100_hook("m[p]", o[p], "assign");
          }
        }
      }
      this.stack = cc11001100_hook("this.stack", d.Stack(m, !!o), "assign");
      this.Parse();
      this.Push(b.stop());
    },
    Parse: function () {
      var o, m;
      while (this.i < this.string.length) {
        o = cc11001100_hook("o", this.string.charAt(this.i++), "assign");
        m = cc11001100_hook("m", o.charCodeAt(0), "assign");
        if (m >= 55296 && m < 56320) {
          o += cc11001100_hook("o", this.string.charAt(this.i++), "assign");
        }
        if (g.special[o]) {
          this[g.special[o]](o);
        } else {
          if (g.letter.test(o)) {
            this.Variable(o);
          } else {
            if (g.digit.test(o)) {
              this.Number(o);
            } else {
              this.Other(o);
            }
          }
        }
      }
    },
    Push: function () {
      this.stack.Push.apply(this.stack, arguments);
    },
    mml: function () {
      if (this.stack.Top().type !== "mml") {
        return null;
      }
      return this.stack.Top().data[0];
    },
    mmlToken: function (m) {
      return m;
    },
    ControlSequence: function (p) {
      var m = cc11001100_hook("m", this.GetCS(), "var-init"),
        o = cc11001100_hook("o", this.csFindMacro(m), "var-init");
      if (o) {
        if (!f(o)) {
          o = cc11001100_hook("o", [o], "assign");
        }
        var n = cc11001100_hook("n", o[0], "var-init");
        if (!(n instanceof Function)) {
          n = cc11001100_hook("n", this[n], "assign");
        }
        n.apply(this, [p + m].concat(o.slice(1)));
      } else {
        if (g.mathchar0mi[m]) {
          this.csMathchar0mi(m, g.mathchar0mi[m]);
        } else {
          if (g.mathchar0mo[m]) {
            this.csMathchar0mo(m, g.mathchar0mo[m]);
          } else {
            if (g.mathchar7[m]) {
              this.csMathchar7(m, g.mathchar7[m]);
            } else {
              if (g.delimiter["\\" + m] != null) {
                this.csDelimiter(m, g.delimiter["\\" + m]);
              } else {
                this.csUndefined(p + m);
              }
            }
          }
        }
      }
    },
    csFindMacro: function (m) {
      return g.macros[m];
    },
    csMathchar0mi: function (m, o) {
      var n = cc11001100_hook("n", {
        mathvariant: cc11001100_hook("mathvariant", i.VARIANT.ITALIC, "object-key-init")
      }, "var-init");
      if (f(o)) {
        n = cc11001100_hook("n", o[1], "assign");
        o = cc11001100_hook("o", o[0], "assign");
      }
      this.Push(this.mmlToken(i.mi(i.entity("#x" + o)).With(n)));
    },
    csMathchar0mo: function (m, o) {
      var n = cc11001100_hook("n", {
        stretchy: cc11001100_hook("stretchy", false, "object-key-init")
      }, "var-init");
      if (f(o)) {
        n = cc11001100_hook("n", o[1], "assign");
        n.stretchy = cc11001100_hook("n.stretchy", false, "assign");
        o = cc11001100_hook("o", o[0], "assign");
      }
      this.Push(this.mmlToken(i.mo(i.entity("#x" + o)).With(n)));
    },
    csMathchar7: function (m, o) {
      var n = cc11001100_hook("n", {
        mathvariant: cc11001100_hook("mathvariant", i.VARIANT.NORMAL, "object-key-init")
      }, "var-init");
      if (f(o)) {
        n = cc11001100_hook("n", o[1], "assign");
        o = cc11001100_hook("o", o[0], "assign");
      }
      if (this.stack.env.font) {
        n.mathvariant = cc11001100_hook("n.mathvariant", this.stack.env.font, "assign");
      }
      this.Push(this.mmlToken(i.mi(i.entity("#x" + o)).With(n)));
    },
    csDelimiter: function (m, o) {
      var n = cc11001100_hook("n", {}, "var-init");
      if (f(o)) {
        n = cc11001100_hook("n", o[1], "assign");
        o = cc11001100_hook("o", o[0], "assign");
      }
      if (o.length === 4) {
        o = cc11001100_hook("o", i.entity("#x" + o), "assign");
      } else {
        o = cc11001100_hook("o", i.chars(o), "assign");
      }
      this.Push(this.mmlToken(i.mo(o).With({
        fence: cc11001100_hook("fence", false, "object-key-init"),
        stretchy: cc11001100_hook("stretchy", false, "object-key-init")
      }).With(n)));
    },
    csUndefined: function (m) {
      d.Error(["UndefinedControlSequence", "Undefined control sequence %1", m]);
    },
    Variable: function (n) {
      var m = cc11001100_hook("m", {}, "var-init");
      if (this.stack.env.font) {
        m.mathvariant = cc11001100_hook("m.mathvariant", this.stack.env.font, "assign");
      }
      this.Push(this.mmlToken(i.mi(i.chars(n)).With(m)));
    },
    Number: function (p) {
      var m,
        o = cc11001100_hook("o", this.string.slice(this.i - 1).match(g.number), "var-init");
      if (o) {
        m = cc11001100_hook("m", i.mn(o[0].replace(/[{}]/g, "")), "assign");
        this.i += cc11001100_hook("this.i", o[0].length - 1, "assign");
      } else {
        m = cc11001100_hook("m", i.mo(i.chars(p)), "assign");
      }
      if (this.stack.env.font) {
        m.mathvariant = cc11001100_hook("m.mathvariant", this.stack.env.font, "assign");
      }
      this.Push(this.mmlToken(m));
    },
    Open: function (m) {
      this.Push(b.open());
    },
    Close: function (m) {
      this.Push(b.close());
    },
    Tilde: function (m) {
      this.Push(i.mtext(i.chars(h)));
    },
    Space: function (m) {},
    Superscript: function (r) {
      if (this.GetNext().match(/\d/)) {
        this.string = cc11001100_hook("this.string", this.string.substr(0, this.i + 1) + " " + this.string.substr(this.i + 1), "assign");
      }
      var q,
        o,
        p = cc11001100_hook("p", this.stack.Top(), "var-init");
      if (p.type === "prime") {
        o = cc11001100_hook("o", p.data[0], "assign");
        q = cc11001100_hook("q", p.data[1], "assign");
        this.stack.Pop();
      } else {
        o = cc11001100_hook("o", this.stack.Prev(), "assign");
        if (!o) {
          o = cc11001100_hook("o", i.mi(""), "assign");
        }
      }
      if (o.isEmbellishedWrapper) {
        o = cc11001100_hook("o", o.data[0].data[0], "assign");
      }
      var n = cc11001100_hook("n", o.movesupsub, "var-init"),
        m = cc11001100_hook("m", o.sup, "var-init");
      if (o.type === "msubsup" && o.data[o.sup] || o.type === "munderover" && o.data[o.over] && !o.subsupOK) {
        d.Error(["DoubleExponent", "Double exponent: use braces to clarify"]);
      }
      if (o.type !== "msubsup") {
        if (n) {
          if (o.type !== "munderover" || o.data[o.over]) {
            if (o.movablelimits && o.isa(i.mi)) {
              o = cc11001100_hook("o", this.mi2mo(o), "assign");
            }
            o = cc11001100_hook("o", i.munderover(o, null, null).With({
              movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
            }), "assign");
          }
          m = cc11001100_hook("m", o.over, "assign");
        } else {
          o = cc11001100_hook("o", i.msubsup(o, null, null), "assign");
          m = cc11001100_hook("m", o.sup, "assign");
        }
      }
      this.Push(b.subsup(o).With({
        position: cc11001100_hook("position", m, "object-key-init"),
        primes: cc11001100_hook("primes", q, "object-key-init"),
        movesupsub: cc11001100_hook("movesupsub", n, "object-key-init")
      }));
    },
    Subscript: function (r) {
      if (this.GetNext().match(/\d/)) {
        this.string = cc11001100_hook("this.string", this.string.substr(0, this.i + 1) + " " + this.string.substr(this.i + 1), "assign");
      }
      var q,
        o,
        p = cc11001100_hook("p", this.stack.Top(), "var-init");
      if (p.type === "prime") {
        o = cc11001100_hook("o", p.data[0], "assign");
        q = cc11001100_hook("q", p.data[1], "assign");
        this.stack.Pop();
      } else {
        o = cc11001100_hook("o", this.stack.Prev(), "assign");
        if (!o) {
          o = cc11001100_hook("o", i.mi(""), "assign");
        }
      }
      if (o.isEmbellishedWrapper) {
        o = cc11001100_hook("o", o.data[0].data[0], "assign");
      }
      var n = cc11001100_hook("n", o.movesupsub, "var-init"),
        m = cc11001100_hook("m", o.sub, "var-init");
      if (o.type === "msubsup" && o.data[o.sub] || o.type === "munderover" && o.data[o.under] && !o.subsupOK) {
        d.Error(["DoubleSubscripts", "Double subscripts: use braces to clarify"]);
      }
      if (o.type !== "msubsup") {
        if (n) {
          if (o.type !== "munderover" || o.data[o.under]) {
            if (o.movablelimits && o.isa(i.mi)) {
              o = cc11001100_hook("o", this.mi2mo(o), "assign");
            }
            o = cc11001100_hook("o", i.munderover(o, null, null).With({
              movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
            }), "assign");
          }
          m = cc11001100_hook("m", o.under, "assign");
        } else {
          o = cc11001100_hook("o", i.msubsup(o, null, null), "assign");
          m = cc11001100_hook("m", o.sub, "assign");
        }
      }
      this.Push(b.subsup(o).With({
        position: cc11001100_hook("position", m, "object-key-init"),
        primes: cc11001100_hook("primes", q, "object-key-init"),
        movesupsub: cc11001100_hook("movesupsub", n, "object-key-init")
      }));
    },
    PRIME: cc11001100_hook("PRIME", "\u2032", "object-key-init"),
    SMARTQUOTE: cc11001100_hook("SMARTQUOTE", "\u2019", "object-key-init"),
    Prime: function (o) {
      var n = cc11001100_hook("n", this.stack.Prev(), "var-init");
      if (!n) {
        n = cc11001100_hook("n", i.mi(), "assign");
      }
      if (n.type === "msubsup" && n.data[n.sup]) {
        d.Error(["DoubleExponentPrime", "Prime causes double exponent: use braces to clarify"]);
      }
      var m = cc11001100_hook("m", "", "var-init");
      this.i--;
      do {
        m += cc11001100_hook("m", this.PRIME, "assign");
        this.i++, o = cc11001100_hook("o", this.GetNext(), "assign");
      } while (o === "'" || o === this.SMARTQUOTE);
      m = cc11001100_hook("m", ["", "\u2032", "\u2033", "\u2034", "\u2057"][m.length] || m, "assign");
      this.Push(b.prime(n, this.mmlToken(i.mo(m))));
    },
    mi2mo: function (m) {
      var n = cc11001100_hook("n", i.mo(), "var-init");
      n.Append.apply(n, m.data);
      var o;
      for (o in n.defaults) {
        if (n.defaults.hasOwnProperty(o) && m[o] != null) {
          n[o] = cc11001100_hook("n[o]", m[o], "assign");
        }
      }
      for (o in i.copyAttributes) {
        if (i.copyAttributes.hasOwnProperty(o) && m[o] != null) {
          n[o] = cc11001100_hook("n[o]", m[o], "assign");
        }
      }
      n.lspace = cc11001100_hook("n.lspace", n.rspace = cc11001100_hook("n.rspace", "0", "assign"), "assign");
      n.useMMLspacing &= cc11001100_hook("n.useMMLspacing", ~(n.SPACE_ATTR.lspace | n.SPACE_ATTR.rspace), "assign");
      return n;
    },
    Comment: function (m) {
      while (this.i < this.string.length && this.string.charAt(this.i) != "\n") {
        this.i++;
      }
    },
    Hash: function (m) {
      d.Error(["CantUseHash1", "You can't use 'macro parameter character #' in math mode"]);
    },
    Other: function (o) {
      var n, m;
      if (this.stack.env.font) {
        n = cc11001100_hook("n", {
          mathvariant: cc11001100_hook("mathvariant", this.stack.env.font, "object-key-init")
        }, "assign");
      }
      if (g.remap[o]) {
        o = cc11001100_hook("o", g.remap[o], "assign");
        if (f(o)) {
          n = cc11001100_hook("n", o[1], "assign");
          o = cc11001100_hook("o", o[0], "assign");
        }
        m = cc11001100_hook("m", i.mo(i.entity("#x" + o)).With(n), "assign");
      } else {
        m = cc11001100_hook("m", i.mo(o).With(n), "assign");
      }
      if (m.autoDefault("stretchy", true)) {
        m.stretchy = cc11001100_hook("m.stretchy", false, "assign");
      }
      if (m.autoDefault("texClass", true) == "") {
        m = cc11001100_hook("m", i.TeXAtom(m), "assign");
      }
      this.Push(this.mmlToken(m));
    },
    SetFont: function (n, m) {
      this.stack.env.font = cc11001100_hook("this.stack.env.font", m, "assign");
    },
    SetStyle: function (n, m, o, p) {
      this.stack.env.style = cc11001100_hook("this.stack.env.style", m, "assign");
      this.stack.env.level = cc11001100_hook("this.stack.env.level", p, "assign");
      this.Push(b.style().With({
        styles: {
          displaystyle: cc11001100_hook("displaystyle", o, "object-key-init"),
          scriptlevel: cc11001100_hook("scriptlevel", p, "object-key-init")
        }
      }));
    },
    SetSize: function (m, n) {
      this.stack.env.size = cc11001100_hook("this.stack.env.size", n, "assign");
      this.Push(b.style().With({
        styles: {
          mathsize: cc11001100_hook("mathsize", n + "em", "object-key-init")
        }
      }));
    },
    Color: function (o) {
      var n = cc11001100_hook("n", this.GetArgument(o), "var-init");
      var m = cc11001100_hook("m", this.stack.env.color, "var-init");
      this.stack.env.color = cc11001100_hook("this.stack.env.color", n, "assign");
      var p = cc11001100_hook("p", this.ParseArg(o), "var-init");
      if (m) {
        this.stack.env.color;
      } else {
        delete this.stack.env.color;
      }
      this.Push(i.mstyle(p).With({
        mathcolor: cc11001100_hook("mathcolor", n, "object-key-init")
      }));
    },
    Spacer: function (m, n) {
      this.Push(i.mspace().With({
        width: cc11001100_hook("width", n, "object-key-init"),
        mathsize: cc11001100_hook("mathsize", i.SIZE.NORMAL, "object-key-init"),
        scriptlevel: cc11001100_hook("scriptlevel", 0, "object-key-init")
      }));
    },
    LeftRight: function (m) {
      this.Push(b[m.substr(1)]().With({
        delim: cc11001100_hook("delim", this.GetDelimiter(m), "object-key-init")
      }));
    },
    Middle: function (m) {
      var n = cc11001100_hook("n", this.GetDelimiter(m), "var-init");
      this.Push(i.TeXAtom().With({
        texClass: cc11001100_hook("texClass", i.TEXCLASS.CLOSE, "object-key-init")
      }));
      if (this.stack.Top().type !== "left") {
        d.Error(["MisplacedMiddle", "%1 must be within \\left and \\right", m]);
      }
      this.Push(i.mo(n).With({
        stretchy: cc11001100_hook("stretchy", true, "object-key-init")
      }));
      this.Push(i.TeXAtom().With({
        texClass: cc11001100_hook("texClass", i.TEXCLASS.OPEN, "object-key-init")
      }));
    },
    NamedFn: function (n, o) {
      if (!o) {
        o = cc11001100_hook("o", n.substr(1), "assign");
      }
      var m = cc11001100_hook("m", i.mi(o).With({
        texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init")
      }), "var-init");
      this.Push(b.fn(this.mmlToken(m)));
    },
    NamedOp: function (n, o) {
      if (!o) {
        o = cc11001100_hook("o", n.substr(1), "assign");
      }
      o = cc11001100_hook("o", o.replace(/&thinsp;/, "\u2006"), "assign");
      var m = cc11001100_hook("m", i.mo(o).With({
        movablelimits: cc11001100_hook("movablelimits", true, "object-key-init"),
        movesupsub: cc11001100_hook("movesupsub", true, "object-key-init"),
        form: cc11001100_hook("form", i.FORM.PREFIX, "object-key-init"),
        texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init")
      }), "var-init");
      m.useMMLspacing &= cc11001100_hook("m.useMMLspacing", ~m.SPACE_ATTR.form, "assign");
      this.Push(this.mmlToken(m));
    },
    Limits: function (n, m) {
      var p = cc11001100_hook("p", this.stack.Prev("nopop"), "var-init");
      if (!p || p.Get("texClass") !== i.TEXCLASS.OP && p.movesupsub == null) {
        d.Error(["MisplacedLimits", "%1 is allowed only on operators", n]);
      }
      var o = cc11001100_hook("o", this.stack.Top(), "var-init");
      if (p.type === "munderover" && !m) {
        p = cc11001100_hook("p", o.data[o.data.length - 1] = cc11001100_hook("o.data[o.data.length - 1]", i.msubsup.apply(i.subsup, p.data), "assign"), "assign");
      } else {
        if (p.type === "msubsup" && m) {
          p = cc11001100_hook("p", o.data[o.data.length - 1] = cc11001100_hook("o.data[o.data.length - 1]", i.munderover.apply(i.underover, p.data), "assign"), "assign");
        }
      }
      p.movesupsub = cc11001100_hook("p.movesupsub", m ? true : false, "assign");
      p.Core().movablelimits = cc11001100_hook("p.Core().movablelimits", false, "assign");
      if (p.movablelimits) {
        p.movablelimits = cc11001100_hook("p.movablelimits", false, "assign");
      }
    },
    Over: function (o, n, p) {
      var m = cc11001100_hook("m", b.over().With({
        name: cc11001100_hook("name", o, "object-key-init")
      }), "var-init");
      if (n || p) {
        m.open = cc11001100_hook("m.open", n, "assign");
        m.close = cc11001100_hook("m.close", p, "assign");
      } else {
        if (o.match(/withdelims$/)) {
          m.open = cc11001100_hook("m.open", this.GetDelimiter(o), "assign");
          m.close = cc11001100_hook("m.close", this.GetDelimiter(o), "assign");
        }
      }
      if (o.match(/^\\above/)) {
        m.thickness = cc11001100_hook("m.thickness", this.GetDimen(o), "assign");
      } else {
        if (o.match(/^\\atop/) || n || p) {
          m.thickness = cc11001100_hook("m.thickness", 0, "assign");
        }
      }
      this.Push(m);
    },
    Frac: function (n) {
      var m = cc11001100_hook("m", this.ParseArg(n), "var-init");
      var o = cc11001100_hook("o", this.ParseArg(n), "var-init");
      this.Push(i.mfrac(m, o));
    },
    Sqrt: function (p) {
      var q = cc11001100_hook("q", this.GetBrackets(p), "var-init"),
        m = cc11001100_hook("m", this.GetArgument(p), "var-init");
      if (m === "\\frac") {
        m += cc11001100_hook("m", "{" + this.GetArgument(m) + "}{" + this.GetArgument(m) + "}", "assign");
      }
      var o = cc11001100_hook("o", d.Parse(m, this.stack.env).mml(), "var-init");
      if (!q) {
        o = cc11001100_hook("o", i.msqrt.apply(i, o.array()), "assign");
      } else {
        o = cc11001100_hook("o", i.mroot(o, this.parseRoot(q)), "assign");
      }
      this.Push(o);
    },
    Root: function (o) {
      var p = cc11001100_hook("p", this.GetUpTo(o, "\\of"), "var-init");
      var m = cc11001100_hook("m", this.ParseArg(o), "var-init");
      this.Push(i.mroot(m, this.parseRoot(p)));
    },
    parseRoot: function (r) {
      var o = cc11001100_hook("o", this.stack.env, "var-init"),
        m = cc11001100_hook("m", o.inRoot, "var-init");
      o.inRoot = cc11001100_hook("o.inRoot", true, "assign");
      var q = cc11001100_hook("q", d.Parse(r, o), "var-init");
      r = cc11001100_hook("r", q.mml(), "assign");
      var p = cc11001100_hook("p", q.stack.global, "var-init");
      if (p.leftRoot || p.upRoot) {
        r = cc11001100_hook("r", i.mpadded(r), "assign");
        if (p.leftRoot) {
          r.width = cc11001100_hook("r.width", p.leftRoot, "assign");
        }
        if (p.upRoot) {
          r.voffset = cc11001100_hook("r.voffset", p.upRoot, "assign");
          r.height = cc11001100_hook("r.height", p.upRoot, "assign");
        }
      }
      o.inRoot = cc11001100_hook("o.inRoot", m, "assign");
      return r;
    },
    MoveRoot: function (m, p) {
      if (!this.stack.env.inRoot) {
        d.Error(["MisplacedMoveRoot", "%1 can appear only within a root", m]);
      }
      if (this.stack.global[p]) {
        d.Error(["MultipleMoveRoot", "Multiple use of %1", m]);
      }
      var o = cc11001100_hook("o", this.GetArgument(m), "var-init");
      if (!o.match(/-?[0-9]+/)) {
        d.Error(["IntegerArg", "The argument to %1 must be an integer", m]);
      }
      o = cc11001100_hook("o", o / 15 + "em", "assign");
      if (o.substr(0, 1) !== "-") {
        o = cc11001100_hook("o", "+" + o, "assign");
      }
      this.stack.global[p] = cc11001100_hook("this.stack.global[p]", o, "assign");
    },
    Accent: function (o, m, s) {
      var r = cc11001100_hook("r", this.ParseArg(o), "var-init");
      var q = cc11001100_hook("q", {
        accent: cc11001100_hook("accent", true, "object-key-init")
      }, "var-init");
      if (this.stack.env.font) {
        q.mathvariant = cc11001100_hook("q.mathvariant", this.stack.env.font, "assign");
      }
      var n = cc11001100_hook("n", this.mmlToken(i.mo(i.entity("#x" + m)).With(q)), "var-init");
      n.stretchy = cc11001100_hook("n.stretchy", s ? true : false, "assign");
      var p = cc11001100_hook("p", r.isEmbellished() ? r.CoreMO() : r, "var-init");
      if (p.isa(i.mo)) {
        p.movablelimits = cc11001100_hook("p.movablelimits", false, "assign");
      }
      this.Push(i.TeXAtom(i.munderover(r, null, n).With({
        accent: cc11001100_hook("accent", true, "object-key-init")
      })));
    },
    UnderOver: function (o, s, m, q) {
      var r = cc11001100_hook("r", {
        o: cc11001100_hook("o", "over", "object-key-init"),
        u: cc11001100_hook("u", "under", "object-key-init")
      }[o.charAt(1)], "var-init");
      var p = cc11001100_hook("p", this.ParseArg(o), "var-init");
      if (p.Get("movablelimits")) {
        p.movablelimits = cc11001100_hook("p.movablelimits", false, "assign");
      }
      if (p.isa(i.munderover) && p.isEmbellished()) {
        p.Core().With({
          lspace: cc11001100_hook("lspace", 0, "object-key-init"),
          rspace: cc11001100_hook("rspace", 0, "object-key-init")
        });
        p = cc11001100_hook("p", i.mrow(i.mo().With({
          rspace: cc11001100_hook("rspace", 0, "object-key-init")
        }), p), "assign");
      }
      var n = cc11001100_hook("n", i.munderover(p, null, null), "var-init");
      n.SetData(n[r], this.mmlToken(i.mo(i.entity("#x" + s)).With({
        stretchy: cc11001100_hook("stretchy", true, "object-key-init"),
        accent: cc11001100_hook("accent", !q, "object-key-init")
      })));
      if (m) {
        n = cc11001100_hook("n", i.TeXAtom(n).With({
          texClass: cc11001100_hook("texClass", i.TEXCLASS.OP, "object-key-init"),
          movesupsub: cc11001100_hook("movesupsub", true, "object-key-init")
        }), "assign");
      }
      this.Push(n.With({
        subsupOK: cc11001100_hook("subsupOK", true, "object-key-init")
      }));
    },
    Overset: function (m) {
      var o = cc11001100_hook("o", this.ParseArg(m), "var-init"),
        n = cc11001100_hook("n", this.ParseArg(m), "var-init");
      if (n.movablelimits) {
        n.movablelimits = cc11001100_hook("n.movablelimits", false, "assign");
      }
      this.Push(i.mover(n, o));
    },
    Underset: function (m) {
      var o = cc11001100_hook("o", this.ParseArg(m), "var-init"),
        n = cc11001100_hook("n", this.ParseArg(m), "var-init");
      if (n.movablelimits) {
        n.movablelimits = cc11001100_hook("n.movablelimits", false, "assign");
      }
      this.Push(i.munder(n, o));
    },
    TeXAtom: function (p, r) {
      var q = cc11001100_hook("q", {
          texClass: cc11001100_hook("texClass", r, "object-key-init")
        }, "var-init"),
        o;
      if (r == i.TEXCLASS.OP) {
        q.movesupsub = cc11001100_hook("q.movesupsub", q.movablelimits = cc11001100_hook("q.movablelimits", true, "assign"), "assign");
        var m = cc11001100_hook("m", this.GetArgument(p), "var-init");
        var n = cc11001100_hook("n", m.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/), "var-init");
        if (n) {
          q.mathvariant = cc11001100_hook("q.mathvariant", i.VARIANT.NORMAL, "assign");
          o = cc11001100_hook("o", b.fn(this.mmlToken(i.mi(n[1]).With(q))), "assign");
        } else {
          o = cc11001100_hook("o", b.fn(i.TeXAtom(d.Parse(m, this.stack.env).mml()).With(q)), "assign");
        }
      } else {
        o = cc11001100_hook("o", i.TeXAtom(this.ParseArg(p)).With(q), "assign");
      }
      this.Push(o);
    },
    MmlToken: function (o) {
      var p = cc11001100_hook("p", this.GetArgument(o), "var-init"),
        m = cc11001100_hook("m", this.GetBrackets(o, "").replace(/^\s+/, ""), "var-init"),
        s = cc11001100_hook("s", this.GetArgument(o), "var-init"),
        r = cc11001100_hook("r", {
          attrNames: cc11001100_hook("attrNames", [], "object-key-init")
        }, "var-init"),
        n;
      if (!i[p] || !i[p].prototype.isToken) {
        d.Error(["NotMathMLToken", "%1 is not a token element", p]);
      }
      while (m !== "") {
        n = cc11001100_hook("n", m.match(/^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i), "assign");
        if (!n) {
          d.Error(["InvalidMathMLAttr", "Invalid MathML attribute: %1", m]);
        }
        if (i[p].prototype.defaults[n[1]] == null && !this.MmlTokenAllow[n[1]]) {
          d.Error(["UnknownAttrForElement", "%1 is not a recognized attribute for %2", n[1], p]);
        }
        var q = cc11001100_hook("q", this.MmlFilterAttribute(n[1], n[2].replace(/^(['"])(.*)\1$/, "$2")), "var-init");
        if (q) {
          if (q.toLowerCase() === "true") {
            q = cc11001100_hook("q", true, "assign");
          } else {
            if (q.toLowerCase() === "false") {
              q = cc11001100_hook("q", false, "assign");
            }
          }
          r[n[1]] = cc11001100_hook("r[n[1]]", q, "assign");
          r.attrNames.push(n[1]);
        }
        m = cc11001100_hook("m", m.substr(n[0].length), "assign");
      }
      this.Push(this.mmlToken(i[p](s).With(r)));
    },
    MmlFilterAttribute: function (m, n) {
      return n;
    },
    MmlTokenAllow: {
      fontfamily: cc11001100_hook("fontfamily", 1, "object-key-init"),
      fontsize: cc11001100_hook("fontsize", 1, "object-key-init"),
      fontweight: cc11001100_hook("fontweight", 1, "object-key-init"),
      fontstyle: cc11001100_hook("fontstyle", 1, "object-key-init"),
      color: cc11001100_hook("color", 1, "object-key-init"),
      background: cc11001100_hook("background", 1, "object-key-init"),
      id: cc11001100_hook("id", 1, "object-key-init"),
      "class": cc11001100_hook("class", 1, "object-key-init"),
      href: cc11001100_hook("href", 1, "object-key-init"),
      style: cc11001100_hook("style", 1, "object-key-init")
    },
    Strut: function (m) {
      this.Push(i.mpadded(i.mrow()).With({
        height: cc11001100_hook("height", "8.6pt", "object-key-init"),
        depth: cc11001100_hook("depth", "3pt", "object-key-init"),
        width: cc11001100_hook("width", 0, "object-key-init")
      }));
    },
    Phantom: function (n, m, o) {
      var p = cc11001100_hook("p", i.mphantom(this.ParseArg(n)), "var-init");
      if (m || o) {
        p = cc11001100_hook("p", i.mpadded(p), "assign");
        if (o) {
          p.height = cc11001100_hook("p.height", p.depth = cc11001100_hook("p.depth", 0, "assign"), "assign");
        }
        if (m) {
          p.width = cc11001100_hook("p.width", 0, "assign");
        }
      }
      this.Push(i.TeXAtom(p));
    },
    Smash: function (o) {
      var n = cc11001100_hook("n", this.trimSpaces(this.GetBrackets(o, "")), "var-init");
      var m = cc11001100_hook("m", i.mpadded(this.ParseArg(o)), "var-init");
      switch (n) {
        case "b":
          m.depth = cc11001100_hook("m.depth", 0, "assign");
          break;
        case "t":
          m.height = cc11001100_hook("m.height", 0, "assign");
          break;
        default:
          m.height = cc11001100_hook("m.height", m.depth = cc11001100_hook("m.depth", 0, "assign"), "assign");
      }
      this.Push(i.TeXAtom(m));
    },
    Lap: function (n) {
      var m = cc11001100_hook("m", i.mpadded(this.ParseArg(n)).With({
        width: cc11001100_hook("width", 0, "object-key-init")
      }), "var-init");
      if (n === "\\llap") {
        m.lspace = cc11001100_hook("m.lspace", "-1width", "assign");
      }
      this.Push(i.TeXAtom(m));
    },
    RaiseLower: function (m) {
      var n = cc11001100_hook("n", this.GetDimen(m), "var-init");
      var o = cc11001100_hook("o", b.position().With({
        name: cc11001100_hook("name", m, "object-key-init"),
        move: cc11001100_hook("move", "vertical", "object-key-init")
      }), "var-init");
      if (n.charAt(0) === "-") {
        n = cc11001100_hook("n", n.slice(1), "assign");
        m = cc11001100_hook("m", {
          raise: cc11001100_hook("raise", "\\lower", "object-key-init"),
          lower: cc11001100_hook("lower", "\\raise", "object-key-init")
        }[m.substr(1)], "assign");
      }
      if (m === "\\lower") {
        o.dh = cc11001100_hook("o.dh", "-" + n, "assign");
        o.dd = cc11001100_hook("o.dd", "+" + n, "assign");
      } else {
        o.dh = cc11001100_hook("o.dh", "+" + n, "assign");
        o.dd = cc11001100_hook("o.dd", "-" + n, "assign");
      }
      this.Push(o);
    },
    MoveLeftRight: function (m) {
      var p = cc11001100_hook("p", this.GetDimen(m), "var-init");
      var o = cc11001100_hook("o", p.charAt(0) === "-" ? p.slice(1) : "-" + p, "var-init");
      if (m === "\\moveleft") {
        var n = cc11001100_hook("n", p, "var-init");
        p = cc11001100_hook("p", o, "assign");
        o = cc11001100_hook("o", n, "assign");
      }
      this.Push(b.position().With({
        name: cc11001100_hook("name", m, "object-key-init"),
        move: cc11001100_hook("move", "horizontal", "object-key-init"),
        left: cc11001100_hook("left", i.mspace().With({
          width: cc11001100_hook("width", p, "object-key-init"),
          mathsize: cc11001100_hook("mathsize", i.SIZE.NORMAL, "object-key-init")
        }), "object-key-init"),
        right: cc11001100_hook("right", i.mspace().With({
          width: cc11001100_hook("width", o, "object-key-init"),
          mathsize: cc11001100_hook("mathsize", i.SIZE.NORMAL, "object-key-init")
        }), "object-key-init")
      }));
    },
    Hskip: function (m) {
      this.Push(i.mspace().With({
        width: cc11001100_hook("width", this.GetDimen(m), "object-key-init"),
        mathsize: cc11001100_hook("mathsize", i.SIZE.NORMAL, "object-key-init")
      }));
    },
    Rule: function (n, p) {
      var m = cc11001100_hook("m", this.GetDimen(n), "var-init"),
        o = cc11001100_hook("o", this.GetDimen(n), "var-init"),
        r = cc11001100_hook("r", this.GetDimen(n), "var-init");
      var q = cc11001100_hook("q", {
        width: cc11001100_hook("width", m, "object-key-init"),
        height: cc11001100_hook("height", o, "object-key-init"),
        depth: cc11001100_hook("depth", r, "object-key-init")
      }, "var-init");
      if (p !== "blank") {
        q.mathbackground = cc11001100_hook("q.mathbackground", this.stack.env.color || "black", "assign");
      }
      this.Push(i.mspace().With(q));
    },
    rule: function (p) {
      var n = cc11001100_hook("n", this.GetBrackets(p), "var-init"),
        m = cc11001100_hook("m", this.GetDimen(p), "var-init"),
        q = cc11001100_hook("q", this.GetDimen(p), "var-init");
      var o = cc11001100_hook("o", i.mspace().With({
        width: cc11001100_hook("width", m, "object-key-init"),
        height: cc11001100_hook("height", q, "object-key-init"),
        mathbackground: cc11001100_hook("mathbackground", this.stack.env.color || "black", "object-key-init")
      }), "var-init");
      if (n) {
        o = cc11001100_hook("o", i.mpadded(o).With({
          voffset: cc11001100_hook("voffset", n, "object-key-init")
        }), "assign");
        if (n.match(/^\-/)) {
          o.height = cc11001100_hook("o.height", n, "assign");
          o.depth = cc11001100_hook("o.depth", "+" + n.substr(1), "assign");
        } else {
          o.height = cc11001100_hook("o.height", "+" + n, "assign");
        }
      }
      this.Push(o);
    },
    MakeBig: function (m, p, n) {
      n *= cc11001100_hook("n", g.p_height, "assign");
      n = cc11001100_hook("n", String(n).replace(/(\.\d\d\d).+/, "$1") + "em", "assign");
      var o = cc11001100_hook("o", this.GetDelimiter(m, true), "var-init");
      this.Push(i.TeXAtom(i.mo(o).With({
        minsize: cc11001100_hook("minsize", n, "object-key-init"),
        maxsize: cc11001100_hook("maxsize", n, "object-key-init"),
        fence: cc11001100_hook("fence", true, "object-key-init"),
        stretchy: cc11001100_hook("stretchy", true, "object-key-init"),
        symmetric: cc11001100_hook("symmetric", true, "object-key-init")
      })).With({
        texClass: cc11001100_hook("texClass", p, "object-key-init")
      }));
    },
    BuildRel: function (m) {
      var n = cc11001100_hook("n", this.ParseUpTo(m, "\\over"), "var-init");
      var o = cc11001100_hook("o", this.ParseArg(m), "var-init");
      this.Push(i.TeXAtom(i.munderover(o, null, n)).With({
        texClass: cc11001100_hook("texClass", i.TEXCLASS.REL, "object-key-init")
      }));
    },
    HBox: function (m, n) {
      this.Push.apply(this, this.InternalMath(this.GetArgument(m), n));
    },
    FBox: function (m) {
      this.Push(i.menclose.apply(i, this.InternalMath(this.GetArgument(m))).With({
        notation: cc11001100_hook("notation", "box", "object-key-init")
      }));
    },
    Not: function (m) {
      this.Push(b.not());
    },
    Dots: function (m) {
      this.Push(b.dots().With({
        ldots: cc11001100_hook("ldots", this.mmlToken(i.mo(i.entity("#x2026")).With({
          stretchy: cc11001100_hook("stretchy", false, "object-key-init")
        })), "object-key-init"),
        cdots: cc11001100_hook("cdots", this.mmlToken(i.mo(i.entity("#x22EF")).With({
          stretchy: cc11001100_hook("stretchy", false, "object-key-init")
        })), "object-key-init")
      }));
    },
    Require: function (m) {
      var n = cc11001100_hook("n", this.GetArgument(m).replace(/.*\//, "").replace(/[^a-z0-9_.-]/ig, ""), "var-init");
      this.Extension(null, n);
    },
    Extension: function (m, n, o) {
      if (m && !typeof m === "string") {
        m = cc11001100_hook("m", m.name, "assign");
      }
      n = cc11001100_hook("n", d.extensionDir + "/" + n, "assign");
      if (!n.match(/\.js$/)) {
        n += cc11001100_hook("n", ".js", "assign");
      }
      if (!j.loaded[j.fileURL(n)]) {
        if (m != null) {
          delete g[o || "macros"][m.replace(/^\\/, "")];
        }
        c.RestartAfter(j.Require(n));
      }
    },
    Macro: function (o, r, q, s) {
      if (q) {
        var n = cc11001100_hook("n", [], "var-init");
        if (s != null) {
          var m = cc11001100_hook("m", this.GetBrackets(o), "var-init");
          n.push(m == null ? s : m);
        }
        for (var p = cc11001100_hook("p", n.length, "var-init"); p < q; p++) {
          n.push(this.GetArgument(o));
        }
        r = cc11001100_hook("r", this.SubstituteArgs(n, r), "assign");
      }
      this.string = cc11001100_hook("this.string", this.AddArgs(r, this.string.slice(this.i)), "assign");
      this.i = cc11001100_hook("this.i", 0, "assign");
      if (++this.macroCount > d.config.MAXMACROS) {
        d.Error(["MaxMacroSub1", "MathJax maximum macro substitution count exceeded; is there a recursive macro call?"]);
      }
    },
    Matrix: function (n, p, v, r, u, o, m, w, t) {
      var s = cc11001100_hook("s", this.GetNext(), "var-init");
      if (s === "") {
        d.Error(["MissingArgFor", "Missing argument for %1", n]);
      }
      if (s === "{") {
        this.i++;
      } else {
        this.string = cc11001100_hook("this.string", s + "}" + this.string.slice(this.i + 1), "assign");
        this.i = cc11001100_hook("this.i", 0, "assign");
      }
      var q = cc11001100_hook("q", b.array().With({
        requireClose: cc11001100_hook("requireClose", true, "object-key-init"),
        arraydef: {
          rowspacing: cc11001100_hook("rowspacing", o || "4pt", "object-key-init"),
          columnspacing: cc11001100_hook("columnspacing", u || "1em", "object-key-init")
        }
      }), "var-init");
      if (w) {
        q.isCases = cc11001100_hook("q.isCases", true, "assign");
      }
      if (t) {
        q.isNumbered = cc11001100_hook("q.isNumbered", true, "assign");
        q.arraydef.side = cc11001100_hook("q.arraydef.side", t, "assign");
      }
      if (p || v) {
        q.open = cc11001100_hook("q.open", p, "assign");
        q.close = cc11001100_hook("q.close", v, "assign");
      }
      if (m === "D") {
        q.arraydef.displaystyle = cc11001100_hook("q.arraydef.displaystyle", true, "assign");
      }
      if (r != null) {
        q.arraydef.columnalign = cc11001100_hook("q.arraydef.columnalign", r, "assign");
      }
      this.Push(q);
    },
    Entry: function (p) {
      this.Push(b.cell().With({
        isEntry: cc11001100_hook("isEntry", true, "object-key-init"),
        name: cc11001100_hook("name", p, "object-key-init")
      }));
      if (this.stack.Top().isCases) {
        var o = cc11001100_hook("o", this.string, "var-init");
        var t = cc11001100_hook("t", 0, "var-init"),
          s = cc11001100_hook("s", -1, "var-init"),
          q = cc11001100_hook("q", this.i, "var-init"),
          n = cc11001100_hook("n", o.length, "var-init");
        while (q < n) {
          var u = cc11001100_hook("u", o.charAt(q), "var-init");
          if (u === "{") {
            t++;
            q++;
          } else {
            if (u === "}") {
              if (t === 0) {
                n = cc11001100_hook("n", 0, "assign");
              } else {
                t--;
                if (t === 0 && s < 0) {
                  s = cc11001100_hook("s", q - this.i, "assign");
                }
                q++;
              }
            } else {
              if (u === "&" && t === 0) {
                d.Error(["ExtraAlignTab", "Extra alignment tab in \\cases text"]);
              } else {
                if (u === "\\") {
                  if (o.substr(q).match(/^((\\cr)[^a-zA-Z]|\\\\)/)) {
                    n = cc11001100_hook("n", 0, "assign");
                  } else {
                    q += cc11001100_hook("q", 2, "assign");
                  }
                } else {
                  q++;
                }
              }
            }
          }
        }
        var r = cc11001100_hook("r", o.substr(this.i, q - this.i), "var-init");
        if (!r.match(/^\s*\\text[^a-zA-Z]/) || s !== r.replace(/\s+$/, "").length - 1) {
          this.Push.apply(this, this.InternalMath(r, 0));
          this.i = cc11001100_hook("this.i", q, "assign");
        }
      }
    },
    Cr: function (m) {
      this.Push(b.cell().With({
        isCR: cc11001100_hook("isCR", true, "object-key-init"),
        name: cc11001100_hook("name", m, "object-key-init")
      }));
    },
    CrLaTeX: function (m) {
      var q;
      if (this.string.charAt(this.i) === "[") {
        q = cc11001100_hook("q", this.GetBrackets(m, "").replace(/ /g, "").replace(/,/, "."), "assign");
        if (q && !this.matchDimen(q)) {
          d.Error(["BracketMustBeDimension", "Bracket argument to %1 must be a dimension", m]);
        }
      }
      this.Push(b.cell().With({
        isCR: cc11001100_hook("isCR", true, "object-key-init"),
        name: cc11001100_hook("name", m, "object-key-init"),
        linebreak: cc11001100_hook("linebreak", true, "object-key-init")
      }));
      var p = cc11001100_hook("p", this.stack.Top(), "var-init");
      if (p.isa(b.array)) {
        if (q && p.arraydef.rowspacing) {
          var o = cc11001100_hook("o", p.arraydef.rowspacing.split(/ /), "var-init");
          if (!p.rowspacing) {
            p.rowspacing = cc11001100_hook("p.rowspacing", this.dimen2em(o[0]), "assign");
          }
          while (o.length < p.table.length) {
            o.push(this.Em(p.rowspacing));
          }
          o[p.table.length - 1] = cc11001100_hook("o[p.table.length - 1]", this.Em(Math.max(0, p.rowspacing + this.dimen2em(q))), "assign");
          p.arraydef.rowspacing = cc11001100_hook("p.arraydef.rowspacing", o.join(" "), "assign");
        }
      } else {
        if (q) {
          this.Push(i.mspace().With({
            depth: cc11001100_hook("depth", q, "object-key-init")
          }));
        }
        this.Push(i.mspace().With({
          linebreak: cc11001100_hook("linebreak", i.LINEBREAK.NEWLINE, "object-key-init")
        }));
      }
    },
    emPerInch: cc11001100_hook("emPerInch", 7.2, "object-key-init"),
    pxPerInch: cc11001100_hook("pxPerInch", 72, "object-key-init"),
    matchDimen: function (m) {
      return m.match(/^(-?(?:\.\d+|\d+(?:\.\d*)?))(px|pt|em|ex|mu|pc|in|mm|cm)$/);
    },
    dimen2em: function (q) {
      var o = cc11001100_hook("o", this.matchDimen(q), "var-init");
      var n = cc11001100_hook("n", parseFloat(o[1] || "1"), "var-init"),
        p = cc11001100_hook("p", o[2], "var-init");
      if (p === "em") {
        return n;
      }
      if (p === "ex") {
        return n * 0.43;
      }
      if (p === "pt") {
        return n / 10;
      }
      if (p === "pc") {
        return n * 1.2;
      }
      if (p === "px") {
        return n * this.emPerInch / this.pxPerInch;
      }
      if (p === "in") {
        return n * this.emPerInch;
      }
      if (p === "cm") {
        return n * this.emPerInch / 2.54;
      }
      if (p === "mm") {
        return n * this.emPerInch / 25.4;
      }
      if (p === "mu") {
        return n / 18;
      }
      return 0;
    },
    Em: function (n) {
      if (Math.abs(n) < 0.0006) {
        return "0em";
      }
      return n.toFixed(3).replace(/\.?0+$/, "") + "em";
    },
    HLine: function (n, o) {
      if (o == null) {
        o = cc11001100_hook("o", "solid", "assign");
      }
      var p = cc11001100_hook("p", this.stack.Top(), "var-init");
      if (!p.isa(b.array) || p.data.length) {
        d.Error(["Misplaced", "Misplaced %1", n]);
      }
      if (p.table.length == 0) {
        p.frame.push("top");
      } else {
        var m = cc11001100_hook("m", p.arraydef.rowlines ? p.arraydef.rowlines.split(/ /) : [], "var-init");
        while (m.length < p.table.length) {
          m.push("none");
        }
        m[p.table.length - 1] = cc11001100_hook("m[p.table.length - 1]", o, "assign");
        p.arraydef.rowlines = cc11001100_hook("p.arraydef.rowlines", m.join(" "), "assign");
      }
    },
    HFill: function (m) {
      var n = cc11001100_hook("n", this.stack.Top(), "var-init");
      if (n.isa(b.array)) {
        n.hfill.push(n.data.length);
      } else {
        d.Error(["UnsupportedHFill", "Unsupported use of %1", m]);
      }
    },
    BeginEnd: function (o) {
      var p = cc11001100_hook("p", this.GetArgument(o), "var-init"),
        r = cc11001100_hook("r", false, "var-init");
      if (p.match(/^\\end\\/)) {
        r = cc11001100_hook("r", true, "assign");
        p = cc11001100_hook("p", p.substr(5), "assign");
      }
      if (p.match(/\\/i)) {
        d.Error(["InvalidEnv", "Invalid environment name '%1'", p]);
      }
      var q = cc11001100_hook("q", this.envFindName(p), "var-init");
      if (!q) {
        d.Error(["UnknownEnv", "Unknown environment '%1'", p]);
      }
      if (!f(q)) {
        q = cc11001100_hook("q", [q], "assign");
      }
      var m = cc11001100_hook("m", f(q[1]) ? q[1][0] : q[1], "var-init");
      var n = cc11001100_hook("n", b.begin().With({
        name: cc11001100_hook("name", p, "object-key-init"),
        end: cc11001100_hook("end", m, "object-key-init"),
        parse: cc11001100_hook("parse", this, "object-key-init")
      }), "var-init");
      if (o === "\\end") {
        if (!r && f(q[1]) && this[q[1][1]]) {
          n = cc11001100_hook("n", this[q[1][1]].apply(this, [n].concat(q.slice(2))), "assign");
        } else {
          n = cc11001100_hook("n", b.end().With({
            name: cc11001100_hook("name", p, "object-key-init")
          }), "assign");
        }
      } else {
        if (++this.macroCount > d.config.MAXMACROS) {
          d.Error(["MaxMacroSub2", "MathJax maximum substitution count exceeded; is there a recursive latex environment?"]);
        }
        if (q[0] && this[q[0]]) {
          n = cc11001100_hook("n", this[q[0]].apply(this, [n].concat(q.slice(2))), "assign");
        }
      }
      this.Push(n);
    },
    envFindName: function (m) {
      return g.environment[m];
    },
    Equation: function (m, n) {
      return n;
    },
    ExtensionEnv: function (n, m) {
      this.Extension(n.name, m, "environment");
    },
    Array: function (n, p, u, s, t, o, m, q) {
      if (!s) {
        s = cc11001100_hook("s", this.GetArgument("\\begin{" + n.name + "}"), "assign");
      }
      var v = cc11001100_hook("v", ("c" + s).replace(/[^clr|:]/g, "").replace(/[^|:]([|:])+/g, "$1"), "var-init");
      s = cc11001100_hook("s", s.replace(/[^clr]/g, "").split("").join(" "), "assign");
      s = cc11001100_hook("s", s.replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center"), "assign");
      var r = cc11001100_hook("r", b.array().With({
        arraydef: {
          columnalign: cc11001100_hook("columnalign", s, "object-key-init"),
          columnspacing: cc11001100_hook("columnspacing", t || "1em", "object-key-init"),
          rowspacing: cc11001100_hook("rowspacing", o || "4pt", "object-key-init")
        }
      }), "var-init");
      if (v.match(/[|:]/)) {
        if (v.charAt(0).match(/[|:]/)) {
          r.frame.push("left");
          r.frame.dashed = cc11001100_hook("r.frame.dashed", v.charAt(0) === ":", "assign");
        }
        if (v.charAt(v.length - 1).match(/[|:]/)) {
          r.frame.push("right");
        }
        v = cc11001100_hook("v", v.substr(1, v.length - 2), "assign");
        r.arraydef.columnlines = cc11001100_hook("r.arraydef.columnlines", v.split("").join(" ").replace(/[^|: ]/g, "none").replace(/\|/g, "solid").replace(/:/g, "dashed"), "assign");
      }
      if (p) {
        r.open = cc11001100_hook("r.open", this.convertDelimiter(p), "assign");
      }
      if (u) {
        r.close = cc11001100_hook("r.close", this.convertDelimiter(u), "assign");
      }
      if (m === "D") {
        r.arraydef.displaystyle = cc11001100_hook("r.arraydef.displaystyle", true, "assign");
      } else {
        if (m) {
          r.arraydef.displaystyle = cc11001100_hook("r.arraydef.displaystyle", false, "assign");
        }
      }
      if (m === "S") {
        r.arraydef.scriptlevel = cc11001100_hook("r.arraydef.scriptlevel", 1, "assign");
      }
      if (q) {
        r.arraydef.useHeight = cc11001100_hook("r.arraydef.useHeight", false, "assign");
      }
      this.Push(n);
      return r;
    },
    AlignedArray: function (m) {
      var n = cc11001100_hook("n", this.GetBrackets("\\begin{" + m.name + "}"), "var-init");
      return this.setArrayAlign(this.Array.apply(this, arguments), n);
    },
    setArrayAlign: function (n, m) {
      m = cc11001100_hook("m", this.trimSpaces(m || ""), "assign");
      if (m === "t") {
        n.arraydef.align = cc11001100_hook("n.arraydef.align", "baseline 1", "assign");
      } else {
        if (m === "b") {
          n.arraydef.align = cc11001100_hook("n.arraydef.align", "baseline -1", "assign");
        } else {
          if (m === "c") {
            n.arraydef.align = cc11001100_hook("n.arraydef.align", "center", "assign");
          } else {
            if (m) {
              n.arraydef.align = cc11001100_hook("n.arraydef.align", m, "assign");
            }
          }
        }
      }
      return n;
    },
    convertDelimiter: function (m) {
      if (m) {
        m = cc11001100_hook("m", g.delimiter[m], "assign");
      }
      if (m == null) {
        return null;
      }
      if (f(m)) {
        m = cc11001100_hook("m", m[0], "assign");
      }
      if (m.length === 4) {
        m = cc11001100_hook("m", String.fromCharCode(parseInt(m, 16)), "assign");
      }
      return m;
    },
    trimSpaces: function (n) {
      if (typeof n != "string") {
        return n;
      }
      var m = cc11001100_hook("m", n.replace(/^\s+|\s+$/g, ""), "var-init");
      if (m.match(/\\$/) && n.match(/ $/)) {
        m += cc11001100_hook("m", " ", "assign");
      }
      return m;
    },
    nextIsSpace: function () {
      return this.string.charAt(this.i).match(/\s/);
    },
    GetNext: function () {
      while (this.nextIsSpace()) {
        this.i++;
      }
      return this.string.charAt(this.i);
    },
    GetCS: function () {
      var m = cc11001100_hook("m", this.string.slice(this.i).match(/^([a-z]+|.) ?/i), "var-init");
      if (m) {
        this.i += cc11001100_hook("this.i", m[1].length, "assign");
        return m[1];
      } else {
        this.i++;
        return " ";
      }
    },
    GetArgument: function (n, o) {
      switch (this.GetNext()) {
        case "":
          if (!o) {
            d.Error(["MissingArgFor", "Missing argument for %1", n]);
          }
          return null;
        case "}":
          if (!o) {
            d.Error(["ExtraCloseMissingOpen", "Extra close brace or missing open brace"]);
          }
          return null;
        case "\\":
          this.i++;
          return "\\" + this.GetCS();
        case "{":
          var m = cc11001100_hook("m", ++this.i, "var-init"),
            p = cc11001100_hook("p", 1, "var-init");
          while (this.i < this.string.length) {
            switch (this.string.charAt(this.i++)) {
              case "\\":
                this.i++;
                break;
              case "{":
                p++;
                break;
              case "}":
                if (--p == 0) {
                  return this.string.slice(m, this.i - 1);
                }
                break;
            }
          }
          d.Error(["MissingCloseBrace", "Missing close brace"]);
          break;
      }
      return this.string.charAt(this.i++);
    },
    GetBrackets: function (n, p) {
      if (this.GetNext() != "[") {
        return p;
      }
      var m = cc11001100_hook("m", ++this.i, "var-init"),
        o = cc11001100_hook("o", 0, "var-init");
      while (this.i < this.string.length) {
        switch (this.string.charAt(this.i++)) {
          case "{":
            o++;
            break;
          case "\\":
            this.i++;
            break;
          case "}":
            if (o-- <= 0) {
              d.Error(["ExtraCloseLooking", "Extra close brace while looking for %1", "']'"]);
            }
            break;
          case "]":
            if (o == 0) {
              return this.string.slice(m, this.i - 1);
            }
            break;
        }
      }
      d.Error(["MissingCloseBracket", "Couldn't find closing ']' for argument to %1", n]);
    },
    GetDelimiter: function (m, n) {
      while (this.nextIsSpace()) {
        this.i++;
      }
      var o = cc11001100_hook("o", this.string.charAt(this.i), "var-init");
      this.i++;
      if (this.i <= this.string.length) {
        if (o == "\\") {
          o += cc11001100_hook("o", this.GetCS(m), "assign");
        } else {
          if (o === "{" && n) {
            this.i--;
            o = cc11001100_hook("o", this.GetArgument(m), "assign");
          }
        }
        if (g.delimiter[o] != null) {
          return this.convertDelimiter(o);
        }
      }
      d.Error(["MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", m]);
    },
    GetDimen: function (n) {
      var o;
      if (this.nextIsSpace()) {
        this.i++;
      }
      if (this.string.charAt(this.i) == "{") {
        o = cc11001100_hook("o", this.GetArgument(n), "assign");
        if (o.match(/^\s*([-+]?([.,]\d+|\d+([.,]\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)\s*$/)) {
          return o.replace(/ /g, "").replace(/,/, ".");
        }
      } else {
        o = cc11001100_hook("o", this.string.slice(this.i), "assign");
        var m = cc11001100_hook("m", o.match(/^\s*(([-+]?([.,]\d+|\d+([.,]\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)) ?/), "var-init");
        if (m) {
          this.i += cc11001100_hook("this.i", m[0].length, "assign");
          return m[1].replace(/ /g, "").replace(/,/, ".");
        }
      }
      d.Error(["MissingDimOrUnits", "Missing dimension or its units for %1", n]);
    },
    GetUpTo: function (o, p) {
      while (this.nextIsSpace()) {
        this.i++;
      }
      var n = cc11001100_hook("n", this.i, "var-init"),
        m,
        r,
        q = cc11001100_hook("q", 0, "var-init");
      while (this.i < this.string.length) {
        m = cc11001100_hook("m", this.i, "assign");
        r = cc11001100_hook("r", this.string.charAt(this.i++), "assign");
        switch (r) {
          case "\\":
            r += cc11001100_hook("r", this.GetCS(), "assign");
            break;
          case "{":
            q++;
            break;
          case "}":
            if (q == 0) {
              d.Error(["ExtraCloseLooking", "Extra close brace while looking for %1", p]);
            }
            q--;
            break;
        }
        if (q == 0 && r == p) {
          return this.string.slice(n, m);
        }
      }
      d.Error(["TokenNotFoundForCommand", "Couldn't find %1 for %2", p, o]);
    },
    ParseArg: function (m) {
      return d.Parse(this.GetArgument(m), this.stack.env).mml();
    },
    ParseUpTo: function (m, n) {
      return d.Parse(this.GetUpTo(m, n), this.stack.env).mml();
    },
    InternalMath: function (v, m) {
      var o = cc11001100_hook("o", this.stack.env.font ? {
        mathvariant: cc11001100_hook("mathvariant", this.stack.env.font, "object-key-init")
      } : {}, "var-init");
      var n = cc11001100_hook("n", [], "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        q = cc11001100_hook("q", 0, "var-init"),
        u,
        s = cc11001100_hook("s", "", "var-init"),
        p = cc11001100_hook("p", 0, "var-init");
      if (v.match(/\\?[${}\\]|\\\(|\\(eq)?ref\s*\{/)) {
        while (r < v.length) {
          u = cc11001100_hook("u", v.charAt(r++), "assign");
          if (u === "$") {
            if (s === "$" && p === 0) {
              n.push(i.TeXAtom(d.Parse(v.slice(q, r - 1), {}).mml()));
              s = cc11001100_hook("s", "", "assign");
              q = cc11001100_hook("q", r, "assign");
            } else {
              if (s === "") {
                if (q < r - 1) {
                  n.push(this.InternalText(v.slice(q, r - 1), o));
                }
                s = cc11001100_hook("s", "$", "assign");
                q = cc11001100_hook("q", r, "assign");
              }
            }
          } else {
            if (u === "{" && s !== "") {
              p++;
            } else {
              if (u === "}") {
                if (s === "}" && p === 0) {
                  n.push(i.TeXAtom(d.Parse(v.slice(q, r), {}).mml().With(o)));
                  s = cc11001100_hook("s", "", "assign");
                  q = cc11001100_hook("q", r, "assign");
                } else {
                  if (s !== "") {
                    if (p) {
                      p--;
                    }
                  }
                }
              } else {
                if (u === "\\") {
                  if (s === "" && v.substr(r).match(/^(eq)?ref\s*\{/)) {
                    var t = cc11001100_hook("t", RegExp["$&"].length, "var-init");
                    if (q < r - 1) {
                      n.push(this.InternalText(v.slice(q, r - 1), o));
                    }
                    s = cc11001100_hook("s", "}", "assign");
                    q = cc11001100_hook("q", r - 1, "assign");
                    r += cc11001100_hook("r", t, "assign");
                  } else {
                    u = cc11001100_hook("u", v.charAt(r++), "assign");
                    if (u === "(" && s === "") {
                      if (q < r - 2) {
                        n.push(this.InternalText(v.slice(q, r - 2), o));
                      }
                      s = cc11001100_hook("s", ")", "assign");
                      q = cc11001100_hook("q", r, "assign");
                    } else {
                      if (u === ")" && s === ")" && p === 0) {
                        n.push(i.TeXAtom(d.Parse(v.slice(q, r - 2), {}).mml()));
                        s = cc11001100_hook("s", "", "assign");
                        q = cc11001100_hook("q", r, "assign");
                      } else {
                        if (u.match(/[${}\\]/) && s === "") {
                          r--;
                          v = cc11001100_hook("v", v.substr(0, r - 1) + v.substr(r), "assign");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (s !== "") {
          d.Error(["MathNotTerminated", "Math not terminated in text box"]);
        }
      }
      if (q < v.length) {
        n.push(this.InternalText(v.slice(q), o));
      }
      if (m != null) {
        n = cc11001100_hook("n", [i.mstyle.apply(i, n).With({
          displaystyle: cc11001100_hook("displaystyle", false, "object-key-init"),
          scriptlevel: cc11001100_hook("scriptlevel", m, "object-key-init")
        })], "assign");
      } else {
        if (n.length > 1) {
          n = cc11001100_hook("n", [i.mrow.apply(i, n)], "assign");
        }
      }
      return n;
    },
    InternalText: function (n, m) {
      n = cc11001100_hook("n", n.replace(/^\s+/, h).replace(/\s+$/, h), "assign");
      return i.mtext(i.chars(n)).With(m);
    },
    SubstituteArgs: function (n, m) {
      var q = cc11001100_hook("q", "", "var-init");
      var p = cc11001100_hook("p", "", "var-init");
      var r;
      var o = cc11001100_hook("o", 0, "var-init");
      while (o < m.length) {
        r = cc11001100_hook("r", m.charAt(o++), "assign");
        if (r === "\\") {
          q += cc11001100_hook("q", r + m.charAt(o++), "assign");
        } else {
          if (r === "#") {
            r = cc11001100_hook("r", m.charAt(o++), "assign");
            if (r === "#") {
              q += cc11001100_hook("q", r, "assign");
            } else {
              if (!r.match(/[1-9]/) || r > n.length) {
                d.Error(["IllegalMacroParam", "Illegal macro parameter reference"]);
              }
              p = cc11001100_hook("p", this.AddArgs(this.AddArgs(p, q), n[r - 1]), "assign");
              q = cc11001100_hook("q", "", "assign");
            }
          } else {
            q += cc11001100_hook("q", r, "assign");
          }
        }
      }
      return this.AddArgs(p, q);
    },
    AddArgs: function (n, m) {
      if (m.match(/^[a-z]/i) && n.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i)) {
        n += cc11001100_hook("n", " ", "assign");
      }
      if (n.length + m.length > d.config.MAXBUFFER) {
        d.Error(["MaxBufferSize", "MathJax internal buffer size exceeded; is there a recursive macro call?"]);
      }
      return n + m;
    }
  }), "var-init");
  d.Augment({
    Stack: cc11001100_hook("Stack", e, "object-key-init"),
    Parse: cc11001100_hook("Parse", a, "object-key-init"),
    Definitions: cc11001100_hook("Definitions", g, "object-key-init"),
    Startup: cc11001100_hook("Startup", l, "object-key-init"),
    config: {
      MAXMACROS: cc11001100_hook("MAXMACROS", 10000, "object-key-init"),
      MAXBUFFER: cc11001100_hook("MAXBUFFER", 5 * 1024, "object-key-init")
    },
    sourceMenuTitle: cc11001100_hook("sourceMenuTitle", ["TeXCommands", "TeX Commands"], "object-key-init"),
    annotationEncoding: cc11001100_hook("annotationEncoding", "application/x-tex", "object-key-init"),
    prefilterHooks: cc11001100_hook("prefilterHooks", MathJax.Callback.Hooks(true), "object-key-init"),
    postfilterHooks: cc11001100_hook("postfilterHooks", MathJax.Callback.Hooks(true), "object-key-init"),
    Config: function () {
      this.SUPER(arguments).Config.apply(this, arguments);
      if (this.config.equationNumbers.autoNumber !== "none") {
        if (!this.config.extensions) {
          this.config.extensions = cc11001100_hook("this.config.extensions", [], "assign");
        }
        this.config.extensions.push("AMSmath.js");
      }
    },
    Translate: function (m) {
      var n,
        o = cc11001100_hook("o", false, "var-init"),
        q = cc11001100_hook("q", MathJax.HTML.getScript(m), "var-init");
      var s = cc11001100_hook("s", m.type.replace(/\n/g, " ").match(/(;|\s|\n)mode\s*=\s*display(;|\s|\n|$)/) != null, "var-init");
      var r = cc11001100_hook("r", {
        math: cc11001100_hook("math", q, "object-key-init"),
        display: cc11001100_hook("display", s, "object-key-init"),
        script: cc11001100_hook("script", m, "object-key-init")
      }, "var-init");
      var t = cc11001100_hook("t", this.prefilterHooks.Execute(r), "var-init");
      if (t) {
        return t;
      }
      q = cc11001100_hook("q", r.math, "assign");
      try {
        n = cc11001100_hook("n", d.Parse(q).mml(), "assign");
      } catch (p) {
        if (!p.texError) {
          throw p;
        }
        n = cc11001100_hook("n", this.formatError(p, q, s, m), "assign");
        o = cc11001100_hook("o", true, "assign");
      }
      if (n.isa(i.mtable) && n.displaystyle === "inherit") {
        n.displaystyle = cc11001100_hook("n.displaystyle", s, "assign");
      }
      if (n.inferred) {
        n = cc11001100_hook("n", i.apply(MathJax.ElementJax, n.data), "assign");
      } else {
        n = cc11001100_hook("n", i(n), "assign");
      }
      if (s) {
        n.root.display = cc11001100_hook("n.root.display", "block", "assign");
      }
      if (o) {
        n.texError = cc11001100_hook("n.texError", true, "assign");
      }
      r.math = cc11001100_hook("r.math", n, "assign");
      return this.postfilterHooks.Execute(r) || r.math;
    },
    prefilterMath: function (n, o, m) {
      return n;
    },
    postfilterMath: function (n, o, m) {
      this.combineRelations(n.root);
      return n;
    },
    formatError: function (p, o, q, m) {
      var n = cc11001100_hook("n", p.message.replace(/\n.*/, ""), "var-init");
      c.signal.Post(["TeX Jax - parse error", n, o, q, m]);
      return i.Error(n);
    },
    Error: function (m) {
      if (f(m)) {
        m = cc11001100_hook("m", k.apply(k, m), "assign");
      }
      throw c.Insert(Error(m), {
        texError: cc11001100_hook("texError", true, "object-key-init")
      });
    },
    Macro: function (m, n, o) {
      g.macros[m] = cc11001100_hook("g.macros[m]", ["Macro"].concat([].slice.call(arguments, 1)), "assign");
      g.macros[m].isUser = cc11001100_hook("g.macros[m].isUser", true, "assign");
    },
    fenced: function (o, n, p) {
      var m = cc11001100_hook("m", i.mrow().With({
        open: cc11001100_hook("open", o, "object-key-init"),
        close: cc11001100_hook("close", p, "object-key-init"),
        texClass: cc11001100_hook("texClass", i.TEXCLASS.INNER, "object-key-init")
      }), "var-init");
      m.Append(i.mo(o).With({
        fence: cc11001100_hook("fence", true, "object-key-init"),
        stretchy: cc11001100_hook("stretchy", true, "object-key-init"),
        symmetric: cc11001100_hook("symmetric", true, "object-key-init"),
        texClass: cc11001100_hook("texClass", i.TEXCLASS.OPEN, "object-key-init")
      }), n, i.mo(p).With({
        fence: cc11001100_hook("fence", true, "object-key-init"),
        stretchy: cc11001100_hook("stretchy", true, "object-key-init"),
        symmetric: cc11001100_hook("symmetric", true, "object-key-init"),
        texClass: cc11001100_hook("texClass", i.TEXCLASS.CLOSE, "object-key-init")
      }));
      return m;
    },
    fixedFence: function (o, n, p) {
      var m = cc11001100_hook("m", i.mrow().With({
        open: cc11001100_hook("open", o, "object-key-init"),
        close: cc11001100_hook("close", p, "object-key-init"),
        texClass: cc11001100_hook("texClass", i.TEXCLASS.ORD, "object-key-init")
      }), "var-init");
      if (o) {
        m.Append(this.mathPalette(o, "l"));
      }
      if (n.type === "mrow") {
        m.Append.apply(m, n.data);
      } else {
        m.Append(n);
      }
      if (p) {
        m.Append(this.mathPalette(p, "r"));
      }
      return m;
    },
    mathPalette: function (p, n) {
      if (p === "{" || p === "}") {
        p = cc11001100_hook("p", "\\" + p, "assign");
      }
      var o = cc11001100_hook("o", "{\\bigg" + n + " " + p + "}", "var-init"),
        m = cc11001100_hook("m", "{\\big" + n + " " + p + "}", "var-init");
      return d.Parse("\\mathchoice" + o + m + m + m, {}).mml();
    },
    combineRelations: function (q) {
      var r, n, p, o;
      for (r = cc11001100_hook("r", 0, "assign"), n = cc11001100_hook("n", q.data.length, "assign"); r < n; r++) {
        if (q.data[r]) {
          if (q.isa(i.mrow)) {
            while (r + 1 < n && (p = cc11001100_hook("p", q.data[r], "assign")) && (o = cc11001100_hook("o", q.data[r + 1], "assign")) && p.isa(i.mo) && o.isa(i.mo) && p.Get("texClass") === i.TEXCLASS.REL && o.Get("texClass") === i.TEXCLASS.REL) {
              if (p.variantForm == o.variantForm && p.Get("mathvariant") == o.Get("mathvariant") && p.style == o.style && p["class"] == o["class"] && !p.id && !o.id) {
                p.Append.apply(p, o.data);
                q.data.splice(r + 1, 1);
                n--;
              } else {
                p.rspace = cc11001100_hook("p.rspace", o.lspace = cc11001100_hook("o.lspace", "0pt", "assign"), "assign");
                r++;
              }
            }
          }
          if (!q.data[r].isToken) {
            this.combineRelations(q.data[r]);
          }
        }
      }
    }
  });
  d.prefilterHooks.Add(function (m) {
    m.math = cc11001100_hook("m.math", d.prefilterMath(m.math, m.display, m.script), "assign");
  });
  d.postfilterHooks.Add(function (m) {
    m.math = cc11001100_hook("m.math", d.postfilterMath(m.math, m.display, m.script), "assign");
  });
  d.loadComplete("jax.js");
})(MathJax.InputJax.TeX, MathJax.Hub, MathJax.Ajax);
MathJax.Extension["TeX/AMSmath"] = cc11001100_hook("MathJax.Extension[\"TeX/AMSmath\"]", {
  version: cc11001100_hook("version", "2.7.2", "object-key-init"),
  number: cc11001100_hook("number", 0, "object-key-init"),
  startNumber: cc11001100_hook("startNumber", 0, "object-key-init"),
  IDs: {},
  eqIDs: {},
  labels: {},
  eqlabels: {},
  refs: cc11001100_hook("refs", [], "object-key-init")
}, "assign");
MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {
  var b = cc11001100_hook("b", MathJax.ElementJax.mml, "var-init"),
    h = cc11001100_hook("h", MathJax.InputJax.TeX, "var-init"),
    g = cc11001100_hook("g", MathJax.Extension["TeX/AMSmath"], "var-init");
  var d = cc11001100_hook("d", h.Definitions, "var-init"),
    f = cc11001100_hook("f", h.Stack.Item, "var-init"),
    a = cc11001100_hook("a", h.config.equationNumbers, "var-init");
  var c = function (k) {
    var n = cc11001100_hook("n", [], "var-init");
    for (var l = cc11001100_hook("l", 0, "var-init"), j = cc11001100_hook("j", k.length, "var-init"); l < j; l++) {
      n[l] = cc11001100_hook("n[l]", h.Parse.prototype.Em(k[l]), "assign");
    }
    return n.join(" ");
  };
  var e = cc11001100_hook("e", document.getElementsByTagName("base").length === 0 ? "" : String(document.location).replace(/#.*$/, ""), "var-init");
  d.Add({
    mathchar0mo: {
      iiiint: cc11001100_hook("iiiint", ["2A0C", {
        texClass: cc11001100_hook("texClass", b.TEXCLASS.OP, "object-key-init")
      }], "object-key-init")
    },
    macros: {
      mathring: cc11001100_hook("mathring", ["Accent", "2DA"], "object-key-init"),
      nobreakspace: cc11001100_hook("nobreakspace", "Tilde", "object-key-init"),
      negmedspace: cc11001100_hook("negmedspace", ["Spacer", b.LENGTH.NEGATIVEMEDIUMMATHSPACE], "object-key-init"),
      negthickspace: cc11001100_hook("negthickspace", ["Spacer", b.LENGTH.NEGATIVETHICKMATHSPACE], "object-key-init"),
      idotsint: cc11001100_hook("idotsint", ["MultiIntegral", "\\int\\cdots\\int"], "object-key-init"),
      dddot: cc11001100_hook("dddot", ["Accent", "20DB"], "object-key-init"),
      ddddot: cc11001100_hook("ddddot", ["Accent", "20DC"], "object-key-init"),
      sideset: cc11001100_hook("sideset", ["Macro", "\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}", 3], "object-key-init"),
      boxed: cc11001100_hook("boxed", ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1], "object-key-init"),
      tag: cc11001100_hook("tag", "HandleTag", "object-key-init"),
      notag: cc11001100_hook("notag", "HandleNoTag", "object-key-init"),
      label: cc11001100_hook("label", "HandleLabel", "object-key-init"),
      ref: cc11001100_hook("ref", "HandleRef", "object-key-init"),
      eqref: cc11001100_hook("eqref", ["HandleRef", true], "object-key-init"),
      substack: cc11001100_hook("substack", ["Macro", "\\begin{subarray}{c}#1\\end{subarray}", 1], "object-key-init"),
      injlim: cc11001100_hook("injlim", ["NamedOp", "inj&thinsp;lim"], "object-key-init"),
      projlim: cc11001100_hook("projlim", ["NamedOp", "proj&thinsp;lim"], "object-key-init"),
      varliminf: cc11001100_hook("varliminf", ["Macro", "\\mathop{\\underline{\\mmlToken{mi}{lim}}}"], "object-key-init"),
      varlimsup: cc11001100_hook("varlimsup", ["Macro", "\\mathop{\\overline{\\mmlToken{mi}{lim}}}"], "object-key-init"),
      varinjlim: cc11001100_hook("varinjlim", ["Macro", "\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}"], "object-key-init"),
      varprojlim: cc11001100_hook("varprojlim", ["Macro", "\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}"], "object-key-init"),
      DeclareMathOperator: cc11001100_hook("DeclareMathOperator", "HandleDeclareOp", "object-key-init"),
      operatorname: cc11001100_hook("operatorname", "HandleOperatorName", "object-key-init"),
      SkipLimits: cc11001100_hook("SkipLimits", "SkipLimits", "object-key-init"),
      genfrac: cc11001100_hook("genfrac", "Genfrac", "object-key-init"),
      frac: cc11001100_hook("frac", ["Genfrac", "", "", "", ""], "object-key-init"),
      tfrac: cc11001100_hook("tfrac", ["Genfrac", "", "", "", 1], "object-key-init"),
      dfrac: cc11001100_hook("dfrac", ["Genfrac", "", "", "", 0], "object-key-init"),
      binom: cc11001100_hook("binom", ["Genfrac", "(", ")", "0", ""], "object-key-init"),
      tbinom: cc11001100_hook("tbinom", ["Genfrac", "(", ")", "0", 1], "object-key-init"),
      dbinom: cc11001100_hook("dbinom", ["Genfrac", "(", ")", "0", 0], "object-key-init"),
      cfrac: cc11001100_hook("cfrac", "CFrac", "object-key-init"),
      shoveleft: cc11001100_hook("shoveleft", ["HandleShove", b.ALIGN.LEFT], "object-key-init"),
      shoveright: cc11001100_hook("shoveright", ["HandleShove", b.ALIGN.RIGHT], "object-key-init"),
      xrightarrow: cc11001100_hook("xrightarrow", ["xArrow", 8594, 5, 6], "object-key-init"),
      xleftarrow: cc11001100_hook("xleftarrow", ["xArrow", 8592, 7, 3], "object-key-init")
    },
    environment: {
      align: cc11001100_hook("align", ["AMSarray", null, true, true, "rlrlrlrlrlrl", c([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0])], "object-key-init"),
      "align*": cc11001100_hook("align*", ["AMSarray", null, false, true, "rlrlrlrlrlrl", c([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0])], "object-key-init"),
      multline: cc11001100_hook("multline", ["Multline", null, true], "object-key-init"),
      "multline*": cc11001100_hook("multline*", ["Multline", null, false], "object-key-init"),
      split: cc11001100_hook("split", ["AMSarray", null, false, false, "rl", c([0])], "object-key-init"),
      gather: cc11001100_hook("gather", ["AMSarray", null, true, true, "c"], "object-key-init"),
      "gather*": cc11001100_hook("gather*", ["AMSarray", null, false, true, "c"], "object-key-init"),
      alignat: cc11001100_hook("alignat", ["AlignAt", null, true, true], "object-key-init"),
      "alignat*": cc11001100_hook("alignat*", ["AlignAt", null, false, true], "object-key-init"),
      alignedat: cc11001100_hook("alignedat", ["AlignAt", null, false, false], "object-key-init"),
      aligned: cc11001100_hook("aligned", ["AlignedAMSArray", null, null, null, "rlrlrlrlrlrl", c([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]), ".5em", "D"], "object-key-init"),
      gathered: cc11001100_hook("gathered", ["AlignedAMSArray", null, null, null, "c", null, ".5em", "D"], "object-key-init"),
      subarray: cc11001100_hook("subarray", ["Array", null, null, null, null, c([0]), "0.1em", "S", 1], "object-key-init"),
      smallmatrix: cc11001100_hook("smallmatrix", ["Array", null, null, null, "c", c([1 / 3]), ".2em", "S", 1], "object-key-init"),
      equation: cc11001100_hook("equation", ["EquationBegin", "Equation", true], "object-key-init"),
      "equation*": cc11001100_hook("equation*", ["EquationBegin", "EquationStar", false], "object-key-init"),
      eqnarray: cc11001100_hook("eqnarray", ["AMSarray", null, true, true, "rcl", "0 " + b.LENGTH.THICKMATHSPACE, ".5em"], "object-key-init"),
      "eqnarray*": cc11001100_hook("eqnarray*", ["AMSarray", null, false, true, "rcl", "0 " + b.LENGTH.THICKMATHSPACE, ".5em"], "object-key-init")
    },
    delimiter: {
      "\\lvert": cc11001100_hook("\\lvert", ["007C", {
        texClass: cc11001100_hook("texClass", b.TEXCLASS.OPEN, "object-key-init")
      }], "object-key-init"),
      "\\rvert": cc11001100_hook("\\rvert", ["007C", {
        texClass: cc11001100_hook("texClass", b.TEXCLASS.CLOSE, "object-key-init")
      }], "object-key-init"),
      "\\lVert": cc11001100_hook("\\lVert", ["2016", {
        texClass: cc11001100_hook("texClass", b.TEXCLASS.OPEN, "object-key-init")
      }], "object-key-init"),
      "\\rVert": cc11001100_hook("\\rVert", ["2016", {
        texClass: cc11001100_hook("texClass", b.TEXCLASS.CLOSE, "object-key-init")
      }], "object-key-init")
    }
  }, null, true);
  h.Parse.Augment({
    HandleTag: function (k) {
      var m = cc11001100_hook("m", this.GetStar(), "var-init");
      var j = cc11001100_hook("j", this.trimSpaces(this.GetArgument(k)), "var-init"),
        i = cc11001100_hook("i", j, "var-init");
      if (!m) {
        j = cc11001100_hook("j", a.formatTag(j), "assign");
      }
      var l = cc11001100_hook("l", this.stack.global, "var-init");
      l.tagID = cc11001100_hook("l.tagID", i, "assign");
      if (l.notags) {
        h.Error(["CommandNotAllowedInEnv", "%1 not allowed in %2 environment", k, l.notags]);
      }
      if (l.tag) {
        h.Error(["MultipleCommand", "Multiple %1", k]);
      }
      l.tag = cc11001100_hook("l.tag", b.mtd.apply(b, this.InternalMath(j)).With({
        id: cc11001100_hook("id", a.formatID(i), "object-key-init")
      }), "assign");
    },
    HandleNoTag: function (i) {
      if (this.stack.global.tag) {
        delete this.stack.global.tag;
      }
      this.stack.global.notag = cc11001100_hook("this.stack.global.notag", true, "assign");
    },
    HandleLabel: function (j) {
      var k = cc11001100_hook("k", this.stack.global, "var-init"),
        i = cc11001100_hook("i", this.GetArgument(j), "var-init");
      if (i === "") {
        return;
      }
      if (!g.refUpdate) {
        if (k.label) {
          h.Error(["MultipleCommand", "Multiple %1", j]);
        }
        k.label = cc11001100_hook("k.label", i, "assign");
        if (g.labels[i] || g.eqlabels[i]) {
          h.Error(["MultipleLabel", "Label '%1' multiply defined", i]);
        }
        g.eqlabels[i] = cc11001100_hook("g.eqlabels[i]", {
          tag: cc11001100_hook("tag", "???", "object-key-init"),
          id: cc11001100_hook("id", "", "object-key-init")
        }, "assign");
      }
    },
    HandleRef: function (k, m) {
      var j = cc11001100_hook("j", this.GetArgument(k), "var-init");
      var l = cc11001100_hook("l", g.labels[j] || g.eqlabels[j], "var-init");
      if (!l) {
        l = cc11001100_hook("l", {
          tag: cc11001100_hook("tag", "???", "object-key-init"),
          id: cc11001100_hook("id", "", "object-key-init")
        }, "assign");
        g.badref = cc11001100_hook("g.badref", !g.refUpdate, "assign");
      }
      var i = cc11001100_hook("i", l.tag, "var-init");
      if (m) {
        i = cc11001100_hook("i", a.formatTag(i), "assign");
      }
      this.Push(b.mrow.apply(b, this.InternalMath(i)).With({
        href: cc11001100_hook("href", a.formatURL(l.id, e), "object-key-init"),
        "class": cc11001100_hook("class", "MathJax_ref", "object-key-init")
      }));
    },
    HandleDeclareOp: function (j) {
      var i = cc11001100_hook("i", this.GetStar() ? "" : "\\nolimits\\SkipLimits", "var-init");
      var k = cc11001100_hook("k", this.trimSpaces(this.GetArgument(j)), "var-init");
      if (k.charAt(0) == "\\") {
        k = cc11001100_hook("k", k.substr(1), "assign");
      }
      var l = cc11001100_hook("l", this.GetArgument(j), "var-init");
      l = cc11001100_hook("l", l.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}"), "assign");
      h.Definitions.macros[k] = cc11001100_hook("h.Definitions.macros[k]", ["Macro", "\\mathop{\\rm " + l + "}" + i], "assign");
    },
    HandleOperatorName: function (j) {
      var i = cc11001100_hook("i", this.GetStar() ? "" : "\\nolimits\\SkipLimits", "var-init");
      var k = cc11001100_hook("k", this.trimSpaces(this.GetArgument(j)), "var-init");
      k = cc11001100_hook("k", k.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}"), "assign");
      this.string = cc11001100_hook("this.string", "\\mathop{\\rm " + k + "}" + i + " " + this.string.slice(this.i), "assign");
      this.i = cc11001100_hook("this.i", 0, "assign");
    },
    SkipLimits: function (j) {
      var l = cc11001100_hook("l", this.GetNext(), "var-init"),
        k = cc11001100_hook("k", this.i, "var-init");
      if (l === "\\" && ++this.i && this.GetCS() !== "limits") {
        this.i = cc11001100_hook("this.i", k, "assign");
      }
    },
    HandleShove: function (j, i) {
      var k = cc11001100_hook("k", this.stack.Top(), "var-init");
      if (k.type !== "multline") {
        h.Error(["CommandInMultline", "%1 can only appear within the multline environment", j]);
      }
      if (k.data.length) {
        h.Error(["CommandAtTheBeginingOfLine", "%1 must come at the beginning of the line", j]);
      }
      k.data.shove = cc11001100_hook("k.data.shove", i, "assign");
    },
    CFrac: function (l) {
      var i = cc11001100_hook("i", this.trimSpaces(this.GetBrackets(l, "")), "var-init"),
        k = cc11001100_hook("k", this.GetArgument(l), "var-init"),
        m = cc11001100_hook("m", this.GetArgument(l), "var-init");
      var j = cc11001100_hook("j", b.mfrac(h.Parse("\\strut\\textstyle{" + k + "}", this.stack.env).mml(), h.Parse("\\strut\\textstyle{" + m + "}", this.stack.env).mml()), "var-init");
      i = cc11001100_hook("i", {
        l: cc11001100_hook("l", b.ALIGN.LEFT, "object-key-init"),
        r: cc11001100_hook("r", b.ALIGN.RIGHT, "object-key-init"),
        "": cc11001100_hook("", "", "object-key-init")
      }[i], "assign");
      if (i == null) {
        h.Error(["IllegalAlign", "Illegal alignment specified in %1", l]);
      }
      if (i) {
        j.numalign = cc11001100_hook("j.numalign", j.denomalign = cc11001100_hook("j.denomalign", i, "assign"), "assign");
      }
      this.Push(j);
    },
    Genfrac: function (j, l, q, n, i) {
      if (l == null) {
        l = cc11001100_hook("l", this.GetDelimiterArg(j), "assign");
      }
      if (q == null) {
        q = cc11001100_hook("q", this.GetDelimiterArg(j), "assign");
      }
      if (n == null) {
        n = cc11001100_hook("n", this.GetArgument(j), "assign");
      }
      if (i == null) {
        i = cc11001100_hook("i", this.trimSpaces(this.GetArgument(j)), "assign");
      }
      var m = cc11001100_hook("m", this.ParseArg(j), "var-init");
      var p = cc11001100_hook("p", this.ParseArg(j), "var-init");
      var k = cc11001100_hook("k", b.mfrac(m, p), "var-init");
      if (n !== "") {
        k.linethickness = cc11001100_hook("k.linethickness", n, "assign");
      }
      if (l || q) {
        k = cc11001100_hook("k", h.fixedFence(l, k.With({
          texWithDelims: cc11001100_hook("texWithDelims", true, "object-key-init")
        }), q), "assign");
      }
      if (i !== "") {
        var o = cc11001100_hook("o", ["D", "T", "S", "SS"][i], "var-init");
        if (o == null) {
          h.Error(["BadMathStyleFor", "Bad math style for %1", j]);
        }
        k = cc11001100_hook("k", b.mstyle(k), "assign");
        if (o === "D") {
          k.displaystyle = cc11001100_hook("k.displaystyle", true, "assign");
          k.scriptlevel = cc11001100_hook("k.scriptlevel", 0, "assign");
        } else {
          k.displaystyle = cc11001100_hook("k.displaystyle", false, "assign");
          k.scriptlevel = cc11001100_hook("k.scriptlevel", i - 1, "assign");
        }
      }
      this.Push(k);
    },
    Multline: function (j, i) {
      this.Push(j);
      this.checkEqnEnv();
      return f.multline(i, this.stack).With({
        arraydef: {
          displaystyle: cc11001100_hook("displaystyle", true, "object-key-init"),
          rowspacing: cc11001100_hook("rowspacing", ".5em", "object-key-init"),
          width: cc11001100_hook("width", h.config.MultLineWidth, "object-key-init"),
          columnwidth: cc11001100_hook("columnwidth", "100%", "object-key-init"),
          side: cc11001100_hook("side", h.config.TagSide, "object-key-init"),
          minlabelspacing: cc11001100_hook("minlabelspacing", h.config.TagIndent, "object-key-init")
        }
      });
    },
    AMSarray: function (k, j, i, m, l) {
      this.Push(k);
      if (i) {
        this.checkEqnEnv();
      }
      m = cc11001100_hook("m", m.replace(/[^clr]/g, "").split("").join(" "), "assign");
      m = cc11001100_hook("m", m.replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center"), "assign");
      return f.AMSarray(k.name, j, i, this.stack).With({
        arraydef: {
          displaystyle: cc11001100_hook("displaystyle", true, "object-key-init"),
          rowspacing: cc11001100_hook("rowspacing", ".5em", "object-key-init"),
          columnalign: cc11001100_hook("columnalign", m, "object-key-init"),
          columnspacing: cc11001100_hook("columnspacing", l || "1em", "object-key-init"),
          rowspacing: cc11001100_hook("rowspacing", "3pt", "object-key-init"),
          side: cc11001100_hook("side", h.config.TagSide, "object-key-init"),
          minlabelspacing: cc11001100_hook("minlabelspacing", h.config.TagIndent, "object-key-init")
        }
      });
    },
    AlignedAMSArray: function (i) {
      var j = cc11001100_hook("j", this.GetBrackets("\\begin{" + i.name + "}"), "var-init");
      return this.setArrayAlign(this.AMSarray.apply(this, arguments), j);
    },
    AlignAt: function (l, j, i) {
      var q,
        k,
        p = cc11001100_hook("p", "", "var-init"),
        o = cc11001100_hook("o", [], "var-init");
      if (!i) {
        k = cc11001100_hook("k", this.GetBrackets("\\begin{" + l.name + "}"), "assign");
      }
      q = cc11001100_hook("q", this.GetArgument("\\begin{" + l.name + "}"), "assign");
      if (q.match(/[^0-9]/)) {
        h.Error(["PositiveIntegerArg", "Argument to %1 must me a positive integer", "\\begin{" + l.name + "}"]);
      }
      while (q > 0) {
        p += cc11001100_hook("p", "rl", "assign");
        o.push("0em 0em");
        q--;
      }
      o = cc11001100_hook("o", o.join(" "), "assign");
      if (i) {
        return this.AMSarray(l, j, i, p, o);
      }
      var m = cc11001100_hook("m", this.AMSarray(l, j, i, p, o), "var-init");
      return this.setArrayAlign(m, k);
    },
    EquationBegin: function (i, j) {
      this.checkEqnEnv();
      this.stack.global.forcetag = cc11001100_hook("this.stack.global.forcetag", j && a.autoNumber !== "none", "assign");
      return i;
    },
    EquationStar: function (i, j) {
      this.stack.global.tagged = cc11001100_hook("this.stack.global.tagged", true, "assign");
      return j;
    },
    checkEqnEnv: function () {
      if (this.stack.global.eqnenv) {
        h.Error(["ErroneousNestingEq", "Erroneous nesting of equation structures"]);
      }
      this.stack.global.eqnenv = cc11001100_hook("this.stack.global.eqnenv", true, "assign");
    },
    MultiIntegral: function (j, m) {
      var l = cc11001100_hook("l", this.GetNext(), "var-init");
      if (l === "\\") {
        var k = cc11001100_hook("k", this.i, "var-init");
        l = cc11001100_hook("l", this.GetArgument(j), "assign");
        this.i = cc11001100_hook("this.i", k, "assign");
        if (l === "\\limits") {
          if (j === "\\idotsint") {
            m = cc11001100_hook("m", "\\!\\!\\mathop{\\,\\," + m + "}", "assign");
          } else {
            m = cc11001100_hook("m", "\\!\\!\\!\\mathop{\\,\\,\\," + m + "}", "assign");
          }
        }
      }
      this.string = cc11001100_hook("this.string", m + " " + this.string.slice(this.i), "assign");
      this.i = cc11001100_hook("this.i", 0, "assign");
    },
    xArrow: function (k, o, n, i) {
      var m = cc11001100_hook("m", {
        width: cc11001100_hook("width", "+" + (n + i) + "mu", "object-key-init"),
        lspace: cc11001100_hook("lspace", n + "mu", "object-key-init")
      }, "var-init");
      var p = cc11001100_hook("p", this.GetBrackets(k), "var-init"),
        q = cc11001100_hook("q", this.ParseArg(k), "var-init");
      var s = cc11001100_hook("s", b.mo(b.chars(String.fromCharCode(o))).With({
        stretchy: cc11001100_hook("stretchy", true, "object-key-init"),
        texClass: cc11001100_hook("texClass", b.TEXCLASS.REL, "object-key-init")
      }), "var-init");
      var j = cc11001100_hook("j", b.munderover(s), "var-init");
      j.SetData(j.over, b.mpadded(q).With(m).With({
        voffset: cc11001100_hook("voffset", ".15em", "object-key-init")
      }));
      if (p) {
        p = cc11001100_hook("p", h.Parse(p, this.stack.env).mml(), "assign");
        j.SetData(j.under, b.mpadded(p).With(m).With({
          voffset: cc11001100_hook("voffset", "-.24em", "object-key-init")
        }));
      }
      this.Push(j.With({
        subsupOK: cc11001100_hook("subsupOK", true, "object-key-init")
      }));
    },
    GetDelimiterArg: function (i) {
      var j = cc11001100_hook("j", this.trimSpaces(this.GetArgument(i)), "var-init");
      if (j == "") {
        return null;
      }
      if (j in d.delimiter) {
        return j;
      }
      h.Error(["MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", i]);
    },
    GetStar: function () {
      var i = cc11001100_hook("i", this.GetNext() === "*", "var-init");
      if (i) {
        this.i++;
      }
      return i;
    }
  });
  f.Augment({
    autoTag: function () {
      var j = cc11001100_hook("j", this.global, "var-init");
      if (!j.notag) {
        g.number++;
        j.tagID = cc11001100_hook("j.tagID", a.formatNumber(g.number.toString()), "assign");
        var i = cc11001100_hook("i", h.Parse("\\text{" + a.formatTag(j.tagID) + "}", {}).mml(), "var-init");
        j.tag = cc11001100_hook("j.tag", b.mtd(i).With({
          id: cc11001100_hook("id", a.formatID(j.tagID), "object-key-init")
        }), "assign");
      }
    },
    getTag: function () {
      var m = cc11001100_hook("m", this.global, "var-init"),
        k = cc11001100_hook("k", m.tag, "var-init");
      m.tagged = cc11001100_hook("m.tagged", true, "assign");
      if (m.label) {
        if (a.useLabelIds) {
          k.id = cc11001100_hook("k.id", a.formatID(m.label), "assign");
        }
        g.eqlabels[m.label] = cc11001100_hook("g.eqlabels[m.label]", {
          tag: cc11001100_hook("tag", m.tagID, "object-key-init"),
          id: cc11001100_hook("id", k.id, "object-key-init")
        }, "assign");
      }
      if (document.getElementById(k.id) || g.IDs[k.id] || g.eqIDs[k.id]) {
        var l = cc11001100_hook("l", 0, "var-init"),
          j;
        do {
          l++;
          j = cc11001100_hook("j", k.id + "_" + l, "assign");
        } while (document.getElementById(j) || g.IDs[j] || g.eqIDs[j]);
        k.id = cc11001100_hook("k.id", j, "assign");
        if (m.label) {
          g.eqlabels[m.label].id = cc11001100_hook("g.eqlabels[m.label].id", j, "assign");
        }
      }
      g.eqIDs[k.id] = cc11001100_hook("g.eqIDs[k.id]", 1, "assign");
      this.clearTag();
      return k;
    },
    clearTag: function () {
      var i = cc11001100_hook("i", this.global, "var-init");
      delete i.tag;
      delete i.tagID;
      delete i.label;
    },
    fixInitialMO: function (l) {
      for (var k = cc11001100_hook("k", 0, "var-init"), j = cc11001100_hook("j", l.length, "var-init"); k < j; k++) {
        if (l[k] && l[k].type !== "mspace" && (l[k].type !== "texatom" || l[k].data[0] && l[k].data[0].data.length)) {
          if (l[k].isEmbellished()) {
            l.unshift(b.mi());
          }
          break;
        }
      }
    }
  });
  f.multline = cc11001100_hook("f.multline", f.array.Subclass({
    type: cc11001100_hook("type", "multline", "object-key-init"),
    Init: function (j, i) {
      this.SUPER(arguments).Init.apply(this);
      this.numbered = cc11001100_hook("this.numbered", j && a.autoNumber !== "none", "assign");
      this.save = cc11001100_hook("this.save", {
        notag: cc11001100_hook("notag", i.global.notag, "object-key-init")
      }, "assign");
      i.global.tagged = cc11001100_hook("i.global.tagged", !j && !i.global.forcetag, "assign");
    },
    EndEntry: function () {
      if (this.table.length) {
        this.fixInitialMO(this.data);
      }
      var i = cc11001100_hook("i", b.mtd.apply(b, this.data), "var-init");
      if (this.data.shove) {
        i.columnalign = cc11001100_hook("i.columnalign", this.data.shove, "assign");
      }
      this.row.push(i);
      this.data = cc11001100_hook("this.data", [], "assign");
    },
    EndRow: function () {
      if (this.row.length != 1) {
        h.Error(["MultlineRowsOneCol", "The rows within the %1 environment must have exactly one column", "multline"]);
      }
      this.table.push(this.row);
      this.row = cc11001100_hook("this.row", [], "assign");
    },
    EndTable: function () {
      this.SUPER(arguments).EndTable.call(this);
      if (this.table.length) {
        var k = cc11001100_hook("k", this.table.length - 1, "var-init"),
          n,
          l = cc11001100_hook("l", -1, "var-init");
        if (!this.table[0][0].columnalign) {
          this.table[0][0].columnalign = cc11001100_hook("this.table[0][0].columnalign", b.ALIGN.LEFT, "assign");
        }
        if (!this.table[k][0].columnalign) {
          this.table[k][0].columnalign = cc11001100_hook("this.table[k][0].columnalign", b.ALIGN.RIGHT, "assign");
        }
        if (!this.global.tag && this.numbered) {
          this.autoTag();
        }
        if (this.global.tag && !this.global.notags) {
          l = cc11001100_hook("l", this.arraydef.side === "left" ? 0 : this.table.length - 1, "assign");
          this.table[l] = cc11001100_hook("this.table[l]", [this.getTag()].concat(this.table[l]), "assign");
        }
        for (n = cc11001100_hook("n", 0, "assign"), k = cc11001100_hook("k", this.table.length, "assign"); n < k; n++) {
          var j = cc11001100_hook("j", n === l ? b.mlabeledtr : b.mtr, "var-init");
          this.table[n] = cc11001100_hook("this.table[n]", j.apply(b, this.table[n]), "assign");
        }
      }
      this.global.notag = cc11001100_hook("this.global.notag", this.save.notag, "assign");
    }
  }), "assign");
  f.AMSarray = cc11001100_hook("f.AMSarray", f.array.Subclass({
    type: cc11001100_hook("type", "AMSarray", "object-key-init"),
    Init: function (l, k, j, i) {
      this.SUPER(arguments).Init.apply(this);
      this.numbered = cc11001100_hook("this.numbered", k && a.autoNumber !== "none", "assign");
      this.save = cc11001100_hook("this.save", {
        notags: cc11001100_hook("notags", i.global.notags, "object-key-init"),
        notag: cc11001100_hook("notag", i.global.notag, "object-key-init")
      }, "assign");
      i.global.notags = cc11001100_hook("i.global.notags", j ? null : l, "assign");
      i.global.tagged = cc11001100_hook("i.global.tagged", !k && !i.global.forcetag, "assign");
    },
    EndEntry: function () {
      if (this.row.length % 2 === 1) {
        this.fixInitialMO(this.data);
      }
      this.row.push(b.mtd.apply(b, this.data));
      this.data = cc11001100_hook("this.data", [], "assign");
    },
    EndRow: function () {
      var i = cc11001100_hook("i", b.mtr, "var-init");
      if (!this.global.tag && this.numbered) {
        this.autoTag();
      }
      if (this.global.tag && !this.global.notags) {
        this.row = cc11001100_hook("this.row", [this.getTag()].concat(this.row), "assign");
        i = cc11001100_hook("i", b.mlabeledtr, "assign");
      } else {
        this.clearTag();
      }
      if (this.numbered) {
        delete this.global.notag;
      }
      this.table.push(i.apply(b, this.row));
      this.row = cc11001100_hook("this.row", [], "assign");
    },
    EndTable: function () {
      this.SUPER(arguments).EndTable.call(this);
      this.global.notags = cc11001100_hook("this.global.notags", this.save.notags, "assign");
      this.global.notag = cc11001100_hook("this.global.notag", this.save.notag, "assign");
    }
  }), "assign");
  f.start.Augment({
    oldCheckItem: cc11001100_hook("oldCheckItem", f.start.prototype.checkItem, "object-key-init"),
    checkItem: function (k) {
      if (k.type === "stop") {
        var i = cc11001100_hook("i", this.mmlData(), "var-init"),
          j = cc11001100_hook("j", this.global, "var-init");
        if (g.display && !j.tag && !j.tagged && !j.isInner && (a.autoNumber === "all" || j.forcetag)) {
          this.autoTag();
        }
        if (j.tag) {
          var m = cc11001100_hook("m", [this.getTag(), b.mtd(i)], "var-init");
          var l = cc11001100_hook("l", {
            side: cc11001100_hook("side", h.config.TagSide, "object-key-init"),
            minlabelspacing: cc11001100_hook("minlabelspacing", h.config.TagIndent, "object-key-init"),
            displaystyle: cc11001100_hook("displaystyle", "inherit", "object-key-init")
          }, "var-init");
          i = cc11001100_hook("i", b.mtable(b.mlabeledtr.apply(b, m)).With(l), "assign");
        }
        return f.mml(i);
      }
      return this.oldCheckItem.call(this, k);
    }
  });
  h.prefilterHooks.Add(function (i) {
    g.display = cc11001100_hook("g.display", i.display, "assign");
    g.number = cc11001100_hook("g.number", g.startNumber, "assign");
    g.eqlabels = cc11001100_hook("g.eqlabels", {}, "assign");
    g.eqIDs = cc11001100_hook("g.eqIDs", {}, "assign");
    g.badref = cc11001100_hook("g.badref", false, "assign");
    if (g.refUpdate) {
      g.number = cc11001100_hook("g.number", i.script.MathJax.startNumber, "assign");
    }
  });
  h.postfilterHooks.Add(function (i) {
    i.script.MathJax.startNumber = cc11001100_hook("i.script.MathJax.startNumber", g.startNumber, "assign");
    g.startNumber = cc11001100_hook("g.startNumber", g.number, "assign");
    MathJax.Hub.Insert(g.IDs, g.eqIDs);
    MathJax.Hub.Insert(g.labels, g.eqlabels);
    if (g.badref && !i.math.texError) {
      g.refs.push(i.script);
    }
  }, 100);
  MathJax.Hub.Register.MessageHook("Begin Math Input", function () {
    g.refs = cc11001100_hook("g.refs", [], "assign");
    g.refUpdate = cc11001100_hook("g.refUpdate", false, "assign");
  });
  MathJax.Hub.Register.MessageHook("End Math Input", function (l) {
    if (g.refs.length) {
      g.refUpdate = cc11001100_hook("g.refUpdate", true, "assign");
      for (var k = cc11001100_hook("k", 0, "var-init"), j = cc11001100_hook("j", g.refs.length, "var-init"); k < j; k++) {
        g.refs[k].MathJax.state = cc11001100_hook("g.refs[k].MathJax.state", MathJax.ElementJax.STATE.UPDATE, "assign");
      }
      return MathJax.Hub.processInput({
        scripts: cc11001100_hook("scripts", g.refs, "object-key-init"),
        start: cc11001100_hook("start", new Date().getTime(), "object-key-init"),
        i: cc11001100_hook("i", 0, "object-key-init"),
        j: cc11001100_hook("j", 0, "object-key-init"),
        jax: {},
        jaxIDs: cc11001100_hook("jaxIDs", [], "object-key-init")
      });
    }
    return null;
  });
  h.resetEquationNumbers = cc11001100_hook("h.resetEquationNumbers", function (j, i) {
    g.startNumber = cc11001100_hook("g.startNumber", j || 0, "assign");
    if (!i) {
      g.labels = cc11001100_hook("g.labels", {}, "assign");
      g.IDs = cc11001100_hook("g.IDs", {}, "assign");
    }
  }, "assign");
  MathJax.Hub.Startup.signal.Post("TeX AMSmath Ready");
});
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSmath.js");
MathJax.Extension["TeX/AMSsymbols"] = cc11001100_hook("MathJax.Extension[\"TeX/AMSsymbols\"]", {
  version: cc11001100_hook("version", "2.7.2", "object-key-init")
}, "assign");
MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {
  var a = cc11001100_hook("a", MathJax.ElementJax.mml, "var-init"),
    b = cc11001100_hook("b", MathJax.InputJax.TeX.Definitions, "var-init");
  b.Add({
    mathchar0mi: {
      digamma: cc11001100_hook("digamma", "03DD", "object-key-init"),
      varkappa: cc11001100_hook("varkappa", "03F0", "object-key-init"),
      varGamma: cc11001100_hook("varGamma", ["0393", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.ITALIC, "object-key-init")
      }], "object-key-init"),
      varDelta: cc11001100_hook("varDelta", ["0394", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.ITALIC, "object-key-init")
      }], "object-key-init"),
      varTheta: cc11001100_hook("varTheta", ["0398", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.ITALIC, "object-key-init")
      }], "object-key-init"),
      varLambda: cc11001100_hook("varLambda", ["039B", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.ITALIC, "object-key-init")
      }], "object-key-init"),
      varXi: cc11001100_hook("varXi", ["039E", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.ITALIC, "object-key-init")
      }], "object-key-init"),
      varPi: cc11001100_hook("varPi", ["03A0", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.ITALIC, "object-key-init")
      }], "object-key-init"),
      varSigma: cc11001100_hook("varSigma", ["03A3", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.ITALIC, "object-key-init")
      }], "object-key-init"),
      varUpsilon: cc11001100_hook("varUpsilon", ["03A5", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.ITALIC, "object-key-init")
      }], "object-key-init"),
      varPhi: cc11001100_hook("varPhi", ["03A6", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.ITALIC, "object-key-init")
      }], "object-key-init"),
      varPsi: cc11001100_hook("varPsi", ["03A8", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.ITALIC, "object-key-init")
      }], "object-key-init"),
      varOmega: cc11001100_hook("varOmega", ["03A9", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.ITALIC, "object-key-init")
      }], "object-key-init"),
      beth: cc11001100_hook("beth", "2136", "object-key-init"),
      gimel: cc11001100_hook("gimel", "2137", "object-key-init"),
      daleth: cc11001100_hook("daleth", "2138", "object-key-init"),
      backprime: cc11001100_hook("backprime", ["2035", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      hslash: cc11001100_hook("hslash", "210F", "object-key-init"),
      varnothing: cc11001100_hook("varnothing", ["2205", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      blacktriangle: cc11001100_hook("blacktriangle", "25B4", "object-key-init"),
      triangledown: cc11001100_hook("triangledown", ["25BD", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      blacktriangledown: cc11001100_hook("blacktriangledown", "25BE", "object-key-init"),
      square: cc11001100_hook("square", "25FB", "object-key-init"),
      Box: cc11001100_hook("Box", "25FB", "object-key-init"),
      blacksquare: cc11001100_hook("blacksquare", "25FC", "object-key-init"),
      lozenge: cc11001100_hook("lozenge", "25CA", "object-key-init"),
      Diamond: cc11001100_hook("Diamond", "25CA", "object-key-init"),
      blacklozenge: cc11001100_hook("blacklozenge", "29EB", "object-key-init"),
      circledS: cc11001100_hook("circledS", ["24C8", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.NORMAL, "object-key-init")
      }], "object-key-init"),
      bigstar: cc11001100_hook("bigstar", "2605", "object-key-init"),
      sphericalangle: cc11001100_hook("sphericalangle", "2222", "object-key-init"),
      measuredangle: cc11001100_hook("measuredangle", "2221", "object-key-init"),
      nexists: cc11001100_hook("nexists", "2204", "object-key-init"),
      complement: cc11001100_hook("complement", "2201", "object-key-init"),
      mho: cc11001100_hook("mho", "2127", "object-key-init"),
      eth: cc11001100_hook("eth", ["00F0", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.NORMAL, "object-key-init")
      }], "object-key-init"),
      Finv: cc11001100_hook("Finv", "2132", "object-key-init"),
      diagup: cc11001100_hook("diagup", "2571", "object-key-init"),
      Game: cc11001100_hook("Game", "2141", "object-key-init"),
      diagdown: cc11001100_hook("diagdown", "2572", "object-key-init"),
      Bbbk: cc11001100_hook("Bbbk", ["006B", {
        mathvariant: cc11001100_hook("mathvariant", a.VARIANT.DOUBLESTRUCK, "object-key-init")
      }], "object-key-init"),
      yen: cc11001100_hook("yen", "00A5", "object-key-init"),
      circledR: cc11001100_hook("circledR", "00AE", "object-key-init"),
      checkmark: cc11001100_hook("checkmark", "2713", "object-key-init"),
      maltese: cc11001100_hook("maltese", "2720", "object-key-init")
    },
    mathchar0mo: {
      dotplus: cc11001100_hook("dotplus", "2214", "object-key-init"),
      ltimes: cc11001100_hook("ltimes", "22C9", "object-key-init"),
      smallsetminus: cc11001100_hook("smallsetminus", "2216", "object-key-init"),
      rtimes: cc11001100_hook("rtimes", "22CA", "object-key-init"),
      Cap: cc11001100_hook("Cap", "22D2", "object-key-init"),
      doublecap: cc11001100_hook("doublecap", "22D2", "object-key-init"),
      leftthreetimes: cc11001100_hook("leftthreetimes", "22CB", "object-key-init"),
      Cup: cc11001100_hook("Cup", "22D3", "object-key-init"),
      doublecup: cc11001100_hook("doublecup", "22D3", "object-key-init"),
      rightthreetimes: cc11001100_hook("rightthreetimes", "22CC", "object-key-init"),
      barwedge: cc11001100_hook("barwedge", "22BC", "object-key-init"),
      curlywedge: cc11001100_hook("curlywedge", "22CF", "object-key-init"),
      veebar: cc11001100_hook("veebar", "22BB", "object-key-init"),
      curlyvee: cc11001100_hook("curlyvee", "22CE", "object-key-init"),
      doublebarwedge: cc11001100_hook("doublebarwedge", "2A5E", "object-key-init"),
      boxminus: cc11001100_hook("boxminus", "229F", "object-key-init"),
      circleddash: cc11001100_hook("circleddash", "229D", "object-key-init"),
      boxtimes: cc11001100_hook("boxtimes", "22A0", "object-key-init"),
      circledast: cc11001100_hook("circledast", "229B", "object-key-init"),
      boxdot: cc11001100_hook("boxdot", "22A1", "object-key-init"),
      circledcirc: cc11001100_hook("circledcirc", "229A", "object-key-init"),
      boxplus: cc11001100_hook("boxplus", "229E", "object-key-init"),
      centerdot: cc11001100_hook("centerdot", ["22C5", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      divideontimes: cc11001100_hook("divideontimes", "22C7", "object-key-init"),
      intercal: cc11001100_hook("intercal", "22BA", "object-key-init"),
      leqq: cc11001100_hook("leqq", "2266", "object-key-init"),
      geqq: cc11001100_hook("geqq", "2267", "object-key-init"),
      leqslant: cc11001100_hook("leqslant", "2A7D", "object-key-init"),
      geqslant: cc11001100_hook("geqslant", "2A7E", "object-key-init"),
      eqslantless: cc11001100_hook("eqslantless", "2A95", "object-key-init"),
      eqslantgtr: cc11001100_hook("eqslantgtr", "2A96", "object-key-init"),
      lesssim: cc11001100_hook("lesssim", "2272", "object-key-init"),
      gtrsim: cc11001100_hook("gtrsim", "2273", "object-key-init"),
      lessapprox: cc11001100_hook("lessapprox", "2A85", "object-key-init"),
      gtrapprox: cc11001100_hook("gtrapprox", "2A86", "object-key-init"),
      approxeq: cc11001100_hook("approxeq", "224A", "object-key-init"),
      lessdot: cc11001100_hook("lessdot", "22D6", "object-key-init"),
      gtrdot: cc11001100_hook("gtrdot", "22D7", "object-key-init"),
      lll: cc11001100_hook("lll", "22D8", "object-key-init"),
      llless: cc11001100_hook("llless", "22D8", "object-key-init"),
      ggg: cc11001100_hook("ggg", "22D9", "object-key-init"),
      gggtr: cc11001100_hook("gggtr", "22D9", "object-key-init"),
      lessgtr: cc11001100_hook("lessgtr", "2276", "object-key-init"),
      gtrless: cc11001100_hook("gtrless", "2277", "object-key-init"),
      lesseqgtr: cc11001100_hook("lesseqgtr", "22DA", "object-key-init"),
      gtreqless: cc11001100_hook("gtreqless", "22DB", "object-key-init"),
      lesseqqgtr: cc11001100_hook("lesseqqgtr", "2A8B", "object-key-init"),
      gtreqqless: cc11001100_hook("gtreqqless", "2A8C", "object-key-init"),
      doteqdot: cc11001100_hook("doteqdot", "2251", "object-key-init"),
      Doteq: cc11001100_hook("Doteq", "2251", "object-key-init"),
      eqcirc: cc11001100_hook("eqcirc", "2256", "object-key-init"),
      risingdotseq: cc11001100_hook("risingdotseq", "2253", "object-key-init"),
      circeq: cc11001100_hook("circeq", "2257", "object-key-init"),
      fallingdotseq: cc11001100_hook("fallingdotseq", "2252", "object-key-init"),
      triangleq: cc11001100_hook("triangleq", "225C", "object-key-init"),
      backsim: cc11001100_hook("backsim", "223D", "object-key-init"),
      thicksim: cc11001100_hook("thicksim", ["223C", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      backsimeq: cc11001100_hook("backsimeq", "22CD", "object-key-init"),
      thickapprox: cc11001100_hook("thickapprox", ["2248", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      subseteqq: cc11001100_hook("subseteqq", "2AC5", "object-key-init"),
      supseteqq: cc11001100_hook("supseteqq", "2AC6", "object-key-init"),
      Subset: cc11001100_hook("Subset", "22D0", "object-key-init"),
      Supset: cc11001100_hook("Supset", "22D1", "object-key-init"),
      sqsubset: cc11001100_hook("sqsubset", "228F", "object-key-init"),
      sqsupset: cc11001100_hook("sqsupset", "2290", "object-key-init"),
      preccurlyeq: cc11001100_hook("preccurlyeq", "227C", "object-key-init"),
      succcurlyeq: cc11001100_hook("succcurlyeq", "227D", "object-key-init"),
      curlyeqprec: cc11001100_hook("curlyeqprec", "22DE", "object-key-init"),
      curlyeqsucc: cc11001100_hook("curlyeqsucc", "22DF", "object-key-init"),
      precsim: cc11001100_hook("precsim", "227E", "object-key-init"),
      succsim: cc11001100_hook("succsim", "227F", "object-key-init"),
      precapprox: cc11001100_hook("precapprox", "2AB7", "object-key-init"),
      succapprox: cc11001100_hook("succapprox", "2AB8", "object-key-init"),
      vartriangleleft: cc11001100_hook("vartriangleleft", "22B2", "object-key-init"),
      lhd: cc11001100_hook("lhd", "22B2", "object-key-init"),
      vartriangleright: cc11001100_hook("vartriangleright", "22B3", "object-key-init"),
      rhd: cc11001100_hook("rhd", "22B3", "object-key-init"),
      trianglelefteq: cc11001100_hook("trianglelefteq", "22B4", "object-key-init"),
      unlhd: cc11001100_hook("unlhd", "22B4", "object-key-init"),
      trianglerighteq: cc11001100_hook("trianglerighteq", "22B5", "object-key-init"),
      unrhd: cc11001100_hook("unrhd", "22B5", "object-key-init"),
      vDash: cc11001100_hook("vDash", "22A8", "object-key-init"),
      Vdash: cc11001100_hook("Vdash", "22A9", "object-key-init"),
      Vvdash: cc11001100_hook("Vvdash", "22AA", "object-key-init"),
      smallsmile: cc11001100_hook("smallsmile", ["2323", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      shortmid: cc11001100_hook("shortmid", ["2223", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      smallfrown: cc11001100_hook("smallfrown", ["2322", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      shortparallel: cc11001100_hook("shortparallel", ["2225", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      bumpeq: cc11001100_hook("bumpeq", "224F", "object-key-init"),
      between: cc11001100_hook("between", "226C", "object-key-init"),
      Bumpeq: cc11001100_hook("Bumpeq", "224E", "object-key-init"),
      pitchfork: cc11001100_hook("pitchfork", "22D4", "object-key-init"),
      varpropto: cc11001100_hook("varpropto", "221D", "object-key-init"),
      backepsilon: cc11001100_hook("backepsilon", "220D", "object-key-init"),
      blacktriangleleft: cc11001100_hook("blacktriangleleft", "25C2", "object-key-init"),
      blacktriangleright: cc11001100_hook("blacktriangleright", "25B8", "object-key-init"),
      therefore: cc11001100_hook("therefore", "2234", "object-key-init"),
      because: cc11001100_hook("because", "2235", "object-key-init"),
      eqsim: cc11001100_hook("eqsim", "2242", "object-key-init"),
      vartriangle: cc11001100_hook("vartriangle", ["25B3", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      Join: cc11001100_hook("Join", "22C8", "object-key-init"),
      nless: cc11001100_hook("nless", "226E", "object-key-init"),
      ngtr: cc11001100_hook("ngtr", "226F", "object-key-init"),
      nleq: cc11001100_hook("nleq", "2270", "object-key-init"),
      ngeq: cc11001100_hook("ngeq", "2271", "object-key-init"),
      nleqslant: cc11001100_hook("nleqslant", ["2A87", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      ngeqslant: cc11001100_hook("ngeqslant", ["2A88", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      nleqq: cc11001100_hook("nleqq", ["2270", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      ngeqq: cc11001100_hook("ngeqq", ["2271", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      lneq: cc11001100_hook("lneq", "2A87", "object-key-init"),
      gneq: cc11001100_hook("gneq", "2A88", "object-key-init"),
      lneqq: cc11001100_hook("lneqq", "2268", "object-key-init"),
      gneqq: cc11001100_hook("gneqq", "2269", "object-key-init"),
      lvertneqq: cc11001100_hook("lvertneqq", ["2268", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      gvertneqq: cc11001100_hook("gvertneqq", ["2269", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      lnsim: cc11001100_hook("lnsim", "22E6", "object-key-init"),
      gnsim: cc11001100_hook("gnsim", "22E7", "object-key-init"),
      lnapprox: cc11001100_hook("lnapprox", "2A89", "object-key-init"),
      gnapprox: cc11001100_hook("gnapprox", "2A8A", "object-key-init"),
      nprec: cc11001100_hook("nprec", "2280", "object-key-init"),
      nsucc: cc11001100_hook("nsucc", "2281", "object-key-init"),
      npreceq: cc11001100_hook("npreceq", ["22E0", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      nsucceq: cc11001100_hook("nsucceq", ["22E1", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      precneqq: cc11001100_hook("precneqq", "2AB5", "object-key-init"),
      succneqq: cc11001100_hook("succneqq", "2AB6", "object-key-init"),
      precnsim: cc11001100_hook("precnsim", "22E8", "object-key-init"),
      succnsim: cc11001100_hook("succnsim", "22E9", "object-key-init"),
      precnapprox: cc11001100_hook("precnapprox", "2AB9", "object-key-init"),
      succnapprox: cc11001100_hook("succnapprox", "2ABA", "object-key-init"),
      nsim: cc11001100_hook("nsim", "2241", "object-key-init"),
      ncong: cc11001100_hook("ncong", "2246", "object-key-init"),
      nshortmid: cc11001100_hook("nshortmid", ["2224", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      nshortparallel: cc11001100_hook("nshortparallel", ["2226", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      nmid: cc11001100_hook("nmid", "2224", "object-key-init"),
      nparallel: cc11001100_hook("nparallel", "2226", "object-key-init"),
      nvdash: cc11001100_hook("nvdash", "22AC", "object-key-init"),
      nvDash: cc11001100_hook("nvDash", "22AD", "object-key-init"),
      nVdash: cc11001100_hook("nVdash", "22AE", "object-key-init"),
      nVDash: cc11001100_hook("nVDash", "22AF", "object-key-init"),
      ntriangleleft: cc11001100_hook("ntriangleleft", "22EA", "object-key-init"),
      ntriangleright: cc11001100_hook("ntriangleright", "22EB", "object-key-init"),
      ntrianglelefteq: cc11001100_hook("ntrianglelefteq", "22EC", "object-key-init"),
      ntrianglerighteq: cc11001100_hook("ntrianglerighteq", "22ED", "object-key-init"),
      nsubseteq: cc11001100_hook("nsubseteq", "2288", "object-key-init"),
      nsupseteq: cc11001100_hook("nsupseteq", "2289", "object-key-init"),
      nsubseteqq: cc11001100_hook("nsubseteqq", ["2288", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      nsupseteqq: cc11001100_hook("nsupseteqq", ["2289", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      subsetneq: cc11001100_hook("subsetneq", "228A", "object-key-init"),
      supsetneq: cc11001100_hook("supsetneq", "228B", "object-key-init"),
      varsubsetneq: cc11001100_hook("varsubsetneq", ["228A", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      varsupsetneq: cc11001100_hook("varsupsetneq", ["228B", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      subsetneqq: cc11001100_hook("subsetneqq", "2ACB", "object-key-init"),
      supsetneqq: cc11001100_hook("supsetneqq", "2ACC", "object-key-init"),
      varsubsetneqq: cc11001100_hook("varsubsetneqq", ["2ACB", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      varsupsetneqq: cc11001100_hook("varsupsetneqq", ["2ACC", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      leftleftarrows: cc11001100_hook("leftleftarrows", "21C7", "object-key-init"),
      rightrightarrows: cc11001100_hook("rightrightarrows", "21C9", "object-key-init"),
      leftrightarrows: cc11001100_hook("leftrightarrows", "21C6", "object-key-init"),
      rightleftarrows: cc11001100_hook("rightleftarrows", "21C4", "object-key-init"),
      Lleftarrow: cc11001100_hook("Lleftarrow", "21DA", "object-key-init"),
      Rrightarrow: cc11001100_hook("Rrightarrow", "21DB", "object-key-init"),
      twoheadleftarrow: cc11001100_hook("twoheadleftarrow", "219E", "object-key-init"),
      twoheadrightarrow: cc11001100_hook("twoheadrightarrow", "21A0", "object-key-init"),
      leftarrowtail: cc11001100_hook("leftarrowtail", "21A2", "object-key-init"),
      rightarrowtail: cc11001100_hook("rightarrowtail", "21A3", "object-key-init"),
      looparrowleft: cc11001100_hook("looparrowleft", "21AB", "object-key-init"),
      looparrowright: cc11001100_hook("looparrowright", "21AC", "object-key-init"),
      leftrightharpoons: cc11001100_hook("leftrightharpoons", "21CB", "object-key-init"),
      rightleftharpoons: cc11001100_hook("rightleftharpoons", ["21CC", {
        variantForm: cc11001100_hook("variantForm", true, "object-key-init")
      }], "object-key-init"),
      curvearrowleft: cc11001100_hook("curvearrowleft", "21B6", "object-key-init"),
      curvearrowright: cc11001100_hook("curvearrowright", "21B7", "object-key-init"),
      circlearrowleft: cc11001100_hook("circlearrowleft", "21BA", "object-key-init"),
      circlearrowright: cc11001100_hook("circlearrowright", "21BB", "object-key-init"),
      Lsh: cc11001100_hook("Lsh", "21B0", "object-key-init"),
      Rsh: cc11001100_hook("Rsh", "21B1", "object-key-init"),
      upuparrows: cc11001100_hook("upuparrows", "21C8", "object-key-init"),
      downdownarrows: cc11001100_hook("downdownarrows", "21CA", "object-key-init"),
      upharpoonleft: cc11001100_hook("upharpoonleft", "21BF", "object-key-init"),
      upharpoonright: cc11001100_hook("upharpoonright", "21BE", "object-key-init"),
      downharpoonleft: cc11001100_hook("downharpoonleft", "21C3", "object-key-init"),
      restriction: cc11001100_hook("restriction", "21BE", "object-key-init"),
      multimap: cc11001100_hook("multimap", "22B8", "object-key-init"),
      downharpoonright: cc11001100_hook("downharpoonright", "21C2", "object-key-init"),
      leftrightsquigarrow: cc11001100_hook("leftrightsquigarrow", "21AD", "object-key-init"),
      rightsquigarrow: cc11001100_hook("rightsquigarrow", "21DD", "object-key-init"),
      leadsto: cc11001100_hook("leadsto", "21DD", "object-key-init"),
      dashrightarrow: cc11001100_hook("dashrightarrow", "21E2", "object-key-init"),
      dashleftarrow: cc11001100_hook("dashleftarrow", "21E0", "object-key-init"),
      nleftarrow: cc11001100_hook("nleftarrow", "219A", "object-key-init"),
      nrightarrow: cc11001100_hook("nrightarrow", "219B", "object-key-init"),
      nLeftarrow: cc11001100_hook("nLeftarrow", "21CD", "object-key-init"),
      nRightarrow: cc11001100_hook("nRightarrow", "21CF", "object-key-init"),
      nleftrightarrow: cc11001100_hook("nleftrightarrow", "21AE", "object-key-init"),
      nLeftrightarrow: cc11001100_hook("nLeftrightarrow", "21CE", "object-key-init")
    },
    delimiter: {
      "\\ulcorner": cc11001100_hook("\\ulcorner", "231C", "object-key-init"),
      "\\urcorner": cc11001100_hook("\\urcorner", "231D", "object-key-init"),
      "\\llcorner": cc11001100_hook("\\llcorner", "231E", "object-key-init"),
      "\\lrcorner": cc11001100_hook("\\lrcorner", "231F", "object-key-init")
    },
    macros: {
      implies: cc11001100_hook("implies", ["Macro", "\\;\\Longrightarrow\\;"], "object-key-init"),
      impliedby: cc11001100_hook("impliedby", ["Macro", "\\;\\Longleftarrow\\;"], "object-key-init")
    }
  }, null, true);
  var c = cc11001100_hook("c", a.mo.OPTYPES.REL, "var-init");
  MathJax.Hub.Insert(a.mo.prototype, {
    OPTABLE: {
      infix: {
        "\u2322": cc11001100_hook("\u2322", c, "object-key-init"),
        "\u2323": cc11001100_hook("\u2323", c, "object-key-init"),
        "\u25B3": cc11001100_hook("\u25B3", c, "object-key-init"),
        "\uE006": cc11001100_hook("\uE006", c, "object-key-init"),
        "\uE007": cc11001100_hook("\uE007", c, "object-key-init"),
        "\uE00C": cc11001100_hook("\uE00C", c, "object-key-init"),
        "\uE00D": cc11001100_hook("\uE00D", c, "object-key-init"),
        "\uE00E": cc11001100_hook("\uE00E", c, "object-key-init"),
        "\uE00F": cc11001100_hook("\uE00F", c, "object-key-init"),
        "\uE010": cc11001100_hook("\uE010", c, "object-key-init"),
        "\uE011": cc11001100_hook("\uE011", c, "object-key-init"),
        "\uE016": cc11001100_hook("\uE016", c, "object-key-init"),
        "\uE017": cc11001100_hook("\uE017", c, "object-key-init"),
        "\uE018": cc11001100_hook("\uE018", c, "object-key-init"),
        "\uE019": cc11001100_hook("\uE019", c, "object-key-init"),
        "\uE01A": cc11001100_hook("\uE01A", c, "object-key-init"),
        "\uE01B": cc11001100_hook("\uE01B", c, "object-key-init"),
        "\uE04B": cc11001100_hook("\uE04B", c, "object-key-init"),
        "\uE04F": cc11001100_hook("\uE04F", c, "object-key-init")
      }
    }
  });
  MathJax.Hub.Startup.signal.Post("TeX AMSsymbols Ready");
});
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSsymbols.js");
(function (c, d) {
  var a;
  var b = function (e) {
    return MathJax.Localization._.apply(MathJax.Localization, [["MathML", e]].concat([].slice.call(arguments, 1)));
  };
  c.Parse = cc11001100_hook("c.Parse", MathJax.Object.Subclass({
    Init: function (f, e) {
      this.Parse(f, e);
    },
    Parse: function (h, e) {
      var j;
      if (typeof h !== "string") {
        j = cc11001100_hook("j", h.parentNode, "assign");
      } else {
        j = cc11001100_hook("j", c.ParseXML(this.preProcessMath.call(this, h)), "assign");
        if (j == null) {
          c.Error(["ErrorParsingMathML", "Error parsing MathML"]);
        }
      }
      var g = cc11001100_hook("g", j.getElementsByTagName("parsererror")[0], "var-init");
      if (g) {
        c.Error(["ParsingError", "Error parsing MathML: %1", g.textContent.replace(/This page.*?errors:|XML Parsing Error: |Below is a rendering of the page.*/g, "")]);
      }
      if (j.childNodes.length !== 1) {
        c.Error(["MathMLSingleElement", "MathML must be formed by a single element"]);
      }
      if (j.firstChild.nodeName.toLowerCase() === "html") {
        var f = cc11001100_hook("f", j.getElementsByTagName("h1")[0], "var-init");
        if (f && f.textContent === "XML parsing error" && f.nextSibling) {
          c.Error(["ParsingError", "Error parsing MathML: %1", String(f.nextSibling.nodeValue).replace(/fatal parsing error: /, "")]);
        }
      }
      if (j.firstChild.nodeName.toLowerCase().replace(/^[a-z]+:/, "") !== "math") {
        c.Error(["MathMLRootElement", "MathML must be formed by a <math> element, not %1", "<" + j.firstChild.nodeName + ">"]);
      }
      var i = cc11001100_hook("i", {
        math: cc11001100_hook("math", j.firstChild, "object-key-init"),
        script: cc11001100_hook("script", e, "object-key-init")
      }, "var-init");
      c.DOMfilterHooks.Execute(i);
      this.mml = cc11001100_hook("this.mml", this.MakeMML(i.math), "assign");
    },
    MakeMML: function (h) {
      var i = cc11001100_hook("i", String(h.getAttribute("class") || ""), "var-init");
      var f,
        g = cc11001100_hook("g", h.nodeName.toLowerCase().replace(/^[a-z]+:/, ""), "var-init");
      var e = cc11001100_hook("e", i.match(/(^| )MJX-TeXAtom-([^ ]*)/), "var-init");
      if (e) {
        f = cc11001100_hook("f", this.TeXAtom(e[2], e[2] === "OP" && !i.match(/MJX-fixedlimits/)), "assign");
      } else {
        if (!(a[g] && a[g].isa && a[g].isa(a.mbase))) {
          MathJax.Hub.signal.Post(["MathML Jax - unknown node type", g]);
          return a.Error(b("UnknownNodeType", "Unknown node type: %1", g));
        } else {
          f = cc11001100_hook("f", a[g](), "assign");
        }
      }
      this.AddAttributes(f, h);
      this.CheckClass(f, f["class"]);
      this.AddChildren(f, h);
      if (c.config.useMathMLspacing) {
        f.useMMLspacing = cc11001100_hook("f.useMMLspacing", 8, "assign");
      }
      return f;
    },
    TeXAtom: function (g, f) {
      var e = cc11001100_hook("e", a.TeXAtom().With({
        texClass: cc11001100_hook("texClass", a.TEXCLASS[g], "object-key-init")
      }), "var-init");
      if (f) {
        e.movesupsub = cc11001100_hook("e.movesupsub", e.movablelimits = cc11001100_hook("e.movablelimits", true, "assign"), "assign");
      }
      return e;
    },
    CheckClass: function (f, h) {
      h = cc11001100_hook("h", (h || "").split(/ /), "assign");
      var j = cc11001100_hook("j", [], "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"), e = cc11001100_hook("e", h.length, "var-init"); g < e; g++) {
        if (h[g].substr(0, 4) === "MJX-") {
          if (h[g] === "MJX-arrow") {
            if (!f.notation.match("/" + a.NOTATION.UPDIAGONALARROW + "/")) {
              f.notation += cc11001100_hook("f.notation", " " + a.NOTATION.UPDIAGONALARROW, "assign");
            }
          } else {
            if (h[g] === "MJX-variant") {
              f.variantForm = cc11001100_hook("f.variantForm", true, "assign");
              if (!MathJax.Extension["TeX/AMSsymbols"]) {
                MathJax.Hub.RestartAfter(MathJax.Ajax.Require("[MathJax]/extensions/TeX/AMSsymbols.js"));
              }
            } else {
              if (h[g].substr(0, 11) !== "MJX-TeXAtom") {
                f.mathvariant = cc11001100_hook("f.mathvariant", h[g].substr(3), "assign");
                if (f.mathvariant === "-tex-caligraphic-bold" || f.mathvariant === "-tex-oldstyle-bold") {
                  if (!MathJax.Extension["TeX/boldsymbol"]) {
                    MathJax.Hub.RestartAfter(MathJax.Ajax.Require("[MathJax]/extensions/TeX/boldsymbol.js"));
                  }
                }
              }
            }
          }
        } else {
          j.push(h[g]);
        }
      }
      if (j.length) {
        f["class"] = cc11001100_hook("f[\"class\"]", j.join(" "), "assign");
      } else {
        delete f["class"];
      }
    },
    AddAttributes: function (g, j) {
      g.attr = cc11001100_hook("g.attr", {}, "assign");
      g.attrNames = cc11001100_hook("g.attrNames", [], "assign");
      for (var h = cc11001100_hook("h", 0, "var-init"), e = cc11001100_hook("e", j.attributes.length, "var-init"); h < e; h++) {
        var f = cc11001100_hook("f", j.attributes[h].name, "var-init");
        if (f == "xlink:href") {
          f = cc11001100_hook("f", "href", "assign");
        }
        if (f.match(/:/)) {
          continue;
        }
        if (f.match(/^_moz-math-((column|row)(align|line)|font-style)$/)) {
          continue;
        }
        var k = cc11001100_hook("k", j.attributes[h].value, "var-init");
        k = cc11001100_hook("k", this.filterAttribute(f, k), "assign");
        var l = cc11001100_hook("l", g.type === "mstyle" ? a.math.prototype.defaults : g.defaults, "var-init");
        if (k != null) {
          var n = cc11001100_hook("n", k.toLowerCase(), "var-init");
          if (n === "true" || n === "false") {
            if (typeof l[f] === "boolean" || l[f] === a.INHERIT || g.type === "math" || g.type === "mstyle" || l[f] === a.AUTO && (g.defaultDef == null || typeof g.defaultDef[f] === "boolean")) {
              k = cc11001100_hook("k", n === "true", "assign");
            }
          }
          if (l[f] != null || a.copyAttributes[f]) {
            g[f] = cc11001100_hook("g[f]", k, "assign");
          } else {
            g.attr[f] = cc11001100_hook("g.attr[f]", k, "assign");
          }
          g.attrNames.push(f);
        }
      }
    },
    filterAttribute: function (e, f) {
      return f;
    },
    AddChildren: function (e, g) {
      for (var k = cc11001100_hook("k", 0, "var-init"), j = cc11001100_hook("j", g.childNodes.length, "var-init"); k < j; k++) {
        var f = cc11001100_hook("f", g.childNodes[k], "var-init");
        if (f.nodeName === "#comment") {
          continue;
        }
        if (f.nodeName === "#text") {
          if ((e.isToken || e.isChars) && !e.mmlSelfClosing) {
            var o = cc11001100_hook("o", f.nodeValue, "var-init");
            if (e.isToken) {
              o = cc11001100_hook("o", o.replace(/&([a-z][a-z0-9]*);/ig, this.replaceEntity), "assign");
              o = cc11001100_hook("o", this.trimSpace(o), "assign");
            }
            e.Append(a.chars(o));
          } else {
            if (f.nodeValue.match(/\S/)) {
              c.Error(["UnexpectedTextNode", "Unexpected text node: %1", "'" + f.nodeValue + "'"]);
            }
          }
        } else {
          if (e.type === "annotation-xml") {
            e.Append(a.xml(f));
          } else {
            var h = cc11001100_hook("h", this.MakeMML(f), "var-init");
            e.Append(h);
            if (h.mmlSelfClosing && h.data.length) {
              e.Append.apply(e, h.data);
              h.data = cc11001100_hook("h.data", [], "assign");
            }
          }
        }
      }
      if (e.type === "mrow" && e.data.length >= 2) {
        var l = cc11001100_hook("l", e.data[0], "var-init"),
          n = cc11001100_hook("n", e.data[e.data.length - 1], "var-init");
        if (l.type === "mo" && l.Get("fence") && n.type === "mo" && n.Get("fence")) {
          if (l.data[0]) {
            e.open = cc11001100_hook("e.open", l.data.join(""), "assign");
          }
          if (n.data[0]) {
            e.close = cc11001100_hook("e.close", n.data.join(""), "assign");
          }
        }
      }
    },
    preProcessMath: function (f) {
      if (f.match(/^<[a-z]+:/i) && !f.match(/^<[^<>]* xmlns:/)) {
        f = cc11001100_hook("f", f.replace(/^<([a-z]+)(:math)/i, '<$1$2 xmlns:$1="http://www.w3.org/1998/Math/MathML"'), "assign");
      }
      var e = cc11001100_hook("e", f.match(/^(<math( ('.*?'|".*?"|[^>])+)>)/i), "var-init");
      if (e && e[2].match(/ (?!xmlns=)[a-z]+=\"http:/i)) {
        f = cc11001100_hook("f", e[1].replace(/ (?!xmlns=)([a-z]+=(['"])http:.*?\2)/ig, " xmlns:$1 $1") + f.substr(e[0].length), "assign");
      }
      if (f.match(/^<math/i) && !f.match(/^<[^<>]* xmlns=/)) {
        f = cc11001100_hook("f", f.replace(/^<(math)/i, '<math xmlns="http://www.w3.org/1998/Math/MathML"'), "assign");
      }
      f = cc11001100_hook("f", f.replace(/^\s*(?:\/\/)?<!(--)?\[CDATA\[((.|\n)*)(\/\/)?\]\]\1>\s*$/, "$2"), "assign");
      return f.replace(/&([a-z][a-z0-9]*);/ig, this.replaceEntity);
    },
    trimSpace: function (e) {
      return e.replace(/[\t\n\r]/g, " ").replace(/^ +/, "").replace(/ +$/, "").replace(/  +/g, " ");
    },
    replaceEntity: function (g, f) {
      if (f.match(/^(lt|amp|quot)$/)) {
        return g;
      }
      if (c.Parse.Entity[f]) {
        return c.Parse.Entity[f];
      }
      var h = cc11001100_hook("h", f.charAt(0).toLowerCase(), "var-init");
      var e = cc11001100_hook("e", f.match(/^[a-zA-Z](fr|scr|opf)$/), "var-init");
      if (e) {
        h = cc11001100_hook("h", e[1], "assign");
      }
      if (!c.Parse.loaded[h]) {
        c.Parse.loaded[h] = cc11001100_hook("c.Parse.loaded[h]", true, "assign");
        MathJax.Hub.RestartAfter(MathJax.Ajax.Require(c.entityDir + "/" + h + ".js"));
      }
      return g;
    }
  }, {
    loaded: cc11001100_hook("loaded", [], "object-key-init")
  }), "assign");
  c.Augment({
    sourceMenuTitle: cc11001100_hook("sourceMenuTitle", ["OriginalMathML", "Original MathML"], "object-key-init"),
    prefilterHooks: cc11001100_hook("prefilterHooks", MathJax.Callback.Hooks(true), "object-key-init"),
    DOMfilterHooks: cc11001100_hook("DOMfilterHooks", MathJax.Callback.Hooks(true), "object-key-init"),
    postfilterHooks: cc11001100_hook("postfilterHooks", MathJax.Callback.Hooks(true), "object-key-init"),
    Translate: function (e) {
      if (!this.ParseXML) {
        this.ParseXML = cc11001100_hook("this.ParseXML", this.createParser(), "assign");
      }
      var f,
        h,
        i = cc11001100_hook("i", {
          script: cc11001100_hook("script", e, "object-key-init")
        }, "var-init");
      if (e.firstChild && e.firstChild.nodeName.toLowerCase().replace(/^[a-z]+:/, "") === "math") {
        i.math = cc11001100_hook("i.math", e.firstChild, "assign");
      } else {
        h = cc11001100_hook("h", MathJax.HTML.getScript(e), "assign");
        if (d.isMSIE) {
          h = cc11001100_hook("h", h.replace(/(&nbsp;)+$/, ""), "assign");
        }
        i.math = cc11001100_hook("i.math", h, "assign");
      }
      var j = cc11001100_hook("j", this.prefilterHooks.Execute(i), "var-init");
      if (j) {
        return j;
      }
      h = cc11001100_hook("h", i.math, "assign");
      try {
        f = cc11001100_hook("f", c.Parse(h, e).mml, "assign");
      } catch (g) {
        if (!g.mathmlError) {
          throw g;
        }
        f = cc11001100_hook("f", this.formatError(g, h, e), "assign");
      }
      i.math = cc11001100_hook("i.math", a(f), "assign");
      return this.postfilterHooks.Execute(i) || i.math;
    },
    prefilterMath: function (f, e) {
      return f;
    },
    prefilterMathML: function (f, e) {
      return f;
    },
    formatError: function (h, g, e) {
      var f = cc11001100_hook("f", h.message.replace(/\n.*/, ""), "var-init");
      MathJax.Hub.signal.Post(["MathML Jax - parse error", f, g, e]);
      return a.Error(f);
    },
    Error: function (e) {
      if (MathJax.Object.isArray(e)) {
        e = cc11001100_hook("e", b.apply(b, e), "assign");
      }
      throw MathJax.Hub.Insert(Error(e), {
        mathmlError: cc11001100_hook("mathmlError", true, "object-key-init")
      });
    },
    parseDOM: function (e) {
      return this.parser.parseFromString(e, "text/xml");
    },
    parseMS: function (e) {
      return this.parser.loadXML(e) ? this.parser : null;
    },
    parseDIV: function (e) {
      this.div.innerHTML = cc11001100_hook("this.div.innerHTML", "<div>" + e.replace(/<([a-z]+)([^>]*)\/>/g, "<$1$2></$1>") + "</div>", "assign");
      var f = cc11001100_hook("f", this.div.firstChild, "var-init");
      this.div.innerHTML = cc11001100_hook("this.div.innerHTML", "", "assign");
      return f;
    },
    parseError: function (e) {
      return null;
    },
    createMSParser: function () {
      var j = cc11001100_hook("j", null, "var-init");
      var f = cc11001100_hook("f", ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.5.0", "MSXML2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML2.DOMDocument.2.0", "Microsoft.XMLDOM"], "var-init");
      for (var g = cc11001100_hook("g", 0, "var-init"), e = cc11001100_hook("e", f.length, "var-init"); g < e && !j; g++) {
        try {
          j = cc11001100_hook("j", new ActiveXObject(f[g]), "assign");
        } catch (h) {}
      }
      return j;
    },
    createParser: function () {
      if (window.DOMParser) {
        this.parser = cc11001100_hook("this.parser", new DOMParser(), "assign");
        return this.parseDOM;
      } else {
        if (window.ActiveXObject) {
          this.parser = cc11001100_hook("this.parser", this.createMSParser(), "assign");
          if (!this.parser) {
            MathJax.Localization.Try(this.parserCreationError);
            return this.parseError;
          }
          this.parser.async = cc11001100_hook("this.parser.async", false, "assign");
          return this.parseMS;
        }
      }
      this.div = cc11001100_hook("this.div", MathJax.Hub.Insert(document.createElement("div"), {
        style: {
          visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
          overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
          height: cc11001100_hook("height", "1px", "object-key-init"),
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init")
        }
      }), "assign");
      if (!document.body.firstChild) {
        document.body.appendChild(this.div);
      } else {
        document.body.insertBefore(this.div, document.body.firstChild);
      }
      return this.parseDIV;
    },
    parserCreationError: function () {
      alert(b("CantCreateXMLParser", "MathJax can't create an XML parser for MathML.  Check that\nthe 'Script ActiveX controls marked safe for scripting' security\nsetting is enabled (use the Internet Options item in the Tools\nmenu, and select the Security panel, then press the Custom Level\nbutton to check this).\n\nMathML equations will not be able to be processed by MathJax."));
    },
    Startup: function () {
      a = cc11001100_hook("a", MathJax.ElementJax.mml, "assign");
      a.mspace.Augment({
        mmlSelfClosing: cc11001100_hook("mmlSelfClosing", true, "object-key-init")
      });
      a.none.Augment({
        mmlSelfClosing: cc11001100_hook("mmlSelfClosing", true, "object-key-init")
      });
      a.mprescripts.Augment({
        mmlSelfClosing: cc11001100_hook("mmlSelfClosing", true, "object-key-init")
      });
      a.maligngroup.Augment({
        mmlSelfClosing: cc11001100_hook("mmlSelfClosing", true, "object-key-init")
      });
      a.malignmark.Augment({
        mmlSelfClosing: cc11001100_hook("mmlSelfClosing", true, "object-key-init")
      });
    }
  });
  c.prefilterHooks.Add(function (e) {
    e.math = cc11001100_hook("e.math", typeof e.math === "string" ? c.prefilterMath(e.math, e.script) : c.prefilterMathML(e.math, e.script), "assign");
  });
  c.Parse.Entity = cc11001100_hook("c.Parse.Entity", {
    ApplyFunction: cc11001100_hook("ApplyFunction", "\u2061", "object-key-init"),
    Backslash: cc11001100_hook("Backslash", "\u2216", "object-key-init"),
    Because: cc11001100_hook("Because", "\u2235", "object-key-init"),
    Breve: cc11001100_hook("Breve", "\u02D8", "object-key-init"),
    Cap: cc11001100_hook("Cap", "\u22D2", "object-key-init"),
    CenterDot: cc11001100_hook("CenterDot", "\u00B7", "object-key-init"),
    CircleDot: cc11001100_hook("CircleDot", "\u2299", "object-key-init"),
    CircleMinus: cc11001100_hook("CircleMinus", "\u2296", "object-key-init"),
    CirclePlus: cc11001100_hook("CirclePlus", "\u2295", "object-key-init"),
    CircleTimes: cc11001100_hook("CircleTimes", "\u2297", "object-key-init"),
    Congruent: cc11001100_hook("Congruent", "\u2261", "object-key-init"),
    ContourIntegral: cc11001100_hook("ContourIntegral", "\u222E", "object-key-init"),
    Coproduct: cc11001100_hook("Coproduct", "\u2210", "object-key-init"),
    Cross: cc11001100_hook("Cross", "\u2A2F", "object-key-init"),
    Cup: cc11001100_hook("Cup", "\u22D3", "object-key-init"),
    CupCap: cc11001100_hook("CupCap", "\u224D", "object-key-init"),
    Dagger: cc11001100_hook("Dagger", "\u2021", "object-key-init"),
    Del: cc11001100_hook("Del", "\u2207", "object-key-init"),
    Delta: cc11001100_hook("Delta", "\u0394", "object-key-init"),
    Diamond: cc11001100_hook("Diamond", "\u22C4", "object-key-init"),
    DifferentialD: cc11001100_hook("DifferentialD", "\u2146", "object-key-init"),
    DotEqual: cc11001100_hook("DotEqual", "\u2250", "object-key-init"),
    DoubleDot: cc11001100_hook("DoubleDot", "\u00A8", "object-key-init"),
    DoubleRightTee: cc11001100_hook("DoubleRightTee", "\u22A8", "object-key-init"),
    DoubleVerticalBar: cc11001100_hook("DoubleVerticalBar", "\u2225", "object-key-init"),
    DownArrow: cc11001100_hook("DownArrow", "\u2193", "object-key-init"),
    DownLeftVector: cc11001100_hook("DownLeftVector", "\u21BD", "object-key-init"),
    DownRightVector: cc11001100_hook("DownRightVector", "\u21C1", "object-key-init"),
    DownTee: cc11001100_hook("DownTee", "\u22A4", "object-key-init"),
    Downarrow: cc11001100_hook("Downarrow", "\u21D3", "object-key-init"),
    Element: cc11001100_hook("Element", "\u2208", "object-key-init"),
    EqualTilde: cc11001100_hook("EqualTilde", "\u2242", "object-key-init"),
    Equilibrium: cc11001100_hook("Equilibrium", "\u21CC", "object-key-init"),
    Exists: cc11001100_hook("Exists", "\u2203", "object-key-init"),
    ExponentialE: cc11001100_hook("ExponentialE", "\u2147", "object-key-init"),
    FilledVerySmallSquare: cc11001100_hook("FilledVerySmallSquare", "\u25AA", "object-key-init"),
    ForAll: cc11001100_hook("ForAll", "\u2200", "object-key-init"),
    Gamma: cc11001100_hook("Gamma", "\u0393", "object-key-init"),
    Gg: cc11001100_hook("Gg", "\u22D9", "object-key-init"),
    GreaterEqual: cc11001100_hook("GreaterEqual", "\u2265", "object-key-init"),
    GreaterEqualLess: cc11001100_hook("GreaterEqualLess", "\u22DB", "object-key-init"),
    GreaterFullEqual: cc11001100_hook("GreaterFullEqual", "\u2267", "object-key-init"),
    GreaterLess: cc11001100_hook("GreaterLess", "\u2277", "object-key-init"),
    GreaterSlantEqual: cc11001100_hook("GreaterSlantEqual", "\u2A7E", "object-key-init"),
    GreaterTilde: cc11001100_hook("GreaterTilde", "\u2273", "object-key-init"),
    Hacek: cc11001100_hook("Hacek", "\u02C7", "object-key-init"),
    Hat: cc11001100_hook("Hat", "\u005E", "object-key-init"),
    HumpDownHump: cc11001100_hook("HumpDownHump", "\u224E", "object-key-init"),
    HumpEqual: cc11001100_hook("HumpEqual", "\u224F", "object-key-init"),
    Im: cc11001100_hook("Im", "\u2111", "object-key-init"),
    ImaginaryI: cc11001100_hook("ImaginaryI", "\u2148", "object-key-init"),
    Integral: cc11001100_hook("Integral", "\u222B", "object-key-init"),
    Intersection: cc11001100_hook("Intersection", "\u22C2", "object-key-init"),
    InvisibleComma: cc11001100_hook("InvisibleComma", "\u2063", "object-key-init"),
    InvisibleTimes: cc11001100_hook("InvisibleTimes", "\u2062", "object-key-init"),
    Lambda: cc11001100_hook("Lambda", "\u039B", "object-key-init"),
    Larr: cc11001100_hook("Larr", "\u219E", "object-key-init"),
    LeftAngleBracket: cc11001100_hook("LeftAngleBracket", "\u27E8", "object-key-init"),
    LeftArrow: cc11001100_hook("LeftArrow", "\u2190", "object-key-init"),
    LeftArrowRightArrow: cc11001100_hook("LeftArrowRightArrow", "\u21C6", "object-key-init"),
    LeftCeiling: cc11001100_hook("LeftCeiling", "\u2308", "object-key-init"),
    LeftDownVector: cc11001100_hook("LeftDownVector", "\u21C3", "object-key-init"),
    LeftFloor: cc11001100_hook("LeftFloor", "\u230A", "object-key-init"),
    LeftRightArrow: cc11001100_hook("LeftRightArrow", "\u2194", "object-key-init"),
    LeftTee: cc11001100_hook("LeftTee", "\u22A3", "object-key-init"),
    LeftTriangle: cc11001100_hook("LeftTriangle", "\u22B2", "object-key-init"),
    LeftTriangleEqual: cc11001100_hook("LeftTriangleEqual", "\u22B4", "object-key-init"),
    LeftUpVector: cc11001100_hook("LeftUpVector", "\u21BF", "object-key-init"),
    LeftVector: cc11001100_hook("LeftVector", "\u21BC", "object-key-init"),
    Leftarrow: cc11001100_hook("Leftarrow", "\u21D0", "object-key-init"),
    Leftrightarrow: cc11001100_hook("Leftrightarrow", "\u21D4", "object-key-init"),
    LessEqualGreater: cc11001100_hook("LessEqualGreater", "\u22DA", "object-key-init"),
    LessFullEqual: cc11001100_hook("LessFullEqual", "\u2266", "object-key-init"),
    LessGreater: cc11001100_hook("LessGreater", "\u2276", "object-key-init"),
    LessSlantEqual: cc11001100_hook("LessSlantEqual", "\u2A7D", "object-key-init"),
    LessTilde: cc11001100_hook("LessTilde", "\u2272", "object-key-init"),
    Ll: cc11001100_hook("Ll", "\u22D8", "object-key-init"),
    Lleftarrow: cc11001100_hook("Lleftarrow", "\u21DA", "object-key-init"),
    LongLeftArrow: cc11001100_hook("LongLeftArrow", "\u27F5", "object-key-init"),
    LongLeftRightArrow: cc11001100_hook("LongLeftRightArrow", "\u27F7", "object-key-init"),
    LongRightArrow: cc11001100_hook("LongRightArrow", "\u27F6", "object-key-init"),
    Longleftarrow: cc11001100_hook("Longleftarrow", "\u27F8", "object-key-init"),
    Longleftrightarrow: cc11001100_hook("Longleftrightarrow", "\u27FA", "object-key-init"),
    Longrightarrow: cc11001100_hook("Longrightarrow", "\u27F9", "object-key-init"),
    Lsh: cc11001100_hook("Lsh", "\u21B0", "object-key-init"),
    MinusPlus: cc11001100_hook("MinusPlus", "\u2213", "object-key-init"),
    NestedGreaterGreater: cc11001100_hook("NestedGreaterGreater", "\u226B", "object-key-init"),
    NestedLessLess: cc11001100_hook("NestedLessLess", "\u226A", "object-key-init"),
    NotDoubleVerticalBar: cc11001100_hook("NotDoubleVerticalBar", "\u2226", "object-key-init"),
    NotElement: cc11001100_hook("NotElement", "\u2209", "object-key-init"),
    NotEqual: cc11001100_hook("NotEqual", "\u2260", "object-key-init"),
    NotExists: cc11001100_hook("NotExists", "\u2204", "object-key-init"),
    NotGreater: cc11001100_hook("NotGreater", "\u226F", "object-key-init"),
    NotGreaterEqual: cc11001100_hook("NotGreaterEqual", "\u2271", "object-key-init"),
    NotLeftTriangle: cc11001100_hook("NotLeftTriangle", "\u22EA", "object-key-init"),
    NotLeftTriangleEqual: cc11001100_hook("NotLeftTriangleEqual", "\u22EC", "object-key-init"),
    NotLess: cc11001100_hook("NotLess", "\u226E", "object-key-init"),
    NotLessEqual: cc11001100_hook("NotLessEqual", "\u2270", "object-key-init"),
    NotPrecedes: cc11001100_hook("NotPrecedes", "\u2280", "object-key-init"),
    NotPrecedesSlantEqual: cc11001100_hook("NotPrecedesSlantEqual", "\u22E0", "object-key-init"),
    NotRightTriangle: cc11001100_hook("NotRightTriangle", "\u22EB", "object-key-init"),
    NotRightTriangleEqual: cc11001100_hook("NotRightTriangleEqual", "\u22ED", "object-key-init"),
    NotSubsetEqual: cc11001100_hook("NotSubsetEqual", "\u2288", "object-key-init"),
    NotSucceeds: cc11001100_hook("NotSucceeds", "\u2281", "object-key-init"),
    NotSucceedsSlantEqual: cc11001100_hook("NotSucceedsSlantEqual", "\u22E1", "object-key-init"),
    NotSupersetEqual: cc11001100_hook("NotSupersetEqual", "\u2289", "object-key-init"),
    NotTilde: cc11001100_hook("NotTilde", "\u2241", "object-key-init"),
    NotVerticalBar: cc11001100_hook("NotVerticalBar", "\u2224", "object-key-init"),
    Omega: cc11001100_hook("Omega", "\u03A9", "object-key-init"),
    OverBar: cc11001100_hook("OverBar", "\u203E", "object-key-init"),
    OverBrace: cc11001100_hook("OverBrace", "\u23DE", "object-key-init"),
    PartialD: cc11001100_hook("PartialD", "\u2202", "object-key-init"),
    Phi: cc11001100_hook("Phi", "\u03A6", "object-key-init"),
    Pi: cc11001100_hook("Pi", "\u03A0", "object-key-init"),
    PlusMinus: cc11001100_hook("PlusMinus", "\u00B1", "object-key-init"),
    Precedes: cc11001100_hook("Precedes", "\u227A", "object-key-init"),
    PrecedesEqual: cc11001100_hook("PrecedesEqual", "\u2AAF", "object-key-init"),
    PrecedesSlantEqual: cc11001100_hook("PrecedesSlantEqual", "\u227C", "object-key-init"),
    PrecedesTilde: cc11001100_hook("PrecedesTilde", "\u227E", "object-key-init"),
    Product: cc11001100_hook("Product", "\u220F", "object-key-init"),
    Proportional: cc11001100_hook("Proportional", "\u221D", "object-key-init"),
    Psi: cc11001100_hook("Psi", "\u03A8", "object-key-init"),
    Rarr: cc11001100_hook("Rarr", "\u21A0", "object-key-init"),
    Re: cc11001100_hook("Re", "\u211C", "object-key-init"),
    ReverseEquilibrium: cc11001100_hook("ReverseEquilibrium", "\u21CB", "object-key-init"),
    RightAngleBracket: cc11001100_hook("RightAngleBracket", "\u27E9", "object-key-init"),
    RightArrow: cc11001100_hook("RightArrow", "\u2192", "object-key-init"),
    RightArrowLeftArrow: cc11001100_hook("RightArrowLeftArrow", "\u21C4", "object-key-init"),
    RightCeiling: cc11001100_hook("RightCeiling", "\u2309", "object-key-init"),
    RightDownVector: cc11001100_hook("RightDownVector", "\u21C2", "object-key-init"),
    RightFloor: cc11001100_hook("RightFloor", "\u230B", "object-key-init"),
    RightTee: cc11001100_hook("RightTee", "\u22A2", "object-key-init"),
    RightTeeArrow: cc11001100_hook("RightTeeArrow", "\u21A6", "object-key-init"),
    RightTriangle: cc11001100_hook("RightTriangle", "\u22B3", "object-key-init"),
    RightTriangleEqual: cc11001100_hook("RightTriangleEqual", "\u22B5", "object-key-init"),
    RightUpVector: cc11001100_hook("RightUpVector", "\u21BE", "object-key-init"),
    RightVector: cc11001100_hook("RightVector", "\u21C0", "object-key-init"),
    Rightarrow: cc11001100_hook("Rightarrow", "\u21D2", "object-key-init"),
    Rrightarrow: cc11001100_hook("Rrightarrow", "\u21DB", "object-key-init"),
    Rsh: cc11001100_hook("Rsh", "\u21B1", "object-key-init"),
    Sigma: cc11001100_hook("Sigma", "\u03A3", "object-key-init"),
    SmallCircle: cc11001100_hook("SmallCircle", "\u2218", "object-key-init"),
    Sqrt: cc11001100_hook("Sqrt", "\u221A", "object-key-init"),
    Square: cc11001100_hook("Square", "\u25A1", "object-key-init"),
    SquareIntersection: cc11001100_hook("SquareIntersection", "\u2293", "object-key-init"),
    SquareSubset: cc11001100_hook("SquareSubset", "\u228F", "object-key-init"),
    SquareSubsetEqual: cc11001100_hook("SquareSubsetEqual", "\u2291", "object-key-init"),
    SquareSuperset: cc11001100_hook("SquareSuperset", "\u2290", "object-key-init"),
    SquareSupersetEqual: cc11001100_hook("SquareSupersetEqual", "\u2292", "object-key-init"),
    SquareUnion: cc11001100_hook("SquareUnion", "\u2294", "object-key-init"),
    Star: cc11001100_hook("Star", "\u22C6", "object-key-init"),
    Subset: cc11001100_hook("Subset", "\u22D0", "object-key-init"),
    SubsetEqual: cc11001100_hook("SubsetEqual", "\u2286", "object-key-init"),
    Succeeds: cc11001100_hook("Succeeds", "\u227B", "object-key-init"),
    SucceedsEqual: cc11001100_hook("SucceedsEqual", "\u2AB0", "object-key-init"),
    SucceedsSlantEqual: cc11001100_hook("SucceedsSlantEqual", "\u227D", "object-key-init"),
    SucceedsTilde: cc11001100_hook("SucceedsTilde", "\u227F", "object-key-init"),
    SuchThat: cc11001100_hook("SuchThat", "\u220B", "object-key-init"),
    Sum: cc11001100_hook("Sum", "\u2211", "object-key-init"),
    Superset: cc11001100_hook("Superset", "\u2283", "object-key-init"),
    SupersetEqual: cc11001100_hook("SupersetEqual", "\u2287", "object-key-init"),
    Supset: cc11001100_hook("Supset", "\u22D1", "object-key-init"),
    Therefore: cc11001100_hook("Therefore", "\u2234", "object-key-init"),
    Theta: cc11001100_hook("Theta", "\u0398", "object-key-init"),
    Tilde: cc11001100_hook("Tilde", "\u223C", "object-key-init"),
    TildeEqual: cc11001100_hook("TildeEqual", "\u2243", "object-key-init"),
    TildeFullEqual: cc11001100_hook("TildeFullEqual", "\u2245", "object-key-init"),
    TildeTilde: cc11001100_hook("TildeTilde", "\u2248", "object-key-init"),
    UnderBar: cc11001100_hook("UnderBar", "\u005F", "object-key-init"),
    UnderBrace: cc11001100_hook("UnderBrace", "\u23DF", "object-key-init"),
    Union: cc11001100_hook("Union", "\u22C3", "object-key-init"),
    UnionPlus: cc11001100_hook("UnionPlus", "\u228E", "object-key-init"),
    UpArrow: cc11001100_hook("UpArrow", "\u2191", "object-key-init"),
    UpDownArrow: cc11001100_hook("UpDownArrow", "\u2195", "object-key-init"),
    UpTee: cc11001100_hook("UpTee", "\u22A5", "object-key-init"),
    Uparrow: cc11001100_hook("Uparrow", "\u21D1", "object-key-init"),
    Updownarrow: cc11001100_hook("Updownarrow", "\u21D5", "object-key-init"),
    Upsilon: cc11001100_hook("Upsilon", "\u03A5", "object-key-init"),
    Vdash: cc11001100_hook("Vdash", "\u22A9", "object-key-init"),
    Vee: cc11001100_hook("Vee", "\u22C1", "object-key-init"),
    VerticalBar: cc11001100_hook("VerticalBar", "\u2223", "object-key-init"),
    VerticalTilde: cc11001100_hook("VerticalTilde", "\u2240", "object-key-init"),
    Vvdash: cc11001100_hook("Vvdash", "\u22AA", "object-key-init"),
    Wedge: cc11001100_hook("Wedge", "\u22C0", "object-key-init"),
    Xi: cc11001100_hook("Xi", "\u039E", "object-key-init"),
    acute: cc11001100_hook("acute", "\u00B4", "object-key-init"),
    aleph: cc11001100_hook("aleph", "\u2135", "object-key-init"),
    alpha: cc11001100_hook("alpha", "\u03B1", "object-key-init"),
    amalg: cc11001100_hook("amalg", "\u2A3F", "object-key-init"),
    and: cc11001100_hook("and", "\u2227", "object-key-init"),
    ang: cc11001100_hook("ang", "\u2220", "object-key-init"),
    angmsd: cc11001100_hook("angmsd", "\u2221", "object-key-init"),
    angsph: cc11001100_hook("angsph", "\u2222", "object-key-init"),
    ape: cc11001100_hook("ape", "\u224A", "object-key-init"),
    backprime: cc11001100_hook("backprime", "\u2035", "object-key-init"),
    backsim: cc11001100_hook("backsim", "\u223D", "object-key-init"),
    backsimeq: cc11001100_hook("backsimeq", "\u22CD", "object-key-init"),
    beta: cc11001100_hook("beta", "\u03B2", "object-key-init"),
    beth: cc11001100_hook("beth", "\u2136", "object-key-init"),
    between: cc11001100_hook("between", "\u226C", "object-key-init"),
    bigcirc: cc11001100_hook("bigcirc", "\u25EF", "object-key-init"),
    bigodot: cc11001100_hook("bigodot", "\u2A00", "object-key-init"),
    bigoplus: cc11001100_hook("bigoplus", "\u2A01", "object-key-init"),
    bigotimes: cc11001100_hook("bigotimes", "\u2A02", "object-key-init"),
    bigsqcup: cc11001100_hook("bigsqcup", "\u2A06", "object-key-init"),
    bigstar: cc11001100_hook("bigstar", "\u2605", "object-key-init"),
    bigtriangledown: cc11001100_hook("bigtriangledown", "\u25BD", "object-key-init"),
    bigtriangleup: cc11001100_hook("bigtriangleup", "\u25B3", "object-key-init"),
    biguplus: cc11001100_hook("biguplus", "\u2A04", "object-key-init"),
    blacklozenge: cc11001100_hook("blacklozenge", "\u29EB", "object-key-init"),
    blacktriangle: cc11001100_hook("blacktriangle", "\u25B4", "object-key-init"),
    blacktriangledown: cc11001100_hook("blacktriangledown", "\u25BE", "object-key-init"),
    blacktriangleleft: cc11001100_hook("blacktriangleleft", "\u25C2", "object-key-init"),
    bowtie: cc11001100_hook("bowtie", "\u22C8", "object-key-init"),
    boxdl: cc11001100_hook("boxdl", "\u2510", "object-key-init"),
    boxdr: cc11001100_hook("boxdr", "\u250C", "object-key-init"),
    boxminus: cc11001100_hook("boxminus", "\u229F", "object-key-init"),
    boxplus: cc11001100_hook("boxplus", "\u229E", "object-key-init"),
    boxtimes: cc11001100_hook("boxtimes", "\u22A0", "object-key-init"),
    boxul: cc11001100_hook("boxul", "\u2518", "object-key-init"),
    boxur: cc11001100_hook("boxur", "\u2514", "object-key-init"),
    bsol: cc11001100_hook("bsol", "\u005C", "object-key-init"),
    bull: cc11001100_hook("bull", "\u2022", "object-key-init"),
    cap: cc11001100_hook("cap", "\u2229", "object-key-init"),
    check: cc11001100_hook("check", "\u2713", "object-key-init"),
    chi: cc11001100_hook("chi", "\u03C7", "object-key-init"),
    circ: cc11001100_hook("circ", "\u02C6", "object-key-init"),
    circeq: cc11001100_hook("circeq", "\u2257", "object-key-init"),
    circlearrowleft: cc11001100_hook("circlearrowleft", "\u21BA", "object-key-init"),
    circlearrowright: cc11001100_hook("circlearrowright", "\u21BB", "object-key-init"),
    circledR: cc11001100_hook("circledR", "\u00AE", "object-key-init"),
    circledS: cc11001100_hook("circledS", "\u24C8", "object-key-init"),
    circledast: cc11001100_hook("circledast", "\u229B", "object-key-init"),
    circledcirc: cc11001100_hook("circledcirc", "\u229A", "object-key-init"),
    circleddash: cc11001100_hook("circleddash", "\u229D", "object-key-init"),
    clubs: cc11001100_hook("clubs", "\u2663", "object-key-init"),
    colon: cc11001100_hook("colon", "\u003A", "object-key-init"),
    comp: cc11001100_hook("comp", "\u2201", "object-key-init"),
    ctdot: cc11001100_hook("ctdot", "\u22EF", "object-key-init"),
    cuepr: cc11001100_hook("cuepr", "\u22DE", "object-key-init"),
    cuesc: cc11001100_hook("cuesc", "\u22DF", "object-key-init"),
    cularr: cc11001100_hook("cularr", "\u21B6", "object-key-init"),
    cup: cc11001100_hook("cup", "\u222A", "object-key-init"),
    curarr: cc11001100_hook("curarr", "\u21B7", "object-key-init"),
    curlyvee: cc11001100_hook("curlyvee", "\u22CE", "object-key-init"),
    curlywedge: cc11001100_hook("curlywedge", "\u22CF", "object-key-init"),
    dagger: cc11001100_hook("dagger", "\u2020", "object-key-init"),
    daleth: cc11001100_hook("daleth", "\u2138", "object-key-init"),
    ddarr: cc11001100_hook("ddarr", "\u21CA", "object-key-init"),
    deg: cc11001100_hook("deg", "\u00B0", "object-key-init"),
    delta: cc11001100_hook("delta", "\u03B4", "object-key-init"),
    digamma: cc11001100_hook("digamma", "\u03DD", "object-key-init"),
    div: cc11001100_hook("div", "\u00F7", "object-key-init"),
    divideontimes: cc11001100_hook("divideontimes", "\u22C7", "object-key-init"),
    dot: cc11001100_hook("dot", "\u02D9", "object-key-init"),
    doteqdot: cc11001100_hook("doteqdot", "\u2251", "object-key-init"),
    dotplus: cc11001100_hook("dotplus", "\u2214", "object-key-init"),
    dotsquare: cc11001100_hook("dotsquare", "\u22A1", "object-key-init"),
    dtdot: cc11001100_hook("dtdot", "\u22F1", "object-key-init"),
    ecir: cc11001100_hook("ecir", "\u2256", "object-key-init"),
    efDot: cc11001100_hook("efDot", "\u2252", "object-key-init"),
    egs: cc11001100_hook("egs", "\u2A96", "object-key-init"),
    ell: cc11001100_hook("ell", "\u2113", "object-key-init"),
    els: cc11001100_hook("els", "\u2A95", "object-key-init"),
    empty: cc11001100_hook("empty", "\u2205", "object-key-init"),
    epsi: cc11001100_hook("epsi", "\u03B5", "object-key-init"),
    epsiv: cc11001100_hook("epsiv", "\u03F5", "object-key-init"),
    erDot: cc11001100_hook("erDot", "\u2253", "object-key-init"),
    eta: cc11001100_hook("eta", "\u03B7", "object-key-init"),
    eth: cc11001100_hook("eth", "\u00F0", "object-key-init"),
    flat: cc11001100_hook("flat", "\u266D", "object-key-init"),
    fork: cc11001100_hook("fork", "\u22D4", "object-key-init"),
    frown: cc11001100_hook("frown", "\u2322", "object-key-init"),
    gEl: cc11001100_hook("gEl", "\u2A8C", "object-key-init"),
    gamma: cc11001100_hook("gamma", "\u03B3", "object-key-init"),
    gap: cc11001100_hook("gap", "\u2A86", "object-key-init"),
    gimel: cc11001100_hook("gimel", "\u2137", "object-key-init"),
    gnE: cc11001100_hook("gnE", "\u2269", "object-key-init"),
    gnap: cc11001100_hook("gnap", "\u2A8A", "object-key-init"),
    gne: cc11001100_hook("gne", "\u2A88", "object-key-init"),
    gnsim: cc11001100_hook("gnsim", "\u22E7", "object-key-init"),
    gt: cc11001100_hook("gt", "\u003E", "object-key-init"),
    gtdot: cc11001100_hook("gtdot", "\u22D7", "object-key-init"),
    harrw: cc11001100_hook("harrw", "\u21AD", "object-key-init"),
    hbar: cc11001100_hook("hbar", "\u210F", "object-key-init"),
    hellip: cc11001100_hook("hellip", "\u2026", "object-key-init"),
    hookleftarrow: cc11001100_hook("hookleftarrow", "\u21A9", "object-key-init"),
    hookrightarrow: cc11001100_hook("hookrightarrow", "\u21AA", "object-key-init"),
    imath: cc11001100_hook("imath", "\u0131", "object-key-init"),
    infin: cc11001100_hook("infin", "\u221E", "object-key-init"),
    intcal: cc11001100_hook("intcal", "\u22BA", "object-key-init"),
    iota: cc11001100_hook("iota", "\u03B9", "object-key-init"),
    jmath: cc11001100_hook("jmath", "\u0237", "object-key-init"),
    kappa: cc11001100_hook("kappa", "\u03BA", "object-key-init"),
    kappav: cc11001100_hook("kappav", "\u03F0", "object-key-init"),
    lEg: cc11001100_hook("lEg", "\u2A8B", "object-key-init"),
    lambda: cc11001100_hook("lambda", "\u03BB", "object-key-init"),
    lap: cc11001100_hook("lap", "\u2A85", "object-key-init"),
    larrlp: cc11001100_hook("larrlp", "\u21AB", "object-key-init"),
    larrtl: cc11001100_hook("larrtl", "\u21A2", "object-key-init"),
    lbrace: cc11001100_hook("lbrace", "\u007B", "object-key-init"),
    lbrack: cc11001100_hook("lbrack", "\u005B", "object-key-init"),
    le: cc11001100_hook("le", "\u2264", "object-key-init"),
    leftleftarrows: cc11001100_hook("leftleftarrows", "\u21C7", "object-key-init"),
    leftthreetimes: cc11001100_hook("leftthreetimes", "\u22CB", "object-key-init"),
    lessdot: cc11001100_hook("lessdot", "\u22D6", "object-key-init"),
    lmoust: cc11001100_hook("lmoust", "\u23B0", "object-key-init"),
    lnE: cc11001100_hook("lnE", "\u2268", "object-key-init"),
    lnap: cc11001100_hook("lnap", "\u2A89", "object-key-init"),
    lne: cc11001100_hook("lne", "\u2A87", "object-key-init"),
    lnsim: cc11001100_hook("lnsim", "\u22E6", "object-key-init"),
    longmapsto: cc11001100_hook("longmapsto", "\u27FC", "object-key-init"),
    looparrowright: cc11001100_hook("looparrowright", "\u21AC", "object-key-init"),
    lowast: cc11001100_hook("lowast", "\u2217", "object-key-init"),
    loz: cc11001100_hook("loz", "\u25CA", "object-key-init"),
    lt: cc11001100_hook("lt", "\u003C", "object-key-init"),
    ltimes: cc11001100_hook("ltimes", "\u22C9", "object-key-init"),
    ltri: cc11001100_hook("ltri", "\u25C3", "object-key-init"),
    macr: cc11001100_hook("macr", "\u00AF", "object-key-init"),
    malt: cc11001100_hook("malt", "\u2720", "object-key-init"),
    mho: cc11001100_hook("mho", "\u2127", "object-key-init"),
    mu: cc11001100_hook("mu", "\u03BC", "object-key-init"),
    multimap: cc11001100_hook("multimap", "\u22B8", "object-key-init"),
    nLeftarrow: cc11001100_hook("nLeftarrow", "\u21CD", "object-key-init"),
    nLeftrightarrow: cc11001100_hook("nLeftrightarrow", "\u21CE", "object-key-init"),
    nRightarrow: cc11001100_hook("nRightarrow", "\u21CF", "object-key-init"),
    nVDash: cc11001100_hook("nVDash", "\u22AF", "object-key-init"),
    nVdash: cc11001100_hook("nVdash", "\u22AE", "object-key-init"),
    natur: cc11001100_hook("natur", "\u266E", "object-key-init"),
    nearr: cc11001100_hook("nearr", "\u2197", "object-key-init"),
    nharr: cc11001100_hook("nharr", "\u21AE", "object-key-init"),
    nlarr: cc11001100_hook("nlarr", "\u219A", "object-key-init"),
    not: cc11001100_hook("not", "\u00AC", "object-key-init"),
    nrarr: cc11001100_hook("nrarr", "\u219B", "object-key-init"),
    nu: cc11001100_hook("nu", "\u03BD", "object-key-init"),
    nvDash: cc11001100_hook("nvDash", "\u22AD", "object-key-init"),
    nvdash: cc11001100_hook("nvdash", "\u22AC", "object-key-init"),
    nwarr: cc11001100_hook("nwarr", "\u2196", "object-key-init"),
    omega: cc11001100_hook("omega", "\u03C9", "object-key-init"),
    omicron: cc11001100_hook("omicron", "\u03BF", "object-key-init"),
    or: cc11001100_hook("or", "\u2228", "object-key-init"),
    osol: cc11001100_hook("osol", "\u2298", "object-key-init"),
    period: cc11001100_hook("period", "\u002E", "object-key-init"),
    phi: cc11001100_hook("phi", "\u03C6", "object-key-init"),
    phiv: cc11001100_hook("phiv", "\u03D5", "object-key-init"),
    pi: cc11001100_hook("pi", "\u03C0", "object-key-init"),
    piv: cc11001100_hook("piv", "\u03D6", "object-key-init"),
    prap: cc11001100_hook("prap", "\u2AB7", "object-key-init"),
    precnapprox: cc11001100_hook("precnapprox", "\u2AB9", "object-key-init"),
    precneqq: cc11001100_hook("precneqq", "\u2AB5", "object-key-init"),
    precnsim: cc11001100_hook("precnsim", "\u22E8", "object-key-init"),
    prime: cc11001100_hook("prime", "\u2032", "object-key-init"),
    psi: cc11001100_hook("psi", "\u03C8", "object-key-init"),
    rarrtl: cc11001100_hook("rarrtl", "\u21A3", "object-key-init"),
    rbrace: cc11001100_hook("rbrace", "\u007D", "object-key-init"),
    rbrack: cc11001100_hook("rbrack", "\u005D", "object-key-init"),
    rho: cc11001100_hook("rho", "\u03C1", "object-key-init"),
    rhov: cc11001100_hook("rhov", "\u03F1", "object-key-init"),
    rightrightarrows: cc11001100_hook("rightrightarrows", "\u21C9", "object-key-init"),
    rightthreetimes: cc11001100_hook("rightthreetimes", "\u22CC", "object-key-init"),
    ring: cc11001100_hook("ring", "\u02DA", "object-key-init"),
    rmoust: cc11001100_hook("rmoust", "\u23B1", "object-key-init"),
    rtimes: cc11001100_hook("rtimes", "\u22CA", "object-key-init"),
    rtri: cc11001100_hook("rtri", "\u25B9", "object-key-init"),
    scap: cc11001100_hook("scap", "\u2AB8", "object-key-init"),
    scnE: cc11001100_hook("scnE", "\u2AB6", "object-key-init"),
    scnap: cc11001100_hook("scnap", "\u2ABA", "object-key-init"),
    scnsim: cc11001100_hook("scnsim", "\u22E9", "object-key-init"),
    sdot: cc11001100_hook("sdot", "\u22C5", "object-key-init"),
    searr: cc11001100_hook("searr", "\u2198", "object-key-init"),
    sect: cc11001100_hook("sect", "\u00A7", "object-key-init"),
    sharp: cc11001100_hook("sharp", "\u266F", "object-key-init"),
    sigma: cc11001100_hook("sigma", "\u03C3", "object-key-init"),
    sigmav: cc11001100_hook("sigmav", "\u03C2", "object-key-init"),
    simne: cc11001100_hook("simne", "\u2246", "object-key-init"),
    smile: cc11001100_hook("smile", "\u2323", "object-key-init"),
    spades: cc11001100_hook("spades", "\u2660", "object-key-init"),
    sub: cc11001100_hook("sub", "\u2282", "object-key-init"),
    subE: cc11001100_hook("subE", "\u2AC5", "object-key-init"),
    subnE: cc11001100_hook("subnE", "\u2ACB", "object-key-init"),
    subne: cc11001100_hook("subne", "\u228A", "object-key-init"),
    supE: cc11001100_hook("supE", "\u2AC6", "object-key-init"),
    supnE: cc11001100_hook("supnE", "\u2ACC", "object-key-init"),
    supne: cc11001100_hook("supne", "\u228B", "object-key-init"),
    swarr: cc11001100_hook("swarr", "\u2199", "object-key-init"),
    tau: cc11001100_hook("tau", "\u03C4", "object-key-init"),
    theta: cc11001100_hook("theta", "\u03B8", "object-key-init"),
    thetav: cc11001100_hook("thetav", "\u03D1", "object-key-init"),
    tilde: cc11001100_hook("tilde", "\u02DC", "object-key-init"),
    times: cc11001100_hook("times", "\u00D7", "object-key-init"),
    triangle: cc11001100_hook("triangle", "\u25B5", "object-key-init"),
    triangleq: cc11001100_hook("triangleq", "\u225C", "object-key-init"),
    upsi: cc11001100_hook("upsi", "\u03C5", "object-key-init"),
    upuparrows: cc11001100_hook("upuparrows", "\u21C8", "object-key-init"),
    veebar: cc11001100_hook("veebar", "\u22BB", "object-key-init"),
    vellip: cc11001100_hook("vellip", "\u22EE", "object-key-init"),
    weierp: cc11001100_hook("weierp", "\u2118", "object-key-init"),
    xi: cc11001100_hook("xi", "\u03BE", "object-key-init"),
    yen: cc11001100_hook("yen", "\u00A5", "object-key-init"),
    zeta: cc11001100_hook("zeta", "\u03B6", "object-key-init"),
    zigrarr: cc11001100_hook("zigrarr", "\u21DD", "object-key-init")
  }, "assign");
  c.loadComplete("jax.js");
})(MathJax.InputJax.MathML, MathJax.Hub.Browser);
(function (i, b, e, g) {
  var h;
  var j, a, d;
  var f = cc11001100_hook("f", "'Times New Roman',Times,STIXGeneral,serif", "var-init");
  var m = cc11001100_hook("m", {
    ".MJXp-script": {
      "font-size": cc11001100_hook("font-size", ".8em", "object-key-init")
    },
    ".MJXp-right": {
      "-webkit-transform-origin": cc11001100_hook("-webkit-transform-origin", "right", "object-key-init"),
      "-moz-transform-origin": cc11001100_hook("-moz-transform-origin", "right", "object-key-init"),
      "-ms-transform-origin": cc11001100_hook("-ms-transform-origin", "right", "object-key-init"),
      "-o-transform-origin": cc11001100_hook("-o-transform-origin", "right", "object-key-init"),
      "transform-origin": cc11001100_hook("transform-origin", "right", "object-key-init")
    },
    ".MJXp-bold": {
      "font-weight": cc11001100_hook("font-weight", "bold", "object-key-init")
    },
    ".MJXp-italic": {
      "font-style": cc11001100_hook("font-style", "italic", "object-key-init")
    },
    ".MJXp-scr": {
      "font-family": cc11001100_hook("font-family", "MathJax_Script," + f, "object-key-init")
    },
    ".MJXp-frak": {
      "font-family": cc11001100_hook("font-family", "MathJax_Fraktur," + f, "object-key-init")
    },
    ".MJXp-sf": {
      "font-family": cc11001100_hook("font-family", "MathJax_SansSerif," + f, "object-key-init")
    },
    ".MJXp-cal": {
      "font-family": cc11001100_hook("font-family", "MathJax_Caligraphic," + f, "object-key-init")
    },
    ".MJXp-mono": {
      "font-family": cc11001100_hook("font-family", "MathJax_Typewriter," + f, "object-key-init")
    },
    ".MJXp-largeop": {
      "font-size": cc11001100_hook("font-size", "150%", "object-key-init")
    },
    ".MJXp-largeop.MJXp-int": {
      "vertical-align": cc11001100_hook("vertical-align", "-.2em", "object-key-init")
    },
    ".MJXp-math": {
      display: cc11001100_hook("display", "inline-block", "object-key-init"),
      "line-height": cc11001100_hook("line-height", "1.2", "object-key-init"),
      "text-indent": cc11001100_hook("text-indent", "0", "object-key-init"),
      "font-family": cc11001100_hook("font-family", f, "object-key-init"),
      "white-space": cc11001100_hook("white-space", "nowrap", "object-key-init"),
      "border-collapse": cc11001100_hook("border-collapse", "collapse", "object-key-init")
    },
    ".MJXp-display": {
      display: cc11001100_hook("display", "block", "object-key-init"),
      "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
      margin: cc11001100_hook("margin", "1em 0", "object-key-init")
    },
    ".MJXp-math span": {
      display: cc11001100_hook("display", "inline-block", "object-key-init")
    },
    ".MJXp-box": {
      display: cc11001100_hook("display", "block!important", "object-key-init"),
      "text-align": cc11001100_hook("text-align", "center", "object-key-init")
    },
    ".MJXp-box:after": {
      content: cc11001100_hook("content", '" "', "object-key-init")
    },
    ".MJXp-rule": {
      display: cc11001100_hook("display", "block!important", "object-key-init"),
      "margin-top": cc11001100_hook("margin-top", ".1em", "object-key-init")
    },
    ".MJXp-char": {
      display: cc11001100_hook("display", "block!important", "object-key-init")
    },
    ".MJXp-mo": {
      margin: cc11001100_hook("margin", "0 .15em", "object-key-init")
    },
    ".MJXp-mfrac": {
      margin: cc11001100_hook("margin", "0 .125em", "object-key-init"),
      "vertical-align": cc11001100_hook("vertical-align", ".25em", "object-key-init")
    },
    ".MJXp-denom": {
      display: cc11001100_hook("display", "inline-table!important", "object-key-init"),
      width: cc11001100_hook("width", "100%", "object-key-init")
    },
    ".MJXp-denom > *": {
      display: cc11001100_hook("display", "table-row!important", "object-key-init")
    },
    ".MJXp-surd": {
      "vertical-align": cc11001100_hook("vertical-align", "top", "object-key-init")
    },
    ".MJXp-surd > *": {
      display: cc11001100_hook("display", "block!important", "object-key-init")
    },
    ".MJXp-script-box > * ": {
      display: cc11001100_hook("display", "table!important", "object-key-init"),
      height: cc11001100_hook("height", "50%", "object-key-init")
    },
    ".MJXp-script-box > * > *": {
      display: cc11001100_hook("display", "table-cell!important", "object-key-init"),
      "vertical-align": cc11001100_hook("vertical-align", "top", "object-key-init")
    },
    ".MJXp-script-box > *:last-child > *": {
      "vertical-align": cc11001100_hook("vertical-align", "bottom", "object-key-init")
    },
    ".MJXp-script-box > * > * > *": {
      display: cc11001100_hook("display", "block!important", "object-key-init")
    },
    ".MJXp-mphantom": {
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init")
    },
    ".MJXp-munderover": {
      display: cc11001100_hook("display", "inline-table!important", "object-key-init")
    },
    ".MJXp-over": {
      display: cc11001100_hook("display", "inline-block!important", "object-key-init"),
      "text-align": cc11001100_hook("text-align", "center", "object-key-init")
    },
    ".MJXp-over > *": {
      display: cc11001100_hook("display", "block!important", "object-key-init")
    },
    ".MJXp-munderover > *": {
      display: cc11001100_hook("display", "table-row!important", "object-key-init")
    },
    ".MJXp-mtable": {
      "vertical-align": cc11001100_hook("vertical-align", ".25em", "object-key-init"),
      margin: cc11001100_hook("margin", "0 .125em", "object-key-init")
    },
    ".MJXp-mtable > *": {
      display: cc11001100_hook("display", "inline-table!important", "object-key-init"),
      "vertical-align": cc11001100_hook("vertical-align", "middle", "object-key-init")
    },
    ".MJXp-mtr": {
      display: cc11001100_hook("display", "table-row!important", "object-key-init")
    },
    ".MJXp-mtd": {
      display: cc11001100_hook("display", "table-cell!important", "object-key-init"),
      "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
      padding: cc11001100_hook("padding", ".5em 0 0 .5em", "object-key-init")
    },
    ".MJXp-mtr > .MJXp-mtd:first-child": {
      "padding-left": cc11001100_hook("padding-left", 0, "object-key-init")
    },
    ".MJXp-mtr:first-child > .MJXp-mtd": {
      "padding-top": cc11001100_hook("padding-top", 0, "object-key-init")
    },
    ".MJXp-mlabeledtr": {
      display: cc11001100_hook("display", "table-row!important", "object-key-init")
    },
    ".MJXp-mlabeledtr > .MJXp-mtd:first-child": {
      "padding-left": cc11001100_hook("padding-left", 0, "object-key-init")
    },
    ".MJXp-mlabeledtr:first-child > .MJXp-mtd": {
      "padding-top": cc11001100_hook("padding-top", 0, "object-key-init")
    },
    ".MJXp-merror": {
      "background-color": cc11001100_hook("background-color", "#FFFF88", "object-key-init"),
      color: cc11001100_hook("color", "#CC0000", "object-key-init"),
      border: cc11001100_hook("border", "1px solid #CC0000", "object-key-init"),
      padding: cc11001100_hook("padding", "1px 3px", "object-key-init"),
      "font-style": cc11001100_hook("font-style", "normal", "object-key-init"),
      "font-size": cc11001100_hook("font-size", "90%", "object-key-init")
    }
  }, "var-init");
  (function () {
    for (var n = cc11001100_hook("n", 0, "var-init"); n < 10; n++) {
      var o = cc11001100_hook("o", "scaleX(." + n + ")", "var-init");
      m[".MJXp-scale" + n] = cc11001100_hook("m[\".MJXp-scale\" + n]", {
        "-webkit-transform": cc11001100_hook("-webkit-transform", o, "object-key-init"),
        "-moz-transform": cc11001100_hook("-moz-transform", o, "object-key-init"),
        "-ms-transform": cc11001100_hook("-ms-transform", o, "object-key-init"),
        "-o-transform": cc11001100_hook("-o-transform", o, "object-key-init"),
        transform: cc11001100_hook("transform", o, "object-key-init")
      }, "assign");
    }
  })();
  var k = cc11001100_hook("k", 1000000, "var-init");
  var c = cc11001100_hook("c", "V", "var-init"),
    l = cc11001100_hook("l", "H", "var-init");
  g.Augment({
    settings: cc11001100_hook("settings", b.config.menuSettings, "object-key-init"),
    config: {
      styles: cc11001100_hook("styles", m, "object-key-init")
    },
    hideProcessedMath: cc11001100_hook("hideProcessedMath", false, "object-key-init"),
    maxStretchyParts: cc11001100_hook("maxStretchyParts", 1000, "object-key-init"),
    Config: function () {
      if (!this.require) {
        this.require = cc11001100_hook("this.require", [], "assign");
      }
      this.SUPER(arguments).Config.call(this);
      var n = cc11001100_hook("n", this.settings, "var-init");
      if (n.scale) {
        this.config.scale = cc11001100_hook("this.config.scale", n.scale, "assign");
      }
      this.require.push(MathJax.OutputJax.extensionDir + "/MathEvents.js");
    },
    Startup: function () {
      j = cc11001100_hook("j", MathJax.Extension.MathEvents.Event, "assign");
      a = cc11001100_hook("a", MathJax.Extension.MathEvents.Touch, "assign");
      d = cc11001100_hook("d", MathJax.Extension.MathEvents.Hover, "assign");
      this.ContextMenu = cc11001100_hook("this.ContextMenu", j.ContextMenu, "assign");
      this.Mousedown = cc11001100_hook("this.Mousedown", j.AltContextMenu, "assign");
      this.Mouseover = cc11001100_hook("this.Mouseover", d.Mouseover, "assign");
      this.Mouseout = cc11001100_hook("this.Mouseout", d.Mouseout, "assign");
      this.Mousemove = cc11001100_hook("this.Mousemove", d.Mousemove, "assign");
      var n = cc11001100_hook("n", e.addElement(document.body, "div", {
        style: {
          width: cc11001100_hook("width", "5in", "object-key-init")
        }
      }), "var-init");
      this.pxPerInch = cc11001100_hook("this.pxPerInch", n.offsetWidth / 5, "assign");
      n.parentNode.removeChild(n);
      return i.Styles(this.config.styles, ["InitializePHTML", this]);
    },
    InitializePHTML: function () {},
    preTranslate: function (p) {
      var s = cc11001100_hook("s", p.jax[this.id], "var-init"),
        t,
        q = cc11001100_hook("q", s.length, "var-init"),
        u,
        r,
        v,
        o,
        n;
      for (t = cc11001100_hook("t", 0, "assign"); t < q; t++) {
        u = cc11001100_hook("u", s[t], "assign");
        if (!u.parentNode) {
          continue;
        }
        r = cc11001100_hook("r", u.previousSibling, "assign");
        if (r && String(r.className).match(/^MathJax(_PHTML)?(_Display)?( MathJax_Process(ing|ed))?$/)) {
          r.parentNode.removeChild(r);
        }
        n = cc11001100_hook("n", u.MathJax.elementJax, "assign");
        if (!n) {
          continue;
        }
        n.PHTML = cc11001100_hook("n.PHTML", {
          display: cc11001100_hook("display", n.root.Get("display") === "block", "object-key-init")
        }, "assign");
        v = cc11001100_hook("v", o = cc11001100_hook("o", e.Element("span", {
          className: cc11001100_hook("className", "MathJax_PHTML", "object-key-init"),
          id: cc11001100_hook("id", n.inputID + "-Frame", "object-key-init"),
          isMathJax: cc11001100_hook("isMathJax", true, "object-key-init"),
          jaxID: cc11001100_hook("jaxID", this.id, "object-key-init"),
          oncontextmenu: cc11001100_hook("oncontextmenu", j.Menu, "object-key-init"),
          onmousedown: cc11001100_hook("onmousedown", j.Mousedown, "object-key-init"),
          onmouseover: cc11001100_hook("onmouseover", j.Mouseover, "object-key-init"),
          onmouseout: cc11001100_hook("onmouseout", j.Mouseout, "object-key-init"),
          onmousemove: cc11001100_hook("onmousemove", j.Mousemove, "object-key-init"),
          onclick: cc11001100_hook("onclick", j.Click, "object-key-init"),
          ondblclick: cc11001100_hook("ondblclick", j.DblClick, "object-key-init"),
          onkeydown: cc11001100_hook("onkeydown", j.Keydown, "object-key-init"),
          tabIndex: cc11001100_hook("tabIndex", b.getTabOrder(n), "object-key-init")
        }), "assign"), "assign");
        if (b.Browser.noContextMenu) {
          v.ontouchstart = cc11001100_hook("v.ontouchstart", a.start, "assign");
          v.ontouchend = cc11001100_hook("v.ontouchend", a.end, "assign");
        }
        if (n.PHTML.display) {
          o = cc11001100_hook("o", e.Element("div", {
            className: cc11001100_hook("className", "MathJax_PHTML_Display", "object-key-init")
          }), "assign");
          o.appendChild(v);
        }
        o.className += cc11001100_hook("o.className", " MathJax_Processing", "assign");
        u.parentNode.insertBefore(o, u);
      }
    },
    Translate: function (o, s) {
      if (!o.parentNode) {
        return;
      }
      var n = cc11001100_hook("n", o.MathJax.elementJax, "var-init"),
        r = cc11001100_hook("r", n.root, "var-init"),
        p = cc11001100_hook("p", document.getElementById(n.inputID + "-Frame"), "var-init"),
        t = cc11001100_hook("t", n.PHTML.display ? p.parentNode : p, "var-init");
      this.initPHTML(r, p);
      try {
        r.toPreviewHTML(p);
      } catch (q) {
        if (q.restart) {
          while (p.firstChild) {
            p.removeChild(p.firstChild);
          }
        }
        throw q;
      }
      t.className = cc11001100_hook("t.className", t.className.split(/ /)[0], "assign");
      if (this.hideProcessedMath) {
        t.className += cc11001100_hook("t.className", " MathJax_Processed", "assign");
        if (o.MathJax.preview) {
          n.PHTML.preview = cc11001100_hook("n.PHTML.preview", o.MathJax.preview, "assign");
          delete o.MathJax.preview;
        }
      }
    },
    postTranslate: function (s) {
      var o = cc11001100_hook("o", s.jax[this.id], "var-init");
      if (!this.hideProcessedMath) {
        return;
      }
      for (var q = cc11001100_hook("q", 0, "var-init"), n = cc11001100_hook("n", o.length, "var-init"); q < n; q++) {
        var p = cc11001100_hook("p", o[q], "var-init");
        if (p && p.MathJax.elementJax) {
          p.previousSibling.className = cc11001100_hook("p.previousSibling.className", p.previousSibling.className.split(/ /)[0], "assign");
          var r = cc11001100_hook("r", p.MathJax.elementJax.PHTML, "var-init");
          if (r.preview) {
            r.preview.innerHTML = cc11001100_hook("r.preview.innerHTML", "", "assign");
            r.preview.style.display = cc11001100_hook("r.preview.style.display", "none", "assign");
            p.MathJax.preview = cc11001100_hook("p.MathJax.preview", r.preview, "assign");
            delete r.preview;
          }
        }
      }
    },
    getJaxFromMath: function (n) {
      if (n.parentNode.className.match(/MathJax_PHTML_Display/)) {
        n = cc11001100_hook("n", n.parentNode, "assign");
      }
      do {
        n = cc11001100_hook("n", n.nextSibling, "assign");
      } while (n && n.nodeName.toLowerCase() !== "script");
      return b.getJaxFor(n);
    },
    getHoverSpan: function (n, o) {
      return n.root.PHTMLspanElement();
    },
    getHoverBBox: function (n, q, r) {
      var s = cc11001100_hook("s", n.root.PHTML, "var-init"),
        p = cc11001100_hook("p", n.PHTML.outerEm, "var-init");
      var o = cc11001100_hook("o", {
        w: cc11001100_hook("w", s.w * p, "object-key-init"),
        h: cc11001100_hook("h", s.h * p, "object-key-init"),
        d: cc11001100_hook("d", s.d * p, "object-key-init")
      }, "var-init");
      if (s.width) {
        o.width = cc11001100_hook("o.width", s.width, "assign");
      }
      return o;
    },
    Zoom: function (o, u, s, n, r) {
      u.className = cc11001100_hook("u.className", "MathJax", "assign");
      this.idPostfix = cc11001100_hook("this.idPostfix", "-zoom", "assign");
      o.root.toPHTML(u, u);
      this.idPostfix = cc11001100_hook("this.idPostfix", "", "assign");
      u.style.position = cc11001100_hook("u.style.position", "absolute", "assign");
      if (!width) {
        s.style.position = cc11001100_hook("s.style.position", "absolute", "assign");
      }
      var t = cc11001100_hook("t", u.offsetWidth, "var-init"),
        q = cc11001100_hook("q", u.offsetHeight, "var-init"),
        v = cc11001100_hook("v", s.offsetHeight, "var-init"),
        p = cc11001100_hook("p", s.offsetWidth, "var-init");
      if (p === 0) {
        p = cc11001100_hook("p", s.parentNode.offsetWidth, "assign");
      }
      u.style.position = cc11001100_hook("u.style.position", s.style.position = cc11001100_hook("s.style.position", "", "assign"), "assign");
      return {
        Y: cc11001100_hook("Y", -j.getBBox(u).h, "object-key-init"),
        mW: cc11001100_hook("mW", p, "object-key-init"),
        mH: cc11001100_hook("mH", v, "object-key-init"),
        zW: cc11001100_hook("zW", t, "object-key-init"),
        zH: cc11001100_hook("zH", q, "object-key-init")
      };
    },
    initPHTML: function (o, n) {},
    Remove: function (n) {
      var o = cc11001100_hook("o", document.getElementById(n.inputID + "-Frame"), "var-init");
      if (o) {
        if (n.PHTML.display) {
          o = cc11001100_hook("o", o.parentNode, "assign");
        }
        o.parentNode.removeChild(o);
      }
      delete n.PHTML;
    },
    ID: cc11001100_hook("ID", 0, "object-key-init"),
    idPostfix: cc11001100_hook("idPostfix", "", "object-key-init"),
    GetID: function () {
      this.ID++;
      return this.ID;
    },
    VARIANT: {
      bold: cc11001100_hook("bold", "MJXp-bold", "object-key-init"),
      italic: cc11001100_hook("italic", "MJXp-italic", "object-key-init"),
      "bold-italic": cc11001100_hook("bold-italic", "MJXp-bold MJXp-italic", "object-key-init"),
      script: cc11001100_hook("script", "MJXp-scr", "object-key-init"),
      "bold-script": cc11001100_hook("bold-script", "MJXp-scr MJXp-bold", "object-key-init"),
      fraktur: cc11001100_hook("fraktur", "MJXp-frak", "object-key-init"),
      "bold-fraktur": cc11001100_hook("bold-fraktur", "MJXp-frak MJXp-bold", "object-key-init"),
      monospace: cc11001100_hook("monospace", "MJXp-mono", "object-key-init"),
      "sans-serif": cc11001100_hook("sans-serif", "MJXp-sf", "object-key-init"),
      "-tex-caligraphic": cc11001100_hook("-tex-caligraphic", "MJXp-cal", "object-key-init")
    },
    MATHSPACE: {
      veryverythinmathspace: cc11001100_hook("veryverythinmathspace", 1 / 18, "object-key-init"),
      verythinmathspace: cc11001100_hook("verythinmathspace", 2 / 18, "object-key-init"),
      thinmathspace: cc11001100_hook("thinmathspace", 3 / 18, "object-key-init"),
      mediummathspace: cc11001100_hook("mediummathspace", 4 / 18, "object-key-init"),
      thickmathspace: cc11001100_hook("thickmathspace", 5 / 18, "object-key-init"),
      verythickmathspace: cc11001100_hook("verythickmathspace", 6 / 18, "object-key-init"),
      veryverythickmathspace: cc11001100_hook("veryverythickmathspace", 7 / 18, "object-key-init"),
      negativeveryverythinmathspace: cc11001100_hook("negativeveryverythinmathspace", -1 / 18, "object-key-init"),
      negativeverythinmathspace: cc11001100_hook("negativeverythinmathspace", -2 / 18, "object-key-init"),
      negativethinmathspace: cc11001100_hook("negativethinmathspace", -3 / 18, "object-key-init"),
      negativemediummathspace: cc11001100_hook("negativemediummathspace", -4 / 18, "object-key-init"),
      negativethickmathspace: cc11001100_hook("negativethickmathspace", -5 / 18, "object-key-init"),
      negativeverythickmathspace: cc11001100_hook("negativeverythickmathspace", -6 / 18, "object-key-init"),
      negativeveryverythickmathspace: cc11001100_hook("negativeveryverythickmathspace", -7 / 18, "object-key-init"),
      thin: cc11001100_hook("thin", 0.08, "object-key-init"),
      medium: cc11001100_hook("medium", 0.1, "object-key-init"),
      thick: cc11001100_hook("thick", 0.15, "object-key-init"),
      infinity: cc11001100_hook("infinity", k, "object-key-init")
    },
    TeX: {
      x_height: cc11001100_hook("x_height", 0.430554, "object-key-init")
    },
    pxPerInch: cc11001100_hook("pxPerInch", 72, "object-key-init"),
    em: cc11001100_hook("em", 16, "object-key-init"),
    DELIMITERS: {
      "(": {
        dir: cc11001100_hook("dir", c, "object-key-init")
      },
      "{": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.58, "object-key-init")
      },
      "[": {
        dir: cc11001100_hook("dir", c, "object-key-init")
      },
      "|": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.275, "object-key-init")
      },
      ")": {
        dir: cc11001100_hook("dir", c, "object-key-init")
      },
      "}": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.58, "object-key-init")
      },
      "]": {
        dir: cc11001100_hook("dir", c, "object-key-init")
      },
      "/": {
        dir: cc11001100_hook("dir", c, "object-key-init")
      },
      "\\": {
        dir: cc11001100_hook("dir", c, "object-key-init")
      },
      "\u2223": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.275, "object-key-init")
      },
      "\u2225": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.55, "object-key-init")
      },
      "\u230A": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.5, "object-key-init")
      },
      "\u230B": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.5, "object-key-init")
      },
      "\u2308": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.5, "object-key-init")
      },
      "\u2309": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.5, "object-key-init")
      },
      "\u27E8": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.5, "object-key-init")
      },
      "\u27E9": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.5, "object-key-init")
      },
      "\u2191": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.65, "object-key-init")
      },
      "\u2193": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.65, "object-key-init")
      },
      "\u21D1": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.75, "object-key-init")
      },
      "\u21D3": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.75, "object-key-init")
      },
      "\u2195": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.65, "object-key-init")
      },
      "\u21D5": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.75, "object-key-init")
      },
      "\u27EE": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.275, "object-key-init")
      },
      "\u27EF": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.275, "object-key-init")
      },
      "\u23B0": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.6, "object-key-init")
      },
      "\u23B1": {
        dir: cc11001100_hook("dir", c, "object-key-init"),
        w: cc11001100_hook("w", 0.6, "object-key-init")
      }
    },
    REMAPACCENT: {
      "\u20D7": cc11001100_hook("\u20D7", "\u2192", "object-key-init"),
      "'": cc11001100_hook("'", "\u02CB", "object-key-init"),
      "`": cc11001100_hook("`", "\u02CA", "object-key-init"),
      ".": cc11001100_hook(".", "\u02D9", "object-key-init"),
      "^": cc11001100_hook("^", "\u02C6", "object-key-init"),
      "-": cc11001100_hook("-", "\u02C9", "object-key-init"),
      "~": cc11001100_hook("~", "\u02DC", "object-key-init"),
      "\u00AF": cc11001100_hook("\u00AF", "\u02C9", "object-key-init"),
      "\u00B0": cc11001100_hook("\u00B0", "\u02DA", "object-key-init"),
      "\u00B4": cc11001100_hook("\u00B4", "\u02CA", "object-key-init"),
      "\u0300": cc11001100_hook("\u0300", "\u02CB", "object-key-init"),
      "\u0301": cc11001100_hook("\u0301", "\u02CA", "object-key-init"),
      "\u0302": cc11001100_hook("\u0302", "\u02C6", "object-key-init"),
      "\u0303": cc11001100_hook("\u0303", "\u02DC", "object-key-init"),
      "\u0304": cc11001100_hook("\u0304", "\u02C9", "object-key-init"),
      "\u0305": cc11001100_hook("\u0305", "\u02C9", "object-key-init"),
      "\u0306": cc11001100_hook("\u0306", "\u02D8", "object-key-init"),
      "\u0307": cc11001100_hook("\u0307", "\u02D9", "object-key-init"),
      "\u0308": cc11001100_hook("\u0308", "\u00A8", "object-key-init"),
      "\u030C": cc11001100_hook("\u030C", "\u02C7", "object-key-init")
    },
    REMAPACCENTUNDER: {},
    length2em: function (r, p) {
      if (typeof r !== "string") {
        r = cc11001100_hook("r", r.toString(), "assign");
      }
      if (r === "") {
        return "";
      }
      if (r === h.SIZE.NORMAL) {
        return 1;
      }
      if (r === h.SIZE.BIG) {
        return 2;
      }
      if (r === h.SIZE.SMALL) {
        return 0.71;
      }
      if (this.MATHSPACE[r]) {
        return this.MATHSPACE[r];
      }
      var o = cc11001100_hook("o", r.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/), "var-init");
      var n = cc11001100_hook("n", parseFloat(o[1] || "1"), "var-init"),
        q = cc11001100_hook("q", o[2], "var-init");
      if (p == null) {
        p = cc11001100_hook("p", 1, "assign");
      }
      if (q === "em") {
        return n;
      }
      if (q === "ex") {
        return n * this.TeX.x_height;
      }
      if (q === "%") {
        return n / 100 * p;
      }
      if (q === "px") {
        return n / this.em;
      }
      if (q === "pt") {
        return n / 10;
      }
      if (q === "pc") {
        return n * 1.2;
      }
      if (q === "in") {
        return n * this.pxPerInch / this.em;
      }
      if (q === "cm") {
        return n * this.pxPerInch / this.em / 2.54;
      }
      if (q === "mm") {
        return n * this.pxPerInch / this.em / 25.4;
      }
      if (q === "mu") {
        return n / 18;
      }
      return n * p;
    },
    Em: function (n) {
      if (Math.abs(n) < 0.001) {
        return "0em";
      }
      return n.toFixed(3).replace(/\.?0+$/, "") + "em";
    },
    arrayEntry: function (n, o) {
      return n[Math.max(0, Math.min(o, n.length - 1))];
    }
  });
  MathJax.Hub.Register.StartupHook("mml Jax Ready", function () {
    h = cc11001100_hook("h", MathJax.ElementJax.mml, "assign");
    h.mbase.Augment({
      toPreviewHTML: function (o, n) {
        return this.PHTMLdefaultSpan(o, n);
      },
      PHTMLdefaultSpan: function (q, o) {
        if (!o) {
          o = cc11001100_hook("o", {}, "assign");
        }
        q = cc11001100_hook("q", this.PHTMLcreateSpan(q), "assign");
        this.PHTMLhandleStyle(q);
        this.PHTMLhandleColor(q);
        if (this.isToken) {
          this.PHTMLhandleToken(q);
        }
        for (var p = cc11001100_hook("p", 0, "var-init"), n = cc11001100_hook("n", this.data.length, "var-init"); p < n; p++) {
          this.PHTMLaddChild(q, p, o);
        }
        return q;
      },
      PHTMLaddChild: function (p, o, n) {
        var q = cc11001100_hook("q", this.data[o], "var-init");
        if (q) {
          if (n.childSpans) {
            p = cc11001100_hook("p", e.addElement(p, "span", {
              className: cc11001100_hook("className", n.className, "object-key-init")
            }), "assign");
          }
          q.toPreviewHTML(p);
          if (!n.noBBox) {
            this.PHTML.w += cc11001100_hook("this.PHTML.w", q.PHTML.w + q.PHTML.l + q.PHTML.r, "assign");
            if (q.PHTML.h > this.PHTML.h) {
              this.PHTML.h = cc11001100_hook("this.PHTML.h", q.PHTML.h, "assign");
            }
            if (q.PHTML.d > this.PHTML.d) {
              this.PHTML.d = cc11001100_hook("this.PHTML.d", q.PHTML.d, "assign");
            }
            if (q.PHTML.t > this.PHTML.t) {
              this.PHTML.t = cc11001100_hook("this.PHTML.t", q.PHTML.t, "assign");
            }
            if (q.PHTML.b > this.PHTML.b) {
              this.PHTML.b = cc11001100_hook("this.PHTML.b", q.PHTML.b, "assign");
            }
          }
        } else {
          if (n.forceChild) {
            e.addElement(p, "span");
          }
        }
      },
      PHTMLstretchChild: function (q, p, s) {
        var r = cc11001100_hook("r", this.data[q], "var-init");
        if (r && r.PHTMLcanStretch("Vertical", p, s)) {
          var t = cc11001100_hook("t", this.PHTML, "var-init"),
            o = cc11001100_hook("o", r.PHTML, "var-init"),
            n = cc11001100_hook("n", o.w, "var-init");
          r.PHTMLstretchV(p, s);
          t.w += cc11001100_hook("t.w", o.w - n, "assign");
          if (o.h > t.h) {
            t.h = cc11001100_hook("t.h", o.h, "assign");
          }
          if (o.d > t.d) {
            t.d = cc11001100_hook("t.d", o.d, "assign");
          }
        }
      },
      PHTMLcreateSpan: function (n) {
        if (!this.PHTML) {
          this.PHTML = cc11001100_hook("this.PHTML", {}, "assign");
        }
        this.PHTML = cc11001100_hook("this.PHTML", {
          w: cc11001100_hook("w", 0, "object-key-init"),
          h: cc11001100_hook("h", 0, "object-key-init"),
          d: cc11001100_hook("d", 0, "object-key-init"),
          l: cc11001100_hook("l", 0, "object-key-init"),
          r: cc11001100_hook("r", 0, "object-key-init"),
          t: cc11001100_hook("t", 0, "object-key-init"),
          b: cc11001100_hook("b", 0, "object-key-init")
        }, "assign");
        if (this.inferred) {
          return n;
        }
        if (this.type === "mo" && this.data.join("") === "\u222B") {
          g.lastIsInt = cc11001100_hook("g.lastIsInt", true, "assign");
        } else {
          if (this.type !== "mspace" || this.width !== "negativethinmathspace") {
            g.lastIsInt = cc11001100_hook("g.lastIsInt", false, "assign");
          }
        }
        if (!this.PHTMLspanID) {
          this.PHTMLspanID = cc11001100_hook("this.PHTMLspanID", g.GetID(), "assign");
        }
        var o = cc11001100_hook("o", this.id || "MJXp-Span-" + this.PHTMLspanID, "var-init");
        return e.addElement(n, "span", {
          className: cc11001100_hook("className", "MJXp-" + this.type, "object-key-init"),
          id: cc11001100_hook("id", o, "object-key-init")
        });
      },
      PHTMLspanElement: function () {
        if (!this.PHTMLspanID) {
          return null;
        }
        return document.getElementById(this.id || "MJXp-Span-" + this.PHTMLspanID);
      },
      PHTMLhandleToken: function (o) {
        var n = cc11001100_hook("n", this.getValues("mathvariant"), "var-init");
        if (n.mathvariant !== h.VARIANT.NORMAL) {
          o.className += cc11001100_hook("o.className", " " + g.VARIANT[n.mathvariant], "assign");
        }
      },
      PHTMLhandleStyle: function (n) {
        if (this.style) {
          n.style.cssText = cc11001100_hook("n.style.cssText", this.style, "assign");
        }
      },
      PHTMLhandleColor: function (n) {
        if (this.mathcolor) {
          n.style.color = cc11001100_hook("n.style.color", this.mathcolor, "assign");
        }
        if (this.mathbackground) {
          n.style.backgroundColor = cc11001100_hook("n.style.backgroundColor", this.mathbackground, "assign");
        }
      },
      PHTMLhandleScriptlevel: function (n) {
        var o = cc11001100_hook("o", this.Get("scriptlevel"), "var-init");
        if (o) {
          n.className += cc11001100_hook("n.className", " MJXp-script", "assign");
        }
      },
      PHTMLhandleText: function (y, A) {
        var v, p;
        var z = cc11001100_hook("z", 0, "var-init"),
          o = cc11001100_hook("o", 0, "var-init"),
          q = cc11001100_hook("q", 0, "var-init");
        for (var s = cc11001100_hook("s", 0, "var-init"), r = cc11001100_hook("r", A.length, "var-init"); s < r; s++) {
          p = cc11001100_hook("p", A.charCodeAt(s), "assign");
          v = cc11001100_hook("v", A.charAt(s), "assign");
          if (p >= 55296 && p < 56319) {
            s++;
            p = cc11001100_hook("p", (p - 55296 << 10) + (A.charCodeAt(s) - 56320) + 65536, "assign");
          }
          var t = cc11001100_hook("t", 0.7, "var-init"),
            u = cc11001100_hook("u", 0.22, "var-init"),
            x = cc11001100_hook("x", 0.5, "var-init");
          if (p < 127) {
            if (v.match(/[A-Za-ehik-or-xz0-9]/)) {
              u = cc11001100_hook("u", 0, "assign");
            }
            if (v.match(/[A-HK-Z]/)) {
              x = cc11001100_hook("x", 0.67, "assign");
            } else {
              if (v.match(/[IJ]/)) {
                x = cc11001100_hook("x", 0.36, "assign");
              }
            }
            if (v.match(/[acegm-su-z]/)) {
              t = cc11001100_hook("t", 0.45, "assign");
            } else {
              if (v.match(/[ij]/)) {
                t = cc11001100_hook("t", 0.75, "assign");
              }
            }
            if (v.match(/[ijlt]/)) {
              x = cc11001100_hook("x", 0.28, "assign");
            }
          }
          if (g.DELIMITERS[v]) {
            x = cc11001100_hook("x", g.DELIMITERS[v].w || 0.4, "assign");
          }
          if (t > z) {
            z = cc11001100_hook("z", t, "assign");
          }
          if (u > o) {
            o = cc11001100_hook("o", u, "assign");
          }
          q += cc11001100_hook("q", x, "assign");
        }
        if (!this.CHML) {
          this.PHTML = cc11001100_hook("this.PHTML", {}, "assign");
        }
        this.PHTML = cc11001100_hook("this.PHTML", {
          h: cc11001100_hook("h", 0.9, "object-key-init"),
          d: cc11001100_hook("d", 0.3, "object-key-init"),
          w: cc11001100_hook("w", q, "object-key-init"),
          l: cc11001100_hook("l", 0, "object-key-init"),
          r: cc11001100_hook("r", 0, "object-key-init"),
          t: cc11001100_hook("t", z, "object-key-init"),
          b: cc11001100_hook("b", o, "object-key-init")
        }, "assign");
        e.addText(y, A);
      },
      PHTMLbboxFor: function (o) {
        if (this.data[o] && this.data[o].PHTML) {
          return this.data[o].PHTML;
        }
        return {
          w: cc11001100_hook("w", 0, "object-key-init"),
          h: cc11001100_hook("h", 0, "object-key-init"),
          d: cc11001100_hook("d", 0, "object-key-init"),
          l: cc11001100_hook("l", 0, "object-key-init"),
          r: cc11001100_hook("r", 0, "object-key-init"),
          t: cc11001100_hook("t", 0, "object-key-init"),
          b: cc11001100_hook("b", 0, "object-key-init")
        };
      },
      PHTMLcanStretch: function (q, o, p) {
        if (this.isEmbellished()) {
          var n = cc11001100_hook("n", this.Core(), "var-init");
          if (n && n !== this) {
            return n.PHTMLcanStretch(q, o, p);
          }
        }
        return false;
      },
      PHTMLstretchV: function (n, o) {},
      PHTMLstretchH: function (n) {},
      CoreParent: function () {
        var n = cc11001100_hook("n", this, "var-init");
        while (n && n.isEmbellished() && n.CoreMO() === this && !n.isa(h.math)) {
          n = cc11001100_hook("n", n.Parent(), "assign");
        }
        return n;
      },
      CoreText: function (n) {
        if (!n) {
          return "";
        }
        if (n.isEmbellished()) {
          return n.CoreMO().data.join("");
        }
        while ((n.isa(h.mrow) || n.isa(h.TeXAtom) || n.isa(h.mstyle) || n.isa(h.mphantom)) && n.data.length === 1 && n.data[0]) {
          n = cc11001100_hook("n", n.data[0], "assign");
        }
        if (!n.isToken) {
          return "";
        } else {
          return n.data.join("");
        }
      }
    });
    h.chars.Augment({
      toPreviewHTML: function (n) {
        var o = cc11001100_hook("o", this.toString().replace(/[\u2061-\u2064]/g, ""), "var-init");
        this.PHTMLhandleText(n, o);
      }
    });
    h.entity.Augment({
      toPreviewHTML: function (n) {
        var o = cc11001100_hook("o", this.toString().replace(/[\u2061-\u2064]/g, ""), "var-init");
        this.PHTMLhandleText(n, o);
      }
    });
    h.math.Augment({
      toPreviewHTML: function (n) {
        n = cc11001100_hook("n", this.PHTMLdefaultSpan(n), "assign");
        if (this.Get("display") === "block") {
          n.className += cc11001100_hook("n.className", " MJXp-display", "assign");
        }
        return n;
      }
    });
    h.mo.Augment({
      toPreviewHTML: function (o) {
        o = cc11001100_hook("o", this.PHTMLdefaultSpan(o), "assign");
        this.PHTMLadjustAccent(o);
        var n = cc11001100_hook("n", this.getValues("lspace", "rspace", "scriptlevel", "displaystyle", "largeop"), "var-init");
        if (n.scriptlevel === 0) {
          this.PHTML.l = cc11001100_hook("this.PHTML.l", g.length2em(n.lspace), "assign");
          this.PHTML.r = cc11001100_hook("this.PHTML.r", g.length2em(n.rspace), "assign");
          o.style.marginLeft = cc11001100_hook("o.style.marginLeft", g.Em(this.PHTML.l), "assign");
          o.style.marginRight = cc11001100_hook("o.style.marginRight", g.Em(this.PHTML.r), "assign");
        } else {
          this.PHTML.l = cc11001100_hook("this.PHTML.l", 0.15, "assign");
          this.PHTML.r = cc11001100_hook("this.PHTML.r", 0.1, "assign");
        }
        if (n.displaystyle && n.largeop) {
          var p = cc11001100_hook("p", e.Element("span", {
            className: cc11001100_hook("className", "MJXp-largeop", "object-key-init")
          }), "var-init");
          p.appendChild(o.firstChild);
          o.appendChild(p);
          this.PHTML.h *= cc11001100_hook("this.PHTML.h", 1.2, "assign");
          this.PHTML.d *= cc11001100_hook("this.PHTML.d", 1.2, "assign");
          if (this.data.join("") === "\u222B") {
            p.className += cc11001100_hook("p.className", " MJXp-int", "assign");
          }
        }
        return o;
      },
      PHTMLadjustAccent: function (p) {
        var o = cc11001100_hook("o", this.CoreParent(), "var-init");
        if (o && o.isa(h.munderover) && this.CoreText(o.data[o.base]).length === 1) {
          var q = cc11001100_hook("q", o.data[o.over], "var-init"),
            n = cc11001100_hook("n", o.data[o.under], "var-init");
          var s = cc11001100_hook("s", this.data.join(""), "var-init"),
            r;
          if (q && this === q.CoreMO() && o.Get("accent")) {
            r = cc11001100_hook("r", g.REMAPACCENT[s], "assign");
          } else {
            if (n && this === n.CoreMO() && o.Get("accentunder")) {
              r = cc11001100_hook("r", g.REMAPACCENTUNDER[s], "assign");
            }
          }
          if (r) {
            s = cc11001100_hook("s", p.innerHTML = cc11001100_hook("p.innerHTML", r, "assign"), "assign");
          }
          if (s.match(/[\u02C6-\u02DC\u00A8]/)) {
            this.PHTML.acc = cc11001100_hook("this.PHTML.acc", -0.52, "assign");
          } else {
            if (s === "\u2192") {
              this.PHTML.acc = cc11001100_hook("this.PHTML.acc", -0.15, "assign");
              this.PHTML.vec = cc11001100_hook("this.PHTML.vec", true, "assign");
            }
          }
        }
      },
      PHTMLcanStretch: function (q, o, p) {
        if (!this.Get("stretchy")) {
          return false;
        }
        var r = cc11001100_hook("r", this.data.join(""), "var-init");
        if (r.length > 1) {
          return false;
        }
        r = cc11001100_hook("r", g.DELIMITERS[r], "assign");
        var n = cc11001100_hook("n", r && r.dir === q.substr(0, 1), "var-init");
        if (n) {
          n = cc11001100_hook("n", this.PHTML.h !== o || this.PHTML.d !== p || this.Get("minsize", true) || this.Get("maxsize", true), "assign");
        }
        return n;
      },
      PHTMLstretchV: function (p, u) {
        var o = cc11001100_hook("o", this.PHTMLspanElement(), "var-init"),
          t = cc11001100_hook("t", this.PHTML, "var-init");
        var n = cc11001100_hook("n", this.getValues("symmetric", "maxsize", "minsize"), "var-init");
        if (n.symmetric) {
          l = cc11001100_hook("l", 2 * Math.max(p - 0.25, u + 0.25), "assign");
        } else {
          l = cc11001100_hook("l", p + u, "assign");
        }
        n.maxsize = cc11001100_hook("n.maxsize", g.length2em(n.maxsize, t.h + t.d), "assign");
        n.minsize = cc11001100_hook("n.minsize", g.length2em(n.minsize, t.h + t.d), "assign");
        l = cc11001100_hook("l", Math.max(n.minsize, Math.min(n.maxsize, l)), "assign");
        var s = cc11001100_hook("s", l / (t.h + t.d - 0.3), "var-init");
        var q = cc11001100_hook("q", e.Element("span", {
          style: {
            "font-size": cc11001100_hook("font-size", g.Em(s), "object-key-init")
          }
        }), "var-init");
        if (s > 1.25) {
          var r = cc11001100_hook("r", Math.ceil(1.25 / s * 10), "var-init");
          q.className = cc11001100_hook("q.className", "MJXp-right MJXp-scale" + r, "assign");
          q.style.marginLeft = cc11001100_hook("q.style.marginLeft", g.Em(t.w * (r / 10 - 1) + 0.07), "assign");
          t.w *= cc11001100_hook("t.w", s * r / 10, "assign");
        }
        q.appendChild(o.firstChild);
        o.appendChild(q);
        if (n.symmetric) {
          o.style.verticalAlign = cc11001100_hook("o.style.verticalAlign", g.Em(0.25 * (1 - s)), "assign");
        }
      }
    });
    h.mspace.Augment({
      toPreviewHTML: function (q) {
        q = cc11001100_hook("q", this.PHTMLdefaultSpan(q), "assign");
        var o = cc11001100_hook("o", this.getValues("height", "depth", "width"), "var-init");
        var n = cc11001100_hook("n", g.length2em(o.width), "var-init"),
          p = cc11001100_hook("p", g.length2em(o.height), "var-init"),
          s = cc11001100_hook("s", g.length2em(o.depth), "var-init");
        var r = cc11001100_hook("r", this.PHTML, "var-init");
        r.w = cc11001100_hook("r.w", n, "assign");
        r.h = cc11001100_hook("r.h", p, "assign");
        r.d = cc11001100_hook("r.d", s, "assign");
        if (n < 0) {
          if (!g.lastIsInt) {
            q.style.marginLeft = cc11001100_hook("q.style.marginLeft", g.Em(n), "assign");
          }
          n = cc11001100_hook("n", 0, "assign");
        }
        q.style.width = cc11001100_hook("q.style.width", g.Em(n), "assign");
        q.style.height = cc11001100_hook("q.style.height", g.Em(p + s), "assign");
        if (s) {
          q.style.verticalAlign = cc11001100_hook("q.style.verticalAlign", g.Em(-s), "assign");
        }
        return q;
      }
    });
    h.mpadded.Augment({
      toPreviewHTML: function (u) {
        u = cc11001100_hook("u", this.PHTMLdefaultSpan(u, {
          childSpans: cc11001100_hook("childSpans", true, "object-key-init"),
          className: cc11001100_hook("className", "MJXp-box", "object-key-init"),
          forceChild: cc11001100_hook("forceChild", true, "object-key-init")
        }), "assign");
        var o = cc11001100_hook("o", u.firstChild, "var-init");
        var v = cc11001100_hook("v", this.getValues("width", "height", "depth", "lspace", "voffset"), "var-init");
        var s = cc11001100_hook("s", this.PHTMLdimen(v.lspace), "var-init");
        var q = cc11001100_hook("q", 0, "var-init"),
          n = cc11001100_hook("n", 0, "var-init"),
          t = cc11001100_hook("t", s.len, "var-init"),
          r = cc11001100_hook("r", -s.len, "var-init"),
          p = cc11001100_hook("p", 0, "var-init");
        if (v.width !== "") {
          s = cc11001100_hook("s", this.PHTMLdimen(v.width, "w", 0), "assign");
          if (s.pm) {
            r += cc11001100_hook("r", s.len, "assign");
          } else {
            u.style.width = cc11001100_hook("u.style.width", g.Em(s.len), "assign");
          }
        }
        if (v.height !== "") {
          s = cc11001100_hook("s", this.PHTMLdimen(v.height, "h", 0), "assign");
          if (!s.pm) {
            q += cc11001100_hook("q", -this.PHTMLbboxFor(0).h, "assign");
          }
          q += cc11001100_hook("q", s.len, "assign");
        }
        if (v.depth !== "") {
          s = cc11001100_hook("s", this.PHTMLdimen(v.depth, "d", 0), "assign");
          if (!s.pm) {
            n += cc11001100_hook("n", -this.PHTMLbboxFor(0).d, "assign");
            p += cc11001100_hook("p", -s.len, "assign");
          }
          n += cc11001100_hook("n", s.len, "assign");
        }
        if (v.voffset !== "") {
          s = cc11001100_hook("s", this.PHTMLdimen(v.voffset), "assign");
          q -= cc11001100_hook("q", s.len, "assign");
          n += cc11001100_hook("n", s.len, "assign");
          p += cc11001100_hook("p", s.len, "assign");
        }
        if (q) {
          o.style.marginTop = cc11001100_hook("o.style.marginTop", g.Em(q), "assign");
        }
        if (n) {
          o.style.marginBottom = cc11001100_hook("o.style.marginBottom", g.Em(n), "assign");
        }
        if (t) {
          o.style.marginLeft = cc11001100_hook("o.style.marginLeft", g.Em(t), "assign");
        }
        if (r) {
          o.style.marginRight = cc11001100_hook("o.style.marginRight", g.Em(r), "assign");
        }
        if (p) {
          u.style.verticalAlign = cc11001100_hook("u.style.verticalAlign", g.Em(p), "assign");
        }
        return u;
      },
      PHTMLdimen: function (q, r, n) {
        if (n == null) {
          n = cc11001100_hook("n", -k, "assign");
        }
        q = cc11001100_hook("q", String(q), "assign");
        var o = cc11001100_hook("o", q.match(/width|height|depth/), "var-init");
        var p = cc11001100_hook("p", o ? this.PHTML[o[0].charAt(0)] : r ? this.PHTML[r] : 0, "var-init");
        return {
          len: cc11001100_hook("len", g.length2em(q, p) || 0, "object-key-init"),
          pm: cc11001100_hook("pm", !!q.match(/^[-+]/), "object-key-init")
        };
      }
    });
    h.munderover.Augment({
      toPreviewHTML: function (r) {
        var t = cc11001100_hook("t", this.getValues("displaystyle", "accent", "accentunder", "align"), "var-init");
        var n = cc11001100_hook("n", this.data[this.base], "var-init");
        if (!t.displaystyle && n != null && (n.movablelimits || n.CoreMO().Get("movablelimits"))) {
          r = cc11001100_hook("r", h.msubsup.prototype.toPreviewHTML.call(this, r), "assign");
          r.className = cc11001100_hook("r.className", r.className.replace(/munderover/, "msubsup"), "assign");
          return r;
        }
        r = cc11001100_hook("r", this.PHTMLdefaultSpan(r, {
          childSpans: cc11001100_hook("childSpans", true, "object-key-init"),
          className: cc11001100_hook("className", "", "object-key-init"),
          noBBox: cc11001100_hook("noBBox", true, "object-key-init")
        }), "assign");
        var p = cc11001100_hook("p", this.PHTMLbboxFor(this.over), "var-init"),
          v = cc11001100_hook("v", this.PHTMLbboxFor(this.under), "var-init"),
          u = cc11001100_hook("u", this.PHTMLbboxFor(this.base), "var-init"),
          s = cc11001100_hook("s", this.PHTML, "var-init"),
          o = cc11001100_hook("o", p.acc, "var-init");
        if (this.data[this.over]) {
          if (r.lastChild.firstChild) {
            r.lastChild.firstChild.style.marginLeft = cc11001100_hook("r.lastChild.firstChild.style.marginLeft", p.l = cc11001100_hook("p.l", r.lastChild.firstChild.style.marginRight = cc11001100_hook("r.lastChild.firstChild.style.marginRight", p.r = cc11001100_hook("p.r", 0, "assign"), "assign"), "assign"), "assign");
          }
          var q = cc11001100_hook("q", e.Element("span", {}, [["span", {
            className: cc11001100_hook("className", "MJXp-over", "object-key-init")
          }]]), "var-init");
          q.firstChild.appendChild(r.lastChild);
          if (r.childNodes.length > (this.data[this.under] ? 1 : 0)) {
            q.firstChild.appendChild(r.firstChild);
          }
          this.data[this.over].PHTMLhandleScriptlevel(q.firstChild.firstChild);
          if (o != null) {
            if (p.vec) {
              q.firstChild.firstChild.firstChild.style.fontSize = cc11001100_hook("q.firstChild.firstChild.firstChild.style.fontSize", "60%", "assign");
              p.h *= cc11001100_hook("p.h", 0.6, "assign");
              p.d *= cc11001100_hook("p.d", 0.6, "assign");
              p.w *= cc11001100_hook("p.w", 0.6, "assign");
            }
            o = cc11001100_hook("o", o - p.d + 0.1, "assign");
            if (u.t != null) {
              o += cc11001100_hook("o", u.t - u.h, "assign");
            }
            q.firstChild.firstChild.style.marginBottom = cc11001100_hook("q.firstChild.firstChild.style.marginBottom", g.Em(o), "assign");
          }
          if (r.firstChild) {
            r.insertBefore(q, r.firstChild);
          } else {
            r.appendChild(q);
          }
        }
        if (this.data[this.under]) {
          if (r.lastChild.firstChild) {
            r.lastChild.firstChild.style.marginLeft = cc11001100_hook("r.lastChild.firstChild.style.marginLeft", v.l = cc11001100_hook("v.l", r.lastChild.firstChild.marginRight = cc11001100_hook("r.lastChild.firstChild.marginRight", v.r = cc11001100_hook("v.r", 0, "assign"), "assign"), "assign"), "assign");
          }
          this.data[this.under].PHTMLhandleScriptlevel(r.lastChild);
        }
        s.w = cc11001100_hook("s.w", Math.max(0.8 * p.w, 0.8 * v.w, u.w), "assign");
        s.h = cc11001100_hook("s.h", 0.8 * (p.h + p.d + (o || 0)) + u.h, "assign");
        s.d = cc11001100_hook("s.d", u.d + 0.8 * (v.h + v.d), "assign");
        return r;
      }
    });
    h.msubsup.Augment({
      toPreviewHTML: function (q) {
        q = cc11001100_hook("q", this.PHTMLdefaultSpan(q, {
          noBBox: cc11001100_hook("noBBox", true, "object-key-init")
        }), "assign");
        if (!this.data[this.base]) {
          if (q.firstChild) {
            q.insertBefore(e.Element("span"), q.firstChild);
          } else {
            q.appendChild(e.Element("span"));
          }
        }
        var s = cc11001100_hook("s", this.data[this.base], "var-init"),
          p = cc11001100_hook("p", this.data[this.sub], "var-init"),
          n = cc11001100_hook("n", this.data[this.sup], "var-init");
        if (!s) {
          s = cc11001100_hook("s", {
            bbox: {
              h: cc11001100_hook("h", 0.8, "object-key-init"),
              d: cc11001100_hook("d", 0.2, "object-key-init")
            }
          }, "assign");
        }
        q.firstChild.style.marginRight = cc11001100_hook("q.firstChild.style.marginRight", ".05em", "assign");
        var o = cc11001100_hook("o", Math.max(0.4, s.PHTML.h - 0.4), "var-init"),
          u = cc11001100_hook("u", Math.max(0.2, s.PHTML.d + 0.1), "var-init");
        var t = cc11001100_hook("t", this.PHTML, "var-init");
        if (n && p) {
          var r = cc11001100_hook("r", e.Element("span", {
            className: cc11001100_hook("className", "MJXp-script-box", "object-key-init"),
            style: {
              height: cc11001100_hook("height", g.Em(o + n.PHTML.h * 0.8 + u + p.PHTML.d * 0.8), "object-key-init"),
              "vertical-align": cc11001100_hook("vertical-align", g.Em(-u - p.PHTML.d * 0.8), "object-key-init")
            }
          }, [["span", {}, [["span", {}, [["span", {
            style: {
              "margin-bottom": cc11001100_hook("margin-bottom", g.Em(-(n.PHTML.d - 0.05)), "object-key-init")
            }
          }]]]]], ["span", {}, [["span", {}, [["span", {
            style: {
              "margin-top": cc11001100_hook("margin-top", g.Em(-(n.PHTML.h - 0.05)), "object-key-init")
            }
          }]]]]]]), "var-init");
          p.PHTMLhandleScriptlevel(r.firstChild);
          n.PHTMLhandleScriptlevel(r.lastChild);
          r.firstChild.firstChild.firstChild.appendChild(q.lastChild);
          r.lastChild.firstChild.firstChild.appendChild(q.lastChild);
          q.appendChild(r);
          t.h = cc11001100_hook("t.h", Math.max(s.PHTML.h, n.PHTML.h * 0.8 + o), "assign");
          t.d = cc11001100_hook("t.d", Math.max(s.PHTML.d, p.PHTML.d * 0.8 + u), "assign");
          t.w = cc11001100_hook("t.w", s.PHTML.w + Math.max(n.PHTML.w, p.PHTML.w) + 0.07, "assign");
        } else {
          if (n) {
            q.lastChild.style.verticalAlign = cc11001100_hook("q.lastChild.style.verticalAlign", g.Em(o), "assign");
            n.PHTMLhandleScriptlevel(q.lastChild);
            t.h = cc11001100_hook("t.h", Math.max(s.PHTML.h, n.PHTML.h * 0.8 + o), "assign");
            t.d = cc11001100_hook("t.d", Math.max(s.PHTML.d, n.PHTML.d * 0.8 - o), "assign");
            t.w = cc11001100_hook("t.w", s.PHTML.w + n.PHTML.w + 0.07, "assign");
          } else {
            if (p) {
              q.lastChild.style.verticalAlign = cc11001100_hook("q.lastChild.style.verticalAlign", g.Em(-u), "assign");
              p.PHTMLhandleScriptlevel(q.lastChild);
              t.h = cc11001100_hook("t.h", Math.max(s.PHTML.h, p.PHTML.h * 0.8 - u), "assign");
              t.d = cc11001100_hook("t.d", Math.max(s.PHTML.d, p.PHTML.d * 0.8 + u), "assign");
              t.w = cc11001100_hook("t.w", s.PHTML.w + p.PHTML.w + 0.07, "assign");
            }
          }
        }
        return q;
      }
    });
    h.mfrac.Augment({
      toPreviewHTML: function (r) {
        r = cc11001100_hook("r", this.PHTMLdefaultSpan(r, {
          childSpans: cc11001100_hook("childSpans", true, "object-key-init"),
          className: cc11001100_hook("className", "MJXp-box", "object-key-init"),
          forceChild: cc11001100_hook("forceChild", true, "object-key-init"),
          noBBox: cc11001100_hook("noBBox", true, "object-key-init")
        }), "assign");
        var o = cc11001100_hook("o", this.getValues("linethickness", "displaystyle"), "var-init");
        if (!o.displaystyle) {
          if (this.data[0]) {
            this.data[0].PHTMLhandleScriptlevel(r.firstChild);
          }
          if (this.data[1]) {
            this.data[1].PHTMLhandleScriptlevel(r.lastChild);
          }
        }
        var n = cc11001100_hook("n", e.Element("span", {
          className: cc11001100_hook("className", "MJXp-box", "object-key-init")
        }, [["span", {
          className: cc11001100_hook("className", "MJXp-denom", "object-key-init")
        }, [["span", {}, [["span", {
          className: cc11001100_hook("className", "MJXp-rule", "object-key-init"),
          style: {
            height: cc11001100_hook("height", "1em", "object-key-init")
          }
        }]]], ["span"]]]]), "var-init");
        n.firstChild.lastChild.appendChild(r.lastChild);
        r.appendChild(n);
        var s = cc11001100_hook("s", this.PHTMLbboxFor(0), "var-init"),
          p = cc11001100_hook("p", this.PHTMLbboxFor(1), "var-init"),
          v = cc11001100_hook("v", this.PHTML, "var-init");
        v.w = cc11001100_hook("v.w", Math.max(s.w, p.w) * 0.8, "assign");
        v.h = cc11001100_hook("v.h", s.h + s.d + 0.1 + 0.25, "assign");
        v.d = cc11001100_hook("v.d", p.h + p.d - 0.25, "assign");
        v.l = cc11001100_hook("v.l", v.r = cc11001100_hook("v.r", 0.125, "assign"), "assign");
        o.linethickness = cc11001100_hook("o.linethickness", Math.max(0, g.length2em(o.linethickness || "0", 0)), "assign");
        if (o.linethickness) {
          var u = cc11001100_hook("u", n.firstChild.firstChild.firstChild, "var-init");
          var q = cc11001100_hook("q", g.Em(o.linethickness), "var-init");
          u.style.borderTop = cc11001100_hook("u.style.borderTop", "none", "assign");
          u.style.borderBottom = cc11001100_hook("u.style.borderBottom", (o.linethickness < 0.15 ? "1px" : q) + " solid", "assign");
          u.style.margin = cc11001100_hook("u.style.margin", q + " 0", "assign");
          q = cc11001100_hook("q", o.linethickness, "assign");
          n.style.marginTop = cc11001100_hook("n.style.marginTop", g.Em(3 * q - 1.2), "assign");
          r.style.verticalAlign = cc11001100_hook("r.style.verticalAlign", g.Em(1.5 * q + 0.1), "assign");
          v.h += cc11001100_hook("v.h", 1.5 * q - 0.1, "assign");
          v.d += cc11001100_hook("v.d", 1.5 * q, "assign");
        } else {
          n.style.marginTop = cc11001100_hook("n.style.marginTop", "-.7em", "assign");
        }
        return r;
      }
    });
    h.msqrt.Augment({
      toPreviewHTML: function (n) {
        n = cc11001100_hook("n", this.PHTMLdefaultSpan(n, {
          childSpans: cc11001100_hook("childSpans", true, "object-key-init"),
          className: cc11001100_hook("className", "MJXp-box", "object-key-init"),
          forceChild: cc11001100_hook("forceChild", true, "object-key-init"),
          noBBox: cc11001100_hook("noBBox", true, "object-key-init")
        }), "assign");
        this.PHTMLlayoutRoot(n, n.firstChild);
        return n;
      },
      PHTMLlayoutRoot: function (u, n) {
        var v = cc11001100_hook("v", this.PHTMLbboxFor(0), "var-init");
        var q = cc11001100_hook("q", Math.ceil((v.h + v.d + 0.14) * 100), "var-init"),
          w = cc11001100_hook("w", g.Em(14 / q), "var-init");
        var r = cc11001100_hook("r", e.Element("span", {
          className: cc11001100_hook("className", "MJXp-surd", "object-key-init")
        }, [["span", {
          style: {
            "font-size": cc11001100_hook("font-size", q + "%", "object-key-init"),
            "margin-top": cc11001100_hook("margin-top", w, "object-key-init")
          }
        }, ["\u221A"]]]), "var-init");
        var s = cc11001100_hook("s", e.Element("span", {
          className: cc11001100_hook("className", "MJXp-root", "object-key-init")
        }, [["span", {
          className: cc11001100_hook("className", "MJXp-rule", "object-key-init"),
          style: {
            "border-top": cc11001100_hook("border-top", ".08em solid", "object-key-init")
          }
        }]]), "var-init");
        var p = cc11001100_hook("p", 1.2 / 2.2 * q / 100, "var-init");
        if (q > 150) {
          var o = cc11001100_hook("o", Math.ceil(150 / q * 10), "var-init");
          r.firstChild.className = cc11001100_hook("r.firstChild.className", "MJXp-right MJXp-scale" + o, "assign");
          r.firstChild.style.marginLeft = cc11001100_hook("r.firstChild.style.marginLeft", g.Em(p * (o / 10 - 1) / q * 100), "assign");
          p = cc11001100_hook("p", p * o / 10, "assign");
          s.firstChild.style.borderTopWidth = cc11001100_hook("s.firstChild.style.borderTopWidth", g.Em(0.08 / Math.sqrt(o / 10)), "assign");
        }
        s.appendChild(n);
        u.appendChild(r);
        u.appendChild(s);
        this.PHTML.h = cc11001100_hook("this.PHTML.h", v.h + 0.18, "assign");
        this.PHTML.d = cc11001100_hook("this.PHTML.d", v.d, "assign");
        this.PHTML.w = cc11001100_hook("this.PHTML.w", v.w + p, "assign");
        return u;
      }
    });
    h.mroot.Augment({
      toPreviewHTML: function (q) {
        q = cc11001100_hook("q", this.PHTMLdefaultSpan(q, {
          childSpans: cc11001100_hook("childSpans", true, "object-key-init"),
          className: cc11001100_hook("className", "MJXp-box", "object-key-init"),
          forceChild: cc11001100_hook("forceChild", true, "object-key-init"),
          noBBox: cc11001100_hook("noBBox", true, "object-key-init")
        }), "assign");
        var p = cc11001100_hook("p", this.PHTMLbboxFor(1), "var-init"),
          n = cc11001100_hook("n", q.removeChild(q.lastChild), "var-init");
        var t = cc11001100_hook("t", this.PHTMLlayoutRoot(e.Element("span"), q.firstChild), "var-init");
        n.className = cc11001100_hook("n.className", "MJXp-script", "assign");
        var u = cc11001100_hook("u", parseInt(t.firstChild.firstChild.style.fontSize), "var-init");
        var o = cc11001100_hook("o", 0.55 * (u / 120) + p.d * 0.8, "var-init"),
          s = cc11001100_hook("s", -0.6 * (u / 120), "var-init");
        if (u > 150) {
          s *= cc11001100_hook("s", 0.95 * Math.ceil(150 / u * 10) / 10, "assign");
        }
        n.style.marginRight = cc11001100_hook("n.style.marginRight", g.Em(s), "assign");
        n.style.verticalAlign = cc11001100_hook("n.style.verticalAlign", g.Em(o), "assign");
        if (-s > p.w * 0.8) {
          n.style.marginLeft = cc11001100_hook("n.style.marginLeft", g.Em(-s - p.w * 0.8), "assign");
        }
        q.appendChild(n);
        q.appendChild(t);
        this.PHTML.w += cc11001100_hook("this.PHTML.w", Math.max(0, p.w * 0.8 + s), "assign");
        this.PHTML.h = cc11001100_hook("this.PHTML.h", Math.max(this.PHTML.h, p.h * 0.8 + o), "assign");
        return q;
      },
      PHTMLlayoutRoot: cc11001100_hook("PHTMLlayoutRoot", h.msqrt.prototype.PHTMLlayoutRoot, "object-key-init")
    });
    h.mfenced.Augment({
      toPreviewHTML: function (q) {
        q = cc11001100_hook("q", this.PHTMLcreateSpan(q), "assign");
        this.PHTMLhandleStyle(q);
        this.PHTMLhandleColor(q);
        this.addFakeNodes();
        this.PHTMLaddChild(q, "open", {});
        for (var p = cc11001100_hook("p", 0, "var-init"), n = cc11001100_hook("n", this.data.length, "var-init"); p < n; p++) {
          this.PHTMLaddChild(q, "sep" + p, {});
          this.PHTMLaddChild(q, p, {});
        }
        this.PHTMLaddChild(q, "close", {});
        var o = cc11001100_hook("o", this.PHTML.h, "var-init"),
          r = cc11001100_hook("r", this.PHTML.d, "var-init");
        this.PHTMLstretchChild("open", o, r);
        for (p = cc11001100_hook("p", 0, "assign"), n = cc11001100_hook("n", this.data.length, "assign"); p < n; p++) {
          this.PHTMLstretchChild("sep" + p, o, r);
          this.PHTMLstretchChild(p, o, r);
        }
        this.PHTMLstretchChild("close", o, r);
        return q;
      }
    });
    h.mrow.Augment({
      toPreviewHTML: function (q) {
        q = cc11001100_hook("q", this.PHTMLdefaultSpan(q), "assign");
        var p = cc11001100_hook("p", this.PHTML.h, "var-init"),
          r = cc11001100_hook("r", this.PHTML.d, "var-init");
        for (var o = cc11001100_hook("o", 0, "var-init"), n = cc11001100_hook("n", this.data.length, "var-init"); o < n; o++) {
          this.PHTMLstretchChild(o, p, r);
        }
        return q;
      }
    });
    h.mstyle.Augment({
      toPreviewHTML: function (n) {
        n = cc11001100_hook("n", this.PHTMLdefaultSpan(n), "assign");
        this.PHTMLhandleScriptlevel(n);
        return n;
      }
    });
    h.TeXAtom.Augment({
      toPreviewHTML: function (n) {
        n = cc11001100_hook("n", this.PHTMLdefaultSpan(n), "assign");
        n.className = cc11001100_hook("n.className", "MJXp-mrow", "assign");
        return n;
      }
    });
    h.mtable.Augment({
      toPreviewHTML: function (E) {
        E = cc11001100_hook("E", this.PHTMLdefaultSpan(E, {
          noBBox: cc11001100_hook("noBBox", true, "object-key-init")
        }), "assign");
        var r = cc11001100_hook("r", this.getValues("columnalign", "rowalign", "columnspacing", "rowspacing", "columnwidth", "equalcolumns", "equalrows", "columnlines", "rowlines", "frame", "framespacing", "align", "width"), "var-init");
        var u = cc11001100_hook("u", MathJax.Hub.SplitList, "var-init"),
          F,
          A,
          D,
          z;
        var N = cc11001100_hook("N", u(r.columnspacing), "var-init"),
          w = cc11001100_hook("w", u(r.rowspacing), "var-init"),
          L = cc11001100_hook("L", u(r.columnalign), "var-init"),
          t = cc11001100_hook("t", u(r.rowalign), "var-init");
        for (F = cc11001100_hook("F", 0, "assign"), A = cc11001100_hook("A", N.length, "assign"); F < A; F++) {
          N[F] = cc11001100_hook("N[F]", g.length2em(N[F]), "assign");
        }
        for (F = cc11001100_hook("F", 0, "assign"), A = cc11001100_hook("A", w.length, "assign"); F < A; F++) {
          w[F] = cc11001100_hook("w[F]", g.length2em(w[F]), "assign");
        }
        var K = cc11001100_hook("K", e.Element("span"), "var-init");
        while (E.firstChild) {
          K.appendChild(E.firstChild);
        }
        E.appendChild(K);
        var y = cc11001100_hook("y", 0, "var-init"),
          s = cc11001100_hook("s", 0, "var-init");
        for (F = cc11001100_hook("F", 0, "assign"), A = cc11001100_hook("A", this.data.length, "assign"); F < A; F++) {
          var v = cc11001100_hook("v", this.data[F], "var-init");
          if (v) {
            var J = cc11001100_hook("J", g.arrayEntry(w, F - 1), "var-init"),
              C = cc11001100_hook("C", g.arrayEntry(t, F), "var-init");
            var x = cc11001100_hook("x", v.PHTML, "var-init"),
              q = cc11001100_hook("q", v.PHTMLspanElement(), "var-init");
            q.style.verticalAlign = cc11001100_hook("q.style.verticalAlign", C, "assign");
            var B = cc11001100_hook("B", v.type === "mlabeledtr" ? 1 : 0, "var-init");
            for (D = cc11001100_hook("D", 0, "assign"), z = cc11001100_hook("z", v.data.length, "assign"); D < z - B; D++) {
              var p = cc11001100_hook("p", v.data[D + B], "var-init");
              if (p) {
                var M = cc11001100_hook("M", g.arrayEntry(N, D - 1), "var-init"),
                  G = cc11001100_hook("G", g.arrayEntry(L, D), "var-init");
                var I = cc11001100_hook("I", p.PHTMLspanElement(), "var-init");
                if (D) {
                  x.w += cc11001100_hook("x.w", M, "assign");
                  I.style.paddingLeft = cc11001100_hook("I.style.paddingLeft", g.Em(M), "assign");
                }
                if (F) {
                  I.style.paddingTop = cc11001100_hook("I.style.paddingTop", g.Em(J), "assign");
                }
                I.style.textAlign = cc11001100_hook("I.style.textAlign", G, "assign");
              }
            }
            y += cc11001100_hook("y", x.h + x.d, "assign");
            if (F) {
              y += cc11001100_hook("y", J, "assign");
            }
            if (x.w > s) {
              s = cc11001100_hook("s", x.w, "assign");
            }
          }
        }
        var o = cc11001100_hook("o", this.PHTML, "var-init");
        o.w = cc11001100_hook("o.w", s, "assign");
        o.h = cc11001100_hook("o.h", y / 2 + 0.25, "assign");
        o.d = cc11001100_hook("o.d", y / 2 - 0.25, "assign");
        o.l = cc11001100_hook("o.l", o.r = cc11001100_hook("o.r", 0.125, "assign"), "assign");
        return E;
      }
    });
    h.mlabeledtr.Augment({
      PHTMLdefaultSpan: function (q, o) {
        if (!o) {
          o = cc11001100_hook("o", {}, "assign");
        }
        q = cc11001100_hook("q", this.PHTMLcreateSpan(q), "assign");
        this.PHTMLhandleStyle(q);
        this.PHTMLhandleColor(q);
        if (this.isToken) {
          this.PHTMLhandleToken(q);
        }
        for (var p = cc11001100_hook("p", 1, "var-init"), n = cc11001100_hook("n", this.data.length, "var-init"); p < n; p++) {
          this.PHTMLaddChild(q, p, o);
        }
        return q;
      }
    });
    h.semantics.Augment({
      toPreviewHTML: function (n) {
        n = cc11001100_hook("n", this.PHTMLcreateSpan(n), "assign");
        if (this.data[0]) {
          this.data[0].toPreviewHTML(n);
          MathJax.Hub.Insert(this.data[0].PHTML || {}, this.PHTML);
        }
        return n;
      }
    });
    h.annotation.Augment({
      toPreviewHTML: function (n) {}
    });
    h["annotation-xml"].Augment({
      toPreviewHTML: function (n) {}
    });
    MathJax.Hub.Register.StartupHook("onLoad", function () {
      setTimeout(MathJax.Callback(["loadComplete", g, "jax.js"]), 0);
    });
  });
  MathJax.Hub.Register.StartupHook("End Cookie", function () {
    if (b.config.menuSettings.zoom !== "None") {
      i.Require("[MathJax]/extensions/MathZoom.js");
    }
  });
})(MathJax.Ajax, MathJax.Hub, MathJax.HTML, MathJax.OutputJax.PreviewHTML);
(function (b, g, f) {
  var c = cc11001100_hook("c", b.config.menuSettings, "var-init");
  var e = cc11001100_hook("e", MathJax.OutputJax, "var-init");
  var a = cc11001100_hook("a", f.isMSIE && (document.documentMode || 0) < 8, "var-init");
  var d = cc11001100_hook("d", MathJax.Extension["fast-preview"] = cc11001100_hook("MathJax.Extension[\"fast-preview\"]", {
    version: cc11001100_hook("version", "2.7.2", "object-key-init"),
    enabled: cc11001100_hook("enabled", true, "object-key-init"),
    config: cc11001100_hook("config", b.CombineConfig("fast-preview", {
      Chunks: {
        EqnChunk: cc11001100_hook("EqnChunk", 10000, "object-key-init"),
        EqnChunkFactor: cc11001100_hook("EqnChunkFactor", 1, "object-key-init"),
        EqnChunkDelay: cc11001100_hook("EqnChunkDelay", 0, "object-key-init")
      },
      color: cc11001100_hook("color", "inherit!important", "object-key-init"),
      updateTime: cc11001100_hook("updateTime", 30, "object-key-init"),
      updateDelay: cc11001100_hook("updateDelay", 6, "object-key-init"),
      messageStyle: cc11001100_hook("messageStyle", "none", "object-key-init"),
      disabled: cc11001100_hook("disabled", f.isMSIE && !f.versionAtLeast("8.0"), "object-key-init")
    }), "object-key-init"),
    Config: function () {
      if (b.config["CHTML-preview"]) {
        MathJax.Hub.Config({
          "fast-preview": cc11001100_hook("fast-preview", b.config["CHTML-preview"], "object-key-init")
        });
      }
      var m, j, k, h, l;
      var i = cc11001100_hook("i", this.config, "var-init");
      if (!i.disabled && c.FastPreview == null) {
        b.Config({
          menuSettings: {
            FastPreview: cc11001100_hook("FastPreview", true, "object-key-init")
          }
        });
      }
      if (c.FastPreview) {
        MathJax.Ajax.Styles({
          ".MathJax_Preview .MJXf-math": {
            color: cc11001100_hook("color", i.color, "object-key-init")
          }
        });
        b.Config({
          "HTML-CSS": cc11001100_hook("HTML-CSS", i.Chunks, "object-key-init"),
          CommonHTML: cc11001100_hook("CommonHTML", i.Chunks, "object-key-init"),
          SVG: cc11001100_hook("SVG", i.Chunks, "object-key-init")
        });
      }
      b.Register.MessageHook("Begin Math Output", function () {
        if (!h && d.Active()) {
          m = cc11001100_hook("m", b.processUpdateTime, "assign");
          j = cc11001100_hook("j", b.processUpdateDelay, "assign");
          k = cc11001100_hook("k", b.config.messageStyle, "assign");
          b.processUpdateTime = cc11001100_hook("b.processUpdateTime", i.updateTime, "assign");
          b.processUpdateDelay = cc11001100_hook("b.processUpdateDelay", i.updateDelay, "assign");
          b.Config({
            messageStyle: cc11001100_hook("messageStyle", i.messageStyle, "object-key-init")
          });
          MathJax.Message.Clear(0, 0);
          l = cc11001100_hook("l", true, "assign");
        }
      });
      b.Register.MessageHook("End Math Output", function () {
        if (!h && l) {
          b.processUpdateTime = cc11001100_hook("b.processUpdateTime", m, "assign");
          b.processUpdateDelay = cc11001100_hook("b.processUpdateDelay", j, "assign");
          b.Config({
            messageStyle: cc11001100_hook("messageStyle", k, "object-key-init")
          });
          h = cc11001100_hook("h", true, "assign");
        }
      });
    },
    Disable: function () {
      this.enabled = cc11001100_hook("this.enabled", false, "assign");
    },
    Enable: function () {
      this.enabled = cc11001100_hook("this.enabled", true, "assign");
    },
    Active: function () {
      return c.FastPreview && this.enabled && !(e[c.renderer] || {}).noFastPreview;
    },
    Preview: function (h) {
      if (!this.Active() || !h.script.parentNode) {
        return;
      }
      var i = cc11001100_hook("i", h.script.MathJax.preview || h.script.previousSibling, "var-init");
      if (!i || i.className !== MathJax.Hub.config.preRemoveClass) {
        i = cc11001100_hook("i", g.Element("span", {
          className: cc11001100_hook("className", MathJax.Hub.config.preRemoveClass, "object-key-init")
        }), "assign");
        h.script.parentNode.insertBefore(i, h.script);
        h.script.MathJax.preview = cc11001100_hook("h.script.MathJax.preview", i, "assign");
      }
      i.innerHTML = cc11001100_hook("i.innerHTML", "", "assign");
      i.style.color = cc11001100_hook("i.style.color", a ? "black" : "inherit", "assign");
      return this.postFilter(i, h);
    },
    postFilter: function (j, i) {
      if (!i.math.root.toPreviewHTML) {
        var h = cc11001100_hook("h", MathJax.Callback.Queue(), "var-init");
        h.Push(["Require", MathJax.Ajax, "[MathJax]/jax/output/PreviewHTML/config.js"], ["Require", MathJax.Ajax, "[MathJax]/jax/output/PreviewHTML/jax.js"]);
        b.RestartAfter(h.Push({}));
      }
      i.math.root.toPreviewHTML(j);
    },
    Register: function (h) {
      b.Register.StartupHook(h + " Jax Require", function () {
        var i = cc11001100_hook("i", MathJax.InputJax[h], "var-init");
        i.postfilterHooks.Add(["Preview", MathJax.Extension["fast-preview"]], 50);
      });
    }
  }, "assign"), "var-init");
  d.Register("TeX");
  d.Register("MathML");
  d.Register("AsciiMath");
  b.Register.StartupHook("End Config", ["Config", d]);
  b.Startup.signal.Post("fast-preview Ready");
})(MathJax.Hub, MathJax.HTML, MathJax.Hub.Browser);
MathJax.Ajax.loadComplete("[MathJax]/extensions/fast-preview.js");
(function (a, e, b, f) {
  var c = cc11001100_hook("c", b.config.menuSettings, "var-init");
  var d = cc11001100_hook("d", MathJax.Extension.AssistiveMML = cc11001100_hook("MathJax.Extension.AssistiveMML", {
    version: cc11001100_hook("version", "2.7.2", "object-key-init"),
    config: cc11001100_hook("config", b.CombineConfig("AssistiveMML", {
      disabled: cc11001100_hook("disabled", false, "object-key-init"),
      styles: {
        ".MJX_Assistive_MathML": {
          position: cc11001100_hook("position", "absolute!important", "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          clip: cc11001100_hook("clip", b.Browser.isMSIE && (document.documentMode || 0) < 8 ? "rect(1px 1px 1px 1px)" : "rect(1px, 1px, 1px, 1px)", "object-key-init"),
          padding: cc11001100_hook("padding", "1px 0 0 0!important", "object-key-init"),
          border: cc11001100_hook("border", "0!important", "object-key-init"),
          height: cc11001100_hook("height", "1px!important", "object-key-init"),
          width: cc11001100_hook("width", "1px!important", "object-key-init"),
          overflow: cc11001100_hook("overflow", "hidden!important", "object-key-init"),
          display: cc11001100_hook("display", "block!important", "object-key-init"),
          "-webkit-touch-callout": cc11001100_hook("-webkit-touch-callout", "none", "object-key-init"),
          "-webkit-user-select": cc11001100_hook("-webkit-user-select", "none", "object-key-init"),
          "-khtml-user-select": cc11001100_hook("-khtml-user-select", "none", "object-key-init"),
          "-moz-user-select": cc11001100_hook("-moz-user-select", "none", "object-key-init"),
          "-ms-user-select": cc11001100_hook("-ms-user-select", "none", "object-key-init"),
          "user-select": cc11001100_hook("user-select", "none", "object-key-init")
        },
        ".MJX_Assistive_MathML.MJX_Assistive_MathML_Block": {
          width: cc11001100_hook("width", "100%!important", "object-key-init")
        }
      }
    }), "object-key-init"),
    Config: function () {
      if (!this.config.disabled && c.assistiveMML == null) {
        b.Config({
          menuSettings: {
            assistiveMML: cc11001100_hook("assistiveMML", true, "object-key-init")
          }
        });
      }
      a.Styles(this.config.styles);
      b.Register.MessageHook("End Math", function (g) {
        if (c.assistiveMML) {
          return d.AddAssistiveMathML(g[1]);
        }
      });
    },
    AddAssistiveMathML: function (g) {
      var h = cc11001100_hook("h", {
        jax: cc11001100_hook("jax", b.getAllJax(g), "object-key-init"),
        i: cc11001100_hook("i", 0, "object-key-init"),
        callback: cc11001100_hook("callback", MathJax.Callback({}), "object-key-init")
      }, "var-init");
      this.HandleMML(h);
      return h.callback;
    },
    RemoveAssistiveMathML: function (k) {
      var h = cc11001100_hook("h", b.getAllJax(k), "var-init"),
        l;
      for (var j = cc11001100_hook("j", 0, "var-init"), g = cc11001100_hook("g", h.length, "var-init"); j < g; j++) {
        l = cc11001100_hook("l", document.getElementById(h[j].inputID + "-Frame"), "assign");
        if (l && l.getAttribute("data-mathml")) {
          l.removeAttribute("data-mathml");
          if (l.lastChild && l.lastChild.className.match(/MJX_Assistive_MathML/)) {
            l.removeChild(l.lastChild);
          }
        }
      }
    },
    HandleMML: function (l) {
      var g = cc11001100_hook("g", l.jax.length, "var-init"),
        h,
        i,
        n,
        j;
      while (l.i < g) {
        h = cc11001100_hook("h", l.jax[l.i], "assign");
        n = cc11001100_hook("n", document.getElementById(h.inputID + "-Frame"), "assign");
        if (h.outputJax !== "NativeMML" && h.outputJax !== "PlainSource" && n && !n.getAttribute("data-mathml")) {
          try {
            i = cc11001100_hook("i", h.root.toMathML("").replace(/\n */g, "").replace(/<!--.*?-->/g, ""), "assign");
          } catch (k) {
            if (!k.restart) {
              throw k;
            }
            return MathJax.Callback.After(["HandleMML", this, l], k.restart);
          }
          n.setAttribute("data-mathml", i);
          j = cc11001100_hook("j", f.addElement(n, "span", {
            isMathJax: cc11001100_hook("isMathJax", true, "object-key-init"),
            unselectable: cc11001100_hook("unselectable", "on", "object-key-init"),
            className: cc11001100_hook("className", "MJX_Assistive_MathML" + (h.root.Get("display") === "block" ? " MJX_Assistive_MathML_Block" : ""), "object-key-init")
          }), "assign");
          try {
            j.innerHTML = cc11001100_hook("j.innerHTML", i, "assign");
          } catch (k) {}
          n.style.position = cc11001100_hook("n.style.position", "relative", "assign");
          n.setAttribute("role", "presentation");
          n.firstChild.setAttribute("aria-hidden", "true");
          j.setAttribute("role", "presentation");
        }
        l.i++;
      }
      l.callback();
    }
  }, "assign"), "var-init");
  b.Startup.signal.Post("AssistiveMML Ready");
})(MathJax.Ajax, MathJax.Callback, MathJax.Hub, MathJax.HTML);
MathJax.Callback.Queue(["Require", MathJax.Ajax, "[MathJax]/extensions/toMathML.js"], ["loadComplete", MathJax.Ajax, "[MathJax]/extensions/AssistiveMML.js"], function () {
  MathJax.Hub.Register.StartupHook("End Config", ["Config", MathJax.Extension.AssistiveMML]);
});
!function (a, b) {
  var c,
    d,
    e = cc11001100_hook("e", a.config.menuSettings, "var-init"),
    f = cc11001100_hook("f", Function.prototype.bind ? function (a, b) {
      return a.bind(b);
    } : function (a, b) {
      return function () {
        a.apply(b, arguments);
      };
    }, "var-init"),
    g = cc11001100_hook("g", Object.keys || function (a) {
      var b = cc11001100_hook("b", [], "var-init");
      for (var c in a) a.hasOwnProperty(c) && b.push(c);
      return b;
    }, "var-init"),
    h = cc11001100_hook("h", MathJax.Ajax.config.path, "var-init");
  h.a11y || (h.a11y = cc11001100_hook("h.a11y", a.config.root + "/extensions/a11y", "assign"));
  var i = cc11001100_hook("i", b["accessibility-menu"] = cc11001100_hook("b[\"accessibility-menu\"]", {
      version: cc11001100_hook("version", "1.2.3", "object-key-init"),
      prefix: cc11001100_hook("prefix", "", "object-key-init"),
      defaults: {},
      modules: cc11001100_hook("modules", [], "object-key-init"),
      MakeOption: function (a) {
        return i.prefix + a;
      },
      GetOption: function (a) {
        return e[i.MakeOption(a)];
      },
      AddDefaults: function () {
        for (var a, b = cc11001100_hook("b", g(i.defaults), "var-init"), c = cc11001100_hook("c", 0, "var-init"); a = cc11001100_hook("a", b[c], "assign"); c++) {
          var d = cc11001100_hook("d", i.MakeOption(a), "var-init");
          void 0 === e[d] && (e[d] = cc11001100_hook("e[d]", i.defaults[a], "assign"));
        }
      },
      AddMenu: function () {
        for (var a, b = cc11001100_hook("b", Array(this.modules.length), "var-init"), e = cc11001100_hook("e", 0, "var-init"); a = cc11001100_hook("a", this.modules[e], "assign"); e++) b[e] = cc11001100_hook("b[e]", a.placeHolder, "assign");
        var f = cc11001100_hook("f", d.FindId("Accessibility"), "var-init");
        if (f) b.unshift(c.RULE()), f.submenu.items.push.apply(f.submenu.items, b);else {
          var g = cc11001100_hook("g", (d.FindId("Settings", "Renderer") || {}).submenu, "var-init");
          g && (b.unshift(c.RULE()), b.unshift(g.items.pop()), b.unshift(g.items.pop())), b.unshift("Accessibility");
          var f = cc11001100_hook("f", c.SUBMENU.apply(c.SUBMENU, b), "var-init"),
            h = cc11001100_hook("h", d.IndexOfId("Locale"), "var-init");
          h ? d.items.splice(h, 0, f) : d.items.push(c.RULE(), f);
        }
      },
      Register: function (a) {
        i.defaults[a.option] = cc11001100_hook("i.defaults[a.option]", !1, "assign"), i.modules.push(a);
      },
      Startup: function () {
        c = cc11001100_hook("c", MathJax.Menu.ITEM, "assign"), d = cc11001100_hook("d", MathJax.Menu.menu, "assign");
        for (var a, b = cc11001100_hook("b", 0, "var-init"); a = cc11001100_hook("a", this.modules[b], "assign"); b++) a.CreateMenu();
        this.AddMenu();
      },
      LoadExtensions: function () {
        for (var b, c = cc11001100_hook("c", [], "var-init"), d = cc11001100_hook("d", 0, "var-init"); b = cc11001100_hook("b", this.modules[d], "assign"); d++) e[b.option] && c.push(b.module);
        return c.length ? a.Startup.loadArray(c) : null;
      }
    }, "assign"), "var-init"),
    j = cc11001100_hook("j", MathJax.Extension.ModuleLoader = cc11001100_hook("MathJax.Extension.ModuleLoader", MathJax.Object.Subclass({
      option: cc11001100_hook("option", "", "object-key-init"),
      name: cc11001100_hook("name", ["", ""], "object-key-init"),
      module: cc11001100_hook("module", "", "object-key-init"),
      placeHolder: cc11001100_hook("placeHolder", null, "object-key-init"),
      submenu: cc11001100_hook("submenu", !1, "object-key-init"),
      extension: cc11001100_hook("extension", null, "object-key-init"),
      Init: function (a, b, c, d, e) {
        this.option = cc11001100_hook("this.option", a, "assign"), this.name = cc11001100_hook("this.name", [b.replace(/ /g, ""), b], "assign"), this.module = cc11001100_hook("this.module", c, "assign"), this.extension = cc11001100_hook("this.extension", d, "assign"), this.submenu = cc11001100_hook("this.submenu", e || !1, "assign");
      },
      CreateMenu: function () {
        var a = cc11001100_hook("a", f(this.Load, this), "var-init");
        this.submenu ? this.placeHolder = cc11001100_hook("this.placeHolder", c.SUBMENU(this.name, c.CHECKBOX(["Activate", "Activate"], i.MakeOption(this.option), {
          action: cc11001100_hook("action", a, "object-key-init")
        }), c.RULE(), c.COMMAND(["OptionsWhenActive", "(Options when Active)"], null, {
          disabled: cc11001100_hook("disabled", !0, "object-key-init")
        })), "assign") : this.placeHolder = cc11001100_hook("this.placeHolder", c.CHECKBOX(this.name, i.MakeOption(this.option), {
          action: cc11001100_hook("action", a, "object-key-init")
        }), "assign");
      },
      Load: function () {
        a.Queue(["Require", MathJax.Ajax, this.module, ["Enable", this]]);
      },
      Enable: function (a) {
        var b = cc11001100_hook("b", MathJax.Extension[this.extension], "var-init");
        b && (b.Enable(!0, !0), MathJax.Menu.saveCookie());
      }
    }), "assign"), "var-init");
  i.Register(j("collapsible", "Collapsible Math", "[a11y]/collapsible.js", "collapsible")), i.Register(j("autocollapse", "Auto Collapse", "[a11y]/auto-collapse.js", "auto-collapse")), i.Register(j("explorer", "Explorer", "[a11y]/explorer.js", "explorer", !0)), i.AddDefaults(), a.Register.StartupHook("End Extensions", function () {
    a.Register.StartupHook("MathMenu Ready", function () {
      i.Startup(), a.Startup.signal.Post("Accessibility Menu Ready");
    }, 5);
  }, 5), MathJax.Hub.Register.StartupHook("End Cookie", function () {
    MathJax.Callback.Queue(["LoadExtensions", i], ["loadComplete", MathJax.Ajax, "[a11y]/accessibility-menu.js"]);
  });
}(MathJax.Hub, MathJax.Extension);
MathJax.Ajax.loadComplete("[MathJax]/config/TeX-AMS-MML_HTMLorMML.js");