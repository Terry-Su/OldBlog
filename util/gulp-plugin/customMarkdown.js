const through = require('through2')
const hljs = require('highlight.js')
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
    file = resolveFile(file, markdownIt)
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

function markdownIt(text) {
  return md.render(text)
}