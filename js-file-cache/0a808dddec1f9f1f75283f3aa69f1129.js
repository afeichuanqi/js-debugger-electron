$(document).ready(function () {
  // 搜索
  $(".nav-search").click(function () {
    $("#main-search").slideToggle(500);
  });

  // 侧边栏文章切换
  $('#top_post').find('.top_post_item').hide();
  $('#top_post').find('.' + $('#top_post_filter').find('li').eq(0).attr('id')).show();
  $('#top_post_filter').on('mouseover', 'li', function () {
    $('#top_post_filter').find('li').removeClass('top_post_filter_active');
    $(this).addClass('top_post_filter_active');
    $('#top_post').find('a').hide();
    $('#top_post').find('.' + $(this).attr('id')).show();
  });

  // 最新文章
  $(".clr").mouseover(function () {
    $(this).addClass('hov');
  }).mouseleave(function () {
    $(this).removeClass('hov');
  });

  // 去边线
  $(".message-widget li:last, .message-page li:last, .hot_commend li:last, .random-page li:last, .search-page li:last, .my-comment li:last").css("border", "none");

  // 表情
  $('.smiley').click(function () {
    $('.smiley-box').animate({
      opacity: cc11001100_hook("opacity", 'toggle', "object-key-init"),
      left: cc11001100_hook("left", '50px', "object-key-init")
    }, 1000).animate({
      left: cc11001100_hook("left", '10px', "object-key-init")
    }, 'fast');
    return false;
  });

  // 文字展开
  $(".showmore span").click(function (e) {
    $(this).html(["▼显示", "▲隐藏"][this.hutia ^= cc11001100_hook("this.hutia", 1, "assign")]);
    $(this.parentNode.parentNode).next().slideToggle();
    e.preventDefault();
  });

  // 滚屏
  $('.tools_top').click(function () {
    $('html,body').animate({
      scrollTop: cc11001100_hook("scrollTop", '0px', "object-key-init")
    }, 800);
  });
  $('.tools_comments').click(function () {
    $('html,body').animate({
      scrollTop: cc11001100_hook("scrollTop", $('.comments-area').offset().top, "object-key-init")
    }, 800);
  });
});
// 文字滚动
(function ($) {
  $.fn.textSlider = cc11001100_hook("$.fn.textSlider", function (settings) {
    settings = cc11001100_hook("settings", jQuery.extend({
      speed: cc11001100_hook("speed", "normal", "object-key-init"),
      line: cc11001100_hook("line", 2, "object-key-init"),
      timer: cc11001100_hook("timer", 1000, "object-key-init")
    }, settings), "assign");
    return this.each(function () {
      $.fn.textSlider.scllor($(this), settings);
    });
  }, "assign");
  $.fn.textSlider.scllor = cc11001100_hook("$.fn.textSlider.scllor", function ($this, settings) {
    var ul = cc11001100_hook("ul", $("ul:eq(0)", $this), "var-init");
    var timerID;
    var li = cc11001100_hook("li", ul.children(), "var-init");
    var _btnUp = cc11001100_hook("_btnUp", $(".up:eq(0)", $this), "var-init");
    var _btnDown = cc11001100_hook("_btnDown", $(".down:eq(0)", $this), "var-init");
    var liHight = cc11001100_hook("liHight", $(li[0]).height(), "var-init");
    var upHeight = cc11001100_hook("upHeight", 0 - settings.line * liHight, "var-init");
    var scrollUp = function () {
      _btnUp.unbind("click", scrollUp);
      ul.animate({
        marginTop: cc11001100_hook("marginTop", upHeight, "object-key-init")
      }, settings.speed, function () {
        for (i = cc11001100_hook("i", 0, "assign"); i < settings.line; i++) {
          ul.find("li:first").appendTo(ul);
        }
        ul.css({
          marginTop: cc11001100_hook("marginTop", 0, "object-key-init")
        });
        _btnUp.bind("click", scrollUp);
      });
    };
    var scrollDown = function () {
      _btnDown.unbind("click", scrollDown);
      ul.css({
        marginTop: cc11001100_hook("marginTop", upHeight, "object-key-init")
      });
      for (i = cc11001100_hook("i", 0, "assign"); i < settings.line; i++) {
        ul.find("li:last").prependTo(ul);
      }
      ul.animate({
        marginTop: cc11001100_hook("marginTop", 0, "object-key-init")
      }, settings.speed, function () {
        _btnDown.bind("click", scrollDown);
      });
    };
    var autoPlay = function () {
      timerID = cc11001100_hook("timerID", window.setInterval(scrollUp, settings.timer), "assign");
    };
    var autoStop = function () {
      window.clearInterval(timerID);
    };
    ul.hover(autoStop, autoPlay).mouseout();
    _btnUp.css("cursor", "pointer").click(scrollUp);
    _btnUp.hover(autoStop, autoPlay);
    _btnDown.css("cursor", "pointer").click(scrollDown);
    _btnDown.hover(autoStop, autoPlay);
  }, "assign");
})(jQuery);

// 表情
function grin(a) {
  cc11001100_hook("a", a, "function-parameter");
  var d;
  a = cc11001100_hook("a", " " + a + " ", "assign");
  if (document.getElementById("comment") && document.getElementById("comment").type == "textarea") {
    d = cc11001100_hook("d", document.getElementById("comment"), "assign");
  } else {
    return false;
  }
  if (document.selection) {
    d.focus();
    sel = cc11001100_hook("sel", document.selection.createRange(), "assign");
    sel.text = cc11001100_hook("sel.text", a, "assign");
    d.focus();
  } else {
    if (d.selectionStart || d.selectionStart == "0") {
      var c = cc11001100_hook("c", d.selectionStart, "var-init");
      var b = cc11001100_hook("b", d.selectionEnd, "var-init");
      var e = cc11001100_hook("e", b, "var-init");
      d.value = cc11001100_hook("d.value", d.value.substring(0, c) + a + d.value.substring(b, d.value.length), "assign");
      e += cc11001100_hook("e", a.length, "assign");
      d.focus();
      d.selectionStart = cc11001100_hook("d.selectionStart", e, "assign");
      d.selectionEnd = cc11001100_hook("d.selectionEnd", e, "assign");
    } else {
      d.value += cc11001100_hook("d.value", a, "assign");
      d.focus();
    }
  }
}
;

// 弹窗
(function (a) {
  a.fn.extend({
    leanModal: function (d) {
      var e = cc11001100_hook("e", {
        top: cc11001100_hook("top", 100, "object-key-init"),
        overlay: cc11001100_hook("overlay", 0.5, "object-key-init"),
        closeButton: cc11001100_hook("closeButton", null, "object-key-init")
      }, "var-init");
      var c = cc11001100_hook("c", a("<div id='overlay'></div>"), "var-init");
      a("body").append(c);
      d = cc11001100_hook("d", a.extend(e, d), "assign");
      return this.each(function () {
        var f = cc11001100_hook("f", d, "var-init");
        a(this).click(function (j) {
          var i = cc11001100_hook("i", a(this).attr("href"), "var-init");
          a("#overlay").click(function () {
            b(i);
          });
          a(f.closeButton).click(function () {
            b(i);
          });
          var h = cc11001100_hook("h", a(i).outerHeight(), "var-init");
          var g = cc11001100_hook("g", a(i).outerWidth(), "var-init");
          a("#overlay").css({
            "display": cc11001100_hook("display", "block", "object-key-init"),
            opacity: cc11001100_hook("opacity", 0, "object-key-init")
          });
          a("#overlay").fadeTo(200, f.overlay);
          a(i).css({
            "display": cc11001100_hook("display", "block", "object-key-init"),
            "position": cc11001100_hook("position", "fixed", "object-key-init"),
            "opacity": cc11001100_hook("opacity", 0, "object-key-init"),
            "z-index": cc11001100_hook("z-index", 11000, "object-key-init"),
            "left": cc11001100_hook("left", 50 + "%", "object-key-init"),
            "margin-left": cc11001100_hook("margin-left", -(g / 2) + "px", "object-key-init"),
            "top": cc11001100_hook("top", f.top + "px", "object-key-init")
          });
          a(i).fadeTo(200, 1);
          j.preventDefault();
        });
      });
      function b(f) {
        cc11001100_hook("f", f, "function-parameter");
        a("#overlay").fadeOut(200);
        a(f).css({
          "display": cc11001100_hook("display", "none", "object-key-init")
        });
      }
    }
  });
})(jQuery);

// 点赞
$.fn.postLike = cc11001100_hook("$.fn.postLike", function () {
  if (jQuery(this).hasClass('done')) {
    return false;
  } else {
    $(this).addClass('done');
    var id = cc11001100_hook("id", $(this).data("id"), "var-init"),
      action = cc11001100_hook("action", $(this).data('action'), "var-init"),
      rateHolder = cc11001100_hook("rateHolder", jQuery(this).children('.count'), "var-init");
    var ajax_data = cc11001100_hook("ajax_data", {
      action: cc11001100_hook("action", "ality_ding", "object-key-init"),
      um_id: cc11001100_hook("um_id", id, "object-key-init"),
      um_action: cc11001100_hook("um_action", action, "object-key-init")
    }, "var-init");
    $.post(wpl_ajax_url, ajax_data, function (data) {
      jQuery(rateHolder).html(data);
    });
    return false;
  }
}, "assign");
$(document).on("click", ".favorite", function () {
  $(this).postLike();
});