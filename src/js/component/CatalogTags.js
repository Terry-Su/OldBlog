import React from 'react'

import { connect } from 'react-redux'

import controller from '../controller/index'

import Tag from './Tag'


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

function Tags({ tags, tag: activeTag, onTagClick }) {

  return (
    <div style={{
      padding: '10px'
    }}>
      {
        tags.map((tag, index) => (
          <Tag key={index} active={
            tag === activeTag
          } onClick={
            () => onTagClick(tag)
          }>{tag}</Tag>)
        )
      }
    </div>
  )
}


export default connect(
  (state, ownProps) => {
    return {
      tags: state.blog.tags
    }
  },
  (dispatch, ownProps) => {
    return {
      onTagClick(tag) {
        controller.onTagClick(tag)
      }
    }
  }
)(Tags)