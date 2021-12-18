import { SetUserState, UserState } from '@/Types';
import ACTION_TYPES from '../ActionTypes';

/**
 * Redux authentication actions for authenticated and unauthenticated
 */
export const setUserState = (state: ACTION_TYPES, payload?: UserState): SetUserState => ({
    type: state,
    payload: payload,
});
