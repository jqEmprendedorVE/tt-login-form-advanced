import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import routes from './config/routes';
import configureStore from './configureStore'
import {tryLogin} from './domain/hashLoginForm';

const store = configureStore();


tryLogin();

const renderApp = () =>
  render(
    <Provider store={store}>
      {routes}
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(routes, renderApp)
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
