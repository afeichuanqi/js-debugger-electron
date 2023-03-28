(function (a) {
  if (typeof define !== "undefined" && define.amd) {
    define([], a);
  } else {
    if (typeof module !== "undefined" && module.exports) {
      module.exports = cc11001100_hook("module.exports", a(), "assign");
    } else {
      window.scrollMonitor = cc11001100_hook("window.scrollMonitor", a(), "assign");
    }
  }
})(function () {
  var c = function () {
    return window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
  };
  var G = cc11001100_hook("G", {}, "var-init");
  var k = cc11001100_hook("k", [], "var-init");
  var E = cc11001100_hook("E", "visibilityChange", "var-init");
  var B = cc11001100_hook("B", "enterViewport", "var-init");
  var z = cc11001100_hook("z", "fullyEnterViewport", "var-init");
  var o = cc11001100_hook("o", "exitViewport", "var-init");
  var l = cc11001100_hook("l", "partiallyExitViewport", "var-init");
  var w = cc11001100_hook("w", "locationChange", "var-init");
  var n = cc11001100_hook("n", "stateChange", "var-init");
  var p = cc11001100_hook("p", [E, B, z, o, l, w, n], "var-init");
  var F = cc11001100_hook("F", {
    top: cc11001100_hook("top", 0, "object-key-init"),
    bottom: cc11001100_hook("bottom", 0, "object-key-init")
  }, "var-init");
  var y = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  };
  var a = function () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
  };
  G.viewportTop = cc11001100_hook("G.viewportTop", null, "assign");
  G.viewportBottom = cc11001100_hook("G.viewportBottom", null, "assign");
  G.documentHeight = cc11001100_hook("G.documentHeight", null, "assign");
  G.viewportHeight = cc11001100_hook("G.viewportHeight", y(), "assign");
  var v;
  var s;
  var b;
  function t() {
    G.viewportTop = cc11001100_hook("G.viewportTop", c(), "assign");
    G.viewportBottom = cc11001100_hook("G.viewportBottom", G.viewportTop + G.viewportHeight, "assign");
    G.documentHeight = cc11001100_hook("G.documentHeight", a(), "assign");
    if (G.documentHeight !== v) {
      b = cc11001100_hook("b", k.length, "assign");
      while (b--) {
        k[b].recalculateLocation();
      }
      v = cc11001100_hook("v", G.documentHeight, "assign");
    }
  }
  function r() {
    G.viewportHeight = cc11001100_hook("G.viewportHeight", y(), "assign");
    t();
    q();
  }
  var d;
  function u() {
    clearTimeout(d);
    d = cc11001100_hook("d", setTimeout(r, 100), "assign");
  }
  var h;
  function q() {
    h = cc11001100_hook("h", k.length, "assign");
    while (h--) {
      k[h].update();
    }
    h = cc11001100_hook("h", k.length, "assign");
    while (h--) {
      k[h].triggerCallbacks();
    }
  }
  function m(P, I) {
    cc11001100_hook("P", P, "function-parameter");
    cc11001100_hook("I", I, "function-parameter");
    var S = cc11001100_hook("S", this, "var-init");
    this.watchItem = cc11001100_hook("this.watchItem", P, "assign");
    if (!I) {
      this.offsets = cc11001100_hook("this.offsets", F, "assign");
    } else {
      if (I === +I) {
        this.offsets = cc11001100_hook("this.offsets", {
          top: cc11001100_hook("top", I, "object-key-init"),
          bottom: cc11001100_hook("bottom", I, "object-key-init")
        }, "assign");
      } else {
        this.offsets = cc11001100_hook("this.offsets", {
          top: cc11001100_hook("top", I.top || F.top, "object-key-init"),
          bottom: cc11001100_hook("bottom", I.bottom || F.bottom, "object-key-init")
        }, "assign");
      }
    }
    this.callbacks = cc11001100_hook("this.callbacks", {}, "assign");
    for (var N = cc11001100_hook("N", 0, "var-init"), M = cc11001100_hook("M", p.length, "var-init"); N < M; N++) {
      S.callbacks[p[N]] = cc11001100_hook("S.callbacks[p[N]]", [], "assign");
    }
    this.locked = cc11001100_hook("this.locked", false, "assign");
    var L;
    var Q;
    var R;
    var O;
    var H;
    var e;
    function K(i) {
      cc11001100_hook("i", i, "function-parameter");
      if (i.length === 0) {
        return;
      }
      H = cc11001100_hook("H", i.length, "assign");
      while (H--) {
        e = cc11001100_hook("e", i[H], "assign");
        e.callback.call(S, s);
        if (e.isOne) {
          i.splice(H, 1);
        }
      }
    }
    this.triggerCallbacks = cc11001100_hook("this.triggerCallbacks", function J() {
      if (this.isInViewport && !L) {
        K(this.callbacks[B]);
      }
      if (this.isFullyInViewport && !Q) {
        K(this.callbacks[z]);
      }
      if (this.isAboveViewport !== R && this.isBelowViewport !== O) {
        K(this.callbacks[E]);
        if (!Q && !this.isFullyInViewport) {
          K(this.callbacks[z]);
          K(this.callbacks[l]);
        }
        if (!L && !this.isInViewport) {
          K(this.callbacks[B]);
          K(this.callbacks[o]);
        }
      }
      if (!this.isFullyInViewport && Q) {
        K(this.callbacks[l]);
      }
      if (!this.isInViewport && L) {
        K(this.callbacks[o]);
      }
      if (this.isInViewport !== L) {
        K(this.callbacks[E]);
      }
      switch (true) {
        case L !== this.isInViewport:
        case Q !== this.isFullyInViewport:
        case R !== this.isAboveViewport:
        case O !== this.isBelowViewport:
          K(this.callbacks[n]);
      }
      L = cc11001100_hook("L", this.isInViewport, "assign");
      Q = cc11001100_hook("Q", this.isFullyInViewport, "assign");
      R = cc11001100_hook("R", this.isAboveViewport, "assign");
      O = cc11001100_hook("O", this.isBelowViewport, "assign");
    }, "assign");
    this.recalculateLocation = cc11001100_hook("this.recalculateLocation", function () {
      if (this.locked) {
        return;
      }
      var U = cc11001100_hook("U", this.top, "var-init");
      var T = cc11001100_hook("T", this.bottom, "var-init");
      if (this.watchItem.nodeName) {
        var j = cc11001100_hook("j", this.watchItem.style.display, "var-init");
        if (j === "none") {
          this.watchItem.style.display = cc11001100_hook("this.watchItem.style.display", "", "assign");
        }
        var i = cc11001100_hook("i", this.watchItem.getBoundingClientRect(), "var-init");
        this.top = cc11001100_hook("this.top", i.top + G.viewportTop, "assign");
        this.bottom = cc11001100_hook("this.bottom", i.bottom + G.viewportTop, "assign");
        if (j === "none") {
          this.watchItem.style.display = cc11001100_hook("this.watchItem.style.display", j, "assign");
        }
      } else {
        if (this.watchItem === +this.watchItem) {
          if (this.watchItem > 0) {
            this.top = cc11001100_hook("this.top", this.bottom = cc11001100_hook("this.bottom", this.watchItem, "assign"), "assign");
          } else {
            this.top = cc11001100_hook("this.top", this.bottom = cc11001100_hook("this.bottom", G.documentHeight - this.watchItem, "assign"), "assign");
          }
        } else {
          this.top = cc11001100_hook("this.top", this.watchItem.top, "assign");
          this.bottom = cc11001100_hook("this.bottom", this.watchItem.bottom, "assign");
        }
      }
      this.top -= cc11001100_hook("this.top", this.offsets.top, "assign");
      this.bottom += cc11001100_hook("this.bottom", this.offsets.bottom, "assign");
      this.height = cc11001100_hook("this.height", this.bottom - this.top, "assign");
      if ((U !== undefined || T !== undefined) && (this.top !== U || this.bottom !== T)) {
        K(this.callbacks[w]);
      }
    }, "assign");
    this.recalculateLocation();
    this.update();
    L = cc11001100_hook("L", this.isInViewport, "assign");
    Q = cc11001100_hook("Q", this.isFullyInViewport, "assign");
    R = cc11001100_hook("R", this.isAboveViewport, "assign");
    O = cc11001100_hook("O", this.isBelowViewport, "assign");
  }
  m.prototype = cc11001100_hook("m.prototype", {
    on: function (e, j, i) {
      switch (true) {
        case e === E && !this.isInViewport && this.isAboveViewport:
        case e === B && this.isInViewport:
        case e === z && this.isFullyInViewport:
        case e === o && this.isAboveViewport && !this.isInViewport:
        case e === l && this.isAboveViewport:
          j.call(this, s);
          if (i) {
            return;
          }
      }
      if (this.callbacks[e]) {
        this.callbacks[e].push({
          callback: cc11001100_hook("callback", j, "object-key-init"),
          isOne: cc11001100_hook("isOne", i || false, "object-key-init")
        });
      } else {
        throw new Error("Tried to add a scroll monitor listener of type " + e + ". Your options are: " + p.join(", "));
      }
    },
    off: function (H, I) {
      if (this.callbacks[H]) {
        for (var e = cc11001100_hook("e", 0, "var-init"), j; j = cc11001100_hook("j", this.callbacks[H][e], "assign"); e++) {
          if (j.callback === I) {
            this.callbacks[H].splice(e, 1);
            break;
          }
        }
      } else {
        throw new Error("Tried to remove a scroll monitor listener of type " + H + ". Your options are: " + p.join(", "));
      }
    },
    one: function (e, i) {
      this.on(e, i, true);
    },
    recalculateSize: function () {
      this.height = cc11001100_hook("this.height", this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, "assign");
      this.bottom = cc11001100_hook("this.bottom", this.top + this.height, "assign");
    },
    update: function () {
      this.isAboveViewport = cc11001100_hook("this.isAboveViewport", this.top < G.viewportTop, "assign");
      this.isBelowViewport = cc11001100_hook("this.isBelowViewport", this.bottom > G.viewportBottom, "assign");
      this.isInViewport = cc11001100_hook("this.isInViewport", this.top <= G.viewportBottom && this.bottom >= G.viewportTop, "assign");
      this.isFullyInViewport = cc11001100_hook("this.isFullyInViewport", this.top >= G.viewportTop && this.bottom <= G.viewportBottom || this.isAboveViewport && this.isBelowViewport, "assign");
    },
    destroy: function () {
      var I = cc11001100_hook("I", k.indexOf(this), "var-init"),
        e = cc11001100_hook("e", this, "var-init");
      k.splice(I, 1);
      for (var J = cc11001100_hook("J", 0, "var-init"), H = cc11001100_hook("H", p.length, "var-init"); J < H; J++) {
        e.callbacks[p[J]].length = cc11001100_hook("e.callbacks[p[J]].length", 0, "assign");
      }
    },
    lock: function () {
      this.locked = cc11001100_hook("this.locked", true, "assign");
    },
    unlock: function () {
      this.locked = cc11001100_hook("this.locked", false, "assign");
    }
  }, "assign");
  var g = function (e) {
    return function (j, i) {
      this.on.call(this, e, j, i);
    };
  };
  for (var C = cc11001100_hook("C", 0, "var-init"), A = cc11001100_hook("A", p.length, "var-init"); C < A; C++) {
    var f = cc11001100_hook("f", p[C], "var-init");
    m.prototype[f] = cc11001100_hook("m.prototype[f]", g(f), "assign");
  }
  try {
    t();
  } catch (D) {
    try {
      window.$(t);
    } catch (D) {
      throw new Error("If you must put scrollMonitor in the <head>, you must use jQuery.");
    }
  }
  function x(e) {
    cc11001100_hook("e", e, "function-parameter");
    s = cc11001100_hook("s", e, "assign");
    t();
    q();
  }
  if (window.addEventListener) {
    window.addEventListener("scroll", x);
    window.addEventListener("resize", u);
  } else {
    window.attachEvent("onscroll", x);
    window.attachEvent("onresize", u);
  }
  G.beget = cc11001100_hook("G.beget", G.create = cc11001100_hook("G.create", function (i, j) {
    if (typeof i === "string") {
      i = cc11001100_hook("i", document.querySelector(i), "assign");
    } else {
      if (i && i.length > 0) {
        i = cc11001100_hook("i", i[0], "assign");
      }
    }
    var e = cc11001100_hook("e", new m(i, j), "var-init");
    k.push(e);
    e.update();
    return e;
  }, "assign"), "assign");
  G.update = cc11001100_hook("G.update", function () {
    s = cc11001100_hook("s", null, "assign");
    t();
    q();
  }, "assign");
  G.recalculateLocations = cc11001100_hook("G.recalculateLocations", function () {
    G.documentHeight = cc11001100_hook("G.documentHeight", 0, "assign");
    G.update();
  }, "assign");
  return G;
});

// �˵�
$(document).ready(function () {
  var $account = cc11001100_hook("$account", $('#top-header'), "var-init");
  var $header = cc11001100_hook("$header", $('#menu-box, #main-search, #mobile-nav'), "var-init");
  var $minisb = cc11001100_hook("$minisb", $('#content'), "var-init");
  var $footer = cc11001100_hook("$footer", $('#footer'), "var-init");
  var accountWatcher = cc11001100_hook("accountWatcher", scrollMonitor.create($account), "var-init");
  var headerWatcher = cc11001100_hook("headerWatcher", scrollMonitor.create($header), "var-init");
  var footerWatcherTop = cc11001100_hook("footerWatcherTop", $minisb.height() + $header.height(), "var-init");
  var footerWatcher = cc11001100_hook("footerWatcher", scrollMonitor.create($footer, {
    top: cc11001100_hook("top", footerWatcherTop, "object-key-init")
  }), "var-init");
  accountWatcher.lock();
  headerWatcher.lock();
  accountWatcher.visibilityChange(function () {
    $header.toggleClass('shadow', !accountWatcher.isInViewport);
  });
  headerWatcher.visibilityChange(function () {
    $minisb.toggleClass('shadow', !headerWatcher.isInViewport);
  });
  footerWatcher.fullyEnterViewport(function () {
    if (footerWatcher.isAboveViewport) {
      $minisb.removeClass('shadow').addClass('hug-footer');
    }
  });
  footerWatcher.partiallyExitViewport(function () {
    if (!footerWatcher.isAboveViewport) {
      $minisb.addClass('fixed').removeClass('hug-footer');
    }
  });
});

// ����
$(document).ready(function () {
  var $account = cc11001100_hook("$account", $('#sidebar'), "var-init");
  var $header = cc11001100_hook("$header", $('.sidebar-roll'), "var-init");
  var $minisb = cc11001100_hook("$minisb", $('#content'), "var-init");
  var $footer = cc11001100_hook("$footer", $('#footer'), "var-init");
  var accountWatcher = cc11001100_hook("accountWatcher", scrollMonitor.create($account), "var-init");
  var headerWatcher = cc11001100_hook("headerWatcher", scrollMonitor.create($header), "var-init");
  var footerWatcherTop = cc11001100_hook("footerWatcherTop", $minisb.height() + $header.height(), "var-init");
  accountWatcher.lock();
  headerWatcher.lock();
  accountWatcher.visibilityChange(function () {
    $header.toggleClass('follow', !accountWatcher.isInViewport);
  });
});

// �����б�
$(document).ready(function (a) {
  if (typeof scrollMonitor != 'undefined') {
    a(".thumbnail, .content-image img, .single-content p img, #related-img img").each(function (i, el) {
      var ael = cc11001100_hook("ael", a(el), "var-init"),
        watcher = cc11001100_hook("watcher", scrollMonitor.create(el, -100), "var-init");
      ael.addClass('box-hide');
      watcher.enterViewport(function (ev) {
        if (!ael.hasClass('box-show')) {
          ael.addClass('box-show');
        }
      });
    });
  }
});