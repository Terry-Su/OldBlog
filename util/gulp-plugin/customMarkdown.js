const through = require('through2')
const hljs = require('highlight.js')
const jsdom = require("jsdom")
const { JSDOM } = jsdom
const md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) { }
    }
    return ''; // use external default escaping 
  }
}).use(require('markdown-it-container'), 'data', {
  validate: function (params) {
    return params.trim().match(/^data\s+(.*)$/);
  },
  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^data\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div id="ts_data" style="display:none;">' + md.utils.escapeHtml(m[1]) + '</div>\n';

    } else {
      // closing tag
      return '</details>\n';
    }
  }
})


module.exports = function () {
  return through.obj(function (file, encoding, callback) {
    file = resolveFile(file, resolveMarkdown)
    callback(null, file)
  });
};

function resolveFile(file, resolveFn) {
  let text = file.contents.toString('utf8')
  text = resolveFn(text)
  const buffer = Buffer.from(text, 'utf8')
  file.contents = buffer
  return file
}

function resolveMarkdown(text) {
  const htmlText = markdownIt(text)
  const detailCatalogHtml = getDetailCatalogHtml(htmlText)
  const addedDetailCatalogHtml = getAddedDetailCatalogHtml(htmlText, detailCatalogHtml)
  return addedDetailCatalogHtml
}



function getDetailCatalogHtml(htmlText) {
  /**
   * [
   *  {
   *    name: 'name',
   *    h2: ['name1', 'name2']
   *  } 
   * ]
   */
  let detailCatalog = []
  let h1 = {}

  const { window } = new JSDOM(htmlText)
  const $ = require('jquery')(window)

  $('*').map((i, ele) => {
    const $ele = $(ele)
    const tagName = $ele.prop('tagName')
    const name = $ele.text()
    if (['H1', 'H2'].some(tag => tagName === tag)) {
      if (tagName === 'H1') {
        Object.keys(h1).length > 0 && detailCatalog.push( Object.assign({}, h1) )
        h1 = {}
        h1.name = name
      }

      if (tagName === 'H2') {
        h1.h2 = h1.h2 || []
        h1.h2.push(name)
      }
    }
  })

  return `<div id="detailCatalogData" style="display:none;">${JSON.stringify(detailCatalog)}</div>`
}

function getAddedDetailCatalogHtml(htmlText, detailCatalogHtml) {
  return htmlText + detailCatalogHtml
}


function markdownIt(text) {
  return md.render(text)
}