define('tslib', ['require', 'amd_modules/tslib/tslib'], function (require, mod) {
  return mod;
});
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
  var root = cc11001100_hook("root", typeof global === 'object' ? global : typeof self === 'object' ? self : typeof this === 'object' ? this : {}, "var-init");
  if (typeof define === 'function' && define.amd) {
    define('amd_modules/tslib/tslib', ['require', 'exports'], function (require, exports) {
      factory(createExporter(root, createExporter(exports)));
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(createExporter(root, createExporter(module.exports)));
  } else {
    factory(createExporter(root));
  }
  function createExporter(exports, previous) {
    cc11001100_hook("exports", exports, "function-parameter");
    cc11001100_hook("previous", previous, "function-parameter");
    if (exports !== root) {
      if (typeof Object.create === 'function') {
        Object.defineProperty(exports, '__esModule', {
          value: cc11001100_hook("value", true, "object-key-init")
        });
      } else {
        exports.__esModule = cc11001100_hook("exports.__esModule", true, "assign");
      }
    }
    return function (id, v) {
      return exports[id] = cc11001100_hook("exports[id]", previous ? previous(id, v) : v, "assign");
    };
  }
})(function (exporter) {
  var extendStatics = cc11001100_hook("extendStatics", Object.setPrototypeOf || {
    __proto__: cc11001100_hook("__proto__", [], "object-key-init")
  } instanceof Array && function (d, b) {
    d.__proto__ = cc11001100_hook("d.__proto__", b, "assign");
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = cc11001100_hook("d[p]", b[p], "assign");
  }, "var-init");
  __extends = cc11001100_hook("__extends", function (d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = cc11001100_hook("this.constructor", d, "assign");
    }
    d.prototype = cc11001100_hook("d.prototype", b === null ? Object.create(b) : (__.prototype = cc11001100_hook("__.prototype", b.prototype, "assign"), new __()), "assign");
  }, "assign");
  __assign = cc11001100_hook("__assign", Object.assign || function (t) {
    for (var s, i = cc11001100_hook("i", 1, "var-init"), n = cc11001100_hook("n", arguments.length, "var-init"); i < n; i++) {
      s = cc11001100_hook("s", arguments[i], "assign");
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = cc11001100_hook("t[p]", s[p], "assign");
    }
    return t;
  }, "assign");
  __rest = cc11001100_hook("__rest", function (s, e) {
    var t = cc11001100_hook("t", {}, "var-init");
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = cc11001100_hook("t[p]", s[p], "assign");
    if (s != null && typeof Object.getOwnPropertySymbols === 'function') for (var i = cc11001100_hook("i", 0, "var-init"), p = cc11001100_hook("p", Object.getOwnPropertySymbols(s), "var-init"); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = cc11001100_hook("t[p[i]]", s[p[i]], "assign");
    }
    return t;
  }, "assign");
  __decorate = cc11001100_hook("__decorate", function (decorators, target, key, desc) {
    var c = cc11001100_hook("c", arguments.length, "var-init"),
      r = cc11001100_hook("r", c < 3 ? target : desc === null ? desc = cc11001100_hook("desc", Object.getOwnPropertyDescriptor(target, key), "assign") : desc, "var-init"),
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = cc11001100_hook("r", Reflect.decorate(decorators, target, key, desc), "assign");else for (var i = cc11001100_hook("i", decorators.length - 1, "var-init"); i >= 0; i--) if (d = cc11001100_hook("d", decorators[i], "assign")) r = cc11001100_hook("r", (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r, "assign");
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }, "assign");
  __param = cc11001100_hook("__param", function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  }, "assign");
  __metadata = cc11001100_hook("__metadata", function (metadataKey, metadataValue) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(metadataKey, metadataValue);
  }, "assign");
  __awaiter = cc11001100_hook("__awaiter", function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      cc11001100_hook("value", value, "function-parameter");
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }
    return new (P || (P = cc11001100_hook("P", Promise, "assign")))(function (resolve, reject) {
      function fulfilled(value) {
        cc11001100_hook("value", value, "function-parameter");
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        cc11001100_hook("value", value, "function-parameter");
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        cc11001100_hook("result", result, "function-parameter");
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = cc11001100_hook("generator", generator.apply(thisArg, _arguments || []), "assign")).next());
    });
  }, "assign");
  __generator = cc11001100_hook("__generator", function (thisArg, body) {
    var _ = cc11001100_hook("_", {
        label: cc11001100_hook("label", 0, "object-key-init"),
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: cc11001100_hook("trys", [], "object-key-init"),
        ops: cc11001100_hook("ops", [], "object-key-init")
      }, "var-init"),
      f,
      y,
      t,
      g;
    return g = cc11001100_hook("g", {
      next: cc11001100_hook("next", verb(0), "object-key-init"),
      'throw': cc11001100_hook('throw', verb(1), "object-key-init"),
      'return': cc11001100_hook('return', verb(2), "object-key-init")
    }, "assign"), typeof Symbol === 'function' && (g[Symbol.iterator] = cc11001100_hook("g[Symbol.iterator]", function () {
      return this;
    }, "assign")), g;
    function verb(n) {
      cc11001100_hook("n", n, "function-parameter");
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      cc11001100_hook("op", op, "function-parameter");
      if (f) throw new TypeError('Generator is already executing.');
      while (_) try {
        if (f = cc11001100_hook("f", 1, "assign"), y && (t = cc11001100_hook("t", op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = cc11001100_hook("t", y['return'], "assign")) && t.call(y), 0) : y.next, "assign")) && !(t = cc11001100_hook("t", t.call(y, op[1]), "assign")).done) return t;
        if (y = cc11001100_hook("y", 0, "assign"), t) op = cc11001100_hook("op", [op[0] & 2, t.value], "assign");
        switch (op[0]) {
          case 0:
          case 1:
            t = cc11001100_hook("t", op, "assign");
            break;
          case 4:
            _.label++;
            return {
              value: cc11001100_hook("value", op[1], "object-key-init"),
              done: cc11001100_hook("done", false, "object-key-init")
            };
          case 5:
            _.label++;
            y = cc11001100_hook("y", op[1], "assign");
            op = cc11001100_hook("op", [0], "assign");
            continue;
          case 7:
            op = cc11001100_hook("op", _.ops.pop(), "assign");
            _.trys.pop();
            continue;
          default:
            if (!(t = cc11001100_hook("t", _.trys, "assign"), t = cc11001100_hook("t", t.length > 0 && t[t.length - 1], "assign")) && (op[0] === 6 || op[0] === 2)) {
              _ = cc11001100_hook("_", 0, "assign");
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = cc11001100_hook("_.label", op[1], "assign");
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = cc11001100_hook("_.label", t[1], "assign");
              t = cc11001100_hook("t", op, "assign");
              break;
            }
            if (t && _.label < t[2]) {
              _.label = cc11001100_hook("_.label", t[2], "assign");
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = cc11001100_hook("op", body.call(thisArg, _), "assign");
      } catch (e) {
        op = cc11001100_hook("op", [6, e], "assign");
        y = cc11001100_hook("y", 0, "assign");
      } finally {
        f = cc11001100_hook("f", t = cc11001100_hook("t", 0, "assign"), "assign");
      }
      if (op[0] & 5) throw op[1];
      return {
        value: cc11001100_hook("value", op[0] ? op[1] : void 0, "object-key-init"),
        done: cc11001100_hook("done", true, "object-key-init")
      };
    }
  }, "assign");
  __exportStar = cc11001100_hook("__exportStar", function (m, exports) {
    for (var p in m) if (p !== 'default' && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
  }, "assign");
  __createBinding = cc11001100_hook("__createBinding", Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = cc11001100_hook("k2", k, "assign");
    Object.defineProperty(o, k2, {
      enumerable: cc11001100_hook("enumerable", true, "object-key-init"),
      get: function () {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = cc11001100_hook("k2", k, "assign");
    o[k2] = cc11001100_hook("o[k2]", m[k], "assign");
  }, "assign");
  __values = cc11001100_hook("__values", function (o) {
    var s = cc11001100_hook("s", typeof Symbol === 'function' && Symbol.iterator, "var-init"),
      m = cc11001100_hook("m", s && o[s], "var-init"),
      i = cc11001100_hook("i", 0, "var-init");
    if (m) return m.call(o);
    if (o && typeof o.length === 'number') return {
      next: function () {
        if (o && i >= o.length) o = cc11001100_hook("o", void 0, "assign");
        return {
          value: cc11001100_hook("value", o && o[i++], "object-key-init"),
          done: cc11001100_hook("done", !o, "object-key-init")
        };
      }
    };
    throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  }, "assign");
  __read = cc11001100_hook("__read", function (o, n) {
    var m = cc11001100_hook("m", typeof Symbol === 'function' && o[Symbol.iterator], "var-init");
    if (!m) return o;
    var i = cc11001100_hook("i", m.call(o), "var-init"),
      r,
      ar = cc11001100_hook("ar", [], "var-init"),
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = cc11001100_hook("r", i.next(), "assign")).done) ar.push(r.value);
    } catch (error) {
      e = cc11001100_hook("e", {
        error: cc11001100_hook("error", error, "object-key-init")
      }, "assign");
    } finally {
      try {
        if (r && !r.done && (m = cc11001100_hook("m", i['return'], "assign"))) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }, "assign");
  __spread = cc11001100_hook("__spread", function () {
    for (var ar = cc11001100_hook("ar", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < arguments.length; i++) ar = cc11001100_hook("ar", ar.concat(__read(arguments[i])), "assign");
    return ar;
  }, "assign");
  __spreadArrays = cc11001100_hook("__spreadArrays", function () {
    for (var s = cc11001100_hook("s", 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"), il = cc11001100_hook("il", arguments.length, "var-init"); i < il; i++) s += cc11001100_hook("s", arguments[i].length, "assign");
    for (var r = cc11001100_hook("r", Array(s), "var-init"), k = cc11001100_hook("k", 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < il; i++) for (var a = cc11001100_hook("a", arguments[i], "var-init"), j = cc11001100_hook("j", 0, "var-init"), jl = cc11001100_hook("jl", a.length, "var-init"); j < jl; j++, k++) r[k] = cc11001100_hook("r[k]", a[j], "assign");
    return r;
  }, "assign");
  __await = cc11001100_hook("__await", function (v) {
    return this instanceof __await ? (this.v = cc11001100_hook("this.v", v, "assign"), this) : new __await(v);
  }, "assign");
  __asyncGenerator = cc11001100_hook("__asyncGenerator", function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var g = cc11001100_hook("g", generator.apply(thisArg, _arguments || []), "var-init"),
      i,
      q = cc11001100_hook("q", [], "var-init");
    return i = cc11001100_hook("i", {}, "assign"), verb('next'), verb('throw'), verb('return'), i[Symbol.asyncIterator] = cc11001100_hook("i[Symbol.asyncIterator]", function () {
      return this;
    }, "assign"), i;
    function verb(n) {
      cc11001100_hook("n", n, "function-parameter");
      if (g[n]) i[n] = cc11001100_hook("i[n]", function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      }, "assign");
    }
    function resume(n, v) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("v", v, "function-parameter");
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      cc11001100_hook("r", r, "function-parameter");
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      cc11001100_hook("value", value, "function-parameter");
      resume('next', value);
    }
    function reject(value) {
      cc11001100_hook("value", value, "function-parameter");
      resume('throw', value);
    }
    function settle(f, v) {
      cc11001100_hook("f", f, "function-parameter");
      cc11001100_hook("v", v, "function-parameter");
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  }, "assign");
  __asyncDelegator = cc11001100_hook("__asyncDelegator", function (o) {
    var i, p;
    return i = cc11001100_hook("i", {}, "assign"), verb('next'), verb('throw', function (e) {
      throw e;
    }), verb('return'), i[Symbol.iterator] = cc11001100_hook("i[Symbol.iterator]", function () {
      return this;
    }, "assign"), i;
    function verb(n, f) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");
      i[n] = cc11001100_hook("i[n]", o[n] ? function (v) {
        return (p = cc11001100_hook("p", !p, "assign")) ? {
          value: cc11001100_hook("value", __await(o[n](v)), "object-key-init"),
          done: cc11001100_hook("done", n === 'return', "object-key-init")
        } : f ? f(v) : v;
      } : f, "assign");
    }
  }, "assign");
  __asyncValues = cc11001100_hook("__asyncValues", function (o) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var m = cc11001100_hook("m", o[Symbol.asyncIterator], "var-init"),
      i;
    return m ? m.call(o) : (o = cc11001100_hook("o", typeof __values === 'function' ? __values(o) : o[Symbol.iterator](), "assign"), i = cc11001100_hook("i", {}, "assign"), verb('next'), verb('throw'), verb('return'), i[Symbol.asyncIterator] = cc11001100_hook("i[Symbol.asyncIterator]", function () {
      return this;
    }, "assign"), i);
    function verb(n) {
      cc11001100_hook("n", n, "function-parameter");
      i[n] = cc11001100_hook("i[n]", o[n] && function (v) {
        return new Promise(function (resolve, reject) {
          v = cc11001100_hook("v", o[n](v), "assign"), settle(resolve, reject, v.done, v.value);
        });
      }, "assign");
    }
    function settle(resolve, reject, d, v) {
      cc11001100_hook("resolve", resolve, "function-parameter");
      cc11001100_hook("reject", reject, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("v", v, "function-parameter");
      Promise.resolve(v).then(function (v) {
        resolve({
          value: cc11001100_hook("value", v, "object-key-init"),
          done: cc11001100_hook("done", d, "object-key-init")
        });
      }, reject);
    }
  }, "assign");
  __makeTemplateObject = cc11001100_hook("__makeTemplateObject", function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', {
        value: cc11001100_hook("value", raw, "object-key-init")
      });
    } else {
      cooked.raw = cc11001100_hook("cooked.raw", raw, "assign");
    }
    return cooked;
  }, "assign");
  var __setModuleDefault = cc11001100_hook("__setModuleDefault", Object.create ? function (o, v) {
    Object.defineProperty(o, 'default', {
      enumerable: cc11001100_hook("enumerable", true, "object-key-init"),
      value: cc11001100_hook("value", v, "object-key-init")
    });
  } : function (o, v) {
    o['default'] = cc11001100_hook("o['default']", v, "assign");
  }, "var-init");
  __importStar = cc11001100_hook("__importStar", function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = cc11001100_hook("result", {}, "var-init");
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  }, "assign");
  __importDefault = cc11001100_hook("__importDefault", function (mod) {
    return mod && mod.__esModule ? mod : {
      'default': cc11001100_hook('default', mod, "object-key-init")
    };
  }, "assign");
  __classPrivateFieldGet = cc11001100_hook("__classPrivateFieldGet", function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError('attempted to get private field on non-instance');
    }
    return privateMap.get(receiver);
  }, "assign");
  __classPrivateFieldSet = cc11001100_hook("__classPrivateFieldSet", function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError('attempted to set private field on non-instance');
    }
    privateMap.set(receiver, value);
    return value;
  }, "assign");
  exporter('__extends', __extends);
  exporter('__assign', __assign);
  exporter('__rest', __rest);
  exporter('__decorate', __decorate);
  exporter('__param', __param);
  exporter('__metadata', __metadata);
  exporter('__awaiter', __awaiter);
  exporter('__generator', __generator);
  exporter('__exportStar', __exportStar);
  exporter('__createBinding', __createBinding);
  exporter('__values', __values);
  exporter('__read', __read);
  exporter('__spread', __spread);
  exporter('__spreadArrays', __spreadArrays);
  exporter('__await', __await);
  exporter('__asyncGenerator', __asyncGenerator);
  exporter('__asyncDelegator', __asyncDelegator);
  exporter('__asyncValues', __asyncValues);
  exporter('__makeTemplateObject', __makeTemplateObject);
  exporter('__importStar', __importStar);
  exporter('__importDefault', __importDefault);
  exporter('__classPrivateFieldGet', __classPrivateFieldGet);
  exporter('__classPrivateFieldSet', __classPrivateFieldSet);
});