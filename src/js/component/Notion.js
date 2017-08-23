import React from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'

import controller from '../controller/index'


function Notion({ 
  blogTitle,
  lang 
}) {
  return (
    <div>
      <Paper style={{
        background: 'none',
        padding: '1em 0 0 3em'
      }}>
        <h1 style={{
          color: 'black'
        }}>
          {
            ({
              zh: `Terry Su的博客`,
              en: `Terry Su's Blog`,
            })[lang]
          }
        </h1>
      </Paper>
    </div>

  )
}


export default connect(
  (state, ownProps) => {
    return {
      blogTitle: state.blog.blogTitle,
      lang: state.innerState.lang,
    }
  },
  (dispatch, ownProps) => {
    return {

    }
  }
)(Notion)