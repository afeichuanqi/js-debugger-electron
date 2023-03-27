//tealium universal tag - utag.2 ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
window.GoogleAnalyticsObject = cc11001100_hook("window.GoogleAnalyticsObject", "" || "ga", "assign");
window[window.GoogleAnalyticsObject] = cc11001100_hook("window[window.GoogleAnalyticsObject]", window[window.GoogleAnalyticsObject] || function () {
  (window[window.GoogleAnalyticsObject].q = cc11001100_hook("window[window.GoogleAnalyticsObject].q", window[window.GoogleAnalyticsObject].q || [], "assign")).push(arguments);
}, "assign");
try {
  (function (id, loader) {
    var u = cc11001100_hook("u", {}, "var-init");
    utag.o[loader].sender[id] = cc11001100_hook("utag.o[loader].sender[id]", u, "assign");
    if (utag.ut === undefined) {
      utag.ut = cc11001100_hook("utag.ut", {}, "assign");
    }
    if (utag.ut.loader === undefined) {
      u.loader = cc11001100_hook("u.loader", function (o) {
        var a, b, c, l;
        a = cc11001100_hook("a", document, "assign");
        if (o.type === "iframe") {
          b = cc11001100_hook("b", a.createElement("iframe"), "assign");
          b.setAttribute("height", "1");
          b.setAttribute("width", "1");
          b.setAttribute("style", "display:none");
          b.setAttribute("src", o.src);
        } else if (o.type === "img") {
          utag.DB("Attach img: " + o.src);
          b = cc11001100_hook("b", new Image(), "assign");
          b.src = cc11001100_hook("b.src", o.src, "assign");
          return;
        } else {
          b = cc11001100_hook("b", a.createElement("script"), "assign");
          b.language = cc11001100_hook("b.language", "javascript", "assign");
          b.type = cc11001100_hook("b.type", "text/javascript", "assign");
          b.async = cc11001100_hook("b.async", 1, "assign");
          b.src = cc11001100_hook("b.src", o.src, "assign");
        }
        if (o.id) {
          b.id = cc11001100_hook("b.id", o.id, "assign");
        }
        if (typeof o.cb === "function") {
          b.hFlag = cc11001100_hook("b.hFlag", 0, "assign");
          b.onreadystatechange = cc11001100_hook("b.onreadystatechange", function () {
            if ((this.readyState === 'complete' || this.readyState === 'loaded') && !b.hFlag) {
              b.hFlag = cc11001100_hook("b.hFlag", 1, "assign");
              o.cb();
            }
          }, "assign");
          b.onload = cc11001100_hook("b.onload", function () {
            if (!b.hFlag) {
              b.hFlag = cc11001100_hook("b.hFlag", 1, "assign");
              o.cb();
            }
          }, "assign");
        }
        l = cc11001100_hook("l", o.loc || "head", "assign");
        c = cc11001100_hook("c", a.getElementsByTagName(l)[0], "assign");
        if (c) {
          utag.DB("Attach to " + l + ": " + o.src);
          if (l === "script") {
            c.parentNode.insertBefore(b, c);
          } else {
            c.appendChild(b);
          }
        }
      }, "assign");
    } else {
      u.loader = cc11001100_hook("u.loader", utag.ut.loader, "assign");
    }
    if (utag.ut.typeOf === undefined) {
      u.typeOf = cc11001100_hook("u.typeOf", function (e) {
        return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      }, "assign");
    } else {
      u.typeOf = cc11001100_hook("u.typeOf", utag.ut.typeOf, "assign");
    }
    u.ev = cc11001100_hook("u.ev", {
      'view': cc11001100_hook('view', 1, "object-key-init"),
      'link': cc11001100_hook('link', 1, "object-key-init")
    }, "assign");
    u.o = cc11001100_hook("u.o", window[window.GoogleAnalyticsObject], "assign");
    u.required = cc11001100_hook("u.required", {}, "assign");
    u.created = cc11001100_hook("u.created", false, "assign");
    u.all = cc11001100_hook("u.all", function (e, o, v, a, b, c) {
      for (var i = cc11001100_hook("i", 0, "var-init"); i < u.data.account.length; i++) {
        var t = cc11001100_hook("t", u.data.name[i] ? u.data.name[i] + "." : "", "var-init");
        if (o === "event") {
          u.o(t + e, o, v, a, b, c);
        } else if (v !== undefined) {
          u.o(t + e, o, v);
        } else {
          u.o(t + e, o);
        }
      }
    }, "assign");
    u.setHitData = cc11001100_hook("u.setHitData", function (g, a, b, f) {
      var obj = cc11001100_hook("obj", u.data[a], "var-init");
      for (var d in utag.loader.GV(obj)) {
        if (b && d.indexOf("enh_" + b + "-") !== 0 && d.indexOf("enh_all-") !== 0) {
          continue;
        }
        var idx = cc11001100_hook("idx", d.split("-")[1], "var-init"),
          val = cc11001100_hook("val", obj[d], "var-init");
        if (u.typeOf(val) !== "array") {
          g[idx] = cc11001100_hook("g[idx]", val, "assign");
        } else {
          g[idx] = cc11001100_hook("g[idx]", val[f], "assign");
        }
      }
    }, "assign");
    u.addEvent = cc11001100_hook("u.addEvent", function (v) {
      if (typeof v.eventCategory == "undefined" || typeof v.eventAction == "undefined") {
        utag.DB("GA event Category or Action is not set");
        return;
      }
      if (isNaN(parseInt(v.eventValue))) {
        utag.DB("GA event Value is not a number");
        v.eventValue = cc11001100_hook("v.eventValue", null, "assign");
      } else {
        v.eventValue = cc11001100_hook("v.eventValue", parseInt(v.eventValue) || null, "assign");
      }
      u.data.ga_events.push(v);
    }, "assign");
    u.addproduct = cc11001100_hook("u.addproduct", function (event_type, len, imp) {
      var g = cc11001100_hook("g", {}, "var-init"),
        i,
        j,
        k = cc11001100_hook("k", [], "var-init");
      if (imp === true) {
        k = cc11001100_hook("k", u.data.enh_impression_id.length ? u.data.enh_impression_id : u.data.enh_impression_name, "assign");
        for (i = cc11001100_hook("i", 0, "assign"); i < k.length; i++) {
          g = cc11001100_hook("g", {}, "assign");
          g.id = cc11001100_hook("g.id", u.data.enh_impression_id[i] ? u.data.enh_impression_id[i] : "", "assign");
          g.name = cc11001100_hook("g.name", u.data.enh_impression_name[i] ? u.data.enh_impression_name[i] : "", "assign");
          g.brand = cc11001100_hook("g.brand", u.data.enh_impression_brand[i] ? u.data.enh_impression_brand[i] : "", "assign");
          g.variant = cc11001100_hook("g.variant", u.data.enh_impression_variant[i] ? u.data.enh_impression_variant[i] : "", "assign");
          g.category = cc11001100_hook("g.category", u.data.enh_impression_category[i] ? u.data.enh_impression_category[i] : "", "assign");
          g.list = cc11001100_hook("g.list", u.data.enh_impression_list[i] ? u.data.enh_impression_list[i] : "", "assign");
          g.price = cc11001100_hook("g.price", u.data.enh_impression_price[i] ? u.data.enh_impression_price[i] : "", "assign");
          g.position = cc11001100_hook("g.position", u.data.enh_impression_position[i] ? u.data.enh_impression_position[i] : "", "assign");
          u.setHitData(g, "enhecom_events", event_type, i);
          u.all('ec:addImpression', g);
        }
      } else {
        for (i = cc11001100_hook("i", 0, "assign"); i < len; i++) {
          g = cc11001100_hook("g", {}, "assign");
          if (u.data.autofill_params === "true") {
            for (j = cc11001100_hook("j", 0, "assign"); j < u.data.product_id.length; j++) {
              u.data.product_name[j] = cc11001100_hook("u.data.product_name[j]", u.data.product_name[j] || u.data.product_id[j], "assign");
              u.data.product_unit_price[j] = cc11001100_hook("u.data.product_unit_price[j]", u.data.product_unit_price[j] || "1.00", "assign");
              u.data.product_quantity[j] = cc11001100_hook("u.data.product_quantity[j]", u.data.product_quantity[j] || "1", "assign");
            }
          }
          g.id = cc11001100_hook("g.id", u.data.product_id[i], "assign");
          g.name = cc11001100_hook("g.name", u.data.product_name[i] ? u.data.product_name[i] : "", "assign");
          g.brand = cc11001100_hook("g.brand", u.data.product_brand[i] ? u.data.product_brand[i] : "", "assign");
          g.variant = cc11001100_hook("g.variant", u.data.product_variant[i] ? u.data.product_variant[i] : "", "assign");
          g.category = cc11001100_hook("g.category", u.data.product_category[i] ? u.data.product_category[i] : "", "assign");
          g.price = cc11001100_hook("g.price", u.data.product_unit_price[i] ? u.data.product_unit_price[i] : "", "assign");
          g.quantity = cc11001100_hook("g.quantity", u.data.product_quantity[i] ? u.data.product_quantity[i] : "", "assign");
          g.coupon = cc11001100_hook("g.coupon", u.data.product_discount[i] ? u.data.product_discount[i] : "", "assign");
          g.position = cc11001100_hook("g.position", u.data.product_position[i] ? u.data.product_position[i] : "", "assign");
          u.setHitData(g, "enhecom_events", event_type, i);
          u.all('ec:addProduct', g);
        }
      }
    }, "assign");
    u.addpromo = cc11001100_hook("u.addpromo", function (action, event) {
      var f, g;
      for (f = cc11001100_hook("f", 0, "assign"); f < u.data.enh_promo_id.length; f++) {
        g = cc11001100_hook("g", {}, "assign");
        g.id = cc11001100_hook("g.id", u.data.enh_promo_id[f], "assign");
        g.name = cc11001100_hook("g.name", u.data.enh_promo_name[f] ? u.data.enh_promo_name[f] : u.data.enh_promo_id[f], "assign");
        g.creative = cc11001100_hook("g.creative", u.data.enh_promo_creative[f] ? u.data.enh_promo_creative[f] : "", "assign");
        g.position = cc11001100_hook("g.position", u.data.enh_promo_position[f] ? u.data.enh_promo_position[f] : "", "assign");
        u.all('ec:addPromo', g);
      }
      if (action === "promo_click" && event === "link") {
        u.all('ec:setAction', u.data.enh_action);
        if (u.data.autosend_events === "true") {
          u.all('send', 'event', 'Internal Promotions', 'click', g.name ? g.name : g.id, {
            'hitCallback': cc11001100_hook('hitCallback', u.data.enh_event_cb, "object-key-init")
          });
        }
      }
    }, "assign");
    u.createTracker = cc11001100_hook("u.createTracker", function () {
      var i, tn, start;
      u.data.account = cc11001100_hook("u.data.account", u.data.tid || u.data.account, "assign");
      if (u.typeOf(u.data.account) === "string") {
        u.data.account = cc11001100_hook("u.data.account", u.data.account.replace(/\s/g, "").split(","), "assign");
      }
      if (u.typeOf(u.data.name) === "string" && u.data.name !== "") {
        u.data.name = cc11001100_hook("u.data.name", u.data.name.replace(/\s/g, "").split(","), "assign");
      }
      if (!u.data.name || u.data.name.length !== u.data.account.length) {
        start = cc11001100_hook("start", u.data.name.length !== u.data.account.length ? u.data.name.length : 0, "assign");
        tn = cc11001100_hook("tn", utag.tagsettings.gua.trackernames, "assign");
        u.data.name = cc11001100_hook("u.data.name", u.data.name || [], "assign");
        for (i = cc11001100_hook("i", start, "assign"); i < u.data.account.length; i++) {
          u.data.name.push("tealium_" + (i + tn));
        }
        utag.tagsettings.gua.trackernames = cc11001100_hook("utag.tagsettings.gua.trackernames", tn + i, "assign");
      }
    }, "assign");
    u.initTracker = cc11001100_hook("u.initTracker", function () {
      var c, f;
      if (!u.created) {
        u.created = cc11001100_hook("u.created", true, "assign");
        for (f = cc11001100_hook("f", 0, "assign"); f < u.data.account.length; f++) {
          c = cc11001100_hook("c", {}, "assign");
          if (u.data.siteSpeedSampleRate) {
            c.siteSpeedSampleRate = cc11001100_hook("c.siteSpeedSampleRate", parseInt(u.data.siteSpeedSampleRate), "assign");
          }
          if (u.data.sampleRate) {
            c.sampleRate = cc11001100_hook("c.sampleRate", parseFloat(u.data.sampleRate), "assign");
          }
          c.cookieDomain = cc11001100_hook("c.cookieDomain", u.data.cookieDomain, "assign");
          if (u.data.cookieExpires || u.data.cookieExpires === "0") {
            c.cookieExpires = cc11001100_hook("c.cookieExpires", parseInt(u.data.cookieExpires), "assign");
          }
          if (u.data.legacyCookieDomain) {
            c.legacyCookieDomain = cc11001100_hook("c.legacyCookieDomain", u.data.legacyCookieDomain, "assign");
          }
          c.allowLinker = cc11001100_hook("c.allowLinker", u.data.allowLinker, "assign");
          if (typeof u.data.name[f] !== "undefined" && u.data.name[f] !== "") {
            c.name = cc11001100_hook("c.name", u.data.name[f], "assign");
          }
          u.o("create", u.data.account[f], c);
        }
        if (u.data.global_event_cb) {
          u.all('set', 'hitCallback', u.data.global_event_cb);
        }
        if (u.data.optimizely === "true") {
          window.optimizely = cc11001100_hook("window.optimizely", window.optimizely || [], "assign");
          window.optimizely.push(['activateUniversalAnalytics']);
        }
      }
    }, "assign");
    u.setGlobalProperties = cc11001100_hook("u.setGlobalProperties", function (data, reset, custom_property) {
      var map = cc11001100_hook("map", {
          "uid": {
            "name": cc11001100_hook("name", "&uid", "object-key-init"),
            "type": cc11001100_hook("type", "exists", "object-key-init")
          },
          "page": {
            "name": cc11001100_hook("name", "page", "object-key-init"),
            "type": cc11001100_hook("type", "exists", "object-key-init")
          },
          "title": {
            "name": cc11001100_hook("name", "title", "object-key-init"),
            "type": cc11001100_hook("type", "exists", "object-key-init")
          },
          "location": {
            "name": cc11001100_hook("name", "location", "object-key-init"),
            "type": cc11001100_hook("type", "exists", "object-key-init")
          },
          "campaignId": {
            "name": cc11001100_hook("name", "campaignId", "object-key-init"),
            "type": cc11001100_hook("type", "exists", "object-key-init")
          },
          "campaignName": {
            "name": cc11001100_hook("name", "campaignName", "object-key-init"),
            "type": cc11001100_hook("type", "exists", "object-key-init")
          },
          "campaignSource": {
            "name": cc11001100_hook("name", "campaignSource", "object-key-init"),
            "type": cc11001100_hook("type", "exists", "object-key-init")
          },
          "campaignMedium": {
            "name": cc11001100_hook("name", "campaignMedium", "object-key-init"),
            "type": cc11001100_hook("type", "exists", "object-key-init")
          },
          "campaignContent": {
            "name": cc11001100_hook("name", "campaignContent", "object-key-init"),
            "type": cc11001100_hook("type", "exists", "object-key-init")
          },
          "campaignKeyword": {
            "name": cc11001100_hook("name", "campaignKeyword", "object-key-init"),
            "type": cc11001100_hook("type", "exists", "object-key-init")
          },
          "dataSource": {
            "name": cc11001100_hook("name", "dataSource", "object-key-init"),
            "type": cc11001100_hook("type", "exists", "object-key-init")
          }
        }, "var-init"),
        prop;
      if (custom_property && reset) {
        u.all("set", custom_property, "");
      }
      for (prop in utag.loader.GV(map)) {
        if (reset) {
          u.all("set", map[prop].name, "");
        } else {
          if (map[prop].type === "bool") {
            if (data[prop] == true || data[prop] === "true") {
              u.all("set", map[prop].name, true);
            }
          } else if (map[prop].type === "exists") {
            if (data[prop]) {
              u.all("set", map[prop].name, data[prop]);
            }
          }
        }
      }
    }, "assign");
    window.utag.tagsettings = cc11001100_hook("window.utag.tagsettings", window.utag.tagsettings || {}, "assign");
    window.utag.tagsettings.gua = cc11001100_hook("window.utag.tagsettings.gua", window.utag.tagsettings.gua || {}, "assign");
    window.utag.tagsettings.gua.trackernames = cc11001100_hook("window.utag.tagsettings.gua.trackernames", window.utag.tagsettings.gua.trackernames || 0, "assign");
    u.map = cc11001100_hook("u.map", {
      "event.event_action": cc11001100_hook("event.event_action", "eventAction", "object-key-init"),
      "event.event_category": cc11001100_hook("event.event_category", "eventCategory", "object-key-init"),
      "event.event_label": cc11001100_hook("event.event_label", "eventLabel", "object-key-init"),
      "vendor.ga.ecommerce_action": cc11001100_hook("vendor.ga.ecommerce_action", "enh_action", "object-key-init"),
      "vendor.ga.tracker_id": cc11001100_hook("vendor.ga.tracker_id", "tid", "object-key-init"),
      "page.page_id_slashified": cc11001100_hook("page.page_id_slashified", "page,dimension7", "object-key-init"),
      "dom.title": cc11001100_hook("dom.title", "title", "object-key-init"),
      "page.country": cc11001100_hook("page.country", "dimension1", "object-key-init"),
      "page.language": cc11001100_hook("page.language", "dimension2", "object-key-init"),
      "page.locale": cc11001100_hook("page.locale", "dimension3", "object-key-init"),
      "campaign.utm_medium": cc11001100_hook("campaign.utm_medium", "campaignMedium", "object-key-init"),
      "campaign.utm_content": cc11001100_hook("campaign.utm_content", "campaignContent", "object-key-init"),
      "campaign.utm_source": cc11001100_hook("campaign.utm_source", "campaignSource", "object-key-init"),
      "campaign.utm_campaign": cc11001100_hook("campaign.utm_campaign", "campaignName", "object-key-init"),
      "campaign.utm_term": cc11001100_hook("campaign.utm_term", "campaignKeyword", "object-key-init"),
      "event.event_value": cc11001100_hook("event.event_value", "eventValue", "object-key-init"),
      "error.error_code": cc11001100_hook("error.error_code", "eventAction", "object-key-init"),
      "error.error_category": cc11001100_hook("error.error_category", "eventCategory", "object-key-init"),
      "error.error_description": cc11001100_hook("error.error_description", "eventLabel", "object-key-init"),
      "exception.exp_description": cc11001100_hook("exception.exp_description", "exception_reason", "object-key-init"),
      "collection.products.ff_names": cc11001100_hook("collection.products.ff_names", "product_variant", "object-key-init"),
      "collection.products.product_categories_slashified": cc11001100_hook("collection.products.product_categories_slashified", "product_category", "object-key-init"),
      "collection.products.product_ids": cc11001100_hook("collection.products.product_ids", "product_id", "object-key-init"),
      "collection.products.prices": cc11001100_hook("collection.products.prices", "product_unit_price", "object-key-init"),
      "collection.products.qtys": cc11001100_hook("collection.products.qtys", "product_quantity", "object-key-init"),
      "collection.products_impression.product_ids": cc11001100_hook("collection.products_impression.product_ids", "enh_impression_id", "object-key-init"),
      "collection.products_impression.product_names": cc11001100_hook("collection.products_impression.product_names", "enh_impression_name", "object-key-init"),
      "collection.products_impression.product_categories_slashified": cc11001100_hook("collection.products_impression.product_categories_slashified", "enh_impression_category", "object-key-init"),
      "collection.products_impression.ffnames": cc11001100_hook("collection.products_impression.ffnames", "enh_impression_variant", "object-key-init"),
      "application.name": cc11001100_hook("application.name", "dimension4", "object-key-init"),
      "page.brand": cc11001100_hook("page.brand", "dimension6", "object-key-init"),
      "page.page_code": cc11001100_hook("page.page_code", "dimension10", "object-key-init"),
      "page.stream": cc11001100_hook("page.stream", "dimension13", "object-key-init"),
      "page.flow": cc11001100_hook("page.flow", "dimension9", "object-key-init"),
      "registration.type": cc11001100_hook("registration.type", "dimension5,dimension49", "object-key-init"),
      "custom_data.atc.fare_difference_in_hkd": cc11001100_hook("custom_data.atc.fare_difference_in_hkd", "transaction-metric5", "object-key-init"),
      "custom_data.atc.tax_and_surcharge_difference_in_hkd": cc11001100_hook("custom_data.atc.tax_and_surcharge_difference_in_hkd", "transaction-metric6", "object-key-init"),
      "collection.products_impression.list": cc11001100_hook("collection.products_impression.list", "enh_impression_list", "object-key-init"),
      "events": cc11001100_hook("events", "ga_events", "object-key-init"),
      "booking.subtotal_with_currency": cc11001100_hook("booking.subtotal_with_currency", "transaction-dimension15", "object-key-init"),
      "custom_data.ibe.upsell_category": cc11001100_hook("custom_data.ibe.upsell_category", "transaction-dimension35,dimension90", "object-key-init"),
      "custom_data.ibe.upsell_item": cc11001100_hook("custom_data.ibe.upsell_item", "transaction-dimension36,dimension91", "object-key-init"),
      "custom_data.ibe.upsell_value": cc11001100_hook("custom_data.ibe.upsell_value", "transaction-metric4", "object-key-init"),
      "custom_data.atc.change_fee_in_hkd": cc11001100_hook("custom_data.atc.change_fee_in_hkd", "transaction-metric11", "object-key-init"),
      "custom_data.atc.nra_in_hkd": cc11001100_hook("custom_data.atc.nra_in_hkd", "transaction-metric12", "object-key-init"),
      "itinerary.pax.combination": cc11001100_hook("itinerary.pax.combination", "dimension18", "object-key-init"),
      "offer.promotion_code": cc11001100_hook("offer.promotion_code", "dimension16", "object-key-init"),
      "itinerary.days_advance": cc11001100_hook("itinerary.days_advance", "dimension47", "object-key-init"),
      "itinerary.segmented_flights": cc11001100_hook("itinerary.segmented_flights", "transaction-dimension30", "object-key-init"),
      "itinerary.segmented_carriers": cc11001100_hook("itinerary.segmented_carriers", "dimension31", "object-key-init"),
      "collection.products.product_names": cc11001100_hook("collection.products.product_names", "product_name", "object-key-init"),
      "registration.registration_id": cc11001100_hook("registration.registration_id", "dimension34,uid,dimension48", "object-key-init"),
      "page.viewport": cc11001100_hook("page.viewport", "dimension11", "object-key-init"),
      "itinerary.trip_type": cc11001100_hook("itinerary.trip_type", "dimension62", "object-key-init"),
      "transaction.payment_method": cc11001100_hook("transaction.payment_method", "transaction-dimension23", "object-key-init"),
      "transaction.payment_gateway": cc11001100_hook("transaction.payment_gateway", "transaction-dimension24", "object-key-init"),
      "ut.visitor_id": cc11001100_hook("ut.visitor_id", "dimension38", "object-key-init"),
      "page.owd_mode": cc11001100_hook("page.owd_mode", "dimension63", "object-key-init"),
      "page.login_status": cc11001100_hook("page.login_status", "dimension12", "object-key-init"),
      "offer.promotion_type": cc11001100_hook("offer.promotion_type", "dimension17", "object-key-init"),
      "itinerary.route": cc11001100_hook("itinerary.route", "dimension19", "object-key-init"),
      "itinerary.cabin_fullname": cc11001100_hook("itinerary.cabin_fullname", "dimension20", "object-key-init"),
      "offer.fare_id": cc11001100_hook("offer.fare_id", "dimension21", "object-key-init"),
      "itinerary.segmented_rbds": cc11001100_hook("itinerary.segmented_rbds", "dimension32", "object-key-init"),
      "itinerary.outbound.date": cc11001100_hook("itinerary.outbound.date", "dimension39", "object-key-init"),
      "itinerary.origin.airport": cc11001100_hook("itinerary.origin.airport", "dimension40", "object-key-init"),
      "itinerary.origin.city": cc11001100_hook("itinerary.origin.city", "dimension41", "object-key-init"),
      "itinerary.origin.country": cc11001100_hook("itinerary.origin.country", "dimension42", "object-key-init"),
      "itinerary.destination.airport": cc11001100_hook("itinerary.destination.airport", "dimension43", "object-key-init"),
      "itinerary.destination.city": cc11001100_hook("itinerary.destination.city", "dimension44", "object-key-init"),
      "itinerary.destination.country": cc11001100_hook("itinerary.destination.country", "dimension45", "object-key-init"),
      "itinerary.trip_duration": cc11001100_hook("itinerary.trip_duration", "dimension46", "object-key-init"),
      "dom.url": cc11001100_hook("dom.url", "dimension61", "object-key-init"),
      "vendor.ga.page_id": cc11001100_hook("vendor.ga.page_id", "page,dimension7", "object-key-init"),
      "transaction.transaction_id": cc11001100_hook("transaction.transaction_id", "order_id", "object-key-init"),
      "transaction.subtotal": cc11001100_hook("transaction.subtotal", "revenue", "object-key-init"),
      "transaction.surcharge": cc11001100_hook("transaction.surcharge", "shipping", "object-key-init"),
      "transaction.tax": cc11001100_hook("transaction.tax", "tax", "object-key-init"),
      "vendor.ga.cm15": cc11001100_hook("vendor.ga.cm15", "metric15", "object-key-init"),
      "vendor.ga.cm16": cc11001100_hook("vendor.ga.cm16", "metric16", "object-key-init"),
      "collection.products.product_categories": cc11001100_hook("collection.products.product_categories", "dimension22", "object-key-init"),
      "search.params.pax.combination": cc11001100_hook("search.params.pax.combination", "dimension18", "object-key-init"),
      "search.params.cabin_fullname": cc11001100_hook("search.params.cabin_fullname", "dimension20", "object-key-init"),
      "search.params.date_outbound": cc11001100_hook("search.params.date_outbound", "dimension39", "object-key-init"),
      "search.params.origin.airport": cc11001100_hook("search.params.origin.airport", "dimension40", "object-key-init"),
      "search.params.origin.city": cc11001100_hook("search.params.origin.city", "dimension41", "object-key-init"),
      "search.params.origin.country": cc11001100_hook("search.params.origin.country", "dimension42", "object-key-init"),
      "search.params.destination.airport": cc11001100_hook("search.params.destination.airport", "dimension43", "object-key-init"),
      "search.params.destination.city": cc11001100_hook("search.params.destination.city", "dimension44", "object-key-init"),
      "search.params.destination.country": cc11001100_hook("search.params.destination.country", "dimension45", "object-key-init"),
      "search.params.days_advance": cc11001100_hook("search.params.days_advance", "dimension47", "object-key-init"),
      "search.params.trip_type": cc11001100_hook("search.params.trip_type", "dimension62", "object-key-init"),
      "vendor.ga.cm13": cc11001100_hook("vendor.ga.cm13", "metric13", "object-key-init"),
      "_ccurrency": cc11001100_hook("_ccurrency", "currencyCode", "object-key-init"),
      "qp.utm_source": cc11001100_hook("qp.utm_source", "campaignSource", "object-key-init"),
      "qp.utm_medium": cc11001100_hook("qp.utm_medium", "campaignMedium", "object-key-init"),
      "qp.utm_campaign": cc11001100_hook("qp.utm_campaign", "campaignName", "object-key-init"),
      "qp.utm_content": cc11001100_hook("qp.utm_content", "campaignContent", "object-key-init"),
      "qp.utm_term": cc11001100_hook("qp.utm_term", "campaignKeyword", "object-key-init"),
      "cp.utm": cc11001100_hook("cp.utm", "dimension50", "object-key-init"),
      "errors.error_code": cc11001100_hook("errors.error_code", "eventAction", "object-key-init"),
      "errors.error_category": cc11001100_hook("errors.error_category", "eventCategory", "object-key-init"),
      "errors.error_description": cc11001100_hook("errors.error_description", "eventLabel", "object-key-init"),
      "ga_events_array": cc11001100_hook("ga_events_array", "ga_events", "object-key-init"),
      "vendor.ga.ec_action:promo_click": cc11001100_hook("vendor.ga.ec_action:promo_click", "promo_click", "object-key-init"),
      "collection.banner.ids": cc11001100_hook("collection.banner.ids", "enh_promo_id", "object-key-init"),
      "collection.banner.names": cc11001100_hook("collection.banner.names", "enh_promo_name", "object-key-init"),
      "collection.banner.creatives": cc11001100_hook("collection.banner.creatives", "enh_promo_creative", "object-key-init"),
      "collection.banner.positions": cc11001100_hook("collection.banner.positions", "enh_promo_position", "object-key-init"),
      "vendor.ga.non_interaction": cc11001100_hook("vendor.ga.non_interaction", "nonInteraction", "object-key-init"),
      "vendor.ga.timing_category": cc11001100_hook("vendor.ga.timing_category", "timingCategory", "object-key-init"),
      "vendor.ga.timing_label": cc11001100_hook("vendor.ga.timing_label", "timingLabel", "object-key-init"),
      "vendor.ga.timing_value": cc11001100_hook("vendor.ga.timing_value", "timingValue", "object-key-init"),
      "vendor.ga.timing_variable": cc11001100_hook("vendor.ga.timing_variable", "timingVar", "object-key-init"),
      "vendor.ga.cm14": cc11001100_hook("vendor.ga.cm14", "metric14", "object-key-init"),
      "offer.discount_code": cc11001100_hook("offer.discount_code", "dimension74,coupon", "object-key-init"),
      "transaction.subtotal_net": cc11001100_hook("transaction.subtotal_net", "transaction-metric18", "object-key-init"),
      "offer.discount_type": cc11001100_hook("offer.discount_type", "dimension75", "object-key-init"),
      "search.params.trip_duration": cc11001100_hook("search.params.trip_duration", "dimension46", "object-key-init"),
      "page.name": cc11001100_hook("page.name", "page,dimension7", "object-key-init"),
      "qp.cxsource": cc11001100_hook("qp.cxsource", "dimension27", "object-key-init"),
      "vendor.ga.allowAdFeatures": cc11001100_hook("vendor.ga.allowAdFeatures", "set.allowAdFeatures,displayfeatures", "object-key-init"),
      "search.origin.airport": cc11001100_hook("search.origin.airport", "dimension40", "object-key-init"),
      "search.origin.city": cc11001100_hook("search.origin.city", "dimension41", "object-key-init"),
      "search.destination.airport": cc11001100_hook("search.destination.airport", "dimension43", "object-key-init"),
      "search.destination.city": cc11001100_hook("search.destination.city", "dimension44", "object-key-init"),
      "search.destination.country": cc11001100_hook("search.destination.country", "dimension45", "object-key-init"),
      "search.origin.country": cc11001100_hook("search.origin.country", "dimension42", "object-key-init"),
      "custom_data.ibe.upsell_outbound_category": cc11001100_hook("custom_data.ibe.upsell_outbound_category", "dimension86", "object-key-init"),
      "custom_data.ibe.upsell_outbound_item": cc11001100_hook("custom_data.ibe.upsell_outbound_item", "dimension87", "object-key-init"),
      "custom_data.ibe.upsell_inbound_category": cc11001100_hook("custom_data.ibe.upsell_inbound_category", "dimension88", "object-key-init"),
      "custom_data.ibe.upsell_inbound_item": cc11001100_hook("custom_data.ibe.upsell_inbound_item", "dimension89", "object-key-init"),
      "custom_data.ibe.upsell_inbound_value": cc11001100_hook("custom_data.ibe.upsell_inbound_value", "transaction-metric20", "object-key-init"),
      "custom_data.ibe.upsell_outbound_value": cc11001100_hook("custom_data.ibe.upsell_outbound_value", "transaction-metric19", "object-key-init"),
      "custom_data.ibe.upsell_value_hkd": cc11001100_hook("custom_data.ibe.upsell_value_hkd", "transaction-metric21,transaction-metric4", "object-key-init"),
      "custom_data.ibe.b_code": cc11001100_hook("custom_data.ibe.b_code", "dimension100", "object-key-init"),
      "booking.booked_from": cc11001100_hook("booking.booked_from", "dimension33", "object-key-init"),
      "custom_data.enforce_indicator": cc11001100_hook("custom_data.enforce_indicator", "dimension101", "object-key-init"),
      "offer.discount_amount": cc11001100_hook("offer.discount_amount", "transaction-metric17", "object-key-init"),
      "itinerary.inbound.date": cc11001100_hook("itinerary.inbound.date", "dimension29", "object-key-init"),
      "booking.pnr": cc11001100_hook("booking.pnr", "dimension103", "object-key-init"),
      "booking.pnr_super": cc11001100_hook("booking.pnr_super", "dimension103", "object-key-init"),
      "registration.membership_no": cc11001100_hook("registration.membership_no", "dimension34,dimension48,uid", "object-key-init"),
      "offer.sponsor_code": cc11001100_hook("offer.sponsor_code", "dimension104", "object-key-init"),
      "itinerary.pax.total": cc11001100_hook("itinerary.pax.total", "transaction-metric1", "object-key-init"),
      "itinerary.pax.adult": cc11001100_hook("itinerary.pax.adult", "transaction-metric7", "object-key-init"),
      "itinerary.pax.child": cc11001100_hook("itinerary.pax.child", "transaction-metric8", "object-key-init"),
      "itinerary.pax.infant": cc11001100_hook("itinerary.pax.infant", "transaction-metric9", "object-key-init"),
      "va.properties.85611": cc11001100_hook("va.properties.85611", "Dimension9", "object-key-init"),
      "search.hotel_destination.city": cc11001100_hook("search.hotel_destination.city", "dimension44", "object-key-init"),
      "search.hotel_destination.country": cc11001100_hook("search.hotel_destination.country", "dimension45", "object-key-init"),
      "custom_data.ibe.syn_banner": cc11001100_hook("custom_data.ibe.syn_banner", "dimension110", "object-key-init"),
      "collection.banner.feedback.105": cc11001100_hook("collection.banner.feedback.105", "dimension105", "object-key-init"),
      "collection.banner.feedback.106": cc11001100_hook("collection.banner.feedback.106", "dimension106", "object-key-init"),
      "collection.banner.feedback.107": cc11001100_hook("collection.banner.feedback.107", "dimension107", "object-key-init"),
      "collection.banner.feedback.108": cc11001100_hook("collection.banner.feedback.108", "dimension108", "object-key-init"),
      "collection.banner.feedback.109": cc11001100_hook("collection.banner.feedback.109", "dimension109", "object-key-init"),
      "registration.hash_id": cc11001100_hook("registration.hash_id", "dimension111,dimension112,uid", "object-key-init"),
      "registration.sha256_hash_id": cc11001100_hook("registration.sha256_hash_id", "dimension111,dimension112,uid", "object-key-init"),
      "custom_data.ibe.selected_miles": cc11001100_hook("custom_data.ibe.selected_miles", "metric24,dimension116", "object-key-init"),
      "custom_data.ibe.miles_balance": cc11001100_hook("custom_data.ibe.miles_balance", "metric23,dimension115", "object-key-init"),
      "custom_data.ibe.max_miles": cc11001100_hook("custom_data.ibe.max_miles", "metric25,dimension117", "object-key-init"),
      "transaction.cash": cc11001100_hook("transaction.cash", "metric27", "object-key-init"),
      "transaction.miles": cc11001100_hook("transaction.miles", "metric26", "object-key-init"),
      "transaction.cm_eligibility": cc11001100_hook("transaction.cm_eligibility", "dimension114", "object-key-init"),
      "custom_data.ibe.outbound_ff_code": cc11001100_hook("custom_data.ibe.outbound_ff_code", "dimension120", "object-key-init"),
      "custom_data.ibe.inbound_ff_code": cc11001100_hook("custom_data.ibe.inbound_ff_code", "dimension121", "object-key-init"),
      "custom_data.ibe.outbound_brand_code": cc11001100_hook("custom_data.ibe.outbound_brand_code", "dimension122", "object-key-init"),
      "custom_data.ibe.inbound_brand_code": cc11001100_hook("custom_data.ibe.inbound_brand_code", "dimension123", "object-key-init"),
      "custom_data.ibe.outbound_brand_lowest": cc11001100_hook("custom_data.ibe.outbound_brand_lowest", "dimension124", "object-key-init"),
      "custom_data.ibe.outbound_brand_selected": cc11001100_hook("custom_data.ibe.outbound_brand_selected", "dimension118", "object-key-init"),
      "custom_data.ibe.inbound_brand_lowest": cc11001100_hook("custom_data.ibe.inbound_brand_lowest", "dimension125", "object-key-init"),
      "custom_data.ibe.inbound_brand_selected": cc11001100_hook("custom_data.ibe.inbound_brand_selected", "dimension119", "object-key-init"),
      "custom_data.ibe.outbound_value_lowest": cc11001100_hook("custom_data.ibe.outbound_value_lowest", "metric28", "object-key-init"),
      "custom_data.ibe.outbound_value_selected": cc11001100_hook("custom_data.ibe.outbound_value_selected", "metric29", "object-key-init"),
      "custom_data.ibe.inbound_value_lowest": cc11001100_hook("custom_data.ibe.inbound_value_lowest", "metric30", "object-key-init"),
      "custom_data.ibe.inbound_value_selected": cc11001100_hook("custom_data.ibe.inbound_value_selected", "metric31", "object-key-init"),
      "offer.type": cc11001100_hook("offer.type", "dimension126", "object-key-init")
    }, "assign");
    u.extend = cc11001100_hook("u.extend", [function (a, b) {
      try {
        if (b['dom.url'].toString().toLowerCase().indexOf('/cx/'.toLowerCase()) > -1 || b['dom.url'].toString().toLowerCase().indexOf('/flights/'.toLowerCase()) > -1 || b['dom.url'].toString().toLowerCase().indexOf('cathaypacific.com/takeabreak_luckydraw/'.toLowerCase()) > -1) {
          try {
            if (typeof cxDataLayer.registration === 'undefined') {} else {
              b['registration.type'] = cc11001100_hook("b['registration.type']", cxDataLayer.registration.type, "assign");
              b['registration.hash_email'] = cc11001100_hook("b['registration.hash_email']", cxDataLayer.registration.hash_email, "assign");
              if (cxDataLayer.registration.sha256_hash_id !== undefined) {
                b['registration.sha256_hash_id'] = cc11001100_hook("b['registration.sha256_hash_id']", cxDataLayer.registration.sha256_hash_id.toLowerCase(), "assign");
              }
              if (cxDataLayer.registration.hash_id !== undefined) {
                b['registration.hash_id'] = cc11001100_hook("b['registration.hash_id']", cxDataLayer.registration.hash_id.toLowerCase(), "assign");
              }
            }
          } catch (err) {
            console.log(err);
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (/book(-.+.ete)?.cathaypacific.com/.test(b['dom.domain']) && typeof b['js_page.DDSContext.SITE'] != 'undefined' && b['js_page.DDSContext.OWD_MODE'] == 'TRUE' && /OUTBOUND|INBOUND|SUMMARY|PASSENGER|CONFIRMATION/.test(b['page.name']) && /REV|BOH/.test(b['page.stream']) && /FP|FP-M/.test(b['page.flow'])) {
          try {
            (function (c) {
              b['custom_data.ibe.upsell_inbound_category'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_category']", "NONE", "assign");
              b['custom_data.ibe.upsell_inbound_item'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_item']", "NONE", "assign");
              b['custom_data.ibe.upsell_inbound_value'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_value']", 0, "assign");
              if (c.upsell_category == "UPGRADE-BANNER") {
                b['custom_data.ibe.upsell_outbound_category'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_category']", "UPGRADE-BANNER", "assign");
                b['custom_data.ibe.upsell_outbound_item'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_item']", "UPGRADE-BANNER", "assign");
                b['custom_data.ibe.upsell_outbound_value'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_value']", 0, "assign");
                return;
              }
              if (c.upsell_outbound_from === "" || typeof c.upsell_outbound_from == 'undefined') {
                b['custom_data.ibe.upsell_outbound_category'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_category']", "NONE", "assign");
                b['custom_data.ibe.upsell_outbound_item'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_item']", "NONE", "assign");
                b['custom_data.ibe.upsell_outbound_value'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_value']", 0, "assign");
                return;
              }
              if (c.upsell_outbound_from == c.upsell_outbound_to) {
                b['custom_data.ibe.upsell_outbound_category'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_category']", "OTHER FLIGHT", "assign");
              } else {
                var from_cabin = cc11001100_hook("from_cabin", c.upsell_outbound_from.split("-")[0], "var-init");
                var to_cabin = cc11001100_hook("to_cabin", c.upsell_outbound_to.split("-")[0], "var-init");
                if (from_cabin != to_cabin) {
                  b['custom_data.ibe.upsell_outbound_category'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_category']", "CABIN UPSELL", "assign");
                } else {
                  b['custom_data.ibe.upsell_outbound_category'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_category']", "FARE FAMILY UPSELL", "assign");
                }
              }
              var outbound_value = cc11001100_hook("outbound_value", c.upsell_outbound_value_to - c.upsell_outbound_value_from, "var-init");
              if (outbound_value >= 0) {
                b['custom_data.ibe.upsell_outbound_value'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_value']", tealiumiq_currency.convert(outbound_value.toString(), c.upsell_currency, "HKD"), "assign");
              } else {
                b['custom_data.ibe.upsell_outbound_value'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_value']", tealiumiq_currency.convert(Math.abs(outbound_value).toString(), c.upsell_currency, "HKD") * -1, "assign");
              }
              b['custom_data.ibe.upsell_outbound_item'] = cc11001100_hook("b['custom_data.ibe.upsell_outbound_item']", cxDataLayer.custom_data.ibe.upsell_outbound_from + '_' + cxDataLayer.custom_data.ibe.upsell_outbound_to, "assign");
            })(cxDataLayer.custom_data.ibe);
          } catch (err) {
            console.log(err);
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (/book(-.+.ete)?.cathaypacific.com/.test(b['dom.domain']) && typeof b['js_page.DDSContext.SITE'] != 'undefined' && b['js_page.DDSContext.OWD_MODE'] == 'TRUE' && /SUMMARY|PASSENGER|CONFIRMATION/.test(b['page.name']) && /REV|BOH/.test(b['page.stream']) && /FP|FP-M/.test(b['page.flow'])) {
          try {
            (function (c) {
              if (c.upsell_category == "UPGRADE-BANNER") {
                b['custom_data.ibe.upsell_inbound_category'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_category']", "UPGRADE-BANNER", "assign");
                b['custom_data.ibe.upsell_inbound_item'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_item']", "UPGRADE-BANNER", "assign");
                b['custom_data.ibe.upsell_inbound_value'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_value']", 0, "assign");
                return;
              }
              if (c.upsell_inbound_from === "" || typeof c.upsell_inbound_from == 'undefined') {
                b['custom_data.ibe.upsell_inbound_category'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_category']", "NONE", "assign");
                b['custom_data.ibe.upsell_inbound_item'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_item']", "NONE", "assign");
                b['custom_data.ibe.upsell_inbound_value'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_value']", 0, "assign");
                return;
              }
              if (c.upsell_inbound_from == c.upsell_inbound_to) {
                b['custom_data.ibe.upsell_inbound_category'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_category']", "OTHER FLIGHT", "assign");
              } else {
                var from_cabin = cc11001100_hook("from_cabin", c.upsell_inbound_from.split("-")[0], "var-init");
                var to_cabin = cc11001100_hook("to_cabin", c.upsell_inbound_to.split("-")[0], "var-init");
                if (from_cabin != to_cabin) {
                  b['custom_data.ibe.upsell_inbound_category'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_category']", "CABIN UPSELL", "assign");
                } else {
                  b['custom_data.ibe.upsell_inbound_category'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_category']", "FARE FAMILY UPSELL", "assign");
                }
              }
              var inbound_value = cc11001100_hook("inbound_value", c.upsell_inbound_value_to - c.upsell_inbound_value_from, "var-init");
              if (inbound_value >= 0) {
                b['custom_data.ibe.upsell_inbound_value'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_value']", tealiumiq_currency.convert(inbound_value.toString(), c.upsell_currency, "HKD"), "assign");
              } else {
                b['custom_data.ibe.upsell_inbound_value'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_value']", tealiumiq_currency.convert(Math.abs(inbound_value).toString(), c.upsell_currency, "HKD") * -1, "assign");
              }
              b['custom_data.ibe.upsell_inbound_item'] = cc11001100_hook("b['custom_data.ibe.upsell_inbound_item']", cxDataLayer.custom_data.ibe.upsell_inbound_from + '_' + cxDataLayer.custom_data.ibe.upsell_inbound_to, "assign");
            })(cxDataLayer.custom_data.ibe);
          } catch (err) {
            console.log(err);
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (/book(-.+.ete)?.cathaypacific.com/.test(b['dom.domain']) && typeof b['js_page.DDSContext.SITE'] != 'undefined' && b['js_page.DDSContext.OWD_MODE'] == 'TRUE' && b['custom_data.ibe.upsell_indicator'].toString().toLowerCase() == 'true'.toLowerCase() && /REV|BOH/.test(b['page.stream']) && /SUMMARY|PASSENGER|CONFIRMATION/.test(b['page.name'])) {
          try {
            (function (c) {
              if (c.upsell_value >= 0) {
                b['custom_data.ibe.upsell_value_hkd'] = cc11001100_hook("b['custom_data.ibe.upsell_value_hkd']", tealiumiq_currency.convert(c.upsell_value.toString(), c.upsell_currency, "HKD"), "assign");
              } else {
                b['custom_data.ibe.upsell_value_hkd'] = cc11001100_hook("b['custom_data.ibe.upsell_value_hkd']", tealiumiq_currency.convert(Math.abs(c.upsell_value).toString(), c.upsell_currency, "HKD") * -1, "assign");
              }
            })(cxDataLayer.custom_data.ibe);
          } catch (err) {
            console.log(err);
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (/book(-.+.ete)?.cathaypacific.com/.test(b['dom.domain']) && typeof b['js_page.DDSContext.SITE'] != 'undefined' && b['js_page.DDSContext.OWD_MODE'] == 'TRUE' && b['custom_data.ibe.upsell_indicator'].toString().toLowerCase() == 'false'.toLowerCase() || /book(-.+.ete)?.cathaypacific.com/.test(b['dom.domain']) && typeof b['js_page.DDSContext.SITE'] != 'undefined' && b['js_page.DDSContext.OWD_MODE'].toString().indexOf('TRUE') > -1 && /OUTBOUND|INBOUND/.test(b['page.name'])) {
          b['custom_data.ibe.upsell_category'] = cc11001100_hook("b['custom_data.ibe.upsell_category']", 'NONE', "assign");
          try {
            b['custom_data.ibe.upsell_value'] = cc11001100_hook("b['custom_data.ibe.upsell_value']", 0, "assign");
          } catch (e) {}
          ;
          b['custom_data.ibe.upsell_item'] = cc11001100_hook("b['custom_data.ibe.upsell_item']", 'NONE', "assign");
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['dom.domain'].toString().toLowerCase().indexOf('news.cathaypacific.com'.toLowerCase()) > -1) {
          b['application.name'] = cc11001100_hook("b['application.name']", 'NEWS', "assign");
          b['application.env'] = cc11001100_hook("b['application.env']", 'PROD', "assign");
          b['page.brand'] = cc11001100_hook("b['page.brand']", 'CX', "assign");
          try {
            b['page.page_id'] = cc11001100_hook("b['page.page_id']", b['dom.url'].replace('https://news.cathaypacific.com', '/NEWSROOM').toUpperCase(), "assign");
          } catch (e) {}
          ;
          b['page.page_category'] = cc11001100_hook("b['page.page_category']", 'NEWSROOM', "assign");
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['application.name'] != 'TRP') {
          try {
            b['vendor.ga.page_id'] = cc11001100_hook("b['vendor.ga.page_id']", function (p) {
              return p.toUpperCase().replace(/::/g, "/");
            }(b["page.page_id"]), "assign");
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (typeof b['search.keyword'] != 'undefined' && typeof b['search.type'] != 'undefined') {
          try {
            b['vendor.ga.page_id'] = cc11001100_hook("b['vendor.ga.page_id']", b['vendor.ga.page_id'] + "?" + ['search_type', b['search.type']].join('=') + '&' + ['search_keyword', b['search.keyword']].join('='), "assign");
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['page.name'].toString().indexOf('OUTBOUND') > -1 && typeof b['js_page.DDSContext.SITE'] != 'undefined' && b['js_page.DDSContext.OWD_MODE'] == 'TRUE' && b['js_page.DDSContext.BOOKING_FLOW'] != 'SERVICING' || b['page.name'].toString().indexOf('OUTBOUND') > -1 && typeof b['js_page.DDSContext.SITE'] != 'undefined' && b['page.flow'] == 'SD' && b['js_page.DDSContext.BOOKING_FLOW'] != 'SERVICING') {
          try {
            b['page.name'] = cc11001100_hook("b['page.name']", b['page.name'] + "?" + ['search_type', b['search.type']].join('=') + '&' + ['search_keyword', b['search.keyword']].join('='), "assign");
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b, c, d, e, f, g) {
      if (1) {
        d = cc11001100_hook("d", b['tealium_environment'], "assign");
        if (typeof d == 'undefined') return;
        c = cc11001100_hook("c", [{
          'prod': cc11001100_hook('prod', 'UA-54513972-8', "object-key-init")
        }], "assign");
        var m = cc11001100_hook("m", false, "var-init");
        for (e = cc11001100_hook("e", 0, "assign"); e < c.length; e++) {
          for (f in utag.loader.GV(c[e])) {
            if (d == f) {
              b['vendor.ga.tracker_id'] = cc11001100_hook("b['vendor.ga.tracker_id']", c[e][f], "assign");
              m = cc11001100_hook("m", true, "assign");
            }
            ;
          }
          ;
          if (m) break;
        }
        ;
        if (!m) b['vendor.ga.tracker_id'] = cc11001100_hook("b['vendor.ga.tracker_id']", 'UA-54513972-1', "assign");
      }
    }, function (a, b) {
      try {
        if (b['js_page.window.performance.navigation.type'] != '1' && b['js_page.window.performance.navigation.type'] != '2' && b['js_page.pageCode'] == 'CONF' || b['js_page.window.performance.navigation.type'] != '1' && b['js_page.window.performance.navigation.type'] != '2' && b['page.page_id'] == 'TRP::PACKAGE::CONFIRMATION' || b['js_page.window.performance.navigation.type'] != '1' && b['page.page_id'] == 'TRP::HOTEL::CONFIRMATION' && b['js_page.window.performance.navigation.type'] != '2' || b['js_page.window.performance.navigation.type'] != '1' && b['application.name'] == 'MMB' && b['page.page_action'] == 'purchase' && b['js_page.window.performance.navigation.type'] != '2' || b['js_page.window.performance.navigation.type'] != '1' && b['js_page.window.performance.navigation.type'] != '2' && b['page.page_id'] == 'TRP::EVENT-PACKAGE::CONFIRMATION') {
          b['vendor.ga.ecommerce_action'] = cc11001100_hook("b['vendor.ga.ecommerce_action']", 'purchase', "assign");
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['page.page_id'].toString().toLowerCase().indexOf('REVIEW AND RESERVE'.toLowerCase()) > -1 && b['application.name'].toString().toLowerCase() == 'TRP'.toLowerCase() && b['js_page.window.performance.navigation.type'] == '0') {
          b['vendor.ga.ecommerce_action'] = cc11001100_hook("b['vendor.ga.ecommerce_action']", 'add', "assign");
          b['vendor.ga.cm15'] = cc11001100_hook("b['vendor.ga.cm15']", '1', "assign");
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['page.page_id'].toString().toLowerCase().indexOf('SELECT_DATE'.toLowerCase()) > -1 && b['js_page.window.performance.navigation.type'] == '0' || b['page.page_id'].toString().toLowerCase().indexOf('SELECT PACKAGE'.toLowerCase()) > -1 && b['js_page.window.performance.navigation.type'] == '0' && b['application.name'] == 'TRP' || b['page.name'].toString().indexOf('OUTBOUND') > -1 && b['js_page.window.performance.navigation.type'] == '0') {
          b['vendor.ga.cm13'] = cc11001100_hook("b['vendor.ga.cm13']", '1', "assign");
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          try {
            b['registration.optimizely_id'] = cc11001100_hook("b['registration.optimizely_id']", window.optimizely.get("visitor")["visitorId"], "assign");
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['page.page_id'].toString().toLowerCase().indexOf('SELECT PACKAGE'.toLowerCase()) > -1 && b['application.name'] == 'TRP' || b['page.page_id'].toString().toLowerCase().indexOf('SELECT HOTEL'.toLowerCase()) > -1 && b['application.name'] == 'TRP') {
          try {
            b['vendor.ga.page_id'] = cc11001100_hook("b['vendor.ga.page_id']", b['page.page_id_slashified'] + "?" + ['search_type', b['search.type']].join('=') + '&' + ['search_keyword', b['search.keyword']].join('='), "assign");
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['dom.domain'].toString().toLowerCase().indexOf('holidays'.toLowerCase()) > -1 && b['js_page.window.performance.navigation.type'] != '0' && b['dom.url'].toString().toLowerCase().indexOf('confirmation'.toLowerCase()) > -1 || b['application.name'] == 'MMB' && b['page.name'].toString().indexOf('CONFIRMATION') > -1 && b['js_page.window.performance.navigation.type'] != '0') {
          b['transaction.transaction_id'] = cc11001100_hook("b['transaction.transaction_id']", '', "assign");
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          if (typeof utag.data != 'undefined') {
            if (utag.data['custom_data.ibe.upsell_value'] > 0) {
              c = cc11001100_hook("c", tealiumiq_currency.convert((parseFloat(DDSContext.TAG_UPSELL_VAL_TO) - parseFloat(DDSContext.TAG_UPSELL_VAL_FROM)).toString(), typeof DDSContext.CURRENCY_CODE == 'undefined' ? cxDataLayer.page.currency : DDSContext.CURRENCY_CODE, "HKD"), "assign");
              utag.data['custom_data.ibe.upsell_value'] = cc11001100_hook("utag.data['custom_data.ibe.upsell_value']", c, "assign");
              if (typeof b != 'undefined') {
                b['custom_data.ibe.upsell_value'] = cc11001100_hook("b['custom_data.ibe.upsell_value']", c, "assign");
              }
              ;
            }
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (typeof b['page.country'] != 'undefined') {
          try {
            b['vendor.ga.allowAdFeatures'] = cc11001100_hook("b['vendor.ga.allowAdFeatures']", b['page.country'] == 'CN' ? false : true, "assign");
          } catch (err) {
            console.log(err);
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['application.name'].toString().toLowerCase() == 'IBERED'.toLowerCase()) {
          try {
            b['page.language'] = cc11001100_hook("b['page.language']", b['page.language'].toUpperCase(), "assign");
          } catch (e) {}
          ;
          try {
            b['page.locale'] = cc11001100_hook("b['page.locale']", b['page.locale'].toUpperCase(), "assign");
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['dom.url'].toString().indexOf('search.html?keyword=') > -1 && b['application.name'] == 'AEM') {
          try {
            b['page.name'] = cc11001100_hook("b['page.name']", b['page.name'] + "?" + ['search_type', b['search.type']].join('=') + '&' + ['search_keyword', b['search.keyword']].join('='), "assign");
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }], "assign");
    u.send = cc11001100_hook("u.send", function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        u.o = cc11001100_hook("u.o", window[window.GoogleAnalyticsObject], "assign");
        b.ga_events = cc11001100_hook("b.ga_events", b.ga_events || [], "assign");
        var c, d, e, f, g, h, tn, prop;
        if (u.data && u.data.name) {
          tn = cc11001100_hook("tn", u.data.name, "assign");
        }
        u.data = cc11001100_hook("u.data", {
          "qsp_delim": cc11001100_hook("qsp_delim", "&", "object-key-init"),
          "kvp_delim": cc11001100_hook("kvp_delim", "=", "object-key-init"),
          "base_url": cc11001100_hook("base_url", "", "object-key-init"),
          "a": cc11001100_hook("a", a, "object-key-init"),
          "cookieDomain": cc11001100_hook("cookieDomain", "" || utag.loader.lh(), "object-key-init"),
          "name": cc11001100_hook("name", tn || "", "object-key-init"),
          "account": cc11001100_hook("account", "", "object-key-init"),
          "anonymizeIp": cc11001100_hook("anonymizeIp", "false", "object-key-init"),
          "allowLinker": cc11001100_hook("allowLinker", "false", "object-key-init"),
          "crossDomainTrack": cc11001100_hook("crossDomainTrack", "", "object-key-init"),
          "enhancedLinkAttribution": cc11001100_hook("enhancedLinkAttribution", "true", "object-key-init"),
          "enhancedecommerce": cc11001100_hook("enhancedecommerce", "true", "object-key-init"),
          "displayfeatures": cc11001100_hook("displayfeatures", "true", "object-key-init"),
          "screenView": cc11001100_hook("screenView", "false", "object-key-init"),
          "optimizely": cc11001100_hook("optimizely", "true", "object-key-init"),
          "init_before_extensions": cc11001100_hook("init_before_extensions", "false", "object-key-init"),
          "autofill_params": cc11001100_hook("autofill_params", "false", "object-key-init"),
          "autosend_events": cc11001100_hook("autosend_events", "false" || "true", "object-key-init"),
          "clear_global_vars": cc11001100_hook("clear_global_vars", "false", "object-key-init"),
          "enh_action": cc11001100_hook("enh_action", "", "object-key-init"),
          "enh_event_cb": cc11001100_hook("enh_event_cb", "", "object-key-init"),
          "enh_checkout_step": cc11001100_hook("enh_checkout_step", "", "object-key-init"),
          "enh_checkout_option": cc11001100_hook("enh_checkout_option", "", "object-key-init"),
          "product_action_list": cc11001100_hook("product_action_list", "", "object-key-init"),
          "product_variant": cc11001100_hook("product_variant", [], "object-key-init"),
          "enh_impression_id": cc11001100_hook("enh_impression_id", [], "object-key-init"),
          "enh_impression_name": cc11001100_hook("enh_impression_name", [], "object-key-init"),
          "enh_impression_price": cc11001100_hook("enh_impression_price", [], "object-key-init"),
          "enh_impression_category": cc11001100_hook("enh_impression_category", [], "object-key-init"),
          "enh_impression_brand": cc11001100_hook("enh_impression_brand", [], "object-key-init"),
          "enh_impression_variant": cc11001100_hook("enh_impression_variant", [], "object-key-init"),
          "enh_impression_list": cc11001100_hook("enh_impression_list", [], "object-key-init"),
          "enh_impression_position": cc11001100_hook("enh_impression_position", [], "object-key-init"),
          "enh_promo_id": cc11001100_hook("enh_promo_id", [], "object-key-init"),
          "enh_promo_name": cc11001100_hook("enh_promo_name", [], "object-key-init"),
          "enh_promo_creative": cc11001100_hook("enh_promo_creative", [], "object-key-init"),
          "enh_promo_position": cc11001100_hook("enh_promo_position", [], "object-key-init"),
          "id": cc11001100_hook("id", "", "object-key-init"),
          "product_id": cc11001100_hook("product_id", [], "object-key-init"),
          "product_name": cc11001100_hook("product_name", [], "object-key-init"),
          "product_brand": cc11001100_hook("product_brand", [], "object-key-init"),
          "product_category": cc11001100_hook("product_category", [], "object-key-init"),
          "product_quantity": cc11001100_hook("product_quantity", [], "object-key-init"),
          "product_unit_price": cc11001100_hook("product_unit_price", [], "object-key-init"),
          "product_discount": cc11001100_hook("product_discount", [], "object-key-init"),
          "product_position": cc11001100_hook("product_position", [], "object-key-init"),
          "ga_events": cc11001100_hook("ga_events", [], "object-key-init"),
          "sessionControl": cc11001100_hook("sessionControl", "", "object-key-init"),
          "set": {}
        }, "assign");
        if (u.data.init_before_extensions === "true") {
          u.createTracker();
          u.initTracker();
        }
        for (c = cc11001100_hook("c", 0, "assign"); c < u.extend.length; c++) {
          try {
            d = cc11001100_hook("d", u.extend[c](a, b), "assign");
            if (d == false) return;
          } catch (e) {}
        }
        ;
        c = cc11001100_hook("c", [], "assign");
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = cc11001100_hook("e", u.map[d].split(","), "assign");
            for (f = cc11001100_hook("f", 0, "assign"); f < e.length; f++) {
              if (e[f].indexOf("a.") === 0) {
                u.data["a"][e[f].substring(2)] = cc11001100_hook("u.data[\"a\"][e[f].substring(2)]", b[d], "assign");
              } else if (e[f].indexOf("set.") === 0) {
                u.data.set[e[f].substring(4)] = cc11001100_hook("u.data.set[e[f].substring(4)]", b[d], "assign");
              } else {
                u.data[e[f]] = cc11001100_hook("u.data[e[f]]", b[d], "assign");
              }
            }
          } else {
            h = cc11001100_hook("h", d.split(":"), "assign");
            if (h.length === 2 && b[h[0]] === h[1]) {
              if (u.map[d]) {
                u.data.enh_action = cc11001100_hook("u.data.enh_action", u.map[d], "assign");
              }
            }
          }
        }
        if (u.typeOf(u.data.ga_events) === "array" && u.typeOf(b.ga_events) === "array") {
          if (u.data.ga_events.length === 0 && b.ga_events.length > 0) {
            u.data.ga_events = cc11001100_hook("u.data.ga_events", b.ga_events, "assign");
          } else if (u.data.ga_events.length > 0 && b.ga_events.length > 0) {
            u.data.ga_events = cc11001100_hook("u.data.ga_events", u.data.ga_events.concat(b.ga_events), "assign");
          }
        }
        u.data.order_id = cc11001100_hook("u.data.order_id", u.data.order_id || b._corder || "", "assign");
        u.data.order_total = cc11001100_hook("u.data.order_total", u.data.order_total || b._ctotal || "", "assign");
        u.data.order_shipping = cc11001100_hook("u.data.order_shipping", u.data.order_shipping || b._cship || "", "assign");
        u.data.order_tax = cc11001100_hook("u.data.order_tax", u.data.order_tax || b._ctax || "", "assign");
        u.data.order_store = cc11001100_hook("u.data.order_store", u.data.order_store || b._cstore || "", "assign");
        u.data.order_currency = cc11001100_hook("u.data.order_currency", u.data.order_currency || b._ccurrency || "", "assign");
        u.data.order_coupon_code = cc11001100_hook("u.data.order_coupon_code", u.data.order_coupon_code || b._cpromo || "", "assign");
        if (u.data.product_id.length === 0 && b._cprod !== undefined) {
          u.data.product_id = cc11001100_hook("u.data.product_id", b._cprod.slice(0), "assign");
        }
        if (u.data.product_name.length === 0 && b._cprodname !== undefined) {
          u.data.product_name = cc11001100_hook("u.data.product_name", b._cprodname.slice(0), "assign");
        }
        if (u.data.product_brand.length === 0 && b._cbrand !== undefined) {
          u.data.product_brand = cc11001100_hook("u.data.product_brand", b._cbrand.slice(0), "assign");
        }
        if (u.data.product_category.length === 0 && b._ccat !== undefined) {
          u.data.product_category = cc11001100_hook("u.data.product_category", b._ccat.slice(0), "assign");
        }
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
          u.data.product_quantity = cc11001100_hook("u.data.product_quantity", b._cquan.slice(0), "assign");
        }
        if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) {
          u.data.product_unit_price = cc11001100_hook("u.data.product_unit_price", b._cprice.slice(0), "assign");
        }
        if (u.data.product_discount.length === 0 && b._cpdisc !== undefined) {
          u.data.product_discount = cc11001100_hook("u.data.product_discount", b._cpdisc.slice(0), "assign");
        }
        if (u.data.init_before_extensions !== "true") {
          u.createTracker();
          u.initTracker();
        }
        if (u.data.enhancedecommerce === "true" && !u.required["ec"]) {
          u.required["ec"] = cc11001100_hook("u.required[\"ec\"]", !0, "assign");
          u.all("require", "ec");
        }
        u.data.app_id = cc11001100_hook("u.data.app_id", u.data.app_id || u.data.appId || b.app_id, "assign");
        u.data.app_name = cc11001100_hook("u.data.app_name", u.data.app_name || u.data.appName || b.app_name, "assign");
        u.data.app_version = cc11001100_hook("u.data.app_version", u.data.app_version || u.data.appVersion || b.app_version, "assign");
        u.data.app_rdns = cc11001100_hook("u.data.app_rdns", u.data.app_rdns || u.data.appInstallerId || b.app_rdns, "assign");
        u.data.screen_title = cc11001100_hook("u.data.screen_title", u.data.screen_title || u.data.screenName || b.screen_title, "assign");
        if (u.data.app_id || u.data.app_name) {
          g = cc11001100_hook("g", {}, "assign");
          g.appName = cc11001100_hook("g.appName", u.data.app_name, "assign");
          g.appId = cc11001100_hook("g.appId", u.data.app_id || "", "assign");
          g.appVersion = cc11001100_hook("g.appVersion", u.data.app_version, "assign");
          g.appInstallerId = cc11001100_hook("g.appInstallerId", u.data.app_rdns, "assign");
          u.all("set", g);
        }
        u.data.exception_reason = cc11001100_hook("u.data.exception_reason", u.data.exception_reason || b.exception_reason, "assign");
        if (u.data.exception_reason) {
          g = cc11001100_hook("g", {}, "assign");
          g.exDescription = cc11001100_hook("g.exDescription", u.data.exception_reason, "assign");
          g.exFatal = cc11001100_hook("g.exFatal", true, "assign");
          u.all("send", "exception", g);
        }
        if (u.data.allowLinker === "true" || u.data.allowLinker === true) {
          if (!u.required["linker"]) {
            u.all("require", "linker");
            u.required["linker"] = cc11001100_hook("u.required[\"linker\"]", !0, "assign");
          }
          if (u.data.crossDomainTrack) {
            if (u.typeOf(u.data.crossDomainTrack) === "string") {
              u.data.crossDomainTrack = cc11001100_hook("u.data.crossDomainTrack", u.data.crossDomainTrack.replace(/\s/g, '').split(','), "assign");
            }
            u.all("linker:autoLink", u.data.crossDomainTrack);
          }
        }
        if (u.data.clear_global_vars === "true") {
          u.setGlobalProperties(u.data, true);
          for (prop in utag.loader.GV(u.data.set)) {
            u.setGlobalProperties(u.data, true, prop);
          }
        }
        u.setGlobalProperties(u.data, false);
        if (u.data.anonymizeIp === "true" || u.data.anonymizeIp === true) {
          u.all("set", 'anonymizeIp', true);
        }
        if (u.data.uid) {
          u.all("set", "&uid", u.data.uid);
        }
        if (u.data.page) {
          u.all("set", "page", u.data.page);
        }
        if (u.data.title) {
          u.all("set", "title", u.data.title);
        }
        if (u.data.location) {
          u.all("set", "location", u.data.location);
        }
        if (u.data.campaignId) {
          u.all("set", "campaignId", u.data.campaignId);
        }
        if (u.data.campaignName) {
          u.all("set", "campaignName", u.data.campaignName);
        }
        if (u.data.campaignSource) {
          u.all("set", "campaignSource", u.data.campaignSource);
        }
        if (u.data.campaignMedium) {
          u.all("set", "campaignMedium", u.data.campaignMedium);
        }
        if (u.data.campaignContent) {
          u.all("set", "campaignContent", u.data.campaignContent);
        }
        if (u.data.campaignKeyword) {
          u.all("set", "campaignKeyword", u.data.campaignKeyword);
        }
        if (u.data.displayfeatures === "true" || u.data.displayfeatures === true) {
          if (!u.required["displayfeatures"]) {
            u.required["displayfeatures"] = cc11001100_hook("u.required[\"displayfeatures\"]", !0, "assign");
            u.all("require", "displayfeatures");
          }
        }
        if (u.data.dataSource) {
          u.all("set", "dataSource", u.data.dataSource);
        }
        for (prop in utag.loader.GV(u.data.set)) {
          u.all("set", prop, u.data.set[prop]);
        }
        u.data.transaction_events = cc11001100_hook("u.data.transaction_events", {}, "assign");
        u.data.pageview_events = cc11001100_hook("u.data.pageview_events", {}, "assign");
        u.data.link_events = cc11001100_hook("u.data.link_events", {}, "assign");
        u.data.enhecom_events = cc11001100_hook("u.data.enhecom_events", {}, "assign");
        for (d in utag.loader.GV(u.data)) {
          if (d.indexOf("-") > -1 && (d.indexOf("metric") > -1 || d.indexOf("dimension") > -1 || d.indexOf("contentGroup") > -1)) {
            if (d.indexOf("transaction-") === 0) {
              u.data.transaction_events[d] = cc11001100_hook("u.data.transaction_events[d]", u.data[d], "assign");
            } else if (d.indexOf("pageview-") === 0) {
              u.data.pageview_events[d] = cc11001100_hook("u.data.pageview_events[d]", u.data[d], "assign");
            } else if (d.indexOf("link-") === 0) {
              u.data.link_events[d] = cc11001100_hook("u.data.link_events[d]", u.data[d], "assign");
            } else if (u.data.enhancedecommerce === "true" && d.indexOf("enh_") === 0) {
              u.data.enhecom_events[d] = cc11001100_hook("u.data.enhecom_events[d]", u.data[d], "assign");
            }
          } else if (d.indexOf("metric") === 0 || d.indexOf("dimension") === 0 || d.indexOf("contentGroup") === 0) {
            u.all("set", d, u.data[d]);
          }
        }
        if (u.data.enhancedLinkAttribution === "true") {
          if (!u.required["enhancedLinkAttribution"]) {
            u.required["enhancedLinkAttribution"] = cc11001100_hook("u.required[\"enhancedLinkAttribution\"]", !0, "assign");
            u.all("require", "linkid", "linkid.js");
          }
        }
        u.data.order_id = cc11001100_hook("u.data.order_id", u.data.order_id ? u.data.order_id : u.data.id, "assign");
        if (u.data.enhancedecommerce === "true") {
          u.all("set", '&cu', u.data.currency ? u.data.currency : u.data.order_currency);
          if (u.data.order_id && u.data.enh_action === "refund") {
            if (u.data.order_id instanceof Array && u.data.order_id.length > 0) {
              u.data.order_id = cc11001100_hook("u.data.order_id", u.data.order_id[0], "assign");
            }
            for (f = cc11001100_hook("f", 0, "assign"); f < u.data.product_id.length; f++) {
              g = cc11001100_hook("g", {}, "assign");
              g.id = cc11001100_hook("g.id", u.data.product_id[f], "assign");
              g.quantity = cc11001100_hook("g.quantity", u.data.product_quantity[f] ? u.data.product_quantity[f] : "1", "assign");
              u.setHitData(g, "enhecom_events", "product_refund", f);
              u.all('ec:addProduct', g);
            }
            g = cc11001100_hook("g", {}, "assign");
            g.id = cc11001100_hook("g.id", u.data.order_id, "assign");
            u.setHitData(g, "enhecom_events", "refund");
            u.all('ec:setAction', 'refund', g);
          } else if (u.data.order_id) {
            if (u.data.order_id instanceof Array && u.data.order_id.length > 0) {
              u.data.order_id = cc11001100_hook("u.data.order_id", u.data.order_id[0], "assign");
            }
            u.addproduct("product_purchase", u.data.product_id.length, false);
            g = cc11001100_hook("g", {}, "assign");
            g.id = cc11001100_hook("g.id", u.data.order_id, "assign");
            g.affiliation = cc11001100_hook("g.affiliation", u.data.affiliation ? u.data.affiliation : u.data.order_store, "assign");
            g.revenue = cc11001100_hook("g.revenue", u.data.revenue ? u.data.revenue : u.data.order_total, "assign");
            g.shipping = cc11001100_hook("g.shipping", u.data.shipping ? u.data.shipping : u.data.order_shipping, "assign");
            g.tax = cc11001100_hook("g.tax", u.data.tax ? u.data.tax : u.data.order_tax, "assign");
            g.coupon = cc11001100_hook("g.coupon", u.data.coupon ? u.data.coupon : u.data.order_coupon_code, "assign");
            u.setHitData(g, "enhecom_events", "purchase");
            u.all('ec:setAction', 'purchase', g);
          } else if (u.data.enh_action === "product_click" && u.data.a === "link") {
            u.addproduct("product_click", 1, false);
            u.all('ec:setAction', 'click', {
              list: cc11001100_hook("list", u.data.product_action_list, "object-key-init")
            });
            if (u.data.autosend_events === "true") {
              u.all('send', 'event', 'UX', 'click', 'Results', {
                'hitCallback': cc11001100_hook('hitCallback', u.data.enh_event_cb, "object-key-init")
              });
            }
          } else if (u.data.enh_action === "detail") {
            u.addproduct("detail", 1, false);
            g = cc11001100_hook("g", {}, "assign");
            u.setHitData(g, "list", u.data.product_action_list);
            u.all("ec:setAction", "detail");
          } else if (u.data.enh_action === "add") {
            u.addproduct("product_add", u.data.product_id.length, false);
            u.all('ec:setAction', 'add', {
              list: cc11001100_hook("list", u.data.product_action_list, "object-key-init")
            });
            if (u.data.a === "link" && u.data.autosend_events === "true") {
              u.all('send', 'event', 'UX', 'click', 'add to cart', {
                'hitCallback': cc11001100_hook('hitCallback', u.data.enh_event_cb, "object-key-init")
              });
            }
          } else if (u.data.enh_action === "remove") {
            u.addproduct("product_remove", u.data.product_id.length, false);
            u.all('ec:setAction', 'remove');
            if (u.data.a === "link" && u.data.autosend_events === "true") {
              u.all('send', 'event', 'UX', 'click', 'remove from cart', {
                'hitCallback': cc11001100_hook('hitCallback', u.data.enh_event_cb, "object-key-init")
              });
            }
          } else if (u.data.enh_action === "checkout") {
            u.addproduct("product_checkout", u.data.product_id.length, false);
            g = cc11001100_hook("g", {}, "assign");
            g.step = cc11001100_hook("g.step", u.data.enh_checkout_step || "1", "assign");
            g.option = cc11001100_hook("g.option", u.data.enh_checkout_option, "assign");
            u.all('ec:setAction', u.data.enh_action, g);
          }
          if (u.data.enh_action === "checkout_option" && u.data.a === "link") {
            g = cc11001100_hook("g", {}, "assign");
            g.step = cc11001100_hook("g.step", u.data.enh_checkout_step || "1", "assign");
            g.option = cc11001100_hook("g.option", u.data.enh_checkout_option, "assign");
            u.all('ec:setAction', u.data.enh_action, g);
            if (u.data.autosend_events === "true") {
              u.all('send', 'event', 'Checkout', 'Option', {
                'hitCallback': cc11001100_hook('hitCallback', u.data.enh_event_cb, "object-key-init")
              });
            }
          }
          if (u.data.enh_impression_id) {
            u.addproduct("product_impression", u.data.enh_impression_id.length, true);
          }
          if (u.data.enh_promo_id) {
            u.addpromo(u.data.enh_action, u.data.a);
          }
          g = cc11001100_hook("g", {}, "assign");
          if (u.data.order_id) {
            u.setHitData(g, "transaction_events");
          }
          u.setHitData(g, "pageview_events");
          if (u.data.sessionControl === "start" || u.data.sessionControl === "end") {
            g.sessionControl = cc11001100_hook("g.sessionControl", u.data.sessionControl, "assign");
          }
          if (u.data.a === "view") {
            if (u.data.screenView === "true" || u.data.screenView === true) {
              g.screenName = cc11001100_hook("g.screenName", u.data.screen_title || "", "assign");
              u.all("send", "screenview", g);
            } else {
              g.hitType = cc11001100_hook("g.hitType", "pageview", "assign");
              u.all("send", g);
            }
          }
        } else if (u.data.a === "view") {
          g = cc11001100_hook("g", {}, "assign");
          u.setHitData(g, "pageview_events");
          if (u.data.sessionControl === "start" || u.data.sessionControl === "end") {
            g.sessionControl = cc11001100_hook("g.sessionControl", u.data.sessionControl, "assign");
          }
          if (u.data.screenView === "true" || u.data.screenView === true) {
            g.screenName = cc11001100_hook("g.screenName", u.data.screen_title || "", "assign");
            u.all("send", "screenview", g);
          } else {
            g.hitType = cc11001100_hook("g.hitType", "pageview", "assign");
            u.all("send", g);
          }
          if (u.data.order_id && !(u.data.order_id instanceof Array)) {
            if (!u.required["ecommerce"]) {
              u.required["ecommerce"] = cc11001100_hook("u.required[\"ecommerce\"]", !0, "assign");
              u.all("require", "ecommerce", "ecommerce.js");
            }
            g = cc11001100_hook("g", {}, "assign");
            u.setHitData(g, "transaction_events");
            g.id = cc11001100_hook("g.id", u.data.order_id, "assign");
            g.affiliation = cc11001100_hook("g.affiliation", u.data.affiliation ? u.data.affiliation : u.data.order_store, "assign");
            g.revenue = cc11001100_hook("g.revenue", u.data.revenue ? u.data.revenue : u.data.order_total, "assign");
            g.shipping = cc11001100_hook("g.shipping", u.data.shipping ? u.data.shipping : u.data.order_shipping, "assign");
            g.tax = cc11001100_hook("g.tax", u.data.tax ? u.data.tax : u.data.order_tax, "assign");
            g.currency = cc11001100_hook("g.currency", u.data.currency ? u.data.currency : u.data.order_currency, "assign");
            u.all('ecommerce:addTransaction', g);
            for (f = cc11001100_hook("f", 0, "assign"); f < u.data.product_id.length; f++) {
              g = cc11001100_hook("g", {}, "assign");
              g.id = cc11001100_hook("g.id", u.data.order_id, "assign");
              g.sku = cc11001100_hook("g.sku", u.data.product_id[f], "assign");
              g.name = cc11001100_hook("g.name", u.data.product_name[f] ? u.data.product_name[f] : u.data.product_id[f], "assign");
              g.category = cc11001100_hook("g.category", u.data.product_category[f] ? u.data.product_category[f] : "", "assign");
              g.price = cc11001100_hook("g.price", u.data.product_unit_price[f] ? u.data.product_unit_price[f] : "1.00", "assign");
              g.quantity = cc11001100_hook("g.quantity", u.data.product_quantity[f] ? u.data.product_quantity[f] : "1", "assign");
              u.setHitData(g, "transaction_events");
              u.all('ecommerce:addItem', g);
            }
            u.all('ecommerce:send');
          } else if (u.data.order_id instanceof Array && u.data.order_id.length > 0) {
            if (!u.required["ecommerce"]) {
              u.required["ecommerce"] = cc11001100_hook("u.required[\"ecommerce\"]", !0, "assign");
              u.all("require", "ecommerce", "ecommerce.js");
            }
            var lastindex = cc11001100_hook("lastindex", 0, "var-init");
            for (f = cc11001100_hook("f", 0, "assign"); f < u.data.order_id.length; f++) {
              if (f === u.data.order_id.length - 1 || u.data.order_id[f] !== u.data.order_id[f + 1]) {
                g = cc11001100_hook("g", {}, "assign");
                u.setHitData(g, "transaction_events");
                g.id = cc11001100_hook("g.id", u.data.order_id[f], "assign");
                g.affiliation = cc11001100_hook("g.affiliation", u.data.affiliation && typeof u.data.affiliation[f] !== "undefined" ? u.data.affiliation[f] : u.data.order_store, "assign");
                g.revenue = cc11001100_hook("g.revenue", u.data.revenue && typeof u.data.revenue[f] !== "undefined" ? u.data.revenue[f] : u.data.order_total, "assign");
                g.shipping = cc11001100_hook("g.shipping", u.data.shipping && typeof u.data.shipping[f] !== "undefined" ? u.data.shipping[f] : u.data.order_shipping, "assign");
                g.tax = cc11001100_hook("g.tax", u.data.tax && typeof u.data.tax[f] !== "undefined" ? u.data.tax[f] : u.data.order_tax, "assign");
                g.currency = cc11001100_hook("g.currency", u.data.currency ? u.data.currency : u.data.order_currency, "assign");
                u.all('ecommerce:addTransaction', g);
                for (e = cc11001100_hook("e", lastindex, "assign"); e < f + 1; e++) {
                  g = cc11001100_hook("g", {}, "assign");
                  g.id = cc11001100_hook("g.id", u.data.order_id[f], "assign");
                  g.sku = cc11001100_hook("g.sku", u.data.product_id[e], "assign");
                  g.name = cc11001100_hook("g.name", u.data.product_name[e] ? u.data.product_name[e] : u.data.product_id[e], "assign");
                  g.category = cc11001100_hook("g.category", u.data.product_category[e] ? u.data.product_category[e] : "", "assign");
                  g.price = cc11001100_hook("g.price", u.data.product_unit_price[e] ? u.data.product_unit_price[e] : "1.00", "assign");
                  g.quantity = cc11001100_hook("g.quantity", u.data.product_quantity[e] ? u.data.product_quantity[e] : "1", "assign");
                  u.setHitData(g, "transaction_events");
                  u.all('ecommerce:addItem', g);
                }
                lastindex = cc11001100_hook("lastindex", f + 1, "assign");
              }
            }
            u.all('ecommerce:send');
          }
        }
        if (u.data.eventCategory && u.data.eventAction) {
          g = cc11001100_hook("g", {}, "assign");
          u.setHitData(g, "link_events");
          g.hitType = cc11001100_hook("g.hitType", "event", "assign");
          g.eventCategory = cc11001100_hook("g.eventCategory", u.data.eventCategory, "assign");
          if (u.data.nonInteraction) {
            g.nonInteraction = cc11001100_hook("g.nonInteraction", 1, "assign");
          }
          g.eventAction = cc11001100_hook("g.eventAction", u.data.eventAction, "assign");
          if (u.data.eventLabel) {
            g.eventLabel = cc11001100_hook("g.eventLabel", u.data.eventLabel, "assign");
          }
          if (typeof u.data.eventValue !== "undefined" && u.data.eventValue !== "") {
            g.eventValue = cc11001100_hook("g.eventValue", u.data.eventValue, "assign");
          }
          if (u.data.standard_event_cb) {
            g.hitCallback = cc11001100_hook("g.hitCallback", u.data.standard_event_cb, "assign");
          }
          if (u.data.screenView === "true" || u.data.screenView === true) {
            g.screenName = cc11001100_hook("g.screenName", u.data.screen_title || "", "assign");
          }
          if (u.data.sessionControl === "start" || u.data.sessionControl === "end") {
            g.sessionControl = cc11001100_hook("g.sessionControl", u.data.sessionControl, "assign");
          }
          u.all("send", g);
          u.data.eventCategory = cc11001100_hook("u.data.eventCategory", u.data.eventAction = cc11001100_hook("u.data.eventAction", u.data.eventLabel = cc11001100_hook("u.data.eventLabel", u.data.eventValue = cc11001100_hook("u.data.eventValue", "", "assign"), "assign"), "assign"), "assign");
        }
        for (e = cc11001100_hook("e", 0, "assign"); e < u.data.ga_events.length; e++) {
          g = cc11001100_hook("g", {}, "assign");
          u.setHitData(g, "link_events");
          g.hitType = cc11001100_hook("g.hitType", "event", "assign");
          g.eventCategory = cc11001100_hook("g.eventCategory", u.data.ga_events[e].eventCategory, "assign");
          g.eventAction = cc11001100_hook("g.eventAction", u.data.ga_events[e].eventAction, "assign");
          g.eventLabel = cc11001100_hook("g.eventLabel", u.data.ga_events[e].eventLabel, "assign");
          g.eventValue = cc11001100_hook("g.eventValue", u.data.ga_events[e].eventValue, "assign");
          if (u.data.ga_events[e].nonInteraction) {
            g.nonInteraction = cc11001100_hook("g.nonInteraction", 1, "assign");
          }
          if (u.data.sessionControl === "start" || u.data.sessionControl === "end") {
            g.sessionControl = cc11001100_hook("g.sessionControl", u.data.sessionControl, "assign");
          }
          u.all("send", g);
        }
        if (u.data.socialNetwork && u.data.socialAction && u.data.socialTarget) {
          g = cc11001100_hook("g", {}, "assign");
          g.hitType = cc11001100_hook("g.hitType", "social", "assign");
          g.socialNetwork = cc11001100_hook("g.socialNetwork", u.data.socialNetwork, "assign");
          g.socialAction = cc11001100_hook("g.socialAction", u.data.socialAction, "assign");
          g.socialTarget = cc11001100_hook("g.socialTarget", u.data.socialTarget, "assign");
          u.all("send", g);
          u.data.socialNetwork = cc11001100_hook("u.data.socialNetwork", u.data.socialAction = cc11001100_hook("u.data.socialAction", u.data.socialTarget = cc11001100_hook("u.data.socialTarget", "", "assign"), "assign"), "assign");
        }
        if (u.data.timingCategory && u.data.timingVar && u.data.timingValue) {
          g = cc11001100_hook("g", {}, "assign");
          g.hitType = cc11001100_hook("g.hitType", "timing", "assign");
          g.timingCategory = cc11001100_hook("g.timingCategory", u.data.timingCategory, "assign");
          g.timingVar = cc11001100_hook("g.timingVar", u.data.timingVar, "assign");
          g.timingValue = cc11001100_hook("g.timingValue", u.data.timingValue, "assign");
          g.timingLabel = cc11001100_hook("g.timingLabel", u.data.timingLabel || "", "assign");
          u.all("send", g);
        }
        if (u.data["ga-disable"]) {
          window["ga-disable-" + u.data["ga-disable"]] = cc11001100_hook("window[\"ga-disable-\" + u.data[\"ga-disable\"]]", true, "assign");
        }
        (function () {
          var id = cc11001100_hook("id", 'tealium-tag-7110', "var-init");
          if (document.getElementById(id)) {
            return;
          }
          u.loader({
            "type": cc11001100_hook("type", "script", "object-key-init"),
            "src": cc11001100_hook("src", 'https://www.google-analytics.com/analytics.js', "object-key-init"),
            "loc": cc11001100_hook("loc", "script", "object-key-init"),
            "id": cc11001100_hook("id", id, "object-key-init")
          });
          u.o.l = cc11001100_hook("u.o.l", 1 * new Date(), "assign");
        })();
      }
    }, "assign");
    utag.o[loader].loader.LOAD(id);
  })('2', 'cx.web');
} catch (error) {
  utag.DB(error);
}