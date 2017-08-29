import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'

import { getBlogReducer, getTotalReducer } from '../reducer/index'
import innerStateReducer from '../reducer/innerState'

import {
  FETCH_BLOG_DATA,
  FETCH_BLOG_DETAIL,
} from '../model/index'

import Blog from '../component/Blog'

import action from '../action/index'

import { getTheme } from '../selector/index'

import marked from '../util/marked'
import logger from '../util/reduxMiddleware/logger'
import setStateToLocalStore from '../util/reduxMiddleware/setStateToLocalStore'

import coupleVar from '../store/coupleVar'

import { baseUrl } from 'initialState'

import exportGlobal from '../global/exportGlobal'


import controllersManager from './controllersManager'

const {
  MODIFY_INNERSTATE
} = action

const {
  commentController,
  styleController,
  langController
} = controllersManager

const {
  updateCacheDetailComments
} = commentController

const {
  updateBodyBackGroundColor,
  autoSwitchTheme
} = styleController


const {
  autoSwitchLang
} = langController

let {
  commentUrl
} = coupleVar


class Controller {
  onCategoryClick(category) {
    browserHistory.push(`${baseUrl}/${category}`)
    this.scrollToTop()
  }

  onTagClick(tag) {
    browserHistory.push(`${baseUrl}/tag/${tag}`)
    this.scrollToTop()
  }

  onBlogLinkClick(blog) {
    browserHistory.push(`${baseUrl}/blog/${blog.id}`)
    this.scrollToTop()
  }

  onSecondClick({
    blog
  }) {
    this.onCategoryClick(blog.category)
    this.scrollToTop()
  }

  onHomeClick() {
    browserHistory.push(`${baseUrl}`)
    this.scrollToTop()
  }

  onThemeBtnClick() {
    autoSwitchTheme()
  }

  onLangBtnClick() {
    autoSwitchLang()
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
            updateCacheDetailComments(commentUrl)

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
    try {
      const param = Url.searchParams.get('p')
      if (param) {
        browserHistory.push(param)
      }
    } catch (e) {
      console.log(e)
    }
  }

  updateBodyBackGroundColor(backgroundColor) {
    updateBodyBackGroundColor(backgroundColor)
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

        const reducer = getTotalReducer({
          innerState: innerStateReducer,
          blog: blogReducer,
        })

        const ReduxStore = createStore(reducer, applyMiddleware(thunkMiddleware, setStateToLocalStore))

        const getState = () => ReduxStore.getState()

        // export global varibles
        exportGlobal({
          ReduxStore,
          getState,
        })

        render(
          <Provider store={ReduxStore}>
            <Blog />
          </Provider>,
          document.getElementById('app')
        )


      })
  }
}


export default new Controller()