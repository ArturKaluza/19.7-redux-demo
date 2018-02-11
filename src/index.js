import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import {ADD_COMMENT, addComment} from './actions';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();



store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));


console.log(store.getState());

export default store;