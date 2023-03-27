//tealium universal tag - utag.1168 ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
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
    u.map = cc11001100_hook("u.map", {}, "assign");
    u.extend = cc11001100_hook("u.extend", [], "assign");
    u.send = cc11001100_hook("u.send", function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:1168");
        utag.DB(b);
        var c, d, e, f, g;
        u.data = cc11001100_hook("u.data", {
          "qsp_delim": cc11001100_hook("qsp_delim", "&", "object-key-init"),
          "kvp_delim": cc11001100_hook("kvp_delim", "=", "object-key-init"),
          "base_url_req_ttdid": cc11001100_hook("base_url_req_ttdid", "//match.adsrvr.org/track/cmf/generic?", "object-key-init"),
          "base_url_get_ttdid": cc11001100_hook("base_url_get_ttdid", "//datacloud.tealiumiq.com/tealium_ttd/main/16/i.js?jsonp=utag.ut.tealium_pass_ttdid", "object-key-init"),
          "base_url_pass_ttdid": cc11001100_hook("base_url_pass_ttdid", "//datacloud.tealiumiq.com/vdata/i.gif?", "object-key-init"),
          "tealium_account": cc11001100_hook("tealium_account", "CX", "object-key-init"),
          "tealium_profile": cc11001100_hook("tealium_profile", "main", "object-key-init"),
          "ttd_pid": cc11001100_hook("ttd_pid", "tealium", "object-key-init"),
          "ttd_tpi": cc11001100_hook("ttd_tpi", "1", "object-key-init"),
          "gdpr": cc11001100_hook("gdpr", "0", "object-key-init"),
          "gdpr_consent": cc11001100_hook("gdpr_consent", "", "object-key-init"),
          "delay": cc11001100_hook("delay", 5000, "object-key-init"),
          "interval": cc11001100_hook("interval", 0, "object-key-init"),
          "sin": cc11001100_hook("sin", 4, "object-key-init"),
          "iab_v20_compliance": cc11001100_hook("iab_v20_compliance", true, "object-key-init")
        }, "assign");
        utag.DB("send:1168:EXTENSIONS");
        utag.DB(b);
        c = cc11001100_hook("c", [], "assign");
        g = cc11001100_hook("g", [], "assign");
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = cc11001100_hook("e", u.map[d].split(","), "assign");
            for (f = cc11001100_hook("f", 0, "assign"); f < e.length; f++) {
              u.data[e[f]] = cc11001100_hook("u.data[e[f]]", b[d], "assign");
            }
          }
        }
        utag.DB("send:1168:MAPPINGS");
        utag.DB(u.data);
        if (b["cp.utag_main_cms_1168"]) {
          utag.DB("Same session detected; duplicate The TradeDesk Cookie Matching Service call not sent.");
          return;
        }
        if (u.data.iab_v20_compliance === true || u.data.iab_v20_compliance === "true") {
          if (typeof __tcfapi === "function") {
            __tcfapi("getTCData", 2, function (tcData, success) {
              if (success) {
                u.data.tc_string += cc11001100_hook("u.data.tc_string", "gdpr=", "assign");
                if (tcData.gdprApplies === true) {
                  u.data.gdpr = cc11001100_hook("u.data.gdpr", "1", "assign");
                } else if (tcData.gdprApplies === false) {
                  u.data.gdpr = cc11001100_hook("u.data.gdpr", "0", "assign");
                } else {
                  u.data.gdpr = cc11001100_hook("u.data.gdpr", String(tcData.gdprApplies), "assign");
                }
                u.data.gdpr_consent = cc11001100_hook("u.data.gdpr_consent", tcData.tcString, "assign");
                execute_send();
              }
            });
          } else {
            var frame = cc11001100_hook("frame", window, "var-init");
            var cmpFrame;
            var cmpCallbacks = cc11001100_hook("cmpCallbacks", {}, "var-init");
            while (frame) {
              try {
                if (frame.frames["__tcfapiLocator"]) {
                  cmpFrame = cc11001100_hook("cmpFrame", frame, "assign");
                  break;
                }
              } catch (error) {
                utag.DB(error);
              }
              if (frame === window.top) {
                break;
              }
              frame = cc11001100_hook("frame", frame.parent, "assign");
            }
            if (!cmpFrame) {
              execute_send();
            } else {
              window.__tcfapi = cc11001100_hook("window.__tcfapi", function (cmd, version, callback, arg) {
                var callId = cc11001100_hook("callId", String(Math.random()), "var-init");
                var msg = cc11001100_hook("msg", {
                  __tcfapiCall: {
                    command: cc11001100_hook("command", cmd, "object-key-init"),
                    parameter: cc11001100_hook("parameter", arg, "object-key-init"),
                    version: cc11001100_hook("version", version, "object-key-init"),
                    callId: cc11001100_hook("callId", callId, "object-key-init")
                  }
                }, "var-init");
                cmpCallbacks[callId] = cc11001100_hook("cmpCallbacks[callId]", callback, "assign");
                cmpFrame.postMessage(msg, "*");
              }, "assign");
              window.tealiumiabPostMessageHandler = cc11001100_hook("window.tealiumiabPostMessageHandler", function (event) {
                var json = cc11001100_hook("json", {}, "var-init");
                try {
                  json = cc11001100_hook("json", typeof event.data === "string" ? JSON.parse(event.data) : event.data, "assign");
                } catch (error) {
                  utag.DB(error);
                }
                var payload = cc11001100_hook("payload", json.__tcfapiReturn, "var-init");
                if (payload) {
                  if (typeof cmpCallbacks[payload.callId] === "function") {
                    cmpCallbacks[payload.callId](payload.returnValue, payload.success);
                    cmpCallbacks[payload.callId] = cc11001100_hook("cmpCallbacks[payload.callId]", null, "assign");
                  }
                }
              }, "assign");
              window.addEventListener("message", tealiumiabPostMessageHandler, false);
              __tcfapi("getTCData", 2, function (tcData, success) {
                if (success) {
                  u.data.tc_string += cc11001100_hook("u.data.tc_string", "gdpr=", "assign");
                  if (tcData.gdprApplies === true) {
                    u.data.gdpr = cc11001100_hook("u.data.gdpr", "1", "assign");
                  } else if (tcData.gdprApplies === false) {
                    u.data.gdpr = cc11001100_hook("u.data.gdpr", "0", "assign");
                  } else {
                    u.data.gdpr = cc11001100_hook("u.data.gdpr", String(tcData.gdprApplies), "assign");
                  }
                  u.data.gdpr_consent = cc11001100_hook("u.data.gdpr_consent", tcData.tcString, "assign");
                  execute_send();
                }
              });
            }
          }
        } else {
          execute_send();
        }
        function execute_send() {
          u.data.tealium_account = cc11001100_hook("u.data.tealium_account", u.data.tealium_account || utag.cfg.utid.split("/")[0], "assign");
          u.data.tealium_profile = cc11001100_hook("u.data.tealium_profile", u.data.tealium_profile || utag.cfg.utid.split("/")[1], "assign");
          u.data.order_id = cc11001100_hook("u.data.order_id", u.data.order_id || b._corder || "", "assign");
          if (!b["cp.utag_main_ttd_uuid"] && !u.data.order_id) {
            c.push("ttd_pid" + u.data.kvp_delim + u.data.ttd_pid);
            c.push("ttd_tpi" + u.data.kvp_delim + u.data.ttd_tpi);
            c.push("gdpr" + u.data.kvp_delim + u.data.gdpr);
            if (u.data.gdpr === "1" && u.typeOf(u.data.gdpr_consent) === "string" && u.data.gdpr_consent !== "") {
              c.push("gdpr_consent" + u.data.kvp_delim + u.data.gdpr_consent);
            }
            u.loader({
              "type": cc11001100_hook("type", "img", "object-key-init"),
              "src": cc11001100_hook("src", u.data.base_url_req_ttdid + c.join(u.data.qsp_delim), "object-key-init")
            });
            utag.ut.tealium_pass_ttdid = cc11001100_hook("utag.ut.tealium_pass_ttdid", function (o) {
              try {
                var tl = cc11001100_hook("tl", o.tvt ? o.tvt.length : 0, "var-init");
                if (tl != 0) {
                  utag.loader.SC("utag_main", {
                    "ttd_uuid": cc11001100_hook("ttd_uuid", o.tvt[tl - 1].t1 + ";exp-session", "object-key-init")
                  });
                  g.push("gdpr" + u.data.kvp_delim + u.data.gdpr);
                  if (u.data.gdpr === "1" && u.typeOf(u.data.gdpr_consent) === "string" && u.data.gdpr_consent !== "") {
                    g.push("gdpr_consent" + u.data.kvp_delim + u.data.gdpr_consent);
                  }
                  g.push("ttd_uuid" + u.data.kvp_delim + o.tvt[tl - 1].t1);
                  g.push("tealium_vid" + u.data.kvp_delim + b["cp.utag_main_v_id"]);
                  g.push("tealium_account" + u.data.kvp_delim + u.data.tealium_account);
                  g.push("tealium_profile" + u.data.kvp_delim + u.data.tealium_profile);
                  g.push("tealium_cookie_sync" + u.data.kvp_delim + "true");
                  if (b.tealium_trace_id) {
                    g.push("tealium_trace_id" + u.data.kvp_delim + b.tealium_trace_id);
                  }
                  utag.loader.SC("utag_main", {
                    "cms_1168": cc11001100_hook("cms_1168", "1;exp-session", "object-key-init")
                  });
                  u.loader({
                    "type": cc11001100_hook("type", "img", "object-key-init"),
                    "src": cc11001100_hook("src", u.data.base_url_pass_ttdid + g.join(u.data.qsp_delim), "object-key-init")
                  });
                  clearInterval(u.polling_interval);
                }
              } catch (e) {
                utag.DB(e);
              }
            }, "assign");
            u.get_ttdid = cc11001100_hook("u.get_ttdid", function (interval, sin) {
              if (interval >= sin) {
                clearInterval(u.polling_interval);
              } else {
                u.loader({
                  "type": cc11001100_hook("type", "script", "object-key-init"),
                  "src": cc11001100_hook("src", u.data.base_url_get_ttdid, "object-key-init"),
                  "cb": cc11001100_hook("cb", null, "object-key-init"),
                  "loc": cc11001100_hook("loc", "script", "object-key-init"),
                  "id": cc11001100_hook("id", "utag_1168_get_ttdid", "object-key-init"),
                  "attrs": {}
                });
                u.data.interval++;
              }
            }, "assign");
            u.polling_interval = cc11001100_hook("u.polling_interval", setInterval(function () {
              u.get_ttdid(u.data.interval, u.data.sin);
            }, u.data.delay), "assign");
          }
          utag.DB("send:1168:COMPLETE");
        }
      }
    }, "assign");
    utag.o[loader].loader.LOAD(id);
  })("1168", "cx.web");
} catch (error) {
  utag.DB(error);
}