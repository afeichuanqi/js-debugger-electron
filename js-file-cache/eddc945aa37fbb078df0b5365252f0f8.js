if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_yh8gZJTQHeXCvcAP--ScmAg"\x3e');
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
clsn("gcc_yh8gZJTQHeXCvcAP--ScmAg");
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CJTd3eiy-f0CFWVhDwIdezIHgw\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjssdNcvhjm8Nt_Ket5HGn8pZ3gNd8pHWf0Te_Ws-WtWKBrF5RtBJYzXmwRJSk4JQFj3zRUAg0bkWhfS-08MPGw7fSXmH0YhtbTPYjWKMyITZdLfkx5fLEJ5oQMwyU4CN9A4-4NQNdRi3kFpT0fCu0jjx6cFxpC0pRQT9igGkqJaPAzm4vyZDoyCiKs9lB6J6xQIy5EnPb1Je7otLIzU6MY4zrDg39u8IBG1AYziN3EjoeIcPsEI7BHpTjT3eTfhRV9rcFYiqU7BPZA09pLvHYNMBDpvxlGM-cal7smcy9x99D7i97ZzCDem0KrSY75SF1eRvd3pcpCXYByvMxylRhOt4d6O81q5mzCrURvnydXNpWxNTMq2lIBCMhGjOwKYHwuo5mp9-ImVHBZ6YOZtzhSkP19SwukMllqfadaO6ayjP22j0Vy89NiTAz4O1vopqvSnYJmLt4uSlcCQnY25Pcl3fhcq9nGN4WC7SeiDFDKAu4UzAorlpvtTB8vvpOz1aRbNU8pGwamEBH4e_Sjz7j0rx5sRUp-l2HZ5_G8Absiwbp88kr6SrVKAYGIRrZq488UzcXolb88xzzGV4IyVTEjM1WvKnP6G-MpBEU5K8e6nzkXmDUJJ1cfjPU8KFM0rQ_gQT9q_enPKMkpowhftDdSH-pa9J4UJkDGzK7dTl7oQlfESswQHOQ6d7lVgIx1hk-cApFuFJEXufTAJHI7JopiS4RSSrYZShz9D9wtImy14L4NhJSo889jwQgs5XNPyQWI2nWrZAi0FdXUT1-go5s-TK25ceO0b9sdPijKTVSeyoXydWeGx3a-2uXr-iXjp3DbPHkKPyiEPgZCSzDasbOmyw12Fto4p2drd707d6E78f5afMmiJeo3841jDC1afjxt6FDdAPSmo97-etTpbACrO2PhU_188MDtENjSnul7r9Jsa7g9AMrzoBRxOqYltnPjsfjNu-3ME0Hw4XrTHxFFYJ0w5oCG9Q5n1nJCzH0dKV08R8Ly6ux_BwfbEMijhpWIKmSlfPEY0KTBoFAVpTJSBfBknELN7Ci7wNQ6cPU5FHREBLzqiWxTYUFbCSM7KEd6bfDQqohTjf0J2iP3UYsZ9pjDK-0WXtd5Z_iriglb0lMoGRWq216oqSD4Kkm_1oK_dpC1BeZoosUbblSg6sieJ7YCG_scr7m6zDYkYf_8wyrjhxXXBM7jDoAvV1HEAzSvMIF71gwny4veEB5C1o8cKrjdM9-snFpiithVxz3bnQPUqdXSnNOZMn7o31HK38f5TalFaOkGhT3U1S-DFfRA\x26amp;sai\x3dAMfl-YT9BzzhB-mk__Vu6hYKROngn6IKluOf_-TZ421G8xD1YY1yQIYYTKriAeJMIiYc9x5bTvPFhUMPg2tsfJvI0hGdHDm6qw1iD151BWfHh8PkpaNooUs2_rQTZFw2TEcEylRhdnklZEh5nbZR6u5OPkWER4A3MCyqFm2_eTZF203LYR8DzBLZiaBy7Aco31V3piNiMqfYDvlLm036ygd4_4zEW0DcNtPB1F-5qqqhZHBQ4LCMUxtgBtw0M59mqC64bPf5yrhwvfK7zU3nmw\x26amp;sig\x3dCg0ArKJSzJrZBMeQkI-1\x26amp;cry\x3d1\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://azure.microsoft.com/zh-cn/free/search/%3FOCID%3DAIDcmmknmz9ars_OLA_29121201_354806054_183728371%26dclid%3D%25edclid!\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/13701804595609803887\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22300\x22 height\x3d\x22250\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230322\x22 data-jcp-a-id\x3d\x22img_anch_CJTd3eiy-f0CFWVhDwIdezIHgw\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var aa\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},l;if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)l\x3dObject.setPrototypeOf;else{var n;a:{var ba\x3d{a:!0},p\x3d{};try{p.__proto__\x3dba;n\x3dp.a;break a}catch(a){}n\x3d!1}l\x3dn?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var q\x3dl,r\x3dthis||self;var t,u;a:{for(var v\x3d[\x22CLOSURE_FLAGS\x22],w\x3dr,x\x3d0;x\x3cv.length;x++)if(w\x3dw[v[x]],null\x3d\x3dw){u\x3dnull;break a}u\x3dw}var y\x3du\x26\x26u[610401301];t\x3dnull!\x3dy?y:!1;var z,A\x3dr.navigator;z\x3dA?A.userAgentData||null:null;function B(a){return t?z?z.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function C(a){var b;a:{if(b\x3dr.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function E(){return t?!!z\x26\x260\x3cz.brands.length:!1}function F(){return E()?B(\x22Chromium\x22):(C(\x22Chrome\x22)||C(\x22CriOS\x22))\x26\x26!(E()?0:C(\x22Edge\x22))||C(\x22Silk\x22)};var ca\x3dE()?!1:C(\x22Trident\x22)||C(\x22MSIE\x22);!C(\x22Android\x22)||F();F();C(\x22Safari\x22)\x26\x26(F()||(E()?0:C(\x22Coast\x22))||(E()?0:C(\x22Opera\x22))||(E()?0:C(\x22Edge\x22))||(E()?B(\x22Microsoft Edge\x22):C(\x22Edg/\x22))||E()\x26\x26B(\x22Opera\x22));var G\x3d{},H\x3dnull;var da\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,ea\x3d!ca\x26\x26\x22function\x22\x3d\x3d\x3dtypeof r.btoa;var I\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0;function J(a){var b;I?b\x3da[I]:b\x3da.h;return null\x3d\x3db?0:b}function K(a,b){I?a[I]\x3db:void 0!\x3d\x3da.h?a.h\x3db:Object.defineProperties(a,{h:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a};var L\x3d{};function M(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var N,O\x3dObject.freeze(K([],23));function P(a){var b\x3da.length;(b\x3db?a[b-1]:void 0)\x26\x26M(b)?b.g\x3d1:(b\x3d{},a.push((b.g\x3d1,b)))};function Q(a){var b\x3da.l+a.j;return a.i||(a.i\x3da.h[b]\x3d{})};var R;function S(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22object\x22:if(a)if(Array.isArray(a)){if(0!\x3d\x3d(J(a)\x26128))return a\x3dArray.prototype.slice.call(a),P(a),a}else if(da\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(ea){for(var b\x3d\x22\x22;10240\x3ca.length;)b+\x3dString.fromCharCode.apply(null,a.subarray(0,10240)),a\x3da.subarray(10240);b+\x3dString.fromCharCode.apply(null,a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!H){H\x3d{};for(var g\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22), f\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22],d\x3d0;5\x3ed;d++){var e\x3dg.concat(f[d].split(\x22\x22));G[d]\x3de;for(var c\x3d0;c\x3ce.length;c++){var h\x3de[c];void 0\x3d\x3d\x3dH[h]\x26\x26(H[h]\x3dc)}}}b\x3dG[b];g\x3dArray(Math.floor(a.length/3));f\x3db[64]||\x22\x22;for(d\x3de\x3d0;e\x3ca.length-2;e+\x3d3){var m\x3da[e],k\x3da[e+1];h\x3da[e+2];c\x3db[m\x3e\x3e2];m\x3db[(m\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];g[d++]\x3dc+m+k+h}c\x3d0;h\x3df;switch(a.length-e){case 2:c\x3da[e+1],h\x3db[(c\x2615)\x3c\x3c2]||f;case 1:a\x3da[e],g[d]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|c\x3e\x3e4]+h+f}a\x3dg.join(\x22\x22)}return a}}return a};function fa(a,b,g,f,d){if(null!\x3da){if(Array.isArray(a))a\x3dd\x26\x260\x3d\x3da.length\x26\x26J(a)\x261?void 0:ha(a,b,g,void 0!\x3d\x3df,d);else if(M(a)){var e\x3d{},c;for(c in a)e[c]\x3dfa(a[c],b,g,f,d);a\x3de}else a\x3db(a,f);return a}}function ha(a,b,g,f,d){var e\x3dJ(a);f\x3df?!!(e\x2616):void 0;a\x3dArray.prototype.slice.call(a);for(var c\x3d0;c\x3ca.length;c++)a[c]\x3dfa(a[c],b,g,f,d);g(e,a);return a}function ia(a){return a.o\x3d\x3d\x3dL?a.toJSON():S(a)}function ja(a,b){a\x26128\x26\x26P(b)};function T(a,b,g,f){null\x3d\x3da\x26\x26(a\x3dR);R\x3dvoid 0;var d\x3dthis.constructor.h;if(null\x3d\x3da){a\x3dd?[d]:[];var e\x3d48;var c\x3d!0;f\x26\x26(e|\x3d128);K(a,e)}else{if(!Array.isArray(a))throw Error();if(d\x26\x26d!\x3d\x3da[0])throw Error();c\x3da;I?c\x3dc[I]|\x3d0:void 0!\x3d\x3dc.h?c\x3dc.h|\x3d0:(Object.defineProperties(c,{h:{value:0,configurable:!0,writable:!0,enumerable:!1}}),c\x3d0);var h\x3dc|32;c\x3d0!\x3d\x3d(16\x26h);if(f){if(h|\x3d128,0\x3ca.length){var m\x3da[a.length-1];if(M(m)\x26\x26\x22g\x22in m){delete m.g;var k\x3d!0;for(e in m){k\x3d!1;break}k\x26\x26a.pop()}}}else if(128\x26h)throw Error();K(a, h)}this.j\x3dd?0:-1;this.h\x3da;a:{e\x3dthis.h.length;d\x3de-1;if(e\x26\x26(e\x3dthis.h[d],M(e))){this.i\x3de;this.l\x3dd-this.j;break a}void 0!\x3d\x3db\x26\x26-1\x3cb?(this.l\x3dMath.max(b,d+1-this.j),this.i\x3dvoid 0):this.l\x3dNumber.MAX_VALUE}if(!f\x26\x26this.i\x26\x26\x22g\x22in this.i)throw Error(\x27Unexpected \x22g\x22 flag in sparse object of message that is not a group type.\x27);if(g){b\x3dc\x26\x26!0;f\x3dthis.l;var D;for(c\x3d0;c\x3cg.length;c++)d\x3dg[c],d\x3cf?(d+\x3dthis.j,(e\x3da[d])?ka(e,b):a[d]\x3dO):(D||(D\x3dQ(this)),(e\x3dD[d])?ka(e,b):D[d]\x3dO)}} T.prototype.toJSON\x3dfunction(){var a\x3dthis.h,b;N?b\x3da:b\x3dha(a,ia,ja,void 0,!1);return b};function ka(a,b){if(Array.isArray(a)){var g\x3dJ(a),f\x3d1;!b||g\x262||(f|\x3d16);(g\x26f)!\x3d\x3df\x26\x26K(a,g|f)}}T.prototype.o\x3dL;T.prototype.toString\x3dfunction(){return this.h.toString()};function la(a,b){return S(b)};function U(a){T.call(this,a)}U.prototype\x3daa(T.prototype);U.prototype.constructor\x3dU;if(q)q(U,T);else for(var V in T)if(\x22prototype\x22!\x3dV)if(Object.defineProperties){var ma\x3dObject.getOwnPropertyDescriptor(T,V);ma\x26\x26Object.defineProperty(U,V,ma)}else U[V]\x3dT[V];var na\x3d/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function oa(a,b,g,f){var d\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return d?d[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+g+\x22\x26dim\x3d\x22+f)+d[2]:a}function pa(a){var b\x3da.currentTarget,g\x3db.querySelector(\x22img[alt]\x22);g\x26\x26(a\x3doa(b.href,+Math.round(a.clientX-g.offsetLeft),+Math.round(a.clientY-g.offsetTop),+g.width+\x22x\x22+ +g.height),na.test(a)\x26\x26(b.href\x3da))} function qa(a){var b\x3dr;var g\x3db\x3dvoid 0\x3d\x3d\x3db?window:b;b\x3dnew U;if(J(b.h)\x262)throw Error();b.m\x26\x26(b.m\x3dvoid 0);1\x3e\x3db.l?Q(b)[1]\x3da:(b.h[1+b.j]\x3da,(a\x3db.i)\x26\x261 in a\x26\x26delete a[1]);var f;if(null!\x3dg\x26\x26null!\x3d(f\x3dg.fence)){a\x3df.reportEvent;a:{N\x3d!0;try{var d\x3dJSON.stringify(b.toJSON(),la);break a}finally{N\x3d!1}d\x3dvoid 0}a.call(f,{eventType:\x22click\x22,eventData:d,destination:[\x22buyer\x22]})}} function ra(a,b){void 0!\x3dr.AFMA_Communicator\x26\x26void 0!\x3dr.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),r.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var W,X\x3ddocument.currentScript;W\x3d(X\x3dvoid 0\x3d\x3d\x3dX?null:X)\x26\x26\x2274\x22\x3d\x3d\x3dX.getAttribute(\x22data-jc\x22)?X:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dW)throw Error(\x22JSC not found 74\x22);for(var sa\x3d{},Y\x3dW.attributes,Z\x3dY.length-1;0\x3c\x3dZ;Z--){var ta\x3dY[Z].name;0\x3d\x3d\x3dta.indexOf(\x22data-jcp-\x22)\x26\x26(sa[ta.substring(9)]\x3dY[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),g\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],f\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],d\x3da[\x22cc-overlay\x22],e\x3da[\x22cc-button\x22],c\x3dd?document.getElementById(d):null,h\x3de?document.getElementById(e):null;if(\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22]){var m\x3da[\x22turtlex-event-ad-signals\x22];h?h.addEventListener(\x22click\x22,function(){qa(m)}):b.addEventListener(\x22click\x22,function(){qa(m)})}else if(b.addEventListener(\x22mousedown\x22,pa),c\x26\x26h\x26\x26c.addEventListener(\x22mousedown\x22,function(k){k\x3doa(h.href, +Math.round(k.clientX-c.offsetLeft),+Math.round(k.clientY-c.offsetTop),+c.clientWidth+\x22x\x22+ +c.clientHeight);na.test(k)\x26\x26(h.href\x3dk)}),g||f)b.addEventListener(\x22click\x22,function(k){ra(k,f)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){ra(k,f)})})(sa);}).call(this);\x3c/script\x3e');
document.write('\x3c/div\x3e');
document.write('\x3cscript\x3e(function () {function addIcon(){var container \x3d document.getElementsByClassName(\x22GoogleActiveViewClass\x22)[0];if (!container) {setTimeout(addIcon, 500);return;}var imgElem \x3d document.createElement(\x27img\x27);imgElem.src\x3d\x22https://static.googleadsserving.cn/pagead/images/cn/google_ad_cccccc_08.png\x22;imgElem.id \x3d \x22chinese_ad_label\x22;imgElem.style.position \x3d \x22absolute\x22;imgElem.style.left \x3d \x220px\x22;imgElem.style.bottom \x3d \x220px\x22;imgElem.style.zIndex \x3d \x222147483647\x22;container.appendChild(imgElem);}addIcon();})();\x3c/script\x3e');
document.write('\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:13px;right:0px;top:0px;position:absolute;width:41px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:inline-block;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgc{cursor:pointer;}.cbb{cursor:pointer;height:15px;width:15px;z-index:2147483646;background-color:#ffffff;opacity:0;}.cbb svg{position:absolute;top:0;right:0;height:15px;width:15px;stroke:#00aecd;fill:#00aecd;stroke-width:1.25;}.abgb{position:absolute;right:16px;top:0px;}.cbb{position:absolute;right:0px;top:0px;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:36px;}.abgc .il-icon{height:15px;width:22px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 24 16\x22\x3e\x3cpath d\x3d\x22M10.90 4.69L10.90 5.57L3.17 5.57L3.17 7.22L3.17 7.22Q3.17 9.15 3.06 10.11L3.06 10.11L3.06 10.11Q2.95 11.07 2.58 11.92L2.58 11.92L2.58 11.92Q2.21 12.77 1.27 13.56L1.27 13.56L0.59 12.93L0.59 12.93Q2.29 11.82 2.29 8.66L2.29 8.66L2.29 4.69L6.11 4.69L6.11 2.95L7.00 2.95L7.00 4.69L10.90 4.69ZM23.00 7.34L23.00 8.22L12.80 8.22L12.80 7.34L17.55 7.34L17.55 5.53L15.12 5.53L15.12 5.53Q14.55 6.53 13.86 7.07L13.86 7.07L13.10 6.46L13.10 6.46Q14.44 5.46 14.95 3.33L14.95 3.33L15.84 3.55L15.84 3.55Q15.77 3.86 15.49 4.65L15.49 4.65L17.55 4.65L17.55 2.84L18.47 2.84L18.47 4.65L21.86 4.65L21.86 5.53L18.47 5.53L18.47 7.34L23.00 7.34ZM21.45 8.88L21.45 13.63L20.53 13.63L20.53 12.78L15.32 12.78L15.32 13.63L14.41 13.63L14.41 8.88L21.45 8.88ZM15.32 11.90L20.53 11.90L20.53 9.76L15.32 9.76L15.32 11.90Z\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://adssettings.google.com/whythisad?source\x3ddisplay\x26amp;reasons\x3dAZhb-cDjOJyiaycR_RanjNfbBX-y8YlF36FlMFlMzHlITYTDvTQXJeAc-YzyBrcgPBWFHhsQzbKDdaL49wCA8mBHdR0lOmJkDHiGxzi24qkqT7KrE2weQXEd_oOUr7-3CohvB5LxpI7Ef7tr0dgQ44RxmGN-g9PArs-rHlLsCLgr7cduPNpAMP80NrZJ9e8CEhByAfsEV2mBMwkRytgdMhPQQhvssJE4v6_0_TOpIXUQF00qBTkz5bqqKBWpnouuxFJOK-u20aOyxJBzLUdkGokswzbUhwMXj8ofDUWbs8GWQm9N30R3tBMD6FCckuPHcsR-VlReUau1tl_KkdlmlWZPpx0cNGsLLiSpIsSoZiTqnWqrQ6NYPc4ig9SvIGrfspwH_zAa5fQEVGD1oVmp4DD_8HejQvmG30zv14RXzdQLL2_TZBKwrI7lnifl2S-ZP2S1gQAk6brWB-38cInlXkSqq2FFv-WGU9MqCJrxyPY-19MZlEDYOcyXBEIjqMDdIEk_4lG02z8p8kOFC9Yf8-mhHBXyT7Gj9OVJFEh9M8u2juLFTGaPM7b66tF7mWMI8RGYoLfMe3Axdtu3ivjxssbt98R57qhMiHc3uP4GOoDwwEEMyOe5WkKFfR03YVH1xl89sBcNW2A4eMIuC7JfmW9ynPTXidWq8BQqExrePUodOCYrN5jXduTpr6kyStBBgyva__y-Ut3M_0wLyuMTu97GKXSmBAgRzNEaTBCeimPpXYvDO9lfp-vfqBuKJzFbmEpD14yd37C2nGUwWz5kfqfw3XdRmTr6TIHxmGoNPS6ok_jYtpTwtJL_FF6VAPjtJOwptlrwUH_cPGAL1RO7ReKqqHK6Ci7oFCffo0w_1c_8ou48mlVZlwFkdCCKWmUql0vJMR4RnO_jOnIjpTEOGyQTpI28nIi8mrDi_7QqMQj8PKK5eCmYP_oRbdJxNBmDK9ohlW_xIpIk_iFJ_vbhieJ52hbZodiFBgZElIYEym8xW1ELVM1T2uSx-EnssaVpliAqXKP-LdGviYNnD1_kCKoqc08pw3dPliA7OOn-jARlr7i9aXxu2nIzFJIjCnWOBQjtSIyhzi7KUoEJtEF6Zf2aJJJ0CMeginqVK8Iv0klxmHCw8FMasCb9wQ-SGLVCAsuzn4YH25D_y6vknUsVFoltq6OGqEalHjk5u07kIo8heBhAUl2ec24lNXVOK8ohsdO6FQFIkGasV_JqFyThi8xYd5UNNyGBnpAYNJGaieLp48G81jSM6xCECSFEXXtPZf0oJoU7X3HJ9ROCLtFrTTF5LaJohL7JC2lBQwtw11KE0-AAtbDwZjKlm3oqeynREv3vJwYTHDoCr9rGAFqWAzbRtnE4cihi0vJDnhOhF-X2MqiWrpomszlzvs599cmR6yLznUf3tKadrTRoE6O76zC8YN-w77gBq4uc2DQpZNGeujloGo0cmfIczU3RWWn4EGS8Z1aIVahRisjxKWP9wmXhMV_gAOn4yyR-3WT5rsymhFyVUG1ovQEyPEFJVn9ampQtg6m8hxG0o8mrdr-N3Hbk-9sCRlAfCoAfTKZd8nhJ_UjLTwrcsFhcVUJT23QOGRcd8-unGL6AR4iEPKQcI3BtrNcbb7rMzt9nPH_xTk2e21DM0ncsRdHL8nUG4aeRfkDOVDO3fxXVxp2LTWyXfZHYUmlWKlXTpJU0M2neBao53jqQhYTcMY0taUmWNPc\x22 target\x3d\x22_blank\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d\x22cbb\x22 class\x3d\x22cbb\x22 tabindex\x3d\x220\x22 role\x3d\x22button\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cstyle\x3e.mute_panel{z-index:2147483646;}.abgac{position:absolute;left:0px;top:0px;z-index:2147483646;display:none;width:100%;height:100%;background-color:#FAFAFA;}.mlsc{height:100%;display:flex;justify-content:center;align-items:center;}.mls{animation:mlskf 2s linear infinite;height:50%;width:50%;}.mlsd{stroke-dasharray:1,189;stroke-dashoffset:0;animation:mlsdkf 1.4s ease-in-out infinite;}@keyframes mlskf{100%{transform:rotate(360deg);}}@keyframes mlsdkf{0%{stroke-dasharray:1,189;stroke-dashoffset:0;}50%{stroke-dasharray:134,189;stroke-dashoffset:-53px;}100%{stroke-dasharray:134,189;stroke-dashoffset:-188px;}}\x3c/style\x3e\x3cdiv id\x3d\x22mute_panel\x22 class\x3d\x22mute_panel\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22abgac\x22 class\x3d\x22abgac\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22mlsc\x22 class\x3d\x22mlsc\x22\x3e\x3csvg class\x3d\x22mls\x22 viewBox\x3d\x2250 50 100 100\x22\x3e\x3ccircle class\x3d\x22mlsd\x22 cx\x3d\x22100\x22 cy\x3d\x22100\x22 r\x3d\x2230\x22 fill\x3d\x22none\x22 stroke\x3d\x22#9E9E9E\x22 stroke-width\x3d\x223\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://static.googleadsserving.cn/pagead/js/r20230322/r20110914/abg_lite.js\x22 data-jc-version\x3d\x22r20230322\x22 data-jcp-attribution-data\x3d\x22[[null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dC_6Y4yR8gZNiUN5bhqAGI26iwC-nf8Y9upNH3r4QRxMCdm-oBEAEg0aXiKGCdAaABjryg9QLIAQmpAheSVUhii4M-qAMByAObBKoEmAJP0CawcHIScmpyxbalEKZUNs1Eq7sSrlJNK6J_sGyluoN4gDAvDKXfyWioG3NfmquKpXRZAtNrZBcn0Kh1ev4RYmh7IJH3hzvBHq7ZpwUSdHHz9rTjvjPwnf8uvNgmv45mTMc27QlgUFDVk8ay9EV8thSKCb4kvklgMnetxOswSiIM1K-nvXYqqxr0vywTQGows8dPM4_PRN-H7j6T0SGtRmtfVosUEhpHqtPNuTksMu6wMiLUyka3JyzXNd4ulidjSDhoEoLy4zR2ysUGzE0fGTUa7MMuRWDTThwQgyqZZ3ZS7hFj-Tl0CcRo2V2TiLaaRJMU-eO4KLJ19e8nnGUM5I4J1IiXXnFGgShnQ2QZe1Wm0ogv6-kDwATOl_-YkQTgBAOQBgGgBkyAB9rD34oBqAeOzhuoB5PYG6gH7paxAqgH_p6xAqgHpKOxAqgH1ckbqAemvhuoB5oGqAfz0RuoB5bYG6gHqpuxAqgHg62xAqgH_56xAqgH35-xAtgHANIIDwiAYRABGB0yAooCOgKAQIAKA5gLAcgLAYAMAbAT08TVEtATANgTDdgUAdAVAfgWAYAXAQ\\u0026sigh\x3d9cAOmMVh4o4\\u0026cid\x3dCAQSPADUE5ym2IHznQRfym3jGftb-YcSql9D58VgD1bxHZUTL2szoEarih-6ng2UG9vc7TsKiQ0SD5GkFKw-chgB\x26quot;,\x26quot;CDEwhhWenc0IpNH3r4QRELbUkJ1IGL6h_YoBIhNhenVyZS5taWNyb3NvZnQuY29tMggIBRMYi7USFEIXY2EtcHViLTg1NzkzMDAzODk5ODg4MTlIBlgAcAE\x26quot;,[\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;\x26quot;,0],null,null,null,null,\x26quot;此广告有什么问题？\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/back_blue.png\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们将对此广告进行审核，以便改善您在今后的体验。\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们会根据您的反馈审核此网站上的广告。\x26quot;,null,null,null,\x26quot;即将关闭广告：%1$d 秒\x26quot;,\x26quot;谷歌广告\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/abg_blue.png\x26quot;,\x26quot;https://www.google.com/url?ct\x3dabg\\u0026q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://www.cnblogs.com/xiaoxiaoluoye/p/6945044.html%26gl%3DCN%26hl%3Dzh%26ai0%3D\\u0026usg\x3dAOvVaw28DfJOO-qSASfMTisWXY4N\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,0,[[\x26quot;停止显示此广告\x26quot;,[\x26quot;user_feedback_menu_option\x26quot;,\x26quot;1\x26quot;,1],[\x26quot;此广告有什么问题？\x26quot;,[[\x26quot;对此广告不感兴趣\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;7\x26quot;,1]],[\x26quot;广告遮挡内容\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;3\x26quot;,1]],[\x26quot;多次看到此广告\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;2\x26quot;,1]],[\x26quot;广告内容不当\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;8\x26quot;,1]]]],[\x26quot;user_feedback_undo\x26quot;,\x26quot;1\x26quot;,1]]],[\x26quot;https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png\x26quot;,\x26quot;广告选择\x26quot;,\x26quot;%1$s 已关闭此广告\x26quot;,null,\x26quot;https://www.gstatic.cn/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png\x26quot;,\x26quot;停止显示此广告\x26quot;,\x26quot;我们尽量不再显示该广告\x26quot;,null,null,null,null,null,null,\x26quot;查看我的 Google 广告设置\x26quot;,null,\x26quot;https://www.gstatic.cn\x26quot;,\x26quot;\x26quot;,\x26quot;%1$s 提供的广告\x26quot;,\x26quot;广告设置\x26quot;,\x26quot;https://adssettings.google.com\x26quot;,null,null,null,0,null,null,null,0],\x26quot;AB3afGEAAAVvW1tbW251bGwsWzEwXSxudWxsLG51bGwsbnVsbCxbIjgwMzA0Il1dLFtudWxsLCJodHRwczovL2dvb2dsZWFkcy5nLmRvdWJsZWNsaWNrLm5ldC9wYWdlYWQvaW50ZXJhY3Rpb24vP2FpPUNfNlk0eVI4Z1pOaVVONWJocUFHSTI2aXdDLW5mOFk5dXBOSDNyNFFSeE1DZG0tb0JFQUVnMGFYaUtHQ2RBYUFCanJ5ZzlRTElBUW1wQWhlU1ZVaGlpNE0tcUFNQnlBT2JCS29FbUFKUDBDYXdjSElTY21weXhiYWxFS1pVTnMxRXE3c1NybEpOSzZKX3NHeWx1b040Z0RBdkRLWGZ5V2lvRzNOZm1xdUtwWFJaQXROclpCY24wS2gxZXY0UlltaDdJSkgzaHp2QkhxN1pwd1VTZEhIejlyVGp2alB3bmY4dXZOZ212NDVtVE1jMjdRbGdVRkRWazhheTlFVjh0aFNLQ2I0a3ZrbGdNbmV0eE9zd1NpSU0xSy1udlhZcXF4cjB2eXdUUUdvd3M4ZFBNNF9QUk4tSDdqNlQwU0d0Um10ZlZvc1VFaHBIcXRQTnVUa3NNdTZ3TWlMVXlrYTNKeXpYTmQ0dWxpZGpTRGhvRW9MeTR6UjJ5c1VHekUwZkdUVWE3TU11UldEVFRod1FneXFaWjNaUzdoRmotVGwwQ2NSbzJWMlRpTGFhUkpNVS1lTzRLTEoxOWU4bm5HVU01STRKMUlpWFhuRkdnU2huUTJRWmUxV20wb2d2Ni1rRHdBVE9sXy1Za1FUZ0JBT1FCZ0dnQmt5QUI5ckQzNG9CcUFlT3podW9CNVBZRzZnSDdwYXhBcWdIX3A2eEFxZ0hwS094QXFnSDFja2JxQWVtdmh1b0I1b0dxQWZ6MFJ1b0I1YllHNmdIcXB1eEFxZ0hnNjJ4QXFnSF81NnhBcWdIMzUteEF0Z0hBTklJRHdpQVlSQUJHQjB5QW9vQ09nS0FRSUFLQTVnTEFjZ0xBWUFNQWJBVDA4VFZFdEFUQU5nVERkZ1VBZEFWQWZnV0FZQVhBUVx1MDAyNnNpZ2g9OWNBT21NVmg0bzRcdTAwMjZjaWQ9Q0FRU1BBRFVFNXltMklIem5RUmZ5bTNqR2Z0Yi1ZY1NxbDlENThWZ0QxYnhIWlVUTDJzem9FYXJpaC02bmcyVUc5dmM3VHNLaVEwU0Q1R2tGS3ctY2hnQiIsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Rpc3BsYXlhZHMtZm9ybWF0cy5nb29nbGV1c2VyY29udGVudC5jb20vYWRzL3ByZXZpZXcvY29udGVudC5qcz9jbGllbnQ9d3RhXHUwMDI2b2JmdXNjYXRlZEN1c3RvbWVySWQ9Njc2NzgyMzQzOFx1MDAyNmNyZWF0aXZlSWQ9NjQxNTcyOTczMjY3XHUwMDI2dmVyc2lvbklkPTBcdTAwMjZhZEdyb3VwQ3JlYXRpdmVJZD01ODUyODk4MjAzMjRcdTAwMjZodG1sUGFyZW50SWQ9cHJldi0wXHUwMDI2c2lnPUFDaVZCX3hHSEE5Zk1DaG9tNjhhZXpCWVVyRFhSRjBLS2ciXSxudWxsLG51bGwsMiwiQ0RFd2hoV2VuYzBJcE5IM3I0UVJFTGJVa0oxSUdMNmhfWW9CSWhOaGVuVnlaUzV0YVdOeWIzTnZablF1WTI5dE1nZ0lCUk1ZaTdVU0ZFSVhZMkV0Y0hWaUxUZzFOemt6TURBek9EazVPRGc0TVRsSUJsZ0FjQUUiLCIxOTM4ODQ0MzE5MCJdXV0sW251bGwsbnVsbCwxLDEsMV0sW251bGwsbnVsbCwiQ04iXV0Rnc0QIcopEmWJkxdSo5P2i-9PuvoxHDkBKM3SxhQtvxQwe6juDWUyRTKOAI7sc0gkobgwGps-7Bn78ZEAnOIgfWa__y4j1Mie7vczTVPsQ8lR--qOYoOR9WAark9Imsm-k7pzMoSjXV47H8v9xw2pfags1XkBrGfNYrgRcvyyQ-qH4gwRbwWkRbtG9X6GC0D-GCYOx26y4Kwubm5o-EQOiSN07SCocuD59qcKO8BV_20yp0-3HEmxzSDVNsX00ncOAeeoJ0KIXFrPn71c9P4IULqDLXB2chkGsg0rsgku_UlKQOsd6UYPNibfNi49LIbDy9IcwBMheJV2x7C9TtwV,HnCr4GXWtv7hj8Cu2OJ89w\x26quot;,\x26quot;https://adssettings.google.com/whythisad?source\x3ddisplay\\u0026reasons\x3dAZhb-cDjOJyiaycR_RanjNfbBX-y8YlF36FlMFlMzHlITYTDvTQXJeAc-YzyBrcgPBWFHhsQzbKDdaL49wCA8mBHdR0lOmJkDHiGxzi24qkqT7KrE2weQXEd_oOUr7-3CohvB5LxpI7Ef7tr0dgQ44RxmGN-g9PArs-rHlLsCLgr7cduPNpAMP80NrZJ9e8CEhByAfsEV2mBMwkRytgdMhPQQhvssJE4v6_0_TOpIXUQF00qBTkz5bqqKBWpnouuxFJOK-u20aOyxJBzLUdkGokswzbUhwMXj8ofDUWbs8GWQm9N30R3tBMD6FCckuPHcsR-VlReUau1tl_KkdlmlWZPpx0cNGsLLiSpIsSoZiTqnWqrQ6NYPc4ig9SvIGrfspwH_zAa5fQEVGD1oVmp4DD_8HejQvmG30zv14RXzdQLL2_TZBKwrI7lnifl2S-ZP2S1gQAk6brWB-38cInlXkSqq2FFv-WGU9MqCJrxyPY-19MZlEDYOcyXBEIjqMDdIEk_4lG02z8p8kOFC9Yf8-mhHBXyT7Gj9OVJFEh9M8u2juLFTGaPM7b66tF7mWMI8RGYoLfMe3Axdtu3ivjxssbt98R57qhMiHc3uP4GOoDwwEEMyOe5WkKFfR03YVH1xl89sBcNW2A4eMIuC7JfmW9ynPTXidWq8BQqExrePUodOCYrN5jXduTpr6kyStBBgyva__y-Ut3M_0wLyuMTu97GKXSmBAgRzNEaTBCeimPpXYvDO9lfp-vfqBuKJzFbmEpD14yd37C2nGUwWz5kfqfw3XdRmTr6TIHxmGoNPS6ok_jYtpTwtJL_FF6VAPjtJOwptlrwUH_cPGAL1RO7ReKqqHK6Ci7oFCffo0w_1c_8ou48mlVZlwFkdCCKWmUql0vJMR4RnO_jOnIjpTEOGyQTpI28nIi8mrDi_7QqMQj8PKK5eCmYP_oRbdJxNBmDK9ohlW_xIpIk_iFJ_vbhieJ52hbZodiFBgZElIYEym8xW1ELVM1T2uSx-EnssaVpliAqXKP-LdGviYNnD1_kCKoqc08pw3dPliA7OOn-jARlr7i9aXxu2nIzFJIjCnWOBQjtSIyhzi7KUoEJtEF6Zf2aJJJ0CMeginqVK8Iv0klxmHCw8FMasCb9wQ-SGLVCAsuzn4YH25D_y6vknUsVFoltq6OGqEalHjk5u07kIo8heBhAUl2ec24lNXVOK8ohsdO6FQFIkGasV_JqFyThi8xYd5UNNyGBnpAYNJGaieLp48G81jSM6xCECSFEXXtPZf0oJoU7X3HJ9ROCLtFrTTF5LaJohL7JC2lBQwtw11KE0-AAtbDwZjKlm3oqeynREv3vJwYTHDoCr9rGAFqWAzbRtnE4cihi0vJDnhOhF-X2MqiWrpomszlzvs599cmR6yLznUf3tKadrTRoE6O76zC8YN-w77gBq4uc2DQpZNGeujloGo0cmfIczU3RWWn4EGS8Z1aIVahRisjxKWP9wmXhMV_gAOn4yyR-3WT5rsymhFyVUG1ovQEyPEFJVn9ampQtg6m8hxG0o8mrdr-N3Hbk-9sCRlAfCoAfTKZd8nhJ_UjLTwrcsFhcVUJT23QOGRcd8-unGL6AR4iEPKQcI3BtrNcbb7rMzt9nPH_xTk2e21DM0ncsRdHL8nUG4aeRfkDOVDO3fxXVxp2LTWyXfZHYUmlWKlXTpJU0M2neBao53jqQhYTcMY0taUmWNPc\x26quot;,\x26quot;为什么显示此广告？\x26quot;,1,0],null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,1,0,null,[[\x26quot;jake_ui_extension\x26quot;,\x26quot;jake_default_ui\x26quot;]],250,300,0,null,null,0,null,null,\x26quot;right\x26quot;,0,0,\x26quot;r20230322/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');
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
    eeid: cc11001100_hook("eeid", 'yh8gZJTQHeXCvcAP--ScmAg', "object-key-init"),
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
  window.stcc = cc11001100_hook("window.stcc", btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjsvsjIIAQNpJcZlZbAcuh_6EMJUrtO8IZ-r3oHsS_ShVZegk66g7cNj0eQGLnt2zJmRREO5bMX39eQjJEFFNc6ai3_E34Stj8dv-8C7pCIt2BXPc5Xh8X18jGVivGJYysThcbyd4mZ-yHggPSnWJh46USSVXcNUZ1tThMTqevdlJqelQscPpsE5S3iDR2swqCG72IiKGca217GmhdZEC3otV9mPuyfOwQrPp_A6DR-rh7pSu2n37kZoVfGPutf-65RValV8tut5b7cgu0ZiFekXirLJEL_3YyJNoXz95qr2evVmw4ErqPrRYg1c5Qw3IKuj0153SEByM_IvpftL7n115iVx5Ckqv3IIdcdwVZfcFa-KLS9bFkI43ciVozyu1ZJfXrjdNcPtw1yMSjRlgHMHQUabIwARLuKwjfd6Peg_dpOozL68MRSuRuUvh0s_UZtDGf9ubj_yLCXKidFq1_18deMCvRvmX_dec6usQKpOZS35bw7AQMt2CAVInImmVUopwKRpzTNmfljEdpwkGXGnoX2ZKfDV7lKmNDBlxW7WdmsRIPZ4-fmtk3pDCXqCzjd7OdI-03Ala3h1YNym2cNbFWOYnMjR0S-5hze56rj1rIimNyDX1nIQG1fd4dOTQCA2bXck-WPDEQFOcYyR6AmT7eQE2IB8SOU0yt8LdZMiTWqWvdpzBprcwq3STty1LC58SJ9ZD_myRfymKB7OvQAc-iOfyE4_-eZvp5uuykN8IL9gwBzTWNCJL__aQyzVZgc9UXyoP1iZyMkZfXFObd5G5ZmnHGzgtEpmzopVb7ysMvjo7UegiF8ZuYh5J6kpRzgsvohDfO-YMRNcADOO2EWljblM1jpvRpUZF5rFeddxKm3FTgn8-p40mDmoKenqvIcO1iowW0t9YCeDn3ioRVtvOgboNQoArHJe87u1I7WsBw_UN9sWtNhH3FJbraRAiveqX_GCJJBUUMDDeAzOlG5df6oc0hkV4HVh6H-zwtbsJL-DWDV-WEs8QQPs-RJHtctNgVdBnT8Q96DvK5DsUFDRSzLlMgmZPfKFxomBatGyZIRTb1voHoG66uGDPq56YpXaO4xaFNMYg58Yz4evAJIWG5-QNcDrYdE3JWc28P_WZMH8BhO4cFAyFq9aady4ileW-IwWF2eoESP52ZF7Yzy8IwRLew_jXetU8fMWQkEJsjlc5Oqcus1mU1b35eiygnSHXWqjKBHpvDD8zNaiq0HipRI7PRFPBsgDerBoDft2fZfynZg\x26sai\x3dAMfl-YT8qh6WwmfORi7_Ku95nBQYTcMy-rPFz2Ho5VqUrCvSFNkKoeJP_pXxyerOpqHHX7xLrMRNacQZl5PddRuoMKcdah7I0sTJD4v6YGpUp11w0ADkVJdoFT7nMdMkpHFiw3JMbV-9v7ItPinWzq_nh9ywe3ifO7kIk9LyUHOUJ3i518ULf17M1GHKb-8awiETEo54qpErr0IlTZt9WRYHLw2NqjCGUR49nKBVIlVXYTXeUklB2G6SNNR7KFoos3WkqVve9kA\x26sig\x3dCg0ArKJSzPrTnhmp8vDeEAE\x26uach_m\x3d[UACH]\x26cry\x3d1\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_yh8gZJTQHeXCvcAP--ScmAg")), "assign");
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
    pdib3('https://analyticspixel.microsoft.com/aid/imp?dcmadvertiserid\x3d8391437\x26dcmcampaignid\x3d29121201\x26dcmadid\x3d546074410\x26dcmrenderingid\x3d183842082\x26dcmsiteid\x3d4091806\x26dcmplacementid\x3d354806054\x26customer\x3dMicrosoft\x26dv360auctionid\x3dABAjH0jcpiYI7csb80FPN3_UgSYf');
  })();
})();
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = cc11001100_hook("window.GoogleTyFxhY", [], "assign");
  }
  window.GoogleTyFxhY.push({
    '_scs_': cc11001100_hook('_scs_', 'B1oBjyh8gZJTQHeXCvcAP--ScmAgAAAAAOAHgBAI', "object-key-init"),
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