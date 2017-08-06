import {createStore, applyMiddleware, compose} from 'redux';
import moviesReducer from '../reducers/moviesReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
  return createStore(
    moviesReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
