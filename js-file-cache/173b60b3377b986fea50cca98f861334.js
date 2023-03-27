//tealium universal tag - utag.1 ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
if (typeof JSON !== 'object') {
  JSON = cc11001100_hook("JSON", {}, "assign");
}
(function () {
  'use strict';

  var rx_one = cc11001100_hook("rx_one", /^[\],:{}\s]*$/, "var-init"),
    rx_two = cc11001100_hook("rx_two", /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "var-init"),
    rx_three = cc11001100_hook("rx_three", /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "var-init"),
    rx_four = cc11001100_hook("rx_four", /(?:^|:|,)(?:\s*\[)+/g, "var-init"),
    rx_escapable = cc11001100_hook("rx_escapable", /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, "var-init"),
    rx_dangerous = cc11001100_hook("rx_dangerous", /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, "var-init");
  function f(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n < 10 ? '0' + n : n;
  }
  function this_value() {
    return this.valueOf();
  }
  if (typeof Date.prototype.toJSON !== 'function') {
    Date.prototype.toJSON = cc11001100_hook("Date.prototype.toJSON", function () {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null;
    }, "assign");
    Boolean.prototype.toJSON = cc11001100_hook("Boolean.prototype.toJSON", this_value, "assign");
    Number.prototype.toJSON = cc11001100_hook("Number.prototype.toJSON", this_value, "assign");
    String.prototype.toJSON = cc11001100_hook("String.prototype.toJSON", this_value, "assign");
  }
  var gap, indent, meta, rep;
  function quote(string) {
    cc11001100_hook("string", string, "function-parameter");
    rx_escapable.lastIndex = cc11001100_hook("rx_escapable.lastIndex", 0, "assign");
    return rx_escapable.test(string) ? '"' + string.replace(rx_escapable, function (a) {
      var c = cc11001100_hook("c", meta[a], "var-init");
      return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
  }
  function str(key, holder) {
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("holder", holder, "function-parameter");
    var i,
      k,
      v,
      length,
      mind = cc11001100_hook("mind", gap, "var-init"),
      partial,
      value = cc11001100_hook("value", holder[key], "var-init");
    if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
      value = cc11001100_hook("value", value.toJSON(key), "assign");
    }
    if (typeof rep === 'function') {
      value = cc11001100_hook("value", rep.call(holder, key, value), "assign");
    }
    switch (typeof value) {
      case 'string':
        return quote(value);
      case 'number':
        return isFinite(value) ? String(value) : 'null';
      case 'boolean':
      case 'null':
        return String(value);
      case 'object':
        if (!value) {
          return 'null';
        }
        gap += cc11001100_hook("gap", indent, "assign");
        partial = cc11001100_hook("partial", [], "assign");
        if (Object.prototype.toString.apply(value) === '[object Array]') {
          length = cc11001100_hook("length", value.length, "assign");
          for (i = cc11001100_hook("i", 0, "assign"); i < length; i += cc11001100_hook("i", 1, "assign")) {
            partial[i] = cc11001100_hook("partial[i]", str(i, value) || 'null', "assign");
          }
          v = cc11001100_hook("v", partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']', "assign");
          gap = cc11001100_hook("gap", mind, "assign");
          return v;
        }
        if (rep && typeof rep === 'object') {
          length = cc11001100_hook("length", rep.length, "assign");
          for (i = cc11001100_hook("i", 0, "assign"); i < length; i += cc11001100_hook("i", 1, "assign")) {
            if (typeof rep[i] === 'string') {
              k = cc11001100_hook("k", rep[i], "assign");
              v = cc11001100_hook("v", str(k, value), "assign");
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        } else {
          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = cc11001100_hook("v", str(k, value), "assign");
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        }
        v = cc11001100_hook("v", partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}', "assign");
        gap = cc11001100_hook("gap", mind, "assign");
        return v;
    }
  }
  if (typeof JSON.stringify !== 'function') {
    meta = cc11001100_hook("meta", {
      '\b': cc11001100_hook('\b', '\\b', "object-key-init"),
      '\t': cc11001100_hook('\t', '\\t', "object-key-init"),
      '\n': cc11001100_hook('\n', '\\n', "object-key-init"),
      '\f': cc11001100_hook('\f', '\\f', "object-key-init"),
      '\r': cc11001100_hook('\r', '\\r', "object-key-init"),
      '"': cc11001100_hook('"', '\\"', "object-key-init"),
      '\\': cc11001100_hook('\\', '\\\\', "object-key-init")
    }, "assign");
    JSON.stringify = cc11001100_hook("JSON.stringify", function (value, replacer, space) {
      var i;
      gap = cc11001100_hook("gap", '', "assign");
      indent = cc11001100_hook("indent", '', "assign");
      if (typeof space === 'number') {
        for (i = cc11001100_hook("i", 0, "assign"); i < space; i += cc11001100_hook("i", 1, "assign")) {
          indent += cc11001100_hook("indent", ' ', "assign");
        }
      } else if (typeof space === 'string') {
        indent = cc11001100_hook("indent", space, "assign");
      }
      rep = cc11001100_hook("rep", replacer, "assign");
      if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
      }
      return str('', {
        '': cc11001100_hook('', value, "object-key-init")
      });
    }, "assign");
  }
})();
try {
  (function (id, loader, u) {
    try {
      u = cc11001100_hook("u", utag.o[loader].sender[id] = cc11001100_hook("utag.o[loader].sender[id]", {}, "assign"), "assign");
    } catch (e) {
      u = cc11001100_hook("u", utag.sender[id], "assign");
    }
    u.ev = cc11001100_hook("u.ev", {
      "all": cc11001100_hook("all", 1, "object-key-init")
    }, "assign");
    u.server_domain = cc11001100_hook("u.server_domain", "tealiumiq.com", "assign");
    u.server_prefix = cc11001100_hook("u.server_prefix", "", "assign");
    u.tag_config_server = cc11001100_hook("u.tag_config_server", "", "assign");
    u.tag_config_sampling = cc11001100_hook("u.tag_config_sampling", "100" || "100", "assign");
    if (utag.cfg.utagdb) {
      u.tag_config_sampling = cc11001100_hook("u.tag_config_sampling", "100", "assign");
    }
    u.tag_config_region = cc11001100_hook("u.tag_config_region", "default" || "default", "assign");
    u.region = cc11001100_hook("u.region", "", "assign");
    u.performance_timing_count = cc11001100_hook("u.performance_timing_count", 0, "assign");
    u.account = cc11001100_hook("u.account", utag.cfg.utid.split("/")[0], "assign");
    u.data_source = cc11001100_hook("u.data_source", "", "assign");
    u.profile = cc11001100_hook("u.profile", "main" || utag.cfg.utid.split("/")[1], "assign");
    if (u.tag_config_server.indexOf("-collect." + u.server_domain) > 1) {
      u.server_prefix = cc11001100_hook("u.server_prefix", u.tag_config_server.split("collect." + u.server_domain)[0], "assign");
      if (u.tag_config_server.indexOf("/i.gif") < 0) {
        u.tag_config_server = cc11001100_hook("u.tag_config_server", "https://" + [u.server_prefix + "collect." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/"), "assign");
      }
    }
    if (u.tag_config_server === "") {
      if (u.tag_config_region === "default") {
        u.tag_config_server = cc11001100_hook("u.tag_config_server", "https://" + [u.server_prefix + "collect." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/"), "assign");
      } else {
        u.tag_config_server = cc11001100_hook("u.tag_config_server", "https://" + [u.server_prefix + "collect-" + u.tag_config_region + "." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/"), "assign");
      }
    }
    if (u.tag_config_server.indexOf("-collect-") > -1) {
      u.server_prefix = cc11001100_hook("u.server_prefix", u.tag_config_server.split("collect-")[0], "assign");
    }
    if (u.tag_config_region !== "default" && u.tag_config_server.indexOf(u.server_prefix + "collect." + u.server_domain) > 0) {
      u.tag_config_server = cc11001100_hook("u.tag_config_server", u.tag_config_server.replace(u.server_prefix + "collect." + u.server_domain, u.server_prefix + "collect-" + u.tag_config_region + "." + u.server_domain), "assign");
      u.region = cc11001100_hook("u.region", u.tag_config_region, "assign");
    }
    u.data_enrichment = cc11001100_hook("u.data_enrichment", "frequent", "assign");
    u.profile_specific_vid = cc11001100_hook("u.profile_specific_vid", 0, "assign");
    u.enrichment_polling = cc11001100_hook("u.enrichment_polling", 1, "assign");
    u.enrichment_polling_delay = cc11001100_hook("u.enrichment_polling_delay", 500, "assign");
    u.do_enrichment = cc11001100_hook("u.do_enrichment", function () {}, "assign");
    var q = cc11001100_hook("q", u.tag_config_server.indexOf("?"), "var-init");
    if (q > 0 && q + 1 == u.tag_config_server.length) {
      u.tag_config_server = cc11001100_hook("u.tag_config_server", u.tag_config_server.replace("?", ""), "assign");
    }
    u.server_list = cc11001100_hook("u.server_list", u.tag_config_server.split("|"), "assign");
    u.enrichment_enabled = cc11001100_hook("u.enrichment_enabled", {}, "assign");
    u.get_account_profile = cc11001100_hook("u.get_account_profile", function (s) {
      var p = cc11001100_hook("p", s.substring(s.indexOf(u.server_domain)).split("/"), "var-init");
      return p;
    }, "assign");
    u.is_in_sample_group = cc11001100_hook("u.is_in_sample_group", function (b) {
      var group = cc11001100_hook("group", "100", "var-init");
      if (u.tag_config_sampling === "" || u.tag_config_sampling === "100") {
        return true;
      }
      if (b["cp.utag_main_dc_group"]) {
        group = cc11001100_hook("group", b["cp.utag_main_dc_group"], "assign");
      } else {
        group = cc11001100_hook("group", Math.floor(Math.random() * 100) + 1, "assign");
        utag.loader.SC("utag_main", {
          "dc_group": cc11001100_hook("dc_group", group, "object-key-init")
        });
      }
      if (parseInt(group) <= parseInt(u.tag_config_sampling)) {
        return true;
      } else {
        return false;
      }
    }, "assign");
    u.get_performance_timing = cc11001100_hook("u.get_performance_timing", function (b) {
      var t, timing;
      var data = cc11001100_hook("data", {}, "var-init");
      function subtract(val1, val2) {
        cc11001100_hook("val1", val1, "function-parameter");
        cc11001100_hook("val2", val2, "function-parameter");
        var difference = cc11001100_hook("difference", 0, "var-init");
        if (val1 > val2) {
          difference = cc11001100_hook("difference", val1 - val2, "assign");
        }
        return difference;
      }
      if (typeof localStorage != "undefined" && JSON.parse && window.performance && window.performance.timing) {
        t = cc11001100_hook("t", window.performance.timing, "assign");
        timing = cc11001100_hook("timing", localStorage.getItem("tealium_timing"), "assign");
        if (timing !== null && timing !== "{}" && typeof b !== "undefined" && u.performance_timing_count === 0) {
          utag.ut.merge(b, utag.ut.flatten({
            timing: cc11001100_hook("timing", JSON.parse(timing), "object-key-init")
          }), 1);
        }
      } else {
        return;
      }
      u.performance_timing_count++;
      for (var k in t) {
        if ((k.indexOf("dom") === 0 || k.indexOf("load") === 0) && t[k] === 0 && u.performance_timing_count < 20) {
          setTimeout(u.get_performance_timing, 1000);
        }
      }
      data["domain"] = cc11001100_hook("data[\"domain\"]", location.hostname + "", "assign");
      data["pathname"] = cc11001100_hook("data[\"pathname\"]", location.pathname + "", "assign");
      data["query_string"] = cc11001100_hook("data[\"query_string\"]", ("" + location.search).substring(1), "assign");
      data["timestamp"] = cc11001100_hook("data[\"timestamp\"]", new Date().getTime(), "assign");
      data["dns"] = cc11001100_hook("data[\"dns\"]", subtract(t.domainLookupEnd, t.domainLookupStart), "assign");
      data["connect"] = cc11001100_hook("data[\"connect\"]", subtract(t.connectEnd, t.connectStart), "assign");
      data["response"] = cc11001100_hook("data[\"response\"]", subtract(t.responseEnd, t.responseStart), "assign");
      data["dom_loading_to_interactive"] = cc11001100_hook("data[\"dom_loading_to_interactive\"]", subtract(t.domInteractive, t.domLoading), "assign");
      data["dom_interactive_to_complete"] = cc11001100_hook("data[\"dom_interactive_to_complete\"]", subtract(t.domComplete, t.domInteractive), "assign");
      data["load"] = cc11001100_hook("data[\"load\"]", subtract(t.loadEventEnd, t.loadEventStart), "assign");
      data["time_to_first_byte"] = cc11001100_hook("data[\"time_to_first_byte\"]", subtract(t.responseStart, t.connectEnd), "assign");
      data["front_end"] = cc11001100_hook("data[\"front_end\"]", subtract(t.loadEventStart, t.responseEnd), "assign");
      data["fetch_to_response"] = cc11001100_hook("data[\"fetch_to_response\"]", subtract(t.responseStart, t.fetchStart), "assign");
      data["fetch_to_complete"] = cc11001100_hook("data[\"fetch_to_complete\"]", subtract(t.domComplete, t.fetchStart), "assign");
      data["fetch_to_interactive"] = cc11001100_hook("data[\"fetch_to_interactive\"]", subtract(t.domInteractive, t.fetchStart), "assign");
      try {
        localStorage.setItem("tealium_timing", JSON.stringify(data));
      } catch (e) {
        utag.DB(e);
      }
    }, "assign");
    u.map = cc11001100_hook("u.map", {}, "assign");
    u.extend = cc11001100_hook("u.extend", [function (a, b) {
      try {
        if (1) {
          utag.data = cc11001100_hook("utag.data", {}, "assign");
          utag.data = cc11001100_hook("utag.data", udo = cc11001100_hook("udo", flattenfortealiumcollect(cxDataLayer), "assign"), "assign");
          for (key in udo) {
            if (udo.hasOwnProperty(key)) {
              b[key] = cc11001100_hook("b[key]", udo[key], "assign");
            }
          }
          ;
          function flattenfortealiumcollect(ob) {
            cc11001100_hook("ob", ob, "function-parameter");
            var toReturn = cc11001100_hook("toReturn", {}, "var-init");
            for (var i in ob) {
              if (!ob.hasOwnProperty(i)) continue;
              if (typeof ob[i] == 'object' || ob[i] instanceof Array) {
                var flatObject = cc11001100_hook("flatObject", flattenfortealiumcollect(ob[i]), "var-init");
                for (var x in flatObject) {
                  if (!flatObject.hasOwnProperty(x)) continue;
                  toReturn[i + '.' + x] = cc11001100_hook("toReturn[i + '.' + x]", flatObject[x], "assign");
                }
              } else {
                toReturn[i] = cc11001100_hook("toReturn[i]", ob[i], "assign");
              }
            }
            return toReturn;
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (b['cp.polling_request'] == '1' && b['cp.mlc_prelogin'] == '1' || b['dom.referrer'].toString().indexOf('cathaypacific.com') < 0) {
          u.enrichment_polling = cc11001100_hook("u.enrichment_polling", 5, "assign");
          u.enrichment_polling_delay = cc11001100_hook("u.enrichment_polling_delay", 5000, "assign");
          if (b['cp.mlc_prelogin'] == "1") {
            document.cookie = cc11001100_hook("document.cookie", 'polling_request=0;path=/;domain=cathaypacific.com;expires=0;', "assign");
          }
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
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
    }], "assign");
    u.send = cc11001100_hook("u.send", function (a, b) {
      var d, i;
      if (u.ev[a] || typeof u.ev["all"] !== "undefined") {
        if (a === "remote_api") {
          utag.DB("Remote API event suppressed.");
          return;
        }
        if (u.data_source) {
          b.tealium_datasource = cc11001100_hook("b.tealium_datasource", u.data_source, "assign");
        }
        u.make_enrichment_request = cc11001100_hook("u.make_enrichment_request", false, "assign");
        for (c = cc11001100_hook("c", 0, "assign"); c < u.extend.length; c++) {
          try {
            d = cc11001100_hook("d", u.extend[c](a, b), "assign");
            if (d == false) return;
          } catch (e) {}
        }
        ;
        if (!u.is_in_sample_group(b)) {
          return false;
        }
        u.get_performance_timing(b);
        for (i = cc11001100_hook("i", 0, "assign"); i < u.server_list.length; i++) {
          if (u.enrichment_enabled[i] !== false) {
            u.enrichment_enabled[u.server_list[i]] = cc11001100_hook("u.enrichment_enabled[u.server_list[i]]", true, "assign");
          }
        }
        if (u.server_list.length > 1) {
          u.profile_specific_vid = cc11001100_hook("u.profile_specific_vid", 1, "assign");
        }
        u.data = cc11001100_hook("u.data", utag.datacloud || {}, "assign");
        u.data["loader.cfg"] = cc11001100_hook("u.data[\"loader.cfg\"]", {}, "assign");
        for (d in utag.loader.GV(utag.loader.cfg)) {
          if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
            utag.loader.cfg[d].executed = cc11001100_hook("utag.loader.cfg[d].executed", 1, "assign");
          } else {
            utag.loader.cfg[d].executed = cc11001100_hook("utag.loader.cfg[d].executed", 0, "assign");
          }
          u.data["loader.cfg"][d] = cc11001100_hook("u.data[\"loader.cfg\"][d]", utag.loader.GV(utag.loader.cfg[d]), "assign");
        }
        u.data.data = cc11001100_hook("u.data.data", b, "assign");
        for (d in u.data.data) {
          if ((d + '').indexOf("qp.") === 0) {
            u.data.data[d] = cc11001100_hook("u.data.data[d]", encodeURIComponent(u.data.data[d]), "assign");
          } else if ((d + '').indexOf("va.") === 0) {
            delete u.data.data[d];
          }
        }
        if (!b["cp.utag_main_dc_event"]) {
          b["cp.utag_main_dc_visit"] = cc11001100_hook("b[\"cp.utag_main_dc_visit\"]", 1 + (b["cp.utag_main_dc_visit"] ? parseInt(b["cp.utag_main_dc_visit"]) : 0) + '', "assign");
        }
        b["cp.utag_main_dc_event"] = cc11001100_hook("b[\"cp.utag_main_dc_event\"]", 1 + (b["cp.utag_main_dc_event"] ? parseInt(b["cp.utag_main_dc_event"]) : 0) + '', "assign");
        utag.loader.SC("utag_main", {
          "dc_visit": cc11001100_hook("dc_visit", b["cp.utag_main_dc_visit"], "object-key-init"),
          "dc_event": cc11001100_hook("dc_event", b["cp.utag_main_dc_event"] + ";exp-session", "object-key-init")
        });
        utag.data["cp.utag_main_dc_visit"] = cc11001100_hook("utag.data[\"cp.utag_main_dc_visit\"]", b["cp.utag_main_dc_visit"], "assign");
        utag.data["cp.utag_main_dc_event"] = cc11001100_hook("utag.data[\"cp.utag_main_dc_event\"]", b["cp.utag_main_dc_event"], "assign");
        var dt = cc11001100_hook("dt", new Date(), "var-init");
        u.data.browser = cc11001100_hook("u.data.browser", {}, "assign");
        try {
          u.data.browser["height"] = cc11001100_hook("u.data.browser[\"height\"]", window.innerHeight || document.body.clientHeight, "assign");
          u.data.browser["width"] = cc11001100_hook("u.data.browser[\"width\"]", window.innerWidth || document.body.clientWidth, "assign");
          u.data.browser["screen_height"] = cc11001100_hook("u.data.browser[\"screen_height\"]", screen.height, "assign");
          u.data.browser["screen_width"] = cc11001100_hook("u.data.browser[\"screen_width\"]", screen.width, "assign");
          u.data.browser["timezone_offset"] = cc11001100_hook("u.data.browser[\"timezone_offset\"]", dt.getTimezoneOffset(), "assign");
        } catch (e) {
          utag.DB(e);
        }
        u.data["event"] = cc11001100_hook("u.data[\"event\"]", a + '', "assign");
        u.data["post_time"] = cc11001100_hook("u.data[\"post_time\"]", dt.getTime(), "assign");
        if (u.data_enrichment === "frequent" || u.data_enrichment === "infrequent") {
          u.visit_num = cc11001100_hook("u.visit_num", b["cp.utag_main_dc_visit"], "assign");
          if (parseInt(u.visit_num) > 1 && b["cp.utag_main_dc_event"] === "1") {
            u.enrichment_polling = cc11001100_hook("u.enrichment_polling", 2, "assign");
          }
          try {
            u.va_update = cc11001100_hook("u.va_update", parseInt(localStorage.getItem("tealium_va_update") || 0), "assign");
          } catch (e) {
            utag.DB(e);
          }
          u.visitor_id = cc11001100_hook("u.visitor_id", u.visitor_id || b.tealium_visitor_id || b['cp.utag_main_v_id'], "assign");
          if (u.data_enrichment === "frequent" || u.data_enrichment === "infrequent" && parseInt(u.visit_num) > 1 && parseInt(b["cp.utag_main_dc_event"]) <= 5 && u.visit_num !== u.va_update) {
            u.make_enrichment_request = cc11001100_hook("u.make_enrichment_request", true, "assign");
          }
          u.visitor_service_request = cc11001100_hook("u.visitor_service_request", function (t, server) {
            var s = cc11001100_hook("s", "https://" + u.server_prefix + "visitor-service" + (u.region ? "-" + u.region : "").replace(/[^-A-Za-z0-9+_.]/g, "") + "." + u.server_domain, "var-init");
            var p = cc11001100_hook("p", u.get_account_profile(server), "var-init");
            (function (p) {
              var prefix = cc11001100_hook("prefix", "tealium_va", "var-init");
              var key = cc11001100_hook("key", "_" + p[1] + "_" + p[2], "var-init");
              utag.ut["writeva" + p[2]] = cc11001100_hook("utag.ut[\"writeva\" + p[2]]", function (o) {
                utag.DB("Visitor Attributes: " + prefix + key);
                utag.DB(o);
                var str = cc11001100_hook("str", JSON.stringify(o), "var-init");
                if (str !== "{}" && str !== "") {
                  try {
                    localStorage.setItem('tealium_va_update', utag.data["cp.utag_main_dc_visit"]);
                    localStorage.setItem(prefix, str);
                    localStorage.setItem(prefix + key, str);
                  } catch (e) {
                    utag.DB(e);
                  }
                  if (typeof tealium_enrichment === "function") {
                    tealium_enrichment(o, prefix + key);
                  }
                }
              }, "assign");
            })(p.slice(0));
            var vid = cc11001100_hook("vid", u.visitor_id, "var-init");
            if (u.profile_specific_vid === 1) {
              vid += cc11001100_hook("vid", p[2], "assign");
            }
            utag.ut.loader({
              src: cc11001100_hook("src", s + "/" + p[1] + "/" + p[2] + "/" + vid.replace(/\?callback=.*/g, "") + "?callback=utag.ut%5B%22writeva" + p[2] + "%22%5D&rnd=" + t, "object-key-init")
            });
          }, "assign");
          u.do_enrichment = cc11001100_hook("u.do_enrichment", function (server, enrichment_polling, enrichment_polling_delay) {
            if (typeof utag.ut.loader != "undefined") {
              for (i = cc11001100_hook("i", 0, "assign"); i < enrichment_polling; i++) {
                setTimeout(function () {
                  u.visitor_service_request(new Date().getTime(), server);
                }, i * enrichment_polling_delay + 1);
              }
            }
          }, "assign");
        }
        var json_string;
        var regExpReplace = cc11001100_hook("regExpReplace", new RegExp(u.visitor_id, "g"), "var-init");
        if (window.FormData) {
          function postData(server_index, enrichment_polling, enrichment_polling_delay) {
            cc11001100_hook("server_index", server_index, "function-parameter");
            cc11001100_hook("enrichment_polling", enrichment_polling, "function-parameter");
            cc11001100_hook("enrichment_polling_delay", enrichment_polling_delay, "function-parameter");
            if (server_index + 1 > u.server_list.length) {
              return;
            }
            var xhr = cc11001100_hook("xhr", new XMLHttpRequest(), "var-init");
            var server = cc11001100_hook("server", u.server_list[server_index], "var-init");
            var formData = cc11001100_hook("formData", new FormData(), "var-init");
            xhr.addEventListener('readystatechange', function () {
              if (xhr.readyState === 3) {
                try {
                  u.region = cc11001100_hook("u.region", xhr.getResponseHeader("X-Region") || u.region || "", "assign");
                } catch (res_error) {
                  utag.DB(res_error);
                  u.region = cc11001100_hook("u.region", u.region || "", "assign");
                }
                if (u.region) utag.loader.SC("utag_main", {
                  "dc_region": cc11001100_hook("dc_region", u.region + ";exp-session", "object-key-init")
                });
                utag.DB("dc_region:" + u.region);
              } else if (xhr.readyState === 4) {
                postData(server_index + 1, enrichment_polling, enrichment_polling_delay);
                if (u.make_enrichment_request && u.enrichment_enabled[server]) u.do_enrichment(server, enrichment_polling, enrichment_polling_delay);
              }
            });
            xhr.open('post', u.server_list[server_index], true);
            xhr.withCredentials = cc11001100_hook("xhr.withCredentials", true, "assign");
            json_string = cc11001100_hook("json_string", JSON.stringify(u.data), "assign");
            if (u.profile_specific_vid === 1) {
              json_string = cc11001100_hook("json_string", json_string.replace(regExpReplace, u.visitor_id + u.get_account_profile(server)[2]), "assign");
            }
            formData.append("data", json_string);
            xhr.send(formData);
          }
          postData(0, u.enrichment_polling, u.enrichment_polling_delay);
        } else {
          for (i = cc11001100_hook("i", 0, "assign"); i < u.server_list.length; i++) {
            (function (i, enrichment_polling, enrichment_polling_delay) {
              var server = cc11001100_hook("server", u.server_list[i], "var-init");
              setTimeout(function () {
                json_string = cc11001100_hook("json_string", JSON.stringify(u.data), "assign");
                if (u.profile_specific_vid == 1) {
                  json_string = cc11001100_hook("json_string", json_string.replace(regExpReplace, u.visitor_id + u.get_account_profile(server)[2]), "assign");
                }
                var img = cc11001100_hook("img", new Image(), "var-init");
                img.src = cc11001100_hook("img.src", server + '?data=' + encodeURIComponent(json_string), "assign");
                if (u.make_enrichment_request && u.enrichment_enabled[server]) u.do_enrichment(server, enrichment_polling, enrichment_polling_delay);
              }, i * 700);
            })(i, u.enrichment_polling, u.enrichment_polling_delay);
          }
        }
      }
    }, "assign");
    try {
      utag.o[loader].loader.LOAD(id);
    } catch (e) {
      utag.loader.LOAD(id);
    }
  })('1', 'cx.web');
} catch (e) {
  utag.DB(e);
}