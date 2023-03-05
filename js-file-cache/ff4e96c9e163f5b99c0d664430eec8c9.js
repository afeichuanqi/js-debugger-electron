if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_7FgDZNH4J7eDid4P-8KZUA"\x3e');
(function () {
  var m = cc11001100_hook("m", document.createElement('meta'), "var-init");
  m.setAttribute('data-jc', '82');
  m.setAttribute('data-jc-version', 'r20230301');
  var ss = cc11001100_hook("ss", document.getElementsByTagName('script')[0], "var-init");
  if (ss && ss.parentNode) {
    ss.parentNode.insertBefore(m, ss);
  }
})();
(function () {
  /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */var h = cc11001100_hook("h", this || self, "var-init");
  function l(a, d, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a) for (var c = cc11001100_hook("c", 0, "var-init"); null != a && 500 > c && !b(a); ++c) a = cc11001100_hook("a", d(a), "assign");
  }
  function m(a, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    l(a, function (b) {
      try {
        return b === b.parent ? null : b.parent;
      } catch (c) {}
      return null;
    }, d);
  }
  function n(a, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if ("IFRAME" == a.tagName) d(a);else {
      a = cc11001100_hook("a", a.querySelectorAll("IFRAME"), "assign");
      for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length && !d(a[b]); ++b);
    }
  }
  function p(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", a.ownerDocument, "assign")) && (a.parentWindow || a.defaultView) || null;
  }
  function q(a, d, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    try {
      var c = cc11001100_hook("c", JSON.parse(b.data), "var-init");
    } catch (f) {}
    if ("object" === typeof c && c && "creativeLoad" === c.type) {
      var g = cc11001100_hook("g", p(a), "var-init");
      if (b.source && g) {
        var e;
        m(b.source, function (f) {
          try {
            if (f.parent === g) return e = cc11001100_hook("e", f, "assign"), !0;
          } catch (k) {}
        });
        e && n(a, function (f) {
          if (f.contentWindow === e) return d(c), !0;
        });
      }
    }
  }
  function r(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "string" === typeof a ? document.getElementById(a) : a;
  }
  ;
  var t;
  t = cc11001100_hook("t", void 0 === t ? window : t, "assign");
  t.clsn = cc11001100_hook("t.clsn", function (a, d) {
    var b = cc11001100_hook("b", r(a), "var-init");
    if (b) if (b.onCreativeLoad) b.onCreativeLoad(d);else {
      var c = cc11001100_hook("c", d ? [d] : [], "var-init"),
        g = function (e) {
          for (var f = cc11001100_hook("f", 0, "var-init"); f < c.length; ++f) try {
            c[f](1, e);
          } catch (k) {}
          c = cc11001100_hook("c", {
            push: function (k) {
              k(1, e);
            }
          }, "assign");
        };
      b.onCreativeLoad = cc11001100_hook("b.onCreativeLoad", function (e) {
        c.push(e);
      }, "assign");
      b.setAttribute("data-creative-load-listener", "");
      b.addEventListener("creativeLoad", function (e) {
        g(e.detail);
      });
      h.addEventListener("message", function (e) {
        q(b, g, e);
      });
    }
  }, "assign");
}).call(this);
clsn("gcc_7FgDZNH4J7eDid4P-8KZUA");
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CNGehJ3Bwv0CFbdBwgUde2EGCg\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjssVMRcQPAbURZNuWUu09VjO4-0DkVS7RjJto2RQKNfPOF5x8U5chZo38YtGSEYAgJyclKiyfvlA3PMSBSbPQQh5uOROi0mj1bbsWkKc90CGg6NdQNwfuGN4tuSnNpKaIN0MPxMnZoz28GEOoRrnkt0E21jJYRhxnwYgfkZ-QwQPBfjzeLMr_x94SQPzxH4SoD1f4AODm_Sypc3F6f43fqpuqq6caKSvPe56Uan9X0r37Ykvrx0FRj-NZXq3nFckl69LTgZ8JIS17BislKYhwLtcgJtOaNnLlfLztCe1QutsuG0N5BhYXbOJdIY7rkbI09GqTMAoYo-IeG_H2WJO4-dlhk7HpCpnAc0xKqmvD1jXdsS5yMltC9Y-gEN8Gss3qKymiYdivC_vGNDoL1SZ3z6xzxQ2rHaLuf3Jg36w-JHGBm8smzPN1NZx0fiCyEFVbBi_wU_0Eh2X-UPRUbDNilWAPltxWviQ73fDvVyr2h5jaNnImzNBsz5vlMB8fpwPlYeQwts1MJkHGzAfAVkr9JqMWsMnSyOtZUxrY35VTdhkXYjhYKuQb1YSC8wDnfCQXN4v-TIABYTjc5GVAv6wRkKsm4iCaveJMZ7YYbInmlAuU1vLHrp-kZaRptdhXbekUklPwkN-CKvnAYF5kI6muSNIyFXvIlZua_RAl52eWQLygFNVgpHlsuztibDXJBd8Bvx9YX5L2tlhiuRyGTuz3aItuqw9RrStok2cRf_V2vETcRbiIPlNCFHVHbDZ_XjMiMyeU6xSrcs1HINwUmX6aK24u1V_ImP9QmGnslh_yJk9aZayx1sJ-ku0vx0j8HmwttFqZIuuTZlThgBe9-92eeMdfqTBjb1uh4fe0zxfusDF5TBTXDOz5l1b_Cqdl-fcfrnACtQHTQpzWEVDos6RIKcBtXbLuSb-riXhK1lXC9Cet_Xna8Z-GBqSUobvfdwOvFDBwPnDQK9vSZPr48g0ZS6AXrGje3ygk_5xhaXDKP0JGTyVRUjchWmtYT1KKVS_Us7wYMji6zOgroeIHmffsgjC3ecNkoqiyLt8Zki2sdPA4b9XOTMjlCJp4I_1Y05osrOsmB3NwFf8A3D4xlZHg4YlCB2QiImiSGqHzondt1t0ACOMdpgLmNp2x7Ryh8BBCB3RoQvIebAZdDjictK-xPQJMjw04ZY3efMx0zdqBGGPfUrugl2vL3MqumcgviN4hqStCkhBIzvKX-lPnCVKpTbbboB3-bVUs9NlTf4--myI2x_bkkJuVYs\x26amp;sai\x3dAMfl-YToSEZI3DI-JtsAIl0RdKSk_ewjXjJICi9IlY0xC8q3XH9iCPEAKat9vcphgQbgKfUJCH4kyfGED3DSGlddszbmIkQDQWEwNnWlKLC_pa6JX8xje1UQhkVKvQ6czVEIvKPv8XAGP2PdUnv7YGFMyTa47VUP6NX0H93u0dmthsONE_20iF9YY_6Tex4lkBqh8jlqN4oAnbeSgolO0JOpXJIN9Ylh_q9cQawLnXmbWPzq9-ds6jTT35CUR6unXMosdXTRn00UsmqnB8Y\x26amp;sig\x3dCg0ArKJSzIYpxn62IIFS\x26amp;cry\x3d1\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://azure.microsoft.com/zh-cn/free/ai/search/%3FOCID%3DAIDcmmknmz9ars_OLA_29121201_354806012_183728956%26dclid%3D%25edclid!\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/5370261645626809611\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22300\x22 height\x3d\x22250\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230301\x22 data-jcp-a-id\x3d\x22img_anch_CNGehJ3Bwv0CFbdBwgUde2EGCg\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var aa\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},l;if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)l\x3dObject.setPrototypeOf;else{var n;a:{var ba\x3d{a:!0},p\x3d{};try{p.__proto__\x3dba;n\x3dp.a;break a}catch(a){}n\x3d!1}l\x3dn?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var q\x3dl,r\x3dthis||self;var t,u;a:{for(var v\x3d[\x22CLOSURE_FLAGS\x22],w\x3dr,x\x3d0;x\x3cv.length;x++)if(w\x3dw[v[x]],null\x3d\x3dw){u\x3dnull;break a}u\x3dw}var y\x3du\x26\x26u[610401301];t\x3dnull!\x3dy?y:!1;var z,A\x3dr.navigator;z\x3dA?A.userAgentData||null:null;function B(a){return t?z?z.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function C(a){var b;a:{if(b\x3dr.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function E(){return t?!!z\x26\x260\x3cz.brands.length:!1}function F(){return E()?B(\x22Chromium\x22):(C(\x22Chrome\x22)||C(\x22CriOS\x22))\x26\x26!(E()?0:C(\x22Edge\x22))||C(\x22Silk\x22)};var ca\x3dE()?!1:C(\x22Trident\x22)||C(\x22MSIE\x22);!C(\x22Android\x22)||F();F();C(\x22Safari\x22)\x26\x26(F()||(E()?0:C(\x22Coast\x22))||(E()?0:C(\x22Opera\x22))||(E()?0:C(\x22Edge\x22))||(E()?B(\x22Microsoft Edge\x22):C(\x22Edg/\x22))||E()\x26\x26B(\x22Opera\x22));var G\x3d{},H\x3dnull;var da\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,ea\x3d!ca\x26\x26\x22function\x22\x3d\x3d\x3dtypeof r.btoa;var I\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0;function J(a){var b;I?b\x3da[I]:b\x3da.h;return null\x3d\x3db?0:b}function K(a,b){I?a[I]\x3db:void 0!\x3d\x3da.h?a.h\x3db:Object.defineProperties(a,{h:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a};var L\x3d{};function M(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var N,O\x3dObject.freeze(K([],23));function P(a){var b\x3da.length;(b\x3db?a[b-1]:void 0)\x26\x26M(b)?b.g\x3d1:(b\x3d{},a.push((b.g\x3d1,b)))};function Q(a){var b\x3da.l+a.j;return a.i||(a.i\x3da.h[b]\x3d{})};var R;function S(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22object\x22:if(a)if(Array.isArray(a)){if(0!\x3d\x3d(J(a)\x26128))return a\x3dArray.prototype.slice.call(a),P(a),a}else if(da\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(ea){for(var b\x3d\x22\x22;10240\x3ca.length;)b+\x3dString.fromCharCode.apply(null,a.subarray(0,10240)),a\x3da.subarray(10240);b+\x3dString.fromCharCode.apply(null,a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!H){H\x3d{};for(var g\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22), f\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22],c\x3d0;5\x3ec;c++){var d\x3dg.concat(f[c].split(\x22\x22));G[c]\x3dd;for(var e\x3d0;e\x3cd.length;e++){var h\x3dd[e];void 0\x3d\x3d\x3dH[h]\x26\x26(H[h]\x3de)}}}b\x3dG[b];g\x3dArray(Math.floor(a.length/3));f\x3db[64]||\x22\x22;for(c\x3dd\x3d0;d\x3ca.length-2;d+\x3d3){var m\x3da[d],k\x3da[d+1];h\x3da[d+2];e\x3db[m\x3e\x3e2];m\x3db[(m\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];g[c++]\x3de+m+k+h}e\x3d0;h\x3df;switch(a.length-d){case 2:e\x3da[d+1],h\x3db[(e\x2615)\x3c\x3c2]||f;case 1:a\x3da[d],g[c]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|e\x3e\x3e4]+h+f}a\x3dg.join(\x22\x22)}return a}}return a};function fa(a,b,g,f){if(null!\x3da){if(Array.isArray(a))a\x3dha(a,b,g,void 0!\x3d\x3df);else if(M(a)){var c\x3d{},d;for(d in a)c[d]\x3dfa(a[d],b,g,f);a\x3dc}else a\x3db(a,f);return a}}function ha(a,b,g,f){var c\x3dJ(a);f\x3df?!!(c\x2616):void 0;a\x3dArray.prototype.slice.call(a);for(var d\x3d0;d\x3ca.length;d++)a[d]\x3dfa(a[d],b,g,f);g(c,a);return a}function ia(a){return a.o\x3d\x3d\x3dL?a.toJSON():S(a)}function ja(a,b){a\x26128\x26\x26P(b)};function T(a,b,g,f){null\x3d\x3da\x26\x26(a\x3dR);R\x3dvoid 0;var c\x3dthis.constructor.h;if(null\x3d\x3da){a\x3dc?[c]:[];var d\x3d48;var e\x3d!0;f\x26\x26(d|\x3d128);K(a,d)}else{if(!Array.isArray(a))throw Error();if(c\x26\x26c!\x3d\x3da[0])throw Error();e\x3da;I?e\x3de[I]|\x3d0:void 0!\x3d\x3de.h?e\x3de.h|\x3d0:(Object.defineProperties(e,{h:{value:0,configurable:!0,writable:!0,enumerable:!1}}),e\x3d0);var h\x3de|32;e\x3d0!\x3d\x3d(16\x26h);if(f){if(!(h\x26128)\x26\x260\x3ca.length){var m\x3da[a.length-1];if(M(m)\x26\x26\x22g\x22in m){h|\x3d128;delete m.g;var k\x3d!0;for(d in m){k\x3d!1;break}k\x26\x26a.pop()}else throw Error();}}else if(128\x26 h)throw Error();K(a,h)}this.j\x3dc?0:-1;this.h\x3da;a:{d\x3dthis.h.length;c\x3dd-1;if(d\x26\x26(d\x3dthis.h[c],M(d))){this.i\x3dd;this.l\x3dc-this.j;break a}void 0!\x3d\x3db\x26\x26-1\x3cb?(this.l\x3dMath.max(b,c+1-this.j),this.i\x3dvoid 0):this.l\x3dNumber.MAX_VALUE}if(!f\x26\x26this.i\x26\x26\x22g\x22in this.i)throw Error(\x27Unexpected \x22g\x22 flag in sparse object of message that is not a group type.\x27);if(g){b\x3de\x26\x26!0;f\x3dthis.l;var D;for(e\x3d0;e\x3cg.length;e++)c\x3dg[e],c\x3cf?(c+\x3dthis.j,(d\x3da[c])?ka(d,b):a[c]\x3dO):(D||(D\x3dQ(this)),(d\x3dD[c])?ka(d,b):D[c]\x3dO)}} T.prototype.toJSON\x3dfunction(){var a\x3dthis.h;return N?a:ha(a,ia,ja)};function ka(a,b){if(Array.isArray(a)){var g\x3dJ(a),f\x3d1;!b||g\x262||(f|\x3d16);(g\x26f)!\x3d\x3df\x26\x26K(a,g|f)}}T.prototype.o\x3dL;T.prototype.toString\x3dfunction(){return this.h.toString()};function la(a,b){return S(b)};function U(a){T.call(this,a)}U.prototype\x3daa(T.prototype);U.prototype.constructor\x3dU;if(q)q(U,T);else for(var V in T)if(\x22prototype\x22!\x3dV)if(Object.defineProperties){var ma\x3dObject.getOwnPropertyDescriptor(T,V);ma\x26\x26Object.defineProperty(U,V,ma)}else U[V]\x3dT[V];var na\x3d/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function oa(a,b,g,f){var c\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return c?c[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+g+\x22\x26dim\x3d\x22+f)+c[2]:a}function pa(a){var b\x3da.currentTarget,g\x3db.querySelector(\x22img[alt]\x22);g\x26\x26(a\x3doa(b.href,+Math.round(a.clientX-g.offsetLeft),+Math.round(a.clientY-g.offsetTop),+g.width+\x22x\x22+ +g.height),na.test(a)\x26\x26(b.href\x3da))} function qa(a){var b\x3dr;var g\x3db\x3dvoid 0\x3d\x3d\x3db?window:b;b\x3dnew U;if(J(b.h)\x262)throw Error();b.m\x26\x26(b.m\x3dvoid 0);1\x3e\x3db.l?Q(b)[1]\x3da:(b.h[1+b.j]\x3da,(a\x3db.i)\x26\x261 in a\x26\x26delete a[1]);var f;if(null!\x3dg\x26\x26null!\x3d(f\x3dg.fence)){a\x3df.reportEvent;a:{N\x3d!0;try{var c\x3dJSON.stringify(b.toJSON(),la);break a}finally{N\x3d!1}c\x3dvoid 0}a.call(f,{eventType:\x22click\x22,eventData:c,destination:[\x22buyer\x22]})}} function ra(a,b){void 0!\x3dr.AFMA_Communicator\x26\x26void 0!\x3dr.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),r.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var W,X\x3ddocument.currentScript;W\x3d(X\x3dvoid 0\x3d\x3d\x3dX?null:X)\x26\x26\x2274\x22\x3d\x3d\x3dX.getAttribute(\x22data-jc\x22)?X:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dW)throw Error(\x22JSC not found 74\x22);for(var sa\x3d{},Y\x3dW.attributes,Z\x3dY.length-1;0\x3c\x3dZ;Z--){var ta\x3dY[Z].name;0\x3d\x3d\x3dta.indexOf(\x22data-jcp-\x22)\x26\x26(sa[ta.substring(9)]\x3dY[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),g\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],f\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],c\x3da[\x22cc-overlay\x22],d\x3da[\x22cc-button\x22],e\x3dc?document.getElementById(c):null,h\x3dd?document.getElementById(d):null;if(\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22]){var m\x3da[\x22turtlex-event-ad-signals\x22];h?h.addEventListener(\x22click\x22,function(){qa(m)}):b.addEventListener(\x22click\x22,function(){qa(m)})}else if(b.addEventListener(\x22mousedown\x22,pa),e\x26\x26h\x26\x26e.addEventListener(\x22mousedown\x22,function(k){k\x3doa(h.href, +Math.round(k.clientX-e.offsetLeft),+Math.round(k.clientY-e.offsetTop),+e.clientWidth+\x22x\x22+ +e.clientHeight);na.test(k)\x26\x26(h.href\x3dk)}),g||f)b.addEventListener(\x22click\x22,function(k){ra(k,f)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){ra(k,f)})})(sa);}).call(this);\x3c/script\x3e');
document.write('\x3c/div\x3e');
document.write('\x3cscript\x3e(function () {function addIcon(){var container \x3d document.getElementsByClassName(\x22GoogleActiveViewClass\x22)[0];if (!container) {setTimeout(addIcon, 500);return;}var imgElem \x3d document.createElement(\x27img\x27);imgElem.src\x3d\x22https://static.googleadsserving.cn/pagead/images/cn/google_ad_cccccc_08.png\x22;imgElem.id \x3d \x22chinese_ad_label\x22;imgElem.style.position \x3d \x22absolute\x22;imgElem.style.left \x3d \x220px\x22;imgElem.style.bottom \x3d \x220px\x22;imgElem.style.zIndex \x3d \x222147483647\x22;container.appendChild(imgElem);}addIcon();})();\x3c/script\x3e');
document.write('\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:13px;right:0px;top:0px;position:absolute;width:41px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:inline-block;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgc{cursor:pointer;}.cbb{cursor:pointer;height:15px;width:15px;z-index:2147483646;background-color:#ffffff;opacity:0;}.cbb svg{position:absolute;top:0;right:0;height:15px;width:15px;stroke:#00aecd;fill:#00aecd;stroke-width:1.25;}.abgb{position:absolute;right:16px;top:0px;}.cbb{position:absolute;right:0px;top:0px;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:36px;}.abgc .il-icon{height:15px;width:22px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 24 16\x22\x3e\x3cpath d\x3d\x22M10.90 4.69L10.90 5.57L3.17 5.57L3.17 7.22L3.17 7.22Q3.17 9.15 3.06 10.11L3.06 10.11L3.06 10.11Q2.95 11.07 2.58 11.92L2.58 11.92L2.58 11.92Q2.21 12.77 1.27 13.56L1.27 13.56L0.59 12.93L0.59 12.93Q2.29 11.82 2.29 8.66L2.29 8.66L2.29 4.69L6.11 4.69L6.11 2.95L7.00 2.95L7.00 4.69L10.90 4.69ZM23.00 7.34L23.00 8.22L12.80 8.22L12.80 7.34L17.55 7.34L17.55 5.53L15.12 5.53L15.12 5.53Q14.55 6.53 13.86 7.07L13.86 7.07L13.10 6.46L13.10 6.46Q14.44 5.46 14.95 3.33L14.95 3.33L15.84 3.55L15.84 3.55Q15.77 3.86 15.49 4.65L15.49 4.65L17.55 4.65L17.55 2.84L18.47 2.84L18.47 4.65L21.86 4.65L21.86 5.53L18.47 5.53L18.47 7.34L23.00 7.34ZM21.45 8.88L21.45 13.63L20.53 13.63L20.53 12.78L15.32 12.78L15.32 13.63L14.41 13.63L14.41 8.88L21.45 8.88ZM15.32 11.90L20.53 11.90L20.53 9.76L15.32 9.76L15.32 11.90Z\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://adssettings.google.com/whythisad?source\x3ddisplay\x26amp;reasons\x3dAaX5wMtBw7XpkgRrIO6cQ5p5gOYPR1_GiclqIQ-1r-dlUnTl-CeJQ8JGeDonH6Tegxr2VEjMrGRiQKBk36hQMCbXp56Rt2Q73w3co0Nw-Z451qMde4YIlMA6q06YQy5JhIclZT0ZDjUhXjj6exrsKmOtWvyuRUwsQnY3_oM91gRLu4Xy6ugeLK_12XQv219S_Uivp906wYxyRJh8syPWOdBO4Ibth9uBMxcKJSuODjDSNnkWGrYO1SaD2TUIaXBpWQ9G4MisS2di55BPkvErkm9IRsKMt9kwsQ73diPUZhJhzcfFhiLVPcenxG9ELKPgLyMY50JS55iNxiG2MJO9M7O6dIfBLO-X8edh3ZhCftsOPvBjsyaCHiLya-UeZUL7-eEHAPZRkaHslPt_thTYAPG-HcRvkYy7sf_YhryCqQ5vzv3h1SfG5cVWcaH07HcwbbYrujr-Z6XV1W8M7ZIJY68l2pFfUPzPAg6J2YatphnDVEnMRRqMrXoqLBESvkXPyTBuoKOQvRShIB4J5-JaXKJTTFd0H_ta2XPro1NnPUalDEsxSwTJ9IOKOuoiiimlxNSsqbNOb5SZGF2K_j-rBn-klbbX5fwBtYmhH5Oroj4ecQzyzHq3VvIvB1Togw61Q_nb590jabQwr3uQc4ZljTxh5HA-2d-9st2zaWfvtKeQzvwG53zYd0GAkQpGrvFi6SZVhVizYWTqSI5bs5CZpAzgeSVp68JenBOao711wUEMVgd1WYeBLnnwpTziGAJB6Gk4veYWYPHQ4Fn9ACD-nJIFmsj9sC8U0fPYAOaIKJXOarA5lAEU96zC-OlKn4mr00K3NcGN8AA6PJ6DNCp8jVKLqQaxOYpj1wOC5raATlq6BSAlbqdC7X_fjuiebsOZyy4Mrm0qBHu0UL2EYIrJlMJ9Z23bwJFhytmhoLUp-fzFykAQDfwGg45Sf62ILdlu3LuPtSJP7h7-fKq24cQaqfL4Bol8StOhNRtglt1qh-1A1uoDJovSqFNYTdrGhd2tCoKuRWPpknZpuUlXsjWCBi7uQy98_Rl4WK7_AmQqYGSJFUT1k0TuhA8lmQx-2cLV5A88QT4KX01lJGb2kgkXeG9usfkLzH-84n54AWTX52OS73TWtE3WOXNkdo5Ce1l13DrLjTsvREH_dMdT50Vd4ZaVO9tnwaXeNo8ac8Y16Q81K_90Aykq1WfZ8PR0oUQoCcmGq6vmKMaV9hax0aB8CTi6A6P3ymeitGWbuYXeRJk9lI2VETomcSrP4HhihvJ4ah96Og7D1i6KEPjCRaj6EcEHa6BPOIPyPNx-mgpVHX23aH4ahm_tm5FMunt9dDdXQ4wdKUYmQdFQAfp14wrpkmssD-ErtKXm2uNh1_LfPjtXDExmHfbgvcL8ZrR5bLQMjUFOTULXxMYe8__lrYDBy3Jr0xJBR9F91-J03uvqUDw4cweq3kdmj6dUGPePvSReOFTK83dBu-eVKLAIwDfIhZY33b8hPdN_f-9ZE8qJ-k2g6KMlFmkqHxx7tnFOlKLCtArErffw-LEh5K63PVe5xEJ09sEa-Eck5g9nNJbA1xWBr90qHXgVNgGfS0-yI2GmYIruni2W1hfFiqMBwQAoMAt8z_RaNsbC13aeeWptEyHG0SqKrbPRnH2nrvrrSooBnwQ2Q_uyup5V7qPvZ9QZOJ8q3R3kvdQ\x22 target\x3d\x22_blank\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d\x22cbb\x22 class\x3d\x22cbb\x22 tabindex\x3d\x220\x22 role\x3d\x22button\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cstyle\x3e.mute_panel{z-index:2147483646;}.abgac{position:absolute;left:0px;top:0px;z-index:2147483646;display:none;width:100%;height:100%;background-color:#FAFAFA;}.mlsc{height:100%;display:flex;justify-content:center;align-items:center;}.mls{animation:mlskf 2s linear infinite;height:50%;width:50%;}.mlsd{stroke-dasharray:1,189;stroke-dashoffset:0;animation:mlsdkf 1.4s ease-in-out infinite;}@keyframes mlskf{100%{transform:rotate(360deg);}}@keyframes mlsdkf{0%{stroke-dasharray:1,189;stroke-dashoffset:0;}50%{stroke-dasharray:134,189;stroke-dashoffset:-53px;}100%{stroke-dasharray:134,189;stroke-dashoffset:-188px;}}\x3c/style\x3e\x3cdiv id\x3d\x22mute_panel\x22 class\x3d\x22mute_panel\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22abgac\x22 class\x3d\x22abgac\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22mlsc\x22 class\x3d\x22mlsc\x22\x3e\x3csvg class\x3d\x22mls\x22 viewBox\x3d\x2250 50 100 100\x22\x3e\x3ccircle class\x3d\x22mlsd\x22 cx\x3d\x22100\x22 cy\x3d\x22100\x22 r\x3d\x2230\x22 fill\x3d\x22none\x22 stroke\x3d\x22#9E9E9E\x22 stroke-width\x3d\x223\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://static.googleadsserving.cn/pagead/js/r20230301/r20110914/abg_lite.js\x22 data-jc-version\x3d\x22r20230301\x22 data-jcp-attribution-data\x3d\x22[[null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dCv9L661gDZInSL5LV8gXB-6agDunf8Y9utM_3r4QRyrqM8b4BEAEgmOKGkAFgnQGgAY68oPUCyAEJqQIIzn5fm3CDPqgDAcgDmwSqBIwCT9AXFoQVY7ltwyEghZZPX0A8iPTFzd6GJ1IsDPJB3N8rnIDjVK2Gy0WPBmGlgXZgQFAMzrwvOIqaPsyRv2sdzCBkTxxKol_MYP0Yu1IQ39QMi3nnxRiWAnW--Foocw5gjVaAvPxxyrW8fYoyzLy6YF5MCxemksFZ77pAbcV9BKMkMR3SW52aB9SKnrEx3uQ1phDtgF851Y6Th1YjaKdR-wG1EkuavhObWLPAIwCsg1HgZh3cI5WqjC3vHCgwTxnCQhMRLTvGj_OKhUBVTz6WPG-Ze4tnPG62y7Kq_ZPkjvg6PAxZVYD9RV2Wa3kLEJ4tsj_ArSUeQPv-eVY9fUWENivfHs2dejJ7WXh-AcAEzpf_mJEE4AQDkAYBoAZMgAfaw9-KAagHjs4bqAeT2BuoB-6WsQKoB_6esQKoB6SjsQKoB9XJG6gHpr4bqAeaBqgH89EbqAeW2BuoB6qbsQKoB_-esQKoB9-fsQLYBwDSCA8IgGEQARgfMgKKAjoCgECACgGYCwHICwGADAGwE4XNvhLQEwDYEw3YFAHQFQH4FgGAFwE\\u0026sigh\x3djqIWS9dmeKo\\u0026cid\x3dCAQSOwDUE5ym7ohwlb_PNBWLUJgkBJArm9kPlDq5SKd9APVQ2HnoWLfUbWMk-kUO6UGtvzSi2apOIeRjpzh_GAE\x26quot;,\x26quot;QLlwhxw-GX4ItM_3r4QRELbUkJ1IGL6h_YoBIhNhenVyZS5taWNyb3NvZnQuY29tMggIBRMYi7USFEIXY2EtcHViLTczNjQ2ODAyMDQ3NDI1MjRIBlgAcAE\x26quot;,[\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;\x26quot;,0],null,null,null,null,\x26quot;此广告有什么问题？\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/back_blue.png\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们将对此广告进行审核，以便改善您在今后的体验。\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们会根据您的反馈审核此网站上的广告。\x26quot;,null,null,null,\x26quot;即将关闭广告：%1$d 秒\x26quot;,\x26quot;谷歌广告\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/abg_blue.png\x26quot;,\x26quot;https://www.google.com/url?ct\x3dabg\\u0026q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://www.zhaojun.ink/archives/electron-renderer/%26gl%3DCN%26hl%3Dzh%26ai0%3D\\u0026usg\x3dAOvVaw0ldalfhwmJ_OPqbcviWHDH\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,0,[[\x26quot;停止显示此广告\x26quot;,[\x26quot;user_feedback_menu_option\x26quot;,\x26quot;1\x26quot;,1],[\x26quot;此广告有什么问题？\x26quot;,[[\x26quot;广告遮挡内容\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;3\x26quot;,1]],[\x26quot;对此广告不感兴趣\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;7\x26quot;,1]],[\x26quot;广告内容不当\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;8\x26quot;,1]],[\x26quot;多次看到此广告\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;2\x26quot;,1]]]],[\x26quot;user_feedback_undo\x26quot;,\x26quot;1\x26quot;,1]]],[\x26quot;https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png\x26quot;,\x26quot;广告选择\x26quot;,\x26quot;%1$s 已关闭此广告\x26quot;,null,\x26quot;https://www.gstatic.cn/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png\x26quot;,\x26quot;停止显示此广告\x26quot;,\x26quot;我们尽量不再显示该广告\x26quot;,null,null,null,null,null,null,\x26quot;查看我的 Google 广告设置\x26quot;,null,\x26quot;https://www.gstatic.cn\x26quot;,\x26quot;\x26quot;,\x26quot;%1$s 提供的广告\x26quot;,\x26quot;广告设置\x26quot;,\x26quot;https://adssettings.google.com\x26quot;,null,null,null,0,null,null,null,0],\x26quot;AB3afGEAAAVXW1tbW251bGwsWzIwXSxudWxsLG51bGwsbnVsbCxbIjgwMjgzIl1dLFtudWxsLCJodHRwczovL2dvb2dsZWFkcy5nLmRvdWJsZWNsaWNrLm5ldC9wYWdlYWQvaW50ZXJhY3Rpb24vP2FpPUN2OUw2NjFnRFpJblNMNUxWOGdYQi02YWdEdW5mOFk5dXRNXzNyNFFSeXJxTThiNEJFQUVnbU9LR2tBRmduUUdnQVk2OG9QVUN5QUVKcVFJSXpuNWZtM0NEUHFnREFjZ0Rtd1NxQkl3Q1Q5QVhGb1FWWTdsdHd5RWdoWlpQWDBBOGlQVEZ6ZDZHSjFJc0RQSkIzTjhybklEalZLMkd5MFdQQm1HbGdYWmdRRkFNenJ3dk9JcWFQc3lSdjJzZHpDQmtUeHhLb2xfTVlQMFl1MUlRMzlRTWkzbm54UmlXQW5XLS1Gb29jdzVnalZhQXZQeHh5clc4ZllveXpMeTZZRjVNQ3hlbWtzRlo3N3BBYmNWOUJLTWtNUjNTVzUyYUI5U0tuckV4M3VRMXBoRHRnRjg1MVk2VGgxWWphS2RSLXdHMUVrdWF2aE9iV0xQQUl3Q3NnMUhnWmgzY0k1V3FqQzN2SENnd1R4bkNRaE1STFR2R2pfT0toVUJWVHo2V1BHLVplNHRuUEc2Mnk3S3FfWlBranZnNlBBeFpWWUQ5UlYyV2Eza0xFSjR0c2pfQXJTVWVRUHYtZVZZOWZVV0VOaXZmSHMyZGVqSjdXWGgtQWNBRXpwZl9tSkVFNEFRRGtBWUJvQVpNZ0FmYXc5LUtBYWdIanM0YnFBZVQyQnVvQi02V3NRS29CXzZlc1FLb0I2U2pzUUtvQjlYSkc2Z0hwcjRicUFlYUJxZ0g4OUVicUFlVzJCdW9CNnFic1FLb0JfLWVzUUtvQjktZnNRTFlCd0RTQ0E4SWdHRVFBUmdmTWdLS0Fqb0NnRUNBQ2dHWUN3SElDd0dBREFHd0U0WE52aExRRXdEWUV3M1lGQUhRRlFINEZnR0FGd0VcdTAwMjZzaWdoPWpxSVdTOWRtZUtvXHUwMDI2Y2lkPUNBUVNPd0RVRTV5bTdvaHdsYl9QTkJXTFVKZ2tCSkFybTlrUGxEcTVTS2Q5QVBWUTJIbm9XTGZVYldNay1rVU82VUd0dnpTaTJhcE9JZVJqcHpoX0dBRSIsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Rpc3BsYXlhZHMtZm9ybWF0cy5nb29nbGV1c2VyY29udGVudC5jb20vYWRzL3ByZXZpZXcvY29udGVudC5qcz9jbGllbnQ9d3RhXHUwMDI2b2JmdXNjYXRlZEN1c3RvbWVySWQ9Njc2NzgyMzQzOFx1MDAyNmNyZWF0aXZlSWQ9NjQxNDUwMzgxMjc3XHUwMDI2dmVyc2lvbklkPTBcdTAwMjZhZEdyb3VwQ3JlYXRpdmVJZD01ODUyODk4MjAwODRcdTAwMjZodG1sUGFyZW50SWQ9cHJldi0wXHUwMDI2c2lnPUFDaVZCX3lZdmJvYUdlc1ljeE9GVm92N0diQUd0ZTZ4WHciXSxudWxsLG51bGwsMiwiUUxsd2h4dy1HWDRJdE1fM3I0UVJFTGJVa0oxSUdMNmhfWW9CSWhOaGVuVnlaUzV0YVdOeWIzTnZablF1WTI5dE1nZ0lCUk1ZaTdVU0ZFSVhZMkV0Y0hWaUxUY3pOalEyT0RBeU1EUTNOREkxTWpSSUJsZ0FjQUUiLCIxOTM4ODQ0MzE5MCJdXV0sW251bGwsbnVsbCwxLDEsMV0sW251bGwsbnVsbCwiQ04iXV2c3HO1vXFp6rpAIPtTOaudkkU0eBwyJmpOCyPxHGPXb7_jQYaraibOPYMWpzHHJY3xB6iN05rJuTKuMmI2NsaHJRES6G91H15Uo0qt2hn3oN1QBPfhFI0lNE63AQ1uIrnPp4AnCQ2mJJc_R3h9V8Pdd1eOmRHzO3XjFrWtZsjJoWd-Wie61oqvzsifkF5NX4u883ldw0wb1xiXNN3ojMnBM4HxM6bsjkagxWYmz_WoeC63l5_7MLjHC10P3oaMvdS7R7BQEn-2EGIOToXrPngGwFUKIoyfrYgBZ4Q4p6e2emZPuXCe99P8TctyxIok4-rN967ooLr8QW4NnkDIjb2B,qASmJnGsbcKxuXEcQmDy_Q\x26quot;,\x26quot;https://adssettings.google.com/whythisad?source\x3ddisplay\\u0026reasons\x3dAaX5wMtBw7XpkgRrIO6cQ5p5gOYPR1_GiclqIQ-1r-dlUnTl-CeJQ8JGeDonH6Tegxr2VEjMrGRiQKBk36hQMCbXp56Rt2Q73w3co0Nw-Z451qMde4YIlMA6q06YQy5JhIclZT0ZDjUhXjj6exrsKmOtWvyuRUwsQnY3_oM91gRLu4Xy6ugeLK_12XQv219S_Uivp906wYxyRJh8syPWOdBO4Ibth9uBMxcKJSuODjDSNnkWGrYO1SaD2TUIaXBpWQ9G4MisS2di55BPkvErkm9IRsKMt9kwsQ73diPUZhJhzcfFhiLVPcenxG9ELKPgLyMY50JS55iNxiG2MJO9M7O6dIfBLO-X8edh3ZhCftsOPvBjsyaCHiLya-UeZUL7-eEHAPZRkaHslPt_thTYAPG-HcRvkYy7sf_YhryCqQ5vzv3h1SfG5cVWcaH07HcwbbYrujr-Z6XV1W8M7ZIJY68l2pFfUPzPAg6J2YatphnDVEnMRRqMrXoqLBESvkXPyTBuoKOQvRShIB4J5-JaXKJTTFd0H_ta2XPro1NnPUalDEsxSwTJ9IOKOuoiiimlxNSsqbNOb5SZGF2K_j-rBn-klbbX5fwBtYmhH5Oroj4ecQzyzHq3VvIvB1Togw61Q_nb590jabQwr3uQc4ZljTxh5HA-2d-9st2zaWfvtKeQzvwG53zYd0GAkQpGrvFi6SZVhVizYWTqSI5bs5CZpAzgeSVp68JenBOao711wUEMVgd1WYeBLnnwpTziGAJB6Gk4veYWYPHQ4Fn9ACD-nJIFmsj9sC8U0fPYAOaIKJXOarA5lAEU96zC-OlKn4mr00K3NcGN8AA6PJ6DNCp8jVKLqQaxOYpj1wOC5raATlq6BSAlbqdC7X_fjuiebsOZyy4Mrm0qBHu0UL2EYIrJlMJ9Z23bwJFhytmhoLUp-fzFykAQDfwGg45Sf62ILdlu3LuPtSJP7h7-fKq24cQaqfL4Bol8StOhNRtglt1qh-1A1uoDJovSqFNYTdrGhd2tCoKuRWPpknZpuUlXsjWCBi7uQy98_Rl4WK7_AmQqYGSJFUT1k0TuhA8lmQx-2cLV5A88QT4KX01lJGb2kgkXeG9usfkLzH-84n54AWTX52OS73TWtE3WOXNkdo5Ce1l13DrLjTsvREH_dMdT50Vd4ZaVO9tnwaXeNo8ac8Y16Q81K_90Aykq1WfZ8PR0oUQoCcmGq6vmKMaV9hax0aB8CTi6A6P3ymeitGWbuYXeRJk9lI2VETomcSrP4HhihvJ4ah96Og7D1i6KEPjCRaj6EcEHa6BPOIPyPNx-mgpVHX23aH4ahm_tm5FMunt9dDdXQ4wdKUYmQdFQAfp14wrpkmssD-ErtKXm2uNh1_LfPjtXDExmHfbgvcL8ZrR5bLQMjUFOTULXxMYe8__lrYDBy3Jr0xJBR9F91-J03uvqUDw4cweq3kdmj6dUGPePvSReOFTK83dBu-eVKLAIwDfIhZY33b8hPdN_f-9ZE8qJ-k2g6KMlFmkqHxx7tnFOlKLCtArErffw-LEh5K63PVe5xEJ09sEa-Eck5g9nNJbA1xWBr90qHXgVNgGfS0-yI2GmYIruni2W1hfFiqMBwQAoMAt8z_RaNsbC13aeeWptEyHG0SqKrbPRnH2nrvrrSooBnwQ2Q_uyup5V7qPvZ9QZOJ8q3R3kvdQ\x26quot;,\x26quot;为什么显示此广告？\x26quot;,1,0],null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,1,0,null,[[\x26quot;jake_ui_extension\x26quot;,\x26quot;jake_default_ui\x26quot;]],250,300,0,null,null,0,null,null,\x26quot;right\x26quot;,0,0,\x26quot;r20230301/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');
if (!window.mraid) {
  document.write('\x3c/div\x3e');
}
(function () {
  (function () {
    var s = cc11001100_hook("s", document.createElement('script'), "var-init");
    s.setAttribute('data-jc', '86');
    s.src = cc11001100_hook("s.src", 'https://static.googleadsserving.cn/pagead/js/r20230301/r20110914/elements/html/omrhp.js', "assign");
    s.setAttribute('data-jc-version', 'r20230301');
    var ss = cc11001100_hook("ss", document.getElementsByTagName('script')[0], "var-init");
    if (ss && ss.parentNode) {
      ss.parentNode.insertBefore(s, ss);
    }
  })();
  window.dicnf = cc11001100_hook("window.dicnf", {
    eavp: cc11001100_hook("eavp", true, "object-key-init"),
    ebrp: cc11001100_hook("ebrp", true, "object-key-init"),
    apfa: cc11001100_hook("apfa", true, "object-key-init"),
    atsb: cc11001100_hook("atsb", true, "object-key-init"),
    bvst: cc11001100_hook("bvst", 'r20230301', "object-key-init"),
    eeid: cc11001100_hook("eeid", '7FgDZNH4J7eDid4P-8KZUA', "object-key-init"),
    aunb: cc11001100_hook("aunb", true, "object-key-init"),
    adsg: cc11001100_hook("adsg", '', "object-key-init"),
    uffp: cc11001100_hook("uffp", true, "object-key-init")
  }, "assign");
  (function () {
    /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */function da(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", 0, "var-init");
      return function () {
        return b < a.length ? {
          done: cc11001100_hook("done", !1, "object-key-init"),
          value: cc11001100_hook("value", a[b++], "object-key-init")
        } : {
          done: cc11001100_hook("done", !0, "object-key-init")
        };
      };
    }
    var ea = cc11001100_hook("ea", "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = cc11001100_hook("a[b]", c.value, "assign");
      return a;
    }, "var-init");
    function fa(a) {
      cc11001100_hook("a", a, "function-parameter");
      a = cc11001100_hook("a", ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], "assign");
      for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) {
        var c = cc11001100_hook("c", a[b], "var-init");
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    }
    var ha = cc11001100_hook("ha", fa(this), "var-init");
    function n(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      if (b) a: {
        var c = cc11001100_hook("c", ha, "var-init");
        a = cc11001100_hook("a", a.split("."), "assign");
        for (var d = cc11001100_hook("d", 0, "var-init"); d < a.length - 1; d++) {
          var e = cc11001100_hook("e", a[d], "var-init");
          if (!(e in c)) break a;
          c = cc11001100_hook("c", c[e], "assign");
        }
        a = cc11001100_hook("a", a[a.length - 1], "assign");
        d = cc11001100_hook("d", c[a], "assign");
        b = cc11001100_hook("b", b(d), "assign");
        b != d && null != b && ea(c, a, {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init"),
          value: cc11001100_hook("value", b, "object-key-init")
        });
      }
    }
    function ia(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator], "var-init");
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: cc11001100_hook("next", da(a), "object-key-init")
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    var ja = cc11001100_hook("ja", "function" == typeof Object.assign ? Object.assign : function (a, b) {
      for (var c = cc11001100_hook("c", 1, "var-init"); c < arguments.length; c++) {
        var d = cc11001100_hook("d", arguments[c], "var-init");
        if (d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = cc11001100_hook("a[e]", d[e], "assign"));
      }
      return a;
    }, "var-init");
    n("Object.assign", function (a) {
      return a || ja;
    });
    var ka = cc11001100_hook("ka", "function" == typeof Object.create ? Object.create : function (a) {
        function b() {}
        b.prototype = cc11001100_hook("b.prototype", a, "assign");
        return new b();
      }, "var-init"),
      la;
    if ("function" == typeof Object.setPrototypeOf) la = cc11001100_hook("la", Object.setPrototypeOf, "assign");else {
      var ma;
      a: {
        var na = cc11001100_hook("na", {
            a: cc11001100_hook("a", !0, "object-key-init")
          }, "var-init"),
          oa = cc11001100_hook("oa", {}, "var-init");
        try {
          oa.__proto__ = cc11001100_hook("oa.__proto__", na, "assign");
          ma = cc11001100_hook("ma", oa.a, "assign");
          break a;
        } catch (a) {}
        ma = cc11001100_hook("ma", !1, "assign");
      }
      la = cc11001100_hook("la", ma ? function (a, b) {
        a.__proto__ = cc11001100_hook("a.__proto__", b, "assign");
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      } : null, "assign");
    }
    var pa = cc11001100_hook("pa", la, "var-init");
    function u(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      a.prototype = cc11001100_hook("a.prototype", ka(b.prototype), "assign");
      a.prototype.constructor = cc11001100_hook("a.prototype.constructor", a, "assign");
      if (pa) pa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = cc11001100_hook("d", Object.getOwnPropertyDescriptor(b, c), "var-init");
        d && Object.defineProperty(a, c, d);
      } else a[c] = cc11001100_hook("a[c]", b[c], "assign");
      a.aa = cc11001100_hook("a.aa", b.prototype, "assign");
    }
    function qa() {
      for (var a = cc11001100_hook("a", Number(this), "var-init"), b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", a, "var-init"); c < arguments.length; c++) b[c - a] = cc11001100_hook("b[c - a]", arguments[c], "assign");
      return b;
    }
    n("globalThis", function (a) {
      return a || ha;
    });
    n("Object.is", function (a) {
      return a ? a : function (b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
      };
    });
    n("Array.prototype.includes", function (a) {
      return a ? a : function (b, c) {
        var d = cc11001100_hook("d", this, "var-init");
        d instanceof String && (d = cc11001100_hook("d", String(d), "assign"));
        var e = cc11001100_hook("e", d.length, "var-init");
        c = cc11001100_hook("c", c || 0, "assign");
        for (0 > c && (c = cc11001100_hook("c", Math.max(c + e, 0), "assign")); c < e; c++) {
          var f = cc11001100_hook("f", d[c], "var-init");
          if (f === b || Object.is(f, b)) return !0;
        }
        return !1;
      };
    });
    n("String.prototype.includes", function (a) {
      return a ? a : function (b, c) {
        if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
        return -1 !== this.indexOf(b, c || 0);
      };
    });
    var v = cc11001100_hook("v", this || self, "var-init");
    var ra, w;
    a: {
      for (var sa = cc11001100_hook("sa", ["CLOSURE_FLAGS"], "var-init"), x = cc11001100_hook("x", v, "var-init"), ta = cc11001100_hook("ta", 0, "var-init"); ta < sa.length; ta++) if (x = cc11001100_hook("x", x[sa[ta]], "assign"), null == x) {
        w = cc11001100_hook("w", null, "assign");
        break a;
      }
      w = cc11001100_hook("w", x, "assign");
    }
    var ua = cc11001100_hook("ua", w && w[610401301], "var-init");
    ra = cc11001100_hook("ra", null != ua ? ua : !1, "assign");
    var B,
      va = cc11001100_hook("va", v.navigator, "var-init");
    B = cc11001100_hook("B", va ? va.userAgentData || null : null, "assign");
    function wa(a) {
      cc11001100_hook("a", a, "function-parameter");
      return ra ? B ? B.brands.some(function (b) {
        return (b = cc11001100_hook("b", b.brand, "assign")) && -1 != b.indexOf(a);
      }) : !1 : !1;
    }
    function C(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b;
      a: {
        if (b = cc11001100_hook("b", v.navigator, "assign")) if (b = cc11001100_hook("b", b.userAgent, "assign")) break a;
        b = cc11001100_hook("b", "", "assign");
      }
      return -1 != b.indexOf(a);
    }
    ;
    function D() {
      return ra ? !!B && 0 < B.brands.length : !1;
    }
    function xa() {
      return D() ? wa("Chromium") : (C("Chrome") || C("CriOS")) && !(D() ? 0 : C("Edge")) || C("Silk");
    }
    ;
    var ya = cc11001100_hook("ya", Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      }, "var-init"),
      za = cc11001100_hook("za", Array.prototype.forEach ? function (a, b) {
        Array.prototype.forEach.call(a, b, void 0);
      } : function (a, b) {
        for (var c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < c; e++) e in d && b.call(void 0, d[e], e, a);
      }, "var-init");
    function Aa(a) {
      cc11001100_hook("a", a, "function-parameter");
      Aa[" "](a);
      return a;
    }
    Aa[" "] = cc11001100_hook("Aa[\" \"]", function () {}, "assign");
    var Ba = cc11001100_hook("Ba", D() ? !1 : C("Trident") || C("MSIE"), "var-init");
    !C("Android") || xa();
    xa();
    C("Safari") && (xa() || (D() ? 0 : C("Coast")) || (D() ? 0 : C("Opera")) || (D() ? 0 : C("Edge")) || (D() ? wa("Microsoft Edge") : C("Edg/")) || D() && wa("Opera"));
    var Ca = cc11001100_hook("Ca", {}, "var-init"),
      E = cc11001100_hook("E", null, "var-init");
    function Da(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      void 0 === b && (b = cc11001100_hook("b", 0, "assign"));
      if (!E) {
        E = cc11001100_hook("E", {}, "assign");
        for (var c = cc11001100_hook("c", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), d = cc11001100_hook("d", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), e = cc11001100_hook("e", 0, "var-init"); 5 > e; e++) {
          var f = cc11001100_hook("f", c.concat(d[e].split("")), "var-init");
          Ca[e] = cc11001100_hook("Ca[e]", f, "assign");
          for (var g = cc11001100_hook("g", 0, "var-init"); g < f.length; g++) {
            var k = cc11001100_hook("k", f[g], "var-init");
            void 0 === E[k] && (E[k] = cc11001100_hook("E[k]", g, "assign"));
          }
        }
      }
      b = cc11001100_hook("b", Ca[b], "assign");
      c = cc11001100_hook("c", Array(Math.floor(a.length / 3)), "assign");
      d = cc11001100_hook("d", b[64] || "", "assign");
      for (e = cc11001100_hook("e", f = cc11001100_hook("f", 0, "assign"), "assign"); f < a.length - 2; f += cc11001100_hook("f", 3, "assign")) {
        var h = cc11001100_hook("h", a[f], "var-init"),
          l = cc11001100_hook("l", a[f + 1], "var-init");
        k = cc11001100_hook("k", a[f + 2], "assign");
        g = cc11001100_hook("g", b[h >> 2], "assign");
        h = cc11001100_hook("h", b[(h & 3) << 4 | l >> 4], "assign");
        l = cc11001100_hook("l", b[(l & 15) << 2 | k >> 6], "assign");
        k = cc11001100_hook("k", b[k & 63], "assign");
        c[e++] = cc11001100_hook("c[e++]", g + h + l + k, "assign");
      }
      g = cc11001100_hook("g", 0, "assign");
      k = cc11001100_hook("k", d, "assign");
      switch (a.length - f) {
        case 2:
          g = cc11001100_hook("g", a[f + 1], "assign"), k = cc11001100_hook("k", b[(g & 15) << 2] || d, "assign");
        case 1:
          a = cc11001100_hook("a", a[f], "assign"), c[e] = cc11001100_hook("c[e]", b[a >> 2] + b[(a & 3) << 4 | g >> 4] + k + d, "assign");
      }
      return c.join("");
    }
    ;
    var Ea = cc11001100_hook("Ea", "undefined" !== typeof Uint8Array, "var-init"),
      Fa = cc11001100_hook("Fa", !Ba && "function" === typeof v.btoa, "var-init");
    var F = cc11001100_hook("F", "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0, "var-init");
    function Ga(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      if (F) return a[F] |= cc11001100_hook("a[F]", b, "assign");
      if (void 0 !== a.h) return a.h |= cc11001100_hook("a.h", b, "assign");
      Object.defineProperties(a, {
        h: {
          value: cc11001100_hook("value", b, "object-key-init"),
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
        }
      });
      return b;
    }
    function G(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b;
      F ? b = cc11001100_hook("b", a[F], "assign") : b = cc11001100_hook("b", a.h, "assign");
      return null == b ? 0 : b;
    }
    function H(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      F ? a[F] = cc11001100_hook("a[F]", b, "assign") : void 0 !== a.h ? a.h = cc11001100_hook("a.h", b, "assign") : Object.defineProperties(a, {
        h: {
          value: cc11001100_hook("value", b, "object-key-init"),
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
        }
      });
      return a;
    }
    ;
    var Ha = cc11001100_hook("Ha", {}, "var-init");
    function I(a) {
      cc11001100_hook("a", a, "function-parameter");
      return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
    }
    var Ia,
      Ja = cc11001100_hook("Ja", Object.freeze(H([], 23)), "var-init");
    function Ka(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", a.length, "var-init");
      (b = cc11001100_hook("b", b ? a[b - 1] : void 0, "assign")) && I(b) ? b.g = cc11001100_hook("b.g", 1, "assign") : (b = cc11001100_hook("b", {}, "assign"), a.push((b.g = cc11001100_hook("b.g", 1, "assign"), b)));
    }
    ;
    function La(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", a.l + a.i, "var-init");
      return a.h || (a.h = cc11001100_hook("a.h", a.o[b] = cc11001100_hook("a.o[b]", {}, "assign"), "assign"));
    }
    function J(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      if (G(a.o) & 2) throw Error();
      return Ma(a, b, c);
    }
    function Ma(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      a.m && (a.m = cc11001100_hook("a.m", void 0, "assign"));
      if (b >= a.l) return La(a)[b] = cc11001100_hook("La(a)[b]", c, "assign"), a;
      a.o[b + a.i] = cc11001100_hook("a.o[b + a.i]", c, "assign");
      (c = cc11001100_hook("c", a.h, "assign")) && b in c && delete c[b];
      return a;
    }
    ;
    var Na;
    function Oa(a) {
      cc11001100_hook("a", a, "function-parameter");
      switch (typeof a) {
        case "number":
          return isFinite(a) ? a : String(a);
        case "object":
          if (a) if (Array.isArray(a)) {
            if (0 !== (G(a) & 128)) return a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign"), Ka(a), a;
          } else if (Ea && null != a && a instanceof Uint8Array) {
            if (Fa) {
              for (var b = cc11001100_hook("b", "", "var-init"); 10240 < a.length;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(0, 10240)), "assign"), a = cc11001100_hook("a", a.subarray(10240), "assign");
              b += cc11001100_hook("b", String.fromCharCode.apply(null, a), "assign");
              a = cc11001100_hook("a", btoa(b), "assign");
            } else a = cc11001100_hook("a", Da(a), "assign");
            return a;
          }
      }
      return a;
    }
    ;
    function Pa(a, b, c, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      if (null != a) {
        if (Array.isArray(a)) a = cc11001100_hook("a", Qa(a, b, c, void 0 !== d), "assign");else if (I(a)) {
          var e = cc11001100_hook("e", {}, "var-init"),
            f;
          for (f in a) e[f] = cc11001100_hook("e[f]", Pa(a[f], b, c, d), "assign");
          a = cc11001100_hook("a", e, "assign");
        } else a = cc11001100_hook("a", b(a, d), "assign");
        return a;
      }
    }
    function Qa(a, b, c, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      var e = cc11001100_hook("e", G(a), "var-init");
      d = cc11001100_hook("d", d ? !!(e & 16) : void 0, "assign");
      a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
      for (var f = cc11001100_hook("f", 0, "var-init"); f < a.length; f++) a[f] = cc11001100_hook("a[f]", Pa(a[f], b, c, d), "assign");
      c(e, a);
      return a;
    }
    function Ra(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a.Z === Ha ? a.toJSON() : Oa(a);
    }
    function Sa(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      a & 128 && Ka(b);
    }
    ;
    function K(a, b, c, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      null == a && (a = cc11001100_hook("a", Na, "assign"));
      Na = cc11001100_hook("Na", void 0, "assign");
      var e = cc11001100_hook("e", this.constructor.h, "var-init");
      if (null == a) {
        a = cc11001100_hook("a", e ? [e] : [], "assign");
        var f = cc11001100_hook("f", 48, "var-init");
        var g = cc11001100_hook("g", !0, "var-init");
        d && (f |= cc11001100_hook("f", 128, "assign"));
        H(a, f);
      } else {
        if (!Array.isArray(a)) throw Error();
        if (e && e !== a[0]) throw Error();
        f = cc11001100_hook("f", Ga(a, 0) | 32, "assign");
        g = cc11001100_hook("g", 0 !== (16 & f), "assign");
        if (d) {
          if (!(f & 128) && 0 < a.length) {
            var k = cc11001100_hook("k", a[a.length - 1], "var-init");
            if (I(k) && "g" in k) {
              f |= cc11001100_hook("f", 128, "assign");
              delete k.g;
              var h = cc11001100_hook("h", !0, "var-init"),
                l;
              for (l in k) {
                h = cc11001100_hook("h", !1, "assign");
                break;
              }
              h && a.pop();
            } else throw Error();
          }
        } else if (128 & f) throw Error();
        H(a, f);
      }
      this.i = cc11001100_hook("this.i", e ? 0 : -1, "assign");
      this.j = cc11001100_hook("this.j", void 0, "assign");
      this.o = cc11001100_hook("this.o", a, "assign");
      a: {
        f = cc11001100_hook("f", this.o.length, "assign");
        e = cc11001100_hook("e", f - 1, "assign");
        if (f && (f = cc11001100_hook("f", this.o[e], "assign"), I(f))) {
          this.h = cc11001100_hook("this.h", f, "assign");
          this.l = cc11001100_hook("this.l", e - this.i, "assign");
          break a;
        }
        void 0 !== b && -1 < b ? (this.l = cc11001100_hook("this.l", Math.max(b, e + 1 - this.i), "assign"), this.h = cc11001100_hook("this.h", void 0, "assign")) : this.l = cc11001100_hook("this.l", Number.MAX_VALUE, "assign");
      }
      if (!d && this.h && "g" in this.h) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (c) {
        b = cc11001100_hook("b", g && !0, "assign");
        d = cc11001100_hook("d", this.l, "assign");
        var m;
        for (g = cc11001100_hook("g", 0, "assign"); g < c.length; g++) e = cc11001100_hook("e", c[g], "assign"), e < d ? (e += cc11001100_hook("e", this.i, "assign"), (f = cc11001100_hook("f", a[e], "assign")) ? Ta(f, b) : a[e] = cc11001100_hook("a[e]", Ja, "assign")) : (m || (m = cc11001100_hook("m", La(this), "assign")), (f = cc11001100_hook("f", m[e], "assign")) ? Ta(f, b) : m[e] = cc11001100_hook("m[e]", Ja, "assign"));
      }
    }
    K.prototype.toJSON = cc11001100_hook("K.prototype.toJSON", function () {
      var a = cc11001100_hook("a", this.o, "var-init");
      return Ia ? a : Qa(a, Ra, Sa);
    }, "assign");
    function Ua(a) {
      cc11001100_hook("a", a, "function-parameter");
      Ia = cc11001100_hook("Ia", !0, "assign");
      try {
        return JSON.stringify(a.toJSON(), Va);
      } finally {
        Ia = cc11001100_hook("Ia", !1, "assign");
      }
    }
    function Ta(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      if (Array.isArray(a)) {
        var c = cc11001100_hook("c", G(a), "var-init"),
          d = cc11001100_hook("d", 1, "var-init");
        !b || c & 2 || (d |= cc11001100_hook("d", 16, "assign"));
        (c & d) !== d && H(a, c | d);
      }
    }
    K.prototype.Z = cc11001100_hook("K.prototype.Z", Ha, "assign");
    K.prototype.toString = cc11001100_hook("K.prototype.toString", function () {
      return this.o.toString();
    }, "assign");
    function Va(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return Oa(b);
    }
    ;
    function Wa(a) {
      cc11001100_hook("a", a, "function-parameter");
      K.call(this, a);
    }
    u(Wa, K);
    function Xa(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      this.key = cc11001100_hook("this.key", a, "assign");
      this.defaultValue = cc11001100_hook("this.defaultValue", void 0 === b ? !1 : b, "assign");
      this.valueType = cc11001100_hook("this.valueType", "boolean", "assign");
    }
    ;
    var Ya = cc11001100_hook("Ya", new Xa("100000"), "var-init"),
      Za = cc11001100_hook("Za", new Xa("45357156", !0), "var-init"),
      $a = cc11001100_hook("$a", new Xa("45350890"), "var-init");
    var ab = cc11001100_hook("ab", ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="], "var-init");
    function bb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return "&adurl=" == a.substring(a.length - 7) ? a.substring(0, a.length - 7) + b + "&adurl=" : a + b;
    }
    ;
    function L(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a = cc11001100_hook("a", void 0 === a ? window : a, "assign");
    }
    ;
    var N = cc11001100_hook("N", v.dicnf || {}, "var-init");
    function cb(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", !1, "var-init"),
        c;
      return function () {
        b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
        return c;
      };
    }
    ;
    function O(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      a.addEventListener && a.addEventListener(b, c, !1);
    }
    function db(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }
    ;
    var eb = cc11001100_hook("eb", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init"),
      fb = cc11001100_hook("fb", /#|$/, "var-init");
    function gb(a) {
      cc11001100_hook("a", a, "function-parameter");
      try {
        var b;
        if (b = cc11001100_hook("b", !!a && null != a.location.href, "assign")) a: {
          try {
            Aa(a.foo);
            b = cc11001100_hook("b", !0, "assign");
            break a;
          } catch (c) {}
          b = cc11001100_hook("b", !1, "assign");
        }
        return b;
      } catch (c) {
        return !1;
      }
    }
    function hb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      b = cc11001100_hook("b", void 0 === b ? !1 : b, "assign");
      var c = cc11001100_hook("c", void 0 === c ? v : c, "var-init");
      for (var d = cc11001100_hook("d", 0, "var-init"); c && 40 > d++ && (!b && !gb(c) || !a(c));) a: {
        try {
          var e = cc11001100_hook("e", c.parent, "var-init");
          if (e && e != c) {
            c = cc11001100_hook("c", e, "assign");
            break a;
          }
        } catch (f) {}
        c = cc11001100_hook("c", null, "assign");
      }
    }
    function ib() {
      if (!globalThis.crypto) return Math.random();
      try {
        var a = cc11001100_hook("a", new Uint32Array(1), "var-init");
        globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    }
    function jb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    }
    var P = cc11001100_hook("P", [], "var-init");
    function kb() {
      var a = cc11001100_hook("a", P, "var-init");
      P = cc11001100_hook("P", [], "assign");
      a = cc11001100_hook("a", ia(a), "assign");
      for (var b = cc11001100_hook("b", a.next(), "var-init"); !b.done; b = cc11001100_hook("b", a.next(), "assign")) {
        b = cc11001100_hook("b", b.value, "assign");
        try {
          b();
        } catch (c) {}
      }
    }
    function lb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      "complete" === a.readyState || "interactive" === a.readyState ? (P.push(b), 1 == P.length && (window.Promise ? Promise.resolve().then(kb) : window.setImmediate ? setImmediate(kb) : setTimeout(kb, 0))) : a.addEventListener("DOMContentLoaded", b);
    }
    function Q(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      b = cc11001100_hook("b", void 0 === b ? document : b, "assign");
      return b.createElement(String(a).toLowerCase());
    }
    ;
    function R(a, b, c, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      mb(v, a, void 0 === b ? null : b, !1, void 0 === c ? !1 : c, void 0 === d ? !1 : d);
    }
    function mb(a, b, c, d, e, f) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");
      f = cc11001100_hook("f", void 0 === f ? !1 : f, "assign");
      a.google_image_requests || (a.google_image_requests = cc11001100_hook("a.google_image_requests", [], "assign"));
      var g = cc11001100_hook("g", Q("IMG", a.document), "var-init");
      if (c || e) {
        var k = function (h) {
          c && c(h);
          if (e) {
            h = cc11001100_hook("h", a.google_image_requests, "assign");
            var l = cc11001100_hook("l", ya(h, g), "var-init");
            0 <= l && Array.prototype.splice.call(h, l, 1);
          }
          db(g, "load", k);
          db(g, "error", k);
        };
        O(g, "load", k);
        O(g, "error", k);
      }
      d && (g.referrerPolicy = cc11001100_hook("g.referrerPolicy", "no-referrer", "assign"));
      f && (g.attributionSrc = cc11001100_hook("g.attributionSrc", "", "assign"));
      g.src = cc11001100_hook("g.src", b, "assign");
      a.google_image_requests.push(g);
    }
    var qb = cc11001100_hook("qb", cb(function () {
      return "referrerPolicy" in Q("IMG");
    }), "var-init");
    function rb() {
      this.h = cc11001100_hook("this.h", {}, "assign");
    }
    function sb(a) {
      cc11001100_hook("a", a, "function-parameter");
      tb || (tb = cc11001100_hook("tb", new ub(), "assign"));
      var b = cc11001100_hook("b", tb.h[a.key], "var-init");
      if ("proto" === a.valueType) {
        try {
          var c = cc11001100_hook("c", JSON.parse(b), "var-init");
          if (Array.isArray(c)) return c;
        } catch (d) {}
        return a.defaultValue;
      }
      return typeof b === typeof a.defaultValue ? b : a.defaultValue;
    }
    ;
    function ub() {
      this.h = cc11001100_hook("this.h", {}, "assign");
      var a = cc11001100_hook("a", document.currentScript, "var-init");
      a = cc11001100_hook("a", (a = cc11001100_hook("a", (a = cc11001100_hook("a", void 0 === a ? null : a, "assign")) && "0" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="0"]'), "assign")) && a.getAttribute("data-jc-flags") || "", "assign");
      try {
        var b = cc11001100_hook("b", JSON.parse(a)[0], "var-init");
        a = cc11001100_hook("a", "", "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) a += cc11001100_hook("a", String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10)), "assign");
        this.h = cc11001100_hook("this.h", JSON.parse(a), "assign");
      } catch (d) {}
    }
    var tb;
    u(ub, rb);
    function vb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", void 0 === c ? {} : c, "var-init");
      this.error = cc11001100_hook("this.error", a, "assign");
      this.context = cc11001100_hook("this.context", b.context, "assign");
      this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
      this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
      this.meta = cc11001100_hook("this.meta", c, "assign");
    }
    ;
    var wb = cc11001100_hook("wb", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");
    function xb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      this.h = cc11001100_hook("this.h", a, "assign");
      this.i = cc11001100_hook("this.i", b, "assign");
    }
    function yb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      this.url = cc11001100_hook("this.url", a, "assign");
      this.R = cc11001100_hook("this.R", !!b, "assign");
      this.depth = cc11001100_hook("this.depth", null, "assign");
    }
    ;
    function zb() {
      this.j = cc11001100_hook("this.j", "&", "assign");
      this.i = cc11001100_hook("this.i", {}, "assign");
      this.l = cc11001100_hook("this.l", 0, "assign");
      this.h = cc11001100_hook("this.h", [], "assign");
    }
    function S(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", {}, "var-init");
      c[a] = cc11001100_hook("c[a]", b, "assign");
      return [c];
    }
    function Ab(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var f = cc11001100_hook("f", [], "var-init");
      jb(a, function (g, k) {
        (g = cc11001100_hook("g", Bb(g, b, c, d, e), "assign")) && f.push(k + "=" + g);
      });
      return f.join(b);
    }
    function Bb(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      if (null == a) return "";
      b = cc11001100_hook("b", b || "&", "assign");
      c = cc11001100_hook("c", c || ",$", "assign");
      "string" == typeof c && (c = cc11001100_hook("c", c.split(""), "assign"));
      if (a instanceof Array) {
        if (d = cc11001100_hook("d", d || 0, "assign"), d < c.length) {
          for (var f = cc11001100_hook("f", [], "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) f.push(Bb(a[g], b, c, d + 1, e));
          return f.join(c[d]);
        }
      } else if ("object" == typeof a) return e = cc11001100_hook("e", e || 0, "assign"), 2 > e ? encodeURIComponent(Ab(a, b, c, d, e + 1)) : "...";
      return encodeURIComponent(String(a));
    }
    function Cb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
        d = cc11001100_hook("d", Db(a) - b.length, "var-init");
      if (0 > d) return "";
      a.h.sort(function (m, p) {
        return m - p;
      });
      b = cc11001100_hook("b", null, "assign");
      for (var e = cc11001100_hook("e", "", "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < a.h.length; f++) for (var g = cc11001100_hook("g", a.h[f], "var-init"), k = cc11001100_hook("k", a.i[g], "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < k.length; h++) {
        if (!d) {
          b = cc11001100_hook("b", null == b ? g : b, "assign");
          break;
        }
        var l = cc11001100_hook("l", Ab(k[h], a.j, ",$"), "var-init");
        if (l) {
          l = cc11001100_hook("l", e + l, "assign");
          if (d >= l.length) {
            d -= cc11001100_hook("d", l.length, "assign");
            c += cc11001100_hook("c", l, "assign");
            e = cc11001100_hook("e", a.j, "assign");
            break;
          }
          b = cc11001100_hook("b", null == b ? g : b, "assign");
        }
      }
      a = cc11001100_hook("a", "", "assign");
      null != b && (a = cc11001100_hook("a", e + "trn=" + b, "assign"));
      return c + a;
    }
    function Db(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", 1, "var-init"),
        c;
      for (c in a.i) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");
      return 3997 - b - a.j.length - 1;
    }
    ;
    function Eb() {
      this.h = cc11001100_hook("this.h", Math.random(), "assign");
    }
    function Fb() {
      var a = cc11001100_hook("a", T, "var-init"),
        b = cc11001100_hook("b", window.google_srt, "var-init");
      0 <= b && 1 >= b && (a.h = cc11001100_hook("a.h", b, "assign"));
    }
    function Gb(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      if (((void 0 === d ? 0 : d) ? a.h : Math.random()) < (e || .01)) try {
        if (c instanceof zb) var f = cc11001100_hook("f", c, "var-init");else f = cc11001100_hook("f", new zb(), "assign"), jb(c, function (k, h) {
          var l = cc11001100_hook("l", f, "var-init"),
            m = cc11001100_hook("m", l.l++, "var-init");
          k = cc11001100_hook("k", S(h, k), "assign");
          l.h.push(m);
          l.i[m] = cc11001100_hook("l.i[m]", k, "assign");
        });
        var g = cc11001100_hook("g", Cb(f, "/pagead/gen_204?id=" + b + "&"), "var-init");
        g && R(g);
      } catch (k) {}
    }
    ;
    var U = cc11001100_hook("U", null, "var-init");
    function Hb() {
      var a = cc11001100_hook("a", void 0 === a ? v : a, "var-init");
      return (a = cc11001100_hook("a", a.performance, "assign")) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
    }
    function Ib() {
      var a = cc11001100_hook("a", void 0 === a ? v : a, "var-init");
      return (a = cc11001100_hook("a", a.performance, "assign")) && a.now ? a.now() : null;
    }
    ;
    function Jb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", Ib() || Hb(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", c, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    }
    ;
    var V = cc11001100_hook("V", v.performance, "var-init"),
      Kb = cc11001100_hook("Kb", !!(V && V.mark && V.measure && V.clearMarks), "var-init"),
      W = cc11001100_hook("W", cb(function () {
        var a;
        if (a = cc11001100_hook("a", Kb, "assign")) {
          var b;
          if (null === U) {
            U = cc11001100_hook("U", "", "assign");
            try {
              a = cc11001100_hook("a", "", "assign");
              try {
                a = cc11001100_hook("a", v.top.location.hash, "assign");
              } catch (c) {
                a = cc11001100_hook("a", v.location.hash, "assign");
              }
              a && (U = cc11001100_hook("U", (b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "assign")) ? b[1] : "", "assign"));
            } catch (c) {}
          }
          b = cc11001100_hook("b", U, "assign");
          a = cc11001100_hook("a", !!b.indexOf && 0 <= b.indexOf("1337"), "assign");
        }
        return a;
      }), "var-init");
    function Lb() {
      var a = cc11001100_hook("a", window, "var-init");
      this.i = cc11001100_hook("this.i", [], "assign");
      this.j = cc11001100_hook("this.j", a || v, "assign");
      var b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.i = cc11001100_hook("this.i", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.h = cc11001100_hook("this.h", W() || (null != b ? b : 1 > Math.random()), "assign");
    }
    function Mb(a) {
      cc11001100_hook("a", a, "function-parameter");
      a && V && W() && (V.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), V.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
    }
    Lb.prototype.start = cc11001100_hook("Lb.prototype.start", function (a, b) {
      if (!this.h) return null;
      a = cc11001100_hook("a", new Jb(a, b), "assign");
      b = cc11001100_hook("b", "goog_" + a.label + "_" + a.uniqueId + "_start", "assign");
      V && W() && V.mark(b);
      return a;
    }, "assign");
    Lb.prototype.end = cc11001100_hook("Lb.prototype.end", function (a) {
      if (this.h && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (Ib() || Hb()) - a.value, "assign");
        var b = cc11001100_hook("b", "goog_" + a.label + "_" + a.uniqueId + "_end", "var-init");
        V && W() && V.mark(b);
        !this.h || 2048 < this.i.length || this.i.push(a);
      }
    }, "assign");
    function Nb() {
      var a = cc11001100_hook("a", Ob, "var-init");
      this.m = cc11001100_hook("this.m", T, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
      this.s = cc11001100_hook("this.s", this.l, "assign");
      this.h = cc11001100_hook("this.h", void 0 === a ? null : a, "assign");
      this.j = cc11001100_hook("this.j", !1, "assign");
    }
    function Pb(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", X, "var-init");
      try {
        if (b.h && b.h.h) {
          var c = cc11001100_hook("c", b.h.start(903 .toString(), 3), "var-init");
          var d = cc11001100_hook("d", a(), "var-init");
          b.h.end(c);
        } else d = cc11001100_hook("d", a(), "assign");
      } catch (g) {
        a = cc11001100_hook("a", !0, "assign");
        try {
          Mb(c), a = cc11001100_hook("a", b.s(903, new vb(g, {
            message: cc11001100_hook("message", Qb(g), "object-key-init")
          }), void 0, void 0), "assign");
        } catch (k) {
          b.l(217, k);
        }
        if (a) {
          var e, f;
          null == (e = cc11001100_hook("e", window.console, "assign")) || null == (f = cc11001100_hook("f", e.error, "assign")) || f.call(e, g);
        } else throw g;
      }
      return d;
    }
    function Rb(a) {
      cc11001100_hook("a", a, "function-parameter");
      return function () {
        var b = cc11001100_hook("b", qa.apply(0, arguments), "var-init");
        return Pb(function () {
          return a.apply(void 0, b);
        });
      };
    }
    Nb.prototype.l = cc11001100_hook("Nb.prototype.l", function (a, b, c, d, e) {
      e = cc11001100_hook("e", e || "jserror", "assign");
      try {
        var f = cc11001100_hook("f", new zb(), "var-init");
        f.h.push(1);
        f.i[1] = cc11001100_hook("f.i[1]", S("context", a), "assign");
        b.error && b.meta && b.id || (b = cc11001100_hook("b", new vb(b, {
          message: cc11001100_hook("message", Qb(b), "object-key-init")
        }), "assign"));
        if (b.msg) {
          var g = cc11001100_hook("g", b.msg.substring(0, 512), "var-init");
          f.h.push(2);
          f.i[2] = cc11001100_hook("f.i[2]", S("msg", g), "assign");
        }
        var k = cc11001100_hook("k", b.meta || {}, "var-init");
        if (this.i) try {
          this.i(k);
        } catch (aa) {}
        if (d) try {
          d(k);
        } catch (aa) {}
        b = cc11001100_hook("b", [k], "assign");
        f.h.push(3);
        f.i[3] = cc11001100_hook("f.i[3]", b, "assign");
        d = cc11001100_hook("d", v, "assign");
        b = cc11001100_hook("b", [], "assign");
        g = cc11001100_hook("g", null, "assign");
        do {
          var h = cc11001100_hook("h", d, "var-init");
          if (gb(h)) {
            var l = cc11001100_hook("l", h.location.href, "var-init");
            g = cc11001100_hook("g", h.document && h.document.referrer || null, "assign");
          } else l = cc11001100_hook("l", g, "assign"), g = cc11001100_hook("g", null, "assign");
          b.push(new yb(l || ""));
          try {
            d = cc11001100_hook("d", h.parent, "assign");
          } catch (aa) {
            d = cc11001100_hook("d", null, "assign");
          }
        } while (d && h != d);
        l = cc11001100_hook("l", 0, "assign");
        for (var m = cc11001100_hook("m", b.length - 1, "var-init"); l <= m; ++l) b[l].depth = cc11001100_hook("b[l].depth", m - l, "assign");
        h = cc11001100_hook("h", v, "assign");
        if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1) for (m = cc11001100_hook("m", 1, "assign"); m < b.length; ++m) {
          var p = cc11001100_hook("p", b[m], "var-init");
          p.url || (p.url = cc11001100_hook("p.url", h.location.ancestorOrigins[m - 1] || "", "assign"), p.R = cc11001100_hook("p.R", !0, "assign"));
        }
        var r = cc11001100_hook("r", new yb(v.location.href, !1), "var-init");
        h = cc11001100_hook("h", null, "assign");
        var z = cc11001100_hook("z", b.length - 1, "var-init");
        for (p = cc11001100_hook("p", z, "assign"); 0 <= p; --p) {
          var t = cc11001100_hook("t", b[p], "var-init");
          !h && wb.test(t.url) && (h = cc11001100_hook("h", t, "assign"));
          if (t.url && !t.R) {
            r = cc11001100_hook("r", t, "assign");
            break;
          }
        }
        t = cc11001100_hook("t", null, "assign");
        var q = cc11001100_hook("q", b.length && b[z].url, "var-init");
        0 != r.depth && q && (t = cc11001100_hook("t", b[z], "assign"));
        var y = cc11001100_hook("y", new xb(r, t), "var-init");
        if (y.i) {
          var ba = cc11001100_hook("ba", y.i.url || "", "var-init");
          f.h.push(4);
          f.i[4] = cc11001100_hook("f.i[4]", S("top", ba), "assign");
        }
        var A = cc11001100_hook("A", {
          url: cc11001100_hook("url", y.h.url || "", "object-key-init")
        }, "var-init");
        if (y.h.url) {
          var M = cc11001100_hook("M", y.h.url.match(eb), "var-init"),
            ca = cc11001100_hook("ca", M[1], "var-init"),
            nb = cc11001100_hook("nb", M[3], "var-init"),
            ob = cc11001100_hook("ob", M[4], "var-init");
          r = cc11001100_hook("r", "", "assign");
          ca && (r += cc11001100_hook("r", ca + ":", "assign"));
          nb && (r += cc11001100_hook("r", "//", "assign"), r += cc11001100_hook("r", nb, "assign"), ob && (r += cc11001100_hook("r", ":" + ob, "assign")));
          var pb = cc11001100_hook("pb", r, "var-init");
        } else pb = cc11001100_hook("pb", "", "assign");
        A = cc11001100_hook("A", [A, {
          url: cc11001100_hook("url", pb, "object-key-init")
        }], "assign");
        f.h.push(5);
        f.i[5] = cc11001100_hook("f.i[5]", A, "assign");
        Gb(this.m, e, f, this.j, c);
      } catch (aa) {
        try {
          Gb(this.m, e, {
            context: cc11001100_hook("context", "ecmserr", "object-key-init"),
            rctx: cc11001100_hook("rctx", a, "object-key-init"),
            msg: cc11001100_hook("msg", Qb(aa), "object-key-init"),
            url: cc11001100_hook("url", y && y.h.url, "object-key-init")
          }, this.j, c);
        } catch (Zc) {}
      }
      return !0;
    }, "assign");
    function Qb(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", a.toString(), "var-init");
      a.name && -1 == b.indexOf(a.name) && (b += cc11001100_hook("b", ": " + a.name, "assign"));
      a.message && -1 == b.indexOf(a.message) && (b += cc11001100_hook("b", ": " + a.message, "assign"));
      if (a.stack) {
        a = cc11001100_hook("a", a.stack, "assign");
        var c = cc11001100_hook("c", b, "var-init");
        try {
          -1 == a.indexOf(c) && (a = cc11001100_hook("a", c + "\n" + a, "assign"));
          for (var d; a != d;) d = cc11001100_hook("d", a, "assign"), a = cc11001100_hook("a", a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1"), "assign");
          b = cc11001100_hook("b", a.replace(RegExp("\n *", "g"), "\n"), "assign");
        } catch (e) {
          b = cc11001100_hook("b", c, "assign");
        }
      }
      return b;
    }
    ;
    function Sb(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", "L", "var-init");
      if (a.L && a.hasOwnProperty(b)) return a.L;
      b = cc11001100_hook("b", new a(), "assign");
      return a.L = cc11001100_hook("a.L", b, "assign");
    }
    ;
    function Tb() {}
    ;
    var T,
      X,
      Ob = cc11001100_hook("Ob", new Lb(), "var-init");
    function Ub() {
      if (!window.google_measure_js_timing) {
        var a = cc11001100_hook("a", Ob, "var-init");
        a.h = cc11001100_hook("a.h", !1, "assign");
        a.i != a.j.google_js_reporting_queue && (W() && za(a.i, Mb), a.i.length = cc11001100_hook("a.i.length", 0, "assign"));
      }
    }
    (function (a) {
      T = cc11001100_hook("T", null != a ? a : new Eb(), "assign");
      "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
      Fb();
      X = cc11001100_hook("X", new Nb(), "assign");
      X.i = cc11001100_hook("X.i", function () {}, "assign");
      X.j = cc11001100_hook("X.j", !0, "assign");
      "complete" == window.document.readyState ? Ub() : Ob.h && O(window, "load", function () {
        Ub();
      });
    })();
    var Vb = cc11001100_hook("Vb", ["FRAME", "IMG", "IFRAME"], "var-init"),
      Wb = cc11001100_hook("Wb", /^[01](px)?$/, "var-init");
    function Xb(a) {
      cc11001100_hook("a", a, "function-parameter");
      return "string" === typeof a ? document.getElementById(a) : a;
    }
    function Yb(a, b, c, d, e, f) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");
      c = cc11001100_hook("c", void 0 === c ? !0 : c, "assign");
      d = cc11001100_hook("d", void 0 === d ? !1 : d, "assign");
      f = cc11001100_hook("f", void 0 === f ? !1 : f, "assign");
      if (a = cc11001100_hook("a", Xb(a), "assign")) {
        e || (e = cc11001100_hook("e", function (A, M, ca) {
          A.addEventListener(M, ca);
        }, "assign"));
        for (var g = cc11001100_hook("g", !1, "var-init"), k = function (A) {
            g || (g = cc11001100_hook("g", !0, "assign"), b(A));
          }, h, l, m = cc11001100_hook("m", 0, "var-init"); m < Vb.length; ++m) if (Vb[m] == a.tagName) {
          l = cc11001100_hook("l", 3, "assign");
          h = cc11001100_hook("h", [a], "assign");
          break;
        }
        h || (h = cc11001100_hook("h", a.querySelectorAll(Vb.join(",")), "assign"), l = cc11001100_hook("l", 2, "assign"));
        var p = cc11001100_hook("p", 0, "var-init"),
          r = cc11001100_hook("r", 0, "var-init"),
          z = cc11001100_hook("z", a = cc11001100_hook("a", !1, "assign"), "var-init");
        m = cc11001100_hook("m", {}, "assign");
        for (var t = cc11001100_hook("t", 0, "var-init"); t < h.length; m = cc11001100_hook("m", {
          v: cc11001100_hook("v", m.v, "object-key-init")
        }, "assign"), t++) {
          var q = cc11001100_hook("q", h[t], "var-init");
          if (!("IMG" != q.tagName || !q.complete || q.naturalWidth && q.naturalHeight ? Wb.test(q.getAttribute("width")) && Wb.test(q.getAttribute("height")) : 1)) {
            if ("IMG" == q.tagName) var y = cc11001100_hook("y", q.naturalWidth && q.naturalHeight ? !0 : !1, "var-init");else try {
              y = cc11001100_hook("y", "complete" === (q.readyState ? q.readyState : q.contentWindow && q.contentWindow.document && q.contentWindow.document.readyState) ? !0 : !1, "assign");
            } catch (A) {
              y = cc11001100_hook("y", void 0 === d ? !1 : d, "assign");
            }
            if (y) a = cc11001100_hook("a", !0, "assign");else {
              p++;
              m.v = cc11001100_hook("m.v", "IMG" === q.tagName, "assign");
              var ba = cc11001100_hook("ba", function (A) {
                return function () {
                  p--;
                  p || k(l);
                  A.v && (r--, !r && z && k(l));
                };
              }(m), "var-init");
              e(q, "load", ba);
              m.v && (r++, e(q, "error", ba));
            }
          }
        }
        h = cc11001100_hook("h", null, "assign");
        if (0 === p && !a && "complete" === v.document.readyState) l = cc11001100_hook("l", 5, "assign");else if (p || !a) {
          e(v, "load", function () {
            f && r ? z = cc11001100_hook("z", !0, "assign") : k(4);
          });
          return;
        }
        c && k(l);
      }
    }
    ;
    function Zb(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      if (a) for (var d = cc11001100_hook("d", 0, "var-init"); null != a && 500 > d && !c(a); ++d) a = cc11001100_hook("a", b(a), "assign");
    }
    function $b(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      Zb(a, function (c) {
        try {
          return c === c.parent ? null : c.parent;
        } catch (d) {}
        return null;
      }, b);
    }
    function ac(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      if ("IFRAME" == a.tagName) b(a);else {
        a = cc11001100_hook("a", a.querySelectorAll("IFRAME"), "assign");
        for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length && !b(a[c]); ++c);
      }
    }
    function bc(a) {
      cc11001100_hook("a", a, "function-parameter");
      return (a = cc11001100_hook("a", a.ownerDocument, "assign")) && (a.parentWindow || a.defaultView) || null;
    }
    function cc(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      try {
        var d = cc11001100_hook("d", JSON.parse(c.data), "var-init");
      } catch (g) {}
      if ("object" === typeof d && d && "creativeLoad" === d.type) {
        var e = cc11001100_hook("e", bc(a), "var-init");
        if (c.source && e) {
          var f;
          $b(c.source, function (g) {
            try {
              if (g.parent === e) return f = cc11001100_hook("f", g, "assign"), !0;
            } catch (k) {}
          });
          f && ac(a, function (g) {
            if (g.contentWindow === f) return b(d), !0;
          });
        }
      }
    }
    function dc(a) {
      cc11001100_hook("a", a, "function-parameter");
      return "string" === typeof a ? document.getElementById(a) : a;
    }
    function ec(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", dc(a), "var-init");
      if (c) if (c.onCreativeLoad) c.onCreativeLoad(b);else {
        var d = cc11001100_hook("d", b ? [b] : [], "var-init"),
          e = function (f) {
            for (var g = cc11001100_hook("g", 0, "var-init"); g < d.length; ++g) try {
              d[g](1, f);
            } catch (k) {}
            d = cc11001100_hook("d", {
              push: function (k) {
                k(1, f);
              }
            }, "assign");
          };
        c.onCreativeLoad = cc11001100_hook("c.onCreativeLoad", function (f) {
          d.push(f);
        }, "assign");
        c.setAttribute("data-creative-load-listener", "");
        c.addEventListener("creativeLoad", function (f) {
          e(f.detail);
        });
        v.addEventListener("message", function (f) {
          cc(c, e, f);
        });
      }
    }
    ;
    function Y(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", this, "var-init");
      this.i = cc11001100_hook("this.i", !1, "assign");
      this.h = cc11001100_hook("this.h", [], "assign");
      a(function (c) {
        fc(b, c);
      });
    }
    function fc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      if (!a.i) if (b instanceof Y) b.then(function (c) {
        fc(a, c);
      });else {
        a.i = cc11001100_hook("a.i", !0, "assign");
        a.j = cc11001100_hook("a.j", b, "assign");
        for (b = cc11001100_hook("b", 0, "assign"); b < a.h.length; ++b) gc(a, a.h[b]);
        a.h = cc11001100_hook("a.h", [], "assign");
      }
    }
    function gc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      a.i ? b(a.j) : a.h.push(b);
    }
    Y.prototype.then = cc11001100_hook("Y.prototype.then", function (a) {
      var b = cc11001100_hook("b", this, "var-init");
      return new Y(function (c) {
        gc(b, function (d) {
          c(a(d));
        });
      });
    }, "assign");
    function hc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", a.length, "var-init"),
        c = cc11001100_hook("c", 0, "var-init");
      return new Y(function (d) {
        if (0 == b) d([]);else for (var e = cc11001100_hook("e", [], "var-init"), f = cc11001100_hook("f", {
            u: cc11001100_hook("u", 0, "object-key-init")
          }, "var-init"); f.u < b; f = cc11001100_hook("f", {
          u: cc11001100_hook("u", f.u, "object-key-init")
        }, "assign"), ++f.u) a[f.u].then(function (g) {
          return function (k) {
            e[g.u] = cc11001100_hook("e[g.u]", k, "assign");
            ++c == b && d(e);
          };
        }(f));
      });
    }
    function ic() {
      var a,
        b = cc11001100_hook("b", new Y(function (c) {
          a = cc11001100_hook("a", c, "assign");
        }), "var-init");
      return new jc(b, a);
    }
    function jc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      this.promise = cc11001100_hook("this.promise", a, "assign");
      this.resolve = cc11001100_hook("this.resolve", b, "assign");
    }
    ;
    function kc(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a.prerendering ? 3 : {
        visible: cc11001100_hook("visible", 1, "object-key-init"),
        hidden: cc11001100_hook("hidden", 2, "object-key-init"),
        prerender: cc11001100_hook("prerender", 3, "object-key-init"),
        preview: cc11001100_hook("preview", 4, "object-key-init"),
        unloaded: cc11001100_hook("unloaded", 5, "object-key-init")
      }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0;
    }
    function lc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b;
      a.visibilityState ? b = cc11001100_hook("b", "visibilitychange", "assign") : a.mozVisibilityState ? b = cc11001100_hook("b", "mozvisibilitychange", "assign") : a.webkitVisibilityState && (b = cc11001100_hook("b", "webkitvisibilitychange", "assign"));
      return b;
    }
    ;
    function mc(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      function d(h) {
        cc11001100_hook("h", h, "function-parameter");
        try {
          var l = cc11001100_hook("l", "object" === typeof h.data ? h.data : JSON.parse(h.data), "var-init");
          g === l.paw_id && (window.clearTimeout(k), window.removeEventListener("message", d), l.signal ? b(l.signal) : l.error && c(l.error));
        } catch (m) {
          h = cc11001100_hook("h", {
            msg: cc11001100_hook("msg", "postmessageError", "object-key-init"),
            err: cc11001100_hook("err", m instanceof Error ? m.message : "nonError", "object-key-init"),
            data: cc11001100_hook("data", null == h.data ? "null" : 500 < h.data.length ? h.data.substring(0, 500) : h.data, "object-key-init")
          }, "assign"), Sb(Tb), l = cc11001100_hook("l", [], "assign"), !h.eid && l.length && (h.eid = cc11001100_hook("h.eid", l.toString(), "assign")), Gb(T, "paw_sigs", h, !0);
        }
      }
      var e = cc11001100_hook("e", {}, "var-init"),
        f = cc11001100_hook("f", 200, "var-init");
      e = cc11001100_hook("e", void 0 === e ? {} : e, "assign");
      b = cc11001100_hook("b", void 0 === b ? function () {} : b, "assign");
      c = cc11001100_hook("c", void 0 === c ? function () {} : c, "assign");
      f = cc11001100_hook("f", void 0 === f ? 200 : f, "assign");
      var g = cc11001100_hook("g", String(Math.floor(2147483647 * ib())), "var-init"),
        k = cc11001100_hook("k", 0, "var-init");
      window.addEventListener("message", function (h) {
        Rb(function () {
          d(h);
        })();
      });
      a.postMessage(Object.assign({}, {
        paw_id: cc11001100_hook("paw_id", g, "object-key-init")
      }, e));
      k = cc11001100_hook("k", window.setTimeout(function () {
        window.removeEventListener("message", d);
        c("PAW GMA postmessage timed out.");
      }, f), "assign");
    }
    function nc() {
      var a = cc11001100_hook("a", window, "var-init"),
        b,
        c;
      if (a.gmaSdk || (null == (b = cc11001100_hook("b", a.webkit, "assign")) ? 0 : null == (c = cc11001100_hook("c", b.messageHandlers, "assign")) ? 0 : c.getGmaViewSignals)) return a;
      try {
        var d = cc11001100_hook("d", window.parent, "var-init"),
          e,
          f;
        if (d.gmaSdk || (null == (e = cc11001100_hook("e", d.webkit, "assign")) ? 0 : null == (f = cc11001100_hook("f", e.messageHandlers, "assign")) ? 0 : f.getGmaViewSignals)) return d;
      } catch (g) {}
      return null;
    }
    ;
    function oc(a) {
      cc11001100_hook("a", a, "function-parameter");
      K.call(this, a);
    }
    u(oc, K);
    function pc(a) {
      cc11001100_hook("a", a, "function-parameter");
      K.call(this, a, -1, qc);
    }
    u(pc, K);
    function rc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return J(a, 2, b);
    }
    function sc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return J(a, 3, b);
    }
    function tc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return J(a, 4, b);
    }
    function uc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return J(a, 5, b);
    }
    function vc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return J(a, 9, b);
    }
    function wc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      if (G(a.o) & 2) throw Error();
      if (null == b) var c = cc11001100_hook("c", Ja, "var-init");else c = cc11001100_hook("c", [], "assign"), Ga(c, 1);
      var d = cc11001100_hook("d", c, "var-init");
      if (null != b) {
        c = cc11001100_hook("c", !!b.length, "assign");
        for (var e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) {
          var f = cc11001100_hook("f", b[e], "var-init");
          c = cc11001100_hook("c", c && !(G(f.o) & 2), "assign");
          d[e] = cc11001100_hook("d[e]", f.o, "assign");
        }
        c = cc11001100_hook("c", (c ? 8 : 0) | 1, "assign");
        e = cc11001100_hook("e", G(d), "assign");
        (e & c) !== c && (Object.isFrozen(d) && (d = cc11001100_hook("d", Array.prototype.slice.call(d), "assign")), H(d, e | c));
        a.j || (a.j = cc11001100_hook("a.j", {}, "assign"));
        a.j[10] = cc11001100_hook("a.j[10]", b, "assign");
      } else a.j && (a.j[10] = cc11001100_hook("a.j[10]", void 0, "assign"));
      return Ma(a, 10, d);
    }
    function xc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return J(a, 11, b);
    }
    function yc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return J(a, 1, b);
    }
    function zc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return J(a, 7, b);
    }
    var qc = cc11001100_hook("qc", [10, 6], "var-init");
    var Ac = cc11001100_hook("Ac", "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" "), "var-init");
    function Bc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b;
      return null != (b = cc11001100_hook("b", a.google_tag_data, "assign")) ? b : a.google_tag_data = cc11001100_hook("a.google_tag_data", {}, "assign");
    }
    function Cc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b, c;
      return "function" === typeof (null == (b = cc11001100_hook("b", a.navigator, "assign")) ? void 0 : null == (c = cc11001100_hook("c", b.userAgentData, "assign")) ? void 0 : c.getHighEntropyValues);
    }
    function Dc(a) {
      cc11001100_hook("a", a, "function-parameter");
      if (!Cc(a)) return null;
      var b = cc11001100_hook("b", Bc(a), "var-init");
      if (b.uach_promise) return b.uach_promise;
      a = cc11001100_hook("a", a.navigator.userAgentData.getHighEntropyValues(Ac).then(function (c) {
        null != b.uach || (b.uach = cc11001100_hook("b.uach", c, "assign"));
        return c;
      }), "assign");
      return b.uach_promise = cc11001100_hook("b.uach_promise", a, "assign");
    }
    function Ec(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b;
      return xc(wc(uc(rc(yc(tc(zc(vc(sc(new pc(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = cc11001100_hook("b", a.fullVersionList, "assign")) ? void 0 : b.map(function (c) {
        var d = cc11001100_hook("d", new oc(), "var-init");
        d = cc11001100_hook("d", J(d, 1, c.brand), "assign");
        return J(d, 2, c.version);
      })) || []), a.wow64 || !1);
    }
    function Fc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b, c;
      return null != (c = cc11001100_hook("c", null == (b = cc11001100_hook("b", Dc(a), "assign")) ? void 0 : b.then(function (d) {
        return Ec(d);
      }), "assign")) ? c : null;
    }
    ;
    function Gc() {
      this.h = cc11001100_hook("this.h", v.document, "assign");
      this.s = cc11001100_hook("this.s", v, "assign");
      this.i = cc11001100_hook("this.i", null, "assign");
      this.j = cc11001100_hook("this.j", this.l = cc11001100_hook("this.l", "", "assign"), "assign");
      Hc(this);
    }
    function Hc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", [], "var-init"),
        c = cc11001100_hook("c", sb($a) || !!N.aub, "var-init");
      if (c || N.aunb) {
        var d = cc11001100_hook("d", Fc(a.s), "var-init");
        d && (d = cc11001100_hook("d", d.then(function (m) {
          m = cc11001100_hook("m", Ua(m), "assign");
          for (var p = cc11001100_hook("p", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"), z = cc11001100_hook("z", 0, "var-init"); z < m.length; z++) {
            var t = cc11001100_hook("t", m.charCodeAt(z), "var-init");
            255 < t && (p[r++] = cc11001100_hook("p[r++]", t & 255, "assign"), t >>= cc11001100_hook("t", 8, "assign"));
            p[r++] = cc11001100_hook("p[r++]", t, "assign");
          }
          m = cc11001100_hook("m", Da(p, 3), "assign");
          a.l = cc11001100_hook("a.l", m, "assign");
        }), "assign"), c && b.push(d));
      }
      if (sb(Za)) {
        c = cc11001100_hook("c", nc(), "assign");
        var e;
        if (null == c ? 0 : null == (e = cc11001100_hook("e", c.gmaSdk, "assign")) ? 0 : e.getViewSignals) {
          if (e = cc11001100_hook("e", c.gmaSdk.getViewSignals(), "assign")) a.j = cc11001100_hook("a.j", "&ms=" + e, "assign");
        } else {
          var f, g;
          if (null == c ? 0 : null == (f = cc11001100_hook("f", c.webkit, "assign")) ? 0 : null == (g = cc11001100_hook("g", f.messageHandlers, "assign")) ? 0 : g.getGmaViewSignals) {
            var k, h;
            mc(null == c ? void 0 : null == (k = cc11001100_hook("k", c.webkit, "assign")) ? void 0 : null == (h = cc11001100_hook("h", k.messageHandlers, "assign")) ? void 0 : h.getGmaViewSignals, function (m) {
              a.j = cc11001100_hook("a.j", "&" + m, "assign");
            }, function () {});
          }
        }
      }
      N.umi && (e = cc11001100_hook("e", new Y(function (m) {
        a.i = cc11001100_hook("a.i", m, "assign");
      }), "assign"), b.push(e));
      if (N.ebrpfa || sb(Ya)) {
        var l = cc11001100_hook("l", ic(), "var-init");
        b.push(l.promise);
        lb(a.h, function () {
          Yb(a.h.body, l.resolve);
        });
      }
      3 == kc(a.h) && 3 == kc(a.h) && b.push(Ic(a));
      a.m = cc11001100_hook("a.m", hc(b), "assign");
    }
    function Jc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", a.search(fb), "var-init");
      var c;
      b: {
        for (c = cc11001100_hook("c", 0, "assign"); 0 <= (c = cc11001100_hook("c", a.indexOf("ase", c), "assign")) && c < b;) {
          var d = cc11001100_hook("d", a.charCodeAt(c - 1), "var-init");
          if (38 == d || 63 == d) if (d = cc11001100_hook("d", a.charCodeAt(c + 3), "assign"), !d || 61 == d || 38 == d || 35 == d) break b;
          c += cc11001100_hook("c", 4, "assign");
        }
        c = cc11001100_hook("c", -1, "assign");
      }
      if (0 > c) b = cc11001100_hook("b", null, "assign");else {
        d = cc11001100_hook("d", a.indexOf("&", c), "assign");
        if (0 > d || d > b) d = cc11001100_hook("d", b, "assign");
        b = cc11001100_hook("b", decodeURIComponent(a.slice(c + 4, -1 !== d ? d : 0).replace(/\+/g, " ")), "assign");
      }
      if (b === 2 .toString()) {
        b = cc11001100_hook("b", !1, "assign");
        var e = cc11001100_hook("e", !0, "var-init");
        b = cc11001100_hook("b", void 0 === b ? !1 : b, "assign");
        e = cc11001100_hook("e", void 0 === e ? !1 : e, "assign");
        v.fetch ? (b = cc11001100_hook("b", {
          keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
          credentials: cc11001100_hook("credentials", "include", "object-key-init"),
          redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
          method: cc11001100_hook("method", "get", "object-key-init"),
          mode: cc11001100_hook("mode", "no-cors", "object-key-init")
        }, "assign"), e && (b.mode = cc11001100_hook("b.mode", "cors", "assign"), b.headers = cc11001100_hook("b.headers", {
          "Attribution-Reporting-Eligible": cc11001100_hook("Attribution-Reporting-Eligible", "event-source", "object-key-init")
        }, "assign")), v.fetch(a, b)) : R(a, void 0, b, e);
      } else if (N.atsb) {
        e = cc11001100_hook("e", void 0 === e ? !1 : e, "assign");
        if (b = cc11001100_hook("b", v.navigator, "assign")) b = cc11001100_hook("b", v.navigator.userAgent, "assign"), b = cc11001100_hook("b", /Chrome/.test(b) && !/Edge/.test(b) ? !0 : !1, "assign");
        b && v.navigator.sendBeacon ? v.navigator.sendBeacon(a) : R(a, void 0, e);
      } else R(a);
    }
    function Ic(a) {
      cc11001100_hook("a", a, "function-parameter");
      return new Y(function (b) {
        var c = cc11001100_hook("c", lc(a.h), "var-init");
        if (c) {
          var d = function () {
            3 != kc(a.h) && (db(a.h, c, d), b());
          };
          O(a.h, c, d);
        }
      });
    }
    ;
    function Z() {
      return new Date().getTime();
    }
    function Kc() {
      try {
        var a = cc11001100_hook("a", void 0 === a ? document : a, "var-init");
        var b;
        return !(null == (b = cc11001100_hook("b", a.featurePolicy, "assign")) || !b.features().includes("attribution-reporting"));
      } catch (c) {
        return !1;
      }
    }
    function Lc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      this.K = cc11001100_hook("this.K", a, "assign");
      this.A = cc11001100_hook("this.A", this.j = cc11001100_hook("this.j", this.h = cc11001100_hook("this.h", !1, "assign"), "assign"), "assign");
      this.O = cc11001100_hook("this.O", 1, "assign");
      this.m = cc11001100_hook("this.m", N.eavp ? 1 : 0, "assign");
      this.i = cc11001100_hook("this.i", N.ebrp ? 1 : 0, "assign");
      this.W = cc11001100_hook("this.W", !!N.opxb, "assign");
      this.G = cc11001100_hook("this.G", this.B = cc11001100_hook("this.B", null, "assign"), "assign");
      this.J = cc11001100_hook("this.J", ic(), "assign");
      this.N = cc11001100_hook("this.N", Z(), "assign");
      this.M = cc11001100_hook("this.M", null, "assign");
      this.T = cc11001100_hook("this.T", .001 > Math.random(), "assign");
      this.P = cc11001100_hook("this.P", N.eeid || "", "assign");
      this.F = cc11001100_hook("this.F", this.s = cc11001100_hook("this.s", null, "assign"), "assign");
      this.U = cc11001100_hook("this.U", (Math.random() + "").slice(-5), "assign");
      this.l = cc11001100_hook("this.l", !1, "assign");
      this.C = cc11001100_hook("this.C", null, "assign");
      this.D = cc11001100_hook("this.D", 0, "assign");
      this.H = cc11001100_hook("this.H", this.I = cc11001100_hook("this.I", null, "assign"), "assign");
      this.V = cc11001100_hook("this.V", !!N.fld, "assign");
      this.S = cc11001100_hook("this.S", N.adsg || "", "assign");
      this.Y = cc11001100_hook("this.Y", !!N.uffp, "assign");
      this.X = cc11001100_hook("this.X", !!N.espa, "assign");
      Mc(this, b);
    }
    var Nc;
    function Oc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      b && 0 !== a.i && (a.F = cc11001100_hook("a.F", Z() - a.N, "assign"), Pc(a, b).then(function (c) {
        c && (a.B = cc11001100_hook("a.B", c, "assign"));
        a.A = cc11001100_hook("a.A", !0, "assign");
        Qc(a);
      }));
    }
    function Rc() {
      try {
        hb(function (a) {
          a = cc11001100_hook("a", a.document, "assign");
          if (ab.length && a.head) for (var b = cc11001100_hook("b", ia(ab), "var-init"), c = cc11001100_hook("c", b.next(), "var-init"); !c.done; c = cc11001100_hook("c", b.next(), "assign")) if ((c = cc11001100_hook("c", c.value, "assign")) && a.head) {
            var d = cc11001100_hook("d", Q("META"), "var-init");
            a.head.appendChild(d);
            d.httpEquiv = cc11001100_hook("d.httpEquiv", "origin-trial", "assign");
            d.content = cc11001100_hook("d.content", c, "assign");
          }
          return !1;
        }, !1);
      } catch (a) {}
    }
    function Mc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      Oc(a, b);
      Rc();
      0 !== a.i || 0 !== a.m ? Sc(a) ? Tc(a).then(function () {
        Uc(a);
      }) : Uc(a) : a.C = cc11001100_hook("a.C", 1, "assign");
      Sb(Gc).m.then(function () {
        a.h = cc11001100_hook("a.h", !0, "assign");
        Qc(a);
      });
      Vc(a);
      Qc(a);
    }
    function Pc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return new Y(function (c) {
        function d(e, f) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("f", f, "function-parameter");
          a.G = cc11001100_hook("a.G", e, "assign");
          c(f);
        }
        ec(b, d);
        Yb(b, d, !0, !1, void 0, !0);
      });
    }
    function Sc(a) {
      cc11001100_hook("a", a, "function-parameter");
      a.l = cc11001100_hook("a.l", Wc(), "assign");
      a.C = cc11001100_hook("a.C", a.l ? 4 : 1, "assign");
      return a.l;
    }
    function Tc(a) {
      cc11001100_hook("a", a, "function-parameter");
      return new Y(function (b) {
        function c(e) {
          cc11001100_hook("e", e, "function-parameter");
          a.C = cc11001100_hook("a.C", 3, "assign");
          e && (a.I = cc11001100_hook("a.I", e.src, "assign"), a.H = cc11001100_hook("a.H", e.sdk, "assign"));
          b();
        }
        var d = cc11001100_hook("d", v.omrhp, "var-init");
        "function" === typeof d ? d(c) : (d = cc11001100_hook("d", v.document.querySelector("script[data-jc='86']"), "assign")) && d.addEventListener("load", function () {
          v.omrhp(c);
        });
      });
    }
    function Uc(a) {
      cc11001100_hook("a", a, "function-parameter");
      a.j = cc11001100_hook("a.j", !0, "assign");
      Qc(a);
    }
    function Qc(a) {
      cc11001100_hook("a", a, "function-parameter");
      if (a.h) {
        var b = cc11001100_hook("b", null, "var-init"),
          c = cc11001100_hook("c", 0, "var-init");
        2 !== a.O ? b = cc11001100_hook("b", 0, "assign") : 1 === a.m && a.h && a.j ? b = cc11001100_hook("b", 12, "assign") : 1 === a.i && a.h && a.j && a.A && (b = cc11001100_hook("b", 11, "assign"));
        if (null != b) a: {
          if (0 === b ? 1 === a.i && a.h && a.j && a.A ? c = cc11001100_hook("c", 2, "assign") : 1 === a.m && a.h && a.j && (c = cc11001100_hook("c", 1, "assign")) : 12 === b && 1 === a.i && a.h && a.j && a.A && (c = cc11001100_hook("c", 2, "assign")), a.W && (a.T && "" !== a.K && a.l && (a.s || 0 !== b || Xc(a, !0), 12 !== b && 1 !== c && 2 !== c || Xc(a, !1)), 0 === b && 0 === c)) break a;
          var d = cc11001100_hook("d", Z(), "var-init"),
            e = cc11001100_hook("e", Yc(a, b, c, d), "var-init");
          0 === b && (a.O = cc11001100_hook("a.O", 2, "assign"), a.M = cc11001100_hook("a.M", d, "assign"));
          if (12 === b || c) a.m = cc11001100_hook("a.m", 2, "assign");
          if (11 === b || 2 === c) a.i = cc11001100_hook("a.i", 2, "assign");
          if (a.V) {
            e = cc11001100_hook("e", new Wa(), "assign");
            J(e, 1, a.S);
            e = cc11001100_hook("e", Ua(e), "assign");
            if (0 === b) {
              var f, g;
              null == (f = cc11001100_hook("f", L(v), "assign")) || null == (g = cc11001100_hook("g", f.fence, "assign")) || g.reportEvent({
                eventType: cc11001100_hook("eventType", "impression", "object-key-init"),
                eventData: cc11001100_hook("eventData", e, "object-key-init"),
                destination: cc11001100_hook("destination", ["buyer"], "object-key-init")
              });
            }
            if (11 === b || 2 === c) {
              var k, h;
              null == (k = cc11001100_hook("k", L(v), "assign")) || null == (h = cc11001100_hook("h", k.fence, "assign")) || h.reportEvent({
                eventType: cc11001100_hook("eventType", "b2rimpression", "object-key-init"),
                eventData: cc11001100_hook("eventData", e, "object-key-init"),
                destination: cc11001100_hook("destination", ["buyer"], "object-key-init")
              });
            }
          } else e && (((f = cc11001100_hook("f", a.X && Kc(), "assign")) || a.Y) && v.fetch ? (g = cc11001100_hook("g", {
            method: cc11001100_hook("method", "GET", "object-key-init"),
            keepalive: cc11001100_hook("keepalive", !0, "object-key-init")
          }, "assign"), f ? g.headers = cc11001100_hook("g.headers", {
            "Attribution-Reporting-Eligible": cc11001100_hook("Attribution-Reporting-Eligible", "event-source", "object-key-init")
          }, "assign") : g.mode = cc11001100_hook("g.mode", "no-cors", "assign"), v.fetch(bb(e, "&ftch=1"), g)) : Jc(e));
          0 === b && a.J.resolve();
        }
      }
    }
    function Xc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", null, "var-init");
      b ? a.s = cc11001100_hook("a.s", Z(), "assign") : c = cc11001100_hook("c", a.s ? Z() - a.s : "?", "assign");
      a = cc11001100_hook("a", "https://pagead2.googlesyndication.com/pagead/gen_204?id=opxhb&evt=" + (b ? "d" : "o") + ("&eid=" + encodeURIComponent(a.P)) + (null == c ? "" : "&ttp=" + c), "assign");
      Jc(a);
    }
    function Yc(a, b, c, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      if ("" === a.K) return null;
      var e = cc11001100_hook("e", {
        omid: cc11001100_hook("omid", a.l ? 1 : 0, "object-key-init"),
        rm: cc11001100_hook("rm", a.C, "object-key-init"),
        ctpt: cc11001100_hook("ctpt", d - a.N, "object-key-init")
      }, "var-init");
      0 !== b && (e.vt = cc11001100_hook("e.vt", b, "assign"), e.dtpt = cc11001100_hook("e.dtpt", d - (a.M || 0), "assign"));
      0 !== c && (e.cbvp = cc11001100_hook("e.cbvp", c, "assign"));
      a.G && (e.dett = cc11001100_hook("e.dett", a.G, "assign"));
      a.B && (e.beid = cc11001100_hook("e.beid", a.B.eventId, "assign"), e.vend = cc11001100_hook("e.vend", a.B.vendor, "assign"));
      null != a.F && (e.cstd = cc11001100_hook("e.cstd", a.F, "assign"));
      (b = cc11001100_hook("b", N.bvst, "assign")) && (e.cisv = cc11001100_hook("e.cisv", b + ("." + a.U), "assign"));
      0 !== a.D && (e.vwbs = cc11001100_hook("e.vwbs", a.D, "assign"));
      a.I && (e.oprs = cc11001100_hook("e.oprs", a.I, "assign"));
      a.H && (e.opsd = cc11001100_hook("e.opsd", a.H, "assign"));
      (b = cc11001100_hook("b", Sb(Gc).l, "assign")) && (e.uach = cc11001100_hook("e.uach", b, "assign"));
      e.arae = cc11001100_hook("e.arae", Number(Kc()), "assign");
      var f = cc11001100_hook("f", "", "var-init");
      jb(e, function (g, k) {
        f += cc11001100_hook("f", "&" + k + "=" + encodeURIComponent(g), "assign");
      });
      return bb(a.K, f);
    }
    function Vc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", a.P, "var-init");
      if (b && (b = cc11001100_hook("b", v["bllsn" + b], "assign"), "function" === typeof b)) try {
        b(function (c) {
          c && (a.D = cc11001100_hook("a.D", c.block ? 2 : 1, "assign"));
        });
      } catch (c) {}
    }
    function Wc() {
      var a = cc11001100_hook("a", L(v).omid3p, "var-init"),
        b = cc11001100_hook("b", !!a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener, "var-init");
      b || hb(function (c) {
        try {
          var d = cc11001100_hook("d", c.frames ? !!c.frames.omid_v1_present : !1, "var-init");
        } catch (e) {
          d = cc11001100_hook("d", !1, "assign");
        }
        d && (b = cc11001100_hook("b", !0, "assign"));
        return b;
      }, !0);
      return b;
    }
    ;
    L().btrp = cc11001100_hook("L().btrp", function (a, b) {
      var c = cc11001100_hook("c", Nc = cc11001100_hook("Nc", new Lc(a, b), "assign"), "var-init");
      return function (d) {
        Oc(c, d);
      };
    }, "assign");
    L().pdib3 = cc11001100_hook("L().pdib3", function (a, b) {
      Nc.J.promise.then(function () {
        if (b) {
          var c = cc11001100_hook("c", void 0 === c ? !1 : c, "var-init");
          if (qb()) mb(window, a, null, !0, c);else {
            var d = cc11001100_hook("d", v.document, "var-init");
            if (d.body) {
              var e = cc11001100_hook("e", d.getElementById("goog-srcless-iframe"), "var-init");
              e || (e = cc11001100_hook("e", Q("IFRAME"), "assign"), e.style.display = cc11001100_hook("e.style.display", "none", "assign"), e.id = cc11001100_hook("e.id", "goog-srcless-iframe", "assign"), d.body.appendChild(e));
              d = cc11001100_hook("d", e, "assign");
            } else d = cc11001100_hook("d", null, "assign");
            d && d.contentWindow && mb(d.contentWindow, a, null, !0, c);
          }
        } else R(a);
      });
    }, "assign");
    L().vv = cc11001100_hook("L().vv", function () {
      var a = cc11001100_hook("a", Sb(Gc), "var-init");
      if (!a.i) throw Error("aiv::err");
      a.i();
    }, "assign");
    L().sasrc = cc11001100_hook("L().sasrc", function (a) {
      Nc.J.promise.then(function () {
        var b = cc11001100_hook("b", v.document.createElement("img"), "var-init");
        b.style.display = cc11001100_hook("b.style.display", "none", "assign");
        b.attributionSrc = cc11001100_hook("b.attributionSrc", a, "assign");
        v.document.body.appendChild(b);
      });
    }, "assign");
  }).call(this);
  window.stcc = cc11001100_hook("window.stcc", btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjsuvO3XFo8SYaE6fAv7W11z6uziNc94D2rfauRuLqUiKRBkfVIOJecrISOzyuanSP9XUMeLgRD0wfcmRaVgCCKox6bJkQH0ir0BtF6cBN9P8AftdmSUGVAtyoRTRrvWAc3iArpLt73Q64NCVp2iQW0siHltxfWYp9FFtfxxlNTDc18Z2G1NcEMb-x_T93OrlSqzaOkx6Mw3vZ5oI_GPhCszYFpa5UZCFgFi-wuxIYE36lD6jE5pdy7jkwhId2ll8rLXJx-aWOinK9iTlLLnoZgKLH4br3fEcFQ8pKppdiRYCHbNq_1h_ux_lyQdkx1ogkbD6iPq3bMh3I3FM2tu1x_U8crD3Wd1VKrLfTy0nfTY4VqU-cPp0_nPmDDCQKGOX_w2rE2yhn1vyyDN7wH1W0BwJ4foGtnbTpA0Q_Hnk0yKty7cFp81d8wD4Qy90OUeqWCSdI35CBpnYirgRaftYR0Anj5CrbS-amf3e3nyTbwrbN1zjCA-Qw4e778Nc2lLcoPhJIEc3OgMkTmHvrPUoo4Yw5lIKzRRqKqyhfr0EEq7yzxdS2x2vgN0xUvClfLf4m1EtQI15nz_GZCCJkd_E-47_Gos_BhTEsqA6eN4_NtHnCrqMvAdZ1eQUiarzxvuuB63wTuB-M6Q-Tq4Gf1HdjzvMnvr_r4ZLPROpsjMUS4ZEVxQlFo2vQJck0iUt-88atnJoZUMEOFZ1jcK4DJGYRgCdD6slvicup13S8FJnT9bs8wfiy0aORgzA8DvMoaEUWJdmqEzTIKXmkRISNbYVyCe0k2LFGeGY9m_thTpiJ6gZwkD92afxpmfels8s4Gpm1pjXQipe3GsdEbbWlxi8kSNYxhcooosUTFBwRsZUmGtc2DnqvW-wPWtp-mLqWhYeWZgC-CAYMQFCTxNMDqnB0BCh2HQW7kgfyJxW49Dyl6rlco28ijWIdGW5qNVDe03NrfbfB5_lMtrcu8_znz2HIh6B63-aQnhZ3SetkXrPpAXQ7rA8GPzmE28t5Ej3qL8AOholeDTuXuaL4olJpC_J4TgaAdKY48GpmAoENfQ0bYHxEt9fW-6bEXtyQspza9ogk4lFbjRIP1ikavmCB7YBuHBjheQNKPO7PtpR06fYZlrpk5NyXSsdpsviPmuW2nnHsJfFUw-_cX5FngH0N3nsLFeWXxjC-ARxtVBdbjTPfMj3agDuuE6r_EZYF9X4AgGqc3lCeT-JMDmrfTukKSMhlPEdnZ0\x26sai\x3dAMfl-YTjxRNghzIdHe7bpR4mRMaLYPj3gmpu6bsDYjbejGA0DeIUV62IUT_tVDAlTUe3_X31c1iiw3pC-bnN-mLvTG1bbFAvj3Qqx4GjRUbwfh2xiAcr4A5NYt0FMGzrBBMm9XH6AlMPXpWR3rmAerYAVKuLHYxC9w3J6IbPVDXdbPWqSVxkTjwX5ONdzq5hRxrIATsy5qvSAtLr0ksFCJbCpuUTK3DslDZPXSCbzX_-RFF_r1S67IMuFz84g3xID5-SX47u\x26sig\x3dCg0ArKJSzBHgNoDP1RdDEAE\x26uach_m\x3d[UACH]\x26cry\x3d1\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_7FgDZNH4J7eDid4P-8KZUA")), "assign");
})();
(function () {
  (function () {
    (function () {
      var m = cc11001100_hook("m", document.createElement('meta'), "var-init");
      m.setAttribute('data-jc', '78');
      m.setAttribute('data-jc-version', 'r20230301');
      var ss = cc11001100_hook("ss", document.getElementsByTagName('script')[0], "var-init");
      if (ss && ss.parentNode) {
        ss.parentNode.insertBefore(m, ss);
      }
    })();
    (function () {
      /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */var h = cc11001100_hook("h", this || self, "var-init");
      function k(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        a = cc11001100_hook("a", a.split("."), "assign");
        var b = cc11001100_hook("b", h, "var-init");
        a[0] in b || "undefined" == typeof b.execScript || b.execScript("var " + a[0]);
        for (var d; a.length && (d = cc11001100_hook("d", a.shift(), "assign"));) a.length || void 0 === c ? b[d] && b[d] !== Object.prototype[d] ? b = cc11001100_hook("b", b[d], "assign") : b = cc11001100_hook("b", b[d] = cc11001100_hook("b[d]", {}, "assign"), "assign") : b[d] = cc11001100_hook("b[d]", c, "assign");
      }
      function l(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c = cc11001100_hook("c", typeof a, "var-init");
        c = cc11001100_hook("c", "object" != c ? c : a ? Array.isArray(a) ? "array" : c : "null", "assign");
        return "array" == c || "object" == c && "number" == typeof a.length;
      }
      function n(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c = cc11001100_hook("c", typeof a, "var-init");
        return "object" == c && null != a || "function" == c;
      }
      function p(a) {
        cc11001100_hook("a", a, "function-parameter");
        return a;
      }
      ;
      var q = cc11001100_hook("q", Array.prototype.forEach ? function (a, c) {
        Array.prototype.forEach.call(a, c, void 0);
      } : function (a, c) {
        for (var b = cc11001100_hook("b", a.length, "var-init"), d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < b; f++) f in d && c.call(void 0, d[f], f, a);
      }, "var-init");
      function r(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c = cc11001100_hook("c", a.length, "var-init");
        if (0 < c) {
          for (var b = cc11001100_hook("b", Array(c), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < c; d++) b[d] = cc11001100_hook("b[d]", a[d], "assign");
          return b;
        }
        return [];
      }
      ;
      function t(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        for (var b in a) c.call(void 0, a[b], b, a);
      }
      ;
      var u;
      function v(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        this.g = cc11001100_hook("this.g", c === w ? a : "", "assign");
      }
      v.prototype.toString = cc11001100_hook("v.prototype.toString", function () {
        return this.g + "";
      }, "assign");
      v.prototype.h = cc11001100_hook("v.prototype.h", !0, "assign");
      var w = cc11001100_hook("w", {}, "var-init");
      function x(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        t(c, function (b, d) {
          b && "object" == typeof b && b.h && (b = cc11001100_hook("b", b.g.toString(), "assign"));
          "style" == d ? a.style.cssText = cc11001100_hook("a.style.cssText", b, "assign") : "class" == d ? a.className = cc11001100_hook("a.className", b, "assign") : "for" == d ? a.htmlFor = cc11001100_hook("a.htmlFor", b, "assign") : y.hasOwnProperty(d) ? a.setAttribute(y[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = cc11001100_hook("a[d]", b, "assign");
        });
      }
      var y = cc11001100_hook("y", {
        cellpadding: cc11001100_hook("cellpadding", "cellPadding", "object-key-init"),
        cellspacing: cc11001100_hook("cellspacing", "cellSpacing", "object-key-init"),
        colspan: cc11001100_hook("colspan", "colSpan", "object-key-init"),
        frameborder: cc11001100_hook("frameborder", "frameBorder", "object-key-init"),
        height: cc11001100_hook("height", "height", "object-key-init"),
        maxlength: cc11001100_hook("maxlength", "maxLength", "object-key-init"),
        nonce: cc11001100_hook("nonce", "nonce", "object-key-init"),
        role: cc11001100_hook("role", "role", "object-key-init"),
        rowspan: cc11001100_hook("rowspan", "rowSpan", "object-key-init"),
        type: cc11001100_hook("type", "type", "object-key-init"),
        usemap: cc11001100_hook("usemap", "useMap", "object-key-init"),
        valign: cc11001100_hook("valign", "vAlign", "object-key-init"),
        width: cc11001100_hook("width", "width", "object-key-init")
      }, "var-init");
      function z(a, c, b) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");
        var d = cc11001100_hook("d", arguments, "var-init"),
          f = cc11001100_hook("f", document, "var-init"),
          e = cc11001100_hook("e", d[1], "var-init");
        var g = cc11001100_hook("g", String(d[0]), "var-init");
        g = cc11001100_hook("g", String(g), "assign");
        "application/xhtml+xml" === f.contentType && (g = cc11001100_hook("g", g.toLowerCase(), "assign"));
        g = cc11001100_hook("g", f.createElement(g), "assign");
        e && ("string" === typeof e ? g.className = cc11001100_hook("g.className", e, "assign") : Array.isArray(e) ? g.className = cc11001100_hook("g.className", e.join(" "), "assign") : x(g, e));
        2 < d.length && A(f, g, d);
        return g;
      }
      function A(a, c, b) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");
        function d(m) {
          cc11001100_hook("m", m, "function-parameter");
          m && c.appendChild("string" === typeof m ? a.createTextNode(m) : m);
        }
        for (var f = cc11001100_hook("f", 2, "var-init"); f < b.length; f++) {
          var e = cc11001100_hook("e", b[f], "var-init");
          if (!l(e) || n(e) && 0 < e.nodeType) d(e);else {
            a: {
              if (e && "number" == typeof e.length) {
                if (n(e)) {
                  var g = cc11001100_hook("g", "function" == typeof e.item || "string" == typeof e.item, "var-init");
                  break a;
                }
                if ("function" === typeof e) {
                  g = cc11001100_hook("g", "function" == typeof e.item, "assign");
                  break a;
                }
              }
              g = cc11001100_hook("g", !1, "assign");
            }
            q(g ? r(e) : e, d);
          }
        }
      }
      ; /*  SPDX-License-Identifier: Apache-2.0 */
      k("ait", function (a) {
        var c = cc11001100_hook("c", z("IMG"), "var-init");
        c.src = cc11001100_hook("c.src", a, "assign");
        c.border = cc11001100_hook("c.border", "0", "assign");
        c.height = cc11001100_hook("c.height", 1, "assign");
        c.width = cc11001100_hook("c.width", 1, "assign");
        c.style.display = cc11001100_hook("c.style.display", "none", "assign");
        document.body.appendChild(c);
      });
      k("ast", function (a) {
        var c;
        a = cc11001100_hook("a", null === a ? "null" : void 0 === a ? "undefined" : a, "assign");
        if (void 0 === u) {
          var b = cc11001100_hook("b", null, "var-init");
          if ((c = cc11001100_hook("c", h.trustedTypes, "assign")) && c.createPolicy) {
            try {
              b = cc11001100_hook("b", c.createPolicy("goog#html", {
                createHTML: cc11001100_hook("createHTML", p, "object-key-init"),
                createScript: cc11001100_hook("createScript", p, "object-key-init"),
                createScriptURL: cc11001100_hook("createScriptURL", p, "object-key-init")
              }), "assign");
            } catch (e) {
              h.console && h.console.error(e.message);
            }
            u = cc11001100_hook("u", b, "assign");
          } else u = cc11001100_hook("u", b, "assign");
        }
        a = cc11001100_hook("a", (b = cc11001100_hook("b", u, "assign")) ? b.createScriptURL(a) : a, "assign");
        c = cc11001100_hook("c", new v(a, w), "assign");
        b = cc11001100_hook("b", a = cc11001100_hook("a", document, "assign"), "assign");
        b = cc11001100_hook("b", void 0 === b ? document : b, "assign");
        b = cc11001100_hook("b", b.createElement("script"), "assign");
        b.src = cc11001100_hook("b.src", c instanceof v && c.constructor === v ? c.g : "type_error:TrustedResourceUrl", "assign");
        var d, f;
        (d = cc11001100_hook("d", (c = cc11001100_hook("c", null == (f = cc11001100_hook("f", (d = cc11001100_hook("d", (b.ownerDocument && b.ownerDocument.defaultView || window).document, "assign")).querySelector, "assign")) ? void 0 : f.call(d, "script[nonce]"), "assign")) ? c.nonce || c.getAttribute("nonce") || "" : "", "assign")) && b.setAttribute("nonce", d);
        (d = cc11001100_hook("d", a.getElementsByTagName("script")[0], "assign")) && d.parentNode && d.parentNode.insertBefore(b, d);
      });
    }).call(this);
    pdib3('https://analyticspixel.microsoft.com/aid/imp?dcmadvertiserid\x3d8391437\x26dcmcampaignid\x3d29121201\x26dcmadid\x3d546074386\x26dcmrenderingid\x3d183717712\x26dcmsiteid\x3d4091806\x26dcmplacementid\x3d354806012\x26customer\x3dMicrosoft\x26dv360auctionid\x3dABAjH0hWmvryJeWr1m3EIXOBzfvh');
  })();
})();
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = cc11001100_hook("window.GoogleTyFxhY", [], "assign");
  }
  window.GoogleTyFxhY.push({
    '_scs_': cc11001100_hook('_scs_', 'Bvi1K7FgDZNH4J7eDid4P-8KZUAAAAAA4AeAEAg', "object-key-init"),
    '_bgu_': cc11001100_hook('_bgu_', 'https://pagead2.googlesyndication.com/bg/hTGw0iTttGPYNj9jnBVYIcaXVb8tbW1IYYT-gsExgL0.js', "object-key-init"),
    '_bgp_': cc11001100_hook('_bgp_', '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\x3d\x3d', "object-key-init"),
    '_ifr_': cc11001100_hook('_ifr_', 'false', "object-key-init")
  });
  var gsodar = cc11001100_hook("gsodar", document.createElement('script'), "var-init");
  gsodar.type = cc11001100_hook("gsodar.type", 'text/javascript', "assign");
  gsodar.async = cc11001100_hook("gsodar.async", true, "assign");
  gsodar.src = cc11001100_hook("gsodar.src", '//tpc.googlesyndication.com/sodar/UFYwWwmt.js', "assign");
  var s = cc11001100_hook("s", document.getElementsByTagName('script')[0], "var-init");
  s.parentNode.insertBefore(gsodar, s);
})();