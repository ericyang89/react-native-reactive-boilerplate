// import { AsyncStorage } from 'react-native';
// import { storages } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import immutableTransform from 'redux-persist-transform-immutable';

// {
//   key: string, // the key for the persist
//   storage: Object, // the storage adapter, following the AsyncStorage api
//   version?: number, // the state version as an integer (defaults to -1)
//   blacklist?: Array<string>, // do not persist these keys
//   whitelist?: Array<string>, // only persist they keys
//   migrate?: (Object, number) => Promise<Object>,
//   transforms?: Array<Transform>,
//   throttle?: number,
//   keyPrefix?: string, // will be prefixed to the storage key
//   debug?: boolean, // true -> verbose logs
//   stateReconciler?: false | StateReconciler, // false -> do not automatically reconcile state
//   serialize?: boolean, // false -> do not call JSON.parse & stringify when setting & getting from storage
// }
const config = {
  transforms: [immutableTransform()],
  // key: 'react_native_redux_store_douyu', // the key for the persist
  storage: AsyncStorage // the storage adapter, following the AsyncStorage api
};
export default config;
