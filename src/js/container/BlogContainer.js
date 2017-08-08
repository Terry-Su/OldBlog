import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import Blog from '../component/Blog'

const mapStateToProps = (state, ownProps) => {
  return {
    route: state.route,
  }
}



export default connect(mapStateToProps, null)(Blog)