"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) {
  cc11001100_hook("o", o, "function-parameter");
  cc11001100_hook("allowArrayLike", allowArrayLike, "function-parameter");
  var it = cc11001100_hook("it", typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"], "var-init");
  if (!it) {
    if (Array.isArray(o) || (it = cc11001100_hook("it", _unsupportedIterableToArray(o), "assign")) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = cc11001100_hook("o", it, "assign");
      var i = cc11001100_hook("i", 0, "var-init");
      var F = function F() {};
      return {
        s: cc11001100_hook("s", F, "object-key-init"),
        n: function n() {
          if (i >= o.length) return {
            done: cc11001100_hook("done", true, "object-key-init")
          };
          return {
            done: cc11001100_hook("done", false, "object-key-init"),
            value: cc11001100_hook("value", o[i++], "object-key-init")
          };
        },
        e: function e(_e8) {
          throw _e8;
        },
        f: cc11001100_hook("f", F, "object-key-init")
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = cc11001100_hook("normalCompletion", true, "var-init"),
    didErr = cc11001100_hook("didErr", false, "var-init"),
    err;
  return {
    s: function s() {
      it = cc11001100_hook("it", it.call(o), "assign");
    },
    n: function n() {
      var step = cc11001100_hook("step", it.next(), "var-init");
      normalCompletion = cc11001100_hook("normalCompletion", step.done, "assign");
      return step;
    },
    e: function e(_e9) {
      didErr = cc11001100_hook("didErr", true, "assign");
      err = cc11001100_hook("err", _e9, "assign");
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _wrapNativeSuper(Class) {
  cc11001100_hook("Class", Class, "function-parameter");
  var _cache = cc11001100_hook("_cache", typeof Map === "function" ? new Map() : undefined, "var-init");
  _wrapNativeSuper = cc11001100_hook("_wrapNativeSuper", function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = cc11001100_hook("Wrapper.prototype", Object.create(Class.prototype, {
      constructor: {
        value: cc11001100_hook("value", Wrapper, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", false, "object-key-init"),
        writable: cc11001100_hook("writable", true, "object-key-init"),
        configurable: cc11001100_hook("configurable", true, "object-key-init")
      }
    }), "assign");
    return _setPrototypeOf(Wrapper, Class);
  }, "assign");
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  cc11001100_hook("Parent", Parent, "function-parameter");
  cc11001100_hook("args", args, "function-parameter");
  cc11001100_hook("Class", Class, "function-parameter");
  if (_isNativeReflectConstruct()) {
    _construct = cc11001100_hook("_construct", Reflect.construct.bind(), "assign");
  } else {
    _construct = cc11001100_hook("_construct", function _construct(Parent, args, Class) {
      var a = cc11001100_hook("a", [null], "var-init");
      a.push.apply(a, args);
      var Constructor = cc11001100_hook("Constructor", Function.bind.apply(Parent, a), "var-init");
      var instance = cc11001100_hook("instance", new Constructor(), "var-init");
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    }, "assign");
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  cc11001100_hook("fn", fn, "function-parameter");
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _slicedToArray(arr, i) {
  cc11001100_hook("arr", arr, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
  cc11001100_hook("arr", arr, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var _i = cc11001100_hook("_i", null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"], "var-init");
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = cc11001100_hook("_arr", [], "var-init"),
      _n = cc11001100_hook("_n", !0, "var-init"),
      _d = cc11001100_hook("_d", !1, "var-init");
    try {
      if (_x = cc11001100_hook("_x", (_i = cc11001100_hook("_i", _i.call(arr), "assign")).next, "assign"), 0 === i) {
        if (Object(_i) !== _i) return;
        _n = cc11001100_hook("_n", !1, "assign");
      } else for (; !(_n = cc11001100_hook("_n", (_s = cc11001100_hook("_s", _x.call(_i), "assign")).done, "assign")) && (_arr.push(_s.value), _arr.length !== i); _n = cc11001100_hook("_n", !0, "assign"));
    } catch (err) {
      _d = cc11001100_hook("_d", !0, "assign"), _e = cc11001100_hook("_e", err, "assign");
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = cc11001100_hook("_r", _i["return"](), "assign"), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  cc11001100_hook("arr", arr, "function-parameter");
  if (Array.isArray(arr)) return arr;
}
function _inherits(subClass, superClass) {
  cc11001100_hook("subClass", subClass, "function-parameter");
  cc11001100_hook("superClass", superClass, "function-parameter");
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = cc11001100_hook("subClass.prototype", Object.create(superClass && superClass.prototype, {
    constructor: {
      value: cc11001100_hook("value", subClass, "object-key-init"),
      writable: cc11001100_hook("writable", true, "object-key-init"),
      configurable: cc11001100_hook("configurable", true, "object-key-init")
    }
  }), "assign");
  Object.defineProperty(subClass, "prototype", {
    writable: cc11001100_hook("writable", false, "object-key-init")
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  cc11001100_hook("o", o, "function-parameter");
  cc11001100_hook("p", p, "function-parameter");
  _setPrototypeOf = cc11001100_hook("_setPrototypeOf", Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = cc11001100_hook("o.__proto__", p, "assign");
    return o;
  }, "assign");
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  cc11001100_hook("Derived", Derived, "function-parameter");
  var hasNativeReflectConstruct = cc11001100_hook("hasNativeReflectConstruct", _isNativeReflectConstruct(), "var-init");
  return function _createSuperInternal() {
    var Super = cc11001100_hook("Super", _getPrototypeOf(Derived), "var-init"),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = cc11001100_hook("NewTarget", _getPrototypeOf(this).constructor, "var-init");
      result = cc11001100_hook("result", Reflect.construct(Super, arguments, NewTarget), "assign");
    } else {
      result = cc11001100_hook("result", Super.apply(this, arguments), "assign");
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  cc11001100_hook("self", self, "function-parameter");
  cc11001100_hook("call", call, "function-parameter");
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  cc11001100_hook("self", self, "function-parameter");
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  cc11001100_hook("o", o, "function-parameter");
  _getPrototypeOf = cc11001100_hook("_getPrototypeOf", Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, "assign");
  return _getPrototypeOf(o);
}
function _toConsumableArray(arr) {
  cc11001100_hook("arr", arr, "function-parameter");
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  cc11001100_hook("o", o, "function-parameter");
  cc11001100_hook("minLen", minLen, "function-parameter");
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = cc11001100_hook("n", Object.prototype.toString.call(o).slice(8, -1), "var-init");
  if (n === "Object" && o.constructor) n = cc11001100_hook("n", o.constructor.name, "assign");
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  cc11001100_hook("iter", iter, "function-parameter");
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  cc11001100_hook("arr", arr, "function-parameter");
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  cc11001100_hook("arr", arr, "function-parameter");
  cc11001100_hook("len", len, "function-parameter");
  if (len == null || len > arr.length) len = cc11001100_hook("len", arr.length, "assign");
  for (var i = cc11001100_hook("i", 0, "var-init"), arr2 = cc11001100_hook("arr2", new Array(len), "var-init"); i < len; i++) arr2[i] = cc11001100_hook("arr2[i]", arr[i], "assign");
  return arr2;
}
function _classCallCheck(instance, Constructor) {
  cc11001100_hook("instance", instance, "function-parameter");
  cc11001100_hook("Constructor", Constructor, "function-parameter");
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  cc11001100_hook("target", target, "function-parameter");
  cc11001100_hook("props", props, "function-parameter");
  for (var i = cc11001100_hook("i", 0, "var-init"); i < props.length; i++) {
    var descriptor = cc11001100_hook("descriptor", props[i], "var-init");
    descriptor.enumerable = cc11001100_hook("descriptor.enumerable", descriptor.enumerable || false, "assign");
    descriptor.configurable = cc11001100_hook("descriptor.configurable", true, "assign");
    if ("value" in descriptor) descriptor.writable = cc11001100_hook("descriptor.writable", true, "assign");
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  cc11001100_hook("Constructor", Constructor, "function-parameter");
  cc11001100_hook("protoProps", protoProps, "function-parameter");
  cc11001100_hook("staticProps", staticProps, "function-parameter");
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: cc11001100_hook("writable", false, "object-key-init")
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  cc11001100_hook("arg", arg, "function-parameter");
  var key = cc11001100_hook("key", _toPrimitive(arg, "string"), "var-init");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  cc11001100_hook("input", input, "function-parameter");
  cc11001100_hook("hint", hint, "function-parameter");
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = cc11001100_hook("prim", input[Symbol.toPrimitive], "var-init");
  if (prim !== undefined) {
    var res = cc11001100_hook("res", prim.call(input, hint || "default"), "var-init");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  cc11001100_hook("obj", obj, "function-parameter");
  return _typeof = cc11001100_hook("_typeof", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, "assign"), _typeof(obj);
}
/*!
  Highlight.js v11.7.0 (git: 82688fad18)
  (c) 2006-2022 undefined and other contributors
  License: BSD-3-Clause
 */
var hljs = cc11001100_hook("hljs", function () {
  "use strict";

  var e = cc11001100_hook("e", {
    exports: {}
  }, "var-init");
  function t(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e instanceof Map ? e.clear = cc11001100_hook("e.clear", e["delete"] = cc11001100_hook("e[\"delete\"]", e.set = cc11001100_hook("e.set", function () {
      throw Error("map is read-only");
    }, "assign"), "assign"), "assign") : e instanceof Set && (e.add = cc11001100_hook("e.add", e.clear = cc11001100_hook("e.clear", e["delete"] = cc11001100_hook("e[\"delete\"]", function () {
      throw Error("set is read-only");
    }, "assign"), "assign"), "assign")), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function (n) {
      var i = cc11001100_hook("i", e[n], "var-init");
      "object" != _typeof(i) || Object.isFrozen(i) || t(i);
    }), e;
  }
  e.exports = cc11001100_hook("e.exports", t, "assign"), e.exports["default"] = cc11001100_hook("e.exports[\"default\"]", t, "assign");
  var n = cc11001100_hook("n", /*#__PURE__*/function () {
    function n(e) {
      cc11001100_hook("e", e, "function-parameter");
      _classCallCheck(this, n);
      void 0 === e.data && (e.data = cc11001100_hook("e.data", {}, "assign")), this.data = cc11001100_hook("this.data", e.data, "assign"), this.isMatchIgnored = cc11001100_hook("this.isMatchIgnored", !1, "assign");
    }
    _createClass(n, [{
      key: cc11001100_hook("key", "ignoreMatch", "object-key-init"),
      value: function ignoreMatch() {
        this.isMatchIgnored = cc11001100_hook("this.isMatchIgnored", !0, "assign");
      }
    }]);
    return n;
  }(), "var-init");
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(e) {
    cc11001100_hook("e", e, "function-parameter");
    var n = cc11001100_hook("n", Object.create(null), "var-init");
    for (var _t in e) n[_t] = cc11001100_hook("n[_t]", e[_t], "assign");
    for (var _len = cc11001100_hook("_len", arguments.length, "var-init"), t = cc11001100_hook("t", new Array(_len > 1 ? _len - 1 : 0), "var-init"), _key = cc11001100_hook("_key", 1, "var-init"); _key < _len; _key++) {
      t[_key - 1] = cc11001100_hook("t[_key - 1]", arguments[_key], "assign");
    }
    return t.forEach(function (e) {
      for (var _t2 in e) n[_t2] = cc11001100_hook("n[_t2]", e[_t2], "assign");
    }), n;
  }
  var s = function s(e) {
    return !!e.scope || e.sublanguage && e.language;
  };
  var o = cc11001100_hook("o", /*#__PURE__*/function () {
    function o(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      _classCallCheck(this, o);
      this.buffer = cc11001100_hook("this.buffer", "", "assign"), this.classPrefix = cc11001100_hook("this.classPrefix", t.classPrefix, "assign"), e.walk(this);
    }
    _createClass(o, [{
      key: cc11001100_hook("key", "addText", "object-key-init"),
      value: function addText(e) {
        this.buffer += cc11001100_hook("this.buffer", i(e), "assign");
      }
    }, {
      key: cc11001100_hook("key", "openNode", "object-key-init"),
      value: function openNode(e) {
        if (!s(e)) return;
        var t = cc11001100_hook("t", "", "var-init");
        t = cc11001100_hook("t", e.sublanguage ? "language-" + e.language : function (e, _ref) {
          var t = cc11001100_hook("t", _ref.prefix, "var-init");
          if (e.includes(".")) {
            var _n = cc11001100_hook("_n", e.split("."), "var-init");
            return ["".concat(t).concat(_n.shift())].concat(_toConsumableArray(_n.map(function (e, t) {
              return "".concat(e).concat("_".repeat(t + 1));
            }))).join(" ");
          }
          return "".concat(t).concat(e);
        }(e.scope, {
          prefix: cc11001100_hook("prefix", this.classPrefix, "object-key-init")
        }), "assign"), this.span(t);
      }
    }, {
      key: cc11001100_hook("key", "closeNode", "object-key-init"),
      value: function closeNode(e) {
        s(e) && (this.buffer += cc11001100_hook("this.buffer", "</span>", "assign"));
      }
    }, {
      key: cc11001100_hook("key", "value", "object-key-init"),
      value: function value() {
        return this.buffer;
      }
    }, {
      key: cc11001100_hook("key", "span", "object-key-init"),
      value: function span(e) {
        this.buffer += cc11001100_hook("this.buffer", '<span class="'.concat(e, '">'), "assign");
      }
    }]);
    return o;
  }(), "var-init");
  var a = function a() {
    var e = cc11001100_hook("e", arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, "var-init");
    var t = cc11001100_hook("t", {
      children: cc11001100_hook("children", [], "object-key-init")
    }, "var-init");
    return Object.assign(t, e), t;
  };
  var c = cc11001100_hook("c", /*#__PURE__*/function () {
    function c() {
      _classCallCheck(this, c);
      this.rootNode = cc11001100_hook("this.rootNode", a(), "assign"), this.stack = cc11001100_hook("this.stack", [this.rootNode], "assign");
    }
    _createClass(c, [{
      key: cc11001100_hook("key", "top", "object-key-init"),
      get: function get() {
        return this.stack[this.stack.length - 1];
      }
    }, {
      key: cc11001100_hook("key", "root", "object-key-init"),
      get: function get() {
        return this.rootNode;
      }
    }, {
      key: cc11001100_hook("key", "add", "object-key-init"),
      value: function add(e) {
        this.top.children.push(e);
      }
    }, {
      key: cc11001100_hook("key", "openNode", "object-key-init"),
      value: function openNode(e) {
        var t = cc11001100_hook("t", a({
          scope: cc11001100_hook("scope", e, "object-key-init")
        }), "var-init");
        this.add(t), this.stack.push(t);
      }
    }, {
      key: cc11001100_hook("key", "closeNode", "object-key-init"),
      value: function closeNode() {
        if (this.stack.length > 1) return this.stack.pop();
      }
    }, {
      key: cc11001100_hook("key", "closeAllNodes", "object-key-init"),
      value: function closeAllNodes() {
        for (; this.closeNode(););
      }
    }, {
      key: cc11001100_hook("key", "toJSON", "object-key-init"),
      value: function toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }
    }, {
      key: cc11001100_hook("key", "walk", "object-key-init"),
      value: function walk(e) {
        return this.constructor._walk(e, this.rootNode);
      }
    }], [{
      key: cc11001100_hook("key", "_walk", "object-key-init"),
      value: function _walk(e, t) {
        var _this = cc11001100_hook("_this", this, "var-init");
        return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(function (t) {
          return _this._walk(e, t);
        }), e.closeNode(t)), e;
      }
    }, {
      key: cc11001100_hook("key", "_collapse", "object-key-init"),
      value: function _collapse(e) {
        "string" != typeof e && e.children && (e.children.every(function (e) {
          return "string" == typeof e;
        }) ? e.children = cc11001100_hook("e.children", [e.children.join("")], "assign") : e.children.forEach(function (e) {
          c._collapse(e);
        }));
      }
    }]);
    return c;
  }(), "var-init");
  var l = cc11001100_hook("l", /*#__PURE__*/function (_c) {
    _inherits(l, _c);
    var _super = cc11001100_hook("_super", _createSuper(l), "var-init");
    function l(e) {
      cc11001100_hook("e", e, "function-parameter");
      var _this2;
      _classCallCheck(this, l);
      _this2 = cc11001100_hook("_this2", _super.call(this), "assign"), _this2.options = cc11001100_hook("_this2.options", e, "assign");
      return _this2;
    }
    _createClass(l, [{
      key: cc11001100_hook("key", "addKeyword", "object-key-init"),
      value: function addKeyword(e, t) {
        "" !== e && (this.openNode(t), this.addText(e), this.closeNode());
      }
    }, {
      key: cc11001100_hook("key", "addText", "object-key-init"),
      value: function addText(e) {
        "" !== e && this.add(e);
      }
    }, {
      key: cc11001100_hook("key", "addSublanguage", "object-key-init"),
      value: function addSublanguage(e, t) {
        var n = cc11001100_hook("n", e.root, "var-init");
        n.sublanguage = cc11001100_hook("n.sublanguage", !0, "assign"), n.language = cc11001100_hook("n.language", t, "assign"), this.add(n);
      }
    }, {
      key: cc11001100_hook("key", "toHTML", "object-key-init"),
      value: function toHTML() {
        return new o(this, this.options).value();
      }
    }, {
      key: cc11001100_hook("key", "finalize", "object-key-init"),
      value: function finalize() {
        return !0;
      }
    }]);
    return l;
  }(c), "var-init");
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e ? "string" == typeof e ? e : e.source : null;
  }
  function d(e) {
    cc11001100_hook("e", e, "function-parameter");
    return p("(?=", e, ")");
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    return p("(?:", e, ")*");
  }
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    return p("(?:", e, ")?");
  }
  function p() {
    for (var _len2 = cc11001100_hook("_len2", arguments.length, "var-init"), e = cc11001100_hook("e", new Array(_len2), "var-init"), _key2 = cc11001100_hook("_key2", 0, "var-init"); _key2 < _len2; _key2++) {
      e[_key2] = cc11001100_hook("e[_key2]", arguments[_key2], "assign");
    }
    return e.map(function (e) {
      return g(e);
    }).join("");
  }
  function f() {
    for (var _len3 = cc11001100_hook("_len3", arguments.length, "var-init"), e = cc11001100_hook("e", new Array(_len3), "var-init"), _key3 = cc11001100_hook("_key3", 0, "var-init"); _key3 < _len3; _key3++) {
      e[_key3] = cc11001100_hook("e[_key3]", arguments[_key3], "assign");
    }
    var t = cc11001100_hook("t", function (e) {
      var t = cc11001100_hook("t", e[e.length - 1], "var-init");
      return "object" == _typeof(t) && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
    }(e), "var-init");
    return "(" + (t.capture ? "" : "?:") + e.map(function (e) {
      return g(e);
    }).join("|") + ")";
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    return RegExp(e.toString() + "|").exec("").length - 1;
  }
  var m = cc11001100_hook("m", /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, "var-init");
  function E(e, _ref2) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("_ref2", _ref2, "function-parameter");
    var t = cc11001100_hook("t", _ref2.joinWith, "var-init");
    var n = cc11001100_hook("n", 0, "var-init");
    return e.map(function (e) {
      n += cc11001100_hook("n", 1, "assign");
      var t = cc11001100_hook("t", n, "var-init");
      var i = cc11001100_hook("i", g(e), "var-init"),
        r = cc11001100_hook("r", "", "var-init");
      for (; i.length > 0;) {
        var _e = cc11001100_hook("_e", m.exec(i), "var-init");
        if (!_e) {
          r += cc11001100_hook("r", i, "assign");
          break;
        }
        r += cc11001100_hook("r", i.substring(0, _e.index), "assign"), i = cc11001100_hook("i", i.substring(_e.index + _e[0].length), "assign"), "\\" === _e[0][0] && _e[1] ? r += cc11001100_hook("r", "\\" + (Number(_e[1]) + t), "assign") : (r += cc11001100_hook("r", _e[0], "assign"), "(" === _e[0] && n++);
      }
      return r;
    }).map(function (e) {
      return "(".concat(e, ")");
    }).join(t);
  }
  var x = cc11001100_hook("x", "[a-zA-Z]\\w*", "var-init"),
    w = cc11001100_hook("w", "[a-zA-Z_]\\w*", "var-init"),
    y = cc11001100_hook("y", "\\b\\d+(\\.\\d+)?", "var-init"),
    _ = cc11001100_hook("_", "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", "var-init"),
    O = cc11001100_hook("O", "\\b(0b[01]+)", "var-init"),
    v = cc11001100_hook("v", {
      begin: cc11001100_hook("begin", "\\\\[\\s\\S]", "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    }, "var-init"),
    N = cc11001100_hook("N", {
      scope: cc11001100_hook("scope", "string", "object-key-init"),
      begin: cc11001100_hook("begin", "'", "object-key-init"),
      end: cc11001100_hook("end", "'", "object-key-init"),
      illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
      contains: cc11001100_hook("contains", [v], "object-key-init")
    }, "var-init"),
    k = cc11001100_hook("k", {
      scope: cc11001100_hook("scope", "string", "object-key-init"),
      begin: cc11001100_hook("begin", '"', "object-key-init"),
      end: cc11001100_hook("end", '"', "object-key-init"),
      illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
      contains: cc11001100_hook("contains", [v], "object-key-init")
    }, "var-init"),
    M = function M(e, t) {
      var n = cc11001100_hook("n", arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, "var-init");
      var i = cc11001100_hook("i", r({
        scope: cc11001100_hook("scope", "comment", "object-key-init"),
        begin: cc11001100_hook("begin", e, "object-key-init"),
        end: cc11001100_hook("end", t, "object-key-init"),
        contains: cc11001100_hook("contains", [], "object-key-init")
      }, n), "var-init");
      i.contains.push({
        scope: cc11001100_hook("scope", "doctag", "object-key-init"),
        begin: cc11001100_hook("begin", "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)", "object-key-init"),
        end: cc11001100_hook("end", /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/, "object-key-init"),
        excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      });
      var s = cc11001100_hook("s", f("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/), "var-init");
      return i.contains.push({
        begin: cc11001100_hook("begin", p(/[ ]+/, "(", s, /[.]?[:]?([.][ ]|[ ])/, "){3}"), "object-key-init")
      }), i;
    },
    S = cc11001100_hook("S", M("//", "$"), "var-init"),
    R = cc11001100_hook("R", M("/\\*", "\\*/"), "var-init"),
    j = cc11001100_hook("j", M("#", "$"), "var-init");
  var A = cc11001100_hook("A", Object.freeze({
    __proto__: cc11001100_hook("__proto__", null, "object-key-init"),
    MATCH_NOTHING_RE: cc11001100_hook("MATCH_NOTHING_RE", /\b\B/, "object-key-init"),
    IDENT_RE: cc11001100_hook("IDENT_RE", x, "object-key-init"),
    UNDERSCORE_IDENT_RE: cc11001100_hook("UNDERSCORE_IDENT_RE", w, "object-key-init"),
    NUMBER_RE: cc11001100_hook("NUMBER_RE", y, "object-key-init"),
    C_NUMBER_RE: cc11001100_hook("C_NUMBER_RE", _, "object-key-init"),
    BINARY_NUMBER_RE: cc11001100_hook("BINARY_NUMBER_RE", O, "object-key-init"),
    RE_STARTERS_RE: cc11001100_hook("RE_STARTERS_RE", "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", "object-key-init"),
    SHEBANG: function SHEBANG() {
      var e = cc11001100_hook("e", arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, "var-init");
      var t = cc11001100_hook("t", /^#![ ]*\//, "var-init");
      return e.binary && (e.begin = cc11001100_hook("e.begin", p(t, /.*\b/, e.binary, /\b.*/), "assign")), r({
        scope: cc11001100_hook("scope", "meta", "object-key-init"),
        begin: cc11001100_hook("begin", t, "object-key-init"),
        end: cc11001100_hook("end", /$/, "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        "on:begin": function onBegin(e, t) {
          0 !== e.index && t.ignoreMatch();
        }
      }, e);
    },
    BACKSLASH_ESCAPE: cc11001100_hook("BACKSLASH_ESCAPE", v, "object-key-init"),
    APOS_STRING_MODE: cc11001100_hook("APOS_STRING_MODE", N, "object-key-init"),
    QUOTE_STRING_MODE: cc11001100_hook("QUOTE_STRING_MODE", k, "object-key-init"),
    PHRASAL_WORDS_MODE: {
      begin: cc11001100_hook("begin", /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/, "object-key-init")
    },
    COMMENT: cc11001100_hook("COMMENT", M, "object-key-init"),
    C_LINE_COMMENT_MODE: cc11001100_hook("C_LINE_COMMENT_MODE", S, "object-key-init"),
    C_BLOCK_COMMENT_MODE: cc11001100_hook("C_BLOCK_COMMENT_MODE", R, "object-key-init"),
    HASH_COMMENT_MODE: cc11001100_hook("HASH_COMMENT_MODE", j, "object-key-init"),
    NUMBER_MODE: {
      scope: cc11001100_hook("scope", "number", "object-key-init"),
      begin: cc11001100_hook("begin", y, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    C_NUMBER_MODE: {
      scope: cc11001100_hook("scope", "number", "object-key-init"),
      begin: cc11001100_hook("begin", _, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    BINARY_NUMBER_MODE: {
      scope: cc11001100_hook("scope", "number", "object-key-init"),
      begin: cc11001100_hook("begin", O, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    REGEXP_MODE: {
      begin: cc11001100_hook("begin", /(?=\/[^/\n]*\/)/, "object-key-init"),
      contains: cc11001100_hook("contains", [{
        scope: cc11001100_hook("scope", "regexp", "object-key-init"),
        begin: cc11001100_hook("begin", /\//, "object-key-init"),
        end: cc11001100_hook("end", /\/[gimuy]*/, "object-key-init"),
        illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
        contains: cc11001100_hook("contains", [v, {
          begin: cc11001100_hook("begin", /\[/, "object-key-init"),
          end: cc11001100_hook("end", /\]/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [v], "object-key-init")
        }], "object-key-init")
      }], "object-key-init")
    },
    TITLE_MODE: {
      scope: cc11001100_hook("scope", "title", "object-key-init"),
      begin: cc11001100_hook("begin", x, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    UNDERSCORE_TITLE_MODE: {
      scope: cc11001100_hook("scope", "title", "object-key-init"),
      begin: cc11001100_hook("begin", w, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    METHOD_GUARD: {
      begin: cc11001100_hook("begin", "\\.\\s*[a-zA-Z_]\\w*", "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    END_SAME_AS_BEGIN: function END_SAME_AS_BEGIN(e) {
      return Object.assign(e, {
        "on:begin": function onBegin(e, t) {
          t.data._beginMatch = cc11001100_hook("t.data._beginMatch", e[1], "assign");
        },
        "on:end": function onEnd(e, t) {
          t.data._beginMatch !== e[1] && t.ignoreMatch();
        }
      });
    }
  }), "var-init");
  function I(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    "." === e.input[e.index - 1] && t.ignoreMatch();
  }
  function T(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    void 0 !== e.className && (e.scope = cc11001100_hook("e.scope", e.className, "assign"), delete e.className);
  }
  function L(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    t && e.beginKeywords && (e.begin = cc11001100_hook("e.begin", "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", "assign"), e.__beforeBegin = cc11001100_hook("e.__beforeBegin", I, "assign"), e.keywords = cc11001100_hook("e.keywords", e.keywords || e.beginKeywords, "assign"), delete e.beginKeywords, void 0 === e.relevance && (e.relevance = cc11001100_hook("e.relevance", 0, "assign")));
  }
  function B(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    Array.isArray(e.illegal) && (e.illegal = cc11001100_hook("e.illegal", f.apply(void 0, _toConsumableArray(e.illegal)), "assign"));
  }
  function D(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (e.match) {
      if (e.begin || e.end) throw Error("begin & end are not supported with match");
      e.begin = cc11001100_hook("e.begin", e.match, "assign"), delete e.match;
    }
  }
  function H(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    void 0 === e.relevance && (e.relevance = cc11001100_hook("e.relevance", 1, "assign"));
  }
  var P = function P(e, t) {
      if (!e.beforeMatch) return;
      if (e.starts) throw Error("beforeMatch cannot be used with starts");
      var n = cc11001100_hook("n", Object.assign({}, e), "var-init");
      Object.keys(e).forEach(function (t) {
        delete e[t];
      }), e.keywords = cc11001100_hook("e.keywords", n.keywords, "assign"), e.begin = cc11001100_hook("e.begin", p(n.beforeMatch, d(n.begin)), "assign"), e.starts = cc11001100_hook("e.starts", {
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        contains: cc11001100_hook("contains", [Object.assign(n, {
          endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
        })], "object-key-init")
      }, "assign"), e.relevance = cc11001100_hook("e.relevance", 0, "assign"), delete n.beforeMatch;
    },
    C = cc11001100_hook("C", ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"], "var-init");
  function $(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "keyword", "var-init");
    var i = cc11001100_hook("i", Object.create(null), "var-init");
    return "string" == typeof e ? r(n, e.split(" ")) : Array.isArray(e) ? r(n, e) : Object.keys(e).forEach(function (n) {
      Object.assign(i, $(e[n], t, n));
    }), i;
    function r(e, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      t && (n = cc11001100_hook("n", n.map(function (e) {
        return e.toLowerCase();
      }), "assign")), n.forEach(function (t) {
        var n = cc11001100_hook("n", t.split("|"), "var-init");
        i[n[0]] = cc11001100_hook("i[n[0]]", [e, U(n[0], n[1])], "assign");
      });
    }
  }
  function U(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return t ? Number(t) : function (e) {
      return C.includes(e.toLowerCase());
    }(e) ? 0 : 1;
  }
  var z = cc11001100_hook("z", {}, "var-init"),
    K = function K(e) {
      console.error(e);
    },
    W = function W(e) {
      var _console;
      for (var _len4 = cc11001100_hook("_len4", arguments.length, "var-init"), t = cc11001100_hook("t", new Array(_len4 > 1 ? _len4 - 1 : 0), "var-init"), _key4 = cc11001100_hook("_key4", 1, "var-init"); _key4 < _len4; _key4++) {
        t[_key4 - 1] = cc11001100_hook("t[_key4 - 1]", arguments[_key4], "assign");
      }
      (_console = cc11001100_hook("_console", console, "assign")).log.apply(_console, ["WARN: " + e].concat(t));
    },
    X = function X(e, t) {
      z["".concat(e, "/").concat(t)] || (console.log("Deprecated as of ".concat(e, ". ").concat(t)), z["".concat(e, "/").concat(t)] = cc11001100_hook("z[\"\".concat(e, \"/\").concat(t)]", !0, "assign"));
    },
    G = cc11001100_hook("G", Error(), "var-init");
  function Z(e, t, _ref3) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("_ref3", _ref3, "function-parameter");
    var n = cc11001100_hook("n", _ref3.key, "var-init");
    var i = cc11001100_hook("i", 0, "var-init");
    var r = cc11001100_hook("r", e[n], "var-init"),
      s = cc11001100_hook("s", {}, "var-init"),
      o = cc11001100_hook("o", {}, "var-init");
    for (var _e2 = cc11001100_hook("_e2", 1, "var-init"); _e2 <= t.length; _e2++) o[_e2 + i] = cc11001100_hook("o[_e2 + i]", r[_e2], "assign"), s[_e2 + i] = cc11001100_hook("s[_e2 + i]", !0, "assign"), i += cc11001100_hook("i", b(t[_e2 - 1]), "assign");
    e[n] = cc11001100_hook("e[n]", o, "assign"), e[n]._emit = cc11001100_hook("e[n]._emit", s, "assign"), e[n]._multi = cc11001100_hook("e[n]._multi", !0, "assign");
  }
  function F(e) {
    cc11001100_hook("e", e, "function-parameter");
    (function (e) {
      e.scope && "object" == _typeof(e.scope) && null !== e.scope && (e.beginScope = cc11001100_hook("e.beginScope", e.scope, "assign"), delete e.scope);
    })(e), "string" == typeof e.beginScope && (e.beginScope = cc11001100_hook("e.beginScope", {
      _wrap: cc11001100_hook("_wrap", e.beginScope, "object-key-init")
    }, "assign")), "string" == typeof e.endScope && (e.endScope = cc11001100_hook("e.endScope", {
      _wrap: cc11001100_hook("_wrap", e.endScope, "object-key-init")
    }, "assign")), function (e) {
      if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), G;
        if ("object" != _typeof(e.beginScope) || null === e.beginScope) throw K("beginScope must be object"), G;
        Z(e, e.begin, {
          key: cc11001100_hook("key", "beginScope", "object-key-init")
        }), e.begin = cc11001100_hook("e.begin", E(e.begin, {
          joinWith: cc11001100_hook("joinWith", "", "object-key-init")
        }), "assign");
      }
    }(e), function (e) {
      if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"), G;
        if ("object" != _typeof(e.endScope) || null === e.endScope) throw K("endScope must be object"), G;
        Z(e, e.end, {
          key: cc11001100_hook("key", "endScope", "object-key-init")
        }), e.end = cc11001100_hook("e.end", E(e.end, {
          joinWith: cc11001100_hook("joinWith", "", "object-key-init")
        }), "assign");
      }
    }(e);
  }
  function V(e) {
    cc11001100_hook("e", e, "function-parameter");
    function t(t, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      return RegExp(g(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""));
    }
    var n = cc11001100_hook("n", /*#__PURE__*/function () {
      function n() {
        _classCallCheck(this, n);
        this.matchIndexes = cc11001100_hook("this.matchIndexes", {}, "assign"), this.regexes = cc11001100_hook("this.regexes", [], "assign"), this.matchAt = cc11001100_hook("this.matchAt", 1, "assign"), this.position = cc11001100_hook("this.position", 0, "assign");
      }
      _createClass(n, [{
        key: cc11001100_hook("key", "addRule", "object-key-init"),
        value: function addRule(e, t) {
          t.position = cc11001100_hook("t.position", this.position++, "assign"), this.matchIndexes[this.matchAt] = cc11001100_hook("this.matchIndexes[this.matchAt]", t, "assign"), this.regexes.push([t, e]), this.matchAt += cc11001100_hook("this.matchAt", b(e) + 1, "assign");
        }
      }, {
        key: cc11001100_hook("key", "compile", "object-key-init"),
        value: function compile() {
          0 === this.regexes.length && (this.exec = cc11001100_hook("this.exec", function () {
            return null;
          }, "assign"));
          var e = cc11001100_hook("e", this.regexes.map(function (e) {
            return e[1];
          }), "var-init");
          this.matcherRe = cc11001100_hook("this.matcherRe", t(E(e, {
            joinWith: cc11001100_hook("joinWith", "|", "object-key-init")
          }), !0), "assign"), this.lastIndex = cc11001100_hook("this.lastIndex", 0, "assign");
        }
      }, {
        key: cc11001100_hook("key", "exec", "object-key-init"),
        value: function exec(e) {
          this.matcherRe.lastIndex = cc11001100_hook("this.matcherRe.lastIndex", this.lastIndex, "assign");
          var t = cc11001100_hook("t", this.matcherRe.exec(e), "var-init");
          if (!t) return null;
          var _n2 = cc11001100_hook("_n2", t.findIndex(function (e, t) {
              return t > 0 && void 0 !== e;
            }), "var-init"),
            i = cc11001100_hook("i", this.matchIndexes[_n2], "var-init");
          return t.splice(0, _n2), Object.assign(t, i);
        }
      }]);
      return n;
    }(), "var-init");
    var i = cc11001100_hook("i", /*#__PURE__*/function () {
      function i() {
        _classCallCheck(this, i);
        this.rules = cc11001100_hook("this.rules", [], "assign"), this.multiRegexes = cc11001100_hook("this.multiRegexes", [], "assign"), this.count = cc11001100_hook("this.count", 0, "assign"), this.lastIndex = cc11001100_hook("this.lastIndex", 0, "assign"), this.regexIndex = cc11001100_hook("this.regexIndex", 0, "assign");
      }
      _createClass(i, [{
        key: cc11001100_hook("key", "getMatcher", "object-key-init"),
        value: function getMatcher(e) {
          if (this.multiRegexes[e]) return this.multiRegexes[e];
          var t = cc11001100_hook("t", new n(), "var-init");
          return this.rules.slice(e).forEach(function (_ref4) {
            var _ref5 = cc11001100_hook("_ref5", _slicedToArray(_ref4, 2), "var-init"),
              e = cc11001100_hook("e", _ref5[0], "var-init"),
              n = cc11001100_hook("n", _ref5[1], "var-init");
            return t.addRule(e, n);
          }), t.compile(), this.multiRegexes[e] = cc11001100_hook("this.multiRegexes[e]", t, "assign"), t;
        }
      }, {
        key: cc11001100_hook("key", "resumingScanAtSamePosition", "object-key-init"),
        value: function resumingScanAtSamePosition() {
          return 0 !== this.regexIndex;
        }
      }, {
        key: cc11001100_hook("key", "considerAll", "object-key-init"),
        value: function considerAll() {
          this.regexIndex = cc11001100_hook("this.regexIndex", 0, "assign");
        }
      }, {
        key: cc11001100_hook("key", "addRule", "object-key-init"),
        value: function addRule(e, t) {
          this.rules.push([e, t]), "begin" === t.type && this.count++;
        }
      }, {
        key: cc11001100_hook("key", "exec", "object-key-init"),
        value: function exec(e) {
          var t = cc11001100_hook("t", this.getMatcher(this.regexIndex), "var-init");
          t.lastIndex = cc11001100_hook("t.lastIndex", this.lastIndex, "assign");
          var n = cc11001100_hook("n", t.exec(e), "var-init");
          if (this.resumingScanAtSamePosition()) if (n && n.index === this.lastIndex) ;else {
            var _t3 = cc11001100_hook("_t3", this.getMatcher(0), "var-init");
            _t3.lastIndex = cc11001100_hook("_t3.lastIndex", this.lastIndex + 1, "assign"), n = cc11001100_hook("n", _t3.exec(e), "assign");
          }
          return n && (this.regexIndex += cc11001100_hook("this.regexIndex", n.position + 1, "assign"), this.regexIndex === this.count && this.considerAll()), n;
        }
      }]);
      return i;
    }(), "var-init");
    if (e.compilerExtensions || (e.compilerExtensions = cc11001100_hook("e.compilerExtensions", [], "assign")), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e.classNameAliases = cc11001100_hook("e.classNameAliases", r(e.classNameAliases || {}), "assign"), function n(s, o) {
      var _ref6;
      var a = cc11001100_hook("a", s, "var-init");
      if (s.isCompiled) return a;
      [T, D, F, P].forEach(function (e) {
        return e(s, o);
      }), e.compilerExtensions.forEach(function (e) {
        return e(s, o);
      }), s.__beforeBegin = cc11001100_hook("s.__beforeBegin", null, "assign"), [L, B, H].forEach(function (e) {
        return e(s, o);
      }), s.isCompiled = cc11001100_hook("s.isCompiled", !0, "assign");
      var c = cc11001100_hook("c", null, "var-init");
      return "object" == _typeof(s.keywords) && s.keywords.$pattern && (s.keywords = cc11001100_hook("s.keywords", Object.assign({}, s.keywords), "assign"), c = cc11001100_hook("c", s.keywords.$pattern, "assign"), delete s.keywords.$pattern), c = cc11001100_hook("c", c || /\w+/, "assign"), s.keywords && (s.keywords = cc11001100_hook("s.keywords", $(s.keywords, e.case_insensitive), "assign")), a.keywordPatternRe = cc11001100_hook("a.keywordPatternRe", t(c, !0), "assign"), o && (s.begin || (s.begin = cc11001100_hook("s.begin", /\B|\b/, "assign")), a.beginRe = cc11001100_hook("a.beginRe", t(a.begin), "assign"), s.end || s.endsWithParent || (s.end = cc11001100_hook("s.end", /\B|\b/, "assign")), s.end && (a.endRe = cc11001100_hook("a.endRe", t(a.end), "assign")), a.terminatorEnd = cc11001100_hook("a.terminatorEnd", g(a.end) || "", "assign"), s.endsWithParent && o.terminatorEnd && (a.terminatorEnd += cc11001100_hook("a.terminatorEnd", (s.end ? "|" : "") + o.terminatorEnd, "assign"))), s.illegal && (a.illegalRe = cc11001100_hook("a.illegalRe", t(s.illegal), "assign")), s.contains || (s.contains = cc11001100_hook("s.contains", [], "assign")), s.contains = cc11001100_hook("s.contains", (_ref6 = cc11001100_hook("_ref6", [], "assign")).concat.apply(_ref6, _toConsumableArray(s.contains.map(function (e) {
        return function (e) {
          return e.variants && !e.cachedVariants && (e.cachedVariants = cc11001100_hook("e.cachedVariants", e.variants.map(function (t) {
            return r(e, {
              variants: cc11001100_hook("variants", null, "object-key-init")
            }, t);
          }), "assign")), e.cachedVariants ? e.cachedVariants : q(e) ? r(e, {
            starts: cc11001100_hook("starts", e.starts ? r(e.starts) : null, "object-key-init")
          }) : Object.isFrozen(e) ? r(e) : e;
        }("self" === e ? s : e);
      }))), "assign"), s.contains.forEach(function (e) {
        n(e, a);
      }), s.starts && n(s.starts, o), a.matcher = cc11001100_hook("a.matcher", function (e) {
        var t = cc11001100_hook("t", new i(), "var-init");
        return e.contains.forEach(function (e) {
          return t.addRule(e.begin, {
            rule: cc11001100_hook("rule", e, "object-key-init"),
            type: cc11001100_hook("type", "begin", "object-key-init")
          });
        }), e.terminatorEnd && t.addRule(e.terminatorEnd, {
          type: cc11001100_hook("type", "end", "object-key-init")
        }), e.illegal && t.addRule(e.illegal, {
          type: cc11001100_hook("type", "illegal", "object-key-init")
        }), t;
      }(a), "assign"), a;
    }(e);
  }
  function q(e) {
    cc11001100_hook("e", e, "function-parameter");
    return !!e && (e.endsWithParent || q(e.starts));
  }
  var J = cc11001100_hook("J", /*#__PURE__*/function (_Error) {
    _inherits(J, _Error);
    var _super2 = cc11001100_hook("_super2", _createSuper(J), "var-init");
    function J(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var _this3;
      _classCallCheck(this, J);
      _this3 = cc11001100_hook("_this3", _super2.call(this, e), "assign"), _this3.name = cc11001100_hook("_this3.name", "HTMLInjectionError", "assign"), _this3.html = cc11001100_hook("_this3.html", t, "assign");
      return _this3;
    }
    return _createClass(J);
  }( /*#__PURE__*/_wrapNativeSuper(Error)), "var-init");
  var Y = cc11001100_hook("Y", i, "var-init"),
    Q = cc11001100_hook("Q", r, "var-init"),
    ee = cc11001100_hook("ee", Symbol("nomatch"), "var-init");
  var te = cc11001100_hook("te", function (t) {
    var i = cc11001100_hook("i", Object.create(null), "var-init"),
      r = cc11001100_hook("r", Object.create(null), "var-init"),
      s = cc11001100_hook("s", [], "var-init");
    var o = cc11001100_hook("o", !0, "var-init");
    var a = cc11001100_hook("a", "Could not find the language '{}', did you forget to load/include a language module?", "var-init"),
      c = cc11001100_hook("c", {
        disableAutodetect: cc11001100_hook("disableAutodetect", !0, "object-key-init"),
        name: cc11001100_hook("name", "Plain text", "object-key-init"),
        contains: cc11001100_hook("contains", [], "object-key-init")
      }, "var-init");
    var g = cc11001100_hook("g", {
      ignoreUnescapedHTML: cc11001100_hook("ignoreUnescapedHTML", !1, "object-key-init"),
      throwUnescapedHTML: cc11001100_hook("throwUnescapedHTML", !1, "object-key-init"),
      noHighlightRe: cc11001100_hook("noHighlightRe", /^(no-?highlight)$/i, "object-key-init"),
      languageDetectRe: cc11001100_hook("languageDetectRe", /\blang(?:uage)?-([\w-]+)\b/i, "object-key-init"),
      classPrefix: cc11001100_hook("classPrefix", "hljs-", "object-key-init"),
      cssSelector: cc11001100_hook("cssSelector", "pre code", "object-key-init"),
      languages: cc11001100_hook("languages", null, "object-key-init"),
      __emitter: cc11001100_hook("__emitter", l, "object-key-init")
    }, "var-init");
    function b(e) {
      cc11001100_hook("e", e, "function-parameter");
      return g.noHighlightRe.test(e);
    }
    function m(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var i = cc11001100_hook("i", "", "var-init"),
        r = cc11001100_hook("r", "", "var-init");
      "object" == _typeof(t) ? (i = cc11001100_hook("i", e, "assign"), n = cc11001100_hook("n", t.ignoreIllegals, "assign"), r = cc11001100_hook("r", t.language, "assign")) : (X("10.7.0", "highlight(lang, code, ...args) has been deprecated."), X("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), r = cc11001100_hook("r", e, "assign"), i = cc11001100_hook("i", t, "assign")), void 0 === n && (n = cc11001100_hook("n", !0, "assign"));
      var s = cc11001100_hook("s", {
        code: cc11001100_hook("code", i, "object-key-init"),
        language: cc11001100_hook("language", r, "object-key-init")
      }, "var-init");
      k("before:highlight", s);
      var o = cc11001100_hook("o", s.result ? s.result : E(s.language, s.code, n), "var-init");
      return o.code = cc11001100_hook("o.code", s.code, "assign"), k("after:highlight", o), o;
    }
    function E(e, t, r, s) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      var c = cc11001100_hook("c", Object.create(null), "var-init");
      function l() {
        if (!N.keywords) return void M.addText(S);
        var e = cc11001100_hook("e", 0, "var-init");
        N.keywordPatternRe.lastIndex = cc11001100_hook("N.keywordPatternRe.lastIndex", 0, "assign");
        var t = cc11001100_hook("t", N.keywordPatternRe.exec(S), "var-init"),
          n = cc11001100_hook("n", "", "var-init");
        for (; t;) {
          n += cc11001100_hook("n", S.substring(e, t.index), "assign");
          var _r2 = cc11001100_hook("_r2", y.case_insensitive ? t[0].toLowerCase() : t[0], "var-init"),
            _s2 = cc11001100_hook("_s2", (i = cc11001100_hook("i", _r2, "assign"), N.keywords[i]), "var-init");
          if (_s2) {
            var _s3 = cc11001100_hook("_s3", _slicedToArray(_s2, 2), "var-init"),
              _e3 = cc11001100_hook("_e3", _s3[0], "var-init"),
              _i2 = cc11001100_hook("_i2", _s3[1], "var-init");
            if (M.addText(n), n = cc11001100_hook("n", "", "assign"), c[_r2] = cc11001100_hook("c[_r2]", (c[_r2] || 0) + 1, "assign"), c[_r2] <= 7 && (R += cc11001100_hook("R", _i2, "assign")), _e3.startsWith("_")) n += cc11001100_hook("n", t[0], "assign");else {
              var _n3 = cc11001100_hook("_n3", y.classNameAliases[_e3] || _e3, "var-init");
              M.addKeyword(t[0], _n3);
            }
          } else n += cc11001100_hook("n", t[0], "assign");
          e = cc11001100_hook("e", N.keywordPatternRe.lastIndex, "assign"), t = cc11001100_hook("t", N.keywordPatternRe.exec(S), "assign");
        }
        var i;
        n += cc11001100_hook("n", S.substring(e), "assign"), M.addText(n);
      }
      function d() {
        null != N.subLanguage ? function () {
          if ("" === S) return;
          var e = cc11001100_hook("e", null, "var-init");
          if ("string" == typeof N.subLanguage) {
            if (!i[N.subLanguage]) return void M.addText(S);
            e = cc11001100_hook("e", E(N.subLanguage, S, !0, k[N.subLanguage]), "assign"), k[N.subLanguage] = cc11001100_hook("k[N.subLanguage]", e._top, "assign");
          } else e = cc11001100_hook("e", x(S, N.subLanguage.length ? N.subLanguage : null), "assign");
          N.relevance > 0 && (R += cc11001100_hook("R", e.relevance, "assign")), M.addSublanguage(e._emitter, e.language);
        }() : l(), S = cc11001100_hook("S", "", "assign");
      }
      function u(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", 1, "var-init");
        var i = cc11001100_hook("i", t.length - 1, "var-init");
        for (; n <= i;) {
          if (!e._emit[n]) {
            n++;
            continue;
          }
          var _i3 = cc11001100_hook("_i3", y.classNameAliases[e[n]] || e[n], "var-init"),
            _r3 = cc11001100_hook("_r3", t[n], "var-init");
          _i3 ? M.addKeyword(_r3, _i3) : (S = cc11001100_hook("S", _r3, "assign"), l(), S = cc11001100_hook("S", "", "assign")), n++;
        }
      }
      function h(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return e.scope && "string" == typeof e.scope && M.openNode(y.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (M.addKeyword(S, y.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), S = cc11001100_hook("S", "", "assign")) : e.beginScope._multi && (u(e.beginScope, t), S = cc11001100_hook("S", "", "assign"))), N = cc11001100_hook("N", Object.create(e, {
          parent: {
            value: cc11001100_hook("value", N, "object-key-init")
          }
        }), "assign"), N;
      }
      function p(e, t, i) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        var r = cc11001100_hook("r", function (e, t) {
          var n = cc11001100_hook("n", e && e.exec(t), "var-init");
          return n && 0 === n.index;
        }(e.endRe, i), "var-init");
        if (r) {
          if (e["on:end"]) {
            var _i4 = cc11001100_hook("_i4", new n(e), "var-init");
            e["on:end"](t, _i4), _i4.isMatchIgnored && (r = cc11001100_hook("r", !1, "assign"));
          }
          if (r) {
            for (; e.endsParent && e.parent;) e = cc11001100_hook("e", e.parent, "assign");
            return e;
          }
        }
        if (e.endsWithParent) return p(e.parent, t, i);
      }
      function f(e) {
        cc11001100_hook("e", e, "function-parameter");
        return 0 === N.matcher.regexIndex ? (S += cc11001100_hook("S", e[0], "assign"), 1) : (I = cc11001100_hook("I", !0, "assign"), 0);
      }
      function b(e) {
        cc11001100_hook("e", e, "function-parameter");
        var n = cc11001100_hook("n", e[0], "var-init"),
          i = cc11001100_hook("i", t.substring(e.index), "var-init"),
          r = cc11001100_hook("r", p(N, e, i), "var-init");
        if (!r) return ee;
        var s = cc11001100_hook("s", N, "var-init");
        N.endScope && N.endScope._wrap ? (d(), M.addKeyword(n, N.endScope._wrap)) : N.endScope && N.endScope._multi ? (d(), u(N.endScope, e)) : s.skip ? S += cc11001100_hook("S", n, "assign") : (s.returnEnd || s.excludeEnd || (S += cc11001100_hook("S", n, "assign")), d(), s.excludeEnd && (S = cc11001100_hook("S", n, "assign")));
        do {
          N.scope && M.closeNode(), N.skip || N.subLanguage || (R += cc11001100_hook("R", N.relevance, "assign")), N = cc11001100_hook("N", N.parent, "assign");
        } while (N !== r.parent);
        return r.starts && h(r.starts, e), s.returnEnd ? 0 : n.length;
      }
      var m = cc11001100_hook("m", {}, "var-init");
      function w(i, s) {
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        var a = cc11001100_hook("a", s && s[0], "var-init");
        if (S += cc11001100_hook("S", i, "assign"), null == a) return d(), 0;
        if ("begin" === m.type && "end" === s.type && m.index === s.index && "" === a) {
          if (S += cc11001100_hook("S", t.slice(s.index, s.index + 1), "assign"), !o) {
            var _t4 = cc11001100_hook("_t4", Error("0 width match regex (".concat(e, ")")), "var-init");
            throw _t4.languageName = cc11001100_hook("_t4.languageName", e, "assign"), _t4.badRule = cc11001100_hook("_t4.badRule", m.rule, "assign"), _t4;
          }
          return 1;
        }
        if (m = cc11001100_hook("m", s, "assign"), "begin" === s.type) return function (e) {
          var t = cc11001100_hook("t", e[0], "var-init"),
            i = cc11001100_hook("i", e.rule, "var-init"),
            r = cc11001100_hook("r", new n(i), "var-init"),
            s = cc11001100_hook("s", [i.__beforeBegin, i["on:begin"]], "var-init");
          for (var _i5 = cc11001100_hook("_i5", 0, "var-init"), _s4 = cc11001100_hook("_s4", s, "var-init"); _i5 < _s4.length; _i5++) {
            var _n4 = cc11001100_hook("_n4", _s4[_i5], "var-init");
            if (_n4 && (_n4(e, r), r.isMatchIgnored)) return f(t);
          }
          return i.skip ? S += cc11001100_hook("S", t, "assign") : (i.excludeBegin && (S += cc11001100_hook("S", t, "assign")), d(), i.returnBegin || i.excludeBegin || (S = cc11001100_hook("S", t, "assign"))), h(i, e), i.returnBegin ? 0 : t.length;
        }(s);
        if ("illegal" === s.type && !r) {
          var _e4 = cc11001100_hook("_e4", Error('Illegal lexeme "' + a + '" for mode "' + (N.scope || "<unnamed>") + '"'), "var-init");
          throw _e4.mode = cc11001100_hook("_e4.mode", N, "assign"), _e4;
        }
        if ("end" === s.type) {
          var _e5 = cc11001100_hook("_e5", b(s), "var-init");
          if (_e5 !== ee) return _e5;
        }
        if ("illegal" === s.type && "" === a) return 1;
        if (A > 1e5 && A > 3 * s.index) throw Error("potential infinite loop, way more iterations than matches");
        return S += cc11001100_hook("S", a, "assign"), a.length;
      }
      var y = cc11001100_hook("y", O(e), "var-init");
      if (!y) throw K(a.replace("{}", e)), Error('Unknown language: "' + e + '"');
      var _ = cc11001100_hook("_", V(y), "var-init");
      var v = cc11001100_hook("v", "", "var-init"),
        N = cc11001100_hook("N", s || _, "var-init");
      var k = cc11001100_hook("k", {}, "var-init"),
        M = cc11001100_hook("M", new g.__emitter(g), "var-init");
      (function () {
        var e = cc11001100_hook("e", [], "var-init");
        for (var _t5 = cc11001100_hook("_t5", N, "var-init"); _t5 !== y; _t5 = cc11001100_hook("_t5", _t5.parent, "assign")) _t5.scope && e.unshift(_t5.scope);
        e.forEach(function (e) {
          return M.openNode(e);
        });
      })();
      var S = cc11001100_hook("S", "", "var-init"),
        R = cc11001100_hook("R", 0, "var-init"),
        j = cc11001100_hook("j", 0, "var-init"),
        A = cc11001100_hook("A", 0, "var-init"),
        I = cc11001100_hook("I", !1, "var-init");
      try {
        for (N.matcher.considerAll();;) {
          A++, I ? I = cc11001100_hook("I", !1, "assign") : N.matcher.considerAll(), N.matcher.lastIndex = cc11001100_hook("N.matcher.lastIndex", j, "assign");
          var _e6 = cc11001100_hook("_e6", N.matcher.exec(t), "var-init");
          if (!_e6) break;
          var _n5 = cc11001100_hook("_n5", w(t.substring(j, _e6.index), _e6), "var-init");
          j = cc11001100_hook("j", _e6.index + _n5, "assign");
        }
        return w(t.substring(j)), M.closeAllNodes(), M.finalize(), v = cc11001100_hook("v", M.toHTML(), "assign"), {
          language: cc11001100_hook("language", e, "object-key-init"),
          value: cc11001100_hook("value", v, "object-key-init"),
          relevance: cc11001100_hook("relevance", R, "object-key-init"),
          illegal: cc11001100_hook("illegal", !1, "object-key-init"),
          _emitter: cc11001100_hook("_emitter", M, "object-key-init"),
          _top: cc11001100_hook("_top", N, "object-key-init")
        };
      } catch (n) {
        if (n.message && n.message.includes("Illegal")) return {
          language: cc11001100_hook("language", e, "object-key-init"),
          value: cc11001100_hook("value", Y(t), "object-key-init"),
          illegal: cc11001100_hook("illegal", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          _illegalBy: {
            message: cc11001100_hook("message", n.message, "object-key-init"),
            index: cc11001100_hook("index", j, "object-key-init"),
            context: cc11001100_hook("context", t.slice(j - 100, j + 100), "object-key-init"),
            mode: cc11001100_hook("mode", n.mode, "object-key-init"),
            resultSoFar: cc11001100_hook("resultSoFar", v, "object-key-init")
          },
          _emitter: cc11001100_hook("_emitter", M, "object-key-init")
        };
        if (o) return {
          language: cc11001100_hook("language", e, "object-key-init"),
          value: cc11001100_hook("value", Y(t), "object-key-init"),
          illegal: cc11001100_hook("illegal", !1, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          errorRaised: cc11001100_hook("errorRaised", n, "object-key-init"),
          _emitter: cc11001100_hook("_emitter", M, "object-key-init"),
          _top: cc11001100_hook("_top", N, "object-key-init")
        };
        throw n;
      }
    }
    function x(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      t = cc11001100_hook("t", t || g.languages || Object.keys(i), "assign");
      var n = cc11001100_hook("n", function (e) {
          var t = cc11001100_hook("t", {
            value: cc11001100_hook("value", Y(e), "object-key-init"),
            illegal: cc11001100_hook("illegal", !1, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            _top: cc11001100_hook("_top", c, "object-key-init"),
            _emitter: cc11001100_hook("_emitter", new g.__emitter(g), "object-key-init")
          }, "var-init");
          return t._emitter.addText(e), t;
        }(e), "var-init"),
        r = cc11001100_hook("r", t.filter(O).filter(N).map(function (t) {
          return E(t, e, !1);
        }), "var-init");
      r.unshift(n);
      var s = cc11001100_hook("s", r.sort(function (e, t) {
          if (e.relevance !== t.relevance) return t.relevance - e.relevance;
          if (e.language && t.language) {
            if (O(e.language).supersetOf === t.language) return 1;
            if (O(t.language).supersetOf === e.language) return -1;
          }
          return 0;
        }), "var-init"),
        _s5 = cc11001100_hook("_s5", _slicedToArray(s, 2), "var-init"),
        o = cc11001100_hook("o", _s5[0], "var-init"),
        a = cc11001100_hook("a", _s5[1], "var-init"),
        l = cc11001100_hook("l", o, "var-init");
      return l.secondBest = cc11001100_hook("l.secondBest", a, "assign"), l;
    }
    function w(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", null, "var-init");
      var n = cc11001100_hook("n", function (e) {
        var t = cc11001100_hook("t", e.className + " ", "var-init");
        t += cc11001100_hook("t", e.parentNode ? e.parentNode.className : "", "assign");
        var n = cc11001100_hook("n", g.languageDetectRe.exec(t), "var-init");
        if (n) {
          var _t6 = cc11001100_hook("_t6", O(n[1]), "var-init");
          return _t6 || (W(a.replace("{}", n[1])), W("Falling back to no-highlight mode for this block.", e)), _t6 ? n[1] : "no-highlight";
        }
        return t.split(/\s+/).find(function (e) {
          return b(e) || O(e);
        });
      }(e), "var-init");
      if (b(n)) return;
      if (k("before:highlightElement", {
        el: cc11001100_hook("el", e, "object-key-init"),
        language: cc11001100_hook("language", n, "object-key-init")
      }), e.children.length > 0 && (g.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), g.throwUnescapedHTML)) throw new J("One of your code blocks includes unescaped HTML.", e.innerHTML);
      t = cc11001100_hook("t", e, "assign");
      var i = cc11001100_hook("i", t.textContent, "var-init"),
        s = cc11001100_hook("s", n ? m(i, {
          language: cc11001100_hook("language", n, "object-key-init"),
          ignoreIllegals: cc11001100_hook("ignoreIllegals", !0, "object-key-init")
        }) : x(i), "var-init");
      e.innerHTML = cc11001100_hook("e.innerHTML", s.value, "assign"), function (e, t, n) {
        var i = cc11001100_hook("i", t && r[t] || n, "var-init");
        e.classList.add("hljs"), e.classList.add("language-" + i);
      }(e, n, s.language), e.result = cc11001100_hook("e.result", {
        language: cc11001100_hook("language", s.language, "object-key-init"),
        re: cc11001100_hook("re", s.relevance, "object-key-init"),
        relevance: cc11001100_hook("relevance", s.relevance, "object-key-init")
      }, "assign"), s.secondBest && (e.secondBest = cc11001100_hook("e.secondBest", {
        language: cc11001100_hook("language", s.secondBest.language, "object-key-init"),
        relevance: cc11001100_hook("relevance", s.secondBest.relevance, "object-key-init")
      }, "assign")), k("after:highlightElement", {
        el: cc11001100_hook("el", e, "object-key-init"),
        result: cc11001100_hook("result", s, "object-key-init"),
        text: cc11001100_hook("text", i, "object-key-init")
      });
    }
    var y = cc11001100_hook("y", !1, "var-init");
    function _() {
      "loading" !== document.readyState ? document.querySelectorAll(g.cssSelector).forEach(w) : y = cc11001100_hook("y", !0, "assign");
    }
    function O(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e = cc11001100_hook("e", (e || "").toLowerCase(), "assign"), i[e] || i[r[e]];
    }
    function v(e, _ref7) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("_ref7", _ref7, "function-parameter");
      var t = cc11001100_hook("t", _ref7.languageName, "var-init");
      "string" == typeof e && (e = cc11001100_hook("e", [e], "assign")), e.forEach(function (e) {
        r[e.toLowerCase()] = cc11001100_hook("r[e.toLowerCase()]", t, "assign");
      });
    }
    function N(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", O(e), "var-init");
      return t && !t.disableAutodetect;
    }
    function k(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", e, "var-init");
      s.forEach(function (e) {
        e[n] && e[n](t);
      });
    }
    "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", function () {
      y && _();
    }, !1), Object.assign(t, {
      highlight: cc11001100_hook("highlight", m, "object-key-init"),
      highlightAuto: cc11001100_hook("highlightAuto", x, "object-key-init"),
      highlightAll: cc11001100_hook("highlightAll", _, "object-key-init"),
      highlightElement: cc11001100_hook("highlightElement", w, "object-key-init"),
      highlightBlock: function highlightBlock(e) {
        return X("10.7.0", "highlightBlock will be removed entirely in v12.0"), X("10.7.0", "Please use highlightElement now."), w(e);
      },
      configure: function configure(e) {
        g = cc11001100_hook("g", Q(g, e), "assign");
      },
      initHighlighting: function initHighlighting() {
        _(), X("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      },
      initHighlightingOnLoad: function initHighlightingOnLoad() {
        _(), X("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      },
      registerLanguage: function registerLanguage(e, n) {
        var r = cc11001100_hook("r", null, "var-init");
        try {
          r = cc11001100_hook("r", n(t), "assign");
        } catch (t) {
          if (K("Language definition for '{}' could not be registered.".replace("{}", e)), !o) throw t;
          K(t), r = cc11001100_hook("r", c, "assign");
        }
        r.name || (r.name = cc11001100_hook("r.name", e, "assign")), i[e] = cc11001100_hook("i[e]", r, "assign"), r.rawDefinition = cc11001100_hook("r.rawDefinition", n.bind(null, t), "assign"), r.aliases && v(r.aliases, {
          languageName: cc11001100_hook("languageName", e, "object-key-init")
        });
      },
      unregisterLanguage: function unregisterLanguage(e) {
        delete i[e];
        for (var _i6 = cc11001100_hook("_i6", 0, "var-init"), _Object$keys = cc11001100_hook("_Object$keys", Object.keys(r), "var-init"); _i6 < _Object$keys.length; _i6++) {
          var _t7 = cc11001100_hook("_t7", _Object$keys[_i6], "var-init");
          r[_t7] === e && delete r[_t7];
        }
      },
      listLanguages: function listLanguages() {
        return Object.keys(i);
      },
      getLanguage: cc11001100_hook("getLanguage", O, "object-key-init"),
      registerAliases: cc11001100_hook("registerAliases", v, "object-key-init"),
      autoDetection: cc11001100_hook("autoDetection", N, "object-key-init"),
      inherit: cc11001100_hook("inherit", Q, "object-key-init"),
      addPlugin: function addPlugin(e) {
        (function (e) {
          e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = cc11001100_hook("e[\"before:highlightElement\"]", function (t) {
            e["before:highlightBlock"](Object.assign({
              block: cc11001100_hook("block", t.el, "object-key-init")
            }, t));
          }, "assign")), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = cc11001100_hook("e[\"after:highlightElement\"]", function (t) {
            e["after:highlightBlock"](Object.assign({
              block: cc11001100_hook("block", t.el, "object-key-init")
            }, t));
          }, "assign"));
        })(e), s.push(e);
      }
    }), t.debugMode = cc11001100_hook("t.debugMode", function () {
      o = cc11001100_hook("o", !1, "assign");
    }, "assign"), t.safeMode = cc11001100_hook("t.safeMode", function () {
      o = cc11001100_hook("o", !0, "assign");
    }, "assign"), t.versionString = cc11001100_hook("t.versionString", "11.7.0", "assign"), t.regex = cc11001100_hook("t.regex", {
      concat: cc11001100_hook("concat", p, "object-key-init"),
      lookahead: cc11001100_hook("lookahead", d, "object-key-init"),
      either: cc11001100_hook("either", f, "object-key-init"),
      optional: cc11001100_hook("optional", h, "object-key-init"),
      anyNumberOfTimes: cc11001100_hook("anyNumberOfTimes", u, "object-key-init")
    }, "assign");
    for (var _t8 in A) "object" == _typeof(A[_t8]) && e.exports(A[_t8]);
    return Object.assign(t, A), t;
  }({}), "var-init");
  return te;
}(), "var-init");
"object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module && (module.exports = cc11001100_hook("module.exports", hljs, "assign")); /*! `xml` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var a = cc11001100_hook("a", e.regex, "var-init"),
        n = cc11001100_hook("n", a.concat(/(?:[A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/, a.optional(/(?:[\x2D\.0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*:/), /(?:[\x2D\.0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*/), "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/, "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          begin: cc11001100_hook("begin", /\s/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            begin: cc11001100_hook("begin", /#?[a-z_][a-z1-9_-]+/, "object-key-init"),
            illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", e.inherit(t, {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init")
        }), "var-init"),
        c = cc11001100_hook("c", e.inherit(e.APOS_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init")
        }), "var-init"),
        l = cc11001100_hook("l", e.inherit(e.QUOTE_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init")
        }), "var-init"),
        r = cc11001100_hook("r", {
          endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", /</, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "attr", "object-key-init"),
            begin: cc11001100_hook("begin", /(?:[\x2D\.0-:A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])+/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /=\s*/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "string", "object-key-init"),
              endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
              variants: cc11001100_hook("variants", [{
                begin: cc11001100_hook("begin", /"/, "object-key-init"),
                end: cc11001100_hook("end", /"/, "object-key-init"),
                contains: cc11001100_hook("contains", [s], "object-key-init")
              }, {
                begin: cc11001100_hook("begin", /'/, "object-key-init"),
                end: cc11001100_hook("end", /'/, "object-key-init"),
                contains: cc11001100_hook("contains", [s], "object-key-init")
              }, {
                begin: cc11001100_hook("begin", /[^\s"'=<>`]+/, "object-key-init")
              }], "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "HTML, XML", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        unicodeRegex: cc11001100_hook("unicodeRegex", !0, "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /<![a-z]/, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init"),
          contains: cc11001100_hook("contains", [t, l, c, i, {
            begin: cc11001100_hook("begin", /\[/, "object-key-init"),
            end: cc11001100_hook("end", /\]/, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "meta", "object-key-init"),
              begin: cc11001100_hook("begin", /<![a-z]/, "object-key-init"),
              end: cc11001100_hook("end", />/, "object-key-init"),
              contains: cc11001100_hook("contains", [t, i, l, c], "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, e.COMMENT(/<!--/, /-->/, {
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }), {
          begin: cc11001100_hook("begin", /<!\[CDATA\[/, "object-key-init"),
          end: cc11001100_hook("end", /\]\]>/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }, s, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          end: cc11001100_hook("end", /\?>/, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /<\?xml/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init"),
            contains: cc11001100_hook("contains", [l], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /<\?[a-z][a-z0-9]+/, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "tag", "object-key-init"),
          begin: cc11001100_hook("begin", /<style(?=\s|>)/, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          keywords: {
            name: cc11001100_hook("name", "style", "object-key-init")
          },
          contains: cc11001100_hook("contains", [r], "object-key-init"),
          starts: {
            end: cc11001100_hook("end", /<\/style>/, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", ["css", "xml"], "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "tag", "object-key-init"),
          begin: cc11001100_hook("begin", /<script(?=\s|>)/, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          keywords: {
            name: cc11001100_hook("name", "script", "object-key-init")
          },
          contains: cc11001100_hook("contains", [r], "object-key-init"),
          starts: {
            end: cc11001100_hook("end", /<\/script>/, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", ["javascript", "handlebars", "xml"], "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "tag", "object-key-init"),
          begin: cc11001100_hook("begin", /<>|<\/>/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "tag", "object-key-init"),
          begin: cc11001100_hook("begin", a.concat(/</, a.lookahead(a.concat(n, a.either(/\/>/, />/, /\s/)))), "object-key-init"),
          end: cc11001100_hook("end", /\/?>/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "name", "object-key-init"),
            begin: cc11001100_hook("begin", n, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            starts: cc11001100_hook("starts", r, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "tag", "object-key-init"),
          begin: cc11001100_hook("begin", a.concat(/<\//, a.lookahead(a.concat(n, />/))), "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "name", "object-key-init"),
            begin: cc11001100_hook("begin", n, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", />/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
          }], "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("xml", e);
})(); /*! `csharp` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", {
          keyword: cc11001100_hook("keyword", ["abstract", "as", "base", "break", "case", "catch", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "scoped", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"].concat(["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"]), "object-key-init"),
          built_in: cc11001100_hook("built_in", ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"], "object-key-init"),
          literal: cc11001100_hook("literal", ["default", "false", "null", "true"], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", e.inherit(e.TITLE_MODE, {
          begin: cc11001100_hook("begin", "[a-zA-Z](\\.?\\w)*", "object-key-init")
        }), "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b(0b[01']+)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", '@"', "object-key-init"),
          end: cc11001100_hook("end", '"', "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", e.inherit(s, {
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
        }), "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", n, "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", e.inherit(r, {
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
        }), "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /\$"/, "object-key-init"),
          end: cc11001100_hook("end", '"', "object-key-init"),
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\{\{/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\}\}/, "object-key-init")
          }, e.BACKSLASH_ESCAPE, l], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /\$@"/, "object-key-init"),
          end: cc11001100_hook("end", '"', "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\{\{/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\}\}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }, r], "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", e.inherit(o, {
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\{\{/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\}\}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }, l], "object-key-init")
        }), "var-init");
      r.contains = cc11001100_hook("r.contains", [o, c, s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.C_BLOCK_COMMENT_MODE], "assign"), l.contains = cc11001100_hook("l.contains", [d, c, t, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.inherit(e.C_BLOCK_COMMENT_MODE, {
        illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
      })], "assign");
      var g = cc11001100_hook("g", {
          variants: cc11001100_hook("variants", [o, c, s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "object-key-init")
        }, "var-init"),
        E = cc11001100_hook("E", {
          begin: cc11001100_hook("begin", "<", "object-key-init"),
          end: cc11001100_hook("end", ">", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "in out", "object-key-init")
          }, a], "object-key-init")
        }, "var-init"),
        _ = cc11001100_hook("_", e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", "var-init"),
        b = cc11001100_hook("b", {
          begin: cc11001100_hook("begin", "@" + e.IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "C#", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["cs", "c#"], "object-key-init"),
        keywords: cc11001100_hook("keywords", n, "object-key-init"),
        illegal: cc11001100_hook("illegal", /::/, "object-key-init"),
        contains: cc11001100_hook("contains", [e.COMMENT("///", "$", {
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", "///", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "\x3c!--|--\x3e", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "</?", "object-key-init"),
              end: cc11001100_hook("end", ">", "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "#", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "if else elif endif define undef warning error line region endregion pragma checksum", "object-key-init")
          }
        }, g, i, {
          beginKeywords: cc11001100_hook("beginKeywords", "class interface", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\s:,]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "where class", "object-key-init")
          }, a, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "namespace", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\s:]/, "object-key-init"),
          contains: cc11001100_hook("contains", [a, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "record", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\s:]/, "object-key-init"),
          contains: cc11001100_hook("contains", [a, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "^\\s*\\[(?=[\\w])", "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", "\\]", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "new return throw await else", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", "(" + _ + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /\s*[{;=]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", n, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(", "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [e.TITLE_MODE, E], "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\(\)/, "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            keywords: cc11001100_hook("keywords", n, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [g, i, e.C_BLOCK_COMMENT_MODE], "object-key-init")
          }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, b], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("csharp", e);
})(); /*! `php` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var t = cc11001100_hook("t", e.regex, "var-init"),
        a = cc11001100_hook("a", /(?![A-Za-z0-9])(?![$])/, "var-init"),
        r = cc11001100_hook("r", t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, a), "var-init"),
        n = cc11001100_hook("n", t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, a), "var-init"),
        o = cc11001100_hook("o", {
          scope: cc11001100_hook("scope", "variable", "object-key-init"),
          match: cc11001100_hook("match", "\\$+" + r, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          scope: cc11001100_hook("scope", "subst", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\$\w+/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\{\$/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", e.inherit(e.APOS_STRING_MODE, {
          illegal: cc11001100_hook("illegal", null, "object-key-init")
        }), "var-init"),
        s = cc11001100_hook("s", "[ \t\n]", "var-init"),
        l = cc11001100_hook("l", {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [e.inherit(e.QUOTE_STRING_MODE, {
            illegal: cc11001100_hook("illegal", null, "object-key-init"),
            contains: cc11001100_hook("contains", e.QUOTE_STRING_MODE.contains.concat(c), "object-key-init")
          }), i, e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /<<<[ \t]*(\w+)\n/, "object-key-init"),
            end: cc11001100_hook("end", /[ \t]*(\w+)\b/, "object-key-init"),
            contains: cc11001100_hook("contains", e.QUOTE_STRING_MODE.contains.concat(c), "object-key-init")
          })], "object-key-init")
        }, "var-init"),
        _ = cc11001100_hook("_", {
          scope: cc11001100_hook("scope", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b0[bB][01]+(?:_[01]+)*\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[oO][0-7]+(?:_[0-7]+)*\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", ["false", "null", "true"], "var-init"),
        p = cc11001100_hook("p", ["__CLASS__", "__DIR__", "__FILE__", "__FUNCTION__", "__COMPILER_HALT_OFFSET__", "__LINE__", "__METHOD__", "__NAMESPACE__", "__TRAIT__", "die", "echo", "exit", "include", "include_once", "print", "require", "require_once", "array", "abstract", "and", "as", "binary", "bool", "boolean", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "do", "double", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "enum", "eval", "extends", "final", "finally", "float", "for", "foreach", "from", "global", "goto", "if", "implements", "instanceof", "insteadof", "int", "integer", "interface", "isset", "iterable", "list", "match|0", "mixed", "new", "never", "object", "or", "private", "protected", "public", "readonly", "real", "return", "string", "switch", "throw", "trait", "try", "unset", "use", "var", "void", "while", "xor", "yield"], "var-init"),
        b = cc11001100_hook("b", ["Error|0", "AppendIterator", "ArgumentCountError", "ArithmeticError", "ArrayIterator", "ArrayObject", "AssertionError", "BadFunctionCallException", "BadMethodCallException", "CachingIterator", "CallbackFilterIterator", "CompileError", "Countable", "DirectoryIterator", "DivisionByZeroError", "DomainException", "EmptyIterator", "ErrorException", "Exception", "FilesystemIterator", "FilterIterator", "GlobIterator", "InfiniteIterator", "InvalidArgumentException", "IteratorIterator", "LengthException", "LimitIterator", "LogicException", "MultipleIterator", "NoRewindIterator", "OutOfBoundsException", "OutOfRangeException", "OuterIterator", "OverflowException", "ParentIterator", "ParseError", "RangeException", "RecursiveArrayIterator", "RecursiveCachingIterator", "RecursiveCallbackFilterIterator", "RecursiveDirectoryIterator", "RecursiveFilterIterator", "RecursiveIterator", "RecursiveIteratorIterator", "RecursiveRegexIterator", "RecursiveTreeIterator", "RegexIterator", "RuntimeException", "SeekableIterator", "SplDoublyLinkedList", "SplFileInfo", "SplFileObject", "SplFixedArray", "SplHeap", "SplMaxHeap", "SplMinHeap", "SplObjectStorage", "SplObserver", "SplPriorityQueue", "SplQueue", "SplStack", "SplSubject", "SplTempFileObject", "TypeError", "UnderflowException", "UnexpectedValueException", "UnhandledMatchError", "ArrayAccess", "BackedEnum", "Closure", "Fiber", "Generator", "Iterator", "IteratorAggregate", "Serializable", "Stringable", "Throwable", "Traversable", "UnitEnum", "WeakReference", "WeakMap", "Directory", "__PHP_Incomplete_Class", "parent", "php_user_filter", "self", "static", "stdClass"], "var-init"),
        E = cc11001100_hook("E", {
          keyword: cc11001100_hook("keyword", p, "object-key-init"),
          literal: cc11001100_hook("literal", function (e) {
            var t = cc11001100_hook("t", [], "var-init");
            return e.forEach(function (e) {
              t.push(e), e.toLowerCase() === e ? t.push(e.toUpperCase()) : t.push(e.toLowerCase());
            }), t;
          }(d), "object-key-init"),
          built_in: cc11001100_hook("built_in", b, "object-key-init")
        }, "var-init"),
        u = function u(e) {
          return e.map(function (e) {
            return e.replace(/\|\d+$/, "");
          });
        },
        g = cc11001100_hook("g", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/new/, t.concat(s, "+"), t.concat("(?!", u(b).join("\\b|"), "\\b)"), n], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "keyword", "object-key-init"),
              4: cc11001100_hook(4, "title.class", "object-key-init")
            }
          }], "object-key-init")
        }, "var-init"),
        h = cc11001100_hook("h", t.concat(r, "\\b(?!\\()"), "var-init"),
        m = cc11001100_hook("m", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [t.concat(/::/, t.lookahead(/(?!class\b)/)), h], "object-key-init"),
            scope: {
              2: cc11001100_hook(2, "variable.constant", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [/::/, /class/], "object-key-init"),
            scope: {
              2: cc11001100_hook(2, "variable.language", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [n, t.concat(/::/, t.lookahead(/(?!class\b)/)), h], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "title.class", "object-key-init"),
              3: cc11001100_hook(3, "variable.constant", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [n, t.concat("::", t.lookahead(/(?!class\b)/))], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "title.class", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [n, /::/, /class/], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "title.class", "object-key-init"),
              3: cc11001100_hook(3, "variable.language", "object-key-init")
            }
          }], "object-key-init")
        }, "var-init"),
        I = cc11001100_hook("I", {
          scope: cc11001100_hook("scope", "attr", "object-key-init"),
          match: cc11001100_hook("match", t.concat(r, t.lookahead(":"), t.lookahead(/(?!::)/)), "object-key-init")
        }, "var-init"),
        f = cc11001100_hook("f", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          keywords: cc11001100_hook("keywords", E, "object-key-init"),
          contains: cc11001100_hook("contains", [I, o, m, e.C_BLOCK_COMMENT_MODE, l, _, g], "object-key-init")
        }, "var-init"),
        O = cc11001100_hook("O", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", [/\b/, t.concat("(?!fn\\b|function\\b|", u(p).join("\\b|"), "|", u(b).join("\\b|"), "\\b)"), r, t.concat(s, "*"), t.lookahead(/(?=\()/)], "object-key-init"),
          scope: {
            3: cc11001100_hook(3, "title.function.invoke", "object-key-init")
          },
          contains: cc11001100_hook("contains", [f], "object-key-init")
        }, "var-init");
      f.contains.push(O);
      var v = cc11001100_hook("v", [I, m, e.C_BLOCK_COMMENT_MODE, l, _, g], "var-init");
      return {
        case_insensitive: cc11001100_hook("case_insensitive", !1, "object-key-init"),
        keywords: cc11001100_hook("keywords", E, "object-key-init"),
        contains: cc11001100_hook("contains", [{
          begin: cc11001100_hook("begin", t.concat(/#\[\s*/, n), "object-key-init"),
          beginScope: cc11001100_hook("beginScope", "meta", "object-key-init"),
          end: cc11001100_hook("end", /]/, "object-key-init"),
          endScope: cc11001100_hook("endScope", "meta", "object-key-init"),
          keywords: {
            literal: cc11001100_hook("literal", d, "object-key-init"),
            keyword: cc11001100_hook("keyword", ["new", "array"], "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\[/, "object-key-init"),
            end: cc11001100_hook("end", /]/, "object-key-init"),
            keywords: {
              literal: cc11001100_hook("literal", d, "object-key-init"),
              keyword: cc11001100_hook("keyword", ["new", "array"], "object-key-init")
            },
            contains: cc11001100_hook("contains", ["self"].concat(v), "object-key-init")
          }].concat(v, [{
            scope: cc11001100_hook("scope", "meta", "object-key-init"),
            match: cc11001100_hook("match", n, "object-key-init")
          }]), "object-key-init")
        }, e.HASH_COMMENT_MODE, e.COMMENT("//", "$"), e.COMMENT("/\\*", "\\*/", {
          contains: cc11001100_hook("contains", [{
            scope: cc11001100_hook("scope", "doctag", "object-key-init"),
            match: cc11001100_hook("match", "@[A-Za-z]+", "object-key-init")
          }], "object-key-init")
        }), {
          match: cc11001100_hook("match", /__halt_compiler\(\);/, "object-key-init"),
          keywords: cc11001100_hook("keywords", "__halt_compiler", "object-key-init"),
          starts: {
            scope: cc11001100_hook("scope", "comment", "object-key-init"),
            end: cc11001100_hook("end", e.MATCH_NOTHING_RE, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              match: cc11001100_hook("match", /\?>/, "object-key-init"),
              scope: cc11001100_hook("scope", "meta", "object-key-init"),
              endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
            }], "object-key-init")
          }
        }, {
          scope: cc11001100_hook("scope", "meta", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /<\?php/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /<\?=/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /<\?/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0.1, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\?>/, "object-key-init")
          }], "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "variable.language", "object-key-init"),
          match: cc11001100_hook("match", /\$this\b/, "object-key-init")
        }, o, O, m, {
          match: cc11001100_hook("match", [/const/, /\s/, r], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "variable.constant", "object-key-init")
          }
        }, g, {
          scope: cc11001100_hook("scope", "function", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "fn function", "object-key-init"),
          end: cc11001100_hook("end", /[;{]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", "[$%\\[]", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "use", "object-key-init")
          }, e.UNDERSCORE_TITLE_MODE, {
            begin: cc11001100_hook("begin", "=>", "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
          }, {
            scope: cc11001100_hook("scope", "params", "object-key-init"),
            begin: cc11001100_hook("begin", "\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            keywords: cc11001100_hook("keywords", E, "object-key-init"),
            contains: cc11001100_hook("contains", ["self", o, m, e.C_BLOCK_COMMENT_MODE, l, _], "object-key-init")
          }], "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "class", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            beginKeywords: cc11001100_hook("beginKeywords", "enum", "object-key-init"),
            illegal: cc11001100_hook("illegal", /[($"]/, "object-key-init")
          }, {
            beginKeywords: cc11001100_hook("beginKeywords", "class interface trait", "object-key-init"),
            illegal: cc11001100_hook("illegal", /[:($"]/, "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", /\{/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "extends implements", "object-key-init")
          }, e.UNDERSCORE_TITLE_MODE], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "namespace", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", ";", "object-key-init"),
          illegal: cc11001100_hook("illegal", /[.']/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.UNDERSCORE_TITLE_MODE, {
            scope: cc11001100_hook("scope", "title.class", "object-key-init")
          })], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "use", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", ";", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            match: cc11001100_hook("match", /\b(as|const|function)\b/, "object-key-init"),
            scope: cc11001100_hook("scope", "keyword", "object-key-init")
          }, e.UNDERSCORE_TITLE_MODE], "object-key-init")
        }, l, _], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("php", e);
})(); /*! `typescript` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    var e = cc11001100_hook("e", "[A-Za-z$_][0-9A-Za-z$_]*", "var-init"),
      n = cc11001100_hook("n", ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], "var-init"),
      a = cc11001100_hook("a", ["true", "false", "null", "undefined", "NaN", "Infinity"], "var-init"),
      t = cc11001100_hook("t", ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"], "var-init"),
      s = cc11001100_hook("s", ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"], "var-init"),
      c = cc11001100_hook("c", ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], "var-init"),
      r = cc11001100_hook("r", ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], "var-init"),
      i = cc11001100_hook("i", [].concat(c, t, s), "var-init");
    function o(o) {
      cc11001100_hook("o", o, "function-parameter");
      var l = cc11001100_hook("l", o.regex, "var-init"),
        d = cc11001100_hook("d", e, "var-init"),
        b = cc11001100_hook("b", {
          begin: cc11001100_hook("begin", /<[A-Za-z0-9\\._:-]+/, "object-key-init"),
          end: cc11001100_hook("end", /\/[A-Za-z0-9\\._:-]+>|\/>/, "object-key-init"),
          isTrulyOpeningTag: function isTrulyOpeningTag(e, n) {
            var a = cc11001100_hook("a", e[0].length + e.index, "var-init"),
              t = cc11001100_hook("t", e.input[a], "var-init");
            if ("<" === t || "," === t) return void n.ignoreMatch();
            var s;
            ">" === t && (function (e, _ref8) {
              var n = cc11001100_hook("n", _ref8.after, "var-init");
              var a = cc11001100_hook("a", "</" + e[0].slice(1), "var-init");
              return -1 !== e.input.indexOf(a, n);
            }(e, {
              after: cc11001100_hook("after", a, "object-key-init")
            }) || n.ignoreMatch());
            var c = cc11001100_hook("c", e.input.substring(a), "var-init");
            ((s = cc11001100_hook("s", c.match(/^\s*=/), "assign")) || (s = cc11001100_hook("s", c.match(/^\s+extends\s+/), "assign")) && 0 === s.index) && n.ignoreMatch();
          }
        }, "var-init"),
        g = cc11001100_hook("g", {
          $pattern: cc11001100_hook("$pattern", e, "object-key-init"),
          keyword: cc11001100_hook("keyword", n, "object-key-init"),
          literal: cc11001100_hook("literal", a, "object-key-init"),
          built_in: cc11001100_hook("built_in", i, "object-key-init"),
          "variable.language": cc11001100_hook("variable.language", r, "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", "\\.([0-9](_?[0-9])*)", "var-init"),
        m = cc11001100_hook("m", "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", "var-init"),
        E = cc11001100_hook("E", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "(\\b(".concat(m, ")((").concat(u, ")|\\.)?|(").concat(u, "))[eE][+-]?([0-9](_?[0-9])*)\\b"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b(".concat(m, ")\\b((").concat(u, ")\\b|\\.)?|(").concat(u, ")\\b"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b(0|[1-9](_?[0-9])*)n\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[bB][0-1](_?[0-1])*n?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[oO][0-7](_?[0-7])*n?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[0-7]+n?\\b", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        y = cc11001100_hook("y", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", "\\$\\{", "object-key-init"),
          end: cc11001100_hook("end", "\\}", "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init"),
          contains: cc11001100_hook("contains", [], "object-key-init")
        }, "var-init"),
        A = cc11001100_hook("A", {
          begin: cc11001100_hook("begin", "html`", "object-key-init"),
          end: cc11001100_hook("end", "", "object-key-init"),
          starts: {
            end: cc11001100_hook("end", "`", "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !1, "object-key-init"),
            contains: cc11001100_hook("contains", [o.BACKSLASH_ESCAPE, y], "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init")
          }
        }, "var-init"),
        p = cc11001100_hook("p", {
          begin: cc11001100_hook("begin", "css`", "object-key-init"),
          end: cc11001100_hook("end", "", "object-key-init"),
          starts: {
            end: cc11001100_hook("end", "`", "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !1, "object-key-init"),
            contains: cc11001100_hook("contains", [o.BACKSLASH_ESCAPE, y], "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", "css", "object-key-init")
          }
        }, "var-init"),
        _ = cc11001100_hook("_", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", "`", "object-key-init"),
          end: cc11001100_hook("end", "`", "object-key-init"),
          contains: cc11001100_hook("contains", [o.BACKSLASH_ESCAPE, y], "object-key-init")
        }, "var-init"),
        N = cc11001100_hook("N", {
          className: cc11001100_hook("className", "comment", "object-key-init"),
          variants: cc11001100_hook("variants", [o.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", "(?=@[A-Za-z]+)", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init"),
              contains: cc11001100_hook("contains", [{
                className: cc11001100_hook("className", "doctag", "object-key-init"),
                begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
              }, {
                className: cc11001100_hook("className", "type", "object-key-init"),
                begin: cc11001100_hook("begin", "\\{", "object-key-init"),
                end: cc11001100_hook("end", "\\}", "object-key-init"),
                excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
                excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
                relevance: cc11001100_hook("relevance", 0, "object-key-init")
              }, {
                className: cc11001100_hook("className", "variable", "object-key-init"),
                begin: cc11001100_hook("begin", d + "(?=\\s*(-)|$)", "object-key-init"),
                endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
                relevance: cc11001100_hook("relevance", 0, "object-key-init")
              }, {
                begin: cc11001100_hook("begin", /(?=[^\n])\s/, "object-key-init"),
                relevance: cc11001100_hook("relevance", 0, "object-key-init")
              }], "object-key-init")
            }], "object-key-init")
          }), o.C_BLOCK_COMMENT_MODE, o.C_LINE_COMMENT_MODE], "object-key-init")
        }, "var-init"),
        f = cc11001100_hook("f", [o.APOS_STRING_MODE, o.QUOTE_STRING_MODE, A, p, _, {
          match: cc11001100_hook("match", /\$\d+/, "object-key-init")
        }, E], "var-init");
      y.contains = cc11001100_hook("y.contains", f.concat({
        begin: cc11001100_hook("begin", /\{/, "object-key-init"),
        end: cc11001100_hook("end", /\}/, "object-key-init"),
        keywords: cc11001100_hook("keywords", g, "object-key-init"),
        contains: cc11001100_hook("contains", ["self"].concat(f), "object-key-init")
      }), "assign");
      var h = cc11001100_hook("h", [].concat(N, y.contains), "var-init"),
        v = cc11001100_hook("v", h.concat([{
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init"),
          contains: cc11001100_hook("contains", ["self"].concat(h), "object-key-init")
        }]), "var-init"),
        S = cc11001100_hook("S", {
          className: cc11001100_hook("className", "params", "object-key-init"),
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init"),
          contains: cc11001100_hook("contains", v, "object-key-init")
        }, "var-init"),
        w = cc11001100_hook("w", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/class/, /\s+/, d, /\s+/, /extends/, /\s+/, l.concat(d, "(", l.concat(/\./, d), ")*")], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "keyword", "object-key-init"),
              3: cc11001100_hook(3, "title.class", "object-key-init"),
              5: cc11001100_hook(5, "keyword", "object-key-init"),
              7: cc11001100_hook(7, "title.class.inherited", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [/class/, /\s+/, d], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "keyword", "object-key-init"),
              3: cc11001100_hook(3, "title.class", "object-key-init")
            }
          }], "object-key-init")
        }, "var-init"),
        R = cc11001100_hook("R", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", l.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/), "object-key-init"),
          className: cc11001100_hook("className", "title.class", "object-key-init"),
          keywords: {
            _: cc11001100_hook("_", [].concat(t, s), "object-key-init")
          }
        }, "var-init"),
        x = cc11001100_hook("x", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/function/, /\s+/, d, /(?=\s*\()/], "object-key-init")
          }, {
            match: cc11001100_hook("match", [/function/, /\s*(?=\()/], "object-key-init")
          }], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          label: cc11001100_hook("label", "func.def", "object-key-init"),
          contains: cc11001100_hook("contains", [S], "object-key-init"),
          illegal: cc11001100_hook("illegal", /%/, "object-key-init")
        }, "var-init"),
        k = cc11001100_hook("k", {
          match: cc11001100_hook("match", l.concat(/\b/, (O = cc11001100_hook("O", [].concat(c, ["super", "import"]), "assign"), l.concat("(?!", O.join("|"), ")")), d, l.lookahead(/\(/)), "object-key-init"),
          className: cc11001100_hook("className", "title.function", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      var O;
      var I = cc11001100_hook("I", {
          begin: cc11001100_hook("begin", l.concat(/\./, l.lookahead(l.concat(d, /(?![0-9A-Za-z$_(])/))), "object-key-init"),
          end: cc11001100_hook("end", d, "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", "prototype", "object-key-init"),
          className: cc11001100_hook("className", "property", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        C = cc11001100_hook("C", {
          match: cc11001100_hook("match", [/get|set/, /\s+/, d, /(?=\()/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\(\)/, "object-key-init")
          }, S], "object-key-init")
        }, "var-init"),
        T = cc11001100_hook("T", "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + o.UNDERSCORE_IDENT_RE + ")\\s*=>", "var-init"),
        M = cc11001100_hook("M", {
          match: cc11001100_hook("match", [/const|var|let/, /\s+/, d, /\s*/, /=\s*/, /(async\s*)?/, l.lookahead(T)], "object-key-init"),
          keywords: cc11001100_hook("keywords", "async", "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [S], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Javascript", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["js", "jsx", "mjs", "cjs"], "object-key-init"),
        keywords: cc11001100_hook("keywords", g, "object-key-init"),
        exports: {
          PARAMS_CONTAINS: cc11001100_hook("PARAMS_CONTAINS", v, "object-key-init"),
          CLASS_REFERENCE: cc11001100_hook("CLASS_REFERENCE", R, "object-key-init")
        },
        illegal: cc11001100_hook("illegal", /#(?![$_A-z])/, "object-key-init"),
        contains: cc11001100_hook("contains", [o.SHEBANG({
          label: cc11001100_hook("label", "shebang", "object-key-init"),
          binary: cc11001100_hook("binary", "node", "object-key-init"),
          relevance: cc11001100_hook("relevance", 5, "object-key-init")
        }), {
          label: cc11001100_hook("label", "use_strict", "object-key-init"),
          className: cc11001100_hook("className", "meta", "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init"),
          begin: cc11001100_hook("begin", /^\s*['"]use (strict|asm)['"]/, "object-key-init")
        }, o.APOS_STRING_MODE, o.QUOTE_STRING_MODE, A, p, _, N, {
          match: cc11001100_hook("match", /\$\d+/, "object-key-init")
        }, E, R, {
          className: cc11001100_hook("className", "attr", "object-key-init"),
          begin: cc11001100_hook("begin", d + l.lookahead(":"), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, M, {
          begin: cc11001100_hook("begin", "(" + o.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*", "object-key-init"),
          keywords: cc11001100_hook("keywords", "return throw case", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [N, o.REGEXP_MODE, {
            className: cc11001100_hook("className", "function", "object-key-init"),
            begin: cc11001100_hook("begin", T, "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            end: cc11001100_hook("end", "\\s*=>", "object-key-init"),
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "params", "object-key-init"),
              variants: cc11001100_hook("variants", [{
                begin: cc11001100_hook("begin", o.UNDERSCORE_IDENT_RE, "object-key-init"),
                relevance: cc11001100_hook("relevance", 0, "object-key-init")
              }, {
                className: cc11001100_hook("className", null, "object-key-init"),
                begin: cc11001100_hook("begin", /\(\s*\)/, "object-key-init"),
                skip: cc11001100_hook("skip", !0, "object-key-init")
              }, {
                begin: cc11001100_hook("begin", /\(/, "object-key-init"),
                end: cc11001100_hook("end", /\)/, "object-key-init"),
                excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
                excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
                keywords: cc11001100_hook("keywords", g, "object-key-init"),
                contains: cc11001100_hook("contains", v, "object-key-init")
              }], "object-key-init")
            }], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /,/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\s+/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", "<>", "object-key-init"),
              end: cc11001100_hook("end", "</>", "object-key-init")
            }, {
              match: cc11001100_hook("match", /<[A-Za-z0-9\\._:-]+\s*\/>/, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", b.begin, "object-key-init"),
              "on:begin": cc11001100_hook("on:begin", b.isTrulyOpeningTag, "object-key-init"),
              end: cc11001100_hook("end", b.end, "object-key-init")
            }], "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", b.begin, "object-key-init"),
              end: cc11001100_hook("end", b.end, "object-key-init"),
              skip: cc11001100_hook("skip", !0, "object-key-init"),
              contains: cc11001100_hook("contains", ["self"], "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, x, {
          beginKeywords: cc11001100_hook("beginKeywords", "while if switch catch for", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b(?!function)" + o.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          label: cc11001100_hook("label", "func.def", "object-key-init"),
          contains: cc11001100_hook("contains", [S, o.inherit(o.TITLE_MODE, {
            begin: cc11001100_hook("begin", d, "object-key-init"),
            className: cc11001100_hook("className", "title.function", "object-key-init")
          })], "object-key-init")
        }, {
          match: cc11001100_hook("match", /\.\.\./, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, I, {
          match: cc11001100_hook("match", "\\$" + d, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          match: cc11001100_hook("match", [/\bconstructor(?=\s*\()/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [S], "object-key-init")
        }, k, {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", /\b[A-Z][A-Z_0-9]+\b/, "object-key-init"),
          className: cc11001100_hook("className", "variable.constant", "object-key-init")
        }, w, C, {
          match: cc11001100_hook("match", /\$[(.]/, "object-key-init")
        }], "object-key-init")
      };
    }
    return function (t) {
      var s = cc11001100_hook("s", o(t), "var-init"),
        c = cc11001100_hook("c", ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"], "var-init"),
        l = cc11001100_hook("l", {
          beginKeywords: cc11001100_hook("beginKeywords", "namespace", "object-key-init"),
          end: cc11001100_hook("end", /\{/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [s.exports.CLASS_REFERENCE], "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", {
          beginKeywords: cc11001100_hook("beginKeywords", "interface", "object-key-init"),
          end: cc11001100_hook("end", /\{/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "interface extends", "object-key-init"),
            built_in: cc11001100_hook("built_in", c, "object-key-init")
          },
          contains: cc11001100_hook("contains", [s.exports.CLASS_REFERENCE], "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", {
          $pattern: cc11001100_hook("$pattern", e, "object-key-init"),
          keyword: cc11001100_hook("keyword", n.concat(["type", "namespace", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override"]), "object-key-init"),
          literal: cc11001100_hook("literal", a, "object-key-init"),
          built_in: cc11001100_hook("built_in", i.concat(c), "object-key-init"),
          "variable.language": cc11001100_hook("variable.language", r, "object-key-init")
        }, "var-init"),
        g = cc11001100_hook("g", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@[A-Za-z$_][0-9A-Za-z$_]*", "object-key-init")
        }, "var-init"),
        u = function u(e, n, a) {
          var t = cc11001100_hook("t", e.contains.findIndex(function (e) {
            return e.label === n;
          }), "var-init");
          if (-1 === t) throw Error("can not find mode to replace");
          e.contains.splice(t, 1, a);
        };
      return Object.assign(s.keywords, b), s.exports.PARAMS_CONTAINS.push(g), s.contains = cc11001100_hook("s.contains", s.contains.concat([g, l, d]), "assign"), u(s, "shebang", t.SHEBANG()), u(s, "use_strict", {
        className: cc11001100_hook("className", "meta", "object-key-init"),
        relevance: cc11001100_hook("relevance", 10, "object-key-init"),
        begin: cc11001100_hook("begin", /^\s*['"]use strict['"]/, "object-key-init")
      }), s.contains.find(function (e) {
        return "func.def" === e.label;
      }).relevance = cc11001100_hook("s.contains.find(function (e) {\n  return \"func.def\" === e.label;\n}).relevance", 0, "assign"), Object.assign(s, {
        name: cc11001100_hook("name", "TypeScript", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["ts", "tsx"], "object-key-init")
      }), s;
    };
  }(), "var-init");
  hljs.registerLanguage("typescript", e);
})(); /*! `crystal` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", "(_?[ui](8|16|32|64|128))?", "var-init"),
        i = cc11001100_hook("i", "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?", "var-init"),
        s = cc11001100_hook("s", "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?", "var-init"),
        a = cc11001100_hook("a", {
          $pattern: cc11001100_hook("$pattern", "[a-zA-Z_]\\w*[!?=]?", "object-key-init"),
          keyword: cc11001100_hook("keyword", "abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__", "object-key-init"),
          literal: cc11001100_hook("literal", "false nil true", "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /#\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", a, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "template-variable", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\{\\{", "object-key-init"),
            end: cc11001100_hook("end", "\\}\\}", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\{%", "object-key-init"),
            end: cc11001100_hook("end", "%\\}", "object-key-init")
          }], "object-key-init"),
          keywords: cc11001100_hook("keywords", a, "object-key-init")
        }, "var-init");
      function r(e, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        var i = cc11001100_hook("i", [{
          begin: cc11001100_hook("begin", e, "object-key-init"),
          end: cc11001100_hook("end", n, "object-key-init")
        }], "var-init");
        return i[0].contains = cc11001100_hook("i[0].contains", i, "assign"), i;
      }
      var l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, t], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /`/, "object-key-init"),
            end: cc11001100_hook("end", /`/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%[Qwi]?\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            contains: cc11001100_hook("contains", r("\\(", "\\)"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%[Qwi]?\\[", "object-key-init"),
            end: cc11001100_hook("end", "\\]", "object-key-init"),
            contains: cc11001100_hook("contains", r("\\[", "\\]"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%[Qwi]?\\{", "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init"),
            contains: cc11001100_hook("contains", r(/\{/, /\}/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%[Qwi]?<", "object-key-init"),
            end: cc11001100_hook("end", ">", "object-key-init"),
            contains: cc11001100_hook("contains", r("<", ">"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%[Qwi]?\\|", "object-key-init"),
            end: cc11001100_hook("end", "\\|", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /<<-\w+$/, "object-key-init"),
            end: cc11001100_hook("end", /^\s*\w+$/, "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "%q\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            contains: cc11001100_hook("contains", r("\\(", "\\)"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%q\\[", "object-key-init"),
            end: cc11001100_hook("end", "\\]", "object-key-init"),
            contains: cc11001100_hook("contains", r("\\[", "\\]"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%q\\{", "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init"),
            contains: cc11001100_hook("contains", r(/\{/, /\}/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%q<", "object-key-init"),
            end: cc11001100_hook("end", ">", "object-key-init"),
            contains: cc11001100_hook("contains", r("<", ">"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%q\\|", "object-key-init"),
            end: cc11001100_hook("end", "\\|", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /<<-'\w+'$/, "object-key-init"),
            end: cc11001100_hook("end", /^\s*\w+$/, "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          begin: cc11001100_hook("begin", "(?!%\\})(" + e.RE_STARTERS_RE + "|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*", "object-key-init"),
          keywords: cc11001100_hook("keywords", "case if select unless until when while", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "regexp", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, t], "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", "//[a-z]*", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "/(?!\\/)", "object-key-init"),
              end: cc11001100_hook("end", "/[a-z]*", "object-key-init")
            }], "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        g = cc11001100_hook("g", [c, l, b, {
          className: cc11001100_hook("className", "regexp", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, t], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "%r\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            contains: cc11001100_hook("contains", r("\\(", "\\)"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%r\\[", "object-key-init"),
            end: cc11001100_hook("end", "\\]", "object-key-init"),
            contains: cc11001100_hook("contains", r("\\[", "\\]"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%r\\{", "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init"),
            contains: cc11001100_hook("contains", r(/\{/, /\}/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%r<", "object-key-init"),
            end: cc11001100_hook("end", ">", "object-key-init"),
            contains: cc11001100_hook("contains", r("<", ">"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%r\\|", "object-key-init"),
            end: cc11001100_hook("end", "\\|", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, o, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@\\[", "object-key-init"),
          end: cc11001100_hook("end", "\\]", "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.QUOTE_STRING_MODE, {
            className: cc11001100_hook("className", "string", "object-key-init")
          })], "object-key-init")
        }, {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])", "object-key-init")
        }, e.HASH_COMMENT_MODE, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "class module struct", "object-key-init"),
          end: cc11001100_hook("end", "$|;", "object-key-init"),
          illegal: cc11001100_hook("illegal", /=/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", s, "object-key-init")
          }), {
            begin: cc11001100_hook("begin", "<", "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "lib enum union", "object-key-init"),
          end: cc11001100_hook("end", "$|;", "object-key-init"),
          illegal: cc11001100_hook("illegal", /=/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", s, "object-key-init")
          })], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "annotation", "object-key-init"),
          end: cc11001100_hook("end", "$|;", "object-key-init"),
          illegal: cc11001100_hook("illegal", /=/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", s, "object-key-init")
          })], "object-key-init"),
          relevance: cc11001100_hook("relevance", 2, "object-key-init")
        }, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "def", "object-key-init"),
          end: cc11001100_hook("end", /\B\b/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", i, "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
          })], "object-key-init")
        }, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "fun macro", "object-key-init"),
          end: cc11001100_hook("end", /\B\b/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", i, "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
          })], "object-key-init"),
          relevance: cc11001100_hook("relevance", 2, "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE + "(!|\\?)?:", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", ":", "object-key-init"),
          contains: cc11001100_hook("contains", [l, {
            begin: cc11001100_hook("begin", i, "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b0b([01_]+)" + n, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0o([0-7_]+)" + n, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0x([A-Fa-f0-9_]+)" + n, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?(_?f(32|64))?(?!_)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b([1-9][0-9_]*|0)" + n, "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }], "var-init");
      return t.contains = cc11001100_hook("t.contains", g, "assign"), c.contains = cc11001100_hook("c.contains", g.slice(1), "assign"), {
        name: cc11001100_hook("name", "Crystal", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["cr"], "object-key-init"),
        keywords: cc11001100_hook("keywords", a, "object-key-init"),
        contains: cc11001100_hook("contains", g, "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("crystal", e);
})(); /*! `kotlin` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    var e = cc11001100_hook("e", "\\.([0-9](_*[0-9])*)", "var-init"),
      n = cc11001100_hook("n", "[0-9a-fA-F](_*[0-9a-fA-F])*", "var-init"),
      a = cc11001100_hook("a", {
        className: cc11001100_hook("className", "number", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", "(\\b([0-9](_*[0-9])*)((".concat(e, ")|\\.)?|(").concat(e, "))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b"), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b([0-9](_*[0-9])*)((".concat(e, ")[fFdD]?\\b|\\.([fFdD]\\b)?)"), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "(".concat(e, ")[fFdD]?\\b"), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b([0-9](_*[0-9])*)[fFdD]\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0[xX]((".concat(n, ")\\.?|(").concat(n, ")?\\.(").concat(n, "))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b"), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b(0|[1-9](_*[0-9])*)[lL]?\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0[xX](".concat(n, ")[lL]?\\b"), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0(_*[0-7])*[lL]?\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0[bB][01](_*[01])*[lL]?\\b", "object-key-init")
        }], "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, "var-init");
    return function (e) {
      var n = cc11001100_hook("n", {
          keyword: cc11001100_hook("keyword", "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual", "object-key-init"),
          built_in: cc11001100_hook("built_in", "Byte Short Char Int Long Boolean Float Double Void Unit Nothing", "object-key-init"),
          literal: cc11001100_hook("literal", "true false null", "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE + "@", "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\$\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_NUMBER_MODE], "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", "\\$" + e.UNDERSCORE_IDENT_RE, "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", '"""', "object-key-init"),
            end: cc11001100_hook("end", '"""(?=[^"])', "object-key-init"),
            contains: cc11001100_hook("contains", [t, s], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, t, s], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      s.contains.push(r);
      var l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?", "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@" + e.UNDERSCORE_IDENT_RE, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.inherit(r, {
              className: cc11001100_hook("className", "string", "object-key-init")
            }), "self"], "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", a, "var-init"),
        b = cc11001100_hook("b", e.COMMENT("/\\*", "\\*/", {
          contains: cc11001100_hook("contains", [e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }), "var-init"),
        E = cc11001100_hook("E", {
          variants: cc11001100_hook("variants", [{
            className: cc11001100_hook("className", "type", "object-key-init"),
            begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            contains: cc11001100_hook("contains", [], "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", E, "var-init");
      return d.variants[1].contains = cc11001100_hook("d.variants[1].contains", [E], "assign"), E.variants[1].contains = cc11001100_hook("E.variants[1].contains", [d], "assign"), {
        name: cc11001100_hook("name", "Kotlin", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["kt", "kts"], "object-key-init"),
        keywords: cc11001100_hook("keywords", n, "object-key-init"),
        contains: cc11001100_hook("contains", [e.COMMENT("/\\*\\*", "\\*/", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
          }], "object-key-init")
        }), e.C_LINE_COMMENT_MODE, b, {
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          begin: cc11001100_hook("begin", /\b(break|continue|return|this)\b/, "object-key-init"),
          starts: {
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "symbol", "object-key-init"),
              begin: cc11001100_hook("begin", /@\w+/, "object-key-init")
            }], "object-key-init")
          }
        }, i, l, c, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "fun", "object-key-init"),
          end: cc11001100_hook("end", "[(]|$", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", n, "object-key-init"),
          relevance: cc11001100_hook("relevance", 5, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE + "\\s*\\(", "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [e.UNDERSCORE_TITLE_MODE], "object-key-init")
          }, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            begin: cc11001100_hook("begin", /</, "object-key-init"),
            end: cc11001100_hook("end", />/, "object-key-init"),
            keywords: cc11001100_hook("keywords", "reified", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
            keywords: cc11001100_hook("keywords", n, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", /:/, "object-key-init"),
              end: cc11001100_hook("end", /[=,\/]/, "object-key-init"),
              endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
              contains: cc11001100_hook("contains", [E, e.C_LINE_COMMENT_MODE, b], "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, e.C_LINE_COMMENT_MODE, b, l, c, r, e.C_NUMBER_MODE], "object-key-init")
          }, b], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", [/class|interface|trait/, /\s+/, e.UNDERSCORE_IDENT_RE], "object-key-init"),
          beginScope: {
            3: cc11001100_hook(3, "title.class", "object-key-init")
          },
          keywords: cc11001100_hook("keywords", "class interface trait", "object-key-init"),
          end: cc11001100_hook("end", /[:\{(]|$/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", "extends implements", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "public protected internal private constructor", "object-key-init")
          }, e.UNDERSCORE_TITLE_MODE, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            begin: cc11001100_hook("begin", /</, "object-key-init"),
            end: cc11001100_hook("end", />/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            begin: cc11001100_hook("begin", /[,:]\s*/, "object-key-init"),
            end: cc11001100_hook("end", /[<\(,){\s]|$/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init")
          }, l, c], "object-key-init")
        }, r, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "^#!/usr/bin/env", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          illegal: cc11001100_hook("illegal", "\n", "object-key-init")
        }, o], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("kotlin", e);
})(); /*! `vbscript` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var t = cc11001100_hook("t", e.regex, "var-init"),
        r = cc11001100_hook("r", ["lcase", "month", "vartype", "instrrev", "ubound", "setlocale", "getobject", "rgb", "getref", "string", "weekdayname", "rnd", "dateadd", "monthname", "now", "day", "minute", "isarray", "cbool", "round", "formatcurrency", "conversions", "csng", "timevalue", "second", "year", "space", "abs", "clng", "timeserial", "fixs", "len", "asc", "isempty", "maths", "dateserial", "atn", "timer", "isobject", "filter", "weekday", "datevalue", "ccur", "isdate", "instr", "datediff", "formatdatetime", "replace", "isnull", "right", "sgn", "array", "snumeric", "log", "cdbl", "hex", "chr", "lbound", "msgbox", "ucase", "getlocale", "cos", "cdate", "cbyte", "rtrim", "join", "hour", "oct", "typename", "trim", "strcomp", "int", "createobject", "loadpicture", "tan", "formatnumber", "mid", "split", "cint", "sin", "datepart", "ltrim", "sqr", "time", "derived", "eval", "date", "formatpercent", "exp", "inputbox", "left", "ascw", "chrw", "regexp", "cstr", "err"], "var-init");
      return {
        name: cc11001100_hook("name", "VBScript", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["vbs"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        keywords: {
          keyword: cc11001100_hook("keyword", ["call", "class", "const", "dim", "do", "loop", "erase", "execute", "executeglobal", "exit", "for", "each", "next", "function", "if", "then", "else", "on", "error", "option", "explicit", "new", "private", "property", "let", "get", "public", "randomize", "redim", "rem", "select", "case", "set", "stop", "sub", "while", "wend", "with", "end", "to", "elseif", "is", "or", "xor", "and", "not", "class_initialize", "class_terminate", "default", "preserve", "in", "me", "byval", "byref", "step", "resume", "goto"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["server", "response", "request", "scriptengine", "scriptenginebuildversion", "scriptengineminorversion", "scriptenginemajorversion"], "object-key-init"),
          literal: cc11001100_hook("literal", ["true", "false", "null", "nothing", "empty"], "object-key-init")
        },
        illegal: cc11001100_hook("illegal", "//", "object-key-init"),
        contains: cc11001100_hook("contains", [{
          begin: cc11001100_hook("begin", t.concat(t.either.apply(t, r), "\\s*\\("), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: {
            built_in: cc11001100_hook("built_in", r, "object-key-init")
          }
        }, e.inherit(e.QUOTE_STRING_MODE, {
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }], "object-key-init")
        }), e.COMMENT(/'/, /$/, {
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }), e.C_NUMBER_MODE], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("vbscript", e);
})(); /*! `cpp` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var t = cc11001100_hook("t", e.regex, "var-init"),
        a = cc11001100_hook("a", e.COMMENT("//", "$", {
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        n = cc11001100_hook("n", "[a-zA-Z_]\\w*::", "var-init"),
        r = cc11001100_hook("r", "(?!struct)(decltype\\(auto\\)|" + t.optional(n) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b[a-z\\d_]*_t\\b", "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", '(u8?|U|L)?"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            illegal: cc11001100_hook("illegal", ".", "object-key-init")
          }, e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)([^()\\ ]{0,16})"/, "object-key-init")
          })], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b(0b[01']+)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /#\s*[a-z]+\b/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include", "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, e.inherit(s, {
            className: cc11001100_hook("className", "string", "object-key-init")
          }), {
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /<.*?>/, "object-key-init")
          }, a, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "title", "object-key-init"),
          begin: cc11001100_hook("begin", t.optional(n) + e.IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", t.optional(n) + e.IDENT_RE + "\\s*\\(", "var-init"),
        u = cc11001100_hook("u", {
          type: cc11001100_hook("type", ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"], "object-key-init"),
          keyword: cc11001100_hook("keyword", ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"], "object-key-init"),
          literal: cc11001100_hook("literal", ["NULL", "false", "nullopt", "nullptr", "true"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["_Pragma"], "object-key-init"),
          _type_hints: cc11001100_hook("_type_hints", ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"], "object-key-init")
        }, "var-init"),
        p = cc11001100_hook("p", {
          className: cc11001100_hook("className", "function.dispatch", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: {
            _hint: cc11001100_hook("_hint", ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"], "object-key-init")
          },
          begin: cc11001100_hook("begin", t.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, t.lookahead(/(<[^<>]+>|)\s*\(/)), "object-key-init")
        }, "var-init"),
        _ = cc11001100_hook("_", [p, o, i, a, e.C_BLOCK_COMMENT_MODE, c, s], "var-init"),
        m = cc11001100_hook("m", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /=/, "object-key-init"),
            end: cc11001100_hook("end", /;/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init")
          }, {
            beginKeywords: cc11001100_hook("beginKeywords", "new throw return else", "object-key-init"),
            end: cc11001100_hook("end", /;/, "object-key-init")
          }], "object-key-init"),
          keywords: cc11001100_hook("keywords", u, "object-key-init"),
          contains: cc11001100_hook("contains", _.concat([{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", u, "object-key-init"),
            contains: cc11001100_hook("contains", _.concat(["self"]), "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }]), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        g = cc11001100_hook("g", {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", "(" + r + "[\\*&\\s]+)+" + d, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", u, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\w\s\*&:<>.]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "decltype\\(auto\\)", "object-key-init"),
            keywords: cc11001100_hook("keywords", u, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", d, "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [l], "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /::/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /:/, "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [s, c], "object-key-init")
          }, {
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            match: cc11001100_hook("match", /,/, "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", u, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [a, e.C_BLOCK_COMMENT_MODE, s, c, i, {
              begin: cc11001100_hook("begin", /\(/, "object-key-init"),
              end: cc11001100_hook("end", /\)/, "object-key-init"),
              keywords: cc11001100_hook("keywords", u, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init"),
              contains: cc11001100_hook("contains", ["self", a, e.C_BLOCK_COMMENT_MODE, s, c, i], "object-key-init")
            }], "object-key-init")
          }, i, a, e.C_BLOCK_COMMENT_MODE, o], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "C++", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"], "object-key-init"),
        keywords: cc11001100_hook("keywords", u, "object-key-init"),
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        classNameAliases: {
          "function.dispatch": cc11001100_hook("function.dispatch", "built_in", "object-key-init")
        },
        contains: cc11001100_hook("contains", [].concat(m, g, p, _, [o, {
          begin: cc11001100_hook("begin", "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)", "object-key-init"),
          end: cc11001100_hook("end", ">", "object-key-init"),
          keywords: cc11001100_hook("keywords", u, "object-key-init"),
          contains: cc11001100_hook("contains", ["self", i], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "::", "object-key-init"),
          keywords: cc11001100_hook("keywords", u, "object-key-init")
        }, {
          match: cc11001100_hook("match", [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          }
        }]), "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("cpp", e);
})(); /*! `less` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    var e = cc11001100_hook("e", ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"], "var-init"),
      t = cc11001100_hook("t", ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"], "var-init"),
      r = cc11001100_hook("r", ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"], "var-init"),
      i = cc11001100_hook("i", ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"], "var-init"),
      o = cc11001100_hook("o", ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse(), "var-init"),
      n = cc11001100_hook("n", r.concat(i), "var-init");
    return function (a) {
      var l = cc11001100_hook("l", function (e) {
          return {
            IMPORTANT: {
              scope: cc11001100_hook("scope", "meta", "object-key-init"),
              begin: cc11001100_hook("begin", "!important", "object-key-init")
            },
            BLOCK_COMMENT: cc11001100_hook("BLOCK_COMMENT", e.C_BLOCK_COMMENT_MODE, "object-key-init"),
            HEXCOLOR: {
              scope: cc11001100_hook("scope", "number", "object-key-init"),
              begin: cc11001100_hook("begin", /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/, "object-key-init")
            },
            FUNCTION_DISPATCH: {
              className: cc11001100_hook("className", "built_in", "object-key-init"),
              begin: cc11001100_hook("begin", /[\w-]+(?=\()/, "object-key-init")
            },
            ATTRIBUTE_SELECTOR_MODE: {
              scope: cc11001100_hook("scope", "selector-attr", "object-key-init"),
              begin: cc11001100_hook("begin", /\[/, "object-key-init"),
              end: cc11001100_hook("end", /\]/, "object-key-init"),
              illegal: cc11001100_hook("illegal", "$", "object-key-init"),
              contains: cc11001100_hook("contains", [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "object-key-init")
            },
            CSS_NUMBER_MODE: {
              scope: cc11001100_hook("scope", "number", "object-key-init"),
              begin: cc11001100_hook("begin", e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            },
            CSS_VARIABLE: {
              className: cc11001100_hook("className", "attr", "object-key-init"),
              begin: cc11001100_hook("begin", /--[A-Za-z][A-Za-z0-9_-]*/, "object-key-init")
            }
          };
        }(a), "var-init"),
        s = cc11001100_hook("s", n, "var-init"),
        d = cc11001100_hook("d", "([\\w-]+|@\\{[\\w-]+\\})", "var-init"),
        c = cc11001100_hook("c", [], "var-init"),
        g = cc11001100_hook("g", [], "var-init"),
        b = function b(e) {
          return {
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", "~?" + e + ".*?" + e, "object-key-init")
          };
        },
        m = function m(e, t, r) {
          return {
            className: cc11001100_hook("className", e, "object-key-init"),
            begin: cc11001100_hook("begin", t, "object-key-init"),
            relevance: cc11001100_hook("relevance", r, "object-key-init")
          };
        },
        p = cc11001100_hook("p", {
          $pattern: cc11001100_hook("$pattern", /[a-z-]+/, "object-key-init"),
          keyword: cc11001100_hook("keyword", "and or not only", "object-key-init"),
          attribute: cc11001100_hook("attribute", t.join(" "), "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", {
          begin: cc11001100_hook("begin", "\\(", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          contains: cc11001100_hook("contains", g, "object-key-init"),
          keywords: cc11001100_hook("keywords", p, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      g.push(a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, b("'"), b('"'), l.CSS_NUMBER_MODE, {
        begin: cc11001100_hook("begin", "(url|data-uri)\\(", "object-key-init"),
        starts: {
          className: cc11001100_hook("className", "string", "object-key-init"),
          end: cc11001100_hook("end", "[\\)\\n]", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
        }
      }, l.HEXCOLOR, u, m("variable", "@@?[\\w-]+", 10), m("variable", "@\\{[\\w-]+\\}"), m("built_in", "~?`[^`]*?`"), {
        className: cc11001100_hook("className", "attribute", "object-key-init"),
        begin: cc11001100_hook("begin", "[\\w-]+\\s*:", "object-key-init"),
        end: cc11001100_hook("end", ":", "object-key-init"),
        returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
        excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
      }, l.IMPORTANT, {
        beginKeywords: cc11001100_hook("beginKeywords", "and not", "object-key-init")
      }, l.FUNCTION_DISPATCH);
      var h = cc11001100_hook("h", g.concat({
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          contains: cc11001100_hook("contains", c, "object-key-init")
        }), "var-init"),
        f = cc11001100_hook("f", {
          beginKeywords: cc11001100_hook("beginKeywords", "when", "object-key-init"),
          endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "and not", "object-key-init")
          }].concat(g), "object-key-init")
        }, "var-init"),
        k = cc11001100_hook("k", {
          begin: cc11001100_hook("begin", d + "\\s*:", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /[;}]/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /-(webkit|moz|ms|o)-/, "object-key-init")
          }, l.CSS_VARIABLE, {
            className: cc11001100_hook("className", "attribute", "object-key-init"),
            begin: cc11001100_hook("begin", "\\b(" + o.join("|") + ")\\b", "object-key-init"),
            end: cc11001100_hook("end", /(?=:)/, "object-key-init"),
            starts: {
              endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
              illegal: cc11001100_hook("illegal", "[<=$]", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init"),
              contains: cc11001100_hook("contains", g, "object-key-init")
            }
          }], "object-key-init")
        }, "var-init"),
        w = cc11001100_hook("w", {
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          begin: cc11001100_hook("begin", "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b", "object-key-init"),
          starts: {
            end: cc11001100_hook("end", "[;{}]", "object-key-init"),
            keywords: cc11001100_hook("keywords", p, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            contains: cc11001100_hook("contains", g, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }
        }, "var-init"),
        v = cc11001100_hook("v", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "@[\\w-]+\\s*:", "object-key-init"),
            relevance: cc11001100_hook("relevance", 15, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "@[\\w-]+", "object-key-init")
          }], "object-key-init"),
          starts: {
            end: cc11001100_hook("end", "[;}]", "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            contains: cc11001100_hook("contains", h, "object-key-init")
          }
        }, "var-init"),
        y = cc11001100_hook("y", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "[\\.#:&\\[>]", "object-key-init"),
            end: cc11001100_hook("end", "[;{}]", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", d, "object-key-init"),
            end: cc11001100_hook("end", /\{/, "object-key-init")
          }], "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", "[<='$\"]", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, f, m("keyword", "all\\b"), m("variable", "@\\{[\\w-]+\\}"), {
            begin: cc11001100_hook("begin", "\\b(" + e.join("|") + ")\\b", "object-key-init"),
            className: cc11001100_hook("className", "selector-tag", "object-key-init")
          }, l.CSS_NUMBER_MODE, m("selector-tag", d, 0), m("selector-id", "#" + d), m("selector-class", "\\." + d, 0), m("selector-tag", "&", 0), l.ATTRIBUTE_SELECTOR_MODE, {
            className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
            begin: cc11001100_hook("begin", ":(" + r.join("|") + ")", "object-key-init")
          }, {
            className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
            begin: cc11001100_hook("begin", ":(:)?(" + i.join("|") + ")", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", h, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "!important", "object-key-init")
          }, l.FUNCTION_DISPATCH], "object-key-init")
        }, "var-init"),
        x = cc11001100_hook("x", {
          begin: cc11001100_hook("begin", "[\\w-]+:(:)?(".concat(s.join("|"), ")"), "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [y], "object-key-init")
        }, "var-init");
      return c.push(a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, w, v, x, k, y, f, l.FUNCTION_DISPATCH), {
        name: cc11001100_hook("name", "Less", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", "[=>'/<($\"]", "object-key-init"),
        contains: cc11001100_hook("contains", c, "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("less", e);
})(); /*! `perl` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", e.regex, "var-init"),
        t = cc11001100_hook("t", /[dualxmsipngr]{0,12}/, "var-init"),
        r = cc11001100_hook("r", {
          $pattern: cc11001100_hook("$pattern", /[\w.]+/, "object-key-init"),
          keyword: cc11001100_hook("keyword", "abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0", "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", "[$@]\\{", "object-key-init"),
          end: cc11001100_hook("end", "\\}", "object-key-init"),
          keywords: cc11001100_hook("keywords", r, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          begin: cc11001100_hook("begin", /->\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\$\d/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /[$%@][^\s\w{]/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", [e.BACKSLASH_ESCAPE, s, a], "var-init"),
        o = cc11001100_hook("o", [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/], "var-init"),
        g = function g(e, r) {
          var s = cc11001100_hook("s", arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "\\1", "var-init");
          var i = cc11001100_hook("i", "\\1" === s ? s : n.concat(s, r), "var-init");
          return n.concat(n.concat("(?:", e, ")"), r, /(?:\\.|[^\\\/])*?/, i, /(?:\\.|[^\\\/])*?/, s, t);
        },
        l = function l(e, r, s) {
          return n.concat(n.concat("(?:", e, ")"), r, /(?:\\.|[^\\\/])*?/, s, t);
        },
        d = cc11001100_hook("d", [a, e.HASH_COMMENT_MODE, e.COMMENT(/^=\w/, /=cut/, {
          endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init")
        }), i, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          contains: cc11001100_hook("contains", c, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "q[qwxr]?\\s*\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "q[qwxr]?\\s*\\[", "object-key-init"),
            end: cc11001100_hook("end", "\\]", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "q[qwxr]?\\s*\\{", "object-key-init"),
            end: cc11001100_hook("end", "\\}", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "q[qwxr]?\\s*\\|", "object-key-init"),
            end: cc11001100_hook("end", "\\|", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "q[qwxr]?\\s*<", "object-key-init"),
            end: cc11001100_hook("end", ">", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "qw\\s+q", "object-key-init"),
            end: cc11001100_hook("end", "q", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "`", "object-key-init"),
            end: cc11001100_hook("end", "`", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\{\w+\}/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "-?\\w+\\s*=>", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          begin: cc11001100_hook("begin", "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*", "object-key-init"),
          keywords: cc11001100_hook("keywords", "split return print reverse grep", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.HASH_COMMENT_MODE, {
            className: cc11001100_hook("className", "regexp", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", g("s|tr|y", n.either.apply(n, o.concat([{
                capture: cc11001100_hook("capture", !0, "object-key-init")
              }]))), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", g("s|tr|y", "\\(", "\\)"), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", g("s|tr|y", "\\[", "\\]"), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", g("s|tr|y", "\\{", "\\}"), "object-key-init")
            }], "object-key-init"),
            relevance: cc11001100_hook("relevance", 2, "object-key-init")
          }, {
            className: cc11001100_hook("className", "regexp", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", /(m|qr)\/\//, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", l("(?:m|qr)?", /\//, /\//), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", l("m|qr", n.either.apply(n, o.concat([{
                capture: cc11001100_hook("capture", !0, "object-key-init")
              }])), /\1/), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", l("m|qr", /\(/, /\)/), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", l("m|qr", /\[/, /\]/), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", l("m|qr", /\{/, /\}/), "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "sub", "object-key-init"),
          end: cc11001100_hook("end", "(\\s*\\(.*?\\))?[;{]", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 5, "object-key-init"),
          contains: cc11001100_hook("contains", [e.TITLE_MODE], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "-\\w\\b", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "^__DATA__$", "object-key-init"),
          end: cc11001100_hook("end", "^__END__$", "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "mojolicious", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "^@@.*", "object-key-init"),
            end: cc11001100_hook("end", "$", "object-key-init"),
            className: cc11001100_hook("className", "comment", "object-key-init")
          }], "object-key-init")
        }], "var-init");
      return s.contains = cc11001100_hook("s.contains", d, "assign"), i.contains = cc11001100_hook("i.contains", d, "assign"), {
        name: cc11001100_hook("name", "Perl", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["pl", "pm"], "object-key-init"),
        keywords: cc11001100_hook("keywords", r, "object-key-init"),
        contains: cc11001100_hook("contains", d, "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("perl", e);
})(); /*! `sql` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var r = cc11001100_hook("r", e.regex, "var-init"),
        t = cc11001100_hook("t", e.COMMENT("--", "$"), "var-init"),
        n = cc11001100_hook("n", ["true", "false", "unknown"], "var-init"),
        a = cc11001100_hook("a", ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"], "var-init"),
        i = cc11001100_hook("i", ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket"], "var-init"),
        s = cc11001100_hook("s", ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"], "var-init"),
        o = cc11001100_hook("o", i, "var-init"),
        c = cc11001100_hook("c", ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year", "add", "asc", "collation", "desc", "final", "first", "last", "view"].filter(function (e) {
          return !i.includes(e);
        }), "var-init"),
        l = cc11001100_hook("l", {
          begin: cc11001100_hook("begin", r.concat(/\b/, r.either.apply(r, o), /\s*\(/), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: {
            built_in: cc11001100_hook("built_in", o, "object-key-init")
          }
        }, "var-init");
      return {
        name: cc11001100_hook("name", "SQL", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", /[{}]|<\//, "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", /\b[\w\.]+/, "object-key-init"),
          keyword: cc11001100_hook("keyword", function (e) {
            var _ref9 = cc11001100_hook("_ref9", arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, "var-init"),
              r = cc11001100_hook("r", _ref9.exceptions, "var-init"),
              t = cc11001100_hook("t", _ref9.when, "var-init");
            var n = cc11001100_hook("n", t, "var-init");
            return r = cc11001100_hook("r", r || [], "assign"), e.map(function (e) {
              return e.match(/\|\d+$/) || r.includes(e) ? e : n(e) ? e + "|0" : e;
            });
          }(c, {
            when: function when(e) {
              return e.length < 3;
            }
          }), "object-key-init"),
          literal: cc11001100_hook("literal", n, "object-key-init"),
          type: cc11001100_hook("type", a, "object-key-init"),
          built_in: cc11001100_hook("built_in", ["current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp"], "object-key-init")
        },
        contains: cc11001100_hook("contains", [{
          begin: cc11001100_hook("begin", r.either.apply(r, s), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", /[\w\.]+/, "object-key-init"),
            keyword: cc11001100_hook("keyword", c.concat(s), "object-key-init"),
            literal: cc11001100_hook("literal", n, "object-key-init"),
            type: cc11001100_hook("type", a, "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", r.either("double precision", "large object", "with timezone", "without timezone"), "object-key-init")
        }, l, {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", /@[a-z0-9]+/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", /''/, "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /""/, "object-key-init")
          }], "object-key-init")
        }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, t, {
          className: cc11001100_hook("className", "operator", "object-key-init"),
          begin: cc11001100_hook("begin", /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("sql", e);
})(); /*! `javascript` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    var e = cc11001100_hook("e", "[A-Za-z$_][0-9A-Za-z$_]*", "var-init"),
      n = cc11001100_hook("n", ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], "var-init"),
      a = cc11001100_hook("a", ["true", "false", "null", "undefined", "NaN", "Infinity"], "var-init"),
      t = cc11001100_hook("t", ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"], "var-init"),
      s = cc11001100_hook("s", ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"], "var-init"),
      r = cc11001100_hook("r", ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], "var-init"),
      c = cc11001100_hook("c", ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], "var-init"),
      i = cc11001100_hook("i", [].concat(r, t, s), "var-init");
    return function (o) {
      var l = cc11001100_hook("l", o.regex, "var-init"),
        b = cc11001100_hook("b", e, "var-init"),
        d = cc11001100_hook("d", {
          begin: cc11001100_hook("begin", /<[A-Za-z0-9\\._:-]+/, "object-key-init"),
          end: cc11001100_hook("end", /\/[A-Za-z0-9\\._:-]+>|\/>/, "object-key-init"),
          isTrulyOpeningTag: function isTrulyOpeningTag(e, n) {
            var a = cc11001100_hook("a", e[0].length + e.index, "var-init"),
              t = cc11001100_hook("t", e.input[a], "var-init");
            if ("<" === t || "," === t) return void n.ignoreMatch();
            var s;
            ">" === t && (function (e, _ref10) {
              var n = cc11001100_hook("n", _ref10.after, "var-init");
              var a = cc11001100_hook("a", "</" + e[0].slice(1), "var-init");
              return -1 !== e.input.indexOf(a, n);
            }(e, {
              after: cc11001100_hook("after", a, "object-key-init")
            }) || n.ignoreMatch());
            var r = cc11001100_hook("r", e.input.substring(a), "var-init");
            ((s = cc11001100_hook("s", r.match(/^\s*=/), "assign")) || (s = cc11001100_hook("s", r.match(/^\s+extends\s+/), "assign")) && 0 === s.index) && n.ignoreMatch();
          }
        }, "var-init"),
        g = cc11001100_hook("g", {
          $pattern: cc11001100_hook("$pattern", e, "object-key-init"),
          keyword: cc11001100_hook("keyword", n, "object-key-init"),
          literal: cc11001100_hook("literal", a, "object-key-init"),
          built_in: cc11001100_hook("built_in", i, "object-key-init"),
          "variable.language": cc11001100_hook("variable.language", c, "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", "\\.([0-9](_?[0-9])*)", "var-init"),
        m = cc11001100_hook("m", "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", "var-init"),
        E = cc11001100_hook("E", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "(\\b(".concat(m, ")((").concat(u, ")|\\.)?|(").concat(u, "))[eE][+-]?([0-9](_?[0-9])*)\\b"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b(".concat(m, ")\\b((").concat(u, ")\\b|\\.)?|(").concat(u, ")\\b"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b(0|[1-9](_?[0-9])*)n\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[bB][0-1](_?[0-1])*n?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[oO][0-7](_?[0-7])*n?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[0-7]+n?\\b", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        A = cc11001100_hook("A", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", "\\$\\{", "object-key-init"),
          end: cc11001100_hook("end", "\\}", "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init"),
          contains: cc11001100_hook("contains", [], "object-key-init")
        }, "var-init"),
        y = cc11001100_hook("y", {
          begin: cc11001100_hook("begin", "html`", "object-key-init"),
          end: cc11001100_hook("end", "", "object-key-init"),
          starts: {
            end: cc11001100_hook("end", "`", "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !1, "object-key-init"),
            contains: cc11001100_hook("contains", [o.BACKSLASH_ESCAPE, A], "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init")
          }
        }, "var-init"),
        N = cc11001100_hook("N", {
          begin: cc11001100_hook("begin", "css`", "object-key-init"),
          end: cc11001100_hook("end", "", "object-key-init"),
          starts: {
            end: cc11001100_hook("end", "`", "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !1, "object-key-init"),
            contains: cc11001100_hook("contains", [o.BACKSLASH_ESCAPE, A], "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", "css", "object-key-init")
          }
        }, "var-init"),
        _ = cc11001100_hook("_", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", "`", "object-key-init"),
          end: cc11001100_hook("end", "`", "object-key-init"),
          contains: cc11001100_hook("contains", [o.BACKSLASH_ESCAPE, A], "object-key-init")
        }, "var-init"),
        h = cc11001100_hook("h", {
          className: cc11001100_hook("className", "comment", "object-key-init"),
          variants: cc11001100_hook("variants", [o.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", "(?=@[A-Za-z]+)", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init"),
              contains: cc11001100_hook("contains", [{
                className: cc11001100_hook("className", "doctag", "object-key-init"),
                begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
              }, {
                className: cc11001100_hook("className", "type", "object-key-init"),
                begin: cc11001100_hook("begin", "\\{", "object-key-init"),
                end: cc11001100_hook("end", "\\}", "object-key-init"),
                excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
                excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
                relevance: cc11001100_hook("relevance", 0, "object-key-init")
              }, {
                className: cc11001100_hook("className", "variable", "object-key-init"),
                begin: cc11001100_hook("begin", b + "(?=\\s*(-)|$)", "object-key-init"),
                endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
                relevance: cc11001100_hook("relevance", 0, "object-key-init")
              }, {
                begin: cc11001100_hook("begin", /(?=[^\n])\s/, "object-key-init"),
                relevance: cc11001100_hook("relevance", 0, "object-key-init")
              }], "object-key-init")
            }], "object-key-init")
          }), o.C_BLOCK_COMMENT_MODE, o.C_LINE_COMMENT_MODE], "object-key-init")
        }, "var-init"),
        f = cc11001100_hook("f", [o.APOS_STRING_MODE, o.QUOTE_STRING_MODE, y, N, _, {
          match: cc11001100_hook("match", /\$\d+/, "object-key-init")
        }, E], "var-init");
      A.contains = cc11001100_hook("A.contains", f.concat({
        begin: cc11001100_hook("begin", /\{/, "object-key-init"),
        end: cc11001100_hook("end", /\}/, "object-key-init"),
        keywords: cc11001100_hook("keywords", g, "object-key-init"),
        contains: cc11001100_hook("contains", ["self"].concat(f), "object-key-init")
      }), "assign");
      var v = cc11001100_hook("v", [].concat(h, A.contains), "var-init"),
        p = cc11001100_hook("p", v.concat([{
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init"),
          contains: cc11001100_hook("contains", ["self"].concat(v), "object-key-init")
        }]), "var-init"),
        S = cc11001100_hook("S", {
          className: cc11001100_hook("className", "params", "object-key-init"),
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init"),
          contains: cc11001100_hook("contains", p, "object-key-init")
        }, "var-init"),
        w = cc11001100_hook("w", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/class/, /\s+/, b, /\s+/, /extends/, /\s+/, l.concat(b, "(", l.concat(/\./, b), ")*")], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "keyword", "object-key-init"),
              3: cc11001100_hook(3, "title.class", "object-key-init"),
              5: cc11001100_hook(5, "keyword", "object-key-init"),
              7: cc11001100_hook(7, "title.class.inherited", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [/class/, /\s+/, b], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "keyword", "object-key-init"),
              3: cc11001100_hook(3, "title.class", "object-key-init")
            }
          }], "object-key-init")
        }, "var-init"),
        R = cc11001100_hook("R", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", l.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/), "object-key-init"),
          className: cc11001100_hook("className", "title.class", "object-key-init"),
          keywords: {
            _: cc11001100_hook("_", [].concat(t, s), "object-key-init")
          }
        }, "var-init"),
        O = cc11001100_hook("O", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/function/, /\s+/, b, /(?=\s*\()/], "object-key-init")
          }, {
            match: cc11001100_hook("match", [/function/, /\s*(?=\()/], "object-key-init")
          }], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          label: cc11001100_hook("label", "func.def", "object-key-init"),
          contains: cc11001100_hook("contains", [S], "object-key-init"),
          illegal: cc11001100_hook("illegal", /%/, "object-key-init")
        }, "var-init"),
        k = cc11001100_hook("k", {
          match: cc11001100_hook("match", l.concat(/\b/, (I = cc11001100_hook("I", [].concat(r, ["super", "import"]), "assign"), l.concat("(?!", I.join("|"), ")")), b, l.lookahead(/\(/)), "object-key-init"),
          className: cc11001100_hook("className", "title.function", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      var I;
      var x = cc11001100_hook("x", {
          begin: cc11001100_hook("begin", l.concat(/\./, l.lookahead(l.concat(b, /(?![0-9A-Za-z$_(])/))), "object-key-init"),
          end: cc11001100_hook("end", b, "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", "prototype", "object-key-init"),
          className: cc11001100_hook("className", "property", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        T = cc11001100_hook("T", {
          match: cc11001100_hook("match", [/get|set/, /\s+/, b, /(?=\()/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\(\)/, "object-key-init")
          }, S], "object-key-init")
        }, "var-init"),
        C = cc11001100_hook("C", "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + o.UNDERSCORE_IDENT_RE + ")\\s*=>", "var-init"),
        M = cc11001100_hook("M", {
          match: cc11001100_hook("match", [/const|var|let/, /\s+/, b, /\s*/, /=\s*/, /(async\s*)?/, l.lookahead(C)], "object-key-init"),
          keywords: cc11001100_hook("keywords", "async", "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [S], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Javascript", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["js", "jsx", "mjs", "cjs"], "object-key-init"),
        keywords: cc11001100_hook("keywords", g, "object-key-init"),
        exports: {
          PARAMS_CONTAINS: cc11001100_hook("PARAMS_CONTAINS", p, "object-key-init"),
          CLASS_REFERENCE: cc11001100_hook("CLASS_REFERENCE", R, "object-key-init")
        },
        illegal: cc11001100_hook("illegal", /#(?![$_A-z])/, "object-key-init"),
        contains: cc11001100_hook("contains", [o.SHEBANG({
          label: cc11001100_hook("label", "shebang", "object-key-init"),
          binary: cc11001100_hook("binary", "node", "object-key-init"),
          relevance: cc11001100_hook("relevance", 5, "object-key-init")
        }), {
          label: cc11001100_hook("label", "use_strict", "object-key-init"),
          className: cc11001100_hook("className", "meta", "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init"),
          begin: cc11001100_hook("begin", /^\s*['"]use (strict|asm)['"]/, "object-key-init")
        }, o.APOS_STRING_MODE, o.QUOTE_STRING_MODE, y, N, _, h, {
          match: cc11001100_hook("match", /\$\d+/, "object-key-init")
        }, E, R, {
          className: cc11001100_hook("className", "attr", "object-key-init"),
          begin: cc11001100_hook("begin", b + l.lookahead(":"), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, M, {
          begin: cc11001100_hook("begin", "(" + o.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*", "object-key-init"),
          keywords: cc11001100_hook("keywords", "return throw case", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [h, o.REGEXP_MODE, {
            className: cc11001100_hook("className", "function", "object-key-init"),
            begin: cc11001100_hook("begin", C, "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            end: cc11001100_hook("end", "\\s*=>", "object-key-init"),
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "params", "object-key-init"),
              variants: cc11001100_hook("variants", [{
                begin: cc11001100_hook("begin", o.UNDERSCORE_IDENT_RE, "object-key-init"),
                relevance: cc11001100_hook("relevance", 0, "object-key-init")
              }, {
                className: cc11001100_hook("className", null, "object-key-init"),
                begin: cc11001100_hook("begin", /\(\s*\)/, "object-key-init"),
                skip: cc11001100_hook("skip", !0, "object-key-init")
              }, {
                begin: cc11001100_hook("begin", /\(/, "object-key-init"),
                end: cc11001100_hook("end", /\)/, "object-key-init"),
                excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
                excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
                keywords: cc11001100_hook("keywords", g, "object-key-init"),
                contains: cc11001100_hook("contains", p, "object-key-init")
              }], "object-key-init")
            }], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /,/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\s+/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", "<>", "object-key-init"),
              end: cc11001100_hook("end", "</>", "object-key-init")
            }, {
              match: cc11001100_hook("match", /<[A-Za-z0-9\\._:-]+\s*\/>/, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", d.begin, "object-key-init"),
              "on:begin": cc11001100_hook("on:begin", d.isTrulyOpeningTag, "object-key-init"),
              end: cc11001100_hook("end", d.end, "object-key-init")
            }], "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", d.begin, "object-key-init"),
              end: cc11001100_hook("end", d.end, "object-key-init"),
              skip: cc11001100_hook("skip", !0, "object-key-init"),
              contains: cc11001100_hook("contains", ["self"], "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, O, {
          beginKeywords: cc11001100_hook("beginKeywords", "while if switch catch for", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b(?!function)" + o.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          label: cc11001100_hook("label", "func.def", "object-key-init"),
          contains: cc11001100_hook("contains", [S, o.inherit(o.TITLE_MODE, {
            begin: cc11001100_hook("begin", b, "object-key-init"),
            className: cc11001100_hook("className", "title.function", "object-key-init")
          })], "object-key-init")
        }, {
          match: cc11001100_hook("match", /\.\.\./, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, x, {
          match: cc11001100_hook("match", "\\$" + b, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          match: cc11001100_hook("match", [/\bconstructor(?=\s*\()/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [S], "object-key-init")
        }, k, {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", /\b[A-Z][A-Z_0-9]+\b/, "object-key-init"),
          className: cc11001100_hook("className", "variable.constant", "object-key-init")
        }, w, T, {
          match: cc11001100_hook("match", /\$[(.]/, "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("javascript", e);
})(); /*! `erlang` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", "[a-z'][a-zA-Z0-9_']*", "var-init"),
        r = cc11001100_hook("r", "(" + n + ":" + n + "|" + n + ")", "var-init"),
        a = cc11001100_hook("a", {
          keyword: cc11001100_hook("keyword", "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor", "object-key-init"),
          literal: cc11001100_hook("literal", "false true", "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", e.COMMENT("%", "$"), "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          begin: cc11001100_hook("begin", "fun\\s+" + n + "/\\d+", "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          begin: cc11001100_hook("begin", r + "\\(", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", r, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", {
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          begin: cc11001100_hook("begin", "\\b_([A-Z][A-Za-z0-9_]*)?", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          begin: cc11001100_hook("begin", "[A-Z][a-zA-Z0-9_]*", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", {
          begin: cc11001100_hook("begin", "#" + e.UNDERSCORE_IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "#" + e.UNDERSCORE_IDENT_RE, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        g = cc11001100_hook("g", {
          beginKeywords: cc11001100_hook("beginKeywords", "fun receive if try case", "object-key-init"),
          end: cc11001100_hook("end", "end", "object-key-init"),
          keywords: cc11001100_hook("keywords", a, "object-key-init")
        }, "var-init");
      g.contains = cc11001100_hook("g.contains", [i, c, e.inherit(e.APOS_STRING_MODE, {
        className: cc11001100_hook("className", "", "object-key-init")
      }), g, t, e.QUOTE_STRING_MODE, s, d, o, l, b], "assign");
      var E = cc11001100_hook("E", [i, c, g, t, e.QUOTE_STRING_MODE, s, d, o, l, b], "var-init");
      t.contains[1].contains = cc11001100_hook("t.contains[1].contains", E, "assign"), d.contains = cc11001100_hook("d.contains", E, "assign"), b.contains[1].contains = cc11001100_hook("b.contains[1].contains", E, "assign");
      var u = cc11001100_hook("u", {
        className: cc11001100_hook("className", "params", "object-key-init"),
        begin: cc11001100_hook("begin", "\\(", "object-key-init"),
        end: cc11001100_hook("end", "\\)", "object-key-init"),
        contains: cc11001100_hook("contains", E, "object-key-init")
      }, "var-init");
      return {
        name: cc11001100_hook("name", "Erlang", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["erl"], "object-key-init"),
        keywords: cc11001100_hook("keywords", a, "object-key-init"),
        illegal: cc11001100_hook("illegal", "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))", "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", "^" + n + "\\s*\\(", "object-key-init"),
          end: cc11001100_hook("end", "->", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", "\\(|#|//|/\\*|\\\\|:|;", "object-key-init"),
          contains: cc11001100_hook("contains", [u, e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", n, "object-key-init")
          })], "object-key-init"),
          starts: {
            end: cc11001100_hook("end", ";|\\.", "object-key-init"),
            keywords: cc11001100_hook("keywords", a, "object-key-init"),
            contains: cc11001100_hook("contains", E, "object-key-init")
          }
        }, i, {
          begin: cc11001100_hook("begin", "^-", "object-key-init"),
          end: cc11001100_hook("end", "\\.", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", "-" + e.IDENT_RE, "object-key-init"),
            keyword: cc11001100_hook("keyword", ["-module", "-record", "-undef", "-export", "-ifdef", "-ifndef", "-author", "-copyright", "-doc", "-vsn", "-import", "-include", "-include_lib", "-compile", "-define", "-else", "-endif", "-file", "-behaviour", "-behavior", "-spec"].map(function (e) {
              return e + "|1.5";
            }).join(" "), "object-key-init")
          },
          contains: cc11001100_hook("contains", [u], "object-key-init")
        }, s, e.QUOTE_STRING_MODE, b, o, l, d, {
          begin: cc11001100_hook("begin", /\.$/, "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("erlang", e);
})(); /*! `r` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var a = cc11001100_hook("a", e.regex, "var-init"),
        n = cc11001100_hook("n", /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, "var-init"),
        i = cc11001100_hook("i", a.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/, /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/, /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/), "var-init"),
        s = cc11001100_hook("s", /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, "var-init"),
        t = cc11001100_hook("t", a.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/), "var-init");
      return {
        name: cc11001100_hook("name", "R", "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", n, "object-key-init"),
          keyword: cc11001100_hook("keyword", "function if in break next repeat else for while", "object-key-init"),
          literal: cc11001100_hook("literal", "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10", "object-key-init"),
          built_in: cc11001100_hook("built_in", "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm", "object-key-init")
        },
        contains: cc11001100_hook("contains", [e.COMMENT(/#'/, /$/, {
          contains: cc11001100_hook("contains", [{
            scope: cc11001100_hook("scope", "doctag", "object-key-init"),
            match: cc11001100_hook("match", /@examples/, "object-key-init"),
            starts: {
              end: cc11001100_hook("end", a.lookahead(a.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)), "object-key-init"),
              endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
            }
          }, {
            scope: cc11001100_hook("scope", "doctag", "object-key-init"),
            begin: cc11001100_hook("begin", "@param", "object-key-init"),
            end: cc11001100_hook("end", /$/, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              scope: cc11001100_hook("scope", "variable", "object-key-init"),
              variants: cc11001100_hook("variants", [{
                match: cc11001100_hook("match", n, "object-key-init")
              }, {
                match: cc11001100_hook("match", /`(?:\\.|[^`\\])+`/, "object-key-init")
              }], "object-key-init"),
              endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
            }], "object-key-init")
          }, {
            scope: cc11001100_hook("scope", "doctag", "object-key-init"),
            match: cc11001100_hook("match", /@[a-zA-Z]+/, "object-key-init")
          }, {
            scope: cc11001100_hook("scope", "keyword", "object-key-init"),
            match: cc11001100_hook("match", /\\[a-zA-Z]+/, "object-key-init")
          }], "object-key-init")
        }), e.HASH_COMMENT_MODE, {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init"),
          variants: cc11001100_hook("variants", [e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]"(-*)\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)(-*)"/, "object-key-init")
          }), e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]"(-*)\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}(-*)"/, "object-key-init")
          }), e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]"(-*)\[/, "object-key-init"),
            end: cc11001100_hook("end", /\](-*)"/, "object-key-init")
          }), e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]'(-*)\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)(-*)'/, "object-key-init")
          }), e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]'(-*)\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}(-*)'/, "object-key-init")
          }), e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]'(-*)\[/, "object-key-init"),
            end: cc11001100_hook("end", /\](-*)'/, "object-key-init")
          }), {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            scope: {
              1: cc11001100_hook(1, "operator", "object-key-init"),
              2: cc11001100_hook(2, "number", "object-key-init")
            },
            match: cc11001100_hook("match", [s, i], "object-key-init")
          }, {
            scope: {
              1: cc11001100_hook(1, "operator", "object-key-init"),
              2: cc11001100_hook(2, "number", "object-key-init")
            },
            match: cc11001100_hook("match", [/%[^%]*%/, i], "object-key-init")
          }, {
            scope: {
              1: cc11001100_hook(1, "punctuation", "object-key-init"),
              2: cc11001100_hook(2, "number", "object-key-init")
            },
            match: cc11001100_hook("match", [t, i], "object-key-init")
          }, {
            scope: {
              2: cc11001100_hook(2, "number", "object-key-init")
            },
            match: cc11001100_hook("match", [/[^a-zA-Z0-9._]|^/, i], "object-key-init")
          }], "object-key-init")
        }, {
          scope: {
            3: cc11001100_hook(3, "operator", "object-key-init")
          },
          match: cc11001100_hook("match", [n, /\s+/, /<-/, /\s+/], "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "operator", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", s, "object-key-init")
          }, {
            match: cc11001100_hook("match", /%[^%]*%/, "object-key-init")
          }], "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "punctuation", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", t, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "`", "object-key-init"),
          end: cc11001100_hook("end", "`", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\./, "object-key-init")
          }], "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("r", e);
})(); /*! `scss` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    var e = cc11001100_hook("e", ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"], "var-init"),
      r = cc11001100_hook("r", ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"], "var-init"),
      i = cc11001100_hook("i", ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"], "var-init"),
      t = cc11001100_hook("t", ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"], "var-init"),
      o = cc11001100_hook("o", ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse(), "var-init");
    return function (n) {
      var a = cc11001100_hook("a", function (e) {
          return {
            IMPORTANT: {
              scope: cc11001100_hook("scope", "meta", "object-key-init"),
              begin: cc11001100_hook("begin", "!important", "object-key-init")
            },
            BLOCK_COMMENT: cc11001100_hook("BLOCK_COMMENT", e.C_BLOCK_COMMENT_MODE, "object-key-init"),
            HEXCOLOR: {
              scope: cc11001100_hook("scope", "number", "object-key-init"),
              begin: cc11001100_hook("begin", /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/, "object-key-init")
            },
            FUNCTION_DISPATCH: {
              className: cc11001100_hook("className", "built_in", "object-key-init"),
              begin: cc11001100_hook("begin", /[\w-]+(?=\()/, "object-key-init")
            },
            ATTRIBUTE_SELECTOR_MODE: {
              scope: cc11001100_hook("scope", "selector-attr", "object-key-init"),
              begin: cc11001100_hook("begin", /\[/, "object-key-init"),
              end: cc11001100_hook("end", /\]/, "object-key-init"),
              illegal: cc11001100_hook("illegal", "$", "object-key-init"),
              contains: cc11001100_hook("contains", [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "object-key-init")
            },
            CSS_NUMBER_MODE: {
              scope: cc11001100_hook("scope", "number", "object-key-init"),
              begin: cc11001100_hook("begin", e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            },
            CSS_VARIABLE: {
              className: cc11001100_hook("className", "attr", "object-key-init"),
              begin: cc11001100_hook("begin", /--[A-Za-z][A-Za-z0-9_-]*/, "object-key-init")
            }
          };
        }(n), "var-init"),
        l = cc11001100_hook("l", t, "var-init"),
        s = cc11001100_hook("s", i, "var-init"),
        d = cc11001100_hook("d", "@[a-z-]+", "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "SCSS", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", "[=/|']", "object-key-init"),
        contains: cc11001100_hook("contains", [n.C_LINE_COMMENT_MODE, n.C_BLOCK_COMMENT_MODE, a.CSS_NUMBER_MODE, {
          className: cc11001100_hook("className", "selector-id", "object-key-init"),
          begin: cc11001100_hook("begin", "#[A-Za-z0-9_-]+", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-class", "object-key-init"),
          begin: cc11001100_hook("begin", "\\.[A-Za-z0-9_-]+", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, a.ATTRIBUTE_SELECTOR_MODE, {
          className: cc11001100_hook("className", "selector-tag", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(" + e.join("|") + ")\\b", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
          begin: cc11001100_hook("begin", ":(" + s.join("|") + ")", "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
          begin: cc11001100_hook("begin", ":(:)?(" + l.join("|") + ")", "object-key-init")
        }, c, {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          contains: cc11001100_hook("contains", [a.CSS_NUMBER_MODE], "object-key-init")
        }, a.CSS_VARIABLE, {
          className: cc11001100_hook("className", "attribute", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(" + o.join("|") + ")\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /:/, "object-key-init"),
          end: cc11001100_hook("end", /[;}{]/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [a.BLOCK_COMMENT, c, a.HEXCOLOR, a.CSS_NUMBER_MODE, n.QUOTE_STRING_MODE, n.APOS_STRING_MODE, a.IMPORTANT, a.FUNCTION_DISPATCH], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "@(page|font-face)", "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", d, "object-key-init"),
            keyword: cc11001100_hook("keyword", "@page @font-face", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", "@", "object-key-init"),
          end: cc11001100_hook("end", "[{;]", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", /[a-z-]+/, "object-key-init"),
            keyword: cc11001100_hook("keyword", "and or not only", "object-key-init"),
            attribute: cc11001100_hook("attribute", r.join(" "), "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", d, "object-key-init"),
            className: cc11001100_hook("className", "keyword", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /[a-z-]+(?=:)/, "object-key-init"),
            className: cc11001100_hook("className", "attribute", "object-key-init")
          }, c, n.QUOTE_STRING_MODE, n.APOS_STRING_MODE, a.HEXCOLOR, a.CSS_NUMBER_MODE], "object-key-init")
        }, a.FUNCTION_DISPATCH], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("scss", e);
})(); /*! `bash` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var s = cc11001100_hook("s", e.regex, "var-init"),
        t = cc11001100_hook("t", {}, "var-init"),
        n = cc11001100_hook("n", {
          begin: cc11001100_hook("begin", /\$\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          contains: cc11001100_hook("contains", ["self", {
            begin: cc11001100_hook("begin", /:-/, "object-key-init"),
            contains: cc11001100_hook("contains", [t], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      Object.assign(t, {
        className: cc11001100_hook("className", "variable", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", s.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])"), "object-key-init")
        }, n], "object-key-init")
      });
      var a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\$\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          begin: cc11001100_hook("begin", /<<-?\s*(?=\w+)/, "object-key-init"),
          starts: {
            contains: cc11001100_hook("contains", [e.END_SAME_AS_BEGIN({
              begin: cc11001100_hook("begin", /(\w+)/, "object-key-init"),
              end: cc11001100_hook("end", /(\w+)/, "object-key-init"),
              className: cc11001100_hook("className", "string", "object-key-init")
            })], "object-key-init")
          }
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, t, a], "object-key-init")
        }, "var-init");
      a.contains.push(c);
      var o = cc11001100_hook("o", {
          begin: cc11001100_hook("begin", /\$?\(\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)\)/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\d+#[0-9a-f]+/, "object-key-init"),
            className: cc11001100_hook("className", "number", "object-key-init")
          }, e.NUMBER_MODE, t], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", e.SHEBANG({
          binary: cc11001100_hook("binary", "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)", "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }), "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", /\w[\w\d_]*\s*\(\s*\)\s*\{/, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", /\w[\w\d_]*/, "object-key-init")
          })], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Bash", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["sh"], "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", /\b[a-z][a-z0-9._-]+\b/, "object-key-init"),
          keyword: cc11001100_hook("keyword", ["if", "then", "else", "elif", "fi", "for", "while", "in", "do", "done", "case", "esac", "function"], "object-key-init"),
          literal: cc11001100_hook("literal", ["true", "false"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset", "alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "type", "typeset", "ulimit", "unalias", "set", "shopt", "autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp", "chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor", "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout", "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"], "object-key-init")
        },
        contains: cc11001100_hook("contains", [r, e.SHEBANG(), l, o, e.HASH_COMMENT_MODE, i, {
          match: cc11001100_hook("match", /(\/[a-z._-]+)+/, "object-key-init")
        }, c, {
          className: cc11001100_hook("className", "", "object-key-init"),
          begin: cc11001100_hook("begin", /\\"/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /'/, "object-key-init"),
          end: cc11001100_hook("end", /'/, "object-key-init")
        }, t], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("bash", e);
})(); /*! `css` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    var e = cc11001100_hook("e", ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"], "var-init"),
      i = cc11001100_hook("i", ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"], "var-init"),
      r = cc11001100_hook("r", ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"], "var-init"),
      t = cc11001100_hook("t", ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"], "var-init"),
      o = cc11001100_hook("o", ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse(), "var-init");
    return function (n) {
      var a = cc11001100_hook("a", n.regex, "var-init"),
        l = cc11001100_hook("l", function (e) {
          return {
            IMPORTANT: {
              scope: cc11001100_hook("scope", "meta", "object-key-init"),
              begin: cc11001100_hook("begin", "!important", "object-key-init")
            },
            BLOCK_COMMENT: cc11001100_hook("BLOCK_COMMENT", e.C_BLOCK_COMMENT_MODE, "object-key-init"),
            HEXCOLOR: {
              scope: cc11001100_hook("scope", "number", "object-key-init"),
              begin: cc11001100_hook("begin", /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/, "object-key-init")
            },
            FUNCTION_DISPATCH: {
              className: cc11001100_hook("className", "built_in", "object-key-init"),
              begin: cc11001100_hook("begin", /[\w-]+(?=\()/, "object-key-init")
            },
            ATTRIBUTE_SELECTOR_MODE: {
              scope: cc11001100_hook("scope", "selector-attr", "object-key-init"),
              begin: cc11001100_hook("begin", /\[/, "object-key-init"),
              end: cc11001100_hook("end", /\]/, "object-key-init"),
              illegal: cc11001100_hook("illegal", "$", "object-key-init"),
              contains: cc11001100_hook("contains", [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "object-key-init")
            },
            CSS_NUMBER_MODE: {
              scope: cc11001100_hook("scope", "number", "object-key-init"),
              begin: cc11001100_hook("begin", e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            },
            CSS_VARIABLE: {
              className: cc11001100_hook("className", "attr", "object-key-init"),
              begin: cc11001100_hook("begin", /--[A-Za-z][A-Za-z0-9_-]*/, "object-key-init")
            }
          };
        }(n), "var-init"),
        s = cc11001100_hook("s", [n.APOS_STRING_MODE, n.QUOTE_STRING_MODE], "var-init");
      return {
        name: cc11001100_hook("name", "CSS", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", /[=|'\$]/, "object-key-init"),
        keywords: {
          keyframePosition: cc11001100_hook("keyframePosition", "from to", "object-key-init")
        },
        classNameAliases: {
          keyframePosition: cc11001100_hook("keyframePosition", "selector-tag", "object-key-init")
        },
        contains: cc11001100_hook("contains", [l.BLOCK_COMMENT, {
          begin: cc11001100_hook("begin", /-(webkit|moz|ms|o)-(?=[a-z])/, "object-key-init")
        }, l.CSS_NUMBER_MODE, {
          className: cc11001100_hook("className", "selector-id", "object-key-init"),
          begin: cc11001100_hook("begin", /#[A-Za-z0-9_-]+/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-class", "object-key-init"),
          begin: cc11001100_hook("begin", "\\.[a-zA-Z-][a-zA-Z0-9_-]*", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, l.ATTRIBUTE_SELECTOR_MODE, {
          className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", ":(" + r.join("|") + ")", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", ":(:)?(" + t.join("|") + ")", "object-key-init")
          }], "object-key-init")
        }, l.CSS_VARIABLE, {
          className: cc11001100_hook("className", "attribute", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(" + o.join("|") + ")\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /:/, "object-key-init"),
          end: cc11001100_hook("end", /[;}{]/, "object-key-init"),
          contains: cc11001100_hook("contains", [l.BLOCK_COMMENT, l.HEXCOLOR, l.IMPORTANT, l.CSS_NUMBER_MODE].concat(s, [{
            begin: cc11001100_hook("begin", /(url|data-uri)\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            keywords: {
              built_in: cc11001100_hook("built_in", "url data-uri", "object-key-init")
            },
            contains: cc11001100_hook("contains", [].concat(s, [{
              className: cc11001100_hook("className", "string", "object-key-init"),
              begin: cc11001100_hook("begin", /[^)]/, "object-key-init"),
              endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
              excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
            }]), "object-key-init")
          }, l.FUNCTION_DISPATCH]), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", a.lookahead(/@/), "object-key-init"),
          end: cc11001100_hook("end", "[{;]", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          illegal: cc11001100_hook("illegal", /:/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            begin: cc11001100_hook("begin", /@-?\w[\w]*(-\w+)*/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\s/, "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            keywords: {
              $pattern: cc11001100_hook("$pattern", /[a-z-]+/, "object-key-init"),
              keyword: cc11001100_hook("keyword", "and or not only", "object-key-init"),
              attribute: cc11001100_hook("attribute", i.join(" "), "object-key-init")
            },
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", /[a-z-]+(?=:)/, "object-key-init"),
              className: cc11001100_hook("className", "attribute", "object-key-init")
            }].concat(s, [l.CSS_NUMBER_MODE]), "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-tag", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(" + e.join("|") + ")\\b", "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("css", e);
})(); /*! `swift` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    function e(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e ? "string" == typeof e ? e : e.source : null;
    }
    function a(e) {
      cc11001100_hook("e", e, "function-parameter");
      return t("(?=", e, ")");
    }
    function t() {
      for (var _len5 = cc11001100_hook("_len5", arguments.length, "var-init"), a = cc11001100_hook("a", new Array(_len5), "var-init"), _key5 = cc11001100_hook("_key5", 0, "var-init"); _key5 < _len5; _key5++) {
        a[_key5] = cc11001100_hook("a[_key5]", arguments[_key5], "assign");
      }
      return a.map(function (a) {
        return e(a);
      }).join("");
    }
    function n() {
      for (var _len6 = cc11001100_hook("_len6", arguments.length, "var-init"), a = cc11001100_hook("a", new Array(_len6), "var-init"), _key6 = cc11001100_hook("_key6", 0, "var-init"); _key6 < _len6; _key6++) {
        a[_key6] = cc11001100_hook("a[_key6]", arguments[_key6], "assign");
      }
      var t = cc11001100_hook("t", function (e) {
        var a = cc11001100_hook("a", e[e.length - 1], "var-init");
        return "object" == _typeof(a) && a.constructor === Object ? (e.splice(e.length - 1, 1), a) : {};
      }(a), "var-init");
      return "(" + (t.capture ? "" : "?:") + a.map(function (a) {
        return e(a);
      }).join("|") + ")";
    }
    var i = function i(e) {
        return t(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/);
      },
      s = cc11001100_hook("s", ["Protocol", "Type"].map(i), "var-init"),
      u = cc11001100_hook("u", ["init", "self"].map(i), "var-init"),
      c = cc11001100_hook("c", ["Any", "Self"], "var-init"),
      r = cc11001100_hook("r", ["actor", "any", "associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "distributed", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "isolated", "nonisolated", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"], "var-init"),
      o = cc11001100_hook("o", ["false", "nil", "true"], "var-init"),
      l = cc11001100_hook("l", ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"], "var-init"),
      m = cc11001100_hook("m", ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"], "var-init"),
      p = cc11001100_hook("p", ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"], "var-init"),
      d = cc11001100_hook("d", n(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/), "var-init"),
      F = cc11001100_hook("F", n(d, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/), "var-init"),
      b = cc11001100_hook("b", t(d, F, "*"), "var-init"),
      h = cc11001100_hook("h", n(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/), "var-init"),
      f = cc11001100_hook("f", n(h, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/), "var-init"),
      w = cc11001100_hook("w", t(h, f, "*"), "var-init"),
      y = cc11001100_hook("y", t(/[A-Z]/, f, "*"), "var-init"),
      g = cc11001100_hook("g", ["autoclosure", t(/convention\(/, n("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", t(/objc\(/, w, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "resultBuilder", "testable", "UIApplicationMain", "unknown", "usableFromInline"], "var-init"),
      E = cc11001100_hook("E", ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"], "var-init");
    return function (e) {
      var d = cc11001100_hook("d", {
          match: cc11001100_hook("match", /\s+/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        h = cc11001100_hook("h", e.COMMENT("/\\*", "\\*/", {
          contains: cc11001100_hook("contains", ["self"], "object-key-init")
        }), "var-init"),
        v = cc11001100_hook("v", [e.C_LINE_COMMENT_MODE, h], "var-init"),
        A = cc11001100_hook("A", {
          match: cc11001100_hook("match", [/\./, n.apply(void 0, _toConsumableArray(s).concat(_toConsumableArray(u)))], "object-key-init"),
          className: {
            2: cc11001100_hook(2, "keyword", "object-key-init")
          }
        }, "var-init"),
        N = cc11001100_hook("N", {
          match: cc11001100_hook("match", t(/\./, n.apply(void 0, r)), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        C = cc11001100_hook("C", r.filter(function (e) {
          return "string" == typeof e;
        }).concat(["_|0"]), "var-init"),
        D = cc11001100_hook("D", {
          variants: cc11001100_hook("variants", [{
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            match: cc11001100_hook("match", n.apply(void 0, _toConsumableArray(r.filter(function (e) {
              return "string" != typeof e;
            }).concat(c).map(i)).concat(_toConsumableArray(u))), "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        k = cc11001100_hook("k", {
          $pattern: cc11001100_hook("$pattern", n(/\b\w+/, /#\w+/), "object-key-init"),
          keyword: cc11001100_hook("keyword", C.concat(m), "object-key-init"),
          literal: cc11001100_hook("literal", o, "object-key-init")
        }, "var-init"),
        B = cc11001100_hook("B", [A, N, D], "var-init"),
        _ = cc11001100_hook("_", [{
          match: cc11001100_hook("match", t(/\./, n.apply(void 0, p)), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "built_in", "object-key-init"),
          match: cc11001100_hook("match", t(/\b/, n.apply(void 0, p), /(?=\()/), "object-key-init")
        }], "var-init"),
        S = cc11001100_hook("S", {
          match: cc11001100_hook("match", /->/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        M = cc11001100_hook("M", [S, {
          className: cc11001100_hook("className", "operator", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", b, "object-key-init")
          }, {
            match: cc11001100_hook("match", "\\.(\\.|".concat(F, ")+"), "object-key-init")
          }], "object-key-init")
        }], "var-init"),
        x = cc11001100_hook("x", "([0-9a-fA-F]_*)+", "var-init"),
        I = cc11001100_hook("I", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b", "object-key-init")
          }, {
            match: cc11001100_hook("match", "\\b0x(".concat(x, ")(\\.(").concat(x, "))?([pP][+-]?(([0-9]_*)+))?\\b"), "object-key-init")
          }, {
            match: cc11001100_hook("match", /\b0o([0-7]_*)+\b/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\b0b([01]_*)+\b/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        L = function L() {
          var e = cc11001100_hook("e", arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "", "var-init");
          return {
            className: cc11001100_hook("className", "subst", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              match: cc11001100_hook("match", t(/\\/, e, /[0\\tnr"']/), "object-key-init")
            }, {
              match: cc11001100_hook("match", t(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/), "object-key-init")
            }], "object-key-init")
          };
        },
        O = function O() {
          var e = cc11001100_hook("e", arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "", "var-init");
          return {
            className: cc11001100_hook("className", "subst", "object-key-init"),
            match: cc11001100_hook("match", t(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/), "object-key-init")
          };
        },
        T = function T() {
          var e = cc11001100_hook("e", arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "", "var-init");
          return {
            className: cc11001100_hook("className", "subst", "object-key-init"),
            label: cc11001100_hook("label", "interpol", "object-key-init"),
            begin: cc11001100_hook("begin", t(/\\/, e, /\(/), "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init")
          };
        },
        $ = function $() {
          var e = cc11001100_hook("e", arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "", "var-init");
          return {
            begin: cc11001100_hook("begin", t(e, /"""/), "object-key-init"),
            end: cc11001100_hook("end", t(/"""/, e), "object-key-init"),
            contains: cc11001100_hook("contains", [L(e), O(e), T(e)], "object-key-init")
          };
        },
        j = function j() {
          var e = cc11001100_hook("e", arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "", "var-init");
          return {
            begin: cc11001100_hook("begin", t(e, /"/), "object-key-init"),
            end: cc11001100_hook("end", t(/"/, e), "object-key-init"),
            contains: cc11001100_hook("contains", [L(e), T(e)], "object-key-init")
          };
        },
        P = cc11001100_hook("P", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [$(), $("#"), $("##"), $("###"), j(), j("#"), j("##"), j("###")], "object-key-init")
        }, "var-init"),
        K = cc11001100_hook("K", {
          match: cc11001100_hook("match", t(/`/, w, /`/), "object-key-init")
        }, "var-init"),
        z = cc11001100_hook("z", [K, {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          match: cc11001100_hook("match", /\$\d+/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          match: cc11001100_hook("match", "\\$".concat(f, "+"), "object-key-init")
        }], "var-init"),
        q = cc11001100_hook("q", [{
          match: cc11001100_hook("match", /(@|#(un)?)available/, "object-key-init"),
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          starts: {
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", /\(/, "object-key-init"),
              end: cc11001100_hook("end", /\)/, "object-key-init"),
              keywords: cc11001100_hook("keywords", E, "object-key-init"),
              contains: cc11001100_hook("contains", [].concat(M, [I, P]), "object-key-init")
            }], "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          match: cc11001100_hook("match", t(/@/, n.apply(void 0, g)), "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          match: cc11001100_hook("match", t(/@/, w), "object-key-init")
        }], "var-init"),
        U = cc11001100_hook("U", {
          match: cc11001100_hook("match", a(/\b[A-Z]/), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "type", "object-key-init"),
            match: cc11001100_hook("match", t(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, f, "+"), "object-key-init")
          }, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            match: cc11001100_hook("match", y, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", /[?!]+/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\.\.\./, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", t(/\s+&\s+/, a(y)), "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        Z = cc11001100_hook("Z", {
          begin: cc11001100_hook("begin", /</, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          keywords: cc11001100_hook("keywords", k, "object-key-init"),
          contains: cc11001100_hook("contains", [].concat(v, B, q, [S, U]), "object-key-init")
        }, "var-init");
      U.contains.push(Z);
      var V = cc11001100_hook("V", {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: cc11001100_hook("keywords", k, "object-key-init"),
          contains: cc11001100_hook("contains", ["self", {
            match: cc11001100_hook("match", t(w, /\s*:/), "object-key-init"),
            keywords: cc11001100_hook("keywords", "_|0", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }].concat(v, B, _, M, [I, P], z, q, [U]), "object-key-init")
        }, "var-init"),
        W = cc11001100_hook("W", {
          begin: cc11001100_hook("begin", /</, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          contains: cc11001100_hook("contains", [].concat(v, [U]), "object-key-init")
        }, "var-init"),
        G = cc11001100_hook("G", {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          keywords: cc11001100_hook("keywords", k, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", n(a(t(w, /\s*:/)), a(t(w, /\s+/, w, /\s*:/))), "object-key-init"),
            end: cc11001100_hook("end", /:/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "keyword", "object-key-init"),
              match: cc11001100_hook("match", /\b_\b/, "object-key-init")
            }, {
              className: cc11001100_hook("className", "params", "object-key-init"),
              match: cc11001100_hook("match", w, "object-key-init")
            }], "object-key-init")
          }].concat(v, B, M, [I, P], q, [U, V]), "object-key-init"),
          endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", /["']/, "object-key-init")
        }, "var-init"),
        R = cc11001100_hook("R", {
          match: cc11001100_hook("match", [/func/, /\s+/, n(K.match, w, b)], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [W, G, d], "object-key-init"),
          illegal: cc11001100_hook("illegal", [/\[/, /%/], "object-key-init")
        }, "var-init"),
        X = cc11001100_hook("X", {
          match: cc11001100_hook("match", [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init")
          },
          contains: cc11001100_hook("contains", [W, G, d], "object-key-init"),
          illegal: cc11001100_hook("illegal", /\[|%/, "object-key-init")
        }, "var-init"),
        H = cc11001100_hook("H", {
          match: cc11001100_hook("match", [/operator/, /\s+/, b], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title", "object-key-init")
          }
        }, "var-init"),
        J = cc11001100_hook("J", {
          begin: cc11001100_hook("begin", [/precedencegroup/, /\s+/, y], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title", "object-key-init")
          },
          contains: cc11001100_hook("contains", [U], "object-key-init"),
          keywords: cc11001100_hook("keywords", [].concat(l, o), "object-key-init"),
          end: cc11001100_hook("end", /}/, "object-key-init")
        }, "var-init");
      var _iterator = cc11001100_hook("_iterator", _createForOfIteratorHelper(P.variants), "var-init"),
        _step;
      try {
        for (_iterator.s(); !(_step = cc11001100_hook("_step", _iterator.n(), "assign")).done;) {
          var _e7 = cc11001100_hook("_e7", _step.value, "var-init");
          var _a = cc11001100_hook("_a", _e7.contains.find(function (e) {
            return "interpol" === e.label;
          }), "var-init");
          _a.keywords = cc11001100_hook("_a.keywords", k, "assign");
          var _t9 = cc11001100_hook("_t9", [].concat(B, _, M, [I, P], z), "var-init");
          _a.contains = cc11001100_hook("_a.contains", [].concat(_toConsumableArray(_t9), [{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            contains: cc11001100_hook("contains", ["self"].concat(_toConsumableArray(_t9)), "object-key-init")
          }]), "assign");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return {
        name: cc11001100_hook("name", "Swift", "object-key-init"),
        keywords: cc11001100_hook("keywords", k, "object-key-init"),
        contains: cc11001100_hook("contains", [].concat(v, [R, X, {
          beginKeywords: cc11001100_hook("beginKeywords", "struct protocol class extension enum actor", "object-key-init"),
          end: cc11001100_hook("end", "\\{", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", k, "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            className: cc11001100_hook("className", "title.class", "object-key-init"),
            begin: cc11001100_hook("begin", /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/, "object-key-init")
          })].concat(B), "object-key-init")
        }, H, J, {
          beginKeywords: cc11001100_hook("beginKeywords", "import", "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          contains: cc11001100_hook("contains", [].concat(v), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }], B, _, M, [I, P], z, q, [U, V]), "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("swift", e);
})(); /*! `vbnet` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", e.regex, "var-init"),
        t = cc11001100_hook("t", /\d{1,2}\/\d{1,2}\/\d{4}/, "var-init"),
        a = cc11001100_hook("a", /\d{4}-\d{1,2}-\d{1,2}/, "var-init"),
        i = cc11001100_hook("i", /(\d|1[012])(:\d+){0,2} *(AM|PM)/, "var-init"),
        s = cc11001100_hook("s", /\d{1,2}(:\d{1,2}){1,2}/, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "literal", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", n.concat(/# */, n.either(a, t), / *#/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/# */, s, / *#/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/# */, i, / *#/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/# */, n.either(a, t), / +/, n.either(i, s), / *#/), "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", e.COMMENT(/'''/, /$/, {
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            begin: cc11001100_hook("begin", /<\/?/, "object-key-init"),
            end: cc11001100_hook("end", />/, "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        o = cc11001100_hook("o", e.COMMENT(null, /$/, {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([\t ]|^)REM(?=\s)/, "object-key-init")
          }], "object-key-init")
        }), "var-init");
      return {
        name: cc11001100_hook("name", "Visual Basic .NET", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["vb"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        classNameAliases: {
          label: cc11001100_hook("label", "symbol", "object-key-init")
        },
        keywords: {
          keyword: cc11001100_hook("keyword", "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield", "object-key-init"),
          built_in: cc11001100_hook("built_in", "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort", "object-key-init"),
          type: cc11001100_hook("type", "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort", "object-key-init"),
          literal: cc11001100_hook("literal", "true false nothing", "object-key-init")
        },
        illegal: cc11001100_hook("illegal", "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ", "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /"(""|[^/n])"C\b/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /""/, "object-key-init")
          }], "object-key-init")
        }, r, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\b\d[\d_]*((U?[SIL])|[%&])?/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /&H[\dA-F_]+((U?[SIL])|[%&])?/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /&O[0-7_]+((U?[SIL])|[%&])?/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /&B[01_]+((U?[SIL])|[%&])?/, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "label", "object-key-init"),
          begin: cc11001100_hook("begin", /^\w+:/, "object-key-init")
        }, l, o, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "const disable else elseif enable end externalsource if region then", "object-key-init")
          },
          contains: cc11001100_hook("contains", [o], "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("vbnet", e);
})(); /*! `handlebars` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var a = cc11001100_hook("a", e.regex, "var-init"),
        n = cc11001100_hook("n", {
          $pattern: cc11001100_hook("$pattern", /[\w.\/]+/, "object-key-init"),
          built_in: cc11001100_hook("built_in", ["action", "bindattr", "collection", "component", "concat", "debugger", "each", "each-in", "get", "hash", "if", "in", "input", "link-to", "loc", "log", "lookup", "mut", "outlet", "partial", "query-params", "render", "template", "textarea", "unbound", "unless", "view", "with", "yield"], "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", /\[\]|\[[^\]]+\]/, "var-init"),
        s = cc11001100_hook("s", /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/, "var-init"),
        i = cc11001100_hook("i", a.either(/""|"[^"]+"/, /''|'[^']+'/, t, s), "var-init"),
        r = cc11001100_hook("r", a.concat(a.optional(/\.|\.\/|\//), i, a.anyNumberOfTimes(a.concat(/(\.|\/)/, i))), "var-init"),
        l = cc11001100_hook("l", a.concat("(", t, "|", s, ")(?==)"), "var-init"),
        c = cc11001100_hook("c", {
          begin: cc11001100_hook("begin", r, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", e.inherit(c, {
          keywords: {
            $pattern: cc11001100_hook("$pattern", /[\w.\/]+/, "object-key-init"),
            literal: cc11001100_hook("literal", ["true", "false", "undefined", "null"], "object-key-init")
          }
        }), "var-init"),
        m = cc11001100_hook("m", {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", {
          className: cc11001100_hook("className", "attr", "object-key-init"),
          begin: cc11001100_hook("begin", l, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          starts: {
            begin: cc11001100_hook("begin", /=/, "object-key-init"),
            end: cc11001100_hook("end", /=/, "object-key-init"),
            starts: {
              contains: cc11001100_hook("contains", [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, o, m], "object-key-init")
            }
          }
        }, "var-init"),
        g = cc11001100_hook("g", {
          contains: cc11001100_hook("contains", [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
            begin: cc11001100_hook("begin", /as\s+\|/, "object-key-init"),
            keywords: {
              keyword: cc11001100_hook("keyword", "as", "object-key-init")
            },
            end: cc11001100_hook("end", /\|/, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", /\w+/, "object-key-init")
            }], "object-key-init")
          }, d, o, m], "object-key-init"),
          returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", e.inherit(c, {
          className: cc11001100_hook("className", "name", "object-key-init"),
          keywords: cc11001100_hook("keywords", n, "object-key-init"),
          starts: cc11001100_hook("starts", e.inherit(g, {
            end: cc11001100_hook("end", /\)/, "object-key-init")
          }), "object-key-init")
        }), "var-init");
      m.contains = cc11001100_hook("m.contains", [b], "assign");
      var u = cc11001100_hook("u", e.inherit(c, {
          keywords: cc11001100_hook("keywords", n, "object-key-init"),
          className: cc11001100_hook("className", "name", "object-key-init"),
          starts: cc11001100_hook("starts", e.inherit(g, {
            end: cc11001100_hook("end", /\}\}/, "object-key-init")
          }), "object-key-init")
        }), "var-init"),
        h = cc11001100_hook("h", e.inherit(c, {
          keywords: cc11001100_hook("keywords", n, "object-key-init"),
          className: cc11001100_hook("className", "name", "object-key-init")
        }), "var-init"),
        N = cc11001100_hook("N", e.inherit(c, {
          className: cc11001100_hook("className", "name", "object-key-init"),
          keywords: cc11001100_hook("keywords", n, "object-key-init"),
          starts: cc11001100_hook("starts", e.inherit(g, {
            end: cc11001100_hook("end", /\}\}/, "object-key-init")
          }), "object-key-init")
        }), "var-init");
      return {
        name: cc11001100_hook("name", "Handlebars", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["hbs", "html.hbs", "html.handlebars", "htmlbars"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init"),
        contains: cc11001100_hook("contains", [{
          begin: cc11001100_hook("begin", /\\\{\{/, "object-key-init"),
          skip: cc11001100_hook("skip", !0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /\\\\(?=\{\{)/, "object-key-init"),
          skip: cc11001100_hook("skip", !0, "object-key-init")
        }, e.COMMENT(/\{\{!--/, /--\}\}/), e.COMMENT(/\{\{!/, /\}\}/), {
          className: cc11001100_hook("className", "template-tag", "object-key-init"),
          begin: cc11001100_hook("begin", /\{\{\{\{(?!\/)/, "object-key-init"),
          end: cc11001100_hook("end", /\}\}\}\}/, "object-key-init"),
          contains: cc11001100_hook("contains", [u], "object-key-init"),
          starts: {
            end: cc11001100_hook("end", /\{\{\{\{\//, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "template-tag", "object-key-init"),
          begin: cc11001100_hook("begin", /\{\{\{\{\//, "object-key-init"),
          end: cc11001100_hook("end", /\}\}\}\}/, "object-key-init"),
          contains: cc11001100_hook("contains", [h], "object-key-init")
        }, {
          className: cc11001100_hook("className", "template-tag", "object-key-init"),
          begin: cc11001100_hook("begin", /\{\{#/, "object-key-init"),
          end: cc11001100_hook("end", /\}\}/, "object-key-init"),
          contains: cc11001100_hook("contains", [u], "object-key-init")
        }, {
          className: cc11001100_hook("className", "template-tag", "object-key-init"),
          begin: cc11001100_hook("begin", /\{\{(?=else\}\})/, "object-key-init"),
          end: cc11001100_hook("end", /\}\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", "else", "object-key-init")
        }, {
          className: cc11001100_hook("className", "template-tag", "object-key-init"),
          begin: cc11001100_hook("begin", /\{\{(?=else if)/, "object-key-init"),
          end: cc11001100_hook("end", /\}\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", "else if", "object-key-init")
        }, {
          className: cc11001100_hook("className", "template-tag", "object-key-init"),
          begin: cc11001100_hook("begin", /\{\{\//, "object-key-init"),
          end: cc11001100_hook("end", /\}\}/, "object-key-init"),
          contains: cc11001100_hook("contains", [h], "object-key-init")
        }, {
          className: cc11001100_hook("className", "template-variable", "object-key-init"),
          begin: cc11001100_hook("begin", /\{\{\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}\}\}/, "object-key-init"),
          contains: cc11001100_hook("contains", [N], "object-key-init")
        }, {
          className: cc11001100_hook("className", "template-variable", "object-key-init"),
          begin: cc11001100_hook("begin", /\{\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}\}/, "object-key-init"),
          contains: cc11001100_hook("contains", [N], "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("handlebars", e);
})(); /*! `markdown` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", {
          begin: cc11001100_hook("begin", /<\/?[A-Za-z_]/, "object-key-init"),
          end: cc11001100_hook("end", ">", "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\[.+?\]\[.*?\]/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 2, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", e.regex.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/), "object-key-init"),
            relevance: cc11001100_hook("relevance", 2, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\[.+?\]\([./?&#].*?\)/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 1, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\[.*?\]\(.*?\)/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            match: cc11001100_hook("match", /\[(?=\])/, "object-key-init")
          }, {
            className: cc11001100_hook("className", "string", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            begin: cc11001100_hook("begin", "\\[", "object-key-init"),
            end: cc11001100_hook("end", "\\]", "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "link", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            begin: cc11001100_hook("begin", "\\]\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "symbol", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            begin: cc11001100_hook("begin", "\\]\\[", "object-key-init"),
            end: cc11001100_hook("end", "\\]", "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "strong", "object-key-init"),
          contains: cc11001100_hook("contains", [], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /_{2}(?!\s)/, "object-key-init"),
            end: cc11001100_hook("end", /_{2}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\*{2}(?!\s)/, "object-key-init"),
            end: cc11001100_hook("end", /\*{2}/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "emphasis", "object-key-init"),
          contains: cc11001100_hook("contains", [], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\*(?![*\s])/, "object-key-init"),
            end: cc11001100_hook("end", /\*/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /_(?![_\s])/, "object-key-init"),
            end: cc11001100_hook("end", /_/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", e.inherit(i, {
          contains: cc11001100_hook("contains", [], "object-key-init")
        }), "var-init"),
        t = cc11001100_hook("t", e.inherit(s, {
          contains: cc11001100_hook("contains", [], "object-key-init")
        }), "var-init");
      i.contains.push(t), s.contains.push(c);
      var g = cc11001100_hook("g", [n, a], "var-init");
      return [i, s, c, t].forEach(function (e) {
        e.contains = cc11001100_hook("e.contains", e.contains.concat(g), "assign");
      }), g = cc11001100_hook("g", g.concat(i, s), "assign"), {
        name: cc11001100_hook("name", "Markdown", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["md", "mkdown", "mkd"], "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "section", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "^#{1,6}", "object-key-init"),
            end: cc11001100_hook("end", "$", "object-key-init"),
            contains: cc11001100_hook("contains", g, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(?=^.+?\\n[=-]{2,}$)", "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", "^[=-]*$", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "^", "object-key-init"),
              end: cc11001100_hook("end", "\\n", "object-key-init"),
              contains: cc11001100_hook("contains", g, "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, n, {
          className: cc11001100_hook("className", "bullet", "object-key-init"),
          begin: cc11001100_hook("begin", "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)", "object-key-init"),
          end: cc11001100_hook("end", "\\s+", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
        }, i, s, {
          className: cc11001100_hook("className", "quote", "object-key-init"),
          begin: cc11001100_hook("begin", "^>\\s+", "object-key-init"),
          contains: cc11001100_hook("contains", g, "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init")
        }, {
          className: cc11001100_hook("className", "code", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "(`{3,})[^`](.|\\n)*?\\1`*[ ]*", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(~{3,})[^~](.|\\n)*?\\1~*[ ]*", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "```", "object-key-init"),
            end: cc11001100_hook("end", "```+[ ]*$", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "~~~", "object-key-init"),
            end: cc11001100_hook("end", "~~~+[ ]*$", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "`.+?`", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(?=^( {4}|\\t))", "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", "^( {4}|\\t)", "object-key-init"),
              end: cc11001100_hook("end", "(\\n)$", "object-key-init")
            }], "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "^[-\\*]{3,}", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init")
        }, a, {
          begin: cc11001100_hook("begin", /^\[[^\n]+\]:/, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "symbol", "object-key-init"),
            begin: cc11001100_hook("begin", /\[/, "object-key-init"),
            end: cc11001100_hook("end", /\]/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "link", "object-key-init"),
            begin: cc11001100_hook("begin", /:\s*/, "object-key-init"),
            end: cc11001100_hook("end", /$/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init")
          }], "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("markdown", e);
})(); /*! `dart` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\$[A-Za-z0-9_]+", "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\$\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init")
          }], "object-key-init"),
          keywords: cc11001100_hook("keywords", "true false null this is new super", "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "r'''", "object-key-init"),
            end: cc11001100_hook("end", "'''", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", 'r"""', "object-key-init"),
            end: cc11001100_hook("end", '"""', "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "r'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", 'r"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'''", "object-key-init"),
            end: cc11001100_hook("end", "'''", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, n, a], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"""', "object-key-init"),
            end: cc11001100_hook("end", '"""', "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, n, a], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, n, a], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, n, a], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      a.contains = cc11001100_hook("a.contains", [e.C_NUMBER_MODE, t], "assign");
      var i = cc11001100_hook("i", ["Comparable", "DateTime", "Duration", "Function", "Iterable", "Iterator", "List", "Map", "Match", "Object", "Pattern", "RegExp", "Set", "Stopwatch", "String", "StringBuffer", "StringSink", "Symbol", "Type", "Uri", "bool", "double", "int", "num", "Element", "ElementList"], "var-init"),
        r = cc11001100_hook("r", i.map(function (e) {
          return e + "?";
        }), "var-init");
      return {
        name: cc11001100_hook("name", "Dart", "object-key-init"),
        keywords: {
          keyword: cc11001100_hook("keyword", ["abstract", "as", "assert", "async", "await", "break", "case", "catch", "class", "const", "continue", "covariant", "default", "deferred", "do", "dynamic", "else", "enum", "export", "extends", "extension", "external", "factory", "false", "final", "finally", "for", "Function", "get", "hide", "if", "implements", "import", "in", "inferface", "is", "late", "library", "mixin", "new", "null", "on", "operator", "part", "required", "rethrow", "return", "set", "show", "static", "super", "switch", "sync", "this", "throw", "true", "try", "typedef", "var", "void", "while", "with", "yield"], "object-key-init"),
          built_in: cc11001100_hook("built_in", i.concat(r).concat(["Never", "Null", "dynamic", "print", "document", "querySelector", "querySelectorAll", "window"]), "object-key-init"),
          $pattern: cc11001100_hook("$pattern", /[A-Za-z][A-Za-z0-9_]*\??/, "object-key-init")
        },
        contains: cc11001100_hook("contains", [t, e.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
          subLanguage: cc11001100_hook("subLanguage", "markdown", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }), e.COMMENT(/\/{3,} ?/, /$/, {
          contains: cc11001100_hook("contains", [{
            subLanguage: cc11001100_hook("subLanguage", "markdown", "object-key-init"),
            begin: cc11001100_hook("begin", ".", "object-key-init"),
            end: cc11001100_hook("end", "$", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "class interface", "object-key-init"),
          end: cc11001100_hook("end", /\{/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "extends implements", "object-key-init")
          }, e.UNDERSCORE_TITLE_MODE], "object-key-init")
        }, e.C_NUMBER_MODE, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "=>", "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("dart", e);
})(); /*! `haskell` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", {
          variants: cc11001100_hook("variants", [e.COMMENT("--", "$"), e.COMMENT(/\{-/, /-\}/, {
            contains: cc11001100_hook("contains", ["self"], "object-key-init")
          })], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /\{-#/, "object-key-init"),
          end: cc11001100_hook("end", /#-\}/, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "^#", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b[A-Z][\\w']*", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          begin: cc11001100_hook("begin", "\\(", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          illegal: cc11001100_hook("illegal", '"', "object-key-init"),
          contains: cc11001100_hook("contains", [a, i, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            begin: cc11001100_hook("begin", "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?", "object-key-init")
          }, e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", "[_a-z][\\w']*", "object-key-init")
          }), n], "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", "([0-9a-fA-F]_*)+", "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b", "object-key-init")
          }, {
            match: cc11001100_hook("match", "\\b0[xX]_*(".concat(t, ")(\\.(").concat(t, "))?([pP][+-]?(([0-9]_*)+))?\\b"), "object-key-init")
          }, {
            match: cc11001100_hook("match", "\\b0[oO](([0-7]_*)+)\\b", "object-key-init")
          }, {
            match: cc11001100_hook("match", "\\b0[bB](([01]_*)+)\\b", "object-key-init")
          }], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Haskell", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["hs"], "object-key-init"),
        keywords: cc11001100_hook("keywords", "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec", "object-key-init"),
        contains: cc11001100_hook("contains", [{
          beginKeywords: cc11001100_hook("beginKeywords", "module", "object-key-init"),
          end: cc11001100_hook("end", "where", "object-key-init"),
          keywords: cc11001100_hook("keywords", "module where", "object-key-init"),
          contains: cc11001100_hook("contains", [l, n], "object-key-init"),
          illegal: cc11001100_hook("illegal", "\\W\\.|;", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\bimport\\b", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          keywords: cc11001100_hook("keywords", "import qualified as hiding", "object-key-init"),
          contains: cc11001100_hook("contains", [l, n], "object-key-init"),
          illegal: cc11001100_hook("illegal", "\\W\\.|;", "object-key-init")
        }, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          begin: cc11001100_hook("begin", "^(\\s*)?(class|instance)\\b", "object-key-init"),
          end: cc11001100_hook("end", "where", "object-key-init"),
          keywords: cc11001100_hook("keywords", "class family instance where", "object-key-init"),
          contains: cc11001100_hook("contains", [s, l, n], "object-key-init")
        }, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(data|(new)?type)\\b", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          keywords: cc11001100_hook("keywords", "data family type newtype deriving", "object-key-init"),
          contains: cc11001100_hook("contains", [a, s, l, {
            begin: cc11001100_hook("begin", /\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init"),
            contains: cc11001100_hook("contains", l.contains, "object-key-init")
          }, n], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "default", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          contains: cc11001100_hook("contains", [s, l, n], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "infix infixl infixr", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_NUMBER_MODE, n], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\bforeign\\b", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          keywords: cc11001100_hook("keywords", "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe", "object-key-init"),
          contains: cc11001100_hook("contains", [s, e.QUOTE_STRING_MODE, n], "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "#!\\/usr\\/bin\\/env runhaskell", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init")
        }, a, i, e.QUOTE_STRING_MODE, c, s, e.inherit(e.TITLE_MODE, {
          begin: cc11001100_hook("begin", "^[_a-z][\\w']*", "object-key-init")
        }), n, {
          begin: cc11001100_hook("begin", "->|<-", "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("haskell", e);
})(); /*! `coffeescript` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    var e = cc11001100_hook("e", ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], "var-init"),
      n = cc11001100_hook("n", ["true", "false", "null", "undefined", "NaN", "Infinity"], "var-init"),
      r = cc11001100_hook("r", [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"], ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]), "var-init");
    return function (t) {
      var a = cc11001100_hook("a", {
        keyword: cc11001100_hook("keyword", e.concat(["then", "unless", "until", "loop", "by", "when", "and", "or", "is", "isnt", "not"]).filter((i = cc11001100_hook("i", ["var", "const", "let", "function", "static"], "assign"), function (e) {
          return !i.includes(e);
        })), "object-key-init"),
        literal: cc11001100_hook("literal", n.concat(["yes", "no", "on", "off"]), "object-key-init"),
        built_in: cc11001100_hook("built_in", r.concat(["npm", "print"]), "object-key-init")
      }, "var-init");
      var i;
      var s = cc11001100_hook("s", "[A-Za-z$_][0-9A-Za-z$_]*", "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /#\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", a, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", [t.BINARY_NUMBER_MODE, t.inherit(t.C_NUMBER_MODE, {
          starts: {
            end: cc11001100_hook("end", "(\\s*/)?", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }
        }), {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'''/, "object-key-init"),
            end: cc11001100_hook("end", /'''/, "object-key-init"),
            contains: cc11001100_hook("contains", [t.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init"),
            contains: cc11001100_hook("contains", [t.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /"""/, "object-key-init"),
            end: cc11001100_hook("end", /"""/, "object-key-init"),
            contains: cc11001100_hook("contains", [t.BACKSLASH_ESCAPE, o], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init"),
            contains: cc11001100_hook("contains", [t.BACKSLASH_ESCAPE, o], "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "regexp", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "///", "object-key-init"),
            end: cc11001100_hook("end", "///", "object-key-init"),
            contains: cc11001100_hook("contains", [o, t.HASH_COMMENT_MODE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "//[gim]{0,3}(?=\\W)", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/, "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "@" + s, "object-key-init")
        }, {
          subLanguage: cc11001100_hook("subLanguage", "javascript", "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "```", "object-key-init"),
            end: cc11001100_hook("end", "```", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "`", "object-key-init"),
            end: cc11001100_hook("end", "`", "object-key-init")
          }], "object-key-init")
        }], "var-init");
      o.contains = cc11001100_hook("o.contains", c, "assign");
      var l = cc11001100_hook("l", t.inherit(t.TITLE_MODE, {
          begin: cc11001100_hook("begin", s, "object-key-init")
        }), "var-init"),
        d = cc11001100_hook("d", "(\\(.*\\)\\s*)?\\B[-=]>", "var-init"),
        g = cc11001100_hook("g", {
          className: cc11001100_hook("className", "params", "object-key-init"),
          begin: cc11001100_hook("begin", "\\([^\\(]", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", a, "object-key-init"),
            contains: cc11001100_hook("contains", ["self"].concat(c), "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/class\s+/, s, /\s+extends\s+/, s], "object-key-init")
          }, {
            match: cc11001100_hook("match", [/class\s+/, s], "object-key-init")
          }], "object-key-init"),
          scope: {
            2: cc11001100_hook(2, "title.class", "object-key-init"),
            4: cc11001100_hook(4, "title.class.inherited", "object-key-init")
          },
          keywords: cc11001100_hook("keywords", a, "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "CoffeeScript", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["coffee", "cson", "iced"], "object-key-init"),
        keywords: cc11001100_hook("keywords", a, "object-key-init"),
        illegal: cc11001100_hook("illegal", /\/\*/, "object-key-init"),
        contains: cc11001100_hook("contains", [].concat(c, [t.COMMENT("###", "###"), t.HASH_COMMENT_MODE, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", "^\\s*" + s + "\\s*=\\s*" + d, "object-key-init"),
          end: cc11001100_hook("end", "[-=]>", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [l, g], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /[:\(,=]\s*/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "function", "object-key-init"),
            begin: cc11001100_hook("begin", d, "object-key-init"),
            end: cc11001100_hook("end", "[-=]>", "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [g], "object-key-init")
          }], "object-key-init")
        }, u, {
          begin: cc11001100_hook("begin", s + ":", "object-key-init"),
          end: cc11001100_hook("end", ":", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }]), "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("coffeescript", e);
})(); /*! `java` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    var e = cc11001100_hook("e", "\\.([0-9](_*[0-9])*)", "var-init"),
      a = cc11001100_hook("a", "[0-9a-fA-F](_*[0-9a-fA-F])*", "var-init"),
      n = cc11001100_hook("n", {
        className: cc11001100_hook("className", "number", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", "(\\b([0-9](_*[0-9])*)((".concat(e, ")|\\.)?|(").concat(e, "))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b"), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b([0-9](_*[0-9])*)((".concat(e, ")[fFdD]?\\b|\\.([fFdD]\\b)?)"), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "(".concat(e, ")[fFdD]?\\b"), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b([0-9](_*[0-9])*)[fFdD]\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0[xX]((".concat(a, ")\\.?|(").concat(a, ")?\\.(").concat(a, "))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b"), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b(0|[1-9](_*[0-9])*)[lL]?\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0[xX](".concat(a, ")[lL]?\\b"), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0(_*[0-7])*[lL]?\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0[bB][01](_*[01])*[lL]?\\b", "object-key-init")
        }], "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, "var-init");
    function s(e, a, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      return -1 === n ? "" : e.replace(a, function (t) {
        return s(e, a, n - 1);
      });
    }
    return function (e) {
      var a = cc11001100_hook("a", e.regex, "var-init"),
        t = cc11001100_hook("t", "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*", "var-init"),
        i = cc11001100_hook("i", t + s("(?:<" + t + "~~~(?:\\s*,\\s*" + t + "~~~)*>)?", /~~~/g, 2), "var-init"),
        r = cc11001100_hook("r", {
          keyword: cc11001100_hook("keyword", ["synchronized", "abstract", "private", "var", "static", "if", "const ", "for", "while", "strictfp", "finally", "protected", "import", "native", "final", "void", "enum", "else", "break", "transient", "catch", "instanceof", "volatile", "case", "assert", "package", "default", "public", "try", "switch", "continue", "throws", "protected", "public", "private", "module", "requires", "exports", "do", "sealed", "yield", "permits"], "object-key-init"),
          literal: cc11001100_hook("literal", ["false", "true", "null"], "object-key-init"),
          type: cc11001100_hook("type", ["char", "boolean", "long", "float", "int", "byte", "short", "double"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["super", "this"], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@" + t, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            contains: cc11001100_hook("contains", ["self"], "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "params", "object-key-init"),
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          keywords: cc11001100_hook("keywords", r, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_BLOCK_COMMENT_MODE], "object-key-init"),
          endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Java", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["jsp"], "object-key-init"),
        keywords: cc11001100_hook("keywords", r, "object-key-init"),
        illegal: cc11001100_hook("illegal", /<\/|#/, "object-key-init"),
        contains: cc11001100_hook("contains", [e.COMMENT("/\\*\\*", "\\*/", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\w+@/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
          }], "object-key-init")
        }), {
          begin: cc11001100_hook("begin", /import java\.[a-z]+\./, "object-key-init"),
          keywords: cc11001100_hook("keywords", "import", "object-key-init"),
          relevance: cc11001100_hook("relevance", 2, "object-key-init")
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
          begin: cc11001100_hook("begin", /"""/, "object-key-init"),
          end: cc11001100_hook("end", /"""/, "object-key-init"),
          className: cc11001100_hook("className", "string", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
          match: cc11001100_hook("match", [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, t], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          }
        }, {
          match: cc11001100_hook("match", /non-sealed/, "object-key-init"),
          scope: cc11001100_hook("scope", "keyword", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", [a.concat(/(?!else)/, t), /\s+/, t, /\s+/, /=(?!=)/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "type", "object-key-init"),
            3: cc11001100_hook(3, "variable", "object-key-init"),
            5: cc11001100_hook(5, "operator", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", [/record/, /\s+/, t], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          },
          contains: cc11001100_hook("contains", [c, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "new throw return else", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", ["(?:" + i + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/], "object-key-init"),
          className: {
            2: cc11001100_hook(2, "title.function", "object-key-init")
          },
          keywords: cc11001100_hook("keywords", r, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", r, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [l, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, n, e.C_BLOCK_COMMENT_MODE], "object-key-init")
          }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, n, l], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("java", e);
})(); /*! `groovy` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    function e(e) {
      cc11001100_hook("e", e, "function-parameter");
      var a = cc11001100_hook("a", arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, "var-init");
      return a.variants = cc11001100_hook("a.variants", e, "assign"), a;
    }
    return function (a) {
      var n = cc11001100_hook("n", a.regex, "var-init"),
        t = cc11001100_hook("t", "[A-Za-z0-9_$]+", "var-init"),
        r = cc11001100_hook("r", e([a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, a.COMMENT("/\\*\\*", "\\*/", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\w+@/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
          }], "object-key-init")
        })]), "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "regexp", "object-key-init"),
          begin: cc11001100_hook("begin", /~?\/[^\/\n]+\//, "object-key-init"),
          contains: cc11001100_hook("contains", [a.BACKSLASH_ESCAPE], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", e([a.BINARY_NUMBER_MODE, a.C_NUMBER_MODE]), "var-init"),
        l = cc11001100_hook("l", e([{
          begin: cc11001100_hook("begin", /"""/, "object-key-init"),
          end: cc11001100_hook("end", /"""/, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /'''/, "object-key-init"),
          end: cc11001100_hook("end", /'''/, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\$/", "object-key-init"),
          end: cc11001100_hook("end", "/\\$", "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }, a.APOS_STRING_MODE, a.QUOTE_STRING_MODE], {
          className: cc11001100_hook("className", "string", "object-key-init")
        }), "var-init"),
        c = cc11001100_hook("c", {
          match: cc11001100_hook("match", [/(class|interface|trait|enum|extends|implements)/, /\s+/, a.UNDERSCORE_IDENT_RE], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          }
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Groovy", "object-key-init"),
        keywords: {
          "variable.language": cc11001100_hook("variable.language", "this super", "object-key-init"),
          literal: cc11001100_hook("literal", "true false null", "object-key-init"),
          type: cc11001100_hook("type", ["byte", "short", "char", "int", "long", "boolean", "float", "double", "void"], "object-key-init"),
          keyword: cc11001100_hook("keyword", ["def", "as", "in", "assert", "trait", "abstract", "static", "volatile", "transient", "public", "private", "protected", "synchronized", "final", "class", "interface", "enum", "if", "else", "for", "while", "switch", "case", "break", "default", "continue", "throw", "throws", "try", "catch", "finally", "implements", "extends", "new", "import", "package", "return", "instanceof"], "object-key-init")
        },
        contains: cc11001100_hook("contains", [a.SHEBANG({
          binary: cc11001100_hook("binary", "groovy", "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }), r, l, s, i, c, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "attr", "object-key-init"),
          begin: cc11001100_hook("begin", t + "[ \t]*:", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /\?/, "object-key-init"),
          end: cc11001100_hook("end", /:/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [r, l, s, i, "self"], "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", "^[ \t]*" + n.lookahead(t + ":"), "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", t + ":", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }], "object-key-init"),
        illegal: cc11001100_hook("illegal", /#|<\//, "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("groovy", e);
})(); /*! `c` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", e.regex, "var-init"),
        t = cc11001100_hook("t", e.COMMENT("//", "$", {
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        s = cc11001100_hook("s", "[a-zA-Z_]\\w*::", "var-init"),
        a = cc11001100_hook("a", "(decltype\\(auto\\)|" + n.optional(s) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "type", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b[a-z\\d_]*_t\\b", "object-key-init")
          }, {
            match: cc11001100_hook("match", /\batomic_[a-z]{3,6}\b/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", '(u8?|U|L)?"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            illegal: cc11001100_hook("illegal", ".", "object-key-init")
          }, e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)([^()\\ ]{0,16})"/, "object-key-init")
          })], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b(0b[01']+)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /#\s*[a-z]+\b/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include", "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, e.inherit(i, {
            className: cc11001100_hook("className", "string", "object-key-init")
          }), {
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /<.*?>/, "object-key-init")
          }, t, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "title", "object-key-init"),
          begin: cc11001100_hook("begin", n.optional(s) + e.IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", n.optional(s) + e.IDENT_RE + "\\s*\\(", "var-init"),
        u = cc11001100_hook("u", {
          keyword: cc11001100_hook("keyword", ["asm", "auto", "break", "case", "continue", "default", "do", "else", "enum", "extern", "for", "fortran", "goto", "if", "inline", "register", "restrict", "return", "sizeof", "struct", "switch", "typedef", "union", "volatile", "while", "_Alignas", "_Alignof", "_Atomic", "_Generic", "_Noreturn", "_Static_assert", "_Thread_local", "alignas", "alignof", "noreturn", "static_assert", "thread_local", "_Pragma"], "object-key-init"),
          type: cc11001100_hook("type", ["float", "double", "signed", "unsigned", "int", "short", "long", "char", "void", "_Bool", "_Complex", "_Imaginary", "_Decimal32", "_Decimal64", "_Decimal128", "const", "static", "complex", "bool", "imaginary"], "object-key-init"),
          literal: cc11001100_hook("literal", "true false NULL", "object-key-init"),
          built_in: cc11001100_hook("built_in", "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr", "object-key-init")
        }, "var-init"),
        g = cc11001100_hook("g", [o, r, t, e.C_BLOCK_COMMENT_MODE, l, i], "var-init"),
        m = cc11001100_hook("m", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /=/, "object-key-init"),
            end: cc11001100_hook("end", /;/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init")
          }, {
            beginKeywords: cc11001100_hook("beginKeywords", "new throw return else", "object-key-init"),
            end: cc11001100_hook("end", /;/, "object-key-init")
          }], "object-key-init"),
          keywords: cc11001100_hook("keywords", u, "object-key-init"),
          contains: cc11001100_hook("contains", g.concat([{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", u, "object-key-init"),
            contains: cc11001100_hook("contains", g.concat(["self"]), "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }]), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        p = cc11001100_hook("p", {
          begin: cc11001100_hook("begin", "(" + a + "[\\*&\\s]+)+" + d, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", u, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\w\s\*&:<>.]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "decltype\\(auto\\)", "object-key-init"),
            keywords: cc11001100_hook("keywords", u, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", d, "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [e.inherit(c, {
              className: cc11001100_hook("className", "title.function", "object-key-init")
            })], "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            match: cc11001100_hook("match", /,/, "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", u, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [t, e.C_BLOCK_COMMENT_MODE, i, l, r, {
              begin: cc11001100_hook("begin", /\(/, "object-key-init"),
              end: cc11001100_hook("end", /\)/, "object-key-init"),
              keywords: cc11001100_hook("keywords", u, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init"),
              contains: cc11001100_hook("contains", ["self", t, e.C_BLOCK_COMMENT_MODE, i, l, r], "object-key-init")
            }], "object-key-init")
          }, r, t, e.C_BLOCK_COMMENT_MODE, o], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "C", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["h"], "object-key-init"),
        keywords: cc11001100_hook("keywords", u, "object-key-init"),
        disableAutodetect: cc11001100_hook("disableAutodetect", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        contains: cc11001100_hook("contains", [].concat(m, p, g, [o, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "::", "object-key-init"),
          keywords: cc11001100_hook("keywords", u, "object-key-init")
        }, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "enum class struct union", "object-key-init"),
          end: cc11001100_hook("end", /[{;:<>=]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "final class struct", "object-key-init")
          }, e.TITLE_MODE], "object-key-init")
        }]), "object-key-init"),
        exports: {
          preprocessor: cc11001100_hook("preprocessor", o, "object-key-init"),
          strings: cc11001100_hook("strings", i, "object-key-init"),
          keywords: cc11001100_hook("keywords", u, "object-key-init")
        }
      };
    };
  }(), "var-init");
  hljs.registerLanguage("c", e);
})(); /*! `rust` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var t = cc11001100_hook("t", e.regex, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "title.function.invoke", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          begin: cc11001100_hook("begin", t.concat(/\b/, /(?!let\b)/, e.IDENT_RE, t.lookahead(/\s*\(/)), "object-key-init")
        }, "var-init"),
        n = cc11001100_hook("n", "([ui](8|16|32|64|128|size)|f(32|64))?", "var-init"),
        s = cc11001100_hook("s", ["drop ", "Copy", "Send", "Sized", "Sync", "Drop", "Fn", "FnMut", "FnOnce", "ToOwned", "Clone", "Debug", "PartialEq", "PartialOrd", "Eq", "Ord", "AsRef", "AsMut", "Into", "From", "Default", "Iterator", "Extend", "IntoIterator", "DoubleEndedIterator", "ExactSizeIterator", "SliceConcatExt", "ToString", "assert!", "assert_eq!", "bitflags!", "bytes!", "cfg!", "col!", "concat!", "concat_idents!", "debug_assert!", "debug_assert_eq!", "env!", "panic!", "file!", "format!", "format_args!", "include_bytes!", "include_str!", "line!", "local_data_key!", "module_path!", "option_env!", "print!", "println!", "select!", "stringify!", "try!", "unimplemented!", "unreachable!", "vec!", "write!", "writeln!", "macro_rules!", "assert_ne!", "debug_assert_ne!"], "var-init"),
        r = cc11001100_hook("r", ["i8", "i16", "i32", "i64", "i128", "isize", "u8", "u16", "u32", "u64", "u128", "usize", "f32", "f64", "str", "char", "bool", "Box", "Option", "Result", "String", "Vec"], "var-init");
      return {
        name: cc11001100_hook("name", "Rust", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["rs"], "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", e.IDENT_RE + "!?", "object-key-init"),
          type: cc11001100_hook("type", r, "object-key-init"),
          keyword: cc11001100_hook("keyword", ["abstract", "as", "async", "await", "become", "box", "break", "const", "continue", "crate", "do", "dyn", "else", "enum", "extern", "false", "final", "fn", "for", "if", "impl", "in", "let", "loop", "macro", "match", "mod", "move", "mut", "override", "priv", "pub", "ref", "return", "self", "Self", "static", "struct", "super", "trait", "true", "try", "type", "typeof", "unsafe", "unsized", "use", "virtual", "where", "while", "yield"], "object-key-init"),
          literal: cc11001100_hook("literal", ["true", "false", "Some", "None", "Ok", "Err"], "object-key-init"),
          built_in: cc11001100_hook("built_in", s, "object-key-init")
        },
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        contains: cc11001100_hook("contains", [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
          contains: cc11001100_hook("contains", ["self"], "object-key-init")
        }), e.inherit(e.QUOTE_STRING_MODE, {
          begin: cc11001100_hook("begin", /b?"/, "object-key-init"),
          illegal: cc11001100_hook("illegal", null, "object-key-init")
        }), {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /b?r(#*)"(.|\n)*?"\1(?!#)/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", /'[a-zA-Z_][a-zA-Z0-9_]*/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b0b([01_]+)" + n, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0o([0-7_]+)" + n, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0x([A-Fa-f0-9_]+)" + n, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + n, "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "#!?\\[", "object-key-init"),
          end: cc11001100_hook("end", "\\]", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "keyword", "object-key-init"),
            4: cc11001100_hook(4, "variable", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "variable", "object-key-init"),
            5: cc11001100_hook(5, "keyword", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", [/type/, /\s+/, e.UNDERSCORE_IDENT_RE], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", [/(?:trait|enum|struct|union|impl|for)/, /\s+/, e.UNDERSCORE_IDENT_RE], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "::", "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "Self", "object-key-init"),
            built_in: cc11001100_hook("built_in", s, "object-key-init"),
            type: cc11001100_hook("type", r, "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "punctuation", "object-key-init"),
          begin: cc11001100_hook("begin", "->", "object-key-init")
        }, a], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("rust", e);
})(); /*! `go` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", {
        keyword: cc11001100_hook("keyword", ["break", "case", "chan", "const", "continue", "default", "defer", "else", "fallthrough", "for", "func", "go", "goto", "if", "import", "interface", "map", "package", "range", "return", "select", "struct", "switch", "type", "var"], "object-key-init"),
        type: cc11001100_hook("type", ["bool", "byte", "complex64", "complex128", "error", "float32", "float64", "int8", "int16", "int32", "int64", "string", "uint8", "uint16", "uint32", "uint64", "int", "uint", "uintptr", "rune"], "object-key-init"),
        literal: cc11001100_hook("literal", ["true", "false", "iota", "nil"], "object-key-init"),
        built_in: cc11001100_hook("built_in", ["append", "cap", "close", "complex", "copy", "imag", "len", "make", "new", "panic", "print", "println", "real", "recover", "delete"], "object-key-init")
      }, "var-init");
      return {
        name: cc11001100_hook("name", "Go", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["golang"], "object-key-init"),
        keywords: cc11001100_hook("keywords", n, "object-key-init"),
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        contains: cc11001100_hook("contains", [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
            begin: cc11001100_hook("begin", "`", "object-key-init"),
            end: cc11001100_hook("end", "`", "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", e.C_NUMBER_RE + "[i]", "object-key-init"),
            relevance: cc11001100_hook("relevance", 1, "object-key-init")
          }, e.C_NUMBER_MODE], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /:=/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "func", "object-key-init"),
          end: cc11001100_hook("end", "\\s*(\\{|$)", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.TITLE_MODE, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
            keywords: cc11001100_hook("keywords", n, "object-key-init"),
            illegal: cc11001100_hook("illegal", /["']/, "object-key-init")
          }], "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("go", e);
})(); /*! `puppet` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var s = cc11001100_hook("s", e.COMMENT("#", "$"), "var-init"),
        r = cc11001100_hook("r", "([A-Za-z_]|::)(\\w|::)*", "var-init"),
        a = cc11001100_hook("a", e.inherit(e.TITLE_MODE, {
          begin: cc11001100_hook("begin", r, "object-key-init")
        }), "var-init"),
        n = cc11001100_hook("n", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", "\\$" + r, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, n], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Puppet", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["pp"], "object-key-init"),
        contains: cc11001100_hook("contains", [s, n, i, {
          beginKeywords: cc11001100_hook("beginKeywords", "class", "object-key-init"),
          end: cc11001100_hook("end", "\\{|;", "object-key-init"),
          illegal: cc11001100_hook("illegal", /=/, "object-key-init"),
          contains: cc11001100_hook("contains", [a, s], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "define", "object-key-init"),
          end: cc11001100_hook("end", /\{/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "section", "object-key-init"),
            begin: cc11001100_hook("begin", e.IDENT_RE, "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "\\s+\\{", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /\S/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            begin: cc11001100_hook("begin", e.IDENT_RE, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0.2, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init"),
            keywords: {
              keyword: cc11001100_hook("keyword", "and case default else elsif false if in import enherits node or true undef unless main settings $string ", "object-key-init"),
              literal: cc11001100_hook("literal", "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted", "object-key-init"),
              built_in: cc11001100_hook("built_in", "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version", "object-key-init")
            },
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [i, s, {
              begin: cc11001100_hook("begin", "[a-zA-Z_]+\\s*=>", "object-key-init"),
              returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
              end: cc11001100_hook("end", "=>", "object-key-init"),
              contains: cc11001100_hook("contains", [{
                className: cc11001100_hook("className", "attr", "object-key-init"),
                begin: cc11001100_hook("begin", e.IDENT_RE, "object-key-init")
              }], "object-key-init")
            }, {
              className: cc11001100_hook("className", "number", "object-key-init"),
              begin: cc11001100_hook("begin", "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, n], "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("puppet", e);
})(); /*! `ruby` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", e.regex, "var-init"),
        a = cc11001100_hook("a", "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", "var-init"),
        s = cc11001100_hook("s", n.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/), "var-init"),
        i = cc11001100_hook("i", n.concat(s, /(::\w+)*/), "var-init"),
        t = cc11001100_hook("t", {
          "variable.constant": cc11001100_hook("variable.constant", ["__FILE__", "__LINE__", "__ENCODING__"], "object-key-init"),
          "variable.language": cc11001100_hook("variable.language", ["self", "super"], "object-key-init"),
          keyword: cc11001100_hook("keyword", ["alias", "and", "begin", "BEGIN", "break", "case", "class", "defined", "do", "else", "elsif", "end", "END", "ensure", "for", "if", "in", "module", "next", "not", "or", "redo", "require", "rescue", "retry", "return", "then", "undef", "unless", "until", "when", "while", "yield", "include", "extend", "prepend", "public", "private", "protected", "raise", "throw"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["proc", "lambda", "attr_accessor", "attr_reader", "attr_writer", "define_method", "private_constant", "module_function"], "object-key-init"),
          literal: cc11001100_hook("literal", ["true", "false", "nil"], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "doctag", "object-key-init"),
          begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          begin: cc11001100_hook("begin", "#<", "object-key-init"),
          end: cc11001100_hook("end", ">", "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", [e.COMMENT("#", "$", {
          contains: cc11001100_hook("contains", [c], "object-key-init")
        }), e.COMMENT("^=begin", "^=end", {
          contains: cc11001100_hook("contains", [c], "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }), e.COMMENT("^__END__", e.MATCH_NOTHING_RE)], "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /#\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, l], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /`/, "object-key-init"),
            end: cc11001100_hook("end", /`/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?\[/, "object-key-init"),
            end: cc11001100_hook("end", /\]/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?</, "object-key-init"),
            end: cc11001100_hook("end", />/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?\//, "object-key-init"),
            end: cc11001100_hook("end", /\//, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?%/, "object-key-init"),
            end: cc11001100_hook("end", /%/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?-/, "object-key-init"),
            end: cc11001100_hook("end", /-/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?\|/, "object-key-init"),
            end: cc11001100_hook("end", /\|/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?(\\\d{1,3})/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?(\\x[A-Fa-f0-9]{1,2})/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?\\(c|C-)[\x20-\x7e]/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?\\?\S/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/<<[-~]?'?/, n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)), "object-key-init"),
            contains: cc11001100_hook("contains", [e.END_SAME_AS_BEGIN({
              begin: cc11001100_hook("begin", /(\w+)/, "object-key-init"),
              end: cc11001100_hook("end", /(\w+)/, "object-key-init"),
              contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, l], "object-key-init")
            })], "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", "[0-9](_?[0-9])*", "var-init"),
        g = cc11001100_hook("g", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b([1-9](_?[0-9])*|0)(\\.(".concat(o, "))?([eE][+-]?(").concat(o, ")|r)?i?\\b"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[dD][0-9](_?[0-9])*r?i?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[bB][0-1](_?[0-1])*r?i?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[oO][0-7](_?[0-7])*r?i?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0(_?[0-7])+r?i?\\b", "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        _ = cc11001100_hook("_", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", /\(\)/, "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /(?=\))/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
            keywords: cc11001100_hook("keywords", t, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", [d, {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/class\s+/, i, /\s+<\s+/, i], "object-key-init")
          }, {
            match: cc11001100_hook("match", [/\b(class|module)\s+/, i], "object-key-init")
          }], "object-key-init"),
          scope: {
            2: cc11001100_hook(2, "title.class", "object-key-init"),
            4: cc11001100_hook(4, "title.class.inherited", "object-key-init")
          },
          keywords: cc11001100_hook("keywords", t, "object-key-init")
        }, {
          match: cc11001100_hook("match", [/(include|extend)\s+/, i], "object-key-init"),
          scope: {
            2: cc11001100_hook(2, "title.class", "object-key-init")
          },
          keywords: cc11001100_hook("keywords", t, "object-key-init")
        }, {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", [i, /\.new[. (]/], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "title.class", "object-key-init")
          }
        }, {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", /\b[A-Z][A-Z_0-9]+\b/, "object-key-init"),
          className: cc11001100_hook("className", "variable.constant", "object-key-init")
        }, {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", s, "object-key-init"),
          scope: cc11001100_hook("scope", "title.class", "object-key-init")
        }, {
          match: cc11001100_hook("match", [/def/, /\s+/, a], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [_], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "::", "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE + "(!|\\?)?:", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", ":(?!\\s)", "object-key-init"),
          contains: cc11001100_hook("contains", [d, {
            begin: cc11001100_hook("begin", a, "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, g, {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])", "object-key-init")
        }, {
          className: cc11001100_hook("className", "params", "object-key-init"),
          begin: cc11001100_hook("begin", /\|/, "object-key-init"),
          end: cc11001100_hook("end", /\|/, "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "(" + e.RE_STARTERS_RE + "|unless)\\s*", "object-key-init"),
          keywords: cc11001100_hook("keywords", "unless", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "regexp", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, l], "object-key-init"),
            illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", "/", "object-key-init"),
              end: cc11001100_hook("end", "/[a-z]*", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", /%r\{/, "object-key-init"),
              end: cc11001100_hook("end", /\}[a-z]*/, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "%r\\(", "object-key-init"),
              end: cc11001100_hook("end", "\\)[a-z]*", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "%r!", "object-key-init"),
              end: cc11001100_hook("end", "![a-z]*", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "%r\\[", "object-key-init"),
              end: cc11001100_hook("end", "\\][a-z]*", "object-key-init")
            }], "object-key-init")
          }].concat(r, b), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }].concat(r, b), "var-init");
      l.contains = cc11001100_hook("l.contains", u, "assign"), _.contains = cc11001100_hook("_.contains", u, "assign");
      var m = cc11001100_hook("m", [{
        begin: cc11001100_hook("begin", /^\s*=>/, "object-key-init"),
        starts: {
          end: cc11001100_hook("end", "$", "object-key-init"),
          contains: cc11001100_hook("contains", u, "object-key-init")
        }
      }, {
        className: cc11001100_hook("className", "meta.prompt", "object-key-init"),
        begin: cc11001100_hook("begin", "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])", "object-key-init"),
        starts: {
          end: cc11001100_hook("end", "$", "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init"),
          contains: cc11001100_hook("contains", u, "object-key-init")
        }
      }], "var-init");
      return b.unshift(r), {
        name: cc11001100_hook("name", "Ruby", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["rb", "gemspec", "podspec", "thor", "irb"], "object-key-init"),
        keywords: cc11001100_hook("keywords", t, "object-key-init"),
        illegal: cc11001100_hook("illegal", /\/\*/, "object-key-init"),
        contains: cc11001100_hook("contains", [e.SHEBANG({
          binary: cc11001100_hook("binary", "ruby", "object-key-init")
        })].concat(m).concat(b).concat(u), "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("ruby", e);
})(); /*! `delphi` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var r = cc11001100_hook("r", ["exports", "register", "file", "shl", "array", "record", "property", "for", "mod", "while", "set", "ally", "label", "uses", "raise", "not", "stored", "class", "safecall", "var", "interface", "or", "private", "static", "exit", "index", "inherited", "to", "else", "stdcall", "override", "shr", "asm", "far", "resourcestring", "finalization", "packed", "virtual", "out", "and", "protected", "library", "do", "xorwrite", "goto", "near", "function", "end", "div", "overload", "object", "unit", "begin", "string", "on", "inline", "repeat", "until", "destructor", "write", "message", "program", "with", "read", "initialization", "except", "default", "nil", "if", "case", "cdecl", "in", "downto", "threadvar", "of", "try", "pascal", "const", "external", "constructor", "type", "public", "then", "implementation", "finally", "published", "procedure", "absolute", "reintroduce", "operator", "as", "is", "abstract", "alias", "assembler", "bitpacked", "break", "continue", "cppdecl", "cvar", "enumerator", "experimental", "platform", "deprecated", "unimplemented", "dynamic", "export", "far16", "forward", "generic", "helper", "implements", "interrupt", "iochecks", "local", "name", "nodefault", "noreturn", "nostackframe", "oldfpccall", "otherwise", "saveregisters", "softfloat", "specialize", "strict", "unaligned", "varargs"], "var-init"),
        a = cc11001100_hook("a", [e.C_LINE_COMMENT_MODE, e.COMMENT(/\{/, /\}/, {
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }), e.COMMENT(/\(\*/, /\*\)/, {
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        })], "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\{\$/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(\*\$/, "object-key-init"),
            end: cc11001100_hook("end", /\*\)/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        n = cc11001100_hook("n", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /'/, "object-key-init"),
          end: cc11001100_hook("end", /'/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /''/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /(#\d+)+/, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          begin: cc11001100_hook("begin", e.IDENT_RE + "\\s*=\\s*class\\s*\\(", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.TITLE_MODE], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "function constructor destructor procedure", "object-key-init"),
          end: cc11001100_hook("end", /[:;]/, "object-key-init"),
          keywords: cc11001100_hook("keywords", "function constructor|10 destructor|10 procedure|10", "object-key-init"),
          contains: cc11001100_hook("contains", [e.TITLE_MODE, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", r, "object-key-init"),
            contains: cc11001100_hook("contains", [n, i, t].concat(a), "object-key-init")
          }, t].concat(a), "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Delphi", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["dpr", "dfm", "pas", "pascal"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        keywords: cc11001100_hook("keywords", r, "object-key-init"),
        illegal: cc11001100_hook("illegal", /"|\$[G-Zg-z]|\/\*|<\/|\|/, "object-key-init"),
        contains: cc11001100_hook("contains", [n, i, e.NUMBER_MODE, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\$[0-9A-Fa-f]+", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "&[0-7]+", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%[01]+", "object-key-init")
          }], "object-key-init")
        }, s, c, t].concat(a), "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("delphi", e);
})(); /*! `objectivec` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", /[a-zA-Z@][a-zA-Z0-9_]*/, "var-init"),
        _ = cc11001100_hook("_", {
          $pattern: cc11001100_hook("$pattern", n, "object-key-init"),
          keyword: cc11001100_hook("keyword", ["@interface", "@class", "@protocol", "@implementation"], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Objective-C", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["mm", "objc", "obj-c", "obj-c++", "objective-c++"], "object-key-init"),
        keywords: {
          "variable.language": cc11001100_hook("variable.language", ["this", "super"], "object-key-init"),
          $pattern: cc11001100_hook("$pattern", n, "object-key-init"),
          keyword: cc11001100_hook("keyword", ["while", "export", "sizeof", "typedef", "const", "struct", "for", "union", "volatile", "static", "mutable", "if", "do", "return", "goto", "enum", "else", "break", "extern", "asm", "case", "default", "register", "explicit", "typename", "switch", "continue", "inline", "readonly", "assign", "readwrite", "self", "@synchronized", "id", "typeof", "nonatomic", "IBOutlet", "IBAction", "strong", "weak", "copy", "in", "out", "inout", "bycopy", "byref", "oneway", "__strong", "__weak", "__block", "__autoreleasing", "@private", "@protected", "@public", "@try", "@property", "@end", "@throw", "@catch", "@finally", "@autoreleasepool", "@synthesize", "@dynamic", "@selector", "@optional", "@required", "@encode", "@package", "@import", "@defs", "@compatibility_alias", "__bridge", "__bridge_transfer", "__bridge_retained", "__bridge_retain", "__covariant", "__contravariant", "__kindof", "_Nonnull", "_Nullable", "_Null_unspecified", "__FUNCTION__", "__PRETTY_FUNCTION__", "__attribute__", "getter", "setter", "retain", "unsafe_unretained", "nonnull", "nullable", "null_unspecified", "null_resettable", "class", "instancetype", "NS_DESIGNATED_INITIALIZER", "NS_UNAVAILABLE", "NS_REQUIRES_SUPER", "NS_RETURNS_INNER_POINTER", "NS_INLINE", "NS_AVAILABLE", "NS_DEPRECATED", "NS_ENUM", "NS_OPTIONS", "NS_SWIFT_UNAVAILABLE", "NS_ASSUME_NONNULL_BEGIN", "NS_ASSUME_NONNULL_END", "NS_REFINED_FOR_SWIFT", "NS_SWIFT_NAME", "NS_SWIFT_NOTHROW", "NS_DURING", "NS_HANDLER", "NS_ENDHANDLER", "NS_VALUERETURN", "NS_VOIDRETURN"], "object-key-init"),
          literal: cc11001100_hook("literal", ["false", "true", "FALSE", "TRUE", "nil", "YES", "NO", "NULL"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["dispatch_once_t", "dispatch_queue_t", "dispatch_sync", "dispatch_async", "dispatch_once"], "object-key-init"),
          type: cc11001100_hook("type", ["int", "float", "char", "unsigned", "signed", "short", "long", "double", "wchar_t", "unichar", "void", "bool", "BOOL", "id|0", "_Bool"], "object-key-init")
        },
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "built_in", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+", "object-key-init")
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", '@"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /#\s*[a-z]+\b/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "if else elif endif define undef warning error line pragma ifdef ifndef include", "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, e.inherit(e.QUOTE_STRING_MODE, {
            className: cc11001100_hook("className", "string", "object-key-init")
          }), {
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /<.*?>/, "object-key-init"),
            end: cc11001100_hook("end", /$/, "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init")
          }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          begin: cc11001100_hook("begin", "(" + _.keyword.join("|") + ")\\b", "object-key-init"),
          end: cc11001100_hook("end", /(\{|$)/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", _, "object-key-init"),
          contains: cc11001100_hook("contains", [e.UNDERSCORE_TITLE_MODE], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\." + e.UNDERSCORE_IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("objectivec", e);
})(); /*! `lisp` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", "[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*", "var-init"),
        a = cc11001100_hook("a", "\\|[^]*?\\|", "var-init"),
        i = cc11001100_hook("i", "(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?", "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "literal", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(t{1}|nil)\\b", "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", i, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "#(b|B)[0-1]+(/[0-1]+)?", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "#(o|O)[0-7]+(/[0-7]+)?", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "#(c|C)\\(" + i + " +" + i, "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", e.inherit(e.QUOTE_STRING_MODE, {
          illegal: cc11001100_hook("illegal", null, "object-key-init")
        }), "var-init"),
        g = cc11001100_hook("g", e.COMMENT(";", "$", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }), "var-init"),
        r = cc11001100_hook("r", {
          begin: cc11001100_hook("begin", "\\*", "object-key-init"),
          end: cc11001100_hook("end", "\\*", "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", "[:&]" + n, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          begin: cc11001100_hook("begin", n, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", {
          begin: cc11001100_hook("begin", a, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          contains: cc11001100_hook("contains", [l, b, r, t, {
            begin: cc11001100_hook("begin", "\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            contains: cc11001100_hook("contains", ["self", s, b, l, c], "object-key-init")
          }, c], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "['`]\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\(quote ", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            keywords: {
              name: cc11001100_hook("name", "quote", "object-key-init")
            }
          }, {
            begin: cc11001100_hook("begin", "'" + a, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        v = cc11001100_hook("v", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "'" + n, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "#'" + n + "(::" + n + ")*", "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", {
          begin: cc11001100_hook("begin", "\\(\\s*", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", {
          endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      return m.contains = cc11001100_hook("m.contains", [{
        className: cc11001100_hook("className", "name", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", n, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", a, "object-key-init")
        }], "object-key-init")
      }, u], "assign"), u.contains = cc11001100_hook("u.contains", [o, v, m, s, l, b, g, r, t, d, c], "assign"), {
        name: cc11001100_hook("name", "Lisp", "object-key-init"),
        illegal: cc11001100_hook("illegal", /\S/, "object-key-init"),
        contains: cc11001100_hook("contains", [l, e.SHEBANG(), s, b, g, o, v, m, c], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("lisp", e);
})(); /*! `python` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", e.regex, "var-init"),
        a = cc11001100_hook("a", /(?:[A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFC5D\uFC64-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDF9\uFE71\uFE73\uFE77\uFE79\uFE7B\uFE7D\uFE7F-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037B-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFC5D\uFC64-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDF9\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE71\uFE73\uFE77\uFE79\uFE7B\uFE7D\uFE7F-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])*/, "var-init"),
        i = cc11001100_hook("i", ["and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"], "var-init"),
        s = cc11001100_hook("s", {
          $pattern: cc11001100_hook("$pattern", /[A-Za-z]\w+|__\w+__/, "object-key-init"),
          keyword: cc11001100_hook("keyword", i, "object-key-init"),
          built_in: cc11001100_hook("built_in", ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"], "object-key-init"),
          literal: cc11001100_hook("literal", ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"], "object-key-init"),
          type: cc11001100_hook("type", ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"], "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /^(>>>|\.\.\.) /, "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", s, "object-key-init"),
          illegal: cc11001100_hook("illegal", /#/, "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          begin: cc11001100_hook("begin", /\{\{/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/, "object-key-init"),
            end: cc11001100_hook("end", /'''/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, t], "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/, "object-key-init"),
            end: cc11001100_hook("end", /"""/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, t], "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([fF][rR]|[rR][fF]|[fF])'''/, "object-key-init"),
            end: cc11001100_hook("end", /'''/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, t, l, r], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([fF][rR]|[rR][fF]|[fF])"""/, "object-key-init"),
            end: cc11001100_hook("end", /"""/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, t, l, r], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([uU]|[rR])'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([uU]|[rR])"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([bB]|[bB][rR]|[rR][bB])'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([bB]|[bB][rR]|[rR][bB])"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([fF][rR]|[rR][fF]|[fF])'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, l, r], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([fF][rR]|[rR][fF]|[fF])"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, l, r], "object-key-init")
          }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", "[0-9](_?[0-9])*", "var-init"),
        c = cc11001100_hook("c", "(\\b(".concat(o, "))?\\.(").concat(o, ")|\\b(").concat(o, ")\\."), "var-init"),
        d = cc11001100_hook("d", "\\b|" + i.join("|"), "var-init"),
        g = cc11001100_hook("g", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "(\\b(".concat(o, ")|(").concat(c, "))[eE][+-]?(").concat(o, ")[jJ]?(?=").concat(d, ")"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(".concat(c, ")[jJ]?"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=".concat(d, ")"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[bB](_?[01])+[lL]?(?=".concat(d, ")"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[oO](_?[0-7])+[lL]?(?=".concat(d, ")"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=".concat(d, ")"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b(".concat(o, ")[jJ](?=").concat(d, ")"), "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        p = cc11001100_hook("p", {
          className: cc11001100_hook("className", "comment", "object-key-init"),
          begin: cc11001100_hook("begin", n.lookahead(/# type:/), "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: cc11001100_hook("keywords", s, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /# type:/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /#/, "object-key-init"),
            end: cc11001100_hook("end", /\b\B/, "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", {
          className: cc11001100_hook("className", "params", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            className: cc11001100_hook("className", "", "object-key-init"),
            begin: cc11001100_hook("begin", /\(\s*\)/, "object-key-init"),
            skip: cc11001100_hook("skip", !0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            keywords: cc11001100_hook("keywords", s, "object-key-init"),
            contains: cc11001100_hook("contains", ["self", t, g, b, e.HASH_COMMENT_MODE], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      return r.contains = cc11001100_hook("r.contains", [b, g, t], "assign"), {
        name: cc11001100_hook("name", "Python", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["py", "gyp", "ipython"], "object-key-init"),
        unicodeRegex: cc11001100_hook("unicodeRegex", !0, "object-key-init"),
        keywords: cc11001100_hook("keywords", s, "object-key-init"),
        illegal: cc11001100_hook("illegal", /(<\/|->|\?)|=>/, "object-key-init"),
        contains: cc11001100_hook("contains", [t, g, {
          begin: cc11001100_hook("begin", /\bself\b/, "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "if", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, b, p, e.HASH_COMMENT_MODE, {
          match: cc11001100_hook("match", [/\bdef/, /\s+/, a], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [m], "object-key-init")
        }, {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/\bclass/, /\s+/, a, /\s*/, /\(\s*/, a, /\s*\)/], "object-key-init")
          }, {
            match: cc11001100_hook("match", [/\bclass/, /\s+/, a], "object-key-init")
          }], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init"),
            6: cc11001100_hook(6, "title.class.inherited", "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /^[\t ]*@/, "object-key-init"),
          end: cc11001100_hook("end", /(?=#)|$/, "object-key-init"),
          contains: cc11001100_hook("contains", [g, m, b], "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("python", e);
})(); /*! `matlab` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var a = cc11001100_hook("a", {
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        contains: cc11001100_hook("contains", [{
          begin: cc11001100_hook("begin", "('|\\.')+", "object-key-init")
        }], "object-key-init")
      }, "var-init");
      return {
        name: cc11001100_hook("name", "Matlab", "object-key-init"),
        keywords: {
          keyword: cc11001100_hook("keyword", "arguments break case catch classdef continue else elseif end enumeration events for function global if methods otherwise parfor persistent properties return spmd switch try while", "object-key-init"),
          built_in: cc11001100_hook("built_in", "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i|0 inf nan isnan isinf isfinite j|0 why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun legend intersect ismember procrustes hold num2cell ", "object-key-init")
        },
        illegal: cc11001100_hook("illegal", '(//|"|#|/\\*|\\s+/\\w+)', "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "function", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          contains: cc11001100_hook("contains", [e.UNDERSCORE_TITLE_MODE, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", "\\(", "object-key-init"),
              end: cc11001100_hook("end", "\\)", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "\\[", "object-key-init"),
              end: cc11001100_hook("end", "\\]", "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "built_in", "object-key-init"),
          begin: cc11001100_hook("begin", /true|false/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          starts: cc11001100_hook("starts", a, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "[a-zA-Z][a-zA-Z_0-9]*('|\\.')+", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          begin: cc11001100_hook("begin", e.C_NUMBER_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          starts: cc11001100_hook("starts", a, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", "'", "object-key-init"),
          end: cc11001100_hook("end", "'", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "''", "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /\]|\}|\)/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          starts: cc11001100_hook("starts", a, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", '"', "object-key-init"),
          end: cc11001100_hook("end", '"', "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }], "object-key-init"),
          starts: cc11001100_hook("starts", a, "object-key-init")
        }, e.COMMENT("^\\s*%\\{\\s*$", "^\\s*%\\}\\s*$"), e.COMMENT("%", "$")], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("matlab", e);
})(); /*! `scala` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var n = cc11001100_hook("n", e.regex, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\$[A-Za-z0-9_]+", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\$\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", '"""', "object-key-init"),
            end: cc11001100_hook("end", '"""', "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '[a-z]+"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, a], "object-key-init")
          }, {
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", '[a-z]+"""', "object-key-init"),
            end: cc11001100_hook("end", '"""', "object-key-init"),
            contains: cc11001100_hook("contains", [a], "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b[A-Z][A-Za-z0-9_]*", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "title", "object-key-init"),
          begin: cc11001100_hook("begin", /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "class object trait type", "object-key-init"),
          end: cc11001100_hook("end", /[:={\[\n;]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
            beginKeywords: cc11001100_hook("beginKeywords", "extends with", "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\[/, "object-key-init"),
            end: cc11001100_hook("end", /\]/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [i], "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [i], "object-key-init")
          }, t], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "def", "object-key-init"),
          end: cc11001100_hook("end", n.lookahead(/[:={\[(\n;]/), "object-key-init"),
          contains: cc11001100_hook("contains", [t], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Scala", "object-key-init"),
        keywords: {
          literal: cc11001100_hook("literal", "true false null", "object-key-init"),
          keyword: cc11001100_hook("keyword", "type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent", "object-key-init")
        },
        contains: cc11001100_hook("contains", [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, s, i, r, l, e.C_NUMBER_MODE, {
          begin: cc11001100_hook("begin", [/^\s*/, "extension", /\s+(?=[[(])/], "object-key-init"),
          beginScope: {
            2: cc11001100_hook(2, "keyword", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", [/^\s*/, /end/, /\s+/, /(extension\b)?/], "object-key-init"),
          beginScope: {
            2: cc11001100_hook(2, "keyword", "object-key-init"),
            4: cc11001100_hook(4, "keyword", "object-key-init")
          }
        }, {
          match: cc11001100_hook("match", /\.inline\b/, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /\binline(?=\s)/, "object-key-init"),
          keywords: cc11001100_hook("keywords", "inline", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", [/\(\s*/, /using/, /\s+(?!\))/], "object-key-init"),
          beginScope: {
            2: cc11001100_hook(2, "keyword", "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("scala", e);
})(); /*! `lua` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var t = cc11001100_hook("t", "\\[=*\\[", "var-init"),
        a = cc11001100_hook("a", "\\]=*\\]", "var-init"),
        n = cc11001100_hook("n", {
          begin: cc11001100_hook("begin", t, "object-key-init"),
          end: cc11001100_hook("end", a, "object-key-init"),
          contains: cc11001100_hook("contains", ["self"], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", [e.COMMENT("--(?!\\[=*\\[)", "$"), e.COMMENT("--\\[=*\\[", a, {
          contains: cc11001100_hook("contains", [n], "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        })], "var-init");
      return {
        name: cc11001100_hook("name", "Lua", "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", e.UNDERSCORE_IDENT_RE, "object-key-init"),
          literal: cc11001100_hook("literal", "true false nil", "object-key-init"),
          keyword: cc11001100_hook("keyword", "and break do else elseif end for goto if in local not or repeat return then until while", "object-key-init"),
          built_in: cc11001100_hook("built_in", "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove", "object-key-init")
        },
        contains: cc11001100_hook("contains", o.concat([{
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "function", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*", "object-key-init")
          }), {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", "\\(", "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
            contains: cc11001100_hook("contains", o, "object-key-init")
          }].concat(o), "object-key-init")
        }, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", t, "object-key-init"),
          end: cc11001100_hook("end", a, "object-key-init"),
          contains: cc11001100_hook("contains", [n], "object-key-init"),
          relevance: cc11001100_hook("relevance", 5, "object-key-init")
        }]), "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("lua", e);
})(); /*! `clojure` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var t = cc11001100_hook("t", "a-zA-Z_\\-!.?+*=<>&'", "var-init"),
        n = cc11001100_hook("n", "[#]?[" + t + "][" + t + "0-9/;:$#]*", "var-init"),
        a = cc11001100_hook("a", "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord", "var-init"),
        r = cc11001100_hook("r", {
          $pattern: cc11001100_hook("$pattern", n, "object-key-init"),
          built_in: cc11001100_hook("built_in", a + " cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize", "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          begin: cc11001100_hook("begin", n, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          scope: cc11001100_hook("scope", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", /[-+]?0[xX][0-9a-fA-F]+N?/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /[-+]?0[0-7]+N?/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /[-+]?[0-9]+\/[0-9]+N?/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /[-+]?([1-9][0-9]*|0)N?/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          scope: cc11001100_hook("scope", "character", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", /\\o[0-3]?[0-7]{1,2}/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\\u[0-9a-fA-F]{4}/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\\(newline|space|tab|formfeed|backspace|return)/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\\\S/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          scope: cc11001100_hook("scope", "regex", "object-key-init"),
          begin: cc11001100_hook("begin", /#"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", e.inherit(e.QUOTE_STRING_MODE, {
          illegal: cc11001100_hook("illegal", null, "object-key-init")
        }), "var-init"),
        l = cc11001100_hook("l", {
          scope: cc11001100_hook("scope", "punctuation", "object-key-init"),
          match: cc11001100_hook("match", /,/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", e.COMMENT(";", "$", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }), "var-init"),
        p = cc11001100_hook("p", {
          className: cc11001100_hook("className", "literal", "object-key-init"),
          begin: cc11001100_hook("begin", /\b(true|false|nil)\b/, "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", {
          begin: cc11001100_hook("begin", "\\[|(#::?" + n + ")?\\{", "object-key-init"),
          end: cc11001100_hook("end", "[\\]\\}]", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        f = cc11001100_hook("f", {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", "[:]{1,2}" + n, "object-key-init")
        }, "var-init"),
        h = cc11001100_hook("h", {
          begin: cc11001100_hook("begin", "\\(", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init")
        }, "var-init"),
        y = cc11001100_hook("y", {
          endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        g = cc11001100_hook("g", {
          keywords: cc11001100_hook("keywords", r, "object-key-init"),
          className: cc11001100_hook("className", "name", "object-key-init"),
          begin: cc11001100_hook("begin", n, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          starts: cc11001100_hook("starts", y, "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", [l, h, c, i, d, m, f, u, o, p, s], "var-init"),
        v = cc11001100_hook("v", {
          beginKeywords: cc11001100_hook("beginKeywords", a, "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", n, "object-key-init"),
            keyword: cc11001100_hook("keyword", a, "object-key-init")
          },
          end: cc11001100_hook("end", '(\\[|#|\\d|"|:|\\{|\\)|\\(|$)', "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "title", "object-key-init"),
            begin: cc11001100_hook("begin", n, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
          }].concat(b), "object-key-init")
        }, "var-init");
      return h.contains = cc11001100_hook("h.contains", [v, g, y], "assign"), y.contains = cc11001100_hook("y.contains", b, "assign"), u.contains = cc11001100_hook("u.contains", b, "assign"), {
        name: cc11001100_hook("name", "Clojure", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["clj", "edn"], "object-key-init"),
        illegal: cc11001100_hook("illegal", /\S/, "object-key-init"),
        contains: cc11001100_hook("contains", [l, h, c, i, d, m, f, u, o, p], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("clojure", e);
})(); /*! `diff` grammar compiled for Highlight.js 11.7.0 */
(function () {
  var e = cc11001100_hook("e", function () {
    "use strict";

    return function (e) {
      var a = cc11001100_hook("a", e.regex, "var-init");
      return {
        name: cc11001100_hook("name", "Diff", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["patch"], "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "meta", "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init"),
          match: cc11001100_hook("match", a.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/), "object-key-init")
        }, {
          className: cc11001100_hook("className", "comment", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", a.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/), "object-key-init"),
            end: cc11001100_hook("end", /$/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /^\*{15}$/, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "addition", "object-key-init"),
          begin: cc11001100_hook("begin", /^\+/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "deletion", "object-key-init"),
          begin: cc11001100_hook("begin", /^-/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "addition", "object-key-init"),
          begin: cc11001100_hook("begin", /^!/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init")
        }], "object-key-init")
      };
    };
  }(), "var-init");
  hljs.registerLanguage("diff", e);
})();