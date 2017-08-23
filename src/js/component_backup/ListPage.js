import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import Breadcrumb from './Breadcrumb'
import Catalog from './Catalog'
import ListBoxContainer from './ListBoxContainer'
import Copyright from './Copyright'


const {
  Header
} = Layout



export default function ListPage({ category }) {
  return (
    <div>
      <br />
      <Row type='flex' justify='center'>
        <Col xs={1} sm={1} />
        <Col xs={23} sm={23}>
          <Breadcrumb />
        </Col>
      </Row>
      <br /><br />
      <Row type="flex" justify={'center'}>
        <Col xs={0} sm={1}/>
        <Col xs={23} sm={6}>
          <br />
          <Catalog isCategory category={category}/>
        </Col>
        <Col xs={0} sm={1}></Col>
        <Col xs={23} sm={12}>
          <ListBoxContainer isCategory category={category}/>
        </Col>
        <Col xs={1} sm={1}/>
      </Row>

      <br /><br /><br />
      <Copyright />
    </div>
  )
}