import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import home from './home/home';
import personal from './personal/personal';
import cart from './cart/cart';
import classify from './classify/classify';
import Identify from './Identify/Identify';

import '../assets/css/reset.min.css';
export default class App extends React.Component {
  render() {
    return <HashRouter>
      <Switch>
        <Route path='/' component={home} exact />
        <Route path='/classify' component={classify} />    
        <Route path='/cart' component={cart} />
        <Route path='/Identify' component={Identify} />
        <Route path='/personal' component={personal} />
        <Redirect to='/' />
      </Switch>
    </HashRouter>
  }
}