import { fromJS } from 'immutable';
import { PLUS, SUBSTRACT } from './const';

const pingReducer = (state = fromJS({ number: 0 }), action) => {
  switch (action.type) {
    case PLUS:
      return state.set('number', state.get('number') + 1);

    case SUBSTRACT:
      return state.set('number', state.get('number') - 1);

    default:
      return state;
  }
};

export default pingReducer;
