import React from 'react'
import { connect } from 'react-redux'

import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { withTheme } from 'material-ui/styles'

import controller from '../controller/index'




function Breadcrumb({
  blog,
  isBlogDetail,
  onHomeClick,
  onSecondClick,
  theme
}) {
  const second = {
    blog
  }
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <Typography
            onClick={onHomeClick}
            style={{
              display: 'inline-block',
            }} type='body2'>
            <a href="javascript:void(0)" style={{
              color: theme.breadcrumb.color
            }}>
              Home
            </a>
          </Typography>

          {
            isBlogDetail && (
              <span>
                <Typography style={{
                  display: 'inline-block'
                }} type='caption'>&nbsp;&nbsp;/&nbsp;&nbsp;</Typography>
                <Typography style={{
                  display: 'inline-block',
                }} type='body2'>
                  <b>
                    <a href="javascript:void(0)" style={{
                      color: theme.breadcrumb.color
                    }}
                      onClick={() => onSecondClick(second)}>{second.blog.category}</a>
                  </b>
                </Typography>
              </span>
            )
          }



        </Grid>
      </Grid>
    </div >
  )
}

export default connect(
  (state, ownProps) => {
    return {
    }
  },
  (dispatch, ownProps) => {
    return {
      onHomeClick() {
        controller.onHomeClick()
      },

      onSecondClick(info) {
        controller.onSecondClick(info)
      },

      onThirdClick(info) {
        controller.onThirdClick(info)
      }
    }
  }
)(withTheme(Breadcrumb))