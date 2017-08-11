/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import configureStore from './store/configureStore';
import { render } from 'react-dom';
import App from './components/App';
import routes from './routes';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';

const store = configureStore();

render(

  <Provider store = {store}>
    <Router history={browserHistory} routes = {routes} />
  </Provider>
,
  document.getElementById('app')
);
