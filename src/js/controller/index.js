import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import { FETCH_BLOG_DATA, FETCH_BLOG_DETAIL } from '../model/index'
import getReducer from '../reducer/index'
import BlogContainer from '../container/BlogContainer'
import * as actions from '../action/index'


let self

let UPDATE_ROUTE = getBindedAction('UPDATE_ROUTE')
let UPDATE_ROUTEINFO = getBindedAction('UPDATE_ROUTEINFO')

class Controller {
  onCategoryClick(category) {
    UPDATE_ROUTEINFO({
      category,
      listMode: 0
    })
    UPDATE_ROUTE(1)
  }

  onTagClick(tag) {
    UPDATE_ROUTEINFO({
      tag,
      listMode: 1
    })
    UPDATE_ROUTE(1)
  }

  onBlogLinkClick({
    blog,
    listMode
  }) {
    FETCH_BLOG_DETAIL(blog.path)
      .then(response => response.text())
      .then(html => {
        UPDATE_ROUTEINFO({
          blog: {
            ...blog,
            content: html
          },
          listMode: listMode !== undefined ? listMode : window.getState().routeInfo.listMode
        })
        UPDATE_ROUTE(2)
      })
  }

  onSecondClick({
    text,
    listMode
  }) {
    // category
    if (listMode === 0) {
      self.onCategoryClick(text)
    }
    // tag
    if (listMode === 1) {
      self.onTagClick(text)
    }
  }

  onHomeClick() {
    UPDATE_ROUTE(0)
    UPDATE_ROUTEINFO({
      listMode: -1
    })
  }

  init() {
    FETCH_BLOG_DATA()
      .then(response => response.json())
      .then(blogData => {
        const blogReducer = getReducer(blogData)
        let store = createStore(blogReducer)

        // store redux store into global varible
        window.R = store

        render(
          <Provider store={store}>
            <BlogContainer />
          </Provider>,
          document.getElementById('app')
        )
      })
  }
}

function getBindedAction(name) {
  return (...arg) => bindActionCreators(actions, R.dispatch)[name](...arg)
}

self = new Controller
export default self