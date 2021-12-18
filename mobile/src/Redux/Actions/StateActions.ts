import { SetAppState, StateData } from '@/Types';
import ACTION_TYPES from '../ActionTypes';

/**
 * Redux authentication actions for authenticated and unauthenticated
 */
export const setAuthState = (state: ACTION_TYPES, payload?: StateData): SetAppState => ({
    type: state,
    payload: payload,
});
