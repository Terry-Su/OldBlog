import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import {
  Col,
  Row,
  Layout,
} from 'antd'

import Breadcrumb from './Breadcrumb'
import DetailBox from './DetailBox'
import Copyright from './Copyright'
import BackToTop from './BackToTop'
import DetailCatalog from './DetailCatalog'
import CommentBox from './CommentBox'

const {
  Header
} = Layout


class DetailPage extends React.Component {
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
            <Breadcrumb isBlogDetail blog={blog} />
          </Col>
        </Row>

        <div style={{
          position: 'fixed',
          left: 100,
          top: 100
        }}>
          {/* <DetailCatalog /> */}
        </div>

        <br /><br />
        <Row type='flex' justify='center'>
          <Col xs={23} sm={18}>
            <DetailBox blog={blog} />
          </Col>
        </Row>
        <Row style={{
          paddingTop: '50px'
        }}>
          <Col span={22} style={{
            textAlign: 'right'
          }}>
            <BackToTop />
          </Col>
          <Col xs={1} sm={1}></Col>
        </Row>

        <Copyright />
      </div>
    )
  }
}


export default connect(
  (state, ownProps) => {
    return {
    }
  },
  (dispatch, ownProps) => {
    return {
      onDetailPageDidMount(blog) {
        controller.onDetailPageDidMount(blog)
      }
    }
  }
)(DetailPage)