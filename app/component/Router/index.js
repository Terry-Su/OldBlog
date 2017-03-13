import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from '../Home/index'
import Detail from '../Detail/index'
import List from '../List/index'


const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

const Blog = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/list" component={List} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
)




export default Blog