import { fromJS } from 'immutable';
import { PING, PONG } from './const';

const pingReducer = (state = fromJS({ isPinging: false }), action) => {
  switch (action.type) {
    case PING:
      return fromJS({ isPinging: true });

    case PONG:
      return fromJS({ isPinging: false });

    default:
      return state;
  }
};

export default pingReducer;
