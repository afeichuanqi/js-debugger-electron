//tealium universal tag - utag.1060 ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
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
    u.scriptrequested = cc11001100_hook("u.scriptrequested", false, "assign");
    u.map = cc11001100_hook("u.map", {
      "vendor.gb.uri": cc11001100_hook("vendor.gb.uri", "data_clsconfig", "object-key-init")
    }, "assign");
    u.extend = cc11001100_hook("u.extend", [function (a, b, c, d, e, f, g) {
      if (1) {
        d = cc11001100_hook("d", b['application.name'], "assign");
        if (typeof d == 'undefined') return;
        c = cc11001100_hook("c", [{
          'MMB': cc11001100_hook('MMB', 'reportURI=https://report.cathay.glassboxdigital.io/glassbox/reporting/8de41c63-597d-065a-c265-5dbf0cb3e592/cls_report; recordScrolls=true;recordMouseMoves=true;idleEventTimeInterval=-1;recordErrors=true', "object-key-init")
        }, {
          'RIBE': cc11001100_hook('RIBE', 'reportURI=https://report.cathay.glassboxdigital.io/glassbox/reporting/b86ad7cc-d2cd-5eae-849e-2cb94e73dfec/cls_report; recordScrolls=true;recordMouseMoves=true;idleEventTimeInterval=-1;recordErrors=true', "object-key-init")
        }, {
          'OLCI': cc11001100_hook('OLCI', 'reportURI=https://report.cathay.glassboxdigital.io/glassbox/reporting/8de41c63-597d-065a-c265-5dbf0cb3e592/cls_report; recordScrolls=true;recordMouseMoves=true;idleEventTimeInterval=-1;recordErrors=true', "object-key-init")
        }, {
          'VERA': cc11001100_hook('VERA', 'reportURI=https://report.cathay.glassboxdigital.io/glassbox/reporting/e422c441-d12e-7fdb-5d6d-0737e7f6a34e/cls_report; recordScrolls=true;recordMouseMoves=true;idleEventTimeInterval=-1;recordErrors=true', "object-key-init")
        }], "assign");
        var m = cc11001100_hook("m", false, "var-init");
        for (e = cc11001100_hook("e", 0, "assign"); e < c.length; e++) {
          for (f in utag.loader.GV(c[e])) {
            if (d == f) {
              b['vendor.gb.uri'] = cc11001100_hook("b['vendor.gb.uri']", c[e][f], "assign");
              m = cc11001100_hook("m", true, "assign");
            }
            ;
          }
          ;
          if (m) break;
        }
        ;
      }
    }], "assign");
    u.send = cc11001100_hook("u.send", function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:1060");
        utag.DB(b);
        var d,
          e,
          f,
          i,
          missing_params = cc11001100_hook("missing_params", [], "var-init"),
          required_params = cc11001100_hook("required_params", ["src_link", "data_clsconfig"], "var-init");
        u.data = cc11001100_hook("u.data", {
          "src_link": cc11001100_hook("src_link", "https://cdn.glassboxcdn.com/cathay/detector-dom.min.js", "object-key-init"),
          "data_clsconfig": cc11001100_hook("data_clsconfig", "", "object-key-init")
        }, "assign");
        for (c = cc11001100_hook("c", 0, "assign"); c < u.extend.length; c++) {
          try {
            d = cc11001100_hook("d", u.extend[c](a, b), "assign");
            if (d == false) return;
          } catch (e) {}
        }
        ;
        utag.DB("send:1060:EXTENSIONS");
        utag.DB(b);
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = cc11001100_hook("e", u.map[d].split(","), "assign");
            for (f = cc11001100_hook("f", 0, "assign"); f < e.length; f++) {
              if (u.data.hasOwnProperty(e[f])) {
                u.data[e[f]] = cc11001100_hook("u.data[e[f]]", b[d], "assign");
              }
            }
          }
        }
        utag.DB("send:1060:MAPPINGS");
        utag.DB(u.data);
        for (i = cc11001100_hook("i", 0, "assign"); i < required_params.length; i++) {
          if (!u.data[required_params[i]]) {
            missing_params.push(required_params[i]);
          }
        }
        if (missing_params.length > 0) {
          utag.DB(u.id + ": Tag not fired. Missing the following required parameters: " + missing_params.join(", "));
          return;
        }
        if (String(u.data.data_clsconfig).indexOf("reportURI") === -1) {
          utag.DB(u.id + ": Tag not fired: reportURI is missing in data-clsconfig.");
          return;
        }
        if (!u.scriptrequested) {
          u.scriptrequested = cc11001100_hook("u.scriptrequested", true, "assign");
          u.loader({
            "type": cc11001100_hook("type", "script", "object-key-init"),
            "src": cc11001100_hook("src", u.data.src_link, "object-key-init"),
            "cb": cc11001100_hook("cb", null, "object-key-init"),
            "loc": cc11001100_hook("loc", "script", "object-key-init"),
            "id": cc11001100_hook("id", "_cls_detector", "object-key-init"),
            "attrs": {
              "data-clsconfig": cc11001100_hook("data-clsconfig", u.data.data_clsconfig, "object-key-init")
            }
          });
        }
        utag.DB("send:1060:COMPLETE");
      }
    }, "assign");
    utag.o[loader].loader.LOAD(id);
  })("1060", "cx.web");
} catch (error) {
  utag.DB(error);
}