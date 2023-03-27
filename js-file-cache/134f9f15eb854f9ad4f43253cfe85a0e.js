"use strict";

!function () {
  function Te(_e, t, pe, me, Ee, f, g, m, y) {
    cc11001100_hook("_e", _e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("pe", pe, "function-parameter");
    cc11001100_hook("me", me, "function-parameter");
    cc11001100_hook("Ee", Ee, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("m", m, "function-parameter");
    cc11001100_hook("y", y, "function-parameter");
    var a,
      ge = cc11001100_hook("ge", this, "var-init"),
      Oe = cc11001100_hook("Oe", new Object(), "var-init"),
      X = cc11001100_hook("X", (ge.systemName = cc11001100_hook("ge.systemName", "RIBE", "assign"), ge.context = cc11001100_hook("ge.context", me.getContext(), "assign"), ge.profile = cc11001100_hook("ge.profile", me.getProfile(), "assign"), ge.isBOHSelected = cc11001100_hook("ge.isBOHSelected", !(!ge.context.BOH_PAY_LATER || "TRUE" !== ge.context.BOH_PAY_LATER.toUpperCase()), "assign"), m.$on("_boh_activated", function (e, t) {
        ge.isBOHSelected = cc11001100_hook("ge.isBOHSelected", t, "assign");
      }), ge.stream = cc11001100_hook("ge.stream", "REVENUE", "assign"), ge.stream_id = cc11001100_hook("ge.stream_id", ge.context.BOH_PAY_LATER && "TRUE" === ge.context.BOH_PAY_LATER.toUpperCase() ? "BOH" : "REV", "assign"), ge.flowName = cc11001100_hook("ge.flowName", "REVENUE_" + ge.context.TAG_FLOW_NAME, "assign"), ge.flowID = cc11001100_hook("ge.flowID", ge.context.TAG_FLOW_NAME_SHORT, "assign"), ge.cabinTypeFullName = cc11001100_hook("ge.cabinTypeFullName", "", "assign"), ge.selectedFFCode = cc11001100_hook("ge.selectedFFCode", "", "assign"), ge.paxTypeFullText = cc11001100_hook("ge.paxTypeFullText", {
        ADT: cc11001100_hook("ADT", "ADULT", "object-key-init"),
        CHD: cc11001100_hook("CHD", "CHILD", "object-key-init"),
        INF: cc11001100_hook("INF", "INFANT", "object-key-init")
      }, "assign"), ge.fareService = cc11001100_hook("ge.fareService", "", "assign"), ge.paxCombination = cc11001100_hook("ge.paxCombination", function () {
        try {
          var e,
            t = cc11001100_hook("t", 0, "var-init"),
            a = cc11001100_hook("a", ["0", "0", "0", "0", "0", "0", "0", "0", "0"], "var-init");
          for (e = cc11001100_hook("e", Number(ge.context.nbAdultWoB15), "assign"); t < e;) a[t++] = cc11001100_hook("a[t++]", "A", "assign");
          for (e += cc11001100_hook("e", Number(ge.context.nbB15), "assign"); t < e;) a[t++] = cc11001100_hook("a[t++]", "Y", "assign");
          for (e += cc11001100_hook("e", Number(ge.context.nbChd), "assign"); t < e;) a[t++] = cc11001100_hook("a[t++]", "C", "assign");
          for (e += cc11001100_hook("e", Number(ge.context.nbInf), "assign"); t < e;) a[t++] = cc11001100_hook("a[t++]", "I", "assign");
          return a.join("");
        } catch (e) {}
      }(), "assign"), ge.seatCardData = cc11001100_hook("ge.seatCardData", "", "assign"), ge.BOHPrice = cc11001100_hook("ge.BOHPrice", ge.context.WDS_BOH_FEE || "0", "assign"), ge.totalPassengerCount = cc11001100_hook("ge.totalPassengerCount", 0, "assign"), ge.ExlSelectedCount = cc11001100_hook("ge.ExlSelectedCount", 0, "assign"), ge.ExlAmountWhileAdd = cc11001100_hook("ge.ExlAmountWhileAdd", 0, "assign"), ge.InsProductObj = cc11001100_hook("ge.InsProductObj", "", "assign"), ge.ExlProducts = cc11001100_hook("ge.ExlProducts", {}, "assign"), ge.ExlRemoveSegment = cc11001100_hook("ge.ExlRemoveSegment", "", "assign"), ge.ExlRemovedPassenger = cc11001100_hook("ge.ExlRemovedPassenger", "", "assign"), ge.versionValue = cc11001100_hook("ge.versionValue", "", "assign"), ge.totalExlPrice = cc11001100_hook("ge.totalExlPrice", 0, "assign"), ge.exlCurrency = cc11001100_hook("ge.exlCurrency", "", "assign"), ge.exlUnitPrice = cc11001100_hook("ge.exlUnitPrice", 0, "assign"), ge.segmentedAirports = cc11001100_hook("ge.segmentedAirports", "", "assign"), ge.tzOffset = cc11001100_hook("ge.tzOffset", "", "assign"), ge.signInMethod = cc11001100_hook("ge.signInMethod", "", "assign"), ge.signInBannerOpen = cc11001100_hook("ge.signInBannerOpen", !1, "assign"), ge.signInAsGuest = cc11001100_hook("ge.signInAsGuest", !1, "assign"), ge.pageCode = cc11001100_hook("ge.pageCode", me.getPageCode(), "assign"), ge.baseService = cc11001100_hook("ge.baseService", _e, "assign"), ge.fare = cc11001100_hook("ge.fare", _e.getFareService(), "assign"), ge.trip = cc11001100_hook("ge.trip", _e.getTrip(), "assign"), ge.traveller = cc11001100_hook("ge.traveller", _e.getTraveller(), "assign"), ge.currency = cc11001100_hook("ge.currency", ge.fare && ge.fare.currency ? ge.fare.currency : "", "assign"), ge.traveller && ge.traveller.travellersArray && (ge.totalPassengerCount = cc11001100_hook("ge.totalPassengerCount", ge.traveller.travellersArray.length, "assign")), ge.versionValue = cc11001100_hook("ge.versionValue", window.staticFilesPath.split("/")[2], "assign"), ge.trackTwoFaPopupOpen = cc11001100_hook("ge.trackTwoFaPopupOpen", function () {
        try {
          void 0 === Oe.page && (e = cc11001100_hook("e", ye(), "assign"));
          var e,
            t,
            a = cc11001100_hook("a", "", "var-init"),
            o = cc11001100_hook("o", getViewport(), "var-init"),
            n = cc11001100_hook("n", (t = cc11001100_hook("t", "ZH_CN" === (t = cc11001100_hook("t", ge.context.LANGUAGE_FILE.replace("CathayRWD_", "").toUpperCase(), "assign")) ? "sc" : "ZH_TW" === t ? "zh" : t.split("_")[0].toLowerCase(), "assign"), a = cc11001100_hook("a", o.largeViewport ? "LARGE" : o.mediumViewport ? "MEDIUM" : "SMALL", "assign"), {
              page: {
                timestamp_local: cc11001100_hook("timestamp_local", e, "object-key-init"),
                brand: cc11001100_hook("brand", ge.context.SKIN, "object-key-init"),
                page_id: cc11001100_hook("page_id", ge.systemName + "/" + ge.stream + "/" + ge.flowName + "/2FA_SEND_CODE/", "object-key-init"),
                previous_page_id: cc11001100_hook("previous_page_id", ge.systemName + "/" + ge.stream + "/" + ge.flowName + "/PASSENGER_INFO/", "object-key-init"),
                page_id_slashified: cc11001100_hook("page_id_slashified", ge.systemName + "/" + ge.stream + "/" + ge.flowName + "/2FA_SEND_CODE/", "object-key-init"),
                stream: cc11001100_hook("stream", ge.stream_id, "object-key-init"),
                flow: cc11001100_hook("flow", ge.flowID, "object-key-init"),
                page_code: cc11001100_hook("page_code", ge.pageCode, "object-key-init"),
                page_action: cc11001100_hook("page_action", "", "object-key-init"),
                country: cc11001100_hook("country", ge.context.MARKET, "object-key-init"),
                language: cc11001100_hook("language", t, "object-key-init"),
                locale: cc11001100_hook("locale", t + "_" + ge.context.MARKET, "object-key-init"),
                mobile_app_screen_view: cc11001100_hook("mobile_app_screen_view", "false", "object-key-init"),
                viewport: cc11001100_hook("viewport", a, "object-key-init")
              }
            }), "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.view) && cxTealium.utag.view(n);
        } catch (e) {}
      }, "assign"), ge.trackTwoFaSendOtpFailure = cc11001100_hook("ge.trackTwoFaSendOtpFailure", function (e) {
        try {
          var t = cc11001100_hook("t", "2FA::VERIFY_CODE", "var-init"),
            a = cc11001100_hook("a", {
              errors: {
                error_code: cc11001100_hook("error_code", t = cc11001100_hook("t", e.code ? t : t + "::" + e.code, "assign"), "object-key-init"),
                error_category: cc11001100_hook("error_category", "ERROR::RIBE", "object-key-init"),
                error_description: cc11001100_hook("error_description", e.message, "object-key-init")
              }
            }, "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(a);
        } catch (e) {}
      }, "assign"), ge.trackTwoFaVerifyOtpError = cc11001100_hook("ge.trackTwoFaVerifyOtpError", function (e) {
        try {
          var t = cc11001100_hook("t", "2FA::VERIFY_CODE", "var-init"),
            a = cc11001100_hook("a", {
              errors: {
                error_code: cc11001100_hook("error_code", t = cc11001100_hook("t", e.code ? t : t + "::" + e.code, "assign"), "object-key-init"),
                error_category: cc11001100_hook("error_category", "ERROR::RIBE", "object-key-init"),
                error_description: cc11001100_hook("error_description", e.message, "object-key-init")
              }
            }, "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(a);
        } catch (e) {}
      }, "assign"), ge.trackTwoFaVerifyOtpPopupOpen = cc11001100_hook("ge.trackTwoFaVerifyOtpPopupOpen", function () {
        try {
          void 0 === Oe.page && (e = cc11001100_hook("e", ye(), "assign"));
          var e,
            t,
            a = cc11001100_hook("a", "", "var-init"),
            o = cc11001100_hook("o", getViewport(), "var-init"),
            n = cc11001100_hook("n", (t = cc11001100_hook("t", "ZH" == (t = cc11001100_hook("t", ge.context.LANGUAGE_FILE.replace("CathayRWD_", "").toUpperCase(), "assign")).split("_")[0] ? t.split("_")[1] : t.split("_")[0], "assign"), a = cc11001100_hook("a", o.largeViewport ? "LARGE" : o.mediumViewport ? "MEDIUM" : "SMALL", "assign"), {
              page: {
                timestamp_local: cc11001100_hook("timestamp_local", e, "object-key-init"),
                brand: cc11001100_hook("brand", ge.context.SKIN, "object-key-init"),
                page_id: cc11001100_hook("page_id", ge.systemName + "/" + ge.stream + "/" + ge.flowName + "/2FA_VERIFY_CODE/", "object-key-init"),
                previous_page_id: cc11001100_hook("previous_page_id", ge.systemName + "/" + ge.stream + "/" + ge.flowName + "/PASSENGER_INFO/", "object-key-init"),
                page_id_slashified: cc11001100_hook("page_id_slashified", ge.systemName + "/" + ge.stream + "/" + ge.flowName + "/2FA_VERIFY_CODE/", "object-key-init"),
                stream: cc11001100_hook("stream", ge.stream_id, "object-key-init"),
                flow: cc11001100_hook("flow", ge.flowID, "object-key-init"),
                page_code: cc11001100_hook("page_code", ge.pageCode, "object-key-init"),
                page_action: cc11001100_hook("page_action", "", "object-key-init"),
                country: cc11001100_hook("country", ge.context.MARKET, "object-key-init"),
                language: cc11001100_hook("language", t, "object-key-init"),
                locale: cc11001100_hook("locale", t + "_" + ge.context.MARKET, "object-key-init"),
                mobile_app_screen_view: cc11001100_hook("mobile_app_screen_view", "false", "object-key-init"),
                viewport: cc11001100_hook("viewport", a, "object-key-init")
              }
            }), "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.view) && cxTealium.utag.view(n);
        } catch (e) {}
      }, "assign"), ge.trackTwoFaSendOtp = cc11001100_hook("ge.trackTwoFaSendOtp", function () {
        try {
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "2FA::SEND-CODE", "object-key-init"),
              event_label: cc11001100_hook("event_label", "", "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          });
        } catch (e) {}
      }, "assign"), ge.trackTwoFaOtpVerify = cc11001100_hook("ge.trackTwoFaOtpVerify", function (e) {
        try {
          var t = cc11001100_hook("t", {
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "2FA::VERIFY", "object-key-init"),
              event_label: cc11001100_hook("event_label", "" + e, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }, "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(t);
        } catch (e) {}
      }, "assign"), ge.updateApplicationObj = cc11001100_hook("ge.updateApplicationObj", T, "assign"), ge.updateCollectionObj = cc11001100_hook("ge.updateCollectionObj", Z, "assign"), ge.updateCustomDataObj = cc11001100_hook("ge.updateCustomDataObj", z, "assign"), ge.updateErrorObj = cc11001100_hook("ge.updateErrorObj", D, "assign"), ge.updateItineraryObj = cc11001100_hook("ge.updateItineraryObj", I, "assign"), ge.updateItineraryCabinName = cc11001100_hook("ge.updateItineraryCabinName", function (e) {
        var t = cc11001100_hook("t", [], "var-init");
        if (e.selectedReco && e.selectedReco.rbdsPerBound) {
          for (var a = cc11001100_hook("a", 0, "var-init"); a < e.selectedReco.rbdsPerBound.length; a++) for (var o = cc11001100_hook("o", 0, "var-init"); o < e.selectedReco.rbdsPerBound[a].length; o++) t.push(e.selectedReco.rbdsPerBound[a][o].cabin);
          (window.cxDataLayer && window.cxDataLayer.itinerary && window.cxDataLayer.itinerary.cabin && window.cxDataLayer.itinerary.cabin_fullname || !window.cxDataLayer.itinerary.cabin && !window.cxDataLayer.itinerary.cabin_fullname) && (t && 0 != t.length && -1 < t.indexOf("ECO") ? (window.cxDataLayer.itinerary.cabin = cc11001100_hook("window.cxDataLayer.itinerary.cabin", "Y", "assign"), window.cxDataLayer.itinerary.cabin_fullname = cc11001100_hook("window.cxDataLayer.itinerary.cabin_fullname", "ECONOMY", "assign")) : t && 0 != t.length && -1 < t.indexOf("PEY") ? (window.cxDataLayer.itinerary.cabin = cc11001100_hook("window.cxDataLayer.itinerary.cabin", "W", "assign"), window.cxDataLayer.itinerary.cabin_fullname = cc11001100_hook("window.cxDataLayer.itinerary.cabin_fullname", "PEY", "assign")) : t && 0 != t.length && -1 < t.indexOf("BUS") ? (window.cxDataLayer.itinerary.cabin = cc11001100_hook("window.cxDataLayer.itinerary.cabin", "C", "assign"), window.cxDataLayer.itinerary.cabin_fullname = cc11001100_hook("window.cxDataLayer.itinerary.cabin_fullname", "BUSINESS", "assign")) : t && 0 != t.length && -1 < t.indexOf("FIR") && (window.cxDataLayer.itinerary.cabin = cc11001100_hook("window.cxDataLayer.itinerary.cabin", "F", "assign"), window.cxDataLayer.itinerary.cabin_fullname = cc11001100_hook("window.cxDataLayer.itinerary.cabin_fullname", "FIRST", "assign"))), t && 0 != t.length && -1 < t.indexOf("PEY") && window.cxDataLayer.itinerary && window.cxDataLayer.itinerary.cabin && window.cxDataLayer.itinerary.cabin_fullname && (window.cxDataLayer.itinerary.cabin = cc11001100_hook("window.cxDataLayer.itinerary.cabin", "W", "assign"), window.cxDataLayer.itinerary.cabin_fullname = cc11001100_hook("window.cxDataLayer.itinerary.cabin_fullname", "PEY", "assign"), sessionStorage.setItem("cabin", JSON.stringify(window.cxDataLayer.itinerary.cabin)), sessionStorage.setItem("cabin_fullname", JSON.stringify(window.cxDataLayer.itinerary.cabin_fullname))), t && 0 != t.length && -1 < t.indexOf("BUS") && window.cxDataLayer.itinerary && window.cxDataLayer.itinerary.cabin && window.cxDataLayer.itinerary.cabin_fullname && (window.cxDataLayer.itinerary.cabin = cc11001100_hook("window.cxDataLayer.itinerary.cabin", "C", "assign"), window.cxDataLayer.itinerary.cabin_fullname = cc11001100_hook("window.cxDataLayer.itinerary.cabin_fullname", "BUSINESS", "assign"), sessionStorage.setItem("cabin", JSON.stringify(window.cxDataLayer.itinerary.cabin)), sessionStorage.setItem("cabin_fullname", JSON.stringify(window.cxDataLayer.itinerary.cabin_fullname))), t && 0 != t.length && -1 < t.indexOf("FIR") && window.cxDataLayer.itinerary && window.cxDataLayer.itinerary.cabin && window.cxDataLayer.itinerary.cabin_fullname && (window.cxDataLayer.itinerary.cabin = cc11001100_hook("window.cxDataLayer.itinerary.cabin", "F", "assign"), window.cxDataLayer.itinerary.cabin_fullname = cc11001100_hook("window.cxDataLayer.itinerary.cabin_fullname", "FIRST", "assign"), sessionStorage.setItem("cabin", JSON.stringify(window.cxDataLayer.itinerary.cabin)), sessionStorage.setItem("cabin_fullname", JSON.stringify(window.cxDataLayer.itinerary.cabin_fullname)));
        }
      }, "assign"), ge.updateOfferObj = cc11001100_hook("ge.updateOfferObj", x, "assign"), ge.updateOfferObjDiscount = cc11001100_hook("ge.updateOfferObjDiscount", A, "assign"), ge.updateOwdPromoOfferObj = cc11001100_hook("ge.updateOwdPromoOfferObj", b, "assign"), ge.updateProductsObj = cc11001100_hook("ge.updateProductsObj", F, "assign"), ge.updateRegistrationObj = cc11001100_hook("ge.updateRegistrationObj", v, "assign"), ge.updateUTMObj = cc11001100_hook("ge.updateUTMObj", R, "assign"), ge.initTagmanager = cc11001100_hook("ge.initTagmanager", S, "assign"), ge.bootstrapTagManager = cc11001100_hook("ge.bootstrapTagManager", e, "assign"), ge.addUtagJS = cc11001100_hook("ge.addUtagJS", function (e) {
        try {
          var t,
            a,
            o = cc11001100_hook("o", e || "disabled", "var-init");
          void 0 !== o && "disabled" !== o && (t = cc11001100_hook("t", "//tags.tiqcdn.com/utag/cx/web/" + o.toLowerCase() + "/utag.js", "assign"), (a = cc11001100_hook("a", $("#utag"), "assign")).src = cc11001100_hook("(a = $(\"#utag\")).src", t, "assign"), a.type = cc11001100_hook("a.type", "text/javascript", "assign"), a.async = cc11001100_hook("a.async", !0, "assign"));
        } catch (e) {}
      }, "assign"), ge.updatePageView = cc11001100_hook("ge.updatePageView", function (e, t, a) {
        try {
          var o,
            n = cc11001100_hook("n", ye(), "var-init"),
            i = cc11001100_hook("i", "", "var-init"),
            r = cc11001100_hook("r", getViewport(), "var-init");
          i = cc11001100_hook("i", r.largeViewport ? "LARGE" : r.mediumViewport ? "MEDIUM" : "SMALL", "assign"), o = cc11001100_hook("o", "ZH" == (o = cc11001100_hook("o", ge.context.LANGUAGE_FILE.replace("CathayRWD_", "").toUpperCase(), "assign")).split("_")[0] ? o.split("_")[1] : o.split("_")[0], "assign"), window.cxTealium = cc11001100_hook("window.cxTealium", function (e) {
            return e || {
              utag: {
                view: function (e) {
                  (e = cc11001100_hook("e", e || {}, "assign"))["ut.event"] = cc11001100_hook("(e = e || {})[\"ut.event\"]", "view", "assign"), window.udos = cc11001100_hook("window.udos", window.udos || [], "assign"), window.udos.push(e);
                },
                link: function (e) {
                  (e = cc11001100_hook("e", e || {}, "assign"))["ut.event"] = cc11001100_hook("(e = e || {})[\"ut.event\"]", "link", "assign"), window.udos = cc11001100_hook("window.udos", window.udos || [], "assign"), window.udos.push(e);
                }
              }
            };
          }(window.cxTealium), "assign"), ("false" == window.lateLoginStatus || DDSProfile) && ge.isTrue && (ge.isTrue = cc11001100_hook("ge.isTrue", !1, "assign"), cxTealium) && "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.view) && cxTealium.utag.view(window.cxDataLayer), ge.context.SKIN, ge.systemName, ge.stream, ge.flowName, ge.systemName, ge.stream, ge.flowName, ge.systemName, ge.stream, ge.flowName, ge.systemName, ge.systemName, ge.stream, ge.flowName, ge.systemName, ge.systemName, ge.stream_id, ge.flowID, ge.pageCode, ge.context.MARKET, ge.context.MARKET;
          Oe.page && (Oe.page.page_name || Oe.page.page_id) && (Oe.page.page_name = cc11001100_hook("Oe.page.page_name", Oe.page.page_name.replace("ENFORCED_LOGIN", "PASSENGER"), "assign"), Oe.page.page_id = cc11001100_hook("Oe.page.page_id", Oe.page.page_id.replace("ENFORCED_LOGIN", "PASSENGER"), "assign")), "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.view) && cxTealium.utag.view({
            page: {
              page_name: cc11001100_hook("page_name", ge.systemName + " - " + a, "object-key-init")
            }
          });
        } catch (e) {}
      }, "assign"), ge.updateUpsellObj = cc11001100_hook("ge.updateUpsellObj", function (e, t, a, o, n, i) {}, "assign"), ge.getFormattedDate = cc11001100_hook("ge.getFormattedDate", ye, "assign"), ge.updateSearchObj = cc11001100_hook("ge.updateSearchObj", function (e) {
        try {
          ge.isOWDPromoFlow ? Oe.search.params.result.total = cc11001100_hook("Oe.search.params.result.total", e, "assign") : Oe.search.results.total = cc11001100_hook("Oe.search.results.total", e, "assign");
        } catch (e) {}
      }, "assign"), ge.updateOneClickCardObj = cc11001100_hook("ge.updateOneClickCardObj", function (e, t) {
        try {
          void 0 !== e && void 0 !== t && ("SAVE_CARD" == e ? cxTealium.utag.link({
            event: {
              event_action: cc11001100_hook("event_action", "PAYMENT::SAVE-CARD", "object-key-init"),
              event_category: cc11001100_hook("event_category", "RIBE", "object-key-init"),
              event_label: cc11001100_hook("event_label", t.saved_card, "object-key-init")
            }
          }) : "USE_CARD" == e ? cxTealium.utag.link({
            event: {
              event_action: cc11001100_hook("event_action", "PAYMENT::STORED-CARD", "object-key-init"),
              event_category: cc11001100_hook("event_category", "RIBE", "object-key-init"),
              event_label: cc11001100_hook("event_label", t.saved_card_count, "object-key-init")
            }
          }) : "DELETE_CARD" == e && cxTealium.utag.link({
            event: {
              event_action: cc11001100_hook("event_action", "PAYMENT::DEL-CARD", "object-key-init"),
              event_category: cc11001100_hook("event_category", "RIBE", "object-key-init"),
              event_label: cc11001100_hook("event_label", t.delete_card_count, "object-key-init")
            }
          }));
        } catch (e) {}
      }, "assign"), ge.updateGfsPopupOpen = cc11001100_hook("ge.updateGfsPopupOpen", function (e, t, a, o, n, i, r) {
        try {
          var c = cc11001100_hook("c", {
            custom_data: {
              ibe: {
                gfs_indicator: cc11001100_hook("gfs_indicator", e, "object-key-init"),
                gfs_quoted_fare: cc11001100_hook("gfs_quoted_fare", t, "object-key-init"),
                gfs_quoted_currency: cc11001100_hook("gfs_quoted_currency", a, "object-key-init"),
                gfs_quoted_cabin: cc11001100_hook("gfs_quoted_cabin", o, "object-key-init"),
                gfs_actual_fare: cc11001100_hook("gfs_actual_fare", n, "object-key-init"),
                gfs_actual_currency: cc11001100_hook("gfs_actual_currency", i, "object-key-init"),
                gfs_actual_cabin: cc11001100_hook("gfs_actual_cabin", r, "object-key-init")
              }
            }
          }, "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.view) && cxTealium.utag.view(c);
        } catch (e) {}
      }, "assign"), ge.instantSearchFareMismatch = cc11001100_hook("ge.instantSearchFareMismatch", function (e, t, a, o, n, i, r) {
        try {
          var c = cc11001100_hook("c", {
            custom_data: {
              ibe: {
                fare_change_indicator: cc11001100_hook("fare_change_indicator", e, "object-key-init"),
                fare_change_quoted_fare: cc11001100_hook("fare_change_quoted_fare", t, "object-key-init"),
                fare_change_quoted_currency: cc11001100_hook("fare_change_quoted_currency", a, "object-key-init"),
                fare_change_quoted_cabin: cc11001100_hook("fare_change_quoted_cabin", o, "object-key-init"),
                fare_change_actual_fare: cc11001100_hook("fare_change_actual_fare", n, "object-key-init"),
                fare_change_actual_currency: cc11001100_hook("fare_change_actual_currency", i, "object-key-init"),
                fare_change_actual_cabin: cc11001100_hook("fare_change_actual_cabin", r, "object-key-init")
              }
            }
          }, "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(c);
        } catch (e) {}
      }, "assign"), ge.seatMapOpenEvent = cc11001100_hook("ge.seatMapOpenEvent", function (e) {
        try {
          ge.cabinTypeFullName && ge.cabinTypeFullName.toUpperCase();
          var t = cc11001100_hook("t", e.beginAirportCode + "_" + e.endAirportCode, "var-init"),
            a = cc11001100_hook("a", e.cabinType ? e.cabinType.toUpperCase() : "", "var-init"),
            o = cc11001100_hook("o", {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "SEAT_SELECTION::SEAT-MAP::OPEN", "object-key-init"),
              event_label: cc11001100_hook("event_label", t + "::" + a + "::" + e.marketingAirline, "object-key-init"),
              event_value: cc11001100_hook("event_value", "1", "object-key-init")
            }, "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(o);
        } catch (e) {}
      }, "assign"), ge.updateProductCollectionForSeatMap = cc11001100_hook("ge.updateProductCollectionForSeatMap", function () {
        void 0 === cxDataLayer.products && (cxDataLayer.products = cc11001100_hook("cxDataLayer.products", [], "assign"));
        for (var e = cc11001100_hook("e", ge.traveller.travellersArray, "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) {
          var a = cc11001100_hook("a", e[t], "var-init");
          if (a.seats && a.seats.length && "INF" !== a.travellerType) for (var o = cc11001100_hook("o", 0, "var-init"); o < a.seats.length; o++) {
            for (var n, i = cc11001100_hook("i", a.seats[o], "var-init"), r = cc11001100_hook("r", function (e) {
                return "F" === e.cabin ? g.FIRST : "B" === e.cabin ? g.BUSINESS : "N" === e.cabin ? g.PREMIUM_ECONOMY : "E" === e.cabin || "R" === e.cabin ? g.ECONOMY : void 0;
              }(i.segment) || "", "var-init"), c = cc11001100_hook("c", i.spot.exl ? "EXL" : "ASR", "var-init"), s = cc11001100_hook("s", i.segment.beginAirportCode, "var-init"), l = cc11001100_hook("l", i.segment.endAirportCode, "var-init"), u = cc11001100_hook("u", s + "_" + l, "var-init"), s = cc11001100_hook("s", 0 < DDSContext.nbChd || 0 < DDSContext.nbInf, "var-init"), d = cc11001100_hook("d", i.spot.associationTravellerSeatPrice && i.spot.associationTravellerSeatPrice[a.id].amount, "var-init"), _ = cc11001100_hook("_", "", "var-init"), l = cc11001100_hook("l", (_ = cc11001100_hook("_", a.profileStatusCode && ("IN" === a.profileStatusCode || "DM" === a.profileStatusCode || "GO" === a.profileStatusCode || "SL" === a.profileStatusCode) || s ? "WAIVE" : d ? "FEE" : "BRAND", "assign"), ""), "var-init"), s = cc11001100_hook("s", "", "var-init"), p = cc11001100_hook("p", (i.segment && (DDSContext.TAG_FLOW_NAME_SHORT && "SD" === DDSContext.TAG_FLOW_NAME_SHORT || DDSContext.TAG_FLOW_NAME_SHORT && "SD-M" === DDSContext.TAG_FLOW_NAME_SHORT) ? (l = cc11001100_hook("l", J.includes(i.segment.fareFamilyBrandCode) ? i.segment.fareFamilyBrandCode : "NB", "assign")) && (n = cc11001100_hook("n", Ee.getBrandNameFromBrandCode(i.segment.fareFamilyBrandCode) || "", "assign"), s = cc11001100_hook("s", J.includes(i.segment.fareFamilyBrandCode) ? "".concat(r.toUpperCase(), "_").concat(n.toUpperCase()) : r.toUpperCase(), "assign")) : (l = cc11001100_hook("l", i.segment.fareFamily, "assign")) && (n = cc11001100_hook("n", Ee.getBrandNameFromBrandCode(l) || "", "assign"), s = cc11001100_hook("s", "".concat(r.toUpperCase(), "_").concat(n.toUpperCase()), "assign")), !1), "var-init"), m = cc11001100_hook("m", 0, "var-init"); m < cxDataLayer.products.length; m++) {
              var E = cc11001100_hook("E", cxDataLayer.products[m], "var-init");
              "AIR-ANCILLARY" === E.type && void 0 !== d && "" !== d && null !== d && d.toFixed(2) === E.price && E.product_id === c + "::" + u + "::" + r.toUpperCase() + "::" + _ && E.pax_type === ge.paxTypeFullText[a.travellerType] && (p = cc11001100_hook("p", !0, "assign"), E.qty = cc11001100_hook("E.qty", parseInt(E.qty) + 1 + "", "assign"), "FEE" === _) && (E.subtotal = cc11001100_hook("E.subtotal", (d.toFixed(2) * E.qty).toFixed(2), "assign"));
            }
            p || cxDataLayer.products.push({
              type: cc11001100_hook("type", "AIR-ANCILLARY", "object-key-init"),
              product_id: cc11001100_hook("product_id", c + "::" + u + "::" + r.toUpperCase() + "::" + _, "object-key-init"),
              product_name: cc11001100_hook("product_name", c + "::" + u + "::" + _, "object-key-init"),
              product_category: cc11001100_hook("product_category", "AIR-ANCILLARY_" + c + "::" + _, "object-key-init"),
              product_category_slashified: cc11001100_hook("product_category_slashified", "/AIR-ANCILLARY_" + c + "/" + c + "-" + _ + "/" + u + "/", "object-key-init"),
              qty: cc11001100_hook("qty", "1", "object-key-init"),
              currency: cc11001100_hook("currency", DDSContext.CURRENCY_CODE, "object-key-init"),
              price: cc11001100_hook("price", "FEE" === _ ? d.toFixed(2) : "0.00", "object-key-init"),
              pax_type: cc11001100_hook("pax_type", ge.paxTypeFullText[a.travellerType], "object-key-init"),
              ff_code: cc11001100_hook("ff_code", l, "object-key-init"),
              ff_name: cc11001100_hook("ff_name", s, "object-key-init"),
              subtotal: cc11001100_hook("subtotal", "FEE" === _ ? d.toFixed(2) : "0.00", "object-key-init"),
              surcharge: cc11001100_hook("surcharge", "0.00", "object-key-init"),
              tax: cc11001100_hook("tax", "0.00", "object-key-init")
            });
          }
        }
      }, "assign"), ge.initUpsellObj = cc11001100_hook("ge.initUpsellObj", P, "assign"), ge.owdAvailUpdateType = cc11001100_hook("ge.owdAvailUpdateType", "", "assign"), ge.updatePageObj = cc11001100_hook("ge.updatePageObj", fe, "assign"), ge.servicesAction = cc11001100_hook("ge.servicesAction", "", "assign"), ge.updatePageAction = cc11001100_hook("ge.updatePageAction", "", "assign"), ge.isOWD = cc11001100_hook("ge.isOWD", void 0 !== ge.context.PRICING_TYPE && "O" == ge.context.PRICING_TYPE, "assign"), ge.cabinsArr = cc11001100_hook("ge.cabinsArr", [], "assign"), ge.upsellCategory = cc11001100_hook("ge.upsellCategory", new Array(2), "assign"), ge.boundUpsellCategory = cc11001100_hook("ge.boundUpsellCategory", "", "assign"), ge.lowestPrice = cc11001100_hook("ge.lowestPrice", 0, "assign"), ge.fareTypesResponse = cc11001100_hook("ge.fareTypesResponse", "", "assign"), ge.upgradeBannerUpsell = cc11001100_hook("ge.upgradeBannerUpsell", function (e, t, a) {
        {
          var o;
          e || t ? (e = cc11001100_hook("e", a, "assign"), (o = cc11001100_hook("o", t, "assign")).FF = cc11001100_hook("(o = t).FF", t.fareFamily, "assign"), o.priceWithoutTax = cc11001100_hook("o.priceWithoutTax", t.totalPriceWithoutTax, "assign"), e.FF = cc11001100_hook("e.FF", a.fareFamily, "assign"), e.priceWithoutTax = cc11001100_hook("e.priceWithoutTax", a.totalPriceWithoutTax, "assign"), o = cc11001100_hook("o", JSON.stringify(Oe.custom_data.ibe), "assign"), ge.custom_data_before_upgrade = cc11001100_hook("ge.custom_data_before_upgrade", o, "assign"), P(ge.upgrade = cc11001100_hook("ge.upgrade", !0, "assign"), 0, ge.defaultFFObj, e, "UPGRADE"), P(!0, 1, ge.defaultFFObj, e, "UPGRADE")) : Oe.custom_data.ibe = cc11001100_hook("Oe.custom_data.ibe", JSON.parse(ge.custom_data_before_upgrade), "assign");
        }
      }, "assign"), ge.previousSelectedFF = cc11001100_hook("ge.previousSelectedFF", "", "assign"), ge.isOWDPromoFlow = cc11001100_hook("ge.isOWDPromoFlow", !(!ge.context.PROMO_CODE || "REVENUE" == ge.context.BOOKING_FLOW || "COTS" == ge.context.BOOKING_FLOW), "assign"), ge.applyNbuy = cc11001100_hook("ge.applyNbuy", function (e) {
        e = cc11001100_hook("e", "APPLY NOW" == e ? {
          event: {
            event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
            event_action: cc11001100_hook("event_action", "SYNC_BANNER::BUTTON::CLICK", "object-key-init"),
            event_label: cc11001100_hook("event_label", e, "object-key-init"),
            event_value: cc11001100_hook("event_value", 1, "object-key-init")
          }
        } : "APPROVED" == e || "PENDING" == e || "DECLINED" == e ? {
          event: {
            event_category: cc11001100_hook("event_category", "TRACKERS::RIBE", "object-key-init"),
            event_action: cc11001100_hook("event_action", "SYNC_APPLICATION::STATUS", "object-key-init"),
            event_label: cc11001100_hook("event_label", e, "object-key-init"),
            event_value: cc11001100_hook("event_value", 1, "object-key-init")
          }
        } : {
          event: {
            event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
            event_action: cc11001100_hook("event_action", "PAYMENT::PAY_NOW::CX_VISA_SIGN", "object-key-init"),
            event_label: cc11001100_hook("event_label", e = cc11001100_hook("e", "VSA", "assign"), "object-key-init"),
            event_value: cc11001100_hook("event_value", 1, "object-key-init")
          }
        }, "assign"), "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(e);
      }, "assign"), ge.paymentTypeTealiumEvent = cc11001100_hook("ge.paymentTypeTealiumEvent", function () {
        {
          var e;
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && (e = cc11001100_hook("e", {
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "PAYMENT::ACTION", "object-key-init"),
              event_label: cc11001100_hook("event_label", ge.isBOHSelected ? "BOH" : "PAY_NOW", "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            },
            tealium_event: cc11001100_hook("tealium_event", "BUTTON_CLICK", "object-key-init")
          }, "assign"), cxTealium.utag.link(e));
        }
      }, "assign"), ge.trackSeatSelection = cc11001100_hook("ge.trackSeatSelection", function (e) {
        try {
          var t = cc11001100_hook("t", {
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "SEAT_SELECTION::CONFIRM", "object-key-init"),
              event_label: cc11001100_hook("event_label", e, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }, "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(t);
        } catch (e) {}
      }, "assign"), ge.trackEXLAvailability = cc11001100_hook("ge.trackEXLAvailability", function (e, t) {
        try {
          var a = cc11001100_hook("a", {
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "RIBE::OPEN-SEATMAP::" + t, "object-key-init"),
              event_label: cc11001100_hook("event_label", e, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }, "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(a);
        } catch (e) {}
      }, "assign"), ge.trackUpsellEntry = cc11001100_hook("ge.trackUpsellEntry", function (e, t) {
        try {
          var a = cc11001100_hook("a", {
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "CABIN_UPSELL::" + t + "::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", e, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }, "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(a);
        } catch (e) {}
      }, "assign"), ge.trackFareInfoClick = cc11001100_hook("ge.trackFareInfoClick", function (e) {
        try {
          var t = cc11001100_hook("t", {
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "FARE_INFO::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", e, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }, "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(t);
        } catch (e) {}
      }, "assign"), ge.trackBfBrandSelection = cc11001100_hook("ge.trackBfBrandSelection", function (e, t, a) {
        try {
          var o = cc11001100_hook("o", {
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "BRAND_SELECTION::" + e + "::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", t + "-" + a, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }, "var-init");
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(o);
        } catch (e) {}
      }, "assign"), ge.trackMobileCountryCode = cc11001100_hook("ge.trackMobileCountryCode", function (e) {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "SIGN_IN::CHANGE_COUNTRY_CODE::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", e, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          });
        } catch (e) {}
      }, "assign"), ge.trackSignInMethod = cc11001100_hook("ge.trackSignInMethod", function (e) {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "SIGN_IN::SIGN_IN_BUTTON::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", e, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }), ge.signInMethod = cc11001100_hook("ge.signInMethod", e, "assign");
        } catch (e) {}
      }, "assign"), ge.trackSocialIconClick = cc11001100_hook("ge.trackSocialIconClick", function (e, t) {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "SIGN_IN::SOCIAL_BUTTON_".concat(e, "::CLICK"), "object-key-init"),
              event_label: cc11001100_hook("event_label", t, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          });
        } catch (e) {}
      }, "assign"), ge.trackSignInMethodChange = cc11001100_hook("ge.trackSignInMethodChange", function (e) {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "SIGN_IN::METHOD_CHANGE::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", e, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          });
        } catch (e) {}
      }, "assign"), ge.trackForgotPasswordClick = cc11001100_hook("ge.trackForgotPasswordClick", function (e) {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "SIGN_IN::FORGOT_PASSWORD::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", e, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          });
        } catch (e) {}
      }, "assign"), ge.trackTroubleSigningInClick = cc11001100_hook("ge.trackTroubleSigningInClick", function (e) {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "SIGN_IN::TROUBLE_SIGN_IN::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", e, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          });
        } catch (e) {}
      }, "assign"), ge.trackContinueAsGuestClick = cc11001100_hook("ge.trackContinueAsGuestClick", function () {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "SIGN_IN::GUEST::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", "GUEST", "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }), n(!1);
        } catch (e) {}
      }, "assign"), ge.updateDataLayerErrorForBackendSignInError = cc11001100_hook("ge.updateDataLayerErrorForBackendSignInError", function (e) {
        try {
          void 0 !== window.cxDataLayer && window.cxDataLayer && (void 0 !== window.cxDataLayer.errors && window.cxDataLayer.errors || (window.cxDataLayer.errors = cc11001100_hook("window.cxDataLayer.errors", [], "assign")), window.cxDataLayer.errors.push(e));
        } catch (e) {}
      }, "assign"), ge.setClickSignInOverlay = cc11001100_hook("ge.setClickSignInOverlay", n, "assign"), ge.trackruSignUpGuestLogin = cc11001100_hook("ge.trackruSignUpGuestLogin", function () {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "ENFORCED_LOGIN::GUEST::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", "Guest", "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }), Oe.page && Oe.page.name && Oe.page.name.includes("ENFORCED_LOGIN") && (Oe.page.name = cc11001100_hook("Oe.page.name", Oe.page.name.replace("ENFORCED_LOGIN", "PASSENGER"), "assign"));
        } catch (e) {}
      }, "assign"), ge.trackruSignIn = cc11001100_hook("ge.trackruSignIn", function (e) {
        try {
          var t = cc11001100_hook("t", {
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "ENFORCED_LOGIN::SIGN_IN::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", "Guest", "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }, "var-init");
          "Sign in" == e.currentTarget.innerText && (t.event.event_label = cc11001100_hook("t.event.event_label", "MEMBER", "assign")), o(t);
        } catch (e) {}
      }, "assign"), ge.trackSignIn = cc11001100_hook("ge.trackSignIn", function () {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "ENFORCED_LOGIN::SIGN_IN::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", "MEMBER", "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          });
        } catch (e) {}
      }, "assign"), ge.trackruSocialSignIn = cc11001100_hook("ge.trackruSocialSignIn", function (e) {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "ENFORCED_LOGIN::SIGN_IN::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", e, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          });
        } catch (e) {}
      }, "assign"), ge.trackruSignUp = cc11001100_hook("ge.trackruSignUp", function () {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "ENFORCED_LOGIN::SIGN_UP::CLICK", "object-key-init"),
              event_label: cc11001100_hook("event_label", "SIGNUP", "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }), (Oe.page.name || Oe.page.page_name) && (Oe.page && Oe.page.name && (Oe.page.name = cc11001100_hook("Oe.page.name", Oe.page.name + "/SIGNUP", "assign")), Oe.page.flow && "SD" == Oe.page.flow && Oe.page.name && Oe.page.name.includes("ENFORCED_LOGIN/SIGNUP") && cxTealium && "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && cxTealium.utag.view(Oe), Oe.page.page_name) && (Oe.page.name && (Oe.page.name = cc11001100_hook("Oe.page.name", Oe.page.name.replace(/undefined/g, "RIBE/REVENUE/SCHEDULEDRIVEN/ENFORCED_LOGIN"), "assign")), Oe.page.page_id = cc11001100_hook("Oe.page.page_id", Oe.page.page_id.replace(/ENFORCED_LOGIN/g, "ENFORCED_LOGIN::SIGNUP"), "assign"), Oe.page.page_id = cc11001100_hook("Oe.page.page_id", Oe.page.page_id.replace(/PASSENGER/g, "ENFORCED_LOGIN::SIGNUP"), "assign"), Oe.page.page_name = cc11001100_hook("Oe.page.page_name", Oe.page.page_name.replace(/PASSENGER/g, "SIGNUP"), "assign"), cxTealium) && "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && cxTealium.utag.view(Oe);
        } catch (e) {}
      }, "assign"), ge.trackruSignUpCancelBtn = cc11001100_hook("ge.trackruSignUpCancelBtn", function (e) {
        var t;
        Oe.page.name;
        -1 < e.currentTarget.className.indexOf("ribe-btn-member-cancel") ? t = cc11001100_hook("t", "CANCEL", "assign") : -1 < e.currentTarget.className.indexOf("ribe-btn-member-signup") && (t = cc11001100_hook("t", "CONFIRM", "assign"));
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "ENFORCED_LOGIN::SIGN-UP_" + t, "object-key-init"),
              event_label: cc11001100_hook("event_label", "SIGN UP " + t, "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          }), (Oe.page.name || Oe.page.page_name) && (Oe.page.name && (Oe.page.name.includes("PASSENGER") || Oe.page.name.includes("ENFORCED_LOGIN")) && (Oe.page.name.replace(/PASSENGER/g, "ENFORCED_LOGIN"), Oe.page.name = cc11001100_hook("Oe.page.name", Oe.page.name.replace("/SIGNUP", ""), "assign")), Oe.page.page_name) && (Oe.page.page_name = cc11001100_hook("Oe.page.page_name", Oe.page.page_name.replace(/PASSENGER/g, "ENFORCED_LOGIN"), "assign"), Oe.page.page_id = cc11001100_hook("Oe.page.page_id", Oe.page.page_id.replace(/PASSENGER/g, "ENFORCED_LOGIN"), "assign"), Oe.page.page_id = cc11001100_hook("Oe.page.page_id", Oe.page.page_id.replace("/SIGNUP", ""), "assign"));
        } catch (e) {}
      }, "assign"), ge.trackruSignUpSuccess = cc11001100_hook("ge.trackruSignUpSuccess", function () {
        try {
          o({
            event: {
              event_category: cc11001100_hook("event_category", "USER-INTERACTIONS::RIBE", "object-key-init"),
              event_action: cc11001100_hook("event_action", "ENFORCED_LOGIN::SIGN-UP-SUCCESS", "object-key-init"),
              event_label: cc11001100_hook("event_label", "SIGN UP SUCCESS", "object-key-init"),
              event_value: cc11001100_hook("event_value", 1, "object-key-init")
            }
          });
        } catch (e) {}
      }, "assign"), ge.updateTealiumForFeedBack = cc11001100_hook("ge.updateTealiumForFeedBack", function (e) {
        try {
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(e);
        } catch (e) {}
      }, "assign"), ge.updateTealiumForCashNMiles = cc11001100_hook("ge.updateTealiumForCashNMiles", function (e) {
        try {
          "undefined" != typeof cxTealium && void 0 !== cxTealium.utag && s(cxTealium.utag.link) && cxTealium.utag.link(e);
        } catch (e) {}
      }, "assign"), ge.updateDataLayerForCashNMiles = cc11001100_hook("ge.updateDataLayerForCashNMiles", function (e) {
        try {
          void 0 !== window.cxDataLayer && window.cxDataLayer && (window.cxDataLayer.custom_data && window.cxDataLayer.custom_data.ibe ? Object.assign(window.cxDataLayer.custom_data.ibe, e) : window.cxDataLayer.custom_data.ibe = cc11001100_hook("window.cxDataLayer.custom_data.ibe", e, "assign"));
        } catch (e) {}
      }, "assign"), ge.updateDataLayerErrorForCashNMiles = cc11001100_hook("ge.updateDataLayerErrorForCashNMiles", function (e) {
        try {
          void 0 !== window.cxDataLayer && window.cxDataLayer && void 0 !== window.cxDataLayer.errors && window.cxDataLayer.errors && window.cxDataLayer.errors.push(e);
        } catch (e) {}
      }, "assign"), y.brandsWithNonBrandedFiling.split(",")), "var-init"),
      J = cc11001100_hook("J", y.brands.split(","), "var-init"),
      Ce = cc11001100_hook("Ce", !1, "var-init"),
      q = cc11001100_hook("q", "AIR-ANCILLARY_EXL", "var-init");
    function e() {
      try {
        var e = cc11001100_hook("e", 1, "var-init"),
          t = cc11001100_hook("t", "", "var-init");
        if (S(), v(), T(), ge.chkUtmParam = cc11001100_hook("ge.chkUtmParam", !1, "assign"), y.utmParameters) for (var a = cc11001100_hook("a", y.utmParameters.split(","), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < a.length; o++) (-1 < window.location.href.indexOf(a[o]) || sessionStorage && sessionStorage.campaignData || a[o] in ge.context) && (ge.chkUtmParam = cc11001100_hook("ge.chkUtmParam", !0, "assign"));
        if ((ge.chkUtmParam || DDSContext.BOOKING_FLOW && "REVENUE" == DDSContext.BOOKING_FLOW.toUpperCase() && DDSContext.deeplinkFlow && "TRUE" == DDSContext.deeplinkFlow.toUpperCase()) && (sessionStorage && sessionStorage.campaignData ? window.cxDataLayer.campaign = cc11001100_hook("window.cxDataLayer.campaign", JSON.parse(sessionStorage.getItem("campaignData")), "assign") : R()), ge.context.TAG_STEP && "" != ge.context.TAG_STEP && (e = cc11001100_hook("e", Number(ge.context.TAG_STEP) + 1, "assign")), ge.context.TAG_PAGE_NAME && "" != ge.context.TAG_PAGE_NAME && ge.context.TAG_PAGE_NAME, "CLUP" === ge.pageCode || "MCUP" === ge.pageCode) I(ge.trip.bounds), "1" === ge.context.DISPLAY_TYPE ? (t = cc11001100_hook("t", f.Calender.stepName, "assign"), f.Calender.pageID, f.Calender.pageName) : "2" === ge.context.DISPLAY_TYPE && (t = cc11001100_hook("t", f.Upsell.stepName, "assign"), f.Upsell.pageID, f.Upsell.pageName), P(), L();else if ("OWUP" === ge.pageCode) I(ge.trip.bounds), t = cc11001100_hook("t", f.OWDOutbound.stepName, "assign"), f.OWDOutbound.pageID, f.OWDOutbound.pageName, P(), L(), A();else if ("AVAI" === ge.pageCode || "AVAC" === ge.pageCode) I(ge.trip.bounds), t = cc11001100_hook("t", f.Upsell.stepName, "assign"), f.Upsell.pageID, f.Upsell.pageName, Ce ? (window.cxDataLayer.custom_data = cc11001100_hook("window.cxDataLayer.custom_data", {}, "assign"), window.cxDataLayer.custom_data.ibe = cc11001100_hook("window.cxDataLayer.custom_data.ibe", {
          office_id: cc11001100_hook("office_id", ge.context.OFFICE_ID, "object-key-init")
        }, "assign")) : (P(), L());else if ("PINS" === ge.pageCode) I(ge.trip.bounds), t = cc11001100_hook("t", f.Passenger.stepName, "assign"), f.Passenger.pageID, f.Passenger.pageName, A();else if ("PURC" === ge.pageCode) I(ge.trip.bounds), t = cc11001100_hook("t", f.Payment.stepName, "assign"), f.Payment.pageID, f.Payment.pageName, F(ge.fare), A();else if ("CONF" === ge.pageCode) {
          I(ge.trip.bounds), f.Payment.pageName, t = cc11001100_hook("t", f.Confirmation.stepName, "assign"), f.Confirmation.pageID, f.Confirmation.pageName, F(ge.fare);
          try {
            r = cc11001100_hook("r", pe().format("YYYY-MM-DD") + "::" + ge.context.COUNTRY + "::CX::IBE::" + ge.stream_id + "::" + ge.context.miniPNR + "::" + ge.paxCombination, "assign"), n = cc11001100_hook("n", 0 < Number(ge.context.fxmpTotal), "assign"), Oe.itinerary && Oe.itinerary.route && Oe.itinerary.route, ge.fare.flightFareInfo, c = cc11001100_hook("c", pageBom.modelObject.pnrRecap, "assign"), i = cc11001100_hook("i", ge.fare.totalPrice, "assign"), n ? ge.context.fxmpTotal : "", c.insuranceProducts && c.insuranceProducts.insuranceProducts && c.insuranceProducts.insuranceProducts[0] ? c.insuranceProducts.insuranceProducts[0].confirmationNumber : "";
            var n,
              i,
              r,
              c,
              s = cc11001100_hook("s", c.tickets && 0 < c.tickets.length ? c.tickets[0].ticketNumber : "", "var-init");
            ge.isOWDPromoFlow ? Oe.booking = cc11001100_hook("Oe.booking", {
              booking_id: cc11001100_hook("booking_id", r, "object-key-init"),
              currency: cc11001100_hook("currency", ge.context.CURRENCY_CODE, "object-key-init"),
              fxmp: cc11001100_hook("fxmp", n, "object-key-init"),
              fxmp_currency: cc11001100_hook("fxmp_currency", ge.context.fxmpCurrency || "", "object-key-init"),
              pnr: cc11001100_hook("pnr", ge.context.miniPNR, "object-key-init"),
              type: cc11001100_hook("type", "revenue-ticket", "object-key-init"),
              status: cc11001100_hook("status", ge.isBOHSelected ? "ON-HOLD" : "CONFIRMED", "object-key-init"),
              subtotal: cc11001100_hook("subtotal", (Number(ge.fare.totalPrice) - Number(ge.fare.flightFareInfo.totalTaxes)).toFixed(2), "object-key-init"),
              ticket_number: cc11001100_hook("ticket_number", s, "object-key-init"),
              route: cc11001100_hook("route", Oe.itinerary.route, "object-key-init")
            }, "assign") : Oe.booking = cc11001100_hook("Oe.booking", {
              booking_id: cc11001100_hook("booking_id", r, "object-key-init"),
              pnr: cc11001100_hook("pnr", ge.context.miniPNR, "object-key-init"),
              status: cc11001100_hook("status", ge.isBOHSelected ? "ON-HOLD" : "CONFIRMED", "object-key-init"),
              fxmp: cc11001100_hook("fxmp", n, "object-key-init"),
              subtotal: cc11001100_hook("subtotal", parseFloat(Number(ge.fare.totalPrice) - Number(ge.fare.flightFareInfo.totalTaxes)).toFixed(2), "object-key-init"),
              currency: cc11001100_hook("currency", ge.context.CURRENCY_CODE, "object-key-init"),
              fxmp_currency: cc11001100_hook("fxmp_currency", ge.context.fxmpCurrency || "", "object-key-init"),
              total: cc11001100_hook("total", parseFloat(i).toFixed(2), "object-key-init"),
              type: cc11001100_hook("type", "revenue-ticket", "object-key-init"),
              route: cc11001100_hook("route", Oe.itinerary.route, "object-key-init")
            }, "assign");
          } catch (e) {}
          try {
            d = cc11001100_hook("d", pe().format("YYYY-MM-DD") + "::" + ge.context.MARKET + "::CX::IBE::" + ge.stream_id + "::" + ge.context.miniPNR + "::" + ge.paxCombination, "assign"), l = cc11001100_hook("l", 0 < Number(ge.context.fxmpTotal), "assign"), _ = cc11001100_hook("_", ge.fare.flightFareInfo, "assign"), l ? (u = cc11001100_hook("u", ge.fare.totalPrice, "assign"), ge.context.fxmpCurrency + "_" + ge.context.fxmpTotal) : (u = cc11001100_hook("u", ge.fare.totalPrice, "assign"), ""), DDSProfile ? (ge.context.WDS_MILES_RESPONSE && ge.context.WDS_MILES_RESPONSE.earnedPoints && ge.context.WDS_MILES_RESPONSE.earnedPoints, ge.context.WDS_MILES_RESPONSE && ge.context.WDS_MILES_RESPONSE.earnedMiles && ge.context.WDS_MILES_RESPONSE.earnedMiles, DDSProfile.USER_TYPE) : "";
            var l,
              u,
              d,
              _,
              p,
              m,
              E = cc11001100_hook("E", Number(ge.fare.totalPrice) - Number(_.totalTaxes), "var-init");
            p = cc11001100_hook("p", Number(_.fuelSurcharge) + Number(_.usDotFuelSurcharge), "assign"), m = cc11001100_hook("m", Number(_.totalTaxes), "assign"), Oe.transaction = cc11001100_hook("Oe.transaction", {
              transaction_id: cc11001100_hook("transaction_id", d, "object-key-init"),
              payment_method: cc11001100_hook("payment_method", ge.context.CC_TYPE || "", "object-key-init"),
              payment_method_saved: cc11001100_hook("payment_method_saved", !!ge.context.ONE_CLICK && "SAVE" !== ge.context.ONE_CLICK, "object-key-init"),
              payment_method_new: cc11001100_hook("payment_method_new", !!ge.context.ONE_CLICK && "SAVE" === ge.context.ONE_CLICK, "object-key-init"),
              payment_gateway: cc11001100_hook("payment_gateway", ge.context.PREFERRED_PSP_DESCRIPTION, "object-key-init"),
              currency: cc11001100_hook("currency", ge.context.CURRENCY_CODE, "object-key-init"),
              subtotal: cc11001100_hook("subtotal", parseFloat(E).toFixed(2), "object-key-init"),
              surcharge: cc11001100_hook("surcharge", parseFloat(p).toFixed(2), "object-key-init"),
              surcharge_and_tax: cc11001100_hook("surcharge_and_tax", parseFloat(m).toFixed(2), "object-key-init"),
              tax: cc11001100_hook("tax", parseFloat(_.otherTaxes).toFixed(2), "object-key-init"),
              total: cc11001100_hook("total", parseFloat(u).toFixed(2), "object-key-init"),
              aa_transaction_id: cc11001100_hook("aa_transaction_id", "".concat(pe.utc().format("YYMMDDhhmm")).concat(ge.context.miniPNR, "IBE"), "object-key-init")
            }, "assign"), ge.isOWDPromoFlow ? Oe.transaction.payment_country = cc11001100_hook("Oe.transaction.payment_country", ge.context.MARKET, "assign") : (Oe.transaction.currency_fxmp = cc11001100_hook("Oe.transaction.currency_fxmp", ge.context.fxmpCurrency, "assign"), Oe.transaction.fxmp = cc11001100_hook("Oe.transaction.fxmp", l, "assign")), DDSProfile && (Oe.transaction.cash = cc11001100_hook("Oe.transaction.cash", ge.context.CNM_BASE_TKT_CASH ? parseFloat(ge.context.CNM_BASE_TKT_CASH).toFixed(2) : 0, "assign"), Oe.transaction.miles = cc11001100_hook("Oe.transaction.miles", ge.context.CNM_BASE_TKT_MILES ? parseFloat(ge.context.CNM_BASE_TKT_MILES) : 0, "assign"), Oe.transaction.cm_eligibility = cc11001100_hook("Oe.transaction.cm_eligibility", ge.context.CNM_ELIGIBILITY, "assign")), ge.isBOHSelected && (Oe.transaction.subtotal = cc11001100_hook("Oe.transaction.subtotal", "0.00", "assign"), Oe.transaction.surcharge = cc11001100_hook("Oe.transaction.surcharge", "0.00", "assign"), Oe.transaction.tax = cc11001100_hook("Oe.transaction.tax", "0.00", "assign"), Oe.transaction.surcharge_and_tax = cc11001100_hook("Oe.transaction.surcharge_and_tax", "0.00", "assign"), Oe.transaction.total = cc11001100_hook("Oe.transaction.total", "0.00", "assign"));
          } catch (e) {}
          A();
        }
        if (ge.stepNo = cc11001100_hook("ge.stepNo", e, "assign"), ge.stepName = cc11001100_hook("ge.stepName", t, "assign"), fe(ge.pageCode), ge.isOWD || Ce || x(), ge.isOWDPromoFlow && !ge.context.SPONSOR_CODE && b(), pageBom && pageBom.modelObject && pageBom.modelObject.messages && 0 < pageBom.modelObject.messages.length && D(pageBom.modelObject.messages), ge.isOWD ? (window.cxDataLayer = cc11001100_hook("window.cxDataLayer", Oe, "assign"), "OWUP" != ge.pageCode && (cxDataLayer.custom_data || (cxDataLayer.custom_data = cc11001100_hook("cxDataLayer.custom_data", {}, "assign")), cxDataLayer.custom_data.ibe = cc11001100_hook("cxDataLayer.custom_data.ibe", DDSContext.UPSELL_DATA ? JSON.parse(DDSContext.UPSELL_DATA) : "", "assign")), (DDSContext.SKIN && "SME" === DDSContext.SKIN.toUpperCase() || DDSContext.SME_TM && "TRUE" === DDSContext.SME_TM.toUpperCase()) && DDSContext.BCODE && (cxDataLayer.custom_data.ibe.b_code = cc11001100_hook("cxDataLayer.custom_data.ibe.b_code", DDSContext.BCODE, "assign"))) : !DDSContext.TRIP_TYPE || "M" !== DDSContext.TRIP_TYPE || "PINS" !== ge.pageCode && "PURC" !== ge.pageCode || (window.cxDataLayer = cc11001100_hook("window.cxDataLayer", Oe, "assign"), cxDataLayer.custom_data = cc11001100_hook("cxDataLayer.custom_data", {}, "assign"), cxDataLayer.custom_data.ibe = cc11001100_hook("cxDataLayer.custom_data.ibe", DDSContext.UPSELL_DATA ? JSON.parse(DDSContext.UPSELL_DATA) : "", "assign"), cxDataLayer.custom_data.ibe.outbound_value_selected = cc11001100_hook("cxDataLayer.custom_data.ibe.outbound_value_selected", ge.fare.flightFareInfo.totalPriceWithoutTax, "assign")), DDSContext.DDS_COBRAND_CARDS && ge.profile && "{}" !== JSON.stringify(ge.profile) && (cxDataLayer.custom_data = cc11001100_hook("cxDataLayer.custom_data", cxDataLayer.custom_data || {}, "assign"), cxDataLayer.custom_data.ibe = cc11001100_hook("cxDataLayer.custom_data.ibe", cxDataLayer.custom_data.ibe || {}, "assign"), DDSContext.DDS_COBRAND_CARDS) && -1 < DDSContext.DDS_COBRAND_CARDS.indexOf(":") && ge.profile && "{}" !== JSON.stringify(ge.profile)) {
          var g = cc11001100_hook("g", [], "var-init"),
            O = cc11001100_hook("O", DDSContext.DDS_COBRAND_CARDS ? DDSContext.DDS_COBRAND_CARDS.split(":") : [], "var-init");
          if (O.length) {
            for (var C = cc11001100_hook("C", 0, "var-init"); C < O.length; C++) {
              var N = cc11001100_hook("N", O[C], "var-init");
              N.indexOf("_") && (N = cc11001100_hook("N", N.split("_"), "assign"), N = cc11001100_hook("N", N[2] + "" + N[0] + N[1] + N[3], "assign"), g.push(N));
            }
            Oe.custom_data.ibe.coBrandCards = cc11001100_hook("Oe.custom_data.ibe.coBrandCards", g, "assign");
          }
        }
        DDSContext.DDS_MAIL_COUNTRY_CODE && ge.profile && "{}" !== JSON.stringify(ge.profile) && (cxDataLayer.custom_data = cc11001100_hook("cxDataLayer.custom_data", cxDataLayer.custom_data || {}, "assign"), cxDataLayer.custom_data.ibe = cc11001100_hook("cxDataLayer.custom_data.ibe", cxDataLayer.custom_data.ibe || {}, "assign"), Oe.custom_data.ibe.mailCountryCode = cc11001100_hook("Oe.custom_data.ibe.mailCountryCode", DDSContext.DDS_MAIL_COUNTRY_CODE, "assign"));
      } catch (e) {}
    }
    function S() {
      try {
        void 0 === Oe && (Oe = cc11001100_hook("Oe", new Object(), "assign"));
      } catch (e) {}
    }
    function T() {
      try {
        var e = cc11001100_hook("e", {
          env: cc11001100_hook("env", "QA", "object-key-init")
        }, "var-init");
        "book.cathaypacific.com" !== document.domain && "book.dragonair.com" !== document.domain && "book.cathayholidays.co.jp" !== document.domain || (e.env = cc11001100_hook("e.env", "PROD", "assign")), Oe.application = cc11001100_hook("Oe.application", {
          name: cc11001100_hook("name", ge.systemName, "object-key-init"),
          version: cc11001100_hook("version", ge.versionValue, "object-key-init"),
          env: cc11001100_hook("env", "PROD" === e.env ? "prod" : "dev", "object-key-init")
        }, "assign"), (e.env = cc11001100_hook("e.env", void 0 === window.udo, "assign")) && (window.udo = cc11001100_hook("window.udo", {}, "assign")), window.cxDataLayer = cc11001100_hook("window.cxDataLayer", Oe, "assign");
      } catch (e) {}
    }
    function Z(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (void 0 !== e && e && 0 < e.length) try {
        var t,
          a,
          o = cc11001100_hook("o", e.length, "var-init");
        for (Oe.collection = cc11001100_hook("Oe.collection", {
          products: {
            types: cc11001100_hook("types", [], "object-key-init"),
            product_ids: cc11001100_hook("product_ids", [], "object-key-init"),
            product_names: cc11001100_hook("product_names", [], "object-key-init"),
            product_categories: cc11001100_hook("product_categories", [], "object-key-init"),
            product_categories_slashified: cc11001100_hook("product_categories_slashified", [], "object-key-init"),
            qtys: cc11001100_hook("qtys", [], "object-key-init"),
            currencies: cc11001100_hook("currencies", [], "object-key-init"),
            prices: cc11001100_hook("prices", [], "object-key-init"),
            taxes: cc11001100_hook("taxes", [], "object-key-init"),
            surcharges: cc11001100_hook("surcharges", [], "object-key-init"),
            subtotal: cc11001100_hook("subtotal", [], "object-key-init"),
            ff_codes: cc11001100_hook("ff_codes", [], "object-key-init"),
            ff_names: cc11001100_hook("ff_names", [], "object-key-init"),
            pax_types: cc11001100_hook("pax_types", [], "object-key-init")
          }
        }, "assign"), t = cc11001100_hook("t", 0, "assign"); t < o; t++) a = cc11001100_hook("a", e[t], "assign"), Oe.collection.products.types.push(a.type), Oe.collection.products.product_ids.push(a.product_id), Oe.collection.products.product_names.push(a.product_name), Oe.collection.products.product_categories.push(a.product_category), Oe.collection.products.product_categories_slashified.push(a.product_category_slashified), Oe.collection.products.qtys.push(a.qty), Oe.collection.products.currencies.push(a.currency), Oe.collection.products.prices.push(a.price), Oe.collection.products.pax_types.push(a.pax_type), Oe.collection.products.ff_names.push(a.ff_name), Oe.collection.products.ff_codes.push(a.ff_code), a.surcharge && Oe.collection.products.surcharges.push(a.surcharge), a.subtotal && Oe.collection.products.subtotal.push(a.subtotal), a.tax && Oe.collection.products.taxes.push(a.tax);
      } catch (e) {}
    }
    function z(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      try {
        "init" === e ? (void 0 === Oe.custom_data && (Oe.custom_data = cc11001100_hook("Oe.custom_data", {}, "assign")), Oe.custom_data.enforce_indicator = cc11001100_hook("Oe.custom_data.enforce_indicator", "", "assign"), DDSProfile && (Oe.custom_data.enforce_indicator = cc11001100_hook("Oe.custom_data.enforce_indicator", "", "assign"))) : (void 0 === a && (a = cc11001100_hook("a", ge.originDest, "assign")), "EXL" === e && (Oe.custom_data.product_indicator = cc11001100_hook("Oe.custom_data.product_indicator", Oe.custom_data.product_indicator || "", "assign"), t ? (ge.exlUnitPrice && (Oe.custom_data.exl_info = cc11001100_hook("Oe.custom_data.exl_info", "DISPLAY::EXL::" + a + "::" + ge.exlCurrency + "_" + ge.exlUnitPrice, "assign")), Oe.custom_data.product_indicator && -1 === Oe.custom_data.product_indicator.indexOf("EX") ? Oe.custom_data.product_indicator += cc11001100_hook("Oe.custom_data.product_indicator", ":EX", "assign") : Oe.custom_data.product_indicator = cc11001100_hook("Oe.custom_data.product_indicator", "EX", "assign")) : (Oe.custom_data.exl_info = cc11001100_hook("Oe.custom_data.exl_info", "", "assign"), Oe.custom_data.product_indicator = cc11001100_hook("Oe.custom_data.product_indicator", Oe.custom_data.product_indicator ? Oe.custom_data.product_indicator.replace(/(:EX|EX:|EX)/gi, "") : "", "assign"))));
      } catch (e) {}
    }
    function D(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      try {
        var a,
          o = cc11001100_hook("o", tabId, "var-init"),
          n = cc11001100_hook("n", ye(), "var-init");
        if (void 0 === Oe.errors && (Oe.errors = cc11001100_hook("Oe.errors", [], "assign")), Oe.application, void 0 === Oe.page && fe(), e) {
          for (a = cc11001100_hook("a", 0, "assign"); a < e.length; a++) e[a].code && (e[a].type && "WARNING" == e[a].type ? Oe.errors.push({
            error_code: cc11001100_hook("error_code", "WARNING::" + Oe.application.name + "::" + e[a].code, "object-key-init"),
            error_category: cc11001100_hook("error_category", "WARNING::RIBE::SYSTEM", "object-key-init"),
            error_description: cc11001100_hook("error_description", e[a].text, "object-key-init"),
            error_page_id: cc11001100_hook("error_page_id", Oe.page.page_id || "", "object-key-init"),
            datetime_error: cc11001100_hook("datetime_error", n, "object-key-init"),
            jsession_id: cc11001100_hook("jsession_id", o, "object-key-init")
          }) : Oe.errors.push({
            error_code: cc11001100_hook("error_code", "ERROR::" + Oe.application.name + "::" + e[a].code, "object-key-init"),
            error_category: cc11001100_hook("error_category", "ERROR::RIBE::SYSTEM", "object-key-init"),
            error_description: cc11001100_hook("error_description", e[a].text, "object-key-init"),
            error_page_id: cc11001100_hook("error_page_id", Oe.page.page_id || "", "object-key-init"),
            datetime_error: cc11001100_hook("datetime_error", n, "object-key-init"),
            jsession_id: cc11001100_hook("jsession_id", o, "object-key-init")
          }));
          pageCode && "PURC" == pageCode && window.errorId && (Oe.errors.length = cc11001100_hook("Oe.errors.length", 0, "assign"), Oe.errors.push({
            error_code: cc11001100_hook("error_code", "ERROR::" + Oe.application.name + "::" + window.errorId, "object-key-init"),
            error_category: cc11001100_hook("error_category", "ERROR::RIBE::SYSTEM", "object-key-init"),
            error_description: cc11001100_hook("error_description", e[0], "object-key-init"),
            error_page_id: cc11001100_hook("error_page_id", Oe.page.page_id || "", "object-key-init"),
            datetime_error: cc11001100_hook("datetime_error", n, "object-key-init"),
            jsession_id: cc11001100_hook("jsession_id", o, "object-key-init")
          }));
        }
        if (t) for (a = cc11001100_hook("a", 0, "assign"); a < t.length; a++) Oe.errors.push({
          error_code: cc11001100_hook("error_code", "WARNING::" + Oe.application.name + "::" + t[a].code, "object-key-init"),
          error_category: cc11001100_hook("error_category", "WARNING::RIBE::SYSTEM", "object-key-init"),
          error_description: cc11001100_hook("error_description", t[a].text, "object-key-init"),
          error_page_id: cc11001100_hook("error_page_id", Oe.page.page_id || "", "object-key-init"),
          datetime_error: cc11001100_hook("datetime_error", n, "object-key-init"),
          jsession_id: cc11001100_hook("jsession_id", o, "object-key-init")
        });
        "undefined" != typeof cxTealium && void 0 !== cxTealium.track && s(cxTealium.track.errors) && cxTealium.track.errors(Oe.errors);
      } catch (e) {}
    }
    function I(e, B, t, a) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("B", B, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      try {
        "PAGE_OBJ" == B && fe(Te.owdAvailUpdateType), Oe.itinerary = cc11001100_hook("Oe.itinerary", {}, "assign");
        for (var o, n, i, r, c, s, l, u, d = cc11001100_hook("d", "", "var-init"), _ = cc11001100_hook("_", [], "var-init"), w = cc11001100_hook("w", [], "var-init"), p = cc11001100_hook("p", [], "var-init"), M = cc11001100_hook("M", [], "var-init"), Y = cc11001100_hook("Y", "", "var-init"), m = cc11001100_hook("m", [], "var-init"), G = cc11001100_hook("G", [], "var-init"), W = cc11001100_hook("W", [], "var-init"), k = cc11001100_hook("k", [], "var-init"), V = cc11001100_hook("V", [], "var-init"), E = cc11001100_hook("E", [], "var-init"), g = cc11001100_hook("g", [], "var-init"), O = cc11001100_hook("O", "", "var-init"), C = cc11001100_hook("C", "", "var-init"), H = cc11001100_hook("H", e.length, "var-init"), j = cc11001100_hook("j", pe(e[0].segments[0].beginDate), "var-init"), K = cc11001100_hook("K", function () {
            var e;
            void 0 !== me.getLocalDateTime() && me.getLocalDateTime() ? e = cc11001100_hook("e", me.getLocalDateTime(), "assign") : void 0 !== pageBom.modelObject.pnrRecap && (e = cc11001100_hook("e", pe(pageBom.modelObject.pnrRecap.localDateTime), "assign"));
            return e;
          }(), "var-init"), X = cc11001100_hook("X", j.diff(K, "days"), "var-init"), N = cc11001100_hook("N", 0, "var-init"); N < H; N++) {
          i = cc11001100_hook("i", (n = cc11001100_hook("n", e[N], "assign")).segments.length, "assign"), n.fareFamily, ge.selectedFFCode = cc11001100_hook("ge.selectedFFCode", n.fareFamily, "assign"), C += cc11001100_hook("C", Ee.getCityCode(n.segments[0].beginLocation) + "_" + Ee.getCityCode(n.segments[i - 1].endLocation) + "|", "assign"), "R" == DDSContext.TRIP_TYPE && "ON_HOLD_CONFIRMATION" != DDSContext.BOOKING_FLOW && DDSContext.B_LOCATION_1 && (C = cc11001100_hook("C", DDSContext.B_LOCATION_1 + "_" + DDSContext.B_LOCATION_2 + "|" + DDSContext.E_LOCATION_1 + "_" + DDSContext.E_LOCATION_2 + "|", "assign"));
          var J = cc11001100_hook("J", [], "var-init"),
            q = cc11001100_hook("q", [], "var-init"),
            f = cc11001100_hook("f", [], "var-init"),
            y = cc11001100_hook("y", [], "var-init"),
            S = cc11001100_hook("S", [], "var-init"),
            T = cc11001100_hook("T", [], "var-init"),
            Z = cc11001100_hook("Z", [], "var-init"),
            D = cc11001100_hook("D", "", "var-init");
          for (e && e[N].durationMs ? (O = cc11001100_hook("O", Y = cc11001100_hook("Y", pe.duration(e[N].durationMs).asMinutes(), "assign"), "assign"), m.push(O)) : e && e[N].duration && (O = cc11001100_hook("O", pe.duration(e[N].duration).asMinutes(), "assign"), m.push(O)), c = cc11001100_hook("c", 0, "assign"); c < i; c++) o = cc11001100_hook("o", (r = cc11001100_hook("r", n.segments[c], "assign")).marketingAirlineCode, "assign"), J.push(o), s = cc11001100_hook("s", r.marketingAirlineCode + r.flightNumber, "assign"), T.push(s), u = cc11001100_hook("u", r.duration ? pe.duration(r.duration).asMinutes() : O, "assign"), q.push(u), r.flightNumber && ("R" == DDSContext.TRIP_TYPE ? r.endAirportCode && r.beginAirportCode ? f.push(r.beginAirportCode + "_" + r.endAirportCode) : f.push(Ee.getAirportCode(n.segments[0].beginLocation, !0) + "_" + Ee.getAirportCode(n.segments[i - 1].endLocation, !0)) : f.push(r.beginAirportCode)), Ce ? (d = cc11001100_hook("d", DDSContext.CABIN, "assign"), n && n.isDowngrading && (g = cc11001100_hook("g", r.cabinCodes, "assign"))) : (n && n.isDowngrading && (g = cc11001100_hook("g", r.cabinCodes, "assign")), d = cc11001100_hook("d", r.cabin, "assign")), ge.cabinTypeFullName = cc11001100_hook("ge.cabinTypeFullName", r.cabinType ? r.cabinType.toUpperCase() : "", "assign"), "PREMIUMECONOMY" === ge.cabinTypeFullName && (ge.cabinTypeFullName = cc11001100_hook("ge.cabinTypeFullName", "PEY", "assign")), ("E" === d || "R" === d || g && (-1 < g.indexOf("E") || -1 < g.indexOf("R"))) && (d = cc11001100_hook("d", "Y", "assign"), D = cc11001100_hook("D", "ECONOMY", "assign")), ("N" === d || g && -1 < g.indexOf("N")) && (d = cc11001100_hook("d", "W", "assign"), D = cc11001100_hook("D", "PEY", "assign")), ("B" === d || g && -1 < g.indexOf("B")) && (d = cc11001100_hook("d", "C", "assign"), D = cc11001100_hook("D", "BUSINESS", "assign")), ("F" === d || g && -1 < g.indexOf("F")) && (d = cc11001100_hook("d", "F", "assign"), D = cc11001100_hook("D", "FIRST", "assign")), ge.cabinsArr.push(D), l = cc11001100_hook("l", {
            carrier: cc11001100_hook("carrier", o, "object-key-init"),
            origin: cc11001100_hook("origin", r.beginAirportCode, "object-key-init"),
            destination: cc11001100_hook("destination", r.endAirportCode, "object-key-init"),
            stops: cc11001100_hook("stops", r.stops.length, "object-key-init"),
            datetime_depart: cc11001100_hook("datetime_depart", r.beginDate ? ye(r.beginDate, r.beginTimeZone) : "", "object-key-init"),
            datetime_arrival: cc11001100_hook("datetime_arrival", r.endDate ? ye(r.endDate, r.endTimeZone) : "", "object-key-init"),
            duration: cc11001100_hook("duration", u, "object-key-init"),
            cabin: cc11001100_hook("cabin", d, "object-key-init"),
            equipment: cc11001100_hook("equipment", r.equipment, "object-key-init"),
            rbd: cc11001100_hook("rbd", r.rbds, "object-key-init"),
            flight: cc11001100_hook("flight", s, "object-key-init")
          }, "assign"), Ce && !l.destination ? l.destination = cc11001100_hook("l.destination", Ee.getCityCode(n.segments[i - 1].endLocation), "assign") : Ce && !l.origin && (l.origin = cc11001100_hook("l.origin", Ee.getCityCode(n.segments[0].beginLocation), "assign")), d ? S.push(d) : a && a.fareFamily && (l.cabin = cc11001100_hook("l.cabin", Se(Ee.getCabinType(a.fareFamily)), "assign"), S.push(l.cabin)), D ? Z.push(D) : a && a.fareFamily && Z.push(Ee.getCabinType(a.fareFamily)), r.rbds ? y.push(r.rbds) : a && (l.rbd = cc11001100_hook("l.rbd", a.rbdsPerBound[N][c].rbd, "assign"), y.push(l.rbd)), _.push(l);
          G.push(T.join("_")), W.push(T.join("|")), V.push(J.join("|")), w.push(y.join("|")), p.push(S.join("|")), E.push(Z.join(",")), M.push(f.join("|")), k.push(q.join("|"));
        }
        Oe.itinerary.route = cc11001100_hook("Oe.itinerary.route", C.substr(0, C.length - 1), "assign"), Oe.itinerary.cabin = cc11001100_hook("Oe.itinerary.cabin", Ce && p[0] ? p[0] : sessionStorage.cabin && sessionStorage.getItem("cabin") ? JSON.parse(sessionStorage.getItem("cabin")) : "", "assign"), Oe.itinerary.cabin_fullname = cc11001100_hook("Oe.itinerary.cabin_fullname", Ce && E[0] ? E[0] : sessionStorage.cabin_fullname && sessionStorage.getItem("cabin_fullname") ? JSON.parse(sessionStorage.getItem("cabin_fullname")) : "", "assign"), ge.cabinsArr && 0 != ge.cabinsArr.length && -1 < ge.cabinsArr.indexOf("ECONOMY") && (window.cxDataLayer.itinerary.cabin = cc11001100_hook("window.cxDataLayer.itinerary.cabin", "Y", "assign"), window.cxDataLayer.itinerary.cabin_fullname = cc11001100_hook("window.cxDataLayer.itinerary.cabin_fullname", "ECONOMY", "assign"), sessionStorage.setItem("cabin", JSON.stringify(window.cxDataLayer.itinerary.cabin)), sessionStorage.setItem("cabin_fullname", JSON.stringify(window.cxDataLayer.itinerary.cabin_fullname))), ge.cabinsArr && 0 != ge.cabinsArr.length && -1 < ge.cabinsArr.indexOf("PEY") && (window.cxDataLayer.itinerary.cabin = cc11001100_hook("window.cxDataLayer.itinerary.cabin", "W", "assign"), window.cxDataLayer.itinerary.cabin_fullname = cc11001100_hook("window.cxDataLayer.itinerary.cabin_fullname", "PEY", "assign"), sessionStorage.setItem("cabin", JSON.stringify(window.cxDataLayer.itinerary.cabin)), sessionStorage.setItem("cabin_fullname", JSON.stringify(window.cxDataLayer.itinerary.cabin_fullname))), ge.cabinsArr && 0 != ge.cabinsArr.length && -1 < ge.cabinsArr.indexOf("BUSINESS") && (window.cxDataLayer.itinerary.cabin = cc11001100_hook("window.cxDataLayer.itinerary.cabin", "C", "assign"), window.cxDataLayer.itinerary.cabin_fullname = cc11001100_hook("window.cxDataLayer.itinerary.cabin_fullname", "BUSINESS", "assign"), sessionStorage.setItem("cabin", JSON.stringify(window.cxDataLayer.itinerary.cabin)), sessionStorage.setItem("cabin_fullname", JSON.stringify(window.cxDataLayer.itinerary.cabin_fullname))), ge.cabinsArr && 0 != ge.cabinsArr.length && -1 < ge.cabinsArr.indexOf("FIRST") && (window.cxDataLayer.itinerary.cabin = cc11001100_hook("window.cxDataLayer.itinerary.cabin", "F", "assign"), window.cxDataLayer.itinerary.cabin_fullname = cc11001100_hook("window.cxDataLayer.itinerary.cabin_fullname", "FIRST", "assign"), sessionStorage.setItem("cabin", JSON.stringify(window.cxDataLayer.itinerary.cabin)), sessionStorage.setItem("cabin_fullname", JSON.stringify(window.cxDataLayer.itinerary.cabin_fullname))), n && n.isDowngrading && (Oe.itinerary.cabin = cc11001100_hook("Oe.itinerary.cabin", d, "assign"), Oe.itinerary.cabin_fullname = cc11001100_hook("Oe.itinerary.cabin_fullname", D, "assign"), sessionStorage.setItem("cabin", JSON.stringify(Oe.itinerary.cabin)), sessionStorage.setItem("cabin_fullname", JSON.stringify(Oe.itinerary.cabin_fullname)));
        var I,
          R,
          x,
          $,
          z,
          Q,
          ee = cc11001100_hook("ee", e[0], "var-init"),
          b = cc11001100_hook("b", e[e.length - 1], "var-init"),
          A = cc11001100_hook("A", ee.segments[0], "var-init"),
          F = cc11001100_hook("F", b.segments[b.segments.length - 1], "var-init"),
          v = cc11001100_hook("v", ee.segments[ee.segments.length - 1], "var-init"),
          te = cc11001100_hook("te", A.beginDate, "var-init"),
          ae = cc11001100_hook("ae", F.endDate, "var-init"),
          L = cc11001100_hook("L", ("" == ae && pageBom.modelObject.availabilities && (I = cc11001100_hook("I", "", "assign"), pageBom.modelObject.availabilities.calendar ? I = cc11001100_hook("I", pageBom.modelObject.availabilities.calendar.bounds[e.length - 1].searchDestination.originDate, "assign") : pageBom.modelObject.availabilities.upsell && (I = cc11001100_hook("I", pageBom.modelObject.availabilities.upsell.bounds[e.length - 1].searchDestination.originDate, "assign")), ae = cc11001100_hook("ae", pe.utc(I), "assign")), b.segments[b.segments.length - 1]), "var-init"),
          P = cc11001100_hook("P", pe.utc(te), "var-init"),
          U = cc11001100_hook("U", (P.milliseconds(0), P.seconds(0), P.minutes(0), P.hours(0), ""), "var-init"),
          oe = cc11001100_hook("oe", !1, "var-init"),
          ne = cc11001100_hook("ne", (Ce && pageBom.modelObject.availabilities && pageBom.modelObject.availabilities.upsell && (oe = cc11001100_hook("oe", (R = cc11001100_hook("R", pageBom.modelObject.availabilities.upsell.bounds, "assign")) && R[1] && R[1].flights && R[1].flights[0].segments && R[1].flights[0].segments[0] && R[1].flights[0].segments[0].destinationDate, "assign")), (U = cc11001100_hook("U", L.endDate && "" != L.endDate ? pe.utc(oe || L.endDate) : pe.utc(L.beginDate), "assign")).milliseconds(0), U.seconds(0), U.minutes(0), U.hours(0), pe.duration(U.diff(P))), "var-init"),
          ie = cc11001100_hook("ie", ("R" === ge.context.TRIP_TYPE && 1 === e.length && ((x = cc11001100_hook("x", pe.utc(pageBom.modelObject.availabilities.upsell.bounds[1].flights[0].segments[0].destinationDate), "assign")).milliseconds(0), x.seconds(0), x.minutes(0), x.hours(0), ne = cc11001100_hook("ne", pe.duration(x.diff(P)), "assign")), Math.ceil(Math.abs(ne.asDays())) + 1), "var-init");
        if (Oe.itinerary.outbound = cc11001100_hook("Oe.itinerary.outbound", Ne(te, A.beginTimeZone), "assign"), "" == ge.tzOffset && (ge.tzOffset = cc11001100_hook("ge.tzOffset", A.beginTimeZone, "assign")), "R" === ge.context.TRIP_TYPE || "M" === ge.context.TRIP_TYPE ? t && t[t.length - 1] ? (Oe.itinerary.inbound = cc11001100_hook("Oe.itinerary.inbound", Ne(t[t.length - 1][0].startDate, F.endTimeZone), "assign"), (Q = cc11001100_hook("Q", pe().utcOffset(0), "assign")).set({
          hour: cc11001100_hook("hour", 0, "object-key-init"),
          minute: cc11001100_hook("minute", 0, "object-key-init"),
          second: cc11001100_hook("second", 0, "object-key-init"),
          millisecond: cc11001100_hook("millisecond", 0, "object-key-init")
        }), Oe.itinerary.inbound.time = cc11001100_hook("Oe.itinerary.inbound.time", Q.format("HH:mm:ss"), "assign"), Oe.itinerary.inbound.datetime = cc11001100_hook("Oe.itinerary.inbound.datetime", pe(Oe.itinerary.inbound.datetime, "YYYY-MM-DDTHH:mm:ss").format("YYYY-MM-DDT00:00:00"), "assign")) : (Oe.itinerary.inbound = cc11001100_hook("Oe.itinerary.inbound", Ne(ae, F.endTimeZone), "assign"), "" !== Oe.itinerary.inbound.datetime && e[1] || (z = cc11001100_hook("z", ($ = cc11001100_hook("$", pageBom.modelObject.availabilities && pageBom.modelObject.availabilities.upsell ? pageBom.modelObject.availabilities.upsell.bounds : $, "assign"))[1].flights[0].segments[0].destinationDate, "assign"), Oe.itinerary.inbound = cc11001100_hook("Oe.itinerary.inbound", Ne(z, F.endTimeZone), "assign"), (Q = cc11001100_hook("Q", pe().utcOffset(0), "assign")).set({
          hour: cc11001100_hook("hour", 0, "object-key-init"),
          minute: cc11001100_hook("minute", 0, "object-key-init"),
          second: cc11001100_hook("second", 0, "object-key-init"),
          millisecond: cc11001100_hook("millisecond", 0, "object-key-init")
        }), Oe.itinerary.inbound.datetime = cc11001100_hook("Oe.itinerary.inbound.datetime", pe(Oe.itinerary.inbound.datetime, "YYYY-MM-DDTHH:mm:ss").format("YYYY-MM-DDT00:00:00"), "assign"))) : Oe.itinerary.inbound = cc11001100_hook("Oe.itinerary.inbound", {}, "assign"), Oe.itinerary.origin = cc11001100_hook("Oe.itinerary.origin", {
          airport: cc11001100_hook("airport", A.beginAirportCode, "object-key-init"),
          city: cc11001100_hook("city", Ee.getCityCode(A.beginLocation), "object-key-init"),
          city_name: cc11001100_hook("city_name", Ee.getCityName(A.beginLocation), "object-key-init"),
          country: cc11001100_hook("country", Ee.getCountryCode(A.beginLocation), "object-key-init")
        }, "assign"), A.beginAirportCode || (Oe.itinerary.origin.airport = cc11001100_hook("Oe.itinerary.origin.airport", Ee.getAirportCode(A.beginLocation, !0), "assign")), "R" === ge.context.TRIP_TYPE ? (Oe.itinerary.destination = cc11001100_hook("Oe.itinerary.destination", {
          airport: cc11001100_hook("airport", v.endAirportCode, "object-key-init"),
          city: cc11001100_hook("city", Ee.getCityCode(v.endLocation), "object-key-init"),
          city_name: cc11001100_hook("city_name", Ee.getCityName(v.endLocation), "object-key-init"),
          country: cc11001100_hook("country", Ee.getCountryCode(v.endLocation), "object-key-init")
        }, "assign"), v.endAirportCode || (Oe.itinerary.destination.airport = cc11001100_hook("Oe.itinerary.destination.airport", Ee.getAirportCode(v.endLocation, !0), "assign"))) : (Oe.itinerary.destination = cc11001100_hook("Oe.itinerary.destination", {
          airport: cc11001100_hook("airport", F.endAirportCode, "object-key-init"),
          city: cc11001100_hook("city", Ee.getCityCode(F.endLocation), "object-key-init"),
          city_name: cc11001100_hook("city_name", Ee.getCityName(v.endLocation), "object-key-init"),
          country: cc11001100_hook("country", Ee.getCountryCode(F.endLocation), "object-key-init")
        }, "assign"), F.endAirportCode || (Oe.itinerary.destination.airport = cc11001100_hook("Oe.itinerary.destination.airport", Ee.getAirportCode(v.endLocation, !0), "assign"))), ge.originDest = cc11001100_hook("ge.originDest", Oe.itinerary.origin.airport + "_" + Oe.itinerary.destination.airport, "assign"), Oe.itinerary.trip_type = cc11001100_hook("Oe.itinerary.trip_type", ge.context.TRIP_TYPE, "assign"), !ge.isOWDPromoFlow) {
          if (Oe.itinerary.flight_duration = cc11001100_hook("Oe.itinerary.flight_duration", Y, "assign"), m && 0 != m.length) {
            for (var re = cc11001100_hook("re", 0, "var-init"), ce = cc11001100_hook("ce", 0, "var-init"); ce < m.length; ce++) re += cc11001100_hook("re", m[ce], "assign");
            Oe.itinerary.flight_duration = cc11001100_hook("Oe.itinerary.flight_duration", re, "assign");
          }
          Oe.itinerary.segment_count = cc11001100_hook("Oe.itinerary.segment_count", _.length, "assign"), Oe.itinerary.segmented_airports = cc11001100_hook("Oe.itinerary.segmented_airports", M.join("|"), "assign"), Oe.itinerary.segmented_carriers = cc11001100_hook("Oe.itinerary.segmented_carriers", V.join("|"), "assign"), Oe.itinerary.segmented_durations = cc11001100_hook("Oe.itinerary.segmented_durations", k.join("|"), "assign"), Oe.itinerary.segmented_flights = cc11001100_hook("Oe.itinerary.segmented_flights", W.join("|"), "assign"), Oe.itinerary.segments = cc11001100_hook("Oe.itinerary.segments", _, "assign");
        }
        Oe.itinerary.trip_duration = cc11001100_hook("Oe.itinerary.trip_duration", ie, "assign"), Oe.itinerary.flights = cc11001100_hook("Oe.itinerary.flights", G.join("-"), "assign"), Oe.itinerary.segmented_rbds = cc11001100_hook("Oe.itinerary.segmented_rbds", w.join("|"), "assign"), Oe.itinerary.segmented_cabins = cc11001100_hook("Oe.itinerary.segmented_cabins", p.join("|"), "assign"), Oe.itinerary.days_advance = cc11001100_hook("Oe.itinerary.days_advance", X, "assign");
        var se,
          le,
          ue = cc11001100_hook("ue", void 0 !== ge.context.nbInf && ge.context.nbInf ? Number(ge.context.nbInf) : 0, "var-init"),
          de = cc11001100_hook("de", void 0 !== ge.context.nbB15 && ge.context.nbB15 ? Number(ge.context.nbB15) : 0, "var-init"),
          h = cc11001100_hook("h", (Oe.itinerary.pax = cc11001100_hook("Oe.itinerary.pax", {
            adult: cc11001100_hook("adult", ge.context.nbAdultWoB15, "object-key-init"),
            young_adult: cc11001100_hook("young_adult", de.toString(), "object-key-init"),
            child: cc11001100_hook("child", ge.context.nbChd, "object-key-init"),
            infant: cc11001100_hook("infant", ue.toString(), "object-key-init"),
            total: cc11001100_hook("total", Number(ge.context.nbAdultWoB15) + Number(ge.context.nbChd) + ue + de, "object-key-init"),
            combination: cc11001100_hook("combination", ge.paxCombination, "object-key-init")
          }, "assign"), []), "var-init");
        ge.traveller = cc11001100_hook("ge.traveller", _e.getTraveller(), "assign"), angular.forEach(ge.traveller.travellersArray, function (e) {
          "CHD" == e.travellerType && (se = cc11001100_hook("se", pe([e.year, e.month, e.date]), "assign"), le = cc11001100_hook("le", K.diff(se, "years"), "assign"), h.push(le));
        }), void 0 !== h && 0 < h.length && (Oe.itinerary.pax.child_age = cc11001100_hook("Oe.itinerary.pax.child_age", h, "assign")), ge.isOWD && (window.cxDataLayer = cc11001100_hook("window.cxDataLayer", Oe, "assign"));
      } catch (e) {}
    }
    function R() {
      if (window.location.href) {
        window.cxDataLayer.campaign = cc11001100_hook("window.cxDataLayer.campaign", {}, "assign");
        try {
          var o = cc11001100_hook("o", {}, "var-init"),
            e = cc11001100_hook("e", (document.location.href.replace(location.hash, "").replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, t, a) {
              o[t] = cc11001100_hook("o[t]", a, "assign");
            }), !1), "var-init"),
            t = cc11001100_hook("t", !1, "var-init");
          (o.kayakclickid || ge.context.kayakclickid) && (e = cc11001100_hook("e", !0, "assign")), (o.gclid && o.gclsrc || ge.context.gclid && ge.context.gclsrc) && (t = cc11001100_hook("t", !0, "assign")), window.cxDataLayer.campaign = cc11001100_hook("window.cxDataLayer.campaign", {
            utm_channel: cc11001100_hook("utm_channel", o.utm_channel || ge.context.utm_channel || "", "object-key-init"),
            utm_source: cc11001100_hook("utm_source", o.utm_source || ge.context.utm_source || "", "object-key-init"),
            utm_medium: cc11001100_hook("utm_medium", o.utm_medium || ge.context.utm_medium || "", "object-key-init"),
            utm_campaign: cc11001100_hook("utm_campaign", o.utm_campaign || ge.context.utm_campaign || "", "object-key-init"),
            utm_content: cc11001100_hook("utm_content", o.utm_content || ge.context.utm_content || "", "object-key-init"),
            utm_term: cc11001100_hook("utm_term", o.utm_term || ge.context.utm_term || "", "object-key-init"),
            cxsource: cc11001100_hook("cxsource", o.cxsource || ge.context.cxsource || "", "object-key-init"),
            cxtag: cc11001100_hook("cxtag", o.cxtag || ge.context.cxtag || "", "object-key-init"),
            cxchannel: cc11001100_hook("cxchannel", o.cxchannel || ge.context.cxchannel || "", "object-key-init"),
            cxcampaign: cc11001100_hook("cxcampaign", o.cxcampaign || ge.context.cxcampaign || "", "object-key-init")
          }, "assign"), e && (window.cxDataLayer.campaign.kayakclickid = cc11001100_hook("window.cxDataLayer.campaign.kayakclickid", o.kayakclickid || ge.context.kayakclickid || "", "assign")), t && (window.cxDataLayer.campaign.gclid = cc11001100_hook("window.cxDataLayer.campaign.gclid", o.gclid || ge.context.gclid || "", "assign"), window.cxDataLayer.campaign.gclsrc = cc11001100_hook("window.cxDataLayer.campaign.gclsrc", o.gclsrc || ge.context.gclsrc || "", "assign"));
        } catch (e) {}
      }
    }
    function Ne(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      try {
        var a;
        return "" == e ? {
          datetime: cc11001100_hook("datetime", "", "object-key-init"),
          time: cc11001100_hook("time", "", "object-key-init"),
          date: cc11001100_hook("date", "", "object-key-init"),
          date_L: cc11001100_hook("date_L", "", "object-key-init"),
          month: cc11001100_hook("month", "", "object-key-init"),
          year: cc11001100_hook("year", "", "object-key-init")
        } : (a = cc11001100_hook("a", pe.utc(e), "assign"), {
          datetime: cc11001100_hook("datetime", ye(e, t), "object-key-init"),
          time: cc11001100_hook("time", a.format("HH:mm:ss"), "object-key-init"),
          date: cc11001100_hook("date", a.format("YYYY-MM-DD"), "object-key-init"),
          date_L: cc11001100_hook("date_L", a.format("MM/DD/YYYY"), "object-key-init"),
          month: cc11001100_hook("month", a.format("MM"), "object-key-init"),
          year: cc11001100_hook("year", a.format("YYYY"), "object-key-init")
        });
      } catch (e) {}
    }
    function x() {
      try {
        Oe.offer = cc11001100_hook("Oe.offer", {}, "assign");
        var e = cc11001100_hook("e", "REVENUE" === ge.context.BOOKING_FLOW ? "REVENUE" : "PROMOTION", "var-init");
        void 0 !== ge.context.PROMO_TYPE && (Oe.offer = cc11001100_hook("Oe.offer", {
          type: cc11001100_hook("type", "TKT", "object-key-init"),
          promotion_type: cc11001100_hook("promotion_type", ge.context.PROMO_TYPE || "", "object-key-init"),
          promotion_code: cc11001100_hook("promotion_code", ge.context.PROMO_CODE || "", "object-key-init"),
          fare_id: cc11001100_hook("fare_id", ge.context.FARE_ID || "", "object-key-init"),
          flow: cc11001100_hook("flow", e, "object-key-init"),
          started_at: cc11001100_hook("started_at", "", "object-key-init"),
          ended_at: cc11001100_hook("ended_at", "", "object-key-init")
        }, "assign"), "PURC" !== ge.pageCode && "CONF" !== ge.pageCode || (Oe.offer.depart_from = cc11001100_hook("Oe.offer.depart_from", ge.trip.bounds[0].segments[0].beginDate.format(), "assign"), Oe.offer.name = cc11001100_hook("Oe.offer.name", "", "assign"), Oe.offer.cabin = cc11001100_hook("Oe.offer.cabin", Oe.itinerary.cabin || "", "assign"), Oe.offer.feature = cc11001100_hook("Oe.offer.feature", "WEB EXCLUSIVE", "assign"), Oe.offer.origin = cc11001100_hook("Oe.offer.origin", Oe.itinerary.origin.airport, "assign"), Oe.offer.destination = cc11001100_hook("Oe.offer.destination", Oe.itinerary.destination.airport, "assign"), Oe.offer.offer_page_id = cc11001100_hook("Oe.offer.offer_page_id", "", "assign")));
      } catch (e) {}
    }
    function b() {
      try {
        Oe.offer = cc11001100_hook("Oe.offer", {}, "assign");
        var e = cc11001100_hook("e", ge.context.BOOKING_FLOW, "var-init"),
          t = cc11001100_hook("t", ge.context.PROMO_TYPE || "", "var-init");
        Oe.offer = cc11001100_hook("Oe.offer", {
          promotion_type: cc11001100_hook("promotion_type", e + "::" + t, "object-key-init"),
          promotion_code: cc11001100_hook("promotion_code", ge.context.PROMO_CODE || "", "object-key-init"),
          fare_id: cc11001100_hook("fare_id", ge.context.FARE_ID || "", "object-key-init"),
          flow: cc11001100_hook("flow", "PROMOTION", "object-key-init")
        }, "assign");
      } catch (e) {}
    }
    function A(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (null == Oe.offer && DDSContext.DISCOUNT_CODE && "OWUP" == pageCode) Oe.offer = cc11001100_hook("Oe.offer", {
        type: cc11001100_hook("type", "TKT", "object-key-init"),
        discount_type: cc11001100_hook("discount_type", "", "object-key-init"),
        discount_code: cc11001100_hook("discount_code", DDSContext.DISCOUNT_CODE.toUpperCase(), "object-key-init"),
        discount_amount: cc11001100_hook("discount_amount", "", "object-key-init")
      }, "assign");else if (!Oe.offer && DDSContext.SPONSOR_CODE || e && DDSContext.SPONSOR_CODE) DDSContext.DDS_SPONSOR_TYPE && "B" == DDSContext.DDS_SPONSOR_TYPE ? (Oe.offer = cc11001100_hook("Oe.offer", {
        type: cc11001100_hook("type", "SPONSOR_" + "BOOKING", "object-key-init"),
        discount_type: cc11001100_hook("discount_type", "", "object-key-init"),
        sponsor_code: cc11001100_hook("sponsor_code", DDSContext.SPONSOR_CODE.toUpperCase(), "object-key-init"),
        discount_amount: cc11001100_hook("discount_amount", "", "object-key-init")
      }, "assign"), e && e.modelObject.fareInfo.priceRecap.priceForAllTravellers[0] && DDSContext.DDS_SPONSOR_TYPE_AMOUNT ? (Oe.offer.discount_type = cc11001100_hook("Oe.offer.discount_type", Math.round(DDSContext.DDS_SPONSOR_TYPE_AMOUNT / e.modelObject.fareInfo.priceRecap.priceForAllTravellers[0].totalPriceWithoutTax.cashAmount.amount * 100) + "%", "assign"), Oe.offer.discount_amount = cc11001100_hook("Oe.offer.discount_amount", parseFloat(DDSContext.DDS_SPONSOR_TYPE_AMOUNT).toFixed(2), "assign"), sessionStorage.setItem("discount_type", JSON.stringify(Oe.offer.discount_type)), sessionStorage.setItem("discount_amount", JSON.stringify(Oe.offer.discount_amount))) : sessionStorage.discount_type && !Oe.offer.discount_type && !Oe.offer.discount_amount && sessionStorage.discount_amount && "OWUP" != pageCode && (Oe.offer.discount_type = cc11001100_hook("Oe.offer.discount_type", JSON.parse(sessionStorage.getItem("discount_type")), "assign"), Oe.offer.discount_amount = cc11001100_hook("Oe.offer.discount_amount", JSON.parse(sessionStorage.getItem("discount_amount")), "assign"))) : (Oe.offer = cc11001100_hook("Oe.offer", {
        type: cc11001100_hook("type", "SPONSOR_" + "TICKET", "object-key-init"),
        discount_type: cc11001100_hook("discount_type", "", "object-key-init"),
        sponsor_code: cc11001100_hook("sponsor_code", DDSContext.SPONSOR_CODE.toUpperCase(), "object-key-init"),
        discount_amount: cc11001100_hook("discount_amount", "", "object-key-init")
      }, "assign"), e && e.modelObject.fareInfo.priceRecap.priceForAllTravellers[0] && DDSContext.SPONSOR_AMOUNT ? (Oe.offer.discount_type = cc11001100_hook("Oe.offer.discount_type", Math.round(DDSContext.SPONSOR_AMOUNT / e.modelObject.fareInfo.priceRecap.priceForAllTravellers[0].totalPriceWithoutTax.cashAmount.amount * 100) + "%", "assign"), Oe.offer.discount_amount = cc11001100_hook("Oe.offer.discount_amount", parseFloat(DDSContext.SPONSOR_AMOUNT).toFixed(2), "assign"), sessionStorage.setItem("discount_type", JSON.stringify(Oe.offer.discount_type)), sessionStorage.setItem("discount_amount", JSON.stringify(Oe.offer.discount_amount))) : sessionStorage.discount_type && !Oe.offer.discount_type && !Oe.offer.discount_amount && sessionStorage.discount_amount && "OWUP" != pageCode && (Oe.offer.discount_type = cc11001100_hook("Oe.offer.discount_type", JSON.parse(sessionStorage.getItem("discount_type")), "assign"), Oe.offer.discount_amount = cc11001100_hook("Oe.offer.discount_amount", JSON.parse(sessionStorage.getItem("discount_amount")), "assign")));else {
        e && 0 == e.displayOriginalPrice && (e = cc11001100_hook("e", JSON.parse(sessionStorage.getItem("fareFamily")), "assign")), "undefined" != typeof Storage && null != e ? sessionStorage.setItem("fareFamily", JSON.stringify(e)) : e = cc11001100_hook("e", JSON.parse(sessionStorage.getItem("fareFamily")), "assign");
        try {
          Oe.offer = cc11001100_hook("Oe.offer", {}, "assign"), DDSContext.DISCOUNT_CODE && e.originalFare && e.totalPrice ? Oe.offer = cc11001100_hook("Oe.offer", {
            type: cc11001100_hook("type", "TKT", "object-key-init"),
            discount_type: cc11001100_hook("discount_type", Math.round((e.originalFare - e.totalPrice) / e.originalFare * 100) + "%", "object-key-init"),
            discount_code: cc11001100_hook("discount_code", DDSContext.DISCOUNT_CODE.toUpperCase(), "object-key-init"),
            discount_amount: cc11001100_hook("discount_amount", (e.originalFare - e.totalPrice).toFixed(2), "object-key-init")
          }, "assign") : e && e.modelObject.fareInfo.priceRecap.priceForAllTravellers[0].fareInfo ? Oe.offer = cc11001100_hook("Oe.offer", {
            type: cc11001100_hook("type", "TKT", "object-key-init"),
            discount_type: cc11001100_hook("discount_type", Math.round((e.modelObject.fareInfo.priceRecap.priceForAllTravellers[0].fareInfo.amount - e.modelObject.fareInfo.priceRecap.priceForAllTravellers[0].totalPrice.cashAmount.amount) / e.modelObject.fareInfo.priceRecap.priceForAllTravellers[0].fareInfo.amount * 100) + "%", "object-key-init"),
            discount_code: cc11001100_hook("discount_code", DDSContext.DISCOUNT_CODE.toUpperCase(), "object-key-init"),
            discount_amount: cc11001100_hook("discount_amount", (e.modelObject.fareInfo.priceRecap.priceForAllTravellers[0].fareInfo.amount - e.modelObject.fareInfo.priceRecap.priceForAllTravellers[0].totalPrice.cashAmount.amount).toFixed(2), "object-key-init")
          }, "assign") : DDSContext.DISCOUNT_CODE ? Oe.offer = cc11001100_hook("Oe.offer", {
            type: cc11001100_hook("type", "TKT", "object-key-init"),
            discount_type: cc11001100_hook("discount_type", "0%", "object-key-init"),
            discount_code: cc11001100_hook("discount_code", DDSContext.DISCOUNT_CODE.toUpperCase(), "object-key-init"),
            discount_amount: cc11001100_hook("discount_amount", 0, "object-key-init")
          }, "assign") : sessionStorage && sessionStorage.discount_amount && sessionStorage.sponsor_code && sessionStorage.sponsor_type && sessionStorage.discount_type && window.tabId && sessionStorage.sponsorTabId && sessionStorage.sponsorTabId == window.tabId && (Oe.offer.sponsor_code = cc11001100_hook("Oe.offer.sponsor_code", JSON.parse(sessionStorage.getItem("sponsor_code")), "assign"), Oe.offer.type = cc11001100_hook("Oe.offer.type", JSON.parse(sessionStorage.getItem("sponsor_type")), "assign"), Oe.offer.discount_type = cc11001100_hook("Oe.offer.discount_type", JSON.parse(sessionStorage.getItem("discount_type")), "assign"), Oe.offer.discount_amount = cc11001100_hook("Oe.offer.discount_amount", JSON.parse(sessionStorage.getItem("discount_amount")), "assign"));
        } catch (e) {}
      }
    }
    function fe(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      try {
        if (void 0 !== t && void 0 !== Oe.page) for (var a in t) Oe.page[a] = cc11001100_hook("Oe.page[a]", t[a], "assign");else {
          void 0 === Oe.page && ye();
          var o = cc11001100_hook("o", "", "var-init"),
            n = cc11001100_hook("n", getViewport(), "var-init"),
            o = cc11001100_hook("o", n.largeViewport ? "LARGE" : n.mediumViewport ? "MEDIUM" : "SMALL", "var-init"),
            i = cc11001100_hook("i", ge.context.ENTRYLANGUAGE.toUpperCase(), "var-init"),
            r = cc11001100_hook("r", (i = cc11001100_hook("i", "CN" == i.split("_")[1] ? "SC" : "TW" == i.split("_")[1] ? "ZH" : i.split("_")[0], "assign")).toLowerCase(), "var-init"),
            c = cc11001100_hook("c", ge.flowName, "var-init"),
            s = cc11001100_hook("s", ge.flowID, "var-init"),
            l = cc11001100_hook("l", "", "var-init"),
            u = cc11001100_hook("u", function (e) {
              var t = cc11001100_hook("t", "", "var-init");
              t = cc11001100_hook("t", (t = cc11001100_hook("t", e.toLowerCase(), "assign")).charAt(0).toUpperCase() + t.substr(1), "assign"), "SELECT_DATES" == e || "CALENDAR" == e ? t = cc11001100_hook("t", "Calender", "assign") : "CONF" == e ? t = cc11001100_hook("t", "Confirmation", "assign") : "OUTBOUND" == e || "OWUP" == e || Ce && "AVAI" == e ? t = cc11001100_hook("t", "OWDOutbound", "assign") : "INBOUND" == e ? t = cc11001100_hook("t", "OWDInbound", "assign") : "SUMMARY" == e ? t = cc11001100_hook("t", "Summary", "assign") : "PURC" == e ? t = cc11001100_hook("t", "Payment", "assign") : "PINS" == e ? t = cc11001100_hook("t", "Passenger", "assign") : "SEAT" == e || "SEAT MAP" == e || "SEATMAP" == e ? t = cc11001100_hook("t", "Seat", "assign") : "SERVICES" == e ? t = cc11001100_hook("t", "Services", "assign") : "AVAI" != e || Ce || (t = cc11001100_hook("t", "Upsell", "assign"));
              if (t && void 0 !== f[t]) return f[t];
              return "";
            }(l = cc11001100_hook("l", ge.owdAvailUpdateType || (void 0 !== e && e ? e : window.pageCode), "assign")), "var-init"),
            d = cc11001100_hook("d", u.pageID || l, "var-init"),
            _ = cc11001100_hook("_", (ge.isOWDPromoFlow && (s = cc11001100_hook("s", ge.stream = cc11001100_hook("ge.stream", "PROMO", "assign"), "assign"), ("TRUE" !== ge.context.BOH_PAY_LATER_SELECTED || "CONF" !== e || ge.context.PROMO_TYPE) && "ON_HOLD_CONFIRMATION" !== ge.context.BOOKING_FLOW || (s = cc11001100_hook("s", "BOH-CONF", "assign")), c = cc11001100_hook("c", "PROMO_" + ge.context.TAG_FLOW_NAME, "assign")), ge.systemName + "/" + ge.stream + "/" + c + "/" + d), "var-init"),
            r = cc11001100_hook("r", ("PURC" == window.pageCode ? ge.servicesAction = cc11001100_hook("ge.servicesAction", "checkout", "assign") : "CONF" == window.pageCode ? ge.servicesAction = cc11001100_hook("ge.servicesAction", "purchase", "assign") : "" == ge.servicesAction && "PINS" == window.pageCode && (ge.servicesAction = cc11001100_hook("ge.servicesAction", ge.context.SO_SITE_IS_INSURANCE_ENABLED ? "add" : "", "assign")), i.toLowerCase()), "var-init"),
            p = cc11001100_hook("p", ge.servicesAction, "var-init"),
            m = cc11001100_hook("m", ((ge.isOWDPromoFlow || Ce) && (p = cc11001100_hook("p", "", "assign")), ""), "var-init"),
            E = function () {
              var e = cc11001100_hook("e", "", "var-init");
              return lateLoginErrorID ? (e = cc11001100_hook("e", "WEB::IBE::LOGIN::FAILURE", "assign"), ge.signInBannerOpen = cc11001100_hook("ge.signInBannerOpen", !ge.signInAsGuest, "assign"), T()) : DDSProfile && "NO" === DDSContext.DIRECT_LOGIN ? (ge.signInBannerOpen = cc11001100_hook("ge.signInBannerOpen", !(e = cc11001100_hook("e", "WEB::IBE::LOGIN::SUCCESS", "assign")), "assign"), T()) : e = cc11001100_hook("e", "WEB::IBE::REV::PASSENGER", "assign"), e;
            };
          if (_) switch (_.toUpperCase()) {
            case "RIBE/REVENUE/REVENUE_FLEXPRICER/PASSENGER":
            case "RIBE/REVENUE/REVENUE_SCHEDULEDRIVEN/PASSENGER":
            case "RIBE/PROMO/PROMO_FLEXPRICER/PASSENGER":
              m = cc11001100_hook("m", E(), "assign");
              break;
            case "RIBE/REVENUE/REVENUE_FLEXPRICER/OUTBOUND":
            case "RIBE/REVENUE/REVENUE_FLEXPRICER/SELECT_DATES":
            case "RIBE/REVENUE/REVENUE_SCHEDULEDRIVEN/OUTBOUND":
            case "RIBE/PROMO/PROMO_FLEXPRICER/OUTBOUND":
              m = cc11001100_hook("m", "WEB::IBE::REV::SEARCH", "assign");
              break;
            case "RIBE/REVENUE/REVENUE_SCHEDULEDRIVEN/PASSENGER":
            case "RIBE/PROMO/PROMO_FLEXPRICER/PASSENGER":
              m = cc11001100_hook("m", "WEB::IBE::REV::PASSENGER", "assign");
              break;
            case "RIBE/REVENUE/REVENUE_FLEXPRICER/SEATMAP":
            case "RIBE/REVENUE/REVENUE_SCHEDULEDRIVEN/SEATMAP":
            case "RIBE/PROMO/PROMO_FLEXPRICER/SEATMAP":
              m = cc11001100_hook("m", "WEB::IBE::REV::SEATMAP", "assign");
              break;
            case "RIBE/REVENUE/REVENUE_FLEXPRICER/REVIEW_AND_PAY":
            case "RIBE/REVENUE/REVENUE_SCHEDULEDRIVEN/REVIEW_AND_PAY":
            case "RIBE/PROMO/PROMO_FLEXPRICER/REVIEW_AND_PAY":
              m = cc11001100_hook("m", "WEB::IBE::REV::REVIEW_AND_PAY", "assign");
              break;
            case "RIBE/REVENUE/REVENUE_FLEXPRICER/CONFIRMATION":
            case "RIBE/REVENUE/REVENUE_SCHEDULEDRIVEN/CONFIRMATION":
            case "RIBE/PROMO/PROMO_FLEXPRICER/CONFIRMATION":
              m = cc11001100_hook("m", "WEB::IBE::REV::CONFIRMATION", "assign");
              break;
            case "RIBE/REVENUE/REVENUE_BOHCONFIRMATION/REVIEW_AND_PAY":
            case "RIBE/PROMO/PROMO_BOHCONFIRMATION/REVIEW_AND_PAY":
              m = cc11001100_hook("m", "WEB::IBE::BOH::REVIEW_AND_PAY", "assign");
              break;
            case "RIBE/REVENUE/REVENUE_BOHCONFIRMATION/CONFIRMATION":
            case "RIBE/PROMO/PROMO_BOHCONFIRMATION/CONFIRMATION":
              m = cc11001100_hook("m", "WEB::IBE::BOH::CONFIRMATION", "assign");
          }
          ge.signInBannerOpen ? Oe.page = cc11001100_hook("Oe.page", {
            name: cc11001100_hook("name", "/RIBE/SIGN_IN", "object-key-init"),
            language: cc11001100_hook("language", r.toUpperCase(), "object-key-init"),
            country: cc11001100_hook("country", ge.context.MARKET, "object-key-init"),
            locale: cc11001100_hook("locale", r.toUpperCase() + "_" + ge.context.MARKET, "object-key-init"),
            mobile_app_screen_view: cc11001100_hook("mobile_app_screen_view", "SMALL" === o ? "TRUE" : "FALSE", "object-key-init"),
            pillar: cc11001100_hook("pillar", "MEMBER", "object-key-init")
          }, "assign") : Oe.page = cc11001100_hook("Oe.page", {
            name: cc11001100_hook("name", _, "object-key-init"),
            language: cc11001100_hook("language", r.toUpperCase(), "object-key-init"),
            country: cc11001100_hook("country", ge.context.MARKET, "object-key-init"),
            locale: cc11001100_hook("locale", r.toUpperCase() + "_" + ge.context.MARKET, "object-key-init"),
            stream: cc11001100_hook("stream", ge.stream_id, "object-key-init"),
            flow: cc11001100_hook("flow", s, "object-key-init"),
            page_action: cc11001100_hook("page_action", p, "object-key-init"),
            viewport: cc11001100_hook("viewport", o, "object-key-init"),
            pillar: cc11001100_hook("pillar", "FLIGHT", "object-key-init")
          }, "assign"), Oe.conversion = cc11001100_hook("Oe.conversion", {
            name: cc11001100_hook("name", m, "object-key-init")
          }, "assign"), O() ? Oe.registration.login_method = cc11001100_hook("Oe.registration.login_method", O(), "assign") : delete Oe.registration.login_method, ge.isBOHSelected && (Oe.page.stream = cc11001100_hook("Oe.page.stream", "BOH", "assign")), $(document.body).on("click", ".add-insurance", function () {
            Oe.page.page_action = cc11001100_hook("Oe.page.page_action", "product_click", "assign");
          }), (ge.isOWD || "ON_HOLD_CONFIRMATION" == DDSContext.BOOKING_FLOW || DDSContext.OWD_MODE && "TRUE" == DDSContext.OWD_MODE.toUpperCase()) && (window.cxDataLayer = cc11001100_hook("window.cxDataLayer", Oe, "assign"));
        }
      } catch (e) {}
    }
    function s(e) {
      cc11001100_hook("e", e, "function-parameter");
      return void 0 !== e && e instanceof Function;
    }
    function F(e) {
      cc11001100_hook("e", e, "function-parameter");
      try {
        ge.currency = cc11001100_hook("ge.currency", e.currency, "assign"), z("init"), Oe.products = cc11001100_hook("Oe.products", [], "assign");
        var t = cc11001100_hook("t", e, "var-init");
        try {
          var a,
            o,
            n,
            i,
            B,
            w,
            r,
            c,
            s,
            l,
            M,
            u,
            d,
            _,
            p,
            m,
            E,
            g,
            Y = cc11001100_hook("Y", t.paxArray.length, "var-init"),
            O = cc11001100_hook("O", ge.cabinTypeFullName, "var-init"),
            C = cc11001100_hook("C", Oe.itinerary && Oe.itinerary.route ? Oe.itinerary.route : "", "var-init");
          for (o = cc11001100_hook("o", void 0 !== ge.context.SELECTED_FARE_FAMILY_TEXT ? ge.cabinTypeFullName + "_" + ge.context.SELECTED_FARE_FAMILY_TEXT.toUpperCase() : ge.cabinTypeFullName, "assign"), !ge.isOWD && "SD" !== DDSContext.TAG_FLOW_NAME_SHORT || (ge.cabinsArr, B = cc11001100_hook("B", DDSContext.INBOUND_FARE_FAMILY || "", "assign"), w = cc11001100_hook("w", DDSContext.OUTBOUND_FARE_FAMILY, "assign"), n = cc11001100_hook("n", function (e, t) {
            return "" == e ? t : e.toUpperCase().includes("ECO") ? t.toUpperCase().includes("PEY") || t.toUpperCase().includes("BUS") || t.toUpperCase().includes("FIR") ? t : e : e.toUpperCase().includes("PEY") ? t.toUpperCase().includes("BUS") || t.toUpperCase().includes("FIR") ? t : e : e.toUpperCase().includes("BUS") && t.toUpperCase().includes("FIR") ? t : e;
          }(B, w), "assign"), r = cc11001100_hook("r", Ee.getCabinTypeFromFareFamily(n), "assign"), "PREMIUMECONOMY" === (o = cc11001100_hook("o", r ? r.toUpperCase() : "", "assign")) ? o = cc11001100_hook("o", O = cc11001100_hook("O", "PREMIUM-ECONOMY", "assign"), "assign") : O = cc11001100_hook("O", o, "assign"), n && ge.context.OUTBOUND_FARE_FAMILY && ge.context.OUTBOUND_FARE_FAMILY === n ? i = cc11001100_hook("i", ("SD" === DDSContext.TAG_FLOW_NAME_SHORT ? Ee.getBrandNameFromBrandCode(ge.context.OUTBOUND_FARE_FAMILY) : ge.context.OUTBOUND_FARE_FAMILY_TEXT).toUpperCase(), "assign") : n && ge.context.INBOUND_FARE_FAMILY && ge.context.INBOUND_FARE_FAMILY === n && (i = cc11001100_hook("i", ("SD" === DDSContext.TAG_FLOW_NAME_SHORT ? Ee.getBrandNameFromBrandCode(ge.context.INBOUND_FARE_FAMILY) : ge.context.INBOUND_FARE_FAMILY_TEXT).toUpperCase(), "assign")), ge.selectedFFCode = cc11001100_hook("ge.selectedFFCode", n, "assign")), a = cc11001100_hook("a", 0, "assign"); a < Y; a++) c = cc11001100_hook("c", t.paxArray[a], "assign"), s = cc11001100_hook("s", ge.paxTypeFullText[c] || "ADULT", "assign"), l = cc11001100_hook("l", t.pricePerTravellerType[c], "assign"), M = cc11001100_hook("M", t.currency, "assign"), E = cc11001100_hook("E", ge.isBOHSelected ? (d = cc11001100_hook("d", parseFloat(ge.BOHPrice).toFixed(2), "assign"), p = cc11001100_hook("p", _ = cc11001100_hook("_", "0.00", "assign"), "assign"), u = cc11001100_hook("u", d, "assign"), "AIR_BOH") : (u = cc11001100_hook("u", l.priceForOneTravellerOfThisType.totalPriceWithoutTax * l.quantity, "assign"), d = cc11001100_hook("d", l.priceForOneTravellerOfThisType.totalPriceWithoutTax, "assign"), _ = cc11001100_hook("_", l.priceForOneTravellerOfThisType.otherTaxes, "assign"), p = cc11001100_hook("p", l.priceForOneTravellerOfThisType.fuelSurcharge, "assign"), "AIR_TICKET-REVENUE"), "assign"), g = cc11001100_hook("g", J.includes(ge.selectedFFCode.substr(5, 2)) || X.includes(ge.selectedFFCode.substr(5, 2)) ? !DDSContext.TRIP_TYPE || "M" !== DDSContext.TRIP_TYPE && "R" !== DDSContext.TRIP_TYPE ? o + "_" + i : Ee.getCabinName(ge.selectedFFCode).toUpperCase() + "-" + Ee.getBrandNameFromBrandCode(ge.selectedFFCode).toUpperCase() : DDSContext.TRIP_TYPE && "M" === DDSContext.TRIP_TYPE && DDSContext.TAG_FLOW_NAME_SHORT && "SD-M" === DDSContext.TAG_FLOW_NAME_SHORT && J.includes(DDSContext.OUTBOUND_FARE_FAMILY.substr(5, 2)) ? o + "-" + Ee.getBrandNameFromBrandCode(DDSContext.OUTBOUND_FARE_FAMILY).toUpperCase() : o, "assign"), DDSContext.TAG_FLOW_NAME_SHORT && DDSContext.TRIP_TYPE && "M" === DDSContext.TRIP_TYPE ? ge.selectedFFCode = cc11001100_hook("ge.selectedFFCode", "SD" === DDSContext.TAG_FLOW_NAME_SHORT ? DDSContext.INBOUND_FARE_FAMILY : DDSContext.OUTBOUND_BRAND_CODE, "assign") : DDSContext.TAG_FLOW_NAME_SHORT && "SD" === DDSContext.TAG_FLOW_NAME_SHORT && (ge.selectedFFCode = cc11001100_hook("ge.selectedFFCode", J.includes(ge.selectedFFCode.substr(5, 2)) ? ge.selectedFFCode.substr(5, 2) : "NB", "assign")), m = cc11001100_hook("m", {
            type: cc11001100_hook("type", "AIR", "object-key-init"),
            product_id: cc11001100_hook("product_id", "TKT-REV::" + C + "::" + O + "::" + s, "object-key-init"),
            product_name: cc11001100_hook("product_name", "TKT-REV::" + C + "::" + O, "object-key-init"),
            product_category: cc11001100_hook("product_category", E, "object-key-init"),
            product_category_slashified: cc11001100_hook("product_category_slashified", E + "/" + ge.context.TRIP_TYPE + "/" + s + "/" + O + "/" + g, "object-key-init"),
            qty: cc11001100_hook("qty", l.quantity, "object-key-init"),
            currency: cc11001100_hook("currency", M, "object-key-init"),
            price: cc11001100_hook("price", d.toFixed(2), "object-key-init"),
            tax: cc11001100_hook("tax", _.toFixed(2), "object-key-init"),
            surcharge: cc11001100_hook("surcharge", p.toFixed(2), "object-key-init"),
            subtotal: cc11001100_hook("subtotal", u.toFixed(2), "object-key-init"),
            ff_code: cc11001100_hook("ff_code", ge.selectedFFCode, "object-key-init"),
            ff_name: cc11001100_hook("ff_name", g, "object-key-init"),
            pax_type: cc11001100_hook("pax_type", s, "object-key-init")
          }, "assign"), ge.isBOHSelected && (m.ff_code = cc11001100_hook("m.ff_code", "", "assign"), m.ff_name = cc11001100_hook("m.ff_name", "", "assign"), m.pax_type = cc11001100_hook("m.pax_type", "", "assign"), m.product_name = cc11001100_hook("m.product_name", "BOH::GUARANTEE-WAIVE", "assign"), m.product_category = cc11001100_hook("m.product_category", "AIR-BOH::BOH_GUARANTEE-WAIVE", "assign"), m.product_category_slashified = cc11001100_hook("m.product_category_slashified", "AIR_BOH/BOH-GUARANTEE-WAIVE/" + O + "/" + C + "/" + ge.paxCombination, "assign"), m.product_id = cc11001100_hook("m.product_id", "BOH::GUARANTEE-WAIVE::" + C + "::" + ge.paxCombination, "assign")), Oe.products.push(m);
        } catch (e) {}
        if ("PURC" === ge.pageCode || "CONF" === ge.pageCode) {
          Oe.products = cc11001100_hook("Oe.products", JSON.parse(DDSContext.PRODUCTS_DATA), "assign");
          var N,
            f,
            G,
            W = cc11001100_hook("W", e, "var-init");
          try {
            "TRUE" === ge.context.INSURANCE_SELECTED && (W.paxArray.length, f = cc11001100_hook("f", ge.cabinTypeFullName, "assign"), N = cc11001100_hook("N", Oe.itinerary && Oe.itinerary.route ? Oe.itinerary.route : "", "assign"), ge.context.INSURANCE_PRICE, G = cc11001100_hook("G", ge.context.SELECTED_FARE_FAMILY_TEXT ? ge.cabinTypeFullName + "_​" + ge.context.SELECTED_FARE_FAMILY_TEXT.toUpperCase() : ge.cabinTypeFullName, "assign"), angular.forEach([{
              type: cc11001100_hook("type", "ADT", "object-key-init"),
              text: cc11001100_hook("text", "ADULT", "object-key-init")
            }, {
              type: cc11001100_hook("type", "CHD", "object-key-init"),
              text: cc11001100_hook("text", "CHILD", "object-key-init")
            }, {
              type: cc11001100_hook("type", "INF", "object-key-init"),
              text: cc11001100_hook("text", "INFANT", "object-key-init")
            }], function (e) {
              var t,
                a = cc11001100_hook("a", _e.getInsurancebyPaxType(e.type), "var-init");
              0 < a.quantity && (t = cc11001100_hook("t", Number(a.price) / Number(a.quantity), "assign"), t = cc11001100_hook("t", {
                type: cc11001100_hook("type", "NON-AIR", "object-key-init"),
                product_id: cc11001100_hook("product_id", "INSURANCE::" + N + "::" + ge.context.TRIP_TYPE + "::" + f + "::" + e.text, "object-key-init"),
                product_name: cc11001100_hook("product_name", "INSURANCE::" + N + "::" + ge.context.TRIP_TYPE + "::" + f, "object-key-init"),
                product_category: cc11001100_hook("product_category", "NON-AIR_INSURANCE", "object-key-init"),
                product_category_slashified: cc11001100_hook("product_category_slashified", "NON-AIR_INSURANCE/" + e.text + "/" + ge.context.TRIP_TYPE + "/" + ge.cabinTypeFullName + "/" + N, "object-key-init"),
                qty: cc11001100_hook("qty", a.quantity, "object-key-init"),
                price: cc11001100_hook("price", t.toFixed(2), "object-key-init"),
                currency: cc11001100_hook("currency", W.currency, "object-key-init"),
                tax: cc11001100_hook("tax", "0.00", "object-key-init"),
                surcharge: cc11001100_hook("surcharge", "0.00", "object-key-init"),
                subtotal: cc11001100_hook("subtotal", a.price, "object-key-init"),
                ff_code: cc11001100_hook("ff_code", ge.selectedFFCode, "object-key-init"),
                ff_name: cc11001100_hook("ff_name", G, "object-key-init"),
                pax_type: cc11001100_hook("pax_type", e.text, "object-key-init")
              }, "assign"), Oe.products.push(t));
            }));
          } catch (e) {}
        }
        if ("CONF" === ge.pageCode) {
          var k = cc11001100_hook("k", e, "var-init");
          try {
            var y,
              S,
              T,
              D = cc11001100_hook("D", "", "var-init"),
              I = cc11001100_hook("I", [], "var-init"),
              R = cc11001100_hook("R", pageBom.modelObject.pnrRecap.hasOwnProperty("serviceSelection") ? pageBom.modelObject.pnrRecap.serviceSelection : null, "var-init");
            if (T = cc11001100_hook("T", void 0 !== ge.context.SELECTED_FARE_FAMILY_TEXT ? ge.cabinTypeFullName + "_" + ge.context.SELECTED_FARE_FAMILY_TEXT.toUpperCase() : ge.cabinTypeFullName, "assign"), R && R.hasOwnProperty("selectedServicesPerServiceType") && R.selectedServicesPerServiceType.hasOwnProperty("SIT-") && R.selectedServicesPerServiceType["SIT-"].hasOwnProperty("serviceSelectionInformation")) {
              for (var V = cc11001100_hook("V", R.selectedServicesPerServiceType["SIT-"].serviceSelectionInformation, "var-init"), x = cc11001100_hook("x", 0, "var-init"); x < V.length; x++) {
                var b,
                  A = cc11001100_hook("A", V[x], "var-init"),
                  F = cc11001100_hook("F", 0, "var-init"),
                  v = cc11001100_hook("v", 0, "var-init"),
                  L = cc11001100_hook("L", 0, "var-init"),
                  P = cc11001100_hook("P", 0, "var-init");
                A.associations && 0 < A.associations.length && A.associations[0].associatedElementId && (b = cc11001100_hook("b", A.associations[0].associatedElementId, "assign"), I[b] ? (F = cc11001100_hook("F", I[b].freeCount, "assign"), v = cc11001100_hook("v", I[b].paidCount, "assign"), L = cc11001100_hook("L", I[b].exlPrice, "assign"), P = cc11001100_hook("P", I[b].totalExlPrice, "assign"), A.price && 0 == A.price.amount ? F++ : A.price && 0 < A.price.amount && (v++, P += cc11001100_hook("P", A.price.amount, "assign"), L = cc11001100_hook("L", A.price.amount, "assign"))) : A.price && 0 == A.price.amount ? F++ : A.price && 0 < A.price.amount && (v++, L = cc11001100_hook("L", A.price.amount, "assign"), P += cc11001100_hook("P", A.price.amount, "assign")), I[b] = cc11001100_hook("I[b]", {
                  freeCount: cc11001100_hook("freeCount", F, "object-key-init"),
                  paidCount: cc11001100_hook("paidCount", v, "object-key-init"),
                  exlPrice: cc11001100_hook("exlPrice", L, "object-key-init"),
                  totalExlPrice: cc11001100_hook("totalExlPrice", P, "object-key-init")
                }, "assign"));
              }
              var H = cc11001100_hook("H", ge.trip.bounds, "var-init");
              for (x = cc11001100_hook("x", 0, "assign"); x < H.length; x++) {
                var U,
                  j = cc11001100_hook("j", H[x], "var-init"),
                  K = cc11001100_hook("K", j.segments.length, "var-init");
                for (U = cc11001100_hook("U", 0, "assign"); U < K; U++) {
                  var h = cc11001100_hook("h", j.segments[U], "var-init");
                  D = cc11001100_hook("D", Ee.getCityCode(h.beginLocation) + "_" + Ee.getCityCode(h.endLocation), "assign"), -1 != pageBom.modelObject.pnrRecap.exlSegList.indexOf(h.index) && (0 < I[h.index].paidCount && (y = cc11001100_hook("y", "EXL", "assign"), S = cc11001100_hook("S", "", "assign"), Oe.products.push({
                    type: cc11001100_hook("type", "AIR-ANCILLARY", "object-key-init"),
                    product_id: cc11001100_hook("product_id", "EXL::" + D + "::" + ge.cabinTypeFullName + S, "object-key-init"),
                    product_name: cc11001100_hook("product_name", "EXL::" + D, "object-key-init"),
                    product_category: cc11001100_hook("product_category", q, "object-key-init"),
                    product_category_slashified: cc11001100_hook("product_category_slashified", q + "/" + y + "/" + ge.cabinTypeFullName + "/" + D, "object-key-init"),
                    qty: cc11001100_hook("qty", I[h.index].paidCount, "object-key-init"),
                    currency: cc11001100_hook("currency", k.currency, "object-key-init"),
                    price: cc11001100_hook("price", I[h.index].exlPrice, "object-key-init"),
                    tax: cc11001100_hook("tax", "0.00", "object-key-init"),
                    surcharge: cc11001100_hook("surcharge", "0.00", "object-key-init"),
                    subtotal: cc11001100_hook("subtotal", I[h.index].totalExlPrice, "object-key-init"),
                    ff_code: cc11001100_hook("ff_code", ge.selectedFFCode, "object-key-init"),
                    ff_name: cc11001100_hook("ff_name", T, "object-key-init"),
                    pax_type: cc11001100_hook("pax_type", "ADULT", "object-key-init")
                  })), 0 < I[h.index].freeCount) && (y = cc11001100_hook("y", "EXL-WAIVE", "assign"), S = cc11001100_hook("S", "::WAIVE", "assign"), Oe.products.push({
                    type: cc11001100_hook("type", "AIR-ANCILLARY", "object-key-init"),
                    product_id: cc11001100_hook("product_id", "EXL::" + D + "::" + ge.cabinTypeFullName + S, "object-key-init"),
                    product_name: cc11001100_hook("product_name", "EXL::" + D, "object-key-init"),
                    product_category: cc11001100_hook("product_category", q, "object-key-init"),
                    product_category_slashified: cc11001100_hook("product_category_slashified", q + "/" + y + "/" + ge.cabinTypeFullName + "/" + D, "object-key-init"),
                    qty: cc11001100_hook("qty", I[h.index].freeCount, "object-key-init"),
                    currency: cc11001100_hook("currency", k.currency, "object-key-init"),
                    price: cc11001100_hook("price", "0.00", "object-key-init"),
                    tax: cc11001100_hook("tax", "0.00", "object-key-init"),
                    surcharge: cc11001100_hook("surcharge", "0.00", "object-key-init"),
                    subtotal: cc11001100_hook("subtotal", "0.00", "object-key-init"),
                    ff_code: cc11001100_hook("ff_code", ge.selectedFFCode, "object-key-init"),
                    ff_name: cc11001100_hook("ff_name", T, "object-key-init"),
                    pax_type: cc11001100_hook("pax_type", "ADULT", "object-key-init")
                  }));
                }
              }
            }
          } catch (e) {}
        }
        Z(Oe.products);
      } catch (e) {}
    }
    DDSContext.WDS_SDR_FLOW && "TRUE" == DDSContext.WDS_SDR_FLOW.toUpperCase() && "ON_HOLD_CONFIRMATION" != DDSContext.BOOKING_FLOW && (Ce = cc11001100_hook("Ce", !0, "assign"), D()), ge.isTrue = cc11001100_hook("ge.isTrue", !0, "assign");
    var O = function () {
      var e = cc11001100_hook("e", "", "var-init");
      return !Oe.page.name || "RIBE/REVENUE/REVENUE_FLEXPRICER/PASSENGER" != Oe.page.name.toUpperCase() && "RIBE/REVENUE/REVENUE_SCHEDULEDRIVEN/PASSENGER" != Oe.page.name.toUpperCase() && "RIBE/PROMO/PROMO_FLEXPRICER/PASSENGER" != Oe.page.name.toUpperCase() || DDSProfile && "NO" === DDSContext.DIRECT_LOGIN && (e = cc11001100_hook("e", localStorage.getItem("LATE_LOGIN_METHOD"), "assign")), e;
    };
    function v() {
      try {
        var e,
          t = cc11001100_hook("t", "", "var-init");
        void 0 === ge.profile && (Oe.registration = cc11001100_hook("Oe.registration", {}, "assign")), ge.profile ? (t = cc11001100_hook("t", "MPO" === ge.profile.USER_TYPE || "AM" === ge.profile.USER_TYPE ? ge.profile.PREF_AIR_FREQ_NUMBER_1_1 : "IBE" === ge.profile.USER_TYPE || "RU" === ge.profile.USER_TYPE ? ge.profile.USER_ID : ge.profile.CONTACT_POINT_EMAIL_1, "assign"), e = cc11001100_hook("e", void 0 !== DDSContext.miniPNR ? "GU" : "", "assign"), "IBE" === ge.profile.USER_TYPE || "RU" === ge.profile.USER_TYPE ? e = cc11001100_hook("e", "RU", "assign") : "AM" === ge.profile.USER_TYPE ? e = cc11001100_hook("e", "AM", "assign") : "MPO" === ge.profile.USER_TYPE && ("GR" === ge.profile.TIER_STATUS ? e = cc11001100_hook("e", "GR", "assign") : "SL" === ge.profile.TIER_STATUS ? e = cc11001100_hook("e", "SL", "assign") : "GO" === ge.profile.TIER_STATUS ? e = cc11001100_hook("e", "GO", "assign") : "DM" === ge.profile.TIER_STATUS ? e = cc11001100_hook("e", "DM", "assign") : "IN" === ge.profile.TIER_STATUS && (e = cc11001100_hook("e", "IN", "assign"))), Oe.registration = cc11001100_hook("Oe.registration", {
          registration_id: cc11001100_hook("registration_id", t, "object-key-init"),
          type: cc11001100_hook("type", e, "object-key-init"),
          hash_id: cc11001100_hook("hash_id", DDSProfile.DDS_SALTED_HASH || CryptoJS.SHA256(t).toString(CryptoJS.enc.Base64), "object-key-init"),
          login_status: cc11001100_hook("login_status", ge.profile ? "LOGGED IN" : "LOGGED OUT", "object-key-init")
        }, "assign")) : ge.signInAsGuest ? Oe.registration = cc11001100_hook("Oe.registration", {
          registration_id: cc11001100_hook("registration_id", "", "object-key-init"),
          hash_id: cc11001100_hook("hash_id", "", "object-key-init"),
          type: cc11001100_hook("type", "GU", "object-key-init"),
          login_status: cc11001100_hook("login_status", ge.profile ? "LOGGED IN" : "LOGGED OUT", "object-key-init")
        }, "assign") : Oe.registration = cc11001100_hook("Oe.registration", {
          registration_id: cc11001100_hook("registration_id", "", "object-key-init"),
          hash_id: cc11001100_hook("hash_id", "", "object-key-init"),
          type: cc11001100_hook("type", void 0 !== DDSContext.miniPNR ? "GU" : "", "object-key-init"),
          login_status: cc11001100_hook("login_status", ge.profile ? "LOGGED IN" : "LOGGED OUT", "object-key-init")
        }, "assign");
      } catch (e) {
        console.log(e);
      }
    }
    function Se(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e, "var-init");
      return g.FIRST === e ? t = cc11001100_hook("t", "F", "assign") : g.BUSINESS === e ? t = cc11001100_hook("t", "C", "assign") : g.PREMIUM_ECONOMY === e ? (t = cc11001100_hook("t", "W", "assign"), Oe.itinerary.cabin_fullname = cc11001100_hook("Oe.itinerary.cabin_fullname", "PEY", "assign")) : g.ECONOMY === e && (t = cc11001100_hook("t", "Y", "assign")), t;
    }
    function L() {
      try {
        var e,
          t,
          a,
          o,
          n,
          i,
          r,
          c,
          s,
          l,
          u,
          d = cc11001100_hook("d", "", "var-init"),
          _ = cc11001100_hook("_", ge.trip.bounds[0].fareFamily, "var-init");
        "E" === _ ? ge.selectedFFCode = cc11001100_hook("ge.selectedFFCode", "Y", "assign") : "N" === _ ? ge.selectedFFCode = cc11001100_hook("ge.selectedFFCode", "W", "assign") : "B" === _ ? ge.selectedFFCode = cc11001100_hook("ge.selectedFFCode", "C", "assign") : "F" === _ && (ge.selectedFFCode = cc11001100_hook("ge.selectedFFCode", "F", "assign")), e = cc11001100_hook("e", Oe.itinerary && Oe.itinerary.route ? Oe.itinerary.route : "", "assign"), "NOCABIN" !== ge.context.CABIN ? d = cc11001100_hook("d", ge.context.CABIN, "assign") : pageBom.modelObject.availabilities && pageBom.modelObject.availabilities.searchData && pageBom.modelObject.availabilities.searchData.commercialFareFamilies && pageBom.modelObject.availabilities.searchData.commercialFareFamilies[0] && (l = cc11001100_hook("l", pageBom.modelObject.availabilities.searchData.commercialFareFamilies[0].code, "assign"), s = cc11001100_hook("s", Ee.getCabinTypeFromFareFamily(l), "assign"), Oe.itinerary.cabin_fullname = cc11001100_hook("Oe.itinerary.cabin_fullname", s ? s.toUpperCase() : "", "assign"), d = cc11001100_hook("d", Se(s), "assign"), Oe.itinerary.cabin = cc11001100_hook("Oe.itinerary.cabin", d || "", "assign")), t = cc11001100_hook("t", ge.trip.bounds[0], "assign"), o = cc11001100_hook("o", ge.trip.bounds[ge.trip.bounds.length - 1], "assign"), n = cc11001100_hook("n", t.segments[0], "assign"), a = cc11001100_hook("a", t.segments[t.segments.length - 1], "assign"), i = cc11001100_hook("i", o.segments[0], "assign"), r = cc11001100_hook("r", n.beginDate, "assign"), c = cc11001100_hook("c", i.beginDate, "assign"), u = cc11001100_hook("u", pageBom.modelObject && pageBom.modelObject.availabilities && pageBom.modelObject.availabilities.calendar && pageBom.modelObject.availabilities.calendar.itineraryRecommendations ? Object.keys(pageBom.modelObject.availabilities.calendar.itineraryRecommendations).length : "", "assign"), ge.isOWDPromoFlow ? Oe.search = cc11001100_hook("Oe.search", {
          type: cc11001100_hook("type", "TICKET", "object-key-init"),
          keyword: cc11001100_hook("keyword", "TICKET::" + e + "::" + ge.context.TRIP_TYPE + "::" + ge.cabinTypeFullName, "object-key-init"),
          params: {
            date_outbound: cc11001100_hook("date_outbound", r.format("YYYY-MM-DD"), "object-key-init"),
            date_inbound: cc11001100_hook("date_inbound", c.format("YYYY-MM-DD"), "object-key-init"),
            days_advance: cc11001100_hook("days_advance", "", "object-key-init"),
            cabin: cc11001100_hook("cabin", d, "object-key-init"),
            trip_type: cc11001100_hook("trip_type", ge.context.TRIP_TYPE, "object-key-init"),
            pax: {
              adult: cc11001100_hook("adult", ge.context.nbAdultWoB15, "object-key-init"),
              young_adult: cc11001100_hook("young_adult", ge.context.nbB15, "object-key-init"),
              child: cc11001100_hook("child", ge.context.nbChd, "object-key-init"),
              infant: cc11001100_hook("infant", ge.context.nbInf, "object-key-init"),
              total: cc11001100_hook("total", Number(ge.context.nbAdultWoB15) + Number(ge.context.nbB15) + Number(ge.context.nbChd) + Number(ge.context.nbInf), "object-key-init"),
              combination: cc11001100_hook("combination", ge.paxCombination, "object-key-init")
            },
            result: {
              total: cc11001100_hook("total", u, "object-key-init")
            }
          }
        }, "assign") : Oe.search = cc11001100_hook("Oe.search", {
          type: cc11001100_hook("type", "TKT-" + ge.stream_id, "object-key-init"),
          keyword: cc11001100_hook("keyword", "TKT-" + ge.stream_id + "::" + e + "::" + ge.context.TRIP_TYPE + "::" + ge.cabinTypeFullName, "object-key-init"),
          params: {
            date_outbound: cc11001100_hook("date_outbound", r.format("YYYY-MM-DD"), "object-key-init"),
            date_inbound: cc11001100_hook("date_inbound", c.format("YYYY-MM-DD"), "object-key-init"),
            cabin: cc11001100_hook("cabin", d, "object-key-init"),
            trip_type: cc11001100_hook("trip_type", ge.context.TRIP_TYPE, "object-key-init")
          },
          pax: {
            adult: cc11001100_hook("adult", ge.context.nbAdultWoB15, "object-key-init"),
            young_adult: cc11001100_hook("young_adult", ge.context.nbB15, "object-key-init"),
            child: cc11001100_hook("child", ge.context.nbChd, "object-key-init"),
            infant: cc11001100_hook("infant", ge.context.nbInf, "object-key-init"),
            total: cc11001100_hook("total", Number(ge.context.nbAdultWoB15) + Number(ge.context.nbB15) + Number(ge.context.nbChd) + Number(ge.context.nbInf), "object-key-init"),
            combination: cc11001100_hook("combination", ge.paxCombination, "object-key-init")
          },
          origin: {
            airport: cc11001100_hook("airport", n.beginAirportCode, "object-key-init"),
            city: cc11001100_hook("city", Ee.getCityCode(n.beginLocation), "object-key-init"),
            city_name: cc11001100_hook("city_name", Ee.getCityCode(n.beginLocation), "object-key-init"),
            country: cc11001100_hook("country", Ee.getCountryCode(n.beginLocation), "object-key-init")
          },
          destination: {
            airport: cc11001100_hook("airport", a.endAirportCode, "object-key-init"),
            city: cc11001100_hook("city", Ee.getCityCode(a.endLocation), "object-key-init"),
            city_name: cc11001100_hook("city_name", Ee.getCityCode(a.endLocation), "object-key-init"),
            country: cc11001100_hook("country", Ee.getCountryCode(a.endLocation), "object-key-init")
          },
          results: {
            total: cc11001100_hook("total", u, "object-key-init")
          }
        }, "assign"), Ce && (Oe.search.keyword = cc11001100_hook("Oe.search.keyword", "TICKET::" + e + "::" + ge.context.TRIP_TYPE + "::" + Ee.getCabinType(d), "assign"), Oe.search.destination.airport = cc11001100_hook("Oe.search.destination.airport", Ee.getCityCode(a.endLocation), "assign"));
      } catch (e) {}
    }
    function P(e, t, a, o, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      try {
        ge.upsellObjFrom = cc11001100_hook("ge.upsellObjFrom", a, "assign"), ge.upsellObjTo = cc11001100_hook("ge.upsellObjTo", o, "assign"), ge.extraUpsellTypeVal = cc11001100_hook("ge.extraUpsellTypeVal", n, "assign"), void 0 === Oe.custom_data && (Oe.custom_data = cc11001100_hook("Oe.custom_data", {}, "assign"));
        var i = cc11001100_hook("i", !1, "var-init"),
          i = cc11001100_hook("i", "" !== ge.context.TAG_UPSELL_TO && ge.context.TAG_UPSELL_TO !== ge.context.TAG_UPSELL_FROM, "var-init"),
          r = cc11001100_hook("r", (e = cc11001100_hook("e", e || i, "assign"), void 0 === Oe.custom_data.ibe && (Oe.custom_data.ibe = cc11001100_hook("Oe.custom_data.ibe", {
            office_id: cc11001100_hook("office_id", ge.context.OFFICE_ID, "object-key-init"),
            upsell_currency: cc11001100_hook("upsell_currency", "", "object-key-init"),
            upsell_outbound_category: cc11001100_hook("upsell_outbound_category", "", "object-key-init"),
            upsell_inbound_category: cc11001100_hook("upsell_inbound_category", "", "object-key-init")
          }, "assign")), ""), "var-init"),
          c = cc11001100_hook("c", "", "var-init"),
          s = cc11001100_hook("s", 0, "var-init"),
          l = cc11001100_hook("l", 0, "var-init");
        if (void 0 === ge.upsellFFList && (ge.upsellFFList = cc11001100_hook("ge.upsellFFList", {
          OUTBOUND_FROM: cc11001100_hook("OUTBOUND_FROM", "", "object-key-init"),
          OUTBOUND_TO: cc11001100_hook("OUTBOUND_TO", "", "object-key-init"),
          INBOUND_FROM: cc11001100_hook("INBOUND_FROM", "", "object-key-init"),
          INBOUND_To: cc11001100_hook("INBOUND_To", "", "object-key-init")
        }, "assign")), e) {
          if (0 == t) {
            if (r = cc11001100_hook("r", a.FF, "assign"), c = cc11001100_hook("c", o.FF, "assign"), ge.upsellFFList.OUTBOUND_FROM = cc11001100_hook("ge.upsellFFList.OUTBOUND_FROM", a.FF, "assign"), ge.upsellFFList.OUTBOUND_TO = cc11001100_hook("ge.upsellFFList.OUTBOUND_TO", o.FF, "assign"), ge.fareTypesResponse && "" != ge.fareTypesResponse) for (var u = cc11001100_hook("u", ge.fareTypesResponse.fareFamilyRuleDetails, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < u.length; d++) a.FF == u[d].fareCode && (r = cc11001100_hook("r", (r = cc11001100_hook("r", u[d].fareName, "assign")).split(" ").join("-").toUpperCase(), "assign")), o.FF == u[d].fareCode && (c = cc11001100_hook("c", (c = cc11001100_hook("c", u[d].fareName, "assign")).split(" ").join("-").toUpperCase(), "assign"));
            s = cc11001100_hook("s", a.priceWithoutTax, "assign"), l = cc11001100_hook("l", o.priceWithoutTax, "assign");
          } else if (1 == t) {
            if (r = cc11001100_hook("r", a.FF, "assign"), c = cc11001100_hook("c", o.FF, "assign"), ge.upsellFFList.INBOUND_FROM = cc11001100_hook("ge.upsellFFList.INBOUND_FROM", a.FF, "assign"), ge.upsellFFList.INBOUND_To = cc11001100_hook("ge.upsellFFList.INBOUND_To", o.FF, "assign"), ge.fareTypesResponse && "" != ge.fareTypesResponse) for (u = cc11001100_hook("u", ge.fareTypesResponse.fareFamilyRuleDetails, "assign"), d = cc11001100_hook("d", 0, "assign"); d < u.length; d++) a.FF == u[d].fareCode && (r = cc11001100_hook("r", (r = cc11001100_hook("r", u[d].fareName, "assign")).split(" ").join("-").toUpperCase(), "assign")), o.FF == u[d].fareCode && (c = cc11001100_hook("c", (c = cc11001100_hook("c", u[d].fareName, "assign")).split(" ").join("-").toUpperCase(), "assign"));
            s = cc11001100_hook("s", Oe.custom_data.ibe.upsell_outbound_value_to || a.priceWithoutTax, "assign"), l = cc11001100_hook("l", o.priceWithoutTax, "assign");
          }
          Oe.custom_data.ibe.upsell_outbound_from && Oe.custom_data.ibe.upsell_inbound_from;
        }
        0 == s && ge.lowestPrice && "" != ge.lowestPrice && (s = cc11001100_hook("s", ge.lowestPrice, "assign"));
        var _ = cc11001100_hook("_", !1, "var-init"),
          p = cc11001100_hook("p", !1, "var-init");
        DDSContext.TRIP_TYPE && "M" === DDSContext.TRIP_TYPE ? (p = cc11001100_hook("p", !0, "assign"), (J.includes(o.associatedfareFamily.substr(5, 2)) || X.includes(o.associatedfareFamily.substr(5, 2))) && (_ = cc11001100_hook("_", !0, "assign"))) : (p = cc11001100_hook("p", !1, "assign"), (J.includes(o.FF.substr(5, 2)) || X.includes(o.FF.substr(5, 2))) && (_ = cc11001100_hook("_", !0, "assign"))), _ ? (0 == t ? (Oe.custom_data.ibe.outbound_value_lowest = cc11001100_hook("Oe.custom_data.ibe.outbound_value_lowest", p ? a.lowestPrice.totalPriceWithoutTax.cashAmount.amount : a.priceWithoutTax.toFixed(2), "assign"), Oe.custom_data.ibe.inbound_value_lowest = cc11001100_hook("Oe.custom_data.ibe.inbound_value_lowest", p ? null : "", "assign"), Oe.custom_data.ibe.outbound_value_selected = cc11001100_hook("Oe.custom_data.ibe.outbound_value_selected", p ? "" : o.priceWithoutTax.toFixed(2), "assign"), Oe.custom_data.ibe.inbound_value_selected = cc11001100_hook("Oe.custom_data.ibe.inbound_value_selected", p ? null : "", "assign"), Oe.custom_data.ibe.upsell_outbound_category = cc11001100_hook("Oe.custom_data.ibe.upsell_outbound_category", ge.boundUpsellCategory, "assign"), Oe.custom_data.ibe.upsell_inbound_category = cc11001100_hook("Oe.custom_data.ibe.upsell_inbound_category", p ? null : "", "assign"), Oe.custom_data.ibe.outbound_ff_code = cc11001100_hook("Oe.custom_data.ibe.outbound_ff_code", p ? o.associatedfareFamily : o.FF, "assign"), Oe.custom_data.ibe.inbound_ff_code = cc11001100_hook("Oe.custom_data.ibe.inbound_ff_code", p ? null : "", "assign"), Oe.custom_data.ibe.outbound_brand_code = cc11001100_hook("Oe.custom_data.ibe.outbound_brand_code", o.brandCode, "assign"), Oe.custom_data.ibe.inbound_brand_code = cc11001100_hook("Oe.custom_data.ibe.inbound_brand_code", p ? null : "", "assign"), Oe.custom_data.ibe.outbound_brand_lowest = cc11001100_hook("Oe.custom_data.ibe.outbound_brand_lowest", p ? Ee.getCabinName(a.associatedfareFamily).toUpperCase() + "-" + Ee.getBrandNameFromBrandCode(a.associatedfareFamily).toUpperCase() : Ee.getCabinName(a.FF).toUpperCase() + "-" + Ee.getBrandNameFromBrandCode(a.FF).toUpperCase(), "assign"), Oe.custom_data.ibe.inbound_brand_lowest = cc11001100_hook("Oe.custom_data.ibe.inbound_brand_lowest", p ? null : "", "assign"), Oe.custom_data.ibe.outbound_brand_selected = cc11001100_hook("Oe.custom_data.ibe.outbound_brand_selected", p ? Ee.getCabinName(o.associatedfareFamily).toUpperCase() + "-" + Ee.getBrandNameFromBrandCode(o.associatedfareFamily).toUpperCase() : Ee.getCabinName(o.FF).toUpperCase() + "-" + Ee.getBrandNameFromBrandCode(o.FF).toUpperCase(), "assign"), Oe.custom_data.ibe.inbound_brand_selected = cc11001100_hook("Oe.custom_data.ibe.inbound_brand_selected", p ? null : "", "assign")) : 1 == t && (Oe.custom_data.ibe.inbound_value_lowest = cc11001100_hook("Oe.custom_data.ibe.inbound_value_lowest", a.priceWithOutTaxTotal.toFixed(2), "assign"), Oe.custom_data.ibe.inbound_value_selected = cc11001100_hook("Oe.custom_data.ibe.inbound_value_selected", o.priceWithOutTaxTotal.toFixed(2), "assign"), Oe.custom_data.ibe.upsell_inbound_category = cc11001100_hook("Oe.custom_data.ibe.upsell_inbound_category", ge.boundUpsellCategory, "assign"), Oe.custom_data.ibe.inbound_brand_code = cc11001100_hook("Oe.custom_data.ibe.inbound_brand_code", o.brandCode, "assign"), Oe.custom_data.ibe.inbound_ff_code = cc11001100_hook("Oe.custom_data.ibe.inbound_ff_code", o.FF, "assign"), Oe.custom_data.ibe.inbound_brand_lowest = cc11001100_hook("Oe.custom_data.ibe.inbound_brand_lowest", Ee.getCabinName(a.FF).toUpperCase() + "-" + Ee.getBrandNameFromBrandCode(a.FF).toUpperCase(), "assign"), Oe.custom_data.ibe.inbound_brand_selected = cc11001100_hook("Oe.custom_data.ibe.inbound_brand_selected", Ee.getCabinName(o.FF).toUpperCase() + "-" + Ee.getBrandNameFromBrandCode(o.FF).toUpperCase(), "assign")), Oe.custom_data.ibe.upsell_currency = cc11001100_hook("Oe.custom_data.ibe.upsell_currency", (p ? o.lowestPrice : o).currency, "assign")) : (0 == t ? (Oe.custom_data.ibe.upsell_outbound_from = cc11001100_hook("Oe.custom_data.ibe.upsell_outbound_from", r, "assign"), Oe.custom_data.ibe.upsell_outbound_to = cc11001100_hook("Oe.custom_data.ibe.upsell_outbound_to", c, "assign"), Oe.custom_data.ibe.upsell_outbound_value_from = cc11001100_hook("Oe.custom_data.ibe.upsell_outbound_value_from", s, "assign"), Oe.custom_data.ibe.upsell_outbound_value_to = cc11001100_hook("Oe.custom_data.ibe.upsell_outbound_value_to", l, "assign"), Oe.custom_data.ibe.upsell_item = cc11001100_hook("Oe.custom_data.ibe.upsell_item", r ? r + "_" + c : "", "assign"), Oe.custom_data.ibe.upsell_inbound_from = cc11001100_hook("Oe.custom_data.ibe.upsell_inbound_from", "", "assign"), Oe.custom_data.ibe.upsell_inbound_to = cc11001100_hook("Oe.custom_data.ibe.upsell_inbound_to", "", "assign"), Oe.custom_data.ibe.upsell_inbound_value_from = cc11001100_hook("Oe.custom_data.ibe.upsell_inbound_value_from", 0, "assign"), Oe.custom_data.ibe.upsell_inbound_value_to = cc11001100_hook("Oe.custom_data.ibe.upsell_inbound_value_to", 0, "assign"), m.$on("FLIGHT_RESELECTED_TAGGING", function (e, t) {
          t && "depart" == t && (Oe.custom_data.ibe.upsell_category = cc11001100_hook("Oe.custom_data.ibe.upsell_category", [], "assign"), Oe.custom_data.ibe = cc11001100_hook("Oe.custom_data.ibe", {}, "assign"));
        })) : 1 == t && (Oe.custom_data.ibe.upsell_inbound_from = cc11001100_hook("Oe.custom_data.ibe.upsell_inbound_from", r, "assign"), Oe.custom_data.ibe.upsell_inbound_to = cc11001100_hook("Oe.custom_data.ibe.upsell_inbound_to", c, "assign"), Oe.custom_data.ibe.upsell_inbound_value_from = cc11001100_hook("Oe.custom_data.ibe.upsell_inbound_value_from", s, "assign"), Oe.custom_data.ibe.upsell_inbound_value_to = cc11001100_hook("Oe.custom_data.ibe.upsell_inbound_value_to", l, "assign"), e || (Oe.custom_data.ibe.upsell_item = cc11001100_hook("Oe.custom_data.ibe.upsell_item", Oe.custom_data.ibe.upsell_outbound_from ? Oe.custom_data.ibe.upsell_outbound_from + "_" + Oe.custom_data.ibe.upsell_outbound_to : "", "assign")), m.$on("FLIGHT_RESELECTED_TAGGING", function (e, t) {})), Oe.custom_data.ibe.upsell_outbound_from || Oe.custom_data.ibe.upsell_inbound_from ? (Oe.custom_data.ibe.upsell_indicator = cc11001100_hook("Oe.custom_data.ibe.upsell_indicator", !0, "assign"), Oe.custom_data.ibe.upsell_currency = cc11001100_hook("Oe.custom_data.ibe.upsell_currency", ge.currency, "assign"), void 0 !== ge.upsellCategory && (ge.upsellCategory.includes("CABIN-UPSELL") ? Oe.custom_data.ibe.upsell_category = cc11001100_hook("Oe.custom_data.ibe.upsell_category", "CABIN-UPSELL", "assign") : ge.upsellCategory.includes("FARE-FAMILY-UPSELL") ? Oe.custom_data.ibe.upsell_category = cc11001100_hook("Oe.custom_data.ibe.upsell_category", "FARE-FAMILY-UPSELL", "assign") : ge.upsellCategory.includes("OTHER-FLIGHT") ? Oe.custom_data.ibe.upsell_category = cc11001100_hook("Oe.custom_data.ibe.upsell_category", "OTHER-FLIGHT", "assign") : Oe.custom_data.ibe.upsell_category = cc11001100_hook("Oe.custom_data.ibe.upsell_category", "", "assign")), Oe.custom_data.ibe.upsell_category && (ge.upsellFFList = cc11001100_hook("ge.upsellFFList", {
          OUTBOUND_FROM: cc11001100_hook("OUTBOUND_FROM", Oe.custom_data.ibe.upsell_outbound_from, "object-key-init"),
          OUTBOUND_TO: cc11001100_hook("OUTBOUND_TO", Oe.custom_data.ibe.upsell_outbound_to, "object-key-init"),
          INBOUND_FROM: cc11001100_hook("INBOUND_FROM", Oe.custom_data.ibe.upsell_inbound_from, "object-key-init"),
          INBOUND_To: cc11001100_hook("INBOUND_To", Oe.custom_data.ibe.upsell_inbound_to, "object-key-init")
        }, "assign")), "" != ge.upsellFFList.OUTBOUND_FROM && "" != ge.upsellFFList.INBOUND_FROM && (E(ge.upsellFFList.OUTBOUND_FROM, ge.upsellFFList.INBOUND_FROM) == ge.upsellFFList.OUTBOUND_FROM ? ge.upsellFFList.INBOUND_FROM : ge.upsellFFList.OUTBOUND_FROM, E(ge.upsellFFList.OUTBOUND_TO, ge.upsellFFList.INBOUND_To))) : (Oe.custom_data.ibe.upsell_indicator = cc11001100_hook("Oe.custom_data.ibe.upsell_indicator", !1, "assign"), Oe.custom_data.ibe.upsell_currency = cc11001100_hook("Oe.custom_data.ibe.upsell_currency", "", "assign"), Oe.custom_data.ibe.upsell_category = cc11001100_hook("Oe.custom_data.ibe.upsell_category", "", "assign")));
      } catch (e) {}
    }
    function r(e, t, a) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      var o = cc11001100_hook("o", "", "var-init");
      return void 0 === e || "" == e ? a[a.length - 1] = cc11001100_hook("a[a.length - 1]", t, "assign") : (o = cc11001100_hook("o", e.includes("SAVE") ? t.includes("CORE") || t.includes("STANDARD") || t.includes("FLEX") ? t : e : e.includes("CORE") ? t.includes("STANDARD") || t.includes("FLEX") ? t : e : e.includes("STANDARD") && t.includes("FLEX") ? t : e, "assign"), a[a.length - 1] = cc11001100_hook("a[a.length - 1]", o, "assign")), a.join("-");
    }
    function E(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var a, o, n, i;
      return void 0 === e || "" == e ? t : (e = cc11001100_hook("e", e.toUpperCase(), "assign"), t = cc11001100_hook("t", t.toUpperCase(), "assign"), a = cc11001100_hook("a", e.split("-"), "assign"), o = cc11001100_hook("o", t.split("-"), "assign"), n = cc11001100_hook("n", a[a.length - 1], "assign"), i = cc11001100_hook("i", o[o.length - 1], "assign"), "ECONOMY" == a[0] ? "ECONOMY" == o[0] ? r(n, i, a) : "PREMIUM" == o[0] || "BUSINESS" == o[0] || "FIRST" == o[0] ? t : e : "PREMIUM" == a[0] ? "PREMIUM" == o[0] ? r(n, i, a) : "BUSINESS" == o[0] || "FIRST" == o[0] ? t : e : "BUSINESS" == a[0] ? "BUSINESS" == o[0] ? r(n, i, a) : "FIRST" == o[0] ? t : e : "FIRST" == a[0] && "FIRST" == o[0] ? r(n, i, a) : e);
    }
    function ye(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      try {
        var a = cc11001100_hook("a", "", "var-init"),
          a = cc11001100_hook("a", (e ? pe(e) : pe()).format(), "var-init");
        return void 0 !== t && t || (t = cc11001100_hook("t", void 0 !== ge.tzOffset ? ge.tzOffset : "", "assign")), -1 != a.indexOf("Z") ? a.replace("Z", t) : (a = cc11001100_hook("a", a.substr(0, a.length - 6), "assign"), a += cc11001100_hook("a", t, "assign"));
      } catch (e) {}
    }
    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      window.cxTealium && void 0 !== window.cxTealium && void 0 !== window.cxTealium.utag && cxTealium.utag.link(e);
    }
    if (ge.custom_data_before_upgrade = cc11001100_hook("ge.custom_data_before_upgrade", {}, "assign"), "EXTP" !== ge.pageCode && "SRCH" !== ge.pageCode) try {
      e(), !ge.isOWD && cxDataLayer.custom_data && (DDSContext.SKIN && "SME" === DDSContext.SKIN.toUpperCase() || DDSContext.SME_TM && "TRUE" === DDSContext.SME_TM.toUpperCase()) && (cxDataLayer.custom_data.ibe.b_code = cc11001100_hook("cxDataLayer.custom_data.ibe.b_code", DDSContext.BCODE, "assign"));
    } catch (e) {}
    function n(e) {
      cc11001100_hook("e", e, "function-parameter");
      ge.signInBannerOpen = cc11001100_hook("ge.signInBannerOpen", e, "assign"), ge.signInAsGuest = cc11001100_hook("ge.signInAsGuest", !e, "assign"), T(), fe(), v();
    }
    return ge;
  }
  angular.module("CathayPacificApp").service("TagManagerService", Te), Te.$inject = cc11001100_hook("Te.$inject", ["baseService", "$filter", "moment", "Page", "UtilsService", "CX_PAGE_INFO", "CX_CABIN_CLASS", "$rootScope", "CX_GLOBAL_CONFIG"], "assign");
}();