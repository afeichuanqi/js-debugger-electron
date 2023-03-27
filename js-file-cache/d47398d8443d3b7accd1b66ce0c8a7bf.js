//tealium universal tag - utag.1301 ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader, u) {
    try {
      u = cc11001100_hook("u", utag.o[loader].sender[id] = cc11001100_hook("utag.o[loader].sender[id]", {}, "assign"), "assign");
    } catch (e) {
      u = cc11001100_hook("u", utag.sender[id], "assign");
    }
    u.id = cc11001100_hook("u.id", id, "assign");
    u.ev = cc11001100_hook("u.ev", {
      "view": cc11001100_hook("view", 1, "object-key-init")
    }, "assign");
    u.map = cc11001100_hook("u.map", {
      "itinerary.cabin": cc11001100_hook("itinerary.cabin", "td1", "object-key-init"),
      "itinerary.trip_type": cc11001100_hook("itinerary.trip_type", "td2", "object-key-init"),
      "page.country": cc11001100_hook("page.country", "td3", "object-key-init"),
      "page.language": cc11001100_hook("page.language", "td4", "object-key-init"),
      "itinerary.origin.airport": cc11001100_hook("itinerary.origin.airport", "td5", "object-key-init"),
      "itinerary.destination.airport": cc11001100_hook("itinerary.destination.airport", "td6", "object-key-init"),
      "itinerary.pax.adult": cc11001100_hook("itinerary.pax.adult", "td7", "object-key-init"),
      "itinerary.pax.child": cc11001100_hook("itinerary.pax.child", "td8", "object-key-init"),
      "itinerary.outbound.date": cc11001100_hook("itinerary.outbound.date", "td9", "object-key-init")
    }, "assign");
    u.extend = cc11001100_hook("u.extend", [], "assign");
    u.send = cc11001100_hook("u.send", function (a, b, c, d, e, f) {
      if (u.ev[a] || typeof u.ev.all != "undefined") {
        utag.DB("send:1301");
        utag.DB(b);
        u.qsp_delim = cc11001100_hook("u.qsp_delim", "&", "assign");
        u.kvp_delim = cc11001100_hook("u.kvp_delim", "=", "assign");
        u.type = cc11001100_hook("u.type", "conv", "assign");
        u.adv = cc11001100_hook("u.adv", "s33el1i", "assign");
        u.ct = cc11001100_hook("u.ct", "tvacgkh", "assign");
        u.fmt = cc11001100_hook("u.fmt", "3", "assign");
        u.pid = cc11001100_hook("u.pid", "3enkjoa", "assign");
        u.coid = cc11001100_hook("u.coid", "", "assign");
        u.base_url = cc11001100_hook("u.base_url", "//insight.adsrvr.org", "assign");
        utag.DB("send:1301:EXTENSIONS");
        utag.DB(b);
        c = cc11001100_hook("c", [], "assign");
        for (d in utag.loader.GV(u.map)) {
          if (typeof b[d] !== "undefined" && b[d] !== "") {
            e = cc11001100_hook("e", u.map[d].split(","), "assign");
            for (f = cc11001100_hook("f", 0, "assign"); f < e.length; f++) {
              if (e[f] == "ct" || e[f] == "adv") {
                u[e[f]] = cc11001100_hook("u[e[f]]", b[d], "assign");
              } else {
                c.push(e[f] + u.kvp_delim + encodeURIComponent(b[d]));
              }
            }
          }
        }
        if (u.fmt === "") u.fmt = cc11001100_hook("u.fmt", "3", "assign");
        if (u.type === "iframe" && u.fmt === "3" || u.type !== "iframe" && u.fmt === "1") {
          utag.DB("Tag " + id + ": The fmt and tag types do not match (e.g., if fmt = 1, then type should be iframe). This may negatively affect tag functionality. Please ensure that the tag is correctly configured.");
        }
        if (u.type == "iframe") {
          u.base_url += cc11001100_hook("u.base_url", "/tags/" + u.adv + "/" + u.ct + "/iframe", "assign");
          d = cc11001100_hook("d", document.createElement("iframe"), "assign");
          d.setAttribute("id", "1301");
          d.setAttribute("height", "1");
          d.setAttribute("width", "1");
          d.setAttribute("style", "display:none");
          d.setAttribute("src", u.base_url);
          document.body.appendChild(d);
        } else {
          if (u.pid) {
            c.push("pid" + u.kvp_delim + u.pid);
          }
          if (u.ct.indexOf(":") < 0) {
            u.ct = cc11001100_hook("u.ct", "0:" + u.ct, "assign");
          }
          c.push("fmt" + u.kvp_delim + u.fmt);
          if (b._corder) {
            c.push("v" + u.kvp_delim + (b._csubtotal ? b._csubtotal : "1"));
            c.push("vf" + u.kvp_delim + b._ccurrency);
            c.push("orderId" + u.kvp_delim + b._corder);
          }
          if (u.coid) {
            c.push("coid" + u.kvp_delim + u.coid);
          }
          u.base_url += cc11001100_hook("u.base_url", "/track/" + u.type + "/?ct" + u.kvp_delim + u.ct + u.qsp_delim + "adv" + u.kvp_delim + u.adv + u.qsp_delim, "assign");
          if (u.fmt == "3") {
            u.img = cc11001100_hook("u.img", new Image(), "assign");
            u.img.src = cc11001100_hook("u.img.src", u.base_url + c.join(u.qsp_delim), "assign");
          } else {
            d = cc11001100_hook("d", document.createElement("iframe"), "assign");
            d.setAttribute("id", "1301");
            d.setAttribute("height", "1");
            d.setAttribute("width", "1");
            d.setAttribute("style", "display:none");
            d.setAttribute("src", u.base_url + c.join(u.qsp_delim));
            document.body.appendChild(d);
          }
        }
      }
      utag.DB("send:1301:COMPLETE");
    }, "assign");
    try {
      utag.o[loader].loader.LOAD(id);
    } catch (e) {
      utag.loader.LOAD(id);
    }
  })("1301", "cx.web");
} catch (error) {
  utag.DB(error);
}