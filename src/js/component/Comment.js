import React, { Component } from 'react'

import marked from '../util/marked'
import formatDate from '../util/date/formatDate'

import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'

import { withTheme } from 'material-ui/styles'


class Comment extends Component {
  render() {
    const {
      theme,
      commentInfo
    } = this.props

    const {
      userName,
      userHome,
      avatarSrc,
      content,
      createTime
    } = commentInfo

    return (
      <div style={{
        padding: '0 0 0.5em 0',
        border: `1px solid ${theme.comment.borderColor}`,
        borderRadius: '5px'
      }}>
        <Card style={{
          background: 'none'
        }}>
          <CardHeader
            avatar={
              <Avatar src='https://avatars2.githubusercontent.com/u/23733477?v=4' />
            }
            title={userName}
            subheader={`commented on ${
              formatDate(new Date(createTime), 'yyyy/MM/dd HH:mm')
            }`}
          >
          </CardHeader>
          <div
            className="ts_comment"
            style={{
              paddingLeft: '2em'
            }}
            dangerouslySetInnerHTML={{
              __html: marked(content)
            }} />
        </Card>
      </div>
    )
  }
}


export default withTheme(Comment)