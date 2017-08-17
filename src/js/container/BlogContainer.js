import React from 'react'
import { connect } from 'react-redux'

import Blog from '../component/Blog'

const mapStateToProps = (state, ownProps) => {
  const { blog } = state
  const { catalog, tags, blogs } = blog
  return {
    catalog,
    tags,
    blogs
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog)