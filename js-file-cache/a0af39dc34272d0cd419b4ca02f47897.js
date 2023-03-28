var hexcase = cc11001100_hook("hexcase", 0, "var-init"); /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad = cc11001100_hook("b64pad", "", "var-init"); /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz = cc11001100_hook("chrsz", 8, "var-init"); /* bits per input character. 8 - ASCII; 16 - Unicode      */
function hex_md5(s) {
  cc11001100_hook("s", s, "function-parameter");
  return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}
function b64_md5(s) {
  cc11001100_hook("s", s, "function-parameter");
  return binl2b64(core_md5(str2binl(s), s.length * chrsz));
}
function str_md5(s) {
  cc11001100_hook("s", s, "function-parameter");
  return binl2str(core_md5(str2binl(s), s.length * chrsz));
}
function hex_hmac_md5(key, data) {
  cc11001100_hook("key", key, "function-parameter");
  cc11001100_hook("data", data, "function-parameter");
  return binl2hex(core_hmac_md5(key, data));
}
function b64_hmac_md5(key, data) {
  cc11001100_hook("key", key, "function-parameter");
  cc11001100_hook("data", data, "function-parameter");
  return binl2b64(core_hmac_md5(key, data));
}
function str_hmac_md5(key, data) {
  cc11001100_hook("key", key, "function-parameter");
  cc11001100_hook("data", data, "function-parameter");
  return binl2str(core_hmac_md5(key, data));
}

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test() {
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len) {
  cc11001100_hook("x", x, "function-parameter");
  cc11001100_hook("len", len, "function-parameter");
  /* append padding */
  x[len >> 5] |= cc11001100_hook("x[len >> 5]", 0x80 << len % 32, "assign");
  x[(len + 64 >>> 9 << 4) + 14] = cc11001100_hook("x[(len + 64 >>> 9 << 4) + 14]", len, "assign");
  var a = cc11001100_hook("a", 1732584193, "var-init");
  var b = cc11001100_hook("b", -271733879, "var-init");
  var c = cc11001100_hook("c", -1732584194, "var-init");
  var d = cc11001100_hook("d", 271733878, "var-init");
  for (var i = cc11001100_hook("i", 0, "var-init"); i < x.length; i += cc11001100_hook("i", 16, "assign")) {
    var olda = cc11001100_hook("olda", a, "var-init");
    var oldb = cc11001100_hook("oldb", b, "var-init");
    var oldc = cc11001100_hook("oldc", c, "var-init");
    var oldd = cc11001100_hook("oldd", d, "var-init");
    a = cc11001100_hook("a", md5_ff(a, b, c, d, x[i + 0], 7, -680876936), "assign");
    d = cc11001100_hook("d", md5_ff(d, a, b, c, x[i + 1], 12, -389564586), "assign");
    c = cc11001100_hook("c", md5_ff(c, d, a, b, x[i + 2], 17, 606105819), "assign");
    b = cc11001100_hook("b", md5_ff(b, c, d, a, x[i + 3], 22, -1044525330), "assign");
    a = cc11001100_hook("a", md5_ff(a, b, c, d, x[i + 4], 7, -176418897), "assign");
    d = cc11001100_hook("d", md5_ff(d, a, b, c, x[i + 5], 12, 1200080426), "assign");
    c = cc11001100_hook("c", md5_ff(c, d, a, b, x[i + 6], 17, -1473231341), "assign");
    b = cc11001100_hook("b", md5_ff(b, c, d, a, x[i + 7], 22, -45705983), "assign");
    a = cc11001100_hook("a", md5_ff(a, b, c, d, x[i + 8], 7, 1770035416), "assign");
    d = cc11001100_hook("d", md5_ff(d, a, b, c, x[i + 9], 12, -1958414417), "assign");
    c = cc11001100_hook("c", md5_ff(c, d, a, b, x[i + 10], 17, -42063), "assign");
    b = cc11001100_hook("b", md5_ff(b, c, d, a, x[i + 11], 22, -1990404162), "assign");
    a = cc11001100_hook("a", md5_ff(a, b, c, d, x[i + 12], 7, 1804603682), "assign");
    d = cc11001100_hook("d", md5_ff(d, a, b, c, x[i + 13], 12, -40341101), "assign");
    c = cc11001100_hook("c", md5_ff(c, d, a, b, x[i + 14], 17, -1502002290), "assign");
    b = cc11001100_hook("b", md5_ff(b, c, d, a, x[i + 15], 22, 1236535329), "assign");
    a = cc11001100_hook("a", md5_gg(a, b, c, d, x[i + 1], 5, -165796510), "assign");
    d = cc11001100_hook("d", md5_gg(d, a, b, c, x[i + 6], 9, -1069501632), "assign");
    c = cc11001100_hook("c", md5_gg(c, d, a, b, x[i + 11], 14, 643717713), "assign");
    b = cc11001100_hook("b", md5_gg(b, c, d, a, x[i + 0], 20, -373897302), "assign");
    a = cc11001100_hook("a", md5_gg(a, b, c, d, x[i + 5], 5, -701558691), "assign");
    d = cc11001100_hook("d", md5_gg(d, a, b, c, x[i + 10], 9, 38016083), "assign");
    c = cc11001100_hook("c", md5_gg(c, d, a, b, x[i + 15], 14, -660478335), "assign");
    b = cc11001100_hook("b", md5_gg(b, c, d, a, x[i + 4], 20, -405537848), "assign");
    a = cc11001100_hook("a", md5_gg(a, b, c, d, x[i + 9], 5, 568446438), "assign");
    d = cc11001100_hook("d", md5_gg(d, a, b, c, x[i + 14], 9, -1019803690), "assign");
    c = cc11001100_hook("c", md5_gg(c, d, a, b, x[i + 3], 14, -187363961), "assign");
    b = cc11001100_hook("b", md5_gg(b, c, d, a, x[i + 8], 20, 1163531501), "assign");
    a = cc11001100_hook("a", md5_gg(a, b, c, d, x[i + 13], 5, -1444681467), "assign");
    d = cc11001100_hook("d", md5_gg(d, a, b, c, x[i + 2], 9, -51403784), "assign");
    c = cc11001100_hook("c", md5_gg(c, d, a, b, x[i + 7], 14, 1735328473), "assign");
    b = cc11001100_hook("b", md5_gg(b, c, d, a, x[i + 12], 20, -1926607734), "assign");
    a = cc11001100_hook("a", md5_hh(a, b, c, d, x[i + 5], 4, -378558), "assign");
    d = cc11001100_hook("d", md5_hh(d, a, b, c, x[i + 8], 11, -2022574463), "assign");
    c = cc11001100_hook("c", md5_hh(c, d, a, b, x[i + 11], 16, 1839030562), "assign");
    b = cc11001100_hook("b", md5_hh(b, c, d, a, x[i + 14], 23, -35309556), "assign");
    a = cc11001100_hook("a", md5_hh(a, b, c, d, x[i + 1], 4, -1530992060), "assign");
    d = cc11001100_hook("d", md5_hh(d, a, b, c, x[i + 4], 11, 1272893353), "assign");
    c = cc11001100_hook("c", md5_hh(c, d, a, b, x[i + 7], 16, -155497632), "assign");
    b = cc11001100_hook("b", md5_hh(b, c, d, a, x[i + 10], 23, -1094730640), "assign");
    a = cc11001100_hook("a", md5_hh(a, b, c, d, x[i + 13], 4, 681279174), "assign");
    d = cc11001100_hook("d", md5_hh(d, a, b, c, x[i + 0], 11, -358537222), "assign");
    c = cc11001100_hook("c", md5_hh(c, d, a, b, x[i + 3], 16, -722521979), "assign");
    b = cc11001100_hook("b", md5_hh(b, c, d, a, x[i + 6], 23, 76029189), "assign");
    a = cc11001100_hook("a", md5_hh(a, b, c, d, x[i + 9], 4, -640364487), "assign");
    d = cc11001100_hook("d", md5_hh(d, a, b, c, x[i + 12], 11, -421815835), "assign");
    c = cc11001100_hook("c", md5_hh(c, d, a, b, x[i + 15], 16, 530742520), "assign");
    b = cc11001100_hook("b", md5_hh(b, c, d, a, x[i + 2], 23, -995338651), "assign");
    a = cc11001100_hook("a", md5_ii(a, b, c, d, x[i + 0], 6, -198630844), "assign");
    d = cc11001100_hook("d", md5_ii(d, a, b, c, x[i + 7], 10, 1126891415), "assign");
    c = cc11001100_hook("c", md5_ii(c, d, a, b, x[i + 14], 15, -1416354905), "assign");
    b = cc11001100_hook("b", md5_ii(b, c, d, a, x[i + 5], 21, -57434055), "assign");
    a = cc11001100_hook("a", md5_ii(a, b, c, d, x[i + 12], 6, 1700485571), "assign");
    d = cc11001100_hook("d", md5_ii(d, a, b, c, x[i + 3], 10, -1894986606), "assign");
    c = cc11001100_hook("c", md5_ii(c, d, a, b, x[i + 10], 15, -1051523), "assign");
    b = cc11001100_hook("b", md5_ii(b, c, d, a, x[i + 1], 21, -2054922799), "assign");
    a = cc11001100_hook("a", md5_ii(a, b, c, d, x[i + 8], 6, 1873313359), "assign");
    d = cc11001100_hook("d", md5_ii(d, a, b, c, x[i + 15], 10, -30611744), "assign");
    c = cc11001100_hook("c", md5_ii(c, d, a, b, x[i + 6], 15, -1560198380), "assign");
    b = cc11001100_hook("b", md5_ii(b, c, d, a, x[i + 13], 21, 1309151649), "assign");
    a = cc11001100_hook("a", md5_ii(a, b, c, d, x[i + 4], 6, -145523070), "assign");
    d = cc11001100_hook("d", md5_ii(d, a, b, c, x[i + 11], 10, -1120210379), "assign");
    c = cc11001100_hook("c", md5_ii(c, d, a, b, x[i + 2], 15, 718787259), "assign");
    b = cc11001100_hook("b", md5_ii(b, c, d, a, x[i + 9], 21, -343485551), "assign");
    a = cc11001100_hook("a", safe_add(a, olda), "assign");
    b = cc11001100_hook("b", safe_add(b, oldb), "assign");
    c = cc11001100_hook("c", safe_add(c, oldc), "assign");
    d = cc11001100_hook("d", safe_add(d, oldd), "assign");
  }
  return Array(a, b, c, d);
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t) {
  cc11001100_hook("q", q, "function-parameter");
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("b", b, "function-parameter");
  cc11001100_hook("x", x, "function-parameter");
  cc11001100_hook("s", s, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t) {
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("b", b, "function-parameter");
  cc11001100_hook("c", c, "function-parameter");
  cc11001100_hook("d", d, "function-parameter");
  cc11001100_hook("x", x, "function-parameter");
  cc11001100_hook("s", s, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  return md5_cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("b", b, "function-parameter");
  cc11001100_hook("c", c, "function-parameter");
  cc11001100_hook("d", d, "function-parameter");
  cc11001100_hook("x", x, "function-parameter");
  cc11001100_hook("s", s, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  return md5_cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("b", b, "function-parameter");
  cc11001100_hook("c", c, "function-parameter");
  cc11001100_hook("d", d, "function-parameter");
  cc11001100_hook("x", x, "function-parameter");
  cc11001100_hook("s", s, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
  cc11001100_hook("a", a, "function-parameter");
  cc11001100_hook("b", b, "function-parameter");
  cc11001100_hook("c", c, "function-parameter");
  cc11001100_hook("d", d, "function-parameter");
  cc11001100_hook("x", x, "function-parameter");
  cc11001100_hook("s", s, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data) {
  cc11001100_hook("key", key, "function-parameter");
  cc11001100_hook("data", data, "function-parameter");
  var bkey = cc11001100_hook("bkey", str2binl(key), "var-init");
  if (bkey.length > 16) bkey = cc11001100_hook("bkey", core_md5(bkey, key.length * chrsz), "assign");
  var ipad = cc11001100_hook("ipad", Array(16), "var-init"),
    opad = cc11001100_hook("opad", Array(16), "var-init");
  for (var i = cc11001100_hook("i", 0, "var-init"); i < 16; i++) {
    ipad[i] = cc11001100_hook("ipad[i]", bkey[i] ^ 0x36363636, "assign");
    opad[i] = cc11001100_hook("opad[i]", bkey[i] ^ 0x5C5C5C5C, "assign");
  }
  var hash = cc11001100_hook("hash", core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz), "var-init");
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y) {
  cc11001100_hook("x", x, "function-parameter");
  cc11001100_hook("y", y, "function-parameter");
  var lsw = cc11001100_hook("lsw", (x & 0xFFFF) + (y & 0xFFFF), "var-init");
  var msw = cc11001100_hook("msw", (x >> 16) + (y >> 16) + (lsw >> 16), "var-init");
  return msw << 16 | lsw & 0xFFFF;
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt) {
  cc11001100_hook("num", num, "function-parameter");
  cc11001100_hook("cnt", cnt, "function-parameter");
  return num << cnt | num >>> 32 - cnt;
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str) {
  cc11001100_hook("str", str, "function-parameter");
  var bin = cc11001100_hook("bin", Array(), "var-init");
  var mask = cc11001100_hook("mask", (1 << chrsz) - 1, "var-init");
  for (var i = cc11001100_hook("i", 0, "var-init"); i < str.length * chrsz; i += cc11001100_hook("i", chrsz, "assign")) bin[i >> 5] |= cc11001100_hook("bin[i >> 5]", (str.charCodeAt(i / chrsz) & mask) << i % 32, "assign");
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin) {
  cc11001100_hook("bin", bin, "function-parameter");
  var str = cc11001100_hook("str", "", "var-init");
  var mask = cc11001100_hook("mask", (1 << chrsz) - 1, "var-init");
  for (var i = cc11001100_hook("i", 0, "var-init"); i < bin.length * 32; i += cc11001100_hook("i", chrsz, "assign")) str += cc11001100_hook("str", String.fromCharCode(bin[i >> 5] >>> i % 32 & mask), "assign");
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray) {
  cc11001100_hook("binarray", binarray, "function-parameter");
  var hex_tab = cc11001100_hook("hex_tab", hexcase ? "0123456789ABCDEF" : "0123456789abcdef", "var-init");
  var str = cc11001100_hook("str", "", "var-init");
  for (var i = cc11001100_hook("i", 0, "var-init"); i < binarray.length * 4; i++) {
    str += cc11001100_hook("str", hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF), "assign");
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray) {
  cc11001100_hook("binarray", binarray, "function-parameter");
  var tab = cc11001100_hook("tab", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "var-init");
  var str = cc11001100_hook("str", "", "var-init");
  for (var i = cc11001100_hook("i", 0, "var-init"); i < binarray.length * 4; i += cc11001100_hook("i", 3, "assign")) {
    var triplet = cc11001100_hook("triplet", (binarray[i >> 2] >> 8 * (i % 4) & 0xFF) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 0xFF) << 8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 0xFF, "var-init");
    for (var j = cc11001100_hook("j", 0, "var-init"); j < 4; j++) {
      if (i * 8 + j * 6 > binarray.length * 32) str += cc11001100_hook("str", b64pad, "assign");else str += cc11001100_hook("str", tab.charAt(triplet >> 6 * (3 - j) & 0x3F), "assign");
    }
  }
  return str;
}