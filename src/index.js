import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import indexReducer from './reducers/index';
import logger from 'redux-logger';
import App from './components/App';

let store = createStore(indexReducer,applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById("root")
);
