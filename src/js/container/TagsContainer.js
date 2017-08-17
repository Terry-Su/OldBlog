import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import * as actions from '../action/index'
import controller from '../controller/index'
import Tags from '../component/Tags'

const mapStateToProps = (state, ownProps) => {
  return {
    tags: state.blog.tags
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTagClick(tag) {
      controller.onTagClick(tag)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tags)