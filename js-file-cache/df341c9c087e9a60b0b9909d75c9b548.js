/*!UAP v1.2.3  |  from SGCC */ ///////////////////Base Libary Start////////////////////////////
(function (global, factory) {
  if (typeof define === "function" && define.amd) define(function () {
    return factory(global);
  });else factory(global);
})(this, function (window) {
  var Zepto = cc11001100_hook("Zepto", function () {
    var undefined,
      key,
      $,
      classList,
      emptyArray = cc11001100_hook("emptyArray", [], "var-init"),
      concat = cc11001100_hook("concat", emptyArray.concat, "var-init"),
      filter = cc11001100_hook("filter", emptyArray.filter, "var-init"),
      slice = cc11001100_hook("slice", emptyArray.slice, "var-init"),
      document = cc11001100_hook("document", window.document, "var-init"),
      elementDisplay = cc11001100_hook("elementDisplay", {}, "var-init"),
      classCache = cc11001100_hook("classCache", {}, "var-init"),
      cssNumber = cc11001100_hook("cssNumber", {
        "column-count": cc11001100_hook("column-count", 1, "object-key-init"),
        columns: cc11001100_hook("columns", 1, "object-key-init"),
        "font-weight": cc11001100_hook("font-weight", 1, "object-key-init"),
        "line-height": cc11001100_hook("line-height", 1, "object-key-init"),
        opacity: cc11001100_hook("opacity", 1, "object-key-init"),
        "z-index": cc11001100_hook("z-index", 1, "object-key-init"),
        zoom: cc11001100_hook("zoom", 1, "object-key-init")
      }, "var-init"),
      fragmentRE = cc11001100_hook("fragmentRE", /^\s*<(\w+|!)[^>]*>/, "var-init"),
      singleTagRE = cc11001100_hook("singleTagRE", /^<(\w+)\s*\/?>(?:<\/\1>|)$/, "var-init"),
      tagExpanderRE = cc11001100_hook("tagExpanderRE", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "var-init"),
      rootNodeRE = cc11001100_hook("rootNodeRE", /^(?:body|html)$/i, "var-init"),
      capitalRE = cc11001100_hook("capitalRE", /([A-Z])/g, "var-init"),
      methodAttributes = cc11001100_hook("methodAttributes", ["val", "css", "html", "text", "data", "width", "height", "offset"], "var-init"),
      adjacencyOperators = cc11001100_hook("adjacencyOperators", ["after", "prepend", "before", "append"], "var-init"),
      table = cc11001100_hook("table", document.createElement("table"), "var-init"),
      tableRow = cc11001100_hook("tableRow", document.createElement("tr"), "var-init"),
      containers = cc11001100_hook("containers", {
        tr: cc11001100_hook("tr", document.createElement("tbody"), "object-key-init"),
        tbody: cc11001100_hook("tbody", table, "object-key-init"),
        thead: cc11001100_hook("thead", table, "object-key-init"),
        tfoot: cc11001100_hook("tfoot", table, "object-key-init"),
        td: cc11001100_hook("td", tableRow, "object-key-init"),
        th: cc11001100_hook("th", tableRow, "object-key-init"),
        "*": cc11001100_hook("*", document.createElement("div"), "object-key-init")
      }, "var-init"),
      readyRE = cc11001100_hook("readyRE", /complete|loaded|interactive/, "var-init"),
      simpleSelectorRE = cc11001100_hook("simpleSelectorRE", /^[\w-]*$/, "var-init"),
      class2type = cc11001100_hook("class2type", {}, "var-init"),
      toString = cc11001100_hook("toString", class2type.toString, "var-init"),
      zepto = cc11001100_hook("zepto", {}, "var-init"),
      camelize,
      uniq,
      tempParent = cc11001100_hook("tempParent", document.createElement("div"), "var-init"),
      propMap = cc11001100_hook("propMap", {
        tabindex: cc11001100_hook("tabindex", "tabIndex", "object-key-init"),
        readonly: cc11001100_hook("readonly", "readOnly", "object-key-init"),
        "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
        "class": cc11001100_hook("class", "className", "object-key-init"),
        maxlength: cc11001100_hook("maxlength", "maxLength", "object-key-init"),
        cellspacing: cc11001100_hook("cellspacing", "cellSpacing", "object-key-init"),
        cellpadding: cc11001100_hook("cellpadding", "cellPadding", "object-key-init"),
        rowspan: cc11001100_hook("rowspan", "rowSpan", "object-key-init"),
        colspan: cc11001100_hook("colspan", "colSpan", "object-key-init"),
        usemap: cc11001100_hook("usemap", "useMap", "object-key-init"),
        frameborder: cc11001100_hook("frameborder", "frameBorder", "object-key-init"),
        contenteditable: cc11001100_hook("contenteditable", "contentEditable", "object-key-init")
      }, "var-init"),
      isArray = cc11001100_hook("isArray", Array.isArray || function (object) {
        return object instanceof Array;
      }, "var-init");
    zepto.matches = cc11001100_hook("zepto.matches", function (element, selector) {
      if (!selector || !element || element.nodeType !== 1) return false;
      var matchesSelector = cc11001100_hook("matchesSelector", element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector, "var-init");
      if (matchesSelector) return matchesSelector.call(element, selector);
      var match,
        parent = cc11001100_hook("parent", element.parentNode, "var-init"),
        temp = cc11001100_hook("temp", !parent, "var-init");
      if (temp) (parent = cc11001100_hook("parent", tempParent, "assign")).appendChild(element);
      match = cc11001100_hook("match", ~zepto.qsa(parent, selector).indexOf(element), "assign");
      temp && tempParent.removeChild(element);
      return match;
    }, "assign");
    function type(obj) {
      cc11001100_hook("obj", obj, "function-parameter");
      return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
    }
    function isFunction(value) {
      cc11001100_hook("value", value, "function-parameter");
      return type(value) == "function";
    }
    function isWindow(obj) {
      cc11001100_hook("obj", obj, "function-parameter");
      return obj != null && obj == obj.window;
    }
    function isDocument(obj) {
      cc11001100_hook("obj", obj, "function-parameter");
      return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    }
    function isObject(obj) {
      cc11001100_hook("obj", obj, "function-parameter");
      return type(obj) == "object";
    }
    function isPlainObject(obj) {
      cc11001100_hook("obj", obj, "function-parameter");
      return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    }
    function likeArray(obj) {
      cc11001100_hook("obj", obj, "function-parameter");
      var length = cc11001100_hook("length", !!obj && "length" in obj && obj.length, "var-init"),
        type = cc11001100_hook("type", $.type(obj), "var-init");
      return "function" != type && !isWindow(obj) && ("array" == type || length === 0 || typeof length == "number" && length > 0 && length - 1 in obj);
    }
    function compact(array) {
      cc11001100_hook("array", array, "function-parameter");
      return filter.call(array, function (item) {
        return item != null;
      });
    }
    function flatten(array) {
      cc11001100_hook("array", array, "function-parameter");
      return array.length > 0 ? $.fn.concat.apply([], array) : array;
    }
    camelize = cc11001100_hook("camelize", function (str) {
      return str.replace(/-+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : "";
      });
    }, "assign");
    function dasherize(str) {
      cc11001100_hook("str", str, "function-parameter");
      return str.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
    }
    uniq = cc11001100_hook("uniq", function (array) {
      return filter.call(array, function (item, idx) {
        return array.indexOf(item) == idx;
      });
    }, "assign");
    function classRE(name) {
      cc11001100_hook("name", name, "function-parameter");
      return name in classCache ? classCache[name] : classCache[name] = cc11001100_hook("classCache[name]", new RegExp("(^|\\s)" + name + "(\\s|$)"), "assign");
    }
    function maybeAddPx(name, value) {
      cc11001100_hook("name", name, "function-parameter");
      cc11001100_hook("value", value, "function-parameter");
      return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
    }
    function defaultDisplay(nodeName) {
      cc11001100_hook("nodeName", nodeName, "function-parameter");
      var element, display;
      if (!elementDisplay[nodeName]) {
        element = cc11001100_hook("element", document.createElement(nodeName), "assign");
        document.body.appendChild(element);
        display = cc11001100_hook("display", getComputedStyle(element, "").getPropertyValue("display"), "assign");
        element.parentNode.removeChild(element);
        display == "none" && (display = cc11001100_hook("display", "block", "assign"));
        elementDisplay[nodeName] = cc11001100_hook("elementDisplay[nodeName]", display, "assign");
      }
      return elementDisplay[nodeName];
    }
    function children(element) {
      cc11001100_hook("element", element, "function-parameter");
      return "children" in element ? slice.call(element.children) : $.map(element.childNodes, function (node) {
        if (node.nodeType == 1) return node;
      });
    }
    function Z(dom, selector) {
      cc11001100_hook("dom", dom, "function-parameter");
      cc11001100_hook("selector", selector, "function-parameter");
      var i,
        len = cc11001100_hook("len", dom ? dom.length : 0, "var-init");
      for (i = cc11001100_hook("i", 0, "assign"); i < len; i++) this[i] = cc11001100_hook("this[i]", dom[i], "assign");
      this.length = cc11001100_hook("this.length", len, "assign");
      this.selector = cc11001100_hook("this.selector", selector || "", "assign");
    }
    zepto.fragment = cc11001100_hook("zepto.fragment", function (html, name, properties) {
      var dom, nodes, container;
      if (singleTagRE.test(html)) dom = cc11001100_hook("dom", $(document.createElement(RegExp.$1)), "assign");
      if (!dom) {
        if (html.replace) html = cc11001100_hook("html", html.replace(tagExpanderRE, "<$1></$2>"), "assign");
        if (name === undefined) name = cc11001100_hook("name", fragmentRE.test(html) && RegExp.$1, "assign");
        if (!(name in containers)) name = cc11001100_hook("name", "*", "assign");
        container = cc11001100_hook("container", containers[name], "assign");
        container.innerHTML = cc11001100_hook("container.innerHTML", "" + html, "assign");
        dom = cc11001100_hook("dom", $.each(slice.call(container.childNodes), function () {
          container.removeChild(this);
        }), "assign");
      }
      if (isPlainObject(properties)) {
        nodes = cc11001100_hook("nodes", $(dom), "assign");
        $.each(properties, function (key, value) {
          if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);
        });
      }
      return dom;
    }, "assign");
    zepto.Z = cc11001100_hook("zepto.Z", function (dom, selector) {
      return new Z(dom, selector);
    }, "assign");
    zepto.isZ = cc11001100_hook("zepto.isZ", function (object) {
      return object instanceof zepto.Z;
    }, "assign");
    zepto.init = cc11001100_hook("zepto.init", function (selector, context) {
      var dom;
      if (!selector) return zepto.Z();else if (typeof selector == "string") {
        selector = cc11001100_hook("selector", selector.trim(), "assign");
        if (selector[0] == "<" && fragmentRE.test(selector)) dom = cc11001100_hook("dom", zepto.fragment(selector, RegExp.$1, context), "assign"), selector = cc11001100_hook("selector", null, "assign");else if (context !== undefined) return $(context).find(selector);else dom = cc11001100_hook("dom", zepto.qsa(document, selector), "assign");
      } else if (isFunction(selector)) return $(document).ready(selector);else if (zepto.isZ(selector)) return selector;else {
        if (isArray(selector)) dom = cc11001100_hook("dom", compact(selector), "assign");else if (isObject(selector)) dom = cc11001100_hook("dom", [selector], "assign"), selector = cc11001100_hook("selector", null, "assign");else if (fragmentRE.test(selector)) dom = cc11001100_hook("dom", zepto.fragment(selector.trim(), RegExp.$1, context), "assign"), selector = cc11001100_hook("selector", null, "assign");else if (context !== undefined) return $(context).find(selector);else dom = cc11001100_hook("dom", zepto.qsa(document, selector), "assign");
      }
      return zepto.Z(dom, selector);
    }, "assign");
    $ = cc11001100_hook("$", function (selector, context) {
      return zepto.init(selector, context);
    }, "assign");
    function extend(target, source, deep) {
      cc11001100_hook("target", target, "function-parameter");
      cc11001100_hook("source", source, "function-parameter");
      cc11001100_hook("deep", deep, "function-parameter");
      for (key in source) if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = cc11001100_hook("target[key]", {}, "assign");
        if (isArray(source[key]) && !isArray(target[key])) target[key] = cc11001100_hook("target[key]", [], "assign");
        extend(target[key], source[key], deep);
      } else if (source[key] !== undefined) target[key] = cc11001100_hook("target[key]", source[key], "assign");
    }
    $.extend = cc11001100_hook("$.extend", function (target) {
      var deep,
        args = cc11001100_hook("args", slice.call(arguments, 1), "var-init");
      if (typeof target == "boolean") {
        deep = cc11001100_hook("deep", target, "assign");
        target = cc11001100_hook("target", args.shift(), "assign");
      }
      args.forEach(function (arg) {
        extend(target, arg, deep);
      });
      return target;
    }, "assign");
    zepto.qsa = cc11001100_hook("zepto.qsa", function (element, selector) {
      var found,
        maybeID = cc11001100_hook("maybeID", selector[0] == "#", "var-init"),
        maybeClass = cc11001100_hook("maybeClass", !maybeID && selector[0] == ".", "var-init"),
        nameOnly = cc11001100_hook("nameOnly", maybeID || maybeClass ? selector.slice(1) : selector, "var-init"),
        isSimple = cc11001100_hook("isSimple", simpleSelectorRE.test(nameOnly), "var-init");
      return element.getElementById && isSimple && maybeID ? (found = cc11001100_hook("found", element.getElementById(nameOnly), "assign")) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11 ? [] : slice.call(isSimple && !maybeID && element.getElementsByClassName ? maybeClass ? element.getElementsByClassName(nameOnly) : element.getElementsByTagName(selector) : element.querySelectorAll(selector));
    }, "assign");
    function filtered(nodes, selector) {
      cc11001100_hook("nodes", nodes, "function-parameter");
      cc11001100_hook("selector", selector, "function-parameter");
      return selector == null ? $(nodes) : $(nodes).filter(selector);
    }
    $.contains = cc11001100_hook("$.contains", document.documentElement.contains ? function (parent, node) {
      return parent !== node && parent.contains(node);
    } : function (parent, node) {
      while (node && (node = cc11001100_hook("node", node.parentNode, "assign"))) if (node === parent) return true;
      return false;
    }, "assign");
    function funcArg(context, arg, idx, payload) {
      cc11001100_hook("context", context, "function-parameter");
      cc11001100_hook("arg", arg, "function-parameter");
      cc11001100_hook("idx", idx, "function-parameter");
      cc11001100_hook("payload", payload, "function-parameter");
      return isFunction(arg) ? arg.call(context, idx, payload) : arg;
    }
    function setAttribute(node, name, value) {
      cc11001100_hook("node", node, "function-parameter");
      cc11001100_hook("name", name, "function-parameter");
      cc11001100_hook("value", value, "function-parameter");
      value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
    }
    function className(node, value) {
      cc11001100_hook("node", node, "function-parameter");
      cc11001100_hook("value", value, "function-parameter");
      var klass = cc11001100_hook("klass", node.className || "", "var-init"),
        svg = cc11001100_hook("svg", klass && klass.baseVal !== undefined, "var-init");
      if (value === undefined) return svg ? klass.baseVal : klass;
      svg ? klass.baseVal = cc11001100_hook("klass.baseVal", value, "assign") : node.className = cc11001100_hook("node.className", value, "assign");
    }
    function deserializeValue(value) {
      cc11001100_hook("value", value, "function-parameter");
      try {
        return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
      } catch (e) {
        return value;
      }
    }
    $.type = cc11001100_hook("$.type", type, "assign");
    $.isFunction = cc11001100_hook("$.isFunction", isFunction, "assign");
    $.isWindow = cc11001100_hook("$.isWindow", isWindow, "assign");
    $.isArray = cc11001100_hook("$.isArray", isArray, "assign");
    $.isPlainObject = cc11001100_hook("$.isPlainObject", isPlainObject, "assign");
    $.isEmptyObject = cc11001100_hook("$.isEmptyObject", function (obj) {
      var name;
      for (name in obj) return false;
      return true;
    }, "assign");
    $.isNumeric = cc11001100_hook("$.isNumeric", function (val) {
      var num = cc11001100_hook("num", Number(val), "var-init"),
        type = cc11001100_hook("type", typeof val, "var-init");
      return val != null && type != "boolean" && (type != "string" || val.length) && !isNaN(num) && isFinite(num) || false;
    }, "assign");
    $.inArray = cc11001100_hook("$.inArray", function (elem, array, i) {
      return emptyArray.indexOf.call(array, elem, i);
    }, "assign");
    $.camelCase = cc11001100_hook("$.camelCase", camelize, "assign");
    $.trim = cc11001100_hook("$.trim", function (str) {
      return str == null ? "" : String.prototype.trim.call(str);
    }, "assign");
    $.uuid = cc11001100_hook("$.uuid", 0, "assign");
    $.support = cc11001100_hook("$.support", {}, "assign");
    $.expr = cc11001100_hook("$.expr", {}, "assign");
    $.noop = cc11001100_hook("$.noop", function () {}, "assign");
    $.map = cc11001100_hook("$.map", function (elements, callback) {
      var value,
        values = cc11001100_hook("values", [], "var-init"),
        i,
        key;
      if (likeArray(elements)) for (i = cc11001100_hook("i", 0, "assign"); i < elements.length; i++) {
        value = cc11001100_hook("value", callback(elements[i], i), "assign");
        if (value != null) values.push(value);
      } else for (key in elements) {
        value = cc11001100_hook("value", callback(elements[key], key), "assign");
        if (value != null) values.push(value);
      }
      return flatten(values);
    }, "assign");
    $.each = cc11001100_hook("$.each", function (elements, callback) {
      var i, key;
      if (likeArray(elements)) {
        for (i = cc11001100_hook("i", 0, "assign"); i < elements.length; i++) if (callback.call(elements[i], i, elements[i]) === false) return elements;
      } else {
        for (key in elements) if (callback.call(elements[key], key, elements[key]) === false) return elements;
      }
      return elements;
    }, "assign");
    $.grep = cc11001100_hook("$.grep", function (elements, callback) {
      return filter.call(elements, callback);
    }, "assign");
    if (window.JSON) $.parseJSON = cc11001100_hook("$.parseJSON", JSON.parse, "assign");
    $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
      class2type["[object " + name + "]"] = cc11001100_hook("class2type[\"[object \" + name + \"]\"]", name.toLowerCase(), "assign");
    });
    $.fn = cc11001100_hook("$.fn", {
      constructor: cc11001100_hook("constructor", zepto.Z, "object-key-init"),
      length: cc11001100_hook("length", 0, "object-key-init"),
      forEach: cc11001100_hook("forEach", emptyArray.forEach, "object-key-init"),
      reduce: cc11001100_hook("reduce", emptyArray.reduce, "object-key-init"),
      push: cc11001100_hook("push", emptyArray.push, "object-key-init"),
      sort: cc11001100_hook("sort", emptyArray.sort, "object-key-init"),
      splice: cc11001100_hook("splice", emptyArray.splice, "object-key-init"),
      indexOf: cc11001100_hook("indexOf", emptyArray.indexOf, "object-key-init"),
      concat: function () {
        var i,
          value,
          args = cc11001100_hook("args", [], "var-init");
        for (i = cc11001100_hook("i", 0, "assign"); i < arguments.length; i++) {
          value = cc11001100_hook("value", arguments[i], "assign");
          args[i] = cc11001100_hook("args[i]", zepto.isZ(value) ? value.toArray() : value, "assign");
        }
        return concat.apply(zepto.isZ(this) ? this.toArray() : this, args);
      },
      map: function (fn) {
        return $($.map(this, function (el, i) {
          return fn.call(el, i, el);
        }));
      },
      slice: function () {
        return $(slice.apply(this, arguments));
      },
      ready: function (callback) {
        if (readyRE.test(document.readyState) && document.body) callback($);else document.addEventListener("DOMContentLoaded", function () {
          callback($);
        }, false);
        return this;
      },
      get: function (idx) {
        return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
      },
      toArray: function () {
        return this.get();
      },
      size: function () {
        return this.length;
      },
      remove: function () {
        return this.each(function () {
          if (this.parentNode != null) this.parentNode.removeChild(this);
        });
      },
      each: function (callback) {
        emptyArray.every.call(this, function (el, idx) {
          return callback.call(el, idx, el) !== false;
        });
        return this;
      },
      filter: function (selector) {
        if (isFunction(selector)) return this.not(this.not(selector));
        return $(filter.call(this, function (element) {
          return zepto.matches(element, selector);
        }));
      },
      add: function (selector, context) {
        return $(uniq(this.concat($(selector, context))));
      },
      is: function (selector) {
        return this.length > 0 && zepto.matches(this[0], selector);
      },
      not: function (selector) {
        var nodes = cc11001100_hook("nodes", [], "var-init");
        if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {
          if (!selector.call(this, idx)) nodes.push(this);
        });else {
          var excludes = cc11001100_hook("excludes", typeof selector == "string" ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? slice.call(selector) : $(selector), "var-init");
          this.forEach(function (el) {
            if (excludes.indexOf(el) < 0) nodes.push(el);
          });
        }
        return $(nodes);
      },
      has: function (selector) {
        return this.filter(function () {
          return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
        });
      },
      eq: function (idx) {
        return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
      },
      first: function () {
        var el = cc11001100_hook("el", this[0], "var-init");
        return el && !isObject(el) ? el : $(el);
      },
      last: function () {
        var el = cc11001100_hook("el", this[this.length - 1], "var-init");
        return el && !isObject(el) ? el : $(el);
      },
      find: function (selector) {
        var result,
          $this = cc11001100_hook("$this", this, "var-init");
        if (!selector) result = cc11001100_hook("result", $(), "assign");else if (typeof selector == "object") result = cc11001100_hook("result", $(selector).filter(function () {
          var node = cc11001100_hook("node", this, "var-init");
          return emptyArray.some.call($this, function (parent) {
            return $.contains(parent, node);
          });
        }), "assign");else if (this.length == 1) result = cc11001100_hook("result", $(zepto.qsa(this[0], selector)), "assign");else result = cc11001100_hook("result", this.map(function () {
          return zepto.qsa(this, selector);
        }), "assign");
        return result;
      },
      closest: function (selector, context) {
        var nodes = cc11001100_hook("nodes", [], "var-init"),
          collection = cc11001100_hook("collection", typeof selector == "object" && $(selector), "var-init");
        this.each(function (_, node) {
          while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) node = cc11001100_hook("node", node !== context && !isDocument(node) && node.parentNode, "assign");
          if (node && nodes.indexOf(node) < 0) nodes.push(node);
        });
        return $(nodes);
      },
      parents: function (selector) {
        var ancestors = cc11001100_hook("ancestors", [], "var-init"),
          nodes = cc11001100_hook("nodes", this, "var-init");
        while (nodes.length > 0) nodes = cc11001100_hook("nodes", $.map(nodes, function (node) {
          if ((node = cc11001100_hook("node", node.parentNode, "assign")) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node);
            return node;
          }
        }), "assign");
        return filtered(ancestors, selector);
      },
      parent: function (selector) {
        return filtered(uniq(this.pluck("parentNode")), selector);
      },
      children: function (selector) {
        return filtered(this.map(function () {
          return children(this);
        }), selector);
      },
      contents: function () {
        return this.map(function () {
          return this.contentDocument || slice.call(this.childNodes);
        });
      },
      siblings: function (selector) {
        return filtered(this.map(function (i, el) {
          return filter.call(children(el.parentNode), function (child) {
            return child !== el;
          });
        }), selector);
      },
      empty: function () {
        return this.each(function () {
          this.innerHTML = cc11001100_hook("this.innerHTML", "", "assign");
        });
      },
      pluck: function (property) {
        return $.map(this, function (el) {
          return el[property];
        });
      },
      show: function () {
        return this.each(function () {
          this.style.display == "none" && (this.style.display = cc11001100_hook("this.style.display", "", "assign"));
          if (getComputedStyle(this, "").getPropertyValue("display") == "none") this.style.display = cc11001100_hook("this.style.display", defaultDisplay(this.nodeName), "assign");
        });
      },
      replaceWith: function (newContent) {
        return this.before(newContent).remove();
      },
      wrap: function (structure) {
        var func = cc11001100_hook("func", isFunction(structure), "var-init");
        if (this[0] && !func) var dom = cc11001100_hook("dom", $(structure).get(0), "var-init"),
          clone = cc11001100_hook("clone", dom.parentNode || this.length > 1, "var-init");
        return this.each(function (index) {
          $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
        });
      },
      wrapAll: function (structure) {
        if (this[0]) {
          $(this[0]).before(structure = cc11001100_hook("structure", $(structure), "assign"));
          var children;
          while ((children = cc11001100_hook("children", structure.children(), "assign")).length) structure = cc11001100_hook("structure", children.first(), "assign");
          $(structure).append(this);
        }
        return this;
      },
      wrapInner: function (structure) {
        var func = cc11001100_hook("func", isFunction(structure), "var-init");
        return this.each(function (index) {
          var self = cc11001100_hook("self", $(this), "var-init"),
            contents = cc11001100_hook("contents", self.contents(), "var-init"),
            dom = cc11001100_hook("dom", func ? structure.call(this, index) : structure, "var-init");
          contents.length ? contents.wrapAll(dom) : self.append(dom);
        });
      },
      unwrap: function () {
        this.parent().each(function () {
          $(this).replaceWith($(this).children());
        });
        return this;
      },
      clone: function () {
        return this.map(function () {
          return this.cloneNode(true);
        });
      },
      hide: function () {
        return this.css("display", "none");
      },
      toggle: function (setting) {
        return this.each(function () {
          var el = cc11001100_hook("el", $(this), "var-init");
          (setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
        });
      },
      prev: function (selector) {
        return $(this.pluck("previousElementSibling")).filter(selector || "*");
      },
      next: function (selector) {
        return $(this.pluck("nextElementSibling")).filter(selector || "*");
      },
      html: function (html) {
        return 0 in arguments ? this.each(function (idx) {
          var originHtml = cc11001100_hook("originHtml", this.innerHTML, "var-init");
          $(this).empty().append(funcArg(this, html, idx, originHtml));
        }) : 0 in this ? this[0].innerHTML : null;
      },
      text: function (text) {
        return 0 in arguments ? this.each(function (idx) {
          var newText = cc11001100_hook("newText", funcArg(this, text, idx, this.textContent), "var-init");
          this.textContent = cc11001100_hook("this.textContent", newText == null ? "" : "" + newText, "assign");
        }) : 0 in this ? this.pluck("textContent").join("") : null;
      },
      attr: function (name, value) {
        var result;
        return typeof name == "string" && !(1 in arguments) ? 0 in this && this[0].nodeType == 1 && (result = cc11001100_hook("result", this[0].getAttribute(name), "assign")) != null ? result : undefined : this.each(function (idx) {
          if (this.nodeType !== 1) return;
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key]);else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
        });
      },
      removeAttr: function (name) {
        return this.each(function () {
          this.nodeType === 1 && name.split(" ").forEach(function (attribute) {
            setAttribute(this, attribute);
          }, this);
        });
      },
      prop: function (name, value) {
        name = cc11001100_hook("name", propMap[name] || name, "assign");
        return 1 in arguments ? this.each(function (idx) {
          this[name] = cc11001100_hook("this[name]", funcArg(this, value, idx, this[name]), "assign");
        }) : this[0] && this[0][name];
      },
      removeProp: function (name) {
        name = cc11001100_hook("name", propMap[name] || name, "assign");
        return this.each(function () {
          delete this[name];
        });
      },
      data: function (name, value) {
        var attrName = cc11001100_hook("attrName", "data-" + name.replace(capitalRE, "-$1").toLowerCase(), "var-init");
        var data = cc11001100_hook("data", 1 in arguments ? this.attr(attrName, value) : this.attr(attrName), "var-init");
        return data !== null ? deserializeValue(data) : undefined;
      },
      val: function (value) {
        if (0 in arguments) {
          if (value == null) value = cc11001100_hook("value", "", "assign");
          return this.each(function (idx) {
            this.value = cc11001100_hook("this.value", funcArg(this, value, idx, this.value), "assign");
          });
        } else {
          return this[0] && (this[0].multiple ? $(this[0]).find("option").filter(function () {
            return this.selected;
          }).pluck("value") : this[0].value);
        }
      },
      offset: function (coordinates) {
        if (coordinates) return this.each(function (index) {
          var $this = cc11001100_hook("$this", $(this), "var-init"),
            coords = cc11001100_hook("coords", funcArg(this, coordinates, index, $this.offset()), "var-init"),
            parentOffset = cc11001100_hook("parentOffset", $this.offsetParent().offset(), "var-init"),
            props = cc11001100_hook("props", {
              top: cc11001100_hook("top", coords.top - parentOffset.top, "object-key-init"),
              left: cc11001100_hook("left", coords.left - parentOffset.left, "object-key-init")
            }, "var-init");
          if ($this.css("position") == "static") props["position"] = cc11001100_hook("props[\"position\"]", "relative", "assign");
          $this.css(props);
        });
        if (!this.length) return null;
        if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0])) return {
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init")
        };
        var obj = cc11001100_hook("obj", this[0].getBoundingClientRect(), "var-init");
        return {
          left: cc11001100_hook("left", obj.left + window.pageXOffset, "object-key-init"),
          top: cc11001100_hook("top", obj.top + window.pageYOffset, "object-key-init"),
          width: cc11001100_hook("width", Math.round(obj.width), "object-key-init"),
          height: cc11001100_hook("height", Math.round(obj.height), "object-key-init")
        };
      },
      css: function (property, value) {
        if (arguments.length < 2) {
          var element = cc11001100_hook("element", this[0], "var-init");
          if (typeof property == "string") {
            if (!element) return;
            return element.style[camelize(property)] || getComputedStyle(element, "").getPropertyValue(property);
          } else if (isArray(property)) {
            if (!element) return;
            var props = cc11001100_hook("props", {}, "var-init");
            var computedStyle = cc11001100_hook("computedStyle", getComputedStyle(element, ""), "var-init");
            $.each(property, function (_, prop) {
              props[prop] = cc11001100_hook("props[prop]", element.style[camelize(prop)] || computedStyle.getPropertyValue(prop), "assign");
            });
            return props;
          }
        }
        var css = cc11001100_hook("css", "", "var-init");
        if (type(property) == "string") {
          if (!value && value !== 0) this.each(function () {
            this.style.removeProperty(dasherize(property));
          });else css = cc11001100_hook("css", dasherize(property) + ":" + maybeAddPx(property, value), "assign");
        } else {
          for (key in property) if (!property[key] && property[key] !== 0) this.each(function () {
            this.style.removeProperty(dasherize(key));
          });else css += cc11001100_hook("css", dasherize(key) + ":" + maybeAddPx(key, property[key]) + ";", "assign");
        }
        return this.each(function () {
          this.style.cssText += cc11001100_hook("this.style.cssText", ";" + css, "assign");
        });
      },
      index: function (element) {
        return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
      },
      hasClass: function (name) {
        if (!name) return false;
        return emptyArray.some.call(this, function (el) {
          return this.test(className(el));
        }, classRE(name));
      },
      addClass: function (name) {
        if (!name) return this;
        return this.each(function (idx) {
          if (!("className" in this)) return;
          classList = cc11001100_hook("classList", [], "assign");
          var cls = cc11001100_hook("cls", className(this), "var-init"),
            newName = cc11001100_hook("newName", funcArg(this, name, idx, cls), "var-init");
          newName.split(/\s+/g).forEach(function (klass) {
            if (!$(this).hasClass(klass)) classList.push(klass);
          }, this);
          classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
        });
      },
      removeClass: function (name) {
        return this.each(function (idx) {
          if (!("className" in this)) return;
          if (name === undefined) return className(this, "");
          classList = cc11001100_hook("classList", className(this), "assign");
          funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
            classList = cc11001100_hook("classList", classList.replace(classRE(klass), " "), "assign");
          });
          className(this, classList.trim());
        });
      },
      toggleClass: function (name, when) {
        if (!name) return this;
        return this.each(function (idx) {
          var $this = cc11001100_hook("$this", $(this), "var-init"),
            names = cc11001100_hook("names", funcArg(this, name, idx, className(this)), "var-init");
          names.split(/\s+/g).forEach(function (klass) {
            (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
          });
        });
      },
      scrollTop: function (value) {
        if (!this.length) return;
        var hasScrollTop = cc11001100_hook("hasScrollTop", "scrollTop" in this[0], "var-init");
        if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
        return this.each(hasScrollTop ? function () {
          this.scrollTop = cc11001100_hook("this.scrollTop", value, "assign");
        } : function () {
          this.scrollTo(this.scrollX, value);
        });
      },
      scrollLeft: function (value) {
        if (!this.length) return;
        var hasScrollLeft = cc11001100_hook("hasScrollLeft", "scrollLeft" in this[0], "var-init");
        if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
        return this.each(hasScrollLeft ? function () {
          this.scrollLeft = cc11001100_hook("this.scrollLeft", value, "assign");
        } : function () {
          this.scrollTo(value, this.scrollY);
        });
      },
      position: function () {
        if (!this.length) return;
        var elem = cc11001100_hook("elem", this[0], "var-init"),
          offsetParent = cc11001100_hook("offsetParent", this.offsetParent(), "var-init"),
          offset = cc11001100_hook("offset", this.offset(), "var-init"),
          parentOffset = cc11001100_hook("parentOffset", rootNodeRE.test(offsetParent[0].nodeName) ? {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          } : offsetParent.offset(), "var-init");
        offset.top -= cc11001100_hook("offset.top", parseFloat($(elem).css("margin-top")) || 0, "assign");
        offset.left -= cc11001100_hook("offset.left", parseFloat($(elem).css("margin-left")) || 0, "assign");
        parentOffset.top += cc11001100_hook("parentOffset.top", parseFloat($(offsetParent[0]).css("border-top-width")) || 0, "assign");
        parentOffset.left += cc11001100_hook("parentOffset.left", parseFloat($(offsetParent[0]).css("border-left-width")) || 0, "assign");
        return {
          top: cc11001100_hook("top", offset.top - parentOffset.top, "object-key-init"),
          left: cc11001100_hook("left", offset.left - parentOffset.left, "object-key-init")
        };
      },
      offsetParent: function () {
        return this.map(function () {
          var parent = cc11001100_hook("parent", this.offsetParent || document.body, "var-init");
          while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") parent = cc11001100_hook("parent", parent.offsetParent, "assign");
          return parent;
        });
      }
    }, "assign");
    $.fn.detach = cc11001100_hook("$.fn.detach", $.fn.remove, "assign");
    ["width", "height"].forEach(function (dimension) {
      var dimensionProperty = cc11001100_hook("dimensionProperty", dimension.replace(/./, function (m) {
        return m[0].toUpperCase();
      }), "var-init");
      $.fn[dimension] = cc11001100_hook("$.fn[dimension]", function (value) {
        var offset,
          el = cc11001100_hook("el", this[0], "var-init");
        if (value === undefined) return isWindow(el) ? el["inner" + dimensionProperty] : isDocument(el) ? el.documentElement["scroll" + dimensionProperty] : (offset = cc11001100_hook("offset", this.offset(), "assign")) && offset[dimension];else return this.each(function (idx) {
          el = cc11001100_hook("el", $(this), "assign");
          el.css(dimension, funcArg(this, value, idx, el[dimension]()));
        });
      }, "assign");
    });
    function traverseNode(node, fun) {
      cc11001100_hook("node", node, "function-parameter");
      cc11001100_hook("fun", fun, "function-parameter");
      fun(node);
      for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", node.childNodes.length, "var-init"); i < len; i++) traverseNode(node.childNodes[i], fun);
    }
    adjacencyOperators.forEach(function (operator, operatorIndex) {
      var inside = cc11001100_hook("inside", operatorIndex % 2, "var-init");
      $.fn[operator] = cc11001100_hook("$.fn[operator]", function () {
        var argType,
          nodes = cc11001100_hook("nodes", $.map(arguments, function (arg) {
            var arr = cc11001100_hook("arr", [], "var-init");
            argType = cc11001100_hook("argType", type(arg), "assign");
            if (argType == "array") {
              arg.forEach(function (el) {
                if (el.nodeType !== undefined) return arr.push(el);else if ($.zepto.isZ(el)) return arr = cc11001100_hook("arr", arr.concat(el.get()), "assign");
                arr = cc11001100_hook("arr", arr.concat(zepto.fragment(el)), "assign");
              });
              return arr;
            }
            return argType == "object" || arg == null ? arg : zepto.fragment(arg);
          }), "var-init"),
          parent,
          copyByClone = cc11001100_hook("copyByClone", this.length > 1, "var-init");
        if (nodes.length < 1) return this;
        return this.each(function (_, target) {
          parent = cc11001100_hook("parent", inside ? target : target.parentNode, "assign");
          target = cc11001100_hook("target", operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null, "assign");
          var parentInDocument = cc11001100_hook("parentInDocument", $.contains(document.documentElement, parent), "var-init");
          nodes.forEach(function (node) {
            if (copyByClone) node = cc11001100_hook("node", node.cloneNode(true), "assign");else if (!parent) return $(node).remove();
            parent.insertBefore(node, target);
            if (parentInDocument) traverseNode(node, function (el) {
              if (el.nodeName != null && el.nodeName.toUpperCase() === "SCRIPT" && (!el.type || el.type === "text/javascript") && !el.src) {
                var target = cc11001100_hook("target", el.ownerDocument ? el.ownerDocument.defaultView : window, "var-init");
                target["eval"].call(target, el.innerHTML);
              }
            });
          });
        });
      }, "assign");
      $.fn[inside ? operator + "To" : "insert" + (operatorIndex ? "Before" : "After")] = cc11001100_hook("$.fn[inside ? operator + \"To\" : \"insert\" + (operatorIndex ? \"Before\" : \"After\")]", function (html) {
        $(html)[operator](this);
        return this;
      }, "assign");
    });
    zepto.Z.prototype = cc11001100_hook("zepto.Z.prototype", Z.prototype = cc11001100_hook("Z.prototype", $.fn, "assign"), "assign");
    zepto.uniq = cc11001100_hook("zepto.uniq", uniq, "assign");
    zepto.deserializeValue = cc11001100_hook("zepto.deserializeValue", deserializeValue, "assign");
    $.zepto = cc11001100_hook("$.zepto", zepto, "assign");
    return $;
  }(), "var-init");
  window.Zepto = cc11001100_hook("window.Zepto", Zepto, "assign");
  window.$ === undefined && (window.$ = cc11001100_hook("window.$", Zepto, "assign"));
  (function ($) {
    var _zid = cc11001100_hook("_zid", 1, "var-init"),
      undefined,
      slice = cc11001100_hook("slice", Array.prototype.slice, "var-init"),
      isFunction = cc11001100_hook("isFunction", $.isFunction, "var-init"),
      isString = function (obj) {
        return typeof obj == "string";
      },
      handlers = cc11001100_hook("handlers", {}, "var-init"),
      specialEvents = cc11001100_hook("specialEvents", {}, "var-init"),
      focusinSupported = cc11001100_hook("focusinSupported", "onfocusin" in window, "var-init"),
      focus = cc11001100_hook("focus", {
        focus: cc11001100_hook("focus", "focusin", "object-key-init"),
        blur: cc11001100_hook("blur", "focusout", "object-key-init")
      }, "var-init"),
      hover = cc11001100_hook("hover", {
        mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
        mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init")
      }, "var-init");
    specialEvents.click = cc11001100_hook("specialEvents.click", specialEvents.mousedown = cc11001100_hook("specialEvents.mousedown", specialEvents.mouseup = cc11001100_hook("specialEvents.mouseup", specialEvents.mousemove = cc11001100_hook("specialEvents.mousemove", "MouseEvents", "assign"), "assign"), "assign"), "assign");
    function zid(element) {
      cc11001100_hook("element", element, "function-parameter");
      return element._zid || (element._zid = cc11001100_hook("element._zid", _zid++, "assign"));
    }
    function findHandlers(element, event, fn, selector) {
      cc11001100_hook("element", element, "function-parameter");
      cc11001100_hook("event", event, "function-parameter");
      cc11001100_hook("fn", fn, "function-parameter");
      cc11001100_hook("selector", selector, "function-parameter");
      event = cc11001100_hook("event", parse(event), "assign");
      if (event.ns) var matcher = cc11001100_hook("matcher", matcherFor(event.ns), "var-init");
      return (handlers[zid(element)] || []).filter(function (handler) {
        return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
      });
    }
    function parse(event) {
      cc11001100_hook("event", event, "function-parameter");
      var parts = cc11001100_hook("parts", ("" + event).split("."), "var-init");
      return {
        e: cc11001100_hook("e", parts[0], "object-key-init"),
        ns: cc11001100_hook("ns", parts.slice(1).sort().join(" "), "object-key-init")
      };
    }
    function matcherFor(ns) {
      cc11001100_hook("ns", ns, "function-parameter");
      return new RegExp("(?:^| )" + ns.replace(" ", " .* ?") + "(?: |$)");
    }
    function eventCapture(handler, captureSetting) {
      cc11001100_hook("handler", handler, "function-parameter");
      cc11001100_hook("captureSetting", captureSetting, "function-parameter");
      return handler.del && !focusinSupported && handler.e in focus || !!captureSetting;
    }
    function realEvent(type) {
      cc11001100_hook("type", type, "function-parameter");
      return hover[type] || focusinSupported && focus[type] || type;
    }
    function add(element, events, fn, data, selector, delegator, capture) {
      cc11001100_hook("element", element, "function-parameter");
      cc11001100_hook("events", events, "function-parameter");
      cc11001100_hook("fn", fn, "function-parameter");
      cc11001100_hook("data", data, "function-parameter");
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("delegator", delegator, "function-parameter");
      cc11001100_hook("capture", capture, "function-parameter");
      var id = cc11001100_hook("id", zid(element), "var-init"),
        set = cc11001100_hook("set", handlers[id] || (handlers[id] = cc11001100_hook("handlers[id]", [], "assign")), "var-init");
      events.split(/\s/).forEach(function (event) {
        if (event == "ready") return $(document).ready(fn);
        var handler = cc11001100_hook("handler", parse(event), "var-init");
        handler.fn = cc11001100_hook("handler.fn", fn, "assign");
        handler.sel = cc11001100_hook("handler.sel", selector, "assign");
        if (handler.e in hover) fn = cc11001100_hook("fn", function (e) {
          var related = cc11001100_hook("related", e.relatedTarget, "var-init");
          if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
        }, "assign");
        handler.del = cc11001100_hook("handler.del", delegator, "assign");
        var callback = cc11001100_hook("callback", delegator || fn, "var-init");
        handler.proxy = cc11001100_hook("handler.proxy", function (e) {
          e = cc11001100_hook("e", compatible(e), "assign");
          if (e.isImmediatePropagationStopped()) return;
          e.data = cc11001100_hook("e.data", data, "assign");
          var result = cc11001100_hook("result", callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args)), "var-init");
          if (result === false) e.preventDefault(), e.stopPropagation();
          return result;
        }, "assign");
        handler.i = cc11001100_hook("handler.i", set.length, "assign");
        set.push(handler);
        if ("addEventListener" in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
      });
    }
    function remove(element, events, fn, selector, capture) {
      cc11001100_hook("element", element, "function-parameter");
      cc11001100_hook("events", events, "function-parameter");
      cc11001100_hook("fn", fn, "function-parameter");
      cc11001100_hook("selector", selector, "function-parameter");
      cc11001100_hook("capture", capture, "function-parameter");
      var id = cc11001100_hook("id", zid(element), "var-init");
      (events || "").split(/\s/).forEach(function (event) {
        findHandlers(element, event, fn, selector).forEach(function (handler) {
          delete handlers[id][handler.i];
          if ("removeEventListener" in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
        });
      });
    }
    $.event = cc11001100_hook("$.event", {
      add: cc11001100_hook("add", add, "object-key-init"),
      remove: cc11001100_hook("remove", remove, "object-key-init")
    }, "assign");
    $.proxy = cc11001100_hook("$.proxy", function (fn, context) {
      var args = cc11001100_hook("args", 2 in arguments && slice.call(arguments, 2), "var-init");
      if (isFunction(fn)) {
        var proxyFn = function () {
          return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
        };
        proxyFn._zid = cc11001100_hook("proxyFn._zid", zid(fn), "assign");
        return proxyFn;
      } else if (isString(context)) {
        if (args) {
          args.unshift(fn[context], fn);
          return $.proxy.apply(null, args);
        } else {
          return $.proxy(fn[context], fn);
        }
      } else {
        throw new TypeError("expected function");
      }
    }, "assign");
    $.fn.bind = cc11001100_hook("$.fn.bind", function (event, data, callback) {
      return this.on(event, data, callback);
    }, "assign");
    $.fn.unbind = cc11001100_hook("$.fn.unbind", function (event, callback) {
      return this.off(event, callback);
    }, "assign");
    $.fn.one = cc11001100_hook("$.fn.one", function (event, selector, data, callback) {
      return this.on(event, selector, data, callback, 1);
    }, "assign");
    var returnTrue = function () {
        return true;
      },
      returnFalse = function () {
        return false;
      },
      ignoreProperties = cc11001100_hook("ignoreProperties", /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, "var-init"),
      eventMethods = cc11001100_hook("eventMethods", {
        preventDefault: cc11001100_hook("preventDefault", "isDefaultPrevented", "object-key-init"),
        stopImmediatePropagation: cc11001100_hook("stopImmediatePropagation", "isImmediatePropagationStopped", "object-key-init"),
        stopPropagation: cc11001100_hook("stopPropagation", "isPropagationStopped", "object-key-init")
      }, "var-init");
    function compatible(event, source) {
      cc11001100_hook("event", event, "function-parameter");
      cc11001100_hook("source", source, "function-parameter");
      if (source || !event.isDefaultPrevented) {
        source || (source = cc11001100_hook("source", event, "assign"));
        $.each(eventMethods, function (name, predicate) {
          var sourceMethod = cc11001100_hook("sourceMethod", source[name], "var-init");
          event[name] = cc11001100_hook("event[name]", function () {
            this[predicate] = cc11001100_hook("this[predicate]", returnTrue, "assign");
            return sourceMethod && sourceMethod.apply(source, arguments);
          }, "assign");
          event[predicate] = cc11001100_hook("event[predicate]", returnFalse, "assign");
        });
        event.timeStamp || (event.timeStamp = cc11001100_hook("event.timeStamp", Date.now(), "assign"));
        if (source.defaultPrevented !== undefined ? source.defaultPrevented : "returnValue" in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = cc11001100_hook("event.isDefaultPrevented", returnTrue, "assign");
      }
      return event;
    }
    function createProxy(event) {
      cc11001100_hook("event", event, "function-parameter");
      var key,
        proxy = cc11001100_hook("proxy", {
          originalEvent: cc11001100_hook("originalEvent", event, "object-key-init")
        }, "var-init");
      for (key in event) if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = cc11001100_hook("proxy[key]", event[key], "assign");
      return compatible(proxy, event);
    }
    $.fn.delegate = cc11001100_hook("$.fn.delegate", function (selector, event, callback) {
      return this.on(event, selector, callback);
    }, "assign");
    $.fn.undelegate = cc11001100_hook("$.fn.undelegate", function (selector, event, callback) {
      return this.off(event, selector, callback);
    }, "assign");
    $.fn.live = cc11001100_hook("$.fn.live", function (event, callback) {
      $(document.body).delegate(this.selector, event, callback);
      return this;
    }, "assign");
    $.fn.die = cc11001100_hook("$.fn.die", function (event, callback) {
      $(document.body).undelegate(this.selector, event, callback);
      return this;
    }, "assign");
    $.fn.on = cc11001100_hook("$.fn.on", function (event, selector, data, callback, one) {
      var autoRemove,
        delegator,
        $this = cc11001100_hook("$this", this, "var-init");
      if (event && !isString(event)) {
        $.each(event, function (type, fn) {
          $this.on(type, selector, data, fn, one);
        });
        return $this;
      }
      if (!isString(selector) && !isFunction(callback) && callback !== false) callback = cc11001100_hook("callback", data, "assign"), data = cc11001100_hook("data", selector, "assign"), selector = cc11001100_hook("selector", undefined, "assign");
      if (callback === undefined || data === false) callback = cc11001100_hook("callback", data, "assign"), data = cc11001100_hook("data", undefined, "assign");
      if (callback === false) callback = cc11001100_hook("callback", returnFalse, "assign");
      return $this.each(function (_, element) {
        if (one) autoRemove = cc11001100_hook("autoRemove", function (e) {
          remove(element, e.type, callback);
          return callback.apply(this, arguments);
        }, "assign");
        if (selector) delegator = cc11001100_hook("delegator", function (e) {
          var evt,
            match = cc11001100_hook("match", $(e.target).closest(selector, element).get(0), "var-init");
          if (match && match !== element) {
            evt = cc11001100_hook("evt", $.extend(createProxy(e), {
              currentTarget: cc11001100_hook("currentTarget", match, "object-key-init"),
              liveFired: cc11001100_hook("liveFired", element, "object-key-init")
            }), "assign");
            return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
          }
        }, "assign");
        add(element, event, callback, data, selector, delegator || autoRemove);
      });
    }, "assign");
    $.fn.off = cc11001100_hook("$.fn.off", function (event, selector, callback) {
      var $this = cc11001100_hook("$this", this, "var-init");
      if (event && !isString(event)) {
        $.each(event, function (type, fn) {
          $this.off(type, selector, fn);
        });
        return $this;
      }
      if (!isString(selector) && !isFunction(callback) && callback !== false) callback = cc11001100_hook("callback", selector, "assign"), selector = cc11001100_hook("selector", undefined, "assign");
      if (callback === false) callback = cc11001100_hook("callback", returnFalse, "assign");
      return $this.each(function () {
        remove(this, event, callback, selector);
      });
    }, "assign");
    $.fn.trigger = cc11001100_hook("$.fn.trigger", function (event, args) {
      event = cc11001100_hook("event", isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event), "assign");
      event._args = cc11001100_hook("event._args", args, "assign");
      return this.each(function () {
        if (event.type in focus && typeof this[event.type] == "function") this[event.type]();else if ("dispatchEvent" in this) this.dispatchEvent(event);else $(this).triggerHandler(event, args);
      });
    }, "assign");
    $.fn.triggerHandler = cc11001100_hook("$.fn.triggerHandler", function (event, args) {
      var e, result;
      this.each(function (i, element) {
        e = cc11001100_hook("e", createProxy(isString(event) ? $.Event(event) : event), "assign");
        e._args = cc11001100_hook("e._args", args, "assign");
        e.target = cc11001100_hook("e.target", element, "assign");
        $.each(findHandlers(element, event.type || event), function (i, handler) {
          result = cc11001100_hook("result", handler.proxy(e), "assign");
          if (e.isImmediatePropagationStopped()) return false;
        });
      });
      return result;
    }, "assign");
    ("focusin focusout focus blur load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select keydown keypress keyup error").split(" ").forEach(function (event) {
      $.fn[event] = cc11001100_hook("$.fn[event]", function (callback) {
        return 0 in arguments ? this.bind(event, callback) : this.trigger(event);
      }, "assign");
    });
    $.Event = cc11001100_hook("$.Event", function (type, props) {
      if (!isString(type)) props = cc11001100_hook("props", type, "assign"), type = cc11001100_hook("type", props.type, "assign");
      var event = cc11001100_hook("event", document.createEvent(specialEvents[type] || "Events"), "var-init"),
        bubbles = cc11001100_hook("bubbles", true, "var-init");
      if (props) for (var name in props) name == "bubbles" ? bubbles = cc11001100_hook("bubbles", !!props[name], "assign") : event[name] = cc11001100_hook("event[name]", props[name], "assign");
      event.initEvent(type, bubbles, true);
      return compatible(event);
    }, "assign");
  })(Zepto);
  (function ($) {
    var jsonpID = cc11001100_hook("jsonpID", +new Date(), "var-init"),
      document = cc11001100_hook("document", window.document, "var-init"),
      key,
      name,
      rscript = cc11001100_hook("rscript", /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "var-init"),
      scriptTypeRE = cc11001100_hook("scriptTypeRE", /^(?:text|application)\/javascript/i, "var-init"),
      xmlTypeRE = cc11001100_hook("xmlTypeRE", /^(?:text|application)\/xml/i, "var-init"),
      jsonType = cc11001100_hook("jsonType", "application/json", "var-init"),
      htmlType = cc11001100_hook("htmlType", "text/html", "var-init"),
      blankRE = cc11001100_hook("blankRE", /^\s*$/, "var-init"),
      originAnchor = cc11001100_hook("originAnchor", document.createElement("a"), "var-init");
    originAnchor.href = cc11001100_hook("originAnchor.href", window.location.href, "assign");
    function triggerAndReturn(context, eventName, data) {
      cc11001100_hook("context", context, "function-parameter");
      cc11001100_hook("eventName", eventName, "function-parameter");
      cc11001100_hook("data", data, "function-parameter");
      var event = cc11001100_hook("event", $.Event(eventName), "var-init");
      $(context).trigger(event, data);
      return !event.isDefaultPrevented();
    }
    function triggerGlobal(settings, context, eventName, data) {
      cc11001100_hook("settings", settings, "function-parameter");
      cc11001100_hook("context", context, "function-parameter");
      cc11001100_hook("eventName", eventName, "function-parameter");
      cc11001100_hook("data", data, "function-parameter");
      if (settings.global) return triggerAndReturn(context || document, eventName, data);
    }
    $.active = cc11001100_hook("$.active", 0, "assign");
    function ajaxStart(settings) {
      cc11001100_hook("settings", settings, "function-parameter");
      if (settings.global && $.active++ === 0) triggerGlobal(settings, null, "ajaxStart");
    }
    function ajaxStop(settings) {
      cc11001100_hook("settings", settings, "function-parameter");
      if (settings.global && ! --$.active) triggerGlobal(settings, null, "ajaxStop");
    }
    function ajaxBeforeSend(xhr, settings) {
      cc11001100_hook("xhr", xhr, "function-parameter");
      cc11001100_hook("settings", settings, "function-parameter");
      var context = cc11001100_hook("context", settings.context, "var-init");
      if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, "ajaxBeforeSend", [xhr, settings]) === false) return false;
      triggerGlobal(settings, context, "ajaxSend", [xhr, settings]);
    }
    function ajaxSuccess(data, xhr, settings, deferred) {
      cc11001100_hook("data", data, "function-parameter");
      cc11001100_hook("xhr", xhr, "function-parameter");
      cc11001100_hook("settings", settings, "function-parameter");
      cc11001100_hook("deferred", deferred, "function-parameter");
      var context = cc11001100_hook("context", settings.context, "var-init"),
        status = cc11001100_hook("status", "success", "var-init");
      settings.success.call(context, data, status, xhr);
      if (deferred) deferred.resolveWith(context, [data, status, xhr]);
      triggerGlobal(settings, context, "ajaxSuccess", [xhr, settings, data]);
      ajaxComplete(status, xhr, settings);
    }
    function ajaxError(error, type, xhr, settings, deferred) {
      cc11001100_hook("error", error, "function-parameter");
      cc11001100_hook("type", type, "function-parameter");
      cc11001100_hook("xhr", xhr, "function-parameter");
      cc11001100_hook("settings", settings, "function-parameter");
      cc11001100_hook("deferred", deferred, "function-parameter");
      var context = cc11001100_hook("context", settings.context, "var-init");
      settings.error.call(context, xhr, type, error);
      if (deferred) deferred.rejectWith(context, [xhr, type, error]);
      triggerGlobal(settings, context, "ajaxError", [xhr, settings, error || type]);
      ajaxComplete(type, xhr, settings);
    }
    function ajaxComplete(status, xhr, settings) {
      cc11001100_hook("status", status, "function-parameter");
      cc11001100_hook("xhr", xhr, "function-parameter");
      cc11001100_hook("settings", settings, "function-parameter");
      var context = cc11001100_hook("context", settings.context, "var-init");
      settings.complete.call(context, xhr, status);
      triggerGlobal(settings, context, "ajaxComplete", [xhr, settings]);
      ajaxStop(settings);
    }
    function ajaxDataFilter(data, type, settings) {
      cc11001100_hook("data", data, "function-parameter");
      cc11001100_hook("type", type, "function-parameter");
      cc11001100_hook("settings", settings, "function-parameter");
      if (settings.dataFilter == empty) return data;
      var context = cc11001100_hook("context", settings.context, "var-init");
      return settings.dataFilter.call(context, data, type);
    }
    function empty() {}
    $.replaceAllInjectionStr = cc11001100_hook("$.replaceAllInjectionStr", function (str) {
      str = cc11001100_hook("str", str.replace(/\script/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\</g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\>/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\(/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\)/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\../g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\;/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\|/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\%/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\@/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\'/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\"/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\,/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\\/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\eval/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\expression/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\vbscript/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\javascript/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\onload/g, ""), "assign");
      str = cc11001100_hook("str", str.replace(/\iframe/g, ""), "assign");
      return str;
    }, "assign");
    $.ajaxJSONP = cc11001100_hook("$.ajaxJSONP", function (options, deferred) {
      if (!("type" in options)) return $.ajax(options);
      var _callbackName = cc11001100_hook("_callbackName", options.jsonpCallback, "var-init"),
        callbackName = cc11001100_hook("callbackName", ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || "Zepto" + jsonpID++, "var-init"),
        script = cc11001100_hook("script", document.createElement("script"), "var-init"),
        originalCallback = cc11001100_hook("originalCallback", window[callbackName], "var-init"),
        responseData,
        abort = function (errorType) {
          $(script).triggerHandler("error", errorType || "abort");
        },
        xhr = cc11001100_hook("xhr", {
          abort: cc11001100_hook("abort", abort, "object-key-init")
        }, "var-init"),
        abortTimeout;
      if (deferred) deferred.promise(xhr);
      $(script).on("load error", function (e, errorType) {
        clearTimeout(abortTimeout);
        $(script).off().remove();
        if (e.type == "error" || !responseData) {
          ajaxError(null, errorType || "error", xhr, options, deferred);
        } else {
          ajaxSuccess(responseData[0], xhr, options, deferred);
        }
        window[callbackName] = cc11001100_hook("window[callbackName]", originalCallback, "assign");
        if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);
        originalCallback = cc11001100_hook("originalCallback", responseData = cc11001100_hook("responseData", undefined, "assign"), "assign");
      });
      if (ajaxBeforeSend(xhr, options) === false) {
        abort("abort");
        return xhr;
      }
      window[callbackName] = cc11001100_hook("window[callbackName]", function () {
        responseData = cc11001100_hook("responseData", arguments, "assign");
      }, "assign");
      script.src = cc11001100_hook("script.src", options.url.replace(/\?(.+)=\?/, "?$1=" + callbackName), "assign");
      document.head.appendChild(script);
      if (options.timeout > 0) abortTimeout = cc11001100_hook("abortTimeout", setTimeout(function () {
        abort("timeout");
      }, options.timeout), "assign");
      return xhr;
    }, "assign");
    $.ajaxSettings = cc11001100_hook("$.ajaxSettings", {
      type: cc11001100_hook("type", "GET", "object-key-init"),
      beforeSend: cc11001100_hook("beforeSend", empty, "object-key-init"),
      success: cc11001100_hook("success", empty, "object-key-init"),
      error: cc11001100_hook("error", empty, "object-key-init"),
      complete: cc11001100_hook("complete", empty, "object-key-init"),
      context: cc11001100_hook("context", null, "object-key-init"),
      global: cc11001100_hook("global", true, "object-key-init"),
      xhr: function () {
        return new window.XMLHttpRequest();
      },
      accepts: {
        script: cc11001100_hook("script", "text/javascript, application/javascript, application/x-javascript", "object-key-init"),
        json: cc11001100_hook("json", jsonType, "object-key-init"),
        xml: cc11001100_hook("xml", "application/xml, text/xml", "object-key-init"),
        html: cc11001100_hook("html", htmlType, "object-key-init"),
        text: cc11001100_hook("text", "text/plain", "object-key-init")
      },
      crossDomain: cc11001100_hook("crossDomain", false, "object-key-init"),
      timeout: cc11001100_hook("timeout", 0, "object-key-init"),
      processData: cc11001100_hook("processData", true, "object-key-init"),
      cache: cc11001100_hook("cache", true, "object-key-init"),
      dataFilter: cc11001100_hook("dataFilter", empty, "object-key-init")
    }, "assign");
    function mimeToDataType(mime) {
      cc11001100_hook("mime", mime, "function-parameter");
      if (mime) mime = cc11001100_hook("mime", mime.split(";", 2)[0], "assign");
      return mime && (mime == htmlType ? "html" : mime == jsonType ? "json" : scriptTypeRE.test(mime) ? "script" : xmlTypeRE.test(mime) && "xml") || "text";
    }
    function appendQuery(url, query) {
      cc11001100_hook("url", url, "function-parameter");
      cc11001100_hook("query", query, "function-parameter");
      if (query == "") return url;
      return (url + "&" + query).replace(/[&?]{1,2}/, "?");
    }
    function serializeData(options) {
      cc11001100_hook("options", options, "function-parameter");
      if (options.processData && options.data && $.type(options.data) != "string") options.data = cc11001100_hook("options.data", $.param(options.data, options.traditional), "assign");
      if (options.data && (!options.type || options.type.toUpperCase() == "GET" || "jsonp" == options.dataType)) options.url = cc11001100_hook("options.url", appendQuery(options.url, options.data), "assign"), options.data = cc11001100_hook("options.data", undefined, "assign");
    }
    $.ajax = cc11001100_hook("$.ajax", function (options) {
      var settings = cc11001100_hook("settings", $.extend({}, options || {}), "var-init"),
        deferred = cc11001100_hook("deferred", $.Deferred && $.Deferred(), "var-init"),
        urlAnchor,
        hashIndex;
      for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = cc11001100_hook("settings[key]", $.ajaxSettings[key], "assign");
      ajaxStart(settings);
      if (!settings.crossDomain) {
        urlAnchor = cc11001100_hook("urlAnchor", document.createElement("a"), "assign");
        urlAnchor.href = cc11001100_hook("urlAnchor.href", settings.url, "assign");
        urlAnchor.href = cc11001100_hook("urlAnchor.href", urlAnchor.href, "assign");
        settings.crossDomain = cc11001100_hook("settings.crossDomain", originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host, "assign");
      }
      if (!settings.url) settings.url = cc11001100_hook("settings.url", $.replaceAllInjectionStr(window.location.toString()), "assign");
      if (settings.type && settings.contentType && settings.type.toUpperCase() == "POST" && settings.contentType.toLowerCase() == "application/json") {
        if (uap.isPlainObject(settings.data)) {
          settings.data = cc11001100_hook("settings.data", JSON.stringify(settings.data), "assign");
        }
      }
      if ((hashIndex = cc11001100_hook("hashIndex", settings.url.indexOf("#"), "assign")) > -1) settings.url = cc11001100_hook("settings.url", settings.url.slice(0, hashIndex), "assign");
      serializeData(settings);
      var dataType = cc11001100_hook("dataType", settings.dataType, "var-init"),
        hasPlaceholder = cc11001100_hook("hasPlaceholder", /\?.+=\?/.test(settings.url), "var-init");
      if (hasPlaceholder) dataType = cc11001100_hook("dataType", "jsonp", "assign");
      if (settings.cache === false || (!options || options.cache !== true) && ("script" == dataType || "jsonp" == dataType)) settings.url = cc11001100_hook("settings.url", appendQuery(settings.url, "_=" + Date.now()), "assign");
      if ("jsonp" == dataType) {
        if (!hasPlaceholder) settings.url = cc11001100_hook("settings.url", appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?" : settings.jsonp === false ? "" : "callback=?"), "assign");
        return $.ajaxJSONP(settings, deferred);
      }
      var mime = cc11001100_hook("mime", settings.accepts[dataType], "var-init"),
        headers = cc11001100_hook("headers", {}, "var-init"),
        setHeader = function (name, value) {
          headers[name.toLowerCase()] = cc11001100_hook("headers[name.toLowerCase()]", [name, value], "assign");
        },
        protocol = cc11001100_hook("protocol", /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, "var-init"),
        xhr = cc11001100_hook("xhr", settings.xhr(), "var-init"),
        nativeSetHeader = cc11001100_hook("nativeSetHeader", xhr.setRequestHeader, "var-init"),
        abortTimeout;
      if (deferred) deferred.promise(xhr);
      if (!settings.crossDomain) setHeader("X-Requested-With", "XMLHttpRequest");
      setHeader("Accept", mime || "*/*");
      if (mime = cc11001100_hook("mime", settings.mimeType || mime, "assign")) {
        if (mime.indexOf(",") > -1) mime = cc11001100_hook("mime", mime.split(",", 2)[0], "assign");
        xhr.overrideMimeType && xhr.overrideMimeType(mime);
      }
      if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != "GET") setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded");
      if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name]);
      xhr.setRequestHeader = cc11001100_hook("xhr.setRequestHeader", setHeader, "assign");
      xhr.onreadystatechange = cc11001100_hook("xhr.onreadystatechange", function () {
        if (xhr.readyState == 4) {
          xhr.onreadystatechange = cc11001100_hook("xhr.onreadystatechange", empty, "assign");
          clearTimeout(abortTimeout);
          var result,
            error = cc11001100_hook("error", false, "var-init");
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
            dataType = cc11001100_hook("dataType", dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type")), "assign");
            if (xhr.responseType == "arraybuffer" || xhr.responseType == "blob") result = cc11001100_hook("result", xhr.response, "assign");else {
              result = cc11001100_hook("result", xhr.responseText, "assign");
              try {
                result = cc11001100_hook("result", ajaxDataFilter(result, dataType, settings), "assign");
                if (dataType == "script") window["eval"].call(window, result);else if (dataType == "xml") result = cc11001100_hook("result", xhr.responseXML, "assign");else if (dataType == "json") result = cc11001100_hook("result", blankRE.test(result) ? null : $.parseJSON(result), "assign");
              } catch (e) {
                error = cc11001100_hook("error", e, "assign");
              }
              if (error) return ajaxError(error, "parsererror", xhr, settings, deferred);
            }
            ajaxSuccess(result, xhr, settings, deferred);
          } else {
            ajaxError(xhr.statusText || null, xhr.status ? "error" : "abort", xhr, settings, deferred);
          }
        }
      }, "assign");
      if (ajaxBeforeSend(xhr, settings) === false) {
        xhr.abort();
        ajaxError(null, "abort", xhr, settings, deferred);
        return xhr;
      }
      var async = cc11001100_hook("async", "async" in settings ? settings.async : true, "var-init");
      xhr.open(settings.type, settings.url, async, settings.username, settings.password);
      if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = cc11001100_hook("xhr[name]", settings.xhrFields[name], "assign");
      for (name in headers) nativeSetHeader.apply(xhr, headers[name]);
      if (settings.timeout > 0) abortTimeout = cc11001100_hook("abortTimeout", setTimeout(function () {
        xhr.onreadystatechange = cc11001100_hook("xhr.onreadystatechange", empty, "assign");
        xhr.abort();
        ajaxError(null, "timeout", xhr, settings, deferred);
      }, settings.timeout), "assign");
      xhr.send(settings.data ? settings.data : null);
      return xhr;
    }, "assign");
    function parseArguments(url, data, success, dataType) {
      cc11001100_hook("url", url, "function-parameter");
      cc11001100_hook("data", data, "function-parameter");
      cc11001100_hook("success", success, "function-parameter");
      cc11001100_hook("dataType", dataType, "function-parameter");
      if ($.isFunction(data)) dataType = cc11001100_hook("dataType", success, "assign"), success = cc11001100_hook("success", data, "assign"), data = cc11001100_hook("data", undefined, "assign");
      if (!$.isFunction(success)) dataType = cc11001100_hook("dataType", success, "assign"), success = cc11001100_hook("success", undefined, "assign");
      return {
        url: cc11001100_hook("url", url, "object-key-init"),
        data: cc11001100_hook("data", data, "object-key-init"),
        success: cc11001100_hook("success", success, "object-key-init"),
        dataType: cc11001100_hook("dataType", dataType, "object-key-init")
      };
    }
    $.get = cc11001100_hook("$.get", function () {
      return $.ajax(parseArguments.apply(null, arguments));
    }, "assign");
    $.post = cc11001100_hook("$.post", function () {
      var options = cc11001100_hook("options", parseArguments.apply(null, arguments), "var-init");
      options.type = cc11001100_hook("options.type", "POST", "assign");
      return $.ajax(options);
    }, "assign");
    $.getJSON = cc11001100_hook("$.getJSON", function () {
      var options = cc11001100_hook("options", parseArguments.apply(null, arguments), "var-init");
      options.dataType = cc11001100_hook("options.dataType", "json", "assign");
      return $.ajax(options);
    }, "assign");
    $.fn.load = cc11001100_hook("$.fn.load", function (url, data, success) {
      if (!this.length) return this;
      var self = cc11001100_hook("self", this, "var-init"),
        parts = cc11001100_hook("parts", url.split(/\s/), "var-init"),
        selector,
        options = cc11001100_hook("options", parseArguments(url, data, success), "var-init"),
        callback = cc11001100_hook("callback", options.success, "var-init");
      if (parts.length > 1) options.url = cc11001100_hook("options.url", parts[0], "assign"), selector = cc11001100_hook("selector", parts[1], "assign");
      options.success = cc11001100_hook("options.success", function (response) {
        self.html(selector ? $("<div>").html(response.replace(rscript, "")).find(selector) : response);
        callback && callback.apply(self, arguments);
      }, "assign");
      $.ajax(options);
      return this;
    }, "assign");
    var escape = cc11001100_hook("escape", encodeURIComponent, "var-init");
    function serialize(params, obj, traditional, scope) {
      cc11001100_hook("params", params, "function-parameter");
      cc11001100_hook("obj", obj, "function-parameter");
      cc11001100_hook("traditional", traditional, "function-parameter");
      cc11001100_hook("scope", scope, "function-parameter");
      var type,
        array = cc11001100_hook("array", $.isArray(obj), "var-init"),
        hash = cc11001100_hook("hash", $.isPlainObject(obj), "var-init");
      $.each(obj, function (key, value) {
        type = cc11001100_hook("type", $.type(value), "assign");
        if (scope) key = cc11001100_hook("key", traditional ? scope : scope + "[" + (hash || type == "object" || type == "array" ? key : "") + "]", "assign");
        if (!scope && array) params.add(value.name, value.value);else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key);else params.add(key, value);
      });
    }
    $.param = cc11001100_hook("$.param", function (obj, traditional) {
      var params = cc11001100_hook("params", [], "var-init");
      params.add = cc11001100_hook("params.add", function (key, value) {
        if ($.isFunction(value)) value = cc11001100_hook("value", value(), "assign");
        if (value == null) value = cc11001100_hook("value", "", "assign");
        this.push(escape(key) + "=" + escape(value));
      }, "assign");
      serialize(params, obj, traditional);
      return params.join("&").replace(/%20/g, "+");
    }, "assign");
  })(Zepto);
  (function ($) {
    $.fn.serializeArray = cc11001100_hook("$.fn.serializeArray", function () {
      var name,
        type,
        result = cc11001100_hook("result", [], "var-init"),
        add = function (value) {
          if (value.forEach) return value.forEach(add);
          result.push({
            name: cc11001100_hook("name", name, "object-key-init"),
            value: cc11001100_hook("value", value, "object-key-init")
          });
        };
      if (this[0]) $.each(this[0].elements, function (_, field) {
        type = cc11001100_hook("type", field.type, "assign"), name = cc11001100_hook("name", field.name, "assign");
        if (name && field.nodeName.toLowerCase() != "fieldset" && !field.disabled && type != "submit" && type != "reset" && type != "button" && type != "file" && (type != "radio" && type != "checkbox" || field.checked)) add($(field).val());
      });
      return result;
    }, "assign");
    $.fn.serialize = cc11001100_hook("$.fn.serialize", function () {
      var result = cc11001100_hook("result", [], "var-init");
      this.serializeArray().forEach(function (elm) {
        result.push(encodeURIComponent(elm.name) + "=" + encodeURIComponent(elm.value));
      });
      return result.join("&");
    }, "assign");
    $.fn.submit = cc11001100_hook("$.fn.submit", function (callback) {
      if (0 in arguments) this.bind("submit", callback);else if (this.length) {
        var event = cc11001100_hook("event", $.Event("submit"), "var-init");
        this.eq(0).trigger(event);
        if (!event.isDefaultPrevented()) this.get(0).submit();
      }
      return this;
    }, "assign");
  })(Zepto);
  (function () {
    try {
      getComputedStyle(undefined);
    } catch (e) {
      var nativeGetComputedStyle = cc11001100_hook("nativeGetComputedStyle", getComputedStyle, "var-init");
      window.getComputedStyle = cc11001100_hook("window.getComputedStyle", function (element, pseudoElement) {
        try {
          return nativeGetComputedStyle(element, pseudoElement);
        } catch (e) {
          return null;
        }
      }, "assign");
    }
  })();
  return Zepto;
});
(function ($) {
  var touch = cc11001100_hook("touch", {}, "var-init"),
    touchTimeout,
    tapTimeout,
    swipeTimeout,
    longTapTimeout,
    longTapDelay = cc11001100_hook("longTapDelay", 750, "var-init"),
    gesture;
  function swipeDirection(x1, x2, y1, y2) {
    cc11001100_hook("x1", x1, "function-parameter");
    cc11001100_hook("x2", x2, "function-parameter");
    cc11001100_hook("y1", y1, "function-parameter");
    cc11001100_hook("y2", y2, "function-parameter");
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? "Left" : "Right" : y1 - y2 > 0 ? "Up" : "Down";
  }
  function longTap() {
    longTapTimeout = cc11001100_hook("longTapTimeout", null, "assign");
    if (touch.last) {
      touch.el.trigger("longTap");
      touch = cc11001100_hook("touch", {}, "assign");
    }
  }
  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout);
    longTapTimeout = cc11001100_hook("longTapTimeout", null, "assign");
  }
  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout);
    if (tapTimeout) clearTimeout(tapTimeout);
    if (swipeTimeout) clearTimeout(swipeTimeout);
    if (longTapTimeout) clearTimeout(longTapTimeout);
    touchTimeout = cc11001100_hook("touchTimeout", tapTimeout = cc11001100_hook("tapTimeout", swipeTimeout = cc11001100_hook("swipeTimeout", longTapTimeout = cc11001100_hook("longTapTimeout", null, "assign"), "assign"), "assign"), "assign");
    touch = cc11001100_hook("touch", {}, "assign");
  }
  function isPrimaryTouch(event) {
    cc11001100_hook("event", event, "function-parameter");
    if (window.navigator.platform == "Win32") return true;
    if (!("ontouchstart" in window)) return true;
    return (event.pointerType == "touch" || event.pointerType == event.MSPOINTER_TYPE_TOUCH) && event.isPrimary;
  }
  function isWindows() {
    if (window.navigator.platform == "Win32") return true;
    if (!("ontouchstart" in window)) return true;
  }
  function isPointerEventType(e, type) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("type", type, "function-parameter");
    if (window.navigator.platform == "Win32") return true;
    if (!("ontouchstart" in window)) return true;
    return e.type == "pointer" + type || e.type.toLowerCase() == "mspointer" + type;
  }
  $(document).ready(function () {
    var now,
      delta,
      deltaX = cc11001100_hook("deltaX", 0, "var-init"),
      deltaY = cc11001100_hook("deltaY", 0, "var-init"),
      firstTouch,
      _isPointerType;
    var touchStart = cc11001100_hook("touchStart", isWindows() ? "MSPointerDown  mousedown" : "touchstart MSPointerDown ", "var-init");
    var touchMove = cc11001100_hook("touchMove", isWindows() ? "MSPointerMove  mousemove" : "touchmove MSPointerMove ", "var-init");
    var touchEnd = cc11001100_hook("touchEnd", isWindows() ? "MSPointerUp  mouseup" : "touchend MSPointerUp ", "var-init");
    if ("MSGesture" in window) {
      gesture = cc11001100_hook("gesture", new MSGesture(), "assign");
      gesture.target = cc11001100_hook("gesture.target", document.body, "assign");
    }
    $(document).bind("MSGestureEnd", function (e) {
      var swipeDirectionFromVelocity = cc11001100_hook("swipeDirectionFromVelocity", e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null, "var-init");
      if (swipeDirectionFromVelocity) {
        touch.el.trigger("swipe");
        touch.el.trigger("swipe" + swipeDirectionFromVelocity);
      }
    }).on(touchStart, function (e) {
      if ((_isPointerType = cc11001100_hook("_isPointerType", isPointerEventType(e, "down"), "assign")) && !isPrimaryTouch(e)) return;
      firstTouch = cc11001100_hook("firstTouch", _isPointerType ? e : e.touches[0], "assign");
      if (e.touches && e.touches.length === 1 && touch.x2) {
        touch.x2 = cc11001100_hook("touch.x2", undefined, "assign");
        touch.y2 = cc11001100_hook("touch.y2", undefined, "assign");
      }
      deltaX = cc11001100_hook("deltaX", 0, "assign");
      deltaY = cc11001100_hook("deltaY", 0, "assign");
      now = cc11001100_hook("now", Date.now(), "assign");
      delta = cc11001100_hook("delta", now - (touch.last || now), "assign");
      touch.el = cc11001100_hook("touch.el", $("tagName" in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode), "assign");
      touchTimeout && clearTimeout(touchTimeout);
      touch.x1 = cc11001100_hook("touch.x1", firstTouch.pageX, "assign");
      touch.y1 = cc11001100_hook("touch.y1", firstTouch.pageY, "assign");
      if (delta > 0 && delta <= 250) touch.isDoubleTap = cc11001100_hook("touch.isDoubleTap", true, "assign");
      touch.last = cc11001100_hook("touch.last", now, "assign");
      longTapTimeout = cc11001100_hook("longTapTimeout", setTimeout(longTap, longTapDelay), "assign");
      if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
    }).on(touchMove, function (e) {
      if ((_isPointerType = cc11001100_hook("_isPointerType", isPointerEventType(e, "move"), "assign")) && !isPrimaryTouch(e)) return;
      firstTouch = cc11001100_hook("firstTouch", _isPointerType ? e : e.touches[0], "assign");
      cancelLongTap();
      touch.x2 = cc11001100_hook("touch.x2", firstTouch.pageX, "assign");
      touch.y2 = cc11001100_hook("touch.y2", firstTouch.pageY, "assign");
      if (isNaN(deltaX)) deltaX = cc11001100_hook("deltaX", 0, "assign");
      if (isNaN(deltaY)) deltaY = cc11001100_hook("deltaY", 0, "assign");
      deltaX += cc11001100_hook("deltaX", Math.abs(touch.x1 - touch.x2), "assign");
      deltaY += cc11001100_hook("deltaY", Math.abs(touch.y1 - touch.y2), "assign");
      touch.el && touch.el.trigger("swipeMove" + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2), {
        e: cc11001100_hook("e", e, "object-key-init"),
        dx: cc11001100_hook("dx", Math.abs(touch.x1 - touch.x2), "object-key-init"),
        dy: cc11001100_hook("dy", Math.abs(touch.y1 - touch.y2), "object-key-init")
      });
    }).on(touchEnd, function (e) {
      if ((_isPointerType = cc11001100_hook("_isPointerType", isPointerEventType(e, "up"), "assign")) && !isPrimaryTouch(e)) return;
      cancelLongTap();
      if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) swipeTimeout = cc11001100_hook("swipeTimeout", setTimeout(function () {
        touch.el.trigger("swipe");
        touch.el.trigger("swipe" + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
        touch = cc11001100_hook("touch", {}, "assign");
      }, 0), "assign");else if ("last" in touch) if (deltaX < 30 && deltaY < 30 || isWindows()) {
        tapTimeout = cc11001100_hook("tapTimeout", setTimeout(function () {
          var event = cc11001100_hook("event", $.Event("tap"), "var-init");
          event.cancelTouch = cc11001100_hook("event.cancelTouch", cancelAll, "assign");
          touch.el.trigger(event);
          if (touch.isDoubleTap) {
            if (touch.el) touch.el.trigger("doubleTap");
            touch = cc11001100_hook("touch", {}, "assign");
          } else {
            touchTimeout = cc11001100_hook("touchTimeout", setTimeout(function () {
              touchTimeout = cc11001100_hook("touchTimeout", null, "assign");
              if (touch.el) touch.el.trigger("singleTap");
              touch = cc11001100_hook("touch", {}, "assign");
            }, 250), "assign");
          }
        }, 0), "assign");
      } else {
        touch = cc11001100_hook("touch", {}, "assign");
      }
      deltaX = cc11001100_hook("deltaX", deltaY = cc11001100_hook("deltaY", 0, "assign"), "assign");
    }).on("touchcancel MSPointerCancel pointercancel", cancelAll);
    $(window).on("scroll", cancelAll);
  });
  ["swipeMoveLeft", "swipeMoveRight", "swipeMoveUp", "swipeMoveDown", "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (eventName) {
    $.fn[eventName] = cc11001100_hook("$.fn[eventName]", function (callback) {
      return this.on(eventName, callback);
    }, "assign");
  });
})(Zepto);
window.__PROTOTYPEOF__ = cc11001100_hook("window.__PROTOTYPEOF__", false, "assign");
(function ($, undefined) {
  var prefix = cc11001100_hook("prefix", "", "var-init"),
    eventPrefix,
    vendors = cc11001100_hook("vendors", {
      Webkit: cc11001100_hook("Webkit", "webkit", "object-key-init"),
      Moz: cc11001100_hook("Moz", "", "object-key-init"),
      O: cc11001100_hook("O", "o", "object-key-init")
    }, "var-init"),
    testEl = cc11001100_hook("testEl", document.createElement("div"), "var-init"),
    supportedTransforms = cc11001100_hook("supportedTransforms", /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, "var-init"),
    transform,
    transitionProperty,
    transitionDuration,
    transitionTiming,
    transitionDelay,
    animationName,
    animationDuration,
    animationTiming,
    animationDelay,
    cssReset = cc11001100_hook("cssReset", {}, "var-init");
  function dasherize(str) {
    cc11001100_hook("str", str, "function-parameter");
    return str.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
  }
  function normalizeEvent(name) {
    cc11001100_hook("name", name, "function-parameter");
    return eventPrefix ? eventPrefix + name : name.toLowerCase();
  }
  $.each(vendors, function (vendor, event) {
    if (testEl.style[vendor + "TransitionProperty"] !== undefined) {
      prefix = cc11001100_hook("prefix", "-" + vendor.toLowerCase() + "-", "assign");
      eventPrefix = cc11001100_hook("eventPrefix", event, "assign");
      return false;
    }
  });
  transform = cc11001100_hook("transform", prefix + "transform", "assign");
  cssReset[transitionProperty = cc11001100_hook("transitionProperty", prefix + "transition-property", "assign")] = cc11001100_hook("cssReset[transitionProperty = prefix + \"transition-property\"]", cssReset[transitionDuration = cc11001100_hook("transitionDuration", prefix + "transition-duration", "assign")] = cc11001100_hook("cssReset[transitionDuration = prefix + \"transition-duration\"]", cssReset[transitionDelay = cc11001100_hook("transitionDelay", prefix + "transition-delay", "assign")] = cc11001100_hook("cssReset[transitionDelay = prefix + \"transition-delay\"]", cssReset[transitionTiming = cc11001100_hook("transitionTiming", prefix + "transition-timing-function", "assign")] = cc11001100_hook("cssReset[transitionTiming = prefix + \"transition-timing-function\"]", cssReset[animationName = cc11001100_hook("animationName", prefix + "animation-name", "assign")] = cc11001100_hook("cssReset[animationName = prefix + \"animation-name\"]", cssReset[animationDuration = cc11001100_hook("animationDuration", prefix + "animation-duration", "assign")] = cc11001100_hook("cssReset[animationDuration = prefix + \"animation-duration\"]", cssReset[animationDelay = cc11001100_hook("animationDelay", prefix + "animation-delay", "assign")] = cc11001100_hook("cssReset[animationDelay = prefix + \"animation-delay\"]", cssReset[animationTiming = cc11001100_hook("animationTiming", prefix + "animation-timing-function", "assign")] = cc11001100_hook("cssReset[animationTiming = prefix + \"animation-timing-function\"]", "", "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
  $.fx = cc11001100_hook("$.fx", {
    off: cc11001100_hook("off", eventPrefix === undefined && testEl.style.transitionProperty === undefined, "object-key-init"),
    speeds: {
      _default: cc11001100_hook("_default", 400, "object-key-init"),
      fast: cc11001100_hook("fast", 200, "object-key-init"),
      slow: cc11001100_hook("slow", 600, "object-key-init")
    },
    cssPrefix: cc11001100_hook("cssPrefix", prefix, "object-key-init"),
    transitionEnd: cc11001100_hook("transitionEnd", normalizeEvent("TransitionEnd"), "object-key-init"),
    animationEnd: cc11001100_hook("animationEnd", normalizeEvent("AnimationEnd"), "object-key-init")
  }, "assign");
  $.fn.animate = cc11001100_hook("$.fn.animate", function (properties, duration, ease, callback, delay) {
    if ($.isFunction(duration)) callback = cc11001100_hook("callback", duration, "assign"), ease = cc11001100_hook("ease", undefined, "assign"), duration = cc11001100_hook("duration", undefined, "assign");
    if ($.isFunction(ease)) callback = cc11001100_hook("callback", ease, "assign"), ease = cc11001100_hook("ease", undefined, "assign");
    if ($.isPlainObject(duration)) ease = cc11001100_hook("ease", duration.easing, "assign"), callback = cc11001100_hook("callback", duration.complete, "assign"), delay = cc11001100_hook("delay", duration.delay, "assign"), duration = cc11001100_hook("duration", duration.duration, "assign");
    if (duration) duration = cc11001100_hook("duration", (typeof duration == "number" ? duration : $.fx.speeds[duration] || $.fx.speeds._default) / 1e3, "assign");
    if (delay) delay = cc11001100_hook("delay", parseFloat(delay) / 1e3, "assign");
    return this.anim(properties, duration, ease, callback, delay);
  }, "assign");
  $.fn.anim = cc11001100_hook("$.fn.anim", function (properties, duration, ease, callback, delay) {
    var key,
      cssValues = cc11001100_hook("cssValues", {}, "var-init"),
      cssProperties,
      transforms = cc11001100_hook("transforms", "", "var-init"),
      that = cc11001100_hook("that", this, "var-init"),
      wrappedCallback,
      endEvent = cc11001100_hook("endEvent", $.fx.transitionEnd, "var-init"),
      fired = cc11001100_hook("fired", false, "var-init");
    if (duration === undefined) duration = cc11001100_hook("duration", $.fx.speeds._default / 1e3, "assign");
    if (delay === undefined) delay = cc11001100_hook("delay", 0, "assign");
    if ($.fx.off) duration = cc11001100_hook("duration", 0, "assign");
    if (typeof properties == "string") {
      cssValues[animationName] = cc11001100_hook("cssValues[animationName]", properties, "assign");
      cssValues[animationDuration] = cc11001100_hook("cssValues[animationDuration]", duration + "s", "assign");
      cssValues[animationDelay] = cc11001100_hook("cssValues[animationDelay]", delay + "s", "assign");
      cssValues[animationTiming] = cc11001100_hook("cssValues[animationTiming]", ease || "linear", "assign");
      endEvent = cc11001100_hook("endEvent", $.fx.animationEnd, "assign");
    } else {
      cssProperties = cc11001100_hook("cssProperties", [], "assign");
      for (key in properties) if (supportedTransforms.test(key)) transforms += cc11001100_hook("transforms", key + "(" + properties[key] + ") ", "assign");else cssValues[key] = cc11001100_hook("cssValues[key]", properties[key], "assign"), cssProperties.push(dasherize(key));
      if (transforms) cssValues[transform] = cc11001100_hook("cssValues[transform]", transforms, "assign"), cssProperties.push(transform);
      if (duration > 0 && typeof properties === "object") {
        cssValues[transitionProperty] = cc11001100_hook("cssValues[transitionProperty]", cssProperties.join(", "), "assign");
        cssValues[transitionDuration] = cc11001100_hook("cssValues[transitionDuration]", duration + "s", "assign");
        cssValues[transitionDelay] = cc11001100_hook("cssValues[transitionDelay]", delay + "s", "assign");
        cssValues[transitionTiming] = cc11001100_hook("cssValues[transitionTiming]", ease || "linear", "assign");
      }
    }
    wrappedCallback = cc11001100_hook("wrappedCallback", function (event) {
      if (typeof event !== "undefined") {
        if (event.target !== event.currentTarget) return;
        $(event.target).unbind(endEvent, wrappedCallback);
      } else $(this).unbind(endEvent, wrappedCallback);
      fired = cc11001100_hook("fired", true, "assign");
      $(this).css(cssReset);
      callback && callback.call(this);
    }, "assign");
    if (duration > 0) {
      this.bind(endEvent, wrappedCallback);
      setTimeout(function () {
        if (fired) return;
        wrappedCallback.call(that);
      }, (duration + delay) * 1e3 + 25);
    }
    this.size() && this.get(0).clientLeft;
    this.css(cssValues);
    if (duration <= 0) setTimeout(function () {
      that.each(function () {
        wrappedCallback.call(this);
      });
    }, 0);
    return this;
  }, "assign");
  testEl = cc11001100_hook("testEl", null, "assign");
})(Zepto);
(function ($, undefined) {
  var document = cc11001100_hook("document", window.document, "var-init"),
    docElem = cc11001100_hook("docElem", document.documentElement, "var-init"),
    origShow = cc11001100_hook("origShow", $.fn.show, "var-init"),
    origHide = cc11001100_hook("origHide", $.fn.hide, "var-init"),
    origToggle = cc11001100_hook("origToggle", $.fn.toggle, "var-init");
  function anim(el, speed, opacity, scale, callback) {
    cc11001100_hook("el", el, "function-parameter");
    cc11001100_hook("speed", speed, "function-parameter");
    cc11001100_hook("opacity", opacity, "function-parameter");
    cc11001100_hook("scale", scale, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (typeof speed == "function" && !callback) callback = cc11001100_hook("callback", speed, "assign"), speed = cc11001100_hook("speed", undefined, "assign");
    var props = cc11001100_hook("props", {
      opacity: cc11001100_hook("opacity", opacity, "object-key-init")
    }, "var-init");
    if (scale) {
      props.scale = cc11001100_hook("props.scale", scale, "assign");
      el.css($.fx.cssPrefix + "transform-origin", "0 0");
    }
    return el.animate(props, speed, null, callback);
  }
  function hide(el, speed, scale, callback) {
    cc11001100_hook("el", el, "function-parameter");
    cc11001100_hook("speed", speed, "function-parameter");
    cc11001100_hook("scale", scale, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    return anim(el, speed, 0, scale, function () {
      origHide.call($(this));
      callback && callback.call(this);
    });
  }
  $.fn.show = cc11001100_hook("$.fn.show", function (speed, callback) {
    origShow.call(this);
    if (speed === undefined) speed = cc11001100_hook("speed", 0, "assign");else this.css("opacity", 0);
    return anim(this, speed, 1, "1,1", callback);
  }, "assign");
  $.fn.hide = cc11001100_hook("$.fn.hide", function (speed, callback) {
    if (speed === undefined) return origHide.call(this);else return hide(this, speed, "0,0", callback);
  }, "assign");
  $.fn.toggle = cc11001100_hook("$.fn.toggle", function (speed, callback) {
    if (speed === undefined || typeof speed == "boolean") return origToggle.call(this, speed);else return this.each(function () {
      var el = cc11001100_hook("el", $(this), "var-init");
      el[el.css("display") == "none" ? "show" : "hide"](speed, callback);
    });
  }, "assign");
  $.fn.fadeTo = cc11001100_hook("$.fn.fadeTo", function (speed, opacity, callback) {
    return anim(this, speed, opacity, null, callback);
  }, "assign");
  $.fn.fadeIn = cc11001100_hook("$.fn.fadeIn", function (speed, callback) {
    var target = cc11001100_hook("target", this.css("opacity"), "var-init");
    if (target > 0) this.css("opacity", 0);else target = cc11001100_hook("target", 1, "assign");
    return origShow.call(this).fadeTo(speed, target, callback);
  }, "assign");
  $.fn.fadeOut = cc11001100_hook("$.fn.fadeOut", function (speed, callback) {
    return hide(this, speed, null, callback);
  }, "assign");
  $.fn.fadeToggle = cc11001100_hook("$.fn.fadeToggle", function (speed, callback) {
    return this.each(function () {
      var el = cc11001100_hook("el", $(this), "var-init");
      el[el.css("opacity") == 0 || el.css("display") == "none" ? "fadeIn" : "fadeOut"](speed, callback);
    });
  }, "assign");
})(Zepto);
(function () {
  var root = cc11001100_hook("root", this, "var-init");
  var previousUnderscore = cc11001100_hook("previousUnderscore", root._, "var-init");
  var ArrayProto = cc11001100_hook("ArrayProto", Array.prototype, "var-init"),
    ObjProto = cc11001100_hook("ObjProto", Object.prototype, "var-init"),
    FuncProto = cc11001100_hook("FuncProto", Function.prototype, "var-init");
  var push = cc11001100_hook("push", ArrayProto.push, "var-init"),
    slice = cc11001100_hook("slice", ArrayProto.slice, "var-init"),
    toString = cc11001100_hook("toString", ObjProto.toString, "var-init"),
    hasOwnProperty = cc11001100_hook("hasOwnProperty", ObjProto.hasOwnProperty, "var-init");
  var nativeIsArray = cc11001100_hook("nativeIsArray", Array.isArray, "var-init"),
    nativeKeys = cc11001100_hook("nativeKeys", Object.keys, "var-init"),
    nativeBind = cc11001100_hook("nativeBind", FuncProto.bind, "var-init"),
    nativeCreate = cc11001100_hook("nativeCreate", Object.create, "var-init");
  var Ctor = function () {};
  var _ = function (obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = cc11001100_hook("this._wrapped", obj, "assign");
  };
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = cc11001100_hook("exports", module.exports = cc11001100_hook("module.exports", _, "assign"), "assign");
    }
    exports._ = cc11001100_hook("exports._", _, "assign");
  } else {
    root._ = cc11001100_hook("root._", _, "assign");
  }
  _.VERSION = cc11001100_hook("_.VERSION", "3.5.0", "assign");
  var optimizeCb = function (func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1:
        return function (value) {
          return func.call(context, value);
        };
      case 2:
        return function (value, other) {
          return func.call(context, value, other);
        };
      case 3:
        return function (value, index, collection) {
          return func.call(context, value, index, collection);
        };
      case 4:
        return function (accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection);
        };
    }
    return function () {
      return func.apply(context, arguments);
    };
  };
  var cb = function (value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = cc11001100_hook("_.iteratee", function (value, context) {
    return cb(value, context, Infinity);
  }, "assign");
  var createAssigner = function (keysFunc, undefinedOnly) {
    return function (obj) {
      var length = cc11001100_hook("length", arguments.length, "var-init");
      if (length < 2 || obj == null) return obj;
      for (var index = cc11001100_hook("index", 1, "var-init"); index < length; index++) {
        var source = cc11001100_hook("source", arguments[index], "var-init"),
          keys = cc11001100_hook("keys", keysFunc(source), "var-init"),
          l = cc11001100_hook("l", keys.length, "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < l; i++) {
          var key = cc11001100_hook("key", keys[i], "var-init");
          if (!undefinedOnly || obj[key] === void 0) obj[key] = cc11001100_hook("obj[key]", source[key], "assign");
        }
      }
      return obj;
    };
  };
  var baseCreate = function (prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = cc11001100_hook("Ctor.prototype", prototype, "assign");
    var result = cc11001100_hook("result", new Ctor(), "var-init");
    Ctor.prototype = cc11001100_hook("Ctor.prototype", null, "assign");
    return result;
  };
  var property = function (key) {
    return function (obj) {
      return obj == null ? void 0 : obj[key];
    };
  };
  var MAX_ARRAY_INDEX = cc11001100_hook("MAX_ARRAY_INDEX", Math.pow(2, 53) - 1, "var-init");
  var getLength = cc11001100_hook("getLength", property("length"), "var-init");
  var isArrayLike = function (collection) {
    var length = cc11001100_hook("length", getLength(collection), "var-init");
    return typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
  };
  _.each = cc11001100_hook("_.each", _.forEach = cc11001100_hook("_.forEach", function (obj, iteratee, context) {
    iteratee = cc11001100_hook("iteratee", optimizeCb(iteratee, context), "assign");
    var i, length;
    if (isArrayLike(obj)) {
      for (i = cc11001100_hook("i", 0, "assign"), length = cc11001100_hook("length", obj.length, "assign"); i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = cc11001100_hook("keys", _.keys(obj), "var-init");
      for (i = cc11001100_hook("i", 0, "assign"), length = cc11001100_hook("length", keys.length, "assign"); i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  }, "assign"), "assign");
  _.map = cc11001100_hook("_.map", _.collect = cc11001100_hook("_.collect", function (obj, iteratee, context) {
    iteratee = cc11001100_hook("iteratee", cb(iteratee, context), "assign");
    var keys = cc11001100_hook("keys", !isArrayLike(obj) && _.keys(obj), "var-init"),
      length = cc11001100_hook("length", (keys || obj).length, "var-init"),
      results = cc11001100_hook("results", Array(length), "var-init");
    for (var index = cc11001100_hook("index", 0, "var-init"); index < length; index++) {
      var currentKey = cc11001100_hook("currentKey", keys ? keys[index] : index, "var-init");
      results[index] = cc11001100_hook("results[index]", iteratee(obj[currentKey], currentKey, obj), "assign");
    }
    return results;
  }, "assign"), "assign");
  function createReduce(dir) {
    cc11001100_hook("dir", dir, "function-parameter");
    function iterator(obj, iteratee, memo, keys, index, length) {
      cc11001100_hook("obj", obj, "function-parameter");
      cc11001100_hook("iteratee", iteratee, "function-parameter");
      cc11001100_hook("memo", memo, "function-parameter");
      cc11001100_hook("keys", keys, "function-parameter");
      cc11001100_hook("index", index, "function-parameter");
      cc11001100_hook("length", length, "function-parameter");
      for (; index >= 0 && index < length; index += cc11001100_hook("index", dir, "assign")) {
        var currentKey = cc11001100_hook("currentKey", keys ? keys[index] : index, "var-init");
        memo = cc11001100_hook("memo", iteratee(memo, obj[currentKey], currentKey, obj), "assign");
      }
      return memo;
    }
    return function (obj, iteratee, memo, context) {
      iteratee = cc11001100_hook("iteratee", optimizeCb(iteratee, context, 4), "assign");
      var keys = cc11001100_hook("keys", !isArrayLike(obj) && _.keys(obj), "var-init"),
        length = cc11001100_hook("length", (keys || obj).length, "var-init"),
        index = cc11001100_hook("index", dir > 0 ? 0 : length - 1, "var-init");
      if (arguments.length < 3) {
        memo = cc11001100_hook("memo", obj[keys ? keys[index] : index], "assign");
        index += cc11001100_hook("index", dir, "assign");
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }
  _.reduce = cc11001100_hook("_.reduce", _.foldl = cc11001100_hook("_.foldl", _.inject = cc11001100_hook("_.inject", createReduce(1), "assign"), "assign"), "assign");
  _.reduceRight = cc11001100_hook("_.reduceRight", _.foldr = cc11001100_hook("_.foldr", createReduce(-1), "assign"), "assign");
  _.find = cc11001100_hook("_.find", _.detect = cc11001100_hook("_.detect", function (obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = cc11001100_hook("key", _.findIndex(obj, predicate, context), "assign");
    } else {
      key = cc11001100_hook("key", _.findKey(obj, predicate, context), "assign");
    }
    if (key !== void 0 && key !== -1) return obj[key];
  }, "assign"), "assign");
  _.filter = cc11001100_hook("_.filter", _.select = cc11001100_hook("_.select", function (obj, predicate, context) {
    var results = cc11001100_hook("results", [], "var-init");
    predicate = cc11001100_hook("predicate", cb(predicate, context), "assign");
    _.each(obj, function (value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  }, "assign"), "assign");
  _.reject = cc11001100_hook("_.reject", function (obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  }, "assign");
  _.every = cc11001100_hook("_.every", _.all = cc11001100_hook("_.all", function (obj, predicate, context) {
    predicate = cc11001100_hook("predicate", cb(predicate, context), "assign");
    var keys = cc11001100_hook("keys", !isArrayLike(obj) && _.keys(obj), "var-init"),
      length = cc11001100_hook("length", (keys || obj).length, "var-init");
    for (var index = cc11001100_hook("index", 0, "var-init"); index < length; index++) {
      var currentKey = cc11001100_hook("currentKey", keys ? keys[index] : index, "var-init");
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  }, "assign"), "assign");
  _.some = cc11001100_hook("_.some", _.any = cc11001100_hook("_.any", function (obj, predicate, context) {
    predicate = cc11001100_hook("predicate", cb(predicate, context), "assign");
    var keys = cc11001100_hook("keys", !isArrayLike(obj) && _.keys(obj), "var-init"),
      length = cc11001100_hook("length", (keys || obj).length, "var-init");
    for (var index = cc11001100_hook("index", 0, "var-init"); index < length; index++) {
      var currentKey = cc11001100_hook("currentKey", keys ? keys[index] : index, "var-init");
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  }, "assign"), "assign");
  _.contains = cc11001100_hook("_.contains", _.includes = cc11001100_hook("_.includes", _.include = cc11001100_hook("_.include", function (obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = cc11001100_hook("obj", _.values(obj), "assign");
    if (typeof fromIndex != "number" || guard) fromIndex = cc11001100_hook("fromIndex", 0, "assign");
    return _.indexOf(obj, item, fromIndex) >= 0;
  }, "assign"), "assign"), "assign");
  _.invoke = cc11001100_hook("_.invoke", function (obj, method) {
    var args = cc11001100_hook("args", slice.call(arguments, 2), "var-init");
    var isFunc = cc11001100_hook("isFunc", _.isFunction(method), "var-init");
    return _.map(obj, function (value) {
      var func = cc11001100_hook("func", isFunc ? method : value[method], "var-init");
      return func == null ? func : func.apply(value, args);
    });
  }, "assign");
  _.pluck = cc11001100_hook("_.pluck", function (obj, key) {
    return _.map(obj, _.property(key));
  }, "assign");
  _.where = cc11001100_hook("_.where", function (obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  }, "assign");
  _.findWhere = cc11001100_hook("_.findWhere", function (obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  }, "assign");
  _.max = cc11001100_hook("_.max", function (obj, iteratee, context) {
    var result = cc11001100_hook("result", -Infinity, "var-init"),
      lastComputed = cc11001100_hook("lastComputed", -Infinity, "var-init"),
      value,
      computed;
    if (iteratee == null && obj != null) {
      obj = cc11001100_hook("obj", isArrayLike(obj) ? obj : _.values(obj), "assign");
      for (var i = cc11001100_hook("i", 0, "var-init"), length = cc11001100_hook("length", obj.length, "var-init"); i < length; i++) {
        value = cc11001100_hook("value", obj[i], "assign");
        if (value > result) {
          result = cc11001100_hook("result", value, "assign");
        }
      }
    } else {
      iteratee = cc11001100_hook("iteratee", cb(iteratee, context), "assign");
      _.each(obj, function (value, index, list) {
        computed = cc11001100_hook("computed", iteratee(value, index, list), "assign");
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = cc11001100_hook("result", value, "assign");
          lastComputed = cc11001100_hook("lastComputed", computed, "assign");
        }
      });
    }
    return result;
  }, "assign");
  _.min = cc11001100_hook("_.min", function (obj, iteratee, context) {
    var result = cc11001100_hook("result", Infinity, "var-init"),
      lastComputed = cc11001100_hook("lastComputed", Infinity, "var-init"),
      value,
      computed;
    if (iteratee == null && obj != null) {
      obj = cc11001100_hook("obj", isArrayLike(obj) ? obj : _.values(obj), "assign");
      for (var i = cc11001100_hook("i", 0, "var-init"), length = cc11001100_hook("length", obj.length, "var-init"); i < length; i++) {
        value = cc11001100_hook("value", obj[i], "assign");
        if (value < result) {
          result = cc11001100_hook("result", value, "assign");
        }
      }
    } else {
      iteratee = cc11001100_hook("iteratee", cb(iteratee, context), "assign");
      _.each(obj, function (value, index, list) {
        computed = cc11001100_hook("computed", iteratee(value, index, list), "assign");
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = cc11001100_hook("result", value, "assign");
          lastComputed = cc11001100_hook("lastComputed", computed, "assign");
        }
      });
    }
    return result;
  }, "assign");
  _.shuffle = cc11001100_hook("_.shuffle", function (obj) {
    var set = cc11001100_hook("set", isArrayLike(obj) ? obj : _.values(obj), "var-init");
    var length = cc11001100_hook("length", set.length, "var-init");
    var shuffled = cc11001100_hook("shuffled", Array(length), "var-init");
    for (var index = cc11001100_hook("index", 0, "var-init"), rand; index < length; index++) {
      rand = cc11001100_hook("rand", _.random(0, index), "assign");
      if (rand !== index) shuffled[index] = cc11001100_hook("shuffled[index]", shuffled[rand], "assign");
      shuffled[rand] = cc11001100_hook("shuffled[rand]", set[index], "assign");
    }
    return shuffled;
  }, "assign");
  _.sample = cc11001100_hook("_.sample", function (obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = cc11001100_hook("obj", _.values(obj), "assign");
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  }, "assign");
  _.sortBy = cc11001100_hook("_.sortBy", function (obj, iteratee, context) {
    iteratee = cc11001100_hook("iteratee", cb(iteratee, context), "assign");
    return _.pluck(_.map(obj, function (value, index, list) {
      return {
        value: cc11001100_hook("value", value, "object-key-init"),
        index: cc11001100_hook("index", index, "object-key-init"),
        criteria: cc11001100_hook("criteria", iteratee(value, index, list), "object-key-init")
      };
    }).sort(function (left, right) {
      var a = cc11001100_hook("a", left.criteria, "var-init");
      var b = cc11001100_hook("b", right.criteria, "var-init");
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), "value");
  }, "assign");
  var group = function (behavior) {
    return function (obj, iteratee, context) {
      var result = cc11001100_hook("result", {}, "var-init");
      iteratee = cc11001100_hook("iteratee", cb(iteratee, context), "assign");
      _.each(obj, function (value, index) {
        var key = cc11001100_hook("key", iteratee(value, index, obj), "var-init");
        behavior(result, value, key);
      });
      return result;
    };
  };
  _.groupBy = cc11001100_hook("_.groupBy", group(function (result, value, key) {
    if (_.has(result, key)) result[key].push(value);else result[key] = cc11001100_hook("result[key]", [value], "assign");
  }), "assign");
  _.indexBy = cc11001100_hook("_.indexBy", group(function (result, value, key) {
    result[key] = cc11001100_hook("result[key]", value, "assign");
  }), "assign");
  _.countBy = cc11001100_hook("_.countBy", group(function (result, value, key) {
    if (_.has(result, key)) result[key]++;else result[key] = cc11001100_hook("result[key]", 1, "assign");
  }), "assign");
  _.toArray = cc11001100_hook("_.toArray", function (obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  }, "assign");
  _.size = cc11001100_hook("_.size", function (obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  }, "assign");
  _.partition = cc11001100_hook("_.partition", function (obj, predicate, context) {
    predicate = cc11001100_hook("predicate", cb(predicate, context), "assign");
    var pass = cc11001100_hook("pass", [], "var-init"),
      fail = cc11001100_hook("fail", [], "var-init");
    _.each(obj, function (value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  }, "assign");
  _.first = cc11001100_hook("_.first", _.head = cc11001100_hook("_.head", _.take = cc11001100_hook("_.take", function (array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  }, "assign"), "assign"), "assign");
  _.initial = cc11001100_hook("_.initial", function (array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  }, "assign");
  _.last = cc11001100_hook("_.last", function (array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  }, "assign");
  _.rest = cc11001100_hook("_.rest", _.tail = cc11001100_hook("_.tail", _.drop = cc11001100_hook("_.drop", function (array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  }, "assign"), "assign"), "assign");
  _.compact = cc11001100_hook("_.compact", function (array) {
    return _.filter(array, _.identity);
  }, "assign");
  var flatten = function (input, shallow, strict, startIndex) {
    var output = cc11001100_hook("output", [], "var-init"),
      idx = cc11001100_hook("idx", 0, "var-init");
    for (var i = cc11001100_hook("i", startIndex || 0, "var-init"), length = cc11001100_hook("length", getLength(input), "var-init"); i < length; i++) {
      var value = cc11001100_hook("value", input[i], "var-init");
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        if (!shallow) value = cc11001100_hook("value", flatten(value, shallow, strict), "assign");
        var j = cc11001100_hook("j", 0, "var-init"),
          len = cc11001100_hook("len", value.length, "var-init");
        output.length += cc11001100_hook("output.length", len, "assign");
        while (j < len) {
          output[idx++] = cc11001100_hook("output[idx++]", value[j++], "assign");
        }
      } else if (!strict) {
        output[idx++] = cc11001100_hook("output[idx++]", value, "assign");
      }
    }
    return output;
  };
  _.flatten = cc11001100_hook("_.flatten", function (array, shallow) {
    return flatten(array, shallow, false);
  }, "assign");
  _.without = cc11001100_hook("_.without", function (array) {
    return _.difference(array, slice.call(arguments, 1));
  }, "assign");
  _.uniq = cc11001100_hook("_.uniq", _.unique = cc11001100_hook("_.unique", function (array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = cc11001100_hook("context", iteratee, "assign");
      iteratee = cc11001100_hook("iteratee", isSorted, "assign");
      isSorted = cc11001100_hook("isSorted", false, "assign");
    }
    if (iteratee != null) iteratee = cc11001100_hook("iteratee", cb(iteratee, context), "assign");
    var result = cc11001100_hook("result", [], "var-init");
    var seen = cc11001100_hook("seen", [], "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"), length = cc11001100_hook("length", getLength(array), "var-init"); i < length; i++) {
      var value = cc11001100_hook("value", array[i], "var-init"),
        computed = cc11001100_hook("computed", iteratee ? iteratee(value, i, array) : value, "var-init");
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = cc11001100_hook("seen", computed, "assign");
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  }, "assign"), "assign");
  _.union = cc11001100_hook("_.union", function () {
    return _.uniq(flatten(arguments, true, true));
  }, "assign");
  _.intersection = cc11001100_hook("_.intersection", function (array) {
    var result = cc11001100_hook("result", [], "var-init");
    var argsLength = cc11001100_hook("argsLength", arguments.length, "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"), length = cc11001100_hook("length", getLength(array), "var-init"); i < length; i++) {
      var item = cc11001100_hook("item", array[i], "var-init");
      if (_.contains(result, item)) continue;
      for (var j = cc11001100_hook("j", 1, "var-init"); j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  }, "assign");
  _.difference = cc11001100_hook("_.difference", function (array) {
    var rest = cc11001100_hook("rest", flatten(arguments, true, true, 1), "var-init");
    return _.filter(array, function (value) {
      return !_.contains(rest, value);
    });
  }, "assign");
  _.zip = cc11001100_hook("_.zip", function () {
    return _.unzip(arguments);
  }, "assign");
  _.unzip = cc11001100_hook("_.unzip", function (array) {
    var length = cc11001100_hook("length", array && _.max(array, getLength).length || 0, "var-init");
    var result = cc11001100_hook("result", Array(length), "var-init");
    for (var index = cc11001100_hook("index", 0, "var-init"); index < length; index++) {
      result[index] = cc11001100_hook("result[index]", _.pluck(array, index), "assign");
    }
    return result;
  }, "assign");
  _.object = cc11001100_hook("_.object", function (list, values) {
    var result = cc11001100_hook("result", {}, "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"), length = cc11001100_hook("length", getLength(list), "var-init"); i < length; i++) {
      if (values) {
        result[list[i]] = cc11001100_hook("result[list[i]]", values[i], "assign");
      } else {
        result[list[i][0]] = cc11001100_hook("result[list[i][0]]", list[i][1], "assign");
      }
    }
    return result;
  }, "assign");
  function createPredicateIndexFinder(dir) {
    cc11001100_hook("dir", dir, "function-parameter");
    return function (array, predicate, context) {
      predicate = cc11001100_hook("predicate", cb(predicate, context), "assign");
      var length = cc11001100_hook("length", getLength(array), "var-init");
      var index = cc11001100_hook("index", dir > 0 ? 0 : length - 1, "var-init");
      for (; index >= 0 && index < length; index += cc11001100_hook("index", dir, "assign")) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }
  _.findIndex = cc11001100_hook("_.findIndex", createPredicateIndexFinder(1), "assign");
  _.findLastIndex = cc11001100_hook("_.findLastIndex", createPredicateIndexFinder(-1), "assign");
  _.sortedIndex = cc11001100_hook("_.sortedIndex", function (array, obj, iteratee, context) {
    iteratee = cc11001100_hook("iteratee", cb(iteratee, context, 1), "assign");
    var value = cc11001100_hook("value", iteratee(obj), "var-init");
    var low = cc11001100_hook("low", 0, "var-init"),
      high = cc11001100_hook("high", getLength(array), "var-init");
    while (low < high) {
      var mid = cc11001100_hook("mid", Math.floor((low + high) / 2), "var-init");
      if (iteratee(array[mid]) < value) low = cc11001100_hook("low", mid + 1, "assign");else high = cc11001100_hook("high", mid, "assign");
    }
    return low;
  }, "assign");
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    cc11001100_hook("dir", dir, "function-parameter");
    cc11001100_hook("predicateFind", predicateFind, "function-parameter");
    cc11001100_hook("sortedIndex", sortedIndex, "function-parameter");
    return function (array, item, idx) {
      var i = cc11001100_hook("i", 0, "var-init"),
        length = cc11001100_hook("length", getLength(array), "var-init");
      if (typeof idx == "number") {
        if (dir > 0) {
          i = cc11001100_hook("i", idx >= 0 ? idx : Math.max(idx + length, i), "assign");
        } else {
          length = cc11001100_hook("length", idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1, "assign");
        }
      } else if (sortedIndex && idx && length) {
        idx = cc11001100_hook("idx", sortedIndex(array, item), "assign");
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = cc11001100_hook("idx", predicateFind(slice.call(array, i, length), _.isNaN), "assign");
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = cc11001100_hook("idx", dir > 0 ? i : length - 1, "assign"); idx >= 0 && idx < length; idx += cc11001100_hook("idx", dir, "assign")) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }
  _.indexOf = cc11001100_hook("_.indexOf", createIndexFinder(1, _.findIndex, _.sortedIndex), "assign");
  _.lastIndexOf = cc11001100_hook("_.lastIndexOf", createIndexFinder(-1, _.findLastIndex), "assign");
  _.range = cc11001100_hook("_.range", function (start, stop, step) {
    if (stop == null) {
      stop = cc11001100_hook("stop", start || 0, "assign");
      start = cc11001100_hook("start", 0, "assign");
    }
    step = cc11001100_hook("step", step || 1, "assign");
    var length = cc11001100_hook("length", Math.max(Math.ceil((stop - start) / step), 0), "var-init");
    var range = cc11001100_hook("range", Array(length), "var-init");
    for (var idx = cc11001100_hook("idx", 0, "var-init"); idx < length; idx++, start += cc11001100_hook("start", step, "assign")) {
      range[idx] = cc11001100_hook("range[idx]", start, "assign");
    }
    return range;
  }, "assign");
  var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = cc11001100_hook("self", baseCreate(sourceFunc.prototype), "var-init");
    var result = cc11001100_hook("result", sourceFunc.apply(self, args), "var-init");
    if (_.isObject(result)) return result;
    return self;
  };
  _.bind = cc11001100_hook("_.bind", function (func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError("Bind must be called on a function");
    var args = cc11001100_hook("args", slice.call(arguments, 2), "var-init");
    var bound = function () {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  }, "assign");
  _.partial = cc11001100_hook("_.partial", function (func) {
    var boundArgs = cc11001100_hook("boundArgs", slice.call(arguments, 1), "var-init");
    var bound = function () {
      var position = cc11001100_hook("position", 0, "var-init"),
        length = cc11001100_hook("length", boundArgs.length, "var-init");
      var args = cc11001100_hook("args", Array(length), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < length; i++) {
        args[i] = cc11001100_hook("args[i]", boundArgs[i] === _ ? arguments[position++] : boundArgs[i], "assign");
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  }, "assign");
  _.bindAll = cc11001100_hook("_.bindAll", function (obj) {
    var i,
      length = cc11001100_hook("length", arguments.length, "var-init"),
      key;
    if (length <= 1) throw new Error("bindAll must be passed function names");
    for (i = cc11001100_hook("i", 1, "assign"); i < length; i++) {
      key = cc11001100_hook("key", arguments[i], "assign");
      obj[key] = cc11001100_hook("obj[key]", _.bind(obj[key], obj), "assign");
    }
    return obj;
  }, "assign");
  _.memoize = cc11001100_hook("_.memoize", function (func, hasher) {
    var memoize = function (key) {
      var cache = cc11001100_hook("cache", memoize.cache, "var-init");
      var address = cc11001100_hook("address", "" + (hasher ? hasher.apply(this, arguments) : key), "var-init");
      if (!_.has(cache, address)) cache[address] = cc11001100_hook("cache[address]", func.apply(this, arguments), "assign");
      return cache[address];
    };
    memoize.cache = cc11001100_hook("memoize.cache", {}, "assign");
    return memoize;
  }, "assign");
  _.delay = cc11001100_hook("_.delay", function (func, wait) {
    var args = cc11001100_hook("args", slice.call(arguments, 2), "var-init");
    return setTimeout(function () {
      return func.apply(null, args);
    }, wait);
  }, "assign");
  _.defer = cc11001100_hook("_.defer", _.partial(_.delay, _, 1), "assign");
  _.throttle = cc11001100_hook("_.throttle", function (func, wait, options) {
    var context, args, result;
    var timeout = cc11001100_hook("timeout", null, "var-init");
    var previous = cc11001100_hook("previous", 0, "var-init");
    if (!options) options = cc11001100_hook("options", {}, "assign");
    var later = function () {
      previous = cc11001100_hook("previous", options.leading === false ? 0 : _.now(), "assign");
      timeout = cc11001100_hook("timeout", null, "assign");
      result = cc11001100_hook("result", func.apply(context, args), "assign");
      if (!timeout) context = cc11001100_hook("context", args = cc11001100_hook("args", null, "assign"), "assign");
    };
    return function () {
      var now = cc11001100_hook("now", _.now(), "var-init");
      if (!previous && options.leading === false) previous = cc11001100_hook("previous", now, "assign");
      var remaining = cc11001100_hook("remaining", wait - (now - previous), "var-init");
      context = cc11001100_hook("context", this, "assign");
      args = cc11001100_hook("args", arguments, "assign");
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = cc11001100_hook("timeout", null, "assign");
        }
        previous = cc11001100_hook("previous", now, "assign");
        result = cc11001100_hook("result", func.apply(context, args), "assign");
        if (!timeout) context = cc11001100_hook("context", args = cc11001100_hook("args", null, "assign"), "assign");
      } else if (!timeout && options.trailing !== false) {
        timeout = cc11001100_hook("timeout", setTimeout(later, remaining), "assign");
      }
      return result;
    };
  }, "assign");
  _.debounce = cc11001100_hook("_.debounce", function (func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    var later = function () {
      var last = cc11001100_hook("last", _.now() - timestamp, "var-init");
      if (last < wait && last >= 0) {
        timeout = cc11001100_hook("timeout", setTimeout(later, wait - last), "assign");
      } else {
        timeout = cc11001100_hook("timeout", null, "assign");
        if (!immediate) {
          result = cc11001100_hook("result", func.apply(context, args), "assign");
          if (!timeout) context = cc11001100_hook("context", args = cc11001100_hook("args", null, "assign"), "assign");
        }
      }
    };
    return function () {
      context = cc11001100_hook("context", this, "assign");
      args = cc11001100_hook("args", arguments, "assign");
      timestamp = cc11001100_hook("timestamp", _.now(), "assign");
      var callNow = cc11001100_hook("callNow", immediate && !timeout, "var-init");
      if (!timeout) timeout = cc11001100_hook("timeout", setTimeout(later, wait), "assign");
      if (callNow) {
        result = cc11001100_hook("result", func.apply(context, args), "assign");
        context = cc11001100_hook("context", args = cc11001100_hook("args", null, "assign"), "assign");
      }
      return result;
    };
  }, "assign");
  _.wrap = cc11001100_hook("_.wrap", function (func, wrapper) {
    return _.partial(wrapper, func);
  }, "assign");
  _.negate = cc11001100_hook("_.negate", function (predicate) {
    return function () {
      return !predicate.apply(this, arguments);
    };
  }, "assign");
  _.compose = cc11001100_hook("_.compose", function () {
    var args = cc11001100_hook("args", arguments, "var-init");
    var start = cc11001100_hook("start", args.length - 1, "var-init");
    return function () {
      var i = cc11001100_hook("i", start, "var-init");
      var result = cc11001100_hook("result", args[start].apply(this, arguments), "var-init");
      while (i--) result = cc11001100_hook("result", args[i].call(this, result), "assign");
      return result;
    };
  }, "assign");
  _.after = cc11001100_hook("_.after", function (times, func) {
    return function () {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  }, "assign");
  _.before = cc11001100_hook("_.before", function (times, func) {
    var memo;
    return function () {
      if (--times > 0) {
        memo = cc11001100_hook("memo", func.apply(this, arguments), "assign");
      }
      if (times <= 1) func = cc11001100_hook("func", null, "assign");
      return memo;
    };
  }, "assign");
  _.once = cc11001100_hook("_.once", _.partial(_.before, 2), "assign");
  var hasEnumBug = cc11001100_hook("hasEnumBug", !{
    toString: cc11001100_hook("toString", null, "object-key-init")
  }.propertyIsEnumerable("toString"), "var-init");
  var nonEnumerableProps = cc11001100_hook("nonEnumerableProps", ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], "var-init");
  function collectNonEnumProps(obj, keys) {
    cc11001100_hook("obj", obj, "function-parameter");
    cc11001100_hook("keys", keys, "function-parameter");
    var nonEnumIdx = cc11001100_hook("nonEnumIdx", nonEnumerableProps.length, "var-init");
    var constructor = cc11001100_hook("constructor", obj.constructor, "var-init");
    var proto = cc11001100_hook("proto", _.isFunction(constructor) && constructor.prototype || ObjProto, "var-init");
    var prop = cc11001100_hook("prop", "constructor", "var-init");
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
    while (nonEnumIdx--) {
      prop = cc11001100_hook("prop", nonEnumerableProps[nonEnumIdx], "assign");
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }
  _.keys = cc11001100_hook("_.keys", function (obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = cc11001100_hook("keys", [], "var-init");
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  }, "assign");
  _.allKeys = cc11001100_hook("_.allKeys", function (obj) {
    if (!_.isObject(obj)) return [];
    var keys = cc11001100_hook("keys", [], "var-init");
    for (var key in obj) keys.push(key);
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  }, "assign");
  _.values = cc11001100_hook("_.values", function (obj) {
    var keys = cc11001100_hook("keys", _.keys(obj), "var-init");
    var length = cc11001100_hook("length", keys.length, "var-init");
    var values = cc11001100_hook("values", Array(length), "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < length; i++) {
      values[i] = cc11001100_hook("values[i]", obj[keys[i]], "assign");
    }
    return values;
  }, "assign");
  _.mapObject = cc11001100_hook("_.mapObject", function (obj, iteratee, context) {
    iteratee = cc11001100_hook("iteratee", cb(iteratee, context), "assign");
    var keys = cc11001100_hook("keys", _.keys(obj), "var-init"),
      length = cc11001100_hook("length", keys.length, "var-init"),
      results = cc11001100_hook("results", {}, "var-init"),
      currentKey;
    for (var index = cc11001100_hook("index", 0, "var-init"); index < length; index++) {
      currentKey = cc11001100_hook("currentKey", keys[index], "assign");
      results[currentKey] = cc11001100_hook("results[currentKey]", iteratee(obj[currentKey], currentKey, obj), "assign");
    }
    return results;
  }, "assign");
  _.pairs = cc11001100_hook("_.pairs", function (obj) {
    var keys = cc11001100_hook("keys", _.keys(obj), "var-init");
    var length = cc11001100_hook("length", keys.length, "var-init");
    var pairs = cc11001100_hook("pairs", Array(length), "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < length; i++) {
      pairs[i] = cc11001100_hook("pairs[i]", [keys[i], obj[keys[i]]], "assign");
    }
    return pairs;
  }, "assign");
  _.invert = cc11001100_hook("_.invert", function (obj) {
    var result = cc11001100_hook("result", {}, "var-init");
    var keys = cc11001100_hook("keys", _.keys(obj), "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"), length = cc11001100_hook("length", keys.length, "var-init"); i < length; i++) {
      result[obj[keys[i]]] = cc11001100_hook("result[obj[keys[i]]]", keys[i], "assign");
    }
    return result;
  }, "assign");
  _.functions = cc11001100_hook("_.functions", _.methods = cc11001100_hook("_.methods", function (obj) {
    var names = cc11001100_hook("names", [], "var-init");
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  }, "assign"), "assign");
  _.extend = cc11001100_hook("_.extend", createAssigner(_.allKeys), "assign");
  _.extendOwn = cc11001100_hook("_.extendOwn", _.assign = cc11001100_hook("_.assign", createAssigner(_.keys), "assign"), "assign");
  _.findKey = cc11001100_hook("_.findKey", function (obj, predicate, context) {
    predicate = cc11001100_hook("predicate", cb(predicate, context), "assign");
    var keys = cc11001100_hook("keys", _.keys(obj), "var-init"),
      key;
    for (var i = cc11001100_hook("i", 0, "var-init"), length = cc11001100_hook("length", keys.length, "var-init"); i < length; i++) {
      key = cc11001100_hook("key", keys[i], "assign");
      if (predicate(obj[key], key, obj)) return key;
    }
  }, "assign");
  _.pick = cc11001100_hook("_.pick", function (object, oiteratee, context) {
    var result = cc11001100_hook("result", {}, "var-init"),
      obj = cc11001100_hook("obj", object, "var-init"),
      iteratee,
      keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = cc11001100_hook("keys", _.allKeys(obj), "assign");
      iteratee = cc11001100_hook("iteratee", optimizeCb(oiteratee, context), "assign");
    } else {
      keys = cc11001100_hook("keys", flatten(arguments, false, false, 1), "assign");
      iteratee = cc11001100_hook("iteratee", function (value, key, obj) {
        return key in obj;
      }, "assign");
      obj = cc11001100_hook("obj", Object(obj), "assign");
    }
    for (var i = cc11001100_hook("i", 0, "var-init"), length = cc11001100_hook("length", keys.length, "var-init"); i < length; i++) {
      var key = cc11001100_hook("key", keys[i], "var-init");
      var value = cc11001100_hook("value", obj[key], "var-init");
      if (iteratee(value, key, obj)) result[key] = cc11001100_hook("result[key]", value, "assign");
    }
    return result;
  }, "assign");
  _.omit = cc11001100_hook("_.omit", function (obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = cc11001100_hook("iteratee", _.negate(iteratee), "assign");
    } else {
      var keys = cc11001100_hook("keys", _.map(flatten(arguments, false, false, 1), String), "var-init");
      iteratee = cc11001100_hook("iteratee", function (value, key) {
        return !_.contains(keys, key);
      }, "assign");
    }
    return _.pick(obj, iteratee, context);
  }, "assign");
  _.defaults = cc11001100_hook("_.defaults", createAssigner(_.allKeys, true), "assign");
  _.create = cc11001100_hook("_.create", function (prototype, props) {
    var result = cc11001100_hook("result", baseCreate(prototype), "var-init");
    if (props) _.extendOwn(result, props);
    return result;
  }, "assign");
  _.clone = cc11001100_hook("_.clone", function (obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  }, "assign");
  _.tap = cc11001100_hook("_.tap", function (obj, interceptor) {
    interceptor(obj);
    return obj;
  }, "assign");
  _.isMatch = cc11001100_hook("_.isMatch", function (object, attrs) {
    var keys = cc11001100_hook("keys", _.keys(attrs), "var-init"),
      length = cc11001100_hook("length", keys.length, "var-init");
    if (object == null) return !length;
    var obj = cc11001100_hook("obj", Object(object), "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < length; i++) {
      var key = cc11001100_hook("key", keys[i], "var-init");
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  }, "assign");
  var eq = function (a, b, aStack, bStack) {
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    if (a == null || b == null) return a === b;
    if (a instanceof _) a = cc11001100_hook("a", a._wrapped, "assign");
    if (b instanceof _) b = cc11001100_hook("b", b._wrapped, "assign");
    var className = cc11001100_hook("className", toString.call(a), "var-init");
    if (className !== toString.call(b)) return false;
    switch (className) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a === "" + b;
      case "[object Number]":
        if (+a !== +a) return +b !== +b;
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
    }
    var areArrays = cc11001100_hook("areArrays", className === "[object Array]", "var-init");
    if (!areArrays) {
      if (typeof a != "object" || typeof b != "object") return false;
      var aCtor = cc11001100_hook("aCtor", a.constructor, "var-init"),
        bCtor = cc11001100_hook("bCtor", b.constructor, "var-init");
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
        return false;
      }
    }
    aStack = cc11001100_hook("aStack", aStack || [], "assign");
    bStack = cc11001100_hook("bStack", bStack || [], "assign");
    var length = cc11001100_hook("length", aStack.length, "var-init");
    while (length--) {
      if (aStack[length] === a) return bStack[length] === b;
    }
    aStack.push(a);
    bStack.push(b);
    if (areArrays) {
      length = cc11001100_hook("length", a.length, "assign");
      if (length !== b.length) return false;
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      var keys = cc11001100_hook("keys", _.keys(a), "var-init"),
        key;
      length = cc11001100_hook("length", keys.length, "assign");
      if (_.keys(b).length !== length) return false;
      while (length--) {
        key = cc11001100_hook("key", keys[length], "assign");
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    aStack.pop();
    bStack.pop();
    return true;
  };
  _.isEqual = cc11001100_hook("_.isEqual", function (a, b) {
    return eq(a, b);
  }, "assign");
  _.isEmpty = cc11001100_hook("_.isEmpty", function (obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  }, "assign");
  _.isElement = cc11001100_hook("_.isElement", function (obj) {
    return !!(obj && obj.nodeType === 1);
  }, "assign");
  _.isArray = cc11001100_hook("_.isArray", nativeIsArray || function (obj) {
    return toString.call(obj) === "[object Array]";
  }, "assign");
  _.isObject = cc11001100_hook("_.isObject", function (obj) {
    var type = cc11001100_hook("type", typeof obj, "var-init");
    return type === "function" || type === "object" && !!obj;
  }, "assign");
  _.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (name) {
    _["is" + name] = cc11001100_hook("_[\"is\" + name]", function (obj) {
      return toString.call(obj) === "[object " + name + "]";
    }, "assign");
  });
  if (!_.isArguments(arguments)) {
    _.isArguments = cc11001100_hook("_.isArguments", function (obj) {
      return _.has(obj, "callee");
    }, "assign");
  }
  if (typeof /./ != "function" && typeof Int8Array != "object") {
    _.isFunction = cc11001100_hook("_.isFunction", function (obj) {
      return typeof obj == "function" || false;
    }, "assign");
  }
  _.isFinite = cc11001100_hook("_.isFinite", function (obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  }, "assign");
  _.isNaN = cc11001100_hook("_.isNaN", function (obj) {
    return _.isNumber(obj) && obj !== +obj;
  }, "assign");
  _.isBoolean = cc11001100_hook("_.isBoolean", function (obj) {
    return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
  }, "assign");
  _.isNull = cc11001100_hook("_.isNull", function (obj) {
    return obj === null;
  }, "assign");
  _.isUndefined = cc11001100_hook("_.isUndefined", function (obj) {
    return obj === void 0;
  }, "assign");
  _.has = cc11001100_hook("_.has", function (obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }, "assign");
  _.noConflict = cc11001100_hook("_.noConflict", function () {
    root._ = cc11001100_hook("root._", previousUnderscore, "assign");
    return this;
  }, "assign");
  _.identity = cc11001100_hook("_.identity", function (value) {
    return value;
  }, "assign");
  _.constant = cc11001100_hook("_.constant", function (value) {
    return function () {
      return value;
    };
  }, "assign");
  _.noop = cc11001100_hook("_.noop", function () {}, "assign");
  _.property = cc11001100_hook("_.property", property, "assign");
  _.propertyOf = cc11001100_hook("_.propertyOf", function (obj) {
    return obj == null ? function () {} : function (key) {
      return obj[key];
    };
  }, "assign");
  _.matcher = cc11001100_hook("_.matcher", _.matches = cc11001100_hook("_.matches", function (attrs) {
    attrs = cc11001100_hook("attrs", _.extendOwn({}, attrs), "assign");
    return function (obj) {
      return _.isMatch(obj, attrs);
    };
  }, "assign"), "assign");
  _.times = cc11001100_hook("_.times", function (n, iteratee, context) {
    var accum = cc11001100_hook("accum", Array(Math.max(0, n)), "var-init");
    iteratee = cc11001100_hook("iteratee", optimizeCb(iteratee, context, 1), "assign");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < n; i++) accum[i] = cc11001100_hook("accum[i]", iteratee(i), "assign");
    return accum;
  }, "assign");
  _.random = cc11001100_hook("_.random", function (min, max) {
    if (max == null) {
      max = cc11001100_hook("max", min, "assign");
      min = cc11001100_hook("min", 0, "assign");
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  }, "assign");
  _.now = cc11001100_hook("_.now", Date.now || function () {
    return new Date().getTime();
  }, "assign");
  var escapeMap = cc11001100_hook("escapeMap", {
    "&": cc11001100_hook("&", "&amp;", "object-key-init"),
    "<": cc11001100_hook("<", "&lt;", "object-key-init"),
    ">": cc11001100_hook(">", "&gt;", "object-key-init"),
    '"': cc11001100_hook('"', "&quot;", "object-key-init"),
    "'": cc11001100_hook("'", "&#x27;", "object-key-init"),
    "`": cc11001100_hook("`", "&#x60;", "object-key-init")
  }, "var-init");
  var unescapeMap = cc11001100_hook("unescapeMap", _.invert(escapeMap), "var-init");
  var createEscaper = function (map) {
    var escaper = function (match) {
      return map[match];
    };
    var source = cc11001100_hook("source", "(?:" + _.keys(map).join("|") + ")", "var-init");
    var testRegexp = cc11001100_hook("testRegexp", RegExp(source), "var-init");
    var replaceRegexp = cc11001100_hook("replaceRegexp", RegExp(source, "g"), "var-init");
    return function (string) {
      string = cc11001100_hook("string", string == null ? "" : "" + string, "assign");
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = cc11001100_hook("_.escape", createEscaper(escapeMap), "assign");
  _.unescape = cc11001100_hook("_.unescape", createEscaper(unescapeMap), "assign");
  _.result = cc11001100_hook("_.result", function (object, property, fallback) {
    var value = cc11001100_hook("value", object == null ? void 0 : object[property], "var-init");
    if (value === void 0) {
      value = cc11001100_hook("value", fallback, "assign");
    }
    return _.isFunction(value) ? value.call(object) : value;
  }, "assign");
  var idCounter = cc11001100_hook("idCounter", 0, "var-init");
  _.uniqueId = cc11001100_hook("_.uniqueId", function (prefix) {
    var id = cc11001100_hook("id", ++idCounter + "", "var-init");
    return prefix ? prefix + id : id;
  }, "assign");
  _.templateSettings = cc11001100_hook("_.templateSettings", {
    evaluate: cc11001100_hook("evaluate", /<%([\s\S]+?)%>/g, "object-key-init"),
    interpolate: cc11001100_hook("interpolate", /<%=([\s\S]+?)%>/g, "object-key-init"),
    escape: cc11001100_hook("escape", /<%-([\s\S]+?)%>/g, "object-key-init")
  }, "assign");
  var noMatch = cc11001100_hook("noMatch", /(.)^/, "var-init");
  var escapes = cc11001100_hook("escapes", {
    "'": cc11001100_hook("'", "'", "object-key-init"),
    "\\": cc11001100_hook("\\", "\\", "object-key-init"),
    "\r": cc11001100_hook("\r", "r", "object-key-init"),
    "\n": cc11001100_hook("\n", "n", "object-key-init"),
    "\u2028": cc11001100_hook("\u2028", "u2028", "object-key-init"),
    "\u2029": cc11001100_hook("\u2029", "u2029", "object-key-init")
  }, "var-init");
  var escaper = cc11001100_hook("escaper", /\\|'|\r|\n|\u2028|\u2029/g, "var-init");
  var escapeChar = function (match) {
    return "\\" + escapes[match];
  };
  _.template = cc11001100_hook("_.template", function (text, settings, oldSettings) {
    if (!settings && oldSettings) settings = cc11001100_hook("settings", oldSettings, "assign");
    settings = cc11001100_hook("settings", _.defaults({}, settings, _.templateSettings), "assign");
    var matcher = cc11001100_hook("matcher", RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g"), "var-init");
    var index = cc11001100_hook("index", 0, "var-init");
    var source = cc11001100_hook("source", "__p+='", "var-init");
    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
      source += cc11001100_hook("source", text.slice(index, offset).replace(escaper, escapeChar), "assign");
      index = cc11001100_hook("index", offset + match.length, "assign");
      if (escape) {
        source += cc11001100_hook("source", "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'", "assign");
      } else if (interpolate) {
        source += cc11001100_hook("source", "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'", "assign");
      } else if (evaluate) {
        source += cc11001100_hook("source", "';\n" + evaluate + "\n__p+='", "assign");
      }
      return match;
    });
    source += cc11001100_hook("source", "';\n", "assign");
    if (!settings.variable) source = cc11001100_hook("source", "with(obj||{}){\n" + source + "}\n", "assign");
    source = cc11001100_hook("source", "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n", "assign");
    try {
      var render = cc11001100_hook("render", new Function(settings.variable || "obj", "_", source), "var-init");
    } catch (e) {
      e.source = cc11001100_hook("e.source", source, "assign");
      throw e;
    }
    var template = function (data) {
      return render.call(this, data, _);
    };
    var argument = cc11001100_hook("argument", settings.variable || "obj", "var-init");
    template.source = cc11001100_hook("template.source", "function(" + argument + "){\n" + source + "}", "assign");
    return template;
  }, "assign");
  _.chain = cc11001100_hook("_.chain", function (obj) {
    var instance = cc11001100_hook("instance", _(obj), "var-init");
    instance._chain = cc11001100_hook("instance._chain", true, "assign");
    return instance;
  }, "assign");
  var result = function (instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };
  _.mixin = cc11001100_hook("_.mixin", function (obj) {
    _.each(_.functions(obj), function (name) {
      var func = cc11001100_hook("func", _[name] = cc11001100_hook("_[name]", obj[name], "assign"), "var-init");
      _.prototype[name] = cc11001100_hook("_.prototype[name]", function () {
        var args = cc11001100_hook("args", [this._wrapped], "var-init");
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      }, "assign");
    });
  }, "assign");
  _.mixin(_);
  _.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (name) {
    var method = cc11001100_hook("method", ArrayProto[name], "var-init");
    _.prototype[name] = cc11001100_hook("_.prototype[name]", function () {
      var obj = cc11001100_hook("obj", this._wrapped, "var-init");
      method.apply(obj, arguments);
      if ((name === "shift" || name === "splice") && obj.length === 0) delete obj[0];
      return result(this, obj);
    }, "assign");
  });
  _.each(["concat", "join", "slice"], function (name) {
    var method = cc11001100_hook("method", ArrayProto[name], "var-init");
    _.prototype[name] = cc11001100_hook("_.prototype[name]", function () {
      return result(this, method.apply(this._wrapped, arguments));
    }, "assign");
  });
  _.prototype.value = cc11001100_hook("_.prototype.value", function () {
    return this._wrapped;
  }, "assign");
  _.prototype.valueOf = cc11001100_hook("_.prototype.valueOf", _.prototype.toJSON = cc11001100_hook("_.prototype.toJSON", _.prototype.value, "assign"), "assign");
  _.prototype.toString = cc11001100_hook("_.prototype.toString", function () {
    return "" + this._wrapped;
  }, "assign");
  if (typeof define === "function" && define.amd) {
    define("underscore", [], function () {
      return _;
    });
  }
}).call(this);
(function (factory) {
  var root = cc11001100_hook("root", typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global, "var-init");
  if (typeof define === "function" && define.amd) {
    define(["underscore", "jquery", "exports"], function (_, $, exports) {
      root.Backbone = cc11001100_hook("root.Backbone", factory(root, exports, _, $), "assign");
    });
  } else if (typeof exports !== "undefined") {
    var _ = cc11001100_hook("_", require("underscore"), "var-init"),
      $;
    try {
      $ = cc11001100_hook("$", require("jquery"), "assign");
    } catch (e) {}
    factory(root, exports, _, $);
  } else {
    root.Backbone = cc11001100_hook("root.Backbone", factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$), "assign");
  }
})(function (root, Backbone, _, $) {
  var previousBackbone = cc11001100_hook("previousBackbone", root.Backbone, "var-init");
  var slice = cc11001100_hook("slice", Array.prototype.slice, "var-init");
  Backbone.VERSION = cc11001100_hook("Backbone.VERSION", "1.3.3", "assign");
  Backbone.$ = cc11001100_hook("Backbone.$", $, "assign");
  Backbone.noConflict = cc11001100_hook("Backbone.noConflict", function () {
    root.Backbone = cc11001100_hook("root.Backbone", previousBackbone, "assign");
    return this;
  }, "assign");
  Backbone.emulateHTTP = cc11001100_hook("Backbone.emulateHTTP", false, "assign");
  Backbone.emulateJSON = cc11001100_hook("Backbone.emulateJSON", false, "assign");
  var addMethod = function (length, method, attribute) {
    switch (length) {
      case 1:
        return function () {
          return _[method](this[attribute]);
        };
      case 2:
        return function (value) {
          return _[method](this[attribute], value);
        };
      case 3:
        return function (iteratee, context) {
          return _[method](this[attribute], cb(iteratee, this), context);
        };
      case 4:
        return function (iteratee, defaultVal, context) {
          return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
        };
      default:
        return function () {
          var args = cc11001100_hook("args", slice.call(arguments), "var-init");
          args.unshift(this[attribute]);
          return _[method].apply(_, args);
        };
    }
  };
  var addUnderscoreMethods = function (Class, methods, attribute) {
    _.each(methods, function (length, method) {
      if (_[method]) Class.prototype[method] = cc11001100_hook("Class.prototype[method]", addMethod(length, method, attribute), "assign");
    });
  };
  var cb = function (iteratee, instance) {
    if (_.isFunction(iteratee)) return iteratee;
    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
    if (_.isString(iteratee)) return function (model) {
      return model.get(iteratee);
    };
    return iteratee;
  };
  var modelMatcher = function (attrs) {
    var matcher = cc11001100_hook("matcher", _.matches(attrs), "var-init");
    return function (model) {
      return matcher(model.attributes);
    };
  };
  var Events = cc11001100_hook("Events", Backbone.Events = cc11001100_hook("Backbone.Events", {}, "assign"), "var-init");
  var eventSplitter = cc11001100_hook("eventSplitter", /\s+/, "var-init");
  var eventsApi = function (iteratee, events, name, callback, opts) {
    var i = cc11001100_hook("i", 0, "var-init"),
      names;
    if (name && typeof name === "object") {
      if (callback !== void 0 && "context" in opts && opts.context === void 0) opts.context = cc11001100_hook("opts.context", callback, "assign");
      for (names = cc11001100_hook("names", _.keys(name), "assign"); i < names.length; i++) {
        events = cc11001100_hook("events", eventsApi(iteratee, events, names[i], name[names[i]], opts), "assign");
      }
    } else if (name && eventSplitter.test(name)) {
      for (names = cc11001100_hook("names", name.split(eventSplitter), "assign"); i < names.length; i++) {
        events = cc11001100_hook("events", iteratee(events, names[i], callback, opts), "assign");
      }
    } else {
      events = cc11001100_hook("events", iteratee(events, name, callback, opts), "assign");
    }
    return events;
  };
  Events.on = cc11001100_hook("Events.on", function (name, callback, context) {
    return internalOn(this, name, callback, context);
  }, "assign");
  var internalOn = function (obj, name, callback, context, listening) {
    obj._events = cc11001100_hook("obj._events", eventsApi(onApi, obj._events || {}, name, callback, {
      context: cc11001100_hook("context", context, "object-key-init"),
      ctx: cc11001100_hook("ctx", obj, "object-key-init"),
      listening: cc11001100_hook("listening", listening, "object-key-init")
    }), "assign");
    if (listening) {
      var listeners = cc11001100_hook("listeners", obj._listeners || (obj._listeners = cc11001100_hook("obj._listeners", {}, "assign")), "var-init");
      listeners[listening.id] = cc11001100_hook("listeners[listening.id]", listening, "assign");
    }
    return obj;
  };
  Events.listenTo = cc11001100_hook("Events.listenTo", function (obj, name, callback) {
    if (!obj) return this;
    var id = cc11001100_hook("id", obj._listenId || (obj._listenId = cc11001100_hook("obj._listenId", _.uniqueId("l"), "assign")), "var-init");
    var listeningTo = cc11001100_hook("listeningTo", this._listeningTo || (this._listeningTo = cc11001100_hook("this._listeningTo", {}, "assign")), "var-init");
    var listening = cc11001100_hook("listening", listeningTo[id], "var-init");
    if (!listening) {
      var thisId = cc11001100_hook("thisId", this._listenId || (this._listenId = cc11001100_hook("this._listenId", _.uniqueId("l"), "assign")), "var-init");
      listening = cc11001100_hook("listening", listeningTo[id] = cc11001100_hook("listeningTo[id]", {
        obj: cc11001100_hook("obj", obj, "object-key-init"),
        objId: cc11001100_hook("objId", id, "object-key-init"),
        id: cc11001100_hook("id", thisId, "object-key-init"),
        listeningTo: cc11001100_hook("listeningTo", listeningTo, "object-key-init"),
        count: cc11001100_hook("count", 0, "object-key-init")
      }, "assign"), "assign");
    }
    internalOn(obj, name, callback, this, listening);
    return this;
  }, "assign");
  var onApi = function (events, name, callback, options) {
    if (callback) {
      var handlers = cc11001100_hook("handlers", events[name] || (events[name] = cc11001100_hook("events[name]", [], "assign")), "var-init");
      var context = cc11001100_hook("context", options.context, "var-init"),
        ctx = cc11001100_hook("ctx", options.ctx, "var-init"),
        listening = cc11001100_hook("listening", options.listening, "var-init");
      if (listening) listening.count++;
      handlers.push({
        callback: cc11001100_hook("callback", callback, "object-key-init"),
        context: cc11001100_hook("context", context, "object-key-init"),
        ctx: cc11001100_hook("ctx", context || ctx, "object-key-init"),
        listening: cc11001100_hook("listening", listening, "object-key-init")
      });
    }
    return events;
  };
  Events.off = cc11001100_hook("Events.off", function (name, callback, context) {
    if (!this._events) return this;
    this._events = cc11001100_hook("this._events", eventsApi(offApi, this._events, name, callback, {
      context: cc11001100_hook("context", context, "object-key-init"),
      listeners: cc11001100_hook("listeners", this._listeners, "object-key-init")
    }), "assign");
    return this;
  }, "assign");
  Events.stopListening = cc11001100_hook("Events.stopListening", function (obj, name, callback) {
    var listeningTo = cc11001100_hook("listeningTo", this._listeningTo, "var-init");
    if (!listeningTo) return this;
    var ids = cc11001100_hook("ids", obj ? [obj._listenId] : _.keys(listeningTo), "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < ids.length; i++) {
      var listening = cc11001100_hook("listening", listeningTo[ids[i]], "var-init");
      if (!listening) break;
      listening.obj.off(name, callback, this);
    }
    return this;
  }, "assign");
  var offApi = function (events, name, callback, options) {
    if (!events) return;
    var i = cc11001100_hook("i", 0, "var-init"),
      listening;
    var context = cc11001100_hook("context", options.context, "var-init"),
      listeners = cc11001100_hook("listeners", options.listeners, "var-init");
    if (!name && !callback && !context) {
      var ids = cc11001100_hook("ids", _.keys(listeners), "var-init");
      for (; i < ids.length; i++) {
        listening = cc11001100_hook("listening", listeners[ids[i]], "assign");
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }
    var names = cc11001100_hook("names", name ? [name] : _.keys(events), "var-init");
    for (; i < names.length; i++) {
      name = cc11001100_hook("name", names[i], "assign");
      var handlers = cc11001100_hook("handlers", events[name], "var-init");
      if (!handlers) break;
      var remaining = cc11001100_hook("remaining", [], "var-init");
      for (var j = cc11001100_hook("j", 0, "var-init"); j < handlers.length; j++) {
        var handler = cc11001100_hook("handler", handlers[j], "var-init");
        if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
          remaining.push(handler);
        } else {
          listening = cc11001100_hook("listening", handler.listening, "assign");
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }
      if (remaining.length) {
        events[name] = cc11001100_hook("events[name]", remaining, "assign");
      } else {
        delete events[name];
      }
    }
    return events;
  };
  Events.once = cc11001100_hook("Events.once", function (name, callback, context) {
    var events = cc11001100_hook("events", eventsApi(onceMap, {}, name, callback, _.bind(this.off, this)), "var-init");
    if (typeof name === "string" && context == null) callback = cc11001100_hook("callback", void 0, "assign");
    return this.on(events, callback, context);
  }, "assign");
  Events.listenToOnce = cc11001100_hook("Events.listenToOnce", function (obj, name, callback) {
    var events = cc11001100_hook("events", eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj)), "var-init");
    return this.listenTo(obj, events);
  }, "assign");
  var onceMap = function (map, name, callback, offer) {
    if (callback) {
      var once = cc11001100_hook("once", map[name] = cc11001100_hook("map[name]", _.once(function () {
        offer(name, once);
        callback.apply(this, arguments);
      }), "assign"), "var-init");
      once._callback = cc11001100_hook("once._callback", callback, "assign");
    }
    return map;
  };
  Events.trigger = cc11001100_hook("Events.trigger", function (name) {
    if (!this._events) return this;
    var length = cc11001100_hook("length", Math.max(0, arguments.length - 1), "var-init");
    var args = cc11001100_hook("args", Array(length), "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < length; i++) args[i] = cc11001100_hook("args[i]", arguments[i + 1], "assign");
    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  }, "assign");
  var triggerApi = function (objEvents, name, callback, args) {
    if (objEvents) {
      var events = cc11001100_hook("events", objEvents[name], "var-init");
      var allEvents = cc11001100_hook("allEvents", objEvents.all, "var-init");
      if (events && allEvents) allEvents = cc11001100_hook("allEvents", allEvents.slice(), "assign");
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };
  var triggerEvents = function (events, args) {
    var ev,
      i = cc11001100_hook("i", -1, "var-init"),
      l = cc11001100_hook("l", events.length, "var-init"),
      a1 = cc11001100_hook("a1", args[0], "var-init"),
      a2 = cc11001100_hook("a2", args[1], "var-init"),
      a3 = cc11001100_hook("a3", args[2], "var-init");
    switch (args.length) {
      case 0:
        while (++i < l) (ev = cc11001100_hook("ev", events[i], "assign")).callback.call(ev.ctx);
        return;
      case 1:
        while (++i < l) (ev = cc11001100_hook("ev", events[i], "assign")).callback.call(ev.ctx, a1);
        return;
      case 2:
        while (++i < l) (ev = cc11001100_hook("ev", events[i], "assign")).callback.call(ev.ctx, a1, a2);
        return;
      case 3:
        while (++i < l) (ev = cc11001100_hook("ev", events[i], "assign")).callback.call(ev.ctx, a1, a2, a3);
        return;
      default:
        while (++i < l) (ev = cc11001100_hook("ev", events[i], "assign")).callback.apply(ev.ctx, args);
        return;
    }
  };
  Events.bind = cc11001100_hook("Events.bind", Events.on, "assign");
  Events.unbind = cc11001100_hook("Events.unbind", Events.off, "assign");
  _.extend(Backbone, Events);
  var Model = cc11001100_hook("Model", Backbone.Model = cc11001100_hook("Backbone.Model", function (attributes, options) {
    var attrs = cc11001100_hook("attrs", attributes || {}, "var-init");
    options || (options = cc11001100_hook("options", {}, "assign"));
    this.cid = cc11001100_hook("this.cid", _.uniqueId(this.cidPrefix), "assign");
    this.attributes = cc11001100_hook("this.attributes", {}, "assign");
    if (options.collection) this.collection = cc11001100_hook("this.collection", options.collection, "assign");
    if (options.parse) attrs = cc11001100_hook("attrs", this.parse(attrs, options) || {}, "assign");
    var defaults = cc11001100_hook("defaults", _.result(this, "defaults"), "var-init");
    attrs = cc11001100_hook("attrs", _.defaults(_.extend({}, defaults, attrs), defaults), "assign");
    this.set(attrs, options);
    this.changed = cc11001100_hook("this.changed", {}, "assign");
    this.initialize.apply(this, arguments);
  }, "assign"), "var-init");
  _.extend(Model.prototype, Events, {
    changed: cc11001100_hook("changed", null, "object-key-init"),
    validationError: cc11001100_hook("validationError", null, "object-key-init"),
    idAttribute: cc11001100_hook("idAttribute", "id", "object-key-init"),
    cidPrefix: cc11001100_hook("cidPrefix", "c", "object-key-init"),
    initialize: function () {},
    toJSON: function (options) {
      return _.clone(this.attributes);
    },
    sync: function () {
      return Backbone.sync.apply(this, arguments);
    },
    get: function (attr) {
      return this.attributes[attr];
    },
    escape: function (attr) {
      return _.escape(this.get(attr));
    },
    has: function (attr) {
      return this.get(attr) != null;
    },
    matches: function (attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },
    set: function (key, val, options) {
      if (key == null) return this;
      var attrs;
      if (typeof key === "object") {
        attrs = cc11001100_hook("attrs", key, "assign");
        options = cc11001100_hook("options", val, "assign");
      } else {
        (attrs = cc11001100_hook("attrs", {}, "assign"))[key] = cc11001100_hook("(attrs = {})[key]", val, "assign");
      }
      options || (options = cc11001100_hook("options", {}, "assign"));
      if (!this._validate(attrs, options)) return false;
      var unset = cc11001100_hook("unset", options.unset, "var-init");
      var silent = cc11001100_hook("silent", options.silent, "var-init");
      var changes = cc11001100_hook("changes", [], "var-init");
      var changing = cc11001100_hook("changing", this._changing, "var-init");
      this._changing = cc11001100_hook("this._changing", true, "assign");
      if (!changing) {
        this._previousAttributes = cc11001100_hook("this._previousAttributes", _.clone(this.attributes), "assign");
        this.changed = cc11001100_hook("this.changed", {}, "assign");
      }
      var current = cc11001100_hook("current", this.attributes, "var-init");
      var changed = cc11001100_hook("changed", this.changed, "var-init");
      var prev = cc11001100_hook("prev", this._previousAttributes, "var-init");
      for (var attr in attrs) {
        val = cc11001100_hook("val", attrs[attr], "assign");
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = cc11001100_hook("changed[attr]", val, "assign");
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = cc11001100_hook("current[attr]", val, "assign");
      }
      if (this.idAttribute in attrs) this.id = cc11001100_hook("this.id", this.get(this.idAttribute), "assign");
      if (!silent) {
        if (changes.length) this._pending = cc11001100_hook("this._pending", options, "assign");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < changes.length; i++) {
          this.trigger("change:" + changes[i], this, current[changes[i]], options);
        }
      }
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = cc11001100_hook("options", this._pending, "assign");
          this._pending = cc11001100_hook("this._pending", false, "assign");
          this.trigger("change", this, options);
        }
      }
      this._pending = cc11001100_hook("this._pending", false, "assign");
      this._changing = cc11001100_hook("this._changing", false, "assign");
      return this;
    },
    unset: function (attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {
        unset: cc11001100_hook("unset", true, "object-key-init")
      }));
    },
    clear: function (options) {
      var attrs = cc11001100_hook("attrs", {}, "var-init");
      for (var key in this.attributes) attrs[key] = cc11001100_hook("attrs[key]", void 0, "assign");
      return this.set(attrs, _.extend({}, options, {
        unset: cc11001100_hook("unset", true, "object-key-init")
      }));
    },
    hasChanged: function (attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },
    changedAttributes: function (diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = cc11001100_hook("old", this._changing ? this._previousAttributes : this.attributes, "var-init");
      var changed = cc11001100_hook("changed", {}, "var-init");
      for (var attr in diff) {
        var val = cc11001100_hook("val", diff[attr], "var-init");
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = cc11001100_hook("changed[attr]", val, "assign");
      }
      return _.size(changed) ? changed : false;
    },
    previous: function (attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },
    previousAttributes: function () {
      return _.clone(this._previousAttributes);
    },
    fetch: function (options) {
      options = cc11001100_hook("options", _.extend({
        parse: cc11001100_hook("parse", true, "object-key-init")
      }, options), "assign");
      var model = cc11001100_hook("model", this, "var-init");
      var success = cc11001100_hook("success", options.success, "var-init");
      options.success = cc11001100_hook("options.success", function (resp) {
        var serverAttrs = cc11001100_hook("serverAttrs", options.parse ? model.parse(resp, options) : resp, "var-init");
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger("sync", model, resp, options);
      }, "assign");
      wrapError(this, options);
      return this.sync("read", this, options);
    },
    save: function (key, val, options) {
      var attrs;
      if (key == null || typeof key === "object") {
        attrs = cc11001100_hook("attrs", key, "assign");
        options = cc11001100_hook("options", val, "assign");
      } else {
        (attrs = cc11001100_hook("attrs", {}, "assign"))[key] = cc11001100_hook("(attrs = {})[key]", val, "assign");
      }
      options = cc11001100_hook("options", _.extend({
        validate: cc11001100_hook("validate", true, "object-key-init"),
        parse: cc11001100_hook("parse", true, "object-key-init")
      }, options), "assign");
      var wait = cc11001100_hook("wait", options.wait, "var-init");
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else if (!this._validate(attrs, options)) {
        return false;
      }
      var model = cc11001100_hook("model", this, "var-init");
      var success = cc11001100_hook("success", options.success, "var-init");
      var attributes = cc11001100_hook("attributes", this.attributes, "var-init");
      options.success = cc11001100_hook("options.success", function (resp) {
        model.attributes = cc11001100_hook("model.attributes", attributes, "assign");
        var serverAttrs = cc11001100_hook("serverAttrs", options.parse ? model.parse(resp, options) : resp, "var-init");
        if (wait) serverAttrs = cc11001100_hook("serverAttrs", _.extend({}, attrs, serverAttrs), "assign");
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger("sync", model, resp, options);
      }, "assign");
      wrapError(this, options);
      if (attrs && wait) this.attributes = cc11001100_hook("this.attributes", _.extend({}, attributes, attrs), "assign");
      var method = cc11001100_hook("method", this.isNew() ? "create" : options.patch ? "patch" : "update", "var-init");
      if (method === "patch" && !options.attrs) options.attrs = cc11001100_hook("options.attrs", attrs, "assign");
      var xhr = cc11001100_hook("xhr", this.sync(method, this, options), "var-init");
      this.attributes = cc11001100_hook("this.attributes", attributes, "assign");
      return xhr;
    },
    destroy: function (options) {
      options = cc11001100_hook("options", options ? _.clone(options) : {}, "assign");
      var model = cc11001100_hook("model", this, "var-init");
      var success = cc11001100_hook("success", options.success, "var-init");
      var wait = cc11001100_hook("wait", options.wait, "var-init");
      var destroy = function () {
        model.stopListening();
        model.trigger("destroy", model, model.collection, options);
      };
      options.success = cc11001100_hook("options.success", function (resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger("sync", model, resp, options);
      }, "assign");
      var xhr = cc11001100_hook("xhr", false, "var-init");
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = cc11001100_hook("xhr", this.sync("delete", this, options), "assign");
      }
      if (!wait) destroy();
      return xhr;
    },
    url: function () {
      var base = cc11001100_hook("base", _.result(this, "urlRoot") || _.result(this.collection, "url") || urlError(), "var-init");
      if (this.isNew()) return base;
      var id = cc11001100_hook("id", this.get(this.idAttribute), "var-init");
      return base.replace(/[^\/]$/, "$&/") + encodeURIComponent(id);
    },
    parse: function (resp, options) {
      return resp;
    },
    clone: function () {
      return new this.constructor(this.attributes);
    },
    isNew: function () {
      return !this.has(this.idAttribute);
    },
    isValid: function (options) {
      return this._validate({}, _.extend({}, options, {
        validate: cc11001100_hook("validate", true, "object-key-init")
      }));
    },
    _validate: function (attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = cc11001100_hook("attrs", _.extend({}, this.attributes, attrs), "assign");
      var error = cc11001100_hook("error", this.validationError = cc11001100_hook("this.validationError", this.validate(attrs, options) || null, "assign"), "var-init");
      if (!error) return true;
      this.trigger("invalid", this, error, _.extend(options, {
        validationError: cc11001100_hook("validationError", error, "object-key-init")
      }));
      return false;
    }
  });
  var modelMethods = cc11001100_hook("modelMethods", {
    keys: cc11001100_hook("keys", 1, "object-key-init"),
    values: cc11001100_hook("values", 1, "object-key-init"),
    pairs: cc11001100_hook("pairs", 1, "object-key-init"),
    invert: cc11001100_hook("invert", 1, "object-key-init"),
    pick: cc11001100_hook("pick", 0, "object-key-init"),
    omit: cc11001100_hook("omit", 0, "object-key-init"),
    chain: cc11001100_hook("chain", 1, "object-key-init"),
    isEmpty: cc11001100_hook("isEmpty", 1, "object-key-init")
  }, "var-init");
  addUnderscoreMethods(Model, modelMethods, "attributes");
  var Collection = cc11001100_hook("Collection", Backbone.Collection = cc11001100_hook("Backbone.Collection", function (models, options) {
    options || (options = cc11001100_hook("options", {}, "assign"));
    if (options.model) this.model = cc11001100_hook("this.model", options.model, "assign");
    if (options.comparator !== void 0) this.comparator = cc11001100_hook("this.comparator", options.comparator, "assign");
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({
      silent: cc11001100_hook("silent", true, "object-key-init")
    }, options));
  }, "assign"), "var-init");
  var setOptions = cc11001100_hook("setOptions", {
    add: cc11001100_hook("add", true, "object-key-init"),
    remove: cc11001100_hook("remove", true, "object-key-init"),
    merge: cc11001100_hook("merge", true, "object-key-init")
  }, "var-init");
  var addOptions = cc11001100_hook("addOptions", {
    add: cc11001100_hook("add", true, "object-key-init"),
    remove: cc11001100_hook("remove", false, "object-key-init")
  }, "var-init");
  var splice = function (array, insert, at) {
    at = cc11001100_hook("at", Math.min(Math.max(at, 0), array.length), "assign");
    var tail = cc11001100_hook("tail", Array(array.length - at), "var-init");
    var length = cc11001100_hook("length", insert.length, "var-init");
    var i;
    for (i = cc11001100_hook("i", 0, "assign"); i < tail.length; i++) tail[i] = cc11001100_hook("tail[i]", array[i + at], "assign");
    for (i = cc11001100_hook("i", 0, "assign"); i < length; i++) array[i + at] = cc11001100_hook("array[i + at]", insert[i], "assign");
    for (i = cc11001100_hook("i", 0, "assign"); i < tail.length; i++) array[i + length + at] = cc11001100_hook("array[i + length + at]", tail[i], "assign");
  };
  _.extend(Collection.prototype, Events, {
    model: cc11001100_hook("model", Model, "object-key-init"),
    initialize: function () {},
    toJSON: function (options) {
      return this.map(function (model) {
        return model.toJSON(options);
      });
    },
    sync: function () {
      return Backbone.sync.apply(this, arguments);
    },
    add: function (models, options) {
      return this.set(models, _.extend({
        merge: cc11001100_hook("merge", false, "object-key-init")
      }, options, addOptions));
    },
    remove: function (models, options) {
      options = cc11001100_hook("options", _.extend({}, options), "assign");
      var singular = cc11001100_hook("singular", !_.isArray(models), "var-init");
      models = cc11001100_hook("models", singular ? [models] : models.slice(), "assign");
      var removed = cc11001100_hook("removed", this._removeModels(models, options), "var-init");
      if (!options.silent && removed.length) {
        options.changes = cc11001100_hook("options.changes", {
          added: cc11001100_hook("added", [], "object-key-init"),
          merged: cc11001100_hook("merged", [], "object-key-init"),
          removed: cc11001100_hook("removed", removed, "object-key-init")
        }, "assign");
        this.trigger("update", this, options);
      }
      return singular ? removed[0] : removed;
    },
    set: function (models, options) {
      if (models == null) return;
      options = cc11001100_hook("options", _.extend({}, setOptions, options), "assign");
      if (options.parse && !this._isModel(models)) {
        models = cc11001100_hook("models", this.parse(models, options) || [], "assign");
      }
      var singular = cc11001100_hook("singular", !_.isArray(models), "var-init");
      models = cc11001100_hook("models", singular ? [models] : models.slice(), "assign");
      var at = cc11001100_hook("at", options.at, "var-init");
      if (at != null) at = cc11001100_hook("at", +at, "assign");
      if (at > this.length) at = cc11001100_hook("at", this.length, "assign");
      if (at < 0) at += cc11001100_hook("at", this.length + 1, "assign");
      var set = cc11001100_hook("set", [], "var-init");
      var toAdd = cc11001100_hook("toAdd", [], "var-init");
      var toMerge = cc11001100_hook("toMerge", [], "var-init");
      var toRemove = cc11001100_hook("toRemove", [], "var-init");
      var modelMap = cc11001100_hook("modelMap", {}, "var-init");
      var add = cc11001100_hook("add", options.add, "var-init");
      var merge = cc11001100_hook("merge", options.merge, "var-init");
      var remove = cc11001100_hook("remove", options.remove, "var-init");
      var sort = cc11001100_hook("sort", false, "var-init");
      var sortable = cc11001100_hook("sortable", this.comparator && at == null && options.sort !== false, "var-init");
      var sortAttr = cc11001100_hook("sortAttr", _.isString(this.comparator) ? this.comparator : null, "var-init");
      var model, i;
      for (i = cc11001100_hook("i", 0, "assign"); i < models.length; i++) {
        model = cc11001100_hook("model", models[i], "assign");
        var existing = cc11001100_hook("existing", this.get(model), "var-init");
        if (existing) {
          if (merge && model !== existing) {
            var attrs = cc11001100_hook("attrs", this._isModel(model) ? model.attributes : model, "var-init");
            if (options.parse) attrs = cc11001100_hook("attrs", existing.parse(attrs, options), "assign");
            existing.set(attrs, options);
            toMerge.push(existing);
            if (sortable && !sort) sort = cc11001100_hook("sort", existing.hasChanged(sortAttr), "assign");
          }
          if (!modelMap[existing.cid]) {
            modelMap[existing.cid] = cc11001100_hook("modelMap[existing.cid]", true, "assign");
            set.push(existing);
          }
          models[i] = cc11001100_hook("models[i]", existing, "assign");
        } else if (add) {
          model = cc11001100_hook("model", models[i] = cc11001100_hook("models[i]", this._prepareModel(model, options), "assign"), "assign");
          if (model) {
            toAdd.push(model);
            this._addReference(model, options);
            modelMap[model.cid] = cc11001100_hook("modelMap[model.cid]", true, "assign");
            set.push(model);
          }
        }
      }
      if (remove) {
        for (i = cc11001100_hook("i", 0, "assign"); i < this.length; i++) {
          model = cc11001100_hook("model", this.models[i], "assign");
          if (!modelMap[model.cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }
      var orderChanged = cc11001100_hook("orderChanged", false, "var-init");
      var replace = cc11001100_hook("replace", !sortable && add && remove, "var-init");
      if (set.length && replace) {
        orderChanged = cc11001100_hook("orderChanged", this.length !== set.length || _.some(this.models, function (m, index) {
          return m !== set[index];
        }), "assign");
        this.models.length = cc11001100_hook("this.models.length", 0, "assign");
        splice(this.models, set, 0);
        this.length = cc11001100_hook("this.length", this.models.length, "assign");
      } else if (toAdd.length) {
        if (sortable) sort = cc11001100_hook("sort", true, "assign");
        splice(this.models, toAdd, at == null ? this.length : at);
        this.length = cc11001100_hook("this.length", this.models.length, "assign");
      }
      if (sort) this.sort({
        silent: cc11001100_hook("silent", true, "object-key-init")
      });
      if (!options.silent) {
        for (i = cc11001100_hook("i", 0, "assign"); i < toAdd.length; i++) {
          if (at != null) options.index = cc11001100_hook("options.index", at + i, "assign");
          model = cc11001100_hook("model", toAdd[i], "assign");
          model.trigger("add", model, this, options);
        }
        if (sort || orderChanged) this.trigger("sort", this, options);
        if (toAdd.length || toRemove.length || toMerge.length) {
          options.changes = cc11001100_hook("options.changes", {
            added: cc11001100_hook("added", toAdd, "object-key-init"),
            removed: cc11001100_hook("removed", toRemove, "object-key-init"),
            merged: cc11001100_hook("merged", toMerge, "object-key-init")
          }, "assign");
          this.trigger("update", this, options);
        }
      }
      return singular ? models[0] : models;
    },
    reset: function (models, options) {
      options = cc11001100_hook("options", options ? _.clone(options) : {}, "assign");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = cc11001100_hook("options.previousModels", this.models, "assign");
      this._reset();
      models = cc11001100_hook("models", this.add(models, _.extend({
        silent: cc11001100_hook("silent", true, "object-key-init")
      }, options)), "assign");
      if (!options.silent) this.trigger("reset", this, options);
      return models;
    },
    push: function (model, options) {
      return this.add(model, _.extend({
        at: cc11001100_hook("at", this.length, "object-key-init")
      }, options));
    },
    pop: function (options) {
      var model = cc11001100_hook("model", this.at(this.length - 1), "var-init");
      return this.remove(model, options);
    },
    unshift: function (model, options) {
      return this.add(model, _.extend({
        at: cc11001100_hook("at", 0, "object-key-init")
      }, options));
    },
    shift: function (options) {
      var model = cc11001100_hook("model", this.at(0), "var-init");
      return this.remove(model, options);
    },
    slice: function () {
      return slice.apply(this.models, arguments);
    },
    get: function (obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[this.modelId(obj.attributes || obj)] || obj.cid && this._byId[obj.cid];
    },
    has: function (obj) {
      return this.get(obj) != null;
    },
    at: function (index) {
      if (index < 0) index += cc11001100_hook("index", this.length, "assign");
      return this.models[index];
    },
    where: function (attrs, first) {
      return this[first ? "find" : "filter"](attrs);
    },
    findWhere: function (attrs) {
      return this.where(attrs, true);
    },
    sort: function (options) {
      var comparator = cc11001100_hook("comparator", this.comparator, "var-init");
      if (!comparator) throw new Error("Cannot sort a set without a comparator");
      options || (options = cc11001100_hook("options", {}, "assign"));
      var length = cc11001100_hook("length", comparator.length, "var-init");
      if (_.isFunction(comparator)) comparator = cc11001100_hook("comparator", _.bind(comparator, this), "assign");
      if (length === 1 || _.isString(comparator)) {
        this.models = cc11001100_hook("this.models", this.sortBy(comparator), "assign");
      } else {
        this.models.sort(comparator);
      }
      if (!options.silent) this.trigger("sort", this, options);
      return this;
    },
    pluck: function (attr) {
      return this.map(attr + "");
    },
    fetch: function (options) {
      options = cc11001100_hook("options", _.extend({
        parse: cc11001100_hook("parse", true, "object-key-init")
      }, options), "assign");
      var success = cc11001100_hook("success", options.success, "var-init");
      var collection = cc11001100_hook("collection", this, "var-init");
      options.success = cc11001100_hook("options.success", function (resp) {
        var method = cc11001100_hook("method", options.reset ? "reset" : "set", "var-init");
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger("sync", collection, resp, options);
      }, "assign");
      wrapError(this, options);
      return this.sync("read", this, options);
    },
    create: function (model, options) {
      options = cc11001100_hook("options", options ? _.clone(options) : {}, "assign");
      var wait = cc11001100_hook("wait", options.wait, "var-init");
      model = cc11001100_hook("model", this._prepareModel(model, options), "assign");
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = cc11001100_hook("collection", this, "var-init");
      var success = cc11001100_hook("success", options.success, "var-init");
      options.success = cc11001100_hook("options.success", function (m, resp, callbackOpts) {
        if (wait) collection.add(m, callbackOpts);
        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
      }, "assign");
      model.save(null, options);
      return model;
    },
    parse: function (resp, options) {
      return resp;
    },
    clone: function () {
      return new this.constructor(this.models, {
        model: cc11001100_hook("model", this.model, "object-key-init"),
        comparator: cc11001100_hook("comparator", this.comparator, "object-key-init")
      });
    },
    modelId: function (attrs) {
      return attrs[this.model.prototype.idAttribute || "id"];
    },
    _reset: function () {
      this.length = cc11001100_hook("this.length", 0, "assign");
      this.models = cc11001100_hook("this.models", [], "assign");
      this._byId = cc11001100_hook("this._byId", {}, "assign");
    },
    _prepareModel: function (attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = cc11001100_hook("attrs.collection", this, "assign");
        return attrs;
      }
      options = cc11001100_hook("options", options ? _.clone(options) : {}, "assign");
      options.collection = cc11001100_hook("options.collection", this, "assign");
      var model = cc11001100_hook("model", new this.model(attrs, options), "var-init");
      if (!model.validationError) return model;
      this.trigger("invalid", this, model.validationError, options);
      return false;
    },
    _removeModels: function (models, options) {
      var removed = cc11001100_hook("removed", [], "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < models.length; i++) {
        var model = cc11001100_hook("model", this.get(models[i]), "var-init");
        if (!model) continue;
        var index = cc11001100_hook("index", this.indexOf(model), "var-init");
        this.models.splice(index, 1);
        this.length--;
        delete this._byId[model.cid];
        var id = cc11001100_hook("id", this.modelId(model.attributes), "var-init");
        if (id != null) delete this._byId[id];
        if (!options.silent) {
          options.index = cc11001100_hook("options.index", index, "assign");
          model.trigger("remove", model, this, options);
        }
        removed.push(model);
        this._removeReference(model, options);
      }
      return removed;
    },
    _isModel: function (model) {
      return model instanceof Model;
    },
    _addReference: function (model, options) {
      this._byId[model.cid] = cc11001100_hook("this._byId[model.cid]", model, "assign");
      var id = cc11001100_hook("id", this.modelId(model.attributes), "var-init");
      if (id != null) this._byId[id] = cc11001100_hook("this._byId[id]", model, "assign");
      model.on("all", this._onModelEvent, this);
    },
    _removeReference: function (model, options) {
      delete this._byId[model.cid];
      var id = cc11001100_hook("id", this.modelId(model.attributes), "var-init");
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off("all", this._onModelEvent, this);
    },
    _onModelEvent: function (event, model, collection, options) {
      if (model) {
        if ((event === "add" || event === "remove") && collection !== this) return;
        if (event === "destroy") this.remove(model, options);
        if (event === "change") {
          var prevId = cc11001100_hook("prevId", this.modelId(model.previousAttributes()), "var-init");
          var id = cc11001100_hook("id", this.modelId(model.attributes), "var-init");
          if (prevId !== id) {
            if (prevId != null) delete this._byId[prevId];
            if (id != null) this._byId[id] = cc11001100_hook("this._byId[id]", model, "assign");
          }
        }
      }
      this.trigger.apply(this, arguments);
    }
  });
  var collectionMethods = cc11001100_hook("collectionMethods", {
    forEach: cc11001100_hook("forEach", 3, "object-key-init"),
    each: cc11001100_hook("each", 3, "object-key-init"),
    map: cc11001100_hook("map", 3, "object-key-init"),
    collect: cc11001100_hook("collect", 3, "object-key-init"),
    reduce: cc11001100_hook("reduce", 0, "object-key-init"),
    foldl: cc11001100_hook("foldl", 0, "object-key-init"),
    inject: cc11001100_hook("inject", 0, "object-key-init"),
    reduceRight: cc11001100_hook("reduceRight", 0, "object-key-init"),
    foldr: cc11001100_hook("foldr", 0, "object-key-init"),
    find: cc11001100_hook("find", 3, "object-key-init"),
    detect: cc11001100_hook("detect", 3, "object-key-init"),
    filter: cc11001100_hook("filter", 3, "object-key-init"),
    select: cc11001100_hook("select", 3, "object-key-init"),
    reject: cc11001100_hook("reject", 3, "object-key-init"),
    every: cc11001100_hook("every", 3, "object-key-init"),
    all: cc11001100_hook("all", 3, "object-key-init"),
    some: cc11001100_hook("some", 3, "object-key-init"),
    any: cc11001100_hook("any", 3, "object-key-init"),
    include: cc11001100_hook("include", 3, "object-key-init"),
    includes: cc11001100_hook("includes", 3, "object-key-init"),
    contains: cc11001100_hook("contains", 3, "object-key-init"),
    invoke: cc11001100_hook("invoke", 0, "object-key-init"),
    max: cc11001100_hook("max", 3, "object-key-init"),
    min: cc11001100_hook("min", 3, "object-key-init"),
    toArray: cc11001100_hook("toArray", 1, "object-key-init"),
    size: cc11001100_hook("size", 1, "object-key-init"),
    first: cc11001100_hook("first", 3, "object-key-init"),
    head: cc11001100_hook("head", 3, "object-key-init"),
    take: cc11001100_hook("take", 3, "object-key-init"),
    initial: cc11001100_hook("initial", 3, "object-key-init"),
    rest: cc11001100_hook("rest", 3, "object-key-init"),
    tail: cc11001100_hook("tail", 3, "object-key-init"),
    drop: cc11001100_hook("drop", 3, "object-key-init"),
    last: cc11001100_hook("last", 3, "object-key-init"),
    without: cc11001100_hook("without", 0, "object-key-init"),
    difference: cc11001100_hook("difference", 0, "object-key-init"),
    indexOf: cc11001100_hook("indexOf", 3, "object-key-init"),
    shuffle: cc11001100_hook("shuffle", 1, "object-key-init"),
    lastIndexOf: cc11001100_hook("lastIndexOf", 3, "object-key-init"),
    isEmpty: cc11001100_hook("isEmpty", 1, "object-key-init"),
    chain: cc11001100_hook("chain", 1, "object-key-init"),
    sample: cc11001100_hook("sample", 3, "object-key-init"),
    partition: cc11001100_hook("partition", 3, "object-key-init"),
    groupBy: cc11001100_hook("groupBy", 3, "object-key-init"),
    countBy: cc11001100_hook("countBy", 3, "object-key-init"),
    sortBy: cc11001100_hook("sortBy", 3, "object-key-init"),
    indexBy: cc11001100_hook("indexBy", 3, "object-key-init"),
    findIndex: cc11001100_hook("findIndex", 3, "object-key-init"),
    findLastIndex: cc11001100_hook("findLastIndex", 3, "object-key-init")
  }, "var-init");
  addUnderscoreMethods(Collection, collectionMethods, "models");
  var View = cc11001100_hook("View", Backbone.View = cc11001100_hook("Backbone.View", function (options) {
    this.cid = cc11001100_hook("this.cid", _.uniqueId("view"), "assign");
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  }, "assign"), "var-init");
  var delegateEventSplitter = cc11001100_hook("delegateEventSplitter", /^(\S+)\s*(.*)$/, "var-init");
  var viewOptions = cc11001100_hook("viewOptions", ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"], "var-init");
  _.extend(View.prototype, Events, {
    tagName: cc11001100_hook("tagName", "div", "object-key-init"),
    $: function (selector) {
      return this.$el.find(selector);
    },
    initialize: function () {},
    render: function () {
      return this;
    },
    remove: function () {
      this._removeElement();
      this.stopListening();
      return this;
    },
    _removeElement: function () {
      this.$el.remove();
    },
    setElement: function (element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },
    _setElement: function (el) {
      this.$el = cc11001100_hook("this.$el", el instanceof Backbone.$ ? el : Backbone.$(el), "assign");
      this.el = cc11001100_hook("this.el", this.$el[0], "assign");
    },
    delegateEvents: function (events) {
      events || (events = cc11001100_hook("events", _.result(this, "events"), "assign"));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = cc11001100_hook("method", events[key], "var-init");
        if (!_.isFunction(method)) method = cc11001100_hook("method", this[method], "assign");
        if (!method) continue;
        var match = cc11001100_hook("match", key.match(delegateEventSplitter), "var-init");
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },
    delegate: function (eventName, selector, listener) {
      this.$el.on(eventName + ".delegateEvents" + this.cid, selector, listener);
      return this;
    },
    undelegateEvents: function () {
      if (this.$el) this.$el.off(".delegateEvents" + this.cid);
      return this;
    },
    undelegate: function (eventName, selector, listener) {
      this.$el.off(eventName + ".delegateEvents" + this.cid, selector, listener);
      return this;
    },
    _createElement: function (tagName) {
      return document.createElement(tagName);
    },
    _ensureElement: function () {
      if (!this.el) {
        var attrs = cc11001100_hook("attrs", _.extend({}, _.result(this, "attributes")), "var-init");
        if (this.id) attrs.id = cc11001100_hook("attrs.id", _.result(this, "id"), "assign");
        if (this.className) attrs["class"] = cc11001100_hook("attrs[\"class\"]", _.result(this, "className"), "assign");
        this.setElement(this._createElement(_.result(this, "tagName")));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, "el"));
      }
    },
    _setAttributes: function (attributes) {
      this.$el.attr(attributes);
    }
  });
  Backbone.sync = cc11001100_hook("Backbone.sync", function (method, model, options) {
    var type = cc11001100_hook("type", methodMap[method], "var-init");
    _.defaults(options || (options = cc11001100_hook("options", {}, "assign")), {
      emulateHTTP: cc11001100_hook("emulateHTTP", Backbone.emulateHTTP, "object-key-init"),
      emulateJSON: cc11001100_hook("emulateJSON", Backbone.emulateJSON, "object-key-init")
    });
    var params = cc11001100_hook("params", {
      type: cc11001100_hook("type", type, "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init")
    }, "var-init");
    if (!options.url) {
      params.url = cc11001100_hook("params.url", _.result(model, "url") || urlError(), "assign");
    }
    if (options.data == null && model && (method === "create" || method === "update" || method === "patch")) {
      params.contentType = cc11001100_hook("params.contentType", "application/json", "assign");
      params.data = cc11001100_hook("params.data", JSON.stringify(options.attrs || model.toJSON(options)), "assign");
    }
    if (options.emulateJSON) {
      params.contentType = cc11001100_hook("params.contentType", "application/x-www-form-urlencoded", "assign");
      params.data = cc11001100_hook("params.data", params.data ? {
        model: cc11001100_hook("model", params.data, "object-key-init")
      } : {}, "assign");
    }
    if (options.emulateHTTP && (type === "PUT" || type === "DELETE" || type === "PATCH")) {
      params.type = cc11001100_hook("params.type", "POST", "assign");
      if (options.emulateJSON) params.data._method = cc11001100_hook("params.data._method", type, "assign");
      var beforeSend = cc11001100_hook("beforeSend", options.beforeSend, "var-init");
      options.beforeSend = cc11001100_hook("options.beforeSend", function (xhr) {
        xhr.setRequestHeader("X-HTTP-Method-Override", type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      }, "assign");
    }
    if (params.type !== "GET" && !options.emulateJSON) {
      params.processData = cc11001100_hook("params.processData", false, "assign");
    }
    var error = cc11001100_hook("error", options.error, "var-init");
    options.error = cc11001100_hook("options.error", function (xhr, textStatus, errorThrown) {
      options.textStatus = cc11001100_hook("options.textStatus", textStatus, "assign");
      options.errorThrown = cc11001100_hook("options.errorThrown", errorThrown, "assign");
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    }, "assign");
    var xhr = cc11001100_hook("xhr", options.xhr = cc11001100_hook("options.xhr", Backbone.ajax(_.extend(params, options)), "assign"), "var-init");
    model.trigger("request", model, xhr, options);
    return xhr;
  }, "assign");
  var methodMap = cc11001100_hook("methodMap", {
    create: cc11001100_hook("create", "POST", "object-key-init"),
    update: cc11001100_hook("update", "PUT", "object-key-init"),
    patch: cc11001100_hook("patch", "PATCH", "object-key-init"),
    "delete": cc11001100_hook("delete", "DELETE", "object-key-init"),
    read: cc11001100_hook("read", "GET", "object-key-init")
  }, "var-init");
  Backbone.ajax = cc11001100_hook("Backbone.ajax", function () {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  }, "assign");
  var Router = cc11001100_hook("Router", Backbone.Router = cc11001100_hook("Backbone.Router", function (options) {
    options || (options = cc11001100_hook("options", {}, "assign"));
    if (options.routes) this.routes = cc11001100_hook("this.routes", options.routes, "assign");
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  }, "assign"), "var-init");
  var optionalParam = cc11001100_hook("optionalParam", /\((.*?)\)/g, "var-init");
  var namedParam = cc11001100_hook("namedParam", /(\(\?)?:\w+/g, "var-init");
  var splatParam = cc11001100_hook("splatParam", /\*\w+/g, "var-init");
  var escapeRegExp = cc11001100_hook("escapeRegExp", /[\-{}\[\]+?.,\\\^$|#\s]/g, "var-init");
  _.extend(Router.prototype, Events, {
    initialize: function () {},
    route: function (route, name, callback) {
      if (!_.isRegExp(route)) route = cc11001100_hook("route", this._routeToRegExp(route), "assign");
      if (_.isFunction(name)) {
        callback = cc11001100_hook("callback", name, "assign");
        name = cc11001100_hook("name", "", "assign");
      }
      if (!callback) callback = cc11001100_hook("callback", this[name], "assign");
      var router = cc11001100_hook("router", this, "var-init");
      Backbone.history.route(route, function (fragment) {
        var args = cc11001100_hook("args", router._extractParameters(route, fragment), "var-init");
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ["route:" + name].concat(args));
          router.trigger("route", name, args);
          Backbone.history.trigger("route", router, name, args);
        }
      });
      return this;
    },
    execute: function (callback, args, name) {
      if (callback) callback.apply(this, args);
    },
    navigate: function (fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },
    _bindRoutes: function () {
      if (!this.routes) return;
      this.routes = cc11001100_hook("this.routes", _.result(this, "routes"), "assign");
      var route,
        routes = cc11001100_hook("routes", _.keys(this.routes), "var-init");
      while ((route = cc11001100_hook("route", routes.pop(), "assign")) != null) {
        this.route(route, this.routes[route]);
      }
    },
    _routeToRegExp: function (route) {
      route = cc11001100_hook("route", route.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, function (match, optional) {
        return optional ? match : "([^/?]+)";
      }).replace(splatParam, "([^?]*?)"), "assign");
      return new RegExp("^" + route + "(?:\\?([\\s\\S]*))?$");
    },
    _extractParameters: function (route, fragment) {
      var params = cc11001100_hook("params", route.exec(fragment).slice(1), "var-init");
      return _.map(params, function (param, i) {
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }
  });
  var History = cc11001100_hook("History", Backbone.History = cc11001100_hook("Backbone.History", function () {
    this.handlers = cc11001100_hook("this.handlers", [], "assign");
    this.checkUrl = cc11001100_hook("this.checkUrl", _.bind(this.checkUrl, this), "assign");
    if (typeof window !== "undefined") {
      this.location = cc11001100_hook("this.location", window.location, "assign");
      this.history = cc11001100_hook("this.history", window.history, "assign");
    }
  }, "assign"), "var-init");
  var routeStripper = cc11001100_hook("routeStripper", /^[#\/]|\s+$/g, "var-init");
  var rootStripper = cc11001100_hook("rootStripper", /^\/+|\/+$/g, "var-init");
  var pathStripper = cc11001100_hook("pathStripper", /#.*$/, "var-init");
  History.started = cc11001100_hook("History.started", false, "assign");
  _.extend(History.prototype, Events, {
    interval: cc11001100_hook("interval", 50, "object-key-init"),
    atRoot: function () {
      var path = cc11001100_hook("path", this.location.pathname.replace(/[^\/]$/, "$&/"), "var-init");
      return path === this.root && !this.getSearch();
    },
    matchRoot: function () {
      var path = cc11001100_hook("path", this.decodeFragment(this.location.pathname), "var-init");
      var rootPath = cc11001100_hook("rootPath", path.slice(0, this.root.length - 1) + "/", "var-init");
      return rootPath === this.root;
    },
    decodeFragment: function (fragment) {
      return decodeURI(fragment.replace(/%25/g, "%2525"));
    },
    getSearch: function () {
      var match = cc11001100_hook("match", this.location.href.replace(/#.*/, "").match(/\?.+/), "var-init");
      return match ? match[0] : "";
    },
    getHash: function (window) {
      var match = cc11001100_hook("match", (window || this).location.href.match(/#(.*)$/), "var-init");
      return match ? match[1] : "";
    },
    getPath: function () {
      var path = cc11001100_hook("path", this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1), "var-init");
      return path.charAt(0) === "/" ? path.slice(1) : path;
    },
    getFragment: function (fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = cc11001100_hook("fragment", this.getPath(), "assign");
        } else {
          fragment = cc11001100_hook("fragment", this.getHash(), "assign");
        }
      }
      return fragment.replace(routeStripper, "");
    },
    start: function (options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = cc11001100_hook("History.started", true, "assign");
      this.options = cc11001100_hook("this.options", _.extend({
        root: cc11001100_hook("root", "/", "object-key-init")
      }, this.options, options), "assign");
      this.root = cc11001100_hook("this.root", this.options.root, "assign");
      this._wantsHashChange = cc11001100_hook("this._wantsHashChange", this.options.hashChange !== false, "assign");
      this._hasHashChange = cc11001100_hook("this._hasHashChange", "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), "assign");
      this._useHashChange = cc11001100_hook("this._useHashChange", this._wantsHashChange && this._hasHashChange, "assign");
      this._wantsPushState = cc11001100_hook("this._wantsPushState", !!this.options.pushState, "assign");
      this._hasPushState = cc11001100_hook("this._hasPushState", !!(this.history && this.history.pushState), "assign");
      this._usePushState = cc11001100_hook("this._usePushState", this._wantsPushState && this._hasPushState, "assign");
      this.fragment = cc11001100_hook("this.fragment", this.getFragment(), "assign");
      this.root = cc11001100_hook("this.root", ("/" + this.root + "/").replace(rootStripper, "/"), "assign");
      if (this._wantsHashChange && this._wantsPushState) {
        if (!this._hasPushState && !this.atRoot()) {
          var rootPath = cc11001100_hook("rootPath", this.root.slice(0, -1) || "/", "var-init");
          this.location.replace(rootPath + "#" + this.getPath());
          return true;
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {
            replace: cc11001100_hook("replace", true, "object-key-init")
          });
        }
      }
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = cc11001100_hook("this.iframe", document.createElement("iframe"), "assign");
        this.iframe.src = cc11001100_hook("this.iframe.src", "javascript:0", "assign");
        this.iframe.style.display = cc11001100_hook("this.iframe.style.display", "none", "assign");
        this.iframe.tabIndex = cc11001100_hook("this.iframe.tabIndex", -1, "assign");
        var body = cc11001100_hook("body", document.body, "var-init");
        var iWindow = cc11001100_hook("iWindow", body.insertBefore(this.iframe, body.firstChild).contentWindow, "var-init");
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = cc11001100_hook("iWindow.location.hash", "#" + this.fragment, "assign");
      }
      var addEventListener = cc11001100_hook("addEventListener", window.addEventListener || function (eventName, listener) {
        return attachEvent("on" + eventName, listener);
      }, "var-init");
      if (this._usePushState) {
        addEventListener("popstate", this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener("hashchange", this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = cc11001100_hook("this._checkUrlInterval", setInterval(this.checkUrl, this.interval), "assign");
      }
      if (!this.options.silent) return this.loadUrl();
    },
    stop: function () {
      var removeEventListener = cc11001100_hook("removeEventListener", window.removeEventListener || function (eventName, listener) {
        return detachEvent("on" + eventName, listener);
      }, "var-init");
      if (this._usePushState) {
        removeEventListener("popstate", this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener("hashchange", this.checkUrl, false);
      }
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = cc11001100_hook("this.iframe", null, "assign");
      }
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = cc11001100_hook("History.started", false, "assign");
    },
    route: function (route, callback) {
      this.handlers.unshift({
        route: cc11001100_hook("route", route, "object-key-init"),
        callback: cc11001100_hook("callback", callback, "object-key-init")
      });
    },
    checkUrl: function (e) {
      var current = cc11001100_hook("current", this.getFragment(), "var-init");
      if (current === this.fragment && this.iframe) {
        current = cc11001100_hook("current", this.getHash(this.iframe.contentWindow), "assign");
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },
    loadUrl: function (fragment) {
      if (!this.matchRoot()) return false;
      fragment = cc11001100_hook("fragment", this.fragment = cc11001100_hook("this.fragment", this.getFragment(fragment), "assign"), "assign");
      return _.some(this.handlers, function (handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },
    navigate: function (fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = cc11001100_hook("options", {
        trigger: cc11001100_hook("trigger", !!options, "object-key-init")
      }, "assign");
      fragment = cc11001100_hook("fragment", this.getFragment(fragment || ""), "assign");
      var rootPath = cc11001100_hook("rootPath", this.root, "var-init");
      if (fragment === "" || fragment.charAt(0) === "?") {
        rootPath = cc11001100_hook("rootPath", rootPath.slice(0, -1) || "/", "assign");
      }
      var url = cc11001100_hook("url", rootPath + fragment, "var-init");
      fragment = cc11001100_hook("fragment", this.decodeFragment(fragment.replace(pathStripper, "")), "assign");
      if (this.fragment === fragment) return;
      this.fragment = cc11001100_hook("this.fragment", fragment, "assign");
      if (this._usePushState) {
        this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url);
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
          var iWindow = cc11001100_hook("iWindow", this.iframe.contentWindow, "var-init");
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }
          this._updateHash(iWindow.location, fragment, options.replace);
        }
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },
    _updateHash: function (location, fragment, replace) {
      if (replace) {
        var href = cc11001100_hook("href", location.href.replace(/(javascript:|#).*$/, ""), "var-init");
        location.replace(href + "#" + fragment);
      } else {
        location.hash = cc11001100_hook("location.hash", "#" + fragment, "assign");
      }
    }
  });
  Backbone.history = cc11001100_hook("Backbone.history", new History(), "assign");
  var extend = function (protoProps, staticProps) {
    var parent = cc11001100_hook("parent", this, "var-init");
    var child;
    if (protoProps && _.has(protoProps, "constructor")) {
      child = cc11001100_hook("child", protoProps.constructor, "assign");
    } else {
      child = cc11001100_hook("child", function () {
        return parent.apply(this, arguments);
      }, "assign");
    }
    _.extend(child, parent, staticProps);
    child.prototype = cc11001100_hook("child.prototype", _.create(parent.prototype, protoProps), "assign");
    child.prototype.constructor = cc11001100_hook("child.prototype.constructor", child, "assign");
    child.__super__ = cc11001100_hook("child.__super__", parent.prototype, "assign");
    return child;
  };
  Model.extend = cc11001100_hook("Model.extend", Collection.extend = cc11001100_hook("Collection.extend", Router.extend = cc11001100_hook("Router.extend", View.extend = cc11001100_hook("View.extend", History.extend = cc11001100_hook("History.extend", extend, "assign"), "assign"), "assign"), "assign"), "assign");
  var urlError = function () {
    throw new Error('A "url" property or function must be specified');
  };
  var wrapError = function (model, options) {
    var error = cc11001100_hook("error", options.error, "var-init");
    options.error = cc11001100_hook("options.error", function (resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger("error", model, resp, options);
    }, "assign");
  };
  return Backbone;
});
(function (root, factory) {
  if (typeof exports !== "undefined") {
    module.exports = cc11001100_hook("module.exports", factory(require("jquery"), require("underscore"), require("backbone")), "assign");
  } else if (typeof define === "function" && define.amd) {
    define(["jquery", "underscore", "backbone"], factory);
  } else {
    factory(root.$, root._, root.Backbone);
  }
})(this, function ($, _, Backbone) {
  "use strict";

  Backbone.NestedModel = cc11001100_hook("Backbone.NestedModel", Backbone.Model.extend({
    get: function (attrStrOrPath) {
      return Backbone.NestedModel.walkThenGet(this.attributes, attrStrOrPath);
    },
    previous: function (attrStrOrPath) {
      return Backbone.NestedModel.walkThenGet(this._previousAttributes, attrStrOrPath);
    },
    has: function (attr) {
      var result = cc11001100_hook("result", this.get(attr), "var-init");
      return !(result === null || _.isUndefined(result));
    },
    set: function (key, value, opts) {
      var newAttrs = cc11001100_hook("newAttrs", Backbone.NestedModel.deepClone(this.attributes), "var-init"),
        attrPath,
        unsetObj,
        validated;
      if (_.isString(key)) {
        attrPath = cc11001100_hook("attrPath", Backbone.NestedModel.attrPath(key), "assign");
      } else if (_.isArray(key)) {
        attrPath = cc11001100_hook("attrPath", key, "assign");
      }
      if (attrPath) {
        opts = cc11001100_hook("opts", opts || {}, "assign");
        this._setAttr(newAttrs, attrPath, value, opts);
      } else {
        opts = cc11001100_hook("opts", value || {}, "assign");
        var attrs = cc11001100_hook("attrs", key, "var-init");
        for (var _attrStr in attrs) {
          if (attrs.hasOwnProperty(_attrStr)) {
            this._setAttr(newAttrs, Backbone.NestedModel.attrPath(_attrStr), opts.unset ? void 0 : attrs[_attrStr], opts);
          }
        }
      }
      this._nestedChanges = cc11001100_hook("this._nestedChanges", Backbone.NestedModel.__super__.changedAttributes.call(this), "assign");
      if (opts.unset && attrPath && attrPath.length === 1) {
        unsetObj = cc11001100_hook("unsetObj", {}, "assign");
        unsetObj[key] = cc11001100_hook("unsetObj[key]", void 0, "assign");
        this._nestedChanges = cc11001100_hook("this._nestedChanges", _.omit(this._nestedChanges, _.keys(unsetObj)), "assign");
        validated = cc11001100_hook("validated", Backbone.NestedModel.__super__.set.call(this, unsetObj, opts), "assign");
      } else {
        unsetObj = cc11001100_hook("unsetObj", newAttrs, "assign");
        if (opts.unset && attrPath) {
          opts = cc11001100_hook("opts", _.extend({}, opts), "assign");
          delete opts.unset;
        } else if (opts.unset && _.isObject(key)) {
          unsetObj = cc11001100_hook("unsetObj", key, "assign");
        }
        this._nestedChanges = cc11001100_hook("this._nestedChanges", _.omit(this._nestedChanges, _.keys(unsetObj)), "assign");
        validated = cc11001100_hook("validated", Backbone.NestedModel.__super__.set.call(this, unsetObj, opts), "assign");
      }
      if (!validated) {
        this.changed = cc11001100_hook("this.changed", {}, "assign");
        this._nestedChanges = cc11001100_hook("this._nestedChanges", {}, "assign");
        return false;
      }
      this._runDelayedTriggers();
      return this;
    },
    unset: function (attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {
        unset: cc11001100_hook("unset", true, "object-key-init")
      }));
    },
    clear: function (options) {
      this._nestedChanges = cc11001100_hook("this._nestedChanges", {}, "assign");
      options = cc11001100_hook("options", options || {}, "assign");
      var attrs = cc11001100_hook("attrs", _.clone(this.attributes), "var-init");
      if (!options.silent && this.validate && !this.validate(attrs, options)) {
        return false;
      }
      var changed = cc11001100_hook("changed", this.changed = cc11001100_hook("this.changed", {}, "assign"), "var-init");
      var model = cc11001100_hook("model", this, "var-init");
      var setChanged = function (obj, prefix, options) {
        _.each(obj, function (val, attr) {
          var changedPath = cc11001100_hook("changedPath", prefix, "var-init");
          if (_.isArray(obj)) {
            changedPath += cc11001100_hook("changedPath", "[" + attr + "]", "assign");
          } else if (prefix) {
            changedPath += cc11001100_hook("changedPath", "." + attr, "assign");
          } else {
            changedPath = cc11001100_hook("changedPath", attr, "assign");
          }
          val = cc11001100_hook("val", obj[attr], "assign");
          if (_.isObject(val)) {
            setChanged(val, changedPath, options);
          }
          if (!options.silent) model._delayedChange(changedPath, null, options);
          changed[changedPath] = cc11001100_hook("changed[changedPath]", null, "assign");
        });
      };
      setChanged(this.attributes, "", options);
      this.attributes = cc11001100_hook("this.attributes", {}, "assign");
      if (!options.silent) this._delayedTrigger("change");
      this._runDelayedTriggers();
      return this;
    },
    add: function (attrStr, value, opts) {
      var current = cc11001100_hook("current", this.get(attrStr), "var-init");
      if (!_.isArray(current)) throw new Error("current value is not an array");
      return this.set(attrStr + "[" + current.length + "]", value, opts);
    },
    remove: function (attrStr, opts) {
      opts = cc11001100_hook("opts", opts || {}, "assign");
      var attrPath = cc11001100_hook("attrPath", Backbone.NestedModel.attrPath(attrStr), "var-init"),
        aryPath = cc11001100_hook("aryPath", _.initial(attrPath), "var-init"),
        val = cc11001100_hook("val", this.get(aryPath), "var-init"),
        i = cc11001100_hook("i", _.last(attrPath), "var-init");
      if (!_.isArray(val)) {
        throw new Error("remove() must be called on a nested array");
      }
      var trigger = cc11001100_hook("trigger", !opts.silent && val.length >= i + 1, "var-init"),
        oldEl = cc11001100_hook("oldEl", val[i], "var-init");
      val.splice(i, 1);
      opts.silent = cc11001100_hook("opts.silent", true, "assign");
      this.set(aryPath, val, opts);
      if (trigger) {
        attrStr = cc11001100_hook("attrStr", Backbone.NestedModel.createAttrStr(aryPath), "assign");
        this.trigger("remove:" + attrStr, this, oldEl);
        for (var aryCount = cc11001100_hook("aryCount", aryPath.length, "var-init"); aryCount >= 1; aryCount--) {
          attrStr = cc11001100_hook("attrStr", Backbone.NestedModel.createAttrStr(_.first(aryPath, aryCount)), "assign");
          this.trigger("change:" + attrStr, this, oldEl);
        }
        this.trigger("change", this, oldEl);
      }
      return this;
    },
    changedAttributes: function (diff) {
      var backboneChanged = cc11001100_hook("backboneChanged", Backbone.NestedModel.__super__.changedAttributes.call(this, diff), "var-init");
      if (_.isObject(backboneChanged)) {
        return _.extend({}, this._nestedChanges, backboneChanged);
      }
      return false;
    },
    toJSON: function () {
      return Backbone.NestedModel.deepClone(this.attributes);
    },
    _getDelayedTriggers: function () {
      if (typeof this._delayedTriggers === "undefined") {
        this._delayedTriggers = cc11001100_hook("this._delayedTriggers", [], "assign");
      }
      return this._delayedTriggers;
    },
    _delayedTrigger: function () {
      this._getDelayedTriggers().push(arguments);
    },
    _delayedChange: function (attrStr, newVal, options) {
      this._delayedTrigger("change:" + attrStr, this, newVal, options);
      if (!this.changed) {
        this.changed = cc11001100_hook("this.changed", {}, "assign");
      }
      this.changed[attrStr] = cc11001100_hook("this.changed[attrStr]", newVal, "assign");
    },
    _runDelayedTriggers: function () {
      while (this._getDelayedTriggers().length > 0) {
        this.trigger.apply(this, this._getDelayedTriggers().shift());
      }
    },
    _setAttr: function (newAttrs, attrPath, newValue, opts) {
      opts = cc11001100_hook("opts", opts || {}, "assign");
      var fullPathLength = cc11001100_hook("fullPathLength", attrPath.length, "var-init");
      var model = cc11001100_hook("model", this, "var-init");
      Backbone.NestedModel.walkPath(newAttrs, attrPath, function (val, path, next) {
        var attr = cc11001100_hook("attr", _.last(path), "var-init");
        var attrStr = cc11001100_hook("attrStr", Backbone.NestedModel.createAttrStr(path), "var-init");
        var isNewValue = cc11001100_hook("isNewValue", !_.isEqual(val[attr], newValue), "var-init");
        if (path.length === fullPathLength) {
          if (opts.unset) {
            delete val[attr];
            if (_.isArray(val)) {
              var parentPath = cc11001100_hook("parentPath", Backbone.NestedModel.createAttrStr(_.initial(attrPath)), "var-init");
              model._delayedTrigger("remove:" + parentPath, model, val[attr]);
            }
          } else {
            val[attr] = cc11001100_hook("val[attr]", newValue, "assign");
          }
          if (!opts.silent && _.isObject(newValue) && isNewValue) {
            var visited = cc11001100_hook("visited", [], "var-init");
            var checkChanges = function (obj, prefix) {
              if (_.indexOf(visited, obj) > -1) {
                return;
              } else {
                visited.push(obj);
              }
              var nestedAttr, nestedVal;
              for (var a in obj) {
                if (obj.hasOwnProperty(a)) {
                  nestedAttr = cc11001100_hook("nestedAttr", prefix + "." + a, "assign");
                  nestedVal = cc11001100_hook("nestedVal", obj[a], "assign");
                  if (!_.isEqual(model.get(nestedAttr), nestedVal)) {
                    model._delayedChange(nestedAttr, nestedVal, opts);
                  }
                  if (_.isObject(nestedVal)) {
                    checkChanges(nestedVal, nestedAttr);
                  }
                }
              }
            };
            checkChanges(newValue, attrStr);
          }
        } else if (!val[attr]) {
          if (_.isNumber(next)) {
            val[attr] = cc11001100_hook("val[attr]", [], "assign");
          } else {
            val[attr] = cc11001100_hook("val[attr]", {}, "assign");
          }
        }
        if (!opts.silent) {
          if (path.length > 1 && isNewValue) {
            model._delayedChange(attrStr, val[attr], opts);
          }
          if (_.isArray(val[attr])) {
            model._delayedTrigger("add:" + attrStr, model, val[attr]);
          }
        }
      });
    }
  }, {
    attrPath: function (attrStrOrPath) {
      var path;
      if (_.isString(attrStrOrPath)) {
        path = cc11001100_hook("path", attrStrOrPath === "" ? [""] : attrStrOrPath.match(/[^\.\[\]]+/g), "assign");
        path = cc11001100_hook("path", _.map(path, function (val) {
          return val.match(/^\d+$/) ? parseInt(val, 10) : val;
        }), "assign");
      } else {
        path = cc11001100_hook("path", attrStrOrPath, "assign");
      }
      return path;
    },
    createAttrStr: function (attrPath) {
      var attrStr = cc11001100_hook("attrStr", attrPath[0], "var-init");
      _.each(_.rest(attrPath), function (attr) {
        attrStr += cc11001100_hook("attrStr", _.isNumber(attr) ? "[" + attr + "]" : "." + attr, "assign");
      });
      return attrStr;
    },
    deepClone: function (obj) {
      return $.extend(true, {}, obj);
    },
    walkPath: function (obj, attrPath, callback, scope) {
      var val = cc11001100_hook("val", obj, "var-init"),
        childAttr;
      for (var i = cc11001100_hook("i", 0, "var-init"); i < attrPath.length; i++) {
        callback.call(scope || this, val, attrPath.slice(0, i + 1), attrPath[i + 1]);
        childAttr = cc11001100_hook("childAttr", attrPath[i], "assign");
        val = cc11001100_hook("val", val[childAttr], "assign");
        if (!val) break;
      }
    },
    walkThenGet: function (attributes, attrStrOrPath) {
      var attrPath = cc11001100_hook("attrPath", Backbone.NestedModel.attrPath(attrStrOrPath), "var-init"),
        result;
      Backbone.NestedModel.walkPath(attributes, attrPath, function (val, path) {
        var attr = cc11001100_hook("attr", _.last(path), "var-init");
        if (path.length === attrPath.length) {
          result = cc11001100_hook("result", val[attr], "assign");
        }
      });
      return result;
    }
  }), "assign");
  return Backbone;
}); ////////////////////Base Libary End//////////////////////////
(function (global) {
  var uap = cc11001100_hook("uap", {}, "var-init");
  var isUexReady = cc11001100_hook("isUexReady", false, "var-init");
  var readyQueue = cc11001100_hook("readyQueue", [], "var-init");
  var isuap = cc11001100_hook("isuap", false, "var-init");
  uap.modules = cc11001100_hook("uap.modules", {}, "assign");
  var getUID = cc11001100_hook("getUID", function () {
    var maxId = cc11001100_hook("maxId", 65536, "var-init");
    var uid = cc11001100_hook("uid", 0, "var-init");
    return function () {
      uid = cc11001100_hook("uid", (uid + 1) % maxId, "assign");
      return uid;
    };
  }(), "var-init");
  var getUUID = function (len) {
    len = cc11001100_hook("len", len || 6, "assign");
    len = cc11001100_hook("len", parseInt(len, 10), "assign");
    len = cc11001100_hook("len", isNaN(len) ? 6 : len, "assign");
    var seed = cc11001100_hook("seed", "0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ", "var-init");
    var seedLen = cc11001100_hook("seedLen", seed.length - 1, "var-init");
    var uuid = cc11001100_hook("uuid", "", "var-init");
    while (len--) {
      uuid += cc11001100_hook("uuid", seed[Math.round(Math.random() * seedLen)], "assign");
    }
    return uuid;
  };
  var isFunction = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Function]";
  };
  var isString = function (obj) {
    return Object.prototype.toString.call(obj) === "[object String]";
  };
  var isObject = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  };
  var isArray = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var isWindow = function (obj) {
    return obj != null && obj == obj.window;
  };
  var isPlainObject = function (obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
  };
  var extend = function (target, source, deep) {
    var key = cc11001100_hook("key", null, "var-init");
    for (key in source) {
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
          target[key] = cc11001100_hook("target[key]", {}, "assign");
        }
        if (isArray(source[key]) && !isArray(target[key])) {
          target[key] = cc11001100_hook("target[key]", [], "assign");
        }
        extend(target[key], source[key], deep);
      } else if (source[key] !== undefined) {
        target[key] = cc11001100_hook("target[key]", source[key], "assign");
      }
    }
    return target;
  };
  uap.version = cc11001100_hook("uap.version", "1.0.0 Beta", "assign");
  var errorInfo = cc11001100_hook("errorInfo", {
    moduleName: cc11001100_hook("moduleName", "模块的名字必须为字符串并且不能为空！", "object-key-init"),
    moduleFactory: cc11001100_hook("moduleFactory", "模块构造对象必须是函数！", "object-key-init")
  }, "var-init");
  uap.define = cc11001100_hook("uap.define", function (name, factory) {
    if (isFunction(name)) {
      name = cc11001100_hook("name", "", "assign");
      factory = cc11001100_hook("factory", name, "assign");
    }
    if (!name || !isString(name)) {
      throw new Error(errorInfo.moduleName);
    }
    if (!isFunction(factory)) {
      throw new Error(errorInfo.moduleFactory);
    }
    var mod = cc11001100_hook("mod", {
      exports: {}
    }, "var-init");
    var res = cc11001100_hook("res", factory.call(this, uap.require("dom"), mod.exports, mod), "var-init");
    var exports = cc11001100_hook("exports", mod.exports || res, "var-init");
    if (name in uap) {
      uap[name] = cc11001100_hook("uap[name]", [uap.name], "assign");
      uap[name].push(exports);
    } else {
      uap[name] = cc11001100_hook("uap[name]", exports, "assign");
    }
    return exports;
  }, "assign");
  uap.extend = cc11001100_hook("uap.extend", function (name, factory) {
    if (arguments.length > 1 && isPlainObject(name)) {
      return extend.apply(uap, arguments);
    }
    if (isFunction(name) || isPlainObject(name)) {
      factory = cc11001100_hook("factory", name, "assign");
      name = cc11001100_hook("name", "", "assign");
    }
    name = cc11001100_hook("name", name ? name : this, "assign");
    var extendTo = cc11001100_hook("extendTo", uap.require(name), "var-init");
    extendTo = cc11001100_hook("extendTo", extendTo ? extendTo : this, "assign");
    var mod = cc11001100_hook("mod", {
      exports: {}
    }, "var-init");
    var res = cc11001100_hook("res", null, "var-init");
    var exports = cc11001100_hook("exports", mod.exports, "var-init");
    if (isFunction(factory)) {
      res = cc11001100_hook("res", factory.call(this, extendTo, exports, mod), "assign");
      res = cc11001100_hook("res", res || mod.exports, "assign");
      extend(extendTo, res);
    }
    if (isPlainObject(factory)) {
      extend(extendTo, factory);
    }
    return extendTo;
  }, "assign");
  uap.require = cc11001100_hook("uap.require", function (name) {
    if (!name) {
      throw new Error(errorInfo.moduleName);
    }
    if (!isString(name)) {
      return name;
    }
    var res = cc11001100_hook("res", uap[name], "var-init");
    if (isArray(res) && res.length < 2) {
      return res[0];
    }
    return res || null;
  }, "assign");
  uap.use = cc11001100_hook("uap.use", function (modules, factory) {
    if (isFunction(modules)) {
      factory = cc11001100_hook("factory", modules, "assign");
      modules = cc11001100_hook("modules", [], "assign");
    }
    if (isString(modules)) {
      modules = cc11001100_hook("modules", [modules], "assign");
      factory = cc11001100_hook("factory", factory, "assign");
    }
    if (!isArray(modules)) {
      throw new Error("以来模块参数不正确！");
    }
    var args = cc11001100_hook("args", [], "var-init");
    args.push(uap.require("dom"));
    for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", modules.length, "var-init"); i < len; i++) {
      args.push(uap.require(modules[i]));
    }
    return factory.apply(uap, args);
  }, "assign");
  uap.extend({
    isPlainObject: cc11001100_hook("isPlainObject", isPlainObject, "object-key-init"),
    isFunction: cc11001100_hook("isFunction", isFunction, "object-key-init"),
    isString: cc11001100_hook("isString", isString, "object-key-init"),
    isArray: cc11001100_hook("isArray", isArray, "object-key-init"),
    isuap: cc11001100_hook("isuap", isuap, "object-key-init"),
    getOptionId: cc11001100_hook("getOptionId", getUID, "object-key-init"),
    getUID: cc11001100_hook("getUID", getUUID, "object-key-init")
  });
  uap.inherit = cc11001100_hook("uap.inherit", function (parent, protoProps, staticProps) {
    if (!isFunction(parent)) {
      staticProps = cc11001100_hook("staticProps", protoProps, "assign");
      protoProps = cc11001100_hook("protoProps", parent, "assign");
      parent = cc11001100_hook("parent", function () {}, "assign");
    } else {
      parent = cc11001100_hook("parent", parent, "assign");
    }
    var child;
    if (protoProps && protoProps.hasOwnProperty("constructor")) {
      child = cc11001100_hook("child", protoProps.constructor, "assign");
    } else {
      child = cc11001100_hook("child", function () {
        parent.apply(this, arguments);
        this.initated && this.initated.apply(this, arguments);
        return this;
      }, "assign");
    }
    extend(child, parent);
    extend(child, staticProps);
    var Surrogate = function () {
      this.constructor = cc11001100_hook("this.constructor", child, "assign");
    };
    Surrogate.prototype = cc11001100_hook("Surrogate.prototype", parent.prototype, "assign");
    child.prototype = cc11001100_hook("child.prototype", new Surrogate(), "assign");
    if (protoProps) {
      extend(child.prototype, protoProps);
    }
    child.__super__ = cc11001100_hook("child.__super__", parent.prototype, "assign");
    return child;
  }, "assign");
  function execReadyQueue() {
    for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", readyQueue.length, "var-init"); i < len; i++) {
      readyQueue[i].call(uap);
    }
    readyQueue.length = cc11001100_hook("readyQueue.length", 0, "assign");
  }
  function ready(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    callback = cc11001100_hook("callback", isFunction(callback) ? callback : function () {}, "assign");
    readyQueue.push(callback);
    if (isUexReady) {
      execReadyQueue();
      return;
    }
    if ("uexWindow" in window) {
      isUexReady = cc11001100_hook("isUexReady", true, "assign");
      execReadyQueue();
      return;
    } else {
      if (readyQueue.length > 1) {
        return;
      }
      if (isFunction(window.uexOnload)) {
        readyQueue.unshift(window.uexOnload);
      }
      window.uexOnload = cc11001100_hook("window.uexOnload", function (type) {
        isuap = cc11001100_hook("isuap", true, "assign");
        uap.isuap = cc11001100_hook("uap.isuap", true, "assign");
        if (!type) {
          isUexReady = cc11001100_hook("isUexReady", true, "assign");
          execReadyQueue();
        }
      }, "assign");
    }
  }
  uap.ready = cc11001100_hook("uap.ready", ready, "assign");
  global.uap = cc11001100_hook("global.uap", uap, "assign");
})(this);
window.uap && window.uap.define("dom", function ($, exports, module) {
  module.exports = cc11001100_hook("module.exports", Zepto, "assign");
});
window.uap && uap.define('Backbone', function ($, exports, module) {
  module.exports = cc11001100_hook("module.exports", Backbone, "assign");
});
window.uap && uap.define('_', function ($, exports, module) {
  module.exports = cc11001100_hook("module.exports", _, "assign");
});
window.uap && uap.define('underscore', function ($, exports, module) {
  module.exports = cc11001100_hook("module.exports", _, "assign");
});
window.uap && uap.extend(function (ac, exports, module) {
  var logs = function (obj) {
    try {
      if (window.uexLog) {
        window.uexLog && uexLog.sendLog(obj);
      } else {
        console && console.log(obj);
      }
    } catch (e) {
      return e;
    }
  };
  ac.logs = cc11001100_hook("ac.logs", logs, "assign");
});
window.uap && uap.extend("dom", function (dom, exports, module) {
  if (!uap.isuap) {
    return;
  }
});
uap && uap.define("detect", function (ac, exports, module) {
  var os = cc11001100_hook("os", {}, "var-init");
  var browser = cc11001100_hook("browser", {}, "var-init");
  var ua = cc11001100_hook("ua", window.navigator.userAgent, "var-init");
  var webkit = cc11001100_hook("webkit", ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/), "var-init"),
    android = cc11001100_hook("android", ua.match(/(Android);?[\s\/]+([\d.]+)?/), "var-init"),
    osx = cc11001100_hook("osx", ua.match(/\(Macintosh\; Intel .*OS X ([\d_.]+).+\)/), "var-init"),
    ipad = cc11001100_hook("ipad", ua.match(/(iPad).*OS\s([\d_]+)/), "var-init"),
    ipod = cc11001100_hook("ipod", ua.match(/(iPod)(.*OS\s([\d_]+))?/), "var-init"),
    iphone = cc11001100_hook("iphone", !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/), "var-init"),
    webos = cc11001100_hook("webos", ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), "var-init"),
    wp = cc11001100_hook("wp", ua.match(/Windows Phone ([\d.]+)/), "var-init"),
    touchpad = cc11001100_hook("touchpad", webos && ua.match(/TouchPad/), "var-init"),
    kindle = cc11001100_hook("kindle", ua.match(/Kindle\/([\d.]+)/), "var-init"),
    silk = cc11001100_hook("silk", ua.match(/Silk\/([\d._]+)/), "var-init"),
    blackberry = cc11001100_hook("blackberry", ua.match(/(BlackBerry).*Version\/([\d.]+)/), "var-init"),
    bb10 = cc11001100_hook("bb10", ua.match(/(BB10).*Version\/([\d.]+)/), "var-init"),
    rimtabletos = cc11001100_hook("rimtabletos", ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/), "var-init"),
    playbook = cc11001100_hook("playbook", ua.match(/PlayBook/), "var-init"),
    chrome = cc11001100_hook("chrome", ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/), "var-init"),
    firefox = cc11001100_hook("firefox", ua.match(/Firefox\/([\d.]+)/), "var-init"),
    ie = cc11001100_hook("ie", ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/), "var-init"),
    webview = cc11001100_hook("webview", !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/), "var-init"),
    safari = cc11001100_hook("safari", webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/), "var-init");
  if (browser.webkit = cc11001100_hook("browser.webkit", !!webkit, "assign")) {
    browser.version = cc11001100_hook("browser.version", webkit[1], "assign");
  }
  if (android) {
    os.name = cc11001100_hook("os.name", "android", "assign");
    os.android = cc11001100_hook("os.android", true, "assign");
    os.version = cc11001100_hook("os.version", android[2], "assign");
  }
  if (iphone && !ipod) {
    os.name = cc11001100_hook("os.name", "iphone", "assign");
    os.ios = cc11001100_hook("os.ios", os.iphone = cc11001100_hook("os.iphone", true, "assign"), "assign");
    os.version = cc11001100_hook("os.version", iphone[2].replace(/_/g, "."), "assign");
  }
  if (ipad) {
    os.name = cc11001100_hook("os.name", "ipad", "assign");
    os.ios = cc11001100_hook("os.ios", os.ipad = cc11001100_hook("os.ipad", true, "assign"), "assign");
    os.version = cc11001100_hook("os.version", ipad[2].replace(/_/g, "."), "assign");
  }
  if (ipod) {
    os.name = cc11001100_hook("os.name", "ipod", "assign");
    os.ios = cc11001100_hook("os.ios", os.ipod = cc11001100_hook("os.ipod", true, "assign"), "assign");
    os.version = cc11001100_hook("os.version", ipod[3] ? ipod[3].replace(/_/g, ".") : null, "assign");
  }
  if (wp) {
    os.name = cc11001100_hook("os.name", "wp", "assign");
    os.wp = cc11001100_hook("os.wp", true, "assign");
    os.version = cc11001100_hook("os.version", wp[1], "assign");
  }
  if (webos) {
    os.name = cc11001100_hook("os.name", "webos", "assign");
    os.webos = cc11001100_hook("os.webos", true, "assign");
    os.version = cc11001100_hook("os.version", webos[2], "assign");
  }
  if (touchpad) {
    os.name = cc11001100_hook("os.name", "touchpad", "assign");
    os.touchpad = cc11001100_hook("os.touchpad", true, "assign");
  }
  if (blackberry) {
    os.name = cc11001100_hook("os.name", "blackberry", "assign");
    os.blackberry = cc11001100_hook("os.blackberry", true, "assign");
    os.version = cc11001100_hook("os.version", blackberry[2], "assign");
  }
  if (bb10) {
    os.name = cc11001100_hook("os.name", "bb10", "assign");
    os.bb10 = cc11001100_hook("os.bb10", true, "assign");
    os.version = cc11001100_hook("os.version", bb10[2], "assign");
  }
  if (rimtabletos) {
    os.name = cc11001100_hook("os.name", "rimtabletos", "assign");
    os.rimtabletos = cc11001100_hook("os.rimtabletos", true, "assign");
    os.version = cc11001100_hook("os.version", rimtabletos[2], "assign");
  }
  if (playbook) {
    browser.name = cc11001100_hook("browser.name", "playbook", "assign");
    browser.playbook = cc11001100_hook("browser.playbook", true, "assign");
  }
  if (kindle) {
    os.name = cc11001100_hook("os.name", "kindle", "assign");
    os.kindle = cc11001100_hook("os.kindle", true, "assign");
    os.version = cc11001100_hook("os.version", kindle[1], "assign");
  }
  if (silk) {
    browser.name = cc11001100_hook("browser.name", "silk", "assign");
    browser.silk = cc11001100_hook("browser.silk", true, "assign");
    browser.version = cc11001100_hook("browser.version", silk[1], "assign");
  }
  if (!silk && os.android && ua.match(/Kindle Fire/)) {
    browser.name = cc11001100_hook("browser.name", "silk", "assign");
    browser.silk = cc11001100_hook("browser.silk", true, "assign");
  }
  if (chrome) {
    browser.name = cc11001100_hook("browser.name", "chrome", "assign");
    browser.chrome = cc11001100_hook("browser.chrome", true, "assign");
    browser.version = cc11001100_hook("browser.version", chrome[1], "assign");
  }
  if (firefox) {
    browser.name = cc11001100_hook("browser.name", "firefox", "assign");
    browser.firefox = cc11001100_hook("browser.firefox", true, "assign");
    browser.version = cc11001100_hook("browser.version", firefox[1], "assign");
  }
  if (ie) {
    browser.name = cc11001100_hook("browser.name", "ie", "assign");
    browser.ie = cc11001100_hook("browser.ie", true, "assign");
    browser.version = cc11001100_hook("browser.version", ie[1], "assign");
  }
  if (safari && (osx || os.ios)) {
    browser.name = cc11001100_hook("browser.name", "safari", "assign");
    browser.safari = cc11001100_hook("browser.safari", true, "assign");
    if (osx) {
      browser.version = cc11001100_hook("browser.version", safari[1], "assign");
    }
  }
  if (osx) {
    os.name = cc11001100_hook("os.name", "osx", "assign");
    os.version = cc11001100_hook("os.version", osx[1].split("_").join("."), "assign");
  }
  if (webview) {
    browser.name = cc11001100_hook("browser.name", "webview", "assign");
    browser.webview = cc11001100_hook("browser.webview", true, "assign");
  }
  if (!!uap.isuap) {
    browser.name = cc11001100_hook("browser.name", "uap", "assign");
    browser.uap = cc11001100_hook("browser.uap", true, "assign");
  }
  os.tablet = cc11001100_hook("os.tablet", !!(ipad || playbook || android && !ua.match(/Mobile/) || firefox && ua.match(/Tablet/) || ie && !ua.match(/Phone/) && ua.match(/Touch/)), "assign");
  os.phone = cc11001100_hook("os.phone", !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 || chrome && ua.match(/Android/) || chrome && ua.match(/CriOS\/([\d.]+)/) || firefox && ua.match(/Mobile/) || ie && ua.match(/Touch/))), "assign");
  var checkTouchEvent = function () {
    if ("ontouchstart" in window || window.DocumentTouch && window.document instanceof window.DocumentTouch) {
      return true;
    }
    return false;
  };
  var supports3d = function () {
    var div = cc11001100_hook("div", document.createElement("div"), "var-init"),
      ret = cc11001100_hook("ret", false, "var-init"),
      properties = cc11001100_hook("properties", ["perspectiveProperty", "WebkitPerspective"], "var-init");
    for (var i = cc11001100_hook("i", properties.length - 1, "var-init"); i >= 0; i--) {
      ret = cc11001100_hook("ret", ret ? ret : div.style[properties[i]] !== undefined, "assign");
    }
    if (ret) {
      var st = cc11001100_hook("st", document.createElement("style"), "var-init");
      st.textContent = cc11001100_hook("st.textContent", "@media (-webkit-transform-3d){#test3d{height:3px}}", "assign");
      document.getElementsByTagName("head")[0].appendChild(st);
      div.id = cc11001100_hook("div.id", "test3d", "assign");
      document.documentElement.appendChild(div);
      ret = cc11001100_hook("ret", div.offsetHeight === 3, "assign");
      st.parentNode.removeChild(st);
      div.parentNode.removeChild(div);
    }
    return ret;
  };
  var events = cc11001100_hook("events", {
    supportTouch: cc11001100_hook("supportTouch", checkTouchEvent(), "object-key-init")
  }, "var-init");
  var css = cc11001100_hook("css", {
    support3d: cc11001100_hook("support3d", supports3d(), "object-key-init")
  }, "var-init");
  module.exports = cc11001100_hook("module.exports", {
    browser: cc11001100_hook("browser", browser, "object-key-init"),
    os: cc11001100_hook("os", os, "object-key-init"),
    event: cc11001100_hook("event", events, "object-key-init"),
    css: cc11001100_hook("css", css, "object-key-init"),
    ua: cc11001100_hook("ua", ua, "object-key-init")
  }, "assign");
});
uap && uap.define("crypto", function ($, exports, module) {
  var aesObj = function () {
      function t(b) {
        cc11001100_hook("b", b, "function-parameter");
        for (var c = cc11001100_hook("c", "", "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < b.length; a++) b.charAt(a) != " " && (c += cc11001100_hook("c", b.charAt(a), "assign"));
        return c;
      }
      function a(b, d) {
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("d", d, "function-parameter");
        for (var a = cc11001100_hook("a", 0, "var-init"); b > 0;) (b & 1) != 0 && (a ^= cc11001100_hook("a", d, "assign")), b >>>= cc11001100_hook("b", 1, "assign"), d <<= cc11001100_hook("d", 1, "assign");
        for (var c = cc11001100_hook("c", 65536, "var-init"), e = cc11001100_hook("e", 72448, "var-init"); c >= 256;) (a & c) != 0 && (a ^= cc11001100_hook("a", e, "assign")), c >>= cc11001100_hook("c", 1, "assign"), e >>= cc11001100_hook("e", 1, "assign");
        return a;
      }
      function u(b) {
        cc11001100_hook("b", b, "function-parameter");
        for (var a = cc11001100_hook("a", 0, "var-init"); a < 16; a++) b[a] = cc11001100_hook("b[a]", r[b[a]], "assign");
        return b;
      }
      function v(b) {
        cc11001100_hook("b", b, "function-parameter");
        for (var d = cc11001100_hook("d", Array(4), "var-init"), e = cc11001100_hook("e", b.length / 4, "var-init"), j = cc11001100_hook("j", e + 6, "var-init"), f = cc11001100_hook("f", Array(4 * (j + 1)), "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) f[c] = cc11001100_hook("f[c]", b[c], "assign");
        for (c = cc11001100_hook("c", e, "assign"); c < 4 * (j + 1);) {
          for (b = cc11001100_hook("b", 0, "assign"); b < 4; b++) d[b] = cc11001100_hook("d[b]", f[(c - 1) * 4 + b], "assign");
          if (c % e == 0) {
            var d = cc11001100_hook("d", [d[1], d[2], d[3], d[0]], "var-init"),
              b = cc11001100_hook("b", d = cc11001100_hook("d", u(d), "assign"), "var-init"),
              k = cc11001100_hook("k", b[0], "var-init"),
              g = cc11001100_hook("g", c / e, "var-init"),
              h = cc11001100_hook("h", 2, "var-init"),
              i = cc11001100_hook("i", 1, "var-init");
            for (g--; g > 0;) (g & 1) != 0 && (i = cc11001100_hook("i", a(i, h), "assign")), h = cc11001100_hook("h", a(h, h), "assign"), g >>= cc11001100_hook("g", 1, "assign");
            b[0] = cc11001100_hook("b[0]", k ^ i, "assign");
          } else e > 6 && c % e == 4 && (d = cc11001100_hook("d", u(d), "assign"));
          for (b = cc11001100_hook("b", 0, "assign"); b < 4; b++) f[c * 4 + b] = cc11001100_hook("f[c * 4 + b]", f[(c - e) * 4 + b] ^ d[b], "assign");
          c++;
        }
        return f;
      }
      function k(b, c) {
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        for (var a = cc11001100_hook("a", 0, "var-init"); a < 16; a++) b[a] = cc11001100_hook("b[a]", c[b[a]], "assign");
        return b;
      }
      function w(a) {
        cc11001100_hook("a", a, "function-parameter");
        var b, c, j, k;
        b = cc11001100_hook("b", a[l], "assign");
        c = cc11001100_hook("c", a[m], "assign");
        j = cc11001100_hook("j", a[n], "assign");
        k = cc11001100_hook("k", a[o], "assign");
        a[l] = cc11001100_hook("a[l]", c, "assign");
        a[m] = cc11001100_hook("a[m]", j, "assign");
        a[n] = cc11001100_hook("a[n]", k, "assign");
        a[o] = cc11001100_hook("a[o]", b, "assign");
        b = cc11001100_hook("b", a[p], "assign");
        c = cc11001100_hook("c", a[q], "assign");
        j = cc11001100_hook("j", a[d], "assign");
        k = cc11001100_hook("k", a[e], "assign");
        a[p] = cc11001100_hook("a[p]", j, "assign");
        a[q] = cc11001100_hook("a[q]", k, "assign");
        a[d] = cc11001100_hook("a[d]", b, "assign");
        a[e] = cc11001100_hook("a[e]", c, "assign");
        b = cc11001100_hook("b", a[f], "assign");
        c = cc11001100_hook("c", a[g], "assign");
        j = cc11001100_hook("j", a[h], "assign");
        k = cc11001100_hook("k", a[i], "assign");
        a[f] = cc11001100_hook("a[f]", k, "assign");
        a[g] = cc11001100_hook("a[g]", b, "assign");
        a[h] = cc11001100_hook("a[h]", c, "assign");
        a[i] = cc11001100_hook("a[i]", j, "assign");
        return a;
      }
      function x(a) {
        cc11001100_hook("a", a, "function-parameter");
        var b, c, j, k;
        b = cc11001100_hook("b", a[l], "assign");
        c = cc11001100_hook("c", a[m], "assign");
        j = cc11001100_hook("j", a[n], "assign");
        k = cc11001100_hook("k", a[o], "assign");
        a[l] = cc11001100_hook("a[l]", k, "assign");
        a[m] = cc11001100_hook("a[m]", b, "assign");
        a[n] = cc11001100_hook("a[n]", c, "assign");
        a[o] = cc11001100_hook("a[o]", j, "assign");
        b = cc11001100_hook("b", a[p], "assign");
        c = cc11001100_hook("c", a[q], "assign");
        j = cc11001100_hook("j", a[d], "assign");
        k = cc11001100_hook("k", a[e], "assign");
        a[p] = cc11001100_hook("a[p]", j, "assign");
        a[q] = cc11001100_hook("a[q]", k, "assign");
        a[d] = cc11001100_hook("a[d]", b, "assign");
        a[e] = cc11001100_hook("a[e]", c, "assign");
        b = cc11001100_hook("b", a[f], "assign");
        c = cc11001100_hook("c", a[g], "assign");
        j = cc11001100_hook("j", a[h], "assign");
        k = cc11001100_hook("k", a[i], "assign");
        a[f] = cc11001100_hook("a[f]", c, "assign");
        a[g] = cc11001100_hook("a[g]", j, "assign");
        a[h] = cc11001100_hook("a[h]", k, "assign");
        a[i] = cc11001100_hook("a[i]", b, "assign");
        return a;
      }
      function c(b, c, d) {
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("d", d, "function-parameter");
        for (var a = cc11001100_hook("a", 0, "var-init"); a < 4; a++) b[0 + a] ^= cc11001100_hook("b[0 + a]", c[d + a * 4], "assign"), b[4 + a] ^= cc11001100_hook("b[4 + a]", c[d + a * 4 + 1], "assign"), b[8 + a] ^= cc11001100_hook("b[8 + a]", c[d + a * 4 + 2], "assign"), b[12 + a] ^= cc11001100_hook("b[12 + a]", c[d + a * 4 + 3], "assign");
        return b;
      }
      function j(d) {
        cc11001100_hook("d", d, "function-parameter");
        for (var a, c = cc11001100_hook("c", Array(16), "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < 4; b++) for (a = cc11001100_hook("a", 0, "assign"); a < 4; a++) c[b * 4 + a] = cc11001100_hook("c[b * 4 + a]", d[a * 4 + b], "assign");
        return c;
      }
      function s(f) {
        cc11001100_hook("f", f, "function-parameter");
        for (var e = cc11001100_hook("e", Array(f.length / 2), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < f.length / 2; d++) {
          var g = cc11001100_hook("g", e, "var-init"),
            h = cc11001100_hook("h", d, "var-init"),
            c;
          a: {
            c = cc11001100_hook("c", f.substr(d * 2, 2), "assign");
            var b = cc11001100_hook("b", c.charCodeAt(0), "var-init");
            if (b >= 48 && b <= 57) b -= cc11001100_hook("b", 48, "assign");else if (b >= 65 && b <= 70) b -= cc11001100_hook("b", 55, "assign");else if (b >= 97 && b <= 102) b -= cc11001100_hook("b", 87, "assign");else {
              window.alert(c.charAt(1) + " is not a valid hex digit");
              c = cc11001100_hook("c", -1, "assign");
              break a;
            }
            var a = cc11001100_hook("a", c.charCodeAt(1), "var-init");
            if (a >= 48 && a <= 57) a -= cc11001100_hook("a", 48, "assign");else if (a >= 65 && a <= 70) a -= cc11001100_hook("a", 55, "assign");else if (a >= 97 && a <= 102) a -= cc11001100_hook("a", 87, "assign");else {
              window.alert(c.charAt(2) + " is not a valid hex digit");
              c = cc11001100_hook("c", -1, "assign");
              break a;
            }
            c = cc11001100_hook("c", b * 16 + a, "assign");
          }
          g[h] = cc11001100_hook("g[h]", c, "assign");
          if (e[d] < 0) {
            e[0] = cc11001100_hook("e[0]", -1, "assign");
            break;
          }
        }
        return e;
      }
      function z(a) {
        cc11001100_hook("a", a, "function-parameter");
        return a.replace(/(\\u)(\w{4}|\w{2})/gi, function (b, c, a) {
          return String.fromCharCode(parseInt(a, 16));
        });
      }
      instance = cc11001100_hook("instance", this, "assign");
      aesObj = cc11001100_hook("aesObj", function () {
        return instance;
      }, "assign");
      var r = cc11001100_hook("r", [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], "var-init"),
        y = cc11001100_hook("y", [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], "var-init"),
        l = cc11001100_hook("l", 4, "var-init"),
        m = cc11001100_hook("m", 5, "var-init"),
        n = cc11001100_hook("n", 6, "var-init"),
        o = cc11001100_hook("o", 7, "var-init"),
        p = cc11001100_hook("p", 8, "var-init"),
        q = cc11001100_hook("q", 9, "var-init"),
        d = cc11001100_hook("d", 10, "var-init"),
        e = cc11001100_hook("e", 11, "var-init"),
        f = cc11001100_hook("f", 12, "var-init"),
        g = cc11001100_hook("g", 13, "var-init"),
        h = cc11001100_hook("h", 14, "var-init"),
        i = cc11001100_hook("i", 15, "var-init"),
        b = cc11001100_hook("b", Array(16), "var-init");
      this.encryptbyaes = cc11001100_hook("this.encryptbyaes", function (z, y) {
        for (var u = cc11001100_hook("u", y, "var-init"), f = cc11001100_hook("f", "", "var-init"), i = cc11001100_hook("i", "", "var-init"), e = cc11001100_hook("e", 0, "var-init"), x = cc11001100_hook("x", u.length, "var-init"); e < x; e++) f = cc11001100_hook("f", u.charCodeAt(e).toString(16), "assign"), i += cc11001100_hook("i", "\\u" + Array(5 - f.length).join("0") + f, "assign");
        y = cc11001100_hook("y", i, "assign");
        u = cc11001100_hook("u", s(z), "assign");
        f = cc11001100_hook("f", y, "assign");
        i = cc11001100_hook("i", Array(16), "assign");
        f.length > 16 && (i = cc11001100_hook("i", Array(f.length), "assign"));
        if (f.length >= 16) for (e = cc11001100_hook("e", 0, "assign"); e < f.length; e++) i[e] = cc11001100_hook("i[e]", f.charCodeAt(e), "assign");else {
          for (e = cc11001100_hook("e", 0, "assign"); e < f.length; e++) i[e] = cc11001100_hook("i[e]", f.charCodeAt(e), "assign");
          for (e = cc11001100_hook("e", f.length, "assign"); e < 16; e++) i[e] = cc11001100_hook("i[e]", 0, "assign");
        }
        f = cc11001100_hook("f", i, "assign");
        x = cc11001100_hook("x", "", "assign");
        i = cc11001100_hook("i", f.length / 16, "assign");
        for (e = cc11001100_hook("e", 0, "assign"); e < i; e++) {
          var h,
            m = cc11001100_hook("m", u, "var-init"),
            g = cc11001100_hook("g", f.slice(e * 16, (e + 1) * 16), "var-init");
          h = cc11001100_hook("h", Array(44), "assign");
          var d = cc11001100_hook("d", Array(16), "var-init"),
            l = cc11001100_hook("l", void 0, "var-init");
          if (g[0] < 0) h = cc11001100_hook("h", void 0, "assign");else if (m[0] < 0) h = cc11001100_hook("h", void 0, "assign");else {
            h = cc11001100_hook("h", v(m), "assign");
            m = cc11001100_hook("m", m.length / 4 + 6, "assign");
            d = cc11001100_hook("d", j(g), "assign");
            d = cc11001100_hook("d", c(d, h, 0), "assign");
            for (l = cc11001100_hook("l", 1, "assign"); l < m; l++) {
              for (var d = cc11001100_hook("d", k(d, r), "var-init"), g = cc11001100_hook("g", d = cc11001100_hook("d", w(d), "assign"), "var-init"), n = cc11001100_hook("n", d = cc11001100_hook("d", void 0, "assign"), "var-init"), o = cc11001100_hook("o", void 0, "var-init"), p = cc11001100_hook("p", void 0, "var-init"), q = cc11001100_hook("q", void 0, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < 4; d++) n = cc11001100_hook("n", g[0 + d], "assign"), o = cc11001100_hook("o", g[4 + d], "assign"), p = cc11001100_hook("p", g[8 + d], "assign"), q = cc11001100_hook("q", g[12 + d], "assign"), g[0 + d] = cc11001100_hook("g[0 + d]", a(2, n) ^ a(3, o) ^ p ^ q, "assign"), g[4 + d] = cc11001100_hook("g[4 + d]", n ^ a(2, o) ^ a(3, p) ^ q, "assign"), g[8 + d] = cc11001100_hook("g[8 + d]", n ^ o ^ a(2, p) ^ a(3, q), "assign"), g[12 + d] = cc11001100_hook("g[12 + d]", a(3, n) ^ o ^ p ^ a(2, q), "assign");
              d = cc11001100_hook("d", g, "assign");
              d = cc11001100_hook("d", c(d, h, l * 16), "assign");
            }
            k(d, r);
            w(d);
            c(d, h, m * 16);
            b = cc11001100_hook("b", j(d), "assign");
            h = cc11001100_hook("h", (b[0] >>> 4 & 15).toString(16) + (b[0] & 15).toString(16), "assign");
            for (l = cc11001100_hook("l", 1, "assign"); l < 16; l++) h += cc11001100_hook("h", (b[l] >>> 4 & 15).toString(16) + (b[l] & 15).toString(16), "assign");
          }
          x += cc11001100_hook("x", h, "assign");
        }
        return t(x);
      }, "assign");
      this.decryptbyaes = cc11001100_hook("this.decryptbyaes", function (q, p) {
        for (var r = cc11001100_hook("r", s(q), "var-init"), p = cc11001100_hook("p", t(p), "var-init"), l = cc11001100_hook("l", "", "var-init"), u = cc11001100_hook("u", p.length / 32, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < u; f++) {
          var h,
            i = cc11001100_hook("i", r, "var-init"),
            e = cc11001100_hook("e", p.slice(f * 32, (f + 1) * 32), "var-init");
          h = cc11001100_hook("h", Array(44), "assign");
          var d = cc11001100_hook("d", Array(16), "var-init"),
            g = cc11001100_hook("g", void 0, "var-init"),
            e = cc11001100_hook("e", s(e), "var-init");
          if (e[0] < 0) h = cc11001100_hook("h", void 0, "assign");else if (i[0] < 0) h = cc11001100_hook("h", void 0, "assign");else {
            h = cc11001100_hook("h", v(i), "assign");
            g = cc11001100_hook("g", i.length / 4 + 6, "assign");
            d = cc11001100_hook("d", j(e), "assign");
            d = cc11001100_hook("d", c(d, h, g * 16), "assign");
            for (g -= cc11001100_hook("g", 1, "assign"); g >= 1; g--) {
              for (var d = cc11001100_hook("d", x(d), "var-init"), d = cc11001100_hook("d", k(d, y), "var-init"), e = cc11001100_hook("e", d = cc11001100_hook("d", c(d, h, g * 16), "assign"), "var-init"), m = cc11001100_hook("m", i = cc11001100_hook("i", d = cc11001100_hook("d", void 0, "assign"), "assign"), "var-init"), n = cc11001100_hook("n", void 0, "var-init"), o = cc11001100_hook("o", void 0, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < 4; d++) i = cc11001100_hook("i", e[0 + d], "assign"), m = cc11001100_hook("m", e[4 + d], "assign"), n = cc11001100_hook("n", e[8 + d], "assign"), o = cc11001100_hook("o", e[12 + d], "assign"), e[0 + d] = cc11001100_hook("e[0 + d]", a(14, i) ^ a(11, m) ^ a(13, n) ^ a(9, o), "assign"), e[4 + d] = cc11001100_hook("e[4 + d]", a(9, i) ^ a(14, m) ^ a(11, n) ^ a(13, o), "assign"), e[8 + d] = cc11001100_hook("e[8 + d]", a(13, i) ^ a(9, m) ^ a(14, n) ^ a(11, o), "assign"), e[12 + d] = cc11001100_hook("e[12 + d]", a(11, i) ^ a(13, m) ^ a(9, n) ^ a(14, o), "assign");
              d = cc11001100_hook("d", e, "assign");
            }
            x(d);
            k(d, y);
            c(d, h, 0);
            b = cc11001100_hook("b", j(d), "assign");
            h = cc11001100_hook("h", "", "assign");
            for (g = cc11001100_hook("g", 0, "assign"); g < 16; g++) h += cc11001100_hook("h", String.fromCharCode(b[g]), "assign");
          }
          l += cc11001100_hook("l", h, "assign");
        }
        for (f = cc11001100_hook("f", l.length - 1, "assign"); f >= 0; f--) if (l.charCodeAt(f) > 31 && l.charCodeAt(f) < 128) break;
        return z(l.substring(0, f + 1));
      }, "assign");
      this.generatebyaes = cc11001100_hook("this.generatebyaes", function () {
        for (var a = cc11001100_hook("a", "", "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < 32; b++) a += cc11001100_hook("a", "0123456789abcdef".charAt(Math.floor(Math.random() * 16)), "assign");
        return a;
      }, "assign");
    },
    base64Obj = function () {
      instance = cc11001100_hook("instance", this, "assign");
      base64Obj = cc11001100_hook("base64Obj", function () {
        return instance;
      }, "assign");
      var b = cc11001100_hook("b", ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"], "var-init"),
        d = function (a) {
          for (var b = cc11001100_hook("b", [], "var-init"); a > 0;) {
            var c = cc11001100_hook("c", a % 2, "var-init"),
              a = cc11001100_hook("a", Math.floor(a / 2), "var-init");
            b.push(c);
          }
          b.reverse();
          return b;
        },
        c = function (c) {
          for (var d = cc11001100_hook("d", 0, "var-init"), b = cc11001100_hook("b", 0, "var-init"), a = cc11001100_hook("a", c.length - 1, "var-init"); a >= 0; --a) c[a] == 1 && (d += cc11001100_hook("d", Math.pow(2, b), "assign")), ++b;
          return d;
        },
        a = function (c, d) {
          for (var a = cc11001100_hook("a", 8 - (c + 1) + (c - 1) * 6 - d.length, "var-init"); --a >= 0;) d.unshift(0);
          for (var a = cc11001100_hook("a", [], "var-init"), b = cc11001100_hook("b", c, "var-init"); --b >= 0;) a.push(1);
          a.push(0);
          for (var b = cc11001100_hook("b", 0, "var-init"), e = cc11001100_hook("e", 8 - (c + 1), "var-init"); b < e; ++b) a.push(d[b]);
          for (e = cc11001100_hook("e", 0, "assign"); e < c - 1; ++e) {
            a.push(1);
            a.push(0);
            for (var f = cc11001100_hook("f", 6, "var-init"); --f >= 0;) a.push(d[b++]);
          }
          return a;
        };
      this.encryptbybase64 = cc11001100_hook("this.encryptbybase64", function (j) {
        for (var k = cc11001100_hook("k", [], "var-init"), e = cc11001100_hook("e", [], "var-init"), f = cc11001100_hook("f", 0, "var-init"), i = cc11001100_hook("i", j.length, "var-init"); f < i; ++f) {
          var g = cc11001100_hook("g", j.charCodeAt(f), "var-init"),
            h = cc11001100_hook("h", d(g), "var-init");
          if (g < 128) {
            for (g = cc11001100_hook("g", 8 - h.length, "assign"); --g >= 0;) h.unshift(0);
            e = cc11001100_hook("e", e.concat(h), "assign");
          } else g >= 128 && g <= 2047 ? e = cc11001100_hook("e", e.concat(a(2, h)), "assign") : g >= 2048 && g <= 65535 ? e = cc11001100_hook("e", e.concat(a(3, h)), "assign") : g >= 65536 && g <= 2097151 ? e = cc11001100_hook("e", e.concat(a(4, h)), "assign") : g >= 2097152 && g <= 67108863 ? e = cc11001100_hook("e", e.concat(a(5, h)), "assign") : g >= 4e6 && g <= 2147483647 && (e = cc11001100_hook("e", e.concat(a(6, h)), "assign"));
        }
        f = cc11001100_hook("f", j = cc11001100_hook("j", 0, "assign"), "assign");
        for (i = cc11001100_hook("i", e.length, "assign"); f < i; f += cc11001100_hook("f", 6, "assign")) {
          h = cc11001100_hook("h", f + 6 - i, "assign");
          h == 2 ? j = cc11001100_hook("j", 2, "assign") : h == 4 && (j = cc11001100_hook("j", 4, "assign"));
          for (h = cc11001100_hook("h", j, "assign"); --h >= 0;) e.push(0);
          k.push(c(e.slice(f, f + 6)));
        }
        e = cc11001100_hook("e", "", "assign");
        f = cc11001100_hook("f", 0, "assign");
        for (i = cc11001100_hook("i", k.length, "assign"); f < i; ++f) e += cc11001100_hook("e", b[k[f]], "assign");
        f = cc11001100_hook("f", 0, "assign");
        for (i = cc11001100_hook("i", j / 2, "assign"); f < i; ++f) e += cc11001100_hook("e", "=", "assign");
        return e;
      }, "assign");
      this.decryptbybase64 = cc11001100_hook("this.decryptbybase64", function (e) {
        var f = cc11001100_hook("f", e, "var-init"),
          e = cc11001100_hook("e", f.length, "var-init"),
          g = cc11001100_hook("g", 0, "var-init");
        f.charAt(e - 1) == "=" && (f.charAt(e - 2) == "=" ? (g = cc11001100_hook("g", 4, "assign"), f = cc11001100_hook("f", f.substring(0, e - 2), "assign")) : (g = cc11001100_hook("g", 2, "assign"), f = cc11001100_hook("f", f.substring(0, e - 1), "assign")));
        for (var e = cc11001100_hook("e", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"), j = cc11001100_hook("j", f.length, "var-init"); a < j; ++a) for (var h = cc11001100_hook("h", f.charAt(a), "var-init"), i = cc11001100_hook("i", 0, "var-init"), k = cc11001100_hook("k", b.length, "var-init"); i < k; ++i) if (h == b[i]) {
          h = cc11001100_hook("h", d(i), "assign");
          i = cc11001100_hook("i", h.length, "assign");
          if (6 - i > 0) for (i = cc11001100_hook("i", 6 - i, "assign"); i > 0; --i) h.unshift(0);
          e = cc11001100_hook("e", e.concat(h), "assign");
          break;
        }
        g > 0 && (e = cc11001100_hook("e", e.slice(0, e.length - g), "assign"));
        f = cc11001100_hook("f", [], "assign");
        g = cc11001100_hook("g", [], "assign");
        a = cc11001100_hook("a", 0, "assign");
        for (j = cc11001100_hook("j", e.length, "assign"); a < j;) if (e[a] == 0) f = cc11001100_hook("f", f.concat(c(e.slice(a, a + 8))), "assign"), a += cc11001100_hook("a", 8, "assign");else {
          for (h = cc11001100_hook("h", 0, "assign"); a < j;) {
            if (e[a] == 1) ++h;else break;
            ++a;
          }
          g = cc11001100_hook("g", g.concat(e.slice(a + 1, a + 8 - h)), "assign");
          for (a += cc11001100_hook("a", 8 - h, "assign"); h > 1;) g = cc11001100_hook("g", g.concat(e.slice(a + 2, a + 8)), "assign"), a += cc11001100_hook("a", 8, "assign"), --h;
          f = cc11001100_hook("f", f.concat(c(g)), "assign");
          g = cc11001100_hook("g", [], "assign");
        }
        e = cc11001100_hook("e", f, "assign");
        a = cc11001100_hook("a", "", "assign");
        j = cc11001100_hook("j", 0, "assign");
        for (f = cc11001100_hook("f", e.length, "assign"); j < f; ++j) a += cc11001100_hook("a", String.fromCharCode(e[j]), "assign");
        return a;
      }, "assign");
    },
    charSet = function () {
      this.parseUTF8 = cc11001100_hook("this.parseUTF8", function (b) {
        for (var b = cc11001100_hook("b", unescape(encodeURIComponent(b)), "var-init"), c = cc11001100_hook("c", b.length, "var-init"), d = cc11001100_hook("d", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < c; a++) d[a >>> 2] |= cc11001100_hook("d[a >>> 2]", (b.charCodeAt(a) & 255) << 24 - a % 4 * 8, "assign");
        return new WordArray(d, c);
      }, "assign");
      this.stringifyUTF8 = cc11001100_hook("this.stringifyUTF8", function (a) {
        try {
          for (var e = cc11001100_hook("e", decodeURIComponent, "var-init"), f = cc11001100_hook("f", escape, "var-init"), c, h = cc11001100_hook("h", a.words, "var-init"), g = cc11001100_hook("g", a.sigBytes, "var-init"), a = cc11001100_hook("a", [], "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < g; b++) {
            var d = cc11001100_hook("d", h[b >>> 2] >>> 24 - b % 4 * 8 & 255, "var-init");
            d != 0 && a.push(String.fromCharCode(d));
          }
          c = cc11001100_hook("c", a.join(""), "assign");
          return e(f(c));
        } catch (i) {
          throw Error("Malformed UTF-8 data");
        }
      }, "assign");
      this.HexParse = cc11001100_hook("this.HexParse", function (b) {
        for (var c = cc11001100_hook("c", b.length, "var-init"), d = cc11001100_hook("d", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < c; a += cc11001100_hook("a", 2, "assign")) d[a >>> 3] |= cc11001100_hook("d[a >>> 3]", parseInt(b.substr(a, 2), 16) << 24 - a % 8 * 4, "assign");
        return new WordArray(d, c / 2);
      }, "assign");
      this.HexStringify = cc11001100_hook("this.HexStringify", function (b) {
        for (var e = cc11001100_hook("e", b.words, "var-init"), b = cc11001100_hook("b", b.sigBytes, "var-init"), c = cc11001100_hook("c", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < b; a++) {
          var d = cc11001100_hook("d", e[a >>> 2] >>> 24 - a % 4 * 8 & 255, "var-init");
          c.push((d >>> 4).toString(16));
          c.push((d & 15).toString(16));
        }
        return c.join("");
      }, "assign");
      return this;
    },
    WordArray = function (a, b) {
      this.words = cc11001100_hook("this.words", a || [], "assign");
      this.sigBytes = cc11001100_hook("this.sigBytes", b != void 0 ? b : a.length * 4, "assign");
      this.getArrs = cc11001100_hook("this.getArrs", function () {
        return this.words;
      }, "assign");
      this.toString = cc11001100_hook("this.toString", function () {
        for (var d = cc11001100_hook("d", this.words, "var-init"), e = cc11001100_hook("e", this.sigBytes, "var-init"), b = cc11001100_hook("b", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < e; a++) {
          var c = cc11001100_hook("c", d[a >>> 2] >>> 24 - a % 4 * 8 & 255, "var-init");
          b.push((c >>> 4).toString(16));
          b.push((c & 15).toString(16));
        }
        return b.join("");
      }, "assign");
      return this;
    },
    desObj = function () {
      function a(e, h, q, r, g, a) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        cc11001100_hook("q", q, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("g", g, "function-parameter");
        cc11001100_hook("a", a, "function-parameter");
        var w = cc11001100_hook("w", [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756], "var-init"),
          x = cc11001100_hook("x", [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344], "var-init"),
          y = cc11001100_hook("y", [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584], "var-init"),
          z = cc11001100_hook("z", [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928], "var-init"),
          A = cc11001100_hook("A", [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080], "var-init"),
          B = cc11001100_hook("B", [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312], "var-init"),
          C = cc11001100_hook("C", [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154], "var-init"),
          D = cc11001100_hook("D", [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696], "var-init");
        pc2bytes0 = cc11001100_hook("pc2bytes0", [0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964], "assign");
        pc2bytes1 = cc11001100_hook("pc2bytes1", [0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697], "assign");
        pc2bytes2 = cc11001100_hook("pc2bytes2", [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272], "assign");
        pc2bytes3 = cc11001100_hook("pc2bytes3", [0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144], "assign");
        pc2bytes4 = cc11001100_hook("pc2bytes4", [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256], "assign");
        pc2bytes5 = cc11001100_hook("pc2bytes5", [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488], "assign");
        pc2bytes6 = cc11001100_hook("pc2bytes6", [0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746], "assign");
        pc2bytes7 = cc11001100_hook("pc2bytes7", [0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568], "assign");
        pc2bytes8 = cc11001100_hook("pc2bytes8", [0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578], "assign");
        pc2bytes9 = cc11001100_hook("pc2bytes9", [0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488], "assign");
        pc2bytes10 = cc11001100_hook("pc2bytes10", [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800], "assign");
        pc2bytes11 = cc11001100_hook("pc2bytes11", [0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744], "assign");
        pc2bytes12 = cc11001100_hook("pc2bytes12", [0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128], "assign");
        pc2bytes13 = cc11001100_hook("pc2bytes13", [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261], "assign");
        for (var k = cc11001100_hook("k", e.length > 8 ? 3 : 1, "var-init"), n = cc11001100_hook("n", Array(32 * k), "var-init"), m = cc11001100_hook("m", [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0], "var-init"), i, l, f = cc11001100_hook("f", 0, "var-init"), j = cc11001100_hook("j", 0, "var-init"), d, c = cc11001100_hook("c", 0, "var-init"); c < k; c++) {
          left = cc11001100_hook("left", e.charCodeAt(f++) << 24 | e.charCodeAt(f++) << 16 | e.charCodeAt(f++) << 8 | e.charCodeAt(f++), "assign");
          right = cc11001100_hook("right", e.charCodeAt(f++) << 24 | e.charCodeAt(f++) << 16 | e.charCodeAt(f++) << 8 | e.charCodeAt(f++), "assign");
          d = cc11001100_hook("d", (left >>> 4 ^ right) & 252645135, "assign");
          right ^= cc11001100_hook("right", d, "assign");
          left ^= cc11001100_hook("left", d << 4, "assign");
          d = cc11001100_hook("d", (right >>> -16 ^ left) & 65535, "assign");
          left ^= cc11001100_hook("left", d, "assign");
          right ^= cc11001100_hook("right", d << -16, "assign");
          d = cc11001100_hook("d", (left >>> 2 ^ right) & 858993459, "assign");
          right ^= cc11001100_hook("right", d, "assign");
          left ^= cc11001100_hook("left", d << 2, "assign");
          d = cc11001100_hook("d", (right >>> -16 ^ left) & 65535, "assign");
          left ^= cc11001100_hook("left", d, "assign");
          right ^= cc11001100_hook("right", d << -16, "assign");
          d = cc11001100_hook("d", (left >>> 1 ^ right) & 1431655765, "assign");
          right ^= cc11001100_hook("right", d, "assign");
          left ^= cc11001100_hook("left", d << 1, "assign");
          d = cc11001100_hook("d", (right >>> 8 ^ left) & 16711935, "assign");
          left ^= cc11001100_hook("left", d, "assign");
          right ^= cc11001100_hook("right", d << 8, "assign");
          d = cc11001100_hook("d", (left >>> 1 ^ right) & 1431655765, "assign");
          right ^= cc11001100_hook("right", d, "assign");
          left ^= cc11001100_hook("left", d << 1, "assign");
          d = cc11001100_hook("d", left << 8 | right >>> 20 & 240, "assign");
          left = cc11001100_hook("left", right << 24 | right << 8 & 16711680 | right >>> 8 & 65280 | right >>> 24 & 240, "assign");
          right = cc11001100_hook("right", d, "assign");
          for (var b = cc11001100_hook("b", 0, "var-init"); b < m.length; b++) m[b] ? (left = cc11001100_hook("left", left << 2 | left >>> 26, "assign"), right = cc11001100_hook("right", right << 2 | right >>> 26, "assign")) : (left = cc11001100_hook("left", left << 1 | left >>> 27, "assign"), right = cc11001100_hook("right", right << 1 | right >>> 27, "assign")), left &= cc11001100_hook("left", -15, "assign"), right &= cc11001100_hook("right", -15, "assign"), i = cc11001100_hook("i", pc2bytes0[left >>> 28] | pc2bytes1[left >>> 24 & 15] | pc2bytes2[left >>> 20 & 15] | pc2bytes3[left >>> 16 & 15] | pc2bytes4[left >>> 12 & 15] | pc2bytes5[left >>> 8 & 15] | pc2bytes6[left >>> 4 & 15], "assign"), l = cc11001100_hook("l", pc2bytes7[right >>> 28] | pc2bytes8[right >>> 24 & 15] | pc2bytes9[right >>> 20 & 15] | pc2bytes10[right >>> 16 & 15] | pc2bytes11[right >>> 12 & 15] | pc2bytes12[right >>> 8 & 15] | pc2bytes13[right >>> 4 & 15], "assign"), d = cc11001100_hook("d", (l >>> 16 ^ i) & 65535, "assign"), n[j++] = cc11001100_hook("n[j++]", i ^ d, "assign"), n[j++] = cc11001100_hook("n[j++]", l ^ d << 16, "assign");
        }
        var e = cc11001100_hook("e", 0, "var-init"),
          o,
          s,
          p,
          t,
          u,
          v,
          m = cc11001100_hook("m", h.length, "var-init");
        i = cc11001100_hook("i", 0, "assign");
        l = cc11001100_hook("l", n.length == 32 ? 3 : 9, "assign");
        k = cc11001100_hook("k", l == 3 ? q ? [0, 32, 2] : [30, -2, -2] : q ? [0, 32, 2, 62, 30, -2, 64, 96, 2] : [94, 62, -2, 32, 64, 2, 30, -2, -2], "assign");
        a == 2 ? h += cc11001100_hook("h", "        ", "assign") : a == 1 ? (a = cc11001100_hook("a", 8 - m % 8, "assign"), h += cc11001100_hook("h", String.fromCharCode(a, a, a, a, a, a, a, a), "assign"), a == 8 && (m += cc11001100_hook("m", 8, "assign"))) : a || (h += cc11001100_hook("h", "\0\0\0\0\0\0\0\0", "assign"));
        tempresult = cc11001100_hook("tempresult", result = cc11001100_hook("result", "", "assign"), "assign");
        r == 1 && (o = cc11001100_hook("o", g.charCodeAt(e++) << 24 | g.charCodeAt(e++) << 16 | g.charCodeAt(e++) << 8 | g.charCodeAt(e++), "assign"), p = cc11001100_hook("p", g.charCodeAt(e++) << 24 | g.charCodeAt(e++) << 16 | g.charCodeAt(e++) << 8 | g.charCodeAt(e++), "assign"), e = cc11001100_hook("e", 0, "assign"));
        for (; e < m;) {
          c = cc11001100_hook("c", h.charCodeAt(e++) << 24 | h.charCodeAt(e++) << 16 | h.charCodeAt(e++) << 8 | h.charCodeAt(e++), "assign");
          b = cc11001100_hook("b", h.charCodeAt(e++) << 24 | h.charCodeAt(e++) << 16 | h.charCodeAt(e++) << 8 | h.charCodeAt(e++), "assign");
          r == 1 && (q ? (c ^= cc11001100_hook("c", o, "assign"), b ^= cc11001100_hook("b", p, "assign")) : (s = cc11001100_hook("s", o, "assign"), t = cc11001100_hook("t", p, "assign"), o = cc11001100_hook("o", c, "assign"), p = cc11001100_hook("p", b, "assign")));
          a = cc11001100_hook("a", (c >>> 4 ^ b) & 252645135, "assign");
          b ^= cc11001100_hook("b", a, "assign");
          c ^= cc11001100_hook("c", a << 4, "assign");
          a = cc11001100_hook("a", (c >>> 16 ^ b) & 65535, "assign");
          b ^= cc11001100_hook("b", a, "assign");
          c ^= cc11001100_hook("c", a << 16, "assign");
          a = cc11001100_hook("a", (b >>> 2 ^ c) & 858993459, "assign");
          c ^= cc11001100_hook("c", a, "assign");
          b ^= cc11001100_hook("b", a << 2, "assign");
          a = cc11001100_hook("a", (b >>> 8 ^ c) & 16711935, "assign");
          c ^= cc11001100_hook("c", a, "assign");
          b ^= cc11001100_hook("b", a << 8, "assign");
          a = cc11001100_hook("a", (c >>> 1 ^ b) & 1431655765, "assign");
          b ^= cc11001100_hook("b", a, "assign");
          c ^= cc11001100_hook("c", a << 1, "assign");
          c = cc11001100_hook("c", c << 1 | c >>> 31, "assign");
          b = cc11001100_hook("b", b << 1 | b >>> 31, "assign");
          for (f = cc11001100_hook("f", 0, "assign"); f < l; f += cc11001100_hook("f", 3, "assign")) {
            u = cc11001100_hook("u", k[f + 1], "assign");
            v = cc11001100_hook("v", k[f + 2], "assign");
            for (g = cc11001100_hook("g", k[f], "assign"); g != u; g += cc11001100_hook("g", v, "assign")) j = cc11001100_hook("j", b ^ n[g], "assign"), d = cc11001100_hook("d", (b >>> 4 | b << 28) ^ n[g + 1], "assign"), a = cc11001100_hook("a", c, "assign"), c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", a ^ (x[j >>> 24 & 63] | z[j >>> 16 & 63] | B[j >>> 8 & 63] | D[j & 63] | w[d >>> 24 & 63] | y[d >>> 16 & 63] | A[d >>> 8 & 63] | C[d & 63]), "assign");
            a = cc11001100_hook("a", c, "assign");
            c = cc11001100_hook("c", b, "assign");
            b = cc11001100_hook("b", a, "assign");
          }
          c = cc11001100_hook("c", c >>> 1 | c << 31, "assign");
          b = cc11001100_hook("b", b >>> 1 | b << 31, "assign");
          a = cc11001100_hook("a", (c >>> 1 ^ b) & 1431655765, "assign");
          b ^= cc11001100_hook("b", a, "assign");
          c ^= cc11001100_hook("c", a << 1, "assign");
          a = cc11001100_hook("a", (b >>> 8 ^ c) & 16711935, "assign");
          c ^= cc11001100_hook("c", a, "assign");
          b ^= cc11001100_hook("b", a << 8, "assign");
          a = cc11001100_hook("a", (b >>> 2 ^ c) & 858993459, "assign");
          c ^= cc11001100_hook("c", a, "assign");
          b ^= cc11001100_hook("b", a << 2, "assign");
          a = cc11001100_hook("a", (c >>> 16 ^ b) & 65535, "assign");
          b ^= cc11001100_hook("b", a, "assign");
          c ^= cc11001100_hook("c", a << 16, "assign");
          a = cc11001100_hook("a", (c >>> 4 ^ b) & 252645135, "assign");
          b ^= cc11001100_hook("b", a, "assign");
          c ^= cc11001100_hook("c", a << 4, "assign");
          r == 1 && (q ? (o = cc11001100_hook("o", c, "assign"), p = cc11001100_hook("p", b, "assign")) : (c ^= cc11001100_hook("c", s, "assign"), b ^= cc11001100_hook("b", t, "assign")));
          tempresult += cc11001100_hook("tempresult", String.fromCharCode(c >>> 24, c >>> 16 & 255, c >>> 8 & 255, c & 255, b >>> 24, b >>> 16 & 255, b >>> 8 & 255, b & 255), "assign");
          i += cc11001100_hook("i", 8, "assign");
          i == 512 && (result += cc11001100_hook("result", tempresult, "assign"), tempresult = cc11001100_hook("tempresult", "", "assign"), i = cc11001100_hook("i", 0, "assign"));
        }
        return result + tempresult;
      }
      function b(b) {
        cc11001100_hook("b", b, "function-parameter");
        for (var c = cc11001100_hook("c", "0x", "var-init"), d = cc11001100_hook("d", ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < b.length; a++) c += cc11001100_hook("c", d[b.charCodeAt(a) >> 4] + d[b.charCodeAt(a) & 15], "assign");
        return c;
      }
      function c(a) {
        cc11001100_hook("a", a, "function-parameter");
        for (var c = cc11001100_hook("c", "", "var-init"), b = cc11001100_hook("b", a.substr(0, 2) == "0x" ? 2 : 0, "var-init"); b < a.length; b += cc11001100_hook("b", 2, "assign")) {
          var d = cc11001100_hook("d", a.substr(b, 2), "var-init"),
            d = cc11001100_hook("d", parseInt(d, 16), "var-init");
          c += cc11001100_hook("c", String.fromCharCode(d), "assign");
        }
        return c;
      }
      function d(c) {
        cc11001100_hook("c", c, "function-parameter");
        for (var a = cc11001100_hook("a", "", "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < c; b++) a += cc11001100_hook("a", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/-_=".charAt(Math.floor(Math.random() * 67)), "assign");
        return a;
      }
      function e(a) {
        cc11001100_hook("a", a, "function-parameter");
        for (var b = cc11001100_hook("b", 0, "var-init"); b < 8; b++) a += cc11001100_hook("a", " ", "assign");
        return a;
      }
      function f(c) {
        cc11001100_hook("c", c, "function-parameter");
        for (var a = cc11001100_hook("a", "", "var-init"), d = cc11001100_hook("d", "", "var-init"), b = cc11001100_hook("b", 0, "var-init"), e = cc11001100_hook("e", c.length, "var-init"); b < e; b++) a = cc11001100_hook("a", c.charCodeAt(b).toString(16), "assign"), d += cc11001100_hook("d", "\\u" + Array(5 - a.length).join("0") + a, "assign");
        return d;
      }
      function g(a) {
        cc11001100_hook("a", a, "function-parameter");
        return a.replace(/(\\u)(\w{4}|\w{2})/gi, function (b, c, a) {
          return String.fromCharCode(parseInt(a, 16));
        });
      }
      function h(b) {
        cc11001100_hook("b", b, "function-parameter");
        for (var a = cc11001100_hook("a", b.length - 1, "var-init"); a >= 0; a--) if (b.charCodeAt(a) > 16 && b.charCodeAt(a) != 32) break;
        return b.substring(0, a + 1);
      }
      instance = cc11001100_hook("instance", this, "assign");
      desObj = cc11001100_hook("desObj", function () {
        return instance;
      }, "assign");
      this.generatefordes = cc11001100_hook("this.generatefordes", function () {
        return d(8);
      }, "assign");
      this.generateforTripledes = cc11001100_hook("this.generateforTripledes", function () {
        return d(24);
      }, "assign");
      this.encryptbydes = cc11001100_hook("this.encryptbydes", function (c, d) {
        var g = cc11001100_hook("g", f(d), "var-init");
        return b(a(c, e(g), 1, 0));
      }, "assign");
      this.decryptbydes = cc11001100_hook("this.decryptbydes", function (b, d) {
        return g(h(a(b, c(d), 0, 0)));
      }, "assign");
      this.encryptbyTripledes = cc11001100_hook("this.encryptbyTripledes", function (c, d) {
        var g = cc11001100_hook("g", f(d), "var-init");
        return b(a(c, e(g), 1, 0));
      }, "assign");
      this.decryptbyTripledes = cc11001100_hook("this.decryptbyTripledes", function (b, d) {
        return g(h(a(b, c(d), 0, 0)));
      }, "assign");
    },
    md5Obj = function () {
      function b(g, b, c, d, e, h, i) {
        cc11001100_hook("g", g, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("d", d, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        return a(f(a(a(g, b & c | ~b & d), a(e, i)), h), b);
      }
      function c(g, b, d, c, e, h, i) {
        cc11001100_hook("g", g, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("d", d, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        return a(f(a(a(g, b & c | d & ~c), a(e, i)), h), b);
      }
      function d(g, b, c, d, e, h, i) {
        cc11001100_hook("g", g, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("d", d, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        return a(f(a(a(g, b ^ c ^ d), a(e, i)), h), b);
      }
      function e(g, b, c, d, e, h, i) {
        cc11001100_hook("g", g, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("d", d, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        return a(f(a(a(g, c ^ (b | ~d)), a(e, i)), h), b);
      }
      function a(c, a) {
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("a", a, "function-parameter");
        var b = cc11001100_hook("b", (c & 65535) + (a & 65535), "var-init");
        return (c >> 16) + (a >> 16) + (b >> 16) << 16 | b & 65535;
      }
      function f(b, a) {
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("a", a, "function-parameter");
        return b << a | b >>> 32 - a;
      }
      instance = cc11001100_hook("instance", this, "assign");
      md5Obj = cc11001100_hook("md5Obj", function () {
        return instance;
      }, "assign");
      this.encryptbymd5 = cc11001100_hook("this.encryptbymd5", function (j) {
        var f,
          j = cc11001100_hook("j", j.replace(/\r\n/g, "\n"), "var-init");
        f = cc11001100_hook("f", "", "assign");
        for (var h = cc11001100_hook("h", 0, "var-init"); h < j.length; h++) {
          var g = cc11001100_hook("g", j.charCodeAt(h), "var-init");
          g < 128 ? f += cc11001100_hook("f", String.fromCharCode(g), "assign") : (g > 127 && g < 2048 ? f += cc11001100_hook("f", String.fromCharCode(g >> 6 | 192), "assign") : (f += cc11001100_hook("f", String.fromCharCode(g >> 12 | 224), "assign"), f += cc11001100_hook("f", String.fromCharCode(g >> 6 & 63 | 128), "assign")), f += cc11001100_hook("f", String.fromCharCode(g & 63 | 128), "assign"));
        }
        h = cc11001100_hook("h", f, "assign");
        j = cc11001100_hook("j", [], "assign");
        for (g = cc11001100_hook("g", 0, "assign"); g < h.length * 8; g += cc11001100_hook("g", 8, "assign")) j[g >> 5] |= cc11001100_hook("j[g >> 5]", (h.charCodeAt(g / 8) & 255) << g % 32, "assign");
        f = cc11001100_hook("f", f.length * 8, "assign");
        j[f >> 5] |= cc11001100_hook("j[f >> 5]", 128 << f % 32, "assign");
        j[(f + 64 >>> 9 << 4) + 14] = cc11001100_hook("j[(f + 64 >>> 9 << 4) + 14]", f, "assign");
        f = cc11001100_hook("f", 1732584193, "assign");
        for (var h = cc11001100_hook("h", -271733879, "var-init"), g = cc11001100_hook("g", -1732584194, "var-init"), i = cc11001100_hook("i", 271733878, "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < j.length; k += cc11001100_hook("k", 16, "assign")) {
          var l = cc11001100_hook("l", f, "var-init"),
            m = cc11001100_hook("m", h, "var-init"),
            n = cc11001100_hook("n", g, "var-init"),
            o = cc11001100_hook("o", i, "var-init");
          f = cc11001100_hook("f", b(f, h, g, i, j[k + 0], 7, -680876936), "assign");
          i = cc11001100_hook("i", b(i, f, h, g, j[k + 1], 12, -389564586), "assign");
          g = cc11001100_hook("g", b(g, i, f, h, j[k + 2], 17, 606105819), "assign");
          h = cc11001100_hook("h", b(h, g, i, f, j[k + 3], 22, -1044525330), "assign");
          f = cc11001100_hook("f", b(f, h, g, i, j[k + 4], 7, -176418897), "assign");
          i = cc11001100_hook("i", b(i, f, h, g, j[k + 5], 12, 1200080426), "assign");
          g = cc11001100_hook("g", b(g, i, f, h, j[k + 6], 17, -1473231341), "assign");
          h = cc11001100_hook("h", b(h, g, i, f, j[k + 7], 22, -45705983), "assign");
          f = cc11001100_hook("f", b(f, h, g, i, j[k + 8], 7, 1770035416), "assign");
          i = cc11001100_hook("i", b(i, f, h, g, j[k + 9], 12, -1958414417), "assign");
          g = cc11001100_hook("g", b(g, i, f, h, j[k + 10], 17, -42063), "assign");
          h = cc11001100_hook("h", b(h, g, i, f, j[k + 11], 22, -1990404162), "assign");
          f = cc11001100_hook("f", b(f, h, g, i, j[k + 12], 7, 1804603682), "assign");
          i = cc11001100_hook("i", b(i, f, h, g, j[k + 13], 12, -40341101), "assign");
          g = cc11001100_hook("g", b(g, i, f, h, j[k + 14], 17, -1502002290), "assign");
          h = cc11001100_hook("h", b(h, g, i, f, j[k + 15], 22, 1236535329), "assign");
          f = cc11001100_hook("f", c(f, h, g, i, j[k + 1], 5, -165796510), "assign");
          i = cc11001100_hook("i", c(i, f, h, g, j[k + 6], 9, -1069501632), "assign");
          g = cc11001100_hook("g", c(g, i, f, h, j[k + 11], 14, 643717713), "assign");
          h = cc11001100_hook("h", c(h, g, i, f, j[k + 0], 20, -373897302), "assign");
          f = cc11001100_hook("f", c(f, h, g, i, j[k + 5], 5, -701558691), "assign");
          i = cc11001100_hook("i", c(i, f, h, g, j[k + 10], 9, 38016083), "assign");
          g = cc11001100_hook("g", c(g, i, f, h, j[k + 15], 14, -660478335), "assign");
          h = cc11001100_hook("h", c(h, g, i, f, j[k + 4], 20, -405537848), "assign");
          f = cc11001100_hook("f", c(f, h, g, i, j[k + 9], 5, 568446438), "assign");
          i = cc11001100_hook("i", c(i, f, h, g, j[k + 14], 9, -1019803690), "assign");
          g = cc11001100_hook("g", c(g, i, f, h, j[k + 3], 14, -187363961), "assign");
          h = cc11001100_hook("h", c(h, g, i, f, j[k + 8], 20, 1163531501), "assign");
          f = cc11001100_hook("f", c(f, h, g, i, j[k + 13], 5, -1444681467), "assign");
          i = cc11001100_hook("i", c(i, f, h, g, j[k + 2], 9, -51403784), "assign");
          g = cc11001100_hook("g", c(g, i, f, h, j[k + 7], 14, 1735328473), "assign");
          h = cc11001100_hook("h", c(h, g, i, f, j[k + 12], 20, -1926607734), "assign");
          f = cc11001100_hook("f", d(f, h, g, i, j[k + 5], 4, -378558), "assign");
          i = cc11001100_hook("i", d(i, f, h, g, j[k + 8], 11, -2022574463), "assign");
          g = cc11001100_hook("g", d(g, i, f, h, j[k + 11], 16, 1839030562), "assign");
          h = cc11001100_hook("h", d(h, g, i, f, j[k + 14], 23, -35309556), "assign");
          f = cc11001100_hook("f", d(f, h, g, i, j[k + 1], 4, -1530992060), "assign");
          i = cc11001100_hook("i", d(i, f, h, g, j[k + 4], 11, 1272893353), "assign");
          g = cc11001100_hook("g", d(g, i, f, h, j[k + 7], 16, -155497632), "assign");
          h = cc11001100_hook("h", d(h, g, i, f, j[k + 10], 23, -1094730640), "assign");
          f = cc11001100_hook("f", d(f, h, g, i, j[k + 13], 4, 681279174), "assign");
          i = cc11001100_hook("i", d(i, f, h, g, j[k + 0], 11, -358537222), "assign");
          g = cc11001100_hook("g", d(g, i, f, h, j[k + 3], 16, -722521979), "assign");
          h = cc11001100_hook("h", d(h, g, i, f, j[k + 6], 23, 76029189), "assign");
          f = cc11001100_hook("f", d(f, h, g, i, j[k + 9], 4, -640364487), "assign");
          i = cc11001100_hook("i", d(i, f, h, g, j[k + 12], 11, -421815835), "assign");
          g = cc11001100_hook("g", d(g, i, f, h, j[k + 15], 16, 530742520), "assign");
          h = cc11001100_hook("h", d(h, g, i, f, j[k + 2], 23, -995338651), "assign");
          f = cc11001100_hook("f", e(f, h, g, i, j[k + 0], 6, -198630844), "assign");
          i = cc11001100_hook("i", e(i, f, h, g, j[k + 7], 10, 1126891415), "assign");
          g = cc11001100_hook("g", e(g, i, f, h, j[k + 14], 15, -1416354905), "assign");
          h = cc11001100_hook("h", e(h, g, i, f, j[k + 5], 21, -57434055), "assign");
          f = cc11001100_hook("f", e(f, h, g, i, j[k + 12], 6, 1700485571), "assign");
          i = cc11001100_hook("i", e(i, f, h, g, j[k + 3], 10, -1894986606), "assign");
          g = cc11001100_hook("g", e(g, i, f, h, j[k + 10], 15, -1051523), "assign");
          h = cc11001100_hook("h", e(h, g, i, f, j[k + 1], 21, -2054922799), "assign");
          f = cc11001100_hook("f", e(f, h, g, i, j[k + 8], 6, 1873313359), "assign");
          i = cc11001100_hook("i", e(i, f, h, g, j[k + 15], 10, -30611744), "assign");
          g = cc11001100_hook("g", e(g, i, f, h, j[k + 6], 15, -1560198380), "assign");
          h = cc11001100_hook("h", e(h, g, i, f, j[k + 13], 21, 1309151649), "assign");
          f = cc11001100_hook("f", e(f, h, g, i, j[k + 4], 6, -145523070), "assign");
          i = cc11001100_hook("i", e(i, f, h, g, j[k + 11], 10, -1120210379), "assign");
          g = cc11001100_hook("g", e(g, i, f, h, j[k + 2], 15, 718787259), "assign");
          h = cc11001100_hook("h", e(h, g, i, f, j[k + 9], 21, -343485551), "assign");
          f = cc11001100_hook("f", a(f, l), "assign");
          h = cc11001100_hook("h", a(h, m), "assign");
          g = cc11001100_hook("g", a(g, n), "assign");
          i = cc11001100_hook("i", a(i, o), "assign");
        }
        j = cc11001100_hook("j", [f, h, g, i], "assign");
        f = cc11001100_hook("f", "", "assign");
        for (h = cc11001100_hook("h", 0, "assign"); h < j.length * 4; h++) f += cc11001100_hook("f", "0123456789abcdef".charAt(j[h >> 2] >> h % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(j[h >> 2] >> h % 4 * 8 & 15), "assign");
        return f;
      }, "assign");
    },
    sha1Obj = function () {
      function a(c, a) {
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("a", a, "function-parameter");
        var b = cc11001100_hook("b", (c & 65535) + (a & 65535), "var-init");
        return (c >> 16) + (a >> 16) + (b >> 16) << 16 | b & 65535;
      }
      instance = cc11001100_hook("instance", this, "assign");
      sha1Obj = cc11001100_hook("sha1Obj", function () {
        return instance;
      }, "assign");
      this.encryptbysha1 = cc11001100_hook("this.encryptbysha1", function (f) {
        for (var f = cc11001100_hook("f", f.replace(/\r\n/g, "\n"), "var-init"), c = cc11001100_hook("c", "", "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < f.length; d++) {
          var b = cc11001100_hook("b", f.charCodeAt(d), "var-init");
          b < 128 ? c += cc11001100_hook("c", String.fromCharCode(b), "assign") : (b > 127 && b < 2048 ? c += cc11001100_hook("c", String.fromCharCode(b >> 6 | 192), "assign") : (c += cc11001100_hook("c", String.fromCharCode(b >> 12 | 224), "assign"), c += cc11001100_hook("c", String.fromCharCode(b >> 6 & 63 | 128), "assign")), c += cc11001100_hook("c", String.fromCharCode(b & 63 | 128), "assign"));
        }
        d = cc11001100_hook("d", (c.length + 8 >> 6) + 1, "assign");
        f = cc11001100_hook("f", Array(d * 16), "assign");
        for (b = cc11001100_hook("b", 0, "assign"); b < d * 16; b++) f[b] = cc11001100_hook("f[b]", 0, "assign");
        for (b = cc11001100_hook("b", 0, "assign"); b < c.length; b++) f[b >> 2] |= cc11001100_hook("f[b >> 2]", c.charCodeAt(b) << 24 - (b & 3) * 8, "assign");
        f[b >> 2] |= cc11001100_hook("f[b >> 2]", 128 << 24 - (b & 3) * 8, "assign");
        f[d * 16 - 1] = cc11001100_hook("f[d * 16 - 1]", c.length * 8, "assign");
        for (var c = cc11001100_hook("c", Array(80), "var-init"), d = cc11001100_hook("d", 1732584193, "var-init"), b = cc11001100_hook("b", -271733879, "var-init"), g = cc11001100_hook("g", -1732584194, "var-init"), h = cc11001100_hook("h", 271733878, "var-init"), i = cc11001100_hook("i", -1009589776, "var-init"), j = cc11001100_hook("j", 0, "var-init"); j < f.length; j += cc11001100_hook("j", 16, "assign")) {
          for (var m = cc11001100_hook("m", d, "var-init"), n = cc11001100_hook("n", b, "var-init"), o = cc11001100_hook("o", g, "var-init"), p = cc11001100_hook("p", h, "var-init"), q = cc11001100_hook("q", i, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < 80; e++) {
            c[e] = cc11001100_hook("c[e]", e < 16 ? f[j + e] : (c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16]) << 1 | (c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16]) >>> 31, "assign");
            var k = cc11001100_hook("k", d << 5 | d >>> 27, "var-init"),
              l;
            l = cc11001100_hook("l", e < 20 ? b & g | ~b & h : e < 40 ? b ^ g ^ h : e < 60 ? b & g | b & h | g & h : b ^ g ^ h, "assign");
            k = cc11001100_hook("k", a(a(k, l), a(a(i, c[e]), e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514)), "assign");
            i = cc11001100_hook("i", h, "assign");
            h = cc11001100_hook("h", g, "assign");
            g = cc11001100_hook("g", b << 30 | b >>> 2, "assign");
            b = cc11001100_hook("b", d, "assign");
            d = cc11001100_hook("d", k, "assign");
          }
          d = cc11001100_hook("d", a(d, m), "assign");
          b = cc11001100_hook("b", a(b, n), "assign");
          g = cc11001100_hook("g", a(g, o), "assign");
          h = cc11001100_hook("h", a(h, p), "assign");
          i = cc11001100_hook("i", a(i, q), "assign");
        }
        f = cc11001100_hook("f", [d, b, g, h, i], "assign");
        c = cc11001100_hook("c", "", "assign");
        for (d = cc11001100_hook("d", 0, "assign"); d < f.length * 4; d++) c += cc11001100_hook("c", "0123456789abcdef".charAt(f[d >> 2] >> (3 - d % 4) * 8 + 4 & 15) + "0123456789abcdef".charAt(f[d >> 2] >> (3 - d % 4) * 8 & 15), "assign");
        return c;
      }, "assign");
    },
    SHA256Obj = function () {
      function a(a, b) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");
        var c = cc11001100_hook("c", (a & 65535) + (b & 65535), "var-init");
        return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535;
      }
      function b(a, b) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");
        return a >>> b | a << 32 - b;
      }
      instance = cc11001100_hook("instance", this, "assign");
      SHA256Obj = cc11001100_hook("SHA256Obj", function () {
        return instance;
      }, "assign");
      this.encryptbysha256 = cc11001100_hook("this.encryptbysha256", function (c) {
        var h;
        h = cc11001100_hook("h", c.replace(/\r\n/g, "\n"), "assign");
        for (var c = cc11001100_hook("c", "", "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < h.length; f++) {
          var d = cc11001100_hook("d", h.charCodeAt(f), "var-init");
          d < 128 ? c += cc11001100_hook("c", String.fromCharCode(d), "assign") : (d > 127 && d < 2048 ? c += cc11001100_hook("c", String.fromCharCode(d >> 6 | 192), "assign") : (c += cc11001100_hook("c", String.fromCharCode(d >> 12 | 224), "assign"), c += cc11001100_hook("c", String.fromCharCode(d >> 6 & 63 | 128), "assign")), c += cc11001100_hook("c", String.fromCharCode(d & 63 | 128), "assign"));
        }
        f = cc11001100_hook("f", c, "assign");
        h = cc11001100_hook("h", [], "assign");
        for (d = cc11001100_hook("d", 0, "assign"); d < f.length * 8; d += cc11001100_hook("d", 8, "assign")) h[d >> 5] |= cc11001100_hook("h[d >> 5]", (f.charCodeAt(d / 8) & 255) << 24 - d % 32, "assign");
        var g = cc11001100_hook("g", c.length * 8, "var-init"),
          f = cc11001100_hook("f", [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], "var-init"),
          c = cc11001100_hook("c", [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], "var-init"),
          d = cc11001100_hook("d", Array(64), "var-init"),
          j,
          k,
          n,
          i,
          l,
          m,
          o,
          p,
          e,
          q,
          r;
        h[g >> 5] |= cc11001100_hook("h[g >> 5]", 128 << 24 - g % 32, "assign");
        h[(g + 64 >> 9 << 4) + 15] = cc11001100_hook("h[(g + 64 >> 9 << 4) + 15]", g, "assign");
        for (p = cc11001100_hook("p", 0, "assign"); p < h.length; p += cc11001100_hook("p", 16, "assign")) {
          g = cc11001100_hook("g", c[0], "assign");
          j = cc11001100_hook("j", c[1], "assign");
          k = cc11001100_hook("k", c[2], "assign");
          n = cc11001100_hook("n", c[3], "assign");
          i = cc11001100_hook("i", c[4], "assign");
          l = cc11001100_hook("l", c[5], "assign");
          m = cc11001100_hook("m", c[6], "assign");
          o = cc11001100_hook("o", c[7], "assign");
          for (e = cc11001100_hook("e", 0, "assign"); e < 64; e++) d[e] = cc11001100_hook("d[e]", e < 16 ? h[e + p] : a(a(a(b(d[e - 2], 17) ^ b(d[e - 2], 19) ^ d[e - 2] >>> 10, d[e - 7]), b(d[e - 15], 7) ^ b(d[e - 15], 18) ^ d[e - 15] >>> 3), d[e - 16]), "assign"), q = cc11001100_hook("q", a(a(a(a(o, b(i, 6) ^ b(i, 11) ^ b(i, 25)), i & l ^ ~i & m), f[e]), d[e]), "assign"), r = cc11001100_hook("r", a(b(g, 2) ^ b(g, 13) ^ b(g, 22), g & j ^ g & k ^ j & k), "assign"), o = cc11001100_hook("o", m, "assign"), m = cc11001100_hook("m", l, "assign"), l = cc11001100_hook("l", i, "assign"), i = cc11001100_hook("i", a(n, q), "assign"), n = cc11001100_hook("n", k, "assign"), k = cc11001100_hook("k", j, "assign"), j = cc11001100_hook("j", g, "assign"), g = cc11001100_hook("g", a(q, r), "assign");
          c[0] = cc11001100_hook("c[0]", a(g, c[0]), "assign");
          c[1] = cc11001100_hook("c[1]", a(j, c[1]), "assign");
          c[2] = cc11001100_hook("c[2]", a(k, c[2]), "assign");
          c[3] = cc11001100_hook("c[3]", a(n, c[3]), "assign");
          c[4] = cc11001100_hook("c[4]", a(i, c[4]), "assign");
          c[5] = cc11001100_hook("c[5]", a(l, c[5]), "assign");
          c[6] = cc11001100_hook("c[6]", a(m, c[6]), "assign");
          c[7] = cc11001100_hook("c[7]", a(o, c[7]), "assign");
        }
        h = cc11001100_hook("h", "", "assign");
        for (f = cc11001100_hook("f", 0, "assign"); f < c.length * 4; f++) h += cc11001100_hook("h", "0123456789abcdef".charAt(c[f >> 2] >> (3 - f % 4) * 8 + 4 & 15) + "0123456789abcdef".charAt(c[f >> 2] >> (3 - f % 4) * 8 & 15), "assign");
        return h;
      }, "assign");
    },
    dbits,
    canary = cc11001100_hook("canary", 0xdeadbeefcafe, "var-init"),
    j_lm = cc11001100_hook("j_lm", (canary & 16777215) == 15715070, "var-init");
  function BigInteger(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a != null && ("number" == typeof a ? this.fromNumber(a, b, c) : b == null && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b));
  }
  function nbi() {
    return new BigInteger(null);
  }
  function am1(e, f, a, b, c, g) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    for (; --g >= 0;) {
      var d = cc11001100_hook("d", f * this[e++] + a[b] + c, "var-init"),
        c = cc11001100_hook("c", Math.floor(d / 67108864), "var-init");
      a[b++] = cc11001100_hook("a[b++]", d & 67108863, "assign");
    }
    return c;
  }
  function am2(d, a, e, f, c, j) {
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("j", j, "function-parameter");
    var g = cc11001100_hook("g", a & 32767, "var-init");
    for (a >>= cc11001100_hook("a", 15, "assign"); --j >= 0;) {
      var b = cc11001100_hook("b", this[d] & 32767, "var-init"),
        h = cc11001100_hook("h", this[d++] >> 15, "var-init"),
        i = cc11001100_hook("i", a * b + h * g, "var-init"),
        b = cc11001100_hook("b", g * b + ((i & 32767) << 15) + e[f] + (c & 1073741823), "var-init"),
        c = cc11001100_hook("c", (b >>> 30) + (i >>> 15) + a * h + (c >>> 30), "var-init");
      e[f++] = cc11001100_hook("e[f++]", b & 1073741823, "assign");
    }
    return c;
  }
  function am3(c, a, d, e, f, j) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("j", j, "function-parameter");
    var g = cc11001100_hook("g", a & 16383, "var-init");
    for (a >>= cc11001100_hook("a", 14, "assign"); --j >= 0;) {
      var b = cc11001100_hook("b", this[c] & 16383, "var-init"),
        h = cc11001100_hook("h", this[c++] >> 14, "var-init"),
        i = cc11001100_hook("i", a * b + h * g, "var-init"),
        b = cc11001100_hook("b", g * b + ((i & 16383) << 14) + d[e] + f, "var-init"),
        f = cc11001100_hook("f", (b >> 28) + (i >> 14) + a * h, "var-init");
      d[e++] = cc11001100_hook("d[e++]", b & 268435455, "assign");
    }
    return f;
  }
  j_lm && navigator.appName == "Microsoft Internet Explorer" ? (BigInteger.prototype.am = cc11001100_hook("BigInteger.prototype.am", am2, "assign"), dbits = cc11001100_hook("dbits", 30, "assign")) : j_lm && navigator.appName != "Netscape" ? (BigInteger.prototype.am = cc11001100_hook("BigInteger.prototype.am", am1, "assign"), dbits = cc11001100_hook("dbits", 26, "assign")) : (BigInteger.prototype.am = cc11001100_hook("BigInteger.prototype.am", am3, "assign"), dbits = cc11001100_hook("dbits", 28, "assign"));
  BigInteger.prototype.DB = cc11001100_hook("BigInteger.prototype.DB", dbits, "assign");
  BigInteger.prototype.DM = cc11001100_hook("BigInteger.prototype.DM", (1 << dbits) - 1, "assign");
  BigInteger.prototype.DV = cc11001100_hook("BigInteger.prototype.DV", 1 << dbits, "assign");
  var BI_FP = cc11001100_hook("BI_FP", 52, "var-init");
  BigInteger.prototype.FV = cc11001100_hook("BigInteger.prototype.FV", Math.pow(2, BI_FP), "assign");
  BigInteger.prototype.F1 = cc11001100_hook("BigInteger.prototype.F1", BI_FP - dbits, "assign");
  BigInteger.prototype.F2 = cc11001100_hook("BigInteger.prototype.F2", 2 * dbits - BI_FP, "assign");
  var BI_RM = cc11001100_hook("BI_RM", "0123456789abcdefghijklmnopqrstuvwxyz", "var-init"),
    BI_RC = cc11001100_hook("BI_RC", [], "var-init"),
    rr,
    vv;
  rr = cc11001100_hook("rr", "0".charCodeAt(0), "assign");
  for (vv = cc11001100_hook("vv", 0, "assign"); vv <= 9; ++vv) BI_RC[rr++] = cc11001100_hook("BI_RC[rr++]", vv, "assign");
  rr = cc11001100_hook("rr", "a".charCodeAt(0), "assign");
  for (vv = cc11001100_hook("vv", 10, "assign"); vv < 36; ++vv) BI_RC[rr++] = cc11001100_hook("BI_RC[rr++]", vv, "assign");
  rr = cc11001100_hook("rr", "A".charCodeAt(0), "assign");
  for (vv = cc11001100_hook("vv", 10, "assign"); vv < 36; ++vv) BI_RC[rr++] = cc11001100_hook("BI_RC[rr++]", vv, "assign");
  function int2char(a) {
    cc11001100_hook("a", a, "function-parameter");
    return BI_RM.charAt(a);
  }
  function intAt(b, c) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var a = cc11001100_hook("a", BI_RC[b.charCodeAt(c)], "var-init");
    return a == null ? -1 : a;
  }
  function bnpCopyTo(b) {
    cc11001100_hook("b", b, "function-parameter");
    for (var a = cc11001100_hook("a", this.t - 1, "var-init"); a >= 0; --a) b[a] = cc11001100_hook("b[a]", this[a], "assign");
    b.t = cc11001100_hook("b.t", this.t, "assign");
    b.s = cc11001100_hook("b.s", this.s, "assign");
  }
  function bnpFromInt(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.t = cc11001100_hook("this.t", 1, "assign");
    this.s = cc11001100_hook("this.s", a < 0 ? -1 : 0, "assign");
    a > 0 ? this[0] = cc11001100_hook("this[0]", a, "assign") : a < -1 ? this[0] = cc11001100_hook("this[0]", a + this.DV, "assign") : this.t = cc11001100_hook("this.t", 0, "assign");
  }
  function nbv(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    a.fromInt(b);
    return a;
  }
  function bnpFromString(d, c) {
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var b;
    if (c == 16) b = cc11001100_hook("b", 4, "assign");else if (c == 8) b = cc11001100_hook("b", 3, "assign");else if (c == 256) b = cc11001100_hook("b", 8, "assign");else if (c == 2) b = cc11001100_hook("b", 1, "assign");else if (c == 32) b = cc11001100_hook("b", 5, "assign");else if (c == 4) b = cc11001100_hook("b", 2, "assign");else {
      this.fromRadix(d, c);
      return;
    }
    this.s = cc11001100_hook("this.s", this.t = cc11001100_hook("this.t", 0, "assign"), "assign");
    for (var f = cc11001100_hook("f", d.length, "var-init"), g = cc11001100_hook("g", !1, "var-init"), a = cc11001100_hook("a", 0, "var-init"); --f >= 0;) {
      var e = cc11001100_hook("e", b == 8 ? d[f] & 255 : intAt(d, f), "var-init");
      e < 0 ? d.charAt(f) == "-" && (g = cc11001100_hook("g", !0, "assign")) : (g = cc11001100_hook("g", !1, "assign"), a == 0 ? this[this.t++] = cc11001100_hook("this[this.t++]", e, "assign") : a + b > this.DB ? (this[this.t - 1] |= cc11001100_hook("this[this.t - 1]", (e & (1 << this.DB - a) - 1) << a, "assign"), this[this.t++] = cc11001100_hook("this[this.t++]", e >> this.DB - a, "assign")) : this[this.t - 1] |= cc11001100_hook("this[this.t - 1]", e << a, "assign"), a += cc11001100_hook("a", b, "assign"), a >= this.DB && (a -= cc11001100_hook("a", this.DB, "assign")));
    }
    if (b == 8 && (d[0] & 128) != 0) this.s = cc11001100_hook("this.s", -1, "assign"), a > 0 && (this[this.t - 1] |= cc11001100_hook("this[this.t - 1]", (1 << this.DB - a) - 1 << a, "assign"));
    this.clamp();
    g && BigInteger.ZERO.subTo(this, this);
  }
  function bnpClamp() {
    for (var a = cc11001100_hook("a", this.s & this.DM, "var-init"); this.t > 0 && this[this.t - 1] == a;) --this.t;
  }
  function bnToString(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (this.s < 0) return "-" + this.negate().toString(a);
    if (a == 16) a = cc11001100_hook("a", 4, "assign");else if (a == 8) a = cc11001100_hook("a", 3, "assign");else if (a == 2) a = cc11001100_hook("a", 1, "assign");else if (a == 32) a = cc11001100_hook("a", 5, "assign");else if (a == 4) a = cc11001100_hook("a", 2, "assign");else return this.toRadix(a);
    var g = cc11001100_hook("g", (1 << a) - 1, "var-init"),
      d,
      e = cc11001100_hook("e", !1, "var-init"),
      f = cc11001100_hook("f", "", "var-init"),
      c = cc11001100_hook("c", this.t, "var-init"),
      b = cc11001100_hook("b", this.DB - c * this.DB % a, "var-init");
    if (c-- > 0) {
      if (b < this.DB && (d = cc11001100_hook("d", this[c] >> b, "assign")) > 0) e = cc11001100_hook("e", !0, "assign"), f = cc11001100_hook("f", int2char(d), "assign");
      for (; c >= 0;) b < a ? (d = cc11001100_hook("d", (this[c] & (1 << b) - 1) << a - b, "assign"), d |= cc11001100_hook("d", this[--c] >> (b += cc11001100_hook("b", this.DB - a, "assign")), "assign")) : (d = cc11001100_hook("d", this[c] >> (b -= cc11001100_hook("b", a, "assign")) & g, "assign"), b <= 0 && (b += cc11001100_hook("b", this.DB, "assign"), --c)), d > 0 && (e = cc11001100_hook("e", !0, "assign")), e && (f += cc11001100_hook("f", int2char(d), "assign"));
    }
    return e ? f : "0";
  }
  function bnNegate() {
    var a = cc11001100_hook("a", nbi(), "var-init");
    BigInteger.ZERO.subTo(this, a);
    return a;
  }
  function bnAbs() {
    return this.s < 0 ? this.negate() : this;
  }
  function bnCompareTo(c) {
    cc11001100_hook("c", c, "function-parameter");
    var a = cc11001100_hook("a", this.s - c.s, "var-init");
    if (a != 0) return a;
    var b = cc11001100_hook("b", this.t, "var-init"),
      a = cc11001100_hook("a", b - c.t, "var-init");
    if (a != 0) return this.s < 0 ? -a : a;
    for (; --b >= 0;) if ((a = cc11001100_hook("a", this[b] - c[b], "assign")) != 0) return a;
    return 0;
  }
  function nbits(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", 1, "var-init"),
      b;
    if ((b = cc11001100_hook("b", a >>> 16, "assign")) != 0) a = cc11001100_hook("a", b, "assign"), c += cc11001100_hook("c", 16, "assign");
    if ((b = cc11001100_hook("b", a >> 8, "assign")) != 0) a = cc11001100_hook("a", b, "assign"), c += cc11001100_hook("c", 8, "assign");
    if ((b = cc11001100_hook("b", a >> 4, "assign")) != 0) a = cc11001100_hook("a", b, "assign"), c += cc11001100_hook("c", 4, "assign");
    if ((b = cc11001100_hook("b", a >> 2, "assign")) != 0) a = cc11001100_hook("a", b, "assign"), c += cc11001100_hook("c", 2, "assign");
    a >> 1 != 0 && (c += cc11001100_hook("c", 1, "assign"));
    return c;
  }
  function bnBitLength() {
    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
  }
  function bnpDLShiftTo(c, b) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var a = cc11001100_hook("a", this.t - 1, "var-init"); a >= 0; --a) b[a + c] = cc11001100_hook("b[a + c]", this[a], "assign");
    for (a = cc11001100_hook("a", c - 1, "assign"); a >= 0; --a) b[a] = cc11001100_hook("b[a]", 0, "assign");
    b.t = cc11001100_hook("b.t", this.t + c, "assign");
    b.s = cc11001100_hook("b.s", this.s, "assign");
  }
  function bnpDRShiftTo(b, c) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var a = cc11001100_hook("a", b, "var-init"); a < this.t; ++a) c[a - b] = cc11001100_hook("c[a - b]", this[a], "assign");
    c.t = cc11001100_hook("c.t", Math.max(this.t - b, 0), "assign");
    c.s = cc11001100_hook("c.s", this.s, "assign");
  }
  function bnpLShiftTo(f, b) {
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var d = cc11001100_hook("d", f % this.DB, "var-init"), g = cc11001100_hook("g", this.DB - d, "var-init"), h = cc11001100_hook("h", (1 << g) - 1, "var-init"), c = cc11001100_hook("c", Math.floor(f / this.DB), "var-init"), e = cc11001100_hook("e", this.s << d & this.DM, "var-init"), a = cc11001100_hook("a", this.t - 1, "var-init"); a >= 0; --a) b[a + c + 1] = cc11001100_hook("b[a + c + 1]", this[a] >> g | e, "assign"), e = cc11001100_hook("e", (this[a] & h) << d, "assign");
    for (a = cc11001100_hook("a", c - 1, "assign"); a >= 0; --a) b[a] = cc11001100_hook("b[a]", 0, "assign");
    b[c] = cc11001100_hook("b[c]", e, "assign");
    b.t = cc11001100_hook("b.t", this.t + c + 1, "assign");
    b.s = cc11001100_hook("b.s", this.s, "assign");
    b.clamp();
  }
  function bnpRShiftTo(e, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    a.s = cc11001100_hook("a.s", this.s, "assign");
    var b = cc11001100_hook("b", Math.floor(e / this.DB), "var-init");
    if (b >= this.t) a.t = cc11001100_hook("a.t", 0, "assign");else {
      var d = cc11001100_hook("d", e % this.DB, "var-init"),
        g = cc11001100_hook("g", this.DB - d, "var-init"),
        f = cc11001100_hook("f", (1 << d) - 1, "var-init");
      a[0] = cc11001100_hook("a[0]", this[b] >> d, "assign");
      for (var c = cc11001100_hook("c", b + 1, "var-init"); c < this.t; ++c) a[c - b - 1] |= cc11001100_hook("a[c - b - 1]", (this[c] & f) << g, "assign"), a[c - b] = cc11001100_hook("a[c - b]", this[c] >> d, "assign");
      d > 0 && (a[this.t - b - 1] |= cc11001100_hook("a[this.t - b - 1]", (this.s & f) << g, "assign"));
      a.t = cc11001100_hook("a.t", this.t - b, "assign");
      a.clamp();
    }
  }
  function bnpSubTo(d, c) {
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var b = cc11001100_hook("b", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"), e = cc11001100_hook("e", Math.min(d.t, this.t), "var-init"); b < e;) a += cc11001100_hook("a", this[b] - d[b], "assign"), c[b++] = cc11001100_hook("c[b++]", a & this.DM, "assign"), a >>= cc11001100_hook("a", this.DB, "assign");
    if (d.t < this.t) {
      for (a -= cc11001100_hook("a", d.s, "assign"); b < this.t;) a += cc11001100_hook("a", this[b], "assign"), c[b++] = cc11001100_hook("c[b++]", a & this.DM, "assign"), a >>= cc11001100_hook("a", this.DB, "assign");
      a += cc11001100_hook("a", this.s, "assign");
    } else {
      for (a += cc11001100_hook("a", this.s, "assign"); b < d.t;) a -= cc11001100_hook("a", d[b], "assign"), c[b++] = cc11001100_hook("c[b++]", a & this.DM, "assign"), a >>= cc11001100_hook("a", this.DB, "assign");
      a -= cc11001100_hook("a", d.s, "assign");
    }
    c.s = cc11001100_hook("c.s", a < 0 ? -1 : 0, "assign");
    a < -1 ? c[b++] = cc11001100_hook("c[b++]", this.DV + a, "assign") : a > 0 && (c[b++] = cc11001100_hook("c[b++]", a, "assign"));
    c.t = cc11001100_hook("c.t", b, "assign");
    c.clamp();
  }
  function bnpMultiplyTo(e, b) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", this.abs(), "var-init"),
      d = cc11001100_hook("d", e.abs(), "var-init"),
      a = cc11001100_hook("a", c.t, "var-init");
    for (b.t = cc11001100_hook("b.t", a + d.t, "assign"); --a >= 0;) b[a] = cc11001100_hook("b[a]", 0, "assign");
    for (a = cc11001100_hook("a", 0, "assign"); a < d.t; ++a) b[a + c.t] = cc11001100_hook("b[a + c.t]", c.am(0, d[a], b, a, 0, c.t), "assign");
    b.s = cc11001100_hook("b.s", 0, "assign");
    b.clamp();
    this.s != e.s && BigInteger.ZERO.subTo(b, b);
  }
  function bnpSquareTo(c) {
    cc11001100_hook("c", c, "function-parameter");
    for (var b = cc11001100_hook("b", this.abs(), "var-init"), a = cc11001100_hook("a", c.t = cc11001100_hook("c.t", 2 * b.t, "assign"), "var-init"); --a >= 0;) c[a] = cc11001100_hook("c[a]", 0, "assign");
    for (a = cc11001100_hook("a", 0, "assign"); a < b.t - 1; ++a) {
      var d = cc11001100_hook("d", b.am(a, b[a], c, 2 * a, 0, 1), "var-init");
      if ((c[a + b.t] += cc11001100_hook("c[a + b.t]", b.am(a + 1, 2 * b[a], c, 2 * a + 1, d, b.t - a - 1), "assign")) >= b.DV) c[a + b.t] -= cc11001100_hook("c[a + b.t]", b.DV, "assign"), c[a + b.t + 1] = cc11001100_hook("c[a + b.t + 1]", 1, "assign");
    }
    c.t > 0 && (c[c.t - 1] += cc11001100_hook("c[c.t - 1]", b.am(a, b[a], c, 2 * a, 0, 1), "assign"));
    c.s = cc11001100_hook("c.s", 0, "assign");
    c.clamp();
  }
  function bnpDivRemTo(j, d, a) {
    cc11001100_hook("j", j, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", j.abs(), "var-init");
    if (!(b.t <= 0)) {
      var f = cc11001100_hook("f", this.abs(), "var-init");
      if (f.t < b.t) d != null && d.fromInt(0), a != null && this.copyTo(a);else {
        a == null && (a = cc11001100_hook("a", nbi(), "assign"));
        var c = cc11001100_hook("c", nbi(), "var-init"),
          m = cc11001100_hook("m", this.s, "var-init"),
          j = cc11001100_hook("j", j.s, "var-init"),
          h = cc11001100_hook("h", this.DB - nbits(b[b.t - 1]), "var-init");
        h > 0 ? (b.lShiftTo(h, c), f.lShiftTo(h, a)) : (b.copyTo(c), f.copyTo(a));
        b = cc11001100_hook("b", c.t, "assign");
        f = cc11001100_hook("f", c[b - 1], "assign");
        if (f != 0) {
          var k = cc11001100_hook("k", f * (1 << this.F1) + (b > 1 ? c[b - 2] >> this.F2 : 0), "var-init"),
            n = cc11001100_hook("n", this.FV / k, "var-init"),
            k = cc11001100_hook("k", (1 << this.F1) / k, "var-init"),
            o = cc11001100_hook("o", 1 << this.F2, "var-init"),
            g = cc11001100_hook("g", a.t, "var-init"),
            i = cc11001100_hook("i", g - b, "var-init"),
            e = cc11001100_hook("e", d == null ? nbi() : d, "var-init");
          c.dlShiftTo(i, e);
          a.compareTo(e) >= 0 && (a[a.t++] = cc11001100_hook("a[a.t++]", 1, "assign"), a.subTo(e, a));
          BigInteger.ONE.dlShiftTo(b, e);
          for (e.subTo(c, c); c.t < b;) c[c.t++] = cc11001100_hook("c[c.t++]", 0, "assign");
          for (; --i >= 0;) {
            var l = cc11001100_hook("l", a[--g] == f ? this.DM : Math.floor(a[g] * n + (a[g - 1] + o) * k), "var-init");
            if ((a[g] += cc11001100_hook("a[g]", c.am(0, l, a, i, 0, b), "assign")) < l) {
              c.dlShiftTo(i, e);
              for (a.subTo(e, a); a[g] < --l;) a.subTo(e, a);
            }
          }
          d != null && (a.drShiftTo(b, d), m != j && BigInteger.ZERO.subTo(d, d));
          a.t = cc11001100_hook("a.t", b, "assign");
          a.clamp();
          h > 0 && a.rShiftTo(h, a);
          m < 0 && BigInteger.ZERO.subTo(a, a);
        }
      }
    }
  }
  function bnMod(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.abs().divRemTo(b, null, a);
    this.s < 0 && a.compareTo(BigInteger.ZERO) > 0 && b.subTo(a, a);
    return a;
  }
  var Classic = function (a) {
    this.m = cc11001100_hook("this.m", a, "assign");
  };
  function cConvert(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.s < 0 || a.compareTo(this.m) >= 0 ? a.mod(this.m) : a;
  }
  function cRevert(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function cReduce(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.divRemTo(this.m, null, a);
  }
  function cMulTo(b, c, a) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    b.multiplyTo(c, a);
    this.reduce(a);
  }
  function cSqrTo(b, a) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    b.squareTo(a);
    this.reduce(a);
  }
  Classic.prototype.convert = cc11001100_hook("Classic.prototype.convert", cConvert, "assign");
  Classic.prototype.revert = cc11001100_hook("Classic.prototype.revert", cRevert, "assign");
  Classic.prototype.reduce = cc11001100_hook("Classic.prototype.reduce", cReduce, "assign");
  Classic.prototype.mulTo = cc11001100_hook("Classic.prototype.mulTo", cMulTo, "assign");
  Classic.prototype.sqrTo = cc11001100_hook("Classic.prototype.sqrTo", cSqrTo, "assign");
  function bnpInvDigit() {
    if (this.t < 1) return 0;
    var b = cc11001100_hook("b", this[0], "var-init");
    if ((b & 1) == 0) return 0;
    var a = cc11001100_hook("a", b & 3, "var-init"),
      a = cc11001100_hook("a", a * (2 - (b & 15) * a) & 15, "var-init"),
      a = cc11001100_hook("a", a * (2 - (b & 255) * a) & 255, "var-init"),
      a = cc11001100_hook("a", a * (2 - ((b & 65535) * a & 65535)) & 65535, "var-init"),
      a = cc11001100_hook("a", a * (2 - b * a % this.DV) % this.DV, "var-init");
    return a > 0 ? this.DV - a : -a;
  }
  var Montgomery = function (a) {
    this.m = cc11001100_hook("this.m", a, "assign");
    this.mp = cc11001100_hook("this.mp", a.invDigit(), "assign");
    this.mpl = cc11001100_hook("this.mpl", this.mp & 32767, "assign");
    this.mph = cc11001100_hook("this.mph", this.mp >> 15, "assign");
    this.um = cc11001100_hook("this.um", (1 << a.DB - 15) - 1, "assign");
    this.mt2 = cc11001100_hook("this.mt2", 2 * a.t, "assign");
  };
  function montConvert(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    b.abs().dlShiftTo(this.m.t, a);
    a.divRemTo(this.m, null, a);
    b.s < 0 && a.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(a, a);
    return a;
  }
  function montRevert(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    b.copyTo(a);
    this.reduce(a);
    return a;
  }
  function montReduce(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (; a.t <= this.mt2;) a[a.t++] = cc11001100_hook("a[a.t++]", 0, "assign");
    for (var b = cc11001100_hook("b", 0, "var-init"); b < this.m.t; ++b) {
      var c = cc11001100_hook("c", a[b] & 32767, "var-init"),
        d = cc11001100_hook("d", c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM, "var-init"),
        c = cc11001100_hook("c", b + this.m.t, "var-init");
      for (a[c] += cc11001100_hook("a[c]", this.m.am(0, d, a, b, 0, this.m.t), "assign"); a[c] >= a.DV;) a[c] -= cc11001100_hook("a[c]", a.DV, "assign"), a[++c]++;
    }
    a.clamp();
    a.drShiftTo(this.m.t, a);
    a.compareTo(this.m) >= 0 && a.subTo(this.m, a);
  }
  function montSqrTo(b, a) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    b.squareTo(a);
    this.reduce(a);
  }
  function montMulTo(b, c, a) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    b.multiplyTo(c, a);
    this.reduce(a);
  }
  Montgomery.prototype.convert = cc11001100_hook("Montgomery.prototype.convert", montConvert, "assign");
  Montgomery.prototype.revert = cc11001100_hook("Montgomery.prototype.revert", montRevert, "assign");
  Montgomery.prototype.reduce = cc11001100_hook("Montgomery.prototype.reduce", montReduce, "assign");
  Montgomery.prototype.mulTo = cc11001100_hook("Montgomery.prototype.mulTo", montMulTo, "assign");
  Montgomery.prototype.sqrTo = cc11001100_hook("Montgomery.prototype.sqrTo", montSqrTo, "assign");
  function bnpIsEven() {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0;
  }
  function bnpExp(b, c) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (b > 4294967295 || b < 1) return BigInteger.ONE;
    var a = cc11001100_hook("a", nbi(), "var-init"),
      d = cc11001100_hook("d", nbi(), "var-init"),
      f = cc11001100_hook("f", c.convert(this), "var-init"),
      e = cc11001100_hook("e", nbits(b) - 1, "var-init");
    for (f.copyTo(a); --e >= 0;) if (c.sqrTo(a, d), (b & 1 << e) > 0) c.mulTo(d, f, a);else var g = cc11001100_hook("g", a, "var-init"),
      a = cc11001100_hook("a", d, "var-init"),
      d = cc11001100_hook("d", g, "var-init");
    return c.revert(a);
  }
  function bnModPowInt(b, a) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    var c;
    c = cc11001100_hook("c", b < 256 || a.isEven() ? new Classic(a) : new Montgomery(a), "assign");
    return this.exp(b, c);
  }
  BigInteger.prototype.copyTo = cc11001100_hook("BigInteger.prototype.copyTo", bnpCopyTo, "assign");
  BigInteger.prototype.fromInt = cc11001100_hook("BigInteger.prototype.fromInt", bnpFromInt, "assign");
  BigInteger.prototype.fromString = cc11001100_hook("BigInteger.prototype.fromString", bnpFromString, "assign");
  BigInteger.prototype.clamp = cc11001100_hook("BigInteger.prototype.clamp", bnpClamp, "assign");
  BigInteger.prototype.dlShiftTo = cc11001100_hook("BigInteger.prototype.dlShiftTo", bnpDLShiftTo, "assign");
  BigInteger.prototype.drShiftTo = cc11001100_hook("BigInteger.prototype.drShiftTo", bnpDRShiftTo, "assign");
  BigInteger.prototype.lShiftTo = cc11001100_hook("BigInteger.prototype.lShiftTo", bnpLShiftTo, "assign");
  BigInteger.prototype.rShiftTo = cc11001100_hook("BigInteger.prototype.rShiftTo", bnpRShiftTo, "assign");
  BigInteger.prototype.subTo = cc11001100_hook("BigInteger.prototype.subTo", bnpSubTo, "assign");
  BigInteger.prototype.multiplyTo = cc11001100_hook("BigInteger.prototype.multiplyTo", bnpMultiplyTo, "assign");
  BigInteger.prototype.squareTo = cc11001100_hook("BigInteger.prototype.squareTo", bnpSquareTo, "assign");
  BigInteger.prototype.divRemTo = cc11001100_hook("BigInteger.prototype.divRemTo", bnpDivRemTo, "assign");
  BigInteger.prototype.invDigit = cc11001100_hook("BigInteger.prototype.invDigit", bnpInvDigit, "assign");
  BigInteger.prototype.isEven = cc11001100_hook("BigInteger.prototype.isEven", bnpIsEven, "assign");
  BigInteger.prototype.exp = cc11001100_hook("BigInteger.prototype.exp", bnpExp, "assign");
  BigInteger.prototype.toString = cc11001100_hook("BigInteger.prototype.toString", bnToString, "assign");
  BigInteger.prototype.negate = cc11001100_hook("BigInteger.prototype.negate", bnNegate, "assign");
  BigInteger.prototype.abs = cc11001100_hook("BigInteger.prototype.abs", bnAbs, "assign");
  BigInteger.prototype.compareTo = cc11001100_hook("BigInteger.prototype.compareTo", bnCompareTo, "assign");
  BigInteger.prototype.bitLength = cc11001100_hook("BigInteger.prototype.bitLength", bnBitLength, "assign");
  BigInteger.prototype.mod = cc11001100_hook("BigInteger.prototype.mod", bnMod, "assign");
  BigInteger.prototype.modPowInt = cc11001100_hook("BigInteger.prototype.modPowInt", bnModPowInt, "assign");
  BigInteger.ZERO = cc11001100_hook("BigInteger.ZERO", nbv(0), "assign");
  BigInteger.ONE = cc11001100_hook("BigInteger.ONE", nbv(1), "assign");
  function bnClone() {
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.copyTo(a);
    return a;
  }
  function bnIntValue() {
    if (this.s < 0) {
      if (this.t == 1) return this[0] - this.DV;else if (this.t == 0) return -1;
    } else if (this.t == 1) return this[0];else if (this.t == 0) return 0;
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
  }
  function bnByteValue() {
    return this.t == 0 ? this.s : this[0] << 24 >> 24;
  }
  function bnShortValue() {
    return this.t == 0 ? this.s : this[0] << 16 >> 16;
  }
  function bnpChunkSize(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Math.floor(Math.LN2 * this.DB / Math.log(a));
  }
  function bnSigNum() {
    return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1;
  }
  function bnpToRadix(a) {
    cc11001100_hook("a", a, "function-parameter");
    a == null && (a = cc11001100_hook("a", 10, "assign"));
    if (this.signum() == 0 || a < 2 || a > 36) return "0";
    var d = cc11001100_hook("d", this.chunkSize(a), "var-init"),
      d = cc11001100_hook("d", Math.pow(a, d), "var-init"),
      f = cc11001100_hook("f", nbv(d), "var-init"),
      b = cc11001100_hook("b", nbi(), "var-init"),
      c = cc11001100_hook("c", nbi(), "var-init"),
      e = cc11001100_hook("e", "", "var-init");
    for (this.divRemTo(f, b, c); b.signum() > 0;) e = cc11001100_hook("e", (d + c.intValue()).toString(a).substr(1) + e, "assign"), b.divRemTo(f, b, c);
    return c.intValue().toString(a) + e;
  }
  function bnpFromRadix(e, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    this.fromInt(0);
    a == null && (a = cc11001100_hook("a", 10, "assign"));
    for (var f = cc11001100_hook("f", this.chunkSize(a), "var-init"), i = cc11001100_hook("i", Math.pow(a, f), "var-init"), g = cc11001100_hook("g", !1, "var-init"), d = cc11001100_hook("d", 0, "var-init"), b = cc11001100_hook("b", 0, "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < e.length; ++c) {
      var h = cc11001100_hook("h", intAt(e, c), "var-init");
      h < 0 ? e.charAt(c) == "-" && this.signum() == 0 && (g = cc11001100_hook("g", !0, "assign")) : (b = cc11001100_hook("b", a * b + h, "assign"), ++d >= f && (this.dMultiply(i), this.dAddOffset(b, 0), b = cc11001100_hook("b", d = cc11001100_hook("d", 0, "assign"), "assign")));
    }
    d > 0 && (this.dMultiply(Math.pow(a, d)), this.dAddOffset(b, 0));
    g && BigInteger.ZERO.subTo(this, this);
  }
  function bnpFromNumber(a, c, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if ("number" == typeof c) {
      if (a < 2) this.fromInt(1);else {
        this.fromNumber(a, b);
        this.testBit(a - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
        for (this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(c);) this.dAddOffset(2, 0), this.bitLength() > a && this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
      }
    } else {
      var b = cc11001100_hook("b", [], "var-init"),
        d = cc11001100_hook("d", a & 7, "var-init");
      b.length = cc11001100_hook("b.length", (a >> 3) + 1, "assign");
      c.nextBytes(b);
      d > 0 ? b[0] &= cc11001100_hook("b[0]", (1 << d) - 1, "assign") : b[0] = cc11001100_hook("b[0]", 0, "assign");
      this.fromString(b, 256);
    }
  }
  function bnToByteArray() {
    var c = cc11001100_hook("c", this.t, "var-init"),
      e = cc11001100_hook("e", [], "var-init");
    e[0] = cc11001100_hook("e[0]", this.s, "assign");
    var a = cc11001100_hook("a", this.DB - c * this.DB % 8, "var-init"),
      b,
      d = cc11001100_hook("d", 0, "var-init");
    if (c-- > 0) {
      if (a < this.DB && (b = cc11001100_hook("b", this[c] >> a, "assign")) != (this.s & this.DM) >> a) e[d++] = cc11001100_hook("e[d++]", b | this.s << this.DB - a, "assign");
      for (; c >= 0;) if (a < 8 ? (b = cc11001100_hook("b", (this[c] & (1 << a) - 1) << 8 - a, "assign"), b |= cc11001100_hook("b", this[--c] >> (a += cc11001100_hook("a", this.DB - 8, "assign")), "assign")) : (b = cc11001100_hook("b", this[c] >> (a -= cc11001100_hook("a", 8, "assign")) & 255, "assign"), a <= 0 && (a += cc11001100_hook("a", this.DB, "assign"), --c)), (b & 128) != 0 && (b |= cc11001100_hook("b", -256, "assign")), d == 0 && (this.s & 128) != (b & 128) && ++d, d > 0 || b != this.s) e[d++] = cc11001100_hook("e[d++]", b, "assign");
    }
    return e;
  }
  function bnEquals(a) {
    cc11001100_hook("a", a, "function-parameter");
    return this.compareTo(a) == 0;
  }
  function bnMin(a) {
    cc11001100_hook("a", a, "function-parameter");
    return this.compareTo(a) < 0 ? this : a;
  }
  function bnMax(a) {
    cc11001100_hook("a", a, "function-parameter");
    return this.compareTo(a) > 0 ? this : a;
  }
  function bnpBitwiseTo(b, d, c) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var e, f = cc11001100_hook("f", Math.min(b.t, this.t), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < f; ++a) c[a] = cc11001100_hook("c[a]", d(this[a], b[a]), "assign");
    if (b.t < this.t) {
      e = cc11001100_hook("e", b.s & this.DM, "assign");
      for (a = cc11001100_hook("a", f, "assign"); a < this.t; ++a) c[a] = cc11001100_hook("c[a]", d(this[a], e), "assign");
      c.t = cc11001100_hook("c.t", this.t, "assign");
    } else {
      e = cc11001100_hook("e", this.s & this.DM, "assign");
      for (a = cc11001100_hook("a", f, "assign"); a < b.t; ++a) c[a] = cc11001100_hook("c[a]", d(e, b[a]), "assign");
      c.t = cc11001100_hook("c.t", b.t, "assign");
    }
    c.s = cc11001100_hook("c.s", d(this.s, b.s), "assign");
    c.clamp();
  }
  function op_and(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a & b;
  }
  function bnAnd(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.bitwiseTo(b, op_and, a);
    return a;
  }
  function op_or(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a | b;
  }
  function bnOr(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.bitwiseTo(b, op_or, a);
    return a;
  }
  function op_xor(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a ^ b;
  }
  function bnXor(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.bitwiseTo(b, op_xor, a);
    return a;
  }
  function op_andnot(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a & ~b;
  }
  function bnAndNot(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.bitwiseTo(b, op_andnot, a);
    return a;
  }
  function bnNot() {
    for (var a = cc11001100_hook("a", nbi(), "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < this.t; ++b) a[b] = cc11001100_hook("a[b]", this.DM & ~this[b], "assign");
    a.t = cc11001100_hook("a.t", this.t, "assign");
    a.s = cc11001100_hook("a.s", ~this.s, "assign");
    return a;
  }
  function bnShiftLeft(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", nbi(), "var-init");
    a < 0 ? this.rShiftTo(-a, b) : this.lShiftTo(a, b);
    return b;
  }
  function bnShiftRight(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", nbi(), "var-init");
    a < 0 ? this.lShiftTo(-a, b) : this.rShiftTo(a, b);
    return b;
  }
  function lbit(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a == 0) return -1;
    var b = cc11001100_hook("b", 0, "var-init");
    (a & 65535) == 0 && (a >>= cc11001100_hook("a", 16, "assign"), b += cc11001100_hook("b", 16, "assign"));
    (a & 255) == 0 && (a >>= cc11001100_hook("a", 8, "assign"), b += cc11001100_hook("b", 8, "assign"));
    (a & 15) == 0 && (a >>= cc11001100_hook("a", 4, "assign"), b += cc11001100_hook("b", 4, "assign"));
    (a & 3) == 0 && (a >>= cc11001100_hook("a", 2, "assign"), b += cc11001100_hook("b", 2, "assign"));
    (a & 1) == 0 && ++b;
    return b;
  }
  function bnGetLowestSetBit() {
    for (var a = cc11001100_hook("a", 0, "var-init"); a < this.t; ++a) if (this[a] != 0) return a * this.DB + lbit(this[a]);
    return this.s < 0 ? this.t * this.DB : -1;
  }
  function cbit(a) {
    cc11001100_hook("a", a, "function-parameter");
    for (var b = cc11001100_hook("b", 0, "var-init"); a != 0;) a &= cc11001100_hook("a", a - 1, "assign"), ++b;
    return b;
  }
  function bnBitCount() {
    for (var b = cc11001100_hook("b", 0, "var-init"), c = cc11001100_hook("c", this.s & this.DM, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < this.t; ++a) b += cc11001100_hook("b", cbit(this[a] ^ c), "assign");
    return b;
  }
  function bnTestBit(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Math.floor(a / this.DB), "var-init");
    return b >= this.t ? this.s != 0 : (this[b] & 1 << a % this.DB) != 0;
  }
  function bnpChangeBit(b, c) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var a = cc11001100_hook("a", BigInteger.ONE.shiftLeft(b), "var-init");
    this.bitwiseTo(a, c, a);
    return a;
  }
  function bnSetBit(a) {
    cc11001100_hook("a", a, "function-parameter");
    return this.changeBit(a, op_or);
  }
  function bnClearBit(a) {
    cc11001100_hook("a", a, "function-parameter");
    return this.changeBit(a, op_andnot);
  }
  function bnFlipBit(a) {
    cc11001100_hook("a", a, "function-parameter");
    return this.changeBit(a, op_xor);
  }
  function bnpAddTo(d, c) {
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var b = cc11001100_hook("b", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"), e = cc11001100_hook("e", Math.min(d.t, this.t), "var-init"); b < e;) a += cc11001100_hook("a", this[b] + d[b], "assign"), c[b++] = cc11001100_hook("c[b++]", a & this.DM, "assign"), a >>= cc11001100_hook("a", this.DB, "assign");
    if (d.t < this.t) {
      for (a += cc11001100_hook("a", d.s, "assign"); b < this.t;) a += cc11001100_hook("a", this[b], "assign"), c[b++] = cc11001100_hook("c[b++]", a & this.DM, "assign"), a >>= cc11001100_hook("a", this.DB, "assign");
      a += cc11001100_hook("a", this.s, "assign");
    } else {
      for (a += cc11001100_hook("a", this.s, "assign"); b < d.t;) a += cc11001100_hook("a", d[b], "assign"), c[b++] = cc11001100_hook("c[b++]", a & this.DM, "assign"), a >>= cc11001100_hook("a", this.DB, "assign");
      a += cc11001100_hook("a", d.s, "assign");
    }
    c.s = cc11001100_hook("c.s", a < 0 ? -1 : 0, "assign");
    a > 0 ? c[b++] = cc11001100_hook("c[b++]", a, "assign") : a < -1 && (c[b++] = cc11001100_hook("c[b++]", this.DV + a, "assign"));
    c.t = cc11001100_hook("c.t", b, "assign");
    c.clamp();
  }
  function bnAdd(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.addTo(b, a);
    return a;
  }
  function bnSubtract(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.subTo(b, a);
    return a;
  }
  function bnMultiply(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.multiplyTo(b, a);
    return a;
  }
  function bnSquare() {
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.squareTo(a);
    return a;
  }
  function bnDivide(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.divRemTo(b, a, null);
    return a;
  }
  function bnRemainder(b) {
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init");
    this.divRemTo(b, null, a);
    return a;
  }
  function bnDivideAndRemainder(c) {
    cc11001100_hook("c", c, "function-parameter");
    var a = cc11001100_hook("a", nbi(), "var-init"),
      b = cc11001100_hook("b", nbi(), "var-init");
    this.divRemTo(c, a, b);
    return [a, b];
  }
  function bnpDMultiply(a) {
    cc11001100_hook("a", a, "function-parameter");
    this[this.t] = cc11001100_hook("this[this.t]", this.am(0, a - 1, this, 0, 0, this.t), "assign");
    ++this.t;
    this.clamp();
  }
  function bnpDAddOffset(b, a) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    if (b != 0) {
      for (; this.t <= a;) this[this.t++] = cc11001100_hook("this[this.t++]", 0, "assign");
      for (this[a] += cc11001100_hook("this[a]", b, "assign"); this[a] >= this.DV;) this[a] -= cc11001100_hook("this[a]", this.DV, "assign"), ++a >= this.t && (this[this.t++] = cc11001100_hook("this[this.t++]", 0, "assign")), ++this[a];
    }
  }
  function NullExp() {}
  function nNop(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function nMulTo(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a.multiplyTo(b, c);
  }
  function nSqrTo(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.squareTo(b);
  }
  NullExp.prototype.convert = cc11001100_hook("NullExp.prototype.convert", nNop, "assign");
  NullExp.prototype.revert = cc11001100_hook("NullExp.prototype.revert", nNop, "assign");
  NullExp.prototype.mulTo = cc11001100_hook("NullExp.prototype.mulTo", nMulTo, "assign");
  NullExp.prototype.sqrTo = cc11001100_hook("NullExp.prototype.sqrTo", nSqrTo, "assign");
  function bnPow(a) {
    cc11001100_hook("a", a, "function-parameter");
    return this.exp(a, new NullExp());
  }
  function bnpMultiplyLowerTo(c, d, b) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", Math.min(this.t + c.t, d), "var-init");
    b.s = cc11001100_hook("b.s", 0, "assign");
    for (b.t = cc11001100_hook("b.t", a, "assign"); a > 0;) b[--a] = cc11001100_hook("b[--a]", 0, "assign");
    for (var e = cc11001100_hook("e", b.t - this.t, "var-init"); a < e; ++a) b[a + this.t] = cc11001100_hook("b[a + this.t]", this.am(0, c[a], b, a, 0, this.t), "assign");
    for (e = cc11001100_hook("e", Math.min(c.t, d), "assign"); a < e; ++a) this.am(0, c[a], b, a, 0, d - a);
    b.clamp();
  }
  function bnpMultiplyUpperTo(d, c, b) {
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    --c;
    var a = cc11001100_hook("a", b.t = cc11001100_hook("b.t", this.t + d.t - c, "assign"), "var-init");
    for (b.s = cc11001100_hook("b.s", 0, "assign"); --a >= 0;) b[a] = cc11001100_hook("b[a]", 0, "assign");
    for (a = cc11001100_hook("a", Math.max(c - this.t, 0), "assign"); a < d.t; ++a) b[this.t + a - c] = cc11001100_hook("b[this.t + a - c]", this.am(c - a, d[a], b, 0, 0, this.t + a - c), "assign");
    b.clamp();
    b.drShiftTo(1, b);
  }
  var Barrett = function (a) {
    this.r2 = cc11001100_hook("this.r2", nbi(), "assign");
    this.q3 = cc11001100_hook("this.q3", nbi(), "assign");
    BigInteger.ONE.dlShiftTo(2 * a.t, this.r2);
    this.mu = cc11001100_hook("this.mu", this.r2.divide(a), "assign");
    this.m = cc11001100_hook("this.m", a, "assign");
  };
  function barrettConvert(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.s < 0 || a.t > 2 * this.m.t) return a.mod(this.m);else if (a.compareTo(this.m) < 0) return a;else {
      var b = cc11001100_hook("b", nbi(), "var-init");
      a.copyTo(b);
      this.reduce(b);
      return b;
    }
  }
  function barrettRevert(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }
  function barrettReduce(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.drShiftTo(this.m.t - 1, this.r2);
    if (a.t > this.m.t + 1) a.t = cc11001100_hook("a.t", this.m.t + 1, "assign"), a.clamp();
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    for (this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); a.compareTo(this.r2) < 0;) a.dAddOffset(1, this.m.t + 1);
    for (a.subTo(this.r2, a); a.compareTo(this.m) >= 0;) a.subTo(this.m, a);
  }
  function barrettSqrTo(b, a) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    b.squareTo(a);
    this.reduce(a);
  }
  function barrettMulTo(b, c, a) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    b.multiplyTo(c, a);
    this.reduce(a);
  }
  Barrett.prototype.convert = cc11001100_hook("Barrett.prototype.convert", barrettConvert, "assign");
  Barrett.prototype.revert = cc11001100_hook("Barrett.prototype.revert", barrettRevert, "assign");
  Barrett.prototype.reduce = cc11001100_hook("Barrett.prototype.reduce", barrettReduce, "assign");
  Barrett.prototype.mulTo = cc11001100_hook("Barrett.prototype.mulTo", barrettMulTo, "assign");
  Barrett.prototype.sqrTo = cc11001100_hook("Barrett.prototype.sqrTo", barrettSqrTo, "assign");
  function bnModPow(g, k) {
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("k", k, "function-parameter");
    var a = cc11001100_hook("a", g.bitLength(), "var-init"),
      j,
      c = cc11001100_hook("c", nbv(1), "var-init"),
      d;
    if (a <= 0) return c;else j = cc11001100_hook("j", a < 18 ? 1 : a < 48 ? 3 : a < 144 ? 4 : a < 768 ? 5 : 6, "assign");
    d = cc11001100_hook("d", a < 8 ? new Classic(k) : k.isEven() ? new Barrett(k) : new Montgomery(k), "assign");
    var h = cc11001100_hook("h", [], "var-init"),
      b = cc11001100_hook("b", 3, "var-init"),
      l = cc11001100_hook("l", j - 1, "var-init"),
      m = cc11001100_hook("m", (1 << j) - 1, "var-init");
    h[1] = cc11001100_hook("h[1]", d.convert(this), "assign");
    if (j > 1) {
      a = cc11001100_hook("a", nbi(), "assign");
      for (d.sqrTo(h[1], a); b <= m;) h[b] = cc11001100_hook("h[b]", nbi(), "assign"), d.mulTo(a, h[b - 2], h[b]), b += cc11001100_hook("b", 2, "assign");
    }
    for (var e = cc11001100_hook("e", g.t - 1, "var-init"), i, n = cc11001100_hook("n", !0, "var-init"), f = cc11001100_hook("f", nbi(), "var-init"), a = cc11001100_hook("a", nbits(g[e]) - 1, "var-init"); e >= 0;) {
      a >= l ? i = cc11001100_hook("i", g[e] >> a - l & m, "assign") : (i = cc11001100_hook("i", (g[e] & (1 << a + 1) - 1) << l - a, "assign"), e > 0 && (i |= cc11001100_hook("i", g[e - 1] >> this.DB + a - l, "assign")));
      for (b = cc11001100_hook("b", j, "assign"); (i & 1) == 0;) i >>= cc11001100_hook("i", 1, "assign"), --b;
      if ((a -= cc11001100_hook("a", b, "assign")) < 0) a += cc11001100_hook("a", this.DB, "assign"), --e;
      if (n) h[i].copyTo(c), n = cc11001100_hook("n", !1, "assign");else {
        for (; b > 1;) d.sqrTo(c, f), d.sqrTo(f, c), b -= cc11001100_hook("b", 2, "assign");
        b > 0 ? d.sqrTo(c, f) : (b = cc11001100_hook("b", c, "assign"), c = cc11001100_hook("c", f, "assign"), f = cc11001100_hook("f", b, "assign"));
        d.mulTo(f, h[i], c);
      }
      for (; e >= 0 && (g[e] & 1 << a) == 0;) d.sqrTo(c, f), b = cc11001100_hook("b", c, "assign"), c = cc11001100_hook("c", f, "assign"), f = cc11001100_hook("f", b, "assign"), --a < 0 && (a = cc11001100_hook("a", this.DB - 1, "assign"), --e);
    }
    return d.revert(c);
  }
  function bnGCD(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", this.s < 0 ? this.negate() : this.clone(), "var-init"),
      a = cc11001100_hook("a", a.s < 0 ? a.negate() : a.clone(), "var-init");
    if (b.compareTo(a) < 0) var d = cc11001100_hook("d", b, "var-init"),
      b = cc11001100_hook("b", a, "var-init"),
      a = cc11001100_hook("a", d, "var-init");
    var d = cc11001100_hook("d", b.getLowestSetBit(), "var-init"),
      c = cc11001100_hook("c", a.getLowestSetBit(), "var-init");
    if (c < 0) return b;
    d < c && (c = cc11001100_hook("c", d, "assign"));
    c > 0 && (b.rShiftTo(c, b), a.rShiftTo(c, a));
    for (; b.signum() > 0;) (d = cc11001100_hook("d", b.getLowestSetBit(), "assign")) > 0 && b.rShiftTo(d, b), (d = cc11001100_hook("d", a.getLowestSetBit(), "assign")) > 0 && a.rShiftTo(d, a), b.compareTo(a) >= 0 ? (b.subTo(a, b), b.rShiftTo(1, b)) : (a.subTo(b, a), a.rShiftTo(1, a));
    c > 0 && a.lShiftTo(c, a);
    return a;
  }
  function bnpModInt(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a <= 0) return 0;
    var d = cc11001100_hook("d", this.DV % a, "var-init"),
      b = cc11001100_hook("b", this.s < 0 ? a - 1 : 0, "var-init");
    if (this.t > 0) if (d == 0) b = cc11001100_hook("b", this[0] % a, "assign");else for (var c = cc11001100_hook("c", this.t - 1, "var-init"); c >= 0; --c) b = cc11001100_hook("b", (d * b + this[c]) % a, "assign");
    return b;
  }
  function bnModInverse(b) {
    cc11001100_hook("b", b, "function-parameter");
    var h = cc11001100_hook("h", b.isEven(), "var-init");
    if (this.isEven() && h || b.signum() == 0) return BigInteger.ZERO;
    for (var d = cc11001100_hook("d", b.clone(), "var-init"), e = cc11001100_hook("e", this.clone(), "var-init"), f = cc11001100_hook("f", nbv(1), "var-init"), c = cc11001100_hook("c", nbv(0), "var-init"), g = cc11001100_hook("g", nbv(0), "var-init"), a = cc11001100_hook("a", nbv(1), "var-init"); d.signum() != 0;) {
      for (; d.isEven();) {
        d.rShiftTo(1, d);
        if (h) {
          if (!f.isEven() || !c.isEven()) f.addTo(this, f), c.subTo(b, c);
          f.rShiftTo(1, f);
        } else c.isEven() || c.subTo(b, c);
        c.rShiftTo(1, c);
      }
      for (; e.isEven();) {
        e.rShiftTo(1, e);
        if (h) {
          if (!g.isEven() || !a.isEven()) g.addTo(this, g), a.subTo(b, a);
          g.rShiftTo(1, g);
        } else a.isEven() || a.subTo(b, a);
        a.rShiftTo(1, a);
      }
      d.compareTo(e) >= 0 ? (d.subTo(e, d), h && f.subTo(g, f), c.subTo(a, c)) : (e.subTo(d, e), h && g.subTo(f, g), a.subTo(c, a));
    }
    if (e.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
    if (a.compareTo(b) >= 0) return a.subtract(b);
    if (a.signum() < 0) a.addTo(b, a);else return a;
    return a.signum() < 0 ? a.add(b) : a;
  }
  var lowprimes = cc11001100_hook("lowprimes", [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], "var-init"),
    lplim = cc11001100_hook("lplim", 67108864 / lowprimes[lowprimes.length - 1], "var-init");
  function bnIsProbablePrime(e) {
    cc11001100_hook("e", e, "function-parameter");
    var a,
      b = cc11001100_hook("b", this.abs(), "var-init");
    if (b.t == 1 && b[0] <= lowprimes[lowprimes.length - 1]) {
      for (a = cc11001100_hook("a", 0, "assign"); a < lowprimes.length; ++a) if (b[0] == lowprimes[a]) return !0;
      return !1;
    }
    if (b.isEven()) return !1;
    for (a = cc11001100_hook("a", 1, "assign"); a < lowprimes.length;) {
      for (var c = cc11001100_hook("c", lowprimes[a], "var-init"), d = cc11001100_hook("d", a + 1, "var-init"); d < lowprimes.length && c < lplim;) c *= cc11001100_hook("c", lowprimes[d++], "assign");
      for (c = cc11001100_hook("c", b.modInt(c), "assign"); a < d;) if (c % lowprimes[a++] == 0) return !1;
    }
    return b.millerRabin(e);
  }
  function bnpMillerRabin(c) {
    cc11001100_hook("c", c, "function-parameter");
    var b = cc11001100_hook("b", this.subtract(BigInteger.ONE), "var-init"),
      d = cc11001100_hook("d", b.getLowestSetBit(), "var-init");
    if (d <= 0) return !1;
    var g = cc11001100_hook("g", b.shiftRight(d), "var-init"),
      c = cc11001100_hook("c", c + 1 >> 1, "var-init");
    if (c > lowprimes.length) c = cc11001100_hook("c", lowprimes.length, "assign");
    for (var e = cc11001100_hook("e", nbi(), "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < c; ++f) {
      e.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
      var a = cc11001100_hook("a", e.modPow(g, this), "var-init");
      if (a.compareTo(BigInteger.ONE) != 0 && a.compareTo(b) != 0) {
        for (var h = cc11001100_hook("h", 1, "var-init"); h++ < d && a.compareTo(b) != 0;) if (a = cc11001100_hook("a", a.modPowInt(2, this), "assign"), a.compareTo(BigInteger.ONE) == 0) return !1;
        if (a.compareTo(b) != 0) return !1;
      }
    }
    return !0;
  }
  BigInteger.prototype.chunkSize = cc11001100_hook("BigInteger.prototype.chunkSize", bnpChunkSize, "assign");
  BigInteger.prototype.toRadix = cc11001100_hook("BigInteger.prototype.toRadix", bnpToRadix, "assign");
  BigInteger.prototype.fromRadix = cc11001100_hook("BigInteger.prototype.fromRadix", bnpFromRadix, "assign");
  BigInteger.prototype.fromNumber = cc11001100_hook("BigInteger.prototype.fromNumber", bnpFromNumber, "assign");
  BigInteger.prototype.bitwiseTo = cc11001100_hook("BigInteger.prototype.bitwiseTo", bnpBitwiseTo, "assign");
  BigInteger.prototype.changeBit = cc11001100_hook("BigInteger.prototype.changeBit", bnpChangeBit, "assign");
  BigInteger.prototype.addTo = cc11001100_hook("BigInteger.prototype.addTo", bnpAddTo, "assign");
  BigInteger.prototype.dMultiply = cc11001100_hook("BigInteger.prototype.dMultiply", bnpDMultiply, "assign");
  BigInteger.prototype.dAddOffset = cc11001100_hook("BigInteger.prototype.dAddOffset", bnpDAddOffset, "assign");
  BigInteger.prototype.multiplyLowerTo = cc11001100_hook("BigInteger.prototype.multiplyLowerTo", bnpMultiplyLowerTo, "assign");
  BigInteger.prototype.multiplyUpperTo = cc11001100_hook("BigInteger.prototype.multiplyUpperTo", bnpMultiplyUpperTo, "assign");
  BigInteger.prototype.modInt = cc11001100_hook("BigInteger.prototype.modInt", bnpModInt, "assign");
  BigInteger.prototype.millerRabin = cc11001100_hook("BigInteger.prototype.millerRabin", bnpMillerRabin, "assign");
  BigInteger.prototype.clone = cc11001100_hook("BigInteger.prototype.clone", bnClone, "assign");
  BigInteger.prototype.intValue = cc11001100_hook("BigInteger.prototype.intValue", bnIntValue, "assign");
  BigInteger.prototype.byteValue = cc11001100_hook("BigInteger.prototype.byteValue", bnByteValue, "assign");
  BigInteger.prototype.shortValue = cc11001100_hook("BigInteger.prototype.shortValue", bnShortValue, "assign");
  BigInteger.prototype.signum = cc11001100_hook("BigInteger.prototype.signum", bnSigNum, "assign");
  BigInteger.prototype.toByteArray = cc11001100_hook("BigInteger.prototype.toByteArray", bnToByteArray, "assign");
  BigInteger.prototype.equals = cc11001100_hook("BigInteger.prototype.equals", bnEquals, "assign");
  BigInteger.prototype.min = cc11001100_hook("BigInteger.prototype.min", bnMin, "assign");
  BigInteger.prototype.max = cc11001100_hook("BigInteger.prototype.max", bnMax, "assign");
  BigInteger.prototype.and = cc11001100_hook("BigInteger.prototype.and", bnAnd, "assign");
  BigInteger.prototype.or = cc11001100_hook("BigInteger.prototype.or", bnOr, "assign");
  BigInteger.prototype.xor = cc11001100_hook("BigInteger.prototype.xor", bnXor, "assign");
  BigInteger.prototype.andNot = cc11001100_hook("BigInteger.prototype.andNot", bnAndNot, "assign");
  BigInteger.prototype.not = cc11001100_hook("BigInteger.prototype.not", bnNot, "assign");
  BigInteger.prototype.shiftLeft = cc11001100_hook("BigInteger.prototype.shiftLeft", bnShiftLeft, "assign");
  BigInteger.prototype.shiftRight = cc11001100_hook("BigInteger.prototype.shiftRight", bnShiftRight, "assign");
  BigInteger.prototype.getLowestSetBit = cc11001100_hook("BigInteger.prototype.getLowestSetBit", bnGetLowestSetBit, "assign");
  BigInteger.prototype.bitCount = cc11001100_hook("BigInteger.prototype.bitCount", bnBitCount, "assign");
  BigInteger.prototype.testBit = cc11001100_hook("BigInteger.prototype.testBit", bnTestBit, "assign");
  BigInteger.prototype.setBit = cc11001100_hook("BigInteger.prototype.setBit", bnSetBit, "assign");
  BigInteger.prototype.clearBit = cc11001100_hook("BigInteger.prototype.clearBit", bnClearBit, "assign");
  BigInteger.prototype.flipBit = cc11001100_hook("BigInteger.prototype.flipBit", bnFlipBit, "assign");
  BigInteger.prototype.add = cc11001100_hook("BigInteger.prototype.add", bnAdd, "assign");
  BigInteger.prototype.subtract = cc11001100_hook("BigInteger.prototype.subtract", bnSubtract, "assign");
  BigInteger.prototype.multiply = cc11001100_hook("BigInteger.prototype.multiply", bnMultiply, "assign");
  BigInteger.prototype.divide = cc11001100_hook("BigInteger.prototype.divide", bnDivide, "assign");
  BigInteger.prototype.remainder = cc11001100_hook("BigInteger.prototype.remainder", bnRemainder, "assign");
  BigInteger.prototype.divideAndRemainder = cc11001100_hook("BigInteger.prototype.divideAndRemainder", bnDivideAndRemainder, "assign");
  BigInteger.prototype.modPow = cc11001100_hook("BigInteger.prototype.modPow", bnModPow, "assign");
  BigInteger.prototype.modInverse = cc11001100_hook("BigInteger.prototype.modInverse", bnModInverse, "assign");
  BigInteger.prototype.pow = cc11001100_hook("BigInteger.prototype.pow", bnPow, "assign");
  BigInteger.prototype.gcd = cc11001100_hook("BigInteger.prototype.gcd", bnGCD, "assign");
  BigInteger.prototype.isProbablePrime = cc11001100_hook("BigInteger.prototype.isProbablePrime", bnIsProbablePrime, "assign");
  BigInteger.prototype.square = cc11001100_hook("BigInteger.prototype.square", bnSquare, "assign");
  var SecureRandom = function () {
      function f(c) {
        cc11001100_hook("c", c, "function-parameter");
        b[a++] ^= cc11001100_hook("b[a++]", c & 255, "assign");
        b[a++] ^= cc11001100_hook("b[a++]", c >> 8 & 255, "assign");
        b[a++] ^= cc11001100_hook("b[a++]", c >> 16 & 255, "assign");
        b[a++] ^= cc11001100_hook("b[a++]", c >> 24 & 255, "assign");
        a >= e && (a -= cc11001100_hook("a", e, "assign"));
      }
      var d,
        b,
        a,
        e = cc11001100_hook("e", 256, "var-init");
      if (b == null) {
        b = cc11001100_hook("b", [], "assign");
        a = cc11001100_hook("a", 0, "assign");
        var c;
        if (navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
          var g = cc11001100_hook("g", window.crypto.random(32), "var-init");
          for (c = cc11001100_hook("c", 0, "assign"); c < g.length; ++c) b[a++] = cc11001100_hook("b[a++]", g.charCodeAt(c) & 255, "assign");
        }
        for (; a < e;) c = cc11001100_hook("c", Math.floor(65536 * Math.random()), "assign"), b[a++] = cc11001100_hook("b[a++]", c >>> 8, "assign"), b[a++] = cc11001100_hook("b[a++]", c & 255, "assign");
        a = cc11001100_hook("a", 0, "assign");
        f(new Date().getTime());
      }
      this.nextBytes = cc11001100_hook("this.nextBytes", function (e) {
        for (var c = cc11001100_hook("c", 0, "var-init"); c < e.length; ++c) {
          var h = cc11001100_hook("h", e, "var-init"),
            i = cc11001100_hook("i", c, "var-init"),
            g;
          if (d == null) {
            f(new Date().getTime());
            d = cc11001100_hook("d", new prng_newstate(), "assign");
            d.init(b);
            for (a = cc11001100_hook("a", 0, "assign"); a < b.length; ++a) b[a] = cc11001100_hook("b[a]", 0, "assign");
            a = cc11001100_hook("a", 0, "assign");
          }
          g = cc11001100_hook("g", d.next(), "assign");
          h[i] = cc11001100_hook("h[i]", g, "assign");
        }
      }, "assign");
    },
    prng_newstate = function () {
      this.j = cc11001100_hook("this.j", this.i = cc11001100_hook("this.i", 0, "assign"), "assign");
      this.S = cc11001100_hook("this.S", [], "assign");
      this.init = cc11001100_hook("this.init", function (d) {
        for (var b, c, a = cc11001100_hook("a", 0, "var-init"); a < 256; ++a) this.S[a] = cc11001100_hook("this.S[a]", a, "assign");
        for (a = cc11001100_hook("a", b = cc11001100_hook("b", 0, "assign"), "assign"); a < 256; ++a) b = cc11001100_hook("b", b + this.S[a] + d[a % d.length] & 255, "assign"), c = cc11001100_hook("c", this.S[a], "assign"), this.S[a] = cc11001100_hook("this.S[a]", this.S[b], "assign"), this.S[b] = cc11001100_hook("this.S[b]", c, "assign");
        this.j = cc11001100_hook("this.j", this.i = cc11001100_hook("this.i", 0, "assign"), "assign");
      }, "assign");
      this.next = cc11001100_hook("this.next", function () {
        var a;
        this.i = cc11001100_hook("this.i", this.i + 1 & 255, "assign");
        this.j = cc11001100_hook("this.j", this.j + this.S[this.i] & 255, "assign");
        a = cc11001100_hook("a", this.S[this.i], "assign");
        this.S[this.i] = cc11001100_hook("this.S[this.i]", this.S[this.j], "assign");
        this.S[this.j] = cc11001100_hook("this.S[this.j]", a, "assign");
        return this.S[a + this.S[this.i] & 255];
      }, "assign");
    },
    ECFieldElementFp = function (a, b) {
      this.x = cc11001100_hook("this.x", b, "assign");
      this.q = cc11001100_hook("this.q", a, "assign");
    };
  function feFpEquals(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a == this ? !0 : this.q.equals(a.q) && this.x.equals(a.x);
  }
  function feFpToBigInteger() {
    return this.x;
  }
  function feFpNegate() {
    return new ECFieldElementFp(this.q, this.x.negate().mod(this.q));
  }
  function feFpAdd(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new ECFieldElementFp(this.q, this.x.add(a.toBigInteger()).mod(this.q));
  }
  function feFpSubtract(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new ECFieldElementFp(this.q, this.x.subtract(a.toBigInteger()).mod(this.q));
  }
  function feFpMultiply(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new ECFieldElementFp(this.q, this.x.multiply(a.toBigInteger()).mod(this.q));
  }
  function feFpSquare() {
    return new ECFieldElementFp(this.q, this.x.square().mod(this.q));
  }
  function feFpDivide(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new ECFieldElementFp(this.q, this.x.multiply(a.toBigInteger().modInverse(this.q)).mod(this.q));
  }
  ECFieldElementFp.prototype.equals = cc11001100_hook("ECFieldElementFp.prototype.equals", feFpEquals, "assign");
  ECFieldElementFp.prototype.toBigInteger = cc11001100_hook("ECFieldElementFp.prototype.toBigInteger", feFpToBigInteger, "assign");
  ECFieldElementFp.prototype.negate = cc11001100_hook("ECFieldElementFp.prototype.negate", feFpNegate, "assign");
  ECFieldElementFp.prototype.add = cc11001100_hook("ECFieldElementFp.prototype.add", feFpAdd, "assign");
  ECFieldElementFp.prototype.subtract = cc11001100_hook("ECFieldElementFp.prototype.subtract", feFpSubtract, "assign");
  ECFieldElementFp.prototype.multiply = cc11001100_hook("ECFieldElementFp.prototype.multiply", feFpMultiply, "assign");
  ECFieldElementFp.prototype.square = cc11001100_hook("ECFieldElementFp.prototype.square", feFpSquare, "assign");
  ECFieldElementFp.prototype.divide = cc11001100_hook("ECFieldElementFp.prototype.divide", feFpDivide, "assign");
  var ECPointFp = function (b, c, d, a) {
    this.curve = cc11001100_hook("this.curve", b, "assign");
    this.x = cc11001100_hook("this.x", c, "assign");
    this.y = cc11001100_hook("this.y", d, "assign");
    this.z = cc11001100_hook("this.z", a == null ? BigInteger.ONE : a, "assign");
    this.zinv = cc11001100_hook("this.zinv", null, "assign");
  };
  function pointFpGetX() {
    if (this.zinv == null) this.zinv = cc11001100_hook("this.zinv", this.z.modInverse(this.curve.q), "assign");
    return this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
  }
  function pointFpGetY() {
    if (this.zinv == null) this.zinv = cc11001100_hook("this.zinv", this.z.modInverse(this.curve.q), "assign");
    return this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
  }
  function pointFpEquals(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a == this ? !0 : this.isInfinity() ? a.isInfinity() : a.isInfinity() ? this.isInfinity() : !a.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(a.z)).mod(this.curve.q).equals(BigInteger.ZERO) ? !1 : a.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(a.z)).mod(this.curve.q).equals(BigInteger.ZERO);
  }
  function pointFpIsInfinity() {
    return this.x == null && this.y == null ? !0 : this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO);
  }
  function pointFpNegate() {
    return new ECPointFp(this.curve, this.x, this.y.negate(), this.z);
  }
  function pointFpAdd(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (this.isInfinity()) return a;
    if (a.isInfinity()) return this;
    var b = cc11001100_hook("b", a.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(a.z)).mod(this.curve.q), "var-init"),
      c = cc11001100_hook("c", a.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(a.z)).mod(this.curve.q), "var-init");
    if (BigInteger.ZERO.equals(c)) return BigInteger.ZERO.equals(b) ? this.twice() : this.curve.getInfinity();
    var g = cc11001100_hook("g", new BigInteger("3"), "var-init"),
      f = cc11001100_hook("f", this.x.toBigInteger(), "var-init"),
      h = cc11001100_hook("h", this.y.toBigInteger(), "var-init");
    a.x.toBigInteger();
    a.y.toBigInteger();
    var d = cc11001100_hook("d", c.square(), "var-init"),
      e = cc11001100_hook("e", d.multiply(c), "var-init"),
      f = cc11001100_hook("f", f.multiply(d), "var-init"),
      d = cc11001100_hook("d", b.square().multiply(this.z), "var-init"),
      c = cc11001100_hook("c", d.subtract(f.shiftLeft(1)).multiply(a.z).subtract(e).multiply(c).mod(this.curve.q), "var-init"),
      b = cc11001100_hook("b", f.multiply(g).multiply(b).subtract(h.multiply(e)).subtract(d.multiply(b)).multiply(a.z).add(b.multiply(e)).mod(this.curve.q), "var-init"),
      a = cc11001100_hook("a", e.multiply(this.z).multiply(a.z).mod(this.curve.q), "var-init");
    return new ECPointFp(this.curve, this.curve.fromBigInteger(c), this.curve.fromBigInteger(b), a);
  }
  function pointFpTwice() {
    if (this.isInfinity()) return this;
    if (this.y.toBigInteger().signum() == 0) return this.curve.getInfinity();
    var d = cc11001100_hook("d", new BigInteger("3"), "var-init"),
      e = cc11001100_hook("e", this.x.toBigInteger(), "var-init"),
      b = cc11001100_hook("b", this.y.toBigInteger(), "var-init"),
      c = cc11001100_hook("c", b.multiply(this.z), "var-init"),
      f = cc11001100_hook("f", c.multiply(b).mod(this.curve.q), "var-init"),
      b = cc11001100_hook("b", this.curve.a.toBigInteger(), "var-init"),
      a = cc11001100_hook("a", e.square().multiply(d), "var-init");
    BigInteger.ZERO.equals(b) || (a = cc11001100_hook("a", a.add(this.z.square().multiply(b)), "assign"));
    a = cc11001100_hook("a", a.mod(this.curve.q), "assign");
    b = cc11001100_hook("b", a.square().subtract(e.shiftLeft(3).multiply(f)).shiftLeft(1).multiply(c).mod(this.curve.q), "assign");
    d = cc11001100_hook("d", a.multiply(d).multiply(e).subtract(f.shiftLeft(1)).shiftLeft(2).multiply(f).subtract(a.square().multiply(a)).mod(this.curve.q), "assign");
    c = cc11001100_hook("c", c.square().multiply(c).shiftLeft(3).mod(this.curve.q), "assign");
    return new ECPointFp(this.curve, this.curve.fromBigInteger(b), this.curve.fromBigInteger(d), c);
  }
  function pointFpMultiply(c) {
    cc11001100_hook("c", c, "function-parameter");
    if (this.isInfinity()) return this;
    if (c.signum() == 0) return this.curve.getInfinity();
    for (var d = cc11001100_hook("d", c.multiply(new BigInteger("3")), "var-init"), f = cc11001100_hook("f", this.negate(), "var-init"), a = cc11001100_hook("a", this, "var-init"), b = cc11001100_hook("b", d.bitLength() - 2, "var-init"); b > 0; --b) {
      var a = cc11001100_hook("a", a.twice(), "var-init"),
        e = cc11001100_hook("e", d.testBit(b), "var-init"),
        g = cc11001100_hook("g", c.testBit(b), "var-init");
      e != g && (a = cc11001100_hook("a", a.add(e ? this : f), "assign"));
    }
    return a;
  }
  function pointFpMultiplyTwo(d, e, c) {
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var b;
    b = cc11001100_hook("b", d.bitLength() > c.bitLength() ? d.bitLength() - 1 : c.bitLength() - 1, "assign");
    for (var a = cc11001100_hook("a", this.curve.getInfinity(), "var-init"), f = cc11001100_hook("f", this.add(e), "var-init"); b >= 0;) a = cc11001100_hook("a", a.twice(), "assign"), d.testBit(b) ? a = cc11001100_hook("a", c.testBit(b) ? a.add(f) : a.add(this), "assign") : c.testBit(b) && (a = cc11001100_hook("a", a.add(e), "assign")), --b;
    return a;
  }
  ECPointFp.prototype.getX = cc11001100_hook("ECPointFp.prototype.getX", pointFpGetX, "assign");
  ECPointFp.prototype.getY = cc11001100_hook("ECPointFp.prototype.getY", pointFpGetY, "assign");
  ECPointFp.prototype.equals = cc11001100_hook("ECPointFp.prototype.equals", pointFpEquals, "assign");
  ECPointFp.prototype.isInfinity = cc11001100_hook("ECPointFp.prototype.isInfinity", pointFpIsInfinity, "assign");
  ECPointFp.prototype.negate = cc11001100_hook("ECPointFp.prototype.negate", pointFpNegate, "assign");
  ECPointFp.prototype.add = cc11001100_hook("ECPointFp.prototype.add", pointFpAdd, "assign");
  ECPointFp.prototype.twice = cc11001100_hook("ECPointFp.prototype.twice", pointFpTwice, "assign");
  ECPointFp.prototype.multiply = cc11001100_hook("ECPointFp.prototype.multiply", pointFpMultiply, "assign");
  ECPointFp.prototype.multiplyTwo = cc11001100_hook("ECPointFp.prototype.multiplyTwo", pointFpMultiplyTwo, "assign");
  var ECCurveFp = function (a, b, c) {
    this.q = cc11001100_hook("this.q", a, "assign");
    this.a = cc11001100_hook("this.a", this.fromBigInteger(b), "assign");
    this.b = cc11001100_hook("this.b", this.fromBigInteger(c), "assign");
    this.infinity = cc11001100_hook("this.infinity", new ECPointFp(this, null, null), "assign");
  };
  function curveFpGetQ() {
    return this.q;
  }
  function curveFpGetA() {
    return this.a;
  }
  function curveFpGetB() {
    return this.b;
  }
  function curveFpEquals(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a == this ? !0 : this.q.equals(a.q) && this.a.equals(a.a) && this.b.equals(a.b);
  }
  function curveFpGetInfinity() {
    return this.infinity;
  }
  function curveFpFromBigInteger(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new ECFieldElementFp(this.q, a);
  }
  function curveFpDecodePointHex(a) {
    cc11001100_hook("a", a, "function-parameter");
    switch (parseInt(a.substr(0, 2), 16)) {
      case 0:
        return this.infinity;
      case 2:
      case 3:
        return null;
      case 4:
      case 6:
      case 7:
        var b = cc11001100_hook("b", (a.length - 2) / 2, "var-init"),
          c = cc11001100_hook("c", a.substr(2, b), "var-init"),
          a = cc11001100_hook("a", a.substr(b + 2, b), "var-init");
        return new ECPointFp(this, this.fromBigInteger(new BigInteger(c, 16)), this.fromBigInteger(new BigInteger(a, 16)));
      default:
        return null;
    }
  }
  ECCurveFp.prototype.getQ = cc11001100_hook("ECCurveFp.prototype.getQ", curveFpGetQ, "assign");
  ECCurveFp.prototype.getA = cc11001100_hook("ECCurveFp.prototype.getA", curveFpGetA, "assign");
  ECCurveFp.prototype.getB = cc11001100_hook("ECCurveFp.prototype.getB", curveFpGetB, "assign");
  ECCurveFp.prototype.equals = cc11001100_hook("ECCurveFp.prototype.equals", curveFpEquals, "assign");
  ECCurveFp.prototype.getInfinity = cc11001100_hook("ECCurveFp.prototype.getInfinity", curveFpGetInfinity, "assign");
  ECCurveFp.prototype.fromBigInteger = cc11001100_hook("ECCurveFp.prototype.fromBigInteger", curveFpFromBigInteger, "assign");
  ECCurveFp.prototype.decodePointHex = cc11001100_hook("ECCurveFp.prototype.decodePointHex", curveFpDecodePointHex, "assign");
  ECFieldElementFp.prototype.getByteLength = cc11001100_hook("ECFieldElementFp.prototype.getByteLength", function () {
    return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
  }, "assign");
  ECPointFp.prototype.getEncoded = cc11001100_hook("ECPointFp.prototype.getEncoded", function (d) {
    var b = function (c, b) {
        var a = cc11001100_hook("a", c.toByteArrayUnsigned(), "var-init");
        if (b < a.length) a = cc11001100_hook("a", a.slice(a.length - b), "assign");else for (; b > a.length;) a.unshift(0);
        return a;
      },
      a = cc11001100_hook("a", this.getX().toBigInteger(), "var-init"),
      c = cc11001100_hook("c", this.getY().toBigInteger(), "var-init"),
      a = cc11001100_hook("a", b(a, 32), "var-init");
    d ? c.isEven() ? a.unshift(2) : a.unshift(3) : (a.unshift(4), a = cc11001100_hook("a", a.concat(b(c, 32)), "assign"));
    return a;
  }, "assign");
  ECPointFp.decodeFrom = cc11001100_hook("ECPointFp.decodeFrom", function (c, d) {
    var a = cc11001100_hook("a", d.length - 1, "var-init"),
      b = cc11001100_hook("b", d.slice(1, 1 + a / 2), "var-init"),
      a = cc11001100_hook("a", d.slice(1 + a / 2, 1 + a), "var-init");
    b.unshift(0);
    a.unshift(0);
    b = cc11001100_hook("b", new BigInteger(b), "assign");
    a = cc11001100_hook("a", new BigInteger(a), "assign");
    return new ECPointFp(c, c.fromBigInteger(b), c.fromBigInteger(a));
  }, "assign");
  ECPointFp.decodeFromHex = cc11001100_hook("ECPointFp.decodeFromHex", function (d, b) {
    var c, a;
    b.substr(0, 2);
    a = cc11001100_hook("a", b.length - 2, "assign");
    c = cc11001100_hook("c", b.substr(2, a / 2), "assign");
    a = cc11001100_hook("a", b.substr(2 + a / 2, a / 2), "assign");
    c = cc11001100_hook("c", new BigInteger(c, 16), "assign");
    a = cc11001100_hook("a", new BigInteger(a, 16), "assign");
    return new ECPointFp(d, d.fromBigInteger(c), d.fromBigInteger(a));
  }, "assign");
  ECPointFp.prototype.add2D = cc11001100_hook("ECPointFp.prototype.add2D", function (a) {
    if (this.isInfinity()) return a;
    if (a.isInfinity()) return this;
    if (this.x.equals(a.x)) return this.y.equals(a.y) ? this.twice() : this.curve.getInfinity();
    var b = cc11001100_hook("b", a.x.subtract(this.x), "var-init"),
      b = cc11001100_hook("b", a.y.subtract(this.y).divide(b), "var-init"),
      a = cc11001100_hook("a", b.square().subtract(this.x).subtract(a.x), "var-init"),
      b = cc11001100_hook("b", b.multiply(this.x.subtract(a)).subtract(this.y), "var-init");
    return new ECPointFp(this.curve, a, b);
  }, "assign");
  ECPointFp.prototype.twice2D = cc11001100_hook("ECPointFp.prototype.twice2D", function () {
    if (this.isInfinity()) return this;
    if (this.y.toBigInteger().signum() == 0) return this.curve.getInfinity();
    var a = cc11001100_hook("a", this.curve.fromBigInteger(BigInteger.valueOf(2)), "var-init"),
      b = cc11001100_hook("b", this.curve.fromBigInteger(BigInteger.valueOf(3)), "var-init"),
      b = cc11001100_hook("b", this.x.square().multiply(b).add(this.curve.a).divide(this.y.multiply(a)), "var-init"),
      a = cc11001100_hook("a", b.square().subtract(this.x.multiply(a)), "var-init"),
      b = cc11001100_hook("b", b.multiply(this.x.subtract(a)).subtract(this.y), "var-init");
    return new ECPointFp(this.curve, a, b);
  }, "assign");
  ECPointFp.prototype.multiply2D = cc11001100_hook("ECPointFp.prototype.multiply2D", function (c) {
    if (this.isInfinity()) return this;
    if (c.signum() == 0) return this.curve.getInfinity();
    for (var d = cc11001100_hook("d", c.multiply(new BigInteger("3")), "var-init"), f = cc11001100_hook("f", this.negate(), "var-init"), a = cc11001100_hook("a", this, "var-init"), b = cc11001100_hook("b", d.bitLength() - 2, "var-init"); b > 0; --b) {
      var a = cc11001100_hook("a", a.twice(), "var-init"),
        e = cc11001100_hook("e", d.testBit(b), "var-init"),
        g = cc11001100_hook("g", c.testBit(b), "var-init");
      e != g && (a = cc11001100_hook("a", a.add2D(e ? this : f), "assign"));
    }
    return a;
  }, "assign");
  ECPointFp.prototype.isOnCurve = cc11001100_hook("ECPointFp.prototype.isOnCurve", function () {
    var a = cc11001100_hook("a", this.getX().toBigInteger(), "var-init"),
      b = cc11001100_hook("b", this.getY().toBigInteger(), "var-init"),
      d = cc11001100_hook("d", this.curve.getA().toBigInteger(), "var-init"),
      e = cc11001100_hook("e", this.curve.getB().toBigInteger(), "var-init"),
      c = cc11001100_hook("c", this.curve.getQ(), "var-init"),
      b = cc11001100_hook("b", b.multiply(b).mod(c), "var-init"),
      a = cc11001100_hook("a", a.multiply(a).multiply(a).add(d.multiply(a)).add(e).mod(c), "var-init");
    return b.equals(a);
  }, "assign");
  ECPointFp.prototype.toString = cc11001100_hook("ECPointFp.prototype.toString", function () {
    return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")";
  }, "assign");
  ECPointFp.prototype.validate = cc11001100_hook("ECPointFp.prototype.validate", function () {
    var a = cc11001100_hook("a", this.curve.getQ(), "var-init");
    if (this.isInfinity()) throw Error("Point is at infinity.");
    var b = cc11001100_hook("b", this.getX().toBigInteger(), "var-init"),
      c = cc11001100_hook("c", this.getY().toBigInteger(), "var-init");
    if (b.compareTo(BigInteger.ONE) < 0 || b.compareTo(a.subtract(BigInteger.ONE)) > 0) throw Error("x coordinate out of bounds");
    if (c.compareTo(BigInteger.ONE) < 0 || c.compareTo(a.subtract(BigInteger.ONE)) > 0) throw Error("y coordinate out of bounds");
    if (!this.isOnCurve()) throw Error("Point is not on the curve.");
    if (this.multiply(a).isInfinity()) throw Error("Point is not a scalar multiple of G.");
    return !0;
  }, "assign");
  function parseBigInt(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new BigInteger(a, b);
  }
  function linebrk(b, c) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var d = cc11001100_hook("d", "", "var-init"), a = cc11001100_hook("a", 0, "var-init"); a + c < b.length;) d += cc11001100_hook("d", b.substring(a, a + c), "assign"), a += cc11001100_hook("a", c, "assign");
    return d + b.substring(a, b.length);
  }
  function byte2Hex(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a < 16 ? "0" + a.toString(16) : a.toString(16);
  }
  function Utf8Encode(c) {
    cc11001100_hook("c", c, "function-parameter");
    for (var c = cc11001100_hook("c", c.replace(/\r\n/g, "\n"), "var-init"), b = cc11001100_hook("b", "", "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < c.length; d++) {
      var a = cc11001100_hook("a", c.charCodeAt(d), "var-init");
      a < 128 ? b += cc11001100_hook("b", String.fromCharCode(a), "assign") : (a > 127 && a < 2048 ? b += cc11001100_hook("b", String.fromCharCode(a >> 6 | 192), "assign") : (b += cc11001100_hook("b", String.fromCharCode(a >> 12 | 224), "assign"), b += cc11001100_hook("b", String.fromCharCode(a >> 6 & 63 | 128), "assign")), b += cc11001100_hook("b", String.fromCharCode(a & 63 | 128), "assign"));
    }
    return b;
  }
  function pkcs1pad2(e, b) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", [], "var-init"), d = cc11001100_hook("d", e.length - 1, "var-init"); d >= 0 && b > 0;) {
      var a = cc11001100_hook("a", e.charCodeAt(d--), "var-init");
      a < 128 ? c[--b] = cc11001100_hook("c[--b]", a, "assign") : a > 127 && a < 2048 ? (c[--b] = cc11001100_hook("c[--b]", a & 63 | 128, "assign"), c[--b] = cc11001100_hook("c[--b]", a >> 6 | 192, "assign")) : (c[--b] = cc11001100_hook("c[--b]", a & 63 | 128, "assign"), c[--b] = cc11001100_hook("c[--b]", a >> 6 & 63 | 128, "assign"), c[--b] = cc11001100_hook("c[--b]", a >> 12 | 224, "assign"));
    }
    c[--b] = cc11001100_hook("c[--b]", 0, "assign");
    d = cc11001100_hook("d", new SecureRandom(), "assign");
    for (a = cc11001100_hook("a", [], "assign"); b > 2;) {
      for (a[0] = cc11001100_hook("a[0]", 0, "assign"); a[0] == 0;) d.nextBytes(a);
      c[--b] = cc11001100_hook("c[--b]", a[0], "assign");
    }
    c[--b] = cc11001100_hook("c[--b]", 2, "assign");
    c[--b] = cc11001100_hook("c[--b]", 0, "assign");
    return new BigInteger(c);
  }
  function RSAKey() {
    this.n = cc11001100_hook("this.n", null, "assign");
    this.e = cc11001100_hook("this.e", 0, "assign");
    this.coeff = cc11001100_hook("this.coeff", this.dmq1 = cc11001100_hook("this.dmq1", this.dmp1 = cc11001100_hook("this.dmp1", this.q = cc11001100_hook("this.q", this.p = cc11001100_hook("this.p", this.d = cc11001100_hook("this.d", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
  }
  function RSASetPublic(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a != null && b != null && a.length > 0 && b.length > 0 ? (this.n = cc11001100_hook("this.n", parseBigInt(a, 16), "assign"), this.e = cc11001100_hook("this.e", parseInt(b, 16), "assign")) : alert("Invalid RSA public key");
  }
  function RSADoPublic(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.modPowInt(this.e, this.n);
  }
  function RSAEncrypt(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", pkcs1pad2(a, this.n.bitLength() + 7 >> 3), "assign");
    if (a == null) return null;
    a = cc11001100_hook("a", RSADoPublic(a), "assign");
    if (a == null) return null;
    a = cc11001100_hook("a", a.toString(16), "assign");
    return (a.length & 1) == 0 ? a : "0" + a;
  }
  function getencryptoRSA() {
    var a = cc11001100_hook("a", new RSAKey(), "var-init");
    a.generate(512, "10001");
    return a;
  }
  function encryptbyrsa(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    RSASetPublic(a, b);
    a = cc11001100_hook("a", RSAEncrypt(c), "assign");
    return linebrk(a, 64);
  }
  RSAKey.prototype.doPublic = cc11001100_hook("RSAKey.prototype.doPublic", RSADoPublic, "assign");
  RSAKey.prototype.setPublic = cc11001100_hook("RSAKey.prototype.setPublic", RSASetPublic, "assign");
  RSAKey.prototype.encrypt = cc11001100_hook("RSAKey.prototype.encrypt", RSAEncrypt, "assign");
  function pkcs1unpad2(e, f) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    for (var b = cc11001100_hook("b", e.toByteArray(), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < b.length && b[a] == 0;) ++a;
    if (b.length - a != f - 1 || b[a] != 2) return null;
    for (++a; b[a] != 0;) if (++a >= b.length) return null;
    for (var d = cc11001100_hook("d", "", "var-init"); ++a < b.length;) {
      var c = cc11001100_hook("c", b[a] & 255, "var-init");
      c < 128 ? d += cc11001100_hook("d", String.fromCharCode(c), "assign") : c > 191 && c < 224 ? (d += cc11001100_hook("d", String.fromCharCode((c & 31) << 6 | b[a + 1] & 63), "assign"), ++a) : (d += cc11001100_hook("d", String.fromCharCode((c & 15) << 12 | (b[a + 1] & 63) << 6 | b[a + 2] & 63), "assign"), a += cc11001100_hook("a", 2, "assign"));
    }
    return d;
  }
  function RSASetPrivate(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a != null && b != null && a.length > 0 && b.length > 0 ? (this.n = cc11001100_hook("this.n", parseBigInt(a, 16), "assign"), this.e = cc11001100_hook("this.e", parseInt(b, 16), "assign"), this.d = cc11001100_hook("this.d", parseBigInt(c, 16), "assign")) : alert("Invalid RSA private key");
  }
  function RSASetPrivateEx(a, b, d, c, f, e, g, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    a != null && b != null && a.length > 0 && b.length > 0 ? (this.n = cc11001100_hook("this.n", parseBigInt(a, 16), "assign"), this.e = cc11001100_hook("this.e", parseInt(b, 16), "assign"), this.d = cc11001100_hook("this.d", parseBigInt(d, 16), "assign"), this.p = cc11001100_hook("this.p", parseBigInt(c, 16), "assign"), this.q = cc11001100_hook("this.q", parseBigInt(f, 16), "assign"), this.dmp1 = cc11001100_hook("this.dmp1", parseBigInt(e, 16), "assign"), this.dmq1 = cc11001100_hook("this.dmq1", parseBigInt(g, 16), "assign"), this.coeff = cc11001100_hook("this.coeff", parseBigInt(h, 16), "assign")) : alert("Invalid RSA private key");
  }
  function RSAGenerate(c, f) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var e = cc11001100_hook("e", new SecureRandom(), "var-init"),
      d = cc11001100_hook("d", c >> 1, "var-init");
    this.e = cc11001100_hook("this.e", parseInt(f, 16), "assign");
    for (var a = cc11001100_hook("a", new BigInteger(f, 16), "var-init"); true;) {
      for (; true;) if (this.p = cc11001100_hook("this.p", new BigInteger(c - d, 1, e), "assign"), this.p.subtract(BigInteger.ONE).gcd(a).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) break;
      for (; true;) if (this.q = cc11001100_hook("this.q", new BigInteger(d, 1, e), "assign"), this.q.subtract(BigInteger.ONE).gcd(a).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) break;
      if (this.p.compareTo(this.q) <= 0) {
        var b = cc11001100_hook("b", this.p, "var-init");
        this.p = cc11001100_hook("this.p", this.q, "assign");
        this.q = cc11001100_hook("this.q", b, "assign");
      }
      var b = cc11001100_hook("b", this.p.subtract(BigInteger.ONE), "var-init"),
        g = cc11001100_hook("g", this.q.subtract(BigInteger.ONE), "var-init"),
        h = cc11001100_hook("h", b.multiply(g), "var-init");
      if (h.gcd(a).compareTo(BigInteger.ONE) == 0) {
        this.n = cc11001100_hook("this.n", this.p.multiply(this.q), "assign");
        this.d = cc11001100_hook("this.d", a.modInverse(h), "assign");
        this.dmp1 = cc11001100_hook("this.dmp1", this.d.mod(b), "assign");
        this.dmq1 = cc11001100_hook("this.dmq1", this.d.mod(g), "assign");
        this.coeff = cc11001100_hook("this.coeff", this.q.modInverse(this.p), "assign");
        break;
      }
    }
  }
  function RSADoPrivate(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (this.p == null || this.q == null) return a.modPow(this.d, this.n);
    for (var b = cc11001100_hook("b", a.mod(this.p).modPow(this.dmp1, this.p), "var-init"), a = cc11001100_hook("a", a.mod(this.q).modPow(this.dmq1, this.q), "var-init"); b.compareTo(a) < 0;) b = cc11001100_hook("b", b.add(this.p), "assign");
    return b.subtract(a).multiply(this.coeff).mod(this.p).multiply(this.q).add(a);
  }
  function RSADecrypt(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", parseBigInt(a, 16), "assign");
    a = cc11001100_hook("a", RSADoPrivate(a), "assign");
    return a == null ? null : pkcs1unpad2(a, this.n.bitLength() + 7 >> 3);
  }
  function decryptbyrsa(a, d, c, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    RSASetPrivate(a, d, c);
    return RSADecrypt(b);
  }
  RSAKey.prototype.doPrivate = cc11001100_hook("RSAKey.prototype.doPrivate", RSADoPrivate, "assign");
  RSAKey.prototype.setPrivate = cc11001100_hook("RSAKey.prototype.setPrivate", RSASetPrivate, "assign");
  RSAKey.prototype.setPrivateEx = cc11001100_hook("RSAKey.prototype.setPrivateEx", RSASetPrivateEx, "assign");
  RSAKey.prototype.generate = cc11001100_hook("RSAKey.prototype.generate", RSAGenerate, "assign");
  RSAKey.prototype.decrypt = cc11001100_hook("RSAKey.prototype.decrypt", RSADecrypt, "assign");
  var SM3Digest = function () {
    this.BYTE_LENGTH = cc11001100_hook("this.BYTE_LENGTH", 64, "assign");
    this.xBuf = cc11001100_hook("this.xBuf", [], "assign");
    this.byteCount = cc11001100_hook("this.byteCount", this.xBufOff = cc11001100_hook("this.xBufOff", 0, "assign"), "assign");
    this.DIGEST_LENGTH = cc11001100_hook("this.DIGEST_LENGTH", 32, "assign");
    this.v0 = cc11001100_hook("this.v0", [1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214], "assign");
    this.v0 = cc11001100_hook("this.v0", [1937774191, 1226093241, 388252375, -628488704, -1452330820, 372324522, -477237683, -1325724082], "assign");
    this.v = cc11001100_hook("this.v", Array(8), "assign");
    this.v_ = cc11001100_hook("this.v_", Array(8), "assign");
    this.X0 = cc11001100_hook("this.X0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "assign");
    this.X = cc11001100_hook("this.X", Array(68), "assign");
    this.xOff = cc11001100_hook("this.xOff", 0, "assign");
    this.T_00_15 = cc11001100_hook("this.T_00_15", 2043430169, "assign");
    this.T_16_63 = cc11001100_hook("this.T_16_63", 2055708042, "assign");
    arguments.length > 0 ? this.InitDigest(arguments[0]) : this.Init();
  };
  SM3Digest.prototype = cc11001100_hook("SM3Digest.prototype", {
    Init: function () {
      this.xBuf = cc11001100_hook("this.xBuf", Array(4), "assign");
      this.Reset();
    },
    InitDigest: function (a) {
      this.xBuf = cc11001100_hook("this.xBuf", Array(a.xBuf.length), "assign");
      Array.Copy(a.xBuf, 0, this.xBuf, 0, a.xBuf.length);
      this.xBufOff = cc11001100_hook("this.xBufOff", a.xBufOff, "assign");
      this.byteCount = cc11001100_hook("this.byteCount", a.byteCount, "assign");
      Array.Copy(a.X, 0, this.X, 0, a.X.length);
      this.xOff = cc11001100_hook("this.xOff", a.xOff, "assign");
      Array.Copy(a.v, 0, this.v, 0, a.v.length);
    },
    GetDigestSize: function () {
      return this.DIGEST_LENGTH;
    },
    Reset: function () {
      this.xBufOff = cc11001100_hook("this.xBufOff", this.byteCount = cc11001100_hook("this.byteCount", 0, "assign"), "assign");
      Array.Clear(this.xBuf, 0, this.xBuf.length);
      Array.Copy(this.v0, 0, this.v, 0, this.v0.length);
      this.xOff = cc11001100_hook("this.xOff", 0, "assign");
      Array.Copy(this.X0, 0, this.X, 0, this.X0.length);
    },
    GetByteLength: function () {
      return this.BYTE_LENGTH;
    },
    ProcessBlock: function () {
      for (var e = cc11001100_hook("e", this.X, "var-init"), f = cc11001100_hook("f", Array(64), "var-init"), b = cc11001100_hook("b", 16, "var-init"); b < 68; b++) e[b] = cc11001100_hook("e[b]", this.P1(e[b - 16] ^ e[b - 9] ^ this.ROTATE(e[b - 3], 15)) ^ this.ROTATE(e[b - 13], 7) ^ e[b - 6], "assign");
      for (b = cc11001100_hook("b", 0, "assign"); b < 64; b++) f[b] = cc11001100_hook("f[b]", e[b] ^ e[b + 4], "assign");
      var g = cc11001100_hook("g", this.v, "var-init"),
        a = cc11001100_hook("a", this.v_, "var-init");
      Array.Copy(g, 0, a, 0, this.v0.length);
      var c, d;
      for (b = cc11001100_hook("b", 0, "assign"); b < 16; b++) d = cc11001100_hook("d", this.ROTATE(a[0], 12), "assign"), c = cc11001100_hook("c", Int32.parse(Int32.parse(d + a[4]) + this.ROTATE(this.T_00_15, b)), "assign"), c = cc11001100_hook("c", this.ROTATE(c, 7), "assign"), d ^= cc11001100_hook("d", c, "assign"), d = cc11001100_hook("d", Int32.parse(Int32.parse(this.FF_00_15(a[0], a[1], a[2]) + a[3]) + d) + f[b], "assign"), c = cc11001100_hook("c", Int32.parse(Int32.parse(this.GG_00_15(a[4], a[5], a[6]) + a[7]) + c) + e[b], "assign"), a[3] = cc11001100_hook("a[3]", a[2], "assign"), a[2] = cc11001100_hook("a[2]", this.ROTATE(a[1], 9), "assign"), a[1] = cc11001100_hook("a[1]", a[0], "assign"), a[0] = cc11001100_hook("a[0]", d, "assign"), a[7] = cc11001100_hook("a[7]", a[6], "assign"), a[6] = cc11001100_hook("a[6]", this.ROTATE(a[5], 19), "assign"), a[5] = cc11001100_hook("a[5]", a[4], "assign"), a[4] = cc11001100_hook("a[4]", this.P0(c), "assign");
      for (b = cc11001100_hook("b", 16, "assign"); b < 64; b++) d = cc11001100_hook("d", this.ROTATE(a[0], 12), "assign"), c = cc11001100_hook("c", Int32.parse(Int32.parse(d + a[4]) + this.ROTATE(this.T_16_63, b)), "assign"), c = cc11001100_hook("c", this.ROTATE(c, 7), "assign"), d ^= cc11001100_hook("d", c, "assign"), d = cc11001100_hook("d", Int32.parse(Int32.parse(this.FF_16_63(a[0], a[1], a[2]) + a[3]) + d) + f[b], "assign"), c = cc11001100_hook("c", Int32.parse(Int32.parse(this.GG_16_63(a[4], a[5], a[6]) + a[7]) + c) + e[b], "assign"), a[3] = cc11001100_hook("a[3]", a[2], "assign"), a[2] = cc11001100_hook("a[2]", this.ROTATE(a[1], 9), "assign"), a[1] = cc11001100_hook("a[1]", a[0], "assign"), a[0] = cc11001100_hook("a[0]", d, "assign"), a[7] = cc11001100_hook("a[7]", a[6], "assign"), a[6] = cc11001100_hook("a[6]", this.ROTATE(a[5], 19), "assign"), a[5] = cc11001100_hook("a[5]", a[4], "assign"), a[4] = cc11001100_hook("a[4]", this.P0(c), "assign");
      for (b = cc11001100_hook("b", 0, "assign"); b < 8; b++) g[b] ^= cc11001100_hook("g[b]", Int32.parse(a[b]), "assign");
      this.xOff = cc11001100_hook("this.xOff", 0, "assign");
      Array.Copy(this.X0, 0, this.X, 0, this.X0.length);
    },
    ProcessWord: function (a, c) {
      var b = cc11001100_hook("b", a[c] << 24, "var-init");
      b |= cc11001100_hook("b", (a[++c] & 255) << 16, "assign");
      b |= cc11001100_hook("b", (a[++c] & 255) << 8, "assign");
      b |= cc11001100_hook("b", a[++c] & 255, "assign");
      this.X[this.xOff] = cc11001100_hook("this.X[this.xOff]", b, "assign");
      ++this.xOff == 16 && this.ProcessBlock();
    },
    ProcessLength: function (a) {
      this.xOff > 14 && this.ProcessBlock();
      this.X[14] = cc11001100_hook("this.X[14]", this.URShiftLong(a, 32), "assign");
      this.X[15] = cc11001100_hook("this.X[15]", a & 4294967295, "assign");
    },
    IntToBigEndian: function (a, c, b) {
      c[b] = cc11001100_hook("c[b]", Int32.parseByte(this.URShift(a, 24)), "assign");
      c[++b] = cc11001100_hook("c[++b]", Int32.parseByte(this.URShift(a, 16)), "assign");
      c[++b] = cc11001100_hook("c[++b]", Int32.parseByte(this.URShift(a, 8)), "assign");
      c[++b] = cc11001100_hook("c[++b]", Int32.parseByte(a), "assign");
    },
    DoFinal: function (b, c) {
      this.Finish();
      for (var a = cc11001100_hook("a", 0, "var-init"); a < 8; a++) this.IntToBigEndian(this.v[a], b, c + a * 4);
      this.Reset();
      return this.DIGEST_LENGTH;
    },
    Update: function (a) {
      this.xBuf[this.xBufOff++] = cc11001100_hook("this.xBuf[this.xBufOff++]", a, "assign");
      if (this.xBufOff == this.xBuf.length) this.ProcessWord(this.xBuf, 0), this.xBufOff = cc11001100_hook("this.xBufOff", 0, "assign");
      this.byteCount++;
    },
    BlockUpdate: function (c, b, a) {
      for (; this.xBufOff != 0 && a > 0;) this.Update(c[b]), b++, a--;
      for (; a > this.xBuf.length;) this.ProcessWord(c, b), b += cc11001100_hook("b", this.xBuf.length, "assign"), a -= cc11001100_hook("a", this.xBuf.length, "assign"), this.byteCount += cc11001100_hook("this.byteCount", this.xBuf.length, "assign");
      for (; a > 0;) this.Update(c[b]), b++, a--;
    },
    Finish: function () {
      var a = cc11001100_hook("a", this.byteCount << 3, "var-init");
      for (this.Update(128); this.xBufOff != 0;) this.Update(0);
      this.ProcessLength(a);
      this.ProcessBlock();
    },
    ROTATE: function (a, b) {
      return a << b | this.URShift(a, 32 - b);
    },
    P0: function (a) {
      return a ^ this.ROTATE(a, 9) ^ this.ROTATE(a, 17);
    },
    P1: function (a) {
      return a ^ this.ROTATE(a, 15) ^ this.ROTATE(a, 23);
    },
    FF_00_15: function (a, c, b) {
      return a ^ c ^ b;
    },
    FF_16_63: function (a, c, b) {
      return a & c | a & b | c & b;
    },
    GG_00_15: function (a, c, b) {
      return a ^ c ^ b;
    },
    GG_16_63: function (a, c, b) {
      return a & c | ~a & b;
    },
    URShift: function (a, b) {
      if (a > Int32.maxValue || a < Int32.minValue) a = cc11001100_hook("a", Int32.parse(a), "assign");
      return a >= 0 ? a >> b : (a >> b) + (2 << ~b);
    },
    URShiftLong: function (e, c) {
      var a;
      a = cc11001100_hook("a", new BigInteger(), "assign");
      a.fromInt(e);
      if (a.signum() >= 0) a = cc11001100_hook("a", a.shiftRight(c).intValue(), "assign");else {
        var b = cc11001100_hook("b", new BigInteger(), "var-init");
        b.fromInt(2);
        var d = cc11001100_hook("d", ~c, "var-init");
        a = cc11001100_hook("a", "", "assign");
        if (d < 0) {
          b = cc11001100_hook("b", 64 + d, "assign");
          for (d = cc11001100_hook("d", 0, "assign"); d < b; d++) a += cc11001100_hook("a", "0", "assign");
          b = cc11001100_hook("b", new BigInteger(), "assign");
          b.fromInt(e >> c);
          a = cc11001100_hook("a", new BigInteger("10" + a, 2), "assign");
          a.toRadix(10);
          a = cc11001100_hook("a", a.add(b).toRadix(10), "assign");
        } else a = cc11001100_hook("a", b.shiftLeft(~c).intValue(), "assign"), a = cc11001100_hook("a", (e >> c) + a, "assign");
      }
      return a;
    },
    GetZ: function (b, d) {
      var a = cc11001100_hook("a", CryptoJS.enc.Utf8.parse("1234567812345678"), "var-init"),
        c = cc11001100_hook("c", a.words.length * 32, "var-init");
      this.Update(c >> 8 & 255);
      this.Update(c & 255);
      a = cc11001100_hook("a", this.GetWords(a.toString()), "assign");
      this.BlockUpdate(a, 0, a.length);
      var a = cc11001100_hook("a", this.GetWords(b.curve.a.toBigInteger().toRadix(16)), "var-init"),
        c = cc11001100_hook("c", this.GetWords(b.curve.b.toBigInteger().toRadix(16)), "var-init"),
        e = cc11001100_hook("e", this.GetWords(b.getX().toBigInteger().toRadix(16)), "var-init"),
        f = cc11001100_hook("f", this.GetWords(b.getY().toBigInteger().toRadix(16)), "var-init"),
        g = cc11001100_hook("g", this.GetWords(d.substr(0, 64)), "var-init"),
        h = cc11001100_hook("h", this.GetWords(d.substr(64, 64)), "var-init");
      this.BlockUpdate(a, 0, a.length);
      this.BlockUpdate(c, 0, c.length);
      this.BlockUpdate(e, 0, e.length);
      this.BlockUpdate(f, 0, f.length);
      this.BlockUpdate(g, 0, g.length);
      this.BlockUpdate(h, 0, h.length);
      a = cc11001100_hook("a", Array(this.GetDigestSize()), "assign");
      this.DoFinal(a, 0);
      return a;
    },
    GetWords: function (c) {
      for (var a = cc11001100_hook("a", [], "var-init"), d = cc11001100_hook("d", c.length, "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < d; b += cc11001100_hook("b", 2, "assign")) a[a.length] = cc11001100_hook("a[a.length]", parseInt(c.substr(b, 2), 16), "assign");
      return a;
    },
    GetHex: function (b) {
      for (var d = cc11001100_hook("d", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < b.length * 2; a += cc11001100_hook("a", 2, "assign")) d[a >>> 3] |= cc11001100_hook("d[a >>> 3]", parseInt(b[c]) << 24 - a % 8 * 4, "assign"), c++;
      return new WordArray(d, b.length);
    },
    encrypt: function (a) {
      var b = cc11001100_hook("b", new charSet(), "var-init"),
        a = cc11001100_hook("a", this.GetWords(b.HexStringify(b.parseUTF8(a))), "var-init"),
        c = cc11001100_hook("c", Array(32), "var-init");
      this.BlockUpdate(a, 0, a.length);
      this.DoFinal(c, 0);
      return b.HexStringify(this.GetHex(c));
    }
  }, "assign");
  Array.Clear = cc11001100_hook("Array.Clear", function (a) {
    for (elm in a) a[elm] = cc11001100_hook("a[elm]", null, "assign");
  }, "assign");
  Array.Copy = cc11001100_hook("Array.Copy", function (b, a, d, c, e) {
    b = cc11001100_hook("b", b.slice(a, a + e), "assign");
    for (a = cc11001100_hook("a", 0, "assign"); a < b.length; a++) d[c] = cc11001100_hook("d[c]", b[a], "assign"), c++;
  }, "assign");
  window.Int32 = cc11001100_hook("window.Int32", {
    minValue: cc11001100_hook("minValue", -parseInt("10000000000000000000000000000000", 2), "object-key-init"),
    maxValue: cc11001100_hook("maxValue", parseInt("1111111111111111111111111111111", 2), "object-key-init"),
    parse: function (a) {
      if (a < this.minValue) {
        for (var a = cc11001100_hook("a", new Number(-a), "var-init"), a = cc11001100_hook("a", a.toString(2), "var-init"), a = cc11001100_hook("a", a.substr(a.length - 31, 31), "var-init"), c = cc11001100_hook("c", "", "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) {
          var d = cc11001100_hook("d", a.substr(b, 1), "var-init");
          c += cc11001100_hook("c", d == "0" ? "1" : "0", "assign");
        }
        a = cc11001100_hook("a", parseInt(c, 2), "assign");
        return a + 1;
      } else if (a > this.maxValue) {
        a = cc11001100_hook("a", Number(a).toString(2), "assign");
        a = cc11001100_hook("a", a.substr(a.length - 31, 31), "assign");
        c = cc11001100_hook("c", "", "assign");
        for (b = cc11001100_hook("b", 0, "assign"); b < a.length; b++) d = cc11001100_hook("d", a.substr(b, 1), "assign"), c += cc11001100_hook("c", d == "0" ? "1" : "0", "assign");
        a = cc11001100_hook("a", parseInt(c, 2), "assign");
        return -(a + 1);
      } else return a;
    },
    parseByte: function (a) {
      if (a < 0) {
        for (var a = cc11001100_hook("a", new Number(-a), "var-init"), a = cc11001100_hook("a", a.toString(2), "var-init"), a = cc11001100_hook("a", a.substr(a.length - 8, 8), "var-init"), c = cc11001100_hook("c", "", "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) {
          var d = cc11001100_hook("d", a.substr(b, 1), "var-init");
          c += cc11001100_hook("c", d == "0" ? "1" : "0", "assign");
        }
        return parseInt(c, 2) + 1;
      } else return a > 255 ? (a = cc11001100_hook("a", Number(a).toString(2), "assign"), parseInt(a.substr(a.length - 8, 8), 2)) : a;
    }
  }, "assign");
  if (typeof KJUR == "undefined" || !KJUR) KJUR = cc11001100_hook("KJUR", {}, "assign");
  if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) KJUR.crypto = cc11001100_hook("KJUR.crypto", {}, "assign");
  KJUR.crypto.SM3withSM2 = cc11001100_hook("KJUR.crypto.SM3withSM2", function (a) {
    var b = cc11001100_hook("b", new SecureRandom(), "var-init");
    this.type = cc11001100_hook("this.type", "SM2", "assign");
    this.getBigRandom = cc11001100_hook("this.getBigRandom", function (a) {
      return new BigInteger(a.bitLength(), b).mod(a.subtract(BigInteger.ONE)).add(BigInteger.ONE);
    }, "assign");
    this.setNamedCurve = cc11001100_hook("this.setNamedCurve", function (a) {
      this.ecparams = cc11001100_hook("this.ecparams", KJUR.crypto.ECParameterDB.getByName(a), "assign");
      this.pubKeyHex = cc11001100_hook("this.pubKeyHex", this.prvKeyHex = cc11001100_hook("this.prvKeyHex", null, "assign"), "assign");
      this.curveName = cc11001100_hook("this.curveName", a, "assign");
    }, "assign");
    this.setPrivateKeyHex = cc11001100_hook("this.setPrivateKeyHex", function (a) {
      this.isPrivate = cc11001100_hook("this.isPrivate", !0, "assign");
      this.prvKeyHex = cc11001100_hook("this.prvKeyHex", a, "assign");
    }, "assign");
    this.setPublicKeyHex = cc11001100_hook("this.setPublicKeyHex", function (a) {
      this.isPublic = cc11001100_hook("this.isPublic", !0, "assign");
      this.pubKeyHex = cc11001100_hook("this.pubKeyHex", a, "assign");
    }, "assign");
    this.generateKeyPairHex = cc11001100_hook("this.generateKeyPairHex", function () {
      var a = cc11001100_hook("a", this.getBigRandom(this.ecparams.n), "var-init"),
        b = cc11001100_hook("b", this.ecparams.G.multiply(a), "var-init"),
        c = cc11001100_hook("c", b.getX().toBigInteger(), "var-init"),
        b = cc11001100_hook("b", b.getY().toBigInteger(), "var-init"),
        d = cc11001100_hook("d", this.ecparams.keylen / 4, "var-init"),
        a = cc11001100_hook("a", ("0000000000" + a.toString(16)).slice(-d), "var-init"),
        c = cc11001100_hook("c", ("0000000000" + c.toString(16)).slice(-d), "var-init"),
        b = cc11001100_hook("b", ("0000000000" + b.toString(16)).slice(-d), "var-init"),
        c = cc11001100_hook("c", "04" + c + b, "var-init");
      this.setPrivateKeyHex(a);
      this.setPublicKeyHex(c);
      return {
        ecprvhex: cc11001100_hook("ecprvhex", a, "object-key-init"),
        ecpubhex: cc11001100_hook("ecpubhex", c, "object-key-init")
      };
    }, "assign");
    this.signWithMessageHash = cc11001100_hook("this.signWithMessageHash", function (a) {
      return this.signHex(a, this.prvKeyHex);
    }, "assign");
    this.signHex = cc11001100_hook("this.signHex", function (g, h) {
      var e = cc11001100_hook("e", new BigInteger(h, 16), "var-init"),
        b = cc11001100_hook("b", this.ecparams.n, "var-init"),
        i = cc11001100_hook("i", new BigInteger(g, 16), "var-init"),
        d = cc11001100_hook("d", null, "var-init"),
        a = cc11001100_hook("a", null, "var-init"),
        c = cc11001100_hook("c", a = cc11001100_hook("a", null, "assign"), "var-init");
      do {
        do a = cc11001100_hook("a", this.generateKeyPairHex(), "assign"), d = cc11001100_hook("d", new BigInteger(a.ecprvhex, 16), "assign"), a = cc11001100_hook("a", ECPointFp.decodeFromHex(this.ecparams.curve, a.ecpubhex), "assign"), a = cc11001100_hook("a", i.add(a.getX().toBigInteger()), "assign"), a = cc11001100_hook("a", a.mod(b), "assign"); while (a.equals(BigInteger.ZERO) || a.add(d).equals(b));
        var f = cc11001100_hook("f", e.add(BigInteger.ONE), "var-init"),
          f = cc11001100_hook("f", f.modInverse(b), "var-init"),
          c = cc11001100_hook("c", a.multiply(e), "var-init"),
          c = cc11001100_hook("c", d.subtract(c).mod(b), "var-init"),
          c = cc11001100_hook("c", f.multiply(c).mod(b), "var-init");
      } while (c.equals(BigInteger.ZERO));
      return KJUR.crypto.ECDSA.biRSSigToASN1Sig(a, c);
    }, "assign");
    this.sign = cc11001100_hook("this.sign", function (d, e) {
      var a = cc11001100_hook("a", this.ecparams.n, "var-init"),
        f = cc11001100_hook("f", BigInteger.fromByteArrayUnsigned(d), "var-init");
      do var c = cc11001100_hook("c", this.getBigRandom(a), "var-init"),
        b = cc11001100_hook("b", this.ecparams.G.multiply(c).getX().toBigInteger().mod(a), "var-init"); while (b.compareTo(BigInteger.ZERO) <= 0);
      a = cc11001100_hook("a", c.modInverse(a).multiply(f.add(e.multiply(b))).mod(a), "assign");
      return this.serializeSig(b, a);
    }, "assign");
    this.verifyWithMessageHash = cc11001100_hook("this.verifyWithMessageHash", function (a, b) {
      return this.verifyHex(a, b, this.pubKeyHex);
    }, "assign");
    this.verifyHex = cc11001100_hook("this.verifyHex", function (d, b, c) {
      var a;
      a = cc11001100_hook("a", KJUR.crypto.ECDSA.parseSigHex(b), "assign");
      b = cc11001100_hook("b", a.r, "assign");
      a = cc11001100_hook("a", a.s, "assign");
      c = cc11001100_hook("c", ECPointFp.decodeFromHex(this.ecparams.curve, c), "assign");
      return this.verifyRaw(new BigInteger(d, 16), b, a, c);
    }, "assign");
    this.verify = cc11001100_hook("this.verify", function (d, a, b) {
      var c;
      if (Bitcoin.Util.isArray(a)) a = cc11001100_hook("a", this.parseSig(a), "assign"), c = cc11001100_hook("c", a.r, "assign"), a = cc11001100_hook("a", a.s, "assign");else if ("object" === typeof a && a.r && a.s) c = cc11001100_hook("c", a.r, "assign"), a = cc11001100_hook("a", a.s, "assign");else throw "Invalid value for signature";
      if (!(b instanceof ECPointFp)) if (Bitcoin.Util.isArray(b)) b = cc11001100_hook("b", ECPointFp.decodeFrom(this.ecparams.curve, b), "assign");else throw "Invalid format for pubkey value, must be byte array or ECPointFp";
      return this.verifyRaw(BigInteger.fromByteArrayUnsigned(d), c, a, b);
    }, "assign");
    this.verifyRaw = cc11001100_hook("this.verifyRaw", function (b, c, a, f) {
      var d = cc11001100_hook("d", this.ecparams.n, "var-init"),
        g = cc11001100_hook("g", this.ecparams.G, "var-init"),
        e = cc11001100_hook("e", c.add(a).mod(d), "var-init");
      if (e.equals(BigInteger.ZERO)) return !1;
      a = cc11001100_hook("a", g.multiply(a), "assign");
      a = cc11001100_hook("a", a.add(f.multiply(e)), "assign");
      b = cc11001100_hook("b", b.add(a.getX().toBigInteger()).mod(d), "assign");
      return c.equals(b);
    }, "assign");
    this.serializeSig = cc11001100_hook("this.serializeSig", function (d, e) {
      var b = cc11001100_hook("b", d.toByteArraySigned(), "var-init"),
        c = cc11001100_hook("c", e.toByteArraySigned(), "var-init"),
        a = cc11001100_hook("a", [], "var-init");
      a.push(2);
      a.push(b.length);
      a = cc11001100_hook("a", a.concat(b), "assign");
      a.push(2);
      a.push(c.length);
      a = cc11001100_hook("a", a.concat(c), "assign");
      a.unshift(a.length);
      a.unshift(48);
      return a;
    }, "assign");
    this.parseSig = cc11001100_hook("this.parseSig", function (a) {
      var b;
      if (a[0] != 48) throw Error("Signature not a valid DERSequence");
      b = cc11001100_hook("b", 2, "assign");
      if (a[b] != 2) throw Error("First element in signature must be a DERInteger");
      var c = cc11001100_hook("c", a.slice(b + 2, b + 2 + a[b + 1]), "var-init");
      b += cc11001100_hook("b", 2 + a[b + 1], "assign");
      if (a[b] != 2) throw Error("Second element in signature must be a DERInteger");
      a = cc11001100_hook("a", a.slice(b + 2, b + 2 + a[b + 1]), "assign");
      c = cc11001100_hook("c", BigInteger.fromByteArrayUnsigned(c), "assign");
      a = cc11001100_hook("a", BigInteger.fromByteArrayUnsigned(a), "assign");
      return {
        r: cc11001100_hook("r", c, "object-key-init"),
        s: cc11001100_hook("s", a, "object-key-init")
      };
    }, "assign");
    this.parseSigCompact = cc11001100_hook("this.parseSigCompact", function (a) {
      if (a.length !== 65) throw "Signature has the wrong length";
      var b = cc11001100_hook("b", a[0] - 27, "var-init");
      if (b < 0 || b > 7) throw "Invalid signature type";
      var c = cc11001100_hook("c", this.ecparams.n, "var-init"),
        d = cc11001100_hook("d", BigInteger.fromByteArrayUnsigned(a.slice(1, 33)).mod(c), "var-init"),
        a = cc11001100_hook("a", BigInteger.fromByteArrayUnsigned(a.slice(33, 65)).mod(c), "var-init");
      return {
        r: cc11001100_hook("r", d, "object-key-init"),
        s: cc11001100_hook("s", a, "object-key-init"),
        i: cc11001100_hook("i", b, "object-key-init")
      };
    }, "assign");
    if (a !== void 0 && a.curve !== void 0) this.curveName = cc11001100_hook("this.curveName", a.curve, "assign");
    if (this.curveName === void 0) this.curveName = cc11001100_hook("this.curveName", "sm2", "assign");
    this.setNamedCurve(this.curveName);
    a !== void 0 && (a.prv !== void 0 && this.setPrivateKeyHex(a.prv), a.pub !== void 0 && this.setPublicKeyHex(a.pub));
  }, "assign");
  if (typeof KJUR == "undefined" || !KJUR) KJUR = cc11001100_hook("KJUR", {}, "assign");
  if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) KJUR.crypto = cc11001100_hook("KJUR.crypto", {}, "assign");
  KJUR.crypto.ECParameterDB = cc11001100_hook("KJUR.crypto.ECParameterDB", new function () {
    var a = cc11001100_hook("a", {}, "var-init"),
      b = cc11001100_hook("b", {}, "var-init");
    this.getByName = cc11001100_hook("this.getByName", function (d) {
      var c = cc11001100_hook("c", d, "var-init");
      typeof b[c] != "undefined" && (c = cc11001100_hook("c", b[d], "assign"));
      if (typeof a[c] != "undefined") return a[c];
      throw "unregistered EC curve name: " + c;
    }, "assign");
    this.regist = cc11001100_hook("this.regist", function (c, e, d, f, g, h, i, j, l, k, m, n) {
      a[c] = cc11001100_hook("a[c]", {}, "assign");
      d = cc11001100_hook("d", new BigInteger(d, 16), "assign");
      f = cc11001100_hook("f", new BigInteger(f, 16), "assign");
      g = cc11001100_hook("g", new BigInteger(g, 16), "assign");
      h = cc11001100_hook("h", new BigInteger(h, 16), "assign");
      i = cc11001100_hook("i", new BigInteger(i, 16), "assign");
      d = cc11001100_hook("d", new ECCurveFp(d, f, g), "assign");
      j = cc11001100_hook("j", d.decodePointHex("04" + j + l), "assign");
      a[c].name = cc11001100_hook("a[c].name", c, "assign");
      a[c].keylen = cc11001100_hook("a[c].keylen", e, "assign");
      a[c].curve = cc11001100_hook("a[c].curve", d, "assign");
      a[c].G = cc11001100_hook("a[c].G", j, "assign");
      a[c].n = cc11001100_hook("a[c].n", h, "assign");
      a[c].h = cc11001100_hook("a[c].h", i, "assign");
      a[c].oid = cc11001100_hook("a[c].oid", m, "assign");
      a[c].info = cc11001100_hook("a[c].info", n, "assign");
      for (e = cc11001100_hook("e", 0, "assign"); e < k.length; e++) b[k[e]] = cc11001100_hook("b[k[e]]", c, "assign");
    }, "assign");
  }(), "assign");
  KJUR.crypto.ECParameterDB.regist("sm2", 256, "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF", "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC", "28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93", "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", "1", "32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7", "BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0", ["sm2", "SM2"]);
  var SboxTable = cc11001100_hook("SboxTable", [[214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5], [43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153], [156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98], [228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166], [71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168], [104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53], [30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135], [212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158], [234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161], [224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227], [29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111], [213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81], [141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216], [10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176], [137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132], [24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72]], "var-init"),
    CK = cc11001100_hook("CK", [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257], "var-init"),
    FK = cc11001100_hook("FK", [2746333894, 1453994832, 1736282519, 2993693404], "var-init");
  function bigxor(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a ^ b;
  }
  function leftshift(b, a) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    a %= cc11001100_hook("a", 32, "assign");
    return b << a | b >>> 32 - a;
  }
  function prefixInteger(b, a) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    return Array(a + 1).join("0").split("").concat(String(b).split("")).slice(-a).join("");
  }
  function sm4Sbox(a) {
    cc11001100_hook("a", a, "function-parameter");
    return SboxTable[(a & 4026531840) >>> 28][(a & 251658240) >>> 24] << 24 | SboxTable[(a & 15728640) >>> 20][(a & 983040) >>> 16] << 16 | SboxTable[(a & 61440) >>> 12][(a & 3840) >>> 8] << 8 | SboxTable[(a & 240) >>> 4][(a & 15) >>> 0] << 0;
  }
  function GET_ULONG_BE(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", sm4Sbox(a), "assign");
    return bigxor(bigxor(bigxor(a, leftshift(a, 2)), bigxor(leftshift(a, 10), leftshift(a, 18))), leftshift(a, 24));
  }
  function PUT_ULONG_BE(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", sm4Sbox(a), "assign");
    return bigxor(a, bigxor(leftshift(a, 13), leftshift(a, 23)));
  }
  function sm4_getkey(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [], "var-init"),
      c = cc11001100_hook("c", [], "var-init");
    b[0] = cc11001100_hook("b[0]", bigxor(a[0], FK[0]), "assign");
    b[1] = cc11001100_hook("b[1]", bigxor(a[1], FK[1]), "assign");
    b[2] = cc11001100_hook("b[2]", bigxor(a[2], FK[2]), "assign");
    b[3] = cc11001100_hook("b[3]", bigxor(a[3], FK[3]), "assign");
    for (a = cc11001100_hook("a", 0, "assign"); a < 32; a++) b[a + 4] = cc11001100_hook("b[a + 4]", bigxor(b[a], PUT_ULONG_BE(bigxor(bigxor(b[a + 1], b[a + 2]), bigxor(b[a + 3], CK[a])))), "assign"), c[a] = cc11001100_hook("c[a]", b[a + 4].toString(16), "assign");
    return c;
  }
  function KJUR_encrypt_sm4(e, f) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    for (var g = cc11001100_hook("g", Math.ceil(e.length / 4), "var-init"), d = cc11001100_hook("d", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < g; c++) {
      for (var a = cc11001100_hook("a", e.slice(c * 4, (c + 1) * 4), "var-init"), h = cc11001100_hook("h", sm4_getkey(f), "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < 32; b++) a[b + 4] = cc11001100_hook("a[b + 4]", bigxor(a[b], GET_ULONG_BE(bigxor(bigxor(a[b + 1], a[b + 2]), bigxor(a[b + 3], parseInt(h[b], 16))))), "assign");
      d = cc11001100_hook("d", d.concat([a[35].toString(10), a[34].toString(10), a[33].toString(10), a[32].toString(10)]), "assign");
    }
    return new WordArray(d);
  }
  function KJUR_decrypt_sm4(f, h) {
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    for (var i = cc11001100_hook("i", Math.ceil(f.length / 4), "var-init"), d = cc11001100_hook("d", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < i; c++) {
      for (var b = cc11001100_hook("b", f.slice(c * 4, (c + 1) * 4), "var-init"), e = cc11001100_hook("e", sm4_getkey(h), "var-init"), g = cc11001100_hook("g", [], "var-init"), a = cc11001100_hook("a", e.length - 1, "var-init"); a >= 0; a--) g[e.length - 1 - a] = cc11001100_hook("g[e.length - 1 - a]", e[a], "assign");
      for (a = cc11001100_hook("a", 0, "assign"); a < 32; a++) b[a + 4] = cc11001100_hook("b[a + 4]", bigxor(b[a], GET_ULONG_BE(bigxor(bigxor(b[a + 1], b[a + 2]), bigxor(b[a + 3], parseInt(g[a], 16))))), "assign");
      d = cc11001100_hook("d", d.concat([b[35].toString(10), b[34].toString(10), b[33].toString(10), b[32].toString(10)]), "assign");
    }
    return new WordArray(d);
  }
  function SM2Cipher() {
    this.ct = cc11001100_hook("this.ct", 1, "assign");
    this.sm3c3 = cc11001100_hook("this.sm3c3", this.sm3keybase = cc11001100_hook("this.sm3keybase", this.p2 = cc11001100_hook("this.p2", null, "assign"), "assign"), "assign");
    this.key = cc11001100_hook("this.key", Array(32), "assign");
    this.keyOff = cc11001100_hook("this.keyOff", 0, "assign");
  }
  SM2Cipher.prototype = cc11001100_hook("SM2Cipher.prototype", {
    Reset: function () {
      this.sm3keybase = cc11001100_hook("this.sm3keybase", new SM3Digest(), "assign");
      this.sm3c3 = cc11001100_hook("this.sm3c3", new SM3Digest(), "assign");
      var a = cc11001100_hook("a", this.p2.getX().toBigInteger().toRadix(16), "var-init"),
        b = cc11001100_hook("b", this.p2.getY().toBigInteger().toRadix(16), "var-init");
      if (a.length != 64) for (var d = cc11001100_hook("d", 64 - a.length, "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < d; c++) a = cc11001100_hook("a", "0" + a, "assign");
      if (b.length != 64 && b.length != 64) {
        d = cc11001100_hook("d", 64 - b.length, "assign");
        for (c = cc11001100_hook("c", 0, "assign"); c < d; c++) b = cc11001100_hook("b", "0" + b, "assign");
      }
      a = cc11001100_hook("a", this.GetWords(a), "assign");
      b = cc11001100_hook("b", this.GetWords(b), "assign");
      if (a.length != 32) for (c = cc11001100_hook("c", 0, "assign"); c < 32 - a.length; c++) d = cc11001100_hook("d", [0], "assign"), a = cc11001100_hook("a", d.concat(a), "assign");
      if (b.length != 32) for (c = cc11001100_hook("c", 0, "assign"); c < 32 - b.length; c++) d = cc11001100_hook("d", [0], "assign"), b = cc11001100_hook("b", d.concat(b), "assign");
      this.sm3keybase.BlockUpdate(a, 0, a.length);
      this.sm3c3.BlockUpdate(a, 0, a.length);
      this.sm3keybase.BlockUpdate(b, 0, b.length);
      this.ct = cc11001100_hook("this.ct", 1, "assign");
      this.NextKey();
    },
    NextKey: function () {
      var a = cc11001100_hook("a", new SM3Digest(this.sm3keybase), "var-init");
      a.Update(this.ct >> 24 & 255);
      a.Update(this.ct >> 16 & 255);
      a.Update(this.ct >> 8 & 255);
      a.Update(this.ct & 255);
      a.DoFinal(this.key, 0);
      this.keyOff = cc11001100_hook("this.keyOff", 0, "assign");
      this.ct++;
    },
    InitEncipher: function (h) {
      var b = cc11001100_hook("b", null, "var-init"),
        c = cc11001100_hook("c", null, "var-init"),
        c = cc11001100_hook("c", new KJUR.crypto.SM3withSM2({
          curve: cc11001100_hook("curve", "sm2", "object-key-init")
        }), "var-init"),
        d = cc11001100_hook("d", c.generateKeyPairHex(), "var-init"),
        a = cc11001100_hook("a", d.ecpubhex, "var-init"),
        b = cc11001100_hook("b", a.length - 2, "var-init"),
        e = cc11001100_hook("e", a.substr(2, b / 2), "var-init"),
        f = cc11001100_hook("f", new BigInteger(e, 16), "var-init");
      e.charAt(0);
      var a = cc11001100_hook("a", a.substr(2 + b / 2, b / 2), "var-init"),
        g = cc11001100_hook("g", new BigInteger(a, 16), "var-init");
      for (a.charAt(0); e.charAt(0) == "0" || a.charAt(0) == "0" || f.t != 10 || g.t != 10;) d = cc11001100_hook("d", c.generateKeyPairHex(), "assign"), a = cc11001100_hook("a", d.ecpubhex, "assign"), e = cc11001100_hook("e", a.substr(2, b / 2), "assign"), a = cc11001100_hook("a", a.substr(2 + b / 2, b / 2), "assign"), f = cc11001100_hook("f", new BigInteger(e, 16), "assign"), g = cc11001100_hook("g", new BigInteger(a, 16), "assign");
      b = cc11001100_hook("b", new BigInteger(d.ecprvhex, 16), "assign");
      c = cc11001100_hook("c", ECPointFp.decodeFromHex(c.ecparams.curve, d.ecpubhex), "assign");
      this.p2 = cc11001100_hook("this.p2", h.multiply(b), "assign");
      this.Reset();
      return c;
    },
    EncryptBlock: function (a) {
      this.sm3c3.BlockUpdate(a, 0, a.length);
      for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) {
        this.keyOff == this.key.length && this.NextKey();
        var c = cc11001100_hook("c", this.key[this.keyOff++], "var-init");
        c == 256 && (c = cc11001100_hook("c", 0, "assign"));
        a[b] ^= cc11001100_hook("a[b]", c, "assign");
      }
    },
    InitDecipher: function (b, a) {
      this.p2 = cc11001100_hook("this.p2", a.multiply(b), "assign");
      this.Reset();
    },
    DecryptBlock: function (a) {
      for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) {
        this.keyOff == this.key.length && this.NextKey();
        var c = cc11001100_hook("c", this.key[this.keyOff++], "var-init");
        c == 256 && (c = cc11001100_hook("c", 0, "assign"));
        a[b] ^= cc11001100_hook("a[b]", c, "assign");
      }
      this.sm3c3.BlockUpdate(a, 0, a.length);
    },
    Dofinal: function (b) {
      this.p2.getY().toBigInteger();
      var a = cc11001100_hook("a", this.GetWords(this.p2.getY().toBigInteger().toRadix(16)), "var-init");
      this.sm3c3.BlockUpdate(a, 0, a.length);
      this.sm3c3.DoFinal(b, 0);
      this.Reset();
    },
    Encrypt: function (h, f) {
      var b = cc11001100_hook("b", Array(f.length), "var-init");
      Array.Copy(f, 0, b, 0, f.length);
      var a = cc11001100_hook("a", this.InitEncipher(h), "var-init");
      this.EncryptBlock(b);
      var e = cc11001100_hook("e", Array(32), "var-init");
      this.Dofinal(e);
      var c = cc11001100_hook("c", a.getX().toBigInteger().toRadix(16), "var-init");
      if (c.length != 64) for (var g = cc11001100_hook("g", 64 - c.length, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < g; d++) c = cc11001100_hook("c", "0" + c, "assign");
      a = cc11001100_hook("a", a.getY().toBigInteger().toRadix(16), "assign");
      if (a.length != 64 && a.length != 64) {
        g = cc11001100_hook("g", 64 - a.length, "assign");
        for (d = cc11001100_hook("d", 0, "assign"); d < g; d++) a = cc11001100_hook("a", "0" + a, "assign");
      }
      b = cc11001100_hook("b", this.GetHex(b).toString(), "assign");
      e = cc11001100_hook("e", this.GetHex(e).toString(), "assign");
      return c + a + b + e;
    },
    GetWords: function (b) {
      var d = cc11001100_hook("d", [], "var-init"),
        c = cc11001100_hook("c", b.length, "var-init");
      if (c < 64 && c > 60) for (var e = cc11001100_hook("e", 64 - c, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < e; a++) b = cc11001100_hook("b", "0" + b, "assign");
      for (a = cc11001100_hook("a", 0, "assign"); a < c; a += cc11001100_hook("a", 2, "assign")) e = cc11001100_hook("e", b.substr(a, 2), "assign"), d[d.length] = cc11001100_hook("d[d.length]", parseInt(e, 16), "assign");
      return d;
    },
    GetHex: function (b) {
      for (var c = cc11001100_hook("c", [], "var-init"), d = cc11001100_hook("d", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < b.length * 2; a += cc11001100_hook("a", 2, "assign")) c[a >>> 3] |= cc11001100_hook("c[a >>> 3]", parseInt(b[d]) << 24 - a % 8 * 4, "assign"), d++;
      return new WordArray(c, b.length);
    },
    Decrypt: function (f, b) {
      var a = cc11001100_hook("a", b.substr(0, 64), "var-init"),
        c = cc11001100_hook("c", b.substr(0 + a.length, 64), "var-init"),
        d = cc11001100_hook("d", b.substr(a.length + c.length, b.length - a.length - c.length - 64), "var-init"),
        e = cc11001100_hook("e", b.substr(b.length - 64), "var-init"),
        d = cc11001100_hook("d", this.GetWords(d), "var-init"),
        a = cc11001100_hook("a", this.CreatePoint(a, c), "var-init");
      this.InitDecipher(f, a);
      this.DecryptBlock(d);
      a = cc11001100_hook("a", Array(32), "assign");
      this.Dofinal(a);
      if (this.GetHex(a).toString() == e) var e = cc11001100_hook("e", this.GetHex(d), "var-init"),
        g = cc11001100_hook("g", new charSet().stringifyUTF8(e), "var-init");else console.error("decrypt error!");
      return g;
    },
    CreatePoint: function (b, a) {
      var c = cc11001100_hook("c", new KJUR.crypto.SM3withSM2({
        curve: cc11001100_hook("curve", "sm2", "object-key-init")
      }), "var-init");
      return ECPointFp.decodeFromHex(c.ecparams.curve, "04" + b + a);
    }
  }, "assign");
  function encryptbySM2(e, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", new charSet().parseUTF8(e), "var-init");
    a.length > 128 && (a = cc11001100_hook("a", a.substr(a.length - 128), "assign"));
    var d = cc11001100_hook("d", a.substr(0, 64), "var-init"),
      f = cc11001100_hook("f", a.substr(64), "var-init"),
      c = cc11001100_hook("c", new SM2Cipher(), "var-init"),
      d = cc11001100_hook("d", c.CreatePoint(d, f), "var-init"),
      b = cc11001100_hook("b", c.GetWords(b.toString()), "var-init"),
      b = cc11001100_hook("b", c.Encrypt(d, b), "var-init");
    return "04" + b;
  }
  function decryptbySM2(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var a = cc11001100_hook("a", a.substring(2, a.length), "var-init"),
      c = cc11001100_hook("c", new BigInteger(b, 16), "var-init");
    return new SM2Cipher().Decrypt(c, a);
  }
  function encryptbySM3(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new SM3Digest().encrypt(a);
  }
  function encryptbySM4(b, c) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var a = cc11001100_hook("a", new charSet(), "var-init"),
      d = cc11001100_hook("d", KJUR_encrypt_sm4(a.parseUTF8(b).getArrs(), a.parseUTF8(c).getArrs()), "var-init");
    return a.HexStringify(d);
  }
  function decryptbySM4(c, d) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var a = cc11001100_hook("a", new charSet(), "var-init"),
      b = cc11001100_hook("b", a.HexParse(c), "var-init"),
      a = cc11001100_hook("a", a.parseUTF8(d), "var-init"),
      b = cc11001100_hook("b", KJUR_decrypt_sm4(b.getArrs(), a.getArrs()), "var-init");
    return new charSet().stringifyUTF8(b);
  }
  function encryptbyRSA(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return encryptbyrsa(a, b, c);
  }
  function decryptbyRSA(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    return decryptbyrsa(a, b, c, d);
  }
  function encryptbySHA1(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new sha1Obj().encryptbysha1(a);
  }
  function encryptbySHA256(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new SHA256Obj().encryptbysha256(a);
  }
  function encryptbyMD5(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new md5Obj().encryptbymd5(a);
  }
  function encryptbyDES(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new desObj().encryptbydes(b, a);
  }
  function decryptbyDES(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new desObj().decryptbydes(b, a);
  }
  function encryptby3DES(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new desObj().encryptbyTripledes(b, a);
  }
  function decryptby3DES(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new desObj().decryptbyTripledes(b, a);
  }
  function encryptbyBASE64(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new base64Obj().encryptbybase64(a);
  }
  function decryptbyBASE64(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new base64Obj().decryptbybase64(a);
  }
  function encryptbyAES(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new aesObj().encryptbyaes(b, a);
  }
  function decryptbyAES(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return new aesObj().decryptbyaes(b, a);
  }
  function rc4Init(key) {
    cc11001100_hook("key", key, "function-parameter");
    var s = cc11001100_hook("s", [], "var-init"),
      j = cc11001100_hook("j", 0, "var-init"),
      x;
    for (var i = cc11001100_hook("i", 0, "var-init"); i < 256; i++) {
      s[i] = cc11001100_hook("s[i]", i, "assign");
    }
    for (i = cc11001100_hook("i", 0, "assign"); i < 256; i++) {
      j = cc11001100_hook("j", (j + s[i] + key.charCodeAt(i % key.length)) % 256, "assign");
      x = cc11001100_hook("x", s[i], "assign");
      s[i] = cc11001100_hook("s[i]", s[j], "assign");
      s[j] = cc11001100_hook("s[j]", x, "assign");
    }
    return s;
  }
  function rc4Encrypt(str, s) {
    cc11001100_hook("str", str, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    var i = cc11001100_hook("i", 0, "var-init");
    var j = cc11001100_hook("j", 0, "var-init");
    var res = cc11001100_hook("res", "", "var-init");
    var k = cc11001100_hook("k", [], "var-init");
    var x = cc11001100_hook("x", null, "var-init");
    k = cc11001100_hook("k", k.concat(s), "assign");
    for (var y = cc11001100_hook("y", 0, "var-init"); y < str.length; y++) {
      i = cc11001100_hook("i", (i + 1) % 256, "assign");
      j = cc11001100_hook("j", (j + k[i]) % 256, "assign");
      x = cc11001100_hook("x", k[i], "assign");
      k[i] = cc11001100_hook("k[i]", k[j], "assign");
      k[j] = cc11001100_hook("k[j]", x, "assign");
      var dest = cc11001100_hook("dest", str.charCodeAt(y) ^ k[(k[i] + k[j]) % 256] || str.charCodeAt(y), "var-init");
      res += cc11001100_hook("res", String.fromCharCode(dest), "assign");
    }
    return res;
  }
  function CustomEncrypt(key, content) {
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    if (!key || !content) {
      return "";
    }
    var sbox = cc11001100_hook("sbox", rc4Init(key), "var-init");
    return rc4Encrypt(content, sbox);
  }
  function MD5(data) {
    cc11001100_hook("data", data, "function-parameter");
    function to_zerofilled_hex(n) {
      cc11001100_hook("n", n, "function-parameter");
      var t1 = cc11001100_hook("t1", (n >>> 0).toString(16), "var-init");
      return "00000000".substr(0, 8 - t1.length) + t1;
    }
    function chars_to_bytes(ac) {
      cc11001100_hook("ac", ac, "function-parameter");
      var retval = cc11001100_hook("retval", [], "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < ac.length; i++) {
        retval = cc11001100_hook("retval", retval.concat(str_to_bytes(ac[i])), "assign");
      }
      return retval;
    }
    function int64_to_bytes(num) {
      cc11001100_hook("num", num, "function-parameter");
      var retval = cc11001100_hook("retval", [], "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < 8; i++) {
        retval.push(num & 255);
        num = cc11001100_hook("num", num >>> 8, "assign");
      }
      return retval;
    }
    function rol(num, places) {
      cc11001100_hook("num", num, "function-parameter");
      cc11001100_hook("places", places, "function-parameter");
      return num << places & 4294967295 | num >>> 32 - places;
    }
    function fF(b, c, d) {
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      return b & c | ~b & d;
    }
    function fG(b, c, d) {
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      return d & b | ~d & c;
    }
    function fH(b, c, d) {
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      return b ^ c ^ d;
    }
    function fI(b, c, d) {
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      return c ^ (b | ~d);
    }
    function bytes_to_int32(arr, off) {
      cc11001100_hook("arr", arr, "function-parameter");
      cc11001100_hook("off", off, "function-parameter");
      return arr[off + 3] << 24 | arr[off + 2] << 16 | arr[off + 1] << 8 | arr[off];
    }
    function str_to_bytes(str) {
      cc11001100_hook("str", str, "function-parameter");
      var retval = cc11001100_hook("retval", [], "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < str.length; i++) if (str.charCodeAt(i) <= 127) {
        retval.push(str.charCodeAt(i));
      } else {
        var tmp = cc11001100_hook("tmp", encodeURIComponent(str.charAt(i)).substr(1).split("%"), "var-init");
        for (var j = cc11001100_hook("j", 0, "var-init"); j < tmp.length; j++) {
          retval.push(parseInt(tmp[j], 16));
        }
      }
      return retval;
    }
    function int128le_to_hex(a, b, c, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      var ra = cc11001100_hook("ra", "", "var-init");
      var t = cc11001100_hook("t", 0, "var-init");
      var ta = cc11001100_hook("ta", 0, "var-init");
      for (var i = cc11001100_hook("i", 3, "var-init"); i >= 0; i--) {
        ta = cc11001100_hook("ta", arguments[i], "assign");
        t = cc11001100_hook("t", ta & 255, "assign");
        ta = cc11001100_hook("ta", ta >>> 8, "assign");
        t = cc11001100_hook("t", t << 8, "assign");
        t = cc11001100_hook("t", t | ta & 255, "assign");
        ta = cc11001100_hook("ta", ta >>> 8, "assign");
        t = cc11001100_hook("t", t << 8, "assign");
        t = cc11001100_hook("t", t | ta & 255, "assign");
        ta = cc11001100_hook("ta", ta >>> 8, "assign");
        t = cc11001100_hook("t", t << 8, "assign");
        t = cc11001100_hook("t", t | ta, "assign");
        ra = cc11001100_hook("ra", ra + to_zerofilled_hex(t), "assign");
      }
      return ra;
    }
    function typed_to_plain(tarr) {
      cc11001100_hook("tarr", tarr, "function-parameter");
      var retval = cc11001100_hook("retval", new Array(tarr.length), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < tarr.length; i++) {
        retval[i] = cc11001100_hook("retval[i]", tarr[i], "assign");
      }
      return retval;
    }
    var databytes = cc11001100_hook("databytes", null, "var-init");
    var type_mismatch = cc11001100_hook("type_mismatch", null, "var-init");
    if (typeof data == "string") {
      databytes = cc11001100_hook("databytes", str_to_bytes(data), "assign");
    } else if (data.constructor == Array) {
      if (data.length === 0) {
        databytes = cc11001100_hook("databytes", data, "assign");
      } else if (typeof data[0] == "string") {
        databytes = cc11001100_hook("databytes", chars_to_bytes(data), "assign");
      } else if (typeof data[0] == "number") {
        databytes = cc11001100_hook("databytes", data, "assign");
      } else {
        type_mismatch = cc11001100_hook("type_mismatch", typeof data[0], "assign");
      }
    } else if (typeof ArrayBuffer != "undefined") {
      if (data instanceof ArrayBuffer) {
        databytes = cc11001100_hook("databytes", typed_to_plain(new Uint8Array(data)), "assign");
      } else if (data instanceof Uint8Array || data instanceof Int8Array) {
        databytes = cc11001100_hook("databytes", typed_to_plain(data), "assign");
      } else if (data instanceof Uint32Array || data instanceof Int32Array || data instanceof Uint16Array || data instanceof Int16Array || data instanceof Float32Array || data instanceof Float64Array) {
        databytes = cc11001100_hook("databytes", typed_to_plain(new Uint8Array(data.buffer)), "assign");
      } else {
        type_mismatch = cc11001100_hook("type_mismatch", typeof data, "assign");
      }
    } else {
      type_mismatch = cc11001100_hook("type_mismatch", typeof data, "assign");
    }
    if (type_mismatch) {
      alert("MD5 type mismatch, cannot process " + type_mismatch);
    }
    function _add(n1, n2) {
      cc11001100_hook("n1", n1, "function-parameter");
      cc11001100_hook("n2", n2, "function-parameter");
      return 4294967295 & n1 + n2;
    }
    return do_digest();
    function do_digest() {
      function updateRun(nf, sin32, dw32, b32) {
        cc11001100_hook("nf", nf, "function-parameter");
        cc11001100_hook("sin32", sin32, "function-parameter");
        cc11001100_hook("dw32", dw32, "function-parameter");
        cc11001100_hook("b32", b32, "function-parameter");
        var temp = cc11001100_hook("temp", d, "var-init");
        d = cc11001100_hook("d", c, "assign");
        c = cc11001100_hook("c", b, "assign");
        b = cc11001100_hook("b", _add(b, rol(_add(a, _add(nf, _add(sin32, dw32))), b32)), "assign");
        a = cc11001100_hook("a", temp, "assign");
      }
      var org_len = cc11001100_hook("org_len", databytes.length, "var-init");
      databytes.push(128);
      var tail = cc11001100_hook("tail", databytes.length % 64, "var-init");
      if (tail > 56) {
        for (var i = cc11001100_hook("i", 0, "var-init"); i < 64 - tail; i++) {
          databytes.push(0);
        }
        tail = cc11001100_hook("tail", databytes.length % 64, "assign");
      }
      for (i = cc11001100_hook("i", 0, "assign"); i < 56 - tail; i++) {
        databytes.push(0);
      }
      databytes = cc11001100_hook("databytes", databytes.concat(int64_to_bytes(org_len * 8)), "assign");
      var h0 = cc11001100_hook("h0", 1732584193, "var-init");
      var h1 = cc11001100_hook("h1", 4023233417, "var-init");
      var h2 = cc11001100_hook("h2", 2562383102, "var-init");
      var h3 = cc11001100_hook("h3", 271733878, "var-init");
      var a = cc11001100_hook("a", 0, "var-init"),
        b = cc11001100_hook("b", 0, "var-init"),
        c = cc11001100_hook("c", 0, "var-init"),
        d = cc11001100_hook("d", 0, "var-init");
      for (i = cc11001100_hook("i", 0, "assign"); i < databytes.length / 64; i++) {
        a = cc11001100_hook("a", h0, "assign");
        b = cc11001100_hook("b", h1, "assign");
        c = cc11001100_hook("c", h2, "assign");
        d = cc11001100_hook("d", h3, "assign");
        var ptr = cc11001100_hook("ptr", i * 64, "var-init");
        updateRun(fF(b, c, d), 3614090360, bytes_to_int32(databytes, ptr), 7);
        updateRun(fF(b, c, d), 3905402710, bytes_to_int32(databytes, ptr + 4), 12);
        updateRun(fF(b, c, d), 606105819, bytes_to_int32(databytes, ptr + 8), 17);
        updateRun(fF(b, c, d), 3250441966, bytes_to_int32(databytes, ptr + 12), 22);
        updateRun(fF(b, c, d), 4118548399, bytes_to_int32(databytes, ptr + 16), 7);
        updateRun(fF(b, c, d), 1200080426, bytes_to_int32(databytes, ptr + 20), 12);
        updateRun(fF(b, c, d), 2821735955, bytes_to_int32(databytes, ptr + 24), 17);
        updateRun(fF(b, c, d), 4249261313, bytes_to_int32(databytes, ptr + 28), 22);
        updateRun(fF(b, c, d), 1770035416, bytes_to_int32(databytes, ptr + 32), 7);
        updateRun(fF(b, c, d), 2336552879, bytes_to_int32(databytes, ptr + 36), 12);
        updateRun(fF(b, c, d), 4294925233, bytes_to_int32(databytes, ptr + 40), 17);
        updateRun(fF(b, c, d), 2304563134, bytes_to_int32(databytes, ptr + 44), 22);
        updateRun(fF(b, c, d), 1804603682, bytes_to_int32(databytes, ptr + 48), 7);
        updateRun(fF(b, c, d), 4254626195, bytes_to_int32(databytes, ptr + 52), 12);
        updateRun(fF(b, c, d), 2792965006, bytes_to_int32(databytes, ptr + 56), 17);
        updateRun(fF(b, c, d), 1236535329, bytes_to_int32(databytes, ptr + 60), 22);
        updateRun(fG(b, c, d), 4129170786, bytes_to_int32(databytes, ptr + 4), 5);
        updateRun(fG(b, c, d), 3225465664, bytes_to_int32(databytes, ptr + 24), 9);
        updateRun(fG(b, c, d), 643717713, bytes_to_int32(databytes, ptr + 44), 14);
        updateRun(fG(b, c, d), 3921069994, bytes_to_int32(databytes, ptr), 20);
        updateRun(fG(b, c, d), 3593408605, bytes_to_int32(databytes, ptr + 20), 5);
        updateRun(fG(b, c, d), 38016083, bytes_to_int32(databytes, ptr + 40), 9);
        updateRun(fG(b, c, d), 3634488961, bytes_to_int32(databytes, ptr + 60), 14);
        updateRun(fG(b, c, d), 3889429448, bytes_to_int32(databytes, ptr + 16), 20);
        updateRun(fG(b, c, d), 568446438, bytes_to_int32(databytes, ptr + 36), 5);
        updateRun(fG(b, c, d), 3275163606, bytes_to_int32(databytes, ptr + 56), 9);
        updateRun(fG(b, c, d), 4107603335, bytes_to_int32(databytes, ptr + 12), 14);
        updateRun(fG(b, c, d), 1163531501, bytes_to_int32(databytes, ptr + 32), 20);
        updateRun(fG(b, c, d), 2850285829, bytes_to_int32(databytes, ptr + 52), 5);
        updateRun(fG(b, c, d), 4243563512, bytes_to_int32(databytes, ptr + 8), 9);
        updateRun(fG(b, c, d), 1735328473, bytes_to_int32(databytes, ptr + 28), 14);
        updateRun(fG(b, c, d), 2368359562, bytes_to_int32(databytes, ptr + 48), 20);
        updateRun(fH(b, c, d), 4294588738, bytes_to_int32(databytes, ptr + 20), 4);
        updateRun(fH(b, c, d), 2272392833, bytes_to_int32(databytes, ptr + 32), 11);
        updateRun(fH(b, c, d), 1839030562, bytes_to_int32(databytes, ptr + 44), 16);
        updateRun(fH(b, c, d), 4259657740, bytes_to_int32(databytes, ptr + 56), 23);
        updateRun(fH(b, c, d), 2763975236, bytes_to_int32(databytes, ptr + 4), 4);
        updateRun(fH(b, c, d), 1272893353, bytes_to_int32(databytes, ptr + 16), 11);
        updateRun(fH(b, c, d), 4139469664, bytes_to_int32(databytes, ptr + 28), 16);
        updateRun(fH(b, c, d), 3200236656, bytes_to_int32(databytes, ptr + 40), 23);
        updateRun(fH(b, c, d), 681279174, bytes_to_int32(databytes, ptr + 52), 4);
        updateRun(fH(b, c, d), 3936430074, bytes_to_int32(databytes, ptr), 11);
        updateRun(fH(b, c, d), 3572445317, bytes_to_int32(databytes, ptr + 12), 16);
        updateRun(fH(b, c, d), 76029189, bytes_to_int32(databytes, ptr + 24), 23);
        updateRun(fH(b, c, d), 3654602809, bytes_to_int32(databytes, ptr + 36), 4);
        updateRun(fH(b, c, d), 3873151461, bytes_to_int32(databytes, ptr + 48), 11);
        updateRun(fH(b, c, d), 530742520, bytes_to_int32(databytes, ptr + 60), 16);
        updateRun(fH(b, c, d), 3299628645, bytes_to_int32(databytes, ptr + 8), 23);
        updateRun(fI(b, c, d), 4096336452, bytes_to_int32(databytes, ptr), 6);
        updateRun(fI(b, c, d), 1126891415, bytes_to_int32(databytes, ptr + 28), 10);
        updateRun(fI(b, c, d), 2878612391, bytes_to_int32(databytes, ptr + 56), 15);
        updateRun(fI(b, c, d), 4237533241, bytes_to_int32(databytes, ptr + 20), 21);
        updateRun(fI(b, c, d), 1700485571, bytes_to_int32(databytes, ptr + 48), 6);
        updateRun(fI(b, c, d), 2399980690, bytes_to_int32(databytes, ptr + 12), 10);
        updateRun(fI(b, c, d), 4293915773, bytes_to_int32(databytes, ptr + 40), 15);
        updateRun(fI(b, c, d), 2240044497, bytes_to_int32(databytes, ptr + 4), 21);
        updateRun(fI(b, c, d), 1873313359, bytes_to_int32(databytes, ptr + 32), 6);
        updateRun(fI(b, c, d), 4264355552, bytes_to_int32(databytes, ptr + 60), 10);
        updateRun(fI(b, c, d), 2734768916, bytes_to_int32(databytes, ptr + 24), 15);
        updateRun(fI(b, c, d), 1309151649, bytes_to_int32(databytes, ptr + 52), 21);
        updateRun(fI(b, c, d), 4149444226, bytes_to_int32(databytes, ptr + 16), 6);
        updateRun(fI(b, c, d), 3174756917, bytes_to_int32(databytes, ptr + 44), 10);
        updateRun(fI(b, c, d), 718787259, bytes_to_int32(databytes, ptr + 8), 15);
        updateRun(fI(b, c, d), 3951481745, bytes_to_int32(databytes, ptr + 36), 21);
        h0 = cc11001100_hook("h0", _add(h0, a), "assign");
        h1 = cc11001100_hook("h1", _add(h1, b), "assign");
        h2 = cc11001100_hook("h2", _add(h2, c), "assign");
        h3 = cc11001100_hook("h3", _add(h3, d), "assign");
      }
      return int128le_to_hex(h3, h2, h1, h0).toUpperCase();
    }
  }
  var _keyStr = cc11001100_hook("_keyStr", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", "var-init");
  function encode(input) {
    cc11001100_hook("input", input, "function-parameter");
    var output = cc11001100_hook("output", "", "var-init");
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = cc11001100_hook("i", 0, "var-init");
    input = cc11001100_hook("input", _utf8_encode(input), "assign");
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
      output = cc11001100_hook("output", output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4), "assign");
    }
    return output;
  }
  function decode(input) {
    cc11001100_hook("input", input, "function-parameter");
    var output = cc11001100_hook("output", "", "var-init");
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = cc11001100_hook("i", 0, "var-init");
    input = cc11001100_hook("input", input.replace(/[^A-Za-z0-9\+\/\=]/g, ""), "assign");
    while (i < input.length) {
      enc1 = cc11001100_hook("enc1", _keyStr.indexOf(input.charAt(i++)), "assign");
      enc2 = cc11001100_hook("enc2", _keyStr.indexOf(input.charAt(i++)), "assign");
      enc3 = cc11001100_hook("enc3", _keyStr.indexOf(input.charAt(i++)), "assign");
      enc4 = cc11001100_hook("enc4", _keyStr.indexOf(input.charAt(i++)), "assign");
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
    output = cc11001100_hook("output", _utf8_decode(output), "assign");
    return output;
  }
  function _utf8_encode(string) {
    cc11001100_hook("string", string, "function-parameter");
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
  }
  function _utf8_decode(utftext) {
    cc11001100_hook("utftext", utftext, "function-parameter");
    var string = cc11001100_hook("string", "", "var-init");
    var i = cc11001100_hook("i", 0, "var-init");
    var c = cc11001100_hook("c", c1 = cc11001100_hook("c1", c2 = cc11001100_hook("c2", 0, "assign"), "assign"), "var-init");
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
  }
  function Arcfour(key, txt) {
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("txt", txt, "function-parameter");
    var S = cc11001100_hook("S", [], "var-init"),
      result = cc11001100_hook("result", "", "var-init"),
      i = cc11001100_hook("i", 0, "var-init"),
      j = cc11001100_hook("j", 0, "var-init");
    for (i = cc11001100_hook("i", 0, "assign"); i < 256; i++) {
      S[i] = cc11001100_hook("S[i]", i, "assign");
      j = cc11001100_hook("j", (j + S[i] + key.charCodeAt(i % key.length)) % 256, "assign");
      S[j] = cc11001100_hook("S[j]", [S[i], S[i] = cc11001100_hook("S[i]", S[j], "assign")][0], "assign");
    }
    i = cc11001100_hook("i", j = cc11001100_hook("j", 0, "assign"), "assign");
    for (var n = cc11001100_hook("n", 0, "var-init"); n < txt.length; n++) {
      i = cc11001100_hook("i", (i + 1) % 256, "assign");
      j = cc11001100_hook("j", (j + S[i]) % 256, "assign");
      S[i] = cc11001100_hook("S[i]", [S[j], S[j] = cc11001100_hook("S[j]", S[i], "assign")][0], "assign");
      result += cc11001100_hook("result", String.fromCharCode(txt.charCodeAt(n) ^ S[(S[i] + S[j]) % 256]) || txt.charCodeAt(n), "assign");
    }
    return result;
  }
  module.exports = cc11001100_hook("module.exports", {
    rc4: cc11001100_hook("rc4", CustomEncrypt, "object-key-init"),
    rc4New: cc11001100_hook("rc4New", Arcfour, "object-key-init"),
    md5: cc11001100_hook("md5", MD5, "object-key-init"),
    base64Encode: cc11001100_hook("base64Encode", encode, "object-key-init"),
    base64Decode: cc11001100_hook("base64Decode", decode, "object-key-init"),
    encryptbySM3: cc11001100_hook("encryptbySM3", encryptbySM3, "object-key-init"),
    encryptbySM2: cc11001100_hook("encryptbySM2", encryptbySM2, "object-key-init"),
    encryptbySM4: cc11001100_hook("encryptbySM4", encryptbySM4, "object-key-init"),
    encryptbyRSA: cc11001100_hook("encryptbyRSA", encryptbyRSA, "object-key-init"),
    encryptbySHA256: cc11001100_hook("encryptbySHA256", encryptbySHA256, "object-key-init"),
    encryptbySHA1: cc11001100_hook("encryptbySHA1", encryptbySHA1, "object-key-init"),
    encryptbyMD5: cc11001100_hook("encryptbyMD5", encryptbyMD5, "object-key-init"),
    encryptbyDES: cc11001100_hook("encryptbyDES", encryptbyDES, "object-key-init"),
    encryptbyBASE64: cc11001100_hook("encryptbyBASE64", encryptbyBASE64, "object-key-init"),
    encryptbyAES: cc11001100_hook("encryptbyAES", encryptbyAES, "object-key-init"),
    encryptby3DES: cc11001100_hook("encryptby3DES", encryptby3DES, "object-key-init"),
    decryptbySM4: cc11001100_hook("decryptbySM4", decryptbySM4, "object-key-init"),
    decryptbySM2: cc11001100_hook("decryptbySM2", decryptbySM2, "object-key-init"),
    decryptbyRSA: cc11001100_hook("decryptbyRSA", decryptbyRSA, "object-key-init"),
    decryptbyDES: cc11001100_hook("decryptbyDES", decryptbyDES, "object-key-init"),
    decryptbyBASE64: cc11001100_hook("decryptbyBASE64", decryptbyBASE64, "object-key-init"),
    decryptbyAES: cc11001100_hook("decryptbyAES", decryptbyAES, "object-key-init"),
    decryptby3DES: cc11001100_hook("decryptby3DES", decryptby3DES, "object-key-init")
  }, "assign");
});
uap && uap.define("database", function ($, exports, module) {
  var eventEmitter = cc11001100_hook("eventEmitter", uap.require("eventEmitter"), "var-init");
  var getOptId = cc11001100_hook("getOptId", uap.getOptionId, "var-init");
  var DB = function (name) {
    this.name = cc11001100_hook("this.name", name, "assign");
  };
  var dbProto = cc11001100_hook("dbProto", {
    constructor: cc11001100_hook("constructor", DB, "object-key-init"),
    select: function (sql, callback) {
      var that = cc11001100_hook("that", this, "var-init");
      var optId = cc11001100_hook("optId", getOptId(), "var-init");
      if (arguments.length === 1 && uap.isPlainObject(sql)) {
        callback = cc11001100_hook("callback", sql.callback, "assign");
        sql = cc11001100_hook("sql", sql.sql, "assign");
      }
      if (uap.isFunction(callback)) {
        if (!sql) {
          return callback(new Error("sql 为空"));
        }
        uexDataBaseMgr.cbSelectSql = cc11001100_hook("uexDataBaseMgr.cbSelectSql", function (optId, dataType, data) {
          if (dataType != 1) {
            return callback(new Error("select error"));
          }
          callback(null, data, dataType, optId);
          that.emit("select", null, data, dataType, optId);
        }, "assign");
      }
      uexDataBaseMgr.selectSql(this.name, optId, sql);
    },
    exec: function (sql, callback) {
      var that = cc11001100_hook("that", this, "var-init");
      var optId = cc11001100_hook("optId", getOptId(), "var-init");
      if (arguments.length === 1 && uap.isPlainObject(sql)) {
        callback = cc11001100_hook("callback", sql.callback, "assign");
        sql = cc11001100_hook("sql", sql.sql, "assign");
      }
      if (uap.isFunction(callback)) {
        if (!sql) {
          return callback(new Error("sql 为空"));
        }
        uexDataBaseMgr.cbExecuteSql = cc11001100_hook("uexDataBaseMgr.cbExecuteSql", function (optId, dataType, data) {
          if (dataType != 2) {
            return callback(new Error("exec sql error"));
          }
          callback(null, data, dataType, optId);
          that.emit("select", null, data, dataType, optId);
        }, "assign");
      }
      uexDataBaseMgr.executeSql(this.name, optId, sql);
    },
    transaction: function (sqlFun, callback) {
      var that = cc11001100_hook("that", this, "var-init");
      var optId = cc11001100_hook("optId", getOptId(), "var-init");
      if (arguments.length === 1 && uap.isPlainObject(sqlFun)) {
        callback = cc11001100_hook("callback", sqlFun.callback, "assign");
        sqlFun = cc11001100_hook("sqlFun", sqlFun.sqlFun, "assign");
      }
      if (uap.isFunction(callback)) {
        if (!uap.isFunction(sqlFun)) {
          return callback(new Error("exec transaction error"));
        }
        window.uexDataBaseMgr.cbTransaction = cc11001100_hook("window.uexDataBaseMgr.cbTransaction", function (optId, dataType, data) {
          if (dataType != 2) {
            return callback(new Error("exec transaction!"));
          }
          callback(null, data, dataType, optId);
          that.emit("transaction", null, data, dataType, optId);
        }, "assign");
      }
      uexDataBaseMgr.transaction(this.name, optId, sqlFun);
    }
  }, "var-init");
  uap.extend(dbProto, eventEmitter);
  DB.prototype = cc11001100_hook("DB.prototype", dbProto, "assign");
  var database = cc11001100_hook("database", {
    create: function (name, optId, callback) {
      var argObj = cc11001100_hook("argObj", null, "var-init");
      if (arguments.length === 1 && uap.isPlainObject(name)) {
        argObj = cc11001100_hook("argObj", name, "assign");
        name = cc11001100_hook("name", argObj.name, "assign");
        optId = cc11001100_hook("optId", argObj.optId, "assign");
        callback = cc11001100_hook("callback", argObj.callback, "assign");
      }
      if (!name) {
        callback(new Error("数据库名字不能为空！"));
        return;
      }
      if (uap.isFunction(optId)) {
        callback = cc11001100_hook("callback", optId, "assign");
        optId = cc11001100_hook("optId", "", "assign");
      }
      if (uap.isFunction(callback)) {
        uexDataBaseMgr.cbOpenDataBase = cc11001100_hook("uexDataBaseMgr.cbOpenDataBase", function (optId, type, data) {
          if (type != 2) {
            return callback(new Error("open database error"));
          }
          var db = cc11001100_hook("db", new DB(name), "var-init");
          callback(null, data, db, type, optId);
          this.emit("open", null, data, db, type, optId);
        }, "assign");
      }
      uexDataBaseMgr.openDataBase(name, optId);
    },
    destory: function (name, optId, callback) {
      var argObj = cc11001100_hook("argObj", null, "var-init");
      if (arguments.length === 1 && uap.isPlainObject(name)) {
        argObj = cc11001100_hook("argObj", name, "assign");
        name = cc11001100_hook("name", argObj.name, "assign");
        optId = cc11001100_hook("optId", argObj.optId, "assign");
        callback = cc11001100_hook("callback", argObj.callback, "assign");
      }
      if (!name) {
        return;
      }
      if (uap.isFunction(optId)) {
        callback = cc11001100_hook("callback", optId, "assign");
        optId = cc11001100_hook("optId", "", "assign");
      }
      if (uap.isFunction(callback)) {
        if (!name) {
          callback(new Error("数据库名字不能为空！"));
          return;
        }
        uexDataBaseMgr.cbCloseDataBase = cc11001100_hook("uexDataBaseMgr.cbCloseDataBase", function (optId, dataType, data) {
          if (dataType != 2) {
            return callback(new Error("close database error"));
          }
          callback(null, data, dataType, optId);
          this.emit("close", null, data, dataType, optId);
        }, "assign");
      }
      uexDataBaseMgr.closeDataBase(name, optId);
    },
    select: function (name, sql, callback) {
      if (arguments.length === 1 && uap.isPlainObject(name)) {
        sql = cc11001100_hook("sql", name.sql, "assign");
        callback = cc11001100_hook("callback", name.callback, "assign");
        name = cc11001100_hook("name", name.name, "assign");
      }
      if (!name || !uap.isString(name)) {
        return callback(new Error("数据库名不为空"));
      }
      var db = cc11001100_hook("db", new DB(name), "var-init");
      db.select(sql, callback);
    },
    exec: function (name, sql, callback) {
      if (arguments.length === 1 && uap.isPlainObject(name)) {
        sql = cc11001100_hook("sql", name.sql, "assign");
        callback = cc11001100_hook("callback", name.callback, "assign");
        name = cc11001100_hook("name", name.name, "assign");
      }
      if (!name || !uap.isString(name)) {
        return callback(new Error("数据库名不为空"));
      }
      var db = cc11001100_hook("db", new DB(name), "var-init");
      db.exec(sql, callback);
    },
    translaction: function (name, sqlFun, callback) {
      if (arguments.length === 1 && uap.isPlainObject(name)) {
        sqlFun = cc11001100_hook("sqlFun", name.sqlFun, "assign");
        callback = cc11001100_hook("callback", name.callback, "assign");
        name = cc11001100_hook("name", name.name, "assign");
      }
      if (!name || !uap.isString(name)) {
        return callback(new Error("数据库名不为空"));
      }
      var db = cc11001100_hook("db", new DB(name), "var-init");
      db.transaction(sqlFun, callback);
    }
  }, "var-init");
  database = cc11001100_hook("database", uap.extend(database, eventEmitter), "assign");
  module.exports = cc11001100_hook("module.exports", database, "assign");
});
window.uap && uap.define("device", function ($, exports, module) {
  var completeCount = cc11001100_hook("completeCount", 0, "var-init");
  function vibrate(millisecond) {
    cc11001100_hook("millisecond", millisecond, "function-parameter");
    millisecond = cc11001100_hook("millisecond", parseInt(millisecond, 10), "assign");
    millisecond = cc11001100_hook("millisecond", isNaN(millisecond) ? 0 : millisecond, "assign");
    uexDevice.vibrate(millisecond);
  }
  function cancelVibrate() {
    uexDevice.cancelVibrate();
  }
  function getInfo(infoId, callback) {
    cc11001100_hook("infoId", infoId, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(infoId)) {
      callback = cc11001100_hook("callback", infoId.callback, "assign");
      infoId = cc11001100_hook("infoId", infoId.infoId, "assign");
    }
    if (uap.isFunction(callback)) {
      uexDevice.cbGetInfo = cc11001100_hook("uexDevice.cbGetInfo", function (optId, dataType, data) {
        if (dataType != 1) {
          return callback(new Error("get info error" + infoId));
        }
        callback(null, data, dataType, optId);
      }, "assign");
    }
    uexDevice.getInfo(infoId);
  }
  function getDeviceInfo(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    var deviceInfo = cc11001100_hook("deviceInfo", {}, "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", 18, "var-init"); i < len; i++) {
      getInfo(i, function (err, data) {
        completeCount++;
        if (err) {
          return callback(err);
        }
        var singleInfo = cc11001100_hook("singleInfo", JSON.parse(data), "var-init");
        uap.extend(deviceInfo, singleInfo);
        callback(deviceInfo, singleInfo, i, len, completeCount);
      });
    }
    return deviceInfo;
  }
  module.exports = cc11001100_hook("module.exports", {
    vibrate: cc11001100_hook("vibrate", vibrate, "object-key-init"),
    cancelVibrate: cc11001100_hook("cancelVibrate", cancelVibrate, "object-key-init"),
    getInfo: cc11001100_hook("getInfo", getInfo, "object-key-init"),
    getDeviceInfo: cc11001100_hook("getDeviceInfo", getDeviceInfo, "object-key-init")
  }, "assign");
});
uap && uap.define("eventEmitter", function ($, exports, module) {
  var eventEmitter = cc11001100_hook("eventEmitter", {
    on: function (name, callback) {
      if (!this.__events) {
        this.__events = cc11001100_hook("this.__events", {}, "assign");
      }
      if (this.__events[name]) {
        this.__events[name].push(callback);
      } else {
        this.__events[name] = cc11001100_hook("this.__events[name]", [callback], "assign");
      }
    },
    off: function (name, callback) {
      if (!this.__events) {
        return;
      }
      if (name in this.__events) {
        for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", this.__events[name].length, "var-init"); i < len; i++) {
          if (this.__events[name][i] === callback) {
            this.__events[name].splice(i, 1);
            return;
          }
        }
      }
    },
    once: function (name, callback) {
      var that = cc11001100_hook("that", this, "var-init");
      var tmpcall = function () {
        callback.apply(that, arguments);
        that.off(tmpcall);
      };
      this.on(name, tmpcall);
    },
    addEventListener: function () {
      return this.on.apply(this, arguments);
    },
    removeEventListener: function () {
      return this.off.apply(this, arguments);
    },
    trigger: function (name, context) {
      var args = cc11001100_hook("args", [].slice.call(arguments, 2), "var-init");
      if (!this.__events || !uap.isString(name)) {
        return;
      }
      context = cc11001100_hook("context", context || this, "assign");
      if (name && name in this.__events) {
        for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", this.__events[name].length, "var-init"); i < len; i++) {
          this.__events[name][i].apply(context, args);
        }
      }
    },
    emit: function () {
      return this.trigger.apply(this, arguments);
    }
  }, "var-init");
  uap.extend(eventEmitter);
  module.exports = cc11001100_hook("module.exports", eventEmitter, "assign");
});
uap && uap.define("file", function ($, exports, module) {
  var getOptionId = cc11001100_hook("getOptionId", uap.getOptionId, "var-init");
  var existQueue = cc11001100_hook("existQueue", {}, "var-init");
  var writeGlobalQueue = cc11001100_hook("writeGlobalQueue", [], "var-init");
  var readGlobalQueue = cc11001100_hook("readGlobalQueue", [], "var-init");
  var readOpenGlobalQueue = cc11001100_hook("readOpenGlobalQueue", [], "var-init");
  var statQueue = cc11001100_hook("statQueue", [], "var-init");
  var statQueueUsed = cc11001100_hook("statQueueUsed", [], "var-init");
  function processExistCall(optId, dataType, data) {
    cc11001100_hook("optId", optId, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    var callback = cc11001100_hook("callback", null, "var-init");
    var filePath = cc11001100_hook("filePath", null, "var-init");
    if (existQueue["exist_call_" + optId]) {
      callback = cc11001100_hook("callback", existQueue["exist_call_" + optId].cb, "assign");
      filePath = cc11001100_hook("filePath", existQueue["exist_call_" + optId].fp, "assign");
    } else if (existQueue.length == 1) {
      callback = cc11001100_hook("callback", existQueue[0].cb, "assign");
      filePath = cc11001100_hook("filePath", existQueue[0].fp, "assign");
    }
    if (uap.isFunction(callback)) {
      if (dataType == 2) {
        callback(null, data, dataType, optId, filePath);
      } else {
        callback(new Error("exist file error"), data, dataType, optId, filePath);
      }
    }
    delete existQueue["exist_call_" + optId];
  }
  function exists(filePath, callback, optId) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    cc11001100_hook("optId", optId, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
      optId = cc11001100_hook("optId", argObj.optId, "assign");
    }
    optId = cc11001100_hook("optId", optId || getOptionId(), "assign");
    if (uap.isFunction(callback)) {
      existQueue["exist_call_" + optId] = cc11001100_hook("existQueue[\"exist_call_\" + optId]", {
        cb: cc11001100_hook("cb", callback, "object-key-init"),
        fp: cc11001100_hook("fp", filePath, "object-key-init")
      }, "assign");
      uexFileMgr.cbIsFileExistByPath = cc11001100_hook("uexFileMgr.cbIsFileExistByPath", function (optId, dataType, data) {
        processExistCall.apply(null, arguments);
      }, "assign");
    }
    uexFileMgr.isFileExistByPath(optId, filePath);
    close(optId);
  }
  function stat(filePath, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    if (statQueue.length > 0) {
      statQueue.push({
        fp: cc11001100_hook("fp", filePath, "object-key-init"),
        cb: cc11001100_hook("cb", callback, "object-key-init")
      });
    } else {
      statQueue.push({
        fp: cc11001100_hook("fp", filePath, "object-key-init"),
        cb: cc11001100_hook("cb", callback, "object-key-init")
      });
      execStatQueue();
    }
  }
  function execStatQueue() {
    if (statQueue.length < 1) {
      return;
    }
    var execStat = cc11001100_hook("execStat", statQueue[0], "var-init");
    var filePath = cc11001100_hook("filePath", execStat.fp, "var-init");
    var callback = cc11001100_hook("callback", execStat.cb, "var-init");
    if (uap.isFunction(callback)) {
      uexFileMgr.cbGetFileTypeByPath = cc11001100_hook("uexFileMgr.cbGetFileTypeByPath", function (optId, dataType, data) {
        if (dataType != 2) {
          callback(new Error("get file type error"), null, dataType, optId, filePath);
          return;
        }
        var res = cc11001100_hook("res", {}, "var-init");
        if (data == 0) {
          res.isFile = cc11001100_hook("res.isFile", true, "assign");
        }
        if (data == 1) {
          res.isDirectory = cc11001100_hook("res.isDirectory", true, "assign");
        }
        callback(null, res, dataType, optId, filePath);
        statQueue.shift();
        if (statQueue.length) {
          execStatQueue();
        } else {}
      }, "assign");
    } else {
      statQueue.shift();
      if (statQueue.length) {
        execStatQueue();
      }
    }
    uexFileMgr.getFileTypeByPath(filePath);
  }
  function processReadGlobalQueue(err, data, dataType, optId) {
    cc11001100_hook("err", err, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("optId", optId, "function-parameter");
    if (readGlobalQueue.length > 0) {
      $.each(readGlobalQueue, function (i, v) {
        if (v && v.cb && uap.isFunction(v.cb)) {
          if (v.readOptId == optId) {
            v.cb(err, data, dataType, optId);
          }
        }
      });
    }
    return;
  }
  function processReadOpenGlobalQueue(err, data, dataType, optId) {
    cc11001100_hook("err", err, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("optId", optId, "function-parameter");
    if (readOpenGlobalQueue.length > 0) {
      $.each(readOpenGlobalQueue, function (i, v) {
        if (v && v.cb && uap.isFunction(v.cb)) {
          if (v.optId == optId) {
            v.cb(err, data, dataType, optId);
          }
        }
      });
    }
    return;
  }
  function read(filePath, length, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("length", length, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      length = cc11001100_hook("length", argObj.length, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    if (!filePath) {
      return callback(new Error("file name is empty"));
    }
    if (uap.isFunction(length)) {
      callback = cc11001100_hook("callback", length, "assign");
      length = cc11001100_hook("length", -1, "assign");
    }
    callback = cc11001100_hook("callback", uap.isFunction(callback) ? callback : function () {}, "assign");
    length = cc11001100_hook("length", length || -1, "assign");
    var optId = cc11001100_hook("optId", getOptionId(), "var-init");
    readGlobalQueue.push({
      fPath: cc11001100_hook("fPath", filePath, "object-key-init"),
      cb: cc11001100_hook("cb", callback, "object-key-init"),
      readOptId: cc11001100_hook("readOptId", optId, "object-key-init")
    });
    exists(filePath, function (err, res, dataType, optId, filePath) {
      if (err) {
        $.each(readGlobalQueue, function (i, v) {
          if (v && v.fPath == filePath) {
            return v.cb(err);
          }
        });
      }
      if (!res) {
        $.each(readGlobalQueue, function (i, v) {
          if (v && v.fPath == filePath) {
            return v.cb(new Error("文件不存在"));
          }
        });
      }
      stat(filePath, function (err, fileInfo, dataType, optId, filePath) {
        if (err) {
          $.each(readGlobalQueue, function (i, v) {
            if (v && v.fPath == filePath) {
              return v.cb(err);
            }
          });
        }
        if (!fileInfo.isFile) {
          $.each(readGlobalQueue, function (i, v) {
            if (v && v.fPath == filePath) {
              return v.cb(new Error("该路径不是文件"));
            }
          });
        }
        uexFileMgr.cbReadFile = cc11001100_hook("uexFileMgr.cbReadFile", function (optId, dataType, data) {
          if (dataType != 0) {
            processReadGlobalQueue(new Error("read file error"), data, dataType, optId);
          }
          processReadGlobalQueue(null, data, dataType, optId);
        }, "assign");
        readOpen(filePath, 1, function (err, data, dataType, optId) {
          uexFileMgr.readFile(optId, length);
          close(optId);
        });
      });
    }, optId);
  }
  function readSecure(filePath, length, key, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("length", length, "function-parameter");
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      length = cc11001100_hook("length", argObj.length, "assign");
      key = cc11001100_hook("key", argObj.key, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    if (!filePath) {
      return callback(new Error("file name is empty"));
    }
    callback = cc11001100_hook("callback", uap.isFunction(callback) ? callback : function () {}, "assign");
    length = cc11001100_hook("length", length || -1, "assign");
    exists(filePath, function (err, res) {
      if (err) {
        return callback(err);
      }
      if (!res) {
        return callback(new Error("文件不存在"));
      }
      stat(filePath, function (err, fileInfo) {
        if (err) {
          return callback(err);
        }
        if (!fileInfo.isFile) {
          return callback(new Error("该路径不是文件"));
        }
        uexFileMgr.cbReadFile = cc11001100_hook("uexFileMgr.cbReadFile", function (optId, dataType, data) {
          if (dataType != 0) {
            callback(new Error("read file error"), data, dataType, optId);
          }
          callback(null, data, dataType, optId);
        }, "assign");
        openSecure(filePath, 1, key, function (err, data, dataType, optId) {
          uexFileMgr.readFile(optId, length);
          close(optId);
        });
      });
    });
  }
  function readJSON(filePath, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    read({
      filePath: cc11001100_hook("filePath", filePath, "object-key-init"),
      callback: function (err, data) {
        var res = cc11001100_hook("res", null, "var-init");
        if (err) {
          return callback(err);
        }
        try {
          if (!data) {
            res = cc11001100_hook("res", {}, "assign");
          } else {
            res = cc11001100_hook("res", JSON.parse(data), "assign");
          }
          callback(null, res);
        } catch (e) {
          return callback(e);
        }
      }
    });
  }
  function processWriteGlobalQueue(err, data, dataType, optId) {
    cc11001100_hook("err", err, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("optId", optId, "function-parameter");
    if (writeGlobalQueue.length > 0) {
      $.each(writeGlobalQueue, function (i, v) {
        if (v && v.cb && uap.isFunction(v.cb)) {
          if (v.optId == optId) {
            v.cb(err, data, dataType, optId, v.ct);
          }
        }
      });
    }
    return;
  }
  function write(filePath, content, callback, mode) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    cc11001100_hook("mode", mode, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      content = cc11001100_hook("content", argObj.content, "assign");
      mode = cc11001100_hook("mode", argObj.mode, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    mode = cc11001100_hook("mode", mode || 0, "assign");
    if (uap.isFunction(content)) {
      callback = cc11001100_hook("callback", content, "assign");
      content = cc11001100_hook("content", "", "assign");
    }
    writeOpen(filePath, 2, function (err, data, dataType, optId, contents) {
      if (err) {
        return callback(err);
      }
      uexFileMgr.writeFile(optId, mode, contents);
      close(optId);
      callback(null);
    }, content);
  }
  function writeSecure(filePath, content, callback, mode, key) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    cc11001100_hook("mode", mode, "function-parameter");
    cc11001100_hook("key", key, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      content = cc11001100_hook("content", argObj.content, "assign");
      mode = cc11001100_hook("mode", argObj.mode, "assign");
      key = cc11001100_hook("key", argObj.key, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    mode = cc11001100_hook("mode", mode || 0, "assign");
    if (uap.isFunction(content)) {
      key = cc11001100_hook("key", mode, "assign");
      mode = cc11001100_hook("mode", callback, "assign");
      callback = cc11001100_hook("callback", content, "assign");
      content = cc11001100_hook("content", "", "assign");
    }
    openSecure(filePath, 2, key, function (err, data, dataType, optId) {
      if (err) {
        return callback(err);
      }
      uexFileMgr.writeFile(optId, mode, content);
      close(optId);
      callback(null);
    });
  }
  function append(filePath, content, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      content = cc11001100_hook("content", argObj.content, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    return write(filePath, content, callback, 1);
  }
  function appendSecure(filePath, content, key, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      content = cc11001100_hook("content", argObj.content, "assign");
      key = cc11001100_hook("key", argObj.key, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    return writeSecure(filePath, content, callback, 1, key);
  }
  function open(filePath, mode, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("mode", mode, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      mode = cc11001100_hook("mode", argObj.mode, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    if (uap.isFunction(mode)) {
      callback = cc11001100_hook("callback", mode, "assign");
      mode = cc11001100_hook("mode", 3, "assign");
    }
    mode = cc11001100_hook("mode", mode || 3, "assign");
    if (!uap.isString(filePath)) {
      return callback(new Error("文件路径不正确"));
    }
    if (uap.isFunction(callback)) {
      uexFileMgr.cbOpenFile = cc11001100_hook("uexFileMgr.cbOpenFile", function (optId, dataType, data) {
        if (dataType != 2) {
          callback(new Error("open file error"), data, dataType, optId);
          return;
        }
        callback(null, data, dataType, optId);
      }, "assign");
    }
    uexFileMgr.openFile(getOptionId(), filePath, mode);
  }
  function writeOpen(filePath, mode, callback, content) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("mode", mode, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      mode = cc11001100_hook("mode", argObj.mode, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    if (uap.isFunction(mode)) {
      callback = cc11001100_hook("callback", mode, "assign");
      mode = cc11001100_hook("mode", 3, "assign");
    }
    mode = cc11001100_hook("mode", mode || 3, "assign");
    if (!uap.isString(filePath)) {
      return callback(new Error("文件路径不正确"));
    }
    var optId = cc11001100_hook("optId", getOptionId(), "var-init");
    writeGlobalQueue.push({
      optId: cc11001100_hook("optId", optId, "object-key-init"),
      cb: cc11001100_hook("cb", callback, "object-key-init"),
      ct: cc11001100_hook("ct", content, "object-key-init")
    });
    if (uap.isFunction(callback)) {
      uexFileMgr.cbOpenFile = cc11001100_hook("uexFileMgr.cbOpenFile", function (optId, dataType, data) {
        if (dataType != 2) {
          processWriteGlobalQueue(new Error("open file error"), data, dataType, optId);
          return;
        }
        processWriteGlobalQueue(null, data, dataType, optId);
      }, "assign");
    }
    uexFileMgr.openFile(optId, filePath, mode);
  }
  function readOpen(filePath, mode, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("mode", mode, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      mode = cc11001100_hook("mode", argObj.mode, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    if (uap.isFunction(mode)) {
      callback = cc11001100_hook("callback", mode, "assign");
      mode = cc11001100_hook("mode", 3, "assign");
    }
    mode = cc11001100_hook("mode", mode || 3, "assign");
    if (!uap.isString(filePath)) {
      return callback(new Error("文件路径不正确"));
    }
    var optId = cc11001100_hook("optId", null, "var-init");
    $.each(readGlobalQueue, function (i, v) {
      if (v.fPath && v.fPath == filePath) {
        optId = cc11001100_hook("optId", v.readOptId, "assign");
      }
    });
    if (!optId) {
      optId = cc11001100_hook("optId", getOptionId(), "assign");
    }
    if (uap.isFunction(callback)) {
      readOpenGlobalQueue.push({
        optId: cc11001100_hook("optId", optId, "object-key-init"),
        cb: cc11001100_hook("cb", callback, "object-key-init")
      });
      uexFileMgr.cbOpenFile = cc11001100_hook("uexFileMgr.cbOpenFile", function (optId, dataType, data) {
        if (dataType != 2) {
          processReadOpenGlobalQueue(new Error("open file error"), data, dataType, optId);
          return;
        }
        processReadOpenGlobalQueue(null, data, dataType, optId);
      }, "assign");
    }
    uexFileMgr.openFile(optId, filePath, mode);
  }
  function openSecure(filePath, mode, key, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("mode", mode, "function-parameter");
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      mode = cc11001100_hook("mode", argObj.mode, "assign");
      key = cc11001100_hook("key", argObj.key, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    key = cc11001100_hook("key", key ? key : "", "assign");
    mode = cc11001100_hook("mode", mode || 3, "assign");
    if (!uap.isFunction(callback)) {
      callback = cc11001100_hook("callback", null, "assign");
    }
    if (!uap.isString(filePath)) {
      return callback(new Error("文件路径不正确"));
    }
    if (uap.isFunction(callback)) {
      uexFileMgr.cbOpenSecure = cc11001100_hook("uexFileMgr.cbOpenSecure", function (optId, dataType, data) {
        if (dataType != 2) {
          callback(new Error("open secure file error"), data, dataType, optId);
          return;
        }
        callback(null, data, dataType, optId);
      }, "assign");
    }
    uexFileMgr.openSecure(getOptionId(), filePath, mode, key);
  }
  function deleteFile(filePath, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    var optId = cc11001100_hook("optId", getOptionId(), "var-init");
    if (uap.isFunction(callback)) {
      uexFileMgr.cbDeleteFileByPath = cc11001100_hook("uexFileMgr.cbDeleteFileByPath", function (optId, dataType, data) {
        if (dataType != 2) {
          return callback(new Error("delete file error"));
        }
        callback(null, data, dataType, optId);
      }, "assign");
    }
    uexFileMgr.deleteFileByPath(filePath);
    close(optId);
  }
  function close(optId) {
    cc11001100_hook("optId", optId, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(optId)) {
      optId = cc11001100_hook("optId", optId.optId, "assign");
    }
    if (!optId) {
      return;
    }
    uexFileMgr.closeFile(optId);
  }
  function create(filePath, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    var optId = cc11001100_hook("optId", getOptionId(), "var-init");
    if (uap.isFunction(callback)) {
      uexFileMgr.cbCreateFile = cc11001100_hook("uexFileMgr.cbCreateFile", function (optId, dataType, data) {
        if (dataType != 2) {
          return callback(new Error("create file error"), data, dataType, optId);
        }
        callback(null, data, dataType, optId);
      }, "assign");
    }
    uexFileMgr.createFile(optId, filePath);
    close(optId);
  }
  function createSecure(filePath, key, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      key = cc11001100_hook("key", argObj.key, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    key = cc11001100_hook("key", key ? key : "", "assign");
    var optId = cc11001100_hook("optId", getOptionId(), "var-init");
    if (uap.isFunction(callback)) {
      uexFileMgr.cbCreateSecure = cc11001100_hook("uexFileMgr.cbCreateSecure", function (optId, dataType, data) {
        if (dataType != 2) {
          return callback(new Error("create secure file error"), data, dataType, optId);
        }
        callback(null, data, dataType, optId);
      }, "assign");
    }
    uexFileMgr.createSecure(optId, filePath, key);
    close(optId);
  }
  var localPath = cc11001100_hook("localPath", "wgt://data/locFile.txt", "var-init");
  function deleteLocalFile(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback.callback, "assign");
    }
    if (!uap.isFunction(callback)) {
      callback = cc11001100_hook("callback", function () {}, "assign");
    }
    deleteFile(localPath, callback);
  }
  function writeLocalFile(content, callback) {
    cc11001100_hook("content", content, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    exists(localPath, function (err, data) {
      if (err) {
        return callback(err);
      }
      if (!data) {
        create(localPath, function (err, res) {
          if (err) {
            return callback(err);
          }
          if (res == 0) {
            write(localPath, content, callback);
          }
        });
      } else {
        write(localPath, content, callback);
      }
    });
  }
  function readLocalFile(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    return read(localPath, callback);
  }
  function getRealPath(filePath, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    uexFileMgr.cbGetFileRealPath = cc11001100_hook("uexFileMgr.cbGetFileRealPath", function (optId, dataType, data) {
      if (dataType != 0) {
        callback(new Error("get file path error"), data, dataType, optId);
        return;
      }
      callback(null, data, dataType, optId);
    }, "assign");
    uexFileMgr.getFileRealPath(filePath);
  }
  function explorer(filePath, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    uexFileMgr.cbExplorer = cc11001100_hook("uexFileMgr.cbExplorer", function (optId, dataType, data) {
      callback(null, data, dataType, optId);
    }, "assign");
    uexFileMgr.explorer(filePath);
  }
  function multiExplorer(filePath, callback) {
    cc11001100_hook("filePath", filePath, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(filePath)) {
      argObj = cc11001100_hook("argObj", filePath, "assign");
      filePath = cc11001100_hook("filePath", argObj.filePath, "assign");
      callback = cc11001100_hook("callback", argObj.callback, "assign");
    }
    uexFileMgr.cbMultiExplorer = cc11001100_hook("uexFileMgr.cbMultiExplorer", function (optId, dataType, data) {
      callback(null, data, dataType, optId);
    }, "assign");
    uexFileMgr.multiExplorer(filePath);
  }
  module.exports = cc11001100_hook("module.exports", {
    wgtPath: cc11001100_hook("wgtPath", "wgt://", "object-key-init"),
    resPath: cc11001100_hook("resPath", "res://", "object-key-init"),
    wgtRootPath: cc11001100_hook("wgtRootPath", "wgtroot://", "object-key-init"),
    open: cc11001100_hook("open", open, "object-key-init"),
    close: cc11001100_hook("close", close, "object-key-init"),
    read: cc11001100_hook("read", read, "object-key-init"),
    readJSON: cc11001100_hook("readJSON", readJSON, "object-key-init"),
    write: cc11001100_hook("write", write, "object-key-init"),
    create: cc11001100_hook("create", create, "object-key-init"),
    remove: cc11001100_hook("remove", deleteFile, "object-key-init"),
    append: cc11001100_hook("append", append, "object-key-init"),
    exists: cc11001100_hook("exists", exists, "object-key-init"),
    stat: cc11001100_hook("stat", stat, "object-key-init"),
    deleteLocalFile: cc11001100_hook("deleteLocalFile", deleteLocalFile, "object-key-init"),
    writeLocalFile: cc11001100_hook("writeLocalFile", writeLocalFile, "object-key-init"),
    readLocalFile: cc11001100_hook("readLocalFile", readLocalFile, "object-key-init"),
    getRealPath: cc11001100_hook("getRealPath", getRealPath, "object-key-init"),
    createSecure: cc11001100_hook("createSecure", createSecure, "object-key-init"),
    openSecure: cc11001100_hook("openSecure", openSecure, "object-key-init"),
    readSecure: cc11001100_hook("readSecure", readSecure, "object-key-init"),
    writeSecure: cc11001100_hook("writeSecure", writeSecure, "object-key-init"),
    appendSecure: cc11001100_hook("appendSecure", appendSecure, "object-key-init"),
    explorer: cc11001100_hook("explorer", explorer, "object-key-init"),
    multiExplorer: cc11001100_hook("multiExplorer", multiExplorer, "object-key-init")
  }, "assign");
});
uap && uap.define("request", function ($, exports, module) {
  var jsonpID = cc11001100_hook("jsonpID", 0, "var-init"),
    document = cc11001100_hook("document", window.document, "var-init"),
    key,
    name,
    rscript = cc11001100_hook("rscript", /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "var-init"),
    scriptTypeRE = cc11001100_hook("scriptTypeRE", /^(?:text|application)\/javascript/i, "var-init"),
    xmlTypeRE = cc11001100_hook("xmlTypeRE", /^(?:text|application)\/xml/i, "var-init"),
    jsonType = cc11001100_hook("jsonType", "application/json", "var-init"),
    htmlType = cc11001100_hook("htmlType", "text/html", "var-init"),
    blankRE = cc11001100_hook("blankRE", /^\s*$/, "var-init"),
    lastRequestTime = cc11001100_hook("lastRequestTime", new Date().valueOf(), "var-init");
  var getXmlHttpId = cc11001100_hook("getXmlHttpId", uap.getOptionId, "var-init");
  function triggerAndReturn(context, eventName, data) {
    cc11001100_hook("context", context, "function-parameter");
    cc11001100_hook("eventName", eventName, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    uap.trigger(eventName, context, data);
  }
  function triggerGlobal(settings, context, eventName, data) {
    cc11001100_hook("settings", settings, "function-parameter");
    cc11001100_hook("context", context, "function-parameter");
    cc11001100_hook("eventName", eventName, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    if (settings.global) {
      return triggerAndReturn(context || uap, eventName, data);
    }
  }
  var active = cc11001100_hook("active", 0, "var-init");
  function ajaxStart(settings) {
    cc11001100_hook("settings", settings, "function-parameter");
    if (settings.global && active++ === 0) {
      triggerGlobal(settings, null, "ajaxStart");
    }
  }
  function ajaxStop(settings) {
    cc11001100_hook("settings", settings, "function-parameter");
    if (settings.global && ! --active) {
      triggerGlobal(settings, null, "ajaxStop");
    }
  }
  function ajaxBeforeSend(xhr, settings) {
    cc11001100_hook("xhr", xhr, "function-parameter");
    cc11001100_hook("settings", settings, "function-parameter");
    var context = cc11001100_hook("context", settings.context, "var-init");
    if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, "ajaxBeforeSend", [xhr, settings]) === false) {
      return false;
    }
    triggerGlobal(settings, context, "ajaxSend", [xhr, settings]);
  }
  function ajaxSuccess(data, requestCode, response, xhr, settings, deferred) {
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("requestCode", requestCode, "function-parameter");
    cc11001100_hook("response", response, "function-parameter");
    cc11001100_hook("xhr", xhr, "function-parameter");
    cc11001100_hook("settings", settings, "function-parameter");
    cc11001100_hook("deferred", deferred, "function-parameter");
    var context = cc11001100_hook("context", settings.context, "var-init"),
      status = cc11001100_hook("status", "success", "var-init");
    settings.success.call(context, data, status, requestCode, response, xhr);
    if (deferred) {
      deferred.resolveWith(context, [data, status, requestCode, response, xhr]);
    }
    triggerGlobal(settings, context, "ajaxSuccess", [xhr, settings, data, status, requestCode, response]);
    ajaxComplete(status, xhr, settings);
  }
  function ajaxError(error, type, msg, xhr, settings, deferred) {
    cc11001100_hook("error", error, "function-parameter");
    cc11001100_hook("type", type, "function-parameter");
    cc11001100_hook("msg", msg, "function-parameter");
    cc11001100_hook("xhr", xhr, "function-parameter");
    cc11001100_hook("settings", settings, "function-parameter");
    cc11001100_hook("deferred", deferred, "function-parameter");
    var context = cc11001100_hook("context", settings.context, "var-init");
    settings.error.call(context, xhr, type, error, msg);
    if (deferred) {
      deferred.rejectWith(context, [xhr, type, error, msg]);
    }
    triggerGlobal(settings, context, "ajaxError", [xhr, settings, error || type, msg]);
    ajaxComplete(type, xhr, settings);
  }
  function ajaxComplete(status, xhr, settings) {
    cc11001100_hook("status", status, "function-parameter");
    cc11001100_hook("xhr", xhr, "function-parameter");
    cc11001100_hook("settings", settings, "function-parameter");
    var context = cc11001100_hook("context", settings.context, "var-init");
    settings.complete.call(context, xhr, status);
    triggerGlobal(settings, context, "ajaxComplete", [xhr, settings]);
    ajaxStop(settings);
  }
  function ajaxProgress(progress, xhr, settings) {
    cc11001100_hook("progress", progress, "function-parameter");
    cc11001100_hook("xhr", xhr, "function-parameter");
    cc11001100_hook("settings", settings, "function-parameter");
    var context = cc11001100_hook("context", settings.context, "var-init");
    settings.progress.call(context, progress, xhr, status);
    triggerGlobal(settings, context, "ajaxProgress", [progress, xhr, settings]);
  }
  function empty() {}
  var ajaxSettings = cc11001100_hook("ajaxSettings", {
    type: cc11001100_hook("type", "GET", "object-key-init"),
    beforeSend: cc11001100_hook("beforeSend", empty, "object-key-init"),
    success: cc11001100_hook("success", empty, "object-key-init"),
    error: cc11001100_hook("error", empty, "object-key-init"),
    complete: cc11001100_hook("complete", empty, "object-key-init"),
    progress: cc11001100_hook("progress", empty, "object-key-init"),
    context: cc11001100_hook("context", null, "object-key-init"),
    global: cc11001100_hook("global", true, "object-key-init"),
    certificate: cc11001100_hook("certificate", null, "object-key-init"),
    appVerify: cc11001100_hook("appVerify", true, "object-key-init"),
    emulateHTTP: cc11001100_hook("emulateHTTP", false, "object-key-init"),
    xhr: function () {
      return window.uexXmlHttpMgr || XMLHttpRequest;
    },
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/x-javascript", "object-key-init"),
      json: cc11001100_hook("json", jsonType, "object-key-init"),
      xml: cc11001100_hook("xml", "application/xml, text/xml", "object-key-init"),
      html: cc11001100_hook("html", htmlType, "object-key-init"),
      text: cc11001100_hook("text", "text/plain", "object-key-init")
    },
    crossDomain: cc11001100_hook("crossDomain", false, "object-key-init"),
    timeout: cc11001100_hook("timeout", 0, "object-key-init"),
    contentType: cc11001100_hook("contentType", false, "object-key-init"),
    processData: cc11001100_hook("processData", false, "object-key-init"),
    cache: cc11001100_hook("cache", true, "object-key-init")
  }, "var-init");
  function mimeToDataType(mime) {
    cc11001100_hook("mime", mime, "function-parameter");
    if (mime) {
      mime = cc11001100_hook("mime", mime.split(";", 2)[0], "assign");
    }
    return mime && (mime == htmlType ? "html" : mime == jsonType ? "json" : scriptTypeRE.test(mime) ? "script" : xmlTypeRE.test(mime) && "xml") || "text";
  }
  function appendQuery(url, query) {
    cc11001100_hook("url", url, "function-parameter");
    cc11001100_hook("query", query, "function-parameter");
    if (query == "") {
      return url;
    }
    return (url + "&" + query).replace(/[&?]{1,2}/, "?");
  }
  function processCompleteResult(xhr, opcode, status, result, requestCode, response, deferred) {
    cc11001100_hook("xhr", xhr, "function-parameter");
    cc11001100_hook("opcode", opcode, "function-parameter");
    cc11001100_hook("status", status, "function-parameter");
    cc11001100_hook("result", result, "function-parameter");
    cc11001100_hook("requestCode", requestCode, "function-parameter");
    cc11001100_hook("response", response, "function-parameter");
    cc11001100_hook("deferred", deferred, "function-parameter");
    var settings = cc11001100_hook("settings", xhr["settings_" + opcode], "var-init");
    var dataType = cc11001100_hook("dataType", settings.dataType, "var-init");
    if (requestCode == 401) {
      $(document).trigger("EVENT_AUTH_INVALIDATE", {});
      ajaxError(null, "request error", result, xhr, settings, deferred);
      return;
    }
    if (status < 0) {
      if (result == null || result == "") {
        result = cc11001100_hook("result", response, "assign");
      }
      ajaxError(null, "request error", result, xhr, settings, deferred);
      return;
    }
    if (status == 1) {
      if (!requestCode || requestCode == 200 || requestCode > 200 && requestCode < 300 || requestCode == 304) {
        xhr["settings_" + opcode] = cc11001100_hook("xhr[\"settings_\" + opcode]", null, "assign");
        var error = cc11001100_hook("error", false, "var-init");
        result = cc11001100_hook("result", result || "", "assign");
        try {
          if (dataType == "script") {
            window["eval"].call(window, result);
          } else if (dataType == "xml") {
            result = cc11001100_hook("result", result, "assign");
          } else if (dataType == "json") {
            result = cc11001100_hook("result", blankRE.test(result) ? null : $.parseJSON(result), "assign");
          }
        } catch (e) {
          error = cc11001100_hook("error", e, "assign");
        }
        if (error) {
          ajaxError(error, "parsererror", result, xhr, settings, deferred);
        } else {
          ajaxSuccess(result, requestCode, response, xhr, settings, deferred);
        }
      } else {
        if (result == null || result == "") {
          result = cc11001100_hook("result", response, "assign");
        }
        ajaxError(null, "request error", result, xhr, settings, deferred);
      }
    } else {
      ajaxError(null, "error", result, xhr, settings, deferred);
    }
    xhr.close(opcode);
  }
  function processProgress(progress, xhr, optId) {
    cc11001100_hook("progress", progress, "function-parameter");
    cc11001100_hook("xhr", xhr, "function-parameter");
    cc11001100_hook("optId", optId, "function-parameter");
    var settings = cc11001100_hook("settings", xhr["settings_" + optId], "var-init");
    ajaxProgress(progress, xhr, settings);
  }
  function serializeData(options) {
    cc11001100_hook("options", options, "function-parameter");
    if (options.processData && options.data && !uap.isString(options.data)) {
      options.data = cc11001100_hook("options.data", $.param(options.data, options.traditional), "assign");
    }
    if (options.data && (!options.type || options.type.toUpperCase() == "GET")) {
      options.data = cc11001100_hook("options.data", $.param(options.data, options.traditional), "assign");
      options.url = cc11001100_hook("options.url", appendQuery(options.url, options.data), "assign");
      options.data = cc11001100_hook("options.data", undefined, "assign");
    }
  }
  function ajax(options) {
    cc11001100_hook("options", options, "function-parameter");
    var requestTime = cc11001100_hook("requestTime", new Date().valueOf(), "var-init");
    var httpId = cc11001100_hook("httpId", getXmlHttpId(), "var-init");
    var settings = cc11001100_hook("settings", $.extend({
        headers: {
          requestTime: cc11001100_hook("requestTime", "" + requestTime, "object-key-init"),
          tokenId: cc11001100_hook("tokenId", uap.locStorage.val("PARAM_USER_TOKEN") || "TOKENID", "object-key-init"),
          devicesId: cc11001100_hook("devicesId", uap.locStorage.val("PARAM_DEVICE_ID") || "DEVICEID", "object-key-init")
        }
      }, options || {}), "var-init"),
      deferred = cc11001100_hook("deferred", $.Deferred && $.Deferred(), "var-init");
    for (key in ajaxSettings) {
      if (settings[key] === undefined) {
        settings[key] = cc11001100_hook("settings[key]", ajaxSettings[key], "assign");
      }
    }
    ajaxStart(settings);
    if (!settings.crossDomain) {
      settings.crossDomain = cc11001100_hook("settings.crossDomain", /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host, "assign");
    }
    if (!settings.url) {
      settings.url = cc11001100_hook("settings.url", $.replaceAllInjectionStr(window.location.toString()), "assign");
    }
    serializeData(settings);
    var dataType = cc11001100_hook("dataType", settings.dataType, "var-init");
    var hasPlaceholder = cc11001100_hook("hasPlaceholder", /\?.+=\?/.test(settings.url), "var-init");
    if (hasPlaceholder) {
      dataType = cc11001100_hook("dataType", "jsonp", "assign");
    }
    if (settings.cache === false || (!options || options.cache !== true) && ("script" == dataType || "jsonp" == dataType)) {
      settings.url = cc11001100_hook("settings.url", appendQuery(settings.url, "_=" + Date.now()), "assign");
    }
    if ("jsonp" == dataType) {
      if (!hasPlaceholder) {
        settings.url = cc11001100_hook("settings.url", appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?" : settings.jsonp === false ? "" : "callback=?"), "assign");
      }
      return $.ajaxJSONP(settings, deferred);
    }
    var mime = cc11001100_hook("mime", settings.accepts[dataType], "var-init"),
      headers = cc11001100_hook("headers", {}, "var-init"),
      setHeader = function (name, value) {
        headers[name.toLowerCase()] = cc11001100_hook("headers[name.toLowerCase()]", [name, value], "assign");
      },
      protocol = cc11001100_hook("protocol", /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, "var-init"),
      xhr = cc11001100_hook("xhr", settings.xhr(), "var-init"),
      nativeSetHeader = function (xhr, headers) {
        var toHeader = cc11001100_hook("toHeader", {}, "var-init");
        var fromHeader = cc11001100_hook("fromHeader", null, "var-init");
        for (var key in headers) {
          fromHeader = cc11001100_hook("fromHeader", headers[key], "assign");
          toHeader[fromHeader[0]] = cc11001100_hook("toHeader[fromHeader[0]]", fromHeader[1], "assign");
        }
        xhr.setHeaders(httpId, JSON.stringify(toHeader));
      },
      addAppVerify = function (settings) {
        if (settings.appVerify === true) {
          xhr.setAppVerify && xhr.setAppVerify(httpId, 1);
        }
        if (settings.appVerify === false) {
          xhr.setAppVerify && xhr.setAppVerify(httpId, 0);
        }
      },
      updateCertificate = function (settings) {
        var certi = cc11001100_hook("certi", settings.certificate, "var-init");
        if (!certi) {
          return;
        }
        xhr.setCertificate && xhr.setCertificate(httpId, certi.password || "", certi.path);
      },
      abortTimeout;
    xhr["settings_" + httpId] = cc11001100_hook("xhr[\"settings_\" + httpId]", settings, "assign");
    if (deferred) {
      deferred.promise(xhr);
    }
    if (!settings.crossDomain) {
      setHeader("X-Requested-With", "XMLHttpRequest");
    }
    setHeader("Accept", mime || "*/*");
    if (mime = cc11001100_hook("mime", settings.mimeType || mime, "assign")) {
      if (mime.indexOf(",") > -1) {
        mime = cc11001100_hook("mime", mime.split(",", 2)[0], "assign");
      }
      xhr.overrideMimeType && xhr.overrideMimeType(mime);
    }
    if (settings.emulateHTTP && (settings.type === "PUT" || settings.type === "DELETE" || settings.type === "PATCH")) {
      setHeader("X-HTTP-Method-Override", settings.type);
      settings.type = cc11001100_hook("settings.type", "POST", "assign");
    }
    if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != "GET") {
      setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded");
    }
    xhr.setRequestHeader = cc11001100_hook("xhr.setRequestHeader", setHeader, "assign");
    xhr.onPostProgress = cc11001100_hook("xhr.onPostProgress", function (optId, progress) {
      var resArg = cc11001100_hook("resArg", [progress], "var-init");
      resArg.push(xhr);
      resArg.push(optId);
      processProgress.apply(null, resArg);
    }, "assign");
    xhr.onData = cc11001100_hook("xhr.onData", function () {
      if (window.abortTimeout) {
        clearTimeout(window.abortTimeout);
        window.abortTimeout = cc11001100_hook("window.abortTimeout", null, "assign");
      }
      var resArg = cc11001100_hook("resArg", [xhr], "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", arguments.length, "var-init"); i < len; i++) {
        resArg.push(arguments[i]);
      }
      resArg.push(deferred);
      processCompleteResult.apply(null, resArg);
    }, "assign");
    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.close(httpId);
      ajaxError(null, "abort", null, xhr, settings, deferred);
      return xhr;
    }
    if (settings.xhrFields) {
      for (name in settings.xhrFields) {
        xhr[name] = cc11001100_hook("xhr[name]", settings.xhrFields[name], "assign");
      }
    }
    var async = cc11001100_hook("async", "async" in settings ? settings.async : true, "var-init");
    xhr.open(httpId, settings.type, settings.url, settings.timeout);
    updateCertificate(settings);
    addAppVerify(settings);
    settings.headers && (settings.headers["dataHASH"] = cc11001100_hook("settings.headers[\"dataHASH\"]", uap.crypto.encryptbySM3(settings.headers.requestTime + settings.headers.tokenId + settings.headers.devicesId), "assign"));
    if (settings.data) {
      if (settings.contentType == "multipart/form-data") {
        for (name in settings.data) {
          if (uap.isPlainObject(settings.data[name])) {
            if (settings.data[name].path) {
              xhr.setPostData(httpId, "1", name, settings.data[name].path);
            } else {
              xhr.setPostData(httpId, "0", name, JSON.stringify(settings.data[name]));
            }
          } else {
            xhr.setPostData(httpId, "0", name, settings.data[name]);
          }
        }
      } else {
        if (settings.contentType === "application/json") {
          if (uap.isPlainObject(settings.data)) {
            settings.data = cc11001100_hook("settings.data", JSON.stringify(settings.data), "assign");
          }
        }
        if (settings.contentType === "application/x-www-form-urlencoded") {
          if (uap.isPlainObject(settings.data)) {
            settings.data = cc11001100_hook("settings.data", $.param(settings.data), "assign");
          }
        }
        settings.headers && (settings.headers["dataHASH"] = cc11001100_hook("settings.headers[\"dataHASH\"]", uap.crypto.encryptbySM3(settings.data + settings.headers.requestTime + settings.headers.tokenId + settings.headers.devicesId), "assign"));
        xhr.setBody(httpId, settings.data ? settings.data : null);
      }
    }
    if (settings.headers) {
      for (var name in settings.headers) {
        setHeader(name, settings.headers[name]);
      }
    }
    nativeSetHeader(xhr, headers);
    if (settings.timeout > 0 && !window.abortTimeout) window.abortTimeout = cc11001100_hook("window.abortTimeout", setTimeout(function () {
      if (window.abortTimeout) {
        clearTimeout(window.abortTimeout);
        window.abortTimeout = cc11001100_hook("window.abortTimeout", null, "assign");
      }
      xhr.onData = cc11001100_hook("xhr.onData", empty, "assign");
      xhr.close(httpId);
      ajaxError(null, "timeout", null, xhr, settings, deferred);
    }, settings.timeout), "assign");
    xhr.send(httpId);
    return xhr;
  }
  function parseArguments(url, data, success, dataType) {
    cc11001100_hook("url", url, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("success", success, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    if (uap.isFunction(data)) {
      dataType = cc11001100_hook("dataType", success, "assign");
      success = cc11001100_hook("success", data, "assign");
      data = cc11001100_hook("data", undefined, "assign");
    }
    if (!uap.isFunction(success)) {
      dataType = cc11001100_hook("dataType", success, "assign");
      success = cc11001100_hook("success", undefined, "assign");
    }
    return {
      url: cc11001100_hook("url", url, "object-key-init"),
      data: cc11001100_hook("data", data, "object-key-init"),
      success: cc11001100_hook("success", success, "object-key-init"),
      dataType: cc11001100_hook("dataType", dataType, "object-key-init")
    };
  }
  function get() {
    return ajax(parseArguments.apply(null, arguments));
  }
  function post() {
    var options = cc11001100_hook("options", parseArguments.apply(null, arguments), "var-init");
    options.type = cc11001100_hook("options.type", "POST", "assign");
    return ajax(options);
  }
  function getJSON() {
    var options = cc11001100_hook("options", parseArguments.apply(null, arguments), "var-init");
    options.dataType = cc11001100_hook("options.dataType", "json", "assign");
    return ajax(options);
  }
  var escape = cc11001100_hook("escape", encodeURIComponent, "var-init");
  function serialize(params, obj, traditional, scope) {
    cc11001100_hook("params", params, "function-parameter");
    cc11001100_hook("obj", obj, "function-parameter");
    cc11001100_hook("traditional", traditional, "function-parameter");
    cc11001100_hook("scope", scope, "function-parameter");
    var type,
      array = cc11001100_hook("array", $.isArray(obj), "var-init"),
      hash = cc11001100_hook("hash", $.isPlainObject(obj), "var-init");
    $.each(obj, function (key, value) {
      type = cc11001100_hook("type", $.type(value), "assign");
      if (scope) {
        key = cc11001100_hook("key", traditional ? scope : scope + "[" + (hash || type == "object" || type == "array" ? key : "") + "]", "assign");
      }
      if (!scope && array) {
        params.add(value.name, value.value);
      } else if (type == "array" || !traditional && type == "object") {
        serialize(params, value, traditional, key);
      } else {
        params.add(key, value);
      }
    });
  }
  function param(obj, traditional) {
    cc11001100_hook("obj", obj, "function-parameter");
    cc11001100_hook("traditional", traditional, "function-parameter");
    var params = cc11001100_hook("params", [], "var-init");
    params.add = cc11001100_hook("params.add", function (k, v) {
      this.push(escape(k) + "=" + escape(v));
    }, "assign");
    serialize(params, obj, traditional);
    return params.join("&").replace(/%20/g, "+");
  }
  function postForm(form, success, error) {
    cc11001100_hook("form", form, "function-parameter");
    cc11001100_hook("success", success, "function-parameter");
    cc11001100_hook("error", error, "function-parameter");
    if (!form) {
      return;
    }
    form = cc11001100_hook("form", $(form), "assign");
    var submitInputs = cc11001100_hook("submitInputs", [], "var-init");
    var inputTypes = cc11001100_hook("inputTypes", {
      color: cc11001100_hook("color", 1, "object-key-init"),
      date: cc11001100_hook("date", 1, "object-key-init"),
      datetime: cc11001100_hook("datetime", 1, "object-key-init"),
      "datetime-local": cc11001100_hook("datetime-local", 1, "object-key-init"),
      email: cc11001100_hook("email", 1, "object-key-init"),
      hidden: cc11001100_hook("hidden", 1, "object-key-init"),
      month: cc11001100_hook("month", 1, "object-key-init"),
      number: cc11001100_hook("number", 1, "object-key-init"),
      password: cc11001100_hook("password", 1, "object-key-init"),
      radio: cc11001100_hook("radio", 1, "object-key-init"),
      range: cc11001100_hook("range", 1, "object-key-init"),
      search: cc11001100_hook("search", 1, "object-key-init"),
      tel: cc11001100_hook("tel", 1, "object-key-init"),
      text: cc11001100_hook("text", 1, "object-key-init"),
      time: cc11001100_hook("time", 1, "object-key-init"),
      url: cc11001100_hook("url", 1, "object-key-init"),
      week: cc11001100_hook("week", 1, "object-key-init")
    }, "var-init");
    var fileType = cc11001100_hook("fileType", ["file"], "var-init");
    var checkTypes = cc11001100_hook("checkTypes", ["checkbox", "radio"], "var-init");
    var todoSupport = cc11001100_hook("todoSupport", ["keygen"], "var-init");
    var eleList = cc11001100_hook("eleList", ["input", "select", "textarea"], "var-init");
    var formData = cc11001100_hook("formData", {}, "var-init");
    success = cc11001100_hook("success", success || function () {}, "assign");
    error = cc11001100_hook("error", error || function () {}, "assign");
    function getFormData() {
      form.find(eleList.join(",")).each(function (i, v) {
        if (v.tagName === "INPUT") {
          var ele = cc11001100_hook("ele", $(v), "var-init");
          var type = cc11001100_hook("type", ele.attr("type"), "var-init");
          if (type in inputTypes) {
            if (ele.attr("data-ispath")) {
              formData[ele.attr("name")] = cc11001100_hook("formData[ele.attr(\"name\")]", {
                path: cc11001100_hook("path", ele.val(), "object-key-init")
              }, "assign");
            } else {
              formData[ele.attr("name")] = cc11001100_hook("formData[ele.attr(\"name\")]", ele.val(), "assign");
            }
          }
        } else {}
      });
    }
    var method = cc11001100_hook("method", form.attr("method"), "var-init");
    var action = cc11001100_hook("action", form.attr("action") || location.href, "var-init");
    method = cc11001100_hook("method", (method || "POST").toUpperCase(), "assign");
    getFormData();
    ajax({
      url: cc11001100_hook("url", action, "object-key-init"),
      type: cc11001100_hook("type", method, "object-key-init"),
      data: cc11001100_hook("data", formData, "object-key-init"),
      success: cc11001100_hook("success", success, "object-key-init"),
      error: cc11001100_hook("error", error, "object-key-init")
    });
  }
  var offlineClearQueue = cc11001100_hook("offlineClearQueue", [], "var-init");
  function processOfflineClearQueue(err, data, dataType, optId) {
    cc11001100_hook("err", err, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("optId", optId, "function-parameter");
    if (offlineClearQueue.length > 0) {
      $.each(offlineClearQueue, function (i, v) {
        if (v && uap.isFunction(v)) {
          v(err, data, dataType, optId);
        }
      });
      offlineClearQueue = cc11001100_hook("offlineClearQueue", [], "assign");
    }
    return;
  }
  function clearOffline(url, callback, data) {
    cc11001100_hook("url", url, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(url)) {
      argObj = cc11001100_hook("argObj", url, "assign");
      url = cc11001100_hook("url", argObj["url"], "assign");
      data = cc11001100_hook("data", argObj["data"], "assign");
      callback = cc11001100_hook("callback", argObj["callback"], "assign");
    }
    if (!uap.isFunction(callback)) {
      callback = cc11001100_hook("callback", function () {}, "assign");
    }
    offlineClearQueue.push(callback);
    var offlineKey = cc11001100_hook("offlineKey", "offlinedata", "var-init");
    var offlinedata = cc11001100_hook("offlinedata", uap.locStorage.val(offlineKey), "var-init");
    var offlineUrl;
    if (data) {
      var paramsInfo = cc11001100_hook("paramsInfo", JSON.stringify(data), "var-init");
      var fullUrl = cc11001100_hook("fullUrl", url + paramsInfo, "var-init");
      offlineUrl = cc11001100_hook("offlineUrl", uap.crypto.md5(fullUrl), "assign");
    } else {
      offlineUrl = cc11001100_hook("offlineUrl", uap.crypto.md5(url), "assign");
    }
    if (offlinedata != null) {
      dataObj = cc11001100_hook("dataObj", JSON.parse(offlinedata), "assign");
      if (dataObj[offlineUrl]) {
        if (dataObj[offlineUrl]["data"]) {
          var localFilePath = cc11001100_hook("localFilePath", dataObj[offlineUrl]["data"], "var-init");
          uap.file.remove({
            filePath: cc11001100_hook("filePath", localFilePath, "object-key-init"),
            callback: function (err, data, dataType, optId) {
              delete dataObj[offlineUrl];
              uap.locStorage.val(offlineKey, JSON.stringify(dataObj));
              processOfflineClearQueue(err, data, dataType, optId);
            }
          });
        } else {
          delete dataObj[offlineUrl];
          uap.locStorage.val(offlineKey, JSON.stringify(dataObj));
          processOfflineClearQueue(null, 0, 2, 0);
        }
      } else {
        processOfflineClearQueue(null, 0, 2, 0);
      }
    } else {
      offlineClearQueue = cc11001100_hook("offlineClearQueue", [], "assign");
    }
  }
  module.exports = cc11001100_hook("module.exports", {
    ajax: function () {
      if (window.uexXmlHttpMgr) {
        ajax.apply(null, arguments);
      } else {
        Zepto.ajax.apply(null, arguments);
      }
    },
    get: function () {
      if (window.uexXmlHttpMgr) {
        get.apply(null, arguments);
      } else {
        Zepto.get.apply(null, arguments);
      }
    },
    post: function () {
      if (window.uexXmlHttpMgr) {
        post.apply(null, arguments);
      } else {
        Zepto.post.apply(null, arguments);
      }
    },
    getJSON: cc11001100_hook("getJSON", getJSON, "object-key-init"),
    param: cc11001100_hook("param", param, "object-key-init"),
    postForm: cc11001100_hook("postForm", postForm, "object-key-init"),
    clearOffline: cc11001100_hook("clearOffline", clearOffline, "object-key-init")
  }, "assign");
});
uap && uap.define("locStorage", function ($, exports, module) {
  var storage = cc11001100_hook("storage", window.localStorage, "var-init"),
    i = cc11001100_hook("i", 0, "var-init"),
    len = cc11001100_hook("len", 0, "var-init");
  function setValue(key, val) {
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("val", val, "function-parameter");
    try {
      if (storage) {
        if (!uap.isString(val)) {
          val = cc11001100_hook("val", JSON.stringify(val), "assign");
        }
        storage.setItem(key, val);
      } else {}
    } catch (e) {}
  }
  function setValues(key) {
    cc11001100_hook("key", key, "function-parameter");
    if (uap.isPlainObject(key)) {
      for (var k in key) {
        if (key.hasOwnPropery(k)) {
          setValue(k, key[k]);
        }
      }
    } else if (uap.isArray(key)) {
      for (i = cc11001100_hook("i", 0, "assign"), len = cc11001100_hook("len", key.length, "assign"); i < len; i++) {
        if (key[i]) {
          setValue.apply(this, key[i]);
        }
      }
    } else {
      setValue.apply(this, arguments);
    }
  }
  function getValue(key) {
    cc11001100_hook("key", key, "function-parameter");
    if (!key) {
      return;
    }
    try {
      if (storage) {
        return storage.getItem(key);
      }
    } catch (e) {}
  }
  function getKeys() {
    var res = cc11001100_hook("res", [], "var-init");
    var key = cc11001100_hook("key", "", "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", storage.length, "var-init"); i < len; i++) {
      key = cc11001100_hook("key", storage.key(i), "assign");
      if (key) {
        res.push(key);
      }
    }
    return res;
  }
  function clear(key) {
    cc11001100_hook("key", key, "function-parameter");
    try {
      if (key && uap.isString(key)) {
        storage.removeItem(key);
      } else {
        storage.clear();
      }
    } catch (e) {}
  }
  function leaveSpace() {
    var space = cc11001100_hook("space", 1024 * 1024 * 5 - unescape(encodeURIComponent(JSON.stringify(storage))).length, "var-init");
    return space;
  }
  function val(key, value) {
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("value", value, "function-parameter");
    if (arguments.length === 1) {
      return getValue(key);
    }
    setValue(key, value);
  }
  module.exports = cc11001100_hook("module.exports", {
    getVal: cc11001100_hook("getVal", getValue, "object-key-init"),
    setVal: cc11001100_hook("setVal", setValues, "object-key-init"),
    leaveSpace: cc11001100_hook("leaveSpace", leaveSpace, "object-key-init"),
    remove: cc11001100_hook("remove", clear, "object-key-init"),
    keys: cc11001100_hook("keys", getKeys, "object-key-init"),
    val: cc11001100_hook("val", val, "object-key-init")
  }, "assign");
});
window.uap && uap.extend(function (ac, exports, module) {
  var trim = function (str) {
    if (!str) {
      return "";
    }
    if (String.prototype.trim) {
      return String.prototype.trim.call(str);
    }
    return str.replace(/^\s+|\s+$/gi, "");
  };
  var trimLeft = function (str) {
    if (!str) {
      return "";
    }
    if (String.prototype.trimLeft) {
      return String.prototype.trimLeft.call(str);
    }
    return str.replace(/^\s+/gi, "");
  };
  var trimRight = function (str) {
    if (!str) {
      return "";
    }
    if (String.prototype.trimRight) {
      return String.prototype.trimRight.call(str);
    }
    return str.replace(/\s+$/gi, "");
  };
  var byteLength = function (str) {
    if (!str) {
      return 0;
    }
    var totalLength = cc11001100_hook("totalLength", 0, "var-init");
    var i;
    var charCode;
    for (i = cc11001100_hook("i", 0, "assign"); i < str.length; i++) {
      charCode = cc11001100_hook("charCode", str.charCodeAt(i), "assign");
      if (charCode < 127) {
        totalLength = cc11001100_hook("totalLength", totalLength + 1, "assign");
      } else if (128 <= charCode && charCode <= 2047) {
        totalLength += cc11001100_hook("totalLength", 2, "assign");
      } else if (2048 <= charCode && charCode <= 65535) {
        totalLength += cc11001100_hook("totalLength", 3, "assign");
      }
    }
    return totalLength;
  };
  module.exports = cc11001100_hook("module.exports", {
    trim: cc11001100_hook("trim", trim, "object-key-init"),
    trimLeft: cc11001100_hook("trimLeft", trimLeft, "object-key-init"),
    trimRight: cc11001100_hook("trimRight", trimRight, "object-key-init"),
    byteLength: cc11001100_hook("byteLength", byteLength, "object-key-init")
  }, "assign");
});
window.uap && uap.define('view', function ($, exports, module) {
  var _ = cc11001100_hook("_", uap.require('underscore'), "var-init");
  var settings = cc11001100_hook("settings", {}, "var-init");
  var config = function (newSettings) {
    settings = cc11001100_hook("settings", _.defaults({}, settings, newSettings), "assign");
  };
  var renderTemp = function (selector, template, dataSource, options) {
    options = cc11001100_hook("options", _.defaults({}, settings, options), "assign");
    var render = cc11001100_hook("render", _.template(template, options), "var-init");
    var dataRes = cc11001100_hook("dataRes", render(dataSource), "var-init");
    $(selector).html(dataRes);
    return dataRes;
  };
  var apRenderTemp = function (selector, template, dataSource, options) {
    options = cc11001100_hook("options", _.defaults({}, settings, options), "assign");
    var render = cc11001100_hook("render", _.template(template, options), "var-init");
    var dataRes = cc11001100_hook("dataRes", render(dataSource), "var-init");
    $(selector).append(dataRes);
    return dataRes;
  };
  module.exports = cc11001100_hook("module.exports", {
    template: cc11001100_hook("template", _.template, "object-key-init"),
    render: cc11001100_hook("render", renderTemp, "object-key-init"),
    appendRender: cc11001100_hook("appendRender", apRenderTemp, "object-key-init"),
    config: cc11001100_hook("config", config, "object-key-init")
  }, "assign");
});
window.uap && uap.define("window", function ($, exports, module) {
  var subscribeGlobslQueue = cc11001100_hook("subscribeGlobslQueue", [], "var-init");
  var bounceCallQueue = cc11001100_hook("bounceCallQueue", [], "var-init");
  var multiPopoverQueue = cc11001100_hook("multiPopoverQueue", {}, "var-init");
  var currentOS = cc11001100_hook("currentOS", "", "var-init");
  var keyFuncMapper = cc11001100_hook("keyFuncMapper", {}, "var-init");
  function monitorKey(id, enable, callback) {
    cc11001100_hook("id", id, "function-parameter");
    cc11001100_hook("enable", enable, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(id)) {
      argObj = cc11001100_hook("argObj", id, "assign");
      id = cc11001100_hook("id", argObj["id"], "assign");
      enable = cc11001100_hook("enable", argObj["enable"], "assign");
      callback = cc11001100_hook("callback", argObj["callback"] || function () {}, "assign");
    }
    keyFuncMapper[id] = cc11001100_hook("keyFuncMapper[id]", callback, "assign");
    uexWindow.setReportKey(id, enable);
    uexWindow.onKeyPressed = cc11001100_hook("uexWindow.onKeyPressed", function (keyCode) {
      keyFuncMapper[keyCode] && keyFuncMapper[keyCode](keyCode);
    }, "assign");
  }
  function open(name, data, aniId, type, dataType, width, height, animDuration, extraInfo) {
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("aniId", aniId, "function-parameter");
    cc11001100_hook("type", type, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("width", width, "function-parameter");
    cc11001100_hook("height", height, "function-parameter");
    cc11001100_hook("animDuration", animDuration, "function-parameter");
    cc11001100_hook("extraInfo", extraInfo, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(name)) {
      argObj = cc11001100_hook("argObj", name, "assign");
      name = cc11001100_hook("name", argObj["name"], "assign");
      dataType = cc11001100_hook("dataType", argObj["dataType"] || 0, "assign");
      aniId = cc11001100_hook("aniId", argObj["aniId"] || 0, "assign");
      width = cc11001100_hook("width", argObj["width"], "assign");
      height = cc11001100_hook("height", argObj["height"], "assign");
      type = cc11001100_hook("type", argObj["type"] || 0, "assign");
      animDuration = cc11001100_hook("animDuration", argObj["animDuration"], "assign");
      extraInfo = cc11001100_hook("extraInfo", argObj["extraInfo"], "assign");
      data = cc11001100_hook("data", argObj["data"], "assign");
    }
    dataType = cc11001100_hook("dataType", dataType || 0, "assign");
    aniId = cc11001100_hook("aniId", aniId || 0, "assign");
    type = cc11001100_hook("type", type || 0, "assign");
    animDuration = cc11001100_hook("animDuration", animDuration || 300, "assign");
    try {
      extraInfo = cc11001100_hook("extraInfo", uap.isString(extraInfo) ? extraInfo : JSON.stringify(extraInfo), "assign");
      extraInfo = cc11001100_hook("extraInfo", JSON.parse(extraInfo), "assign");
      if (!extraInfo.extraInfo) {
        extraInfo = cc11001100_hook("extraInfo", {
          extraInfo: cc11001100_hook("extraInfo", extraInfo, "object-key-init")
        }, "assign");
      }
      extraInfo = cc11001100_hook("extraInfo", JSON.stringify(extraInfo), "assign");
    } catch (e) {
      extraInfo = cc11001100_hook("extraInfo", extraInfo || "", "assign");
    }
    uexWindow.open(name, dataType, data, aniId, width, height, type, animDuration, extraInfo);
  }
  function close(animId, animDuration) {
    cc11001100_hook("animId", animId, "function-parameter");
    cc11001100_hook("animDuration", animDuration, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(animId)) {
      argObj = cc11001100_hook("argObj", animId, "assign");
      animId = cc11001100_hook("animId", argObj["animId"], "assign");
      animDuration = cc11001100_hook("animDuration", argObj["animDuration"], "assign");
    }
    if (animId) {
      animId = cc11001100_hook("animId", parseInt(animId, 10), "assign");
      if (isNaN(animId) || animId > 16 || animId < 0) {
        animId = cc11001100_hook("animId", -1, "assign");
      }
    }
    if (animDuration) {
      animDuration = cc11001100_hook("animDuration", parseInt(animDuration, 10), "assign");
      animDuration = cc11001100_hook("animDuration", isNaN(animDuration) ? "" : animDuration, "assign");
    }
    animDuration = cc11001100_hook("animDuration", animDuration || 300, "assign");
    uexWindow.close(animId, animDuration);
  }
  function evaluateScript(name, scriptContent, type) {
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("scriptContent", scriptContent, "function-parameter");
    cc11001100_hook("type", type, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(name)) {
      argObj = cc11001100_hook("argObj", name, "assign");
      name = cc11001100_hook("name", argObj["name"], "assign");
      type = cc11001100_hook("type", argObj["type"] || 0, "assign");
      scriptContent = cc11001100_hook("scriptContent", argObj["scriptContent"], "assign");
    }
    type = cc11001100_hook("type", type || 0, "assign");
    uexWindow.evaluateScript(name, type, scriptContent);
  }
  function evaluatePopoverScript(name, popName, scriptContent) {
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("popName", popName, "function-parameter");
    cc11001100_hook("scriptContent", scriptContent, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(name)) {
      argObj = cc11001100_hook("argObj", name, "assign");
      name = cc11001100_hook("name", argObj["name"], "assign");
      popName = cc11001100_hook("popName", argObj["popName"] || 0, "assign");
      scriptContent = cc11001100_hook("scriptContent", argObj["scriptContent"], "assign");
    }
    name = cc11001100_hook("name", name || "", "assign");
    if (!uap.isString(popName) || !popName) {
      return;
    }
    uexWindow.evaluatePopoverScript(name, popName, scriptContent);
  }
  function setBounce(bounceType, startPullCall, downEndCall, upEndCall, color, imgSettings) {
    cc11001100_hook("bounceType", bounceType, "function-parameter");
    cc11001100_hook("startPullCall", startPullCall, "function-parameter");
    cc11001100_hook("downEndCall", downEndCall, "function-parameter");
    cc11001100_hook("upEndCall", upEndCall, "function-parameter");
    cc11001100_hook("color", color, "function-parameter");
    cc11001100_hook("imgSettings", imgSettings, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(bounceType)) {
      argObj = cc11001100_hook("argObj", bounceType, "assign");
      bounceType = cc11001100_hook("bounceType", argObj["bounceType"] || "0", "assign");
      startPullCall = cc11001100_hook("startPullCall", argObj["startPullCall"], "assign");
      downEndCall = cc11001100_hook("downEndCall", argObj["downEndCall"], "assign");
      upEndCall = cc11001100_hook("upEndCall", argObj["upEndCall"], "assign");
      color = cc11001100_hook("color", argObj["color"] || "rgba(255,255,255,0)", "assign");
      imgSettings = cc11001100_hook("imgSettings", argObj["imgSettings"] || '{"imagePath":"res://reload.png",' + '"textColor":"#530606","pullToReloadText":"拖动刷新",' + '"releaseToReloadText":"释放刷新",' + '"loadingText":"加载中，请稍等"}', "assign");
    }
    color = cc11001100_hook("color", color || "rgba(255,255,255,0)", "assign");
    imgSettings = cc11001100_hook("imgSettings", imgSettings || '{"imagePath":"res://reload.png",' + '"textColor":"#530606","pullToReloadText":"拖动刷新",' + '"releaseToReloadText":"释放刷新",' + '"loadingText":"加载中，请稍等"}', "assign");
    var startBounce = cc11001100_hook("startBounce", 1, "var-init");
    uexWindow.onBounceStateChange = cc11001100_hook("uexWindow.onBounceStateChange", function (type, status) {
      if (status == 0) {
        startPullCall && startPullCall(type);
      }
      if (status == 1) {
        downEndCall && downEndCall(type);
      }
      if (status == 2) {
        upEndCall && upEndCall(type);
      }
    }, "assign");
    uexWindow.setBounce(startBounce);
    if (startPullCall || downEndCall || upEndCall) {
      if (!uap.isArray(bounceType)) {
        bounceType = cc11001100_hook("bounceType", [bounceType], "assign");
      }
      for (var i = cc11001100_hook("i", 0, "var-init"); i < bounceType.length; i++) {
        uexWindow.notifyBounceEvent(bounceType[i], "1");
        setBounceParams(bounceType[i], imgSettings);
        uexWindow.showBounceView(bounceType[i], color, "1");
      }
    }
  }
  var bounceStateQueue = cc11001100_hook("bounceStateQueue", [], "var-init");
  function processGetBounceStateQueue(data, dataType, opId) {
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("opId", opId, "function-parameter");
    if (bounceStateQueue.length > 0) {
      $.each(bounceStateQueue, function (i, v) {
        if (v && uap.isFunction(v)) {
          if (dataType == 2) {
            v(data, dataType, opId);
          }
        }
      });
    }
    bounceStateQueue = cc11001100_hook("bounceStateQueue", [], "assign");
    return;
  }
  function getBounceStatus(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    if (!uap.isFunction(callback)) {
      return;
    }
    bounceStateQueue.push(callback);
    uexWindow.cbBounceState = cc11001100_hook("uexWindow.cbBounceState", function (opId, dataType, data) {
      processGetBounceStateQueue(data, dataType, opId);
    }, "assign");
    uexWindow.getBounce();
  }
  function enableBounce() {
    uexWindow.setBounce(1);
  }
  function disableBounce() {
    uexWindow.setBounce(0);
  }
  function setBounceType(type, color, flag, callback) {
    cc11001100_hook("type", type, "function-parameter");
    cc11001100_hook("color", color, "function-parameter");
    cc11001100_hook("flag", flag, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(type)) {
      flag = cc11001100_hook("flag", type.flag, "assign");
      color = cc11001100_hook("color", type.color, "assign");
      callback = cc11001100_hook("callback", type.callback, "assign");
      type = cc11001100_hook("type", type.type, "assign");
    }
    flag = cc11001100_hook("flag", flag === void 0 ? 1 : flag, "assign");
    flag = cc11001100_hook("flag", parseInt(flag, 10), "assign");
    color = cc11001100_hook("color", color || "rgba(0,0,0,0)", "assign");
    type = cc11001100_hook("type", type === void 0 ? 0 : type, "assign");
    callback = cc11001100_hook("callback", callback || function () {}, "assign");
    enableBounce();
    uexWindow.showBounceView(type, color, flag);
    if (flag) {
      bounceCallQueue.push({
        type: cc11001100_hook("type", type, "object-key-init"),
        callback: cc11001100_hook("callback", callback, "object-key-init")
      });
      uexWindow.onBounceStateChange || (uexWindow.onBounceStateChange = cc11001100_hook("uexWindow.onBounceStateChange", function (backType, status) {
        var currCallObj = cc11001100_hook("currCallObj", null, "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", bounceCallQueue.length, "var-init"); i < len; i++) {
          currCallObj = cc11001100_hook("currCallObj", bounceCallQueue[i], "assign");
          if (currCallObj) {
            if (backType === currCallObj.type) {
              if (uap.isFunction(currCallObj.callback)) {
                currCallObj.callback(status, type);
              }
            }
          }
        }
      }, "assign"));
      uexWindow.notifyBounceEvent(type, 1);
    }
  }
  function setBounceParams(position, data) {
    cc11001100_hook("position", position, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(position)) {
      data = cc11001100_hook("data", position.data, "assign");
      position = cc11001100_hook("position", position.position, "assign");
    }
    if (uap.isPlainObject(data)) {
      data = cc11001100_hook("data", JSON.stringify(data), "assign");
    }
    uexWindow.setBounceParams(position, data);
  }
  function resetBounceView(position) {
    cc11001100_hook("position", position, "function-parameter");
    if (uap.isPlainObject(position)) {
      position = cc11001100_hook("position", position["position"], "assign");
    }
    position = cc11001100_hook("position", parseInt(position, 10), "assign");
    if (isNaN(position)) {
      position = cc11001100_hook("position", 0, "assign");
    } else {
      position = cc11001100_hook("position", position, "assign");
    }
    position = cc11001100_hook("position", position || 0, "assign");
    uexWindow.resetBounceView(position);
  }
  function openToast(msg, duration, position, type) {
    cc11001100_hook("msg", msg, "function-parameter");
    cc11001100_hook("duration", duration, "function-parameter");
    cc11001100_hook("position", position, "function-parameter");
    cc11001100_hook("type", type, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(msg)) {
      argObj = cc11001100_hook("argObj", msg, "assign");
      msg = cc11001100_hook("msg", argObj["msg"], "assign");
      duration = cc11001100_hook("duration", argObj["duration"], "assign");
      position = cc11001100_hook("position", argObj["position"] || 5, "assign");
      type = cc11001100_hook("type", argObj["type"], "assign");
    }
    type = cc11001100_hook("type", type || (type ? 0 : 1), "assign");
    duration = cc11001100_hook("duration", duration || 0, "assign");
    position = cc11001100_hook("position", position || 5, "assign");
    uexWindow.toast(type, position, msg, duration);
  }
  function closeToast() {
    uexWindow.closeToast();
  }
  function moveAnim(left, top, callback, duration) {
    cc11001100_hook("left", left, "function-parameter");
    cc11001100_hook("top", top, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    cc11001100_hook("duration", duration, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(left)) {
      argObj = cc11001100_hook("argObj", left, "assign");
      left = cc11001100_hook("left", argObj["left"] || 0, "assign");
      top = cc11001100_hook("top", argObj["top"] || 0, "assign");
      callback = cc11001100_hook("callback", argObj["callback"], "assign");
      duration = cc11001100_hook("duration", argObj["duration"] || 250, "assign");
    }
    left = cc11001100_hook("left", left || 0, "assign");
    top = cc11001100_hook("top", top || 0, "assign");
    duration = cc11001100_hook("duration", duration || 250, "assign");
    uexWindow.beginAnimition();
    uexWindow.setAnimitionDuration(duration);
    uexWindow.setAnimitionRepeatCount("0");
    uexWindow.setAnimitionAutoReverse("0");
    uexWindow.makeTranslation(left, top, "0");
    uexWindow.commitAnimition();
    if (uap.isFunction(callback)) {
      uexWindow.onAnimationFinish = cc11001100_hook("uexWindow.onAnimationFinish", callback, "assign");
    }
  }
  function alphaAnim(alpha, callback, duration) {
    cc11001100_hook("alpha", alpha, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    cc11001100_hook("duration", duration, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(alpha)) {
      argObj = cc11001100_hook("argObj", alpha, "assign");
      alpha = cc11001100_hook("alpha", argObj["alpha"] || .5, "assign");
      callback = cc11001100_hook("callback", argObj["callback"], "assign");
      duration = cc11001100_hook("duration", argObj["duration"] || 250, "assign");
    }
    alpha = cc11001100_hook("alpha", argObj["alpha"] || .5, "assign");
    duration = cc11001100_hook("duration", duration || 250, "assign");
    uexWindow.beginAnimition();
    uexWindow.setAnimitionDuration(duration);
    uexWindow.setAnimitionRepeatCount("0");
    uexWindow.setAnimitionAutoReverse("0");
    uexWindow.makeAlpha(alpha);
    uexWindow.commitAnimition();
    if (uap.isFunction(callback)) {
      uexWindow.onAnimationFinish = cc11001100_hook("uexWindow.onAnimationFinish", callback, "assign");
    }
  }
  function scaleAnim(x, y, z, callback, duration) {
    cc11001100_hook("x", x, "function-parameter");
    cc11001100_hook("y", y, "function-parameter");
    cc11001100_hook("z", z, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    cc11001100_hook("duration", duration, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(x)) {
      argObj = cc11001100_hook("argObj", x, "assign");
      x = cc11001100_hook("x", argObj["x"] || 1, "assign");
      y = cc11001100_hook("y", argObj["y"] || 1, "assign");
      z = cc11001100_hook("z", argObj["z"] || 1, "assign");
      duration = cc11001100_hook("duration", argObj["duration"] || 250, "assign");
      callback = cc11001100_hook("callback", argObj["callback"], "assign");
    }
    x = cc11001100_hook("x", x || 1, "assign");
    y = cc11001100_hook("y", y || 1, "assign");
    z = cc11001100_hook("z", z || 1, "assign");
    duration = cc11001100_hook("duration", duration || 250, "assign");
    uexWindow.beginAnimition();
    uexWindow.setAnimitionDuration(duration);
    uexWindow.setAnimitionRepeatCount("0");
    uexWindow.setAnimitionAutoReverse("0");
    uexWindow.makeScale(x, y, z);
    uexWindow.commitAnimition();
    if (uap.isFunction(callback)) {
      uexWindow.onAnimationFinish = cc11001100_hook("uexWindow.onAnimationFinish", callback, "assign");
    }
  }
  function rotateAnim(degrees, x, y, z, callback, duration) {
    cc11001100_hook("degrees", degrees, "function-parameter");
    cc11001100_hook("x", x, "function-parameter");
    cc11001100_hook("y", y, "function-parameter");
    cc11001100_hook("z", z, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    cc11001100_hook("duration", duration, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(degrees)) {
      argObj = cc11001100_hook("argObj", degrees, "assign");
      degrees = cc11001100_hook("degrees", argObj["degrees"], "assign");
      x = cc11001100_hook("x", argObj["x"] || 0, "assign");
      y = cc11001100_hook("y", argObj["y"] || 0, "assign");
      z = cc11001100_hook("z", argObj["z"] || 0, "assign");
      duration = cc11001100_hook("duration", argObj["duration"] || 250, "assign");
      callback = cc11001100_hook("callback", argObj["callback"], "assign");
    }
    x = cc11001100_hook("x", argObj["x"] || 0, "assign");
    y = cc11001100_hook("y", argObj["y"] || 0, "assign");
    z = cc11001100_hook("z", argObj["z"] || 0, "assign");
    duration = cc11001100_hook("duration", duration || 250, "assign");
    uexWindow.beginAnimition();
    uexWindow.setAnimitionDuration(duration);
    uexWindow.setAnimitionRepeatCount("0");
    uexWindow.setAnimitionAutoReverse("0");
    uexWindow.makeRotate(degrees, x, y, z);
    uexWindow.commitAnimition();
    if (uap.isFunction(callback)) {
      uexWindow.onAnimationFinish = cc11001100_hook("uexWindow.onAnimationFinish", callback, "assign");
    }
  }
  function customAnim(left, top, scaleX, scaleY, scaleZ, degrees, rotateX, rotateY, rotateZ, alpha, delay, curve, repeatCount, isReverse, callback, duration) {
    cc11001100_hook("left", left, "function-parameter");
    cc11001100_hook("top", top, "function-parameter");
    cc11001100_hook("scaleX", scaleX, "function-parameter");
    cc11001100_hook("scaleY", scaleY, "function-parameter");
    cc11001100_hook("scaleZ", scaleZ, "function-parameter");
    cc11001100_hook("degrees", degrees, "function-parameter");
    cc11001100_hook("rotateX", rotateX, "function-parameter");
    cc11001100_hook("rotateY", rotateY, "function-parameter");
    cc11001100_hook("rotateZ", rotateZ, "function-parameter");
    cc11001100_hook("alpha", alpha, "function-parameter");
    cc11001100_hook("delay", delay, "function-parameter");
    cc11001100_hook("curve", curve, "function-parameter");
    cc11001100_hook("repeatCount", repeatCount, "function-parameter");
    cc11001100_hook("isReverse", isReverse, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    cc11001100_hook("duration", duration, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(left)) {
      argObj = cc11001100_hook("argObj", left, "assign");
      left = cc11001100_hook("left", argObj["left"] || 0, "assign");
      top = cc11001100_hook("top", argObj["top"] || 0, "assign");
      scaleX = cc11001100_hook("scaleX", argObj["scaleX"] || 1, "assign");
      scaleY = cc11001100_hook("scaleY", argObj["scaleY"] || 1, "assign");
      scaleZ = cc11001100_hook("scaleZ", argObj["scaleZ"] || 1, "assign");
      degrees = cc11001100_hook("degrees", argObj["degrees"] || 0, "assign");
      rotateX = cc11001100_hook("rotateX", argObj["rotateX"] || 0, "assign");
      rotateY = cc11001100_hook("rotateY", argObj["rotateY"] || 0, "assign");
      rotateZ = cc11001100_hook("rotateZ", argObj["rotateZ"] || 0, "assign");
      alpha = cc11001100_hook("alpha", argObj["alpha"] || 0, "assign");
      delay = cc11001100_hook("delay", argObj["delay"] || 0, "assign");
      curve = cc11001100_hook("curve", argObj["curve"] || 0, "assign");
      repeatCount = cc11001100_hook("repeatCount", argObj["repeatCount"] || 0, "assign");
      isReverse = cc11001100_hook("isReverse", argObj["isReverse"] || 0, "assign");
      callback = cc11001100_hook("callback", argObj["callback"], "assign");
      duration = cc11001100_hook("duration", argObj["duration"] || 250, "assign");
    }
    left = cc11001100_hook("left", argObj["left"] || 0, "assign");
    top = cc11001100_hook("top", argObj["top"] || 0, "assign");
    scaleX = cc11001100_hook("scaleX", argObj["scaleX"] || 1, "assign");
    scaleY = cc11001100_hook("scaleY", argObj["scaleY"] || 1, "assign");
    scaleZ = cc11001100_hook("scaleZ", argObj["scaleZ"] || 1, "assign");
    degrees = cc11001100_hook("degrees", argObj["degrees"] || 0, "assign");
    rotateX = cc11001100_hook("rotateX", argObj["rotateX"] || 0, "assign");
    rotateY = cc11001100_hook("rotateY", argObj["rotateY"] || 0, "assign");
    rotateZ = cc11001100_hook("rotateZ", argObj["rotateZ"] || 0, "assign");
    alpha = cc11001100_hook("alpha", argObj["alpha"] || 0, "assign");
    delay = cc11001100_hook("delay", argObj["delay"] || 0, "assign");
    curve = cc11001100_hook("curve", argObj["curve"] || 0, "assign");
    repeatCount = cc11001100_hook("repeatCount", argObj["repeatCount"] || 0, "assign");
    isReverse = cc11001100_hook("isReverse", argObj["isReverse"] || 0, "assign");
    duration = cc11001100_hook("duration", duration || 250, "assign");
    uexWindow.beginAnimition();
    if (delay) {
      uexWindow.setAnimitionDelay(delay);
    }
    uexWindow.setAnimitionDuration(duration);
    uexWindow.setAnimitionCurve(curve);
    uexWindow.setAnimitionRepeatCount(repeatCount);
    uexWindow.setAnimitionAutoReverse(isReverse);
    if (Math.abs(left) + Math.abs(top)) {
      uexWindow.makeTranslation(left, top, "0");
    }
    if (!(scaleX == 1 && scaleY == 1 && scaleZ == 1)) {
      uexWindow.makeScale(scaleX, scaleY, scaleZ);
    }
    if (degrees && Math.abs(degrees) > 0 && parseInt(rotateX) + parseInt(rotateY) + parseInt(rotateZ) > 0) {
      uexWindow.makeRotate(degrees, rotateX, rotateY, rotateZ);
    }
    if (alpha) {
      uexWindow.makeAlpha(alpha);
    }
    uexWindow.commitAnimition();
    if (uap.isFunction(callback)) {
      uexWindow.onAnimationFinish = cc11001100_hook("uexWindow.onAnimationFinish", callback, "assign");
    }
  }
  function setWindowFrame(dx, dy, duration, callback) {
    cc11001100_hook("dx", dx, "function-parameter");
    cc11001100_hook("dy", dy, "function-parameter");
    cc11001100_hook("duration", duration, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(dx)) {
      argObj = cc11001100_hook("argObj", dx, "assign");
      dx = cc11001100_hook("dx", argObj["dx"] || 0, "assign");
      dy = cc11001100_hook("dy", argObj["dy"] || 0, "assign");
      duration = cc11001100_hook("duration", argObj["duration"] || 250, "assign");
      callback = cc11001100_hook("callback", argObj["callback"] || function () {}, "assign");
    }
    uexWindow.onSetWindowFrameFinish = cc11001100_hook("uexWindow.onSetWindowFrameFinish", callback, "assign");
    uexWindow.setWindowFrame(dx, dy, duration);
  }
  function popoverElement(id, url, left, top, name, extraInfo) {
    cc11001100_hook("id", id, "function-parameter");
    cc11001100_hook("url", url, "function-parameter");
    cc11001100_hook("left", left, "function-parameter");
    cc11001100_hook("top", top, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("extraInfo", extraInfo, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(id)) {
      argObj = cc11001100_hook("argObj", id, "assign");
      id = cc11001100_hook("id", argObj["id"] || 0, "assign");
      url = cc11001100_hook("url", argObj["url"], "assign");
      top = cc11001100_hook("top", argObj["top"], "assign");
      left = cc11001100_hook("left", argObj["left"], "assign");
      extraInfo = cc11001100_hook("extraInfo", argObj["extraInfo"], "assign");
      name = cc11001100_hook("name", argObj["name"], "assign");
    }
    top = cc11001100_hook("top", top || 0, "assign");
    left = cc11001100_hook("left", left || 0, "assign");
    var ele = cc11001100_hook("ele", $("#" + id), "var-init");
    var width = cc11001100_hook("width", ele.width(), "var-init");
    var height = cc11001100_hook("height", ele.height(), "var-init");
    var fontSize = cc11001100_hook("fontSize", ele.css("font-size"), "var-init");
    top = cc11001100_hook("top", parseInt(top, 10), "assign");
    top = cc11001100_hook("top", isNaN(top) ? ele.offset().top : top, "assign");
    left = cc11001100_hook("left", parseInt(left, 10), "assign");
    left = cc11001100_hook("left", isNaN(left) ? ele.offset().left : left, "assign");
    name = cc11001100_hook("name", name ? name : id, "assign");
    extraInfo = cc11001100_hook("extraInfo", extraInfo || "", "assign");
    fontSize = cc11001100_hook("fontSize", parseInt(fontSize, 10), "assign");
    fontSize = cc11001100_hook("fontSize", isNaN(fontSize) ? 0 : fontSize, "assign");
    openPopover(name, 0, url, "", left, top, width, height, fontSize, 0, 0, extraInfo);
  }
  function openPopover(name, dataType, url, data, left, top, width, height, fontSize, type, bottomMargin, extraInfo, position) {
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("url", url, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("left", left, "function-parameter");
    cc11001100_hook("top", top, "function-parameter");
    cc11001100_hook("width", width, "function-parameter");
    cc11001100_hook("height", height, "function-parameter");
    cc11001100_hook("fontSize", fontSize, "function-parameter");
    cc11001100_hook("type", type, "function-parameter");
    cc11001100_hook("bottomMargin", bottomMargin, "function-parameter");
    cc11001100_hook("extraInfo", extraInfo, "function-parameter");
    cc11001100_hook("position", position, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(name)) {
      argObj = cc11001100_hook("argObj", name, "assign");
      name = cc11001100_hook("name", argObj["name"], "assign");
      dataType = cc11001100_hook("dataType", argObj["dataType"], "assign");
      url = cc11001100_hook("url", argObj["url"], "assign");
      data = cc11001100_hook("data", argObj["data"], "assign");
      left = cc11001100_hook("left", argObj["left"], "assign");
      top = cc11001100_hook("top", argObj["top"], "assign");
      width = cc11001100_hook("width", argObj["width"], "assign");
      height = cc11001100_hook("height", argObj["height"], "assign");
      fontSize = cc11001100_hook("fontSize", argObj["fontSize"], "assign");
      type = cc11001100_hook("type", argObj["type"], "assign");
      bottomMargin = cc11001100_hook("bottomMargin", argObj["bottomMargin"], "assign");
      extraInfo = cc11001100_hook("extraInfo", argObj["extraInfo"], "assign");
      position = cc11001100_hook("position", argObj["position"], "assign");
    }
    dataType = cc11001100_hook("dataType", dataType || 0, "assign");
    left = cc11001100_hook("left", left || 0, "assign");
    top = cc11001100_hook("top", top || 0, "assign");
    height = cc11001100_hook("height", height || 0, "assign");
    width = cc11001100_hook("width", width || 0, "assign");
    type = cc11001100_hook("type", type || 0, "assign");
    bottomMargin = cc11001100_hook("bottomMargin", bottomMargin || 0, "assign");
    fontSize = cc11001100_hook("fontSize", fontSize || 0, "assign");
    data = cc11001100_hook("data", data || "", "assign");
    fontSize = cc11001100_hook("fontSize", parseInt(fontSize, 10), "assign");
    fontSize = cc11001100_hook("fontSize", isNaN(fontSize) ? 0 : fontSize, "assign");
    try {
      extraInfo = cc11001100_hook("extraInfo", uap.isString(extraInfo) ? extraInfo : JSON.stringify(extraInfo), "assign");
      extraInfo = cc11001100_hook("extraInfo", JSON.parse(extraInfo), "assign");
      if (!extraInfo.extraInfo) {
        extraInfo = cc11001100_hook("extraInfo", {
          extraInfo: cc11001100_hook("extraInfo", extraInfo, "object-key-init")
        }, "assign");
      }
      extraInfo = cc11001100_hook("extraInfo", JSON.stringify(extraInfo), "assign");
    } catch (e) {
      extraInfo = cc11001100_hook("extraInfo", extraInfo || "", "assign");
    }
    if (uexWidgetOne.platformName && uexWidgetOne.platformName.toLowerCase().indexOf("ios") > -1) {
      var args = cc11001100_hook("args", ['"' + name + '"', dataType, '"' + url + '"', '"' + data + '"', left, top, width, height, fontSize, type, bottomMargin, "'" + extraInfo + "'"], "var-init");
      var scriptContent = cc11001100_hook("scriptContent", "uexWindow.openPopover(" + args.join(",") + ")", "var-init");
      evaluateScript("", scriptContent);
      return;
    }
    uexWindow.openPopover(name, dataType, url, data, left, top, width, height, fontSize, type, bottomMargin, extraInfo, position);
  }
  function closePopover(name) {
    cc11001100_hook("name", name, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(name)) {
      name = cc11001100_hook("name", name["name"], "assign");
    }
    uexWindow.closePopover(name);
  }
  function resizePopoverByEle(id, left, top, name) {
    cc11001100_hook("id", id, "function-parameter");
    cc11001100_hook("left", left, "function-parameter");
    cc11001100_hook("top", top, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(id)) {
      argObj = cc11001100_hook("argObj", id, "assign");
      id = cc11001100_hook("id", argObj["id"], "assign");
      left = cc11001100_hook("left", argObj["left"], "assign");
      top = cc11001100_hook("top", argObj["top"], "assign");
      name = cc11001100_hook("name", argObj["name"], "assign");
    }
    left = cc11001100_hook("left", left || 0, "assign");
    top = cc11001100_hook("top", top || 0, "assign");
    var ele = cc11001100_hook("ele", $("#" + id), "var-init");
    var width = cc11001100_hook("width", ele.width(), "var-init");
    var height = cc11001100_hook("height", ele.height(), "var-init");
    left = cc11001100_hook("left", parseInt(left, 10), "assign");
    left = cc11001100_hook("left", isNaN(left) ? 0 : left, "assign");
    top = cc11001100_hook("top", parseInt(top, 10), "assign");
    top = cc11001100_hook("top", isNaN(top) ? 0 : top, "assign");
    name = cc11001100_hook("name", name ? name : id, "assign");
    uexWindow.setPopoverFrame(name, left, top, width, height);
  }
  function resizePopover(name, left, top, width, height) {
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("left", left, "function-parameter");
    cc11001100_hook("top", top, "function-parameter");
    cc11001100_hook("width", width, "function-parameter");
    cc11001100_hook("height", height, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(name)) {
      argObj = cc11001100_hook("argObj", name, "assign");
      name = cc11001100_hook("name", argObj["name"], "assign");
      left = cc11001100_hook("left", argObj["left"], "assign");
      top = cc11001100_hook("top", argObj["top"], "assign");
      width = cc11001100_hook("width", argObj["width"], "assign");
      height = cc11001100_hook("height", argObj["height"], "assign");
    }
    left = cc11001100_hook("left", left || 0, "assign");
    top = cc11001100_hook("top", top || 0, "assign");
    width = cc11001100_hook("width", width || 0, "assign");
    height = cc11001100_hook("height", height || 0, "assign");
    left = cc11001100_hook("left", parseInt(left, 10), "assign");
    left = cc11001100_hook("left", isNaN(left) ? 0 : left, "assign");
    top = cc11001100_hook("top", parseInt(top, 10), "assign");
    top = cc11001100_hook("top", isNaN(top) ? 0 : top, "assign");
    width = cc11001100_hook("width", parseInt(width, 10), "assign");
    width = cc11001100_hook("width", isNaN(width) ? 0 : width, "assign");
    height = cc11001100_hook("height", parseInt(height, 10), "assign");
    height = cc11001100_hook("height", isNaN(height) ? 0 : height, "assign");
    uexWindow.setPopoverFrame(name, left, top, width, height);
  }
  function windowConfirm(title, content, buttons, callback) {
    cc11001100_hook("title", title, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    cc11001100_hook("buttons", buttons, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(title)) {
      callback = cc11001100_hook("callback", title["callback"], "assign");
      buttons = cc11001100_hook("buttons", title["buttons"], "assign");
      content = cc11001100_hook("content", title["content"], "assign");
      title = cc11001100_hook("title", title["title"], "assign");
    }
    title = cc11001100_hook("title", title || "提示", "assign");
    buttons = cc11001100_hook("buttons", buttons || ["确定"], "assign");
    buttons = cc11001100_hook("buttons", uap.isArray(buttons) ? buttons : [buttons], "assign");
    popConfirm(title, content, buttons, callback);
  }
  function popAlert(title, content, buttons) {
    cc11001100_hook("title", title, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    cc11001100_hook("buttons", buttons, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(title)) {
      buttons = cc11001100_hook("buttons", title["buttons"], "assign");
      content = cc11001100_hook("content", title["content"], "assign");
      title = cc11001100_hook("title", title["title"], "assign");
    }
    buttons = cc11001100_hook("buttons", uap.isArray(buttons) ? buttons : [buttons], "assign");
    uexWindow.alert(title, content, buttons[0]);
  }
  var popConfirmCallQueue = cc11001100_hook("popConfirmCallQueue", [], "var-init");
  function processpopConfirmCallQueue(data, dataType, opId) {
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("opId", opId, "function-parameter");
    if (popConfirmCallQueue.length > 0) {
      $.each(popConfirmCallQueue, function (i, v) {
        if (v && uap.isFunction(v)) {
          if (dataType != 2) {
            return v(new Error("confirm error"));
          }
          v(null, data, dataType, opId);
        }
      });
    }
    popConfirmCallQueue = cc11001100_hook("popConfirmCallQueue", [], "assign");
    return;
  }
  function popConfirm(title, content, buttons, callback) {
    cc11001100_hook("title", title, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    cc11001100_hook("buttons", buttons, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(title)) {
      callback = cc11001100_hook("callback", title["callback"], "assign");
      buttons = cc11001100_hook("buttons", title["buttons"], "assign");
      content = cc11001100_hook("content", title["content"], "assign");
      title = cc11001100_hook("title", title["title"], "assign");
    }
    buttons = cc11001100_hook("buttons", uap.isArray(buttons) ? buttons : [buttons], "assign");
    if (uap.isFunction(callback)) {
      popConfirmCallQueue.push(callback);
      uexWindow.cbConfirm = cc11001100_hook("uexWindow.cbConfirm", function (optId, dataType, data) {
        processpopConfirmCallQueue(data, dataType, optId);
      }, "assign");
    }
    uexWindow.confirm(title, content, buttons);
  }
  function popPrompt(title, content, defaultValue, buttons, callback) {
    cc11001100_hook("title", title, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    cc11001100_hook("defaultValue", defaultValue, "function-parameter");
    cc11001100_hook("buttons", buttons, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(title)) {
      callback = cc11001100_hook("callback", title["callback"], "assign");
      buttons = cc11001100_hook("buttons", title["buttons"], "assign");
      content = cc11001100_hook("content", title["content"], "assign");
      defaultValue = cc11001100_hook("defaultValue", title["defaultValue"], "assign");
      title = cc11001100_hook("title", title["title"], "assign");
    }
    buttons = cc11001100_hook("buttons", uap.isArray(buttons) ? buttons : [buttons], "assign");
    if (uap.isFunction(callback)) {
      uexWindow.cbPrompt = cc11001100_hook("uexWindow.cbPrompt", function (optId, dataType, data) {
        try {
          var data = cc11001100_hook("data", JSON.parse(data), "var-init");
          callback(null, data, dataType, optId);
        } catch (e) {
          callback(e);
        }
      }, "assign");
    }
    uexWindow.prompt(title, content, defaultValue, buttons);
  }
  function bringPopoverToFront(name) {
    cc11001100_hook("name", name, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(name)) {
      name = cc11001100_hook("name", name["name"], "assign");
    }
    if (!name) {
      uexWindow.bringToFront();
    } else {
      uexWindow.bringPopoverToFront(name);
    }
  }
  function sendPopoverToBack(name) {
    cc11001100_hook("name", name, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(name)) {
      name = cc11001100_hook("name", name["name"], "assign");
    }
    if (!name) {
      uexWindow.sendToBack();
    } else {
      uexWindow.sendPopoverToBack(name);
    }
  }
  function subscribe(channelId, callback) {
    cc11001100_hook("channelId", channelId, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(channelId)) {
      callback = cc11001100_hook("callback", channelId["callback"], "assign");
      channelId = cc11001100_hook("channelId", channelId["channelId"], "assign");
    }
    if (!uap.isFunction(callback)) {
      return;
    }
    var funName = cc11001100_hook("funName", "notify_callback_" + uap.getUID(), "var-init");
    uexWindow[funName] = cc11001100_hook("uexWindow[funName]", callback, "assign");
    uexWindow.subscribeChannelNotification(channelId, funName);
  }
  function publish(channelId, msg) {
    cc11001100_hook("channelId", channelId, "function-parameter");
    cc11001100_hook("msg", msg, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(channelId)) {
      msg = cc11001100_hook("msg", channelId["msg"], "assign");
      channelId = cc11001100_hook("channelId", channelId["channelId"], "assign");
    }
    if (uap.isPlainObject(msg)) {
      msg = cc11001100_hook("msg", JSON.stringify(msg), "assign");
    }
    uexWindow.publishChannelNotification(channelId, msg);
  }
  function publishGlobal(msg) {
    cc11001100_hook("msg", msg, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(msg)) {
      msg = cc11001100_hook("msg", msg["msg"], "assign");
    }
    uexWindow.postGlobalNotification(msg);
  }
  function processSubscribeGolbalQueue(msg) {
    cc11001100_hook("msg", msg, "function-parameter");
    if (subscribeGlobslQueue.length > 0) {
      $.each(subscribeGlobslQueue, function (i, v) {
        if (v && uap.isFunction(v)) {
          v(msg);
        }
      });
    }
    return;
  }
  function subscribeGlobal(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    if (!uap.isFunction(callback)) {
      return;
    }
    subscribeGlobslQueue.push(callback);
    uexWindow.onGlobalNotification = cc11001100_hook("uexWindow.onGlobalNotification", function (msg) {
      processSubscribeGolbalQueue(msg);
    }, "assign");
  }
  function removeGlobalSubscribe(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    if (!uap.isFunction(callback)) {
      return;
    }
    for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", subscribeGlobslQueue.length, "var-init"); i < len; i++) {
      if (subscribeGlobslQueue[i] === callback) {
        subscribeGlobslQueue.splice(i, 1);
        return;
      }
    }
  }
  function processMultiPopover(err, res) {
    cc11001100_hook("err", err, "function-parameter");
    cc11001100_hook("res", res, "function-parameter");
    if (err) {} else {
      if (uap.isString(res)) {
        res = cc11001100_hook("res", JSON.parse(res), "assign");
      }
      if (!res.multiPopName) {
        return;
      }
      var multiCalls = cc11001100_hook("multiCalls", multiPopoverQueue[res.multiPopName], "var-init");
      $.each(multiCalls, function (i, fun) {
        if (uap.isFunction(fun)) {
          fun(null, res);
        }
      });
    }
  }
  function openMultiPopover(popName, content, dataType, left, top, width, height, change, fontSize, flag, indexSelected, extraInfo) {
    cc11001100_hook("popName", popName, "function-parameter");
    cc11001100_hook("content", content, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("left", left, "function-parameter");
    cc11001100_hook("top", top, "function-parameter");
    cc11001100_hook("width", width, "function-parameter");
    cc11001100_hook("height", height, "function-parameter");
    cc11001100_hook("change", change, "function-parameter");
    cc11001100_hook("fontSize", fontSize, "function-parameter");
    cc11001100_hook("flag", flag, "function-parameter");
    cc11001100_hook("indexSelected", indexSelected, "function-parameter");
    cc11001100_hook("extraInfo", extraInfo, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(popName)) {
      indexSelected = cc11001100_hook("indexSelected", popName["indexSelected"], "assign");
      flag = cc11001100_hook("flag", popName["flag"], "assign");
      fontSize = cc11001100_hook("fontSize", popName["fontSize"], "assign");
      change = cc11001100_hook("change", popName["change"], "assign");
      height = cc11001100_hook("height", popName["height"], "assign");
      width = cc11001100_hook("width", popName["width"], "assign");
      top = cc11001100_hook("top", popName["top"], "assign");
      left = cc11001100_hook("left", popName["left"], "assign");
      dataType = cc11001100_hook("dataType", popName["dataType"], "assign");
      content = cc11001100_hook("content", popName["content"], "assign");
      extraInfo = cc11001100_hook("extraInfo", popName["extraInfo"], "assign");
      popName = cc11001100_hook("popName", popName["popName"], "assign");
    }
    dataType = cc11001100_hook("dataType", dataType || 0, "assign");
    flag = cc11001100_hook("flag", flag || 0, "assign");
    indexSelected = cc11001100_hook("indexSelected", parseInt(indexSelected, 10), "assign");
    indexSelected = cc11001100_hook("indexSelected", isNaN(indexSelected) ? 0 : indexSelected, "assign");
    width = cc11001100_hook("width", width || "", "assign");
    height = cc11001100_hook("height", height || "", "assign");
    change = cc11001100_hook("change", change || function () {}, "assign");
    try {
      extraInfo = cc11001100_hook("extraInfo", uap.isString(extraInfo) ? extraInfo : JSON.stringify(extraInfo), "assign");
      extraInfo = cc11001100_hook("extraInfo", JSON.parse(extraInfo), "assign");
      if (!extraInfo.extraInfo) {
        extraInfo = cc11001100_hook("extraInfo", {
          extraInfo: cc11001100_hook("extraInfo", extraInfo, "object-key-init")
        }, "assign");
      }
      extraInfo = cc11001100_hook("extraInfo", JSON.stringify(extraInfo), "assign");
    } catch (e) {
      extraInfo = cc11001100_hook("extraInfo", extraInfo || "", "assign");
    }
    if (!uap.isString(content)) {
      if (!content.content) {
        content = cc11001100_hook("content", {
          content: cc11001100_hook("content", content, "object-key-init")
        }, "assign");
      }
    } else {
      content = cc11001100_hook("content", JSON.parse(content), "assign");
      if (!content.content) {
        content = cc11001100_hook("content", {
          content: cc11001100_hook("content", content, "object-key-init")
        }, "assign");
      }
    }
    var mustKey = cc11001100_hook("mustKey", ["inPageName", "inUrl", "inData"], "var-init");
    var realContent = cc11001100_hook("realContent", content.content, "var-init");
    $.each(realContent, function (i, v) {
      $.each(mustKey, function (i1, v1) {
        if (!(v1 in v)) {
          v[v1] = cc11001100_hook("v[v1]", "", "assign");
        }
      });
    });
    content = cc11001100_hook("content", JSON.stringify(content), "assign");
    if (multiPopoverQueue[popName]) {
      multiPopoverQueue[popName].push(change);
    } else {
      multiPopoverQueue[popName] = cc11001100_hook("multiPopoverQueue[popName]", [change], "assign");
    }
    uexWindow.openMultiPopover(content, popName, dataType, left, top, width, height, fontSize, flag, indexSelected, extraInfo);
    uexWindow.cbOpenMultiPopover = cc11001100_hook("uexWindow.cbOpenMultiPopover", function (optId, dataType, res) {
      if (optId == 0) {
        if (dataType != 1) {
          processMultiPopover(new Error("multi popover error"));
        } else {
          processMultiPopover(null, res);
        }
      }
    }, "assign");
    setSelectedPopOverInMultiWindow(popName, indexSelected);
  }
  function closeMultiPopover(popName) {
    cc11001100_hook("popName", popName, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(popName)) {
      popName = cc11001100_hook("popName", popName["popName"], "assign");
    }
    if (!popName) {
      return;
    }
    uexWindow.closeMultiPopover(popName);
  }
  function setSelectedPopOverInMultiWindow(popName, index) {
    cc11001100_hook("popName", popName, "function-parameter");
    cc11001100_hook("index", index, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(popName)) {
      index = cc11001100_hook("index", popName["index"], "assign");
      popName = cc11001100_hook("popName", popName["popName"], "assign");
    }
    if (!popName) {
      return;
    }
    index = cc11001100_hook("index", parseInt(index, 10), "assign");
    index = cc11001100_hook("index", isNaN(index) ? 0 : index, "assign");
    uexWindow.setSelectedPopOverInMultiWindow && uexWindow.setSelectedPopOverInMultiWindow(popName, index);
  }
  var windowStatusCallList = cc11001100_hook("windowStatusCallList", [], "var-init");
  function processWindowStateChange(state) {
    cc11001100_hook("state", state, "function-parameter");
    $.each(windowStatusCallList, function (i, v) {
      if (uap.isFunction(v)) {
        v(state);
      }
    });
  }
  function onStateChange(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (!uap.isFunction(callback)) {
      return;
    }
    windowStatusCallList.push(callback);
    uexWindow.onStateChange = cc11001100_hook("uexWindow.onStateChange", processWindowStateChange, "assign");
  }
  function defaultStatusChange(state) {
    cc11001100_hook("state", state, "function-parameter");
    var tmpResumeCall = cc11001100_hook("tmpResumeCall", null, "var-init");
    var tmpPauseCall = cc11001100_hook("tmpPauseCall", null, "var-init");
    if (uap.window.onResume) {
      tmpResumeCall = cc11001100_hook("tmpResumeCall", uap.window.onResume, "assign");
    }
    if (uap.window.onPause) {
      tmpPauseCall = cc11001100_hook("tmpPauseCall", uap.window.onPause, "assign");
    }
    if (state === 0) {
      uapWindow.emit("resume");
      tmpResumeCall && tmpResumeCall();
    }
    if (state === 1) {
      uapWindow.emit("pause");
      tmpPauseCall && tmpPauseCall();
    }
  }
  var swipeCallbackList = cc11001100_hook("swipeCallbackList", {
    left: cc11001100_hook("left", [], "object-key-init"),
    right: cc11001100_hook("right", [], "object-key-init")
  }, "var-init");
  function processSwipeLeft() {
    $.each(swipeCallbackList.left, function (i, v) {
      if (uap.isFunction(v)) {
        v();
      }
    });
  }
  function processSwipeRight() {
    $.each(swipeCallbackList.right, function (i, v) {
      if (uap.isFunction(v)) {
        v();
      }
    });
  }
  function onSwipe(direction, callback) {
    cc11001100_hook("direction", direction, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (direction === "left") {
      swipeCallbackList[direction].push(callback);
      uexWindow.onSwipeLeft = cc11001100_hook("uexWindow.onSwipeLeft", processSwipeLeft, "assign");
      return;
    }
    if (direction === "right") {
      swipeCallbackList[direction].push(callback);
      uexWindow.onSwipeRight = cc11001100_hook("uexWindow.onSwipeRight", processSwipeRight, "assign");
      return;
    }
  }
  function onSwipeLeft(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (!uap.isFunction(callback)) {
      return;
    }
    onSwipe("left", callback);
  }
  function onSwipeRight(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (!uap.isFunction(callback)) {
      return;
    }
    onSwipe("right", callback);
  }
  function defaultSwipeLeft() {
    var tmpSwipeLeftCall = cc11001100_hook("tmpSwipeLeftCall", null, "var-init");
    var tmpFrameSLCall = cc11001100_hook("tmpFrameSLCall", null, "var-init");
    if (uap.window.onSwipeLeft) {
      tmpSwipeLeftCall = cc11001100_hook("tmpSwipeLeftCall", uap.window.onSwipeLeft, "assign");
    }
    if (uap.frame.onSwipeLeft) {
      tmpFrameSLCall = cc11001100_hook("tmpFrameSLCall", uap.frame.onSwipeLeft, "assign");
    }
    uapWindow.emit("swipeLeft");
    uap.frame && uap.frame.emit && uap.frame.emit("swipeLeft");
    tmpSwipeLeftCall && tmpSwipeLeftCall();
    tmpFrameSLCall && tmpFrameSLCall();
  }
  function defaultSwipeRight() {
    var tmpSwipeRightCall = cc11001100_hook("tmpSwipeRightCall", null, "var-init");
    var tmpFrameSRCall = cc11001100_hook("tmpFrameSRCall", null, "var-init");
    if (uap.window.onSwipeRight) {
      tmpSwipeRightCall = cc11001100_hook("tmpSwipeRightCall", uap.window.onSwipeRight, "assign");
    }
    if (uap.frame.onSwipeRight) {
      tmpFrameSRCall = cc11001100_hook("tmpFrameSRCall", uap.frame.onSwipeRight, "assign");
    }
    uapWindow.emit("swipeRight");
    uap.frame && uap.frame.emit && uap.frame.emit("swipeRight");
    tmpSwipeRightCall && tmpSwipeRightCall();
    tmpFrameSRCall && tmpFrameSRCall();
  }
  function setMultilPopoverFlippingEnbaled(enable) {
    cc11001100_hook("enable", enable, "function-parameter");
    var enable = cc11001100_hook("enable", parseInt(enable, 10), "var-init");
    enable = cc11001100_hook("enable", isNaN(enable) ? 0 : enable, "assign");
    enable = cc11001100_hook("enable", enable != 1 ? 0 : enable, "assign");
    uexWindow.setMultilPopoverFlippingEnbaled(enable);
  }
  var popActionSheetCallQueue = cc11001100_hook("popActionSheetCallQueue", [], "var-init");
  function processpopActionSheetCallQueue(data, dataType, opId) {
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("opId", opId, "function-parameter");
    if (popActionSheetCallQueue.length > 0) {
      $.each(popActionSheetCallQueue, function (i, v) {
        if (v && uap.isFunction(v)) {
          if (dataType != 2) {
            return v(new Error(" error"));
          }
          v(null, data, dataType, opId);
        }
      });
    }
    popActionSheetCallQueue = cc11001100_hook("popActionSheetCallQueue", [], "assign");
    return;
  }
  function popActionSheet(title, cancelText, buttons, callback) {
    cc11001100_hook("title", title, "function-parameter");
    cc11001100_hook("cancelText", cancelText, "function-parameter");
    cc11001100_hook("buttons", buttons, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(title)) {
      callback = cc11001100_hook("callback", title["callback"], "assign");
      buttons = cc11001100_hook("buttons", title["buttons"], "assign");
      cancelText = cc11001100_hook("cancelText", title["cancelText"], "assign");
      title = cc11001100_hook("title", title["title"], "assign");
    }
    buttons = cc11001100_hook("buttons", uap.isArray(buttons) ? buttons : [buttons], "assign");
    if (uap.isFunction(callback)) {
      uexWindow.cbActionSheet = cc11001100_hook("uexWindow.cbActionSheet", function (opId, dataType, data) {
        popActionSheetCallQueue.push(callback);
        processpopActionSheetCallQueue(data, dataType, opId);
      }, "assign");
    }
    uexWindow.actionSheet(title, cancelText, buttons);
  }
  function setSlidingWindow(leftSliding, rightSliding, animationId, bg) {
    cc11001100_hook("leftSliding", leftSliding, "function-parameter");
    cc11001100_hook("rightSliding", rightSliding, "function-parameter");
    cc11001100_hook("animationId", animationId, "function-parameter");
    cc11001100_hook("bg", bg, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(leftSliding)) {
      argObj = cc11001100_hook("argObj", JSON.stringify(leftSliding), "assign");
    } else {
      argObj = cc11001100_hook("argObj", {}, "assign");
      if (uap.isPlainObject(leftSliding)) {
        argObj.leftSliding = cc11001100_hook("argObj.leftSliding", leftSliding, "assign");
      } else {
        argObj.leftSliding = cc11001100_hook("argObj.leftSliding", JSON.parse(leftSliding), "assign");
      }
      if (uap.isPlainObject(rightSliding)) {
        argObj.rightSliding = cc11001100_hook("argObj.rightSliding", rightSliding, "assign");
      } else {
        argObj.rightSliding = cc11001100_hook("argObj.rightSliding", JSON.parse(rightSliding), "assign");
      }
      argObj.animationId = cc11001100_hook("argObj.animationId", animationId || "1", "assign");
      argObj.bg = cc11001100_hook("argObj.bg", bg || "", "assign");
      argObj = cc11001100_hook("argObj", JSON.stringify(argObj), "assign");
    }
    uexWindow.setSlidingWindow(argObj);
  }
  function toggleSlidingWindow(mark, reload) {
    cc11001100_hook("mark", mark, "function-parameter");
    cc11001100_hook("reload", reload, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (!uap.isPlainObject(mark) && !JSON.parse(mark)) {
      argObj = cc11001100_hook("argObj", {}, "assign");
      argObj.mark = cc11001100_hook("argObj.mark", mark, "assign");
      if (reload) argObj.reload = cc11001100_hook("argObj.reload", reload, "assign");
    } else {
      argObj = cc11001100_hook("argObj", mark, "assign");
    }
    if (uap.isPlainObject(argObj)) {
      argObj = cc11001100_hook("argObj", JSON.stringify(argObj), "assign");
    }
    uexWindow.toggleSlidingWindow(argObj);
  }
  function setSlidingWindowEnabled(enable) {
    cc11001100_hook("enable", enable, "function-parameter");
    var enable = cc11001100_hook("enable", parseInt(enable, 10), "var-init");
    enable = cc11001100_hook("enable", isNaN(enable) ? 0 : enable, "assign");
    enable = cc11001100_hook("enable", enable != 0 ? 1 : enable, "assign");
    uexWindow.setSlidingWindowEnabled(enable);
  }
  var urlQueryQueue = cc11001100_hook("urlQueryQueue", [], "var-init");
  function processGetUrlQueryQueue(data, dataType, opId) {
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("opId", opId, "function-parameter");
    if (urlQueryQueue.length > 0) {
      $.each(urlQueryQueue, function (i, v) {
        if (v && uap.isFunction(v)) {
          v(data, dataType, opId);
        }
      });
    }
    urlQueryQueue = cc11001100_hook("urlQueryQueue", [], "assign");
    return;
  }
  function getUrlQuery(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    if (!uap.isFunction(callback)) {
      return;
    }
    urlQueryQueue = cc11001100_hook("urlQueryQueue", urlQueryQueue || [], "assign"), urlQueryQueue.push(callback);
    uexWindow.cbGetUrlQuery = cc11001100_hook("uexWindow.cbGetUrlQuery", function (opId, dataType, data) {
      processGetUrlQueryQueue(data, dataType, opId);
    }, "assign");
    uexWindow.getUrlQuery();
  }
  var slidingWindowStateQueue = cc11001100_hook("slidingWindowStateQueue", [], "var-init");
  function processSlidingWindowStateQueue(state) {
    cc11001100_hook("state", state, "function-parameter");
    if (slidingWindowStateQueue.length > 0) {
      $.each(slidingWindowStateQueue, function (i, v) {
        if (v && uap.isFunction(v)) {
          v(state);
        }
      });
    }
    slidingWindowStateQueue = cc11001100_hook("slidingWindowStateQueue", [], "assign");
    return;
  }
  function getSlidingWindowState(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    if (!uap.isFunction(callback)) {
      return;
    }
    slidingWindowStateQueue = cc11001100_hook("slidingWindowStateQueue", slidingWindowStateQueue || [], "assign");
    slidingWindowStateQueue.push(callback);
    uexWindow.cbSlidingWindowState = cc11001100_hook("uexWindow.cbSlidingWindowState", function (state) {
      processSlidingWindowStateQueue(state);
    }, "assign");
    uexWindow.getSlidingWindowState();
  }
  function setStatusBarTitleColor(type) {
    cc11001100_hook("type", type, "function-parameter");
    var type = cc11001100_hook("type", parseInt(type, 10), "var-init");
    type = cc11001100_hook("type", isNaN(type) ? 0 : type, "assign");
    type = cc11001100_hook("type", type != 0 ? 1 : type, "assign");
    uexWindow.setStatusBarTitleColor(type);
  }
  function windowForward(animId, animDuration) {
    cc11001100_hook("animId", animId, "function-parameter");
    cc11001100_hook("animDuration", animDuration, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(animId)) {
      argObj = cc11001100_hook("argObj", animId, "assign");
      animId = cc11001100_hook("animId", argObj["animId"], "assign");
      animDuration = cc11001100_hook("animDuration", argObj["animDuration"], "assign");
    }
    if (animId) {
      animId = cc11001100_hook("animId", parseInt(animId, 10), "assign");
      if (isNaN(animId) || animId > 16 || animId < 0) {
        animId = cc11001100_hook("animId", 0, "assign");
      }
    }
    if (animDuration) {
      animDuration = cc11001100_hook("animDuration", parseInt(animDuration, 10), "assign");
      animDuration = cc11001100_hook("animDuration", isNaN(animDuration) ? "" : animDuration, "assign");
    }
    animDuration = cc11001100_hook("animDuration", animDuration || 260, "assign");
    uexWindow.windowForward(animId, animDuration);
  }
  function windowBack(animId, animDuration) {
    cc11001100_hook("animId", animId, "function-parameter");
    cc11001100_hook("animDuration", animDuration, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(animId)) {
      argObj = cc11001100_hook("argObj", animId, "assign");
      animId = cc11001100_hook("animId", argObj["animId"], "assign");
      animDuration = cc11001100_hook("animDuration", argObj["animDuration"], "assign");
    }
    if (animId) {
      animId = cc11001100_hook("animId", parseInt(animId, 10), "assign");
      if (isNaN(animId) || animId > 16 || animId < 0) {
        animId = cc11001100_hook("animId", 0, "assign");
      }
    }
    if (animDuration) {
      animDuration = cc11001100_hook("animDuration", parseInt(animDuration, 10), "assign");
      animDuration = cc11001100_hook("animDuration", isNaN(animDuration) ? "" : animDuration, "assign");
    }
    animDuration = cc11001100_hook("animDuration", animDuration || 260, "assign");
    uexWindow.windowBack(animId, animDuration);
  }
  function preOpenStart() {
    uexWindow.preOpenStart();
  }
  function preOpenFinish() {
    uexWindow.preOpenFinish();
  }
  var stateQueue = cc11001100_hook("stateQueue", [], "var-init");
  function processGetStateQueue(data, dataType, opId) {
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("opId", opId, "function-parameter");
    if (stateQueue.length > 0) {
      $.each(stateQueue, function (i, v) {
        if (v && uap.isFunction(v)) {
          v(null, data, dataType, opId);
        }
      });
    }
    stateQueue = cc11001100_hook("stateQueue", [], "assign");
    return;
  }
  function getState(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    if (!uap.isFunction(callback)) {
      return;
    }
    stateQueue.push(callback);
    try {
      uexWindow.cbGetState = cc11001100_hook("uexWindow.cbGetState", function (opId, dataType, data) {
        processGetStateQueue(data, dataType, opId);
      }, "assign");
    } catch (e) {
      callback(e);
    }
    uexWindow.getState();
  }
  function statusBarNotification(title, msg) {
    cc11001100_hook("title", title, "function-parameter");
    cc11001100_hook("msg", msg, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(title)) {
      argObj = cc11001100_hook("argObj", title, "assign");
      title = cc11001100_hook("title", argObj["title"] || "", "assign");
      msg = cc11001100_hook("msg", argObj["msg"] || "", "assign");
    }
    title = cc11001100_hook("title", title || "", "assign");
    msg = cc11001100_hook("msg", msg || "", "assign");
    if (msg == "") {
      return;
    }
    uexWindow.statusBarNotification(title, msg);
  }
  function setWindowScrollbarVisible(enable) {
    cc11001100_hook("enable", enable, "function-parameter");
    var enable = cc11001100_hook("enable", parseInt(enable, 10), "var-init");
    enable = cc11001100_hook("enable", isNaN(enable) ? 0 : enable, "assign");
    enable = cc11001100_hook("enable", enable != 0 ? "true" : "false", "assign");
    uexWindow.setWindowScrollbarVisible(enable);
  }
  function hiddenBounceView(type) {
    cc11001100_hook("type", type, "function-parameter");
    type = cc11001100_hook("type", type != 1 ? 0 : type, "assign");
    uexWindow.hiddenBounceView(type);
  }
  function showBounceView(type, color, flag) {
    cc11001100_hook("type", type, "function-parameter");
    cc11001100_hook("color", color, "function-parameter");
    cc11001100_hook("flag", flag, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(type)) {
      argObj = cc11001100_hook("argObj", type, "assign");
      type = cc11001100_hook("type", argObj["type"] || 0, "assign");
      color = cc11001100_hook("color", argObj["color"], "assign");
      flag = cc11001100_hook("flag", argObj["flag"] || 1, "assign");
    }
    type = cc11001100_hook("type", type || 0, "assign");
    flag = cc11001100_hook("flag", flag || 1, "assign");
    uexWindow.showBounceView(type, color, flag);
  }
  function insertAbove(name) {
    cc11001100_hook("name", name, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(name)) {
      name = cc11001100_hook("name", name["name"], "assign");
    }
    if (!name) {
      return;
    }
    uexWindow.insertAbove(name);
  }
  function insertBelow(name) {
    cc11001100_hook("name", name, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(name)) {
      name = cc11001100_hook("name", name["name"], "assign");
    }
    if (!name) {
      return;
    }
    uexWindow.insertBelow(name);
  }
  function insertPopoverAbovePopover(nameA, nameB) {
    cc11001100_hook("nameA", nameA, "function-parameter");
    cc11001100_hook("nameB", nameB, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(nameA)) {
      argObj = cc11001100_hook("argObj", nameA, "assign");
      nameA = cc11001100_hook("nameA", argObj["nameA"], "assign");
      nameB = cc11001100_hook("nameB", argObj["nameB"], "assign");
    }
    if (!nameA || !nameB) {
      return;
    }
    uexWindow.insertPopoverAbovePopover(nameA, nameB);
  }
  function insertPopoverBelowPopover(nameA, nameB) {
    cc11001100_hook("nameA", nameA, "function-parameter");
    cc11001100_hook("nameB", nameB, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(nameA)) {
      argObj = cc11001100_hook("argObj", nameA, "assign");
      nameA = cc11001100_hook("nameA", argObj["nameA"], "assign");
      nameB = cc11001100_hook("nameB", argObj["nameB"], "assign");
    }
    if (!nameA || !nameB) {
      return;
    }
    uexWindow.insertPopoverBelowPopover(nameA, nameB);
  }
  function setWindowHidden(type) {
    cc11001100_hook("type", type, "function-parameter");
    type = cc11001100_hook("type", type != 1 ? 0 : type, "assign");
    uexWindow.setWindowHidden(type);
  }
  function insertWindowAboveWindow(nameA, nameB) {
    cc11001100_hook("nameA", nameA, "function-parameter");
    cc11001100_hook("nameB", nameB, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(nameA)) {
      argObj = cc11001100_hook("argObj", nameA, "assign");
      nameA = cc11001100_hook("nameA", argObj["nameA"], "assign");
      nameB = cc11001100_hook("nameB", argObj["nameB"], "assign");
    }
    if (!nameA || !nameB) {
      return;
    }
    uexWindow.insertWindowAboveWindow(nameA, nameB);
  }
  function insertWindowBelowWindow(nameA, nameB) {
    cc11001100_hook("nameA", nameA, "function-parameter");
    cc11001100_hook("nameB", nameB, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(nameA)) {
      argObj = cc11001100_hook("argObj", nameA, "assign");
      nameA = cc11001100_hook("nameA", argObj["nameA"], "assign");
      nameB = cc11001100_hook("nameB", argObj["nameB"], "assign");
    }
    if (!nameA || !nameB) {
      return;
    }
    uexWindow.insertWindowBelowWindow(nameA, nameB);
  }
  var popoverLoadFinishInRootWndCallList = cc11001100_hook("popoverLoadFinishInRootWndCallList", [], "var-init");
  function processPopoverLoadFinishInRootWnd(name, url) {
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("url", url, "function-parameter");
    $.each(popoverLoadFinishInRootWndCallList, function (i, v) {
      if (uap.isFunction(v)) {
        v(name, url);
      }
    });
    popoverLoadFinishInRootWndCallList = cc11001100_hook("popoverLoadFinishInRootWndCallList", [], "assign");
    return;
  }
  function onPopoverLoadFinishInRootWnd(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (!uap.isFunction(callback)) {
      return;
    }
    popoverLoadFinishInRootWndCallList.push(callback);
    uexWindow.onPopoverLoadFinishInRootWnd = cc11001100_hook("uexWindow.onPopoverLoadFinishInRootWnd", processPopoverLoadFinishInRootWnd, "assign");
  }
  uap.ready(function () {
    onStateChange(defaultStatusChange);
    onSwipeLeft(defaultSwipeLeft);
    onSwipeRight(defaultSwipeRight);
  });
  var uapWindow = cc11001100_hook("uapWindow", module.exports = cc11001100_hook("module.exports", {
    open: cc11001100_hook("open", open, "object-key-init"),
    close: cc11001100_hook("close", close, "object-key-init"),
    evaluateScript: cc11001100_hook("evaluateScript", evaluateScript, "object-key-init"),
    evaluatePopoverScript: cc11001100_hook("evaluatePopoverScript", evaluatePopoverScript, "object-key-init"),
    setBounce: cc11001100_hook("setBounce", setBounce, "object-key-init"),
    setBounceParams: cc11001100_hook("setBounceParams", setBounceParams, "object-key-init"),
    enableBounce: cc11001100_hook("enableBounce", enableBounce, "object-key-init"),
    disableBounce: cc11001100_hook("disableBounce", disableBounce, "object-key-init"),
    setBounceType: cc11001100_hook("setBounceType", setBounceType, "object-key-init"),
    resetBounceView: cc11001100_hook("resetBounceView", resetBounceView, "object-key-init"),
    openToast: cc11001100_hook("openToast", openToast, "object-key-init"),
    closeToast: cc11001100_hook("closeToast", closeToast, "object-key-init"),
    moveAnim: cc11001100_hook("moveAnim", moveAnim, "object-key-init"),
    popoverElement: cc11001100_hook("popoverElement", popoverElement, "object-key-init"),
    openPopover: cc11001100_hook("openPopover", openPopover, "object-key-init"),
    closePopover: cc11001100_hook("closePopover", closePopover, "object-key-init"),
    resizePopover: cc11001100_hook("resizePopover", resizePopover, "object-key-init"),
    resizePopoverByEle: cc11001100_hook("resizePopoverByEle", resizePopoverByEle, "object-key-init"),
    alert: cc11001100_hook("alert", windowConfirm, "object-key-init"),
    confirm: cc11001100_hook("confirm", popConfirm, "object-key-init"),
    prompt: cc11001100_hook("prompt", popPrompt, "object-key-init"),
    bringPopoverToFront: cc11001100_hook("bringPopoverToFront", bringPopoverToFront, "object-key-init"),
    sendPopoverToBack: cc11001100_hook("sendPopoverToBack", sendPopoverToBack, "object-key-init"),
    publish: cc11001100_hook("publish", publish, "object-key-init"),
    subscribe: cc11001100_hook("subscribe", subscribe, "object-key-init"),
    selectMultiPopover: cc11001100_hook("selectMultiPopover", setSelectedPopOverInMultiWindow, "object-key-init"),
    openMultiPopover: cc11001100_hook("openMultiPopover", openMultiPopover, "object-key-init"),
    closeMultiPopover: cc11001100_hook("closeMultiPopover", closeMultiPopover, "object-key-init"),
    setWindowFrame: cc11001100_hook("setWindowFrame", setWindowFrame, "object-key-init"),
    monitorKey: cc11001100_hook("monitorKey", monitorKey, "object-key-init"),
    stateChange: cc11001100_hook("stateChange", onStateChange, "object-key-init"),
    swipeLeft: cc11001100_hook("swipeLeft", onSwipeLeft, "object-key-init"),
    swipeRight: cc11001100_hook("swipeRight", onSwipeRight, "object-key-init"),
    getBounceStatus: cc11001100_hook("getBounceStatus", getBounceStatus, "object-key-init"),
    setMultilPopoverFlippingEnbaled: cc11001100_hook("setMultilPopoverFlippingEnbaled", setMultilPopoverFlippingEnbaled, "object-key-init"),
    actionSheet: cc11001100_hook("actionSheet", popActionSheet, "object-key-init"),
    scaleAnim: cc11001100_hook("scaleAnim", scaleAnim, "object-key-init"),
    alphaAnim: cc11001100_hook("alphaAnim", alphaAnim, "object-key-init"),
    rotateAnim: cc11001100_hook("rotateAnim", rotateAnim, "object-key-init"),
    customAnim: cc11001100_hook("customAnim", customAnim, "object-key-init"),
    setSlidingWindow: cc11001100_hook("setSlidingWindow", setSlidingWindow, "object-key-init"),
    toggleSlidingWindow: cc11001100_hook("toggleSlidingWindow", toggleSlidingWindow, "object-key-init"),
    getSlidingWindowState: cc11001100_hook("getSlidingWindowState", getSlidingWindowState, "object-key-init"),
    setSlidingWindowEnabled: cc11001100_hook("setSlidingWindowEnabled", setSlidingWindowEnabled, "object-key-init"),
    getUrlQuery: cc11001100_hook("getUrlQuery", getUrlQuery, "object-key-init"),
    setStatusBarTitleColor: cc11001100_hook("setStatusBarTitleColor", setStatusBarTitleColor, "object-key-init"),
    windowForward: cc11001100_hook("windowForward", windowForward, "object-key-init"),
    windowBack: cc11001100_hook("windowBack", windowBack, "object-key-init"),
    preOpenStart: cc11001100_hook("preOpenStart", preOpenStart, "object-key-init"),
    preOpenFinish: cc11001100_hook("preOpenFinish", preOpenFinish, "object-key-init"),
    getState: cc11001100_hook("getState", getState, "object-key-init"),
    setWindowScrollbarVisible: cc11001100_hook("setWindowScrollbarVisible", setWindowScrollbarVisible, "object-key-init"),
    insertPopoverBelowPopover: cc11001100_hook("insertPopoverBelowPopover", insertPopoverBelowPopover, "object-key-init"),
    insertPopoverAbovePopover: cc11001100_hook("insertPopoverAbovePopover", insertPopoverAbovePopover, "object-key-init"),
    insertBelow: cc11001100_hook("insertBelow", insertBelow, "object-key-init"),
    insertAbove: cc11001100_hook("insertAbove", insertAbove, "object-key-init"),
    insertWindowBelowWindow: cc11001100_hook("insertWindowBelowWindow", insertWindowBelowWindow, "object-key-init"),
    insertWindowAboveWindow: cc11001100_hook("insertWindowAboveWindow", insertWindowAboveWindow, "object-key-init"),
    showBounceView: cc11001100_hook("showBounceView", showBounceView, "object-key-init"),
    hiddenBounceView: cc11001100_hook("hiddenBounceView", hiddenBounceView, "object-key-init"),
    onPopoverLoadFinishInRootWnd: cc11001100_hook("onPopoverLoadFinishInRootWnd", onPopoverLoadFinishInRootWnd, "object-key-init")
  }, "assign"), "var-init");
  uap.extend(uapWindow, uap.eventEmitter);
});
window.uap && uap.define("frame", function ($, exports, module) {
  var appWin = cc11001100_hook("appWin", uap.require("window"), "var-init");
  var uapFrame = cc11001100_hook("uapFrame", module.exports = cc11001100_hook("module.exports", {
    close: cc11001100_hook("close", appWin.closePopover, "object-key-init"),
    bringToFront: cc11001100_hook("bringToFront", appWin.bringPopoverToFront, "object-key-init"),
    sendToBack: cc11001100_hook("sendToBack", appWin.sendPopoverToBack, "object-key-init"),
    evaluateScript: cc11001100_hook("evaluateScript", appWin.evaluatePopoverScript, "object-key-init"),
    publish: cc11001100_hook("publish", appWin.publish, "object-key-init"),
    subscribe: cc11001100_hook("subscribe", appWin.subscribe, "object-key-init"),
    selectMulti: cc11001100_hook("selectMulti", appWin.selectMultiPopover, "object-key-init"),
    openMulti: cc11001100_hook("openMulti", appWin.openMultiPopover, "object-key-init"),
    closeMulti: cc11001100_hook("closeMulti", appWin.closeMultiPopover, "object-key-init"),
    setBounce: cc11001100_hook("setBounce", appWin.setBounce, "object-key-init"),
    getBounceStatus: cc11001100_hook("getBounceStatus", appWin.getBounceStatus, "object-key-init"),
    resetBounce: cc11001100_hook("resetBounce", appWin.resetBounceView, "object-key-init"),
    open: function (id, url, left, top, name, index, change, extraInfo) {
      var argObj = cc11001100_hook("argObj", null, "var-init");
      if (arguments.length === 1 && uap.isPlainObject(id)) {
        argObj = cc11001100_hook("argObj", id, "assign");
        id = cc11001100_hook("id", argObj["id"] || 0, "assign");
        url = cc11001100_hook("url", argObj["url"], "assign");
        top = cc11001100_hook("top", argObj["top"], "assign");
        left = cc11001100_hook("left", argObj["left"], "assign");
        name = cc11001100_hook("name", argObj["name"], "assign");
        index = cc11001100_hook("index", argObj["index"], "assign");
        change = cc11001100_hook("change", argObj["change"], "assign");
      }
      if (uap.isArray(url)) {
        var ele = cc11001100_hook("ele", $("#" + id), "var-init");
        var width = cc11001100_hook("width", ele.width(), "var-init");
        var height = cc11001100_hook("height", ele.height(), "var-init");
        var fontSize = cc11001100_hook("fontSize", ele.css("font-size"), "var-init");
        top = cc11001100_hook("top", parseInt(top, 10), "assign");
        top = cc11001100_hook("top", isNaN(top) ? ele.offset().top : top, "assign");
        left = cc11001100_hook("left", parseInt(left, 10), "assign");
        left = cc11001100_hook("left", isNaN(left) ? ele.offset().left : left, "assign");
        name = cc11001100_hook("name", name ? name : id, "assign");
        fontSize = cc11001100_hook("fontSize", parseInt(fontSize, 10), "assign");
        fontSize = cc11001100_hook("fontSize", isNaN(fontSize) ? 0 : fontSize, "assign");
        appWin.openMultiPopover(name || id, url, 0, left, top, width, height, change || function () {}, fontSize, 0, index, extraInfo);
      } else {
        appWin.popoverElement(id, url, left, top, name, extraInfo);
      }
    },
    resize: cc11001100_hook("resize", appWin.resizePopoverByEle, "object-key-init"),
    swipeLeft: cc11001100_hook("swipeLeft", appWin.swipeLeft, "object-key-init"),
    swipeRight: cc11001100_hook("swipeRight", appWin.swipeRight, "object-key-init")
  }, "assign"), "var-init");
  uap.extend(uapFrame, uap.eventEmitter);
});
(function () {
  var requestAjax = cc11001100_hook("requestAjax", uap.request.ajax, "var-init");
  var baseFilePath = cc11001100_hook("baseFilePath", "wgt://offlinedata/", "var-init");
  var offlineKey = cc11001100_hook("offlineKey", "offlinedata", "var-init");
  var readFile = cc11001100_hook("readFile", uap.file.read, "var-init");
  var readSecureFile = cc11001100_hook("readSecureFile", uap.file.readSecure, "var-init");
  var writeFile = cc11001100_hook("writeFile", uap.file.write, "var-init");
  var writeSecureFile = cc11001100_hook("writeSecureFile", uap.file.writeSecure, "var-init");
  function ajax(opts) {
    cc11001100_hook("opts", opts, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(opts)) {
      var url;
      var expires;
      if (opts.data) {
        var paramsInfo = cc11001100_hook("paramsInfo", JSON.stringify(opts.data), "var-init");
        var fullUrl = cc11001100_hook("fullUrl", opts.url + paramsInfo, "var-init");
        url = cc11001100_hook("url", uap.crypto.md5(fullUrl), "assign");
      } else {
        url = cc11001100_hook("url", uap.crypto.md5(opts.url), "assign");
      }
      if (opts.expires && typeof opts.expires == "number") {
        expires = cc11001100_hook("expires", parseInt(opts.expires) + parseInt(new Date().getTime()), "assign");
      } else if (opts.expires && typeof opts.expires == "string") {
        var result = cc11001100_hook("result", setISO8601(opts.expires), "var-init");
        expires = cc11001100_hook("expires", result, "assign");
      } else {
        expires = cc11001100_hook("expires", 0, "assign");
      }
      if (opts.offlineDataPath != undefined && typeof opts.offlineDataPath == "string") {
        baseFilePath = cc11001100_hook("baseFilePath", opts.offlineDataPath, "assign");
      }
      if (opts.crypto && !opts.password) {
        alert("Must Set Password for AJAX if you open the switch of crypto!");
        return;
      }
      if (opts.offline != undefined) {
        var isOffline = cc11001100_hook("isOffline", opts.offline, "var-init");
        if (isOffline === true) {
          var offlinedata = cc11001100_hook("offlinedata", uap.locStorage.val(offlineKey), "var-init");
          var dataObj = cc11001100_hook("dataObj", null, "var-init");
          if (offlinedata != null) {
            dataObj = cc11001100_hook("dataObj", JSON.parse(offlinedata), "assign");
            if (dataObj[url]) {
              var urlData = cc11001100_hook("urlData", dataObj[url], "var-init");
              var localFilePath = cc11001100_hook("localFilePath", urlData.data ? urlData.data : "", "var-init");
              var readFileParams = cc11001100_hook("readFileParams", {
                filePath: cc11001100_hook("filePath", localFilePath, "object-key-init"),
                length: cc11001100_hook("length", -1, "object-key-init"),
                callback: function (err, data, dataType, optId) {
                  if (err == null) {
                    var tempSucc = cc11001100_hook("tempSucc", opts.success, "var-init");
                    if (typeof tempSucc == "function") {
                      if (typeof data == "string" && opts.dataType && opts.dataType.toLowerCase() == "json") {
                        data = cc11001100_hook("data", JSON.parse(data), "assign");
                      }
                      opts.success(data, "success", 200, null, null);
                    }
                  } else {
                    var tempSucc = cc11001100_hook("tempSucc", opts.success, "var-init");
                    var tempError = cc11001100_hook("tempError", opts.error, "var-init");
                    opts.success = cc11001100_hook("opts.success", function (res) {
                      tempSucc.apply(this, arguments);
                      setLocalStorage(url, res, expires, opts);
                    }, "assign");
                    opts.error = cc11001100_hook("opts.error", function (res) {
                      tempError.apply(this, arguments);
                    }, "assign");
                    requestAjax(opts);
                  }
                }
              }, "var-init");
              if (urlData.timeout && urlData.now && urlData.data) {
                var timeout = cc11001100_hook("timeout", parseInt(urlData.now) + parseInt(urlData.timeout), "var-init");
                var now = cc11001100_hook("now", new Date(), "var-init");
                if (urlData.expires && urlData.expires > now.getTime()) {
                  if (opts.crypto) {
                    readFileParams.key = cc11001100_hook("readFileParams.key", opts.password, "assign");
                    readSecureFile(readFileParams);
                  } else {
                    readFile(readFileParams);
                  }
                } else if (timeout > now.getTime()) {
                  if (opts.crypto) {
                    readFileParams.key = cc11001100_hook("readFileParams.key", opts.password, "assign");
                    readSecureFile(readFileParams);
                  } else {
                    readFile(readFileParams);
                  }
                } else {
                  var tempSucc = cc11001100_hook("tempSucc", opts.success, "var-init");
                  var tempError = cc11001100_hook("tempError", opts.error, "var-init");
                  opts.success = cc11001100_hook("opts.success", function (res) {
                    tempSucc.apply(this, arguments);
                    setLocalStorage(url, res, expires, opts);
                  }, "assign");
                  opts.error = cc11001100_hook("opts.error", function (res) {
                    tempError.apply(this, arguments);
                  }, "assign");
                  requestAjax(opts);
                }
              } else if (urlData.data) {
                if (urlData.expires) {
                  var now = cc11001100_hook("now", new Date(), "var-init");
                  if (urlData.expires > now.getTime()) {
                    if (opts.crypto) {
                      readFileParams.key = cc11001100_hook("readFileParams.key", opts.password, "assign");
                      readSecureFile(readFileParams);
                    } else {
                      readFile(readFileParams);
                    }
                  } else {
                    var tempSucc = cc11001100_hook("tempSucc", opts.success, "var-init");
                    var tempError = cc11001100_hook("tempError", opts.error, "var-init");
                    opts.success = cc11001100_hook("opts.success", function (res) {
                      tempSucc.apply(this, arguments);
                      setLocalStorage(url, res, expires, opts);
                    }, "assign");
                    opts.error = cc11001100_hook("opts.error", function (res) {
                      tempError.apply(this, arguments);
                    }, "assign");
                    requestAjax(opts);
                  }
                } else {
                  if (opts.crypto) {
                    readFileParams.key = cc11001100_hook("readFileParams.key", opts.password, "assign");
                    readSecureFile(readFileParams);
                  } else {
                    readFile(readFileParams);
                  }
                }
              } else {
                var tempSucc = cc11001100_hook("tempSucc", opts.success, "var-init");
                var tempError = cc11001100_hook("tempError", opts.error, "var-init");
                opts.success = cc11001100_hook("opts.success", function (res) {
                  tempSucc.apply(this, arguments);
                  setLocalStorage(url, res, expires, opts);
                }, "assign");
                opts.error = cc11001100_hook("opts.error", function (res) {
                  tempError.apply(this, arguments);
                }, "assign");
                requestAjax(opts);
              }
            } else {
              var tempSucc = cc11001100_hook("tempSucc", opts.success, "var-init");
              var tempError = cc11001100_hook("tempError", opts.error, "var-init");
              opts.success = cc11001100_hook("opts.success", function (res) {
                tempSucc.apply(this, arguments);
                setLocalStorage(url, res, expires, opts);
              }, "assign");
              opts.error = cc11001100_hook("opts.error", function (res) {
                tempError.apply(this, arguments);
              }, "assign");
              requestAjax(opts);
            }
          } else {
            var tempSucc = cc11001100_hook("tempSucc", opts.success, "var-init");
            var tempError = cc11001100_hook("tempError", opts.error, "var-init");
            opts.success = cc11001100_hook("opts.success", function (res) {
              tempSucc.apply(this, arguments);
              setLocalStorage(url, res, expires, opts);
            }, "assign");
            opts.error = cc11001100_hook("opts.error", function (res) {
              tempError.apply(this, arguments);
            }, "assign");
            requestAjax(opts);
          }
        } else {
          var tempSucc = cc11001100_hook("tempSucc", opts.success, "var-init");
          var tempError = cc11001100_hook("tempError", opts.error, "var-init");
          opts.success = cc11001100_hook("opts.success", function (res) {
            tempSucc.apply(this, arguments);
            setLocalStorage(url, res, expires, opts);
          }, "assign");
          opts.error = cc11001100_hook("opts.error", function (res) {
            tempError.apply(this, arguments);
          }, "assign");
          requestAjax(opts);
        }
      } else {
        var tempSucc = cc11001100_hook("tempSucc", opts.success, "var-init");
        var tempError = cc11001100_hook("tempError", opts.error, "var-init");
        opts.success = cc11001100_hook("opts.success", function (res) {
          tempSucc.apply(this, arguments);
        }, "assign");
        opts.error = cc11001100_hook("opts.error", function (res) {
          tempError.apply(this, arguments);
        }, "assign");
        requestAjax(opts);
      }
    }
  }
  function setLocalStorage(fileUrl, fileData, exp, opts) {
    cc11001100_hook("fileUrl", fileUrl, "function-parameter");
    cc11001100_hook("fileData", fileData, "function-parameter");
    cc11001100_hook("exp", exp, "function-parameter");
    cc11001100_hook("opts", opts, "function-parameter");
    try {
      var filename = cc11001100_hook("filename", fileUrl, "var-init");
      var localFilePath = cc11001100_hook("localFilePath", baseFilePath + filename + ".txt", "var-init");
      var saveData = cc11001100_hook("saveData", {}, "var-init");
      if (typeof fileData == "object" && Object.prototype.toString.call(fileData).toLowerCase() == "[object object]" && !fileData.length) {
        fileData = cc11001100_hook("fileData", JSON.stringify(fileData), "assign");
      }
      var now = cc11001100_hook("now", new Date().getTime(), "var-init");
      var data = cc11001100_hook("data", fileData, "var-init");
      writeFileParams = cc11001100_hook("writeFileParams", {
        filePath: cc11001100_hook("filePath", localFilePath, "object-key-init"),
        content: cc11001100_hook("content", fileData, "object-key-init"),
        callback: function (err) {
          if (err == null) {
            saveData["now"] = cc11001100_hook("saveData[\"now\"]", now, "assign");
            saveData["data"] = cc11001100_hook("saveData[\"data\"]", localFilePath, "assign");
            if (data.timeout) {
              saveData.timeout = cc11001100_hook("saveData.timeout", data.timeout, "assign");
            } else if (typeof data == "string") {
              try {
                var parseData = cc11001100_hook("parseData", JSON.parse(data), "var-init");
                if (parseData.timeout) {
                  saveData.timeout = cc11001100_hook("saveData.timeout", parseData.timeout, "assign");
                }
              } catch (e) {}
            }
            if (exp > 0) {
              saveData["expires"] = cc11001100_hook("saveData[\"expires\"]", exp, "assign");
            }
            var offdata = cc11001100_hook("offdata", uap.locStorage.val(offlineKey) || "{}", "var-init");
            var offdataObj = cc11001100_hook("offdataObj", JSON.parse(offdata), "var-init");
            offdataObj[filename] = cc11001100_hook("offdataObj[filename]", saveData, "assign");
            uap.locStorage.val(offlineKey, JSON.stringify(offdataObj));
          }
        }
      }, "assign");
      if (opts.crypto) {
        writeFileParams.key = cc11001100_hook("writeFileParams.key", opts.password, "assign");
        writeSecureFile(writeFileParams);
      } else {
        writeFile(writeFileParams);
      }
    } catch (e) {
      throw e;
    }
  }
  function setISO8601(string) {
    cc11001100_hook("string", string, "function-parameter");
    var regexp = cc11001100_hook("regexp", "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" + "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(.([0-9]+))?)?" + "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?", "var-init");
    if (string) {
      try {
        var d = cc11001100_hook("d", string.match(new RegExp(regexp)), "var-init");
        var offset = cc11001100_hook("offset", 0, "var-init");
        var date = cc11001100_hook("date", new Date(d[1], 0, 1), "var-init");
        if (d[3]) {
          date.setMonth(d[3] - 1);
        }
        if (d[5]) {
          date.setDate(d[5]);
        }
        if (d[7]) {
          date.setHours(d[7]);
        }
        if (d[8]) {
          date.setMinutes(d[8]);
        }
        if (d[10]) {
          date.setSeconds(d[10]);
        }
        if (d[12]) {
          date.setMilliseconds(Number("0." + d[12]) * 1e3);
        }
        if (d[14]) {
          offset = cc11001100_hook("offset", Number(d[16]) * 60 + Number(d[17]), "assign");
          offset *= cc11001100_hook("offset", d[15] == "-" ? 1 : -1, "assign");
        }
        offset -= cc11001100_hook("offset", date.getTimezoneOffset(), "assign");
        time = cc11001100_hook("time", Number(date) + offset * 60 * 1e3, "assign");
        return Number(time);
      } catch (e) {
        return 0;
      }
    } else {
      return 0;
    }
  }
  function ISODateString(d) {
    cc11001100_hook("d", d, "function-parameter");
    function pad(n) {
      cc11001100_hook("n", n, "function-parameter");
      return n < 10 ? "0" + n : n;
    }
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "Z";
  }
  uap.extend(uap.request, {
    ajax: cc11001100_hook("ajax", ajax, "object-key-init")
  });
})();
uap.define("ajax", function ($, exports, module) {
  module.exports = cc11001100_hook("module.exports", uap.request.ajax, "assign");
});
uap && uap.define("download", function ($, exports, module) {
  var getOptionId = cc11001100_hook("getOptionId", uap.getOptionId, "var-init");
  var createDownloaderQueue = cc11001100_hook("createDownloaderQueue", {}, "var-init");
  var downloadQueue = cc11001100_hook("downloadQueue", {}, "var-init");
  function processCreateDownloaderQueue(err, data, dataType, optId) {
    cc11001100_hook("err", err, "function-parameter");
    cc11001100_hook("data", data, "function-parameter");
    cc11001100_hook("dataType", dataType, "function-parameter");
    cc11001100_hook("optId", optId, "function-parameter");
    var callback = cc11001100_hook("callback", null, "var-init");
    if (createDownloaderQueue["create_call_" + optId]) {
      callback = cc11001100_hook("callback", createDownloaderQueue["create_call_" + optId].cb, "assign");
    } else if (createDownloaderQueue.length == 1) {
      callback = cc11001100_hook("callback", createDownloaderQueue[0].cb, "assign");
    }
    if (uap.isFunction(callback)) {
      if (dataType == 2) {
        callback(null, data, dataType, optId);
      } else {
        callback(new Error("create downloader error"), data, dataType, optId);
      }
    }
    delete createDownloaderQueue["create_call_" + optId];
  }
  function processDownloadQueue(optId, fileSize, percent, status) {
    cc11001100_hook("optId", optId, "function-parameter");
    cc11001100_hook("fileSize", fileSize, "function-parameter");
    cc11001100_hook("percent", percent, "function-parameter");
    cc11001100_hook("status", status, "function-parameter");
    var downloadCall = cc11001100_hook("downloadCall", null, "var-init");
    var successCall = cc11001100_hook("successCall", null, "var-init");
    var errorCall = cc11001100_hook("errorCall", null, "var-init");
    var cancelCall = cc11001100_hook("cancelCall", null, "var-init");
    if (downloadQueue["download_call_" + optId]) {
      downloadCall = cc11001100_hook("downloadCall", downloadQueue["download_call_" + optId].downloadCall, "assign");
      successCall = cc11001100_hook("successCall", downloadQueue["download_call_" + optId].successCall, "assign");
      errorCall = cc11001100_hook("errorCall", downloadQueue["download_call_" + optId].errorCall, "assign");
      cancelCall = cc11001100_hook("cancelCall", downloadQueue["download_call_" + optId].cancelCall, "assign");
    } else if (downloadQueue.length == 1) {
      downloadCall = cc11001100_hook("downloadCall", downloadQueue[0].downloadCall, "assign");
      successCall = cc11001100_hook("successCall", downloadQueue[0].successCall, "assign");
      errorCall = cc11001100_hook("errorCall", downloadQueue[0].errorCall, "assign");
      cancelCall = cc11001100_hook("cancelCall", downloadQueue[0].cancelCall, "assign");
    }
    if (status == 0) {
      downloadCall && uap.isFunction(downloadCall) && downloadCall(optId, fileSize, percent, status);
    } else if (status == 1) {
      successCall && uap.isFunction(successCall) && successCall(optId, fileSize, percent, status);
    } else if (status == 2) {
      errorCall && uap.isFunction(errorCall) && errorCall(optId, fileSize, percent, status);
    } else if (status == 3) {
      cancelCall && uap.isFunction(cancelCall) && cancelCall(optId, fileSize, percent, status);
    }
  }
  function createDownloader(optId, callback) {
    cc11001100_hook("optId", optId, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(optId)) {
      argObj = cc11001100_hook("argObj", optId, "assign");
      optId = cc11001100_hook("optId", argObj["optId"], "assign");
      callback = cc11001100_hook("callback", argObj["callback"], "assign");
    }
    optId = cc11001100_hook("optId", optId || getOptionId(), "assign");
    callback = cc11001100_hook("callback", callback || function () {}, "assign");
    if (uap.isFunction(callback)) {
      createDownloaderQueue["create_call_" + optId] = cc11001100_hook("createDownloaderQueue[\"create_call_\" + optId]", {
        optId: cc11001100_hook("optId", optId, "object-key-init"),
        cb: cc11001100_hook("cb", callback, "object-key-init")
      }, "assign");
      uexDownloaderMgr.cbCreateDownloader = cc11001100_hook("uexDownloaderMgr.cbCreateDownloader", function (optId, dataType, data) {
        if (dataType != 2) {
          processCreateDownloaderQueue(new Error("create downloader error"), data, dataType, optId);
          return;
        }
        processCreateDownloaderQueue(null, data, dataType, optId);
      }, "assign");
    }
    uexDownloaderMgr.createDownloader(optId);
    return optId;
  }
  function closeDownloader(optId) {
    cc11001100_hook("optId", optId, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(optId)) {
      optId = cc11001100_hook("optId", optId["optId"], "assign");
    }
    if (!optId) return;
    uexDownloaderMgr.closeDownloader(optId);
    delete downloadQueue["download_call_" + optId];
  }
  function setHeaders(optId, info) {
    cc11001100_hook("optId", optId, "function-parameter");
    cc11001100_hook("info", info, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(optId)) {
      argObj = cc11001100_hook("argObj", optId, "assign");
      optId = cc11001100_hook("optId", argObj["optId"], "assign");
      info = cc11001100_hook("info", argObj["info"], "assign");
    }
    if (!optId) throw new Error("optId is undefined!");
    if (!uap.isPlainObject(info)) throw new Error("info is not json object!");
    uexDownloaderMgr.setHeaders && uexDownloaderMgr.setHeaders(optId, JSON.stringify(info));
  }
  function download(optId, url, savePath, breakPoint, downloadCall, successCall, errorCall, cancelCall) {
    cc11001100_hook("optId", optId, "function-parameter");
    cc11001100_hook("url", url, "function-parameter");
    cc11001100_hook("savePath", savePath, "function-parameter");
    cc11001100_hook("breakPoint", breakPoint, "function-parameter");
    cc11001100_hook("downloadCall", downloadCall, "function-parameter");
    cc11001100_hook("successCall", successCall, "function-parameter");
    cc11001100_hook("errorCall", errorCall, "function-parameter");
    cc11001100_hook("cancelCall", cancelCall, "function-parameter");
    var argObj = cc11001100_hook("argObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(optId)) {
      argObj = cc11001100_hook("argObj", optId, "assign");
      optId = cc11001100_hook("optId", argObj["optId"], "assign");
      url = cc11001100_hook("url", argObj["url"], "assign");
      savePath = cc11001100_hook("savePath", argObj["savePath"], "assign");
      breakPoint = cc11001100_hook("breakPoint", argObj["breakPoint"], "assign");
    }
    optId = cc11001100_hook("optId", optId || getOptionId(), "assign");
    if (!url) throw new Error("url is undefined!");
    if (!savePath) throw new Error("savePath is undefined!");
    breakPoint = cc11001100_hook("breakPoint", parseInt(breakPoint, 10), "assign");
    breakPoint = cc11001100_hook("breakPoint", isNaN(breakPoint) ? "0" : breakPoint, "assign");
    downloadQueue["download_call_" + optId] = cc11001100_hook("downloadQueue[\"download_call_\" + optId]", {
      optId: cc11001100_hook("optId", optId, "object-key-init"),
      downloadCall: cc11001100_hook("downloadCall", downloadCall, "object-key-init"),
      successCall: cc11001100_hook("successCall", successCall, "object-key-init"),
      errorCall: cc11001100_hook("errorCall", errorCall, "object-key-init"),
      cancelCall: cc11001100_hook("cancelCall", cancelCall, "object-key-init")
    }, "assign");
    uexDownloaderMgr.onStatus = cc11001100_hook("uexDownloaderMgr.onStatus", processDownloadQueue, "assign");
    uexDownloaderMgr.download(optId, url, savePath, breakPoint);
  }
  module.exports = cc11001100_hook("module.exports", {
    create: cc11001100_hook("create", createDownloader, "object-key-init"),
    run: cc11001100_hook("run", download, "object-key-init"),
    setHeaders: cc11001100_hook("setHeaders", setHeaders, "object-key-init"),
    close: cc11001100_hook("close", closeDownloader, "object-key-init")
  }, "assign");
});
uap.define("icache", function ($, exports, module) {
  var opid = cc11001100_hook("opid", 1e3, "var-init");
  var CACHE_PATH = cc11001100_hook("CACHE_PATH", "box://icache/", "var-init");
  function iCache(option) {
    cc11001100_hook("option", option, "function-parameter");
    var self = cc11001100_hook("self", this, "var-init");
    uap.extend(this, uap.eventEmitter);
    self.waiting = cc11001100_hook("self.waiting", [], "assign");
    self.running = cc11001100_hook("self.running", [], "assign");
    self.option = cc11001100_hook("self.option", $.extend({
      maxtask: cc11001100_hook("maxtask", 3, "object-key-init")
    }, option, true), "assign");
    uap.file.getRealPath("box://", function (err, data, dataType, optId) {
      self.realpath = cc11001100_hook("self.realpath", data, "assign");
      self.emit("NEXT_SESSION");
    });
    self.on("NEXT_SESSION", self._next);
  }
  iCache.prototype = cc11001100_hook("iCache.prototype", {
    _progress: function (data, session) {
      if (session.progress) {
        session.progress(data, session);
      }
    },
    _success: function (fpath, session) {
      var self = cc11001100_hook("self", this, "var-init");
      self.off("DLS" + session.id);
      uap.download.close(session.dlId);
      if (session.success) {
        session.success(fpath, session);
      } else if (session.dom && session.dom.length) {
        switch (session.dom[0].tagName.toLowerCase()) {
          case "img":
            session.dom.attr("src", fpath);
            break;
          default:
            session.dom.css("background-image", "url(file://" + fpath + ") !important");
            break;
        }
      }
      var index = cc11001100_hook("index", self.running.valueOf(session), "var-init");
      index != undefined && self.running.splice(index, 1);
      self.emit("NEXT_SESSION");
    },
    _fail: function (session) {
      var self = cc11001100_hook("self", this, "var-init");
      self.off("DLS" + session.id);
      uap.download.close(session.dlId);
      var index = cc11001100_hook("index", self.running.valueOf(session), "var-init");
      index != undefined && self.running.splice(index, 1);
      if (session.fail) {
        session.fail(session);
      }
      self.emit("NEXT_SESSION");
    },
    _next: function () {
      var self = cc11001100_hook("self", this, "var-init");
      if (!self.realpath) return;
      if (self.running.length >= self.option.maxtask) return;
      var session = cc11001100_hook("session", self.waiting.shift(), "var-init");
      if (!session) return;
      self.running.push(session);
      self._download(session);
    },
    _download: function (session) {
      var self = cc11001100_hook("self", this, "var-init");
      var fid = cc11001100_hook("fid", uap.crypto.md5(session.url), "var-init");
      var fpath = cc11001100_hook("fpath", self.realpath + "/icache/" + fid, "var-init");
      self.on("DLS" + session.id, function (data) {
        switch (parseInt(data.status)) {
          case 0:
            self._progress(data, session);
            break;
          case 1:
            self._success(fpath, session);
            break;
          default:
            self._fail(session);
            break;
        }
      });
      self.once("FS" + session.id, function (data) {
        if (data) {
          self._success(fpath, session);
        } else {
          function downloadCB(optId, fileSize, percent, status) {
            cc11001100_hook("optId", optId, "function-parameter");
            cc11001100_hook("fileSize", fileSize, "function-parameter");
            cc11001100_hook("percent", percent, "function-parameter");
            cc11001100_hook("status", status, "function-parameter");
            self.emit("DLS" + session.id, self, {
              fileSize: cc11001100_hook("fileSize", fileSize, "object-key-init"),
              percent: cc11001100_hook("percent", percent, "object-key-init"),
              status: cc11001100_hook("status", status, "object-key-init")
            });
          }
          session.dlId = cc11001100_hook("session.dlId", uap.download.create(null, function (err, data, dataType, optId) {
            if (!err) {
              session.header && uap.download.setHeaders(session.dlId, session.header);
              uap.download.run(session.dlId, session.url, fpath, "0", downloadCB, downloadCB, downloadCB, downloadCB);
            } else downloadCB(optId, 0, 0, 4);
          }), "assign");
        }
      });
      uap.file.exists(fpath, function (err, data, dataType, optId) {
        self.emit("FS" + session.id, self, data);
      });
    },
    run: function (option) {
      var self = cc11001100_hook("self", this, "var-init");
      var session = cc11001100_hook("session", $.extend({
        id: cc11001100_hook("id", "" + opid++, "object-key-init"),
        status: cc11001100_hook("status", 0, "object-key-init")
      }, option, true), "var-init");
      self.waiting.push(session);
      self.emit("NEXT_SESSION");
    },
    clearcache: function () {
      uexFileMgr.deleteFileByPath(CACHE_PATH);
    }
  }, "assign");
  module.exports = cc11001100_hook("module.exports", function (option) {
    return new iCache(option);
  }, "assign");
});
window.uap && uap.define("widget", function ($, exports, module) {
  function startWidget(appId, animId, funName, info, animDuration, callback) {
    cc11001100_hook("appId", appId, "function-parameter");
    cc11001100_hook("animId", animId, "function-parameter");
    cc11001100_hook("funName", funName, "function-parameter");
    cc11001100_hook("info", info, "function-parameter");
    cc11001100_hook("animDuration", animDuration, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(appId)) {
      uexObj = cc11001100_hook("uexObj", appId, "assign");
      appId = cc11001100_hook("appId", uexObj["appId"], "assign");
      animId = cc11001100_hook("animId", uexObj["animId"] || 0, "assign");
      funName = cc11001100_hook("funName", uexObj["funName"], "assign");
      info = cc11001100_hook("info", uexObj["info"], "assign");
      animDuration = cc11001100_hook("animDuration", uexObj["animDuration"] || "", "assign");
      callback = cc11001100_hook("callback", uexObj["callback"] || function () {}, "assign");
    }
    if (!appId) {
      return callback(new Error("appId is empty"));
    }
    animId = cc11001100_hook("animId", animId || 0, "assign");
    animDuration = cc11001100_hook("animDuration", animDuration || "", "assign");
    callback = cc11001100_hook("callback", callback || function () {}, "assign");
    if (animId) {
      animId = cc11001100_hook("animId", parseInt(animId, 10), "assign");
      if (isNaN(animId) || animId > 16 || animId < 0) {
        animId = cc11001100_hook("animId", 0, "assign");
      }
    }
    if (animDuration) {
      animDuration = cc11001100_hook("animDuration", parseInt(animDuration, 10), "assign");
      animDuration = cc11001100_hook("animDuration", isNaN(animDuration) ? "" : animDuration, "assign");
    }
    uexWidget.cbStartWidget = cc11001100_hook("uexWidget.cbStartWidget", function (opId, dataType, data) {
      callback(null, data, dataType, opId);
    }, "assign");
    uexWidget.startWidget(appId, animId, funName, info, animDuration);
  }
  function finishWidget(resultInfo, appId, isWgtBG) {
    cc11001100_hook("resultInfo", resultInfo, "function-parameter");
    cc11001100_hook("appId", appId, "function-parameter");
    cc11001100_hook("isWgtBG", isWgtBG, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(resultInfo)) {
      uexObj = cc11001100_hook("uexObj", resultInfo, "assign");
      resultInfo = cc11001100_hook("resultInfo", uexObj["resultInfo"], "assign");
      appId = cc11001100_hook("appId", uexObj["appId"], "assign");
      isWgtBG = cc11001100_hook("isWgtBG", uexObj["isWgtBG"], "assign");
    }
    if (resultInfo && appId && isWgtBG) {
      uexWidget.finishWidget(resultInfo, appId, isWgtBG);
    } else if (resultInfo && appId) {
      uexWidget.finishWidget(resultInfo, appId);
    } else {
      uexWidget.finishWidget(resultInfo);
    }
  }
  function removeWidget(appId, callback) {
    cc11001100_hook("appId", appId, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(appId)) {
      uexObj = cc11001100_hook("uexObj", appId, "assign");
      appId = cc11001100_hook("appId", uexObj["appId"], "assign");
      callback = cc11001100_hook("callback", uexObj["callback"] || function () {}, "assign");
    }
    uexWidget.cbRemoveWidget = cc11001100_hook("uexWidget.cbRemoveWidget", function (opId, dataType, data) {
      callback(null, data, dataType, opId);
    }, "assign");
    uexWidget.removeWidget(appId);
  }
  function checkUpdate(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", uexObj["callback"] || function () {}, "assign");
    }
    callback = cc11001100_hook("callback", callback || function () {}, "assign");
    try {
      uexWidget.cbCheckUpdate = cc11001100_hook("uexWidget.cbCheckUpdate", function (opId, dataType, data) {
        var res = cc11001100_hook("res", JSON.parse(data), "var-init");
        var resData = cc11001100_hook("resData", res.result || 2, "var-init");
        callback(null, resData, dataType, opId);
      }, "assign");
    } catch (e) {
      callback(new Error("检查失败！"));
    }
    uexWidget.checkUpdate();
  }
  function loadApp(appInfo) {
    cc11001100_hook("appInfo", appInfo, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(appInfo)) {
      uexObj = cc11001100_hook("uexObj", appInfo, "assign");
      appInfo = cc11001100_hook("appInfo", uexObj["appInfo"], "assign");
    }
    uexWidget.loadApp(appInfo);
  }
  function startApp(startMode, mainInfo, addInfo, optInfo, callback) {
    cc11001100_hook("startMode", startMode, "function-parameter");
    cc11001100_hook("mainInfo", mainInfo, "function-parameter");
    cc11001100_hook("addInfo", addInfo, "function-parameter");
    cc11001100_hook("optInfo", optInfo, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(startMode)) {
      uexObj = cc11001100_hook("uexObj", startMode, "assign");
      startMode = cc11001100_hook("startMode", uexObj["startMode"], "assign");
      mainInfo = cc11001100_hook("mainInfo", uexObj["mainInfo"], "assign");
      addInfo = cc11001100_hook("addInfo", uexObj["addInfo"], "assign");
      optInfo = cc11001100_hook("optInfo", uexObj["optInfo"], "assign");
      callback = cc11001100_hook("callback", callback || function () {}, "assign");
    }
    if (uap.isFunction(callback)) {
      uexWidget.cbStartApp = cc11001100_hook("uexWidget.cbStartApp", function (info) {
        callback(info);
      }, "assign");
    }
    uexWidget.startApp(startMode, mainInfo, addInfo, optInfo);
  }
  function getOpenerInfo(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    if (!uap.isFunction(callback)) {
      return;
    }
    uexWidget.cbGetOpenerInfo = cc11001100_hook("uexWidget.cbGetOpenerInfo", function (opId, dataType, data) {
      callback(null, data, dataType, opId);
    }, "assign");
    uexWidget.getOpenerInfo();
  }
  function installApp(appPath) {
    cc11001100_hook("appPath", appPath, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(appPath)) {
      uexObj = cc11001100_hook("uexObj", appPath, "assign");
      appPath = cc11001100_hook("appPath", uexObj["appPath"], "assign");
    }
    uexWidget.installApp(appPath);
  }
  function getPushInfo(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", uexObj["callback"], "assign");
    }
    if (!uap.isFunction(callback)) {
      return;
    }
    uexWidget.cbGetPushInfo = cc11001100_hook("uexWidget.cbGetPushInfo", function (opId, dataType, data) {
      callback(null, data, dataType, opId);
    }, "assign");
    uexWidget.getPushInfo();
  }
  function setPushNotifyCallback(cbFunction) {
    cc11001100_hook("cbFunction", cbFunction, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(cbFunction)) {
      cbFunction = cc11001100_hook("cbFunction", cbFunction["cbFunction"], "assign");
    }
    uexWidget.setPushNotifyCallback(cbFunction);
  }
  function setPushInfo(uId, uNickName) {
    cc11001100_hook("uId", uId, "function-parameter");
    cc11001100_hook("uNickName", uNickName, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(uId)) {
      uexObj = cc11001100_hook("uexObj", uId, "assign");
      uId = cc11001100_hook("uId", uexObj["uId"], "assign");
      uNickName = cc11001100_hook("uNickName", uexObj["uNickName"], "assign");
    }
    uexWidget.setPushInfo(uId, uNickName);
  }
  function setPushState(state) {
    cc11001100_hook("state", state, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(state)) {
      uexObj = cc11001100_hook("uexObj", state, "assign");
      state = cc11001100_hook("state", uexObj["state"], "assign");
    }
    state = cc11001100_hook("state", parseInt(state, 10), "assign");
    state = cc11001100_hook("state", isNaN(state) ? 0 : state, "assign");
    state = cc11001100_hook("state", state != 0 ? 1 : state, "assign");
    uexWidget.setPushState(state);
  }
  function getPushState(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", uexObj["callback"], "assign");
    }
    if (!uap.isFunction(callback)) {
      return;
    }
    uexWidget.cbGetPushState = cc11001100_hook("uexWidget.cbGetPushState", function (opId, dataType, data) {
      callback(null, data, dataType, opId);
    }, "assign");
    uexWidget.getPushState();
  }
  function isAppInstalled(appData, callback) {
    cc11001100_hook("appData", appData, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    var uexObj = cc11001100_hook("uexObj", {}, "var-init");
    var res = cc11001100_hook("res", null, "var-init");
    if (arguments.length === 1 && uap.isPlainObject(appData)) {
      uexObj = cc11001100_hook("uexObj", appData, "assign");
      appData = cc11001100_hook("appData", uexObj["appData"], "assign");
      callback = cc11001100_hook("callback", uexObj["callback"], "assign");
    }
    if (!uap.isFunction(callback)) {
      return;
    }
    uexWidget.cbIsAppInstalled = cc11001100_hook("uexWidget.cbIsAppInstalled", function (data) {
      try {
        var res = cc11001100_hook("res", JSON.parse(data), "var-init");
        callback(null, res.installed, 2);
      } catch (e) {
        callback(new Error("error"));
      }
    }, "assign");
    var param = cc11001100_hook("param", {}, "var-init");
    param.appData = cc11001100_hook("param.appData", appData, "assign");
    param = cc11001100_hook("param", JSON.stringify(param), "assign");
    uexWidget.isAppInstalled(param);
  }
  var loadByOtherAppCallQueue = cc11001100_hook("loadByOtherAppCallQueue", [], "var-init");
  function processLoadByOtherAppCallQueue(jsonData) {
    cc11001100_hook("jsonData", jsonData, "function-parameter");
    $.each(loadByOtherAppCallQueue, function (i, v) {
      if (uap.isFunction(v)) {
        v(jsonData);
      }
    });
  }
  function defaultLoadByOtherApp() {
    var tmpLoadByOtherAppCall = cc11001100_hook("tmpLoadByOtherAppCall", null, "var-init");
    if (uap.widget.onLoadByOtherApp) {
      tmpLoadByOtherAppCall = cc11001100_hook("tmpLoadByOtherAppCall", uap.widget.onLoadByOtherApp, "assign");
    }
    uapWidget.emit("loadByOtherApp");
    tmpLoadByOtherAppCall && tmpLoadByOtherAppCall();
  }
  function onLoadByOtherApp(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    loadByOtherAppCallQueue.push(callback);
    uexWidget.onLoadByOtherApp = cc11001100_hook("uexWidget.onLoadByOtherApp", function (data) {
      processLoadByOtherAppCallQueue(data);
    }, "assign");
    return;
  }
  var suspendCallQueue = cc11001100_hook("suspendCallQueue", [], "var-init");
  function processSuspendCallQueue() {
    $.each(suspendCallQueue, function (i, v) {
      if (uap.isFunction(v)) {
        v();
      }
    });
  }
  function defaultSuspend() {
    var tmpSuspendCall = cc11001100_hook("tmpSuspendCall", null, "var-init");
    if (uap.widget.onSuspend) {
      tmpSuspendCall = cc11001100_hook("tmpSuspendCall", uap.widget.onSuspend, "assign");
    }
    uapWidget.emit("suspend");
    tmpSuspendCall && tmpSuspendCall();
  }
  function onSuspend(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (!uap.isFunction(callback)) {
      return;
    }
    suspendCallQueue.push(callback);
    uexWidget.onSuspend = cc11001100_hook("uexWidget.onSuspend", processSuspendCallQueue, "assign");
    return;
  }
  var resumeCallQueue = cc11001100_hook("resumeCallQueue", [], "var-init");
  function processResumeCallQueue() {
    $.each(resumeCallQueue, function (i, v) {
      if (uap.isFunction(v)) {
        v();
      }
    });
  }
  function defaultResume() {
    var tmpResumeCall = cc11001100_hook("tmpResumeCall", null, "var-init");
    if (uap.widget.onResume) {
      tmpResumeCall = cc11001100_hook("tmpResumeCall", uap.widget.onResume, "assign");
    }
    uapWidget.emit("resume");
    tmpResumeCall && tmpResumeCall();
  }
  function onResume(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (!uap.isFunction(callback)) {
      return;
    }
    resumeCallQueue.push(callback);
    uexWidget.onResume = cc11001100_hook("uexWidget.onResume", processResumeCallQueue, "assign");
    return;
  }
  uap.ready(function () {
    onSuspend(defaultSuspend);
    onResume(defaultResume);
  });
  var uapWidget = cc11001100_hook("uapWidget", module.exports = cc11001100_hook("module.exports", {
    startWidget: cc11001100_hook("startWidget", startWidget, "object-key-init"),
    finishWidget: cc11001100_hook("finishWidget", finishWidget, "object-key-init"),
    removeWidget: cc11001100_hook("removeWidget", removeWidget, "object-key-init"),
    checkUpdate: cc11001100_hook("checkUpdate", checkUpdate, "object-key-init"),
    loadApp: cc11001100_hook("loadApp", loadApp, "object-key-init"),
    startApp: cc11001100_hook("startApp", startApp, "object-key-init"),
    getOpenerInfo: cc11001100_hook("getOpenerInfo", getOpenerInfo, "object-key-init"),
    installApp: cc11001100_hook("installApp", installApp, "object-key-init"),
    getPushInfo: cc11001100_hook("getPushInfo", getPushInfo, "object-key-init"),
    setPushNotifyCallback: cc11001100_hook("setPushNotifyCallback", setPushNotifyCallback, "object-key-init"),
    setPushInfo: cc11001100_hook("setPushInfo", setPushInfo, "object-key-init"),
    setPushState: cc11001100_hook("setPushState", setPushState, "object-key-init"),
    getPushState: cc11001100_hook("getPushState", getPushState, "object-key-init"),
    isAppInstalled: cc11001100_hook("isAppInstalled", isAppInstalled, "object-key-init"),
    suspend: cc11001100_hook("suspend", onSuspend, "object-key-init"),
    resume: cc11001100_hook("resume", onResume, "object-key-init")
  }, "assign"), "var-init");
  uap.extend(uapWidget, uap.eventEmitter);
});
uap.define("widgetOne", function ($, exports, module) {
  function getPlatform(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    if (!uap.isFunction(callback)) return;
    try {
      uexWidgetOne.cbGetPlatform = cc11001100_hook("uexWidgetOne.cbGetPlatform", function (opId, dataType, data) {
        callback(null, data, dataType, opId);
      }, "assign");
      uexWidgetOne.getPlatform();
    } catch (e) {
      callback(e);
    }
  }
  function getPlatformName() {
    return uexWidgetOne.platformName;
  }
  function getPlatformVersion() {
    return uexWidgetOne.platformVersion;
  }
  function isIOS7Style() {
    return uexWidgetOne.iOS7Style || 0;
  }
  function isFullScreen() {
    return uexWidgetOne.isFullScreen;
  }
  function exit(flag) {
    cc11001100_hook("flag", flag, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(flag)) {
      flag = cc11001100_hook("flag", flag["flag"], "assign");
    }
    flag = cc11001100_hook("flag", isNaN(flag) ? 0 : flag, "assign");
    uexWidgetOne.exit(flag);
  }
  function getCurrentWidgetInfo(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    if (!uap.isFunction(callback)) return;
    try {
      uexWidgetOne.cbGetCurrentWidgetInfo = cc11001100_hook("uexWidgetOne.cbGetCurrentWidgetInfo", function (opId, dataType, data) {
        callback(null, data, dataType, opId);
      }, "assign");
      uexWidgetOne.getCurrentWidgetInfo();
    } catch (e) {
      callback(e);
    }
  }
  function cleanCache(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    if (!uap.isFunction(callback)) return;
    try {
      uexWidgetOne.cbCleanCache = cc11001100_hook("uexWidgetOne.cbCleanCache", function (opId, dataType, data) {
        callback(null, data, dataType, opId);
      }, "assign");
      uexWidgetOne.cleanCache();
    } catch (e) {
      callback(e);
    }
  }
  function getMainWidgetId(callback) {
    cc11001100_hook("callback", callback, "function-parameter");
    if (arguments.length === 1 && uap.isPlainObject(callback)) {
      callback = cc11001100_hook("callback", callback["callback"], "assign");
    }
    if (!uap.isFunction(callback)) return;
    try {
      uexWidgetOne.cbGetMainWidgetId = cc11001100_hook("uexWidgetOne.cbGetMainWidgetId", function (opId, dataType, data) {
        callback(null, data, dataType, opId);
      }, "assign");
      uexWidgetOne.getMainWidgetId();
    } catch (e) {
      callback(e);
    }
  }
  var uapWidgetOne = cc11001100_hook("uapWidgetOne", module.exports = cc11001100_hook("module.exports", {
    getPlatform: cc11001100_hook("getPlatform", getPlatform, "object-key-init"),
    getPlatformName: cc11001100_hook("getPlatformName", getPlatformName, "object-key-init"),
    getPlatformVersion: cc11001100_hook("getPlatformVersion", getPlatformVersion, "object-key-init"),
    isIOS7Style: cc11001100_hook("isIOS7Style", isIOS7Style, "object-key-init"),
    isFullScreen: cc11001100_hook("isFullScreen", isFullScreen, "object-key-init"),
    exit: cc11001100_hook("exit", exit, "object-key-init"),
    getCurrentWidgetInfo: cc11001100_hook("getCurrentWidgetInfo", getCurrentWidgetInfo, "object-key-init"),
    cleanCache: cc11001100_hook("cleanCache", cleanCache, "object-key-init"),
    getMainWidgetId: cc11001100_hook("getMainWidgetId", getMainWidgetId, "object-key-init")
  }, "assign"), "var-init");
});
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else {
    factory(window.jQuery || window.Zepto);
  }
})(function ($, undefined) {
  var w = cc11001100_hook("w", window, "var-init"),
    $window = cc11001100_hook("$window", $(w), "var-init"),
    defaultOptions = cc11001100_hook("defaultOptions", {
      threshold: cc11001100_hook("threshold", 0, "object-key-init"),
      failure_limit: cc11001100_hook("failure_limit", 0, "object-key-init"),
      event: cc11001100_hook("event", "scroll", "object-key-init"),
      effect: cc11001100_hook("effect", "show", "object-key-init"),
      effect_params: cc11001100_hook("effect_params", null, "object-key-init"),
      container: cc11001100_hook("container", w, "object-key-init"),
      data_attribute: cc11001100_hook("data_attribute", "original", "object-key-init"),
      data_srcset_attribute: cc11001100_hook("data_srcset_attribute", "original-srcset", "object-key-init"),
      skip_invisible: cc11001100_hook("skip_invisible", true, "object-key-init"),
      appear: cc11001100_hook("appear", emptyFn, "object-key-init"),
      load: cc11001100_hook("load", emptyFn, "object-key-init"),
      vertical_only: cc11001100_hook("vertical_only", false, "object-key-init"),
      check_appear_throttle_time: cc11001100_hook("check_appear_throttle_time", 300, "object-key-init"),
      url_rewriter_fn: cc11001100_hook("url_rewriter_fn", emptyFn, "object-key-init"),
      no_fake_img_loader: cc11001100_hook("no_fake_img_loader", false, "object-key-init"),
      placeholder_data_img: cc11001100_hook("placeholder_data_img", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC", "object-key-init"),
      placeholder_real_img: cc11001100_hook("placeholder_real_img", "http://ditu.baidu.cn/yyfm/lazyload/0.0.1/img/placeholder.png", "object-key-init")
    }, "var-init"),
    type;
  uap.ready(function () {
    if (!window.lazyICache && !window.isWeb) {
      window.lazyICache = cc11001100_hook("window.lazyICache", uap.icache({
        maxtask: cc11001100_hook("maxtask", 1, "object-key-init")
      }), "assign");
    }
  });
  function emptyFn() {}
  type = cc11001100_hook("type", function () {
    var object_prototype_toString = cc11001100_hook("object_prototype_toString", Object.prototype.toString, "var-init");
    return function (obj) {
      return object_prototype_toString.call(obj).replace("[object ", "").replace("]", "");
    };
  }(), "assign");
  function lazyLoadImage(url, dom, sus) {
    cc11001100_hook("url", url, "function-parameter");
    cc11001100_hook("dom", dom, "function-parameter");
    cc11001100_hook("sus", sus, "function-parameter");
    if (window.lazyICache && !window.isWeb) {
      window.lazyICache.run({
        url: cc11001100_hook("url", url, "object-key-init"),
        success: cc11001100_hook("success", sus ? sus : "", "object-key-init"),
        dom: cc11001100_hook("dom", dom, "object-key-init")
      });
    }
  }
  function belowthefold($element, options) {
    cc11001100_hook("$element", $element, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    var fold;
    if (options._$container == $window) {
      fold = cc11001100_hook("fold", ("innerHeight" in w ? w.innerHeight : $window.height()) + $window.scrollTop(), "assign");
    } else {
      fold = cc11001100_hook("fold", options._$container.offset().top + options._$container.height(), "assign");
    }
    return fold <= $element.offset().top - options.threshold;
  }
  function rightoffold($element, options) {
    cc11001100_hook("$element", $element, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    var fold;
    if (options._$container == $window) {
      fold = cc11001100_hook("fold", $window.width() + ($.fn.scrollLeft ? $window.scrollLeft() : w.pageXOffset), "assign");
    } else {
      fold = cc11001100_hook("fold", options._$container.offset().left + options._$container.width(), "assign");
    }
    return fold <= $element.offset().left - options.threshold;
  }
  function abovethetop($element, options) {
    cc11001100_hook("$element", $element, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    var fold;
    if (options._$container == $window) {
      fold = cc11001100_hook("fold", $window.scrollTop(), "assign");
    } else {
      fold = cc11001100_hook("fold", options._$container.offset().top, "assign");
    }
    return fold >= $element.offset().top + options.threshold + $element.height();
  }
  function leftofbegin($element, options) {
    cc11001100_hook("$element", $element, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    var fold;
    if (options._$container == $window) {
      fold = cc11001100_hook("fold", $.fn.scrollLeft ? $window.scrollLeft() : w.pageXOffset, "assign");
    } else {
      fold = cc11001100_hook("fold", options._$container.offset().left, "assign");
    }
    return fold >= $element.offset().left + options.threshold + $element.width();
  }
  function checkAppear($elements, options) {
    cc11001100_hook("$elements", $elements, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    var counter = cc11001100_hook("counter", 0, "var-init");
    $elements.each(function (i, e) {
      var $element = cc11001100_hook("$element", $elements.eq(i), "var-init");
      if ($element.width() <= 0 && $element.height() <= 0 || $element.css("display") === "none") {
        return;
      }
      function appear() {
        $element.trigger("_lazyload_appear");
        counter = cc11001100_hook("counter", 0, "assign");
      }
      if (options.vertical_only) {
        if (abovethetop($element, options)) {} else if (!belowthefold($element, options)) {
          appear();
        } else {
          if (++counter > options.failure_limit) {
            return false;
          }
        }
      } else {
        if (abovethetop($element, options) || leftofbegin($element, options)) {} else if (!belowthefold($element, options) && !rightoffold($element, options)) {
          appear();
        } else {
          if (++counter > options.failure_limit) {
            return false;
          }
        }
      }
    });
  }
  function getUnloadElements($elements) {
    cc11001100_hook("$elements", $elements, "function-parameter");
    return $elements.filter(function (i, e) {
      return !$elements.eq(i)._lazyload_loadStarted;
    });
  }
  function throttle(func, wait) {
    cc11001100_hook("func", func, "function-parameter");
    cc11001100_hook("wait", wait, "function-parameter");
    var ctx, args, rtn, timeoutID;
    var last = cc11001100_hook("last", 0, "var-init");
    return function throttled() {
      ctx = cc11001100_hook("ctx", this, "assign");
      args = cc11001100_hook("args", arguments, "assign");
      var delta = cc11001100_hook("delta", new Date() - last, "var-init");
      if (!timeoutID) if (delta >= wait) call();else timeoutID = cc11001100_hook("timeoutID", setTimeout(call, wait - delta), "assign");
      return rtn;
    };
    function call() {
      timeoutID = cc11001100_hook("timeoutID", 0, "assign");
      last = cc11001100_hook("last", +new Date(), "assign");
      rtn = cc11001100_hook("rtn", func.apply(ctx, args), "assign");
      ctx = cc11001100_hook("ctx", null, "assign");
      args = cc11001100_hook("args", null, "assign");
    }
  }
  if (!$.fn.hasOwnProperty("lazyload")) {
    $.fn.lazyload = cc11001100_hook("$.fn.lazyload", function (options) {
      var $elements = cc11001100_hook("$elements", this, "var-init"),
        isScrollEvent,
        isScrollTypeEvent,
        throttleCheckAppear;
      if (!$.isPlainObject(options)) {
        options = cc11001100_hook("options", {}, "assign");
      }
      $.each(defaultOptions, function (k, v) {
        if ($.inArray(k, ["threshold", "failure_limit", "check_appear_throttle_time"]) != -1) {
          if (type(options[k]) == "String") {
            options[k] = cc11001100_hook("options[k]", parseInt(options[k], 10), "assign");
          } else {
            options[k] = cc11001100_hook("options[k]", v, "assign");
          }
        } else if (k == "container") {
          if (options.hasOwnProperty(k)) {
            if (options[k] == w || options[k] == document) {
              options._$container = cc11001100_hook("options._$container", $window, "assign");
            } else {
              options._$container = cc11001100_hook("options._$container", $(options[k]), "assign");
            }
          } else {
            options._$container = cc11001100_hook("options._$container", $window, "assign");
          }
          delete options.container;
        } else if (defaultOptions.hasOwnProperty(k) && (!options.hasOwnProperty(k) || type(options[k]) != type(defaultOptions[k]))) {
          options[k] = cc11001100_hook("options[k]", v, "assign");
        }
      });
      isScrollEvent = cc11001100_hook("isScrollEvent", options.event == "scroll", "assign");
      throttleCheckAppear = cc11001100_hook("throttleCheckAppear", options.check_appear_throttle_time == 0 ? checkAppear : throttle(checkAppear, options.check_appear_throttle_time), "assign");
      isScrollTypeEvent = cc11001100_hook("isScrollTypeEvent", isScrollEvent || options.event == "scrollstart" || options.event == "scrollstop", "assign");
      $elements.each(function (i, e) {
        var element = cc11001100_hook("element", this, "var-init"),
          $element = cc11001100_hook("$element", $elements.eq(i), "var-init"),
          placeholderSrc = cc11001100_hook("placeholderSrc", $element.attr("src"), "var-init"),
          originalSrcInAttr = cc11001100_hook("originalSrcInAttr", $element.attr("data-" + options.data_attribute), "var-init"),
          originalSrc = cc11001100_hook("originalSrc", options.url_rewriter_fn == emptyFn ? originalSrcInAttr : options.url_rewriter_fn.call(element, $element, originalSrcInAttr), "var-init"),
          originalSrcset = cc11001100_hook("originalSrcset", $element.attr("data-" + options.data_srcset_attribute), "var-init"),
          isImg = cc11001100_hook("isImg", $element.is("img"), "var-init");
        if ($element._lazyload_loadStarted == true || placeholderSrc == originalSrc) {
          $element._lazyload_loadStarted = cc11001100_hook("$element._lazyload_loadStarted", true, "assign");
          $elements = cc11001100_hook("$elements", getUnloadElements($elements), "assign");
          return;
        }
        $element._lazyload_loadStarted = cc11001100_hook("$element._lazyload_loadStarted", false, "assign");
        if (isImg && !placeholderSrc) {
          $element.one("error", function () {
            $element.attr("src", options.placeholder_real_img);
          }).attr("src", options.placeholder_data_img);
        }
        $element.one("_lazyload_appear", function () {
          var effectParamsIsArray = cc11001100_hook("effectParamsIsArray", $.isArray(options.effect_params), "var-init"),
            effectIsNotImmediacyShow;
          function loadFunc() {
            if (effectIsNotImmediacyShow) {
              $element.hide();
            }
            if (isImg) {
              if (originalSrcset) {
                if (options.cache) lazyLoadImage(originalSrcset, $element);else $element.attr("srcset", originalSrcset);
              }
              if (originalSrc) {
                if (options.cache) lazyLoadImage(originalSrc, $element);else $element.attr("src", originalSrc);
              }
            } else {
              if (options.cache) lazyLoadImage(originalSrc, $element);else $element.css("background-image", 'url("' + originalSrc + '")');
            }
            if (effectIsNotImmediacyShow) {
              $element[options.effect].apply($element, effectParamsIsArray ? options.effect_params : []);
            }
            $elements = cc11001100_hook("$elements", getUnloadElements($elements), "assign");
          }
          if (!$element._lazyload_loadStarted) {
            effectIsNotImmediacyShow = cc11001100_hook("effectIsNotImmediacyShow", options.effect != "show" && $.fn[options.effect] && (!options.effect_params || effectParamsIsArray && options.effect_params.length == 0), "assign");
            if (options.appear != emptyFn) {
              options.appear.call(element, $element, $elements.length, options);
            }
            $element._lazyload_loadStarted = cc11001100_hook("$element._lazyload_loadStarted", true, "assign");
            if (options.no_fake_img_loader || originalSrcset) {
              if (options.load != emptyFn) {
                $element.one("load", function () {
                  options.load.call(element, $element, $elements.length, options);
                });
              }
              loadFunc();
            } else {
              $("<img />").one("load", function () {
                loadFunc();
                if (options.load != emptyFn) {
                  options.load.call(element, $element, $elements.length, options);
                }
              }).attr("src", originalSrc);
            }
          }
        });
        if (!isScrollTypeEvent) {
          $element.on(options.event, function () {
            if (!$element._lazyload_loadStarted) {
              $element.trigger("_lazyload_appear");
            }
          });
        }
      });
      if (isScrollTypeEvent) {
        options._$container.on(options.event, function () {
          throttleCheckAppear($elements, options);
          if (window.lazyLoadTimeout) {
            clearTimeout(window.lazyLoadTimeout);
            window.lazyLoadTimeout = cc11001100_hook("window.lazyLoadTimeout", null, "assign");
          }
          window.lazyLoadTimeout = cc11001100_hook("window.lazyLoadTimeout", setTimeout(function () {
            throttleCheckAppear($elements, options);
          }, 1200), "assign");
        });
      }
      $window.on("resize load", function () {
        throttleCheckAppear($elements, options);
      });
      $(function () {
        throttleCheckAppear($elements, options);
      });
      return this;
    }, "assign");
  }
});
(function () {
  "use strict";

  var Service = cc11001100_hook("Service", Backbone.Service = cc11001100_hook("Backbone.Service", function (options) {
    options || (options = cc11001100_hook("options", {}, "assign"));
    this.cid = cc11001100_hook("this.cid", _.uniqueId("service"), "assign");
    _.extend(this, options);
    this.ajaxCall = cc11001100_hook("this.ajaxCall", options.ajaxCall, "assign");
    this.initialize.apply(this, arguments);
    this.lock = cc11001100_hook("this.lock", {}, "assign");
  }, "assign"), "var-init");
  _.extend(Service.prototype, Backbone.Events, {
    initialize: function () {},
    getLockKey: function (string) {
      if (string) {
        string = cc11001100_hook("string", encodeURI(string), "assign");
        var md5 = cc11001100_hook("md5", uap.crypto.md5(string), "var-init");
        return md5;
      }
    },
    _wrap: function (data, options, lockKey) {
      var self = cc11001100_hook("self", this, "var-init");
      var success = cc11001100_hook("success", options.success, "var-init");
      options.success = cc11001100_hook("options.success", function (data) {
        delete self.lock[lockKey];
        if (success) success(data);
      }, "assign");
      var error = cc11001100_hook("error", options.error, "var-init");
      options.error = cc11001100_hook("options.error", function (data) {
        delete self.lock[lockKey];
        if (error) error(data);
      }, "assign");
    },
    request: function (data, options) {
      var self = cc11001100_hook("self", this, "var-init");
      var lockKey = cc11001100_hook("lockKey", self.getLockKey(JSON.stringify(data)), "var-init");
      self._wrap(data, options, lockKey);
      if (self.lock[lockKey]) {
        self.trigger("error", "Request alreay running. Please wait");
        options.error({
          status: cc11001100_hook("status", -1e5, "object-key-init"),
          msg: cc11001100_hook("msg", "Request alreay running. Please wait", "object-key-init")
        });
        return;
      }
      self.lock[lockKey] = cc11001100_hook("self.lock[lockKey]", true, "assign");
      if (this.ajaxCall) this.ajaxCall(data, options);
    }
  });
  Service.extend = cc11001100_hook("Service.extend", Backbone.Model.extend, "assign");
})();
(function (root, factory) {
  if (typeof exports !== "undefined") {
    module.exports = cc11001100_hook("module.exports", factory(require("underscore"), require("backbone")), "assign");
  } else if (typeof define === "function" && define.amd) {
    define(["underscore", "backbone"], factory);
  } else {
    factory(root._, root.Backbone);
  }
})(this, function (_, Backbone) {
  var Epoxy = cc11001100_hook("Epoxy", Backbone.Epoxy = cc11001100_hook("Backbone.Epoxy", {}, "assign"), "var-init");
  var array = cc11001100_hook("array", Array.prototype, "var-init");
  var isUndefined = cc11001100_hook("isUndefined", _.isUndefined, "var-init");
  var isFunction = cc11001100_hook("isFunction", _.isFunction, "var-init");
  var isObject = cc11001100_hook("isObject", _.isObject, "var-init");
  var isArray = cc11001100_hook("isArray", _.isArray, "var-init");
  var isModel = function (obj) {
    return obj instanceof Backbone.NestedModel;
  };
  var isCollection = function (obj) {
    return obj instanceof Backbone.Collection;
  };
  var blankMethod = function () {};
  var mixins = cc11001100_hook("mixins", {
    mixin: function (extend) {
      extend = cc11001100_hook("extend", extend || {}, "assign");
      for (var i in this.prototype) {
        if (i === "bindings" && extend.bindings) continue;
        if (this.prototype.hasOwnProperty(i) && i !== "constructor") {
          extend[i] = cc11001100_hook("extend[i]", this.prototype[i], "assign");
        }
      }
      return extend;
    }
  }, "var-init");
  function _super(instance, method, args) {
    cc11001100_hook("instance", instance, "function-parameter");
    cc11001100_hook("method", method, "function-parameter");
    cc11001100_hook("args", args, "function-parameter");
    return instance._super.prototype[method].apply(instance, args);
  }
  var modelMap;
  var modelProps = cc11001100_hook("modelProps", ["computeds"], "var-init");
  Epoxy.Model = cc11001100_hook("Epoxy.Model", Backbone.NestedModel.extend({
    _super: cc11001100_hook("_super", Backbone.NestedModel, "object-key-init"),
    constructor: function (attributes, options) {
      _.extend(this, _.pick(options || {}, modelProps));
      _super(this, "constructor", arguments);
      this.initComputeds(this.attributes, options);
    },
    getCopy: function (attribute) {
      return _.clone(this.get(attribute));
    },
    get: function (attribute) {
      modelMap && modelMap.push(["change:" + attribute, this]);
      if (this.hasComputed(attribute)) {
        return this.c()[attribute].get();
      }
      return _super(this, "get", arguments);
    },
    set: function (key, value, options) {
      var params = cc11001100_hook("params", key, "var-init");
      if (params && !isObject(params)) {
        params = cc11001100_hook("params", {}, "assign");
        params[key] = cc11001100_hook("params[key]", value, "assign");
      } else {
        options = cc11001100_hook("options", value, "assign");
      }
      options = cc11001100_hook("options", options || {}, "assign");
      var computedEvents = cc11001100_hook("computedEvents", this._setting = cc11001100_hook("this._setting", [], "assign"), "var-init");
      if (!options.unset) {
        params = cc11001100_hook("params", deepModelSet(this, params, {}, []), "assign");
      }
      delete this._setting;
      var result = cc11001100_hook("result", _super(this, "set", [params, options]), "var-init");
      if (!options.silent) {
        if (!this.hasChanged() && computedEvents.length) {
          this.trigger("change", this);
        }
        _.each(computedEvents, function (evt) {
          this.trigger.apply(this, evt);
        }, this);
      }
      return result;
    },
    toJSON: function (options) {
      var json = cc11001100_hook("json", _super(this, "toJSON", arguments), "var-init");
      if (options && options.computed) {
        _.each(this.c(), function (computed, attribute) {
          json[attribute] = cc11001100_hook("json[attribute]", computed.value, "assign");
        });
      }
      return json;
    },
    destroy: function () {
      this.clearComputeds();
      return _super(this, "destroy", arguments);
    },
    c: function () {
      return this._c || (this._c = cc11001100_hook("this._c", {}, "assign"));
    },
    initComputeds: function (attributes, options) {
      this.clearComputeds();
      var computeds = cc11001100_hook("computeds", _.result(this, "computeds") || {}, "var-init");
      computeds = cc11001100_hook("computeds", _.extend(computeds, _.pick(attributes || {}, _.keys(computeds))), "assign");
      _.each(computeds, function (params, attribute) {
        params._init = cc11001100_hook("params._init", 1, "assign");
        this.addComputed(attribute, params);
      }, this);
      _.invoke(this.c(), "init");
    },
    addComputed: function (attribute, getter, setter) {
      this.removeComputed(attribute);
      var params = cc11001100_hook("params", getter, "var-init");
      var delayInit = cc11001100_hook("delayInit", params._init, "var-init");
      if (isFunction(getter)) {
        var depsIndex = cc11001100_hook("depsIndex", 2, "var-init");
        params = cc11001100_hook("params", {}, "assign");
        params._get = cc11001100_hook("params._get", getter, "assign");
        if (isFunction(setter)) {
          params._set = cc11001100_hook("params._set", setter, "assign");
          depsIndex++;
        }
        params.deps = cc11001100_hook("params.deps", array.slice.call(arguments, depsIndex), "assign");
      }
      this.c()[attribute] = cc11001100_hook("this.c()[attribute]", new EpoxyComputedModel(this, attribute, params, delayInit), "assign");
      return this;
    },
    hasComputed: function (attribute) {
      return this.c().hasOwnProperty(attribute);
    },
    removeComputed: function (attribute) {
      if (this.hasComputed(attribute)) {
        this.c()[attribute].dispose();
        delete this.c()[attribute];
      }
      return this;
    },
    clearComputeds: function () {
      for (var attribute in this.c()) {
        this.removeComputed(attribute);
      }
      return this;
    },
    modifyArray: function (attribute, method, options) {
      var obj = cc11001100_hook("obj", this.get(attribute), "var-init");
      if (isArray(obj) && isFunction(array[method])) {
        var args = cc11001100_hook("args", array.slice.call(arguments, 2), "var-init");
        var result = cc11001100_hook("result", array[method].apply(obj, args), "var-init");
        options = cc11001100_hook("options", options || {}, "assign");
        if (!options.silent) {
          this.trigger("change:" + attribute + " change", this, array, options);
        }
        return result;
      }
      return null;
    },
    modifyObject: function (attribute, property, value, options) {
      var obj = cc11001100_hook("obj", this.get(attribute), "var-init");
      var change = cc11001100_hook("change", false, "var-init");
      if (isObject(obj)) {
        options = cc11001100_hook("options", options || {}, "assign");
        if (isUndefined(value) && obj.hasOwnProperty(property)) {
          delete obj[property];
          change = cc11001100_hook("change", true, "assign");
        } else if (obj[property] !== value) {
          obj[property] = cc11001100_hook("obj[property]", value, "assign");
          change = cc11001100_hook("change", true, "assign");
        }
        if (change && !options.silent) {
          this.trigger("change:" + attribute + " change", this, obj, options);
        }
        return obj;
      }
      return null;
    }
  }, mixins), "assign");
  function deepModelSet(model, toSet, toReturn, stack) {
    cc11001100_hook("model", model, "function-parameter");
    cc11001100_hook("toSet", toSet, "function-parameter");
    cc11001100_hook("toReturn", toReturn, "function-parameter");
    cc11001100_hook("stack", stack, "function-parameter");
    for (var attribute in toSet) {
      if (toSet.hasOwnProperty(attribute)) {
        var value = cc11001100_hook("value", toSet[attribute], "var-init");
        if (model.hasComputed(attribute)) {
          if (!stack.length || !_.contains(stack, attribute)) {
            value = cc11001100_hook("value", model.c()[attribute].set(value), "assign");
            if (value && isObject(value)) {
              toReturn = cc11001100_hook("toReturn", deepModelSet(model, value, toReturn, stack.concat(attribute)), "assign");
            }
          } else {
            throw "Recursive setter: " + stack.join(" > ");
          }
        } else {
          toReturn[attribute] = cc11001100_hook("toReturn[attribute]", value, "assign");
        }
      }
    }
    return toReturn;
  }
  function EpoxyComputedModel(model, name, params, delayInit) {
    cc11001100_hook("model", model, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("params", params, "function-parameter");
    cc11001100_hook("delayInit", delayInit, "function-parameter");
    params = cc11001100_hook("params", params || {}, "assign");
    if (params.get && isFunction(params.get)) {
      params._get = cc11001100_hook("params._get", params.get, "assign");
    }
    if (params.set && isFunction(params.set)) {
      params._set = cc11001100_hook("params._set", params.set, "assign");
    }
    delete params.get;
    delete params.set;
    _.extend(this, params);
    this.model = cc11001100_hook("this.model", model, "assign");
    this.name = cc11001100_hook("this.name", name, "assign");
    this.deps = cc11001100_hook("this.deps", this.deps || [], "assign");
    if (!delayInit) this.init();
  }
  _.extend(EpoxyComputedModel.prototype, Backbone.Events, {
    init: function () {
      var bindings = cc11001100_hook("bindings", {}, "var-init");
      var deps = cc11001100_hook("deps", modelMap = cc11001100_hook("modelMap", [], "assign"), "var-init");
      this.get(true);
      modelMap = cc11001100_hook("modelMap", null, "assign");
      if (deps.length) {
        _.each(deps, function (value) {
          var attribute = cc11001100_hook("attribute", value[0], "var-init");
          var target = cc11001100_hook("target", value[1], "var-init");
          if (!bindings[attribute]) {
            bindings[attribute] = cc11001100_hook("bindings[attribute]", [target], "assign");
          } else if (!_.contains(bindings[attribute], target)) {
            bindings[attribute].push(target);
          }
        });
        _.each(bindings, function (targets, binding) {
          for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", targets.length, "var-init"); i < len; i++) {
            this.listenTo(targets[i], binding, _.bind(this.get, this, true));
          }
        }, this);
      }
    },
    val: function (attribute) {
      return this.model.get(attribute);
    },
    get: function (update) {
      if (update === true && this._get) {
        var val = cc11001100_hook("val", this._get.apply(this.model, _.map(this.deps, this.val, this)), "var-init");
        this.change(val);
      }
      return this.value;
    },
    set: function (val) {
      if (this._get) {
        if (this._set) return this._set.apply(this.model, arguments);else throw "Cannot set read-only computed attribute.";
      }
      this.change(val);
      return null;
    },
    change: function (value) {
      if (!_.isEqual(value, this.value)) {
        this.value = cc11001100_hook("this.value", value, "assign");
        var evt = cc11001100_hook("evt", ["change:" + this.name, this.model, value], "var-init");
        if (this.model._setting) {
          this.model._setting.push(evt);
        } else {
          evt[0] += cc11001100_hook("evt[0]", " change", "assign");
          this.model.trigger.apply(this.model, evt);
        }
      }
    },
    dispose: function () {
      this.stopListening();
      this.off();
      this.model = cc11001100_hook("this.model", this.value = cc11001100_hook("this.value", null, "assign"), "assign");
    }
  });
  var bindingSettings = cc11001100_hook("bindingSettings", {
    optionText: cc11001100_hook("optionText", "label", "object-key-init"),
    optionValue: cc11001100_hook("optionValue", "value", "object-key-init")
  }, "var-init");
  var bindingCache = cc11001100_hook("bindingCache", {}, "var-init");
  function readAccessor(accessor) {
    cc11001100_hook("accessor", accessor, "function-parameter");
    if (isFunction(accessor)) {
      return accessor();
    } else if (isObject(accessor)) {
      accessor = cc11001100_hook("accessor", _.clone(accessor), "assign");
      _.each(accessor, function (value, key) {
        accessor[key] = cc11001100_hook("accessor[key]", readAccessor(value), "assign");
      });
    }
    return accessor;
  }
  function makeHandler(handler) {
    cc11001100_hook("handler", handler, "function-parameter");
    return isFunction(handler) ? {
      set: cc11001100_hook("set", handler, "object-key-init")
    } : handler;
  }
  var bindingHandlers = cc11001100_hook("bindingHandlers", {
    attr: cc11001100_hook("attr", makeHandler(function ($element, value) {
      $element.attr(value);
    }), "object-key-init"),
    checked: cc11001100_hook("checked", makeHandler({
      get: function ($element, currentValue, evt) {
        if ($element.length > 1) {
          $element = cc11001100_hook("$element", $element.filter(evt.target), "assign");
        }
        var checked = cc11001100_hook("checked", !!$element.prop("checked"), "var-init");
        var value = cc11001100_hook("value", $element.val(), "var-init");
        if (this.isRadio($element)) {
          return value;
        } else if (isArray(currentValue)) {
          currentValue = cc11001100_hook("currentValue", currentValue.slice(), "assign");
          var index = cc11001100_hook("index", _.indexOf(currentValue, value), "var-init");
          if (checked && index < 0) {
            currentValue.push(value);
          } else if (!checked && index > -1) {
            currentValue.splice(index, 1);
          }
          return currentValue;
        }
        return checked;
      },
      set: function ($element, value) {
        if ($element.length > 1) {
          $element = cc11001100_hook("$element", $element.filter('[value="' + value + '"]'), "assign");
        }
        var checked = cc11001100_hook("checked", !!value, "var-init");
        if (this.isRadio($element)) {
          checked = cc11001100_hook("checked", value == $element.val(), "assign");
        } else if (isArray(value)) {
          checked = cc11001100_hook("checked", _.contains(value, $element.val()), "assign");
        }
        $element.prop("checked", checked);
      },
      isRadio: function ($element) {
        return $element.attr("type").toLowerCase() === "radio";
      }
    }), "object-key-init"),
    classes: cc11001100_hook("classes", makeHandler(function ($element, value) {
      _.each(value, function (enabled, className) {
        $element.toggleClass(className, !!enabled);
      });
    }), "object-key-init"),
    collection: cc11001100_hook("collection", makeHandler({
      init: function ($element, collection, context, bindings) {
        var html = cc11001100_hook("html", $element.prop("innerHTML"), "var-init");
        var bindView = cc11001100_hook("bindView", $element.attr("data-view") && this.view[$element.attr("data-view")], "var-init");
        $element.empty();
        this.view.itemView = cc11001100_hook("this.view.itemView", this.view.itemView ? this.view.itemView.extend({
          el: cc11001100_hook("el", html || "li", "object-key-init")
        }) : MVVM.ViewModel.extend({
          el: cc11001100_hook("el", html || "li", "object-key-init"),
          events: cc11001100_hook("events", this.view.itemEvents || {}, "object-key-init")
        }), "assign");
        bindView = cc11001100_hook("bindView", bindView && bindView.extend({
          el: cc11001100_hook("el", html, "object-key-init")
        }), "assign");
        this.i = cc11001100_hook("this.i", bindView || (bindings.itemView ? this.view[bindings.itemView] : this.view.itemView), "assign");
        if (!isCollection(collection)) throw 'Binding "collection" requires a Collection.';
        if (!isFunction(this.i)) throw 'Binding "collection" requires an itemView.';
        this.v = cc11001100_hook("this.v", {}, "assign");
      },
      set: function ($element, collection, target) {
        var view;
        var views = cc11001100_hook("views", this.v, "var-init");
        var ItemView = cc11001100_hook("ItemView", this.i, "var-init");
        var models = cc11001100_hook("models", collection.models, "var-init");
        var mapCache = cc11001100_hook("mapCache", viewMap, "var-init");
        viewMap = cc11001100_hook("viewMap", null, "assign");
        target = cc11001100_hook("target", target || collection, "assign");
        if (isModel(target)) {
          if (!views.hasOwnProperty(target.cid)) {
            views[target.cid] = cc11001100_hook("views[target.cid]", view = cc11001100_hook("view", new ItemView({
              model: cc11001100_hook("model", target, "object-key-init"),
              collectionView: cc11001100_hook("collectionView", this.view, "object-key-init")
            }), "assign"), "assign");
            var index = cc11001100_hook("index", _.indexOf(models, target), "var-init");
            var $children = cc11001100_hook("$children", $element.children(), "var-init");
            if (index < $children.length) {
              $children.eq(index).before(view.$el);
            } else {
              $element.append(view.$el);
            }
          } else {
            views[target.cid].remove();
            delete views[target.cid];
          }
        } else if (isCollection(target)) {
          var sort = cc11001100_hook("sort", models.length === _.size(views) && collection.every(function (model) {
            return views.hasOwnProperty(model.cid);
          }), "var-init");
          $element.children().detach();
          var frag = cc11001100_hook("frag", document.createDocumentFragment(), "var-init");
          if (sort) {
            collection.each(function (model) {
              frag.appendChild(views[model.cid].el);
            });
          } else {
            this.clean();
            collection.each(function (model) {
              views[model.cid] = cc11001100_hook("views[model.cid]", view = cc11001100_hook("view", new ItemView({
                model: cc11001100_hook("model", model, "object-key-init"),
                collectionView: cc11001100_hook("collectionView", this.view, "object-key-init")
              }), "assign"), "assign");
              frag.appendChild(view.el);
            }, this);
          }
          $element.append(frag);
        }
        viewMap = cc11001100_hook("viewMap", mapCache, "assign");
      },
      clean: function () {
        for (var id in this.v) {
          if (this.v.hasOwnProperty(id)) {
            this.v[id].remove();
            delete this.v[id];
          }
        }
      }
    }), "object-key-init"),
    css: cc11001100_hook("css", makeHandler(function ($element, value) {
      $element.css(value);
    }), "object-key-init"),
    disabled: cc11001100_hook("disabled", makeHandler(function ($element, value) {
      $element.prop("disabled", !!value);
    }), "object-key-init"),
    enabled: cc11001100_hook("enabled", makeHandler(function ($element, value) {
      $element.prop("disabled", !value);
    }), "object-key-init"),
    html: cc11001100_hook("html", makeHandler(function ($element, value) {
      $element.html(value);
    }), "object-key-init"),
    options: cc11001100_hook("options", makeHandler({
      init: function ($element, value, context, bindings) {
        this.e = cc11001100_hook("this.e", bindings.optionsEmpty, "assign");
        this.d = cc11001100_hook("this.d", bindings.optionsDefault, "assign");
        this.v = cc11001100_hook("this.v", bindings.value, "assign");
      },
      set: function ($element, value) {
        var self = cc11001100_hook("self", this, "var-init");
        var optionsEmpty = cc11001100_hook("optionsEmpty", readAccessor(self.e), "var-init");
        var optionsDefault = cc11001100_hook("optionsDefault", readAccessor(self.d), "var-init");
        var currentValue = cc11001100_hook("currentValue", readAccessor(self.v), "var-init");
        var options = cc11001100_hook("options", isCollection(value) ? value.models : value, "var-init");
        var numOptions = cc11001100_hook("numOptions", options.length, "var-init");
        var enabled = cc11001100_hook("enabled", true, "var-init");
        var html = cc11001100_hook("html", "", "var-init");
        if (!numOptions && !optionsDefault && optionsEmpty) {
          html += cc11001100_hook("html", self.opt(optionsEmpty, numOptions), "assign");
          enabled = cc11001100_hook("enabled", false, "assign");
        } else {
          if (optionsDefault) {
            options = cc11001100_hook("options", [optionsDefault].concat(options), "assign");
          }
          _.each(options, function (option, index) {
            html += cc11001100_hook("html", self.opt(option, numOptions), "assign");
          });
        }
        $element.html(html).prop("disabled", !enabled).val(currentValue);
        if ($element[0].selectedIndex < 0 && $element.children().length) {
          $element[0].selectedIndex = cc11001100_hook("$element[0].selectedIndex", 0, "assign");
        }
        var revisedValue = cc11001100_hook("revisedValue", $element.val(), "var-init");
        if (self.v && !_.isEqual(currentValue, revisedValue)) {
          self.v(revisedValue);
        }
      },
      opt: function (option, numOptions) {
        var label = cc11001100_hook("label", option, "var-init");
        var value = cc11001100_hook("value", option, "var-init");
        var textAttr = cc11001100_hook("textAttr", bindingSettings.optionText, "var-init");
        var valueAttr = cc11001100_hook("valueAttr", bindingSettings.optionValue, "var-init");
        if (isObject(option)) {
          label = cc11001100_hook("label", isModel(option) ? option.get(textAttr) : option[textAttr], "assign");
          value = cc11001100_hook("value", isModel(option) ? option.get(valueAttr) : option[valueAttr], "assign");
        }
        return ['<option value="', value, '">', label, "</option>"].join("");
      },
      clean: function () {
        this.d = cc11001100_hook("this.d", this.e = cc11001100_hook("this.e", this.v = cc11001100_hook("this.v", 0, "assign"), "assign"), "assign");
      }
    }), "object-key-init"),
    template: cc11001100_hook("template", makeHandler({
      init: function ($element, value, context) {
        var raw = cc11001100_hook("raw", $element.find("script,template"), "var-init");
        this.t = cc11001100_hook("this.t", _.template(raw.length ? raw.html() : $element.html()), "assign");
        if (isArray(value)) {
          return _.pick(context, value);
        }
      },
      set: function ($element, value) {
        value = cc11001100_hook("value", isModel(value) ? value.toJSON({
          computed: cc11001100_hook("computed", true, "object-key-init")
        }) : value, "assign");
        $element.html(this.t(value));
      },
      clean: function () {
        this.t = cc11001100_hook("this.t", null, "assign");
      }
    }), "object-key-init"),
    "for": cc11001100_hook("for", makeHandler({
      init: function ($element, value, context) {
        var raw = cc11001100_hook("raw", $element, "var-init");
        this.html = cc11001100_hook("this.html", $element.prop("innerHTML"), "assign");
        $element.empty();
        var bindView = cc11001100_hook("bindView", $element.attr("data-view") && this.view[$element.attr("data-view")], "var-init");
        this.i = cc11001100_hook("this.i", bindView || MVVM.ViewModel, "assign");
        this.v = cc11001100_hook("this.v", {}, "assign");
      },
      set: function ($element, value) {
        var ItemView = cc11001100_hook("ItemView", this.i, "var-init");
        var views = cc11001100_hook("views", this.v, "var-init");
        this.clean();
        for (var i in value) {
          var obj = cc11001100_hook("obj", _.isObject(value[i]) ? value[i] : {
            value: cc11001100_hook("value", value[i], "object-key-init")
          }, "var-init");
          var item = cc11001100_hook("item", new Backbone.Epoxy.Model(obj), "var-init");
          var view = cc11001100_hook("view", new ItemView({
            el: cc11001100_hook("el", this.html, "object-key-init"),
            model: cc11001100_hook("model", item, "object-key-init")
          }), "var-init");
          views[item.cid] = cc11001100_hook("views[item.cid]", view, "assign");
          $element.append(view.$el);
        }
      },
      clean: function () {
        for (var id in this.v) {
          if (this.v.hasOwnProperty(id)) {
            this.v[id].remove();
            delete this.v[id];
          }
        }
      }
    }), "object-key-init"),
    text: cc11001100_hook("text", makeHandler({
      get: function ($element) {
        return $element.text();
      },
      set: function ($element, value) {
        $element.text(value);
      }
    }), "object-key-init"),
    toggle: cc11001100_hook("toggle", makeHandler(function ($element, value) {
      $element.toggle(!!value);
    }), "object-key-init"),
    value: cc11001100_hook("value", makeHandler({
      get: function ($element) {
        return $element.val();
      },
      set: function ($element, value) {
        try {
          if ($element.val() + "" != value + "") $element.val(value);
        } catch (error) {}
      }
    }), "object-key-init")
  }, "var-init");
  function makeFilter(handler) {
    cc11001100_hook("handler", handler, "function-parameter");
    return function () {
      var params = cc11001100_hook("params", arguments, "var-init");
      var read = cc11001100_hook("read", isFunction(handler) ? handler : handler.get, "var-init");
      var write = cc11001100_hook("write", handler.set, "var-init");
      return function (value) {
        return isUndefined(value) ? read.apply(this, _.map(params, readAccessor)) : params[0]((write ? write : read).call(this, value));
      };
    };
  }
  var bindingFilters = cc11001100_hook("bindingFilters", {
    all: cc11001100_hook("all", makeFilter(function () {
      var params = cc11001100_hook("params", arguments, "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", params.length, "var-init"); i < len; i++) {
        if (!params[i]) return false;
      }
      return true;
    }), "object-key-init"),
    any: cc11001100_hook("any", makeFilter(function () {
      var params = cc11001100_hook("params", arguments, "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", params.length, "var-init"); i < len; i++) {
        if (params[i]) return true;
      }
      return false;
    }), "object-key-init"),
    length: cc11001100_hook("length", makeFilter(function (value) {
      return value.length || 0;
    }), "object-key-init"),
    none: cc11001100_hook("none", makeFilter(function () {
      var params = cc11001100_hook("params", arguments, "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", params.length, "var-init"); i < len; i++) {
        if (params[i]) return false;
      }
      return true;
    }), "object-key-init"),
    not: cc11001100_hook("not", makeFilter(function (value) {
      return !value;
    }), "object-key-init"),
    format: cc11001100_hook("format", makeFilter(function (str) {
      var params = cc11001100_hook("params", arguments, "var-init");
      for (var i = cc11001100_hook("i", 1, "var-init"), len = cc11001100_hook("len", params.length, "var-init"); i < len; i++) {
        str = cc11001100_hook("str", str.replace(new RegExp("\\$" + i, "g"), params[i]), "assign");
      }
      return str;
    }), "object-key-init"),
    select: cc11001100_hook("select", makeFilter(function (condition, truthy, falsey) {
      return condition ? truthy : falsey;
    }), "object-key-init"),
    csv: cc11001100_hook("csv", makeFilter({
      get: function (value) {
        value = cc11001100_hook("value", String(value), "assign");
        return value ? value.split(",") : [];
      },
      set: function (value) {
        return isArray(value) ? value.join(",") : value;
      }
    }), "object-key-init"),
    integer: cc11001100_hook("integer", makeFilter(function (value) {
      return value ? parseInt(value, 10) : 0;
    }), "object-key-init"),
    decimal: cc11001100_hook("decimal", makeFilter(function (value) {
      return value ? parseFloat(value) : 0;
    }), "object-key-init")
  }, "var-init");
  var allowedParams = cc11001100_hook("allowedParams", {
    events: cc11001100_hook("events", 1, "object-key-init"),
    itemView: cc11001100_hook("itemView", 1, "object-key-init"),
    optionsDefault: cc11001100_hook("optionsDefault", 1, "object-key-init"),
    optionsEmpty: cc11001100_hook("optionsEmpty", 1, "object-key-init")
  }, "var-init");
  Epoxy.binding = cc11001100_hook("Epoxy.binding", {
    allowedParams: cc11001100_hook("allowedParams", allowedParams, "object-key-init"),
    addHandler: function (name, handler) {
      bindingHandlers[name] = cc11001100_hook("bindingHandlers[name]", makeHandler(handler), "assign");
    },
    addFilter: function (name, handler) {
      bindingFilters[name] = cc11001100_hook("bindingFilters[name]", makeFilter(handler), "assign");
    },
    config: function (settings) {
      _.extend(bindingSettings, settings);
    },
    emptyCache: function () {
      bindingCache = cc11001100_hook("bindingCache", {}, "assign");
    }
  }, "assign");
  var viewMap;
  var viewProps = cc11001100_hook("viewProps", ["viewModel", "bindings", "bindingFilters", "bindingHandlers", "bindingSources", "computeds"], "var-init");
  Epoxy.View = cc11001100_hook("Epoxy.View", Backbone.View.extend({
    _super: cc11001100_hook("_super", Backbone.View, "object-key-init"),
    constructor: function (options) {
      _.extend(this, _.pick(options || {}, viewProps));
      _super(this, "constructor", arguments);
      this.applyBindings();
    },
    b: function () {
      return this._b || (this._b = cc11001100_hook("this._b", [], "assign"));
    },
    bindings: cc11001100_hook("bindings", "data-bind", "object-key-init"),
    setterOptions: cc11001100_hook("setterOptions", null, "object-key-init"),
    applyBindings: function () {
      this.removeBindings();
      var self = cc11001100_hook("self", this, "var-init");
      var sources = cc11001100_hook("sources", _.clone(_.result(self, "bindingSources")), "var-init");
      var declarations = cc11001100_hook("declarations", self.bindings, "var-init");
      var options = cc11001100_hook("options", self.setterOptions, "var-init");
      var handlers = cc11001100_hook("handlers", _.clone(bindingHandlers), "var-init");
      var filters = cc11001100_hook("filters", _.clone(bindingFilters), "var-init");
      var context = cc11001100_hook("context", self._c = cc11001100_hook("self._c", {}, "assign"), "var-init");
      _.each(_.result(self, "bindingHandlers") || {}, function (handler, name) {
        handlers[name] = cc11001100_hook("handlers[name]", makeHandler(handler), "assign");
      });
      _.each(_.result(self, "bindingFilters") || {}, function (filter, name) {
        filters[name] = cc11001100_hook("filters[name]", makeFilter(filter), "assign");
      });
      self.model = cc11001100_hook("self.model", addSourceToViewContext(self, context, options, "model"), "assign");
      self.viewModel = cc11001100_hook("self.viewModel", addSourceToViewContext(self, context, options, "viewModel"), "assign");
      self.collection = cc11001100_hook("self.collection", addSourceToViewContext(self, context, options, "collection"), "assign");
      if (self.collection && self.collection.view) {
        self.itemView = cc11001100_hook("self.itemView", self.collection.view, "assign");
      }
      if (sources) {
        _.each(sources, function (source, sourceName) {
          sources[sourceName] = cc11001100_hook("sources[sourceName]", addSourceToViewContext(sources, context, options, sourceName, sourceName), "assign");
        });
        self.bindingSources = cc11001100_hook("self.bindingSources", sources, "assign");
      }
      _.each(_.result(self, "computeds") || {}, function (computed, name) {
        var getter = cc11001100_hook("getter", isFunction(computed) ? computed : computed.get, "var-init");
        var setter = cc11001100_hook("setter", computed.set, "var-init");
        var deps = cc11001100_hook("deps", computed.deps, "var-init");
        context[name] = cc11001100_hook("context[name]", function (value) {
          return !isUndefined(value) && setter ? setter.call(self, value) : getter.apply(self, getDepsFromViewContext(self._c, deps));
        }, "assign");
      });
      if (isObject(declarations)) {
        _.each(declarations, function (elementDecs, selector) {
          var $element = cc11001100_hook("$element", queryViewForSelector(self, selector), "var-init");
          if (isObject(elementDecs)) {
            elementDecs = cc11001100_hook("elementDecs", flattenBindingDeclaration(elementDecs), "assign");
          }
          if ($element.length) {
            bindElementToView(self, $element, elementDecs, context, handlers, filters);
          }
        });
      } else {
        var $elements = cc11001100_hook("$elements", queryViewForSelector(self, "[" + declarations + "]"), "var-init");
        var $scopes = cc11001100_hook("$scopes", $("[mvvm-scope]", self.$el), "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < $scopes.length; i++) {
          var $sub = cc11001100_hook("$sub", $("[" + declarations + "]", $scopes[i]), "var-init");
          $sub.each(function () {
            $elements = cc11001100_hook("$elements", $elements.not(this), "assign");
          });
        }
        $elements.each(function () {
          var $element = cc11001100_hook("$element", Backbone.$(this), "var-init");
          bindElementToView(self, $element, $element.attr(declarations), context, handlers, filters);
        });
      }
    },
    getBinding: function (attribute) {
      return accessViewContext(this._c, attribute);
    },
    setBinding: function (attribute, value) {
      return accessViewContext(this._c, attribute, value);
    },
    removeBindings: function () {
      this._c = cc11001100_hook("this._c", null, "assign");
      if (this._b) {
        while (this._b.length) {
          this._b.pop().dispose();
        }
      }
    },
    remove: function () {
      this.removeBindings();
      _super(this, "remove", arguments);
    }
  }, mixins), "assign");
  function addSourceToViewContext(source, context, options, name, prefix) {
    cc11001100_hook("source", source, "function-parameter");
    cc11001100_hook("context", context, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("prefix", prefix, "function-parameter");
    source = cc11001100_hook("source", _.result(source, name), "assign");
    if (!source) return;
    if (isModel(source)) {
      prefix = cc11001100_hook("prefix", prefix ? prefix + "_" : "", "assign");
      context["$" + name] = cc11001100_hook("context[\"$\" + name]", function () {
        viewMap && viewMap.push([source, "change"]);
        return source;
      }, "assign");
      context["$attr"] = cc11001100_hook("context[\"$attr\"]", function (key) {
        return function (value) {
          return accessViewDataAttribute(source, key, value, options);
        };
      }, "assign");
      var modelAttributes = cc11001100_hook("modelAttributes", _.extend({}, source.attributes, _.isFunction(source.c) ? source.c() : {}), "var-init");
      _.each(modelAttributes, function (value, attribute) {
        context[prefix + attribute] = cc11001100_hook("context[prefix + attribute]", function (value) {
          return accessViewDataAttribute(source, attribute, value, options);
        }, "assign");
      });
    } else if (isCollection(source)) {
      context["$" + name] = cc11001100_hook("context[\"$\" + name]", function () {
        viewMap && viewMap.push([source, "reset add remove sort update"]);
        return source;
      }, "assign");
    }
    return source;
  }
  function accessViewDataAttribute(source, attribute, value, options) {
    cc11001100_hook("source", source, "function-parameter");
    cc11001100_hook("attribute", attribute, "function-parameter");
    cc11001100_hook("value", value, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    viewMap && viewMap.push([source, "change:" + attribute]);
    if (!isUndefined(value)) {
      if (!isObject(value) || isArray(value) || _.isDate(value)) {
        var val = cc11001100_hook("val", value, "var-init");
        value = cc11001100_hook("value", {}, "assign");
        value[attribute] = cc11001100_hook("value[attribute]", val, "assign");
      }
      return options && options.save ? source.save(value, options) : source.set(value, options);
    }
    return source.get(attribute);
  }
  function queryViewForSelector(view, selector) {
    cc11001100_hook("view", view, "function-parameter");
    cc11001100_hook("selector", selector, "function-parameter");
    if (selector === ":el" || selector === ":scope") return view.$el;
    var $elements = cc11001100_hook("$elements", view.$(selector), "var-init");
    if (view.$el.is(selector)) {
      $elements = cc11001100_hook("$elements", $elements.add(view.$el), "assign");
    }
    return $elements;
  }
  function bindElementToView(view, $element, declarations, context, handlers, filters) {
    cc11001100_hook("view", view, "function-parameter");
    cc11001100_hook("$element", $element, "function-parameter");
    cc11001100_hook("declarations", declarations, "function-parameter");
    cc11001100_hook("context", context, "function-parameter");
    cc11001100_hook("handlers", handlers, "function-parameter");
    cc11001100_hook("filters", filters, "function-parameter");
    try {
      if (context.$model) {
        var parserFunct = cc11001100_hook("parserFunct", bindingCache[declarations] || (bindingCache[declarations] = cc11001100_hook("bindingCache[declarations]", new Function("$m", "$f", "$c", "with($m){with($f){with($c){return{" + declarations + "}}}}"), "assign")), "var-init");
        var bindings = cc11001100_hook("bindings", parserFunct(view.model, filters, context), "var-init");
      } else {
        var parserFunct = cc11001100_hook("parserFunct", bindingCache[declarations] || (bindingCache[declarations] = cc11001100_hook("bindingCache[declarations]", new Function("$f", "$c", "with($f){with($c){return{" + declarations + "}}}"), "assign")), "var-init");
        var bindings = cc11001100_hook("bindings", parserFunct(filters, context), "var-init");
      }
    } catch (error) {
      console.log('Error parsing bindings: "' + declarations + '"\n>> ' + error);
      return;
    }
    var events = cc11001100_hook("events", _.map(_.union(bindings.events || [], ["change"]), function (name) {
      return name + ".epoxy";
    }).join(" "), "var-init");
    _.each(bindings, function (accessor, handlerName) {
      if (handlers.hasOwnProperty(handlerName)) {
        view.b().push(new EpoxyBinding(view, $element, handlers[handlerName], accessor, events, context, bindings));
      } else if (!allowedParams.hasOwnProperty(handlerName)) {
        throw 'binding handler "' + handlerName + '" is not defined.';
      }
    });
  }
  function accessViewContext(context, attribute, value) {
    cc11001100_hook("context", context, "function-parameter");
    cc11001100_hook("attribute", attribute, "function-parameter");
    cc11001100_hook("value", value, "function-parameter");
    if (context && context.hasOwnProperty(attribute)) {
      return isUndefined(value) ? readAccessor(context[attribute]) : context[attribute](value);
    }
  }
  function getDepsFromViewContext(context, attributes) {
    cc11001100_hook("context", context, "function-parameter");
    cc11001100_hook("attributes", attributes, "function-parameter");
    var values = cc11001100_hook("values", [], "var-init");
    if (attributes && context) {
      for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", attributes.length, "var-init"); i < len; i++) {
        values.push(attributes[i] in context ? context[attributes[i]]() : null);
      }
    }
    return values;
  }
  var identifierRegex = cc11001100_hook("identifierRegex", /^[a-z_$][a-z0-9_$]*$/i, "var-init");
  var quotedStringRegex = cc11001100_hook("quotedStringRegex", /^\s*(["']).*\1\s*$/, "var-init");
  function flattenBindingDeclaration(declaration) {
    cc11001100_hook("declaration", declaration, "function-parameter");
    var result = cc11001100_hook("result", [], "var-init");
    for (var key in declaration) {
      var value = cc11001100_hook("value", declaration[key], "var-init");
      if (isObject(value)) {
        value = cc11001100_hook("value", "{" + flattenBindingDeclaration(value) + "}", "assign");
      }
      if (!identifierRegex.test(key) && !quotedStringRegex.test(key)) {
        key = cc11001100_hook("key", '"' + key + '"', "assign");
      }
      result.push(key + ":" + value);
    }
    return result.join(",");
  }
  function EpoxyBinding(view, $element, handler, accessor, events, context, bindings) {
    cc11001100_hook("view", view, "function-parameter");
    cc11001100_hook("$element", $element, "function-parameter");
    cc11001100_hook("handler", handler, "function-parameter");
    cc11001100_hook("accessor", accessor, "function-parameter");
    cc11001100_hook("events", events, "function-parameter");
    cc11001100_hook("context", context, "function-parameter");
    cc11001100_hook("bindings", bindings, "function-parameter");
    var self = cc11001100_hook("self", this, "var-init");
    var tag = cc11001100_hook("tag", $element[0].tagName.toLowerCase(), "var-init");
    var changable = cc11001100_hook("changable", tag == "input" || tag == "select" || tag == "textarea" || $element.prop("contenteditable") == "true", "var-init");
    var triggers = cc11001100_hook("triggers", [], "var-init");
    var reset = function (target) {
      self.$el && self.set(self.$el, readAccessor(accessor), target);
    };
    self.view = cc11001100_hook("self.view", view, "assign");
    self.$el = cc11001100_hook("self.$el", $element, "assign");
    self.evt = cc11001100_hook("self.evt", events, "assign");
    _.extend(self, handler);
    accessor = cc11001100_hook("accessor", self.init(self.$el, readAccessor(accessor), context, bindings) || accessor, "assign");
    viewMap = cc11001100_hook("viewMap", triggers, "assign");
    reset();
    viewMap = cc11001100_hook("viewMap", null, "assign");
    if (changable && handler.get && isFunction(accessor)) {
      self.$el.on(events, function (evt) {
        accessor(self.get(self.$el, readAccessor(accessor), evt));
      });
    }
    if (triggers.length) {
      for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", triggers.length, "var-init"); i < len; i++) {
        self.listenTo(triggers[i][0], triggers[i][1], reset);
      }
    }
  }
  _.extend(EpoxyBinding.prototype, Backbone.Events, {
    init: cc11001100_hook("init", blankMethod, "object-key-init"),
    get: cc11001100_hook("get", blankMethod, "object-key-init"),
    set: cc11001100_hook("set", blankMethod, "object-key-init"),
    clean: cc11001100_hook("clean", blankMethod, "object-key-init"),
    dispose: function () {
      this.clean();
      this.stopListening();
      this.$el.off(this.evt);
      this.$el = cc11001100_hook("this.$el", this.view = cc11001100_hook("this.view", null, "assign"), "assign");
    }
  });
  return Epoxy;
});
var MVVM = cc11001100_hook("MVVM", {
  ViewModel: cc11001100_hook("ViewModel", Backbone.Epoxy.View, "object-key-init"),
  Model: cc11001100_hook("Model", Backbone.Epoxy.Model, "object-key-init"),
  Collection: cc11001100_hook("Collection", Backbone.Collection, "object-key-init"),
  Service: cc11001100_hook("Service", Backbone.Service, "object-key-init"),
  Binding: cc11001100_hook("Binding", Backbone.Epoxy.binding, "object-key-init")
}, "var-init");
MVVM.Model.prototype.echarts = cc11001100_hook("MVVM.Model.prototype.echarts", function (attr, lab) {
  if (lab) {
    return [{
      value: cc11001100_hook("value", this.get(attr), "object-key-init"),
      name: cc11001100_hook("name", this.get(lab), "object-key-init")
    }];
  }
  return this.get(attr);
}, "assign");
MVVM.Collection.prototype.echarts = cc11001100_hook("MVVM.Collection.prototype.echarts", function (attr, lab) {
  var tdata = cc11001100_hook("tdata", this.pluck(attr), "var-init");
  var tlab = cc11001100_hook("tlab", this.pluck(lab), "var-init");
  if (tlab.length > 0) {
    var arr = cc11001100_hook("arr", [], "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < tdata.length; i++) {
      arr.push({
        value: cc11001100_hook("value", tdata[i], "object-key-init"),
        name: cc11001100_hook("name", tlab[i], "object-key-init")
      });
    }
    return arr;
  }
  return [];
}, "assign");