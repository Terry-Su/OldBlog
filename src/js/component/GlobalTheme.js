import React, { Component } from 'react'
import { connect } from 'react-redux'

import Typography from 'material-ui/Typography'
import { withTheme, MuiThemeProvider } from 'material-ui/styles'

import controller from '../controller/index'
import { getThemeSetting } from '../style/theme'



class GlobalTheme extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      themeSetting,
      children
    } = this.props

    return (
      <MuiThemeProvider theme={themeSetting}>
        {children}
      </MuiThemeProvider>
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
    }
  }
)(withTheme(GlobalTheme))
