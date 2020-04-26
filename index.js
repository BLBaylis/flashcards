import { registerRootComponent } from 'expo';
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import {logger} from "redux-logger";
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'

import App from './App';
import reducer from './reducers'
import {saveState} from './utils/api'

const store = createStore(reducer, applyMiddleware(thunk, logger))

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

const ReduxApp = () => (
  <Provider store = {store}>
    <App/>
  </Provider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(ReduxApp);
