import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';

import Home from './common/Home.jsx';
import About from './common/About.jsx';
import Main from './common/Main.jsx';
import Car from './car/Car.jsx';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route component={Main} path='app'>
          <IndexRoute component={Home} />
          <Route path='/cars' component={Car} />
          <Route path='/about' component={About} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
