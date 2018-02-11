import { createStore } from 'redux';
import reducer from './reducer';
import { addComment } from './actions';

const store = createStore(reducer);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

export default store;