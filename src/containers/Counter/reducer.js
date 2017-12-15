import { fromJS } from 'immutable';
import { PLUS, SUBSTRACT } from './const';

const pingReducer = (state = fromJS({ number: 0 }), action) => {
  switch (action.type) {
    case PLUS:
      return state.update('number', x => x + 1);

    case SUBSTRACT:
      return state.update('number', x => x - 1);

    default:
      return state;
  }
};

export default pingReducer;
