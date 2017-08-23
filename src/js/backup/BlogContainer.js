import React from 'react'
import { connect } from 'react-redux'
import controller from '../controller/index'

import Blog from '../component/Blog'

const mapStateToProps = (state, ownProps) => {
  const { blog, innerState } = state
  const { catalog, tags, blogs } = blog
  return {
    catalog,
    tags,
    blogs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resolveUrl() {
      controller.resolveUrl()
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog)