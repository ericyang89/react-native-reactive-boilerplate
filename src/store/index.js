import {
  createStore,
  applyMiddleware
  // compose
} from "redux";
import rootReducer from "./rootReducer";

function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware()
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
