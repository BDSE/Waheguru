import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/app';
import reducers from './reducers';

import reduxPromise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';

//const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxPromise),
  // other store enhancers if any
));


ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
   <div>
   <App />
   </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
