import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const tron = Reactotron.configure({
  name: 'React Native test',
  host: '172.16.3.248'
})
  .useReactNative()
  .use(reactotronRedux());

/* eslint-disable */
if (__DEV__) {
	console.tron = tron;
} else {
	console.tron = {
		log: () => null,
	};
}
/* eslint-enble */

export default tron;
