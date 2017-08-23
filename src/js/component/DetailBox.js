import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import {
  Col,
  Row
} from 'antd'
import DetailBoxContentContainer from './DetailBoxContentContainer'
import DetailBoxInfo from './DetailBoxInfo'

class DetailBox extends React.Component {
  render() {
    const { blog, cacheDetail } = this.props
    const {
      title,
      createTime,
      tags,
      repostNotice
    } = blog

    return (
      <div id="detail">
        <h1 id='blog_title' style={{
          textAlign: 'center'
        }}>{title}</h1>
        <br />
        <DetailBoxContentContainer content={cacheDetail} />
        <br />
        <Row type='flex' justify='center'>
          <Col xs={23} sm={23}>
            <DetailBoxInfo createTime={createTime} tags={tags || []} repostNotice={repostNotice} />
          </Col>
        </Row>

      </div>
    )
  }

}


export default connect(
  (state, ownProps) => {
    const { innerState } = state
    const { cacheDetail } = innerState
    return {
      cacheDetail
    }
  },
  (dispatch, ownProps) => {
    return {

    }
  }
)(DetailBox)