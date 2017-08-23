import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import Breadcrumb from './Breadcrumb'
import DetailBox from './DetailBox'
import Copyright from './Copyright'

const {
  Header
} = Layout

export default function LaboratoryPage() {
  return (
    <div>
      <Header style={{
        backgroundColor: 'white'
      }}>
        <Breadcrumb />
      </Header>
      <Row type='flex' justify='center'>
        <Col xs={23} sm={12}>
          laboratory
        </Col>
      </Row>

      <br /><br /><br />
      <Copyright />
    </div>
  )
}