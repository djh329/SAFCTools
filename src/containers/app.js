import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './home'


export default class App extends Component {
  render() {
    return (
      <div className="main">
      <Switch>
      <Route path='/' component={Home}/>
      </Switch>
      </div>
    );
  }
}
