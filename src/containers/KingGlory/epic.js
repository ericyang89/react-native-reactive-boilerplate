import {
  // LOAD_POST,
  // LOAD_POST_SUCCESS,
  // LOAD_POST_ERROR,
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS
  // LOAD_TOPIC_ERROR,
  // ADD_POST,
  // ADD_POST_SUCCESS,
  // ADD_POST_ERROR,
  // POST_LOADED
} from './const';

import { tag as requestTag } from './request';

const pingEpic = action$ =>
  action$
    .ofType(LOAD_TOPIC)
    .switchMap(requestTag)
    .map(data => ({ type: LOAD_TOPIC_SUCCESS, data }));
// .mapTo({ type: LOAD_POST_SUCCESS });

export default pingEpic;
