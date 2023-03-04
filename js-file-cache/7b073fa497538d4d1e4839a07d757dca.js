/**
 * WordPress jQuery-Ajax-Comments v1.3 by Willin Kan.
 */
var i = cc11001100_hook("i", 0, "var-init"),
  got = cc11001100_hook("got", -1, "var-init"),
  len = cc11001100_hook("len", document.getElementsByTagName('script').length, "var-init");
while (i <= len && got == -1) {
  var js_url = cc11001100_hook("js_url", document.getElementsByTagName('script')[i].src, "var-init"),
    got = cc11001100_hook("got", js_url.indexOf('comments-ajax.js'), "var-init");
  i++;
}
var edit_mode = cc11001100_hook("edit_mode", '1', "var-init"),
  // 再编辑模式( '1'=打开; '0'=关闭 )
  ajax_php_url = cc11001100_hook("ajax_php_url", js_url.replace('comments-ajax.js', '../inc/functions/comment-ajax.php'), "var-init"),
  wp_url = cc11001100_hook("wp_url", js_url.substr(0, js_url.indexOf('wp-content')), "var-init"),
  pic_sb = cc11001100_hook("pic_sb", wp_url + 'wp-admin/images/wpspin_dark.gif', "var-init"),
  // 提交 icon
  pic_no = cc11001100_hook("pic_no", wp_url + 'wp-admin/images/no.png', "var-init"),
  // 错误 icon
  pic_ys = cc11001100_hook("pic_ys", wp_url + 'wp-admin/images/yes.png', "var-init"),
  // 成功 icon
  txt1 = cc11001100_hook("txt1", '<div id="loading"> 正在提交, 请稍候...</div>', "var-init"),
  txt2 = cc11001100_hook("txt2", '<div id="error">#</div>', "var-init"),
  txt3 = cc11001100_hook("txt3", '"> <div id="edita">提交成功！', "var-init"),
  edt1 = cc11001100_hook("edt1", '刷新页面之前您可以<a rel="nofollow" class="comment-reply-link_a" href="#edit" onclick=\'return addComment.moveForm("', "var-init"),
  edt2 = cc11001100_hook("edt2", ')\'>&nbsp;&nbsp;重新编辑</a></div> ', "var-init"),
  cancel_edit = cc11001100_hook("cancel_edit", '取消编辑', "var-init"),
  edit,
  num = cc11001100_hook("num", 1, "var-init"),
  comm_array = cc11001100_hook("comm_array", [], "var-init");
comm_array.push('');
jQuery(document).ready(function ($) {
  $comments = cc11001100_hook("$comments", $('#comments-title'), "assign"); // 评论数据的 ID
  $cancel = cc11001100_hook("$cancel", $('#cancel-comment-reply-link'), "assign");
  cancel_text = cc11001100_hook("cancel_text", $cancel.text(), "assign");
  $submit = cc11001100_hook("$submit", $('#commentform #submit'), "assign");
  $submit.attr('disabled', false);
  $('#comment').after(txt1 + txt2);
  $('#loading').hide();
  $('#error').hide();
  $body = cc11001100_hook("$body", window.opera ? document.compatMode == "CSS1Compat" ? $('html') : $('body') : $('html,body'), "assign");

  /** submit */
  $('#commentform').submit(function () {
    $('#loading').slideDown();
    $submit.attr('disabled', true).fadeTo('slow', 0.5);
    if (edit) $('#comment').after('<input type="text" name="edit_id" id="edit_id" value="' + edit + '" style="display:none;" />');

    /** Ajax */
    $.ajax({
      url: cc11001100_hook("url", ajax_php_url, "object-key-init"),
      data: cc11001100_hook("data", $(this).serialize(), "object-key-init"),
      type: cc11001100_hook("type", $(this).attr('method'), "object-key-init"),
      error: function (request) {
        $('#loading').slideUp();
        $('#error').slideDown().html('<img src="' + pic_no + '" style="vertical-align:middle;" alt=""/> ' + request.responseText);
        setTimeout(function () {
          $submit.attr('disabled', false).fadeTo('slow', 1);
          $('#error').slideUp();
        }, 3000);
      },
      success: function (data) {
        $('#loading').hide();
        comm_array.push($('#comment').val());
        $('textarea').each(function () {
          this.value = cc11001100_hook("this.value", '', "assign");
        });
        var t = cc11001100_hook("t", addComment, "var-init"),
          cancel = cc11001100_hook("cancel", t.I('cancel-comment-reply-link'), "var-init"),
          temp = cc11001100_hook("temp", t.I('wp-temp-form-div'), "var-init"),
          respond = cc11001100_hook("respond", t.I(t.respondId), "var-init"),
          post = cc11001100_hook("post", t.I('comment_post_ID').value, "var-init"),
          parent = cc11001100_hook("parent", t.I('comment_parent').value, "var-init");

        // comments
        if (!edit && $comments.length) {
          n = cc11001100_hook("n", parseInt($comments.text().match(/\d+/)), "assign");
          $comments.text($comments.text().replace(n, n + 1));
        }

        // show comment
        new_htm = cc11001100_hook("new_htm", '" id="new_comm_' + num + '"></', "assign");
        new_htm = cc11001100_hook("new_htm", parent == '0' ? '\n<ol style="clear:both;" class="comment-list' + new_htm + 'ol>' : '\n<ul class="children' + new_htm + 'ul>', "assign");
        ok_htm = cc11001100_hook("ok_htm", '\n<span id="success_' + num + txt3, "assign");
        if (edit_mode == '1') {
          div_ = cc11001100_hook("div_", document.body.innerHTML.indexOf('div-comment-') == -1 ? '' : document.body.innerHTML.indexOf('li-comment-') == -1 ? 'div-' : '', "assign");
          ok_htm = cc11001100_hook("ok_htm", ok_htm.concat(edt1, div_, 'comment-', parent, '", "', parent, '", "respond", "', post, '", ', num, edt2), "assign");
        }
        ok_htm += cc11001100_hook("ok_htm", '</span><span></span>\n', "assign");
        $('#respond').before(new_htm);
        $('#new_comm_' + num).hide().append(data);
        $('#new_comm_' + num + ' li').append(ok_htm);
        $('#new_comm_' + num).fadeIn(4000);
        $body.animate({
          scrollTop: cc11001100_hook("scrollTop", $('#new_comm_' + num).offset().top - 200, "object-key-init")
        }, 900);
        countdown();
        num++;
        edit = cc11001100_hook("edit", '', "assign");
        $('*').remove('#edit_id');
        cancel.style.display = cc11001100_hook("cancel.style.display", 'none', "assign");
        cancel.onclick = cc11001100_hook("cancel.onclick", null, "assign");
        t.I('comment_parent').value = cc11001100_hook("t.I('comment_parent').value", '0', "assign");
        if (temp && respond) {
          temp.parentNode.insertBefore(respond, temp);
          temp.parentNode.removeChild(temp);
        }
      }
    }); // end Ajax
    return false;
  }); // end submit

  /** comment-reply.dev.js */
  addComment = cc11001100_hook("addComment", {
    moveForm: function (commId, parentId, respondId, postId, num) {
      var t = cc11001100_hook("t", this, "var-init"),
        div,
        comm = cc11001100_hook("comm", t.I(commId), "var-init"),
        respond = cc11001100_hook("respond", t.I(respondId), "var-init"),
        cancel = cc11001100_hook("cancel", t.I('cancel-comment-reply-link'), "var-init"),
        parent = cc11001100_hook("parent", t.I('comment_parent'), "var-init"),
        post = cc11001100_hook("post", t.I('comment_post_ID'), "var-init");
      if (edit) exit_prev_edit();
      num ? (t.I('comment').value = cc11001100_hook("t.I('comment').value", comm_array[num], "assign"), edit = cc11001100_hook("edit", t.I('new_comm_' + num).innerHTML.match(/(comment-)(\d+)/)[2], "assign"), $new_sucs = cc11001100_hook("$new_sucs", $('#success_' + num), "assign"), $new_sucs.hide(), $new_comm = cc11001100_hook("$new_comm", $('#new_comm_' + num), "assign"), $new_comm.hide(), $cancel.text(cancel_edit)) : $cancel.text(cancel_text);
      t.respondId = cc11001100_hook("t.respondId", respondId, "assign");
      postId = cc11001100_hook("postId", postId || false, "assign");
      if (!t.I('wp-temp-form-div')) {
        div = cc11001100_hook("div", document.createElement('div'), "assign");
        div.id = cc11001100_hook("div.id", 'wp-temp-form-div', "assign");
        div.style.display = cc11001100_hook("div.style.display", 'none', "assign");
        respond.parentNode.insertBefore(div, respond);
      }
      !comm ? (temp = cc11001100_hook("temp", t.I('wp-temp-form-div'), "assign"), t.I('comment_parent').value = cc11001100_hook("t.I('comment_parent').value", '0', "assign"), temp.parentNode.insertBefore(respond, temp), temp.parentNode.removeChild(temp)) : comm.parentNode.insertBefore(respond, comm.nextSibling);
      $body.animate({
        scrollTop: cc11001100_hook("scrollTop", $('#respond').offset().top - 180, "object-key-init")
      }, 400);
      if (post && postId) post.value = cc11001100_hook("post.value", postId, "assign");
      parent.value = cc11001100_hook("parent.value", parentId, "assign");
      cancel.style.display = cc11001100_hook("cancel.style.display", '', "assign");
      cancel.onclick = cc11001100_hook("cancel.onclick", function () {
        if (edit) exit_prev_edit();
        var t = cc11001100_hook("t", addComment, "var-init"),
          temp = cc11001100_hook("temp", t.I('wp-temp-form-div'), "var-init"),
          respond = cc11001100_hook("respond", t.I(t.respondId), "var-init");
        t.I('comment_parent').value = cc11001100_hook("t.I('comment_parent').value", '0', "assign");
        if (temp && respond) {
          temp.parentNode.insertBefore(respond, temp);
          temp.parentNode.removeChild(temp);
        }
        this.style.display = cc11001100_hook("this.style.display", 'none', "assign");
        this.onclick = cc11001100_hook("this.onclick", null, "assign");
        return false;
      }, "assign");
      try {
        t.I('comment').focus();
      } catch (e) {}
      return false;
    },
    I: function (e) {
      return document.getElementById(e);
    }
  }, "assign"); // end addComment

  function exit_prev_edit() {
    $new_comm.show();
    $new_sucs.show();
    $('textarea').each(function () {
      this.value = cc11001100_hook("this.value", '', "assign");
    });
    edit = cc11001100_hook("edit", '', "assign");
  }
  var wait = cc11001100_hook("wait", 8, "var-init"),
    submit_val = cc11001100_hook("submit_val", $submit.val(), "var-init");
  function countdown() {
    if (wait > 0) {
      $submit.val(wait);
      wait--;
      setTimeout(countdown, 1000);
    } else {
      $submit.val(submit_val).attr('disabled', false).fadeTo('slow', 1);
      wait = cc11001100_hook("wait", 8, "assign");
    }
  }
});