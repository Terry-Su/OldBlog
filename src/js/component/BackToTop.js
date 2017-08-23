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
      theme,
      lang,
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
          onClick={this.onBackToTopClick}
          children={
            <span >
              {
                ({
                  zh: `返回顶部`,
                  en: `Back To Top`,
                })[lang]
              }
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
      lang: state.innerState.lang,
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