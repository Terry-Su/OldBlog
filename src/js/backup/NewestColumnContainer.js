import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { bindActionCreators } from 'redux'
import * as actions from '../action/index'
import controller from '../controller/index'

import NewestColumn from '../component/NewestColumn'

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.blog.NewestColumnTitle,
    blogs: state.blog.blogs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTitleClick(blog) {
      controller.onBlogLinkClick(blog)
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(NewestColumn)