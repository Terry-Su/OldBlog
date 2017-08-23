import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as actions from '../action/index'
import controller from '../controller/index'

import Breadcrumb from '../component/Breadcrumb'

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onHomeClick() {
      controller.onHomeClick()
    },

    onSecondClick(info) {
      controller.onSecondClick(info)
    },

    onThirdClick(info) {
      controller.onThirdClick(info)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb)