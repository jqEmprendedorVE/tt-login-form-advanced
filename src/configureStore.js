import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

export default function configureStore() {
  const isDevelop = process.env.NODE_ENV !== 'production'
  const middlewares = isDevelop ? [loggerMiddleware, thunk] : [thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]

  const composedEnhancers = isDevelop
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...enhancers) 
    : compose(...enhancers)

  const store = createStore(rootReducer, composedEnhancers)

  if (isDevelop && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}