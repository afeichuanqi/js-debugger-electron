if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_mh8gZJZR7YWm3w-_zYyYDg"\x3e');
(function () {
  var m = cc11001100_hook("m", document.createElement('meta'), "var-init");
  m.setAttribute('data-jc', '82');
  m.setAttribute('data-jc-version', 'r20230322');
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
clsn("gcc_mh8gZJZR7YWm3w-_zYyYDg");
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CJaGz9Gy-f0CFe2C6QUdvyYD4w\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjstQwRSpkqAbOHMNFQRlpZ2K7UCrkxaiN3aJhp60qb--TxaVcXbCbozYuFoRdy0vMXqbIeIdGWUp9RYgLNmcWbzht7_81u88SnU6M-TW-LESUfUVQ-zZb9kbjZTpRLIiYnqGicKzkV25eM33zXjxCKjgHjR6c3s7bZ5Z01xCUD3I_RU8K1VNuA3wsRGQ9YVhfJ3XsUaP2QMmO0kXmLKF-v2A2tFmY1FvyV3bq7xI9naqr-JpqX4maBRcqF-wI9pkIdLUvxWmCqJxVenxrB6HzDCqyH9SGz2l_CCS-dJV3nlDNhRlb2YzCEXx9p_PInyQ75NeWCCe7_G5ILTU32_op1jMHPt3u7vsNyEEgWrSrQ88G6hPhFK3D1k5Y2VruMepW3syuW2AZKG1jIjCGInj3jRxLuD6PpRQqMTGiRQAWKkQ9_NZzBXMHa50OrbMEbrflh8bWqPpvqoSOo3uA-nGdihyajZVHyNQbQIczeuVlv1lHJfBpJHi8mLnyQfuShazWijp61JkwZubgq8vgV3vHcn0Son-5xVnLie6Mp-e6dAZSHhwTJmj2bW6LbkxK9-TbAHIW8ndgxSdvSIAtKK-fL0kTKEI850R9qWmgwQDxy-VwKzpJZfBjs01KjqsBp1JCADBpHdVJOHbB93WvAk1tj-MzRj4lbHBH3eZ_wHf9XODjnd9qoII3msV2Bm5Q4pGJ43UsGBIr-NXUhDYeJs7ja1MRHlv2zJjmH25vkEekTcjwjB3IhPRnqHSVXwp4-4BvU1LRAIPczI3eE8S9UhPdLYSurLfjb4xkJWPLradDjnhnIwFyYwAVVbOYs5kHtVbR2BhC91dWWO-26G86_VDIeSj7e69ZYPJm0Ot_wGCEE8OntWFesp-uwG5dKTwa5v5ICS2rs3Hz5C_K-w5FiVjOdlDkG9FzroL2XD3e_ZYB8BNzEndd8bTqGRh4PcnP6TtAzF7IwRuELxVzo5F9d2mAnVNtx652_RSIiRciBTNPAbVKfF724jSHTHe2GYrhqRm3Uk9oTD0J_ichIuwQB01PPoHPDZyYY-BXcDpuhZuUyGrUip002gz5BK1UcFqFDBUyHrSyHheZuvL5aJo-QWX1yX81iMSuO_yzthprGNrMBf2nJDLrA8SVKbW8mAz9g1UDG0Q_zRhnODYti2OjEO4N0CGSuQSm4d6DkUQ-u0lgx5tNR9_mm6bhaigCgmBwSWQ4tHVblEh74NH_K2oeGZpQEWK14sSPNVHgA-LOSrForfochrh-XAQw5NgJP9YA8MCrzllH5svjtGS9j-q6q4i7w\x26amp;sai\x3dAMfl-YSI3jPQWJltnaP_LsA-uGQ2WUCaENhu9OnHa7bXvjwlPV-50JKhM1upUnN0gj0-zxFE-Cx1vH6Dp7iJX6KhmKAQj7e8B6HZ9AQE16Tz_FHxLi6_MB5mCyD_XbRgDc_rkHcckx_cbTOozQJh1Z3F0w8-AnWTrQq0LxgznXgc0rkxnEOmRGVnbP0B3UXyhhF9Rm9XEFE_2W7eWrzbfVtCpBJuGXx9Q2wJV0OzZphK08dXS7RU_NZ9av9WVyk1oamDWwgItOXLl2oBP0nSHQ\x26amp;sig\x3dCg0ArKJSzFWSL5s9GWqm\x26amp;cry\x3d1\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://azure.microsoft.com/zh-cn/free/search/%3FOCID%3DAIDcmmknmz9ars_OLA_29121201_354806054_183728371%26dclid%3D%25edclid!\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/13701804595609803887\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22300\x22 height\x3d\x22250\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230322\x22 data-jcp-a-id\x3d\x22img_anch_CJaGz9Gy-f0CFe2C6QUdvyYD4w\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var aa\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},l;if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)l\x3dObject.setPrototypeOf;else{var n;a:{var ba\x3d{a:!0},p\x3d{};try{p.__proto__\x3dba;n\x3dp.a;break a}catch(a){}n\x3d!1}l\x3dn?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var q\x3dl,r\x3dthis||self;var t,u;a:{for(var v\x3d[\x22CLOSURE_FLAGS\x22],w\x3dr,x\x3d0;x\x3cv.length;x++)if(w\x3dw[v[x]],null\x3d\x3dw){u\x3dnull;break a}u\x3dw}var y\x3du\x26\x26u[610401301];t\x3dnull!\x3dy?y:!1;var z,A\x3dr.navigator;z\x3dA?A.userAgentData||null:null;function B(a){return t?z?z.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function C(a){var b;a:{if(b\x3dr.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function E(){return t?!!z\x26\x260\x3cz.brands.length:!1}function F(){return E()?B(\x22Chromium\x22):(C(\x22Chrome\x22)||C(\x22CriOS\x22))\x26\x26!(E()?0:C(\x22Edge\x22))||C(\x22Silk\x22)};var ca\x3dE()?!1:C(\x22Trident\x22)||C(\x22MSIE\x22);!C(\x22Android\x22)||F();F();C(\x22Safari\x22)\x26\x26(F()||(E()?0:C(\x22Coast\x22))||(E()?0:C(\x22Opera\x22))||(E()?0:C(\x22Edge\x22))||(E()?B(\x22Microsoft Edge\x22):C(\x22Edg/\x22))||E()\x26\x26B(\x22Opera\x22));var G\x3d{},H\x3dnull;var da\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,ea\x3d!ca\x26\x26\x22function\x22\x3d\x3d\x3dtypeof r.btoa;var I\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0;function J(a){var b;I?b\x3da[I]:b\x3da.h;return null\x3d\x3db?0:b}function K(a,b){I?a[I]\x3db:void 0!\x3d\x3da.h?a.h\x3db:Object.defineProperties(a,{h:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a};var L\x3d{};function M(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var N,O\x3dObject.freeze(K([],23));function P(a){var b\x3da.length;(b\x3db?a[b-1]:void 0)\x26\x26M(b)?b.g\x3d1:(b\x3d{},a.push((b.g\x3d1,b)))};function Q(a){var b\x3da.l+a.j;return a.i||(a.i\x3da.h[b]\x3d{})};var R;function S(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22object\x22:if(a)if(Array.isArray(a)){if(0!\x3d\x3d(J(a)\x26128))return a\x3dArray.prototype.slice.call(a),P(a),a}else if(da\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(ea){for(var b\x3d\x22\x22;10240\x3ca.length;)b+\x3dString.fromCharCode.apply(null,a.subarray(0,10240)),a\x3da.subarray(10240);b+\x3dString.fromCharCode.apply(null,a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!H){H\x3d{};for(var g\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22), f\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22],d\x3d0;5\x3ed;d++){var e\x3dg.concat(f[d].split(\x22\x22));G[d]\x3de;for(var c\x3d0;c\x3ce.length;c++){var h\x3de[c];void 0\x3d\x3d\x3dH[h]\x26\x26(H[h]\x3dc)}}}b\x3dG[b];g\x3dArray(Math.floor(a.length/3));f\x3db[64]||\x22\x22;for(d\x3de\x3d0;e\x3ca.length-2;e+\x3d3){var m\x3da[e],k\x3da[e+1];h\x3da[e+2];c\x3db[m\x3e\x3e2];m\x3db[(m\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];g[d++]\x3dc+m+k+h}c\x3d0;h\x3df;switch(a.length-e){case 2:c\x3da[e+1],h\x3db[(c\x2615)\x3c\x3c2]||f;case 1:a\x3da[e],g[d]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|c\x3e\x3e4]+h+f}a\x3dg.join(\x22\x22)}return a}}return a};function fa(a,b,g,f,d){if(null!\x3da){if(Array.isArray(a))a\x3dd\x26\x260\x3d\x3da.length\x26\x26J(a)\x261?void 0:ha(a,b,g,void 0!\x3d\x3df,d);else if(M(a)){var e\x3d{},c;for(c in a)e[c]\x3dfa(a[c],b,g,f,d);a\x3de}else a\x3db(a,f);return a}}function ha(a,b,g,f,d){var e\x3dJ(a);f\x3df?!!(e\x2616):void 0;a\x3dArray.prototype.slice.call(a);for(var c\x3d0;c\x3ca.length;c++)a[c]\x3dfa(a[c],b,g,f,d);g(e,a);return a}function ia(a){return a.o\x3d\x3d\x3dL?a.toJSON():S(a)}function ja(a,b){a\x26128\x26\x26P(b)};function T(a,b,g,f){null\x3d\x3da\x26\x26(a\x3dR);R\x3dvoid 0;var d\x3dthis.constructor.h;if(null\x3d\x3da){a\x3dd?[d]:[];var e\x3d48;var c\x3d!0;f\x26\x26(e|\x3d128);K(a,e)}else{if(!Array.isArray(a))throw Error();if(d\x26\x26d!\x3d\x3da[0])throw Error();c\x3da;I?c\x3dc[I]|\x3d0:void 0!\x3d\x3dc.h?c\x3dc.h|\x3d0:(Object.defineProperties(c,{h:{value:0,configurable:!0,writable:!0,enumerable:!1}}),c\x3d0);var h\x3dc|32;c\x3d0!\x3d\x3d(16\x26h);if(f){if(h|\x3d128,0\x3ca.length){var m\x3da[a.length-1];if(M(m)\x26\x26\x22g\x22in m){delete m.g;var k\x3d!0;for(e in m){k\x3d!1;break}k\x26\x26a.pop()}}}else if(128\x26h)throw Error();K(a, h)}this.j\x3dd?0:-1;this.h\x3da;a:{e\x3dthis.h.length;d\x3de-1;if(e\x26\x26(e\x3dthis.h[d],M(e))){this.i\x3de;this.l\x3dd-this.j;break a}void 0!\x3d\x3db\x26\x26-1\x3cb?(this.l\x3dMath.max(b,d+1-this.j),this.i\x3dvoid 0):this.l\x3dNumber.MAX_VALUE}if(!f\x26\x26this.i\x26\x26\x22g\x22in this.i)throw Error(\x27Unexpected \x22g\x22 flag in sparse object of message that is not a group type.\x27);if(g){b\x3dc\x26\x26!0;f\x3dthis.l;var D;for(c\x3d0;c\x3cg.length;c++)d\x3dg[c],d\x3cf?(d+\x3dthis.j,(e\x3da[d])?ka(e,b):a[d]\x3dO):(D||(D\x3dQ(this)),(e\x3dD[d])?ka(e,b):D[d]\x3dO)}} T.prototype.toJSON\x3dfunction(){var a\x3dthis.h,b;N?b\x3da:b\x3dha(a,ia,ja,void 0,!1);return b};function ka(a,b){if(Array.isArray(a)){var g\x3dJ(a),f\x3d1;!b||g\x262||(f|\x3d16);(g\x26f)!\x3d\x3df\x26\x26K(a,g|f)}}T.prototype.o\x3dL;T.prototype.toString\x3dfunction(){return this.h.toString()};function la(a,b){return S(b)};function U(a){T.call(this,a)}U.prototype\x3daa(T.prototype);U.prototype.constructor\x3dU;if(q)q(U,T);else for(var V in T)if(\x22prototype\x22!\x3dV)if(Object.defineProperties){var ma\x3dObject.getOwnPropertyDescriptor(T,V);ma\x26\x26Object.defineProperty(U,V,ma)}else U[V]\x3dT[V];var na\x3d/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function oa(a,b,g,f){var d\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return d?d[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+g+\x22\x26dim\x3d\x22+f)+d[2]:a}function pa(a){var b\x3da.currentTarget,g\x3db.querySelector(\x22img[alt]\x22);g\x26\x26(a\x3doa(b.href,+Math.round(a.clientX-g.offsetLeft),+Math.round(a.clientY-g.offsetTop),+g.width+\x22x\x22+ +g.height),na.test(a)\x26\x26(b.href\x3da))} function qa(a){var b\x3dr;var g\x3db\x3dvoid 0\x3d\x3d\x3db?window:b;b\x3dnew U;if(J(b.h)\x262)throw Error();b.m\x26\x26(b.m\x3dvoid 0);1\x3e\x3db.l?Q(b)[1]\x3da:(b.h[1+b.j]\x3da,(a\x3db.i)\x26\x261 in a\x26\x26delete a[1]);var f;if(null!\x3dg\x26\x26null!\x3d(f\x3dg.fence)){a\x3df.reportEvent;a:{N\x3d!0;try{var d\x3dJSON.stringify(b.toJSON(),la);break a}finally{N\x3d!1}d\x3dvoid 0}a.call(f,{eventType:\x22click\x22,eventData:d,destination:[\x22buyer\x22]})}} function ra(a,b){void 0!\x3dr.AFMA_Communicator\x26\x26void 0!\x3dr.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),r.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var W,X\x3ddocument.currentScript;W\x3d(X\x3dvoid 0\x3d\x3d\x3dX?null:X)\x26\x26\x2274\x22\x3d\x3d\x3dX.getAttribute(\x22data-jc\x22)?X:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dW)throw Error(\x22JSC not found 74\x22);for(var sa\x3d{},Y\x3dW.attributes,Z\x3dY.length-1;0\x3c\x3dZ;Z--){var ta\x3dY[Z].name;0\x3d\x3d\x3dta.indexOf(\x22data-jcp-\x22)\x26\x26(sa[ta.substring(9)]\x3dY[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),g\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],f\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],d\x3da[\x22cc-overlay\x22],e\x3da[\x22cc-button\x22],c\x3dd?document.getElementById(d):null,h\x3de?document.getElementById(e):null;if(\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22]){var m\x3da[\x22turtlex-event-ad-signals\x22];h?h.addEventListener(\x22click\x22,function(){qa(m)}):b.addEventListener(\x22click\x22,function(){qa(m)})}else if(b.addEventListener(\x22mousedown\x22,pa),c\x26\x26h\x26\x26c.addEventListener(\x22mousedown\x22,function(k){k\x3doa(h.href, +Math.round(k.clientX-c.offsetLeft),+Math.round(k.clientY-c.offsetTop),+c.clientWidth+\x22x\x22+ +c.clientHeight);na.test(k)\x26\x26(h.href\x3dk)}),g||f)b.addEventListener(\x22click\x22,function(k){ra(k,f)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){ra(k,f)})})(sa);}).call(this);\x3c/script\x3e');
document.write('\x3c/div\x3e');
document.write('\x3cscript\x3e(function () {function addIcon(){var container \x3d document.getElementsByClassName(\x22GoogleActiveViewClass\x22)[0];if (!container) {setTimeout(addIcon, 500);return;}var imgElem \x3d document.createElement(\x27img\x27);imgElem.src\x3d\x22https://static.googleadsserving.cn/pagead/images/cn/google_ad_cccccc_08.png\x22;imgElem.id \x3d \x22chinese_ad_label\x22;imgElem.style.position \x3d \x22absolute\x22;imgElem.style.left \x3d \x220px\x22;imgElem.style.bottom \x3d \x220px\x22;imgElem.style.zIndex \x3d \x222147483647\x22;container.appendChild(imgElem);}addIcon();})();\x3c/script\x3e');
document.write('\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:13px;right:0px;top:0px;position:absolute;width:41px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:inline-block;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgc{cursor:pointer;}.cbb{cursor:pointer;height:15px;width:15px;z-index:2147483646;background-color:#ffffff;opacity:0;}.cbb svg{position:absolute;top:0;right:0;height:15px;width:15px;stroke:#00aecd;fill:#00aecd;stroke-width:1.25;}.abgb{position:absolute;right:16px;top:0px;}.cbb{position:absolute;right:0px;top:0px;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:36px;}.abgc .il-icon{height:15px;width:22px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 24 16\x22\x3e\x3cpath d\x3d\x22M10.90 4.69L10.90 5.57L3.17 5.57L3.17 7.22L3.17 7.22Q3.17 9.15 3.06 10.11L3.06 10.11L3.06 10.11Q2.95 11.07 2.58 11.92L2.58 11.92L2.58 11.92Q2.21 12.77 1.27 13.56L1.27 13.56L0.59 12.93L0.59 12.93Q2.29 11.82 2.29 8.66L2.29 8.66L2.29 4.69L6.11 4.69L6.11 2.95L7.00 2.95L7.00 4.69L10.90 4.69ZM23.00 7.34L23.00 8.22L12.80 8.22L12.80 7.34L17.55 7.34L17.55 5.53L15.12 5.53L15.12 5.53Q14.55 6.53 13.86 7.07L13.86 7.07L13.10 6.46L13.10 6.46Q14.44 5.46 14.95 3.33L14.95 3.33L15.84 3.55L15.84 3.55Q15.77 3.86 15.49 4.65L15.49 4.65L17.55 4.65L17.55 2.84L18.47 2.84L18.47 4.65L21.86 4.65L21.86 5.53L18.47 5.53L18.47 7.34L23.00 7.34ZM21.45 8.88L21.45 13.63L20.53 13.63L20.53 12.78L15.32 12.78L15.32 13.63L14.41 13.63L14.41 8.88L21.45 8.88ZM15.32 11.90L20.53 11.90L20.53 9.76L15.32 9.76L15.32 11.90Z\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://adssettings.google.com/whythisad?source\x3ddisplay\x26amp;reasons\x3dAZhb-cAsYHpwwq0JHbBEYH8m3P9UtYc4MrOnt8rAChaZgXG-bOuGWStRmwpRRx0r2BV5pP0fwuy0cpXm4YHG9TsUAkpJjDOjD-bpt2z06tziH43c8yXO5lt-esK5UFh4eEyMJNTOyKHxEULbvLAFMiUzPAB40IQkESuNR3dF8MSqRzfiTAFKGgwK8HJhUVhaOv7LJEJiKu5RHxLbdntQ9iujkRrahcl7e3fofxNXgIP1iZcY4hCCxTnNCUzbXicCxhiKu59jnIeDu4gfZ1Mz0pXCqhs5y-6O3ZXXSl07js-kaE8_BYoJ-S0bWvc8N2ChstH1AvSCXiy53dNPerlHwKeU-_GN1dN-ulnUqnUbjrpANu3C1RZREM_-S_vht9CydL5LLkD72nvaEBvXUxTjPm2alevxCNxfMwcVRNbI9zSmnYIC8zn8sf_SYDtMjkf4L2Kx2SWCTFLBWoY3abyOKGfbuojNvo5idydMUOQOl27U1EdCUpC5YyDXE0a-7uhkuxY2F9j3I8qHEsMT-IaE6WP9iC8eiu6N7QJFkk912SOc9crODspDqoln0R4TUPB-Ysf6oHUHyopfR_K4jKoMgAgCPTsJG8Q-j8sOV7qxMbnkf1CIXPhiokaKs6_fH254TLQRgA2tFsjp-Yw-bxS73jHZEXagOU9e6lPpPS4XcbyJWt4c1QDg1zymQLnM2_k8lp_YL-iOM6CLIt8I61CTo_gV1vRsM-tHoKcHpry-pP_yvE0HgbKFZw0e2dugdgtrNqaJZM14JytF8rb0IqKOoabfLAfvsih6GHWY6_S1r13KPm2yDOD_MuqSSieWKj0CosXruer4kQEaeKJebTg8__F3uHTcPaSF0Ycf_10BYR4YTcv-WxjhaJYtBQhCkXC1OdgdQZDfwUfbyyua4u6JJBo9Lm-a2AxztQoRWP1PeKtwu26ay9GB2lIaAquaWASb60bYqKwXDkEjsvEU5QtJx7oAyXbZZyNQJF1BoDBHqUMYCsVV38ZlDFAzhGeGjzDvp9DjIViBD-5QIemOZaoN1DDj1mpYl7yylhnYmsPxOciikTKoxZqMtdKxCMkerAquGVr60WnIiOFW90T4Ra6hBHnr2vGhtSvXSw9CgyDD9FB9sdihWV-Ak0YwldmFX1akbDAaPbQ5aOiUnlZn5kLmiCL_2zyt-JjSbGhTnjYyZ8tduVPfRux1o4PR59EvenyIs8o8MoVQb0ZknTfQ5BnjxHph-9mcRYpyWOBQCEhWLTZ2dVIxU4MrvAfMK7lGPselDWp1V9jHrcUJloq4uNdl2wJTQGOUR8CrUTjCx7uUByfQ8DcL_o8whI8mp89euamLS1BJ6E-Ecp7RoqtXs9l2wUAQ4XIzZSFVb4IPnCwVffZu-r0cvwC0lgqOVq7wZAXdBLQM5aLj5LjQq4YDGrQC1GfmTydGrBKnUWVUd0WqTUMS-EuY3fJvmzMZv3Gkyrsgu9bmsxn-_gPB8ybYH2LjQrnnHr21q6XZpc2mRz2qQ2SoGLWmMo5H2XpxcL8zULudJokgtYu0fxUkS1ReIcPhJRp38Ez1qJnXEAu3jIV0sue1wDDJHQgAo_yyrZkWMORsiin06nczlI20-MH4nv1_UAdjxGFZLUAdGSjcfFn1OGRxm7gdQycdh6Y3qx1TxDqTds4vFJxK_RjvDpX5cEEFyy9p-kVP8WHf-ecgGqpQKjAxt1ctgtQgqvYOOJDoVLU\x22 target\x3d\x22_blank\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d\x22cbb\x22 class\x3d\x22cbb\x22 tabindex\x3d\x220\x22 role\x3d\x22button\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cstyle\x3e.mute_panel{z-index:2147483646;}.abgac{position:absolute;left:0px;top:0px;z-index:2147483646;display:none;width:100%;height:100%;background-color:#FAFAFA;}.mlsc{height:100%;display:flex;justify-content:center;align-items:center;}.mls{animation:mlskf 2s linear infinite;height:50%;width:50%;}.mlsd{stroke-dasharray:1,189;stroke-dashoffset:0;animation:mlsdkf 1.4s ease-in-out infinite;}@keyframes mlskf{100%{transform:rotate(360deg);}}@keyframes mlsdkf{0%{stroke-dasharray:1,189;stroke-dashoffset:0;}50%{stroke-dasharray:134,189;stroke-dashoffset:-53px;}100%{stroke-dasharray:134,189;stroke-dashoffset:-188px;}}\x3c/style\x3e\x3cdiv id\x3d\x22mute_panel\x22 class\x3d\x22mute_panel\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22abgac\x22 class\x3d\x22abgac\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22mlsc\x22 class\x3d\x22mlsc\x22\x3e\x3csvg class\x3d\x22mls\x22 viewBox\x3d\x2250 50 100 100\x22\x3e\x3ccircle class\x3d\x22mlsd\x22 cx\x3d\x22100\x22 cy\x3d\x22100\x22 r\x3d\x2230\x22 fill\x3d\x22none\x22 stroke\x3d\x22#9E9E9E\x22 stroke-width\x3d\x223\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://static.googleadsserving.cn/pagead/js/r20230322/r20110914/abg_lite.js\x22 data-jc-version\x3d\x22r20230322\x22 data-jcp-attribution-data\x3d\x22[[null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dCAjxFlh8gZL_RPIzAqAGLgqWoC-nf8Y9upNH3r4QRsd3wxMsBEAEg0aXiKGCdAaABjryg9QLIAQmpAheSVUhii4M-qAMByAObBKoEmAJP0GYejIIW5W-WWOzp8HSI-LAe-cT-VKF3QrBj-HEKrnYpusNuWePYFgdKZHSNxiBoP3wsxZpj5Mo0Aw8-5pniGekeGB5QuTP5Dz9nk719Mt4y5yQ5s6Ycp_R2E_ZTjYfrdWeJd4vW9_Fv70DA3urws5C-XGD3XvP9u2kXKC-GI-e5Ivu_gAMU080dQou8bKfImaT04Arxxb8HH2mXFk54taaKB9Prul-A5DSuhBFROfZjbN9XwqlIKCM0cEk4Hs4XTG2DwGt5q4lbY7mrxKeV5dyPDtwbLnSiBEvxodqF8X1RtaKOpIV3mqCNPw84R1G9kVpT1Ys-dQiPLbbTxGp2mzKP3LTJXW9sxikksOX6YDmYFNPBXpSMwATOl_-YkQTgBAOQBgGgBkyAB9rD34oBqAeOzhuoB5PYG6gH7paxAqgH_p6xAqgHpKOxAqgH1ckbqAemvhuoB5oGqAfz0RuoB5bYG6gHqpuxAqgHg62xAqgH_56xAqgH35-xAtgHANIIDwiAYRABGB0yAooCOgKAQIAKA5gLAcgLAYAMAbAT08TVEtATANgTDdgUAdAVAfgWAYAXAQ\\u0026sigh\x3dFofQH4tq0oA\\u0026cid\x3dCAQSPADUE5ymQgwoqo-rslCWSCanadNzLHTIJtzs-zqXdSA4d47evdHCZotQo-a6DVdnluFWbey-8I1lY3NGXBgB\x26quot;,\x26quot;CDEwhhWenc0IpNH3r4QRELbUkJ1IGL6h_YoBIhNhenVyZS5taWNyb3NvZnQuY29tMggIBRMYi7USFEIXY2EtcHViLTg1NzkzMDAzODk5ODg4MTlIBlgAcAE\x26quot;,[\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;\x26quot;,0],null,null,null,null,\x26quot;此广告有什么问题？\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/back_blue.png\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们将对此广告进行审核，以便改善您在今后的体验。\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们会根据您的反馈审核此网站上的广告。\x26quot;,null,null,null,\x26quot;即将关闭广告：%1$d 秒\x26quot;,\x26quot;谷歌广告\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/abg_blue.png\x26quot;,\x26quot;https://www.google.com/url?ct\x3dabg\\u0026q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://www.cnblogs.com/limina/p/15071604.html%26gl%3DCN%26hl%3Dzh%26ai0%3D\\u0026usg\x3dAOvVaw3Jv6ZLDLG1aKVTNJakyIX3\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,0,[[\x26quot;停止显示此广告\x26quot;,[\x26quot;user_feedback_menu_option\x26quot;,\x26quot;1\x26quot;,1],[\x26quot;此广告有什么问题？\x26quot;,[[\x26quot;对此广告不感兴趣\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;7\x26quot;,1]],[\x26quot;广告遮挡内容\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;3\x26quot;,1]],[\x26quot;多次看到此广告\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;2\x26quot;,1]],[\x26quot;广告内容不当\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;8\x26quot;,1]]]],[\x26quot;user_feedback_undo\x26quot;,\x26quot;1\x26quot;,1]]],[\x26quot;https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png\x26quot;,\x26quot;广告选择\x26quot;,\x26quot;%1$s 已关闭此广告\x26quot;,null,\x26quot;https://www.gstatic.cn/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png\x26quot;,\x26quot;停止显示此广告\x26quot;,\x26quot;我们尽量不再显示该广告\x26quot;,null,null,null,null,null,null,\x26quot;查看我的 Google 广告设置\x26quot;,null,\x26quot;https://www.gstatic.cn\x26quot;,\x26quot;\x26quot;,\x26quot;%1$s 提供的广告\x26quot;,\x26quot;广告设置\x26quot;,\x26quot;https://adssettings.google.com\x26quot;,null,null,null,0,null,null,null,0],\x26quot;AB3afGEAAAVvW1tbW251bGwsWzEwXSxudWxsLG51bGwsbnVsbCxbIjgwMTQxIl1dLFtudWxsLCJodHRwczovL2dvb2dsZWFkcy5nLmRvdWJsZWNsaWNrLm5ldC9wYWdlYWQvaW50ZXJhY3Rpb24vP2FpPUNBanhGbGg4Z1pMX1JQSXpBcUFHTGdxV29DLW5mOFk5dXBOSDNyNFFSc2Qzd3hNc0JFQUVnMGFYaUtHQ2RBYUFCanJ5ZzlRTElBUW1wQWhlU1ZVaGlpNE0tcUFNQnlBT2JCS29FbUFKUDBHWWVqSUlXNVctV1dPenA4SFNJLUxBZS1jVC1WS0YzUXJCai1IRUtybllwdXNOdVdlUFlGZ2RLWkhTTnhpQm9QM3dzeFpwajVNbzBBdzgtNXBuaUdla2VHQjVRdVRQNUR6OW5rNzE5TXQ0eTV5UTVzNlljcF9SMkVfWlRqWWZyZFdlSmQ0dlc5X0Z2NzBEQTN1cndzNUMtWEdEM1h2UDl1MmtYS0MtR0ktZTVJdnVfZ0FNVTA4MGRRb3U4YktmSW1hVDA0QXJ4eGI4SEgybVhGazU0dGFhS0I5UHJ1bC1BNURTdWhCRlJPZlpqYk45WHdxbElLQ00wY0VrNEhzNFhURzJEd0d0NXE0bGJZN21yeEtlVjVkeVBEdHdiTG5TaUJFdnhvZHFGOFgxUnRhS09wSVYzbXFDTlB3ODRSMUc5a1ZwVDFZcy1kUWlQTGJiVHhHcDJtektQM0xUSlhXOXN4aWtrc09YNllEbVlGTlBCWHBTTXdBVE9sXy1Za1FUZ0JBT1FCZ0dnQmt5QUI5ckQzNG9CcUFlT3podW9CNVBZRzZnSDdwYXhBcWdIX3A2eEFxZ0hwS094QXFnSDFja2JxQWVtdmh1b0I1b0dxQWZ6MFJ1b0I1YllHNmdIcXB1eEFxZ0hnNjJ4QXFnSF81NnhBcWdIMzUteEF0Z0hBTklJRHdpQVlSQUJHQjB5QW9vQ09nS0FRSUFLQTVnTEFjZ0xBWUFNQWJBVDA4VFZFdEFUQU5nVERkZ1VBZEFWQWZnV0FZQVhBUVx1MDAyNnNpZ2g9Rm9mUUg0dHEwb0FcdTAwMjZjaWQ9Q0FRU1BBRFVFNXltUWd3b3FvLXJzbENXU0NhbmFkTnpMSFRJSnR6cy16cVhkU0E0ZDQ3ZXZkSENab3RRby1hNkRWZG5sdUZXYmV5LThJMWxZM05HWEJnQiIsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Rpc3BsYXlhZHMtZm9ybWF0cy5nb29nbGV1c2VyY29udGVudC5jb20vYWRzL3ByZXZpZXcvY29udGVudC5qcz9jbGllbnQ9d3RhXHUwMDI2b2JmdXNjYXRlZEN1c3RvbWVySWQ9Njc2NzgyMzQzOFx1MDAyNmNyZWF0aXZlSWQ9NjQxNTcyOTczMjY3XHUwMDI2dmVyc2lvbklkPTBcdTAwMjZhZEdyb3VwQ3JlYXRpdmVJZD01ODUyODk4MjAzMjRcdTAwMjZodG1sUGFyZW50SWQ9cHJldi0wXHUwMDI2c2lnPUFDaVZCX3hHSEE5Zk1DaG9tNjhhZXpCWVVyRFhSRjBLS2ciXSxudWxsLG51bGwsMiwiQ0RFd2hoV2VuYzBJcE5IM3I0UVJFTGJVa0oxSUdMNmhfWW9CSWhOaGVuVnlaUzV0YVdOeWIzTnZablF1WTI5dE1nZ0lCUk1ZaTdVU0ZFSVhZMkV0Y0hWaUxUZzFOemt6TURBek9EazVPRGc0TVRsSUJsZ0FjQUUiLCIxOTM4ODQ0MzE5MCJdXV0sW251bGwsbnVsbCwxLDEsMV0sW251bGwsbnVsbCwiQ04iXV0oJ96A3HveY1LKBK0-1BZbBWSSBgb2nPy-R7LFSXcjWcP--bYK4cM1zeXWF6PjQzTfb9nm5PX9CShNfjEiLjY7mZVKL_SM1CVA0MmGk4qfbMvtXt4LALEV_IotniEEAk2LWuApVxgIDmt7-aqHmoJ-9TKAU-TdiUmIJHLzbHcclTy9go-vPq2DVpeio71pEnLvPc2koKo9YmuNdK2x-r9BHyBLTOOTdfLRO1zE_hDzePbi9DbQwHr4t1nGdcEn-pBw17JUlKzLNQmm0Oe5xRc6n-XqAu6iv3WA98flFIGlInIhC8tOXAl28I9Ynfgh0hnEmUtqMHuLVNpVDaUIvWU1,FkVrJfwrUWMG5mkBQ5xTyA\x26quot;,\x26quot;https://adssettings.google.com/whythisad?source\x3ddisplay\\u0026reasons\x3dAZhb-cAsYHpwwq0JHbBEYH8m3P9UtYc4MrOnt8rAChaZgXG-bOuGWStRmwpRRx0r2BV5pP0fwuy0cpXm4YHG9TsUAkpJjDOjD-bpt2z06tziH43c8yXO5lt-esK5UFh4eEyMJNTOyKHxEULbvLAFMiUzPAB40IQkESuNR3dF8MSqRzfiTAFKGgwK8HJhUVhaOv7LJEJiKu5RHxLbdntQ9iujkRrahcl7e3fofxNXgIP1iZcY4hCCxTnNCUzbXicCxhiKu59jnIeDu4gfZ1Mz0pXCqhs5y-6O3ZXXSl07js-kaE8_BYoJ-S0bWvc8N2ChstH1AvSCXiy53dNPerlHwKeU-_GN1dN-ulnUqnUbjrpANu3C1RZREM_-S_vht9CydL5LLkD72nvaEBvXUxTjPm2alevxCNxfMwcVRNbI9zSmnYIC8zn8sf_SYDtMjkf4L2Kx2SWCTFLBWoY3abyOKGfbuojNvo5idydMUOQOl27U1EdCUpC5YyDXE0a-7uhkuxY2F9j3I8qHEsMT-IaE6WP9iC8eiu6N7QJFkk912SOc9crODspDqoln0R4TUPB-Ysf6oHUHyopfR_K4jKoMgAgCPTsJG8Q-j8sOV7qxMbnkf1CIXPhiokaKs6_fH254TLQRgA2tFsjp-Yw-bxS73jHZEXagOU9e6lPpPS4XcbyJWt4c1QDg1zymQLnM2_k8lp_YL-iOM6CLIt8I61CTo_gV1vRsM-tHoKcHpry-pP_yvE0HgbKFZw0e2dugdgtrNqaJZM14JytF8rb0IqKOoabfLAfvsih6GHWY6_S1r13KPm2yDOD_MuqSSieWKj0CosXruer4kQEaeKJebTg8__F3uHTcPaSF0Ycf_10BYR4YTcv-WxjhaJYtBQhCkXC1OdgdQZDfwUfbyyua4u6JJBo9Lm-a2AxztQoRWP1PeKtwu26ay9GB2lIaAquaWASb60bYqKwXDkEjsvEU5QtJx7oAyXbZZyNQJF1BoDBHqUMYCsVV38ZlDFAzhGeGjzDvp9DjIViBD-5QIemOZaoN1DDj1mpYl7yylhnYmsPxOciikTKoxZqMtdKxCMkerAquGVr60WnIiOFW90T4Ra6hBHnr2vGhtSvXSw9CgyDD9FB9sdihWV-Ak0YwldmFX1akbDAaPbQ5aOiUnlZn5kLmiCL_2zyt-JjSbGhTnjYyZ8tduVPfRux1o4PR59EvenyIs8o8MoVQb0ZknTfQ5BnjxHph-9mcRYpyWOBQCEhWLTZ2dVIxU4MrvAfMK7lGPselDWp1V9jHrcUJloq4uNdl2wJTQGOUR8CrUTjCx7uUByfQ8DcL_o8whI8mp89euamLS1BJ6E-Ecp7RoqtXs9l2wUAQ4XIzZSFVb4IPnCwVffZu-r0cvwC0lgqOVq7wZAXdBLQM5aLj5LjQq4YDGrQC1GfmTydGrBKnUWVUd0WqTUMS-EuY3fJvmzMZv3Gkyrsgu9bmsxn-_gPB8ybYH2LjQrnnHr21q6XZpc2mRz2qQ2SoGLWmMo5H2XpxcL8zULudJokgtYu0fxUkS1ReIcPhJRp38Ez1qJnXEAu3jIV0sue1wDDJHQgAo_yyrZkWMORsiin06nczlI20-MH4nv1_UAdjxGFZLUAdGSjcfFn1OGRxm7gdQycdh6Y3qx1TxDqTds4vFJxK_RjvDpX5cEEFyy9p-kVP8WHf-ecgGqpQKjAxt1ctgtQgqvYOOJDoVLU\x26quot;,\x26quot;为什么显示此广告？\x26quot;,1,0],null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,1,0,null,[[\x26quot;jake_ui_extension\x26quot;,\x26quot;jake_default_ui\x26quot;]],250,300,0,null,null,0,null,null,\x26quot;right\x26quot;,0,0,\x26quot;r20230322/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');
if (!window.mraid) {
  document.write('\x3c/div\x3e');
}
(function () {
  (function () {
    var s = cc11001100_hook("s", document.createElement('script'), "var-init");
    s.setAttribute('data-jc', '86');
    s.src = cc11001100_hook("s.src", 'https://static.googleadsserving.cn/pagead/js/r20230322/r20110914/elements/html/omrhp.js', "assign");
    s.setAttribute('data-jc-version', 'r20230322');
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
    bvst: cc11001100_hook("bvst", 'r20230322', "object-key-init"),
    eeid: cc11001100_hook("eeid", 'mh8gZJZR7YWm3w-_zYyYDg', "object-key-init"),
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
    function Pa(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      if (null != a) {
        if (Array.isArray(a)) a = cc11001100_hook("a", e && 0 == a.length && G(a) & 1 ? void 0 : Qa(a, b, c, void 0 !== d, e), "assign");else if (I(a)) {
          var f = cc11001100_hook("f", {}, "var-init"),
            g;
          for (g in a) f[g] = cc11001100_hook("f[g]", Pa(a[g], b, c, d, e), "assign");
          a = cc11001100_hook("a", f, "assign");
        } else a = cc11001100_hook("a", b(a, d), "assign");
        return a;
      }
    }
    function Qa(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var f = cc11001100_hook("f", G(a), "var-init");
      d = cc11001100_hook("d", d ? !!(f & 16) : void 0, "assign");
      a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
      for (var g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) a[g] = cc11001100_hook("a[g]", Pa(a[g], b, c, d, e), "assign");
      c(f, a);
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
          if (f |= cc11001100_hook("f", 128, "assign"), 0 < a.length) {
            var k = cc11001100_hook("k", a[a.length - 1], "var-init");
            if (I(k) && "g" in k) {
              delete k.g;
              var h = cc11001100_hook("h", !0, "var-init"),
                l;
              for (l in k) {
                h = cc11001100_hook("h", !1, "assign");
                break;
              }
              h && a.pop();
            }
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
      var a = cc11001100_hook("a", this.o, "var-init"),
        b;
      Ia ? b = cc11001100_hook("b", a, "assign") : b = cc11001100_hook("b", Qa(a, Ra, Sa, void 0, !1), "assign");
      return b;
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
  window.stcc = cc11001100_hook("window.stcc", btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjsvcV043kHs-p_9e_2wN5Isnmv3LbmOGnkMJekfr2nQIyRABcqBb_hAJn6uaBv8-NuUN-cKHf-jlgmY1f1Jw7TVsz1mhkAuYm-1Ha62cim_Yx_3xK8QBs6hTu_TLMbSefo9mLMpmoSf1TmvSTRKJt_hVav9sc9ZL36q1LgDB_-V1a9HwT0VpxLi66_USaesLQQdK1CsKdpvAalgoMn3I3hE8ld8NGWapdWUE5GtRkX1Xg0Rb92gganECrkptAFyXQICZJbDcLzcu8qgniUm1Lk4TbxSZ0_FdqPlYb_M-Iy5zTUVdvMGqgKK6sBALKkSuVRU0n7-xf9d0BlVPnCGzzCvFZg3p9Me2NPzJ993F47cETloicIwEzS84uFXa1xWSmqQ88lpR5nNNSK8ZJxkByXbUNi8jo3AtJ1ZTj7sn66rt4ZeXVZAbtBHZMdm4HsbrIgRxsnfUqG2AVzeTKNV3Ca2vtBDDvvipODBpMP3E_SxNB856dHZLbJVEXpCk6OMtGoymDzVSf0ir5SjWlOW6K1xTgrRrqobShVKg1m4wf79Vt0TFSSIAwTyCTu8gvqIcXK1bhONRuMKwYhWxNLscFK7V10gKZrF-MSBnzg7Qwm1NsQxTkk-8q1GugUo9UARlu9lhgP9PUXPgqwZJW5q5i9rtbzaZe-T-B9nA2QU3Dk6ewR99VeofybHCV3eFXr5WgkTVVkxXjsQx743Yz6DoNYcFoeaVqLWUFcu4q-3p6JDfAroOGlepjbdcKZi2mi_niRLzptFD9YzHAvtP4CAyonc0bgAeHBrTZVVYUyHsZQOWEyRFy1HHwE1iSRDuK5g2Yk7ZjYbQa1YF2Lz8DJTTsK5MlRxoMDS_xNRcaagrtJgTm2TeVhWf8I-tq897uaWrZEEkbDeZRrynUh72S-862fhaDfrK_mTqsNFq6dyghgIVo4Xqh2WLUvF4VEO2dAb2rNgGntdp14lLokLtOGCAuVgP13ELOB-VdzwH4X5oR3U5qG1B0Tz66qJwRmTGGx0WVoFgAJSRABsZyPt2v3HK5lwHFJQGenTeM3WWt-g_YKcalNI1GkVcapTJFvipW367A0b-coe7o38IRv5jcuW5hgg5pYcUBrnn0agjR78Ge2GAGQFePRGvabzg7agueitaJvUeyhBEeDERspV-b987PKiIX9kcns8rjK7-NjcpEtLCmzszV-pd1cfJ7IYZG-DuGI6elFRjTIsmE5VDyqbcMdkljG45QKzD0MfDVBfGMnHD7sm9zg\x26sai\x3dAMfl-YTU-Jo0yUwyRCbSUociK_RD_owOzmwb7Qwg_rTKSFtoDhfTcwgnMN_0XbLiO70ziIm--qqkJ9r8j3yEsXh3P6riYqniZN5kCY3_qBeFZlw0EK6MW6uHDmeZfL-EUAT82rALlg9qg6HXZBoZkoVZz_vC1DPtEsS-ZZTjgfuML1ca0y-bPp_JY1NZqoCy8EONblTbhwCmkaY-l-5LWFwHncjTkFouTGv5JYVtoLvjvJfEbZSvlVYYY90pfSMPRj7z0B6Fv3U\x26sig\x3dCg0ArKJSzDoKpKaPmVMoEAE\x26uach_m\x3d[UACH]\x26cry\x3d1\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_mh8gZJZR7YWm3w-_zYyYDg")), "assign");
})();
(function () {
  (function () {
    (function () {
      var m = cc11001100_hook("m", document.createElement('meta'), "var-init");
      m.setAttribute('data-jc', '78');
      m.setAttribute('data-jc-version', 'r20230322');
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
    pdib3('https://analyticspixel.microsoft.com/aid/imp?dcmadvertiserid\x3d8391437\x26dcmcampaignid\x3d29121201\x26dcmadid\x3d546074410\x26dcmrenderingid\x3d183842082\x26dcmsiteid\x3d4091806\x26dcmplacementid\x3d354806054\x26customer\x3dMicrosoft\x26dv360auctionid\x3dABAjH0juD9WZs9J2kpCA_u-sZJ-9');
  })();
})();
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = cc11001100_hook("window.GoogleTyFxhY", [], "assign");
  }
  window.GoogleTyFxhY.push({
    '_scs_': cc11001100_hook('_scs_', 'BPlRHmh8gZJZR7YWm3w-_zYyYDgAAAAA4AeAEAg', "object-key-init"),
    '_bgu_': cc11001100_hook('_bgu_', 'https://pagead2.googlesyndication.com/bg/5ZLoQB_z02QzB_hHqtk5fVBr8jKba2eTnMK3sia1eD8.js', "object-key-init"),
    '_bgp_': cc11001100_hook('_bgp_', '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\x3d', "object-key-init"),
    '_ifr_': cc11001100_hook('_ifr_', 'false', "object-key-init")
  });
  var gsodar = cc11001100_hook("gsodar", document.createElement('script'), "var-init");
  gsodar.type = cc11001100_hook("gsodar.type", 'text/javascript', "assign");
  gsodar.async = cc11001100_hook("gsodar.async", true, "assign");
  gsodar.src = cc11001100_hook("gsodar.src", '//tpc.googlesyndication.com/sodar/UFYwWwmt.js', "assign");
  var s = cc11001100_hook("s", document.getElementsByTagName('script')[0], "var-init");
  s.parentNode.insertBefore(gsodar, s);
})();