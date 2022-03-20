import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {userController} from './Redux/userController';
import {pageController} from './Redux/pageController';
import { produseController } from './Redux/produseController';
const store=createStore(combineReducers({userController,pageController,produseController}));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
