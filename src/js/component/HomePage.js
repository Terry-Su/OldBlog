import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import Catalog from './Catalog'
import NewestColumn from './NewestColumn'
import Notion from './Notion'
import Copyright from './Copyright'

const {
  Content
} = Layout


export default function HomePage() {
  return (
    <div>
      <br />
      <Notion />
      <br /><br /><br />
      <Content>
        <Row type="flex" gutter={1} justify={'center'}>
          <Col xs={0} sm={1}/>
          <Col xs={20} sm={8}>
            <NewestColumn />
          </Col>
          <Col xs={0} sm={2}/>
          <Col xs={20} sm={6}>
            <br />
            <Catalog />
          </Col>
          <Col xs={0} sm={1}/>
        </Row>
      </Content>
      <br /><br /><br />
      <Copyright />
    </div>
  )
}