import store from './store';
import {bugAdded} from './actions';
import {bugRemoved} from './actions';


const unsubscribe = store.subscribe(() => {
  console.log("store changed.", store.getState());
  
});

store.dispatch(bugAdded("bug 1"));

unsubscribe();

store.dispatch(bugRemoved(1))
console.log(store.getState());

