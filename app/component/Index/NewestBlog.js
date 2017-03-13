import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Detail from '../Detail/index'


const NewestBlog = () => (
    <section>
      <section>
        <header>The Newest</header>
        <ul>
          <li>
            <Link to='/detail'>Blog Title</Link>
          </li>
          <li>
            <Link to='/detail'>Blog Title</Link>
          </li>
          <li>
            <Link to='/detail'>Blog Title</Link>
          </li>
          <li>
            <Link to='/detail'>Blog Title</Link>
          </li>
          <li>
            <Link to='/detail'>Blog Title</Link>
          </li>
        </ul>
      </section>
    </section>
)


export default NewestBlog