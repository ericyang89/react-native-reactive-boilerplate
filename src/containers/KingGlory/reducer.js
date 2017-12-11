/*
 *
 * KingGlory reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC_ERROR,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  POST_LOADED
} from './const';

export function loadPost(param) {
  return { type: LOAD_POST, param };
}

export function loadPostSuccess(d) {
  return {
    type: LOAD_POST_SUCCESS,
    ...d
  };
}

export function loadTopic() {
  return { type: LOAD_TOPIC };
}

export function loadTopicSuccess(d) {
  return { type: LOAD_TOPIC_SUCCESS, data: d };
}

export function addPost(param) {
  return { type: ADD_POST, param };
}

export function addPostSuccess(d) {
  return {
    type: ADD_POST_SUCCESS,
    ...d
  };
}

export function postLoaded() {
  return { type: POST_LOADED };
}

const initialState = fromJS({
  loading: false,
  error: false,
  topic: null,
  addPostParam: {
    id: 0,
    lastId: '',
    hasMore: true
  }
});

function kingGloryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOPIC:
      return state.set('error', false);
    case LOAD_TOPIC_SUCCESS: {
      {
        const topics = action.data;

        // 添加 默认tab
        topics.unshift({ id: 0, name: '最新' });
        const topic = topics.map(item =>
          Object.assign(item, { post: [], loading: false })
        );
        return state.set('error', false).set('topic', fromJS(topic));
      }
    }
    case LOAD_TOPIC_ERROR:
      return state.set('error', action.error);
    case LOAD_POST:
      return state
        .set('loading', true)
        .setIn(['addPostParam', 'id'], action.param.id)
        .setIn(['addPostParam', 'lastId'], action.param.lastId);
    case LOAD_POST_SUCCESS:
      return state
        .set('loading', false)
        .update('topic', list =>
          list.update(list.findIndex(x => x.get('id') === action.id), topic =>
            topic.update('post', () => fromJS(action.post))
          )
        );

    case LOAD_POST_ERROR:
      return state.set('error', action.error).set('loading', false);

    case ADD_POST:
      return state
        .set('loading', true)
        .setIn(['addPostParam', 'id'], action.param.id)
        .setIn(['addPostParam', 'lastId'], action.param.lastId);
    case ADD_POST_SUCCESS: {
      return state
        .set('loading', false)
        .update('topic', list =>
          list.update(list.findIndex(x => x.get('id') === action.id), topic =>
            topic.update('post', post => post.concat(fromJS(action.post)))
          )
        );
    }
    case ADD_POST_ERROR:
      return state.set('loading', false).set('error', false);
    case POST_LOADED: {
      const currentId = state.getIn(['addPostParam', 'id']);
      return state.update('topic', list =>
        list.update(list.findIndex(x => x.get('id') === currentId), topic =>
          topic.update('hasMore', () => false)
        )
      );
    }
    default:
      return state;
  }
}

export default kingGloryReducer;
