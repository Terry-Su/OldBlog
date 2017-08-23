import React, { Component } from 'react'

import { connect } from 'react-redux'

import controller from '../controller/index'

import { withTheme } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'

import AWrapper from './AWrapper'

class ThemeSwitch extends Component {
  onBtnClick = () => {
    this.props.onBtnClick()
  }
  render() {
    const {
      theme,
      themeName
    } = this.props

    const { tag: themeTag } = theme

    return (
      <AWrapper
        href='javascript:void(0)'
        defaultColor={theme.themeSwitch.defaultColor}
        hoverColor={theme.themeSwitch.hoverColor}
        style={{
          display: 'inline-block',
          fontSize: '14px',
          textDecoration: 'none'
        }}
        onClick={this.onBtnClick}
        children={
          themeName
        }
      />
    )
  }
}

export default connect(
  (state, ownProps) => {
    return {
      themeName: state.innerState.theme
    }
  },
  (dispatch, ownProps) => {
    return {
      onBtnClick() {
        controller.onThemeBtnClick()
      }
    }
  }
)(withTheme(ThemeSwitch))


