import { AppState, SetUserState } from '@Types';
import * as R from 'ramda';
import { Action } from 'redux';
import ACTION_TYPES from '../ActionTypes';

export const userStateReducer = (state: AppState, action: Action): AppState => {
    if (!Object.values(ACTION_TYPES).includes((action as SetUserState).type)) {
        return state;
    }

    console.log('We are reducing now', state);

    return R.mergeDeepRight(state, {
        userState: {
            state: (action as SetUserState).type,
            ...(action as SetUserState).payload,
        },
    });
};
