// import { combineReducers } from "redux-immutable";
import { combineReducers } from 'redux';
import navReducer from './navReducer';

// 引入文件夹中的reducer

const rootReducer = combineReducers({
  nav: navReducer
});
export default rootReducer;
