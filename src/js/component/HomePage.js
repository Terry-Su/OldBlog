import React, { Component } from 'react'

import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'

import withGlobalTheme from '../util/componentHelper/withGlobalTheme'

import Catalog from './Catalog'
import NewestColumn from './NewestColumn'
import Notion from './Notion'
import Copyright from './Copyright'
import AboutMe from './AboutMe'
import ThemeSwitch from './ThemeSwitch'
import LangSwitch from './LangSwitch'




class HomePage extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            padding: '1em 0 3em 0'
          }}
          children={
            <Grid container>
              <Hidden only={['xs']}>
                <Grid item style={{
                  padding: '0 0 0 2em'
                }}/>
              </Hidden>
              <Grid item sm={6} xs={11} >
                <Notion />
              </Grid>
              <Hidden only={['xl', 'lg', 'md', 'sm']}>
                <Grid item xs={11} style={{
                  padding: '2em 0 0 0'
                }} />
              </Hidden>
              <Grid item container sm={5} xs={11} justify='flex-end' align='center'>
                <div
                  style={{
                    padding: '0 2em 0 0'
                  }}
                  children={
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0 1.5em 0 0'
                        }}
                        children={
                          <ThemeSwitch />
                        }
                      />

                      <LangSwitch />
                    </div>
                  }
                />
              </Grid>
            </Grid>
          }
        />


        <div
          style={{
            padding: '2em 0 0 0'
          }}
          children={
            <Grid container justify='center' >
              <Grid item md={5} sm={5} xs={11}>
                <NewestColumn />
              </Grid>
              <Grid item md={1} sm={1} xs={12} />
              <Grid item md={3} sm={4} xs={11}>
                <Catalog />
              </Grid>
            </Grid>
          }
        />

        <div
          style={{
            padding: '3em 0 0 0'
          }}
          children={
            <AboutMe />
          }
        />

        <Copyright />
      </div>
    )
  }
}

export default withGlobalTheme(HomePage)
