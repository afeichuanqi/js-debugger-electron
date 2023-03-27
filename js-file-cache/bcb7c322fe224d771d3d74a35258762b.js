!function (e, n) {
  "function" == typeof define && (define.amd || define.cmd) ? define(function () {
    return n(e);
  }) : n(e, !0);
}(this, function (o, e) {
  if (!o.jWeixin) {
    var n,
      c = cc11001100_hook("c", {
        config: cc11001100_hook("config", "preVerifyJSAPI", "object-key-init"),
        onMenuShareTimeline: cc11001100_hook("onMenuShareTimeline", "menu:share:timeline", "object-key-init"),
        onMenuShareAppMessage: cc11001100_hook("onMenuShareAppMessage", "menu:share:appmessage", "object-key-init"),
        onMenuShareQQ: cc11001100_hook("onMenuShareQQ", "menu:share:qq", "object-key-init"),
        onMenuShareWeibo: cc11001100_hook("onMenuShareWeibo", "menu:share:weiboApp", "object-key-init"),
        onMenuShareQZone: cc11001100_hook("onMenuShareQZone", "menu:share:QZone", "object-key-init"),
        previewImage: cc11001100_hook("previewImage", "imagePreview", "object-key-init"),
        getLocation: cc11001100_hook("getLocation", "geoLocation", "object-key-init"),
        openProductSpecificView: cc11001100_hook("openProductSpecificView", "openProductViewWithPid", "object-key-init"),
        addCard: cc11001100_hook("addCard", "batchAddCard", "object-key-init"),
        openCard: cc11001100_hook("openCard", "batchViewCard", "object-key-init"),
        chooseWXPay: cc11001100_hook("chooseWXPay", "getBrandWCPayRequest", "object-key-init"),
        openEnterpriseRedPacket: cc11001100_hook("openEnterpriseRedPacket", "getRecevieBizHongBaoRequest", "object-key-init"),
        startSearchBeacons: cc11001100_hook("startSearchBeacons", "startMonitoringBeacons", "object-key-init"),
        stopSearchBeacons: cc11001100_hook("stopSearchBeacons", "stopMonitoringBeacons", "object-key-init"),
        onSearchBeacons: cc11001100_hook("onSearchBeacons", "onBeaconsInRange", "object-key-init"),
        consumeAndShareCard: cc11001100_hook("consumeAndShareCard", "consumedShareCard", "object-key-init"),
        openAddress: cc11001100_hook("openAddress", "editAddress", "object-key-init")
      }, "var-init"),
      a = cc11001100_hook("a", function () {
        var e = cc11001100_hook("e", {}, "var-init");
        for (var n in c) e[c[n]] = cc11001100_hook("e[c[n]]", n, "assign");
        return e;
      }(), "var-init"),
      i = cc11001100_hook("i", o.document, "var-init"),
      t = cc11001100_hook("t", i.title, "var-init"),
      r = cc11001100_hook("r", navigator.userAgent.toLowerCase(), "var-init"),
      s = cc11001100_hook("s", navigator.platform.toLowerCase(), "var-init"),
      d = cc11001100_hook("d", !(!s.match("mac") && !s.match("win")), "var-init"),
      u = cc11001100_hook("u", -1 != r.indexOf("wxdebugger"), "var-init"),
      l = cc11001100_hook("l", -1 != r.indexOf("micromessenger"), "var-init"),
      p = cc11001100_hook("p", -1 != r.indexOf("android"), "var-init"),
      f = cc11001100_hook("f", -1 != r.indexOf("iphone") || -1 != r.indexOf("ipad"), "var-init"),
      m = cc11001100_hook("m", (n = cc11001100_hook("n", r.match(/micromessenger\/(\d+\.\d+\.\d+)/) || r.match(/micromessenger\/(\d+\.\d+)/), "assign")) ? n[1] : "", "var-init"),
      g = cc11001100_hook("g", {
        initStartTime: cc11001100_hook("initStartTime", L(), "object-key-init"),
        initEndTime: cc11001100_hook("initEndTime", 0, "object-key-init"),
        preVerifyStartTime: cc11001100_hook("preVerifyStartTime", 0, "object-key-init"),
        preVerifyEndTime: cc11001100_hook("preVerifyEndTime", 0, "object-key-init")
      }, "var-init"),
      h = cc11001100_hook("h", {
        version: cc11001100_hook("version", 1, "object-key-init"),
        appId: cc11001100_hook("appId", "", "object-key-init"),
        initTime: cc11001100_hook("initTime", 0, "object-key-init"),
        preVerifyTime: cc11001100_hook("preVerifyTime", 0, "object-key-init"),
        networkType: cc11001100_hook("networkType", "", "object-key-init"),
        isPreVerifyOk: cc11001100_hook("isPreVerifyOk", 1, "object-key-init"),
        systemType: cc11001100_hook("systemType", f ? 1 : p ? 2 : -1, "object-key-init"),
        clientVersion: cc11001100_hook("clientVersion", m, "object-key-init"),
        url: cc11001100_hook("url", encodeURIComponent(location.href), "object-key-init")
      }, "var-init"),
      v = cc11001100_hook("v", {}, "var-init"),
      S = cc11001100_hook("S", {
        _completes: cc11001100_hook("_completes", [], "object-key-init")
      }, "var-init"),
      y = cc11001100_hook("y", {
        state: cc11001100_hook("state", 0, "object-key-init"),
        data: {}
      }, "var-init");
    O(function () {
      g.initEndTime = cc11001100_hook("g.initEndTime", L(), "assign");
    });
    var I = cc11001100_hook("I", !1, "var-init"),
      _ = cc11001100_hook("_", [], "var-init"),
      w = cc11001100_hook("w", {
        config: function (e) {
          B("config", v = cc11001100_hook("v", e, "assign"));
          var t = cc11001100_hook("t", !1 !== v.check, "var-init");
          O(function () {
            if (t) M(c.config, {
              verifyJsApiList: cc11001100_hook("verifyJsApiList", C(v.jsApiList), "object-key-init"),
              verifyOpenTagList: cc11001100_hook("verifyOpenTagList", C(v.openTagList), "object-key-init")
            }, function () {
              S._complete = cc11001100_hook("S._complete", function (e) {
                g.preVerifyEndTime = cc11001100_hook("g.preVerifyEndTime", L(), "assign"), y.state = cc11001100_hook("y.state", 1, "assign"), y.data = cc11001100_hook("y.data", e, "assign");
              }, "assign"), S.success = cc11001100_hook("S.success", function (e) {
                h.isPreVerifyOk = cc11001100_hook("h.isPreVerifyOk", 0, "assign");
              }, "assign"), S.fail = cc11001100_hook("S.fail", function (e) {
                S._fail ? S._fail(e) : y.state = cc11001100_hook("y.state", -1, "assign");
              }, "assign");
              var t = cc11001100_hook("t", S._completes, "var-init");
              return t.push(function () {
                !function () {
                  if (!(d || u || v.debug || m < "6.0.2" || h.systemType < 0)) {
                    var i = cc11001100_hook("i", new Image(), "var-init");
                    h.appId = cc11001100_hook("h.appId", v.appId, "assign"), h.initTime = cc11001100_hook("h.initTime", g.initEndTime - g.initStartTime, "assign"), h.preVerifyTime = cc11001100_hook("h.preVerifyTime", g.preVerifyEndTime - g.preVerifyStartTime, "assign"), w.getNetworkType({
                      isInnerInvoke: cc11001100_hook("isInnerInvoke", !0, "object-key-init"),
                      success: function (e) {
                        h.networkType = cc11001100_hook("h.networkType", e.networkType, "assign");
                        var n = cc11001100_hook("n", "https://open.weixin.qq.com/sdk/report?v=" + h.version + "&o=" + h.isPreVerifyOk + "&s=" + h.systemType + "&c=" + h.clientVersion + "&a=" + h.appId + "&n=" + h.networkType + "&i=" + h.initTime + "&p=" + h.preVerifyTime + "&u=" + h.url, "var-init");
                        i.src = cc11001100_hook("i.src", n, "assign");
                      }
                    });
                  }
                }();
              }), S.complete = cc11001100_hook("S.complete", function (e) {
                for (var n = cc11001100_hook("n", 0, "var-init"), i = cc11001100_hook("i", t.length, "var-init"); n < i; ++n) t[n]();
                S._completes = cc11001100_hook("S._completes", [], "assign");
              }, "assign"), S;
            }()), g.preVerifyStartTime = cc11001100_hook("g.preVerifyStartTime", L(), "assign");else {
              y.state = cc11001100_hook("y.state", 1, "assign");
              for (var e = cc11001100_hook("e", S._completes, "var-init"), n = cc11001100_hook("n", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); n < i; ++n) e[n]();
              S._completes = cc11001100_hook("S._completes", [], "assign");
            }
          }), w.invoke || (w.invoke = cc11001100_hook("w.invoke", function (e, n, i) {
            o.WeixinJSBridge && WeixinJSBridge.invoke(e, x(n), i);
          }, "assign"), w.on = cc11001100_hook("w.on", function (e, n) {
            o.WeixinJSBridge && WeixinJSBridge.on(e, n);
          }, "assign"));
        },
        ready: function (e) {
          0 != y.state ? e() : (S._completes.push(e), !l && v.debug && e());
        },
        error: function (e) {
          m < "6.0.2" || (-1 == y.state ? e(y.data) : S._fail = cc11001100_hook("S._fail", e, "assign"));
        },
        checkJsApi: function (e) {
          M("checkJsApi", {
            jsApiList: cc11001100_hook("jsApiList", C(e.jsApiList), "object-key-init")
          }, (e._complete = cc11001100_hook("e._complete", function (e) {
            if (p) {
              var n = cc11001100_hook("n", e.checkResult, "var-init");
              n && (e.checkResult = cc11001100_hook("e.checkResult", JSON.parse(n), "assign"));
            }
            e = cc11001100_hook("e", function (e) {
              var n = cc11001100_hook("n", e.checkResult, "var-init");
              for (var i in n) {
                var t = cc11001100_hook("t", a[i], "var-init");
                t && (n[t] = cc11001100_hook("n[t]", n[i], "assign"), delete n[i]);
              }
              return e;
            }(e), "assign");
          }, "assign"), e));
        },
        onMenuShareTimeline: function (e) {
          P(c.onMenuShareTimeline, {
            complete: function () {
              M("shareTimeline", {
                title: cc11001100_hook("title", e.title || t, "object-key-init"),
                desc: cc11001100_hook("desc", e.title || t, "object-key-init"),
                img_url: cc11001100_hook("img_url", e.imgUrl || "", "object-key-init"),
                link: cc11001100_hook("link", e.link || location.href, "object-key-init"),
                type: cc11001100_hook("type", e.type || "link", "object-key-init"),
                data_url: cc11001100_hook("data_url", e.dataUrl || "", "object-key-init")
              }, e);
            }
          }, e);
        },
        onMenuShareAppMessage: function (n) {
          P(c.onMenuShareAppMessage, {
            complete: function (e) {
              "favorite" === e.scene ? M("sendAppMessage", {
                title: cc11001100_hook("title", n.title || t, "object-key-init"),
                desc: cc11001100_hook("desc", n.desc || "", "object-key-init"),
                link: cc11001100_hook("link", n.link || location.href, "object-key-init"),
                img_url: cc11001100_hook("img_url", n.imgUrl || "", "object-key-init"),
                type: cc11001100_hook("type", n.type || "link", "object-key-init"),
                data_url: cc11001100_hook("data_url", n.dataUrl || "", "object-key-init")
              }) : M("sendAppMessage", {
                title: cc11001100_hook("title", n.title || t, "object-key-init"),
                desc: cc11001100_hook("desc", n.desc || "", "object-key-init"),
                link: cc11001100_hook("link", n.link || location.href, "object-key-init"),
                img_url: cc11001100_hook("img_url", n.imgUrl || "", "object-key-init"),
                type: cc11001100_hook("type", n.type || "link", "object-key-init"),
                data_url: cc11001100_hook("data_url", n.dataUrl || "", "object-key-init")
              }, n);
            }
          }, n);
        },
        onMenuShareQQ: function (e) {
          P(c.onMenuShareQQ, {
            complete: function () {
              M("shareQQ", {
                title: cc11001100_hook("title", e.title || t, "object-key-init"),
                desc: cc11001100_hook("desc", e.desc || "", "object-key-init"),
                img_url: cc11001100_hook("img_url", e.imgUrl || "", "object-key-init"),
                link: cc11001100_hook("link", e.link || location.href, "object-key-init")
              }, e);
            }
          }, e);
        },
        onMenuShareWeibo: function (e) {
          P(c.onMenuShareWeibo, {
            complete: function () {
              M("shareWeiboApp", {
                title: cc11001100_hook("title", e.title || t, "object-key-init"),
                desc: cc11001100_hook("desc", e.desc || "", "object-key-init"),
                img_url: cc11001100_hook("img_url", e.imgUrl || "", "object-key-init"),
                link: cc11001100_hook("link", e.link || location.href, "object-key-init")
              }, e);
            }
          }, e);
        },
        onMenuShareQZone: function (e) {
          P(c.onMenuShareQZone, {
            complete: function () {
              M("shareQZone", {
                title: cc11001100_hook("title", e.title || t, "object-key-init"),
                desc: cc11001100_hook("desc", e.desc || "", "object-key-init"),
                img_url: cc11001100_hook("img_url", e.imgUrl || "", "object-key-init"),
                link: cc11001100_hook("link", e.link || location.href, "object-key-init")
              }, e);
            }
          }, e);
        },
        updateTimelineShareData: function (e) {
          M("updateTimelineShareData", {
            title: cc11001100_hook("title", e.title, "object-key-init"),
            link: cc11001100_hook("link", e.link, "object-key-init"),
            imgUrl: cc11001100_hook("imgUrl", e.imgUrl, "object-key-init")
          }, e);
        },
        updateAppMessageShareData: function (e) {
          M("updateAppMessageShareData", {
            title: cc11001100_hook("title", e.title, "object-key-init"),
            desc: cc11001100_hook("desc", e.desc, "object-key-init"),
            link: cc11001100_hook("link", e.link, "object-key-init"),
            imgUrl: cc11001100_hook("imgUrl", e.imgUrl, "object-key-init")
          }, e);
        },
        startRecord: function (e) {
          M("startRecord", {}, e);
        },
        stopRecord: function (e) {
          M("stopRecord", {}, e);
        },
        onVoiceRecordEnd: function (e) {
          P("onVoiceRecordEnd", e);
        },
        playVoice: function (e) {
          M("playVoice", {
            localId: cc11001100_hook("localId", e.localId, "object-key-init")
          }, e);
        },
        pauseVoice: function (e) {
          M("pauseVoice", {
            localId: cc11001100_hook("localId", e.localId, "object-key-init")
          }, e);
        },
        stopVoice: function (e) {
          M("stopVoice", {
            localId: cc11001100_hook("localId", e.localId, "object-key-init")
          }, e);
        },
        onVoicePlayEnd: function (e) {
          P("onVoicePlayEnd", e);
        },
        uploadVoice: function (e) {
          M("uploadVoice", {
            localId: cc11001100_hook("localId", e.localId, "object-key-init"),
            isShowProgressTips: cc11001100_hook("isShowProgressTips", 0 == e.isShowProgressTips ? 0 : 1, "object-key-init")
          }, e);
        },
        downloadVoice: function (e) {
          M("downloadVoice", {
            serverId: cc11001100_hook("serverId", e.serverId, "object-key-init"),
            isShowProgressTips: cc11001100_hook("isShowProgressTips", 0 == e.isShowProgressTips ? 0 : 1, "object-key-init")
          }, e);
        },
        translateVoice: function (e) {
          M("translateVoice", {
            localId: cc11001100_hook("localId", e.localId, "object-key-init"),
            isShowProgressTips: cc11001100_hook("isShowProgressTips", 0 == e.isShowProgressTips ? 0 : 1, "object-key-init")
          }, e);
        },
        chooseImage: function (e) {
          M("chooseImage", {
            scene: cc11001100_hook("scene", "1|2", "object-key-init"),
            count: cc11001100_hook("count", e.count || 9, "object-key-init"),
            sizeType: cc11001100_hook("sizeType", e.sizeType || ["original", "compressed"], "object-key-init"),
            sourceType: cc11001100_hook("sourceType", e.sourceType || ["album", "camera"], "object-key-init")
          }, (e._complete = cc11001100_hook("e._complete", function (e) {
            if (p) {
              var n = cc11001100_hook("n", e.localIds, "var-init");
              try {
                n && (e.localIds = cc11001100_hook("e.localIds", JSON.parse(n), "assign"));
              } catch (e) {}
            }
          }, "assign"), e));
        },
        getLocation: function (e) {},
        previewImage: function (e) {
          M(c.previewImage, {
            current: cc11001100_hook("current", e.current, "object-key-init"),
            urls: cc11001100_hook("urls", e.urls, "object-key-init")
          }, e);
        },
        uploadImage: function (e) {
          M("uploadImage", {
            localId: cc11001100_hook("localId", e.localId, "object-key-init"),
            isShowProgressTips: cc11001100_hook("isShowProgressTips", 0 == e.isShowProgressTips ? 0 : 1, "object-key-init")
          }, e);
        },
        downloadImage: function (e) {
          M("downloadImage", {
            serverId: cc11001100_hook("serverId", e.serverId, "object-key-init"),
            isShowProgressTips: cc11001100_hook("isShowProgressTips", 0 == e.isShowProgressTips ? 0 : 1, "object-key-init")
          }, e);
        },
        getLocalImgData: function (e) {
          !1 === I ? (I = cc11001100_hook("I", !0, "assign"), M("getLocalImgData", {
            localId: cc11001100_hook("localId", e.localId, "object-key-init")
          }, (e._complete = cc11001100_hook("e._complete", function (e) {
            if (I = cc11001100_hook("I", !1, "assign"), 0 < _.length) {
              var n = cc11001100_hook("n", _.shift(), "var-init");
              wx.getLocalImgData(n);
            }
          }, "assign"), e))) : _.push(e);
        },
        getNetworkType: function (e) {
          M("getNetworkType", {}, (e._complete = cc11001100_hook("e._complete", function (e) {
            e = cc11001100_hook("e", function (e) {
              var n = cc11001100_hook("n", e.errMsg, "var-init");
              e.errMsg = cc11001100_hook("e.errMsg", "getNetworkType:ok", "assign");
              var i = cc11001100_hook("i", e.subtype, "var-init");
              if (delete e.subtype, i) e.networkType = cc11001100_hook("e.networkType", i, "assign");else {
                var t = cc11001100_hook("t", n.indexOf(":"), "var-init"),
                  o = cc11001100_hook("o", n.substring(t + 1), "var-init");
                switch (o) {
                  case "wifi":
                  case "edge":
                  case "wwan":
                    e.networkType = cc11001100_hook("e.networkType", o, "assign");
                    break;
                  default:
                    e.errMsg = cc11001100_hook("e.errMsg", "getNetworkType:fail", "assign");
                }
              }
              return e;
            }(e), "assign");
          }, "assign"), e));
        },
        openLocation: function (e) {
          M("openLocation", {
            latitude: cc11001100_hook("latitude", e.latitude, "object-key-init"),
            longitude: cc11001100_hook("longitude", e.longitude, "object-key-init"),
            name: cc11001100_hook("name", e.name || "", "object-key-init"),
            address: cc11001100_hook("address", e.address || "", "object-key-init"),
            scale: cc11001100_hook("scale", e.scale || 28, "object-key-init"),
            infoUrl: cc11001100_hook("infoUrl", e.infoUrl || "", "object-key-init")
          }, e);
        },
        getLocation: function (e) {
          M(c.getLocation, {
            type: cc11001100_hook("type", (e = cc11001100_hook("e", e || {}, "assign")).type || "wgs84", "object-key-init")
          }, (e._complete = cc11001100_hook("e._complete", function (e) {
            delete e.type;
          }, "assign"), e));
        },
        hideOptionMenu: function (e) {
          M("hideOptionMenu", {}, e);
        },
        showOptionMenu: function (e) {
          M("showOptionMenu", {}, e);
        },
        closeWindow: function (e) {
          M("closeWindow", {}, e = cc11001100_hook("e", e || {}, "assign"));
        },
        hideMenuItems: function (e) {
          M("hideMenuItems", {
            menuList: cc11001100_hook("menuList", e.menuList, "object-key-init")
          }, e);
        },
        showMenuItems: function (e) {
          M("showMenuItems", {
            menuList: cc11001100_hook("menuList", e.menuList, "object-key-init")
          }, e);
        },
        hideAllNonBaseMenuItem: function (e) {
          M("hideAllNonBaseMenuItem", {}, e);
        },
        showAllNonBaseMenuItem: function (e) {
          M("showAllNonBaseMenuItem", {}, e);
        },
        scanQRCode: function (e) {
          M("scanQRCode", {
            needResult: cc11001100_hook("needResult", (e = cc11001100_hook("e", e || {}, "assign")).needResult || 0, "object-key-init"),
            scanType: cc11001100_hook("scanType", e.scanType || ["qrCode", "barCode"], "object-key-init")
          }, (e._complete = cc11001100_hook("e._complete", function (e) {
            if (f) {
              var n = cc11001100_hook("n", e.resultStr, "var-init");
              if (n) {
                var i = cc11001100_hook("i", JSON.parse(n), "var-init");
                e.resultStr = cc11001100_hook("e.resultStr", i && i.scan_code && i.scan_code.scan_result, "assign");
              }
            }
          }, "assign"), e));
        },
        openAddress: function (e) {
          M(c.openAddress, {}, (e._complete = cc11001100_hook("e._complete", function (e) {
            e = cc11001100_hook("e", function (e) {
              return e.postalCode = cc11001100_hook("e.postalCode", e.addressPostalCode, "assign"), delete e.addressPostalCode, e.provinceName = cc11001100_hook("e.provinceName", e.proviceFirstStageName, "assign"), delete e.proviceFirstStageName, e.cityName = cc11001100_hook("e.cityName", e.addressCitySecondStageName, "assign"), delete e.addressCitySecondStageName, e.countryName = cc11001100_hook("e.countryName", e.addressCountiesThirdStageName, "assign"), delete e.addressCountiesThirdStageName, e.detailInfo = cc11001100_hook("e.detailInfo", e.addressDetailInfo, "assign"), delete e.addressDetailInfo, e;
            }(e), "assign");
          }, "assign"), e));
        },
        openProductSpecificView: function (e) {
          M(c.openProductSpecificView, {
            pid: cc11001100_hook("pid", e.productId, "object-key-init"),
            view_type: cc11001100_hook("view_type", e.viewType || 0, "object-key-init"),
            ext_info: cc11001100_hook("ext_info", e.extInfo, "object-key-init")
          }, e);
        },
        addCard: function (e) {
          for (var n = cc11001100_hook("n", e.cardList, "var-init"), i = cc11001100_hook("i", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"), o = cc11001100_hook("o", n.length, "var-init"); t < o; ++t) {
            var r = cc11001100_hook("r", n[t], "var-init"),
              a = cc11001100_hook("a", {
                card_id: cc11001100_hook("card_id", r.cardId, "object-key-init"),
                card_ext: cc11001100_hook("card_ext", r.cardExt, "object-key-init")
              }, "var-init");
            i.push(a);
          }
          M(c.addCard, {
            card_list: cc11001100_hook("card_list", i, "object-key-init")
          }, (e._complete = cc11001100_hook("e._complete", function (e) {
            var n = cc11001100_hook("n", e.card_list, "var-init");
            if (n) {
              for (var i = cc11001100_hook("i", 0, "var-init"), t = cc11001100_hook("t", (n = cc11001100_hook("n", JSON.parse(n), "assign")).length, "var-init"); i < t; ++i) {
                var o = cc11001100_hook("o", n[i], "var-init");
                o.cardId = cc11001100_hook("o.cardId", o.card_id, "assign"), o.cardExt = cc11001100_hook("o.cardExt", o.card_ext, "assign"), o.isSuccess = cc11001100_hook("o.isSuccess", !!o.is_succ, "assign"), delete o.card_id, delete o.card_ext, delete o.is_succ;
              }
              e.cardList = cc11001100_hook("e.cardList", n, "assign"), delete e.card_list;
            }
          }, "assign"), e));
        },
        chooseCard: function (e) {
          M("chooseCard", {
            app_id: cc11001100_hook("app_id", v.appId, "object-key-init"),
            location_id: cc11001100_hook("location_id", e.shopId || "", "object-key-init"),
            sign_type: cc11001100_hook("sign_type", e.signType || "SHA1", "object-key-init"),
            card_id: cc11001100_hook("card_id", e.cardId || "", "object-key-init"),
            card_type: cc11001100_hook("card_type", e.cardType || "", "object-key-init"),
            card_sign: cc11001100_hook("card_sign", e.cardSign, "object-key-init"),
            time_stamp: cc11001100_hook("time_stamp", e.timestamp + "", "object-key-init"),
            nonce_str: cc11001100_hook("nonce_str", e.nonceStr, "object-key-init")
          }, (e._complete = cc11001100_hook("e._complete", function (e) {
            e.cardList = cc11001100_hook("e.cardList", e.choose_card_info, "assign"), delete e.choose_card_info;
          }, "assign"), e));
        },
        openCard: function (e) {
          for (var n = cc11001100_hook("n", e.cardList, "var-init"), i = cc11001100_hook("i", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"), o = cc11001100_hook("o", n.length, "var-init"); t < o; ++t) {
            var r = cc11001100_hook("r", n[t], "var-init"),
              a = cc11001100_hook("a", {
                card_id: cc11001100_hook("card_id", r.cardId, "object-key-init"),
                code: cc11001100_hook("code", r.code, "object-key-init")
              }, "var-init");
            i.push(a);
          }
          M(c.openCard, {
            card_list: cc11001100_hook("card_list", i, "object-key-init")
          }, e);
        },
        consumeAndShareCard: function (e) {
          M(c.consumeAndShareCard, {
            consumedCardId: cc11001100_hook("consumedCardId", e.cardId, "object-key-init"),
            consumedCode: cc11001100_hook("consumedCode", e.code, "object-key-init")
          }, e);
        },
        chooseWXPay: function (e) {
          M(c.chooseWXPay, V(e), e);
        },
        openEnterpriseRedPacket: function (e) {
          M(c.openEnterpriseRedPacket, V(e), e);
        },
        startSearchBeacons: function (e) {
          M(c.startSearchBeacons, {
            ticket: cc11001100_hook("ticket", e.ticket, "object-key-init")
          }, e);
        },
        stopSearchBeacons: function (e) {
          M(c.stopSearchBeacons, {}, e);
        },
        onSearchBeacons: function (e) {
          P(c.onSearchBeacons, e);
        },
        openEnterpriseChat: function (e) {
          M("openEnterpriseChat", {
            useridlist: cc11001100_hook("useridlist", e.userIds, "object-key-init"),
            chatname: cc11001100_hook("chatname", e.groupName, "object-key-init")
          }, e);
        },
        launchMiniProgram: function (e) {
          M("launchMiniProgram", {
            targetAppId: cc11001100_hook("targetAppId", e.targetAppId, "object-key-init"),
            path: cc11001100_hook("path", function (e) {
              if ("string" == typeof e && 0 < e.length) {
                var n = cc11001100_hook("n", e.split("?")[0], "var-init"),
                  i = cc11001100_hook("i", e.split("?")[1], "var-init");
                return n += cc11001100_hook("n", ".html", "assign"), void 0 !== i ? n + "?" + i : n;
              }
            }(e.path), "object-key-init"),
            envVersion: cc11001100_hook("envVersion", e.envVersion, "object-key-init")
          }, e);
        },
        openBusinessView: function (e) {
          M("openBusinessView", {
            businessType: cc11001100_hook("businessType", e.businessType, "object-key-init"),
            queryString: cc11001100_hook("queryString", e.queryString || "", "object-key-init"),
            envVersion: cc11001100_hook("envVersion", e.envVersion, "object-key-init")
          }, (e._complete = cc11001100_hook("e._complete", function (n) {
            if (p) {
              var e = cc11001100_hook("e", n.extraData, "var-init");
              if (e) try {
                n.extraData = cc11001100_hook("n.extraData", JSON.parse(e), "assign");
              } catch (e) {
                n.extraData = cc11001100_hook("n.extraData", {}, "assign");
              }
            }
          }, "assign"), e));
        },
        miniProgram: {
          navigateBack: function (e) {
            e = cc11001100_hook("e", e || {}, "assign"), O(function () {
              M("invokeMiniProgramAPI", {
                name: cc11001100_hook("name", "navigateBack", "object-key-init"),
                arg: {
                  delta: cc11001100_hook("delta", e.delta || 1, "object-key-init")
                }
              }, e);
            });
          },
          navigateTo: function (e) {
            O(function () {
              M("invokeMiniProgramAPI", {
                name: cc11001100_hook("name", "navigateTo", "object-key-init"),
                arg: {
                  url: cc11001100_hook("url", e.url, "object-key-init")
                }
              }, e);
            });
          },
          redirectTo: function (e) {
            O(function () {
              M("invokeMiniProgramAPI", {
                name: cc11001100_hook("name", "redirectTo", "object-key-init"),
                arg: {
                  url: cc11001100_hook("url", e.url, "object-key-init")
                }
              }, e);
            });
          },
          switchTab: function (e) {
            O(function () {
              M("invokeMiniProgramAPI", {
                name: cc11001100_hook("name", "switchTab", "object-key-init"),
                arg: {
                  url: cc11001100_hook("url", e.url, "object-key-init")
                }
              }, e);
            });
          },
          reLaunch: function (e) {
            O(function () {
              M("invokeMiniProgramAPI", {
                name: cc11001100_hook("name", "reLaunch", "object-key-init"),
                arg: {
                  url: cc11001100_hook("url", e.url, "object-key-init")
                }
              }, e);
            });
          },
          postMessage: function (e) {
            O(function () {
              M("invokeMiniProgramAPI", {
                name: cc11001100_hook("name", "postMessage", "object-key-init"),
                arg: cc11001100_hook("arg", e.data || {}, "object-key-init")
              }, e);
            });
          },
          getEnv: function (e) {
            O(function () {
              e({
                miniprogram: cc11001100_hook("miniprogram", "miniprogram" === o.__wxjs_environment, "object-key-init")
              });
            });
          }
        }
      }, "var-init"),
      T = cc11001100_hook("T", 1, "var-init"),
      k = cc11001100_hook("k", {}, "var-init");
    return i.addEventListener("error", function (e) {
      if (!p) {
        var n = cc11001100_hook("n", e.target, "var-init"),
          i = cc11001100_hook("i", n.tagName, "var-init"),
          t = cc11001100_hook("t", n.src, "var-init");
        if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) if (-1 != t.indexOf("wxlocalresource://")) {
          e.preventDefault(), e.stopPropagation();
          var o = cc11001100_hook("o", n["wx-id"], "var-init");
          if (o || (o = cc11001100_hook("o", T++, "assign"), n["wx-id"] = cc11001100_hook("n[\"wx-id\"]", o, "assign")), k[o]) return;
          k[o] = cc11001100_hook("k[o]", !0, "assign"), wx.ready(function () {
            wx.getLocalImgData({
              localId: cc11001100_hook("localId", t, "object-key-init"),
              success: function (e) {
                n.src = cc11001100_hook("n.src", e.localData, "assign");
              }
            });
          });
        }
      }
    }, !0), i.addEventListener("load", function (e) {
      if (!p) {
        var n = cc11001100_hook("n", e.target, "var-init"),
          i = cc11001100_hook("i", n.tagName, "var-init");
        n.src;
        if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {
          var t = cc11001100_hook("t", n["wx-id"], "var-init");
          t && (k[t] = cc11001100_hook("k[t]", !1, "assign"));
        }
      }
    }, !0), e && (o.wx = cc11001100_hook("o.wx", o.jWeixin = cc11001100_hook("o.jWeixin", w, "assign"), "assign")), w;
  }
  function M(n, e, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    o.WeixinJSBridge ? WeixinJSBridge.invoke(n, x(e), function (e) {
      A(n, e, i);
    }) : B(n, i);
  }
  function P(n, i, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    o.WeixinJSBridge ? WeixinJSBridge.on(n, function (e) {
      t && t.trigger && t.trigger(e), A(n, e, i);
    }) : B(n, t || i);
  }
  function x(e) {
    cc11001100_hook("e", e, "function-parameter");
    return (e = cc11001100_hook("e", e || {}, "assign")).appId = cc11001100_hook("(e = e || {}).appId", v.appId, "assign"), e.verifyAppId = cc11001100_hook("e.verifyAppId", v.appId, "assign"), e.verifySignType = cc11001100_hook("e.verifySignType", "sha1", "assign"), e.verifyTimestamp = cc11001100_hook("e.verifyTimestamp", v.timestamp + "", "assign"), e.verifyNonceStr = cc11001100_hook("e.verifyNonceStr", v.nonceStr, "assign"), e.verifySignature = cc11001100_hook("e.verifySignature", v.signature, "assign"), e;
  }
  function V(e) {
    cc11001100_hook("e", e, "function-parameter");
    return {
      timeStamp: cc11001100_hook("timeStamp", e.timestamp + "", "object-key-init"),
      nonceStr: cc11001100_hook("nonceStr", e.nonceStr, "object-key-init"),
      package: cc11001100_hook("package", e.package, "object-key-init"),
      paySign: cc11001100_hook("paySign", e.paySign, "object-key-init"),
      signType: cc11001100_hook("signType", e.signType || "SHA1", "object-key-init")
    };
  }
  function A(e, n, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    "openEnterpriseChat" != e && "openBusinessView" !== e || (n.errCode = cc11001100_hook("n.errCode", n.err_code, "assign")), delete n.err_code, delete n.err_desc, delete n.err_detail;
    var t = cc11001100_hook("t", n.errMsg, "var-init");
    t || (t = cc11001100_hook("t", n.err_msg, "assign"), delete n.err_msg, t = cc11001100_hook("t", function (e, n) {
      var i = cc11001100_hook("i", e, "var-init"),
        t = cc11001100_hook("t", a[i], "var-init");
      t && (i = cc11001100_hook("i", t, "assign"));
      var o = cc11001100_hook("o", "ok", "var-init");
      if (n) {
        var r = cc11001100_hook("r", n.indexOf(":"), "var-init");
        "confirm" == (o = cc11001100_hook("o", n.substring(r + 1), "assign")) && (o = cc11001100_hook("o", "ok", "assign")), "failed" == o && (o = cc11001100_hook("o", "fail", "assign")), -1 != o.indexOf("failed_") && (o = cc11001100_hook("o", o.substring(7), "assign")), -1 != o.indexOf("fail_") && (o = cc11001100_hook("o", o.substring(5), "assign")), "access denied" != (o = cc11001100_hook("o", (o = cc11001100_hook("o", o.replace(/_/g, " "), "assign")).toLowerCase(), "assign")) && "no permission to execute" != o || (o = cc11001100_hook("o", "permission denied", "assign")), "config" == i && "function not exist" == o && (o = cc11001100_hook("o", "ok", "assign")), "" == o && (o = cc11001100_hook("o", "fail", "assign"));
      }
      return n = cc11001100_hook("n", i + ":" + o, "assign");
    }(e, t), "assign"), n.errMsg = cc11001100_hook("n.errMsg", t, "assign")), (i = cc11001100_hook("i", i || {}, "assign"))._complete && (i._complete(n), delete i._complete), t = cc11001100_hook("t", n.errMsg || "", "assign"), v.debug && !i.isInnerInvoke && alert(JSON.stringify(n));
    var o = cc11001100_hook("o", t.indexOf(":"), "var-init");
    switch (t.substring(o + 1)) {
      case "ok":
        i.success && i.success(n);
        break;
      case "cancel":
        i.cancel && i.cancel(n);
        break;
      default:
        i.fail && i.fail(n);
    }
    i.complete && i.complete(n);
  }
  function C(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) {
      for (var n = cc11001100_hook("n", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); n < i; ++n) {
        var t = cc11001100_hook("t", e[n], "var-init"),
          o = cc11001100_hook("o", c[t], "var-init");
        o && (e[n] = cc11001100_hook("e[n]", o, "assign"));
      }
      return e;
    }
  }
  function B(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (!(!v.debug || n && n.isInnerInvoke)) {
      var i = cc11001100_hook("i", a[e], "var-init");
      i && (e = cc11001100_hook("e", i, "assign")), n && n._complete && delete n._complete, console.log('"' + e + '",', n || "");
    }
  }
  function L() {
    return new Date().getTime();
  }
  function O(e) {
    cc11001100_hook("e", e, "function-parameter");
    l && (o.WeixinJSBridge ? e() : i.addEventListener && i.addEventListener("WeixinJSBridgeReady", e, !1));
  }
});