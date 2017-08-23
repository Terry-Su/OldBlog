import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import { Menu } from 'antd'

import TagsContainer from './TagsContainer'


class Catalog extends React.Component {
  render() {
    const { catalog, category: activeCategory, isCategory, tag, isTag, onCategoryClick } = this.props
    const activeCategoryKey = '' + catalog.indexOf(activeCategory)
    
    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '10px'
      }}>
        <Menu style={{
          border: 'none'
        }} selectedKeys={isCategory ? [activeCategoryKey] : []}>
          {
            catalog.map((category, index) =>
              <Menu.Item key={index}>
                <div onClick={() => onCategoryClick(category)}>
                  {category}</div>
              </Menu.Item>
            )
          }
        </Menu>
        <TagsContainer tag={tag} isTag/>
      </div>
    )
  }
}


export default connect(
  (state, ownProps) => {
    return {
      catalog: state.blog.catalog
    }
  },
  (dispatch, ownProps) => {
    return {
      onCategoryClick(category) {
        controller.onCategoryClick(category)
      }
    }
  }
)(Catalog)
