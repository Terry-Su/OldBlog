import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import { githubUrl } from '../store/initialState'


import Grid from 'material-ui/Grid'



function AboutMe({
  githubUrl
}) {
  return (
    <Grid
      container
      justify='center'
      style={{
        paddingTop: '5em'
      }}
      children={
        <Grid item>
          <a href={githubUrl}>
            <img
              src='https://terry-su.github.io/Blog/public/images/gb-icon.png'
              width='30'
            />
          </a>
        </Grid>
      }
    />
  )
}


export default connect(
  (state, ownProps) => {
    return {
      githubUrl
    }
  },
  (dispatch, ownProps) => {
    return {

    }
  }
)(AboutMe)