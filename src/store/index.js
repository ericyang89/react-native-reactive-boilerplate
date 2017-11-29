// import Reactotron from "reactotron-react-native";
import {
  createStore,
  applyMiddleware
  // compose
} from 'redux';
import Reactotron from './../configs/ReactotronConfig';
import rootReducer from './rootReducer';

const currentCreateStore = __DEV__ ? Reactotron.createStore : createStore;

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
  const store = currentCreateStore(
    rootReducer,
    // initialState,
    applyMiddleware(logger)
    // compose(applyMiddleware(
    // thunkMiddleware,
    /*  createLogger(),  */
    // middleware
    // )
  );
  return store;
}

const store = configureStore();

export default store;
export const { dispatch, getState } = store;
