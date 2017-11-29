import { PING, PONG } from './const';

const pingEpic = action$ =>
  action$
    .ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });

export default pingEpic;
