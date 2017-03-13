import React from 'react'

const Board = ({ doing, onSingClick, onDanceClick }) => {
  // console.log(1, doing)
  return (
    <div>
      <h1>{doing}</h1>
      <button onClick={onSingClick}>Sing</button>
      <button onClick={onDanceClick}>Dance</button>
    </div>
  )
}


export default Board