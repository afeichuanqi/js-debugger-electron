var qrcode = cc11001100_hook("qrcode", function () {
  var qrcode = function (typeNumber, errorCorrectLevel) {
    var PAD0 = cc11001100_hook("PAD0", 0xEC, "var-init");
    var PAD1 = cc11001100_hook("PAD1", 0x11, "var-init");
    var _typeNumber = cc11001100_hook("_typeNumber", typeNumber, "var-init");
    var _errorCorrectLevel = cc11001100_hook("_errorCorrectLevel", QRErrorCorrectLevel[errorCorrectLevel], "var-init");
    var _modules = cc11001100_hook("_modules", null, "var-init");
    var _moduleCount = cc11001100_hook("_moduleCount", 0, "var-init");
    var _dataCache = cc11001100_hook("_dataCache", null, "var-init");
    var _dataList = cc11001100_hook("_dataList", new Array(), "var-init");
    var _this = cc11001100_hook("_this", {}, "var-init");
    var makeImpl = function (test, maskPattern) {
      _moduleCount = cc11001100_hook("_moduleCount", _typeNumber * 4 + 17, "assign");
      _modules = cc11001100_hook("_modules", function (moduleCount) {
        var modules = cc11001100_hook("modules", new Array(moduleCount), "var-init");
        for (var row = cc11001100_hook("row", 0, "var-init"); row < moduleCount; row += cc11001100_hook("row", 1, "assign")) {
          modules[row] = cc11001100_hook("modules[row]", new Array(moduleCount), "assign");
          for (var col = cc11001100_hook("col", 0, "var-init"); col < moduleCount; col += cc11001100_hook("col", 1, "assign")) {
            modules[row][col] = cc11001100_hook("modules[row][col]", null, "assign");
          }
        }
        return modules;
      }(_moduleCount), "assign");
      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);
      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }
      if (_dataCache == null) {
        _dataCache = cc11001100_hook("_dataCache", createData(_typeNumber, _errorCorrectLevel, _dataList), "assign");
      }
      mapData(_dataCache, maskPattern);
    };
    var setupPositionProbePattern = function (row, col) {
      for (var r = cc11001100_hook("r", -1, "var-init"); r <= 7; r += cc11001100_hook("r", 1, "assign")) {
        if (row + r <= -1 || _moduleCount <= row + r) continue;
        for (var c = cc11001100_hook("c", -1, "var-init"); c <= 7; c += cc11001100_hook("c", 1, "assign")) {
          if (col + c <= -1 || _moduleCount <= col + c) continue;
          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            _modules[row + r][col + c] = cc11001100_hook("_modules[row + r][col + c]", true, "assign");
          } else {
            _modules[row + r][col + c] = cc11001100_hook("_modules[row + r][col + c]", false, "assign");
          }
        }
      }
    };
    var getBestMaskPattern = function () {
      var minLostPoint = cc11001100_hook("minLostPoint", 0, "var-init");
      var pattern = cc11001100_hook("pattern", 0, "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < 8; i += cc11001100_hook("i", 1, "assign")) {
        makeImpl(true, i);
        var lostPoint = cc11001100_hook("lostPoint", QRUtil.getLostPoint(_this), "var-init");
        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = cc11001100_hook("minLostPoint", lostPoint, "assign");
          pattern = cc11001100_hook("pattern", i, "assign");
        }
      }
      return pattern;
    };
    var setupTimingPattern = function () {
      for (var r = cc11001100_hook("r", 8, "var-init"); r < _moduleCount - 8; r += cc11001100_hook("r", 1, "assign")) {
        if (_modules[r][6] != null) {
          continue;
        }
        _modules[r][6] = cc11001100_hook("_modules[r][6]", r % 2 == 0, "assign");
      }
      for (var c = cc11001100_hook("c", 8, "var-init"); c < _moduleCount - 8; c += cc11001100_hook("c", 1, "assign")) {
        if (_modules[6][c] != null) {
          continue;
        }
        _modules[6][c] = cc11001100_hook("_modules[6][c]", c % 2 == 0, "assign");
      }
    };
    var setupPositionAdjustPattern = function () {
      var pos = cc11001100_hook("pos", QRUtil.getPatternPosition(_typeNumber), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < pos.length; i += cc11001100_hook("i", 1, "assign")) {
        for (var j = cc11001100_hook("j", 0, "var-init"); j < pos.length; j += cc11001100_hook("j", 1, "assign")) {
          var row = cc11001100_hook("row", pos[i], "var-init");
          var col = cc11001100_hook("col", pos[j], "var-init");
          if (_modules[row][col] != null) {
            continue;
          }
          for (var r = cc11001100_hook("r", -2, "var-init"); r <= 2; r += cc11001100_hook("r", 1, "assign")) {
            for (var c = cc11001100_hook("c", -2, "var-init"); c <= 2; c += cc11001100_hook("c", 1, "assign")) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                _modules[row + r][col + c] = cc11001100_hook("_modules[row + r][col + c]", true, "assign");
              } else {
                _modules[row + r][col + c] = cc11001100_hook("_modules[row + r][col + c]", false, "assign");
              }
            }
          }
        }
      }
    };
    var setupTypeNumber = function (test) {
      var bits = cc11001100_hook("bits", QRUtil.getBCHTypeNumber(_typeNumber), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < 18; i += cc11001100_hook("i", 1, "assign")) {
        var mod = cc11001100_hook("mod", !test && (bits >> i & 1) == 1, "var-init");
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = cc11001100_hook("_modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3]", mod, "assign");
      }
      for (var i = cc11001100_hook("i", 0, "var-init"); i < 18; i += cc11001100_hook("i", 1, "assign")) {
        var mod = cc11001100_hook("mod", !test && (bits >> i & 1) == 1, "var-init");
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = cc11001100_hook("_modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)]", mod, "assign");
      }
    };
    var setupTypeInfo = function (test, maskPattern) {
      var data = cc11001100_hook("data", _errorCorrectLevel << 3 | maskPattern, "var-init");
      var bits = cc11001100_hook("bits", QRUtil.getBCHTypeInfo(data), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < 15; i += cc11001100_hook("i", 1, "assign")) {
        var mod = cc11001100_hook("mod", !test && (bits >> i & 1) == 1, "var-init");
        if (i < 6) {
          _modules[i][8] = cc11001100_hook("_modules[i][8]", mod, "assign");
        } else if (i < 8) {
          _modules[i + 1][8] = cc11001100_hook("_modules[i + 1][8]", mod, "assign");
        } else {
          _modules[_moduleCount - 15 + i][8] = cc11001100_hook("_modules[_moduleCount - 15 + i][8]", mod, "assign");
        }
      }
      for (var i = cc11001100_hook("i", 0, "var-init"); i < 15; i += cc11001100_hook("i", 1, "assign")) {
        var mod = cc11001100_hook("mod", !test && (bits >> i & 1) == 1, "var-init");
        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = cc11001100_hook("_modules[8][_moduleCount - i - 1]", mod, "assign");
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = cc11001100_hook("_modules[8][15 - i - 1 + 1]", mod, "assign");
        } else {
          _modules[8][15 - i - 1] = cc11001100_hook("_modules[8][15 - i - 1]", mod, "assign");
        }
      }
      _modules[_moduleCount - 8][8] = cc11001100_hook("_modules[_moduleCount - 8][8]", !test, "assign");
    };
    var mapData = function (data, maskPattern) {
      var inc = cc11001100_hook("inc", -1, "var-init");
      var row = cc11001100_hook("row", _moduleCount - 1, "var-init");
      var bitIndex = cc11001100_hook("bitIndex", 7, "var-init");
      var byteIndex = cc11001100_hook("byteIndex", 0, "var-init");
      var maskFunc = cc11001100_hook("maskFunc", QRUtil.getMaskFunction(maskPattern), "var-init");
      for (var col = cc11001100_hook("col", _moduleCount - 1, "var-init"); col > 0; col -= cc11001100_hook("col", 2, "assign")) {
        if (col == 6) col -= cc11001100_hook("col", 1, "assign");
        while (true) {
          for (var c = cc11001100_hook("c", 0, "var-init"); c < 2; c += cc11001100_hook("c", 1, "assign")) {
            if (_modules[row][col - c] == null) {
              var dark = cc11001100_hook("dark", false, "var-init");
              if (byteIndex < data.length) {
                dark = cc11001100_hook("dark", (data[byteIndex] >>> bitIndex & 1) == 1, "assign");
              }
              var mask = cc11001100_hook("mask", maskFunc(row, col - c), "var-init");
              if (mask) {
                dark = cc11001100_hook("dark", !dark, "assign");
              }
              _modules[row][col - c] = cc11001100_hook("_modules[row][col - c]", dark, "assign");
              bitIndex -= cc11001100_hook("bitIndex", 1, "assign");
              if (bitIndex == -1) {
                byteIndex += cc11001100_hook("byteIndex", 1, "assign");
                bitIndex = cc11001100_hook("bitIndex", 7, "assign");
              }
            }
          }
          row += cc11001100_hook("row", inc, "assign");
          if (row < 0 || _moduleCount <= row) {
            row -= cc11001100_hook("row", inc, "assign");
            inc = cc11001100_hook("inc", -inc, "assign");
            break;
          }
        }
      }
    };
    var createBytes = function (buffer, rsBlocks) {
      var offset = cc11001100_hook("offset", 0, "var-init");
      var maxDcCount = cc11001100_hook("maxDcCount", 0, "var-init");
      var maxEcCount = cc11001100_hook("maxEcCount", 0, "var-init");
      var dcdata = cc11001100_hook("dcdata", new Array(rsBlocks.length), "var-init");
      var ecdata = cc11001100_hook("ecdata", new Array(rsBlocks.length), "var-init");
      for (var r = cc11001100_hook("r", 0, "var-init"); r < rsBlocks.length; r += cc11001100_hook("r", 1, "assign")) {
        var dcCount = cc11001100_hook("dcCount", rsBlocks[r].dataCount, "var-init");
        var ecCount = cc11001100_hook("ecCount", rsBlocks[r].totalCount - dcCount, "var-init");
        maxDcCount = cc11001100_hook("maxDcCount", Math.max(maxDcCount, dcCount), "assign");
        maxEcCount = cc11001100_hook("maxEcCount", Math.max(maxEcCount, ecCount), "assign");
        dcdata[r] = cc11001100_hook("dcdata[r]", new Array(dcCount), "assign");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < dcdata[r].length; i += cc11001100_hook("i", 1, "assign")) {
          dcdata[r][i] = cc11001100_hook("dcdata[r][i]", 0xff & buffer.getBuffer()[i + offset], "assign");
        }
        offset += cc11001100_hook("offset", dcCount, "assign");
        var rsPoly = cc11001100_hook("rsPoly", QRUtil.getErrorCorrectPolynomial(ecCount), "var-init");
        var rawPoly = cc11001100_hook("rawPoly", qrPolynomial(dcdata[r], rsPoly.getLength() - 1), "var-init");
        var modPoly = cc11001100_hook("modPoly", rawPoly.mod(rsPoly), "var-init");
        ecdata[r] = cc11001100_hook("ecdata[r]", new Array(rsPoly.getLength() - 1), "assign");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < ecdata[r].length; i += cc11001100_hook("i", 1, "assign")) {
          var modIndex = cc11001100_hook("modIndex", i + modPoly.getLength() - ecdata[r].length, "var-init");
          ecdata[r][i] = cc11001100_hook("ecdata[r][i]", modIndex >= 0 ? modPoly.getAt(modIndex) : 0, "assign");
        }
      }
      var totalCodeCount = cc11001100_hook("totalCodeCount", 0, "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < rsBlocks.length; i += cc11001100_hook("i", 1, "assign")) {
        totalCodeCount += cc11001100_hook("totalCodeCount", rsBlocks[i].totalCount, "assign");
      }
      var data = cc11001100_hook("data", new Array(totalCodeCount), "var-init");
      var index = cc11001100_hook("index", 0, "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < maxDcCount; i += cc11001100_hook("i", 1, "assign")) {
        for (var r = cc11001100_hook("r", 0, "var-init"); r < rsBlocks.length; r += cc11001100_hook("r", 1, "assign")) {
          if (i < dcdata[r].length) {
            data[index] = cc11001100_hook("data[index]", dcdata[r][i], "assign");
            index += cc11001100_hook("index", 1, "assign");
          }
        }
      }
      for (var i = cc11001100_hook("i", 0, "var-init"); i < maxEcCount; i += cc11001100_hook("i", 1, "assign")) {
        for (var r = cc11001100_hook("r", 0, "var-init"); r < rsBlocks.length; r += cc11001100_hook("r", 1, "assign")) {
          if (i < ecdata[r].length) {
            data[index] = cc11001100_hook("data[index]", ecdata[r][i], "assign");
            index += cc11001100_hook("index", 1, "assign");
          }
        }
      }
      return data;
    };
    var createData = function (typeNumber, errorCorrectLevel, dataList) {
      var rsBlocks = cc11001100_hook("rsBlocks", QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel), "var-init");
      var buffer = cc11001100_hook("buffer", qrBitBuffer(), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < dataList.length; i += cc11001100_hook("i", 1, "assign")) {
        var data = cc11001100_hook("data", dataList[i], "var-init");
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber));
        data.write(buffer);
      }
      var totalDataCount = cc11001100_hook("totalDataCount", 0, "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < rsBlocks.length; i += cc11001100_hook("i", 1, "assign")) {
        totalDataCount += cc11001100_hook("totalDataCount", rsBlocks[i].dataCount, "assign");
      }
      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error('code length overflow. (' + buffer.getLengthInBits() + '>' + totalDataCount * 8 + ')');
      }
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }
      while (true) {
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD0, 8);
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD1, 8);
      }
      return createBytes(buffer, rsBlocks);
    };
    _this.addData = cc11001100_hook("_this.addData", function (data) {
      var newData = cc11001100_hook("newData", qr8BitByte(data), "var-init");
      _dataList.push(newData);
      _dataCache = cc11001100_hook("_dataCache", null, "assign");
    }, "assign");
    _this.isDark = cc11001100_hook("_this.isDark", function (row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw new Error(row + ',' + col);
      }
      return _modules[row][col];
    }, "assign");
    _this.getModuleCount = cc11001100_hook("_this.getModuleCount", function () {
      return _moduleCount;
    }, "assign");
    _this.make = cc11001100_hook("_this.make", function () {
      makeImpl(false, getBestMaskPattern());
    }, "assign");
    _this.createTableTag = cc11001100_hook("_this.createTableTag", function (cellSize, margin) {
      cellSize = cc11001100_hook("cellSize", cellSize || 2, "assign");
      margin = cc11001100_hook("margin", typeof margin == 'undefined' ? cellSize * 4 : margin, "assign");
      var qrHtml = cc11001100_hook("qrHtml", '', "var-init");
      qrHtml += cc11001100_hook("qrHtml", '<table style="', "assign");
      qrHtml += cc11001100_hook("qrHtml", ' border-width: 0px; border-style: none;', "assign");
      qrHtml += cc11001100_hook("qrHtml", ' border-collapse: collapse;', "assign");
      qrHtml += cc11001100_hook("qrHtml", ' padding: 0px; margin: ' + margin + 'px;', "assign");
      qrHtml += cc11001100_hook("qrHtml", '">', "assign");
      qrHtml += cc11001100_hook("qrHtml", '<tbody>', "assign");
      for (var r = cc11001100_hook("r", 0, "var-init"); r < _this.getModuleCount(); r += cc11001100_hook("r", 1, "assign")) {
        qrHtml += cc11001100_hook("qrHtml", '<tr>', "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < _this.getModuleCount(); c += cc11001100_hook("c", 1, "assign")) {
          qrHtml += cc11001100_hook("qrHtml", '<td style="', "assign");
          qrHtml += cc11001100_hook("qrHtml", ' border-width: 0px; border-style: none;', "assign");
          qrHtml += cc11001100_hook("qrHtml", ' border-collapse: collapse;', "assign");
          qrHtml += cc11001100_hook("qrHtml", ' padding: 0px; margin: 0px;', "assign");
          qrHtml += cc11001100_hook("qrHtml", ' width: ' + cellSize + 'px;', "assign");
          qrHtml += cc11001100_hook("qrHtml", ' height: ' + cellSize + 'px;', "assign");
          qrHtml += cc11001100_hook("qrHtml", ' background-color: ', "assign");
          qrHtml += cc11001100_hook("qrHtml", _this.isDark(r, c) ? '#000000' : '#ffffff', "assign");
          qrHtml += cc11001100_hook("qrHtml", ';', "assign");
          qrHtml += cc11001100_hook("qrHtml", '"/>', "assign");
        }
        qrHtml += cc11001100_hook("qrHtml", '</tr>', "assign");
      }
      qrHtml += cc11001100_hook("qrHtml", '</tbody>', "assign");
      qrHtml += cc11001100_hook("qrHtml", '</table>', "assign");
      return qrHtml;
    }, "assign");
    _this.createImgTag = cc11001100_hook("_this.createImgTag", function (cellSize, margin) {
      cellSize = cc11001100_hook("cellSize", cellSize || 2, "assign");
      margin = cc11001100_hook("margin", typeof margin == 'undefined' ? cellSize * 4 : margin, "assign");
      var size = cc11001100_hook("size", _this.getModuleCount() * cellSize + margin * 2, "var-init");
      var min = cc11001100_hook("min", margin, "var-init");
      var max = cc11001100_hook("max", size - margin, "var-init");
      return createImgTag(size, size, function (x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          var c = cc11001100_hook("c", Math.floor((x - min) / cellSize), "var-init");
          var r = cc11001100_hook("r", Math.floor((y - min) / cellSize), "var-init");
          return _this.isDark(r, c) ? 0 : 1;
        } else {
          return 1;
        }
      });
    }, "assign");
    return _this;
  };
  qrcode.stringToBytes = cc11001100_hook("qrcode.stringToBytes", function (s) {
    var bytes = cc11001100_hook("bytes", new Array(), "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < s.length; i += cc11001100_hook("i", 1, "assign")) {
      var c = cc11001100_hook("c", s.charCodeAt(i), "var-init");
      bytes.push(c & 0xff);
    }
    return bytes;
  }, "assign");
  qrcode.createStringToBytes = cc11001100_hook("qrcode.createStringToBytes", function (unicodeData, numChars) {
    var unicodeMap = cc11001100_hook("unicodeMap", function () {
      var bin = cc11001100_hook("bin", base64DecodeInputStream(unicodeData), "var-init");
      var read = function () {
        var b = cc11001100_hook("b", bin.read(), "var-init");
        if (b == -1) throw new Error();
        return b;
      };
      var count = cc11001100_hook("count", 0, "var-init");
      var unicodeMap = cc11001100_hook("unicodeMap", {}, "var-init");
      while (true) {
        var b0 = cc11001100_hook("b0", bin.read(), "var-init");
        if (b0 == -1) break;
        var b1 = cc11001100_hook("b1", read(), "var-init");
        var b2 = cc11001100_hook("b2", read(), "var-init");
        var b3 = cc11001100_hook("b3", read(), "var-init");
        var k = cc11001100_hook("k", String.fromCharCode(b0 << 8 | b1), "var-init");
        var v = cc11001100_hook("v", b2 << 8 | b3, "var-init");
        unicodeMap[k] = cc11001100_hook("unicodeMap[k]", v, "assign");
        count += cc11001100_hook("count", 1, "assign");
      }
      if (count != numChars) {
        throw new Error(count + ' != ' + numChars);
      }
      return unicodeMap;
    }(), "var-init");
    var unknownChar = cc11001100_hook("unknownChar", '?'.charCodeAt(0), "var-init");
    return function (s) {
      var bytes = cc11001100_hook("bytes", new Array(), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < s.length; i += cc11001100_hook("i", 1, "assign")) {
        var c = cc11001100_hook("c", s.charCodeAt(i), "var-init");
        if (c < 128) {
          bytes.push(c);
        } else {
          var b = cc11001100_hook("b", unicodeMap[s.charAt(i)], "var-init");
          if (typeof b == 'number') {
            if ((b & 0xff) == b) {
              bytes.push(b);
            } else {
              bytes.push(b >>> 8);
              bytes.push(b & 0xff);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }
      return bytes;
    };
  }, "assign");
  var QRMode = cc11001100_hook("QRMode", {
    MODE_NUMBER: cc11001100_hook("MODE_NUMBER", 1 << 0, "object-key-init"),
    MODE_ALPHA_NUM: cc11001100_hook("MODE_ALPHA_NUM", 1 << 1, "object-key-init"),
    MODE_8BIT_BYTE: cc11001100_hook("MODE_8BIT_BYTE", 1 << 2, "object-key-init"),
    MODE_KANJI: cc11001100_hook("MODE_KANJI", 1 << 3, "object-key-init")
  }, "var-init");
  var QRErrorCorrectLevel = cc11001100_hook("QRErrorCorrectLevel", {
    L: cc11001100_hook("L", 1, "object-key-init"),
    M: cc11001100_hook("M", 0, "object-key-init"),
    Q: cc11001100_hook("Q", 3, "object-key-init"),
    H: cc11001100_hook("H", 2, "object-key-init")
  }, "var-init");
  var QRMaskPattern = cc11001100_hook("QRMaskPattern", {
    PATTERN000: cc11001100_hook("PATTERN000", 0, "object-key-init"),
    PATTERN001: cc11001100_hook("PATTERN001", 1, "object-key-init"),
    PATTERN010: cc11001100_hook("PATTERN010", 2, "object-key-init"),
    PATTERN011: cc11001100_hook("PATTERN011", 3, "object-key-init"),
    PATTERN100: cc11001100_hook("PATTERN100", 4, "object-key-init"),
    PATTERN101: cc11001100_hook("PATTERN101", 5, "object-key-init"),
    PATTERN110: cc11001100_hook("PATTERN110", 6, "object-key-init"),
    PATTERN111: cc11001100_hook("PATTERN111", 7, "object-key-init")
  }, "var-init");
  var QRUtil = cc11001100_hook("QRUtil", function () {
    var PATTERN_POSITION_TABLE = cc11001100_hook("PATTERN_POSITION_TABLE", [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], "var-init");
    var G15 = cc11001100_hook("G15", 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, "var-init");
    var G18 = cc11001100_hook("G18", 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, "var-init");
    var G15_MASK = cc11001100_hook("G15_MASK", 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, "var-init");
    var _this = cc11001100_hook("_this", {}, "var-init");
    var getBCHDigit = function (data) {
      var digit = cc11001100_hook("digit", 0, "var-init");
      while (data != 0) {
        digit += cc11001100_hook("digit", 1, "assign");
        data >>>= cc11001100_hook("data", 1, "assign");
      }
      return digit;
    };
    _this.getBCHTypeInfo = cc11001100_hook("_this.getBCHTypeInfo", function (data) {
      var d = cc11001100_hook("d", data << 10, "var-init");
      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= cc11001100_hook("d", G15 << getBCHDigit(d) - getBCHDigit(G15), "assign");
      }
      return (data << 10 | d) ^ G15_MASK;
    }, "assign");
    _this.getBCHTypeNumber = cc11001100_hook("_this.getBCHTypeNumber", function (data) {
      var d = cc11001100_hook("d", data << 12, "var-init");
      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= cc11001100_hook("d", G18 << getBCHDigit(d) - getBCHDigit(G18), "assign");
      }
      return data << 12 | d;
    }, "assign");
    _this.getPatternPosition = cc11001100_hook("_this.getPatternPosition", function (typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    }, "assign");
    _this.getMaskFunction = cc11001100_hook("_this.getMaskFunction", function (maskPattern) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return function (i, j) {
            return (i + j) % 2 == 0;
          };
        case QRMaskPattern.PATTERN001:
          return function (i, j) {
            return i % 2 == 0;
          };
        case QRMaskPattern.PATTERN010:
          return function (i, j) {
            return j % 3 == 0;
          };
        case QRMaskPattern.PATTERN011:
          return function (i, j) {
            return (i + j) % 3 == 0;
          };
        case QRMaskPattern.PATTERN100:
          return function (i, j) {
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
          };
        case QRMaskPattern.PATTERN101:
          return function (i, j) {
            return i * j % 2 + i * j % 3 == 0;
          };
        case QRMaskPattern.PATTERN110:
          return function (i, j) {
            return (i * j % 2 + i * j % 3) % 2 == 0;
          };
        case QRMaskPattern.PATTERN111:
          return function (i, j) {
            return (i * j % 3 + (i + j) % 2) % 2 == 0;
          };
        default:
          throw new Error('bad maskPattern:' + maskPattern);
      }
    }, "assign");
    _this.getErrorCorrectPolynomial = cc11001100_hook("_this.getErrorCorrectPolynomial", function (errorCorrectLength) {
      var a = cc11001100_hook("a", qrPolynomial([1], 0), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < errorCorrectLength; i += cc11001100_hook("i", 1, "assign")) {
        a = cc11001100_hook("a", a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0)), "assign");
      }
      return a;
    }, "assign");
    _this.getLengthInBits = cc11001100_hook("_this.getLengthInBits", function (mode, type) {
      if (1 <= type && type < 10) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 10;
          case QRMode.MODE_ALPHA_NUM:
            return 9;
          case QRMode.MODE_8BIT_BYTE:
            return 8;
          case QRMode.MODE_KANJI:
            return 8;
          default:
            throw new Error('mode:' + mode);
        }
      } else if (type < 27) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 12;
          case QRMode.MODE_ALPHA_NUM:
            return 11;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 10;
          default:
            throw new Error('mode:' + mode);
        }
      } else if (type < 41) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 14;
          case QRMode.MODE_ALPHA_NUM:
            return 13;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 12;
          default:
            throw new Error('mode:' + mode);
        }
      } else {
        throw new Error('type:' + type);
      }
    }, "assign");
    _this.getLostPoint = cc11001100_hook("_this.getLostPoint", function (qrcode) {
      var moduleCount = cc11001100_hook("moduleCount", qrcode.getModuleCount(), "var-init");
      var lostPoint = cc11001100_hook("lostPoint", 0, "var-init");
      for (var row = cc11001100_hook("row", 0, "var-init"); row < moduleCount; row += cc11001100_hook("row", 1, "assign")) {
        for (var col = cc11001100_hook("col", 0, "var-init"); col < moduleCount; col += cc11001100_hook("col", 1, "assign")) {
          var sameCount = cc11001100_hook("sameCount", 0, "var-init");
          var dark = cc11001100_hook("dark", qrcode.isDark(row, col), "var-init");
          for (var r = cc11001100_hook("r", -1, "var-init"); r <= 1; r += cc11001100_hook("r", 1, "assign")) {
            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }
            for (var c = cc11001100_hook("c", -1, "var-init"); c <= 1; c += cc11001100_hook("c", 1, "assign")) {
              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }
              if (r == 0 && c == 0) {
                continue;
              }
              if (dark == qrcode.isDark(row + r, col + c)) {
                sameCount += cc11001100_hook("sameCount", 1, "assign");
              }
            }
          }
          if (sameCount > 5) {
            lostPoint += cc11001100_hook("lostPoint", 3 + sameCount - 5, "assign");
          }
        }
      }
      ;
      for (var row = cc11001100_hook("row", 0, "var-init"); row < moduleCount - 1; row += cc11001100_hook("row", 1, "assign")) {
        for (var col = cc11001100_hook("col", 0, "var-init"); col < moduleCount - 1; col += cc11001100_hook("col", 1, "assign")) {
          var count = cc11001100_hook("count", 0, "var-init");
          if (qrcode.isDark(row, col)) count += cc11001100_hook("count", 1, "assign");
          if (qrcode.isDark(row + 1, col)) count += cc11001100_hook("count", 1, "assign");
          if (qrcode.isDark(row, col + 1)) count += cc11001100_hook("count", 1, "assign");
          if (qrcode.isDark(row + 1, col + 1)) count += cc11001100_hook("count", 1, "assign");
          if (count == 0 || count == 4) {
            lostPoint += cc11001100_hook("lostPoint", 3, "assign");
          }
        }
      }
      for (var row = cc11001100_hook("row", 0, "var-init"); row < moduleCount; row += cc11001100_hook("row", 1, "assign")) {
        for (var col = cc11001100_hook("col", 0, "var-init"); col < moduleCount - 6; col += cc11001100_hook("col", 1, "assign")) {
          if (qrcode.isDark(row, col) && !qrcode.isDark(row, col + 1) && qrcode.isDark(row, col + 2) && qrcode.isDark(row, col + 3) && qrcode.isDark(row, col + 4) && !qrcode.isDark(row, col + 5) && qrcode.isDark(row, col + 6)) {
            lostPoint += cc11001100_hook("lostPoint", 40, "assign");
          }
        }
      }
      for (var col = cc11001100_hook("col", 0, "var-init"); col < moduleCount; col += cc11001100_hook("col", 1, "assign")) {
        for (var row = cc11001100_hook("row", 0, "var-init"); row < moduleCount - 6; row += cc11001100_hook("row", 1, "assign")) {
          if (qrcode.isDark(row, col) && !qrcode.isDark(row + 1, col) && qrcode.isDark(row + 2, col) && qrcode.isDark(row + 3, col) && qrcode.isDark(row + 4, col) && !qrcode.isDark(row + 5, col) && qrcode.isDark(row + 6, col)) {
            lostPoint += cc11001100_hook("lostPoint", 40, "assign");
          }
        }
      }
      var darkCount = cc11001100_hook("darkCount", 0, "var-init");
      for (var col = cc11001100_hook("col", 0, "var-init"); col < moduleCount; col += cc11001100_hook("col", 1, "assign")) {
        for (var row = cc11001100_hook("row", 0, "var-init"); row < moduleCount; row += cc11001100_hook("row", 1, "assign")) {
          if (qrcode.isDark(row, col)) {
            darkCount += cc11001100_hook("darkCount", 1, "assign");
          }
        }
      }
      var ratio = cc11001100_hook("ratio", Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5, "var-init");
      lostPoint += cc11001100_hook("lostPoint", ratio * 10, "assign");
      return lostPoint;
    }, "assign");
    return _this;
  }(), "var-init");
  var QRMath = cc11001100_hook("QRMath", function () {
    var EXP_TABLE = cc11001100_hook("EXP_TABLE", new Array(256), "var-init");
    var LOG_TABLE = cc11001100_hook("LOG_TABLE", new Array(256), "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < 8; i += cc11001100_hook("i", 1, "assign")) {
      EXP_TABLE[i] = cc11001100_hook("EXP_TABLE[i]", 1 << i, "assign");
    }
    for (var i = cc11001100_hook("i", 8, "var-init"); i < 256; i += cc11001100_hook("i", 1, "assign")) {
      EXP_TABLE[i] = cc11001100_hook("EXP_TABLE[i]", EXP_TABLE[i - 4] ^ EXP_TABLE[i - 5] ^ EXP_TABLE[i - 6] ^ EXP_TABLE[i - 8], "assign");
    }
    for (var i = cc11001100_hook("i", 0, "var-init"); i < 255; i += cc11001100_hook("i", 1, "assign")) {
      LOG_TABLE[EXP_TABLE[i]] = cc11001100_hook("LOG_TABLE[EXP_TABLE[i]]", i, "assign");
    }
    var _this = cc11001100_hook("_this", {}, "var-init");
    _this.glog = cc11001100_hook("_this.glog", function (n) {
      if (n < 1) {
        throw new Error('glog(' + n + ')');
      }
      return LOG_TABLE[n];
    }, "assign");
    _this.gexp = cc11001100_hook("_this.gexp", function (n) {
      while (n < 0) {
        n += cc11001100_hook("n", 255, "assign");
      }
      while (n >= 256) {
        n -= cc11001100_hook("n", 255, "assign");
      }
      return EXP_TABLE[n];
    }, "assign");
    return _this;
  }(), "var-init");
  function qrPolynomial(num, shift) {
    cc11001100_hook("num", num, "function-parameter");
    cc11001100_hook("shift", shift, "function-parameter");
    if (typeof num.length == 'undefined') {
      throw new Error(num.length + '/' + shift);
    }
    var _num = cc11001100_hook("_num", function () {
      var offset = cc11001100_hook("offset", 0, "var-init");
      while (offset < num.length && num[offset] == 0) {
        offset += cc11001100_hook("offset", 1, "assign");
      }
      var _num = cc11001100_hook("_num", new Array(num.length - offset + shift), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < num.length - offset; i += cc11001100_hook("i", 1, "assign")) {
        _num[i] = cc11001100_hook("_num[i]", num[i + offset], "assign");
      }
      return _num;
    }(), "var-init");
    var _this = cc11001100_hook("_this", {}, "var-init");
    _this.getAt = cc11001100_hook("_this.getAt", function (index) {
      return _num[index];
    }, "assign");
    _this.getLength = cc11001100_hook("_this.getLength", function () {
      return _num.length;
    }, "assign");
    _this.multiply = cc11001100_hook("_this.multiply", function (e) {
      var num = cc11001100_hook("num", new Array(_this.getLength() + e.getLength() - 1), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < _this.getLength(); i += cc11001100_hook("i", 1, "assign")) {
        for (var j = cc11001100_hook("j", 0, "var-init"); j < e.getLength(); j += cc11001100_hook("j", 1, "assign")) {
          num[i + j] ^= cc11001100_hook("num[i + j]", QRMath.gexp(QRMath.glog(_this.getAt(i)) + QRMath.glog(e.getAt(j))), "assign");
        }
      }
      return qrPolynomial(num, 0);
    }, "assign");
    _this.mod = cc11001100_hook("_this.mod", function (e) {
      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }
      var ratio = cc11001100_hook("ratio", QRMath.glog(_this.getAt(0)) - QRMath.glog(e.getAt(0)), "var-init");
      var num = cc11001100_hook("num", new Array(_this.getLength()), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < _this.getLength(); i += cc11001100_hook("i", 1, "assign")) {
        num[i] = cc11001100_hook("num[i]", _this.getAt(i), "assign");
      }
      for (var i = cc11001100_hook("i", 0, "var-init"); i < e.getLength(); i += cc11001100_hook("i", 1, "assign")) {
        num[i] ^= cc11001100_hook("num[i]", QRMath.gexp(QRMath.glog(e.getAt(i)) + ratio), "assign");
      }
      return qrPolynomial(num, 0).mod(e);
    }, "assign");
    return _this;
  }
  ;
  var QRRSBlock = cc11001100_hook("QRRSBlock", function () {
    var RS_BLOCK_TABLE = cc11001100_hook("RS_BLOCK_TABLE", [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16]], "var-init");
    var qrRSBlock = function (totalCount, dataCount) {
      var _this = cc11001100_hook("_this", {}, "var-init");
      _this.totalCount = cc11001100_hook("_this.totalCount", totalCount, "assign");
      _this.dataCount = cc11001100_hook("_this.dataCount", dataCount, "assign");
      return _this;
    };
    var _this = cc11001100_hook("_this", {}, "var-init");
    var getRsBlockTable = function (typeNumber, errorCorrectLevel) {
      switch (errorCorrectLevel) {
        case QRErrorCorrectLevel.L:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
        case QRErrorCorrectLevel.M:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
        case QRErrorCorrectLevel.Q:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
        case QRErrorCorrectLevel.H:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
        default:
          return undefined;
      }
    };
    _this.getRSBlocks = cc11001100_hook("_this.getRSBlocks", function (typeNumber, errorCorrectLevel) {
      var rsBlock = cc11001100_hook("rsBlock", getRsBlockTable(typeNumber, errorCorrectLevel), "var-init");
      if (typeof rsBlock == 'undefined') {
        throw new Error('bad rs block @ typeNumber:' + typeNumber + '/errorCorrectLevel:' + errorCorrectLevel);
      }
      var length = cc11001100_hook("length", rsBlock.length / 3, "var-init");
      var list = cc11001100_hook("list", new Array(), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < length; i += cc11001100_hook("i", 1, "assign")) {
        var count = cc11001100_hook("count", rsBlock[i * 3 + 0], "var-init");
        var totalCount = cc11001100_hook("totalCount", rsBlock[i * 3 + 1], "var-init");
        var dataCount = cc11001100_hook("dataCount", rsBlock[i * 3 + 2], "var-init");
        for (var j = cc11001100_hook("j", 0, "var-init"); j < count; j += cc11001100_hook("j", 1, "assign")) {
          list.push(qrRSBlock(totalCount, dataCount));
        }
      }
      return list;
    }, "assign");
    return _this;
  }(), "var-init");
  var qrBitBuffer = function () {
    var _buffer = cc11001100_hook("_buffer", new Array(), "var-init");
    var _length = cc11001100_hook("_length", 0, "var-init");
    var _this = cc11001100_hook("_this", {}, "var-init");
    _this.getBuffer = cc11001100_hook("_this.getBuffer", function () {
      return _buffer;
    }, "assign");
    _this.getAt = cc11001100_hook("_this.getAt", function (index) {
      var bufIndex = cc11001100_hook("bufIndex", Math.floor(index / 8), "var-init");
      return (_buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    }, "assign");
    _this.put = cc11001100_hook("_this.put", function (num, length) {
      for (var i = cc11001100_hook("i", 0, "var-init"); i < length; i += cc11001100_hook("i", 1, "assign")) {
        _this.putBit((num >>> length - i - 1 & 1) == 1);
      }
    }, "assign");
    _this.getLengthInBits = cc11001100_hook("_this.getLengthInBits", function () {
      return _length;
    }, "assign");
    _this.putBit = cc11001100_hook("_this.putBit", function (bit) {
      var bufIndex = cc11001100_hook("bufIndex", Math.floor(_length / 8), "var-init");
      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }
      if (bit) {
        _buffer[bufIndex] |= cc11001100_hook("_buffer[bufIndex]", 0x80 >>> _length % 8, "assign");
      }
      _length += cc11001100_hook("_length", 1, "assign");
    }, "assign");
    return _this;
  };
  var qr8BitByte = function (data) {
    var _mode = cc11001100_hook("_mode", QRMode.MODE_8BIT_BYTE, "var-init");
    var _data = cc11001100_hook("_data", data, "var-init");
    var _bytes = cc11001100_hook("_bytes", qrcode.stringToBytes(data), "var-init");
    var _this = cc11001100_hook("_this", {}, "var-init");
    _this.getMode = cc11001100_hook("_this.getMode", function () {
      return _mode;
    }, "assign");
    _this.getLength = cc11001100_hook("_this.getLength", function (buffer) {
      return _bytes.length;
    }, "assign");
    _this.write = cc11001100_hook("_this.write", function (buffer) {
      for (var i = cc11001100_hook("i", 0, "var-init"); i < _bytes.length; i += cc11001100_hook("i", 1, "assign")) {
        buffer.put(_bytes[i], 8);
      }
    }, "assign");
    return _this;
  };
  var byteArrayOutputStream = function () {
    var _bytes = cc11001100_hook("_bytes", new Array(), "var-init");
    var _this = cc11001100_hook("_this", {}, "var-init");
    _this.writeByte = cc11001100_hook("_this.writeByte", function (b) {
      _bytes.push(b & 0xff);
    }, "assign");
    _this.writeShort = cc11001100_hook("_this.writeShort", function (i) {
      _this.writeByte(i);
      _this.writeByte(i >>> 8);
    }, "assign");
    _this.writeBytes = cc11001100_hook("_this.writeBytes", function (b, off, len) {
      off = cc11001100_hook("off", off || 0, "assign");
      len = cc11001100_hook("len", len || b.length, "assign");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < len; i += cc11001100_hook("i", 1, "assign")) {
        _this.writeByte(b[i + off]);
      }
    }, "assign");
    _this.writeString = cc11001100_hook("_this.writeString", function (s) {
      for (var i = cc11001100_hook("i", 0, "var-init"); i < s.length; i += cc11001100_hook("i", 1, "assign")) {
        _this.writeByte(s.charCodeAt(i));
      }
    }, "assign");
    _this.toByteArray = cc11001100_hook("_this.toByteArray", function () {
      return _bytes;
    }, "assign");
    _this.toString = cc11001100_hook("_this.toString", function () {
      var s = cc11001100_hook("s", '', "var-init");
      s += cc11001100_hook("s", '[', "assign");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < _bytes.length; i += cc11001100_hook("i", 1, "assign")) {
        if (i > 0) {
          s += cc11001100_hook("s", ',', "assign");
        }
        s += cc11001100_hook("s", _bytes[i], "assign");
      }
      s += cc11001100_hook("s", ']', "assign");
      return s;
    }, "assign");
    return _this;
  };
  var base64EncodeOutputStream = function () {
    var _buffer = cc11001100_hook("_buffer", 0, "var-init");
    var _buflen = cc11001100_hook("_buflen", 0, "var-init");
    var _length = cc11001100_hook("_length", 0, "var-init");
    var _base64 = cc11001100_hook("_base64", '', "var-init");
    var _this = cc11001100_hook("_this", {}, "var-init");
    var writeEncoded = function (b) {
      _base64 += cc11001100_hook("_base64", String.fromCharCode(encode(b & 0x3f)), "assign");
    };
    var encode = function (n) {
      if (n < 0) {} else if (n < 26) {
        return 0x41 + n;
      } else if (n < 52) {
        return 0x61 + (n - 26);
      } else if (n < 62) {
        return 0x30 + (n - 52);
      } else if (n == 62) {
        return 0x2b;
      } else if (n == 63) {
        return 0x2f;
      }
      throw new Error('n:' + n);
    };
    _this.writeByte = cc11001100_hook("_this.writeByte", function (n) {
      _buffer = cc11001100_hook("_buffer", _buffer << 8 | n & 0xff, "assign");
      _buflen += cc11001100_hook("_buflen", 8, "assign");
      _length += cc11001100_hook("_length", 1, "assign");
      while (_buflen >= 6) {
        writeEncoded(_buffer >>> _buflen - 6);
        _buflen -= cc11001100_hook("_buflen", 6, "assign");
      }
    }, "assign");
    _this.flush = cc11001100_hook("_this.flush", function () {
      if (_buflen > 0) {
        writeEncoded(_buffer << 6 - _buflen);
        _buffer = cc11001100_hook("_buffer", 0, "assign");
        _buflen = cc11001100_hook("_buflen", 0, "assign");
      }
      if (_length % 3 != 0) {
        var padlen = cc11001100_hook("padlen", 3 - _length % 3, "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < padlen; i += cc11001100_hook("i", 1, "assign")) {
          _base64 += cc11001100_hook("_base64", '=', "assign");
        }
      }
    }, "assign");
    _this.toString = cc11001100_hook("_this.toString", function () {
      return _base64;
    }, "assign");
    return _this;
  };
  var base64DecodeInputStream = function (str) {
    var _str = cc11001100_hook("_str", str, "var-init");
    var _pos = cc11001100_hook("_pos", 0, "var-init");
    var _buffer = cc11001100_hook("_buffer", 0, "var-init");
    var _buflen = cc11001100_hook("_buflen", 0, "var-init");
    var _this = cc11001100_hook("_this", {}, "var-init");
    _this.read = cc11001100_hook("_this.read", function () {
      while (_buflen < 8) {
        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }
          throw new Error('unexpected end of file./' + _buflen);
        }
        var c = cc11001100_hook("c", _str.charAt(_pos), "var-init");
        _pos += cc11001100_hook("_pos", 1, "assign");
        if (c == '=') {
          _buflen = cc11001100_hook("_buflen", 0, "assign");
          return -1;
        } else if (c.match(/^\s$/)) {
          continue;
        }
        _buffer = cc11001100_hook("_buffer", _buffer << 6 | decode(c.charCodeAt(0)), "assign");
        _buflen += cc11001100_hook("_buflen", 6, "assign");
      }
      var n = cc11001100_hook("n", _buffer >>> _buflen - 8 & 0xff, "var-init");
      _buflen -= cc11001100_hook("_buflen", 8, "assign");
      return n;
    }, "assign");
    var decode = function (c) {
      if (0x41 <= c && c <= 0x5a) {
        return c - 0x41;
      } else if (0x61 <= c && c <= 0x7a) {
        return c - 0x61 + 26;
      } else if (0x30 <= c && c <= 0x39) {
        return c - 0x30 + 52;
      } else if (c == 0x2b) {
        return 62;
      } else if (c == 0x2f) {
        return 63;
      } else {
        throw new Error('c:' + c);
      }
    };
    return _this;
  };
  var gifImage = function (width, height) {
    var _width = cc11001100_hook("_width", width, "var-init");
    var _height = cc11001100_hook("_height", height, "var-init");
    var _data = cc11001100_hook("_data", new Array(width * height), "var-init");
    var _this = cc11001100_hook("_this", {}, "var-init");
    _this.setPixel = cc11001100_hook("_this.setPixel", function (x, y, pixel) {
      _data[y * _width + x] = cc11001100_hook("_data[y * _width + x]", pixel, "assign");
    }, "assign");
    _this.write = cc11001100_hook("_this.write", function (out) {
      out.writeString('GIF87a');
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0x80);
      out.writeByte(0);
      out.writeByte(0);
      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeString(',');
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0);
      var lzwMinCodeSize = cc11001100_hook("lzwMinCodeSize", 2, "var-init");
      var raster = cc11001100_hook("raster", getLZWRaster(lzwMinCodeSize), "var-init");
      out.writeByte(lzwMinCodeSize);
      var offset = cc11001100_hook("offset", 0, "var-init");
      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += cc11001100_hook("offset", 255, "assign");
      }
      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0x00);
      out.writeString(';');
    }, "assign");
    var bitOutputStream = function (out) {
      var _out = cc11001100_hook("_out", out, "var-init");
      var _bitLength = cc11001100_hook("_bitLength", 0, "var-init");
      var _bitBuffer = cc11001100_hook("_bitBuffer", 0, "var-init");
      var _this = cc11001100_hook("_this", {}, "var-init");
      _this.write = cc11001100_hook("_this.write", function (data, length) {
        if (data >>> length != 0) {
          throw new Error('length over');
        }
        while (_bitLength + length >= 8) {
          _out.writeByte(0xff & (data << _bitLength | _bitBuffer));
          length -= cc11001100_hook("length", 8 - _bitLength, "assign");
          data >>>= cc11001100_hook("data", 8 - _bitLength, "assign");
          _bitBuffer = cc11001100_hook("_bitBuffer", 0, "assign");
          _bitLength = cc11001100_hook("_bitLength", 0, "assign");
        }
        _bitBuffer = cc11001100_hook("_bitBuffer", data << _bitLength | _bitBuffer, "assign");
        _bitLength = cc11001100_hook("_bitLength", _bitLength + length, "assign");
      }, "assign");
      _this.flush = cc11001100_hook("_this.flush", function () {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      }, "assign");
      return _this;
    };
    var getLZWRaster = function (lzwMinCodeSize) {
      var clearCode = cc11001100_hook("clearCode", 1 << lzwMinCodeSize, "var-init");
      var endCode = cc11001100_hook("endCode", (1 << lzwMinCodeSize) + 1, "var-init");
      var bitLength = cc11001100_hook("bitLength", lzwMinCodeSize + 1, "var-init");
      var table = cc11001100_hook("table", lzwTable(), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < clearCode; i += cc11001100_hook("i", 1, "assign")) {
        table.add(String.fromCharCode(i));
      }
      table.add(String.fromCharCode(clearCode));
      table.add(String.fromCharCode(endCode));
      var byteOut = cc11001100_hook("byteOut", byteArrayOutputStream(), "var-init");
      var bitOut = cc11001100_hook("bitOut", bitOutputStream(byteOut), "var-init");
      bitOut.write(clearCode, bitLength);
      var dataIndex = cc11001100_hook("dataIndex", 0, "var-init");
      var s = cc11001100_hook("s", String.fromCharCode(_data[dataIndex]), "var-init");
      dataIndex += cc11001100_hook("dataIndex", 1, "assign");
      while (dataIndex < _data.length) {
        var c = cc11001100_hook("c", String.fromCharCode(_data[dataIndex]), "var-init");
        dataIndex += cc11001100_hook("dataIndex", 1, "assign");
        if (table.contains(s + c)) {
          s = cc11001100_hook("s", s + c, "assign");
        } else {
          bitOut.write(table.indexOf(s), bitLength);
          if (table.size() < 0xfff) {
            if (table.size() == 1 << bitLength) {
              bitLength += cc11001100_hook("bitLength", 1, "assign");
            }
            table.add(s + c);
          }
          s = cc11001100_hook("s", c, "assign");
        }
      }
      bitOut.write(table.indexOf(s), bitLength);
      bitOut.write(endCode, bitLength);
      bitOut.flush();
      return byteOut.toByteArray();
    };
    var lzwTable = function () {
      var _map = cc11001100_hook("_map", {}, "var-init");
      var _size = cc11001100_hook("_size", 0, "var-init");
      var _this = cc11001100_hook("_this", {}, "var-init");
      _this.add = cc11001100_hook("_this.add", function (key) {
        if (_this.contains(key)) {
          throw new Error('dup key:' + key);
        }
        _map[key] = cc11001100_hook("_map[key]", _size, "assign");
        _size += cc11001100_hook("_size", 1, "assign");
      }, "assign");
      _this.size = cc11001100_hook("_this.size", function () {
        return _size;
      }, "assign");
      _this.indexOf = cc11001100_hook("_this.indexOf", function (key) {
        return _map[key];
      }, "assign");
      _this.contains = cc11001100_hook("_this.contains", function (key) {
        return typeof _map[key] != 'undefined';
      }, "assign");
      return _this;
    };
    return _this;
  };
  var createImgTag = function (width, height, getPixel, alt) {
    var gif = cc11001100_hook("gif", gifImage(width, height), "var-init");
    for (var y = cc11001100_hook("y", 0, "var-init"); y < height; y += cc11001100_hook("y", 1, "assign")) {
      for (var x = cc11001100_hook("x", 0, "var-init"); x < width; x += cc11001100_hook("x", 1, "assign")) {
        gif.setPixel(x, y, getPixel(x, y));
      }
    }
    var b = cc11001100_hook("b", byteArrayOutputStream(), "var-init");
    gif.write(b);
    var base64 = cc11001100_hook("base64", base64EncodeOutputStream(), "var-init");
    var bytes = cc11001100_hook("bytes", b.toByteArray(), "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < bytes.length; i += cc11001100_hook("i", 1, "assign")) {
      base64.writeByte(bytes[i]);
    }
    base64.flush();
    var img = cc11001100_hook("img", '', "var-init");
    img += cc11001100_hook("img", '<img', "assign");
    img += cc11001100_hook("img", '\u0020src="', "assign");
    img += cc11001100_hook("img", 'data:image/gif;base64,', "assign");
    img += cc11001100_hook("img", base64, "assign");
    img += cc11001100_hook("img", '"', "assign");
    img += cc11001100_hook("img", '\u0020width="', "assign");
    img += cc11001100_hook("img", width, "assign");
    img += cc11001100_hook("img", '"', "assign");
    img += cc11001100_hook("img", '\u0020height="', "assign");
    img += cc11001100_hook("img", height, "assign");
    img += cc11001100_hook("img", '"', "assign");
    if (alt) {
      img += cc11001100_hook("img", '\u0020alt="', "assign");
      img += cc11001100_hook("img", alt, "assign");
      img += cc11001100_hook("img", '"', "assign");
    }
    img += cc11001100_hook("img", '/>', "assign");
    return img;
  };
  return qrcode;
}(), "var-init"); /*  |xGv00|ca8fc6bde81a353e7cede123b304bdb9 */