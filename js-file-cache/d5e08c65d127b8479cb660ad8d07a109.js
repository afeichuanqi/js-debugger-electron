F.addLog("superman:components/tips", ["tipsClick", "activityClick"]);
F.module("superman:components/tips", function (require, exports, ctx) {
  function init() {
    var $lmLink = cc11001100_hook("$lmLink", $("#lm-new a"), "var-init");
    var activity = cc11001100_hook("activity", $("#bottom_layer .activity"), "var-init");
    if ($lmLink.size() > 0) {
      $lmLink.on("mousedown", function (e) {
        var $curLink = cc11001100_hook("$curLink", $(e.currentTarget), "var-init");
        ctx.fire("tipsClick", {
          showType: cc11001100_hook("showType", $curLink.data("dataType"), "object-key-init"),
          clkText: cc11001100_hook("clkText", $curLink.text(), "object-key-init"),
          clkImgUrl: cc11001100_hook("clkImgUrl", $curLink.find("img").attr("src"), "object-key-init")
        });
      });
    }
    if (activity.length > 0) {
      activity.on("mousedown", function () {
        ctx.fire("activityClick", {
          clickType: cc11001100_hook("clickType", "activity", "object-key-init")
        });
      });
    }
  }
  exports.init = cc11001100_hook("exports.init", init, "assign");
});