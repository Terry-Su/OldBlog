import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {
  FETCH_BLOG_DATA,
  FETCH_BLOG_DETAIL,
} from '../model/index'
import { getBlogReducer } from '../reducer/index'
import innerStateReducer from '../reducer/innerState'
import reducers from '../reducer/index'
import Blog from '../component/Blog'
import action from '../action/index'
import logger from '../util/logger'
import marked from '../util/marked'
import coupleVar from '../store/coupleVar'
import controllersManager from './controllersManager'

const {
  MODIFY_INNERSTATE
} = action

const {
  commentController
} = controllersManager


let {
  commentUrl
} = coupleVar


class Controller {
  onCategoryClick(category) {
    browserHistory.push(`/${category}`)
  }

  onTagClick(tag) {
    browserHistory.push(`/tag/${tag}`)
  }

  onBlogLinkClick(blog) {
    browserHistory.push(`/blog/${blog.id}`)
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

        const detailCatalog = self.getDetailCatalogByDom()
        MODIFY_INNERSTATE('cacheDetailCatalog', detailCatalog)

        try {
          const defaultData = self.getDetailDefaultData()

          commentUrl = defaultData.commentUrl

          if (commentUrl) {
            commentController.updateCacheDetailComments(commentUrl)

            const cacheDetailCommentIssueUrl = commentUrl.replace('api.github.com', 'github.com').replace('repos/', '').replace('/comments', '')
            MODIFY_INNERSTATE('cacheDetailCommentIssueUrl', cacheDetailCommentIssueUrl)
          }
        } catch (e) {
          console.log(e)
        }


        self.scrollToTop()
      })
  }

  getDetailCatalogByDom() {
    try {
      return JSON.parse(document.getElementById('detailCatalogData').innerText)
    } catch (e) {
      return null
    }
  }

  getDetailDefaultData() {
    try {
      return JSON.parse(document.getElementById('ts_data').innerText)
    } catch (e) {
      return {}
    }
  }

  resolveUrl() {
    const Url = new URL(window.location.href)
    const param = Url.searchParams.get('p')
    if (param) {
      browserHistory.push(param)
    }
  }

  getState() {
    return window.getState()
  }

  marked(unmarkedContent) {
    return marked(unmarkedContent)
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
            <Blog history={history} />
          </Provider>,
          document.getElementById('app')
        )
      })
  }
}


export default new Controller()