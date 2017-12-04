import { combineEpics } from 'redux-observable';
import pingEpic from './../containers/PingPong/epic';
import counterEpic from './../containers/Counter/epic';
import KingGloryEpic from './../containers/KingGlory/epic';

const rootEpic = combineEpics(pingEpic, counterEpic, KingGloryEpic);
export default rootEpic;
