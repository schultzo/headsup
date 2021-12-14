import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import headsreducers from './reducers'
import App from "./components/app"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(headsreducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})