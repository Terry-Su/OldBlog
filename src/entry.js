// style
import 'antd/dist/antd.css'
import './sass/app.scss'
import './sass/highlight.css'
import './sass/ts_markdown.scss'

// polyfill
import 'babel-polyfill'
// controller
import controller from './js/controller/index.js'
controller.init()