"use strict";

function _toConsumableArray(t) {
  cc11001100_hook("t", t, "function-parameter");
  if (Array.isArray(t)) {
    for (var e = cc11001100_hook("e", 0, "var-init"), n = cc11001100_hook("n", Array(t.length), "var-init"); e < t.length; e++) n[e] = cc11001100_hook("n[e]", t[e], "assign");
    return n;
  }
  return Array.from(t);
}
!function () {
  function t() {
    var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
    this.options = cc11001100_hook("this.options", t, "assign"), this.userName = cc11001100_hook("this.userName", this.getCookie("UserName"), "assign"), this.unCollectIds = cc11001100_hook("this.unCollectIds", [], "assign"), this.needCollectId = cc11001100_hook("this.needCollectId", 0, "assign"), this.curFolderId = cc11001100_hook("this.curFolderId", 0, "assign"), this.curCheckId = cc11001100_hook("this.curCheckId", 0, "assign"), this.checkOptions() && this.init();
  }
  !function (t) {
    var e = cc11001100_hook("e", document.createElement("link"), "var-init");
    e.rel = cc11001100_hook("e.rel", "stylesheet", "assign"), e.type = cc11001100_hook("e.type", "text/css", "assign"), e.href = cc11001100_hook("e.href", t, "assign"), document.getElementsByTagName("head")[0].appendChild(e);
  }("https://g.csdnimg.cn/collection-box/2.1.0/collection-box.css"), window.csdn && window.csdn.userLogin || function (t, e) {
    var n = cc11001100_hook("n", document.createElement("script"), "var-init");
    n.type = cc11001100_hook("n.type", "text/javascript", "assign"), n.readyState ? n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
      "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), e && e());
    }, "assign") : n.onload = cc11001100_hook("n.onload", function () {
      e && e();
    }, "assign"), n.src = cc11001100_hook("n.src", t, "assign"), document.getElementsByTagName("head")[0].appendChild(n);
  }("https://g.csdnimg.cn/user-login/3.0.1/user-login.js"), t.prototype.init = cc11001100_hook("t.prototype.init", function () {
    this.render().bindEvent().getList(this.renderList), this.data = cc11001100_hook("this.data", {
      url: cc11001100_hook("url", this.options.url, "object-key-init"),
      source: cc11001100_hook("source", this.options.source, "object-key-init"),
      sourceId: cc11001100_hook("sourceId", Number(this.options.source_id, 10), "object-key-init"),
      author: cc11001100_hook("author", this.options.author, "object-key-init"),
      title: cc11001100_hook("title", this.options.title, "object-key-init"),
      description: cc11001100_hook("description", this.options.description || "", "object-key-init"),
      fromType: cc11001100_hook("fromType", "PC", "object-key-init"),
      username: cc11001100_hook("username", this.userName, "object-key-init")
    }, "assign");
  }, "assign"), t.prototype.sortListByTime = cc11001100_hook("t.prototype.sortListByTime", function (t) {
    var e = cc11001100_hook("e", this, "var-init");
    t = cc11001100_hook("t", t.sort(function (t, e) {
      return +new Date(e.UpdatedAt) - +new Date(t.UpdatedAt);
    }), "assign");
    var n = cc11001100_hook("n", this.getNearItemFolderId(), "var-init"),
      o = cc11001100_hook("o", e.findNearCollectionItem(n, t), "var-init"),
      i = cc11001100_hook("i", t.filter(function (t) {
        return t.ID !== o.ID;
      }), "var-init");
    o && i.unshift(o);
    var s = cc11001100_hook("s", i.find(function (t) {
        return "默认收藏夹" === t.Name;
      }), "var-init"),
      c = cc11001100_hook("c", i.filter(function (t) {
        return "默认收藏夹" !== t.Name;
      }), "var-init"),
      l = cc11001100_hook("l", s ? [].concat(s, [].concat(_toConsumableArray(c))) : [].concat([].concat(_toConsumableArray(c))), "var-init");
    return void 0, l;
  }, "assign"), t.prototype.filterCollectionItems = cc11001100_hook("t.prototype.filterCollectionItems", function (t) {
    var e = cc11001100_hook("e", 0, "var-init"),
      n = cc11001100_hook("n", this, "var-init");
    return t = cc11001100_hook("t", t.map(function (t) {
      return e = cc11001100_hook("e", t.CheckStatus && 0 === e ? t.CheckStatus : e, "assign"), t.CheckStatus !== e && 0 !== t.CheckStatus && (n.unCollectIds.push(t.CheckStatus), t.CheckStatus = cc11001100_hook("t.CheckStatus", 0, "assign")), t;
    }), "assign"), void 0, n.deleteCollectionItems(), t;
  }, "assign"), t.prototype.findNearCollectionItem = cc11001100_hook("t.prototype.findNearCollectionItem", function (t, e) {
    var n = cc11001100_hook("n", "", "var-init");
    return e.forEach(function (e) {
      n = cc11001100_hook("n", e.ID === t ? e : n, "assign");
    }), n;
  }, "assign"), t.prototype.checkOptions = cc11001100_hook("t.prototype.checkOptions", function () {
    var t = cc11001100_hook("t", !0, "var-init"),
      e = cc11001100_hook("e", this.options, "var-init");
    return e ? "url" in e && "" !== e.url ? "source" in e && "" !== e.source ? "source_id" in e && "" !== e.source_id ? "author" in e && "" !== e.author ? "title" in e && "" !== e.title || (void 0, t = cc11001100_hook("t", !1, "assign")) : (void 0, t = cc11001100_hook("t", !1, "assign")) : (void 0, t = cc11001100_hook("t", !1, "assign")) : (void 0, t = cc11001100_hook("t", !1, "assign")) : (void 0, t = cc11001100_hook("t", !1, "assign")) : (void 0, t = cc11001100_hook("t", !1, "assign")), t;
  }, "assign"), t.prototype.render = cc11001100_hook("t.prototype.render", function () {
    var t = cc11001100_hook("t", this.getThemeClass(), "var-init"),
      e = cc11001100_hook("e", $('<div id="csdn-collection" class="' + t + '">\n                  <div class="csdn-collection-container">\n                    <div class="csdn-collection-header">添加收藏夹<span class="csdn-collection-close">x</span></div>\n                    <div class="csdn-collection-body">\n                      <div class="csdn-collection-folder">\n                        <span class="csdn-collection-tip"></span>\n                        <span class="csdn-collection-btn"><i></i>新建文件夹</span>\n                        <div class="csdn-collection-input">\n                          <input type="text"  maxlength="20" placeholder="最多可输入20个字">\n                          <button><i></i>新建</button>\n                       </div>\n                      </div>\n                      <p class="csdn-collection-msg"></p>\n                      <ul class="csdn-collection-items"></ul>\n                    </div>\n                  </div>\n                </div>'), "var-init");
    return this.box = cc11001100_hook("this.box", e, "assign"), this.list = cc11001100_hook("this.list", this.box.find(".csdn-collection-items"), "assign"), this.toggleBtn = cc11001100_hook("this.toggleBtn", this.box.find(".csdn-collection-btn"), "assign"), this.inputBox = cc11001100_hook("this.inputBox", this.box.find(".csdn-collection-input"), "assign"), this.input = cc11001100_hook("this.input", this.box.find(".csdn-collection-input input"), "assign"), this.addBtn = cc11001100_hook("this.addBtn", this.box.find(".csdn-collection-input button"), "assign"), this.submitBtn = cc11001100_hook("this.submitBtn", this.box.find(".csdn-collection-submit"), "assign"), this.closeBtn = cc11001100_hook("this.closeBtn", this.box.find(".csdn-collection-close"), "assign"), this.tip = cc11001100_hook("this.tip", this.box.find(".csdn-collection-tip"), "assign"), this.msg = cc11001100_hook("this.msg", this.box.find(".csdn-collection-msg"), "assign"), $("body").append(e), this;
  }, "assign"), t.prototype.bindEvent = cc11001100_hook("t.prototype.bindEvent", function () {
    var t = cc11001100_hook("t", this, "var-init");
    return this.list.on("click", "li", function (e) {
      t.clickItemHandler.call(t, $(this));
    }), this.toggleBtn.on("click", function (e) {
      t.needCollectId = cc11001100_hook("t.needCollectId", 0, "assign"), t.clickToggleBtnHandler.call(t, e);
    }), this.input.on("keyup", function (e) {
      t.keyupInputHandler.call(t, e);
    }).on("focus", function (e) {
      !t.getTip() && t.setTip() && t.tip.show();
    }), t.box.on("click", function (e) {
      if (!t.inputBox.is(":hidden")) {
        $(e.target).closest(".csdn-collection-input").length || t.hideInputBox().hideMsg() && t.tip.hide();
      }
      return $(e.target).closest(".csdn-collection-container").length || t.clickCloseBtnHandler(), e.stopPropagation(), !1;
    }), this.addBtn.on("click", function (e) {
      window.csdn.userLogin.loadAjax(t.createCollectionItems.bind(t, e));
    }), this.closeBtn.on("click", t.clickCloseBtnHandler.bind(t)), this.submitBtn.on("click", t.clickSubmitBtnHandler.bind(t)), this;
  }, "assign"), t.prototype.getThemeClass = cc11001100_hook("t.prototype.getThemeClass", function () {
    var t = cc11001100_hook("t", "csdn-collection-theme-default", "var-init");
    return ("black" === this.options.theme || window.csdn && window.csdn.toolbarIsBlack) && (t = cc11001100_hook("t", "csdn-collection-theme-dark", "assign")), t;
  }, "assign"), t.prototype.trim = cc11001100_hook("t.prototype.trim", function (t) {
    return t.replace(/^\s*/g, "").replace(/\s*$/g, "");
  }, "assign"), t.prototype.getList = cc11001100_hook("t.prototype.getList", function (t) {
    var e = cc11001100_hook("e", this, "var-init"),
      n = cc11001100_hook("n", e.options.url, "var-init");
    return $.ajax({
      type: cc11001100_hook("type", "get", "object-key-init"),
      url: cc11001100_hook("url", "https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck?url=" + n, "object-key-init"),
      crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (n) {
        if (200 === n.code) {
          var o = cc11001100_hook("o", e.sortListByTime(n.data.result), "var-init");
          t && t.call(e, o || []);
        } else e.showMsg(reponse.msg);
      },
      error: cc11001100_hook("error", function (t) {
        function e(e) {
          cc11001100_hook("e", e, "function-parameter");
          return t.apply(this, arguments);
        }
        return e.toString = cc11001100_hook("e.toString", function () {
          return t.toString();
        }, "assign"), e;
      }(function (t) {
        if (t && t.responseText) {
          var n = cc11001100_hook("n", JSON.parse(t.responseText).message, "var-init");
          n && e.showMsg(n);
        }
        void 0;
      }), "object-key-init")
    }), this;
  }, "assign"), t.prototype.renderList = cc11001100_hook("t.prototype.renderList", function (t) {
    function e(t) {
      cc11001100_hook("t", t, "function-parameter");
      return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    var n = cc11001100_hook("n", this.getNearItemFolderId(), "var-init"),
      o = cc11001100_hook("o", "" + t.map(function (t) {
        return '<li class="csdn-collection-item ' + (t.CheckStatus ? "collected" : "") + '" ' + (t.CheckStatus ? "data-check-id=" + t.CheckStatus : "") + "  data-folder-id=" + t.ID + ">" + (n === t.ID ? '<i class="near"></i>' : "") + "<span>" + e(t.Name) + "</span>" + (t.IsPrivate ? '<i class="lock"></i>' : "") + '<span class="collect-btn">' + (t.CheckStatus ? "已收藏" : "收藏") + "</span></li>";
      }).join(""), "var-init");
    return this.list.html(o), this;
  }, "assign"), t.prototype.setDafaultItem = cc11001100_hook("t.prototype.setDafaultItem", function () {
    var t = cc11001100_hook("t", this.list.find(".select"), "var-init");
    0 === t.length && this.list.find("li").first().click() || (this.curFolderId = cc11001100_hook("this.curFolderId", 1 * t.attr("data-folder-id"), "assign"), this.curCheckId = cc11001100_hook("this.curCheckId", 1 * t.attr("data-check-id"), "assign")), void 0;
  }, "assign"), t.prototype.renderItem = cc11001100_hook("t.prototype.renderItem", function (t) {
    var e = cc11001100_hook("e", '<li class="csdn-collection-item ' + (t.CheckStatus ? "collected" : "") + '" data-folder-id=' + t.id + "><span>" + function (t) {
        return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }(t.name) + "</span>" + (t.isPrivate ? '<i class="lock"></i>' : "") + '<span class="collect-btn">' + (t.CheckStatus ? "已收藏" : "收藏") + "</span></li>", "var-init"),
      n = cc11001100_hook("n", this.list.find("li:first"), "var-init");
    return $(e).insertAfter(n), this.list.scrollTop(0), this;
  }, "assign"), t.prototype.getNearItemFolderId = cc11001100_hook("t.prototype.getNearItemFolderId", function () {
    return +localStorage.getItem("csdn_collection_" + this.userName);
  }, "assign"), t.prototype.setNearItemFolderId = cc11001100_hook("t.prototype.setNearItemFolderId", function (t) {
    return localStorage.setItem("csdn_collection_" + this.userName, t), this;
  }, "assign"), t.prototype.setTip = cc11001100_hook("t.prototype.setTip", function () {
    return localStorage.setItem("csdn_collection_tip", new Date().getTime()), this;
  }, "assign"), t.prototype.getTip = cc11001100_hook("t.prototype.getTip", function () {
    return localStorage.getItem("csdn_collection_tip");
  }, "assign"), t.prototype.getCookie = cc11001100_hook("t.prototype.getCookie", function (t) {
    var e = cc11001100_hook("e", {}, "var-init");
    return document.cookie.replace(/([^=;\s]+)=([^=;\s]+)/g, function () {
      for (var t = cc11001100_hook("t", arguments.length, "var-init"), n = cc11001100_hook("n", Array(t), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < t; o++) n[o] = cc11001100_hook("n[o]", arguments[o], "assign");
      var i = cc11001100_hook("i", n[1], "var-init"),
        s = cc11001100_hook("s", n[2], "var-init");
      e[i] = cc11001100_hook("e[i]", s, "assign");
    }), t ? e[t] : e;
  }, "assign"), t.prototype.showInputBox = cc11001100_hook("t.prototype.showInputBox", function () {
    return this.toggleBtn.hide(), this.inputBox.show(), this.input.focus(), this;
  }, "assign"), t.prototype.hideInputBox = cc11001100_hook("t.prototype.hideInputBox", function () {
    return this.inputBox.hide(), this.input.val(""), this.toggleBtn.show(), this;
  }, "assign"), t.prototype.showMsg = cc11001100_hook("t.prototype.showMsg", function (t) {
    return t && this.msg.html(t).show(), this;
  }, "assign"), t.prototype.hideMsg = cc11001100_hook("t.prototype.hideMsg", function (t) {
    return this.msg.hide().html(), this;
  }, "assign"), t.prototype.checkName = cc11001100_hook("t.prototype.checkName", function (t) {
    var e = cc11001100_hook("e", !0, "var-init"),
      n = cc11001100_hook("n", "", "var-init");
    return e = cc11001100_hook("e", !!(t && t.length <= 20 && t.length >= 2), "assign"), "" === t ? n = cc11001100_hook("n", "名称不能为空", "assign") : t && t.length > 20 ? n = cc11001100_hook("n", "名称不能超过20个字", "assign") : t && t.length < 2 && (n = cc11001100_hook("n", "名称在2到20个字之间", "assign")), void 0, n && this.showMsg(n) || this.hideMsg(), e;
  }, "assign"), t.prototype.checkCollectionStatus = cc11001100_hook("t.prototype.checkCollectionStatus", function (t) {
    var e = cc11001100_hook("e", this, "var-init"),
      n = cc11001100_hook("n", this.options.url, "var-init");
    $.ajax({
      type: cc11001100_hook("type", "get", "object-key-init"),
      url: cc11001100_hook("url", "https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl?url=" + n, "object-key-init"),
      crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (n) {
        if (200 === n.code) {
          var o = cc11001100_hook("o", !1, "var-init"),
            i = cc11001100_hook("i", n.data, "var-init");
          for (var s in i) i.hasOwnProperty(s) && i[s] > 0 && (o = cc11001100_hook("o", !0, "assign"));
          e.options.collectionCallBack && e.options.collectionCallBack(o), t && t();
        } else e.showMsg(n.msg);
      },
      error: function (t) {
        void 0;
      }
    });
  }, "assign"), t.prototype.clickItemHandler = cc11001100_hook("t.prototype.clickItemHandler", function (t) {
    var e = cc11001100_hook("e", this, "var-init"),
      n = cc11001100_hook("n", 1 * t.attr("data-folder-id"), "var-init"),
      o = cc11001100_hook("o", 1 * (t.attr("data-check-id") || 0), "var-init");
    e.needCollectId = cc11001100_hook("e.needCollectId", n, "assign"), e.unCollectIds = cc11001100_hook("e.unCollectIds", 0 === o ? [] : [o], "assign"), void 0, window.csdn.userLogin.loadAjax(function () {
      e.unCollectIds.length > 0 && e.deleteCollectionItems(), !e.unCollectIds.length > 0 && e.needCollectId && e.createCollectionItems();
    });
  }, "assign"), t.prototype.clickToggleBtnHandler = cc11001100_hook("t.prototype.clickToggleBtnHandler", function (t) {
    var e = cc11001100_hook("e", this, "var-init");
    t.stopPropagation(), e.showInputBox();
  }, "assign"), t.prototype.clickAddBtnHandler = cc11001100_hook("t.prototype.clickAddBtnHandler", function (t) {
    var e = cc11001100_hook("e", this, "var-init"),
      n = cc11001100_hook("n", e.trim(e.input.val()), "var-init"),
      o = cc11001100_hook("o", {
        name: cc11001100_hook("name", n, "object-key-init"),
        source: cc11001100_hook("source", e.options.source, "object-key-init"),
        description: cc11001100_hook("description", "", "object-key-init"),
        isPrivate: cc11001100_hook("isPrivate", 0, "object-key-init"),
        username: cc11001100_hook("username", e.userName, "object-key-init")
      }, "var-init");
    e.checkName(n) && $.ajax({
      type: cc11001100_hook("type", "post", "object-key-init"),
      url: cc11001100_hook("url", "https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder", "object-key-init"),
      data: cc11001100_hook("data", JSON.stringify(o), "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
      crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (t) {
        200 === t.code ? e.renderItem(t.data).hideInputBox().hideMsg() : e.showMsg(t.msg);
      },
      error: function (t) {
        if (t && t.responseText) {
          var n = cc11001100_hook("n", JSON.parse(t.responseText).message, "var-init");
          n && e.showMsg(n);
        }
        void 0;
      }
    });
  }, "assign"), t.prototype.keyupInputHandler = cc11001100_hook("t.prototype.keyupInputHandler", function (t) {
    var e = cc11001100_hook("e", t.keyCode, "var-init");
    27 === e && this.hideInputBox().hideMsg(), 13 === e && this.addBtn.click();
  }, "assign"), t.prototype.clickCloseBtnHandler = cc11001100_hook("t.prototype.clickCloseBtnHandler", function () {
    this.box.remove();
  }, "assign"), t.prototype.clickSubmitBtnHandler = cc11001100_hook("t.prototype.clickSubmitBtnHandler", function () {
    var t = cc11001100_hook("t", this, "var-init");
    window.csdn.userLogin.loadAjax(function () {
      void 0, t.unCollectIds.length > 0 && t.deleteCollectionItems(), t.needCollectId && t.createCollectionItems();
    }), t.clickCloseBtnHandler();
  }, "assign"), t.prototype.createCollectionItems = cc11001100_hook("t.prototype.createCollectionItems", function () {
    var t = cc11001100_hook("t", this, "var-init"),
      e = cc11001100_hook("e", t.trim(t.input.val()), "var-init"),
      n = cc11001100_hook("n", Object.assign({}, this.data, {
        folderId: cc11001100_hook("folderId", t.needCollectId, "object-key-init"),
        newFolderName: cc11001100_hook("newFolderName", e, "object-key-init")
      }), "var-init");
    if (0 !== t.needCollectId || t.checkName(e)) return $.ajax({
      type: cc11001100_hook("type", "post", "object-key-init"),
      url: cc11001100_hook("url", "https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavorite", "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
      data: cc11001100_hook("data", JSON.stringify(n), "object-key-init"),
      crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (e) {
        if (200 === e.code) {
          var n = cc11001100_hook("n", t.needCollectId ? t.needCollectId : e.data.folderId, "var-init");
          void 0, t.clickCloseBtnHandler(), t.setNearItemFolderId(n).checkCollectionStatus();
        } else t.showMsg(e.msg);
      },
      error: function (e) {
        if (e && e.responseText) {
          var n = cc11001100_hook("n", JSON.parse(e.responseText).message, "var-init");
          n && t.showMsg(n);
        }
        void 0;
      }
    }), this;
  }, "assign"), t.prototype.deleteCollectionItems = cc11001100_hook("t.prototype.deleteCollectionItems", function () {
    var t = cc11001100_hook("t", this, "var-init"),
      e = cc11001100_hook("e", t.unCollectIds, "var-init"),
      n = cc11001100_hook("n", {
        source: cc11001100_hook("source", t.options.source, "object-key-init"),
        ids: cc11001100_hook("ids", e, "object-key-init"),
        username: cc11001100_hook("username", t.userName, "object-key-init"),
        fromType: cc11001100_hook("fromType", "PC", "object-key-init")
      }, "var-init");
    if (e.length) return $.ajax({
      type: cc11001100_hook("type", "post", "object-key-init"),
      url: cc11001100_hook("url", "https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/cancelFavorite", "object-key-init"),
      data: cc11001100_hook("data", JSON.stringify(n), "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
      crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (n) {
        200 === n.code ? (t.unCollectIds = cc11001100_hook("t.unCollectIds", [], "assign"), void 0, t.checkCollectionStatus(), t.clickCloseBtnHandler()) : t.showMsg(n.msg);
      },
      error: function (e) {
        if (e && e.responseText) {
          var n = cc11001100_hook("n", JSON.parse(e.responseText).message, "var-init");
          n && t.showMsg(n);
        }
        void 0;
      }
    }), this;
  }, "assign"), window.csdn = cc11001100_hook("window.csdn", window.csdn || {}, "assign"), window.csdn.collectionBox = cc11001100_hook("window.csdn.collectionBox", window.csdn.collectionBox || {}, "assign"), window.csdn.collectionBox.show = cc11001100_hook("window.csdn.collectionBox.show", function (e) {
    window.csdn.userLogin.loadAjax(function () {
      window.csdn.collectionBox.box = cc11001100_hook("window.csdn.collectionBox.box", new t(e), "assign");
    });
  }, "assign"), window.csdn.collectionBox.close = cc11001100_hook("window.csdn.collectionBox.close", function () {
    window.csdn.collectionBox.box && window.csdn.collectionBox.box.clickCloseBtnHandler();
  }, "assign"), $(document).on("click", "[data-bind-collection=true]", function (t) {
    try {
      var e = cc11001100_hook("e", window.csdn.collectionBox.params, "var-init");
      e && window.csdn.collectionBox.show(e);
    } catch (t) {
      void 0;
    }
  });
}();