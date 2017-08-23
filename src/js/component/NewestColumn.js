import React from 'react'
import { connect } from 'react-redux'


import controller from '../controller/index'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { withTheme } from 'material-ui/styles'

import NewestColumnItem from './NewestColumnItem'


function NewestColumn({
  blogs,
  onTitleClick,
  theme,
  lang,
 }) {
  return (
    <div>
      <Paper style={{
        background: 'none'
      }}>
        <div
          style={{
            textAlign: 'center',
            padding: '1em 0 1em 0',
            borderBottom: `1px solid ${theme.newestColumn.lineColor}`,
          }}>
          <Typography type='title' style={{
            color: theme.newestColumn.titleColor
          }} >
            {
              ({
              zh: `最新博客`,
              en: `The newest blogs`,
            })[lang]
            }
        </Typography>
        </div>

        <div
          style={{
            padding: '1em 0 0 0'
          }}
          children={
            <List>
              {
                blogs.map((blog, i) => (
                  <NewestColumnItem key={i} blog={blog} onTitleClick={onTitleClick} >
                  </NewestColumnItem>
                ))
              }
            </List>
          }
        />
      </Paper>
    </div>
  )
}


export default connect(
  (state, ownProps) => {
    const {
      blogs
    } = state.blog
    const sortedBlogs = blogs.slice(0, 5)
    return {
      title: state.blog.NewestColumnTitle,
      blogs: sortedBlogs,
      lang: state.innerState.lang,
    }
  },
  (dispatch, ownProps) => {
    return {
      onTitleClick(blog) {
        controller.onBlogLinkClick(blog)
      }
    }
  }
)(withTheme(NewestColumn))