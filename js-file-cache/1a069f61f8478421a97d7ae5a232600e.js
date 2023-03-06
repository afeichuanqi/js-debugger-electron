define(function (require, exports, module) {
  J = cc11001100_hook("J", jQuery, "assign");
  var global = cc11001100_hook("global", require('global'), "var-init");
  require('layer');
  require('viewer');
  require('jqueryMoreContent');
  require('prettify');
  layer.config({
    path: cc11001100_hook("path", '/lib/layer/', "object-key-init")
  });
  prettyPrint();
  $('.img-view').viewer();
  $('.more-content').moreContent({
    height: cc11001100_hook("height", 300, "object-key-init"),
    shadow: cc11001100_hook("shadow", true, "object-key-init")
  });

  // $(function () {
  //     $('.more-content').moreContent({
  //         height: 1000,
  //         shadow: true
  //     });
  // });

  /**
   * 关注问题
   */
  $(".js-question-focus").click(function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    questionId = cc11001100_hook("questionId", curObj.attr("data-id"), "assign");
    $.post("/question/focus", {
      questionId: cc11001100_hook("questionId", questionId, "object-key-init")
    }, function (result) {
      if (result.code == 0) {
        if (result.data == 0) {
          layer.msg('取消关注成功');
          curObj.removeClass("selected");
          curObj.html("关注");
        } else {
          layer.msg('关注成功');
          curObj.addClass("selected");
          curObj.html("已关注");
        }
      } else if (result.code == 2) {
        global.loginBox();
      } else {
        layer.msg('关注失败');
      }
    });
  });

  /**
   * 点击回复答案,展示回复框
   */
  $('.js-answer-comment').on('click', function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    answerId = cc11001100_hook("answerId", curObj.attr("data-id"), "assign");
    var data = cc11001100_hook("data", '<div class="js-reply-box"><div class="reply-editbox clearfix"><div class="reply-write"><textarea placeholder="请输入你的观点" class="reply-input reply-input-textarea js-ipt" style="resize: none;width: 470px;"></textarea><a class="btn btn-info reply-btn js-answer-reply" data-id="' + answerId + '" href="javascript:void(0);">回复</a></div></div></div>', "var-init");
    var obj = cc11001100_hook("obj", $(this).parents(".answer-detail").children('.js-reply-box'), "var-init");
    if (obj.is(":hidden")) {
      obj.html(data);
      obj.show();
    } else {
      obj.html("");
      obj.hide();
    }
  });
  $('.js-reply-box').on('click', '.js-answer-reply', function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    var answerId = cc11001100_hook("answerId", curObj.attr("data-id"), "var-init");
    var replyUserId = cc11001100_hook("replyUserId", curObj.attr("data-userId"), "var-init");
    var content = cc11001100_hook("content", curObj.parent(".reply-write").children('textarea').val(), "var-init");
    if (typeof content == "undefined" || content == null || content == "") {
      layer.msg('回复内容不能为空');
      return;
    }
    var object = cc11001100_hook("object", new Object(), "var-init");
    object.answerId = cc11001100_hook("object.answerId", answerId, "assign");
    object.content = cc11001100_hook("object.content", content, "assign");
    if (replyUserId && typeof replyUserId != 'undefined' && replyUserId != 0) {
      object.replyUserId = cc11001100_hook("object.replyUserId", replyUserId, "assign");
    }
    $.post("/question/answer/commit", object, function (result) {
      if (result.code == 0) {
        layer.msg('回复成功');
        window.location.reload();
      } else if (result.code == 2) {
        global.loginBox();
      } else {
        layer.msg(result.msg);
      }
    });
  });

  /**
   * 点击回复评价
   */
  $('.js-comment-comment').on('click', function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    answerId = cc11001100_hook("answerId", curObj.attr("data-id"), "assign");
    userName = cc11001100_hook("userName", curObj.attr("data-user"), "assign");
    userId = cc11001100_hook("userId", curObj.attr("data-userId"), "assign");
    var data = cc11001100_hook("data", '<div class="js-reply-box"><div class="reply-editbox clearfix"><div class="reply-write"><textarea placeholder="@' + userName + '" class="reply-input reply-input-textarea js-ipt" style="resize: none;width: 440px;"></textarea><a class="btn btn-info reply-btn js-answer-reply" data-id="' + answerId + '" data-user="' + userName + '"  data-userId="' + userId + '"  href="javascript:void(0);">回复</a></div></div></div>', "var-init");
    var obj = cc11001100_hook("obj", $(this).parents(".reply-list-item").children('.js-reply-box'), "var-init");
    if (obj.is(":hidden")) {
      obj.html(data);
      obj.show();
    } else {
      obj.html("");
      obj.hide();
    }
  });

  /**
   * 点赞答案
   */
  $(".js-answer-agree").click(function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    answerId = cc11001100_hook("answerId", curObj.attr("data-id"), "assign");
    $.post("/question/answer/agree", {
      answerId: cc11001100_hook("answerId", answerId, "object-key-init")
    }, function (result) {
      if (result.code == 0) {
        curObj.addClass("selected");
        curObj.html("赞(" + result.data + ")");
        layer.msg('点赞成功');
      } else if (result.code == 2) {
        global.loginBox();
      } else {
        layer.msg('已点赞');
      }
    });
  });

  /**
   * 举报问题
   */
  $(".js-question-report").click(function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    questionId = cc11001100_hook("questionId", curObj.attr("data-id"), "assign");
    layer.open({
      type: cc11001100_hook("type", 2, "object-key-init"),
      area: cc11001100_hook("area", ['400px', '400px'], "object-key-init"),
      title: cc11001100_hook("title", '举报理由', "object-key-init"),
      move: cc11001100_hook("move", false, "object-key-init"),
      resize: cc11001100_hook("resize", false, "object-key-init"),
      shade: cc11001100_hook("shade", 0.6, "object-key-init") //遮罩透明度
      ,
      shadeClose: cc11001100_hook("shadeClose", true, "object-key-init"),
      content: cc11001100_hook("content", '/html/report.html?module=qaQuestion&id=' + questionId, "object-key-init")
    });
  });
  /**
   * 举报答案
   */
  $(".js-answer-report").click(function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    answerId = cc11001100_hook("answerId", curObj.attr("data-id"), "assign");
    layer.open({
      type: cc11001100_hook("type", 2, "object-key-init"),
      area: cc11001100_hook("area", ['400px', '400px'], "object-key-init"),
      title: cc11001100_hook("title", '举报理由', "object-key-init"),
      move: cc11001100_hook("move", false, "object-key-init"),
      resize: cc11001100_hook("resize", false, "object-key-init"),
      shade: cc11001100_hook("shade", 0.6, "object-key-init") //遮罩透明度
      ,
      shadeClose: cc11001100_hook("shadeClose", true, "object-key-init"),
      content: cc11001100_hook("content", '/html/report.html?module=qaAnswer&id=' + answerId, "object-key-init")
    });
  });
  /**
   * 举报评价
   */
  $(".js-comment-report").click(function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    commentId = cc11001100_hook("commentId", curObj.attr("data-id"), "assign");
    layer.open({
      type: cc11001100_hook("type", 2, "object-key-init"),
      area: cc11001100_hook("area", ['400px', '400px'], "object-key-init"),
      title: cc11001100_hook("title", '举报理由', "object-key-init"),
      move: cc11001100_hook("move", false, "object-key-init"),
      resize: cc11001100_hook("resize", false, "object-key-init"),
      shade: cc11001100_hook("shade", 0.6, "object-key-init") //遮罩透明度
      ,
      shadeClose: cc11001100_hook("shadeClose", true, "object-key-init"),
      content: cc11001100_hook("content", '/html/report.html?module=qaComment&id=' + commentId, "object-key-init")
    });
  });

  /**
   * 删除问题
   */
  $(".js-question-delete").click(function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    questionId = cc11001100_hook("questionId", curObj.attr("data-id"), "assign");
    layer.confirm('您确定要删除？', {
      title: cc11001100_hook("title", "确认消息", "object-key-init"),
      btn: cc11001100_hook("btn", ['确定', '取消'], "object-key-init") //按钮
    }, function () {
      $.post("/question/deleteQuestion", {
        questionId: cc11001100_hook("questionId", questionId, "object-key-init")
      }, function (result) {
        if (result.code == 0) {
          layer.msg('删除成功');
          window.location.href = cc11001100_hook("window.location.href", '/question', "assign");
        } else if (result.code == 2) {
          global.loginBox();
        } else {
          layer.msg(result.msg);
        }
      });
    }, function () {});
  });

  /**
   * 删除答案
   */
  $(".js-answer-delete").click(function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    answerId = cc11001100_hook("answerId", curObj.attr("data-id"), "assign");
    layer.confirm('您确定要删除？', {
      title: cc11001100_hook("title", "确认消息", "object-key-init"),
      btn: cc11001100_hook("btn", ['确定', '取消'], "object-key-init") //按钮
    }, function () {
      $.post("/question/deleteAnswer", {
        answerId: cc11001100_hook("answerId", answerId, "object-key-init")
      }, function (result) {
        if (result.code == 0) {
          layer.msg('删除成功');
          window.location.reload();
        } else if (result.code == 2) {
          global.loginBox();
        } else {
          layer.msg(result.msg);
        }
      });
    }, function () {});
  });
  /**
   * 删除评价
   */
  $(".js-comment-delete").click(function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    commentId = cc11001100_hook("commentId", curObj.attr("data-id"), "assign");
    layer.confirm('您确定要删除？', {
      title: cc11001100_hook("title", "确认消息", "object-key-init"),
      btn: cc11001100_hook("btn", ['确定', '取消'], "object-key-init") //按钮
    }, function () {
      $.post("/question/deleteComment", {
        commentId: cc11001100_hook("commentId", commentId, "object-key-init")
      }, function (result) {
        if (result.code == 0) {
          layer.msg('删除成功');
          window.location.reload();
        } else if (result.code == 2) {
          global.loginBox();
        } else {
          layer.msg(result.msg);
        }
      });
    }, function () {});
  });
  /**
   * 编辑答案
   */
  $(".js-answer-edit").click(function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    answerId = cc11001100_hook("answerId", curObj.attr("data-id"), "assign");
    layer.open({
      type: cc11001100_hook("type", 2, "object-key-init"),
      maxmin: cc11001100_hook("maxmin", true, "object-key-init"),
      area: cc11001100_hook("area", ['800px', '600px'], "object-key-init") //宽高不影响最大化
      ,
      title: cc11001100_hook("title", '编辑答案', "object-key-init"),
      move: cc11001100_hook("move", false, "object-key-init"),
      resize: cc11001100_hook("resize", false, "object-key-init"),
      shade: cc11001100_hook("shade", 0.6, "object-key-init") //遮罩透明度
      ,
      shadeClose: cc11001100_hook("shadeClose", true, "object-key-init"),
      content: cc11001100_hook("content", '/question/editAnswer?answerId=' + answerId, "object-key-init")
    });
  });
  $(".js-reply-question").click(function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    questionId = cc11001100_hook("questionId", curObj.attr("data-id"), "assign");
    layer.open({
      type: cc11001100_hook("type", 2, "object-key-init"),
      maxmin: cc11001100_hook("maxmin", true, "object-key-init"),
      area: cc11001100_hook("area", ['800px', '600px'], "object-key-init") //宽高不影响最大化
      ,
      title: cc11001100_hook("title", '编写答案', "object-key-init"),
      move: cc11001100_hook("move", false, "object-key-init"),
      resize: cc11001100_hook("resize", false, "object-key-init"),
      shade: cc11001100_hook("shade", 0.6, "object-key-init") //遮罩透明度
      ,
      shadeClose: cc11001100_hook("shadeClose", true, "object-key-init"),
      content: cc11001100_hook("content", '/question/replyQuestion?questionId=' + questionId, "object-key-init")
    });
  });

  /**
   * 删除答案
   */
  $(".js-answer-best").click(function () {
    if (!window.isLogin) {
      global.loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    answerId = cc11001100_hook("answerId", curObj.attr("data-id"), "assign");
    layer.confirm('您确定设置为优选答案？', {
      title: cc11001100_hook("title", "确认消息", "object-key-init"),
      btn: cc11001100_hook("btn", ['确定', '取消'], "object-key-init") //按钮
    }, function () {
      $.post("/question/setBestAnswer", {
        answerId: cc11001100_hook("answerId", answerId, "object-key-init")
      }, function (result) {
        if (result.code == 0) {
          layer.msg('设置成功');
          window.location.reload();
        } else if (result.code == 2) {
          global.loginBox();
        } else {
          layer.msg(result.msg);
        }
      });
    }, function () {});
  });
});