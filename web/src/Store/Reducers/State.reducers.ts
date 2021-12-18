import { AppState, SetAppState } from '@/Types';
import * as R from 'ramda';
import { Action } from 'redux';
import ACTION_TYPES from '../ActionTypes';

export const appStateReducer = (state: AppState, action: Action): AppState => {
    if (!Object.values(ACTION_TYPES).includes((action as SetAppState).type)) {
        return state;
    }

    return R.mergeDeepRight(state, {
        profile: (action as SetAppState).payload,
    });
};
