var ak_js = cc11001100_hook("ak_js", document.getElementById("ak_js"), "var-init");
if (!ak_js) {
  ak_js = cc11001100_hook("ak_js", document.createElement('input'), "assign");
  ak_js.setAttribute('id', 'ak_js');
  ak_js.setAttribute('name', 'ak_js');
  ak_js.setAttribute('type', 'hidden');
} else {
  ak_js.parentNode.removeChild(ak_js);
}
ak_js.setAttribute('value', new Date().getTime());
var commentForm = cc11001100_hook("commentForm", document.getElementById('commentform'), "var-init");
if (commentForm) {
  commentForm.appendChild(ak_js);
} else {
  var replyRowContainer = cc11001100_hook("replyRowContainer", document.getElementById('replyrow'), "var-init");
  if (replyRowContainer) {
    var children = cc11001100_hook("children", replyRowContainer.getElementsByTagName('td'), "var-init");
    if (children.length > 0) {
      children[0].appendChild(ak_js);
    }
  }
}