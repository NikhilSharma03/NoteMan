import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

//Reducer
import authReducer from './store/reducer/auth'

const rootReducer = combineReducers({
  auth:authReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
