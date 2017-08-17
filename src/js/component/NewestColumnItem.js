import React from 'react'
import moment from 'moment'
import {
  Col,
  Row
} from 'antd'

export default function NewestColumnItem({ blog, onClick }) {
  return (
    <div style={{
      padding: '10px 0 10px 0'
    }} onClick={onClick}>

      <Row>
        <Col xs={24} sm={0} style={{
          textAlign: 'center'
        }}>
          <a href="javascript:void(0)">
            <h3 style={{
              display: 'inline',
            }}>{blog.title}</h3>
          </a>
        </Col>
      </Row>
      <Row>
        <Col xs={0} sm={24}>
          <a href="javascript:void(0)">
            <span style={{
              paddingLeft: '20px',
              color: '#555'
            }}>{moment(blog.createTime).format('YYYY/MM/DD')}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h3 style={{
              display: 'inline',
            }}>{blog.title}</h3>
          </a>
        </Col>
      </Row>

    </div>
  )
}