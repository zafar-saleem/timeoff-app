import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './container/App';
import configureStore from './store/configureStore';
// import routes from './routes';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

