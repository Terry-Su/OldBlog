import React, { Component } from 'react'

import { connect } from 'react-redux'

import controller from '../controller/index'

import { getThemeSetting } from '../style/theme'


class UpdateBodyBackGroundColor extends Component {
  componentDidMount() {
    const {
      updateBodyBackGroundColor,
      themeSetting
    } = this.props

    updateBodyBackGroundColor(themeSetting.backgroundColor)
  }

  render() {
    return (
      <div
        style={{
          display: 'none'
        }}
      >
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const { theme } = state.innerState
    return {
      themeSetting: getThemeSetting(theme)
    }
  },
  (dispatch, ownProps) => {
    return {
      updateBodyBackGroundColor(backgroundColor) {
        controller.updateBodyBackGroundColor(backgroundColor)
      }
    }
  }
)(UpdateBodyBackGroundColor)
