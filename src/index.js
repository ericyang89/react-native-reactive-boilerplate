import React from 'react';

// TODO: 后续只用特定的operator 以减小文件大小
import 'rxjs';
import { addNavigationHelpers } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import Reactotron from './configs/ReactotronConfig';
import './configs/axiosConfig';
import AppNavigator from './containers';
import store from './store';

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
  nav: state.get('nav').toJS()
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
