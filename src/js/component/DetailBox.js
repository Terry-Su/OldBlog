import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import DetailBoxContentContainer from './DetailBoxContentContainer'
import DetailBoxAddition from './DetailBoxAddition'

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
        <h1
          id='blog_title'
          style={{
            textAlign: 'center',
            padding: '1em 0 0.5em 0'
          }}
          children={title}
        />

        <DetailBoxContentContainer content={cacheDetail} />

        <div
          style={{
            padding: '2em 0 0 0'
          }}
          children={
            <DetailBoxAddition createTime={createTime} tags={tags || []} repostNotice={repostNotice} />
          }
        />

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