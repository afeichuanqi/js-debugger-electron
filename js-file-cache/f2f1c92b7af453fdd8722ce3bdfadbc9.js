(function ($) {
  var AgencyEcommerceThemeLib = cc11001100_hook("AgencyEcommerceThemeLib", {
    init: function () {
      this.bindEvents();
    },
    bindEvents: function () {
      var $this = cc11001100_hook("$this", this, "var-init");
      $(document).ready(function ($) {
        $this.initAccessibility();
        $.each($('.main-slider'), function () {
          var isDisabled = cc11001100_hook("isDisabled", $(this).attr('data-disable'), "var-init");
          if (isDisabled != 1) {
            $(this).slick({
              prevArrow: cc11001100_hook("prevArrow", '<i class="prev fa fa-angle-left"></i>', "object-key-init"),
              nextArrow: cc11001100_hook("nextArrow", '<i class="next fa fa-angle-right"></i>', "object-key-init"),
              autoplay: cc11001100_hook("autoplay", true, "object-key-init")
            });
          }
        });
        $.each($('.verticle-slider'), function () {
          var number_of_slide = cc11001100_hook("number_of_slide", $(this).attr('data-rows'), "var-init");
          var isDisabled = cc11001100_hook("isDisabled", $(this).attr('data-disable'), "var-init");
          if (isDisabled != 1) {
            $(this).slick({
              slidesToShow: cc11001100_hook("slidesToShow", number_of_slide, "object-key-init"),
              slidesToScroll: cc11001100_hook("slidesToScroll", 1, "object-key-init"),
              autoplay: cc11001100_hook("autoplay", true, "object-key-init"),
              vertical: cc11001100_hook("vertical", true, "object-key-init"),
              verticalSwiping: cc11001100_hook("verticalSwiping", true, "object-key-init"),
              arrows: cc11001100_hook("arrows", true, "object-key-init"),
              prevArrow: cc11001100_hook("prevArrow", '<i class="prev fa fa-angle-up"></i>', "object-key-init"),
              nextArrow: cc11001100_hook("nextArrow", '<i class="next fa fa-angle-down"></i>', "object-key-init"),
              adaptiveHeight: cc11001100_hook("adaptiveHeight", true, "object-key-init")
            });
          }
        });
        $.each($('.ae-list-items'), function () {
          var $this_element = cc11001100_hook("$this_element", $(this), "var-init");
          if ($this_element.attr('data-slick-attr') !== undefined) {
            var attr = cc11001100_hook("attr", $this_element.attr("data-slick-attr"), "var-init");
            var attr_json = cc11001100_hook("attr_json", JSON.parse(attr), "var-init");
            if ($(this).closest('.primary-sidebar').length > 0 || $(this).closest('#footer-widgets').length > 0 || $(this).closest('.homepage-sidebar').length > 0) {
              attr_json.slidesToScroll = cc11001100_hook("attr_json.slidesToScroll", 1, "assign");
              attr_json.slidesToShow = cc11001100_hook("attr_json.slidesToShow", 1, "assign");
              delete attr_json.responsive;
            }
            $this_element.slick(attr_json);
          }
        });

        /*$('.ae-list-items').slick({
            lazyLoad: 'ondemand'
        });*/

        /*$('.ae-advance-posts-section.ae-slick-init .ae-inner').slick({
            slidesToShow: 3,
        }).on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });*/
        $('#main-nav').meanmenu({
          meanScreenWidth: cc11001100_hook("meanScreenWidth", "1050", "object-key-init")
        });
        $this.initScrollToTop();
        $this.initCategoryMenu();
        $this.initSearch();
        $this.initStickySidebar();
        $this.cartHover();
        $this.searchHolderHeight();

        /* $('.ae-product-cat-tab li').on('click', function () {
             $this.activeProductCategoryTab($(this));
         })*/
      });

      $(window).resize(function ($) {
        $this.cartHover();
        $this.searchHolderHeight();
      });
      $this.listGridView();
    },
    listGridView: function () {
      var wrapper = cc11001100_hook("wrapper", $('.ae-list-grid-switcher'), "var-init");
      var class_name = cc11001100_hook("class_name", '', "var-init");
      wrapper.find('a').on('click', function () {
        var type = cc11001100_hook("type", $(this).attr('data-type'), "var-init");
        switch (type) {
          case "list":
            class_name = cc11001100_hook("class_name", "ae-list-view", "assign");
            break;
          case "grid":
            class_name = cc11001100_hook("class_name", "ae-grid-view", "assign");
            break;
          default:
            class_name = cc11001100_hook("class_name", "ae-grid-view", "assign");
            break;
        }
        if (class_name != '') {
          $(this).closest('#shop-wrap').attr('class', '').addClass(class_name);
          $(this).closest('.ae-list-grid-switcher').find('a').removeClass('selected');
          $(this).addClass('selected');
        }
      });
    },
    initScrollToTop: function () {
      // Go to top.
      var $scroll_obj = cc11001100_hook("$scroll_obj", $('#btn-scrollup'), "var-init");
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $scroll_obj.fadeIn();
        } else {
          $scroll_obj.fadeOut();
        }
      });
      $scroll_obj.click(function () {
        $('html, body').animate({
          scrollTop: cc11001100_hook("scrollTop", 0, "object-key-init")
        }, 600);
        return false;
      });
    },
    initSearch: function () {
      $(".search-btn").click(function (e) {
        var search_holder = cc11001100_hook("search_holder", $(this).closest('.search-holder'), "var-init");
        if (search_holder.hasClass('open')) {
          search_holder.removeClass('open');
          search_holder.find(".search-btn i").removeClass('fa-close');
        } else {
          search_holder.addClass('open');
          search_holder.find(".search-btn i").addClass('fa-close');
        }
        e.preventDefault();
      });
    },
    initStickySidebar: function () {
      //sticky sidebar
      var main_body_ref = cc11001100_hook("main_body_ref", $("body"), "var-init");
      if (main_body_ref.hasClass('global-sticky-sidebar')) {
        $('#primary, .primary-sidebar').theiaStickySidebar();
      }
    },
    cartHover: function () {
      var cart_node = cc11001100_hook("cart_node", $('.ae-cart-wrapper'), "var-init");
      $.each(cart_node, function () {
        var window_width = cc11001100_hook("window_width", $(window).outerWidth(), "var-init");
        var container_width = cc11001100_hook("container_width", $('.container').outerWidth(), "var-init");
        var cart_content = cc11001100_hook("cart_content", $(this).find('.ae-cart-content'), "var-init");
        var offset = cc11001100_hook("offset", $(this).offset(), "var-init");
        var offset_left_from_container = cc11001100_hook("offset_left_from_container", offset.left - $('.container').offset().left, "var-init");
        var cart_content_width = cc11001100_hook("cart_content_width", cart_content.outerWidth(), "var-init");
        if (offset_left_from_container + cart_content_width < container_width) {
          cart_content.css({
            'left': cc11001100_hook('left', '0', "object-key-init")
          });
        } else {
          cart_content.css({
            'right': cc11001100_hook('right', '0', "object-key-init")
          });
        }
      });
    },
    searchHolderHeight: function () {
      var search_holder = cc11001100_hook("search_holder", $('.search-holder'), "var-init");
      $.each(search_holder, function () {
        var top_header = cc11001100_hook("top_header", $(this).closest('.top-header'), "var-init");
        var top_header_height = cc11001100_hook("top_header_height", top_header.outerHeight(), "var-init");
        var offset = cc11001100_hook("offset", top_header.offset(), "var-init");
        $(this).find('.search-box').css({
          'top': cc11001100_hook('top', top_header_height + 1 + 'px', "object-key-init")
        });
      });
    },
    initCategoryMenu: function () {
      var specialMenu = cc11001100_hook("specialMenu", $('.special-menu-container'), "var-init");
      specialMenu.find('a.special-menu').on('click', function () {
        if ($(this).parent('li').hasClass('active')) {
          $(this).parent('li').removeClass('active');
        } else {
          $(this).parent('li').addClass('active');
        }
      });
      specialMenu.find('ul.special-menu-wrapper ul.special-sub-menu').css({
        'overflow-y': cc11001100_hook('overflow-y', 'scroll', "object-key-init")
      });
    },
    activeProductCategoryTab: function ($tab_item) {
      var cat_item_from_tab = cc11001100_hook("cat_item_from_tab", $tab_item.attr('data-cat-id'), "var-init");
      var product_wrap = cc11001100_hook("product_wrap", $tab_item.closest('.ae-inner').find('.ae-list-grid'), "var-init");
      var cat_class = cc11001100_hook("cat_class", 'ae-cat-id-' + cat_item_from_tab, "var-init");
      $tab_item.closest('ul.ae-product-cat-tab').find('li').removeClass('ae-active');
      $tab_item.addClass('ae-active');
      if (cat_item_from_tab == "0") {
        product_wrap.find('li.product').show();
      } else {
        product_wrap.find('li.product').hide();
        product_wrap.find('li.product').find('.ae-woo-block-wrap.' + cat_class).closest('li.product').show();
      }
    },
    initAccessibility: function () {
      var main_menu_container = cc11001100_hook("main_menu_container", $('.main-navigation #primary-menu'), "var-init");
      var special_menu_container = cc11001100_hook("special_menu_container", $('.special-menu-container'), "var-init");
      main_menu_container.find('li.menu-item').focusin(function () {
        if (!$(this).hasClass('focus')) {
          $(this).addClass('focus');
        }
      });
      main_menu_container.find('li.menu-item').focusout(function () {
        $(this).removeClass('focus');
      });
      special_menu_container.find('li.menu-item.menu-item-has-children').focusin(function () {
        if (!$(this).hasClass('focus')) {
          $(this).addClass('focus');
        }
      });
      special_menu_container.find('li.menu-item.menu-item-has-children').focusout(function () {
        $(this).removeClass('focus');
      });
    }
  }, "var-init");
  AgencyEcommerceThemeLib.init();
})(jQuery);