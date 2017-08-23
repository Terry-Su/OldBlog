import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import {
  Avatar
} from 'antd'


class BackToTop extends React.Component {
  onBackToTopClick = (e) => {
    this.props.onBackToTopClick()
  }

  render() {
    return (
      <div>
        <Avatar size="large" icon="to-top" style={{
          color: 'white',
          background: '#50aef2'
        }} onClick={this.onBackToTopClick} />
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
)(BackToTop)