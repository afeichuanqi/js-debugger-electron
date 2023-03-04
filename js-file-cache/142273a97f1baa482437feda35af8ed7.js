(function () {
  var l = cc11001100_hook("l", this, "var-init"),
    d = cc11001100_hook("d", l.Chart, "var-init"),
    c = function (a) {
      this.canvas = cc11001100_hook("this.canvas", a.canvas, "assign");
      this.ctx = cc11001100_hook("this.ctx", a, "assign");
      var g = function (a, g) {
        return a["offset" + g] ? a["offset" + g] : document.defaultView.getComputedStyle(a).getPropertyValue(g);
      };
      this.width = cc11001100_hook("this.width", g(a.canvas, "Width") || a.canvas.width, "assign");
      this.height = cc11001100_hook("this.height", g(a.canvas, "Height") || a.canvas.height, "assign");
      return this.aspectRatio = cc11001100_hook("this.aspectRatio", this.width / this.height, "assign"), b.retinaScale(this), this;
    };
  c.defaults = cc11001100_hook("c.defaults", {
    global: {
      animation: cc11001100_hook("animation", !0, "object-key-init"),
      animationSteps: cc11001100_hook("animationSteps", 60, "object-key-init"),
      animationEasing: cc11001100_hook("animationEasing", "easeOutQuart", "object-key-init"),
      showScale: cc11001100_hook("showScale", !0, "object-key-init"),
      scaleOverride: cc11001100_hook("scaleOverride", !1, "object-key-init"),
      scaleSteps: cc11001100_hook("scaleSteps", null, "object-key-init"),
      scaleStepWidth: cc11001100_hook("scaleStepWidth", null, "object-key-init"),
      scaleStartValue: cc11001100_hook("scaleStartValue", null, "object-key-init"),
      scaleLineColor: cc11001100_hook("scaleLineColor", "rgba(0,0,0,.1)", "object-key-init"),
      scaleLineWidth: cc11001100_hook("scaleLineWidth", 1, "object-key-init"),
      scaleShowLabels: cc11001100_hook("scaleShowLabels", !0, "object-key-init"),
      scaleLabel: cc11001100_hook("scaleLabel", "\x3c%\x3dvalue%\x3e", "object-key-init"),
      scaleIntegersOnly: cc11001100_hook("scaleIntegersOnly", !0, "object-key-init"),
      scaleBeginAtZero: cc11001100_hook("scaleBeginAtZero", !1, "object-key-init"),
      scaleFontFamily: cc11001100_hook("scaleFontFamily", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", "object-key-init"),
      scaleFontSize: cc11001100_hook("scaleFontSize", 12, "object-key-init"),
      scaleFontStyle: cc11001100_hook("scaleFontStyle", "normal", "object-key-init"),
      scaleFontColor: cc11001100_hook("scaleFontColor", "#666", "object-key-init"),
      responsive: cc11001100_hook("responsive", !1, "object-key-init"),
      maintainAspectRatio: cc11001100_hook("maintainAspectRatio", !0, "object-key-init"),
      showTooltips: cc11001100_hook("showTooltips", !0, "object-key-init"),
      customTooltips: cc11001100_hook("customTooltips", !1, "object-key-init"),
      tooltipEvents: cc11001100_hook("tooltipEvents", ["mousemove", "touchstart", "touchmove", "mouseout"], "object-key-init"),
      tooltipFillColor: cc11001100_hook("tooltipFillColor", "rgba(0,0,0,0.8)", "object-key-init"),
      tooltipFontFamily: cc11001100_hook("tooltipFontFamily", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", "object-key-init"),
      tooltipFontSize: cc11001100_hook("tooltipFontSize", 14, "object-key-init"),
      tooltipFontStyle: cc11001100_hook("tooltipFontStyle", "normal", "object-key-init"),
      tooltipFontColor: cc11001100_hook("tooltipFontColor", "#fff", "object-key-init"),
      tooltipTitleFontFamily: cc11001100_hook("tooltipTitleFontFamily", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", "object-key-init"),
      tooltipTitleFontSize: cc11001100_hook("tooltipTitleFontSize", 14, "object-key-init"),
      tooltipTitleFontStyle: cc11001100_hook("tooltipTitleFontStyle", "bold", "object-key-init"),
      tooltipTitleFontColor: cc11001100_hook("tooltipTitleFontColor", "#fff", "object-key-init"),
      tooltipTitleTemplate: cc11001100_hook("tooltipTitleTemplate", "\x3c%\x3d label%\x3e", "object-key-init"),
      tooltipYPadding: cc11001100_hook("tooltipYPadding", 6, "object-key-init"),
      tooltipXPadding: cc11001100_hook("tooltipXPadding", 6, "object-key-init"),
      tooltipCaretSize: cc11001100_hook("tooltipCaretSize", 8, "object-key-init"),
      tooltipCornerRadius: cc11001100_hook("tooltipCornerRadius", 6, "object-key-init"),
      tooltipXOffset: cc11001100_hook("tooltipXOffset", 10, "object-key-init"),
      tooltipTemplate: cc11001100_hook("tooltipTemplate", "\x3c%if (label){%\x3e\x3c%\x3dlabel%\x3e: \x3c%}%\x3e\x3c%\x3d value %\x3e", "object-key-init"),
      multiTooltipTemplate: cc11001100_hook("multiTooltipTemplate", "\x3c%\x3d datasetLabel %\x3e: \x3c%\x3d value %\x3e", "object-key-init"),
      multiTooltipKeyBackground: cc11001100_hook("multiTooltipKeyBackground", "#fff", "object-key-init"),
      segmentColorDefault: cc11001100_hook("segmentColorDefault", "#A6CEE3 #1F78B4 #B2DF8A #33A02C #FB9A99 #E31A1C #FDBF6F #FF7F00 #CAB2D6 #6A3D9A #B4B482 #B15928".split(" "), "object-key-init"),
      segmentHighlightColorDefaults: cc11001100_hook("segmentHighlightColorDefaults", "#CEF6FF #47A0DC #DAFFB2 #5BC854 #FFC2C1 #FF4244 #FFE797 #FFA728 #F2DAFE #9265C2 #DCDCAA #D98150".split(" "), "object-key-init"),
      onAnimationProgress: function () {},
      onAnimationComplete: function () {}
    }
  }, "assign");
  c.types = cc11001100_hook("c.types", {}, "assign");
  var b = cc11001100_hook("b", c.helpers = cc11001100_hook("c.helpers", {}, "assign"), "var-init"),
    e = cc11001100_hook("e", b.each = cc11001100_hook("b.each", function (a, g, f) {
      var b = cc11001100_hook("b", Array.prototype.slice.call(arguments, 3), "var-init");
      if (a) if (a.length === +a.length) {
        var e;
        for (e = cc11001100_hook("e", 0, "assign"); e < a.length; e++) g.apply(f, [a[e], e].concat(b));
      } else for (e in a) g.apply(f, [a[e], e].concat(b));
    }, "assign"), "var-init"),
    h = cc11001100_hook("h", b.clone = cc11001100_hook("b.clone", function (a) {
      var g = cc11001100_hook("g", {}, "var-init");
      return e(a, function (f, b) {
        a.hasOwnProperty(b) && (g[b] = cc11001100_hook("g[b]", f, "assign"));
      }), g;
    }, "assign"), "var-init"),
    k = cc11001100_hook("k", b.extend = cc11001100_hook("b.extend", function (a) {
      return e(Array.prototype.slice.call(arguments, 1), function (g) {
        e(g, function (f, b) {
          g.hasOwnProperty(b) && (a[b] = cc11001100_hook("a[b]", f, "assign"));
        });
      }), a;
    }, "assign"), "var-init"),
    u = cc11001100_hook("u", b.merge = cc11001100_hook("b.merge", function (a, g) {
      var f = cc11001100_hook("f", Array.prototype.slice.call(arguments, 0), "var-init");
      return f.unshift({}), k.apply(null, f);
    }, "assign"), "var-init"),
    G = cc11001100_hook("G", b.indexOf = cc11001100_hook("b.indexOf", function (a, g) {
      if (Array.prototype.indexOf) return a.indexOf(g);
      for (var f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) if (a[f] === g) return f;
      return -1;
    }, "assign"), "var-init"),
    n = cc11001100_hook("n", (b.where = cc11001100_hook("b.where", function (a, g) {
      var f = cc11001100_hook("f", [], "var-init");
      return b.each(a, function (a) {
        g(a) && f.push(a);
      }), f;
    }, "assign"), b.findNextWhere = cc11001100_hook("b.findNextWhere", function (a, g, f) {
      f || (f = cc11001100_hook("f", -1, "assign"));
      for (f += cc11001100_hook("f", 1, "assign"); f < a.length; f++) {
        var b = cc11001100_hook("b", a[f], "var-init");
        if (g(b)) return b;
      }
    }, "assign"), b.findPreviousWhere = cc11001100_hook("b.findPreviousWhere", function (a, g, f) {
      f || (f = cc11001100_hook("f", a.length, "assign"));
      for (--f; 0 <= f; f--) {
        var b = cc11001100_hook("b", a[f], "var-init");
        if (g(b)) return b;
      }
    }, "assign"), b.inherits = cc11001100_hook("b.inherits", function (a) {
      var g = cc11001100_hook("g", this, "var-init"),
        f = cc11001100_hook("f", a && a.hasOwnProperty("constructor") ? a.constructor : function () {
          return g.apply(this, arguments);
        }, "var-init"),
        b = function () {
          this.constructor = cc11001100_hook("this.constructor", f, "assign");
        };
      return b.prototype = cc11001100_hook("b.prototype", g.prototype, "assign"), f.prototype = cc11001100_hook("f.prototype", new b(), "assign"), f.extend = cc11001100_hook("f.extend", n, "assign"), a && k(f.prototype, a), f.__super__ = cc11001100_hook("f.__super__", g.prototype, "assign"), f;
    }, "assign")), "var-init"),
    m = cc11001100_hook("m", b.noop = cc11001100_hook("b.noop", function () {}, "assign"), "var-init"),
    H = cc11001100_hook("H", b.uid = cc11001100_hook("b.uid", function () {
      var a = cc11001100_hook("a", 0, "var-init");
      return function () {
        return "chart-" + a++;
      };
    }(), "assign"), "var-init"),
    I = cc11001100_hook("I", b.warn = cc11001100_hook("b.warn", function (a) {
      window.console && "function" == typeof window.console.warn && console.warn(a);
    }, "assign"), "var-init"),
    J = cc11001100_hook("J", b.amd = cc11001100_hook("b.amd", "function" == typeof define && define.amd, "assign"), "var-init"),
    q = cc11001100_hook("q", b.isNumber = cc11001100_hook("b.isNumber", function (a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
    }, "assign"), "var-init"),
    x = cc11001100_hook("x", b.max = cc11001100_hook("b.max", function (a) {
      return Math.max.apply(Math, a);
    }, "assign"), "var-init"),
    v = cc11001100_hook("v", b.min = cc11001100_hook("b.min", function (a) {
      return Math.min.apply(Math, a);
    }, "assign"), "var-init"),
    C = cc11001100_hook("C", (b.cap = cc11001100_hook("b.cap", function (a, g, f) {
      if (q(g)) {
        if (a > g) return g;
      } else if (q(f) && f > a) return f;
      return a;
    }, "assign"), b.getDecimalPlaces = cc11001100_hook("b.getDecimalPlaces", function (a) {
      if (0 !== a % 1 && q(a)) {
        a = cc11001100_hook("a", a.toString(), "assign");
        if (0 > a.indexOf("e-")) return a.split(".")[1].length;
        if (0 > a.indexOf(".")) return parseInt(a.split("e-")[1]);
        a = cc11001100_hook("a", a.split(".")[1].split("e-"), "assign");
        return a[0].length + parseInt(a[1]);
      }
      return 0;
    }, "assign")), "var-init"),
    z = cc11001100_hook("z", b.radians = cc11001100_hook("b.radians", function (a) {
      return Math.PI / 180 * a;
    }, "assign"), "var-init"),
    D = cc11001100_hook("D", (b.getAngleFromPoint = cc11001100_hook("b.getAngleFromPoint", function (a, g) {
      var f = cc11001100_hook("f", g.x - a.x, "var-init"),
        b = cc11001100_hook("b", g.y - a.y, "var-init"),
        e = cc11001100_hook("e", Math.sqrt(f * f + b * b), "var-init"),
        c = cc11001100_hook("c", 2 * Math.PI + Math.atan2(b, f), "var-init");
      return 0 > f && 0 > b && (c += cc11001100_hook("c", 2 * Math.PI, "assign")), {
        angle: cc11001100_hook("angle", c, "object-key-init"),
        distance: cc11001100_hook("distance", e, "object-key-init")
      };
    }, "assign"), b.aliasPixel = cc11001100_hook("b.aliasPixel", function (a) {
      return 0 === a % 2 ? 0 : .5;
    }, "assign")), "var-init"),
    K = cc11001100_hook("K", (b.splineCurve = cc11001100_hook("b.splineCurve", function (a, g, f, b) {
      var e = cc11001100_hook("e", Math.sqrt(Math.pow(g.x - a.x, 2) + Math.pow(g.y - a.y, 2)), "var-init"),
        c = cc11001100_hook("c", Math.sqrt(Math.pow(f.x - g.x, 2) + Math.pow(f.y - g.y, 2)), "var-init"),
        d = cc11001100_hook("d", b * e / (e + c), "var-init");
      b = cc11001100_hook("b", b * c / (e + c), "assign");
      return {
        inner: {
          x: cc11001100_hook("x", g.x - d * (f.x - a.x), "object-key-init"),
          y: cc11001100_hook("y", g.y - d * (f.y - a.y), "object-key-init")
        },
        outer: {
          x: cc11001100_hook("x", g.x + b * (f.x - a.x), "object-key-init"),
          y: cc11001100_hook("y", g.y + b * (f.y - a.y), "object-key-init")
        }
      };
    }, "assign"), b.calculateOrderOfMagnitude = cc11001100_hook("b.calculateOrderOfMagnitude", function (a) {
      return Math.floor(Math.log(a) / Math.LN10);
    }, "assign")), "var-init"),
    r = cc11001100_hook("r", (b.calculateScaleRange = cc11001100_hook("b.calculateScaleRange", function (a, g, f, b, c) {
      g = cc11001100_hook("g", Math.floor(g / (1.5 * f)), "assign");
      f = cc11001100_hook("f", 2 >= g, "assign");
      var d = cc11001100_hook("d", [], "var-init");
      e(a, function (a) {
        null == a || d.push(a);
      });
      var h = cc11001100_hook("h", v(d), "var-init"),
        k = cc11001100_hook("k", x(d), "var-init");
      k === h && (k += cc11001100_hook("k", .5, "assign"), .5 <= h && !b ? h -= cc11001100_hook("h", .5, "assign") : k += cc11001100_hook("k", .5, "assign"));
      a = cc11001100_hook("a", Math.abs(k - h), "assign");
      a = cc11001100_hook("a", K(a), "assign");
      k = cc11001100_hook("k", Math.ceil(k / (1 * Math.pow(10, a))) * Math.pow(10, a), "assign");
      b = cc11001100_hook("b", b ? 0 : Math.floor(h / (1 * Math.pow(10, a))) * Math.pow(10, a), "assign");
      for (var h = cc11001100_hook("h", k - b, "var-init"), k = cc11001100_hook("k", Math.pow(10, a), "var-init"), p = cc11001100_hook("p", Math.round(h / k), "var-init"); (p > g || g > 2 * p) && !f;) if (p > g) k *= cc11001100_hook("k", 2, "assign"), p = cc11001100_hook("p", Math.round(h / k), "assign"), 0 !== p % 1 && (f = cc11001100_hook("f", !0, "assign"));else {
        if (c && 0 <= a && 0 !== k / 2 % 1) break;
        k /= cc11001100_hook("k", 2, "assign");
        p = cc11001100_hook("p", Math.round(h / k), "assign");
      }
      return f && (p = cc11001100_hook("p", 2, "assign"), k = cc11001100_hook("k", h / p, "assign")), {
        steps: cc11001100_hook("steps", p, "object-key-init"),
        stepValue: cc11001100_hook("stepValue", k, "object-key-init"),
        min: cc11001100_hook("min", b, "object-key-init"),
        max: cc11001100_hook("max", b + p * k, "object-key-init")
      };
    }, "assign"), b.template = cc11001100_hook("b.template", function (a, g) {
      if (a instanceof Function) return a(g);
      var f = cc11001100_hook("f", {}, "var-init"),
        f = cc11001100_hook("f", /\W/.test(a) ? new Function("obj", "var p\x3d[],print\x3dfunction(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("\x3c%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%\x3e").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : f[a] = cc11001100_hook("f[a]", f[a], "assign"), "var-init");
      return g ? f(g) : f;
    }, "assign")), "var-init"),
    w = cc11001100_hook("w", (b.generateLabels = cc11001100_hook("b.generateLabels", function (a, g, f, b) {
      var c = cc11001100_hook("c", Array(g), "var-init");
      return a && e(c, function (g, e) {
        c[e] = cc11001100_hook("c[e]", r(a, {
          value: cc11001100_hook("value", f + b * (e + 1), "object-key-init")
        }), "assign");
      }), c;
    }, "assign"), b.easingEffects = cc11001100_hook("b.easingEffects", {
      linear: function (a) {
        return a;
      },
      easeInQuad: function (a) {
        return a * a;
      },
      easeOutQuad: function (a) {
        return -1 * a * (a - 2);
      },
      easeInOutQuad: function (a) {
        return 1 > (a /= cc11001100_hook("a", .5, "assign")) ? .5 * a * a : -.5 * (--a * (a - 2) - 1);
      },
      easeInCubic: function (a) {
        return a * a * a;
      },
      easeOutCubic: function (a) {
        return 1 * ((a = cc11001100_hook("a", a / 1 - 1, "assign")) * a * a + 1);
      },
      easeInOutCubic: function (a) {
        return 1 > (a /= cc11001100_hook("a", .5, "assign")) ? .5 * a * a * a : .5 * ((a -= cc11001100_hook("a", 2, "assign")) * a * a + 2);
      },
      easeInQuart: function (a) {
        return a * a * a * a;
      },
      easeOutQuart: function (a) {
        return -1 * ((a = cc11001100_hook("a", a / 1 - 1, "assign")) * a * a * a - 1);
      },
      easeInOutQuart: function (a) {
        return 1 > (a /= cc11001100_hook("a", .5, "assign")) ? .5 * a * a * a * a : -.5 * ((a -= cc11001100_hook("a", 2, "assign")) * a * a * a - 2);
      },
      easeInQuint: function (a) {
        return 1 * (a /= cc11001100_hook("a", 1, "assign")) * a * a * a * a;
      },
      easeOutQuint: function (a) {
        return 1 * ((a = cc11001100_hook("a", a / 1 - 1, "assign")) * a * a * a * a + 1);
      },
      easeInOutQuint: function (a) {
        return 1 > (a /= cc11001100_hook("a", .5, "assign")) ? .5 * a * a * a * a * a : .5 * ((a -= cc11001100_hook("a", 2, "assign")) * a * a * a * a + 2);
      },
      easeInSine: function (a) {
        return -1 * Math.cos(a / 1 * (Math.PI / 2)) + 1;
      },
      easeOutSine: function (a) {
        return 1 * Math.sin(a / 1 * (Math.PI / 2));
      },
      easeInOutSine: function (a) {
        return -.5 * (Math.cos(Math.PI * a / 1) - 1);
      },
      easeInExpo: function (a) {
        return 0 === a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1));
      },
      easeOutExpo: function (a) {
        return 1 === a ? 1 : 1 * (-Math.pow(2, -10 * a / 1) + 1);
      },
      easeInOutExpo: function (a) {
        return 0 === a ? 0 : 1 === a ? 1 : 1 > (a /= cc11001100_hook("a", .5, "assign")) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2);
      },
      easeInCirc: function (a) {
        return 1 <= a ? a : -1 * (Math.sqrt(1 - (a /= cc11001100_hook("a", 1, "assign")) * a) - 1);
      },
      easeOutCirc: function (a) {
        return 1 * Math.sqrt(1 - (a = cc11001100_hook("a", a / 1 - 1, "assign")) * a);
      },
      easeInOutCirc: function (a) {
        return 1 > (a /= cc11001100_hook("a", .5, "assign")) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= cc11001100_hook("a", 2, "assign")) * a) + 1);
      },
      easeInElastic: function (a) {
        var g = cc11001100_hook("g", 1.70158, "var-init"),
          f = cc11001100_hook("f", 0, "var-init"),
          b = cc11001100_hook("b", 1, "var-init");
        return 0 === a ? 0 : 1 == (a /= cc11001100_hook("a", 1, "assign")) ? 1 : (f || (f = cc11001100_hook("f", .3, "assign")), b < Math.abs(1) ? (b = cc11001100_hook("b", 1, "assign"), g = cc11001100_hook("g", f / 4, "assign")) : g = cc11001100_hook("g", f / (2 * Math.PI) * Math.asin(1 / b), "assign"), -(b * Math.pow(2, 10 * --a) * Math.sin(2 * (1 * a - g) * Math.PI / f)));
      },
      easeOutElastic: function (a) {
        var g = cc11001100_hook("g", 1.70158, "var-init"),
          b = cc11001100_hook("b", 0, "var-init"),
          e = cc11001100_hook("e", 1, "var-init");
        return 0 === a ? 0 : 1 == (a /= cc11001100_hook("a", 1, "assign")) ? 1 : (b || (b = cc11001100_hook("b", .3, "assign")), e < Math.abs(1) ? (e = cc11001100_hook("e", 1, "assign"), g = cc11001100_hook("g", b / 4, "assign")) : g = cc11001100_hook("g", b / (2 * Math.PI) * Math.asin(1 / e), "assign"), e * Math.pow(2, -10 * a) * Math.sin(2 * (1 * a - g) * Math.PI / b) + 1);
      },
      easeInOutElastic: function (a) {
        var g = cc11001100_hook("g", 1.70158, "var-init"),
          b = cc11001100_hook("b", 0, "var-init"),
          e = cc11001100_hook("e", 1, "var-init");
        return 0 === a ? 0 : 2 == (a /= cc11001100_hook("a", .5, "assign")) ? 1 : (b || (b = cc11001100_hook("b", .3 * 1.5, "assign")), e < Math.abs(1) ? (e = cc11001100_hook("e", 1, "assign"), g = cc11001100_hook("g", b / 4, "assign")) : g = cc11001100_hook("g", b / (2 * Math.PI) * Math.asin(1 / e), "assign"), 1 > a ? -.5 * e * Math.pow(2, 10 * --a) * Math.sin(2 * (1 * a - g) * Math.PI / b) : e * Math.pow(2, -10 * --a) * Math.sin(2 * (1 * a - g) * Math.PI / b) * .5 + 1);
      },
      easeInBack: function (a) {
        return 1 * (a /= cc11001100_hook("a", 1, "assign")) * a * (2.70158 * a - 1.70158);
      },
      easeOutBack: function (a) {
        return 1 * ((a = cc11001100_hook("a", a / 1 - 1, "assign")) * a * (2.70158 * a + 1.70158) + 1);
      },
      easeInOutBack: function (a) {
        var g = cc11001100_hook("g", 1.70158, "var-init");
        return 1 > (a /= cc11001100_hook("a", .5, "assign")) ? .5 * a * a * (((g *= cc11001100_hook("g", 1.525, "assign")) + 1) * a - g) : .5 * ((a -= cc11001100_hook("a", 2, "assign")) * a * (((g *= cc11001100_hook("g", 1.525, "assign")) + 1) * a + g) + 2);
      },
      easeInBounce: function (a) {
        return 1 - w.easeOutBounce(1 - a);
      },
      easeOutBounce: function (a) {
        return (a /= cc11001100_hook("a", 1, "assign")) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 1 * (7.5625 * (a -= cc11001100_hook("a", 1.5 / 2.75, "assign")) * a + .75) : 2.5 / 2.75 > a ? 1 * (7.5625 * (a -= cc11001100_hook("a", 2.25 / 2.75, "assign")) * a + .9375) : 1 * (7.5625 * (a -= cc11001100_hook("a", 2.625 / 2.75, "assign")) * a + .984375);
      },
      easeInOutBounce: function (a) {
        return .5 > a ? .5 * w.easeInBounce(2 * a) : .5 * w.easeOutBounce(2 * a - 1) + .5;
      }
    }, "assign")), "var-init"),
    E = cc11001100_hook("E", b.requestAnimFrame = cc11001100_hook("b.requestAnimFrame", function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
        return window.setTimeout(a, 1E3 / 60);
      };
    }(), "assign"), "var-init"),
    L = cc11001100_hook("L", (b.cancelAnimFrame = cc11001100_hook("b.cancelAnimFrame", function () {
      return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (a) {
        return window.clearTimeout(a, 1E3 / 60);
      };
    }(), "assign"), b.animationLoop = cc11001100_hook("b.animationLoop", function (a, g, b, e, c, d) {
      var h = cc11001100_hook("h", 0, "var-init"),
        k = cc11001100_hook("k", w[b] || w.linear, "var-init"),
        p = function () {
          h++;
          var b = cc11001100_hook("b", h / g, "var-init"),
            f = cc11001100_hook("f", k(b), "var-init");
          a.call(d, f, b, h);
          e.call(d, f, b);
          g > h ? d.animationFrame = cc11001100_hook("d.animationFrame", E(p), "assign") : c.apply(d);
        };
      E(p);
    }, "assign"), b.getRelativePosition = cc11001100_hook("b.getRelativePosition", function (a) {
      var b,
        f,
        e = cc11001100_hook("e", a.originalEvent || a, "var-init");
      a = cc11001100_hook("a", (a.currentTarget || a.srcElement).getBoundingClientRect(), "assign");
      return e.touches ? (b = cc11001100_hook("b", e.touches[0].clientX - a.left, "assign"), f = cc11001100_hook("f", e.touches[0].clientY - a.top, "assign")) : (b = cc11001100_hook("b", e.clientX - a.left, "assign"), f = cc11001100_hook("f", e.clientY - a.top, "assign")), {
        x: cc11001100_hook("x", b, "object-key-init"),
        y: cc11001100_hook("y", f, "object-key-init")
      };
    }, "assign"), b.addEvent = cc11001100_hook("b.addEvent", function (a, b, f) {
      a.addEventListener ? a.addEventListener(b, f) : a.attachEvent ? a.attachEvent("on" + b, f) : a["on" + b] = cc11001100_hook("a[\"on\" + b]", f, "assign");
    }, "assign")), "var-init"),
    M = cc11001100_hook("M", b.removeEvent = cc11001100_hook("b.removeEvent", function (a, b, f) {
      a.removeEventListener ? a.removeEventListener(b, f, !1) : a.detachEvent ? a.detachEvent("on" + b, f) : a["on" + b] = cc11001100_hook("a[\"on\" + b]", m, "assign");
    }, "assign"), "var-init"),
    N = cc11001100_hook("N", (b.bindEvents = cc11001100_hook("b.bindEvents", function (a, b, f) {
      a.events || (a.events = cc11001100_hook("a.events", {}, "assign"));
      e(b, function (b) {
        a.events[b] = cc11001100_hook("a.events[b]", function () {
          f.apply(a, arguments);
        }, "assign");
        L(a.chart.canvas, b, a.events[b]);
      });
    }, "assign"), b.unbindEvents = cc11001100_hook("b.unbindEvents", function (a, b) {
      e(b, function (b, g) {
        M(a.chart.canvas, g, b);
      });
    }, "assign")), "var-init"),
    O = cc11001100_hook("O", b.getMaximumWidth = cc11001100_hook("b.getMaximumWidth", function (a) {
      a = cc11001100_hook("a", a.parentNode, "assign");
      var b = cc11001100_hook("b", parseInt(y(a, "padding-left")) + parseInt(y(a, "padding-right")), "var-init");
      return a ? a.clientWidth - b : 0;
    }, "assign"), "var-init"),
    P = cc11001100_hook("P", b.getMaximumHeight = cc11001100_hook("b.getMaximumHeight", function (a) {
      a = cc11001100_hook("a", a.parentNode, "assign");
      var b = cc11001100_hook("b", parseInt(y(a, "padding-bottom")) + parseInt(y(a, "padding-top")), "var-init");
      return a ? a.clientHeight - b : 0;
    }, "assign"), "var-init"),
    y = cc11001100_hook("y", b.getStyle = cc11001100_hook("b.getStyle", function (a, b) {
      return a.currentStyle ? a.currentStyle[b] : document.defaultView.getComputedStyle(a, null).getPropertyValue(b);
    }, "assign"), "var-init"),
    Q = cc11001100_hook("Q", (b.getMaximumSize = cc11001100_hook("b.getMaximumSize", b.getMaximumWidth, "assign"), b.retinaScale = cc11001100_hook("b.retinaScale", function (a) {
      var b = cc11001100_hook("b", a.ctx, "var-init"),
        f = cc11001100_hook("f", a.canvas.width, "var-init");
      a = cc11001100_hook("a", a.canvas.height, "assign");
      window.devicePixelRatio && (b.canvas.style.width = cc11001100_hook("b.canvas.style.width", f + "px", "assign"), b.canvas.style.height = cc11001100_hook("b.canvas.style.height", a + "px", "assign"), b.canvas.height = cc11001100_hook("b.canvas.height", a * window.devicePixelRatio, "assign"), b.canvas.width = cc11001100_hook("b.canvas.width", f * window.devicePixelRatio, "assign"), b.scale(window.devicePixelRatio, window.devicePixelRatio));
    }, "assign")), "var-init"),
    R = cc11001100_hook("R", b.clear = cc11001100_hook("b.clear", function (a) {
      a.ctx.clearRect(0, 0, a.width, a.height);
    }, "assign"), "var-init"),
    t = cc11001100_hook("t", b.fontString = cc11001100_hook("b.fontString", function (a, b, f) {
      return b + " " + a + "px " + f;
    }, "assign"), "var-init"),
    A = cc11001100_hook("A", b.longestText = cc11001100_hook("b.longestText", function (a, b, f) {
      a.font = cc11001100_hook("a.font", b, "assign");
      var c = cc11001100_hook("c", 0, "var-init");
      return e(f, function (b) {
        b = cc11001100_hook("b", a.measureText(b).width, "assign");
        c = cc11001100_hook("c", b > c ? b : c, "assign");
      }), c;
    }, "assign"), "var-init"),
    F = cc11001100_hook("F", b.drawRoundedRectangle = cc11001100_hook("b.drawRoundedRectangle", function (a, b, f, e, c, d) {
      a.beginPath();
      a.moveTo(b + d, f);
      a.lineTo(b + e - d, f);
      a.quadraticCurveTo(b + e, f, b + e, f + d);
      a.lineTo(b + e, f + c - d);
      a.quadraticCurveTo(b + e, f + c, b + e - d, f + c);
      a.lineTo(b + d, f + c);
      a.quadraticCurveTo(b, f + c, b, f + c - d);
      a.lineTo(b, f + d);
      a.quadraticCurveTo(b, f, b + d, f);
      a.closePath();
    }, "assign"), "var-init");
  c.instances = cc11001100_hook("c.instances", {}, "assign");
  c.Type = cc11001100_hook("c.Type", function (a, b, f) {
    this.options = cc11001100_hook("this.options", b, "assign");
    this.chart = cc11001100_hook("this.chart", f, "assign");
    this.id = cc11001100_hook("this.id", H(), "assign");
    c.instances[this.id] = cc11001100_hook("c.instances[this.id]", this, "assign");
    b.responsive && this.resize();
    this.initialize.call(this, a);
  }, "assign");
  k(c.Type.prototype, {
    initialize: function () {
      return this;
    },
    clear: function () {
      return R(this.chart), this;
    },
    stop: function () {
      return c.animationService.cancelAnimation(this), this;
    },
    resize: function (a) {
      this.stop();
      var b = cc11001100_hook("b", this.chart.canvas, "var-init"),
        f = cc11001100_hook("f", O(this.chart.canvas), "var-init"),
        e = cc11001100_hook("e", this.options.maintainAspectRatio ? f / this.chart.aspectRatio : P(this.chart.canvas), "var-init");
      return b.width = cc11001100_hook("b.width", this.chart.width = cc11001100_hook("this.chart.width", f, "assign"), "assign"), b.height = cc11001100_hook("b.height", this.chart.height = cc11001100_hook("this.chart.height", e, "assign"), "assign"), Q(this.chart), "function" == typeof a && a.apply(this, Array.prototype.slice.call(arguments, 1)), this;
    },
    reflow: cc11001100_hook("reflow", m, "object-key-init"),
    render: function (a) {
      (a && this.reflow(), this.options.animation && !a) ? (a = cc11001100_hook("a", new c.Animation(), "assign"), a.numSteps = cc11001100_hook("a.numSteps", this.options.animationSteps, "assign"), a.easing = cc11001100_hook("a.easing", this.options.animationEasing, "assign"), a.render = cc11001100_hook("a.render", function (a, f) {
        var e = cc11001100_hook("e", f.currentStep / f.numSteps, "var-init"),
          c = cc11001100_hook("c", (0, b.easingEffects[f.easing])(e), "var-init");
        a.draw(c, e, f.currentStep);
      }, "assign"), a.onAnimationProgress = cc11001100_hook("a.onAnimationProgress", this.options.onAnimationProgress, "assign"), a.onAnimationComplete = cc11001100_hook("a.onAnimationComplete", this.options.onAnimationComplete, "assign"), c.animationService.addAnimation(this, a)) : (this.draw(), this.options.onAnimationComplete.call(this));
      return this;
    },
    generateLegend: function () {
      return b.template(this.options.legendTemplate, this);
    },
    destroy: function () {
      this.stop();
      this.clear();
      N(this, this.events);
      var a = cc11001100_hook("a", this.chart.canvas, "var-init");
      a.width = cc11001100_hook("a.width", this.chart.width, "assign");
      a.height = cc11001100_hook("a.height", this.chart.height, "assign");
      a.style.removeProperty ? (a.style.removeProperty("width"), a.style.removeProperty("height")) : (a.style.removeAttribute("width"), a.style.removeAttribute("height"));
      delete c.instances[this.id];
    },
    showTooltip: function (a, g) {
      "undefined" == typeof this.activeElements && (this.activeElements = cc11001100_hook("this.activeElements", [], "assign"));
      if (function (a) {
        var b = cc11001100_hook("b", !1, "var-init");
        return a.length !== this.activeElements.length ? b = cc11001100_hook("b", !0, "assign") : (e(a, function (a, f) {
          a !== this.activeElements[f] && (b = cc11001100_hook("b", !0, "assign"));
        }, this), b);
      }.call(this, a) || g) {
        if (this.activeElements = cc11001100_hook("this.activeElements", a, "assign"), this.draw(), this.options.customTooltips && this.options.customTooltips(!1), 0 < a.length) if (this.datasets && 1 < this.datasets.length) {
          for (var f, d, h = cc11001100_hook("h", this.datasets.length - 1, "var-init"); 0 <= h && (f = cc11001100_hook("f", this.datasets[h].points || this.datasets[h].bars || this.datasets[h].segments, "assign"), d = cc11001100_hook("d", G(f, a[0]), "assign"), -1 === d); h--);
          var k = cc11001100_hook("k", [], "var-init"),
            m = cc11001100_hook("m", [], "var-init");
          f = cc11001100_hook("f", function (a) {
            var f,
              e,
              g,
              c,
              h,
              B = cc11001100_hook("B", [], "var-init"),
              l = cc11001100_hook("l", [], "var-init"),
              u = cc11001100_hook("u", [], "var-init");
            return b.each(this.datasets, function (a) {
              f = cc11001100_hook("f", a.points || a.bars || a.segments, "assign");
              f[d] && f[d].hasValue() && B.push(f[d]);
            }), b.each(B, function (a) {
              l.push(a.x);
              u.push(a.y);
              k.push(b.template(this.options.multiTooltipTemplate, a));
              m.push({
                fill: cc11001100_hook("fill", a._saved.fillColor || a.fillColor, "object-key-init"),
                stroke: cc11001100_hook("stroke", a._saved.strokeColor || a.strokeColor, "object-key-init")
              });
            }, this), h = cc11001100_hook("h", v(u), "assign"), g = cc11001100_hook("g", x(u), "assign"), c = cc11001100_hook("c", v(l), "assign"), e = cc11001100_hook("e", x(l), "assign"), {
              x: cc11001100_hook("x", c > this.chart.width / 2 ? c : e, "object-key-init"),
              y: cc11001100_hook("y", (h + g) / 2, "object-key-init")
            };
          }.call(this, d), "assign");
          new c.MultiTooltip({
            x: cc11001100_hook("x", f.x, "object-key-init"),
            y: cc11001100_hook("y", f.y, "object-key-init"),
            xPadding: cc11001100_hook("xPadding", this.options.tooltipXPadding, "object-key-init"),
            yPadding: cc11001100_hook("yPadding", this.options.tooltipYPadding, "object-key-init"),
            xOffset: cc11001100_hook("xOffset", this.options.tooltipXOffset, "object-key-init"),
            fillColor: cc11001100_hook("fillColor", this.options.tooltipFillColor, "object-key-init"),
            textColor: cc11001100_hook("textColor", this.options.tooltipFontColor, "object-key-init"),
            fontFamily: cc11001100_hook("fontFamily", this.options.tooltipFontFamily, "object-key-init"),
            fontStyle: cc11001100_hook("fontStyle", this.options.tooltipFontStyle, "object-key-init"),
            fontSize: cc11001100_hook("fontSize", this.options.tooltipFontSize, "object-key-init"),
            titleTextColor: cc11001100_hook("titleTextColor", this.options.tooltipTitleFontColor, "object-key-init"),
            titleFontFamily: cc11001100_hook("titleFontFamily", this.options.tooltipTitleFontFamily, "object-key-init"),
            titleFontStyle: cc11001100_hook("titleFontStyle", this.options.tooltipTitleFontStyle, "object-key-init"),
            titleFontSize: cc11001100_hook("titleFontSize", this.options.tooltipTitleFontSize, "object-key-init"),
            cornerRadius: cc11001100_hook("cornerRadius", this.options.tooltipCornerRadius, "object-key-init"),
            labels: cc11001100_hook("labels", k, "object-key-init"),
            legendColors: cc11001100_hook("legendColors", m, "object-key-init"),
            legendColorBackground: cc11001100_hook("legendColorBackground", this.options.multiTooltipKeyBackground, "object-key-init"),
            title: cc11001100_hook("title", r(this.options.tooltipTitleTemplate, a[0]), "object-key-init"),
            chart: cc11001100_hook("chart", this.chart, "object-key-init"),
            ctx: cc11001100_hook("ctx", this.chart.ctx, "object-key-init"),
            custom: cc11001100_hook("custom", this.options.customTooltips, "object-key-init")
          }).draw();
        } else e(a, function (a) {
          var b = cc11001100_hook("b", a.tooltipPosition(), "var-init");
          new c.Tooltip({
            x: cc11001100_hook("x", Math.round(b.x), "object-key-init"),
            y: cc11001100_hook("y", Math.round(b.y), "object-key-init"),
            xPadding: cc11001100_hook("xPadding", this.options.tooltipXPadding, "object-key-init"),
            yPadding: cc11001100_hook("yPadding", this.options.tooltipYPadding, "object-key-init"),
            fillColor: cc11001100_hook("fillColor", this.options.tooltipFillColor, "object-key-init"),
            textColor: cc11001100_hook("textColor", this.options.tooltipFontColor, "object-key-init"),
            fontFamily: cc11001100_hook("fontFamily", this.options.tooltipFontFamily, "object-key-init"),
            fontStyle: cc11001100_hook("fontStyle", this.options.tooltipFontStyle, "object-key-init"),
            fontSize: cc11001100_hook("fontSize", this.options.tooltipFontSize, "object-key-init"),
            caretHeight: cc11001100_hook("caretHeight", this.options.tooltipCaretSize, "object-key-init"),
            cornerRadius: cc11001100_hook("cornerRadius", this.options.tooltipCornerRadius, "object-key-init"),
            text: cc11001100_hook("text", r(this.options.tooltipTemplate, a), "object-key-init"),
            chart: cc11001100_hook("chart", this.chart, "object-key-init"),
            custom: cc11001100_hook("custom", this.options.customTooltips, "object-key-init")
          }).draw();
        }, this);
        return this;
      }
    },
    toBase64Image: function () {
      return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
    }
  });
  c.Type.extend = cc11001100_hook("c.Type.extend", function (a) {
    var b = cc11001100_hook("b", this, "var-init"),
      f = function () {
        return b.apply(this, arguments);
      };
    if (f.prototype = cc11001100_hook("f.prototype", h(b.prototype), "assign"), k(f.prototype, a), f.extend = cc11001100_hook("f.extend", c.Type.extend, "assign"), a.name || b.prototype.name) {
      var e = cc11001100_hook("e", a.name || b.prototype.name, "var-init"),
        d = cc11001100_hook("d", c.defaults[b.prototype.name] ? h(c.defaults[b.prototype.name]) : {}, "var-init");
      c.defaults[e] = cc11001100_hook("c.defaults[e]", k(d, a.defaults), "assign");
      c.types[e] = cc11001100_hook("c.types[e]", f, "assign");
      c.prototype[e] = cc11001100_hook("c.prototype[e]", function (a, b) {
        var g = cc11001100_hook("g", u(c.defaults.global, c.defaults[e], b || {}), "var-init");
        return new f(a, g, this);
      }, "assign");
    } else I("Name not provided for this chart, so it hasn't been registered");
    return b;
  }, "assign");
  c.Element = cc11001100_hook("c.Element", function (a) {
    k(this, a);
    this.initialize.apply(this, arguments);
    this.save();
  }, "assign");
  k(c.Element.prototype, {
    initialize: function () {},
    restore: function (a) {
      return a ? e(a, function (a) {
        this[a] = cc11001100_hook("this[a]", this._saved[a], "assign");
      }, this) : k(this, this._saved), this;
    },
    save: function () {
      return this._saved = cc11001100_hook("this._saved", h(this), "assign"), delete this._saved._saved, this;
    },
    update: function (a) {
      return e(a, function (a, b) {
        this._saved[b] = cc11001100_hook("this._saved[b]", this[b], "assign");
        this[b] = cc11001100_hook("this[b]", a, "assign");
      }, this), this;
    },
    transition: function (a, b) {
      return e(a, function (a, e) {
        this[e] = cc11001100_hook("this[e]", (a - this._saved[e]) * b + this._saved[e], "assign");
      }, this), this;
    },
    tooltipPosition: function () {
      return {
        x: cc11001100_hook("x", this.x, "object-key-init"),
        y: cc11001100_hook("y", this.y, "object-key-init")
      };
    },
    hasValue: function () {
      return q(this.value);
    }
  });
  c.Element.extend = cc11001100_hook("c.Element.extend", n, "assign");
  c.Point = cc11001100_hook("c.Point", c.Element.extend({
    display: cc11001100_hook("display", !0, "object-key-init"),
    inRange: function (a, b) {
      var e = cc11001100_hook("e", this.hitDetectionRadius + this.radius, "var-init");
      return Math.pow(a - this.x, 2) + Math.pow(b - this.y, 2) < Math.pow(e, 2);
    },
    draw: function () {
      if (this.display) {
        var a = cc11001100_hook("a", this.ctx, "var-init");
        a.beginPath();
        a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        a.closePath();
        a.strokeStyle = cc11001100_hook("a.strokeStyle", this.strokeColor, "assign");
        a.lineWidth = cc11001100_hook("a.lineWidth", this.strokeWidth, "assign");
        a.fillStyle = cc11001100_hook("a.fillStyle", this.fillColor, "assign");
        a.fill();
        a.stroke();
      }
    }
  }), "assign");
  c.Arc = cc11001100_hook("c.Arc", c.Element.extend({
    inRange: function (a, e) {
      var f = cc11001100_hook("f", b.getAngleFromPoint(this, {
          x: cc11001100_hook("x", a, "object-key-init"),
          y: cc11001100_hook("y", e, "object-key-init")
        }), "var-init"),
        c = cc11001100_hook("c", f.angle % (2 * Math.PI), "var-init"),
        d = cc11001100_hook("d", (2 * Math.PI + this.startAngle) % (2 * Math.PI), "var-init"),
        h = cc11001100_hook("h", (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360, "var-init"),
        f = cc11001100_hook("f", f.distance >= this.innerRadius && f.distance <= this.outerRadius, "var-init");
      return (d > h ? h >= c || c >= d : c >= d && h >= c) && f;
    },
    tooltipPosition: function () {
      var a = cc11001100_hook("a", this.startAngle + (this.endAngle - this.startAngle) / 2, "var-init"),
        b = cc11001100_hook("b", (this.outerRadius - this.innerRadius) / 2 + this.innerRadius, "var-init");
      return {
        x: cc11001100_hook("x", this.x + Math.cos(a) * b, "object-key-init"),
        y: cc11001100_hook("y", this.y + Math.sin(a) * b, "object-key-init")
      };
    },
    draw: function (a) {
      a = cc11001100_hook("a", this.ctx, "assign");
      a.beginPath();
      a.arc(this.x, this.y, 0 > this.outerRadius ? 0 : this.outerRadius, this.startAngle, this.endAngle);
      a.arc(this.x, this.y, 0 > this.innerRadius ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0);
      a.closePath();
      a.strokeStyle = cc11001100_hook("a.strokeStyle", this.strokeColor, "assign");
      a.lineWidth = cc11001100_hook("a.lineWidth", this.strokeWidth, "assign");
      a.fillStyle = cc11001100_hook("a.fillStyle", this.fillColor, "assign");
      a.fill();
      a.lineJoin = cc11001100_hook("a.lineJoin", "bevel", "assign");
      this.showStroke && a.stroke();
    }
  }), "assign");
  c.Rectangle = cc11001100_hook("c.Rectangle", c.Element.extend({
    draw: function () {
      var a = cc11001100_hook("a", this.ctx, "var-init"),
        b = cc11001100_hook("b", this.width / 2, "var-init"),
        e = cc11001100_hook("e", this.x - b, "var-init"),
        b = cc11001100_hook("b", this.x + b, "var-init"),
        c = cc11001100_hook("c", this.base - (this.base - this.y), "var-init"),
        d = cc11001100_hook("d", this.strokeWidth / 2, "var-init");
      this.showStroke && (e += cc11001100_hook("e", d, "assign"), b -= cc11001100_hook("b", d, "assign"), c += cc11001100_hook("c", d, "assign"));
      a.beginPath();
      a.fillStyle = cc11001100_hook("a.fillStyle", this.fillColor, "assign");
      a.strokeStyle = cc11001100_hook("a.strokeStyle", this.strokeColor, "assign");
      a.lineWidth = cc11001100_hook("a.lineWidth", this.strokeWidth, "assign");
      a.moveTo(e, this.base);
      a.lineTo(e, c);
      a.lineTo(b, c);
      a.lineTo(b, this.base);
      a.fill();
      this.showStroke && a.stroke();
    },
    height: function () {
      return this.base - this.y;
    },
    inRange: function (a, b) {
      return a >= this.x - this.width / 2 && a <= this.x + this.width / 2 && b >= this.y && b <= this.base;
    }
  }), "assign");
  c.Animation = cc11001100_hook("c.Animation", c.Element.extend({
    currentStep: cc11001100_hook("currentStep", null, "object-key-init"),
    numSteps: cc11001100_hook("numSteps", 60, "object-key-init"),
    easing: cc11001100_hook("easing", "", "object-key-init"),
    render: cc11001100_hook("render", null, "object-key-init"),
    onAnimationProgress: cc11001100_hook("onAnimationProgress", null, "object-key-init"),
    onAnimationComplete: cc11001100_hook("onAnimationComplete", null, "object-key-init")
  }), "assign");
  c.Tooltip = cc11001100_hook("c.Tooltip", c.Element.extend({
    draw: function () {
      var a = cc11001100_hook("a", this.chart.ctx, "var-init");
      a.font = cc11001100_hook("a.font", t(this.fontSize, this.fontStyle, this.fontFamily), "assign");
      this.xAlign = cc11001100_hook("this.xAlign", "center", "assign");
      this.yAlign = cc11001100_hook("this.yAlign", "above", "assign");
      var b = cc11001100_hook("b", this.caretPadding = cc11001100_hook("this.caretPadding", 2, "assign"), "var-init"),
        e = cc11001100_hook("e", a.measureText(this.text).width + 2 * this.xPadding, "var-init"),
        c = cc11001100_hook("c", this.fontSize + 2 * this.yPadding, "var-init"),
        d = cc11001100_hook("d", c + this.caretHeight + b, "var-init");
      this.x + e / 2 > this.chart.width ? this.xAlign = cc11001100_hook("this.xAlign", "left", "assign") : 0 > this.x - e / 2 && (this.xAlign = cc11001100_hook("this.xAlign", "right", "assign"));
      0 > this.y - d && (this.yAlign = cc11001100_hook("this.yAlign", "below", "assign"));
      var h = cc11001100_hook("h", this.x - e / 2, "var-init"),
        d = cc11001100_hook("d", this.y - d, "var-init");
      if (a.fillStyle = cc11001100_hook("a.fillStyle", this.fillColor, "assign"), this.custom) this.custom(this);else {
        switch (this.yAlign) {
          case "above":
            a.beginPath();
            a.moveTo(this.x, this.y - b);
            a.lineTo(this.x + this.caretHeight, this.y - (b + this.caretHeight));
            a.lineTo(this.x - this.caretHeight, this.y - (b + this.caretHeight));
            a.closePath();
            a.fill();
            break;
          case "below":
            d = cc11001100_hook("d", this.y + b + this.caretHeight, "assign"), a.beginPath(), a.moveTo(this.x, this.y + b), a.lineTo(this.x + this.caretHeight, this.y + b + this.caretHeight), a.lineTo(this.x - this.caretHeight, this.y + b + this.caretHeight), a.closePath(), a.fill();
        }
        switch (this.xAlign) {
          case "left":
            h = cc11001100_hook("h", this.x - e + (this.cornerRadius + this.caretHeight), "assign");
            break;
          case "right":
            h = cc11001100_hook("h", this.x - (this.cornerRadius + this.caretHeight), "assign");
        }
        F(a, h, d, e, c, this.cornerRadius);
        a.fill();
        a.fillStyle = cc11001100_hook("a.fillStyle", this.textColor, "assign");
        a.textAlign = cc11001100_hook("a.textAlign", "center", "assign");
        a.textBaseline = cc11001100_hook("a.textBaseline", "middle", "assign");
        a.fillText(this.text, h + e / 2, d + c / 2);
      }
    }
  }), "assign");
  c.MultiTooltip = cc11001100_hook("c.MultiTooltip", c.Element.extend({
    initialize: function () {
      this.font = cc11001100_hook("this.font", t(this.fontSize, this.fontStyle, this.fontFamily), "assign");
      this.titleFont = cc11001100_hook("this.titleFont", t(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), "assign");
      this.titleHeight = cc11001100_hook("this.titleHeight", this.title ? 1.5 * this.titleFontSize : 0, "assign");
      this.height = cc11001100_hook("this.height", this.labels.length * this.fontSize + this.fontSize / 2 * (this.labels.length - 1) + 2 * this.yPadding + this.titleHeight, "assign");
      this.ctx.font = cc11001100_hook("this.ctx.font", this.titleFont, "assign");
      var a = cc11001100_hook("a", this.ctx.measureText(this.title).width, "var-init"),
        b = cc11001100_hook("b", A(this.ctx, this.font, this.labels) + this.fontSize + 3, "var-init");
      this.width = cc11001100_hook("this.width", x([b, a]) + 2 * this.xPadding, "assign");
      a = cc11001100_hook("a", this.height / 2, "assign");
      0 > this.y - a ? this.y = cc11001100_hook("this.y", a, "assign") : this.y + a > this.chart.height && (this.y = cc11001100_hook("this.y", this.chart.height - a, "assign"));
      this.x > this.chart.width / 2 ? this.x -= cc11001100_hook("this.x", this.xOffset + this.width, "assign") : this.x += cc11001100_hook("this.x", this.xOffset, "assign");
    },
    getLineHeight: function (a) {
      var b = cc11001100_hook("b", this.y - this.height / 2 + this.yPadding, "var-init");
      return 0 === a ? b + this.titleHeight / 3 : b + (1.5 * this.fontSize * (a - 1) + this.fontSize / 2) + this.titleHeight;
    },
    draw: function () {
      if (this.custom) this.custom(this);else {
        F(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
        var a = cc11001100_hook("a", this.ctx, "var-init");
        a.fillStyle = cc11001100_hook("a.fillStyle", this.fillColor, "assign");
        a.fill();
        a.closePath();
        a.textAlign = cc11001100_hook("a.textAlign", "left", "assign");
        a.textBaseline = cc11001100_hook("a.textBaseline", "middle", "assign");
        a.fillStyle = cc11001100_hook("a.fillStyle", this.titleTextColor, "assign");
        a.font = cc11001100_hook("a.font", this.titleFont, "assign");
        a.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0));
        a.font = cc11001100_hook("a.font", this.font, "assign");
        b.each(this.labels, function (b, e) {
          a.fillStyle = cc11001100_hook("a.fillStyle", this.textColor, "assign");
          a.fillText(b, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(e + 1));
          a.fillStyle = cc11001100_hook("a.fillStyle", this.legendColorBackground, "assign");
          a.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
          a.fillStyle = cc11001100_hook("a.fillStyle", this.legendColors[e].fill, "assign");
          a.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
        }, this);
      }
    }
  }), "assign");
  c.Scale = cc11001100_hook("c.Scale", c.Element.extend({
    initialize: function () {
      this.fit();
    },
    buildYLabels: function () {
      this.yLabels = cc11001100_hook("this.yLabels", [], "assign");
      for (var a = cc11001100_hook("a", C(this.stepValue), "var-init"), b = cc11001100_hook("b", 0, "var-init"); b <= this.steps; b++) this.yLabels.push(r(this.templateString, {
        value: cc11001100_hook("value", (this.min + b * this.stepValue).toFixed(a), "object-key-init")
      }));
      this.yLabelWidth = cc11001100_hook("this.yLabelWidth", this.display && this.showLabels ? A(this.ctx, this.font, this.yLabels) + 10 : 0, "assign");
    },
    addXLabel: function (a) {
      this.xLabels.push(a);
      this.valuesCount++;
      this.fit();
    },
    removeXLabel: function () {
      this.xLabels.shift();
      this.valuesCount--;
      this.fit();
    },
    fit: function () {
      this.startPoint = cc11001100_hook("this.startPoint", this.display ? this.fontSize : 0, "assign");
      this.endPoint = cc11001100_hook("this.endPoint", this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, "assign");
      this.startPoint += cc11001100_hook("this.startPoint", this.padding, "assign");
      this.endPoint -= cc11001100_hook("this.endPoint", this.padding, "assign");
      var a,
        b = cc11001100_hook("b", this.endPoint, "var-init"),
        e = cc11001100_hook("e", this.endPoint - this.startPoint, "var-init");
      this.calculateYRange(e);
      this.buildYLabels();
      for (this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = cc11001100_hook("e", this.endPoint - this.startPoint, "assign"), a = cc11001100_hook("a", this.yLabelWidth, "assign"), this.calculateYRange(e), this.buildYLabels(), a < this.yLabelWidth && (this.endPoint = cc11001100_hook("this.endPoint", b, "assign"), this.calculateXLabelRotation());
    },
    calculateXLabelRotation: function () {
      this.ctx.font = cc11001100_hook("this.ctx.font", this.font, "assign");
      var a,
        b = cc11001100_hook("b", this.ctx.measureText(this.xLabels[0]).width, "var-init");
      if (this.xScalePaddingRight = cc11001100_hook("this.xScalePaddingRight", this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width / 2 + 3, "assign"), this.xScalePaddingLeft = cc11001100_hook("this.xScalePaddingLeft", b / 2 > this.yLabelWidth ? b / 2 : this.yLabelWidth, "assign"), this.xLabelRotation = cc11001100_hook("this.xLabelRotation", 0, "assign"), this.display) {
        var e,
          c = cc11001100_hook("c", A(this.ctx, this.font, this.xLabels), "var-init");
        this.xLabelWidth = cc11001100_hook("this.xLabelWidth", c, "assign");
        for (var d = cc11001100_hook("d", Math.floor(this.calculateX(1) - this.calculateX(0)) - 6, "var-init"); this.xLabelWidth > d && 0 === this.xLabelRotation || this.xLabelWidth > d && 90 >= this.xLabelRotation && 0 < this.xLabelRotation;) e = cc11001100_hook("e", Math.cos(z(this.xLabelRotation)), "assign"), a = cc11001100_hook("a", e * b, "assign"), a + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = cc11001100_hook("this.xScalePaddingLeft", a + this.fontSize / 2, "assign")), this.xScalePaddingRight = cc11001100_hook("this.xScalePaddingRight", this.fontSize / 2, "assign"), this.xLabelRotation++, this.xLabelWidth = cc11001100_hook("this.xLabelWidth", e * c, "assign");
        0 < this.xLabelRotation && (this.endPoint -= cc11001100_hook("this.endPoint", Math.sin(z(this.xLabelRotation)) * c + 3, "assign"));
      } else this.xLabelWidth = cc11001100_hook("this.xLabelWidth", 0, "assign"), this.xScalePaddingLeft = cc11001100_hook("this.xScalePaddingLeft", this.xScalePaddingRight = cc11001100_hook("this.xScalePaddingRight", this.padding, "assign"), "assign");
    },
    calculateYRange: cc11001100_hook("calculateYRange", m, "object-key-init"),
    drawingArea: function () {
      return this.startPoint - this.endPoint;
    },
    calculateY: function (a) {
      var b = cc11001100_hook("b", this.drawingArea() / (this.min - this.max), "var-init");
      return this.endPoint - b * (a - this.min);
    },
    calculateX: function (a) {
      var b = cc11001100_hook("b", (0 < this.xLabelRotation, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)) / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1), "var-init");
      a = cc11001100_hook("a", b * a + this.xScalePaddingLeft, "assign");
      return this.offsetGridLines && (a += cc11001100_hook("a", b / 2, "assign")), Math.round(a);
    },
    update: function (a) {
      b.extend(this, a);
      this.fit();
    },
    draw: function () {
      var a = cc11001100_hook("a", this.ctx, "var-init"),
        c = cc11001100_hook("c", (this.endPoint - this.startPoint) / this.steps, "var-init"),
        f = cc11001100_hook("f", Math.round(this.xScalePaddingLeft), "var-init");
      this.display && (a.fillStyle = cc11001100_hook("a.fillStyle", this.textColor, "assign"), a.font = cc11001100_hook("a.font", this.font, "assign"), e(this.yLabels, function (e, d) {
        var h = cc11001100_hook("h", this.endPoint - c * d, "var-init"),
          k = cc11001100_hook("k", Math.round(h), "var-init"),
          m = cc11001100_hook("m", this.showHorizontalLines, "var-init");
        a.textAlign = cc11001100_hook("a.textAlign", "right", "assign");
        a.textBaseline = cc11001100_hook("a.textBaseline", "middle", "assign");
        this.showLabels && a.fillText(e, f - 10, h);
        0 !== d || m || (m = cc11001100_hook("m", !0, "assign"));
        m && a.beginPath();
        0 < d ? (a.lineWidth = cc11001100_hook("a.lineWidth", this.gridLineWidth, "assign"), a.strokeStyle = cc11001100_hook("a.strokeStyle", this.gridLineColor, "assign")) : (a.lineWidth = cc11001100_hook("a.lineWidth", this.lineWidth, "assign"), a.strokeStyle = cc11001100_hook("a.strokeStyle", this.lineColor, "assign"));
        k += cc11001100_hook("k", b.aliasPixel(a.lineWidth), "assign");
        m && (a.moveTo(f, k), a.lineTo(this.width, k), a.stroke(), a.closePath());
        a.lineWidth = cc11001100_hook("a.lineWidth", this.lineWidth, "assign");
        a.strokeStyle = cc11001100_hook("a.strokeStyle", this.lineColor, "assign");
        a.beginPath();
        a.moveTo(f - 5, k);
        a.lineTo(f, k);
        a.stroke();
        a.closePath();
      }, this), e(this.xLabels, function (b, e) {
        var c = cc11001100_hook("c", this.calculateX(e) + D(this.lineWidth), "var-init"),
          f = cc11001100_hook("f", this.calculateX(e - (this.offsetGridLines ? .5 : 0)) + D(this.lineWidth), "var-init"),
          d = cc11001100_hook("d", 0 < this.xLabelRotation, "var-init"),
          g = cc11001100_hook("g", this.showVerticalLines, "var-init");
        0 !== e || g || (g = cc11001100_hook("g", !0, "assign"));
        g && a.beginPath();
        0 < e ? (a.lineWidth = cc11001100_hook("a.lineWidth", this.gridLineWidth, "assign"), a.strokeStyle = cc11001100_hook("a.strokeStyle", this.gridLineColor, "assign")) : (a.lineWidth = cc11001100_hook("a.lineWidth", this.lineWidth, "assign"), a.strokeStyle = cc11001100_hook("a.strokeStyle", this.lineColor, "assign"));
        g && (a.moveTo(f, this.endPoint), a.lineTo(f, this.startPoint - 3), a.stroke(), a.closePath());
        a.lineWidth = cc11001100_hook("a.lineWidth", this.lineWidth, "assign");
        a.strokeStyle = cc11001100_hook("a.strokeStyle", this.lineColor, "assign");
        a.beginPath();
        a.moveTo(f, this.endPoint);
        a.lineTo(f, this.endPoint + 5);
        a.stroke();
        a.closePath();
        a.save();
        a.translate(c, d ? this.endPoint + 12 : this.endPoint + 8);
        a.rotate(-1 * z(this.xLabelRotation));
        a.font = cc11001100_hook("a.font", this.font, "assign");
        a.textAlign = cc11001100_hook("a.textAlign", d ? "right" : "center", "assign");
        a.textBaseline = cc11001100_hook("a.textBaseline", d ? "middle" : "top", "assign");
        a.fillText(b, 0, 0);
        a.restore();
      }, this));
    }
  }), "assign");
  c.RadialScale = cc11001100_hook("c.RadialScale", c.Element.extend({
    initialize: function () {
      this.size = cc11001100_hook("this.size", v([this.height, this.width]), "assign");
      this.drawingArea = cc11001100_hook("this.drawingArea", this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2, "assign");
    },
    calculateCenterOffset: function (a) {
      return this.drawingArea / (this.max - this.min) * (a - this.min);
    },
    update: function () {
      this.lineArc ? this.drawingArea = cc11001100_hook("this.drawingArea", this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2, "assign") : this.setScaleSize();
      this.buildYLabels();
    },
    buildYLabels: function () {
      this.yLabels = cc11001100_hook("this.yLabels", [], "assign");
      for (var a = cc11001100_hook("a", C(this.stepValue), "var-init"), b = cc11001100_hook("b", 0, "var-init"); b <= this.steps; b++) this.yLabels.push(r(this.templateString, {
        value: cc11001100_hook("value", (this.min + b * this.stepValue).toFixed(a), "object-key-init")
      }));
    },
    getCircumference: function () {
      return 2 * Math.PI / this.valuesCount;
    },
    setScaleSize: function () {
      var a,
        b,
        e,
        c,
        d,
        h,
        k,
        m = cc11001100_hook("m", v([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]), "var-init");
      k = cc11001100_hook("k", this.width, "assign");
      var l = cc11001100_hook("l", 0, "var-init");
      this.ctx.font = cc11001100_hook("this.ctx.font", t(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), "assign");
      for (b = cc11001100_hook("b", 0, "assign"); b < this.valuesCount; b++) a = cc11001100_hook("a", this.getPointPosition(b, m), "assign"), e = cc11001100_hook("e", this.ctx.measureText(r(this.templateString, {
        value: cc11001100_hook("value", this.labels[b], "object-key-init")
      })).width + 5, "assign"), 0 === b || b === this.valuesCount / 2 ? (c = cc11001100_hook("c", e / 2, "assign"), a.x + c > k && (k = cc11001100_hook("k", a.x + c, "assign"), d = cc11001100_hook("d", b, "assign")), a.x - c < l && (l = cc11001100_hook("l", a.x - c, "assign"), h = cc11001100_hook("h", b, "assign"))) : b < this.valuesCount / 2 ? a.x + e > k && (k = cc11001100_hook("k", a.x + e, "assign"), d = cc11001100_hook("d", b, "assign")) : b > this.valuesCount / 2 && a.x - e < l && (l = cc11001100_hook("l", a.x - e, "assign"), h = cc11001100_hook("h", b, "assign"));
      a = cc11001100_hook("a", l, "assign");
      k = cc11001100_hook("k", Math.ceil(k - this.width), "assign");
      d = cc11001100_hook("d", this.getIndexAngle(d), "assign");
      h = cc11001100_hook("h", this.getIndexAngle(h), "assign");
      d = cc11001100_hook("d", k / Math.sin(d + Math.PI / 2), "assign");
      h = cc11001100_hook("h", a / Math.sin(h + Math.PI / 2), "assign");
      d = cc11001100_hook("d", q(d) ? d : 0, "assign");
      h = cc11001100_hook("h", q(h) ? h : 0, "assign");
      this.drawingArea = cc11001100_hook("this.drawingArea", m - (h + d) / 2, "assign");
      this.setCenterPoint(h, d);
    },
    setCenterPoint: function (a, b) {
      this.xCenter = cc11001100_hook("this.xCenter", (a + this.drawingArea + (this.width - b - this.drawingArea)) / 2, "assign");
      this.yCenter = cc11001100_hook("this.yCenter", this.height / 2, "assign");
    },
    getIndexAngle: function (a) {
      return 2 * Math.PI / this.valuesCount * a - Math.PI / 2;
    },
    getPointPosition: function (a, b) {
      var e = cc11001100_hook("e", this.getIndexAngle(a), "var-init");
      return {
        x: cc11001100_hook("x", Math.cos(e) * b + this.xCenter, "object-key-init"),
        y: cc11001100_hook("y", Math.sin(e) * b + this.yCenter, "object-key-init")
      };
    },
    draw: function () {
      if (this.display) {
        var a = cc11001100_hook("a", this.ctx, "var-init");
        if (e(this.yLabels, function (b, e) {
          if (0 < e) {
            var c;
            c = cc11001100_hook("c", this.drawingArea / this.steps * e, "assign");
            var d = cc11001100_hook("d", this.yCenter - c, "var-init");
            if (0 < this.lineWidth) {
              if (a.strokeStyle = cc11001100_hook("a.strokeStyle", this.lineColor, "assign"), a.lineWidth = cc11001100_hook("a.lineWidth", this.lineWidth, "assign"), this.lineArc) a.beginPath(), a.arc(this.xCenter, this.yCenter, c, 0, 2 * Math.PI);else {
                a.beginPath();
                for (var f = cc11001100_hook("f", 0, "var-init"); f < this.valuesCount; f++) c = cc11001100_hook("c", this.getPointPosition(f, this.calculateCenterOffset(this.min + e * this.stepValue)), "assign"), 0 === f ? a.moveTo(c.x, c.y) : a.lineTo(c.x, c.y);
              }
              a.closePath();
              a.stroke();
            }
            if (this.showLabels) {
              if (a.font = cc11001100_hook("a.font", t(this.fontSize, this.fontStyle, this.fontFamily), "assign"), this.showLabelBackdrop) c = cc11001100_hook("c", a.measureText(b).width, "assign"), a.fillStyle = cc11001100_hook("a.fillStyle", this.backdropColor, "assign"), a.fillRect(this.xCenter - c / 2 - this.backdropPaddingX, d - this.fontSize / 2 - this.backdropPaddingY, c + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY);
              a.textAlign = cc11001100_hook("a.textAlign", "center", "assign");
              a.textBaseline = cc11001100_hook("a.textBaseline", "middle", "assign");
              a.fillStyle = cc11001100_hook("a.fillStyle", this.fontColor, "assign");
              a.fillText(b, this.xCenter, d);
            }
          }
        }, this), !this.lineArc) {
          a.lineWidth = cc11001100_hook("a.lineWidth", this.angleLineWidth, "assign");
          a.strokeStyle = cc11001100_hook("a.strokeStyle", this.angleLineColor, "assign");
          for (var b = cc11001100_hook("b", this.valuesCount - 1, "var-init"); 0 <= b; b--) {
            var c = cc11001100_hook("c", null, "var-init"),
              d = cc11001100_hook("d", null, "var-init");
            if (0 < this.angleLineWidth && 0 === b % this.angleLineInterval && (c = cc11001100_hook("c", this.calculateCenterOffset(this.max), "assign"), d = cc11001100_hook("d", this.getPointPosition(b, c), "assign"), a.beginPath(), a.moveTo(this.xCenter, this.yCenter), a.lineTo(d.x, d.y), a.stroke(), a.closePath()), this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
              null == c && (c = cc11001100_hook("c", this.calculateCenterOffset(this.max), "assign"));
              null == d && (d = cc11001100_hook("d", this.getPointPosition(b, c), "assign"));
              var h = cc11001100_hook("h", this.getPointPosition(0 === b ? this.valuesCount - 1 : b - 1, c), "var-init"),
                k = cc11001100_hook("k", this.getPointPosition(b === this.valuesCount - 1 ? 0 : b + 1, c), "var-init"),
                c = cc11001100_hook("c", (h.x + d.x) / 2, "var-init"),
                h = cc11001100_hook("h", (h.y + d.y) / 2, "var-init"),
                m = cc11001100_hook("m", (d.x + k.x) / 2, "var-init"),
                k = cc11001100_hook("k", (d.y + k.y) / 2, "var-init");
              a.beginPath();
              a.moveTo(this.xCenter, this.yCenter);
              a.lineTo(c, h);
              a.lineTo(d.x, d.y);
              a.lineTo(m, k);
              a.fillStyle = cc11001100_hook("a.fillStyle", this.backgroundColors[b], "assign");
              a.fill();
              a.closePath();
            }
            d = cc11001100_hook("d", this.getPointPosition(b, this.calculateCenterOffset(this.max) + 5), "assign");
            a.font = cc11001100_hook("a.font", t(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), "assign");
            a.fillStyle = cc11001100_hook("a.fillStyle", this.pointLabelFontColor, "assign");
            h = cc11001100_hook("h", this.labels.length, "assign");
            c = cc11001100_hook("c", this.labels.length / 2, "assign");
            m = cc11001100_hook("m", c / 2, "assign");
            k = cc11001100_hook("k", m > b || b > h - m, "assign");
            h = cc11001100_hook("h", b === m || b === h - m, "assign");
            0 === b ? a.textAlign = cc11001100_hook("a.textAlign", "center", "assign") : b === c ? a.textAlign = cc11001100_hook("a.textAlign", "center", "assign") : c > b ? a.textAlign = cc11001100_hook("a.textAlign", "left", "assign") : a.textAlign = cc11001100_hook("a.textAlign", "right", "assign");
            h ? a.textBaseline = cc11001100_hook("a.textBaseline", "middle", "assign") : k ? a.textBaseline = cc11001100_hook("a.textBaseline", "bottom", "assign") : a.textBaseline = cc11001100_hook("a.textBaseline", "top", "assign");
            a.fillText(this.labels[b], d.x, d.y);
          }
        }
      }
    }
  }), "assign");
  c.animationService = cc11001100_hook("c.animationService", {
    frameDuration: cc11001100_hook("frameDuration", 17, "object-key-init"),
    animations: cc11001100_hook("animations", [], "object-key-init"),
    dropFrames: cc11001100_hook("dropFrames", 0, "object-key-init"),
    addAnimation: function (a, e) {
      for (var c = cc11001100_hook("c", 0, "var-init"); c < this.animations.length; ++c) if (this.animations[c].chartInstance === a) return void (this.animations[c].animationObject = cc11001100_hook("this.animations[c].animationObject", e, "assign"));
      this.animations.push({
        chartInstance: cc11001100_hook("chartInstance", a, "object-key-init"),
        animationObject: cc11001100_hook("animationObject", e, "object-key-init")
      });
      1 == this.animations.length && b.requestAnimFrame.call(window, this.digestWrapper);
    },
    cancelAnimation: function (a) {
      var e = cc11001100_hook("e", b.findNextWhere(this.animations, function (b) {
        return b.chartInstance === a;
      }), "var-init");
      e && this.animations.splice(e, 1);
    },
    digestWrapper: function () {
      c.animationService.startDigest.call(c.animationService);
    },
    startDigest: function () {
      var a = cc11001100_hook("a", Date.now(), "var-init"),
        e = cc11001100_hook("e", 0, "var-init");
      1 < this.dropFrames && (e = cc11001100_hook("e", Math.floor(this.dropFrames), "assign"), this.dropFrames -= cc11001100_hook("this.dropFrames", e, "assign"));
      for (var c = cc11001100_hook("c", 0, "var-init"); c < this.animations.length; c++) null === this.animations[c].animationObject.currentStep && (this.animations[c].animationObject.currentStep = cc11001100_hook("this.animations[c].animationObject.currentStep", 0, "assign")), this.animations[c].animationObject.currentStep += cc11001100_hook("this.animations[c].animationObject.currentStep", 1 + e, "assign"), this.animations[c].animationObject.currentStep > this.animations[c].animationObject.numSteps && (this.animations[c].animationObject.currentStep = cc11001100_hook("this.animations[c].animationObject.currentStep", this.animations[c].animationObject.numSteps, "assign")), this.animations[c].animationObject.render(this.animations[c].chartInstance, this.animations[c].animationObject), this.animations[c].animationObject.currentStep == this.animations[c].animationObject.numSteps && (this.animations[c].animationObject.onAnimationComplete.call(this.animations[c].chartInstance), this.animations.splice(c, 1), c--);
      a = cc11001100_hook("a", (Date.now() - a - this.frameDuration) / this.frameDuration, "assign");
      1 < a && (this.dropFrames += cc11001100_hook("this.dropFrames", a, "assign"));
      0 < this.animations.length && b.requestAnimFrame.call(window, this.digestWrapper);
    }
  }, "assign");
  b.addEvent(window, "resize", function () {
    var a;
    return function () {
      clearTimeout(a);
      a = cc11001100_hook("a", setTimeout(function () {
        e(c.instances, function (a) {
          a.options.responsive && a.resize(a.render, !0);
        });
      }, 50), "assign");
    };
  }());
  J ? define("Chart", [], function () {
    return c;
  }) : "object" == typeof module && module.exports && (module.exports = cc11001100_hook("module.exports", c, "assign"));
  l.Chart = cc11001100_hook("l.Chart", c, "assign");
  c.noConflict = cc11001100_hook("c.noConflict", function () {
    return l.Chart = cc11001100_hook("l.Chart", d, "assign"), c;
  }, "assign");
}).call(this);
(function () {
  var l = cc11001100_hook("l", this.Chart, "var-init"),
    d = cc11001100_hook("d", l.helpers, "var-init");
  l.Type.extend({
    name: cc11001100_hook("name", "Bar", "object-key-init"),
    defaults: {
      scaleBeginAtZero: cc11001100_hook("scaleBeginAtZero", !0, "object-key-init"),
      scaleShowGridLines: cc11001100_hook("scaleShowGridLines", !0, "object-key-init"),
      scaleGridLineColor: cc11001100_hook("scaleGridLineColor", "rgba(0,0,0,.05)", "object-key-init"),
      scaleGridLineWidth: cc11001100_hook("scaleGridLineWidth", 1, "object-key-init"),
      scaleShowHorizontalLines: cc11001100_hook("scaleShowHorizontalLines", !0, "object-key-init"),
      scaleShowVerticalLines: cc11001100_hook("scaleShowVerticalLines", !0, "object-key-init"),
      barShowStroke: cc11001100_hook("barShowStroke", !0, "object-key-init"),
      barStrokeWidth: cc11001100_hook("barStrokeWidth", 2, "object-key-init"),
      barValueSpacing: cc11001100_hook("barValueSpacing", 5, "object-key-init"),
      barDatasetSpacing: cc11001100_hook("barDatasetSpacing", 1, "object-key-init"),
      legendTemplate: cc11001100_hook("legendTemplate", '\x3cul class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend"\x3e\x3c% for (var i\x3d0; i\x3cdatasets.length; i++){%\x3e\x3cli\x3e\x3cspan class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend-icon" style\x3d"background-color:\x3c%\x3ddatasets[i].fillColor%\x3e"\x3e\x3c/span\x3e\x3cspan class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend-text"\x3e\x3c%if(datasets[i].label){%\x3e\x3c%\x3ddatasets[i].label%\x3e\x3c%}%\x3e\x3c/span\x3e\x3c/li\x3e\x3c%}%\x3e\x3c/ul\x3e', "object-key-init")
    },
    initialize: function (c) {
      var b = cc11001100_hook("b", this.options, "var-init");
      this.ScaleClass = cc11001100_hook("this.ScaleClass", l.Scale.extend({
        offsetGridLines: cc11001100_hook("offsetGridLines", !0, "object-key-init"),
        calculateBarX: function (e, c, d) {
          var l = cc11001100_hook("l", this.calculateBaseWidth(), "var-init");
          d = cc11001100_hook("d", this.calculateX(d) - l / 2, "assign");
          e = cc11001100_hook("e", this.calculateBarWidth(e), "assign");
          return d + e * c + c * b.barDatasetSpacing + e / 2;
        },
        calculateBaseWidth: function () {
          return this.calculateX(1) - this.calculateX(0) - 2 * b.barValueSpacing;
        },
        calculateBarWidth: function (e) {
          return (this.calculateBaseWidth() - (e - 1) * b.barDatasetSpacing) / e;
        }
      }), "assign");
      this.datasets = cc11001100_hook("this.datasets", [], "assign");
      this.options.showTooltips && d.bindEvents(this, this.options.tooltipEvents, function (b) {
        b = cc11001100_hook("b", "mouseout" !== b.type ? this.getBarsAtEvent(b) : [], "assign");
        this.eachBars(function (b) {
          b.restore(["fillColor", "strokeColor"]);
        });
        d.each(b, function (b) {
          b && (b.fillColor = cc11001100_hook("b.fillColor", b.highlightFill, "assign"), b.strokeColor = cc11001100_hook("b.strokeColor", b.highlightStroke, "assign"));
        });
        this.showTooltip(b);
      });
      this.BarClass = cc11001100_hook("this.BarClass", l.Rectangle.extend({
        strokeWidth: cc11001100_hook("strokeWidth", this.options.barStrokeWidth, "object-key-init"),
        showStroke: cc11001100_hook("showStroke", this.options.barShowStroke, "object-key-init"),
        ctx: cc11001100_hook("ctx", this.chart.ctx, "object-key-init")
      }), "assign");
      d.each(c.datasets, function (b, h) {
        var k = cc11001100_hook("k", {
          label: cc11001100_hook("label", b.label || null, "object-key-init"),
          fillColor: cc11001100_hook("fillColor", b.fillColor, "object-key-init"),
          strokeColor: cc11001100_hook("strokeColor", b.strokeColor, "object-key-init"),
          bars: cc11001100_hook("bars", [], "object-key-init")
        }, "var-init");
        this.datasets.push(k);
        d.each(b.data, function (d, h) {
          k.bars.push(new this.BarClass({
            value: cc11001100_hook("value", d, "object-key-init"),
            label: cc11001100_hook("label", c.labels[h], "object-key-init"),
            datasetLabel: cc11001100_hook("datasetLabel", b.label, "object-key-init"),
            strokeColor: cc11001100_hook("strokeColor", "object" == typeof b.strokeColor ? b.strokeColor[h] : b.strokeColor, "object-key-init"),
            fillColor: cc11001100_hook("fillColor", "object" == typeof b.fillColor ? b.fillColor[h] : b.fillColor, "object-key-init"),
            highlightFill: cc11001100_hook("highlightFill", b.highlightFill ? "object" == typeof b.highlightFill ? b.highlightFill[h] : b.highlightFill : "object" == typeof b.fillColor ? b.fillColor[h] : b.fillColor, "object-key-init"),
            highlightStroke: cc11001100_hook("highlightStroke", b.highlightStroke ? "object" == typeof b.highlightStroke ? b.highlightStroke[h] : b.highlightStroke : "object" == typeof b.strokeColor ? b.strokeColor[h] : b.strokeColor, "object-key-init")
          }));
        }, this);
      }, this);
      this.buildScale(c.labels);
      this.BarClass.prototype.base = cc11001100_hook("this.BarClass.prototype.base", this.scale.endPoint, "assign");
      this.eachBars(function (b, c, k) {
        d.extend(b, {
          width: cc11001100_hook("width", this.scale.calculateBarWidth(this.datasets.length), "object-key-init"),
          x: cc11001100_hook("x", this.scale.calculateBarX(this.datasets.length, k, c), "object-key-init"),
          y: cc11001100_hook("y", this.scale.endPoint, "object-key-init")
        });
        b.save();
      }, this);
      this.render();
    },
    update: function () {
      this.scale.update();
      d.each(this.activeElements, function (c) {
        c.restore(["fillColor", "strokeColor"]);
      });
      this.eachBars(function (c) {
        c.save();
      });
      this.render();
    },
    eachBars: function (c) {
      d.each(this.datasets, function (b, e) {
        d.each(b.bars, c, this, e);
      }, this);
    },
    getBarsAtEvent: function (c) {
      var b,
        e = cc11001100_hook("e", [], "var-init");
      c = cc11001100_hook("c", d.getRelativePosition(c), "assign");
      for (var h = function (c) {
          e.push(c.bars[b]);
        }, k = cc11001100_hook("k", 0, "var-init"); k < this.datasets.length; k++) for (b = cc11001100_hook("b", 0, "assign"); b < this.datasets[k].bars.length; b++) if (this.datasets[k].bars[b].inRange(c.x, c.y)) return d.each(this.datasets, h), e;
      return e;
    },
    buildScale: function (c) {
      var b = cc11001100_hook("b", this, "var-init"),
        e = function () {
          var c = cc11001100_hook("c", [], "var-init");
          return b.eachBars(function (b) {
            c.push(b.value);
          }), c;
        };
      c = cc11001100_hook("c", {
        templateString: cc11001100_hook("templateString", this.options.scaleLabel, "object-key-init"),
        height: cc11001100_hook("height", this.chart.height, "object-key-init"),
        width: cc11001100_hook("width", this.chart.width, "object-key-init"),
        ctx: cc11001100_hook("ctx", this.chart.ctx, "object-key-init"),
        textColor: cc11001100_hook("textColor", this.options.scaleFontColor, "object-key-init"),
        fontSize: cc11001100_hook("fontSize", this.options.scaleFontSize, "object-key-init"),
        fontStyle: cc11001100_hook("fontStyle", this.options.scaleFontStyle, "object-key-init"),
        fontFamily: cc11001100_hook("fontFamily", this.options.scaleFontFamily, "object-key-init"),
        valuesCount: cc11001100_hook("valuesCount", c.length, "object-key-init"),
        beginAtZero: cc11001100_hook("beginAtZero", this.options.scaleBeginAtZero, "object-key-init"),
        integersOnly: cc11001100_hook("integersOnly", this.options.scaleIntegersOnly, "object-key-init"),
        calculateYRange: function (b) {
          b = cc11001100_hook("b", d.calculateScaleRange(e(), b, this.fontSize, this.beginAtZero, this.integersOnly), "assign");
          d.extend(this, b);
        },
        xLabels: cc11001100_hook("xLabels", c, "object-key-init"),
        font: cc11001100_hook("font", d.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), "object-key-init"),
        lineWidth: cc11001100_hook("lineWidth", this.options.scaleLineWidth, "object-key-init"),
        lineColor: cc11001100_hook("lineColor", this.options.scaleLineColor, "object-key-init"),
        showHorizontalLines: cc11001100_hook("showHorizontalLines", this.options.scaleShowHorizontalLines, "object-key-init"),
        showVerticalLines: cc11001100_hook("showVerticalLines", this.options.scaleShowVerticalLines, "object-key-init"),
        gridLineWidth: cc11001100_hook("gridLineWidth", this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, "object-key-init"),
        gridLineColor: cc11001100_hook("gridLineColor", this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", "object-key-init"),
        padding: cc11001100_hook("padding", this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0, "object-key-init"),
        showLabels: cc11001100_hook("showLabels", this.options.scaleShowLabels, "object-key-init"),
        display: cc11001100_hook("display", this.options.showScale, "object-key-init")
      }, "assign");
      this.options.scaleOverride && d.extend(c, {
        calculateYRange: cc11001100_hook("calculateYRange", d.noop, "object-key-init"),
        steps: cc11001100_hook("steps", this.options.scaleSteps, "object-key-init"),
        stepValue: cc11001100_hook("stepValue", this.options.scaleStepWidth, "object-key-init"),
        min: cc11001100_hook("min", this.options.scaleStartValue, "object-key-init"),
        max: cc11001100_hook("max", this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth, "object-key-init")
      });
      this.scale = cc11001100_hook("this.scale", new this.ScaleClass(c), "assign");
    },
    addData: function (c, b) {
      d.each(c, function (c, d) {
        this.datasets[d].bars.push(new this.BarClass({
          value: cc11001100_hook("value", c, "object-key-init"),
          label: cc11001100_hook("label", b, "object-key-init"),
          datasetLabel: cc11001100_hook("datasetLabel", this.datasets[d].label, "object-key-init"),
          x: cc11001100_hook("x", this.scale.calculateBarX(this.datasets.length, d, this.scale.valuesCount + 1), "object-key-init"),
          y: cc11001100_hook("y", this.scale.endPoint, "object-key-init"),
          width: cc11001100_hook("width", this.scale.calculateBarWidth(this.datasets.length), "object-key-init"),
          base: cc11001100_hook("base", this.scale.endPoint, "object-key-init"),
          strokeColor: cc11001100_hook("strokeColor", this.datasets[d].strokeColor, "object-key-init"),
          fillColor: cc11001100_hook("fillColor", this.datasets[d].fillColor, "object-key-init")
        }));
      }, this);
      this.scale.addXLabel(b);
      this.update();
    },
    removeData: function () {
      this.scale.removeXLabel();
      d.each(this.datasets, function (c) {
        c.bars.shift();
      }, this);
      this.update();
    },
    reflow: function () {
      d.extend(this.BarClass.prototype, {
        y: cc11001100_hook("y", this.scale.endPoint, "object-key-init"),
        base: cc11001100_hook("base", this.scale.endPoint, "object-key-init")
      });
      var c = cc11001100_hook("c", d.extend({
        height: cc11001100_hook("height", this.chart.height, "object-key-init"),
        width: cc11001100_hook("width", this.chart.width, "object-key-init")
      }), "var-init");
      this.scale.update(c);
    },
    draw: function (c) {
      var b = cc11001100_hook("b", c || 1, "var-init");
      this.clear();
      this.chart.ctx;
      this.scale.draw(b);
      d.each(this.datasets, function (c, h) {
        d.each(c.bars, function (c, e) {
          c.hasValue() && (c.base = cc11001100_hook("c.base", this.scale.endPoint, "assign"), c.transition({
            x: cc11001100_hook("x", this.scale.calculateBarX(this.datasets.length, h, e), "object-key-init"),
            y: cc11001100_hook("y", this.scale.calculateY(c.value), "object-key-init"),
            width: cc11001100_hook("width", this.scale.calculateBarWidth(this.datasets.length), "object-key-init")
          }, b).draw());
        }, this);
      }, this);
    }
  });
}).call(this);
(function () {
  var l = cc11001100_hook("l", this.Chart, "var-init"),
    d = cc11001100_hook("d", l.helpers, "var-init"),
    c = cc11001100_hook("c", {
      segmentShowStroke: cc11001100_hook("segmentShowStroke", !0, "object-key-init"),
      segmentStrokeColor: cc11001100_hook("segmentStrokeColor", "#fff", "object-key-init"),
      segmentStrokeWidth: cc11001100_hook("segmentStrokeWidth", 2, "object-key-init"),
      percentageInnerCutout: cc11001100_hook("percentageInnerCutout", 50, "object-key-init"),
      animationSteps: cc11001100_hook("animationSteps", 100, "object-key-init"),
      animationEasing: cc11001100_hook("animationEasing", "easeOutBounce", "object-key-init"),
      animateRotate: cc11001100_hook("animateRotate", !0, "object-key-init"),
      animateScale: cc11001100_hook("animateScale", !1, "object-key-init"),
      legendTemplate: cc11001100_hook("legendTemplate", '\x3cul class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend"\x3e\x3c% for (var i\x3d0; i\x3csegments.length; i++){%\x3e\x3cli\x3e\x3cspan class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend-icon" style\x3d"background-color:\x3c%\x3dsegments[i].fillColor%\x3e"\x3e\x3c/span\x3e\x3cspan class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend-text"\x3e\x3c%if(segments[i].label){%\x3e\x3c%\x3dsegments[i].label%\x3e\x3c%}%\x3e\x3c/span\x3e\x3c/li\x3e\x3c%}%\x3e\x3c/ul\x3e', "object-key-init")
    }, "var-init");
  l.Type.extend({
    name: cc11001100_hook("name", "Doughnut", "object-key-init"),
    defaults: cc11001100_hook("defaults", c, "object-key-init"),
    initialize: function (b) {
      this.segments = cc11001100_hook("this.segments", [], "assign");
      this.outerRadius = cc11001100_hook("this.outerRadius", (d.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, "assign");
      this.SegmentArc = cc11001100_hook("this.SegmentArc", l.Arc.extend({
        ctx: cc11001100_hook("ctx", this.chart.ctx, "object-key-init"),
        x: cc11001100_hook("x", this.chart.width / 2, "object-key-init"),
        y: cc11001100_hook("y", this.chart.height / 2, "object-key-init")
      }), "assign");
      this.options.showTooltips && d.bindEvents(this, this.options.tooltipEvents, function (b) {
        b = cc11001100_hook("b", "mouseout" !== b.type ? this.getSegmentsAtEvent(b) : [], "assign");
        d.each(this.segments, function (b) {
          b.restore(["fillColor"]);
        });
        d.each(b, function (b) {
          b.fillColor = cc11001100_hook("b.fillColor", b.highlightColor, "assign");
        });
        this.showTooltip(b);
      });
      this.calculateTotal(b);
      d.each(b, function (c, d) {
        c.color || (c.color = cc11001100_hook("c.color", "hsl(" + 360 * d / b.length + ", 100%, 50%)", "assign"));
        this.addData(c, d, !0);
      }, this);
      this.render();
    },
    getSegmentsAtEvent: function (b) {
      var c = cc11001100_hook("c", [], "var-init"),
        h = cc11001100_hook("h", d.getRelativePosition(b), "var-init");
      return d.each(this.segments, function (b) {
        b.inRange(h.x, h.y) && c.push(b);
      }, this), c;
    },
    addData: function (b, c, d) {
      c = cc11001100_hook("c", void 0 !== c ? c : this.segments.length, "assign");
      "undefined" == typeof b.color && (b.color = cc11001100_hook("b.color", l.defaults.global.segmentColorDefault[c % l.defaults.global.segmentColorDefault.length], "assign"), b.highlight = cc11001100_hook("b.highlight", l.defaults.global.segmentHighlightColorDefaults[c % l.defaults.global.segmentHighlightColorDefaults.length], "assign"));
      this.segments.splice(c, 0, new this.SegmentArc({
        value: cc11001100_hook("value", b.value, "object-key-init"),
        outerRadius: cc11001100_hook("outerRadius", this.options.animateScale ? 0 : this.outerRadius, "object-key-init"),
        innerRadius: cc11001100_hook("innerRadius", this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout, "object-key-init"),
        fillColor: cc11001100_hook("fillColor", b.color, "object-key-init"),
        highlightColor: cc11001100_hook("highlightColor", b.highlight || b.color, "object-key-init"),
        showStroke: cc11001100_hook("showStroke", this.options.segmentShowStroke, "object-key-init"),
        strokeWidth: cc11001100_hook("strokeWidth", this.options.segmentStrokeWidth, "object-key-init"),
        strokeColor: cc11001100_hook("strokeColor", this.options.segmentStrokeColor, "object-key-init"),
        startAngle: cc11001100_hook("startAngle", 1.5 * Math.PI, "object-key-init"),
        circumference: cc11001100_hook("circumference", this.options.animateRotate ? 0 : this.calculateCircumference(b.value), "object-key-init"),
        label: cc11001100_hook("label", b.label, "object-key-init")
      }));
      d || (this.reflow(), this.update());
    },
    calculateCircumference: function (b) {
      return 0 < this.total ? b / this.total * Math.PI * 2 : 0;
    },
    calculateTotal: function (b) {
      this.total = cc11001100_hook("this.total", 0, "assign");
      d.each(b, function (b) {
        this.total += cc11001100_hook("this.total", Math.abs(b.value), "assign");
      }, this);
    },
    update: function () {
      this.calculateTotal(this.segments);
      d.each(this.activeElements, function (b) {
        b.restore(["fillColor"]);
      });
      d.each(this.segments, function (b) {
        b.save();
      });
      this.render();
    },
    removeData: function (b) {
      b = cc11001100_hook("b", d.isNumber(b) ? b : this.segments.length - 1, "assign");
      this.segments.splice(b, 1);
      this.reflow();
      this.update();
    },
    reflow: function () {
      d.extend(this.SegmentArc.prototype, {
        x: cc11001100_hook("x", this.chart.width / 2, "object-key-init"),
        y: cc11001100_hook("y", this.chart.height / 2, "object-key-init")
      });
      this.outerRadius = cc11001100_hook("this.outerRadius", (d.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, "assign");
      d.each(this.segments, function (b) {
        b.update({
          outerRadius: cc11001100_hook("outerRadius", this.outerRadius, "object-key-init"),
          innerRadius: cc11001100_hook("innerRadius", this.outerRadius / 100 * this.options.percentageInnerCutout, "object-key-init")
        });
      }, this);
    },
    draw: function (b) {
      var c = cc11001100_hook("c", b ? b : 1, "var-init");
      this.clear();
      d.each(this.segments, function (b, d) {
        b.transition({
          circumference: cc11001100_hook("circumference", this.calculateCircumference(b.value), "object-key-init"),
          outerRadius: cc11001100_hook("outerRadius", this.outerRadius, "object-key-init"),
          innerRadius: cc11001100_hook("innerRadius", this.outerRadius / 100 * this.options.percentageInnerCutout, "object-key-init")
        }, c);
        b.endAngle = cc11001100_hook("b.endAngle", b.startAngle + b.circumference, "assign");
        b.draw();
        0 === d && (b.startAngle = cc11001100_hook("b.startAngle", 1.5 * Math.PI, "assign"));
        d < this.segments.length - 1 && (this.segments[d + 1].startAngle = cc11001100_hook("this.segments[d + 1].startAngle", b.endAngle, "assign"));
      }, this);
    }
  });
  l.types.Doughnut.extend({
    name: cc11001100_hook("name", "Pie", "object-key-init"),
    defaults: cc11001100_hook("defaults", d.merge(c, {
      percentageInnerCutout: cc11001100_hook("percentageInnerCutout", 0, "object-key-init")
    }), "object-key-init")
  });
}).call(this);
(function () {
  var l = cc11001100_hook("l", this.Chart, "var-init"),
    d = cc11001100_hook("d", l.helpers, "var-init");
  l.Type.extend({
    name: cc11001100_hook("name", "Line", "object-key-init"),
    defaults: {
      scaleShowGridLines: cc11001100_hook("scaleShowGridLines", !0, "object-key-init"),
      scaleGridLineColor: cc11001100_hook("scaleGridLineColor", "rgba(0,0,0,.05)", "object-key-init"),
      scaleGridLineWidth: cc11001100_hook("scaleGridLineWidth", 1, "object-key-init"),
      scaleShowHorizontalLines: cc11001100_hook("scaleShowHorizontalLines", !0, "object-key-init"),
      scaleShowVerticalLines: cc11001100_hook("scaleShowVerticalLines", !0, "object-key-init"),
      bezierCurve: cc11001100_hook("bezierCurve", !0, "object-key-init"),
      bezierCurveTension: cc11001100_hook("bezierCurveTension", .4, "object-key-init"),
      pointDot: cc11001100_hook("pointDot", !0, "object-key-init"),
      pointDotRadius: cc11001100_hook("pointDotRadius", 4, "object-key-init"),
      pointDotStrokeWidth: cc11001100_hook("pointDotStrokeWidth", 1, "object-key-init"),
      pointHitDetectionRadius: cc11001100_hook("pointHitDetectionRadius", 20, "object-key-init"),
      datasetStroke: cc11001100_hook("datasetStroke", !0, "object-key-init"),
      datasetStrokeWidth: cc11001100_hook("datasetStrokeWidth", 2, "object-key-init"),
      datasetFill: cc11001100_hook("datasetFill", !0, "object-key-init"),
      legendTemplate: cc11001100_hook("legendTemplate", '\x3cul class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend"\x3e\x3c% for (var i\x3d0; i\x3cdatasets.length; i++){%\x3e\x3cli\x3e\x3cspan class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend-icon" style\x3d"background-color:\x3c%\x3ddatasets[i].strokeColor%\x3e"\x3e\x3c/span\x3e\x3cspan class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend-text"\x3e\x3c%if(datasets[i].label){%\x3e\x3c%\x3ddatasets[i].label%\x3e\x3c%}%\x3e\x3c/span\x3e\x3c/li\x3e\x3c%}%\x3e\x3c/ul\x3e', "object-key-init"),
      offsetGridLines: cc11001100_hook("offsetGridLines", !1, "object-key-init")
    },
    initialize: function (c) {
      this.PointClass = cc11001100_hook("this.PointClass", l.Point.extend({
        offsetGridLines: cc11001100_hook("offsetGridLines", this.options.offsetGridLines, "object-key-init"),
        strokeWidth: cc11001100_hook("strokeWidth", this.options.pointDotStrokeWidth, "object-key-init"),
        radius: cc11001100_hook("radius", this.options.pointDotRadius, "object-key-init"),
        display: cc11001100_hook("display", this.options.pointDot, "object-key-init"),
        hitDetectionRadius: cc11001100_hook("hitDetectionRadius", this.options.pointHitDetectionRadius, "object-key-init"),
        ctx: cc11001100_hook("ctx", this.chart.ctx, "object-key-init"),
        inRange: function (b) {
          return Math.pow(b - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2);
        }
      }), "assign");
      this.datasets = cc11001100_hook("this.datasets", [], "assign");
      this.options.showTooltips && d.bindEvents(this, this.options.tooltipEvents, function (b) {
        b = cc11001100_hook("b", "mouseout" !== b.type ? this.getPointsAtEvent(b) : [], "assign");
        this.eachPoints(function (b) {
          b.restore(["fillColor", "strokeColor"]);
        });
        d.each(b, function (b) {
          b.fillColor = cc11001100_hook("b.fillColor", b.highlightFill, "assign");
          b.strokeColor = cc11001100_hook("b.strokeColor", b.highlightStroke, "assign");
        });
        this.showTooltip(b);
      });
      d.each(c.datasets, function (b) {
        var e = cc11001100_hook("e", {
          label: cc11001100_hook("label", b.label || null, "object-key-init"),
          fillColor: cc11001100_hook("fillColor", b.fillColor, "object-key-init"),
          strokeColor: cc11001100_hook("strokeColor", b.strokeColor, "object-key-init"),
          pointColor: cc11001100_hook("pointColor", b.pointColor, "object-key-init"),
          pointStrokeColor: cc11001100_hook("pointStrokeColor", b.pointStrokeColor, "object-key-init"),
          points: cc11001100_hook("points", [], "object-key-init")
        }, "var-init");
        this.datasets.push(e);
        d.each(b.data, function (d, k) {
          e.points.push(new this.PointClass({
            value: cc11001100_hook("value", d, "object-key-init"),
            label: cc11001100_hook("label", c.labels[k], "object-key-init"),
            datasetLabel: cc11001100_hook("datasetLabel", b.label, "object-key-init"),
            strokeColor: cc11001100_hook("strokeColor", b.pointStrokeColor, "object-key-init"),
            fillColor: cc11001100_hook("fillColor", b.pointColor, "object-key-init"),
            highlightFill: cc11001100_hook("highlightFill", b.pointHighlightFill || b.pointColor, "object-key-init"),
            highlightStroke: cc11001100_hook("highlightStroke", b.pointHighlightStroke || b.pointStrokeColor, "object-key-init")
          }));
        }, this);
        this.buildScale(c.labels);
        this.eachPoints(function (b, c) {
          d.extend(b, {
            x: cc11001100_hook("x", this.scale.calculateX(c), "object-key-init"),
            y: cc11001100_hook("y", this.scale.endPoint, "object-key-init")
          });
          b.save();
        }, this);
      }, this);
      this.render();
    },
    update: function () {
      this.scale.update();
      d.each(this.activeElements, function (c) {
        c.restore(["fillColor", "strokeColor"]);
      });
      this.eachPoints(function (c) {
        c.save();
      });
      this.render();
    },
    eachPoints: function (c) {
      d.each(this.datasets, function (b) {
        d.each(b.points, c, this);
      }, this);
    },
    getPointsAtEvent: function (c) {
      var b = cc11001100_hook("b", [], "var-init"),
        e = cc11001100_hook("e", d.getRelativePosition(c), "var-init");
      return d.each(this.datasets, function (c) {
        d.each(c.points, function (c) {
          c.inRange(e.x, e.y) && b.push(c);
        });
      }, this), b;
    },
    buildScale: function (c) {
      var b = cc11001100_hook("b", this, "var-init"),
        e = function () {
          var c = cc11001100_hook("c", [], "var-init");
          return b.eachPoints(function (b) {
            c.push(b.value);
          }), c;
        };
      c = cc11001100_hook("c", {
        templateString: cc11001100_hook("templateString", this.options.scaleLabel, "object-key-init"),
        height: cc11001100_hook("height", this.chart.height, "object-key-init"),
        width: cc11001100_hook("width", this.chart.width, "object-key-init"),
        ctx: cc11001100_hook("ctx", this.chart.ctx, "object-key-init"),
        textColor: cc11001100_hook("textColor", this.options.scaleFontColor, "object-key-init"),
        offsetGridLines: cc11001100_hook("offsetGridLines", this.options.offsetGridLines, "object-key-init"),
        fontSize: cc11001100_hook("fontSize", this.options.scaleFontSize, "object-key-init"),
        fontStyle: cc11001100_hook("fontStyle", this.options.scaleFontStyle, "object-key-init"),
        fontFamily: cc11001100_hook("fontFamily", this.options.scaleFontFamily, "object-key-init"),
        valuesCount: cc11001100_hook("valuesCount", c.length, "object-key-init"),
        beginAtZero: cc11001100_hook("beginAtZero", this.options.scaleBeginAtZero, "object-key-init"),
        integersOnly: cc11001100_hook("integersOnly", this.options.scaleIntegersOnly, "object-key-init"),
        calculateYRange: function (b) {
          b = cc11001100_hook("b", d.calculateScaleRange(e(), b, this.fontSize, this.beginAtZero, this.integersOnly), "assign");
          d.extend(this, b);
        },
        xLabels: cc11001100_hook("xLabels", c, "object-key-init"),
        font: cc11001100_hook("font", d.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), "object-key-init"),
        lineWidth: cc11001100_hook("lineWidth", this.options.scaleLineWidth, "object-key-init"),
        lineColor: cc11001100_hook("lineColor", this.options.scaleLineColor, "object-key-init"),
        showHorizontalLines: cc11001100_hook("showHorizontalLines", this.options.scaleShowHorizontalLines, "object-key-init"),
        showVerticalLines: cc11001100_hook("showVerticalLines", this.options.scaleShowVerticalLines, "object-key-init"),
        gridLineWidth: cc11001100_hook("gridLineWidth", this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, "object-key-init"),
        gridLineColor: cc11001100_hook("gridLineColor", this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", "object-key-init"),
        padding: cc11001100_hook("padding", this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth, "object-key-init"),
        showLabels: cc11001100_hook("showLabels", this.options.scaleShowLabels, "object-key-init"),
        display: cc11001100_hook("display", this.options.showScale, "object-key-init")
      }, "assign");
      this.options.scaleOverride && d.extend(c, {
        calculateYRange: cc11001100_hook("calculateYRange", d.noop, "object-key-init"),
        steps: cc11001100_hook("steps", this.options.scaleSteps, "object-key-init"),
        stepValue: cc11001100_hook("stepValue", this.options.scaleStepWidth, "object-key-init"),
        min: cc11001100_hook("min", this.options.scaleStartValue, "object-key-init"),
        max: cc11001100_hook("max", this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth, "object-key-init")
      });
      this.scale = cc11001100_hook("this.scale", new l.Scale(c), "assign");
    },
    addData: function (c, b) {
      d.each(c, function (c, d) {
        this.datasets[d].points.push(new this.PointClass({
          value: cc11001100_hook("value", c, "object-key-init"),
          label: cc11001100_hook("label", b, "object-key-init"),
          datasetLabel: cc11001100_hook("datasetLabel", this.datasets[d].label, "object-key-init"),
          x: cc11001100_hook("x", this.scale.calculateX(this.scale.valuesCount + 1), "object-key-init"),
          y: cc11001100_hook("y", this.scale.endPoint, "object-key-init"),
          strokeColor: cc11001100_hook("strokeColor", this.datasets[d].pointStrokeColor, "object-key-init"),
          fillColor: cc11001100_hook("fillColor", this.datasets[d].pointColor, "object-key-init")
        }));
      }, this);
      this.scale.addXLabel(b);
      this.update();
    },
    removeData: function () {
      this.scale.removeXLabel();
      d.each(this.datasets, function (c) {
        c.points.shift();
      }, this);
      this.update();
    },
    reflow: function () {
      var c = cc11001100_hook("c", d.extend({
        height: cc11001100_hook("height", this.chart.height, "object-key-init"),
        width: cc11001100_hook("width", this.chart.width, "object-key-init")
      }), "var-init");
      this.scale.update(c);
    },
    draw: function (c) {
      var b = cc11001100_hook("b", c || 1, "var-init");
      this.clear();
      var e = cc11001100_hook("e", this.chart.ctx, "var-init"),
        h = function (b) {
          return null !== b.value;
        },
        k = function (b, c, e) {
          return d.findNextWhere(c, h, e) || b;
        },
        l = function (b, c, e) {
          return d.findPreviousWhere(c, h, e) || b;
        };
      this.scale && (this.scale.draw(b), d.each(this.datasets, function (c) {
        var n = cc11001100_hook("n", d.where(c.points, h), "var-init");
        d.each(c.points, function (c, e) {
          c.hasValue() && c.transition({
            y: cc11001100_hook("y", this.scale.calculateY(c.value), "object-key-init"),
            x: cc11001100_hook("x", this.scale.calculateX(e), "object-key-init")
          }, b);
        }, this);
        this.options.bezierCurve && d.each(n, function (b, c) {
          var e = cc11001100_hook("e", 0 < c && c < n.length - 1 ? this.options.bezierCurveTension : 0, "var-init");
          b.controlPoints = cc11001100_hook("b.controlPoints", d.splineCurve(l(b, n, c), b, k(b, n, c), e), "assign");
          b.controlPoints.outer.y > this.scale.endPoint ? b.controlPoints.outer.y = cc11001100_hook("b.controlPoints.outer.y", this.scale.endPoint, "assign") : b.controlPoints.outer.y < this.scale.startPoint && (b.controlPoints.outer.y = cc11001100_hook("b.controlPoints.outer.y", this.scale.startPoint, "assign"));
          b.controlPoints.inner.y > this.scale.endPoint ? b.controlPoints.inner.y = cc11001100_hook("b.controlPoints.inner.y", this.scale.endPoint, "assign") : b.controlPoints.inner.y < this.scale.startPoint && (b.controlPoints.inner.y = cc11001100_hook("b.controlPoints.inner.y", this.scale.startPoint, "assign"));
        }, this);
        e.lineWidth = cc11001100_hook("e.lineWidth", this.options.datasetStrokeWidth, "assign");
        e.strokeStyle = cc11001100_hook("e.strokeStyle", c.strokeColor, "assign");
        e.beginPath();
        d.each(n, function (b, c) {
          if (0 === c) e.moveTo(b.x, b.y);else if (this.options.bezierCurve) {
            var d = cc11001100_hook("d", l(b, n, c), "var-init");
            e.bezierCurveTo(d.controlPoints.outer.x, d.controlPoints.outer.y, b.controlPoints.inner.x, b.controlPoints.inner.y, b.x, b.y);
          } else e.lineTo(b.x, b.y);
        }, this);
        this.options.datasetStroke && e.stroke();
        this.options.datasetFill && 0 < n.length && (e.lineTo(n[n.length - 1].x, this.scale.endPoint), e.lineTo(n[0].x, this.scale.endPoint), e.fillStyle = cc11001100_hook("e.fillStyle", c.fillColor, "assign"), e.closePath(), e.fill());
        d.each(n, function (b) {
          b.draw();
        });
      }, this));
    }
  });
}).call(this);
(function () {
  var l = cc11001100_hook("l", this.Chart, "var-init"),
    d = cc11001100_hook("d", l.helpers, "var-init");
  l.Type.extend({
    name: cc11001100_hook("name", "PolarArea", "object-key-init"),
    defaults: {
      scaleShowLabelBackdrop: cc11001100_hook("scaleShowLabelBackdrop", !0, "object-key-init"),
      scaleBackdropColor: cc11001100_hook("scaleBackdropColor", "rgba(255,255,255,0.75)", "object-key-init"),
      scaleBeginAtZero: cc11001100_hook("scaleBeginAtZero", !0, "object-key-init"),
      scaleBackdropPaddingY: cc11001100_hook("scaleBackdropPaddingY", 2, "object-key-init"),
      scaleBackdropPaddingX: cc11001100_hook("scaleBackdropPaddingX", 2, "object-key-init"),
      scaleShowLine: cc11001100_hook("scaleShowLine", !0, "object-key-init"),
      segmentShowStroke: cc11001100_hook("segmentShowStroke", !0, "object-key-init"),
      segmentStrokeColor: cc11001100_hook("segmentStrokeColor", "#fff", "object-key-init"),
      segmentStrokeWidth: cc11001100_hook("segmentStrokeWidth", 2, "object-key-init"),
      animationSteps: cc11001100_hook("animationSteps", 100, "object-key-init"),
      animationEasing: cc11001100_hook("animationEasing", "easeOutBounce", "object-key-init"),
      animateRotate: cc11001100_hook("animateRotate", !0, "object-key-init"),
      animateScale: cc11001100_hook("animateScale", !1, "object-key-init"),
      legendTemplate: cc11001100_hook("legendTemplate", '\x3cul class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend"\x3e\x3c% for (var i\x3d0; i\x3csegments.length; i++){%\x3e\x3cli\x3e\x3cspan class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend-icon" style\x3d"background-color:\x3c%\x3dsegments[i].fillColor%\x3e"\x3e\x3c/span\x3e\x3cspan class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend-text"\x3e\x3c%if(segments[i].label){%\x3e\x3c%\x3dsegments[i].label%\x3e\x3c%}%\x3e\x3c/span\x3e\x3c/li\x3e\x3c%}%\x3e\x3c/ul\x3e', "object-key-init")
    },
    initialize: function (c) {
      this.segments = cc11001100_hook("this.segments", [], "assign");
      this.SegmentArc = cc11001100_hook("this.SegmentArc", l.Arc.extend({
        showStroke: cc11001100_hook("showStroke", this.options.segmentShowStroke, "object-key-init"),
        strokeWidth: cc11001100_hook("strokeWidth", this.options.segmentStrokeWidth, "object-key-init"),
        strokeColor: cc11001100_hook("strokeColor", this.options.segmentStrokeColor, "object-key-init"),
        ctx: cc11001100_hook("ctx", this.chart.ctx, "object-key-init"),
        innerRadius: cc11001100_hook("innerRadius", 0, "object-key-init"),
        x: cc11001100_hook("x", this.chart.width / 2, "object-key-init"),
        y: cc11001100_hook("y", this.chart.height / 2, "object-key-init")
      }), "assign");
      this.scale = cc11001100_hook("this.scale", new l.RadialScale({
        display: cc11001100_hook("display", this.options.showScale, "object-key-init"),
        fontStyle: cc11001100_hook("fontStyle", this.options.scaleFontStyle, "object-key-init"),
        fontSize: cc11001100_hook("fontSize", this.options.scaleFontSize, "object-key-init"),
        fontFamily: cc11001100_hook("fontFamily", this.options.scaleFontFamily, "object-key-init"),
        fontColor: cc11001100_hook("fontColor", this.options.scaleFontColor, "object-key-init"),
        showLabels: cc11001100_hook("showLabels", this.options.scaleShowLabels, "object-key-init"),
        showLabelBackdrop: cc11001100_hook("showLabelBackdrop", this.options.scaleShowLabelBackdrop, "object-key-init"),
        backdropColor: cc11001100_hook("backdropColor", this.options.scaleBackdropColor, "object-key-init"),
        backdropPaddingY: cc11001100_hook("backdropPaddingY", this.options.scaleBackdropPaddingY, "object-key-init"),
        backdropPaddingX: cc11001100_hook("backdropPaddingX", this.options.scaleBackdropPaddingX, "object-key-init"),
        lineWidth: cc11001100_hook("lineWidth", this.options.scaleShowLine ? this.options.scaleLineWidth : 0, "object-key-init"),
        lineColor: cc11001100_hook("lineColor", this.options.scaleLineColor, "object-key-init"),
        lineArc: cc11001100_hook("lineArc", !0, "object-key-init"),
        width: cc11001100_hook("width", this.chart.width, "object-key-init"),
        height: cc11001100_hook("height", this.chart.height, "object-key-init"),
        xCenter: cc11001100_hook("xCenter", this.chart.width / 2, "object-key-init"),
        yCenter: cc11001100_hook("yCenter", this.chart.height / 2, "object-key-init"),
        ctx: cc11001100_hook("ctx", this.chart.ctx, "object-key-init"),
        templateString: cc11001100_hook("templateString", this.options.scaleLabel, "object-key-init"),
        valuesCount: cc11001100_hook("valuesCount", c.length, "object-key-init")
      }), "assign");
      this.updateScaleRange(c);
      this.scale.update();
      d.each(c, function (b, c) {
        this.addData(b, c, !0);
      }, this);
      this.options.showTooltips && d.bindEvents(this, this.options.tooltipEvents, function (b) {
        b = cc11001100_hook("b", "mouseout" !== b.type ? this.getSegmentsAtEvent(b) : [], "assign");
        d.each(this.segments, function (b) {
          b.restore(["fillColor"]);
        });
        d.each(b, function (b) {
          b.fillColor = cc11001100_hook("b.fillColor", b.highlightColor, "assign");
        });
        this.showTooltip(b);
      });
      this.render();
    },
    getSegmentsAtEvent: function (c) {
      var b = cc11001100_hook("b", [], "var-init"),
        e = cc11001100_hook("e", d.getRelativePosition(c), "var-init");
      return d.each(this.segments, function (c) {
        c.inRange(e.x, e.y) && b.push(c);
      }, this), b;
    },
    addData: function (c, b, e) {
      this.segments.splice(b || this.segments.length, 0, new this.SegmentArc({
        fillColor: cc11001100_hook("fillColor", c.color, "object-key-init"),
        highlightColor: cc11001100_hook("highlightColor", c.highlight || c.color, "object-key-init"),
        label: cc11001100_hook("label", c.label, "object-key-init"),
        value: cc11001100_hook("value", c.value, "object-key-init"),
        outerRadius: cc11001100_hook("outerRadius", this.options.animateScale ? 0 : this.scale.calculateCenterOffset(c.value), "object-key-init"),
        circumference: cc11001100_hook("circumference", this.options.animateRotate ? 0 : this.scale.getCircumference(), "object-key-init"),
        startAngle: cc11001100_hook("startAngle", 1.5 * Math.PI, "object-key-init")
      }));
      e || (this.reflow(), this.update());
    },
    removeData: function (c) {
      c = cc11001100_hook("c", d.isNumber(c) ? c : this.segments.length - 1, "assign");
      this.segments.splice(c, 1);
      this.reflow();
      this.update();
    },
    calculateTotal: function (c) {
      this.total = cc11001100_hook("this.total", 0, "assign");
      d.each(c, function (b) {
        this.total += cc11001100_hook("this.total", b.value, "assign");
      }, this);
      this.scale.valuesCount = cc11001100_hook("this.scale.valuesCount", this.segments.length, "assign");
    },
    updateScaleRange: function (c) {
      var b = cc11001100_hook("b", [], "var-init");
      d.each(c, function (c) {
        b.push(c.value);
      });
      c = cc11001100_hook("c", this.options.scaleOverride ? {
        steps: cc11001100_hook("steps", this.options.scaleSteps, "object-key-init"),
        stepValue: cc11001100_hook("stepValue", this.options.scaleStepWidth, "object-key-init"),
        min: cc11001100_hook("min", this.options.scaleStartValue, "object-key-init"),
        max: cc11001100_hook("max", this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth, "object-key-init")
      } : d.calculateScaleRange(b, d.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly), "assign");
      d.extend(this.scale, c, {
        size: cc11001100_hook("size", d.min([this.chart.width, this.chart.height]), "object-key-init"),
        xCenter: cc11001100_hook("xCenter", this.chart.width / 2, "object-key-init"),
        yCenter: cc11001100_hook("yCenter", this.chart.height / 2, "object-key-init")
      });
    },
    update: function () {
      this.calculateTotal(this.segments);
      d.each(this.segments, function (c) {
        c.save();
      });
      this.reflow();
      this.render();
    },
    reflow: function () {
      d.extend(this.SegmentArc.prototype, {
        x: cc11001100_hook("x", this.chart.width / 2, "object-key-init"),
        y: cc11001100_hook("y", this.chart.height / 2, "object-key-init")
      });
      this.updateScaleRange(this.segments);
      this.scale.update();
      d.extend(this.scale, {
        xCenter: cc11001100_hook("xCenter", this.chart.width / 2, "object-key-init"),
        yCenter: cc11001100_hook("yCenter", this.chart.height / 2, "object-key-init")
      });
      d.each(this.segments, function (c) {
        c.update({
          outerRadius: cc11001100_hook("outerRadius", this.scale.calculateCenterOffset(c.value), "object-key-init")
        });
      }, this);
    },
    draw: function (c) {
      var b = cc11001100_hook("b", c || 1, "var-init");
      this.clear();
      d.each(this.segments, function (c, d) {
        c.transition({
          circumference: cc11001100_hook("circumference", this.scale.getCircumference(), "object-key-init"),
          outerRadius: cc11001100_hook("outerRadius", this.scale.calculateCenterOffset(c.value), "object-key-init")
        }, b);
        c.endAngle = cc11001100_hook("c.endAngle", c.startAngle + c.circumference, "assign");
        0 === d && (c.startAngle = cc11001100_hook("c.startAngle", 1.5 * Math.PI, "assign"));
        d < this.segments.length - 1 && (this.segments[d + 1].startAngle = cc11001100_hook("this.segments[d + 1].startAngle", c.endAngle, "assign"));
        c.draw();
      }, this);
      this.scale.draw();
    }
  });
}).call(this);
(function () {
  var l = cc11001100_hook("l", this.Chart, "var-init"),
    d = cc11001100_hook("d", l.helpers, "var-init");
  l.Type.extend({
    name: cc11001100_hook("name", "Radar", "object-key-init"),
    defaults: {
      scaleShowLine: cc11001100_hook("scaleShowLine", !0, "object-key-init"),
      angleShowLineOut: cc11001100_hook("angleShowLineOut", !0, "object-key-init"),
      scaleShowLabels: cc11001100_hook("scaleShowLabels", !1, "object-key-init"),
      scaleBeginAtZero: cc11001100_hook("scaleBeginAtZero", !0, "object-key-init"),
      angleLineColor: cc11001100_hook("angleLineColor", "rgba(0,0,0,.1)", "object-key-init"),
      angleLineWidth: cc11001100_hook("angleLineWidth", 1, "object-key-init"),
      angleLineInterval: cc11001100_hook("angleLineInterval", 1, "object-key-init"),
      pointLabelFontFamily: cc11001100_hook("pointLabelFontFamily", "'Arial'", "object-key-init"),
      pointLabelFontStyle: cc11001100_hook("pointLabelFontStyle", "normal", "object-key-init"),
      pointLabelFontSize: cc11001100_hook("pointLabelFontSize", 10, "object-key-init"),
      pointLabelFontColor: cc11001100_hook("pointLabelFontColor", "#666", "object-key-init"),
      pointDot: cc11001100_hook("pointDot", !0, "object-key-init"),
      pointDotRadius: cc11001100_hook("pointDotRadius", 3, "object-key-init"),
      pointDotStrokeWidth: cc11001100_hook("pointDotStrokeWidth", 1, "object-key-init"),
      pointHitDetectionRadius: cc11001100_hook("pointHitDetectionRadius", 20, "object-key-init"),
      datasetStroke: cc11001100_hook("datasetStroke", !0, "object-key-init"),
      datasetStrokeWidth: cc11001100_hook("datasetStrokeWidth", 2, "object-key-init"),
      datasetFill: cc11001100_hook("datasetFill", !0, "object-key-init"),
      legendTemplate: cc11001100_hook("legendTemplate", '\x3cul class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend"\x3e\x3c% for (var i\x3d0; i\x3cdatasets.length; i++){%\x3e\x3cli\x3e\x3cspan class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend-icon" style\x3d"background-color:\x3c%\x3ddatasets[i].strokeColor%\x3e"\x3e\x3c/span\x3e\x3cspan class\x3d"\x3c%\x3dname.toLowerCase()%\x3e-legend-text"\x3e\x3c%if(datasets[i].label){%\x3e\x3c%\x3ddatasets[i].label%\x3e\x3c%}%\x3e\x3c/span\x3e\x3c/li\x3e\x3c%}%\x3e\x3c/ul\x3e', "object-key-init")
    },
    initialize: function (c) {
      this.PointClass = cc11001100_hook("this.PointClass", l.Point.extend({
        strokeWidth: cc11001100_hook("strokeWidth", this.options.pointDotStrokeWidth, "object-key-init"),
        radius: cc11001100_hook("radius", this.options.pointDotRadius, "object-key-init"),
        display: cc11001100_hook("display", this.options.pointDot, "object-key-init"),
        hitDetectionRadius: cc11001100_hook("hitDetectionRadius", this.options.pointHitDetectionRadius, "object-key-init"),
        ctx: cc11001100_hook("ctx", this.chart.ctx, "object-key-init")
      }), "assign");
      this.datasets = cc11001100_hook("this.datasets", [], "assign");
      this.buildScale(c);
      this.options.showTooltips && d.bindEvents(this, this.options.tooltipEvents, function (b) {
        b = cc11001100_hook("b", "mouseout" !== b.type ? this.getPointsAtEvent(b) : [], "assign");
        this.eachPoints(function (b) {
          b.restore(["fillColor", "strokeColor"]);
        });
        d.each(b, function (b) {
          b.fillColor = cc11001100_hook("b.fillColor", b.highlightFill, "assign");
          b.strokeColor = cc11001100_hook("b.strokeColor", b.highlightStroke, "assign");
        });
        this.showTooltip(b);
      });
      d.each(c.datasets, function (b) {
        var e = cc11001100_hook("e", {
          label: cc11001100_hook("label", b.label || null, "object-key-init"),
          fillColor: cc11001100_hook("fillColor", b.fillColor, "object-key-init"),
          strokeColor: cc11001100_hook("strokeColor", b.strokeColor, "object-key-init"),
          pointColor: cc11001100_hook("pointColor", b.pointColor, "object-key-init"),
          pointStrokeColor: cc11001100_hook("pointStrokeColor", b.pointStrokeColor, "object-key-init"),
          points: cc11001100_hook("points", [], "object-key-init")
        }, "var-init");
        this.datasets.push(e);
        d.each(b.data, function (d, k) {
          var l;
          this.scale.animation || (l = cc11001100_hook("l", this.scale.getPointPosition(k, this.scale.calculateCenterOffset(d)), "assign"));
          e.points.push(new this.PointClass({
            value: cc11001100_hook("value", d, "object-key-init"),
            label: cc11001100_hook("label", c.labels[k], "object-key-init"),
            datasetLabel: cc11001100_hook("datasetLabel", b.label, "object-key-init"),
            x: cc11001100_hook("x", this.options.animation ? this.scale.xCenter : l.x, "object-key-init"),
            y: cc11001100_hook("y", this.options.animation ? this.scale.yCenter : l.y, "object-key-init"),
            strokeColor: cc11001100_hook("strokeColor", b.pointStrokeColor, "object-key-init"),
            fillColor: cc11001100_hook("fillColor", b.pointColor, "object-key-init"),
            highlightFill: cc11001100_hook("highlightFill", b.pointHighlightFill || b.pointColor, "object-key-init"),
            highlightStroke: cc11001100_hook("highlightStroke", b.pointHighlightStroke || b.pointStrokeColor, "object-key-init")
          }));
        }, this);
      }, this);
      this.render();
    },
    eachPoints: function (c) {
      d.each(this.datasets, function (b) {
        d.each(b.points, c, this);
      }, this);
    },
    getPointsAtEvent: function (c) {
      c = cc11001100_hook("c", d.getRelativePosition(c), "assign");
      c = cc11001100_hook("c", d.getAngleFromPoint({
        x: cc11001100_hook("x", this.scale.xCenter, "object-key-init"),
        y: cc11001100_hook("y", this.scale.yCenter, "object-key-init")
      }, c), "assign");
      var b = cc11001100_hook("b", Math.round((c.angle - 1.5 * Math.PI) / (2 * Math.PI / this.scale.valuesCount)), "var-init"),
        e = cc11001100_hook("e", [], "var-init");
      return (b >= this.scale.valuesCount || 0 > b) && (b = cc11001100_hook("b", 0, "assign")), c.distance <= this.scale.drawingArea && d.each(this.datasets, function (c) {
        e.push(c.points[b]);
      }), e;
    },
    buildScale: function (c) {
      this.scale = cc11001100_hook("this.scale", new l.RadialScale({
        display: cc11001100_hook("display", this.options.showScale, "object-key-init"),
        fontStyle: cc11001100_hook("fontStyle", this.options.scaleFontStyle, "object-key-init"),
        fontSize: cc11001100_hook("fontSize", this.options.scaleFontSize, "object-key-init"),
        fontFamily: cc11001100_hook("fontFamily", this.options.scaleFontFamily, "object-key-init"),
        fontColor: cc11001100_hook("fontColor", this.options.scaleFontColor, "object-key-init"),
        showLabels: cc11001100_hook("showLabels", this.options.scaleShowLabels, "object-key-init"),
        showLabelBackdrop: cc11001100_hook("showLabelBackdrop", this.options.scaleShowLabelBackdrop, "object-key-init"),
        backdropColor: cc11001100_hook("backdropColor", this.options.scaleBackdropColor, "object-key-init"),
        backgroundColors: cc11001100_hook("backgroundColors", this.options.scaleBackgroundColors, "object-key-init"),
        backdropPaddingY: cc11001100_hook("backdropPaddingY", this.options.scaleBackdropPaddingY, "object-key-init"),
        backdropPaddingX: cc11001100_hook("backdropPaddingX", this.options.scaleBackdropPaddingX, "object-key-init"),
        lineWidth: cc11001100_hook("lineWidth", this.options.scaleShowLine ? this.options.scaleLineWidth : 0, "object-key-init"),
        lineColor: cc11001100_hook("lineColor", this.options.scaleLineColor, "object-key-init"),
        angleLineColor: cc11001100_hook("angleLineColor", this.options.angleLineColor, "object-key-init"),
        angleLineWidth: cc11001100_hook("angleLineWidth", this.options.angleShowLineOut ? this.options.angleLineWidth : 0, "object-key-init"),
        angleLineInterval: cc11001100_hook("angleLineInterval", this.options.angleLineInterval ? this.options.angleLineInterval : 1, "object-key-init"),
        pointLabelFontColor: cc11001100_hook("pointLabelFontColor", this.options.pointLabelFontColor, "object-key-init"),
        pointLabelFontSize: cc11001100_hook("pointLabelFontSize", this.options.pointLabelFontSize, "object-key-init"),
        pointLabelFontFamily: cc11001100_hook("pointLabelFontFamily", this.options.pointLabelFontFamily, "object-key-init"),
        pointLabelFontStyle: cc11001100_hook("pointLabelFontStyle", this.options.pointLabelFontStyle, "object-key-init"),
        height: cc11001100_hook("height", this.chart.height, "object-key-init"),
        width: cc11001100_hook("width", this.chart.width, "object-key-init"),
        xCenter: cc11001100_hook("xCenter", this.chart.width / 2, "object-key-init"),
        yCenter: cc11001100_hook("yCenter", this.chart.height / 2, "object-key-init"),
        ctx: cc11001100_hook("ctx", this.chart.ctx, "object-key-init"),
        templateString: cc11001100_hook("templateString", this.options.scaleLabel, "object-key-init"),
        labels: cc11001100_hook("labels", c.labels, "object-key-init"),
        valuesCount: cc11001100_hook("valuesCount", c.datasets[0].data.length, "object-key-init")
      }), "assign");
      this.scale.setScaleSize();
      this.updateScaleRange(c.datasets);
      this.scale.buildYLabels();
    },
    updateScaleRange: function (c) {
      var b = cc11001100_hook("b", function () {
          var b = cc11001100_hook("b", [], "var-init");
          return d.each(c, function (c) {
            c.data ? b = cc11001100_hook("b", b.concat(c.data), "assign") : d.each(c.points, function (c) {
              b.push(c.value);
            });
          }), b;
        }(), "var-init"),
        b = cc11001100_hook("b", this.options.scaleOverride ? {
          steps: cc11001100_hook("steps", this.options.scaleSteps, "object-key-init"),
          stepValue: cc11001100_hook("stepValue", this.options.scaleStepWidth, "object-key-init"),
          min: cc11001100_hook("min", this.options.scaleStartValue, "object-key-init"),
          max: cc11001100_hook("max", this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth, "object-key-init")
        } : d.calculateScaleRange(b, d.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly), "var-init");
      d.extend(this.scale, b);
    },
    addData: function (c, b) {
      this.scale.valuesCount++;
      d.each(c, function (c, d) {
        var k = cc11001100_hook("k", this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(c)), "var-init");
        this.datasets[d].points.push(new this.PointClass({
          value: cc11001100_hook("value", c, "object-key-init"),
          label: cc11001100_hook("label", b, "object-key-init"),
          datasetLabel: cc11001100_hook("datasetLabel", this.datasets[d].label, "object-key-init"),
          x: cc11001100_hook("x", k.x, "object-key-init"),
          y: cc11001100_hook("y", k.y, "object-key-init"),
          strokeColor: cc11001100_hook("strokeColor", this.datasets[d].pointStrokeColor, "object-key-init"),
          fillColor: cc11001100_hook("fillColor", this.datasets[d].pointColor, "object-key-init")
        }));
      }, this);
      this.scale.labels.push(b);
      this.reflow();
      this.update();
    },
    removeData: function () {
      this.scale.valuesCount--;
      this.scale.labels.shift();
      d.each(this.datasets, function (c) {
        c.points.shift();
      }, this);
      this.reflow();
      this.update();
    },
    update: function () {
      this.eachPoints(function (c) {
        c.save();
      });
      this.reflow();
      this.render();
    },
    reflow: function () {
      d.extend(this.scale, {
        width: cc11001100_hook("width", this.chart.width, "object-key-init"),
        height: cc11001100_hook("height", this.chart.height, "object-key-init"),
        size: cc11001100_hook("size", d.min([this.chart.width, this.chart.height]), "object-key-init"),
        xCenter: cc11001100_hook("xCenter", this.chart.width / 2, "object-key-init"),
        yCenter: cc11001100_hook("yCenter", this.chart.height / 2, "object-key-init")
      });
      this.updateScaleRange(this.datasets);
      this.scale.setScaleSize();
      this.scale.buildYLabels();
    },
    draw: function (c) {
      var b = cc11001100_hook("b", c || 1, "var-init"),
        e = cc11001100_hook("e", this.chart.ctx, "var-init");
      this.clear();
      this.scale.draw();
      d.each(this.datasets, function (c) {
        d.each(c.points, function (c, d) {
          c.hasValue() && c.transition(this.scale.getPointPosition(d, this.scale.calculateCenterOffset(c.value)), b);
        }, this);
        e.lineWidth = cc11001100_hook("e.lineWidth", this.options.datasetStrokeWidth, "assign");
        e.strokeStyle = cc11001100_hook("e.strokeStyle", c.strokeColor, "assign");
        e.beginPath();
        d.each(c.points, function (b, c) {
          0 === c ? e.moveTo(b.x, b.y) : e.lineTo(b.x, b.y);
        }, this);
        e.closePath();
        e.stroke();
        e.fillStyle = cc11001100_hook("e.fillStyle", c.fillColor, "assign");
        this.options.datasetFill && e.fill();
        d.each(c.points, function (b) {
          b.hasValue() && b.draw();
        });
      }, this);
    }
  });
}).call(this);