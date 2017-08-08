import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as actions from '../action/index'
import { FETCH_BLOG_DETAIL } from '../model/index'
import controller from '../controller/index'

import ListBox from '../component/ListBox'

const mapStateToProps = (state, ownProps) => {
  const {
    tag,
    category,
    listMode
  } = state.routeInfo

  let blogs = state.blogs.filter(blog => {
    // only show category
    if (listMode === 0) {
      return blog.category === category
    }
    // only show tag
    if (listMode === 1) {
      return blog.tags.indexOf(tag) > -1
    }
  })

  return {
    blogs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onItemClick(blog) {
      controller.onBlogLinkClick({
        blog
      })
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListBox)