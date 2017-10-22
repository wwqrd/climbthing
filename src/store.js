import { createStore, combineReducers, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import sets from './ducks/sets';

const root = combineReducers({
  sets
});

const store = createStore(
  root,
  undefined,
  compose(
    autoRehydrate()
  )
);

persistStore(store);

export default store;
