var CryptoJS = cc11001100_hook("CryptoJS", CryptoJS || function (s) {
  function n() {}
  var e = cc11001100_hook("e", {}, "var-init"),
    t = cc11001100_hook("t", e.lib = cc11001100_hook("e.lib", {}, "assign"), "var-init"),
    i = cc11001100_hook("i", t.Base = cc11001100_hook("t.Base", {
      extend: function (e) {
        n.prototype = cc11001100_hook("n.prototype", this, "assign");
        var t = cc11001100_hook("t", new n(), "var-init");
        return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = cc11001100_hook("t.init", function () {
          t.$super.init.apply(this, arguments);
        }, "assign")), (t.init.prototype = cc11001100_hook("t.init.prototype", t, "assign")).$super = cc11001100_hook("(t.init.prototype = t).$super", this, "assign"), t;
      },
      create: function () {
        var e = cc11001100_hook("e", this.extend(), "var-init");
        return e.init.apply(e, arguments), e;
      },
      init: function () {},
      mixIn: function (e) {
        for (var t in e) e.hasOwnProperty(t) && (this[t] = cc11001100_hook("this[t]", e[t], "assign"));
        e.hasOwnProperty("toString") && (this.toString = cc11001100_hook("this.toString", e.toString, "assign"));
      },
      clone: function () {
        return this.init.prototype.extend(this);
      }
    }, "assign"), "var-init"),
    c = cc11001100_hook("c", t.WordArray = cc11001100_hook("t.WordArray", i.extend({
      init: function (e, t) {
        e = cc11001100_hook("e", this.words = cc11001100_hook("this.words", e || [], "assign"), "assign"), this.sigBytes = cc11001100_hook("this.sigBytes", null != t ? t : 4 * e.length, "assign");
      },
      toString: function (e) {
        return (e || a).stringify(this);
      },
      concat: function (e) {
        var t = cc11001100_hook("t", this.words, "var-init"),
          n = cc11001100_hook("n", e.words, "var-init"),
          i = cc11001100_hook("i", this.sigBytes, "var-init");
        if (e = cc11001100_hook("e", e.sigBytes, "assign"), this.clamp(), i % 4) for (var r = cc11001100_hook("r", 0, "var-init"); r < e; r++) t[i + r >>> 2] |= cc11001100_hook("t[i + r >>> 2]", (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (i + r) % 4 * 8, "assign");else if (65535 < n.length) for (r = cc11001100_hook("r", 0, "assign"); r < e; r += cc11001100_hook("r", 4, "assign")) t[i + r >>> 2] = cc11001100_hook("t[i + r >>> 2]", n[r >>> 2], "assign");else t.push.apply(t, n);
        return this.sigBytes += cc11001100_hook("this.sigBytes", e, "assign"), this;
      },
      clamp: function () {
        var e = cc11001100_hook("e", this.words, "var-init"),
          t = cc11001100_hook("t", this.sigBytes, "var-init");
        e[t >>> 2] &= cc11001100_hook("e[t >>> 2]", 4294967295 << 32 - t % 4 * 8, "assign"), e.length = cc11001100_hook("e.length", s.ceil(t / 4), "assign");
      },
      clone: function () {
        var e = cc11001100_hook("e", i.clone.call(this), "var-init");
        return e.words = cc11001100_hook("e.words", this.words.slice(0), "assign"), e;
      },
      random: function (e) {
        for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e; n += cc11001100_hook("n", 4, "assign")) t.push(4294967296 * s.random() | 0);
        return new c.init(t, e);
      }
    }), "assign"), "var-init"),
    r = cc11001100_hook("r", e.enc = cc11001100_hook("e.enc", {}, "assign"), "var-init"),
    a = cc11001100_hook("a", r.Hex = cc11001100_hook("r.Hex", {
      stringify: function (e) {
        var t = cc11001100_hook("t", e.words, "var-init");
        e = cc11001100_hook("e", e.sigBytes, "assign");
        for (var n = cc11001100_hook("n", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e; i++) {
          var r = cc11001100_hook("r", t[i >>> 2] >>> 24 - i % 4 * 8 & 255, "var-init");
          n.push((r >>> 4).toString(16)), n.push((15 & r).toString(16));
        }
        return n.join("");
      },
      parse: function (e) {
        for (var t = cc11001100_hook("t", e.length, "var-init"), n = cc11001100_hook("n", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t; i += cc11001100_hook("i", 2, "assign")) n[i >>> 3] |= cc11001100_hook("n[i >>> 3]", parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4, "assign");
        return new c.init(n, t / 2);
      }
    }, "assign"), "var-init"),
    o = cc11001100_hook("o", r.Latin1 = cc11001100_hook("r.Latin1", {
      stringify: function (e) {
        var t = cc11001100_hook("t", e.words, "var-init");
        e = cc11001100_hook("e", e.sigBytes, "assign");
        for (var n = cc11001100_hook("n", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e; i++) n.push(String.fromCharCode(t[i >>> 2] >>> 24 - i % 4 * 8 & 255));
        return n.join("");
      },
      parse: function (e) {
        for (var t = cc11001100_hook("t", e.length, "var-init"), n = cc11001100_hook("n", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t; i++) n[i >>> 2] |= cc11001100_hook("n[i >>> 2]", (255 & e.charCodeAt(i)) << 24 - i % 4 * 8, "assign");
        return new c.init(n, t);
      }
    }, "assign"), "var-init"),
    l = cc11001100_hook("l", r.Utf8 = cc11001100_hook("r.Utf8", {
      stringify: function (e) {
        try {
          return decodeURIComponent(escape(o.stringify(e)));
        } catch (e) {
          throw Error("Malformed UTF-8 data");
        }
      },
      parse: function (e) {
        return o.parse(unescape(encodeURIComponent(e)));
      }
    }, "assign"), "var-init"),
    u = cc11001100_hook("u", t.BufferedBlockAlgorithm = cc11001100_hook("t.BufferedBlockAlgorithm", i.extend({
      reset: function () {
        this._data = cc11001100_hook("this._data", new c.init(), "assign"), this._nDataBytes = cc11001100_hook("this._nDataBytes", 0, "assign");
      },
      _append: function (e) {
        "string" == typeof e && (e = cc11001100_hook("e", l.parse(e), "assign")), this._data.concat(e), this._nDataBytes += cc11001100_hook("this._nDataBytes", e.sigBytes, "assign");
      },
      _process: function (e) {
        var t = cc11001100_hook("t", this._data, "var-init"),
          n = cc11001100_hook("n", t.words, "var-init"),
          i = cc11001100_hook("i", t.sigBytes, "var-init"),
          r = cc11001100_hook("r", this.blockSize, "var-init"),
          a = cc11001100_hook("a", i / (4 * r), "var-init");
        if (e = cc11001100_hook("e", (a = cc11001100_hook("a", e ? s.ceil(a) : s.max((0 | a) - this._minBufferSize, 0), "assign")) * r, "assign"), i = cc11001100_hook("i", s.min(4 * e, i), "assign"), e) {
          for (var o = cc11001100_hook("o", 0, "var-init"); o < e; o += cc11001100_hook("o", r, "assign")) this._doProcessBlock(n, o);
          o = cc11001100_hook("o", n.splice(0, e), "assign"), t.sigBytes -= cc11001100_hook("t.sigBytes", i, "assign");
        }
        return new c.init(o, i);
      },
      clone: function () {
        var e = cc11001100_hook("e", i.clone.call(this), "var-init");
        return e._data = cc11001100_hook("e._data", this._data.clone(), "assign"), e;
      },
      _minBufferSize: cc11001100_hook("_minBufferSize", 0, "object-key-init")
    }), "assign"), "var-init");
  t.Hasher = cc11001100_hook("t.Hasher", u.extend({
    cfg: cc11001100_hook("cfg", i.extend(), "object-key-init"),
    init: function (e) {
      this.cfg = cc11001100_hook("this.cfg", this.cfg.extend(e), "assign"), this.reset();
    },
    reset: function () {
      u.reset.call(this), this._doReset();
    },
    update: function (e) {
      return this._append(e), this._process(), this;
    },
    finalize: function (e) {
      return e && this._append(e), this._doFinalize();
    },
    blockSize: cc11001100_hook("blockSize", 16, "object-key-init"),
    _createHelper: function (n) {
      return function (e, t) {
        return new n.init(t).finalize(e);
      };
    },
    _createHmacHelper: function (n) {
      return function (e, t) {
        return new d.HMAC.init(n, t).finalize(e);
      };
    }
  }), "assign");
  var d = cc11001100_hook("d", e.algo = cc11001100_hook("e.algo", {}, "assign"), "var-init");
  return e;
}(Math), "var-init");
!function () {
  var e = cc11001100_hook("e", CryptoJS, "var-init"),
    c = cc11001100_hook("c", e.lib.WordArray, "var-init");
  e.enc.Base64 = cc11001100_hook("e.enc.Base64", {
    stringify: function (e) {
      var t = cc11001100_hook("t", e.words, "var-init"),
        n = cc11001100_hook("n", e.sigBytes, "var-init"),
        i = cc11001100_hook("i", this._map, "var-init");
      e.clamp(), e = cc11001100_hook("e", [], "assign");
      for (var r = cc11001100_hook("r", 0, "var-init"); r < n; r += cc11001100_hook("r", 3, "assign")) for (var a = cc11001100_hook("a", (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < 4 && r + .75 * o < n; o++) e.push(i.charAt(a >>> 6 * (3 - o) & 63));
      if (t = cc11001100_hook("t", i.charAt(64), "assign")) for (; e.length % 4;) e.push(t);
      return e.join("");
    },
    parse: function (e) {
      var t = cc11001100_hook("t", e.length, "var-init"),
        n = cc11001100_hook("n", this._map, "var-init");
      !(i = cc11001100_hook("i", n.charAt(64), "assign")) || -1 != (i = cc11001100_hook("i", e.indexOf(i), "assign")) && (t = cc11001100_hook("t", i, "assign"));
      for (var i = cc11001100_hook("i", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < t; a++) if (a % 4) {
        var o = cc11001100_hook("o", n.indexOf(e.charAt(a - 1)) << a % 4 * 2, "var-init"),
          s = cc11001100_hook("s", n.indexOf(e.charAt(a)) >>> 6 - a % 4 * 2, "var-init");
        i[r >>> 2] |= cc11001100_hook("i[r >>> 2]", (o | s) << 24 - r % 4 * 8, "assign"), r++;
      }
      return c.create(i, r);
    },
    _map: cc11001100_hook("_map", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", "object-key-init")
  }, "assign");
}(), function (a) {
  function w(e, t, n, i, r, a, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    return ((e = cc11001100_hook("e", e + (t & n | ~t & i) + r + o, "assign")) << a | e >>> 32 - a) + t;
  }
  function k(e, t, n, i, r, a, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    return ((e = cc11001100_hook("e", e + (t & i | n & ~i) + r + o, "assign")) << a | e >>> 32 - a) + t;
  }
  function M(e, t, n, i, r, a, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    return ((e = cc11001100_hook("e", e + (t ^ n ^ i) + r + o, "assign")) << a | e >>> 32 - a) + t;
  }
  function x(e, t, n, i, r, a, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    return ((e = cc11001100_hook("e", e + (n ^ (t | ~i)) + r + o, "assign")) << a | e >>> 32 - a) + t;
  }
  for (var e = cc11001100_hook("e", CryptoJS, "var-init"), t = cc11001100_hook("t", (i = cc11001100_hook("i", e.lib, "assign")).WordArray, "var-init"), n = cc11001100_hook("n", i.Hasher, "var-init"), i = cc11001100_hook("i", e.algo, "var-init"), _ = cc11001100_hook("_", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < 64; r++) _[r] = cc11001100_hook("_[r]", 4294967296 * a.abs(a.sin(r + 1)) | 0, "assign");
  i = cc11001100_hook("i", i.MD5 = cc11001100_hook("i.MD5", n.extend({
    _doReset: function () {
      this._hash = cc11001100_hook("this._hash", new t.init([1732584193, 4023233417, 2562383102, 271733878]), "assign");
    },
    _doProcessBlock: function (e, t) {
      for (var n = cc11001100_hook("n", 0, "var-init"); n < 16; n++) {
        var i = cc11001100_hook("i", e[o = cc11001100_hook("o", t + n, "assign")], "var-init");
        e[o] = cc11001100_hook("e[o]", 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), "assign");
      }
      n = cc11001100_hook("n", this._hash.words, "assign");
      var r,
        a,
        o = cc11001100_hook("o", e[t + 0], "var-init"),
        s = cc11001100_hook("s", (i = cc11001100_hook("i", e[t + 1], "assign"), e[t + 2]), "var-init"),
        c = cc11001100_hook("c", e[t + 3], "var-init"),
        l = cc11001100_hook("l", e[t + 4], "var-init"),
        u = cc11001100_hook("u", e[t + 5], "var-init"),
        d = cc11001100_hook("d", e[t + 6], "var-init"),
        f = cc11001100_hook("f", e[t + 7], "var-init"),
        h = cc11001100_hook("h", e[t + 8], "var-init"),
        g = cc11001100_hook("g", e[t + 9], "var-init"),
        p = cc11001100_hook("p", e[t + 10], "var-init"),
        m = cc11001100_hook("m", e[t + 11], "var-init"),
        v = cc11001100_hook("v", e[t + 12], "var-init"),
        y = cc11001100_hook("y", e[t + 13], "var-init"),
        S = cc11001100_hook("S", e[t + 14], "var-init"),
        C = cc11001100_hook("C", e[t + 15], "var-init"),
        B = cc11001100_hook("B", n[0], "var-init"),
        T = cc11001100_hook("T", x(T = cc11001100_hook("T", x(T = cc11001100_hook("T", x(T = cc11001100_hook("T", x(T = cc11001100_hook("T", M(T = cc11001100_hook("T", M(T = cc11001100_hook("T", M(T = cc11001100_hook("T", M(T = cc11001100_hook("T", k(T = cc11001100_hook("T", k(T = cc11001100_hook("T", k(T = cc11001100_hook("T", k(T = cc11001100_hook("T", w(T = cc11001100_hook("T", w(T = cc11001100_hook("T", w(T = cc11001100_hook("T", w(T = cc11001100_hook("T", n[1], "assign"), a = cc11001100_hook("a", w(a = cc11001100_hook("a", n[2], "assign"), r = cc11001100_hook("r", w(r = cc11001100_hook("r", n[3], "assign"), B = cc11001100_hook("B", w(B, T, a, r, o, 7, _[0]), "assign"), T, a, i, 12, _[1]), "assign"), B, T, s, 17, _[2]), "assign"), r, B, c, 22, _[3]), "assign"), a = cc11001100_hook("a", w(a, r = cc11001100_hook("r", w(r, B = cc11001100_hook("B", w(B, T, a, r, l, 7, _[4]), "assign"), T, a, u, 12, _[5]), "assign"), B, T, d, 17, _[6]), "assign"), r, B, f, 22, _[7]), "assign"), a = cc11001100_hook("a", w(a, r = cc11001100_hook("r", w(r, B = cc11001100_hook("B", w(B, T, a, r, h, 7, _[8]), "assign"), T, a, g, 12, _[9]), "assign"), B, T, p, 17, _[10]), "assign"), r, B, m, 22, _[11]), "assign"), a = cc11001100_hook("a", w(a, r = cc11001100_hook("r", w(r, B = cc11001100_hook("B", w(B, T, a, r, v, 7, _[12]), "assign"), T, a, y, 12, _[13]), "assign"), B, T, S, 17, _[14]), "assign"), r, B, C, 22, _[15]), "assign"), a = cc11001100_hook("a", k(a, r = cc11001100_hook("r", k(r, B = cc11001100_hook("B", k(B, T, a, r, i, 5, _[16]), "assign"), T, a, d, 9, _[17]), "assign"), B, T, m, 14, _[18]), "assign"), r, B, o, 20, _[19]), "assign"), a = cc11001100_hook("a", k(a, r = cc11001100_hook("r", k(r, B = cc11001100_hook("B", k(B, T, a, r, u, 5, _[20]), "assign"), T, a, p, 9, _[21]), "assign"), B, T, C, 14, _[22]), "assign"), r, B, l, 20, _[23]), "assign"), a = cc11001100_hook("a", k(a, r = cc11001100_hook("r", k(r, B = cc11001100_hook("B", k(B, T, a, r, g, 5, _[24]), "assign"), T, a, S, 9, _[25]), "assign"), B, T, c, 14, _[26]), "assign"), r, B, h, 20, _[27]), "assign"), a = cc11001100_hook("a", k(a, r = cc11001100_hook("r", k(r, B = cc11001100_hook("B", k(B, T, a, r, y, 5, _[28]), "assign"), T, a, s, 9, _[29]), "assign"), B, T, f, 14, _[30]), "assign"), r, B, v, 20, _[31]), "assign"), a = cc11001100_hook("a", M(a, r = cc11001100_hook("r", M(r, B = cc11001100_hook("B", M(B, T, a, r, u, 4, _[32]), "assign"), T, a, h, 11, _[33]), "assign"), B, T, m, 16, _[34]), "assign"), r, B, S, 23, _[35]), "assign"), a = cc11001100_hook("a", M(a, r = cc11001100_hook("r", M(r, B = cc11001100_hook("B", M(B, T, a, r, i, 4, _[36]), "assign"), T, a, l, 11, _[37]), "assign"), B, T, f, 16, _[38]), "assign"), r, B, p, 23, _[39]), "assign"), a = cc11001100_hook("a", M(a, r = cc11001100_hook("r", M(r, B = cc11001100_hook("B", M(B, T, a, r, y, 4, _[40]), "assign"), T, a, o, 11, _[41]), "assign"), B, T, c, 16, _[42]), "assign"), r, B, d, 23, _[43]), "assign"), a = cc11001100_hook("a", M(a, r = cc11001100_hook("r", M(r, B = cc11001100_hook("B", M(B, T, a, r, g, 4, _[44]), "assign"), T, a, v, 11, _[45]), "assign"), B, T, C, 16, _[46]), "assign"), r, B, s, 23, _[47]), "assign"), a = cc11001100_hook("a", x(a, r = cc11001100_hook("r", x(r, B = cc11001100_hook("B", x(B, T, a, r, o, 6, _[48]), "assign"), T, a, f, 10, _[49]), "assign"), B, T, S, 15, _[50]), "assign"), r, B, u, 21, _[51]), "assign"), a = cc11001100_hook("a", x(a, r = cc11001100_hook("r", x(r, B = cc11001100_hook("B", x(B, T, a, r, v, 6, _[52]), "assign"), T, a, c, 10, _[53]), "assign"), B, T, p, 15, _[54]), "assign"), r, B, i, 21, _[55]), "assign"), a = cc11001100_hook("a", x(a, r = cc11001100_hook("r", x(r, B = cc11001100_hook("B", x(B, T, a, r, h, 6, _[56]), "assign"), T, a, C, 10, _[57]), "assign"), B, T, d, 15, _[58]), "assign"), r, B, y, 21, _[59]), "assign"), a = cc11001100_hook("a", x(a, r = cc11001100_hook("r", x(r, B = cc11001100_hook("B", x(B, T, a, r, l, 6, _[60]), "assign"), T, a, m, 10, _[61]), "assign"), B, T, s, 15, _[62]), "assign"), r, B, g, 21, _[63]), "var-init");
      n[0] = cc11001100_hook("n[0]", n[0] + B | 0, "assign"), n[1] = cc11001100_hook("n[1]", n[1] + T | 0, "assign"), n[2] = cc11001100_hook("n[2]", n[2] + a | 0, "assign"), n[3] = cc11001100_hook("n[3]", n[3] + r | 0, "assign");
    },
    _doFinalize: function () {
      var e = cc11001100_hook("e", this._data, "var-init"),
        t = cc11001100_hook("t", e.words, "var-init"),
        n = cc11001100_hook("n", 8 * this._nDataBytes, "var-init"),
        i = cc11001100_hook("i", 8 * e.sigBytes, "var-init");
      t[i >>> 5] |= cc11001100_hook("t[i >>> 5]", 128 << 24 - i % 32, "assign");
      var r = cc11001100_hook("r", a.floor(n / 4294967296), "var-init");
      for (t[15 + (i + 64 >>> 9 << 4)] = cc11001100_hook("t[15 + (i + 64 >>> 9 << 4)]", 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), "assign"), t[14 + (i + 64 >>> 9 << 4)] = cc11001100_hook("t[14 + (i + 64 >>> 9 << 4)]", 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), "assign"), e.sigBytes = cc11001100_hook("e.sigBytes", 4 * (t.length + 1), "assign"), this._process(), t = cc11001100_hook("t", (e = cc11001100_hook("e", this._hash, "assign")).words, "assign"), n = cc11001100_hook("n", 0, "assign"); n < 4; n++) i = cc11001100_hook("i", t[n], "assign"), t[n] = cc11001100_hook("t[n]", 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), "assign");
      return e;
    },
    clone: function () {
      var e = cc11001100_hook("e", n.clone.call(this), "var-init");
      return e._hash = cc11001100_hook("e._hash", this._hash.clone(), "assign"), e;
    }
  }), "assign"), "assign"), e.MD5 = cc11001100_hook("e.MD5", n._createHelper(i), "assign"), e.HmacMD5 = cc11001100_hook("e.HmacMD5", n._createHmacHelper(i), "assign");
}(Math), function () {
  var e,
    t = cc11001100_hook("t", CryptoJS, "var-init"),
    n = cc11001100_hook("n", (e = cc11001100_hook("e", t.lib, "assign")).Base, "var-init"),
    l = cc11001100_hook("l", e.WordArray, "var-init"),
    i = cc11001100_hook("i", (e = cc11001100_hook("e", t.algo, "assign")).EvpKDF = cc11001100_hook("(e = t.algo).EvpKDF", n.extend({
      cfg: cc11001100_hook("cfg", n.extend({
        keySize: cc11001100_hook("keySize", 4, "object-key-init"),
        hasher: cc11001100_hook("hasher", e.MD5, "object-key-init"),
        iterations: cc11001100_hook("iterations", 1, "object-key-init")
      }), "object-key-init"),
      init: function (e) {
        this.cfg = cc11001100_hook("this.cfg", this.cfg.extend(e), "assign");
      },
      compute: function (e, t) {
        for (var n = cc11001100_hook("n", (o = cc11001100_hook("o", this.cfg, "assign")).hasher.create(), "var-init"), i = cc11001100_hook("i", l.create(), "var-init"), r = cc11001100_hook("r", i.words, "var-init"), a = cc11001100_hook("a", o.keySize, "var-init"), o = cc11001100_hook("o", o.iterations, "var-init"); r.length < a;) {
          s && n.update(s);
          var s = cc11001100_hook("s", n.update(e).finalize(t), "var-init");
          n.reset();
          for (var c = cc11001100_hook("c", 1, "var-init"); c < o; c++) s = cc11001100_hook("s", n.finalize(s), "assign"), n.reset();
          i.concat(s);
        }
        return i.sigBytes = cc11001100_hook("i.sigBytes", 4 * a, "assign"), i;
      }
    }), "assign"), "var-init");
  t.EvpKDF = cc11001100_hook("t.EvpKDF", function (e, t, n) {
    return i.create(n).compute(e, t);
  }, "assign");
}(), CryptoJS.lib.Cipher || function () {
  var e = cc11001100_hook("e", (f = cc11001100_hook("f", CryptoJS, "assign")).lib, "var-init"),
    t = cc11001100_hook("t", e.Base, "var-init"),
    o = cc11001100_hook("o", e.WordArray, "var-init"),
    n = cc11001100_hook("n", e.BufferedBlockAlgorithm, "var-init"),
    i = cc11001100_hook("i", f.enc.Base64, "var-init"),
    r = cc11001100_hook("r", f.algo.EvpKDF, "var-init"),
    a = cc11001100_hook("a", e.Cipher = cc11001100_hook("e.Cipher", n.extend({
      cfg: cc11001100_hook("cfg", t.extend(), "object-key-init"),
      createEncryptor: function (e, t) {
        return this.create(this._ENC_XFORM_MODE, e, t);
      },
      createDecryptor: function (e, t) {
        return this.create(this._DEC_XFORM_MODE, e, t);
      },
      init: function (e, t, n) {
        this.cfg = cc11001100_hook("this.cfg", this.cfg.extend(n), "assign"), this._xformMode = cc11001100_hook("this._xformMode", e, "assign"), this._key = cc11001100_hook("this._key", t, "assign"), this.reset();
      },
      reset: function () {
        n.reset.call(this), this._doReset();
      },
      process: function (e) {
        return this._append(e), this._process();
      },
      finalize: function (e) {
        return e && this._append(e), this._doFinalize();
      },
      keySize: cc11001100_hook("keySize", 4, "object-key-init"),
      ivSize: cc11001100_hook("ivSize", 4, "object-key-init"),
      _ENC_XFORM_MODE: cc11001100_hook("_ENC_XFORM_MODE", 1, "object-key-init"),
      _DEC_XFORM_MODE: cc11001100_hook("_DEC_XFORM_MODE", 2, "object-key-init"),
      _createHelper: function (i) {
        return {
          encrypt: function (e, t, n) {
            return ("string" == typeof t ? h : d).encrypt(i, e, t, n);
          },
          decrypt: function (e, t, n) {
            return ("string" == typeof t ? h : d).decrypt(i, e, t, n);
          }
        };
      }
    }), "assign"), "var-init");
  e.StreamCipher = cc11001100_hook("e.StreamCipher", a.extend({
    _doFinalize: function () {
      return this._process(!0);
    },
    blockSize: cc11001100_hook("blockSize", 1, "object-key-init")
  }), "assign");
  function s(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var i = cc11001100_hook("i", this._iv, "var-init");
    i ? this._iv = cc11001100_hook("this._iv", void 0, "assign") : i = cc11001100_hook("i", this._prevBlock, "assign");
    for (var r = cc11001100_hook("r", 0, "var-init"); r < n; r++) e[t + r] ^= cc11001100_hook("e[t + r]", i[r], "assign");
  }
  var c = cc11001100_hook("c", f.mode = cc11001100_hook("f.mode", {}, "assign"), "var-init"),
    l = cc11001100_hook("l", (e.BlockCipherMode = cc11001100_hook("e.BlockCipherMode", t.extend({
      createEncryptor: function (e, t) {
        return this.Encryptor.create(e, t);
      },
      createDecryptor: function (e, t) {
        return this.Decryptor.create(e, t);
      },
      init: function (e, t) {
        this._cipher = cc11001100_hook("this._cipher", e, "assign"), this._iv = cc11001100_hook("this._iv", t, "assign");
      }
    }), "assign")).extend(), "var-init");
  l.Encryptor = cc11001100_hook("l.Encryptor", l.extend({
    processBlock: function (e, t) {
      var n = cc11001100_hook("n", this._cipher, "var-init"),
        i = cc11001100_hook("i", n.blockSize, "var-init");
      s.call(this, e, t, i), n.encryptBlock(e, t), this._prevBlock = cc11001100_hook("this._prevBlock", e.slice(t, t + i), "assign");
    }
  }), "assign"), l.Decryptor = cc11001100_hook("l.Decryptor", l.extend({
    processBlock: function (e, t) {
      var n = cc11001100_hook("n", this._cipher, "var-init"),
        i = cc11001100_hook("i", n.blockSize, "var-init"),
        r = cc11001100_hook("r", e.slice(t, t + i), "var-init");
      n.decryptBlock(e, t), s.call(this, e, t, i), this._prevBlock = cc11001100_hook("this._prevBlock", r, "assign");
    }
  }), "assign"), c = cc11001100_hook("c", c.CBC = cc11001100_hook("c.CBC", l, "assign"), "assign"), l = cc11001100_hook("l", (f.pad = cc11001100_hook("f.pad", {}, "assign")).Pkcs7 = cc11001100_hook("(f.pad = {}).Pkcs7", {
    pad: function (e, t) {
      for (var n, i = cc11001100_hook("i", (n = cc11001100_hook("n", (n = cc11001100_hook("n", 4 * t, "assign")) - e.sigBytes % n, "assign")) << 24 | n << 16 | n << 8 | n, "var-init"), r = cc11001100_hook("r", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < n; a += cc11001100_hook("a", 4, "assign")) r.push(i);
      n = cc11001100_hook("n", o.create(r, n), "assign"), e.concat(n);
    },
    unpad: function (e) {
      e.sigBytes -= cc11001100_hook("e.sigBytes", 255 & e.words[e.sigBytes - 1 >>> 2], "assign");
    }
  }, "assign"), "assign"), e.BlockCipher = cc11001100_hook("e.BlockCipher", a.extend({
    cfg: cc11001100_hook("cfg", a.cfg.extend({
      mode: cc11001100_hook("mode", c, "object-key-init"),
      padding: cc11001100_hook("padding", l, "object-key-init")
    }), "object-key-init"),
    reset: function () {
      a.reset.call(this);
      var e = cc11001100_hook("e", (t = cc11001100_hook("t", this.cfg, "assign")).iv, "var-init"),
        t = cc11001100_hook("t", t.mode, "var-init");
      if (this._xformMode == this._ENC_XFORM_MODE) var n = cc11001100_hook("n", t.createEncryptor, "var-init");else n = cc11001100_hook("n", t.createDecryptor, "assign"), this._minBufferSize = cc11001100_hook("this._minBufferSize", 1, "assign");
      this._mode = cc11001100_hook("this._mode", n.call(t, this, e && e.words), "assign");
    },
    _doProcessBlock: function (e, t) {
      this._mode.processBlock(e, t);
    },
    _doFinalize: function () {
      var e = cc11001100_hook("e", this.cfg.padding, "var-init");
      if (this._xformMode == this._ENC_XFORM_MODE) {
        e.pad(this._data, this.blockSize);
        var t = cc11001100_hook("t", this._process(!0), "var-init");
      } else t = cc11001100_hook("t", this._process(!0), "assign"), e.unpad(t);
      return t;
    },
    blockSize: cc11001100_hook("blockSize", 4, "object-key-init")
  }), "assign");
  var u = cc11001100_hook("u", e.CipherParams = cc11001100_hook("e.CipherParams", t.extend({
      init: function (e) {
        this.mixIn(e);
      },
      toString: function (e) {
        return (e || this.formatter).stringify(this);
      }
    }), "assign"), "var-init"),
    d = cc11001100_hook("d", (c = cc11001100_hook("c", (f.format = cc11001100_hook("f.format", {}, "assign")).OpenSSL = cc11001100_hook("(f.format = {}).OpenSSL", {
      stringify: function (e) {
        var t = cc11001100_hook("t", e.ciphertext, "var-init");
        return ((e = cc11001100_hook("e", e.salt, "assign")) ? o.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(i);
      },
      parse: function (e) {
        var t = cc11001100_hook("t", (e = cc11001100_hook("e", i.parse(e), "assign")).words, "var-init");
        if (1398893684 == t[0] && 1701076831 == t[1]) {
          var n = cc11001100_hook("n", o.create(t.slice(2, 4)), "var-init");
          t.splice(0, 4), e.sigBytes -= cc11001100_hook("e.sigBytes", 16, "assign");
        }
        return u.create({
          ciphertext: cc11001100_hook("ciphertext", e, "object-key-init"),
          salt: cc11001100_hook("salt", n, "object-key-init")
        });
      }
    }, "assign"), "assign"), e.SerializableCipher = cc11001100_hook("e.SerializableCipher", t.extend({
      cfg: cc11001100_hook("cfg", t.extend({
        format: cc11001100_hook("format", c, "object-key-init")
      }), "object-key-init"),
      encrypt: function (e, t, n, i) {
        i = cc11001100_hook("i", this.cfg.extend(i), "assign");
        var r = cc11001100_hook("r", e.createEncryptor(n, i), "var-init");
        return t = cc11001100_hook("t", r.finalize(t), "assign"), r = cc11001100_hook("r", r.cfg, "assign"), u.create({
          ciphertext: cc11001100_hook("ciphertext", t, "object-key-init"),
          key: cc11001100_hook("key", n, "object-key-init"),
          iv: cc11001100_hook("iv", r.iv, "object-key-init"),
          algorithm: cc11001100_hook("algorithm", e, "object-key-init"),
          mode: cc11001100_hook("mode", r.mode, "object-key-init"),
          padding: cc11001100_hook("padding", r.padding, "object-key-init"),
          blockSize: cc11001100_hook("blockSize", e.blockSize, "object-key-init"),
          formatter: cc11001100_hook("formatter", i.format, "object-key-init")
        });
      },
      decrypt: function (e, t, n, i) {
        return i = cc11001100_hook("i", this.cfg.extend(i), "assign"), t = cc11001100_hook("t", this._parse(t, i.format), "assign"), e.createDecryptor(n, i).finalize(t.ciphertext);
      },
      _parse: function (e, t) {
        return "string" == typeof e ? t.parse(e, this) : e;
      }
    }), "assign")), "var-init"),
    f = cc11001100_hook("f", (f.kdf = cc11001100_hook("f.kdf", {}, "assign")).OpenSSL = cc11001100_hook("(f.kdf = {}).OpenSSL", {
      execute: function (e, t, n, i) {
        return i = cc11001100_hook("i", i || o.random(8), "assign"), e = cc11001100_hook("e", r.create({
          keySize: cc11001100_hook("keySize", t + n, "object-key-init")
        }).compute(e, i), "assign"), n = cc11001100_hook("n", o.create(e.words.slice(t), 4 * n), "assign"), e.sigBytes = cc11001100_hook("e.sigBytes", 4 * t, "assign"), u.create({
          key: cc11001100_hook("key", e, "object-key-init"),
          iv: cc11001100_hook("iv", n, "object-key-init"),
          salt: cc11001100_hook("salt", i, "object-key-init")
        });
      }
    }, "assign"), "var-init"),
    h = cc11001100_hook("h", e.PasswordBasedCipher = cc11001100_hook("e.PasswordBasedCipher", d.extend({
      cfg: cc11001100_hook("cfg", d.cfg.extend({
        kdf: cc11001100_hook("kdf", f, "object-key-init")
      }), "object-key-init"),
      encrypt: function (e, t, n, i) {
        return n = cc11001100_hook("n", (i = cc11001100_hook("i", this.cfg.extend(i), "assign")).kdf.execute(n, e.keySize, e.ivSize), "assign"), i.iv = cc11001100_hook("i.iv", n.iv, "assign"), (e = cc11001100_hook("e", d.encrypt.call(this, e, t, n.key, i), "assign")).mixIn(n), e;
      },
      decrypt: function (e, t, n, i) {
        return i = cc11001100_hook("i", this.cfg.extend(i), "assign"), t = cc11001100_hook("t", this._parse(t, i.format), "assign"), n = cc11001100_hook("n", i.kdf.execute(n, e.keySize, e.ivSize, t.salt), "assign"), i.iv = cc11001100_hook("i.iv", n.iv, "assign"), d.decrypt.call(this, e, t, n.key, i);
      }
    }), "assign"), "var-init");
}(), function () {
  for (var e = cc11001100_hook("e", CryptoJS, "var-init"), t = cc11001100_hook("t", e.lib.BlockCipher, "var-init"), n = cc11001100_hook("n", e.algo, "var-init"), o = cc11001100_hook("o", [], "var-init"), i = cc11001100_hook("i", [], "var-init"), r = cc11001100_hook("r", [], "var-init"), a = cc11001100_hook("a", [], "var-init"), s = cc11001100_hook("s", [], "var-init"), c = cc11001100_hook("c", [], "var-init"), l = cc11001100_hook("l", [], "var-init"), u = cc11001100_hook("u", [], "var-init"), d = cc11001100_hook("d", [], "var-init"), f = cc11001100_hook("f", [], "var-init"), h = cc11001100_hook("h", [], "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < 256; g++) h[g] = cc11001100_hook("h[g]", g < 128 ? g << 1 : g << 1 ^ 283, "assign");
  var p = cc11001100_hook("p", 0, "var-init"),
    m = cc11001100_hook("m", 0, "var-init");
  for (g = cc11001100_hook("g", 0, "assign"); g < 256; g++) {
    var v = cc11001100_hook("v", (v = cc11001100_hook("v", m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4, "assign")) >>> 8 ^ 255 & v ^ 99, "var-init");
    o[p] = cc11001100_hook("o[p]", v, "assign");
    var y = cc11001100_hook("y", h[i[v] = cc11001100_hook("i[v]", p, "assign")], "var-init"),
      S = cc11001100_hook("S", h[y], "var-init"),
      C = cc11001100_hook("C", h[S], "var-init"),
      B = cc11001100_hook("B", 257 * h[v] ^ 16843008 * v, "var-init");
    r[p] = cc11001100_hook("r[p]", B << 24 | B >>> 8, "assign"), a[p] = cc11001100_hook("a[p]", B << 16 | B >>> 16, "assign"), s[p] = cc11001100_hook("s[p]", B << 8 | B >>> 24, "assign"), c[p] = cc11001100_hook("c[p]", B, "assign"), B = cc11001100_hook("B", 16843009 * C ^ 65537 * S ^ 257 * y ^ 16843008 * p, "assign"), l[v] = cc11001100_hook("l[v]", B << 24 | B >>> 8, "assign"), u[v] = cc11001100_hook("u[v]", B << 16 | B >>> 16, "assign"), d[v] = cc11001100_hook("d[v]", B << 8 | B >>> 24, "assign"), f[v] = cc11001100_hook("f[v]", B, "assign"), p ? (p = cc11001100_hook("p", y ^ h[h[h[C ^ y]]], "assign"), m ^= cc11001100_hook("m", h[h[m]], "assign")) : p = cc11001100_hook("p", m = cc11001100_hook("m", 1, "assign"), "assign");
  }
  var T = cc11001100_hook("T", [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], "var-init");
  n = cc11001100_hook("n", n.AES = cc11001100_hook("n.AES", t.extend({
    _doReset: function () {
      for (var e = cc11001100_hook("e", (n = cc11001100_hook("n", this._key, "assign")).words, "var-init"), t = cc11001100_hook("t", n.sigBytes / 4, "var-init"), n = cc11001100_hook("n", 4 * ((this._nRounds = cc11001100_hook("this._nRounds", t + 6, "assign")) + 1), "var-init"), i = cc11001100_hook("i", this._keySchedule = cc11001100_hook("this._keySchedule", [], "assign"), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n; r++) if (r < t) i[r] = cc11001100_hook("i[r]", e[r], "assign");else {
        var a = cc11001100_hook("a", i[r - 1], "var-init");
        r % t ? 6 < t && 4 == r % t && (a = cc11001100_hook("a", o[a >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a], "assign")) : (a = cc11001100_hook("a", o[(a = cc11001100_hook("a", a << 8 | a >>> 24, "assign")) >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a], "assign"), a ^= cc11001100_hook("a", T[r / t | 0] << 24, "assign")), i[r] = cc11001100_hook("i[r]", i[r - t] ^ a, "assign");
      }
      for (e = cc11001100_hook("e", this._invKeySchedule = cc11001100_hook("this._invKeySchedule", [], "assign"), "assign"), t = cc11001100_hook("t", 0, "assign"); t < n; t++) r = cc11001100_hook("r", n - t, "assign"), a = cc11001100_hook("a", t % 4 ? i[r] : i[r - 4], "assign"), e[t] = cc11001100_hook("e[t]", t < 4 || r <= 4 ? a : l[o[a >>> 24]] ^ u[o[a >>> 16 & 255]] ^ d[o[a >>> 8 & 255]] ^ f[o[255 & a]], "assign");
    },
    encryptBlock: function (e, t) {
      this._doCryptBlock(e, t, this._keySchedule, r, a, s, c, o);
    },
    decryptBlock: function (e, t) {
      var n = cc11001100_hook("n", e[t + 1], "var-init");
      e[t + 1] = cc11001100_hook("e[t + 1]", e[t + 3], "assign"), e[t + 3] = cc11001100_hook("e[t + 3]", n, "assign"), this._doCryptBlock(e, t, this._invKeySchedule, l, u, d, f, i), n = cc11001100_hook("n", e[t + 1], "assign"), e[t + 1] = cc11001100_hook("e[t + 1]", e[t + 3], "assign"), e[t + 3] = cc11001100_hook("e[t + 3]", n, "assign");
    },
    _doCryptBlock: function (e, t, n, i, r, a, o, s) {
      for (var c = cc11001100_hook("c", this._nRounds, "var-init"), l = cc11001100_hook("l", e[t] ^ n[0], "var-init"), u = cc11001100_hook("u", e[t + 1] ^ n[1], "var-init"), d = cc11001100_hook("d", e[t + 2] ^ n[2], "var-init"), f = cc11001100_hook("f", e[t + 3] ^ n[3], "var-init"), h = cc11001100_hook("h", 4, "var-init"), g = cc11001100_hook("g", 1, "var-init"); g < c; g++) {
        var p = cc11001100_hook("p", i[l >>> 24] ^ r[u >>> 16 & 255] ^ a[d >>> 8 & 255] ^ o[255 & f] ^ n[h++], "var-init"),
          m = cc11001100_hook("m", i[u >>> 24] ^ r[d >>> 16 & 255] ^ a[f >>> 8 & 255] ^ o[255 & l] ^ n[h++], "var-init"),
          v = cc11001100_hook("v", i[d >>> 24] ^ r[f >>> 16 & 255] ^ a[l >>> 8 & 255] ^ o[255 & u] ^ n[h++], "var-init");
        f = cc11001100_hook("f", i[f >>> 24] ^ r[l >>> 16 & 255] ^ a[u >>> 8 & 255] ^ o[255 & d] ^ n[h++], "assign"), l = cc11001100_hook("l", p, "assign"), u = cc11001100_hook("u", m, "assign"), d = cc11001100_hook("d", v, "assign");
      }
      p = cc11001100_hook("p", (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & f]) ^ n[h++], "assign"), m = cc11001100_hook("m", (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[h++], "assign"), v = cc11001100_hook("v", (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & u]) ^ n[h++], "assign"), f = cc11001100_hook("f", (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & d]) ^ n[h++], "assign"), e[t] = cc11001100_hook("e[t]", p, "assign"), e[t + 1] = cc11001100_hook("e[t + 1]", m, "assign"), e[t + 2] = cc11001100_hook("e[t + 2]", v, "assign"), e[t + 3] = cc11001100_hook("e[t + 3]", f, "assign");
    },
    keySize: cc11001100_hook("keySize", 8, "object-key-init")
  }), "assign"), "assign");
  e.AES = cc11001100_hook("e.AES", t._createHelper(n), "assign");
}(), function () {
  document.getElementsByClassName || (document.getElementsByClassName = cc11001100_hook("document.getElementsByClassName", function (e, t) {
    for (var n = cc11001100_hook("n", (t || document).getElementsByTagName("*"), "var-init"), i = cc11001100_hook("i", new Array(), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) for (var a = cc11001100_hook("a", n[r], "var-init"), o = cc11001100_hook("o", a.className.split(" "), "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < o.length; s++) if (o[s] == e) {
      i.push(a);
      break;
    }
    return i;
  }, "assign"));
  function h() {
    var e = cc11001100_hook("e", document.getElementsByTagName("script"), "var-init");
    if (e && 0 < e.length) for (var t = cc11001100_hook("t", 0, "var-init"), n = cc11001100_hook("n", e.length, "var-init"); t < n; t++) {
      var i = cc11001100_hook("i", e[t].src, "var-init");
      if (-1 != i.indexOf("verify/static/js/registerDev.v1.min.js?appid=")) {
        var r = cc11001100_hook("r", {}, "var-init"),
          a = cc11001100_hook("a", (i = cc11001100_hook("i", i.split("?")[1], "assign")).split("&"), "var-init");
        for (t = cc11001100_hook("t", 0, "assign"); t < a.length; t++) r[a[t].split("=")[0]] = cc11001100_hook("r[a[t].split(\"=\")[0]]", unescape(a[t].split("=")[1]), "assign");
        return r.appid;
      }
    }
    return 1058;
  }
  function i() {
    return navigator.userAgent;
  }
  function r() {
    var e = cc11001100_hook("e", navigator.plugins, "var-init"),
      t = cc11001100_hook("t", "", "var-init");
    if (0 < e.length) {
      for (var n = cc11001100_hook("n", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); i < r; i++) {
        var a = cc11001100_hook("a", e[i].name, "var-init");
        n.push(a);
      }
      t = cc11001100_hook("t", n.toString(), "assign");
    }
    return t;
  }
  function a() {
    return screen.colorDepth ? screen.colorDepth : "";
  }
  function o() {
    return screen.pixelDepth ? screen.pixelDepth : "";
  }
  function s() {
    return screen.width + "x" + screen.height;
  }
  function c() {
    if (!v.isWebGlSupported()) return "";
    try {
      var e = cc11001100_hook("e", v.getWebglCanvas(), "var-init"),
        t = cc11001100_hook("t", e.getExtension("WEBGL_debug_renderer_info"), "var-init");
      return e.getParameter(t.UNMASKED_RENDERER_WEBGL);
    } catch (e) {
      return "";
    }
  }
  function l() {
    if (!v.isWebGlSupported()) return "";
    try {
      var e = cc11001100_hook("e", v.getWebglCanvas(), "var-init"),
        t = cc11001100_hook("t", e.getExtension("WEBGL_debug_renderer_info"), "var-init");
      return e.getParameter(t.UNMASKED_VENDOR_WEBGL);
    } catch (e) {
      return "";
    }
  }
  function u() {
    var t = cc11001100_hook("t", ["canvas"], "var-init");
    if (!v.isCanvasSupported()) return v.Md5(t.toString());
    try {
      var e = cc11001100_hook("e", document.createElement("canvas"), "var-init");
      e.width = cc11001100_hook("e.width", 200, "assign"), e.height = cc11001100_hook("e.height", 200, "assign"), e.style.display = cc11001100_hook("e.style.display", "inline", "assign");
      var n = cc11001100_hook("n", e.getContext("2d"), "var-init");
      return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = cc11001100_hook("n.textBaseline", "alphabetic", "assign"), n.fillStyle = cc11001100_hook("n.fillStyle", "#f60", "assign"), n.fillRect(125, 1, 62, 20), n.fillStyle = cc11001100_hook("n.fillStyle", "#069", "assign"), n.font = cc11001100_hook("n.font", "14px 'Arial'", "assign"), n.fillText("hello kugou", 2, 15), n.fillStyle = cc11001100_hook("n.fillStyle", "rgba(102, 204, 0, 0.2)", "assign"), n.font = cc11001100_hook("n.font", "18pt Arial", "assign"), n.fillText("hello kugou", 4, 45), n.globalCompositeOperation = cc11001100_hook("n.globalCompositeOperation", "multiply", "assign"), n.fillStyle = cc11001100_hook("n.fillStyle", "rgb(255,0,255)", "assign"), n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = cc11001100_hook("n.fillStyle", "rgb(0,255,255)", "assign"), n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = cc11001100_hook("n.fillStyle", "rgb(255,255,0)", "assign"), n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = cc11001100_hook("n.fillStyle", "rgb(255,0,255)", "assign"), n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), e.toDataURL && t.push("canvas fp:" + e.toDataURL()), v.Md5(t.toString());
    } catch (e) {
      return v.Md5(t.toString());
    }
  }
  function g() {
    try {
      var e = cc11001100_hook("e", v.Cookie.read("KuGoo", "KugooID"), "var-init");
      return e || "";
    } catch (e) {
      return "";
    }
  }
  function p() {
    try {
      var e = cc11001100_hook("e", v.Cookie.read("KuGoo", "t"), "var-init");
      return e || "";
    } catch (e) {
      return "";
    }
  }
  function m() {
    try {
      var e = cc11001100_hook("e", v.Cookie.read("kg_mid"), "var-init");
      return e || "";
    } catch (e) {
      return "";
    }
  }
  var d = function (t) {
      var n = cc11001100_hook("n", "KGSupercall_GetUserInfo" + Math.random().toString().substr(2, 9), "var-init"),
        e = cc11001100_hook("e", null, "var-init");
      window[n] = cc11001100_hook("window[n]", function (e) {
        t && t(e), window[n] = cc11001100_hook("window[n]", null, "assign");
      }, "assign");
      try {
        e = cc11001100_hook("e", external.SuperCall(504, '{"callback":"' + n + '"}'), "assign");
      } catch (e) {}
      if (void 0 === e || !t) return t ? void 0 : (window[n] = cc11001100_hook("window[n]", null, "assign"), e);
      window[n](e);
    },
    v = cc11001100_hook("v", {
      Cookie: {
        write: function (e, t, n, i, r, a) {
          /^\w*$/.test(e) || alert("cookie格式不正确"), /; /.test(t) && alert("cookie格式不正确");
          var o = cc11001100_hook("o", e + "=" + t, "var-init");
          if (n) {
            var s = cc11001100_hook("s", new Date(), "var-init");
            s.setTime(s.getTime() + 1e3 * n), o += cc11001100_hook("o", "; expires=" + s.toGMTString(), "assign");
          }
          i && (o += cc11001100_hook("o", "; path=" + i, "assign")), r && (o += cc11001100_hook("o", "; domain=" + r, "assign")), a && (o += cc11001100_hook("o", "; secure", "assign")), document.cookie = cc11001100_hook("document.cookie", o, "assign");
        },
        rewriteKey: function (e, t, n, i, r, a, o) {
          var s = cc11001100_hook("s", t, "var-init");
          if (n) {
            var c = cc11001100_hook("c", this.read(e), "var-init"),
              l = cc11001100_hook("l", new RegExp("\\b" + t + "=([^&]*)\\b", "g"), "var-init");
            s = cc11001100_hook("s", c.replace(l, function (e, t) {
              return e.replace(t, n);
            }), "assign");
          }
          /^\d+(s|m|h|d)$/i.test(i) ? (/^\d+s$/i.test(i) && this.setSec(e, s, i.replace(/s$/i, ""), r, a, o), /^\d+m$/i.test(i) && this.setMin(e, s, i.replace(/m$/i, ""), r, a, o), /^\d+h$/i.test(i) && this.setHour(e, s, i.replace(/h$/i, ""), r, a, o), /^\d+d$/i.test(i) && this.setDay(e, s, i.replace(/d$/i, ""), r, a, o)) : this.write(e, s, i, r, a, o);
        },
        setDay: function (e, t, n, i, r, a) {
          this.write(e, t, 24 * n * 60 * 60, i, r, a);
        },
        setHour: function (e, t, n, i, r, a) {
          this.write(e, t, 60 * n * 60, i, r, a);
        },
        setMin: function (e, t, n, i, r, a) {
          this.write(e, t, 60 * n, i, r, a);
        },
        setSec: function (e, t, n, i, r, a) {
          this.write(e, t, n, i, r, a);
        },
        read: function (e, t, n) {
          for (var i = cc11001100_hook("i", "", "var-init"), r = cc11001100_hook("r", document.cookie.split("; "), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < r.length; a++) {
            var o = cc11001100_hook("o", r[a].match(/^(\w+)=(.+)$/), "var-init");
            if (o && 1 < o.length && o[1] == e) {
              i = cc11001100_hook("i", o[2], "assign");
              break;
            }
          }
          return "" == i ? null : t ? n ? JSON.parse(i)[t] : new v.Param().parse(i)[t] : i;
        },
        remove: function (e, t, n) {
          var i = cc11001100_hook("i", e + "=", "var-init");
          t && (i += cc11001100_hook("i", "; path=" + t, "assign")), n && (i += cc11001100_hook("i", ";domain=" + n, "assign")), i += cc11001100_hook("i", "; expires=Fri, 02-Jan-1970 00:00:00 GMT", "assign"), document.cookie = cc11001100_hook("document.cookie", i, "assign");
        }
      },
      Guid: function () {
        function e() {
          return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        }
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
      },
      Param: function () {
        var i = cc11001100_hook("i", [], "var-init"),
          a = cc11001100_hook("a", {}, "var-init");
        this.parse = cc11001100_hook("this.parse", function (e) {
          for (var t = cc11001100_hook("t", e.split("&"), "var-init"), n = cc11001100_hook("n", 0, "var-init"), i = cc11001100_hook("i", t.length, "var-init"); n < i; n++) {
            var r = cc11001100_hook("r", t[n].split("="), "var-init");
            a[r[0]] = cc11001100_hook("a[r[0]]", r[1], "assign");
          }
          return a;
        }, "assign"), this.toString = cc11001100_hook("this.toString", function (e) {
          return e = cc11001100_hook("e", e || "&", "assign"), i.join(e);
        }, "assign"), this.add = cc11001100_hook("this.add", function (e, t) {
          var n = cc11001100_hook("n", e + "=" + t, "var-init");
          return i.push(n), this;
        }, "assign");
      },
      trim: function (e) {
        return e.replace(/^(\s|\u3000)*|(\s|\u3000)*$/g, "");
      },
      isStorageSupported: function (e) {
        if (!e) return !1;
        try {
          return e.setItem("key", "value"), e.removeItem("key"), !0;
        } catch (e) {
          return !1;
        }
      },
      isCanvasSupported: function () {
        var e = cc11001100_hook("e", document.createElement("canvas"), "var-init");
        return !(!e.getContext || !e.getContext("2d"));
      },
      getWebglCanvas: function () {
        var e = cc11001100_hook("e", document.createElement("canvas"), "var-init"),
          t = cc11001100_hook("t", null, "var-init");
        try {
          t = cc11001100_hook("t", e.getContext("webgl") || e.getContext("experimental-webgl"), "assign");
        } catch (e) {}
        return t = cc11001100_hook("t", t || null, "assign");
      },
      isWebGlSupported: function () {
        if (!v.isCanvasSupported()) return !1;
        var e = cc11001100_hook("e", v.getWebglCanvas(), "var-init");
        return !!window.WebGLRenderingContext && !!e;
      },
      each: function (e, t) {
        if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);else if (e.length === +e.length) for (var n = cc11001100_hook("n", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); n < i; n++) t(e[n], n, e);else for (var r in e) e.hasOwnProperty(r) && t(e[r], r, e);
      },
      Md5: function (e) {
        var t,
          r = cc11001100_hook("r", 0, "var-init"),
          a = cc11001100_hook("a", 8, "var-init");
        function s(e, t, n, i, r, a) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("a", a, "function-parameter");
          return p(function (e, t) {
            return e << t | e >>> 32 - t;
          }(p(p(t, e), p(i, a)), r), n);
        }
        function d(e, t, n, i, r, a, o) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("a", a, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          return s(t & n | ~t & i, e, t, r, a, o);
        }
        function f(e, t, n, i, r, a, o) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("a", a, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          return s(t & i | n & ~i, e, t, r, a, o);
        }
        function h(e, t, n, i, r, a, o) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("a", a, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          return s(t ^ n ^ i, e, t, r, a, o);
        }
        function g(e, t, n, i, r, a, o) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("a", a, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          return s(n ^ (t | ~i), e, t, r, a, o);
        }
        function p(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          var n = cc11001100_hook("n", (65535 & e) + (65535 & t), "var-init");
          return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
        }
        return e = cc11001100_hook("e", e ? function (e) {
          for (var t = cc11001100_hook("t", r ? "0123456789ABCDEF" : "0123456789abcdef", "var-init"), n = cc11001100_hook("n", "", "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < 4 * e.length; i++) n += cc11001100_hook("n", t.charAt(e[i >> 2] >> i % 4 * 8 + 4 & 15) + t.charAt(e[i >> 2] >> i % 4 * 8 & 15), "assign");
          return n;
        }(function (e, t) {
          e[t >> 5] |= cc11001100_hook("e[t >> 5]", 128 << t % 32, "assign"), e[14 + (t + 64 >>> 9 << 4)] = cc11001100_hook("e[14 + (t + 64 >>> 9 << 4)]", t, "assign");
          for (var n = cc11001100_hook("n", 1732584193, "var-init"), i = cc11001100_hook("i", -271733879, "var-init"), r = cc11001100_hook("r", -1732584194, "var-init"), a = cc11001100_hook("a", 271733878, "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < e.length; o += cc11001100_hook("o", 16, "assign")) {
            var s = cc11001100_hook("s", n, "var-init"),
              c = cc11001100_hook("c", i, "var-init"),
              l = cc11001100_hook("l", r, "var-init"),
              u = cc11001100_hook("u", a, "var-init");
            n = cc11001100_hook("n", d(n, i, r, a, e[o + 0], 7, -680876936), "assign"), a = cc11001100_hook("a", d(a, n, i, r, e[o + 1], 12, -389564586), "assign"), r = cc11001100_hook("r", d(r, a, n, i, e[o + 2], 17, 606105819), "assign"), i = cc11001100_hook("i", d(i, r, a, n, e[o + 3], 22, -1044525330), "assign"), n = cc11001100_hook("n", d(n, i, r, a, e[o + 4], 7, -176418897), "assign"), a = cc11001100_hook("a", d(a, n, i, r, e[o + 5], 12, 1200080426), "assign"), r = cc11001100_hook("r", d(r, a, n, i, e[o + 6], 17, -1473231341), "assign"), i = cc11001100_hook("i", d(i, r, a, n, e[o + 7], 22, -45705983), "assign"), n = cc11001100_hook("n", d(n, i, r, a, e[o + 8], 7, 1770035416), "assign"), a = cc11001100_hook("a", d(a, n, i, r, e[o + 9], 12, -1958414417), "assign"), r = cc11001100_hook("r", d(r, a, n, i, e[o + 10], 17, -42063), "assign"), i = cc11001100_hook("i", d(i, r, a, n, e[o + 11], 22, -1990404162), "assign"), n = cc11001100_hook("n", d(n, i, r, a, e[o + 12], 7, 1804603682), "assign"), a = cc11001100_hook("a", d(a, n, i, r, e[o + 13], 12, -40341101), "assign"), r = cc11001100_hook("r", d(r, a, n, i, e[o + 14], 17, -1502002290), "assign"), i = cc11001100_hook("i", d(i, r, a, n, e[o + 15], 22, 1236535329), "assign"), n = cc11001100_hook("n", f(n, i, r, a, e[o + 1], 5, -165796510), "assign"), a = cc11001100_hook("a", f(a, n, i, r, e[o + 6], 9, -1069501632), "assign"), r = cc11001100_hook("r", f(r, a, n, i, e[o + 11], 14, 643717713), "assign"), i = cc11001100_hook("i", f(i, r, a, n, e[o + 0], 20, -373897302), "assign"), n = cc11001100_hook("n", f(n, i, r, a, e[o + 5], 5, -701558691), "assign"), a = cc11001100_hook("a", f(a, n, i, r, e[o + 10], 9, 38016083), "assign"), r = cc11001100_hook("r", f(r, a, n, i, e[o + 15], 14, -660478335), "assign"), i = cc11001100_hook("i", f(i, r, a, n, e[o + 4], 20, -405537848), "assign"), n = cc11001100_hook("n", f(n, i, r, a, e[o + 9], 5, 568446438), "assign"), a = cc11001100_hook("a", f(a, n, i, r, e[o + 14], 9, -1019803690), "assign"), r = cc11001100_hook("r", f(r, a, n, i, e[o + 3], 14, -187363961), "assign"), i = cc11001100_hook("i", f(i, r, a, n, e[o + 8], 20, 1163531501), "assign"), n = cc11001100_hook("n", f(n, i, r, a, e[o + 13], 5, -1444681467), "assign"), a = cc11001100_hook("a", f(a, n, i, r, e[o + 2], 9, -51403784), "assign"), r = cc11001100_hook("r", f(r, a, n, i, e[o + 7], 14, 1735328473), "assign"), i = cc11001100_hook("i", f(i, r, a, n, e[o + 12], 20, -1926607734), "assign"), n = cc11001100_hook("n", h(n, i, r, a, e[o + 5], 4, -378558), "assign"), a = cc11001100_hook("a", h(a, n, i, r, e[o + 8], 11, -2022574463), "assign"), r = cc11001100_hook("r", h(r, a, n, i, e[o + 11], 16, 1839030562), "assign"), i = cc11001100_hook("i", h(i, r, a, n, e[o + 14], 23, -35309556), "assign"), n = cc11001100_hook("n", h(n, i, r, a, e[o + 1], 4, -1530992060), "assign"), a = cc11001100_hook("a", h(a, n, i, r, e[o + 4], 11, 1272893353), "assign"), r = cc11001100_hook("r", h(r, a, n, i, e[o + 7], 16, -155497632), "assign"), i = cc11001100_hook("i", h(i, r, a, n, e[o + 10], 23, -1094730640), "assign"), n = cc11001100_hook("n", h(n, i, r, a, e[o + 13], 4, 681279174), "assign"), a = cc11001100_hook("a", h(a, n, i, r, e[o + 0], 11, -358537222), "assign"), r = cc11001100_hook("r", h(r, a, n, i, e[o + 3], 16, -722521979), "assign"), i = cc11001100_hook("i", h(i, r, a, n, e[o + 6], 23, 76029189), "assign"), n = cc11001100_hook("n", h(n, i, r, a, e[o + 9], 4, -640364487), "assign"), a = cc11001100_hook("a", h(a, n, i, r, e[o + 12], 11, -421815835), "assign"), r = cc11001100_hook("r", h(r, a, n, i, e[o + 15], 16, 530742520), "assign"), i = cc11001100_hook("i", h(i, r, a, n, e[o + 2], 23, -995338651), "assign"), n = cc11001100_hook("n", g(n, i, r, a, e[o + 0], 6, -198630844), "assign"), a = cc11001100_hook("a", g(a, n, i, r, e[o + 7], 10, 1126891415), "assign"), r = cc11001100_hook("r", g(r, a, n, i, e[o + 14], 15, -1416354905), "assign"), i = cc11001100_hook("i", g(i, r, a, n, e[o + 5], 21, -57434055), "assign"), n = cc11001100_hook("n", g(n, i, r, a, e[o + 12], 6, 1700485571), "assign"), a = cc11001100_hook("a", g(a, n, i, r, e[o + 3], 10, -1894986606), "assign"), r = cc11001100_hook("r", g(r, a, n, i, e[o + 10], 15, -1051523), "assign"), i = cc11001100_hook("i", g(i, r, a, n, e[o + 1], 21, -2054922799), "assign"), n = cc11001100_hook("n", g(n, i, r, a, e[o + 8], 6, 1873313359), "assign"), a = cc11001100_hook("a", g(a, n, i, r, e[o + 15], 10, -30611744), "assign"), r = cc11001100_hook("r", g(r, a, n, i, e[o + 6], 15, -1560198380), "assign"), i = cc11001100_hook("i", g(i, r, a, n, e[o + 13], 21, 1309151649), "assign"), n = cc11001100_hook("n", g(n, i, r, a, e[o + 4], 6, -145523070), "assign"), a = cc11001100_hook("a", g(a, n, i, r, e[o + 11], 10, -1120210379), "assign"), r = cc11001100_hook("r", g(r, a, n, i, e[o + 2], 15, 718787259), "assign"), i = cc11001100_hook("i", g(i, r, a, n, e[o + 9], 21, -343485551), "assign"), n = cc11001100_hook("n", p(n, s), "assign"), i = cc11001100_hook("i", p(i, c), "assign"), r = cc11001100_hook("r", p(r, l), "assign"), a = cc11001100_hook("a", p(a, u), "assign");
          }
          return Array(n, i, r, a);
        }(function (e) {
          for (var t = cc11001100_hook("t", Array(), "var-init"), n = cc11001100_hook("n", (1 << a) - 1, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length * a; i += cc11001100_hook("i", a, "assign")) t[i >> 5] |= cc11001100_hook("t[i >> 5]", (e.charCodeAt(i / a) & n) << i % 32, "assign");
          return t;
        }(t = cc11001100_hook("t", e, "assign")), t.length * a)) : "", "assign");
      },
      dateFmt: function (e, t) {
        var n = cc11001100_hook("n", {
          "M+": cc11001100_hook("M+", t.getMonth() + 1, "object-key-init"),
          "d+": cc11001100_hook("d+", t.getDate(), "object-key-init"),
          "h+": cc11001100_hook("h+", t.getHours(), "object-key-init"),
          "m+": cc11001100_hook("m+", t.getMinutes(), "object-key-init"),
          "s+": cc11001100_hook("s+", t.getSeconds(), "object-key-init"),
          "q+": cc11001100_hook("q+", Math.floor((t.getMonth() + 3) / 3), "object-key-init"),
          S: cc11001100_hook("S", t.getMilliseconds(), "object-key-init")
        }, "var-init");
        for (var i in /(y+)/.test(e) && (e = cc11001100_hook("e", e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)), "assign")), n) new RegExp("(" + i + ")").test(e) && (e = cc11001100_hook("e", e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[i] : ("00" + n[i]).substr(("" + n[i]).length)), "assign"));
        return e;
      },
      loadScript: function (e, t, n) {
        var i = cc11001100_hook("i", t || "", "var-init");
        if (t && "object" == typeof t) {
          var r = cc11001100_hook("r", "", "var-init");
          for (var a in t) r += cc11001100_hook("r", a + "=" + t[a] + "&", "assign");
          i = cc11001100_hook("i", r.substr(0, r.length - 1), "assign");
        }
        i = cc11001100_hook("i", v.trim(i), "assign");
        var o = cc11001100_hook("o", document.createElement("script"), "var-init");
        o.type = cc11001100_hook("o.type", "text/javascript", "assign"), o.src = cc11001100_hook("o.src", e + (i ? "?" + i : ""), "assign"), o.onload = cc11001100_hook("o.onload", o.onreadystatechange = cc11001100_hook("o.onreadystatechange", function () {
          this.readyState && "complete" != this.readyState && "loaded" != this.readyState || (n && n(), o.onreadystatechange = cc11001100_hook("o.onreadystatechange", o.onload = cc11001100_hook("o.onload", null, "assign"), "assign"), o = cc11001100_hook("o", null, "assign"));
        }, "assign"), "assign"), document.getElementsByTagName("head")[0].appendChild(o);
      },
      signatureParam: function (e, t) {
        var n = cc11001100_hook("n", new Array(), "var-init");
        for (var i in e) e.hasOwnProperty(i) && "signature" != i && n.push(e[i]);
        for (var r = cc11001100_hook("r", n.sort(), "var-init"), a = cc11001100_hook("a", "", "var-init"), o = cc11001100_hook("o", 0, "var-init"), s = cc11001100_hook("s", r.length, "var-init"); o < s; o++) a += cc11001100_hook("a", r[o], "assign");
        return a = cc11001100_hook("a", v.Md5(t + a + t), "assign");
      },
      isIOSClient: function () {
        return !!navigator.userAgent.match(/KGBrowser/gi);
      },
      isAndroidClient: function () {
        var e = cc11001100_hook("e", !!navigator.userAgent.match(/kugouandroid/gi), "var-init");
        return "undefined" != typeof external && void 0 !== external.superCall || e;
      },
      isPCClient: function () {
        var e = cc11001100_hook("e", !1, "var-init");
        try {
          e = cc11001100_hook("e", void 0 !== external.GetVersion, "assign");
        } catch (e) {}
        return e;
      },
      loadMobileCall: function (e) {
        window.KgMobileCall && window.KgMobileCall.callCmd ? e && e() : v.loadScript("https://m3ws.kugou.com/static/js/common/mobilecall_3.0.js", {}, function () {
          e && e();
        });
      },
      loadBase: function (t) {
        try {
          jQuery ? t && t() : v.loadScript("https://staticssl.kugou.com/common/js/min/jquery-2.1.4.min.js", {}, function () {
            t && t();
          });
        } catch (e) {
          v.loadScript("https://staticssl.kugou.com/common/js/min/jquery-2.1.4.min.js", {}, function () {
            t && t();
          });
        }
      }
    }, "var-init"),
    y = cc11001100_hook("y", 4, "var-init");
  getUUIDKey = cc11001100_hook("getUUIDKey", function () {
    var e = cc11001100_hook("e", i() + r() + s() + a() + o() + u() + l() + c(), "var-init");
    return e = cc11001100_hook("e", e ? v.Md5(e) : "", "assign");
  }, "assign");
  function S() {
    var e = cc11001100_hook("e", v.Guid(), "var-init");
    try {
      v.Cookie.write("kg_mid", v.Md5(e), 864e6, "/", "kugou.com");
    } catch (e) {}
    return v.Md5(e);
  }
  function C(t) {
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", {}, "var-init");
    n.appCodeName = cc11001100_hook("n.appCodeName", navigator.appCodeName ? navigator.appCodeName : "", "assign"), n.appName = cc11001100_hook("n.appName", navigator.appName ? navigator.appName : "", "assign"), n.appVersion = cc11001100_hook("n.appVersion", navigator.appVersion ? navigator.appVersion : "", "assign"), n.connection = cc11001100_hook("n.connection", function () {
      var e = cc11001100_hook("e", navigator.userAgent, "var-init"),
        t = cc11001100_hook("t", e.match(/NetType\/\w+/) ? e.match(/NetType\/\w+/)[0] : "NetType/other", "var-init");
      return (t = cc11001100_hook("t", t.toLowerCase().replace("nettype/", ""), "assign")) || "";
    }(), "assign"), n.doNotTrack = cc11001100_hook("n.doNotTrack", navigator.doNotTrack ? navigator.doNotTrack : "", "assign"), n.hardwareConcurrency = cc11001100_hook("n.hardwareConcurrency", navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "", "assign"), n.language = cc11001100_hook("n.language", navigator.language ? navigator.language : "", "assign"), n.languages = cc11001100_hook("n.languages", void 0 === navigator.languages ? "" : navigator.languages.toString() ? navigator.languages.toString() : "", "assign"), n.maxTouchPoints = cc11001100_hook("n.maxTouchPoints", function () {
      var e = cc11001100_hook("e", 0, "var-init");
      return void 0 !== navigator.maxTouchPoints ? e = cc11001100_hook("e", navigator.maxTouchPoints, "assign") : void 0 !== navigator.msMaxTouchPoints && (e = cc11001100_hook("e", navigator.msMaxTouchPoints, "assign")), e;
    }(), "assign"), n.mimeTypes = cc11001100_hook("n.mimeTypes", function () {
      var e = cc11001100_hook("e", navigator.mimeTypes, "var-init"),
        t = cc11001100_hook("t", "", "var-init");
      if (0 < e.length) {
        for (var n = cc11001100_hook("n", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); i < r; i++) {
          var a = cc11001100_hook("a", e[i].type, "var-init");
          n.push(a);
        }
        t = cc11001100_hook("t", n.toString(), "assign");
      }
      return t;
    }(), "assign"), n.platform = cc11001100_hook("n.platform", navigator.platform ? navigator.platform : "", "assign"), n.plugins = cc11001100_hook("n.plugins", r(), "assign"), n.userAgent = cc11001100_hook("n.userAgent", i(), "assign"), n.colorDepth = cc11001100_hook("n.colorDepth", a(), "assign"), n.pixelDepth = cc11001100_hook("n.pixelDepth", o(), "assign"), n.screenResolution = cc11001100_hook("n.screenResolution", s(), "assign"), n.timezoneOffset = cc11001100_hook("n.timezoneOffset", new Date().getTimezoneOffset(), "assign"), n.sessionStorage = cc11001100_hook("n.sessionStorage", v.isStorageSupported(window.sessionStorage), "assign"), n.localStorage = cc11001100_hook("n.localStorage", v.isStorageSupported(window.localStorage), "assign"), n.indexedDB = cc11001100_hook("n.indexedDB", function () {
      try {
        return !!window.indexedDB;
      } catch (e) {
        return !1;
      }
    }(), "assign"), n.cookie = cc11001100_hook("n.cookie", !!navigator.cookieEnabled && navigator.cookieEnabled, "assign"), n.adBlock = cc11001100_hook("n.adBlock", function () {
      var e = cc11001100_hook("e", document.createElement("div"), "var-init");
      e.innerHTML = cc11001100_hook("e.innerHTML", "&nbsp;", "assign");
      var t = cc11001100_hook("t", !(e.className = cc11001100_hook("e.className", "adsbox", "assign")), "var-init");
      try {
        document.body.appendChild(e), t = cc11001100_hook("t", 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, "assign"), document.body.removeChild(e);
      } catch (e) {
        t = cc11001100_hook("t", !1, "assign");
      }
      return t;
    }(), "assign"), n.devicePixelRatio = cc11001100_hook("n.devicePixelRatio", window.devicePixelRatio ? window.devicePixelRatio : "", "assign"), n.hasLiedOs = cc11001100_hook("n.hasLiedOs", function () {
      var e,
        t = cc11001100_hook("t", navigator.userAgent.toLowerCase(), "var-init"),
        n = cc11001100_hook("n", navigator.oscpu, "var-init"),
        i = cc11001100_hook("i", navigator.platform.toLowerCase(), "var-init");
      if (e = cc11001100_hook("e", 0 <= t.indexOf("windows phone") ? "Windows Phone" : 0 <= t.indexOf("win") ? "Windows" : 0 <= t.indexOf("android") ? "Android" : 0 <= t.indexOf("linux") || 0 <= t.indexOf("cros") ? "Linux" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") ? "iOS" : 0 <= t.indexOf("mac") ? "Mac" : "Other", "assign"), ("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
      if (void 0 !== n) {
        if (0 <= (n = cc11001100_hook("n", n.toLowerCase(), "assign")).indexOf("win") && "Windows" !== e && "Windows Phone" !== e) return !0;
        if (0 <= n.indexOf("linux") && "Linux" !== e && "Android" !== e) return !0;
        if (0 <= n.indexOf("mac") && "Mac" !== e && "iOS" !== e) return !0;
        if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e)) return !0;
      }
      return 0 <= i.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || (0 <= i.indexOf("linux") || 0 <= i.indexOf("android") || 0 <= i.indexOf("pike")) && "Linux" !== e && "Android" !== e || (0 <= i.indexOf("mac") || 0 <= i.indexOf("ipad") || 0 <= i.indexOf("ipod") || 0 <= i.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || (-1 === i.indexOf("win") && -1 === i.indexOf("linux") && -1 === i.indexOf("mac")) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e;
    }(), "assign"), n.hasLiedLanguages = cc11001100_hook("n.hasLiedLanguages", function () {
      if (void 0 !== navigator.languages) try {
        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0;
      } catch (e) {
        return !0;
      }
      return !1;
    }(), "assign"), n.hasLiedResolution = cc11001100_hook("n.hasLiedResolution", window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight, "assign"), n.hasLiedBrowser = cc11001100_hook("n.hasLiedBrowser", function () {
      var e,
        t = cc11001100_hook("t", navigator.userAgent.toLowerCase(), "var-init"),
        n = cc11001100_hook("n", navigator.productSub, "var-init");
      if (("Chrome" === (e = cc11001100_hook("e", 0 <= t.indexOf("firefox") ? "Firefox" : 0 <= t.indexOf("opera") || 0 <= t.indexOf("opr") ? "Opera" : 0 <= t.indexOf("chrome") ? "Chrome" : 0 <= t.indexOf("safari") ? "Safari" : 0 <= t.indexOf("trident") ? "Internet Explorer" : "Other", "assign")) || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
      var i,
        r = cc11001100_hook("r", eval.toString().length, "var-init");
      if (37 === r && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
      if (39 === r && "Internet Explorer" !== e && "Other" !== e) return !0;
      if (33 === r && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
      try {
        throw "a";
      } catch (e) {
        try {
          e.toSource(), i = cc11001100_hook("i", !0, "assign");
        } catch (e) {
          i = cc11001100_hook("i", !1, "assign");
        }
      }
      return i && "Firefox" !== e && "Other" !== e;
    }(), "assign"), n.webglRenderer = cc11001100_hook("n.webglRenderer", c(), "assign"), n.webglVendor = cc11001100_hook("n.webglVendor", l(), "assign"), n.canvas = cc11001100_hook("n.canvas", u(), "assign"), n.fonts = cc11001100_hook("n.fonts", function () {
      var u = cc11001100_hook("u", ["monospace", "sans-serif", "serif"], "var-init"),
        d = cc11001100_hook("d", ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"], "var-init");
      d = cc11001100_hook("d", d.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"]), "assign");
      function f() {
        var e = cc11001100_hook("e", document.createElement("span"), "var-init");
        return e.style.position = cc11001100_hook("e.style.position", "absolute", "assign"), e.style.left = cc11001100_hook("e.style.left", "-9999px", "assign"), e.style.fontSize = cc11001100_hook("e.style.fontSize", "72px", "assign"), e.style.fontStyle = cc11001100_hook("e.style.fontStyle", "normal", "assign"), e.style.fontWeight = cc11001100_hook("e.style.fontWeight", "normal", "assign"), e.style.letterSpacing = cc11001100_hook("e.style.letterSpacing", "normal", "assign"), e.style.lineBreak = cc11001100_hook("e.style.lineBreak", "auto", "assign"), e.style.lineHeight = cc11001100_hook("e.style.lineHeight", "normal", "assign"), e.style.textTransform = cc11001100_hook("e.style.textTransform", "none", "assign"), e.style.textAlign = cc11001100_hook("e.style.textAlign", "left", "assign"), e.style.textDecoration = cc11001100_hook("e.style.textDecoration", "none", "assign"), e.style.textShadow = cc11001100_hook("e.style.textShadow", "none", "assign"), e.style.whiteSpace = cc11001100_hook("e.style.whiteSpace", "normal", "assign"), e.style.wordBreak = cc11001100_hook("e.style.wordBreak", "normal", "assign"), e.style.wordSpacing = cc11001100_hook("e.style.wordSpacing", "normal", "assign"), e.innerHTML = cc11001100_hook("e.innerHTML", "mmmmmwwwwwlli", "assign"), e;
      }
      function e(e) {
        cc11001100_hook("e", e, "function-parameter");
        for (var t = cc11001100_hook("t", !1, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < u.length; n++) if (t = cc11001100_hook("t", e[n].offsetWidth !== i[u[n]] || e[n].offsetHeight !== a[u[n]], "assign")) return t;
        return t;
      }
      var t = cc11001100_hook("t", document.getElementsByTagName("body")[0], "var-init"),
        r = cc11001100_hook("r", document.createElement("div"), "var-init"),
        h = cc11001100_hook("h", document.createElement("div"), "var-init"),
        i = cc11001100_hook("i", {}, "var-init"),
        a = cc11001100_hook("a", {}, "var-init");
      try {
        var n = cc11001100_hook("n", function () {
          for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"), n = cc11001100_hook("n", u.length, "var-init"); t < n; t++) {
            var i = cc11001100_hook("i", f(), "var-init");
            i.style.fontFamily = cc11001100_hook("i.style.fontFamily", u[t], "assign"), r.appendChild(i), e.push(i);
          }
          return e;
        }(), "var-init");
        t.appendChild(r);
        for (var o = cc11001100_hook("o", 0, "var-init"), s = cc11001100_hook("s", u.length, "var-init"); o < s; o++) i[u[o]] = cc11001100_hook("i[u[o]]", n[o].offsetWidth, "assign"), a[u[o]] = cc11001100_hook("a[u[o]]", n[o].offsetHeight, "assign");
        var c = cc11001100_hook("c", function () {
          for (var e, t, n, i = cc11001100_hook("i", {}, "var-init"), r = cc11001100_hook("r", 0, "var-init"), a = cc11001100_hook("a", d.length, "var-init"); r < a; r++) {
            for (var o = cc11001100_hook("o", [], "var-init"), s = cc11001100_hook("s", 0, "var-init"), c = cc11001100_hook("c", u.length, "var-init"); s < c; s++) {
              var l = cc11001100_hook("l", (e = cc11001100_hook("e", d[r], "assign"), t = cc11001100_hook("t", u[s], "assign"), n = cc11001100_hook("n", void 0, "assign"), (n = cc11001100_hook("n", f(), "assign")).style.fontFamily = cc11001100_hook("(n = f()).style.fontFamily", "'" + e + "'," + t, "assign"), n), "var-init");
              h.appendChild(l), o.push(l);
            }
            i[d[r]] = cc11001100_hook("i[d[r]]", o, "assign");
          }
          return i;
        }(), "var-init");
        t.appendChild(h);
        var l = cc11001100_hook("l", [], "var-init");
        for (o = cc11001100_hook("o", 0, "assign"), s = cc11001100_hook("s", d.length, "assign"); o < s; o++) e(c[d[o]]) && l.push(d[o]);
        return t.removeChild(h), t.removeChild(r), l.toString();
      } catch (e) {
        return "";
      }
    }(), "assign"), n.dt = cc11001100_hook("n.dt", v.dateFmt("yyyy-MM-dd", new Date()), "assign"), n.time = cc11001100_hook("n.time", v.dateFmt("yyyy-MM-dd hh:mm:ss", new Date()), "assign"), n.userid = cc11001100_hook("n.userid", g(), "assign"), n.mid = cc11001100_hook("n.mid", m(), "assign"), n.uuid = cc11001100_hook("n.uuid", getUUIDKey(), "assign"), n.appid = cc11001100_hook("n.appid", h(), "assign"), n.webdriver = cc11001100_hook("n.webdriver", function () {
      var e = cc11001100_hook("e", !1, "var-init");
      return (Object.prototype.hasOwnProperty.call(navigator, "webdriver") || navigator.webdriver) && (e = cc11001100_hook("e", !0, "assign")), window.document.documentElement.getAttribute("webdriver") && (e = cc11001100_hook("e", !0, "assign")), e;
    }(), "assign"), n.callPhantom = cc11001100_hook("n.callPhantom", function () {
      var e = cc11001100_hook("e", !1, "var-init");
      return (window.callPhantom || window._phantom) && (e = cc11001100_hook("e", !0, "assign")), e;
    }(), "assign"), n.tempKgMid = cc11001100_hook("n.tempKgMid", function () {
      try {
        var e = cc11001100_hook("e", v.Cookie.read("kg_mid_temp"), "var-init");
        return v.Cookie.remove("kg_mid_temp", "/", "kugou.com"), e || "";
      } catch (e) {
        return "";
      }
    }(), "assign"), n.referrer = cc11001100_hook("n.referrer", document.referrer, "assign"), n.source = cc11001100_hook("n.source", window.location.href, "assign"), n.clientAppid = cc11001100_hook("n.clientAppid", v.isIOSClient() ? 1e3 : v.isAndroidClient() ? 1005 : v.isPCClient() ? 1001 : "", "assign"), function (t) {
      if (v.isIOSClient() || v.isAndroidClient()) try {
        v.loadMobileCall(function () {
          KgMobileCall.getVersion(function (e) {
            t && t(e.version);
          });
        });
      } catch (e) {
        return t && t("");
      } else {
        if (!v.isPCClient()) return t && t("");
        try {
          var e = cc11001100_hook("e", external.GetVersion(), "var-init");
          t && t(e);
        } catch (e) {
          return t && t("");
        }
      }
    }(function (e) {
      n.clientver = cc11001100_hook("n.clientver", e, "assign"), function (n) {
        if (v.isIOSClient() || v.isAndroidClient()) try {
          v.loadMobileCall(function () {
            KgMobileCall.getMobileInfo(function (e) {
              var t = cc11001100_hook("t", e.mid_v2 ? e.mid_v2 : e.mid, "var-init");
              n && n(t);
            });
          });
        } catch (e) {
          return n && n("");
        } else {
          if (!v.isPCClient()) return n && n("");
          d(function (e) {
            "string" == typeof e && (e = cc11001100_hook("e", JSON.parse(e), "assign"));
            var t = cc11001100_hook("t", "", "var-init");
            "mid" in e && (t = cc11001100_hook("t", e.mid, "assign")), n && n(t);
          });
        }
      }(function (e) {
        n.clientMid = cc11001100_hook("n.clientMid", e, "assign"), function (n) {
          if (v.isIOSClient() || v.isAndroidClient()) try {
            v.loadMobileCall(function () {
              KgMobileCall.getMobileInfo(function (e) {
                var t = cc11001100_hook("t", e.dfid ? e.dfid : "", "var-init");
                n && n(t);
              });
            });
          } catch (e) {
            return n && n("");
          } else {
            if (!v.isPCClient()) return n && n("");
            d(function (e) {
              "string" == typeof e && (e = cc11001100_hook("e", JSON.parse(e), "assign"));
              var t = cc11001100_hook("t", "", "var-init");
              "dfid" in e && (t = cc11001100_hook("t", e.dfid, "assign")), n && n(t);
            });
          }
        }(function (e) {
          n.clientDfid = cc11001100_hook("n.clientDfid", e, "assign"), function (n) {
            if (v.isIOSClient() || v.isAndroidClient()) try {
              v.loadMobileCall(function () {
                KgMobileCall.getUserInfo(function (e) {
                  var t = cc11001100_hook("t", "", "var-init");
                  1 == e.status && (t = cc11001100_hook("t", e.kugouID, "assign")), n && n(t);
                });
              });
            } catch (e) {
              return n && n("");
            } else {
              if (!v.isPCClient()) return n && n("");
              d(function (e) {
                "string" == typeof e && (e = cc11001100_hook("e", JSON.parse(e), "assign"));
                var t = cc11001100_hook("t", "", "var-init");
                "kugouid" in e && (t = cc11001100_hook("t", e.kugouid, "assign")), n && n(t);
              });
            }
          }(function (e) {
            n.clientUserId = cc11001100_hook("n.clientUserId", e, "assign"), function (n) {
              if (navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return n && n("");
              var e = cc11001100_hook("e", window.OfflineAudioContext || window.webkitOfflineAudioContext, "var-init");
              if (null == e) return n && n("");
              var t = cc11001100_hook("t", new e(1, 44100, 44100), "var-init"),
                i = cc11001100_hook("i", t.createOscillator(), "var-init");
              i.type = cc11001100_hook("i.type", "triangle", "assign"), i.frequency.setValueAtTime(1e4, t.currentTime);
              var r = cc11001100_hook("r", t.createDynamicsCompressor(), "var-init");
              v.each([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]], function (e) {
                void 0 !== r[e[0]] && "function" == typeof r[e[0]].setValueAtTime && r[e[0]].setValueAtTime(e[1], t.currentTime);
              }), i.connect(r), r.connect(t.destination), i.start(0), t.startRendering();
              var a = cc11001100_hook("a", setTimeout(function () {
                t.oncomplete = cc11001100_hook("t.oncomplete", function () {}, "assign"), t = cc11001100_hook("t", null, "assign"), n && n("");
              }, 1e3), "var-init");
              t.oncomplete = cc11001100_hook("t.oncomplete", function (e) {
                var t;
                try {
                  clearTimeout(a), t = cc11001100_hook("t", e.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function (e, t) {
                    return e + Math.abs(t);
                  }, 0).toString(), "assign"), i.disconnect(), r.disconnect();
                } catch (e) {
                  t = cc11001100_hook("t", "", "assign");
                }
                n && n(t);
              }, "assign");
            }(function (e) {
              n.audioKey = cc11001100_hook("n.audioKey", e, "assign"), t && t(n);
            });
          });
        });
      });
    });
  }
  var e,
    t,
    f = function (e) {
      var t = cc11001100_hook("t", "", "var-init"),
        n = cc11001100_hook("n", h(), "var-init"),
        i = cc11001100_hook("i", y, "var-init"),
        r = cc11001100_hook("r", parseInt(new Date().getTime() / 1e3), "var-init"),
        a = cc11001100_hook("a", m() ? m() : S(), "var-init"),
        o = cc11001100_hook("o", g() ? g() : 0, "var-init"),
        s = cc11001100_hook("s", v.Cookie.read("kg_dfid"), "var-init"),
        c = cc11001100_hook("c", "", "var-init"),
        l = cc11001100_hook("l", p(), "var-init");
      if (null != e) try {
        t = cc11001100_hook("t", JSON.stringify(e), "assign");
        var u = cc11001100_hook("u", CryptoJS.enc.Utf8.parse(t), "var-init");
        c = cc11001100_hook("c", CryptoJS.enc.Base64.stringify(u), "assign");
      } catch (e) {}
      var d = cc11001100_hook("d", {
        appid: cc11001100_hook("appid", n, "object-key-init"),
        platid: cc11001100_hook("platid", i, "object-key-init"),
        clientver: cc11001100_hook("clientver", 0, "object-key-init"),
        clienttime: cc11001100_hook("clienttime", r, "object-key-init"),
        signature: cc11001100_hook("signature", "", "object-key-init"),
        mid: cc11001100_hook("mid", a, "object-key-init"),
        uuid: cc11001100_hook("uuid", e.uuid, "object-key-init"),
        userid: cc11001100_hook("userid", o, "object-key-init"),
        dfid: cc11001100_hook("dfid", s, "object-key-init"),
        "p.token": cc11001100_hook("p.token", l, "object-key-init")
      }, "var-init");
      d.signature = cc11001100_hook("d.signature", v.signatureParam(d, n), "assign");
      var f = cc11001100_hook("f", "https://userservice.kugou.com/risk/v1/r_update_dev?appid=" + d.appid + "&platid=" + d.platid + "&clientver=" + d.clientver + "&clienttime=" + d.clienttime + "&signature=" + d.signature + "&mid=" + d.mid + "&userid=" + d.userid + "&uuid=" + d.uuid + "&dfid=" + d.dfid + "&p.token=" + d["p.token"], "var-init");
      v.loadBase(function () {
        jQuery.ajax({
          type: cc11001100_hook("type", "post", "object-key-init"),
          url: cc11001100_hook("url", f, "object-key-init"),
          data: cc11001100_hook("data", c, "object-key-init"),
          success: function (e) {
            if (e && 1 == e.status) {
              var t = cc11001100_hook("t", e.data.dfid, "var-init");
              if (null != t && "" != t) {
                v.Cookie.remove("kg_dfid", "/", "kugou.com"), v.Cookie.write("kg_dfid", t, 31536e3, "/", "kugou.com"), v.Cookie.remove("kg_dfid_collect", "/", "kugou.com"), v.Cookie.write("kg_dfid_collect", v.Md5(r), 86400, "/", "kugou.com");
                var n = cc11001100_hook("n", new Date().getTime() - T, "var-init");
                jQuery.ajax({
                  type: cc11001100_hook("type", "get", "object-key-init"),
                  url: cc11001100_hook("url", "https://statwww2.kugou.com/node/weblog/jsloger", "object-key-init"),
                  data: {
                    key: cc11001100_hook("key", "registerDev", "object-key-init"),
                    time: cc11001100_hook("time", n, "object-key-init"),
                    errmsg: cc11001100_hook("errmsg", "生成设备指纹时长(毫秒)", "object-key-init")
                  }
                });
              }
            } else 36015 == e.error_code && C(function (e) {
              null != e && B(e);
            });
          },
          error: function (e) {}
        });
      });
    },
    B = function (e) {
      var t = cc11001100_hook("t", "", "var-init"),
        n = cc11001100_hook("n", h(), "var-init"),
        i = cc11001100_hook("i", y, "var-init"),
        r = cc11001100_hook("r", parseInt(new Date().getTime() / 1e3), "var-init"),
        a = cc11001100_hook("a", m() ? m() : S(), "var-init"),
        o = cc11001100_hook("o", g() ? g() : 0, "var-init"),
        s = cc11001100_hook("s", "", "var-init"),
        c = cc11001100_hook("c", p(), "var-init");
      if (null != e) try {
        t = cc11001100_hook("t", JSON.stringify(e), "assign");
        var l = cc11001100_hook("l", CryptoJS.enc.Utf8.parse(t), "var-init");
        s = cc11001100_hook("s", CryptoJS.enc.Base64.stringify(l), "assign");
      } catch (e) {}
      var u = cc11001100_hook("u", {
        appid: cc11001100_hook("appid", n, "object-key-init"),
        platid: cc11001100_hook("platid", i, "object-key-init"),
        clientver: cc11001100_hook("clientver", 0, "object-key-init"),
        clienttime: cc11001100_hook("clienttime", r, "object-key-init"),
        signature: cc11001100_hook("signature", "", "object-key-init"),
        mid: cc11001100_hook("mid", a, "object-key-init"),
        uuid: cc11001100_hook("uuid", e.uuid, "object-key-init"),
        userid: cc11001100_hook("userid", o, "object-key-init"),
        "p.token": cc11001100_hook("p.token", c, "object-key-init")
      }, "var-init");
      u.signature = cc11001100_hook("u.signature", v.signatureParam(u, n), "assign");
      var d = cc11001100_hook("d", "https://userservice.kugou.com/risk/v1/r_register_dev?appid=" + u.appid + "&platid=" + u.platid + "&clientver=" + u.clientver + "&clienttime=" + u.clienttime + "&signature=" + u.signature + "&mid=" + u.mid + "&userid=" + u.userid + "&uuid=" + u.uuid + "&p.token=" + u["p.token"], "var-init");
      v.loadBase(function () {
        jQuery.ajax({
          type: cc11001100_hook("type", "post", "object-key-init"),
          url: cc11001100_hook("url", d, "object-key-init"),
          data: cc11001100_hook("data", s, "object-key-init"),
          success: function (e) {
            if (e && 1 == e.status) {
              var t = cc11001100_hook("t", e.data.dfid, "var-init");
              if (null != t && "" != t) {
                v.Cookie.remove("kg_dfid", "/", "kugou.com"), v.Cookie.write("kg_dfid", t, 31536e3, "/", "kugou.com"), v.Cookie.remove("kg_dfid_collect", "/", "kugou.com"), v.Cookie.write("kg_dfid_collect", v.Md5(r), 86400, "/", "kugou.com");
                var n = cc11001100_hook("n", new Date().getTime() - T, "var-init");
                jQuery.ajax({
                  type: cc11001100_hook("type", "get", "object-key-init"),
                  url: cc11001100_hook("url", "https://statwww2.kugou.com/node/weblog/jsloger", "object-key-init"),
                  data: {
                    key: cc11001100_hook("key", "registerDev", "object-key-init"),
                    time: cc11001100_hook("time", n, "object-key-init"),
                    errmsg: cc11001100_hook("errmsg", "生成设备指纹时长(毫秒)", "object-key-init")
                  }
                });
              }
            }
          },
          error: function (e) {}
        });
      });
    },
    T = cc11001100_hook("T", new Date().getTime(), "var-init");
  if (e = cc11001100_hook("e", v.Cookie.read("kg_dfid"), "assign"), t = cc11001100_hook("t", v.Cookie.read("kg_dfid_collect"), "assign"), e) {
    if (t) return;
    !function () {
      var e = cc11001100_hook("e", h(), "var-init"),
        t = cc11001100_hook("t", y, "var-init"),
        n = cc11001100_hook("n", parseInt(new Date().getTime() / 1e3), "var-init"),
        i = cc11001100_hook("i", m() ? m() : S(), "var-init"),
        r = cc11001100_hook("r", g() ? g() : 0, "var-init"),
        a = cc11001100_hook("a", getUUIDKey(), "var-init"),
        o = cc11001100_hook("o", v.Cookie.read("kg_dfid"), "var-init"),
        s = cc11001100_hook("s", p(), "var-init"),
        c = cc11001100_hook("c", {
          appid: cc11001100_hook("appid", e, "object-key-init"),
          platid: cc11001100_hook("platid", t, "object-key-init"),
          clientver: cc11001100_hook("clientver", 0, "object-key-init"),
          clienttime: cc11001100_hook("clienttime", n, "object-key-init"),
          signature: cc11001100_hook("signature", "", "object-key-init"),
          mid: cc11001100_hook("mid", i, "object-key-init"),
          uuid: cc11001100_hook("uuid", a, "object-key-init"),
          userid: cc11001100_hook("userid", r, "object-key-init"),
          dfid: cc11001100_hook("dfid", o, "object-key-init"),
          "p.token": cc11001100_hook("p.token", s, "object-key-init")
        }, "var-init");
      c.signature = cc11001100_hook("c.signature", v.signatureParam(c, e), "assign");
      var l = cc11001100_hook("l", "https://userservice.kugou.com/risk/v1/r_query_collect?appid=" + c.appid + "&platid=" + c.platid + "&clientver=" + c.clientver + "&clienttime=" + c.clienttime + "&signature=" + c.signature + "&mid=" + c.mid + "&userid=" + c.userid + "&uuid=" + c.uuid + "&dfid=" + c.dfid + "&p.token=" + c["p.token"], "var-init"),
        u = cc11001100_hook("u", "", "var-init");
      try {
        bodyParam = cc11001100_hook("bodyParam", JSON.stringify({
          uuid: cc11001100_hook("uuid", a, "object-key-init")
        }), "assign");
        var d = cc11001100_hook("d", CryptoJS.enc.Utf8.parse(bodyParam), "var-init");
        u = cc11001100_hook("u", CryptoJS.enc.Base64.stringify(d), "assign");
      } catch (e) {}
      v.loadBase(function () {
        jQuery.ajax({
          type: cc11001100_hook("type", "post", "object-key-init"),
          url: cc11001100_hook("url", l, "object-key-init"),
          data: cc11001100_hook("data", u, "object-key-init"),
          success: function (t) {
            t && 1 == t.status ? 1 == t.data.collect ? C(function (e) {
              null != t && f(e);
            }) : (v.Cookie.remove("kg_dfid_collect", "/", "kugou.com"), v.Cookie.write("kg_dfid_collect", v.Md5(n), 86400, "/", "kugou.com")) : t && 0 == t.status && 20018 == t.error_code && C(function (e) {
              null != e && B(e);
            });
          },
          error: function (e) {}
        });
      });
    }();
  } else C(function (e) {
    null != e && B(e);
  });
}();