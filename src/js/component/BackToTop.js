import React from 'react'
import {  
  Avatar
} from 'antd'


export default class BackToTop extends React.Component {
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