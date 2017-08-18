import React from 'react'

import { Breadcrumb as AntdBreadcrumb } from 'antd';



export default function Breadcrumb({ blog, isBlogDetail, onHomeClick, onSecondClick }) {
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