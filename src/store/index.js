// import Reactotron from "reactotron-react-native";
import { createStore, applyMiddleware, compose } from 'redux';
import Immutable from 'immutable';
import { createEpicMiddleware } from 'redux-observable';

import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import Reactotron from './../configs/ReactotronConfig';
import persistConfig from './../configs/persistConfig';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);
// const persistCombinedReducers = persistReducer(persistConfig, rootReducer);
const wrappedCreateStore = __DEV__ ? Reactotron.createStore : createStore;

function logger() {
  return next => action => {
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);
    // console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

function configureStore(/* initialState = {} */) {
  const store = wrappedCreateStore(
    rootReducer,
    Immutable.Map(),
    compose(applyMiddleware(epicMiddleware, logger), autoRehydrate())
  );
  const persistor = persistStore(store, persistConfig);
  return { store, persistor };
}

const { store, persistor } = configureStore();
store.persistor = persistor;
const { dispatch, getState } = store;

export default store;
export { dispatch, getState, persistor };
