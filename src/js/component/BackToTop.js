import React from 'react'
import { connect } from 'react-redux'

import Button from 'material-ui/Button'
import { withTheme } from 'material-ui/styles'

import controller from '../controller/index'



class BackToTop extends React.Component {
  onBackToTopClick = (e) => {
    this.props.onBackToTopClick()
  }

  render() {
    const {
      theme
    } = this.props

    return (
      <div>
        <Button
          disableRipple
          style={{
            color: theme.backToTop.color,
            background: 'none',
            padding: '1em',
          }}
          children={
            <span onClick={this.onBackToTopClick}>
              Back To Top
              </span>
          }
        />
      </div>
    )
  }
}


export default connect(
  (state, ownProps) => {
    return {
    }
  },
  (dispatch, ownProps) => {
    return {
      onBackToTopClick() {
        controller.scrollToTop()
      }
    }
  }
)(withTheme(BackToTop))