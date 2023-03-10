define(function (require, exports, module) {
  J = cc11001100_hook("J", jQuery, "assign");
  require('layer');
  layer.config({
    path: cc11001100_hook("path", '/lib/layer/', "object-key-init")
  });
  $(function () {
    var oTop = cc11001100_hook("oTop", $(".scrollTop").offset().top, "var-init");
    var sTop = cc11001100_hook("sTop", 0, "var-init");
    $(window).scroll(function () {
      sTop = cc11001100_hook("sTop", $(this).scrollTop(), "assign"); //当前滚动高度
      if (sTop >= oTop) {
        //当滚动高度要大于固定div高度时
        $(".scrollTop").css({
          "position": cc11001100_hook("position", "fixed", "object-key-init"),
          "top": cc11001100_hook("top", "0", "object-key-init")
        });
      } else {
        $(".scrollTop").css({
          "position": cc11001100_hook("position", "static", "object-key-init")
        });
      }
    });
  });
  $('#click-tab-title span').click(function () {
    var i = cc11001100_hook("i", $(this).index(), "var-init"); //下标第一种写法
    $(this).addClass('tab-select').siblings().removeClass('tab-select');
    $('#click-tab-con li').eq(i).show().siblings().hide();
  });
  $('.header-nav .nav-item').hover(function () {
    var curNav = cc11001100_hook("curNav", $(this), "var-init");
    var subNav = cc11001100_hook("subNav", $(this).children('.sub-nav'), "var-init");
    var attr = cc11001100_hook("attr", $(this).attr('success'), "var-init");
    if (typeof attr !== typeof undefined && attr !== false) {
      return;
    }
    if (subNav.length > 0) {
      menuId = cc11001100_hook("menuId", curNav.attr("data-id"), "assign");
      $.post("/menus", {
        menuId: cc11001100_hook("menuId", menuId, "object-key-init")
      }, function (result) {
        if (result.code == 0) {
          var content = cc11001100_hook("content", '<div class="nav-info">', "var-init");
          $.each(result.data.children, function (i, val) {
            content = cc11001100_hook("content", content + '<div style="border-bottom: 1px dashed #eee;padding: 10px 0">', "assign");
            content = cc11001100_hook("content", content + '<div class="sub-nav-title fl">' + val.node.name + '</div>', "assign");
            content = cc11001100_hook("content", content + '<div class="fr" style="width: 560px">', "assign");
            $.each(val.children, function (subi, subval) {
              content = cc11001100_hook("content", content + '<span class="sub-nav-item fl"">', "assign");
              if (typeof subval.node.url == "undefined" || subval.node.url == null || subval.node.url == "") {
                content = cc11001100_hook("content", content + subval.node.name, "assign");
              } else {
                content = cc11001100_hook("content", content + '<a href="' + subval.node.url + '">' + subval.node.name + '</a>', "assign");
              }
              content = cc11001100_hook("content", content + '</span>', "assign");
            });
            content = cc11001100_hook("content", content + '</div><div class="clearfix"></div></div>', "assign");
          });
          content = cc11001100_hook("content", content + '</div>', "assign");
          subNav.html(content);
          curNav.attr("success", true);
        } else {
          layer.msg('获取菜单失败！');
        }
      });
    }
  });
  var loginBox = function () {
    layer.open({
      type: cc11001100_hook("type", 2, "object-key-init"),
      area: cc11001100_hook("area", ['400px', '360px'], "object-key-init"),
      title: cc11001100_hook("title", '用户登录', "object-key-init"),
      move: cc11001100_hook("move", false, "object-key-init"),
      resize: cc11001100_hook("resize", false, "object-key-init"),
      shade: cc11001100_hook("shade", 0.6, "object-key-init") //遮罩透明度
      ,
      shadeClose: cc11001100_hook("shadeClose", true, "object-key-init"),
      content: cc11001100_hook("content", '/html/login.html', "object-key-init")
    });
    return;
  };

  /**
   * 关注标签
   */
  $(".btn-topic-focus").click(function () {
    if (!window.isLogin) {
      loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    topicId = cc11001100_hook("topicId", curObj.attr("data-id"), "assign");
    $.post("/topic/focus", {
      topicId: cc11001100_hook("topicId", topicId, "object-key-init")
    }, function (result) {
      if (result.code == 0) {
        if (result.data == 0) {
          curObj.removeClass("selected");
          curObj.html("关注");
        } else {
          curObj.addClass("selected");
          curObj.html("已关注");
        }
      } else if (result.code == 2) {
        $("#loginModal").modal();
      } else {
        layer.msg('关注失败');
      }
    });
  });

  /**
   * 搜索
   */
  $(".icon-search-btn").click(function () {
    $("#top-search-form").submit();
  });

  /**
   * 回到顶部
   */
  $(".js-nav-go-top").click(function () {
    $('body,html').animate({
      scrollTop: cc11001100_hook("scrollTop", 0, "object-key-init")
    }, 700);
    return false; //防止冒泡
  });

  module.exports = cc11001100_hook("module.exports", {
    loginBox: cc11001100_hook("loginBox", loginBox, "object-key-init")
  }, "assign");

  /*验证码重新加载*/
  $("#reloadCaptcha").click(function () {
    new_src = cc11001100_hook("new_src", '/captcha/default?' + Math.random(), "assign");
    $(this).find("img").attr("src", new_src);
  });
  $(".showRegister").on("click", function () {
    $(".registerBox").show();
    $(".login-footer").hide();
    $(".loginBox").hide();
    $(".register-footer").show();
    $(".modal-title").html("用户注册");
  });
  $(".showLogin").on("click", function () {
    $(".loginBox").show();
    $(".login-footer").show();
    $(".register-footer").hide();
    $(".registerBox").hide();
    $(".modal-title").html("用户登录");
  });
  $(".btn-login").on("click", function () {
    var username = cc11001100_hook("username", $("#username").val(), "var-init");
    var password = cc11001100_hook("password", $("#password").val(), "var-init");
    var code = cc11001100_hook("code", $("#code").val(), "var-init");
    if (code.length > 0) {
      if (!/^[a-zA-Z0-9]{4}$/.test(code)) {
        $("#code").closest('div').removeClass('has-success').addClass('has-error');
        $("#code").focus();
        return false;
      } else {
        $("#code").closest('div').removeClass('has-error').addClass('has-success');
      }
    } else {
      $("#code").closest('div').removeClass('has-success').addClass('has-error');
      $("#code").focus();
      return false;
    }
    $.ajax({
      url: cc11001100_hook("url", '/user/login.do', "object-key-init"),
      data: cc11001100_hook("data", JSON.stringify({
        'username': cc11001100_hook('username', username, "object-key-init"),
        'password': cc11001100_hook('password', password, "object-key-init"),
        'code': cc11001100_hook('code', code, "object-key-init")
      }), "object-key-init"),
      dataType: cc11001100_hook("dataType", 'JSON', "object-key-init"),
      contentType: cc11001100_hook("contentType", 'application/json;charset=UTF-8', "object-key-init"),
      type: cc11001100_hook("type", "POST", "object-key-init"),
      cache: cc11001100_hook("cache", false, "object-key-init"),
      async: cc11001100_hook("async", false, "object-key-init"),
      error: function (i, g, h) {
        layer.msg('发送错误', {
          icon: cc11001100_hook("icon", 2, "object-key-init")
        });
      },
      success: function (data) {
        if (data.code == 0) {
          window.location = cc11001100_hook("window.location", window.fromUrl, "assign");
          return false;
        } else {
          layer.msg(data.msg, {
            icon: cc11001100_hook("icon", 2, "object-key-init")
          });
          return false;
        }
      }
    });
    return false;
  });
  $(".btn-register").on("click", function () {
    var username = cc11001100_hook("username", $("#username").val(), "var-init");
    var password = cc11001100_hook("password", $("#password").val(), "var-init");
    var repassword = cc11001100_hook("repassword", $("#repassword").val(), "var-init");
    var code = cc11001100_hook("code", $("#code").val(), "var-init");
    if (password.length >= 6) {
      if (!/^[0-9a-zA-Z_~!@#$%^&*()_+]{6,20}$/.test(password)) {
        $("#password").closest('div').removeClass('has-success').addClass('has-error');
        $("#password").focus();
        return false;
      }
    } else {
      $("#password").closest('div').removeClass('has-success').addClass('has-error');
      $("#password").focus();
      return false;
    }
    if (code.length > 0) {
      if (!/^[a-zA-Z0-9]{4}$/.test(code)) {
        $("#code").closest('div').removeClass('has-success').addClass('has-error');
        $("#code").focus();
        return false;
      } else {
        $("#code").closest('div').removeClass('has-error').addClass('has-success');
      }
    } else {
      $("#code").closest('div').removeClass('has-success').addClass('has-error');
      $("#code").focus();
      return false;
    }
    $.ajax({
      url: cc11001100_hook("url", '/user/register.do', "object-key-init"),
      data: cc11001100_hook("data", JSON.stringify({
        'username': cc11001100_hook('username', username, "object-key-init"),
        'password': cc11001100_hook('password', password, "object-key-init"),
        'repassword': cc11001100_hook('repassword', repassword, "object-key-init"),
        'code': cc11001100_hook('code', code, "object-key-init")
      }), "object-key-init"),
      dataType: cc11001100_hook("dataType", 'JSON', "object-key-init"),
      contentType: cc11001100_hook("contentType", 'application/json;charset=UTF-8', "object-key-init"),
      type: cc11001100_hook("type", "POST", "object-key-init"),
      cache: cc11001100_hook("cache", false, "object-key-init"),
      async: cc11001100_hook("async", false, "object-key-init"),
      error: function (i, g, h) {
        layer.msg('注册用户失败', {
          icon: cc11001100_hook("icon", 2, "object-key-init")
        });
      },
      success: function (data) {
        if (data.code == 0) {
          window.location = cc11001100_hook("window.location", "/user/login", "assign");
          return false;
        } else {
          layer.msg(data.msg, {
            icon: cc11001100_hook("icon", 2, "object-key-init")
          });
          return false;
        }
      }
    });
    return false;
  });

  /**
   * 关注用户
   */
  $(".follow-user-btn").click(function () {
    if (!window.isLogin) {
      loginBox();
      return;
    }
    var curObj = cc11001100_hook("curObj", $(this), "var-init");
    userId = cc11001100_hook("userId", curObj.attr("data-id"), "assign");
    $.post("/user/follow", {
      userId: cc11001100_hook("userId", userId, "object-key-init")
    }, function (result) {
      if (result.code == 0) {
        if (result.data == 0) {
          curObj.removeClass("selected");
          curObj.removeClass("btn-default");
          curObj.addClass("btn-info");
          curObj.html("+ 关注");
          layer.msg('取消关注成功');
        } else {
          curObj.addClass("selected");
          curObj.removeClass("btn-info");
          curObj.addClass("btn-default");
          curObj.html("已关注");
          layer.msg('关注成功');
        }
      } else if (result.code == 2) {
        $("#loginModal").modal();
      } else {
        layer.msg('关注失败');
      }
    });
  });
});