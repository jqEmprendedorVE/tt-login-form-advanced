import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from '../containers/app';
import Users from '../containers/users';
import Contact from '../containers/contact';
import Web from '../containers/web';
import Mobile from '../containers/mobile';
import Header from '../components/header';

import Login from '../containers/templates/auth/login';

const Notfound = () => <h1>Not found</h1>

const header = {
  items: [
    {name: 'Home', url: '/'},
    {name: 'Contact', url: '/contact'},
    {name: 'Login', url: '/login'}
  ]
}

const routing = (
  <Router>
    <div>
      <Header {...header}/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
        <Route path="/web" component={Web} />
        <Route path="/mobile" component={Mobile} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

export default routing;