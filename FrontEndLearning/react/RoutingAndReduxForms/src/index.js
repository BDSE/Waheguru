import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import reduxPromise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
   <div>
   <App />
   </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
