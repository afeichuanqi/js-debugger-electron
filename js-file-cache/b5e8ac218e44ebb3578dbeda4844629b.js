window.queueit_clientside_config = cc11001100_hook("window.queueit_clientside_config", {
  "customerId": cc11001100_hook("customerId", "cathaypacific", "object-key-init"),
  "integrations": cc11001100_hook("integrations", [{
    "name": cc11001100_hook("name", "CX Master Login & AFR - de", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "de-DE", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/de_CH/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/de_DE/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/de_DE/book-a-trip/redeem-flights/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/de_CH/book-a-trip/redeem-flights/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - es", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "es-ES", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/es_ES", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/es_ES/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - fr", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "fr-FR", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/fr_FR", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/fr_FR", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - zh", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "zh-HK", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/zh_HK/book-a-trip/redeem-flights/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/zh_TW/book-a-trip/redeem-flights/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/zh_HK/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/zh_TW/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - id", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "id-ID", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/de_DE", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/id_ID", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - it", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "it-IT", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/it_IT", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/it_IT", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - ja", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "ja-JP", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ja_JP", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ja_JP", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - ko", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "ko-KR", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ko_KR", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ko_KR", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - nl", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "nl-NL", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/nl_NL", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/nl_NL", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - sc", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "zh-CN", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/sc_CN", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/sc_CN", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - th", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "th-TH", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/th_TH", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/th_TH", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - vi", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "vi-VN", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/vi_VN", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/vi_VN", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - ru", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "ru-RU", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ru_RU", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ru_RU", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "CX Master Login & AFR - en", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "mastersignin", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "en-GB", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/redeem-flight-awards.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] HKAA Lucky Draw Ticket Redeem - en", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "hkaaredeem202210", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "layoutName": cc11001100_hook("layoutName", "CX HKAA Lucky Draw Ticket Redeem", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "en-GB", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_HK", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/offers/hkaa-vaccination-lucky-draw/redeem-ticket.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] HKAA Lucky Draw Ticket Redeem - zh", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "hkaaredeem202210", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "layoutName": cc11001100_hook("layoutName", "CX HKAA Lucky Draw Ticket Redeem", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "zh-HK", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/zh_HK", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/offers/hkaa-vaccination-lucky-draw/redeem-ticket.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - zh", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "zh-HK", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/zh_HK.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/zh_TW.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - ja", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "ja-JP", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ja_JP.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - ko", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "ko-KR", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ko_KR.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - sc", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "zh-CN", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/sc_CN.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - th", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "th-TH", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/th_TH.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - de", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "de-DE", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/de_CH.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/de_DE.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - es", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "es-ES", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/es_ES.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - fr", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "fr-FR", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/fr_FR.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - vi", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "vi-VN", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/vi_VN.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - ru", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "ru-RU", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ru_RU.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - nl", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "nl-NL", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/nl_NL.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - id", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "id-ID", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/id_ID.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - it", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "it-IT", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/it_IT.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Homepage - www - en", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "cxpr01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "en-GB", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_HK.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_AU.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_BH.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_BD.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_BE.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_KH.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_CA.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_CN.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_DK.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_IN.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_ID.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_IE.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_IL.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_JP.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_KR.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_MY.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_MV.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_MM.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_NP.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_NZ.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_PH.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_SG.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_ZA.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_LK.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_TW.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_TH.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_AE.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_GB.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_US.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_VN.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - zh", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "zh-HK", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/zh_HK/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/zh_TW/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - ja", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "ja-JP", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ja_JP/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - ko", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "ko-KR", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ko_KR/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - sc", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "zh-CN", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/sc_CN/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - th", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "th-TH", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/th_TH/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - de", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "de-DE", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/de_DE/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/de_CH/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - es", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "es-ES", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/es_ES/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - fr", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "fr-FR", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/fr_FR/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - vi", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "vi-VN", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/vi_VN/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - ru", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "ru-RU", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/ru_RU/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - nl", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "nl-NL", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/nl_NL/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - id", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "id-ID", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/id_ID/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - it", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "it-IT", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/it_IT/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Book a trip - en", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "bookatrip", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "en-GB", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_HK/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_AU/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_BH/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_BD/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_BE/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_KH/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_CA/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_CN/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_DK/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_IN/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_ID/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_IE/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_IL/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_JP/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_KR/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_MY/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_MV/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_MM/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_NP/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_NZ/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_PH/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_SG/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_ZA/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_LK/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_TW/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_TH/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_AE/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_GB/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_US/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_VN/book-a-trip.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", false, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] hello_cancel-queue", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Cancel", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "hellosea07", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/campaigns/world-of-winners", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/registration-confirmation.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", false, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Hello - en_KH", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "hellosea07", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "layoutName": cc11001100_hook("layoutName", "SEA Open House Cambodia", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "en-GB", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_KH/membership/sign-up/campaign.html?name=2303-SEA-HKAA_Hello_HongKong", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/campaigns/world-of-winners/en_KH/registration.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_KH/sign-in/campaigns/world-of-winners.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Hello - en_VN", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "hellosea07", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "layoutName": cc11001100_hook("layoutName", "SEA Open House Vietnam", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "en-GB", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/campaigns/world-of-winners/en_VN/registration.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_VN/membership/sign-up/campaign.html?name=2303-SEA-HKAA_Hello_HongKong", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/en_VN/sign-in/campaigns/world-of-winners.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Hello - vi_VN", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "hellosea07", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "vi-VN", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/vi_VN/sign-in/campaigns/world-of-winners.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/cx/vi_VN/membership/sign-up/campaign.html?name=2303-SEA-HKAA_Hello_HongKong", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/campaigns/world-of-winners/vi_VN/registration.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Hello - en", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "hellosea07", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "layoutName": cc11001100_hook("layoutName", "SEA Open House Philippines", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "en-GB", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "EventTargetUrl", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "https://www.cathaypacific.com/cx/", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in/campaigns/world-of-winners.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/campaigns/world-of-winners/en", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/registration.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "https://www.cathaypacific.com/cx/en", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/sign-in/campaigns/world-of-winners.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "www.cathaypacific.com/campaigns/world-of-winners/", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/registration.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "window.cxQueueitReady = true;", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "window.cxQueueitReady = 'disabled';", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "window.cxQueueitReady  = 'timeout';", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Hello HK Ticket Redeem - th", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "helloredeem", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "th-TH", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "flights.cathaypacific.com/th_TH/offers/world-of-winners/redeem-ticket.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Hello HK Ticket Redeem - en", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "helloredeem", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 30, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "flights.cathaypacific.com/", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/offers/world-of-winners/redeem-ticket.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }, {
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "flights.cathaypacific.com/en_", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "/offers/world-of-winners/redeem-ticket.html", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "hke_lucky_draw_js_queue_001", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "hke01", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "hkexpress.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.fanfares.cathaypacific.com", "object-key-init"),
    "layoutName": cc11001100_hook("layoutName", "HKEXPRESS Vaccination", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 10, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "hkexpress.com/", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "promos/covid-19-vaccination-lucky-draw-register", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", ".hkexpress.com/", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "members/login#vaccine-form", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "hke_loading_js", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Queue", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "hkeloading", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "hkexpress.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.fanfares.cathaypacific.com", "object-key-init"),
    "forcedTargetUrl": cc11001100_hook("forcedTargetUrl", "", "object-key-init"),
    "culture": cc11001100_hook("culture", "", "object-key-init"),
    "extendValidity": cc11001100_hook("extendValidity", false, "object-key-init"),
    "validity": cc11001100_hook("validity", 10, "object-key-init"),
    "redirectLogic": cc11001100_hook("redirectLogic", "AllowTParameter", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", ".hkexpress.com/", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", ".testhkexpress.com/", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }, {
        "operator": cc11001100_hook("operator", "Contains", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "en-kh", "object-key-init"),
        "urlPart": cc11001100_hook("urlPart", "PageUrl", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "UrlValidator", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "Or", "object-key-init")
    }], "object-key-init"),
    "onVerified": cc11001100_hook("onVerified", "", "object-key-init"),
    "onDisabled": cc11001100_hook("onDisabled", "", "object-key-init"),
    "onTimeout": cc11001100_hook("onTimeout", "", "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", true, "object-key-init")
  }, {
    "name": cc11001100_hook("name", "[CX] Laisee - Got Laisee Cookie", "object-key-init"),
    "actionType": cc11001100_hook("actionType", "Cancel", "object-key-init"),
    "eventId": cc11001100_hook("eventId", "laisee202304", "object-key-init"),
    "cookieDomain": cc11001100_hook("cookieDomain", "cathaypacific.com", "object-key-init"),
    "isCookieSecure": cc11001100_hook("isCookieSecure", false, "object-key-init"),
    "queueDomain": cc11001100_hook("queueDomain", "queue.cathaypacific.com", "object-key-init"),
    "triggers": cc11001100_hook("triggers", [{
      "triggerParts": cc11001100_hook("triggerParts", [{
        "operator": cc11001100_hook("operator", "Equals", "object-key-init"),
        "valueToCompare": cc11001100_hook("valueToCompare", "1", "object-key-init"),
        "validatorType": cc11001100_hook("validatorType", "CookieValidator", "object-key-init"),
        "cookieName": cc11001100_hook("cookieName", "got_laisee", "object-key-init"),
        "isNegative": cc11001100_hook("isNegative", false, "object-key-init"),
        "isIgnoreCase": cc11001100_hook("isIgnoreCase", true, "object-key-init")
      }], "object-key-init"),
      "logicalOperator": cc11001100_hook("logicalOperator", "And", "object-key-init")
    }], "object-key-init"),
    "removeTokenFromUrl": cc11001100_hook("removeTokenFromUrl", false, "object-key-init")
  }], "object-key-init")
}, "assign");
QueueIt.Javascript.PageEventIntegration.initQueueClient(window.queueit_clientside_config);