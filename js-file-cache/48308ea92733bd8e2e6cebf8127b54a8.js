!function () {
  var t = cc11001100_hook("t", bds && bds.comm && bds.comm.samNewBox, "var-init"),
    e = cc11001100_hook("e", navigator.platform.toUpperCase(), "var-init"),
    a = cc11001100_hook("a", "//graph.baidu.com/upload", "var-init"),
    n = cc11001100_hook("n", -1 !== e.indexOf("MAC"), "var-init"),
    s = cc11001100_hook("s", $("#kw"), "var-init"),
    o = cc11001100_hook("o", $("#form").parent(), "var-init"),
    i = cc11001100_hook("i", t ? "https://pss.bdstatic.com/r/www/cache/static/protocol/https/soutu/css/soutu_new_sam_3fa2aae.css" : "https://pss.bdstatic.com/r/www/cache/static/protocol/https/soutu/css/soutu_new2_dd3a84f.css", "var-init"),
    r = cc11001100_hook("r", 10485760, "var-init"),
    u = cc11001100_hook("u", 102400, "var-init"),
    l = cc11001100_hook("l", {
      1: cc11001100_hook(1, "抱歉，您上传的文件不是图片格式", "object-key-init"),
      2: cc11001100_hook(2, "图片上传失败", "object-key-init"),
      3: cc11001100_hook(3, "抱歉，您上传的文件太大", "object-key-init")
    }, "var-init"),
    c = cc11001100_hook("c", null, "var-init"),
    d = cc11001100_hook("d", {
      getEnv: function () {
        if (bds && bds.comm) {
          if (bds.comm.ishome && bds.comm.newindex) return "newindex";
          if (bds.comm.ishome) return "index";
          if (/^\/imgsearch/.test(location.pathname)) return "imgresult";
        }
        return "result";
      },
      supportVoice: function () {
        return window.URL = cc11001100_hook("window.URL", window.URL || window.webkitURL, "assign"), navigator.getUserMedia = cc11001100_hook("navigator.getUserMedia", navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, "assign"), window.AudioContext = cc11001100_hook("window.AudioContext", window.AudioContext || window.webkitAudioContext, "assign"), navigator.getUserMedia && window.URL && window.AudioContext && window.Worker && swfobject.hasFlashPlayerVersion("11.1.0") ? !0 : !1;
      },
      parseQuery: function () {
        for (var t = cc11001100_hook("t", window.location.search.substr(1), "var-init"), e = cc11001100_hook("e", {}, "var-init"), a = cc11001100_hook("a", t.substring(t.indexOf("?") + 1, t.length).split("&"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < a.length; n++) {
          var s = cc11001100_hook("s", a[n], "var-init"),
            o = cc11001100_hook("o", s.split("="), "var-init");
          o[0] && (e[o[0]] = cc11001100_hook("e[o[0]]", decodeURIComponent(o[1]), "assign"));
        }
        return e;
      },
      getQuery: function (t) {
        var e = cc11001100_hook("e", new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"), "var-init"),
          a = cc11001100_hook("a", window.location.search.substr(1).match(e), "var-init");
        return null != a ? a[2] : null;
      },
      isURL: function (t) {
        return /^(((http[s]?:\/\/)|(ftp:\/\/))?([\w-]+\.)+(com|edu|gov|int|mil|net|org|biz|info|pro|name|museum|coop|aero|xxx|idv|al|dz|af|ar|ae|aw|om|az|eg|et|ie|ee|ad|ao|ai|ag|at|au|mo|bb|pg|bs|pk|py|ps|bh|pa|br|by|bm|bg|mp|bj|be|is|pr|ba|pl|bo|bz|bw|bt|bf|bi|bv|kp|gq|dk|de|tl|tp|tg|dm|do|ru|ec|er|fr|fo|pf|gf|tf|va|ph|fj|fi|cv|fk|gm|cg|cd|co|cr|gg|gd|gl|ge|cu|gp|gu|gy|kz|ht|kr|nl|an|hm|hn|ki|dj|kg|gn|gw|ca|gh|ga|kh|cz|zw|cm|qa|ky|km|ci|kw|cc|hr|ke|ck|lv|ls|la|lb|lt|lr|ly|li|re|lu|rw|ro|mg|im|mv|mt|mw|my|ml|mk|mh|mq|yt|mu|mr|us|um|as|vi|mn|ms|bd|pe|fm|mm|md|ma|mc|mz|mx|nr|np|ni|ne|ng|nu|no|nf|na|za|zq|aq|gs|eu|pw|pn|pt|jp|se|ch|sv|ws|yu|sl|sn|cy|sc|sa|cx|st|sh|kn|lc|sm|pm|vc|lk|sk|si|sj|sz|sd|sr|sb|so|tj|tw|th|tz|to|tc|tt|tn|tv|tr|tm|tk|wf|vu|gt|ve|bn|ug|ua|uy|uz|es|eh|gr|hk|sg|nc|nz|hu|sy|jm|am|ac|ye|iq|ir|il|it|in|id|uk|vg|io|jo|vn|zm|je|td|gi|cl|cf|cn)(:\d+)?(\/[^\s]*)?)$/.test(t);
      },
      blobtoBase64: function (t, e) {
        var a = cc11001100_hook("a", new FileReader(), "var-init");
        a.onload = cc11001100_hook("a.onload", function () {
          e(this.result);
        }, "assign"), a.onerror = cc11001100_hook("a.onerror", function () {
          e();
        }, "assign"), a.readAsDataURL(t);
      },
      compressImg: function (t) {
        function e(t, e) {
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("e", e, "function-parameter");
          var a = cc11001100_hook("a", new FileReader(), "var-init");
          a.onload = cc11001100_hook("a.onload", function () {
            var t = cc11001100_hook("t", this.result.split("base64,")[1], "var-init");
            e(t, this.result);
          }, "assign"), a.onerror = cc11001100_hook("a.onerror", function () {
            e();
          }, "assign"), a.readAsDataURL(t);
        }
        function a(t, e, a) {
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("a", a, "function-parameter");
          e = cc11001100_hook("e", e || "", "assign"), a = cc11001100_hook("a", a || 512, "assign");
          for (var n = cc11001100_hook("n", atob(t), "var-init"), s = cc11001100_hook("s", [], "var-init"), o = cc11001100_hook("o", n.length, "var-init"), i = cc11001100_hook("i", 0, "var-init"); o > i; i += cc11001100_hook("i", a, "assign")) {
            for (var r = cc11001100_hook("r", n.slice(i, i + a), "var-init"), u = cc11001100_hook("u", new Array(r.length), "var-init"), l = cc11001100_hook("l", 0, "var-init"); l < r.length; l++) u[l] = cc11001100_hook("u[l]", r.charCodeAt(l), "assign");
            var c = cc11001100_hook("c", new Uint8Array(u), "var-init");
            s.push(c);
          }
          return new Blob(s, {
            type: cc11001100_hook("type", e, "object-key-init")
          });
        }
        function n(t) {
          cc11001100_hook("t", t, "function-parameter");
          var e = cc11001100_hook("e", t.width, "var-init"),
            n = cc11001100_hook("n", t.height, "var-init");
          if (e > 800 || n > 800) {
            var s = cc11001100_hook("s", Math.max(e / 800, n / 800), "var-init");
            e /= cc11001100_hook("e", s, "assign"), n /= cc11001100_hook("n", s, "assign");
          }
          var o = cc11001100_hook("o", document.createElement("canvas"), "var-init");
          o.width = cc11001100_hook("o.width", e, "assign"), o.height = cc11001100_hook("o.height", n, "assign");
          var i = cc11001100_hook("i", o.getContext("2d"), "var-init");
          i.fillRect(0, 0, o.width, o.height), i.drawImage(t, 0, 0, e, n);
          var r = cc11001100_hook("r", o.toDataURL("image/jpeg", 1), "var-init");
          return a(r.replace(/^.*?,/, ""), "image/jpeg");
        }
        var s = cc11001100_hook("s", new $.Deferred(), "var-init"),
          o = cc11001100_hook("o", t.size, "var-init");
        return e(t, function (e, a) {
          var i = cc11001100_hook("i", new Image(), "var-init");
          i.onload = cc11001100_hook("i.onload", function () {
            return u > o && i.width < 800 && i.height < 800 ? void s.resolve(t) : (t = cc11001100_hook("t", n(i), "assign"), void s.resolve(t));
          }, "assign"), i.src = cc11001100_hook("i.src", a, "assign");
        }), s.promise();
      },
      sendLog: function (t) {
        var e = cc11001100_hook("e", location.href.match(/sign=(\w{32})\b/), "var-init"),
          a = cc11001100_hook("a", e && e[1] || "", "var-init");
        t.sign = cc11001100_hook("t.sign", a, "assign"), t.fm = cc11001100_hook("t.fm", "inlo", "assign"), t.rsv_imageclick && (t.rsv_imageclick = cc11001100_hook("t.rsv_imageclick", d.getEnv() + "_" + t.rsv_imageclick, "assign")), window.soutu_mixsearch && (t.rsv_imagemix = cc11001100_hook("t.rsv_imagemix", 1, "assign")), window.ns_c(t);
      },
      loadScript: function (t) {
        var e = cc11001100_hook("e", document.createElement("script"), "var-init");
        e.async = cc11001100_hook("e.async", !0, "assign"), e.setAttribute("charset", "UTF-8"), e.src = cc11001100_hook("e.src", t, "assign"), document.getElementsByTagName("head")[0].appendChild(e);
      }
    }, "var-init"),
    p = cc11001100_hook("p", {
      graphIconHtml: function () {
        return t ? '<span class="sam_search_soutu c-icon" style="position: absolute;right: 14px;top: 50%;margin-top: -12px;font-size: 24px;height: 24px;line-height: 24px;width: 24px;color: #4E6EF2;z-index: 5;">&#xe68d;</span>' : '<span class="soutu-btn"></span>';
      },
      hoverTipHtml: function () {
        return t ? '<span class="sam_search_soutu_hover" style="display: none;">图片搜索</span>' : '<span class="soutu-hover-tip" style="display: none;">按图片搜索</span>';
      },
      wrapHtml: function () {
        var e = cc11001100_hook("e", '<span class="upload-text upload-text-new">选择文件</span>', "var-init"),
          a = cc11001100_hook("a", t ? '<span class="soutu-url-btn soutu-url-btn-new sam_url_btn_new"><span class="sam_btn_text">百度一下</span><i class="btn_wrap_radius"></i></span>' : '<span class="soutu-url-btn soutu-url-btn-new">百度一下</span>', "var-init"),
          n = cc11001100_hook("n", '<a class="soutu-close c-icon soutu-close-new" href="javascript:void(0);">&#xe610;</a>', "var-init"),
          s = cc11001100_hook("s", t ? "sam_url_wrap " : "", "var-init"),
          o = cc11001100_hook("o", t ? "sam_url_kw " : "", "var-init"),
          i = cc11001100_hook("i", '<div class="soutu-layer new-pmd"><div class="soutu-url"><span class="' + s + 'soutu-url-wrap"><input id="soutu-url-kw" class="' + o + 'soutu-url-kw" maxlength="255" autocomplete="off" placeholder="在此处粘贴图片网址"/></span><span class="soutu-url-btn soutu-url-btn-old"><i class="soutu-icon soutu-url-btn-icon"></i></span>' + a + '<span class="soutu-url-error">请输入正确的图片网址</span></div><div class="soutu-state-normal"><div class="soutu-drop"><span class="soutu-drop-tip">拖拽图片到这里</span><i class="soutu-icon soutu-drop-icon"></i></div><div class="upload-wrap"><input type="file" class="upload-pic" value="上传图片"/><i class="soutu-icon upload-icon"></i><span class="upload-text upload-text-old">本地上传图片</span>' + e + '</div></div><a class="soutu-icon soutu-close soutu-close-old" href="javascript:void(0);"></a>' + n + "</div>", "var-init");
        return i;
      },
      waitingHtml: function () {
        return ['<div class="soutu-state-waiting soutu-waiting">', "<p>正在加载图片...</p>", "</div>"].join("");
      },
      errorHtml: function (t, e) {
        var a = cc11001100_hook("a", 1 === e || 3 === e, "var-init"),
          n = cc11001100_hook("n", a ? '<p class="soutu-error-tip">仅支持10M以下jpg，jpeg，png，bmp，gif格式图片</p>' : "", "var-init"),
          s = cc11001100_hook("s", a ? " soutu-error-hastip" : "", "var-init");
        return '<div class="soutu-state-error soutu-error' + s + '"><p class="soutu-error-main"><i class="c-icon c-gap-right-small soutu-error-icon">&#xe622;</i>' + t + '，请<a href="javascript:void(0)" class="soutu-error-upload">重新上传</a></p>' + n + "</div>";
      },
      newTabTipHtml: function (t) {
        return ['<div class="soutu-state-newtabtip soutu-newtab">', '<div class="soutu-newtab-cont">', '<div class="soutu-newtab-img" style="background-image:url(' + t.imgUrl + ')">', "</div>", '<div class="soutu-newtab-text">', "<p>" + t.text + "</p>", "<span></span>", "</div>", "</div>", '<a class="soutu-newtab-link" href="' + t.url + '" target="_blank">查看搜索结果</a>', "</div>"].join("");
      }
    }, "var-init"),
    g = cc11001100_hook("g", {
      init: function () {
        if ("imgresult" === d.getEnv()) {
          var t = cc11001100_hook("t", $("#form"), "var-init"),
            e = cc11001100_hook("e", t.find(".soutu-input-image"), "var-init");
          if (e.length) {
            var a = cc11001100_hook("a", !0, "var-init"),
              n = cc11001100_hook("n", d.parseQuery(), "var-init"),
              o = cc11001100_hook("o", t.find("input[type=hidden]"), "var-init"),
              i = cc11001100_hook("i", o.clone(), "var-init");
            t.attr("action", "/imgsearch"), o.remove(), delete n.wd, t.append('<input type="hidden" name="sign" value="' + n.sign + '">');
            var r = function () {
              e.remove(), e.off("click.soutu"), e.removeClass("soutu-input-image-active"), s.off(".soutu"), s.attr("placeholder", "").removeClass("soutu-input"), a = cc11001100_hook("a", !1, "assign"), t.find("input[type=hidden]").remove(), t.append(i), t.attr("action", "/s");
            };
            e.on("click.soutu", function () {
              r(), d.sendLog({
                rsv_imageclick: cc11001100_hook("rsv_imageclick", "del_thumb_by_click", "object-key-init")
              });
            }), s.on("keydown", function (t) {
              var a = cc11001100_hook("a", s.val(), "var-init");
              return 8 !== t.which || a.length ? void (a.length <= 1 && e.hasClass("soutu-input-image-active") && e.removeClass("soutu-input-image-active")) : void (e.hasClass("soutu-input-image-active") ? (r(), d.sendLog({
                rsv_imageclick: cc11001100_hook("rsv_imageclick", "del_thumb_by_return", "object-key-init")
              })) : e.addClass("soutu-input-image-active"));
            }), s.on("focus.soutu", function () {
              e.show();
            }), s.on("click", function () {
              d.sendLog(a ? {
                rsv_imageclick: cc11001100_hook("rsv_imageclick", "click_input_thumb", "object-key-init")
              } : {
                rsv_imageclick: cc11001100_hook("rsv_imageclick", "click_input", "object-key-init")
              });
            }), s.on("blur.soutu", function () {
              e.removeClass("soutu-input-image-active");
            }), $("#su").on("click.soutu", function () {
              var t = cc11001100_hook("t", s.val(), "var-init");
              return a && !t.length ? (d.sendLog({
                rsv_imageclick: cc11001100_hook("rsv_imageclick", "search_only_thumb", "object-key-init")
              }), location.href = cc11001100_hook("location.href", "/imgsearch?" + $.param({
                sign: cc11001100_hook("sign", n.sign, "object-key-init"),
                wd: cc11001100_hook("wd", n.sign.substr(5, 16), "object-key-init")
              }), "assign"), !1) : void 0;
            }), t.on("submit", function () {
              d.sendLog(a ? {
                rsv_imageclick: cc11001100_hook("rsv_imageclick", "search_image_and_text", "object-key-init")
              } : {
                rsv_imageclick: cc11001100_hook("rsv_imageclick", "search_only_text", "object-key-init")
              });
            });
          }
        }
      }
    }, "var-init"),
    v = cc11001100_hook("v", {
      init: function () {
        var e = cc11001100_hook("e", this, "var-init");
        e.canDrop = cc11001100_hook("e.canDrop", "ondrop" in document.body, "assign");
        var a = cc11001100_hook("a", $('<link rel="stylesheet" href="' + i + '" type="text/css" data-for="result"/>'), "var-init");
        "newindex" === d.getEnv() ? a.insertBefore(o.parent()) : a.appendTo("head"), e.$graphIcon = cc11001100_hook("e.$graphIcon", $(p.graphIconHtml()).prependTo(s.parent()), "assign"), $("#form").addClass("has-soutu"), e.$hoverTip = cc11001100_hook("e.$hoverTip", $(p.hoverTipHtml()).appendTo(s.parent()), "assign"), $("#form").addClass("has-soutu"), o.addClass(n ? "soutu-env-mac" : "soutu-env-nomac").addClass("soutu-env-" + d.getEnv()), t && $(".sam_search_soutu").length && $(".sam_search_soutu").css("display", "block"), e.state = cc11001100_hook("e.state", "init", "assign"), g.init(), e.listenIcon();
      },
      listenIcon: function () {
        var t = cc11001100_hook("t", "newindex" === d.getEnv() ? 5 : 16, "var-init"),
          e = cc11001100_hook("e", this, "var-init");
        e.$graphIcon.on("click", function (a) {
          $(".search-keyboard-toast").hide(), a.stopPropagation(), a.preventDefault(), bds && bds.util && bds.util.increaseService && bds.util.increaseService.canInvoke(t) ? bds.util.increaseService.execInvoke(t) : (e.show(), e.log({
            rsv_imageclick: cc11001100_hook("rsv_imageclick", "camerabtn", "object-key-init")
          }), e.antispam());
        }), e.$graphIcon.hover(function () {
          bds && bds.util && bds.util.increaseService && bds.util.increaseService.isIPad() && bds.util.increaseService.canInvoke(t) || (clearTimeout(c), e.$hoverTip.show());
        }, function () {
          c = cc11001100_hook("c", setTimeout(function () {
            e.$hoverTip.hide();
          }, 200), "assign");
        }), $(document).on("dragstart.soutu", function (t) {
          var e,
            a = cc11001100_hook("a", t.originalEvent.dataTransfer, "var-init"),
            n = cc11001100_hook("n", t.target || t.srcElement, "var-init"),
            s = cc11001100_hook("s", n.nodeName.toLowerCase(), "var-init");
          if ("img" === s) {
            e = cc11001100_hook("e", n.src, "assign");
            try {
              a.setData("text/plain", e);
            } catch (o) {
              a.setData("Text", e);
            }
          } else if ("a" === s) {
            var i = cc11001100_hook("i", $(n).children("img"), "var-init");
            if (i.length) {
              e = cc11001100_hook("e", i[0].src, "assign");
              try {
                a.setData("text/plain", e);
              } catch (o) {
                a.setData("Text", e);
              }
            }
          }
        }), s.on("drop.soutu", function (t) {
          t.originalEvent.dataTransfer && t.originalEvent.dataTransfer.files && t.originalEvent.dataTransfer.files.length && (t.stopPropagation(), t.preventDefault(), e.$graphIcon.trigger("click"), e.handleDrop(t), e.log({
            rsv_imageclick: cc11001100_hook("rsv_imageclick", "iptdrop", "object-key-init")
          }));
        }).on("dragover.soutu", function () {
          var t = cc11001100_hook("t", window.bds && bds.se && bds.se.upn && bds.se.upn.cookieset || [], "var-init"),
            e = cc11001100_hook("e", t[0] && 1 === t[0].v, "var-init");
          return !e;
        }), $(window).one("index_off", function () {
          o.removeClass("soutu-env-newindex"), o.removeClass("soutu-no-skin");
        });
      },
      show: function () {
        var t = cc11001100_hook("t", this, "var-init");
        t.$layer || t.addLayer();
        var e = cc11001100_hook("e", t.$layer, "var-init");
        t.setState("normal"), e.show(), t.$graphIcon.hide(), t.$hoverTip && t.$hoverTip.hide(), $("#form .bdsug").hide(), 1 !== window.pageState || o.hasClass("soutu-env-result") || o.addClass("soutu-env-result"), "newindex" === d.getEnv() && (o.addClass("soutu-env-newindex"), window.s_session && !!s_session.userSkinName != !1 ? e.removeClass("soutu-no-skin") : e.addClass("soutu-no-skin")), o.addClass("soutu-env-new");
      },
      close: function () {
        var t = cc11001100_hook("t", this, "var-init");
        t.$layer.hide(), t.$graphIcon.show(), t.setState("normal"), t.$urlErrorTip.hide(), t.$urlInput.val("");
      },
      addLayer: function () {
        var t = cc11001100_hook("t", this, "var-init"),
          e = cc11001100_hook("e", t.$layer = cc11001100_hook("t.$layer", $(p.wrapHtml()).prependTo($("#form")), "assign"), "var-init");
        t.$urlInput = cc11001100_hook("t.$urlInput", e.find("#soutu-url-kw").on("focus", function () {
          e.find(".soutu-url-layer").addClass("focus");
        }).on("blur", function () {
          e.find(".soutu-url-layer").removeClass("focus");
        }), "assign"), "newindex" === d.getEnv() && $(".s-lite").not(".hide-icon").length && e.find(".soutu-url-btn").css("width", "103px"), t.$dropArea = cc11001100_hook("t.$dropArea", e.find(".soutu-drop"), "assign"), t.$urlErrorTip = cc11001100_hook("t.$urlErrorTip", e.find(".soutu-url-error"), "assign"), t.$urlSearchBtn = cc11001100_hook("t.$urlSearchBtn", e.find(".soutu-url-btn"), "assign"), t.panelHidden = cc11001100_hook("t.panelHidden", !1, "assign"), t.listenLayer();
      },
      handleDrop: function (t) {
        var e = cc11001100_hook("e", this, "var-init");
        e.$dropArea.removeClass("drag-over");
        var a;
        if (t.originalEvent.dataTransfer && (a = cc11001100_hook("a", t.originalEvent.dataTransfer.files, "assign")), a && 0 !== a.length) {
          var n = cc11001100_hook("n", a[0], "var-init");
          e.uptype = cc11001100_hook("e.uptype", "drag", "assign"), e.upload(n, "PC_UPLOAD_SEARCH_MOVE");
        } else {
          var s;
          try {
            s = cc11001100_hook("s", t.originalEvent.dataTransfer.getData("text/plain") || t.originalEvent.dataTransfer.getData("text/uri-list"), "assign");
          } catch (o) {
            s = cc11001100_hook("s", t.originalEvent.dataTransfer.getData("Text") || t.originalEvent.dataTransfer.getData("URL"), "assign");
          }
          s ? e.handleURL(s) : e.setState("error");
        }
      },
      listenLayer: function () {
        var t = cc11001100_hook("t", this, "var-init"),
          e = cc11001100_hook("e", t.$layer, "var-init");
        t.$urlInput.on("focus", function () {
          e.find(".soutu-url-panel").addClass("focus");
        }).on("blur", function () {
          e.find(".soutu-url-panel").removeClass("focus");
        }).on("keydown", function (e) {
          var a = cc11001100_hook("a", e.keyCode, "var-init");
          return "none" !== t.$urlErrorTip.css("display") && t.$urlErrorTip.hide(), 13 === a ? (t.handleURL(this.value), e.stopPropagation(), e.preventDefault(), !1) : void 0;
        }), t.$urlSearchBtn.on("click", function () {
          var e = cc11001100_hook("e", t.$urlInput.val(), "var-init");
          t.handleURL(e);
        }), t.$layer.find(".upload-pic").on("change", function () {
          var e = cc11001100_hook("e", this.files[0], "var-init");
          e && (t.uptype = cc11001100_hook("t.uptype", "upload", "assign"), t.upload(e, "PC_UPLOAD_SEARCH_FILE"));
        }), t.$layer.find(".upload-pic").on("click", function () {
          t.log({
            rsv_imageclick: cc11001100_hook("rsv_imageclick", "uploadbtn", "object-key-init")
          });
        }), t.$dropArea.on("dragover", function (e) {
          t.$dropArea.addClass("drag-over"), e.stopPropagation(), e.preventDefault();
        }).on("dragleave", function (e) {
          t.$dropArea.removeClass("drag-over"), e.stopPropagation(), e.preventDefault();
        }).on("drop", function (e) {
          e.stopPropagation(), e.preventDefault(), t.handleDrop(e);
        }), t.$layer.find(".soutu-close").on("click", function () {
          t.close(!0), t.log({
            rsv_imageclick: cc11001100_hook("rsv_imageclick", "close", "object-key-init")
          });
        }), t.$layer.on("click", ".soutu-error-upload", function (e) {
          e.stopPropagation(), e.preventDefault(), t.setState("normal");
        }), $(document).on("click", function (e) {
          var a = cc11001100_hook("a", e.target, "var-init"),
            n = cc11001100_hook("n", !0, "var-init");
          do if (a = cc11001100_hook("a", a.parentNode, "assign"), a === t.$layer[0] || a === t.$graphIcon[0]) {
            n = cc11001100_hook("n", !1, "assign");
            break;
          } while (a.parentNode);
          n && t.close();
        });
      },
      setNormal: function () {
        this.$layer.find(".soutu-state-normal").show();
        var t = cc11001100_hook("t", this.$layer.find(".upload-pic"), "var-init");
        t.val("");
      },
      setWaiting: function () {
        var t = cc11001100_hook("t", this, "var-init");
        t.$layer.append(p.waitingHtml());
        var e = cc11001100_hook("e", [[0, 40], [20, 20], [40, 0]], "var-init"),
          a = cc11001100_hook("a", ["rgb(55,137,250)", "rgb(99,99,99)", "rgb(235,67,70)"], "var-init");
        t.$layer.find(".b").each(function (t, n) {
          var s = cc11001100_hook("s", 0, "var-init");
          $(n).css({
            "background-color": cc11001100_hook("background-color", a[t], "object-key-init")
          }), function o() {
            $(n).animate({
              left: cc11001100_hook("left", e[t][s % 2], "object-key-init")
            }, {
              duration: cc11001100_hook("duration", 800, "object-key-init"),
              easing: cc11001100_hook("easing", "swing", "object-key-init"),
              progress: function (e, o) {
                o >= .5 && $(n).css({
                  "background-color": cc11001100_hook("background-color", a[(s + t) % 3], "object-key-init")
                });
              },
              complete: function () {
                o();
              }
            }), s++;
          }();
        });
      },
      setError: function (t) {
        var e = cc11001100_hook("e", t.msg || l[2], "var-init");
        this.$layer.append(p.errorHtml(e, t.status));
      },
      setNewTabTip: function (t) {
        var e = cc11001100_hook("e", this.$layer.find(".soutu-state-newtabtip"), "var-init");
        e.length && e.remove(), e = cc11001100_hook("e", $(p.newTabTipHtml(t)), "assign"), this.$layer.append(e), d.sendLog({
          rsv_imageclick: cc11001100_hook("rsv_imageclick", "tipForNewTab", "object-key-init")
        });
      },
      setState: function (t, e) {
        var a = cc11001100_hook("a", this, "var-init");
        a.state = cc11001100_hook("a.state", t, "assign"), a.$layer.find(".soutu-state-normal").hide(), a.$layer.find(".soutu-state-error").remove(), a.$layer.find(".soutu-state-waiting").remove(), a.$layer.find(".soutu-state-newtabtip").remove(), a.$urlErrorTip.hide(), t = cc11001100_hook("t", t.charAt(0).toUpperCase() + t.substring(1), "assign"), a["set" + t].apply(a, [e || {}]);
      },
      handleURL: function (t) {
        d.isURL(t) ? (this.$urlInput.val(t), this.setState("normal"), this.$urlErrorTip.hide(), this.uploadUrl(t), this.log({
          rsv_imageclick: cc11001100_hook("rsv_imageclick", "searchurl-success", "object-key-init")
        })) : (this.setState("normal"), this.$urlErrorTip.show(), this.log({
          rsv_imageclick: cc11001100_hook("rsv_imageclick", "searchurl-error", "object-key-init")
        }));
      },
      openResutlPage: function (t) {
        var e = cc11001100_hook("e", this, "var-init"),
          a = cc11001100_hook("a", $("#form").attr("target"), "var-init");
        if ("_blank" === a) {
          var n = cc11001100_hook("n", "图片上传完毕，根据您的搜索习惯，<br/>将打开新窗口展示搜索结果", "var-init"),
            s = cc11001100_hook("s", window.player, "var-init");
          s && s.config && s.config.play.on && (n = cc11001100_hook("n", "您正在听音乐，为了不打扰您继续听音乐，<br/>将打开新窗口查看搜索结果", "assign")), $.isString(e.uploadObj) ? e.setState("newTabTip", {
            text: cc11001100_hook("text", n, "object-key-init"),
            imgUrl: cc11001100_hook("imgUrl", e.uploadObj, "object-key-init"),
            url: cc11001100_hook("url", t, "object-key-init")
          }) : d.blobtoBase64(e.uploadObj, function (a) {
            e.setState("newTabTip", {
              text: cc11001100_hook("text", n, "object-key-init"),
              imgUrl: cc11001100_hook("imgUrl", a, "object-key-init"),
              url: cc11001100_hook("url", t, "object-key-init")
            });
          });
        } else location.href = cc11001100_hook("location.href", t, "assign"), e.close();
      },
      validate: function (t) {
        var e = cc11001100_hook("e", ["jpg", "jpeg", "png", "bmp", "gif", "webp"], "var-init"),
          a = cc11001100_hook("a", t.name.split("."), "var-init"),
          n = cc11001100_hook("n", a.pop().toLowerCase(), "var-init");
        return t.type && n && -1 !== $.inArray(n, e) ? t.size > r ? 3 : 0 : 1;
      },
      doAjax: function (t) {
        var e = cc11001100_hook("e", this, "var-init");
        "waiting" !== this.state && this.setState("waiting"), $.ajax({
          url: cc11001100_hook("url", a, "object-key-init"),
          type: cc11001100_hook("type", "POST", "object-key-init"),
          data: cc11001100_hook("data", t, "object-key-init"),
          processData: cc11001100_hook("processData", !1, "object-key-init"),
          contentType: cc11001100_hook("contentType", !1, "object-key-init"),
          success: function (t) {
            e.uploadComplete(t);
          },
          error: function () {
            e.setState("error");
          },
          always: function () {}
        });
      },
      uploadUrl: function (t) {
        var e = cc11001100_hook("e", this, "var-init");
        e.uploadObj = cc11001100_hook("e.uploadObj", t, "assign"), this.log({
          rsv_imageclick: cc11001100_hook("rsv_imageclick", "uploadurl", "object-key-init")
        }), e.upload(t, "PC_UPLOAD_SEARCH_URL");
      },
      upload: function (t, e) {
        var a = cc11001100_hook("a", this, "var-init"),
          n = cc11001100_hook("n", 0 === window.pageState ? '{"page_from": "searchIndex"}' : ' {"page_from": "searchResult"}', "var-init");
        if ("PC_UPLOAD_SEARCH_URL" !== e) {
          a.uploadObj = cc11001100_hook("a.uploadObj", t, "assign"), a.$urlInput.val("");
          var s = cc11001100_hook("s", a.validate(t), "var-init");
          if (s) return void a.setState("error", {
            msg: cc11001100_hook("msg", l[s], "object-key-init"),
            status: cc11001100_hook("status", s, "object-key-init")
          });
          a.log({
            rsv_imageclick: cc11001100_hook("rsv_imageclick", "uploadfile", "object-key-init")
          });
        }
        a.setState("waiting");
        var o = cc11001100_hook("o", new FormData(), "var-init");
        o.append("image", t), o.append("tn", "pc"), o.append("from", "pc"), o.append("image_source", e), o.append("range", n), o.append("sdkParams", a.shituSdkParams || ""), a.doAjax(o);
      },
      uploadComplete: function (t) {
        var e = cc11001100_hook("e", this, "var-init");
        0 === t.status ? setTimeout(function () {
          window.location.href = cc11001100_hook("window.location.href", t.data.url, "assign");
        }, 30) : e.setState("error");
      },
      antispam: function () {
        var t = cc11001100_hook("t", this, "var-init");
        t.shituSdkParams || (window.__abbaidu_2033_subidgetf = cc11001100_hook("window.__abbaidu_2033_subidgetf", function () {
          return "www_pc";
        }, "assign"), window.__abbaidu_2033_cb = cc11001100_hook("window.__abbaidu_2033_cb", function (e) {
          t.shituSdkParams = cc11001100_hook("t.shituSdkParams", e, "assign");
        }, "assign"), d.loadScript("https://dlswbr.baidu.com/heicha/mw/abclite-2033-s.js"));
      },
      log: cc11001100_hook("log", d.sendLog, "object-key-init")
    }, "var-init");
  v.init(), "function" == typeof define && define("soutu/js/tu", ["require"], function () {
    return v;
  });
}();