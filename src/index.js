import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import Search from './components/Search'
import SpellSheet from './components/SpellSheet'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='search' component={Search} />
      <Route path='spellsheet' component={SpellSheet} />
    </Route>
  </Router>,
  document.getElementById('root')
);
