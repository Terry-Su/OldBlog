import React from 'react'
import { connect } from 'react-redux'
import controller from '../controller/index'
import DetailBoxContent from '../component/DetailBoxContent'

const mapStateToProps = (state, ownProps) => {
  const { innerState } = state
  const { cacheDetail } = innerState
  return {
    cacheDetail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DetailBoxContent)