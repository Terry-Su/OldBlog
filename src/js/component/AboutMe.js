import React from 'react'

import Grid from 'material-ui/Grid'


export default function AboutMe() {
  return (
    <Grid
      container
      justify='center'
      style={{
        paddingTop: '5em'
      }}
      children={
        <Grid
          item
          children={
            <img
              src='./public/images/gb-icon.png'
              width='30'
            />
          }
        />
      }
    />
  )
}