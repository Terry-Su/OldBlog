import React from 'react'

import Notion from '../Index/Notion'
import NewestBlog from '../Index/NewestBlog'
import Nav from '../Nav'

import List from '../List/index'

import Detail from '../Detail/index'

const Home = () => (
  <section>
    {/* Annotation{ */}
    {/*<Detail />*/}
    {/* Annotation} */}

    {/*<hr />*/}

    {/* List{ */}
    {/*<List />*/}
    {/* List} */}

    {/*<hr />*/}

    {/* Composition{ */}
    <Notion />
    <NewestBlog />
    <Nav />
    {/* Composition} */}
  </section>
)


  export default Home