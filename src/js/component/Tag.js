import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chip from 'material-ui/Chip'
import Button from 'material-ui/Button'
import { withTheme } from 'material-ui/styles'




class Tag extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      children,
      theme,
      active,
      onClick
    } = this.props

    const { tag: themeTag } = theme

    return (
      <a
        onClick={onClick}
        style={{
          display: 'inline-block',
          padding: '0.5em'
        }}
        children={
          <span children={children} style={{
            color: !active ? themeTag.color : themeTag.activeColor,
            backgroundColor: !active ? themeTag.backgroundColor : themeTag.activeBackgroundColor,
            display: 'inline-block',
            padding: '0.3em 1.2em',
            borderRadius: '0.5em',
            fontSize: '12px',
          }} />
        }
      />
    )
  }
}

export default withTheme(Tag)

