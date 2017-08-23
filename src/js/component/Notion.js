import React from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'

import controller from '../controller/index'


function Notion({ blogTitle }) {
  return (
    <div>
      <Paper style={{
        background: 'none',
        padding: '1em 0 0 3em'
      }}>
        <h1 style={{
          color: 'black'
        }}>
          {blogTitle}
        </h1>
      </Paper>
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