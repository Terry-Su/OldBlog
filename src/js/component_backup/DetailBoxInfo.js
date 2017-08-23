import React from 'react'
import {
  Tag
} from 'antd'


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
          tags.length > 0 &&
          <div>
            {
              tags.map((tag, index) => {
                return <span style={{
                  textAlign: 'right',
                  display: 'inline-block',
                }} key={index}>
                  <Tag color="#108ee9">
                    {tag}
                  </Tag>
                </span>
              })
            }
          </div>
        }
      </div>

      <div style={{
        padding: '5px 0 5px 0'
      }}>
        <b>创建时间： </b>
        <span>{createTime}</span>
      </div>



      <div style={{
        padding: '5px 0 5px 0'
      }}>
        <b>转载说明：</b>
        <span>{repostNotice}</span>
      </div>
    </div>
  )
}