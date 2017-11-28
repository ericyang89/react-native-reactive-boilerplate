import React from "react";
import { addNavigationHelpers } from "react-navigation";
import { connect, Provider } from "react-redux";
import AppNavigator from "./containers";
import store from "./store";

class App extends React.Component {
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
