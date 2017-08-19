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
import DetailCatalog from './DetailCatalog'
import CommentBox from './CommentBox'

const {
  Header
} = Layout


export default class DetailPage extends React.Component {
  componentDidMount() {
    const {
      blog,
      onDetailPageDidMount
    } = this.props
    onDetailPageDidMount(blog)
  }
  render() {
    const { blog } = this.props
    return (
      <div>
        <br /><br />
        <CommentBox />
        
        <br />
        <Row type='flex' justify='center'>
          <Col xs={1} sm={1} />
          <Col xs={23} sm={23}>
            <BreadcrumbContainer isBlogDetail blog={blog} />
          </Col>
        </Row>

        <div style={{
          position: 'fixed',
          left: 100,
          top: 100
        }}>
          <DetailCatalog />
        </div>

        <br /><br />
        <Row type='flex' justify='center'>
          <Col xs={23} sm={18}>
            <DetailBoxContainer blog={blog} />
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
}