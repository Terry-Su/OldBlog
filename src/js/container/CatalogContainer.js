import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import * as actions from '../action/index'
import controller from '../controller/index'
import Catalog from '../component/Catalog'


const mapStateToProps = (state, ownProps) => {
  return {
    catalog: state.blog.catalog
  }
}

const mapDispatchToProps = dispatch => {

  return {
    onCategoryClick(category) {
      controller.onCategoryClick(category)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Catalog)