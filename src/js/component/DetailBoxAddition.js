import React from 'react'

import Tag from './Tag'

export default function DetailBoxInfo({ createTime, tags, repostNotice }) {
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
        <b>Created Time:&nbsp;&nbsp;</b>
        <span>{createTime}</span>
      </div>

      <div style={{
        padding: '5px 0 5px 0'
      }}>
        <b>Reprinting Note:&nbsp;&nbsp;</b>
        <span>
          {repostNotice}
        </span>
        {/* 本文为原创文章，转载请注明出处 */}
      </div>
    </div>
  )
}