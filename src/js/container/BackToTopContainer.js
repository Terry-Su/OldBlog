import React from 'react'
import { connect } from 'react-redux'

import BackToTop from '../component/BackToTop'
import controller from '../controller/index'


function mapDispatchToProps(dispatch) {
  return {
    onBackToTopClick() {
      controller.scrollToTop()
    }
  }
}


export default connect(null, mapDispatchToProps)(BackToTop)