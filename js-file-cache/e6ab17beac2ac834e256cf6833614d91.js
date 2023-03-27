// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function login(anchor) {
  cc11001100_hook("anchor", anchor, "function-parameter");
  var returnUri = cc11001100_hook("returnUri", location.href, "var-init");
  if (anchor && returnUri.indexOf("#" + anchor) < 0) {
    returnUri += cc11001100_hook("returnUri", "#" + anchor, "assign");
  }
  location.href = cc11001100_hook("location.href", "https://account.cnblogs.com/signin?returnUrl=" + encodeURIComponent(returnUri), "assign");
  return false;
}
function logout() {
  if (confirm("确认退出吗？")) {
    $.ajax({
      type: cc11001100_hook("type", "POST", "object-key-init"),
      url: cc11001100_hook("url", "https://account.cnblogs.com/signout", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", true, "object-key-init")
      },
      complete: function (xhr) {
        if (xhr.status == 200) {
          location.reload(true);
        }
      }
    });
  }
  return false;
}
function register() {
  location.href = cc11001100_hook("location.href", "https://account.cnblogs.com/signup?returnUrl=" + encodeURIComponent(location.href), "assign");
  return false;
}
function LoadUserInfo() {
  var data = cc11001100_hook("data", "<a href=https://home.cnblogs.com/u/dacc123>Shendu.CC</a>·<a id=user_nav_blog_link href='https://www.cnblogs.com/dacc123/'>我的博客</a>·<a href='https://msg.cnblogs.com/'>短消息<span id=msg_count></span></a>·<a href='https://home.cnblogs.com/set/'>设置</a>·<a href=# onclick='logout();return false'>退出</a><span id=current_spaceId style=display:none>948150</span>", "var-init");
  $("#span_userinfo").html(data);
  /*var prefixUrl = 'https://account.cnblogs.com';
   $.ajax({
       url: prefixUrl + '/user/userinfo',
       dataType: 'html',
       xhrFields: { withCredentials: true },
       success: function (data) {
           alert("ok");
           $("#span_userinfo").html(data);
           /*var spacerUserId = parseInt($("#current_spaceId").html());
           if (spacerUserId > 0) {
               $.ajax({
                   url: prefixUrl + '/user/NewMsgCount',
                   data: 'spaceUserId=' + spacerUserId,
                   dataType: 'jsonp',
                   success: function (data) {
                       if (data) {
                           $("#msg_count").html('(' + data + ')').show();
                       }
                   }
               });
           }*/
  // }
  //});
}

function search() {
  var keywords = cc11001100_hook("keywords", $("#searchText").val(), "var-init");
  window.open("https://zzk.cnblogs.com/s?t=b&w=" + encodeURIComponent(keywords));
}
$(function () {
  //LoadUserInfo();
  $("#searchText").keypress(function (e) {
    if (e.which == 13) {
      search();
    }
  });
  var pageIndex = cc11001100_hook("pageIndex", getQueryVariable("page"), "var-init");
  if (!pageIndex) pageIndex = cc11001100_hook("pageIndex", 1, "assign");
  var postId = cc11001100_hook("postId", window.location.pathname.split("/").slice(-1)[0], "var-init");
  var pageId = cc11001100_hook("pageId", "page-" + pageIndex, "var-init");
  var nextPageId;
  var prePageId;
  var pageNum = cc11001100_hook("pageNum", $('#pages').children('a').length - 2, "var-init");
  if (pageIndex == pageNum) {
    nextPageId = cc11001100_hook("nextPageId", 1, "assign");
  } else nextPageId = cc11001100_hook("nextPageId", parseInt(pageIndex) + 1, "assign");
  if (pageIndex == 1) {
    prePageId = cc11001100_hook("prePageId", pageNum, "assign");
  } else {
    prePageId = cc11001100_hook("prePageId", parseInt(pageIndex) - 1, "assign");
  }
  $("#" + pageId).addClass("page-current");
  $("#pagePre").attr("href", "/blogpost/" + postId + "?page=" + prePageId);
  $("#pageNext").attr("href", "/blogpost/" + postId + "?page=" + nextPageId);
});
function selfIsNaN(value) {
  cc11001100_hook("value", value, "function-parameter");
  return value !== value;
}
function getQueryVariable(variable) {
  cc11001100_hook("variable", variable, "function-parameter");
  var query = cc11001100_hook("query", window.location.search.substring(1), "var-init");
  var vars = cc11001100_hook("vars", query.split("&"), "var-init");
  for (var i = cc11001100_hook("i", 0, "var-init"); i < vars.length; i++) {
    var pair = cc11001100_hook("pair", vars[i].split("="), "var-init");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
$(document).ready(function () {
  $("#u-info-menu").click(function () {
    $("#u-info-display").toggle();
  });
});