import React from 'react';
// import Reactotron from "reactotron-react-native";
import { addNavigationHelpers } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import Reactotron from './configs/ReactotronConfig';
import AppNavigator from './containers';
import store from './store';

// console.log(44433,__DEV__); when dev __DEV__ === true

if (__DEV__) {
  Reactotron.connect();
  Reactotron.clear();
}

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

/* eslint-disable  */
export default class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}
/* eslint-enable  */
