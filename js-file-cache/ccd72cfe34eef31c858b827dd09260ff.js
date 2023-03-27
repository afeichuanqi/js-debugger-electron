(function (window, undefined) {
  var readyList,
    rootjQuery,
    core_strundefined = cc11001100_hook("core_strundefined", typeof undefined, "var-init"),
    location = cc11001100_hook("location", window.location, "var-init"),
    document = cc11001100_hook("document", window.document, "var-init"),
    docElem = cc11001100_hook("docElem", document.documentElement, "var-init"),
    _jQuery = cc11001100_hook("_jQuery", window.jQuery, "var-init"),
    _$ = cc11001100_hook("_$", window.$, "var-init"),
    class2type = cc11001100_hook("class2type", {}, "var-init"),
    core_deletedIds = cc11001100_hook("core_deletedIds", [], "var-init"),
    core_version = cc11001100_hook("core_version", "1.10.2", "var-init"),
    core_concat = cc11001100_hook("core_concat", core_deletedIds.concat, "var-init"),
    core_push = cc11001100_hook("core_push", core_deletedIds.push, "var-init"),
    core_slice = cc11001100_hook("core_slice", core_deletedIds.slice, "var-init"),
    core_indexOf = cc11001100_hook("core_indexOf", core_deletedIds.indexOf, "var-init"),
    core_toString = cc11001100_hook("core_toString", class2type.toString, "var-init"),
    core_hasOwn = cc11001100_hook("core_hasOwn", class2type.hasOwnProperty, "var-init"),
    core_trim = cc11001100_hook("core_trim", core_version.trim, "var-init"),
    jQuery = function (selector, context) {
      return new jQuery.fn.init(selector, context, rootjQuery);
    },
    core_pnum = cc11001100_hook("core_pnum", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
    core_rnotwhite = cc11001100_hook("core_rnotwhite", /\S+/g, "var-init"),
    rtrim = cc11001100_hook("rtrim", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init"),
    rquickExpr = cc11001100_hook("rquickExpr", /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, "var-init"),
    rsingleTag = cc11001100_hook("rsingleTag", /^<(\w+)\s*\/?>(?:<\/\1>|)$/, "var-init"),
    rvalidchars = cc11001100_hook("rvalidchars", /^[\],:{}\s]*$/, "var-init"),
    rvalidbraces = cc11001100_hook("rvalidbraces", /(?:^|:|,)(?:\s*\[)+/g, "var-init"),
    rvalidescape = cc11001100_hook("rvalidescape", /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "var-init"),
    rvalidtokens = cc11001100_hook("rvalidtokens", /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, "var-init"),
    rmsPrefix = cc11001100_hook("rmsPrefix", /^-ms-/, "var-init"),
    rdashAlpha = cc11001100_hook("rdashAlpha", /-([\da-z])/gi, "var-init"),
    fcamelCase = function (all, letter) {
      return letter.toUpperCase();
    },
    completed = function (event) {
      if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
        detach();
        jQuery.ready();
      }
    },
    detach = function () {
      if (document.addEventListener) {
        document.removeEventListener("DOMContentLoaded", completed, false);
        window.removeEventListener("load", completed, false);
      } else {
        document.detachEvent("onreadystatechange", completed);
        window.detachEvent("onload", completed);
      }
    };
  jQuery.fn = cc11001100_hook("jQuery.fn", jQuery.prototype = cc11001100_hook("jQuery.prototype", {
    jquery: cc11001100_hook("jquery", core_version, "object-key-init"),
    constructor: cc11001100_hook("constructor", jQuery, "object-key-init"),
    init: function (selector, context, rootjQuery) {
      var match, elem;
      if (!selector) {
        return this;
      }
      if (typeof selector === "string") {
        if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
          match = cc11001100_hook("match", [null, selector, null], "assign");
        } else {
          match = cc11001100_hook("match", rquickExpr.exec(selector), "assign");
        }
        if (match && (match[1] || !context)) {
          if (match[1]) {
            context = cc11001100_hook("context", context instanceof jQuery ? context[0] : context, "assign");
            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                if (jQuery.isFunction(this[match])) {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          } else {
            elem = cc11001100_hook("elem", document.getElementById(match[2]), "assign");
            if (elem && elem.parentNode) {
              if (elem.id !== match[2]) {
                return rootjQuery.find(selector);
              }
              this.length = cc11001100_hook("this.length", 1, "assign");
              this[0] = cc11001100_hook("this[0]", elem, "assign");
            }
            this.context = cc11001100_hook("this.context", document, "assign");
            this.selector = cc11001100_hook("this.selector", selector, "assign");
            return this;
          }
        } else if (!context || context.jquery) {
          return (context || rootjQuery).find(selector);
        } else {
          return this.constructor(context).find(selector);
        }
      } else if (selector.nodeType) {
        this.context = cc11001100_hook("this.context", this[0] = cc11001100_hook("this[0]", selector, "assign"), "assign");
        this.length = cc11001100_hook("this.length", 1, "assign");
        return this;
      } else if (jQuery.isFunction(selector)) {
        return rootjQuery.ready(selector);
      }
      if (selector.selector !== undefined) {
        this.selector = cc11001100_hook("this.selector", selector.selector, "assign");
        this.context = cc11001100_hook("this.context", selector.context, "assign");
      }
      return jQuery.makeArray(selector, this);
    },
    selector: cc11001100_hook("selector", "", "object-key-init"),
    length: cc11001100_hook("length", 0, "object-key-init"),
    toArray: function () {
      return core_slice.call(this);
    },
    get: function (num) {
      return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num];
    },
    pushStack: function (elems) {
      var ret = cc11001100_hook("ret", jQuery.merge(this.constructor(), elems), "var-init");
      ret.prevObject = cc11001100_hook("ret.prevObject", this, "assign");
      ret.context = cc11001100_hook("ret.context", this.context, "assign");
      return ret;
    },
    each: function (callback, args) {
      return jQuery.each(this, callback, args);
    },
    ready: function (fn) {
      jQuery.ready.promise().done(fn);
      return this;
    },
    slice: function () {
      return this.pushStack(core_slice.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (i) {
      var len = cc11001100_hook("len", this.length, "var-init"),
        j = cc11001100_hook("j", +i + (i < 0 ? len : 0), "var-init");
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    map: function (callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: cc11001100_hook("push", core_push, "object-key-init"),
    sort: cc11001100_hook("sort", [].sort, "object-key-init"),
    splice: cc11001100_hook("splice", [].splice, "object-key-init")
  }, "assign"), "assign");
  jQuery.fn.init.prototype = cc11001100_hook("jQuery.fn.init.prototype", jQuery.fn, "assign");
  jQuery.extend = cc11001100_hook("jQuery.extend", jQuery.fn.extend = cc11001100_hook("jQuery.fn.extend", function () {
    var src,
      copyIsArray,
      copy,
      name,
      options,
      clone,
      target = cc11001100_hook("target", arguments[0] || {}, "var-init"),
      i = cc11001100_hook("i", 1, "var-init"),
      length = cc11001100_hook("length", arguments.length, "var-init"),
      deep = cc11001100_hook("deep", false, "var-init");
    if (typeof target === "boolean") {
      deep = cc11001100_hook("deep", target, "assign");
      target = cc11001100_hook("target", arguments[1] || {}, "assign");
      i = cc11001100_hook("i", 2, "assign");
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = cc11001100_hook("target", {}, "assign");
    }
    if (length === i) {
      target = cc11001100_hook("target", this, "assign");
      --i;
    }
    for (; i < length; i++) {
      if ((options = cc11001100_hook("options", arguments[i], "assign")) != null) {
        for (name in options) {
          src = cc11001100_hook("src", target[name], "assign");
          copy = cc11001100_hook("copy", options[name], "assign");
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = cc11001100_hook("copyIsArray", jQuery.isArray(copy), "assign")))) {
            if (copyIsArray) {
              copyIsArray = cc11001100_hook("copyIsArray", false, "assign");
              clone = cc11001100_hook("clone", src && jQuery.isArray(src) ? src : [], "assign");
            } else {
              clone = cc11001100_hook("clone", src && jQuery.isPlainObject(src) ? src : {}, "assign");
            }
            target[name] = cc11001100_hook("target[name]", jQuery.extend(deep, clone, copy), "assign");
          } else if (copy !== undefined) {
            target[name] = cc11001100_hook("target[name]", copy, "assign");
          }
        }
      }
    }
    return target;
  }, "assign"), "assign");
  jQuery.extend({
    expando: cc11001100_hook("expando", "jQuery" + (core_version + Math.random()).replace(/\D/g, ""), "object-key-init"),
    noConflict: function (deep) {
      if (window.$ === jQuery) {
        window.$ = cc11001100_hook("window.$", _$, "assign");
      }
      if (deep && window.jQuery === jQuery) {
        window.jQuery = cc11001100_hook("window.jQuery", _jQuery, "assign");
      }
      return jQuery;
    },
    isReady: cc11001100_hook("isReady", false, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    holdReady: function (hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready: function (wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      if (!document.body) {
        return setTimeout(jQuery.ready);
      }
      jQuery.isReady = cc11001100_hook("jQuery.isReady", true, "assign");
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
      if (jQuery.fn.trigger) {
        jQuery(document).trigger("ready").off("ready");
      }
    },
    isFunction: function (obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: cc11001100_hook("isArray", Array.isArray || function (obj) {
      return jQuery.type(obj) === "array";
    }, "object-key-init"),
    isWindow: function (obj) {
      return obj != null && obj == obj.window;
    },
    isNumeric: function (obj) {
      return !isNaN(parseFloat(obj)) && isFinite(obj);
    },
    type: function (obj) {
      if (obj == null) {
        return String(obj);
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj;
    },
    isPlainObject: function (obj) {
      var key;
      if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }
      try {
        if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (e) {
        return false;
      }
      if (jQuery.support.ownLast) {
        for (key in obj) {
          return core_hasOwn.call(obj, key);
        }
      }
      for (key in obj) {}
      return key === undefined || core_hasOwn.call(obj, key);
    },
    isEmptyObject: function (obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    error: function (msg) {
      throw new Error(msg);
    },
    parseHTML: function (data, context, keepScripts) {
      if (!data || typeof data !== "string") {
        return null;
      }
      if (typeof context === "boolean") {
        keepScripts = cc11001100_hook("keepScripts", context, "assign");
        context = cc11001100_hook("context", false, "assign");
      }
      context = cc11001100_hook("context", context || document, "assign");
      var parsed = cc11001100_hook("parsed", rsingleTag.exec(data), "var-init"),
        scripts = cc11001100_hook("scripts", !keepScripts && [], "var-init");
      if (parsed) {
        return [context.createElement(parsed[1])];
      }
      parsed = cc11001100_hook("parsed", jQuery.buildFragment([data], context, scripts), "assign");
      if (scripts) {
        jQuery(scripts).remove();
      }
      return jQuery.merge([], parsed.childNodes);
    },
    parseJSON: function (data) {
      if (window.JSON && window.JSON.parse) {
        return window.JSON.parse(data);
      }
      if (data === null) {
        return data;
      }
      if (typeof data === "string") {
        data = cc11001100_hook("data", jQuery.trim(data), "assign");
        if (data) {
          if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
            return new Function("return " + data)();
          }
        }
      }
      jQuery.error("Invalid JSON: " + data);
    },
    parseXML: function (data) {
      var xml, tmp;
      if (!data || typeof data !== "string") {
        return null;
      }
      try {
        if (window.DOMParser) {
          tmp = cc11001100_hook("tmp", new DOMParser(), "assign");
          xml = cc11001100_hook("xml", tmp.parseFromString(data, "text/xml"), "assign");
        } else {
          xml = cc11001100_hook("xml", new ActiveXObject("Microsoft.XMLDOM"), "assign");
          xml.async = cc11001100_hook("xml.async", "false", "assign");
          xml.loadXML(data);
        }
      } catch (e) {
        xml = cc11001100_hook("xml", undefined, "assign");
      }
      if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
        jQuery.error("Invalid XML: " + data);
      }
      return xml;
    },
    noop: function () {},
    globalEval: function (data) {
      if (data && jQuery.trim(data)) {
        (window.execScript || function (data) {
          window["eval"].call(window, data);
        })(data);
      }
    },
    camelCase: function (string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function (elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function (obj, callback, args) {
      var value,
        i = cc11001100_hook("i", 0, "var-init"),
        length = cc11001100_hook("length", obj.length, "var-init"),
        isArray = cc11001100_hook("isArray", isArraylike(obj), "var-init");
      if (args) {
        if (isArray) {
          for (; i < length; i++) {
            value = cc11001100_hook("value", callback.apply(obj[i], args), "assign");
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = cc11001100_hook("value", callback.apply(obj[i], args), "assign");
            if (value === false) {
              break;
            }
          }
        }
      } else {
        if (isArray) {
          for (; i < length; i++) {
            value = cc11001100_hook("value", callback.call(obj[i], i, obj[i]), "assign");
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = cc11001100_hook("value", callback.call(obj[i], i, obj[i]), "assign");
            if (value === false) {
              break;
            }
          }
        }
      }
      return obj;
    },
    trim: cc11001100_hook("trim", core_trim && !core_trim.call("\ufeff ") ? function (text) {
      return text == null ? "" : core_trim.call(text);
    } : function (text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    }, "object-key-init"),
    makeArray: function (arr, results) {
      var ret = cc11001100_hook("ret", results || [], "var-init");
      if (arr != null) {
        if (isArraylike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          core_push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function (elem, arr, i) {
      var len;
      if (arr) {
        if (core_indexOf) {
          return core_indexOf.call(arr, elem, i);
        }
        len = cc11001100_hook("len", arr.length, "assign");
        i = cc11001100_hook("i", i ? i < 0 ? Math.max(0, len + i) : i : 0, "assign");
        for (; i < len; i++) {
          if (i in arr && arr[i] === elem) {
            return i;
          }
        }
      }
      return -1;
    },
    merge: function (first, second) {
      var l = cc11001100_hook("l", second.length, "var-init"),
        i = cc11001100_hook("i", first.length, "var-init"),
        j = cc11001100_hook("j", 0, "var-init");
      if (typeof l === "number") {
        for (; j < l; j++) {
          first[i++] = cc11001100_hook("first[i++]", second[j], "assign");
        }
      } else {
        while (second[j] !== undefined) {
          first[i++] = cc11001100_hook("first[i++]", second[j++], "assign");
        }
      }
      first.length = cc11001100_hook("first.length", i, "assign");
      return first;
    },
    grep: function (elems, callback, inv) {
      var retVal,
        ret = cc11001100_hook("ret", [], "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        length = cc11001100_hook("length", elems.length, "var-init");
      inv = cc11001100_hook("inv", !!inv, "assign");
      for (; i < length; i++) {
        retVal = cc11001100_hook("retVal", !!callback(elems[i], i), "assign");
        if (inv !== retVal) {
          ret.push(elems[i]);
        }
      }
      return ret;
    },
    map: function (elems, callback, arg) {
      var value,
        i = cc11001100_hook("i", 0, "var-init"),
        length = cc11001100_hook("length", elems.length, "var-init"),
        isArray = cc11001100_hook("isArray", isArraylike(elems), "var-init"),
        ret = cc11001100_hook("ret", [], "var-init");
      if (isArray) {
        for (; i < length; i++) {
          value = cc11001100_hook("value", callback(elems[i], i, arg), "assign");
          if (value != null) {
            ret[ret.length] = cc11001100_hook("ret[ret.length]", value, "assign");
          }
        }
      } else {
        for (i in elems) {
          value = cc11001100_hook("value", callback(elems[i], i, arg), "assign");
          if (value != null) {
            ret[ret.length] = cc11001100_hook("ret[ret.length]", value, "assign");
          }
        }
      }
      return core_concat.apply([], ret);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    proxy: function (fn, context) {
      var args, proxy, tmp;
      if (typeof context === "string") {
        tmp = cc11001100_hook("tmp", fn[context], "assign");
        context = cc11001100_hook("context", fn, "assign");
        fn = cc11001100_hook("fn", tmp, "assign");
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = cc11001100_hook("args", core_slice.call(arguments, 2), "assign");
      proxy = cc11001100_hook("proxy", function () {
        return fn.apply(context || this, args.concat(core_slice.call(arguments)));
      }, "assign");
      proxy.guid = cc11001100_hook("proxy.guid", fn.guid = cc11001100_hook("fn.guid", fn.guid || jQuery.guid++, "assign"), "assign");
      return proxy;
    },
    access: function (elems, fn, key, value, chainable, emptyGet, raw) {
      var i = cc11001100_hook("i", 0, "var-init"),
        length = cc11001100_hook("length", elems.length, "var-init"),
        bulk = cc11001100_hook("bulk", key == null, "var-init");
      if (jQuery.type(key) === "object") {
        chainable = cc11001100_hook("chainable", true, "assign");
        for (i in key) {
          jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
        }
      } else if (value !== undefined) {
        chainable = cc11001100_hook("chainable", true, "assign");
        if (!jQuery.isFunction(value)) {
          raw = cc11001100_hook("raw", true, "assign");
        }
        if (bulk) {
          if (raw) {
            fn.call(elems, value);
            fn = cc11001100_hook("fn", null, "assign");
          } else {
            bulk = cc11001100_hook("bulk", fn, "assign");
            fn = cc11001100_hook("fn", function (elem, key, value) {
              return bulk.call(jQuery(elem), value);
            }, "assign");
          }
        }
        if (fn) {
          for (; i < length; i++) {
            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
          }
        }
      }
      return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
    },
    now: function () {
      return new Date().getTime();
    },
    swap: function (elem, options, callback, args) {
      var ret,
        name,
        old = cc11001100_hook("old", {}, "var-init");
      for (name in options) {
        old[name] = cc11001100_hook("old[name]", elem.style[name], "assign");
        elem.style[name] = cc11001100_hook("elem.style[name]", options[name], "assign");
      }
      ret = cc11001100_hook("ret", callback.apply(elem, args || []), "assign");
      for (name in options) {
        elem.style[name] = cc11001100_hook("elem.style[name]", old[name], "assign");
      }
      return ret;
    }
  });
  jQuery.ready.promise = cc11001100_hook("jQuery.ready.promise", function (obj) {
    if (!readyList) {
      readyList = cc11001100_hook("readyList", jQuery.Deferred(), "assign");
      if (document.readyState === "complete") {
        setTimeout(jQuery.ready);
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", completed, false);
        window.addEventListener("load", completed, false);
      } else {
        document.attachEvent("onreadystatechange", completed);
        window.attachEvent("onload", completed);
        var top = cc11001100_hook("top", false, "var-init");
        try {
          top = cc11001100_hook("top", window.frameElement == null && document.documentElement, "assign");
        } catch (e) {}
        if (top && top.doScroll) {
          (function doScrollCheck() {
            if (!jQuery.isReady) {
              try {
                top.doScroll("left");
              } catch (e) {
                return setTimeout(doScrollCheck, 50);
              }
              detach();
              jQuery.ready();
            }
          })();
        }
      }
    }
    return readyList.promise(obj);
  }, "assign");
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = cc11001100_hook("class2type[\"[object \" + name + \"]\"]", name.toLowerCase(), "assign");
  });
  function isArraylike(obj) {
    cc11001100_hook("obj", obj, "function-parameter");
    var length = cc11001100_hook("length", obj.length, "var-init"),
      type = cc11001100_hook("type", jQuery.type(obj), "var-init");
    if (jQuery.isWindow(obj)) {
      return false;
    }
    if (obj.nodeType === 1 && length) {
      return true;
    }
    return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj);
  }
  rootjQuery = cc11001100_hook("rootjQuery", jQuery(document), "assign");
  (function (window, undefined) {
    var i,
      support,
      cachedruns,
      Expr,
      getText,
      isXML,
      compile,
      outermostContext,
      sortInput,
      setDocument,
      document,
      docElem,
      documentIsHTML,
      rbuggyQSA,
      rbuggyMatches,
      matches,
      contains,
      expando = cc11001100_hook("expando", "sizzle" + -new Date(), "var-init"),
      preferredDoc = cc11001100_hook("preferredDoc", window.document, "var-init"),
      dirruns = cc11001100_hook("dirruns", 0, "var-init"),
      done = cc11001100_hook("done", 0, "var-init"),
      classCache = cc11001100_hook("classCache", createCache(), "var-init"),
      tokenCache = cc11001100_hook("tokenCache", createCache(), "var-init"),
      compilerCache = cc11001100_hook("compilerCache", createCache(), "var-init"),
      hasDuplicate = cc11001100_hook("hasDuplicate", false, "var-init"),
      sortOrder = function (a, b) {
        if (a === b) {
          hasDuplicate = cc11001100_hook("hasDuplicate", true, "assign");
          return 0;
        }
        return 0;
      },
      strundefined = cc11001100_hook("strundefined", typeof undefined, "var-init"),
      MAX_NEGATIVE = cc11001100_hook("MAX_NEGATIVE", 1 << 31, "var-init"),
      hasOwn = cc11001100_hook("hasOwn", {}.hasOwnProperty, "var-init"),
      arr = cc11001100_hook("arr", [], "var-init"),
      pop = cc11001100_hook("pop", arr.pop, "var-init"),
      push_native = cc11001100_hook("push_native", arr.push, "var-init"),
      push = cc11001100_hook("push", arr.push, "var-init"),
      slice = cc11001100_hook("slice", arr.slice, "var-init"),
      indexOf = cc11001100_hook("indexOf", arr.indexOf || function (elem) {
        var i = cc11001100_hook("i", 0, "var-init"),
          len = cc11001100_hook("len", this.length, "var-init");
        for (; i < len; i++) {
          if (this[i] === elem) {
            return i;
          }
        }
        return -1;
      }, "var-init"),
      booleans = cc11001100_hook("booleans", "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", "var-init"),
      whitespace = cc11001100_hook("whitespace", "[\\x20\\t\\r\\n\\f]", "var-init"),
      characterEncoding = cc11001100_hook("characterEncoding", "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", "var-init"),
      identifier = cc11001100_hook("identifier", characterEncoding.replace("w", "w#"), "var-init"),
      attributes = cc11001100_hook("attributes", "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]", "var-init"),
      pseudos = cc11001100_hook("pseudos", ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)", "var-init"),
      rtrim = cc11001100_hook("rtrim", new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), "var-init"),
      rcomma = cc11001100_hook("rcomma", new RegExp("^" + whitespace + "*," + whitespace + "*"), "var-init"),
      rcombinators = cc11001100_hook("rcombinators", new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), "var-init"),
      rsibling = cc11001100_hook("rsibling", new RegExp(whitespace + "*[+~]"), "var-init"),
      rattributeQuotes = cc11001100_hook("rattributeQuotes", new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"), "var-init"),
      rpseudo = cc11001100_hook("rpseudo", new RegExp(pseudos), "var-init"),
      ridentifier = cc11001100_hook("ridentifier", new RegExp("^" + identifier + "$"), "var-init"),
      matchExpr = cc11001100_hook("matchExpr", {
        ID: cc11001100_hook("ID", new RegExp("^#(" + characterEncoding + ")"), "object-key-init"),
        CLASS: cc11001100_hook("CLASS", new RegExp("^\\.(" + characterEncoding + ")"), "object-key-init"),
        TAG: cc11001100_hook("TAG", new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"), "object-key-init"),
        ATTR: cc11001100_hook("ATTR", new RegExp("^" + attributes), "object-key-init"),
        PSEUDO: cc11001100_hook("PSEUDO", new RegExp("^" + pseudos), "object-key-init"),
        CHILD: cc11001100_hook("CHILD", new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"), "object-key-init"),
        bool: cc11001100_hook("bool", new RegExp("^(?:" + booleans + ")$", "i"), "object-key-init"),
        needsContext: cc11001100_hook("needsContext", new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i"), "object-key-init")
      }, "var-init"),
      rnative = cc11001100_hook("rnative", /^[^{]+\{\s*\[native \w/, "var-init"),
      rquickExpr = cc11001100_hook("rquickExpr", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
      rinputs = cc11001100_hook("rinputs", /^(?:input|select|textarea|button)$/i, "var-init"),
      rheader = cc11001100_hook("rheader", /^h\d$/i, "var-init"),
      rescape = cc11001100_hook("rescape", /'|\\/g, "var-init"),
      runescape = cc11001100_hook("runescape", new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), "var-init"),
      funescape = function (_, escaped, escapedWhitespace) {
        var high = cc11001100_hook("high", "0x" + escaped - 65536, "var-init");
        return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
      };
    try {
      push.apply(arr = cc11001100_hook("arr", slice.call(preferredDoc.childNodes), "assign"), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = cc11001100_hook("push", {
        apply: cc11001100_hook("apply", arr.length ? function (target, els) {
          push_native.apply(target, slice.call(els));
        } : function (target, els) {
          var j = cc11001100_hook("j", target.length, "var-init"),
            i = cc11001100_hook("i", 0, "var-init");
          while (target[j++] = cc11001100_hook("target[j++]", els[i++], "assign")) {}
          target.length = cc11001100_hook("target.length", j - 1, "assign");
        }, "object-key-init")
      }, "assign");
    }
    function Sizzle(selector, context, results, seed) {
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("context", context, "function-parameter");
      cc11001100_hook("results", results, "function-parameter");
      cc11001100_hook("seed", seed, "function-parameter");
      var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
      if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
        setDocument(context);
      }
      context = cc11001100_hook("context", context || document, "assign");
      results = cc11001100_hook("results", results || [], "assign");
      if (!selector || typeof selector !== "string") {
        return results;
      }
      if ((nodeType = cc11001100_hook("nodeType", context.nodeType, "assign")) !== 1 && nodeType !== 9) {
        return [];
      }
      if (documentIsHTML && !seed) {
        if (match = cc11001100_hook("match", rquickExpr.exec(selector), "assign")) {
          if (m = cc11001100_hook("m", match[1], "assign")) {
            if (nodeType === 9) {
              elem = cc11001100_hook("elem", context.getElementById(m), "assign");
              if (elem && elem.parentNode) {
                if (elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } else {
                return results;
              }
            } else {
              if (context.ownerDocument && (elem = cc11001100_hook("elem", context.ownerDocument.getElementById(m), "assign")) && contains(context, elem) && elem.id === m) {
                results.push(elem);
                return results;
              }
            }
          } else if (match[2]) {
            push.apply(results, context.getElementsByTagName(selector));
            return results;
          } else if ((m = cc11001100_hook("m", match[3], "assign")) && support.getElementsByClassName && context.getElementsByClassName) {
            push.apply(results, context.getElementsByClassName(m));
            return results;
          }
        }
        if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          nid = cc11001100_hook("nid", old = cc11001100_hook("old", expando, "assign"), "assign");
          newContext = cc11001100_hook("newContext", context, "assign");
          newSelector = cc11001100_hook("newSelector", nodeType === 9 && selector, "assign");
          if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
            groups = cc11001100_hook("groups", tokenize(selector), "assign");
            if (old = cc11001100_hook("old", context.getAttribute("id"), "assign")) {
              nid = cc11001100_hook("nid", old.replace(rescape, "\\$&"), "assign");
            } else {
              context.setAttribute("id", nid);
            }
            nid = cc11001100_hook("nid", "[id='" + nid + "'] ", "assign");
            i = cc11001100_hook("i", groups.length, "assign");
            while (i--) {
              groups[i] = cc11001100_hook("groups[i]", nid + toSelector(groups[i]), "assign");
            }
            newContext = cc11001100_hook("newContext", rsibling.test(selector) && context.parentNode || context, "assign");
            newSelector = cc11001100_hook("newSelector", groups.join(","), "assign");
          }
          if (newSelector) {
            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {} finally {
              if (!old) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    function createCache() {
      var keys = cc11001100_hook("keys", [], "var-init");
      function cache(key, value) {
        cc11001100_hook("key", key, "function-parameter");
        cc11001100_hook("value", value, "function-parameter");
        if (keys.push(key += cc11001100_hook("key", " ", "assign")) > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return cache[key] = cc11001100_hook("cache[key]", value, "assign");
      }
      return cache;
    }
    function markFunction(fn) {
      cc11001100_hook("fn", fn, "function-parameter");
      fn[expando] = cc11001100_hook("fn[expando]", true, "assign");
      return fn;
    }
    function assert(fn) {
      cc11001100_hook("fn", fn, "function-parameter");
      var div = cc11001100_hook("div", document.createElement("div"), "var-init");
      try {
        return !!fn(div);
      } catch (e) {
        return false;
      } finally {
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
        div = cc11001100_hook("div", null, "assign");
      }
    }
    function addHandle(attrs, handler) {
      cc11001100_hook("attrs", attrs, "function-parameter");
      cc11001100_hook("handler", handler, "function-parameter");
      var arr = cc11001100_hook("arr", attrs.split("|"), "var-init"),
        i = cc11001100_hook("i", attrs.length, "var-init");
      while (i--) {
        Expr.attrHandle[arr[i]] = cc11001100_hook("Expr.attrHandle[arr[i]]", handler, "assign");
      }
    }
    function siblingCheck(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var cur = cc11001100_hook("cur", b && a, "var-init"),
        diff = cc11001100_hook("diff", cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE), "var-init");
      if (diff) {
        return diff;
      }
      if (cur) {
        while (cur = cc11001100_hook("cur", cur.nextSibling, "assign")) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    function createInputPseudo(type) {
      cc11001100_hook("type", type, "function-parameter");
      return function (elem) {
        var name = cc11001100_hook("name", elem.nodeName.toLowerCase(), "var-init");
        return name === "input" && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      cc11001100_hook("type", type, "function-parameter");
      return function (elem) {
        var name = cc11001100_hook("name", elem.nodeName.toLowerCase(), "var-init");
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    function createPositionalPseudo(fn) {
      cc11001100_hook("fn", fn, "function-parameter");
      return markFunction(function (argument) {
        argument = cc11001100_hook("argument", +argument, "assign");
        return markFunction(function (seed, matches) {
          var j,
            matchIndexes = cc11001100_hook("matchIndexes", fn([], seed.length, argument), "var-init"),
            i = cc11001100_hook("i", matchIndexes.length, "var-init");
          while (i--) {
            if (seed[j = cc11001100_hook("j", matchIndexes[i], "assign")]) {
              seed[j] = cc11001100_hook("seed[j]", !(matches[j] = cc11001100_hook("matches[j]", seed[j], "assign")), "assign");
            }
          }
        });
      });
    }
    isXML = cc11001100_hook("isXML", Sizzle.isXML = cc11001100_hook("Sizzle.isXML", function (elem) {
      var documentElement = cc11001100_hook("documentElement", elem && (elem.ownerDocument || elem).documentElement, "var-init");
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    }, "assign"), "assign");
    support = cc11001100_hook("support", Sizzle.support = cc11001100_hook("Sizzle.support", {}, "assign"), "assign");
    setDocument = cc11001100_hook("setDocument", Sizzle.setDocument = cc11001100_hook("Sizzle.setDocument", function (node) {
      var doc = cc11001100_hook("doc", node ? node.ownerDocument || node : preferredDoc, "var-init"),
        parent = cc11001100_hook("parent", doc.defaultView, "var-init");
      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }
      document = cc11001100_hook("document", doc, "assign");
      docElem = cc11001100_hook("docElem", doc.documentElement, "assign");
      documentIsHTML = cc11001100_hook("documentIsHTML", !isXML(doc), "assign");
      if (parent && parent.attachEvent && parent !== parent.top) {
        parent.attachEvent("onbeforeunload", function () {
          setDocument();
        });
      }
      support.attributes = cc11001100_hook("support.attributes", assert(function (div) {
        div.className = cc11001100_hook("div.className", "i", "assign");
        return !div.getAttribute("className");
      }), "assign");
      support.getElementsByTagName = cc11001100_hook("support.getElementsByTagName", assert(function (div) {
        div.appendChild(doc.createComment(""));
        return !div.getElementsByTagName("*").length;
      }), "assign");
      support.getElementsByClassName = cc11001100_hook("support.getElementsByClassName", assert(function (div) {
        div.innerHTML = cc11001100_hook("div.innerHTML", "<div class='a'></div><div class='a i'></div>", "assign");
        div.firstChild.className = cc11001100_hook("div.firstChild.className", "i", "assign");
        return div.getElementsByClassName("i").length === 2;
      }), "assign");
      support.getById = cc11001100_hook("support.getById", assert(function (div) {
        docElem.appendChild(div).id = cc11001100_hook("docElem.appendChild(div).id", expando, "assign");
        return !doc.getElementsByName || !doc.getElementsByName(expando).length;
      }), "assign");
      if (support.getById) {
        Expr.find["ID"] = cc11001100_hook("Expr.find[\"ID\"]", function (id, context) {
          if (typeof context.getElementById !== strundefined && documentIsHTML) {
            var m = cc11001100_hook("m", context.getElementById(id), "var-init");
            return m && m.parentNode ? [m] : [];
          }
        }, "assign");
        Expr.filter["ID"] = cc11001100_hook("Expr.filter[\"ID\"]", function (id) {
          var attrId = cc11001100_hook("attrId", id.replace(runescape, funescape), "var-init");
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        }, "assign");
      } else {
        delete Expr.find["ID"];
        Expr.filter["ID"] = cc11001100_hook("Expr.filter[\"ID\"]", function (id) {
          var attrId = cc11001100_hook("attrId", id.replace(runescape, funescape), "var-init");
          return function (elem) {
            var node = cc11001100_hook("node", typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id"), "var-init");
            return node && node.value === attrId;
          };
        }, "assign");
      }
      Expr.find["TAG"] = cc11001100_hook("Expr.find[\"TAG\"]", support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== strundefined) {
          return context.getElementsByTagName(tag);
        }
      } : function (tag, context) {
        var elem,
          tmp = cc11001100_hook("tmp", [], "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          results = cc11001100_hook("results", context.getElementsByTagName(tag), "var-init");
        if (tag === "*") {
          while (elem = cc11001100_hook("elem", results[i++], "assign")) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }
          return tmp;
        }
        return results;
      }, "assign");
      Expr.find["CLASS"] = cc11001100_hook("Expr.find[\"CLASS\"]", support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      }, "assign");
      rbuggyMatches = cc11001100_hook("rbuggyMatches", [], "assign");
      rbuggyQSA = cc11001100_hook("rbuggyQSA", [], "assign");
      if (support.qsa = cc11001100_hook("support.qsa", rnative.test(doc.querySelectorAll), "assign")) {
        assert(function (div) {
          div.innerHTML = cc11001100_hook("div.innerHTML", "<select><option selected=''></option></select>", "assign");
          if (!div.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!div.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
        });
        assert(function (div) {
          var input = cc11001100_hook("input", doc.createElement("input"), "var-init");
          input.setAttribute("type", "hidden");
          div.appendChild(input).setAttribute("t", "");
          if (div.querySelectorAll("[t^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          }
          if (!div.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          div.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }
      if (support.matchesSelector = cc11001100_hook("support.matchesSelector", rnative.test(matches = cc11001100_hook("matches", docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector, "assign")), "assign")) {
        assert(function (div) {
          support.disconnectedMatch = cc11001100_hook("support.disconnectedMatch", matches.call(div, "div"), "assign");
          matches.call(div, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }
      rbuggyQSA = cc11001100_hook("rbuggyQSA", rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), "assign");
      rbuggyMatches = cc11001100_hook("rbuggyMatches", rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), "assign");
      contains = cc11001100_hook("contains", rnative.test(docElem.contains) || docElem.compareDocumentPosition ? function (a, b) {
        var adown = cc11001100_hook("adown", a.nodeType === 9 ? a.documentElement : a, "var-init"),
          bup = cc11001100_hook("bup", b && b.parentNode, "var-init");
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = cc11001100_hook("b", b.parentNode, "assign")) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      }, "assign");
      sortOrder = cc11001100_hook("sortOrder", docElem.compareDocumentPosition ? function (a, b) {
        if (a === b) {
          hasDuplicate = cc11001100_hook("hasDuplicate", true, "assign");
          return 0;
        }
        var compare = cc11001100_hook("compare", b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b), "var-init");
        if (compare) {
          if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
            if (a === doc || contains(preferredDoc, a)) {
              return -1;
            }
            if (b === doc || contains(preferredDoc, b)) {
              return 1;
            }
            return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
          }
          return compare & 4 ? -1 : 1;
        }
        return a.compareDocumentPosition ? -1 : 1;
      } : function (a, b) {
        var cur,
          i = cc11001100_hook("i", 0, "var-init"),
          aup = cc11001100_hook("aup", a.parentNode, "var-init"),
          bup = cc11001100_hook("bup", b.parentNode, "var-init"),
          ap = cc11001100_hook("ap", [a], "var-init"),
          bp = cc11001100_hook("bp", [b], "var-init");
        if (a === b) {
          hasDuplicate = cc11001100_hook("hasDuplicate", true, "assign");
          return 0;
        } else if (!aup || !bup) {
          return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
        } else if (aup === bup) {
          return siblingCheck(a, b);
        }
        cur = cc11001100_hook("cur", a, "assign");
        while (cur = cc11001100_hook("cur", cur.parentNode, "assign")) {
          ap.unshift(cur);
        }
        cur = cc11001100_hook("cur", b, "assign");
        while (cur = cc11001100_hook("cur", cur.parentNode, "assign")) {
          bp.unshift(cur);
        }
        while (ap[i] === bp[i]) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      }, "assign");
      return doc;
    }, "assign"), "assign");
    Sizzle.matches = cc11001100_hook("Sizzle.matches", function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    }, "assign");
    Sizzle.matchesSelector = cc11001100_hook("Sizzle.matchesSelector", function (elem, expr) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      expr = cc11001100_hook("expr", expr.replace(rattributeQuotes, "='$1']"), "assign");
      if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = cc11001100_hook("ret", matches.call(elem, expr), "var-init");
          if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }
      return Sizzle(expr, document, null, [elem]).length > 0;
    }, "assign");
    Sizzle.contains = cc11001100_hook("Sizzle.contains", function (context, elem) {
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }
      return contains(context, elem);
    }, "assign");
    Sizzle.attr = cc11001100_hook("Sizzle.attr", function (elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = cc11001100_hook("fn", Expr.attrHandle[name.toLowerCase()], "var-init"),
        val = cc11001100_hook("val", fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined, "var-init");
      return val === undefined ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = cc11001100_hook("val", elem.getAttributeNode(name), "assign")) && val.specified ? val.value : null : val;
    }, "assign");
    Sizzle.error = cc11001100_hook("Sizzle.error", function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    }, "assign");
    Sizzle.uniqueSort = cc11001100_hook("Sizzle.uniqueSort", function (results) {
      var elem,
        duplicates = cc11001100_hook("duplicates", [], "var-init"),
        j = cc11001100_hook("j", 0, "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      hasDuplicate = cc11001100_hook("hasDuplicate", !support.detectDuplicates, "assign");
      sortInput = cc11001100_hook("sortInput", !support.sortStable && results.slice(0), "assign");
      results.sort(sortOrder);
      if (hasDuplicate) {
        while (elem = cc11001100_hook("elem", results[i++], "assign")) {
          if (elem === results[i]) {
            j = cc11001100_hook("j", duplicates.push(i), "assign");
          }
        }
        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }
      return results;
    }, "assign");
    getText = cc11001100_hook("getText", Sizzle.getText = cc11001100_hook("Sizzle.getText", function (elem) {
      var node,
        ret = cc11001100_hook("ret", "", "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        nodeType = cc11001100_hook("nodeType", elem.nodeType, "var-init");
      if (!nodeType) {
        for (; node = cc11001100_hook("node", elem[i], "assign"); i++) {
          ret += cc11001100_hook("ret", getText(node), "assign");
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          for (elem = cc11001100_hook("elem", elem.firstChild, "assign"); elem; elem = cc11001100_hook("elem", elem.nextSibling, "assign")) {
            ret += cc11001100_hook("ret", getText(elem), "assign");
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    }, "assign"), "assign");
    Expr = cc11001100_hook("Expr", Sizzle.selectors = cc11001100_hook("Sizzle.selectors", {
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", markFunction, "object-key-init"),
      match: cc11001100_hook("match", matchExpr, "object-key-init"),
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: cc11001100_hook("dir", "parentNode", "object-key-init"),
          first: cc11001100_hook("first", true, "object-key-init")
        },
        " ": {
          dir: cc11001100_hook("dir", "parentNode", "object-key-init")
        },
        "+": {
          dir: cc11001100_hook("dir", "previousSibling", "object-key-init"),
          first: cc11001100_hook("first", true, "object-key-init")
        },
        "~": {
          dir: cc11001100_hook("dir", "previousSibling", "object-key-init")
        }
      },
      preFilter: {
        ATTR: function (match) {
          match[1] = cc11001100_hook("match[1]", match[1].replace(runescape, funescape), "assign");
          match[3] = cc11001100_hook("match[3]", (match[4] || match[5] || "").replace(runescape, funescape), "assign");
          if (match[2] === "~=") {
            match[3] = cc11001100_hook("match[3]", " " + match[3] + " ", "assign");
          }
          return match.slice(0, 4);
        },
        CHILD: function (match) {
          match[1] = cc11001100_hook("match[1]", match[1].toLowerCase(), "assign");
          if (match[1].slice(0, 3) === "nth") {
            if (!match[3]) {
              Sizzle.error(match[0]);
            }
            match[4] = cc11001100_hook("match[4]", +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd")), "assign");
            match[5] = cc11001100_hook("match[5]", +(match[7] + match[8] || match[3] === "odd"), "assign");
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }
          return match;
        },
        PSEUDO: function (match) {
          var excess,
            unquoted = cc11001100_hook("unquoted", !match[5] && match[2], "var-init");
          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          }
          if (match[3] && match[4] !== undefined) {
            match[2] = cc11001100_hook("match[2]", match[4], "assign");
          } else if (unquoted && rpseudo.test(unquoted) && (excess = cc11001100_hook("excess", tokenize(unquoted, true), "assign")) && (excess = cc11001100_hook("excess", unquoted.indexOf(")", unquoted.length - excess) - unquoted.length, "assign"))) {
            match[0] = cc11001100_hook("match[0]", match[0].slice(0, excess), "assign");
            match[2] = cc11001100_hook("match[2]", unquoted.slice(0, excess), "assign");
          }
          return match.slice(0, 3);
        }
      },
      filter: {
        TAG: function (nodeNameSelector) {
          var nodeName = cc11001100_hook("nodeName", nodeNameSelector.replace(runescape, funescape).toLowerCase(), "var-init");
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        CLASS: function (className) {
          var pattern = cc11001100_hook("pattern", classCache[className + " "], "var-init");
          return pattern || (pattern = cc11001100_hook("pattern", new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"), "assign")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
          });
        },
        ATTR: function (name, operator, check) {
          return function (elem) {
            var result = cc11001100_hook("result", Sizzle.attr(elem, name), "var-init");
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += cc11001100_hook("result", "", "assign");
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        CHILD: function (type, what, argument, first, last) {
          var simple = cc11001100_hook("simple", type.slice(0, 3) !== "nth", "var-init"),
            forward = cc11001100_hook("forward", type.slice(-4) !== "last", "var-init"),
            ofType = cc11001100_hook("ofType", what === "of-type", "var-init");
          return first === 1 && last === 0 ? function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
              outerCache,
              node,
              diff,
              nodeIndex,
              start,
              dir = cc11001100_hook("dir", simple !== forward ? "nextSibling" : "previousSibling", "var-init"),
              parent = cc11001100_hook("parent", elem.parentNode, "var-init"),
              name = cc11001100_hook("name", ofType && elem.nodeName.toLowerCase(), "var-init"),
              useCache = cc11001100_hook("useCache", !xml && !ofType, "var-init");
            if (parent) {
              if (simple) {
                while (dir) {
                  node = cc11001100_hook("node", elem, "assign");
                  while (node = cc11001100_hook("node", node[dir], "assign")) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = cc11001100_hook("start", dir = cc11001100_hook("dir", type === "only" && !start && "nextSibling", "assign"), "assign");
                }
                return true;
              }
              start = cc11001100_hook("start", [forward ? parent.firstChild : parent.lastChild], "assign");
              if (forward && useCache) {
                outerCache = cc11001100_hook("outerCache", parent[expando] || (parent[expando] = cc11001100_hook("parent[expando]", {}, "assign")), "assign");
                cache = cc11001100_hook("cache", outerCache[type] || [], "assign");
                nodeIndex = cc11001100_hook("nodeIndex", cache[0] === dirruns && cache[1], "assign");
                diff = cc11001100_hook("diff", cache[0] === dirruns && cache[2], "assign");
                node = cc11001100_hook("node", nodeIndex && parent.childNodes[nodeIndex], "assign");
                while (node = cc11001100_hook("node", ++nodeIndex && node && node[dir] || (diff = cc11001100_hook("diff", nodeIndex = cc11001100_hook("nodeIndex", 0, "assign"), "assign")) || start.pop(), "assign")) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    outerCache[type] = cc11001100_hook("outerCache[type]", [dirruns, nodeIndex, diff], "assign");
                    break;
                  }
                }
              } else if (useCache && (cache = cc11001100_hook("cache", (elem[expando] || (elem[expando] = cc11001100_hook("elem[expando]", {}, "assign")))[type], "assign")) && cache[0] === dirruns) {
                diff = cc11001100_hook("diff", cache[1], "assign");
              } else {
                while (node = cc11001100_hook("node", ++nodeIndex && node && node[dir] || (diff = cc11001100_hook("diff", nodeIndex = cc11001100_hook("nodeIndex", 0, "assign"), "assign")) || start.pop(), "assign")) {
                  if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                    if (useCache) {
                      (node[expando] || (node[expando] = cc11001100_hook("node[expando]", {}, "assign")))[type] = cc11001100_hook("(node[expando] || (node[expando] = {}))[type]", [dirruns, diff], "assign");
                    }
                    if (node === elem) {
                      break;
                    }
                  }
                }
              }
              diff -= cc11001100_hook("diff", last, "assign");
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        PSEUDO: function (pseudo, argument) {
          var args,
            fn = cc11001100_hook("fn", Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo), "var-init");
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = cc11001100_hook("args", [pseudo, pseudo, "", argument], "assign");
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                matched = cc11001100_hook("matched", fn(seed, argument), "var-init"),
                i = cc11001100_hook("i", matched.length, "var-init");
              while (i--) {
                idx = cc11001100_hook("idx", indexOf.call(seed, matched[i]), "assign");
                seed[idx] = cc11001100_hook("seed[idx]", !(matches[idx] = cc11001100_hook("matches[idx]", matched[i], "assign")), "assign");
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        not: cc11001100_hook("not", markFunction(function (selector) {
          var input = cc11001100_hook("input", [], "var-init"),
            results = cc11001100_hook("results", [], "var-init"),
            matcher = cc11001100_hook("matcher", compile(selector.replace(rtrim, "$1")), "var-init");
          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem,
              unmatched = cc11001100_hook("unmatched", matcher(seed, null, xml, []), "var-init"),
              i = cc11001100_hook("i", seed.length, "var-init");
            while (i--) {
              if (elem = cc11001100_hook("elem", unmatched[i], "assign")) {
                seed[i] = cc11001100_hook("seed[i]", !(matches[i] = cc11001100_hook("matches[i]", elem, "assign")), "assign");
              }
            }
          }) : function (elem, context, xml) {
            input[0] = cc11001100_hook("input[0]", elem, "assign");
            matcher(input, null, xml, results);
            return !results.pop();
          };
        }), "object-key-init"),
        has: cc11001100_hook("has", markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }), "object-key-init"),
        contains: cc11001100_hook("contains", markFunction(function (text) {
          return function (elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }), "object-key-init"),
        lang: cc11001100_hook("lang", markFunction(function (lang) {
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }
          lang = cc11001100_hook("lang", lang.replace(runescape, funescape).toLowerCase(), "assign");
          return function (elem) {
            var elemLang;
            do {
              if (elemLang = cc11001100_hook("elemLang", documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"), "assign")) {
                elemLang = cc11001100_hook("elemLang", elemLang.toLowerCase(), "assign");
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = cc11001100_hook("elem", elem.parentNode, "assign")) && elem.nodeType === 1);
            return false;
          };
        }), "object-key-init"),
        target: function (elem) {
          var hash = cc11001100_hook("hash", window.location && window.location.hash, "var-init");
          return hash && hash.slice(1) === elem.id;
        },
        root: function (elem) {
          return elem === docElem;
        },
        focus: function (elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        enabled: function (elem) {
          return elem.disabled === false;
        },
        disabled: function (elem) {
          return elem.disabled === true;
        },
        checked: function (elem) {
          var nodeName = cc11001100_hook("nodeName", elem.nodeName.toLowerCase(), "var-init");
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        selected: function (elem) {
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        empty: function (elem) {
          for (elem = cc11001100_hook("elem", elem.firstChild, "assign"); elem; elem = cc11001100_hook("elem", elem.nextSibling, "assign")) {
            if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
              return false;
            }
          }
          return true;
        },
        parent: function (elem) {
          return !Expr.pseudos["empty"](elem);
        },
        header: function (elem) {
          return rheader.test(elem.nodeName);
        },
        input: function (elem) {
          return rinputs.test(elem.nodeName);
        },
        button: function (elem) {
          var name = cc11001100_hook("name", elem.nodeName.toLowerCase(), "var-init");
          return name === "input" && elem.type === "button" || name === "button";
        },
        text: function (elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = cc11001100_hook("attr", elem.getAttribute("type"), "assign")) == null || attr.toLowerCase() === elem.type);
        },
        first: cc11001100_hook("first", createPositionalPseudo(function () {
          return [0];
        }), "object-key-init"),
        last: cc11001100_hook("last", createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }), "object-key-init"),
        eq: cc11001100_hook("eq", createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }), "object-key-init"),
        even: cc11001100_hook("even", createPositionalPseudo(function (matchIndexes, length) {
          var i = cc11001100_hook("i", 0, "var-init");
          for (; i < length; i += cc11001100_hook("i", 2, "assign")) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }), "object-key-init"),
        odd: cc11001100_hook("odd", createPositionalPseudo(function (matchIndexes, length) {
          var i = cc11001100_hook("i", 1, "var-init");
          for (; i < length; i += cc11001100_hook("i", 2, "assign")) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }), "object-key-init"),
        lt: cc11001100_hook("lt", createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = cc11001100_hook("i", argument < 0 ? argument + length : argument, "var-init");
          for (; --i >= 0;) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }), "object-key-init"),
        gt: cc11001100_hook("gt", createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = cc11001100_hook("i", argument < 0 ? argument + length : argument, "var-init");
          for (; ++i < length;) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }), "object-key-init")
      }
    }, "assign"), "assign");
    Expr.pseudos["nth"] = cc11001100_hook("Expr.pseudos[\"nth\"]", Expr.pseudos["eq"], "assign");
    for (i in {
      radio: cc11001100_hook("radio", true, "object-key-init"),
      checkbox: cc11001100_hook("checkbox", true, "object-key-init"),
      file: cc11001100_hook("file", true, "object-key-init"),
      password: cc11001100_hook("password", true, "object-key-init"),
      image: cc11001100_hook("image", true, "object-key-init")
    }) {
      Expr.pseudos[i] = cc11001100_hook("Expr.pseudos[i]", createInputPseudo(i), "assign");
    }
    for (i in {
      submit: cc11001100_hook("submit", true, "object-key-init"),
      reset: cc11001100_hook("reset", true, "object-key-init")
    }) {
      Expr.pseudos[i] = cc11001100_hook("Expr.pseudos[i]", createButtonPseudo(i), "assign");
    }
    function setFilters() {}
    setFilters.prototype = cc11001100_hook("setFilters.prototype", Expr.filters = cc11001100_hook("Expr.filters", Expr.pseudos, "assign"), "assign");
    Expr.setFilters = cc11001100_hook("Expr.setFilters", new setFilters(), "assign");
    function tokenize(selector, parseOnly) {
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("parseOnly", parseOnly, "function-parameter");
      var matched,
        match,
        tokens,
        type,
        soFar,
        groups,
        preFilters,
        cached = cc11001100_hook("cached", tokenCache[selector + " "], "var-init");
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = cc11001100_hook("soFar", selector, "assign");
      groups = cc11001100_hook("groups", [], "assign");
      preFilters = cc11001100_hook("preFilters", Expr.preFilter, "assign");
      while (soFar) {
        if (!matched || (match = cc11001100_hook("match", rcomma.exec(soFar), "assign"))) {
          if (match) {
            soFar = cc11001100_hook("soFar", soFar.slice(match[0].length) || soFar, "assign");
          }
          groups.push(tokens = cc11001100_hook("tokens", [], "assign"));
        }
        matched = cc11001100_hook("matched", false, "assign");
        if (match = cc11001100_hook("match", rcombinators.exec(soFar), "assign")) {
          matched = cc11001100_hook("matched", match.shift(), "assign");
          tokens.push({
            value: cc11001100_hook("value", matched, "object-key-init"),
            type: cc11001100_hook("type", match[0].replace(rtrim, " "), "object-key-init")
          });
          soFar = cc11001100_hook("soFar", soFar.slice(matched.length), "assign");
        }
        for (type in Expr.filter) {
          if ((match = cc11001100_hook("match", matchExpr[type].exec(soFar), "assign")) && (!preFilters[type] || (match = cc11001100_hook("match", preFilters[type](match), "assign")))) {
            matched = cc11001100_hook("matched", match.shift(), "assign");
            tokens.push({
              value: cc11001100_hook("value", matched, "object-key-init"),
              type: cc11001100_hook("type", type, "object-key-init"),
              matches: cc11001100_hook("matches", match, "object-key-init")
            });
            soFar = cc11001100_hook("soFar", soFar.slice(matched.length), "assign");
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    }
    function toSelector(tokens) {
      cc11001100_hook("tokens", tokens, "function-parameter");
      var i = cc11001100_hook("i", 0, "var-init"),
        len = cc11001100_hook("len", tokens.length, "var-init"),
        selector = cc11001100_hook("selector", "", "var-init");
      for (; i < len; i++) {
        selector += cc11001100_hook("selector", tokens[i].value, "assign");
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      cc11001100_hook("matcher", matcher, "function-parameter");
      cc11001100_hook("combinator", combinator, "function-parameter");
      cc11001100_hook("base", base, "function-parameter");
      var dir = cc11001100_hook("dir", combinator.dir, "var-init"),
        checkNonElements = cc11001100_hook("checkNonElements", base && dir === "parentNode", "var-init"),
        doneName = cc11001100_hook("doneName", done++, "var-init");
      return combinator.first ? function (elem, context, xml) {
        while (elem = cc11001100_hook("elem", elem[dir], "assign")) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
      } : function (elem, context, xml) {
        var data,
          cache,
          outerCache,
          dirkey = cc11001100_hook("dirkey", dirruns + " " + doneName, "var-init");
        if (xml) {
          while (elem = cc11001100_hook("elem", elem[dir], "assign")) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = cc11001100_hook("elem", elem[dir], "assign")) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = cc11001100_hook("outerCache", elem[expando] || (elem[expando] = cc11001100_hook("elem[expando]", {}, "assign")), "assign");
              if ((cache = cc11001100_hook("cache", outerCache[dir], "assign")) && cache[0] === dirkey) {
                if ((data = cc11001100_hook("data", cache[1], "assign")) === true || data === cachedruns) {
                  return data === true;
                }
              } else {
                cache = cc11001100_hook("cache", outerCache[dir] = cc11001100_hook("outerCache[dir]", [dirkey], "assign"), "assign");
                cache[1] = cc11001100_hook("cache[1]", matcher(elem, context, xml) || cachedruns, "assign");
                if (cache[1] === true) {
                  return true;
                }
              }
            }
          }
        }
      };
    }
    function elementMatcher(matchers) {
      cc11001100_hook("matchers", matchers, "function-parameter");
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = cc11001100_hook("i", matchers.length, "var-init");
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function condense(unmatched, map, filter, context, xml) {
      cc11001100_hook("unmatched", unmatched, "function-parameter");
      cc11001100_hook("map", map, "function-parameter");
      cc11001100_hook("filter", filter, "function-parameter");
      cc11001100_hook("context", context, "function-parameter");
      cc11001100_hook("xml", xml, "function-parameter");
      var elem,
        newUnmatched = cc11001100_hook("newUnmatched", [], "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        len = cc11001100_hook("len", unmatched.length, "var-init"),
        mapped = cc11001100_hook("mapped", map != null, "var-init");
      for (; i < len; i++) {
        if (elem = cc11001100_hook("elem", unmatched[i], "assign")) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      cc11001100_hook("preFilter", preFilter, "function-parameter");
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("matcher", matcher, "function-parameter");
      cc11001100_hook("postFilter", postFilter, "function-parameter");
      cc11001100_hook("postFinder", postFinder, "function-parameter");
      cc11001100_hook("postSelector", postSelector, "function-parameter");
      if (postFilter && !postFilter[expando]) {
        postFilter = cc11001100_hook("postFilter", setMatcher(postFilter), "assign");
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = cc11001100_hook("postFinder", setMatcher(postFinder, postSelector), "assign");
      }
      return markFunction(function (seed, results, context, xml) {
        var temp,
          i,
          elem,
          preMap = cc11001100_hook("preMap", [], "var-init"),
          postMap = cc11001100_hook("postMap", [], "var-init"),
          preexisting = cc11001100_hook("preexisting", results.length, "var-init"),
          elems = cc11001100_hook("elems", seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), "var-init"),
          matcherIn = cc11001100_hook("matcherIn", preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, "var-init"),
          matcherOut = cc11001100_hook("matcherOut", matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn, "var-init");
        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        }
        if (postFilter) {
          temp = cc11001100_hook("temp", condense(matcherOut, postMap), "assign");
          postFilter(temp, [], context, xml);
          i = cc11001100_hook("i", temp.length, "assign");
          while (i--) {
            if (elem = cc11001100_hook("elem", temp[i], "assign")) {
              matcherOut[postMap[i]] = cc11001100_hook("matcherOut[postMap[i]]", !(matcherIn[postMap[i]] = cc11001100_hook("matcherIn[postMap[i]]", elem, "assign")), "assign");
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = cc11001100_hook("temp", [], "assign");
              i = cc11001100_hook("i", matcherOut.length, "assign");
              while (i--) {
                if (elem = cc11001100_hook("elem", matcherOut[i], "assign")) {
                  temp.push(matcherIn[i] = cc11001100_hook("matcherIn[i]", elem, "assign"));
                }
              }
              postFinder(null, matcherOut = cc11001100_hook("matcherOut", [], "assign"), temp, xml);
            }
            i = cc11001100_hook("i", matcherOut.length, "assign");
            while (i--) {
              if ((elem = cc11001100_hook("elem", matcherOut[i], "assign")) && (temp = cc11001100_hook("temp", postFinder ? indexOf.call(seed, elem) : preMap[i], "assign")) > -1) {
                seed[temp] = cc11001100_hook("seed[temp]", !(results[temp] = cc11001100_hook("results[temp]", elem, "assign")), "assign");
              }
            }
          }
        } else {
          matcherOut = cc11001100_hook("matcherOut", condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), "assign");
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      cc11001100_hook("tokens", tokens, "function-parameter");
      var checkContext,
        matcher,
        j,
        len = cc11001100_hook("len", tokens.length, "var-init"),
        leadingRelative = cc11001100_hook("leadingRelative", Expr.relative[tokens[0].type], "var-init"),
        implicitRelative = cc11001100_hook("implicitRelative", leadingRelative || Expr.relative[" "], "var-init"),
        i = cc11001100_hook("i", leadingRelative ? 1 : 0, "var-init"),
        matchContext = cc11001100_hook("matchContext", addCombinator(function (elem) {
          return elem === checkContext;
        }, implicitRelative, true), "var-init"),
        matchAnyContext = cc11001100_hook("matchAnyContext", addCombinator(function (elem) {
          return indexOf.call(checkContext, elem) > -1;
        }, implicitRelative, true), "var-init"),
        matchers = cc11001100_hook("matchers", [function (elem, context, xml) {
          return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = cc11001100_hook("checkContext", context, "assign")).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
        }], "var-init");
      for (; i < len; i++) {
        if (matcher = cc11001100_hook("matcher", Expr.relative[tokens[i].type], "assign")) {
          matchers = cc11001100_hook("matchers", [addCombinator(elementMatcher(matchers), matcher)], "assign");
        } else {
          matcher = cc11001100_hook("matcher", Expr.filter[tokens[i].type].apply(null, tokens[i].matches), "assign");
          if (matcher[expando]) {
            j = cc11001100_hook("j", ++i, "assign");
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
              value: cc11001100_hook("value", tokens[i - 2].type === " " ? "*" : "", "object-key-init")
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = cc11001100_hook("tokens", tokens.slice(j), "assign")), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      cc11001100_hook("elementMatchers", elementMatchers, "function-parameter");
      cc11001100_hook("setMatchers", setMatchers, "function-parameter");
      var matcherCachedRuns = cc11001100_hook("matcherCachedRuns", 0, "var-init"),
        bySet = cc11001100_hook("bySet", setMatchers.length > 0, "var-init"),
        byElement = cc11001100_hook("byElement", elementMatchers.length > 0, "var-init"),
        superMatcher = function (seed, context, xml, results, expandContext) {
          var elem,
            j,
            matcher,
            setMatched = cc11001100_hook("setMatched", [], "var-init"),
            matchedCount = cc11001100_hook("matchedCount", 0, "var-init"),
            i = cc11001100_hook("i", "0", "var-init"),
            unmatched = cc11001100_hook("unmatched", seed && [], "var-init"),
            outermost = cc11001100_hook("outermost", expandContext != null, "var-init"),
            contextBackup = cc11001100_hook("contextBackup", outermostContext, "var-init"),
            elems = cc11001100_hook("elems", seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context), "var-init"),
            dirrunsUnique = cc11001100_hook("dirrunsUnique", dirruns += cc11001100_hook("dirruns", contextBackup == null ? 1 : Math.random() || .1, "assign"), "var-init");
          if (outermost) {
            outermostContext = cc11001100_hook("outermostContext", context !== document && context, "assign");
            cachedruns = cc11001100_hook("cachedruns", matcherCachedRuns, "assign");
          }
          for (; (elem = cc11001100_hook("elem", elems[i], "assign")) != null; i++) {
            if (byElement && elem) {
              j = cc11001100_hook("j", 0, "assign");
              while (matcher = cc11001100_hook("matcher", elementMatchers[j++], "assign")) {
                if (matcher(elem, context, xml)) {
                  results.push(elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = cc11001100_hook("dirruns", dirrunsUnique, "assign");
                cachedruns = cc11001100_hook("cachedruns", ++matcherCachedRuns, "assign");
              }
            }
            if (bySet) {
              if (elem = cc11001100_hook("elem", !matcher && elem, "assign")) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          matchedCount += cc11001100_hook("matchedCount", i, "assign");
          if (bySet && i !== matchedCount) {
            j = cc11001100_hook("j", 0, "assign");
            while (matcher = cc11001100_hook("matcher", setMatchers[j++], "assign")) {
              matcher(unmatched, setMatched, context, xml);
            }
            if (seed) {
              if (matchedCount > 0) {
                while (i--) {
                  if (!(unmatched[i] || setMatched[i])) {
                    setMatched[i] = cc11001100_hook("setMatched[i]", pop.call(results), "assign");
                  }
                }
              }
              setMatched = cc11001100_hook("setMatched", condense(setMatched), "assign");
            }
            push.apply(results, setMatched);
            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
              Sizzle.uniqueSort(results);
            }
          }
          if (outermost) {
            dirruns = cc11001100_hook("dirruns", dirrunsUnique, "assign");
            outermostContext = cc11001100_hook("outermostContext", contextBackup, "assign");
          }
          return unmatched;
        };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    compile = cc11001100_hook("compile", Sizzle.compile = cc11001100_hook("Sizzle.compile", function (selector, group) {
      var i,
        setMatchers = cc11001100_hook("setMatchers", [], "var-init"),
        elementMatchers = cc11001100_hook("elementMatchers", [], "var-init"),
        cached = cc11001100_hook("cached", compilerCache[selector + " "], "var-init");
      if (!cached) {
        if (!group) {
          group = cc11001100_hook("group", tokenize(selector), "assign");
        }
        i = cc11001100_hook("i", group.length, "assign");
        while (i--) {
          cached = cc11001100_hook("cached", matcherFromTokens(group[i]), "assign");
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = cc11001100_hook("cached", compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), "assign");
      }
      return cached;
    }, "assign"), "assign");
    function multipleContexts(selector, contexts, results) {
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("contexts", contexts, "function-parameter");
      cc11001100_hook("results", results, "function-parameter");
      var i = cc11001100_hook("i", 0, "var-init"),
        len = cc11001100_hook("len", contexts.length, "var-init");
      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    function select(selector, context, results, seed) {
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("context", context, "function-parameter");
      cc11001100_hook("results", results, "function-parameter");
      cc11001100_hook("seed", seed, "function-parameter");
      var i,
        tokens,
        token,
        type,
        find,
        match = cc11001100_hook("match", tokenize(selector), "var-init");
      if (!seed) {
        if (match.length === 1) {
          tokens = cc11001100_hook("tokens", match[0] = cc11001100_hook("match[0]", match[0].slice(0), "assign"), "assign");
          if (tokens.length > 2 && (token = cc11001100_hook("token", tokens[0], "assign")).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
            context = cc11001100_hook("context", (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0], "assign");
            if (!context) {
              return results;
            }
            selector = cc11001100_hook("selector", selector.slice(tokens.shift().value.length), "assign");
          }
          i = cc11001100_hook("i", matchExpr["needsContext"].test(selector) ? 0 : tokens.length, "assign");
          while (i--) {
            token = cc11001100_hook("token", tokens[i], "assign");
            if (Expr.relative[type = cc11001100_hook("type", token.type, "assign")]) {
              break;
            }
            if (find = cc11001100_hook("find", Expr.find[type], "assign")) {
              if (seed = cc11001100_hook("seed", find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context), "assign")) {
                tokens.splice(i, 1);
                selector = cc11001100_hook("selector", seed.length && toSelector(tokens), "assign");
                if (!selector) {
                  push.apply(results, seed);
                  return results;
                }
                break;
              }
            }
          }
        }
      }
      compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector));
      return results;
    }
    support.sortStable = cc11001100_hook("support.sortStable", expando.split("").sort(sortOrder).join("") === expando, "assign");
    support.detectDuplicates = cc11001100_hook("support.detectDuplicates", hasDuplicate, "assign");
    setDocument();
    support.sortDetached = cc11001100_hook("support.sortDetached", assert(function (div1) {
      return div1.compareDocumentPosition(document.createElement("div")) & 1;
    }), "assign");
    if (!assert(function (div) {
      div.innerHTML = cc11001100_hook("div.innerHTML", "<a href='#'></a>", "assign");
      return div.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!support.attributes || !assert(function (div) {
      div.innerHTML = cc11001100_hook("div.innerHTML", "<input/>", "assign");
      div.firstChild.setAttribute("value", "");
      return div.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    }
    if (!assert(function (div) {
      return div.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;
        if (!isXML) {
          return (val = cc11001100_hook("val", elem.getAttributeNode(name), "assign")) && val.specified ? val.value : elem[name] === true ? name.toLowerCase() : null;
        }
      });
    }
    jQuery.find = cc11001100_hook("jQuery.find", Sizzle, "assign");
    jQuery.expr = cc11001100_hook("jQuery.expr", Sizzle.selectors, "assign");
    jQuery.expr[":"] = cc11001100_hook("jQuery.expr[\":\"]", jQuery.expr.pseudos, "assign");
    jQuery.unique = cc11001100_hook("jQuery.unique", Sizzle.uniqueSort, "assign");
    jQuery.text = cc11001100_hook("jQuery.text", Sizzle.getText, "assign");
    jQuery.isXMLDoc = cc11001100_hook("jQuery.isXMLDoc", Sizzle.isXML, "assign");
    jQuery.contains = cc11001100_hook("jQuery.contains", Sizzle.contains, "assign");
  })(window);
  var optionsCache = cc11001100_hook("optionsCache", {}, "var-init");
  function createOptions(options) {
    cc11001100_hook("options", options, "function-parameter");
    var object = cc11001100_hook("object", optionsCache[options] = cc11001100_hook("optionsCache[options]", {}, "assign"), "var-init");
    jQuery.each(options.match(core_rnotwhite) || [], function (_, flag) {
      object[flag] = cc11001100_hook("object[flag]", true, "assign");
    });
    return object;
  }
  jQuery.Callbacks = cc11001100_hook("jQuery.Callbacks", function (options) {
    options = cc11001100_hook("options", typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options), "assign");
    var firing,
      memory,
      fired,
      firingLength,
      firingIndex,
      firingStart,
      list = cc11001100_hook("list", [], "var-init"),
      stack = cc11001100_hook("stack", !options.once && [], "var-init"),
      fire = function (data) {
        memory = cc11001100_hook("memory", options.memory && data, "assign");
        fired = cc11001100_hook("fired", true, "assign");
        firingIndex = cc11001100_hook("firingIndex", firingStart || 0, "assign");
        firingStart = cc11001100_hook("firingStart", 0, "assign");
        firingLength = cc11001100_hook("firingLength", list.length, "assign");
        firing = cc11001100_hook("firing", true, "assign");
        for (; list && firingIndex < firingLength; firingIndex++) {
          if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
            memory = cc11001100_hook("memory", false, "assign");
            break;
          }
        }
        firing = cc11001100_hook("firing", false, "assign");
        if (list) {
          if (stack) {
            if (stack.length) {
              fire(stack.shift());
            }
          } else if (memory) {
            list = cc11001100_hook("list", [], "assign");
          } else {
            self.disable();
          }
        }
      },
      self = cc11001100_hook("self", {
        add: function () {
          if (list) {
            var start = cc11001100_hook("start", list.length, "var-init");
            (function add(args) {
              jQuery.each(args, function (_, arg) {
                var type = cc11001100_hook("type", jQuery.type(arg), "var-init");
                if (type === "function") {
                  if (!options.unique || !self.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && type !== "string") {
                  add(arg);
                }
              });
            })(arguments);
            if (firing) {
              firingLength = cc11001100_hook("firingLength", list.length, "assign");
            } else if (memory) {
              firingStart = cc11001100_hook("firingStart", start, "assign");
              fire(memory);
            }
          }
          return this;
        },
        remove: function () {
          if (list) {
            jQuery.each(arguments, function (_, arg) {
              var index;
              while ((index = cc11001100_hook("index", jQuery.inArray(arg, list, index), "assign")) > -1) {
                list.splice(index, 1);
                if (firing) {
                  if (index <= firingLength) {
                    firingLength--;
                  }
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              }
            });
          }
          return this;
        },
        has: function (fn) {
          return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
        },
        empty: function () {
          list = cc11001100_hook("list", [], "assign");
          firingLength = cc11001100_hook("firingLength", 0, "assign");
          return this;
        },
        disable: function () {
          list = cc11001100_hook("list", stack = cc11001100_hook("stack", memory = cc11001100_hook("memory", undefined, "assign"), "assign"), "assign");
          return this;
        },
        disabled: function () {
          return !list;
        },
        lock: function () {
          stack = cc11001100_hook("stack", undefined, "assign");
          if (!memory) {
            self.disable();
          }
          return this;
        },
        locked: function () {
          return !stack;
        },
        fireWith: function (context, args) {
          if (list && (!fired || stack)) {
            args = cc11001100_hook("args", args || [], "assign");
            args = cc11001100_hook("args", [context, args.slice ? args.slice() : args], "assign");
            if (firing) {
              stack.push(args);
            } else {
              fire(args);
            }
          }
          return this;
        },
        fire: function () {
          self.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!fired;
        }
      }, "var-init");
    return self;
  }, "assign");
  jQuery.extend({
    Deferred: function (func) {
      var tuples = cc11001100_hook("tuples", [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]], "var-init"),
        state = cc11001100_hook("state", "pending", "var-init"),
        promise = cc11001100_hook("promise", {
          state: function () {
            return state;
          },
          always: function () {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          then: function () {
            var fns = cc11001100_hook("fns", arguments, "var-init");
            return jQuery.Deferred(function (newDefer) {
              jQuery.each(tuples, function (i, tuple) {
                var action = cc11001100_hook("action", tuple[0], "var-init"),
                  fn = cc11001100_hook("fn", jQuery.isFunction(fns[i]) && fns[i], "var-init");
                deferred[tuple[1]](function () {
                  var returned = cc11001100_hook("returned", fn && fn.apply(this, arguments), "var-init");
                  if (returned && jQuery.isFunction(returned.promise)) {
                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                  } else {
                    newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                  }
                });
              });
              fns = cc11001100_hook("fns", null, "assign");
            }).promise();
          },
          promise: function (obj) {
            return obj != null ? jQuery.extend(obj, promise) : promise;
          }
        }, "var-init"),
        deferred = cc11001100_hook("deferred", {}, "var-init");
      promise.pipe = cc11001100_hook("promise.pipe", promise.then, "assign");
      jQuery.each(tuples, function (i, tuple) {
        var list = cc11001100_hook("list", tuple[2], "var-init"),
          stateString = cc11001100_hook("stateString", tuple[3], "var-init");
        promise[tuple[1]] = cc11001100_hook("promise[tuple[1]]", list.add, "assign");
        if (stateString) {
          list.add(function () {
            state = cc11001100_hook("state", stateString, "assign");
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        }
        deferred[tuple[0]] = cc11001100_hook("deferred[tuple[0]]", function () {
          deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
          return this;
        }, "assign");
        deferred[tuple[0] + "With"] = cc11001100_hook("deferred[tuple[0] + \"With\"]", list.fireWith, "assign");
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function (subordinate) {
      var i = cc11001100_hook("i", 0, "var-init"),
        resolveValues = cc11001100_hook("resolveValues", core_slice.call(arguments), "var-init"),
        length = cc11001100_hook("length", resolveValues.length, "var-init"),
        remaining = cc11001100_hook("remaining", length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, "var-init"),
        deferred = cc11001100_hook("deferred", remaining === 1 ? subordinate : jQuery.Deferred(), "var-init"),
        updateFunc = function (i, contexts, values) {
          return function (value) {
            contexts[i] = cc11001100_hook("contexts[i]", this, "assign");
            values[i] = cc11001100_hook("values[i]", arguments.length > 1 ? core_slice.call(arguments) : value, "assign");
            if (values === progressValues) {
              deferred.notifyWith(contexts, values);
            } else if (! --remaining) {
              deferred.resolveWith(contexts, values);
            }
          };
        },
        progressValues,
        progressContexts,
        resolveContexts;
      if (length > 1) {
        progressValues = cc11001100_hook("progressValues", new Array(length), "assign");
        progressContexts = cc11001100_hook("progressContexts", new Array(length), "assign");
        resolveContexts = cc11001100_hook("resolveContexts", new Array(length), "assign");
        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
          } else {
            --remaining;
          }
        }
      }
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }
      return deferred.promise();
    }
  });
  jQuery.support = cc11001100_hook("jQuery.support", function (support) {
    var all,
      a,
      input,
      select,
      fragment,
      opt,
      eventName,
      isSupported,
      i,
      div = cc11001100_hook("div", document.createElement("div"), "var-init");
    div.setAttribute("className", "t");
    div.innerHTML = cc11001100_hook("div.innerHTML", "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", "assign");
    all = cc11001100_hook("all", div.getElementsByTagName("*") || [], "assign");
    a = cc11001100_hook("a", div.getElementsByTagName("a")[0], "assign");
    if (!a || !a.style || !all.length) {
      return support;
    }
    select = cc11001100_hook("select", document.createElement("select"), "assign");
    opt = cc11001100_hook("opt", select.appendChild(document.createElement("option")), "assign");
    input = cc11001100_hook("input", div.getElementsByTagName("input")[0], "assign");
    a.style.cssText = cc11001100_hook("a.style.cssText", "top:1px;float:left;opacity:.5", "assign");
    support.getSetAttribute = cc11001100_hook("support.getSetAttribute", div.className !== "t", "assign");
    support.leadingWhitespace = cc11001100_hook("support.leadingWhitespace", div.firstChild.nodeType === 3, "assign");
    support.tbody = cc11001100_hook("support.tbody", !div.getElementsByTagName("tbody").length, "assign");
    support.htmlSerialize = cc11001100_hook("support.htmlSerialize", !!div.getElementsByTagName("link").length, "assign");
    support.style = cc11001100_hook("support.style", /top/.test(a.getAttribute("style")), "assign");
    support.hrefNormalized = cc11001100_hook("support.hrefNormalized", a.getAttribute("href") === "/a", "assign");
    support.opacity = cc11001100_hook("support.opacity", /^0.5/.test(a.style.opacity), "assign");
    support.cssFloat = cc11001100_hook("support.cssFloat", !!a.style.cssFloat, "assign");
    support.checkOn = cc11001100_hook("support.checkOn", !!input.value, "assign");
    support.optSelected = cc11001100_hook("support.optSelected", opt.selected, "assign");
    support.enctype = cc11001100_hook("support.enctype", !!document.createElement("form").enctype, "assign");
    support.html5Clone = cc11001100_hook("support.html5Clone", document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>", "assign");
    support.inlineBlockNeedsLayout = cc11001100_hook("support.inlineBlockNeedsLayout", false, "assign");
    support.shrinkWrapBlocks = cc11001100_hook("support.shrinkWrapBlocks", false, "assign");
    support.pixelPosition = cc11001100_hook("support.pixelPosition", false, "assign");
    support.deleteExpando = cc11001100_hook("support.deleteExpando", true, "assign");
    support.noCloneEvent = cc11001100_hook("support.noCloneEvent", true, "assign");
    support.reliableMarginRight = cc11001100_hook("support.reliableMarginRight", true, "assign");
    support.boxSizingReliable = cc11001100_hook("support.boxSizingReliable", true, "assign");
    input.checked = cc11001100_hook("input.checked", true, "assign");
    support.noCloneChecked = cc11001100_hook("support.noCloneChecked", input.cloneNode(true).checked, "assign");
    select.disabled = cc11001100_hook("select.disabled", true, "assign");
    support.optDisabled = cc11001100_hook("support.optDisabled", !opt.disabled, "assign");
    try {
      delete div.test;
    } catch (e) {
      support.deleteExpando = cc11001100_hook("support.deleteExpando", false, "assign");
    }
    input = cc11001100_hook("input", document.createElement("input"), "assign");
    input.setAttribute("value", "");
    support.input = cc11001100_hook("support.input", input.getAttribute("value") === "", "assign");
    input.value = cc11001100_hook("input.value", "t", "assign");
    input.setAttribute("type", "radio");
    support.radioValue = cc11001100_hook("support.radioValue", input.value === "t", "assign");
    input.setAttribute("checked", "t");
    input.setAttribute("name", "t");
    fragment = cc11001100_hook("fragment", document.createDocumentFragment(), "assign");
    fragment.appendChild(input);
    support.appendChecked = cc11001100_hook("support.appendChecked", input.checked, "assign");
    support.checkClone = cc11001100_hook("support.checkClone", fragment.cloneNode(true).cloneNode(true).lastChild.checked, "assign");
    if (div.attachEvent) {
      div.attachEvent("onclick", function () {
        support.noCloneEvent = cc11001100_hook("support.noCloneEvent", false, "assign");
      });
      div.cloneNode(true).click();
    }
    for (i in {
      submit: cc11001100_hook("submit", true, "object-key-init"),
      change: cc11001100_hook("change", true, "object-key-init"),
      focusin: cc11001100_hook("focusin", true, "object-key-init")
    }) {
      div.setAttribute(eventName = cc11001100_hook("eventName", "on" + i, "assign"), "t");
      support[i + "Bubbles"] = cc11001100_hook("support[i + \"Bubbles\"]", eventName in window || div.attributes[eventName].expando === false, "assign");
    }
    div.style.backgroundClip = cc11001100_hook("div.style.backgroundClip", "content-box", "assign");
    div.cloneNode(true).style.backgroundClip = cc11001100_hook("div.cloneNode(true).style.backgroundClip", "", "assign");
    support.clearCloneStyle = cc11001100_hook("support.clearCloneStyle", div.style.backgroundClip === "content-box", "assign");
    for (i in jQuery(support)) {
      break;
    }
    support.ownLast = cc11001100_hook("support.ownLast", i !== "0", "assign");
    jQuery(function () {
      var container,
        marginDiv,
        tds,
        divReset = cc11001100_hook("divReset", "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", "var-init"),
        body = cc11001100_hook("body", document.getElementsByTagName("body")[0], "var-init");
      if (!body) {
        return;
      }
      container = cc11001100_hook("container", document.createElement("div"), "assign");
      container.style.cssText = cc11001100_hook("container.style.cssText", "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", "assign");
      body.appendChild(container).appendChild(div);
      div.innerHTML = cc11001100_hook("div.innerHTML", "<table><tr><td></td><td>t</td></tr></table>", "assign");
      tds = cc11001100_hook("tds", div.getElementsByTagName("td"), "assign");
      tds[0].style.cssText = cc11001100_hook("tds[0].style.cssText", "padding:0;margin:0;border:0;display:none", "assign");
      isSupported = cc11001100_hook("isSupported", tds[0].offsetHeight === 0, "assign");
      tds[0].style.display = cc11001100_hook("tds[0].style.display", "", "assign");
      tds[1].style.display = cc11001100_hook("tds[1].style.display", "none", "assign");
      support.reliableHiddenOffsets = cc11001100_hook("support.reliableHiddenOffsets", isSupported && tds[0].offsetHeight === 0, "assign");
      div.innerHTML = cc11001100_hook("div.innerHTML", "", "assign");
      div.style.cssText = cc11001100_hook("div.style.cssText", "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", "assign");
      jQuery.swap(body, body.style.zoom != null ? {
        zoom: cc11001100_hook("zoom", 1, "object-key-init")
      } : {}, function () {
        support.boxSizing = cc11001100_hook("support.boxSizing", div.offsetWidth === 4, "assign");
      });
      if (window.getComputedStyle) {
        support.pixelPosition = cc11001100_hook("support.pixelPosition", (window.getComputedStyle(div, null) || {}).top !== "1%", "assign");
        support.boxSizingReliable = cc11001100_hook("support.boxSizingReliable", (window.getComputedStyle(div, null) || {
          width: cc11001100_hook("width", "4px", "object-key-init")
        }).width === "4px", "assign");
        marginDiv = cc11001100_hook("marginDiv", div.appendChild(document.createElement("div")), "assign");
        marginDiv.style.cssText = cc11001100_hook("marginDiv.style.cssText", div.style.cssText = cc11001100_hook("div.style.cssText", divReset, "assign"), "assign");
        marginDiv.style.marginRight = cc11001100_hook("marginDiv.style.marginRight", marginDiv.style.width = cc11001100_hook("marginDiv.style.width", "0", "assign"), "assign");
        div.style.width = cc11001100_hook("div.style.width", "1px", "assign");
        support.reliableMarginRight = cc11001100_hook("support.reliableMarginRight", !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight), "assign");
      }
      if (typeof div.style.zoom !== core_strundefined) {
        div.innerHTML = cc11001100_hook("div.innerHTML", "", "assign");
        div.style.cssText = cc11001100_hook("div.style.cssText", divReset + "width:1px;padding:1px;display:inline;zoom:1", "assign");
        support.inlineBlockNeedsLayout = cc11001100_hook("support.inlineBlockNeedsLayout", div.offsetWidth === 3, "assign");
        div.style.display = cc11001100_hook("div.style.display", "block", "assign");
        div.innerHTML = cc11001100_hook("div.innerHTML", "<div></div>", "assign");
        div.firstChild.style.width = cc11001100_hook("div.firstChild.style.width", "5px", "assign");
        support.shrinkWrapBlocks = cc11001100_hook("support.shrinkWrapBlocks", div.offsetWidth !== 3, "assign");
        if (support.inlineBlockNeedsLayout) {
          body.style.zoom = cc11001100_hook("body.style.zoom", 1, "assign");
        }
      }
      body.removeChild(container);
      container = cc11001100_hook("container", div = cc11001100_hook("div", tds = cc11001100_hook("tds", marginDiv = cc11001100_hook("marginDiv", null, "assign"), "assign"), "assign"), "assign");
    });
    all = cc11001100_hook("all", select = cc11001100_hook("select", fragment = cc11001100_hook("fragment", opt = cc11001100_hook("opt", a = cc11001100_hook("a", input = cc11001100_hook("input", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
    return support;
  }({}), "assign");
  var rbrace = cc11001100_hook("rbrace", /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, "var-init"),
    rmultiDash = cc11001100_hook("rmultiDash", /([A-Z])/g, "var-init");
  function internalData(elem, name, data, pvt) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("pvt", pvt, "function-parameter");
    if (!jQuery.acceptData(elem)) {
      return;
    }
    var ret,
      thisCache,
      internalKey = cc11001100_hook("internalKey", jQuery.expando, "var-init"),
      isNode = cc11001100_hook("isNode", elem.nodeType, "var-init"),
      cache = cc11001100_hook("cache", isNode ? jQuery.cache : elem, "var-init"),
      id = cc11001100_hook("id", isNode ? elem[internalKey] : elem[internalKey] && internalKey, "var-init");
    if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
      return;
    }
    if (!id) {
      if (isNode) {
        id = cc11001100_hook("id", elem[internalKey] = cc11001100_hook("elem[internalKey]", core_deletedIds.pop() || jQuery.guid++, "assign"), "assign");
      } else {
        id = cc11001100_hook("id", internalKey, "assign");
      }
    }
    if (!cache[id]) {
      cache[id] = cc11001100_hook("cache[id]", isNode ? {} : {
        toJSON: cc11001100_hook("toJSON", jQuery.noop, "object-key-init")
      }, "assign");
    }
    if (typeof name === "object" || typeof name === "function") {
      if (pvt) {
        cache[id] = cc11001100_hook("cache[id]", jQuery.extend(cache[id], name), "assign");
      } else {
        cache[id].data = cc11001100_hook("cache[id].data", jQuery.extend(cache[id].data, name), "assign");
      }
    }
    thisCache = cc11001100_hook("thisCache", cache[id], "assign");
    if (!pvt) {
      if (!thisCache.data) {
        thisCache.data = cc11001100_hook("thisCache.data", {}, "assign");
      }
      thisCache = cc11001100_hook("thisCache", thisCache.data, "assign");
    }
    if (data !== undefined) {
      thisCache[jQuery.camelCase(name)] = cc11001100_hook("thisCache[jQuery.camelCase(name)]", data, "assign");
    }
    if (typeof name === "string") {
      ret = cc11001100_hook("ret", thisCache[name], "assign");
      if (ret == null) {
        ret = cc11001100_hook("ret", thisCache[jQuery.camelCase(name)], "assign");
      }
    } else {
      ret = cc11001100_hook("ret", thisCache, "assign");
    }
    return ret;
  }
  function internalRemoveData(elem, name, pvt) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("pvt", pvt, "function-parameter");
    if (!jQuery.acceptData(elem)) {
      return;
    }
    var thisCache,
      i,
      isNode = cc11001100_hook("isNode", elem.nodeType, "var-init"),
      cache = cc11001100_hook("cache", isNode ? jQuery.cache : elem, "var-init"),
      id = cc11001100_hook("id", isNode ? elem[jQuery.expando] : jQuery.expando, "var-init");
    if (!cache[id]) {
      return;
    }
    if (name) {
      thisCache = cc11001100_hook("thisCache", pvt ? cache[id] : cache[id].data, "assign");
      if (thisCache) {
        if (!jQuery.isArray(name)) {
          if (name in thisCache) {
            name = cc11001100_hook("name", [name], "assign");
          } else {
            name = cc11001100_hook("name", jQuery.camelCase(name), "assign");
            if (name in thisCache) {
              name = cc11001100_hook("name", [name], "assign");
            } else {
              name = cc11001100_hook("name", name.split(" "), "assign");
            }
          }
        } else {
          name = cc11001100_hook("name", name.concat(jQuery.map(name, jQuery.camelCase)), "assign");
        }
        i = cc11001100_hook("i", name.length, "assign");
        while (i--) {
          delete thisCache[name[i]];
        }
        if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
          return;
        }
      }
    }
    if (!pvt) {
      delete cache[id].data;
      if (!isEmptyDataObject(cache[id])) {
        return;
      }
    }
    if (isNode) {
      jQuery.cleanData([elem], true);
    } else if (jQuery.support.deleteExpando || cache != cache.window) {
      delete cache[id];
    } else {
      cache[id] = cc11001100_hook("cache[id]", null, "assign");
    }
  }
  jQuery.extend({
    cache: {},
    noData: {
      applet: cc11001100_hook("applet", true, "object-key-init"),
      embed: cc11001100_hook("embed", true, "object-key-init"),
      object: cc11001100_hook("object", "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", "object-key-init")
    },
    hasData: function (elem) {
      elem = cc11001100_hook("elem", elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando], "assign");
      return !!elem && !isEmptyDataObject(elem);
    },
    data: function (elem, name, data) {
      return internalData(elem, name, data);
    },
    removeData: function (elem, name) {
      return internalRemoveData(elem, name);
    },
    _data: function (elem, name, data) {
      return internalData(elem, name, data, true);
    },
    _removeData: function (elem, name) {
      return internalRemoveData(elem, name, true);
    },
    acceptData: function (elem) {
      if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
        return false;
      }
      var noData = cc11001100_hook("noData", elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()], "var-init");
      return !noData || noData !== true && elem.getAttribute("classid") === noData;
    }
  });
  jQuery.fn.extend({
    data: function (key, value) {
      var attrs,
        name,
        data = cc11001100_hook("data", null, "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        elem = cc11001100_hook("elem", this[0], "var-init");
      if (key === undefined) {
        if (this.length) {
          data = cc11001100_hook("data", jQuery.data(elem), "assign");
          if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
            attrs = cc11001100_hook("attrs", elem.attributes, "assign");
            for (; i < attrs.length; i++) {
              name = cc11001100_hook("name", attrs[i].name, "assign");
              if (name.indexOf("data-") === 0) {
                name = cc11001100_hook("name", jQuery.camelCase(name.slice(5)), "assign");
                dataAttr(elem, name, data[name]);
              }
            }
            jQuery._data(elem, "parsedAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function () {
          jQuery.data(this, key);
        });
      }
      return arguments.length > 1 ? this.each(function () {
        jQuery.data(this, key, value);
      }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
    },
    removeData: function (key) {
      return this.each(function () {
        jQuery.removeData(this, key);
      });
    }
  });
  function dataAttr(elem, key, data) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    if (data === undefined && elem.nodeType === 1) {
      var name = cc11001100_hook("name", "data-" + key.replace(rmultiDash, "-$1").toLowerCase(), "var-init");
      data = cc11001100_hook("data", elem.getAttribute(name), "assign");
      if (typeof data === "string") {
        try {
          data = cc11001100_hook("data", data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data, "assign");
        } catch (e) {}
        jQuery.data(elem, key, data);
      } else {
        data = cc11001100_hook("data", undefined, "assign");
      }
    }
    return data;
  }
  function isEmptyDataObject(obj) {
    cc11001100_hook("obj", obj, "function-parameter");
    var name;
    for (name in obj) {
      if (name === "data" && jQuery.isEmptyObject(obj[name])) {
        continue;
      }
      if (name !== "toJSON") {
        return false;
      }
    }
    return true;
  }
  jQuery.extend({
    queue: function (elem, type, data) {
      var queue;
      if (elem) {
        type = cc11001100_hook("type", (type || "fx") + "queue", "assign");
        queue = cc11001100_hook("queue", jQuery._data(elem, type), "assign");
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = cc11001100_hook("queue", jQuery._data(elem, type, jQuery.makeArray(data)), "assign");
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function (elem, type) {
      type = cc11001100_hook("type", type || "fx", "assign");
      var queue = cc11001100_hook("queue", jQuery.queue(elem, type), "var-init"),
        startLength = cc11001100_hook("startLength", queue.length, "var-init"),
        fn = cc11001100_hook("fn", queue.shift(), "var-init"),
        hooks = cc11001100_hook("hooks", jQuery._queueHooks(elem, type), "var-init"),
        next = function () {
          jQuery.dequeue(elem, type);
        };
      if (fn === "inprogress") {
        fn = cc11001100_hook("fn", queue.shift(), "assign");
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function (elem, type) {
      var key = cc11001100_hook("key", type + "queueHooks", "var-init");
      return jQuery._data(elem, key) || jQuery._data(elem, key, {
        empty: cc11001100_hook("empty", jQuery.Callbacks("once memory").add(function () {
          jQuery._removeData(elem, type + "queue");
          jQuery._removeData(elem, key);
        }), "object-key-init")
      });
    }
  });
  jQuery.fn.extend({
    queue: function (type, data) {
      var setter = cc11001100_hook("setter", 2, "var-init");
      if (typeof type !== "string") {
        data = cc11001100_hook("data", type, "assign");
        type = cc11001100_hook("type", "fx", "assign");
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function () {
        var queue = cc11001100_hook("queue", jQuery.queue(this, type, data), "var-init");
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function (type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    delay: function (time, type) {
      time = cc11001100_hook("time", jQuery.fx ? jQuery.fx.speeds[time] || time : time, "assign");
      type = cc11001100_hook("type", type || "fx", "assign");
      return this.queue(type, function (next, hooks) {
        var timeout = cc11001100_hook("timeout", setTimeout(next, time), "var-init");
        hooks.stop = cc11001100_hook("hooks.stop", function () {
          clearTimeout(timeout);
        }, "assign");
      });
    },
    clearQueue: function (type) {
      return this.queue(type || "fx", []);
    },
    promise: function (type, obj) {
      var tmp,
        count = cc11001100_hook("count", 1, "var-init"),
        defer = cc11001100_hook("defer", jQuery.Deferred(), "var-init"),
        elements = cc11001100_hook("elements", this, "var-init"),
        i = cc11001100_hook("i", this.length, "var-init"),
        resolve = function () {
          if (! --count) {
            defer.resolveWith(elements, [elements]);
          }
        };
      if (typeof type !== "string") {
        obj = cc11001100_hook("obj", type, "assign");
        type = cc11001100_hook("type", undefined, "assign");
      }
      type = cc11001100_hook("type", type || "fx", "assign");
      while (i--) {
        tmp = cc11001100_hook("tmp", jQuery._data(elements[i], type + "queueHooks"), "assign");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var nodeHook,
    boolHook,
    rclass = cc11001100_hook("rclass", /[\t\r\n\f]/g, "var-init"),
    rreturn = cc11001100_hook("rreturn", /\r/g, "var-init"),
    rfocusable = cc11001100_hook("rfocusable", /^(?:input|select|textarea|button|object)$/i, "var-init"),
    rclickable = cc11001100_hook("rclickable", /^(?:a|area)$/i, "var-init"),
    ruseDefault = cc11001100_hook("ruseDefault", /^(?:checked|selected)$/i, "var-init"),
    getSetAttribute = cc11001100_hook("getSetAttribute", jQuery.support.getSetAttribute, "var-init"),
    getSetInput = cc11001100_hook("getSetInput", jQuery.support.input, "var-init");
  jQuery.fn.extend({
    attr: function (name, value) {
      return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function (name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    },
    prop: function (name, value) {
      return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function (name) {
      name = cc11001100_hook("name", jQuery.propFix[name] || name, "assign");
      return this.each(function () {
        try {
          this[name] = cc11001100_hook("this[name]", undefined, "assign");
          delete this[name];
        } catch (e) {}
      });
    },
    addClass: function (value) {
      var classes,
        elem,
        cur,
        clazz,
        j,
        i = cc11001100_hook("i", 0, "var-init"),
        len = cc11001100_hook("len", this.length, "var-init"),
        proceed = cc11001100_hook("proceed", typeof value === "string" && value, "var-init");
      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = cc11001100_hook("classes", (value || "").match(core_rnotwhite) || [], "assign");
        for (; i < len; i++) {
          elem = cc11001100_hook("elem", this[i], "assign");
          cur = cc11001100_hook("cur", elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " "), "assign");
          if (cur) {
            j = cc11001100_hook("j", 0, "assign");
            while (clazz = cc11001100_hook("clazz", classes[j++], "assign")) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += cc11001100_hook("cur", clazz + " ", "assign");
              }
            }
            elem.className = cc11001100_hook("elem.className", jQuery.trim(cur), "assign");
          }
        }
      }
      return this;
    },
    removeClass: function (value) {
      var classes,
        elem,
        cur,
        clazz,
        j,
        i = cc11001100_hook("i", 0, "var-init"),
        len = cc11001100_hook("len", this.length, "var-init"),
        proceed = cc11001100_hook("proceed", arguments.length === 0 || typeof value === "string" && value, "var-init");
      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = cc11001100_hook("classes", (value || "").match(core_rnotwhite) || [], "assign");
        for (; i < len; i++) {
          elem = cc11001100_hook("elem", this[i], "assign");
          cur = cc11001100_hook("cur", elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : ""), "assign");
          if (cur) {
            j = cc11001100_hook("j", 0, "assign");
            while (clazz = cc11001100_hook("clazz", classes[j++], "assign")) {
              while (cur.indexOf(" " + clazz + " ") >= 0) {
                cur = cc11001100_hook("cur", cur.replace(" " + clazz + " ", " "), "assign");
              }
            }
            elem.className = cc11001100_hook("elem.className", value ? jQuery.trim(cur) : "", "assign");
          }
        }
      }
      return this;
    },
    toggleClass: function (value, stateVal) {
      var type = cc11001100_hook("type", typeof value, "var-init");
      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      if (jQuery.isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
        });
      }
      return this.each(function () {
        if (type === "string") {
          var className,
            i = cc11001100_hook("i", 0, "var-init"),
            self = cc11001100_hook("self", jQuery(this), "var-init"),
            classNames = cc11001100_hook("classNames", value.match(core_rnotwhite) || [], "var-init");
          while (className = cc11001100_hook("className", classNames[i++], "assign")) {
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (type === core_strundefined || type === "boolean") {
          if (this.className) {
            jQuery._data(this, "__className__", this.className);
          }
          this.className = cc11001100_hook("this.className", this.className || value === false ? "" : jQuery._data(this, "__className__") || "", "assign");
        }
      });
    },
    hasClass: function (selector) {
      var className = cc11001100_hook("className", " " + selector + " ", "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        l = cc11001100_hook("l", this.length, "var-init");
      for (; i < l; i++) {
        if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
          return true;
        }
      }
      return false;
    },
    val: function (value) {
      var ret,
        hooks,
        isFunction,
        elem = cc11001100_hook("elem", this[0], "var-init");
      if (!arguments.length) {
        if (elem) {
          hooks = cc11001100_hook("hooks", jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], "assign");
          if (hooks && "get" in hooks && (ret = cc11001100_hook("ret", hooks.get(elem, "value"), "assign")) !== undefined) {
            return ret;
          }
          ret = cc11001100_hook("ret", elem.value, "assign");
          return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
        }
        return;
      }
      isFunction = cc11001100_hook("isFunction", jQuery.isFunction(value), "assign");
      return this.each(function (i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = cc11001100_hook("val", value.call(this, i, jQuery(this).val()), "assign");
        } else {
          val = cc11001100_hook("val", value, "assign");
        }
        if (val == null) {
          val = cc11001100_hook("val", "", "assign");
        } else if (typeof val === "number") {
          val += cc11001100_hook("val", "", "assign");
        } else if (jQuery.isArray(val)) {
          val = cc11001100_hook("val", jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          }), "assign");
        }
        hooks = cc11001100_hook("hooks", jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], "assign");
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = cc11001100_hook("this.value", val, "assign");
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function (elem) {
          var val = cc11001100_hook("val", jQuery.find.attr(elem, "value"), "var-init");
          return val != null ? val : elem.text;
        }
      },
      select: {
        get: function (elem) {
          var value,
            option,
            options = cc11001100_hook("options", elem.options, "var-init"),
            index = cc11001100_hook("index", elem.selectedIndex, "var-init"),
            one = cc11001100_hook("one", elem.type === "select-one" || index < 0, "var-init"),
            values = cc11001100_hook("values", one ? null : [], "var-init"),
            max = cc11001100_hook("max", one ? index + 1 : options.length, "var-init"),
            i = cc11001100_hook("i", index < 0 ? max : one ? index : 0, "var-init");
          for (; i < max; i++) {
            option = cc11001100_hook("option", options[i], "assign");
            if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              value = cc11001100_hook("value", jQuery(option).val(), "assign");
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function (elem, value) {
          var optionSet,
            option,
            options = cc11001100_hook("options", elem.options, "var-init"),
            values = cc11001100_hook("values", jQuery.makeArray(value), "var-init"),
            i = cc11001100_hook("i", options.length, "var-init");
          while (i--) {
            option = cc11001100_hook("option", options[i], "assign");
            if (option.selected = cc11001100_hook("option.selected", jQuery.inArray(jQuery(option).val(), values) >= 0, "assign")) {
              optionSet = cc11001100_hook("optionSet", true, "assign");
            }
          }
          if (!optionSet) {
            elem.selectedIndex = cc11001100_hook("elem.selectedIndex", -1, "assign");
          }
          return values;
        }
      }
    },
    attr: function (elem, name, value) {
      var hooks,
        ret,
        nType = cc11001100_hook("nType", elem.nodeType, "var-init");
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === core_strundefined) {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = cc11001100_hook("name", name.toLowerCase(), "assign");
        hooks = cc11001100_hook("hooks", jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook), "assign");
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
        } else if (hooks && "set" in hooks && (ret = cc11001100_hook("ret", hooks.set(elem, value, name), "assign")) !== undefined) {
          return ret;
        } else {
          elem.setAttribute(name, value + "");
          return value;
        }
      } else if (hooks && "get" in hooks && (ret = cc11001100_hook("ret", hooks.get(elem, name), "assign")) !== null) {
        return ret;
      } else {
        ret = cc11001100_hook("ret", jQuery.find.attr(elem, name), "assign");
        return ret == null ? undefined : ret;
      }
    },
    removeAttr: function (elem, value) {
      var name,
        propName,
        i = cc11001100_hook("i", 0, "var-init"),
        attrNames = cc11001100_hook("attrNames", value && value.match(core_rnotwhite), "var-init");
      if (attrNames && elem.nodeType === 1) {
        while (name = cc11001100_hook("name", attrNames[i++], "assign")) {
          propName = cc11001100_hook("propName", jQuery.propFix[name] || name, "assign");
          if (jQuery.expr.match.bool.test(name)) {
            if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
              elem[propName] = cc11001100_hook("elem[propName]", false, "assign");
            } else {
              elem[jQuery.camelCase("default-" + name)] = cc11001100_hook("elem[jQuery.camelCase(\"default-\" + name)]", elem[propName] = cc11001100_hook("elem[propName]", false, "assign"), "assign");
            }
          } else {
            jQuery.attr(elem, name, "");
          }
          elem.removeAttribute(getSetAttribute ? name : propName);
        }
      }
    },
    attrHooks: {
      type: {
        set: function (elem, value) {
          if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            var val = cc11001100_hook("val", elem.value, "var-init");
            elem.setAttribute("type", value);
            if (val) {
              elem.value = cc11001100_hook("elem.value", val, "assign");
            }
            return value;
          }
        }
      }
    },
    propFix: {
      "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
      "class": cc11001100_hook("class", "className", "object-key-init")
    },
    prop: function (elem, name, value) {
      var ret,
        hooks,
        notxml,
        nType = cc11001100_hook("nType", elem.nodeType, "var-init");
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      notxml = cc11001100_hook("notxml", nType !== 1 || !jQuery.isXMLDoc(elem), "assign");
      if (notxml) {
        name = cc11001100_hook("name", jQuery.propFix[name] || name, "assign");
        hooks = cc11001100_hook("hooks", jQuery.propHooks[name], "assign");
      }
      if (value !== undefined) {
        return hooks && "set" in hooks && (ret = cc11001100_hook("ret", hooks.set(elem, value, name), "assign")) !== undefined ? ret : elem[name] = cc11001100_hook("elem[name]", value, "assign");
      } else {
        return hooks && "get" in hooks && (ret = cc11001100_hook("ret", hooks.get(elem, name), "assign")) !== null ? ret : elem[name];
      }
    },
    propHooks: {
      tabIndex: {
        get: function (elem) {
          var tabindex = cc11001100_hook("tabindex", jQuery.find.attr(elem, "tabindex"), "var-init");
          return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
        }
      }
    }
  });
  boolHook = cc11001100_hook("boolHook", {
    set: function (elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
        elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
      } else {
        elem[jQuery.camelCase("default-" + name)] = cc11001100_hook("elem[jQuery.camelCase(\"default-\" + name)]", elem[name] = cc11001100_hook("elem[name]", true, "assign"), "assign");
      }
      return name;
    }
  }, "assign");
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = cc11001100_hook("getter", jQuery.expr.attrHandle[name] || jQuery.find.attr, "var-init");
    jQuery.expr.attrHandle[name] = cc11001100_hook("jQuery.expr.attrHandle[name]", getSetInput && getSetAttribute || !ruseDefault.test(name) ? function (elem, name, isXML) {
      var fn = cc11001100_hook("fn", jQuery.expr.attrHandle[name], "var-init"),
        ret = cc11001100_hook("ret", isXML ? undefined : (jQuery.expr.attrHandle[name] = cc11001100_hook("jQuery.expr.attrHandle[name]", undefined, "assign")) != getter(elem, name, isXML) ? name.toLowerCase() : null, "var-init");
      jQuery.expr.attrHandle[name] = cc11001100_hook("jQuery.expr.attrHandle[name]", fn, "assign");
      return ret;
    } : function (elem, name, isXML) {
      return isXML ? undefined : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
    }, "assign");
  });
  if (!getSetInput || !getSetAttribute) {
    jQuery.attrHooks.value = cc11001100_hook("jQuery.attrHooks.value", {
      set: function (elem, value, name) {
        if (jQuery.nodeName(elem, "input")) {
          elem.defaultValue = cc11001100_hook("elem.defaultValue", value, "assign");
        } else {
          return nodeHook && nodeHook.set(elem, value, name);
        }
      }
    }, "assign");
  }
  if (!getSetAttribute) {
    nodeHook = cc11001100_hook("nodeHook", {
      set: function (elem, value, name) {
        var ret = cc11001100_hook("ret", elem.getAttributeNode(name), "var-init");
        if (!ret) {
          elem.setAttributeNode(ret = cc11001100_hook("ret", elem.ownerDocument.createAttribute(name), "assign"));
        }
        ret.value = cc11001100_hook("ret.value", value += cc11001100_hook("value", "", "assign"), "assign");
        return name === "value" || value === elem.getAttribute(name) ? value : undefined;
      }
    }, "assign");
    jQuery.expr.attrHandle.id = cc11001100_hook("jQuery.expr.attrHandle.id", jQuery.expr.attrHandle.name = cc11001100_hook("jQuery.expr.attrHandle.name", jQuery.expr.attrHandle.coords = cc11001100_hook("jQuery.expr.attrHandle.coords", function (elem, name, isXML) {
      var ret;
      return isXML ? undefined : (ret = cc11001100_hook("ret", elem.getAttributeNode(name), "assign")) && ret.value !== "" ? ret.value : null;
    }, "assign"), "assign"), "assign");
    jQuery.valHooks.button = cc11001100_hook("jQuery.valHooks.button", {
      get: function (elem, name) {
        var ret = cc11001100_hook("ret", elem.getAttributeNode(name), "var-init");
        return ret && ret.specified ? ret.value : undefined;
      },
      set: cc11001100_hook("set", nodeHook.set, "object-key-init")
    }, "assign");
    jQuery.attrHooks.contenteditable = cc11001100_hook("jQuery.attrHooks.contenteditable", {
      set: function (elem, value, name) {
        nodeHook.set(elem, value === "" ? false : value, name);
      }
    }, "assign");
    jQuery.each(["width", "height"], function (i, name) {
      jQuery.attrHooks[name] = cc11001100_hook("jQuery.attrHooks[name]", {
        set: function (elem, value) {
          if (value === "") {
            elem.setAttribute(name, "auto");
            return value;
          }
        }
      }, "assign");
    });
  }
  if (!jQuery.support.hrefNormalized) {
    jQuery.each(["href", "src"], function (i, name) {
      jQuery.propHooks[name] = cc11001100_hook("jQuery.propHooks[name]", {
        get: function (elem) {
          return elem.getAttribute(name, 4);
        }
      }, "assign");
    });
  }
  if (!jQuery.support.style) {
    jQuery.attrHooks.style = cc11001100_hook("jQuery.attrHooks.style", {
      get: function (elem) {
        return elem.style.cssText || undefined;
      },
      set: function (elem, value) {
        return elem.style.cssText = cc11001100_hook("elem.style.cssText", value + "", "assign");
      }
    }, "assign");
  }
  if (!jQuery.support.optSelected) {
    jQuery.propHooks.selected = cc11001100_hook("jQuery.propHooks.selected", {
      get: function (elem) {
        var parent = cc11001100_hook("parent", elem.parentNode, "var-init");
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
        return null;
      }
    }, "assign");
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = cc11001100_hook("jQuery.propFix[this.toLowerCase()]", this, "assign");
  });
  if (!jQuery.support.enctype) {
    jQuery.propFix.enctype = cc11001100_hook("jQuery.propFix.enctype", "encoding", "assign");
  }
  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = cc11001100_hook("jQuery.valHooks[this]", {
      set: function (elem, value) {
        if (jQuery.isArray(value)) {
          return elem.checked = cc11001100_hook("elem.checked", jQuery.inArray(jQuery(elem).val(), value) >= 0, "assign");
        }
      }
    }, "assign");
    if (!jQuery.support.checkOn) {
      jQuery.valHooks[this].get = cc11001100_hook("jQuery.valHooks[this].get", function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      }, "assign");
    }
  });
  var rformElems = cc11001100_hook("rformElems", /^(?:input|select|textarea)$/i, "var-init"),
    rkeyEvent = cc11001100_hook("rkeyEvent", /^key/, "var-init"),
    rmouseEvent = cc11001100_hook("rmouseEvent", /^(?:mouse|contextmenu)|click/, "var-init"),
    rfocusMorph = cc11001100_hook("rfocusMorph", /^(?:focusinfocus|focusoutblur)$/, "var-init"),
    rtypenamespace = cc11001100_hook("rtypenamespace", /^([^.]*)(?:\.(.+)|)$/, "var-init");
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }
  jQuery.event = cc11001100_hook("jQuery.event", {
    global: {},
    add: function (elem, types, handler, data, selector) {
      var tmp,
        events,
        t,
        handleObjIn,
        special,
        eventHandle,
        handleObj,
        handlers,
        type,
        namespaces,
        origType,
        elemData = cc11001100_hook("elemData", jQuery._data(elem), "var-init");
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = cc11001100_hook("handleObjIn", handler, "assign");
        handler = cc11001100_hook("handler", handleObjIn.handler, "assign");
        selector = cc11001100_hook("selector", handleObjIn.selector, "assign");
      }
      if (!handler.guid) {
        handler.guid = cc11001100_hook("handler.guid", jQuery.guid++, "assign");
      }
      if (!(events = cc11001100_hook("events", elemData.events, "assign"))) {
        events = cc11001100_hook("events", elemData.events = cc11001100_hook("elemData.events", {}, "assign"), "assign");
      }
      if (!(eventHandle = cc11001100_hook("eventHandle", elemData.handle, "assign"))) {
        eventHandle = cc11001100_hook("eventHandle", elemData.handle = cc11001100_hook("elemData.handle", function (e) {
          return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
        }, "assign"), "assign");
        eventHandle.elem = cc11001100_hook("eventHandle.elem", elem, "assign");
      }
      types = cc11001100_hook("types", (types || "").match(core_rnotwhite) || [""], "assign");
      t = cc11001100_hook("t", types.length, "assign");
      while (t--) {
        tmp = cc11001100_hook("tmp", rtypenamespace.exec(types[t]) || [], "assign");
        type = cc11001100_hook("type", origType = cc11001100_hook("origType", tmp[1], "assign"), "assign");
        namespaces = cc11001100_hook("namespaces", (tmp[2] || "").split(".").sort(), "assign");
        if (!type) {
          continue;
        }
        special = cc11001100_hook("special", jQuery.event.special[type] || {}, "assign");
        type = cc11001100_hook("type", (selector ? special.delegateType : special.bindType) || type, "assign");
        special = cc11001100_hook("special", jQuery.event.special[type] || {}, "assign");
        handleObj = cc11001100_hook("handleObj", jQuery.extend({
          type: cc11001100_hook("type", type, "object-key-init"),
          origType: cc11001100_hook("origType", origType, "object-key-init"),
          data: cc11001100_hook("data", data, "object-key-init"),
          handler: cc11001100_hook("handler", handler, "object-key-init"),
          guid: cc11001100_hook("guid", handler.guid, "object-key-init"),
          selector: cc11001100_hook("selector", selector, "object-key-init"),
          needsContext: cc11001100_hook("needsContext", selector && jQuery.expr.match.needsContext.test(selector), "object-key-init"),
          namespace: cc11001100_hook("namespace", namespaces.join("."), "object-key-init")
        }, handleObjIn), "assign");
        if (!(handlers = cc11001100_hook("handlers", events[type], "assign"))) {
          handlers = cc11001100_hook("handlers", events[type] = cc11001100_hook("events[type]", [], "assign"), "assign");
          handlers.delegateCount = cc11001100_hook("handlers.delegateCount", 0, "assign");
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            } else if (elem.attachEvent) {
              elem.attachEvent("on" + type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = cc11001100_hook("handleObj.handler.guid", handler.guid, "assign");
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = cc11001100_hook("jQuery.event.global[type]", true, "assign");
      }
      elem = cc11001100_hook("elem", null, "assign");
    },
    remove: function (elem, types, handler, selector, mappedTypes) {
      var j,
        handleObj,
        tmp,
        origCount,
        t,
        events,
        special,
        handlers,
        type,
        namespaces,
        origType,
        elemData = cc11001100_hook("elemData", jQuery.hasData(elem) && jQuery._data(elem), "var-init");
      if (!elemData || !(events = cc11001100_hook("events", elemData.events, "assign"))) {
        return;
      }
      types = cc11001100_hook("types", (types || "").match(core_rnotwhite) || [""], "assign");
      t = cc11001100_hook("t", types.length, "assign");
      while (t--) {
        tmp = cc11001100_hook("tmp", rtypenamespace.exec(types[t]) || [], "assign");
        type = cc11001100_hook("type", origType = cc11001100_hook("origType", tmp[1], "assign"), "assign");
        namespaces = cc11001100_hook("namespaces", (tmp[2] || "").split(".").sort(), "assign");
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = cc11001100_hook("special", jQuery.event.special[type] || {}, "assign");
        type = cc11001100_hook("type", (selector ? special.delegateType : special.bindType) || type, "assign");
        handlers = cc11001100_hook("handlers", events[type] || [], "assign");
        tmp = cc11001100_hook("tmp", tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign");
        origCount = cc11001100_hook("origCount", j = cc11001100_hook("j", handlers.length, "assign"), "assign");
        while (j--) {
          handleObj = cc11001100_hook("handleObj", handlers[j], "assign");
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle;
        jQuery._removeData(elem, "events");
      }
    },
    trigger: function (event, data, elem, onlyHandlers) {
      var handle,
        ontype,
        cur,
        bubbleType,
        special,
        tmp,
        i,
        eventPath = cc11001100_hook("eventPath", [elem || document], "var-init"),
        type = cc11001100_hook("type", core_hasOwn.call(event, "type") ? event.type : event, "var-init"),
        namespaces = cc11001100_hook("namespaces", core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [], "var-init");
      cur = cc11001100_hook("cur", tmp = cc11001100_hook("tmp", elem = cc11001100_hook("elem", elem || document, "assign"), "assign"), "assign");
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") >= 0) {
        namespaces = cc11001100_hook("namespaces", type.split("."), "assign");
        type = cc11001100_hook("type", namespaces.shift(), "assign");
        namespaces.sort();
      }
      ontype = cc11001100_hook("ontype", type.indexOf(":") < 0 && "on" + type, "assign");
      event = cc11001100_hook("event", event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event), "assign");
      event.isTrigger = cc11001100_hook("event.isTrigger", onlyHandlers ? 2 : 3, "assign");
      event.namespace = cc11001100_hook("event.namespace", namespaces.join("."), "assign");
      event.namespace_re = cc11001100_hook("event.namespace_re", event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign");
      event.result = cc11001100_hook("event.result", undefined, "assign");
      if (!event.target) {
        event.target = cc11001100_hook("event.target", elem, "assign");
      }
      data = cc11001100_hook("data", data == null ? [event] : jQuery.makeArray(data, [event]), "assign");
      special = cc11001100_hook("special", jQuery.event.special[type] || {}, "assign");
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = cc11001100_hook("bubbleType", special.delegateType || type, "assign");
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cc11001100_hook("cur", cur.parentNode, "assign");
        }
        for (; cur; cur = cc11001100_hook("cur", cur.parentNode, "assign")) {
          eventPath.push(cur);
          tmp = cc11001100_hook("tmp", cur, "assign");
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = cc11001100_hook("i", 0, "assign");
      while ((cur = cc11001100_hook("cur", eventPath[i++], "assign")) && !event.isPropagationStopped()) {
        event.type = cc11001100_hook("event.type", i > 1 ? bubbleType : special.bindType || type, "assign");
        handle = cc11001100_hook("handle", (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle"), "assign");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = cc11001100_hook("handle", ontype && cur[ontype], "assign");
        if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
          event.preventDefault();
        }
      }
      event.type = cc11001100_hook("event.type", type, "assign");
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
          if (ontype && elem[type] && !jQuery.isWindow(elem)) {
            tmp = cc11001100_hook("tmp", elem[ontype], "assign");
            if (tmp) {
              elem[ontype] = cc11001100_hook("elem[ontype]", null, "assign");
            }
            jQuery.event.triggered = cc11001100_hook("jQuery.event.triggered", type, "assign");
            try {
              elem[type]();
            } catch (e) {}
            jQuery.event.triggered = cc11001100_hook("jQuery.event.triggered", undefined, "assign");
            if (tmp) {
              elem[ontype] = cc11001100_hook("elem[ontype]", tmp, "assign");
            }
          }
        }
      }
      return event.result;
    },
    dispatch: function (event) {
      event = cc11001100_hook("event", jQuery.event.fix(event), "assign");
      var i,
        ret,
        handleObj,
        matched,
        j,
        handlerQueue = cc11001100_hook("handlerQueue", [], "var-init"),
        args = cc11001100_hook("args", core_slice.call(arguments), "var-init"),
        handlers = cc11001100_hook("handlers", (jQuery._data(this, "events") || {})[event.type] || [], "var-init"),
        special = cc11001100_hook("special", jQuery.event.special[event.type] || {}, "var-init");
      args[0] = cc11001100_hook("args[0]", event, "assign");
      event.delegateTarget = cc11001100_hook("event.delegateTarget", this, "assign");
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = cc11001100_hook("handlerQueue", jQuery.event.handlers.call(this, event, handlers), "assign");
      i = cc11001100_hook("i", 0, "assign");
      while ((matched = cc11001100_hook("matched", handlerQueue[i++], "assign")) && !event.isPropagationStopped()) {
        event.currentTarget = cc11001100_hook("event.currentTarget", matched.elem, "assign");
        j = cc11001100_hook("j", 0, "assign");
        while ((handleObj = cc11001100_hook("handleObj", matched.handlers[j++], "assign")) && !event.isImmediatePropagationStopped()) {
          if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
            event.handleObj = cc11001100_hook("event.handleObj", handleObj, "assign");
            event.data = cc11001100_hook("event.data", handleObj.data, "assign");
            ret = cc11001100_hook("ret", ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), "assign");
            if (ret !== undefined) {
              if ((event.result = cc11001100_hook("event.result", ret, "assign")) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function (event, handlers) {
      var sel,
        handleObj,
        matches,
        i,
        handlerQueue = cc11001100_hook("handlerQueue", [], "var-init"),
        delegateCount = cc11001100_hook("delegateCount", handlers.delegateCount, "var-init"),
        cur = cc11001100_hook("cur", event.target, "var-init");
      if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
        for (; cur != this; cur = cc11001100_hook("cur", cur.parentNode || this, "assign")) {
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
            matches = cc11001100_hook("matches", [], "assign");
            for (i = cc11001100_hook("i", 0, "assign"); i < delegateCount; i++) {
              handleObj = cc11001100_hook("handleObj", handlers[i], "assign");
              sel = cc11001100_hook("sel", handleObj.selector + " ", "assign");
              if (matches[sel] === undefined) {
                matches[sel] = cc11001100_hook("matches[sel]", handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length, "assign");
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem: cc11001100_hook("elem", cur, "object-key-init"),
                handlers: cc11001100_hook("handlers", matches, "object-key-init")
              });
            }
          }
        }
      }
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: cc11001100_hook("elem", this, "object-key-init"),
          handlers: cc11001100_hook("handlers", handlers.slice(delegateCount), "object-key-init")
        });
      }
      return handlerQueue;
    },
    fix: function (event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i,
        prop,
        copy,
        type = cc11001100_hook("type", event.type, "var-init"),
        originalEvent = cc11001100_hook("originalEvent", event, "var-init"),
        fixHook = cc11001100_hook("fixHook", this.fixHooks[type], "var-init");
      if (!fixHook) {
        this.fixHooks[type] = cc11001100_hook("this.fixHooks[type]", fixHook = cc11001100_hook("fixHook", rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}, "assign"), "assign");
      }
      copy = cc11001100_hook("copy", fixHook.props ? this.props.concat(fixHook.props) : this.props, "assign");
      event = cc11001100_hook("event", new jQuery.Event(originalEvent), "assign");
      i = cc11001100_hook("i", copy.length, "assign");
      while (i--) {
        prop = cc11001100_hook("prop", copy[i], "assign");
        event[prop] = cc11001100_hook("event[prop]", originalEvent[prop], "assign");
      }
      if (!event.target) {
        event.target = cc11001100_hook("event.target", originalEvent.srcElement || document, "assign");
      }
      if (event.target.nodeType === 3) {
        event.target = cc11001100_hook("event.target", event.target.parentNode, "assign");
      }
      event.metaKey = cc11001100_hook("event.metaKey", !!event.metaKey, "assign");
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    props: cc11001100_hook("props", "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), "object-key-init"),
    fixHooks: {},
    keyHooks: {
      props: cc11001100_hook("props", "char charCode key keyCode".split(" "), "object-key-init"),
      filter: function (event, original) {
        if (event.which == null) {
          event.which = cc11001100_hook("event.which", original.charCode != null ? original.charCode : original.keyCode, "assign");
        }
        return event;
      }
    },
    mouseHooks: {
      props: cc11001100_hook("props", "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), "object-key-init"),
      filter: function (event, original) {
        var body,
          eventDoc,
          doc,
          button = cc11001100_hook("button", original.button, "var-init"),
          fromElement = cc11001100_hook("fromElement", original.fromElement, "var-init");
        if (event.pageX == null && original.clientX != null) {
          eventDoc = cc11001100_hook("eventDoc", event.target.ownerDocument || document, "assign");
          doc = cc11001100_hook("doc", eventDoc.documentElement, "assign");
          body = cc11001100_hook("body", eventDoc.body, "assign");
          event.pageX = cc11001100_hook("event.pageX", original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), "assign");
          event.pageY = cc11001100_hook("event.pageY", original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0), "assign");
        }
        if (!event.relatedTarget && fromElement) {
          event.relatedTarget = cc11001100_hook("event.relatedTarget", fromElement === event.target ? original.toElement : fromElement, "assign");
        }
        if (!event.which && button !== undefined) {
          event.which = cc11001100_hook("event.which", button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0, "assign");
        }
        return event;
      }
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", true, "object-key-init")
      },
      focus: {
        trigger: function () {
          if (this !== safeActiveElement() && this.focus) {
            try {
              this.focus();
              return false;
            } catch (e) {}
          }
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: cc11001100_hook("delegateType", "focusout", "object-key-init")
      },
      click: {
        trigger: function () {
          if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
            this.click();
            return false;
          }
        },
        _default: function (event) {
          return jQuery.nodeName(event.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (event) {
          if (event.result !== undefined) {
            event.originalEvent.returnValue = cc11001100_hook("event.originalEvent.returnValue", event.result, "assign");
          }
        }
      }
    },
    simulate: function (type, elem, event, bubble) {
      var e = cc11001100_hook("e", jQuery.extend(new jQuery.Event(), event, {
        type: cc11001100_hook("type", type, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", true, "object-key-init"),
        originalEvent: {}
      }), "var-init");
      if (bubble) {
        jQuery.event.trigger(e, null, elem);
      } else {
        jQuery.event.dispatch.call(elem, e);
      }
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  }, "assign");
  jQuery.removeEvent = cc11001100_hook("jQuery.removeEvent", document.removeEventListener ? function (elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle, false);
    }
  } : function (elem, type, handle) {
    var name = cc11001100_hook("name", "on" + type, "var-init");
    if (elem.detachEvent) {
      if (typeof elem[name] === core_strundefined) {
        elem[name] = cc11001100_hook("elem[name]", null, "assign");
      }
      elem.detachEvent(name, handle);
    }
  }, "assign");
  jQuery.Event = cc11001100_hook("jQuery.Event", function (src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = cc11001100_hook("this.originalEvent", src, "assign");
      this.type = cc11001100_hook("this.type", src.type, "assign");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse, "assign");
    } else {
      this.type = cc11001100_hook("this.type", src, "assign");
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = cc11001100_hook("this.timeStamp", src && src.timeStamp || jQuery.now(), "assign");
    this[jQuery.expando] = cc11001100_hook("this[jQuery.expando]", true, "assign");
  }, "assign");
  jQuery.Event.prototype = cc11001100_hook("jQuery.Event.prototype", {
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", returnFalse, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", returnFalse, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", returnFalse, "object-key-init"),
    preventDefault: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", returnTrue, "assign");
      if (!e) {
        return;
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = cc11001100_hook("e.returnValue", false, "assign");
      }
    },
    stopPropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", returnTrue, "assign");
      if (!e) {
        return;
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      e.cancelBubble = cc11001100_hook("e.cancelBubble", true, "assign");
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", returnTrue, "assign");
      this.stopPropagation();
    }
  }, "assign");
  jQuery.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init")
  }, function (orig, fix) {
    jQuery.event.special[orig] = cc11001100_hook("jQuery.event.special[orig]", {
      delegateType: cc11001100_hook("delegateType", fix, "object-key-init"),
      bindType: cc11001100_hook("bindType", fix, "object-key-init"),
      handle: function (event) {
        var ret,
          target = cc11001100_hook("target", this, "var-init"),
          related = cc11001100_hook("related", event.relatedTarget, "var-init"),
          handleObj = cc11001100_hook("handleObj", event.handleObj, "var-init");
        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = cc11001100_hook("event.type", handleObj.origType, "assign");
          ret = cc11001100_hook("ret", handleObj.handler.apply(this, arguments), "assign");
          event.type = cc11001100_hook("event.type", fix, "assign");
        }
        return ret;
      }
    }, "assign");
  });
  if (!jQuery.support.submitBubbles) {
    jQuery.event.special.submit = cc11001100_hook("jQuery.event.special.submit", {
      setup: function () {
        if (jQuery.nodeName(this, "form")) {
          return false;
        }
        jQuery.event.add(this, "click._submit keypress._submit", function (e) {
          var elem = cc11001100_hook("elem", e.target, "var-init"),
            form = cc11001100_hook("form", jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined, "var-init");
          if (form && !jQuery._data(form, "submitBubbles")) {
            jQuery.event.add(form, "submit._submit", function (event) {
              event._submit_bubble = cc11001100_hook("event._submit_bubble", true, "assign");
            });
            jQuery._data(form, "submitBubbles", true);
          }
        });
      },
      postDispatch: function (event) {
        if (event._submit_bubble) {
          delete event._submit_bubble;
          if (this.parentNode && !event.isTrigger) {
            jQuery.event.simulate("submit", this.parentNode, event, true);
          }
        }
      },
      teardown: function () {
        if (jQuery.nodeName(this, "form")) {
          return false;
        }
        jQuery.event.remove(this, "._submit");
      }
    }, "assign");
  }
  if (!jQuery.support.changeBubbles) {
    jQuery.event.special.change = cc11001100_hook("jQuery.event.special.change", {
      setup: function () {
        if (rformElems.test(this.nodeName)) {
          if (this.type === "checkbox" || this.type === "radio") {
            jQuery.event.add(this, "propertychange._change", function (event) {
              if (event.originalEvent.propertyName === "checked") {
                this._just_changed = cc11001100_hook("this._just_changed", true, "assign");
              }
            });
            jQuery.event.add(this, "click._change", function (event) {
              if (this._just_changed && !event.isTrigger) {
                this._just_changed = cc11001100_hook("this._just_changed", false, "assign");
              }
              jQuery.event.simulate("change", this, event, true);
            });
          }
          return false;
        }
        jQuery.event.add(this, "beforeactivate._change", function (e) {
          var elem = cc11001100_hook("elem", e.target, "var-init");
          if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
            jQuery.event.add(elem, "change._change", function (event) {
              if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                jQuery.event.simulate("change", this.parentNode, event, true);
              }
            });
            jQuery._data(elem, "changeBubbles", true);
          }
        });
      },
      handle: function (event) {
        var elem = cc11001100_hook("elem", event.target, "var-init");
        if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
          return event.handleObj.handler.apply(this, arguments);
        }
      },
      teardown: function () {
        jQuery.event.remove(this, "._change");
        return !rformElems.test(this.nodeName);
      }
    }, "assign");
  }
  if (!jQuery.support.focusinBubbles) {
    jQuery.each({
      focus: cc11001100_hook("focus", "focusin", "object-key-init"),
      blur: cc11001100_hook("blur", "focusout", "object-key-init")
    }, function (orig, fix) {
      var attaches = cc11001100_hook("attaches", 0, "var-init"),
        handler = function (event) {
          jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
        };
      jQuery.event.special[fix] = cc11001100_hook("jQuery.event.special[fix]", {
        setup: function () {
          if (attaches++ === 0) {
            document.addEventListener(orig, handler, true);
          }
        },
        teardown: function () {
          if (--attaches === 0) {
            document.removeEventListener(orig, handler, true);
          }
        }
      }, "assign");
    });
  }
  jQuery.fn.extend({
    on: function (types, selector, data, fn, one) {
      var type, origFn;
      if (typeof types === "object") {
        if (typeof selector !== "string") {
          data = cc11001100_hook("data", data || selector, "assign");
          selector = cc11001100_hook("selector", undefined, "assign");
        }
        for (type in types) {
          this.on(type, selector, data, types[type], one);
        }
        return this;
      }
      if (data == null && fn == null) {
        fn = cc11001100_hook("fn", selector, "assign");
        data = cc11001100_hook("data", selector = cc11001100_hook("selector", undefined, "assign"), "assign");
      } else if (fn == null) {
        if (typeof selector === "string") {
          fn = cc11001100_hook("fn", data, "assign");
          data = cc11001100_hook("data", undefined, "assign");
        } else {
          fn = cc11001100_hook("fn", data, "assign");
          data = cc11001100_hook("data", selector, "assign");
          selector = cc11001100_hook("selector", undefined, "assign");
        }
      }
      if (fn === false) {
        fn = cc11001100_hook("fn", returnFalse, "assign");
      } else if (!fn) {
        return this;
      }
      if (one === 1) {
        origFn = cc11001100_hook("origFn", fn, "assign");
        fn = cc11001100_hook("fn", function (event) {
          jQuery().off(event);
          return origFn.apply(this, arguments);
        }, "assign");
        fn.guid = cc11001100_hook("fn.guid", origFn.guid || (origFn.guid = cc11001100_hook("origFn.guid", jQuery.guid++, "assign")), "assign");
      }
      return this.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
      });
    },
    one: function (types, selector, data, fn) {
      return this.on(types, selector, data, fn, 1);
    },
    off: function (types, selector, fn) {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = cc11001100_hook("handleObj", types.handleObj, "assign");
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = cc11001100_hook("fn", selector, "assign");
        selector = cc11001100_hook("selector", undefined, "assign");
      }
      if (fn === false) {
        fn = cc11001100_hook("fn", returnFalse, "assign");
      }
      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    },
    trigger: function (type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function (type, data) {
      var elem = cc11001100_hook("elem", this[0], "var-init");
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  var isSimple = cc11001100_hook("isSimple", /^.[^:#\[\.,]*$/, "var-init"),
    rparentsprev = cc11001100_hook("rparentsprev", /^(?:parents|prev(?:Until|All))/, "var-init"),
    rneedsContext = cc11001100_hook("rneedsContext", jQuery.expr.match.needsContext, "var-init"),
    guaranteedUnique = cc11001100_hook("guaranteedUnique", {
      children: cc11001100_hook("children", true, "object-key-init"),
      contents: cc11001100_hook("contents", true, "object-key-init"),
      next: cc11001100_hook("next", true, "object-key-init"),
      prev: cc11001100_hook("prev", true, "object-key-init")
    }, "var-init");
  jQuery.fn.extend({
    find: function (selector) {
      var i,
        ret = cc11001100_hook("ret", [], "var-init"),
        self = cc11001100_hook("self", this, "var-init"),
        len = cc11001100_hook("len", self.length, "var-init");
      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = cc11001100_hook("i", 0, "assign"); i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      for (i = cc11001100_hook("i", 0, "assign"); i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }
      ret = cc11001100_hook("ret", this.pushStack(len > 1 ? jQuery.unique(ret) : ret), "assign");
      ret.selector = cc11001100_hook("ret.selector", this.selector ? this.selector + " " + selector : selector, "assign");
      return ret;
    },
    has: function (target) {
      var i,
        targets = cc11001100_hook("targets", jQuery(target, this), "var-init"),
        len = cc11001100_hook("len", targets.length, "var-init");
      return this.filter(function () {
        for (i = cc11001100_hook("i", 0, "assign"); i < len; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    not: function (selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    filter: function (selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    is: function (selector) {
      return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    },
    closest: function (selectors, context) {
      var cur,
        i = cc11001100_hook("i", 0, "var-init"),
        l = cc11001100_hook("l", this.length, "var-init"),
        ret = cc11001100_hook("ret", [], "var-init"),
        pos = cc11001100_hook("pos", rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0, "var-init");
      for (; i < l; i++) {
        for (cur = cc11001100_hook("cur", this[i], "assign"); cur && cur !== context; cur = cc11001100_hook("cur", cur.parentNode, "assign")) {
          if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
            cur = cc11001100_hook("cur", ret.push(cur), "assign");
            break;
          }
        }
      }
      return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
    },
    index: function (elem) {
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return jQuery.inArray(this[0], jQuery(elem));
      }
      return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
    },
    add: function (selector, context) {
      var set = cc11001100_hook("set", typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector), "var-init"),
        all = cc11001100_hook("all", jQuery.merge(this.get(), set), "var-init");
      return this.pushStack(jQuery.unique(all));
    },
    addBack: function (selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir) {
    cc11001100_hook("cur", cur, "function-parameter");
    cc11001100_hook("dir", dir, "function-parameter");
    do {
      cur = cc11001100_hook("cur", cur[dir], "assign");
    } while (cur && cur.nodeType !== 1);
    return cur;
  }
  jQuery.each({
    parent: function (elem) {
      var parent = cc11001100_hook("parent", elem.parentNode, "var-init");
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function (elem) {
      return jQuery.dir(elem, "parentNode");
    },
    parentsUntil: function (elem, i, until) {
      return jQuery.dir(elem, "parentNode", until);
    },
    next: function (elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function (elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function (elem) {
      return jQuery.dir(elem, "nextSibling");
    },
    prevAll: function (elem) {
      return jQuery.dir(elem, "previousSibling");
    },
    nextUntil: function (elem, i, until) {
      return jQuery.dir(elem, "nextSibling", until);
    },
    prevUntil: function (elem, i, until) {
      return jQuery.dir(elem, "previousSibling", until);
    },
    siblings: function (elem) {
      return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
    },
    children: function (elem) {
      return jQuery.sibling(elem.firstChild);
    },
    contents: function (elem) {
      return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = cc11001100_hook("jQuery.fn[name]", function (until, selector) {
      var ret = cc11001100_hook("ret", jQuery.map(this, fn, until), "var-init");
      if (name.slice(-5) !== "Until") {
        selector = cc11001100_hook("selector", until, "assign");
      }
      if (selector && typeof selector === "string") {
        ret = cc11001100_hook("ret", jQuery.filter(selector, ret), "assign");
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          ret = cc11001100_hook("ret", jQuery.unique(ret), "assign");
        }
        if (rparentsprev.test(name)) {
          ret = cc11001100_hook("ret", ret.reverse(), "assign");
        }
      }
      return this.pushStack(ret);
    }, "assign");
  });
  jQuery.extend({
    filter: function (expr, elems, not) {
      var elem = cc11001100_hook("elem", elems[0], "var-init");
      if (not) {
        expr = cc11001100_hook("expr", ":not(" + expr + ")", "assign");
      }
      return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
        return elem.nodeType === 1;
      }));
    },
    dir: function (elem, dir, until) {
      var matched = cc11001100_hook("matched", [], "var-init"),
        cur = cc11001100_hook("cur", elem[dir], "var-init");
      while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
        if (cur.nodeType === 1) {
          matched.push(cur);
        }
        cur = cc11001100_hook("cur", cur[dir], "assign");
      }
      return matched;
    },
    sibling: function (n, elem) {
      var r = cc11001100_hook("r", [], "var-init");
      for (; n; n = cc11001100_hook("n", n.nextSibling, "assign")) {
        if (n.nodeType === 1 && n !== elem) {
          r.push(n);
        }
      }
      return r;
    }
  });
  function winnow(elements, qualifier, not) {
    cc11001100_hook("elements", elements, "function-parameter");
    cc11001100_hook("qualifier", qualifier, "function-parameter");
    cc11001100_hook("not", not, "function-parameter");
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    }
    if (typeof qualifier === "string") {
      if (isSimple.test(qualifier)) {
        return jQuery.filter(qualifier, elements, not);
      }
      qualifier = cc11001100_hook("qualifier", jQuery.filter(qualifier, elements), "assign");
    }
    return jQuery.grep(elements, function (elem) {
      return jQuery.inArray(elem, qualifier) >= 0 !== not;
    });
  }
  function createSafeFragment(document) {
    cc11001100_hook("document", document, "function-parameter");
    var list = cc11001100_hook("list", nodeNames.split("|"), "var-init"),
      safeFrag = cc11001100_hook("safeFrag", document.createDocumentFragment(), "var-init");
    if (safeFrag.createElement) {
      while (list.length) {
        safeFrag.createElement(list.pop());
      }
    }
    return safeFrag;
  }
  var nodeNames = cc11001100_hook("nodeNames", "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", "var-init"),
    rinlinejQuery = cc11001100_hook("rinlinejQuery", / jQuery\d+="(?:null|\d+)"/g, "var-init"),
    rnoshimcache = cc11001100_hook("rnoshimcache", new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), "var-init"),
    rleadingWhitespace = cc11001100_hook("rleadingWhitespace", /^\s+/, "var-init"),
    rxhtmlTag = cc11001100_hook("rxhtmlTag", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "var-init"),
    rtagName = cc11001100_hook("rtagName", /<([\w:]+)/, "var-init"),
    rtbody = cc11001100_hook("rtbody", /<tbody/i, "var-init"),
    rhtml = cc11001100_hook("rhtml", /<|&#?\w+;/, "var-init"),
    rnoInnerhtml = cc11001100_hook("rnoInnerhtml", /<(?:script|style|link)/i, "var-init"),
    manipulation_rcheckableType = cc11001100_hook("manipulation_rcheckableType", /^(?:checkbox|radio)$/i, "var-init"),
    rchecked = cc11001100_hook("rchecked", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
    rscriptType = cc11001100_hook("rscriptType", /^$|\/(?:java|ecma)script/i, "var-init"),
    rscriptTypeMasked = cc11001100_hook("rscriptTypeMasked", /^true\/(.*)/, "var-init"),
    rcleanScript = cc11001100_hook("rcleanScript", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init"),
    wrapMap = cc11001100_hook("wrapMap", {
      option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
      legend: cc11001100_hook("legend", [1, "<fieldset>", "</fieldset>"], "object-key-init"),
      area: cc11001100_hook("area", [1, "<map>", "</map>"], "object-key-init"),
      param: cc11001100_hook("param", [1, "<object>", "</object>"], "object-key-init"),
      thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
      tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
      col: cc11001100_hook("col", [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], "object-key-init"),
      td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
      _default: cc11001100_hook("_default", jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"], "object-key-init")
    }, "var-init"),
    safeFragment = cc11001100_hook("safeFragment", createSafeFragment(document), "var-init"),
    fragmentDiv = cc11001100_hook("fragmentDiv", safeFragment.appendChild(document.createElement("div")), "var-init");
  wrapMap.optgroup = cc11001100_hook("wrapMap.optgroup", wrapMap.option, "assign");
  wrapMap.tbody = cc11001100_hook("wrapMap.tbody", wrapMap.tfoot = cc11001100_hook("wrapMap.tfoot", wrapMap.colgroup = cc11001100_hook("wrapMap.colgroup", wrapMap.caption = cc11001100_hook("wrapMap.caption", wrapMap.thead, "assign"), "assign"), "assign"), "assign");
  wrapMap.th = cc11001100_hook("wrapMap.th", wrapMap.td, "assign");
  jQuery.fn.extend({
    text: function (value) {
      return jQuery.access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
      }, null, value, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = cc11001100_hook("target", manipulationTarget(this, elem), "var-init");
          target.appendChild(elem);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = cc11001100_hook("target", manipulationTarget(this, elem), "var-init");
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function () {
      return this.domManip(arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    remove: function (selector, keepData) {
      var elem,
        elems = cc11001100_hook("elems", selector ? jQuery.filter(selector, this) : this, "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      for (; (elem = cc11001100_hook("elem", elems[i], "assign")) != null; i++) {
        if (!keepData && elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
          if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
            setGlobalEval(getAll(elem, "script"));
          }
          elem.parentNode.removeChild(elem);
        }
      }
      return this;
    },
    empty: function () {
      var elem,
        i = cc11001100_hook("i", 0, "var-init");
      for (; (elem = cc11001100_hook("elem", this[i], "assign")) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
        }
        while (elem.firstChild) {
          elem.removeChild(elem.firstChild);
        }
        if (elem.options && jQuery.nodeName(elem, "select")) {
          elem.options.length = cc11001100_hook("elem.options.length", 0, "assign");
        }
      }
      return this;
    },
    clone: function (dataAndEvents, deepDataAndEvents) {
      dataAndEvents = cc11001100_hook("dataAndEvents", dataAndEvents == null ? false : dataAndEvents, "assign");
      deepDataAndEvents = cc11001100_hook("deepDataAndEvents", deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents, "assign");
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function (value) {
      return jQuery.access(this, function (value) {
        var elem = cc11001100_hook("elem", this[0] || {}, "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          l = cc11001100_hook("l", this.length, "var-init");
        if (value === undefined) {
          return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
        }
        if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = cc11001100_hook("value", value.replace(rxhtmlTag, "<$1></$2>"), "assign");
          try {
            for (; i < l; i++) {
              elem = cc11001100_hook("elem", this[i] || {}, "assign");
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = cc11001100_hook("elem.innerHTML", value, "assign");
              }
            }
            elem = cc11001100_hook("elem", 0, "assign");
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function () {
      var args = cc11001100_hook("args", jQuery.map(this, function (elem) {
          return [elem.nextSibling, elem.parentNode];
        }), "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      this.domManip(arguments, function (elem) {
        var next = cc11001100_hook("next", args[i++], "var-init"),
          parent = cc11001100_hook("parent", args[i++], "var-init");
        if (parent) {
          if (next && next.parentNode !== parent) {
            next = cc11001100_hook("next", this.nextSibling, "assign");
          }
          jQuery(this).remove();
          parent.insertBefore(elem, next);
        }
      }, true);
      return i ? this : this.remove();
    },
    detach: function (selector) {
      return this.remove(selector, true);
    },
    domManip: function (args, callback, allowIntersection) {
      args = cc11001100_hook("args", core_concat.apply([], args), "assign");
      var first,
        node,
        hasScripts,
        scripts,
        doc,
        fragment,
        i = cc11001100_hook("i", 0, "var-init"),
        l = cc11001100_hook("l", this.length, "var-init"),
        set = cc11001100_hook("set", this, "var-init"),
        iNoClone = cc11001100_hook("iNoClone", l - 1, "var-init"),
        value = cc11001100_hook("value", args[0], "var-init"),
        isFunction = cc11001100_hook("isFunction", jQuery.isFunction(value), "var-init");
      if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
        return this.each(function (index) {
          var self = cc11001100_hook("self", set.eq(index), "var-init");
          if (isFunction) {
            args[0] = cc11001100_hook("args[0]", value.call(this, index, self.html()), "assign");
          }
          self.domManip(args, callback, allowIntersection);
        });
      }
      if (l) {
        fragment = cc11001100_hook("fragment", jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this), "assign");
        first = cc11001100_hook("first", fragment.firstChild, "assign");
        if (fragment.childNodes.length === 1) {
          fragment = cc11001100_hook("fragment", first, "assign");
        }
        if (first) {
          scripts = cc11001100_hook("scripts", jQuery.map(getAll(fragment, "script"), disableScript), "assign");
          hasScripts = cc11001100_hook("hasScripts", scripts.length, "assign");
          for (; i < l; i++) {
            node = cc11001100_hook("node", fragment, "assign");
            if (i !== iNoClone) {
              node = cc11001100_hook("node", jQuery.clone(node, true, true), "assign");
              if (hasScripts) {
                jQuery.merge(scripts, getAll(node, "script"));
              }
            }
            callback.call(this[i], node, i);
          }
          if (hasScripts) {
            doc = cc11001100_hook("doc", scripts[scripts.length - 1].ownerDocument, "assign");
            jQuery.map(scripts, restoreScript);
            for (i = cc11001100_hook("i", 0, "assign"); i < hasScripts; i++) {
              node = cc11001100_hook("node", scripts[i], "assign");
              if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                if (node.src) {
                  jQuery._evalUrl(node.src);
                } else {
                  jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                }
              }
            }
          }
          fragment = cc11001100_hook("fragment", first = cc11001100_hook("first", null, "assign"), "assign");
        }
      }
      return this;
    }
  });
  function manipulationTarget(elem, content) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
  }
  function disableScript(elem) {
    cc11001100_hook("elem", elem, "function-parameter");
    elem.type = cc11001100_hook("elem.type", (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type, "assign");
    return elem;
  }
  function restoreScript(elem) {
    cc11001100_hook("elem", elem, "function-parameter");
    var match = cc11001100_hook("match", rscriptTypeMasked.exec(elem.type), "var-init");
    if (match) {
      elem.type = cc11001100_hook("elem.type", match[1], "assign");
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function setGlobalEval(elems, refElements) {
    cc11001100_hook("elems", elems, "function-parameter");
    cc11001100_hook("refElements", refElements, "function-parameter");
    var elem,
      i = cc11001100_hook("i", 0, "var-init");
    for (; (elem = cc11001100_hook("elem", elems[i], "assign")) != null; i++) {
      jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
    }
  }
  function cloneCopyEvent(src, dest) {
    cc11001100_hook("src", src, "function-parameter");
    cc11001100_hook("dest", dest, "function-parameter");
    if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
      return;
    }
    var type,
      i,
      l,
      oldData = cc11001100_hook("oldData", jQuery._data(src), "var-init"),
      curData = cc11001100_hook("curData", jQuery._data(dest, oldData), "var-init"),
      events = cc11001100_hook("events", oldData.events, "var-init");
    if (events) {
      delete curData.handle;
      curData.events = cc11001100_hook("curData.events", {}, "assign");
      for (type in events) {
        for (i = cc11001100_hook("i", 0, "assign"), l = cc11001100_hook("l", events[type].length, "assign"); i < l; i++) {
          jQuery.event.add(dest, type, events[type][i]);
        }
      }
    }
    if (curData.data) {
      curData.data = cc11001100_hook("curData.data", jQuery.extend({}, curData.data), "assign");
    }
  }
  function fixCloneNodeIssues(src, dest) {
    cc11001100_hook("src", src, "function-parameter");
    cc11001100_hook("dest", dest, "function-parameter");
    var nodeName, e, data;
    if (dest.nodeType !== 1) {
      return;
    }
    nodeName = cc11001100_hook("nodeName", dest.nodeName.toLowerCase(), "assign");
    if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
      data = cc11001100_hook("data", jQuery._data(dest), "assign");
      for (e in data.events) {
        jQuery.removeEvent(dest, e, data.handle);
      }
      dest.removeAttribute(jQuery.expando);
    }
    if (nodeName === "script" && dest.text !== src.text) {
      disableScript(dest).text = cc11001100_hook("disableScript(dest).text", src.text, "assign");
      restoreScript(dest);
    } else if (nodeName === "object") {
      if (dest.parentNode) {
        dest.outerHTML = cc11001100_hook("dest.outerHTML", src.outerHTML, "assign");
      }
      if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
        dest.innerHTML = cc11001100_hook("dest.innerHTML", src.innerHTML, "assign");
      }
    } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
      dest.defaultChecked = cc11001100_hook("dest.defaultChecked", dest.checked = cc11001100_hook("dest.checked", src.checked, "assign"), "assign");
      if (dest.value !== src.value) {
        dest.value = cc11001100_hook("dest.value", src.value, "assign");
      }
    } else if (nodeName === "option") {
      dest.defaultSelected = cc11001100_hook("dest.defaultSelected", dest.selected = cc11001100_hook("dest.selected", src.defaultSelected, "assign"), "assign");
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = cc11001100_hook("dest.defaultValue", src.defaultValue, "assign");
    }
  }
  jQuery.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (name, original) {
    jQuery.fn[name] = cc11001100_hook("jQuery.fn[name]", function (selector) {
      var elems,
        i = cc11001100_hook("i", 0, "var-init"),
        ret = cc11001100_hook("ret", [], "var-init"),
        insert = cc11001100_hook("insert", jQuery(selector), "var-init"),
        last = cc11001100_hook("last", insert.length - 1, "var-init");
      for (; i <= last; i++) {
        elems = cc11001100_hook("elems", i === last ? this : this.clone(true), "assign");
        jQuery(insert[i])[original](elems);
        core_push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    }, "assign");
  });
  function getAll(context, tag) {
    cc11001100_hook("context", context, "function-parameter");
    cc11001100_hook("tag", tag, "function-parameter");
    var elems,
      elem,
      i = cc11001100_hook("i", 0, "var-init"),
      found = cc11001100_hook("found", typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined, "var-init");
    if (!found) {
      for (found = cc11001100_hook("found", [], "assign"), elems = cc11001100_hook("elems", context.childNodes || context, "assign"); (elem = cc11001100_hook("elem", elems[i], "assign")) != null; i++) {
        if (!tag || jQuery.nodeName(elem, tag)) {
          found.push(elem);
        } else {
          jQuery.merge(found, getAll(elem, tag));
        }
      }
    }
    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
  }
  function fixDefaultChecked(elem) {
    cc11001100_hook("elem", elem, "function-parameter");
    if (manipulation_rcheckableType.test(elem.type)) {
      elem.defaultChecked = cc11001100_hook("elem.defaultChecked", elem.checked, "assign");
    }
  }
  jQuery.extend({
    clone: function (elem, dataAndEvents, deepDataAndEvents) {
      var destElements,
        node,
        clone,
        i,
        srcElements,
        inPage = cc11001100_hook("inPage", jQuery.contains(elem.ownerDocument, elem), "var-init");
      if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
        clone = cc11001100_hook("clone", elem.cloneNode(true), "assign");
      } else {
        fragmentDiv.innerHTML = cc11001100_hook("fragmentDiv.innerHTML", elem.outerHTML, "assign");
        fragmentDiv.removeChild(clone = cc11001100_hook("clone", fragmentDiv.firstChild, "assign"));
      }
      if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = cc11001100_hook("destElements", getAll(clone), "assign");
        srcElements = cc11001100_hook("srcElements", getAll(elem), "assign");
        for (i = cc11001100_hook("i", 0, "assign"); (node = cc11001100_hook("node", srcElements[i], "assign")) != null; ++i) {
          if (destElements[i]) {
            fixCloneNodeIssues(node, destElements[i]);
          }
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = cc11001100_hook("srcElements", srcElements || getAll(elem), "assign");
          destElements = cc11001100_hook("destElements", destElements || getAll(clone), "assign");
          for (i = cc11001100_hook("i", 0, "assign"); (node = cc11001100_hook("node", srcElements[i], "assign")) != null; i++) {
            cloneCopyEvent(node, destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = cc11001100_hook("destElements", getAll(clone, "script"), "assign");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      destElements = cc11001100_hook("destElements", srcElements = cc11001100_hook("srcElements", node = cc11001100_hook("node", null, "assign"), "assign"), "assign");
      return clone;
    },
    buildFragment: function (elems, context, scripts, selection) {
      var j,
        elem,
        contains,
        tmp,
        tag,
        tbody,
        wrap,
        l = cc11001100_hook("l", elems.length, "var-init"),
        safe = cc11001100_hook("safe", createSafeFragment(context), "var-init"),
        nodes = cc11001100_hook("nodes", [], "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      for (; i < l; i++) {
        elem = cc11001100_hook("elem", elems[i], "assign");
        if (elem || elem === 0) {
          if (jQuery.type(elem) === "object") {
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem));
          } else {
            tmp = cc11001100_hook("tmp", tmp || safe.appendChild(context.createElement("div")), "assign");
            tag = cc11001100_hook("tag", (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), "assign");
            wrap = cc11001100_hook("wrap", wrapMap[tag] || wrapMap._default, "assign");
            tmp.innerHTML = cc11001100_hook("tmp.innerHTML", wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2], "assign");
            j = cc11001100_hook("j", wrap[0], "assign");
            while (j--) {
              tmp = cc11001100_hook("tmp", tmp.lastChild, "assign");
            }
            if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
              nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
            }
            if (!jQuery.support.tbody) {
              elem = cc11001100_hook("elem", tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0, "assign");
              j = cc11001100_hook("j", elem && elem.childNodes.length, "assign");
              while (j--) {
                if (jQuery.nodeName(tbody = cc11001100_hook("tbody", elem.childNodes[j], "assign"), "tbody") && !tbody.childNodes.length) {
                  elem.removeChild(tbody);
                }
              }
            }
            jQuery.merge(nodes, tmp.childNodes);
            tmp.textContent = cc11001100_hook("tmp.textContent", "", "assign");
            while (tmp.firstChild) {
              tmp.removeChild(tmp.firstChild);
            }
            tmp = cc11001100_hook("tmp", safe.lastChild, "assign");
          }
        }
      }
      if (tmp) {
        safe.removeChild(tmp);
      }
      if (!jQuery.support.appendChecked) {
        jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
      }
      i = cc11001100_hook("i", 0, "assign");
      while (elem = cc11001100_hook("elem", nodes[i++], "assign")) {
        if (selection && jQuery.inArray(elem, selection) !== -1) {
          continue;
        }
        contains = cc11001100_hook("contains", jQuery.contains(elem.ownerDocument, elem), "assign");
        tmp = cc11001100_hook("tmp", getAll(safe.appendChild(elem), "script"), "assign");
        if (contains) {
          setGlobalEval(tmp);
        }
        if (scripts) {
          j = cc11001100_hook("j", 0, "assign");
          while (elem = cc11001100_hook("elem", tmp[j++], "assign")) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }
      tmp = cc11001100_hook("tmp", null, "assign");
      return safe;
    },
    cleanData: function (elems, acceptData) {
      var elem,
        type,
        id,
        data,
        i = cc11001100_hook("i", 0, "var-init"),
        internalKey = cc11001100_hook("internalKey", jQuery.expando, "var-init"),
        cache = cc11001100_hook("cache", jQuery.cache, "var-init"),
        deleteExpando = cc11001100_hook("deleteExpando", jQuery.support.deleteExpando, "var-init"),
        special = cc11001100_hook("special", jQuery.event.special, "var-init");
      for (; (elem = cc11001100_hook("elem", elems[i], "assign")) != null; i++) {
        if (acceptData || jQuery.acceptData(elem)) {
          id = cc11001100_hook("id", elem[internalKey], "assign");
          data = cc11001100_hook("data", id && cache[id], "assign");
          if (data) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            if (cache[id]) {
              delete cache[id];
              if (deleteExpando) {
                delete elem[internalKey];
              } else if (typeof elem.removeAttribute !== core_strundefined) {
                elem.removeAttribute(internalKey);
              } else {
                elem[internalKey] = cc11001100_hook("elem[internalKey]", null, "assign");
              }
              core_deletedIds.push(id);
            }
          }
        }
      }
    },
    _evalUrl: function (url) {
      return jQuery.ajax({
        url: cc11001100_hook("url", url, "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        dataType: cc11001100_hook("dataType", "script", "object-key-init"),
        async: cc11001100_hook("async", false, "object-key-init"),
        global: cc11001100_hook("global", false, "object-key-init"),
        "throws": cc11001100_hook("throws", true, "object-key-init")
      });
    }
  });
  jQuery.fn.extend({
    wrapAll: function (html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }
      if (this[0]) {
        var wrap = cc11001100_hook("wrap", jQuery(html, this[0].ownerDocument).eq(0).clone(true), "var-init");
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function () {
          var elem = cc11001100_hook("elem", this, "var-init");
          while (elem.firstChild && elem.firstChild.nodeType === 1) {
            elem = cc11001100_hook("elem", elem.firstChild, "assign");
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function () {
        var self = cc11001100_hook("self", jQuery(this), "var-init"),
          contents = cc11001100_hook("contents", self.contents(), "var-init");
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function (html) {
      var isFunction = cc11001100_hook("isFunction", jQuery.isFunction(html), "var-init");
      return this.each(function (i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  var iframe,
    getStyles,
    curCSS,
    ralpha = cc11001100_hook("ralpha", /alpha\([^)]*\)/i, "var-init"),
    ropacity = cc11001100_hook("ropacity", /opacity\s*=\s*([^)]*)/, "var-init"),
    rposition = cc11001100_hook("rposition", /^(top|right|bottom|left)$/, "var-init"),
    rdisplayswap = cc11001100_hook("rdisplayswap", /^(none|table(?!-c[ea]).+)/, "var-init"),
    rmargin = cc11001100_hook("rmargin", /^margin/, "var-init"),
    rnumsplit = cc11001100_hook("rnumsplit", new RegExp("^(" + core_pnum + ")(.*)$", "i"), "var-init"),
    rnumnonpx = cc11001100_hook("rnumnonpx", new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), "var-init"),
    rrelNum = cc11001100_hook("rrelNum", new RegExp("^([+-])=(" + core_pnum + ")", "i"), "var-init"),
    elemdisplay = cc11001100_hook("elemdisplay", {
      BODY: cc11001100_hook("BODY", "block", "object-key-init")
    }, "var-init"),
    cssShow = cc11001100_hook("cssShow", {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init")
    }, "var-init"),
    cssNormalTransform = cc11001100_hook("cssNormalTransform", {
      letterSpacing: cc11001100_hook("letterSpacing", 0, "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", 400, "object-key-init")
    }, "var-init"),
    cssExpand = cc11001100_hook("cssExpand", ["Top", "Right", "Bottom", "Left"], "var-init"),
    cssPrefixes = cc11001100_hook("cssPrefixes", ["Webkit", "O", "Moz", "ms"], "var-init");
  function vendorPropName(style, name) {
    cc11001100_hook("style", style, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    if (name in style) {
      return name;
    }
    var capName = cc11001100_hook("capName", name.charAt(0).toUpperCase() + name.slice(1), "var-init"),
      origName = cc11001100_hook("origName", name, "var-init"),
      i = cc11001100_hook("i", cssPrefixes.length, "var-init");
    while (i--) {
      name = cc11001100_hook("name", cssPrefixes[i] + capName, "assign");
      if (name in style) {
        return name;
      }
    }
    return origName;
  }
  function isHidden(elem, el) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("el", el, "function-parameter");
    elem = cc11001100_hook("elem", el || elem, "assign");
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  }
  function showHide(elements, show) {
    cc11001100_hook("elements", elements, "function-parameter");
    cc11001100_hook("show", show, "function-parameter");
    var display,
      elem,
      hidden,
      values = cc11001100_hook("values", [], "var-init"),
      index = cc11001100_hook("index", 0, "var-init"),
      length = cc11001100_hook("length", elements.length, "var-init");
    for (; index < length; index++) {
      elem = cc11001100_hook("elem", elements[index], "assign");
      if (!elem.style) {
        continue;
      }
      values[index] = cc11001100_hook("values[index]", jQuery._data(elem, "olddisplay"), "assign");
      display = cc11001100_hook("display", elem.style.display, "assign");
      if (show) {
        if (!values[index] && display === "none") {
          elem.style.display = cc11001100_hook("elem.style.display", "", "assign");
        }
        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = cc11001100_hook("values[index]", jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName)), "assign");
        }
      } else {
        if (!values[index]) {
          hidden = cc11001100_hook("hidden", isHidden(elem), "assign");
          if (display && display !== "none" || !hidden) {
            jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
          }
        }
      }
    }
    for (index = cc11001100_hook("index", 0, "assign"); index < length; index++) {
      elem = cc11001100_hook("elem", elements[index], "assign");
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = cc11001100_hook("elem.style.display", show ? values[index] || "" : "none", "assign");
      }
    }
    return elements;
  }
  jQuery.fn.extend({
    css: function (name, value) {
      return jQuery.access(this, function (elem, name, value) {
        var len,
          styles,
          map = cc11001100_hook("map", {}, "var-init"),
          i = cc11001100_hook("i", 0, "var-init");
        if (jQuery.isArray(name)) {
          styles = cc11001100_hook("styles", getStyles(elem), "assign");
          len = cc11001100_hook("len", name.length, "assign");
          for (; i < len; i++) {
            map[name[i]] = cc11001100_hook("map[name[i]]", jQuery.css(elem, name[i], false, styles), "assign");
          }
          return map;
        }
        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function () {
      return showHide(this, true);
    },
    hide: function () {
      return showHide(this);
    },
    toggle: function (state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function () {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  jQuery.extend({
    cssHooks: {
      opacity: {
        get: function (elem, computed) {
          if (computed) {
            var ret = cc11001100_hook("ret", curCSS(elem, "opacity"), "var-init");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    cssNumber: {
      columnCount: cc11001100_hook("columnCount", true, "object-key-init"),
      fillOpacity: cc11001100_hook("fillOpacity", true, "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", true, "object-key-init"),
      lineHeight: cc11001100_hook("lineHeight", true, "object-key-init"),
      opacity: cc11001100_hook("opacity", true, "object-key-init"),
      order: cc11001100_hook("order", true, "object-key-init"),
      orphans: cc11001100_hook("orphans", true, "object-key-init"),
      widows: cc11001100_hook("widows", true, "object-key-init"),
      zIndex: cc11001100_hook("zIndex", true, "object-key-init"),
      zoom: cc11001100_hook("zoom", true, "object-key-init")
    },
    cssProps: {
      "float": cc11001100_hook("float", jQuery.support.cssFloat ? "cssFloat" : "styleFloat", "object-key-init")
    },
    style: function (elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret,
        type,
        hooks,
        origName = cc11001100_hook("origName", jQuery.camelCase(name), "var-init"),
        style = cc11001100_hook("style", elem.style, "var-init");
      name = cc11001100_hook("name", jQuery.cssProps[origName] || (jQuery.cssProps[origName] = cc11001100_hook("jQuery.cssProps[origName]", vendorPropName(style, origName), "assign")), "assign");
      hooks = cc11001100_hook("hooks", jQuery.cssHooks[name] || jQuery.cssHooks[origName], "assign");
      if (value !== undefined) {
        type = cc11001100_hook("type", typeof value, "assign");
        if (type === "string" && (ret = cc11001100_hook("ret", rrelNum.exec(value), "assign"))) {
          value = cc11001100_hook("value", (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)), "assign");
          type = cc11001100_hook("type", "number", "assign");
        }
        if (value == null || type === "number" && isNaN(value)) {
          return;
        }
        if (type === "number" && !jQuery.cssNumber[origName]) {
          value += cc11001100_hook("value", "px", "assign");
        }
        if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = cc11001100_hook("style[name]", "inherit", "assign");
        }
        if (!hooks || !("set" in hooks) || (value = cc11001100_hook("value", hooks.set(elem, value, extra), "assign")) !== undefined) {
          try {
            style[name] = cc11001100_hook("style[name]", value, "assign");
          } catch (e) {}
        }
      } else {
        if (hooks && "get" in hooks && (ret = cc11001100_hook("ret", hooks.get(elem, false, extra), "assign")) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function (elem, name, extra, styles) {
      var num,
        val,
        hooks,
        origName = cc11001100_hook("origName", jQuery.camelCase(name), "var-init");
      name = cc11001100_hook("name", jQuery.cssProps[origName] || (jQuery.cssProps[origName] = cc11001100_hook("jQuery.cssProps[origName]", vendorPropName(elem.style, origName), "assign")), "assign");
      hooks = cc11001100_hook("hooks", jQuery.cssHooks[name] || jQuery.cssHooks[origName], "assign");
      if (hooks && "get" in hooks) {
        val = cc11001100_hook("val", hooks.get(elem, true, extra), "assign");
      }
      if (val === undefined) {
        val = cc11001100_hook("val", curCSS(elem, name, styles), "assign");
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cc11001100_hook("val", cssNormalTransform[name], "assign");
      }
      if (extra === "" || extra) {
        num = cc11001100_hook("num", parseFloat(val), "assign");
        return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
      }
      return val;
    }
  });
  if (window.getComputedStyle) {
    getStyles = cc11001100_hook("getStyles", function (elem) {
      return window.getComputedStyle(elem, null);
    }, "assign");
    curCSS = cc11001100_hook("curCSS", function (elem, name, _computed) {
      var width,
        minWidth,
        maxWidth,
        computed = cc11001100_hook("computed", _computed || getStyles(elem), "var-init"),
        ret = cc11001100_hook("ret", computed ? computed.getPropertyValue(name) || computed[name] : undefined, "var-init"),
        style = cc11001100_hook("style", elem.style, "var-init");
      if (computed) {
        if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
          ret = cc11001100_hook("ret", jQuery.style(elem, name), "assign");
        }
        if (rnumnonpx.test(ret) && rmargin.test(name)) {
          width = cc11001100_hook("width", style.width, "assign");
          minWidth = cc11001100_hook("minWidth", style.minWidth, "assign");
          maxWidth = cc11001100_hook("maxWidth", style.maxWidth, "assign");
          style.minWidth = cc11001100_hook("style.minWidth", style.maxWidth = cc11001100_hook("style.maxWidth", style.width = cc11001100_hook("style.width", ret, "assign"), "assign"), "assign");
          ret = cc11001100_hook("ret", computed.width, "assign");
          style.width = cc11001100_hook("style.width", width, "assign");
          style.minWidth = cc11001100_hook("style.minWidth", minWidth, "assign");
          style.maxWidth = cc11001100_hook("style.maxWidth", maxWidth, "assign");
        }
      }
      return ret;
    }, "assign");
  } else if (document.documentElement.currentStyle) {
    getStyles = cc11001100_hook("getStyles", function (elem) {
      return elem.currentStyle;
    }, "assign");
    curCSS = cc11001100_hook("curCSS", function (elem, name, _computed) {
      var left,
        rs,
        rsLeft,
        computed = cc11001100_hook("computed", _computed || getStyles(elem), "var-init"),
        ret = cc11001100_hook("ret", computed ? computed[name] : undefined, "var-init"),
        style = cc11001100_hook("style", elem.style, "var-init");
      if (ret == null && style && style[name]) {
        ret = cc11001100_hook("ret", style[name], "assign");
      }
      if (rnumnonpx.test(ret) && !rposition.test(name)) {
        left = cc11001100_hook("left", style.left, "assign");
        rs = cc11001100_hook("rs", elem.runtimeStyle, "assign");
        rsLeft = cc11001100_hook("rsLeft", rs && rs.left, "assign");
        if (rsLeft) {
          rs.left = cc11001100_hook("rs.left", elem.currentStyle.left, "assign");
        }
        style.left = cc11001100_hook("style.left", name === "fontSize" ? "1em" : ret, "assign");
        ret = cc11001100_hook("ret", style.pixelLeft + "px", "assign");
        style.left = cc11001100_hook("style.left", left, "assign");
        if (rsLeft) {
          rs.left = cc11001100_hook("rs.left", rsLeft, "assign");
        }
      }
      return ret === "" ? "auto" : ret;
    }, "assign");
  }
  function setPositiveNumber(elem, value, subtract) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("value", value, "function-parameter");
    cc11001100_hook("subtract", subtract, "function-parameter");
    var matches = cc11001100_hook("matches", rnumsplit.exec(value), "var-init");
    return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("extra", extra, "function-parameter");
    cc11001100_hook("isBorderBox", isBorderBox, "function-parameter");
    cc11001100_hook("styles", styles, "function-parameter");
    var i = cc11001100_hook("i", extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, "var-init"),
      val = cc11001100_hook("val", 0, "var-init");
    for (; i < 4; i += cc11001100_hook("i", 2, "assign")) {
      if (extra === "margin") {
        val += cc11001100_hook("val", jQuery.css(elem, extra + cssExpand[i], true, styles), "assign");
      }
      if (isBorderBox) {
        if (extra === "content") {
          val -= cc11001100_hook("val", jQuery.css(elem, "padding" + cssExpand[i], true, styles), "assign");
        }
        if (extra !== "margin") {
          val -= cc11001100_hook("val", jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles), "assign");
        }
      } else {
        val += cc11001100_hook("val", jQuery.css(elem, "padding" + cssExpand[i], true, styles), "assign");
        if (extra !== "padding") {
          val += cc11001100_hook("val", jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles), "assign");
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("extra", extra, "function-parameter");
    var valueIsBorderBox = cc11001100_hook("valueIsBorderBox", true, "var-init"),
      val = cc11001100_hook("val", name === "width" ? elem.offsetWidth : elem.offsetHeight, "var-init"),
      styles = cc11001100_hook("styles", getStyles(elem), "var-init"),
      isBorderBox = cc11001100_hook("isBorderBox", jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", "var-init");
    if (val <= 0 || val == null) {
      val = cc11001100_hook("val", curCSS(elem, name, styles), "assign");
      if (val < 0 || val == null) {
        val = cc11001100_hook("val", elem.style[name], "assign");
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = cc11001100_hook("valueIsBorderBox", isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]), "assign");
      val = cc11001100_hook("val", parseFloat(val) || 0, "assign");
    }
    return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
  }
  function css_defaultDisplay(nodeName) {
    cc11001100_hook("nodeName", nodeName, "function-parameter");
    var doc = cc11001100_hook("doc", document, "var-init"),
      display = cc11001100_hook("display", elemdisplay[nodeName], "var-init");
    if (!display) {
      display = cc11001100_hook("display", actualDisplay(nodeName, doc), "assign");
      if (display === "none" || !display) {
        iframe = cc11001100_hook("iframe", (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement), "assign");
        doc = cc11001100_hook("doc", (iframe[0].contentWindow || iframe[0].contentDocument).document, "assign");
        doc.write("<!doctype html><html><body>");
        doc.close();
        display = cc11001100_hook("display", actualDisplay(nodeName, doc), "assign");
        iframe.detach();
      }
      elemdisplay[nodeName] = cc11001100_hook("elemdisplay[nodeName]", display, "assign");
    }
    return display;
  }
  function actualDisplay(name, doc) {
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("doc", doc, "function-parameter");
    var elem = cc11001100_hook("elem", jQuery(doc.createElement(name)).appendTo(doc.body), "var-init"),
      display = cc11001100_hook("display", jQuery.css(elem[0], "display"), "var-init");
    elem.remove();
    return display;
  }
  jQuery.each(["height", "width"], function (i, name) {
    jQuery.cssHooks[name] = cc11001100_hook("jQuery.cssHooks[name]", {
      get: function (elem, computed, extra) {
        if (computed) {
          return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function (elem, value, extra) {
        var styles = cc11001100_hook("styles", extra && getStyles(elem), "var-init");
        return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
      }
    }, "assign");
  });
  if (!jQuery.support.opacity) {
    jQuery.cssHooks.opacity = cc11001100_hook("jQuery.cssHooks.opacity", {
      get: function (elem, computed) {
        return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
      },
      set: function (elem, value) {
        var style = cc11001100_hook("style", elem.style, "var-init"),
          currentStyle = cc11001100_hook("currentStyle", elem.currentStyle, "var-init"),
          opacity = cc11001100_hook("opacity", jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", "var-init"),
          filter = cc11001100_hook("filter", currentStyle && currentStyle.filter || style.filter || "", "var-init");
        style.zoom = cc11001100_hook("style.zoom", 1, "assign");
        if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
          style.removeAttribute("filter");
          if (value === "" || currentStyle && !currentStyle.filter) {
            return;
          }
        }
        style.filter = cc11001100_hook("style.filter", ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity, "assign");
      }
    }, "assign");
  }
  jQuery(function () {
    if (!jQuery.support.reliableMarginRight) {
      jQuery.cssHooks.marginRight = cc11001100_hook("jQuery.cssHooks.marginRight", {
        get: function (elem, computed) {
          if (computed) {
            return jQuery.swap(elem, {
              display: cc11001100_hook("display", "inline-block", "object-key-init")
            }, curCSS, [elem, "marginRight"]);
          }
        }
      }, "assign");
    }
    if (!jQuery.support.pixelPosition && jQuery.fn.position) {
      jQuery.each(["top", "left"], function (i, prop) {
        jQuery.cssHooks[prop] = cc11001100_hook("jQuery.cssHooks[prop]", {
          get: function (elem, computed) {
            if (computed) {
              computed = cc11001100_hook("computed", curCSS(elem, prop), "assign");
              return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
          }
        }, "assign");
      });
    }
  });
  if (jQuery.expr && jQuery.expr.filters) {
    jQuery.expr.filters.hidden = cc11001100_hook("jQuery.expr.filters.hidden", function (elem) {
      return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
    }, "assign");
    jQuery.expr.filters.visible = cc11001100_hook("jQuery.expr.filters.visible", function (elem) {
      return !jQuery.expr.filters.hidden(elem);
    }, "assign");
  }
  jQuery.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = cc11001100_hook("jQuery.cssHooks[prefix + suffix]", {
      expand: function (value) {
        var i = cc11001100_hook("i", 0, "var-init"),
          expanded = cc11001100_hook("expanded", {}, "var-init"),
          parts = cc11001100_hook("parts", typeof value === "string" ? value.split(" ") : [value], "var-init");
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = cc11001100_hook("expanded[prefix + cssExpand[i] + suffix]", parts[i] || parts[i - 2] || parts[0], "assign");
        }
        return expanded;
      }
    }, "assign");
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = cc11001100_hook("jQuery.cssHooks[prefix + suffix].set", setPositiveNumber, "assign");
    }
  });
  var r20 = cc11001100_hook("r20", /%20/g, "var-init"),
    rbracket = cc11001100_hook("rbracket", /\[\]$/, "var-init"),
    rCRLF = cc11001100_hook("rCRLF", /\r?\n/g, "var-init"),
    rsubmitterTypes = cc11001100_hook("rsubmitterTypes", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    rsubmittable = cc11001100_hook("rsubmittable", /^(?:input|select|textarea|keygen)/i, "var-init");
  jQuery.fn.extend({
    serialize: function () {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var elements = cc11001100_hook("elements", jQuery.prop(this, "elements"), "var-init");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = cc11001100_hook("type", this.type, "var-init");
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = cc11001100_hook("val", jQuery(this).val(), "var-init");
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
          return {
            name: cc11001100_hook("name", elem.name, "object-key-init"),
            value: cc11001100_hook("value", val.replace(rCRLF, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", elem.name, "object-key-init"),
          value: cc11001100_hook("value", val.replace(rCRLF, "\r\n"), "object-key-init")
        };
      }).get();
    }
  });
  jQuery.param = cc11001100_hook("jQuery.param", function (a, traditional) {
    var prefix,
      s = cc11001100_hook("s", [], "var-init"),
      add = function (key, value) {
        value = cc11001100_hook("value", jQuery.isFunction(value) ? value() : value == null ? "" : value, "assign");
        s[s.length] = cc11001100_hook("s[s.length]", encodeURIComponent(key) + "=" + encodeURIComponent(value), "assign");
      };
    if (traditional === undefined) {
      traditional = cc11001100_hook("traditional", jQuery.ajaxSettings && jQuery.ajaxSettings.traditional, "assign");
    }
    if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&").replace(r20, "+");
  }, "assign");
  function buildParams(prefix, obj, traditional, add) {
    cc11001100_hook("prefix", prefix, "function-parameter");
    cc11001100_hook("obj", obj, "function-parameter");
    cc11001100_hook("traditional", traditional, "function-parameter");
    cc11001100_hook("add", add, "function-parameter");
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
    jQuery.fn[name] = cc11001100_hook("jQuery.fn[name]", function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    }, "assign");
  });
  jQuery.fn.extend({
    hover: function (fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    },
    bind: function (types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function (types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function (selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function (selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  });
  var ajaxLocParts,
    ajaxLocation,
    ajax_nonce = cc11001100_hook("ajax_nonce", jQuery.now(), "var-init"),
    ajax_rquery = cc11001100_hook("ajax_rquery", /\?/, "var-init"),
    rhash = cc11001100_hook("rhash", /#.*$/, "var-init"),
    rts = cc11001100_hook("rts", /([?&])_=[^&]*/, "var-init"),
    rheaders = cc11001100_hook("rheaders", /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, "var-init"),
    rlocalProtocol = cc11001100_hook("rlocalProtocol", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, "var-init"),
    rnoContent = cc11001100_hook("rnoContent", /^(?:GET|HEAD)$/, "var-init"),
    rprotocol = cc11001100_hook("rprotocol", /^\/\//, "var-init"),
    rurl = cc11001100_hook("rurl", /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, "var-init"),
    _load = cc11001100_hook("_load", jQuery.fn.load, "var-init"),
    prefilters = cc11001100_hook("prefilters", {}, "var-init"),
    transports = cc11001100_hook("transports", {}, "var-init"),
    allTypes = cc11001100_hook("allTypes", "*/".concat("*"), "var-init");
  try {
    ajaxLocation = cc11001100_hook("ajaxLocation", location.href, "assign");
  } catch (e) {
    ajaxLocation = cc11001100_hook("ajaxLocation", document.createElement("a"), "assign");
    ajaxLocation.href = cc11001100_hook("ajaxLocation.href", "", "assign");
    ajaxLocation = cc11001100_hook("ajaxLocation", ajaxLocation.href, "assign");
  }
  ajaxLocParts = cc11001100_hook("ajaxLocParts", rurl.exec(ajaxLocation.toLowerCase()) || [], "assign");
  function addToPrefiltersOrTransports(structure) {
    cc11001100_hook("structure", structure, "function-parameter");
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = cc11001100_hook("func", dataTypeExpression, "assign");
        dataTypeExpression = cc11001100_hook("dataTypeExpression", "*", "assign");
      }
      var dataType,
        i = cc11001100_hook("i", 0, "var-init"),
        dataTypes = cc11001100_hook("dataTypes", dataTypeExpression.toLowerCase().match(core_rnotwhite) || [], "var-init");
      if (jQuery.isFunction(func)) {
        while (dataType = cc11001100_hook("dataType", dataTypes[i++], "assign")) {
          if (dataType[0] === "+") {
            dataType = cc11001100_hook("dataType", dataType.slice(1) || "*", "assign");
            (structure[dataType] = cc11001100_hook("structure[dataType]", structure[dataType] || [], "assign")).unshift(func);
          } else {
            (structure[dataType] = cc11001100_hook("structure[dataType]", structure[dataType] || [], "assign")).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    cc11001100_hook("structure", structure, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    cc11001100_hook("originalOptions", originalOptions, "function-parameter");
    cc11001100_hook("jqXHR", jqXHR, "function-parameter");
    var inspected = cc11001100_hook("inspected", {}, "var-init"),
      seekingTransport = cc11001100_hook("seekingTransport", structure === transports, "var-init");
    function inspect(dataType) {
      cc11001100_hook("dataType", dataType, "function-parameter");
      var selected;
      inspected[dataType] = cc11001100_hook("inspected[dataType]", true, "assign");
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = cc11001100_hook("dataTypeOrTransport", prefilterOrFactory(options, originalOptions, jqXHR), "var-init");
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = cc11001100_hook("selected", dataTypeOrTransport, "assign"));
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    cc11001100_hook("target", target, "function-parameter");
    cc11001100_hook("src", src, "function-parameter");
    var deep,
      key,
      flatOptions = cc11001100_hook("flatOptions", jQuery.ajaxSettings.flatOptions || {}, "var-init");
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = cc11001100_hook("deep", {}, "assign")))[key] = cc11001100_hook("(flatOptions[key] ? target : deep || (deep = {}))[key]", src[key], "assign");
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  jQuery.fn.load = cc11001100_hook("jQuery.fn.load", function (url, params, callback) {
    if (typeof url !== "string" && _load) {
      return _load.apply(this, arguments);
    }
    var selector,
      response,
      type,
      self = cc11001100_hook("self", this, "var-init"),
      off = cc11001100_hook("off", url.indexOf(" "), "var-init");
    if (off >= 0) {
      selector = cc11001100_hook("selector", url.slice(off, url.length), "assign");
      url = cc11001100_hook("url", url.slice(0, off), "assign");
    }
    if (jQuery.isFunction(params)) {
      callback = cc11001100_hook("callback", params, "assign");
      params = cc11001100_hook("params", undefined, "assign");
    } else if (params && typeof params === "object") {
      type = cc11001100_hook("type", "POST", "assign");
    }
    if (self.length > 0) {
      jQuery.ajax({
        url: cc11001100_hook("url", url, "object-key-init"),
        type: cc11001100_hook("type", type, "object-key-init"),
        dataType: cc11001100_hook("dataType", "html", "object-key-init"),
        data: cc11001100_hook("data", params, "object-key-init")
      }).done(function (responseText) {
        response = cc11001100_hook("response", arguments, "assign");
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).complete(callback && function (jqXHR, status) {
        self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
      });
    }
    return this;
  }, "assign");
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = cc11001100_hook("jQuery.fn[type]", function (fn) {
      return this.on(type, fn);
    }, "assign");
  });
  jQuery.extend({
    active: cc11001100_hook("active", 0, "object-key-init"),
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", ajaxLocation, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", rlocalProtocol.test(ajaxLocParts[1]), "object-key-init"),
      global: cc11001100_hook("global", true, "object-key-init"),
      processData: cc11001100_hook("processData", true, "object-key-init"),
      async: cc11001100_hook("async", true, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),
      accepts: {
        "*": cc11001100_hook("*", allTypes, "object-key-init"),
        text: cc11001100_hook("text", "text/plain", "object-key-init"),
        html: cc11001100_hook("html", "text/html", "object-key-init"),
        xml: cc11001100_hook("xml", "application/xml, text/xml", "object-key-init"),
        json: cc11001100_hook("json", "application/json, text/javascript", "object-key-init")
      },
      contents: {
        xml: cc11001100_hook("xml", /xml/, "object-key-init"),
        html: cc11001100_hook("html", /html/, "object-key-init"),
        json: cc11001100_hook("json", /json/, "object-key-init")
      },
      responseFields: {
        xml: cc11001100_hook("xml", "responseXML", "object-key-init"),
        text: cc11001100_hook("text", "responseText", "object-key-init"),
        json: cc11001100_hook("json", "responseJSON", "object-key-init")
      },
      converters: {
        "* text": cc11001100_hook("* text", String, "object-key-init"),
        "text html": cc11001100_hook("text html", true, "object-key-init"),
        "text json": cc11001100_hook("text json", jQuery.parseJSON, "object-key-init"),
        "text xml": cc11001100_hook("text xml", jQuery.parseXML, "object-key-init")
      },
      flatOptions: {
        url: cc11001100_hook("url", true, "object-key-init"),
        context: cc11001100_hook("context", true, "object-key-init")
      }
    },
    ajaxSetup: function (target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", addToPrefiltersOrTransports(prefilters), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", addToPrefiltersOrTransports(transports), "object-key-init"),
    ajax: function (url, options) {
      if (typeof url === "object") {
        options = cc11001100_hook("options", url, "assign");
        url = cc11001100_hook("url", undefined, "assign");
      }
      options = cc11001100_hook("options", options || {}, "assign");
      var parts,
        i,
        cacheURL,
        responseHeadersString,
        timeoutTimer,
        fireGlobals,
        transport,
        responseHeaders,
        s = cc11001100_hook("s", jQuery.ajaxSetup({}, options), "var-init"),
        callbackContext = cc11001100_hook("callbackContext", s.context || s, "var-init"),
        globalEventContext = cc11001100_hook("globalEventContext", s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, "var-init"),
        deferred = cc11001100_hook("deferred", jQuery.Deferred(), "var-init"),
        completeDeferred = cc11001100_hook("completeDeferred", jQuery.Callbacks("once memory"), "var-init"),
        statusCode = cc11001100_hook("statusCode", s.statusCode || {}, "var-init"),
        requestHeaders = cc11001100_hook("requestHeaders", {}, "var-init"),
        requestHeadersNames = cc11001100_hook("requestHeadersNames", {}, "var-init"),
        state = cc11001100_hook("state", 0, "var-init"),
        strAbort = cc11001100_hook("strAbort", "canceled", "var-init"),
        jqXHR = cc11001100_hook("jqXHR", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (key) {
            var match;
            if (state === 2) {
              if (!responseHeaders) {
                responseHeaders = cc11001100_hook("responseHeaders", {}, "assign");
                while (match = cc11001100_hook("match", rheaders.exec(responseHeadersString), "assign")) {
                  responseHeaders[match[1].toLowerCase()] = cc11001100_hook("responseHeaders[match[1].toLowerCase()]", match[2], "assign");
                }
              }
              match = cc11001100_hook("match", responseHeaders[key.toLowerCase()], "assign");
            }
            return match == null ? null : match;
          },
          getAllResponseHeaders: function () {
            return state === 2 ? responseHeadersString : null;
          },
          setRequestHeader: function (name, value) {
            var lname = cc11001100_hook("lname", name.toLowerCase(), "var-init");
            if (!state) {
              name = cc11001100_hook("name", requestHeadersNames[lname] = cc11001100_hook("requestHeadersNames[lname]", requestHeadersNames[lname] || name, "assign"), "assign");
              requestHeaders[name] = cc11001100_hook("requestHeaders[name]", value, "assign");
            }
            return this;
          },
          overrideMimeType: function (type) {
            if (!state) {
              s.mimeType = cc11001100_hook("s.mimeType", type, "assign");
            }
            return this;
          },
          statusCode: function (map) {
            var code;
            if (map) {
              if (state < 2) {
                for (code in map) {
                  statusCode[code] = cc11001100_hook("statusCode[code]", [statusCode[code], map[code]], "assign");
                }
              } else {
                jqXHR.always(map[jqXHR.status]);
              }
            }
            return this;
          },
          abort: function (statusText) {
            var finalText = cc11001100_hook("finalText", statusText || strAbort, "var-init");
            if (transport) {
              transport.abort(finalText);
            }
            done(0, finalText);
            return this;
          }
        }, "var-init");
      deferred.promise(jqXHR).complete = cc11001100_hook("deferred.promise(jqXHR).complete", completeDeferred.add, "assign");
      jqXHR.success = cc11001100_hook("jqXHR.success", jqXHR.done, "assign");
      jqXHR.error = cc11001100_hook("jqXHR.error", jqXHR.fail, "assign");
      s.url = cc11001100_hook("s.url", ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), "assign");
      s.type = cc11001100_hook("s.type", options.method || options.type || s.method || s.type, "assign");
      s.dataTypes = cc11001100_hook("s.dataTypes", jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""], "assign");
      if (s.crossDomain == null) {
        parts = cc11001100_hook("parts", rurl.exec(s.url.toLowerCase()), "assign");
        s.crossDomain = cc11001100_hook("s.crossDomain", !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))), "assign");
      }
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = cc11001100_hook("s.data", jQuery.param(s.data, s.traditional), "assign");
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (state === 2) {
        return jqXHR;
      }
      fireGlobals = cc11001100_hook("fireGlobals", s.global, "assign");
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = cc11001100_hook("s.type", s.type.toUpperCase(), "assign");
      s.hasContent = cc11001100_hook("s.hasContent", !rnoContent.test(s.type), "assign");
      cacheURL = cc11001100_hook("cacheURL", s.url, "assign");
      if (!s.hasContent) {
        if (s.data) {
          cacheURL = cc11001100_hook("cacheURL", s.url += cc11001100_hook("s.url", (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data, "assign"), "assign");
          delete s.data;
        }
        if (s.cache === false) {
          s.url = cc11001100_hook("s.url", rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++, "assign");
        }
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        return jqXHR.abort();
      }
      strAbort = cc11001100_hook("strAbort", "abort", "assign");
      for (i in {
        success: cc11001100_hook("success", 1, "object-key-init"),
        error: cc11001100_hook("error", 1, "object-key-init"),
        complete: cc11001100_hook("complete", 1, "object-key-init")
      }) {
        jqXHR[i](s[i]);
      }
      transport = cc11001100_hook("transport", inspectPrefiltersOrTransports(transports, s, options, jqXHR), "assign");
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = cc11001100_hook("jqXHR.readyState", 1, "assign");
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = cc11001100_hook("timeoutTimer", setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout), "assign");
        }
        try {
          state = cc11001100_hook("state", 1, "assign");
          transport.send(requestHeaders, done);
        } catch (e) {
          if (state < 2) {
            done(-1, e);
          } else {
            throw e;
          }
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        cc11001100_hook("status", status, "function-parameter");
        cc11001100_hook("nativeStatusText", nativeStatusText, "function-parameter");
        cc11001100_hook("responses", responses, "function-parameter");
        cc11001100_hook("headers", headers, "function-parameter");
        var isSuccess,
          success,
          error,
          response,
          modified,
          statusText = cc11001100_hook("statusText", nativeStatusText, "var-init");
        if (state === 2) {
          return;
        }
        state = cc11001100_hook("state", 2, "assign");
        if (timeoutTimer) {
          clearTimeout(timeoutTimer);
        }
        transport = cc11001100_hook("transport", undefined, "assign");
        responseHeadersString = cc11001100_hook("responseHeadersString", headers || "", "assign");
        jqXHR.readyState = cc11001100_hook("jqXHR.readyState", status > 0 ? 4 : 0, "assign");
        isSuccess = cc11001100_hook("isSuccess", status >= 200 && status < 300 || status === 304, "assign");
        if (responses) {
          response = cc11001100_hook("response", ajaxHandleResponses(s, jqXHR, responses), "assign");
        }
        response = cc11001100_hook("response", ajaxConvert(s, response, jqXHR, isSuccess), "assign");
        if (isSuccess) {
          if (s.ifModified) {
            modified = cc11001100_hook("modified", jqXHR.getResponseHeader("Last-Modified"), "assign");
            if (modified) {
              jQuery.lastModified[cacheURL] = cc11001100_hook("jQuery.lastModified[cacheURL]", modified, "assign");
            }
            modified = cc11001100_hook("modified", jqXHR.getResponseHeader("etag"), "assign");
            if (modified) {
              jQuery.etag[cacheURL] = cc11001100_hook("jQuery.etag[cacheURL]", modified, "assign");
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = cc11001100_hook("statusText", "nocontent", "assign");
          } else if (status === 304) {
            statusText = cc11001100_hook("statusText", "notmodified", "assign");
          } else {
            statusText = cc11001100_hook("statusText", response.state, "assign");
            success = cc11001100_hook("success", response.data, "assign");
            error = cc11001100_hook("error", response.error, "assign");
            isSuccess = cc11001100_hook("isSuccess", !error, "assign");
          }
        } else {
          error = cc11001100_hook("error", statusText, "assign");
          if (status || !statusText) {
            statusText = cc11001100_hook("statusText", "error", "assign");
            if (status < 0) {
              status = cc11001100_hook("status", 0, "assign");
            }
          }
        }
        jqXHR.status = cc11001100_hook("jqXHR.status", status, "assign");
        jqXHR.statusText = cc11001100_hook("jqXHR.statusText", (nativeStatusText || statusText) + "", "assign");
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = cc11001100_hook("statusCode", undefined, "assign");
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function (url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function (url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = cc11001100_hook("jQuery[method]", function (url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = cc11001100_hook("type", type || callback, "assign");
        callback = cc11001100_hook("callback", data, "assign");
        data = cc11001100_hook("data", undefined, "assign");
      }
      return jQuery.ajax({
        url: cc11001100_hook("url", url, "object-key-init"),
        type: cc11001100_hook("type", method, "object-key-init"),
        dataType: cc11001100_hook("dataType", type, "object-key-init"),
        data: cc11001100_hook("data", data, "object-key-init"),
        success: cc11001100_hook("success", callback, "object-key-init")
      });
    }, "assign");
  });
  function ajaxHandleResponses(s, jqXHR, responses) {
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("jqXHR", jqXHR, "function-parameter");
    cc11001100_hook("responses", responses, "function-parameter");
    var firstDataType,
      ct,
      finalDataType,
      type,
      contents = cc11001100_hook("contents", s.contents, "var-init"),
      dataTypes = cc11001100_hook("dataTypes", s.dataTypes, "var-init");
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = cc11001100_hook("ct", s.mimeType || jqXHR.getResponseHeader("Content-Type"), "assign");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = cc11001100_hook("finalDataType", dataTypes[0], "assign");
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = cc11001100_hook("finalDataType", type, "assign");
          break;
        }
        if (!firstDataType) {
          firstDataType = cc11001100_hook("firstDataType", type, "assign");
        }
      }
      finalDataType = cc11001100_hook("finalDataType", finalDataType || firstDataType, "assign");
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("response", response, "function-parameter");
    cc11001100_hook("jqXHR", jqXHR, "function-parameter");
    cc11001100_hook("isSuccess", isSuccess, "function-parameter");
    var conv2,
      current,
      conv,
      tmp,
      prev,
      converters = cc11001100_hook("converters", {}, "var-init"),
      dataTypes = cc11001100_hook("dataTypes", s.dataTypes.slice(), "var-init");
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = cc11001100_hook("converters[conv.toLowerCase()]", s.converters[conv], "assign");
      }
    }
    current = cc11001100_hook("current", dataTypes.shift(), "assign");
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = cc11001100_hook("jqXHR[s.responseFields[current]]", response, "assign");
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = cc11001100_hook("response", s.dataFilter(response, s.dataType), "assign");
      }
      prev = cc11001100_hook("prev", current, "assign");
      current = cc11001100_hook("current", dataTypes.shift(), "assign");
      if (current) {
        if (current === "*") {
          current = cc11001100_hook("current", prev, "assign");
        } else if (prev !== "*" && prev !== current) {
          conv = cc11001100_hook("conv", converters[prev + " " + current] || converters["* " + current], "assign");
          if (!conv) {
            for (conv2 in converters) {
              tmp = cc11001100_hook("tmp", conv2.split(" "), "assign");
              if (tmp[1] === current) {
                conv = cc11001100_hook("conv", converters[prev + " " + tmp[0]] || converters["* " + tmp[0]], "assign");
                if (conv) {
                  if (conv === true) {
                    conv = cc11001100_hook("conv", converters[conv2], "assign");
                  } else if (converters[conv2] !== true) {
                    current = cc11001100_hook("current", tmp[0], "assign");
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s["throws"]) {
              response = cc11001100_hook("response", conv(response), "assign");
            } else {
              try {
                response = cc11001100_hook("response", conv(response), "assign");
              } catch (e) {
                return {
                  state: cc11001100_hook("state", "parsererror", "object-key-init"),
                  error: cc11001100_hook("error", conv ? e : "No conversion from " + prev + " to " + current, "object-key-init")
                };
              }
            }
          }
        }
      }
    }
    return {
      state: cc11001100_hook("state", "success", "object-key-init"),
      data: cc11001100_hook("data", response, "object-key-init")
    };
  }
  jQuery.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /(?:java|ecma)script/, "object-key-init")
    },
    converters: {
      "text script": function (text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  });
  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = cc11001100_hook("s.cache", false, "assign");
    }
    if (s.crossDomain) {
      s.type = cc11001100_hook("s.type", "GET", "assign");
      s.global = cc11001100_hook("s.global", false, "assign");
    }
  });
  jQuery.ajaxTransport("script", function (s) {
    if (s.crossDomain) {
      var script,
        head = cc11001100_hook("head", document.head || jQuery("head")[0] || document.documentElement, "var-init");
      return {
        send: function (_, callback) {
          script = cc11001100_hook("script", document.createElement("script"), "assign");
          script.async = cc11001100_hook("script.async", true, "assign");
          if (s.scriptCharset) {
            script.charset = cc11001100_hook("script.charset", s.scriptCharset, "assign");
          }
          script.src = cc11001100_hook("script.src", s.url, "assign");
          script.onload = cc11001100_hook("script.onload", script.onreadystatechange = cc11001100_hook("script.onreadystatechange", function (_, isAbort) {
            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
              script.onload = cc11001100_hook("script.onload", script.onreadystatechange = cc11001100_hook("script.onreadystatechange", null, "assign"), "assign");
              if (script.parentNode) {
                script.parentNode.removeChild(script);
              }
              script = cc11001100_hook("script", null, "assign");
              if (!isAbort) {
                callback(200, "success");
              }
            }
          }, "assign"), "assign");
          head.insertBefore(script, head.firstChild);
        },
        abort: function () {
          if (script) {
            script.onload(undefined, true);
          }
        }
      };
    }
  });
  var oldCallbacks = cc11001100_hook("oldCallbacks", [], "var-init"),
    rjsonp = cc11001100_hook("rjsonp", /(=)\?(?=&|$)|\?\?/, "var-init");
  jQuery.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var callback = cc11001100_hook("callback", oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++, "var-init");
      this[callback] = cc11001100_hook("this[callback]", true, "assign");
      return callback;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
      overwritten,
      responseContainer,
      jsonProp = cc11001100_hook("jsonProp", s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data"), "var-init");
    if (jsonProp || s.dataTypes[0] === "jsonp") {
      callbackName = cc11001100_hook("callbackName", s.jsonpCallback = cc11001100_hook("s.jsonpCallback", jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, "assign"), "assign");
      if (jsonProp) {
        s[jsonProp] = cc11001100_hook("s[jsonProp]", s[jsonProp].replace(rjsonp, "$1" + callbackName), "assign");
      } else if (s.jsonp !== false) {
        s.url += cc11001100_hook("s.url", (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName, "assign");
      }
      s.converters["script json"] = cc11001100_hook("s.converters[\"script json\"]", function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      }, "assign");
      s.dataTypes[0] = cc11001100_hook("s.dataTypes[0]", "json", "assign");
      overwritten = cc11001100_hook("overwritten", window[callbackName], "assign");
      window[callbackName] = cc11001100_hook("window[callbackName]", function () {
        responseContainer = cc11001100_hook("responseContainer", arguments, "assign");
      }, "assign");
      jqXHR.always(function () {
        window[callbackName] = cc11001100_hook("window[callbackName]", overwritten, "assign");
        if (s[callbackName]) {
          s.jsonpCallback = cc11001100_hook("s.jsonpCallback", originalSettings.jsonpCallback, "assign");
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = cc11001100_hook("responseContainer", overwritten = cc11001100_hook("overwritten", undefined, "assign"), "assign");
      });
      return "script";
    }
  });
  var xhrCallbacks,
    xhrSupported,
    xhrId = cc11001100_hook("xhrId", 0, "var-init"),
    xhrOnUnloadAbort = cc11001100_hook("xhrOnUnloadAbort", window.ActiveXObject && function () {
      var key;
      for (key in xhrCallbacks) {
        xhrCallbacks[key](undefined, true);
      }
    }, "var-init");
  function createStandardXHR() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  }
  function createActiveXHR() {
    try {
      return new window.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  jQuery.ajaxSettings.xhr = cc11001100_hook("jQuery.ajaxSettings.xhr", window.ActiveXObject ? function () {
    return !this.isLocal && createStandardXHR() || createActiveXHR();
  } : createStandardXHR, "assign");
  xhrSupported = cc11001100_hook("xhrSupported", jQuery.ajaxSettings.xhr(), "assign");
  jQuery.support.cors = cc11001100_hook("jQuery.support.cors", !!xhrSupported && "withCredentials" in xhrSupported, "assign");
  xhrSupported = cc11001100_hook("xhrSupported", jQuery.support.ajax = cc11001100_hook("jQuery.support.ajax", !!xhrSupported, "assign"), "assign");
  if (xhrSupported) {
    jQuery.ajaxTransport(function (s) {
      if (!s.crossDomain || jQuery.support.cors) {
        var callback;
        return {
          send: function (headers, complete) {
            var handle,
              i,
              xhr = cc11001100_hook("xhr", s.xhr(), "var-init");
            if (s.username) {
              xhr.open(s.type, s.url, s.async, s.username, s.password);
            } else {
              xhr.open(s.type, s.url, s.async);
            }
            if (s.xhrFields) {
              for (i in s.xhrFields) {
                xhr[i] = cc11001100_hook("xhr[i]", s.xhrFields[i], "assign");
              }
            }
            if (s.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(s.mimeType);
            }
            if (!s.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = cc11001100_hook("headers[\"X-Requested-With\"]", "XMLHttpRequest", "assign");
            }
            try {
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
            } catch (err) {}
            xhr.send(s.hasContent && s.data || null);
            callback = cc11001100_hook("callback", function (_, isAbort) {
              var status, responseHeaders, statusText, responses;
              try {
                if (callback && (isAbort || xhr.readyState === 4)) {
                  callback = cc11001100_hook("callback", undefined, "assign");
                  if (handle) {
                    xhr.onreadystatechange = cc11001100_hook("xhr.onreadystatechange", jQuery.noop, "assign");
                    if (xhrOnUnloadAbort) {
                      delete xhrCallbacks[handle];
                    }
                  }
                  if (isAbort) {
                    if (xhr.readyState !== 4) {
                      xhr.abort();
                    }
                  } else {
                    responses = cc11001100_hook("responses", {}, "assign");
                    status = cc11001100_hook("status", xhr.status, "assign");
                    responseHeaders = cc11001100_hook("responseHeaders", xhr.getAllResponseHeaders(), "assign");
                    if (typeof xhr.responseText === "string") {
                      responses.text = cc11001100_hook("responses.text", xhr.responseText, "assign");
                    }
                    try {
                      statusText = cc11001100_hook("statusText", xhr.statusText, "assign");
                    } catch (e) {
                      statusText = cc11001100_hook("statusText", "", "assign");
                    }
                    if (!status && s.isLocal && !s.crossDomain) {
                      status = cc11001100_hook("status", responses.text ? 200 : 404, "assign");
                    } else if (status === 1223) {
                      status = cc11001100_hook("status", 204, "assign");
                    }
                  }
                }
              } catch (firefoxAccessException) {
                if (!isAbort) {
                  complete(-1, firefoxAccessException);
                }
              }
              if (responses) {
                complete(status, statusText, responses, responseHeaders);
              }
            }, "assign");
            if (!s.async) {
              callback();
            } else if (xhr.readyState === 4) {
              setTimeout(callback);
            } else {
              handle = cc11001100_hook("handle", ++xhrId, "assign");
              if (xhrOnUnloadAbort) {
                if (!xhrCallbacks) {
                  xhrCallbacks = cc11001100_hook("xhrCallbacks", {}, "assign");
                  jQuery(window).unload(xhrOnUnloadAbort);
                }
                xhrCallbacks[handle] = cc11001100_hook("xhrCallbacks[handle]", callback, "assign");
              }
              xhr.onreadystatechange = cc11001100_hook("xhr.onreadystatechange", callback, "assign");
            }
          },
          abort: function () {
            if (callback) {
              callback(undefined, true);
            }
          }
        };
      }
    });
  }
  var fxNow,
    timerId,
    rfxtypes = cc11001100_hook("rfxtypes", /^(?:toggle|show|hide)$/, "var-init"),
    rfxnum = cc11001100_hook("rfxnum", new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), "var-init"),
    rrun = cc11001100_hook("rrun", /queueHooks$/, "var-init"),
    animationPrefilters = cc11001100_hook("animationPrefilters", [defaultPrefilter], "var-init"),
    tweeners = cc11001100_hook("tweeners", {
      "*": cc11001100_hook("*", [function (prop, value) {
        var tween = cc11001100_hook("tween", this.createTween(prop, value), "var-init"),
          target = cc11001100_hook("target", tween.cur(), "var-init"),
          parts = cc11001100_hook("parts", rfxnum.exec(value), "var-init"),
          unit = cc11001100_hook("unit", parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), "var-init"),
          start = cc11001100_hook("start", (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), "var-init"),
          scale = cc11001100_hook("scale", 1, "var-init"),
          maxIterations = cc11001100_hook("maxIterations", 20, "var-init");
        if (start && start[3] !== unit) {
          unit = cc11001100_hook("unit", unit || start[3], "assign");
          parts = cc11001100_hook("parts", parts || [], "assign");
          start = cc11001100_hook("start", +target || 1, "assign");
          do {
            scale = cc11001100_hook("scale", scale || ".5", "assign");
            start = cc11001100_hook("start", start / scale, "assign");
            jQuery.style(tween.elem, prop, start + unit);
          } while (scale !== (scale = cc11001100_hook("scale", tween.cur() / target, "assign")) && scale !== 1 && --maxIterations);
        }
        if (parts) {
          start = cc11001100_hook("start", tween.start = cc11001100_hook("tween.start", +start || +target || 0, "assign"), "assign");
          tween.unit = cc11001100_hook("tween.unit", unit, "assign");
          tween.end = cc11001100_hook("tween.end", parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2], "assign");
        }
        return tween;
      }], "object-key-init")
    }, "var-init");
  function createFxNow() {
    setTimeout(function () {
      fxNow = cc11001100_hook("fxNow", undefined, "assign");
    });
    return fxNow = cc11001100_hook("fxNow", jQuery.now(), "assign");
  }
  function createTween(value, prop, animation) {
    cc11001100_hook("value", value, "function-parameter");
    cc11001100_hook("prop", prop, "function-parameter");
    cc11001100_hook("animation", animation, "function-parameter");
    var tween,
      collection = cc11001100_hook("collection", (tweeners[prop] || []).concat(tweeners["*"]), "var-init"),
      index = cc11001100_hook("index", 0, "var-init"),
      length = cc11001100_hook("length", collection.length, "var-init");
    for (; index < length; index++) {
      if (tween = cc11001100_hook("tween", collection[index].call(animation, prop, value), "assign")) {
        return tween;
      }
    }
  }
  function Animation(elem, properties, options) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("properties", properties, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    var result,
      stopped,
      index = cc11001100_hook("index", 0, "var-init"),
      length = cc11001100_hook("length", animationPrefilters.length, "var-init"),
      deferred = cc11001100_hook("deferred", jQuery.Deferred().always(function () {
        delete tick.elem;
      }), "var-init"),
      tick = function () {
        if (stopped) {
          return false;
        }
        var currentTime = cc11001100_hook("currentTime", fxNow || createFxNow(), "var-init"),
          remaining = cc11001100_hook("remaining", Math.max(0, animation.startTime + animation.duration - currentTime), "var-init"),
          temp = cc11001100_hook("temp", remaining / animation.duration || 0, "var-init"),
          percent = cc11001100_hook("percent", 1 - temp, "var-init"),
          index = cc11001100_hook("index", 0, "var-init"),
          length = cc11001100_hook("length", animation.tweens.length, "var-init");
        for (; index < length; index++) {
          animation.tweens[index].run(percent);
        }
        deferred.notifyWith(elem, [animation, percent, remaining]);
        if (percent < 1 && length) {
          return remaining;
        } else {
          deferred.resolveWith(elem, [animation]);
          return false;
        }
      },
      animation = cc11001100_hook("animation", deferred.promise({
        elem: cc11001100_hook("elem", elem, "object-key-init"),
        props: cc11001100_hook("props", jQuery.extend({}, properties), "object-key-init"),
        opts: cc11001100_hook("opts", jQuery.extend(true, {
          specialEasing: {}
        }, options), "object-key-init"),
        originalProperties: cc11001100_hook("originalProperties", properties, "object-key-init"),
        originalOptions: cc11001100_hook("originalOptions", options, "object-key-init"),
        startTime: cc11001100_hook("startTime", fxNow || createFxNow(), "object-key-init"),
        duration: cc11001100_hook("duration", options.duration, "object-key-init"),
        tweens: cc11001100_hook("tweens", [], "object-key-init"),
        createTween: function (prop, end) {
          var tween = cc11001100_hook("tween", jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing), "var-init");
          animation.tweens.push(tween);
          return tween;
        },
        stop: function (gotoEnd) {
          var index = cc11001100_hook("index", 0, "var-init"),
            length = cc11001100_hook("length", gotoEnd ? animation.tweens.length : 0, "var-init");
          if (stopped) {
            return this;
          }
          stopped = cc11001100_hook("stopped", true, "assign");
          for (; index < length; index++) {
            animation.tweens[index].run(1);
          }
          if (gotoEnd) {
            deferred.resolveWith(elem, [animation, gotoEnd]);
          } else {
            deferred.rejectWith(elem, [animation, gotoEnd]);
          }
          return this;
        }
      }), "var-init"),
      props = cc11001100_hook("props", animation.props, "var-init");
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = cc11001100_hook("result", animationPrefilters[index].call(animation, elem, props, animation.opts), "assign");
      if (result) {
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: cc11001100_hook("elem", elem, "object-key-init"),
      anim: cc11001100_hook("anim", animation, "object-key-init"),
      queue: cc11001100_hook("queue", animation.opts.queue, "object-key-init")
    }));
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  function propFilter(props, specialEasing) {
    cc11001100_hook("props", props, "function-parameter");
    cc11001100_hook("specialEasing", specialEasing, "function-parameter");
    var index, name, easing, value, hooks;
    for (index in props) {
      name = cc11001100_hook("name", jQuery.camelCase(index), "assign");
      easing = cc11001100_hook("easing", specialEasing[name], "assign");
      value = cc11001100_hook("value", props[index], "assign");
      if (jQuery.isArray(value)) {
        easing = cc11001100_hook("easing", value[1], "assign");
        value = cc11001100_hook("value", props[index] = cc11001100_hook("props[index]", value[0], "assign"), "assign");
      }
      if (index !== name) {
        props[name] = cc11001100_hook("props[name]", value, "assign");
        delete props[index];
      }
      hooks = cc11001100_hook("hooks", jQuery.cssHooks[name], "assign");
      if (hooks && "expand" in hooks) {
        value = cc11001100_hook("value", hooks.expand(value), "assign");
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = cc11001100_hook("props[index]", value[index], "assign");
            specialEasing[index] = cc11001100_hook("specialEasing[index]", easing, "assign");
          }
        }
      } else {
        specialEasing[name] = cc11001100_hook("specialEasing[name]", easing, "assign");
      }
    }
  }
  jQuery.Animation = cc11001100_hook("jQuery.Animation", jQuery.extend(Animation, {
    tweener: function (props, callback) {
      if (jQuery.isFunction(props)) {
        callback = cc11001100_hook("callback", props, "assign");
        props = cc11001100_hook("props", ["*"], "assign");
      } else {
        props = cc11001100_hook("props", props.split(" "), "assign");
      }
      var prop,
        index = cc11001100_hook("index", 0, "var-init"),
        length = cc11001100_hook("length", props.length, "var-init");
      for (; index < length; index++) {
        prop = cc11001100_hook("prop", props[index], "assign");
        tweeners[prop] = cc11001100_hook("tweeners[prop]", tweeners[prop] || [], "assign");
        tweeners[prop].unshift(callback);
      }
    },
    prefilter: function (callback, prepend) {
      if (prepend) {
        animationPrefilters.unshift(callback);
      } else {
        animationPrefilters.push(callback);
      }
    }
  }), "assign");
  function defaultPrefilter(elem, props, opts) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("props", props, "function-parameter");
    cc11001100_hook("opts", opts, "function-parameter");
    var prop,
      value,
      toggle,
      tween,
      hooks,
      oldfire,
      anim = cc11001100_hook("anim", this, "var-init"),
      orig = cc11001100_hook("orig", {}, "var-init"),
      style = cc11001100_hook("style", elem.style, "var-init"),
      hidden = cc11001100_hook("hidden", elem.nodeType && isHidden(elem), "var-init"),
      dataShow = cc11001100_hook("dataShow", jQuery._data(elem, "fxshow"), "var-init");
    if (!opts.queue) {
      hooks = cc11001100_hook("hooks", jQuery._queueHooks(elem, "fx"), "assign");
      if (hooks.unqueued == null) {
        hooks.unqueued = cc11001100_hook("hooks.unqueued", 0, "assign");
        oldfire = cc11001100_hook("oldfire", hooks.empty.fire, "assign");
        hooks.empty.fire = cc11001100_hook("hooks.empty.fire", function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        }, "assign");
      }
      hooks.unqueued++;
      anim.always(function () {
        anim.always(function () {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
      opts.overflow = cc11001100_hook("opts.overflow", [style.overflow, style.overflowX, style.overflowY], "assign");
      if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
        if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
          style.display = cc11001100_hook("style.display", "inline-block", "assign");
        } else {
          style.zoom = cc11001100_hook("style.zoom", 1, "assign");
        }
      }
    }
    if (opts.overflow) {
      style.overflow = cc11001100_hook("style.overflow", "hidden", "assign");
      if (!jQuery.support.shrinkWrapBlocks) {
        anim.always(function () {
          style.overflow = cc11001100_hook("style.overflow", opts.overflow[0], "assign");
          style.overflowX = cc11001100_hook("style.overflowX", opts.overflow[1], "assign");
          style.overflowY = cc11001100_hook("style.overflowY", opts.overflow[2], "assign");
        });
      }
    }
    for (prop in props) {
      value = cc11001100_hook("value", props[prop], "assign");
      if (rfxtypes.exec(value)) {
        delete props[prop];
        toggle = cc11001100_hook("toggle", toggle || value === "toggle", "assign");
        if (value === (hidden ? "hide" : "show")) {
          continue;
        }
        orig[prop] = cc11001100_hook("orig[prop]", dataShow && dataShow[prop] || jQuery.style(elem, prop), "assign");
      }
    }
    if (!jQuery.isEmptyObject(orig)) {
      if (dataShow) {
        if ("hidden" in dataShow) {
          hidden = cc11001100_hook("hidden", dataShow.hidden, "assign");
        }
      } else {
        dataShow = cc11001100_hook("dataShow", jQuery._data(elem, "fxshow", {}), "assign");
      }
      if (toggle) {
        dataShow.hidden = cc11001100_hook("dataShow.hidden", !hidden, "assign");
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function () {
          jQuery(elem).hide();
        });
      }
      anim.done(function () {
        var prop;
        jQuery._removeData(elem, "fxshow");
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (prop in orig) {
        tween = cc11001100_hook("tween", createTween(hidden ? dataShow[prop] : 0, prop, anim), "assign");
        if (!(prop in dataShow)) {
          dataShow[prop] = cc11001100_hook("dataShow[prop]", tween.start, "assign");
          if (hidden) {
            tween.end = cc11001100_hook("tween.end", tween.start, "assign");
            tween.start = cc11001100_hook("tween.start", prop === "width" || prop === "height" ? 1 : 0, "assign");
          }
        }
      }
    }
  }
  function Tween(elem, options, prop, end, easing) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    cc11001100_hook("prop", prop, "function-parameter");
    cc11001100_hook("end", end, "function-parameter");
    cc11001100_hook("easing", easing, "function-parameter");
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = cc11001100_hook("jQuery.Tween", Tween, "assign");
  Tween.prototype = cc11001100_hook("Tween.prototype", {
    constructor: cc11001100_hook("constructor", Tween, "object-key-init"),
    init: function (elem, options, prop, end, easing, unit) {
      this.elem = cc11001100_hook("this.elem", elem, "assign");
      this.prop = cc11001100_hook("this.prop", prop, "assign");
      this.easing = cc11001100_hook("this.easing", easing || "swing", "assign");
      this.options = cc11001100_hook("this.options", options, "assign");
      this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign");
      this.end = cc11001100_hook("this.end", end, "assign");
      this.unit = cc11001100_hook("this.unit", unit || (jQuery.cssNumber[prop] ? "" : "px"), "assign");
    },
    cur: function () {
      var hooks = cc11001100_hook("hooks", Tween.propHooks[this.prop], "var-init");
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function (percent) {
      var eased,
        hooks = cc11001100_hook("hooks", Tween.propHooks[this.prop], "var-init");
      if (this.options.duration) {
        this.pos = cc11001100_hook("this.pos", eased = cc11001100_hook("eased", jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration), "assign"), "assign");
      } else {
        this.pos = cc11001100_hook("this.pos", eased = cc11001100_hook("eased", percent, "assign"), "assign");
      }
      this.now = cc11001100_hook("this.now", (this.end - this.start) * eased + this.start, "assign");
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  }, "assign");
  Tween.prototype.init.prototype = cc11001100_hook("Tween.prototype.init.prototype", Tween.prototype, "assign");
  Tween.propHooks = cc11001100_hook("Tween.propHooks", {
    _default: {
      get: function (tween) {
        var result;
        if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
          return tween.elem[tween.prop];
        }
        result = cc11001100_hook("result", jQuery.css(tween.elem, tween.prop, ""), "assign");
        return !result || result === "auto" ? 0 : result;
      },
      set: function (tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = cc11001100_hook("tween.elem[tween.prop]", tween.now, "assign");
        }
      }
    }
  }, "assign");
  Tween.propHooks.scrollTop = cc11001100_hook("Tween.propHooks.scrollTop", Tween.propHooks.scrollLeft = cc11001100_hook("Tween.propHooks.scrollLeft", {
    set: function (tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = cc11001100_hook("tween.elem[tween.prop]", tween.now, "assign");
      }
    }
  }, "assign"), "assign");
  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = cc11001100_hook("cssFn", jQuery.fn[name], "var-init");
    jQuery.fn[name] = cc11001100_hook("jQuery.fn[name]", function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    }, "assign");
  });
  jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {
      return this.filter(isHidden).css("opacity", 0).show().end().animate({
        opacity: cc11001100_hook("opacity", to, "object-key-init")
      }, speed, easing, callback);
    },
    animate: function (prop, speed, easing, callback) {
      var empty = cc11001100_hook("empty", jQuery.isEmptyObject(prop), "var-init"),
        optall = cc11001100_hook("optall", jQuery.speed(speed, easing, callback), "var-init"),
        doAnimation = function () {
          var anim = cc11001100_hook("anim", Animation(this, jQuery.extend({}, prop), optall), "var-init");
          if (empty || jQuery._data(this, "finish")) {
            anim.stop(true);
          }
        };
      doAnimation.finish = cc11001100_hook("doAnimation.finish", doAnimation, "assign");
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function (type, clearQueue, gotoEnd) {
      var stopQueue = function (hooks) {
        var stop = cc11001100_hook("stop", hooks.stop, "var-init");
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = cc11001100_hook("gotoEnd", clearQueue, "assign");
        clearQueue = cc11001100_hook("clearQueue", type, "assign");
        type = cc11001100_hook("type", undefined, "assign");
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }
      return this.each(function () {
        var dequeue = cc11001100_hook("dequeue", true, "var-init"),
          index = cc11001100_hook("index", type != null && type + "queueHooks", "var-init"),
          timers = cc11001100_hook("timers", jQuery.timers, "var-init"),
          data = cc11001100_hook("data", jQuery._data(this), "var-init");
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = cc11001100_hook("index", timers.length, "assign"); index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = cc11001100_hook("dequeue", false, "assign");
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function (type) {
      if (type !== false) {
        type = cc11001100_hook("type", type || "fx", "assign");
      }
      return this.each(function () {
        var index,
          data = cc11001100_hook("data", jQuery._data(this), "var-init"),
          queue = cc11001100_hook("queue", data[type + "queue"], "var-init"),
          hooks = cc11001100_hook("hooks", data[type + "queueHooks"], "var-init"),
          timers = cc11001100_hook("timers", jQuery.timers, "var-init"),
          length = cc11001100_hook("length", queue ? queue.length : 0, "var-init");
        data.finish = cc11001100_hook("data.finish", true, "assign");
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = cc11001100_hook("index", timers.length, "assign"); index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = cc11001100_hook("index", 0, "assign"); index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  function genFx(type, includeWidth) {
    cc11001100_hook("type", type, "function-parameter");
    cc11001100_hook("includeWidth", includeWidth, "function-parameter");
    var which,
      attrs = cc11001100_hook("attrs", {
        height: cc11001100_hook("height", type, "object-key-init")
      }, "var-init"),
      i = cc11001100_hook("i", 0, "var-init");
    includeWidth = cc11001100_hook("includeWidth", includeWidth ? 1 : 0, "assign");
    for (; i < 4; i += cc11001100_hook("i", 2 - includeWidth, "assign")) {
      which = cc11001100_hook("which", cssExpand[i], "assign");
      attrs["margin" + which] = cc11001100_hook("attrs[\"margin\" + which]", attrs["padding" + which] = cc11001100_hook("attrs[\"padding\" + which]", type, "assign"), "assign");
    }
    if (includeWidth) {
      attrs.opacity = cc11001100_hook("attrs.opacity", attrs.width = cc11001100_hook("attrs.width", type, "assign"), "assign");
    }
    return attrs;
  }
  jQuery.each({
    slideDown: cc11001100_hook("slideDown", genFx("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", genFx("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", genFx("toggle"), "object-key-init"),
    fadeIn: {
      opacity: cc11001100_hook("opacity", "show", "object-key-init")
    },
    fadeOut: {
      opacity: cc11001100_hook("opacity", "hide", "object-key-init")
    },
    fadeToggle: {
      opacity: cc11001100_hook("opacity", "toggle", "object-key-init")
    }
  }, function (name, props) {
    jQuery.fn[name] = cc11001100_hook("jQuery.fn[name]", function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    }, "assign");
  });
  jQuery.speed = cc11001100_hook("jQuery.speed", function (speed, easing, fn) {
    var opt = cc11001100_hook("opt", speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: cc11001100_hook("complete", fn || !fn && easing || jQuery.isFunction(speed) && speed, "object-key-init"),
      duration: cc11001100_hook("duration", speed, "object-key-init"),
      easing: cc11001100_hook("easing", fn && easing || easing && !jQuery.isFunction(easing) && easing, "object-key-init")
    }, "var-init");
    opt.duration = cc11001100_hook("opt.duration", jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, "assign");
    if (opt.queue == null || opt.queue === true) {
      opt.queue = cc11001100_hook("opt.queue", "fx", "assign");
    }
    opt.old = cc11001100_hook("opt.old", opt.complete, "assign");
    opt.complete = cc11001100_hook("opt.complete", function () {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    }, "assign");
    return opt;
  }, "assign");
  jQuery.easing = cc11001100_hook("jQuery.easing", {
    linear: function (p) {
      return p;
    },
    swing: function (p) {
      return .5 - Math.cos(p * Math.PI) / 2;
    }
  }, "assign");
  jQuery.timers = cc11001100_hook("jQuery.timers", [], "assign");
  jQuery.fx = cc11001100_hook("jQuery.fx", Tween.prototype.init, "assign");
  jQuery.fx.tick = cc11001100_hook("jQuery.fx.tick", function () {
    var timer,
      timers = cc11001100_hook("timers", jQuery.timers, "var-init"),
      i = cc11001100_hook("i", 0, "var-init");
    fxNow = cc11001100_hook("fxNow", jQuery.now(), "assign");
    for (; i < timers.length; i++) {
      timer = cc11001100_hook("timer", timers[i], "assign");
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = cc11001100_hook("fxNow", undefined, "assign");
  }, "assign");
  jQuery.fx.timer = cc11001100_hook("jQuery.fx.timer", function (timer) {
    if (timer() && jQuery.timers.push(timer)) {
      jQuery.fx.start();
    }
  }, "assign");
  jQuery.fx.interval = cc11001100_hook("jQuery.fx.interval", 13, "assign");
  jQuery.fx.start = cc11001100_hook("jQuery.fx.start", function () {
    if (!timerId) {
      timerId = cc11001100_hook("timerId", setInterval(jQuery.fx.tick, jQuery.fx.interval), "assign");
    }
  }, "assign");
  jQuery.fx.stop = cc11001100_hook("jQuery.fx.stop", function () {
    clearInterval(timerId);
    timerId = cc11001100_hook("timerId", null, "assign");
  }, "assign");
  jQuery.fx.speeds = cc11001100_hook("jQuery.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign");
  jQuery.fx.step = cc11001100_hook("jQuery.fx.step", {}, "assign");
  if (jQuery.expr && jQuery.expr.filters) {
    jQuery.expr.filters.animated = cc11001100_hook("jQuery.expr.filters.animated", function (elem) {
      return jQuery.grep(jQuery.timers, function (fn) {
        return elem === fn.elem;
      }).length;
    }, "assign");
  }
  jQuery.fn.offset = cc11001100_hook("jQuery.fn.offset", function (options) {
    if (arguments.length) {
      return options === undefined ? this : this.each(function (i) {
        jQuery.offset.setOffset(this, options, i);
      });
    }
    var docElem,
      win,
      box = cc11001100_hook("box", {
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      }, "var-init"),
      elem = cc11001100_hook("elem", this[0], "var-init"),
      doc = cc11001100_hook("doc", elem && elem.ownerDocument, "var-init");
    if (!doc) {
      return;
    }
    docElem = cc11001100_hook("docElem", doc.documentElement, "assign");
    if (!jQuery.contains(docElem, elem)) {
      return box;
    }
    if (typeof elem.getBoundingClientRect !== core_strundefined) {
      box = cc11001100_hook("box", elem.getBoundingClientRect(), "assign");
    }
    win = cc11001100_hook("win", getWindow(doc), "assign");
    return {
      top: cc11001100_hook("top", box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0), "object-key-init"),
      left: cc11001100_hook("left", box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0), "object-key-init")
    };
  }, "assign");
  jQuery.offset = cc11001100_hook("jQuery.offset", {
    setOffset: function (elem, options, i) {
      var position = cc11001100_hook("position", jQuery.css(elem, "position"), "var-init");
      if (position === "static") {
        elem.style.position = cc11001100_hook("elem.style.position", "relative", "assign");
      }
      var curElem = cc11001100_hook("curElem", jQuery(elem), "var-init"),
        curOffset = cc11001100_hook("curOffset", curElem.offset(), "var-init"),
        curCSSTop = cc11001100_hook("curCSSTop", jQuery.css(elem, "top"), "var-init"),
        curCSSLeft = cc11001100_hook("curCSSLeft", jQuery.css(elem, "left"), "var-init"),
        calculatePosition = cc11001100_hook("calculatePosition", (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1, "var-init"),
        props = cc11001100_hook("props", {}, "var-init"),
        curPosition = cc11001100_hook("curPosition", {}, "var-init"),
        curTop,
        curLeft;
      if (calculatePosition) {
        curPosition = cc11001100_hook("curPosition", curElem.position(), "assign");
        curTop = cc11001100_hook("curTop", curPosition.top, "assign");
        curLeft = cc11001100_hook("curLeft", curPosition.left, "assign");
      } else {
        curTop = cc11001100_hook("curTop", parseFloat(curCSSTop) || 0, "assign");
        curLeft = cc11001100_hook("curLeft", parseFloat(curCSSLeft) || 0, "assign");
      }
      if (jQuery.isFunction(options)) {
        options = cc11001100_hook("options", options.call(elem, i, curOffset), "assign");
      }
      if (options.top != null) {
        props.top = cc11001100_hook("props.top", options.top - curOffset.top + curTop, "assign");
      }
      if (options.left != null) {
        props.left = cc11001100_hook("props.left", options.left - curOffset.left + curLeft, "assign");
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  }, "assign");
  jQuery.fn.extend({
    position: function () {
      if (!this[0]) {
        return;
      }
      var offsetParent,
        offset,
        parentOffset = cc11001100_hook("parentOffset", {
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init")
        }, "var-init"),
        elem = cc11001100_hook("elem", this[0], "var-init");
      if (jQuery.css(elem, "position") === "fixed") {
        offset = cc11001100_hook("offset", elem.getBoundingClientRect(), "assign");
      } else {
        offsetParent = cc11001100_hook("offsetParent", this.offsetParent(), "assign");
        offset = cc11001100_hook("offset", this.offset(), "assign");
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = cc11001100_hook("parentOffset", offsetParent.offset(), "assign");
        }
        parentOffset.top += cc11001100_hook("parentOffset.top", jQuery.css(offsetParent[0], "borderTopWidth", true), "assign");
        parentOffset.left += cc11001100_hook("parentOffset.left", jQuery.css(offsetParent[0], "borderLeftWidth", true), "assign");
      }
      return {
        top: cc11001100_hook("top", offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true), "object-key-init"),
        left: cc11001100_hook("left", offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true), "object-key-init")
      };
    },
    offsetParent: function () {
      return this.map(function () {
        var offsetParent = cc11001100_hook("offsetParent", this.offsetParent || docElem, "var-init");
        while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = cc11001100_hook("offsetParent", offsetParent.offsetParent, "assign");
        }
        return offsetParent || docElem;
      });
    }
  });
  jQuery.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (method, prop) {
    var top = cc11001100_hook("top", /Y/.test(prop), "var-init");
    jQuery.fn[method] = cc11001100_hook("jQuery.fn[method]", function (val) {
      return jQuery.access(this, function (elem, method, val) {
        var win = cc11001100_hook("win", getWindow(elem), "var-init");
        if (val === undefined) {
          return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
        } else {
          elem[method] = cc11001100_hook("elem[method]", val, "assign");
        }
      }, method, val, arguments.length, null);
    }, "assign");
  });
  function getWindow(elem) {
    cc11001100_hook("elem", elem, "function-parameter");
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
  }
  jQuery.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (name, type) {
    jQuery.each({
      padding: cc11001100_hook("padding", "inner" + name, "object-key-init"),
      content: cc11001100_hook("content", type, "object-key-init"),
      "": cc11001100_hook("", "outer" + name, "object-key-init")
    }, function (defaultExtra, funcName) {
      jQuery.fn[funcName] = cc11001100_hook("jQuery.fn[funcName]", function (margin, value) {
        var chainable = cc11001100_hook("chainable", arguments.length && (defaultExtra || typeof margin !== "boolean"), "var-init"),
          extra = cc11001100_hook("extra", defaultExtra || (margin === true || value === true ? "margin" : "border"), "var-init");
        return jQuery.access(this, function (elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = cc11001100_hook("doc", elem.documentElement, "assign");
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      }, "assign");
    });
  });
  jQuery.fn.size = cc11001100_hook("jQuery.fn.size", function () {
    return this.length;
  }, "assign");
  jQuery.fn.andSelf = cc11001100_hook("jQuery.fn.andSelf", jQuery.fn.addBack, "assign");
  if (typeof module === "object" && module && typeof module.exports === "object") {
    module.exports = cc11001100_hook("module.exports", jQuery, "assign");
  } else {
    window.jQuery = cc11001100_hook("window.jQuery", window.$ = cc11001100_hook("window.$", jQuery, "assign"), "assign");
    if (typeof define === "function" && define.amd) {
      define("jquery", ["require"], function (require) {
        return jQuery;
      });
    }
  }
})(window);