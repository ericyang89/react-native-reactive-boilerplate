import { PLUS, SUBSTRACT } from './const';

const pingReducer = (state = { number: 0 }, action) => {
  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };

    case SUBSTRACT:
      return { number: state.number - 1 };

    default:
      return state;
  }
};

export default pingReducer;
