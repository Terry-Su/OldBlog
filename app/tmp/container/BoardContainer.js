import React from 'react'
import { connect } from 'react-redux'

import Board from '../component/Board'
import { sing, dance } from '../action'

const mapStateToProps = (state) => {
  console.log(2, state);
  return {
    doing: state ? state.doing : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSingClick: () => {
      dispatch(sing())
    },
    onDanceClick: () => {
      dispatch(dance())
    }
  }
} 

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)


export default BoardContainer