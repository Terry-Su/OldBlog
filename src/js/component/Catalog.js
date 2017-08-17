import React from 'react'
import { Menu } from 'antd'

import TagsContainer from '../container/TagsContainer'


export default class Catalog extends React.Component {
  render() {
    const { catalog, routeInfo, onCategoryClick } = this.props
    const {
      category,
      tag,
      listMode
    } = routeInfo

    const shouldActiveCategory = listMode === 0
    const activeCategoryKey = '' + catalog.indexOf(category)

    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '10px'
      }}>
        <Menu style={{
          border: 'none'
        }} selectedKeys={shouldActiveCategory ? [activeCategoryKey] : []}>
          {
            catalog.map((category, index) =>
              <Menu.Item key={index}>
                <div onClick={() => onCategoryClick(category)}>
                  {category}</div>
              </Menu.Item>
            )
          }
        </Menu>
        <TagsContainer />
      </div>
    )
  }
}

