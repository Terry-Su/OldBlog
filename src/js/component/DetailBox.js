import React from 'react'
import {
  Col,
  Row
} from 'antd'
import DetailBoxContent from './DetailBoxContent'
import DetailBoxInfo from './DetailBoxInfo'

export default function DetailBox({ blog, cacheDetail }) {
  const {
    title,
    createTime,
    tags,
    repostNotice
  } = blog

  return (
    <div id="detail">
      <h1 id='blog_title' style={{
        textAlign: 'center'
      }}>{ title }</h1>
      <br />
      <DetailBoxContent content={cacheDetail}/>
      <br />
      <Row type='flex' justify='center'>
        <Col xs={23} sm={23}>
          <DetailBoxInfo createTime={createTime} tags={tags || []} repostNotice={repostNotice}/>
        </Col>
      </Row>

    </div>
  )
}