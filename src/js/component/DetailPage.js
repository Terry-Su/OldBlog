import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import BreadcrumbContainer from '../container/BreadcrumbContainer'
import DetailBoxContainer from '../container/DetailBoxContainer'
import Copyright from './Copyright'
import BackToTopContainer from '../container/BackToTopContainer'

const {
  Header
} = Layout

export default function DetailPage() {
  return (
    <div>
      <br />
      <Row type='flex' justify='center'>
        <Col xs={1} sm={1} />
        <Col xs={23} sm={23}>
          <BreadcrumbContainer />
        </Col>
      </Row>
      <br /><br />
      <Row type='flex' justify='center'>
        <Col xs={23} sm={18}>
          <DetailBoxContainer/>
        </Col>
      </Row>
      <Row style={{
        paddingTop: '50px'
      }}>
        <Col span={22} style={{
          textAlign: 'right'
        }}>
          <BackToTopContainer />
        </Col>
        <Col xs={1} sm={1}></Col>
      </Row>
      <Copyright />
    </div>
  )
}