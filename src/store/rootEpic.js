import { combineEpics } from 'redux-observable';
import pingEpic from './../containers/PingPong/epic';
import counterEpic from './../containers/Counter/epic';

const rootEpic = combineEpics(pingEpic, counterEpic);
export default rootEpic;
