import React from 'react';
import 'rxjs';
import { addNavigationHelpers } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import Reactotron from './configs/ReactotronConfig';
import AppNavigator from './containers';
import store from './store';

class App extends React.Component {
  componentDidMount() {
    if (__DEV__) {
      Reactotron.connect();
      Reactotron.clear();
    }
  }
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
