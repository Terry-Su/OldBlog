import React, { Component } from 'react'


export default class AWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  onMouseEnter= () => {
    this.setState({
      hover: true
    })
  }

  onMouseOut = () => {
    this.setState({
      hover: false
    })
  }

  render() {
    const {
      state
    } = this

    const {
      defaultColor,
      defaultBackgroundColor,
      hoverColor,
      hoverBackgroundColor,
      ...restProps
    } = this.props

    return (
      <a
        {...restProps}
        onMouseEnter={this.onMouseEnter}
        onMouseOut={this.onMouseOut}
        style={{
          ...this.props.style,
          color: state.hover ? hoverColor : defaultColor,
          backgroundColor: state.hover ? hoverBackgroundColor : defaultBackgroundColor,
        }}
      />
    )
  }
}
