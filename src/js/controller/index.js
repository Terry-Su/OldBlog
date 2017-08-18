import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { FETCH_BLOG_DATA, FETCH_BLOG_DETAIL } from '../model/index'
import { getBlogReducer } from '../reducer/index'
import innerStateReducer from '../reducer/innerState'
import reducers from '../reducer/index'
import BlogContainer from '../container/BlogContainer'
import action from '../action/index'

import logger from '../util/logger'

const {
  MODIFY_INNERSTATE
} = action


class Controller {
  onCategoryClick(category) {
    browserHistory.push(`/${category}`)
  }

  onTagClick(tag) {
    browserHistory.push(`/tag/${tag}`)
  }

  onBlogLinkClick(blog) {
    browserHistory.push(`/blog/${blog.id}`)
    // const self = this
    // FETCH_BLOG_DETAIL(blog.path)
    //   .then(response => response.text())
    //   .then(html => {
    //     MODIFY_INNERSTATE('cacheDetail', html)
        
    //     self.scrollToTop()
    //   })
  }

  onSecondClick({
    blog
  }) {
    this.onCategoryClick(blog.category)
    this.scrollToTop()
  }

  onHomeClick() {
    browserHistory.push(`/`)

    this.scrollToTop()
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  onDetailPageDidMount(blog) {
    const self = this
    FETCH_BLOG_DETAIL(blog.path)
      .then(response => response.text())
      .then(html => {
        MODIFY_INNERSTATE('cacheDetail', html)
        self.scrollToTop()
      })
  }

  onDetailBoxMount(detailCatalog) {
    console.log(detailCatalog)
  }

  resolveUrl() {
    const Url = new URL(window.location.href)
    const param = Url.searchParams.get('p')
    if (param) {
      browserHistory.push(param)
    }
  }

  

  init() {
    FETCH_BLOG_DATA()
      .then(response => response.json())
      .then(blogData => {
        const blogReducer = getBlogReducer(blogData)
        const reducer = combineReducers({
          innerState: innerStateReducer,
          blog: blogReducer,
          routing: routerReducer
        })

        window.ReduxStore = createStore(reducer, applyMiddleware(logger, thunkMiddleware))
        window.getState = () => window.ReduxStore.getState()

        // crate history
        const history = syncHistoryWithStore(browserHistory, ReduxStore)

        render(
          <Provider store={ReduxStore}>
            <BlogContainer history={history} />
          </Provider>,
          document.getElementById('app')
        )
      })
  }
}


export default new Controller()