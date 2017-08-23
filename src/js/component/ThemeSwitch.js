import React, { Component } from 'react'

import { connect } from 'react-redux'

import controller from '../controller/index'

import { themes } from '../store/initialState'

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
      langThemeName,
      lang
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
      >
        {langThemeName}
      </AWrapper>
    )
  }
}

export default connect(
  (state, ownProps) => {
    const {
      theme: themeName,
      lang
    } = state.innerState

    const langThemeName = getLangThemeName({
      themes,
      themeName,
      lang,
    })

    return {
      langThemeName,
      lang,
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


function getLangThemeName({
  themes,
  themeName,
  lang,
}) {
  switch (themes.indexOf(themeName)) {
    case 0:
      return ({
        zh: `春`,
        en: themeName,
      })[lang]
    case 1:
      return ({
        zh: `夏`,
        en: themeName,
      })[lang]
    case 2:
      return ({
        zh: `秋`,
        en: themeName,
      })[lang]
    case 3:
      return ({
        zh: `冬`,
        en: themeName,
      })[lang]
    default:
      return ''
  }
}
