import { NavigationActions } from 'react-navigation';
import AppNavigator from './../containers';

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

/**
 * 路由的专用reducer
 * @param {Object} state
 * @param {Object} action
 */
const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
