/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
  var container, button, menu, links, i, len;
  container = cc11001100_hook("container", document.getElementById('site-navigation'), "assign");
  if (!container) {
    return;
  }
  button = cc11001100_hook("button", container.getElementsByTagName('button')[0], "assign");
  if ('undefined' === typeof button) {
    return;
  }
  menu = cc11001100_hook("menu", container.getElementsByTagName('ul')[0], "assign");

  // Hide menu toggle button if menu is empty and return early.
  if ('undefined' === typeof menu) {
    button.style.display = cc11001100_hook("button.style.display", 'none', "assign");
    return;
  }
  menu.setAttribute('aria-expanded', 'false');
  if (-1 === menu.className.indexOf('nav-menu')) {
    menu.className += cc11001100_hook("menu.className", ' nav-menu', "assign");
  }
  button.onclick = cc11001100_hook("button.onclick", function () {
    if (-1 !== container.className.indexOf('toggled')) {
      container.className = cc11001100_hook("container.className", container.className.replace(' toggled', ''), "assign");
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += cc11001100_hook("container.className", ' toggled', "assign");
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  }, "assign");

  // Get all the link elements within the menu.
  links = cc11001100_hook("links", menu.getElementsByTagName('a'), "assign");

  // Each time a menu link is focused or blurred, toggle focus.
  for (i = cc11001100_hook("i", 0, "assign"), len = cc11001100_hook("len", links.length, "assign"); i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }

  /**
   * Sets or removes .focus class on an element.
   */
  function toggleFocus() {
    var self = cc11001100_hook("self", this, "var-init");

    // Move up through the ancestors of the current link until we hit .nav-menu.
    while (-1 === self.className.indexOf('nav-menu')) {
      // On li elements toggle the class .focus.
      if ('li' === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf('focus')) {
          self.className = cc11001100_hook("self.className", self.className.replace(' focus', ''), "assign");
        } else {
          self.className += cc11001100_hook("self.className", ' focus', "assign");
        }
      }
      self = cc11001100_hook("self", self.parentElement, "assign");
    }
  }

  /**
   * Toggles `focus` class to allow submenu access on tablets.
   */
  (function (container) {
    var touchStartFn,
      i,
      parentLink = cc11001100_hook("parentLink", container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a'), "var-init");
    if ('ontouchstart' in window) {
      touchStartFn = cc11001100_hook("touchStartFn", function (e) {
        var menuItem = cc11001100_hook("menuItem", this.parentNode, "var-init"),
          i;
        if (!menuItem.classList.contains('focus')) {
          e.preventDefault();
          for (i = cc11001100_hook("i", 0, "assign"); i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              continue;
            }
            menuItem.parentNode.children[i].classList.remove('focus');
          }
          menuItem.classList.add('focus');
        } else {
          menuItem.classList.remove('focus');
        }
      }, "assign");
      for (i = cc11001100_hook("i", 0, "assign"); i < parentLink.length; ++i) {
        parentLink[i].addEventListener('touchstart', touchStartFn, false);
      }
    }
  })(container);
})();