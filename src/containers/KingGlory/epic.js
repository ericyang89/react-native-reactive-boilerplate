import {
  // LOAD_POST,
  // LOAD_POST_SUCCESS,
  // LOAD_POST_ERROR,
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  // LOAD_TOPIC_ERROR,
  ADD_POST,
  LOAD_POST
  // ADD_POST_SUCCESS,
  // ADD_POST_ERROR,
  // POST_LOADED
} from './const';
import { loadPostSuccess, addPostSuccess } from './reducer';

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

const addPostEpic = action$ =>
  action$
    .ofType(ADD_POST)
    .map(x => x.param)
    .switchMap(data => requestPost(data.id, data.lastId))
    .map(data => addPostSuccess({ id: 0, post: data }));

const loadPostEpic = action$ =>
  action$
    .ofType(LOAD_POST)
    .map(x => x.param)
    .switchMap(data => requestPost(data.id, data.lastId))
    .map(data => loadPostSuccess({ id: 0, post: data }));
const result = [loadTopicEpic, loadFirstPostEpic, addPostEpic, loadPostEpic];

export default result;
