//base64加密 解密

/* //1.加密  
var result = Base.encode('125中文');  //--> "MTI15Lit5paH"
  
//2.解密  
var result2 = Base.decode(result); //--> '125中文'
*/

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = cc11001100_hook("module.exports", factory(), "assign");
  } else {
    root.Base = cc11001100_hook("root.Base", factory(), "assign");
  }
})(this, function () {
  'use strict';

  function Base64() {
    // private property
    this._keyStr = cc11001100_hook("this._keyStr", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", "assign");
  }
  //public method for encoding
  Base64.prototype.encode = cc11001100_hook("Base64.prototype.encode", function (input) {
    var output = cc11001100_hook("output", "", "var-init"),
      chr1,
      chr2,
      chr3,
      enc1,
      enc2,
      enc3,
      enc4,
      i = cc11001100_hook("i", 0, "var-init");
    input = cc11001100_hook("input", this._utf8_encode(input), "assign");
    while (i < input.length) {
      chr1 = cc11001100_hook("chr1", input.charCodeAt(i++), "assign");
      chr2 = cc11001100_hook("chr2", input.charCodeAt(i++), "assign");
      chr3 = cc11001100_hook("chr3", input.charCodeAt(i++), "assign");
      enc1 = cc11001100_hook("enc1", chr1 >> 2, "assign");
      enc2 = cc11001100_hook("enc2", (chr1 & 3) << 4 | chr2 >> 4, "assign");
      enc3 = cc11001100_hook("enc3", (chr2 & 15) << 2 | chr3 >> 6, "assign");
      enc4 = cc11001100_hook("enc4", chr3 & 63, "assign");
      if (isNaN(chr2)) {
        enc3 = cc11001100_hook("enc3", enc4 = cc11001100_hook("enc4", 64, "assign"), "assign");
      } else if (isNaN(chr3)) {
        enc4 = cc11001100_hook("enc4", 64, "assign");
      }
      output = cc11001100_hook("output", output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4), "assign");
    }
    return output;
  }, "assign");

  // public method for decoding
  Base64.prototype.decode = cc11001100_hook("Base64.prototype.decode", function (input) {
    var output = cc11001100_hook("output", "", "var-init"),
      chr1,
      chr2,
      chr3,
      enc1,
      enc2,
      enc3,
      enc4,
      i = cc11001100_hook("i", 0, "var-init");
    input = cc11001100_hook("input", input.replace(/[^A-Za-z0-9\+\/\=]/g, ""), "assign");
    while (i < input.length) {
      enc1 = cc11001100_hook("enc1", this._keyStr.indexOf(input.charAt(i++)), "assign");
      enc2 = cc11001100_hook("enc2", this._keyStr.indexOf(input.charAt(i++)), "assign");
      enc3 = cc11001100_hook("enc3", this._keyStr.indexOf(input.charAt(i++)), "assign");
      enc4 = cc11001100_hook("enc4", this._keyStr.indexOf(input.charAt(i++)), "assign");
      chr1 = cc11001100_hook("chr1", enc1 << 2 | enc2 >> 4, "assign");
      chr2 = cc11001100_hook("chr2", (enc2 & 15) << 4 | enc3 >> 2, "assign");
      chr3 = cc11001100_hook("chr3", (enc3 & 3) << 6 | enc4, "assign");
      output = cc11001100_hook("output", output + String.fromCharCode(chr1), "assign");
      if (enc3 != 64) {
        output = cc11001100_hook("output", output + String.fromCharCode(chr2), "assign");
      }
      if (enc4 != 64) {
        output = cc11001100_hook("output", output + String.fromCharCode(chr3), "assign");
      }
    }
    output = cc11001100_hook("output", this._utf8_decode(output), "assign");
    return output;
  }, "assign");
  // private method for UTF-8 encoding
  Base64.prototype._utf8_encode = cc11001100_hook("Base64.prototype._utf8_encode", function (string) {
    string = cc11001100_hook("string", string.replace(/\r\n/g, "\n"), "assign");
    var utftext = cc11001100_hook("utftext", "", "var-init");
    for (var n = cc11001100_hook("n", 0, "var-init"); n < string.length; n++) {
      var c = cc11001100_hook("c", string.charCodeAt(n), "var-init");
      if (c < 128) {
        utftext += cc11001100_hook("utftext", String.fromCharCode(c), "assign");
      } else if (c > 127 && c < 2048) {
        utftext += cc11001100_hook("utftext", String.fromCharCode(c >> 6 | 192), "assign");
        utftext += cc11001100_hook("utftext", String.fromCharCode(c & 63 | 128), "assign");
      } else {
        utftext += cc11001100_hook("utftext", String.fromCharCode(c >> 12 | 224), "assign");
        utftext += cc11001100_hook("utftext", String.fromCharCode(c >> 6 & 63 | 128), "assign");
        utftext += cc11001100_hook("utftext", String.fromCharCode(c & 63 | 128), "assign");
      }
    }
    return utftext;
  }, "assign");

  // private method for UTF-8 decoding
  Base64.prototype._utf8_decode = cc11001100_hook("Base64.prototype._utf8_decode", function (utftext) {
    var string = cc11001100_hook("string", "", "var-init"),
      i = cc11001100_hook("i", 0, "var-init"),
      c = cc11001100_hook("c", 0, "var-init"),
      c1 = cc11001100_hook("c1", 0, "var-init"),
      c2 = cc11001100_hook("c2", 0, "var-init"),
      c3 = cc11001100_hook("c3", 0, "var-init");
    while (i < utftext.length) {
      c = cc11001100_hook("c", utftext.charCodeAt(i), "assign");
      if (c < 128) {
        string += cc11001100_hook("string", String.fromCharCode(c), "assign");
        i++;
      } else if (c > 191 && c < 224) {
        c2 = cc11001100_hook("c2", utftext.charCodeAt(i + 1), "assign");
        string += cc11001100_hook("string", String.fromCharCode((c & 31) << 6 | c2 & 63), "assign");
        i += cc11001100_hook("i", 2, "assign");
      } else {
        c2 = cc11001100_hook("c2", utftext.charCodeAt(i + 1), "assign");
        c3 = cc11001100_hook("c3", utftext.charCodeAt(i + 2), "assign");
        string += cc11001100_hook("string", String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63), "assign");
        i += cc11001100_hook("i", 3, "assign");
      }
    }
    return string;
  }, "assign");
  var Base = cc11001100_hook("Base", new Base64(), "var-init");
  return Base;
});