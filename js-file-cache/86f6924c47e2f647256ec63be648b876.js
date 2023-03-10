function loadHotPost(size, blogUrl, api_authorization) {
  cc11001100_hook("size", size, "function-parameter");
  cc11001100_hook("blogUrl", blogUrl, "function-parameter");
  cc11001100_hook("api_authorization", api_authorization, "function-parameter");
  const data = cc11001100_hook("data", {
    page: cc11001100_hook("page", 0, "object-key-init"),
    size: cc11001100_hook("size", size, "object-key-init"),
    sort: cc11001100_hook("sort", 'topPriority,visits,desc', "object-key-init"),
    time: cc11001100_hook("time", new Date().getTime(), "object-key-init")
  }, "var-init");
  $.ajax({
    headers: {
      'API-Authorization': cc11001100_hook('API-Authorization', api_authorization, "object-key-init")
    },
    url: cc11001100_hook("url", blogUrl + "/api/content/posts", "object-key-init"),
    type: cc11001100_hook("type", 'GET', "object-key-init"),
    data: cc11001100_hook("data", data, "object-key-init"),
    success: cc11001100_hook("success", result => {
      $("#hotPosts").empty();
      $(result.data.content).each((index, item) => {
        $("#hotPosts").append('<li class="py-1 w-full flex justify-start space-x-1"><div class="truncate block"><i class="ri-arrow-right-s-fill"></i><a href="' + item.fullPath + '" class="hover:text-black dark:hover:text-white" title="' + item.title + '">' + item.title + '</a></div></li>');
      });
    }, "object-key-init")
  });
}
function lightBox(selector, gallery) {
  cc11001100_hook("selector", selector, "function-parameter");
  cc11001100_hook("gallery", gallery, "function-parameter");
  $(selector).wrap(function () {
    return '<a data-no-instant data-fancybox="' + gallery + '" href="' + this.src + '" title="' + this.alt + '" data-caption="' + this.alt + '"></a>';
  });
  Fancybox.bind("[data-fancybox]", {
    infinite: cc11001100_hook("infinite", false, "object-key-init"),
    preload: cc11001100_hook("preload", 1, "object-key-init")
  });
}
function toggleNav() {
  $('#mask')[0].style.display = cc11001100_hook("$('#mask')[0].style.display", 'block', "assign");
  $('#mobileNav')[0].classList.remove('translate-x-full');
  let _scrollTop = cc11001100_hook("_scrollTop", document.scrollingElement.scrollTop, "var-init");
  document.body.style.position = cc11001100_hook("document.body.style.position", 'fixed', "assign");
  document.body.style.top = cc11001100_hook("document.body.style.top", -_scrollTop + 'px', "assign");
}
function toggleMask() {
  $('#mask')[0].style.display = cc11001100_hook("$('#mask')[0].style.display", 'none', "assign");
  $('#mobileNav')[0].classList.add('translate-x-full');
  document.body.style.position = cc11001100_hook("document.body.style.position", '', "assign");
  document.body.style.top = cc11001100_hook("document.body.style.top", '', "assign");
  // 使 scrollTop 恢复原状
  document.scrollingElement.scrollTop = cc11001100_hook("document.scrollingElement.scrollTop", _scrollTop, "assign");
}
function generateCatalog() {
  const catalog = cc11001100_hook("catalog", $('#catalog'), "var-init");
  if (!catalog) {
    return;
  }
  let lastLevel = cc11001100_hook("lastLevel", 0, "var-init");
  let lastLeftPx = cc11001100_hook("lastLeftPx", 0, "var-init");
  const url = cc11001100_hook("url", window.location.pathname + "#", "var-init");
  const content = cc11001100_hook("content", $(".markdown-body :header"), "var-init");
  if (!content || content.length === 0) {
    $('#catalog-widget').remove();
  }
  content.each(function () {
    const level = cc11001100_hook("level", this.tagName.replace('H', ''), "var-init");
    const title = cc11001100_hook("title", $(this).text(), "var-init");
    if (lastLevel === 0) {
      lastLevel = cc11001100_hook("lastLevel", level, "assign");
      lastLeftPx = cc11001100_hook("lastLeftPx", 0, "assign");
    }
    if (level > lastLevel) {
      lastLeftPx = cc11001100_hook("lastLeftPx", (level - lastLevel) * 15 + lastLeftPx, "assign");
    }
    if (level < lastLevel) {
      lastLeftPx = cc11001100_hook("lastLeftPx", lastLeftPx - (lastLevel - level) * 15, "assign");
    }
    lastLevel = cc11001100_hook("lastLevel", level, "assign");
    $(this).attr('id', title);
    catalog.append('<li style="padding-left: ' + lastLeftPx + 'px" class="py-1 flex justify-start w-full space-x-1"><a class="truncate block dark:hover:text-white" title="' + title + '" href="' + url + title + '">' + title + '</a></li>');
  });
}
function removeCommentCopyright() {
  var comment = cc11001100_hook("comment", document.querySelector('.halo-comment-part'), "var-init");
  if (comment) {
    var style = cc11001100_hook("style", document.createElement('style'), "var-init");
    style.innerHTML = cc11001100_hook("style.innerHTML", '.edition { display: none }', "assign");
    comment.shadowRoot.append(style);
  }
}
function daisy_cursor() {
  const e = cc11001100_hook("e", document.querySelector(".cursor-inner"), "var-init"),
    t = cc11001100_hook("t", document.querySelector(".cursor-outer"), "var-init");
  e.style.visibility = cc11001100_hook("e.style.visibility", "visible", "assign");
  t.style.visibility = cc11001100_hook("t.style.visibility", "visible", "assign");
  window.onmousemove = cc11001100_hook("window.onmousemove", function (s) {
    t.style.transform = cc11001100_hook("t.style.transform", "translate(" + s.clientX + "px, " + s.clientY + "px)", "assign");
    e.style.transform = cc11001100_hook("e.style.transform", "translate(" + s.clientX + "px, " + s.clientY + "px)", "assign");
  }, "assign");
  $("body").on("mouseenter", "a", function () {
    e.classList.add("cursor-hover");
    t.classList.add("cursor-hover");
  });
  $("body").on("mouseleave", "a, .cursor-pointer", function () {
    $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"));
  });
}
function toggleSearch() {
  $('#search').toggle('.2');
}
function toggleDarkMode() {
  var dark = cc11001100_hook("dark", window.localStorage.getItem('dark'), "var-init");
  if (!dark) {
    dark = cc11001100_hook("dark", 1, "assign");
  } else {
    dark = cc11001100_hook("dark", dark == 1 ? 0 : 1, "assign");
  }
  window.localStorage.setItem('dark', dark);
  darkMode();
}
function darkMode() {
  var dark = cc11001100_hook("dark", window.localStorage.getItem('dark'), "var-init");
  if (!dark) {
    return;
  }
  var comment = cc11001100_hook("comment", document.getElementsByTagName("halo-comment"), "var-init");
  if (dark == 1) {
    $('html').addClass('dark');
    if (comment) {
      var haloComment = cc11001100_hook("haloComment", comment[0].shadowRoot.getElementById("halo-comment"), "var-init");
      $(haloComment).addClass('dark');
      $(haloComment).removeClass('light');
    }
  }
  if (dark == 0) {
    $('html').removeClass('dark');
    if (comment) {
      var haloComment = cc11001100_hook("haloComment", comment[0].shadowRoot.getElementById("halo-comment"), "var-init");
      $(haloComment).removeClass('dark');
      $(haloComment).addClass('light');
    }
  }
}
darkMode();