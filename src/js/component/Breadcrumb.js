import React from 'react'

import { Breadcrumb as AntdBreadcrumb } from 'antd';



export default function Breadcrumb({ category, isCategory, tag, isTag, onHomeClick, onSecondClick, onThirdClick }) {
  const second = {
    isTag,
    isCategory,
    text: isCategory ? category : (
      isTag ? tag : ''
    )
  }
  // const third = {
  //   blog
  // }
  return (
    <div>
      <AntdBreadcrumb>
        <AntdBreadcrumb.Item>
          <span onClick={onHomeClick}><a href="javascript:void(0)">Home</a></span>
        </AntdBreadcrumb.Item>
        {
          (isCategory || isTag) && <AntdBreadcrumb.Item><a href="javascript:void(0)" onClick={ () => onSecondClick(second) }>{ second.text }</a></AntdBreadcrumb.Item>
        }

        {/* {
          third && <AntdBreadcrumb.Item><a href="javascript:void(0)" onClick={ () => onThirdClick(third) }>{ third.blog.title }</a></AntdBreadcrumb.Item>
        } */}
      </AntdBreadcrumb>
    </div>
  )
}