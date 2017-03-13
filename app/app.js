import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { logger, setStateToLocalStore } from './util'
import GV from './util/global'

import blog from './reducer'
import Blog from './component/Router'

let store = createStore(
  blog,
  applyMiddleware(logger, setStateToLocalStore)
)

ReactDOM.render(
  <Provider store={store}>
    <Blog />
  </Provider>,
  document.getElementById('app')
);