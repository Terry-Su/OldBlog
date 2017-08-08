import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as actions from '../action/index'
import controller from '../controller/index'

import Breadcrumb from '../component/Breadcrumb'

const mapStateToProps = (state, ownProps) => {
  const {
    route,
    routeInfo
  } = state

  const {
    category,
    tag,
    listMode,
    blog
  } = routeInfo

  let link = {}

  // list
  // category
  link['second'] = {
    text: category || blog.category,
    listMode
  }
  // tag
  listMode === 1 && (link['second'] = {
    text: tag,
    listMode
  })

  // detail
  if (route === 2) {
    link['third'] = {
      blog: blog
    }
  }

  return {
    link,
    route: state.route
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