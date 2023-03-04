/*
 *  /MathJax.js
 *
 *  Copyright (c) 2009-2017 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

if (document.getElementById && document.childNodes && document.createElement) {
  if (!(window.MathJax && MathJax.Hub)) {
    if (window.MathJax) {
      window.MathJax = cc11001100_hook("window.MathJax", {
        AuthorConfig: cc11001100_hook("AuthorConfig", window.MathJax, "object-key-init")
      }, "assign");
    } else {
      window.MathJax = cc11001100_hook("window.MathJax", {}, "assign");
    }
    MathJax.isPacked = cc11001100_hook("MathJax.isPacked", true, "assign");
    MathJax.version = cc11001100_hook("MathJax.version", "2.7.2", "assign");
    MathJax.fileversion = cc11001100_hook("MathJax.fileversion", "2.7.2", "assign");
    MathJax.cdnVersion = cc11001100_hook("MathJax.cdnVersion", "2.7.2", "assign");
    MathJax.cdnFileVersions = cc11001100_hook("MathJax.cdnFileVersions", {}, "assign");
    (function (d) {
      var b = cc11001100_hook("b", window[d], "var-init");
      if (!b) {
        b = cc11001100_hook("b", window[d] = cc11001100_hook("window[d]", {}, "assign"), "assign");
      }
      var e = cc11001100_hook("e", [], "var-init");
      var c = function (f) {
        var g = cc11001100_hook("g", f.constructor, "var-init");
        if (!g) {
          g = cc11001100_hook("g", function () {}, "assign");
        }
        for (var h in f) {
          if (h !== "constructor" && f.hasOwnProperty(h)) {
            g[h] = cc11001100_hook("g[h]", f[h], "assign");
          }
        }
        return g;
      };
      var a = function () {
        return function () {
          return arguments.callee.Init.call(this, arguments);
        };
      };
      b.Object = cc11001100_hook("b.Object", c({
        constructor: cc11001100_hook("constructor", a(), "object-key-init"),
        Subclass: function (f, h) {
          var g = cc11001100_hook("g", a(), "var-init");
          g.SUPER = cc11001100_hook("g.SUPER", this, "assign");
          g.Init = cc11001100_hook("g.Init", this.Init, "assign");
          g.Subclass = cc11001100_hook("g.Subclass", this.Subclass, "assign");
          g.Augment = cc11001100_hook("g.Augment", this.Augment, "assign");
          g.protoFunction = cc11001100_hook("g.protoFunction", this.protoFunction, "assign");
          g.can = cc11001100_hook("g.can", this.can, "assign");
          g.has = cc11001100_hook("g.has", this.has, "assign");
          g.isa = cc11001100_hook("g.isa", this.isa, "assign");
          g.prototype = cc11001100_hook("g.prototype", new this(e), "assign");
          g.prototype.constructor = cc11001100_hook("g.prototype.constructor", g, "assign");
          g.Augment(f, h);
          return g;
        },
        Init: function (f) {
          var g = cc11001100_hook("g", this, "var-init");
          if (f.length === 1 && f[0] === e) {
            return g;
          }
          if (!(g instanceof f.callee)) {
            g = cc11001100_hook("g", new f.callee(e), "assign");
          }
          return g.Init.apply(g, f) || g;
        },
        Augment: function (f, g) {
          var h;
          if (f != null) {
            for (h in f) {
              if (f.hasOwnProperty(h)) {
                this.protoFunction(h, f[h]);
              }
            }
            if (f.toString !== this.prototype.toString && f.toString !== {}.toString) {
              this.protoFunction("toString", f.toString);
            }
          }
          if (g != null) {
            for (h in g) {
              if (g.hasOwnProperty(h)) {
                this[h] = cc11001100_hook("this[h]", g[h], "assign");
              }
            }
          }
          return this;
        },
        protoFunction: function (g, f) {
          this.prototype[g] = cc11001100_hook("this.prototype[g]", f, "assign");
          if (typeof f === "function") {
            f.SUPER = cc11001100_hook("f.SUPER", this.SUPER.prototype, "assign");
          }
        },
        prototype: {
          Init: function () {},
          SUPER: function (f) {
            return f.callee.SUPER;
          },
          can: function (f) {
            return typeof this[f] === "function";
          },
          has: function (f) {
            return typeof this[f] !== "undefined";
          },
          isa: function (f) {
            return f instanceof Object && this instanceof f;
          }
        },
        can: function (f) {
          return this.prototype.can.call(this, f);
        },
        has: function (f) {
          return this.prototype.has.call(this, f);
        },
        isa: function (g) {
          var f = cc11001100_hook("f", this, "var-init");
          while (f) {
            if (f === g) {
              return true;
            } else {
              f = cc11001100_hook("f", f.SUPER, "assign");
            }
          }
          return false;
        },
        SimpleSUPER: cc11001100_hook("SimpleSUPER", c({
          constructor: function (f) {
            return this.SimpleSUPER.define(f);
          },
          define: function (f) {
            var h = cc11001100_hook("h", {}, "var-init");
            if (f != null) {
              for (var g in f) {
                if (f.hasOwnProperty(g)) {
                  h[g] = cc11001100_hook("h[g]", this.wrap(g, f[g]), "assign");
                }
              }
              if (f.toString !== this.prototype.toString && f.toString !== {}.toString) {
                h.toString = cc11001100_hook("h.toString", this.wrap("toString", f.toString), "assign");
              }
            }
            return h;
          },
          wrap: function (i, h) {
            if (typeof h !== "function" || !h.toString().match(/\.\s*SUPER\s*\(/)) {
              return h;
            }
            var g = function () {
              this.SUPER = cc11001100_hook("this.SUPER", g.SUPER[i], "assign");
              try {
                var f = cc11001100_hook("f", h.apply(this, arguments), "var-init");
              } catch (j) {
                delete this.SUPER;
                throw j;
              }
              delete this.SUPER;
              return f;
            };
            g.toString = cc11001100_hook("g.toString", function () {
              return h.toString.apply(h, arguments);
            }, "assign");
            return g;
          }
        }), "object-key-init")
      }), "assign");
      b.Object.isArray = cc11001100_hook("b.Object.isArray", Array.isArray || function (f) {
        return Object.prototype.toString.call(f) === "[object Array]";
      }, "assign");
      b.Object.Array = cc11001100_hook("b.Object.Array", Array, "assign");
    })("MathJax");
    (function (BASENAME) {
      var BASE = cc11001100_hook("BASE", window[BASENAME], "var-init");
      if (!BASE) {
        BASE = cc11001100_hook("BASE", window[BASENAME] = cc11001100_hook("window[BASENAME]", {}, "assign"), "assign");
      }
      var isArray = cc11001100_hook("isArray", BASE.Object.isArray, "var-init");
      var CALLBACK = function (data) {
        var cb = function () {
          return arguments.callee.execute.apply(arguments.callee, arguments);
        };
        for (var id in CALLBACK.prototype) {
          if (CALLBACK.prototype.hasOwnProperty(id)) {
            if (typeof data[id] !== "undefined") {
              cb[id] = cc11001100_hook("cb[id]", data[id], "assign");
            } else {
              cb[id] = cc11001100_hook("cb[id]", CALLBACK.prototype[id], "assign");
            }
          }
        }
        cb.toString = cc11001100_hook("cb.toString", CALLBACK.prototype.toString, "assign");
        return cb;
      };
      CALLBACK.prototype = cc11001100_hook("CALLBACK.prototype", {
        isCallback: cc11001100_hook("isCallback", true, "object-key-init"),
        hook: function () {},
        data: cc11001100_hook("data", [], "object-key-init"),
        object: cc11001100_hook("object", window, "object-key-init"),
        execute: function () {
          if (!this.called || this.autoReset) {
            this.called = cc11001100_hook("this.called", !this.autoReset, "assign");
            return this.hook.apply(this.object, this.data.concat([].slice.call(arguments, 0)));
          }
        },
        reset: function () {
          delete this.called;
        },
        toString: function () {
          return this.hook.toString.apply(this.hook, arguments);
        }
      }, "assign");
      var ISCALLBACK = function (f) {
        return typeof f === "function" && f.isCallback;
      };
      var EVAL = function (code) {
        return eval.call(window, code);
      };
      var TESTEVAL = function () {
        EVAL("var __TeSt_VaR__ = 1");
        if (window.__TeSt_VaR__) {
          try {
            delete window.__TeSt_VaR__;
          } catch (error) {
            window.__TeSt_VaR__ = cc11001100_hook("window.__TeSt_VaR__", null, "assign");
          }
        } else {
          if (window.execScript) {
            EVAL = cc11001100_hook("EVAL", function (code) {
              BASE.__code = cc11001100_hook("BASE.__code", code, "assign");
              code = cc11001100_hook("code", "try {" + BASENAME + ".__result = eval(" + BASENAME + ".__code)} catch(err) {" + BASENAME + ".__result = err}", "assign");
              window.execScript(code);
              var result = cc11001100_hook("result", BASE.__result, "var-init");
              delete BASE.__result;
              delete BASE.__code;
              if (result instanceof Error) {
                throw result;
              }
              return result;
            }, "assign");
          } else {
            EVAL = cc11001100_hook("EVAL", function (code) {
              BASE.__code = cc11001100_hook("BASE.__code", code, "assign");
              code = cc11001100_hook("code", "try {" + BASENAME + ".__result = eval(" + BASENAME + ".__code)} catch(err) {" + BASENAME + ".__result = err}", "assign");
              var head = cc11001100_hook("head", document.getElementsByTagName("head")[0], "var-init");
              if (!head) {
                head = cc11001100_hook("head", document.body, "assign");
              }
              var script = cc11001100_hook("script", document.createElement("script"), "var-init");
              script.appendChild(document.createTextNode(code));
              head.appendChild(script);
              head.removeChild(script);
              var result = cc11001100_hook("result", BASE.__result, "var-init");
              delete BASE.__result;
              delete BASE.__code;
              if (result instanceof Error) {
                throw result;
              }
              return result;
            }, "assign");
          }
        }
        TESTEVAL = cc11001100_hook("TESTEVAL", null, "assign");
      };
      var USING = function (args, i) {
        if (arguments.length > 1) {
          if (arguments.length === 2 && !(typeof arguments[0] === "function") && arguments[0] instanceof Object && typeof arguments[1] === "number") {
            args = cc11001100_hook("args", [].slice.call(args, i), "assign");
          } else {
            args = cc11001100_hook("args", [].slice.call(arguments, 0), "assign");
          }
        }
        if (isArray(args) && args.length === 1 && typeof args[0] === "function") {
          args = cc11001100_hook("args", args[0], "assign");
        }
        if (typeof args === "function") {
          if (args.execute === CALLBACK.prototype.execute) {
            return args;
          }
          return CALLBACK({
            hook: cc11001100_hook("hook", args, "object-key-init")
          });
        } else {
          if (isArray(args)) {
            if (typeof args[0] === "string" && args[1] instanceof Object && typeof args[1][args[0]] === "function") {
              return CALLBACK({
                hook: cc11001100_hook("hook", args[1][args[0]], "object-key-init"),
                object: cc11001100_hook("object", args[1], "object-key-init"),
                data: cc11001100_hook("data", args.slice(2), "object-key-init")
              });
            } else {
              if (typeof args[0] === "function") {
                return CALLBACK({
                  hook: cc11001100_hook("hook", args[0], "object-key-init"),
                  data: cc11001100_hook("data", args.slice(1), "object-key-init")
                });
              } else {
                if (typeof args[1] === "function") {
                  return CALLBACK({
                    hook: cc11001100_hook("hook", args[1], "object-key-init"),
                    object: cc11001100_hook("object", args[0], "object-key-init"),
                    data: cc11001100_hook("data", args.slice(2), "object-key-init")
                  });
                }
              }
            }
          } else {
            if (typeof args === "string") {
              if (TESTEVAL) {
                TESTEVAL();
              }
              return CALLBACK({
                hook: cc11001100_hook("hook", EVAL, "object-key-init"),
                data: cc11001100_hook("data", [args], "object-key-init")
              });
            } else {
              if (args instanceof Object) {
                return CALLBACK(args);
              } else {
                if (typeof args === "undefined") {
                  return CALLBACK({});
                }
              }
            }
          }
        }
        throw Error("Can't make callback from given data");
      };
      var DELAY = function (time, callback) {
        callback = cc11001100_hook("callback", USING(callback), "assign");
        callback.timeout = cc11001100_hook("callback.timeout", setTimeout(callback, time), "assign");
        return callback;
      };
      var WAITFOR = function (callback, signal) {
        callback = cc11001100_hook("callback", USING(callback), "assign");
        if (!callback.called) {
          WAITSIGNAL(callback, signal);
          signal.pending++;
        }
      };
      var WAITEXECUTE = function () {
        var signals = cc11001100_hook("signals", this.signal, "var-init");
        delete this.signal;
        this.execute = cc11001100_hook("this.execute", this.oldExecute, "assign");
        delete this.oldExecute;
        var result = cc11001100_hook("result", this.execute.apply(this, arguments), "var-init");
        if (ISCALLBACK(result) && !result.called) {
          WAITSIGNAL(result, signals);
        } else {
          for (var i = cc11001100_hook("i", 0, "var-init"), m = cc11001100_hook("m", signals.length, "var-init"); i < m; i++) {
            signals[i].pending--;
            if (signals[i].pending <= 0) {
              signals[i].call();
            }
          }
        }
      };
      var WAITSIGNAL = function (callback, signals) {
        if (!isArray(signals)) {
          signals = cc11001100_hook("signals", [signals], "assign");
        }
        if (!callback.signal) {
          callback.oldExecute = cc11001100_hook("callback.oldExecute", callback.execute, "assign");
          callback.execute = cc11001100_hook("callback.execute", WAITEXECUTE, "assign");
          callback.signal = cc11001100_hook("callback.signal", signals, "assign");
        } else {
          if (signals.length === 1) {
            callback.signal.push(signals[0]);
          } else {
            callback.signal = cc11001100_hook("callback.signal", callback.signal.concat(signals), "assign");
          }
        }
      };
      var AFTER = function (callback) {
        callback = cc11001100_hook("callback", USING(callback), "assign");
        callback.pending = cc11001100_hook("callback.pending", 0, "assign");
        for (var i = cc11001100_hook("i", 1, "var-init"), m = cc11001100_hook("m", arguments.length, "var-init"); i < m; i++) {
          if (arguments[i]) {
            WAITFOR(arguments[i], callback);
          }
        }
        if (callback.pending === 0) {
          var result = cc11001100_hook("result", callback(), "var-init");
          if (ISCALLBACK(result)) {
            callback = cc11001100_hook("callback", result, "assign");
          }
        }
        return callback;
      };
      var HOOKS = cc11001100_hook("HOOKS", MathJax.Object.Subclass({
        Init: function (reset) {
          this.hooks = cc11001100_hook("this.hooks", [], "assign");
          this.remove = cc11001100_hook("this.remove", [], "assign");
          this.reset = cc11001100_hook("this.reset", reset, "assign");
          this.running = cc11001100_hook("this.running", false, "assign");
        },
        Add: function (hook, priority) {
          if (priority == null) {
            priority = cc11001100_hook("priority", 10, "assign");
          }
          if (!ISCALLBACK(hook)) {
            hook = cc11001100_hook("hook", USING(hook), "assign");
          }
          hook.priority = cc11001100_hook("hook.priority", priority, "assign");
          var i = cc11001100_hook("i", this.hooks.length, "var-init");
          while (i > 0 && priority < this.hooks[i - 1].priority) {
            i--;
          }
          this.hooks.splice(i, 0, hook);
          return hook;
        },
        Remove: function (hook) {
          for (var i = cc11001100_hook("i", 0, "var-init"), m = cc11001100_hook("m", this.hooks.length, "var-init"); i < m; i++) {
            if (this.hooks[i] === hook) {
              if (this.running) {
                this.remove.push(i);
              } else {
                this.hooks.splice(i, 1);
              }
              return;
            }
          }
        },
        Execute: function () {
          var callbacks = cc11001100_hook("callbacks", [{}], "var-init");
          this.running = cc11001100_hook("this.running", true, "assign");
          for (var i = cc11001100_hook("i", 0, "var-init"), m = cc11001100_hook("m", this.hooks.length, "var-init"); i < m; i++) {
            if (this.reset) {
              this.hooks[i].reset();
            }
            var result = cc11001100_hook("result", this.hooks[i].apply(window, arguments), "var-init");
            if (ISCALLBACK(result) && !result.called) {
              callbacks.push(result);
            }
          }
          this.running = cc11001100_hook("this.running", false, "assign");
          if (this.remove.length) {
            this.RemovePending();
          }
          if (callbacks.length === 1) {
            return null;
          }
          if (callbacks.length === 2) {
            return callbacks[1];
          }
          return AFTER.apply({}, callbacks);
        },
        RemovePending: function () {
          this.remove = cc11001100_hook("this.remove", this.remove.sort(), "assign");
          for (var i = cc11001100_hook("i", this.remove.length - 1, "var-init"); i >= 0; i--) {
            this.hooks.splice(i, 1);
          }
          this.remove = cc11001100_hook("this.remove", [], "assign");
        }
      }), "var-init");
      var EXECUTEHOOKS = function (hooks, data, reset) {
        if (!hooks) {
          return null;
        }
        if (!isArray(hooks)) {
          hooks = cc11001100_hook("hooks", [hooks], "assign");
        }
        if (!isArray(data)) {
          data = cc11001100_hook("data", data == null ? [] : [data], "assign");
        }
        var handler = cc11001100_hook("handler", HOOKS(reset), "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"), m = cc11001100_hook("m", hooks.length, "var-init"); i < m; i++) {
          handler.Add(hooks[i]);
        }
        return handler.Execute.apply(handler, data);
      };
      var QUEUE = cc11001100_hook("QUEUE", BASE.Object.Subclass({
        Init: function () {
          this.pending = cc11001100_hook("this.pending", this.running = cc11001100_hook("this.running", 0, "assign"), "assign");
          this.queue = cc11001100_hook("this.queue", [], "assign");
          this.Push.apply(this, arguments);
        },
        Push: function () {
          var callback;
          for (var i = cc11001100_hook("i", 0, "var-init"), m = cc11001100_hook("m", arguments.length, "var-init"); i < m; i++) {
            callback = cc11001100_hook("callback", USING(arguments[i]), "assign");
            if (callback === arguments[i] && !callback.called) {
              callback = cc11001100_hook("callback", USING(["wait", this, callback]), "assign");
            }
            this.queue.push(callback);
          }
          if (!this.running && !this.pending) {
            this.Process();
          }
          return callback;
        },
        Process: function (queue) {
          while (!this.running && !this.pending && this.queue.length) {
            var callback = cc11001100_hook("callback", this.queue[0], "var-init");
            queue = cc11001100_hook("queue", this.queue.slice(1), "assign");
            this.queue = cc11001100_hook("this.queue", [], "assign");
            this.Suspend();
            var result = cc11001100_hook("result", callback(), "var-init");
            this.Resume();
            if (queue.length) {
              this.queue = cc11001100_hook("this.queue", queue.concat(this.queue), "assign");
            }
            if (ISCALLBACK(result) && !result.called) {
              WAITFOR(result, this);
            }
          }
        },
        Suspend: function () {
          this.running++;
        },
        Resume: function () {
          if (this.running) {
            this.running--;
          }
        },
        call: function () {
          this.Process.apply(this, arguments);
        },
        wait: function (callback) {
          return callback;
        }
      }), "var-init");
      var SIGNAL = cc11001100_hook("SIGNAL", QUEUE.Subclass({
        Init: function (name) {
          QUEUE.prototype.Init.call(this);
          this.name = cc11001100_hook("this.name", name, "assign");
          this.posted = cc11001100_hook("this.posted", [], "assign");
          this.listeners = cc11001100_hook("this.listeners", HOOKS(true), "assign");
          this.posting = cc11001100_hook("this.posting", false, "assign");
          this.callback = cc11001100_hook("this.callback", null, "assign");
        },
        Post: function (message, callback, forget) {
          callback = cc11001100_hook("callback", USING(callback), "assign");
          if (this.posting || this.pending) {
            this.Push(["Post", this, message, callback, forget]);
          } else {
            this.callback = cc11001100_hook("this.callback", callback, "assign");
            callback.reset();
            if (!forget) {
              this.posted.push(message);
            }
            this.Suspend();
            this.posting = cc11001100_hook("this.posting", true, "assign");
            var result = cc11001100_hook("result", this.listeners.Execute(message), "var-init");
            if (ISCALLBACK(result) && !result.called) {
              WAITFOR(result, this);
            }
            this.Resume();
            this.posting = cc11001100_hook("this.posting", false, "assign");
            if (!this.pending) {
              this.call();
            }
          }
          return callback;
        },
        Clear: function (callback) {
          callback = cc11001100_hook("callback", USING(callback), "assign");
          if (this.posting || this.pending) {
            callback = cc11001100_hook("callback", this.Push(["Clear", this, callback]), "assign");
          } else {
            this.posted = cc11001100_hook("this.posted", [], "assign");
            callback();
          }
          return callback;
        },
        call: function () {
          this.callback(this);
          this.Process();
        },
        Interest: function (callback, ignorePast, priority) {
          callback = cc11001100_hook("callback", USING(callback), "assign");
          this.listeners.Add(callback, priority);
          if (!ignorePast) {
            for (var i = cc11001100_hook("i", 0, "var-init"), m = cc11001100_hook("m", this.posted.length, "var-init"); i < m; i++) {
              callback.reset();
              var result = cc11001100_hook("result", callback(this.posted[i]), "var-init");
              if (ISCALLBACK(result) && i === this.posted.length - 1) {
                WAITFOR(result, this);
              }
            }
          }
          return callback;
        },
        NoInterest: function (callback) {
          this.listeners.Remove(callback);
        },
        MessageHook: function (msg, callback, priority) {
          callback = cc11001100_hook("callback", USING(callback), "assign");
          if (!this.hooks) {
            this.hooks = cc11001100_hook("this.hooks", {}, "assign");
            this.Interest(["ExecuteHooks", this]);
          }
          if (!this.hooks[msg]) {
            this.hooks[msg] = cc11001100_hook("this.hooks[msg]", HOOKS(true), "assign");
          }
          this.hooks[msg].Add(callback, priority);
          for (var i = cc11001100_hook("i", 0, "var-init"), m = cc11001100_hook("m", this.posted.length, "var-init"); i < m; i++) {
            if (this.posted[i] == msg) {
              callback.reset();
              callback(this.posted[i]);
            }
          }
          callback.msg = cc11001100_hook("callback.msg", msg, "assign");
          return callback;
        },
        ExecuteHooks: function (msg) {
          var type = cc11001100_hook("type", isArray(msg) ? msg[0] : msg, "var-init");
          if (!this.hooks[type]) {
            return null;
          }
          return this.hooks[type].Execute(msg);
        },
        RemoveHook: function (hook) {
          this.hooks[hook.msg].Remove(hook);
        }
      }, {
        signals: {},
        find: function (name) {
          if (!SIGNAL.signals[name]) {
            SIGNAL.signals[name] = cc11001100_hook("SIGNAL.signals[name]", new SIGNAL(name), "assign");
          }
          return SIGNAL.signals[name];
        }
      }), "var-init");
      BASE.Callback = cc11001100_hook("BASE.Callback", BASE.CallBack = cc11001100_hook("BASE.CallBack", USING, "assign"), "assign");
      BASE.Callback.Delay = cc11001100_hook("BASE.Callback.Delay", DELAY, "assign");
      BASE.Callback.After = cc11001100_hook("BASE.Callback.After", AFTER, "assign");
      BASE.Callback.Queue = cc11001100_hook("BASE.Callback.Queue", QUEUE, "assign");
      BASE.Callback.Signal = cc11001100_hook("BASE.Callback.Signal", SIGNAL.find, "assign");
      BASE.Callback.Hooks = cc11001100_hook("BASE.Callback.Hooks", HOOKS, "assign");
      BASE.Callback.ExecuteHooks = cc11001100_hook("BASE.Callback.ExecuteHooks", EXECUTEHOOKS, "assign");
    })("MathJax");
    (function (e) {
      var a = cc11001100_hook("a", window[e], "var-init");
      if (!a) {
        a = cc11001100_hook("a", window[e] = cc11001100_hook("window[e]", {}, "assign"), "assign");
      }
      var d = cc11001100_hook("d", navigator.vendor === "Apple Computer, Inc." && typeof navigator.vendorSub === "undefined", "var-init");
      var g = cc11001100_hook("g", 0, "var-init");
      var h = function (i) {
        if (document.styleSheets && document.styleSheets.length > g) {
          g = cc11001100_hook("g", document.styleSheets.length, "assign");
        }
        if (!i) {
          i = cc11001100_hook("i", document.head || document.getElementsByTagName("head")[0], "assign");
          if (!i) {
            i = cc11001100_hook("i", document.body, "assign");
          }
        }
        return i;
      };
      var f = cc11001100_hook("f", [], "var-init");
      var c = function () {
        for (var k = cc11001100_hook("k", 0, "var-init"), j = cc11001100_hook("j", f.length, "var-init"); k < j; k++) {
          a.Ajax.head.removeChild(f[k]);
        }
        f = cc11001100_hook("f", [], "assign");
      };
      var b = cc11001100_hook("b", {}, "var-init");
      b[e] = cc11001100_hook("b[e]", "", "assign");
      b.a11y = cc11001100_hook("b.a11y", "[MathJax]/extensions/a11y", "assign");
      b.Contrib = cc11001100_hook("b.Contrib", "https://cdn.mathjax.org/mathjax/contrib", "assign");
      a.Ajax = cc11001100_hook("a.Ajax", {
        loaded: {},
        loading: {},
        loadHooks: {},
        timeout: cc11001100_hook("timeout", 15 * 1000, "object-key-init"),
        styleDelay: cc11001100_hook("styleDelay", 1, "object-key-init"),
        config: {
          root: cc11001100_hook("root", "", "object-key-init"),
          path: cc11001100_hook("path", b, "object-key-init")
        },
        params: {},
        STATUS: {
          OK: cc11001100_hook("OK", 1, "object-key-init"),
          ERROR: cc11001100_hook("ERROR", -1, "object-key-init")
        },
        fileURL: function (j) {
          var i;
          while ((i = cc11001100_hook("i", j.match(/^\[([-._a-z0-9]+)\]/i), "assign")) && b.hasOwnProperty(i[1])) {
            j = cc11001100_hook("j", (b[i[1]] || this.config.root) + j.substr(i[1].length + 2), "assign");
          }
          return j;
        },
        fileName: function (j) {
          var i = cc11001100_hook("i", this.config.root, "var-init");
          if (j.substr(0, i.length) === i) {
            j = cc11001100_hook("j", "[" + e + "]" + j.substr(i.length), "assign");
          }
          do {
            var k = cc11001100_hook("k", false, "var-init");
            for (var l in b) {
              if (b.hasOwnProperty(l) && b[l]) {
                if (j.substr(0, b[l].length) === b[l]) {
                  j = cc11001100_hook("j", "[" + l + "]" + j.substr(b[l].length), "assign");
                  k = cc11001100_hook("k", true, "assign");
                  break;
                }
              }
            }
          } while (k);
          return j;
        },
        fileRev: function (j) {
          var i = cc11001100_hook("i", a.cdnFileVersions[j] || a.cdnVersion || "", "var-init");
          if (i) {
            i = cc11001100_hook("i", "?V=" + i, "assign");
          }
          return i;
        },
        urlRev: function (i) {
          return this.fileURL(i) + this.fileRev(i);
        },
        Require: function (k, n) {
          n = cc11001100_hook("n", a.Callback(n), "assign");
          var l;
          if (k instanceof Object) {
            for (var j in k) {
              if (k.hasOwnProperty(j)) {
                l = cc11001100_hook("l", j.toUpperCase(), "assign");
                k = cc11001100_hook("k", k[j], "assign");
              }
            }
          } else {
            l = cc11001100_hook("l", k.split(/\./).pop().toUpperCase(), "assign");
          }
          if (this.params.noContrib && k.substr(0, 9) === "[Contrib]") {
            n(this.STATUS.ERROR);
          } else {
            k = cc11001100_hook("k", this.fileURL(k), "assign");
            if (this.loaded[k]) {
              n(this.loaded[k]);
            } else {
              var m = cc11001100_hook("m", {}, "var-init");
              m[l] = cc11001100_hook("m[l]", k, "assign");
              this.Load(m, n);
            }
          }
          return n;
        },
        Load: function (k, m) {
          m = cc11001100_hook("m", a.Callback(m), "assign");
          var l;
          if (k instanceof Object) {
            for (var j in k) {
              if (k.hasOwnProperty(j)) {
                l = cc11001100_hook("l", j.toUpperCase(), "assign");
                k = cc11001100_hook("k", k[j], "assign");
              }
            }
          } else {
            l = cc11001100_hook("l", k.split(/\./).pop().toUpperCase(), "assign");
          }
          k = cc11001100_hook("k", this.fileURL(k), "assign");
          if (this.loading[k]) {
            this.addHook(k, m);
          } else {
            this.head = cc11001100_hook("this.head", h(this.head), "assign");
            if (this.loader[l]) {
              this.loader[l].call(this, k, m);
            } else {
              throw Error("Can't load files of type " + l);
            }
          }
          return m;
        },
        LoadHook: function (l, m, k) {
          m = cc11001100_hook("m", a.Callback(m), "assign");
          if (l instanceof Object) {
            for (var j in l) {
              if (l.hasOwnProperty(j)) {
                l = cc11001100_hook("l", l[j], "assign");
              }
            }
          }
          l = cc11001100_hook("l", this.fileURL(l), "assign");
          if (this.loaded[l]) {
            m(this.loaded[l]);
          } else {
            this.addHook(l, m, k);
          }
          return m;
        },
        addHook: function (j, k, i) {
          if (!this.loadHooks[j]) {
            this.loadHooks[j] = cc11001100_hook("this.loadHooks[j]", MathJax.Callback.Hooks(), "assign");
          }
          this.loadHooks[j].Add(k, i);
          k.file = cc11001100_hook("k.file", j, "assign");
        },
        removeHook: function (i) {
          if (this.loadHooks[i.file]) {
            this.loadHooks[i.file].Remove(i);
            if (!this.loadHooks[i.file].hooks.length) {
              delete this.loadHooks[i.file];
            }
          }
        },
        Preloading: function () {
          for (var l = cc11001100_hook("l", 0, "var-init"), j = cc11001100_hook("j", arguments.length, "var-init"); l < j; l++) {
            var k = cc11001100_hook("k", this.fileURL(arguments[l]), "var-init");
            if (!this.loading[k]) {
              this.loading[k] = cc11001100_hook("this.loading[k]", {
                preloaded: cc11001100_hook("preloaded", true, "object-key-init")
              }, "assign");
            }
          }
        },
        loader: {
          JS: function (k, m) {
            var j = cc11001100_hook("j", this.fileName(k), "var-init");
            var i = cc11001100_hook("i", document.createElement("script"), "var-init");
            var l = cc11001100_hook("l", a.Callback(["loadTimeout", this, k]), "var-init");
            this.loading[k] = cc11001100_hook("this.loading[k]", {
              callback: cc11001100_hook("callback", m, "object-key-init"),
              timeout: cc11001100_hook("timeout", setTimeout(l, this.timeout), "object-key-init"),
              status: cc11001100_hook("status", this.STATUS.OK, "object-key-init"),
              script: cc11001100_hook("script", i, "object-key-init")
            }, "assign");
            this.loading[k].message = cc11001100_hook("this.loading[k].message", a.Message.File(j), "assign");
            i.onerror = cc11001100_hook("i.onerror", l, "assign");
            i.type = cc11001100_hook("i.type", "text/javascript", "assign");
            i.src = cc11001100_hook("i.src", k + this.fileRev(j), "assign");
            this.head.appendChild(i);
          },
          CSS: function (j, l) {
            var i = cc11001100_hook("i", this.fileName(j), "var-init");
            var k = cc11001100_hook("k", document.createElement("link"), "var-init");
            k.rel = cc11001100_hook("k.rel", "stylesheet", "assign");
            k.type = cc11001100_hook("k.type", "text/css", "assign");
            k.href = cc11001100_hook("k.href", j + this.fileRev(i), "assign");
            this.loading[j] = cc11001100_hook("this.loading[j]", {
              callback: cc11001100_hook("callback", l, "object-key-init"),
              message: cc11001100_hook("message", a.Message.File(i), "object-key-init"),
              status: cc11001100_hook("status", this.STATUS.OK, "object-key-init")
            }, "assign");
            this.head.appendChild(k);
            this.timer.create.call(this, [this.timer.file, j], k);
          }
        },
        timer: {
          create: function (j, i) {
            j = cc11001100_hook("j", a.Callback(j), "assign");
            if (i.nodeName === "STYLE" && i.styleSheet && typeof i.styleSheet.cssText !== "undefined") {
              j(this.STATUS.OK);
            } else {
              if (window.chrome && i.nodeName === "LINK") {
                j(this.STATUS.OK);
              } else {
                if (d) {
                  this.timer.start(this, [this.timer.checkSafari2, g++, j], this.styleDelay);
                } else {
                  this.timer.start(this, [this.timer.checkLength, i, j], this.styleDelay);
                }
              }
            }
            return j;
          },
          start: function (j, i, k, l) {
            i = cc11001100_hook("i", a.Callback(i), "assign");
            i.execute = cc11001100_hook("i.execute", this.execute, "assign");
            i.time = cc11001100_hook("i.time", this.time, "assign");
            i.STATUS = cc11001100_hook("i.STATUS", j.STATUS, "assign");
            i.timeout = cc11001100_hook("i.timeout", l || j.timeout, "assign");
            i.delay = cc11001100_hook("i.delay", i.total = cc11001100_hook("i.total", k || 0, "assign"), "assign");
            if (k) {
              setTimeout(i, k);
            } else {
              i();
            }
          },
          time: function (i) {
            this.total += cc11001100_hook("this.total", this.delay, "assign");
            this.delay = cc11001100_hook("this.delay", Math.floor(this.delay * 1.05 + 5), "assign");
            if (this.total >= this.timeout) {
              i(this.STATUS.ERROR);
              return 1;
            }
            return 0;
          },
          file: function (j, i) {
            if (i < 0) {
              a.Ajax.loadTimeout(j);
            } else {
              a.Ajax.loadComplete(j);
            }
          },
          execute: function () {
            this.hook.call(this.object, this, this.data[0], this.data[1]);
          },
          checkSafari2: function (i, j, k) {
            if (i.time(k)) {
              return;
            }
            if (document.styleSheets.length > j && document.styleSheets[j].cssRules && document.styleSheets[j].cssRules.length) {
              k(i.STATUS.OK);
            } else {
              setTimeout(i, i.delay);
            }
          },
          checkLength: function (i, l, n) {
            if (i.time(n)) {
              return;
            }
            var m = cc11001100_hook("m", 0, "var-init");
            var j = cc11001100_hook("j", l.sheet || l.styleSheet, "var-init");
            try {
              if ((j.cssRules || j.rules || []).length > 0) {
                m = cc11001100_hook("m", 1, "assign");
              }
            } catch (k) {
              if (k.message.match(/protected variable|restricted URI/)) {
                m = cc11001100_hook("m", 1, "assign");
              } else {
                if (k.message.match(/Security error/)) {
                  m = cc11001100_hook("m", 1, "assign");
                }
              }
            }
            if (m) {
              setTimeout(a.Callback([n, i.STATUS.OK]), 0);
            } else {
              setTimeout(i, i.delay);
            }
          }
        },
        loadComplete: function (i) {
          i = cc11001100_hook("i", this.fileURL(i), "assign");
          var j = cc11001100_hook("j", this.loading[i], "var-init");
          if (j && !j.preloaded) {
            a.Message.Clear(j.message);
            clearTimeout(j.timeout);
            if (j.script) {
              if (f.length === 0) {
                setTimeout(c, 0);
              }
              f.push(j.script);
            }
            this.loaded[i] = cc11001100_hook("this.loaded[i]", j.status, "assign");
            delete this.loading[i];
            this.addHook(i, j.callback);
          } else {
            if (j) {
              delete this.loading[i];
            }
            this.loaded[i] = cc11001100_hook("this.loaded[i]", this.STATUS.OK, "assign");
            j = cc11001100_hook("j", {
              status: cc11001100_hook("status", this.STATUS.OK, "object-key-init")
            }, "assign");
          }
          if (!this.loadHooks[i]) {
            return null;
          }
          return this.loadHooks[i].Execute(j.status);
        },
        loadTimeout: function (i) {
          if (this.loading[i].timeout) {
            clearTimeout(this.loading[i].timeout);
          }
          this.loading[i].status = cc11001100_hook("this.loading[i].status", this.STATUS.ERROR, "assign");
          this.loadError(i);
          this.loadComplete(i);
        },
        loadError: function (i) {
          a.Message.Set(["LoadFailed", "File failed to load: %1", i], null, 2000);
          a.Hub.signal.Post(["file load error", i]);
        },
        Styles: function (k, l) {
          var i = cc11001100_hook("i", this.StyleString(k), "var-init");
          if (i === "") {
            l = cc11001100_hook("l", a.Callback(l), "assign");
            l();
          } else {
            var j = cc11001100_hook("j", document.createElement("style"), "var-init");
            j.type = cc11001100_hook("j.type", "text/css", "assign");
            this.head = cc11001100_hook("this.head", h(this.head), "assign");
            this.head.appendChild(j);
            if (j.styleSheet && typeof j.styleSheet.cssText !== "undefined") {
              j.styleSheet.cssText = cc11001100_hook("j.styleSheet.cssText", i, "assign");
            } else {
              j.appendChild(document.createTextNode(i));
            }
            l = cc11001100_hook("l", this.timer.create.call(this, l, j), "assign");
          }
          return l;
        },
        StyleString: function (n) {
          if (typeof n === "string") {
            return n;
          }
          var k = cc11001100_hook("k", "", "var-init"),
            o,
            m;
          for (o in n) {
            if (n.hasOwnProperty(o)) {
              if (typeof n[o] === "string") {
                k += cc11001100_hook("k", o + " {" + n[o] + "}\n", "assign");
              } else {
                if (a.Object.isArray(n[o])) {
                  for (var l = cc11001100_hook("l", 0, "var-init"); l < n[o].length; l++) {
                    m = cc11001100_hook("m", {}, "assign");
                    m[o] = cc11001100_hook("m[o]", n[o][l], "assign");
                    k += cc11001100_hook("k", this.StyleString(m), "assign");
                  }
                } else {
                  if (o.substr(0, 6) === "@media") {
                    k += cc11001100_hook("k", o + " {" + this.StyleString(n[o]) + "}\n", "assign");
                  } else {
                    if (n[o] != null) {
                      m = cc11001100_hook("m", [], "assign");
                      for (var j in n[o]) {
                        if (n[o].hasOwnProperty(j)) {
                          if (n[o][j] != null) {
                            m[m.length] = cc11001100_hook("m[m.length]", j + ": " + n[o][j], "assign");
                          }
                        }
                      }
                      k += cc11001100_hook("k", o + " {" + m.join("; ") + "}\n", "assign");
                    }
                  }
                }
              }
            }
          }
          return k;
        }
      }, "assign");
    })("MathJax");
    MathJax.HTML = cc11001100_hook("MathJax.HTML", {
      Element: function (d, f, e) {
        var g = cc11001100_hook("g", document.createElement(d), "var-init"),
          h;
        if (f) {
          if (f.hasOwnProperty("style")) {
            var c = cc11001100_hook("c", f.style, "var-init");
            f.style = cc11001100_hook("f.style", {}, "assign");
            for (h in c) {
              if (c.hasOwnProperty(h)) {
                f.style[h.replace(/-([a-z])/g, this.ucMatch)] = cc11001100_hook("f.style[h.replace(/-([a-z])/g, this.ucMatch)]", c[h], "assign");
              }
            }
          }
          MathJax.Hub.Insert(g, f);
          for (h in f) {
            if (h === "role" || h.substr(0, 5) === "aria-") {
              g.setAttribute(h, f[h]);
            }
          }
        }
        if (e) {
          if (!MathJax.Object.isArray(e)) {
            e = cc11001100_hook("e", [e], "assign");
          }
          for (var b = cc11001100_hook("b", 0, "var-init"), a = cc11001100_hook("a", e.length, "var-init"); b < a; b++) {
            if (MathJax.Object.isArray(e[b])) {
              g.appendChild(this.Element(e[b][0], e[b][1], e[b][2]));
            } else {
              if (d === "script") {
                this.setScript(g, e[b]);
              } else {
                g.appendChild(document.createTextNode(e[b]));
              }
            }
          }
        }
        return g;
      },
      ucMatch: function (a, b) {
        return b.toUpperCase();
      },
      addElement: function (b, a, d, c) {
        return b.appendChild(this.Element(a, d, c));
      },
      TextNode: function (a) {
        return document.createTextNode(a);
      },
      addText: function (a, b) {
        return a.appendChild(this.TextNode(b));
      },
      setScript: function (a, b) {
        if (this.setScriptBug) {
          a.text = cc11001100_hook("a.text", b, "assign");
        } else {
          while (a.firstChild) {
            a.removeChild(a.firstChild);
          }
          this.addText(a, b);
        }
      },
      getScript: function (a) {
        var b = cc11001100_hook("b", a.text === "" ? a.innerHTML : a.text, "var-init");
        return b.replace(/^\s+/, "").replace(/\s+$/, "");
      },
      Cookie: {
        prefix: cc11001100_hook("prefix", "mjx", "object-key-init"),
        expires: cc11001100_hook("expires", 365, "object-key-init"),
        Set: function (a, e) {
          var d = cc11001100_hook("d", [], "var-init");
          if (e) {
            for (var g in e) {
              if (e.hasOwnProperty(g)) {
                d.push(g + ":" + e[g].toString().replace(/&/g, "&&"));
              }
            }
          }
          var b = cc11001100_hook("b", this.prefix + "." + a + "=" + escape(d.join("&;")), "var-init");
          if (this.expires) {
            var f = cc11001100_hook("f", new Date(), "var-init");
            f.setDate(f.getDate() + this.expires);
            b += cc11001100_hook("b", "; expires=" + f.toGMTString(), "assign");
          }
          try {
            document.cookie = cc11001100_hook("document.cookie", b + "; path=/", "assign");
          } catch (c) {}
        },
        Get: function (a, d) {
          if (!d) {
            d = cc11001100_hook("d", {}, "assign");
          }
          var g = cc11001100_hook("g", new RegExp("(?:^|;\\s*)" + this.prefix + "\\." + a + "=([^;]*)(?:;|$)"), "var-init");
          var f;
          try {
            f = cc11001100_hook("f", g.exec(document.cookie), "assign");
          } catch (c) {}
          if (f && f[1] !== "") {
            var j = cc11001100_hook("j", unescape(f[1]).split("&;"), "var-init");
            for (var e = cc11001100_hook("e", 0, "var-init"), b = cc11001100_hook("b", j.length, "var-init"); e < b; e++) {
              f = cc11001100_hook("f", j[e].match(/([^:]+):(.*)/), "assign");
              var h = cc11001100_hook("h", f[2].replace(/&&/g, "&"), "var-init");
              if (h === "true") {
                h = cc11001100_hook("h", true, "assign");
              } else {
                if (h === "false") {
                  h = cc11001100_hook("h", false, "assign");
                } else {
                  if (h.match(/^-?(\d+(\.\d+)?|\.\d+)$/)) {
                    h = cc11001100_hook("h", parseFloat(h), "assign");
                  }
                }
              }
              d[f[1]] = cc11001100_hook("d[f[1]]", h, "assign");
            }
          }
          return d;
        }
      }
    }, "assign");
    MathJax.Localization = cc11001100_hook("MathJax.Localization", {
      locale: cc11001100_hook("locale", "en", "object-key-init"),
      directory: cc11001100_hook("directory", "[MathJax]/localization", "object-key-init"),
      strings: {
        ar: {
          menuTitle: cc11001100_hook("menuTitle", "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", "object-key-init")
        },
        ast: {
          menuTitle: cc11001100_hook("menuTitle", "asturianu", "object-key-init")
        },
        bg: {
          menuTitle: cc11001100_hook("menuTitle", "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438", "object-key-init")
        },
        bcc: {
          menuTitle: cc11001100_hook("menuTitle", "\u0628\u0644\u0648\u0686\u06CC", "object-key-init")
        },
        br: {
          menuTitle: cc11001100_hook("menuTitle", "brezhoneg", "object-key-init")
        },
        ca: {
          menuTitle: cc11001100_hook("menuTitle", "catal\u00E0", "object-key-init")
        },
        cdo: {
          menuTitle: cc11001100_hook("menuTitle", "M\u00ECng-d\u0115\u0324ng-ng\u1E73\u0304", "object-key-init")
        },
        cs: {
          menuTitle: cc11001100_hook("menuTitle", "\u010De\u0161tina", "object-key-init")
        },
        da: {
          menuTitle: cc11001100_hook("menuTitle", "dansk", "object-key-init")
        },
        de: {
          menuTitle: cc11001100_hook("menuTitle", "Deutsch", "object-key-init")
        },
        diq: {
          menuTitle: cc11001100_hook("menuTitle", "Zazaki", "object-key-init")
        },
        en: {
          menuTitle: cc11001100_hook("menuTitle", "English", "object-key-init"),
          isLoaded: cc11001100_hook("isLoaded", true, "object-key-init")
        },
        eo: {
          menuTitle: cc11001100_hook("menuTitle", "Esperanto", "object-key-init")
        },
        es: {
          menuTitle: cc11001100_hook("menuTitle", "espa\u00F1ol", "object-key-init")
        },
        fa: {
          menuTitle: cc11001100_hook("menuTitle", "\u0641\u0627\u0631\u0633\u06CC", "object-key-init")
        },
        fi: {
          menuTitle: cc11001100_hook("menuTitle", "suomi", "object-key-init")
        },
        fr: {
          menuTitle: cc11001100_hook("menuTitle", "fran\u00E7ais", "object-key-init")
        },
        gl: {
          menuTitle: cc11001100_hook("menuTitle", "galego", "object-key-init")
        },
        he: {
          menuTitle: cc11001100_hook("menuTitle", "\u05E2\u05D1\u05E8\u05D9\u05EA", "object-key-init")
        },
        ia: {
          menuTitle: cc11001100_hook("menuTitle", "interlingua", "object-key-init")
        },
        it: {
          menuTitle: cc11001100_hook("menuTitle", "italiano", "object-key-init")
        },
        ja: {
          menuTitle: cc11001100_hook("menuTitle", "\u65E5\u672C\u8A9E", "object-key-init")
        },
        kn: {
          menuTitle: cc11001100_hook("menuTitle", "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1", "object-key-init")
        },
        ko: {
          menuTitle: cc11001100_hook("menuTitle", "\uD55C\uAD6D\uC5B4", "object-key-init")
        },
        lb: {
          menuTitle: cc11001100_hook("menuTitle", "L\u00EBtzebuergesch", "object-key-init")
        },
        lki: {
          menuTitle: cc11001100_hook("menuTitle", "\u0644\u06D5\u06A9\u06CC", "object-key-init")
        },
        lt: {
          menuTitle: cc11001100_hook("menuTitle", "lietuvi\u0173", "object-key-init")
        },
        mk: {
          menuTitle: cc11001100_hook("menuTitle", "\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438", "object-key-init")
        },
        nl: {
          menuTitle: cc11001100_hook("menuTitle", "Nederlands", "object-key-init")
        },
        oc: {
          menuTitle: cc11001100_hook("menuTitle", "occitan", "object-key-init")
        },
        pl: {
          menuTitle: cc11001100_hook("menuTitle", "polski", "object-key-init")
        },
        pt: {
          menuTitle: cc11001100_hook("menuTitle", "portugu\u00EAs", "object-key-init")
        },
        "pt-br": {
          menuTitle: cc11001100_hook("menuTitle", "portugu\u00EAs do Brasil", "object-key-init")
        },
        ru: {
          menuTitle: cc11001100_hook("menuTitle", "\u0440\u0443\u0441\u0441\u043A\u0438\u0439", "object-key-init")
        },
        sco: {
          menuTitle: cc11001100_hook("menuTitle", "Scots", "object-key-init")
        },
        scn: {
          menuTitle: cc11001100_hook("menuTitle", "sicilianu", "object-key-init")
        },
        sk: {
          menuTitle: cc11001100_hook("menuTitle", "sloven\u010Dina", "object-key-init")
        },
        sl: {
          menuTitle: cc11001100_hook("menuTitle", "sloven\u0161\u010Dina", "object-key-init")
        },
        sv: {
          menuTitle: cc11001100_hook("menuTitle", "svenska", "object-key-init")
        },
        th: {
          menuTitle: cc11001100_hook("menuTitle", "\u0E44\u0E17\u0E22", "object-key-init")
        },
        tr: {
          menuTitle: cc11001100_hook("menuTitle", "T\u00FCrk\u00E7e", "object-key-init")
        },
        uk: {
          menuTitle: cc11001100_hook("menuTitle", "\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", "object-key-init")
        },
        vi: {
          menuTitle: cc11001100_hook("menuTitle", "Ti\u1EBFng Vi\u1EC7t", "object-key-init")
        },
        "zh-hans": {
          menuTitle: cc11001100_hook("menuTitle", "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09", "object-key-init")
        },
        "zh-hant": {
          menuTitle: cc11001100_hook("menuTitle", "\u6C49\u8BED", "object-key-init")
        }
      },
      pattern: cc11001100_hook("pattern", /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g, "object-key-init"),
      SPLIT: cc11001100_hook("SPLIT", "axb".split(/(x)/).length === 3 ? function (a, b) {
        return a.split(b);
      } : function (c, e) {
        var a = cc11001100_hook("a", [], "var-init"),
          b,
          d = cc11001100_hook("d", 0, "var-init");
        e.lastIndex = cc11001100_hook("e.lastIndex", 0, "assign");
        while (b = cc11001100_hook("b", e.exec(c), "assign")) {
          a.push(c.substr(d, b.index - d));
          a.push.apply(a, b.slice(1));
          d = cc11001100_hook("d", b.index + b[0].length, "assign");
        }
        a.push(c.substr(d));
        return a;
      }, "object-key-init"),
      _: function (b, a) {
        if (MathJax.Object.isArray(a)) {
          return this.processSnippet(b, a);
        }
        return this.processString(this.lookupPhrase(b, a), [].slice.call(arguments, 2));
      },
      processString: function (l, p, g) {
        var j,
          e,
          o = cc11001100_hook("o", MathJax.Object.isArray, "var-init");
        for (j = cc11001100_hook("j", 0, "assign"), e = cc11001100_hook("e", p.length, "assign"); j < e; j++) {
          if (g && o(p[j])) {
            p[j] = cc11001100_hook("p[j]", this.processSnippet(g, p[j]), "assign");
          }
        }
        var f = cc11001100_hook("f", this.SPLIT(l, this.pattern), "var-init");
        for (j = cc11001100_hook("j", 1, "assign"), e = cc11001100_hook("e", f.length, "assign"); j < e; j += cc11001100_hook("j", 2, "assign")) {
          var q = cc11001100_hook("q", f[j].charAt(0), "var-init");
          if (q >= "0" && q <= "9") {
            f[j] = cc11001100_hook("f[j]", p[f[j] - 1], "assign");
            if (typeof f[j] === "number") {
              f[j] = cc11001100_hook("f[j]", this.number(f[j]), "assign");
            }
          } else {
            if (q === "{") {
              q = cc11001100_hook("q", f[j].substr(1), "assign");
              if (q >= "0" && q <= "9") {
                f[j] = cc11001100_hook("f[j]", p[f[j].substr(1, f[j].length - 2) - 1], "assign");
                if (typeof f[j] === "number") {
                  f[j] = cc11001100_hook("f[j]", this.number(f[j]), "assign");
                }
              } else {
                var k = cc11001100_hook("k", f[j].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/), "var-init");
                if (k) {
                  if (k[1] === "plural") {
                    var d = cc11001100_hook("d", p[k[2] - 1], "var-init");
                    if (typeof d === "undefined") {
                      f[j] = cc11001100_hook("f[j]", "???", "assign");
                    } else {
                      d = cc11001100_hook("d", this.plural(d) - 1, "assign");
                      var h = cc11001100_hook("h", k[3].replace(/(^|[^%])(%%)*%\|/g, "$1$2%\uEFEF").split(/\|/), "var-init");
                      if (d >= 0 && d < h.length) {
                        f[j] = cc11001100_hook("f[j]", this.processString(h[d].replace(/\uEFEF/g, "|"), p, g), "assign");
                      } else {
                        f[j] = cc11001100_hook("f[j]", "???", "assign");
                      }
                    }
                  } else {
                    f[j] = cc11001100_hook("f[j]", "%" + f[j], "assign");
                  }
                }
              }
            }
          }
          if (f[j] == null) {
            f[j] = cc11001100_hook("f[j]", "???", "assign");
          }
        }
        if (!g) {
          return f.join("");
        }
        var a = cc11001100_hook("a", [], "var-init"),
          b = cc11001100_hook("b", "", "var-init");
        for (j = cc11001100_hook("j", 0, "assign"); j < e; j++) {
          b += cc11001100_hook("b", f[j], "assign");
          j++;
          if (j < e) {
            if (o(f[j])) {
              a.push(b);
              a = cc11001100_hook("a", a.concat(f[j]), "assign");
              b = cc11001100_hook("b", "", "assign");
            } else {
              b += cc11001100_hook("b", f[j], "assign");
            }
          }
        }
        if (b !== "") {
          a.push(b);
        }
        return a;
      },
      processSnippet: function (g, e) {
        var c = cc11001100_hook("c", [], "var-init");
        for (var d = cc11001100_hook("d", 0, "var-init"), b = cc11001100_hook("b", e.length, "var-init"); d < b; d++) {
          if (MathJax.Object.isArray(e[d])) {
            var f = cc11001100_hook("f", e[d], "var-init");
            if (typeof f[1] === "string") {
              var h = cc11001100_hook("h", f[0], "var-init");
              if (!MathJax.Object.isArray(h)) {
                h = cc11001100_hook("h", [g, h], "assign");
              }
              var a = cc11001100_hook("a", this.lookupPhrase(h, f[1]), "var-init");
              c = cc11001100_hook("c", c.concat(this.processMarkdown(a, f.slice(2), g)), "assign");
            } else {
              if (MathJax.Object.isArray(f[1])) {
                c = cc11001100_hook("c", c.concat(this.processSnippet.apply(this, f)), "assign");
              } else {
                if (f.length >= 3) {
                  c.push([f[0], f[1], this.processSnippet(g, f[2])]);
                } else {
                  c.push(e[d]);
                }
              }
            }
          } else {
            c.push(e[d]);
          }
        }
        return c;
      },
      markdownPattern: cc11001100_hook("markdownPattern", /(%.)|(\*{1,3})((?:%.|.)+?)\2|(`+)((?:%.|.)+?)\4|\[((?:%.|.)+?)\]\(([^\s\)]+)\)/, "object-key-init"),
      processMarkdown: function (b, h, d) {
        var j = cc11001100_hook("j", [], "var-init"),
          e;
        var c = cc11001100_hook("c", b.split(this.markdownPattern), "var-init");
        var g = cc11001100_hook("g", c[0], "var-init");
        for (var f = cc11001100_hook("f", 1, "var-init"), a = cc11001100_hook("a", c.length, "var-init"); f < a; f += cc11001100_hook("f", 8, "assign")) {
          if (c[f + 1]) {
            e = cc11001100_hook("e", this.processString(c[f + 2], h, d), "assign");
            if (!MathJax.Object.isArray(e)) {
              e = cc11001100_hook("e", [e], "assign");
            }
            e = cc11001100_hook("e", [["b", "i", "i"][c[f + 1].length - 1], {}, e], "assign");
            if (c[f + 1].length === 3) {
              e = cc11001100_hook("e", ["b", {}, e], "assign");
            }
          } else {
            if (c[f + 3]) {
              e = cc11001100_hook("e", this.processString(c[f + 4].replace(/^\s/, "").replace(/\s$/, ""), h, d), "assign");
              if (!MathJax.Object.isArray(e)) {
                e = cc11001100_hook("e", [e], "assign");
              }
              e = cc11001100_hook("e", ["code", {}, e], "assign");
            } else {
              if (c[f + 5]) {
                e = cc11001100_hook("e", this.processString(c[f + 5], h, d), "assign");
                if (!MathJax.Object.isArray(e)) {
                  e = cc11001100_hook("e", [e], "assign");
                }
                e = cc11001100_hook("e", ["a", {
                  href: cc11001100_hook("href", this.processString(c[f + 6], h), "object-key-init"),
                  target: cc11001100_hook("target", "_blank", "object-key-init")
                }, e], "assign");
              } else {
                g += cc11001100_hook("g", c[f], "assign");
                e = cc11001100_hook("e", null, "assign");
              }
            }
          }
          if (e) {
            j = cc11001100_hook("j", this.concatString(j, g, h, d), "assign");
            j.push(e);
            g = cc11001100_hook("g", "", "assign");
          }
          if (c[f + 7] !== "") {
            g += cc11001100_hook("g", c[f + 7], "assign");
          }
        }
        j = cc11001100_hook("j", this.concatString(j, g, h, d), "assign");
        return j;
      },
      concatString: function (a, c, b, d) {
        if (c != "") {
          c = cc11001100_hook("c", this.processString(c, b, d), "assign");
          if (!MathJax.Object.isArray(c)) {
            c = cc11001100_hook("c", [c], "assign");
          }
          a = cc11001100_hook("a", a.concat(c), "assign");
        }
        return a;
      },
      lookupPhrase: function (f, a, d) {
        if (!d) {
          d = cc11001100_hook("d", "_", "assign");
        }
        if (MathJax.Object.isArray(f)) {
          d = cc11001100_hook("d", f[0] || "_", "assign");
          f = cc11001100_hook("f", f[1] || "", "assign");
        }
        var c = cc11001100_hook("c", this.loadDomain(d), "var-init");
        if (c) {
          MathJax.Hub.RestartAfter(c);
        }
        var b = cc11001100_hook("b", this.strings[this.locale], "var-init");
        if (b) {
          if (b.domains && d in b.domains) {
            var e = cc11001100_hook("e", b.domains[d], "var-init");
            if (e.strings && f in e.strings) {
              a = cc11001100_hook("a", e.strings[f], "assign");
            }
          }
        }
        return a;
      },
      loadFile: function (b, d, e) {
        e = cc11001100_hook("e", MathJax.Callback(e), "assign");
        b = cc11001100_hook("b", d.file || b, "assign");
        if (!b.match(/\.js$/)) {
          b += cc11001100_hook("b", ".js", "assign");
        }
        if (!b.match(/^([a-z]+:|\[MathJax\])/)) {
          var a = cc11001100_hook("a", this.strings[this.locale].directory || this.directory + "/" + this.locale || "[MathJax]/localization/" + this.locale, "var-init");
          b = cc11001100_hook("b", a + "/" + b, "assign");
        }
        var c = cc11001100_hook("c", MathJax.Ajax.Require(b, function () {
          d.isLoaded = cc11001100_hook("d.isLoaded", true, "assign");
          return e();
        }), "var-init");
        return c.called ? null : c;
      },
      loadDomain: function (c, e) {
        var b,
          a = cc11001100_hook("a", this.strings[this.locale], "var-init");
        if (a) {
          if (!a.isLoaded) {
            b = cc11001100_hook("b", this.loadFile(this.locale, a), "assign");
            if (b) {
              return MathJax.Callback.Queue(b, ["loadDomain", this, c]).Push(e || {});
            }
          }
          if (a.domains && c in a.domains) {
            var d = cc11001100_hook("d", a.domains[c], "var-init");
            if (!d.isLoaded) {
              b = cc11001100_hook("b", this.loadFile(c, d), "assign");
              if (b) {
                return MathJax.Callback.Queue(b).Push(e);
              }
            }
          }
        }
        return MathJax.Callback(e)();
      },
      Try: function (a) {
        a = cc11001100_hook("a", MathJax.Callback(a), "assign");
        a.autoReset = cc11001100_hook("a.autoReset", true, "assign");
        try {
          a();
        } catch (b) {
          if (!b.restart) {
            throw b;
          }
          MathJax.Callback.After(["Try", this, a], b.restart);
        }
      },
      resetLocale: function (a) {
        if (!a) {
          return;
        }
        a = cc11001100_hook("a", a.toLowerCase(), "assign");
        while (!this.strings[a]) {
          var c = cc11001100_hook("c", a.lastIndexOf("-"), "var-init");
          if (c === -1) {
            return;
          }
          a = cc11001100_hook("a", a.substring(0, c), "assign");
        }
        var b = cc11001100_hook("b", this.strings[a].remap, "var-init");
        this.locale = cc11001100_hook("this.locale", b ? b : a, "assign");
      },
      setLocale: function (a) {
        this.resetLocale(a);
        if (MathJax.Menu) {
          this.loadDomain("MathMenu");
        }
      },
      addTranslation: function (b, e, c) {
        var d = cc11001100_hook("d", this.strings[b], "var-init"),
          a = cc11001100_hook("a", false, "var-init");
        if (!d) {
          d = cc11001100_hook("d", this.strings[b] = cc11001100_hook("this.strings[b]", {}, "assign"), "assign");
          a = cc11001100_hook("a", true, "assign");
        }
        if (!d.domains) {
          d.domains = cc11001100_hook("d.domains", {}, "assign");
        }
        if (e) {
          if (!d.domains[e]) {
            d.domains[e] = cc11001100_hook("d.domains[e]", {}, "assign");
          }
          d = cc11001100_hook("d", d.domains[e], "assign");
        }
        MathJax.Hub.Insert(d, c);
        if (a && MathJax.Menu.menu) {
          MathJax.Menu.CreateLocaleMenu();
        }
      },
      setCSS: function (b) {
        var a = cc11001100_hook("a", this.strings[this.locale], "var-init");
        if (a) {
          if (a.fontFamily) {
            b.style.fontFamily = cc11001100_hook("b.style.fontFamily", a.fontFamily, "assign");
          }
          if (a.fontDirection) {
            b.style.direction = cc11001100_hook("b.style.direction", a.fontDirection, "assign");
            if (a.fontDirection === "rtl") {
              b.style.textAlign = cc11001100_hook("b.style.textAlign", "right", "assign");
            }
          }
        }
        return b;
      },
      fontFamily: function () {
        var a = cc11001100_hook("a", this.strings[this.locale], "var-init");
        return a ? a.fontFamily : null;
      },
      fontDirection: function () {
        var a = cc11001100_hook("a", this.strings[this.locale], "var-init");
        return a ? a.fontDirection : null;
      },
      plural: function (b) {
        var a = cc11001100_hook("a", this.strings[this.locale], "var-init");
        if (a && a.plural) {
          return a.plural(b);
        }
        if (b == 1) {
          return 1;
        }
        return 2;
      },
      number: function (b) {
        var a = cc11001100_hook("a", this.strings[this.locale], "var-init");
        if (a && a.number) {
          return a.number(b);
        }
        return b;
      }
    }, "assign");
    MathJax.Message = cc11001100_hook("MathJax.Message", {
      ready: cc11001100_hook("ready", false, "object-key-init"),
      log: cc11001100_hook("log", [{}], "object-key-init"),
      current: cc11001100_hook("current", null, "object-key-init"),
      textNodeBug: cc11001100_hook("textNodeBug", navigator.vendor === "Apple Computer, Inc." && typeof navigator.vendorSub === "undefined" || window.hasOwnProperty && window.hasOwnProperty("konqueror"), "object-key-init"),
      styles: {
        "#MathJax_Message": {
          position: cc11001100_hook("position", "fixed", "object-key-init"),
          left: cc11001100_hook("left", "1px", "object-key-init"),
          bottom: cc11001100_hook("bottom", "2px", "object-key-init"),
          "background-color": cc11001100_hook("background-color", "#E6E6E6", "object-key-init"),
          border: cc11001100_hook("border", "1px solid #959595", "object-key-init"),
          margin: cc11001100_hook("margin", "0px", "object-key-init"),
          padding: cc11001100_hook("padding", "2px 8px", "object-key-init"),
          "z-index": cc11001100_hook("z-index", "102", "object-key-init"),
          color: cc11001100_hook("color", "black", "object-key-init"),
          "font-size": cc11001100_hook("font-size", "80%", "object-key-init"),
          width: cc11001100_hook("width", "auto", "object-key-init"),
          "white-space": cc11001100_hook("white-space", "nowrap", "object-key-init")
        },
        "#MathJax_MSIE_Frame": {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          width: cc11001100_hook("width", "0px", "object-key-init"),
          "z-index": cc11001100_hook("z-index", 101, "object-key-init"),
          border: cc11001100_hook("border", "0px", "object-key-init"),
          margin: cc11001100_hook("margin", "0px", "object-key-init"),
          padding: cc11001100_hook("padding", "0px", "object-key-init")
        }
      },
      browsers: {
        MSIE: function (a) {
          MathJax.Message.msieFixedPositionBug = cc11001100_hook("MathJax.Message.msieFixedPositionBug", (document.documentMode || 0) < 7, "assign");
          if (MathJax.Message.msieFixedPositionBug) {
            MathJax.Hub.config.styles["#MathJax_Message"].position = cc11001100_hook("MathJax.Hub.config.styles[\"#MathJax_Message\"].position", "absolute", "assign");
          }
          MathJax.Message.quirks = cc11001100_hook("MathJax.Message.quirks", document.compatMode === "BackCompat", "assign");
        },
        Chrome: function (a) {
          MathJax.Hub.config.styles["#MathJax_Message"].bottom = cc11001100_hook("MathJax.Hub.config.styles[\"#MathJax_Message\"].bottom", "1.5em", "assign");
          MathJax.Hub.config.styles["#MathJax_Message"].left = cc11001100_hook("MathJax.Hub.config.styles[\"#MathJax_Message\"].left", "1em", "assign");
        }
      },
      Init: function (a) {
        if (a) {
          this.ready = cc11001100_hook("this.ready", true, "assign");
        }
        if (!document.body || !this.ready) {
          return false;
        }
        if (this.div && this.div.parentNode == null) {
          this.div = cc11001100_hook("this.div", document.getElementById("MathJax_Message"), "assign");
          if (this.div) {
            this.text = cc11001100_hook("this.text", this.div.firstChild, "assign");
          }
        }
        if (!this.div) {
          var b = cc11001100_hook("b", document.body, "var-init");
          if (this.msieFixedPositionBug && window.attachEvent) {
            b = cc11001100_hook("b", this.frame = cc11001100_hook("this.frame", this.addDiv(document.body), "assign"), "assign");
            b.removeAttribute("id");
            b.style.position = cc11001100_hook("b.style.position", "absolute", "assign");
            b.style.border = cc11001100_hook("b.style.border", b.style.margin = cc11001100_hook("b.style.margin", b.style.padding = cc11001100_hook("b.style.padding", "0px", "assign"), "assign"), "assign");
            b.style.zIndex = cc11001100_hook("b.style.zIndex", "101", "assign");
            b.style.height = cc11001100_hook("b.style.height", "0px", "assign");
            b = cc11001100_hook("b", this.addDiv(b), "assign");
            b.id = cc11001100_hook("b.id", "MathJax_MSIE_Frame", "assign");
            window.attachEvent("onscroll", this.MoveFrame);
            window.attachEvent("onresize", this.MoveFrame);
            this.MoveFrame();
          }
          this.div = cc11001100_hook("this.div", this.addDiv(b), "assign");
          this.div.style.display = cc11001100_hook("this.div.style.display", "none", "assign");
          this.text = cc11001100_hook("this.text", this.div.appendChild(document.createTextNode("")), "assign");
        }
        return true;
      },
      addDiv: function (a) {
        var b = cc11001100_hook("b", document.createElement("div"), "var-init");
        b.id = cc11001100_hook("b.id", "MathJax_Message", "assign");
        if (a.firstChild) {
          a.insertBefore(b, a.firstChild);
        } else {
          a.appendChild(b);
        }
        return b;
      },
      MoveFrame: function () {
        var a = cc11001100_hook("a", MathJax.Message.quirks ? document.body : document.documentElement, "var-init");
        var b = cc11001100_hook("b", MathJax.Message.frame, "var-init");
        b.style.left = cc11001100_hook("b.style.left", a.scrollLeft + "px", "assign");
        b.style.top = cc11001100_hook("b.style.top", a.scrollTop + "px", "assign");
        b.style.width = cc11001100_hook("b.style.width", a.clientWidth + "px", "assign");
        b = cc11001100_hook("b", b.firstChild, "assign");
        b.style.height = cc11001100_hook("b.style.height", a.clientHeight + "px", "assign");
      },
      localize: function (a) {
        return MathJax.Localization._(a, a);
      },
      filterText: function (a, c, b) {
        if (MathJax.Hub.config.messageStyle === "simple") {
          if (b === "LoadFile") {
            if (!this.loading) {
              this.loading = cc11001100_hook("this.loading", this.localize("Loading") + " ", "assign");
            }
            a = cc11001100_hook("a", this.loading, "assign");
            this.loading += cc11001100_hook("this.loading", ".", "assign");
          } else {
            if (b === "ProcessMath") {
              if (!this.processing) {
                this.processing = cc11001100_hook("this.processing", this.localize("Processing") + " ", "assign");
              }
              a = cc11001100_hook("a", this.processing, "assign");
              this.processing += cc11001100_hook("this.processing", ".", "assign");
            } else {
              if (b === "TypesetMath") {
                if (!this.typesetting) {
                  this.typesetting = cc11001100_hook("this.typesetting", this.localize("Typesetting") + " ", "assign");
                }
                a = cc11001100_hook("a", this.typesetting, "assign");
                this.typesetting += cc11001100_hook("this.typesetting", ".", "assign");
              }
            }
          }
        }
        return a;
      },
      clearCounts: function () {
        delete this.loading;
        delete this.processing;
        delete this.typesetting;
      },
      Set: function (c, e, b) {
        if (e == null) {
          e = cc11001100_hook("e", this.log.length, "assign");
          this.log[e] = cc11001100_hook("this.log[e]", {}, "assign");
        }
        var d = cc11001100_hook("d", "", "var-init");
        if (MathJax.Object.isArray(c)) {
          d = cc11001100_hook("d", c[0], "assign");
          if (MathJax.Object.isArray(d)) {
            d = cc11001100_hook("d", d[1], "assign");
          }
          try {
            c = cc11001100_hook("c", MathJax.Localization._.apply(MathJax.Localization, c), "assign");
          } catch (a) {
            if (!a.restart) {
              throw a;
            }
            if (!a.restart.called) {
              if (this.log[e].restarted == null) {
                this.log[e].restarted = cc11001100_hook("this.log[e].restarted", 0, "assign");
              }
              this.log[e].restarted++;
              delete this.log[e].cleared;
              MathJax.Callback.After(["Set", this, c, e, b], a.restart);
              return e;
            }
          }
        }
        if (this.timer) {
          clearTimeout(this.timer);
          delete this.timer;
        }
        this.log[e].text = cc11001100_hook("this.log[e].text", c, "assign");
        this.log[e].filteredText = cc11001100_hook("this.log[e].filteredText", c = cc11001100_hook("c", this.filterText(c, e, d), "assign"), "assign");
        if (typeof this.log[e].next === "undefined") {
          this.log[e].next = cc11001100_hook("this.log[e].next", this.current, "assign");
          if (this.current != null) {
            this.log[this.current].prev = cc11001100_hook("this.log[this.current].prev", e, "assign");
          }
          this.current = cc11001100_hook("this.current", e, "assign");
        }
        if (this.current === e && MathJax.Hub.config.messageStyle !== "none") {
          if (this.Init()) {
            if (this.textNodeBug) {
              this.div.innerHTML = cc11001100_hook("this.div.innerHTML", c, "assign");
            } else {
              this.text.nodeValue = cc11001100_hook("this.text.nodeValue", c, "assign");
            }
            this.div.style.display = cc11001100_hook("this.div.style.display", "", "assign");
            if (this.status) {
              window.status = cc11001100_hook("window.status", "", "assign");
              delete this.status;
            }
          } else {
            window.status = cc11001100_hook("window.status", c, "assign");
            this.status = cc11001100_hook("this.status", true, "assign");
          }
        }
        if (this.log[e].restarted) {
          if (this.log[e].cleared) {
            b = cc11001100_hook("b", 0, "assign");
          }
          if (--this.log[e].restarted === 0) {
            delete this.log[e].cleared;
          }
        }
        if (b) {
          setTimeout(MathJax.Callback(["Clear", this, e]), b);
        } else {
          if (b == 0) {
            this.Clear(e, 0);
          }
        }
        return e;
      },
      Clear: function (b, a) {
        if (this.log[b].prev != null) {
          this.log[this.log[b].prev].next = cc11001100_hook("this.log[this.log[b].prev].next", this.log[b].next, "assign");
        }
        if (this.log[b].next != null) {
          this.log[this.log[b].next].prev = cc11001100_hook("this.log[this.log[b].next].prev", this.log[b].prev, "assign");
        }
        if (this.current === b) {
          this.current = cc11001100_hook("this.current", this.log[b].next, "assign");
          if (this.text) {
            if (this.div.parentNode == null) {
              this.Init();
            }
            if (this.current == null) {
              if (this.timer) {
                clearTimeout(this.timer);
                delete this.timer;
              }
              if (a == null) {
                a = cc11001100_hook("a", 600, "assign");
              }
              if (a === 0) {
                this.Remove();
              } else {
                this.timer = cc11001100_hook("this.timer", setTimeout(MathJax.Callback(["Remove", this]), a), "assign");
              }
            } else {
              if (MathJax.Hub.config.messageStyle !== "none") {
                if (this.textNodeBug) {
                  this.div.innerHTML = cc11001100_hook("this.div.innerHTML", this.log[this.current].filteredText, "assign");
                } else {
                  this.text.nodeValue = cc11001100_hook("this.text.nodeValue", this.log[this.current].filteredText, "assign");
                }
              }
            }
            if (this.status) {
              window.status = cc11001100_hook("window.status", "", "assign");
              delete this.status;
            }
          } else {
            if (this.status) {
              window.status = cc11001100_hook("window.status", this.current == null ? "" : this.log[this.current].text, "assign");
            }
          }
        }
        delete this.log[b].next;
        delete this.log[b].prev;
        delete this.log[b].filteredText;
        if (this.log[b].restarted) {
          this.log[b].cleared = cc11001100_hook("this.log[b].cleared", true, "assign");
        }
      },
      Remove: function () {
        this.text.nodeValue = cc11001100_hook("this.text.nodeValue", "", "assign");
        this.div.style.display = cc11001100_hook("this.div.style.display", "none", "assign");
      },
      File: function (a) {
        return this.Set(["LoadFile", "Loading %1", a], null, null);
      },
      Log: function () {
        var b = cc11001100_hook("b", [], "var-init");
        for (var c = cc11001100_hook("c", 1, "var-init"), a = cc11001100_hook("a", this.log.length, "var-init"); c < a; c++) {
          b[c] = cc11001100_hook("b[c]", this.log[c].text, "assign");
        }
        return b.join("\n");
      }
    }, "assign");
    MathJax.Hub = cc11001100_hook("MathJax.Hub", {
      config: {
        root: cc11001100_hook("root", "", "object-key-init"),
        config: cc11001100_hook("config", [], "object-key-init"),
        styleSheets: cc11001100_hook("styleSheets", [], "object-key-init"),
        styles: {
          ".MathJax_Preview": {
            color: cc11001100_hook("color", "#888", "object-key-init")
          }
        },
        jax: cc11001100_hook("jax", [], "object-key-init"),
        extensions: cc11001100_hook("extensions", [], "object-key-init"),
        preJax: cc11001100_hook("preJax", null, "object-key-init"),
        postJax: cc11001100_hook("postJax", null, "object-key-init"),
        displayAlign: cc11001100_hook("displayAlign", "center", "object-key-init"),
        displayIndent: cc11001100_hook("displayIndent", "0", "object-key-init"),
        preRemoveClass: cc11001100_hook("preRemoveClass", "MathJax_Preview", "object-key-init"),
        showProcessingMessages: cc11001100_hook("showProcessingMessages", true, "object-key-init"),
        messageStyle: cc11001100_hook("messageStyle", "normal", "object-key-init"),
        delayStartupUntil: cc11001100_hook("delayStartupUntil", "none", "object-key-init"),
        skipStartupTypeset: cc11001100_hook("skipStartupTypeset", false, "object-key-init"),
        elements: cc11001100_hook("elements", [], "object-key-init"),
        positionToHash: cc11001100_hook("positionToHash", true, "object-key-init"),
        showMathMenu: cc11001100_hook("showMathMenu", true, "object-key-init"),
        showMathMenuMSIE: cc11001100_hook("showMathMenuMSIE", true, "object-key-init"),
        menuSettings: {
          zoom: cc11001100_hook("zoom", "None", "object-key-init"),
          CTRL: cc11001100_hook("CTRL", false, "object-key-init"),
          ALT: cc11001100_hook("ALT", false, "object-key-init"),
          CMD: cc11001100_hook("CMD", false, "object-key-init"),
          Shift: cc11001100_hook("Shift", false, "object-key-init"),
          discoverable: cc11001100_hook("discoverable", false, "object-key-init"),
          zscale: cc11001100_hook("zscale", "200%", "object-key-init"),
          renderer: cc11001100_hook("renderer", null, "object-key-init"),
          font: cc11001100_hook("font", "Auto", "object-key-init"),
          context: cc11001100_hook("context", "MathJax", "object-key-init"),
          locale: cc11001100_hook("locale", null, "object-key-init"),
          mpContext: cc11001100_hook("mpContext", false, "object-key-init"),
          mpMouse: cc11001100_hook("mpMouse", false, "object-key-init"),
          texHints: cc11001100_hook("texHints", true, "object-key-init"),
          FastPreview: cc11001100_hook("FastPreview", null, "object-key-init"),
          assistiveMML: cc11001100_hook("assistiveMML", null, "object-key-init"),
          inTabOrder: cc11001100_hook("inTabOrder", true, "object-key-init"),
          semantics: cc11001100_hook("semantics", false, "object-key-init")
        },
        errorSettings: {
          message: cc11001100_hook("message", ["[", ["MathProcessingError", "Math Processing Error"], "]"], "object-key-init"),
          style: {
            color: cc11001100_hook("color", "#CC0000", "object-key-init"),
            "font-style": cc11001100_hook("font-style", "italic", "object-key-init")
          }
        },
        ignoreMMLattributes: {}
      },
      preProcessors: cc11001100_hook("preProcessors", MathJax.Callback.Hooks(true), "object-key-init"),
      inputJax: {},
      outputJax: {
        order: {}
      },
      processSectionDelay: cc11001100_hook("processSectionDelay", 50, "object-key-init"),
      processUpdateTime: cc11001100_hook("processUpdateTime", 250, "object-key-init"),
      processUpdateDelay: cc11001100_hook("processUpdateDelay", 10, "object-key-init"),
      signal: cc11001100_hook("signal", MathJax.Callback.Signal("Hub"), "object-key-init"),
      Config: function (a) {
        this.Insert(this.config, a);
        if (this.config.Augment) {
          this.Augment(this.config.Augment);
        }
      },
      CombineConfig: function (c, f) {
        var b = cc11001100_hook("b", this.config, "var-init"),
          g,
          e;
        c = cc11001100_hook("c", c.split(/\./), "assign");
        for (var d = cc11001100_hook("d", 0, "var-init"), a = cc11001100_hook("a", c.length, "var-init"); d < a; d++) {
          g = cc11001100_hook("g", c[d], "assign");
          if (!b[g]) {
            b[g] = cc11001100_hook("b[g]", {}, "assign");
          }
          e = cc11001100_hook("e", b, "assign");
          b = cc11001100_hook("b", b[g], "assign");
        }
        e[g] = cc11001100_hook("e[g]", b = cc11001100_hook("b", this.Insert(f, b), "assign"), "assign");
        return b;
      },
      Register: {
        PreProcessor: function () {
          return MathJax.Hub.preProcessors.Add.apply(MathJax.Hub.preProcessors, arguments);
        },
        MessageHook: function () {
          return MathJax.Hub.signal.MessageHook.apply(MathJax.Hub.signal, arguments);
        },
        StartupHook: function () {
          return MathJax.Hub.Startup.signal.MessageHook.apply(MathJax.Hub.Startup.signal, arguments);
        },
        LoadHook: function () {
          return MathJax.Ajax.LoadHook.apply(MathJax.Ajax, arguments);
        }
      },
      UnRegister: {
        PreProcessor: function (a) {
          MathJax.Hub.preProcessors.Remove(a);
        },
        MessageHook: function (a) {
          MathJax.Hub.signal.RemoveHook(a);
        },
        StartupHook: function (a) {
          MathJax.Hub.Startup.signal.RemoveHook(a);
        },
        LoadHook: function (a) {
          MathJax.Ajax.removeHook(a);
        }
      },
      getAllJax: function (e) {
        var c = cc11001100_hook("c", [], "var-init"),
          b = cc11001100_hook("b", this.elementScripts(e), "var-init");
        for (var d = cc11001100_hook("d", 0, "var-init"), a = cc11001100_hook("a", b.length, "var-init"); d < a; d++) {
          if (b[d].MathJax && b[d].MathJax.elementJax) {
            c.push(b[d].MathJax.elementJax);
          }
        }
        return c;
      },
      getJaxByType: function (f, e) {
        var c = cc11001100_hook("c", [], "var-init"),
          b = cc11001100_hook("b", this.elementScripts(e), "var-init");
        for (var d = cc11001100_hook("d", 0, "var-init"), a = cc11001100_hook("a", b.length, "var-init"); d < a; d++) {
          if (b[d].MathJax && b[d].MathJax.elementJax && b[d].MathJax.elementJax.mimeType === f) {
            c.push(b[d].MathJax.elementJax);
          }
        }
        return c;
      },
      getJaxByInputType: function (f, e) {
        var c = cc11001100_hook("c", [], "var-init"),
          b = cc11001100_hook("b", this.elementScripts(e), "var-init");
        for (var d = cc11001100_hook("d", 0, "var-init"), a = cc11001100_hook("a", b.length, "var-init"); d < a; d++) {
          if (b[d].MathJax && b[d].MathJax.elementJax && b[d].type && b[d].type.replace(/ *;(.|\s)*/, "") === f) {
            c.push(b[d].MathJax.elementJax);
          }
        }
        return c;
      },
      getJaxFor: function (a) {
        if (typeof a === "string") {
          a = cc11001100_hook("a", document.getElementById(a), "assign");
        }
        if (a && a.MathJax) {
          return a.MathJax.elementJax;
        }
        if (this.isMathJaxNode(a)) {
          if (!a.isMathJax) {
            a = cc11001100_hook("a", a.firstChild, "assign");
          }
          while (a && !a.jaxID) {
            a = cc11001100_hook("a", a.parentNode, "assign");
          }
          if (a) {
            return MathJax.OutputJax[a.jaxID].getJaxFromMath(a);
          }
        }
        return null;
      },
      isJax: function (a) {
        if (typeof a === "string") {
          a = cc11001100_hook("a", document.getElementById(a), "assign");
        }
        if (this.isMathJaxNode(a)) {
          return 1;
        }
        if (a && (a.tagName || "").toLowerCase() === "script") {
          if (a.MathJax) {
            return a.MathJax.state === MathJax.ElementJax.STATE.PROCESSED ? 1 : -1;
          }
          if (a.type && this.inputJax[a.type.replace(/ *;(.|\s)*/, "")]) {
            return -1;
          }
        }
        return 0;
      },
      isMathJaxNode: function (a) {
        return !!a && (a.isMathJax || (a.className || "") === "MathJax_MathML");
      },
      setRenderer: function (d, c) {
        if (!d) {
          return;
        }
        if (!MathJax.OutputJax[d]) {
          this.config.menuSettings.renderer = cc11001100_hook("this.config.menuSettings.renderer", "", "assign");
          var b = cc11001100_hook("b", "[MathJax]/jax/output/" + d + "/config.js", "var-init");
          return MathJax.Ajax.Require(b, ["setRenderer", this, d, c]);
        } else {
          this.config.menuSettings.renderer = cc11001100_hook("this.config.menuSettings.renderer", d, "assign");
          if (c == null) {
            c = cc11001100_hook("c", "jax/mml", "assign");
          }
          var a = cc11001100_hook("a", this.outputJax, "var-init");
          if (a[c] && a[c].length) {
            if (d !== a[c][0].id) {
              a[c].unshift(MathJax.OutputJax[d]);
              return this.signal.Post(["Renderer Selected", d]);
            }
          }
          return null;
        }
      },
      Queue: function () {
        return this.queue.Push.apply(this.queue, arguments);
      },
      Typeset: function (c, d) {
        if (!MathJax.isReady) {
          return null;
        }
        var b = cc11001100_hook("b", this.elementCallback(c, d), "var-init");
        if (b.count) {
          var a = cc11001100_hook("a", MathJax.Callback.Queue(["PreProcess", this, b.elements], ["Process", this, b.elements]), "var-init");
        }
        return a.Push(b.callback);
      },
      PreProcess: function (e, g) {
        var c = cc11001100_hook("c", this.elementCallback(e, g), "var-init");
        var b = cc11001100_hook("b", MathJax.Callback.Queue(), "var-init");
        if (c.count) {
          var f = cc11001100_hook("f", c.count === 1 ? [c.elements] : c.elements, "var-init");
          b.Push(["Post", this.signal, ["Begin PreProcess", c.elements]]);
          for (var d = cc11001100_hook("d", 0, "var-init"), a = cc11001100_hook("a", f.length, "var-init"); d < a; d++) {
            if (f[d]) {
              b.Push(["Execute", this.preProcessors, f[d]]);
            }
          }
          b.Push(["Post", this.signal, ["End PreProcess", c.elements]]);
        }
        return b.Push(c.callback);
      },
      Process: function (a, b) {
        return this.takeAction("Process", a, b);
      },
      Update: function (a, b) {
        return this.takeAction("Update", a, b);
      },
      Reprocess: function (a, b) {
        return this.takeAction("Reprocess", a, b);
      },
      Rerender: function (a, b) {
        return this.takeAction("Rerender", a, b);
      },
      takeAction: function (g, d, h) {
        var c = cc11001100_hook("c", this.elementCallback(d, h), "var-init");
        var f = cc11001100_hook("f", c.elements, "var-init");
        var a = cc11001100_hook("a", MathJax.Callback.Queue(["Clear", this.signal]), "var-init");
        var e = cc11001100_hook("e", {
          scripts: cc11001100_hook("scripts", [], "object-key-init"),
          start: cc11001100_hook("start", new Date().getTime(), "object-key-init"),
          i: cc11001100_hook("i", 0, "object-key-init"),
          j: cc11001100_hook("j", 0, "object-key-init"),
          jax: {},
          jaxIDs: cc11001100_hook("jaxIDs", [], "object-key-init")
        }, "var-init");
        if (c.count) {
          var b = cc11001100_hook("b", ["Delay", MathJax.Callback, this.processSectionDelay], "var-init");
          if (!b[2]) {
            b = cc11001100_hook("b", {}, "assign");
          }
          a.Push(["clearCounts", MathJax.Message], ["Post", this.signal, ["Begin " + g, f]], ["Post", this.signal, ["Begin Math", f, g]], ["prepareScripts", this, g, f, e], ["Post", this.signal, ["Begin Math Input", f, g]], ["processInput", this, e], ["Post", this.signal, ["End Math Input", f, g]], b, ["prepareOutput", this, e, "preProcess"], b, ["Post", this.signal, ["Begin Math Output", f, g]], ["processOutput", this, e], ["Post", this.signal, ["End Math Output", f, g]], b, ["prepareOutput", this, e, "postProcess"], b, ["Post", this.signal, ["End Math", f, g]], ["Post", this.signal, ["End " + g, f]], ["clearCounts", MathJax.Message]);
        }
        return a.Push(c.callback);
      },
      scriptAction: {
        Process: function (a) {},
        Update: function (b) {
          var a = cc11001100_hook("a", b.MathJax.elementJax, "var-init");
          if (a && a.needsUpdate()) {
            a.Remove(true);
            b.MathJax.state = cc11001100_hook("b.MathJax.state", a.STATE.UPDATE, "assign");
          } else {
            b.MathJax.state = cc11001100_hook("b.MathJax.state", a.STATE.PROCESSED, "assign");
          }
        },
        Reprocess: function (b) {
          var a = cc11001100_hook("a", b.MathJax.elementJax, "var-init");
          if (a) {
            a.Remove(true);
            b.MathJax.state = cc11001100_hook("b.MathJax.state", a.STATE.UPDATE, "assign");
          }
        },
        Rerender: function (b) {
          var a = cc11001100_hook("a", b.MathJax.elementJax, "var-init");
          if (a) {
            a.Remove(true);
            b.MathJax.state = cc11001100_hook("b.MathJax.state", a.STATE.OUTPUT, "assign");
          }
        }
      },
      prepareScripts: function (h, e, g) {
        if (arguments.callee.disabled) {
          return;
        }
        var b = cc11001100_hook("b", this.elementScripts(e), "var-init");
        var f = cc11001100_hook("f", MathJax.ElementJax.STATE, "var-init");
        for (var d = cc11001100_hook("d", 0, "var-init"), a = cc11001100_hook("a", b.length, "var-init"); d < a; d++) {
          var c = cc11001100_hook("c", b[d], "var-init");
          if (c.type && this.inputJax[c.type.replace(/ *;(.|\n)*/, "")]) {
            if (c.MathJax) {
              if (c.MathJax.elementJax && c.MathJax.elementJax.hover) {
                MathJax.Extension.MathEvents.Hover.ClearHover(c.MathJax.elementJax);
              }
              if (c.MathJax.state !== f.PENDING) {
                this.scriptAction[h](c);
              }
            }
            if (!c.MathJax) {
              c.MathJax = cc11001100_hook("c.MathJax", {
                state: cc11001100_hook("state", f.PENDING, "object-key-init")
              }, "assign");
            }
            if (c.MathJax.error) {
              delete c.MathJax.error;
            }
            if (c.MathJax.state !== f.PROCESSED) {
              g.scripts.push(c);
            }
          }
        }
      },
      checkScriptSiblings: function (a) {
        if (a.MathJax.checked) {
          return;
        }
        var b = cc11001100_hook("b", this.config, "var-init"),
          f = cc11001100_hook("f", a.previousSibling, "var-init");
        if (f && f.nodeName === "#text") {
          var d,
            e,
            c = cc11001100_hook("c", a.nextSibling, "var-init");
          if (c && c.nodeName !== "#text") {
            c = cc11001100_hook("c", null, "assign");
          }
          if (b.preJax) {
            if (typeof b.preJax === "string") {
              b.preJax = cc11001100_hook("b.preJax", new RegExp(b.preJax + "$"), "assign");
            }
            d = cc11001100_hook("d", f.nodeValue.match(b.preJax), "assign");
          }
          if (b.postJax && c) {
            if (typeof b.postJax === "string") {
              b.postJax = cc11001100_hook("b.postJax", new RegExp("^" + b.postJax), "assign");
            }
            e = cc11001100_hook("e", c.nodeValue.match(b.postJax), "assign");
          }
          if (d && (!b.postJax || e)) {
            f.nodeValue = cc11001100_hook("f.nodeValue", f.nodeValue.replace(b.preJax, d.length > 1 ? d[1] : ""), "assign");
            f = cc11001100_hook("f", null, "assign");
          }
          if (e && (!b.preJax || d)) {
            c.nodeValue = cc11001100_hook("c.nodeValue", c.nodeValue.replace(b.postJax, e.length > 1 ? e[1] : ""), "assign");
          }
          if (f && !f.nodeValue.match(/\S/)) {
            f = cc11001100_hook("f", f.previousSibling, "assign");
          }
        }
        if (b.preRemoveClass && f && f.className === b.preRemoveClass) {
          a.MathJax.preview = cc11001100_hook("a.MathJax.preview", f, "assign");
        }
        a.MathJax.checked = cc11001100_hook("a.MathJax.checked", 1, "assign");
      },
      processInput: function (a) {
        var b,
          i = cc11001100_hook("i", MathJax.ElementJax.STATE, "var-init");
        var h,
          e,
          d = cc11001100_hook("d", a.scripts.length, "var-init");
        try {
          while (a.i < d) {
            h = cc11001100_hook("h", a.scripts[a.i], "assign");
            if (!h) {
              a.i++;
              continue;
            }
            e = cc11001100_hook("e", h.previousSibling, "assign");
            if (e && e.className === "MathJax_Error") {
              e.parentNode.removeChild(e);
            }
            if (!h.parentNode || !h.MathJax || h.MathJax.state === i.PROCESSED) {
              a.i++;
              continue;
            }
            if (!h.MathJax.elementJax || h.MathJax.state === i.UPDATE) {
              this.checkScriptSiblings(h);
              var g = cc11001100_hook("g", h.type.replace(/ *;(.|\s)*/, ""), "var-init");
              var j = cc11001100_hook("j", this.inputJax[g], "var-init");
              b = cc11001100_hook("b", j.Process(h, a), "assign");
              if (typeof b === "function") {
                if (b.called) {
                  continue;
                }
                this.RestartAfter(b);
              }
              b = cc11001100_hook("b", b.Attach(h, j.id), "assign");
              this.saveScript(b, a, h, i);
              this.postInputHooks.Execute(b, j.id, h);
            } else {
              if (h.MathJax.state === i.OUTPUT) {
                this.saveScript(h.MathJax.elementJax, a, h, i);
              }
            }
            a.i++;
            var c = cc11001100_hook("c", new Date().getTime(), "var-init");
            if (c - a.start > this.processUpdateTime && a.i < a.scripts.length) {
              a.start = cc11001100_hook("a.start", c, "assign");
              this.RestartAfter(MathJax.Callback.Delay(1));
            }
          }
        } catch (f) {
          return this.processError(f, a, "Input");
        }
        if (a.scripts.length && this.config.showProcessingMessages) {
          MathJax.Message.Set(["ProcessMath", "Processing math: %1%%", 100], 0);
        }
        a.start = cc11001100_hook("a.start", new Date().getTime(), "assign");
        a.i = cc11001100_hook("a.i", a.j = cc11001100_hook("a.j", 0, "assign"), "assign");
        return null;
      },
      postInputHooks: cc11001100_hook("postInputHooks", MathJax.Callback.Hooks(true), "object-key-init"),
      saveScript: function (a, d, b, c) {
        if (!this.outputJax[a.mimeType]) {
          b.MathJax.state = cc11001100_hook("b.MathJax.state", c.UPDATE, "assign");
          throw Error("No output jax registered for " + a.mimeType);
        }
        a.outputJax = cc11001100_hook("a.outputJax", this.outputJax[a.mimeType][0].id, "assign");
        if (!d.jax[a.outputJax]) {
          if (d.jaxIDs.length === 0) {
            d.jax[a.outputJax] = cc11001100_hook("d.jax[a.outputJax]", d.scripts, "assign");
          } else {
            if (d.jaxIDs.length === 1) {
              d.jax[d.jaxIDs[0]] = cc11001100_hook("d.jax[d.jaxIDs[0]]", d.scripts.slice(0, d.i), "assign");
            }
            d.jax[a.outputJax] = cc11001100_hook("d.jax[a.outputJax]", [], "assign");
          }
          d.jaxIDs.push(a.outputJax);
        }
        if (d.jaxIDs.length > 1) {
          d.jax[a.outputJax].push(b);
        }
        b.MathJax.state = cc11001100_hook("b.MathJax.state", c.OUTPUT, "assign");
      },
      prepareOutput: function (c, f) {
        while (c.j < c.jaxIDs.length) {
          var e = cc11001100_hook("e", c.jaxIDs[c.j], "var-init"),
            d = cc11001100_hook("d", MathJax.OutputJax[e], "var-init");
          if (d[f]) {
            try {
              var a = cc11001100_hook("a", d[f](c), "var-init");
              if (typeof a === "function") {
                if (a.called) {
                  continue;
                }
                this.RestartAfter(a);
              }
            } catch (b) {
              if (!b.restart) {
                MathJax.Message.Set(["PrepError", "Error preparing %1 output (%2)", e, f], null, 600);
                MathJax.Hub.lastPrepError = cc11001100_hook("MathJax.Hub.lastPrepError", b, "assign");
                c.j++;
              }
              return MathJax.Callback.After(["prepareOutput", this, c, f], b.restart);
            }
          }
          c.j++;
        }
        return null;
      },
      processOutput: function (h) {
        var b,
          g = cc11001100_hook("g", MathJax.ElementJax.STATE, "var-init"),
          d,
          a = cc11001100_hook("a", h.scripts.length, "var-init");
        try {
          while (h.i < a) {
            d = cc11001100_hook("d", h.scripts[h.i], "assign");
            if (!d || !d.parentNode || !d.MathJax || d.MathJax.error) {
              h.i++;
              continue;
            }
            var c = cc11001100_hook("c", d.MathJax.elementJax, "var-init");
            if (!c) {
              h.i++;
              continue;
            }
            b = cc11001100_hook("b", MathJax.OutputJax[c.outputJax].Process(d, h), "assign");
            if (b !== false) {
              d.MathJax.state = cc11001100_hook("d.MathJax.state", g.PROCESSED, "assign");
              if (d.MathJax.preview) {
                d.MathJax.preview.innerHTML = cc11001100_hook("d.MathJax.preview.innerHTML", "", "assign");
                d.MathJax.preview.style.display = cc11001100_hook("d.MathJax.preview.style.display", "none", "assign");
              }
              this.signal.Post(["New Math", c.inputID]);
            }
            h.i++;
            var e = cc11001100_hook("e", new Date().getTime(), "var-init");
            if (e - h.start > this.processUpdateTime && h.i < h.scripts.length) {
              h.start = cc11001100_hook("h.start", e, "assign");
              this.RestartAfter(MathJax.Callback.Delay(this.processUpdateDelay));
            }
          }
        } catch (f) {
          return this.processError(f, h, "Output");
        }
        if (h.scripts.length && this.config.showProcessingMessages) {
          MathJax.Message.Set(["TypesetMath", "Typesetting math: %1%%", 100], 0);
          MathJax.Message.Clear(0);
        }
        h.i = cc11001100_hook("h.i", h.j = cc11001100_hook("h.j", 0, "assign"), "assign");
        return null;
      },
      processMessage: function (d, b) {
        var a = cc11001100_hook("a", Math.floor(d.i / d.scripts.length * 100), "var-init");
        var c = cc11001100_hook("c", b === "Output" ? ["TypesetMath", "Typesetting math: %1%%"] : ["ProcessMath", "Processing math: %1%%"], "var-init");
        if (this.config.showProcessingMessages) {
          MathJax.Message.Set(c.concat(a), 0);
        }
      },
      processError: function (b, c, a) {
        if (!b.restart) {
          if (!this.config.errorSettings.message) {
            throw b;
          }
          this.formatError(c.scripts[c.i], b);
          c.i++;
        }
        this.processMessage(c, a);
        return MathJax.Callback.After(["process" + a, this, c], b.restart);
      },
      formatError: function (b, f) {
        var h = function (l, k, j, i) {
          return MathJax.Localization._(l, k, j, i);
        };
        var e = cc11001100_hook("e", h("ErrorMessage", "Error: %1", f.message) + "\n", "var-init");
        if (f.sourceURL || f.fileName) {
          e += cc11001100_hook("e", "\n" + h("ErrorFile", "file: %1", f.sourceURL || f.fileName), "assign");
        }
        if (f.line || f.lineNumber) {
          e += cc11001100_hook("e", "\n" + h("ErrorLine", "line: %1", f.line || f.lineNumber), "assign");
        }
        e += cc11001100_hook("e", "\n\n" + h("ErrorTips", "Debugging tips: use %1, inspect %2 in the browser console", "'unpacked/MathJax.js'", "'MathJax.Hub.lastError'"), "assign");
        b.MathJax.error = cc11001100_hook("b.MathJax.error", MathJax.OutputJax.Error.Jax(e, b), "assign");
        if (b.MathJax.elementJax) {
          b.MathJax.error.inputID = cc11001100_hook("b.MathJax.error.inputID", b.MathJax.elementJax.inputID, "assign");
        }
        var g = cc11001100_hook("g", this.config.errorSettings, "var-init");
        var a = cc11001100_hook("a", h(g.messageId, g.message), "var-init");
        var c = cc11001100_hook("c", MathJax.HTML.Element("span", {
          className: cc11001100_hook("className", "MathJax_Error", "object-key-init"),
          jaxID: cc11001100_hook("jaxID", "Error", "object-key-init"),
          isMathJax: cc11001100_hook("isMathJax", true, "object-key-init"),
          id: cc11001100_hook("id", b.MathJax.error.inputID + "-Frame", "object-key-init")
        }, [["span", null, a]]), "var-init");
        MathJax.Ajax.Require("[MathJax]/extensions/MathEvents.js", function () {
          var j = cc11001100_hook("j", MathJax.Extension.MathEvents.Event, "var-init"),
            i = cc11001100_hook("i", MathJax.Hub, "var-init");
          c.oncontextmenu = cc11001100_hook("c.oncontextmenu", j.Menu, "assign");
          c.onmousedown = cc11001100_hook("c.onmousedown", j.Mousedown, "assign");
          c.onkeydown = cc11001100_hook("c.onkeydown", j.Keydown, "assign");
          c.tabIndex = cc11001100_hook("c.tabIndex", i.getTabOrder(i.getJaxFor(b)), "assign");
        });
        var d = cc11001100_hook("d", document.getElementById(c.id), "var-init");
        if (d) {
          d.parentNode.removeChild(d);
        }
        if (b.parentNode) {
          b.parentNode.insertBefore(c, b);
        }
        if (b.MathJax.preview) {
          b.MathJax.preview.innerHTML = cc11001100_hook("b.MathJax.preview.innerHTML", "", "assign");
          b.MathJax.preview.style.display = cc11001100_hook("b.MathJax.preview.style.display", "none", "assign");
        }
        this.lastError = cc11001100_hook("this.lastError", f, "assign");
        this.signal.Post(["Math Processing Error", b, f]);
      },
      RestartAfter: function (a) {
        throw this.Insert(Error("restart"), {
          restart: cc11001100_hook("restart", MathJax.Callback(a), "object-key-init")
        });
      },
      elementCallback: function (c, f) {
        if (f == null && (MathJax.Object.isArray(c) || typeof c === "function")) {
          try {
            MathJax.Callback(c);
            f = cc11001100_hook("f", c, "assign");
            c = cc11001100_hook("c", null, "assign");
          } catch (d) {}
        }
        if (c == null) {
          c = cc11001100_hook("c", this.config.elements || [], "assign");
        }
        if (this.isHTMLCollection(c)) {
          c = cc11001100_hook("c", this.HTMLCollection2Array(c), "assign");
        }
        if (!MathJax.Object.isArray(c)) {
          c = cc11001100_hook("c", [c], "assign");
        }
        c = cc11001100_hook("c", [].concat(c), "assign");
        for (var b = cc11001100_hook("b", 0, "var-init"), a = cc11001100_hook("a", c.length, "var-init"); b < a; b++) {
          if (typeof c[b] === "string") {
            c[b] = cc11001100_hook("c[b]", document.getElementById(c[b]), "assign");
          }
        }
        if (!document.body) {
          document.body = cc11001100_hook("document.body", document.getElementsByTagName("body")[0], "assign");
        }
        if (c.length == 0) {
          c.push(document.body);
        }
        if (!f) {
          f = cc11001100_hook("f", {}, "assign");
        }
        return {
          count: cc11001100_hook("count", c.length, "object-key-init"),
          elements: cc11001100_hook("elements", c.length === 1 ? c[0] : c, "object-key-init"),
          callback: cc11001100_hook("callback", f, "object-key-init")
        };
      },
      elementScripts: function (e) {
        var b = cc11001100_hook("b", [], "var-init");
        if (MathJax.Object.isArray(e) || this.isHTMLCollection(e)) {
          for (var d = cc11001100_hook("d", 0, "var-init"), a = cc11001100_hook("a", e.length, "var-init"); d < a; d++) {
            var f = cc11001100_hook("f", 0, "var-init");
            for (var c = cc11001100_hook("c", 0, "var-init"); c < d && !f; c++) {
              f = cc11001100_hook("f", e[c].contains(e[d]), "assign");
            }
            if (!f) {
              b.push.apply(b, this.elementScripts(e[d]));
            }
          }
          return b;
        }
        if (typeof e === "string") {
          e = cc11001100_hook("e", document.getElementById(e), "assign");
        }
        if (!document.body) {
          document.body = cc11001100_hook("document.body", document.getElementsByTagName("body")[0], "assign");
        }
        if (e == null) {
          e = cc11001100_hook("e", document.body, "assign");
        }
        if (e.tagName != null && e.tagName.toLowerCase() === "script") {
          return [e];
        }
        b = cc11001100_hook("b", e.getElementsByTagName("script"), "assign");
        if (this.msieHTMLCollectionBug) {
          b = cc11001100_hook("b", this.HTMLCollection2Array(b), "assign");
        }
        return b;
      },
      isHTMLCollection: function (a) {
        return "HTMLCollection" in window && typeof a === "object" && a instanceof HTMLCollection;
      },
      HTMLCollection2Array: function (c) {
        if (!this.msieHTMLCollectionBug) {
          return [].slice.call(c);
        }
        var b = cc11001100_hook("b", [], "var-init");
        for (var d = cc11001100_hook("d", 0, "var-init"), a = cc11001100_hook("a", c.length, "var-init"); d < a; d++) {
          b[d] = cc11001100_hook("b[d]", c[d], "assign");
        }
        return b;
      },
      Insert: function (c, a) {
        for (var b in a) {
          if (a.hasOwnProperty(b)) {
            if (typeof a[b] === "object" && !MathJax.Object.isArray(a[b]) && (typeof c[b] === "object" || typeof c[b] === "function")) {
              this.Insert(c[b], a[b]);
            } else {
              c[b] = cc11001100_hook("c[b]", a[b], "assign");
            }
          }
        }
        return c;
      },
      getTabOrder: function (a) {
        return this.config.menuSettings.inTabOrder ? 0 : -1;
      },
      SplitList: cc11001100_hook("SplitList", "trim" in String.prototype ? function (a) {
        return a.trim().split(/\s+/);
      } : function (a) {
        return a.replace(/^\s+/, "").replace(/\s+$/, "").split(/\s+/);
      }, "object-key-init")
    }, "assign");
    MathJax.Hub.Insert(MathJax.Hub.config.styles, MathJax.Message.styles);
    MathJax.Hub.Insert(MathJax.Hub.config.styles, {
      ".MathJax_Error": cc11001100_hook(".MathJax_Error", MathJax.Hub.config.errorSettings.style, "object-key-init")
    });
    MathJax.Extension = cc11001100_hook("MathJax.Extension", {}, "assign");
    MathJax.Hub.Configured = cc11001100_hook("MathJax.Hub.Configured", MathJax.Callback({}), "assign");
    MathJax.Hub.Startup = cc11001100_hook("MathJax.Hub.Startup", {
      script: cc11001100_hook("script", "", "object-key-init"),
      queue: cc11001100_hook("queue", MathJax.Callback.Queue(), "object-key-init"),
      signal: cc11001100_hook("signal", MathJax.Callback.Signal("Startup"), "object-key-init"),
      params: {},
      Config: function () {
        this.queue.Push(["Post", this.signal, "Begin Config"]);
        if (MathJax.AuthorConfig && MathJax.AuthorConfig.root) {
          MathJax.Ajax.config.root = cc11001100_hook("MathJax.Ajax.config.root", MathJax.AuthorConfig.root, "assign");
        }
        if (this.params.locale) {
          MathJax.Localization.resetLocale(this.params.locale);
          MathJax.Hub.config.menuSettings.locale = cc11001100_hook("MathJax.Hub.config.menuSettings.locale", this.params.locale, "assign");
        }
        if (this.params.config) {
          var c = cc11001100_hook("c", this.params.config.split(/,/), "var-init");
          for (var b = cc11001100_hook("b", 0, "var-init"), a = cc11001100_hook("a", c.length, "var-init"); b < a; b++) {
            if (!c[b].match(/\.js$/)) {
              c[b] += cc11001100_hook("c[b]", ".js", "assign");
            }
            this.queue.Push(["Require", MathJax.Ajax, this.URL("config", c[b])]);
          }
        }
        this.queue.Push(["Config", MathJax.Hub, MathJax.AuthorConfig]);
        if (this.script.match(/\S/)) {
          this.queue.Push(this.script + ";\n1;");
        }
        this.queue.Push(["ConfigDelay", this], ["ConfigBlocks", this], [function (d) {
          return d.loadArray(MathJax.Hub.config.config, "config", null, true);
        }, this], ["Post", this.signal, "End Config"]);
      },
      ConfigDelay: function () {
        var a = cc11001100_hook("a", this.params.delayStartupUntil || MathJax.Hub.config.delayStartupUntil, "var-init");
        if (a === "onload") {
          return this.onload;
        }
        if (a === "configured") {
          return MathJax.Hub.Configured;
        }
        return a;
      },
      ConfigBlocks: function () {
        var c = cc11001100_hook("c", document.getElementsByTagName("script"), "var-init");
        var b = cc11001100_hook("b", MathJax.Callback.Queue(), "var-init");
        for (var d = cc11001100_hook("d", 0, "var-init"), a = cc11001100_hook("a", c.length, "var-init"); d < a; d++) {
          var e = cc11001100_hook("e", String(c[d].type).replace(/ /g, ""), "var-init");
          if (e.match(/^text\/x-mathjax-config(;.*)?$/) && !e.match(/;executed=true/)) {
            c[d].type += cc11001100_hook("c[d].type", ";executed=true", "assign");
            b.Push(c[d].innerHTML + ";\n1;");
          }
        }
        return b.Push(function () {
          MathJax.Ajax.config.root = cc11001100_hook("MathJax.Ajax.config.root", MathJax.Hub.config.root, "assign");
        });
      },
      Cookie: function () {
        return this.queue.Push(["Post", this.signal, "Begin Cookie"], ["Get", MathJax.HTML.Cookie, "menu", MathJax.Hub.config.menuSettings], [function (e) {
          var d = cc11001100_hook("d", e.menuSettings, "var-init");
          if (d.locale) {
            MathJax.Localization.resetLocale(d.locale);
          }
          var g = cc11001100_hook("g", e.menuSettings.renderer, "var-init"),
            b = cc11001100_hook("b", e.jax, "var-init");
          if (g) {
            var c = cc11001100_hook("c", "output/" + g, "var-init");
            b.sort();
            for (var f = cc11001100_hook("f", 0, "var-init"), a = cc11001100_hook("a", b.length, "var-init"); f < a; f++) {
              if (b[f].substr(0, 7) === "output/") {
                break;
              }
            }
            if (f == a - 1) {
              b.pop();
            } else {
              while (f < a) {
                if (b[f] === c) {
                  b.splice(f, 1);
                  break;
                }
                f++;
              }
            }
            b.unshift(c);
          }
          if (d.CHTMLpreview != null) {
            if (d.FastPreview == null) {
              d.FastPreview = cc11001100_hook("d.FastPreview", d.CHTMLpreview, "assign");
            }
            delete d.CHTMLpreview;
          }
          if (d.FastPreview && !MathJax.Extension["fast-preview"]) {
            MathJax.Hub.config.extensions.push("fast-preview.js");
          }
          if (e.menuSettings.assistiveMML && !MathJax.Extension.AssistiveMML) {
            MathJax.Hub.config.extensions.push("AssistiveMML.js");
          }
        }, MathJax.Hub.config], ["Post", this.signal, "End Cookie"]);
      },
      Styles: function () {
        return this.queue.Push(["Post", this.signal, "Begin Styles"], ["loadArray", this, MathJax.Hub.config.styleSheets, "config"], ["Styles", MathJax.Ajax, MathJax.Hub.config.styles], ["Post", this.signal, "End Styles"]);
      },
      Jax: function () {
        var f = cc11001100_hook("f", MathJax.Hub.config, "var-init"),
          c = cc11001100_hook("c", MathJax.Hub.outputJax, "var-init");
        for (var g = cc11001100_hook("g", 0, "var-init"), b = cc11001100_hook("b", f.jax.length, "var-init"), d = cc11001100_hook("d", 0, "var-init"); g < b; g++) {
          var e = cc11001100_hook("e", f.jax[g].substr(7), "var-init");
          if (f.jax[g].substr(0, 7) === "output/" && c.order[e] == null) {
            c.order[e] = cc11001100_hook("c.order[e]", d, "assign");
            d++;
          }
        }
        var a = cc11001100_hook("a", MathJax.Callback.Queue(), "var-init");
        return a.Push(["Post", this.signal, "Begin Jax"], ["loadArray", this, f.jax, "jax", "config.js"], ["Post", this.signal, "End Jax"]);
      },
      Extensions: function () {
        var a = cc11001100_hook("a", MathJax.Callback.Queue(), "var-init");
        return a.Push(["Post", this.signal, "Begin Extensions"], ["loadArray", this, MathJax.Hub.config.extensions, "extensions"], ["Post", this.signal, "End Extensions"]);
      },
      Message: function () {
        MathJax.Message.Init(true);
      },
      Menu: function () {
        var b = cc11001100_hook("b", MathJax.Hub.config.menuSettings, "var-init"),
          a = cc11001100_hook("a", MathJax.Hub.outputJax, "var-init"),
          d;
        for (var c in a) {
          if (a.hasOwnProperty(c)) {
            if (a[c].length) {
              d = cc11001100_hook("d", a[c], "assign");
              break;
            }
          }
        }
        if (d && d.length) {
          if (b.renderer && b.renderer !== d[0].id) {
            d.unshift(MathJax.OutputJax[b.renderer]);
          }
          b.renderer = cc11001100_hook("b.renderer", d[0].id, "assign");
        }
      },
      Hash: function () {
        if (MathJax.Hub.config.positionToHash && document.location.hash && document.body && document.body.scrollIntoView) {
          var d = cc11001100_hook("d", document.location.hash.substr(1), "var-init");
          var f = cc11001100_hook("f", document.getElementById(d), "var-init");
          if (!f) {
            var c = cc11001100_hook("c", document.getElementsByTagName("a"), "var-init");
            for (var e = cc11001100_hook("e", 0, "var-init"), b = cc11001100_hook("b", c.length, "var-init"); e < b; e++) {
              if (c[e].name === d) {
                f = cc11001100_hook("f", c[e], "assign");
                break;
              }
            }
          }
          if (f) {
            while (!f.scrollIntoView) {
              f = cc11001100_hook("f", f.parentNode, "assign");
            }
            f = cc11001100_hook("f", this.HashCheck(f), "assign");
            if (f && f.scrollIntoView) {
              setTimeout(function () {
                f.scrollIntoView(true);
              }, 1);
            }
          }
        }
      },
      HashCheck: function (b) {
        var a = cc11001100_hook("a", MathJax.Hub.getJaxFor(b), "var-init");
        if (a && MathJax.OutputJax[a.outputJax].hashCheck) {
          b = cc11001100_hook("b", MathJax.OutputJax[a.outputJax].hashCheck(b), "assign");
        }
        return b;
      },
      MenuZoom: function () {
        if (MathJax.Hub.config.showMathMenu) {
          if (!MathJax.Extension.MathMenu) {
            setTimeout(function () {
              MathJax.Callback.Queue(["Require", MathJax.Ajax, "[MathJax]/extensions/MathMenu.js", {}], ["loadDomain", MathJax.Localization, "MathMenu"]);
            }, 1000);
          } else {
            setTimeout(MathJax.Callback(["loadDomain", MathJax.Localization, "MathMenu"]), 1000);
          }
          if (!MathJax.Extension.MathZoom) {
            setTimeout(MathJax.Callback(["Require", MathJax.Ajax, "[MathJax]/extensions/MathZoom.js", {}]), 2000);
          }
        }
      },
      onLoad: function () {
        var a = cc11001100_hook("a", this.onload = cc11001100_hook("this.onload", MathJax.Callback(function () {
          MathJax.Hub.Startup.signal.Post("onLoad");
        }), "assign"), "var-init");
        if (document.body && document.readyState) {
          if (MathJax.Hub.Browser.isMSIE) {
            if (document.readyState === "complete") {
              return [a];
            }
          } else {
            if (document.readyState !== "loading") {
              return [a];
            }
          }
        }
        if (window.addEventListener) {
          window.addEventListener("load", a, false);
          if (!this.params.noDOMContentEvent) {
            window.addEventListener("DOMContentLoaded", a, false);
          }
        } else {
          if (window.attachEvent) {
            window.attachEvent("onload", a);
          } else {
            window.onload = cc11001100_hook("window.onload", a, "assign");
          }
        }
        return a;
      },
      Typeset: function (a, b) {
        if (MathJax.Hub.config.skipStartupTypeset) {
          return function () {};
        }
        return this.queue.Push(["Post", this.signal, "Begin Typeset"], ["Typeset", MathJax.Hub, a, b], ["Post", this.signal, "End Typeset"]);
      },
      URL: function (b, a) {
        if (!a.match(/^([a-z]+:\/\/|\[|\/)/)) {
          a = cc11001100_hook("a", "[MathJax]/" + b + "/" + a, "assign");
        }
        return a;
      },
      loadArray: function (b, f, c, a) {
        if (b) {
          if (!MathJax.Object.isArray(b)) {
            b = cc11001100_hook("b", [b], "assign");
          }
          if (b.length) {
            var h = cc11001100_hook("h", MathJax.Callback.Queue(), "var-init"),
              j = cc11001100_hook("j", {}, "var-init"),
              e;
            for (var g = cc11001100_hook("g", 0, "var-init"), d = cc11001100_hook("d", b.length, "var-init"); g < d; g++) {
              e = cc11001100_hook("e", this.URL(f, b[g]), "assign");
              if (c) {
                e += cc11001100_hook("e", "/" + c, "assign");
              }
              if (a) {
                h.Push(["Require", MathJax.Ajax, e, j]);
              } else {
                h.Push(MathJax.Ajax.Require(e, j));
              }
            }
            return h.Push({});
          }
        }
        return null;
      }
    }, "assign");
    (function (d) {
      var b = cc11001100_hook("b", window[d], "var-init"),
        e = cc11001100_hook("e", "[" + d + "]", "var-init");
      var c = cc11001100_hook("c", b.Hub, "var-init"),
        a = cc11001100_hook("a", b.Ajax, "var-init"),
        f = cc11001100_hook("f", b.Callback, "var-init");
      var g = cc11001100_hook("g", MathJax.Object.Subclass({
        JAXFILE: cc11001100_hook("JAXFILE", "jax.js", "object-key-init"),
        require: cc11001100_hook("require", null, "object-key-init"),
        config: {},
        Init: function (i, h) {
          if (arguments.length === 0) {
            return this;
          }
          return this.constructor.Subclass(i, h)();
        },
        Augment: function (k, j) {
          var i = cc11001100_hook("i", this.constructor, "var-init"),
            h = cc11001100_hook("h", {}, "var-init");
          if (k != null) {
            for (var l in k) {
              if (k.hasOwnProperty(l)) {
                if (typeof k[l] === "function") {
                  i.protoFunction(l, k[l]);
                } else {
                  h[l] = cc11001100_hook("h[l]", k[l], "assign");
                }
              }
            }
            if (k.toString !== i.prototype.toString && k.toString !== {}.toString) {
              i.protoFunction("toString", k.toString);
            }
          }
          c.Insert(i.prototype, h);
          i.Augment(null, j);
          return this;
        },
        Translate: function (h, i) {
          throw Error(this.directory + "/" + this.JAXFILE + " failed to define the Translate() method");
        },
        Register: function (h) {},
        Config: function () {
          this.config = cc11001100_hook("this.config", c.CombineConfig(this.id, this.config), "assign");
          if (this.config.Augment) {
            this.Augment(this.config.Augment);
          }
        },
        Startup: function () {},
        loadComplete: function (i) {
          if (i === "config.js") {
            return a.loadComplete(this.directory + "/" + i);
          } else {
            var h = cc11001100_hook("h", f.Queue(), "var-init");
            h.Push(c.Register.StartupHook("End Config", {}), ["Post", c.Startup.signal, this.id + " Jax Config"], ["Config", this], ["Post", c.Startup.signal, this.id + " Jax Require"], [function (j) {
              return MathJax.Hub.Startup.loadArray(j.require, this.directory);
            }, this], [function (j, k) {
              return MathJax.Hub.Startup.loadArray(j.extensions, "extensions/" + k);
            }, this.config || {}, this.id], ["Post", c.Startup.signal, this.id + " Jax Startup"], ["Startup", this], ["Post", c.Startup.signal, this.id + " Jax Ready"]);
            if (this.copyTranslate) {
              h.Push([function (j) {
                j.preProcess = cc11001100_hook("j.preProcess", j.preTranslate, "assign");
                j.Process = cc11001100_hook("j.Process", j.Translate, "assign");
                j.postProcess = cc11001100_hook("j.postProcess", j.postTranslate, "assign");
              }, this.constructor.prototype]);
            }
            return h.Push(["loadComplete", a, this.directory + "/" + i]);
          }
        }
      }, {
        id: cc11001100_hook("id", "Jax", "object-key-init"),
        version: cc11001100_hook("version", "2.7.2", "object-key-init"),
        directory: cc11001100_hook("directory", e + "/jax", "object-key-init"),
        extensionDir: cc11001100_hook("extensionDir", e + "/extensions", "object-key-init")
      }), "var-init");
      b.InputJax = cc11001100_hook("b.InputJax", g.Subclass({
        elementJax: cc11001100_hook("elementJax", "mml", "object-key-init"),
        sourceMenuTitle: cc11001100_hook("sourceMenuTitle", ["Original", "Original Form"], "object-key-init"),
        copyTranslate: cc11001100_hook("copyTranslate", true, "object-key-init"),
        Process: function (l, q) {
          var j = cc11001100_hook("j", f.Queue(), "var-init"),
            o;
          var k = cc11001100_hook("k", this.elementJax, "var-init");
          if (!b.Object.isArray(k)) {
            k = cc11001100_hook("k", [k], "assign");
          }
          for (var n = cc11001100_hook("n", 0, "var-init"), h = cc11001100_hook("h", k.length, "var-init"); n < h; n++) {
            o = cc11001100_hook("o", b.ElementJax.directory + "/" + k[n] + "/" + this.JAXFILE, "assign");
            if (!this.require) {
              this.require = cc11001100_hook("this.require", [], "assign");
            } else {
              if (!b.Object.isArray(this.require)) {
                this.require = cc11001100_hook("this.require", [this.require], "assign");
              }
            }
            this.require.push(o);
            j.Push(a.Require(o));
          }
          o = cc11001100_hook("o", this.directory + "/" + this.JAXFILE, "assign");
          var p = cc11001100_hook("p", j.Push(a.Require(o)), "var-init");
          if (!p.called) {
            this.constructor.prototype.Process = cc11001100_hook("this.constructor.prototype.Process", function () {
              if (!p.called) {
                return p;
              }
              throw Error(o + " failed to load properly");
            }, "assign");
          }
          k = cc11001100_hook("k", c.outputJax["jax/" + k[0]], "assign");
          if (k) {
            j.Push(a.Require(k[0].directory + "/" + this.JAXFILE));
          }
          return j.Push({});
        },
        needsUpdate: function (h) {
          var i = cc11001100_hook("i", h.SourceElement(), "var-init");
          return h.originalText !== b.HTML.getScript(i);
        },
        Register: function (h) {
          if (!c.inputJax) {
            c.inputJax = cc11001100_hook("c.inputJax", {}, "assign");
          }
          c.inputJax[h] = cc11001100_hook("c.inputJax[h]", this, "assign");
        }
      }, {
        id: cc11001100_hook("id", "InputJax", "object-key-init"),
        version: cc11001100_hook("version", "2.7.2", "object-key-init"),
        directory: cc11001100_hook("directory", g.directory + "/input", "object-key-init"),
        extensionDir: cc11001100_hook("extensionDir", g.extensionDir, "object-key-init")
      }), "assign");
      b.OutputJax = cc11001100_hook("b.OutputJax", g.Subclass({
        copyTranslate: cc11001100_hook("copyTranslate", true, "object-key-init"),
        preProcess: function (j) {
          var i,
            h = cc11001100_hook("h", this.directory + "/" + this.JAXFILE, "var-init");
          this.constructor.prototype.preProcess = cc11001100_hook("this.constructor.prototype.preProcess", function (k) {
            if (!i.called) {
              return i;
            }
            throw Error(h + " failed to load properly");
          }, "assign");
          i = cc11001100_hook("i", a.Require(h), "assign");
          return i;
        },
        Register: function (i) {
          var h = cc11001100_hook("h", c.outputJax, "var-init");
          if (!h[i]) {
            h[i] = cc11001100_hook("h[i]", [], "assign");
          }
          if (h[i].length && (this.id === c.config.menuSettings.renderer || (h.order[this.id] || 0) < (h.order[h[i][0].id] || 0))) {
            h[i].unshift(this);
          } else {
            h[i].push(this);
          }
          if (!this.require) {
            this.require = cc11001100_hook("this.require", [], "assign");
          } else {
            if (!b.Object.isArray(this.require)) {
              this.require = cc11001100_hook("this.require", [this.require], "assign");
            }
          }
          this.require.push(b.ElementJax.directory + "/" + i.split(/\//)[1] + "/" + this.JAXFILE);
        },
        Remove: function (h) {}
      }, {
        id: cc11001100_hook("id", "OutputJax", "object-key-init"),
        version: cc11001100_hook("version", "2.7.2", "object-key-init"),
        directory: cc11001100_hook("directory", g.directory + "/output", "object-key-init"),
        extensionDir: cc11001100_hook("extensionDir", g.extensionDir, "object-key-init"),
        fontDir: cc11001100_hook("fontDir", e + (b.isPacked ? "" : "/..") + "/fonts", "object-key-init"),
        imageDir: cc11001100_hook("imageDir", e + (b.isPacked ? "" : "/..") + "/images", "object-key-init")
      }), "assign");
      b.ElementJax = cc11001100_hook("b.ElementJax", g.Subclass({
        Init: function (i, h) {
          return this.constructor.Subclass(i, h);
        },
        inputJax: cc11001100_hook("inputJax", null, "object-key-init"),
        outputJax: cc11001100_hook("outputJax", null, "object-key-init"),
        inputID: cc11001100_hook("inputID", null, "object-key-init"),
        originalText: cc11001100_hook("originalText", "", "object-key-init"),
        mimeType: cc11001100_hook("mimeType", "", "object-key-init"),
        sourceMenuTitle: cc11001100_hook("sourceMenuTitle", ["MathMLcode", "MathML Code"], "object-key-init"),
        Text: function (i, j) {
          var h = cc11001100_hook("h", this.SourceElement(), "var-init");
          b.HTML.setScript(h, i);
          h.MathJax.state = cc11001100_hook("h.MathJax.state", this.STATE.UPDATE, "assign");
          return c.Update(h, j);
        },
        Reprocess: function (i) {
          var h = cc11001100_hook("h", this.SourceElement(), "var-init");
          h.MathJax.state = cc11001100_hook("h.MathJax.state", this.STATE.UPDATE, "assign");
          return c.Reprocess(h, i);
        },
        Update: function (h) {
          return this.Rerender(h);
        },
        Rerender: function (i) {
          var h = cc11001100_hook("h", this.SourceElement(), "var-init");
          h.MathJax.state = cc11001100_hook("h.MathJax.state", this.STATE.OUTPUT, "assign");
          return c.Process(h, i);
        },
        Remove: function (h) {
          if (this.hover) {
            this.hover.clear(this);
          }
          b.OutputJax[this.outputJax].Remove(this);
          if (!h) {
            c.signal.Post(["Remove Math", this.inputID]);
            this.Detach();
          }
        },
        needsUpdate: function () {
          return b.InputJax[this.inputJax].needsUpdate(this);
        },
        SourceElement: function () {
          return document.getElementById(this.inputID);
        },
        Attach: function (i, j) {
          var h = cc11001100_hook("h", i.MathJax.elementJax, "var-init");
          if (i.MathJax.state === this.STATE.UPDATE) {
            h.Clone(this);
          } else {
            h = cc11001100_hook("h", i.MathJax.elementJax = cc11001100_hook("i.MathJax.elementJax", this, "assign"), "assign");
            if (i.id) {
              this.inputID = cc11001100_hook("this.inputID", i.id, "assign");
            } else {
              i.id = cc11001100_hook("i.id", this.inputID = cc11001100_hook("this.inputID", b.ElementJax.GetID(), "assign"), "assign");
              this.newID = cc11001100_hook("this.newID", 1, "assign");
            }
          }
          h.originalText = cc11001100_hook("h.originalText", b.HTML.getScript(i), "assign");
          h.inputJax = cc11001100_hook("h.inputJax", j, "assign");
          if (h.root) {
            h.root.inputID = cc11001100_hook("h.root.inputID", h.inputID, "assign");
          }
          return h;
        },
        Detach: function () {
          var h = cc11001100_hook("h", this.SourceElement(), "var-init");
          if (!h) {
            return;
          }
          try {
            delete h.MathJax;
          } catch (i) {
            h.MathJax = cc11001100_hook("h.MathJax", null, "assign");
          }
          if (this.newID) {
            h.id = cc11001100_hook("h.id", "", "assign");
          }
        },
        Clone: function (h) {
          var i;
          for (i in this) {
            if (!this.hasOwnProperty(i)) {
              continue;
            }
            if (typeof h[i] === "undefined" && i !== "newID") {
              delete this[i];
            }
          }
          for (i in h) {
            if (!h.hasOwnProperty(i)) {
              continue;
            }
            if (typeof this[i] === "undefined" || this[i] !== h[i] && i !== "inputID") {
              this[i] = cc11001100_hook("this[i]", h[i], "assign");
            }
          }
        }
      }, {
        id: cc11001100_hook("id", "ElementJax", "object-key-init"),
        version: cc11001100_hook("version", "2.7.2", "object-key-init"),
        directory: cc11001100_hook("directory", g.directory + "/element", "object-key-init"),
        extensionDir: cc11001100_hook("extensionDir", g.extensionDir, "object-key-init"),
        ID: cc11001100_hook("ID", 0, "object-key-init"),
        STATE: {
          PENDING: cc11001100_hook("PENDING", 1, "object-key-init"),
          PROCESSED: cc11001100_hook("PROCESSED", 2, "object-key-init"),
          UPDATE: cc11001100_hook("UPDATE", 3, "object-key-init"),
          OUTPUT: cc11001100_hook("OUTPUT", 4, "object-key-init")
        },
        GetID: function () {
          this.ID++;
          return "MathJax-Element-" + this.ID;
        },
        Subclass: function () {
          var h = cc11001100_hook("h", g.Subclass.apply(this, arguments), "var-init");
          h.loadComplete = cc11001100_hook("h.loadComplete", this.prototype.loadComplete, "assign");
          return h;
        }
      }), "assign");
      b.ElementJax.prototype.STATE = cc11001100_hook("b.ElementJax.prototype.STATE", b.ElementJax.STATE, "assign");
      b.OutputJax.Error = cc11001100_hook("b.OutputJax.Error", {
        id: cc11001100_hook("id", "Error", "object-key-init"),
        version: cc11001100_hook("version", "2.7.2", "object-key-init"),
        config: {},
        errors: cc11001100_hook("errors", 0, "object-key-init"),
        ContextMenu: function () {
          return b.Extension.MathEvents.Event.ContextMenu.apply(b.Extension.MathEvents.Event, arguments);
        },
        Mousedown: function () {
          return b.Extension.MathEvents.Event.AltContextMenu.apply(b.Extension.MathEvents.Event, arguments);
        },
        getJaxFromMath: function (h) {
          return (h.nextSibling.MathJax || {}).error;
        },
        Jax: function (j, i) {
          var h = cc11001100_hook("h", MathJax.Hub.inputJax[i.type.replace(/ *;(.|\s)*/, "")], "var-init");
          this.errors++;
          return {
            inputJax: cc11001100_hook("inputJax", (h || {
              id: cc11001100_hook("id", "Error", "object-key-init")
            }).id, "object-key-init"),
            outputJax: cc11001100_hook("outputJax", "Error", "object-key-init"),
            inputID: cc11001100_hook("inputID", "MathJax-Error-" + this.errors, "object-key-init"),
            sourceMenuTitle: cc11001100_hook("sourceMenuTitle", ["ErrorMessage", "Error Message"], "object-key-init"),
            sourceMenuFormat: cc11001100_hook("sourceMenuFormat", "Error", "object-key-init"),
            originalText: cc11001100_hook("originalText", MathJax.HTML.getScript(i), "object-key-init"),
            errorText: cc11001100_hook("errorText", j, "object-key-init")
          };
        }
      }, "assign");
      b.InputJax.Error = cc11001100_hook("b.InputJax.Error", {
        id: cc11001100_hook("id", "Error", "object-key-init"),
        version: cc11001100_hook("version", "2.7.2", "object-key-init"),
        config: {},
        sourceMenuTitle: cc11001100_hook("sourceMenuTitle", ["Original", "Original Form"], "object-key-init")
      }, "assign");
    })("MathJax");
    (function (o) {
      var h = cc11001100_hook("h", window[o], "var-init");
      if (!h) {
        h = cc11001100_hook("h", window[o] = cc11001100_hook("window[o]", {}, "assign"), "assign");
      }
      var d = cc11001100_hook("d", h.Hub, "var-init");
      var s = cc11001100_hook("s", d.Startup, "var-init");
      var w = cc11001100_hook("w", d.config, "var-init");
      var g = cc11001100_hook("g", document.head || document.getElementsByTagName("head")[0], "var-init");
      if (!g) {
        g = cc11001100_hook("g", document.childNodes[0], "assign");
      }
      var b = cc11001100_hook("b", (document.documentElement || document).getElementsByTagName("script"), "var-init");
      if (b.length === 0 && g.namespaceURI) {
        b = cc11001100_hook("b", document.getElementsByTagNameNS(g.namespaceURI, "script"), "assign");
      }
      var f = cc11001100_hook("f", new RegExp("(^|/)" + o + "\\.js(\\?.*)?$"), "var-init");
      for (var q = cc11001100_hook("q", b.length - 1, "var-init"); q >= 0; q--) {
        if ((b[q].src || "").match(f)) {
          s.script = cc11001100_hook("s.script", b[q].innerHTML, "assign");
          if (RegExp.$2) {
            var t = cc11001100_hook("t", RegExp.$2.substr(1).split(/\&/), "var-init");
            for (var p = cc11001100_hook("p", 0, "var-init"), l = cc11001100_hook("l", t.length, "var-init"); p < l; p++) {
              var n = cc11001100_hook("n", t[p].match(/(.*)=(.*)/), "var-init");
              if (n) {
                s.params[unescape(n[1])] = cc11001100_hook("s.params[unescape(n[1])]", unescape(n[2]), "assign");
              } else {
                s.params[t[p]] = cc11001100_hook("s.params[t[p]]", true, "assign");
              }
            }
          }
          w.root = cc11001100_hook("w.root", b[q].src.replace(/(^|\/)[^\/]*(\?.*)?$/, ""), "assign");
          h.Ajax.config.root = cc11001100_hook("h.Ajax.config.root", w.root, "assign");
          h.Ajax.params = cc11001100_hook("h.Ajax.params", s.params, "assign");
          break;
        }
      }
      var k = cc11001100_hook("k", navigator.userAgent, "var-init");
      var a = cc11001100_hook("a", {
        isMac: cc11001100_hook("isMac", navigator.platform.substr(0, 3) === "Mac", "object-key-init"),
        isPC: cc11001100_hook("isPC", navigator.platform.substr(0, 3) === "Win", "object-key-init"),
        isMSIE: cc11001100_hook("isMSIE", "ActiveXObject" in window && "clipboardData" in window, "object-key-init"),
        isEdge: cc11001100_hook("isEdge", "MSGestureEvent" in window && "chrome" in window && window.chrome.loadTimes == null, "object-key-init"),
        isFirefox: cc11001100_hook("isFirefox", !!k.match(/Gecko\//) && !k.match(/like Gecko/), "object-key-init"),
        isSafari: cc11001100_hook("isSafari", !!k.match(/ (Apple)?WebKit\//) && !k.match(/ like iPhone /) && (!window.chrome || window.chrome.app == null), "object-key-init"),
        isChrome: cc11001100_hook("isChrome", "chrome" in window && window.chrome.loadTimes != null, "object-key-init"),
        isOpera: cc11001100_hook("isOpera", "opera" in window && window.opera.version != null, "object-key-init"),
        isKonqueror: cc11001100_hook("isKonqueror", "konqueror" in window && navigator.vendor == "KDE", "object-key-init"),
        versionAtLeast: function (y) {
          var x = cc11001100_hook("x", this.version.split("."), "var-init");
          y = cc11001100_hook("y", new String(y).split("."), "assign");
          for (var z = cc11001100_hook("z", 0, "var-init"), j = cc11001100_hook("j", y.length, "var-init"); z < j; z++) {
            if (x[z] != y[z]) {
              return parseInt(x[z] || "0") >= parseInt(y[z]);
            }
          }
          return true;
        },
        Select: function (j) {
          var i = cc11001100_hook("i", j[d.Browser], "var-init");
          if (i) {
            return i(d.Browser);
          }
          return null;
        }
      }, "var-init");
      var e = cc11001100_hook("e", k.replace(/^Mozilla\/(\d+\.)+\d+ /, "").replace(/[a-z][-a-z0-9._: ]+\/\d+[^ ]*-[^ ]*\.([a-z][a-z])?\d+ /i, "").replace(/Gentoo |Ubuntu\/(\d+\.)*\d+ (\([^)]*\) )?/, ""), "var-init");
      d.Browser = cc11001100_hook("d.Browser", d.Insert(d.Insert(new String("Unknown"), {
        version: cc11001100_hook("version", "0.0", "object-key-init")
      }), a), "assign");
      for (var v in a) {
        if (a.hasOwnProperty(v)) {
          if (a[v] && v.substr(0, 2) === "is") {
            v = cc11001100_hook("v", v.slice(2), "assign");
            if (v === "Mac" || v === "PC") {
              continue;
            }
            d.Browser = cc11001100_hook("d.Browser", d.Insert(new String(v), a), "assign");
            var r = cc11001100_hook("r", new RegExp(".*(Version/| Trident/.*; rv:)((?:\\d+\\.)+\\d+)|.*(" + v + ")" + (v == "MSIE" ? " " : "/") + "((?:\\d+\\.)*\\d+)|(?:^|\\(| )([a-z][-a-z0-9._: ]+|(?:Apple)?WebKit)/((?:\\d+\\.)+\\d+)"), "var-init");
            var u = cc11001100_hook("u", r.exec(e) || ["", "", "", "unknown", "0.0"], "var-init");
            d.Browser.name = cc11001100_hook("d.Browser.name", u[1] != "" ? v : u[3] || u[5], "assign");
            d.Browser.version = cc11001100_hook("d.Browser.version", u[2] || u[4] || u[6], "assign");
            break;
          }
        }
      }
      try {
        d.Browser.Select({
          Safari: function (j) {
            var i = cc11001100_hook("i", parseInt(String(j.version).split(".")[0]), "var-init");
            if (i > 85) {
              j.webkit = cc11001100_hook("j.webkit", j.version, "assign");
            }
            if (i >= 538) {
              j.version = cc11001100_hook("j.version", "8.0", "assign");
            } else {
              if (i >= 537) {
                j.version = cc11001100_hook("j.version", "7.0", "assign");
              } else {
                if (i >= 536) {
                  j.version = cc11001100_hook("j.version", "6.0", "assign");
                } else {
                  if (i >= 534) {
                    j.version = cc11001100_hook("j.version", "5.1", "assign");
                  } else {
                    if (i >= 533) {
                      j.version = cc11001100_hook("j.version", "5.0", "assign");
                    } else {
                      if (i >= 526) {
                        j.version = cc11001100_hook("j.version", "4.0", "assign");
                      } else {
                        if (i >= 525) {
                          j.version = cc11001100_hook("j.version", "3.1", "assign");
                        } else {
                          if (i > 500) {
                            j.version = cc11001100_hook("j.version", "3.0", "assign");
                          } else {
                            if (i > 400) {
                              j.version = cc11001100_hook("j.version", "2.0", "assign");
                            } else {
                              if (i > 85) {
                                j.version = cc11001100_hook("j.version", "1.0", "assign");
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            j.webkit = cc11001100_hook("j.webkit", navigator.appVersion.match(/WebKit\/(\d+)\./)[1], "assign");
            j.isMobile = cc11001100_hook("j.isMobile", navigator.appVersion.match(/Mobile/i) != null, "assign");
            j.noContextMenu = cc11001100_hook("j.noContextMenu", j.isMobile, "assign");
          },
          Firefox: function (j) {
            if ((j.version === "0.0" || k.match(/Firefox/) == null) && navigator.product === "Gecko") {
              var m = cc11001100_hook("m", k.match(/[\/ ]rv:(\d+\.\d.*?)[\) ]/), "var-init");
              if (m) {
                j.version = cc11001100_hook("j.version", m[1], "assign");
              } else {
                var i = cc11001100_hook("i", (navigator.buildID || navigator.productSub || "0").substr(0, 8), "var-init");
                if (i >= "20111220") {
                  j.version = cc11001100_hook("j.version", "9.0", "assign");
                } else {
                  if (i >= "20111120") {
                    j.version = cc11001100_hook("j.version", "8.0", "assign");
                  } else {
                    if (i >= "20110927") {
                      j.version = cc11001100_hook("j.version", "7.0", "assign");
                    } else {
                      if (i >= "20110816") {
                        j.version = cc11001100_hook("j.version", "6.0", "assign");
                      } else {
                        if (i >= "20110621") {
                          j.version = cc11001100_hook("j.version", "5.0", "assign");
                        } else {
                          if (i >= "20110320") {
                            j.version = cc11001100_hook("j.version", "4.0", "assign");
                          } else {
                            if (i >= "20100121") {
                              j.version = cc11001100_hook("j.version", "3.6", "assign");
                            } else {
                              if (i >= "20090630") {
                                j.version = cc11001100_hook("j.version", "3.5", "assign");
                              } else {
                                if (i >= "20080617") {
                                  j.version = cc11001100_hook("j.version", "3.0", "assign");
                                } else {
                                  if (i >= "20061024") {
                                    j.version = cc11001100_hook("j.version", "2.0", "assign");
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            j.isMobile = cc11001100_hook("j.isMobile", navigator.appVersion.match(/Android/i) != null || k.match(/ Fennec\//) != null || k.match(/Mobile/) != null, "assign");
          },
          Chrome: function (i) {
            i.noContextMenu = cc11001100_hook("i.noContextMenu", i.isMobile = cc11001100_hook("i.isMobile", !!navigator.userAgent.match(/ Mobile[ \/]/), "assign"), "assign");
          },
          Opera: function (i) {
            i.version = cc11001100_hook("i.version", opera.version(), "assign");
          },
          Edge: function (i) {
            i.isMobile = cc11001100_hook("i.isMobile", !!navigator.userAgent.match(/ Phone/), "assign");
          },
          MSIE: function (j) {
            j.isMobile = cc11001100_hook("j.isMobile", !!navigator.userAgent.match(/ Phone/), "assign");
            j.isIE9 = cc11001100_hook("j.isIE9", !!(document.documentMode && (window.performance || window.msPerformance)), "assign");
            MathJax.HTML.setScriptBug = cc11001100_hook("MathJax.HTML.setScriptBug", !j.isIE9 || document.documentMode < 9, "assign");
            MathJax.Hub.msieHTMLCollectionBug = cc11001100_hook("MathJax.Hub.msieHTMLCollectionBug", document.documentMode < 9, "assign");
            if (document.documentMode < 10 && !s.params.NoMathPlayer) {
              try {
                new ActiveXObject("MathPlayer.Factory.1");
                j.hasMathPlayer = cc11001100_hook("j.hasMathPlayer", true, "assign");
              } catch (m) {}
              try {
                if (j.hasMathPlayer) {
                  var i = cc11001100_hook("i", document.createElement("object"), "var-init");
                  i.id = cc11001100_hook("i.id", "mathplayer", "assign");
                  i.classid = cc11001100_hook("i.classid", "clsid:32F66A20-7614-11D4-BD11-00104BD3F987", "assign");
                  g.appendChild(i);
                  document.namespaces.add("m", "http://www.w3.org/1998/Math/MathML");
                  j.mpNamespace = cc11001100_hook("j.mpNamespace", true, "assign");
                  if (document.readyState && (document.readyState === "loading" || document.readyState === "interactive")) {
                    document.write('<?import namespace="m" implementation="#MathPlayer">');
                    j.mpImported = cc11001100_hook("j.mpImported", true, "assign");
                  }
                } else {
                  document.namespaces.add("mjx_IE_fix", "http://www.w3.org/1999/xlink");
                }
              } catch (m) {}
            }
          }
        });
      } catch (c) {
        console.error(c.message);
      }
      d.Browser.Select(MathJax.Message.browsers);
      if (h.AuthorConfig && typeof h.AuthorConfig.AuthorInit === "function") {
        h.AuthorConfig.AuthorInit();
      }
      d.queue = cc11001100_hook("d.queue", h.Callback.Queue(), "assign");
      d.queue.Push(["Post", s.signal, "Begin"], ["Config", s], ["Cookie", s], ["Styles", s], ["Message", s], function () {
        var i = cc11001100_hook("i", h.Callback.Queue(s.Jax(), s.Extensions()), "var-init");
        return i.Push({});
      }, ["Menu", s], s.onLoad(), function () {
        MathJax.isReady = cc11001100_hook("MathJax.isReady", true, "assign");
      }, ["Typeset", s], ["Hash", s], ["MenuZoom", s], ["Post", s.signal, "End"]);
    })("MathJax");
  }
}
;