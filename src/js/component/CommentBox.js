import React from 'react'
import { connect } from 'react-redux'

import { withTheme } from 'material-ui/styles'

import controller from '../controller/index'

import Comment from './Comment'


class CommentBox extends React.Component {
  render() {
    const {
      commentInfos,
      detailCommentIssueUrl,
      lang,
    } = this.props
    const issue = commentInfos && commentInfos.length > 0 && commentInfos[0].issue

    return (
      <div>
        <h3 style={{
          paddingBottom: '1em',
          fontSize: '16px'
        }}>
          {
            ({
              zh: `想要评论？ 访问`,
              en: `Want to leave a comment? Visit `,
            })[lang]
          }
          {
            ({
              zh:
              <span>
                在Github上
                <a href={detailCommentIssueUrl}>
                  此博客的评论话题
                </a>
                （需登陆Github）
              </span>,
              en:
              <span>
                <a href={detailCommentIssueUrl}>
                  this post's issue page
                </a>
                &nbsp;on GitHub (you'll need a GitHub account)
              </span>,
            })[lang]
          }
        </h3>

        {
          commentInfos && commentInfos.map((commentInfo, i) => (
            <div key={i} style={{
              margin: '0 0 2em 0'
            }}>
              <Comment key={i} commentInfo={commentInfo} />
            </div>
          ))
        }

      </div >
    )
  }
}


export default connect(
  (state, ownProps) => {
    let commentInfos = []
    const {
      cacheDetailComments,
      cacheDetailCommentIssueUrl: detailCommentIssueUrl,
     } = state.innerState

    cacheDetailComments && cacheDetailComments.map(cacheDetailComment => {
      const {
        issue_url: issue,
        user: userInfo,
        body: unmarkedContent,
        created_at: createTime
      } = cacheDetailComment

      const {
        login: userName,
        html_url: userHome,
        avatar_url: avatarSrc
      } = userInfo

      const content = controller.marked(unmarkedContent)

      commentInfos.push({
        issue,
        userName,
        userHome,
        avatarSrc,
        content,
        createTime
      })
    })

    return {
      commentInfos,
      detailCommentIssueUrl,
      lang: state.innerState.lang,
    }
  },
  (dispatch, ownProps) => {
    return {

    }
  }
)(withTheme(CommentBox))