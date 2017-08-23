import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import { withTheme } from 'material-ui/styles'

import ListBoxItem from './ListBoxItem'

function ListBox({
  blogs,
  onItemClick,
  theme
}) {
  return (
    <div>
    {
      blogs.map((blog, i) => (
      <div key={i} style={{
        padding: '0 0 2em 0'
      }}>
      <ListBoxItem blog={blog} onClick={() => onItemClick(blog)} />
      </div>
    ))}
</div>
  )
}


export default connect(
  (state, ownProps) => {
    let blogs = state.blog.blogs
    const { category, isCategory, tag, isTag } = ownProps
    // filter blogs
    blogs = blogs.filter(blog => {
      if (isCategory) {
        return blog.category === category
      }
      if (isTag) {
        return blog.tags && blog.tags.some(theTag => theTag === tag)
      }
      return false
    })

    return {
      blogs
    }
  },
  (dispatch, ownProps) => {
    return {
      onItemClick(blog) {
        controller.onBlogLinkClick(blog)
      }
    }
  }
)(withTheme(ListBox))