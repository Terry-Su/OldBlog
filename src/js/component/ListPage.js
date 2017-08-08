import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import BreadcrumbContainer from '../container/BreadcrumbContainer'
import CatalogContainer from '../container/CatalogContainer'
import ListBoxContainer from '../container/ListBoxContainer'
import Copyright from './Copyright'


const {
  Header
} = Layout



export default function ListPage() {
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
      <Row type="flex" justify={'center'}>
        <Col xs={0} sm={1}/>
        <Col xs={23} sm={6}>
          <br />
          <CatalogContainer />
        </Col>
        <Col xs={0} sm={1}></Col>
        <Col xs={23} sm={12}>
          <ListBoxContainer />
        </Col>
        <Col xs={1} sm={1}/>
      </Row>

      <br /><br /><br />
      <Copyright />
    </div>
  )
}