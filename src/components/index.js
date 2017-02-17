import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';

import Home from './common/Home.jsx';
import About from './common/About.jsx';
import Car from './car/Car.jsx';

export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/cars' component={Car} />
        <Route path='/about' component={About} />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
