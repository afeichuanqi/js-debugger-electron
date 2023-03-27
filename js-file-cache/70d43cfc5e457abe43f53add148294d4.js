//tealium universal tag - utag.1275 ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
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
    u.initialized = cc11001100_hook("u.initialized", false, "assign");
    u.scriptrequested = cc11001100_hook("u.scriptrequested", false, "assign");
    u.map = cc11001100_hook("u.map", {
      "page.country": cc11001100_hook("page.country", "td3", "object-key-init"),
      "page.language": cc11001100_hook("page.language", "td4", "object-key-init")
    }, "assign");
    u.extend = cc11001100_hook("u.extend", [], "assign");
    u.loader_cb = cc11001100_hook("u.loader_cb", function () {
      utag.DB("send:1275:CALLBACK");
      u.initialized = cc11001100_hook("u.initialized", true, "assign");
      if (typeof TTDUniversalPixelApi === 'function') {
        let attrs = cc11001100_hook("attrs", {}, "var-init");
        for (const [value, key] of Object.entries(u.map)) {
          if (u.data[key] !== 'undefined' && u.data[key] !== '') {
            if (key == 'v') {
              attrs[key] = cc11001100_hook("attrs[key]", parseFloat(u.data[key]), "assign");
            }
            if (Array.isArray(value)) {
              attrs[key] = cc11001100_hook("attrs[key]", u.data[key][0], "assign");
            } else {
              attrs[key] = cc11001100_hook("attrs[key]", u.data[key], "assign");
            }
          }
        }
        var universalPixelApi = cc11001100_hook("universalPixelApi", new TTDUniversalPixelApi(), "var-init");
        universalPixelApi.init(u.data.adv_id, [u.data.up_id], "https://insight.adsrvr.org/track/up", attrs, "ttdUniversalPixelTag" + u.data.pixel_tag_id);
      }
      utag.DB("send:1275:CALLBACK:COMPLETE");
    }, "assign");
    u.send = cc11001100_hook("u.send", function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:1275");
        utag.DB(b);
        var c, d, e, f;
        u.data = cc11001100_hook("u.data", {
          "qsp_delim": cc11001100_hook("qsp_delim", "&", "object-key-init"),
          "kvp_delim": cc11001100_hook("kvp_delim", "=", "object-key-init"),
          "base_url": cc11001100_hook("base_url", "//js.adsrvr.org/up_loader.1.1.0.js", "object-key-init"),
          "adv_id": cc11001100_hook("adv_id", "s33el1i", "object-key-init"),
          "up_id": cc11001100_hook("up_id", "yzvfgip", "object-key-init"),
          "pixel_tag_id": cc11001100_hook("pixel_tag_id", "", "object-key-init")
        }, "assign");
        utag.DB("send:1275:EXTENSIONS");
        utag.DB(b);
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = cc11001100_hook("e", u.map[d].split(","), "assign");
            for (f = cc11001100_hook("f", 0, "assign"); f < e.length; f++) {
              u.data[e[f]] = cc11001100_hook("u.data[e[f]]", b[d], "assign");
            }
          }
        }
        utag.DB("send:1275:MAPPINGS");
        utag.DB(u.data);
        if (!u.data.adv_id) {
          utag.DB(u.id + ": Tag not fired: Required attribute not populated");
          return;
        }
        if (u.initialized) {
          u.loader_cb();
        } else {
          if (!u.scriptrequested) {
            u.scriptrequested = cc11001100_hook("u.scriptrequested", true, "assign");
            var missing = cc11001100_hook("missing", !document.getElementById('ttdUniversalPixelTag' + u.data.pixel_tag_id), "var-init");
            if (missing) {
              var div = cc11001100_hook("div", document.createElement('div'), "var-init");
              div.setAttribute('id', 'ttdUniversalPixelTag' + u.data.pixel_tag_id);
              div.setAttribute('style', 'display: none;');
              document.getElementsByTagName('body')[0].appendChild(div);
            }
            u.loader({
              "type": cc11001100_hook("type", "script", "object-key-init"),
              "src": cc11001100_hook("src", u.data.base_url, "object-key-init"),
              "cb": cc11001100_hook("cb", u.loader_cb, "object-key-init"),
              "loc": cc11001100_hook("loc", "script", "object-key-init"),
              "id": cc11001100_hook("id", "utag_1275", "object-key-init"),
              "attrs": {}
            });
          }
        }
        utag.DB("send:1275:COMPLETE");
      }
    }, "assign");
    utag.o[loader].loader.LOAD(id);
  })("1275", "cx.web");
} catch (error) {
  utag.DB(error);
}