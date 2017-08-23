import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import Tag from './Tag'

function DetailBoxAddition({
  createTime,
  tags,
  repostNotice,
  lang,
}) {
  return (
    <div style={{
      textAlign: 'right',
      paddingTop: '20px',
      fontSize: '14px'
    }}>
      <div style={{
        padding: '5px 0 5px 0'
      }}>
        {
          tags && tags.map((tag, index) => <Tag key={index} active children={tag} />)
        }
      </div>

      <div style={{
        padding: '5px 0 5px 0'
      }}>
        <b>
          {
            ({
              zh: `创建时间：`,
              en: `Created Time:`,
            })[lang]
          }&nbsp;&nbsp;</b>
        <span>{createTime}</span>
      </div>

      <div style={{
        padding: '5px 0 5px 0'
      }}>
        <b>
          {
            ({
              zh: `转载说明：`,
              en: `Reprinting Note:`,
            })[lang]
          }
          &nbsp;&nbsp;</b>
        <span>
          {
            ({
              zh: `本文为原创文章，转载请注明出处`,
              en: `This article is original, reprint please indicate the source`,
            })[lang]
          }
        </span>
        {/* 本文为原创文章，转载请注明出处 */}
      </div>
    </div>
  )
}


export default connect(
  (state, ownProps) => {
    return {
      lang: state.innerState.lang,
    }
  },
  (dispatch, ownProps) => {
    return {

    }
  }
)(DetailBoxAddition)