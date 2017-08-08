import 'babel-polyfill';
import './styles/main.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/font-awesome/css/font-awesome.css';
import React from 'react';
import { render } from 'react-dom';
import App from './modules/app/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const logger = createLogger(),
      store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
