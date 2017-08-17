import React from 'react'
import { connect } from 'react-redux'

import Notion from '../component/Notion'

const mapStateToProps = (state, ownProps) => {
  return {
    blogTitle: state.blog.blogTitle
  }
}



export default connect(mapStateToProps, null)(Notion)