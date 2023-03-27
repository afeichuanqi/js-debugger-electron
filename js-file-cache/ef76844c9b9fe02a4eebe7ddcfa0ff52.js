//tealium universal tag - utag.646 ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = cc11001100_hook("u", {
      "id": cc11001100_hook("id", id, "object-key-init")
    }, "var-init");
    utag.o[loader].sender[id] = cc11001100_hook("utag.o[loader].sender[id]", u, "assign");
    if (utag.ut === undefined) {
      utag.ut = cc11001100_hook("utag.ut", {}, "assign");
    }
    if (utag.ut.loader === undefined) {
      u.loader = cc11001100_hook("u.loader", function (o) {
        var b,
          c,
          l,
          a = cc11001100_hook("a", document, "var-init");
        if (o.type === "iframe") {
          b = cc11001100_hook("b", a.createElement("iframe"), "assign");
          o.attrs = cc11001100_hook("o.attrs", o.attrs || {
            "height": cc11001100_hook("height", "1", "object-key-init"),
            "width": cc11001100_hook("width", "1", "object-key-init"),
            "style": cc11001100_hook("style", "display:none", "object-key-init")
          }, "assign");
          for (l in utag.loader.GV(o.attrs)) {
            b.setAttribute(l, o.attrs[l]);
          }
          b.setAttribute("src", o.src);
        } else if (o.type == "img") {
          utag.DB("Attach img: " + o.src);
          b = cc11001100_hook("b", new Image(), "assign");
          b.src = cc11001100_hook("b.src", o.src, "assign");
          return;
        } else {
          b = cc11001100_hook("b", a.createElement("script"), "assign");
          b.language = cc11001100_hook("b.language", "javascript", "assign");
          b.type = cc11001100_hook("b.type", "text/javascript", "assign");
          b.async = cc11001100_hook("b.async", 1, "assign");
          b.charset = cc11001100_hook("b.charset", "utf-8", "assign");
          for (l in utag.loader.GV(o.attrs)) {
            b[l] = cc11001100_hook("b[l]", o.attrs[l], "assign");
          }
          b.src = cc11001100_hook("b.src", o.src, "assign");
        }
        if (o.id) {
          b.id = cc11001100_hook("b.id", o.id, "assign");
        }
        ;
        if (typeof o.cb == "function") {
          if (b.addEventListener) {
            b.addEventListener("load", function () {
              o.cb();
            }, false);
          } else {
            b.onreadystatechange = cc11001100_hook("b.onreadystatechange", function () {
              if (this.readyState == 'complete' || this.readyState == 'loaded') {
                this.onreadystatechange = cc11001100_hook("this.onreadystatechange", null, "assign");
                o.cb();
              }
            }, "assign");
          }
        }
        l = cc11001100_hook("l", o.loc || "head", "assign");
        c = cc11001100_hook("c", a.getElementsByTagName(l)[0], "assign");
        if (c) {
          utag.DB("Attach to " + l + ": " + o.src);
          if (l == "script") {
            c.parentNode.insertBefore(b, c);
          } else {
            c.appendChild(b);
          }
        }
      }, "assign");
    } else {
      u.loader = cc11001100_hook("u.loader", utag.ut.loader, "assign");
    }
    u.encode = cc11001100_hook("u.encode", function (a, b) {
      b = cc11001100_hook("b", "", "assign");
      try {
        b = cc11001100_hook("b", encodeURIComponent(a), "assign");
      } catch (e) {
        utag.DB(e);
      }
      if (b == "") {
        b = cc11001100_hook("b", escape(a), "assign");
      }
      return b;
    }, "assign");
    u.ev = cc11001100_hook("u.ev", {
      "view": cc11001100_hook("view", 1, "object-key-init")
    }, "assign");
    u.scriptrequested = cc11001100_hook("u.scriptrequested", false, "assign");
    u.rp = cc11001100_hook("u.rp", function (a, b) {
      if (typeof a !== "undefined" && a.indexOf("@@") > 0) {
        a = cc11001100_hook("a", a.replace(/@@([^@]+)@@/g, function (m, d) {
          if (b[d]) {
            return u.encode(b[d]);
          } else {
            return "";
          }
        }), "assign");
      }
      return a;
    }, "assign");
    u.map = cc11001100_hook("u.map", {}, "assign");
    u.extend = cc11001100_hook("u.extend", [function (a, b) {
      try {
        if (b['page.name'] == 'RIBE/REVENUE/REVENUE_FLEXPRICER/OUTBOUND' || b['page.name'] == 'RIBE/REVENUE/REVENUE_SCHEDULEDRIVEN/OUTBOUND') {
          window.optimizely = cc11001100_hook("window.optimizely", window.optimizely || [], "assign");
          var OWD_MODE = cc11001100_hook("OWD_MODE", false, "var-init");
          if (DDSContext.OWD_MODE === "TRUE") {
            OWD_MODE = cc11001100_hook("OWD_MODE", true, "assign");
          }
          var search_flight = cc11001100_hook("search_flight", {
            "type": cc11001100_hook("type", "event", "object-key-init"),
            "eventName": cc11001100_hook("eventName", "search_flight", "object-key-init"),
            "tags": {
              "timestamp": cc11001100_hook("timestamp", new Date().getTime(), "object-key-init"),
              "product_type": cc11001100_hook("product_type", b["search.type"], "object-key-init"),
              "category": cc11001100_hook("category", "recent-search", "object-key-init"),
              "origin": cc11001100_hook("origin", OWD_MODE ? b["search.origin.airport"] : b["search.params.origin.airport"], "object-key-init"),
              "destination": cc11001100_hook("destination", OWD_MODE ? b["search.destination.airport"] : b["search.params.destination.airport"], "object-key-init"),
              "cabin": cc11001100_hook("cabin", b["search.params.cabin"], "object-key-init"),
              "date_departure": cc11001100_hook("date_departure", b["search.params.date_outbound"], "object-key-init"),
              "date_return": cc11001100_hook("date_return", b["search.params.date_inbound"], "object-key-init"),
              "trip_type": cc11001100_hook("trip_type", b["search.params.trip_type"], "object-key-init"),
              "pax_adult": cc11001100_hook("pax_adult", b["search.pax.adult"], "object-key-init"),
              "pax_child": cc11001100_hook("pax_child", b["search.pax.child"], "object-key-init"),
              "pax_infant": cc11001100_hook("pax_infant", b["search.pax.infant"], "object-key-init"),
              "pax_young_adt": cc11001100_hook("pax_young_adt", DDSContext.nbB15, "object-key-init"),
              "flow": cc11001100_hook("flow", b["page.flow"], "object-key-init"),
              "fav_search_airport": cc11001100_hook("fav_search_airport", utag.data['va.metric_sets.18178.' + utag.data['va.properties.18177']] > 2 ? utag.data['va.properties.18177'] : "", "object-key-init"),
              "deeplink": cc11001100_hook("deeplink", function () {
                l = cc11001100_hook("l", b["page.language"], "assign");
                o = cc11001100_hook("o", OWD_MODE ? b["search.origin.airport"] : b["search.params.origin.airport"], "assign");
                d = cc11001100_hook("d", OWD_MODE ? b["search.destination.airport"] : b["search.params.destination.airport"], "assign");
                m = cc11001100_hook("m", b["page.country"], "assign");
                t = cc11001100_hook("t", b["search.params.trip_type"], "assign");
                dd = cc11001100_hook("dd", b["search.params.date_outbound"], "assign");
                rd = cc11001100_hook("rd", b["search.params.date_inbound"], "assign");
                return_url = cc11001100_hook("return_url", "https://www.cathaypacific.com/cx/" + [l, m].join("_") + ".html", "assign");
                adt = cc11001100_hook("adt", b["search.params.pax.adult"] || b["search.pax.adult"], "assign");
                chd = cc11001100_hook("chd", b["search.params.pax.child"] || b["search.pax.child"], "assign");
                inf = cc11001100_hook("inf", b["search.params.pax.infant"] || b["search.pax.infant"], "assign");
                yadt = cc11001100_hook("yadt", DDSContext.nbB15, "assign");
                return ("https://www.cathaypacific.com/wdsibe/IBEFacade?ACTION=SINGLECITY_SEARCH&FLEXIBLEDATE=true&BOOKING_FLOW=REVENUE&ENTRYLANGUAGE=" + l + "&ENTRYPOINT=" + encodeURIComponent(return_url) + "&ENTRYCOUNTRY=" + m + "&RETURNURL=" + encodeURIComponent(return_url) + "&ERRORURL=" + encodeURIComponent(return_url) + "&ORIGIN=" + o + "&DESTINATION=" + d + "&DEPARTUREDATE=" + dd + "&ARRIVALDATE=" + rd + "&TRIPTYPE=" + t + "&CABINCLASS=Y&ADULT=" + adt + "&YOUNGADULT=" + yadt + "&CHILD=" + chd + "&INFANT=" + inf).replace(/-/g, "");
              }(), "object-key-init")
            }
          }, "var-init");
          window.optimizely.push(search_flight);
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (typeof b['page.name'] != 'undefined' && b['application.name'].toString().toLowerCase() == 'RIBE'.toLowerCase() && b['page.stream'].toString().toLowerCase() == 'REV'.toLowerCase() || typeof b['page.name'] != 'undefined' && b['application.name'].toString().toLowerCase() == 'RIBE'.toLowerCase() && b['page.stream'].toString().toLowerCase() == 'ATC'.toLowerCase()) {
          var discountFlow = cc11001100_hook("discountFlow", cxDataLayer.offer && cxDataLayer.offer.discount_code ? 'discount' : null, "var-init");
          var bpFlow = cc11001100_hook("bpFlow", cxDataLayer.custom_data && cxDataLayer.custom_data.ibe && cxDataLayer.custom_data.ibe.b_code ? 'bp' : null, "var-init");
          var pageName = cc11001100_hook("pageName", cxDataLayer.page && cxDataLayer.page.name ? cxDataLayer.page.name : null, "var-init");
          var pageFlow = cc11001100_hook("pageFlow", cxDataLayer.page && cxDataLayer.page.flow ? cxDataLayer.page.flow : null, "var-init");
          var pushPage = function (pn) {
            window['optimizely'] = cc11001100_hook("window['optimizely']", window['optimizely'] || [], "assign");
            window['optimizely'].push({
              type: cc11001100_hook("type", 'page', "object-key-init"),
              pageName: cc11001100_hook("pageName", pn, "object-key-init")
            });
          };
          var legacyPageName = cc11001100_hook("legacyPageName", pageName.replace(/\//g, '_').replace(/\\/g, '_').toLowerCase(), "var-init");
          switch (pageFlow) {
            case 'FP':
            case 'SD':
            case 'FP-M':
            case 'SD-M':
            case 'PROMO':
            case 'ATC-NA':
              pageName = cc11001100_hook("pageName", (pageName.replace(/\//g, '_').replace(/\\/g, '_') + '_' + pageFlow.replace(/-/g, '_')).toLowerCase(), "assign");
          }
          if (pageName.indexOf('passenger') !== -1) {
            legacyPageName = cc11001100_hook("legacyPageName", window.location.href.indexOf('backToPins') !== -1 ? legacyPageName + '_' + 'backtopins' : legacyPageName, "assign");
            pageName = cc11001100_hook("pageName", window.location.href.indexOf('backToPins') !== -1 ? pageName + '_' + 'backtopins' : pageName, "assign");
          }
          if (discountFlow) {
            legacyPageName = cc11001100_hook("legacyPageName", discountFlow + '_' + legacyPageName, "assign");
            pageName = cc11001100_hook("pageName", discountFlow + '_' + pageName, "assign");
            pushPage(legacyPageName);
            pushPage(pageName);
          } else if (bpFlow) {
            legacyPageName = cc11001100_hook("legacyPageName", bpFlow + '_' + legacyPageName, "assign");
            pageName = cc11001100_hook("pageName", bpFlow + '_' + pageName, "assign");
            pushPage(legacyPageName);
            pushPage(pageName);
          } else {
            pushPage(legacyPageName);
            pushPage(pageName);
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }], "assign");
    u.send = cc11001100_hook("u.send", function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        var c, d, e, f;
        u.data = cc11001100_hook("u.data", {
          "qsp_delim": cc11001100_hook("qsp_delim", "&" || "&", "object-key-init"),
          "kvp_delim": cc11001100_hook("kvp_delim", "=" || "=", "object-key-init"),
          "qs_delim": cc11001100_hook("qs_delim", "?" || "?", "object-key-init"),
          "tag_type": cc11001100_hook("tag_type", "script", "object-key-init"),
          "base_url": cc11001100_hook("base_url", "https://cdn.optimizely.com/public/1370244502/s/ribe.js", "object-key-init"),
          "secure_base_url": cc11001100_hook("secure_base_url", "", "object-key-init"),
          "static_params": cc11001100_hook("static_params", "", "object-key-init"),
          "cachebust": cc11001100_hook("cachebust", "disabled", "object-key-init"),
          "cachevar": cc11001100_hook("cachevar", "" || "_rnd", "object-key-init"),
          "requestscriptonce": cc11001100_hook("requestscriptonce", "disabled", "object-key-init")
        }, "assign");
        for (c = cc11001100_hook("c", 0, "assign"); c < u.extend.length; c++) {
          try {
            d = cc11001100_hook("d", u.extend[c](a, b), "assign");
            if (d == false) return;
          } catch (e) {}
        }
        ;
        utag.DB("send:646:EXTENSIONS");
        utag.DB(b);
        c = cc11001100_hook("c", [], "assign");
        for (d in utag.loader.GV(u.map)) {
          if (typeof b[d] !== "undefined" && b[d] !== "") {
            e = cc11001100_hook("e", u.map[d].split(","), "assign");
            for (f = cc11001100_hook("f", 0, "assign"); f < e.length; f++) {
              if (!u.data.hasOwnProperty(e[f])) {
                c.push(e[f] + "##kvp_delim##" + u.encode(b[d]));
              }
              u.data[e[f]] = cc11001100_hook("u.data[e[f]]", b[d], "assign");
            }
          }
        }
        if (!u.data.base_url) {
          if (!u.data.secure_base_url) {
            utag.DB("Error: No Base URL or Secure HTTPS Override Provided.");
            return;
          } else {
            u.data.base_url = cc11001100_hook("u.data.base_url", u.data.secure_base_url, "assign");
            utag.DB("No Base URL provided, using Secure HTTPS Override.");
          }
        }
        u.data.secure_base_url = cc11001100_hook("u.data.secure_base_url", u.data.secure_base_url || u.data.base_url, "assign");
        u.data.url = cc11001100_hook("u.data.url", location.protocol === "https:" ? u.data.secure_base_url : u.data.base_url, "assign");
        if (u.data.url.indexOf("http") !== 0 && u.data.url.indexOf("/") !== 0) {
          u.data.url = cc11001100_hook("u.data.url", location.protocol + "//" + u.data.url, "assign");
        }
        if (u.data.static_params) {
          c.push(u.data.static_params);
        }
        var cb_check = cc11001100_hook("cb_check", new RegExp("(\\" + u.data.qs_delim + "|" + u.data.qsp_delim + ")" + u.data.cachevar + "="), "var-init");
        if (u.data.cachebust === "enabled" && !cb_check.test(u.data.url)) {
          c.push([u.data.cachevar, Math.random()].join(u.data.kvp_delim));
        }
        if (c.length > 0) {
          if (u.data.url.indexOf(u.data.qs_delim) < 0) {
            u.data.url += cc11001100_hook("u.data.url", u.data.qs_delim, "assign");
          } else if (u.data.url.indexOf(u.data.qs_delim) !== u.data.url.length - 1) {
            u.data.url += cc11001100_hook("u.data.url", u.data.qsp_delim, "assign");
          }
        }
        u.data.url = cc11001100_hook("u.data.url", u.rp(u.data.url, b) + u.rp(c.join(u.data.qsp_delim), b), "assign");
        u.data.url = cc11001100_hook("u.data.url", u.data.url.replace(/##kvp_delim##/g, u.data.kvp_delim), "assign");
        u.callback = cc11001100_hook("u.callback", u.callback || function () {}, "assign");
        if (u.data.requestscriptonce === "enabled" && u.data.tag_type === "script") {
          if (!u.scriptrequested) {
            u.scriptrequested = cc11001100_hook("u.scriptrequested", true, "assign");
            u.loader({
              "type": cc11001100_hook("type", u.data.tag_type, "object-key-init"),
              "src": cc11001100_hook("src", u.data.url, "object-key-init"),
              "loc": cc11001100_hook("loc", "script", "object-key-init"),
              "id": cc11001100_hook("id", "utag_646", "object-key-init"),
              "cb": cc11001100_hook("cb", u.callback, "object-key-init")
            });
          } else {
            u.callback();
          }
        } else {
          u.loader({
            "type": cc11001100_hook("type", u.data.tag_type, "object-key-init"),
            "src": cc11001100_hook("src", u.data.url, "object-key-init"),
            "loc": cc11001100_hook("loc", "script", "object-key-init"),
            "id": cc11001100_hook("id", "utag_646", "object-key-init"),
            "cb": cc11001100_hook("cb", u.callback, "object-key-init")
          });
        }
        utag.DB("send:646:COMPLETE");
      }
    }, "assign");
    utag.o[loader].loader.LOAD(id);
  })("646", "cx.web");
} catch (error) {
  utag.DB(error);
}