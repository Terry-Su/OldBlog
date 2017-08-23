import React, { Component } from 'react'
import { connect } from 'react-redux'

import Typography from 'material-ui/Typography'
import { withTheme } from 'material-ui/styles'

import controller from '../controller/index'


class DetailCatalog extends Component {
  onH1Click(index) {
    this.props.onH1Click(index)
  }
  onH2Click(h1Index, h2Index) {
    this.props.onH2Click(h1Index, h2Index)
  }
  render() {
    const {
      theme
    } = this.props

    return (
      <div id="detailCatalog" style={{
        padding: '2em'
      }}>
        {
          cacheDetailCatalog && cacheDetailCatalog.map((h1Info, index1) => (
            <div key={i}>
              <div style={{
                fontSize: '14px',
                padding: '0.8em 0 0 0',
                color: theme.detailCatalog.titleColor
              }}>
                <b onClick={() => this.onH1Click(index1)}>{h1Info.name}</b>
              </div>
              {
                h1Info.h2 && h1Info.h2.map((h2Info, index2) => (
                  <h2 key={i} style={{
                    fontSize: '14px',
                    padding: '0.2em 0 0 1em',
                    color: theme.detailCatalog.color,
                  }}
                    onClick={() => this.onH2Click(index1, index2)}>
                    {h2Info.name}
                  </h2>
                ))
              }
            </div>
          ))
        }
      </div>
    )
  }
}



export default connect(
  (state, ownProps) => {
    const { cacheDetailCatalog } = state.innerState
    return {
      cacheDetailCatalog
    }
  },
  (dispatch, ownProps) => {
    return {
      onH1Click(index) {
        scrollToH1(index, get$detailContent())
      },

      onH2Click(h1Index, h2Index) {
        scrollToH2({ h1Index, h2Index, $detailContent: get$detailContent() })
      }
    }
  }
)(withTheme(DetailCatalog))

function get$detailContent() {
  return $('#detail .highlight')
}

function scrollToDom($dom) {
  // $('html, body').scrollTop(
  //   $dom.offset().top - $('html, body').offset().top + $('html, body').scrollTop()
  // )
  $('html, body').animate({
    scrollTop: $dom.offset().top
  }, 200)
}

function scrollToH1(index, $detailContent) {
  const $target = $detailContent.find('h1').eq(index)
  scrollToDom($target)
}

function scrollToH2({ h1Index, h2Index, $detailContent }) {
  const $target = $detailContent.find('h1').eq(h1Index).nextAll('h2').eq(h2Index)
  scrollToDom($target)
}