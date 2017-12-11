import { combineEpics } from 'redux-observable';
import pingEpic from './../containers/PingPong/epic';
import counterEpic from './../containers/Counter/epic';
import kingGloryEpic from './../containers/KingGlory/epic';

const params = [pingEpic, counterEpic, kingGloryEpic];

/**
 * 参数改成扁平的，如果某个参数是数组则将其展开
 * @param {Array} param
 */
const getFlatParam = param => {
  const r = [];
  param.forEach(i => {
    if (Array.isArray(i)) {
      r.push(...i);
    } else {
      r.push(i);
    }
  });
  return r;
};

const rootEpic = combineEpics(...getFlatParam(params));
export default rootEpic;
