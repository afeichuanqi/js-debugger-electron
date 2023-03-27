define('amd_modules/@baidu/video-meeting/dist/index', ['require', 'san', 'tslib'], function (require, t, e) {
  return function (t) {
    var e = cc11001100_hook("e", {}, "var-init");
    function n(a) {
      cc11001100_hook("a", a, "function-parameter");
      if (e[a]) return e[a].exports;
      var i = cc11001100_hook("i", e[a] = cc11001100_hook("e[a]", {
        i: cc11001100_hook("i", a, "object-key-init"),
        l: cc11001100_hook("l", !1, "object-key-init"),
        exports: {}
      }, "assign"), "var-init");
      return t[a].call(i.exports, i, i.exports, n), i.l = cc11001100_hook("i.l", !0, "assign"), i.exports;
    }
    return n.m = cc11001100_hook("n.m", t, "assign"), n.c = cc11001100_hook("n.c", e, "assign"), n.d = cc11001100_hook("n.d", function (t, e, a) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: cc11001100_hook("get", a, "object-key-init")
      });
    }, "assign"), n.r = cc11001100_hook("n.r", function (t) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: cc11001100_hook("value", 'Module', "object-key-init")
      }), Object.defineProperty(t, '__esModule', {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
    }, "assign"), n.t = cc11001100_hook("n.t", function (t, e) {
      if (1 & e && (t = cc11001100_hook("t", n(t), "assign")), 8 & e) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var a = cc11001100_hook("a", Object.create(null), "var-init");
      if (n.r(a), Object.defineProperty(a, 'default', {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        value: cc11001100_hook("value", t, "object-key-init")
      }), 2 & e && 'string' != typeof t) for (var i in t) n.d(a, i, function (e) {
        return t[e];
      }.bind(null, i));
      return a;
    }, "assign"), n.n = cc11001100_hook("n.n", function (t) {
      var e = cc11001100_hook("e", t && t.__esModule ? function () {
        return t['default'];
      } : function () {
        return t;
      }, "var-init");
      return n.d(e, 'a', e), e;
    }, "assign"), n.o = cc11001100_hook("n.o", function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, "assign"), n.p = cc11001100_hook("n.p", '', "assign"), n(n.s = cc11001100_hook("n.s", 36, "assign"));
  }([function (e, n) {
    e.exports = cc11001100_hook("e.exports", t, "assign");
  }, function (t, e, n) {
    var a;
    (a = cc11001100_hook("a", function () {
      'use strict';

      function e(t) {
        '@babel/helpers - typeof';

        cc11001100_hook("t", t, "function-parameter");
        return (e = cc11001100_hook("e", 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        }, "assign"))(t);
      }
      var a = cc11001100_hook("a", n(0).defineComponent, "var-init");
      function i(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        for (var n = cc11001100_hook("n", {}, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < e.length; a++) o(n, e[a]);
        var i = cc11001100_hook("i", t.initData, "var-init");
        t.initData = cc11001100_hook("t.initData", i ? function () {
          return o({}, i.call(this), {
            $style: cc11001100_hook("$style", n, "object-key-init")
          });
        } : function () {
          return n;
        }, "assign");
      }
      function o(t) {
        cc11001100_hook("t", t, "function-parameter");
        if (null === t || t === undefined) throw new TypeError('Cannot convert undefined or null to object');
        for (var e = cc11001100_hook("e", Object(t), "var-init"), n = cc11001100_hook("n", 1, "var-init"); n < arguments.length; n++) {
          var a = cc11001100_hook("a", arguments[n], "var-init");
          if (null !== a && a !== undefined) for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = cc11001100_hook("e[i]", a[i], "assign"));
        }
        return e;
      }
      t.exports = cc11001100_hook("t.exports", function (t, n, o) {
        for (var r = cc11001100_hook("r", function (t) {
            var e = cc11001100_hook("e", [t], "var-init");
            'function' == typeof t && (e.push(t.prototype), t.prototype.constructor && e.push(t.prototype.constructor.prototype));
            return e;
          }(t), "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < r.length; s++) n && ('string' == typeof n ? r[s].template = cc11001100_hook("r[s].template", n, "assign") : n instanceof Array ? r[s].aPack = cc11001100_hook("r[s].aPack", n, "assign") : r[s].aNode = cc11001100_hook("r[s].aNode", n, "assign")), o.length && i(r[s], o);
        return 'object' === e(t) ? a(t) : t;
      }, "assign");
    }.apply(e, []), "assign")) === undefined || (t.exports = cc11001100_hook("t.exports", a, "assign"));
  }, function (t, e, n) {
    'use strict';

    var a = cc11001100_hook("a", function () {
        var t;
        return function () {
          return void 0 === t && (t = cc11001100_hook("t", Boolean(window && document && document.all && !window.atob), "assign")), t;
        };
      }(), "var-init"),
      i = cc11001100_hook("i", function () {
        var t = cc11001100_hook("t", {}, "var-init");
        return function (e) {
          if ('undefined' == typeof t[e]) {
            var n = cc11001100_hook("n", document.querySelector(e), "var-init");
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = cc11001100_hook("n", n.contentDocument.head, "assign");
            } catch (a) {
              n = cc11001100_hook("n", null, "assign");
            }
            t[e] = cc11001100_hook("t[e]", n, "assign");
          }
          return t[e];
        };
      }(), "var-init"),
      o = cc11001100_hook("o", [], "var-init");
    function r(t) {
      cc11001100_hook("t", t, "function-parameter");
      for (var e = cc11001100_hook("e", -1, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < o.length; n++) if (o[n].identifier === t) {
        e = cc11001100_hook("e", n, "assign");
        break;
      }
      return e;
    }
    function s(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      for (var n = cc11001100_hook("n", {}, "var-init"), a = cc11001100_hook("a", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t.length; i++) {
        var s = cc11001100_hook("s", t[i], "var-init"),
          c = cc11001100_hook("c", e.base ? s[0] + e.base : s[0], "var-init"),
          l = cc11001100_hook("l", n[c] || 0, "var-init"),
          p = cc11001100_hook("p", ''.concat(c, ' ').concat(l), "var-init");
        n[c] = cc11001100_hook("n[c]", l + 1, "assign");
        var d = cc11001100_hook("d", r(p), "var-init"),
          u = cc11001100_hook("u", {
            css: cc11001100_hook("css", s[1], "object-key-init"),
            media: cc11001100_hook("media", s[2], "object-key-init"),
            sourceMap: cc11001100_hook("sourceMap", s[3], "object-key-init")
          }, "var-init");
        -1 !== d ? (o[d].references++, o[d].updater(u)) : o.push({
          identifier: cc11001100_hook("identifier", p, "object-key-init"),
          updater: cc11001100_hook("updater", h(u, e), "object-key-init"),
          references: cc11001100_hook("references", 1, "object-key-init")
        }), a.push(p);
      }
      return a;
    }
    function c(t) {
      cc11001100_hook("t", t, "function-parameter");
      var e = cc11001100_hook("e", document.createElement('style'), "var-init"),
        a = cc11001100_hook("a", t.attributes || {}, "var-init");
      if ('undefined' == typeof a.nonce) {
        var o = cc11001100_hook("o", n.nc, "var-init");
        o && (a.nonce = cc11001100_hook("a.nonce", o, "assign"));
      }
      if (Object.keys(a).forEach(function (t) {
        e.setAttribute(t, a[t]);
      }), 'function' == typeof t.insert) t.insert(e);else {
        var r = cc11001100_hook("r", i(t.insert || 'head'), "var-init");
        if (!r) throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.');
        r.appendChild(e);
      }
      return e;
    }
    var l = cc11001100_hook("l", function () {
      var t = cc11001100_hook("t", [], "var-init");
      return function (e, n) {
        return t[e] = cc11001100_hook("t[e]", n, "assign"), t.filter(Boolean).join('\n');
      };
    }(), "var-init");
    function p(t, e, n, a) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      var i = cc11001100_hook("i", n ? '' : a.media ? '@media '.concat(a.media, ' {').concat(a.css, '}') : a.css, "var-init");
      if (t.styleSheet) t.styleSheet.cssText = cc11001100_hook("t.styleSheet.cssText", l(e, i), "assign");else {
        var o = cc11001100_hook("o", document.createTextNode(i), "var-init"),
          r = cc11001100_hook("r", t.childNodes, "var-init");
        r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(o, r[e]) : t.appendChild(o);
      }
    }
    var d = cc11001100_hook("d", null, "var-init"),
      u = cc11001100_hook("u", 0, "var-init");
    function h(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var n, a, i;
      if (e.singleton) {
        var o = cc11001100_hook("o", u++, "var-init");
        n = cc11001100_hook("n", d || (d = cc11001100_hook("d", c(e), "assign")), "assign"), a = cc11001100_hook("a", p.bind(null, n, o, !1), "assign"), i = cc11001100_hook("i", p.bind(null, n, o, !0), "assign");
      } else n = cc11001100_hook("n", c(e), "assign"), a = cc11001100_hook("a", function (t, e, n) {
        var a = cc11001100_hook("a", n.css, "var-init"),
          i = cc11001100_hook("i", n.media, "var-init"),
          o = cc11001100_hook("o", n.sourceMap, "var-init");
        if (i ? t.setAttribute('media', i) : t.removeAttribute('media'), o && btoa && (a += cc11001100_hook("a", '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), ' */'), "assign")), t.styleSheet) t.styleSheet.cssText = cc11001100_hook("t.styleSheet.cssText", a, "assign");else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(a));
        }
      }.bind(null, n, e), "assign"), i = cc11001100_hook("i", function () {
        !function (t) {
          if (null === t.parentNode) return !1;
          t.parentNode.removeChild(t);
        }(n);
      }, "assign");
      return a(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          a(t = cc11001100_hook("t", e, "assign"));
        } else i();
      };
    }
    t.exports = cc11001100_hook("t.exports", function (t, e) {
      (e = cc11001100_hook("e", e || {}, "assign")).singleton || 'boolean' == typeof e.singleton || (e.singleton = cc11001100_hook("e.singleton", a(), "assign"));
      var n = cc11001100_hook("n", s(t = cc11001100_hook("t", t || [], "assign"), e), "var-init");
      return function (t) {
        if (t = cc11001100_hook("t", t || [], "assign"), '[object Array]' === Object.prototype.toString.call(t)) {
          for (var a = cc11001100_hook("a", 0, "var-init"); a < n.length; a++) {
            var i = cc11001100_hook("i", r(n[a]), "var-init");
            o[i].references--;
          }
          for (var c = cc11001100_hook("c", s(t, e), "var-init"), l = cc11001100_hook("l", 0, "var-init"); l < n.length; l++) {
            var p = cc11001100_hook("p", r(n[l]), "var-init");
            0 === o[p].references && (o[p].updater(), o.splice(p, 1));
          }
          n = cc11001100_hook("n", c, "assign");
        }
      };
    }, "assign");
  }, function (t, e, n) {
    var a;
    (a = cc11001100_hook("a", function () {
      'use strict';

      t.exports = cc11001100_hook("t.exports", function (t) {
        var e = cc11001100_hook("e", [], "var-init");
        return e.toString = cc11001100_hook("e.toString", function () {
          return this.map(function (e) {
            var n = cc11001100_hook("n", function (t, e) {
              var n = cc11001100_hook("n", t[1] || '', "var-init"),
                a = cc11001100_hook("a", t[3], "var-init");
              if (!a) return n;
              if (e && 'function' == typeof btoa) {
                var i = cc11001100_hook("i", function (t) {
                    var e = cc11001100_hook("e", btoa(unescape(encodeURIComponent(JSON.stringify(t)))), "var-init"),
                      n = cc11001100_hook("n", 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(e), "var-init");
                    return '/*# '.concat(n, ' */');
                  }(a), "var-init"),
                  o = cc11001100_hook("o", a.sources.map(function (t) {
                    return '/*# sourceURL='.concat(a.sourceRoot || '').concat(t, ' */');
                  }), "var-init");
                return [n].concat(o).concat([i]).join('\n');
              }
              return [n].join('\n');
            }(e, t), "var-init");
            return e[2] ? '@media '.concat(e[2], ' {').concat(n, '}') : n;
          }).join('');
        }, "assign"), e.i = cc11001100_hook("e.i", function (t, n, a) {
          'string' == typeof t && (t = cc11001100_hook("t", [[null, t, '']], "assign"));
          var i = cc11001100_hook("i", {}, "var-init");
          if (a) for (var o = cc11001100_hook("o", 0, "var-init"); o < this.length; o++) {
            var r = cc11001100_hook("r", this[o][0], "var-init");
            null != r && (i[r] = cc11001100_hook("i[r]", !0, "assign"));
          }
          for (var s = cc11001100_hook("s", 0, "var-init"); s < t.length; s++) {
            var c = cc11001100_hook("c", [].concat(t[s]), "var-init");
            a && i[c[0]] || (n && (c[2] ? c[2] = cc11001100_hook("c[2]", ''.concat(n, ' and ').concat(c[2]), "assign") : c[2] = cc11001100_hook("c[2]", n, "assign")), e.push(c));
          }
        }, "assign"), e;
      }, "assign");
    }.apply(e, []), "assign")) === undefined || (t.exports = cc11001100_hook("t.exports", a, "assign"));
  }, function (t, n) {
    t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e, n) {
    var a, i;
    a = cc11001100_hook("a", [e, n(47), n(51), n(55), n(62), n(16), n(66), n(70)], "assign"), (i = cc11001100_hook("i", function (t, e, n, a, i, o, r, s) {
      'use strict';

      function c(t) {
        cc11001100_hook("t", t, "function-parameter");
        return t && t.__esModule ? t : {
          'default': cc11001100_hook('default', t, "object-key-init")
        };
      }
      Object.defineProperty(t, '__esModule', {
        value: cc11001100_hook("value", !0, "object-key-init")
      }), Object.defineProperty(t, 'Select', {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: function () {
          return e['default'];
        }
      }), Object.defineProperty(t, 'Toast', {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: function () {
          return n['default'];
        }
      }), Object.defineProperty(t, 'Popup', {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: function () {
          return a['default'];
        }
      }), Object.defineProperty(t, 'Button', {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: function () {
          return i['default'];
        }
      }), Object.defineProperty(t, 'Checkbox', {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: function () {
          return o['default'];
        }
      }), Object.defineProperty(t, 'Input', {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: function () {
          return r['default'];
        }
      }), Object.defineProperty(t, 'Calendar', {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: function () {
          return s['default'];
        }
      }), e = cc11001100_hook("e", c(e), "assign"), n = cc11001100_hook("n", c(n), "assign"), a = cc11001100_hook("a", c(a), "assign"), i = cc11001100_hook("i", c(i), "assign"), o = cc11001100_hook("o", c(o), "assign"), r = cc11001100_hook("r", c(r), "assign"), s = cc11001100_hook("s", c(s), "assign");
    }.apply(e, a), "assign")) === undefined || (t.exports = cc11001100_hook("t.exports", i, "assign"));
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(44)], "var-init"),
      o = cc11001100_hook("o", n(46), "var-init"),
      r = cc11001100_hook("r", n(12)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(12), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(87)], "var-init"),
      o = cc11001100_hook("o", n(89), "var-init"),
      r = cc11001100_hook("r", n(24)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(24), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    'use strict';

    n.r(e), n.d(e, 'Headers', function () {
      return p;
    }), n.d(e, 'Request', function () {
      return v;
    }), n.d(e, 'Response', function () {
      return b;
    }), n.d(e, 'DOMException', function () {
      return _;
    }), n.d(e, 'fetch', function () {
      return w;
    });
    var a = cc11001100_hook("a", 'undefined' != typeof globalThis && globalThis || 'undefined' != typeof self && self || void 0 !== a && a, "var-init"),
      i = cc11001100_hook("i", {
        searchParams: cc11001100_hook("searchParams", 'URLSearchParams' in a, "object-key-init"),
        iterable: cc11001100_hook("iterable", 'Symbol' in a && 'iterator' in Symbol, "object-key-init"),
        blob: cc11001100_hook("blob", 'FileReader' in a && 'Blob' in a && function () {
          try {
            return new Blob(), !0;
          } catch (t) {
            return !1;
          }
        }(), "object-key-init"),
        formData: cc11001100_hook("formData", 'FormData' in a, "object-key-init"),
        arrayBuffer: cc11001100_hook("arrayBuffer", 'ArrayBuffer' in a, "object-key-init")
      }, "var-init");
    if (i.arrayBuffer) var o = cc11001100_hook("o", ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'], "var-init"),
      r = cc11001100_hook("r", ArrayBuffer.isView || function (t) {
        return t && o.indexOf(Object.prototype.toString.call(t)) > -1;
      }, "var-init");
    function s(t) {
      cc11001100_hook("t", t, "function-parameter");
      if ('string' != typeof t && (t = cc11001100_hook("t", String(t), "assign")), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || '' === t) throw new TypeError('Invalid character in header field name');
      return t.toLowerCase();
    }
    function c(t) {
      cc11001100_hook("t", t, "function-parameter");
      return 'string' != typeof t && (t = cc11001100_hook("t", String(t), "assign")), t;
    }
    function l(t) {
      cc11001100_hook("t", t, "function-parameter");
      var e = cc11001100_hook("e", {
        next: function () {
          var e = cc11001100_hook("e", t.shift(), "var-init");
          return {
            done: cc11001100_hook("done", e === undefined, "object-key-init"),
            value: cc11001100_hook("value", e, "object-key-init")
          };
        }
      }, "var-init");
      return i.iterable && (e[Symbol.iterator] = cc11001100_hook("e[Symbol.iterator]", function () {
        return e;
      }, "assign")), e;
    }
    function p(t) {
      cc11001100_hook("t", t, "function-parameter");
      this.map = cc11001100_hook("this.map", {}, "assign"), t instanceof p ? t.forEach(function (t, e) {
        this.append(e, t);
      }, this) : Array.isArray(t) ? t.forEach(function (t) {
        this.append(t[0], t[1]);
      }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
        this.append(e, t[e]);
      }, this);
    }
    function d(t) {
      cc11001100_hook("t", t, "function-parameter");
      if (t.bodyUsed) return Promise.reject(new TypeError('Already read'));
      t.bodyUsed = cc11001100_hook("t.bodyUsed", !0, "assign");
    }
    function u(t) {
      cc11001100_hook("t", t, "function-parameter");
      return new Promise(function (e, n) {
        t.onload = cc11001100_hook("t.onload", function () {
          e(t.result);
        }, "assign"), t.onerror = cc11001100_hook("t.onerror", function () {
          n(t.error);
        }, "assign");
      });
    }
    function h(t) {
      cc11001100_hook("t", t, "function-parameter");
      var e = cc11001100_hook("e", new FileReader(), "var-init"),
        n = cc11001100_hook("n", u(e), "var-init");
      return e.readAsArrayBuffer(t), n;
    }
    function f(t) {
      cc11001100_hook("t", t, "function-parameter");
      if (t.slice) return t.slice(0);
      var e = cc11001100_hook("e", new Uint8Array(t.byteLength), "var-init");
      return e.set(new Uint8Array(t)), e.buffer;
    }
    function m() {
      return this.bodyUsed = cc11001100_hook("this.bodyUsed", !1, "assign"), this._initBody = cc11001100_hook("this._initBody", function (t) {
        this.bodyUsed = cc11001100_hook("this.bodyUsed", this.bodyUsed, "assign"), this._bodyInit = cc11001100_hook("this._bodyInit", t, "assign"), t ? 'string' == typeof t ? this._bodyText = cc11001100_hook("this._bodyText", t, "assign") : i.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = cc11001100_hook("this._bodyBlob", t, "assign") : i.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = cc11001100_hook("this._bodyFormData", t, "assign") : i.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = cc11001100_hook("this._bodyText", t.toString(), "assign") : i.arrayBuffer && i.blob && function (t) {
          return t && DataView.prototype.isPrototypeOf(t);
        }(t) ? (this._bodyArrayBuffer = cc11001100_hook("this._bodyArrayBuffer", f(t.buffer), "assign"), this._bodyInit = cc11001100_hook("this._bodyInit", new Blob([this._bodyArrayBuffer]), "assign")) : i.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || r(t)) ? this._bodyArrayBuffer = cc11001100_hook("this._bodyArrayBuffer", f(t), "assign") : this._bodyText = cc11001100_hook("this._bodyText", t = cc11001100_hook("t", Object.prototype.toString.call(t), "assign"), "assign") : this._bodyText = cc11001100_hook("this._bodyText", '', "assign"), this.headers.get('content-type') || ('string' == typeof t ? this.headers.set('content-type', 'text/plain;charset=UTF-8') : this._bodyBlob && this._bodyBlob.type ? this.headers.set('content-type', this._bodyBlob.type) : i.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
      }, "assign"), i.blob && (this.blob = cc11001100_hook("this.blob", function () {
        var t = cc11001100_hook("t", d(this), "var-init");
        if (t) return t;
        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        if (this._bodyFormData) throw new Error('could not read FormData body as blob');
        return Promise.resolve(new Blob([this._bodyText]));
      }, "assign"), this.arrayBuffer = cc11001100_hook("this.arrayBuffer", function () {
        if (this._bodyArrayBuffer) {
          var t = cc11001100_hook("t", d(this), "var-init");
          return t || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
        }
        return this.blob().then(h);
      }, "assign")), this.text = cc11001100_hook("this.text", function () {
        var t = cc11001100_hook("t", d(this), "var-init");
        if (t) return t;
        if (this._bodyBlob) return function (t) {
          var e = cc11001100_hook("e", new FileReader(), "var-init"),
            n = cc11001100_hook("n", u(e), "var-init");
          return e.readAsText(t), n;
        }(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(function (t) {
          for (var e = cc11001100_hook("e", new Uint8Array(t), "var-init"), n = cc11001100_hook("n", new Array(e.length), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < e.length; a++) n[a] = cc11001100_hook("n[a]", String.fromCharCode(e[a]), "assign");
          return n.join('');
        }(this._bodyArrayBuffer));
        if (this._bodyFormData) throw new Error('could not read FormData body as text');
        return Promise.resolve(this._bodyText);
      }, "assign"), i.formData && (this.formData = cc11001100_hook("this.formData", function () {
        return this.text().then(y);
      }, "assign")), this.json = cc11001100_hook("this.json", function () {
        return this.text().then(JSON.parse);
      }, "assign"), this;
    }
    p.prototype.append = cc11001100_hook("p.prototype.append", function (t, e) {
      t = cc11001100_hook("t", s(t), "assign"), e = cc11001100_hook("e", c(e), "assign");
      var n = cc11001100_hook("n", this.map[t], "var-init");
      this.map[t] = cc11001100_hook("this.map[t]", n ? n + ', ' + e : e, "assign");
    }, "assign"), p.prototype['delete'] = cc11001100_hook("p.prototype['delete']", function (t) {
      delete this.map[s(t)];
    }, "assign"), p.prototype.get = cc11001100_hook("p.prototype.get", function (t) {
      return t = cc11001100_hook("t", s(t), "assign"), this.has(t) ? this.map[t] : null;
    }, "assign"), p.prototype.has = cc11001100_hook("p.prototype.has", function (t) {
      return this.map.hasOwnProperty(s(t));
    }, "assign"), p.prototype.set = cc11001100_hook("p.prototype.set", function (t, e) {
      this.map[s(t)] = cc11001100_hook("this.map[s(t)]", c(e), "assign");
    }, "assign"), p.prototype.forEach = cc11001100_hook("p.prototype.forEach", function (t, e) {
      for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
    }, "assign"), p.prototype.keys = cc11001100_hook("p.prototype.keys", function () {
      var t = cc11001100_hook("t", [], "var-init");
      return this.forEach(function (e, n) {
        t.push(n);
      }), l(t);
    }, "assign"), p.prototype.values = cc11001100_hook("p.prototype.values", function () {
      var t = cc11001100_hook("t", [], "var-init");
      return this.forEach(function (e) {
        t.push(e);
      }), l(t);
    }, "assign"), p.prototype.entries = cc11001100_hook("p.prototype.entries", function () {
      var t = cc11001100_hook("t", [], "var-init");
      return this.forEach(function (e, n) {
        t.push([n, e]);
      }), l(t);
    }, "assign"), i.iterable && (p.prototype[Symbol.iterator] = cc11001100_hook("p.prototype[Symbol.iterator]", p.prototype.entries, "assign"));
    var g = cc11001100_hook("g", ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'], "var-init");
    function v(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      if (!(this instanceof v)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
      var n = cc11001100_hook("n", (e = cc11001100_hook("e", e || {}, "assign")).body, "var-init");
      if (t instanceof v) {
        if (t.bodyUsed) throw new TypeError('Already read');
        this.url = cc11001100_hook("this.url", t.url, "assign"), this.credentials = cc11001100_hook("this.credentials", t.credentials, "assign"), e.headers || (this.headers = cc11001100_hook("this.headers", new p(t.headers), "assign")), this.method = cc11001100_hook("this.method", t.method, "assign"), this.mode = cc11001100_hook("this.mode", t.mode, "assign"), this.signal = cc11001100_hook("this.signal", t.signal, "assign"), n || null == t._bodyInit || (n = cc11001100_hook("n", t._bodyInit, "assign"), t.bodyUsed = cc11001100_hook("t.bodyUsed", !0, "assign"));
      } else this.url = cc11001100_hook("this.url", String(t), "assign");
      if (this.credentials = cc11001100_hook("this.credentials", e.credentials || this.credentials || 'same-origin', "assign"), !e.headers && this.headers || (this.headers = cc11001100_hook("this.headers", new p(e.headers), "assign")), this.method = cc11001100_hook("this.method", function (t) {
        var e = cc11001100_hook("e", t.toUpperCase(), "var-init");
        return g.indexOf(e) > -1 ? e : t;
      }(e.method || this.method || 'GET'), "assign"), this.mode = cc11001100_hook("this.mode", e.mode || this.mode || null, "assign"), this.signal = cc11001100_hook("this.signal", e.signal || this.signal, "assign"), this.referrer = cc11001100_hook("this.referrer", null, "assign"), ('GET' === this.method || 'HEAD' === this.method) && n) throw new TypeError('Body not allowed for GET or HEAD requests');
      if (this._initBody(n), !('GET' !== this.method && 'HEAD' !== this.method || 'no-store' !== e.cache && 'no-cache' !== e.cache)) {
        var a = cc11001100_hook("a", /([?&])_=[^&]*/, "var-init");
        if (a.test(this.url)) this.url = cc11001100_hook("this.url", this.url.replace(a, '$1_=' + new Date().getTime()), "assign");else {
          this.url += cc11001100_hook("this.url", (/\?/.test(this.url) ? '&' : '?') + '_=' + new Date().getTime(), "assign");
        }
      }
    }
    function y(t) {
      cc11001100_hook("t", t, "function-parameter");
      var e = cc11001100_hook("e", new FormData(), "var-init");
      return t.trim().split('&').forEach(function (t) {
        if (t) {
          var n = cc11001100_hook("n", t.split('='), "var-init"),
            a = cc11001100_hook("a", n.shift().replace(/\+/g, ' '), "var-init"),
            i = cc11001100_hook("i", n.join('=').replace(/\+/g, ' '), "var-init");
          e.append(decodeURIComponent(a), decodeURIComponent(i));
        }
      }), e;
    }
    function b(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      if (!(this instanceof b)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
      e || (e = cc11001100_hook("e", {}, "assign")), this.type = cc11001100_hook("this.type", 'default', "assign"), this.status = cc11001100_hook("this.status", e.status === undefined ? 200 : e.status, "assign"), this.ok = cc11001100_hook("this.ok", this.status >= 200 && this.status < 300, "assign"), this.statusText = cc11001100_hook("this.statusText", 'statusText' in e ? e.statusText : '', "assign"), this.headers = cc11001100_hook("this.headers", new p(e.headers), "assign"), this.url = cc11001100_hook("this.url", e.url || '', "assign"), this._initBody(t);
    }
    v.prototype.clone = cc11001100_hook("v.prototype.clone", function () {
      return new v(this, {
        body: cc11001100_hook("body", this._bodyInit, "object-key-init")
      });
    }, "assign"), m.call(v.prototype), m.call(b.prototype), b.prototype.clone = cc11001100_hook("b.prototype.clone", function () {
      return new b(this._bodyInit, {
        status: cc11001100_hook("status", this.status, "object-key-init"),
        statusText: cc11001100_hook("statusText", this.statusText, "object-key-init"),
        headers: cc11001100_hook("headers", new p(this.headers), "object-key-init"),
        url: cc11001100_hook("url", this.url, "object-key-init")
      });
    }, "assign"), b.error = cc11001100_hook("b.error", function () {
      var t = cc11001100_hook("t", new b(null, {
        status: cc11001100_hook("status", 0, "object-key-init"),
        statusText: cc11001100_hook("statusText", '', "object-key-init")
      }), "var-init");
      return t.type = cc11001100_hook("t.type", 'error', "assign"), t;
    }, "assign");
    var x = cc11001100_hook("x", [301, 302, 303, 307, 308], "var-init");
    b.redirect = cc11001100_hook("b.redirect", function (t, e) {
      if (-1 === x.indexOf(e)) throw new RangeError('Invalid status code');
      return new b(null, {
        status: cc11001100_hook("status", e, "object-key-init"),
        headers: {
          location: cc11001100_hook("location", t, "object-key-init")
        }
      });
    }, "assign");
    var _ = cc11001100_hook("_", a.DOMException, "var-init");
    try {
      new _();
    } catch (A) {
      (_ = cc11001100_hook("_", function (t, e) {
        this.message = cc11001100_hook("this.message", t, "assign"), this.name = cc11001100_hook("this.name", e, "assign");
        var n = cc11001100_hook("n", Error(t), "var-init");
        this.stack = cc11001100_hook("this.stack", n.stack, "assign");
      }, "assign")).prototype = cc11001100_hook("(_ = function (t, e) {\n  this.message = t, this.name = e;\n  var n = Error(t);\n  this.stack = n.stack;\n}).prototype", Object.create(Error.prototype), "assign"), _.prototype.constructor = cc11001100_hook("_.prototype.constructor", _, "assign");
    }
    function w(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      return new Promise(function (n, o) {
        var r = cc11001100_hook("r", new v(t, e), "var-init");
        if (r.signal && r.signal.aborted) return o(new _('Aborted', 'AbortError'));
        var s = cc11001100_hook("s", new XMLHttpRequest(), "var-init");
        function l() {
          s.abort();
        }
        s.onload = cc11001100_hook("s.onload", function () {
          var t = cc11001100_hook("t", {
            status: cc11001100_hook("status", s.status, "object-key-init"),
            statusText: cc11001100_hook("statusText", s.statusText, "object-key-init"),
            headers: cc11001100_hook("headers", function (t) {
              var e = cc11001100_hook("e", new p(), "var-init");
              return t.replace(/\r?\n[\t ]+/g, ' ').split('\r').map(function (t) {
                return 0 === t.indexOf('\n') ? t.substr(1, t.length) : t;
              }).forEach(function (t) {
                var n = cc11001100_hook("n", t.split(':'), "var-init"),
                  a = cc11001100_hook("a", n.shift().trim(), "var-init");
                if (a) {
                  var i = cc11001100_hook("i", n.join(':').trim(), "var-init");
                  e.append(a, i);
                }
              }), e;
            }(s.getAllResponseHeaders() || ''), "object-key-init")
          }, "var-init");
          t.url = cc11001100_hook("t.url", 'responseURL' in s ? s.responseURL : t.headers.get('X-Request-URL'), "assign");
          var e = cc11001100_hook("e", 'response' in s ? s.response : s.responseText, "var-init");
          setTimeout(function () {
            n(new b(e, t));
          }, 0);
        }, "assign"), s.onerror = cc11001100_hook("s.onerror", function () {
          setTimeout(function () {
            o(new TypeError('Network request failed'));
          }, 0);
        }, "assign"), s.ontimeout = cc11001100_hook("s.ontimeout", function () {
          setTimeout(function () {
            o(new TypeError('Network request failed'));
          }, 0);
        }, "assign"), s.onabort = cc11001100_hook("s.onabort", function () {
          setTimeout(function () {
            o(new _('Aborted', 'AbortError'));
          }, 0);
        }, "assign"), s.open(r.method, function (t) {
          try {
            return '' === t && a.location.href ? a.location.href : t;
          } catch (e) {
            return t;
          }
        }(r.url), !0), 'include' === r.credentials ? s.withCredentials = cc11001100_hook("s.withCredentials", !0, "assign") : 'omit' === r.credentials && (s.withCredentials = cc11001100_hook("s.withCredentials", !1, "assign")), 'responseType' in s && (i.blob ? s.responseType = cc11001100_hook("s.responseType", 'blob', "assign") : i.arrayBuffer && r.headers.get('Content-Type') && -1 !== r.headers.get('Content-Type').indexOf('application/octet-stream') && (s.responseType = cc11001100_hook("s.responseType", 'arraybuffer', "assign"))), !e || 'object' != typeof e.headers || e.headers instanceof p ? r.headers.forEach(function (t, e) {
          s.setRequestHeader(e, t);
        }) : Object.getOwnPropertyNames(e.headers).forEach(function (t) {
          s.setRequestHeader(t, c(e.headers[t]));
        }), r.signal && (r.signal.addEventListener('abort', l), s.onreadystatechange = cc11001100_hook("s.onreadystatechange", function () {
          4 === s.readyState && r.signal.removeEventListener('abort', l);
        }, "assign")), s.send('undefined' == typeof r._bodyInit ? null : r._bodyInit);
      });
    }
    w.polyfill = cc11001100_hook("w.polyfill", !0, "assign"), a.fetch || (a.fetch = cc11001100_hook("a.fetch", w, "assign"), a.Headers = cc11001100_hook("a.Headers", p, "assign"), a.Request = cc11001100_hook("a.Request", v, "assign"), a.Response = cc11001100_hook("a.Response", b, "assign"));
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign"), e.getBrowser = cc11001100_hook("e.getBrowser", void 0, "assign"), e.getBrowser = cc11001100_hook("e.getBrowser", function () {
      var t = cc11001100_hook("t", navigator.userAgent.toLowerCase(), "var-init"),
        e = cc11001100_hook("e", {
          type: cc11001100_hook("type", '', "object-key-init"),
          versions: cc11001100_hook("versions", 0, "object-key-init")
        }, "var-init"),
        n = cc11001100_hook("n", {
          IE: cc11001100_hook("IE", 'ActiveXObject' in window, "object-key-init"),
          Chrome: cc11001100_hook("Chrome", t.indexOf('chrome') > -1 && t.indexOf('safari') > -1, "object-key-init"),
          Firefox: cc11001100_hook("Firefox", t.indexOf('firefox') > -1, "object-key-init"),
          Opera: cc11001100_hook("Opera", t.indexOf('opera') > -1, "object-key-init"),
          Safari: cc11001100_hook("Safari", t.indexOf('safari') > -1 && -1 == t.indexOf('chrome'), "object-key-init"),
          Edge: cc11001100_hook("Edge", t.indexOf('edge') > -1, "object-key-init"),
          QQBrowser: cc11001100_hook("QQBrowser", /qqbrowser/.test(t), "object-key-init"),
          WeixinBrowser: cc11001100_hook("WeixinBrowser", /MicroMessenger/i.test(t), "object-key-init")
        }, "var-init");
      for (var a in n) if (n[a]) {
        var i = cc11001100_hook("i", '', "var-init");
        if ('IE' == a) i = cc11001100_hook("i", t.match(/(msie\s|trident.*rv:)([\w.]+)/)[2], "assign");else if ('Chrome' === a) {
          for (var o in navigator.mimeTypes) 'application/360softmgrplugin' == navigator.mimeTypes[o].type && (a = cc11001100_hook("a", '360', "assign"));
          i = cc11001100_hook("i", t.match(/chrome\/([\d.]+)/)[1], "assign");
        } else 'Firefox' === a ? i = cc11001100_hook("i", t.match(/firefox\/([\d.]+)/)[1], "assign") : 'Opera' === a ? i = cc11001100_hook("i", t.match(/opera\/([\d.]+)/)[1], "assign") : 'Safari' === a ? i = cc11001100_hook("i", t.match(/version\/([\d.]+)/)[1], "assign") : 'Edge' === a ? i = cc11001100_hook("i", t.match(/edge\/([\d.]+)/)[1], "assign") : 'QQBrowser' === a && (i = cc11001100_hook("i", t.match(/qqbrowser\/([\d.]+)/)[1], "assign"));
        e.type = cc11001100_hook("e.type", a, "assign"), e.versions = cc11001100_hook("e.versions", parseInt(i), "assign");
      }
      return e;
    }, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", a.__importDefault(n(40)), "var-init"),
      r = cc11001100_hook("r", a.__importDefault(n(83)), "var-init"),
      s = cc11001100_hook("s", a.__importDefault(n(90)), "var-init"),
      c = cc11001100_hook("c", a.__importDefault(n(97)), "var-init"),
      l = cc11001100_hook("l", a.__importDefault(n(105)), "var-init"),
      p = cc11001100_hook("p", a.__importDefault(n(109)), "var-init"),
      d = cc11001100_hook("d", a.__importDefault(n(117)), "var-init"),
      u = cc11001100_hook("u", a.__importDefault(n(121)), "var-init"),
      h = cc11001100_hook("h", n(5), "var-init"),
      f = cc11001100_hook("f", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            status: cc11001100_hook("status", 1, "object-key-init"),
            meetInfo: cc11001100_hook("meetInfo", null, "object-key-init"),
            showViews: cc11001100_hook("showViews", !0, "object-key-init"),
            entry: cc11001100_hook("entry", null, "object-key-init"),
            meetData: cc11001100_hook("meetData", null, "object-key-init"),
            type: cc11001100_hook("type", '', "object-key-init"),
            orderData: cc11001100_hook("orderData", null, "object-key-init"),
            preStack: cc11001100_hook("preStack", [], "object-key-init"),
            bsToken: cc11001100_hook("bsToken", '', "object-key-init"),
            isLogin: cc11001100_hook("isLogin", '', "object-key-init"),
            netError: cc11001100_hook("netError", !1, "object-key-init"),
            flowType: cc11001100_hook("flowType", '', "object-key-init"),
            event: cc11001100_hook("event", null, "object-key-init")
          };
        }, "assign"), e.prototype.onHide = cc11001100_hook("e.prototype.onHide", function () {
          this.data.set('netError', !1);
        }, "assign"), e.prototype.updateStatus = cc11001100_hook("e.prototype.updateStatus", function (t) {
          if (t && t.value >= 0) {
            var e = cc11001100_hook("e", t.value, "var-init"),
              n = cc11001100_hook("n", this.data.get('preStack'), "var-init");
            this.data.set('status', e), 0 === e ? this.setStack('clear') : e === n[n.length - 2] ? this.setStack('del') : this.setStack('add');
          }
        }, "assign"), e.prototype.setStack = cc11001100_hook("e.prototype.setStack", function (t) {
          var e = cc11001100_hook("e", this.data.get('preStack'), "var-init"),
            n = cc11001100_hook("n", this.data.get('status'), "var-init");
          'add' === t ? (e.push(n), this.data.set('preStack', e)) : 'del' === t ? e.length > 1 && (e.pop(), this.data.set('preStack', e)) : this.data.set('preStack', []);
        }, "assign"), e.prototype.attached = cc11001100_hook("e.prototype.attached", function () {
          var t = cc11001100_hook("t", this.data.get('entry'), "var-init");
          this.setStack('add'), this.bindEvent(t);
        }, "assign"), e.prototype.logSend = cc11001100_hook("e.prototype.logSend", function (t) {
          var e = cc11001100_hook("e", t.modName, "var-init"),
            n = cc11001100_hook("n", t.evtName, "var-init");
          this.data.get('event').fire(e, n);
        }, "assign"), e.prototype.bindEvent = cc11001100_hook("e.prototype.bindEvent", function (t) {
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", this, "var-init");
          'backflow' !== n.data.get('type') && (t.off('click').on('click', function (t) {
            var a = cc11001100_hook("a", e.data.get('showViews'), "var-init");
            n.data.set('showViews', !a), 0 !== e.data.get('status') || a || e.updateStatus({
              value: cc11001100_hook("value", 1, "object-key-init")
            }), t.stopPropagation();
          }), this.hideViews());
        }, "assign"), e.prototype.hideViews = cc11001100_hook("e.prototype.hideViews", function () {
          var t = cc11001100_hook("t", this, "var-init"),
            e = cc11001100_hook("e", this.data.get('showViews'), "var-init"),
            n = cc11001100_hook("n", this.el, "var-init"),
            a = cc11001100_hook("a", !1, "var-init");
          document.addEventListener('mousedown', function (e) {
            t.contains(n, e.target) && (a = cc11001100_hook("a", !0, "assign"));
          }), document.addEventListener('click', function (i) {
            t.contains(document.getElementById('passport-login-pop'), i.target) || t.contains(document.getElementsByClassName('pop-mask')[0], i.target) || (t.contains(n, i.target) || !e || a ? a = cc11001100_hook("a", !1, "assign") : (t.data.set('showViews', !1), a = cc11001100_hook("a", !1, "assign")));
          }), document.querySelector('#kw').addEventListener('focus', function () {
            t.data.set('showViews', !1);
          });
        }, "assign"), e.prototype.contains = cc11001100_hook("e.prototype.contains", function (t, e) {
          for (var n = cc11001100_hook("n", e, "var-init"); n;) {
            if (n === t) return !0;
            n = cc11001100_hook("n", n.parentNode, "assign");
          }
          return !1;
        }, "assign"), e.prototype.orderMeetEvent = cc11001100_hook("e.prototype.orderMeetEvent", function (t) {
          if (t.meetMsg) {
            var e = cc11001100_hook("e", this.getSimpleMeetData(t.meetMsg), "var-init");
            t.meetData = cc11001100_hook("t.meetData", e, "assign");
          }
          t.bsToken = cc11001100_hook("t.bsToken", this.data.get('bsToken'), "assign"), this.data.set('orderData', t), this.updateStatus({
            value: cc11001100_hook("value", 5, "object-key-init")
          });
        }, "assign"), e.prototype.modifyMeetEvent = cc11001100_hook("e.prototype.modifyMeetEvent", function (t) {
          this.data.set('orderData', t), this.updateStatus({
            value: cc11001100_hook("value", 5, "object-key-init")
          });
        }, "assign"), e.prototype.getSimpleMeetData = cc11001100_hook("e.prototype.getSimpleMeetData", function (t) {
          return {
            roomName: cc11001100_hook("roomName", t.name, "object-key-init"),
            boxChecked: cc11001100_hook("boxChecked", !!t.needPasswd, "object-key-init"),
            openPassInput: cc11001100_hook("openPassInput", !!t.needPasswd, "object-key-init"),
            description: cc11001100_hook("description", t.description, "object-key-init"),
            partner: cc11001100_hook("partner", t.partner, "object-key-init"),
            canOpenMeet: {
              title: cc11001100_hook("title", !0, "object-key-init"),
              pass: cc11001100_hook("pass", !0, "object-key-init"),
              desc: cc11001100_hook("desc", !0, "object-key-init")
            }
          };
        }, "assign"), e.prototype.createQuickMeet = cc11001100_hook("e.prototype.createQuickMeet", function (t) {
          this.updateStatus({
            value: cc11001100_hook("value", 3, "object-key-init")
          }), t.type = cc11001100_hook("t.type", 0, "assign"), this.data.set('meetData', t);
        }, "assign"), e.prototype.openManageMeet = cc11001100_hook("e.prototype.openManageMeet", function () {
          this.updateStatus({
            value: cc11001100_hook("value", 6, "object-key-init")
          });
        }, "assign"), e.prototype.startMeetEvent = cc11001100_hook("e.prototype.startMeetEvent", function (t) {
          this.data.set('meetInfo', t), this.updateStatus({
            value: cc11001100_hook("value", 4, "object-key-init")
          });
        }, "assign"), e.prototype.orderIntoMidpage = cc11001100_hook("e.prototype.orderIntoMidpage", function (t) {
          var e = cc11001100_hook("e", {
            type: cc11001100_hook("type", 1, "object-key-init"),
            data: cc11001100_hook("data", t, "object-key-init")
          }, "var-init");
          this.data.set('meetData', e), this.updateStatus({
            value: cc11001100_hook("value", 3, "object-key-init")
          });
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'v-demo': cc11001100_hook('v-demo', o['default'], "object-key-init"),
          'meet-midpage': cc11001100_hook('meet-midpage', r['default'], "object-key-init"),
          'open-meet': cc11001100_hook('open-meet', s['default'], "object-key-init"),
          'order-meet': cc11001100_hook('order-meet', c['default'], "object-key-init"),
          'manage-meet': cc11001100_hook('manage-meet', p['default'], "object-key-init"),
          'compat-tip': cc11001100_hook('compat-tip', d['default'], "object-key-init"),
          'start-meet': cc11001100_hook('start-meet', l['default'], "object-key-init"),
          'page-error': cc11001100_hook('page-error', u['default'], "object-key-init"),
          'c-toast': cc11001100_hook('c-toast', h.Toast, "object-key-init")
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          memberName: function () {
            var t = cc11001100_hook("t", this.data.get('showViews'), "var-init"),
              e = cc11001100_hook("e", document.getElementsByTagName('html')[0], "var-init");
            t ? (this.data.get('event').fire('superman:videomeeting', 'opendialogClick'), e.className += cc11001100_hook("e.className", ' no-scroll', "assign")) : e.setAttribute('class', e.getAttribute('class').replace(' no-scroll', ''));
          },
          errorPos: function () {
            return {
              position: cc11001100_hook("position", 'fixed', "object-key-init"),
              bottom: cc11001100_hook("bottom", '331px', "object-key-init"),
              right: cc11001100_hook("right", '179px', "object-key-init"),
              'z-index': cc11001100_hook('z-index', '1000', "object-key-init")
            };
          }
        }, "assign"), e.messages = cc11001100_hook("e.messages", {
          exitMeet: function (t) {
            this.updateStatus(t), this.data.set('showViews', !1);
          },
          hideMeet: function (t) {
            var e = cc11001100_hook("e", t.value, "var-init");
            this.data.set('showViews', e);
          },
          openFeedback: function (t) {
            this.updateStatus(t);
          },
          openManage: function (t) {
            this.updateStatus(t);
          },
          goback: function (t) {
            var e = cc11001100_hook("e", this.data.get('preStack'), "var-init"),
              n = cc11001100_hook("n", e[e.length - 2], "var-init");
            this.updateStatus({
              value: cc11001100_hook("value", n, "object-key-init")
            });
          },
          disconnectedError: function (t) {
            this.data.set('netError', !0);
          }
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", f, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", a.__importDefault(n(6)), "var-init"),
      r = cc11001100_hook("r", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            text: cc11001100_hook("text", 'video-meeting', "object-key-init")
          };
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'v-header': cc11001100_hook('v-header', o['default'], "object-key-init")
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", r, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", n(5), "var-init"),
      r = cc11001100_hook("r", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            needBack: cc11001100_hook("needBack", !0, "object-key-init"),
            title: cc11001100_hook("title", '', "object-key-init"),
            closeType: cc11001100_hook("closeType", '', "object-key-init"),
            status: cc11001100_hook("status", 0, "object-key-init"),
            exit: cc11001100_hook("exit", !1, "object-key-init"),
            clearMedia: cc11001100_hook("clearMedia", !1, "object-key-init")
          };
        }, "assign"), e.prototype.exitMeet = cc11001100_hook("e.prototype.exitMeet", function () {
          window.localStorage.getItem('video-meet-never') ? this.dispatch('exitMeet', 0) : this.data.set('exit', !0);
        }, "assign"), e.prototype.hideMeet = cc11001100_hook("e.prototype.hideMeet", function () {
          this.dispatch('hideMeet', !1);
        }, "assign"), e.prototype.goBack = cc11001100_hook("e.prototype.goBack", function () {
          if (this.data.get('clearMedia')) this.fire('mediaGoback', null);else {
            var t = cc11001100_hook("t", this.data.get('status'), "var-init");
            this.dispatch('goback', t);
          }
        }, "assign"), e.prototype.cancel = cc11001100_hook("e.prototype.cancel", function (t) {
          this.data.set('exit', !1), t.never && window.localStorage.setItem('video-meet-never', '1');
        }, "assign"), e.prototype.confirm = cc11001100_hook("e.prototype.confirm", function (t) {
          this.data.set('exit', !1), t.never && window.localStorage.setItem('video-meet-never', '1'), this.data.get('clearMedia') ? this.fire('mediaExit', null) : this.dispatch('exitMeet', 0);
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'c-popup': cc11001100_hook('c-popup', o.Popup, "object-key-init")
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", r, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            name: cc11001100_hook("name", '', "object-key-init"),
            index: cc11001100_hook("index", 0, "object-key-init"),
            selecting: cc11001100_hook("selecting", !1, "object-key-init"),
            alignX: cc11001100_hook("alignX", 'left', "object-key-init"),
            alignY: cc11001100_hook("alignY", 'top', "object-key-init"),
            columns: cc11001100_hook("columns", 3, "object-key-init"),
            dataList: cc11001100_hook("dataList", [], "object-key-init"),
            style: cc11001100_hook("style", '', "object-key-init"),
            width: cc11001100_hook("width", '', "object-key-init"),
            columnWidth: cc11001100_hook("columnWidth", '', "object-key-init"),
            selIndex: cc11001100_hook("selIndex", 0, "object-key-init"),
            maxHeight: cc11001100_hook("maxHeight", '', "object-key-init")
          };
        }, "assign"), e.prototype.attached = cc11001100_hook("e.prototype.attached", function () {
          window.addEventListener ? window.addEventListener('click', this.closeBoard.bind(this)) : window.attachEvent('onclick', this.closeBoard.bind(this));
        }, "assign"), e.prototype.detached = cc11001100_hook("e.prototype.detached", function () {
          window.removeEventListener ? window.removeEventListener('click', this.closeBoard.bind(this)) : window.detachEvent('onclick', this.closeBoard.bind(this));
        }, "assign"), e.prototype.collectValue = cc11001100_hook("e.prototype.collectValue", function (t, e) {
          this.fire('change', {
            data: cc11001100_hook("data", t, "object-key-init"),
            index: cc11001100_hook("index", e, "object-key-init")
          }), this.data.set('selIndex', e);
        }, "assign"), e.prototype.nothing = cc11001100_hook("e.prototype.nothing", function (t) {
          t.stopPropagation ? t.stopPropagation() : t.cancelBubble = cc11001100_hook("t.cancelBubble", !0, "assign");
        }, "assign"), e.prototype.openBoard = cc11001100_hook("e.prototype.openBoard", function (t) {
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", this.data.get('selecting'), "var-init");
          this.nextTick(function () {
            return !n && e.data.set('selecting', !0);
          }), this.fire('boardopen', {});
        }, "assign"), e.prototype.choose = cc11001100_hook("e.prototype.choose", function (t, e, n) {
          this.nothing(t), this.collectValue(e, n), this.closeBoard(t);
        }, "assign"), e.prototype.closeBoard = cc11001100_hook("e.prototype.closeBoard", function (t) {
          this.data.get('selecting') && this.data.set('selecting', !1);
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          column: function () {
            var t = cc11001100_hook("t", this.data.get('columns'), "var-init");
            return Math.min(Math.max(t, 1), 3);
          },
          selIndex: function () {
            return this.data.get('index');
          },
          value: function () {
            var t = cc11001100_hook("t", this.data.get('selIndex'), "var-init"),
              e = cc11001100_hook("e", this.data.get('dataList')[t], "var-init");
            return e && e.name || e;
          },
          list: function () {
            for (var t = cc11001100_hook("t", this.data.get('dataList'), "var-init"), e = cc11001100_hook("e", this.data.get('column'), "var-init"), n = cc11001100_hook("n", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < t.length; a += cc11001100_hook("a", e, "assign")) n.push(t.slice(a, a + e));
            return n;
          },
          maxHeightStyle: function () {
            var t = cc11001100_hook("t", this.data.get('maxHeight'), "var-init");
            return t ? 'height:' + t + ';overflow:scroll;' : '';
          }
        }, "assign"), e;
      }(n(0).Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", i, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e.disappearTimer = cc11001100_hook("e.disappearTimer", null, "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            zindex: cc11001100_hook("zindex", 10, "object-key-init"),
            pos: cc11001100_hook("pos", null, "object-key-init"),
            duration: cc11001100_hook("duration", 2000, "object-key-init")
          };
        }, "assign"), e.prototype.attached = cc11001100_hook("e.prototype.attached", function () {
          this.show(), this.hide();
        }, "assign"), e.prototype.show = cc11001100_hook("e.prototype.show", function () {
          var t = cc11001100_hook("t", this.data.get('zindex'), "var-init"),
            e = cc11001100_hook("e", this.data.get('pos'), "var-init"),
            n = cc11001100_hook("n", ['z-index:' + t + ';', 'opacity: 1;'].join(''), "var-init"),
            a = cc11001100_hook("a", '', "var-init");
          if (e) for (var i in e) a += cc11001100_hook("a", i + ':' + e[i] + ';', "assign");else {
            var o = cc11001100_hook("o", this.el, "var-init");
            a = cc11001100_hook("a", ['left: 50%;top: 50%;', 'margin-top: -' + o.clientHeight / 2 + 'px;', 'margin-left:-' + o.clientWidth / 2 + 'px;'].join(''), "assign");
          }
          n += cc11001100_hook("n", a, "assign");
          var r = cc11001100_hook("r", this, "var-init");
          setTimeout(function () {
            r.fire('show', 'show'), r.data.set('customStyle', n);
          }, 20);
        }, "assign"), e.prototype.hide = cc11001100_hook("e.prototype.hide", function () {
          var t = cc11001100_hook("t", this.el, "var-init"),
            e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", this.data.get('duration'), "var-init");
          this.disappearTimer = cc11001100_hook("this.disappearTimer", setTimeout(function () {
            t.style.opacity = cc11001100_hook("t.style.opacity", '0', "assign"), setTimeout(function () {
              t.style.zIndex = cc11001100_hook("t.style.zIndex", '-1', "assign"), e.fire('hide', 'hide');
            }, 310);
          }, n), "assign");
        }, "assign"), e.prototype.detached = cc11001100_hook("e.prototype.detached", function () {
          clearTimeout(this.disappearTimer);
        }, "assign"), e;
      }(n(0).Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", i, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", a.__importDefault(n(16)), "var-init"),
      r = cc11001100_hook("r", function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            title: cc11001100_hook("title", '', "object-key-init"),
            subTitle: cc11001100_hook("subTitle", '', "object-key-init"),
            always: cc11001100_hook("always", !1, "object-key-init"),
            defaultBtnText: cc11001100_hook("defaultBtnText", '取消', "object-key-init"),
            primaryBtnText: cc11001100_hook("primaryBtnText", '确认', "object-key-init"),
            never: cc11001100_hook("never", !1, "object-key-init"),
            color: cc11001100_hook("color", 'rgba(0, 0, 0, 0.5)', "object-key-init"),
            posX: cc11001100_hook("posX", '0', "object-key-init"),
            posY: cc11001100_hook("posY", '0', "object-key-init"),
            style: cc11001100_hook("style", '', "object-key-init"),
            zIndex: cc11001100_hook("zIndex", 0, "object-key-init")
          };
        }, "assign"), e.prototype.setState = cc11001100_hook("e.prototype.setState", function (t) {
          this.data.set('never', t.checked);
        }, "assign"), e.prototype.close = cc11001100_hook("e.prototype.close", function (t) {
          this.fire('close', {
            from: cc11001100_hook("from", t, "object-key-init")
          });
        }, "assign"), e.prototype.cancel = cc11001100_hook("e.prototype.cancel", function () {
          this.fire('cancel', {
            never: cc11001100_hook("never", this.data.get('never'), "object-key-init")
          }), this.close('cancel');
        }, "assign"), e.prototype.confirm = cc11001100_hook("e.prototype.confirm", function () {
          this.fire('confirm', {
            never: cc11001100_hook("never", this.data.get('never'), "object-key-init")
          }), this.close('confirm');
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'c-checkbox': cc11001100_hook('c-checkbox', o['default'], "object-key-init")
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", r, "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(59)], "var-init"),
      o = cc11001100_hook("o", n(61), "var-init"),
      r = cc11001100_hook("r", n(17)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(17), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            value: cc11001100_hook("value", '', "object-key-init"),
            name: cc11001100_hook("name", '', "object-key-init"),
            label: cc11001100_hook("label", '', "object-key-init"),
            checked: cc11001100_hook("checked", !1, "object-key-init"),
            disabled: cc11001100_hook("disabled", !1, "object-key-init"),
            bgColor: cc11001100_hook("bgColor", '', "object-key-init"),
            innerColor: cc11001100_hook("innerColor", '', "object-key-init")
          };
        }, "assign"), e.prototype.change = cc11001100_hook("e.prototype.change", function (t) {
          var e = cc11001100_hook("e", (t.target || t.srcElement).checked, "var-init");
          this.data.set('currentValue', e), this.fire('change', {
            checked: cc11001100_hook("checked", e, "object-key-init"),
            value: cc11001100_hook("value", this.data.get('value'), "object-key-init"),
            name: cc11001100_hook("name", this.data.get('name'), "object-key-init")
          });
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          currentValue: function () {
            return this.data.get('checked');
          },
          propertyVal: function () {
            var t = cc11001100_hook("t", {}, "var-init"),
              e = cc11001100_hook("e", this.data.get('value'), "var-init");
            return e && (t.value = cc11001100_hook("t.value", e, "assign")), this.data.get('checked') && (t.checked = cc11001100_hook("t.checked", 'checked', "assign")), t;
          }
        }, "assign"), e;
      }(n(0).Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", i, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            size: cc11001100_hook("size", 'medium', "object-key-init"),
            type: cc11001100_hook("type", 'primary', "object-key-init"),
            icon: cc11001100_hook("icon", '', "object-key-init"),
            text: cc11001100_hook("text", '', "object-key-init")
          };
        }, "assign"), e.prototype.inited = cc11001100_hook("e.prototype.inited", function () {
          'big' === this.data.get('size') && this.data.set('size', 'auto');
        }, "assign"), e.prototype.buttonClick = cc11001100_hook("e.prototype.buttonClick", function (t) {
          this.fire('click', t);
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          btnSize: function () {
            var t = cc11001100_hook("t", this.data.get('size'), "var-init");
            return 'big' === t || 'medium' === t || 'large' === t ? '' : 'c-btn-' + t;
          },
          btnType: function () {
            return 'c-btn-' + this.data.get('type');
          }
        }, "assign"), e;
      }(n(0).Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", i, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "var-init"),
      o = cc11001100_hook("o", function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            value: cc11001100_hook("value", '', "object-key-init"),
            placeholder: cc11001100_hook("placeholder", '', "object-key-init"),
            type: cc11001100_hook("type", 'input', "object-key-init"),
            widthSize: cc11001100_hook("widthSize", '', "object-key-init"),
            heightSize: cc11001100_hook("heightSize", '', "object-key-init"),
            specialSize: cc11001100_hook("specialSize", 0, "object-key-init"),
            waterMark: {
              imgUrlOnce: cc11001100_hook("imgUrlOnce", '//', "object-key-init"),
              imgUrlTwice: cc11001100_hook("imgUrlTwice", '//', "object-key-init")
            },
            params: {},
            isFocus: cc11001100_hook("isFocus", !1, "object-key-init"),
            clearable: cc11001100_hook("clearable", !1, "object-key-init"),
            clickClear: cc11001100_hook("clickClear", !1, "object-key-init")
          };
        }, "assign"), e.prototype.clearInput = cc11001100_hook("e.prototype.clearInput", function () {
          this.data.set('clickClear', !0), this.data.set('value', '');
        }, "assign"), e.prototype.inputSpecialSize = cc11001100_hook("e.prototype.inputSpecialSize", function () {
          var t = cc11001100_hook("t", this.sourceSlotNameProps ? this.sourceSlotNameProps.length : 0, "var-init"),
            e = cc11001100_hook("e", this.data.get('clearable'), "var-init"),
            n = cc11001100_hook("n", this.data.get('inputWidthSize') - 22 - 26 * t - 26 * (e ? 1 : 0), "var-init"),
            a = cc11001100_hook("a", this.data.get('specialSize'), "var-init");
          return a ? {
            width: cc11001100_hook("width", a + 'px', "object-key-init")
          } : {
            width: cc11001100_hook("width", n + 'px', "object-key-init")
          };
        }, "assign"), e.prototype.getInput = cc11001100_hook("e.prototype.getInput", function () {
          return this.ref('input') || this.ref('textarea');
        }, "assign"), e.prototype.clickWaterMark = cc11001100_hook("e.prototype.clickWaterMark", function () {
          this.getInput().focus(), this.data.set('isFocus', !0);
        }, "assign"), e.prototype.handleInput = cc11001100_hook("e.prototype.handleInput", function (t) {
          this.fire('input', t);
        }, "assign"), e.prototype.handleFocus = cc11001100_hook("e.prototype.handleFocus", function (t) {
          this.data.set('isFocus', !0), this.fire('focus', t);
        }, "assign"), e.prototype.handleBlur = cc11001100_hook("e.prototype.handleBlur", function (t) {
          this.data.get('clickClear') ? (this.getInput().focus(), this.data.set('clickClear', !1)) : (this.data.set('isFocus', !1), this.fire('blur', t));
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          inputWidthSize: function () {
            parseInt(this.data.get('widthSize'), 10);
            var t = cc11001100_hook("t", i[this.data.get('widthSize') - 1], "var-init");
            return 32 * t + 16 * (t - 1);
          },
          inputHeightSize: function () {
            var t = cc11001100_hook("t", this.data.get('heightSize'), "var-init");
            return 'input' === this.data.get('type') ? 'input-height-' + (t || 'mini') : 'textarea-height-large';
          },
          waterMarkStyle: function () {
            var t = cc11001100_hook("t", this.data.get('waterMark'), "var-init");
            return '//' === t.imgUrlOnce && '//' === t.imgUrlTwice ? '' : ['background:url(' + t.imgUrlOnce + ') no-repeat center;', 'background:url(' + t.imgUrlTwice + ') no-repeat center / contain;'].join('');
          }
        }, "assign"), e;
      }(n(0).Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", o, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", a.__importDefault(n(74)), "var-init"),
      r = cc11001100_hook("r", a.__importDefault(n(78)), "var-init"),
      s = cc11001100_hook("s", n(82), "var-init"),
      c = cc11001100_hook("c", ['日', '一', '二', '三', '四', '五', '六'], "var-init"),
      l = cc11001100_hook("l", function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            col: cc11001100_hook("col", 4, "object-key-init"),
            icon: cc11001100_hook("icon", '&#xe669;', "object-key-init"),
            selectDate: cc11001100_hook("selectDate", new Date(), "object-key-init"),
            firstDayOfWeek: cc11001100_hook("firstDayOfWeek", 7, "object-key-init"),
            checkAvailableBeforeNowDay: cc11001100_hook("checkAvailableBeforeNowDay", 0, "object-key-init"),
            checkAvailableAfterNowDay: cc11001100_hook("checkAvailableAfterNowDay", 0, "object-key-init"),
            date: cc11001100_hook("date", new Date(), "object-key-init"),
            showCheckDate: cc11001100_hook("showCheckDate", !1, "object-key-init"),
            renderTbody: cc11001100_hook("renderTbody", [], "object-key-init")
          };
        }, "assign"), e.prototype.dateChange = cc11001100_hook("e.prototype.dateChange", function () {
          var t = cc11001100_hook("t", this.data.get('selectDate'), "var-init");
          t = cc11001100_hook("t", new Date(t.setHours(0, 0, 0, 0)), "assign");
          var e = cc11001100_hook("e", this.data.get('selectDateYear'), "var-init"),
            n = cc11001100_hook("n", this.data.get('selectDateMonth'), "var-init"),
            a = cc11001100_hook("a", this.data.get('selectDateDay'), "var-init"),
            i = cc11001100_hook("i", this.data.get('selectDateWeek'), "var-init");
          this.fire('change', {
            selectDate: cc11001100_hook("selectDate", t, "object-key-init"),
            selectDateYear: cc11001100_hook("selectDateYear", e, "object-key-init"),
            selectDateMonth: cc11001100_hook("selectDateMonth", n, "object-key-init"),
            selectDateDay: cc11001100_hook("selectDateDay", a, "object-key-init"),
            selectDateWeek: cc11001100_hook("selectDateWeek", i, "object-key-init")
          });
        }, "assign"), e.prototype.stopPop = cc11001100_hook("e.prototype.stopPop", function (t) {
          t.stopPropagation ? t.stopPropagation() : t.cancelBubble = cc11001100_hook("t.cancelBubble", !0, "assign");
        }, "assign"), e.prototype.checkDateOpen = cc11001100_hook("e.prototype.checkDateOpen", function () {
          var t = cc11001100_hook("t", this, "var-init"),
            e = cc11001100_hook("e", this.data.get('showCheckDate'), "var-init");
          this.nextTick(function () {
            return !e && t.data.set('showCheckDate', !0);
          });
        }, "assign"), e.prototype.checkDateClose = cc11001100_hook("e.prototype.checkDateClose", function () {
          this.data.get('showCheckDate') && this.data.set('showCheckDate', !1);
        }, "assign"), e.prototype.range = cc11001100_hook("e.prototype.range", function (t) {
          return Array.apply(null, {
            length: cc11001100_hook("length", t, "object-key-init")
          }).map(function (t, e) {
            return e;
          });
        }, "assign"), e.prototype.toNestedArr = cc11001100_hook("e.prototype.toNestedArr", function (t) {
          return this.range(t.length / 7).map(function (e, n) {
            var a = cc11001100_hook("a", 7 * n, "var-init");
            return t.slice(a, a + 7);
          });
        }, "assign"), e.prototype.getFirstDayOfMonth = cc11001100_hook("e.prototype.getFirstDayOfMonth", function (t) {
          var e = cc11001100_hook("e", new Date(t.getTime()), "var-init");
          return e.setDate(1), e.getDay();
        }, "assign"), e.prototype.getPrevMonthLastDays = cc11001100_hook("e.prototype.getPrevMonthLastDays", function (t, e) {
          if (e <= 0) return [];
          var n = cc11001100_hook("n", new Date(t.getTime()), "var-init");
          n.setDate(0);
          var a = cc11001100_hook("a", n.getDate(), "var-init");
          return this.range(e).map(function (t, n) {
            return a - (e - n - 1);
          });
        }, "assign"), e.prototype.getMonthDays = cc11001100_hook("e.prototype.getMonthDays", function (t) {
          var e = cc11001100_hook("e", new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate(), "var-init");
          return this.range(e).map(function (t, e) {
            return e + 1;
          });
        }, "assign"), e.prototype.getNowClass = cc11001100_hook("e.prototype.getNowClass", function (t) {
          var e = cc11001100_hook("e", t.text, "var-init"),
            n = cc11001100_hook("n", t.type, "var-init"),
            a = cc11001100_hook("a", this.data.get('date'), "var-init"),
            i = cc11001100_hook("i", this.data.get('selectDate'), "var-init"),
            o = cc11001100_hook("o", parseInt('' + a.getFullYear() + (a.getMonth() + 1)), "var-init"),
            r = cc11001100_hook("r", parseInt('' + i.getFullYear() + (i.getMonth() + 1)), "var-init");
          return 'current' === n && o === r && e === a.getDate();
        }, "assign"), e.prototype.getSelectClass = cc11001100_hook("e.prototype.getSelectClass", function (t) {
          var e = cc11001100_hook("e", t.text, "var-init"),
            n = cc11001100_hook("n", t.type, "var-init"),
            a = cc11001100_hook("a", this.data.get('selectDate'), "var-init");
          return 'current' === n && e === a.getDate();
        }, "assign"), e.prototype.pickDay = cc11001100_hook("e.prototype.pickDay", function (t) {
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", t.text, "var-init");
          if ('current' === t.type) {
            var a = cc11001100_hook("a", new Date(), "var-init"),
              i = cc11001100_hook("i", this.data.get('selectDate'), "var-init");
            a.setFullYear(i.getFullYear(), i.getMonth(), n), this.data.set('selectDate', a), this.checkDateClose(), this.nextTick(function () {
              e.rows(), e.dateChange();
            });
          }
        }, "assign"), e.prototype.getLastDay = cc11001100_hook("e.prototype.getLastDay", function (t, e) {
          return new Date(t, e, 0).getDate();
        }, "assign"), e.prototype.changeMonth = cc11001100_hook("e.prototype.changeMonth", function (t) {
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", (new Date(), this.data.get('checkAvailableBeforeNowDay')), "var-init"),
            a = cc11001100_hook("a", this.data.get('checkAvailableAfterNowDay'), "var-init"),
            i = cc11001100_hook("i", new Date(n), "var-init"),
            o = cc11001100_hook("o", new Date(a), "var-init"),
            r = cc11001100_hook("r", this.data.get('selectDate'), "var-init"),
            s = cc11001100_hook("s", new Date(new Date(r.getTime()).setDate(0)), "var-init"),
            c = cc11001100_hook("c", new Date(r.getFullYear(), r.getMonth() + 1, 1), "var-init"),
            l = cc11001100_hook("l", this.data.get('selectDate'), "var-init"),
            p = cc11001100_hook("p", new Date().getDate(), "var-init");
          'prevMonth' === t ? (p = cc11001100_hook("p", this.getLastDay(s.getFullYear(), s.getMonth() + 1), "assign"), l = cc11001100_hook("l", r.getDate() >= p ? new Date(s.setDate(p)) : new Date(s.setDate(r.getDate())), "assign"), n && s.getFullYear() === i.getFullYear() && s.getMonth() === i.getMonth() && (l = cc11001100_hook("l", r.getDate() <= i.getDate() ? new Date(i.setDate(i.getDate())) : new Date(i.setDate(r.getDate())), "assign"))) : 'nextMonth' === t && (p = cc11001100_hook("p", this.getLastDay(c.getFullYear(), c.getMonth() + 1), "assign"), l = cc11001100_hook("l", r.getDate() >= p ? new Date(c.setDate(p)) : new Date(c.setDate(r.getDate())), "assign"), a && c.getFullYear() === o.getFullYear() && c.getMonth() === o.getMonth() && (l = cc11001100_hook("l", (r.getDate(), o.getDate(), new Date(o.setDate(o.getDate()))), "assign"))), this.data.set('selectDate', l), this.nextTick(function () {
            e.rows();
          });
        }, "assign"), e.prototype.checkPreOrCur = cc11001100_hook("e.prototype.checkPreOrCur", function (t) {
          var e = cc11001100_hook("e", this.data.get('checkAvailableBeforeNowDay'), "var-init"),
            n = cc11001100_hook("n", new Date(e), "var-init"),
            a = cc11001100_hook("a", n.getFullYear(), "var-init"),
            i = cc11001100_hook("i", n.getMonth() + 1, "var-init"),
            o = cc11001100_hook("o", this.data.get('checkAvailableAfterNowDay'), "var-init"),
            r = cc11001100_hook("r", new Date(o), "var-init"),
            s = cc11001100_hook("s", r.getFullYear(), "var-init"),
            c = cc11001100_hook("c", r.getMonth() + 1, "var-init"),
            l = cc11001100_hook("l", this.data.get('selectDate'), "var-init"),
            p = cc11001100_hook("p", l.getFullYear(), "var-init"),
            d = cc11001100_hook("d", l.getMonth() + 1, "var-init");
          if (e) {
            if (a > p) return {
              text: cc11001100_hook("text", t, "object-key-init"),
              type: cc11001100_hook("type", 'prev', "object-key-init")
            };
            if (a === p) {
              if (i > d) return {
                text: cc11001100_hook("text", t, "object-key-init"),
                type: cc11001100_hook("type", 'prev', "object-key-init")
              };
              if (i === d && t < n.getDate()) return {
                text: cc11001100_hook("text", t, "object-key-init"),
                type: cc11001100_hook("type", 'prev', "object-key-init")
              };
            }
          }
          if (o) {
            if (s < p) return {
              text: cc11001100_hook("text", t, "object-key-init"),
              type: cc11001100_hook("type", 'prev', "object-key-init")
            };
            if (s === p) {
              if (c < d) return {
                text: cc11001100_hook("text", t, "object-key-init"),
                type: cc11001100_hook("type", 'prev', "object-key-init")
              };
              if (c === d && t > r.getDate()) return {
                text: cc11001100_hook("text", t, "object-key-init"),
                type: cc11001100_hook("type", 'prev', "object-key-init")
              };
            }
          }
          return {
            text: cc11001100_hook("text", t, "object-key-init"),
            type: cc11001100_hook("type", 'current', "object-key-init")
          };
        }, "assign"), e.prototype.rows = cc11001100_hook("e.prototype.rows", function () {
          var t = cc11001100_hook("t", this, "var-init"),
            e = cc11001100_hook("e", [], "var-init"),
            n = cc11001100_hook("n", this.data.get('selectDate'), "var-init"),
            i = cc11001100_hook("i", this.data.get('realFirstDayOfWeek'), "var-init");
          i = cc11001100_hook("i", 'number' == typeof i ? i : 1, "assign");
          var o = cc11001100_hook("o", this.getFirstDayOfMonth(n), "var-init");
          o = cc11001100_hook("o", 0 === o ? 7 : o, "assign");
          var r = cc11001100_hook("r", this.getPrevMonthLastDays(n, o - i).map(function (t) {
              return {
                text: cc11001100_hook("text", t, "object-key-init"),
                type: cc11001100_hook("type", 'prev', "object-key-init")
              };
            }), "var-init"),
            s = cc11001100_hook("s", this.getMonthDays(n).map(function (e) {
              return t.checkPreOrCur(e);
            }), "var-init");
          e = cc11001100_hook("e", a.__spreadArrays(r, s), "assign");
          var c = cc11001100_hook("c", this.range(42 - e.length).map(function (t, e) {
            return {
              text: cc11001100_hook("text", e + 1, "object-key-init"),
              type: cc11001100_hook("type", 'next', "object-key-init")
            };
          }), "var-init");
          e = cc11001100_hook("e", e.concat(c), "assign"), this.data.set('renderTbody', this.toNestedArr(e));
        }, "assign"), e.prototype.attached = cc11001100_hook("e.prototype.attached", function () {
          var t = cc11001100_hook("t", this, "var-init");
          s.addEventListener(window, 'click', this.checkDateClose.bind(this)), this.rows(), this.watch('selectDate', function (e) {
            t.rows();
          }), this.watch('checkAvailableBeforeNowDay', function (e) {
            t.rows();
          }), this.watch('checkAvailableAfterNowDay', function (e) {
            t.rows();
          });
        }, "assign"), e.prototype.detached = cc11001100_hook("e.prototype.detached", function () {
          s.removeEventListener(window, 'click', this.checkDateClose.bind(this));
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'c-row': cc11001100_hook('c-row', o['default'], "object-key-init"),
          'c-span': cc11001100_hook('c-span', r['default'], "object-key-init")
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          realFirstDayOfWeek: function () {
            var t = cc11001100_hook("t", this.data.get('firstDayOfWeek'), "var-init");
            return t < 1 || t > 6 ? 0 : Math.floor(t);
          },
          weekDays: function () {
            var t = cc11001100_hook("t", this.data.get('realFirstDayOfWeek'), "var-init");
            return 'number' != typeof t || 0 === t ? c.slice() : c.slice(t).concat(c.slice(0, t));
          },
          selectDateYear: function () {
            return this.data.get('selectDate').getFullYear();
          },
          selectDateMonth: function () {
            return this.data.get('selectDate').getMonth() + 1;
          },
          selectDateDay: function () {
            return this.data.get('selectDate').getDate();
          },
          selectDateWeek: function () {
            var t = cc11001100_hook("t", this.data.get('selectDate'), "var-init");
            return c[t.getDay()];
          },
          hideLeftBtn: function () {
            var t = cc11001100_hook("t", this.data.get('checkAvailableBeforeNowDay'), "var-init"),
              e = cc11001100_hook("e", this.data.get('selectDate'), "var-init"),
              n = cc11001100_hook("n", new Date(t), "var-init");
            return !(!t || e.getFullYear() !== n.getFullYear() || e.getMonth() !== n.getMonth());
          },
          hideRightBtn: function () {
            var t = cc11001100_hook("t", this.data.get('checkAvailableAfterNowDay'), "var-init"),
              e = cc11001100_hook("e", this.data.get('selectDate'), "var-init"),
              n = cc11001100_hook("n", new Date(t), "var-init");
            return !(!t || e.getFullYear() !== n.getFullYear() || e.getMonth() !== n.getMonth());
          }
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", l, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            type: cc11001100_hook("type", '', "object-key-init"),
            vericalAlign: cc11001100_hook("vericalAlign", '', "object-key-init")
          };
        }, "assign"), e;
      }(n(0).Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", i, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            col: cc11001100_hook("col", '', "object-key-init")
          };
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          colName: function () {
            var t = cc11001100_hook("t", this.data.get('col'), "var-init");
            return t ? 'c-span' + t : '';
          }
        }, "assign"), e;
      }(n(0).Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", i, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", a.__importDefault(n(6)), "var-init"),
      r = cc11001100_hook("r", a.__importDefault(n(7)), "var-init"),
      s = cc11001100_hook("s", n(5), "var-init"),
      c = cc11001100_hook("c", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            pasteShow: cc11001100_hook("pasteShow", !1, "object-key-init"),
            meetInfo: cc11001100_hook("meetInfo", null, "object-key-init"),
            shareInfo: cc11001100_hook("shareInfo", '', "object-key-init"),
            copyInit: cc11001100_hook("copyInit", !1, "object-key-init")
          };
        }, "assign"), e.prototype.processMeetInfo = cc11001100_hook("e.prototype.processMeetInfo", function () {
          var t,
            e = cc11001100_hook("e", this.data.get('meetInfo').data, "var-init"),
            n = cc11001100_hook("n", e.url, "var-init"),
            a = cc11001100_hook("a", this.getDuration(e.duration), "var-init"),
            i = cc11001100_hook("i", e.name, "var-init"),
            o = cc11001100_hook("o", this.processDate(e.startTime, e.endTime), "var-init"),
            r = cc11001100_hook("r", e.description, "var-init"),
            s = cc11001100_hook("s", e.roomowner, "var-init");
          e.needPasswd && (t = cc11001100_hook("t", e.passwd, "assign"));
          var c = cc11001100_hook("c", e.partner, "var-init");
          this.data.set('shareInfo', {
            name: cc11001100_hook("name", i, "object-key-init"),
            meetTime: cc11001100_hook("meetTime", o, "object-key-init"),
            duration: cc11001100_hook("duration", a, "object-key-init"),
            meetUrl: cc11001100_hook("meetUrl", n, "object-key-init"),
            description: cc11001100_hook("description", r, "object-key-init"),
            passwd: cc11001100_hook("passwd", t, "object-key-init"),
            partner: cc11001100_hook("partner", c, "object-key-init"),
            owner: cc11001100_hook("owner", s, "object-key-init")
          });
        }, "assign"), e.prototype.getDuration = cc11001100_hook("e.prototype.getDuration", function (t) {
          var e = cc11001100_hook("e", '30分钟', "var-init"),
            n = cc11001100_hook("n", t / 60, "var-init");
          return n > 0.5 && (e = cc11001100_hook("e", n + '小时', "assign")), e;
        }, "assign"), e.prototype.processDate = cc11001100_hook("e.prototype.processDate", function (t, e) {
          return t.date === e.date ? t.date + ' ' + t.time + '-' + e.time : t.date + ' ' + t.time + '-' + e.date + ' ' + e.time;
        }, "assign"), e.prototype.attached = cc11001100_hook("e.prototype.attached", function () {
          this.processMeetInfo();
        }, "assign"), e.prototype.startMeet = cc11001100_hook("e.prototype.startMeet", function () {
          var t = cc11001100_hook("t", this, "var-init"),
            e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", this.data.get('meetInfo').data, "var-init"),
            a = cc11001100_hook("a", this.data.get('shareInfo'), "var-init");
          fetch('/home/meeting/data/detail?&r=' + n.roomTag, {
            method: cc11001100_hook("method", 'get', "object-key-init")
          }).then(function (t) {
            return t.json();
          }).then(function (t) {
            if (0 === t.errno) {
              var i = cc11001100_hook("i", t.data, "var-init"),
                o = cc11001100_hook("o", {
                  startTime: cc11001100_hook("startTime", i.startTime.time, "object-key-init"),
                  startDateArr: cc11001100_hook("startDateArr", i.startTime.date.split('/'), "object-key-init"),
                  duration: cc11001100_hook("duration", i.duration, "object-key-init"),
                  endTime: cc11001100_hook("endTime", i.endTime.time, "object-key-init"),
                  endDateArr: cc11001100_hook("endDateArr", i.endTime.date.split('/'), "object-key-init"),
                  name: cc11001100_hook("name", i.name, "object-key-init"),
                  jumpUrl: cc11001100_hook("jumpUrl", t.jumpUrl, "object-key-init"),
                  jumpInfo: cc11001100_hook("jumpInfo", t.jumpInfo, "object-key-init"),
                  roomowner: cc11001100_hook("roomowner", a.owner, "object-key-init"),
                  r: cc11001100_hook("r", n.roomTag, "object-key-init"),
                  joinStatus: cc11001100_hook("joinStatus", i.joinStatus, "object-key-init")
                }, "var-init");
              a.passwd && (o.passwd = cc11001100_hook("o.passwd", a.passwd, "assign")), e.fire('meetStart', o);
            }
          }, function (e) {
            t.dispatch('disconnectedError', !0);
          });
        }, "assign"), e.prototype.share = cc11001100_hook("e.prototype.share", function () {
          var t,
            e,
            n = cc11001100_hook("n", this.data.get('shareInfo'), "var-init"),
            a = cc11001100_hook("a", '', "var-init");
          n.partner && n.partner.length > 0 && (a = cc11001100_hook("a", '参会人\uFF1A' + n.partner.join('\uFF1B'), "assign")), document.querySelector('#copyInput') || ((t = cc11001100_hook("t", document.createElement('textarea'), "assign")).style.opacity = cc11001100_hook("(t = document.createElement('textarea')).style.opacity", '0', "assign"), t.value = cc11001100_hook("t.value", n.owner + ' 邀请您参加百度视频云会议\n会议主题\uFF1A ' + n.name + '\n会议时间\uFF1A ' + n.meetTime, "assign"), a && (t.value += cc11001100_hook("t.value", '\n' + a, "assign")), t.value += cc11001100_hook("t.value", n.passwd ? '\n参会密码\uFF1A ' + n.passwd : '', "assign"), t.value += cc11001100_hook("t.value", n.description ? '\n会议描述\uFF1A' + n.description : '', "assign"), t.value += cc11001100_hook("t.value", '\n请点击下方链接参加会议\uFF1A\n' + n.meetUrl, "assign"), t.contentEditable = cc11001100_hook("t.contentEditable", !0, "assign"), t.setAttribute('id', 'copyInput'));
          var i = cc11001100_hook("i", this.ref('quickContent'), "var-init");
          if (!this.data.get('copyInit')) {
            i.appendChild(t), t.select();
            var o = cc11001100_hook("o", void 0, "var-init"),
              r = cc11001100_hook("r", void 0, "var-init");
            r = cc11001100_hook("r", document.getSelection(), "assign"), (o = cc11001100_hook("o", document.createRange(), "assign")).selectNode(t), r.addRange(o), t.setSelectionRange(0, t.value.length);
          }
          e = cc11001100_hook("e", document.execCommand('copy'), "assign"), this.data.set('copyInit', !0), e && this.data.set('pasteShow', !0);
        }, "assign"), e.prototype.switchToast = cc11001100_hook("e.prototype.switchToast", function () {
          this.data.set('pasteShow', !1);
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'v-header': cc11001100_hook('v-header', o['default'], "object-key-init"),
          'v-foot': cc11001100_hook('v-foot', r['default'], "object-key-init"),
          'c-btn': cc11001100_hook('c-btn', s.Button, "object-key-init"),
          'c-toast': cc11001100_hook('c-toast', s.Toast, "object-key-init")
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          pastePos: function () {
            return {
              top: cc11001100_hook("top", '211px', "object-key-init"),
              left: cc11001100_hook("left", '147px', "object-key-init")
            };
          },
          meetType: function () {
            return ['快速会议', '预约会议'][this.data.get('meetInfo').type];
          }
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", c, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            text: cc11001100_hook("text", '', "object-key-init"),
            tipText: cc11001100_hook("tipText", '', "object-key-init"),
            type: cc11001100_hook("type", '', "object-key-init")
          };
        }, "assign"), e.prototype.footEvent = cc11001100_hook("e.prototype.footEvent", function (t) {
          'video-manage' === t ? this.dispatch('openManage', 6) : 'feedback' === t && (this.logSend({
            modName: cc11001100_hook("modName", 'superman:videomeeting', "object-key-init"),
            evtName: cc11001100_hook("evtName", 'feedbackClick', "object-key-init")
          }), this.dispatch('openFeedback', 2));
        }, "assign"), e.prototype.logSend = cc11001100_hook("e.prototype.logSend", function (t) {
          this.fire('logSend', t);
        }, "assign"), e;
      }(n(0).Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", i, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", a.__importDefault(n(6)), "var-init"),
      r = cc11001100_hook("r", a.__importDefault(n(7)), "var-init"),
      s = cc11001100_hook("s", a.__importDefault(n(26)), "var-init"),
      c = cc11001100_hook("c", n(5), "var-init"),
      l = cc11001100_hook("l", n(8), "var-init"),
      p = cc11001100_hook("p", n(9), "var-init"),
      d = cc11001100_hook("d", ['麦克风和摄像头', '麦克风', '摄像头'], "var-init"),
      u = cc11001100_hook("u", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            meetInfo: {
              startTime: cc11001100_hook("startTime", '', "object-key-init"),
              startDate: cc11001100_hook("startDate", '', "object-key-init"),
              endTime: cc11001100_hook("endTime", '', "object-key-init"),
              endDate: cc11001100_hook("endDate", '', "object-key-init"),
              name: cc11001100_hook("name", '', "object-key-init")
            },
            choice: {
              live: cc11001100_hook("live", !1, "object-key-init"),
              liveStatus: cc11001100_hook("liveStatus", '', "object-key-init"),
              voice: cc11001100_hook("voice", !0, "object-key-init"),
              voiceStatus: cc11001100_hook("voiceStatus", '', "object-key-init"),
              info: cc11001100_hook("info", !0, "object-key-init")
            },
            canstartMeet: {
              name: cc11001100_hook("name", !0, "object-key-init"),
              pass: cc11001100_hook("pass", !1, "object-key-init"),
              info: cc11001100_hook("info", !0, "object-key-init"),
              limit: cc11001100_hook("limit", !0, "object-key-init")
            },
            liveStreamFlag: cc11001100_hook("liveStreamFlag", null, "object-key-init"),
            voiceStreamFlag: cc11001100_hook("voiceStreamFlag", null, "object-key-init"),
            type: cc11001100_hook("type", '', "object-key-init"),
            timeSpan: cc11001100_hook("timeSpan", '', "object-key-init"),
            submitBtn: cc11001100_hook("submitBtn", '开启会议', "object-key-init"),
            warn: {
              nameText: cc11001100_hook("nameText", '请输入参会人姓名', "object-key-init"),
              passText: cc11001100_hook("passText", '请输入6位数字密码', "object-key-init")
            },
            boxChecked: cc11001100_hook("boxChecked", !1, "object-key-init"),
            errorMsg: {
              title: cc11001100_hook("title", '', "object-key-init"),
              sub1: cc11001100_hook("sub1", '', "object-key-init"),
              sub2: cc11001100_hook("sub2", '', "object-key-init")
            }
          };
        }, "assign"), e.prototype.chooseLimits = cc11001100_hook("e.prototype.chooseLimits", function (t) {
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", t.name, "var-init"),
            a = cc11001100_hook("a", 'choice.' + n, "var-init");
          if (t.checked) {
            if ('info' === t.name) {
              try {
                this.data.set('choice.info', !0), this.data.set('boxChecked', !0), window.localStorage.setItem('has-checked', '1');
              } catch (i) {}
              this.updateBtn();
            }
            this.data.set(a, !0), 'live' === n ? this.showVideo() : 'voice' === n && this.showVoice();
          } else {
            if ('info' === t.name) try {
              this.data.set('choice.info', !1), this.data.set('boxChecked', !1), window.localStorage.setItem('has-checked', '0');
            } catch (i) {}
            this.data.set(a, !1), this.nextTick(function () {
              e.changeLimit(n);
            }), this.updateBtn(), this.stopMedia(n);
          }
        }, "assign"), e.prototype.changeLimit = cc11001100_hook("e.prototype.changeLimit", function (t) {
          var e = cc11001100_hook("e", this.data.get('choice'), "var-init");
          this.data.get('liveState'), this.data.get('voiceState');
          if (e.voice || e.live) {
            if ('live' === t) {
              if (this.data.set('noLimit', !!e.voiceStatus), !e.voiceStatus) return void this.showVoice();
            } else if ('voice' === t && (this.data.set('noLimit', !!e.liveStatus), !e.liveStatus)) return void this.showVideo();
          } else this.data.set('noLimit', !1);
          this.handleErrorMsg(e);
        }, "assign"), e.prototype.attached = cc11001100_hook("e.prototype.attached", function () {
          var t = cc11001100_hook("t", '', "var-init");
          try {
            t = cc11001100_hook("t", window.localStorage.getItem('has-checked'), "assign");
          } catch (n) {
            t = cc11001100_hook("t", '', "assign");
          }
          t && '1' === t ? (this.data.set('boxChecked', !0), this.data.set('canstartMeet.info', !0)) : (this.data.set('boxChecked', !1), this.data.set('canstartMeet.info', !1));
          this.data.get('type');
          this.showVoice();
          var e = cc11001100_hook("e", this.data.get('meetInfo'), "var-init");
          this.data.set('input.name', e.roomowner), 0 === e.joinStatus ? (this.data.set('submitBtn', '会议未开始'), this.data.set('canstartMeet.limit', !1)) : 5 === e.joinStatus && (this.data.set('submitBtn', '会议已结束'), this.data.set('canstartMeet.limit', !1));
        }, "assign"), e.prototype.showVideo = cc11001100_hook("e.prototype.showVideo", function () {
          this.ref('videoMedia').style = cc11001100_hook("this.ref('videoMedia').style", 'display:block', "assign"), this.openVideo('live');
        }, "assign"), e.prototype.showVoice = cc11001100_hook("e.prototype.showVoice", function () {
          this.ref('voiceMedia').style = cc11001100_hook("this.ref('voiceMedia').style", 'display:block', "assign"), this.openVideo('voice');
        }, "assign"), e.prototype.updateBtn = cc11001100_hook("e.prototype.updateBtn", function () {
          var t = cc11001100_hook("t", this.data.get('boxChecked'), "var-init"),
            e = cc11001100_hook("e", this.data.get('canstartMeet'), "var-init"),
            n = cc11001100_hook("n", this.data.get('choice'), "var-init");
          this.data.get('warn.name');
          e.info ? n.info || this.data.set('canstartMeet.info', !1) : t && n.info ? this.data.set('canstartMeet.info', !0) : this.data.set('canstartMeet.info', !1);
        }, "assign"), e.prototype.stopMedia = cc11001100_hook("e.prototype.stopMedia", function (t) {
          this.data.get('choice');
          var e = cc11001100_hook("e", this.data.get(t + 'StreamFlag'), "var-init");
          e && (e.getTracks().forEach(function (t) {
            t.stop();
          }), ('live' === t ? this.ref('videoMedia') : this.ref('voiceMedia')).style = cc11001100_hook("('live' === t ? this.ref('videoMedia') : this.ref('voiceMedia')).style", 'display:none', "assign"));
        }, "assign"), e.prototype.clearMedia = cc11001100_hook("e.prototype.clearMedia", function (t) {
          this.stopMedia('voice'), this.stopMedia('live'), 'back' === t ? this.dispatch('goback', 0) : this.dispatch('exitMeet', 0);
        }, "assign"), e.prototype.openVideo = cc11001100_hook("e.prototype.openVideo", function (t) {
          var e,
            n = cc11001100_hook("n", this, "var-init"),
            a = cc11001100_hook("a", this, "var-init"),
            i = cc11001100_hook("i", (this.data.get('noLimit'), {
              audio: cc11001100_hook("audio", 'voice' === t, "object-key-init"),
              video: cc11001100_hook("video", 'live' === t && {
                width: cc11001100_hook("width", 320, "object-key-init"),
                height: cc11001100_hook("height", 128, "object-key-init")
              }, "object-key-init")
            }), "var-init");
          e = cc11001100_hook("e", 'live' === t ? document.querySelector('.videoMedia') : document.querySelector('.voiceMedia'), "assign"), navigator.mediaDevices ? navigator.mediaDevices.getUserMedia(i).then(function (a) {
            n.data.set('noLimit', !1), n.data.set(t + 'StreamFlag', a), e.srcObject = cc11001100_hook("e.srcObject", a, "assign"), e.onloadedmetadata = cc11001100_hook("e.onloadedmetadata", function () {
              e.play();
            }, "assign");
          })['catch'](function (e) {
            n.enumerateDevices(t, e.toString()), a.stopMedia('live'), a.stopMedia('voice'), n.data.set('noLimit', !0);
          }) : this.data.set('noLimit', !0);
        }, "assign"), e.prototype.enumerateDevices = cc11001100_hook("e.prototype.enumerateDevices", function (t, e) {
          var n = cc11001100_hook("n", this.data.get('choice'), "var-init");
          switch (e) {
            case 'NotFoundError: Requested device not found':
              n[t + 'Status'] = cc11001100_hook("n[t + 'Status']", 'notFound', "assign");
              break;
            case 'NotAllowedError: Permission denied':
              n[t + 'Status'] = cc11001100_hook("n[t + 'Status']", 'noPermission', "assign");
              break;
            case 'NotAllowedError: Permission denied by system':
              n[t + 'Status'] = cc11001100_hook("n[t + 'Status']", 'notFound', "assign");
          }
          this.handleErrorMsg(n);
        }, "assign"), e.prototype.handleErrorMsg = cc11001100_hook("e.prototype.handleErrorMsg", function (t) {
          t.voice && t.live && t.voiceStatus && t.liveStatus ? this.setErrorMsg(t.voiceStatus, 0) : t.voice && t.voiceStatus ? this.setErrorMsg(t.voiceStatus, 1) : t.live && t.liveStatus && this.setErrorMsg(t.liveStatus, 2);
        }, "assign"), e.prototype.setErrorMsg = cc11001100_hook("e.prototype.setErrorMsg", function (t, e) {
          var n = cc11001100_hook("n", d[e], "var-init"),
            a = cc11001100_hook("a", {
              notFound: {
                title: cc11001100_hook("title", '未检测到可用设备', "object-key-init"),
                sub1: cc11001100_hook("sub1", '未检测到可用' + n + '\uFF0C请您插入' + n + '设备后重试\u3002', "object-key-init"),
                sub2: cc11001100_hook("sub2", '为保证您的参会体验\uFF0C建议开启' + n + '入会\u3002', "object-key-init")
              },
              noPermission: {
                title: cc11001100_hook("title", n + '未授权', "object-key-init"),
                sub1: cc11001100_hook("sub1", '需要许可才能访问您的' + n + '\u3002单击浏览器地址中的' + n + '按钮\uFF0C并允许访问', "object-key-init"),
                sub2: cc11001100_hook("sub2", '如Mac系统授权后仍无法使用\uFF0C请打开\u3010系统偏好设置\u3011-> \u3010安全性与隐私\u3011->\u3010隐私\u3011选项中确认\u3010摄像头\u3011\u3010麦克风\u3011\u3010屏幕录制\u3011已经勾选上浏览器访问授权\uFF0C确认以上操作后点击刷新重试\u3002', "object-key-init")
              }
            }, "var-init");
          this.data.set('errorMsg', a[t]);
        }, "assign"), e.prototype.blurInput = cc11001100_hook("e.prototype.blurInput", function (t, e) {
          if (t) {
            var n = cc11001100_hook("n", t.target, "var-init");
            if ('name' === e) {
              if (!n.value) return void this.limitName(t);
              this.checkName(n, e);
            }
          }
        }, "assign"), e.prototype.checkName = cc11001100_hook("e.prototype.checkName", function (t, e, n) {
          var a = cc11001100_hook("a", this, "var-init"),
            i = cc11001100_hook("i", t.value, "var-init"),
            o = cc11001100_hook("o", this, "var-init");
          l.fetch('/home/meeting/data/checkword?word=' + i, {
            method: cc11001100_hook("method", 'get', "object-key-init")
          }).then(function (t) {
            return t.json();
          }).then(function (t) {
            0 !== t.errno ? (a.data.set('warn.' + e, !0), a.data.set('canstartMeet.' + e, !1)) : (a.data.set('warn.' + e, !1), a.data.set('canstartMeet.' + e, !0), a.data.set('input.' + e, i), n && n.call(o)), a.data.set('input.nameChecked', !0);
          }, function (t) {
            a.dispatch('disconnectedError', !0);
          });
        }, "assign"), e.prototype.intoMeet = cc11001100_hook("e.prototype.intoMeet", function () {
          var t = cc11001100_hook("t", this, "var-init"),
            e = cc11001100_hook("e", this.data.get('input.name'), "var-init"),
            n = cc11001100_hook("n", this, "var-init"),
            a = cc11001100_hook("a", p.getBrowser(), "var-init"),
            i = cc11001100_hook("i", this.data.get('meetInfo'), "var-init"),
            o = cc11001100_hook("o", n.data.get('type'), "var-init"),
            r = cc11001100_hook("r", n.data.get('passwd'), "var-init");
          if (e) return 'Chrome' === a.type && a.versions >= 72 || 'Firefox' === a.type && a.versions >= 75 ? void setTimeout(function () {
            var a = cc11001100_hook("a", t.data.get('canstartMeet'), "var-init");
            if ('backflow' === o) {
              if (i.needPasswd && '0' !== i.needPasswd) {
                if (!r) return;
                r.length < 6 ? t.passStatus(!1) : a.name && a.info && a.pass && a.limit ? n.jumpUrl() : a.name || t.checkName({
                  value: cc11001100_hook("value", e, "object-key-init")
                }, 'name', t.buildJumpUrl);
              } else a.name && a.info && a.limit ? n.jumpUrl() : a.name || t.checkName({
                value: cc11001100_hook("value", e, "object-key-init")
              }, 'name', t.buildJumpUrl);
            } else a.name && a.info && a.limit ? n.jumpUrl('exit') : a.name || t.data.get('input.nameChecked') || n.checkName({
              value: cc11001100_hook("value", e, "object-key-init")
            }, 'name', t.buildJumpUrl);
          }, 300) : (n.stopMedia('voice'), n.stopMedia('live'), n.dispatch('exitMeet', 0), void window.open('/home/meeting/show/join?r=' + i.r));
        }, "assign"), e.prototype.jumpUrl = cc11001100_hook("e.prototype.jumpUrl", function (t) {
          this.stopMedia('voice'), this.stopMedia('live'), 'exit' === t && this.dispatch('exitMeet', 0), this.buildJumpUrl();
        }, "assign"), e.prototype.buildJumpUrl = cc11001100_hook("e.prototype.buildJumpUrl", function () {
          var t = cc11001100_hook("t", this.data.get('meetInfo'), "var-init"),
            e = cc11001100_hook("e", (this.data.get('choice'), this.data.get('liveState')), "var-init"),
            n = cc11001100_hook("n", this.data.get('voiceState'), "var-init"),
            a = cc11001100_hook("a", this.data.get('input.name'), "var-init"),
            i = cc11001100_hook("i", (this.ref('meetPass'), this.data.get('passwd')), "var-init"),
            o = cc11001100_hook("o", this.data.get('type'), "var-init"),
            r = cc11001100_hook("r", t.jumpUrl + '?', "var-init"),
            s = cc11001100_hook("s", t.jumpInfo, "var-init"),
            c = cc11001100_hook("c", {
              r: cc11001100_hook("r", t.r, "object-key-init"),
              f: cc11001100_hook("f", 'bd', "object-key-init"),
              aid: cc11001100_hook("aid", s.aid, "object-key-init"),
              token: cc11001100_hook("token", s.token, "object-key-init"),
              name: cc11001100_hook("name", a, "object-key-init"),
              microphone: cc11001100_hook("microphone", !1, "object-key-init"),
              camera: cc11001100_hook("camera", !1, "object-key-init")
            }, "var-init");
          for (var l in (i || t.passwd) && (c.s = cc11001100_hook("c.s", i || t.passwd, "assign")), n && (c.microphone = cc11001100_hook("c.microphone", !0, "assign")), e && (c.camera = cc11001100_hook("c.camera", !0, "assign")), c) r += cc11001100_hook("r", l + '=' + c[l] + '&', "assign");
          r = cc11001100_hook("r", r.substring(0, r.length - 1), "assign"), 'backflow' === o ? window.location.href = cc11001100_hook("window.location.href", r, "assign") : window.open(r);
        }, "assign"), e.prototype.limitName = cc11001100_hook("e.prototype.limitName", function (t) {
          t ? (t.target.value ? this.data.set('canstartMeet.name', !0) : (this.data.set('input.name', ''), this.data.set('warn.name', !1), this.data.set('canstartMeet.name', !1)), this.data.set('input.nameChecked', !1)) : (this.data.set('input.name', ''), this.data.set('warn.name', !1), this.data.set('canstartMeet.name', !1));
        }, "assign"), e.prototype.limitPass = cc11001100_hook("e.prototype.limitPass", function (t) {
          if (t) {
            var e = cc11001100_hook("e", t.target, "var-init");
            e && e.value && e.length < 6 && this.passStatus(!1);
          }
        }, "assign"), e.prototype.passStatus = cc11001100_hook("e.prototype.passStatus", function (t) {
          this.data.set('warn.pass', !t), this.data.set('canstartMeet.pass', t);
        }, "assign"), e.prototype.processPassShow = cc11001100_hook("e.prototype.processPassShow", function (t) {
          if (t) {
            var e = cc11001100_hook("e", t.target, "var-init"),
              n = cc11001100_hook("n", e ? e.value : '', "var-init");
            if (!n) return this.data.set('passwd', ''), this.data.set('warn.pass', !1), void this.data.set('canstartMeet.pass', !1);
            /.*[a-zA-Z\u4e00-\u9fa5]+.*$/.test(n) ? this.passStatus(!1) : (this.passStatus(!0), this.data.set('passwd', n));
          }
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'v-header': cc11001100_hook('v-header', o['default'], "object-key-init"),
          'v-foot': cc11001100_hook('v-foot', r['default'], "object-key-init"),
          'c-btn': cc11001100_hook('c-btn', c.Button, "object-key-init"),
          'c-checkbox': cc11001100_hook('c-checkbox', c.Checkbox, "object-key-init"),
          'c-input': cc11001100_hook('c-input', c.Input, "object-key-init"),
          'v-warn': cc11001100_hook('v-warn', s['default'], "object-key-init")
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          liveState: function () {
            var t = cc11001100_hook("t", this.data.get('choice'), "var-init");
            return t.live && !t.liveStatus;
          },
          voiceState: function () {
            var t = cc11001100_hook("t", this.data.get('choice'), "var-init");
            return t.voice && !t.voiceStatus;
          },
          timeSpan: function () {
            var t = cc11001100_hook("t", this.data.get('meetInfo.duration'), "var-init"),
              e = cc11001100_hook("e", t / 60, "var-init");
            return e >= 1 ? e + '小时' : t + '分钟';
          },
          checkboxType: function () {
            return 'backflow' === this.data.get('type') ? 'transparent' : '';
          },
          btnUseful: function () {
            var t = cc11001100_hook("t", this.data.get('canstartMeet'), "var-init"),
              e = cc11001100_hook("e", this.data.get('meetInfo.needPasswd'), "var-init");
            return e && '0' !== e ? t.name && t.info && t.limit && t.pass : t.name && t.info && t.limit;
          }
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", u, "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(94)], "var-init"),
      o = cc11001100_hook("o", n(96), "var-init"),
      r = cc11001100_hook("r", n(27)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(27), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            text: cc11001100_hook("text", '请重新输入', "object-key-init")
          };
        }, "assign"), e;
      }(n(0).Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", i, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", a.__importDefault(n(6)), "var-init"),
      r = cc11001100_hook("r", a.__importDefault(n(7)), "var-init"),
      s = cc11001100_hook("s", a.__importDefault(n(26)), "var-init"),
      c = cc11001100_hook("c", a.__importDefault(n(101)), "var-init"),
      l = cc11001100_hook("l", n(5), "var-init"),
      p = cc11001100_hook("p", n(8), "var-init"),
      d = cc11001100_hook("d", ['日', '一', '二', '三', '四', '五', '六'], "var-init"),
      u = cc11001100_hook("u", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            openPassInput: cc11001100_hook("openPassInput", !1, "object-key-init"),
            showsug: cc11001100_hook("showsug", !1, "object-key-init"),
            passShow: cc11001100_hook("passShow", !0, "object-key-init"),
            roomName: cc11001100_hook("roomName", '', "object-key-init"),
            startTime: cc11001100_hook("startTime", '', "object-key-init"),
            endTime: cc11001100_hook("endTime", '', "object-key-init"),
            passwd: cc11001100_hook("passwd", '', "object-key-init"),
            roomPartner: cc11001100_hook("roomPartner", [], "object-key-init"),
            canOpenMeet: {
              title: cc11001100_hook("title", !1, "object-key-init"),
              pass: cc11001100_hook("pass", !0, "object-key-init"),
              desc: cc11001100_hook("desc", !0, "object-key-init")
            },
            orderData: {
              startIndex: cc11001100_hook("startIndex", 0, "object-key-init"),
              endIndex: cc11001100_hook("endIndex", 1, "object-key-init")
            },
            startSelectList: cc11001100_hook("startSelectList", [], "object-key-init"),
            endSelectList: cc11001100_hook("endSelectList", [], "object-key-init"),
            startCalData: {
              calObj: cc11001100_hook("calObj", null, "object-key-init"),
              limitBefore: cc11001100_hook("limitBefore", new Date(), "object-key-init"),
              limitAfter: cc11001100_hook("limitAfter", 0, "object-key-init")
            },
            startCalDate: cc11001100_hook("startCalDate", new Date(), "object-key-init"),
            endCalData: {
              calObj: cc11001100_hook("calObj", null, "object-key-init"),
              limitBefore: cc11001100_hook("limitBefore", new Date().getTime() + 3600000, "object-key-init"),
              limitAfter: cc11001100_hook("limitAfter", new Date().getTime() + 90000000, "object-key-init"),
              initShow: cc11001100_hook("initShow", new Date(), "object-key-init")
            },
            showPlaceholder: cc11001100_hook("showPlaceholder", !0, "object-key-init"),
            roomId: cc11001100_hook("roomId", '', "object-key-init"),
            updatePasswd: cc11001100_hook("updatePasswd", 0, "object-key-init"),
            modifyMeet: cc11001100_hook("modifyMeet", !1, "object-key-init"),
            boxChecked: cc11001100_hook("boxChecked", !1, "object-key-init"),
            description: cc11001100_hook("description", '', "object-key-init"),
            partner: cc11001100_hook("partner", [], "object-key-init"),
            inputStatus: {
              title: cc11001100_hook("title", !1, "object-key-init"),
              desc: cc11001100_hook("desc", !1, "object-key-init")
            },
            warn: {
              titleText: cc11001100_hook("titleText", '请重新输入会议主题', "object-key-init"),
              passText: cc11001100_hook("passText", '请输入6位数字密码', "object-key-init"),
              descText: cc11001100_hook("descText", '请重新输入会议详情', "object-key-init")
            }
          };
        }, "assign"), e.prototype.attached = cc11001100_hook("e.prototype.attached", function () {
          var t = cc11001100_hook("t", this, "var-init");
          this.initPartner(), this.initCalDate(), p.fetch('/home/meeting/data/meeting', {
            method: cc11001100_hook("method", 'get', "object-key-init")
          }).then(function (t) {
            return t.json();
          }).then(function (e) {
            if (0 === e.errno) {
              var n = cc11001100_hook("n", e.data.mailList, "var-init");
              t.data.set('mailList', n);
            }
          }, function (e) {
            t.dispatch('disconnectedError', !0);
          });
        }, "assign"), e.prototype.initCalDate = cc11001100_hook("e.prototype.initCalDate", function () {
          var t = cc11001100_hook("t", this.data.get('endCalData').initShow || new Date(), "var-init"),
            e = cc11001100_hook("e", this.data.get('startCalDate') || new Date(), "var-init"),
            n = cc11001100_hook("n", this.data.get('orderData'), "var-init"),
            a = cc11001100_hook("a", n.startIndex || 0, "var-init"),
            i = cc11001100_hook("i", n.endIndex || 0, "var-init"),
            o = cc11001100_hook("o", this.data.get('passwd'), "var-init");
          this.data.get('openPassInput') && (this.ref('passinput').value = cc11001100_hook("this.ref('passinput').value", o, "assign"));
          this.data.set('startTime', n.startSelectList[a]), this.data.set('endTime', n.endSelectList[i]), this.data.set('startCalData.calObj', this.calParser(e)), this.data.set('endCalData.calObj', this.calParser(t));
        }, "assign"), e.prototype.trimDate = cc11001100_hook("e.prototype.trimDate", function (t) {
          return t.map(function (t) {
            return 0 === parseInt(t.slice(0, 1)) ? t.substr(1) : t;
          });
        }, "assign"), e.prototype.calParser = cc11001100_hook("e.prototype.calParser", function (t) {
          return {
            selectDate: cc11001100_hook("selectDate", t, "object-key-init"),
            selectDateYear: cc11001100_hook("selectDateYear", new Date(t).getFullYear(), "object-key-init"),
            selectDateMonth: cc11001100_hook("selectDateMonth", new Date(t).getMonth() + 1, "object-key-init"),
            selectDateDay: cc11001100_hook("selectDateDay", new Date(t).getDate(), "object-key-init"),
            selectDateWeek: cc11001100_hook("selectDateWeek", d[new Date(t).getDay()], "object-key-init")
          };
        }, "assign"), e.prototype.initPartner = cc11001100_hook("e.prototype.initPartner", function () {
          var t = cc11001100_hook("t", this.data.get('partner'), "var-init");
          if (t.length > 0) {
            this.data.set('showPlaceholder', !1);
            var e = cc11001100_hook("e", this.ref('sugRef'), "var-init");
            t.map(function (t) {
              e.insertPartner(t);
            });
          }
        }, "assign"), e.prototype.setPartner = cc11001100_hook("e.prototype.setPartner", function (t) {
          this.data.set('partner', t);
        }, "assign"), e.prototype.checkAvailableCal = cc11001100_hook("e.prototype.checkAvailableCal", function () {
          var t,
            e,
            n = cc11001100_hook("n", this.data.get('startCalData.calObj'), "var-init");
          n ? (t = cc11001100_hook("t", new Date(n.selectDate.getTime() + 1800000), "assign"), e = cc11001100_hook("e", n.selectDate.getTime() + 86400000, "assign")) : (t = cc11001100_hook("t", new Date(new Date().getTime() + 1800000), "assign"), e = cc11001100_hook("e", new Date().getTime() + 86400000, "assign")), this.data.set('endCalData.limitBefore', t), this.data.set('endCalData.initShow', t), this.data.set('endCalData.calObj', {
            selectDate: cc11001100_hook("selectDate", t, "object-key-init"),
            selectDateDay: cc11001100_hook("selectDateDay", t.getDate(), "object-key-init"),
            selectDateMonth: cc11001100_hook("selectDateMonth", t.getMonth() + 1, "object-key-init"),
            selectDateYear: cc11001100_hook("selectDateYear", t.getFullYear(), "object-key-init")
          }), this.data.set('endCalData.limitAfter', e), this.data.set('orderData.endIndex', 1);
        }, "assign"), e.prototype.openPass = cc11001100_hook("e.prototype.openPass", function (t) {
          if ('passwd' === t.name) {
            var e = cc11001100_hook("e", this.data.get('openPassInput'), "var-init"),
              n = cc11001100_hook("n", this.data.get('updatePasswd'), "var-init"),
              a = cc11001100_hook("a", this.data.get('modifyMeet'), "var-init");
            this.data.set('openPassInput', !e), t.checked || (this.data.set('passwd', ''), this.data.set('warn.pass', !1)), a && 0 === n && (this.data.set('updatePasswd', 1), this.clearPasswdInput());
          }
        }, "assign"), e.prototype.clearPasswdInput = cc11001100_hook("e.prototype.clearPasswdInput", function () {
          this.ref('passinput').value = cc11001100_hook("this.ref('passinput').value", '', "assign"), this.data.set('passwd', ''), this.data.set('passShow', !0);
        }, "assign"), e.prototype.getValue = cc11001100_hook("e.prototype.getValue", function (t) {
          if (t) {
            var e = cc11001100_hook("e", t.target, "var-init");
            e.value && (this.data.set('roomName', e.value), this.checkName(e.value));
          }
        }, "assign"), e.prototype.checkDesc = cc11001100_hook("e.prototype.checkDesc", function (t) {
          if (t) {
            var e = cc11001100_hook("e", t.target, "var-init");
            e.value && this.checkName(e.value, 'desc');
          }
        }, "assign"), e.prototype.updateDesc = cc11001100_hook("e.prototype.updateDesc", function (t) {
          t && (t.target.value || (this.data.set('warn.desc', !1), this.data.set('canOpenMeet.desc', !0)));
        }, "assign"), e.prototype.switchPass = cc11001100_hook("e.prototype.switchPass", function (t) {
          var e = cc11001100_hook("e", 'show' === t, "var-init"),
            n = cc11001100_hook("n", this.ref('passinput'), "var-init"),
            a = cc11001100_hook("a", this.data.get('passwd'), "var-init"),
            i = cc11001100_hook("i", this.data.get('updatePasswd'), "var-init");
          if (this.data.get('modifyMeet') && 0 === i) return this.data.set('updatePasswd', 1), n.value = cc11001100_hook("n.value", '', "assign"), this.data.set('passwd', ''), void n.focus();
          this.data.set('passShow', e), a && (n.value = cc11001100_hook("n.value", 'show' != t ? a.replace(/./g, '*') : a, "assign"));
        }, "assign"), e.prototype.processPassFocus = cc11001100_hook("e.prototype.processPassFocus", function () {
          var t = cc11001100_hook("t", this.data.get('updatePasswd'), "var-init");
          this.data.get('modifyMeet') && 0 === t && (this.data.set('updatePasswd', 1), this.clearPasswdInput());
        }, "assign"), e.prototype.passStatus = cc11001100_hook("e.prototype.passStatus", function (t) {
          this.data.set('warn.pass', !t), this.data.set('canOpenMeet.pass', t);
        }, "assign"), e.prototype.limitPass = cc11001100_hook("e.prototype.limitPass", function () {
          var t = cc11001100_hook("t", this.ref('passinput').value, "var-init");
          if (t && t.length < 6) return this.passStatus(!1), !1;
        }, "assign"), e.prototype.processPassShow = cc11001100_hook("e.prototype.processPassShow", function (t) {
          var e = cc11001100_hook("e", this.ref('passinput'), "var-init"),
            n = cc11001100_hook("n", e.value, "var-init");
          if (n) {
            if (/.*[a-zA-Z\u4e00-\u9fa5]+.*$/.test(n)) return this.passStatus(!1), !1;
            if (!(n.length > 6)) if (this.passStatus(!0), this.data.get('passShow')) this.data.set('passwd', n);else {
              var a = cc11001100_hook("a", this.data.get('passwd'), "var-init");
              if (a.length > n.length) a = cc11001100_hook("a", (a = cc11001100_hook("a", a.substring(0, n.length - 1), "assign")).substring(0, 6), "assign"), this.data.set('passwd', a);else {
                var i = cc11001100_hook("i", n.split('*'), "var-init");
                a += cc11001100_hook("a", i[i.length - 1], "assign"), e.value = cc11001100_hook("e.value", n.replace(/./g, '*'), "assign"), a = cc11001100_hook("a", a.substring(0, 6), "assign"), this.data.set('passwd', a);
              }
            }
          } else this.data.set('passwd', '');
        }, "assign"), e.prototype.openSelect = cc11001100_hook("e.prototype.openSelect", function (t) {
          var e = cc11001100_hook("e", document.body.getAttribute('class'), "var-init");
          document.body.setAttribute('class', e + ' video-scroll');
        }, "assign"), e.prototype.updateDataList = cc11001100_hook("e.prototype.updateDataList", function (t, e) {
          var n = cc11001100_hook("n", this.data.get(t + 'CalData.calObj'), "var-init"),
            a = cc11001100_hook("a", new Date(), "var-init"),
            i = cc11001100_hook("i", (this.data.get('startSelectList'), this.updateTime('start')), "var-init"),
            o = cc11001100_hook("o", this.updateTime('end'), "var-init"),
            r = cc11001100_hook("r", [], "var-init"),
            s = cc11001100_hook("s", [], "var-init");
          if (n.selectDateYear !== a.getFullYear() || n.selectDateMonth !== a.getMonth() + 1 || n.selectDateDay !== a.getDate()) {
            var c = cc11001100_hook("c", this.isOneDay(), "var-init");
            'start' === t ? ('cal' !== e ? (s = cc11001100_hook("s", this.formatEndList(i, !0), "assign"), o = cc11001100_hook("o", this.updateTime('end', s[1], 1), "assign")) : (i = cc11001100_hook("i", this.updateTime('start', '0:00', 1), "assign"), o = cc11001100_hook("o", this.updateTime('end', '1:00', 1), "assign"), r = cc11001100_hook("r", this.formatStartList(i, 1), "assign"), s = cc11001100_hook("s", this.formatEndList(i, !0), "assign"), this.data.set('orderData.startSelectList', r), this.data.set('orderData.startIndex', 0)), this.data.set('orderData.endSelectList', s), 'cal' !== e && o.hour > i.hour || i.hour === o.hour && o.minutes > i.minutes ? this.data.set('orderData.endIndex', s.indexOf(o.time)) : this.data.set('orderData.endIndex', 1)) : (c ? (r = cc11001100_hook("r", this.formatEndList(i, !0), "assign"), this.data.set('orderData.endIndex', 1)) : (r = cc11001100_hook("r", this.formatEndList(i, !1), "assign"), this.data.set('orderData.endIndex', 0)), this.data.set('orderData.endSelectList', r));
          } else {
            var l = cc11001100_hook("l", a.getHours(), "var-init"),
              p = cc11001100_hook("p", a.getMinutes(), "var-init");
            'cal' === e ? (i = cc11001100_hook("i", this.updateTime('start', l + ':' + p), "assign"), 'start' === t ? (r = cc11001100_hook("r", this.formatStartList(i, 1), "assign"), s = cc11001100_hook("s", this.formatEndList(i, !0), "assign"), this.data.set('orderData.startSelectList', r), this.data.set('orderData.startIndex', 0), this.data.set('orderData.endSelectList', s)) : (s = cc11001100_hook("s", this.formatEndList(i, !0), "assign"), this.data.set('orderData.endSelectList', s))) : (s = cc11001100_hook("s", this.formatEndList(i, !0), "assign"), this.data.set('orderData.endSelectList', s), s.length > 1 && '23:00' !== i.time ? this.data.set('orderData.endIndex', 1) : this.data.set('orderData.endIndex', 0), this.data.set('endTime', s[1]));
          }
        }, "assign"), e.prototype.formatStartList = cc11001100_hook("e.prototype.formatStartList", function (t, e) {
          var n = cc11001100_hook("n", t, "var-init"),
            a = cc11001100_hook("a", [], "var-init"),
            i = cc11001100_hook("i", n.hour, "var-init");
          n.minutes;
          for (var o = cc11001100_hook("o", i, "var-init"); o < 24; o++) o > i || 0 === i ? (a.push(o + ':00'), a.push(o + ':30')) : n.minutes <= 30 && o === i && a.push(o + ':30');
          return a;
        }, "assign"), e.prototype.formatEndList = cc11001100_hook("e.prototype.formatEndList", function (t, e) {
          var n = cc11001100_hook("n", t.hour, "var-init"),
            a = cc11001100_hook("a", t.minutes, "var-init"),
            i = cc11001100_hook("i", e, "var-init");
          !a && i && 23 !== n || (n += cc11001100_hook("n", 1, "assign"));
          var o = cc11001100_hook("o", [], "var-init");
          return 24 === n && (i = cc11001100_hook("i", !1, "assign"), this.updateEndCal()), i ? (o = cc11001100_hook("o", this.timeLoop(n, 24), "assign"), a || o.shift()) : (o = cc11001100_hook("o", this.timeLoop(0, n), "assign"), a || o.pop()), o;
        }, "assign"), e.prototype.updateEndCal = cc11001100_hook("e.prototype.updateEndCal", function () {
          this.data.get('endCalData');
          var t = cc11001100_hook("t", this.data.get('startCalData').calObj, "var-init"),
            e = cc11001100_hook("e", new Date(t.selectDate.getTime() + 86400000), "var-init"),
            n = cc11001100_hook("n", this.calParser(e), "var-init"),
            a = cc11001100_hook("a", new Date(n.selectDateYear + '/' + n.selectDateMonth + '/' + n.selectDateDay + ' 00:00:00'), "var-init");
          this.data.set('endCalData.limitBefore', a), this.data.set('endCalData.initShow', a), this.data.set('endCalData.calObj', n);
        }, "assign"), e.prototype.timeLoop = cc11001100_hook("e.prototype.timeLoop", function (t, e) {
          for (var n = cc11001100_hook("n", [], "var-init"), a = cc11001100_hook("a", t, "var-init"); a < e; a++) n.push(a + ':00'), n.push(a + ':30');
          return n;
        }, "assign"), e.prototype.updateTime = cc11001100_hook("e.prototype.updateTime", function (t, e, n) {
          var a;
          e ? (a = cc11001100_hook("a", e, "assign"), this.data.set(t + 'Time', e)) : a = cc11001100_hook("a", this.data.get(t + 'Time'), "assign");
          var i = cc11001100_hook("i", a.split(':'), "var-init");
          return i ? {
            hour: cc11001100_hook("hour", Number(i[0]), "object-key-init"),
            minutes: cc11001100_hook("minutes", Number(i[1]), "object-key-init"),
            time: cc11001100_hook("time", a, "object-key-init")
          } : null;
        }, "assign"), e.prototype.isOneDay = cc11001100_hook("e.prototype.isOneDay", function () {
          var t = cc11001100_hook("t", this.data.get('startCalData.calObj'), "var-init"),
            e = cc11001100_hook("e", this.data.get('endCalData.calObj'), "var-init");
          return t || (t = cc11001100_hook("t", {
            selectDateDay: cc11001100_hook("selectDateDay", new Date().getDate(), "object-key-init")
          }, "assign")), t.selectDateDay === e.selectDateDay;
        }, "assign"), e.prototype.upDateMeet = cc11001100_hook("e.prototype.upDateMeet", function (t) {
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", this.data.get('updatePasswd'), "var-init");
          this.data.get('modifyMeet') && 0 === n && t.set('passwd', ''), t.append('roomId', this.data.get('roomId')), t.append('updatePasswd', n);
          var a = cc11001100_hook("a", this, "var-init");
          p.fetch('/home/meeting/submit/update', {
            method: cc11001100_hook("method", 'post', "object-key-init"),
            body: cc11001100_hook("body", t, "object-key-init")
          }).then(function (t) {
            return t.json();
          }).then(function (t) {
            0 === t.errno && (t.data.url = cc11001100_hook("t.data.url", a.data.get('url'), "assign"), t.data.passwd = cc11001100_hook("t.data.passwd", e.data.get('passwd'), "assign"), t.data.roomTag = cc11001100_hook("t.data.roomTag", a.data.get('roomTag'), "assign"), a.fire('intoMidpage', t.data));
          }, function (t) {
            e.dispatch('disconnectedError', !0);
          });
        }, "assign"), e.prototype.openMeet = cc11001100_hook("e.prototype.openMeet", function () {
          var t = cc11001100_hook("t", this, "var-init"),
            e = cc11001100_hook("e", this.data.get('modifyMeet'), "var-init"),
            n = cc11001100_hook("n", this.data.get('roomName'), "var-init"),
            a = cc11001100_hook("a", this.data.get('description'), "var-init"),
            i = cc11001100_hook("i", this.data.get('inputStatus'), "var-init");
          n && !i.title && this.checkName(n), a && !i.desc && this.checkName(a, 'desc'), setTimeout(function () {
            var i = cc11001100_hook("i", t.data.get('canOpenMeet'), "var-init");
            if (i.title && i.pass && i.desc) {
              var o = cc11001100_hook("o", new FormData(), "var-init"),
                r = cc11001100_hook("r", t.getTimeStamp('start'), "var-init"),
                s = cc11001100_hook("s", t.getTimeStamp('end'), "var-init"),
                c = cc11001100_hook("c", t, "var-init");
              o.append('roomName', n), o.append('startTime', '' + r), o.append('endTime', '' + s), o.append('passwd', t.data.get('passwd')), a && o.append('description', t.data.get('description')), t.data.get('partner') && t.data.get('partner').length && o.append('roomPartner', JSON.stringify(t.data.get('partner'))), o.append('bsToken', t.data.get('orderData.bsToken')), e ? t.upDateMeet(o) : p.fetch('/home/meeting/submit/order', {
                method: cc11001100_hook("method", 'post', "object-key-init"),
                body: cc11001100_hook("body", o, "object-key-init")
              }).then(function (t) {
                return t.json();
              }).then(function (e) {
                0 === e.errno && (e.data.passwd = cc11001100_hook("e.data.passwd", t.data.get('passwd'), "assign"), c.fire('intoMidpage', e.data));
              }, function (e) {
                t.dispatch('disconnectedError', !0);
              });
            }
          }, 300);
        }, "assign"), e.prototype.getTimeStamp = cc11001100_hook("e.prototype.getTimeStamp", function (t) {
          var e = cc11001100_hook("e", this.data.get(t + 'CalData').calObj, "var-init"),
            n = cc11001100_hook("n", this.data.get(t + 'Time'), "var-init");
          if (e && n) {
            var a = cc11001100_hook("a", e.selectDateYear + '/' + e.selectDateMonth + '/' + e.selectDateDay, "var-init");
            return new Date(a + ' ' + n).getTime() / 1000;
          }
          return 'start' === t ? Math.floor(new Date().getTime() / 1000) : Math.floor((new Date().getTime() + 3600000) / 1000);
        }, "assign"), e.prototype.checkName = cc11001100_hook("e.prototype.checkName", function (t, e) {
          var n = cc11001100_hook("n", this, "var-init");
          e || (e = cc11001100_hook("e", 'title', "assign")), p.fetch('/home/meeting/data/checkword?word=' + t, {
            method: cc11001100_hook("method", 'get', "object-key-init")
          }).then(function (t) {
            return t.json();
          }).then(function (t) {
            0 !== t.errno ? (n.data.set('warn.' + e, !0), n.data.set('canOpenMeet.' + e, !1), n.data.set('inputStatus.' + e, !1)) : (n.data.set('canOpenMeet.' + e, !0), n.data.set('warn.' + e, !1), n.data.set('inputStatus.' + e, !0));
          }, function (t) {
            n.dispatch('disconnectedError', !0);
          });
        }, "assign"), e.prototype.chooseDate = cc11001100_hook("e.prototype.chooseDate", function (t, e) {
          'start' === e ? (this.data.set('startCalData.calObj', t), this.checkAvailableCal(), this.updateDataList('start', 'cal')) : (this.data.set('endCalData.calObj', t), this.updateDataList('end', 'cal'));
        }, "assign"), e.prototype.chooseTime = cc11001100_hook("e.prototype.chooseTime", function (t, e) {
          this.data.set('orderData.' + e + 'Index', t.index), 'start' === e ? (this.data.set('startTime', t.data), this.updateDataList('start', 'sel')) : this.data.set('endTime', t.data);
        }, "assign"), e.prototype.limitName = cc11001100_hook("e.prototype.limitName", function (t) {
          t && (t.target.value ? this.data.set('canOpenMeet.title', !0) : this.data.set('warn.title', !1));
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'v-header': cc11001100_hook('v-header', o['default'], "object-key-init"),
          'v-foot': cc11001100_hook('v-foot', r['default'], "object-key-init"),
          'c-input': cc11001100_hook('c-input', l.Input, "object-key-init"),
          'c-btn': cc11001100_hook('c-btn', l.Button, "object-key-init"),
          'c-checkbox': cc11001100_hook('c-checkbox', l.Checkbox, "object-key-init"),
          'c-cal': cc11001100_hook('c-cal', l.Calendar, "object-key-init"),
          'c-select': cc11001100_hook('c-select', l.Select, "object-key-init"),
          'v-warn': cc11001100_hook('v-warn', s['default'], "object-key-init"),
          'v-sug': cc11001100_hook('v-sug', c['default'], "object-key-init")
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", u, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            showPlaceholder: cc11001100_hook("showPlaceholder", !0, "object-key-init"),
            mailList: cc11001100_hook("mailList", null, "object-key-init"),
            emails: cc11001100_hook("emails", null, "object-key-init"),
            partner: cc11001100_hook("partner", [], "object-key-init"),
            inputStatus: cc11001100_hook("inputStatus", !1, "object-key-init")
          };
        }, "assign"), e.prototype.processSug = cc11001100_hook("e.prototype.processSug", function () {
          this.ref('emailInput').focus();
        }, "assign"), e.prototype.inputFocus = cc11001100_hook("e.prototype.inputFocus", function () {
          var t = cc11001100_hook("t", this.ref('emailInput'), "var-init");
          t.value && -1 !== t.value.indexOf('@') && this.data.set('showsug', !0), this.data.set('showPlaceholder', !1), this.hideSug();
        }, "assign"), e.prototype.startInput = cc11001100_hook("e.prototype.startInput", function (t) {
          var e,
            n = cc11001100_hook("n", this.data.get('mailList'), "var-init"),
            a = cc11001100_hook("a", this.ref('emailInput').value, "var-init");
          if (a) {
            this.data.set('inputStatus', !0);
            var i = cc11001100_hook("i", a.split('@'), "var-init");
            if (i.length > 1) {
              var o = cc11001100_hook("o", i[0], "var-init"),
                r = cc11001100_hook("r", i[1], "var-init");
              if (r) {
                var s = cc11001100_hook("s", this.findMatchMail(r, o), "var-init");
                e = cc11001100_hook("e", 0 === s.length ? [a] : s, "assign");
              } else e = cc11001100_hook("e", n.map(function (t) {
                return o + '@' + t;
              }), "assign");
              this.data.set('emails', e), this.data.set('showsug', !0);
            } else this.data.set('showsug', !1);
          } else this.data.set('inputStatus', !1);
        }, "assign"), e.prototype.findMatchMail = cc11001100_hook("e.prototype.findMatchMail", function (t, e) {
          for (var n = cc11001100_hook("n", this.data.get('mailList'), "var-init"), a = cc11001100_hook("a", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) 0 === n[i].indexOf(t) && a.push(e + '@' + n[i]);
          return a;
        }, "assign"), e.prototype.defineEmail = cc11001100_hook("e.prototype.defineEmail", function (t) {
          13 === t.keyCode && this.insertPartner(t.target.value);
        }, "assign"), e.prototype.emailInputBlur = cc11001100_hook("e.prototype.emailInputBlur", function () {
          this.ref('emailInput').value || (document.querySelector('.selectSugOpt') || this.data.set('showPlaceholder', !0), this.data.set('inputStatus', !1));
        }, "assign"), e.prototype.hideSug = cc11001100_hook("e.prototype.hideSug", function () {
          var t = cc11001100_hook("t", this, "var-init"),
            e = cc11001100_hook("e", t.ref('sugList'), "var-init"),
            n = cc11001100_hook("n", t.ref('emailWrapper'), "var-init");
          document.querySelector('.v-container').addEventListener('click', function (a) {
            t.contains(e, a.target) || t.contains(n, a.target) || t.data.set('showsug', !1);
          });
        }, "assign"), e.prototype.insertPartner = cc11001100_hook("e.prototype.insertPartner", function (t) {
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", this.ref('sugWrapper'), "var-init"),
            a = cc11001100_hook("a", document.createElement('div'), "var-init"),
            i = cc11001100_hook("i", document.createElement('span'), "var-init"),
            o = cc11001100_hook("o", document.createElement('i'), "var-init"),
            r = cc11001100_hook("r", this.data.get('partner'), "var-init");
          this.data.set('inputStatus', !1), a.setAttribute('class', 'selectSugOpt'), i.setAttribute('class', 'selectSugVal'), i.innerText = cc11001100_hook("i.innerText", t.split('@')[0], "assign"), o.setAttribute('class', 'c-icon selectSugIcon c-color-gray2'), o.innerHTML = cc11001100_hook("o.innerHTML", '&#xe610;', "assign"), a.appendChild(i), a.appendChild(o), n.appendChild(a);
          var s = cc11001100_hook("s", this.ref('emailInput'), "var-init");
          s.value = cc11001100_hook("s.value", '', "assign"), s.blur();
          document.querySelectorAll('.selectSugIcon');
          var c = cc11001100_hook("c", document.querySelectorAll('.selectSugOpt'), "var-init");
          r.push(t), e.data.set('partner', r), e.fire('setPartner', e.data.get('partner')), c.forEach(function (t) {
            t.onclick = cc11001100_hook("t.onclick", function (t) {
              if ('I' === t.target.nodeName) {
                var n = cc11001100_hook("n", t.target.parentNode, "var-init"),
                  a = cc11001100_hook("a", t.target.parentNode.childNodes[0].textContent, "var-init");
                r = cc11001100_hook("r", r.filter(function (t) {
                  if (-1 === t.indexOf(a)) return t;
                }), "assign"), e.data.set('partner', r), n.remove(), e.fire('setPartner', e.data.get('partner')), document.querySelector('.selectSugOpt') || s.value || e.data.set('showPlaceholder', !0);
              }
              t.stopPropagation(), t.preventDefault();
            }, "assign");
          }), e.data.set('showsug', !1);
        }, "assign"), e.prototype.contains = cc11001100_hook("e.prototype.contains", function (t, e) {
          for (var n = cc11001100_hook("n", e, "var-init"); n;) {
            if (n === t) return !0;
            n = cc11001100_hook("n", n.parentNode, "assign");
          }
          return !1;
        }, "assign"), e;
      }(n(0).Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", i, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", a.__importDefault(n(6)), "var-init"),
      r = cc11001100_hook("r", a.__importDefault(n(7)), "var-init"),
      s = cc11001100_hook("s", n(5), "var-init"),
      c = cc11001100_hook("c", n(8), "var-init"),
      l = cc11001100_hook("l", n(31), "var-init"),
      p = cc11001100_hook("p", n(9), "var-init"),
      d = cc11001100_hook("d", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            showFeedBack: cc11001100_hook("showFeedBack", !0, "object-key-init"),
            errorWarn: cc11001100_hook("errorWarn", !1, "object-key-init"),
            isLogin: cc11001100_hook("isLogin", '', "object-key-init"),
            instance: cc11001100_hook("instance", null, "object-key-init")
          };
        }, "assign"), e.prototype.logSend = cc11001100_hook("e.prototype.logSend", function (t) {
          this.fire('logSend', t);
        }, "assign"), e.prototype.quickMeet = cc11001100_hook("e.prototype.quickMeet", function () {
          var t = cc11001100_hook("t", this, "var-init");
          if (this.logSend({
            modName: cc11001100_hook("modName", 'superman:videomeeting', "object-key-init"),
            evtName: cc11001100_hook("evtName", 'quickMeetClick', "object-key-init")
          }), this.data.get('isLogin')) {
            var e = cc11001100_hook("e", new FormData(), "var-init"),
              n = cc11001100_hook("n", this.data.get('bsToken'), "var-init");
            e.append('start', '1'), e.append('bsToken', n), c.fetch('/home/meeting/submit/quickstart', {
              method: cc11001100_hook("method", 'post', "object-key-init"),
              body: cc11001100_hook("body", e, "object-key-init")
            }).then(function (t) {
              return t.json();
            }).then(function (e) {
              0 === e.errno && e.data ? t.fire('quickmeet', e) : 2009 === e.errno && t.data.set('errorWarn', !0);
            })['catch'](function (e) {
              t.dispatch('disconnectedError', !0);
            });
          } else l.bdsLogin();
        }, "assign"), e.prototype.orderMeet = cc11001100_hook("e.prototype.orderMeet", function () {
          if (this.logSend({
            modName: cc11001100_hook("modName", 'superman:videomeeting', "object-key-init"),
            evtName: cc11001100_hook("evtName", 'orderMeetClick', "object-key-init")
          }), this.data.get('isLogin')) {
            var t = cc11001100_hook("t", this.selectListInit('Start'), "var-init"),
              e = cc11001100_hook("e", this.selectListInit('End'), "var-init"),
              n = cc11001100_hook("n", {
                startSelectList: cc11001100_hook("startSelectList", t, "object-key-init"),
                endSelectList: cc11001100_hook("endSelectList", e, "object-key-init"),
                endIndex: cc11001100_hook("endIndex", e.length > 1 ? 1 : 0, "object-key-init")
              }, "var-init");
            this.fire('orderMeet', n);
          } else l.bdsLogin();
        }, "assign"), e.prototype.selectListInit = cc11001100_hook("e.prototype.selectListInit", function (t) {
          var e,
            n = cc11001100_hook("n", [], "var-init"),
            a = cc11001100_hook("a", (e = cc11001100_hook("e", 'Start' === t ? new Date() : new Date(new Date().getTime() + 1800000), "assign")).getHours(), "var-init");
          e.getMinutes() > 30 && (a += cc11001100_hook("a", 1, "assign"));
          for (var i = cc11001100_hook("i", a, "var-init"); i < 24; i++) i > e.getHours() && n.push(i + ':00'), n.push(i + ':30');
          return n;
        }, "assign"), e.prototype.meetManage = cc11001100_hook("e.prototype.meetManage", function () {
          this.logSend({
            modName: cc11001100_hook("modName", 'superman:videomeeting', "object-key-init"),
            evtName: cc11001100_hook("evtName", 'meetManageClick', "object-key-init")
          }), this.data.get('isLogin') ? this.fire('manageMeet', null) : l.bdsLogin();
        }, "assign"), e.prototype.lessThanIE9 = cc11001100_hook("e.prototype.lessThanIE9", function () {
          var t = cc11001100_hook("t", navigator.userAgent, "var-init");
          if (t.indexOf('compatible') > -1 && t.indexOf('MSIE') > -1 && (new RegExp('MSIE (\\d+\\.\\d+);').test(t), parseFloat(RegExp.$1) <= 9)) return !0;
          return !1;
        }, "assign"), e.prototype.inited = cc11001100_hook("e.prototype.inited", function () {
          this.data.set('showFeedBack', !this.lessThanIE9());
        }, "assign"), e.prototype.showTips = cc11001100_hook("e.prototype.showTips", function () {
          var t = cc11001100_hook("t", p.getBrowser(), "var-init");
          return !('Chrome' === t.type && t.versions >= 72 || 'Firefox' === t.type && t.versions >= 75);
        }, "assign"), e.prototype.switchToast = cc11001100_hook("e.prototype.switchToast", function () {
          this.data.set('errorWarn', !1);
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'v-header': cc11001100_hook('v-header', o['default'], "object-key-init"),
          'v-foot': cc11001100_hook('v-foot', r['default'], "object-key-init"),
          'c-btn': cc11001100_hook('c-btn', s.Button, "object-key-init"),
          'c-toast': cc11001100_hook('c-toast', s.Toast, "object-key-init")
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          pastePos: function () {
            return {
              top: cc11001100_hook("top", '211px', "object-key-init"),
              left: cc11001100_hook("left", '105px', "object-key-init")
            };
          }
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", d, "assign");
  }, function (t, e, n) {
    'use strict';

    function a() {
      fetch('/home/meeting/data/meeting', {
        method: cc11001100_hook("method", 'get', "object-key-init")
      }).then(function (t) {
        return t.json();
      }).then(function (t) {
        0 === t.errno && t.bindInfo && (1 === t.bindInfo.isBindPhone ? window.location.reload() : $.getScript('//passport.baidu.com/passApi/js/uni_armorwidget_wrapper.js', function () {
          passport.pop.ArmorWidget('bindmobile', {
            token: cc11001100_hook("token", t.bindInfo.bindToken, "object-key-init"),
            title: cc11001100_hook("title", '绑定手机', "object-key-init"),
            msg: cc11001100_hook("msg", '', "object-key-init"),
            auth_title: cc11001100_hook("auth_title", '绑定手机', "object-key-init"),
            auth_msg: cc11001100_hook("auth_msg", '为了保证您的帐号安全\uFF0C绑定手机前请先进行安全验证', "object-key-init"),
            onSubmitSuccess: function (t, e) {
              window.location.reload(!0);
            },
            onSubmitFail: function (t, e) {}
          }).show();
        }));
      });
    }
    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign"), e.bdsLogin = cc11001100_hook("e.bdsLogin", e.login = cc11001100_hook("e.login", void 0, "assign"), "assign"), e.login = cc11001100_hook("e.login", function (t) {
      return new Promise(function (e, n) {
        $.getScript('//passport.baidu.com/passApi/js/uni_login_wrapper.js', function () {
          t = cc11001100_hook("t", passport.pop.init({
            loginVersion: cc11001100_hook("loginVersion", 'v4', "object-key-init"),
            apiOpt: {
              staticPage: cc11001100_hook("staticPage", window.location.protocol + '//www.baidu.com/cache/user/html/v3Jump.html', "object-key-init"),
              product: cc11001100_hook("product", 'pcbaidumeeting', "object-key-init"),
              u: cc11001100_hook("u", 'http://passport.baidu.com/', "object-key-init"),
              memberPass: cc11001100_hook("memberPass", !0, "object-key-init"),
              safeFlag: cc11001100_hook("safeFlag", 0, "object-key-init")
            },
            cache: cc11001100_hook("cache", !0, "object-key-init"),
            forgetLink: cc11001100_hook("forgetLink", 'https://passport.baidu.com/?getpass_index', "object-key-init"),
            registerLink: cc11001100_hook("registerLink", 'https://passport.baidu.com/v2/?reg&tpl=&u=', "object-key-init"),
            authsite: cc11001100_hook("authsite", [], "object-key-init"),
            tangram: cc11001100_hook("tangram", !0, "object-key-init"),
            onLoginSuccess: function (e) {
              e.returnValue = cc11001100_hook("e.returnValue", !1, "assign"), a(), t.hide();
            }
          }), "assign"), e(t);
        });
      });
    }, "assign"), e.bdsLogin = cc11001100_hook("e.bdsLogin", function () {
      bds && bds.se && bds.se.login && bds.se.login.open(function () {
        a();
      });
    }, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", a.__importDefault(n(6)), "var-init"),
      r = cc11001100_hook("r", n(5), "var-init"),
      s = cc11001100_hook("s", a.__importDefault(n(113)), "var-init"),
      c = cc11001100_hook("c", ['日', '一', '二', '三', '四', '五', '六'], "var-init"),
      l = cc11001100_hook("l", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            meetStatus: cc11001100_hook("meetStatus", 0, "object-key-init"),
            myMeet: cc11001100_hook("myMeet", -1, "object-key-init"),
            myMeetList: cc11001100_hook("myMeetList", [{
              name: cc11001100_hook("name", '全部', "object-key-init"),
              value: cc11001100_hook("value", -1, "object-key-init")
            }, {
              name: cc11001100_hook("name", '我发起的', "object-key-init"),
              value: cc11001100_hook("value", 0, "object-key-init")
            }, {
              name: cc11001100_hook("name", '我参与的', "object-key-init"),
              value: cc11001100_hook("value", 1, "object-key-init")
            }], "object-key-init"),
            meetList: cc11001100_hook("meetList", [], "object-key-init"),
            originList: cc11001100_hook("originList", [], "object-key-init"),
            fixedTitle: cc11001100_hook("fixedTitle", '', "object-key-init"),
            loadStatus: cc11001100_hook("loadStatus", 2, "object-key-init"),
            page: cc11001100_hook("page", 0, "object-key-init"),
            pasteShow: cc11001100_hook("pasteShow", !1, "object-key-init"),
            noMeet: cc11001100_hook("noMeet", !1, "object-key-init"),
            bsToken: cc11001100_hook("bsToken", '', "object-key-init")
          };
        }, "assign"), e.prototype.onHide = cc11001100_hook("e.prototype.onHide", function () {
          this.data.set('pasteShow', !1);
        }, "assign"), e.prototype.shareEvent = cc11001100_hook("e.prototype.shareEvent", function (t) {
          this.data.set('pasteShow', t);
        }, "assign"), e.prototype.meetStart = cc11001100_hook("e.prototype.meetStart", function (t) {
          this.fire('meetStart', t);
        }, "assign"), e.prototype.reOrderMeet = cc11001100_hook("e.prototype.reOrderMeet", function (t) {
          this.fire('orderMeet', t);
        }, "assign"), e.prototype.modifyMeet = cc11001100_hook("e.prototype.modifyMeet", function (t) {
          this.fire('modifyMeet', t);
        }, "assign"), e.prototype.changeMeetStatus = cc11001100_hook("e.prototype.changeMeetStatus", function (t) {
          var e = cc11001100_hook("e", this, "var-init");
          this.data.get('meetStatus') !== t && (this.data.set('meetStatus', t), this.data.set('meetList', []), this.data.set('originList', []), this.data.set('page', 0), this.data.set('loadStatus', 2), this.data.set('noMeet', !1), this.nextTick(function () {
            e.getMeetData();
          }));
        }, "assign"), e.prototype.parseDateWeek = cc11001100_hook("e.prototype.parseDateWeek", function (t) {
          var e = cc11001100_hook("e", new Date(t), "var-init");
          return '周' + c[e.getDay()];
        }, "assign"), e.prototype.parseDate = cc11001100_hook("e.prototype.parseDate", function (t) {
          return new Date(t + 28800000).toJSON().substr(0, 10).replace(/-/g, '.');
        }, "assign"), e.prototype.parseShowDate = cc11001100_hook("e.prototype.parseShowDate", function (t, e) {
          var n = cc11001100_hook("n", new Date().getTime(), "var-init"),
            a = cc11001100_hook("a", this.parseDate(n), "var-init"),
            i = cc11001100_hook("i", this.parseDate(new Date(n - 86400000).getTime()), "var-init"),
            o = cc11001100_hook("o", this.parseDate(new Date(n + 86400000).getTime()), "var-init");
          return t === a ? '今天' : t === i ? '昨天' : t === o ? '明天' : t + ' ' + e;
        }, "assign"), e.prototype.getUrlParams = cc11001100_hook("e.prototype.getUrlParams", function (t, e) {
          var n = cc11001100_hook("n", '', "var-init");
          for (var a in e) n += cc11001100_hook("n", a + '=' + e[a] + '&', "assign");
          return t + '?' + (n = cc11001100_hook("n", n.substr(0, n.length - 1), "assign"));
        }, "assign"), e.prototype.getMeetData = cc11001100_hook("e.prototype.getMeetData", function () {
          var t = cc11001100_hook("t", this, "var-init"),
            e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", this.data.get('meetStatus'), "var-init"),
            i = cc11001100_hook("i", this.data.get('myMeet'), "var-init"),
            o = cc11001100_hook("o", this.data.get('page'), "var-init"),
            r = cc11001100_hook("r", this.ref('areaContent'), "var-init"),
            s = cc11001100_hook("s", this.data.get('meetList'), "var-init"),
            c = cc11001100_hook("c", this.data.get('originList'), "var-init");
          this.data.set('loadStatus', 2), this.nextTick(function () {
            fetch(t.getUrlParams('/home/meeting/data/list', {
              role: cc11001100_hook("role", i, "object-key-init"),
              status: cc11001100_hook("status", n, "object-key-init"),
              page: cc11001100_hook("page", o, "object-key-init"),
              pn: cc11001100_hook("pn", 10, "object-key-init")
            })).then(function (t) {
              return t.json();
            }).then(function (n) {
              n.data.info && 0 === n.data.info.length && 0 === o ? t.data.set('noMeet', !0) : (t.data.set('noMeet', !1), c = cc11001100_hook("c", a.__spreadArrays(c, n.data.info), "assign"), s = cc11001100_hook("s", e.parseMeetList(c), "assign"), e.data.set('originList', c), e.data.set('meetList', s), n.data.count < 10 ? e.data.set('loadStatus', 0) : e.data.set('loadStatus', 1), e.nextTick(function () {
                r && (r.removeEventListener('scroll', e.scrollEvent), r.addEventListener('scroll', e.scrollEvent.bind(e)));
              }));
            }, function (e) {
              t.dispatch('disconnectedError', !0), t.data.set('loadStatus', 1);
            });
          });
        }, "assign"), e.prototype.loadMoreData = cc11001100_hook("e.prototype.loadMoreData", function (t) {
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", this.data.get('page'), "var-init");
          1 === t && (this.data.set('page', n + 1), this.nextTick(function () {
            e.getMeetData();
          }));
        }, "assign"), e.prototype.parseMeetList = cc11001100_hook("e.prototype.parseMeetList", function (t) {
          for (var e = cc11001100_hook("e", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) 0 !== n ? e[e.length - 1].titleDate === this.parseDate(1000 * t[n].startTime.utcTime) ? (e[e.length - 1].msg.push(t[n]), e[e.length - 1].endCount = cc11001100_hook("e[e.length - 1].endCount", n + 1, "assign")) : e.push({
            titleDate: cc11001100_hook("titleDate", this.parseDate(1000 * t[n].startTime.utcTime), "object-key-init"),
            week: cc11001100_hook("week", this.parseDateWeek(1000 * t[n].startTime.utcTime), "object-key-init"),
            startCount: cc11001100_hook("startCount", n, "object-key-init"),
            endCount: cc11001100_hook("endCount", n + 1, "object-key-init"),
            msg: cc11001100_hook("msg", [t[n]], "object-key-init")
          }) : e.push({
            titleDate: cc11001100_hook("titleDate", this.parseDate(1000 * t[n].startTime.utcTime), "object-key-init"),
            week: cc11001100_hook("week", this.parseDateWeek(1000 * t[n].startTime.utcTime), "object-key-init"),
            startCount: cc11001100_hook("startCount", 0, "object-key-init"),
            endCount: cc11001100_hook("endCount", 1, "object-key-init"),
            msg: cc11001100_hook("msg", [t[n]], "object-key-init")
          });
          return e;
        }, "assign"), e.prototype.computedHeight = cc11001100_hook("e.prototype.computedHeight", function (t, e, n) {
          return 'end' === t && (n += cc11001100_hook("n", 1, "assign")), 0 === e ? 0 : 55 * e + 41 * n - 10;
        }, "assign"), e.prototype.scrollEvent = cc11001100_hook("e.prototype.scrollEvent", function () {
          var t = cc11001100_hook("t", this.data.get('meetList'), "var-init"),
            e = cc11001100_hook("e", this.ref('areaContent'), "var-init");
          0 === e.scrollTop && this.data.set('fixedTitle', '');
          for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) e.scrollTop >= this.computedHeight('start', t[n].startCount, n) + 1 && e.scrollTop <= this.computedHeight('end', t[n].endCount, n) && this.data.set('fixedTitle', this.parseShowDate(t[n].titleDate, t[n].week));
        }, "assign"), e.prototype.updateMeet = cc11001100_hook("e.prototype.updateMeet", function (t) {
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", this.ref('areaContent'), "var-init"),
            a = cc11001100_hook("a", this.data.get('originList'), "var-init");
          (a = cc11001100_hook("a", a.filter(function (e) {
            return e.roomId !== t.roomId;
          }), "assign")).length <= 0 && this.data.set('noMeet', !0);
          var i = cc11001100_hook("i", this.parseMeetList(a), "var-init");
          this.data.set('originList', a), this.data.set('meetList', i), this.nextTick(function () {
            n.removeEventListener('scroll', e.scrollEvent), n.addEventListener('scroll', e.scrollEvent.bind(self));
          });
        }, "assign"), e.prototype.getMyMeet = cc11001100_hook("e.prototype.getMyMeet", function (t) {
          var e = cc11001100_hook("e", this, "var-init");
          this.data.get('myMeet') !== t.data.value && (this.data.set('myMeet', t.data.value), this.data.set('meetList', []), this.data.set('originList', []), this.data.set('page', 0), this.nextTick(function () {
            e.getMeetData();
          }));
        }, "assign"), e.prototype.attached = cc11001100_hook("e.prototype.attached", function () {
          this.getMeetData();
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'v-header': cc11001100_hook('v-header', o['default'], "object-key-init"),
          'c-btn': cc11001100_hook('c-btn', r.Button, "object-key-init"),
          'c-checkbox': cc11001100_hook('c-checkbox', r.Checkbox, "object-key-init"),
          'c-select': cc11001100_hook('c-select', r.Select, "object-key-init"),
          'v-meet-item': cc11001100_hook('v-meet-item', s['default'], "object-key-init"),
          'c-toast': cc11001100_hook('c-toast', r.Toast, "object-key-init")
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          pastePos: function () {
            return {
              top: cc11001100_hook("top", '211px', "object-key-init"),
              left: cc11001100_hook("left", '147px', "object-key-init")
            };
          }
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", l, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", n(5), "var-init"),
      r = cc11001100_hook("r", function (t) {
        function e() {
          var e = cc11001100_hook("e", null !== t && t.apply(this, arguments) || this, "var-init");
          return e.trimWhitespace = cc11001100_hook("e.trimWhitespace", 'all', "assign"), e;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            item: {},
            showBoard: cc11001100_hook("showBoard", !1, "object-key-init"),
            meetStatus: cc11001100_hook("meetStatus", 0, "object-key-init"),
            showPopup: cc11001100_hook("showPopup", !1, "object-key-init"),
            bsToken: cc11001100_hook("bsToken", '', "object-key-init")
          };
        }, "assign"), e.prototype.closeIt = cc11001100_hook("e.prototype.closeIt", function () {
          this.data.set('showPopup', !1);
        }, "assign"), e.prototype.confirm = cc11001100_hook("e.prototype.confirm", function () {
          var t = cc11001100_hook("t", this, "var-init"),
            e = cc11001100_hook("e", this.data.get('item'), "var-init"),
            n = cc11001100_hook("n", this.data.get('bsToken'), "var-init"),
            a = cc11001100_hook("a", new FormData(), "var-init"),
            i = cc11001100_hook("i", this, "var-init");
          a.append('roomId', e.roomId), a.append('bsToken', n), fetch('/home/meeting/submit/delete', {
            method: cc11001100_hook("method", 'post', "object-key-init"),
            body: cc11001100_hook("body", a, "object-key-init")
          }).then(function (t) {
            return t.json();
          }).then(function (t) {
            0 === t.errno && (i.closeIt(), i.fire('updateMeet', e), i.checkPopClose());
          }, function (e) {
            t.dispatch('disconnectedError', !0);
          });
        }, "assign"), e.prototype.deleteMeet = cc11001100_hook("e.prototype.deleteMeet", function () {
          this.checkPopClose(), this.data.set('showPopup', !0);
        }, "assign"), e.prototype.reOrderMeet = cc11001100_hook("e.prototype.reOrderMeet", function (t) {
          var e = cc11001100_hook("e", new Date(), "var-init"),
            n = cc11001100_hook("n", e.getTime(), "var-init"),
            i = cc11001100_hook("i", this.selectListInit('reOrderMeet', e, 'start'), "var-init"),
            o = cc11001100_hook("o", this.selectListInit('reOrderMeet', new Date(n + 1740000), 'end'), "var-init"),
            r = cc11001100_hook("r", t.startTime, "var-init"),
            s = cc11001100_hook("s", t.endTime, "var-init");
          s.utcTime = cc11001100_hook("s.utcTime", n / 1000, "assign"), r.utcTime = cc11001100_hook("r.utcTime", n / 1000, "assign"), e.getHours() >= 23 && (s.utcTime = cc11001100_hook("s.utcTime", (e.setHours(23, 59, 59, 999) + 1) / 1000, "assign"), e.getMinutes() >= 30 && (r.utcTime = cc11001100_hook("r.utcTime", (e.setHours(23, 59, 59, 999) + 1) / 1000, "assign")));
          var c = cc11001100_hook("c", this.processCal('start', r, i), "var-init"),
            l = cc11001100_hook("l", this.processCal('end', s), "var-init"),
            p = cc11001100_hook("p", this.getSimpleMeetData(t), "var-init"),
            d = cc11001100_hook("d", {
              startSelectList: cc11001100_hook("startSelectList", i, "object-key-init"),
              endSelectList: cc11001100_hook("endSelectList", o, "object-key-init"),
              meetData: cc11001100_hook("meetData", a.__assign(a.__assign({}, p), {
                roomId: cc11001100_hook("roomId", t.roomId, "object-key-init"),
                startCalDate: cc11001100_hook("startCalDate", new Date(1000 * r.utcTime), "object-key-init"),
                startCalData: cc11001100_hook("startCalData", c, "object-key-init"),
                endCalData: cc11001100_hook("endCalData", l, "object-key-init"),
                roomTag: cc11001100_hook("roomTag", t.roomTag, "object-key-init")
              }), "object-key-init"),
              bsToken: cc11001100_hook("bsToken", this.data.get('bsToken'), "object-key-init"),
              endIndex: cc11001100_hook("endIndex", o.length > 1 ? 1 : 0, "object-key-init")
            }, "var-init");
          this.fire('reOrderMeet', d);
        }, "assign"), e.prototype.modifyMeet = cc11001100_hook("e.prototype.modifyMeet", function (t) {
          var e = cc11001100_hook("e", this.selectListInit('modifyMeet', new Date(1000 * t.startTime.utcTime), 'start'), "var-init"),
            n = cc11001100_hook("n", this.selectListInit('modifyMeet', new Date(1000 * t.startTime.utcTime + 1740000), 'end'), "var-init"),
            i = cc11001100_hook("i", t.startTime, "var-init"),
            o = cc11001100_hook("o", t.endTime, "var-init"),
            r = cc11001100_hook("r", this.processCal('start', i, e), "var-init"),
            s = cc11001100_hook("s", this.processCal('end', o), "var-init"),
            c = cc11001100_hook("c", this.getSimpleMeetData(t), "var-init"),
            l = cc11001100_hook("l", {
              meetData: cc11001100_hook("meetData", a.__assign(a.__assign({}, c), {
                roomId: cc11001100_hook("roomId", t.roomId, "object-key-init"),
                modifyMeet: cc11001100_hook("modifyMeet", !0, "object-key-init"),
                startCalDate: cc11001100_hook("startCalDate", new Date(1000 * i.utcTime), "object-key-init"),
                startCalData: cc11001100_hook("startCalData", r, "object-key-init"),
                endCalData: cc11001100_hook("endCalData", s, "object-key-init"),
                passwd: cc11001100_hook("passwd", '******', "object-key-init"),
                roomTag: cc11001100_hook("roomTag", t.roomTag, "object-key-init"),
                passShow: cc11001100_hook("passShow", !1, "object-key-init"),
                url: cc11001100_hook("url", t.url, "object-key-init")
              }), "object-key-init"),
              startIndex: cc11001100_hook("startIndex", this.getSelectIndex(e, i, 0), "object-key-init"),
              endIndex: cc11001100_hook("endIndex", this.getSelectIndex(n, o, 1), "object-key-init"),
              bsToken: cc11001100_hook("bsToken", this.data.get('bsToken'), "object-key-init"),
              startSelectList: cc11001100_hook("startSelectList", this.trimDate(e), "object-key-init"),
              endSelectList: cc11001100_hook("endSelectList", this.trimDate(n), "object-key-init")
            }, "var-init");
          this.fire('modifyMeet', l);
        }, "assign"), e.prototype.trimDate = cc11001100_hook("e.prototype.trimDate", function (t) {
          return t.map(function (t) {
            return 0 === parseInt(t.slice(0, 1)) ? t.substr(1) : t;
          });
        }, "assign"), e.prototype.getSelectIndex = cc11001100_hook("e.prototype.getSelectIndex", function (t, e, n) {
          var a = cc11001100_hook("a", t.indexOf(e.time), "var-init");
          return -1 !== a ? a : 0;
        }, "assign"), e.prototype.processCal = cc11001100_hook("e.prototype.processCal", function (t, e, n) {
          var a = cc11001100_hook("a", 1000 * e.utcTime, "var-init"),
            i = cc11001100_hook("i", new Date(a), "var-init"),
            o = cc11001100_hook("o", {
              selectDate: cc11001100_hook("selectDate", new Date(a + 1800000), "object-key-init"),
              selectDateDay: cc11001100_hook("selectDateDay", i.getDate(), "object-key-init"),
              selectDateMonth: cc11001100_hook("selectDateMonth", i.getMonth() + 1, "object-key-init"),
              selectDateYear: cc11001100_hook("selectDateYear", i.getFullYear(), "object-key-init")
            }, "var-init");
          return 'start' === t ? {
            calObj: cc11001100_hook("calObj", o, "object-key-init"),
            limitBefore: cc11001100_hook("limitBefore", new Date(), "object-key-init"),
            limitAfter: cc11001100_hook("limitAfter", 0, "object-key-init")
          } : {
            limitBefore: cc11001100_hook("limitBefore", i.getTime() + 3600000, "object-key-init"),
            limitAfter: cc11001100_hook("limitAfter", i.getTime() + 90000000, "object-key-init"),
            initShow: cc11001100_hook("initShow", i, "object-key-init")
          };
        }, "assign"), e.prototype.getSimpleMeetData = cc11001100_hook("e.prototype.getSimpleMeetData", function (t) {
          return {
            roomName: cc11001100_hook("roomName", t.name, "object-key-init"),
            boxChecked: cc11001100_hook("boxChecked", !!t.needPasswd, "object-key-init"),
            openPassInput: cc11001100_hook("openPassInput", !!t.needPasswd, "object-key-init"),
            description: cc11001100_hook("description", t.description, "object-key-init"),
            partner: cc11001100_hook("partner", t.partner, "object-key-init"),
            canOpenMeet: {
              title: cc11001100_hook("title", !0, "object-key-init"),
              pass: cc11001100_hook("pass", !0, "object-key-init"),
              desc: cc11001100_hook("desc", !0, "object-key-init")
            }
          };
        }, "assign"), e.prototype.selectListInit = cc11001100_hook("e.prototype.selectListInit", function (t, e, n) {
          var a = cc11001100_hook("a", e, "var-init"),
            i = cc11001100_hook("i", new Date(), "var-init"),
            o = cc11001100_hook("o", [], "var-init");
          'modifyMeet' === t && 'start' === n && (a = cc11001100_hook("a", i, "assign"));
          var r = cc11001100_hook("r", a.getHours(), "var-init");
          if (e.getFullYear() === i.getFullYear() && e.getMonth() === i.getMonth() && e.getDate() === i.getDate() || 'start' !== n) {
            a.getMinutes() > 30 && (r += cc11001100_hook("r", 1, "assign")), r >= 24 && (r -= cc11001100_hook("r", 24, "assign"));
            for (s = cc11001100_hook("s", r, "assign"); s < 24; s++) s === r && a.getMinutes() < 30 || o.push((s < 10 ? '0' : '') + s + ':00'), o.push((s < 10 ? '0' : '') + s + ':30');
          } else for (var s = cc11001100_hook("s", 0, "var-init"); s < 24; s++) o.push((s < 10 ? '0' : '') + s + ':00'), o.push((s < 10 ? '0' : '') + s + ':30');
          return o;
        }, "assign"), e.prototype.share = cc11001100_hook("e.prototype.share", function (t) {
          this.checkPopClose();
          var e = cc11001100_hook("e", this.ref('meetItemQuick'), "var-init"),
            n = cc11001100_hook("n", '', "var-init");
          t.partner && t.partner.length > 0 && (n = cc11001100_hook("n", '参会人\uFF1A' + t.partner.join('\uFF1B'), "assign"));
          var a,
            i,
            o,
            r = cc11001100_hook("r", t.startTime.date + ' ' + t.startTime.time + '-' + t.endTime.time, "var-init");
          t.startTime.date !== t.endTime.date && (r = cc11001100_hook("r", t.startTime.date + ' ' + t.startTime.time + '-' + t.endTime.date + ' ' + t.endTime.time, "assign")), (a = cc11001100_hook("a", document.createElement('textarea'), "assign")).style.opacity = cc11001100_hook("(a = document.createElement('textarea')).style.opacity", '0', "assign"), a.style.position = cc11001100_hook("a.style.position", 'absolute', "assign"), a.style.zIndex = cc11001100_hook("a.style.zIndex", '-1', "assign"), a.value = cc11001100_hook("a.value", t.roomowner + ' 邀请您参加百度视频云会议\n会议主题\uFF1A ' + t.name + '\n会议时间\uFF1A ' + r, "assign"), n && (a.value += cc11001100_hook("a.value", '\n' + n, "assign")), a.value += cc11001100_hook("a.value", t.passwd ? '\n参会密码\uFF1A ' + t.passwd : '', "assign"), a.value += cc11001100_hook("a.value", t.description ? '\n会议描述\uFF1A' + t.description : '', "assign"), a.value += cc11001100_hook("a.value", '\n请点击下方链接参加会议\uFF1A\n' + t.url, "assign"), a.contentEditable = cc11001100_hook("a.contentEditable", !0, "assign"), a.setAttribute('id', 'copyInput'), e.appendChild(a), a.select(), o = cc11001100_hook("o", document.getSelection(), "assign"), (i = cc11001100_hook("i", document.createRange(), "assign")).selectNode(a), o.addRange(i), a.setSelectionRange(0, a.value.length), document.execCommand('copy') && this.fire('shareEvent', !0);
        }, "assign"), e.prototype.startMeet = cc11001100_hook("e.prototype.startMeet", function (t) {
          var e = cc11001100_hook("e", this, "var-init");
          if (0 === this.data.get('meetStatus')) {
            this.checkPopClose();
            var n = cc11001100_hook("n", this, "var-init");
            fetch('/home/meeting/data/detail?&r=' + t.roomTag, {
              method: cc11001100_hook("method", 'get', "object-key-init")
            }).then(function (t) {
              return t.json();
            }).then(function (e) {
              if (0 === e.errno) {
                var a = cc11001100_hook("a", e.data, "var-init"),
                  i = cc11001100_hook("i", {
                    startTime: cc11001100_hook("startTime", a.startTime.time, "object-key-init"),
                    startDateArr: cc11001100_hook("startDateArr", a.startTime.date.split('/'), "object-key-init"),
                    duration: cc11001100_hook("duration", a.duration, "object-key-init"),
                    endTime: cc11001100_hook("endTime", a.endTime.time, "object-key-init"),
                    endDateArr: cc11001100_hook("endDateArr", a.endTime.date.split('/'), "object-key-init"),
                    name: cc11001100_hook("name", a.name, "object-key-init"),
                    jumpUrl: cc11001100_hook("jumpUrl", e.jumpUrl, "object-key-init"),
                    jumpInfo: cc11001100_hook("jumpInfo", e.jumpInfo, "object-key-init"),
                    r: cc11001100_hook("r", a.roomTag, "object-key-init"),
                    roomowner: cc11001100_hook("roomowner", t.roomowner, "object-key-init"),
                    passwd: cc11001100_hook("passwd", t.passwd, "object-key-init")
                  }, "var-init");
                n.fire('meetStart', i);
              }
            }, function (t) {
              e.dispatch('disconnectedError', !0);
            });
          }
        }, "assign"), e.prototype.subtractTime = cc11001100_hook("e.prototype.subtractTime", function (t) {
          var e = cc11001100_hook("e", new Date().getTime(), "var-init");
          return t - e > 0 && (t - e) / 60000 <= 30 ? Math.ceil((t - e) / 60000) : 0;
        }, "assign"), e.prototype.stopPop = cc11001100_hook("e.prototype.stopPop", function (t) {
          t.stopPropagation ? t.stopPropagation() : t.cancelBubble = cc11001100_hook("t.cancelBubble", !0, "assign");
        }, "assign"), e.prototype.checkPopOpen = cc11001100_hook("e.prototype.checkPopOpen", function () {
          var t = cc11001100_hook("t", this, "var-init"),
            e = cc11001100_hook("e", this.data.get('showBoard'), "var-init");
          this.nextTick(function () {
            return !e && t.data.set('showBoard', !0);
          });
        }, "assign"), e.prototype.checkPopClose = cc11001100_hook("e.prototype.checkPopClose", function () {
          this.data.get('showBoard') && this.data.set('showBoard', !1);
        }, "assign"), e.prototype.attached = cc11001100_hook("e.prototype.attached", function () {
          window.addEventListener('click', this.checkPopClose.bind(this));
        }, "assign"), e.prototype.detached = cc11001100_hook("e.prototype.detached", function () {
          window.removeEventListener('click', this.checkPopClose.bind(this));
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'c-popup': cc11001100_hook('c-popup', o.Popup, "object-key-init")
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          memberName: function () {
            var t = cc11001100_hook("t", this.data.get('item'), "var-init");
            return t.partner && t.partner.length ? t.partner.reduce(function (t, e) {
              return t + (e ? '\u3001' : '') + e;
            }) : '';
          },
          memberNumber: function () {
            var t = cc11001100_hook("t", this.data.get('item'), "var-init");
            return t.partner && t.partner.length ? t.partner.length + '人' : '';
          },
          popupTitle: function () {
            var t = cc11001100_hook("t", this.data.get('meetStatus'), "var-init");
            return 0 === t ? '删除会议' : 5 === t ? '确认删除当前会议\uFF1F' : void 0;
          },
          popupSubTitle: function () {
            return 0 === this.data.get('meetStatus') ? '删除后其他参会人将无法参会' : '';
          }
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", r, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", n(5), "var-init"),
      r = cc11001100_hook("r", n(31), "var-init"),
      s = cc11001100_hook("s", n(9), "var-init"),
      c = cc11001100_hook("c", function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {
            flowType: cc11001100_hook("flowType", '', "object-key-init"),
            browserInfo: cc11001100_hook("browserInfo", '', "object-key-init"),
            browserPC: cc11001100_hook("browserPC", !navigator.userAgent.match(/AppleWebKit.*Mobile.*/), "object-key-init")
          };
        }, "assign"), e.prototype.login = cc11001100_hook("e.prototype.login", function () {
          return a.__awaiter(this, void 0, void 0, function () {
            var t, e;
            return a.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return (t = cc11001100_hook("t", this.data.get('instance'), "assign")) ? [3, 2] : [4, r.login(t)];
                case 1:
                  return (e = cc11001100_hook("e", n.sent(), "assign")).show(), this.data.set('instance', e), [3, 3];
                case 2:
                  t.show(), n.label = cc11001100_hook("n.label", 3, "assign");
                case 3:
                  return [2];
              }
            });
          });
        }, "assign"), e.prototype.btnClick = cc11001100_hook("e.prototype.btnClick", function () {
          this.data.get('type');
          this.login();
        }, "assign"), e.prototype.attached = cc11001100_hook("e.prototype.attached", function () {
          this.data.set('browserInfo', s.getBrowser()), 'unlogin' === this.data.get('flowType') && this.login();
        }, "assign"), e.computed = cc11001100_hook("e.computed", {
          text: function () {
            var t = cc11001100_hook("t", this.data.get('flowType'), "var-init"),
              e = cc11001100_hook("e", this.data.get('browserPC'), "var-init");
            if ('unlogin' === t) return {
              title: cc11001100_hook("title", '参与会议需要登录', "object-key-init"),
              subTitle: cc11001100_hook("subTitle", '为了保障您的参会安全\uFF0C请您点击登录按钮进行登录', "object-key-init"),
              btn: cc11001100_hook("btn", '立即登录', "object-key-init")
            };
            var n = cc11001100_hook("n", this.data.get('browserInfo'), "var-init"),
              a = cc11001100_hook("a", '', "var-init"),
              i = cc11001100_hook("i", '//www.baidu.com/s?wd=' + encodeURIComponent('chrome网络浏览器下载') + '&rsv_dl=meeting', "var-init");
            return e ? ('Chrome' !== n.type && 'Firefox' !== n.type || 'Chrome' === n.type && n.versions < 72 ? a = cc11001100_hook("a", 'Chrome', "assign") : 'Firefox' === n.type && n.versions < 75 && (a = cc11001100_hook("a", 'Firefox', "assign"), i = cc11001100_hook("i", '//www.baidu.com/s?wd=' + encodeURIComponent('火狐浏览器下载') + '&rsv_dl=meeting', "assign")), {
              title: cc11001100_hook("title", '当前浏览器版本不支持参会', "object-key-init"),
              subTitle: cc11001100_hook("subTitle", '为了保证您的使用体验\uFF0C请您下载使用新版' + a + '浏览器', "object-key-init"),
              btn: cc11001100_hook("btn", '下载新版' + a, "object-key-init"),
              downLoadUrl: cc11001100_hook("downLoadUrl", i, "object-key-init")
            }) : {
              title: cc11001100_hook("title", '百度视频会议手机版即将上线', "object-key-init"),
              subTitle: cc11001100_hook("subTitle", '为保障您本次参会体验\uFF0C请到PC端参与会议', "object-key-init"),
              btn: cc11001100_hook("btn", '', "object-key-init"),
              downLoadUrl: cc11001100_hook("downLoadUrl", '', "object-key-init")
            };
          }
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'c-btn': cc11001100_hook('c-btn', o.Button, "object-key-init")
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", c, "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var a = cc11001100_hook("a", n(4), "var-init"),
      i = cc11001100_hook("i", n(0), "var-init"),
      o = cc11001100_hook("o", n(5), "var-init"),
      r = cc11001100_hook("r", function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        return a.__extends(e, t), e.prototype.initData = cc11001100_hook("e.prototype.initData", function () {
          return {};
        }, "assign"), e.components = cc11001100_hook("e.components", {
          'c-btn': cc11001100_hook('c-btn', o.Button, "object-key-init")
        }, "assign"), e;
      }(i.Component), "var-init");
    e['default'] = cc11001100_hook("e['default']", r, "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(37)], "var-init"),
      o = cc11001100_hook("o", n(39), "var-init"),
      r = cc11001100_hook("r", n(10)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(10), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(38), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.no-scroll {\n  overflow: hidden;\n}\n#video-meeting {\n  font-size: 14px;\n  color: #222;\n}\n.v-container {\n  position: fixed;\n  bottom: 64px;\n  right: 80px;\n  width: 396px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  background: #FFFFFF;\n  height: 556px;\n  z-index: 999;\n  padding-bottom: 24px;\n}\n.hide_3y2AL {\n  display: none;\n}\n@media screen and (max-width: 1158px) {\n  .video-meeting {\n    display: none;\n  }\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      hide: cc11001100_hook("hide", 'hide_3y2AL', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'text\']}}" id="video-meeting" class="{{type !== \'backflow\' ? \'video-meeting\' : \'\'}}" s-ref="meetRoot"> <div class="{{showViews ? \'\' : $style.hide}}"> <start-meet s-if="status === 1" on-logSend="logSend($event)" bsToken="{{bsToken}}" isLogin="{{isLogin}}" on-quickmeet="createQuickMeet($event)" on-orderMeet="orderMeetEvent($event)" on-manageMeet="openManageMeet"></start-meet> <v-demo s-if="status === 2" text="video-meeting-fyr"></v-demo> <meet-midpage s-if="status === 3" meetInfo="{{ meetData }}" on-meetStart="startMeetEvent($event)"></meet-midpage> <open-meet s-if="status === 4" meetInfo="{{meetInfo}}" type="{{type}}" isLogin="{{isLogin}}"></open-meet> <order-meet s-if="status === 5" on-intoMidpage="orderIntoMidpage($event)" orderData="{{ orderData }}" s-bind="{{ orderData.meetData }}"></order-meet> <manage-meet s-if="status === 6" bsToken="{{bsToken}}" on-orderMeet="orderMeetEvent($event)" on-meetStart="startMeetEvent($event)" on-modifyMeet="modifyMeetEvent($event)"></manage-meet> <compat-tip s-if="status === 7" flowType="{{flowType}}"></compat-tip> <page-error s-if="status === 8"></page-error> <c-toast s-if="netError" pos="{{ errorPos }}" on-hide="onHide">加载失败\uFF0C请检查网络连接</c-toast> </div></div>', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(41)], "var-init"),
      o = cc11001100_hook("o", n(43), "var-init"),
      r = cc11001100_hook("r", n(11)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(11), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(42), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.iframe-wrapper_-UGwB {\n  height: 490px;\n  width: 350px;\n  overflow: hidden;\n  margin: auto;\n}\n.iframe-wrapper_-UGwB .fk-iframe_1wLQF {\n  margin-top: -15px;\n  height: 540px;\n  width: 350px;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      'iframe-wrapper': cc11001100_hook('iframe-wrapper', 'iframe-wrapper_-UGwB', "object-key-init"),
      iframeWrapper: cc11001100_hook("iframeWrapper", 'iframe-wrapper_-UGwB', "object-key-init"),
      'fk-iframe': cc11001100_hook('fk-iframe', 'fk-iframe_1wLQF', "object-key-init"),
      fkIframe: cc11001100_hook("fkIframe", 'fk-iframe_1wLQF', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'wrapper\']}} v-container"> <v-header title="用户反馈" status="2" closeType="exit"></v-header> <div class="{{ $style[\'iframe-wrapper\'] }}"> <iframe class="{{ $style[\'fk-iframe\'] }}" src="//ufosdk.baidu.com/ufosdk/postview/%2BuS7%2FtBBbja2UESRWUp3Xw%3D%3D/245829" frameborder="0"></iframe> </div> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(45), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.header_2xS7W {\n  height: 54px;\n  width: 100%;\n  padding: 19px 24px 10px 21px;\n  box-sizing: border-box;\n  line-height: 25px;\n}\n.header_2xS7W .icon_1PkuZ {\n  position: relative;\n  left: -1px;\n  float: left;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  margin-top: 3px;\n  font-size: 15px;\n  cursor: pointer;\n}\n.header_2xS7W .icon_1PkuZ:hover {\n  color: #315EFB;\n}\n.header_2xS7W .hide_lW_PG {\n  float: right;\n  font-size: 15px;\n  cursor: pointer;\n  color: #C4C7CE;\n}\n.header_2xS7W .hide_lW_PG:hover {\n  color: #4662D9;\n}\n.header_2xS7W .title_29mZu {\n  margin-left: 10px;\n}\n.header_2xS7W .exit_3Vgbs {\n  float: right;\n  cursor: pointer;\n}\n.header_2xS7W .exit_3Vgbs:hover {\n  color: #315EFB;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      header: cc11001100_hook("header", 'header_2xS7W', "object-key-init"),
      icon: cc11001100_hook("icon", 'icon_1PkuZ', "object-key-init"),
      hide: cc11001100_hook("hide", 'hide_lW_PG', "object-key-init"),
      title: cc11001100_hook("title", 'title_29mZu', "object-key-init"),
      exit: cc11001100_hook("exit", 'exit_3Vgbs', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style.header}}"> <i s-if="needBack" class="c-icon {{$style.icon}} c-color-gray2" on-click="goBack">&#xe617;</i> <span s-if="title" class="{{$style.title}}">{{ title }}</span> <i s-if="closeType === \'hide\'" class="{{$style.hide}} c-icon" on-click="hideMeet">&#xe610;</i> <span s-if="closeType === \'exit\'" class="{{$style.exit}} c-color-gray2" on-click="exitMeet">退出</span> <c-popup s-if="exit" title="您将退出百度视频会议" on-cancel="cancel($event)" on-confirm="confirm($event)" on-close="cancel" zIndex="4" primaryBtnText="退出"></c-popup> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(48)], "var-init"),
      o = cc11001100_hook("o", n(50), "var-init"),
      r = cc11001100_hook("r", n(13)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(13), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(49), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.select_2ORf2 {\n  border: 1px solid #D7D9E0;\n  box-sizing: border-box;\n  padding: 7px;\n  border-radius: 6px;\n  line-height: 1;\n  cursor: pointer;\n  position: relative;\n  background: #FFFFFF;\n  user-select: none;\n}\n.select_2ORf2:hover {\n  border: 1px solid #A7AAB5;\n}\n.select_2ORf2:hover .icon-hover_3DH0S {\n  color: #626675;\n}\n.select_2ORf2 .select-board_3hZnS {\n  box-sizing: border-box;\n  padding: 9px 0;\n  position: absolute;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  background: #FFFFFF;\n  z-index: 1;\n  cursor: default;\n}\n.select_2ORf2 .select-board_3hZnS .select-item_1qIVt {\n  overflow: hidden;\n  box-sizing: border-box;\n  padding-bottom: 7px;\n  padding-top: 7px;\n  cursor: pointer;\n}\n.select_2ORf2 .select-board_3hZnS .select-item_1qIVt:hover {\n  color: #315EFB;\n}\n.active_3HANz {\n  border: 1px solid #A7AAB5;\n}\n.select_2ORf2,\n.select_2ORf2 .abstract_2CAcD,\n.select_2ORf2 i,\n.select-item_1qIVt {\n  display: inline-block;\n  vertical-align: middle;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      select: cc11001100_hook("select", 'select_2ORf2', "object-key-init"),
      'icon-hover': cc11001100_hook('icon-hover', 'icon-hover_3DH0S', "object-key-init"),
      iconHover: cc11001100_hook("iconHover", 'icon-hover_3DH0S', "object-key-init"),
      'select-board': cc11001100_hook('select-board', 'select-board_3hZnS', "object-key-init"),
      selectBoard: cc11001100_hook("selectBoard", 'select-board_3hZnS', "object-key-init"),
      'select-item': cc11001100_hook('select-item', 'select-item_1qIVt', "object-key-init"),
      selectItem: cc11001100_hook("selectItem", 'select-item_1qIVt', "object-key-init"),
      active: cc11001100_hook("active", 'active_3HANz', "object-key-init"),
      abstract: cc11001100_hook("abstract", 'abstract_2CAcD', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style.select}} {{selecting ? $style.active : \'\'}}" style="{{style}}" on-click="openBoard"> <div class="c-gap-right-xsmall c-line-clamp1 {{$style.abstract}}" style="width: {{width}}"> <span s-if="name">{{name}} : </span> <span title="{{value}}">{{value}}</span> </div> <i s-if="selecting" class="c-icon c-color-gray">&#xe60c;</i> <i s-else class="c-icon c-color-gray2 {{$style.iconHover}}">&#xe615;</i> <div s-if="selecting" class="{{$style.selectBoard}} c-row" style="{{alignX}}: 0px;{{alignY}}: 38px;{{ maxHeightStyle }}" on-click="nothing"> <div s-for="row, index in list" class="c-gap-left-large c-span{{column * 2}} {{index === list.length - 1 ? $style.row : \'\'}}" style="width: calc({{columnWidth}} * {{columns}} + 16px * {{columns - 1}})"> <div s-for="item, current in row" class="{{$style.selectItem}} c-line-clamp1 c-span2 {{current === row.length - 1 ? \'c-span-last\' : \'\'}}" title="{{item.name || item}}" style="width: calc({{columnWidth}});" on-click="choose($event, item, index * column + current)"> <span>{{item.name || item}}</span> </div> </div> </div> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(52)], "var-init"),
      o = cc11001100_hook("o", n(54), "var-init"),
      r = cc11001100_hook("r", n(14)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(14), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(53), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.toast-wrapper_PdGvs {\n  opacity: 0;\n  position: absolute;\n  z-index: 10;\n  padding: 0px 16px;\n  height: 30px;\n  line-height: 30px;\n  background: rgba(98, 102, 117, 0.85);\n  color: #fff;\n  transition: opacity 0.3s;\n  -ms-transition: opacity 0.3s;\n  border-radius: 6px;\n  box-shadow: 0 / 1 1px / 1 5px / 1 rgba(0, 0, 0, 0.1);\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      'toast-wrapper': cc11001100_hook('toast-wrapper', 'toast-wrapper_PdGvs', "object-key-init"),
      toastWrapper: cc11001100_hook("toastWrapper", 'toast-wrapper_PdGvs', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <span class="{{$style.toastWrapper}}" style="{{customStyle}}"> <slot></slot> </span> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(56)], "var-init"),
      o = cc11001100_hook("o", n(58), "var-init"),
      r = cc11001100_hook("r", n(15)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(15), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(57), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.mask-wrap_3BvzO {\n  display: inline-block;\n  line-height: 1;\n  vertical-align: middle;\n  text-align: left;\n}\n.popup-box_22-gb {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n  padding: 24px;\n}\n.popup-box_22-gb .head_1J1Ad {\n  line-height: 1;\n}\n.popup-box_22-gb .head_1J1Ad .title_whwns,\n.popup-box_22-gb .head_1J1Ad i {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 1;\n}\n.popup-box_22-gb .head_1J1Ad i {\n  cursor: pointer;\n  color: #c0c2c8;\n  margin-left: 19px;\n}\n.popup-box_22-gb .body_cRLMf {\n  margin-top: 16px;\n  min-height: 50px;\n}\n.popup-box_22-gb .bottom_2DuZU {\n  text-align: right;\n}\n.popup-box_22-gb .bottom_2DuZU .record_aUERb {\n  line-height: 30px;\n  text-align: left;\n}\n.mask_2aa22 {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  text-align: center;\n  line-height: 1;\n  line-height: 100vh;\n}\n.new-pmd-icon_1VvoX {\n  height: auto;\n  width: auto;\n  line-height: 1;\n  overflow: visible;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      'mask-wrap': cc11001100_hook('mask-wrap', 'mask-wrap_3BvzO', "object-key-init"),
      maskWrap: cc11001100_hook("maskWrap", 'mask-wrap_3BvzO', "object-key-init"),
      'popup-box': cc11001100_hook('popup-box', 'popup-box_22-gb', "object-key-init"),
      popupBox: cc11001100_hook("popupBox", 'popup-box_22-gb', "object-key-init"),
      head: cc11001100_hook("head", 'head_1J1Ad', "object-key-init"),
      title: cc11001100_hook("title", 'title_whwns', "object-key-init"),
      body: cc11001100_hook("body", 'body_cRLMf', "object-key-init"),
      bottom: cc11001100_hook("bottom", 'bottom_2DuZU', "object-key-init"),
      record: cc11001100_hook("record", 'record_aUERb', "object-key-init"),
      mask: cc11001100_hook("mask", 'mask_2aa22', "object-key-init"),
      'new-pmd-icon': cc11001100_hook('new-pmd-icon', 'new-pmd-icon_1VvoX', "object-key-init"),
      newPmdIcon: cc11001100_hook("newPmdIcon", 'new-pmd-icon_1VvoX', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="c-row"> <div class="{{$style.mask}}" style="background: {{color}};z-index: {{zIndex}};"> <div class="{{$style.maskWrap}}"> <div class="c-span9 c-span-last {{$style.popupBox}}" style="margin-left: {{posX}};margin-top: {{posY}}; {{style}}"> <div class="{{$style.head}}"> <div class="c-line-clamp1 c-span7 c-font-big {{$style.title}}"> <span title="{{title}}">{{ title }}</span> </div> <i class="c-icon c-font-normal {{$style.newPmdIcon}}" on-click="close(\'close\')">&#xe610;</i> </div> <div class="{{$style.body}} c-font-normal c-color-gray"> <span s-if="subTitle">{{subTitle}}</span> <slot s-else></slot> </div> <div class="{{$style.bottom}}"> <div class="c-span4 {{$style.record}}"> <c-checkbox s-if="!always" name="record" class="c-color-t" label="不再提示" value="{{never}}" on-change="setState"/> </div> <button class="c-btn" on-click="cancel"> {{defaultBtnText}} </button><button class="c-gap-left-large c-btn c-btn-primary" on-click="confirm"> {{primaryBtnText}} </button> </div> </div> </div> </div> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(60), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.label_1LZ0S {\n  cursor: pointer;\n}\n.canhover_QzJr0:hover .checkbox-focus_1RAGx {\n  color: #A7AAB5;\n}\n.checkbox-value_22N5x {\n  vertical-align: middle;\n}\n.fix-style_12FFP {\n  border-radius: 5px;\n}\n.cannot_1WiVp {\n  cursor: not-allowed !important;\n  color: #C4C7CE;\n}\n.disable-border_EW8Ab {\n  color: #F0F0F1;\n}\n.disable-icon_3dFXj {\n  color: #D7D9E0 !important;\n}\n.new-pmd-icon_1lCbM {\n  height: auto;\n  width: auto;\n  line-height: 1;\n  overflow: visible;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      label: cc11001100_hook("label", 'label_1LZ0S', "object-key-init"),
      canhover: cc11001100_hook("canhover", 'canhover_QzJr0', "object-key-init"),
      'checkbox-focus': cc11001100_hook('checkbox-focus', 'checkbox-focus_1RAGx', "object-key-init"),
      checkboxFocus: cc11001100_hook("checkboxFocus", 'checkbox-focus_1RAGx', "object-key-init"),
      'checkbox-value': cc11001100_hook('checkbox-value', 'checkbox-value_22N5x', "object-key-init"),
      checkboxValue: cc11001100_hook("checkboxValue", 'checkbox-value_22N5x', "object-key-init"),
      'fix-style': cc11001100_hook('fix-style', 'fix-style_12FFP', "object-key-init"),
      fixStyle: cc11001100_hook("fixStyle", 'fix-style_12FFP', "object-key-init"),
      cannot: cc11001100_hook("cannot", 'cannot_1WiVp', "object-key-init"),
      'disable-border': cc11001100_hook('disable-border', 'disable-border_EW8Ab', "object-key-init"),
      disableBorder: cc11001100_hook("disableBorder", 'disable-border_EW8Ab', "object-key-init"),
      'disable-icon': cc11001100_hook('disable-icon', 'disable-icon_3dFXj', "object-key-init"),
      disableIcon: cc11001100_hook("disableIcon", 'disable-icon_3dFXj', "object-key-init"),
      'new-pmd-icon': cc11001100_hook('new-pmd-icon', 'new-pmd-icon_1lCbM', "object-key-init"),
      newPmdIcon: cc11001100_hook("newPmdIcon", 'new-pmd-icon_1lCbM', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <label class="{{ $style.label }} {{disabled ? $style.cannot : $style.canhover}}"> <span class="c-checkbox{{currentValue ? \' c-checkbox-checked\' : \'\'}}"> <span class="c-checkbox-inner {{$style.fixStyle}}" style="background: {{bgColor}};"> <span class="c-icon c-checkbox-inner-bg {{$style[\'checkbox-focus\']}} {{$style.newPmdIcon}} {{disabled ? $style.disableBorder : \'\'}}">&#xe611;</span> <span class="c-icon c-checkbox-inner-i {{$style.newPmdIcon}} {{disabled ? $style.disableIcon : \'\'}}" style="color: {{innerColor}};">&#xe61a;</span> </span> <input type="checkbox" s-bind="{{ propertyVal }}" name="{{name}}" class="c-checkbox-input {{disabled ? $style.cannot : \'\'}}" disabled="{{disabled}}" on-click="change"> </span><span class="{{$style[\'checkbox-value\']}} c-gap-left-xsmall"><slot>{{ label ? label : value }}</slot></span> </label> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(63)], "var-init"),
      o = cc11001100_hook("o", n(65), "var-init"),
      r = cc11001100_hook("r", n(18)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(18), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(64), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.btn-white_2Jw-w {\n  background: #fff !important;\n}\n.btn-auto_18Wt6 {\n  padding: 0 16px!important;\n  width: auto!important;\n}\n.btn-wide_3zkT2 {\n  width: 128px!important;\n}\n.btn-large_1Og-x {\n  width: 128px!important;\n  height: 36px;\n  line-height: 36px;\n}\n.btn-weak_2Q6Zk .btn-icon_1wlfU {\n  line-height: 24px;\n}\n.c-btn .btn-icon_1wlfU {\n  margin: 7px 4px 0 0;\n  float: none;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      'btn-white': cc11001100_hook('btn-white', 'btn-white_2Jw-w', "object-key-init"),
      btnWhite: cc11001100_hook("btnWhite", 'btn-white_2Jw-w', "object-key-init"),
      'btn-auto': cc11001100_hook('btn-auto', 'btn-auto_18Wt6', "object-key-init"),
      btnAuto: cc11001100_hook("btnAuto", 'btn-auto_18Wt6', "object-key-init"),
      'btn-wide': cc11001100_hook('btn-wide', 'btn-wide_3zkT2', "object-key-init"),
      btnWide: cc11001100_hook("btnWide", 'btn-wide_3zkT2', "object-key-init"),
      'btn-large': cc11001100_hook('btn-large', 'btn-large_1Og-x', "object-key-init"),
      btnLarge: cc11001100_hook("btnLarge", 'btn-large_1Og-x', "object-key-init"),
      'btn-weak': cc11001100_hook('btn-weak', 'btn-weak_2Q6Zk', "object-key-init"),
      btnWeak: cc11001100_hook("btnWeak", 'btn-weak_2Q6Zk', "object-key-init"),
      'btn-icon': cc11001100_hook('btn-icon', 'btn-icon_1wlfU', "object-key-init"),
      btnIcon: cc11001100_hook("btnIcon", 'btn-icon_1wlfU', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <button class="c-btn {{ btnType }} {{ btnSize }} {{ type === \'white\' ? $style[\'btn-white\'] : \'\'}} {{ type === \'default\' ? $style[\'btn-default\'] : \'\' }} {{ size === \'auto\' ? $style[\'btn-auto\'] : \'\'}} {{ size === \'wide\' ? $style[\'btn-wide\'] : \'\' }} {{ size === \'weak\' ? $style[\'btn-weak\'] : \'\' }} {{ $style[\'btn-\' + size] }}" on-click="buttonClick"> <i s-if="icon && size !== \'mini\'" class="{{ $style[\'btn-icon\'] }} c-icon">{{ icon }}</i><template s-if="text">{{ text }}</template> <template s-else><slot></slot></template> </button> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(67)], "var-init"),
      o = cc11001100_hook("o", n(69), "var-init"),
      r = cc11001100_hook("r", n(19)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(19), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(68), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.input-wrapper_2wRPm .input_1XoiK {\n  box-sizing: border-box !important;\n}\n.input-wrapper_2wRPm .input_1XoiK:hover {\n  border-color: #A7AAB5;\n}\n.input-wrapper_2wRPm .input_1XoiK .left_3iOHO {\n  position: relative;\n  padding-right: 10px;\n  float: left;\n  cursor: default;\n}\n.input-wrapper_2wRPm .input_1XoiK .contain_1tIXQ {\n  height: 100%;\n  float: left;\n}\n.input-wrapper_2wRPm .input_1XoiK .contain_1tIXQ input {\n  width: 100%;\n}\n.input-wrapper_2wRPm .input_1XoiK .clear-none_1WUQL {\n  display: none;\n}\n.input-wrapper_2wRPm .input_1XoiK .clear-icon_3iQhm {\n  position: relative;\n  float: left;\n  padding-left: 10px;\n  cursor: default;\n  width: 16px;\n  height: 100%;\n}\n.input-wrapper_2wRPm .input_1XoiK .clear-icon_3iQhm span {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0;\n  font-size: 14px;\n  color: #D7D9E0;\n}\n.input-wrapper_2wRPm .input_1XoiK .clear-icon_3iQhm span:hover {\n  color: #315Efb;\n}\n.input-wrapper_2wRPm .input_1XoiK .right_5cDLU {\n  position: relative;\n  float: right;\n  padding-left: 10px;\n  cursor: default;\n}\n.input-wrapper_2wRPm .input-height-small_1Mjr7 {\n  height: 38px !important;\n}\n.input-wrapper_2wRPm .input-height-small_1Mjr7 .contain_1tIXQ input {\n  height: 36px !important;\n}\n.input-wrapper_2wRPm div.focus-color_rkdkn {\n  border-color: #A7AAB5;\n}\n.textarea-wrapper_kyfvY {\n  position: relative;\n  display: inline-block;\n  line-height: 0;\n}\n.textarea-wrapper_kyfvY .textarea_2mlOJ {\n  width: 390px;\n  background: transparent;\n  box-sizing: border-box !important;\n}\n.textarea-wrapper_kyfvY .textarea-height-large_newXe {\n  height: 112px;\n}\n.textarea-wrapper_kyfvY .textarea_2mlOJ:hover {\n  border-color: #A7AAB5;\n}\n.textarea-wrapper_kyfvY .textarea_2mlOJ:focus {\n  border-color: #A7AAB5;\n}\n.textarea-wrapper_kyfvY .water-mark_2zqL7 {\n  position: absolute;\n  right: 13px;\n  bottom: 10px;\n  cursor: text;\n  width: 93px;\n  height: 31px;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      'input-wrapper': cc11001100_hook('input-wrapper', 'input-wrapper_2wRPm', "object-key-init"),
      inputWrapper: cc11001100_hook("inputWrapper", 'input-wrapper_2wRPm', "object-key-init"),
      input: cc11001100_hook("input", 'input_1XoiK', "object-key-init"),
      left: cc11001100_hook("left", 'left_3iOHO', "object-key-init"),
      contain: cc11001100_hook("contain", 'contain_1tIXQ', "object-key-init"),
      'clear-none': cc11001100_hook('clear-none', 'clear-none_1WUQL', "object-key-init"),
      clearNone: cc11001100_hook("clearNone", 'clear-none_1WUQL', "object-key-init"),
      'clear-icon': cc11001100_hook('clear-icon', 'clear-icon_3iQhm', "object-key-init"),
      clearIcon: cc11001100_hook("clearIcon", 'clear-icon_3iQhm', "object-key-init"),
      right: cc11001100_hook("right", 'right_5cDLU', "object-key-init"),
      'input-height-small': cc11001100_hook('input-height-small', 'input-height-small_1Mjr7', "object-key-init"),
      inputHeightSmall: cc11001100_hook("inputHeightSmall", 'input-height-small_1Mjr7', "object-key-init"),
      'focus-color': cc11001100_hook('focus-color', 'focus-color_rkdkn', "object-key-init"),
      focusColor: cc11001100_hook("focusColor", 'focus-color_rkdkn', "object-key-init"),
      'textarea-wrapper': cc11001100_hook('textarea-wrapper', 'textarea-wrapper_kyfvY', "object-key-init"),
      textareaWrapper: cc11001100_hook("textareaWrapper", 'textarea-wrapper_kyfvY', "object-key-init"),
      textarea: cc11001100_hook("textarea", 'textarea_2mlOJ', "object-key-init"),
      'textarea-height-large': cc11001100_hook('textarea-height-large', 'textarea-height-large_newXe', "object-key-init"),
      textareaHeightLarge: cc11001100_hook("textareaHeightLarge", 'textarea-height-large_newXe', "object-key-init"),
      'water-mark': cc11001100_hook('water-mark', 'water-mark_2zqL7', "object-key-init"),
      waterMark: cc11001100_hook("waterMark", 'water-mark_2zqL7', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'input-wrapper\']}}"> <div s-if="type === \'input\'" class="c-input {{ $style[\'input\'] }} {{ $style[inputHeightSize] }} {{ isFocus ? $style[\'focus-color\'] : \'\' }}" style="width: {{inputWidthSize}}px;"> <div class="{{ $style[\'left\'] }}"> <slot name="left-icon"></slot> </div> <div class="{{ $style[\'contain\'] }}" style="{{ inputSpecialSize() }}"> <input s-ref="input" type="text" placeholder="{{ placeholder }}" s-bind="{{ params }}" value="{= value =}" on-input="handleInput" on-focus="handleFocus" on-blur="handleBlur"> </div> <div s-if="clearable" class="{{ $style[\'clear-icon\'] }} {{ $style[\'input-icon\'] }} {{ value && isFocus ? \'\' : $style[\'clear-none\']}}" on-mousedown="clearInput"> <span class="c-icon"> &#xe610; </span> </div> <div class="{{ $style[\'right\'] }}"> <slot name="right-icon"></slot> </div> </div> <div s-else class="{{ $style[\'textarea-wrapper\'] }}"> <textarea s-ref="textarea" placeholder="{{ placeholder }}" s-bind="{{ params }}" class="c-textarea {{ $style[\'textarea\']}} {{ $style[inputHeightSize] }}" style="width: {{inputWidthSize}}px;" value="{= value =}" on-input="handleInput" on-focus="handleFocus" on-blur="handleBlur"></textarea> <div s-if="waterMarkStyle" class="{{ $style[\'water-mark\'] }}" style="{{ waterMarkStyle }}" on-click="clickWaterMark"></div> </div> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(71)], "var-init"),
      o = cc11001100_hook("o", n(73), "var-init"),
      r = cc11001100_hook("r", n(20)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(20), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(72), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.calendar-all_HdkG3 {\n  position: relative;\n  width: 100%;\n  height: 30px;\n  user-select: none;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF {\n  width: 100%;\n  height: 30px;\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border: 1px solid #D7D9E0;\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 8px;\n  font-size: 13px;\n  color: #333333;\n  line-height: 14px;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF:hover {\n  border: 1px solid #A7AAB5;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF:after {\n  content: "";\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF .cal-date_2HLi2 {\n  float: left;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF .cal-week_3t1TW {\n  float: left;\n  margin-left: 8px;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF .cal-icon_wTM0E {\n  float: right;\n  width: 16px;\n  height: 16px;\n  color: #9195A3;\n  font-size: 16px;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF .cal-icon_wTM0E i {\n  position: relative;\n  top: -1px;\n}\n.calendar-all_HdkG3 .calendar-select_2Iu3B {\n  border: 1px solid #A7AAB5;\n}\n.calendar-all_HdkG3 .calendar-none_3kpGb {\n  display: none;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc {\n  position: absolute;\n  top: 34px;\n  left: 0;\n  width: 232px;\n  height: 213px;\n  background: #FFFFFF;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  padding: 0 12px;\n  padding-top: 12px;\n  z-index: 10;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl {\n  width: 232px;\n  height: 16px;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl:after {\n  content: "";\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .icon-left_2e1E2 {\n  float: left;\n  width: 14px;\n  height: 16px;\n  line-height: 16px;\n  font-size: 14px;\n  color: #9195A3;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .icon-left_2e1E2:hover {\n  color: #333;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .icon-left_2e1E2 i {\n  cursor: pointer;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .date-place_2lAfM {\n  float: left;\n  height: 16px;\n  width: 200px;\n  line-height: 16px;\n  text-align: center;\n  font-size: 14px;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .icon-right_1-uwn {\n  float: right;\n  height: 16px;\n  line-height: 16px;\n  font-size: 14px;\n  color: #9195A3;\n  cursor: pointer;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .icon-right_1-uwn:hover {\n  color: #333;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .hide-btn_3H8GZ {\n  display: none;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- {\n  table-layout: fixed;\n  width: 232px;\n  height: 168px;\n  padding-top: 10px;\n  padding-bottom: 9px;\n  display: table;\n  border-collapse: separate;\n  box-sizing: border-box;\n  text-indent: initial;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- thead {\n  display: table;\n  width: 228px;\n  height: 25px;\n  background-color: #F5F5F6;\n  border-radius: 6px;\n  margin-bottom: 4px;\n  padding: 0 2px;\n  text-align: center;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- thead th {\n  font-size: 13px;\n  color: #333333;\n  font-weight: normal;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- thead .weekend-color_2EVvf {\n  color: #315EFB;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody {\n  display: table;\n  width: 228px;\n  padding: 0 2px;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody div {\n  font-size: 13px;\n  text-align: center;\n  line-height: 21px;\n  height: 20px;\n  width: 20px;\n  margin: auto;\n  margin-top: 3px;\n  border-radius: 4px;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .prev_3RxZ0 {\n  color: #C4C7CE;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .current_2Euzw {\n  color: #333333;\n  cursor: pointer;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .current_2Euzw div:hover {\n  background-color: #F0F0F1;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .next_3_kaA {\n  color: #C4C7CE;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .is-now_t8q9k {\n  color: #315EFB;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .is-select_gW_LX {\n  background: #315EFB !important;\n  color: #FFFFFF;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      'calendar-all': cc11001100_hook('calendar-all', 'calendar-all_HdkG3', "object-key-init"),
      calendarAll: cc11001100_hook("calendarAll", 'calendar-all_HdkG3', "object-key-init"),
      'calendar-outside': cc11001100_hook('calendar-outside', 'calendar-outside_3jcJF', "object-key-init"),
      calendarOutside: cc11001100_hook("calendarOutside", 'calendar-outside_3jcJF', "object-key-init"),
      'cal-date': cc11001100_hook('cal-date', 'cal-date_2HLi2', "object-key-init"),
      calDate: cc11001100_hook("calDate", 'cal-date_2HLi2', "object-key-init"),
      'cal-week': cc11001100_hook('cal-week', 'cal-week_3t1TW', "object-key-init"),
      calWeek: cc11001100_hook("calWeek", 'cal-week_3t1TW', "object-key-init"),
      'cal-icon': cc11001100_hook('cal-icon', 'cal-icon_wTM0E', "object-key-init"),
      calIcon: cc11001100_hook("calIcon", 'cal-icon_wTM0E', "object-key-init"),
      'calendar-select': cc11001100_hook('calendar-select', 'calendar-select_2Iu3B', "object-key-init"),
      calendarSelect: cc11001100_hook("calendarSelect", 'calendar-select_2Iu3B', "object-key-init"),
      'calendar-none': cc11001100_hook('calendar-none', 'calendar-none_3kpGb', "object-key-init"),
      calendarNone: cc11001100_hook("calendarNone", 'calendar-none_3kpGb', "object-key-init"),
      'calendar-wrapper': cc11001100_hook('calendar-wrapper', 'calendar-wrapper_2qMvc', "object-key-init"),
      calendarWrapper: cc11001100_hook("calendarWrapper", 'calendar-wrapper_2qMvc', "object-key-init"),
      'calendar-control': cc11001100_hook('calendar-control', 'calendar-control_3poJl', "object-key-init"),
      calendarControl: cc11001100_hook("calendarControl", 'calendar-control_3poJl', "object-key-init"),
      'icon-left': cc11001100_hook('icon-left', 'icon-left_2e1E2', "object-key-init"),
      iconLeft: cc11001100_hook("iconLeft", 'icon-left_2e1E2', "object-key-init"),
      'date-place': cc11001100_hook('date-place', 'date-place_2lAfM', "object-key-init"),
      datePlace: cc11001100_hook("datePlace", 'date-place_2lAfM', "object-key-init"),
      'icon-right': cc11001100_hook('icon-right', 'icon-right_1-uwn', "object-key-init"),
      iconRight: cc11001100_hook("iconRight", 'icon-right_1-uwn', "object-key-init"),
      'hide-btn': cc11001100_hook('hide-btn', 'hide-btn_3H8GZ', "object-key-init"),
      hideBtn: cc11001100_hook("hideBtn", 'hide-btn_3H8GZ', "object-key-init"),
      'calendar-table': cc11001100_hook('calendar-table', 'calendar-table_1GT0-', "object-key-init"),
      calendarTable: cc11001100_hook("calendarTable", 'calendar-table_1GT0-', "object-key-init"),
      'weekend-color': cc11001100_hook('weekend-color', 'weekend-color_2EVvf', "object-key-init"),
      weekendColor: cc11001100_hook("weekendColor", 'weekend-color_2EVvf', "object-key-init"),
      prev: cc11001100_hook("prev", 'prev_3RxZ0', "object-key-init"),
      current: cc11001100_hook("current", 'current_2Euzw', "object-key-init"),
      next: cc11001100_hook("next", 'next_3_kaA', "object-key-init"),
      'is-now': cc11001100_hook('is-now', 'is-now_t8q9k', "object-key-init"),
      isNow: cc11001100_hook("isNow", 'is-now_t8q9k', "object-key-init"),
      'is-select': cc11001100_hook('is-select', 'is-select_gW_LX', "object-key-init"),
      isSelect: cc11001100_hook("isSelect", 'is-select_gW_LX', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <c-row> <c-span col="{{col}} c-span-last"> <div class="{{$style[\'calendar-all\']}}"> <div class="{{$style[\'calendar-outside\']}} {{showCheckDate ? $style[\'calendar-select\'] : \'\'}}" on-click="checkDateOpen"> <span class="{{$style[\'cal-date\']}}">{{selectDateYear}}/{{selectDateMonth}}/{{selectDateDay}}</span> <span class="{{$style[\'cal-week\']}}">周{{selectDateWeek}}</span> <span class="{{$style[\'cal-icon\']}}"> <i class="c-icon">{{ icon | raw }}</i> </span> </div> <div class="{{$style[\'calendar-wrapper\']}} {{!showCheckDate ? $style[\'calendar-none\'] : \'\'}}" on-click="stopPop"> <div class="{{$style[\'calendar-control\']}}"> <span class="{{ $style[\'icon-left\'] }}"> <i class="c-icon {{hideLeftBtn ? $style[\'hide-btn\'] : \'\'}}" on-click="changeMonth(\'prevMonth\')">&#xe617;</i> </span> <span class="{{$style[\'date-place\']}}">{{selectDateYear}}年{{selectDateMonth}}月</span> <span class="{{ $style[\'icon-right\'] }}"> <i class="c-icon {{hideRightBtn ? $style[\'hide-btn\'] : \'\'}}" on-click="changeMonth(\'nextMonth\')">&#xe613;</i> </span> </div> <table class="{{$style[\'calendar-table\']}}" cellspacing="0" cellpadding="0"> <thead> <th s-for="item in weekDays" class="{{item === \'六\' || item === \'日\' ? $style[\'weekend-color\'] : \'\'}}"> {{item}} </th> </thead> <tbody> <tr s-for="items, index in renderTbody"> <td s-for="val in items" class="{{$style[val.type]}}" on-click="pickDay(val)"> <div class="{{getNowClass(val) ? $style[\'is-now\'] : \'\'}} {{getSelectClass(val) ? $style[\'is-select\'] : \'\'}}"> {{val.text}} </div> </td> </tr> </tbody> </table> </div> </div> </c-span> </c-row> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(75)], "var-init"),
      o = cc11001100_hook("o", n(77), "var-init"),
      r = cc11001100_hook("r", n(21)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(21), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(76), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '', '']), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="c-row"> <slot></slot> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(79)], "var-init"),
      o = cc11001100_hook("o", n(81), "var-init"),
      r = cc11001100_hook("r", n(22)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(22), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(80), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '', '']), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{ colName }}"> <slot></slot> </div> ', "assign");
  }, function (t, e, n) {
    'use strict';

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign"), e.lessThanIE8 = cc11001100_hook("e.lessThanIE8", e.removeEventListener = cc11001100_hook("e.removeEventListener", e.addEventListener = cc11001100_hook("e.addEventListener", void 0, "assign"), "assign"), "assign");
    e.addEventListener = cc11001100_hook("e.addEventListener", function (t, e, n) {
      t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent('on' + e, n.bind(t));
    }, "assign");
    e.removeEventListener = cc11001100_hook("e.removeEventListener", function (t, e, n) {
      t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent('on' + e, n.bind(t));
    }, "assign");
    e.lessThanIE8 = cc11001100_hook("e.lessThanIE8", function () {
      var t = cc11001100_hook("t", navigator.userAgent, "var-init");
      if (t.indexOf('compatible') > -1 && t.indexOf('MSIE') > -1 && (new RegExp('MSIE (\\d+\\.\\d+);').test(t), parseFloat(RegExp.$1) <= 8)) return !0;
      return !1;
    }, "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(84)], "var-init"),
      o = cc11001100_hook("o", n(86), "var-init"),
      r = cc11001100_hook("r", n(23)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(23), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(85), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.content_1PgUj {\n  padding: 36px 24px;\n  position: relative;\n}\n.content_1PgUj .quick_hOmHG {\n  width: 220px;\n}\n.content_1PgUj .title_3h9lI {\n  color: #4E6EF2;\n  font-size: 22px;\n  margin-top: -10px;\n}\n.content_1PgUj .info_1tBly {\n  font-size: 12px;\n  margin-top: 6px;\n  margin-bottom: 45px;\n}\n.content_1PgUj .quick-btn_UsqCL {\n  display: block;\n  height: 36px;\n  margin: 16px auto 16px;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      content: cc11001100_hook("content", 'content_1PgUj', "object-key-init"),
      quick: cc11001100_hook("quick", 'quick_hOmHG', "object-key-init"),
      title: cc11001100_hook("title", 'title_3h9lI', "object-key-init"),
      info: cc11001100_hook("info", 'info_1tBly', "object-key-init"),
      'quick-btn': cc11001100_hook('quick-btn', 'quick-btn_UsqCL', "object-key-init"),
      quickBtn: cc11001100_hook("quickBtn", 'quick-btn_UsqCL', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'quick-wrapper\']}} v-container"> <v-header title="{{meetType}}" closeType="exit" status="3"></v-header> <div class="{{$style.content}}" s-ref="quickContent"> <img class="{{$style.quick}}" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=519039017,4102631410&fm=179&app=35&f=PNG?w=400&h=320&s=D9001D7253D368614CDD80CA0300F0B1" alt="快速会议"> <div class="{{$style.title}}">会议创建成功</div> <div class="{{$style.info}} c-color-gray2">目前最多支持30人参与会议</div> <c-btn text="开启会议" type="primary" size="wide" class="{{$style[\'quick-btn\']}}" on-click="startMeet"></c-btn> <c-btn text="复制会邀" type="default" size="large" on-click="share" class="{{$style[\'quick-btn\']}}"></c-btn> <c-toast s-if="pasteShow" pos="{{ pastePos }}" on-hide="switchToast">会邀已复制</c-toast> </div> <v-foot text="会议管理" type="video-manage"></v-foot> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(88), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.foot_4Pf4r {\n  font-size: 12px;\n  position: absolute;\n  bottom: 22px;\n  text-align: center;\n  width: 100%;\n}\n.foot_4Pf4r .tip-color_1HLen {\n  color: #9195A3;\n}\n.foot_4Pf4r button {\n  cursor: pointer;\n  outline: 0;\n  border: 0;\n  background: none;\n  font-size: 13px;\n  color: #9195A3;\n}\n.foot_4Pf4r button:hover {\n  color: #315EFB;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      foot: cc11001100_hook("foot", 'foot_4Pf4r', "object-key-init"),
      'tip-color': cc11001100_hook('tip-color', 'tip-color_1HLen', "object-key-init"),
      tipColor: cc11001100_hook("tipColor", 'tip-color_1HLen', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style.foot}}"> <button on-click="footEvent(type)" class="{{type === \'feedback\' ? \'c-color-gray2\' : \'c-color-gray\'}}">{{ text }}</button> <div s-if="tipText" class="c-gap-top-small {{$style[\'tip-color\']}}">{{ tipText }}</div> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(91)], "var-init"),
      o = cc11001100_hook("o", n(93), "var-init"),
      r = cc11001100_hook("r", n(25)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(25), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(92), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.flow-container_15AFv {\n  box-shadow: none;\n  background: transparent;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  margin-right: -198px;\n  margin-bottom: -275px;\n  color: #fff;\n  height: 580px;\n}\n.flow-container_15AFv .input_34ORg .c-input,\n.flow-container_15AFv .passwdInput_1Z3bD .c-input {\n  background: #fff;\n}\n.flow-container_15AFv .passWrap_3fUNm {\n  height: 54px;\n}\n.flow-container_15AFv .time-span_2aipK {\n  color: #fff;\n}\n.flow-container_15AFv .btn-flow_iFEyH {\n  margin-top: 30px!important;\n}\n.flow-container_15AFv .box_2JK9J {\n  color: #FFFFFF;\n}\n.flow-container_15AFv .box_2JK9J.boxInfo_LMpLP a {\n  color: #FFFFFF !important;\n  text-decoration: none;\n}\n.flow-container_15AFv .box_2JK9J.boxInfo_LMpLP a:hover {\n  color: #FFFFFF !important;\n}\n.content_3neeR {\n  padding: 0 38px;\n}\n.content_3neeR .meet-name_1eM7S {\n  font-size: 18px;\n  margin-top: 19px;\n  margin-bottom: 18px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.content_3neeR .meet-time_eM37p {\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n.content_3neeR .meet-time_eM37p .moment_2h3Uo {\n  font-size: 32px;\n  display: block;\n  line-height: 1;\n}\n.content_3neeR .meet-time_eM37p .date_2acUS {\n  font-size: 12px;\n  margin-top: 2px;\n}\n.content_3neeR .quick-btn_3PaRY,\n.content_3neeR .quick-btn-forbid_1oNs8 {\n  height: 36px;\n  line-height: 36px;\n  margin-top: 7px;\n}\n.content_3neeR .quick-btn-forbid_1oNs8 {\n  min-width: 128px;\n}\n.content_3neeR .start_3ktfc {\n  float: left;\n}\n.content_3neeR .end_c2w2e {\n  float: right;\n}\n.content_3neeR .time-span_2aipK {\n  margin: 0 auto;\n  display: inline-block;\n  margin-top: 14px;\n}\n.content_3neeR .checkbox_22YXq {\n  margin-top: 21px;\n}\n.content_3neeR .checkbox_22YXq .box_2JK9J {\n  display: block;\n  text-align: left;\n  margin-top: 6px;\n}\n.content_3neeR .checkbox_22YXq span a {\n  color: #222;\n}\n.content_3neeR .checkbox_22YXq span a:hover {\n  color: #315EFB;\n  text-decoration: none;\n}\n.content_3neeR .checkbox_22YXq span .first-span_3gddi {\n  position: relative;\n  left: -5px;\n}\n.content_3neeR .inputwrap_1AISU {\n  height: 55px;\n  text-align: left;\n}\n.content_3neeR .passWarn_25BKE {\n  margin-top: 4px;\n}\n.content_3neeR .warning_3SO4m .c-input {\n  border-color: red;\n}\n.content_3neeR .meet-choice_3tBOA {\n  height: 128px;\n  border-radius: 6px;\n  background: #D7D9E0;\n  margin-top: 22px;\n  position: relative;\n  overflow: hidden;\n}\n.content_3neeR .meet-choice_3tBOA .live_16naE,\n.content_3neeR .meet-choice_3tBOA .live-close_16Cap {\n  position: absolute;\n  width: 38px;\n  height: 38px;\n  left: 50%;\n  top: 50%;\n  margin-left: -20px;\n  margin-top: -19px;\n}\n.content_3neeR .meet-choice_3tBOA .voice_2dPWt,\n.content_3neeR .meet-choice_3tBOA .voice-close_1C_3J {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  left: 0;\n  bottom: 0;\n}\n.content_3neeR .meet-choice_3tBOA .info_3vr-q {\n  background: #F5F5F6;\n  padding: 12px;\n  border-radius: 6px;\n  height: 100%;\n  box-sizing: border-box;\n  font-size: 12px;\n}\n.content_3neeR .meet-choice_3tBOA .info_3vr-q .info-inner_pTqSm {\n  overflow: auto;\n  height: 100%;\n}\n.content_3neeR .meet-choice_3tBOA .info_3vr-q .info-inner_pTqSm .info-title_3DSh_ {\n  margin-bottom: 6px;\n}\n.content_3neeR .meet-choice_3tBOA .info_3vr-q .info-inner_pTqSm p {\n  text-align: left;\n  line-height: 19px;\n  text-indent: 24px;\n}\n.content_3neeR .meet-choice_3tBOA .video_2fNB4 {\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      'flow-container': cc11001100_hook('flow-container', 'flow-container_15AFv', "object-key-init"),
      flowContainer: cc11001100_hook("flowContainer", 'flow-container_15AFv', "object-key-init"),
      input: cc11001100_hook("input", 'input_34ORg', "object-key-init"),
      passwdInput: cc11001100_hook("passwdInput", 'passwdInput_1Z3bD', "object-key-init"),
      passWrap: cc11001100_hook("passWrap", 'passWrap_3fUNm', "object-key-init"),
      'time-span': cc11001100_hook('time-span', 'time-span_2aipK', "object-key-init"),
      timeSpan: cc11001100_hook("timeSpan", 'time-span_2aipK', "object-key-init"),
      'btn-flow': cc11001100_hook('btn-flow', 'btn-flow_iFEyH', "object-key-init"),
      btnFlow: cc11001100_hook("btnFlow", 'btn-flow_iFEyH', "object-key-init"),
      box: cc11001100_hook("box", 'box_2JK9J', "object-key-init"),
      boxInfo: cc11001100_hook("boxInfo", 'boxInfo_LMpLP', "object-key-init"),
      content: cc11001100_hook("content", 'content_3neeR', "object-key-init"),
      'meet-name': cc11001100_hook('meet-name', 'meet-name_1eM7S', "object-key-init"),
      meetName: cc11001100_hook("meetName", 'meet-name_1eM7S', "object-key-init"),
      'meet-time': cc11001100_hook('meet-time', 'meet-time_eM37p', "object-key-init"),
      meetTime: cc11001100_hook("meetTime", 'meet-time_eM37p', "object-key-init"),
      moment: cc11001100_hook("moment", 'moment_2h3Uo', "object-key-init"),
      date: cc11001100_hook("date", 'date_2acUS', "object-key-init"),
      'quick-btn': cc11001100_hook('quick-btn', 'quick-btn_3PaRY', "object-key-init"),
      quickBtn: cc11001100_hook("quickBtn", 'quick-btn_3PaRY', "object-key-init"),
      'quick-btn-forbid': cc11001100_hook('quick-btn-forbid', 'quick-btn-forbid_1oNs8', "object-key-init"),
      quickBtnForbid: cc11001100_hook("quickBtnForbid", 'quick-btn-forbid_1oNs8', "object-key-init"),
      start: cc11001100_hook("start", 'start_3ktfc', "object-key-init"),
      end: cc11001100_hook("end", 'end_c2w2e', "object-key-init"),
      checkbox: cc11001100_hook("checkbox", 'checkbox_22YXq', "object-key-init"),
      'first-span': cc11001100_hook('first-span', 'first-span_3gddi', "object-key-init"),
      firstSpan: cc11001100_hook("firstSpan", 'first-span_3gddi', "object-key-init"),
      inputwrap: cc11001100_hook("inputwrap", 'inputwrap_1AISU', "object-key-init"),
      passWarn: cc11001100_hook("passWarn", 'passWarn_25BKE', "object-key-init"),
      warning: cc11001100_hook("warning", 'warning_3SO4m', "object-key-init"),
      'meet-choice': cc11001100_hook('meet-choice', 'meet-choice_3tBOA', "object-key-init"),
      meetChoice: cc11001100_hook("meetChoice", 'meet-choice_3tBOA', "object-key-init"),
      live: cc11001100_hook("live", 'live_16naE', "object-key-init"),
      'live-close': cc11001100_hook('live-close', 'live-close_16Cap', "object-key-init"),
      liveClose: cc11001100_hook("liveClose", 'live-close_16Cap', "object-key-init"),
      voice: cc11001100_hook("voice", 'voice_2dPWt', "object-key-init"),
      'voice-close': cc11001100_hook('voice-close', 'voice-close_1C_3J', "object-key-init"),
      voiceClose: cc11001100_hook("voiceClose", 'voice-close_1C_3J', "object-key-init"),
      info: cc11001100_hook("info", 'info_3vr-q', "object-key-init"),
      'info-inner': cc11001100_hook('info-inner', 'info-inner_pTqSm', "object-key-init"),
      infoInner: cc11001100_hook("infoInner", 'info-inner_pTqSm', "object-key-init"),
      'info-title': cc11001100_hook('info-title', 'info-title_3DSh_', "object-key-init"),
      infoTitle: cc11001100_hook("infoTitle", 'info-title_3DSh_', "object-key-init"),
      video: cc11001100_hook("video", 'video_2fNB4', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'quick-wrapper\']}} v-container {{type === \'backflow\' ? $style[\'flow-container\'] : \'\'}}"> <v-header title="开启会议" closeType="exit" s-if="type !== \'backflow\'" on-mediaGoback="clearMedia(\'back\')" on-mediaExit="clearMedia(\'exit\')" clearMedia="{{ true }}"></v-header> <div class="{{$style.content}}"> <div class="{{$style[\'meet-name\']}}">{{ meetInfo.name }}</div> <div class="{{$style[\'meet-time\']}}"> <div class="{{$style.start}}"> <span class="{{$style.moment}}">{{meetInfo.startTime}}</span> <div class="{{$style.date}}"> <fragment s-for="date, index in meetInfo.startDateArr"> <span class="{{$style.datespan}}">{{date}}</span> <span s-if="index < 2">/</span> </fragment> </div> </div> <div s-if="meetInfo.startTime && meetInfo.endTime" class="{{$style[\'time-span\']}} c-color-gray">{{timeSpan}}</div> <div class="{{$style.end}}"> <span class="{{$style.moment}}">{{meetInfo.endTime}}</span> <div class="{{$style.date}}"> <fragment s-for="date, index in meetInfo.endDateArr"> <span class="{{$style.datespan}}">{{date}}</span> <span s-if="index < 2">/</span> </fragment> </div> </div> </div> <div class="{{$style.inputwrap}}"> <c-input s-ref="meetName" placeholder="请输入参会人姓名" widthSize="7" heightSize="small" on-blur="blurInput($event, \'name\')" on-input="limitName($event)" on-clear="limitName($event)" class="{{$style.input}}" value="{= meetInfo.roomowner =}" params="{{{maxLength: 20}}}" clearable="{{true}}"></c-input> <v-warn s-if="warn.name" text="{{warn.nameText}}"></v-warn> </div> <div s-if="meetInfo.needPasswd && meetInfo.needPasswd !== \'0\'" class="{{ $style.passWrap }}"> <c-input s-ref="meetPass" placeholder="请输入参会密码" widthSize="7" heightSize="small" on-blur="limitPass($event)" on-input="processPassShow($event)" class="{{$style.passwdInput}}" params="{{{maxLength: 6}}}"></c-input> <v-warn s-if="warn.pass" text="{{warn.passText}}" class="{{$style.passWarn}}"></v-warn> </div> <template s-if="type !== \'backflow\'"> <c-btn text="{{submitBtn}}" size="large" type="{{(canstartMeet.name && canstartMeet.info && canstartMeet.limit && boxChecked) ? \'primary\' : \'disable\'}}" class="{{(canstartMeet.name && canstartMeet.info && canstartMeet.limit && boxChecked) ? $style[\'quick-btn\'] : $style[\'quick-btn-forbid\']}}" on-click="intoMeet"> </c-btn> </template> <div class="{{$style.checkbox}}"> <c-checkbox name="info" class="{{$style.box}} {{$style.boxInfo}} c-color-gray" type="{{checkboxType}}" checked="{{boxChecked}}" on-change="chooseLimits($event)" bgColor="rgba(255, 255, 255, 0)"> <span><span class="{{$style[\'first-span\']}}">同意</span><a href="//www.baidu.com/search/meet/meet-service.html" target="_blank">\u300A百度视频会议服务协议\u300B</a>和<a href="//www.baidu.com/search/meet/meet-private.html" target="_blank">\u300A隐私保护指引\u300B</a></span> </c-checkbox> <c-checkbox name="live" value="开启摄像头" class="{{$style.box}} c-color-gray" on-change="chooseLimits($event)" type="{{checkboxType}}" style="width: 100px;" bgColor="rgba(255, 255, 255, 0)"></c-checkbox> <c-checkbox name="voice" value="开启麦克风" class="{{$style.box}} c-color-gray" checked="checked" on-change="chooseLimits($event)" type="{{checkboxType}}" style="width: 100px;" bgColor="rgba(255, 255, 255, 0)"></c-checkbox> </div> <template s-if="type === \'backflow\'"> <c-btn text="{{submitBtn}}" type="{{btnUseful ? \'primary\' : \'disable\'}}" size="wide" on-click="intoMeet" class="{{btnUseful ? $style[\'quick-btn\'] : $style[\'quick-btn-forbid\']}} {{$style[\'btn-flow\']}}"> </c-btn> </template> <div class="{{$style[\'meet-choice\']}} c-span7"> <template s-if="!noLimit"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAI/UlEQVR4Ae1ab0yVVRgXCgkw1EzSq5esRDMyNZQ+ac7FdNj84pZrijpl4pYO9JNTt9xyqR+ajGXL0dycrYy1NlvFaoSjQblwrjTMgf9KFkE0NVBQEfr9rjx3zz2+fy/3as17tsN5nnOe85zn9zvPOe97Xx02LFESDCQYSDCQYCDBQIKBB5WBpP878IGBAWIoRB1ArU5KSmL7YBSCR61ElbL4wUAOlEBM8O8L8sGWmfBgFAB+zwB/APo9OdJc5H7U8M4CaIUB/iD05LBBHIRoATMot+rLN4CWG+A/vN/g3QAOZTyCHAB9xwD/EfSH4rDhYZcRAaBXdCtQDMSuPowxXe3spN/0zwtvjwH+k0HwjCkuRcDq1gxMAtbgKKdEUbUP8cs2GUDfNsB/Cp32OjYrGSbRFStnGrwEKEEL4OFYTmoqZC9V7KUVXyHft2/f3mmA/+z48eO0sYrRrs83C6YjE3wouLy8vJTe3t7S/v7+Ywiyxwg0WvUy/NV0d3cX3Lp16y3DyZGmpiYSpeOhbMZrpfsiQTvQi3HnCT4lNzd3eF9f3+dGgLFU+7UzkPJFVVVVGtaW7AsdD+g6PjcyYO5eNHjKskAYPPqGX7t27Q0dYDxlgK/et2/fCKwbcTygO5Fh4qDuqeiJluDhJRW7/0M8QYtvHIOaHTt2ZHLNwcojkNLS0jLx5s2bm1CLKyoqOCZkSMxW2QAz9+JEABfnYmkIsFuCjFcL8Ec3bdr0GNZL55qojzQ2Nj4N8t/FmuE7BxflAYzJhWweDY3HUxboCWQxIvUZBGp6vECLX4D/bv369VlY61HUEXV1dTm4cPnjp1dsVNsFG308NAkajy8CJJWEgPDuY7EMtXiE2NPTU4PzOhNpOev69evfRgx6VJDWDWvWrAlgnVGHDx+eAp/8yXvDaTpsmZmh44GW2WBHAoacizBmu/uYPsIumL17976IcQYf2LNnz2w7O7v+GzduHFu5cmU25o/BrT8d6f2bna3uhz0zU5NAAoQEwXRXBpApr0U7ucuROEHAYTvc3rZ2Yq9b7HxjcXHx64cOHeqtrKycsHTp0iPJyckkw0uRteSLEHUr2dWXANAZwNQKnX20fBxlava1jBeY2l27ds3ZuXNnPmU95iTjfJ9YsWLFZPgeh+MzAxfdeSd7cwzzMlBDFyVaOQqSAcQiuCA6FzG0I4CX0kgzgKHoAP8TwE+F38Du3bsJ/pxff5jLjeHTQo4CL0V9FwgudDsXMRQC6EgygCyTgFF+A7Szx5k/WVRUNA0+J+B5PxPgW+xsnfoH45Is4F0QUwLokOkVUwIA/pdVq1blwm9w69atM3EHNDuBdBqDD74s6SzgpkWdAdx9nQGaAC402ikYL2MAf3r16tXT4Su4efPmGQB/xss8Oxv4GYnK7JRjYN4DktkwcS40tCMgdAFifEgEAPyZdevWEXx2aWnpC9B/tQPmtR++RqGSADkGMSGAKcSzJBkwZAIAtnnjxo0z4DO4YcOG6dCbvIJ0soO/0ajMTiFA7gHzSQAT56IzIKYEIM1bysrKZmL54Nq1a58H+FNOoPyMwacQwE3ifRU3AnjWfB8BgD2Hsz4Lc4O8+KD/7Aegmy1jQpWLUBPATZQjzc11LW4Z4JsA7Pz5LVu25GHl4PLly5/jc98NkN9x+L5nBPh6CgD8xW3bts0m+GXLlk3jG58fcHgv6ID9Tbc5ioD/zh0A8L/j5Ybgs/Fe/yzAH3cDYo5fuXLlS/wifBVHxvEdAWvwKRDzS5A3qH4KkF1PGYDf85f4ewD22UuWLJmKn7Q/muC86CQAPibl5+dP6ejo+ABzIr4Vig/Y6McgX4dj8hi0I8DxVRhp24qfwgQfLCws5O95fjWOqly9epUEPInKX4XB+vr61+hfO8Mv0IsY491kvgly8+QxyLvN8yUoF6EQQDbJKjOALxskwOrLzACC+6O8vPwl2ExcuHDhZID/XgfrV758+XIVfIXAo52AGigpKcnp6ur6GL5uofa0trYWoV8/ASQDon4VtiOAr5kkYCRS/K4XGIBv279/P8FPWLBgwTMAX+8XsGl/4cKFN+FvIn2ijkcdh/oE6tjt27c/heNFmbuv3wLlHSAmBNCJZAAJCL0N4rM4v8+FC9Lwz4MHDzLtx8+fP38SwNeFB6MU8EGlG9k0Bz75hUmA8zvh46hjUPno0+DN3wExIyDiImxubn4FmLoEF8C34/MVwWfNmzcvCPBHZWwIbR8+fZfBJ3edu0zgY1EJnF+KNXh99rn73DANni9CUd8BdEQCQllw6dKllwHqHwEG8B3V1dXcpTEFBQUBgK+RsWha+OvEx9Sa2traQvjkrgtw7roAl0ce017Ay9sf42S8ngiwuhWlT7chBtvb2+dkZWV9Bee8cPj/dNobGhoWz5079xxUYVhamniRaSeF3/Csar/R76ZrH/RNXYqWLR8LGjgnhUDgcZSXmZn5NXSeOZaOEydOFOIfSJshC1Dd0kZ0LbNP9EEx3OjARdZgtSzjdi2dcoxFWlN2JIDGIQC48Galp6d/A53njuWvs2fPLsrJyTkDWUCaLe2kz0nmGIsdEPa7ATfni65byiyaDHcCcB7Hp6WlncREnj+Wzra2toWBQOA0ZCuA7GORMa3r/pCR+iMEsEtkP8BlnlXLPikRBPCicCypqamLYSDg/+7s7FwE8KfQpwFSpmPpg+goc9yqCHAvLecLGLO18q3tw+OyO+EOCBF9SP/xSP8jNEA2lGRkZDAbWJzAWo1LH1sWvY4GYMrUdeVc0SmzyJw72t26bb8OQozYmv1aF9mptRuz8i3rCggNTmSrMc6TftOH6Lo1bUNjEqg2pGzVr/usZKc+PWblXwdHWXTdapk+pEi/6HatpZ0ZmEy26+e4OaZ1kaW1sjf7zMBEt2s5n0XG72j2fx3tdKCmC6cx2prjfnVzPR2oF9mcL7qeK322rRm0aeg2Tns7G7t+cw0r3QRh6nqO05i2s5S9BunVjov4sbUMSnW6gXMbV66sxWiCjWaOrG41NxoQ0cyRGCJaq4AiDDwosfDhYRnPl54XXwmbBAMJBhIMhBj4F9S+rblAx3bBAAAAAElFTkSuQmCC" alt="" s-if="!liveState" class="{{$style[\'live-close\']}}"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAHs0lEQVR4Ae2aTWhcVRTHO6lNa23SD01arV8tCEWhIhJB6KLgvoJQweBGFLoounAT3Ei7tYWCK7GL4lYEN8aV0IVui5BCiaGCJY2VpA2lpLRJk4nn9/r+48nNfZ8zmQTMhZtz7vn4n49735s3b7Jly+bY7MBmBzY7sNmBzQ78bzvQ6FLldeMsr3V+dRMrymutcDvekLVItAxmlk2ZAsvYFG1QS5+VSMugApOHlafLC5FXbJ4uD3OFrm5iK0BskYUTysN1iKN1WFy4zrKTvDQtm1AeYBaG5KJgiBcNcVWoKHrxolk+obzUuqeUVTUjilOBnhKrMT09/fbi4uLXzWbz6vLy8iwTHhm61DexTcN6DPGpav0JCflJ4ppbjX/C5jbm5cuXD1iRP1rBuQMbbOWXYoAlXDXHxzX1+gyfBLyS9MX3jo2NHbZd/jO3cqfEFh/D67VJA2mkb0IY19TdH2ES0eLPnDnTv7S09LurrxSLD75W1oZtgm9AtHhLfvvc3NwXpSqOGOELRskmmFl3R14D2LXtR48efcqO83SktlIifMEAyyaYeZeCqbs7wgb4656Ed9y4ceOdUpXmGIEBlk0ww/uBz8HU1QdHt91BEho+oZ7+/v5XpahLUwzy9NiC87Elq0Q70QACKjnPN3p6egYrZRMxTjGEr4K1jnhUE3WqAYqqBFk3bHDNtjVSjBW4bQEGznUb4BMSpGRQTenapcLzMUJM6UJ57rpuAwQaBvWJNuwuHurlV5qmGCtwA+e2YrTbAHJRcj6vmMzrq/IxvJisKm7y6FrFKS+odNBkdPAECHJVDClSKn0gzl5WOQGtwiJwoa5yIhFML4rhhTFDe7/O5Ms2IBYsSxZLNjOBCgrhZsUNoWJ2oU3lSyAEUFLIw4ANe8ALZaF/4TrFCHG0hoovxIoZlDkBsQChrHHz5s037t69++Hx48d5XE30lvxiLGgVmcNogG0xhicnJ19XDIcV5oQqJnMu5VhAwknjePZnbrt169ZbluiSzWVLkG9wu23us6Z8jqydAQZYYIKdYi1azCGT0WzlQU5hnoUNKHMCDHfF8KAJ39vbu8csEqy+vr4PZD01NfWH+LrUYzjsrRZzb4q5Kp+6sbL8COAnhTLpPI+6vRcuXNhjOzOf7k7T1odNvm9wcHC/vdiYqXsC8AUDLDANp5lizROT2DbzviL75phpvZFVfHL8DZIkdti7vN9U6J07d7402dM2B2wHz0peleILBlhgyp9YJuMrMrHDy4DN8Tnbsr3hwcLdJ3jSALs+P1GCtnN/nzhx4jnTDRw7duzF+fn5MenKUnzwBQMsMOVLLJP7BuSdAjNtbxQ1IHn5cfLkyd325DelJO/du/eNhWX39p8/f/7NhYWFv6Qrotjigy8YYMmHGMQyedZLkq6fABrwpM2ds7Ozp5So0ebExMRHJqeIZ0+fPv2aFfKz00dZbLDFB18wwJLxzMzMKZPvtEnM2FuirjaA499qgPG77Oj+pGSNLoyPj9ME3vNzSTw/Ojr67u3bt78zu+u2m3NMeGTosEltD1y7du1jMIQHtul22fQNIId1vwSSE0ByFy9ePPTo0aNxJW20aSfjW3uIedn0B21S4Avp5Bpnao3uILb44CscMME2fdgA7kPr3gCuR3aF5PouXbr0iiU8oeShdhP7x57gzo6MjPAUp0ZQsOZBdNhg633BAhNsm2rAhrkHJJ8ClhingFfYJLn73Llzhx48eOAvB9XUtKN81e7kP9h7/1+Y8MjMoLXjMgYDLDBTbGIQa8N8Cqy6D1hy/KJDwnttRz+1HZ1UQWUpPviCkWKBqd3XDZDYXb0EGhYw9izAjZAd8aeAhHla2zs0NHTAivns4cOHv9pNr3VTC5uBDhts8cE3xQCLk+V3v8wnAPl2ZACkGWuAToHuBa1LwfySJhjlyfCZ4eHhl65cufLe/fv3R9UAeGTosEltVbw/+txndO13ZfctXjJUvGheEzgFrRui8RSgJvCtLmmEPdp+pQbAm1yFYxMWX+fok2vh4OOj3RH+54bWTQOmUVCSgW8Ne98vO35AgA8nfpJ5XjLRFmYdpmwDCOY7qrWniq/CWfvixSenyH7xwTcZKR8rMpSFa/yFI/oY9D+51lFatgExZ188RfkESNTvOGt/CrytsLFhoAsLjclk6yl8pVGlASThTwGBJPNUCYRFI5eM3w3xSUbKs47NWDPwk79ogpX+icm8vsX7XWoJKzIK5im8JgWsmvZxd11xUn6VTeonHFHc4Bmij1c1/oY7WgYiy0dyT+Gjc2BgoGFflN4n4JEjR763b3kqMI9irqJFkfmRJfc2LV7JtgQlmSw/yT2F95MQWvtwKhyZeE8l9xTej0rF46hEPUhZPstXck/hw3UsjgpGJ15FhTT0lz6U5655r9fOUFEhhuSioT5rraLRh7xkMd9axQPUbgOUTKxQyURlC40lLFkRLcLx+kK+Uw1QoLBYrUVlF6Nh4djEZF4ew6kkK5NYJUAzDjH92vPgaq1CFcuvPY8+XMunFlUCtZxznELcorWgwuKK1vKrTTt9CSiRsOAiufSiYeGSd5x2uwEqIKtBXSu8KBHp26FZRdbFXJPmdOK7QN2CNoRfp3cpVlS7MdZk55Xov8kCFGrqUCLzAAAAAElFTkSuQmCC" alt="" s-if="voiceState" class="{{$style.voice}}"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAALNElEQVR4Ae1Ze2iX1xnWzEunxktMTGzUurqtOFdnJov7YwPZ0DWuOi14LzKc2g3qELywBdxEkG2I6ChSnYKTwhhDrJfaCWUKtUjRjkZLSE2TeTdq1HiJl1yMe57P7/n2/k7O7/6LdVsPnLzvOec973mf51y/X7p1+yJ9wcD/NQPd/wvRpxPzo2T40nGWzFdXtuciTi8ZuXD8tAO38XUi4WkmoKtiiyGhh6WnC/VcgknVVwzQeNjy4jVkWc8gbc7SXdBd/mJ8TZw4Ma+9vX0KcsXMmTMtOVaP6dPVBQWaSJL4TPOX0DfIAN/j4cOH2x+F6cGDB1M9fn1xdAkHvoFUlylY9osAG73H+PHje2LW/yTwlCDgZWOjMRWDlTknwDq3uoKQ9IFJpY5nlc0Ev8WCR/nPJMVDAMe2MVHPaXKdq+wDLRAMNFmmrdemtbV1swP+rYqKit6hPfuJVMWgmCRhkrskp5IalFKBRGCuXr36fczWmx0dHZ8CxB1m6gC1FW3fQ59eiTLs3nDA/wVnwTNhHxImkjm2YlFskmjKTZJDSQ0o8BHww4cPlwD42zZ4n97W1rb34MGDQxEeQcVk7PE/2j7w99epU6f2gR1nn8RpxWgV2HgUI2XOknVKXQOSfYHvdfLkyecxy/U2+EQ6bE+DsK/Cx5eVAX6D7QOidk2ePLkv2kmSCBAJIiDeKkCX7FNK4NesWdMfV9XHNvhUdPQ5OW/evEEIs++9e/fW2z4A//a0adPy0UaCEhGgCXFjzR49PFinGihm5mHT++7du5U2+HT0W7du/ba5ufkPtg+3CA68/vDNpf/UEsCl2Hvs2LF9sZyvWgDp6OjLQzJKLS0tB6ZPnz4Qvrn0fQTEOwPsZFHPSbJOuQLs7HNPPnP27NkfRtFnqQD832fMmDEYfvshJyIg2f7POQF2+XMGOPvcl32ampqWZok76I4D8D2c9oXwyX3vI4Bjugeg4rIT1Qk8jXKRNAh9Se+el5c3JFvnmPnDs2bNenX//v1tji9+7SmzSXpKX4HylSsC5M8y3B2JyzHjBPDvE/y+fftaHScWpAWuelc63f9TzJQAC1TeVBetADVkIrHsj86ePZvgW5z+Fpx0a+KrU3untkwJkEOBtuWIAJzibrvsEkqA/3Du3Lnz9+7d+8AxFADKeFldZKuyV2ZLAJ0KsB3AV2fb4+oAfwzgX92zZ8/97du3Dzt37twcGAss+/l0F6xbVj/KrJKASZJAXX/R6Y86ntQDbty4EfOISXYj4MX3Ea66r6Pv0M2bN4/DW/8MfaDMu583AK8/PX5SPfUZa06SQFspAmKuP4zGYAemQwDAfwzwo9GvdMOGDWUA/y8SFhIwIPQpAvT2d+98G5t0dM0+yZmVBO8SwNlhkGkRgGVfhd/zvoF+w9atWzcOn7zRh9PNmzd/j3ofASRdBCgWG590mGWf5MxKgWcQDIazIgL4Vh+UygoA+E9w2n8T9sNXr15dBvB1dqsYArit9PzlWE+MAAtauhiP9v+FCxe+i2AX48cJ7lfO2KBr1679zoJxdYCvnj9//ouwHbFy5UrOfK1rAxLXhf768SMIY/zs/Pnz5aj73AkQ+J4NDQ3lCPwhg0eAvw4DHnTx4sWVLiCVAb5mwYIFYwl+2bJl4/DoOaU2Ky9fvrws9Jd/+/btX4Vt7RjzOyEJjIOZk6IJshLV2SXrjLo7+z2vX7/+IwWN7/gq2HAFFBw/fnyK6q0E2E8XLVoUgF+6dOm3UK6x7VY/ceLES6G/fP5GoDYQPQn1qawCmGWXLAECT0nWGUCvrVu3FiKwtjC49o0bNz6P+oIxY8aUIOgmBU0JsLUEjfbhS5YseRHlattudfRtLC0t5RfgALwJnkNbR9jegjG41T43AqLljyCCT19cW0cVPPZ+JeoLamtrf4q6dtVjj3+2YsUKzvywxYsXjwH4T9Tmk42Njb+BLX8VGogvy9WywVgfoE5XIUmw24CTYycNxeySdaYVIAL4GAlOfxxWrylAzFwDXnA/R7lVdTzdKysrCb4Uy380wJ9Qm0/C/sSkSZOehX0BXobFeFZflB2W/yLU85M7lccQzLJLIsAFHyx/uA6+/ZcvX16IIC8rSMjgUGSZM4/fBgn+2YULF77Ae9/YdVIxw6e3bNnCbcLfAAru3LnzpoxIBN4MPGOeCAECT+kjIJh9tPF+7nflypVoFShggKlbv349wZfgihwJ8P9Um0/iN8ADq1ategH2/C2hsK6ujttIe/8RtsVrqOd4JIDjJzsHYJJ5cgnQXtPsi4Dg9XfmzJlXEGw08wB/dtOmTQRfjFzCvHv37h9gP+/AFjiJrXILM9rMFcK6Q4cO/Ti0o31RCD7aRujzDur1IOpyAlzwXAHa+yIgWP6o74s9/xOAv69ZBbiz27ZtI/iiOXPmjMSy/Qr0iAjoASEeWYzf+4djn2+1Mw9/NTt27BgJ+ydCgAVPPd7yDwjAj58vI9h7BvyZnTt3Enwhftt/DjN3FDPdhNvhDVxf41DvJWLt2rVj8HhaA7D2LHmEn8JrAf5r6MdvjC4nIBXw0el/6dKllxzw53bt2kXwBZj1Uuz5D0RMKLEz2uvx9feP+/fvH8L/Dd7DIfc3bAM+cqK9rj7ovx9nCFdP/5AAfRGS/JzfAi74hLMP8JMR6F0Fi5k7j19xCJ53d0F+fn4htsYv3BmVfSJJX1gNr4e+eOrb2edHF8+fnBKQKvhg9vFG52/+zQKBJX4B/9Tk1cVg+UoLSIAMVgI+YF7HVvgQ9tHDSH2NbMGMvw/bX06YMIHbJHgEQXL2ufTt7KdyAxBTSikt8A0NDRMRdPRfG97NR44cIXgGSgIsCRERqB+M5++IqqqqV7D83xVw6O+gbgY+jkbQBrkA2YLn7BO8vf5yNvvJwMec/Pz/PgK/reABvuHYsWM82BgkM0lwidCKEBmD7W8F1NGHwOOB18GXztJPafb5Y0ayFBGEPV9eVFTEu5hAu4GEK/haqygvL68LndDW94Nk2BwJnw3r4uWOBG2R00wUHwFiTjLwi1fe+CFDhhA8Z5fgG2tqairKyso+Cwwef4BYYNQtIdQjn/ivUWQb6gTJZElwgbtl2VtJnSny/7jo/+sjwFoGQePA+zbAH0AD9zbBXzt16lQFPndPoShQvgFZp/aga1jmv81ce5YT5XTAc6yUkkuAgpXsVl9fP7S4uPhdeOP+Jfjrp0+frhg9enRNOIIPSNgUrQD6o538xvQJyYgH3gWuvq7UmJRqs3VenS+8eInBdi8pKeH7nKcywd/Ae3/KqFGjqln0ZDdYla0MdFx3Oje6hTrrfdkdB2YRwJSBslO8FABFI2WnJ291dfUInPQfMYc/RvIkdjNfZcy8m31Z7ezHq6wPDtN++CltITN11Omao418uVcdbyTFaOO2OkxST+qoHrYsnZJJ5cel2L+aCcnY1scl29/qstVMsyzdStVbSd2mRONbu0i3Z4CARo0ehQNYOw3oSk/XoMr2Vx9ryzrVS7dl2qps+yWqd+1iylxSFpB0SmV2sPUsKykYV6rdlfLj1qtMP9aX1Wmjsuwl49WrPa5MRIA6KWhJ1VPaganbsrVzdZ+d6pJJ60u2ti4tPRkBAi3pc64gXGlt1V82tk262iRZL13StVU5Y8nAFByd+HRb5xtIwUn6bFTn+lLZ7WvLVqcftyzfGUkGoCDkwJatznaV3SBs2eo+n9aP2iXdvsnK6pexdLeAHAlovLLq0w3Q9Ss/rnT9uu05K8cjgAOkGixt0w04nu90/XDsrBIDiReMHMdrf9LBdsl4iVaACPiflppdyVyAdWcqW9+uv1zEGPn4N2idlYY9IKXBAAAAAElFTkSuQmCC" alt="" s-else class="{{$style[\'voice-close\']}}"> </template> <div class="{{$style.info}} c-color-gray" s-else> <div class="{{$style[\'info-inner\']}}"> <div class="{{$style[\'info-title\']}}">{{errorMsg.title}}</div> <p>{{errorMsg.sub1}}</p> <p>{{errorMsg.sub2}}</p> </div> </div> <video class="{{$style.video}} videoMedia" autoplay="autoplay" s-ref="videoMedia" muted></video> <audio class="{{$style.voice}} voiceMedia" s-ref="voiceMedia" muted></audio> </div> </div> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(95), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.wrapper_YeQoN {\n  font-size: 12px;\n  color: #f73131;\n  line-height: 1;\n  margin-top: 1px;\n  text-align: left;\n}\n.wrapper_YeQoN .icon_1LJ5z {\n  display: inline-block;\n  height: 14px;\n  line-height: 14px;\n  margin-right: 0;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      wrapper: cc11001100_hook("wrapper", 'wrapper_YeQoN', "object-key-init"),
      icon: cc11001100_hook("icon", 'icon_1LJ5z', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style.wrapper}}"> <i class="c-icon {{$style.icon}}">&#xe656;</i> <span>{{ text }}</span> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(98)], "var-init"),
      o = cc11001100_hook("o", n(100), "var-init"),
      r = cc11001100_hook("r", n(28)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(28), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(99), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.content_2aDja {\n  padding: 16px 22px;\n  text-align: left;\n  font-size: 13px;\n}\n.content_2aDja .input_qkECH textarea {\n  height: 100px!important;\n}\n.content_2aDja .left-title_28Joo {\n  font-size: 13px;\n  line-height: 28px;\n  height: 28px;\n  display: inline-block;\n  margin-right: 10px;\n  vertical-align: top;\n}\n.content_2aDja .left-title_28Joo .need_12leX {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  color: #F73131;\n  margin-right: 6px;\n  font-style: normal;\n  height: 100%;\n  line-height: 28px;\n}\n.content_2aDja .titlewrap_2SyMg {\n  height: 44px;\n  display: inline-block;\n}\n.content_2aDja .titlewrap_2SyMg input {\n  height: 100%;\n}\n.content_2aDja .participants_3t2hp {\n  display: inline-block;\n  margin-right: 0;\n  margin-bottom: 8px;\n  position: relative;\n}\n.content_2aDja .participants-number_SrzmF {\n  color: #C4C7CE;\n  font-size: 12px;\n  margin-top: 8px;\n}\n.content_2aDja .choice-title_spA7j {\n  vertical-align: top;\n  margin-right: 14px;\n  margin-left: 13px;\n  float: left;\n}\n.content_2aDja .choice-title_spA7j.part_1dFTr {\n  margin-left: 26px;\n}\n.content_2aDja .pass-title_9I-b_ {\n  float: none;\n}\n.content_2aDja .pass_NZpS9 {\n  height: 42px;\n  width: 100%;\n  overflow: hidden;\n  padding-top: 2px;\n}\n.content_2aDja .pass_NZpS9 .choice-title_spA7j,\n.content_2aDja .pass_NZpS9 label {\n  margin-top: 3px;\n}\n.content_2aDja .pass_NZpS9 .passwd_ZOXyd {\n  margin-top: -2px;\n  display: inline-block;\n  margin-right: 0px;\n}\n.content_2aDja .pass_NZpS9 .passwd_ZOXyd .passWrapper_2wyEw {\n  display: inline-block;\n  width: 176px;\n  box-sizing: border-box;\n  margin-left: 15px;\n}\n.content_2aDja .pass_NZpS9 .passwd_ZOXyd .passWrapper_2wyEw .passinput_1VzwO {\n  width: 176px;\n  box-sizing: border-box !important;\n}\n.content_2aDja .pass_NZpS9 .passwd_ZOXyd .passWrapper_2wyEw .passinput_1VzwO input {\n  height: 100%;\n  width: 135px;\n}\n.content_2aDja .pass_NZpS9 .passwd_ZOXyd .passWrapper_2wyEw .passinput_1VzwO .right-icon_8z87D {\n  height: 16px;\n  line-height: 16px;\n  float: right;\n  margin-top: 5px;\n  font-size: 16px;\n  color: #9195a3;\n}\n.content_2aDja .pass_NZpS9 .passwarn_1whNP {\n  overflow: hidden;\n  display: inline-block;\n  margin-left: 173px;\n}\n.content_2aDja .inputdisc_UKpEH {\n  margin-bottom: 14px;\n  display: inline-block;\n  height: 130px;\n}\n.content_2aDja .open-btn_hdX1c,\n.content_2aDja .forbid-btn_1aYg1 {\n  margin-left: 110px;\n}\n.content_2aDja .calStart_3AzBS,\n.content_2aDja .calEnd_2NDEr {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 12px;\n  z-index: 2;\n}\n.content_2aDja .start_3ysI5,\n.content_2aDja .end_1aeoM {\n  margin-bottom: 15px;\n}\n.content_2aDja .c-input input::-webkit-input-placeholder {\n  color: #9195a3;\n}\n.content_2aDja textarea::-webkit-input-placeholder {\n  color: #9195a3;\n}\n.video-scroll {\n  overflow: hidden;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      content: cc11001100_hook("content", 'content_2aDja', "object-key-init"),
      input: cc11001100_hook("input", 'input_qkECH', "object-key-init"),
      'left-title': cc11001100_hook('left-title', 'left-title_28Joo', "object-key-init"),
      leftTitle: cc11001100_hook("leftTitle", 'left-title_28Joo', "object-key-init"),
      need: cc11001100_hook("need", 'need_12leX', "object-key-init"),
      titlewrap: cc11001100_hook("titlewrap", 'titlewrap_2SyMg', "object-key-init"),
      participants: cc11001100_hook("participants", 'participants_3t2hp', "object-key-init"),
      'participants-number': cc11001100_hook('participants-number', 'participants-number_SrzmF', "object-key-init"),
      participantsNumber: cc11001100_hook("participantsNumber", 'participants-number_SrzmF', "object-key-init"),
      'choice-title': cc11001100_hook('choice-title', 'choice-title_spA7j', "object-key-init"),
      choiceTitle: cc11001100_hook("choiceTitle", 'choice-title_spA7j', "object-key-init"),
      part: cc11001100_hook("part", 'part_1dFTr', "object-key-init"),
      'pass-title': cc11001100_hook('pass-title', 'pass-title_9I-b_', "object-key-init"),
      passTitle: cc11001100_hook("passTitle", 'pass-title_9I-b_', "object-key-init"),
      pass: cc11001100_hook("pass", 'pass_NZpS9', "object-key-init"),
      passwd: cc11001100_hook("passwd", 'passwd_ZOXyd', "object-key-init"),
      passWrapper: cc11001100_hook("passWrapper", 'passWrapper_2wyEw', "object-key-init"),
      passinput: cc11001100_hook("passinput", 'passinput_1VzwO', "object-key-init"),
      'right-icon': cc11001100_hook('right-icon', 'right-icon_8z87D', "object-key-init"),
      rightIcon: cc11001100_hook("rightIcon", 'right-icon_8z87D', "object-key-init"),
      passwarn: cc11001100_hook("passwarn", 'passwarn_1whNP', "object-key-init"),
      inputdisc: cc11001100_hook("inputdisc", 'inputdisc_UKpEH', "object-key-init"),
      'open-btn': cc11001100_hook('open-btn', 'open-btn_hdX1c', "object-key-init"),
      openBtn: cc11001100_hook("openBtn", 'open-btn_hdX1c', "object-key-init"),
      'forbid-btn': cc11001100_hook('forbid-btn', 'forbid-btn_1aYg1', "object-key-init"),
      forbidBtn: cc11001100_hook("forbidBtn", 'forbid-btn_1aYg1', "object-key-init"),
      calStart: cc11001100_hook("calStart", 'calStart_3AzBS', "object-key-init"),
      calEnd: cc11001100_hook("calEnd", 'calEnd_2NDEr', "object-key-init"),
      start: cc11001100_hook("start", 'start_3ysI5', "object-key-init"),
      end: cc11001100_hook("end", 'end_1aeoM', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'quick-wrapper\']}} v-container"> <v-header title="{{modifyMeet ? \'修改会议\' : \'预约会议\'}}" closeType="exit"></v-header> <div class="{{$style.content}}"> <span class="{{$style[\'left-title\']}}"><i class="{{$style.need}}">*</i>会议主题</span> <div class="{{$style.titlewrap}}"> <c-input placeholder="请输入会议主题" class="{{$style.titleInput}}" widthSize="6" value="{= roomName =}" on-blur="getValue($event)" on-input="limitName($event)" on-clear="limitName($event)" params="{{{maxLength: 30}}}" clearable="{{true}}"></c-input> <v-warn s-if="warn.title" text="{{ warn.titleText }}"></v-warn> </div> <div class="{{$style.start}}"> <span class="{{$style[\'left-title\']}}"><i class="{{$style.need}}">*</i>开始时间</span> <c-cal class="{{ $style.calStart }}" on-change="chooseDate($event, \'start\')" checkAvailableBeforeNowDay="{{ startCalData.limitBefore }}" checkAvailableAfterNowDay="{{ startCalData.limitAfter }}" selectDate="{{ startCalDate }}"></c-cal> <c-select maxHeight="160px" dataList="{{ orderData.startSelectList }}" columns="1" width="42px" columnWidth="42px" on-change="chooseTime($event, \'start\')" index="{{ orderData.startIndex }}" on-boardopen="openSelect(\'start\')"></c-select> </div> <div class="{{$style.end}}"> <span class="{{$style[\'left-title\']}}"><i class="{{$style.need}}">*</i>结束时间</span> <c-cal class="{{ $style.calEnd }}" checkAvailableBeforeNowDay="{{endCalData.limitBefore}}" on-change="chooseDate($event, \'end\')" selectDate="{{ endCalData.initShow }}" checkAvailableAfterNowDay="{{ endCalData.limitAfter }}"></c-cal> <c-select maxHeight="160px" dataList="{{ orderData.endSelectList }}" columns="1" width="42px" columnWidth="42px" on-change="chooseTime($event, \'end\')" index="{{ orderData.endIndex }}" on-boardopen="openSelect(\'end\')"></c-select> </div> <span class="{{$style[\'choice-title\']}} {{ $style.part }}">参会人</span> <span class="{{$style[\'participants-number\']}}"></span> <v-sug s-ref="sugRef" class="{{$style.participants}} c-span6 c-span-last" mailList="{{ mailList }}" on-setPartner="setPartner($event)" showPlaceholder="{{showPlaceholder}}"></v-sug> <div class="{{$style.pass}}"> <span class="{{$style[\'choice-title\'] $style[\'pass-title\']}}">参会密码</span> <div class="{{$style.passwd}} c-span6 c-span-last"> <c-checkbox checked="{{boxChecked}}" name="passwd" value="开启密码" class="c-span2 c-span-last" on-change="openPass($event)"></c-checkbox> <div class="{{$style.passWrapper}}" s-if="openPassInput"> <div class="c-input {{$style.passinput}}"> <input type="text" class="{{$style[\'passwd-input\']}}" placeholder="请输入6位数字密码" on-input="processPassShow($event)" on-focus="processPassFocus" s-ref="passinput" maxLength="6" on-blur="limitPass"> <i s-if="passShow" class="c-icon {{$style[\'right-icon\']}}" on-click="switchPass(\'hide\')">&#xe66c;</i> <i s-else class="c-icon {{$style[\'right-icon\']}}" on-click="switchPass(\'show\')">&#xe66d;</i> </div> </div> </div> <v-warn s-if="warn.pass" text="{{ warn.passText }}" class="{{$style.passwarn}}"></v-warn> </div> <span class="{{$style[\'choice-title\']}}">会议详情</span> <div class="{{$style.inputdisc}}"> <c-input value="{= description =}" placeholder="请输入会议详情" type="textarea" widthSize="6" params="{{{maxLength: 100}}}" on-blur="checkDesc($event)" on-input="updateDesc($event)"></c-input> <v-warn s-if="warn.desc" text="{{ warn.descText }}"></v-warn> </div> <c-btn text="{{modifyMeet ? \'确定修改\' : \'预约会议\'}}" size="large" type="{{(canOpenMeet.title && canOpenMeet.pass && canOpenMeet.desc) ? \'primary\' : \'disable\'}}" class="{{(canOpenMeet.title && canOpenMeet.pass) ? $style[\'open-btn\'] : $style[\'forbid-btn\']}}" on-click="openMeet"></c-btn> </div> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(102)], "var-init"),
      o = cc11001100_hook("o", n(104), "var-init"),
      r = cc11001100_hook("r", n(29)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(29), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(103), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.emailWrapper_1hcAK {\n  position: relative;\n  display: inline-block;\n  line-height: 0;\n  width: 272px;\n  height: 72px;\n  font: 13px/23px Arial, sans-serif;\n  color: #333;\n  border: 1px solid #d7d9e0;\n  border-radius: 6px;\n  padding: 8px;\n  resize: none;\n  outline: 0;\n  box-sizing: border-box;\n  overflow-y: scroll;\n}\n.emailWrapper_1hcAK.nobottom_1eIK3 {\n  border-radius: 6px 6px 0 0;\n}\n.emailWrapper_1hcAK .placeholder_1hQea {\n  color: #9195a3;\n  position: absolute;\n  left: 10;\n  top: 2px;\n}\n.emailWrapper_1hcAK .input_1J5q- {\n  border: none;\n  outline: none;\n  width: 80%;\n  vertical-align: top;\n  border-radius: 4px;\n  padding: 3px 8px;\n  box-sizing: border-box;\n}\n.emailWrapper_1hcAK .input_1J5q-.inputStyle_1BLSC {\n  background: #EDF0FD;\n}\n.emailWrapper_1hcAK .selectSugOpt {\n  background: #EDF0FD;\n  border-radius: 4px;\n  width: fit-content;\n  padding: 0 6px;\n  box-sizing: border-box;\n  height: 24px;\n  line-height: 24px;\n  display: inline-block;\n  margin-right: 8px;\n}\n.emailWrapper_1hcAK .selectSugOpt span {\n  overflow: hidden;\n  display: inline-block;\n  margin-right: 2px;\n  color: #315EFB;\n}\n.emailWrapper_1hcAK .selectSugOpt span:hover {\n  color: #315EFB;\n}\n.emailWrapper_1hcAK .selectSugOpt i {\n  font-size: 8px;\n  transform: scale(0.8);\n  display: inline-block;\n  vertical-align: top;\n}\n.emailWrapper_1hcAK .selectSugOpt i:hover {\n  color: #315EFB;\n}\n.sug_2jUpc {\n  position: absolute;\n  background: #fff;\n  width: 254px;\n  border: 1px solid #D7D9E0;\n  border-radius: 0 0 4px 4px;\n  top: 72px;\n  padding: 0 8px;\n  max-height: 106px;\n  overflow: scroll;\n  z-index: 2;\n  border-top: none;\n}\n.sug_2jUpc li {\n  height: 24px;\n  line-height: 24px;\n  color: #626675;\n}\n.sug_2jUpc li:hover {\n  background: #F5F5F6;\n  color: #315EFB;\n  width: 254px;\n  margin-left: -8px;\n  padding: 0 8px;\n}\n.sug_2jUpc.sughide_2vLLo {\n  display: none;\n}\n.disc_1nYlf {\n  font-size: 12px;\n  color: #C4C7CE;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      emailWrapper: cc11001100_hook("emailWrapper", 'emailWrapper_1hcAK', "object-key-init"),
      nobottom: cc11001100_hook("nobottom", 'nobottom_1eIK3', "object-key-init"),
      placeholder: cc11001100_hook("placeholder", 'placeholder_1hQea', "object-key-init"),
      input: cc11001100_hook("input", 'input_1J5q-', "object-key-init"),
      inputStyle: cc11001100_hook("inputStyle", 'inputStyle_1BLSC', "object-key-init"),
      sug: cc11001100_hook("sug", 'sug_2jUpc', "object-key-init"),
      sughide: cc11001100_hook("sughide", 'sughide_2vLLo', "object-key-init"),
      disc: cc11001100_hook("disc", 'disc_1nYlf', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div> <div class="{{$style.emailWrapper}} {{ showsug ? $style.nobottom : \'\'}}" on-click="processSug" s-ref="emailWrapper"> <div s-ref="sugWrapper"></div> <span s-if="showPlaceholder" class="{{$style.placeholder}}">请输入参会人邮箱</span> <input type="text" class="{{$style.input}} {{ inputStatus ? $style.inputStyle : \'\' }}" on-focus="inputFocus($event)" on-input="startInput($event)" on-blur="emailInputBlur($event)" on-keyup="defineEmail($event)" s-ref="emailInput"/> </div> <ul class="{{$style.sug}} {{showsug ? \'\' : $style.sughide }}" s-ref="sugList"> <li s-for="k in emails" on-click="insertPartner(k)">{{ k }}</li> </ul> <span class="{{$style.disc}}">参会人邮箱将收到会议邀请</span> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(106)], "var-init"),
      o = cc11001100_hook("o", n(108), "var-init"),
      r = cc11001100_hook("r", n(30)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(30), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(107), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.content_3wd8k {\n  padding: 81px 0 24px;\n}\n.content_3wd8k .title_2aWm2 {\n  font-size: 30px;\n  color: #4e6ef2;\n  line-height: 30px;\n}\n.content_3wd8k .info_2XB4h {\n  margin-top: 12px;\n  margin-bottom: 59px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 22px;\n}\n.content_3wd8k .btn_2YDf0 {\n  display: block;\n  margin: 0 auto 16px;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      content: cc11001100_hook("content", 'content_3wd8k', "object-key-init"),
      title: cc11001100_hook("title", 'title_2aWm2', "object-key-init"),
      info: cc11001100_hook("info", 'info_2XB4h', "object-key-init"),
      btn: cc11001100_hook("btn", 'btn_2YDf0', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'init\']}} v-container"> <v-header closeType="hide" needBack="{{ false }}"></v-header> <div class="{{$style.content}}"> <div class="{{$style.title}}">百度视频会议</div> <div class="{{$style.info}} c-color-gray2">免费开放不限时\uFF0C高清稳定智能降噪<br/>无需安装客户端一秒入会</div> <c-btn text="快速会议" type="primary" size="large" on-click="quickMeet" class="{{ $style.btn }} {{ $style.btnblue }}"></c-btn> <c-btn text="预约会议" type="default" size="large" on-click="orderMeet" class="{{ $style.btn }}"></c-btn> <c-btn text="会议管理" type="default" size="large" class="{{ $style.btn }}" on-click="meetManage"></c-btn> <c-toast s-if="errorWarn" pos="{{ pastePos }}" on-hide="switchToast">操作太频繁\uFF0C请稍后再试</c-toast> </div> <v-foot s-if="showFeedBack" on-logSend="logSend($event)" text="用户反馈" type="feedback" tipText="{{showTips() ? \'为保证参会体验\uFF0C请使用Chrome或Firefox浏览器\' : \'\'}}"></v-foot> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(110)], "var-init"),
      o = cc11001100_hook("o", n(112), "var-init"),
      r = cc11001100_hook("r", n(32)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(32), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(111), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.manage-wrapper_279X9 .bar-content_2jCA8 {\n  padding: 0 24px;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef {\n  width: 100%;\n  height: 34px;\n  color: #626675;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef .future-bar_XjgGb {\n  float: left;\n  font-size: 14px;\n  line-height: 34px;\n  cursor: pointer;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef .history-bar_1NRva {\n  float: left;\n  font-size: 14px;\n  line-height: 34px;\n  margin-left: 24px;\n  cursor: pointer;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef .select-com-bar_20Z1N {\n  float: right;\n  height: 30px;\n  width: 96px;\n  margin-top: 2px;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef .select-bar_GgvC4 {\n  position: relative;\n  color: #222222;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef .select-bar_GgvC4:after {\n  content: "";\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  margin-left: -16px;\n  display: block;\n  width: 32px;\n  height: 2px;\n  background-color: #4E6EF2;\n  border-radius: 1px;\n}\n.manage-wrapper_279X9 .fixed-title_3PDjb {\n  position: absolute;\n  top: 88px;\n  left: 0;\n  right: 0;\n  height: 36px;\n  line-height: 40px;\n  font-size: 13px;\n  color: #333333;\n  z-index: 2;\n}\n.manage-wrapper_279X9 .fixed-title_3PDjb span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding-left: 24px;\n  text-align: left;\n  background: #FFFFFF;\n}\n.manage-wrapper_279X9 .fixed-title_3PDjb:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 1px;\n  height: 10px;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);\n}\n.manage-wrapper_279X9 .none-title_2b9H8 {\n  display: none;\n}\n.manage-wrapper_279X9 .area-content_OkIFG {\n  position: relative;\n  padding: 0 24px;\n  margin-right: 4px;\n  padding-right: 20px;\n  height: 492px;\n  overflow-y: scroll;\n  overflow: hidden;\n  overflow-y: overlay;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS {\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding-left: 24px;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd {\n  display: block;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .meet-time_2OeM2 {\n  margin-top: 21px;\n  text-align: left;\n  padding-bottom: 3px;\n  font-size: 13px;\n  color: #9195A3;\n  line-height: 13px;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .meet-time-spmargin_35fjT {\n  margin-top: 14px;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .load-more_1Zuz1 {\n  padding: 32px 0;\n  font-size: 13px;\n  color: #626675;\n  line-height: 12px;\n  text-align: center;\n  padding-right: 20px;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .load-more_1Zuz1 span {\n  cursor: pointer;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .load-more_1Zuz1 span:hover {\n  color: #315EFB;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .no-more_1YEvi {\n  padding: 32px 0;\n  font-size: 13px;\n  color: #9195A3;\n  line-height: 12px;\n  text-align: center;\n  padding-right: 20px;\n}\n.manage-wrapper_279X9 .default-img_p9137 {\n  position: relative;\n  padding: 0 24px;\n  margin-right: 4px;\n  padding-right: 20px;\n  height: 492px;\n}\n.manage-wrapper_279X9 .default-img_p9137 img {\n  margin: auto;\n  margin-top: 82px;\n  width: 200px;\n  height: 160px;\n}\n.manage-wrapper_279X9 .default-img_p9137 div {\n  text-align: center;\n  margin-top: 28px;\n  font-size: 14px;\n  color: #9195A3;\n  line-height: 14px;\n}\n.manage-wrapper_279X9 .hide_2Ef3I {\n  display: none;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      'manage-wrapper': cc11001100_hook('manage-wrapper', 'manage-wrapper_279X9', "object-key-init"),
      manageWrapper: cc11001100_hook("manageWrapper", 'manage-wrapper_279X9', "object-key-init"),
      'bar-content': cc11001100_hook('bar-content', 'bar-content_2jCA8', "object-key-init"),
      barContent: cc11001100_hook("barContent", 'bar-content_2jCA8', "object-key-init"),
      'filter-bar': cc11001100_hook('filter-bar', 'filter-bar_2U6ef', "object-key-init"),
      filterBar: cc11001100_hook("filterBar", 'filter-bar_2U6ef', "object-key-init"),
      'future-bar': cc11001100_hook('future-bar', 'future-bar_XjgGb', "object-key-init"),
      futureBar: cc11001100_hook("futureBar", 'future-bar_XjgGb', "object-key-init"),
      'history-bar': cc11001100_hook('history-bar', 'history-bar_1NRva', "object-key-init"),
      historyBar: cc11001100_hook("historyBar", 'history-bar_1NRva', "object-key-init"),
      'select-com-bar': cc11001100_hook('select-com-bar', 'select-com-bar_20Z1N', "object-key-init"),
      selectComBar: cc11001100_hook("selectComBar", 'select-com-bar_20Z1N', "object-key-init"),
      'select-bar': cc11001100_hook('select-bar', 'select-bar_GgvC4', "object-key-init"),
      selectBar: cc11001100_hook("selectBar", 'select-bar_GgvC4', "object-key-init"),
      'fixed-title': cc11001100_hook('fixed-title', 'fixed-title_3PDjb', "object-key-init"),
      fixedTitle: cc11001100_hook("fixedTitle", 'fixed-title_3PDjb', "object-key-init"),
      'none-title': cc11001100_hook('none-title', 'none-title_2b9H8', "object-key-init"),
      noneTitle: cc11001100_hook("noneTitle", 'none-title_2b9H8', "object-key-init"),
      'area-content': cc11001100_hook('area-content', 'area-content_OkIFG', "object-key-init"),
      areaContent: cc11001100_hook("areaContent", 'area-content_OkIFG', "object-key-init"),
      'display-area': cc11001100_hook('display-area', 'display-area_2-7gS', "object-key-init"),
      displayArea: cc11001100_hook("displayArea", 'display-area_2-7gS', "object-key-init"),
      'future-area': cc11001100_hook('future-area', 'future-area_Uo4Pd', "object-key-init"),
      futureArea: cc11001100_hook("futureArea", 'future-area_Uo4Pd', "object-key-init"),
      'meet-time': cc11001100_hook('meet-time', 'meet-time_2OeM2', "object-key-init"),
      meetTime: cc11001100_hook("meetTime", 'meet-time_2OeM2', "object-key-init"),
      'meet-time-spmargin': cc11001100_hook('meet-time-spmargin', 'meet-time-spmargin_35fjT', "object-key-init"),
      meetTimeSpmargin: cc11001100_hook("meetTimeSpmargin", 'meet-time-spmargin_35fjT', "object-key-init"),
      'load-more': cc11001100_hook('load-more', 'load-more_1Zuz1', "object-key-init"),
      loadMore: cc11001100_hook("loadMore", 'load-more_1Zuz1', "object-key-init"),
      'no-more': cc11001100_hook('no-more', 'no-more_1YEvi', "object-key-init"),
      noMore: cc11001100_hook("noMore", 'no-more_1YEvi', "object-key-init"),
      'default-img': cc11001100_hook('default-img', 'default-img_p9137', "object-key-init"),
      defaultImg: cc11001100_hook("defaultImg", 'default-img_p9137', "object-key-init"),
      hide: cc11001100_hook("hide", 'hide_2Ef3I', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'manage-wrapper\']}} v-container"> <v-header title="会议管理" closeType="exit"></v-header> <div class="{{$style[\'bar-content\']}}"> <div class="{{$style[\'filter-bar\']}}"> <div class="{{$style[\'future-bar\']}} {{meetStatus === 0 ? $style[\'select-bar\'] : \'\'}}" on-click="changeMeetStatus(0)">待开会议</div> <div class="{{$style[\'history-bar\']}} {{meetStatus === 5 ? $style[\'select-bar\'] : \'\'}}" on-click="changeMeetStatus(5)">历史会议</div> <div class="{{$style[\'select-com-bar\']}}"> <c-select data-list="{{myMeetList}}" columns="1" class="select" alignX="left" width="57px" style="text-align: left; z-index: 3;" columnWidth="57px" on-change="getMyMeet($event)"></c-select> </div> </div> </div> <div class="{{noMeet ? $style[\'hide\'] : \'\'}}"> <div class="{{$style[\'fixed-title\']}} {{fixedTitle ? \'\' : $style[\'none-title\']}}"> <span>{{fixedTitle}}</span> </div> <div s-ref="areaContent" class="{{$style[\'area-content\']}}"> <div class="{{$style[\'display-area\']}}"> <div class="{{$style[\'future-area\']}}"> <div s-for="val, index in meetList"> <div class="{{$style[\'meet-time\']}} {{index === 0 ? $style[\'meet-time-spmargin\'] : \'\'}}"> {{parseShowDate(val.titleDate, val.week)}} </div> <v-meet-item s-for="item in val.msg" meetStatus="{{meetStatus}}" item="{{item}}" bsToken="{{bsToken}}" on-updateMeet="updateMeet($event)" on-reOrderMeet="reOrderMeet($event)" on-shareEvent="shareEvent($event)" on-meetStart="meetStart($event)" on-modifyMeet="modifyMeet($event)"></v-meet-item> </div> <div class="{{loadStatus === 1 ? $style[\'load-more\'] : $style[\'no-more\']}}"> <span on-click="loadMoreData(loadStatus)">{{loadStatus === 1 ? \'点击加载\' : loadStatus === 2 ? \'加载中...\' : \'没有更多啦\'}}</span> </div> </div> </div> </div> </div> <div class="{{$style[\'default-img\']}} {{!noMeet ? $style[\'hide\'] : \'\'}}"> <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=291248239,3043432353&fm=179&app=35&f=PNG?w=400&h=320&s=48211D720B23752A5A4D5DDC030050B0"> <div>{{meetStatus === 0 ? \'暂无待开会议\' : \'暂无参与的会议\'}}</div> </div> <c-toast s-if="pasteShow" pos="{{ pastePos }}" on-hide="onHide">会邀已复制</c-toast> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(114)], "var-init"),
      o = cc11001100_hook("o", n(116), "var-init"),
      r = cc11001100_hook("r", n(33)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(33), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(115), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.item-wrapper_1LNDO {\n  margin-top: 20px;\n  width: 100%;\n  height: 35px;\n}\n.item-wrapper_1LNDO:after {\n  content: "";\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.item-wrapper_1LNDO .left-place_Hln8A {\n  position: relative;\n  float: left;\n  width: 81px;\n  font-size: 13px;\n  color: #626675;\n  line-height: 13px;\n}\n.item-wrapper_1LNDO .left-place_Hln8A:after {\n  content: "";\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.item-wrapper_1LNDO .left-place_Hln8A .start-time_KlFhH {\n  float: left;\n}\n.item-wrapper_1LNDO .left-place_Hln8A .end-time_pPhWh {\n  float: right;\n}\n.item-wrapper_1LNDO .left-place_Hln8A .special-time_2qjaK {\n  float: left;\n  color: #315EFB;\n}\n.item-wrapper_1LNDO .common-time_2DOu8:before {\n  content: "";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -2px;\n  margin-top: -1px;\n  display: block;\n  height: 1px;\n  width: 4px;\n  background-color: #626675;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci {\n  float: left;\n  width: 220px;\n  margin-left: 25px;\n  margin-right: 8px;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .fir-floor_1sdOQ {\n  max-width: 220px;\n  font-size: 14px;\n  color: #222222;\n  line-height: 14px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .tostart-meet_2rqwm {\n  cursor: pointer;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .tostart-meet_2rqwm:hover {\n  color: #315EFB;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .sec-floor_20g_X {\n  max-width: 220px;\n  margin-top: 6px;\n  font-size: 13px;\n  color: #9195A3;\n  line-height: 15px;\n  text-align: left;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .sec-floor_20g_X:after {\n  content: "";\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .sec-floor_20g_X span {\n  float: left;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .sec-floor_20g_X .join-member_3c0Tr {\n  max-width: 190px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .sec-floor_20g_X .join-num_2vdaN {\n  max-width: 30px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item-wrapper_1LNDO .right-place_10hFF {\n  position: relative;\n  float: left;\n  width: 14px;\n  height: 16px;\n  line-height: 16px;\n  color: #E4E4E5;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.item-wrapper_1LNDO .right-place_10hFF:hover {\n  color: #315EFB;\n}\n.item-wrapper_1LNDO .right-place_10hFF .pop-board_KRINH {\n  position: absolute;\n  top: 22px;\n  right: -10px;\n  width: 56px;\n  background: #FFFFFF;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  padding: 7px 14px;\n  z-index: 1;\n}\n.item-wrapper_1LNDO .right-place_10hFF .pop-board_KRINH .hide-tag_17g3F {\n  display: none;\n}\n.item-wrapper_1LNDO .right-place_10hFF .pop-board_KRINH div {\n  padding: 6px 0;\n  font-size: 13px;\n  color: #222222;\n  line-height: 13px;\n}\n.item-wrapper_1LNDO .right-place_10hFF .pop-board_KRINH div:hover {\n  color: #315EFB;\n}\n.item-wrapper_1LNDO .right-place_10hFF .none-pop_ZHE8S {\n  display: none;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      'item-wrapper': cc11001100_hook('item-wrapper', 'item-wrapper_1LNDO', "object-key-init"),
      itemWrapper: cc11001100_hook("itemWrapper", 'item-wrapper_1LNDO', "object-key-init"),
      'left-place': cc11001100_hook('left-place', 'left-place_Hln8A', "object-key-init"),
      leftPlace: cc11001100_hook("leftPlace", 'left-place_Hln8A', "object-key-init"),
      'start-time': cc11001100_hook('start-time', 'start-time_KlFhH', "object-key-init"),
      startTime: cc11001100_hook("startTime", 'start-time_KlFhH', "object-key-init"),
      'end-time': cc11001100_hook('end-time', 'end-time_pPhWh', "object-key-init"),
      endTime: cc11001100_hook("endTime", 'end-time_pPhWh', "object-key-init"),
      'special-time': cc11001100_hook('special-time', 'special-time_2qjaK', "object-key-init"),
      specialTime: cc11001100_hook("specialTime", 'special-time_2qjaK', "object-key-init"),
      'common-time': cc11001100_hook('common-time', 'common-time_2DOu8', "object-key-init"),
      commonTime: cc11001100_hook("commonTime", 'common-time_2DOu8', "object-key-init"),
      'mid-place': cc11001100_hook('mid-place', 'mid-place_Ymyci', "object-key-init"),
      midPlace: cc11001100_hook("midPlace", 'mid-place_Ymyci', "object-key-init"),
      'fir-floor': cc11001100_hook('fir-floor', 'fir-floor_1sdOQ', "object-key-init"),
      firFloor: cc11001100_hook("firFloor", 'fir-floor_1sdOQ', "object-key-init"),
      'tostart-meet': cc11001100_hook('tostart-meet', 'tostart-meet_2rqwm', "object-key-init"),
      tostartMeet: cc11001100_hook("tostartMeet", 'tostart-meet_2rqwm', "object-key-init"),
      'sec-floor': cc11001100_hook('sec-floor', 'sec-floor_20g_X', "object-key-init"),
      secFloor: cc11001100_hook("secFloor", 'sec-floor_20g_X', "object-key-init"),
      'join-member': cc11001100_hook('join-member', 'join-member_3c0Tr', "object-key-init"),
      joinMember: cc11001100_hook("joinMember", 'join-member_3c0Tr', "object-key-init"),
      'join-num': cc11001100_hook('join-num', 'join-num_2vdaN', "object-key-init"),
      joinNum: cc11001100_hook("joinNum", 'join-num_2vdaN', "object-key-init"),
      'right-place': cc11001100_hook('right-place', 'right-place_10hFF', "object-key-init"),
      rightPlace: cc11001100_hook("rightPlace", 'right-place_10hFF', "object-key-init"),
      'pop-board': cc11001100_hook('pop-board', 'pop-board_KRINH', "object-key-init"),
      popBoard: cc11001100_hook("popBoard", 'pop-board_KRINH', "object-key-init"),
      'hide-tag': cc11001100_hook('hide-tag', 'hide-tag_17g3F', "object-key-init"),
      hideTag: cc11001100_hook("hideTag", 'hide-tag_17g3F', "object-key-init"),
      'none-pop': cc11001100_hook('none-pop', 'none-pop_ZHE8S', "object-key-init"),
      nonePop: cc11001100_hook("nonePop", 'none-pop_ZHE8S', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'item-wrapper\']}}"> <div s-if="!subtractTime(item.startTime.utcTime)" class="{{$style[\'left-place\']}} {{!subtractTime(item.startTime.utcTime) ? $style[\'common-time\'] : \'\'}}"> <span class="{{$style[\'start-time\']}}">{{item.startTime.time}}</span> <span class="{{$style[\'end-time\']}}">{{item.endTime.time)}}</span> </div> <div s-else class="{{$style[\'left-place\']}}"> <span class="{{$style[\'special-time\']}}">{{subtractTime(item.startTime.utcTime)}}分钟后开始</span> </div> <div class="{{$style[\'mid-place\']}}" s-ref="meetItemQuick"> <div class="{{$style[\'fir-floor\']}} {{meetStatus === 0 ? $style[\'tostart-meet\'] : \'\'}}" on-click="startMeet(item)">{{item.name}}</div> <div class="{{$style[\'sec-floor\']}}"> <span class="{{$style[\'join-member\']}}">{{memberName}}</span> <span class="{{$style[\'join-num\']}}">{{memberNumber}}</span> </div> </div> <div class="{{$style[\'right-place\']}}" on-click="checkPopOpen"> <i class="c-icon">&#xe66e;</i> <div class="{{$style[\'pop-board\']}} {{showBoard ? \'\' : $style[\'none-pop\']}}" on-click="stopPop"> <div class="{{meetStatus !== 0 ? $style[\'hide-tag\'] : \'\'}}" on-click="startMeet(item)">开启会议</div> <div class="{{meetStatus !== 0 ? $style[\'hide-tag\'] : \'\'}}" on-click="share(item)">复制会邀</div> <div class="{{meetStatus !== 0 ? $style[\'hide-tag\'] : \'\'}}" on-click="modifyMeet(item)">修改会议</div> <div class="{{meetStatus !== 5 ? $style[\'hide-tag\'] : \'\'}}" on-click="reOrderMeet(item)">再次发起</div> <div on-click="deleteMeet()">删除会议</div> </div> </div> <c-popup s-if="showPopup" title="{{popupTitle}}" sub-title="{{popupSubTitle}}" zIndex="{{4}}" always="{{true}}" on-confirm="confirm" on-close="closeIt" on-cancel="closeIt" primaryBtnText="删除"></c-popup> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(118)], "var-init"),
      o = cc11001100_hook("o", n(120), "var-init"),
      r = cc11001100_hook("r", n(34)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(34), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(119), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.compat-wrapper_opFH_ {\n  position: absolute;\n  top: 58px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.compat-wrapper_opFH_ .pc-content_3Xemw {\n  position: absolute;\n  width: 390px;\n  top: 50%;\n  left: 50%;\n  margin-left: -195px;\n  margin-top: -66px;\n  height: 133px;\n}\n.compat-wrapper_opFH_ .pc-content_3Xemw .title_1Xixa {\n  height: 30px;\n  font-size: 30px;\n  line-height: 30px;\n  color: #FFFFFF;\n  text-align: center;\n}\n.compat-wrapper_opFH_ .pc-content_3Xemw .text_3-Vg2 {\n  margin-top: 16px;\n  opacity: 0.7;\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #FFFFFF;\n  text-align: center;\n  line-height: 15px;\n  height: 15px;\n}\n.compat-wrapper_opFH_ .pc-content_3Xemw .quick-btn_1vVD8 {\n  height: 36px;\n  line-height: 36px;\n  margin-top: 24px;\n  width: 180px;\n}\n.compat-wrapper_opFH_ .pc-content_3Xemw .quick-btn_1vVD8 .btn-text_3uU1Z {\n  display: block;\n  padding: 0 34px;\n  color: #fff;\n  text-decoration: none;\n}\n.compat-wrapper_opFH_ .wise-content_1u2r0 {\n  position: absolute;\n  width: 700px;\n  top: 50%;\n  left: 50%;\n  margin-left: -350px;\n  margin-top: -51px;\n  height: 102px;\n}\n.compat-wrapper_opFH_ .wise-content_1u2r0 .title_1Xixa {\n  height: 48px;\n  font-size: 48px;\n  line-height: 48px;\n  color: #FFFFFF;\n  text-align: center;\n}\n.compat-wrapper_opFH_ .wise-content_1u2r0 .text_3-Vg2 {\n  margin-top: 24px;\n  opacity: 0.7;\n  font-family: PingFangSC-Regular;\n  font-size: 30px;\n  color: #FFFFFF;\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      'compat-wrapper': cc11001100_hook('compat-wrapper', 'compat-wrapper_opFH_', "object-key-init"),
      compatWrapper: cc11001100_hook("compatWrapper", 'compat-wrapper_opFH_', "object-key-init"),
      'pc-content': cc11001100_hook('pc-content', 'pc-content_3Xemw', "object-key-init"),
      pcContent: cc11001100_hook("pcContent", 'pc-content_3Xemw', "object-key-init"),
      title: cc11001100_hook("title", 'title_1Xixa', "object-key-init"),
      text: cc11001100_hook("text", 'text_3-Vg2', "object-key-init"),
      'quick-btn': cc11001100_hook('quick-btn', 'quick-btn_1vVD8', "object-key-init"),
      quickBtn: cc11001100_hook("quickBtn", 'quick-btn_1vVD8', "object-key-init"),
      'btn-text': cc11001100_hook('btn-text', 'btn-text_3uU1Z', "object-key-init"),
      btnText: cc11001100_hook("btnText", 'btn-text_3uU1Z', "object-key-init"),
      'wise-content': cc11001100_hook('wise-content', 'wise-content_1u2r0', "object-key-init"),
      wiseContent: cc11001100_hook("wiseContent", 'wise-content_1u2r0', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'compat-wrapper\']}}"> <div s-if="browserPC" class="{{$style[\'pc-content\']}}"> <div class="{{$style[\'title\']}}">{{ text.title }}</div> <div class="{{$style[\'text\']}}">{{ text.subTitle }}</div> <c-btn s-if="flowType === \'unlogin\'" size="large" on-click="btnClick" class="{{$style[\'quick-btn\']}}" text="{{text.btn}}"></c-btn> <c-btn s-else type="primary" class="{{$style[\'quick-btn\']}}"> <a class="{{$style[\'btn-text\']}}" href="{{ text.downLoadUrl }}">{{text.btn}}</a> </c-btn> </div> <div s-else class="{{$style[\'wise-content\']}}"> <div class="{{$style[\'title\']}}">{{ text.title }}</div> <div class="{{$style[\'text\']}}">{{ text.subTitle }}</div> </div> </div> ', "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(1), "var-init"),
      i = cc11001100_hook("i", [n(122)], "var-init"),
      o = cc11001100_hook("o", n(124), "var-init"),
      r = cc11001100_hook("r", n(35)['default'], "var-init");
    t.exports = cc11001100_hook("t.exports", n(35), "assign"), t.exports['default'] = cc11001100_hook("t.exports['default']", a(r, o, i), "assign");
  }, function (t, e, n) {
    var a = cc11001100_hook("a", n(2), "var-init"),
      i = cc11001100_hook("i", n(123), "var-init");
    'string' == typeof (i = cc11001100_hook("i", i.__esModule ? i['default'] : i, "assign")) && (i = cc11001100_hook("i", [[t.i, i, '']], "assign"));
    var o = cc11001100_hook("o", {
      insert: cc11001100_hook("insert", 'head', "object-key-init"),
      singleton: cc11001100_hook("singleton", !1, "object-key-init")
    }, "var-init");
    a(i, o);
    t.exports = cc11001100_hook("t.exports", i.locals || {}, "assign");
  }, function (t, e, n) {
    (e = cc11001100_hook("e", n(3)(!1), "assign")).push([t.i, '.compat-wrapper_zyalQ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.compat-wrapper_zyalQ .content_75Du5 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -151px;\n  margin-top: -97px;\n  height: 194px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .error-img_2L8ex {\n  width: 105px;\n  height: 73px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .fir-text_2ulEt {\n  margin-top: 12px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .sec-text_53k9t {\n  margin-top: 8px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .text_118-m {\n  opacity: 0.7;\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #FFFFFF;\n  text-align: center;\n  line-height: 15px;\n  height: 15px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .quick-btn_36WKs {\n  width: 124px;\n  height: 36px;\n  line-height: 36px;\n  margin-top: 30px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .quick-btn_36WKs .btn-text_3zKyK {\n  display: block;\n  padding: 0 34px;\n  color: #fff;\n  text-decoration: none;\n}\n', '']), e.locals = cc11001100_hook("e.locals", {
      'compat-wrapper': cc11001100_hook('compat-wrapper', 'compat-wrapper_zyalQ', "object-key-init"),
      compatWrapper: cc11001100_hook("compatWrapper", 'compat-wrapper_zyalQ', "object-key-init"),
      content: cc11001100_hook("content", 'content_75Du5', "object-key-init"),
      'error-img': cc11001100_hook('error-img', 'error-img_2L8ex', "object-key-init"),
      errorImg: cc11001100_hook("errorImg", 'error-img_2L8ex', "object-key-init"),
      'fir-text': cc11001100_hook('fir-text', 'fir-text_2ulEt', "object-key-init"),
      firText: cc11001100_hook("firText", 'fir-text_2ulEt', "object-key-init"),
      'sec-text': cc11001100_hook('sec-text', 'sec-text_53k9t', "object-key-init"),
      secText: cc11001100_hook("secText", 'sec-text_53k9t', "object-key-init"),
      text: cc11001100_hook("text", 'text_118-m', "object-key-init"),
      'quick-btn': cc11001100_hook('quick-btn', 'quick-btn_36WKs', "object-key-init"),
      quickBtn: cc11001100_hook("quickBtn", 'quick-btn_36WKs', "object-key-init"),
      'btn-text': cc11001100_hook('btn-text', 'btn-text_3zKyK', "object-key-init"),
      btnText: cc11001100_hook("btnText", 'btn-text_3zKyK', "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'compat-wrapper\']}}"> <div class="{{$style[\'content\']}}"> <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3718006945,3753930967&fm=179&app=35&f=PNG?w=210&h=146&s=4B643A62158BAFB53C95A49A0300A081" class="{{$style[\'error-img\']}}"> <div class="{{$style[\'fir-text\']}} {{$style[\'text\']}}">该页面未找到</div> <div class="{{$style[\'sec-text\']}} {{$style[\'text\']}}">这可能是因为页面不存在\uFF0C请您检查链接</div> <c-btn type="primary" class="{{$style[\'quick-btn\']}}"> <a class="{{$style[\'btn-text\']}}" href="//www.baidu.com">返回首页</a> </c-btn> </div> </div> ', "assign");
  }]);
});
define('@baidu/video-meeting', ['require', 'amd_modules/@baidu/video-meeting/dist/index'], function (require, mod) {
  return mod;
});