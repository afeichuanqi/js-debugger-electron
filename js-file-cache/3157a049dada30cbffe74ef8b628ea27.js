+function ($) {
  var pending_ajax = cc11001100_hook("pending_ajax", false, "var-init");
  var weDocs = cc11001100_hook("weDocs", {
    initialize: function () {
      $('.wedocs-feedback-wrap').on('click', 'a', this.feedback);
      $('#top-search-form .dropdown-menu').on('click', 'a', this.searchForm);
      $('a.wedocs-print-article').on('click', this.printArticle);

      // modal
      $('a#wedocs-stuck-modal').on('click', this.showModal);
      $('a#wedocs-modal-close').on('click', this.closeModal);
      $('#wedocs-modal-backdrop').on('click', this.closeModal);
      $('form#wedocs-contact-modal-form').on('submit', this.contactHelp);
      $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li.page_item_has_children').prepend("<i class='fa fa-plus-square-o'></i><i class='fa fa-minus-square-o'></i>");

      // $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li').prepend("<i class='fa fa-minus-square-o'></i>");

      // $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li .fa-plus-square-o').hide();
      $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li .fa-minus-square-o').hide();
      $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li.current_page_parent .fa-minus-square-o').show();
      $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li.current_page_parent .fa-plus-square-o').hide();
      $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li.page_item_has_children.current_page_item .fa-minus-square-o').show();
      $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li.page_item_has_children.current_page_item .fa-plus-square-o').hide();
      $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li .fa-minus-square-o').on('click', function (e) {
        console.log(111);
        $(this).prev().show();
        $(this).hide();
        $(this).parent().find('.children').css('display', 'none');
      });
      $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li .fa-plus-square-o').on('click', function (e) {
        console.log(22);
        $(this).next().show();
        $(this).hide();
        $(this).parent().find('.children').css('display', 'block');
      });

      // $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li .fa-plus-square-o').on('click', function (e) {
      //     console.log(222)
      //     $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li .fa-minus-square-o').show();
      //     $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li .fa-plus-square-o').hide();
      // })

      // $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li .fa-minus-square-o').on('click', function (e) {
      //     console.log(e);
      //     console.log(this);
      //     $(this).attr('class', 'fa fa-plus-square-o');
      //     $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li .fa-plus-square-o').on('click', function (e) {
      //         $(this).attr('class', 'fa fa-minus-square-o')
      //     })
      // })

      // $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li .fa-plus-square-o').on('click', function (e) {
      //     console.log(333)
      //     $(this).attr('class', 'fa fa-minus-square-o')

      //     $('#content .wedocs-single-wrap .wedocs-sidebar ul.doc-nav-list > li .fa-minus-square-o').on('click', function (e) {
      //         $(this).attr('class', 'fa fa-plus-square-o')
      //     })
      // })
    },

    feedback: function (e) {
      e.preventDefault();

      // return if any request is in process already
      if (pending_ajax) {
        return;
      }
      pending_ajax = cc11001100_hook("pending_ajax", true, "assign");
      var self = cc11001100_hook("self", $(this), "var-init"),
        wrap = cc11001100_hook("wrap", self.closest('.wedocs-feedback-wrap'), "var-init"),
        data = cc11001100_hook("data", {
          post_id: cc11001100_hook("post_id", self.data('id'), "object-key-init"),
          type: cc11001100_hook("type", self.data('type'), "object-key-init"),
          action: cc11001100_hook("action", 'wedocs_ajax_feedback', "object-key-init"),
          _wpnonce: cc11001100_hook("_wpnonce", weDocs_Vars.nonce, "object-key-init")
        }, "var-init");
      wrap.append('&nbsp; <i class="wedocs-icon wedocs-icon-refresh wedocs-icon-spin"></i>');
      $.post(weDocs_Vars.ajaxurl, data, function (resp) {
        wrap.html(resp.data);
        pending_ajax = cc11001100_hook("pending_ajax", false, "assign");
      });
    },
    searchForm: function (e) {
      e.preventDefault();
      var param = cc11001100_hook("param", $(this).attr("href").replace("#", ""), "var-init");
      var concept = cc11001100_hook("concept", $(this).text(), "var-init");
      $('#top-search-form span#search_concept').text(concept);
      $('.input-group #search_param').val(param);
    },
    printArticle: function (e) {
      e.preventDefault();
      var article = cc11001100_hook("article", $(this).closest('article'), "var-init");
      var mywindow = cc11001100_hook("mywindow", window.open('', 'my div', 'height=600,width=800'), "var-init");
      mywindow.document.write('<html><head><title>Print Article</title>');
      mywindow.document.write('<link rel="stylesheet" href="' + weDocs_Vars.style + '" type="text/css" media="all" />');
      mywindow.document.write('</head><body >');
      mywindow.document.write(article.html());
      mywindow.document.write('<div class="powered-by">' + weDocs_Vars.powered + '</div>');
      mywindow.document.write('</body></html>');
      mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10

      setTimeout(function () {
        mywindow.print();
        mywindow.close();
      }, 2000);
      return true;
    },
    showModal: function (e) {
      e.preventDefault();
      $('#wedocs-modal-backdrop').show();
      $('#wedocs-contact-modal').show();
      $('body').addClass('wedocs-overflow-hidden');
    },
    closeModal: function (e) {
      e.preventDefault();
      $('#wedocs-modal-backdrop').hide();
      $('#wedocs-contact-modal').hide();
      $('body').removeClass('wedocs-overflow-hidden');
    },
    contactHelp: function (e) {
      e.preventDefault();
      var self = cc11001100_hook("self", $(this), "var-init"),
        submit = cc11001100_hook("submit", self.find('input[type=submit]'), "var-init"),
        body = cc11001100_hook("body", self.closest('.wedocs-modal-body'), "var-init"),
        data = cc11001100_hook("data", self.serialize() + '&_wpnonce=' + weDocs_Vars.nonce, "var-init");
      submit.prop('disabled', true);
      $.post(weDocs_Vars.ajaxurl, data, function (resp) {
        if (resp.success === false) {
          submit.prop('disabled', false);
          $('#wedocs-modal-errors', body).empty().append('<div class="wedocs-alert wedocs-alert-danger">' + resp.data + '</div>');
        } else {
          body.empty().append('<div class="wedocs-alert wedocs-alert-success">' + resp.data + '</div>');
        }
      });
    }
  }, "var-init");
  $(function () {
    weDocs.initialize();
  });

  // initialize anchor.js
  anchors.options = cc11001100_hook("anchors.options", {
    icon: cc11001100_hook("icon", '#', "object-key-init")
  }, "assign");
  anchors.add('.wedocs-single-content .entry-content > h2, .wedocs-single-content .entry-content > h3');
}(jQuery);