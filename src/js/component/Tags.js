import React from 'react'
import {
  Tag
} from 'antd'

function TagBox({ color, onClick, children }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '5px'
    }} >
      <Tag color={color} onClick={onClick}>
        {children}
      </Tag>
    </span>
  )
}

export default function Tags({ tags, routeInfo, onTagClick }) {
  const {
    tag,
    listMode
  } = routeInfo

  const shouldActiveTag = listMode === 1
  const activeIndex = tags.indexOf(tag)
  return (
    <div style={{
      padding: '10px'
    }}>
      {
        tags.map((tag, index) => <TagBox key={index} color={shouldActiveTag && activeIndex === index ? '#108ee9' : 'blue'} onClick={() => onTagClick(tag)}>{tag}</TagBox>)
      }
    </div>
  )
}