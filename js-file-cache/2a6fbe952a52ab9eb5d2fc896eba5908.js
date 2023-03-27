//tealium universal tag - utag.sync ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
window.cxDataLayer = cc11001100_hook("window.cxDataLayer", window.cxDataLayer || {}, "assign");
(function (d) {
  if (!/OptanonConsent=C0003:0/.test(d.cookie) && document.URL.indexOf("wechat_CN") == -1) {
    var url = cc11001100_hook("url", /^(www|holidays|book|discovery|flights|holiday|dining|shopping|wellness|pay)\./.test(d.domain) && !/\/(dev|qa)\/utag\.js/.test(d.cookie) ? "//cdn.optimizely.com/public/1370244502/s/web.js" : "//cdn.optimizely.com/public/1370244502/s/web_qa.js", "var-init");
    var s = cc11001100_hook("s", d.createElement('script'), "var-init");
    s.src = cc11001100_hook("s.src", url, "assign");
    s.async = cc11001100_hook("s.async", /\/(sc|en)_CN/.test(d.URL) ? true : false, "assign");
    d.head.appendChild(s);
  }
})(document);