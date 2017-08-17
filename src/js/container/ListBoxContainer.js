import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as actions from '../action/index'
import { FETCH_BLOG_DETAIL } from '../model/index'
import controller from '../controller/index'

import ListBox from '../component/ListBox'

const mapStateToProps = (state, ownProps) => {
  let blogs = state.blog.blogs
  const { category, isCategory, tag, isTag } = ownProps
  // filter blogs
  blogs = blogs.filter(blog => {
    if (isCategory) {
      return blog.category === category
    }
    if (isTag) {
      return blog.tags && blog.tags.some(theTag => theTag === tag)
    }
    return false
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