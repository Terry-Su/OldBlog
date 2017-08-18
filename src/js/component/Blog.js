import React from 'react'
import {
  Link,
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'

import HomePage from './HomePage'
import ListPage from './ListPage'
import TagPage from './TagPage'
import DetailPageContainer from '../container/DetailPageContainer'
import LaboratoryPage from './LaboratoryPage'


export default class Blog extends React.Component {
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
          <Route path="/detail" component={DetailPageContainer} />
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
              const targetDetailPage = () => <DetailPageContainer blog={blog} />
              return <Route key={index} path={`/blog/${blog.id}`} component={targetDetailPage} />
            })
          }
        </div>
      </Router>
    )
  }
}