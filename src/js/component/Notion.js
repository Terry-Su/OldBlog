import React from 'react'
import {
  Layout
} from 'antd'

const {
  Header
} = Layout

export default function Notion( {blogTitle} ) {
  return (
    <div>
      <Header style={{
        backgroundColor: 'white'
      }}>
        <h1 style={{
          color: 'black'
        }}>
          { blogTitle }
        </h1>
      </Header>
    </div>
  )
}