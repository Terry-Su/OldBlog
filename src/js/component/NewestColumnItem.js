import React from 'react'
import moment from 'moment'


export default function NewestColumnItem({ blog, onClick }) {
  return (
    <div style={{
      padding: '10px 0 10px 0'
    }} onClick={onClick}>
      <a href="javascript:">
        <span style={{
          paddingLeft: '20px',
          color: '#555'
        }}>{moment(blog.createTime).format('YYYY/MM/DD')}</span>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <h3 style={{
          display: 'inline',
        }}>{blog.title}</h3>
      </a>
    </div>
  )
}