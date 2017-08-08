import React from 'react'

import {
  Card,
  Col,
  Row,
  Menu
} from 'antd'

import NewestColumnItem from './NewestColumnItem'


export default function NewestColumn({ blogs, onTitleClick }) {
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