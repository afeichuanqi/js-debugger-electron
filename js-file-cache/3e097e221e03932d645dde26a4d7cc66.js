$(function () {
  deliverR2();
});
function loadRecommDocuments(postId, pageIndex) {
  cc11001100_hook("postId", postId, "function-parameter");
  cc11001100_hook("pageIndex", pageIndex, "function-parameter");
  $.ajax({
    url: cc11001100_hook("url", "/blogpost/" + postId + "/related?page=" + pageIndex, "object-key-init"),
    type: cc11001100_hook("type", "get", "object-key-init"),
    dataType: cc11001100_hook("dataType", "text", "object-key-init"),
    success: function (data) {
      if (data && data.length > 10) {
        $("#related_blogposts").html(data);
      }
    }
  });
}
function clickRecommItem(sourceId, itemId) {
  cc11001100_hook("sourceId", sourceId, "function-parameter");
  cc11001100_hook("itemId", itemId, "function-parameter");
  var clickItem = cc11001100_hook("clickItem", {
    itemId: cc11001100_hook("itemId", itemId, "object-key-init"),
    sourceId: cc11001100_hook("sourceId", sourceId, "object-key-init")
  }, "var-init");
  $.ajax({
    url: cc11001100_hook("url", "/api/v2/recomm/blogpost/click-item2", "object-key-init"),
    type: cc11001100_hook("type", "POST", "object-key-init"),
    data: cc11001100_hook("data", JSON.stringify(clickItem), "object-key-init"),
    contentType: cc11001100_hook("contentType", "application/json; charset=utf-8", "object-key-init"),
    dataType: cc11001100_hook("dataType", "json", "object-key-init")
  });
}
function deliverR2() {
  if (screen.width < 500) {
    $('r2').html("<div id='div-gpt-ad-1601039933444-0' style='width: 234px; height: 60px;'>" + "<script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1601039933444-0'); });</script></div>");
  }
}