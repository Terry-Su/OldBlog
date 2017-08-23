import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import {
  Layout
} from 'antd'

const {
  Header
} = Layout

function Notion( {blogTitle} ) {
  return (
    <div>
      <Header style={{
        backgroundColor: 'white'
      }}>
        <h1 style={{
          color: 'black'
        }}>
          { blogTitle }
        </h1>
      </Header>
    </div>
  )
}


export default connect(
  (state, ownProps) => {
    return {
      blogTitle: state.blog.blogTitle
    }
  },
  (dispatch, ownProps) => {
    return {

    }
  }
)(Notion)