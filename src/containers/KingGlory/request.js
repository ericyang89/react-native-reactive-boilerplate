import axios from 'axios';

const tag = () => axios('/post/tags');

/**
 *
 * @param {Number|String} 当前标签的id
 * @param {Number|String} lastId 最后一个帖子的id
 */
const post = (currentTag = 0, lastId = '') =>
  axios(`/post/queryByTag?tag=${currentTag}&lastId=${lastId}`);

export { tag, post };
