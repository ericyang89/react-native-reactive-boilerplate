// import { AsyncStorage } from 'react-native';
// import { storages } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import immutableTransform from 'redux-persist-transform-immutable';

/**
 * 为了兼容immutable，redux-persist 使用的4.X版本。启动会，性能会有很大下降，默认关闭
 */
const usePersist = false;
const config = {
  transforms: [immutableTransform()],
  blacklist: ['counter'],
  debounce: 3 * 1000,
  key: 'react_native_redux_store_douyu_v1.0.0', // the key for the persist
  storage: AsyncStorage // the storage adapter, following the AsyncStorage api
};
export { usePersist };
export default config;
