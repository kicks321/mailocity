import { AppState } from 'src/Types';
import ACTION_TYPES from './ActionTypes';

const DEFAULT_STATE: AppState = {
    // Global states
    _persist: undefined,

    // Authentication state
    authenticationState: ACTION_TYPES.UNAUTHENTICATED,
};

export default DEFAULT_STATE;
