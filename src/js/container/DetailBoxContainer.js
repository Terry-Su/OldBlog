import React from 'react'
import { connect } from 'react-redux'
import controller from '../controller/index'
import DetailBox from '../component/DetailBox'

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



export default connect(mapStateToProps, mapDispatchToProps)(DetailBox)