F.addLog("superman:skeleton/card", {
  scrollLoad: cc11001100_hook("scrollLoad", "4010311000", "object-key-init")
});
F.module("superman:skeleton/card", function (require, exports, ctx) {
  var OneCard = cc11001100_hook("OneCard", function () {
    var _cssReg = cc11001100_hook("_cssReg", /<link[^>]*href="(.*?)"[^>]*>/, "var-init");
    var _menuDom = cc11001100_hook("_menuDom", $("#s_menus_wrapper"), "var-init");
    var _centerMen = cc11001100_hook("_centerMen", $("#s_ctner_menus"), "var-init");
    var _isPull = cc11001100_hook("_isPull", "", "var-init");
    function OneCard(id, name, state) {
      cc11001100_hook("id", id, "function-parameter");
      cc11001100_hook("name", name, "function-parameter");
      cc11001100_hook("state", state, "function-parameter");
      this.id = cc11001100_hook("this.id", "" + id || "", "assign");
      this.loaded = cc11001100_hook("this.loaded", 0, "assign");
      this.offsetUsed = cc11001100_hook("this.offsetUsed", false, "assign");
      this.html = cc11001100_hook("this.html", "", "assign");
      this.name = cc11001100_hook("this.name", name || "", "assign");
      this.state = cc11001100_hook("this.state", state || "", "assign");
      this.mainDom = cc11001100_hook("this.mainDom", $("#s_content_" + this.id), "assign");
      this.mainDom = cc11001100_hook("this.mainDom", this.mainDom[0] ? this.mainDom : _cardMaker({
        id: cc11001100_hook("id", this.id, "object-key-init")
      }), "assign");
      this.waterDom = cc11001100_hook("this.waterDom", null, "assign");
      this.noMore = cc11001100_hook("this.noMore", false, "assign");
      this.myMen = cc11001100_hook("this.myMen", null, "assign");
      this.rendered = cc11001100_hook("this.rendered", false, "assign");
      this.waterPage = cc11001100_hook("this.waterPage", 0, "assign");
      this.waterLoading = cc11001100_hook("this.waterLoading", false, "assign");
      this.cutnetTimes = cc11001100_hook("this.cutnetTimes", 0, "assign");
      this.prevRidsArr = cc11001100_hook("this.prevRidsArr", window.s_session.rids || [], "assign");
      this.repeatNum = cc11001100_hook("this.repeatNum", 0, "assign");
      this.ridsHash = cc11001100_hook("this.ridsHash", {}, "assign");
      this.params = cc11001100_hook("this.params", {}, "assign");
      this.forceLoad = cc11001100_hook("this.forceLoad", false, "assign");
    }
    OneCard.prototype = cc11001100_hook("OneCard.prototype", {
      constructor: cc11001100_hook("constructor", OneCard, "object-key-init"),
      load: function (cb) {
        var _ctx = cc11001100_hook("_ctx", this, "var-init");
        if (_ctx.id != "") {
          if (_ctx.loaded === 0 || _ctx.forceLoad) {
            var bsToken = cc11001100_hook("bsToken", $("#bsToken") && $("#bsToken").val() || "", "var-init");
            _ctx.loaded = cc11001100_hook("_ctx.loaded", 1, "assign");
            _ctx.params.tabid = cc11001100_hook("_ctx.params.tabid", _ctx.id, "assign");
            _ctx.params.tab_flag = cc11001100_hook("_ctx.params.tab_flag", 1, "assign");
            _ctx.params.bsToken = cc11001100_hook("_ctx.params.bsToken", bsToken, "assign");
            if (_ctx.id === "2") {
              _ctx.params.req_type = cc11001100_hook("_ctx.params.req_type", 0, "assign");
            }
            _loadCardHtml(_ctx.params, function (data) {
              _ctx.loaded = cc11001100_hook("_ctx.loaded", 2, "assign");
              _ctx.sessionId = cc11001100_hook("_ctx.sessionId", data.sessionId, "assign");
              _ctx.prevRidsArr = cc11001100_hook("_ctx.prevRidsArr", data.rids, "assign");
              for (var i = cc11001100_hook("i", 0, "var-init"), dataRids = cc11001100_hook("dataRids", data.rids || [], "var-init"), l = cc11001100_hook("l", dataRids.length, "var-init"); i < l; i++) {
                _ctx.ridsHash[dataRids[i]] = cc11001100_hook("_ctx.ridsHash[dataRids[i]]", true, "assign");
              }
              var tabHtml = cc11001100_hook("tabHtml", "", "var-init");
              if (data && typeof data === "string") {
                var first = cc11001100_hook("first", data.indexOf('"html":"'), "var-init");
                var last = cc11001100_hook("last", data.lastIndexOf('"'), "var-init");
                tabHtml = cc11001100_hook("tabHtml", data.substring(first + 8, last), "assign");
              }
              _ctx.html = cc11001100_hook("_ctx.html", tabHtml.replace(_cssReg, ""), "assign");
              if (data.isEnd == 1) {
                _ctx.noMore = cc11001100_hook("_ctx.noMore", true, "assign");
              }
              _ctx.loadCss(tabHtml, cb);
            });
          }
        }
      },
      loadCss: function (html, cb) {
        var match, href;
        if (html) {
          match = cc11001100_hook("match", html.match(_cssReg), "assign");
          if (match) {
            href = cc11001100_hook("href", match[1], "assign");
            $('<link rel="stylesheet" type="text/css" href="' + href + '" />').on("load", function () {
              cb && cb(html);
            }).appendTo(head);
            if ($.browser.safari && window.navigator.platform === "Win32") {
              cb && cb(html);
            }
          } else {
            cb && cb(html);
          }
        } else {
          ctx.fire("syncNomore", {
            cardId: cc11001100_hook("cardId", this.id, "object-key-init")
          });
        }
      },
      appendData: function (cb, toggle, $dom) {
        var _ctx = cc11001100_hook("_ctx", this, "var-init");
        if (_ctx.noMore || _ctx.waterLoading || !_ctx.rendered) {
          if (_ctx.noMore) {
            toggle && toggle(false);
          }
          return false;
        }
        if (!_ctx.loadDom) {
          _ctx.loadDom = cc11001100_hook("_ctx.loadDom", _ctx.mainDom.find(".s-loading"), "assign");
        }
        _ctx.waterLoading = cc11001100_hook("_ctx.waterLoading", true, "assign");
        toggle && toggle(false);
        var bsToken = cc11001100_hook("bsToken", $("#bsToken") && $("#bsToken").val() || "", "var-init");
        var params = cc11001100_hook("params", {
          id: cc11001100_hook("id", _ctx.id, "object-key-init"),
          offset: cc11001100_hook("offset", _ctx.waterPage, "object-key-init"),
          sessionId: cc11001100_hook("sessionId", _ctx.sessionId, "object-key-init"),
          crids: cc11001100_hook("crids", window.s_session.crids, "object-key-init"),
          req_type: cc11001100_hook("req_type", 1, "object-key-init"),
          bsToken: cc11001100_hook("bsToken", bsToken, "object-key-init")
        }, "var-init");
        var paraDom = cc11001100_hook("paraDom", _ctx.mainDom || $("#s_content_" + _ctx.id), "var-init");
        var extraParam = cc11001100_hook("extraParam", paraDom.attr("data-waterpara"), "var-init");
        if (!extraParam && paraDom.find(".s-xmancard").attr("data-waterpara")) {
          extraParam = cc11001100_hook("extraParam", paraDom.find(".s-xmancard").attr("data-waterpara"), "assign");
        }
        if (extraParam) {
          var regx = cc11001100_hook("regx", /([s\S]*?)\=([\s\S]*?)\;/g, "var-init");
          var result = cc11001100_hook("result", null, "var-init");
          while (result = cc11001100_hook("result", regx.exec(extraParam), "assign")) {
            if (result[1] === "offset") {
              if (!_ctx.offsetUsed) {
                params[result[1]] = cc11001100_hook("params[result[1]]", result[2], "assign");
                _ctx.waterPage = cc11001100_hook("_ctx.waterPage", result[2], "assign");
                _ctx.offsetUsed = cc11001100_hook("_ctx.offsetUsed", true, "assign");
              }
            } else {
              params[result[1]] = cc11001100_hook("params[result[1]]", result[2], "assign");
            }
          }
        }
        params.newsNum = cc11001100_hook("params.newsNum", params.newsNum || params.pos, "assign");
        params.needAd = cc11001100_hook("params.needAd", 1, "assign");
        params.refresh_state = cc11001100_hook("params.refresh_state", -1, "assign");
        ctx.fire("beforeLoading");
        _ctx.loadDom.show();
        ctx.fire("scrollLoad");
        F.use("superman:skeleton/model", function (dao) {
          dao.get("waterHtml", function (data) {
            if (data.autoRefresh) {
              _ctx.waterLoading = cc11001100_hook("_ctx.waterLoading", false, "assign");
              return;
            }
            if (!_ctx.waterDom) {
              _ctx.waterDom = cc11001100_hook("_ctx.waterDom", $(".water-container", _ctx.mainDom), "assign");
            }
            if (params.childId === "1_1" && params.sessionId === "0") {
              _ctx.ridsHash = cc11001100_hook("_ctx.ridsHash", {}, "assign");
            }
            var repeat = cc11001100_hook("repeat", _ctx.validateRid(data), "var-init");
            var waterFunc = cc11001100_hook("waterFunc", [function () {
              var target = cc11001100_hook("target", $dom || _ctx.waterDom, "var-init");
              var $html = cc11001100_hook("$html", $('<div class="s-news-list-wrapper c-container c-feed-box"></div>'), "var-init");
              var htmlId = cc11001100_hook("htmlId", "waterpage" + _ctx.waterPage, "var-init");
              $html.attr("id", htmlId);
              var $feed = cc11001100_hook("$feed", $(data), "var-init");
              $html.append($feed);
              target.append($html);
              _ctx.waterLoading = cc11001100_hook("_ctx.waterLoading", false, "assign");
              _ctx.loadDom.hide();
              if (data.isEnd == "1") {
                _ctx.emitNoMore(_ctx.loadDom);
                _ctx.noMore = cc11001100_hook("_ctx.noMore", true, "assign");
              }
              _ctx.waterPage++;
              _ctx.mainDom.attr("data-loaded", 1);
              if (typeof F === "object") {
                try {
                  F.call("superman:components/initSan", "init", "#" + htmlId);
                } catch (e) {
                  console.error(e);
                }
              }
              if (_ctx.id === 2 && data.isEnd === "0") {
                _ctx.mainDom.find("div[data-waterpara]").attr("data-waterpara", "version=" + data.version + ";" + data.waterpara);
              }
              ctx.fire("cardloaded", {
                cardId: cc11001100_hook("cardId", _ctx.id, "object-key-init"),
                loadData: cc11001100_hook("loadData", data, "object-key-init")
              });
              cb && cb.call(_ctx, data);
            }, function () {
              setTimeout(function () {
                _ctx.waterLoading = cc11001100_hook("_ctx.waterLoading", false, "assign");
                _ctx.appendData(cb, toggle);
              }, 50);
            }, function () {
              setTimeout(function () {
                _ctx.waterLoading = cc11001100_hook("_ctx.waterLoading", false, "assign");
                _ctx.appendData(cb, toggle);
              }, 50);
            }, function () {
              setTimeout(function () {
                _ctx.waterLoading = cc11001100_hook("_ctx.waterLoading", false, "assign");
                _ctx.appendData(cb, toggle);
              }, 50);
            }, function () {
              $.ajaxpost(s_domain.baseuri + "/page/data/pageserver", {
                errno: cc11001100_hook("errno", 7009, "object-key-init")
              });
              _ctx.emitNoMore(_ctx.loadDom);
              _ctx.noMore = cc11001100_hook("_ctx.noMore", true, "assign");
            }], "var-init");
            _isPull = cc11001100_hook("_isPull", _isPull === "" || _isPull == 1 ? "1" : undefined, "assign");
            _ctx.cutnetTimes = cc11001100_hook("_ctx.cutnetTimes", 0, "assign");
            waterFunc[repeat]();
          }, params).fail(function () {
            $.ajaxpost(s_domain.baseuri + "/page/data/pageserver", {
              errno: cc11001100_hook("errno", 8001, "object-key-init")
            });
            _ctx.cutnetTimes++;
            if (_ctx.cutnetTimes <= 3) {
              _ctx.waterLoading = cc11001100_hook("_ctx.waterLoading", false, "assign");
              _ctx.appendData(cb, toggle);
            } else {
              _ctx.emitNoMore(_ctx.mainDom.find(".s-loading"));
            }
          });
        });
        return true;
      },
      validateRid: function (data) {
        var _ctx = cc11001100_hook("_ctx", this, "var-init");
        var nextArr = cc11001100_hook("nextArr", data.rids || [], "var-init");
        var isRepeat = cc11001100_hook("isRepeat", 0, "var-init");
        var len = cc11001100_hook("len", nextArr.length, "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < len; i++) {
          if (!!nextArr[i] && !!_ctx.ridsHash[nextArr[i]]) {
            isRepeat = cc11001100_hook("isRepeat", 1, "assign");
          }
        }
        if (isRepeat === 1) {
          _ctx.repeatNum++;
        } else if (_ctx.repeatNum > 0) {
          _ctx.repeatNum = cc11001100_hook("_ctx.repeatNum", 0, "assign");
        }
        if (isRepeat === 0) {
          for (i = cc11001100_hook("i", 0, "assign"); i < len; i++) {
            _ctx.ridsHash[nextArr[i]] = cc11001100_hook("_ctx.ridsHash[nextArr[i]]", true, "assign");
          }
        }
        _ctx.prevRidsArr = cc11001100_hook("_ctx.prevRidsArr", nextArr, "assign");
        return _ctx.repeatNum;
      },
      render: function (cb) {
        var _ctx = cc11001100_hook("_ctx", this, "var-init");
        $("#s_ctner_contents").append(this.mainDom);
        _ctx.load(function (html) {
          var $curDom = cc11001100_hook("$curDom", $(_ctx.html), "var-init");
          _ctx.mainDom.html($curDom);
          if (_ctx.noMore) {
            _ctx.emitNoMore(_ctx.mainDom.find(".s-loading"));
          }
          _ctx.rendered = cc11001100_hook("_ctx.rendered", true, "assign");
          cb && cb();
          var bds = cc11001100_hook("bds", window.bds, "var-init");
          var sampleval = cc11001100_hook("sampleval", bds && bds.comm && bds.comm.desktopSampleval, "var-init");
          if (sampleval) {
            var _html = cc11001100_hook("_html", _ctx.html, "var-init");
            var isNode = cc11001100_hook("isNode", /s_xmancard_desktop/.test(_html), "var-init");
            if (+_ctx.id === 100) {
              if (!isNode) {
                $(window).trigger("desktopNotNode");
              } else {
                $(window).trigger("desktopNode");
              }
            }
          }
          ctx.fire("cardinitloaded");
        });
        return _ctx;
      },
      add2Men: function (cb) {
        var _ctx = cc11001100_hook("_ctx", this, "var-init");
        if (!_ctx.myMen) {
          var tpl = cc11001100_hook("tpl", _menuMaker({
            id: cc11001100_hook("id", this.id, "object-key-init"),
            name: cc11001100_hook("name", this.name, "object-key-init")
          }), "var-init");
          _ctx.myMen = cc11001100_hook("_ctx.myMen", $(tpl), "assign");
        }
        if (this.id === "3") {
          _menuDom.parent().append(_ctx.myMen);
          F.call("newmusic:index", "init");
        } else {
          _menuDom.append(_ctx.myMen);
        }
        _ctx.myMen.show();
        _ctx.render();
        return _ctx;
      },
      del4Men: function (cb) {
        var _ctx = cc11001100_hook("_ctx", this, "var-init");
        if ((_ctx.myMen = cc11001100_hook("_ctx.myMen", $("[data-id=" + this.id + "]", _menuDom), "assign"))[0]) {
          _ctx.myMen.hide();
          _ctx.mainDom.hide();
          _ctx.state = cc11001100_hook("_ctx.state", "", "assign");
        }
        return _ctx;
      },
      show: function (cb) {
        var _ctx = cc11001100_hook("_ctx", this, "var-init");
        if (this.rendered) {
          if (_isPull == 1 && this.waterPage == 0) {
            this.appendData(function (data) {});
          }
          this.mainDom.stop().show();
        } else {
          this.render(function () {
            cb && cb.call(this);
          });
          this.mainDom.stop().show();
        }
        cb && cb.call(this);
        this.getMyMen().addClass("current");
        return this;
      },
      hide: function (cb) {
        this.mainDom.stop().hide();
        this.getMyMen().removeClass("current");
        cb && cb.call(this);
        return this;
      },
      getMyMen: function () {
        return this.myMen || (this.myMen = cc11001100_hook("this.myMen", $("[data-id=" + this.id + "]", _centerMen), "assign"));
      },
      emitNoMore: function ($dom) {
        $dom = cc11001100_hook("$dom", $dom || this.mainDom.find(".s-loading"), "assign");
        $dom.find(".load-text").addClass("no-more").html("没有更多内容了").end().find("img").hide().end().prepend('<div class="load-done"></div>').show();
        if (this.id == 100 || this.id == "1" || this.id == "22" || this.id == 24) {
          $dom.hide();
        }
        ctx.fire("cardLoadDone", {
          cardId: cc11001100_hook("cardId", this.id, "object-key-init")
        });
      },
      resetNoMore: function ($dom) {
        $dom = cc11001100_hook("$dom", $dom || this.mainDom.find(".s-loading"), "assign");
        $dom.hide().find(".load-text").removeClass("no-more").html("正在加载中").end().find("img").show().end().find(".load-done").remove();
      },
      setForceLoad: function (force) {
        this.forceLoad = cc11001100_hook("this.forceLoad", force, "assign");
      },
      addParam: function (name, value) {
        this.params[name] = cc11001100_hook("this.params[name]", value, "assign");
      }
    }, "assign");
    function _menuMaker(set) {
      cc11001100_hook("set", set, "function-parameter");
      var tpl;
      if (set.id === "3") {
        tpl = cc11001100_hook("tpl", '<div class="s-menu-music" data-id="#{id}"></div>', "assign");
      } else if (set.id === "5") {
        tpl = cc11001100_hook("tpl", ['<span class="s-menu-item s-opacity-white-background" data-id="#{id}">', "<span>#{name}</span>", '<span class="bar-bg" data-tid="7779"></span>', "</span>"].join(""), "assign");
      } else if (set.id === "24") {
        tpl = cc11001100_hook("tpl", ['<span class="s-menu-item s-opacity-white-background" data-id="#{id}">', "<span>#{name}</span>", '<span class="bar-bg" data-tid="7999"></span>', "</span>"].join(""), "assign");
      } else {
        tpl = cc11001100_hook("tpl", ['<span class="s-menu-item s-opacity-white-background" data-id="#{id}">', "#{name}", "</span>"].join(""), "assign");
      }
      return $.formatString(tpl, set);
    }
    function _cardMaker(set) {
      cc11001100_hook("set", set, "function-parameter");
      var loading = cc11001100_hook("loading", s_domain.staticUrl + "static/superman/img/loading-f9b765014b.gif", "var-init");
      if (window.isNewGridCard === 1) {
        loading = cc11001100_hook("loading", s_domain.staticUrl + "static/superman/img/loading_new-f4a658cef0.gif", "assign");
      }
      var tpl = cc11001100_hook("tpl", "" + '<div id="s_content_#{id}" data-id="#{id}" class="s-content" style="display:none;">' + '<div class="s-content-load ' + (window.isNewGridCard === 1 ? "" : "s-opacity-white-background") + '">' + '<img src="#{loadingImg}" />' + (window.isNewGridCard === 1 ? "" : "<div>加载中，精彩马上呈现</div>") + "</div>" + "</div>", "var-init");
      $.extend(set, {
        staticUrl: cc11001100_hook("staticUrl", s_domain.staticUrl, "object-key-init"),
        loadingImg: cc11001100_hook("loadingImg", loading, "object-key-init")
      });
      return $($.formatString(tpl, set));
    }
    function _loadCardHtml(params, cb) {
      cc11001100_hook("params", params, "function-parameter");
      cc11001100_hook("cb", cb, "function-parameter");
      if (params.id === "5" && !params.childId) {
        params.childId = cc11001100_hook("params.childId", "0", "assign");
      }
      params.isPull = cc11001100_hook("params.isPull", _isPull || "", "assign");
      F.use("superman:skeleton/model", function (dao) {
        dao.get("cardHtml", function (data) {
          cb && cb(data);
        }, params);
      });
    }
    return OneCard;
  }(), "var-init");
  return OneCard;
});
F.module("superman:skeleton/model", function (require, exports, tool) {
  var _uri = cc11001100_hook("_uri", "/home/feed/", "var-init");
  var _uri_mancardwater = cc11001100_hook("_uri_mancardwater", window.is_login === 0 ? "/home/page/" : _uri, "var-init");
  var bsToken = cc11001100_hook("bsToken", $("#bsToken") && $("#bsToken").val() || "", "var-init");
  var autoRefreshLoading = cc11001100_hook("autoRefreshLoading", false, "var-init");
  function Dao() {}
  var _getter = cc11001100_hook("_getter", {
    waterHtml: function (cb, param) {
      var _id = cc11001100_hook("_id", param.id || 0, "var-init"),
        page = cc11001100_hook("page", param.page || 1, "var-init");
      var defer = cc11001100_hook("defer", $.Deferred(), "var-init");
      if (autoRefreshLoading) {
        cb({
          autoRefresh: cc11001100_hook("autoRefresh", true, "object-key-init")
        });
        defer.resolve();
        return defer;
      }
      if (+param.refresh_state === 4) {
        autoRefreshLoading = cc11001100_hook("autoRefreshLoading", true, "assign");
      }
      if (param.id === "1" && !s_session.isLogin) {
        cb({
          html: cc11001100_hook("html", $("#s_content_2_more_textarea").text(), "object-key-init"),
          sessionId: cc11001100_hook("sessionId", "", "object-key-init"),
          isEnd: cc11001100_hook("isEnd", true, "object-key-init")
        });
        defer.resolve();
        autoRefreshLoading = cc11001100_hook("autoRefreshLoading", false, "assign");
        return defer;
      }
      if (+param.noload === 1) {
        cb && cb({
          html: cc11001100_hook("html", "", "object-key-init")
        });
        autoRefreshLoading = cc11001100_hook("autoRefreshLoading", false, "assign");
        defer.resolve();
      } else if (param.id == 2) {
        param.ismain = cc11001100_hook("param.ismain", "1", "assign");
        return $.ajaxget(_uri_mancardwater + "feedwater?" + $.param(param), function (data) {
          var feedData = cc11001100_hook("feedData", "", "var-init");
          if (data.data && typeof data.data === "string") {
            var first = cc11001100_hook("first", data.data.indexOf('"html":"'), "var-init");
            var last = cc11001100_hook("last", data.data.lastIndexOf('"'), "var-init");
            feedData = cc11001100_hook("feedData", data.data.substring(first + 8, last), "assign");
          }
          autoRefreshLoading = cc11001100_hook("autoRefreshLoading", false, "assign");
          cb && cb(feedData);
        });
      }
      return defer;
    },
    cardHtml: function (cb, param) {
      if (param.id === "1" && !s_session.isLogin) {
        cb({
          html: cc11001100_hook("html", $("#s_content_2_textarea").text(), "object-key-init"),
          sessionId: cc11001100_hook("sessionId", "", "object-key-init")
        });
        return;
      }
      param.ismain = cc11001100_hook("param.ismain", "1", "assign");
      var getStr = cc11001100_hook("getStr", $.param(param), "var-init");
      $.ajaxget("/home/tab/gettab?" + getStr, function (data) {
        var tabData = cc11001100_hook("tabData", data.data || "", "var-init");
        cb && cb(tabData);
      });
    }
  }, "var-init");
  var _setter = cc11001100_hook("_setter", {
    curmenu: function (value, cb, param) {
      var id = cc11001100_hook("id", value || 0, "var-init");
      $.ajax({
        url: cc11001100_hook("url", "/home/data/setups?bsToken=" + bsToken, "object-key-init"),
        type: cc11001100_hook("type", "POST", "object-key-init"),
        data: cc11001100_hook("data", JSON.stringify({
          props: cc11001100_hook("props", ["curCard"], "object-key-init"),
          values: cc11001100_hook("values", [value], "object-key-init")
        }), "object-key-init"),
        headers: {
          "Content-Type": cc11001100_hook("Content-Type", "application/json", "object-key-init")
        },
        traditional: cc11001100_hook("traditional", true, "object-key-init"),
        success: function (res, textStatus) {
          cb && cb(res);
        }
      });
    }
  }, "var-init");
  Dao.prototype = cc11001100_hook("Dao.prototype", {
    get: function (key, cb, param) {
      return _getter[key] && _getter[key](cb, param) || false;
    },
    set: function (key, value, cb, param) {
      return _setter[key] && _setter[key](value, cb, param) || false;
    }
  }, "assign");
  return new Dao();
});
F.module("superman:skeleton/card_collection", function (require, exports, ctx) {
  var OneCard = cc11001100_hook("OneCard", require("superman:skeleton/card"), "var-init");
  var _menuGurd = cc11001100_hook("_menuGurd", $("#s_menu_gurd"), "var-init");
  var _topWrap = cc11001100_hook("_topWrap", $("#s_top_wrap"), "var-init");
  var _container = cc11001100_hook("_container", $("#s_mancard_main .s-menu-container"), "var-init");
  function CardCollection() {
    this.pool = cc11001100_hook("this.pool", {}, "assign");
    this.curId = cc11001100_hook("this.curId", s_session.curmod, "assign");
    this._options = cc11001100_hook("this._options", {}, "assign");
    this.menuTopShowed = cc11001100_hook("this.menuTopShowed", false, "assign");
  }
  CardCollection.prototype = cc11001100_hook("CardCollection.prototype", {
    constructor: cc11001100_hook("constructor", CardCollection, "object-key-init"),
    add: function (aCard, name, state) {
      if (aCard instanceof OneCard) {
        return this.pool[aCard.id] = cc11001100_hook("this.pool[aCard.id]", aCard, "assign");
      } else if (typeof parseInt(aCard) == "number" && name != null && state != null) {
        return this.pool["" + aCard] = cc11001100_hook("this.pool[\"\" + aCard]", new OneCard(aCard, name, state), "assign");
      }
      return aCard;
    },
    remove: function (aCard) {
      if (aCard instanceof OneCard) {
        this.pool[aCard.id] = cc11001100_hook("this.pool[aCard.id]", null, "assign");
      } else if (typeof parseInt(aCard) == "number") {
        this.pool["" + aCard] = cc11001100_hook("this.pool[\"\" + aCard]", null, "assign");
      }
      return aCard;
    },
    get: function (id) {
      return this.pool["" + id];
    },
    createCard: function (id, name, state) {
      if (this.pool[id]) {
        return this.pool["" + id];
      }
      return new OneCard(id, name, state);
    },
    switchCard: function (id, cb) {
      var _ctx = cc11001100_hook("_ctx", this, "var-init");
      if ($("#s_top_wrap").hasClass("s-down")) {
        if (_ctx.pool["" + id].waterPage == 0) {
          if ($.isIE < 9) {
            _ctx.fixIE(0, function () {});
          } else {
            window.scrollTo($(window).scrollLeft(), 0);
          }
        } else {
          var sTop = cc11001100_hook("sTop", Math.max($("#s_ctner_contents").offset().top - 110, 0), "var-init");
          _ctx.fixIE(sTop, function () {});
        }
      }
      _ctx.cardDone(id, cb);
    },
    cardDone: function (id, cb) {
      var _ctx = cc11001100_hook("_ctx", this, "var-init");
      _ctx.pool[_ctx.curId].hide(function () {
        window.s_session.curmod = cc11001100_hook("window.s_session.curmod", _ctx.curId = cc11001100_hook("_ctx.curId", "" + id, "assign"), "assign");
        _ctx.pool["" + id].show(function () {
          F.use("superman:skeleton/model", function (dao) {
            dao.set("curmenu", _ctx.curId);
          });
          cb && cb();
        });
      });
    },
    getMenuIDS: function () {
      var menuNodes = cc11001100_hook("menuNodes", $("#s_menus_wrapper").find(".s-menu-item"), "var-init"),
        ids = cc11001100_hook("ids", [], "var-init");
      $.each(menuNodes, function (idx, item) {
        ids.push($(item).attr("data-id"));
      });
      return ids;
    },
    dealDeskTop: function (showTopBar, bar) {
      if (showTopBar) {
        bar.addClass("desktop_bar");
      } else {
        bar.removeClass("desktop_bar");
      }
    },
    toggleMenu: function (show, noAnimate) {
      var _ctx = cc11001100_hook("_ctx", this, "var-init");
      var _topNavWrap = cc11001100_hook("_topNavWrap", _topWrap.children(".s-top-nav"), "var-init");
      if (!!show) {
        _menuGurd.addClass("s-down");
        this.dealDeskTop(true, _topNavWrap);
        if ($("#s_upfunc_menus .s-lite").hasClass("hide-icon") || !$("#bottom_layer .s-bottom-show").css("display") === "none" || !$("#s-user-setting-menu").hasClass("hiding-feed")) {
          _topNavWrap.append(_menuGurd);
        }
        if (!_ctx.menuTopShowed) {
          _topNavWrap.css("display", "block");
          _menuGurd.css({
            marginTop: cc11001100_hook("marginTop", -1 * _menuGurd.height(), "object-key-init")
          }).stop().animate({
            marginTop: cc11001100_hook("marginTop", "0", "object-key-init")
          }, 150);
        }
        _ctx.menuTopShowed = cc11001100_hook("_ctx.menuTopShowed", true, "assign");
      } else {
        this.dealDeskTop(false, _topNavWrap);
        if (noAnimate) {
          _menuGurd.removeClass("s-down");
          _container.append(_menuGurd);
        } else {
          _menuGurd.css({
            marginTop: cc11001100_hook("marginTop", "0", "object-key-init")
          }).stop().animate({
            marginTop: cc11001100_hook("marginTop", -1 * _menuGurd.height(), "object-key-init")
          }, 150, function () {
            _topNavWrap.css("display", "none");
          });
        }
        _ctx.menuTopShowed = cc11001100_hook("_ctx.menuTopShowed", false, "assign");
      }
      ctx.fire("showTopMenu", {
        show: cc11001100_hook("show", show, "object-key-init")
      });
    },
    options: function () {
      switch (arguments.length) {
        case 0:
          return this._options;
        case 1:
          return this._options[arguments[0]];
        case 2:
          return this._options[arguments[0]] = cc11001100_hook("this._options[arguments[0]]", arguments[1], "assign");
      }
    },
    fixIE: function (top, cb) {
      var _ctx = cc11001100_hook("_ctx", this, "var-init");
      $("html,body").animate({
        scrollTop: cc11001100_hook("scrollTop", top, "object-key-init")
      }, 500, function () {
        cb && cb.call(_ctx);
      });
    }
  }, "assign");
  return new CardCollection();
});
F.addLog("superman:skeleton/card_showLog", ["cardItemShow"]);
F.module("superman:skeleton/card_showLog", function (require, exports, ctx) {
  var cards = cc11001100_hook("cards", require("skeleton/card_collection"), "var-init");
  var alsLog = cc11001100_hook("alsLog", require("skeleton/card_alsLog"), "var-init");
  var opt = cc11001100_hook("opt", {}, "var-init");
  opt.baseParams = cc11001100_hook("opt.baseParams", {
    ct: cc11001100_hook("ct", 2, "object-key-init"),
    qid: cc11001100_hook("qid", s_session.seqId, "object-key-init"),
    sid: cc11001100_hook("sid", s_session.sid, "object-key-init"),
    ssid: cc11001100_hook("ssid", s_session.portrait, "object-key-init"),
    logid: cc11001100_hook("logid", s_session.logId || "0", "object-key-init"),
    _r: cc11001100_hook("_r", Math.random(), "object-key-init")
  }, "assign");
  var thunder = cc11001100_hook("thunder", window.Thunder.get(opt), "var-init");
  var idsMap = cc11001100_hook("idsMap", {}, "var-init");
  var feedLoadLogMap = cc11001100_hook("feedLoadLogMap", {
    firstRefresh: {
      tid: cc11001100_hook("tid", 11557, "object-key-init"),
      logInfo: cc11001100_hook("logInfo", "top_refresh", "object-key-init"),
      isLoad: cc11001100_hook("isLoad", false, "object-key-init")
    },
    pullRefresh: {
      tid: cc11001100_hook("tid", 11558, "object-key-init"),
      logInfo: cc11001100_hook("logInfo", "pull_refresh", "object-key-init")
    },
    autoRefresh: {
      tid: cc11001100_hook("tid", 11559, "object-key-init"),
      logInfo: cc11001100_hook("logInfo", "auto_refresh", "object-key-init")
    }
  }, "var-init");
  var windowHeight = cc11001100_hook("windowHeight", $(window).height(), "var-init");
  var defaultLog = cc11001100_hook("defaultLog", {
    logactid: cc11001100_hook("logactid", "1100000004", "object-key-init")
  }, "var-init");
  function itemShowLog() {
    var curNodeWrap = cc11001100_hook("curNodeWrap", $("#s_content_" + cards.curId), "var-init"),
      items = cc11001100_hook("items", curNodeWrap.find("[data-rid]"), "var-init"),
      item = cc11001100_hook("item", null, "var-init"),
      ids = cc11001100_hook("ids", idsMap[cards.curId] || [], "var-init");
    var temp = cc11001100_hook("temp", [], "var-init"),
      posTemp = cc11001100_hook("posTemp", [], "var-init"),
      extras = cc11001100_hook("extras", [], "var-init"),
      mapObjArr = cc11001100_hook("mapObjArr", {}, "var-init");
    var logExtra = cc11001100_hook("logExtra", [], "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < items.length; i++) {
      item = cc11001100_hook("item", items.eq(i), "assign");
      var extra = cc11001100_hook("extra", item.attr("data-extra"), "var-init");
      var rid = cc11001100_hook("rid", item.attr("data-rid"), "var-init");
      var tlog;
      var curLog = cc11001100_hook("curLog", item.attr("data-log"), "var-init");
      if (curLog) {
        curLog = cc11001100_hook("curLog", curLog.replace(/\;$/g, ""), "assign");
      }
      if ($.inArray(rid, ids) != -1) {
        continue;
      }
      if (item.offset().top + item.height() / 2 - $(window).scrollTop() < windowHeight) {
        if (item.hasClass("s-nativead-item")) {
          alsLog.sendAlsShowLog({}, {
            da_locate: cc11001100_hook("da_locate", +item.attr("data-locate"), "object-key-init"),
            extra_param: cc11001100_hook("extra_param", item.attr("data-extra-param"), "object-key-init")
          });
          var cpmRcvUrl = cc11001100_hook("cpmRcvUrl", item.attr("data-cpm-rcv-url"), "var-init");
          if (cpmRcvUrl) {
            imgLog(cpmRcvUrl);
          }
          if (item.hasClass("nativead-empty-order")) {
            ids.push(rid);
            continue;
          }
        }
        if (/logactid/g.test(curLog)) {
          if (curLog) {
            splitLog(curLog, mapObjArr);
          }
          ids.push(rid);
          var param = cc11001100_hook("param", {}, "var-init");
          for (var i in mapObjArr) {
            param[i] = cc11001100_hook("param[i]", mapObjArr[i].join(","), "assign");
          }
          ctx.fire("cardItemShow", param);
          continue;
        }
        if ($.inArray(rid, ids) == -1) {
          temp.push(rid);
          var curtemp = cc11001100_hook("curtemp", {
            rid: cc11001100_hook("rid", rid, "object-key-init"),
            extra: cc11001100_hook("extra", extra, "object-key-init"),
            flow: cc11001100_hook("flow", 2, "object-key-init")
          }, "var-init");
          if (curLog) {
            splitLog(curLog, mapObjArr);
            splitLogToObj(curLog, curtemp);
          }
          posTemp.push(i);
          ids.push(rid);
          extras.push(extra);
          logExtra.push(curtemp);
        }
      }
    }
    idsMap[cards.curId] = cc11001100_hook("idsMap[cards.curId]", ids, "assign");
    if (temp.length != 0) {
      var param = cc11001100_hook("param", {
        rids: cc11001100_hook("rids", temp.join(","), "object-key-init"),
        pos: cc11001100_hook("pos", posTemp.join(","), "object-key-init"),
        extra: cc11001100_hook("extra", "", "object-key-init")
      }, "var-init");
      for (var i in mapObjArr) {
        param[i] = cc11001100_hook("param[i]", mapObjArr[i].join(","), "assign");
      }
      var mergedParam = cc11001100_hook("mergedParam", $.extend({}, defaultLog, param), "var-init");
      ctx.fire("cardItemShow", mergedParam);
      logext_str = cc11001100_hook("logext_str", $.stringify(logExtra), "assign");
      if (+s_session.curmod === 2) {
        thunder.send({
          cst: cc11001100_hook("cst", 1, "object-key-init"),
          tid: cc11001100_hook("tid", 27, "object-key-init"),
          logExtra: cc11001100_hook("logExtra", logext_str.substr(1, logext_str.length - 2), "object-key-init")
        });
      }
    }
  }
  function imgLog(src) {
    cc11001100_hook("src", src, "function-parameter");
    var n = cc11001100_hook("n", "cpm_rcv_url__" + new Date().getTime(), "var-init");
    var c = cc11001100_hook("c", window[n] = cc11001100_hook("window[n]", new Image(), "assign"), "var-init");
    c.onload = cc11001100_hook("c.onload", c.onerror = cc11001100_hook("c.onerror", function () {
      window[n] = cc11001100_hook("window[n]", null, "assign");
    }, "assign"), "assign");
    c.src = cc11001100_hook("c.src", src, "assign");
    c = cc11001100_hook("c", null, "assign");
  }
  function splitLog(curLog, mapObjArr) {
    cc11001100_hook("curLog", curLog, "function-parameter");
    cc11001100_hook("mapObjArr", mapObjArr, "function-parameter");
    var keyvalue = cc11001100_hook("keyvalue", [], "var-init");
    var key = cc11001100_hook("key", "", "var-init");
    var value = cc11001100_hook("value", "", "var-init");
    var clrChuo = cc11001100_hook("clrChuo", "", "var-init");
    var paraString = cc11001100_hook("paraString", curLog.split(";"), "var-init");
    for (var j = cc11001100_hook("j", 0, "var-init"); j < paraString.length; j++) {
      keyvalue = cc11001100_hook("keyvalue", paraString[j].split(":"), "assign");
      key = cc11001100_hook("key", keyvalue[0], "assign");
      value = cc11001100_hook("value", keyvalue[1], "assign");
      if (!/-0$/g.test(key)) {
        if (/-1$/g.test(key)) {
          key = cc11001100_hook("key", key.replace(/-1$/g, ""), "assign");
        }
        if (!mapObjArr[key]) {
          mapObjArr[key] = cc11001100_hook("mapObjArr[key]", [], "assign");
        }
        mapObjArr[key].push(value);
      }
    }
  }
  function splitLogToObj(curLog, mapObjArr) {
    cc11001100_hook("curLog", curLog, "function-parameter");
    cc11001100_hook("mapObjArr", mapObjArr, "function-parameter");
    var keyvalue = cc11001100_hook("keyvalue", [], "var-init");
    var key = cc11001100_hook("key", "", "var-init");
    var value = cc11001100_hook("value", "", "var-init");
    var paraString = cc11001100_hook("paraString", curLog.split(";"), "var-init");
    for (var j = cc11001100_hook("j", 0, "var-init"); j < paraString.length; j++) {
      keyvalue = cc11001100_hook("keyvalue", paraString[j].split(":"), "assign");
      key = cc11001100_hook("key", keyvalue[0], "assign");
      value = cc11001100_hook("value", keyvalue[1], "assign");
      mapObjArr[key] = cc11001100_hook("mapObjArr[key]", value, "assign");
    }
  }
  function feedLoadLog(type) {
    cc11001100_hook("type", type, "function-parameter");
    var thunderInfo = cc11001100_hook("thunderInfo", feedLoadLogMap[type], "var-init");
    if (!thunderInfo) {
      return;
    }
    if (type === "firstRefresh") {
      if (thunderInfo.isLoad) {
        return;
      } else {
        thunderInfo.isLoad = cc11001100_hook("thunderInfo.isLoad", true, "assign");
      }
    }
    thunder.send({
      ct: cc11001100_hook("ct", 2, "object-key-init"),
      cst: cc11001100_hook("cst", 1, "object-key-init"),
      tid: cc11001100_hook("tid", thunderInfo.tid, "object-key-init"),
      logFrom: cc11001100_hook("logFrom", "feed_index", "object-key-init"),
      logInfo: cc11001100_hook("logInfo", thunderInfo.logInfo, "object-key-init")
    });
  }
  ctx.listen("superman:skeleton/card", "cardloaded", function (data) {
    var id = cc11001100_hook("id", data.cardId, "var-init");
    if (+id === 2) {
      feedLoadLog("pullRefresh");
    }
  });
  exports.itemShowLog = cc11001100_hook("exports.itemShowLog", itemShowLog, "assign");
  exports.feedLoadLog = cc11001100_hook("exports.feedLoadLog", feedLoadLog, "assign");
});
F.module("superman:skeleton/card_alsLog", function (require, exports, ctx) {
  function imgLog(src) {
    cc11001100_hook("src", src, "function-parameter");
    var n = cc11001100_hook("n", "imglog__" + new Date().getTime(), "var-init");
    var c = cc11001100_hook("c", window[n] = cc11001100_hook("window[n]", new Image(), "assign"), "var-init");
    c.onload = cc11001100_hook("c.onload", c.onerror = cc11001100_hook("c.onerror", function () {
      window[n] = cc11001100_hook("window[n]", null, "assign");
    }, "assign"), "assign");
    c.src = cc11001100_hook("c.src", src, "assign");
    c = cc11001100_hook("c", null, "assign");
  }
  var ALSLOG_TYPE = cc11001100_hook("ALSLOG_TYPE", {
    CLICK: cc11001100_hook("CLICK", 2, "object-key-init"),
    SHOW: cc11001100_hook("SHOW", 3, "object-key-init")
  }, "var-init");
  function AlsLog() {
    this.init();
  }
  AlsLog.prototype = cc11001100_hook("AlsLog.prototype", {
    constructor: cc11001100_hook("constructor", AlsLog, "object-key-init"),
    init: function () {
      this.alsHostHttp = cc11001100_hook("this.alsHostHttp", "http://als.baidu.com/clog/clog", "assign");
      this.alsHostHttps = cc11001100_hook("this.alsHostHttps", "https://als.baidu.com/clog/clog", "assign");
      var productId = cc11001100_hook("productId", 39, "var-init");
      var clientType = cc11001100_hook("clientType", 0, "var-init");
      var baiduId = cc11001100_hook("baiduId", $.cookie.get("BAIDUID"), "var-init");
      this.alsCommonFields = cc11001100_hook("this.alsCommonFields", this.buildAlsParams(productId, clientType, baiduId), "assign");
    },
    buildAlsParams: function (productId, clientType, baiduId) {
      return {
        productId: cc11001100_hook("productId", productId, "object-key-init"),
        _client_type: cc11001100_hook("_client_type", clientType, "object-key-init"),
        baiduId: cc11001100_hook("baiduId", baiduId, "object-key-init")
      };
    },
    sendAls: function (data) {
      var paramList = cc11001100_hook("paramList", [], "var-init");
      for (var key in data) {
        paramList.push([encodeURIComponent(key), "=", encodeURIComponent(data[key])].join(""));
      }
      imgLog(this.alsHostHttps + "?" + paramList.join("&"));
    },
    buildAlsLogData: function (logContent, adContent) {
      var ad = cc11001100_hook("ad", encodeURIComponent($.stringify([$.extend({
        da_page: cc11001100_hook("da_page", "index", "object-key-init"),
        da_page_num: cc11001100_hook("da_page_num", 1, "object-key-init"),
        da_locate: cc11001100_hook("da_locate", 1, "object-key-init"),
        origin_time: cc11001100_hook("origin_time", +new Date(), "object-key-init")
      }, adContent)])), "var-init");
      return $.extend({}, this.alsCommonFields, logContent, {
        ad: cc11001100_hook("ad", ad, "object-key-init")
      });
    },
    sendAlsClickLog: function (logContent, adContent) {
      this.sendAls(this.buildAlsLogData(logContent, $.extend(adContent, {
        da_type: cc11001100_hook("da_type", ALSLOG_TYPE.CLICK, "object-key-init")
      })));
      return this;
    },
    sendAlsShowLog: function (logContent, adContent) {
      this.sendAls(this.buildAlsLogData(logContent, $.extend(adContent, {
        da_type: cc11001100_hook("da_type", ALSLOG_TYPE.SHOW, "object-key-init")
      })));
      return this;
    }
  }, "assign");
  return new AlsLog();
});
F.module("superman:skeleton/presenter", function (require, exports, ctx) {
  var global = cc11001100_hook("global", window, "var-init");
  var cards = cc11001100_hook("cards", require("skeleton/card_collection"), "var-init");
  var card_showLog = cc11001100_hook("card_showLog", require("skeleton/card_showLog"), "var-init");
  var _topDom = cc11001100_hook("_topDom", $("#s_mancard_main"), "var-init");
  var _centerMen = cc11001100_hook("_centerMen", $("#s_ctner_menus"), "var-init");
  var _centContent = cc11001100_hook("_centContent", $("#s_ctner_contents"), "var-init");
  var _menuContainer = cc11001100_hook("_menuContainer", $(".s-menu-container", _topDom), "var-init");
  var _loadMap = cc11001100_hook("_loadMap", {}, "var-init");
  try {
    var _menuData = cc11001100_hook("_menuData", $.parseJSON($.trim($("#s_menus_textarea", _topDom).html())), "var-init");
  } catch (err) {
    var _menuData = cc11001100_hook("_menuData", {}, "var-init");
  }
  var windowHeight = cc11001100_hook("windowHeight", $(global).height(), "var-init");
  var isCardWater = cc11001100_hook("isCardWater", true, "var-init");
  var bds = cc11001100_hook("bds", window.bds, "var-init");
  var sampleval = cc11001100_hook("sampleval", bds && bds.comm && bds.comm.desktopSampleval, "var-init");
  function init() {
    _initCards();
    _bindEvent();
  }
  var isFeedFirstLoad = cc11001100_hook("isFeedFirstLoad", true, "var-init");
  function getObjXy(obj) {
    cc11001100_hook("obj", obj, "function-parameter");
    var xy = cc11001100_hook("xy", obj.getBoundingClientRect(), "var-init");
    var top = cc11001100_hook("top", xy.top - document.documentElement.clientTop + document.documentElement.scrollTop, "var-init");
    var bottom = cc11001100_hook("bottom", xy.bottom, "var-init");
    var left = cc11001100_hook("left", xy.left - document.documentElement.clientLeft + document.documentElement.scrollLeft, "var-init");
    var right = cc11001100_hook("right", xy.right, "var-init");
    var width = cc11001100_hook("width", xy.width || right - left, "var-init");
    var height = cc11001100_hook("height", xy.height || bottom - top, "var-init");
    return {
      top: cc11001100_hook("top", top, "object-key-init"),
      right: cc11001100_hook("right", right, "object-key-init"),
      bottom: cc11001100_hook("bottom", bottom, "object-key-init"),
      left: cc11001100_hook("left", left, "object-key-init"),
      width: cc11001100_hook("width", width, "object-key-init"),
      height: cc11001100_hook("height", height, "object-key-init")
    };
  }
  function checkEleInView(ele) {
    cc11001100_hook("ele", ele, "function-parameter");
    var rect = cc11001100_hook("rect", getObjXy(ele), "var-init");
    return rect.top > 0 && rect.top + rect.height < window.innerHeight;
  }
  function feedFirstLoad(id, isToggleMore) {
    cc11001100_hook("id", id, "function-parameter");
    cc11001100_hook("isToggleMore", isToggleMore, "function-parameter");
    if (!isFeedFirstLoad) {
      return;
    }
    isFeedFirstLoad = cc11001100_hook("isFeedFirstLoad", false, "assign");
    var $bottomBar = cc11001100_hook("$bottomBar", $(".s-more-bar"), "var-init");
    if ($bottomBar.length === 0) {
      return;
    }
    if ($bottomBar.length > 0 && checkEleInView($bottomBar[0])) {
      if (id === "2") {
        _loadHelper.tolerance = cc11001100_hook("_loadHelper.tolerance", _loadHelper.defaulSub, "assign");
        _loadHelper.judgeFire();
        _loadHelper.toggleMore(false);
      } else {
        _loadHelper.toggleMore(isToggleMore);
      }
    }
  }
  function desktopEvent() {
    $("#desktop_opt").on("click", function (event) {
      event.stopPropagation && event.stopPropagation();
      if (event.target === event.currentTarget) {
        $(window).trigger("desktopOptClick");
      }
    });
    $(global).on("desktopNotNode", function () {
      _loadHelper.handleDeskTop({
        isNode: cc11001100_hook("isNode", false, "object-key-init")
      });
    });
    $(global).on("desktopNode", function () {
      _loadHelper.handleDeskTop({
        isNode: cc11001100_hook("isNode", true, "object-key-init")
      });
    });
    $(global).on("desktopSkinOn", function () {
      _loadHelper.handleDeskTop({
        hasSkin: cc11001100_hook("hasSkin", true, "object-key-init")
      });
    });
    $(global).on("desktopSkinOff", function () {
      _loadHelper.handleDeskTop({
        hasSkin: cc11001100_hook("hasSkin", false, "object-key-init")
      });
    });
  }
  var _loadHelper = cc11001100_hook("_loadHelper", {
    defaulSub: cc11001100_hook("defaulSub", 300, "object-key-init"),
    tolerance: cc11001100_hook("tolerance", isCardWater ? 0 : 300, "object-key-init"),
    preTop: cc11001100_hook("preTop", 0, "object-key-init"),
    loaded: cc11001100_hook("loaded", false, "object-key-init"),
    moreBar: cc11001100_hook("moreBar", _topDom.find(".s-more-bar"), "object-key-init"),
    judgeFire: function () {
      var _ctx = cc11001100_hook("_ctx", this, "var-init");
      if (_ctx.tolerance === 0 || s_session.index_off) {
        return;
      }
      cards.get(cards.curId).appendData(function (data) {
        _ctx.loaded = cc11001100_hook("_ctx.loaded", true, "assign");
      }, _loadHelper.toggleMore);
    },
    toggleMore: function (show) {
      if (!show) {
        _loadHelper.moreBar.remove();
      } else {
        _loadHelper.moreBar.show();
      }
    },
    handleDeskTop: function (option, clkCtx) {
      var tabId = cc11001100_hook("tabId", clkCtx ? clkCtx.attr("data-id") : cards.curId, "var-init");
      var isNode = cc11001100_hook("isNode", option && option.isNode, "var-init");
      if (isNode === undefined) {
        var _deskEle = cc11001100_hook("_deskEle", $("#s_xmancard_desktop")[0], "var-init");
        isNode = cc11001100_hook("isNode", !!(_deskEle && _deskEle.id === "s_xmancard_desktop") && tabId === "100", "assign");
      }
      var hasSkin = cc11001100_hook("hasSkin", option && option.hasSkin, "var-init");
      if (hasSkin === undefined) {
        var _isAllSkined = cc11001100_hook("_isAllSkined", global._isAllSkined, "var-init");
        var userIsNewSkined = cc11001100_hook("userIsNewSkined", window.s_session.userIsNewSkined, "var-init");
        hasSkin = cc11001100_hook("hasSkin", _isAllSkined !== undefined ? _isAllSkined : userIsNewSkined === "on", "assign");
      }
      global._isAllSkined = cc11001100_hook("global._isAllSkined", hasSkin, "assign");
      if (tabId === "100") {
        $("#desktop_opt").addClass("desktop-vis");
      } else {
        $("#desktop_opt").removeClass("desktop-vis");
        $("#s_ctner_contents").removeClass("desktop-ctner-contents");
      }
    },
    moreUpFy: function (hasSkin, scroll) {
      var _ctx = cc11001100_hook("_ctx", this, "var-init");
      _loadHelper.moreBar.css({
        visibility: cc11001100_hook("visibility", "visible", "object-key-init")
      });
      if (window.isNewGridCard) {
        return;
      }
      var fixTop;
      if (scroll) {
        if (_ctx.moreUp) {
          fixTop = cc11001100_hook("fixTop", _centContent.offset().top + _centContent.height() - $(global).height() - $(global).scrollTop(), "assign");
          _loadHelper.moreBar.css({
            bottom: cc11001100_hook("bottom", Math.min(Math.max(0, fixTop), 10), "object-key-init")
          });
        }
      }
      if ($(global).height() < 830) {
        if (_ctx.moreUp !== true) {
          _loadHelper.moreBar.addClass("s-more-up").appendTo(_centContent);
          _ctx.moreUp = cc11001100_hook("_ctx.moreUp", true, "assign");
          fixTop = cc11001100_hook("fixTop", _centContent.offset().top + _centContent.height() - $(global).height() - $(global).scrollTop(), "assign");
          _loadHelper.moreBar.css({
            bottom: cc11001100_hook("bottom", Math.min(Math.max(0, fixTop), 10), "object-key-init")
          });
          repeat(true);
        }
      } else {
        if (_ctx.moreUp !== false) {
          _loadHelper.moreBar.removeClass("s-more-up");
          _centContent.after(_loadHelper.moreBar);
          if (!_ctx.morePngLoaded) {
            _loadHelper.moreBar.find(".rect")[0].onload = cc11001100_hook("_loadHelper.moreBar.find(\".rect\")[0].onload", function () {
              _loadHelper.moreBar.css({
                visibility: cc11001100_hook("visibility", "visible", "object-key-init")
              });
            }, "assign");
            _ctx.morePngLoaded = cc11001100_hook("_ctx.morePngLoaded", true, "assign");
          }
          _ctx.moreUp = cc11001100_hook("_ctx.moreUp", false, "assign");
        }
        if (hasSkin === true) {
          _loadHelper.moreBar.find(".rect").attr("src", s_domain.staticUrl + "static/mancard/img/more_white.png");
        } else if (hasSkin === false) {
          _loadHelper.moreBar.find(".rect").attr("src", s_domain.staticUrl + "static/mancard/img/more_black.png");
        }
      }
      function repeat(turn) {
        cc11001100_hook("turn", turn, "function-parameter");
        _loadHelper.moreBar.find(".animate-arrow").animate({
          top: cc11001100_hook("top", turn ? 18 : 8, "object-key-init")
        }, 800, "swing", function () {
          repeat(!turn);
        });
      }
    },
    moreDownFy: function () {
      if ($(global).height() > 700) {
        var moreBar = cc11001100_hook("moreBar", _topDom.find(".s-more-bar").addClass("s-more-up").find(".rect").attr("src", s_domain.staticUrl + (global.s_session.userIsNewSkined === "on" ? "static/mancard/img/more_white.png" : "static/mancard/img/more_black.png")).end(), "var-init");
        _centContent.after(moreBar);
      }
    }
  }, "var-init");
  function _initCards() {
    var _cardData = cc11001100_hook("_cardData", _menuData.data, "var-init");
    var i = cc11001100_hook("i", _cardData.length, "var-init");
    while (i--) {
      var item = cc11001100_hook("item", _cardData[i], "var-init");
      if (item.state === "1") {
        cards.add(item.id, item.name, item.state);
      }
    }
    if (s_session.curmod === "3") {
      cards.switchCard(100);
    }
    var curCard = cc11001100_hook("curCard", cards.get(s_session.curmod), "var-init");
    if (global._card_aync) {
      if (_menuData.illegal) {
        curCard.params.normal = cc11001100_hook("curCard.params.normal", 1, "assign");
      }
      curCard.show(function () {
        if (_menuData.illegal) {
          delete curCard.params.normal;
        }
      });
    } else {
      curCard.rendered = cc11001100_hook("curCard.rendered", true, "assign");
      curCard.noMore = cc11001100_hook("curCard.noMore", !!parseInt(_menuData.isEnd, 10), "assign");
      curCard.sessionId = cc11001100_hook("curCard.sessionId", global.s_session.sessionId, "assign");
    }
    for (var i = cc11001100_hook("i", 0, "var-init"), syncRids = cc11001100_hook("syncRids", global.s_session.rids || [], "var-init"), l = cc11001100_hook("l", syncRids.length, "var-init"); i < l; i++) {
      curCard.ridsHash[syncRids[i]] = cc11001100_hook("curCard.ridsHash[syncRids[i]]", true, "assign");
    }
    if (curCard.noMore) {
      curCard.emitNoMore();
    }
    feedFirstLoad(curCard.id, !parseInt(_menuData.isEnd, 10));
    setTimeout(function () {
      ctx.fire("modShow", {
        showTab: cc11001100_hook("showTab", cards.curId, "object-key-init"),
        opType: cc11001100_hook("opType", "refresh", "object-key-init")
      });
      card_showLog.itemShowLog();
    }, 1e3);
  }
  var _menuHelper = cc11001100_hook("_menuHelper", {
    latestY: cc11001100_hook("latestY", $(global).scrollTop(), "object-key-init"),
    barTop: cc11001100_hook("barTop", _menuContainer.offset().top, "object-key-init"),
    barHeight: cc11001100_hook("barHeight", _centerMen.height(), "object-key-init"),
    topWrap: cc11001100_hook("topWrap", $("#s_top_wrap"), "object-key-init"),
    centTop: cc11001100_hook("centTop", _centContent.offset().top + parseInt(_centContent.css("padding-top"), 10), "object-key-init"),
    showed: cc11001100_hook("showed", false, "object-key-init"),
    overCenter: cc11001100_hook("overCenter", false, "object-key-init"),
    menuGurd: cc11001100_hook("menuGurd", $("#s_menu_gurd", _topDom), "object-key-init"),
    container: cc11001100_hook("container", $(".s-menu-container", _topDom), "object-key-init"),
    toolBar: cc11001100_hook("toolBar", $("#s_top_feed", _topDom), "object-key-init"),
    toolBarTop: cc11001100_hook("toolBarTop", Math.min(parseInt($("#s_top_feed", _topDom).css("top"), 10), 300), "object-key-init"),
    menuStatus: cc11001100_hook("menuStatus", cards.options("menuStatus", 0), "object-key-init"),
    toggleMenu: function (scrollTop) {
      if ($.isIE === 6) {
        return;
      }
      var _ctx = cc11001100_hook("_ctx", this, "var-init");
      if (scrollTop === _ctx.latestY) {
        return;
      }
      var measure = cc11001100_hook("measure", $.isIE === 7 ? 10 : 3, "var-init");
      if (scrollTop < _ctx.latestY && _ctx.barTop - scrollTop <= _ctx.topWrap.height() + measure) {
        if (!_ctx.showed) {
          cards.toggleMenu(true);
          _ctx.showed = cc11001100_hook("_ctx.showed", true, "assign");
          cards.options("menuStatus", 1);
        }
      } else {
        var noAnimate = cc11001100_hook("noAnimate", _ctx.barTop - scrollTop > _ctx.topWrap.height() + measure, "var-init");
        if (_ctx.showed) {
          cards.toggleMenu(false, noAnimate);
          _ctx.showed = cc11001100_hook("_ctx.showed", false, "assign");
        }
        if (_ctx.barTop - scrollTop > _ctx.topWrap.height()) {
          cards.options("menuStatus", 0);
        } else {
          cards.options("menuStatus", 2);
        }
      }
      if (_ctx.centTop - scrollTop < _ctx.topWrap.height()) {
        if (!_ctx.overCenter) {
          ctx.fire("overCenter", {
            over: cc11001100_hook("over", true, "object-key-init")
          });
          _ctx.overCenter = cc11001100_hook("_ctx.overCenter", true, "assign");
        }
      } else {
        if (_ctx.overCenter) {
          ctx.fire("overCenter", {
            over: cc11001100_hook("over", false, "object-key-init")
          });
          _ctx.overCenter = cc11001100_hook("_ctx.overCenter", false, "assign");
        }
      }
      _ctx.latestY = cc11001100_hook("_ctx.latestY", scrollTop, "assign");
    },
    judgeMenu: function (top) {
      var _ctx = cc11001100_hook("_ctx", this, "var-init");
      var bottom1 = cc11001100_hook("bottom1", "228px", "var-init");
      var bottom2 = cc11001100_hook("bottom2", "184px", "var-init");
      if (top > 0) {
        if (window.isNewGridCard) {
          _ctx.toolBar.show();
        } else {
          _ctx.toolBar.find(".to-top").css({
            visibility: cc11001100_hook("visibility", "visible", "object-key-init")
          });
        }
        $("#s_popup_advert").find(".advert-shrink").css({
          bottom: cc11001100_hook("bottom", bottom1, "object-key-init"),
          transition: cc11001100_hook("transition", "none", "object-key-init"),
          "-webkit-transition": cc11001100_hook("-webkit-transition", "none", "object-key-init"),
          "-moz-transition": cc11001100_hook("-moz-transition", "none", "object-key-init"),
          "-o-transition": cc11001100_hook("-o-transition", "none", "object-key-init")
        });
      } else {
        if (window.isNewGridCard) {
          _ctx.toolBar.hide();
        } else {
          _ctx.toolBar.find(".to-top").css({
            visibility: cc11001100_hook("visibility", "hidden", "object-key-init")
          });
        }
        $("#s_popup_advert").find(".advert-shrink").css({
          bottom: cc11001100_hook("bottom", bottom2, "object-key-init"),
          transition: cc11001100_hook("transition", "none", "object-key-init"),
          "-webkit-transition": cc11001100_hook("-webkit-transition", "none", "object-key-init"),
          "-moz-transition": cc11001100_hook("-moz-transition", "none", "object-key-init"),
          "-o-transition": cc11001100_hook("-o-transition", "none", "object-key-init")
        });
      }
    },
    initAdjust: function () {
      var headDom = cc11001100_hook("headDom", $("#head_wrapper"), "var-init");
      $(global).on("unload", function () {
        $(".s-news-rank-wrapper", _topDom).hide();
        headDom.removeClass("s-down");
        global.scrollTo(0, 0);
      });
    },
    feedRoller: function (scrollTop) {
      if ($.isIE !== 6) {
        return;
      }
      var _ctx = cc11001100_hook("_ctx", this, "var-init");
      var _top = cc11001100_hook("_top", Math.min(_ctx.toolBarTop + scrollTop, _centContent.height() - _ctx.toolBar.height()), "var-init");
      _ctx.toolBar.css({
        top: cc11001100_hook("top", _top, "object-key-init")
      });
    },
    initToolBar: function (IE6) {
      var self = cc11001100_hook("self", this, "var-init");
      self.toolBar.css({
        visibility: cc11001100_hook("visibility", "visible", "object-key-init")
      });
      if (IE6) {
        return;
      }
      self.resetToolPos();
      $(global).on("resize", self.resetToolPos);
      $(global).on("scroll", self.resetToolPos);
      $(global).on("s-skinoff", self.resetToolPos);
      $(global).on("s-skinon", self.resetToolPos);
    },
    removeToolCalc: function () {
      var self = cc11001100_hook("self", this, "var-init");
      if ($.isIE === 6) {
        return;
      }
      self.resetToolPos(true);
    },
    resetToolPos: function (animate) {
      var self = cc11001100_hook("self", _menuHelper, "var-init");
      var toolTop;
      var nomalTop;
      var minTop;
      var effect = cc11001100_hook("effect", animate === true ? "animate" : "css", "var-init");
      if (!_loadHelper.loaded) {
        nomalTop = cc11001100_hook("nomalTop", $(global).height() - self.toolBar.height() - 10, "assign");
        var maxTop = cc11001100_hook("maxTop", _centContent.offset().top + _centContent.outerHeight() - self.toolBar.height() - $(global).scrollTop() - 1, "var-init");
        minTop = cc11001100_hook("minTop", _centContent.offset().top + 217 - $(global).scrollTop(), "assign");
        toolTop = cc11001100_hook("toolTop", Math.max(Math.min(nomalTop, maxTop), minTop), "assign");
      } else {
        nomalTop = cc11001100_hook("nomalTop", $(global).height() - self.toolBar.height() - 30, "assign");
        minTop = cc11001100_hook("minTop", _centContent.offset().top + 227 - $(global).scrollTop(), "assign");
        toolTop = cc11001100_hook("toolTop", Math.max(nomalTop, minTop), "assign");
      }
      if (self.rememberTop !== toolTop) {
        self.toolBar[effect]({
          top: cc11001100_hook("top", toolTop, "object-key-init")
        });
        self.rememberTop = cc11001100_hook("self.rememberTop", toolTop, "assign");
      }
      if ($(window).width() < 1e3) {
        self.toolBar.css({
          left: cc11001100_hook("left", 501 - $(window).scrollLeft(), "object-key-init")
        });
      } else {
        self.toolBar.css({
          left: cc11001100_hook("left", "50%", "object-key-init")
        });
      }
    }
  }, "var-init");
  function forceMenu() {
    cards.toggleMenu(true);
    _menuHelper.showed = cc11001100_hook("_menuHelper.showed", true, "assign");
    cards.options("menuStatus", 1);
  }
  function _bindEvent() {
    var cardChange = cc11001100_hook("cardChange", null, "var-init");
    F.use("superman:skeleton/toast");
    F.use("superman:skeleton/card_refresh", function (AutoRefresh) {
      var listenId = cc11001100_hook("listenId", 2, "var-init");
      var isHit = cc11001100_hook("isHit", window.bds.comm.sampleval.indexOf("new_homepage") >= 0, "var-init");
      if (!isHit) {
        return;
      }
      var autoRefreshCard = cc11001100_hook("autoRefreshCard", cards.get(listenId), "var-init");
      AutoRefresh.init({
        timeout: cc11001100_hook("timeout", 30 * 60, "object-key-init"),
        card: cc11001100_hook("card", autoRefreshCard, "object-key-init"),
        refreshCallback: function () {
          _loadHelper.moreBar.remove();
          _topDom.find(".s-xmancard").removeClass("s-news-split");
          card_showLog.feedLoadLog("autoRefresh");
        }
      });
    });
    card_showLog.feedLoadLog("firstRefresh");
    _centerMen.delegate(".s-menu-item", "click", function (e) {
      var $this = cc11001100_hook("$this", $(this), "var-init");
      var id = cc11001100_hook("id", $this.attr("data-id"), "var-init");
      var fromCardId = cc11001100_hook("fromCardId", cards.curId, "var-init");
      !!sampleval && _loadHelper.handleDeskTop({
        click: cc11001100_hook("click", true, "object-key-init")
      }, $this);
      if (cards.curId !== id) {
        cards.switchCard(id, function () {
          feedFirstLoad(id, !parseInt(cards.get(cards.curId).waterPage, 10) && !cards.get(cards.curId).noMore);
        });
        _loadHelper.toggleMore(!parseInt(cards.get(cards.curId).waterPage, 10) && !cards.get(cards.curId).noMore);
        ctx.fire("switchCard", {
          toCard: cc11001100_hook("toCard", id, "object-key-init"),
          fromCard: cc11001100_hook("fromCard", fromCardId, "object-key-init")
        });
      }
      if (id === "100") {
        _topDom.find(".mine-tips").hide();
        $("#s_ctner_contents").addClass("desktop-ctner-contents");
      }
      F.use("superman:setting/card_setting", function (Cardsetting) {
        Cardsetting.hide();
      });
      setTimeout(function () {
        ctx.fire("modShow", {
          showTab: cc11001100_hook("showTab", cards.curId, "object-key-init"),
          opType: cc11001100_hook("opType", "click", "object-key-init")
        });
        ctx.fire("modClick", {
          clickTab: cc11001100_hook("clickTab", cards.curId, "object-key-init")
        });
        card_showLog.itemShowLog();
      }, 500);
      F.use("superman:common/user_attr", function (userAttr) {
        if (userAttr.getAttr && userAttr.getAttr("firstMahattan")) {
          var ids = cc11001100_hook("ids", cards.getMenuIDS().join(","), "var-init");
          $.ajaxpost(s_domain.baseuri + "/pcweb/submit/mancardmod", {
            cmd: cc11001100_hook("cmd", "sort", "object-key-init"),
            ids: cc11001100_hook("ids", ids, "object-key-init")
          });
          userAttr.setAttr("firstMahattan", "off");
        }
      });
      e.stopPropagation();
    }).delegate(".s-menu-item", "mouseenter", function (e) {
      var elem = cc11001100_hook("elem", $(this), "var-init");
      var id = cc11001100_hook("id", elem.attr("data-id"), "var-init");
      var start = cc11001100_hook("start", +new Date(), "var-init");
      _loadMap[id] = cc11001100_hook("_loadMap[id]", {
        start: cc11001100_hook("start", start, "object-key-init")
      }, "assign");
      _loadMap[id].timeId = cc11001100_hook("_loadMap[id].timeId", setTimeout(function () {
        if (!cards.get(id).rendered) {
          cards.get(id).render();
        }
      }, 150), "assign");
      e.stopPropagation();
    }).delegate(".s-menu-item", "mouseleave", function (e) {
      var elem = cc11001100_hook("elem", $(this), "var-init");
      var id = cc11001100_hook("id", elem.attr("data-id"), "var-init");
      var cur = cc11001100_hook("cur", _loadMap[id], "var-init");
      var end = cc11001100_hook("end", +new Date(), "var-init");
      if (cur && cur.start) {
        if (end - cur.start < 150) {
          clearTimeout(cur.timeId);
        }
      }
      e.stopPropagation();
    }).delegate(".s-menu-setting", "click", function (e) {
      F.use("superman:setting/card_setting", function (Cardsetting) {
        if (!Cardsetting.isShow()) {
          Cardsetting.show({
            current: cc11001100_hook("current", $("#s_menus_wrapper").find(".current").attr("data-id"), "object-key-init")
          });
        } else {
          Cardsetting.hide();
        }
      });
    }).delegate(".s-music-entry", "mouseenter", function () {
      F.call("newmusic:player_exp", "init");
    });
    _topDom.delegate(".s-more-bar", "click", function (e) {
      _loadHelper.tolerance = cc11001100_hook("_loadHelper.tolerance", _loadHelper.defaulSub, "assign");
      _loadHelper.judgeFire();
      ctx.fire("loadMoreClick");
      e.stopPropagation();
    }).delegate(".to-top", "click", function (e) {
      $("body,html").animate({
        scrollTop: cc11001100_hook("scrollTop", 0, "object-key-init")
      });
      ctx.fire("gotoTopClick");
      e.stopPropagation();
    });
    _topDom.delegate("#s_top_feed .to-top", "mouseenter mouseleave", function (e) {
      if (e.type === "mouseenter") {
        $(this).addClass("icon-over");
        $("#s_qrcode_feed .qrcode-tooltip").hide();
      } else if (e.type === "mouseleave") {
        $(this).removeClass("icon-over");
      }
      e.stopPropagation();
    }).delegate("#s_qrcode_feed .qrcode-layer", "mouseenter mouseleave", function (e) {
      if (e.type === "mouseenter") {
        $(this).addClass("icon-over");
        $(this).next(".qrcode-tooltip").show().addClass("popup");
      } else if (e.type === "mouseleave") {
        $(this).removeClass("icon-over");
        $(this).next(".qrcode-tooltip").removeClass("popup");
      }
      e.stopPropagation();
    });
    ctx.listen(["superman:setting/card_setting", "superman:common/bottom_layer", "superman:mngr/menu_common"], ["hideMain", "showSet", "hideSet"], function (data) {
      var wraper;
      if (data.cmd === "add") {
        (cards.get(data.id) || cards.add(data.id, data.name, "1")).add2Men();
        cardChange = cc11001100_hook("cardChange", data.id, "assign");
      } else if (data.cmd === "del") {
        var first = cc11001100_hook("first", 0, "var-init");
        cards.get(data.id).del4Men();
        for (first in cards.pool) {
          break;
        }
        cardChange = cc11001100_hook("cardChange", first, "assign");
      } else if (data.cmd === "sort") {
        wraper = cc11001100_hook("wraper", $("#s_menus_wrapper"), "assign");
        $.each(data.ids, function (idx, item) {
          cards.get(item).getMyMen().appendTo(wraper);
        });
      } else if (data._EVENT_NAME === "hideMain") {
        var delay = cc11001100_hook("delay", $("#s_top_wrap").hasClass("s-down") ? $.isIE === 8 || $.isIE === 7 ? 2500 : 400 : 0, "var-init");
        $("html,body").animate({
          scrollTop: cc11001100_hook("scrollTop", 0, "object-key-init")
        }, delay, function () {
          $("#head_wrapper").addClass("s-ps-islite");
          $("#s_main").hide();
          $("#s_mancard_newmusic").hide();
          $("#s_mancard_newmusic").remove();
          $("#s_upfunc_menus .s-lite").removeClass("hide-icon");
          $("#bottom_layer .s-bottom-layer-right").addClass("hide-card");
          $("#s-user-setting-menu").addClass("hiding-feed");
          $(".s_form_wrapper").addClass("lite");
          if (s_session.isLogin) {
            F.use("superman:common/user_attr", function (e) {
              e.setAttr("isLite", "0");
            });
          }
        });
        $("body").addClass("is-lite");
      } else if (data._EVENT_NAME === "showSet") {
        cardChange = cc11001100_hook("cardChange", null, "assign");
      } else if (data._EVENT_NAME === "hideSet") {
        cardChange = cc11001100_hook("cardChange", null, "assign");
        wraper = cc11001100_hook("wraper", $("#s_menus_wrapper"), "assign");
        var currentIds = cc11001100_hook("currentIds", cards.getMenuIDS(), "var-init");
        var sMenuMusic = cc11001100_hook("sMenuMusic", $(".s-menu-music"), "var-init");
        if (sMenuMusic.length > 0 && sMenuMusic.css("display") !== "none") {
          currentIds.unshift(sMenuMusic.attr("data-id"));
        }
        $.each(currentIds, function (idx, item) {
          if ($.inArray(item, data.ids) === -1) {
            if (item === "3") {
              sMenuMusic.find(".s-music-entry").hide();
              F.call("newmusic:index", "stop");
            }
            cards.get(item).del4Men();
            cards.get(item).getMyMen().removeClass("current");
          }
        });
        $.each(data.items, function (idx, item) {
          if (cards.get(item.id)) {
            var node = cc11001100_hook("node", cards.get(item.id).getMyMen(), "var-init");
            node.css("display", "");
            if (item.id === "3") {
              node.appendTo(wraper.parent());
              sMenuMusic.find(".s-music-entry").show();
              $("#s_mancard_newmusic").show();
              F.call("newmusic:index", "init");
            } else {
              node.appendTo(wraper);
            }
            if (node.hasClass("current")) {
              cardChange = cc11001100_hook("cardChange", item.id, "assign");
            }
          } else {
            cards.add(item.id, item.name, "1").add2Men();
          }
        });
        if (data.items.length === 0 || data.items.length === 1 && data.ids[0] === "3") {
          cardChange = cc11001100_hook("cardChange", "100", "assign");
        }
        if (s_session.curmod === "100") {
          return;
        }
        if (cardChange !== s_session.curmod) {
          if (cardChange !== null) {
            cards.switchCard(cardChange);
          } else {
            cardChange = cc11001100_hook("cardChange", data.ids[0] === "3" ? data.ids[1] : data.ids[0], "assign");
            cards.switchCard(cardChange);
          }
        }
      }
    });
    ctx.listen("superman:page/scroll", "outMenu", function (data) {
      if (!data.out) {
        $("#s_top_wrap .s-top-nav").css("display", "none");
      }
    });
    _loadHelper.moreUpFy();
    $(global).bind("resize", function (e) {
      windowHeight = cc11001100_hook("windowHeight", $(this).height(), "assign");
      _menuHelper.barTop = cc11001100_hook("_menuHelper.barTop", _menuContainer.offset().top, "assign");
      _loadHelper.moreUpFy(undefined, true);
    }).on("scroll", function (e) {
      if (s_session.index_off || s_session.index_guide) {
        return;
      }
      var scrollTop = cc11001100_hook("scrollTop", $(this).scrollTop(), "var-init");
      var totalHeight = cc11001100_hook("totalHeight", $(document).height(), "var-init");
      if (Math.abs(scrollTop + windowHeight - totalHeight) <= _loadHelper.tolerance && _loadHelper.preTop < scrollTop) {
        _loadHelper.judgeFire();
      }
      _loadHelper.preTop = cc11001100_hook("_loadHelper.preTop", scrollTop, "assign");
      _menuHelper.judgeMenu(scrollTop);
      _menuHelper.toggleMenu(scrollTop);
      _menuHelper.feedRoller(scrollTop);
      setTimeout(function () {
        card_showLog.itemShowLog();
      }, 300);
      _loadHelper.moreUpFy(undefined, true);
    });
    $(global).on("s-skinon", function () {
      _loadHelper.moreUpFy(true);
    });
    $(global).on("s-skinoff", function () {
      $(window).trigger("desktopSkinOff");
      _loadHelper.moreUpFy(false);
    });
    var ua = cc11001100_hook("ua", navigator.userAgent.toLowerCase(), "var-init");
    var isPad = cc11001100_hook("isPad", ua.match(/iPad/i) && ua.match(/iPad/i)[0] === "ipad" || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1, "var-init");
    if (isPad) {
      var startY = cc11001100_hook("startY", 0, "var-init");
      var endY = cc11001100_hook("endY", 0, "var-init");
      $(document).on("touchstart", function (e) {
        startY = cc11001100_hook("startY", e.originalEvent.changedTouches[0].pageY, "assign");
      }).on("touchend", function (e) {
        endY = cc11001100_hook("endY", e.originalEvent.changedTouches[0].pageY, "assign");
        if (endY - startY < 0) {
          _loadHelper.tolerance = cc11001100_hook("_loadHelper.tolerance", _loadHelper.defaulSub, "assign");
          _loadHelper.judgeFire();
        }
      });
    }
    $(document).on("mousewheel", function (e) {
      reload(e);
    }).on("keydown", reload);
    function reload(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (s_session.index_guide) {
        return;
      }
      if (document.documentElement.scrollHeight <= document.documentElement.clientHeight && e.deltaY < 0 || $(global).scrollTop() + $(global).height() - $(document).height() >= -2 && _loadHelper.tolerance === 0 && (e.deltaY < 0 || e.keyCode === 40)) {
        _loadHelper.tolerance = cc11001100_hook("_loadHelper.tolerance", _loadHelper.defaulSub, "assign");
        _loadHelper.judgeFire();
      }
    }
    var bottomChange = cc11001100_hook("bottomChange", false, "var-init");
    ctx.listen("mancard:skeleton/card", "beforeLoading", function () {
      if (!bottomChange) {
        $("#bottom_container").appendTo("#s_wrap");
        bottomChange = cc11001100_hook("bottomChange", true, "assign");
      }
    });
  }
  !!sampleval && desktopEvent();
  exports.init = cc11001100_hook("exports.init", init, "assign");
  exports.forceMenu = cc11001100_hook("exports.forceMenu", forceMenu, "assign");
  exports.desktopEvent = cc11001100_hook("exports.desktopEvent", desktopEvent, "assign");
  exports.judgeFire = cc11001100_hook("exports.judgeFire", function () {
    _loadHelper.tolerance = cc11001100_hook("_loadHelper.tolerance", 300, "assign");
    _loadHelper.judgeFire();
  }, "assign");
});
F.call("superman:skeleton/presenter", "init");
F.module("superman:skeleton/card_tab", function (require, exports, ctx) {
  var cards = cc11001100_hook("cards", require("skeleton/card_collection"), "var-init");
  var re = cc11001100_hook("re", /childId=(.+);/, "var-init");
  var reLasttab = cc11001100_hook("reLasttab", /lasttab/, "var-init");
  function CardTab(options) {
    cc11001100_hook("options", options, "function-parameter");
    this.initialize(options);
  }
  CardTab.prototype = cc11001100_hook("CardTab.prototype", {
    initialize: function (options) {
      var self = cc11001100_hook("self", this, "var-init");
      var option = cc11001100_hook("option", F.mix({
        cardName: cc11001100_hook("cardName", null, "object-key-init"),
        componentWrap: cc11001100_hook("componentWrap", null, "object-key-init"),
        content: cc11001100_hook("content", null, "object-key-init"),
        cardTabClass: cc11001100_hook("cardTabClass", "card-tab", "object-key-init"),
        tabNameClass: cc11001100_hook("tabNameClass", "tab-name", "object-key-init"),
        tabNameCurClass: cc11001100_hook("tabNameCurClass", "tab-name-cur", "object-key-init"),
        tabContentClass: cc11001100_hook("tabContentClass", "tab-content", "object-key-init"),
        tabContentWrapClass: cc11001100_hook("tabContentWrapClass", "tab-content-wrap", "object-key-init"),
        dataTabName: cc11001100_hook("dataTabName", "data-childid", "object-key-init")
      }, options), "var-init");
      self.cardName = cc11001100_hook("self.cardName", option.cardName, "assign");
      self.componentWrap = cc11001100_hook("self.componentWrap", option.componentWrap, "assign");
      self.content = cc11001100_hook("self.content", option.content, "assign");
      self.tabNameClass = cc11001100_hook("self.tabNameClass", option.tabNameClass, "assign");
      self.tabNameCurClass = cc11001100_hook("self.tabNameCurClass", option.tabNameCurClass, "assign");
      self.tabContentClass = cc11001100_hook("self.tabContentClass", option.tabContentClass, "assign");
      self.dataTabName = cc11001100_hook("self.dataTabName", option.dataTabName, "assign");
      self.mainDom = cc11001100_hook("self.mainDom", self.componentWrap.parent(), "assign");
      var id = cc11001100_hook("id", self.mainDom.attr("data-id"), "var-init");
      self.card = cc11001100_hook("self.card", cards.get(id), "assign");
      self.sessionIds = cc11001100_hook("self.sessionIds", {}, "assign");
      self.offsets = cc11001100_hook("self.offsets", {}, "assign");
      self.noMores = cc11001100_hook("self.noMores", {}, "assign");
      self.dataWaterPara = cc11001100_hook("self.dataWaterPara", "", "assign");
      self.render(option);
      self.bindEvent();
    },
    render: function (options) {
      var self = cc11001100_hook("self", this, "var-init");
      self.tabs = cc11001100_hook("self.tabs", self.componentWrap.find("." + options.cardTabClass), "assign");
      self.curTab = cc11001100_hook("self.curTab", self.tabs.find("." + self.tabNameCurClass).attr(self.dataTabName), "assign");
      self.dataWaterPara = cc11001100_hook("self.dataWaterPara", self.mainDom.attr("data-waterpara") || "", "assign");
      if (!self.dataWaterPara.match(re)) {
        self.dataWaterPara = cc11001100_hook("self.dataWaterPara", self.dataWaterPara + "childId=" + self.curTab + ";", "assign");
        self.mainDom.attr("data-waterpara", self.dataWaterPara);
      }
      self.componentWrap.attr("data-curtab", self.curTab);
      self.content.wrap('<div class="' + options.tabContentWrapClass + '"></div>');
      self.contentWrap = cc11001100_hook("self.contentWrap", self.componentWrap.find("." + options.tabContentWrapClass), "assign");
      self.content.addClass("tab-content").attr(self.dataTabName, self.curTab).attr("data-load", "loaded").show();
      self.sessionIds[self.curTab] = cc11001100_hook("self.sessionIds[self.curTab]", self.card.sessionId, "assign");
      self.offsets[self.curTab] = cc11001100_hook("self.offsets[self.curTab]", self.card.waterPage, "assign");
      self.noMores[self.curTab] = cc11001100_hook("self.noMores[self.curTab]", self.card.noMore, "assign");
    },
    bindEvent: function () {
      var self = cc11001100_hook("self", this, "var-init");
      var tpl = cc11001100_hook("tpl", ['<div class="s-content-load s-opacity-white-background">', '<img src="#{staticUrl}static/superman/img/loading-f9b765014b.gif" />', "<div>加载中，精彩马上呈现</div>", "</div>"].join(""), "var-init");
      tpl = cc11001100_hook("tpl", $.formatString(tpl, {
        staticUrl: cc11001100_hook("staticUrl", s_domain.staticUrl, "object-key-init")
      }), "assign");
      var targetTabglobal;
      ctx.listen("superman:skeleton/card", ["syncNomore"], function (data) {
        self.sessionIds[targetTabglobal] = cc11001100_hook("self.sessionIds[targetTabglobal]", self.card.sessionId, "assign");
        self.card.sessionId = cc11001100_hook("self.card.sessionId", self.sessionIds[self.curTab], "assign");
        self.card.noMore = cc11001100_hook("self.card.noMore", true, "assign");
        self.noMores[targetTabglobal] = cc11001100_hook("self.noMores[targetTabglobal]", self.card.noMore, "assign");
        self.contentWrap.find("[" + self.dataTabName + '="' + targetTabglobal + '"]').attr("data-load", "loaded").append(data);
        self.card.setForceLoad(false);
      });
      self.tabs.delegate("." + self.tabNameClass, "mouseenter", function (e) {
        var that = cc11001100_hook("that", this, "var-init");
        var preName = cc11001100_hook("preName", $(this).prop("className"), "var-init");
        if (reLasttab.exec(preName) && reLasttab.exec(preName)[0] === "lasttab") {
          return;
        }
        var targetTab = cc11001100_hook("targetTab", $(this).attr(self.dataTabName), "var-init");
        targetTabglobal = cc11001100_hook("targetTabglobal", targetTab, "assign");
        var targetContent = cc11001100_hook("targetContent", self.contentWrap.find("[" + self.dataTabName + '="' + targetTab + '"]'), "var-init");
        if (targetContent.length === 0) {
          targetContent = cc11001100_hook("targetContent", $('<div class="' + self.tabContentClass + '"></div>').attr(self.dataTabName, targetTab).appendTo(self.contentWrap), "assign");
          targetContent.attr("data-load", "loading").append(tpl);
          self.card.setForceLoad(true);
          self.card.addParam("childId", targetTab);
          self.card.load(function (data) {
            self.sessionIds[targetTab] = cc11001100_hook("self.sessionIds[targetTab]", self.card.sessionId, "assign");
            self.card.sessionId = cc11001100_hook("self.card.sessionId", self.sessionIds[self.curTab], "assign");
            self.card.noMore = cc11001100_hook("self.card.noMore", self.noMores[targetTab] || false, "assign");
            self.noMores[targetTab] = cc11001100_hook("self.noMores[targetTab]", self.card.noMore, "assign");
            self.card.ridsHash = cc11001100_hook("self.card.ridsHash", {}, "assign");
            targetContent.attr("data-load", "loaded").append(data);
            self.card.setForceLoad(false);
            if (self.curTab === targetTab) {
              if (!$(that).attr("data-firstLoad")) {
                self.card.waterLoading = cc11001100_hook("self.card.waterLoading", false, "assign");
                self.card.appendData(function (data) {
                  $("#s_mancard_main").find(".s-more-bar").hide();
                  $(that).attr("data-firstLoad", 1);
                }, false, targetContent);
              }
            }
            self.contentWrap.find(".s-content-load").remove();
          });
        }
      }).delegate("." + self.tabNameClass, "click", function (e) {
        var that = cc11001100_hook("that", this, "var-init");
        e.stopPropagation();
        var preName = cc11001100_hook("preName", $(this).prop("className"), "var-init");
        if (reLasttab.exec(preName) && reLasttab.exec(preName)[0] === "lasttab") {
          ctx.fire("clicklastTab");
          return;
        }
        $(that).trigger("mouseenter");
        var curTab = cc11001100_hook("curTab", self.tabs.find("." + self.tabNameCurClass).removeClass(self.tabNameCurClass).attr(self.dataTabName), "var-init");
        var targetTab = cc11001100_hook("targetTab", $(this).addClass(self.tabNameCurClass).attr(self.dataTabName), "var-init");
        self.dataWaterPara = cc11001100_hook("self.dataWaterPara", self.dataWaterPara.replace(re, "childId=" + targetTab + ";"), "assign");
        self.mainDom.attr("data-waterpara", self.dataWaterPara);
        ctx.fire("clickTab", {
          tabName: cc11001100_hook("tabName", $(this).prop("className"), "object-key-init"),
          childId: cc11001100_hook("childId", $(this).attr("data-childid"), "object-key-init")
        });
        if (curTab === targetTab) {
          return;
        }
        self.offsets[curTab] = cc11001100_hook("self.offsets[curTab]", self.card.waterPage, "assign");
        self.noMores[curTab] = cc11001100_hook("self.noMores[curTab]", self.card.noMore, "assign");
        self.card.waterPage = cc11001100_hook("self.card.waterPage", self.offsets[targetTab] || 0, "assign");
        self.card.noMore = cc11001100_hook("self.card.noMore", self.noMores[targetTab] || false, "assign");
        self.card.ridsHash = cc11001100_hook("self.card.ridsHash", {}, "assign");
        self.card.sessionId = cc11001100_hook("self.card.sessionId", self.sessionIds[targetTab], "assign");
        if (!self.card.noMore) {
          self.card.resetNoMore();
        } else {
          $(".load-done").remove();
          $(".s-content-load").remove();
          self.card.emitNoMore();
        }
        var curContent = cc11001100_hook("curContent", self.contentWrap.find("[" + self.dataTabName + '="' + curTab + '"]'), "var-init");
        var targetContent = cc11001100_hook("targetContent", curContent.siblings("[" + self.dataTabName + '="' + targetTab + '"]'), "var-init");
        curContent.hide();
        targetContent.show();
        self.curTab = cc11001100_hook("self.curTab", targetTab, "assign");
        if (self.card.id != "5") {
          self.setTargetTab(targetTab);
        }
        self.card.waterDom = cc11001100_hook("self.card.waterDom", targetContent, "assign");
        if (!self.sessionIds[targetTab]) {
          return;
        }
        self.card.waterLoading = cc11001100_hook("self.card.waterLoading", false, "assign");
        if (!$(that).attr("data-firstLoad")) {
          self.card.appendData(function (data) {
            $("#s_mancard_main").find(".s-more-bar").hide();
            $(that).attr("data-firstLoad", 1);
          }, false, targetContent);
        }
      });
    },
    setTargetTab: function (tab, cb) {
      var self = cc11001100_hook("self", this, "var-init");
      F.use("superman:skeleton/card_memory", function (cardMemory) {
        cardMemory.setCardTab(self.cardName, tab);
        cb && cb();
      });
    }
  }, "assign");
  return CardTab;
});
F.module("superman:skeleton/card_refresh", function (require, exports, ctx) {
  var LOADING_TIMEOUT = cc11001100_hook("LOADING_TIMEOUT", {
    COMMON: cc11001100_hook("COMMON", 3e3, "object-key-init"),
    FAIL: cc11001100_hook("FAIL", 5e3, "object-key-init")
  }, "var-init");
  function checkEleInView(ele) {
    cc11001100_hook("ele", ele, "function-parameter");
    var rect = cc11001100_hook("rect", ele.getBoundingClientRect(), "var-init");
    return rect.top > 0 && rect.top + rect.height * .3 < window.innerHeight - 78;
  }
  function checkIsFix() {
    return $("#s_top_wrap").hasClass("s-down");
  }
  function clearData() {
    var isFix = cc11001100_hook("isFix", checkIsFix(), "var-init");
    var news = cc11001100_hook("news", $(".s-news-item"), "var-init");
    function check() {
      if (!isFix) {
        return 0;
      }
      var flag = cc11001100_hook("flag", false, "var-init");
      if (+$(".s-menu-item.current").data().id === 2) {
        for (var i = cc11001100_hook("i", 0, "var-init"); i < news.length; i++) {
          if (checkEleInView(news[i])) {
            flag = cc11001100_hook("flag", true, "assign");
          } else if (flag && !checkEleInView(news[i])) {
            return i;
          }
        }
      }
      return news.length;
    }
    var lastIndex = cc11001100_hook("lastIndex", check(), "var-init");
    for (var i = cc11001100_hook("i", lastIndex, "var-init"); i < news.length; i++) {
      if (news[i]) {
        news[i].parentElement.removeChild(news[i]);
      }
    }
    return lastIndex - 1;
  }
  function easyScroll() {
    var min = cc11001100_hook("min", Math.min, "var-init");
    var ms = cc11001100_hook("ms", Date.now, "var-init");
    function make(prop) {
      cc11001100_hook("prop", prop, "function-parameter");
      return function scroll(el, to, opts, cb) {
        opts = cc11001100_hook("opts", opts || {}, "assign");
        if (typeof opts == "function") cb = cc11001100_hook("cb", opts, "assign"), opts = cc11001100_hook("opts", {}, "assign");
        if (typeof cb != "function") cb = cc11001100_hook("cb", function () {}, "assign");
        var start = cc11001100_hook("start", ms(), "var-init");
        var from = cc11001100_hook("from", $(window).scrollTop(), "var-init");
        var ease = cc11001100_hook("ease", opts.ease || inOutSine, "var-init");
        var duration = cc11001100_hook("duration", !isNaN(opts.duration) ? +opts.duration : 350, "var-init");
        var cancelled = cc11001100_hook("cancelled", false, "var-init");
        return requestAnimationFrame(animate), cancel;
        function cancel() {
          cancelled = cc11001100_hook("cancelled", true, "assign");
        }
        function animate() {
          if (cancelled) return;
          var now = cc11001100_hook("now", ms(), "var-init");
          var time = cc11001100_hook("time", min(1, (now - start) / duration), "var-init");
          var eased = cc11001100_hook("eased", ease(time), "var-init");
          el.scrollTo(0, eased * (to - from) + from);
          time < 1 ? requestAnimationFrame(animate) : requestAnimationFrame(function () {
            cb(null, el[prop]);
          });
        }
      };
    }
    function inOutSine(n) {
      cc11001100_hook("n", n, "function-parameter");
      return .5 * (1 - Math.cos(Math.PI * n));
    }
    return make("scrollTop");
  }
  var scrollTop = cc11001100_hook("scrollTop", easyScroll(), "var-init");
  function AutoRefresh(options) {
    cc11001100_hook("options", options, "function-parameter");
    this.isStart = cc11001100_hook("this.isStart", false, "assign");
    this.init(options);
  }
  AutoRefresh.prototype = cc11001100_hook("AutoRefresh.prototype", {
    init: function (options) {
      if (!options) {
        return;
      }
      this.card = cc11001100_hook("this.card", options.card, "assign");
      this.$newsWrapper = cc11001100_hook("this.$newsWrapper", $(".s-news-wrapper"), "assign");
      this.$topWrap = cc11001100_hook("this.$topWrap", $("#s_top_wrap"), "assign");
      this.$cardMain = cc11001100_hook("this.$cardMain", $("#s_mancard_main"), "assign");
      this.$toastWrapperDiv = cc11001100_hook("this.$toastWrapperDiv", null, "assign");
      this.$toastSpan = cc11001100_hook("this.$toastSpan", null, "assign");
      this.refreshCallback = cc11001100_hook("this.refreshCallback", options.refreshCallback || function () {}, "assign");
      this.$tabDom = cc11001100_hook("this.$tabDom", $(".s-menu-item[data-id=" + this.card.id + "]"), "assign");
      if (this.$tabDom.length <= 0) {
        return;
      }
      this.timeout = cc11001100_hook("this.timeout", options.timeout, "assign");
      this.leaveTime = cc11001100_hook("this.leaveTime", null, "assign");
      this.returnTime = cc11001100_hook("this.returnTime", null, "assign");
      this.startListen();
    },
    startListen: function () {
      var _this = cc11001100_hook("_this", this, "var-init");
      if (_this.isStart) {
        return;
      }
      this.initToast();
      _this.isStart = cc11001100_hook("_this.isStart", true, "assign");
      _this.listener = cc11001100_hook("_this.listener", function listener(target) {
        if (document.visibilityState === "visible") {
          _this.returnTime = cc11001100_hook("_this.returnTime", _this._timestampToSeconds(Date.now()), "assign");
          if (_this.checkNeedRefresh()) {
            _this.refresh();
          }
        } else {
          _this.leaveTime = cc11001100_hook("_this.leaveTime", _this._timestampToSeconds(Date.now()), "assign");
        }
      }, "assign");
      document.addEventListener("visibilitychange", _this.listener);
    },
    checkAds: function () {
      var news = cc11001100_hook("news", $(".s-news-item"), "var-init");
      var lastAdIndex = cc11001100_hook("lastAdIndex", 0, "var-init");
      var lastIndex = cc11001100_hook("lastIndex", 0, "var-init");
      if (!checkIsFix()) {
        return 0;
      }
      for (var i = cc11001100_hook("i", 0, "var-init"); i < news.length; i++) {
        if (checkEleInView(news[i])) {
          if (news.eq(i).find(".ad-icon").length > 0) {
            lastAdIndex = cc11001100_hook("lastAdIndex", i, "assign");
          }
          lastIndex = cc11001100_hook("lastIndex", i, "assign");
        }
      }
      return lastIndex - lastAdIndex < 2 ? 0 : 1;
    },
    refresh: function () {
      var _this = cc11001100_hook("_this", this, "var-init");
      _this.showToast();
      _this.setToast("loading", "即将为你呈现新鲜内容");
      _this.addBottomLoading();
      _this.card.autoRefreshing = cc11001100_hook("_this.card.autoRefreshing", true, "assign");
      clearTimeout(_this.failTimeout);
      if (checkIsFix()) {
        clearData();
      }
      var needAd = cc11001100_hook("needAd", _this.checkAds(), "var-init");
      _this.loadData(_this.getParams({
        needAd: cc11001100_hook("needAd", needAd, "object-key-init")
      }), function (data) {
        if (!checkIsFix()) {
          clearData();
        }
        _this.card.autoRefreshing = cc11001100_hook("_this.card.autoRefreshing", false, "assign");
        _this.setToast("suc", "为你推荐最新内容");
        var scrollNewsItem = cc11001100_hook("scrollNewsItem", _this.getCurrentNews(), "var-init");
        if (!_this.card.waterDom) {
          _this.card.waterDom = cc11001100_hook("_this.card.waterDom", $(".water-container", _this.card.mainDom), "assign");
        }
        _this.card.waterDom.append(data.html);
        _this.removeBottomLoading();
        typeof _this.refreshCallback === "function" && _this.refreshCallback();
        if (checkIsFix()) {
          setTimeout(function () {
            scrollTop(window, scrollNewsItem.newsItem.height() + scrollNewsItem.newsItem.offset().top - 30);
          }, window.innerHeight > 600 ? 400 : 240);
        }
        setTimeout(function () {
          _this.closeToast();
        }, LOADING_TIMEOUT.COMMON);
      });
    },
    getCurrentNews: function () {
      var news = cc11001100_hook("news", $(".s-news-item"), "var-init");
      var index = cc11001100_hook("index", news.length - 1, "var-init");
      return {
        index: cc11001100_hook("index", index, "object-key-init"),
        newsItem: cc11001100_hook("newsItem", news.eq(index), "object-key-init")
      };
    },
    getParams: function (p) {
      var _card = cc11001100_hook("_card", this.card, "var-init");
      var params = cc11001100_hook("params", {
        id: cc11001100_hook("id", _card.id, "object-key-init"),
        offset: cc11001100_hook("offset", _card.waterPage, "object-key-init"),
        sessionId: cc11001100_hook("sessionId", _card.sessionId, "object-key-init"),
        crids: cc11001100_hook("crids", window.s_session.crids, "object-key-init"),
        refresh_state: cc11001100_hook("refresh_state", 4, "object-key-init"),
        async: cc11001100_hook("async", 1, "object-key-init"),
        needAd: cc11001100_hook("needAd", p.needAd, "object-key-init")
      }, "var-init");
      var paraDom = cc11001100_hook("paraDom", _card.mainDom || $("#s_content_" + _card.id), "var-init");
      var extraParam = cc11001100_hook("extraParam", paraDom.attr("data-waterpara"), "var-init");
      if (!extraParam && paraDom.find(".s-xmancard").attr("data-waterpara")) {
        extraParam = cc11001100_hook("extraParam", paraDom.find(".s-xmancard").attr("data-waterpara"), "assign");
      }
      if (extraParam) {
        var regx = cc11001100_hook("regx", /([s\S]*?)\=([\s\S]*?)\;/g, "var-init");
        var result = cc11001100_hook("result", null, "var-init");
        while (result = cc11001100_hook("result", regx.exec(extraParam), "assign")) {
          if (result[1] === "offset") {
            if (!_card.offsetUsed) {
              params[result[1]] = cc11001100_hook("params[result[1]]", result[2], "assign");
              _card.waterPage = cc11001100_hook("_card.waterPage", result[2], "assign");
              _card.offsetUsed = cc11001100_hook("_card.offsetUsed", true, "assign");
            }
          } else {
            params[result[1]] = cc11001100_hook("params[result[1]]", result[2], "assign");
          }
        }
      }
      params.newsNum = cc11001100_hook("params.newsNum", params.newsNum || params.pos, "assign");
      return params;
    },
    addBottomLoading: function () {
      var $loading = cc11001100_hook("$loading", $(".s-loading"), "var-init");
      if (this.card.loadDom) {
        this.card.loadDom.show();
      }
      if ($loading.find(".s-auto-refresh-loading").length === 0) {
        $loading.append('<div class="s-auto-refresh-loading">精彩内容马上呈现</div>');
      }
    },
    removeBottomLoading: function () {
      if (this.card.loadDom) {
        this.card.loadDom.hide();
      }
      $(".s-auto-refresh-loading").remove();
    },
    _timestampToSeconds: function (timestamp) {
      return Math.floor(timestamp / 1e3);
    },
    checkNeedRefresh: function () {
      if (!this.$tabDom.hasClass("current")) {
        return;
      }
      return this.returnTime - this.leaveTime > this.timeout;
    },
    loadData: function (params, cb) {
      var _this = cc11001100_hook("_this", this, "var-init");
      F.use("superman:skeleton/model", function (dao) {
        dao.get("waterHtml", function (data) {
          typeof cb === "function" && cb(data);
          $("div[data-waterpara]").attr("data-waterpara", "version=" + data.version + ";" + data.waterpara);
          _this.card.waterPage++;
        }, params).fail(function () {
          _this.setToast("retry", "刷新失败，点击重试");
          _this.card.autoRefreshing = cc11001100_hook("_this.card.autoRefreshing", false, "assign");
        });
      });
    },
    initToast: function () {
      var _this = cc11001100_hook("_this", this, "var-init");
      var toastWrapperDiv = cc11001100_hook("toastWrapperDiv", document.createElement("div"), "var-init");
      var toastSpan = cc11001100_hook("toastSpan", document.createElement("span"), "var-init");
      if (this.$newsWrapper.find(".auto-refresh-toast-wrapper").length > 0) {
        return;
      }
      toastWrapperDiv.className = cc11001100_hook("toastWrapperDiv.className", "auto-refresh-toast-wrapper", "assign");
      toastWrapperDiv.style.display = cc11001100_hook("toastWrapperDiv.style.display", "none", "assign");
      toastSpan.className = cc11001100_hook("toastSpan.className", "auto-refresh-toast", "assign");
      this.$toastWrapperDiv = cc11001100_hook("this.$toastWrapperDiv", $(toastWrapperDiv), "assign");
      this.$toastSpan = cc11001100_hook("this.$toastSpan", $(toastSpan), "assign");
      this.$toastWrapperDiv.append(toastSpan);
      this.$newsWrapper.append(this.$toastWrapperDiv);
      _this.changeToastPosition();
      if (this._initToastEvent) {
        return;
      }
      _this.$newsWrapper.on("click", ".auto-refresh-toast-wrapper", function () {
        if (_this.$newsWrapper.find(".auto-refresh-toast").hasClass("retry")) {
          _this.refresh();
        }
        _this.failTimeout = cc11001100_hook("_this.failTimeout", setTimeout(function () {
          _this.closeToast();
        }, LOADING_TIMEOUT.FAIL), "assign");
      });
      window.addEventListener("scroll", function () {
        _this.changeToastPosition();
      });
      window.addEventListener("resize", function () {
        _this.changeToastPosition();
      });
      this._initToastEvent = cc11001100_hook("this._initToastEvent", true, "assign");
    },
    changeToastPosition: function (e) {
      if (checkIsFix()) {
        this.$newsWrapper.find(".auto-refresh-toast-wrapper").css({
          position: cc11001100_hook("position", "fixed", "object-key-init"),
          top: cc11001100_hook("top", 44 + this.$topWrap.height() + "px", "object-key-init"),
          left: cc11001100_hook("left", this.$cardMain.offset().left, "object-key-init")
        });
      } else {
        this.$newsWrapper.find(".auto-refresh-toast-wrapper").css({
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", "0", "object-key-init"),
          top: cc11001100_hook("top", "42px", "object-key-init")
        });
      }
    },
    setToast: function (iconClass, str) {
      this.showToast();
      var $toast = cc11001100_hook("$toast", this.$newsWrapper.find(".auto-refresh-toast"), "var-init");
      $toast.removeClass("loading");
      $toast.removeClass("retry");
      $toast.removeClass("suc");
      $toast.addClass(iconClass);
      this.$newsWrapper.find(".auto-refresh-toast").html('<span class="auto-refresh-icon"></span>' + str);
    },
    showToast: function () {
      this.$newsWrapper.find(".auto-refresh-toast-wrapper").css("display", "block");
    },
    closeToast: function () {
      this.$newsWrapper.find(".auto-refresh-toast-wrapper").css("display", "none");
    }
  }, "assign");
  return new AutoRefresh();
});
F.module("superman:skeleton/toast", function (require, exports, tool) {
  function checkIsFix() {
    return $("#s_top_wrap").hasClass("s-down");
  }
  var TOAST_DEFAULT_NAME = cc11001100_hook("TOAST_DEFAULT_NAME", "default", "var-init");
  var defaultTimeout = cc11001100_hook("defaultTimeout", 3e3, "var-init");
  var defaultParentSelector = cc11001100_hook("defaultParentSelector", $("body"), "var-init");
  var iconType = cc11001100_hook("iconType", {
    LOADING: cc11001100_hook("LOADING", "loading", "object-key-init"),
    SUCCESS: cc11001100_hook("SUCCESS", "success", "object-key-init"),
    RETRY: cc11001100_hook("RETRY", "retry", "object-key-init"),
    NONE: cc11001100_hook("NONE", "none", "object-key-init")
  }, "var-init");
  var modeType = cc11001100_hook("modeType", {
    fixInMiddle: cc11001100_hook("fixInMiddle", "fixInMiddle", "object-key-init"),
    flexible: cc11001100_hook("flexible", "flexible", "object-key-init")
  }, "var-init");
  function Toast(options) {
    cc11001100_hook("options", options, "function-parameter");
    this.reset(options);
    this._timeout = cc11001100_hook("this._timeout", null, "assign");
    this._el = cc11001100_hook("this._el", null, "assign");
  }
  Toast.prototype = cc11001100_hook("Toast.prototype", {
    reset: function (options) {
      this.$parentSelector = cc11001100_hook("this.$parentSelector", $(options.parentSelector || document.body), "assign");
      if (this.$parentSelector.length > 1) {
        this.$parentSelector = cc11001100_hook("this.$parentSelector", this.$parentSelector.eq(0), "assign");
      }
      this.mode = cc11001100_hook("this.mode", options.mode || modeType.fixInMiddle, "assign");
      this.name = cc11001100_hook("this.name", options.name || TOAST_DEFAULT_NAME, "assign");
      this.timeout = cc11001100_hook("this.timeout", options.timeout || 2e3, "assign");
      this.text = cc11001100_hook("this.text", options.text, "assign");
      this.icon = cc11001100_hook("this.icon", options.icon, "assign");
      this.flexibleOptions = cc11001100_hook("this.flexibleOptions", options.flexibleOptions || {
        fixTop: cc11001100_hook("fixTop", "170px", "object-key-init")
      }, "assign");
      this._changePositionFunc = cc11001100_hook("this._changePositionFunc", null, "assign");
      window.removeEventListener("resize", this._changePositionFunc);
      window.removeEventListener("scroll", this._changePositionFunc);
    },
    renderString: function () {
      var parentWidth = cc11001100_hook("parentWidth", this.$parentSelector.width(), "var-init");
      return '<div class="bd-pc-toast-wrapper" style="width: ' + parentWidth + 'px;">' + '<div class="bd-pc-toast">' + '<div class="bd-pc-toast-icon ' + (this.icon ? this.icon : "hide-icon") + '"></div>' + this.text + "</div>" + "</div>";
    },
    show: function (options) {
      var _this = cc11001100_hook("_this", this, "var-init");
      if (_this.isShowing) {
        return;
      }
      _this.isShowing = cc11001100_hook("_this.isShowing", true, "assign");
      clearTimeout(_this._timeout);
      _this.close();
      _this.reset(options);
      _this._timeout = cc11001100_hook("_this._timeout", setTimeout(function () {
        _this.close();
      }, _this.timeout), "assign");
      var htmlStr = cc11001100_hook("htmlStr", _this.renderString(), "var-init");
      _this._el = cc11001100_hook("_this._el", $(htmlStr), "assign");
      _this.setStyleByMode();
      _this.$parentSelector.append(_this._el);
      setTimeout(function () {
        _this.isShowing = cc11001100_hook("_this.isShowing", false, "assign");
      }, 10);
    },
    setStyleByMode: function () {
      var _this = cc11001100_hook("_this", this, "var-init");
      switch (_this.mode) {
        case modeType.fixInMiddle:
          _this._el.css({
            position: cc11001100_hook("position", "fixed", "object-key-init"),
            left: cc11001100_hook("left", "50%", "object-key-init"),
            top: cc11001100_hook("top", "50%", "object-key-init"),
            transform: cc11001100_hook("transform", "translate(-50%, -50%)", "object-key-init")
          });
          break;
        case modeType.flexible:
          _this._changePositionFunc = cc11001100_hook("_this._changePositionFunc", function () {
            if (checkIsFix()) {
              _this._el.css({
                position: cc11001100_hook("position", "fixed", "object-key-init"),
                left: cc11001100_hook("left", _this.$parentSelector.offset().left, "object-key-init"),
                top: cc11001100_hook("top", "50%", "object-key-init")
              });
            } else {
              _this._el.css({
                position: cc11001100_hook("position", "absolute", "object-key-init"),
                left: cc11001100_hook("left", "0", "object-key-init"),
                top: cc11001100_hook("top", _this.flexibleOptions.fixTop, "object-key-init")
              });
            }
          }, "assign");
          _this._changePositionFunc();
          window.addEventListener("resize", _this._changePositionFunc);
          window.addEventListener("scroll", _this._changePositionFunc);
          break;
        default:
      }
    },
    close: function () {
      if (this._el) {
        this._el.remove();
        window.removeEventListener("resize", this._changePositionFunc);
        window.removeEventListener("scroll", this._changePositionFunc);
      }
    }
  }, "assign");
  var toast = cc11001100_hook("toast", new Toast({
    parentSelector: cc11001100_hook("parentSelector", defaultParentSelector, "object-key-init"),
    icon: cc11001100_hook("icon", iconType.NONE, "object-key-init"),
    timeout: cc11001100_hook("timeout", defaultTimeout, "object-key-init"),
    name: cc11001100_hook("name", TOAST_DEFAULT_NAME, "object-key-init"),
    text: cc11001100_hook("text", "", "object-key-init"),
    mode: cc11001100_hook("mode", modeType.fixInMiddle, "object-key-init"),
    flexibleOptions: {
      fixTop: cc11001100_hook("fixTop", "170px", "object-key-init")
    }
  }), "var-init");
  window._toast = cc11001100_hook("window._toast", toast, "assign");
  return toast;
});
F.module("superman:setting/card_setting", function (require, exports, ctx) {
  var Emitter = cc11001100_hook("Emitter", require("superman:superuijs/util/emitter"), "var-init"),
    Dot = cc11001100_hook("Dot", require("superman:superuijs/util/dot"), "var-init"),
    userAttr = cc11001100_hook("userAttr", require("superman:common/user_attr"), "var-init"),
    DotCardCompile = cc11001100_hook("DotCardCompile", Dot.compile(['<div class="s-cardsetting" id="s_content_99" data-id="99">', '<div class="s-cardsetting-wrap clearfix">', '<div class="s-cardsetting-left">', "<h3>已订阅频道</h3>", '<div style="float:left;width:78px;text-align:center;margin-top:18px;border:1px solid #cdcdcd;height:24px;line-height:24px;">我的关注</div>', '<div class="s-cardsetting-content">', "{{~it.selected :value:index}}", '{{? (value.name!="音乐")}}', '<div class="s-mod-item" id="s_moditem_{{=value.id}}" data-id="{{=value.id}}" data-imgname="{{=value.imgname}}" data-name="{{=value.name}}"{{ if(value.name == "音乐"&&!it.showMusic){ }} style="display:none;"{{ } }}>', '<div class="s-mod-icon">', "</div>", '<div class="s-mod-title">', "{{=value.name}}", "</div>", "</div>", "{{?? it.showMusic}}", '<div class="s-mod-item s-mod-music s-mod-undraggable" id="s_moditem_{{=value.id}}" data-id="{{=value.id}}" data-imgname="{{=value.imgname}}" data-name="{{=value.name}}"{{ if(value.name == "音乐"&&!it.showMusic){ }} style="display:none;"{{ } }}>', '<div class="s-mod-icon">', "</div>", '<div class="s-mod-title">', "{{=value.name}}", "</div>", "</div>", "{{?}}", "{{~}}", '<div class="noremove-tips">', '<p>亲，就剩我老哥一个了，不能再删了~可以尝试点击右下角“<a class="tips-hide" href="javascript:void(0)">隐藏卡片</a>”收起全部内容。</p>', '<b class="close-icon" title="关闭"></b>', "</div>", '<div class="drag-tips">', '<p>拖动可以排序<a class="i" href="javascript:void(0)">我知道了</a></p>', "<b></b>", "</div>", "</div>", "</div>", '<div class="s-cardsetting-right">', "<h3>未订阅频道</h3>", '<div class="s-cardsetting-content">', "{{~it.unselected :value:index}}", '{{? (value.name!="音乐")}}', '<div class="s-mod-item" id="s_moditem_{{=value.id}}" data-id="{{=value.id}}" data-imgname="{{=value.imgname}}" data-name="{{=value.name}}"{{ if(value.name == "音乐"&&!it.showMusic){ }} style="display:none;"{{ } }}>', '<div class="s-mod-icon">', "</div>", '<div class="s-mod-title">', "{{=value.name}}", "</div>", "</div>", "{{?? it.showMusic}}", '<div class="s-mod-item s-mod-music s-mod-undraggable" id="s_moditem_{{=value.id}}" data-id="{{=value.id}}" data-imgname="{{=value.imgname}}" data-name="{{=value.name}}"{{ if(value.name == "音乐"&&!it.showMusic){ }} style="display:none;"{{ } }}>', '<div class="s-mod-icon">', "</div>", '<div class="s-mod-title">', "{{=value.name}}", "</div>", "</div>", "{{?}}", "{{~}}", "</div>", "</div>", "</div>", '<div class="s-cardsetting-set-wrapper">', '<div class="s-cardsetting-set clearfix">', "{{? it.expand}}", "{{~it.expand :value:index}}", "{{? value.tipsunknown}}", '<span class="scene-recomm-unknown"></span>', "{{?}}", '<a href="#" onclick="return false;"  class="hide-mods {{=value.otherClassName}}"  hidefocus><span class="{{=value.borderClass}} {{=value.reviewCheck}}" id="{{=value.myId}}" data-attr="{{=value.tips}}"></span><span>{{=value.description}}</span></a>', "{{~}}", '<a href="#" onclick="return false;" class="hide-mods" id="s_hide_allmods" hidefocus=""><span class="bg"></span><span>隐藏卡片</span></a>', "{{?}}", "</div>", "</div>", "</div>"].join("")), "var-init"),
    TIPS = cc11001100_hook("TIPS", '<div class="s-mod-tips">', "var-init"),
    TIPS_ADDTEXT = cc11001100_hook("TIPS_ADDTEXT", "", "var-init"),
    TIPS_REMOVETEXT = cc11001100_hook("TIPS_REMOVETEXT", "拖动到这里可以取消订阅", "var-init"),
    ITEM_HOVER_CLASS = cc11001100_hook("ITEM_HOVER_CLASS", "mod-hover", "var-init"),
    EXPAND_CLASS = cc11001100_hook("EXPAND_CLASS", "hide-mods", "var-init"),
    EXPAND_CLASS_QUERY = cc11001100_hook("EXPAND_CLASS_QUERY", "." + EXPAND_CLASS, "var-init"),
    ITEM_CLASS = cc11001100_hook("ITEM_CLASS", "s-mod-item", "var-init"),
    ITEM_CLASS_QUERY = cc11001100_hook("ITEM_CLASS_QUERY", "." + ITEM_CLASS, "var-init"),
    ITEM_LEFTCLASS_QUERY = cc11001100_hook("ITEM_LEFTCLASS_QUERY", ".s-cardsetting-left .s-cardsetting-content", "var-init"),
    ITEM_RIGHTCLASS_QUERY = cc11001100_hook("ITEM_RIGHTCLASS_QUERY", ".s-cardsetting-right .s-cardsetting-content", "var-init"),
    Draggselect = cc11001100_hook("Draggselect", require("superman:superuijs/component/draggselect"), "var-init"),
    UserAttr = cc11001100_hook("UserAttr", require("superman:common/user_attr"), "var-init"),
    Dialog = cc11001100_hook("Dialog", require("superman:superuijs/component/dialog"), "var-init"),
    componentLog = cc11001100_hook("componentLog", require("superman:superuijs/component"), "var-init"),
    CANREMOVE = cc11001100_hook("CANREMOVE", true, "var-init"),
    FromDrag = cc11001100_hook("FromDrag", false, "var-init"),
    cards = cc11001100_hook("cards", require("skeleton/card_collection"), "var-init"),
    URLS = cc11001100_hook("URLS", {
      mod: cc11001100_hook("mod", s_domain.baseuri + "/pcweb/submit/mancardmod", "object-key-init"),
      menu: cc11001100_hook("menu", s_domain.baseuri + "/pcweb/submit/mancardmenu", "object-key-init")
    }, "var-init"),
    musicId;
  var _dragItem = cc11001100_hook("_dragItem", null, "var-init");
  function Cardsetting() {
    this.initialize();
  }
  Cardsetting.prototype = cc11001100_hook("Cardsetting.prototype", {
    constructor: cc11001100_hook("constructor", Cardsetting, "object-key-init"),
    initialize: function () {
      this.main = cc11001100_hook("this.main", $("#s_main"), "assign");
      this.textarea = cc11001100_hook("this.textarea", $("#s_menus_textarea"), "assign");
      this.addedcache = cc11001100_hook("this.addedcache", [], "assign");
      if (this.textarea.length) {
        this.selected = cc11001100_hook("this.selected", [], "assign");
        this.unselected = cc11001100_hook("this.unselected", [], "assign");
        this.cache = cc11001100_hook("this.cache", $.parseJSON(this.textarea.val()), "assign");
        this.render();
      }
      this.__datas = cc11001100_hook("this.__datas", [], "assign");
    },
    renderTips: function () {
      var tips,
        self = cc11001100_hook("self", this, "var-init");
      self.dialog.body.on("click", ".scene-recomm-unknown", function () {
        if (!tips) {
          F.use("superman:superuijs/component/tips", function (Tips) {
            var unknown = cc11001100_hook("unknown", $(".scene-recomm-unknown", self.dialog.body), "var-init");
            tips = cc11001100_hook("tips", new Tips({
              componentWrap: cc11001100_hook("componentWrap", self.dialog.body, "object-key-init"),
              target: cc11001100_hook("target", unknown, "object-key-init"),
              identity: cc11001100_hook("identity", "scene-recommend", "object-key-init"),
              content: cc11001100_hook("content", ['<div class="scene-recommend-content">', '<div class="scene-recommend-content">', "<h2>情景推荐模式：</h2>", '<p class="title">即当您登录百度首页时，页面会优先切换到您此时可能感兴趣的内容。</p>', "<p>例：您习惯看各种资讯，一大早打开电脑，会优先给您推荐新闻；闲暇时会给您切换至视频卡片供您舒缓神经。</p>", '<p class="last s-opacity-border4-top">如若您不喜欢，取消勾选框中的√即可，感谢您的使用~</p>', "</div>"].join(""), "object-key-init"),
              align: cc11001100_hook("align", "center", "object-key-init"),
              arrowLeft: cc11001100_hook("arrowLeft", "right", "object-key-init"),
              autoShow: cc11001100_hook("autoShow", false, "object-key-init"),
              hasClose: cc11001100_hook("hasClose", false, "object-key-init"),
              width: cc11001100_hook("width", 388, "object-key-init"),
              theme: cc11001100_hook("theme", "scene-recommend", "object-key-init")
            }), "assign");
          });
        }
        tips.show();
      });
    },
    render: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        expand = cc11001100_hook("expand", [], "var-init");
      var myItem = cc11001100_hook("myItem", null, "var-init");
      F.each(self.cache.data, function (item) {
        if (+item.id === 100) {
          myItem = cc11001100_hook("myItem", item, "assign");
        }
        if (+item.ismenu === 1) {
          if (+item.state === 1) {
            if (+item.id === 3) {
              self.selected.unshift(item);
              if (!window.s_session.audioModernizr) {
                musicId = cc11001100_hook("musicId", item.id, "assign");
              }
            } else {
              self.selected.push(item);
            }
          } else {
            self.unselected.push(item);
          }
        }
      });
      if (s_session.strategy_hit === 2) {
        expand.push({
          otherClassName: cc11001100_hook("otherClassName", "content-mod", "object-key-init"),
          borderClass: cc11001100_hook("borderClass", "choice-border", "object-key-init"),
          tips: cc11001100_hook("tips", "mouseScrollGuide", "object-key-init"),
          myId: cc11001100_hook("myId", "mouseScroll_mod", "object-key-init"),
          description: cc11001100_hook("description", "滚轮切换卡片", "object-key-init"),
          reviewCheck: cc11001100_hook("reviewCheck", s_session.userTips["mouseScrollGuide"] ? "checked" : "", "object-key-init")
        });
      }
      expand.push({
        otherClassName: cc11001100_hook("otherClassName", "content-mod", "object-key-init"),
        borderClass: cc11001100_hook("borderClass", "choice-border", "object-key-init"),
        tips: cc11001100_hook("tips", "conRecommendTip", "object-key-init"),
        myId: cc11001100_hook("myId", "conRecommend_mod", "object-key-init"),
        description: cc11001100_hook("description", "情景推荐", "object-key-init"),
        tipsunknown: cc11001100_hook("tipsunknown", true, "object-key-init"),
        reviewCheck: cc11001100_hook("reviewCheck", s_session.userTips["conRecommendTip"] ? "checked" : "", "object-key-init")
      });
      self.expand = cc11001100_hook("self.expand", expand, "assign");
    },
    init: function () {
      var self = cc11001100_hook("self", this, "var-init");
      dialog = cc11001100_hook("dialog", self.dialog, "assign");
      dialog.body.on("mouseenter mouseleave", ITEM_CLASS_QUERY, function (event) {
        var target = cc11001100_hook("target", $(event.target).closest(ITEM_CLASS_QUERY), "var-init");
        target[event.type == "mouseenter" ? "addClass" : "removeClass"](ITEM_HOVER_CLASS);
      });
      self.bindDrag();
      dialog.on("onHide", function (cur) {
        $("#s_main").removeClass("sui-cardsetting-main");
        s_session.skeleton_stopanimated = cc11001100_hook("s_session.skeleton_stopanimated", false, "assign");
        var items = cc11001100_hook("items", self.getItems(), "var-init"),
          data = cc11001100_hook("data", {}, "var-init");
        ctx.fire("hideSet", items);
        self.dialog.log("hide");
      });
      self.bindEvent();
    },
    bindEvent: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        iKonwNode = cc11001100_hook("iKonwNode", self.dialog.body.find(".drag-tips"), "var-init"),
        hideNode = cc11001100_hook("hideNode", self.dialog.body.find(".tips-hide"), "var-init"),
        closeTipsNode = cc11001100_hook("closeTipsNode", self.dialog.body.find(".close-icon"), "var-init");
      iKonwNode.on("click", function () {
        F.use("common/user_attr", function (e) {
          e.setAttr("settingDragTips", false);
          iKonwNode.css("display", "none");
        });
      });
      hideNode.on("click", function (e) {
        self.hideMain();
        e.stopPropagation();
      });
      $(document).on("mousedown", function (e) {
        if ($(e.target).hasClass("menu-icon")) {
          return;
        }
        self.hide();
        FromDrag = cc11001100_hook("FromDrag", false, "assign");
      });
      closeTipsNode.on("click", function (e) {
        self.dialog.body.find(ITEM_LEFTCLASS_QUERY).find(".noremove-tips").css("display", "none");
      });
      ctx.listen("superman:skeleton/presenter", "overCenter", function (data) {
        if (!!data.over) {
          self.hide();
        }
      });
      ctx.listen("superman:skeleton/card_collection", "showTopMenu", function (data) {
        if (!data.show) {
          self.hide();
        }
      });
      $(window).on("scroll", function () {});
    },
    save: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        packed = cc11001100_hook("packed", self.packed, "var-init");
      setTimeout(function () {
        ctx.fire("modOperate", packed);
      }, 100);
    },
    pack: function (data) {
      var self = cc11001100_hook("self", this, "var-init"),
        ids,
        item = cc11001100_hook("item", data.dragItem, "var-init");
      self.packed = cc11001100_hook("self.packed", {
        ismenu: cc11001100_hook("ismenu", 1, "object-key-init"),
        cmd: cc11001100_hook("cmd", data.type == "added" ? "add" : data.type == "remove" ? "del" : "sort", "object-key-init")
      }, "assign");
      ids = cc11001100_hook("ids", self.getIDS(), "assign");
      self.packed.ids = cc11001100_hook("self.packed.ids", ids.ids, "assign");
      self.packed.names = cc11001100_hook("self.packed.names", ids.names, "assign");
      if (item) {
        self.packed.id = cc11001100_hook("self.packed.id", item.attr("data-id"), "assign");
        self.packed.name = cc11001100_hook("self.packed.name", item.attr("data-name"), "assign");
      }
      self.save();
    },
    getIDS: function () {
      var ids = cc11001100_hook("ids", {
          ids: cc11001100_hook("ids", [], "object-key-init"),
          names: cc11001100_hook("names", [], "object-key-init")
        }, "var-init"),
        select = cc11001100_hook("select", this.draggselect.selected, "var-init"),
        drags = cc11001100_hook("drags", select.drags, "var-init"),
        cache = cc11001100_hook("cache", select.cache, "var-init");
      F.each(cache, function (item) {
        var drag = cc11001100_hook("drag", drags.eq(item), "var-init"),
          dataid = cc11001100_hook("dataid", drag.attr("data-id"), "var-init"),
          name = cc11001100_hook("name", drag.attr("data-name"), "var-init");
        ids.ids.push(dataid);
        ids.names.push(name);
      });
      return ids;
    },
    getItems: function () {
      var items = cc11001100_hook("items", [], "var-init"),
        ids = cc11001100_hook("ids", [], "var-init"),
        select = cc11001100_hook("select", this.draggselect.selected, "var-init"),
        drags = cc11001100_hook("drags", select.drags, "var-init"),
        cache = cc11001100_hook("cache", select.cache, "var-init");
      F.each(cache, function (item) {
        var drag = cc11001100_hook("drag", drags.eq(item), "var-init"),
          dataid = cc11001100_hook("dataid", drag.attr("data-id"), "var-init"),
          name = cc11001100_hook("name", drag.attr("data-name"), "var-init");
        ids.push(dataid);
        items.push({
          name: cc11001100_hook("name", name, "object-key-init"),
          id: cc11001100_hook("id", dataid, "object-key-init")
        });
      });
      return {
        ids: cc11001100_hook("ids", ids, "object-key-init"),
        items: cc11001100_hook("items", items, "object-key-init")
      };
    },
    tips: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        current,
        target,
        draggselect = cc11001100_hook("draggselect", self.draggselect, "var-init");
      current = cc11001100_hook("current", draggselect.selected, "assign");
      target = cc11001100_hook("target", draggselect.unselected, "assign");
      if (!current.tipsmessage) {
        current.tipsmessage = cc11001100_hook("current.tipsmessage", $(TIPS).html(TIPS_REMOVETEXT).appendTo(current.wrap), "assign");
      }
      if (!target.tipsmessage) {
        target.tipsmessage = cc11001100_hook("target.tipsmessage", $(TIPS).html(TIPS_ADDTEXT).appendTo(target.wrap), "assign");
      }
      if (current.total == 0) {
        target.tipsmessage.show();
        current.tipsmessage.hide();
      } else {
        target.tipsmessage.hide();
        if (target.total == 0) {
          target.tipsmessage.hide();
          current.tipsmessage.show();
        } else {
          current.tipsmessage.hide();
        }
      }
      target.tipsmessage.hide();
    },
    cacheAdded: function (data) {
      var self = cc11001100_hook("self", this, "var-init"),
        index,
        id,
        cache = cc11001100_hook("cache", this.addedcache, "var-init");
      if (data.dragItem) {
        id = cc11001100_hook("id", data.dragItem.attr("data-id"), "assign");
        index = cc11001100_hook("index", $.inArray(id, cache), "assign");
        if (index > -1) {
          cache.splice(index, 1);
        }
        if (data.type == "added") {
          cache.push(id);
        }
      }
    },
    bindDrag: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        dialog = cc11001100_hook("dialog", self.dialog, "var-init"),
        leftHave;
      if (dialog.body.find(ITEM_LEFTCLASS_QUERY).width() > 530) {
        self.bugtotal = cc11001100_hook("self.bugtotal", self.bugtotal || 0, "assign");
        if (self.bugtotal++ < 100) {
          return setTimeout(function () {
            self.bindDrag();
          }, 200);
        }
      }
      self.draggselect = cc11001100_hook("self.draggselect", new Draggselect({
        identity: cc11001100_hook("identity", "cardsetting", "object-key-init"),
        containment: cc11001100_hook("containment", dialog.body, "object-key-init"),
        selected: cc11001100_hook("selected", dialog.body.find(ITEM_LEFTCLASS_QUERY), "object-key-init"),
        unselected: cc11001100_hook("unselected", dialog.body.find(ITEM_RIGHTCLASS_QUERY), "object-key-init"),
        dragsort: cc11001100_hook("dragsort", ITEM_CLASS_QUERY, "object-key-init"),
        cansort: cc11001100_hook("cansort", false, "object-key-init"),
        afterAnimateTime: cc11001100_hook("afterAnimateTime", 100, "object-key-init")
      }), "assign");
      self.draggselect.on("onBeforeSelect", function (data) {
        _dragItem = cc11001100_hook("_dragItem", data.dragItem, "assign");
        _dragItem.css("zoom", "0");
        var parent = cc11001100_hook("parent", data.dragItem.parent().parent(), "var-init");
        self.dialog.body.find(".drag-tips").css("display", "none");
        if (data.dragItem) {
          data.dragItem.removeClass(ITEM_HOVER_CLASS);
          if (_dragItem.text() === "音乐") {
            $(".sui-draggsort-holder").addClass("lock");
            self.draggselect.selected.__options.cansort = cc11001100_hook("self.draggselect.selected.__options.cansort", false, "assign");
          }
        }
      });
      self.draggselect.on("onAfterSelect", function (data) {
        setTimeout(function () {
          self.resort();
        }, self.draggselect.selected.__options.afterAnimateTime + 50);
        self.draggselect.selected.__options.cansort = cc11001100_hook("self.draggselect.selected.__options.cansort", true, "assign");
        if (_dragItem) {
          setTimeout(function () {
            _dragItem.css("zoom", "1");
            _dragItem = cc11001100_hook("_dragItem", null, "assign");
          }, 50);
        }
        $(".sui-draggsort-holder").removeClass("lock");
      });
      self.draggselect.on("onBeforeSelectSwap", function () {
        self.dialog.body.find(".drag-tips").css("display", "none");
        self.draggselect.selected.parentoffset = cc11001100_hook("self.draggselect.selected.parentoffset", $(".s-cardsetting-left .s-cardsetting-content").offset(), "assign");
        self.draggselect.unselected.parentoffset = cc11001100_hook("self.draggselect.unselected.parentoffset", $(".s-cardsetting-right .s-cardsetting-content").offset(), "assign");
      });
      self.draggselect.on("onSelectSwap", function (data) {
        data.dragItem && data.dragItem.removeClass("mod-hover");
        if (data.dragItem && $.isIE) {
          data.dragItem.removeClass("mod-hover");
          setTimeout(function () {}, 100);
        }
        self.checkLeave();
        switch (data.type) {
          case "added":
            cmd = cc11001100_hook("cmd", "add", "assign");
            break;
          case "remove":
            cmd = cc11001100_hook("cmd", "del", "assign");
            var item = cc11001100_hook("item", data.dragItem, "var-init"),
              img,
              src;
            self.cacheAdded(data);
            if (item && item.length) {
              if (data.type == "remove") {
                self.tips(true);
              } else {
                self.tips();
              }
              item.removeClass(ITEM_HOVER_CLASS);
            }
            break;
          case "noremove":
            self.dialog.body.find(".drag-tips").hide();
            break;
          case "switch":
            cmd = cc11001100_hook("cmd", "sort", "assign");
            break;
        }
        if (!_dragItem) {
          self.resort();
        }
        self.pack(data);
        if (s_session.userTips.firstMahattan) {
          F.use("superman:common/user_attr", function (userAttr) {
            userAttr.setAttr("firstMahattan", false);
          });
        }
        $.ajaxpost(URLS.mod, {
          cmd: cc11001100_hook("cmd", self.packed.cmd, "object-key-init"),
          id: cc11001100_hook("id", data.dragItem ? data.dragItem.attr("data-id") : undefined, "object-key-init"),
          ids: cc11001100_hook("ids", self.getModIds(self.packed.ids), "object-key-init")
        }, function (response) {});
        var ids = cc11001100_hook("ids", cards.getMenuIDS(), "var-init");
        var newIds = cc11001100_hook("newIds", self.getItems().ids, "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < ids.length; i++) {
          var node = cc11001100_hook("node", cards.get(ids[i]).getMyMen(), "var-init");
          if (node.hasClass("current") && $.inArray(ids[i], newIds) == -1) {
            $.ajaxpost(URLS.menu, {
              id: cc11001100_hook("id", newIds[0], "object-key-init")
            }, function (response) {});
          }
        }
      });
      self.draggselect.on("onAfterSelect", function (data) {
        FromDrag = cc11001100_hook("FromDrag", true, "assign");
        self.checkLeave();
      });
      self.draggselect.on("onResizeHeight", function (data) {});
      self.draggselect.on("beforeMoving", function () {
        dialog.body.find(ITEM_LEFTCLASS_QUERY).find(".noremove-tips").css("display", "none");
      });
      self.bindExpand();
      self.renderTips();
      self.tips(true);
      self.checkLeave();
    },
    checkLeave: function () {
      var self = cc11001100_hook("self", this, "var-init");
      leftHave = cc11001100_hook("leftHave", self.dialog.body.find(ITEM_LEFTCLASS_QUERY).find(ITEM_CLASS_QUERY).length, "assign");
      CANREMOVE = cc11001100_hook("CANREMOVE", leftHave == 1 ? false : true, "assign");
    },
    bindExpand: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        dialog = cc11001100_hook("dialog", self.dialog, "var-init");
      dialog.body.on("click", function (event) {
        var target = cc11001100_hook("target", $(event.target).closest(EXPAND_CLASS_QUERY), "var-init"),
          span,
          expand,
          checked;
        if (target.length) {
          span = cc11001100_hook("span", target.find("span").eq(0), "assign");
          if (expand = cc11001100_hook("expand", span.attr("data-attr"), "assign")) {
            checked = cc11001100_hook("checked", span.toggleClass("checked").hasClass("checked"), "assign");
            UserAttr.setAttr(expand, checked);
            self.draggselect.log(expand, "checked=" + checked);
          } else {
            self.draggselect.log("hidemain");
            self.hideMain();
          }
          return false;
        }
      });
    },
    hideMain: function (onlyhide) {
      if (!onlyhide) {
        this.dialog.hide();
      }
      ctx.fire("hideMain");
    },
    show: function (data) {
      var self = cc11001100_hook("self", this, "var-init"),
        width;
      self.current = cc11001100_hook("self.current", data.current, "assign");
      if (self.cache) {
        if (!self.dialog) {
          $("#s_main").addClass("sui-cardsetting-main");
          self.dialog = cc11001100_hook("self.dialog", new Dialog({
            identity: cc11001100_hook("identity", "cardsetting", "object-key-init"),
            width: cc11001100_hook("width", width = cc11001100_hook("width", self.main.width(), "assign"), "object-key-init"),
            content: cc11001100_hook("content", DotCardCompile({
              expand: cc11001100_hook("expand", self.expand, "object-key-init"),
              unselected: cc11001100_hook("unselected", self.unselected, "object-key-init"),
              selected: cc11001100_hook("selected", self.selected, "object-key-init"),
              showMusic: cc11001100_hook("showMusic", window.s_session.audioModernizr, "object-key-init")
            }), "object-key-init"),
            position: function () {
              return {
                top: cc11001100_hook("top", "36px", "object-key-init"),
                width: cc11001100_hook("width", "895px", "object-key-init"),
                left: cc11001100_hook("left", "0px", "object-key-init")
              };
            },
            theme: cc11001100_hook("theme", "cardsetting", "object-key-init"),
            autoShow: cc11001100_hook("autoShow", false, "object-key-init"),
            hasMask: cc11001100_hook("hasMask", false, "object-key-init"),
            hasClose: cc11001100_hook("hasClose", false, "object-key-init"),
            componentWrap: cc11001100_hook("componentWrap", $("#s_main"), "object-key-init"),
            hackToTop: cc11001100_hook("hackToTop", false, "object-key-init")
          }), "assign");
          self.dialog.on("onShow", function () {
            $("#s_main").addClass("sui-cardsetting-main");
            s_session.skeleton_stopanimated = cc11001100_hook("s_session.skeleton_stopanimated", true, "assign");
            if (!self.binded) {
              setTimeout(function () {
                self.init(self.binded = cc11001100_hook("self.binded", true, "assign"));
              }, 100);
            }
          });
        }
        if (!s_session.userTips.settingDragTips || self.selected.length == 0) {
          self.dialog.body.find(".drag-tips").css("display", "none");
        }
        self.dialog.show();
        self.beforeShow();
        if ($.isIE6) {
          $(".sui-dialog-cardsetting .sui-dialog-body").show();
        } else {
          if (true) {
            $(".sui-dialog-cardsetting .sui-dialog-body").css({
              display: cc11001100_hook("display", "block", "object-key-init")
            });
            $(".sui-dialog-cardsetting").animate({
              height: cc11001100_hook("height", "186px", "object-key-init")
            }, 200);
          } else {}
        }
        ctx.fire("showSet");
      }
      self.dialog.hasshow = cc11001100_hook("self.dialog.hasshow", true, "assign");
      $(".sui-dialog-body").on("click", function (e) {
        e.stopPropagation();
      });
      self.dialog.body.on("mousedown", function (e) {
        e.stopPropagation();
      });
      F.use("common/user_attr", function (e) {
        e.setAttr("settingDragTips", false);
      });
    },
    hide: function () {
      var self = cc11001100_hook("self", this, "var-init");
      if (self.isShow()) {
        if ($.isIE6) {
          $(".sui-dialog-cardsetting .sui-dialog-body").hide();
          self.dialog.hide();
        } else {
          $(".sui-dialog-cardsetting").animate({
            height: cc11001100_hook("height", "0px", "object-key-init")
          }, 200, function () {
            $(".sui-dialog-cardsetting .sui-dialog-body").css({
              display: cc11001100_hook("display", "none", "object-key-init")
            });
            self.dialog.hide();
          });
        }
      }
    },
    isShow: function () {
      if ($(".sui-dialog-cardsetting .sui-dialog-body").length == 0 || $(".sui-dialog-cardsetting .sui-dialog-body").css("display") == "none") {
        return false;
      } else {
        return true;
      }
    },
    beforeShow: function () {
      var self = cc11001100_hook("self", this, "var-init"),
        topWrapper = cc11001100_hook("topWrapper", $("#s_top_wrap"), "var-init"),
        settingNode = cc11001100_hook("settingNode", $(".sui-dialog-cardsetting"), "var-init");
      if (topWrapper.find("#s_menu_gurd").length > 0) {
        if ($.isIE6) {
          settingNode.css("position", "absolute");
          settingNode.css("top", $(window).scrollTop() - $("#s_main").offset().top + 110 + "px");
        } else {
          settingNode.css("position", "fixed");
          settingNode.css("top", "110px");
          settingNode.css("left", $("#s_main").offset().left);
        }
      } else {
        settingNode.css("position", "absolute");
        settingNode.css("top", "36px");
      }
    },
    resort: function () {
      var cache = cc11001100_hook("cache", this.draggselect.selected.cache, "var-init");
      var musicPosition = cc11001100_hook("musicPosition", parseInt($(".s-cardsetting-left .s-mod-music:last").attr("data-daraggsort"), 10), "var-init");
      if (!isNaN(musicPosition)) {
        var position;
        for (var index = cc11001100_hook("index", 0, "var-init"), length = cc11001100_hook("length", cache.length, "var-init"); index < length; index++) {
          if (musicPosition === cache[index] && index !== 0) {
            cache.splice(index, 1);
            cache.unshift(musicPosition);
            this.draggselect.selected.sort(false, true);
            break;
          }
        }
      }
    },
    getModIds: function (ids) {
      var ids = cc11001100_hook("ids", ids, "var-init");
      if (musicId !== undefined && !($.inArray(ids, musicId) > -1)) {
        ids.unshift(musicId);
      }
      return ids.join(",");
    }
  }, "assign");
  return new (F.inherit(Cardsetting, Emitter))();
});
F.module("superman:subscribe/parabola", function (require, exports, ctx) {
  (function () {
    var lastTime = cc11001100_hook("lastTime", 0, "var-init");
    var vendors = cc11001100_hook("vendors", ["webkit", "moz"], "var-init");
    for (var x = cc11001100_hook("x", 0, "var-init"); x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = cc11001100_hook("window.requestAnimationFrame", window[vendors[x] + "RequestAnimationFrame"], "assign");
      window.cancelAnimationFrame = cc11001100_hook("window.cancelAnimationFrame", window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"], "assign");
    }
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = cc11001100_hook("window.requestAnimationFrame", function (callback, element) {
        var currTime = cc11001100_hook("currTime", new Date().getTime(), "var-init");
        var timeToCall = cc11001100_hook("timeToCall", Math.max(0, 16.7 - (currTime - lastTime)), "var-init");
        var id = cc11001100_hook("id", window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall), "var-init");
        lastTime = cc11001100_hook("lastTime", currTime + timeToCall, "assign");
        return id;
      }, "assign");
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = cc11001100_hook("window.cancelAnimationFrame", function (id) {
        clearTimeout(id);
      }, "assign");
    }
  })();
  var defaults = cc11001100_hook("defaults", {
    speed: cc11001100_hook("speed", 166.67, "object-key-init"),
    curvature: cc11001100_hook("curvature", .001, "object-key-init"),
    progress: function () {},
    complete: function () {
      callback && callback();
    }
  }, "var-init");
  var element, target, callback;
  var params = cc11001100_hook("params", {}, "var-init"),
    options = cc11001100_hook("options", options || {}, "var-init");
  for (var key in defaults) {
    params[key] = cc11001100_hook("params[key]", options[key] || defaults[key], "assign");
  }
  exports = cc11001100_hook("exports", {
    mark: function () {
      return this;
    },
    position: function () {
      return this;
    },
    move: function () {
      return this;
    },
    init: function () {
      return this;
    }
  }, "assign");
  var moveStyle = cc11001100_hook("moveStyle", "margin", "var-init"),
    testDiv = cc11001100_hook("testDiv", document.createElement("div"), "var-init");
  if ("oninput" in testDiv) {
    ["", "ms", "webkit"].forEach(function (prefix) {
      var transform = cc11001100_hook("transform", prefix + (prefix ? "T" : "t") + "ransform", "var-init");
      if (transform in testDiv.style) {
        moveStyle = cc11001100_hook("moveStyle", transform, "assign");
      }
    });
  }
  var a = cc11001100_hook("a", params.curvature, "var-init"),
    b = cc11001100_hook("b", 0, "var-init"),
    c = cc11001100_hook("c", 0, "var-init");
  var flagMove = cc11001100_hook("flagMove", true, "var-init");
  var rectElement = cc11001100_hook("rectElement", {}, "var-init"),
    rectTarget = cc11001100_hook("rectTarget", {}, "var-init");
  var centerElement = cc11001100_hook("centerElement", {}, "var-init"),
    centerTarget = cc11001100_hook("centerTarget", {}, "var-init");
  var coordElement = cc11001100_hook("coordElement", {}, "var-init"),
    coordTarget = cc11001100_hook("coordTarget", {}, "var-init");
  exports.mark = cc11001100_hook("exports.mark", function () {
    if (flagMove == false) return this;
    if (typeof coordElement.x == "undefined") this.position();
    element.setAttribute("data-center", [coordElement.x, coordElement.y].join());
    target.setAttribute("data-center", [coordTarget.x, coordTarget.y].join());
    return this;
  }, "assign");
  exports.position = cc11001100_hook("exports.position", function () {
    if (flagMove == false) return this;
    var scrollLeft = cc11001100_hook("scrollLeft", document.documentElement.scrollLeft || document.body.scrollLeft, "var-init"),
      scrollTop = cc11001100_hook("scrollTop", document.documentElement.scrollTop || document.body.scrollTop, "var-init");
    if (moveStyle == "margin") {
      element.style.marginLeft = cc11001100_hook("element.style.marginLeft", element.style.marginTop = cc11001100_hook("element.style.marginTop", "0px", "assign"), "assign");
    } else {
      element.style[moveStyle] = cc11001100_hook("element.style[moveStyle]", "translate(0, 0)", "assign");
    }
    rectElement = cc11001100_hook("rectElement", element.getBoundingClientRect(), "assign");
    rectTarget = cc11001100_hook("rectTarget", target.getBoundingClientRect(), "assign");
    centerElement = cc11001100_hook("centerElement", {
      x: cc11001100_hook("x", rectElement.left + (rectElement.right - rectElement.left) / 2 + scrollLeft, "object-key-init"),
      y: cc11001100_hook("y", rectElement.top + (rectElement.bottom - rectElement.top) / 2 + scrollTop, "object-key-init")
    }, "assign");
    centerTarget = cc11001100_hook("centerTarget", {
      x: cc11001100_hook("x", rectTarget.left + (rectTarget.right - rectTarget.left) / 2 + scrollLeft, "object-key-init"),
      y: cc11001100_hook("y", rectTarget.top + (rectTarget.bottom - rectTarget.top) / 2 + scrollTop, "object-key-init")
    }, "assign");
    coordElement = cc11001100_hook("coordElement", {
      x: cc11001100_hook("x", 0, "object-key-init"),
      y: cc11001100_hook("y", 0, "object-key-init")
    }, "assign");
    coordTarget = cc11001100_hook("coordTarget", {
      x: cc11001100_hook("x", -1 * (centerElement.x - centerTarget.x), "object-key-init"),
      y: cc11001100_hook("y", -1 * (centerElement.y - centerTarget.y), "object-key-init")
    }, "assign");
    b = cc11001100_hook("b", (coordTarget.y - a * coordTarget.x * coordTarget.x) / coordTarget.x, "assign");
    return this;
  }, "assign");
  exports.move = cc11001100_hook("exports.move", function () {
    if (flagMove == false) return this;
    var startx = cc11001100_hook("startx", 0, "var-init"),
      rate = cc11001100_hook("rate", coordTarget.x > 0 ? 1 : -1, "var-init");
    var step = function () {
      var tangent = cc11001100_hook("tangent", 2 * a * startx + b, "var-init");
      startx = cc11001100_hook("startx", startx + rate * Math.sqrt(params.speed / (tangent * tangent + 1)), "assign");
      if (rate == 1 && startx > coordTarget.x || rate == -1 && startx < coordTarget.x) {
        startx = cc11001100_hook("startx", coordTarget.x, "assign");
      }
      var x = cc11001100_hook("x", startx, "var-init"),
        y = cc11001100_hook("y", a * x * x + b * x, "var-init");
      element.setAttribute("data-center", [Math.round(x), Math.round(y)].join());
      if (moveStyle == "margin") {
        element.style.marginLeft = cc11001100_hook("element.style.marginLeft", x + "px", "assign");
        element.style.marginTop = cc11001100_hook("element.style.marginTop", y + "px", "assign");
      } else {
        element.style[moveStyle] = cc11001100_hook("element.style[moveStyle]", "translate(" + [x + "px", y + "px"].join() + ")", "assign");
      }
      if (startx !== coordTarget.x) {
        params.progress(x, y);
        window.requestAnimationFrame(step);
      } else {
        params.complete();
        flagMove = cc11001100_hook("flagMove", true, "assign");
      }
    };
    window.requestAnimationFrame(step);
    flagMove = cc11001100_hook("flagMove", false, "assign");
    return this;
  }, "assign");
  exports.init = cc11001100_hook("exports.init", function (el, tar, cb) {
    element = cc11001100_hook("element", el, "assign");
    target = cc11001100_hook("target", tar, "assign");
    callback = cc11001100_hook("callback", cb, "assign");
    this.position().mark().move();
  }, "assign");
  return exports;
});
F.module("superman:subscribe/subscribe", function (require, exports, ctx) {
  var cardCollection = cc11001100_hook("cardCollection", require("superman:skeleton/card_collection"), "var-init");
  var SubDom = cc11001100_hook("SubDom", ["s_ctner_contents"], "var-init"),
    isSubscribe = cc11001100_hook("isSubscribe", false, "var-init"),
    actItem,
    aniStarNode = cc11001100_hook("aniStarNode", $('<div class="sub-anistar"><b></b></div>'), "var-init"),
    aniPicNode = cc11001100_hook("aniPicNode", $('<div class="sub-anipic">                            <div class="sub-ie-mask"></div>                        </div>'), "var-init"),
    aniStarNodes = cc11001100_hook("aniStarNodes", [], "var-init"),
    aniAddNode = cc11001100_hook("aniAddNode", $('<div class="sub-aniadd"></div>'), "var-init"),
    aniStarAddNode = cc11001100_hook("aniStarAddNode", $('<div class="sub-anistaradd"></div>'), "var-init"),
    bodyNode = cc11001100_hook("bodyNode", $("#head"), "var-init"),
    submitURL = cc11001100_hook("submitURL", s_domain.baseuri + "/subscribe/submit/manoperation ", "var-init"),
    DATA_HOOK = cc11001100_hook("DATA_HOOK", "data-subscribe", "var-init"),
    DATA_RID = cc11001100_hook("DATA_RID", "data-rid", "var-init"),
    DATA_SUBPARAM = cc11001100_hook("DATA_SUBPARAM", "data-subparam", "var-init"),
    count = cc11001100_hook("count", 0, "var-init");
  var Tips = cc11001100_hook("Tips", require("superman:superuijs/component/tips"), "var-init");
  var bindEvent = function (item) {
    $("#" + item).on("mouseenter mouseleave", "[" + DATA_HOOK + "]", function (e) {
      var t = cc11001100_hook("t", e.target, "var-init");
      if (e.type === "mouseenter") {
        window.debugenter = cc11001100_hook("window.debugenter", function () {
          var curSubNode;
          if ((curSubNode = cc11001100_hook("curSubNode", $(this).find(".subscribe"), "assign"))[0]) {
            curSubNode.show();
            if ($(this).attr(DATA_HOOK) == "1") {
              _resetSubNode("1", curSubNode);
            } else {
              _resetSubNode("0", curSubNode);
            }
            return;
          }
          var subNode = cc11001100_hook("subNode", $('<div class="subscribe" data-click="LOG_BTN_SUB"><div class="sub"><em class="sub-bg"></em><b class="sub-star"></b><span class="sub-txt" style="display:none">已关注</span></div></div>'), "var-init");
          if ($(this).attr(DATA_HOOK) == "1") {
            _resetSubNode("1", subNode);
          } else {
            _resetSubNode("0", subNode);
          }
          if ($(this).find(".sub-contaniner").length > 0) {
            $(this).find(".sub-contaniner").append(subNode);
          } else {
            $(this).append(subNode);
          }
          if ($.isIE6) {
            subNode.css("zoom", "1");
          }
        }, "assign");
        window.debugenter.call(this);
      } else {
        if (e.target != $(this).find(".subscribe").find(".sub-star")[0]) {
          $(this).find(".subscribe").css("zoom", "0").detach();
        }
      }
    }).on("click", ".subscribe", function (e) {
      onSubscribe($(this), $(this));
      e.stopPropagation();
    });
  };
  var _resetSubNode = function (st, subNode) {
    var subClassNode = cc11001100_hook("subClassNode", subNode.children(), "var-init");
    if (st == "1") {
      subClassNode.removeClass("unsub");
      subClassNode.addClass("sub");
      subNode.attr("data-click", "LOG_BTN_UNSUB");
      subNode.find(".sub-txt").text("已关注");
      if (s_session.curmod == "20") {
        subNode.attr("title", "已关注,点击取消");
      }
    } else if (st == "0") {
      subClassNode.removeClass("sub");
      subClassNode.addClass("unsub");
      subNode.attr("data-click", "LOG_BTN_SUB");
      subNode.find(".sub-txt").text("关注");
      if (s_session.curmod == "20") {
        subNode.attr("title", "添加到关注");
      }
    }
  };
  var onSubscribe = function (t, subNode) {
    var node = cc11001100_hook("node", t, "var-init"),
      actItem = cc11001100_hook("actItem", node.parents("[" + DATA_HOOK + "]"), "var-init"),
      subData = cc11001100_hook("subData", actItem.attr(DATA_HOOK), "var-init"),
      rId = cc11001100_hook("rId", actItem.attr(DATA_RID), "var-init"),
      subParam = cc11001100_hook("subParam", actItem.attr(DATA_SUBPARAM), "var-init"),
      actName,
      defaultParam = cc11001100_hook("defaultParam", {
        id: cc11001100_hook("id", rId, "object-key-init")
      }, "var-init");
    if (subParam) {
      var regx = cc11001100_hook("regx", /([^:]+):([^;]+);/gi, "var-init"),
        regResult;
      while (regResult = cc11001100_hook("regResult", regx.exec(subParam), "assign")) {
        defaultParam[regResult[1]] = cc11001100_hook("defaultParam[regResult[1]]", regResult[2], "assign");
      }
    }
    if (subData == "1") {
      actName = cc11001100_hook("actName", "del", "assign");
      defaultParam.cmd = cc11001100_hook("defaultParam.cmd", actName, "assign");
      subDel(actItem, defaultParam, function () {
        actItem.attr(DATA_HOOK, "0");
        _resetSubNode("0", subNode);
      });
    } else {
      actName = cc11001100_hook("actName", "add", "assign");
      defaultParam.cmd = cc11001100_hook("defaultParam.cmd", actName, "assign");
      subAdd(actItem, defaultParam, function () {
        actItem.attr(DATA_HOOK, "1");
        _resetSubNode("1", subNode);
      });
    }
    actItem.parents(".s-xmancard").attr("data-subChange", 1);
  };
  function subAdd(actItem, param, cb) {
    cc11001100_hook("actItem", actItem, "function-parameter");
    cc11001100_hook("param", param, "function-parameter");
    cc11001100_hook("cb", cb, "function-parameter");
    var pos = cc11001100_hook("pos", actItem.offset(), "var-init");
    var toPos = cc11001100_hook("toPos", $("#s_menu_mine .mine-icon").offset(), "var-init");
    var a = cc11001100_hook("a", aniPicNode.clone(), "var-init");
    a.attr("class", "sub-anipic sub-anipic-" + s_session.curmod);
    var imgSrc = cc11001100_hook("imgSrc", actItem.closest("[" + DATA_RID + "]").find("img").attr("src"), "var-init");
    var reqParam = cc11001100_hook("reqParam", {
      tabid: cc11001100_hook("tabid", window.s_session.curmod, "object-key-init"),
      url: cc11001100_hook("url", actItem.find("a").attr("href") || "", "object-key-init"),
      name: cc11001100_hook("name", actItem.find("a").attr("title") || "", "object-key-init"),
      from: cc11001100_hook("from", window.s_session.curmod, "object-key-init")
    }, "var-init");
    $.extend(reqParam, param);
    $.ajaxpost(submitURL, reqParam, function (response) {
      var result = cc11001100_hook("result", response.errNo, "var-init");
      if (result == "0" || result == "6004") {
        cb && cb();
        ctx.fire("refresh", {
          tabid: cc11001100_hook("tabid", reqParam.tabid, "object-key-init"),
          param: cc11001100_hook("param", reqParam, "object-key-init"),
          response: cc11001100_hook("response", response, "object-key-init"),
          actItem: cc11001100_hook("actItem", actItem, "object-key-init")
        });
        if ($.isIE6) {
          return;
        }
        if ($.isIE && $.browser.ie < 9 && s_session.userSkinOpacity > 20) {
          a.css({
            filter: cc11001100_hook("filter", "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src='" + imgSrc + "')", "object-key-init")
          });
        } else {
          a.css({
            "background-image": cc11001100_hook("background-image", "url(" + imgSrc + ")", "object-key-init")
          });
          a.css({
            filter: cc11001100_hook("filter", "none", "object-key-init")
          });
        }
        setTimeout(function () {
          toPos = cc11001100_hook("toPos", $("#s_menu_mine .mine-icon").offset(), "assign");
          var tolerance = cc11001100_hook("tolerance", -parseInt($("#s_menu_gurd").css("margin-top"), 10), "var-init");
          a.animate({
            left: cc11001100_hook("left", toPos.left - 10 + "px", "object-key-init"),
            top: cc11001100_hook("top", toPos.top - 7 + tolerance + "px", "object-key-init")
          }, 1e3, function () {
            a.fadeOut(function () {
              a.remove();
            });
            var startNode = cc11001100_hook("startNode", aniStarAddNode.clone(), "var-init");
            startNode.css({
              left: cc11001100_hook("left", toPos.left, "object-key-init"),
              top: cc11001100_hook("top", toPos.top, "object-key-init")
            });
            bodyNode.append(startNode);
            startNode.show();
            startNode.animate({
              top: cc11001100_hook("top", toPos.top - 40, "object-key-init"),
              opacity: cc11001100_hook("opacity", "0", "object-key-init")
            }, 2e3, function (e) {
              startNode.remove();
            });
          });
        }, 0);
        a.css({
          left: cc11001100_hook("left", pos.left + 45, "object-key-init"),
          top: cc11001100_hook("top", pos.top, "object-key-init")
        });
        bodyNode.append(a);
        if (cardCollection.options("menuStatus") == "2" || cardCollection.options("menuStatus") == "1") {
          F.call("superman:skeleton/presenter", "forceMenu");
        }
      } else if (result == "501") {
        ctx.fire("showExceedTips", {
          tabid: cc11001100_hook("tabid", reqParam.tabid, "object-key-init")
        });
      } else {}
    });
  }
  function subDel(actItem, param, cb) {
    cc11001100_hook("actItem", actItem, "function-parameter");
    cc11001100_hook("param", param, "function-parameter");
    cc11001100_hook("cb", cb, "function-parameter");
    var reqParam = cc11001100_hook("reqParam", {
      tabid: cc11001100_hook("tabid", window.s_session.curmod, "object-key-init"),
      url: cc11001100_hook("url", actItem.find("a").attr("href") || "", "object-key-init"),
      name: cc11001100_hook("name", actItem.find("a").attr("title") || "", "object-key-init"),
      from: cc11001100_hook("from", window.s_session.curmod, "object-key-init")
    }, "var-init");
    $.extend(reqParam, param);
    $.ajaxpost(submitURL, reqParam, function (response) {
      var result = cc11001100_hook("result", response.errNo, "var-init");
      if (result == "0") {
        cb && cb();
        setTimeout(function () {
          ctx.fire("refresh", {
            tabid: cc11001100_hook("tabid", reqParam.tabid, "object-key-init"),
            param: cc11001100_hook("param", reqParam, "object-key-init"),
            response: cc11001100_hook("response", response, "object-key-init"),
            actItem: cc11001100_hook("actItem", actItem, "object-key-init")
          });
        }, 1e3);
      } else {}
    });
  }
  exports.init = cc11001100_hook("exports.init", function () {
    $.each(SubDom, function (i, e) {
      bindEvent(e);
    });
  }, "assign");
  exports.subAdd = cc11001100_hook("exports.subAdd", subAdd, "assign");
  exports.subDel = cc11001100_hook("exports.subDel", subDel, "assign");
});
F.call("superman:subscribe/subscribe", "init");