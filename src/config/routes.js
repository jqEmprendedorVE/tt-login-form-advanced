import React, {Fragment} from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from '../containers/app'
import Private from '../containers/private'
import Contact from '../containers/contact'
import Header from '../components/header'

import Auth from '../components/auth'
import Login from '../containers/templates/auth/login'

const Notfound = () => <h1>Not found</h1>

const header = {
  items: [
    {name: 'Home', url: '/'},
    {name: 'Contact', url: '/contact'}
  ]
}

const routing = (
  <Router>
    <Fragment>
      <Header {...header}/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/private" component={Private} />
        <Route path="/login" render={() => <Auth><Login></Login></Auth>} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </Fragment>
  </Router>
)

export default routing