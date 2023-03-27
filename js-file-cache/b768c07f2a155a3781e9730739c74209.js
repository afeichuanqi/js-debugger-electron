//tealium universal tag - utag.638 ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
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
    u.extend = cc11001100_hook("u.extend", [], "assign");
    u.send = cc11001100_hook("u.send", function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        var c, d, e, f;
        u.data = cc11001100_hook("u.data", {
          "qsp_delim": cc11001100_hook("qsp_delim", "&", "object-key-init"),
          "kvp_delim": cc11001100_hook("kvp_delim", "=", "object-key-init"),
          "qs_delim": cc11001100_hook("qs_delim", "?", "object-key-init"),
          "tag_type": cc11001100_hook("tag_type", "script", "object-key-init"),
          "base_url": cc11001100_hook("base_url", "//www.securitytrfx.com/js/cx.js", "object-key-init"),
          "secure_base_url": cc11001100_hook("secure_base_url", "", "object-key-init"),
          "static_params": cc11001100_hook("static_params", "", "object-key-init"),
          "cachebust": cc11001100_hook("cachebust", "disabled", "object-key-init"),
          "cachevar": cc11001100_hook("cachevar", "" || "_rnd", "object-key-init")
        }, "assign");
        utag.DB("send:638:EXTENSIONS");
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
        u.data.url = cc11001100_hook("u.data.url", u.rp(u.data.url, b) + c.join(u.data.qsp_delim), "assign");
        u.data.url = cc11001100_hook("u.data.url", u.data.url.replace(/##kvp_delim##/g, u.data.kvp_delim), "assign");
        u.callback = cc11001100_hook("u.callback", u.callback || function () {}, "assign");
        u.loader({
          "type": cc11001100_hook("type", u.data.tag_type, "object-key-init"),
          "src": cc11001100_hook("src", u.data.url, "object-key-init"),
          "loc": cc11001100_hook("loc", "script", "object-key-init"),
          "id": cc11001100_hook("id", "utag_638", "object-key-init"),
          "cb": cc11001100_hook("cb", u.callback, "object-key-init")
        });
        utag.DB("send:638:COMPLETE");
      }
    }, "assign");
    utag.o[loader].loader.LOAD(id);
  })("638", "cx.web");
} catch (error) {
  utag.DB(error);
}