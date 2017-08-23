import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import { Breadcrumb as AntdBreadcrumb } from 'antd'



function Breadcrumb({ blog, isBlogDetail, onHomeClick, onSecondClick }) {
  const second = {
    blog
  }
  return (
    <div>
      <AntdBreadcrumb>
        <AntdBreadcrumb.Item>
          <span onClick={onHomeClick}><a href="javascript:void(0)">Home</a></span>
        </AntdBreadcrumb.Item>
        {
          isBlogDetail && <AntdBreadcrumb.Item><a href="javascript:void(0)" onClick={() => onSecondClick(second)}>{second.blog.category}</a></AntdBreadcrumb.Item>
        }
      </AntdBreadcrumb>
    </div>
  )
}

export default connect(
  (state, ownProps) => {
    return {
    }
  },
  (dispatch, ownProps) => {
    return {
      onHomeClick() {
        controller.onHomeClick()
      },

      onSecondClick(info) {
        controller.onSecondClick(info)
      },

      onThirdClick(info) {
        controller.onThirdClick(info)
      }
    }
  }
)(Breadcrumb)