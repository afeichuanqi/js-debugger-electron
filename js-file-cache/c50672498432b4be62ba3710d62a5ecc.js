(function (root) {
  if (root.esl && root.require && root.esl.version === root.require.version) {
    return;
  }
  var define;
  var require;
  var esl;
  (function (global) {
    var modModules = cc11001100_hook("modModules", {}, "var-init");
    var MODULE_PRE_DEFINED = cc11001100_hook("MODULE_PRE_DEFINED", 1, "var-init");
    var MODULE_ANALYZED = cc11001100_hook("MODULE_ANALYZED", 2, "var-init");
    var MODULE_PREPARED = cc11001100_hook("MODULE_PREPARED", 3, "var-init");
    var MODULE_DEFINED = cc11001100_hook("MODULE_DEFINED", 4, "var-init");
    var modAutoDefineModules = cc11001100_hook("modAutoDefineModules", {}, "var-init");
    function modFlagAutoDefine(id) {
      cc11001100_hook("id", id, "function-parameter");
      if (!modIs(id, MODULE_DEFINED)) {
        modAutoDefineModules[id] = cc11001100_hook("modAutoDefineModules[id]", 1, "assign");
      }
    }
    var BUILDIN_MODULE = cc11001100_hook("BUILDIN_MODULE", {
      require: cc11001100_hook("require", globalRequire, "object-key-init"),
      exports: cc11001100_hook("exports", 1, "object-key-init"),
      module: cc11001100_hook("module", 1, "object-key-init")
    }, "var-init");
    var actualGlobalRequire = cc11001100_hook("actualGlobalRequire", createLocalRequire(), "var-init");
    var waitTimeout;
    var requireConf = cc11001100_hook("requireConf", {
      baseUrl: cc11001100_hook("baseUrl", "./", "object-key-init"),
      paths: {},
      config: {},
      map: {},
      packages: cc11001100_hook("packages", [], "object-key-init"),
      shim: {},
      waitSeconds: cc11001100_hook("waitSeconds", 0, "object-key-init"),
      bundles: {},
      urlArgs: {}
    }, "var-init");
    function globalRequire(requireId, callback) {
      cc11001100_hook("requireId", requireId, "function-parameter");
      cc11001100_hook("callback", callback, "function-parameter");
      var invalidIds = cc11001100_hook("invalidIds", [], "var-init");
      function monitor(id) {
        cc11001100_hook("id", id, "function-parameter");
        if (id.indexOf(".") === 0) {
          invalidIds.push(id);
        }
      }
      if (typeof requireId === "string") {
        monitor(requireId);
      } else {
        each(requireId, function (id) {
          monitor(id);
        });
      }
      if (invalidIds.length > 0) {
        throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: " + invalidIds.join(", "));
      }
      var timeout = cc11001100_hook("timeout", requireConf.waitSeconds, "var-init");
      if (timeout && requireId instanceof Array) {
        if (waitTimeout) {
          clearTimeout(waitTimeout);
        }
        waitTimeout = cc11001100_hook("waitTimeout", setTimeout(waitTimeoutNotice, timeout * 1e3), "assign");
      }
      return actualGlobalRequire(requireId, callback);
    }
    globalRequire.version = cc11001100_hook("globalRequire.version", "2.1.4", "assign");
    globalRequire.loader = cc11001100_hook("globalRequire.loader", "esl", "assign");
    globalRequire.toUrl = cc11001100_hook("globalRequire.toUrl", actualGlobalRequire.toUrl, "assign");
    function waitTimeoutNotice() {
      var hangModules = cc11001100_hook("hangModules", [], "var-init");
      var missModules = cc11001100_hook("missModules", [], "var-init");
      var hangModulesMap = cc11001100_hook("hangModulesMap", {}, "var-init");
      var missModulesMap = cc11001100_hook("missModulesMap", {}, "var-init");
      var visited = cc11001100_hook("visited", {}, "var-init");
      function checkError(id, hard) {
        cc11001100_hook("id", id, "function-parameter");
        cc11001100_hook("hard", hard, "function-parameter");
        if (visited[id] || modIs(id, MODULE_DEFINED)) {
          return;
        }
        visited[id] = cc11001100_hook("visited[id]", 1, "assign");
        var mod = cc11001100_hook("mod", modModules[id], "var-init");
        if (!mod) {
          if (!missModulesMap[id]) {
            missModulesMap[id] = cc11001100_hook("missModulesMap[id]", 1, "assign");
            missModules.push(id);
          }
        } else if (hard || !modIs(id, MODULE_PREPARED) || mod.hang) {
          if (!hangModulesMap[id]) {
            hangModulesMap[id] = cc11001100_hook("hangModulesMap[id]", 1, "assign");
            hangModules.push(id);
          }
          each(mod.depMs, function (dep) {
            checkError(dep.absId, dep.hard);
          });
        }
      }
      for (var id in modAutoDefineModules) {
        checkError(id, 1);
      }
      if (hangModules.length || missModules.length) {
        throw new Error("[MODULE_TIMEOUT]Hang(" + (hangModules.join(", ") || "none") + ") Miss(" + (missModules.join(", ") || "none") + ")");
      }
    }
    var wait4PreDefine = cc11001100_hook("wait4PreDefine", [], "var-init");
    function modCompletePreDefine(currentId) {
      cc11001100_hook("currentId", currentId, "function-parameter");
      each(wait4PreDefine, function (mod) {
        modPreDefine(currentId, mod.deps, mod.factory);
      });
      wait4PreDefine.length = cc11001100_hook("wait4PreDefine.length", 0, "assign");
    }
    function globalDefine(id, dependencies, factory) {
      cc11001100_hook("id", id, "function-parameter");
      cc11001100_hook("dependencies", dependencies, "function-parameter");
      cc11001100_hook("factory", factory, "function-parameter");
      if (factory == null) {
        if (dependencies == null) {
          factory = cc11001100_hook("factory", id, "assign");
          id = cc11001100_hook("id", null, "assign");
        } else {
          factory = cc11001100_hook("factory", dependencies, "assign");
          dependencies = cc11001100_hook("dependencies", null, "assign");
          if (id instanceof Array) {
            dependencies = cc11001100_hook("dependencies", id, "assign");
            id = cc11001100_hook("id", null, "assign");
          }
        }
      }
      if (factory == null) {
        return;
      }
      var opera = cc11001100_hook("opera", window.opera, "var-init");
      if (!id && document.attachEvent && !(opera && opera.toString() === "[object Opera]")) {
        var currentScript = cc11001100_hook("currentScript", getCurrentScript(), "var-init");
        id = cc11001100_hook("id", currentScript && currentScript.getAttribute("data-require-id"), "assign");
      }
      if (id) {
        modPreDefine(id, dependencies, factory);
      } else {
        wait4PreDefine[0] = cc11001100_hook("wait4PreDefine[0]", {
          deps: cc11001100_hook("deps", dependencies, "object-key-init"),
          factory: cc11001100_hook("factory", factory, "object-key-init")
        }, "assign");
      }
    }
    globalDefine.amd = cc11001100_hook("globalDefine.amd", {}, "assign");
    function moduleConfigGetter() {
      var conf = cc11001100_hook("conf", requireConf.config[this.id], "var-init");
      if (conf && typeof conf === "object") {
        return conf;
      }
      return {};
    }
    function modPreDefine(id, dependencies, factory) {
      cc11001100_hook("id", id, "function-parameter");
      cc11001100_hook("dependencies", dependencies, "function-parameter");
      cc11001100_hook("factory", factory, "function-parameter");
      if (!modModules[id]) {
        modModules[id] = cc11001100_hook("modModules[id]", {
          id: cc11001100_hook("id", id, "object-key-init"),
          depsDec: cc11001100_hook("depsDec", dependencies, "object-key-init"),
          deps: cc11001100_hook("deps", dependencies || ["require", "exports", "module"], "object-key-init"),
          factoryDeps: cc11001100_hook("factoryDeps", [], "object-key-init"),
          factory: cc11001100_hook("factory", factory, "object-key-init"),
          exports: {},
          config: cc11001100_hook("config", moduleConfigGetter, "object-key-init"),
          state: cc11001100_hook("state", MODULE_PRE_DEFINED, "object-key-init"),
          require: cc11001100_hook("require", createLocalRequire(id), "object-key-init"),
          depMs: cc11001100_hook("depMs", [], "object-key-init"),
          depMkv: {},
          depRs: cc11001100_hook("depRs", [], "object-key-init"),
          hang: cc11001100_hook("hang", 0, "object-key-init")
        }, "assign");
      }
    }
    function modPrepare(id) {
      cc11001100_hook("id", id, "function-parameter");
      var mod = cc11001100_hook("mod", modModules[id], "var-init");
      if (!mod || modIs(id, MODULE_ANALYZED)) {
        return;
      }
      var deps = cc11001100_hook("deps", mod.deps, "var-init");
      var factory = cc11001100_hook("factory", mod.factory, "var-init");
      var hardDependsCount = cc11001100_hook("hardDependsCount", 0, "var-init");
      if (typeof factory === "function") {
        hardDependsCount = cc11001100_hook("hardDependsCount", Math.min(factory.length, deps.length), "assign");
        !mod.depsDec && factory.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, "").replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g, function ($0, $1, depId) {
          deps.push(depId);
        });
      }
      var requireModules = cc11001100_hook("requireModules", [], "var-init");
      var depResources = cc11001100_hook("depResources", [], "var-init");
      each(deps, function (depId, index) {
        var idInfo = cc11001100_hook("idInfo", parseId(depId), "var-init");
        var absId = cc11001100_hook("absId", normalize(idInfo.mod, id), "var-init");
        var moduleInfo;
        var resInfo;
        if (absId && !BUILDIN_MODULE[absId]) {
          if (idInfo.res) {
            resInfo = cc11001100_hook("resInfo", {
              id: cc11001100_hook("id", depId, "object-key-init"),
              mod: cc11001100_hook("mod", absId, "object-key-init"),
              res: cc11001100_hook("res", idInfo.res, "object-key-init")
            }, "assign");
            depResources.push(depId);
            mod.depRs.push(resInfo);
          }
          moduleInfo = cc11001100_hook("moduleInfo", mod.depMkv[absId], "assign");
          if (!moduleInfo) {
            moduleInfo = cc11001100_hook("moduleInfo", {
              id: cc11001100_hook("id", idInfo.mod, "object-key-init"),
              absId: cc11001100_hook("absId", absId, "object-key-init"),
              hard: cc11001100_hook("hard", index < hardDependsCount, "object-key-init")
            }, "assign");
            mod.depMs.push(moduleInfo);
            mod.depMkv[absId] = cc11001100_hook("mod.depMkv[absId]", moduleInfo, "assign");
            requireModules.push(absId);
          }
        } else {
          moduleInfo = cc11001100_hook("moduleInfo", {
            absId: cc11001100_hook("absId", absId, "object-key-init")
          }, "assign");
        }
        if (index < hardDependsCount) {
          mod.factoryDeps.push(resInfo || moduleInfo);
        }
      });
      mod.state = cc11001100_hook("mod.state", MODULE_ANALYZED, "assign");
      modInitFactoryInvoker(id);
      nativeAsyncRequire(requireModules);
      depResources.length && mod.require(depResources, function () {
        each(mod.depRs, function (res) {
          if (!res.absId) {
            res.absId = cc11001100_hook("res.absId", normalize(res.id, id), "assign");
          }
        });
        modAutoDefine();
      });
    }
    function modAutoDefine() {
      for (var id in modAutoDefineModules) {
        modPrepare(id);
        modUpdatePreparedState(id);
        modTryInvokeFactory(id);
      }
    }
    function modUpdatePreparedState(id) {
      cc11001100_hook("id", id, "function-parameter");
      var updatingModules = cc11001100_hook("updatingModules", {}, "var-init");
      update(id);
      function update(id) {
        cc11001100_hook("id", id, "function-parameter");
        modPrepare(id);
        if (!modIs(id, MODULE_ANALYZED)) {
          return false;
        }
        if (modIs(id, MODULE_PREPARED) || updatingModules[id]) {
          return true;
        }
        updatingModules[id] = cc11001100_hook("updatingModules[id]", 1, "assign");
        var mod = cc11001100_hook("mod", modModules[id], "var-init");
        var prepared = cc11001100_hook("prepared", true, "var-init");
        each(mod.depMs, function (dep) {
          prepared = cc11001100_hook("prepared", update(dep.absId) && prepared, "assign");
        });
        prepared && each(mod.depRs, function (dep) {
          prepared = cc11001100_hook("prepared", !!dep.absId, "assign");
          return prepared;
        });
        if (prepared && !modIs(id, MODULE_PREPARED)) {
          mod.state = cc11001100_hook("mod.state", MODULE_PREPARED, "assign");
        }
        updatingModules[id] = cc11001100_hook("updatingModules[id]", 0, "assign");
        return prepared;
      }
    }
    function modInitFactoryInvoker(id) {
      cc11001100_hook("id", id, "function-parameter");
      var mod = cc11001100_hook("mod", modModules[id], "var-init");
      var invoking;
      mod.invokeFactory = cc11001100_hook("mod.invokeFactory", invokeFactory, "assign");
      function invokeFactory() {
        if (invoking || mod.state !== MODULE_PREPARED) {
          return;
        }
        invoking = cc11001100_hook("invoking", 1, "assign");
        var factoryReady = cc11001100_hook("factoryReady", 1, "var-init");
        each(mod.factoryDeps, function (dep) {
          var depId = cc11001100_hook("depId", dep.absId, "var-init");
          if (!BUILDIN_MODULE[depId]) {
            modTryInvokeFactory(depId);
            return factoryReady = cc11001100_hook("factoryReady", modIs(depId, MODULE_DEFINED), "assign");
          }
        });
        if (factoryReady) {
          try {
            var factory = cc11001100_hook("factory", mod.factory, "var-init");
            var exports = cc11001100_hook("exports", typeof factory === "function" ? factory.apply(global, modGetModulesExports(mod.factoryDeps, {
              require: cc11001100_hook("require", mod.require, "object-key-init"),
              exports: cc11001100_hook("exports", mod.exports, "object-key-init"),
              module: cc11001100_hook("module", mod, "object-key-init")
            })) : factory, "var-init");
            if (exports != null) {
              mod.exports = cc11001100_hook("mod.exports", exports, "assign");
            }
            mod.invokeFactory = cc11001100_hook("mod.invokeFactory", null, "assign");
          } catch (ex) {
            mod.hang = cc11001100_hook("mod.hang", 1, "assign");
            throw ex;
          }
          modDefined(id);
        }
      }
    }
    function modIs(id, state) {
      cc11001100_hook("id", id, "function-parameter");
      cc11001100_hook("state", state, "function-parameter");
      return modModules[id] && modModules[id].state >= state;
    }
    function modTryInvokeFactory(id) {
      cc11001100_hook("id", id, "function-parameter");
      var mod = cc11001100_hook("mod", modModules[id], "var-init");
      if (mod && mod.invokeFactory) {
        mod.invokeFactory();
      }
    }
    function modGetModulesExports(modules, buildinModules) {
      cc11001100_hook("modules", modules, "function-parameter");
      cc11001100_hook("buildinModules", buildinModules, "function-parameter");
      var args = cc11001100_hook("args", [], "var-init");
      each(modules, function (id, index) {
        if (typeof id === "object") {
          id = cc11001100_hook("id", id.absId, "assign");
        }
        args[index] = cc11001100_hook("args[index]", buildinModules[id] || modModules[id].exports, "assign");
      });
      return args;
    }
    var modDefinedListeners = cc11001100_hook("modDefinedListeners", {}, "var-init");
    function modAddDefinedListener(id, listener) {
      cc11001100_hook("id", id, "function-parameter");
      cc11001100_hook("listener", listener, "function-parameter");
      if (modIs(id, MODULE_DEFINED)) {
        listener();
        return;
      }
      var listeners = cc11001100_hook("listeners", modDefinedListeners[id], "var-init");
      if (!listeners) {
        listeners = cc11001100_hook("listeners", modDefinedListeners[id] = cc11001100_hook("modDefinedListeners[id]", [], "assign"), "assign");
      }
      listeners.push(listener);
    }
    function modDefined(id) {
      cc11001100_hook("id", id, "function-parameter");
      var mod = cc11001100_hook("mod", modModules[id], "var-init");
      mod.state = cc11001100_hook("mod.state", MODULE_DEFINED, "assign");
      delete modAutoDefineModules[id];
      var listeners = cc11001100_hook("listeners", modDefinedListeners[id] || [], "var-init");
      var len = cc11001100_hook("len", listeners.length, "var-init");
      while (len--) {
        listeners[len]();
      }
      listeners.length = cc11001100_hook("listeners.length", 0, "assign");
      modDefinedListeners[id] = cc11001100_hook("modDefinedListeners[id]", null, "assign");
    }
    function nativeAsyncRequire(ids, callback, baseId) {
      cc11001100_hook("ids", ids, "function-parameter");
      cc11001100_hook("callback", callback, "function-parameter");
      cc11001100_hook("baseId", baseId, "function-parameter");
      var isCallbackCalled = cc11001100_hook("isCallbackCalled", 0, "var-init");
      each(ids, function (id) {
        if (!(BUILDIN_MODULE[id] || modIs(id, MODULE_DEFINED))) {
          modAddDefinedListener(id, tryFinishRequire);
          (id.indexOf("!") > 0 ? loadResource : loadModule)(id, baseId);
        }
      });
      tryFinishRequire();
      function tryFinishRequire() {
        if (typeof callback === "function" && !isCallbackCalled) {
          var isAllCompleted = cc11001100_hook("isAllCompleted", 1, "var-init");
          each(ids, function (id) {
            if (!BUILDIN_MODULE[id]) {
              return isAllCompleted = cc11001100_hook("isAllCompleted", !!modIs(id, MODULE_DEFINED), "assign");
            }
          });
          if (isAllCompleted) {
            isCallbackCalled = cc11001100_hook("isCallbackCalled", 1, "assign");
            callback.apply(global, modGetModulesExports(ids, BUILDIN_MODULE));
          }
        }
      }
    }
    var loadingModules = cc11001100_hook("loadingModules", {}, "var-init");
    function loadModule(moduleId) {
      cc11001100_hook("moduleId", moduleId, "function-parameter");
      if (loadingModules[moduleId] || modModules[moduleId]) {
        return;
      }
      loadingModules[moduleId] = cc11001100_hook("loadingModules[moduleId]", 1, "assign");
      var shimConf = cc11001100_hook("shimConf", requireConf.shim[moduleId], "var-init");
      if (shimConf instanceof Array) {
        requireConf.shim[moduleId] = cc11001100_hook("requireConf.shim[moduleId]", shimConf = cc11001100_hook("shimConf", {
          deps: cc11001100_hook("deps", shimConf, "object-key-init")
        }, "assign"), "assign");
      }
      var shimDeps = cc11001100_hook("shimDeps", shimConf && (shimConf.deps || []), "var-init");
      if (shimDeps) {
        each(shimDeps, function (dep) {
          if (!requireConf.shim[dep]) {
            requireConf.shim[dep] = cc11001100_hook("requireConf.shim[dep]", {}, "assign");
          }
        });
        actualGlobalRequire(shimDeps, load);
      } else {
        load();
      }
      function load() {
        var bundleModuleId = cc11001100_hook("bundleModuleId", bundlesIndex[moduleId], "var-init");
        createScript(bundleModuleId || moduleId, loaded);
      }
      function loaded() {
        if (shimConf) {
          var exports;
          if (typeof shimConf.init === "function") {
            exports = cc11001100_hook("exports", shimConf.init.apply(global, modGetModulesExports(shimDeps, BUILDIN_MODULE)), "assign");
          }
          if (exports == null && shimConf.exports) {
            exports = cc11001100_hook("exports", global, "assign");
            each(shimConf.exports.split("."), function (prop) {
              exports = cc11001100_hook("exports", exports[prop], "assign");
              return !!exports;
            });
          }
          globalDefine(moduleId, shimDeps, function () {
            return exports || {};
          });
        } else {
          modCompletePreDefine(moduleId);
        }
        modAutoDefine();
      }
    }
    function loadResource(pluginAndResource, baseId) {
      cc11001100_hook("pluginAndResource", pluginAndResource, "function-parameter");
      cc11001100_hook("baseId", baseId, "function-parameter");
      if (modModules[pluginAndResource]) {
        return;
      }
      var bundleModuleId = cc11001100_hook("bundleModuleId", bundlesIndex[pluginAndResource], "var-init");
      if (bundleModuleId) {
        loadModule(bundleModuleId);
        return;
      }
      var idInfo = cc11001100_hook("idInfo", parseId(pluginAndResource), "var-init");
      var resource = cc11001100_hook("resource", {
        id: cc11001100_hook("id", pluginAndResource, "object-key-init"),
        state: cc11001100_hook("state", MODULE_ANALYZED, "object-key-init")
      }, "var-init");
      modModules[pluginAndResource] = cc11001100_hook("modModules[pluginAndResource]", resource, "assign");
      function pluginOnload(value) {
        cc11001100_hook("value", value, "function-parameter");
        resource.exports = cc11001100_hook("resource.exports", value || true, "assign");
        modDefined(pluginAndResource);
      }
      pluginOnload.fromText = cc11001100_hook("pluginOnload.fromText", function (id, text) {
        new Function(text)();
        modCompletePreDefine(id);
      }, "assign");
      function load(plugin) {
        cc11001100_hook("plugin", plugin, "function-parameter");
        var pluginRequire = cc11001100_hook("pluginRequire", baseId ? modModules[baseId].require : actualGlobalRequire, "var-init");
        plugin.load(idInfo.res, pluginRequire, pluginOnload, moduleConfigGetter.call({
          id: cc11001100_hook("id", pluginAndResource, "object-key-init")
        }));
      }
      load(actualGlobalRequire(idInfo.mod));
    }
    globalRequire.config = cc11001100_hook("globalRequire.config", function (conf) {
      if (conf) {
        for (var key in requireConf) {
          var newValue = cc11001100_hook("newValue", conf[key], "var-init");
          var oldValue = cc11001100_hook("oldValue", requireConf[key], "var-init");
          if (!newValue) {
            continue;
          }
          if (key === "urlArgs" && typeof newValue === "string") {
            requireConf.urlArgs["*"] = cc11001100_hook("requireConf.urlArgs[\"*\"]", newValue, "assign");
          } else {
            if (oldValue instanceof Array) {
              oldValue.push.apply(oldValue, newValue);
            } else if (typeof oldValue === "object") {
              for (var k in newValue) {
                oldValue[k] = cc11001100_hook("oldValue[k]", newValue[k], "assign");
              }
            } else {
              requireConf[key] = cc11001100_hook("requireConf[key]", newValue, "assign");
            }
          }
        }
        createConfIndex();
      }
    }, "assign");
    createConfIndex();
    var pathsIndex;
    var packagesIndex;
    var mappingIdIndex;
    var bundlesIndex;
    var urlArgsIndex;
    function createKVSortedIndex(value, allowAsterisk) {
      cc11001100_hook("value", value, "function-parameter");
      cc11001100_hook("allowAsterisk", allowAsterisk, "function-parameter");
      var index = cc11001100_hook("index", kv2List(value, 1, allowAsterisk), "var-init");
      index.sort(descSorterByKOrName);
      return index;
    }
    function createConfIndex() {
      requireConf.baseUrl = cc11001100_hook("requireConf.baseUrl", requireConf.baseUrl.replace(/\/$/, "") + "/", "assign");
      pathsIndex = cc11001100_hook("pathsIndex", createKVSortedIndex(requireConf.paths), "assign");
      mappingIdIndex = cc11001100_hook("mappingIdIndex", createKVSortedIndex(requireConf.map, 1), "assign");
      each(mappingIdIndex, function (item) {
        item.v = cc11001100_hook("item.v", createKVSortedIndex(item.v), "assign");
      });
      var lastMapItem = cc11001100_hook("lastMapItem", mappingIdIndex[mappingIdIndex.length - 1], "var-init");
      if (lastMapItem && lastMapItem.k === "*") {
        each(mappingIdIndex, function (item) {
          if (item != lastMapItem) {
            item.v = cc11001100_hook("item.v", item.v.concat(lastMapItem.v), "assign");
          }
        });
      }
      packagesIndex = cc11001100_hook("packagesIndex", [], "assign");
      each(requireConf.packages, function (packageConf) {
        var pkg = cc11001100_hook("pkg", packageConf, "var-init");
        if (typeof packageConf === "string") {
          pkg = cc11001100_hook("pkg", {
            name: cc11001100_hook("name", packageConf.split("/")[0], "object-key-init"),
            location: cc11001100_hook("location", packageConf, "object-key-init"),
            main: cc11001100_hook("main", "main", "object-key-init")
          }, "assign");
        }
        pkg.location = cc11001100_hook("pkg.location", pkg.location || pkg.name, "assign");
        pkg.main = cc11001100_hook("pkg.main", (pkg.main || "main").replace(/\.js$/i, ""), "assign");
        pkg.reg = cc11001100_hook("pkg.reg", createPrefixRegexp(pkg.name), "assign");
        packagesIndex.push(pkg);
      });
      packagesIndex.sort(descSorterByKOrName);
      urlArgsIndex = cc11001100_hook("urlArgsIndex", createKVSortedIndex(requireConf.urlArgs, 1), "assign");
      bundlesIndex = cc11001100_hook("bundlesIndex", {}, "assign");
      function bundlesIterator(id) {
        cc11001100_hook("id", id, "function-parameter");
        bundlesIndex[resolvePackageId(id)] = cc11001100_hook("bundlesIndex[resolvePackageId(id)]", key, "assign");
      }
      for (var key in requireConf.bundles) {
        each(requireConf.bundles[key], bundlesIterator);
      }
    }
    function indexRetrieve(value, index, hitBehavior) {
      cc11001100_hook("value", value, "function-parameter");
      cc11001100_hook("index", index, "function-parameter");
      cc11001100_hook("hitBehavior", hitBehavior, "function-parameter");
      each(index, function (item) {
        if (item.reg.test(value)) {
          hitBehavior(item.v, item.k, item);
          return false;
        }
      });
    }
    function toUrl(source, baseId) {
      cc11001100_hook("source", source, "function-parameter");
      cc11001100_hook("baseId", baseId, "function-parameter");
      var extReg = cc11001100_hook("extReg", /(\.[a-z0-9]+)$/i, "var-init");
      var queryReg = cc11001100_hook("queryReg", /(\?[^#]*)$/, "var-init");
      var extname = cc11001100_hook("extname", "", "var-init");
      var id = cc11001100_hook("id", source, "var-init");
      var query = cc11001100_hook("query", "", "var-init");
      if (queryReg.test(source)) {
        query = cc11001100_hook("query", RegExp.$1, "assign");
        source = cc11001100_hook("source", source.replace(queryReg, ""), "assign");
      }
      if (extReg.test(source)) {
        extname = cc11001100_hook("extname", RegExp.$1, "assign");
        id = cc11001100_hook("id", source.replace(extReg, ""), "assign");
      }
      if (baseId != null) {
        id = cc11001100_hook("id", normalize(id, baseId), "assign");
      }
      var url = cc11001100_hook("url", id, "var-init");
      var isPathMap;
      indexRetrieve(id, pathsIndex, function (value, key) {
        url = cc11001100_hook("url", url.replace(key, value), "assign");
        isPathMap = cc11001100_hook("isPathMap", 1, "assign");
      });
      if (!isPathMap) {
        indexRetrieve(id, packagesIndex, function (value, key, item) {
          url = cc11001100_hook("url", url.replace(item.name, item.location), "assign");
        });
      }
      if (!/^([a-z]{2,10}:\/)?\//i.test(url)) {
        url = cc11001100_hook("url", requireConf.baseUrl + url, "assign");
      }
      url += cc11001100_hook("url", extname + query, "assign");
      indexRetrieve(id, urlArgsIndex, function (value) {
        url += cc11001100_hook("url", (url.indexOf("?") > 0 ? "&" : "?") + value, "assign");
      });
      return url;
    }
    function createLocalRequire(baseId) {
      cc11001100_hook("baseId", baseId, "function-parameter");
      var requiredCache = cc11001100_hook("requiredCache", {}, "var-init");
      function req(requireId, callback) {
        cc11001100_hook("requireId", requireId, "function-parameter");
        cc11001100_hook("callback", callback, "function-parameter");
        if (typeof requireId === "string") {
          if (!requiredCache[requireId]) {
            var topLevelId = cc11001100_hook("topLevelId", normalize(requireId, baseId), "var-init");
            modTryInvokeFactory(topLevelId);
            if (!modIs(topLevelId, MODULE_DEFINED)) {
              throw new Error('[MODULE_MISS]"' + topLevelId + '" is not exists!');
            }
            requiredCache[requireId] = cc11001100_hook("requiredCache[requireId]", modModules[topLevelId].exports, "assign");
          }
          return requiredCache[requireId];
        } else if (requireId instanceof Array) {
          var pureModules = cc11001100_hook("pureModules", [], "var-init");
          var normalizedIds = cc11001100_hook("normalizedIds", [], "var-init");
          each(requireId, function (id, i) {
            var idInfo = cc11001100_hook("idInfo", parseId(id), "var-init");
            var absId = cc11001100_hook("absId", normalize(idInfo.mod, baseId), "var-init");
            var resId = cc11001100_hook("resId", idInfo.res, "var-init");
            var normalizedId = cc11001100_hook("normalizedId", absId, "var-init");
            if (resId) {
              var trueResId = cc11001100_hook("trueResId", absId + "!" + resId, "var-init");
              if (resId.indexOf(".") !== 0 && bundlesIndex[trueResId]) {
                absId = cc11001100_hook("absId", normalizedId = cc11001100_hook("normalizedId", trueResId, "assign"), "assign");
              } else {
                normalizedId = cc11001100_hook("normalizedId", null, "assign");
              }
            }
            normalizedIds[i] = cc11001100_hook("normalizedIds[i]", normalizedId, "assign");
            modFlagAutoDefine(absId);
            pureModules.push(absId);
          });
          nativeAsyncRequire(pureModules, function () {
            each(normalizedIds, function (id, i) {
              if (id == null) {
                id = cc11001100_hook("id", normalizedIds[i] = cc11001100_hook("normalizedIds[i]", normalize(requireId[i], baseId), "assign"), "assign");
                modFlagAutoDefine(id);
              }
            });
            nativeAsyncRequire(normalizedIds, callback, baseId);
            modAutoDefine();
          }, baseId);
          modAutoDefine();
        }
      }
      req.toUrl = cc11001100_hook("req.toUrl", function (id) {
        return toUrl(id, baseId || "");
      }, "assign");
      return req;
    }
    function normalize(id, baseId) {
      cc11001100_hook("id", id, "function-parameter");
      cc11001100_hook("baseId", baseId, "function-parameter");
      if (!id) {
        return "";
      }
      baseId = cc11001100_hook("baseId", baseId || "", "assign");
      var idInfo = cc11001100_hook("idInfo", parseId(id), "var-init");
      if (!idInfo) {
        return id;
      }
      var resourceId = cc11001100_hook("resourceId", idInfo.res, "var-init");
      var moduleId = cc11001100_hook("moduleId", relative2absolute(idInfo.mod, baseId), "var-init");
      indexRetrieve(baseId, mappingIdIndex, function (value) {
        indexRetrieve(moduleId, value, function (mdValue, mdKey) {
          moduleId = cc11001100_hook("moduleId", moduleId.replace(mdKey, mdValue), "assign");
        });
      });
      moduleId = cc11001100_hook("moduleId", resolvePackageId(moduleId), "assign");
      if (resourceId) {
        var mod = cc11001100_hook("mod", modIs(moduleId, MODULE_DEFINED) && actualGlobalRequire(moduleId), "var-init");
        resourceId = cc11001100_hook("resourceId", mod && mod.normalize ? mod.normalize(resourceId, function (resId) {
          return normalize(resId, baseId);
        }) : normalize(resourceId, baseId), "assign");
        moduleId += cc11001100_hook("moduleId", "!" + resourceId, "assign");
      }
      return moduleId;
    }
    function resolvePackageId(id) {
      cc11001100_hook("id", id, "function-parameter");
      each(packagesIndex, function (packageConf) {
        var name = cc11001100_hook("name", packageConf.name, "var-init");
        if (name === id) {
          id = cc11001100_hook("id", name + "/" + packageConf.main, "assign");
          return false;
        }
      });
      return id;
    }
    function relative2absolute(id, baseId) {
      cc11001100_hook("id", id, "function-parameter");
      cc11001100_hook("baseId", baseId, "function-parameter");
      if (id.indexOf(".") !== 0) {
        return id;
      }
      var segs = cc11001100_hook("segs", baseId.split("/").slice(0, -1).concat(id.split("/")), "var-init");
      var res = cc11001100_hook("res", [], "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < segs.length; i++) {
        var seg = cc11001100_hook("seg", segs[i], "var-init");
        switch (seg) {
          case ".":
            break;
          case "..":
            if (res.length && res[res.length - 1] !== "..") {
              res.pop();
            } else {
              res.push(seg);
            }
            break;
          default:
            seg && res.push(seg);
        }
      }
      return res.join("/");
    }
    function parseId(id) {
      cc11001100_hook("id", id, "function-parameter");
      var segs = cc11001100_hook("segs", id.split("!"), "var-init");
      if (segs[0]) {
        return {
          mod: cc11001100_hook("mod", segs[0], "object-key-init"),
          res: cc11001100_hook("res", segs[1], "object-key-init")
        };
      }
    }
    function kv2List(source, keyMatchable, allowAsterisk) {
      cc11001100_hook("source", source, "function-parameter");
      cc11001100_hook("keyMatchable", keyMatchable, "function-parameter");
      cc11001100_hook("allowAsterisk", allowAsterisk, "function-parameter");
      var list = cc11001100_hook("list", [], "var-init");
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          var item = cc11001100_hook("item", {
            k: cc11001100_hook("k", key, "object-key-init"),
            v: cc11001100_hook("v", source[key], "object-key-init")
          }, "var-init");
          list.push(item);
          if (keyMatchable) {
            item.reg = cc11001100_hook("item.reg", key === "*" && allowAsterisk ? /^/ : createPrefixRegexp(key), "assign");
          }
        }
      }
      return list;
    }
    function createPrefixRegexp(prefix) {
      cc11001100_hook("prefix", prefix, "function-parameter");
      return new RegExp("^" + prefix + "(/|$)");
    }
    function each(source, iterator) {
      cc11001100_hook("source", source, "function-parameter");
      cc11001100_hook("iterator", iterator, "function-parameter");
      if (source instanceof Array) {
        for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", source.length, "var-init"); i < len; i++) {
          if (iterator(source[i], i) === false) {
            break;
          }
        }
      }
    }
    function descSorterByKOrName(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var aValue = cc11001100_hook("aValue", a.k || a.name, "var-init");
      var bValue = cc11001100_hook("bValue", b.k || b.name, "var-init");
      if (bValue === "*") {
        return -1;
      }
      if (aValue === "*") {
        return 1;
      }
      return bValue.length - aValue.length;
    }
    var currentlyAddingScript;
    var interactiveScript;
    function getCurrentScript() {
      if (currentlyAddingScript) {
        return currentlyAddingScript;
      } else if (interactiveScript && interactiveScript.readyState === "interactive") {
        return interactiveScript;
      }
      var scripts = cc11001100_hook("scripts", document.getElementsByTagName("script"), "var-init");
      var scriptLen = cc11001100_hook("scriptLen", scripts.length, "var-init");
      while (scriptLen--) {
        var script = cc11001100_hook("script", scripts[scriptLen], "var-init");
        if (script.readyState === "interactive") {
          interactiveScript = cc11001100_hook("interactiveScript", script, "assign");
          return script;
        }
      }
    }
    var headElement = cc11001100_hook("headElement", document.getElementsByTagName("head")[0], "var-init");
    var baseElement = cc11001100_hook("baseElement", document.getElementsByTagName("base")[0], "var-init");
    if (baseElement) {
      headElement = cc11001100_hook("headElement", baseElement.parentNode, "assign");
    }
    function createScript(moduleId, onload) {
      cc11001100_hook("moduleId", moduleId, "function-parameter");
      cc11001100_hook("onload", onload, "function-parameter");
      var script = cc11001100_hook("script", document.createElement("script"), "var-init");
      script.setAttribute("data-require-id", moduleId);
      script.src = cc11001100_hook("script.src", toUrl(moduleId + ".js"), "assign");
      script.async = cc11001100_hook("script.async", true, "assign");
      if (script.readyState) {
        script.onreadystatechange = cc11001100_hook("script.onreadystatechange", innerOnload, "assign");
      } else {
        script.onload = cc11001100_hook("script.onload", innerOnload, "assign");
      }
      function innerOnload() {
        var readyState = cc11001100_hook("readyState", script.readyState, "var-init");
        if (typeof readyState === "undefined" || /^(loaded|complete)$/.test(readyState)) {
          script.onload = cc11001100_hook("script.onload", script.onreadystatechange = cc11001100_hook("script.onreadystatechange", null, "assign"), "assign");
          script = cc11001100_hook("script", null, "assign");
          onload();
        }
      }
      currentlyAddingScript = cc11001100_hook("currentlyAddingScript", script, "assign");
      baseElement ? headElement.insertBefore(script, baseElement) : headElement.appendChild(script);
      currentlyAddingScript = cc11001100_hook("currentlyAddingScript", null, "assign");
    }
    globalRequire.clearModule = cc11001100_hook("globalRequire.clearModule", function (ids) {
      if (!ids || !ids.length) {
        return;
      }
      each(ids, function (id) {
        if (modModules[id]) {
          delete modModules[id];
        }
        if (loadingModules[id]) {
          delete loadingModules[id];
        }
        return true;
      });
    }, "assign");
    if (!define) {
      define = cc11001100_hook("define", globalDefine, "assign");
      if (!require) {
        require = cc11001100_hook("require", globalRequire, "assign");
      }
      esl = cc11001100_hook("esl", globalRequire, "assign");
    }
    var mainModule;
    (function () {
      var scripts = cc11001100_hook("scripts", document.getElementsByTagName("script"), "var-init");
      var len = cc11001100_hook("len", scripts.length, "var-init");
      while (len--) {
        var script = cc11001100_hook("script", scripts[len], "var-init");
        if (mainModule = cc11001100_hook("mainModule", script.getAttribute("data-main"), "assign")) {
          break;
        }
      }
    })();
    mainModule && setTimeout(function () {
      globalRequire([mainModule]);
    }, 4);
  })(this);
  root.define = cc11001100_hook("root.define", define, "assign");
  root.require = cc11001100_hook("root.require", require, "assign");
  root.esl = cc11001100_hook("root.esl", esl, "assign");
})(window);