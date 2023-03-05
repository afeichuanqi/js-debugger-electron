window.__baidu_dup_jobruner = cc11001100_hook("window.__baidu_dup_jobruner", {}, "assign");
try {
  var storage = cc11001100_hook("storage", window.localStorage, "var-init");
  if (storage && storage.removeItem) {
    var time = cc11001100_hook("time", new Date().getTime(), "var-init");
    storage.setItem('___ds_storage__isblock', '0|' + time);
  }
} catch (e) {}