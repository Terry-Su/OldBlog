import React from 'react'
import {
  Card
} from 'antd'
import ListBoxItem from './ListBoxItem'

export default function ListBox({ blogs, routeInfo, onItemClick }) {
  return (
    <div>
      <Card noHovering bordered={false}>
        {blogs.map((blog, i) => (
          <div key={i} style={{
            padding: '20px 0 20px 0'
          }}>
            <ListBoxItem blog={blog} onClick={() => onItemClick(blog)} />
          </div>
        ))}
      </Card>
    </div>
  )
}