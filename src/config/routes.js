import React, {Fragment} from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Auth from '../components/auth'

import App from '../containers/app'
import Private from '../containers/private'
import Contact from '../containers/contact'

import Header from '../components/header'
import Login from '../containers/templates/auth/login'

const Notfound = () => (<main className="container"><h1>Not found</h1></main>)

const header = {
  items: [
    {name: 'Home', url: '/'},
    {name: 'Contact', url: '/contact'}
  ]
}

/**
 * Componete para configurar el enrutado de la aplicacion
 */
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