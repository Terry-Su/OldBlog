import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as actions from '../action/index'
import controller from '../controller/index'

import DetailPage from '../component/DetailPage'

const mapStateToProps = (state, ownProps) => {
  
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDetailPageDidMount(blog) {
      controller.onDetailPageDidMount(blog)
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)