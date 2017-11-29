// import { combineReducers } from "redux-immutable";
import { combineReducers } from 'redux';
import navReducer from './navReducer';
import ping from './../containers/PingPong/reducer';

// 引入文件夹中的reducer

const rootReducer = combineReducers({
  nav: navReducer,
  ping
});
export default rootReducer;
