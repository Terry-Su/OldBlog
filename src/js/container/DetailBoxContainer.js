import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { bindActionCreators } from 'redux'
import * as actions from '../action/index'
import { FETCH_BLOG_DETAIL } from '../model/index'

import DetailBox from '../component/DetailBox'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {

  return {

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DetailBox)