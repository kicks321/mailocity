import * as R from 'ramda';
import { Middleware } from 'redux';
import ACTION_TYPES from './ActionTypes';

const blockedList = [ACTION_TYPES.BLOCKED_ACTION];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logger: Middleware = () => (next) => (action: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!R.includes(action.type, blockedList)) {
        console.info('Store Log: ', JSON.stringify(action));
    }
    next(action);
};

export default logger;
