import React from 'react'
import {
  Link,
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'
import { connect } from 'react-redux'

import controller from '../controller/index'

import HomePage from './HomePage'
import ListPage from './ListPage'
import TagPage from './TagPage'
import DetailPage from './DetailPage'
import LaboratoryPage from './LaboratoryPage'


class Blog extends React.Component {
  componentDidMount() {
    const { resolveUrl } = this.props
    resolveUrl()
  }
  render() {
    const { history, catalog, tags, blogs, cacheDetail } = this.props
    return (
      <Router history={history}>
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
    )
  }
}

export default connect(
  (state, ownProps) => {
    const { blog, innerState } = state
    const { catalog, tags, blogs } = blog
    return {
      catalog,
      tags,
      blogs
    }
  },
  (dispatch, ownProps) => {
    return {
      resolveUrl() {
        controller.resolveUrl()
      }
    }
  }
)(Blog)