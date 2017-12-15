// import Rx from 'rxjs';
import { List, Map } from 'immutable';
import {
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  ADD_POST,
  LOAD_POST,
  CHANGE_TAB
} from './const';
import { loadPostSuccess, addPostSuccess, loadPost } from './reducer';

import { tag as requestTag, post as requestPost } from './request';

const loadTopicEpic = (action$, store) =>
  action$
    .ofType(LOAD_TOPIC)
    .filter(() => {
      const topic = store.getState().getIn(['kingGlory', 'topic'], new List());
      const willRequest = topic.size === 0;
      return willRequest;
    })
    .switchMap(requestTag)
    .map(data => ({ type: LOAD_TOPIC_SUCCESS, data }));

// 如果tag加载成功后，加载第一个tag的数据
const loadFirstPostEpic = action$ =>
  action$
    .ofType(LOAD_TOPIC_SUCCESS)
    .mapTo({ type: LOAD_POST, param: { id: 0 } });

const addPostEpic = (action$, store) => {
  const param$ = action$
    .ofType(ADD_POST)
    .debounceTime(200)
    .filter(() => {
      const storage = store.getState().get('kingGlory');
      const topic = storage.get('topic', new List());
      const id = storage.get('currentId');
      if (topic.size > 0) {
        const currentTopic = topic.find(x => x.get('id') === id, Map());
        const hasMore = currentTopic.get('hasMore', false);
        return hasMore;
      }
    })
    .map(x => x.param);
  const request = param =>
    requestPost(param.id, param.lastId).then(data => ({ param, data }));

  const result = param$
    .mergeMap(request)
    .map(data => addPostSuccess({ id: data.param.id, post: data.data }));

  return result;
};

const loadPostEpic = action$ => {
  // console.log(store);
  const param$ = action$.ofType(LOAD_POST).map(x => x.param);
  const request = param =>
    requestPost(param.id, param.lastId).then(data => ({ param, data }));

  const result = param$
    .mergeMap(request)
    .map(data => loadPostSuccess({ id: data.param.id, post: data.data }));

  return result;
};
const changeTabEpic = (action$, store) =>
  action$
    .ofType(CHANGE_TAB)
    .map(action => {
      const index = action.tabIndex;
      const storage = store.getState().get('kingGlory');
      const id = storage.getIn(['topic', index, 'id'], 0);
      return id;
    })
    .map(id => loadPost({ id }));

const result = [
  loadTopicEpic,
  loadFirstPostEpic,
  addPostEpic,
  loadPostEpic,
  changeTabEpic
];

export default result;
