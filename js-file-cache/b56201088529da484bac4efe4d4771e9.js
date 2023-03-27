//tealium universal tag - utag.1266 ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
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
    if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 35) {
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
    u.ev = cc11001100_hook("u.ev", {
      "view": cc11001100_hook("view", 1, "object-key-init")
    }, "assign");
    u.initialized = cc11001100_hook("u.initialized", false, "assign");
    u.map = cc11001100_hook("u.map", {
      "itinerary.origin.city": cc11001100_hook("itinerary.origin.city", "U1", "object-key-init"),
      "itinerary.destination.city": cc11001100_hook("itinerary.destination.city", "U2", "object-key-init"),
      "itinerary.cabin": cc11001100_hook("itinerary.cabin", "U3", "object-key-init"),
      "itinerary.outbound.date": cc11001100_hook("itinerary.outbound.date", "U5", "object-key-init"),
      "itinerary.pax.adult": cc11001100_hook("itinerary.pax.adult", "U6", "object-key-init"),
      "itinerary.trip_type": cc11001100_hook("itinerary.trip_type", "U10", "object-key-init"),
      "itinerary.pax.child": cc11001100_hook("itinerary.pax.child", "U11", "object-key-init"),
      "itinerary.pax.infant": cc11001100_hook("itinerary.pax.infant", "U12", "object-key-init"),
      "page.country": cc11001100_hook("page.country", "U15", "object-key-init"),
      "page.language": cc11001100_hook("page.language", "U16", "object-key-init")
    }, "assign");
    u.extend = cc11001100_hook("u.extend", [], "assign");
    u.send = cc11001100_hook("u.send", function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:1266");
        utag.DB(b);
        var c, d, e, f;
        u.data = cc11001100_hook("u.data", {
          "qsp_delim": cc11001100_hook("qsp_delim", "&", "object-key-init"),
          "kvp_delim": cc11001100_hook("kvp_delim", "=", "object-key-init"),
          "base_url": cc11001100_hook("base_url", "//servedby.flashtalking.com", "object-key-init"),
          "tag_type": cc11001100_hook("tag_type", "iframe", "object-key-init"),
          "account": cc11001100_hook("account", "8036", "object-key-init"),
          "spot1": cc11001100_hook("spot1", "58419", "object-key-init"),
          "spot2": cc11001100_hook("spot2", "6221", "object-key-init"),
          "spotName": cc11001100_hook("spotName", "Booking_Engine_Step_1", "object-key-init"),
          "region": cc11001100_hook("region", "8", "object-key-init"),
          "ftRandom": cc11001100_hook("ftRandom", Math.random() * 1000000, "object-key-init"),
          "order_id": cc11001100_hook("order_id", "", "object-key-init"),
          "order_subtotal": cc11001100_hook("order_subtotal", "", "object-key-init"),
          "order_currency": cc11001100_hook("order_currency", "", "object-key-init"),
          "product_quantity": cc11001100_hook("product_quantity", [], "object-key-init")
        }, "assign");
        utag.DB("send:1266:EXTENSIONS");
        utag.DB(b);
        c = cc11001100_hook("c", [], "assign");
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = cc11001100_hook("e", u.map[d].split(","), "assign");
            for (f = cc11001100_hook("f", 0, "assign"); f < e.length; f++) {
              if (u.data.hasOwnProperty(e[f])) {
                u.data[e[f]] = cc11001100_hook("u.data[e[f]]", encodeURIComponent(b[d]), "assign");
              } else {
                c.push(e[f] + u.data.kvp_delim + encodeURIComponent(b[d]));
              }
            }
          }
        }
        utag.DB("send:1266:MAPPINGS");
        utag.DB(u.data);
        u.data.order_id = cc11001100_hook("u.data.order_id", u.data.order_id || b._corder || "", "assign");
        u.data.order_subtotal = cc11001100_hook("u.data.order_subtotal", u.data.order_subtotal || b._csubtotal || "", "assign");
        u.data.order_currency = cc11001100_hook("u.data.order_currency", u.data.order_currency || b._ccurrency || "", "assign");
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
          u.data.product_quantity = cc11001100_hook("u.data.product_quantity", b._cquan.slice(0), "assign");
        }
        if (!u.data.account) {
          utag.DB(u.id + ": Tag not fired: Required attribute not populated");
          return;
        }
        if (!u.data.ftXNumItems && u.data.product_quantity) {
          u.data.ftXNumItems = cc11001100_hook("u.data.ftXNumItems", 0, "assign");
          for (var i = cc11001100_hook("i", 0, "var-init"); i < u.data.product_quantity.length; i++) {
            u.data.ftXNumItems += cc11001100_hook("u.data.ftXNumItems", parseInt(u.data.product_quantity[i]), "assign");
          }
        }
        if (u.data.spotName) {
          c.push(["spotName", u.data.spotName].join(u.data.kvp_delim));
        }
        if (u.data.order_id) {
          c.push(["ftXRef", u.data.order_id].join(u.data.kvp_delim));
          if (u.data.order_subtotal) {
            c.push(["ftXValue", u.data.order_subtotal].join(u.data.kvp_delim));
          }
          if (u.data.ftXNumItems) {
            c.push(["ftXNumItems", u.data.ftXNumItems].join(u.data.kvp_delim));
          }
          if (u.data.order_currency) {
            c.push(["ftXCurrency", u.data.order_currency].join(u.data.kvp_delim));
          }
        }
        c.push(["cachebuster", u.data.ftRandom].join(u.data.kvp_delim));
        if (u.data.tag_type === "pixel") {
          var src = cc11001100_hook("src", u.data.base_url + "/spot/" + u.data.region + "/" + u.data.account + ";" + u.data.spot1 + ";" + u.data.spot2 + "/?", "var-init");
          u.loader({
            "type": cc11001100_hook("type", "img", "object-key-init"),
            "src": cc11001100_hook("src", src + c.join(u.data.qsp_delim), "object-key-init")
          });
        } else {
          if (!u.initialized) {
            var src = cc11001100_hook("src", u.data.base_url + "/container/" + u.data.account + ";" + u.data.spot1 + ";" + u.data.spot2 + ";iframe/?", "var-init");
            u.loader({
              "type": cc11001100_hook("type", "iframe", "object-key-init"),
              "src": cc11001100_hook("src", src + c.join(u.data.qsp_delim), "object-key-init"),
              "cb": function () {
                u.initialized = cc11001100_hook("u.initialized", true, "assign");
              },
              "loc": cc11001100_hook("loc", "body", "object-key-init"),
              "id": cc11001100_hook("id", "utag_1266", "object-key-init")
            });
          }
        }
        utag.DB("send:1266:COMPLETE");
      }
    }, "assign");
    utag.o[loader].loader.LOAD(id);
  })("1266", "cx.web");
} catch (error) {
  utag.DB(error);
}