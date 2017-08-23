import React from 'react'
import { connect } from 'react-redux'

import controller from '../controller/index'

import withGlobalTheme from '../util/componentHelper/withGlobalTheme'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Hidden from 'material-ui/Hidden'
import ThemeSwitch from './ThemeSwitch'
import LangSwitch from './LangSwitch'


import Breadcrumb from './Breadcrumb'
import DetailBox from './DetailBox'
import Copyright from './Copyright'
import BackToTop from './BackToTop'
import DetailCatalog from './DetailCatalog'
import CommentBox from './CommentBox'
import AboutMe from './AboutMe'


class DetailPage extends React.Component {
  componentDidMount() {
    const {
      blog,
      onDetailPageDidMount
    } = this.props
    onDetailPageDidMount(blog)
  }
  render() {
    const { blog } = this.props
    return (
      <div>
        <Paper
          style={{
            background: 'none',
            padding: '2em 0 1em 0'
          }}
          children={
            <Grid container>
              <Grid item xs={7} style={{
                padding: '0 0 0 2em'
              }}>
                <Breadcrumb isBlogDetail blog={blog} />
              </Grid>
              <Grid item container xs={5} justify='flex-end' align='center'>
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

        <Grid container justify='center'>
          <Grid item lg={8} md={8} sm={11} xs={11}>
            <DetailBox blog={blog} />

            <div
              style={{
                padding: '2em 0 0 0'
              }}
              children={
                <CommentBox />
              }
            />
          </Grid>
          {/* <Hidden only={['sm', 'xs']}>
            <Grid style={{
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'fixed',
                height: '100%',
                top: '1em',
                padding: '1em 0 1 1.2em',
                overflow: 'auto'
              }}>
                <DetailCatalog />
              </div>
            </Grid>
          </Hidden> */}
        </Grid>

        <div
          style={{
            padding: '1em 0 0 0 '
          }}
          children={
            <Grid container justify='center'>
              <Grid item >
                <BackToTop />
              </Grid>
              {/* <Grid item xs={1} /> */}
            </Grid>
          }
        />


        <AboutMe />
        <Copyright />
      </div>
    )
  }
}


export default withGlobalTheme(
  connect(
    (state, ownProps) => {
      return {
      }
    },
    (dispatch, ownProps) => {
      return {
        onDetailPageDidMount(blog) {
          controller.onDetailPageDidMount(blog)
        }
      }
    }
  )(DetailPage)
)