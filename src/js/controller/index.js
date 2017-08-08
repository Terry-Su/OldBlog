import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import { FETCH_BLOG_DATA, FETCH_BLOG_DETAIL } from '../model/index'
import getReducer from '../reducer/index'
import BlogContainer from '../container/BlogContainer'
import action from '../action/index'

const {
  UPDATE_ROUTE,
  UPDATE_ROUTEINFO
} = action


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
      this.onCategoryClick(text)
    }
    // tag
    if (listMode === 1) {
      this.onTagClick(text)
    }

    this.scrollToTop()
  }

  onThirdClick() {
    this.scrollToTop()
  }

  onHomeClick() {
    UPDATE_ROUTE(0)
    UPDATE_ROUTEINFO({
      listMode: -1
    })

    this.scrollToTop()
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  init() {
    FETCH_BLOG_DATA()
      .then(response => response.json())
      .then(blogData => {
        const blogReducer = getReducer(blogData)

        window.ReduxStore = createStore(blogReducer)
        window.getState = () => window.ReduxStore.getState()

        render(
          <Provider store={ReduxStore}>
            <BlogContainer />
          </Provider>,
          document.getElementById('app')
        )
      })
  }
}


export default new Controller()