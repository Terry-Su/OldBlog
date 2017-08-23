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

export default function Tags({ tags, tag: activeTag, onTagClick }) {

  return (
    <div style={{
      padding: '10px'
    }}>
      {
        tags.map((tag, index) => <TagBox key={index} color={tag === activeTag ? '#108ee9' : 'blue'} onClick={() => onTagClick(tag)}>{tag}</TagBox>)
      }
    </div>
  )
}