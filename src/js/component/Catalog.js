import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import { withTheme } from 'material-ui/styles'

import controller from '../controller/index'

import { Menu } from 'antd'

import CatalogTags from './CatalogTags'


class Catalog extends Component {
  render() {
    const {
      theme,
      catalog,
      category: activeCategory,
      isCategory,
      tag,
      isTag,
      onCategoryClick
    } = this.props

    return (
      <div style={{
        border: `1px solid ${theme.catalog.borderColor}`,
        borderRadius: '10px',
        padding: '10px',
        backgroundColor: theme.catalog.backgroundColor
      }}>
        <Paper style={{
          backgroundColor: theme.catalog.backgroundColor
        }}>
          <List>
            {
              catalog.map((category, i) => {
                const isActive = activeCategory === category
                return (
                  <ListItem
                    key={i}
                    button
                    disableRipple
                    style={{
                      color: isActive ? theme.catalog.activeColor : theme.catalog.color,
                      backgroundColor: isActive ? theme.catalog.activeBackgroundColor : 'none'
                    }}
                    onClick={() => onCategoryClick(category)}
                  >{category}</ListItem>
                )
              })
            }
          </List>

          <CatalogTags tag={tag}/>
        </Paper>
      </div>

      // <div style={{
      //   border: '1px solid #ddd',
      //   borderRadius: '10px',
      //   padding: '10px'
      // }}>
      //   <Menu style={{
      //     border: 'none'
      //   }} selectedKeys={isCategory ? [activeCategoryKey] : []}>
      //     {
      //       catalog.map((category, index) =>
      //         <Menu.Item key={index}>
      //           <div onClick={() => onCategoryClick(category)}>
      //             {category}</div>
      //         </Menu.Item>
      //       )
      //     }
      //   </Menu>
      //   <CatalogTags tag={tag} isTag/>
      // </div>
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
)(withTheme(Catalog))
