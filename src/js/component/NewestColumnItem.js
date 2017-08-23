import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

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
                <span>{moment(blog.createTime).format('YYYY/')}</span>
              </Hidden>
              {moment(blog.createTime).format('MM/DD')}
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