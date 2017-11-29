import { combineEpics } from 'redux-observable';
import pingEpic from './../containers/PingPong/epic';

const rootEpic = combineEpics(pingEpic);
export default rootEpic;
