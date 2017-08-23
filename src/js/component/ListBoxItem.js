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
    <Paper style={{
      background: 'none'
    }}>
      <Typography type="headline" component="h3" style={{
        padding: '10px 0',
        color: theme.listBox.titleColor
      }} onClick={onClick}>
       {blog.title}
      </Typography>
      <Typography type="caption" component="p" style={{
        color: theme.listBox.color
      }}>
        {blog.abstract}
      </Typography>
    </Paper>
  )
}


export default withTheme(ListBoxItem)