import axios from 'axios';
import invariant from 'invariant';

axios.defaults.baseURL = 'http://yubadev.dz11.com';

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    if (
      response.status === 200 &&
      response.data &&
      response.data.status === 'ok'
    ) {
      return response.data.data;
    }
    invariant(false, '请求报错');
    Promise.reject(new Error('请求报错'));
  },
  error => Promise.reject(error)
);

export default axios;
