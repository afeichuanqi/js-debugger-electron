var QRCode;
!function () {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.mode = cc11001100_hook("this.mode", c.MODE_8BIT_BYTE, "assign"), this.data = cc11001100_hook("this.data", a, "assign"), this.parsedData = cc11001100_hook("this.parsedData", [], "assign");
    for (var b = cc11001100_hook("b", [], "var-init"), d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", this.data.length, "var-init"); e > d; d++) {
      var f = cc11001100_hook("f", this.data.charCodeAt(d), "var-init");
      f > 65536 ? (b[0] = cc11001100_hook("b[0]", 240 | (1835008 & f) >>> 18, "assign"), b[1] = cc11001100_hook("b[1]", 128 | (258048 & f) >>> 12, "assign"), b[2] = cc11001100_hook("b[2]", 128 | (4032 & f) >>> 6, "assign"), b[3] = cc11001100_hook("b[3]", 128 | 63 & f, "assign")) : f > 2048 ? (b[0] = cc11001100_hook("b[0]", 224 | (61440 & f) >>> 12, "assign"), b[1] = cc11001100_hook("b[1]", 128 | (4032 & f) >>> 6, "assign"), b[2] = cc11001100_hook("b[2]", 128 | 63 & f, "assign")) : f > 128 ? (b[0] = cc11001100_hook("b[0]", 192 | (1984 & f) >>> 6, "assign"), b[1] = cc11001100_hook("b[1]", 128 | 63 & f, "assign")) : b[0] = cc11001100_hook("b[0]", f, "assign"), this.parsedData = cc11001100_hook("this.parsedData", this.parsedData.concat(b), "assign");
    }
    this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
  }
  function b(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.typeNumber = cc11001100_hook("this.typeNumber", a, "assign"), this.errorCorrectLevel = cc11001100_hook("this.errorCorrectLevel", b, "assign"), this.modules = cc11001100_hook("this.modules", null, "assign"), this.moduleCount = cc11001100_hook("this.moduleCount", 0, "assign"), this.dataCache = cc11001100_hook("this.dataCache", null, "assign"), this.dataList = cc11001100_hook("this.dataList", [], "assign");
  }
  function i(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (void 0 == a.length) throw new Error(a.length + "/" + b);
    for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length && 0 == a[c];) c++;
    this.num = cc11001100_hook("this.num", new Array(a.length - c + b), "assign");
    for (var d = cc11001100_hook("d", 0, "var-init"); d < a.length - c; d++) this.num[d] = cc11001100_hook("this.num[d]", a[d + c], "assign");
  }
  function j(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.totalCount = cc11001100_hook("this.totalCount", a, "assign"), this.dataCount = cc11001100_hook("this.dataCount", b, "assign");
  }
  function k() {
    this.buffer = cc11001100_hook("this.buffer", [], "assign"), this.length = cc11001100_hook("this.length", 0, "assign");
  }
  function m() {
    return "undefined" != typeof CanvasRenderingContext2D;
  }
  function n() {
    var a = cc11001100_hook("a", !1, "var-init"),
      b = cc11001100_hook("b", navigator.userAgent, "var-init");
    return /android/i.test(b) && (a = cc11001100_hook("a", !0, "assign"), aMat = cc11001100_hook("aMat", b.toString().match(/android ([0-9]\.[0-9])/i), "assign"), aMat && aMat[1] && (a = cc11001100_hook("a", parseFloat(aMat[1]), "assign"))), a;
  }
  function r(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", 1, "var-init"), e = cc11001100_hook("e", s(a), "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", l.length, "var-init"); g >= f; f++) {
      var h = cc11001100_hook("h", 0, "var-init");
      switch (b) {
        case d.L:
          h = cc11001100_hook("h", l[f][0], "assign");
          break;
        case d.M:
          h = cc11001100_hook("h", l[f][1], "assign");
          break;
        case d.Q:
          h = cc11001100_hook("h", l[f][2], "assign");
          break;
        case d.H:
          h = cc11001100_hook("h", l[f][3], "assign");
      }
      if (h >= e) break;
      c++;
    }
    if (c > l.length) throw new Error("Too long data");
    return c;
  }
  function s(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a"), "var-init");
    return b.length + (b.length != a ? 3 : 0);
  }
  a.prototype = cc11001100_hook("a.prototype", {
    getLength: function () {
      return this.parsedData.length;
    },
    write: function (a) {
      for (var b = cc11001100_hook("b", 0, "var-init"), c = cc11001100_hook("c", this.parsedData.length, "var-init"); c > b; b++) a.put(this.parsedData[b], 8);
    }
  }, "assign"), b.prototype = cc11001100_hook("b.prototype", {
    addData: function (b) {
      var c = cc11001100_hook("c", new a(b), "var-init");
      this.dataList.push(c), this.dataCache = cc11001100_hook("this.dataCache", null, "assign");
    },
    isDark: function (a, b) {
      if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw new Error(a + "," + b);
      return this.modules[a][b];
    },
    getModuleCount: function () {
      return this.moduleCount;
    },
    make: function () {
      this.makeImpl(!1, this.getBestMaskPattern());
    },
    makeImpl: function (a, c) {
      this.moduleCount = cc11001100_hook("this.moduleCount", 4 * this.typeNumber + 17, "assign"), this.modules = cc11001100_hook("this.modules", new Array(this.moduleCount), "assign");
      for (var d = cc11001100_hook("d", 0, "var-init"); d < this.moduleCount; d++) {
        this.modules[d] = cc11001100_hook("this.modules[d]", new Array(this.moduleCount), "assign");
        for (var e = cc11001100_hook("e", 0, "var-init"); e < this.moduleCount; e++) this.modules[d][e] = cc11001100_hook("this.modules[d][e]", null, "assign");
      }
      this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, c), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = cc11001100_hook("this.dataCache", b.createData(this.typeNumber, this.errorCorrectLevel, this.dataList), "assign")), this.mapData(this.dataCache, c);
    },
    setupPositionProbePattern: function (a, b) {
      for (var c = cc11001100_hook("c", -1, "var-init"); 7 >= c; c++) if (!(-1 >= a + c || this.moduleCount <= a + c)) for (var d = cc11001100_hook("d", -1, "var-init"); 7 >= d; d++) -1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = cc11001100_hook("this.modules[a + c][b + d]", c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? !0 : !1, "assign"));
    },
    getBestMaskPattern: function () {
      for (var a = cc11001100_hook("a", 0, "var-init"), b = cc11001100_hook("b", 0, "var-init"), c = cc11001100_hook("c", 0, "var-init"); 8 > c; c++) {
        this.makeImpl(!0, c);
        var d = cc11001100_hook("d", f.getLostPoint(this), "var-init");
        (0 == c || a > d) && (a = cc11001100_hook("a", d, "assign"), b = cc11001100_hook("b", c, "assign"));
      }
      return b;
    },
    createMovieClip: function (a, b, c) {
      var d = cc11001100_hook("d", a.createEmptyMovieClip(b, c), "var-init"),
        e = cc11001100_hook("e", 1, "var-init");
      this.make();
      for (var f = cc11001100_hook("f", 0, "var-init"); f < this.modules.length; f++) for (var g = cc11001100_hook("g", f * e, "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < this.modules[f].length; h++) {
        var i = cc11001100_hook("i", h * e, "var-init"),
          j = cc11001100_hook("j", this.modules[f][h], "var-init");
        j && (d.beginFill(0, 100), d.moveTo(i, g), d.lineTo(i + e, g), d.lineTo(i + e, g + e), d.lineTo(i, g + e), d.endFill());
      }
      return d;
    },
    setupTimingPattern: function () {
      for (var a = cc11001100_hook("a", 8, "var-init"); a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = cc11001100_hook("this.modules[a][6]", 0 == a % 2, "assign"));
      for (var b = cc11001100_hook("b", 8, "var-init"); b < this.moduleCount - 8; b++) null == this.modules[6][b] && (this.modules[6][b] = cc11001100_hook("this.modules[6][b]", 0 == b % 2, "assign"));
    },
    setupPositionAdjustPattern: function () {
      for (var a = cc11001100_hook("a", f.getPatternPosition(this.typeNumber), "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) {
        var d = cc11001100_hook("d", a[b], "var-init"),
          e = cc11001100_hook("e", a[c], "var-init");
        if (null == this.modules[d][e]) for (var g = cc11001100_hook("g", -2, "var-init"); 2 >= g; g++) for (var h = cc11001100_hook("h", -2, "var-init"); 2 >= h; h++) this.modules[d + g][e + h] = cc11001100_hook("this.modules[d + g][e + h]", -2 == g || 2 == g || -2 == h || 2 == h || 0 == g && 0 == h ? !0 : !1, "assign");
      }
    },
    setupTypeNumber: function (a) {
      for (var b = cc11001100_hook("b", f.getBCHTypeNumber(this.typeNumber), "var-init"), c = cc11001100_hook("c", 0, "var-init"); 18 > c; c++) {
        var d = cc11001100_hook("d", !a && 1 == (1 & b >> c), "var-init");
        this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = cc11001100_hook("this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3]", d, "assign");
      }
      for (var c = cc11001100_hook("c", 0, "var-init"); 18 > c; c++) {
        var d = cc11001100_hook("d", !a && 1 == (1 & b >> c), "var-init");
        this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = cc11001100_hook("this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)]", d, "assign");
      }
    },
    setupTypeInfo: function (a, b) {
      for (var c = cc11001100_hook("c", this.errorCorrectLevel << 3 | b, "var-init"), d = cc11001100_hook("d", f.getBCHTypeInfo(c), "var-init"), e = cc11001100_hook("e", 0, "var-init"); 15 > e; e++) {
        var g = cc11001100_hook("g", !a && 1 == (1 & d >> e), "var-init");
        6 > e ? this.modules[e][8] = cc11001100_hook("this.modules[e][8]", g, "assign") : 8 > e ? this.modules[e + 1][8] = cc11001100_hook("this.modules[e + 1][8]", g, "assign") : this.modules[this.moduleCount - 15 + e][8] = cc11001100_hook("this.modules[this.moduleCount - 15 + e][8]", g, "assign");
      }
      for (var e = cc11001100_hook("e", 0, "var-init"); 15 > e; e++) {
        var g = cc11001100_hook("g", !a && 1 == (1 & d >> e), "var-init");
        8 > e ? this.modules[8][this.moduleCount - e - 1] = cc11001100_hook("this.modules[8][this.moduleCount - e - 1]", g, "assign") : 9 > e ? this.modules[8][15 - e - 1 + 1] = cc11001100_hook("this.modules[8][15 - e - 1 + 1]", g, "assign") : this.modules[8][15 - e - 1] = cc11001100_hook("this.modules[8][15 - e - 1]", g, "assign");
      }
      this.modules[this.moduleCount - 8][8] = cc11001100_hook("this.modules[this.moduleCount - 8][8]", !a, "assign");
    },
    mapData: function (a, b) {
      for (var c = cc11001100_hook("c", -1, "var-init"), d = cc11001100_hook("d", this.moduleCount - 1, "var-init"), e = cc11001100_hook("e", 7, "var-init"), g = cc11001100_hook("g", 0, "var-init"), h = cc11001100_hook("h", this.moduleCount - 1, "var-init"); h > 0; h -= cc11001100_hook("h", 2, "assign")) for (6 == h && h--;;) {
        for (var i = cc11001100_hook("i", 0, "var-init"); 2 > i; i++) if (null == this.modules[d][h - i]) {
          var j = cc11001100_hook("j", !1, "var-init");
          g < a.length && (j = cc11001100_hook("j", 1 == (1 & a[g] >>> e), "assign"));
          var k = cc11001100_hook("k", f.getMask(b, d, h - i), "var-init");
          k && (j = cc11001100_hook("j", !j, "assign")), this.modules[d][h - i] = cc11001100_hook("this.modules[d][h - i]", j, "assign"), e--, -1 == e && (g++, e = cc11001100_hook("e", 7, "assign"));
        }
        if (d += cc11001100_hook("d", c, "assign"), 0 > d || this.moduleCount <= d) {
          d -= cc11001100_hook("d", c, "assign"), c = cc11001100_hook("c", -c, "assign");
          break;
        }
      }
    }
  }, "assign"), b.PAD0 = cc11001100_hook("b.PAD0", 236, "assign"), b.PAD1 = cc11001100_hook("b.PAD1", 17, "assign"), b.createData = cc11001100_hook("b.createData", function (a, c, d) {
    for (var e = cc11001100_hook("e", j.getRSBlocks(a, c), "var-init"), g = cc11001100_hook("g", new k(), "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < d.length; h++) {
      var i = cc11001100_hook("i", d[h], "var-init");
      g.put(i.mode, 4), g.put(i.getLength(), f.getLengthInBits(i.mode, a)), i.write(g);
    }
    for (var l = cc11001100_hook("l", 0, "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < e.length; h++) l += cc11001100_hook("l", e[h].dataCount, "assign");
    if (g.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + g.getLengthInBits() + ">" + 8 * l + ")");
    for (g.getLengthInBits() + 4 <= 8 * l && g.put(0, 4); 0 != g.getLengthInBits() % 8;) g.putBit(!1);
    for (;;) {
      if (g.getLengthInBits() >= 8 * l) break;
      if (g.put(b.PAD0, 8), g.getLengthInBits() >= 8 * l) break;
      g.put(b.PAD1, 8);
    }
    return b.createBytes(g, e);
  }, "assign"), b.createBytes = cc11001100_hook("b.createBytes", function (a, b) {
    for (var c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", 0, "var-init"), g = cc11001100_hook("g", new Array(b.length), "var-init"), h = cc11001100_hook("h", new Array(b.length), "var-init"), j = cc11001100_hook("j", 0, "var-init"); j < b.length; j++) {
      var k = cc11001100_hook("k", b[j].dataCount, "var-init"),
        l = cc11001100_hook("l", b[j].totalCount - k, "var-init");
      d = cc11001100_hook("d", Math.max(d, k), "assign"), e = cc11001100_hook("e", Math.max(e, l), "assign"), g[j] = cc11001100_hook("g[j]", new Array(k), "assign");
      for (var m = cc11001100_hook("m", 0, "var-init"); m < g[j].length; m++) g[j][m] = cc11001100_hook("g[j][m]", 255 & a.buffer[m + c], "assign");
      c += cc11001100_hook("c", k, "assign");
      var n = cc11001100_hook("n", f.getErrorCorrectPolynomial(l), "var-init"),
        o = cc11001100_hook("o", new i(g[j], n.getLength() - 1), "var-init"),
        p = cc11001100_hook("p", o.mod(n), "var-init");
      h[j] = cc11001100_hook("h[j]", new Array(n.getLength() - 1), "assign");
      for (var m = cc11001100_hook("m", 0, "var-init"); m < h[j].length; m++) {
        var q = cc11001100_hook("q", m + p.getLength() - h[j].length, "var-init");
        h[j][m] = cc11001100_hook("h[j][m]", q >= 0 ? p.get(q) : 0, "assign");
      }
    }
    for (var r = cc11001100_hook("r", 0, "var-init"), m = cc11001100_hook("m", 0, "var-init"); m < b.length; m++) r += cc11001100_hook("r", b[m].totalCount, "assign");
    for (var s = cc11001100_hook("s", new Array(r), "var-init"), t = cc11001100_hook("t", 0, "var-init"), m = cc11001100_hook("m", 0, "var-init"); d > m; m++) for (var j = cc11001100_hook("j", 0, "var-init"); j < b.length; j++) m < g[j].length && (s[t++] = cc11001100_hook("s[t++]", g[j][m], "assign"));
    for (var m = cc11001100_hook("m", 0, "var-init"); e > m; m++) for (var j = cc11001100_hook("j", 0, "var-init"); j < b.length; j++) m < h[j].length && (s[t++] = cc11001100_hook("s[t++]", h[j][m], "assign"));
    return s;
  }, "assign");
  for (var c = cc11001100_hook("c", {
      MODE_NUMBER: cc11001100_hook("MODE_NUMBER", 1, "object-key-init"),
      MODE_ALPHA_NUM: cc11001100_hook("MODE_ALPHA_NUM", 2, "object-key-init"),
      MODE_8BIT_BYTE: cc11001100_hook("MODE_8BIT_BYTE", 4, "object-key-init"),
      MODE_KANJI: cc11001100_hook("MODE_KANJI", 8, "object-key-init")
    }, "var-init"), d = cc11001100_hook("d", {
      L: cc11001100_hook("L", 1, "object-key-init"),
      M: cc11001100_hook("M", 0, "object-key-init"),
      Q: cc11001100_hook("Q", 3, "object-key-init"),
      H: cc11001100_hook("H", 2, "object-key-init")
    }, "var-init"), e = cc11001100_hook("e", {
      PATTERN000: cc11001100_hook("PATTERN000", 0, "object-key-init"),
      PATTERN001: cc11001100_hook("PATTERN001", 1, "object-key-init"),
      PATTERN010: cc11001100_hook("PATTERN010", 2, "object-key-init"),
      PATTERN011: cc11001100_hook("PATTERN011", 3, "object-key-init"),
      PATTERN100: cc11001100_hook("PATTERN100", 4, "object-key-init"),
      PATTERN101: cc11001100_hook("PATTERN101", 5, "object-key-init"),
      PATTERN110: cc11001100_hook("PATTERN110", 6, "object-key-init"),
      PATTERN111: cc11001100_hook("PATTERN111", 7, "object-key-init")
    }, "var-init"), f = cc11001100_hook("f", {
      PATTERN_POSITION_TABLE: cc11001100_hook("PATTERN_POSITION_TABLE", [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], "object-key-init"),
      G15: cc11001100_hook("G15", 1335, "object-key-init"),
      G18: cc11001100_hook("G18", 7973, "object-key-init"),
      G15_MASK: cc11001100_hook("G15_MASK", 21522, "object-key-init"),
      getBCHTypeInfo: function (a) {
        for (var b = cc11001100_hook("b", a << 10, "var-init"); f.getBCHDigit(b) - f.getBCHDigit(f.G15) >= 0;) b ^= cc11001100_hook("b", f.G15 << f.getBCHDigit(b) - f.getBCHDigit(f.G15), "assign");
        return (a << 10 | b) ^ f.G15_MASK;
      },
      getBCHTypeNumber: function (a) {
        for (var b = cc11001100_hook("b", a << 12, "var-init"); f.getBCHDigit(b) - f.getBCHDigit(f.G18) >= 0;) b ^= cc11001100_hook("b", f.G18 << f.getBCHDigit(b) - f.getBCHDigit(f.G18), "assign");
        return a << 12 | b;
      },
      getBCHDigit: function (a) {
        for (var b = cc11001100_hook("b", 0, "var-init"); 0 != a;) b++, a >>>= cc11001100_hook("a", 1, "assign");
        return b;
      },
      getPatternPosition: function (a) {
        return f.PATTERN_POSITION_TABLE[a - 1];
      },
      getMask: function (a, b, c) {
        switch (a) {
          case e.PATTERN000:
            return 0 == (b + c) % 2;
          case e.PATTERN001:
            return 0 == b % 2;
          case e.PATTERN010:
            return 0 == c % 3;
          case e.PATTERN011:
            return 0 == (b + c) % 3;
          case e.PATTERN100:
            return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;
          case e.PATTERN101:
            return 0 == b * c % 2 + b * c % 3;
          case e.PATTERN110:
            return 0 == (b * c % 2 + b * c % 3) % 2;
          case e.PATTERN111:
            return 0 == (b * c % 3 + (b + c) % 2) % 2;
          default:
            throw new Error("bad maskPattern:" + a);
        }
      },
      getErrorCorrectPolynomial: function (a) {
        for (var b = cc11001100_hook("b", new i([1], 0), "var-init"), c = cc11001100_hook("c", 0, "var-init"); a > c; c++) b = cc11001100_hook("b", b.multiply(new i([1, g.gexp(c)], 0)), "assign");
        return b;
      },
      getLengthInBits: function (a, b) {
        if (b >= 1 && 10 > b) switch (a) {
          case c.MODE_NUMBER:
            return 10;
          case c.MODE_ALPHA_NUM:
            return 9;
          case c.MODE_8BIT_BYTE:
            return 8;
          case c.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + a);
        } else if (27 > b) switch (a) {
          case c.MODE_NUMBER:
            return 12;
          case c.MODE_ALPHA_NUM:
            return 11;
          case c.MODE_8BIT_BYTE:
            return 16;
          case c.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + a);
        } else {
          if (!(41 > b)) throw new Error("type:" + b);
          switch (a) {
            case c.MODE_NUMBER:
              return 14;
            case c.MODE_ALPHA_NUM:
              return 13;
            case c.MODE_8BIT_BYTE:
              return 16;
            case c.MODE_KANJI:
              return 12;
            default:
              throw new Error("mode:" + a);
          }
        }
      },
      getLostPoint: function (a) {
        for (var b = cc11001100_hook("b", a.getModuleCount(), "var-init"), c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", 0, "var-init"); b > d; d++) for (var e = cc11001100_hook("e", 0, "var-init"); b > e; e++) {
          for (var f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", a.isDark(d, e), "var-init"), h = cc11001100_hook("h", -1, "var-init"); 1 >= h; h++) if (!(0 > d + h || d + h >= b)) for (var i = cc11001100_hook("i", -1, "var-init"); 1 >= i; i++) 0 > e + i || e + i >= b || (0 != h || 0 != i) && g == a.isDark(d + h, e + i) && f++;
          f > 5 && (c += cc11001100_hook("c", 3 + f - 5, "assign"));
        }
        for (var d = cc11001100_hook("d", 0, "var-init"); b - 1 > d; d++) for (var e = cc11001100_hook("e", 0, "var-init"); b - 1 > e; e++) {
          var j = cc11001100_hook("j", 0, "var-init");
          a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, (0 == j || 4 == j) && (c += cc11001100_hook("c", 3, "assign"));
        }
        for (var d = cc11001100_hook("d", 0, "var-init"); b > d; d++) for (var e = cc11001100_hook("e", 0, "var-init"); b - 6 > e; e++) a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += cc11001100_hook("c", 40, "assign"));
        for (var e = cc11001100_hook("e", 0, "var-init"); b > e; e++) for (var d = cc11001100_hook("d", 0, "var-init"); b - 6 > d; d++) a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += cc11001100_hook("c", 40, "assign"));
        for (var k = cc11001100_hook("k", 0, "var-init"), e = cc11001100_hook("e", 0, "var-init"); b > e; e++) for (var d = cc11001100_hook("d", 0, "var-init"); b > d; d++) a.isDark(d, e) && k++;
        var l = cc11001100_hook("l", Math.abs(100 * k / b / b - 50) / 5, "var-init");
        return c += cc11001100_hook("c", 10 * l, "assign");
      }
    }, "var-init"), g = cc11001100_hook("g", {
      glog: function (a) {
        if (1 > a) throw new Error("glog(" + a + ")");
        return g.LOG_TABLE[a];
      },
      gexp: function (a) {
        for (; 0 > a;) a += cc11001100_hook("a", 255, "assign");
        for (; a >= 256;) a -= cc11001100_hook("a", 255, "assign");
        return g.EXP_TABLE[a];
      },
      EXP_TABLE: cc11001100_hook("EXP_TABLE", new Array(256), "object-key-init"),
      LOG_TABLE: cc11001100_hook("LOG_TABLE", new Array(256), "object-key-init")
    }, "var-init"), h = cc11001100_hook("h", 0, "var-init"); 8 > h; h++) g.EXP_TABLE[h] = cc11001100_hook("g.EXP_TABLE[h]", 1 << h, "assign");
  for (var h = cc11001100_hook("h", 8, "var-init"); 256 > h; h++) g.EXP_TABLE[h] = cc11001100_hook("g.EXP_TABLE[h]", g.EXP_TABLE[h - 4] ^ g.EXP_TABLE[h - 5] ^ g.EXP_TABLE[h - 6] ^ g.EXP_TABLE[h - 8], "assign");
  for (var h = cc11001100_hook("h", 0, "var-init"); 255 > h; h++) g.LOG_TABLE[g.EXP_TABLE[h]] = cc11001100_hook("g.LOG_TABLE[g.EXP_TABLE[h]]", h, "assign");
  i.prototype = cc11001100_hook("i.prototype", {
    get: function (a) {
      return this.num[a];
    },
    getLength: function () {
      return this.num.length;
    },
    multiply: function (a) {
      for (var b = cc11001100_hook("b", new Array(this.getLength() + a.getLength() - 1), "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < this.getLength(); c++) for (var d = cc11001100_hook("d", 0, "var-init"); d < a.getLength(); d++) b[c + d] ^= cc11001100_hook("b[c + d]", g.gexp(g.glog(this.get(c)) + g.glog(a.get(d))), "assign");
      return new i(b, 0);
    },
    mod: function (a) {
      if (this.getLength() - a.getLength() < 0) return this;
      for (var b = cc11001100_hook("b", g.glog(this.get(0)) - g.glog(a.get(0)), "var-init"), c = cc11001100_hook("c", new Array(this.getLength()), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < this.getLength(); d++) c[d] = cc11001100_hook("c[d]", this.get(d), "assign");
      for (var d = cc11001100_hook("d", 0, "var-init"); d < a.getLength(); d++) c[d] ^= cc11001100_hook("c[d]", g.gexp(g.glog(a.get(d)) + b), "assign");
      return new i(c, 0).mod(a);
    }
  }, "assign"), j.RS_BLOCK_TABLE = cc11001100_hook("j.RS_BLOCK_TABLE", [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], "assign"), j.getRSBlocks = cc11001100_hook("j.getRSBlocks", function (a, b) {
    var c = cc11001100_hook("c", j.getRsBlockTable(a, b), "var-init");
    if (void 0 == c) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
    for (var d = cc11001100_hook("d", c.length / 3, "var-init"), e = cc11001100_hook("e", [], "var-init"), f = cc11001100_hook("f", 0, "var-init"); d > f; f++) for (var g = cc11001100_hook("g", c[3 * f + 0], "var-init"), h = cc11001100_hook("h", c[3 * f + 1], "var-init"), i = cc11001100_hook("i", c[3 * f + 2], "var-init"), k = cc11001100_hook("k", 0, "var-init"); g > k; k++) e.push(new j(h, i));
    return e;
  }, "assign"), j.getRsBlockTable = cc11001100_hook("j.getRsBlockTable", function (a, b) {
    switch (b) {
      case d.L:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 0];
      case d.M:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 1];
      case d.Q:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 2];
      case d.H:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 3];
      default:
        return void 0;
    }
  }, "assign"), k.prototype = cc11001100_hook("k.prototype", {
    get: function (a) {
      var b = cc11001100_hook("b", Math.floor(a / 8), "var-init");
      return 1 == (1 & this.buffer[b] >>> 7 - a % 8);
    },
    put: function (a, b) {
      for (var c = cc11001100_hook("c", 0, "var-init"); b > c; c++) this.putBit(1 == (1 & a >>> b - c - 1));
    },
    getLengthInBits: function () {
      return this.length;
    },
    putBit: function (a) {
      var b = cc11001100_hook("b", Math.floor(this.length / 8), "var-init");
      this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= cc11001100_hook("this.buffer[b]", 128 >>> this.length % 8, "assign")), this.length++;
    }
  }, "assign");
  var l = cc11001100_hook("l", [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]], "var-init"),
    o = cc11001100_hook("o", function () {
      var a = function (a, b) {
        this._el = cc11001100_hook("this._el", a, "assign"), this._htOption = cc11001100_hook("this._htOption", b, "assign");
      };
      return a.prototype.draw = cc11001100_hook("a.prototype.draw", function (a) {
        function g(a, b) {
          cc11001100_hook("a", a, "function-parameter");
          cc11001100_hook("b", b, "function-parameter");
          var c = cc11001100_hook("c", document.createElementNS("http://www.w3.org/2000/svg", a), "var-init");
          for (var d in b) b.hasOwnProperty(d) && c.setAttribute(d, b[d]);
          return c;
        }
        var b = cc11001100_hook("b", this._htOption, "var-init"),
          c = cc11001100_hook("c", this._el, "var-init"),
          d = cc11001100_hook("d", a.getModuleCount(), "var-init");
        Math.floor(b.width / d), Math.floor(b.height / d), this.clear();
        var h = cc11001100_hook("h", g("svg", {
          viewBox: cc11001100_hook("viewBox", "0 0 " + String(d) + " " + String(d), "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init"),
          fill: cc11001100_hook("fill", b.colorLight, "object-key-init")
        }), "var-init");
        h.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), c.appendChild(h), h.appendChild(g("rect", {
          fill: cc11001100_hook("fill", b.colorDark, "object-key-init"),
          width: cc11001100_hook("width", "1", "object-key-init"),
          height: cc11001100_hook("height", "1", "object-key-init"),
          id: cc11001100_hook("id", "template", "object-key-init")
        }));
        for (var i = cc11001100_hook("i", 0, "var-init"); d > i; i++) for (var j = cc11001100_hook("j", 0, "var-init"); d > j; j++) if (a.isDark(i, j)) {
          var k = cc11001100_hook("k", g("use", {
            x: cc11001100_hook("x", String(i), "object-key-init"),
            y: cc11001100_hook("y", String(j), "object-key-init")
          }), "var-init");
          k.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), h.appendChild(k);
        }
      }, "assign"), a.prototype.clear = cc11001100_hook("a.prototype.clear", function () {
        for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild);
      }, "assign"), a;
    }(), "var-init"),
    p = cc11001100_hook("p", "svg" === document.documentElement.tagName.toLowerCase(), "var-init"),
    q = cc11001100_hook("q", p ? o : m() ? function () {
      function a() {
        this._elImage.src = cc11001100_hook("this._elImage.src", this._elCanvas.toDataURL("image/png"), "assign"), this._elImage.style.display = cc11001100_hook("this._elImage.style.display", "block", "assign"), this._elCanvas.style.display = cc11001100_hook("this._elCanvas.style.display", "none", "assign");
      }
      function d(a, b) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");
        var c = cc11001100_hook("c", this, "var-init");
        if (c._fFail = cc11001100_hook("c._fFail", b, "assign"), c._fSuccess = cc11001100_hook("c._fSuccess", a, "assign"), null === c._bSupportDataURI) {
          var d = cc11001100_hook("d", document.createElement("img"), "var-init"),
            e = function () {
              c._bSupportDataURI = cc11001100_hook("c._bSupportDataURI", !1, "assign"), c._fFail && _fFail.call(c);
            },
            f = function () {
              c._bSupportDataURI = cc11001100_hook("c._bSupportDataURI", !0, "assign"), c._fSuccess && c._fSuccess.call(c);
            };
          return d.onabort = cc11001100_hook("d.onabort", e, "assign"), d.onerror = cc11001100_hook("d.onerror", e, "assign"), d.onload = cc11001100_hook("d.onload", f, "assign"), d.src = cc11001100_hook("d.src", "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", "assign"), void 0;
        }
        c._bSupportDataURI === !0 && c._fSuccess ? c._fSuccess.call(c) : c._bSupportDataURI === !1 && c._fFail && c._fFail.call(c);
      }
      if (this._android && this._android <= 2.1) {
        var b = cc11001100_hook("b", 1 / window.devicePixelRatio, "var-init"),
          c = cc11001100_hook("c", CanvasRenderingContext2D.prototype.drawImage, "var-init");
        CanvasRenderingContext2D.prototype.drawImage = cc11001100_hook("CanvasRenderingContext2D.prototype.drawImage", function (a, d, e, f, g, h, i, j) {
          if ("nodeName" in a && /img/i.test(a.nodeName)) for (var l = cc11001100_hook("l", arguments.length - 1, "var-init"); l >= 1; l--) arguments[l] = cc11001100_hook("arguments[l]", arguments[l] * b, "assign");else "undefined" == typeof j && (arguments[1] *= cc11001100_hook("arguments[1]", b, "assign"), arguments[2] *= cc11001100_hook("arguments[2]", b, "assign"), arguments[3] *= cc11001100_hook("arguments[3]", b, "assign"), arguments[4] *= cc11001100_hook("arguments[4]", b, "assign"));
          c.apply(this, arguments);
        }, "assign");
      }
      var e = function (a, b) {
        this._bIsPainted = cc11001100_hook("this._bIsPainted", !1, "assign"), this._android = cc11001100_hook("this._android", n(), "assign"), this._htOption = cc11001100_hook("this._htOption", b, "assign"), this._elCanvas = cc11001100_hook("this._elCanvas", document.createElement("canvas"), "assign"), this._elCanvas.width = cc11001100_hook("this._elCanvas.width", b.width, "assign"), this._elCanvas.height = cc11001100_hook("this._elCanvas.height", b.height, "assign"), a.appendChild(this._elCanvas), this._el = cc11001100_hook("this._el", a, "assign"), this._oContext = cc11001100_hook("this._oContext", this._elCanvas.getContext("2d"), "assign"), this._bIsPainted = cc11001100_hook("this._bIsPainted", !1, "assign"), this._elImage = cc11001100_hook("this._elImage", document.createElement("img"), "assign"), this._elImage.style.display = cc11001100_hook("this._elImage.style.display", "none", "assign"), this._el.appendChild(this._elImage), this._bSupportDataURI = cc11001100_hook("this._bSupportDataURI", null, "assign");
      };
      return e.prototype.draw = cc11001100_hook("e.prototype.draw", function (a) {
        var b = cc11001100_hook("b", this._elImage, "var-init"),
          c = cc11001100_hook("c", this._oContext, "var-init"),
          d = cc11001100_hook("d", this._htOption, "var-init"),
          e = cc11001100_hook("e", a.getModuleCount(), "var-init"),
          f = cc11001100_hook("f", d.width / e, "var-init"),
          g = cc11001100_hook("g", d.height / e, "var-init"),
          h = cc11001100_hook("h", Math.round(f), "var-init"),
          i = cc11001100_hook("i", Math.round(g), "var-init");
        b.style.display = cc11001100_hook("b.style.display", "none", "assign"), this.clear();
        for (var j = cc11001100_hook("j", 0, "var-init"); e > j; j++) for (var k = cc11001100_hook("k", 0, "var-init"); e > k; k++) {
          var l = cc11001100_hook("l", a.isDark(j, k), "var-init"),
            m = cc11001100_hook("m", k * f, "var-init"),
            n = cc11001100_hook("n", j * g, "var-init");
          c.strokeStyle = cc11001100_hook("c.strokeStyle", l ? d.colorDark : d.colorLight, "assign"), c.lineWidth = cc11001100_hook("c.lineWidth", 1, "assign"), c.fillStyle = cc11001100_hook("c.fillStyle", l ? d.colorDark : d.colorLight, "assign"), c.fillRect(m, n, f, g), c.strokeRect(Math.floor(m) + .5, Math.floor(n) + .5, h, i), c.strokeRect(Math.ceil(m) - .5, Math.ceil(n) - .5, h, i);
        }
        this._bIsPainted = cc11001100_hook("this._bIsPainted", !0, "assign");
      }, "assign"), e.prototype.makeImage = cc11001100_hook("e.prototype.makeImage", function () {
        this._bIsPainted && d.call(this, a);
      }, "assign"), e.prototype.isPainted = cc11001100_hook("e.prototype.isPainted", function () {
        return this._bIsPainted;
      }, "assign"), e.prototype.clear = cc11001100_hook("e.prototype.clear", function () {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = cc11001100_hook("this._bIsPainted", !1, "assign");
      }, "assign"), e.prototype.round = cc11001100_hook("e.prototype.round", function (a) {
        return a ? Math.floor(1e3 * a) / 1e3 : a;
      }, "assign"), e;
    }() : function () {
      var a = function (a, b) {
        this._el = cc11001100_hook("this._el", a, "assign"), this._htOption = cc11001100_hook("this._htOption", b, "assign");
      };
      return a.prototype.draw = cc11001100_hook("a.prototype.draw", function (a) {
        for (var b = cc11001100_hook("b", this._htOption, "var-init"), c = cc11001100_hook("c", this._el, "var-init"), d = cc11001100_hook("d", a.getModuleCount(), "var-init"), e = cc11001100_hook("e", Math.floor(b.width / d), "var-init"), f = cc11001100_hook("f", Math.floor(b.height / d), "var-init"), g = cc11001100_hook("g", ['<table style="border:0;border-collapse:collapse;">'], "var-init"), h = cc11001100_hook("h", 0, "var-init"); d > h; h++) {
          g.push("<tr>");
          for (var i = cc11001100_hook("i", 0, "var-init"); d > i; i++) g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (a.isDark(h, i) ? b.colorDark : b.colorLight) + ';"></td>');
          g.push("</tr>");
        }
        g.push("</table>"), c.innerHTML = cc11001100_hook("c.innerHTML", g.join(""), "assign");
        var j = cc11001100_hook("j", c.childNodes[0], "var-init"),
          k = cc11001100_hook("k", (b.width - j.offsetWidth) / 2, "var-init"),
          l = cc11001100_hook("l", (b.height - j.offsetHeight) / 2, "var-init");
        k > 0 && l > 0 && (j.style.margin = cc11001100_hook("j.style.margin", l + "px " + k + "px", "assign"));
      }, "assign"), a.prototype.clear = cc11001100_hook("a.prototype.clear", function () {
        this._el.innerHTML = cc11001100_hook("this._el.innerHTML", "", "assign");
      }, "assign"), a;
    }(), "var-init");
  QRCode = cc11001100_hook("QRCode", function (a, b) {
    if (this._htOption = cc11001100_hook("this._htOption", {
      width: cc11001100_hook("width", 256, "object-key-init"),
      height: cc11001100_hook("height", 256, "object-key-init"),
      typeNumber: cc11001100_hook("typeNumber", 4, "object-key-init"),
      colorDark: cc11001100_hook("colorDark", "#000000", "object-key-init"),
      colorLight: cc11001100_hook("colorLight", "#ffffff", "object-key-init"),
      correctLevel: cc11001100_hook("correctLevel", d.H, "object-key-init")
    }, "assign"), "string" == typeof b && (b = cc11001100_hook("b", {
      text: cc11001100_hook("text", b, "object-key-init")
    }, "assign")), b) for (var c in b) this._htOption[c] = cc11001100_hook("this._htOption[c]", b[c], "assign");
    "string" == typeof a && (a = cc11001100_hook("a", document.getElementById(a), "assign")), this._android = cc11001100_hook("this._android", n(), "assign"), this._el = cc11001100_hook("this._el", a, "assign"), this._oQRCode = cc11001100_hook("this._oQRCode", null, "assign"), this._oDrawing = cc11001100_hook("this._oDrawing", new q(this._el, this._htOption), "assign"), this._htOption.text && this.makeCode(this._htOption.text);
  }, "assign"), QRCode.prototype.makeCode = cc11001100_hook("QRCode.prototype.makeCode", function (a) {
    this._oQRCode = cc11001100_hook("this._oQRCode", new b(r(a, this._htOption.correctLevel), this._htOption.correctLevel), "assign"), this._oQRCode.addData(a), this._oQRCode.make(), this._el.title = cc11001100_hook("this._el.title", a, "assign"), this._oDrawing.draw(this._oQRCode), this.makeImage();
  }, "assign"), QRCode.prototype.makeImage = cc11001100_hook("QRCode.prototype.makeImage", function () {
    "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage();
  }, "assign"), QRCode.prototype.clear = cc11001100_hook("QRCode.prototype.clear", function () {
    this._oDrawing.clear();
  }, "assign"), QRCode.CorrectLevel = cc11001100_hook("QRCode.CorrectLevel", d, "assign");
}();