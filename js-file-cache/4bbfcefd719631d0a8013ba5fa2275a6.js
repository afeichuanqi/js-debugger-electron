;
(function ($) {
  /**
   * Настройки по умолчанию
   *
   * @default
   */
  var defaults = cc11001100_hook("defaults", {
    height: cc11001100_hook("height", 300, "object-key-init"),
    useCss: cc11001100_hook("useCss", true, "object-key-init"),
    speed: cc11001100_hook("speed", 250, "object-key-init"),
    open: cc11001100_hook("open", false, "object-key-init"),
    event: cc11001100_hook("event", 'click', "object-key-init"),
    shadow: cc11001100_hook("shadow", false, "object-key-init"),
    easing: cc11001100_hook("easing", 'swing', "object-key-init"),
    textClose: cc11001100_hook("textClose", '展开查看全部<i class="fa fa-angle-down ml5"></i>', "object-key-init"),
    textOpen: cc11001100_hook("textOpen", '隐藏<i class="fa fa-angle-up ml5"></i>', "object-key-init"),
    tpl: {
      content: cc11001100_hook("content", '<div class="mrc-content"></div>', "object-key-init"),
      contentWrap: cc11001100_hook("contentWrap", '<div class="mrc-content-wrap"></div>', "object-key-init"),
      btn: cc11001100_hook("btn", '<div class="btn mrc-btn"></div>', "object-key-init"),
      btnWrap: cc11001100_hook("btnWrap", '<div class="mrc-btn-wrap"></div>', "object-key-init"),
      controls: cc11001100_hook("controls", '<div class="mrc-controls"></div>', "object-key-init"),
      shadow: cc11001100_hook("shadow", '<div class="mrc-shadow"></div>', "object-key-init")
    }
  }, "var-init");

  /**
   * Конструктор
   *
   * @constructor
   * @param {HTMLElement} el - HTML-элемент в DOM
   * @param {Object=} options - Объект с параметрами
   */
  var MoreContent = function (el, options) {
      this.$self = cc11001100_hook("this.$self", el, "assign");
      this.init(options);
    },
    __,
    meth = cc11001100_hook("meth", MoreContent.prototype, "var-init");

  /**
   * Инициализация
   *
   * @public
   * @param {object={}} options - Объект с параметрами
   * @example
   * 
   * $(element).moreContent('init', {});
   * $(element).moreContent('init');
   */
  meth.init = cc11001100_hook("meth.init", function (options) {
    var _ = cc11001100_hook("_", this, "var-init"),
      self = cc11001100_hook("self", _.$self, "var-init"),
      $self = cc11001100_hook("$self", $(self), "var-init"),
      adp;

    // console.log( 'Метод: Init', arguments, _ );

    if (_.inited === true) return;

    // Настройки: По умолчанию
    _.defaults = cc11001100_hook("_.defaults", $.extend(true, {}, defaults, $.fn.moreContent.defaults), "assign");
    // Настройки: Пользовательские
    _.options = cc11001100_hook("_.options", options || {}, "assign");
    // Настройки: Data-атрибут
    _.dataOptions = cc11001100_hook("_.dataOptions", $(self).data('mrc') || {}, "assign");
    // Настройки: Объединенные
    _.settings = cc11001100_hook("_.settings", sets = cc11001100_hook("sets", $.extend(true, {}, _.defaults, _.options, _.dataOptions), "assign"), "assign");
    _.src = cc11001100_hook("_.src", {
      html: cc11001100_hook("html", $self.html() || '', "object-key-init"),
      class: cc11001100_hook("class", $self.attr('class') || '', "object-key-init"),
      style: cc11001100_hook("style", $self.attr('style') || '', "object-key-init")
    }, "assign");
    _.nsid = cc11001100_hook("_.nsid", __.getRndNum(10000, 99999), "assign");
    _.status = cc11001100_hook("_.status", sets.open, "assign");
    _.dropped = cc11001100_hook("_.dropped", false, "assign");
    _.manually = cc11001100_hook("_.manually", false, "assign");

    // Форм. перв. разметки
    _.createMarkup();

    // Опр. режим отображения
    _.getCurMode();

    // Обработчик. Переключатель
    _.layout.btn.on(sets.event, function () {
      _.toggle.call(_);
    });

    // Обработчик. Адаптивность
    adp = cc11001100_hook("adp", __.debounce(function () {
      _.getAdaptive.call(_);
    }, 150), "assign");
    $(window).on('resize.mrc-' + _.nsid, adp);

    // Событие: 'beforeInitSwitch'
    $self.trigger('beforeInitSwitch.mrc', [_, sets]);
    _.status ? _.open(true) : _.close(true);

    /* SetTimeout с задержкой "sets.speed" для
    учета выполнения методов close/open,
    которые работают с асинхр. "animate" */
    setTimeout(function () {
      // Плагин инициализирован
      _.inited = cc11001100_hook("_.inited", true, "assign");

      // Событие: 'afterInit'
      $self.trigger('afterInit.mrc', [_, sets]);
    }, sets.speed + 5);
  }, "assign");

  /**
   * Создает первичную разметку
   *
   * @public
   */
  meth.createMarkup = cc11001100_hook("meth.createMarkup", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      self = cc11001100_hook("self", _.$self, "var-init"),
      sets = cc11001100_hook("sets", _.settings, "var-init"),
      lt = cc11001100_hook("lt", _.layout = cc11001100_hook("_.layout", {}, "assign"), "var-init"),
      cssh;

    // Self
    lt.self = cc11001100_hook("lt.self", $(self).addClass('mrc'), "assign");

    // Content
    lt.self.wrapInner(sets.tpl.content);
    lt.content = cc11001100_hook("lt.content", lt.self.children().css('overflow', 'hidden'), "assign");

    // Content Wrap
    lt.content.wrapInner(sets.tpl.contentWrap);
    lt.contentWrap = cc11001100_hook("lt.contentWrap", lt.content.children().css('overflow', 'hidden'), "assign");

    // Controls
    lt.controls = cc11001100_hook("lt.controls", $(sets.tpl.controls).appendTo(lt.self), "assign");

    // Button
    lt.btn = cc11001100_hook("lt.btn", $(sets.tpl.btn).html(sets.textClose).insertAfter(lt.controls).wrap($(sets.tpl.btnWrap)).hide().fadeIn(sets.speed), "assign");

    // Button Wrap
    lt.btnWrap = cc11001100_hook("lt.btnWrap", lt.btn.parent().appendTo(lt.controls), "assign");

    // Shadow
    if (sets.shadow) {
      lt.content.css('position', 'relative');
      lt.shadow = cc11001100_hook("lt.shadow", $(sets.tpl.shadow).appendTo(lt.content), "assign");
    }

    // CSS Height
    if (sets.useCss) cssh = cc11001100_hook("cssh", parseInt(getComputedStyle(self).maxHeight), "assign");
    lt.self.css({
      'max-height': cc11001100_hook('max-height', 'none', "object-key-init"),
      'min-height': cc11001100_hook('min-height', 'none', "object-key-init")
    });
    if (cssh && cssh > 0) {
      _.setContent(cssh);
      sets.height = cc11001100_hook("sets.height", cssh, "assign");
    }
  }, "assign");

  /**
   * Устанавливает блок с контентом
   * на всю высоту 
   *
   * @public
   * @param {boolean=} force - Запуск принудительно, если true
   * @example
   *
   * $(element).moreContent('open');
   */
  meth.open = cc11001100_hook("meth.open", function (force) {
    var _ = cc11001100_hook("_", this, "var-init"),
      sets = cc11001100_hook("sets", _.settings, "var-init"),
      lt = cc11001100_hook("lt", _.layout, "var-init");
    if (_.status && !force) return;

    // console.log( 'Метод: Open', _.mode );

    if (!_.mode) lt.btnWrap.hide();
    lt.btn.html(sets.textOpen);
    if (sets.shadow) lt.shadow.fadeOut(sets.speed);

    // Событие: 'beforeOpen'
    lt.self.trigger('beforeOpen.mrc', [_, sets, lt.content, _.fullHeight + 'px']);
    if (!_.manually) lt.content.animate({
      height: cc11001100_hook("height", _.fullHeight + 'px', "object-key-init")
    }, _.mode ? sets.speed : 0, sets.easing, function () {
      _.afterChange('open');
    });
    _.manually = cc11001100_hook("_.manually", false, "assign");
    _.status = cc11001100_hook("_.status", true, "assign");
  }, "assign");

  /**
   * Скрывает часть контента,
   * который выходит за рамки указанной высоты
   *
   * @public
   * @param {boolean=} force - Запуск принудительно, если true
   * @example
   *
   * $(element).moreContent('close');
   */
  meth.close = cc11001100_hook("meth.close", function (force) {
    var _ = cc11001100_hook("_", this, "var-init"),
      sets = cc11001100_hook("sets", _.settings, "var-init"),
      lt = cc11001100_hook("lt", _.layout, "var-init");
    if (!_.status && !force && !_.dropped) return;

    // console.log( 'Метод: Close', _.mode );

    if (!_.mode && sets.useCss) _.setContent();
    if (!_.mode) lt.btnWrap.hide();
    lt.btn.html(sets.textClose);
    if (sets.shadow) {
      _.mode ? lt.shadow.fadeIn(sets.speed) : lt.shadow.fadeOut(sets.speed);
    }

    // Событие: 'beforeClose'
    lt.self.trigger('beforeClose.mrc', [_, sets, lt.content, (_.mode ? sets.height : '') + 'px']);
    if (!_.manually) lt.content.animate({
      height: cc11001100_hook("height", (_.mode ? sets.height : '') + 'px', "object-key-init")
    }, sets.speed, sets.easing, function () {
      _.afterChange('close');
    });
    _.manually = cc11001100_hook("_.manually", false, "assign");
    _.dropped = cc11001100_hook("_.dropped", false, "assign");
    _.status = cc11001100_hook("_.status", false, "assign");
  }, "assign");

  /**
   * Раскрывает контент на указ. величину (px или %)
   *
   * @public
   * @param {boolean=} num - Количество px или % (от полной высоты). Поум. 100
   * @param {boolean=} unit - Единица измерения 'px' или '%'. Поум. 'px'
   * @example
   *
   * $(element).moreContent('drop', 50); // Опустить на 50px
   * $(element).moreContent('drop', 25, '%'); // Опустить на 25%
   */
  meth.drop = cc11001100_hook("meth.drop", function (num, unit) {
    var _ = cc11001100_hook("_", this, "var-init"),
      lt = cc11001100_hook("lt", _.layout, "var-init"),
      num = cc11001100_hook("num", num || 100, "var-init"),
      unit = cc11001100_hook("unit", unit || 'px', "var-init");
    _.getCurMode();
    if (_.curHeight >= _.fullHeight || !_.mode) return false;

    // console.log( 'Метод: Drop', _ );

    var pxExt = cc11001100_hook("pxExt", unit == '%' ? Math.ceil(num * _.fullHeight / 100) : num, "var-init"); // На сколько раскрыть контент, px
    pxPush = cc11001100_hook("pxPush", _.curHeight + pxExt, "assign"); // Высота после раскрытия, px

    // Последний вызов "Drop" (далее раскр. состояние)
    if (pxPush >= _.fullHeight) {
      pxExt = cc11001100_hook("pxExt", _.fullHeight - _.curHeight, "assign");
      pxPush = cc11001100_hook("pxPush", _.curHeight + pxExt, "assign");
      lt.btn.html(sets.textOpen);
      if (sets.shadow) lt.shadow.fadeOut(sets.speed);
      if (_.status) _.setContent();
      lt.self.addClass('open');
      _.dropped = cc11001100_hook("_.dropped", false, "assign");
      _.status = cc11001100_hook("_.status", true, "assign");
    } else {
      _.dropped = cc11001100_hook("_.dropped", Math.ceil(_.curHeight / (_.fullHeight / 100)), "assign");
    }
    _.curHeight = cc11001100_hook("_.curHeight", pxPush, "assign");

    // Событие: 'beforeDrop'
    lt.self.trigger('beforeDrop.mrc', [_, sets, lt.content, pxPush + 'px']);
    if (!_.manually) lt.content.animate({
      'height': cc11001100_hook('height', pxPush + 'px', "object-key-init")
    }, sets.speed, sets.easing, function () {
      _.afterChange('drop');
    });
  }, "assign");

  /**
   * Переключает состояния Open/Close
   *
   * @public
   * @example
   *
   * $(element).moreContent('tiggle')
   */
  meth.toggle = cc11001100_hook("meth.toggle", function () {
    var _ = cc11001100_hook("_", this, "var-init");

    // console.log( 'Метод: Toggle' );

    _.status ? _.close(true) : _.open(true);
  }, "assign");

  /**
   * Выполняет опр. действия после завершения методов
   * "Open", "Close" или "Drop"
   *
   * @param {string} act - Имя метода ("open", "close" или "drop")
   * @public
   */
  meth.afterChange = cc11001100_hook("meth.afterChange", function (act) {
    var _ = cc11001100_hook("_", this, "var-init"),
      sets = cc11001100_hook("sets", _.settings, "var-init"),
      lt = cc11001100_hook("lt", _.layout, "var-init");
    _.calcSizes();
    switch (act) {
      case 'open':
        _.setContent();
        lt.self.addClass('open');

        // Событие: 'afterOpen'
        lt.self.trigger('afterOpen.mrc', [_, sets, lt.content]);
        break;
      case 'close':
        lt.self.removeClass('open');

        // Событие: 'afterClose'
        lt.self.trigger('afterClose.mrc', [_, sets, lt.content]);
        break;
      case 'drop':
        if (_.status) _.setContent();
        if (_.curHeight >= _.fullHeight) lt.self.removeClass('dropped');else lt.self.addClass('dropped');

        // Событие: 'afterDrop'
        lt.self.trigger('afterDrop.mrc', [_, sets, lt.content]);
        break;
      default:
        return;
    }

    // Событие: 'change'
    lt.self.trigger('change.mrc', [_, sets]);
  }, "assign");

  /**
   * Устанавливает высоту
   * блоку с контентом (без анимации)
   *
   * @param {string|number=} i - Кол-во пикселей 
   * @public
   */
  meth.setContent = cc11001100_hook("meth.setContent", function (i) {
    this.layout.content.css('height', i || '');
  }, "assign");

  /**
   * Пересчитывает полную высоту контента
   * и высоту видимой его части, заносит в экземпляр объекта
   *
   * @public
   */
  meth.calcSizes = cc11001100_hook("meth.calcSizes", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      sets = cc11001100_hook("sets", _.settings, "var-init"),
      lt = cc11001100_hook("lt", _.layout, "var-init");
    _.curHeight = cc11001100_hook("_.curHeight", lt.content.get(0).clientHeight || 0, "assign");
    _.fullHeight = cc11001100_hook("_.fullHeight", lt.contentWrap.get(0).clientHeight || 0, "assign");
  }, "assign");

  /**
   * Получает и устанавливает условный режим отображения (mode),
   * который используется для решения проблем, связанных с 
   * некорректным отображением эл-ов в случае, если высота контента
   * менее указанной в параметрах высоты.
   * (используется при адаптивности)
   *
   * @public
   */
  meth.getCurMode = cc11001100_hook("meth.getCurMode", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      sets = cc11001100_hook("sets", _.settings, "var-init"),
      h = cc11001100_hook("h", sets.height, "var-init");
    _.calcSizes();
    if (_.fullHeight >= h && _.mode != true) _.mode = cc11001100_hook("_.mode", true, "assign");else if (_.fullHeight < h && _.mode != false) _.mode = cc11001100_hook("_.mode", false, "assign");
  }, "assign");

  /**
   * Корректирует отображение некоторых эл-ов
   * при изменении ширины окна браузера
   *
   * @public
   */
  meth.getAdaptive = cc11001100_hook("meth.getAdaptive", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      sets = cc11001100_hook("sets", _.settings, "var-init"),
      lt = cc11001100_hook("lt", _.layout, "var-init"),
      height;
    _.getCurMode();
    if (_.mode) {
      // Если использован метод "drop" и происходит ресайз
      if (_.dropped) {
        height = cc11001100_hook("height", _.dropped * (_.fullHeight / 100), "assign");
        if (height < sets.height) height = cc11001100_hook("height", sets.height, "assign");
        lt.content.animate({
          'height': cc11001100_hook('height', height + 'px', "object-key-init")
        }, 250);
      }
      lt.btnWrap.fadeIn(sets.speed);
      if (_.status) _.setContent();else {
        _.setContent(_.curHeight);
        if (sets.shadow) lt.shadow.fadeIn(sets.speed);
      }
    } else {
      lt.btnWrap.hide();
      _.setContent();
      if (sets.shadow) lt.shadow.fadeOut(sets.speed);
    }

    // Событие: 'change'
    lt.self.trigger('change.mrc', [_, sets]);
  }, "assign");

  /**
   * Деинициализация
   *
   * @public
   * @example
   * 
   * $(element).moreContent('destroy');
   */
  meth.destroy = cc11001100_hook("meth.destroy", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      self = cc11001100_hook("self", _.$self, "var-init"),
      sets = cc11001100_hook("sets", _.settings, "var-init"),
      lt = cc11001100_hook("lt", _.layout, "var-init");
    if (!_.inited) return;

    // console.log( 'Метод: Destroy', arguments );

    $(window).off('resize.mrc-' + _.nsid);
    lt.self.attr({
      class: cc11001100_hook("class", _.src.class, "object-key-init"),
      style: cc11001100_hook("style", _.src.style, "object-key-init")
    }).html(_.src.html);
    lt.content.remove();
    lt.controls.remove();
    delete self.MoreContent;
  }, "assign");

  /**
   * Реинициализация
   *
   * @public
   * @param {object=} newOpts - Объект с новыми параметрами
   * @example
   * 
   * $(element).moreContent('reinit');
   * $(element).moreContent('reinit', {});
   */
  meth.reinit = cc11001100_hook("meth.reinit", function (newOpts) {
    var _ = cc11001100_hook("_", this, "var-init"),
      self = cc11001100_hook("self", _.$self, "var-init"),
      sets = cc11001100_hook("sets", typeof newOpts == 'object' && Object.keys(newOpts).length != 0 ? newOpts : $.extend(true, {}, _.settings), "var-init");

    // console.log( 'Метод: Reinit' );

    // Код здесь...
    _.destroy();
    $(self).moreContent(sets);
  }, "assign");
  __ = cc11001100_hook("__", {
    /**
     * Генерирует случайное число
     * Назначение: Обработчики событий (пространства имен)
     *
     * @private
     * @param {Number} min - целое число "от"
     * @param {Number} max - целое число "до"
     */
    getRndNum: function (min, max) {
      return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    },
    /**
     * Не позволяет указ. функции выполниться более одного раза
     * в заданный промежуток времени
     *
     * @private
     * @param {function} fn - выполняемая функция
     * @param {Number} wait - задержка, мс
     */
    debounce: function (fn, wait) {
      var timeout;
      return function () {
        var context = cc11001100_hook("context", this, "var-init"),
          args = cc11001100_hook("args", arguments, "var-init");
        var later = function () {
          timeout = cc11001100_hook("timeout", null, "assign");
          fn.apply(context, args);
        };
        var callNow = cc11001100_hook("callNow", !timeout, "var-init");
        clearTimeout(timeout);
        timeout = cc11001100_hook("timeout", setTimeout(later, wait), "assign");
        if (callNow) fn.apply(context, args);
      };
    }
  }, "assign");
  $.fn.moreContent = cc11001100_hook("$.fn.moreContent", function () {
    var pn = cc11001100_hook("pn", 'MoreContent', "var-init"),
      args = cc11001100_hook("args", arguments, "var-init"),
      mth = cc11001100_hook("mth", args[0], "var-init");
    $.each(this, function (i, it) {
      if (typeof mth == 'object' || typeof mth == 'undefined') it[pn] = cc11001100_hook("it[pn]", crtInst(it, mth), "assign");else if (mth === 'init' || mth === 'reinit') it[pn] ? getMeth(it, mth, args) : it[pn] = cc11001100_hook("it[pn]", crtInst(it, args[1]), "assign");else getMeth(it, mth, args);
    });
    function getMeth(it, mth, args) {
      cc11001100_hook("it", it, "function-parameter");
      cc11001100_hook("mth", mth, "function-parameter");
      cc11001100_hook("args", args, "function-parameter");
      if (!(it[pn] instanceof MoreContent)) return;
      if (!(mth in it[pn])) return;
      return it[pn][mth].apply(it[pn], Array.prototype.slice.call(args, 1));
    }
    ;
    function crtInst(it, mth) {
      cc11001100_hook("it", it, "function-parameter");
      cc11001100_hook("mth", mth, "function-parameter");
      if (it[pn] instanceof MoreContent) return;
      return new MoreContent(it, mth);
    }
    ;
    return this;
  }, "assign");
  $.fn.moreContent.prototype = cc11001100_hook("$.fn.moreContent.prototype", MoreContent.prototype, "assign");
  $.fn.moreContent.defaults = cc11001100_hook("$.fn.moreContent.defaults", defaults, "assign");
})(jQuery);