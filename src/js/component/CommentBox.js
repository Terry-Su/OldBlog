import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import controller from '../controller/index'



class CommentBox extends React.Component {
  render() {
    const {
      commentInfos,
      detailCommentIssueUrl,
    } = this.props
    const issue = commentInfos && commentInfos.length > 0 && commentInfos[0].issue

    return (
      <div>
        {
          detailCommentIssueUrl && (
            <h3>
              Want to leave a comment? Visit <a href={detailCommentIssueUrl} >this post's issue page</a> on GitHub (you'll need a GitHub account).
            </h3>
          )
        }

        {
          commentInfos && commentInfos.map((commentInfo, index) => {
            const {
              userName,
              userHome,
              avatarSrc,
              content,
              createTime
            } = commentInfo
            return (
              <div key={index}>
                <img src={avatarSrc} width={100} height={100} />
                <span>
                  <div>
                    <b>
                      <a href={userHome}>{userName}</a>
                    </b>
                    <span>commented on {moment(createTime).format()} • edited</span>
                  </div>
                  <div className="ts_comment" dangerouslySetInnerHTML={{
                    __html: content
                  }}>
                  </div>
                </span>
              </div>
            )

          })
        }

      </div>
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
      detailCommentIssueUrl
    }
  },
  (dispatch, ownProps) => {
    return {

    }
  }
)(CommentBox)