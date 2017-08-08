import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import BreadcrumbContainer from '../container/BreadcrumbContainer'
import DetailBoxContainer from '../container/DetailBoxContainer'
import Copyright from './Copyright'

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

      <br /><br /><br />
      <Copyright />
    </div>
  )
}