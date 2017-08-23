import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import {
  Card,
  Col,
  Row,
  Menu
} from 'antd'

import NewestColumnItem from './NewestColumnItem'


function NewestColumn({ blogs, onTitleClick }) {
  return (
    <div>
      <Card title={
        <h3 style={{
          textAlign: 'center'
        }}>The newest</h3>
      } noHovering bordered={false}>
      {
        blogs.map((blog, index) => (
          <NewestColumnItem key={index} blog={blog} onClick={() => {onTitleClick(blog)}}></NewestColumnItem>
        ))
      }
      </Card>
    </div>
  )
}


export default connect(
  (state, ownProps) => {
    return {
      title: state.blog.NewestColumnTitle,
      blogs: state.blog.blogs
    }
  },
  (dispatch, ownProps) => {
    return {
      onTitleClick(blog) {
        controller.onBlogLinkClick(blog)
      }
    }
  }
)(NewestColumn)