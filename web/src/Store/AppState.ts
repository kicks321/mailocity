import { AppState } from '@/Types';
import ACTION_TYPES from './ActionTypes';

const DEFAULT_STATE: AppState = {
    // Global states
    _persist: undefined,

    // Authentication state
    userState: {
        state: ACTION_TYPES.UNAUTHENTICATED,
        profile: undefined,
    },
};

export default DEFAULT_STATE;
