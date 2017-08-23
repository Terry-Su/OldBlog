
import React, { Component } from 'react'

import { connect } from 'react-redux'

import controller from '../controller/index'

import { withTheme } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'

import AWrapper from './AWrapper'


class LangSwitch extends Component {
  onBtnClick = () => {
    this.props.onBtnClick()
  }
  render() {
    const {
      theme,
      lang
    } = this.props

    const { tag: themeTag } = theme

    return (
      <AWrapper 
        defaultColor={theme.langSwitch.defaultColor}
        hoverColor={theme.langSwitch.hoverColor}
        style={{
          display: 'inline-block',
          fontSize: '14px',
          textDecoration: 'none'
        }}
        onClick={this.onBtnClick}
      >
      {
        lang === 'zh' && 'En'
      }
      {
        lang === 'en' && '中文'
      }
      </AWrapper>
    )
  }
}

export default connect(
  (state, ownProps) => {
    return {
      lang: state.innerState.lang
    }
  },
  (dispatch, ownProps) => {
    return {
      onBtnClick() {
        controller.onLangBtnClick()
      }
    } 
  }
)(withTheme(LangSwitch))
