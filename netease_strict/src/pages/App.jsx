import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import home from './home/home';
import personal from './personal/personal';
import cart from './cart/cart';
import classify from './classify/classify';
import Identify from './Identify/Identify';

/**导入公共样式 */
import  '../assets/css/reset.min.css'
import '../assets/css/common.less'
import Tab from '../components/Tab';

export default class App extends React.Component {
  render() {
    return <HashRouter>
      <Switch>
        <Route path='/' component={home} exact />
        <Route path='/classify' component={classify} />    
        <Route path='/cart' component={cart} />
        <Route path='/taste' component={Identify} />
        <Route path='/personal' component={personal} />
        <Redirect to='/' />
      </Switch>
    <Tab></Tab>
    </HashRouter>
  }
}