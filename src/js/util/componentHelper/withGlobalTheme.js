import React, { Component } from 'react'

import GlobalTheme from '../../component/GlobalTheme'

export default function withGlobalTheme(BaseComponent) {
  return (props) => (
    <GlobalTheme>
      <BaseComponent {...props}/>
    </GlobalTheme>
  )
}