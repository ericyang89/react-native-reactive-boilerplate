// import Rx from 'rxjs';
import { List, Map } from 'immutable';
import {
  // LOAD_POST,
  // LOAD_POST_SUCCESS,
  // LOAD_POST_ERROR,
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  // LOAD_TOPIC_ERROR,
  ADD_POST,
  LOAD_POST,
  CHANGE_TAB
  // ADD_POST_SUCCESS,
  // ADD_POST_ERROR,
  // POST_LOADED
} from './const';
import { loadPostSuccess, addPostSuccess, loadPost } from './reducer';

import { tag as requestTag, post as requestPost } from './request';

const loadTopicEpic = action$ =>
  action$
    .ofType(LOAD_TOPIC)
    .switchMap(requestTag)
    .map(data => ({ type: LOAD_TOPIC_SUCCESS, data }));

// 如果tag加载成功后，加载第一个tag的数据
const loadFirstPostEpic = action$ =>
  action$
    .ofType(LOAD_TOPIC_SUCCESS)
    .map(x => x.data[0])
    .switchMap(requestPost)
    .map(data => loadPostSuccess({ id: 0, post: data }));

const addPostEpic = (action$, store) => {
  const param$ = action$
    .ofType(ADD_POST)
    .debounceTime(200)
    .filter(() => {
      const storage = store.getState().get('kingGlory');
      const topic = storage.get('topic', new List());
      const id = storage.get('currentId');
      if (topic.size > 0) {
        const hasMore = topic
          .find(x => x.get('id') === id, Map())
          .get('hasMore', false);
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
