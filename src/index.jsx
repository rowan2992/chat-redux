// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise'; 

import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import currentUserReducer from './reducers/current_user_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const initialState = {
  messages: [{
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  },
  {
    "author":"anonymous77",
    "content":"My name is anonymous77",
    "created_at":"2017-09-26T23:03:21.194Z"
  }],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

const reducers = combineReducers({
  messages: messagesReducer(initialState.messages),
  // channels: channelsReducer(initialState.channels),
  // currentUser: currentUserReducer(initialState.currentUser),
  // selectedChannel: selectedChannelReducer(initialState.selectedChannel)
});

// console.log(initialState);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger)); 

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
