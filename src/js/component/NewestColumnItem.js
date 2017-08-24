import React, { Component } from 'react'
import { connect } from 'react-redux'

import formatDate from '../util/date/formatDate'

import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { withTheme } from 'material-ui/styles'


class NewestColumnItem extends Component {
  render() {
    const {
      blog,
      onTitleClick,
      theme
    } = this.props

    return (
      <ListItem onClick={() => { onTitleClick(blog) }}>
        <Grid container>
          <Grid item xs={4} style={{
            textAlign: 'center',
          }}>
            <a style={{
              color: theme.newestColumn.timeColor
            }}>
              <Hidden only={['sm', 'xs']}>
                <span>{
                  `${
                    formatDate(new Date(blog.createTime), 'yyyy')
                  }/`
                }</span>
              </Hidden>
              {formatDate(new Date(blog.createTime), 'MM/dd')}
            </a>
          </Grid>
          <Grid item xs={8}>
            <a style={{
              color: theme.newestColumn.color
            }}>
              {blog.title}
            </a>
          </Grid>
        </Grid>
      </ListItem>
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

    }
  }
)(withTheme(NewestColumnItem))