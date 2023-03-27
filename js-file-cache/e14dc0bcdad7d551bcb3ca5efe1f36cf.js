/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
  setMainInterstitial();
  $(window).resize(function () {
    setMainInterstitial();
  });
});
function setMainInterstitial() {
  var viewport = cc11001100_hook("viewport", getViewport(), "var-init");
  //get window height
  var windowHeight = cc11001100_hook("windowHeight", window.innerHeight, "var-init");
  let headerHeight = cc11001100_hook("headerHeight", $('nav').innerHeight(), "var-init");
  var footerHeight = cc11001100_hook("footerHeight", $('footer').innerHeight() !== undefined ? $('footer').innerHeight() : 160, "var-init");
  var messageHeight = cc11001100_hook("messageHeight", $('.ribe-main-interstitial-messgae').innerHeight(), "var-init");
  var imagePadding = cc11001100_hook("imagePadding", messageHeight + 43 + 20, "var-init");
  var interstitialHeight;
  if (!viewport.largeViewport) {
    interstitialHeight = cc11001100_hook("interstitialHeight", windowHeight - messageHeight - 43 - footerHeight, "assign");
  } else {
    interstitialHeight = cc11001100_hook("interstitialHeight", windowHeight - headerHeight, "assign");
  }
  $('.ribe-main-interstitial-backdrop').css('height', interstitialHeight + 'px');
  $('header').css('display', 'none');
  $('.ribe-main-interstitial').css('margin-top', '43px');
  if (viewport.largeViewport) {
    var messageboxHeight = cc11001100_hook("messageboxHeight", $('.ribe-main-interstitial-messgae').innerHeight(), "var-init");
    var stageHeight = cc11001100_hook("stageHeight", windowHeight - footerHeight - headerHeight, "var-init");
    var margintop = cc11001100_hook("margintop", stageHeight / 2 - messageboxHeight / 2, "var-init");
    $('.ribe-main-interstitial .ribe-main-interstitial-messgae').css('margin-top', margintop + 'px');
    $('.ribe-main-interstitial-backdrop').css('margin-top', '0px');
  } else {
    $('.ribe-main-interstitial .ribe-main-interstitial-messgae').css('margin-top', 'auto');
    $('.ribe-main-interstitial-backdrop').css('margin-top', imagePadding + 'px');
  }
}