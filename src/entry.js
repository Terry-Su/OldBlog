// style
import './sass/antd.scss'
import './sass/app.scss'
import './sass/highlight.css'
import './sass/ts_markdown.scss'

// polyfill
import 'babel-polyfill'
import './js/util/polyfill/Url'

// jquery
// import jQuery from './js/util/jquery.js'
// window.$ = window.jQuery = jQuery

// controller
import controller from './js/controller/index.js'
controller.init()