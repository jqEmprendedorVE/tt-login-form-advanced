import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import * as serviceWorker from './serviceWorker'
import routes from './config/routes'
import configureStore from './configureStore'
import './sass/index.css'

const { store, persistor } = configureStore()

const renderApp = () =>
  render(
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          {routes}
       </PersistGate>
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(routes, renderApp)
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
