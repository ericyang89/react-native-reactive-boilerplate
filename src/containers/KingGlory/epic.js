import { PLUS, SUBSTRACT } from './const';

const pingEpic = action$ =>
  action$
    .ofType(PLUS)
    .delay(3000)
    .mapTo({ type: SUBSTRACT });

export default pingEpic;
