if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_q1kDZLfPCb21vcAPt9-x8AE"\x3e');
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
clsn("gcc_q1kDZLfPCb21vcAPt9-x8AE");
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CPfQ7_fBwv0CFb1aDwIdt28MHg\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjsvNfca91lqEmFcy_U2rJ8zcDDVjWx2Z-qMuYr1irtZhHuufjdrfKe4AfcLNI5hX7L-C0_ABG1W59Gu1_LbD2Ofnoc9DM_H4KOPOqdLhDIuGfB06sd6tmPpz58Grjyg7p4jyi1oIc-c2vuy9X0cmErmtlwojuaWRFZBaQPb9m6JWkouknIwKWQ0ikoZzIN7tvZ8N4zJpvxRIXj7ME8-t43OrXg5CvYfQ90R0TBuO-8Vty7JKf-ILsRYRdCxsW4YVw4ZEOvtuECxyoCmUm9JUBFHnfqIadAWdSjgRZFXgf361vGsDSYIxV9kCZnyHsz-iGDxDBpTv_2o5R_yTauhh0qpiqFdHx129b2RgFN8VygoJPGV-HI8pyL3M5oMonESX3or9S82Pi7oMCJnaRAkeh8e2_xUgGX6VutQq4jd2K40ozU3jzmKxbvfxQLefOOhX76rIl2Ehq90Wuwe1sBYKxie_7RG3eboKSL7Aec2EXHxvFtZuq3rKmC47mI8rdmaVW5hX8pS3iDBHuis04LzvjmjObJbtRV9SLPIiGtsLx5r2W97F4UIOeq7Nc2W64u3WwyRP6vVSUYsx39PmjRY6rXTroO-7cmD8iQdTw6C2TSXjNNobuiMM7flofAyVr9NCRpstmytxSq3EeYsKT02O3EUELTnar9H0HqqVVCkpImz8gP6GAviQHyR8sqh9R6qNkUp_8rZbh3Q_Mt3DmiD2gUUQEl69CSERcdiizh03ES2cXtW38mCzdXs8T6agNyWDGL-ZDy0fE9T4MuWZK_CMNK6UhG0se_E0HnbqA0xcTyI0570t95TerSpPHchtYa4CxdnbxLbOR1VTc6D886pgKCLhqyPKQRfXlHIDCDSfN7NGXwMdnBZmEj1qrSFKloCndkPBZW5Ahabxmj-s37NkQDwA9Pt2oSVllAbdQB4SnuzU9gK0PkZbrDxZm3zIofZvWaYQaiqQF8pmFbDqUhWpl-WqqTTQg8uPDR_idv7Co01h03ueNp6hu4xXpjhf9fAJxY4M5GHdX-PDnn57yzQ_JLQOPNYpUssh9Ll9AweiUku6oRUTw2ceg3Fw7HyobEaf4mVb1UcqgGbUn_Myn-k3LRYgbOWDs98ze0J3QyIVBDr2KuAcoK1d-baWupyaaHAz6eqBV0lmMvPlj_djFLCzkbg8t2ILtSTmHDE_qamvrML7Oj0_9BEGo9Ib0Ocyw8al_0AW_UgwV3plurrzzQUaK5o6fE3tGNLewC8I1w\x26amp;sai\x3dAMfl-YS1I7A9KQBo8fg0T-xHjCJXKcrmeFAq67hN49CF9_AOJBlAihDUjHVR-1wsMVDIc8giw4dJTWDMvdrpKPJ5qK1EigAVXpwwE5mP9wN5VyOvcMcroY8u8PFAJW9zoCsShgduWihe_qqq6TgU6JErWIqH1QzquABkHxEVAKkNWZmNAroLnAsNO7UzYuNhNgPvj7-JajXfPHtV_Qjbmb9PHOuS7CdrpqQ5pLgz7b1i60LUdBpKGwD-JPiNfBqMnH-E6mfeRTBACSxp07U\x26amp;sig\x3dCg0ArKJSzHpqNtEWcdPz\x26amp;cry\x3d1\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://azure.microsoft.com/zh-cn/free/machine-learning/search/%3FOCID%3DAIDcmmknmz9ars_OLA_29121201_354805988_183726979%26dclid%3D%25edclid!\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/15997552878626009345\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22300\x22 height\x3d\x22600\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230301\x22 data-jcp-a-id\x3d\x22img_anch_CPfQ7_fBwv0CFb1aDwIdt28MHg\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var aa\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},l;if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)l\x3dObject.setPrototypeOf;else{var n;a:{var ba\x3d{a:!0},p\x3d{};try{p.__proto__\x3dba;n\x3dp.a;break a}catch(a){}n\x3d!1}l\x3dn?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var q\x3dl,r\x3dthis||self;var t,u;a:{for(var v\x3d[\x22CLOSURE_FLAGS\x22],w\x3dr,x\x3d0;x\x3cv.length;x++)if(w\x3dw[v[x]],null\x3d\x3dw){u\x3dnull;break a}u\x3dw}var y\x3du\x26\x26u[610401301];t\x3dnull!\x3dy?y:!1;var z,A\x3dr.navigator;z\x3dA?A.userAgentData||null:null;function B(a){return t?z?z.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function C(a){var b;a:{if(b\x3dr.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function E(){return t?!!z\x26\x260\x3cz.brands.length:!1}function F(){return E()?B(\x22Chromium\x22):(C(\x22Chrome\x22)||C(\x22CriOS\x22))\x26\x26!(E()?0:C(\x22Edge\x22))||C(\x22Silk\x22)};var ca\x3dE()?!1:C(\x22Trident\x22)||C(\x22MSIE\x22);!C(\x22Android\x22)||F();F();C(\x22Safari\x22)\x26\x26(F()||(E()?0:C(\x22Coast\x22))||(E()?0:C(\x22Opera\x22))||(E()?0:C(\x22Edge\x22))||(E()?B(\x22Microsoft Edge\x22):C(\x22Edg/\x22))||E()\x26\x26B(\x22Opera\x22));var G\x3d{},H\x3dnull;var da\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,ea\x3d!ca\x26\x26\x22function\x22\x3d\x3d\x3dtypeof r.btoa;var I\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0;function J(a){var b;I?b\x3da[I]:b\x3da.h;return null\x3d\x3db?0:b}function K(a,b){I?a[I]\x3db:void 0!\x3d\x3da.h?a.h\x3db:Object.defineProperties(a,{h:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a};var L\x3d{};function M(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var N,O\x3dObject.freeze(K([],23));function P(a){var b\x3da.length;(b\x3db?a[b-1]:void 0)\x26\x26M(b)?b.g\x3d1:(b\x3d{},a.push((b.g\x3d1,b)))};function Q(a){var b\x3da.l+a.j;return a.i||(a.i\x3da.h[b]\x3d{})};var R;function S(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22object\x22:if(a)if(Array.isArray(a)){if(0!\x3d\x3d(J(a)\x26128))return a\x3dArray.prototype.slice.call(a),P(a),a}else if(da\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(ea){for(var b\x3d\x22\x22;10240\x3ca.length;)b+\x3dString.fromCharCode.apply(null,a.subarray(0,10240)),a\x3da.subarray(10240);b+\x3dString.fromCharCode.apply(null,a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!H){H\x3d{};for(var g\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22), f\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22],c\x3d0;5\x3ec;c++){var d\x3dg.concat(f[c].split(\x22\x22));G[c]\x3dd;for(var e\x3d0;e\x3cd.length;e++){var h\x3dd[e];void 0\x3d\x3d\x3dH[h]\x26\x26(H[h]\x3de)}}}b\x3dG[b];g\x3dArray(Math.floor(a.length/3));f\x3db[64]||\x22\x22;for(c\x3dd\x3d0;d\x3ca.length-2;d+\x3d3){var m\x3da[d],k\x3da[d+1];h\x3da[d+2];e\x3db[m\x3e\x3e2];m\x3db[(m\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];g[c++]\x3de+m+k+h}e\x3d0;h\x3df;switch(a.length-d){case 2:e\x3da[d+1],h\x3db[(e\x2615)\x3c\x3c2]||f;case 1:a\x3da[d],g[c]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|e\x3e\x3e4]+h+f}a\x3dg.join(\x22\x22)}return a}}return a};function fa(a,b,g,f){if(null!\x3da){if(Array.isArray(a))a\x3dha(a,b,g,void 0!\x3d\x3df);else if(M(a)){var c\x3d{},d;for(d in a)c[d]\x3dfa(a[d],b,g,f);a\x3dc}else a\x3db(a,f);return a}}function ha(a,b,g,f){var c\x3dJ(a);f\x3df?!!(c\x2616):void 0;a\x3dArray.prototype.slice.call(a);for(var d\x3d0;d\x3ca.length;d++)a[d]\x3dfa(a[d],b,g,f);g(c,a);return a}function ia(a){return a.o\x3d\x3d\x3dL?a.toJSON():S(a)}function ja(a,b){a\x26128\x26\x26P(b)};function T(a,b,g,f){null\x3d\x3da\x26\x26(a\x3dR);R\x3dvoid 0;var c\x3dthis.constructor.h;if(null\x3d\x3da){a\x3dc?[c]:[];var d\x3d48;var e\x3d!0;f\x26\x26(d|\x3d128);K(a,d)}else{if(!Array.isArray(a))throw Error();if(c\x26\x26c!\x3d\x3da[0])throw Error();e\x3da;I?e\x3de[I]|\x3d0:void 0!\x3d\x3de.h?e\x3de.h|\x3d0:(Object.defineProperties(e,{h:{value:0,configurable:!0,writable:!0,enumerable:!1}}),e\x3d0);var h\x3de|32;e\x3d0!\x3d\x3d(16\x26h);if(f){if(!(h\x26128)\x26\x260\x3ca.length){var m\x3da[a.length-1];if(M(m)\x26\x26\x22g\x22in m){h|\x3d128;delete m.g;var k\x3d!0;for(d in m){k\x3d!1;break}k\x26\x26a.pop()}else throw Error();}}else if(128\x26 h)throw Error();K(a,h)}this.j\x3dc?0:-1;this.h\x3da;a:{d\x3dthis.h.length;c\x3dd-1;if(d\x26\x26(d\x3dthis.h[c],M(d))){this.i\x3dd;this.l\x3dc-this.j;break a}void 0!\x3d\x3db\x26\x26-1\x3cb?(this.l\x3dMath.max(b,c+1-this.j),this.i\x3dvoid 0):this.l\x3dNumber.MAX_VALUE}if(!f\x26\x26this.i\x26\x26\x22g\x22in this.i)throw Error(\x27Unexpected \x22g\x22 flag in sparse object of message that is not a group type.\x27);if(g){b\x3de\x26\x26!0;f\x3dthis.l;var D;for(e\x3d0;e\x3cg.length;e++)c\x3dg[e],c\x3cf?(c+\x3dthis.j,(d\x3da[c])?ka(d,b):a[c]\x3dO):(D||(D\x3dQ(this)),(d\x3dD[c])?ka(d,b):D[c]\x3dO)}} T.prototype.toJSON\x3dfunction(){var a\x3dthis.h;return N?a:ha(a,ia,ja)};function ka(a,b){if(Array.isArray(a)){var g\x3dJ(a),f\x3d1;!b||g\x262||(f|\x3d16);(g\x26f)!\x3d\x3df\x26\x26K(a,g|f)}}T.prototype.o\x3dL;T.prototype.toString\x3dfunction(){return this.h.toString()};function la(a,b){return S(b)};function U(a){T.call(this,a)}U.prototype\x3daa(T.prototype);U.prototype.constructor\x3dU;if(q)q(U,T);else for(var V in T)if(\x22prototype\x22!\x3dV)if(Object.defineProperties){var ma\x3dObject.getOwnPropertyDescriptor(T,V);ma\x26\x26Object.defineProperty(U,V,ma)}else U[V]\x3dT[V];var na\x3d/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function oa(a,b,g,f){var c\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return c?c[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+g+\x22\x26dim\x3d\x22+f)+c[2]:a}function pa(a){var b\x3da.currentTarget,g\x3db.querySelector(\x22img[alt]\x22);g\x26\x26(a\x3doa(b.href,+Math.round(a.clientX-g.offsetLeft),+Math.round(a.clientY-g.offsetTop),+g.width+\x22x\x22+ +g.height),na.test(a)\x26\x26(b.href\x3da))} function qa(a){var b\x3dr;var g\x3db\x3dvoid 0\x3d\x3d\x3db?window:b;b\x3dnew U;if(J(b.h)\x262)throw Error();b.m\x26\x26(b.m\x3dvoid 0);1\x3e\x3db.l?Q(b)[1]\x3da:(b.h[1+b.j]\x3da,(a\x3db.i)\x26\x261 in a\x26\x26delete a[1]);var f;if(null!\x3dg\x26\x26null!\x3d(f\x3dg.fence)){a\x3df.reportEvent;a:{N\x3d!0;try{var c\x3dJSON.stringify(b.toJSON(),la);break a}finally{N\x3d!1}c\x3dvoid 0}a.call(f,{eventType:\x22click\x22,eventData:c,destination:[\x22buyer\x22]})}} function ra(a,b){void 0!\x3dr.AFMA_Communicator\x26\x26void 0!\x3dr.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),r.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var W,X\x3ddocument.currentScript;W\x3d(X\x3dvoid 0\x3d\x3d\x3dX?null:X)\x26\x26\x2274\x22\x3d\x3d\x3dX.getAttribute(\x22data-jc\x22)?X:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dW)throw Error(\x22JSC not found 74\x22);for(var sa\x3d{},Y\x3dW.attributes,Z\x3dY.length-1;0\x3c\x3dZ;Z--){var ta\x3dY[Z].name;0\x3d\x3d\x3dta.indexOf(\x22data-jcp-\x22)\x26\x26(sa[ta.substring(9)]\x3dY[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),g\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],f\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],c\x3da[\x22cc-overlay\x22],d\x3da[\x22cc-button\x22],e\x3dc?document.getElementById(c):null,h\x3dd?document.getElementById(d):null;if(\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22]){var m\x3da[\x22turtlex-event-ad-signals\x22];h?h.addEventListener(\x22click\x22,function(){qa(m)}):b.addEventListener(\x22click\x22,function(){qa(m)})}else if(b.addEventListener(\x22mousedown\x22,pa),e\x26\x26h\x26\x26e.addEventListener(\x22mousedown\x22,function(k){k\x3doa(h.href, +Math.round(k.clientX-e.offsetLeft),+Math.round(k.clientY-e.offsetTop),+e.clientWidth+\x22x\x22+ +e.clientHeight);na.test(k)\x26\x26(h.href\x3dk)}),g||f)b.addEventListener(\x22click\x22,function(k){ra(k,f)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){ra(k,f)})})(sa);}).call(this);\x3c/script\x3e');
document.write('\x3c/div\x3e');
document.write('\x3cscript\x3e(function () {function addIcon(){var container \x3d document.getElementsByClassName(\x22GoogleActiveViewClass\x22)[0];if (!container) {setTimeout(addIcon, 500);return;}var imgElem \x3d document.createElement(\x27img\x27);imgElem.src\x3d\x22https://static.googleadsserving.cn/pagead/images/cn/google_ad_cccccc_08.png\x22;imgElem.id \x3d \x22chinese_ad_label\x22;imgElem.style.position \x3d \x22absolute\x22;imgElem.style.left \x3d \x220px\x22;imgElem.style.bottom \x3d \x220px\x22;imgElem.style.zIndex \x3d \x222147483647\x22;container.appendChild(imgElem);}addIcon();})();\x3c/script\x3e');
document.write('\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:24px;right:0px;top:0px;position:absolute;width:41px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:inline-block;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgc{cursor:pointer;}.cbb{cursor:pointer;height:15px;width:15px;z-index:2147483646;background-color:#ffffff;opacity:0;}.cbb svg{position:absolute;top:0;right:0;height:15px;width:15px;stroke:#00aecd;fill:#00aecd;stroke-width:1.25;}.abgb{position:absolute;right:16px;top:0px;}.cbb{position:absolute;right:0px;top:0px;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:36px;}.abgc .il-icon{height:15px;width:22px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 24 16\x22\x3e\x3cpath d\x3d\x22M10.90 4.69L10.90 5.57L3.17 5.57L3.17 7.22L3.17 7.22Q3.17 9.15 3.06 10.11L3.06 10.11L3.06 10.11Q2.95 11.07 2.58 11.92L2.58 11.92L2.58 11.92Q2.21 12.77 1.27 13.56L1.27 13.56L0.59 12.93L0.59 12.93Q2.29 11.82 2.29 8.66L2.29 8.66L2.29 4.69L6.11 4.69L6.11 2.95L7.00 2.95L7.00 4.69L10.90 4.69ZM23.00 7.34L23.00 8.22L12.80 8.22L12.80 7.34L17.55 7.34L17.55 5.53L15.12 5.53L15.12 5.53Q14.55 6.53 13.86 7.07L13.86 7.07L13.10 6.46L13.10 6.46Q14.44 5.46 14.95 3.33L14.95 3.33L15.84 3.55L15.84 3.55Q15.77 3.86 15.49 4.65L15.49 4.65L17.55 4.65L17.55 2.84L18.47 2.84L18.47 4.65L21.86 4.65L21.86 5.53L18.47 5.53L18.47 7.34L23.00 7.34ZM21.45 8.88L21.45 13.63L20.53 13.63L20.53 12.78L15.32 12.78L15.32 13.63L14.41 13.63L14.41 8.88L21.45 8.88ZM15.32 11.90L20.53 11.90L20.53 9.76L15.32 9.76L15.32 11.90Z\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://adssettings.google.com/whythisad?source\x3ddisplay\x26amp;reasons\x3dAaX5wMtZhNZ0IpDFjQ9nIzam1974cXRHIJc8J_Jr282zGzokyQmIstBbGTeaYzb9yLpCQeYRNNkfNZO5gdU-3QPDuTJpGl5qGDNA08sXt9ODYMGz3bzcg0EOzvHhoY2MdsbZSAFY1LTLLaG8sMI4wea5DF2M92IkcVUut8BhNODtY1sIpL6aP0SlPyDqFdLPFnSaqfQzL2wfVmhe0gMHwDzfYEEnacrX5Hau10S6bFiBGEXP8mn6wI4pFjfsaaxXoyoRhnbao3rEtN8DK4drGmC08kDr6ybRfyDNPr1VYOV5MEQrrCSLCY1btgrH-faEdmAGGRCsJHqhoOcRCzoeDGHLiFjvyw-BPA6uJcfPLizapdr2Bn9NuKZJsrJIejvVIbOHLuHhyxC1btb1bAzoknuh1guJgcEJaO6-_suhSHikgicmEDuErqvH4k6K5oeVeHbw6nY-slDaoRDQSqh9KOeTztUjEEuVxb6VMEcDkUTqChZM9VPUIbiVk9J7Ju0XQYUbRUy0R134Xf2WBeBgxOyweQf5KsmHeiC0vLwejSDZ5aP2iQivqhTOxNIztrmAfPpVFtaEBo8BZkjzmjj9NsO5X-i_edw4kgdUdPmKZ3MpcOngVevE14TAgjZqtov2Pz-HuNR8QZaMfOtDiRX8FEtU26HualVp4Y9yjKs8io-zyqQAAwC67OEPoks0T_Qo2EpLIyxoPgPG7PTnEh1IyUVVVd_QbTzJKE57BmJQwqsSaWZFMCTQ0fqon_QdWlIvZjLkVx-yjJhF414AbhI9QgC0etJ0XquyUrsnY-KNEndkAC6EgysyNKIzh3rjDU8I4RBcAgBpMK_RLsmc_d5MSuwTiccisVzMeqvuBAue-PK_R6M1nDzrYSaKr5KByVnfVm-7brx_YZBRAXTQEAvySIOqF5nUq1hO4X2FgjK9BgYkj3mZlcwIGD4kyScoMKBk9vhuk3o2x7T8m8yfxhdry8UvKFOn7h8sDxcueR_C9nYPRyxcU3rgJ6g2iVMVSzhciVmiP654l417j3Xv5RO-WHxh_CNja3YBcfhvDA4GXV9kpfrUNeNtF2XdRi75I9UHLfWkVdX4SeXAo1AqUIQnpxZyh3nV5orlbYscH__zRBqjyxGLzPE90V9saBkMUcVAlRd1ycoilV6hgkBGneG2p6qlat8V4n6Z5Oh3jG7N1_iCco0B6XJkuc5wmVHQwXHJWmOANHbs20-J9bNN9zzd9tK-Rw0R36gmQbq6FOexLIAW9xvGLbppgqhRo8yAnrHmy7Xr8En8O5K4nlZD2G1cNo9d0PZGCM9PIOuTvlougkX105Ga9a6kO_T2j00Ym7EZMEJnmQvQlSFgCELSP32J5JciobqhVaJ_sxwzRqDeLWzFHcKoRlK2Zsw5r4swulNvTs7zxUMNkaL6EmoqGB5JnetUlyMkR6LoVqGojVV0qQbiz6rNVbekLF_Eh4li18XCtef_366RjIGfv5cj__2roC7CnZsbJ8Vr41czAGEhYLqo3zpF6b-zCK7QaqFw4fN3WF5JQBcMxFsNupmg6hktcSTDj5pfVeU5nL_OYDJrhcY3Rnev4lGJY1prN1akoknf0a8K6Tqnal_RPWFm1jCQT-TB5_i1I4TbZYJ28FQsqYDwbc-asUyt4qM3833Z2O1_Axby73HaZ3YW6JvX\x22 target\x3d\x22_blank\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d\x22cbb\x22 class\x3d\x22cbb\x22 tabindex\x3d\x220\x22 role\x3d\x22button\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cstyle\x3e.mute_panel{z-index:2147483646;}.abgac{position:absolute;left:0px;top:0px;z-index:2147483646;display:none;width:100%;height:100%;background-color:#FAFAFA;}.mlsc{height:100%;display:flex;justify-content:center;align-items:center;}.mls{animation:mlskf 2s linear infinite;height:50%;width:50%;}.mlsd{stroke-dasharray:1,189;stroke-dashoffset:0;animation:mlsdkf 1.4s ease-in-out infinite;}@keyframes mlskf{100%{transform:rotate(360deg);}}@keyframes mlsdkf{0%{stroke-dasharray:1,189;stroke-dashoffset:0;}50%{stroke-dasharray:134,189;stroke-dashoffset:-53px;}100%{stroke-dasharray:134,189;stroke-dashoffset:-188px;}}\x3c/style\x3e\x3cdiv id\x3d\x22mute_panel\x22 class\x3d\x22mute_panel\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22abgac\x22 class\x3d\x22abgac\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22mlsc\x22 class\x3d\x22mlsc\x22\x3e\x3csvg class\x3d\x22mls\x22 viewBox\x3d\x2250 50 100 100\x22\x3e\x3ccircle class\x3d\x22mlsd\x22 cx\x3d\x22100\x22 cy\x3d\x22100\x22 r\x3d\x2230\x22 fill\x3d\x22none\x22 stroke\x3d\x22#9E9E9E\x22 stroke-width\x3d\x223\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://static.googleadsserving.cn/pagead/js/r20230301/r20110914/abg_lite.js\x22 data-jc-version\x3d\x22r20230301\x22 data-jcp-attribution-data\x3d\x22[[null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dCW1-FqFkDZJ6JMc2O29gPy8-1sA_p3_GPbpzN96-EEfLs0uCyARABILfIlAJgnQGgAY68oPUCyAEJqQIIzn5fm3CDPqgDAcgDmwSqBIQCT9CBjb2J8841KiWu-vWJITgB2O3WlUAkTcbvd-nfMlC1WgHr7r7RIA-vuGaXxfkhTl0Kylqz9ZtWgXz7BtBBs1wvBbPBBBkhH-BobCBFu6Y-AIoA4n9roi6gpuqIOB2VQ14WkZgQbzyqzTKhZfv47hGHOPAPuGj89d2jyF5IZVPuImWJwaESNJk2kJ6z-kiRa9IhxwABsrLPb88tAkGa10BHyAaTEwxWz1A4IbIZV8yE-FAnQyFYvKaf5D5HdDFq3AB4xknc03D99sZWyIL1vFHRS4gsvsowGehQuq3qIqaKTxhLPQJIIJkVdnED2xKt6Pcqva_qGwnzZG9aC_KbxpeEvJLABM6X_5iRBOAEA5AGAaAGTIAH2sPfigGoB47OG6gHk9gbqAfulrECqAf-nrECqAeko7ECqAfVyRuoB6a-G6gHmgaoB_PRG6gHltgbqAeqm7ECqAf_nrECqAffn7EC2AcA0ggPCIBhEAEYHzICigI6AoBAgAoBmAsByAsBgAwBsBOFzb4S0BMA2BMN2BQB0BUB-BYBgBcB\\u0026sigh\x3d9nKnEBuFvJs\\u0026cid\x3dCAQSOwDUE5ym6UCTCJS1l02SLhgpPeXZkn6qVGexn68TaHTkAzQoHGUl6EChcWlwUnrdqJxI8ucZLeLqn9BOGAE\x26quot;,\x26quot;_gfaWuRYk2oInM33r4QRELbUkJ1IGL6h_YoBIhNhenVyZS5taWNyb3NvZnQuY29tMggIBRMYi7USFEIXY2EtcHViLTEwNzY3MjQ3NzExOTA3MjJIBlgAcAE\x26quot;,[\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;\x26quot;,0],null,null,null,null,\x26quot;此广告有什么问题？\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/back_blue.png\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们将对此广告进行审核，以便改善您在今后的体验。\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们会根据您的反馈审核此网站上的广告。\x26quot;,null,null,null,\x26quot;即将关闭广告：%1$d 秒\x26quot;,\x26quot;谷歌广告\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/abg_blue.png\x26quot;,\x26quot;https://www.google.com/url?ct\x3dabg\\u0026q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://blog.csdn.net/lan128lan/article/details/108443034%26gl%3DCN%26hl%3Dzh%26ai0%3D\\u0026usg\x3dAOvVaw1hx4IXW-eHIsCwn_9Xh2jQ\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,0,[[\x26quot;停止显示此广告\x26quot;,[\x26quot;user_feedback_menu_option\x26quot;,\x26quot;1\x26quot;,1],[\x26quot;此广告有什么问题？\x26quot;,[[\x26quot;广告遮挡内容\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;3\x26quot;,1]],[\x26quot;对此广告不感兴趣\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;7\x26quot;,1]],[\x26quot;广告内容不当\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;8\x26quot;,1]],[\x26quot;多次看到此广告\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;2\x26quot;,1]]]],[\x26quot;user_feedback_undo\x26quot;,\x26quot;1\x26quot;,1]]],[\x26quot;https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png\x26quot;,\x26quot;广告选择\x26quot;,\x26quot;%1$s 已关闭此广告\x26quot;,null,\x26quot;https://www.gstatic.cn/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png\x26quot;,\x26quot;停止显示此广告\x26quot;,\x26quot;我们尽量不再显示该广告\x26quot;,null,null,null,null,null,null,\x26quot;查看我的 Google 广告设置\x26quot;,null,\x26quot;https://www.gstatic.cn\x26quot;,\x26quot;\x26quot;,\x26quot;%1$s 提供的广告\x26quot;,\x26quot;广告设置\x26quot;,\x26quot;https://adssettings.google.com\x26quot;,null,null,null,0,null,null,null,0],\x26quot;AB3afGEAAAVMW1tbW251bGwsWzEwXSxudWxsLG51bGwsbnVsbCxbIjgwMDEyIl1dLFtudWxsLCJodHRwczovL2dvb2dsZWFkcy5nLmRvdWJsZWNsaWNrLm5ldC9wYWdlYWQvaW50ZXJhY3Rpb24vP2FpPUNXMS1GcUZrRFpKNkpNYzJPMjlnUHk4LTFzQV9wM19HUGJwek45Ni1FRWZMczB1Q3lBUkFCSUxmSWxBSmduUUdnQVk2OG9QVUN5QUVKcVFJSXpuNWZtM0NEUHFnREFjZ0Rtd1NxQklRQ1Q5Q0JqYjJKODg0MUtpV3UtdldKSVRnQjJPM1dsVUFrVGNidmQtbmZNbEMxV2dIcjdyN1JJQS12dUdhWHhma2hUbDBLeWxxejladFdnWHo3QnRCQnMxd3ZCYlBCQkJraEgtQm9iQ0JGdTZZLUFJb0E0bjlyb2k2Z3B1cUlPQjJWUTE0V2taZ1FienlxelRLaFpmdjQ3aEdIT1BBUHVHajg5ZDJqeUY1SVpWUHVJbVdKd2FFU05KazJrSjZ6LWtpUmE5SWh4d0FCc3JMUGI4OHRBa0dhMTBCSHlBYVRFd3hXejFBNEliSVpWOHlFLUZBblF5Rll2S2FmNUQ1SGRERnEzQUI0eGtuYzAzRDk5c1pXeUlMMXZGSFJTNGdzdnNvd0dlaFF1cTNxSXFhS1R4aExQUUpJSUprVmRuRUQyeEt0NlBjcXZhX3FHd256Wkc5YUNfS2J4cGVFdkpMQUJNNlhfNWlSQk9BRUE1QUdBYUFHVElBSDJzUGZpZ0dvQjQ3T0c2Z0hrOWdicUFmdWxyRUNxQWYtbnJFQ3FBZWtvN0VDcUFmVnlSdW9CNmEtRzZnSG1nYW9CX1BSRzZnSGx0Z2JxQWVxbTdFQ3FBZl9uckVDcUFmZm43RUMyQWNBMGdnUENJQmhFQUVZSHpJQ2lnSTZBb0JBZ0FvQm1Bc0J5QXNCZ0F3QnNCT0Z6YjRTMEJNQTJCTU4yQlFCMEJVQi1CWUJnQmNCXHUwMDI2c2lnaD05bktuRUJ1RnZKc1x1MDAyNmNpZD1DQVFTT3dEVUU1eW02VUNUQ0pTMWwwMlNMaGdwUGVYWmtuNnFWR2V4bjY4VGFIVGtBelFvSEdVbDZFQ2hjV2x3VW5yZHFKeEk4dWNaTGVMcW45Qk9HQUUiLFtudWxsLG51bGwsbnVsbCwiaHR0cHM6Ly9kaXNwbGF5YWRzLWZvcm1hdHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2Fkcy9wcmV2aWV3L2NvbnRlbnQuanM_Y2xpZW50PXd0YVx1MDAyNm9iZnVzY2F0ZWRDdXN0b21lcklkPTY3Njc4MjM0MzhcdTAwMjZjcmVhdGl2ZUlkPTY0MTQ1MDM3ODU1Nlx1MDAyNnZlcnNpb25JZD0wXHUwMDI2YWRHcm91cENyZWF0aXZlSWQ9NTg1Mjg5ODE5ODA0XHUwMDI2aHRtbFBhcmVudElkPXByZXYtMFx1MDAyNnNpZz1BQ2lWQl93ai1yZHZ5eTBVckNhUVhINWR5SWpHT1FrWXd3Il0sbnVsbCxudWxsLDIsIl9nZmFXdVJZazJvSW5NMzNyNFFSRUxiVWtKMUlHTDZoX1lvQkloTmhlblZ5WlM1dGFXTnliM052Wm5RdVkyOXRNZ2dJQlJNWWk3VVNGRUlYWTJFdGNIVmlMVEV3TnpZM01qUTNOekV4T1RBM01qSklCbGdBY0FFIiwiMTkzODg0NDMxOTAiXV1dLFtudWxsLG51bGwsMSwxLDFdLFtudWxsLG51bGwsIkNOIl1dBqyUJGKeRZ3jiZj1UQHqkZpvHwPgeFrXN77BKW-xd77vG3KufW2_jOp1uPqMzzO1u1vtKz0Ddbn5yNANananRILq9Lj_qXggnFX6s3P6z0VwctwEKAXUAMLvgdrlhd0jg5-qw8a4iHVCJU0vck6UjBc1jL9bkhsS8VSoeZgohZ_XSDss80QK0zlMj3eeud7PG16nGM8mDSbSc0-xtAS7daoxuSJiSXu0K5l-PywhUw7WrSZaQTSxS5zx9mA8U6JTtCnZSsuV0i43Av2LR_3HEsRlw8QVtOC5gDgzXO7Y72Qos3HDBXdoeiZ1MKo9zQbOhBSiDR2NxtEz0hgSl5Ls4Q,kUOb_aSZBN8GGmYJPsamwA\x26quot;,\x26quot;https://adssettings.google.com/whythisad?source\x3ddisplay\\u0026reasons\x3dAaX5wMtZhNZ0IpDFjQ9nIzam1974cXRHIJc8J_Jr282zGzokyQmIstBbGTeaYzb9yLpCQeYRNNkfNZO5gdU-3QPDuTJpGl5qGDNA08sXt9ODYMGz3bzcg0EOzvHhoY2MdsbZSAFY1LTLLaG8sMI4wea5DF2M92IkcVUut8BhNODtY1sIpL6aP0SlPyDqFdLPFnSaqfQzL2wfVmhe0gMHwDzfYEEnacrX5Hau10S6bFiBGEXP8mn6wI4pFjfsaaxXoyoRhnbao3rEtN8DK4drGmC08kDr6ybRfyDNPr1VYOV5MEQrrCSLCY1btgrH-faEdmAGGRCsJHqhoOcRCzoeDGHLiFjvyw-BPA6uJcfPLizapdr2Bn9NuKZJsrJIejvVIbOHLuHhyxC1btb1bAzoknuh1guJgcEJaO6-_suhSHikgicmEDuErqvH4k6K5oeVeHbw6nY-slDaoRDQSqh9KOeTztUjEEuVxb6VMEcDkUTqChZM9VPUIbiVk9J7Ju0XQYUbRUy0R134Xf2WBeBgxOyweQf5KsmHeiC0vLwejSDZ5aP2iQivqhTOxNIztrmAfPpVFtaEBo8BZkjzmjj9NsO5X-i_edw4kgdUdPmKZ3MpcOngVevE14TAgjZqtov2Pz-HuNR8QZaMfOtDiRX8FEtU26HualVp4Y9yjKs8io-zyqQAAwC67OEPoks0T_Qo2EpLIyxoPgPG7PTnEh1IyUVVVd_QbTzJKE57BmJQwqsSaWZFMCTQ0fqon_QdWlIvZjLkVx-yjJhF414AbhI9QgC0etJ0XquyUrsnY-KNEndkAC6EgysyNKIzh3rjDU8I4RBcAgBpMK_RLsmc_d5MSuwTiccisVzMeqvuBAue-PK_R6M1nDzrYSaKr5KByVnfVm-7brx_YZBRAXTQEAvySIOqF5nUq1hO4X2FgjK9BgYkj3mZlcwIGD4kyScoMKBk9vhuk3o2x7T8m8yfxhdry8UvKFOn7h8sDxcueR_C9nYPRyxcU3rgJ6g2iVMVSzhciVmiP654l417j3Xv5RO-WHxh_CNja3YBcfhvDA4GXV9kpfrUNeNtF2XdRi75I9UHLfWkVdX4SeXAo1AqUIQnpxZyh3nV5orlbYscH__zRBqjyxGLzPE90V9saBkMUcVAlRd1ycoilV6hgkBGneG2p6qlat8V4n6Z5Oh3jG7N1_iCco0B6XJkuc5wmVHQwXHJWmOANHbs20-J9bNN9zzd9tK-Rw0R36gmQbq6FOexLIAW9xvGLbppgqhRo8yAnrHmy7Xr8En8O5K4nlZD2G1cNo9d0PZGCM9PIOuTvlougkX105Ga9a6kO_T2j00Ym7EZMEJnmQvQlSFgCELSP32J5JciobqhVaJ_sxwzRqDeLWzFHcKoRlK2Zsw5r4swulNvTs7zxUMNkaL6EmoqGB5JnetUlyMkR6LoVqGojVV0qQbiz6rNVbekLF_Eh4li18XCtef_366RjIGfv5cj__2roC7CnZsbJ8Vr41czAGEhYLqo3zpF6b-zCK7QaqFw4fN3WF5JQBcMxFsNupmg6hktcSTDj5pfVeU5nL_OYDJrhcY3Rnev4lGJY1prN1akoknf0a8K6Tqnal_RPWFm1jCQT-TB5_i1I4TbZYJ28FQsqYDwbc-asUyt4qM3833Z2O1_Axby73HaZ3YW6JvX\x26quot;,\x26quot;为什么显示此广告？\x26quot;,1,0],null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,1,0,null,[[\x26quot;jake_ui_extension\x26quot;,\x26quot;jake_default_ui\x26quot;]],600,300,0,null,null,0,null,null,\x26quot;right\x26quot;,0,0,\x26quot;r20230301/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');
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
    eeid: cc11001100_hook("eeid", 'q1kDZLfPCb21vcAPt9-x8AE', "object-key-init"),
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
  window.stcc = cc11001100_hook("window.stcc", btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjstf5TKwHZh5UQ7Rj_gNA6TqjCi8VmVaSHpxt9_hTHSOhj6Q4C33BPVgswBTIyyhmGE8UIOrDuubMuJ31g36zV7VeGCkBTi6UMkkItSqCKe5ku5McT0RLvJoT1jr6U9zLyYXZMo6z96R8mSjmWM6mperVoyw0Vt0vWQnUgt73eRJsHjoP5lrwIf9zGCf5c8ClVx1uTKKgDjH6AsDfU6k8hKmGD7Z6P9qxb0XdIhGQfEt64nR1Z7TSg2pQPvNBc8LXyAY7bVrXcHEmoI43Hdkq_3ciZlOyq-27PDtoBbnaa7XXFYTN5js9aloohtI0lQLCmZp_VM-J1kJxBd95zBMhRrP1i2pXXEFBV18OnoLIaiwkXAtMlqt-eChqhN_EHuRHJkdjuinZdjshhXrHFW-XQazc7n6OclE6HkYVprAr6mNYIn4Kx-CI1PPrv1rWUVrS9dRpphzGF3evkUdnUVSz2jg71M6igT97BhcnPQRE1-JitwdsBzQxpVgMIq7Z21akkSaZ_dK3bv_aY0dr1ZOEzyQGLglrWlP7pdOu5h3Zidtlk_CEOZjHGYnar8fD2UwowcwmUbLKmIFD7xNW2raKSVesvEyT4_X7Rv_tqTXVp6vLWuzW9360zObwtmrk-x6bsQ3JOwGC0tIaIt6ztBYEtXDha3gStUGYbVN5voUbiBc2meJpZyqyqv74FK1DbuIteZJoXroQ3RCWXmS3X4GbMexVM6r_nt5knBXs2AexzQQgQu1YcG9prC_oFIEJ-EHkdMAktQPKy_k9jkqBmdaeEl2toOEKZ2dWyvX4VEKtXYjtsl10-5hZG2OBg4Ak8zv0L2R5WYtDVaVlh_qTwt3XydG49DLzVeULJE2Qz0BZDBg5JIQTKw3BVqFaKqd8onn5tyt5hsknyRohRQWfec8C5A9O9ptWps7pkv00ri51HHv4NNaI-w_6n8DJVa87Dpa4YBoPqYu8bp6ALKjumUgN3fZLrnoV5FlUoJi04PIayyQLMt3UWtJtnMz6tUiaV2NttiHmxGR5C2e2a9a9Il-AjiR0BC9WP8QbqzbdijAXVp3s9ZFXGyIfW7GYE4SeTnh6AXSt7pl3BEaLP-VRLbb205DkKQoncq8veZL4hII-02Vglkwu9IlNAxY-7qwLu-3S5t_n9jkUfVp18EzEwBi0XAaJHDT67-VIvtA3z4nuPZhjSQo4HjLEaKI144ZJCADmZWLCCuL_A\x26sai\x3dAMfl-YS-s0D6Ro_Vh0J5UKpYNz5XlzwX_TDbJHqY8BbAu2gIXCyChhF9D-NBBP58zP6URRDZ8_OMtEIcMxO-tIRsiwg9RQ4JzIVWzy-VXZeUv4ai-MSA5bYVIDWWppYORMJypTbZGTX2jY2LvR0JNcALB8VTT3JD34GPqmW95iKKPUVgY0uIWam9GWokvP6KdJbQKVp2ALn4PAlwPcvCemrRajnQHzpAbLYiQ3VD0tLgiwA1hbjyiyDOwr0NCmNG0yKL_OY9\x26sig\x3dCg0ArKJSzOebrlu3u7qHEAE\x26uach_m\x3d[UACH]\x26cry\x3d1\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_q1kDZLfPCb21vcAPt9-x8AE")), "assign");
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
    pdib3('https://analyticspixel.microsoft.com/aid/imp?dcmadvertiserid\x3d8391437\x26dcmcampaignid\x3d29121201\x26dcmadid\x3d546074371\x26dcmrenderingid\x3d183841290\x26dcmsiteid\x3d4091806\x26dcmplacementid\x3d354805988\x26customer\x3dMicrosoft\x26dv360auctionid\x3dABAjH0hIRnzitrJrrKjycuijamYb');
  })();
})();
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = cc11001100_hook("window.GoogleTyFxhY", [], "assign");
  }
  window.GoogleTyFxhY.push({
    '_scs_': cc11001100_hook('_scs_', 'B41cfq1kDZLfPCb21vcAPt9-x8AEAAAAAOAHgBAI', "object-key-init"),
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