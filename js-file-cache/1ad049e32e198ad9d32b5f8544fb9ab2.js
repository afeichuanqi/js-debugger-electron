jQuery.extend(F, {
  unique: cc11001100_hook("unique", function () {
    var uniq = cc11001100_hook("uniq", +new Date(), "var-init");
    return function (prefix) {
      return (prefix || "") + ++uniq;
    };
  }(), "object-key-init"),
  mix: cc11001100_hook("mix", jQuery.extend, "object-key-init"),
  inherit: function () {
    var args = cc11001100_hook("args", Array.prototype.slice.call(arguments), "var-init"),
      subclass = cc11001100_hook("subclass", args[0], "var-init"),
      subpro = cc11001100_hook("subpro", subclass.prototype, "var-init"),
      oinitialize = cc11001100_hook("oinitialize", subpro.initialize, "var-init"),
      initializes = cc11001100_hook("initializes", [], "var-init"),
      index = cc11001100_hook("index", 1, "var-init"),
      superclass,
      superpro;
    while (superclass = cc11001100_hook("superclass", args[index++], "assign")) {
      superpro = cc11001100_hook("superpro", F.isFunction(superclass) ? superclass.prototype : F.isPlainObject(superclass) ? superclass : null, "assign");
      if (superpro) {
        F.isFunction(superpro.initialize) && initializes.push(superpro.initialize);
        for (var key in superpro) {
          if (superpro.hasOwnProperty(key) && key !== "initialize") {
            subpro[key] = cc11001100_hook("subpro[key]", superpro[key], "assign");
          }
        }
      }
    }
    if (initializes.length) {
      oinitialize && initializes.push(oinitialize);
      subpro.initialize = cc11001100_hook("subpro.initialize", function () {
        var args = cc11001100_hook("args", arguments, "var-init"),
          idx = cc11001100_hook("idx", 0, "var-init"),
          len = cc11001100_hook("len", initializes.length, "var-init");
        for (; idx < len; idx++) {
          initializes[idx].apply(this, args);
        }
      }, "assign");
    }
    return subclass;
  }
});
jQuery.each("isFunction,isPlainObject,isArray".split(","), function (_, method) {
  F[method] = cc11001100_hook("F[method]", jQuery[method], "assign");
});
F.module("superman:superuijs/util/tool", function (require, exports) {
  exports.unparam = cc11001100_hook("exports.unparam", function (param) {
    if (typeof param !== "string" || !param) {
      return {};
    }
    var obj = cc11001100_hook("obj", {}, "var-init"),
      pm = cc11001100_hook("pm", param.split("&"), "var-init");
    if (pm.length) {
      F.each(pm, function (item) {
        item = cc11001100_hook("item", item.split("="), "assign");
        if (item.length == 2) {
          obj[item[0]] = cc11001100_hook("obj[item[0]]", item[1], "assign");
        }
      });
    }
    return obj;
  }, "assign");
  exports.substitute = cc11001100_hook("exports.substitute", function (str, obj) {
    return str.replace(/\{([^{}]+)\}/g, function (match, key) {
      var value = cc11001100_hook("value", obj[key], "var-init");
      return value !== undefined ? "" + value : "";
    });
  }, "assign");
  exports.throttle = cc11001100_hook("exports.throttle", function (fn, delay) {
    var timer = cc11001100_hook("timer", null, "var-init");
    return function () {
      var context = cc11001100_hook("context", this, "var-init"),
        args = cc11001100_hook("args", arguments, "var-init");
      clearTimeout(timer);
      timer = cc11001100_hook("timer", setTimeout(function () {
        fn.apply(context, args);
      }, delay), "assign");
    };
  }, "assign");
  exports.addStyle = cc11001100_hook("exports.addStyle", function (csstext) {
    $("<style>" + csstext + "</style>").appendTo("head");
  }, "assign");
  exports.cssval = cc11001100_hook("exports.cssval", function (item, key) {
    var css = cc11001100_hook("css", (item.css(key) || "").replace(/[^0-9\-]/g, "") || "0", "var-init");
    return parseInt(css, 10) || 0;
  }, "assign");
});
F.module("superman:superuijs/util/emitter", function (require, exports) {
  var EMITER_ID = cc11001100_hook("EMITER_ID", "Emitter:" + F.unique(), "var-init"),
    Emitter = function () {
      this.initialize();
    };
  Emitter.prototype = cc11001100_hook("Emitter.prototype", {
    initialize: function () {
      this.__emitter = cc11001100_hook("this.__emitter", {}, "assign");
    },
    addListener: function (event, handler, data, once) {
      this.__emitter[event = cc11001100_hook("event", event.toLowerCase(), "assign")] || (this.__emitter[event] = cc11001100_hook("this.__emitter[event]", [], "assign"));
      if (typeof handler == "function") {
        this.__emitter[event].push({
          handler: cc11001100_hook("handler", handler, "object-key-init"),
          guid: cc11001100_hook("guid", handler[EMITER_ID] || (handler[EMITER_ID] = cc11001100_hook("handler[EMITER_ID]", F.unique(), "assign")), "object-key-init"),
          data: cc11001100_hook("data", data || {}, "object-key-init"),
          once: cc11001100_hook("once", once, "object-key-init")
        });
      }
      return this;
    },
    on: function (event, handler, data, once) {
      return this.addListener(event, handler, data, once);
    },
    once: function (event, handler, data) {
      return this.addListener(event, handler, data, true);
    },
    removeListener: function (event, handler) {
      if (typeof event != "undefined") {
        event = cc11001100_hook("event", event.toLowerCase(), "assign");
        if (typeof handler !== "function") {
          delete this.__emitter[event];
        } else {
          var emitter = cc11001100_hook("emitter", this.__emitter[event], "var-init"),
            uniq = cc11001100_hook("uniq", handler[EMITER_ID], "var-init");
          for (var i = cc11001100_hook("i", 0, "var-init"), l = cc11001100_hook("l", emitter.length, "var-init"); i < l; i++) {
            if (uniq === emitter[i][EMITER_ID]) {
              emitter.splice(i, 1);
            }
          }
        }
      } else {
        for (var p in this.__emitter) {
          if (this.__emitter.hasOwnProperty(p)) {
            this.removeListener(this.__emitter[p]);
          }
        }
      }
      return this;
    },
    off: function (event, handler) {
      return this.removeListener(event, handler);
    },
    emit: function (event, data) {
      var emitter,
        emit,
        index = cc11001100_hook("index", -1, "var-init"),
        rtv;
      if (emitter = cc11001100_hook("emitter", this.__emitter[event = cc11001100_hook("event", event.toLowerCase(), "assign")], "assign")) {
        while (emit = cc11001100_hook("emit", emitter[++index], "assign")) {
          if (data || emit.data) {
            data = cc11001100_hook("data", F.mix(data || {}, emit.data), "assign");
          }
          emit.once && emitter.splice(index, 1);
          if (false === (rtv = cc11001100_hook("rtv", emit.handler(data), "assign"))) {
            break;
          }
        }
      }
      if (event !== "__onemit__") {
        this.emit("__onEmit__", {
          event: cc11001100_hook("event", event, "object-key-init")
        });
      }
      return rtv;
    },
    fire: function (event, data) {
      return this.emit(event, data);
    }
  }, "assign");
  return Emitter;
});
F.module("superman:superuijs/util/dot", function (require, exports) {
  var doT = cc11001100_hook("doT", {
      version: cc11001100_hook("version", "1.0.1", "object-key-init"),
      templateSettings: {
        evaluate: cc11001100_hook("evaluate", /\{\{([\s\S]+?(\}?)+)\}\}/g, "object-key-init"),
        interpolate: cc11001100_hook("interpolate", /\{\{=([\s\S]+?)\}\}/g, "object-key-init"),
        encode: cc11001100_hook("encode", /\{\{!([\s\S]+?)\}\}/g, "object-key-init"),
        use: cc11001100_hook("use", /\{\{#([\s\S]+?)\}\}/g, "object-key-init"),
        useParams: cc11001100_hook("useParams", /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g, "object-key-init"),
        define: cc11001100_hook("define", /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g, "object-key-init"),
        defineParams: cc11001100_hook("defineParams", /^\s*([\w$]+):([\s\S]+)/, "object-key-init"),
        conditional: cc11001100_hook("conditional", /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g, "object-key-init"),
        iterate: cc11001100_hook("iterate", /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g, "object-key-init"),
        varname: cc11001100_hook("varname", "it", "object-key-init"),
        strip: cc11001100_hook("strip", true, "object-key-init"),
        append: cc11001100_hook("append", true, "object-key-init"),
        selfcontained: cc11001100_hook("selfcontained", false, "object-key-init")
      },
      template: cc11001100_hook("template", undefined, "object-key-init"),
      compile: cc11001100_hook("compile", undefined, "object-key-init")
    }, "var-init"),
    global;
  function encodeHTMLSource() {
    var encodeHTMLRules = cc11001100_hook("encodeHTMLRules", {
        "&": cc11001100_hook("&", "&#38;", "object-key-init"),
        "<": cc11001100_hook("<", "&#60;", "object-key-init"),
        ">": cc11001100_hook(">", "&#62;", "object-key-init"),
        '"': cc11001100_hook('"', "&#34;", "object-key-init"),
        "'": cc11001100_hook("'", "&#39;", "object-key-init"),
        "/": cc11001100_hook("/", "&#47;", "object-key-init")
      }, "var-init"),
      matchHTML = cc11001100_hook("matchHTML", /&(?!#?\w+;)|<|>|"|'|\//g, "var-init");
    return function () {
      return this ? this.replace(matchHTML, function (m) {
        return encodeHTMLRules[m] || m;
      }) : this;
    };
  }
  String.prototype.encodeHTML = cc11001100_hook("String.prototype.encodeHTML", encodeHTMLSource(), "assign");
  var startend = cc11001100_hook("startend", {
      append: {
        start: cc11001100_hook("start", "'+(", "object-key-init"),
        end: cc11001100_hook("end", ")+'", "object-key-init"),
        endencode: cc11001100_hook("endencode", "||'').toString().encodeHTML()+'", "object-key-init")
      },
      split: {
        start: cc11001100_hook("start", "';out+=(", "object-key-init"),
        end: cc11001100_hook("end", ");out+='", "object-key-init"),
        endencode: cc11001100_hook("endencode", "||'').toString().encodeHTML();out+='", "object-key-init")
      }
    }, "var-init"),
    skip = cc11001100_hook("skip", /$^/, "var-init");
  function resolveDefs(c, block, def) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("block", block, "function-parameter");
    cc11001100_hook("def", def, "function-parameter");
    return (typeof block === "string" ? block : block.toString()).replace(c.define || skip, function (m, code, assign, value) {
      if (code.indexOf("def.") === 0) {
        code = cc11001100_hook("code", code.substring(4), "assign");
      }
      if (!(code in def)) {
        if (assign === ":") {
          if (c.defineParams) value.replace(c.defineParams, function (m, param, v) {
            def[code] = cc11001100_hook("def[code]", {
              arg: cc11001100_hook("arg", param, "object-key-init"),
              text: cc11001100_hook("text", v, "object-key-init")
            }, "assign");
          });
          if (!(code in def)) def[code] = cc11001100_hook("def[code]", value, "assign");
        } else {
          new Function("def", "def['" + code + "']=" + value)(def);
        }
      }
      return "";
    }).replace(c.use || skip, function (m, code) {
      if (c.useParams) code = cc11001100_hook("code", code.replace(c.useParams, function (m, s, d, param) {
        if (def[d] && def[d].arg && param) {
          var rw = cc11001100_hook("rw", (d + ":" + param).replace(/'|\\/g, "_"), "var-init");
          def.__exp = cc11001100_hook("def.__exp", def.__exp || {}, "assign");
          def.__exp[rw] = cc11001100_hook("def.__exp[rw]", def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2"), "assign");
          return s + "def.__exp['" + rw + "']";
        }
      }), "assign");
      var v = cc11001100_hook("v", new Function("def", "return " + code)(def), "var-init");
      return v ? resolveDefs(c, v, def) : v;
    });
  }
  function unescape(code) {
    cc11001100_hook("code", code, "function-parameter");
    return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
  }
  doT.template = cc11001100_hook("doT.template", function (tmpl, c, def) {
    c = cc11001100_hook("c", c || doT.templateSettings, "assign");
    var cse = cc11001100_hook("cse", c.append ? startend.append : startend.split, "var-init"),
      needhtmlencode,
      sid = cc11001100_hook("sid", 0, "var-init"),
      indv,
      str = cc11001100_hook("str", c.use || c.define ? resolveDefs(c, tmpl, def || {}) : tmpl, "var-init");
    str = cc11001100_hook("str", ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : str).replace(/'|\\/g, "\\$&").replace(c.interpolate || skip, function (m, code) {
      return cse.start + unescape(code) + cse.end;
    }).replace(c.encode || skip, function (m, code) {
      needhtmlencode = cc11001100_hook("needhtmlencode", true, "assign");
      return cse.start + unescape(code) + cse.endencode;
    }).replace(c.conditional || skip, function (m, elsecase, code) {
      return elsecase ? code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='" : code ? "';if(" + unescape(code) + "){out+='" : "';}out+='";
    }).replace(c.iterate || skip, function (m, iterate, vname, iname) {
      if (!iterate) return "';} } out+='";
      sid += cc11001100_hook("sid", 1, "assign");
      indv = cc11001100_hook("indv", iname || "i" + sid, "assign");
      iterate = cc11001100_hook("iterate", unescape(iterate), "assign");
      return "';var arr" + sid + "=" + iterate + ";if(arr" + sid + "){var " + vname + "," + indv + "=-1,l" + sid + "=arr" + sid + ".length-1;while(" + indv + "<l" + sid + "){" + vname + "=arr" + sid + "[" + indv + "+=1];out+='";
    }).replace(c.evaluate || skip, function (m, code) {
      return "';" + unescape(code) + "out+='";
    }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, "").replace(/(\s|;|\}|^|\{)out\+=''\+/g, "$1out+="), "assign");
    if (needhtmlencode && c.selfcontained) {
      str = cc11001100_hook("str", "String.prototype.encodeHTML=(" + encodeHTMLSource.toString() + "());" + str, "assign");
    }
    try {
      return new Function(c.varname, str);
    } catch (e) {
      if (typeof console !== "undefined") console.log("Could not create a template function: " + str);
      throw e;
    }
  }, "assign");
  doT.compile = cc11001100_hook("doT.compile", function (tmpl, def) {
    return doT.template(tmpl, null, def);
  }, "assign");
  exports.template = cc11001100_hook("exports.template", doT.template, "assign");
  exports.compile = cc11001100_hook("exports.compile", doT.compile, "assign");
});
F.module("superman:superuijs/util/smDot", function (require, exports) {
  var doT = cc11001100_hook("doT", {
      version: cc11001100_hook("version", "1.0.1", "object-key-init"),
      templateSettings: {
        evaluate: cc11001100_hook("evaluate", /\{\{([\s\S]+?(\}?)+)\}\}/g, "object-key-init"),
        encode: cc11001100_hook("encode", /\{\{!([\s\S]+?)\}\}/g, "object-key-init"),
        use: cc11001100_hook("use", /\{\{#([\s\S]+?)\}\}/g, "object-key-init"),
        useParams: cc11001100_hook("useParams", /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g, "object-key-init"),
        define: cc11001100_hook("define", /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g, "object-key-init"),
        defineParams: cc11001100_hook("defineParams", /^\s*([\w$]+):([\s\S]+)/, "object-key-init"),
        smConditional: cc11001100_hook("smConditional", /\<\&(\/|(else))?\s*(if|else)([\s\S]*?)\&\>/g, "object-key-init"),
        smInterpolate: cc11001100_hook("smInterpolate", /\<\&\$([\s\S]+?)(\|sp_[^\&]+)?\&\>/g, "object-key-init"),
        smIterate: cc11001100_hook("smIterate", /\<\&(\/)?foreach\s*(?:\$([\s\S]+?)\s+as\s+(?:\$([^\=\>]+))?(?:\=\>)?\$([\s\S]*?)?)?\&\>/g, "object-key-init"),
        smLoop: cc11001100_hook("smLoop", /\<\&(\/)?for\s*(?:\$([\s\S]+)\=\s*([\s\S]+?)\s*to\s*([\s\S]+?)\s*)?\&\>/g, "object-key-init"),
        smComments: cc11001100_hook("smComments", /\<\&\*[\s\S]*?\*\&\>/g, "object-key-init"),
        varname: cc11001100_hook("varname", "it", "object-key-init"),
        strip: cc11001100_hook("strip", true, "object-key-init"),
        append: cc11001100_hook("append", true, "object-key-init"),
        selfcontained: cc11001100_hook("selfcontained", false, "object-key-init")
      },
      template: cc11001100_hook("template", undefined, "object-key-init"),
      compile: cc11001100_hook("compile", undefined, "object-key-init")
    }, "var-init"),
    global;
  function encodeHTMLSource() {
    var encodeHTMLRules = cc11001100_hook("encodeHTMLRules", {
        "&": cc11001100_hook("&", "&#38;", "object-key-init"),
        "<": cc11001100_hook("<", "&#60;", "object-key-init"),
        ">": cc11001100_hook(">", "&#62;", "object-key-init"),
        '"': cc11001100_hook('"', "&#34;", "object-key-init"),
        "'": cc11001100_hook("'", "&#39;", "object-key-init"),
        "/": cc11001100_hook("/", "&#47;", "object-key-init")
      }, "var-init"),
      matchHTML = cc11001100_hook("matchHTML", /&(?!#?\w+;)|<|>|"|'|\//g, "var-init");
    return function () {
      return this ? this.replace(matchHTML, function (m) {
        return encodeHTMLRules[m] || m;
      }) : this;
    };
  }
  String.prototype.encodeHTML = cc11001100_hook("String.prototype.encodeHTML", encodeHTMLSource(), "assign");
  var startend = cc11001100_hook("startend", {
      append: {
        start: cc11001100_hook("start", "'+(", "object-key-init"),
        end: cc11001100_hook("end", ")+'", "object-key-init"),
        endencode: cc11001100_hook("endencode", "||'').toString().encodeHTML()+'", "object-key-init")
      },
      split: {
        start: cc11001100_hook("start", "';out+=(", "object-key-init"),
        end: cc11001100_hook("end", ");out+='", "object-key-init"),
        endencode: cc11001100_hook("endencode", "||'').toString().encodeHTML();out+='", "object-key-init")
      }
    }, "var-init"),
    skip = cc11001100_hook("skip", /$^/, "var-init");
  function resolveDefs(c, block, def) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("block", block, "function-parameter");
    cc11001100_hook("def", def, "function-parameter");
    return (typeof block === "string" ? block : block.toString()).replace(c.define || skip, function (m, code, assign, value) {
      if (code.indexOf("def.") === 0) {
        code = cc11001100_hook("code", code.substring(4), "assign");
      }
      if (!(code in def)) {
        if (assign === ":") {
          if (c.defineParams) value.replace(c.defineParams, function (m, param, v) {
            def[code] = cc11001100_hook("def[code]", {
              arg: cc11001100_hook("arg", param, "object-key-init"),
              text: cc11001100_hook("text", v, "object-key-init")
            }, "assign");
          });
          if (!(code in def)) def[code] = cc11001100_hook("def[code]", value, "assign");
        } else {
          new Function("def", "def['" + code + "']=" + value)(def);
        }
      }
      return "";
    }).replace(c.use || skip, function (m, code) {
      if (c.useParams) code = cc11001100_hook("code", code.replace(c.useParams, function (m, s, d, param) {
        if (def[d] && def[d].arg && param) {
          var rw = cc11001100_hook("rw", (d + ":" + param).replace(/'|\\/g, "_"), "var-init");
          def.__exp = cc11001100_hook("def.__exp", def.__exp || {}, "assign");
          def.__exp[rw] = cc11001100_hook("def.__exp[rw]", def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2"), "assign");
          return s + "def.__exp['" + rw + "']";
        }
      }), "assign");
      var v = cc11001100_hook("v", new Function("def", "return " + code)(def), "var-init");
      return v ? resolveDefs(c, v, def) : v;
    });
  }
  function unescape(code) {
    cc11001100_hook("code", code, "function-parameter");
    return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
  }
  function merge(obj1, obj2) {
    cc11001100_hook("obj1", obj1, "function-parameter");
    cc11001100_hook("obj2", obj2, "function-parameter");
    for (var i in obj2) {
      obj1[i] = cc11001100_hook("obj1[i]", obj2[i], "assign");
    }
    return obj1;
  }
  doT.template = cc11001100_hook("doT.template", function (tmpl, c, def) {
    c = cc11001100_hook("c", merge(doT.templateSettings, c), "assign");
    var cse = cc11001100_hook("cse", c.append ? startend.append : startend.split, "var-init"),
      needhtmlencode,
      sid = cc11001100_hook("sid", 0, "var-init"),
      indv,
      str = cc11001100_hook("str", c.use || c.define ? resolveDefs(c, tmpl, def || {}) : tmpl, "var-init");
    str = cc11001100_hook("str", ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : str).replace(/'|\\/g, "\\$&").replace(c.encode || skip, function (m, code) {
      needhtmlencode = cc11001100_hook("needhtmlencode", true, "assign");
      return cse.start + unescape(code) + cse.endencode;
    }).replace(c.smComments || skip, function () {
      return "";
    }).replace(c.smInterpolate || skip, function (m, code, escaper) {
      return cse.start + unescape(code) + cse.endencode;
    }).replace(c.smConditional || skip, function (m, elseifcase, ifcase, elsecase, code) {
      code = cc11001100_hook("code", code.replace(/\$/g, ""), "assign");
      return elseifcase ? ifcase ? code ? "';}else if(" + unescape(code) + "){out+='" : "';}out+='" : code ? "';}else{out+='" : "';}out+='" : code ? "';if(" + unescape(code) + "){out+='" : "';}else{out+='";
    }).replace(c.smIterate || skip, function (m, endtag, from, key, value) {
      if (endtag) return "';} } out+='";
      sid += cc11001100_hook("sid", 1, "assign");
      indv = cc11001100_hook("indv", value || "i" + sid, "assign");
      from = cc11001100_hook("from", unescape(from), "assign");
      return "';var arr" + sid + "=" + from + ";if(arr" + sid + "){var " + indv + "," + (key || "key") + "=-1;" + "for(" + (key || "key") + " in arr" + sid + "){" + value + "=arr" + sid + "[" + (key || "key") + "];out+='";
    }).replace(c.smLoop || skip, function (m, endtag, key, from, to) {
      var str = cc11001100_hook("str", endtag ? "';} out+='" : "';for(var " + key + "=" + from.replace("$", "") + ";" + key + "<=" + to.replace("$", "") + ";" + key + "++){out+='", "var-init");
      return str;
    }).replace(c.evaluate || skip, function (m, code) {
      return "';" + unescape(code) + "out+='";
    }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, "").replace(/(\s|;|\}|^|\{)out\+=''\+/g, "$1out+="), "assign");
    if (needhtmlencode && c.selfcontained) {
      str = cc11001100_hook("str", "String.prototype.encodeHTML=(" + encodeHTMLSource.toString() + "());" + str, "assign");
    }
    try {
      return new Function(c.varname, str);
    } catch (e) {
      if (typeof console !== "undefined") console.log("Could not create a template function: " + str);
      throw e;
    }
  }, "assign");
  doT.compile = cc11001100_hook("doT.compile", function (tmpl, def) {
    return doT.template(tmpl, null, def);
  }, "assign");
  exports.template = cc11001100_hook("exports.template", doT.template, "assign");
  exports.compile = cc11001100_hook("exports.compile", doT.compile, "assign");
});
F.addLog("superman:superuijs/component", ["componentLog"]);
F.module("superman:superuijs/component", function (require, exports, ctx) {
  var Emitter = cc11001100_hook("Emitter", require("superman:superuijs/util/emitter"), "var-init"),
    Tool = cc11001100_hook("Tool", require("superman:superuijs/util/tool"), "var-init"),
    Component = function () {};
  var pathname = cc11001100_hook("pathname", location.pathname, "var-init"),
    match,
    LPREX = cc11001100_hook("LPREX", "index", "var-init");
  if (pathname && pathname.length > 2) {
    if (match = cc11001100_hook("match", pathname.match(/\/home\/xman\/show\/(.+)/i), "assign")) {
      LPREX = cc11001100_hook("LPREX", match[1], "assign");
    }
  }
  Component.prototype = cc11001100_hook("Component.prototype", {
    constructor: cc11001100_hook("constructor", Component, "object-key-init"),
    initialize: function () {
      this.disabled = cc11001100_hook("this.disabled", false, "assign");
      this.__options = cc11001100_hook("this.__options", {}, "assign");
      var head = cc11001100_hook("head", $("#head").length ? $("#head") : $(document.body), "var-init"),
        wrap = cc11001100_hook("wrap", $(".sui-wraper"), "var-init");
      this.componentWrap = cc11001100_hook("this.componentWrap", wrap.length ? wrap : $('<div class="s-isindex-wrap sui-wraper"></div>').appendTo(head), "assign");
    },
    disable: function () {
      if (!this.disable) {
        this.disabled = cc11001100_hook("this.disabled", true, "assign");
        this.fire("disable");
      }
    },
    enable: function () {
      if (this.disabled) {
        this.disabled = cc11001100_hook("this.disabled", false, "assign");
        this.fire("enable");
      }
    },
    refresh: function () {
      this.fire("refresh");
    },
    options: function (options, value) {
      if (typeof options == "undefined") {
        return this.__options;
      } else {
        if (typeof options == "string") {
          return typeof value !== "undefined" ? this.__options[options] = cc11001100_hook("this.__options[options]", value, "assign") : this.__options[options];
        }
        if (F.isPlainObject(options)) {
          if (!options.identity) {
            throw new Error("组件" + (options.component || "") + "初始化缺少identity参数，该参数用于自动日志处理，必须填写该参数！");
          }
          if (options.identity == "test" && !window.SUPERUI_DEMO) {
            throw new Error("组件" + (options.component || "") + "初始化identity参数非法（test只共测试demo使用，demo环境请忽略该异常）！");
          }
          options.showlogactid = cc11001100_hook("options.showlogactid", "40103" + options.logactid + "0", "assign");
          options.clicklogactid = cc11001100_hook("options.clicklogactid", "40103" + options.logactid + "1", "assign");
          return this.__options = cc11001100_hook("this.__options", options, "assign");
        }
      }
    },
    acting: function (wrap) {
      var self = cc11001100_hook("self", this, "var-init");
      wrap.on("click", function (e) {
        var target = cc11001100_hook("target", $(e.target), "var-init"),
          acting = cc11001100_hook("acting", target.attr("data-acting"), "var-init"),
          param = cc11001100_hook("param", target.attr("data-param"), "var-init"),
          data = cc11001100_hook("data", {
            target: cc11001100_hook("target", target, "object-key-init")
          }, "var-init");
        if (acting) {
          self.log(acting, param);
          if (self.emit("acting-" + acting, F.mix(data, Tool.unparam(param))) !== false) {
            F.isFunction(self.hide) && self.hide();
            return false;
          }
        }
      });
      self.on("__onEmit__", function (data) {
        if (data.event == "onshow") {
          self.log("show");
        }
      });
    },
    log: function (method, param) {
      var options = cc11001100_hook("options", this.options(), "var-init"),
        log = cc11001100_hook("log", [LPREX, options.identity, options.component, method].join("").replace(/-/gi, ""), "var-init"),
        isshow = cc11001100_hook("isshow", method == "show", "var-init"),
        params = cc11001100_hook("params", {
          logactid: cc11001100_hook("logactid", isshow ? options.showlogactid : options.clicklogactid, "object-key-init"),
          suicomponent: cc11001100_hook("suicomponent", options.component, "object-key-init")
        }, "var-init");
      if (isshow) {
        params.showType = cc11001100_hook("params.showType", log, "assign");
      } else {
        params.clickType = cc11001100_hook("params.clickType", log, "assign");
      }
      if (param) {
        if (F.isPlainObject(param)) {
          params = cc11001100_hook("params", F.mix(params, param), "assign");
        } else if (typeof param == "string") {
          params.param = cc11001100_hook("params.param", param.replace(/[^0-9a-z\u4e00-\u9fa5]/gi, ""), "assign");
        }
      }
      ctx.fire("componentLog", params);
    },
    destroy: function () {
      this.fire("destroy");
    }
  }, "assign");
  return F.inherit(Component, Emitter);
});
F.module("superman:superuijs/component/draggable", function (require, exports) {
  var Component = cc11001100_hook("Component", require("superman:superuijs/component"), "var-init"),
    Tool = cc11001100_hook("Tool", require("superman:superuijs/util/tool"), "var-init"),
    $document = cc11001100_hook("$document", $(document), "var-init"),
    $window = cc11001100_hook("$window", $(window), "var-init"),
    body = cc11001100_hook("body", document.body, "var-init"),
    $body = cc11001100_hook("$body", $(body), "var-init");
  require("superui/superui.css");
  function Draggable(options) {
    cc11001100_hook("options", options, "function-parameter");
    this.initialize(options);
  }
  Draggable.prototype = cc11001100_hook("Draggable.prototype", {
    constructor: cc11001100_hook("constructor", Draggable, "object-key-init"),
    initialize: function (option) {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(F.mix({
          component: cc11001100_hook("component", "draggable", "object-key-init"),
          logactid: cc11001100_hook("logactid", "2000", "object-key-init"),
          element: cc11001100_hook("element", null, "object-key-init"),
          handle: cc11001100_hook("handle", null, "object-key-init"),
          cancel: cc11001100_hook("cancel", null, "object-key-init"),
          proxy: cc11001100_hook("proxy", null, "object-key-init"),
          autoRemoveproxy: cc11001100_hook("autoRemoveproxy", true, "object-key-init"),
          autoHidden: cc11001100_hook("autoHidden", true, "object-key-init"),
          containment: cc11001100_hook("containment", $body, "object-key-init"),
          axis: cc11001100_hook("axis", 0, "object-key-init"),
          silence: cc11001100_hook("silence", true, "object-key-init"),
          delay: cc11001100_hook("delay", 0, "object-key-init"),
          distance: cc11001100_hook("distance", 0, "object-key-init"),
          scroll: cc11001100_hook("scroll", 10, "object-key-init"),
          mask: cc11001100_hook("mask", true, "object-key-init"),
          cursor: cc11001100_hook("cursor", "move", "object-key-init"),
          preventDefault: cc11001100_hook("preventDefault", true, "object-key-init")
        }, option)), "var-init");
      this.element = cc11001100_hook("this.element", $(options.element), "assign");
      this.handle = cc11001100_hook("this.handle", options.handle && options.handle.length ? $(options.handle) : this.element, "assign");
      this.containment = cc11001100_hook("this.containment", options.containment && $(options.containment), "assign");
      this.cache = cc11001100_hook("this.cache", {}, "assign");
      if (options.mask) {
        if (!(this.mask = cc11001100_hook("this.mask", $(".sui-draggable-mask"), "assign")).length) {
          this.mask = cc11001100_hook("this.mask", $('<div class="sui-draggable-mask sui-prevent-wheel" onselectstart="return false"></div>').css({
            height: cc11001100_hook("height", $body.height(), "object-key-init"),
            cursor: cc11001100_hook("cursor", options.cursor, "object-key-init")
          }).hide().appendTo(this.componentWrap), "assign");
        }
      }
      this.bind();
    },
    bind: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        cache = cc11001100_hook("cache", this.cache, "var-init");
      this.handle.on("mousedown", this.__handlestart = cc11001100_hook("this.__handlestart", $.proxy(this.startDrag, this), "assign"));
      this.on("destroy", function () {
        if (self.__handlestart) {
          self.handle.off("mousedown", self.__handlestart);
          self.__handlestart = cc11001100_hook("self.__handlestart", null, "assign");
        }
      });
      this.on("refresh", function () {
        self.refreshContainment();
        cache.offsetParent = cc11001100_hook("cache.offsetParent", self.offsetParent.offset(), "assign");
      });
    },
    refreshContainment: function () {
      var cache = cc11001100_hook("cache", this.cache, "var-init");
      if (this.containment) {
        cache.containmentLimit = cc11001100_hook("cache.containmentLimit", F.mix({
          width: cc11001100_hook("width", this.containment.outerWidth(), "object-key-init"),
          height: cc11001100_hook("height", this.containment.outerHeight(), "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          borderLeft: cc11001100_hook("borderLeft", Tool.cssval(this.containment, "borderLeftWidth"), "object-key-init"),
          borderTop: cc11001100_hook("borderTop", Tool.cssval(this.containment, "borderTopWidth"), "object-key-init")
        }, this.containment.offset()), "assign");
        cache.proxyWidth = cc11001100_hook("cache.proxyWidth", this.proxy.width(), "assign");
        cache.proxyHeight = cc11001100_hook("cache.proxyHeight", this.proxy.height(), "assign");
      }
    },
    computingContainment: function () {
      var cache = cc11001100_hook("cache", this.cache, "var-init"),
        spacing = cc11001100_hook("spacing", cache.spacing, "var-init"),
        limit = cc11001100_hook("limit", cache.containmentLimit, "var-init"),
        left = cc11001100_hook("left", limit.left, "var-init"),
        top = cc11001100_hook("top", limit.top, "var-init");
      if (limit) {
        cache.pageX = cc11001100_hook("cache.pageX", Math.min(left + limit.width - cache.proxyWidth, Math.max(left, cache.pageX)), "assign");
        cache.pageY = cc11001100_hook("cache.pageY", Math.min(top + limit.height - cache.proxyHeight, Math.max(top, cache.pageY)), "assign");
      }
    },
    delay: function (timeStamp, pageX, pageY) {
      var options = cc11001100_hook("options", this.options(), "var-init"),
        cache = cc11001100_hook("cache", this.cache, "var-init"),
        dragging = cc11001100_hook("dragging", true, "var-init");
      if (options.delay) {
        if (timeStamp - this.starttime < options.delay) {
          dragging = cc11001100_hook("dragging", false, "assign");
        }
      }
      if (options.distance) {
        if (Math.sqrt(Math.abs(Math.pow(cache.startX - pageX, 2)) + Math.abs(Math.pow(cache.startY - pageY, 2))) < options.distance) {
          dragging = cc11001100_hook("dragging", false, "assign");
        }
      }
      return dragging;
    },
    createProxy: function () {
      var options = cc11001100_hook("options", this.options(), "var-init"),
        cache = cc11001100_hook("cache", this.cache, "var-init");
      this.proxy = cc11001100_hook("this.proxy", options.proxy ? F.isFunction(options.proxy) ? $(options.proxy(this.element)) : this.element.clone(false) : this.element, "assign");
      if (this.proxy.css("position") != "absolute") {
        this.proxy.css(F.mix({
          position: cc11001100_hook("position", "absolute", "object-key-init")
        }, this.element.position()));
      }
    },
    spacingCalculated: function () {
      var parent = cc11001100_hook("parent", this.offsetParent, "var-init"),
        cache = cc11001100_hook("cache", this.cache, "var-init"),
        proxy = cc11001100_hook("proxy", this.proxy, "var-init"),
        marginLeft = cc11001100_hook("marginLeft", Tool.cssval(proxy, "marginLeft"), "var-init"),
        marginTop = cc11001100_hook("marginTop", Tool.cssval(proxy, "marginTop"), "var-init");
      cache.spacing = cc11001100_hook("cache.spacing", {
        offsetLeft: cc11001100_hook("offsetLeft", Tool.cssval(parent, "borderLeftWidth"), "object-key-init"),
        offsetTop: cc11001100_hook("offsetTop", Tool.cssval(parent, "borderTopWidth"), "object-key-init"),
        marginX: cc11001100_hook("marginX", marginLeft, "object-key-init"),
        marginY: cc11001100_hook("marginY", marginTop, "object-key-init")
      }, "assign");
    },
    scroll: function (options, cache) {
      if (options.scroll) {
        var scrollTop = cc11001100_hook("scrollTop", $window.scrollTop(), "var-init"),
          scrollTopHeight = cc11001100_hook("scrollTopHeight", cache.windowHeight + scrollTop - options.scroll, "var-init"),
          proxyHeight = cc11001100_hook("proxyHeight", cache.pageY + cache.proxyHeight, "var-init");
        if (proxyHeight > scrollTopHeight) {
          $window.scrollTop(scrollTop + proxyHeight - scrollTopHeight);
        } else {
          if (cache.pageY < scrollTop + options.scroll) {
            $window.scrollTop(scrollTop - (scrollTop + options.scroll - Math.abs(cache.pageY)));
          }
        }
      }
    },
    startDrag: function (event) {
      var options = cc11001100_hook("options", this.options(), "var-init"),
        self = cc11001100_hook("self", this, "var-init"),
        cache = cc11001100_hook("cache", self.cache, "var-init"),
        target = cc11001100_hook("target", $(event.target), "var-init");
      if (event.which == 1) {
        if (options.cancel) {
          if (target.filter(options.cancel).length) {
            return true;
          }
        }
        if (!this.disabled && !options.element.attr("CANCELDRAG")) {
          this.cache.startX = cc11001100_hook("this.cache.startX", event.pageX, "assign");
          this.cache.startY = cc11001100_hook("this.cache.startY", event.pageY, "assign");
          this.cache.targetHandle = cc11001100_hook("this.cache.targetHandle", target, "assign");
          this.dragging = cc11001100_hook("this.dragging", false, "assign");
          this.starttime = cc11001100_hook("this.starttime", event.timeStamp, "assign");
          this.fire("onBeforeDrag", {
            event: cc11001100_hook("event", event, "object-key-init"),
            pageX: cc11001100_hook("pageX", event.pageX, "object-key-init"),
            pageY: cc11001100_hook("pageY", event.pageY, "object-key-init")
          });
          if (!this.__handledrag) {
            this.__handledrag = cc11001100_hook("this.__handledrag", function (event) {
              window.captureEvents ? window.captureEvents(Event.mousemove) : body.setCapture && body.setCapture();
              self.drag(event);
            }, "assign");
            this.__handlestop = cc11001100_hook("this.__handlestop", function (event) {
              window.releaseEvents ? window.releaseEvents(Event.mousemove) : body.releaseCapture && body.releaseCapture();
              self.afterDrag(event);
            }, "assign");
          }
          $document.on("mousemove", this.__handledrag).on("mouseup", this.__handlestop);
        }
      }
      if (options.preventDefault) {
        event.preventDefault();
      }
    },
    drag: function (event) {
      var pageX = cc11001100_hook("pageX", event.pageX, "var-init"),
        pageY = cc11001100_hook("pageY", event.pageY, "var-init"),
        timeStamp = cc11001100_hook("timeStamp", event.timeStamp, "var-init"),
        options = cc11001100_hook("options", this.options(), "var-init"),
        cache = cc11001100_hook("cache", this.cache, "var-init"),
        dragging = cc11001100_hook("dragging", true, "var-init");
      if (!this.dragging) {
        if (dragging = cc11001100_hook("dragging", this.delay(timeStamp, pageX, pageY), "assign")) {
          if (options.silence) {
            this.createProxy();
            if (options.proxy) {
              this.proxy.appendTo(this.element.parent());
            }
            this.cache.offsetProxy = cc11001100_hook("this.cache.offsetProxy", this.proxy.offset(), "assign");
            this.offsetParent = cc11001100_hook("this.offsetParent", this.proxy.offsetParent(), "assign");
            this.cache.offsetParent = cc11001100_hook("this.cache.offsetParent", this.offsetParent.offset(), "assign");
            if (options.scroll) {
              this.cache.windowHeight = cc11001100_hook("this.cache.windowHeight", $window.height(), "assign");
              this.cache.proxyHeight = cc11001100_hook("this.cache.proxyHeight", this.proxy.height(), "assign");
            }
            this.spacingCalculated();
            this.refreshContainment();
          }
          this.mask && this.mask.show();
          this.proxy.addClass("sui-draggable");
          this.proxyWraper = cc11001100_hook("this.proxyWraper", this.proxy.offsetParent().addClass("sui-draggable-wraper"), "assign");
          if (options.proxy && options.autoHidden) {
            this.element.addClass("sui-draggable-proxy");
          }
          this.fire("onStartDrag", {
            event: cc11001100_hook("event", event, "object-key-init"),
            pageX: cc11001100_hook("pageX", event.pageX, "object-key-init"),
            pageY: cc11001100_hook("pageY", event.pageY, "object-key-init")
          });
        }
        return this.dragging = cc11001100_hook("this.dragging", dragging, "assign");
      }
      var spacing = cc11001100_hook("spacing", cache.spacing, "var-init");
      cache.pageX = cc11001100_hook("cache.pageX", cache.offsetProxy.left + (options.axis !== "y" ? cache.offsetX = cc11001100_hook("cache.offsetX", pageX - cache.startX, "assign") : cache.offsetX = cc11001100_hook("cache.offsetX", 0, "assign")), "assign");
      cache.pageY = cc11001100_hook("cache.pageY", cache.offsetProxy.top + (options.axis !== "x" ? cache.offsetY = cc11001100_hook("cache.offsetY", pageY - cache.startY, "assign") : cache.offsetY = cc11001100_hook("cache.offsetY", 0, "assign")), "assign");
      if (options.silence) {
        this.computingContainment();
        this.scroll(options, cache);
        cache.left = cc11001100_hook("cache.left", cache.pageX - cache.offsetParent.left - spacing.marginX - spacing.offsetLeft, "assign");
        cache.top = cc11001100_hook("cache.top", cache.pageY - cache.offsetParent.top - spacing.marginY - spacing.offsetTop, "assign");
        this.proxy.css({
          left: cc11001100_hook("left", options.axis !== "y" ? cache.left : undefined, "object-key-init"),
          top: cc11001100_hook("top", options.axis !== "x" ? cache.top : undefined, "object-key-init")
        });
      }
      this.fire("onDragging", {
        left: cc11001100_hook("left", cache.left, "object-key-init"),
        top: cc11001100_hook("top", cache.top, "object-key-init"),
        pageX: cc11001100_hook("pageX", event.pageX, "object-key-init"),
        pageY: cc11001100_hook("pageY", event.pageY, "object-key-init"),
        event: cc11001100_hook("event", event, "object-key-init"),
        offsetX: cc11001100_hook("offsetX", cache.offsetX, "object-key-init"),
        offsetY: cc11001100_hook("offsetY", cache.offsetY, "object-key-init")
      });
    },
    afterDrag: function (event) {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init"),
        cache = cc11001100_hook("cache", self.cache, "var-init");
      if (this.mask) {
        this.mask.hide();
      }
      if (this.dragging) {
        if (this.proxy) {
          this.proxy.removeClass("sui-draggable");
          this.proxyWraper.removeClass("sui-draggable-wraper");
          if (options.proxy) {
            if (options.autoHidden) {
              this.element.removeClass("sui-draggable-proxy");
            }
            if (this.element.css("position") !== "absolute") {
              this.element.css("position", "absolute");
            }
            this.element.css({
              left: cc11001100_hook("left", cache.left, "object-key-init"),
              top: cc11001100_hook("top", cache.top, "object-key-init")
            });
            if (options.autoRemoveproxy) {
              this.proxy.remove();
            }
          }
        }
        this.dragging = cc11001100_hook("this.dragging", false, "assign");
        this.fire("onAfterDrag", {
          left: cc11001100_hook("left", cache.left, "object-key-init"),
          top: cc11001100_hook("top", cache.top, "object-key-init"),
          pageX: cc11001100_hook("pageX", event.pageX, "object-key-init"),
          pageY: cc11001100_hook("pageY", event.pageY, "object-key-init"),
          event: cc11001100_hook("event", event, "object-key-init"),
          offsetX: cc11001100_hook("offsetX", cache.offsetX, "object-key-init"),
          offsetY: cc11001100_hook("offsetY", cache.offsetY, "object-key-init")
        });
      }
      $document.off("mousemove", this.__handledrag).off("mouseup", this.__handlestop);
    }
  }, "assign");
  return F.inherit(Draggable, Component);
});
F.module("superman:superuijs/component/scrollbar", function (require, exports) {
  var Component = cc11001100_hook("Component", require("superman:superuijs/component"), "var-init"),
    Tool = cc11001100_hook("Tool", require("superman:superuijs/util/tool"), "var-init"),
    Draggable = cc11001100_hook("Draggable", require("superman:superuijs/component/draggable"), "var-init");
  function Scrollbar(options) {
    cc11001100_hook("options", options, "function-parameter");
    this.initialize(options);
  }
  Scrollbar.prototype = cc11001100_hook("Scrollbar.prototype", {
    initialize: function (option) {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(F.mix({
          component: cc11001100_hook("component", "scrollbar", "object-key-init"),
          logactid: cc11001100_hook("logactid", "3000", "object-key-init"),
          container: cc11001100_hook("container", null, "object-key-init"),
          content: cc11001100_hook("content", null, "object-key-init"),
          bar: cc11001100_hook("bar", null, "object-key-init"),
          slider: cc11001100_hook("slider", null, "object-key-init"),
          y: cc11001100_hook("y", 0, "object-key-init"),
          speed: cc11001100_hook("speed", 100, "object-key-init"),
          easing: cc11001100_hook("easing", "swing", "object-key-init"),
          hasWheel: cc11001100_hook("hasWheel", true, "object-key-init"),
          hasBar: cc11001100_hook("hasBar", true, "object-key-init"),
          hasHighlight: cc11001100_hook("hasHighlight", true, "object-key-init"),
          offsetHeight: cc11001100_hook("offsetHeight", null, "object-key-init"),
          containerClassName: cc11001100_hook("containerClassName", "sui-scrollbar-container", "object-key-init"),
          contentClassName: cc11001100_hook("contentClassName", "sui-scrollbar-content", "object-key-init"),
          barClassName: cc11001100_hook("barClassName", "sui-scrollbar-bar", "object-key-init"),
          sliderClassName: cc11001100_hook("sliderClassName", "sui-scrollbar-slider", "object-key-init"),
          highlightClassName: cc11001100_hook("highlightClassName", "sui-scrollbar-highlight", "object-key-init"),
          existscrollbarClassName: cc11001100_hook("existscrollbarClassName", "sui-scrollbar-existbar", "object-key-init")
        }, option)), "var-init");
      if (options.container) {
        this.cache = cc11001100_hook("this.cache", {}, "assign");
        this.container = cc11001100_hook("this.container", $(options.container).addClass(options.containerClassName), "assign");
        this.content = cc11001100_hook("this.content", options.content ? $(options.content) : this.container.find("." + options.contentClassName), "assign");
        if (options.hasBar) {
          this.bar = cc11001100_hook("this.bar", options.bar ? $(options.bar) : this.container.find("." + options.barClassName), "assign");
          if (!this.bar.length) {
            this.bar = cc11001100_hook("this.bar", $('<div class="' + options.barClassName + '"><em class="' + options.sliderClassName + '"></em></div>').appendTo(this.container), "assign");
          }
          this.bar.css("height", this.container.innerHeight() - parseInt(this.bar.css("borderTopWidth"), 10) - parseInt(this.bar.css("borderBottomWidth"), 10));
          this.slider = cc11001100_hook("this.slider", options.slider ? $(options.slider) : this.container.find("." + options.sliderClassName), "assign");
        }
        this.bind();
        this.refreshBar(options.y, false);
      }
    },
    bind: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        cache = cc11001100_hook("cache", self.cache, "var-init"),
        sendLog,
        options = cc11001100_hook("options", self.options(), "var-init");
      if (self.bar) {
        self.bar.on("mouseenter mouseleave", function (e) {
          if (!self.disabled) {
            if (!cache.scrolling && options.hasHighlight) {
              self.container[e.type == "mouseenter" ? "addClass" : "removeClass"](options.highlightClassName);
            }
            cache.hasinbar = cc11001100_hook("cache.hasinbar", e.type == "mouseenter", "assign");
          }
        }).on("click", function (e) {
          if (!self.disabled && !$(e.target).hasClass(options.sliderClassName)) {
            cache.y = cc11001100_hook("cache.y", Math.max(0, Math.min(cache.containerHeight - cache.sliderHeight, e.pageY - cache.barOffset.top)) / cache.scale, "assign");
            self.log("scroll");
            self.refreshContent(true);
          }
        });
      }
      if (self.slider) {
        self.draggable = cc11001100_hook("self.draggable", new Draggable({
          element: cc11001100_hook("element", self.slider, "object-key-init"),
          identity: cc11001100_hook("identity", options.identity, "object-key-init"),
          containment: cc11001100_hook("containment", self.bar, "object-key-init"),
          axis: cc11001100_hook("axis", "y", "object-key-init"),
          cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
        }), "assign");
        self.draggable.on("onDragging", function (data) {
          cache.y = cc11001100_hook("cache.y", data.top / cache.scale, "assign");
          self.refreshContent(false);
          self.fire("onScrolling", cache);
        }).on("onBeforeDrag", function () {
          cache.scrolling = cc11001100_hook("cache.scrolling", true, "assign");
          self.fire("onBeforeScroll", cache);
        }).on("onAfterDrag", function () {
          cache.scrolling = cc11001100_hook("cache.scrolling", false, "assign");
          self.fire("onAfterScroll", cache);
          self.log("scroll");
          setTimeout(function () {
            if (cache.highlighted || !cache.hasinbar) {
              self.container.removeClass(options.highlightClassName);
            }
          }, 100);
        });
      }
      if (options.hasWheel) {
        sendLog = cc11001100_hook("sendLog", Tool.throttle(function () {
          self.log("scroll");
        }, 100), "assign");
        self.container.on("mousewheel", function (e) {
          if (!self.disabled) {
            self.scrollTo(cache.y - e.deltaY * 40, false);
            self.fire("onScrolling", cache);
            sendLog("scroll");
            return false;
          }
        });
      }
      self.on("refresh", function () {
        self.refreshBar();
      });
      self.container.on("mouseenter", function () {
        self.refreshBar();
      });
    },
    refreshContent: function (effect) {
      var self = cc11001100_hook("self", this, "var-init"),
        cache = cc11001100_hook("cache", self.cache, "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init");
      self.refreshLocationSize();
      if (effect !== false) {
        self.fire("onBeforeScroll", cache);
        if (options.hasHighlight) {
          if (cache.highlighted) {
            self.container.addClass(options.highlightClassName);
          }
        }
        self.content.stop().animate({
          top: cc11001100_hook("top", -cache.y, "object-key-init")
        }, {
          easing: cc11001100_hook("easing", options.easing, "object-key-init"),
          speed: cc11001100_hook("speed", options.speed, "object-key-init"),
          complete: function () {
            self.fire("onAfterScroll", cache);
            if (cache.highlighted && options.hasHighlight) {
              self.container.removeClass(options.highlightClassName);
            }
          },
          step: function (x) {
            cache.sliderY = cc11001100_hook("cache.sliderY", -(x / (cache.contentHeight - cache.containerHeight)) * (cache.containerHeight - cache.sliderHeight) - cache.sliderBorderTop, "assign");
            self.slider.css("top", cache.sliderY);
            self.fire("onScrolling", cache);
          }
        });
      } else {
        this.content.css("top", -cache.y);
        if (this.bar) {
          this.slider.css("top", cache.sliderY);
        }
      }
    },
    refreshLocationSize: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        cache = cc11001100_hook("cache", self.cache, "var-init");
      cache.y = cc11001100_hook("cache.y", Math.max(0, cache.y), "assign");
      if (Math.abs(cache.y) + cache.containerHeight >= cache.contentHeight) {
        cache.y = cc11001100_hook("cache.y", Math.max(0, cache.contentHeight - cache.containerHeight), "assign");
      }
      if (self.bar) {
        cache.sliderY = cc11001100_hook("cache.sliderY", cache.y / (cache.contentHeight - cache.containerHeight) * (cache.containerHeight - cache.sliderHeight) - cache.sliderBorderTop, "assign");
      }
    },
    refreshBar: function (y) {
      var self = cc11001100_hook("self", this, "var-init"),
        cache = cc11001100_hook("cache", self.cache, "var-init"),
        object,
        options = cc11001100_hook("options", self.options(), "var-init");
      cache.y = cc11001100_hook("cache.y", Math.abs(y || cache.y || options.y), "assign");
      cache.contentHeight = cc11001100_hook("cache.contentHeight", this.content.outerHeight(), "assign");
      cache.containerHeight = cc11001100_hook("cache.containerHeight", this.container.outerHeight(), "assign");
      if (options.offsetHeight) {
        if (F.isFunction(options.offsetHeight)) {
          if (F.isPlainObject(object = cc11001100_hook("object", options.offsetHeight(), "assign"))) {
            if (!object.containerHeight) {
              object.containerHeight = cc11001100_hook("object.containerHeight", this.container.outerHeight(), "assign");
            }
            cache = cc11001100_hook("cache", F.mix(cache, {
              containerHeight: cc11001100_hook("containerHeight", object.containerHeight || cache.containerHeight, "object-key-init"),
              contentHeight: cc11001100_hook("contentHeight", object.contentHeight || cache.contentHeight, "object-key-init")
            }), "assign");
          }
        } else {
          cache.contentHeight = cc11001100_hook("cache.contentHeight", cache.contentHeight + options.offsetHeight, "assign");
        }
      }
      if (self.bar) {
        self.slider.css("height", cache.containerHeight / cache.contentHeight * cache.containerHeight);
        cache.sliderHeight = cc11001100_hook("cache.sliderHeight", self.slider.outerHeight(), "assign");
        cache.barOffset = cc11001100_hook("cache.barOffset", self.bar.offset(), "assign");
        cache.scale = cc11001100_hook("cache.scale", (cache.containerHeight - cache.sliderHeight) / (cache.contentHeight - cache.containerHeight), "assign");
        cache.sliderBorderTop = cc11001100_hook("cache.sliderBorderTop", parseInt(self.slider.css("border-top-width"), 10), "assign");
        if (cache.contentHeight < cache.containerHeight) {
          self.bar.hide();
        } else {
          self.bar.show();
        }
      }
      self.refreshContent(false);
    },
    highlight: function (enforce) {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init"),
        cache = cc11001100_hook("cache", self.cache, "var-init");
      if (options.hasHighlight) {
        (cache.highlighted = cc11001100_hook("cache.highlighted", !cache.highlighted, "assign")) ? self.fire("onHighlight", cache) : self.fire("onCancelHighlight", cache);
        if (enforce) {
          self.container[cache.highlighted ? "addClass" : "removeClass"](options.highlightClassName);
        }
      }
    },
    scrollTo: function (y, effect) {
      if (y !== this.cache.y) {
        this.refreshLocationSize(this.cache.y = cc11001100_hook("this.cache.y", y, "assign"));
        this.refreshContent(effect);
      }
    },
    scrollOffset: function (offset, effect) {
      this.scrollTo(this.cache.y += cc11001100_hook("this.cache.y", offset, "assign"), effect);
    },
    scrollToElement: function (element, effect) {
      if ((element = cc11001100_hook("element", $(element), "assign")).length) {
        this.scrollTo(element.position().top, effect);
      }
    },
    scrollTop: function (effect) {
      this.scrollTo(0, effect);
    },
    scrollBottom: function (effect) {
      this.scrollTo(this.cache.contentHeight - this.cache.containerHeight, effect);
    }
  }, "assign");
  return F.inherit(Scrollbar, Component);
});
F.module("superman:superuijs/component/dialog", function (require, exports, ctx) {
  var Component = cc11001100_hook("Component", require("superman:superuijs/component"), "var-init"),
    Dot = cc11001100_hook("Dot", require("superman:superuijs/util/dot"), "var-init"),
    Tool = cc11001100_hook("Tool", require("superman:superuijs/util/tool"), "var-init"),
    DotDialogCompile = cc11001100_hook("DotDialogCompile", Dot.compile(['<div class="sui-prevent-wheel s-isindex-wrap sui-dialog {{? it.theme}}sui-dialog-{{=it.theme}}{{?}} {{?it.dialogClassName}} {{=it.dialogClassName}} {{?}}  {{? it.hasMask }} sui-dialog-hasmask {{?}} {{? it.title }} sui-dialog-hastitle {{?}}">', "{{? it.hasClose }}", '<a href="##" hidefocus class="sui-dialog-close" data-acting="close">关闭</a>', "{{?}}", "{{? it.title }}", '<div class="sui-dialog-title">{{=it.title}}</div>', "{{?}}", '<div class="sui-dialog-body">{{=it.content}}</div>', "{{? it.footer }}", '<div class="sui-dialog-footer">{{=it.footer}}</div>', "{{?}}", "</div>"].join("")), "var-init"),
    DotButtonsCompile = cc11001100_hook("DotButtonsCompile", Dot.compile(["{{~it.buttons :value:index}}", '<a href="javascript:;" hidefocus class="sui-dialog-button sui-dialog-button', "{{? value.style }}", '{{=value.style}}"', "{{??}}", "{{=value.type}}", "{{?}}", '" data-acting="{{=value.type}}" >{{=value.title}}</a>', "{{~}}"].join("")), "var-init"),
    TIPS_TEMPLATE = cc11001100_hook("TIPS_TEMPLATE", '<div class="sui-dialog-tips sui-dialog-tipsicon{type}"><div class="sui-dialog-tipstext"><em class="sui-dialog-tipsicon"></em>{content}</div></div>', "var-init"),
    MASK_TEMPLATE = cc11001100_hook("MASK_TEMPLATE", '<div class="sui-dialog-mask s-isindex-wrap sui-prevent-wheel sui-dialog-mask-{theme}" id="sui-dialog-mask"></div>', "var-init");
  require("superui/dialog.css");
  function Dialog(options) {
    cc11001100_hook("options", options, "function-parameter");
    this.initialize(options);
  }
  Dialog.prototype = cc11001100_hook("Dialog.prototype", {
    constructor: cc11001100_hook("constructor", Dialog, "object-key-init"),
    initialize: function (options) {
      this.options(F.mix({
        component: cc11001100_hook("component", "dialog", "object-key-init"),
        logactid: cc11001100_hook("logactid", "1000", "object-key-init"),
        title: cc11001100_hook("title", null, "object-key-init"),
        content: cc11001100_hook("content", null, "object-key-init"),
        buttons: cc11001100_hook("buttons", null, "object-key-init"),
        width: cc11001100_hook("width", 300, "object-key-init"),
        height: cc11001100_hook("height", 0, "object-key-init"),
        hasMask: cc11001100_hook("hasMask", true, "object-key-init"),
        hasClose: cc11001100_hook("hasClose", true, "object-key-init"),
        autoDestroy: cc11001100_hook("autoDestroy", false, "object-key-init"),
        autoShow: cc11001100_hook("autoShow", true, "object-key-init"),
        position: cc11001100_hook("position", null, "object-key-init"),
        theme: cc11001100_hook("theme", "", "object-key-init"),
        hideEffect: cc11001100_hook("hideEffect", false, "object-key-init")
      }, options));
      this.render();
      this.bind();
      if (options.autoShow !== false) {
        this.show();
      }
    },
    renderButton: function (buttons) {
      var btns = cc11001100_hook("btns", F.isArray(buttons) ? buttons : [buttons], "var-init"),
        buttons = cc11001100_hook("buttons", [], "var-init");
      F.each(btns, function (item, index) {
        if (!F.isPlainObject(item)) {
          var title,
            listener = cc11001100_hook("listener", null, "var-init");
          if (typeof item == "string") {
            title = cc11001100_hook("title", item, "assign");
          } else {
            listener = cc11001100_hook("listener", item, "assign");
            title = cc11001100_hook("title", index ? "取消" : "确认", "assign");
          }
          buttons.push({
            type: cc11001100_hook("type", index ? "cancel" : "ok", "object-key-init"),
            title: cc11001100_hook("title", title, "object-key-init"),
            listener: cc11001100_hook("listener", listener, "object-key-init")
          });
        } else {
          buttons.push(item);
        }
      });
      this.options("buttons", buttons);
      return DotButtonsCompile({
        buttons: cc11001100_hook("buttons", buttons, "object-key-init")
      });
    },
    render: function () {
      var options = cc11001100_hook("options", this.options(), "var-init"),
        offsetparent;
      this.wrap = cc11001100_hook("this.wrap", options.componentWrap || this.componentWrap, "assign");
      if (options.buttons) {
        options.footer = cc11001100_hook("options.footer", this.renderButton(options.buttons), "assign");
      }
      this.window = cc11001100_hook("this.window", $(DotDialogCompile(options)).appendTo(this.wrap), "assign");
      this.title = cc11001100_hook("this.title", this.window.find(".sui-dialog-title"), "assign");
      this.body = cc11001100_hook("this.body", this.window.find(".sui-dialog-body"), "assign");
      this.footer = cc11001100_hook("this.footer", this.window.find(".sui-dialog-footer"), "assign");
      if (options.hasMask) {
        if (!(this.mask = cc11001100_hook("this.mask", this.wrap.find(".sui-dialog-mask"), "assign")).length) {
          offsetparent = cc11001100_hook("offsetparent", this.window.offsetParent(), "assign");
          this.mask = cc11001100_hook("this.mask", $(Tool.substitute(MASK_TEMPLATE, {
            theme: cc11001100_hook("theme", options.theme || "", "object-key-init")
          })).appendTo(this.wrap).hide(), "assign");
          if (!!window.ActiveXObject && !window.XMLHttpRequest) {
            this.mask.css({
              height: cc11001100_hook("height", "100%", "object-key-init")
            });
          }
        }
      }
      this.window.hide();
    },
    getPositionTop: cc11001100_hook("getPositionTop", function () {
      var spform = cc11001100_hook("spform", $("#s_fm"), "var-init"),
        $doc = cc11001100_hook("$doc", $(document), "var-init"),
        $win = cc11001100_hook("$win", $(window), "var-init"),
        top = cc11001100_hook("top", null, "var-init");
      if (spform.length) {
        top = cc11001100_hook("top", spform.offset().top + spform.height() + 10, "assign");
      }
      return function () {
        var offsetparent = cc11001100_hook("offsetparent", this.window.offsetParent(), "var-init");
        if (offsetparent.find("input[name=wd]").length && top) {
          return top;
        } else {
          var whei = cc11001100_hook("whei", $win.height(), "var-init"),
            ohei = cc11001100_hook("ohei", offsetparent.outerHeight(), "var-init"),
            height = cc11001100_hook("height", this.window.height(), "var-init");
          if (whei < ohei) {
            return $doc.scrollTop() + (whei / 2 - height / 2);
          } else {
            return ohei / 2 - height / 2;
          }
        }
      };
    }(), "object-key-init"),
    resetPosition: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init"),
        height = cc11001100_hook("height", 0, "var-init"),
        css = cc11001100_hook("css", {
          width: cc11001100_hook("width", options.width || 400, "object-key-init"),
          height: cc11001100_hook("height", options.height || "auto", "object-key-init")
        }, "var-init");
      if (css.height !== "auto") {
        if (self.title) {
          height += cc11001100_hook("height", self.title.height(), "assign");
        }
        if (self.footer) {
          height += cc11001100_hook("height", self.footer.height(), "assign");
        }
        self.body.css("height", css.height - height);
      }
      if (F.isFunction(options.position)) {
        css = cc11001100_hook("css", F.mix(css, options.position()), "assign");
      } else {
        css.left = cc11001100_hook("css.left", "50%", "assign");
        css.marginLeft = cc11001100_hook("css.marginLeft", -css.width / 2, "assign");
        css.top = cc11001100_hook("css.top", options.top || self.getPositionTop(), "assign");
      }
      this.window.css(css);
    },
    show: function () {
      if (!this.hasshow) {
        if (this.mask) {
          this.mask.show();
        }
        this.refresh();
        this.window.show();
        this.emit("onShow");
        this.hasshow = cc11001100_hook("this.hasshow", true, "assign");
      }
    },
    hide: function () {
      if (this.hasshow) {
        if (!this.options("hideEffect")) {
          this.window.hide();
          if (this.mask) {
            this.mask.hide();
          }
        } else {
          this.window.fadeOut(400);
          if (this.mask) {
            this.mask.fadeOut(400);
          }
        }
        this.emit("onHide");
        this.hasshow = cc11001100_hook("this.hasshow", false, "assign");
        ctx.fire("dialogHide", {
          obj: cc11001100_hook("obj", this, "object-key-init")
        });
      }
    },
    close: function () {
      this.hide();
      this.window.remove();
      this.mask.remove();
      this.emit("onClose");
    },
    bind: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init");
      self.on("refresh", function () {
        self.resetPosition();
      }).on("destroy", function () {
        self.close();
      });
      self.acting(self.window);
      if (options.buttons) {
        F.each(options.buttons, function (item) {
          if (F.isFunction(item.listener)) {
            self.on("acting-" + item.type, item.listener);
          }
        });
      }
    }
  }, "assign");
  Dialog.alert = cc11001100_hook("Dialog.alert", function (options) {
    if (options.icons) {
      options.type = cc11001100_hook("options.type", options.icons, "assign");
    }
    return new Dialog(F.mix(options, {
      title: cc11001100_hook("title", options.title, "object-key-init"),
      content: cc11001100_hook("content", Tool.substitute(TIPS_TEMPLATE, {
        content: cc11001100_hook("content", options.content, "object-key-init"),
        type: cc11001100_hook("type", options.type || "success", "object-key-init")
      }) + (options.subcontent || ""), "object-key-init"),
      buttons: cc11001100_hook("buttons", options.buttons, "object-key-init"),
      width: cc11001100_hook("width", options.width || 300, "object-key-init")
    }));
  }, "assign");
  Dialog.confirm = cc11001100_hook("Dialog.confirm", function () {}, "assign");
  return F.inherit(Dialog, Component);
});
F.module("superman:superuijs/component/tips", function (require, exports) {
  var Component = cc11001100_hook("Component", require("superman:superuijs/component"), "var-init"),
    Dot = cc11001100_hook("Dot", require("superman:superuijs/util/dot"), "var-init"),
    DotTipsCompile = cc11001100_hook("DotTipsCompile", Dot.compile(['<div class="sui-tips s-isindex-wrap {{?it.theme}}sui-tips-{{=it.theme}}{{?}}">', "{{? it.hasArrow}}", '<div class="sui-tips-arrow"><em></em></div>', "{{?}}", "{{? it.hasClose }}", '<a href="##" hidefocus class="sui-tips-close" data-acting="close">关闭</a>', "{{?}}", '<div class="sui-tips-body{{? it.icons}} sui-tips-hasicons{{?}}{{? it.hasClose }} sui-tips-hasarrow{{?}}">', "{{? it.icons}}", '<div class="sui-tips-icons sui-tips-icon{{=it.icons}}"></div>', "{{?}}", "{{=it.content}}", "</div>", "</div>"].join("")), "var-init");
  require("superui/tips.css");
  function Tips(options) {
    cc11001100_hook("options", options, "function-parameter");
    this.initialize(options);
  }
  Tips.prototype = cc11001100_hook("Tips.prototype", {
    initialize: function (options) {
      var option = cc11001100_hook("option", this.options(F.mix({
        component: cc11001100_hook("component", "tips", "object-key-init"),
        logactid: cc11001100_hook("logactid", "1100", "object-key-init"),
        componentWrap: cc11001100_hook("componentWrap", null, "object-key-init"),
        target: cc11001100_hook("target", null, "object-key-init"),
        content: cc11001100_hook("content", "", "object-key-init"),
        width: cc11001100_hook("width", "auto", "object-key-init"),
        hasArrow: cc11001100_hook("hasArrow", true, "object-key-init"),
        hasClose: cc11001100_hook("hasClose", false, "object-key-init"),
        align: cc11001100_hook("align", "left", "object-key-init"),
        icons: cc11001100_hook("icons", "", "object-key-init"),
        arrowUp: cc11001100_hook("arrowUp", true, "object-key-init"),
        arrowLeft: cc11001100_hook("arrowLeft", 15, "object-key-init"),
        autoShow: cc11001100_hook("autoShow", true, "object-key-init"),
        autoHide: cc11001100_hook("autoHide", true, "object-key-init"),
        autoDestroy: cc11001100_hook("autoDestroy", false, "object-key-init"),
        autoReset: cc11001100_hook("autoReset", true, "object-key-init"),
        autoRefresh: cc11001100_hook("autoRefresh", false, "object-key-init"),
        theme: cc11001100_hook("theme", "", "object-key-init")
      }, options)), "var-init");
      this.render(option);
      this.bind();
      option.autoShow && this.show();
    },
    resetPosition: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init"),
        height = cc11001100_hook("height", self.tips.outerHeight(), "var-init"),
        target = cc11001100_hook("target", self.target, "var-init"),
        css = cc11001100_hook("css", {}, "var-init"),
        arrowheight = cc11001100_hook("arrowheight", self.arrow.outerHeight(), "var-init"),
        offsetparent = cc11001100_hook("offsetparent", self.tips.offsetParent(), "var-init"),
        offsetp = cc11001100_hook("offsetp", offsetparent.offset(), "var-init");
      if (options.hasArrow) {
        var offset = cc11001100_hook("offset", target.offset(), "var-init"),
          left = cc11001100_hook("left", 0, "var-init"),
          targetWidth = cc11001100_hook("targetWidth", target.outerWidth(), "var-init"),
          top = cc11001100_hook("top", offset.top + target.height() + arrowheight + 2, "var-init"),
          wid = cc11001100_hook("wid", 44, "var-init");
        if (options.align == "left" || options.align == "right") {
          if (options.align == "left") {
            left = cc11001100_hook("left", offset.left, "assign");
            if (targetWidth < wid) {
              left -= cc11001100_hook("left", (wid - targetWidth) / 2 + 2, "assign");
            }
          } else {
            left = cc11001100_hook("left", offset.left + targetWidth - self.tips.outerWidth(), "assign");
            if (targetWidth < wid) {
              left += cc11001100_hook("left", (wid - targetWidth) / 2 - 2, "assign");
            }
          }
        } else {
          left = cc11001100_hook("left", offset.left + target.width() / 2 - options.arrowLeft - 8, "assign");
        }
        if (!options.arrowUp) {
          top = cc11001100_hook("top", offset.top - arrowheight - height + 2, "assign");
        }
        css.left = cc11001100_hook("css.left", left - offsetp.left, "assign");
        css.top = cc11001100_hook("css.top", top - offsetp.top, "assign");
      } else {
        var ohei = cc11001100_hook("ohei", offsetparent.outerHeight(), "var-init"),
          whei = cc11001100_hook("whei", $(window).height(), "var-init"),
          owid = cc11001100_hook("owid", offsetparent.width(), "var-init");
        css.left = cc11001100_hook("css.left", owid / 2 - self.tips.width() / 2, "assign");
        if (offsetparent.find("input.wd").length) {
          css.top = cc11001100_hook("css.top", 245, "assign");
        } else {
          if (whei < ohei) {
            css.top = cc11001100_hook("css.top", $(document).scrollTop() + (whei / 2 - height / 2), "assign");
          } else {
            css.top = cc11001100_hook("css.top", ohei / 2 - height / 2, "assign");
          }
        }
      }
      this.tips.css(css);
    },
    render: function (options) {
      this.target = cc11001100_hook("this.target", options.target, "assign");
      this.wrap = cc11001100_hook("this.wrap", options.componentWrap || this.componentWrap, "assign");
      this.tips = cc11001100_hook("this.tips", $(DotTipsCompile(options)).hide().appendTo(this.wrap), "assign");
      this.arrow = cc11001100_hook("this.arrow", this.tips.find(".sui-tips-arrow"), "assign");
      this.body = cc11001100_hook("this.body", this.tips.find(".sui-tips-body"), "assign");
      this.offsetparent = cc11001100_hook("this.offsetparent", this.tips.offsetParent().addClass("sui-componentWrap"), "assign");
      this.tips.css("width", options.width);
      if (options.arrowLeft) {
        if (typeof options.arrowLeft == "string") {
          var width = cc11001100_hook("width", this.tips.outerWidth(), "var-init");
          switch (options.arrowLeft) {
            case "center":
              options.arrowLeft = cc11001100_hook("options.arrowLeft", width / 2 - 7, "assign");
              break;
            case "right":
              options.arrowLeft = cc11001100_hook("options.arrowLeft", width - 15 - 14, "assign");
              break;
            default:
              options.arrowLeft = cc11001100_hook("options.arrowLeft", 15, "assign");
              break;
          }
        }
        this.arrow.css("left", this.options("arrowLeft", options.arrowLeft));
      }
      if (options.arrowUp === false) {
        this.arrow.addClass("sui-tips-arrowup");
      }
      this.emit("onRender");
    },
    bind: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init");
      self.on("destroy", function () {
        self.close();
      }).on("refresh", function () {
        self.resetPosition();
      });
      self.acting(self.tips);
      if (options.autoHide) {
        self.tips.on("mousedown", function () {
          return false;
        });
        $(document).on("mousedown", function () {
          self.hide();
        });
      }
      if (options.autoRefresh) {
        $(window).on("resize", function () {
          self.refresh();
        });
      }
    },
    close: function () {
      this.hide();
      this.tips.remove();
      this.emit("onClose");
    },
    show: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init");
      if (!self.hasshow) {
        self.tips.show();
        self.resetPosition();
        self.emit("onShow");
        self.hasshow = cc11001100_hook("self.hasshow", true, "assign");
      }
      if (options.timing) {
        setTimeout(function () {
          self.hide();
        }, options.timing);
      }
    },
    hide: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init");
      if (self.hasshow) {
        self.tips.hide();
        self.emit("onHide");
        self.hasshow = cc11001100_hook("self.hasshow", false, "assign");
        if (options.autoDestroy) {
          self.tips.remove();
        }
      }
    }
  }, "assign");
  Tips = cc11001100_hook("Tips", F.inherit(Tips, Component), "assign");
  F.each("success,error,warning".split(","), function (method) {
    Tips[method] = cc11001100_hook("Tips[method]", function (options) {
      return new Tips(F.mix({
        timing: cc11001100_hook("timing", 2e3, "object-key-init"),
        hasArrow: cc11001100_hook("hasArrow", false, "object-key-init"),
        icons: cc11001100_hook("icons", method, "object-key-init"),
        autoDestroy: cc11001100_hook("autoDestroy", true, "object-key-init")
      }, options));
    }, "assign");
  });
  return Tips;
});
F.module("superman:superuijs/component/share", function (require, exports) {
  var Tips = cc11001100_hook("Tips", require("superman:superuijs/component/tips"), "var-init"),
    Component = cc11001100_hook("Component", require("superman:superuijs/component"), "var-init"),
    Dot = cc11001100_hook("Dot", require("superman:superuijs/util/dot"), "var-init"),
    DotShareCompile = cc11001100_hook("DotShareCompile", Dot.compile(['<div class="sui-share">', "{{~it.share :value:index}}", '<a href="###" data-acting="share" target="_blank" data-param="type={{=value.key}}" class="sui-share-icons-{{=value.key}}">{{=value.name}}</a>', "{{~}}", "</div>"].join("")), "var-init"),
    SHARE_DATA = cc11001100_hook("SHARE_DATA", [{
      key: cc11001100_hook("key", "tsina", "object-key-init"),
      name: cc11001100_hook("name", "新浪微博", "object-key-init")
    }, {
      key: cc11001100_hook("key", "tqq", "object-key-init"),
      name: cc11001100_hook("name", "腾讯微博", "object-key-init")
    }, {
      key: cc11001100_hook("key", "qzone", "object-key-init"),
      name: cc11001100_hook("name", "QQ空间", "object-key-init")
    }, {
      key: cc11001100_hook("key", "sqq", "object-key-init"),
      name: cc11001100_hook("name", "QQ好友", "object-key-init")
    }, {
      key: cc11001100_hook("key", "tieba", "object-key-init"),
      name: cc11001100_hook("name", "百度贴吧", "object-key-init")
    }], "var-init");
  require("superui/share.css");
  function Share(options) {
    cc11001100_hook("options", options, "function-parameter");
    this.initialize(options);
  }
  Share.prototype = cc11001100_hook("Share.prototype", {
    initialize: function (options) {
      var option = cc11001100_hook("option", this.options(F.mix({
        component: cc11001100_hook("component", "share", "object-key-init"),
        logactid: cc11001100_hook("logactid", "1101", "object-key-init"),
        target: cc11001100_hook("target", null, "object-key-init"),
        trigger: cc11001100_hook("trigger", "click", "object-key-init"),
        autoHide: cc11001100_hook("autoHide", true, "object-key-init"),
        width: cc11001100_hook("width", 168, "object-key-init"),
        text: cc11001100_hook("text", null, "object-key-init"),
        pic: cc11001100_hook("pic", null, "object-key-init"),
        url: cc11001100_hook("url", null, "object-key-init")
      }, options)), "var-init");
      this.render(option);
      this.bind();
    },
    render: function (option) {
      this.tips = cc11001100_hook("this.tips", new Tips(F.mix({
        target: cc11001100_hook("target", option.target, "object-key-init"),
        autoShow: cc11001100_hook("autoShow", false, "object-key-init"),
        arrowLeft: cc11001100_hook("arrowLeft", 20, "object-key-init"),
        width: cc11001100_hook("width", 190, "object-key-init"),
        content: cc11001100_hook("content", DotShareCompile({
          share: cc11001100_hook("share", SHARE_DATA, "object-key-init")
        }), "object-key-init")
      }, option)), "assign");
      this.target = cc11001100_hook("this.target", option.target, "assign");
    },
    bind: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        timer,
        timer2,
        options = cc11001100_hook("options", self.options(), "var-init");
      self.tips.on("onClose", function () {
        self.emit("onClose");
      }).on("onHide", function () {
        self.emit("onHide");
      }).on("onShow", function () {
        self.emit("onShow");
      });
      self.target.on(options.trigger, function () {
        self.show();
        timer2 && clearTimeout(timer2);
      });
      if (options.trigger == "mouseenter") {
        if (options.autoHide) {
          self.target.on("mouseleave", function () {
            timer = cc11001100_hook("timer", setTimeout(function () {
              self.hide();
            }, 200), "assign");
          });
          self.tips.tips.on("mouseenter mouseleave", function (event) {
            if (event.type == "mouseenter") {
              clearTimeout(timer);
            } else {
              timer2 = cc11001100_hook("timer2", setTimeout(function () {
                self.hide();
              }, 200), "assign");
            }
          });
        }
      }
      self.bindShare();
    },
    getShareURI: function (data) {
      var options = cc11001100_hook("options", this.options(), "var-init"),
        params;
      var url = cc11001100_hook("url", options.url + (options.url.indexOf("?") > -1 ? "&" : "?") + "super_frm=" + options.identity + "_share_" + data.type, "var-init");
      params = cc11001100_hook("params", $.param({
        url: cc11001100_hook("url", decodeURIComponent(url || ""), "object-key-init"),
        to: cc11001100_hook("to", data.type, "object-key-init"),
        pic: cc11001100_hook("pic", options.pic || "", "object-key-init"),
        title: cc11001100_hook("title", decodeURIComponent(options.text || ""), "object-key-init"),
        desc: cc11001100_hook("desc", decodeURIComponent(options.text || ""), "object-key-init"),
        type: cc11001100_hook("type", "text", "object-key-init")
      }), "assign");
      return "http://s.share.baidu.com/?" + params;
    },
    bindShare: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        tips = cc11001100_hook("tips", self.tips, "var-init");
      tips.on("acting-share", function (data) {
        var target = cc11001100_hook("target", data.target, "var-init"),
          href = cc11001100_hook("href", self.getShareURI(data), "var-init");
        target.attr("href", href);
        return false;
      });
    },
    close: function () {
      this.tips.close();
      this.emit("onClose");
    },
    show: function () {
      if (!this.hasshow) {
        this.tips.show();
        this.emit("onShow");
        this.hasshow = cc11001100_hook("this.hasshow", true, "assign");
      }
    },
    hide: function () {
      if (this.hasshow) {
        this.tips.hide();
        this.hasshow = cc11001100_hook("this.hasshow", false, "assign");
        this.emit("onHide");
      }
    }
  }, "assign");
  return F.inherit(Share, Component);
});
F.module("superman:superuijs/component/share2", function (require, exports, ctx) {
  var body = cc11001100_hook("body", $("body"), "var-init");
  function Share(settings) {
    cc11001100_hook("settings", settings, "function-parameter");
    var s = cc11001100_hook("s", settings || {}, "var-init");
    this.url = cc11001100_hook("this.url", s.url || "", "assign");
    this.title = cc11001100_hook("this.title", s.title || "", "assign");
    this.pics = cc11001100_hook("this.pics", s.pics || "", "assign");
    this.useDefaultUI = cc11001100_hook("this.useDefaultUI", s.useDefaultUI || false, "assign");
    this.log = cc11001100_hook("this.log", s.log, "assign");
  }
  Share.prototype = cc11001100_hook("Share.prototype", {
    init: function () {
      this.initView();
      this.addEvent();
    },
    initView: function () {
      if (this.useDefaultUI) {}
    },
    addEvent: function () {
      var that = cc11001100_hook("that", this, "var-init");
      body.off("click.share").on("click.share", '.share-wrapper .sns-item:not(".disabled")', function () {
        var elem = cc11001100_hook("elem", $(this), "var-init"),
          to = cc11001100_hook("to", elem.attr("data-share"), "var-init"),
          link,
          backUrl,
          obj;
        obj = cc11001100_hook("obj", that.getShareMap(to), "assign");
        link = cc11001100_hook("link", obj.link, "assign");
        backUrl = cc11001100_hook("backUrl", obj.backUrl, "assign");
        if (to == "weixin") {
          backUrl = cc11001100_hook("backUrl", elem.attr("data-url"), "assign");
          that.createQrCode(backUrl);
        } else {
          window.open(link);
        }
        if (that.log && that.log.evt) {
          that.sendLog(that.log.evt, "lotteryshare" + to, that.log, link);
        }
      });
    },
    getShareMap: function (to) {
      var link = cc11001100_hook("link", "http://s.share.baidu.com?", "var-init"),
        myLink = cc11001100_hook("myLink", this.url || window.location.href, "var-init"),
        frmRegx = cc11001100_hook("frmRegx", /(&|\?)super_frm=(\w*)(&|$)/gi, "var-init"),
        hasOther = cc11001100_hook("hasOther", false, "var-init"),
        title = cc11001100_hook("title", this.title, "var-init"),
        pics = cc11001100_hook("pics", this.pics, "var-init");
      myLink = cc11001100_hook("myLink", myLink.replace(frmRegx, function () {
        if (arguments[1] && arguments[1] == "?") {
          hasOther = cc11001100_hook("hasOther", true, "assign");
          return "?super_frm=activitygoddess_pub_ss_share_" + to + arguments[3];
        }
        return "";
      }), "assign");
      var suffix = cc11001100_hook("suffix", myLink.indexOf("?") == -1 ? "?" : "&", "var-init"),
        backUrl = cc11001100_hook("backUrl", myLink + (hasOther == false ? suffix + "super_frm=activitygoddess_pub_ss_share_" + to : ""), "var-init");
      myLink = cc11001100_hook("myLink", encodeURIComponent(backUrl), "assign");
      title = cc11001100_hook("title", encodeURIComponent(title), "assign");
      var sharePic = cc11001100_hook("sharePic", pics, "var-init");
      var paramStr = cc11001100_hook("paramStr", ["url=", myLink, "&to=", to, "&title=", title, "&pic=", sharePic], "var-init");
      link += cc11001100_hook("link", paramStr.join(""), "assign");
      return {
        link: cc11001100_hook("link", link, "object-key-init"),
        backUrl: cc11001100_hook("backUrl", backUrl, "object-key-init")
      };
    },
    createQrCode: function (link) {
      var win = cc11001100_hook("win", $(window), "var-init"),
        height = cc11001100_hook("height", win.height(), "var-init"),
        scrollTop = cc11001100_hook("scrollTop", win.scrollTop(), "var-init"),
        elem,
        mask;
      if (!$(".s-qrcode-outer").length) {
        body.append('<div class="s-qrcode-mask" style="position: fixed; _position: absolute; width: 100%; height: 100%; left: 0; top: 0; z-index: 999998; opacity: 0.5; filter:alpha(opacity=50); background: #000"></div>');
        body.append('<div class="s-qrcode-outer" style="display: none"><span class="close"></span><div id="qrcode"></div></div>');
      }
      elem = cc11001100_hook("elem", $(".s-qrcode-outer"), "assign");
      mask = cc11001100_hook("mask", $(".s-qrcode-mask"), "assign");
      elem.show();
      mask.show();
      if ($.isIE == 6 || $.isIE == 7) {
        elem.css({
          top: cc11001100_hook("top", height / 2 + scrollTop + "px", "object-key-init")
        });
      }
      if ($("#qrcode").html() != "") {
        return;
      }
      $.getScript(s_domain.staticUrl + "static/activity/js/lib/qrcode.js?v=md5", function () {
        new QRCode($("#qrcode")[0], link);
      });
      $(".s-qrcode-outer").on("click", ".close", function (e) {
        $(".s-qrcode-outer,.s-qrcode-mask").hide();
        e.stopPropagation();
      });
    },
    sendLog: function (evt, type, pLogs, url) {
      var baseLog = cc11001100_hook("baseLog", {
        clickType: cc11001100_hook("clickType", type, "object-key-init"),
        url: cc11001100_hook("url", url, "object-key-init")
      }, "var-init");
      if (evt) {
        ctx.fire(evt, $.extend(baseLog, pLogs));
      }
    }
  }, "assign");
  return Share;
});
F.module("superman:superuijs/component/notify", function (require, exports, ctx) {
  var Component = cc11001100_hook("Component", require("superman:superuijs/component"), "var-init");
  function Notify(option) {
    cc11001100_hook("option", option, "function-parameter");
    this.initialize(option);
  }
  Notify.prototype = cc11001100_hook("Notify.prototype", {
    initialize: function (option) {
      this.setttings = cc11001100_hook("this.setttings", this.options(F.mix({
        component: cc11001100_hook("component", "notify", "object-key-init"),
        logactid: cc11001100_hook("logactid", "9000", "object-key-init"),
        dir: cc11001100_hook("dir", "auto", "object-key-init"),
        lang: cc11001100_hook("lang", "", "object-key-init"),
        tag: cc11001100_hook("tag", "", "object-key-init"),
        title: cc11001100_hook("title", "", "object-key-init"),
        body: cc11001100_hook("body", "", "object-key-init"),
        icon: cc11001100_hook("icon", "", "object-key-init"),
        delay: cc11001100_hook("delay", 5e3, "object-key-init")
      }, option)), "assign");
    },
    permission: function () {
      var ret = cc11001100_hook("ret", false, "var-init"),
        permissionMap = cc11001100_hook("permissionMap", {
          0: cc11001100_hook(0, "granted", "object-key-init"),
          1: cc11001100_hook(1, "default", "object-key-init"),
          2: cc11001100_hook(2, "denied", "object-key-init")
        }, "var-init");
      if ("webkitNotifications" in window) {
        var p = cc11001100_hook("p", window.webkitNotifications.checkPermission(), "var-init");
        ret = cc11001100_hook("ret", permissionMap[p], "assign");
      }
      if ("Notification" in window && !window.webkitNotifications) {
        ret = cc11001100_hook("ret", Notification.permission, "assign");
      }
      return ret;
    },
    show: function () {
      var s = cc11001100_hook("s", this.setttings || {}, "var-init"),
        element;
      if ("webkitNotifications" in window && window.webkitNotifications.createNotification) {
        if (webkitNotifications.checkPermission() == 0) {
          element = cc11001100_hook("element", this.element = cc11001100_hook("this.element", window.webkitNotifications.createNotification(s.icon, s.title, s.body), "assign"), "assign");
          element.tag = cc11001100_hook("element.tag", s.tag, "assign");
          element.show();
        } else {
          webkitNotifications.requestPermission();
          return;
        }
      }
      if ("Notification" in window && !window.webkitNotifications) {
        var Notify = cc11001100_hook("Notify", window.Notification, "var-init");
        if (Notify.permission === "default") {
          Notify.requestPermission();
          return;
        } else if (Notify.permission === "granted") {
          element = cc11001100_hook("element", this.element = cc11001100_hook("this.element", new Notification(s.title, {
            dir: cc11001100_hook("dir", s.dir, "object-key-init"),
            lang: cc11001100_hook("lang", s.lang, "object-key-init"),
            body: cc11001100_hook("body", s.body, "object-key-init"),
            tag: cc11001100_hook("tag", s.tag, "object-key-init"),
            icon: cc11001100_hook("icon", s.icon, "object-key-init")
          }), "assign"), "assign");
        }
      }
      element.onclick = cc11001100_hook("element.onclick", function () {
        if (!!s.click) {
          s.click();
        }
        if (this.log) {
          this.log("click");
        }
      }, "assign");
      element.onshow = cc11001100_hook("element.onshow", function () {
        if (!!s.show) {
          s.show();
        }
        if (this.log) {
          this.log("show");
        }
      }, "assign");
      element.onclose = cc11001100_hook("element.onclose", function () {
        if (!!s.close) {
          s.close();
        }
        if (this.log) {
          this.log("close");
        }
        this.element = cc11001100_hook("this.element", null, "assign");
      }, "assign");
      setTimeout(function () {
        if (element.close) {
          element.close();
        }
      }, s.delay);
    },
    close: function () {
      if (this.element) {
        this.element.close();
      }
    }
  }, "assign");
  Notify.permission = cc11001100_hook("Notify.permission", Notify.prototype.permission, "assign");
  return F.inherit(Notify, Component);
});
F.module("superman:superuijs/component/suggestion", function (require, exports) {
  var Component = cc11001100_hook("Component", require("superman:superuijs/component"), "var-init"),
    Dot = cc11001100_hook("Dot", require("superman:superuijs/util/dot"), "var-init"),
    Tool = cc11001100_hook("Tool", require("superman:superuijs/util/tool"), "var-init"),
    DotListCompile = cc11001100_hook("DotListCompile", Dot.compile(['<div class="sui-suggestion{{? it.theme}}sui-suggestion-{{=it.theme}}{{?}}">', "<ul>", "{{=it.content}}", "</ul>", "</div>"].join("")), "var-init"),
    ITEM_NO_DATA = cc11001100_hook("ITEM_NO_DATA", '<li class="sui-suggestion-nodata">{noRecord}</li>', "var-init"),
    ITEM_CLASS = cc11001100_hook("ITEM_CLASS", "sui-suggestion-item", "var-init"),
    ITEM_CLASS_QUERY = cc11001100_hook("ITEM_CLASS_QUERY", "." + ITEM_CLASS, "var-init"),
    ITEM_HOVER_CLASS = cc11001100_hook("ITEM_HOVER_CLASS", "sui-suggestion-hover", "var-init"),
    ITEM_HOVER_CLASS_QUERY = cc11001100_hook("ITEM_HOVER_CLASS_QUERY", "." + ITEM_HOVER_CLASS, "var-init"),
    DotItemCompile = cc11001100_hook("DotItemCompile", Dot.compile('<li data-index="{{=it.index}}" class="sui-suggestion-item">{{=it.content}}</li>'), "var-init");
  require("superui/suggestion.css");
  var KEY = cc11001100_hook("KEY", {
    UP: cc11001100_hook("UP", 38, "object-key-init"),
    DOWN: cc11001100_hook("DOWN", 40, "object-key-init"),
    ESC: cc11001100_hook("ESC", 27, "object-key-init"),
    RETURN: cc11001100_hook("RETURN", 13, "object-key-init"),
    BACKSPACE: cc11001100_hook("BACKSPACE", 8, "object-key-init"),
    SPACE: cc11001100_hook("SPACE", 32, "object-key-init")
  }, "var-init");
  function Suggestion(options) {
    cc11001100_hook("options", options, "function-parameter");
    this.initialize(options);
  }
  Suggestion.prototype = cc11001100_hook("Suggestion.prototype", {
    constructor: cc11001100_hook("constructor", Suggestion, "object-key-init"),
    initialize: function (options) {
      var option = cc11001100_hook("option", this.options(F.mix({
        component: cc11001100_hook("component", "suggestion", "object-key-init"),
        logactid: cc11001100_hook("logactid", "1100", "object-key-init"),
        input: cc11001100_hook("input", null, "object-key-init"),
        url: cc11001100_hook("url", "", "object-key-init"),
        template: cc11001100_hook("template", "<span>{{=it.name}}</span>--{{=it.author}}", "object-key-init"),
        autoFill: cc11001100_hook("autoFill", "name", "object-key-init"),
        autoEmpty: cc11001100_hook("autoEmpty", true, "object-key-init"),
        width: cc11001100_hook("width", "auto", "object-key-init"),
        max: cc11001100_hook("max", 10, "object-key-init"),
        dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
        charset: cc11001100_hook("charset", "gbk", "object-key-init"),
        jsonp: cc11001100_hook("jsonp", "cb", "object-key-init"),
        delay: cc11001100_hook("delay", 100, "object-key-init"),
        focusShow: cc11001100_hook("focusShow", true, "object-key-init"),
        ajaxoptions: cc11001100_hook("ajaxoptions", null, "object-key-init"),
        posRefer: cc11001100_hook("posRefer", null, "object-key-init"),
        noRecord: cc11001100_hook("noRecord", "没有找到符合条件的结果", "object-key-init"),
        theme: cc11001100_hook("theme", "", "object-key-init"),
        result: function (json) {
          var data = cc11001100_hook("data", [], "var-init"),
            match;
          try {
            if (json.s) {
              F.each(json.s, function (item) {
                match = cc11001100_hook("match", item.split(/\{#S\+_\}/i), "assign");
                if (match && match.length == 2) {
                  data.push($.parseJSON(match[1]));
                }
              });
            } else {
              F.each(json.g, function (item) {
                if (item.type === "sug") {
                  match = cc11001100_hook("match", item.q.split(/\{#S\+_\}/i), "assign");
                  if (match && match.length === 2) {
                    data.push($.parseJSON(match[1]));
                  }
                }
              });
            }
          } catch (e) {
            throw new Error("result结果错误，请之定义result函数或则更换接口");
          }
          return data;
        },
        value: function (url, value) {
          return url.replace(/#?\{(wd|word)\}/i, value);
        },
        highlight: function (data, value) {
          return data.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + value.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "i"), '<span class="sui-suggestion-highlight">$1</span>');
        }
      }, options)), "var-init");
      this.input = cc11001100_hook("this.input", option.input, "assign");
      this.noRecord = cc11001100_hook("this.noRecord", Tool.substitute(ITEM_NO_DATA, option), "assign");
      if (this.input && this.input.length) {
        if (typeof option.template == "string") {
          this.DotCompile = cc11001100_hook("this.DotCompile", Dot.compile(option.template), "assign");
        }
        this.render(option);
        this.bind(option);
      }
    },
    render: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init");
      self.wrap = cc11001100_hook("self.wrap", options.componentWrap ? options.componentWrap : self.input.offsetParent().addClass("sui-componentWrap"), "assign");
      self.list = cc11001100_hook("self.list", $(DotListCompile(options)).hide().appendTo(this.wrap), "assign");
      self.listul = cc11001100_hook("self.listul", self.list.find("ul"), "assign");
      self.resetPosition();
    },
    resetPosition: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        offset = cc11001100_hook("offset", self.wrap.offset(), "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init"),
        input = cc11001100_hook("input", options.posRefer || self.input, "var-init"),
        ioffset = cc11001100_hook("ioffset", input.offset(), "var-init"),
        width;
      width = cc11001100_hook("width", typeof options.width == "number" ? options.width : self.input.outerWidth(), "assign");
      self.list.css({
        left: cc11001100_hook("left", ioffset.left - offset.left, "object-key-init"),
        top: cc11001100_hook("top", ioffset.top - offset.top + self.input.outerHeight(), "object-key-init"),
        width: cc11001100_hook("width", width - parseInt(self.list.css("borderLeftWidth"), 10) - parseInt(self.list.css("borderRightWidth"), 10), "object-key-init")
      });
    },
    range: function () {
      var input = cc11001100_hook("input", this.input[0], "var-init"),
        value = cc11001100_hook("value", this.input.val(), "var-init");
      if (typeof document.selection !== "undefined") {
        var rt = cc11001100_hook("rt", input.createTextRange(), "var-init"),
          r = cc11001100_hook("r", document.selection.createRange(), "var-init");
        rt.collapse();
        rt.select();
        r.collapse(false);
        r.moveStart("character", value.length);
        r.moveEnd("character", value.length);
        r.select();
      } else {
        input.setSelectionRange(value.length, value.length);
      }
    },
    bind: function (options) {
      var self = cc11001100_hook("self", this, "var-init"),
        timeout;
      self.input.on("keydown", function (event) {
        switch (event.keyCode) {
          case KEY.UP:
            event.preventDefault();
            self.up();
            self.range();
            break;
          case KEY.DOWN:
            self.down();
            break;
          case KEY.RETURN:
            event.preventDefault();
            self.select();
          case KEY.ESC:
            self.hide();
            break;
          case KEY.BACKSPACE:
            self.cache = cc11001100_hook("self.cache", "", "assign");
          default:
            clearTimeout(timeout);
            self.clearResult(false);
            timeout = cc11001100_hook("timeout", setTimeout(function () {
              self.change();
            }, options.delay), "assign");
            break;
        }
      }).mouseenter(function () {
        self.resetPosition();
      }).focus(function () {
        if (self.resdata && self.resdata.length && self.options("focusShow")) {
          self.show();
        }
      });
      self.list.on("mouseenter click", ITEM_CLASS_QUERY, function (event, target) {
        self.index = cc11001100_hook("self.index", parseInt((target = cc11001100_hook("target", $(event.target).closest(ITEM_CLASS_QUERY), "assign")).attr("data-index"), 10), "assign");
        if (event.type == "click") {
          self.select();
        } else {
          self.hover(target);
        }
      }).mouseleave(function () {
        self.hover();
      });
      $(document).mousedown(function (e) {
        if (!$(e.target).parents(".sui-suggestion").length) {
          self.hide();
        }
      });
      self.on("refresh", function () {
        self.resetPosition();
      });
    },
    hover: function (target, index) {
      this.list.find(ITEM_HOVER_CLASS_QUERY).removeClass(ITEM_HOVER_CLASS);
      if (target) {
        target.addClass(ITEM_HOVER_CLASS);
      }
      if (typeof index == "number") {
        this.list.find(ITEM_CLASS_QUERY).eq(index).addClass(ITEM_HOVER_CLASS);
      }
    },
    change: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        options = cc11001100_hook("options", self.options(), "var-init"),
        ajaxoptions = cc11001100_hook("ajaxoptions", {}, "var-init"),
        value = cc11001100_hook("value", self.input.val(), "var-init");
      if (value && self.cache !== value) {
        ajaxoptions = cc11001100_hook("ajaxoptions", {
          url: cc11001100_hook("url", options.url, "object-key-init"),
          dataType: cc11001100_hook("dataType", options.dataType, "object-key-init"),
          scriptCharset: cc11001100_hook("scriptCharset", options.charset, "object-key-init"),
          success: function (result) {
            self.result(result);
          }
        }, "assign");
        if (options.dataType == "jsonp") {
          ajaxoptions.url = cc11001100_hook("ajaxoptions.url", options.value(options.url, value), "assign");
          ajaxoptions.jsonp = cc11001100_hook("ajaxoptions.jsonp", options.jsonp, "assign");
        } else {
          if (options.ajaxoptions) {
            ajaxoptions = cc11001100_hook("ajaxoptions", F.mix(ajaxoptions, options.ajaxoptions), "assign");
          }
          ajaxoptions.data = cc11001100_hook("ajaxoptions.data", options.value(options.url, value), "assign");
        }
        self.cache = cc11001100_hook("self.cache", value, "assign");
        return $.ajax(ajaxoptions);
      }
      self.hide();
    },
    result: function (result) {
      var options = cc11001100_hook("options", this.options(), "var-init"),
        self = cc11001100_hook("self", this, "var-init"),
        data = cc11001100_hook("data", [], "var-init"),
        html = cc11001100_hook("html", [], "var-init");
      if ((data = cc11001100_hook("data", options.result(result), "assign")).length) {
        data = cc11001100_hook("data", data.slice(0, options.max), "assign");
        F.each(data, function (item, idx) {
          html.push(DotItemCompile({
            index: cc11001100_hook("index", idx, "object-key-init"),
            content: cc11001100_hook("content", options.highlight(self.DotCompile(item), self.cache), "object-key-init")
          }));
        });
      } else {
        html.push(self.noRecord);
      }
      self.index = cc11001100_hook("self.index", -1, "assign");
      self.resdata = cc11001100_hook("self.resdata", data, "assign");
      self.total = cc11001100_hook("self.total", data.length, "assign");
      self.listul.html(html.join(""));
      self.show();
    },
    clearResult: function (recache) {
      this.resdata = cc11001100_hook("this.resdata", [], "assign");
      this.index = cc11001100_hook("this.index", -1, "assign");
      if (recache !== false) {
        this.cache = cc11001100_hook("this.cache", "", "assign");
      }
    },
    getResult: function () {
      return this.resdata || [];
    },
    getValue: function (autofill) {
      var data = cc11001100_hook("data", this.getResult(), "var-init"),
        item = cc11001100_hook("item", data[Math.max(0, this.index)], "var-init");
      this.cache = cc11001100_hook("this.cache", "", "assign");
      if (item) {
        if (autofill != false) {
          this.fill(item);
        }
        return item;
      }
      return null;
    },
    fill: function (data) {
      var options = cc11001100_hook("options", this.options(), "var-init"),
        fill = cc11001100_hook("fill", options.autoFill, "var-init");
      if (fill) {
        if (typeof fill == "string") {
          this.input.val(data[fill]);
        } else if (typeof fill == "function") {
          this.input.val(fill(data));
        }
      } else {
        if (options.autoEmpty) {
          this.input.val("").focus();
        }
      }
    },
    up: function () {
      if (--this.index < 0) {
        this.index = cc11001100_hook("this.index", this.total - 1, "assign");
      }
      this.hover(null, this.index);
    },
    down: function () {
      if (++this.index >= this.total) {
        this.index = cc11001100_hook("this.index", 0, "assign");
      }
      this.hover(null, this.index);
    },
    select: function () {
      var index = cc11001100_hook("index", Math.max(0, this.index), "var-init"),
        data = cc11001100_hook("data", this.resdata, "var-init"),
        item;
      if (item = cc11001100_hook("item", data[index], "assign")) {
        this.fill(item);
        this.emit("onSelect", item);
        this.log("select");
      }
      this.hide();
    },
    hide: function () {
      this.list.hide();
    },
    show: function () {
      this.list.show();
    }
  }, "assign");
  return F.inherit(Suggestion, Component);
});
F.module("superman:superuijs/component/placeholder", function (require, exports) {
  var Component = cc11001100_hook("Component", require("superman:superuijs/component"), "var-init"),
    Dot = cc11001100_hook("Dot", require("superman:superuijs/util/dot"), "var-init"),
    _attrTag = cc11001100_hook("_attrTag", "placeholder", "var-init"),
    DotPlaceholderCompile = cc11001100_hook("DotPlaceholderCompile", Dot.compile(["<div data-attr='" + _attrTag + "' ", "style='position:absolute;text-indent:{{=it.indent}}px;", "width:{{=it.width}}px;height:{{=it.height}}px;", "line-height:{{=it.lineheight}}px;", "font-size:{{=it.font}}px;", "color:#666;cursor:text;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;'>", "{{=it.holderText}}", "</div>"].join("")), "var-init");
  require("superui/superui.css");
  function Placeholder(options) {
    cc11001100_hook("options", options, "function-parameter");
    this.initialize(options);
  }
  Placeholder.prototype = cc11001100_hook("Placeholder.prototype", {
    initialize: function (options) {
      var that = cc11001100_hook("that", this, "var-init");
      if (that.isSupportPlacerHolder()) {
        options.target.attr("placeholder", options.holderText);
        return;
      }
      that.options(F.mix({
        component: cc11001100_hook("component", "placeholder", "object-key-init"),
        logactid: cc11001100_hook("logactid", "4000", "object-key-init"),
        componentWrap: cc11001100_hook("componentWrap", null, "object-key-init"),
        target: cc11001100_hook("target", null, "object-key-init"),
        holderText: cc11001100_hook("holderText", "", "object-key-init"),
        height: cc11001100_hook("height", 0, "object-key-init"),
        lineheight: cc11001100_hook("lineheight", 0, "object-key-init"),
        font: cc11001100_hook("font", 12, "object-key-init")
      }, options));
      if (isNaN(options.top) || isNaN(options.left)) {
        throw new Error("组件" + (options.component || "") + "必须设置top，left值");
      }
      that.render();
      that.bind();
    },
    isSupportPlacerHolder: function () {
      return "placeholder" in document.createElement("input");
    },
    render: function () {
      var that = cc11001100_hook("that", this, "var-init"),
        options = cc11001100_hook("options", that.options(), "var-init");
      that.input = cc11001100_hook("that.input", options.target, "assign");
      that.top = cc11001100_hook("that.top", options.top, "assign");
      that.left = cc11001100_hook("that.left", options.left, "assign");
      that.componentWrap = cc11001100_hook("that.componentWrap", options.componentWrap, "assign");
      options.indent = cc11001100_hook("options.indent", parseInt(that.input.css("padding-left"), 10), "assign");
      that.holder = cc11001100_hook("that.holder", $(DotPlaceholderCompile(options)), "assign");
      that.componentWrap.append(that.holder);
      that.toPositionPlaceHolder();
      if (!that.input.val()) {
        that.show();
      }
      this.emit("onRender");
    },
    bind: function () {
      var that = cc11001100_hook("that", this, "var-init"),
        options = cc11001100_hook("options", that.options(), "var-init");
      options.target.on("keydown keyup change blur focus", function () {
        that.updateHolderStatus();
      });
      that.holder.on("click", function () {
        options.target.focus();
      });
      that.on("destroy", function () {
        that.close();
      }).on("refresh", function () {
        that.toPositionPlaceHolder();
        that.updateHolderStatus();
      });
    },
    updateHolderStatus: function () {
      var that = cc11001100_hook("that", this, "var-init");
      if ($.trim(that.input.val())) {
        that.hide();
      } else {
        that.show();
      }
    },
    toPositionPlaceHolder: function () {
      var that = cc11001100_hook("that", this, "var-init"),
        options = cc11001100_hook("options", that.options(), "var-init");
      var that = cc11001100_hook("that", this, "var-init");
      that.holder.css({
        left: cc11001100_hook("left", that.left, "object-key-init"),
        top: cc11001100_hook("top", that.top, "object-key-init")
      });
    },
    show: function () {
      this.holder && this.holder.show();
    },
    hide: function () {
      this.holder.hide();
    },
    close: function () {
      var that = cc11001100_hook("that", this, "var-init");
      that.holder.remove();
    }
  }, "assign");
  return F.inherit(Placeholder, Component);
});