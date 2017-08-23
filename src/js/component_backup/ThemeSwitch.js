import React, { Component } from 'react'

import { withTheme } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'

import AWrapper from './AWrapper'

class ThemeSwitch extends Component {
  render() {
    const {
      theme,
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
        children={
          'Spring'
        }
      />
    )
  }
}

export default withTheme(ThemeSwitch)

