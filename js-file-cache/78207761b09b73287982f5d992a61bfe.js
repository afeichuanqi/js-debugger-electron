/* 
 * Cathay Pacific Responsive IBE Project
 */

var rulesSet = cc11001100_hook("rulesSet", {
  "OTP-number": {
    "validateFn": cc11001100_hook("validateFn", "otpNumber", "object-key-init")
  }
}, "var-init");
(function ($) {
  $.fn.formValidate = cc11001100_hook("$.fn.formValidate", function (rulesSet, validateBtn) {
    var _form = cc11001100_hook("_form", this, "var-init");

    //input validiation function
    var _inputValidation = function (input, rulesSet, force) {
      var dataType = cc11001100_hook("dataType", input.parents('.form-group').data('form-validation'), "var-init");
      if (typeof rulesSet[dataType] !== 'undefined') {
        var fn = cc11001100_hook("fn", window[rulesSet[dataType].validateFn], "var-init");
        var result = cc11001100_hook("result", fn(input, force), "var-init");
        //ribeFormValidationCallback();
        return result;
      } else {
        return true;
      }
    };
    var _validate = function () {
      var result = cc11001100_hook("result", true, "var-init");
      _form.children().find('.ribe-form-validation-box').css('display', 'block');
      _form.children().find(':input').each(function () {
        if (!_inputValidation($(this), rulesSet, true)) {
          result = cc11001100_hook("result", false, "assign");
        }
      });
      return result;
    };

    //input field
    _form.children().find('input[type="text"], input[type="tel"]').focusout(function () {
      $(this).addClass('ribe-field-activate');
      _inputValidation($(this), rulesSet);
    });
    _form.children().find('input[type="text"], input[type="tel"]').keyup(function () {
      $(this).parents('.form-group').children('.ribe-form-validation-box').css('display', 'block');
    });

    //validate the form
    this.validate = cc11001100_hook("this.validate", function () {
      return _validate();
    }, "assign");

    //validate btn
    if (validateBtn) {
      _form.children().find(validateBtn).on('click', function () {
        _validate();
        //ribeFormValidationCallback();
      });
    }

    return this;
  }, "assign");
})(jQuery);
function otpNumber(selector) {
  cc11001100_hook("selector", selector, "function-parameter");
  var val = cc11001100_hook("val", selector.val(), "var-init");
  if (val.length !== 0) {
    if (formValidation(val, /^[A-Za-z0-9]{6}$/)) {
      ribeFormValidationSuccess(selector);
      return true;
    } else {
      ribeFormValidationFail(selector, "e2");
      return false;
    }
  } else {
    //length error
    if (val.length === 0) {
      ribeFormValidationFail(selector, "e1");
    }
    return false;
  }
}
function ribeFormValidationSuccess(selector, selfHandleAria) {
  cc11001100_hook("selector", selector, "function-parameter");
  cc11001100_hook("selfHandleAria", selfHandleAria, "function-parameter");
  var msg = cc11001100_hook("msg", selector.parents('.form-group').attr('data-success'), "var-init");
  selector.parents('.form-group').removeClass('error').addClass('success');
  $(selector).parents('.form-group').children().find('.ribe-validation-icon').removeClass('icon-warning').hide();
  if (!selfHandleAria) {
    $(selector).attr('aria-invalid', 'false');
  }
  $(selector).parents('.form-group').find('.ribe-error-message').children('span').html('');
  $(selector).parents('.form-group').find('.ribe-form-validation-box').children('.sr-wordings').html(msg);
  $('#payment-otp-confirm').removeAttr('disabled');
}
function ribeFormValidationFail(selector, errorCode, selfHandleAria) {
  cc11001100_hook("selector", selector, "function-parameter");
  cc11001100_hook("errorCode", errorCode, "function-parameter");
  cc11001100_hook("selfHandleAria", selfHandleAria, "function-parameter");
  selector.parents('.form-group').children('.ribe-form-validation-box').css('display', 'block');
  var errMsg;
  switch (errorCode) {
    case 'e1':
      //mandatory error
      errMsg = cc11001100_hook("errMsg", selector.closest('.form-group').data('mandatory-error'), "assign");
      break;
    case 'e2':
      //validation error
      errMsg = cc11001100_hook("errMsg", selector.closest('.form-group').data('validation-error'), "assign");
      break;
    default:
      errMsg = cc11001100_hook("errMsg", errorCode, "assign");
  }
  selector.parents('.form-group').removeClass('success').addClass('error');
  $(selector).parents('.form-group').children().find('.ribe-validation-icon').removeClass('icon-tick').addClass('icon-warning').show();
  if (!selfHandleAria) {
    $(selector).attr('aria-invalid', 'true');
  }
  $(selector).parents('.form-group').find('.ribe-error-message').children('span').html(errMsg);
  $(selector).parents('.form-group').find('.ribe-form-validation-box').children('.sr-wordings').html(errMsg);
  $('#payment-otp-confirm').attr('disabled', 'disabled');
}
function revalidateOTP() {
  var hasError = cc11001100_hook("hasError", false, "var-init");
  $('.upop-otp-form').find('input[type="text"]').focusout();
  //hasError = true;
  setTimeout(function () {
    $('.upop-otp-form').find('.ribe-field-group').each(function () {
      if ($(this).hasClass('error') === true && !hasError) {
        hasError = cc11001100_hook("hasError", true, "assign");
        //              $('body').animate(
        //                      {scrollTop: $('.upop-otp-form .ribe-field-group.error').first().offset().top - $('.ribe-navbar-status').height() - 40}
        //              , 300);
        $('.upop-otp-form .ribe-field-group.error').first().find('input, select').first().focus();
      }
    });
  }, 85);
  setTimeout(function () {
    if (!hasError) {
      return true;
    } else {
      return false;
    }
  }, 85);
}
var ribeFormValidate = cc11001100_hook("ribeFormValidate", [], "var-init");
$(document).ready(function () {
  $('.upop-otp-wrapper').each(function (index) {
    ribeFormValidate[index + 1] = cc11001100_hook("ribeFormValidate[index + 1]", $(this).formValidate(rulesSet, '.ribe-otp-confirm'), "assign");
  });
  // Revalidate the payment detail.
  $('#payment-otp-confirm').on('click', function () {
    revalidateOTP();
  });
});