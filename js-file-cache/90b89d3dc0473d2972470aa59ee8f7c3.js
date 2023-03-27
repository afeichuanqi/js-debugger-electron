"use strict";

function _typeof(t) {
  cc11001100_hook("t", t, "function-parameter");
  return (_typeof = cc11001100_hook("_typeof", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, "assign"))(t);
}
!function () {
  function t(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var n = cc11001100_hook("n", window.translations, "var-init");
    pageCode && "PINS" === pageCode && DDSContext.hasOwnProperty("SO_SITE_IS_INSURANCE_ENABLED") && "TRUE" === DDSContext.SO_SITE_IS_INSURANCE_ENABLED.toUpperCase() && window.insuranceTranslations && "object" === _typeof(window.insuranceTranslations) && angular.extend(n, window.insuranceTranslations), pageCode && "EXTP" !== pageCode && window.ffTranslations && "object" === _typeof(window.ffTranslations) && angular.extend(n, window.ffTranslations), t.translations(DDSContext.LANGUAGE_FILE, n), t.preferredLanguage(DDSContext.LANGUAGE_FILE), t.useSanitizeValueStrategy(null), t.use(DDSContext.LANGUAGE_FILE), e.defaults.useXDomain = cc11001100_hook("e.defaults.useXDomain", !0, "assign"), delete e.defaults.headers.common["X-Requested-With"];
  }
  function e(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", "", "var-init");
    -1 != DDSContext.LANGUAGE_FILE.indexOf("CathayRWD_") ? e = cc11001100_hook("e", DDSContext.LANGUAGE_FILE.replace("CathayRWD_", ""), "assign") : -1 != DDSContext.LANGUAGE_FILE.indexOf("CathayRWDServicing_") && (e = cc11001100_hook("e", DDSContext.LANGUAGE_FILE.replace("CathayRWDServicing_", ""), "assign")), "in" == e.toLowerCase() && (e = cc11001100_hook("e", "id", "assign")), t.changeLocale(e);
  }
  angular.module("CathayPacificApp", ["pascalprecht.translate", "angularMoment", "ngSanitize", "rzSlider"]), angular.module("CathayPacificApp").config(t), t.$inject = cc11001100_hook("t.$inject", ["$translateProvider", "$httpProvider"], "assign"), angular.module("CathayPacificApp").run(e), e.$inject = cc11001100_hook("e.$inject", ["amMoment"], "assign"), angular.element(document).ready(function () {
    angular.bootstrap(document, ["CathayPacificApp"], {
      strictDi: cc11001100_hook("strictDi", !0, "object-key-init")
    });
  });
}();