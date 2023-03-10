/**
 * jQuery meanMenu v2.0.2
 * Copyright (C) 2012-2013 Chris Wharton (themes@meanthemes.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 *
 * Find more information at http://www.meanthemes.com/plugins/meanmenu/
 *
 */
(function ($) {
  $.fn.meanmenu = cc11001100_hook("$.fn.meanmenu", function (options) {
    var defaults = cc11001100_hook("defaults", {
      meanMenuTarget: cc11001100_hook("meanMenuTarget", jQuery(this), "object-key-init"),
      // Target the current HTML markup you wish to replace
      meanMenuContainer: cc11001100_hook("meanMenuContainer", '#masthead', "object-key-init"),
      // Choose where meanmenu will be placed within the HTML
      meanMenuClose: cc11001100_hook("meanMenuClose", "X", "object-key-init"),
      // single character you want to represent the close menu button
      meanMenuCloseSize: cc11001100_hook("meanMenuCloseSize", "18px", "object-key-init"),
      // set font size of close button
      meanMenuOpen: cc11001100_hook("meanMenuOpen", "<span /><span /><span />", "object-key-init"),
      // text/markup you want when menu is closed
      meanRevealPosition: cc11001100_hook("meanRevealPosition", "right", "object-key-init"),
      // left right or center positions
      meanRevealPositionDistance: cc11001100_hook("meanRevealPositionDistance", "0", "object-key-init"),
      // Tweak the position of the menu
      meanRevealColour: cc11001100_hook("meanRevealColour", "", "object-key-init"),
      // override CSS colours for the reveal background
      meanRevealHoverColour: cc11001100_hook("meanRevealHoverColour", "", "object-key-init"),
      // override CSS colours for the reveal hover
      meanScreenWidth: cc11001100_hook("meanScreenWidth", "767", "object-key-init"),
      // set the screen width you want meanmenu to kick in at
      meanNavPush: cc11001100_hook("meanNavPush", "", "object-key-init"),
      // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
      meanShowChildren: cc11001100_hook("meanShowChildren", true, "object-key-init"),
      // true to show children in the menu, false to hide them
      meanExpandableChildren: cc11001100_hook("meanExpandableChildren", true, "object-key-init"),
      // true to allow expand/collapse children
      meanExpand: cc11001100_hook("meanExpand", "+", "object-key-init"),
      // single character you want to represent the expand for ULs
      meanContract: cc11001100_hook("meanContract", "-", "object-key-init"),
      // single character you want to represent the contract for ULs
      meanRemoveAttrs: cc11001100_hook("meanRemoveAttrs", false, "object-key-init") // true to remove classes and IDs, false to keep them
    }, "var-init");
    var options = cc11001100_hook("options", $.extend(defaults, options), "var-init");

    // get browser width
    currentWidth = cc11001100_hook("currentWidth", window.innerWidth || document.documentElement.clientWidth, "assign");
    return this.each(function () {
      var meanMenu = cc11001100_hook("meanMenu", options.meanMenuTarget, "var-init");
      var meanContainer = cc11001100_hook("meanContainer", options.meanMenuContainer, "var-init");
      var meanReveal = cc11001100_hook("meanReveal", options.meanReveal, "var-init");
      var meanMenuClose = cc11001100_hook("meanMenuClose", options.meanMenuClose, "var-init");
      var meanMenuCloseSize = cc11001100_hook("meanMenuCloseSize", options.meanMenuCloseSize, "var-init");
      var meanMenuOpen = cc11001100_hook("meanMenuOpen", options.meanMenuOpen, "var-init");
      var meanRevealPosition = cc11001100_hook("meanRevealPosition", options.meanRevealPosition, "var-init");
      var meanRevealPositionDistance = cc11001100_hook("meanRevealPositionDistance", options.meanRevealPositionDistance, "var-init");
      var meanRevealColour = cc11001100_hook("meanRevealColour", options.meanRevealColour, "var-init");
      var meanRevealHoverColour = cc11001100_hook("meanRevealHoverColour", options.meanRevealHoverColour, "var-init");
      var meanScreenWidth = cc11001100_hook("meanScreenWidth", options.meanScreenWidth, "var-init");
      var meanNavPush = cc11001100_hook("meanNavPush", options.meanNavPush, "var-init");
      var meanRevealClass = cc11001100_hook("meanRevealClass", ".meanmenu-reveal", "var-init");
      meanShowChildren = cc11001100_hook("meanShowChildren", options.meanShowChildren, "assign");
      meanExpandableChildren = cc11001100_hook("meanExpandableChildren", options.meanExpandableChildren, "assign");
      var meanExpand = cc11001100_hook("meanExpand", options.meanExpand, "var-init");
      var meanContract = cc11001100_hook("meanContract", options.meanContract, "var-init");
      var meanRemoveAttrs = cc11001100_hook("meanRemoveAttrs", options.meanRemoveAttrs, "var-init");

      //detect known mobile/tablet usage
      if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        var isMobile = cc11001100_hook("isMobile", true, "var-init");
      }
      if (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) {
        // add scrollbar for IE7 & 8 to stop breaking resize function on small content sites
        jQuery('html').css("overflow-y", "scroll");
      }
      function meanCentered() {
        if (meanRevealPosition == "center") {
          var newWidth = cc11001100_hook("newWidth", window.innerWidth || document.documentElement.clientWidth, "var-init");
          var meanCenter = cc11001100_hook("meanCenter", newWidth / 2 - 22 + "px", "var-init");
          meanRevealPos = cc11001100_hook("meanRevealPos", "left:" + meanCenter + ";right:auto;", "assign");
          if (!isMobile) {
            jQuery('.meanmenu-reveal').css("left", meanCenter);
          } else {
            jQuery('.meanmenu-reveal').animate({
              left: cc11001100_hook("left", meanCenter, "object-key-init")
            });
          }
        }
      }
      menuOn = cc11001100_hook("menuOn", false, "assign");
      meanMenuExist = cc11001100_hook("meanMenuExist", false, "assign");
      if (meanRevealPosition == "right") {
        meanRevealPos = cc11001100_hook("meanRevealPos", "right:" + meanRevealPositionDistance + ";left:auto;", "assign");
      }
      if (meanRevealPosition == "left") {
        meanRevealPos = cc11001100_hook("meanRevealPos", "left:" + meanRevealPositionDistance + ";right:auto;", "assign");
      }
      // run center function	
      meanCentered();

      // set all styles for mean-reveal
      meanStyles = cc11001100_hook("meanStyles", "background:" + meanRevealColour + ";color:" + meanRevealColour + ";" + meanRevealPos, "assign");
      function meanInner() {
        // get last class name
        if (jQuery($navreveal).is(".meanmenu-reveal.meanclose")) {
          $navreveal.html(meanMenuClose);
        } else {
          $navreveal.html(meanMenuOpen);
        }
      }

      //re-instate original nav (and call this on window.width functions)
      function meanOriginal() {
        jQuery('.mean-bar,.mean-push').remove();
        jQuery(meanContainer).removeClass("mean-container");
        jQuery(meanMenu).show();
        menuOn = cc11001100_hook("menuOn", false, "assign");
        meanMenuExist = cc11001100_hook("meanMenuExist", false, "assign");
      }

      //navigation reveal 
      function showMeanMenu() {
        if (currentWidth <= meanScreenWidth) {
          meanMenuExist = cc11001100_hook("meanMenuExist", true, "assign");
          // add class to body so we don't need to worry about media queries here, all CSS is wrapped in '.mean-container'
          jQuery(meanContainer).addClass("mean-container");
          jQuery('.mean-container').prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + meanStyles + '">Show Navigation</a><nav class="mean-nav"></nav></div>');

          //push meanMenu navigation into .mean-nav
          var meanMenuContents = cc11001100_hook("meanMenuContents", jQuery(meanMenu).html(), "var-init");
          jQuery('.mean-nav').html(meanMenuContents);

          // remove all classes from EVERYTHING inside meanmenu nav
          if (meanRemoveAttrs) {
            jQuery('nav.mean-nav *').each(function () {
              jQuery(this).removeAttr("class");
              jQuery(this).removeAttr("id");
            });
          }

          // push in a holder div (this can be used if removal of nav is causing layout issues)
          jQuery(meanMenu).before('<div class="mean-push" />');
          jQuery('.mean-push').css("margin-top", meanNavPush);

          // hide current navigation and reveal mean nav link
          jQuery(meanMenu).hide();
          jQuery(".meanmenu-reveal").show();

          // turn 'X' on or off 
          jQuery(meanRevealClass).html(meanMenuOpen);
          $navreveal = cc11001100_hook("$navreveal", jQuery(meanRevealClass), "assign");

          //hide mean-nav ul
          jQuery('.mean-nav ul').hide();

          // hide sub nav
          if (meanShowChildren) {
            // allow expandable sub nav(s)
            if (meanExpandableChildren) {
              jQuery('.mean-nav ul ul').each(function () {
                if (jQuery(this).children().length) {
                  jQuery(this, 'li:first').parent().append('<a class="mean-expand" href="#" style="font-size: ' + meanMenuCloseSize + '">' + meanExpand + '</a>');
                }
              });
              jQuery('.mean-expand').on("click", function (e) {
                e.preventDefault();
                if (jQuery(this).hasClass("mean-clicked")) {
                  jQuery(this).text(meanExpand);
                  jQuery(this).prev('ul').slideUp(300, function () {});
                } else {
                  jQuery(this).text(meanContract);
                  jQuery(this).prev('ul').slideDown(300, function () {});
                }
                jQuery(this).toggleClass("mean-clicked");
              });
            } else {
              jQuery('.mean-nav ul ul').show();
            }
          } else {
            jQuery('.mean-nav ul ul').hide();
          }

          // add last class to tidy up borders
          jQuery('.mean-nav ul li').last().addClass('mean-last');
          $navreveal.removeClass("meanclose");
          jQuery($navreveal).click(function (e) {
            e.preventDefault();
            if (menuOn == false) {
              $navreveal.css("text-align", "center");
              $navreveal.css("text-indent", "0");
              $navreveal.css("font-size", meanMenuCloseSize);
              jQuery('.mean-nav ul:first').slideDown();
              menuOn = cc11001100_hook("menuOn", true, "assign");
            } else {
              jQuery('.mean-nav ul:first').slideUp();
              menuOn = cc11001100_hook("menuOn", false, "assign");
            }
            $navreveal.toggleClass("meanclose");
            meanInner();
          });
        } else {
          meanOriginal();
        }
      }
      if (!isMobile) {
        //reset menu on resize above meanScreenWidth
        jQuery(window).resize(function () {
          currentWidth = cc11001100_hook("currentWidth", window.innerWidth || document.documentElement.clientWidth, "assign");
          if (currentWidth > meanScreenWidth) {
            meanOriginal();
          } else {
            meanOriginal();
          }
          if (currentWidth <= meanScreenWidth) {
            showMeanMenu();
            meanCentered();
          } else {
            meanOriginal();
          }
        });
      }

      // adjust menu positioning on centered navigation     
      window.onorientationchange = cc11001100_hook("window.onorientationchange", function () {
        meanCentered();
        // get browser width
        currentWidth = cc11001100_hook("currentWidth", window.innerWidth || document.documentElement.clientWidth, "assign");
        if (currentWidth >= meanScreenWidth) {
          meanOriginal();
        }
        if (currentWidth <= meanScreenWidth) {
          if (meanMenuExist == false) {
            showMeanMenu();
          }
        }
      }, "assign");
      // run main menuMenu function on load
      showMeanMenu();
    });
  }, "assign");
})(jQuery);