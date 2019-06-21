import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
  const isDevelop = process.env.NODE_ENV !== 'production'
  const middlewares = isDevelop ? [loggerMiddleware, thunk] : [thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]

  const devToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...enhancers)
    : compose(...enhancers)

  const composedEnhancers = isDevelop
    ? devToolsCompose
    : compose(...enhancers)

  const store = createStore(persistedReducer, composedEnhancers)
  const persistor = persistStore(store)

  if (isDevelop && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return { store, persistor }
}