import React from 'react'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { withTheme } from 'material-ui/styles'


function ListBoxItem({
  blog,
  onClick,
  theme,
}) {
  return (
    <a onClick={onClick}>
      <Paper style={{
        background: 'none'
      }}>
        <Typography type="headline" component="h3" style={{
          padding: '10px 0',
          color: theme.listBox.titleColor
        }}>
          {blog.title}
        </Typography>
        <Typography type="caption" component="p" style={{
          color: theme.listBox.color
        }}>
          {blog.abstract}
        </Typography>
      </Paper>
    </a>
  )
}


export default withTheme(ListBoxItem)