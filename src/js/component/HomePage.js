import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import CatalogContainer from '../container/CatalogContainer'
import NewestColumnContainer from '../container/NewestColumnContainer'
import NotionContainer from '../container/NotionContainer'
import Copyright from './Copyright'

const {
  Content
} = Layout


export default function HomePage() {
  return (
    <div>
      <br />
      <NotionContainer />
      <br /><br /><br />
      <Content>
        <Row type="flex" gutter={1} justify={'center'}>
          <Col xs={0} sm={1}/>
          <Col xs={20} sm={8}>
            <NewestColumnContainer />
          </Col>
          <Col xs={0} sm={2}/>
          <Col xs={20} sm={6}>
            <br />
            <CatalogContainer />
          </Col>
          <Col xs={0} sm={1}/>
        </Row>
      </Content>
      <br /><br /><br />
      <Copyright />
    </div>
  )
}