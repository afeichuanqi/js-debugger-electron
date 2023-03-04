var QRCode;
!function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    this.mode = cc11001100_hook("this.mode", u.MODE_8BIT_BYTE, "assign"), this.data = cc11001100_hook("this.data", t, "assign"), this.parsedData = cc11001100_hook("this.parsedData", [], "assign");
    for (var e = cc11001100_hook("e", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"), o = cc11001100_hook("o", this.data.length, "var-init"); o > r; r++) {
      var i = cc11001100_hook("i", this.data.charCodeAt(r), "var-init");
      i > 65536 ? (e[0] = cc11001100_hook("e[0]", 240 | (1835008 & i) >>> 18, "assign"), e[1] = cc11001100_hook("e[1]", 128 | (258048 & i) >>> 12, "assign"), e[2] = cc11001100_hook("e[2]", 128 | (4032 & i) >>> 6, "assign"), e[3] = cc11001100_hook("e[3]", 128 | 63 & i, "assign")) : i > 2048 ? (e[0] = cc11001100_hook("e[0]", 224 | (61440 & i) >>> 12, "assign"), e[1] = cc11001100_hook("e[1]", 128 | (4032 & i) >>> 6, "assign"), e[2] = cc11001100_hook("e[2]", 128 | 63 & i, "assign")) : i > 128 ? (e[0] = cc11001100_hook("e[0]", 192 | (1984 & i) >>> 6, "assign"), e[1] = cc11001100_hook("e[1]", 128 | 63 & i, "assign")) : e[0] = cc11001100_hook("e[0]", i, "assign"), this.parsedData = cc11001100_hook("this.parsedData", this.parsedData.concat(e), "assign");
    }
    this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
  }
  function e(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    this.typeNumber = cc11001100_hook("this.typeNumber", t, "assign"), this.errorCorrectLevel = cc11001100_hook("this.errorCorrectLevel", e, "assign"), this.modules = cc11001100_hook("this.modules", null, "assign"), this.moduleCount = cc11001100_hook("this.moduleCount", 0, "assign"), this.dataCache = cc11001100_hook("this.dataCache", null, "assign"), this.dataList = cc11001100_hook("this.dataList", [], "assign");
  }
  function r(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (void 0 == t.length) throw new Error(t.length + "/" + e);
    for (var r = cc11001100_hook("r", 0, "var-init"); r < t.length && 0 == t[r];) r++;
    this.num = cc11001100_hook("this.num", new Array(t.length - r + e), "assign");
    for (var o = cc11001100_hook("o", 0, "var-init"); o < t.length - r; o++) this.num[o] = cc11001100_hook("this.num[o]", t[o + r], "assign");
  }
  function o(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    this.totalCount = cc11001100_hook("this.totalCount", t, "assign"), this.dataCount = cc11001100_hook("this.dataCount", e, "assign");
  }
  function i() {
    this.buffer = cc11001100_hook("this.buffer", [], "assign"), this.length = cc11001100_hook("this.length", 0, "assign");
  }
  function n() {
    return "undefined" != typeof CanvasRenderingContext2D;
  }
  function a() {
    var t = cc11001100_hook("t", !1, "var-init"),
      e = cc11001100_hook("e", navigator.userAgent, "var-init");
    return /android/i.test(e) && (t = cc11001100_hook("t", !0, "assign"), aMat = cc11001100_hook("aMat", e.toString().match(/android ([0-9]\.[0-9])/i), "assign"), aMat && aMat[1] && (t = cc11001100_hook("t", parseFloat(aMat[1]), "assign"))), t;
  }
  function s(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (var r = cc11001100_hook("r", 1, "var-init"), o = cc11001100_hook("o", h(t), "var-init"), i = cc11001100_hook("i", 0, "var-init"), n = cc11001100_hook("n", p.length, "var-init"); n >= i; i++) {
      var a = cc11001100_hook("a", 0, "var-init");
      switch (e) {
        case l.L:
          a = cc11001100_hook("a", p[i][0], "assign");
          break;
        case l.M:
          a = cc11001100_hook("a", p[i][1], "assign");
          break;
        case l.Q:
          a = cc11001100_hook("a", p[i][2], "assign");
          break;
        case l.H:
          a = cc11001100_hook("a", p[i][3], "assign");
      }
      if (a >= o) break;
      r++;
    }
    if (r > p.length) throw new Error("Too long data");
    return r;
  }
  function h(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a"), "var-init");
    return e.length + (e.length != t ? 3 : 0);
  }
  t.prototype = cc11001100_hook("t.prototype", {
    getLength: function () {
      return this.parsedData.length;
    },
    write: function (t) {
      for (var e = cc11001100_hook("e", 0, "var-init"), r = cc11001100_hook("r", this.parsedData.length, "var-init"); r > e; e++) t.put(this.parsedData[e], 8);
    }
  }, "assign"), e.prototype = cc11001100_hook("e.prototype", {
    addData: function (e) {
      var r = cc11001100_hook("r", new t(e), "var-init");
      this.dataList.push(r), this.dataCache = cc11001100_hook("this.dataCache", null, "assign");
    },
    isDark: function (t, e) {
      if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw new Error(t + "," + e);
      return this.modules[t][e];
    },
    getModuleCount: function () {
      return this.moduleCount;
    },
    make: function () {
      this.makeImpl(!1, this.getBestMaskPattern());
    },
    makeImpl: function (t, r) {
      this.moduleCount = cc11001100_hook("this.moduleCount", 4 * this.typeNumber + 17, "assign"), this.modules = cc11001100_hook("this.modules", new Array(this.moduleCount), "assign");
      for (var o = cc11001100_hook("o", 0, "var-init"); o < this.moduleCount; o++) {
        this.modules[o] = cc11001100_hook("this.modules[o]", new Array(this.moduleCount), "assign");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < this.moduleCount; i++) this.modules[o][i] = cc11001100_hook("this.modules[o][i]", null, "assign");
      }
      this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, r), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = cc11001100_hook("this.dataCache", e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList), "assign")), this.mapData(this.dataCache, r);
    },
    setupPositionProbePattern: function (t, e) {
      for (var r = cc11001100_hook("r", -1, "var-init"); 7 >= r; r++) if (!(-1 >= t + r || this.moduleCount <= t + r)) for (var o = cc11001100_hook("o", -1, "var-init"); 7 >= o; o++) -1 >= e + o || this.moduleCount <= e + o || (this.modules[t + r][e + o] = cc11001100_hook("this.modules[t + r][e + o]", r >= 0 && 6 >= r && (0 == o || 6 == o) || o >= 0 && 6 >= o && (0 == r || 6 == r) || r >= 2 && 4 >= r && o >= 2 && 4 >= o, "assign"));
    },
    getBestMaskPattern: function () {
      for (var t = cc11001100_hook("t", 0, "var-init"), e = cc11001100_hook("e", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); 8 > r; r++) {
        this.makeImpl(!0, r);
        var o = cc11001100_hook("o", g.getLostPoint(this), "var-init");
        (0 == r || t > o) && (t = cc11001100_hook("t", o, "assign"), e = cc11001100_hook("e", r, "assign"));
      }
      return e;
    },
    createMovieClip: function (t, e, r) {
      var o = cc11001100_hook("o", t.createEmptyMovieClip(e, r), "var-init"),
        i = cc11001100_hook("i", 1, "var-init");
      this.make();
      for (var n = cc11001100_hook("n", 0, "var-init"); n < this.modules.length; n++) for (var a = cc11001100_hook("a", n * i, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < this.modules[n].length; s++) {
        var h = cc11001100_hook("h", s * i, "var-init"),
          u = cc11001100_hook("u", this.modules[n][s], "var-init");
        u && (o.beginFill(0, 100), o.moveTo(h, a), o.lineTo(h + i, a), o.lineTo(h + i, a + i), o.lineTo(h, a + i), o.endFill());
      }
      return o;
    },
    setupTimingPattern: function () {
      for (var t = cc11001100_hook("t", 8, "var-init"); t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = cc11001100_hook("this.modules[t][6]", 0 == t % 2, "assign"));
      for (var e = cc11001100_hook("e", 8, "var-init"); e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = cc11001100_hook("this.modules[6][e]", 0 == e % 2, "assign"));
    },
    setupPositionAdjustPattern: function () {
      for (var t = cc11001100_hook("t", g.getPatternPosition(this.typeNumber), "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < t.length; e++) for (var r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) {
        var o = cc11001100_hook("o", t[e], "var-init"),
          i = cc11001100_hook("i", t[r], "var-init");
        if (null == this.modules[o][i]) for (var n = cc11001100_hook("n", -2, "var-init"); 2 >= n; n++) for (var a = cc11001100_hook("a", -2, "var-init"); 2 >= a; a++) this.modules[o + n][i + a] = cc11001100_hook("this.modules[o + n][i + a]", -2 == n || 2 == n || -2 == a || 2 == a || 0 == n && 0 == a, "assign");
      }
    },
    setupTypeNumber: function (t) {
      for (var e = cc11001100_hook("e", g.getBCHTypeNumber(this.typeNumber), "var-init"), r = cc11001100_hook("r", 0, "var-init"); 18 > r; r++) {
        var o = cc11001100_hook("o", !t && 1 == (1 & e >> r), "var-init");
        this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = cc11001100_hook("this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3]", o, "assign");
      }
      for (var r = cc11001100_hook("r", 0, "var-init"); 18 > r; r++) {
        var o = cc11001100_hook("o", !t && 1 == (1 & e >> r), "var-init");
        this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = cc11001100_hook("this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)]", o, "assign");
      }
    },
    setupTypeInfo: function (t, e) {
      for (var r = cc11001100_hook("r", this.errorCorrectLevel << 3 | e, "var-init"), o = cc11001100_hook("o", g.getBCHTypeInfo(r), "var-init"), i = cc11001100_hook("i", 0, "var-init"); 15 > i; i++) {
        var n = cc11001100_hook("n", !t && 1 == (1 & o >> i), "var-init");
        6 > i ? this.modules[i][8] = cc11001100_hook("this.modules[i][8]", n, "assign") : 8 > i ? this.modules[i + 1][8] = cc11001100_hook("this.modules[i + 1][8]", n, "assign") : this.modules[this.moduleCount - 15 + i][8] = cc11001100_hook("this.modules[this.moduleCount - 15 + i][8]", n, "assign");
      }
      for (var i = cc11001100_hook("i", 0, "var-init"); 15 > i; i++) {
        var n = cc11001100_hook("n", !t && 1 == (1 & o >> i), "var-init");
        8 > i ? this.modules[8][this.moduleCount - i - 1] = cc11001100_hook("this.modules[8][this.moduleCount - i - 1]", n, "assign") : 9 > i ? this.modules[8][15 - i - 1 + 1] = cc11001100_hook("this.modules[8][15 - i - 1 + 1]", n, "assign") : this.modules[8][15 - i - 1] = cc11001100_hook("this.modules[8][15 - i - 1]", n, "assign");
      }
      this.modules[this.moduleCount - 8][8] = cc11001100_hook("this.modules[this.moduleCount - 8][8]", !t, "assign");
    },
    mapData: function (t, e) {
      for (var r = cc11001100_hook("r", -1, "var-init"), o = cc11001100_hook("o", this.moduleCount - 1, "var-init"), i = cc11001100_hook("i", 7, "var-init"), n = cc11001100_hook("n", 0, "var-init"), a = cc11001100_hook("a", this.moduleCount - 1, "var-init"); a > 0; a -= cc11001100_hook("a", 2, "assign")) for (6 == a && a--;;) {
        for (var s = cc11001100_hook("s", 0, "var-init"); 2 > s; s++) if (null == this.modules[o][a - s]) {
          var h = cc11001100_hook("h", !1, "var-init");
          n < t.length && (h = cc11001100_hook("h", 1 == (1 & t[n] >>> i), "assign"));
          var u = cc11001100_hook("u", g.getMask(e, o, a - s), "var-init");
          u && (h = cc11001100_hook("h", !h, "assign")), this.modules[o][a - s] = cc11001100_hook("this.modules[o][a - s]", h, "assign"), i--, -1 == i && (n++, i = cc11001100_hook("i", 7, "assign"));
        }
        if (o += cc11001100_hook("o", r, "assign"), 0 > o || this.moduleCount <= o) {
          o -= cc11001100_hook("o", r, "assign"), r = cc11001100_hook("r", -r, "assign");
          break;
        }
      }
    }
  }, "assign"), e.PAD0 = cc11001100_hook("e.PAD0", 236, "assign"), e.PAD1 = cc11001100_hook("e.PAD1", 17, "assign"), e.createData = cc11001100_hook("e.createData", function (t, r, n) {
    for (var a = cc11001100_hook("a", o.getRSBlocks(t, r), "var-init"), s = cc11001100_hook("s", new i(), "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < n.length; h++) {
      var u = cc11001100_hook("u", n[h], "var-init");
      s.put(u.mode, 4), s.put(u.getLength(), g.getLengthInBits(u.mode, t)), u.write(s);
    }
    for (var l = cc11001100_hook("l", 0, "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < a.length; h++) l += cc11001100_hook("l", a[h].dataCount, "assign");
    if (s.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * l + ")");
    for (s.getLengthInBits() + 4 <= 8 * l && s.put(0, 4); 0 != s.getLengthInBits() % 8;) s.putBit(!1);
    for (; !(s.getLengthInBits() >= 8 * l) && (s.put(e.PAD0, 8), !(s.getLengthInBits() >= 8 * l));) s.put(e.PAD1, 8);
    return e.createBytes(s, a);
  }, "assign"), e.createBytes = cc11001100_hook("e.createBytes", function (t, e) {
    for (var o = cc11001100_hook("o", 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"), n = cc11001100_hook("n", 0, "var-init"), a = cc11001100_hook("a", new Array(e.length), "var-init"), s = cc11001100_hook("s", new Array(e.length), "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < e.length; h++) {
      var u = cc11001100_hook("u", e[h].dataCount, "var-init"),
        l = cc11001100_hook("l", e[h].totalCount - u, "var-init");
      i = cc11001100_hook("i", Math.max(i, u), "assign"), n = cc11001100_hook("n", Math.max(n, l), "assign"), a[h] = cc11001100_hook("a[h]", new Array(u), "assign");
      for (var f = cc11001100_hook("f", 0, "var-init"); f < a[h].length; f++) a[h][f] = cc11001100_hook("a[h][f]", 255 & t.buffer[f + o], "assign");
      o += cc11001100_hook("o", u, "assign");
      var d = cc11001100_hook("d", g.getErrorCorrectPolynomial(l), "var-init"),
        c = cc11001100_hook("c", new r(a[h], d.getLength() - 1), "var-init"),
        p = cc11001100_hook("p", c.mod(d), "var-init");
      s[h] = cc11001100_hook("s[h]", new Array(d.getLength() - 1), "assign");
      for (var f = cc11001100_hook("f", 0, "var-init"); f < s[h].length; f++) {
        var m = cc11001100_hook("m", f + p.getLength() - s[h].length, "var-init");
        s[h][f] = cc11001100_hook("s[h][f]", m >= 0 ? p.get(m) : 0, "assign");
      }
    }
    for (var v = cc11001100_hook("v", 0, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < e.length; f++) v += cc11001100_hook("v", e[f].totalCount, "assign");
    for (var _ = cc11001100_hook("_", new Array(v), "var-init"), C = cc11001100_hook("C", 0, "var-init"), f = cc11001100_hook("f", 0, "var-init"); i > f; f++) for (var h = cc11001100_hook("h", 0, "var-init"); h < e.length; h++) f < a[h].length && (_[C++] = cc11001100_hook("_[C++]", a[h][f], "assign"));
    for (var f = cc11001100_hook("f", 0, "var-init"); n > f; f++) for (var h = cc11001100_hook("h", 0, "var-init"); h < e.length; h++) f < s[h].length && (_[C++] = cc11001100_hook("_[C++]", s[h][f], "assign"));
    return _;
  }, "assign");
  for (var u = cc11001100_hook("u", {
      MODE_NUMBER: cc11001100_hook("MODE_NUMBER", 1, "object-key-init"),
      MODE_ALPHA_NUM: cc11001100_hook("MODE_ALPHA_NUM", 2, "object-key-init"),
      MODE_8BIT_BYTE: cc11001100_hook("MODE_8BIT_BYTE", 4, "object-key-init"),
      MODE_KANJI: cc11001100_hook("MODE_KANJI", 8, "object-key-init")
    }, "var-init"), l = cc11001100_hook("l", {
      L: cc11001100_hook("L", 1, "object-key-init"),
      M: cc11001100_hook("M", 0, "object-key-init"),
      Q: cc11001100_hook("Q", 3, "object-key-init"),
      H: cc11001100_hook("H", 2, "object-key-init")
    }, "var-init"), f = cc11001100_hook("f", {
      PATTERN000: cc11001100_hook("PATTERN000", 0, "object-key-init"),
      PATTERN001: cc11001100_hook("PATTERN001", 1, "object-key-init"),
      PATTERN010: cc11001100_hook("PATTERN010", 2, "object-key-init"),
      PATTERN011: cc11001100_hook("PATTERN011", 3, "object-key-init"),
      PATTERN100: cc11001100_hook("PATTERN100", 4, "object-key-init"),
      PATTERN101: cc11001100_hook("PATTERN101", 5, "object-key-init"),
      PATTERN110: cc11001100_hook("PATTERN110", 6, "object-key-init"),
      PATTERN111: cc11001100_hook("PATTERN111", 7, "object-key-init")
    }, "var-init"), g = cc11001100_hook("g", {
      PATTERN_POSITION_TABLE: cc11001100_hook("PATTERN_POSITION_TABLE", [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], "object-key-init"),
      G15: cc11001100_hook("G15", 1335, "object-key-init"),
      G18: cc11001100_hook("G18", 7973, "object-key-init"),
      G15_MASK: cc11001100_hook("G15_MASK", 21522, "object-key-init"),
      getBCHTypeInfo: function (t) {
        for (var e = cc11001100_hook("e", t << 10, "var-init"); g.getBCHDigit(e) - g.getBCHDigit(g.G15) >= 0;) e ^= cc11001100_hook("e", g.G15 << g.getBCHDigit(e) - g.getBCHDigit(g.G15), "assign");
        return (t << 10 | e) ^ g.G15_MASK;
      },
      getBCHTypeNumber: function (t) {
        for (var e = cc11001100_hook("e", t << 12, "var-init"); g.getBCHDigit(e) - g.getBCHDigit(g.G18) >= 0;) e ^= cc11001100_hook("e", g.G18 << g.getBCHDigit(e) - g.getBCHDigit(g.G18), "assign");
        return t << 12 | e;
      },
      getBCHDigit: function (t) {
        for (var e = cc11001100_hook("e", 0, "var-init"); 0 != t;) e++, t >>>= cc11001100_hook("t", 1, "assign");
        return e;
      },
      getPatternPosition: function (t) {
        return g.PATTERN_POSITION_TABLE[t - 1];
      },
      getMask: function (t, e, r) {
        switch (t) {
          case f.PATTERN000:
            return 0 == (e + r) % 2;
          case f.PATTERN001:
            return 0 == e % 2;
          case f.PATTERN010:
            return 0 == r % 3;
          case f.PATTERN011:
            return 0 == (e + r) % 3;
          case f.PATTERN100:
            return 0 == (Math.floor(e / 2) + Math.floor(r / 3)) % 2;
          case f.PATTERN101:
            return 0 == e * r % 2 + e * r % 3;
          case f.PATTERN110:
            return 0 == (e * r % 2 + e * r % 3) % 2;
          case f.PATTERN111:
            return 0 == (e * r % 3 + (e + r) % 2) % 2;
          default:
            throw new Error("bad maskPattern:" + t);
        }
      },
      getErrorCorrectPolynomial: function (t) {
        for (var e = cc11001100_hook("e", new r([1], 0), "var-init"), o = cc11001100_hook("o", 0, "var-init"); t > o; o++) e = cc11001100_hook("e", e.multiply(new r([1, d.gexp(o)], 0)), "assign");
        return e;
      },
      getLengthInBits: function (t, e) {
        if (e >= 1 && 10 > e) switch (t) {
          case u.MODE_NUMBER:
            return 10;
          case u.MODE_ALPHA_NUM:
            return 9;
          case u.MODE_8BIT_BYTE:
            return 8;
          case u.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + t);
        } else if (27 > e) switch (t) {
          case u.MODE_NUMBER:
            return 12;
          case u.MODE_ALPHA_NUM:
            return 11;
          case u.MODE_8BIT_BYTE:
            return 16;
          case u.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + t);
        } else {
          if (!(41 > e)) throw new Error("type:" + e);
          switch (t) {
            case u.MODE_NUMBER:
              return 14;
            case u.MODE_ALPHA_NUM:
              return 13;
            case u.MODE_8BIT_BYTE:
              return 16;
            case u.MODE_KANJI:
              return 12;
            default:
              throw new Error("mode:" + t);
          }
        }
      },
      getLostPoint: function (t) {
        for (var e = cc11001100_hook("e", t.getModuleCount(), "var-init"), r = cc11001100_hook("r", 0, "var-init"), o = cc11001100_hook("o", 0, "var-init"); e > o; o++) for (var i = cc11001100_hook("i", 0, "var-init"); e > i; i++) {
          for (var n = cc11001100_hook("n", 0, "var-init"), a = cc11001100_hook("a", t.isDark(o, i), "var-init"), s = cc11001100_hook("s", -1, "var-init"); 1 >= s; s++) if (!(0 > o + s || o + s >= e)) for (var h = cc11001100_hook("h", -1, "var-init"); 1 >= h; h++) 0 > i + h || i + h >= e || (0 != s || 0 != h) && a == t.isDark(o + s, i + h) && n++;
          n > 5 && (r += cc11001100_hook("r", 3 + n - 5, "assign"));
        }
        for (var o = cc11001100_hook("o", 0, "var-init"); e - 1 > o; o++) for (var i = cc11001100_hook("i", 0, "var-init"); e - 1 > i; i++) {
          var u = cc11001100_hook("u", 0, "var-init");
          t.isDark(o, i) && u++, t.isDark(o + 1, i) && u++, t.isDark(o, i + 1) && u++, t.isDark(o + 1, i + 1) && u++, (0 == u || 4 == u) && (r += cc11001100_hook("r", 3, "assign"));
        }
        for (var o = cc11001100_hook("o", 0, "var-init"); e > o; o++) for (var i = cc11001100_hook("i", 0, "var-init"); e - 6 > i; i++) t.isDark(o, i) && !t.isDark(o, i + 1) && t.isDark(o, i + 2) && t.isDark(o, i + 3) && t.isDark(o, i + 4) && !t.isDark(o, i + 5) && t.isDark(o, i + 6) && (r += cc11001100_hook("r", 40, "assign"));
        for (var i = cc11001100_hook("i", 0, "var-init"); e > i; i++) for (var o = cc11001100_hook("o", 0, "var-init"); e - 6 > o; o++) t.isDark(o, i) && !t.isDark(o + 1, i) && t.isDark(o + 2, i) && t.isDark(o + 3, i) && t.isDark(o + 4, i) && !t.isDark(o + 5, i) && t.isDark(o + 6, i) && (r += cc11001100_hook("r", 40, "assign"));
        for (var l = cc11001100_hook("l", 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"); e > i; i++) for (var o = cc11001100_hook("o", 0, "var-init"); e > o; o++) t.isDark(o, i) && l++;
        var f = cc11001100_hook("f", Math.abs(100 * l / e / e - 50) / 5, "var-init");
        return r += cc11001100_hook("r", 10 * f, "assign");
      }
    }, "var-init"), d = cc11001100_hook("d", {
      glog: function (t) {
        if (1 > t) throw new Error("glog(" + t + ")");
        return d.LOG_TABLE[t];
      },
      gexp: function (t) {
        for (; 0 > t;) t += cc11001100_hook("t", 255, "assign");
        for (; t >= 256;) t -= cc11001100_hook("t", 255, "assign");
        return d.EXP_TABLE[t];
      },
      EXP_TABLE: cc11001100_hook("EXP_TABLE", new Array(256), "object-key-init"),
      LOG_TABLE: cc11001100_hook("LOG_TABLE", new Array(256), "object-key-init")
    }, "var-init"), c = cc11001100_hook("c", 0, "var-init"); 8 > c; c++) d.EXP_TABLE[c] = cc11001100_hook("d.EXP_TABLE[c]", 1 << c, "assign");
  for (var c = cc11001100_hook("c", 8, "var-init"); 256 > c; c++) d.EXP_TABLE[c] = cc11001100_hook("d.EXP_TABLE[c]", d.EXP_TABLE[c - 4] ^ d.EXP_TABLE[c - 5] ^ d.EXP_TABLE[c - 6] ^ d.EXP_TABLE[c - 8], "assign");
  for (var c = cc11001100_hook("c", 0, "var-init"); 255 > c; c++) d.LOG_TABLE[d.EXP_TABLE[c]] = cc11001100_hook("d.LOG_TABLE[d.EXP_TABLE[c]]", c, "assign");
  r.prototype = cc11001100_hook("r.prototype", {
    get: function (t) {
      return this.num[t];
    },
    getLength: function () {
      return this.num.length;
    },
    multiply: function (t) {
      for (var e = cc11001100_hook("e", new Array(this.getLength() + t.getLength() - 1), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < this.getLength(); o++) for (var i = cc11001100_hook("i", 0, "var-init"); i < t.getLength(); i++) e[o + i] ^= cc11001100_hook("e[o + i]", d.gexp(d.glog(this.get(o)) + d.glog(t.get(i))), "assign");
      return new r(e, 0);
    },
    mod: function (t) {
      if (this.getLength() - t.getLength() < 0) return this;
      for (var e = cc11001100_hook("e", d.glog(this.get(0)) - d.glog(t.get(0)), "var-init"), o = cc11001100_hook("o", new Array(this.getLength()), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < this.getLength(); i++) o[i] = cc11001100_hook("o[i]", this.get(i), "assign");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < t.getLength(); i++) o[i] ^= cc11001100_hook("o[i]", d.gexp(d.glog(t.get(i)) + e), "assign");
      return new r(o, 0).mod(t);
    }
  }, "assign"), o.RS_BLOCK_TABLE = cc11001100_hook("o.RS_BLOCK_TABLE", [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], "assign"), o.getRSBlocks = cc11001100_hook("o.getRSBlocks", function (t, e) {
    var r = cc11001100_hook("r", o.getRsBlockTable(t, e), "var-init");
    if (void 0 == r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
    for (var i = cc11001100_hook("i", r.length / 3, "var-init"), n = cc11001100_hook("n", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); i > a; a++) for (var s = cc11001100_hook("s", r[3 * a + 0], "var-init"), h = cc11001100_hook("h", r[3 * a + 1], "var-init"), u = cc11001100_hook("u", r[3 * a + 2], "var-init"), l = cc11001100_hook("l", 0, "var-init"); s > l; l++) n.push(new o(h, u));
    return n;
  }, "assign"), o.getRsBlockTable = cc11001100_hook("o.getRsBlockTable", function (t, e) {
    switch (e) {
      case l.L:
        return o.RS_BLOCK_TABLE[4 * (t - 1) + 0];
      case l.M:
        return o.RS_BLOCK_TABLE[4 * (t - 1) + 1];
      case l.Q:
        return o.RS_BLOCK_TABLE[4 * (t - 1) + 2];
      case l.H:
        return o.RS_BLOCK_TABLE[4 * (t - 1) + 3];
      default:
        return;
    }
  }, "assign"), i.prototype = cc11001100_hook("i.prototype", {
    get: function (t) {
      var e = cc11001100_hook("e", Math.floor(t / 8), "var-init");
      return 1 == (1 & this.buffer[e] >>> 7 - t % 8);
    },
    put: function (t, e) {
      for (var r = cc11001100_hook("r", 0, "var-init"); e > r; r++) this.putBit(1 == (1 & t >>> e - r - 1));
    },
    getLengthInBits: function () {
      return this.length;
    },
    putBit: function (t) {
      var e = cc11001100_hook("e", Math.floor(this.length / 8), "var-init");
      this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= cc11001100_hook("this.buffer[e]", 128 >>> this.length % 8, "assign")), this.length++;
    }
  }, "assign");
  var p = cc11001100_hook("p", [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]], "var-init"),
    m = cc11001100_hook("m", function () {
      var t = function (t, e) {
        this._el = cc11001100_hook("this._el", t, "assign"), this._htOption = cc11001100_hook("this._htOption", e, "assign");
      };
      return t.prototype.draw = cc11001100_hook("t.prototype.draw", function (t) {
        function e(t, e) {
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("e", e, "function-parameter");
          var r = cc11001100_hook("r", document.createElementNS("http://www.w3.org/2000/svg", t), "var-init");
          for (var o in e) e.hasOwnProperty(o) && r.setAttribute(o, e[o]);
          return r;
        }
        var r = cc11001100_hook("r", this._htOption, "var-init"),
          o = cc11001100_hook("o", this._el, "var-init"),
          i = cc11001100_hook("i", t.getModuleCount(), "var-init");
        Math.floor(r.width / i), Math.floor(r.height / i), this.clear();
        var n = cc11001100_hook("n", e("svg", {
          viewBox: cc11001100_hook("viewBox", "0 0 " + String(i) + " " + String(i), "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init"),
          fill: cc11001100_hook("fill", r.colorLight, "object-key-init")
        }), "var-init");
        n.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), o.appendChild(n), n.appendChild(e("rect", {
          fill: cc11001100_hook("fill", r.colorDark, "object-key-init"),
          width: cc11001100_hook("width", "1", "object-key-init"),
          height: cc11001100_hook("height", "1", "object-key-init"),
          id: cc11001100_hook("id", "template", "object-key-init")
        }));
        for (var a = cc11001100_hook("a", 0, "var-init"); i > a; a++) for (var s = cc11001100_hook("s", 0, "var-init"); i > s; s++) if (t.isDark(a, s)) {
          var h = cc11001100_hook("h", e("use", {
            x: cc11001100_hook("x", String(a), "object-key-init"),
            y: cc11001100_hook("y", String(s), "object-key-init")
          }), "var-init");
          h.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), n.appendChild(h);
        }
      }, "assign"), t.prototype.clear = cc11001100_hook("t.prototype.clear", function () {
        for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild);
      }, "assign"), t;
    }(), "var-init"),
    v = cc11001100_hook("v", "svg" === document.documentElement.tagName.toLowerCase(), "var-init"),
    _ = cc11001100_hook("_", v ? m : n() ? function () {
      function t() {
        this._elImage.src = cc11001100_hook("this._elImage.src", this._elCanvas.toDataURL("image/png"), "assign"), this._elImage.style.display = cc11001100_hook("this._elImage.style.display", "block", "assign"), this._elCanvas.style.display = cc11001100_hook("this._elCanvas.style.display", "none", "assign");
      }
      function e(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        var r = cc11001100_hook("r", this, "var-init");
        if (r._fFail = cc11001100_hook("r._fFail", e, "assign"), r._fSuccess = cc11001100_hook("r._fSuccess", t, "assign"), null === r._bSupportDataURI) {
          var o = cc11001100_hook("o", document.createElement("img"), "var-init"),
            i = function () {
              r._bSupportDataURI = cc11001100_hook("r._bSupportDataURI", !1, "assign"), r._fFail && _fFail.call(r);
            },
            n = function () {
              r._bSupportDataURI = cc11001100_hook("r._bSupportDataURI", !0, "assign"), r._fSuccess && r._fSuccess.call(r);
            };
          return o.onabort = cc11001100_hook("o.onabort", i, "assign"), o.onerror = cc11001100_hook("o.onerror", i, "assign"), o.onload = cc11001100_hook("o.onload", n, "assign"), void (o.src = cc11001100_hook("o.src", "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", "assign"));
        }
        r._bSupportDataURI === !0 && r._fSuccess ? r._fSuccess.call(r) : r._bSupportDataURI === !1 && r._fFail && r._fFail.call(r);
      }
      if (this._android && this._android <= 2.1) {
        var r = cc11001100_hook("r", 1 / window.devicePixelRatio, "var-init"),
          o = cc11001100_hook("o", CanvasRenderingContext2D.prototype.drawImage, "var-init");
        CanvasRenderingContext2D.prototype.drawImage = cc11001100_hook("CanvasRenderingContext2D.prototype.drawImage", function (t, e, i, n, a, s, h, u) {
          if ("nodeName" in t && /img/i.test(t.nodeName)) for (var l = cc11001100_hook("l", arguments.length - 1, "var-init"); l >= 1; l--) arguments[l] = cc11001100_hook("arguments[l]", arguments[l] * r, "assign");else "undefined" == typeof u && (arguments[1] *= cc11001100_hook("arguments[1]", r, "assign"), arguments[2] *= cc11001100_hook("arguments[2]", r, "assign"), arguments[3] *= cc11001100_hook("arguments[3]", r, "assign"), arguments[4] *= cc11001100_hook("arguments[4]", r, "assign"));
          o.apply(this, arguments);
        }, "assign");
      }
      var i = function (t, e) {
        this._bIsPainted = cc11001100_hook("this._bIsPainted", !1, "assign"), this._android = cc11001100_hook("this._android", a(), "assign"), this._htOption = cc11001100_hook("this._htOption", e, "assign"), this._elCanvas = cc11001100_hook("this._elCanvas", document.createElement("canvas"), "assign"), this._elCanvas.width = cc11001100_hook("this._elCanvas.width", e.width, "assign"), this._elCanvas.height = cc11001100_hook("this._elCanvas.height", e.height, "assign"), t.appendChild(this._elCanvas), this._el = cc11001100_hook("this._el", t, "assign"), this._oContext = cc11001100_hook("this._oContext", this._elCanvas.getContext("2d"), "assign"), this._bIsPainted = cc11001100_hook("this._bIsPainted", !1, "assign"), this._elImage = cc11001100_hook("this._elImage", document.createElement("img"), "assign"), this._elImage.style.display = cc11001100_hook("this._elImage.style.display", "none", "assign"), this._el.appendChild(this._elImage), this._bSupportDataURI = cc11001100_hook("this._bSupportDataURI", null, "assign");
      };
      return i.prototype.draw = cc11001100_hook("i.prototype.draw", function (t) {
        var e = cc11001100_hook("e", this._elImage, "var-init"),
          r = cc11001100_hook("r", this._oContext, "var-init"),
          o = cc11001100_hook("o", this._htOption, "var-init"),
          i = cc11001100_hook("i", t.getModuleCount(), "var-init"),
          n = cc11001100_hook("n", o.width / i, "var-init"),
          a = cc11001100_hook("a", o.height / i, "var-init"),
          s = cc11001100_hook("s", Math.round(n), "var-init"),
          h = cc11001100_hook("h", Math.round(a), "var-init");
        e.style.display = cc11001100_hook("e.style.display", "none", "assign"), this.clear();
        for (var u = cc11001100_hook("u", 0, "var-init"); i > u; u++) for (var l = cc11001100_hook("l", 0, "var-init"); i > l; l++) {
          var f = cc11001100_hook("f", t.isDark(u, l), "var-init"),
            g = cc11001100_hook("g", l * n, "var-init"),
            d = cc11001100_hook("d", u * a, "var-init");
          r.strokeStyle = cc11001100_hook("r.strokeStyle", f ? o.colorDark : o.colorLight, "assign"), r.lineWidth = cc11001100_hook("r.lineWidth", 1, "assign"), r.fillStyle = cc11001100_hook("r.fillStyle", f ? o.colorDark : o.colorLight, "assign"), r.fillRect(g, d, n, a), r.strokeRect(Math.floor(g) + .5, Math.floor(d) + .5, s, h), r.strokeRect(Math.ceil(g) - .5, Math.ceil(d) - .5, s, h);
        }
        this._bIsPainted = cc11001100_hook("this._bIsPainted", !0, "assign");
      }, "assign"), i.prototype.makeImage = cc11001100_hook("i.prototype.makeImage", function () {
        this._bIsPainted && e.call(this, t);
      }, "assign"), i.prototype.isPainted = cc11001100_hook("i.prototype.isPainted", function () {
        return this._bIsPainted;
      }, "assign"), i.prototype.clear = cc11001100_hook("i.prototype.clear", function () {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = cc11001100_hook("this._bIsPainted", !1, "assign");
      }, "assign"), i.prototype.round = cc11001100_hook("i.prototype.round", function (t) {
        return t ? Math.floor(1e3 * t) / 1e3 : t;
      }, "assign"), i;
    }() : function () {
      var t = function (t, e) {
        this._el = cc11001100_hook("this._el", t, "assign"), this._htOption = cc11001100_hook("this._htOption", e, "assign");
      };
      return t.prototype.draw = cc11001100_hook("t.prototype.draw", function (t) {
        for (var e = cc11001100_hook("e", this._htOption, "var-init"), r = cc11001100_hook("r", this._el, "var-init"), o = cc11001100_hook("o", t.getModuleCount(), "var-init"), i = cc11001100_hook("i", Math.floor(e.width / o), "var-init"), n = cc11001100_hook("n", Math.floor(e.height / o), "var-init"), a = cc11001100_hook("a", ['<table style="border:0;border-collapse:collapse;">'], "var-init"), s = cc11001100_hook("s", 0, "var-init"); o > s; s++) {
          a.push("<tr>");
          for (var h = cc11001100_hook("h", 0, "var-init"); o > h; h++) a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + i + "px;height:" + n + "px;background-color:" + (t.isDark(s, h) ? e.colorDark : e.colorLight) + ';"></td>');
          a.push("</tr>");
        }
        a.push("</table>"), r.innerHTML = cc11001100_hook("r.innerHTML", a.join(""), "assign");
        var u = cc11001100_hook("u", r.childNodes[0], "var-init"),
          l = cc11001100_hook("l", (e.width - u.offsetWidth) / 2, "var-init"),
          f = cc11001100_hook("f", (e.height - u.offsetHeight) / 2, "var-init");
        l > 0 && f > 0 && (u.style.margin = cc11001100_hook("u.style.margin", f + "px " + l + "px", "assign"));
      }, "assign"), t.prototype.clear = cc11001100_hook("t.prototype.clear", function () {
        this._el.innerHTML = cc11001100_hook("this._el.innerHTML", "", "assign");
      }, "assign"), t;
    }(), "var-init");
  QRCode = cc11001100_hook("QRCode", function (t, e) {
    if (this._htOption = cc11001100_hook("this._htOption", {
      width: cc11001100_hook("width", 256, "object-key-init"),
      height: cc11001100_hook("height", 256, "object-key-init"),
      typeNumber: cc11001100_hook("typeNumber", 4, "object-key-init"),
      colorDark: cc11001100_hook("colorDark", "#000000", "object-key-init"),
      colorLight: cc11001100_hook("colorLight", "#ffffff", "object-key-init"),
      correctLevel: cc11001100_hook("correctLevel", l.H, "object-key-init")
    }, "assign"), "string" == typeof e && (e = cc11001100_hook("e", {
      text: cc11001100_hook("text", e, "object-key-init")
    }, "assign")), e) for (var r in e) this._htOption[r] = cc11001100_hook("this._htOption[r]", e[r], "assign");
    "string" == typeof t && (t = cc11001100_hook("t", document.getElementById(t), "assign")), this._android = cc11001100_hook("this._android", a(), "assign"), this._el = cc11001100_hook("this._el", t, "assign"), this._oQRCode = cc11001100_hook("this._oQRCode", null, "assign"), this._oDrawing = cc11001100_hook("this._oDrawing", new _(this._el, this._htOption), "assign"), this._htOption.text && this.makeCode(this._htOption.text);
  }, "assign"), QRCode.prototype.makeCode = cc11001100_hook("QRCode.prototype.makeCode", function (t) {
    this._oQRCode = cc11001100_hook("this._oQRCode", new e(s(t, this._htOption.correctLevel), this._htOption.correctLevel), "assign"), this._oQRCode.addData(t), this._oQRCode.make(), this._el.title = cc11001100_hook("this._el.title", t, "assign"), this._oDrawing.draw(this._oQRCode), this.makeImage();
  }, "assign"), QRCode.prototype.makeImage = cc11001100_hook("QRCode.prototype.makeImage", function () {
    "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage();
  }, "assign"), QRCode.prototype.clear = cc11001100_hook("QRCode.prototype.clear", function () {
    this._oDrawing.clear();
  }, "assign"), QRCode.CorrectLevel = cc11001100_hook("QRCode.CorrectLevel", l, "assign");
}();