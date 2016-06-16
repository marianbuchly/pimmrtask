import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import App from './App';
import Restaurant from './components/Restaurant';
import Restaurants from './components/Restaurants';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

injectTapEventPlugin();

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Restaurants} />
      <Route path='/restaurant' component={Restaurant}/>
    </Route>
  </Router>
  ), document.getElementById('root'));
