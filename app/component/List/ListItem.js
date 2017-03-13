import React from 'react'
import {
  Link
} from 'react-router-dom'


const ListItem = ({ imgSrc, title }) => (
  <div>
    <Link to='/detail'>
      <img src={imgSrc} alt='image' />
    </Link>

    <Link to='/detail'>
      {title}
    </Link>
  </div>
)


export default ListItem