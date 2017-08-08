var homepageTpl = GV.tpl.homepage,
  itemsTpl = GV.tpl.items,
  detailTpl = GV.tpl.detail,

  homepageTemplate = Handlebars.compile(homepageTpl),
  itemsTemplate = Handlebars.compile(itemsTpl),
  detailTemplate = Handlebars.compile(detailTpl),

  $body = $('body'),

  catalog = [],
  subCatalog = [],

  currentPositionKey = null,
  currentPositionToken = null,

  state = {
    isReaded: false,
    isReadedMarkChanged: false
  },

  // jsonp handler
  catalogHandler,
  modelHandler,

  // for remember the article readed
  localStore;


// Handlebars helper
Handlebars.registerHelper('atobHelper', function (str) {
  return decodeURIComponent(atob(str));
});


/**
 * initial localstorage
 */
// not support localstorage
if (!localStorage) {
  // detect and then hide the elements
  setInterval(function () {
    if (!!$('#isReadedSelector').length) {
      $('#isReadedSelector').hide();
    }
    if (!!$('#detail-markBtnContainer').length) {
      $('#detail-markBtnContainer').hide();
    }
    if (!!$('#detail-exportBtnContainer').length) {
      $('#detail-exportBtnContainer').hide();
    }
    if (!!$('#homepage-importBtn').length) {
      $('#homepage-importBtn').hide();
    }
    if (!!$('#homepage-exportBtn').length) {
      $('#homepage-exportBtn').hide();
    }
    if (!!$('#detail-prevBtn').length) {
      $('#detail-prevBtn').hide();
    }
    if (!!$('#detail-nextBtn').length) {
      $('#detail-nextBtn').hide();
    }
  }, 100)
}
// support localStorage
if (localStorage) {
  // inital data
  if (!localStorage['ankiLibrary']) {
    localStore = {
      inventory: [],
      mail: '',
      scrollPosition: {}
    };
    localStorage['ankiLibrary'] = JSON.stringify(localStore);
  }

  if (localStorage['ankiLibrary']) {
    // load data
    try {
      var str = localStorage['ankiLibrary'];
      localStore = JSON.parse(str);
    } catch (e) {
      localStore = {
        inventory: []
      };
    }

  }

}



/**
 * initial homepage
 */
// get catalog data
catalogHandler = function (json) {
  catalog = json;

  renderHomepage(json);
  registerHomepageEvent();
}
$.getJSON({
  url: GV.baseDataUrl + '/catalog.js',
  dataType: 'JSONP'
});



/**
 * render homepage
 * @para catalog json
 */
function renderHomepage(catalog) {

  // get mainCatalog
  var mainCatalog = [];
  for (var key in catalog) {
    mainCatalog.push(key);
  }

  // render homepage
  var tepHtml = homepageTemplate(mainCatalog);
  $body.html(tepHtml);
}

/**
 * render items page
 * @para subCatalog json
 */
function renderItemsPage(subCatalog) {

  var formatData = {
    isReaded: state.isReaded ? '已读' : '未读',
    items: []
  };

  // filter data
  for (var i = 0, l1 = subCatalog.length; i < l1; i++) {
    var isReaded = false;
    for (var j = 0, l2 = localStore.inventory.length; j < l2; j++) {
      if (subCatalog[i].token === localStore.inventory[j].token) {
        isReaded = true;
      }
    }
    if (state.isReaded) {
      if (isReaded) {
        formatData.items.push(subCatalog[i]);
      }
    }
    if (!state.isReaded) {
      if (!isReaded) {
        formatData.items.push(subCatalog[i]);
      }
    }
  }

  var tepHtml = itemsTemplate(formatData);
  $body.html(tepHtml);
}

/**
 * render detail page
 * @para token
 */
function renderDetailPage(token, callback) {

  // get key
  var key;
  for (var k in catalog) {
    var infos = catalog[k];
    infos.forEach(function (info) {
      if (info.token === token) {
        key = k;
      }
    });
  }

  modelHandler = function (detailData) {
    var tepHtml = detailTemplate(detailData);
    $body.html(tepHtml);

    // async update by localStore
    setTimeout(function () {
      var articleReaded = false;

      for (var i = 0, l = localStore.inventory.length; i < l; i++) {
        if (localStore.inventory[i].token === token) {
          articleReaded = true;
        }
      }

      if (articleReaded) {
        $('#detail-markBtn').html('已读');
      }
    }, 0);

    // add content to copyToClipboardBar input
    $('#copyToClipboardBar').attr('value', $('#article').html())

    // update prevBtn and nextBtn visibility
    var currentSubCatalog = getCurrentSubCatalog();
    var currentIndex = getCurrentIndex(token);
    // judge
    if (currentIndex === 0) {
      $('#detail-prevBtn').hide();
    }
    if (currentIndex === currentSubCatalog.length - 1) {
      $('#detail-nextBtn').hide();
    }

    callback();
  }
  var url = GV.baseDataUrl + '/' + key + '/' + token + '.js'
  $.getJSON({
    url: url,
    dataType: 'JSONP'
  })

}

/**
 * register homepage event
 */
function registerHomepageEvent() {
  // homepage item click
  $('#homepage .item.click').click(function () {

    // get subCatalog
    var key = $(this).find('.text').html();
    subCatalog = catalog[key];

    // ensure the item is isNotReaded
    state.isReaded = false;

    // render items page
    renderItemsPage(subCatalog);
    // bind event
    registerItemsPageEvent();
    // scroll position
    currentPositionKey = key;
    if (localStore.scrollPosition[key]) {
      var targetToken = state.isReaded ? (localStore.scrollPosition[key].isReaded || '') : (localStore.scrollPosition[key].isNotReaded || '')
      startScrollPosition(targetToken, 200);
    }
  });

  // export data by email
  $('#homepage-exportBtn').click(function () {
    var confirmMailText = prompt("邮箱地址:", localStore.mail || '');
    if (confirmMailText) {

      // update localstorage
      localStore.mail = confirmMailText;
      var str = JSON.stringify(localStore);
      localStorage['ankiLibrary'] = str;

      var confirmCopyText = prompt("需复制数据:", str);

      if (confirmCopyText) {
        // send mail
        var address = confirmMailText,
          subject = 'ankiLibrary-' + (new Date()).toLocaleDateString(),
          message = str;
        var requestStr = "mailto:"
          + confirmMailText + "?subject="
          + subject
        window.location.href = requestStr;
      }

    }
  });

  // import data 
  $('#homepage-importBtn').click(function () {
    var importData = prompt("请粘贴要导入的数据：");
    if (importData) {
      // check data
      var dataCorrect = true;

      try {
        localStore = JSON.parse(importData);
      } catch (e) {
        if (e) {
          console.log(1, e);
          dataCorrect = false;
        }
      }
      if (!localStore.inventory) {
        dataCorrect = false;
      }

      if (dataCorrect) {
        localStorage['ankiLibrary'] = importData;
        location.href = location.href;
      }
    }
  });

}

/**
 * register items event
 */
function registerItemsPageEvent() {

  // ui event: isReadedSelector
  $('.ui.dropdown').dropdown({
    onChange: function (num, value) {
      // delay to complete annimation
      setTimeout(function () {
        if (value === '已读') {
          state.isReaded = true;
          renderItemsPage(subCatalog);
          registerItemsPageEvent();
        }
        if (value === '未读') {
          state.isReaded = false;
          renderItemsPage(subCatalog);
          registerItemsPageEvent();
        }


        // scrollPosition
        if (localStore.scrollPosition[currentPositionKey]) {
          var targetToken = state.isReaded ? (localStore.scrollPosition[currentPositionKey].isReaded || '') : (localStore.scrollPosition[currentPositionKey].isNotReaded || '')
          startScrollPosition(targetToken);
        }

      }, 200);
    }
  });

  // backBtn click
  $('.items-backBtn').click(function () {
    renderHomepage(catalog);
    registerHomepageEvent();
  });

  // item click
  $('#items .listItem').click(function () {
    var title = $(this).find('.text').html();
    var token = $(this).attr('token')

    state.isReadedMarkChanged = false;

    renderDetailPage(token, function () {
      registerDetailPageEvent();
    });

    // adjust scrollPosition
    currentPositionToken = token;
    addSubCatalogToScrollPosition(currentPositionKey, currentPositionToken, state.isReaded);
    // localstorage
    var str = JSON.stringify(localStore);
    localStorage['ankiLibrary'] = str;

    // scroll to top
    $("html, body").animate({
      scrollTop: 0
    }, 0);
  });
}

/**
 * register detail page
 */
function registerDetailPageEvent() {

  // detail-backBtn
  $('#detail-backBtn').click(function () {
    // render items page
    renderItemsPage(subCatalog);
    // bind event
    registerItemsPageEvent();
    // scroll Position
    startScrollPosition(currentPositionToken, 0)
  });

  // detail-copyBtn
  var clipboard = new Clipboard('#detail-copyBtn');

  // detail-markBtn
  $('#detail-markBtn').click(function () {
    var text = $(this).html().replace(/\s/g, '');

    state.isReadedMarkChanged = !state.isReadedMarkChanged;

    // remove position action if token as same as localStore.scrollPosition[currentPositionKey]
    if (state.isReaded && localStore.scrollPosition[currentPositionKey]) {
      if (localStore.scrollPosition[currentPositionKey].isReaded === currentPositionToken) {
        localStore.scrollPosition[currentPositionKey].isReaded = '';
      }
    }
    if (!state.isReaded && localStore.scrollPosition[currentPositionKey]) {
      if (localStore.scrollPosition[currentPositionKey].isReaded === currentPositionToken) {
        localStore.scrollPosition[currentPositionKey].isNotReaded = '';
      }
    }

    // update localStorage
    var targetToken = $(this).attr('token');
    // mark readed mark
    if (text === '标记已读') {
      localStore.inventory.push({
        token: targetToken
      })

      $(this).html('已读')
    }
    // unmark readed mark
    if (text === '已读') {
      var deleteReadedItem = function () {
        for (var i = 0, l = localStore.inventory.length; i < l; i++) {
          if (localStore.inventory[i].token === targetToken) {
            localStore.inventory.splice(i, 1);
            deleteReadedItem();
            break;
          }
        }
      }
      deleteReadedItem();

      $(this).html('标记已读')
    }
    // localstorage
    var str = JSON.stringify(localStore);
    localStorage['ankiLibrary'] = str;
  });

  // detail-prevBtn
  $('#detail-prevBtn').click(function () {
    var token = $(this).attr('token');
    var currentSubCatalog = getCurrentSubCatalog();
    var currentIndex = getCurrentIndex(token);
    var index = state.isReadedMarkChanged ? currentIndex : currentIndex - 1;
    var targetToken = currentSubCatalog[currentIndex - 1].token;
    renderDetailPage(targetToken, function () {
      registerDetailPageEvent();
    });
  });

  // detail-nextBtn
  $('#detail-nextBtn').click(function () {
    var token = $(this).attr('token');
    var currentSubCatalog = getCurrentSubCatalog();
    var currentIndex = getCurrentIndex(token);
    var index = state.isReadedMarkChanged ? currentIndex : currentIndex + 1;
    var targetToken = currentSubCatalog[index].token;
    renderDetailPage(targetToken, function () {
      registerDetailPageEvent();
    });
  });

}

/**
 * copyToClipboard
 * @para text to copy
 */
function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData("Text", text);

  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy");  // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

/**
 * get currentSubCatalog
 */
function getCurrentSubCatalog() {
  var currentSubCatalog = [];

  // get currentSubCatalog
  for (var i = 0, l1 = subCatalog.length; i < l1; i++) {
    var isFit;
    var token1 = subCatalog[i].token;

    // isReaded
    if (state.isReaded) {
      isFit = false;
      for (var j = 0, l2 = localStore.inventory.length; j < l2; j++) {
        var token2 = localStore.inventory[j].token;
        if (token1 === token2) {
          isFit = true;
        }
      }
    }
    // not isReaded
    if (!state.isReaded) {
      isFit = true;
      for (var j = 0, l2 = localStore.inventory.length; j < l2; j++) {
        var token2 = localStore.inventory[j].token;
        if (token1 === token2) {
          isFit = false;
        }
      }
    }

    if (isFit) {
      currentSubCatalog.push({
        token: subCatalog[i].token,
        title: subCatalog[i].title
      });
    }
  }
  return currentSubCatalog;
}

/**
 * get currentIndex
 */
function getCurrentIndex(token) {
  var currentIndex = null;
  var currentSubCatalog = getCurrentSubCatalog();
  for (var i = 0, l = currentSubCatalog.length; i < l; i++) {
    if (token === currentSubCatalog[i].token) {
      currentIndex = i;
    }
  }
  return currentIndex;
}


/**
 * add subCatalog token to scrollPosition
 */
function addSubCatalogToScrollPosition(key, token, isReaded) {
  var prev = localStore.scrollPosition[key] || {};
  localStore.scrollPosition[key] = {
    isReaded: isReaded ? token : (prev.isReaded || ''),
    isNotReaded: isReaded ? (prev.isReaded || '') : token
  };
}

/**
 * scroll position
 */
function startScrollPosition(token, speed) {
  if (token && $('#' + token).length) {
    $("html, body").animate({
      scrollTop: $('#' + token).offset().top
    }, speed);
  }

}