import { registerRootComponent } from 'expo';
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import {logger} from "redux-logger";

import App from './App';
import reducer from './reducers'
import initialData from './_DATA'

const store = createStore(reducer, initialData, applyMiddleware(logger))

const ReduxApp = () => (
  <Provider store = {store}>
    <App/>
  </Provider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(ReduxApp);
