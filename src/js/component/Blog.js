import React from 'react'
import {
  Link,
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'
import { connect } from 'react-redux'

import { withThem } from 'material-ui/styles';

import controller from '../controller/index'

import { getThemeSetting } from '../style/theme'

import withGlobalTheme from '../util/componentHelper/withGlobalTheme'


import HomePage from './HomePage'
import ListPage from './ListPage'
import TagPage from './TagPage'
import DetailPage from './DetailPage'
import LaboratoryPage from './LaboratoryPage'


class Blog extends React.Component {
  componentDidMount() {
    const {
      resolveUrl,
      updateBodyBackGroundColor,
      themeSetting
    } = this.props

    resolveUrl()
    updateBodyBackGroundColor(themeSetting.backgroundColor)
  }
  render() {
    const {
      history,
      catalog,
      tags,
      blogs,
      cacheDetail,
      themeSetting
    } = this.props

    return (
        <div>
          <Router history={browserHistory}>
            <div>
              <Route exact path="/" component={HomePage} ></Route>
              <Route path="/list" component={ListPage} />
              <Route path="/detail" component={DetailPage} />
              {
                // List page - category
                catalog.map((category, index) => {
                  const targetListPage = () => <ListPage category={category} />
                  return <Route key={index} path={`/${category}`} component={targetListPage} />
                })
              }
              {
                // Tag page - tag
                tags.map((tag, index) => {
                  const targetTagPage = () => <TagPage tag={tag} />
                  return <Route key={index} path={`/tag/${tag}`} component={targetTagPage} />
                })
              }
              {
                // Blog detail page
                blogs.map((blog, index) => {
                  const targetDetailPage = () => <DetailPage blog={blog} />
                  return <Route key={index} path={`/blog/${blog.id}`} component={targetDetailPage} />
                })
              }
            </div>
          </Router>
        </div>
    )
  }
}

export default withGlobalTheme(
  connect(
    (state, ownProps) => {
      const {
      blog,
        innerState
    } = state

      const {
      catalog,
        tags,
        blogs
    } = blog

      const {
      theme
    } = innerState

      return {
        catalog,
        tags,
        blogs,
        themeSetting: getThemeSetting(theme)
      }
    },
    (dispatch, ownProps) => {
      return {
        resolveUrl() {
          controller.resolveUrl()
        },

        updateBodyBackGroundColor(backgroundColor) {
          controller.updateBodyBackGroundColor(backgroundColor)
        }
      }
    }
  )(Blog)
)