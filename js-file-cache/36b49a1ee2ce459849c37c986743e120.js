//tealium universal tag - utag.1322 ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = cc11001100_hook("u", {
      "id": cc11001100_hook("id", id, "object-key-init")
    }, "var-init");
    utag.o[loader].sender[id] = cc11001100_hook("utag.o[loader].sender[id]", u, "assign");
    if (utag.ut === undefined) {
      utag.ut = cc11001100_hook("utag.ut", {}, "assign");
    }
    var match = cc11001100_hook("match", /ut\d\.(\d*)\..*/.exec(utag.cfg.v), "var-init");
    if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
      u.loader = cc11001100_hook("u.loader", function (o, a, b, c, l, m) {
        utag.DB(o);
        a = cc11001100_hook("a", document, "assign");
        if (o.type == "iframe") {
          m = cc11001100_hook("m", a.getElementById(o.id), "assign");
          if (m && m.tagName == "IFRAME") {
            b = cc11001100_hook("b", m, "assign");
          } else {
            b = cc11001100_hook("b", a.createElement("iframe"), "assign");
          }
          o.attrs = cc11001100_hook("o.attrs", o.attrs || {}, "assign");
          utag.ut.merge(o.attrs, {
            "height": cc11001100_hook("height", "1", "object-key-init"),
            "width": cc11001100_hook("width", "1", "object-key-init"),
            "style": cc11001100_hook("style", "display:none", "object-key-init")
          }, 0);
        } else if (o.type == "img") {
          utag.DB("Attach img: " + o.src);
          b = cc11001100_hook("b", new Image(), "assign");
        } else {
          b = cc11001100_hook("b", a.createElement("script"), "assign");
          b.language = cc11001100_hook("b.language", "javascript", "assign");
          b.type = cc11001100_hook("b.type", "text/javascript", "assign");
          b.async = cc11001100_hook("b.async", 1, "assign");
          b.charset = cc11001100_hook("b.charset", "utf-8", "assign");
        }
        if (o.id) {
          b.id = cc11001100_hook("b.id", o.id, "assign");
        }
        for (l in utag.loader.GV(o.attrs)) {
          b.setAttribute(l, o.attrs[l]);
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb == "function") {
          if (b.addEventListener) {
            b.addEventListener("load", function () {
              o.cb();
            }, false);
          } else {
            b.onreadystatechange = cc11001100_hook("b.onreadystatechange", function () {
              if (this.readyState == "complete" || this.readyState == "loaded") {
                this.onreadystatechange = cc11001100_hook("this.onreadystatechange", null, "assign");
                o.cb();
              }
            }, "assign");
          }
        }
        if (o.type != "img" && !m) {
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
      "view": cc11001100_hook("view", 1, "object-key-init")
    }, "assign");
    u.hasgtagjs = cc11001100_hook("u.hasgtagjs", function () {
      window.gtagRename = cc11001100_hook("window.gtagRename", window.gtagRename || "" || "gtag", "assign");
      if (utag.ut.gtagScriptRequested) {
        return true;
      }
      var i,
        s = cc11001100_hook("s", document.getElementsByTagName("script"), "var-init");
      for (i = cc11001100_hook("i", 0, "assign"); i < s.length; i++) {
        if (s[i].src && s[i].src.indexOf("gtag/js") >= 0) {
          return true;
        }
      }
      window.dataLayer = cc11001100_hook("window.dataLayer", window.dataLayer || [], "assign");
      if (typeof window[window.gtagRename] !== "function") {
        window[window.gtagRename] = cc11001100_hook("window[window.gtagRename]", function () {
          dataLayer.push(arguments);
        }, "assign");
        window[window.gtagRename]("js", new Date());
      }
      return false;
    }, "assign");
    u.scriptrequested = cc11001100_hook("u.scriptrequested", u.hasgtagjs(), "assign");
    u.o = cc11001100_hook("u.o", window[window.gtagRename], "assign");
    u.map_func = cc11001100_hook("u.map_func", function (arr, obj, item) {
      var i = cc11001100_hook("i", arr.shift(), "var-init");
      obj[i] = cc11001100_hook("obj[i]", obj[i] || {}, "assign");
      if (arr.length > 0) {
        u.map_func(arr, obj[i], item);
      } else {
        obj[i] = cc11001100_hook("obj[i]", item, "assign");
      }
    }, "assign");
    u.hasOwn = cc11001100_hook("u.hasOwn", function (o, a) {
      return o != null && Object.prototype.hasOwnProperty.call(o, a);
    }, "assign");
    u.isEmptyObject = cc11001100_hook("u.isEmptyObject", function (o, a) {
      for (a in o) {
        if (u.hasOwn(o, a)) {
          return false;
        }
      }
      return true;
    }, "assign");
    u.map = cc11001100_hook("u.map", {
      "page.locale": cc11001100_hook("page.locale", "custom.u7", "object-key-init"),
      "_sm_1322_2:conversion": cc11001100_hook("_sm_1322_2:conversion", "conversion", "object-key-init"),
      "vendor.floodlight.advertisementid": cc11001100_hook("vendor.floodlight.advertisementid", "advertiser_id", "object-key-init"),
      "vendor.floodlight.activity_group": cc11001100_hook("vendor.floodlight.activity_group", "activity_group", "object-key-init"),
      "vendor.floodlight.activity": cc11001100_hook("vendor.floodlight.activity", "activity", "object-key-init"),
      "vendor.floodlight.countingmethod": cc11001100_hook("vendor.floodlight.countingmethod", "counting_method", "object-key-init"),
      "dom.url": cc11001100_hook("dom.url", "custom.u19", "object-key-init"),
      "page.name": cc11001100_hook("page.name", "custom.u20", "object-key-init"),
      "registration.hash_id": cc11001100_hook("registration.hash_id", "custom.u21", "object-key-init")
    }, "assign");
    u.extend = cc11001100_hook("u.extend", [function (a, b) {
      try {
        b['_sm_1322_2'] = cc11001100_hook("b['_sm_1322_2']", "conversion", "assign");
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b, c, d, e, f, g) {
      if (1) {
        d = cc11001100_hook("d", b['dom.pathname'], "assign");
        if (typeof d == 'undefined') return;
        c = cc11001100_hook("c", [{
          'offers/standard-chartered-cathay-mastercard-cxoffer/overview.html': cc11001100_hook('offers/standard-chartered-cathay-mastercard-cxoffer/overview.html', 'DC-12146807|payme0|newpro|standard', "object-key-init")
        }, {
          'offers/standard-chartered-cathay-mastercard-cxoffer/standard-chartered-cathay-mastercard.html': cc11001100_hook('offers/standard-chartered-cathay-mastercard-cxoffer/standard-chartered-cathay-mastercard.html', 'DC-12146807|payme0|newt0|standard', "object-key-init")
        }, {
          'offers/standard-chartered-cathay-mastercard-cxoffer/standard-chartered-cathay-mastercard-priority-banking.html': cc11001100_hook('offers/standard-chartered-cathay-mastercard-cxoffer/standard-chartered-cathay-mastercard-priority-banking.html', 'DC-12146807|payme0|newt1|standard', "object-key-init")
        }, {
          'offers/standard-chartered-cathay-mastercard-cxoffer/standard-chartered-cathay-mastercard-priority-private.html': cc11001100_hook('offers/standard-chartered-cathay-mastercard-cxoffer/standard-chartered-cathay-mastercard-priority-private.html', 'DC-12146807|payme0|newt2|standard', "object-key-init")
        }, {
          'offers/standard-chartered-cathay-mastercard-cxoffer/exclusive-offers.html': cc11001100_hook('offers/standard-chartered-cathay-mastercard-cxoffer/exclusive-offers.html', 'DC-12146807|payme0|newexclu|standard', "object-key-init")
        }, {
          'offers/standard-chartered-cathay-mastercard/exclusive-offers.html': cc11001100_hook('offers/standard-chartered-cathay-mastercard/exclusive-offers.html', 'DC-12146807|payme0|preexcl|standard', "object-key-init")
        }, {
          'offers/standard-chartered-cathay-mastercard/overview.html': cc11001100_hook('offers/standard-chartered-cathay-mastercard/overview.html', 'DC-12146807|payme0|precxsum|standard', "object-key-init")
        }, {
          'offers/standard-chartered-cathay-mastercard/standard-chartered-cathay-mastercard.html': cc11001100_hook('offers/standard-chartered-cathay-mastercard/standard-chartered-cathay-mastercard.html', 'DC-12146807|payme0|precxt0|standard', "object-key-init")
        }, {
          'offers/standard-chartered-cathay-mastercard/standard-chartered-cathay-mastercard-priority-banking.html': cc11001100_hook('offers/standard-chartered-cathay-mastercard/standard-chartered-cathay-mastercard-priority-banking.html', 'DC-12146807|payme0|precxt1|standard', "object-key-init")
        }, {
          'offers/standard-chartered-cathay-mastercard/standard-chartered-cathay-mastercard-priority-private.html': cc11001100_hook('offers/standard-chartered-cathay-mastercard/standard-chartered-cathay-mastercard-priority-private.html', 'DC-12146807|payme0|precxt2|standard', "object-key-init")
        }], "assign");
        var m = cc11001100_hook("m", false, "var-init");
        for (e = cc11001100_hook("e", 0, "assign"); e < c.length; e++) {
          for (f in utag.loader.GV(c[e])) {
            if (d.toString().indexOf(f) > -1) {
              b['vendor.floodlight.setting'] = cc11001100_hook("b['vendor.floodlight.setting']", c[e][f], "assign");
              m = cc11001100_hook("m", true, "assign");
            }
            ;
          }
          ;
          if (m) break;
        }
        ;
        if (!m) b['vendor.floodlight.setting'] = cc11001100_hook("b['vendor.floodlight.setting']", '', "assign");
      }
    }, function (a, b) {
      try {
        if (1) {
          try {
            b['vendor.floodlight.advertisementid'] = cc11001100_hook("b['vendor.floodlight.advertisementid']", b['vendor.floodlight.setting'].split("|")[0], "assign");
          } catch (e) {}
          ;
          try {
            b['vendor.floodlight.activity_group'] = cc11001100_hook("b['vendor.floodlight.activity_group']", b['vendor.floodlight.setting'].split("|")[1], "assign");
          } catch (e) {}
          ;
          try {
            b['vendor.floodlight.activity'] = cc11001100_hook("b['vendor.floodlight.activity']", b['vendor.floodlight.setting'].split("|")[2], "assign");
          } catch (e) {}
          ;
          try {
            b['vendor.floodlight.countingmethod'] = cc11001100_hook("b['vendor.floodlight.countingmethod']", b['vendor.floodlight.setting'].split("|")[3], "assign");
          } catch (e) {}
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          if (b['vendor.floodlight.setting'] === '') {
            return false;
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }], "assign");
    u.send = cc11001100_hook("u.send", function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:1322");
        utag.DB(b);
        var d, e, f, h, i, j, _event, p, key;
        u.data = cc11001100_hook("u.data", {
          "qsp_delim": cc11001100_hook("qsp_delim", "&", "object-key-init"),
          "kvp_delim": cc11001100_hook("kvp_delim", "=", "object-key-init"),
          "base_url": cc11001100_hook("base_url", "https://www.googletagmanager.com/gtag/js", "object-key-init"),
          "advertiser_id": cc11001100_hook("advertiser_id", "", "object-key-init"),
          "activity_group": cc11001100_hook("activity_group", "", "object-key-init"),
          "activity": cc11001100_hook("activity", "", "object-key-init"),
          "counting_method": cc11001100_hook("counting_method", "standard", "object-key-init"),
          "custom_scripts": cc11001100_hook("custom_scripts", "true", "object-key-init"),
          "session_id": cc11001100_hook("session_id", "", "object-key-init"),
          "product_quantity": cc11001100_hook("product_quantity", [], "object-key-init"),
          "dc_custom_params": {},
          "event_name": cc11001100_hook("event_name", "", "object-key-init"),
          "event": cc11001100_hook("event", [], "object-key-init"),
          "custom": {}
        }, "assign");
        for (c = cc11001100_hook("c", 0, "assign"); c < u.extend.length; c++) {
          try {
            d = cc11001100_hook("d", u.extend[c](a, b), "assign");
            if (d == false) return;
          } catch (e) {}
        }
        ;
        utag.DB("send:1322:EXTENSIONS");
        utag.DB(b);
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = cc11001100_hook("e", u.map[d].split(","), "assign");
            for (f = cc11001100_hook("f", 0, "assign"); f < e.length; f++) {
              u.map_func(e[f].split("."), u.data, b[d]);
            }
          } else {
            h = cc11001100_hook("h", d.split(":"), "assign");
            if (h.length === 2 && b[h[0]] === h[1]) {
              if (u.map[d]) {
                u.data.event = cc11001100_hook("u.data.event", u.data.event.concat(u.map[d].split(",")), "assign");
              }
            }
          }
        }
        utag.DB("send:1322:MAPPINGS");
        utag.DB(u.data);
        u.data.order_id = cc11001100_hook("u.data.order_id", u.data.order_id || b._corder || "", "assign");
        u.data.order_total = cc11001100_hook("u.data.order_total", u.data.order_total || b._ctotal || "", "assign");
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
          u.data.product_quantity = cc11001100_hook("u.data.product_quantity", b._cquan.slice(0), "assign");
        }
        if (typeof u.data.advertiser_id === "string") {
          u.data.advertiser_id = cc11001100_hook("u.data.advertiser_id", u.data.advertiser_id.split(","), "assign");
        }
        if (typeof u.data.activity_group === "string") {
          u.data.activity_group = cc11001100_hook("u.data.activity_group", u.data.activity_group.split(","), "assign");
        }
        if (typeof u.data.activity === "string") {
          u.data.activity = cc11001100_hook("u.data.activity", u.data.activity.split(","), "assign");
        }
        if (typeof u.data.counting_method === "string") {
          u.data.counting_method = cc11001100_hook("u.data.counting_method", u.data.counting_method.split(","), "assign");
        }
        if (typeof u.data.session_id === "string") {
          u.data.session_id = cc11001100_hook("u.data.session_id", u.data.session_id.split(","), "assign");
        }
        if (!u.data.advertiser_id) {
          utag.DB(u.id + ": Tag not fired: Required attribute not populated");
          return;
        }
        u.data.base_url += cc11001100_hook("u.data.base_url", "?id=" + u.data.advertiser_id[0], "assign");
        for (i = cc11001100_hook("i", 0, "assign"); i < u.data.advertiser_id.length; i++) {
          u.o("config", u.data.advertiser_id[i]);
        }
        if (u.data.order_id) {
          for (i = cc11001100_hook("i", 0, "assign"); i < u.data.event.length; i++) {
            if (u.data.event[i] === "purchase") {
              p = cc11001100_hook("p", true, "assign");
            }
          }
          if (!p) {
            u.data.event.push("purchase");
          }
        }
        var total_qty = cc11001100_hook("total_qty", 1, "var-init");
        if (typeof u.data.product_quantity === "number") {
          total_qty = cc11001100_hook("total_qty", u.data.product_quantity, "assign");
        } else if (u.data.product_quantity.length === 1) {
          total_qty = cc11001100_hook("total_qty", u.data.product_quantity[0], "assign");
        } else if (u.data.product_quantity.length > 1) {
          for (i = cc11001100_hook("i", 0, "assign"); i < u.data.product_quantity.length; i++) {
            total_qty += cc11001100_hook("total_qty", parseInt(u.data.product_quantity[i], 10), "assign");
          }
        }
        for (i = cc11001100_hook("i", 0, "assign"); i < u.data.event.length; i++) {
          _event = cc11001100_hook("_event", u.data.event[i], "assign");
          for (j = cc11001100_hook("j", 0, "assign"); j < u.data.advertiser_id.length; j++) {
            var eventIdData = cc11001100_hook("eventIdData", {}, "var-init");
            if (u.data.custom_scripts === "true" || u.data.custom_scripts) {
              eventIdData.allow_custom_scripts = cc11001100_hook("eventIdData.allow_custom_scripts", true, "assign");
            } else if (u.data.custom_scripts === "false" || !u.data.custom_scripts) {
              eventIdData.allow_custom_scripts = cc11001100_hook("eventIdData.allow_custom_scripts", false, "assign");
            }
            if (u.data.session_id.length === 1 && u.data.session_id[0] !== "") {
              eventIdData.session_id = cc11001100_hook("eventIdData.session_id", u.data.session_id[0], "assign");
            } else if (u.data.session_id[j] !== "") {
              eventIdData.session_id = cc11001100_hook("eventIdData.session_id", u.data.session_id[j], "assign");
            }
            if (u.data.order_total) {
              eventIdData.value = cc11001100_hook("eventIdData.value", u.data.order_total, "assign");
              eventIdData.transaction_id = cc11001100_hook("eventIdData.transaction_id", u.data.order_id, "assign");
            }
            if (u.data.product_quantity) {
              eventIdData.quantity = cc11001100_hook("eventIdData.quantity", total_qty, "assign");
            }
            for (key in u.data.custom) {
              eventIdData[key] = cc11001100_hook("eventIdData[key]", u.data.custom[key], "assign");
            }
            if (!u.isEmptyObject(u.data.dc_custom_params)) {
              eventIdData.dc_custom_params = cc11001100_hook("eventIdData.dc_custom_params", {}, "assign");
              for (key in u.data.dc_custom_params) {
                eventIdData.dc_custom_params[key] = cc11001100_hook("eventIdData.dc_custom_params[key]", u.data.dc_custom_params[key], "assign");
              }
            }
            eventIdData.send_to = cc11001100_hook("eventIdData.send_to", u.data.advertiser_id[j] + "/" + u.data.activity_group[j] + "/" + u.data.activity[j] + "+" + u.data.counting_method[j], "assign");
            if (_event === "purchase") {
              u.o("event", "purchase", eventIdData);
            }
            if (_event === "conversion") {
              u.o("event", "conversion", eventIdData);
            }
          }
        }
        if (!u.hasgtagjs()) {
          u.scriptrequested = cc11001100_hook("u.scriptrequested", true, "assign");
          utag.ut.gtagScriptRequested = cc11001100_hook("utag.ut.gtagScriptRequested", true, "assign");
          u.loader({
            "type": cc11001100_hook("type", "script", "object-key-init"),
            "src": cc11001100_hook("src", u.data.base_url, "object-key-init"),
            "cb": cc11001100_hook("cb", null, "object-key-init"),
            "loc": cc11001100_hook("loc", "script", "object-key-init"),
            "id": cc11001100_hook("id", "utag_1322", "object-key-init"),
            "attrs": {}
          });
        }
        utag.DB("send:1322:COMPLETE");
      }
    }, "assign");
    utag.o[loader].loader.LOAD(id);
  })("1322", "cx.web");
} catch (error) {
  utag.DB(error);
}