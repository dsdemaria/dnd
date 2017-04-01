import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './components/App'
import Search from './components/spellsearch/Search'
import SpellSheetContainer from './containers/SpellSheetContainer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='search' component={Search} />
        <Route path='spellsheet' component={SpellSheetContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
