
import React, { Component } from 'react'

import { withTheme } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'

import AWrapper from './AWrapper'


class LangSwitch extends Component {
  render() {
    const {
      theme,
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
        children={
          '中文'
        }
      />
    )
  }
}

export default withTheme(LangSwitch)

