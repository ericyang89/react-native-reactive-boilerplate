import { NavigationActions } from 'react-navigation';
import { fromJS } from 'immutable';
import AppNavigator from './../containers';

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

/**
 * 路由的专用reducer
 * @param {Object} state
 * @param {Object} action
 */
const navReducer = (state = fromJS(initialState), action) => {
  const nextState = state.merge(
    AppNavigator.router.getStateForAction(action, state.toJS())
  );
  return nextState || state;
};

export default navReducer;
