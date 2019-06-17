import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from '../containers/app';
import Users from '../containers/users';
import Contact from '../containers/contact';
import Web from '../containers/web';
import Mobile from '../containers/mobile';

const Notfound = () => <h1>Not found</h1>
const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
);

const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/web" component={Web} />
        <Route path="/mobile" component={Mobile} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

export default routing;