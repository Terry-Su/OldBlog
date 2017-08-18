import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as actions from '../action/index'
import controller from '../controller/index'

import DetailCatalog from '../component/DetailCatalog'

const mapStateToProps = (state, ownProps) => {
  
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DetailCatalog)