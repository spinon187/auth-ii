import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {loadState, saveState} from './components/LocalStorage'



const persistedStore = loadState();
const store = createStore(
    rootReducer,
    persistedStore,
    applyMiddleware(thunk, logger),
    
  );

store.subscribe(() => {
    saveState(store.getState())
  })

ReactDOM.render(
    <Provider store={store}>
      <Router>
          <Route path='/' component={App} />
      </Router>
    </Provider>,
    document.getElementById("root")
);

