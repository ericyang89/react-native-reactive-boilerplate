// import { combineReducers } from "redux-immutable";
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import navReducer from './navReducer';
import ping from './../containers/PingPong/reducer';
import counter from './../containers/Counter/reducer';
import kingGlory from './../containers/KingGlory/reducer';

// 引入文件夹中的reducer

const rootReducer = combineReducers({
  nav: navReducer,
  ping,
  counter,
  kingGlory
});
export default rootReducer;
