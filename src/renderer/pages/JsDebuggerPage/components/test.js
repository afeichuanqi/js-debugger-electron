/**
 * Node.js module for Forge.
 *
 * @author Dave Longley
 *
 * Copyright 2011-2014 Digital Bazaar, Inc.
 */
(function () {
  const name = 'forge';
  if (typeof define !== 'function') {
    // NodeJS -> AMD
    if (typeof module === 'object' && module.exports) {
      var nodeJS = true;
      define = function (ids, factory) {
        factory(require, module);
      };
    } else {
      // <script>
      if (typeof forge === 'undefined') {
        // set to true to disable native code if even it's available
        forge = { disableNativeCode: false };
      }
      return;
    }
  }
  // AMD
  let deps;
  const defineFunc = function (require, module) {
    module.exports = function (forge) {
      console.log(deps);
      const mods = deps.map(function (dep) {
        return require(dep);
      });
      // handle circular dependencies
      forge = forge || {};
      forge.defined = forge.defined || {};
      if (forge.defined[name]) {
        return forge[name];
      }
      forge.defined[name] = true;
      for (let i = 0; i < mods.length; ++i) {
        if (typeof mods[i] === 'function') {
          mods[i](forge);
        }
      }
      return forge;
    };
    // set to true to disable native code if even it's available
    module.exports.disableNativeCode = false;
    module.exports(module.exports);
  };
  const tmpDefine = define;
  define = function (ids, factory) {
    deps = typeof ids === 'string' ? factory.slice(2) : ids.slice(2);
    if (nodeJS) {
      delete define;
      return tmpDefine.apply(null, Array.prototype.slice.call(arguments, 0));
    }
    define = tmpDefine;
    return define.apply(null, Array.prototype.slice.call(arguments, 0));
  };
  define(['require', 'module', './aes'], function () {
    defineFunc.apply(null, Array.prototype.slice.call(arguments, 0));
  });
})();
