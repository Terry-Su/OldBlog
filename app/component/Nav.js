import React from 'react'
import {
  Link
} from 'react-router-dom'


const Nav = () => (
  <section>
    <header>Nav</header>

    {/* Catalogue{ */}
    <ul>
      <li><b>Catalogue</b></li>
      <li><Link to='/list'>Catalogue1</Link></li> 
      <li><Link to='/list'>Catalogue2</Link></li> 
      <li><Link to='/list'>Catalogue3</Link></li> 
      <li><Link to='/list'>Catalogue4</Link></li> 
      <li><Link to='/list'>Catalogue5</Link></li> 
      <li><Link to='/list'>Catalogue6</Link></li> 
    </ul>
    {/* Catalogue} */}

    {/* Link{ */}
    <ul>
      <li><b>Link</b></li>
      <li><a href="http://www.cnblogs.com/terrysu/">Link1</a></li>
      <li><a href="http://www.cnblogs.com/terrysu/">Link2</a></li>
      <li><a href="http://www.cnblogs.com/terrysu/">Link3</a></li>
    </ul>
    {/* Link} */}

    {/* Tag{ */}
    <section>
      <ul>
        <li><Link to='/list'>Tag1</Link></li>
        <li><Link to='/list'>Tag2</Link></li>
      </ul>
    </section>
    {/* Tag} */}
  </section>
)


export default Nav