import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import './index.css'
import { rootReducer } from './redux/reducer'
import App from './app'

const initialState = {
  filterAll: true,
  filterWithout: true,
  filter1Transfer: true,
  filter2Transfers: true,
  filter3Transfers: true,
  ticketsAll: [],
  ticketsWithout: [],
  tickets1Transfer: [],
  tickets2Transfers: [],
  tickets3Transfers: [],
  ticketsCount: 5,
  activeTab: null,
}

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
export const store = createStore(rootReducer, initialState, enhancer)
/* eslint-enable */

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
